import { inngest } from "./client";
import { db } from "@/lib/db";
import { entities, documents, clients, users, invoices, trustTransactions, matters } from "@/lib/db/schema";
import { eq, and, inArray, isNull, or, asc, gte, isNotNull } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { resend, FROM_EMAIL } from "@/lib/email/client";
import { buildDailyBriefingEmail } from "@/lib/email/templates";

const DAILY_BRIEFING_USER_BATCH_SIZE = 100;

export const dailyBriefing = inngest.createFunction(
  {
    id: "daily-briefing",
    // retries is intentionally left at the default (0 function-level retries).
    // Each step retries independently. The email send steps use a Resend
    // idempotency key so a step replay cannot produce duplicate emails.
    triggers: [
      { event: "briefing/send" }, // for manual/test triggers
      {
        cron: "0 9 * * 1-5", // 9am ET Mon-Fri (UTC offset handled by Inngest timezone setting)
      },
    ],
  },
  async ({ step }) => {
    // Fetch all users who have email set and a subscription (or are trialing)
    // Paginated to avoid loading unbounded rows into memory
    const activeUsers = await step.run("fetch-users", async () => {
      const rows: Array<{
        id: string;
        email: string | null;
        name: string | null;
        subscriptionStatus: string | null;
        emailDailyBriefing: boolean | null;
        hourlyRate: number | null;
      }> = [];
      let offset = 0;
      while (true) {
        const batch = await db
          .select({
            id: users.id,
            email: users.email,
            name: users.name,
            subscriptionStatus: users.subscriptionStatus,
            emailDailyBriefing: users.emailDailyBriefing,
            hourlyRate: users.hourlyRate,
          })
          .from(users)
          .where(
            or(
              inArray(users.subscriptionStatus, ["active", "trialing"]),
              isNull(users.subscriptionStatus), // include users before billing is set up
            )
          )
          .orderBy(asc(users.id))
          .limit(DAILY_BRIEFING_USER_BATCH_SIZE)
          .offset(offset);
        rows.push(...batch);
        if (batch.length < DAILY_BRIEFING_USER_BATCH_SIZE) break;
        offset += DAILY_BRIEFING_USER_BATCH_SIZE;
      }
      return rows;
    });

    // Stable timestamps for the entire run — computed once inside the step so
    // retries don't shift the window.
    const now = new Date();
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date(now);
    todayEnd.setHours(23, 59, 59, 999);
    const sevenDaysEnd = new Date(now);
    sevenDaysEnd.setDate(sevenDaysEnd.getDate() + 7);

    let sent = 0;
    let skipped = 0;

    for (const user of activeUsers) {
      if (!user.email || user.emailDailyBriefing === false) { skipped++; continue; }

      const allDeadlines = await step.run(`fetch-deadlines-${user.id}`, async () => {
        return db
          .select({
            id: entities.id,
            type: entities.type,
            value: entities.value,
            dueDate: entities.dueDate,
            documentTitle: documents.title,
            clientName: clients.name,
            matterId: sql<string | null>`coalesce(${documents.matterId}, ${entities.matterId})`,
            isManual: sql<boolean>`${entities.documentId} is null`,
          })
          .from(entities)
          .leftJoin(documents, eq(entities.documentId, documents.id))
          .leftJoin(clients, eq(sql`coalesce(${documents.clientId}, ${entities.clientId})`, clients.id))
          .where(
            and(
              eq(entities.userId, user.id),
              eq(entities.resolved, false),
              inArray(entities.type, ["deadline", "action_item"]),
            )
          )
          .orderBy(entities.dueDate)
          .limit(50);
      });

      const overdue = allDeadlines.filter(
        d => d.dueDate && new Date(d.dueDate) < todayStart
      );
      const today = allDeadlines.filter(
        d => d.dueDate && new Date(d.dueDate) >= todayStart && new Date(d.dueDate) <= todayEnd
      );
      const upcoming = allDeadlines.filter(
        d => d.dueDate && new Date(d.dueDate) > todayEnd && new Date(d.dueDate) <= sevenDaysEnd
      );

      // Fetch overdue invoices
      const overdueInvoiceRows = await step.run(`fetch-invoices-${user.id}`, async () => {
        return db
          .select({
            invoiceNumber: invoices.invoiceNumber,
            totalAmount: invoices.totalAmount,
            dueDate: invoices.dueDate,
            clientName: clients.name,
          })
          .from(invoices)
          .leftJoin(clients, eq(invoices.clientId, clients.id))
          .where(and(
            eq(invoices.userId, user.id),
            eq(invoices.status, "overdue"),
          ))
          .limit(5);
      });

      // Fetch negative trust balances
      const trustBalances = await step.run(`fetch-trust-${user.id}`, async () => {
        return db
          .select({
            clientId: trustTransactions.clientId,
            clientName: clients.name,
            balance: sql<number>`sum(${trustTransactions.amount})::int`,
          })
          .from(trustTransactions)
          .leftJoin(clients, eq(trustTransactions.clientId, clients.id))
          .where(eq(trustTransactions.userId, user.id))
          .groupBy(trustTransactions.clientId, clients.name)
          .having(sql`sum(${trustTransactions.amount}) < 0`);
      });

      // Fetch unbilled time (time entries + document billable minutes)
      const unbilledTimeRow = await step.run(`fetch-unbilled-${user.id}`, async () => {
        const result = await db.execute(sql`
          SELECT (
            coalesce((SELECT sum(minutes) FROM time_entries WHERE user_id = ${user.id} AND billed_at IS NULL), 0)
            + coalesce((SELECT sum(billable_minutes) FROM documents WHERE user_id = ${user.id} AND status = 'completed' AND billable_minutes > 0), 0)
          )::int AS total
        `);
        return (result.rows[0] as { total: number })?.total ?? 0;
      });

      const quietMattersRows = await step.run(`fetch-quiet-matters-${user.id}`, async () => {
        const thirtyDaysAgo = new Date(now);
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const activeMattersRows = await db
          .select({ id: matters.id, title: matters.title })
          .from(matters)
          .where(and(eq(matters.userId, user.id), eq(matters.status, "active")));

        if (activeMattersRows.length === 0) return [];

        const recentActivity = await db
          .selectDistinct({ matterId: documents.matterId })
          .from(documents)
          .where(
            and(
              eq(documents.userId, user.id),
              gte(documents.createdAt, thirtyDaysAgo),
              isNotNull(documents.matterId),
            )
          );

        const recentIds = new Set(recentActivity.map((d) => d.matterId));
        return activeMattersRows
          .filter((m) => !recentIds.has(m.id))
          .slice(0, 3)
          .map((m) => ({ title: m.title }));
      });

      // Skip if nothing to report
      const overdueInvoiceList = overdueInvoiceRows.map(i => ({
        invoiceNumber: i.invoiceNumber,
        clientName: i.clientName ?? null,
        totalAmount: i.totalAmount,
        daysPastDue: i.dueDate ? Math.floor((now.getTime() - new Date(i.dueDate).getTime()) / 86400000) : 0,
      }));
      const negativeTrustList = trustBalances.map(t => ({
        clientName: t.clientName ?? null,
        balance: t.balance,
      }));
      const unbilledHours = unbilledTimeRow / 60;

      if (overdue.length === 0 && today.length === 0 && upcoming.length === 0 &&
          overdueInvoiceList.length === 0 && negativeTrustList.length === 0 && unbilledHours < 1 &&
          quietMattersRows.length === 0) {
        skipped++;
        continue;
      }

      const { html, text } = buildDailyBriefingEmail({
        userName: user.name ?? user.email,
        todayDeadlines: today as Parameters<typeof buildDailyBriefingEmail>[0]["todayDeadlines"],
        upcomingDeadlines: upcoming as Parameters<typeof buildDailyBriefingEmail>[0]["upcomingDeadlines"],
        overdueDeadlines: overdue as Parameters<typeof buildDailyBriefingEmail>[0]["overdueDeadlines"],
        overdueInvoices: overdueInvoiceList,
        negativeTrustClients: negativeTrustList,
        unbilledHours,
        hourlyRate: user.hourlyRate ?? 400,
        quietMatters: quietMattersRows,
      });

      await step.run(`send-email-${user.id}`, async () => {
        // Idempotency key scoped to user + UTC date: if this step is replayed
        // on the same day (e.g. transient Inngest failure after Resend accepted
        // the message), Resend deduplicates the send and we don't double-email.
        const utcDate = now.toISOString().slice(0, 10); // "YYYY-MM-DD"
        const idempotencyKey = `daily-briefing:${user.id}:${utcDate}`;
        await resend.emails.send({
          from: FROM_EMAIL,
          to: user.email!,
          subject: `Your morning briefing${overdue.length > 0 ? ` ⚠️ ${overdue.length} overdue` : today.length > 0 ? ` — ${today.length} due today` : ""}`,
          html,
          text,
          headers: { "Idempotency-Key": idempotencyKey },
        });
      });

      sent++;
    }

    return { sent, skipped, total: activeUsers.length };
  }
);
