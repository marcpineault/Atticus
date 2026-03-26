import { inngest } from "./client";
import { db } from "@/lib/db";
import { entities, documents, clients, users } from "@/lib/db/schema";
import { eq, and, inArray, isNull, or, gte, lt, asc } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { resend, FROM_EMAIL } from "@/lib/email/client";
import { buildDeadlineAlertEmail } from "@/lib/email/templates";

const ESCALATION_USER_BATCH_SIZE = 100;

export const deadlineEscalation = inngest.createFunction(
  {
    id: "deadline-escalation",
    // No function-level retries: email send steps carry a Resend idempotency
    // key, so step-level replays are safe, but a full function re-run after
    // partial completion could re-send alerts to users processed earlier.
    triggers: [
      { event: "deadline/escalation" },
      {
        cron: "0 18 * * 1-5", // Mon-Fri at 6pm ET
      },
    ],
  },
  async ({ step }) => {
    // Paginated user fetch — stable order prevents skips/duplicates across pages.
    const activeUsers = await step.run("fetch-users", async () => {
      const rows: Array<{
        id: string;
        email: string | null;
        name: string | null;
        emailDailyBriefing: boolean | null;
        subscriptionStatus: string | null;
      }> = [];
      let offset = 0;
      while (true) {
        const batch = await db
          .select({
            id: users.id,
            email: users.email,
            name: users.name,
            emailDailyBriefing: users.emailDailyBriefing,
            subscriptionStatus: users.subscriptionStatus,
          })
          .from(users)
          .where(
            or(
              inArray(users.subscriptionStatus, ["active", "trialing"]),
              isNull(users.subscriptionStatus),
            )
          )
          .orderBy(asc(users.id))
          .limit(ESCALATION_USER_BATCH_SIZE)
          .offset(offset);
        rows.push(...batch);
        if (batch.length < ESCALATION_USER_BATCH_SIZE) break;
        offset += ESCALATION_USER_BATCH_SIZE;
      }
      return rows;
    });

    // Stable timestamps for the entire run.
    const now = new Date();
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date(now);
    todayEnd.setHours(23, 59, 59, 999);
    const tomorrowEnd = new Date(todayEnd);
    tomorrowEnd.setDate(tomorrowEnd.getDate() + 1);
    const threeDaysEnd = new Date(todayEnd);
    threeDaysEnd.setDate(threeDaysEnd.getDate() + 3);

    let sent = 0;

    for (const user of activeUsers) {
      if (!user.email) continue;
      // Reuse the daily briefing preference for escalation alerts
      if (user.emailDailyBriefing === false) continue;

      const deadlines = await step.run(`deadlines-${user.id}`, async () => {
        return db
          .select({
            id: entities.id,
            value: entities.value,
            type: entities.type,
            dueDate: entities.dueDate,
            clientName: clients.name,
            documentTitle: documents.title,
          })
          .from(entities)
          .leftJoin(documents, eq(entities.documentId, documents.id))
          .leftJoin(clients, eq(sql`coalesce(${documents.clientId}, ${entities.clientId})`, clients.id))
          .where(and(
            eq(entities.userId, user.id),
            eq(entities.resolved, false),
            eq(entities.type, "deadline"),
            gte(entities.dueDate, todayStart),
            lt(entities.dueDate, threeDaysEnd),
          ))
          .orderBy(entities.dueDate)
          .limit(20);
      });

      if (deadlines.length === 0) continue;

      const todayDeadlines = deadlines.filter(d => d.dueDate && new Date(d.dueDate) <= todayEnd);
      const tomorrowDeadlines = deadlines.filter(d => d.dueDate && new Date(d.dueDate) > todayEnd && new Date(d.dueDate) <= tomorrowEnd);
      const upcomingDeadlines = deadlines.filter(d => d.dueDate && new Date(d.dueDate) > tomorrowEnd);

      await step.run(`send-alert-${user.id}`, async () => {
        const { html, text } = buildDeadlineAlertEmail({
          userName: user.name ?? user.email ?? "there",
          todayDeadlines: todayDeadlines.map(d => ({
            value: d.value,
            clientName: d.clientName ?? null,
            documentTitle: d.documentTitle ?? null,
          })),
          tomorrowDeadlines: [
            ...tomorrowDeadlines,
            ...upcomingDeadlines,
          ].map(d => ({
            value: d.value,
            clientName: d.clientName ?? null,
            documentTitle: d.documentTitle ?? null,
          })),
        });

        const urgentCount = todayDeadlines.length;
        // Idempotency key scoped to user + UTC date so step replays on the
        // same day don't produce duplicate alert emails.
        const utcDate = now.toISOString().slice(0, 10);
        const idempotencyKey = `deadline-escalation:${user.id}:${utcDate}`;
        await resend.emails.send({
          from: FROM_EMAIL,
          to: user.email!,
          subject: urgentCount > 0
            ? `⚠️ ${urgentCount} deadline${urgentCount !== 1 ? "s" : ""} due today + ${deadlines.length - urgentCount} in next 3 days — Atticus`
            : `📅 ${deadlines.length} deadline${deadlines.length !== 1 ? "s" : ""} due in the next 3 days — Atticus`,
          html,
          text,
          headers: { "Idempotency-Key": idempotencyKey },
        });
      });

      sent++;
    }

    return { sent };
  }
);
