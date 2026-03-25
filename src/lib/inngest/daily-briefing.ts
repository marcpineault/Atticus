import { inngest } from "./client";
import { db } from "@/lib/db";
import { entities, documents, clients, users, invoices, trustTransactions } from "@/lib/db/schema";
import { eq, and, inArray, isNull, or } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { resend, FROM_EMAIL } from "@/lib/email/client";
import { buildDailyBriefingEmail } from "@/lib/email/templates";

export const dailyBriefing = inngest.createFunction(
  {
    id: "daily-briefing",
    triggers: [
      { event: "briefing/send" }, // for manual/test triggers
      {
        cron: "0 9 * * 1-5", // 9am ET Mon-Fri (UTC offset handled by Inngest timezone setting)
      },
    ],
  },
  async ({ step }) => {
    // Fetch all users who have email set and a subscription (or are trialing)
    const activeUsers = await step.run("fetch-users", async () => {
      return db
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
          )!
        );
    });

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
          overdueInvoiceList.length === 0 && negativeTrustList.length === 0 && unbilledHours < 1) {
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
      });

      await step.run(`send-email-${user.id}`, async () => {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: user.email!,
          subject: `Your morning briefing${overdue.length > 0 ? ` ⚠️ ${overdue.length} overdue` : today.length > 0 ? ` — ${today.length} due today` : ""}`,
          html,
          text,
        });
      });

      sent++;
    }

    return { sent, skipped, total: activeUsers.length };
  }
);
