import { inngest } from "./client";
import { db } from "@/lib/db";
import { entities, documents, clients, users } from "@/lib/db/schema";
import { eq, and, inArray, isNull, or, gte, count } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { resend, FROM_EMAIL } from "@/lib/email/client";
import { APP_URL } from "@/lib/stripe/client";

export const weeklyDigest = inngest.createFunction(
  {
    id: "weekly-digest",
    triggers: [
      { event: "digest/weekly" },
      {
        cron: "0 17 * * 0", // Sunday 5pm ET (UTC offset handled by timezone)
      },
    ],
  },
  async ({ step }) => {
    const activeUsers = await step.run("fetch-users", async () => {
      return db
        .select({
          id: users.id,
          email: users.email,
          name: users.name,
          subscriptionStatus: users.subscriptionStatus,
          emailWeeklyDigest: users.emailWeeklyDigest,
        })
        .from(users)
        .where(
          or(
            inArray(users.subscriptionStatus, ["active", "trialing"]),
            isNull(users.subscriptionStatus),
          )!
        );
    });

    const nextWeekEnd = new Date();
    nextWeekEnd.setDate(nextWeekEnd.getDate() + 7);

    let sent = 0;

    for (const user of activeUsers) {
      if (!user.email || user.emailWeeklyDigest === false) continue;

      const stats = await step.run(`stats-${user.id}`, async () => {
        const [docCount] = await db
          .select({ count: count() })
          .from(documents)
          .where(and(
            eq(documents.userId, user.id),
            gte(documents.createdAt, new Date(Date.now() - 7 * 86400000))
          ));

        const openDeadlines = await db
          .select({
            id: entities.id,
            type: entities.type,
            value: entities.value,
            dueDate: entities.dueDate,
            clientName: clients.name,
          })
          .from(entities)
          .leftJoin(documents, eq(entities.documentId, documents.id))
          .leftJoin(clients, eq(sql`coalesce(${documents.clientId}, ${entities.clientId})`, clients.id))
          .where(and(
            eq(entities.userId, user.id),
            eq(entities.resolved, false),
            inArray(entities.type, ["deadline", "action_item"]),
          ))
          .orderBy(entities.dueDate)
          .limit(20);

        return {
          docsThisWeek: docCount?.count ?? 0,
          openDeadlines,
        };
      });

      const { docsThisWeek, openDeadlines } = stats;

      const overdue = openDeadlines.filter(d => d.dueDate && new Date(d.dueDate) < new Date());
      const upcoming = openDeadlines.filter(d => d.dueDate && new Date(d.dueDate) >= new Date() && new Date(d.dueDate) <= nextWeekEnd);

      // Skip if nothing to report
      if (docsThisWeek === 0 && overdue.length === 0 && upcoming.length === 0) continue;

      const firstName = user.name?.split(" ")[0] ?? user.name ?? "there";

      const deadlineRows = (items: typeof openDeadlines) =>
        items.map(d => `
          <tr>
            <td style="padding: 7px 12px; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #111;">${d.value}</td>
            <td style="padding: 7px 12px; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #666; white-space: nowrap;">${d.clientName ?? "—"}</td>
            <td style="padding: 7px 12px; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #666; white-space: nowrap;">${d.dueDate ? new Date(d.dueDate).toLocaleDateString("en-CA", { month: "short", day: "numeric" }) : "No date"}</td>
          </tr>`).join("");

      const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="max-width:600px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
  <div style="background:#0f172a;padding:24px 32px;">
    <div style="color:#f8fafc;font-size:20px;font-weight:700;letter-spacing:-0.5px;">Atticus</div>
    <div style="color:#94a3b8;font-size:13px;margin-top:2px;">Your weekly digest</div>
  </div>
  <div style="padding:28px 32px 0;">
    <p style="margin:0;font-size:15px;color:#374151;">Hi ${firstName} — here's your week ahead.</p>

    <div style="margin:20px 0;display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
      <div style="background:#f8fafc;border-radius:6px;padding:16px;text-align:center;">
        <div style="font-size:28px;font-weight:700;color:#0f172a;">${docsThisWeek}</div>
        <div style="font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;margin-top:4px;">Docs this week</div>
      </div>
      <div style="background:#fef2f2;border-radius:6px;padding:16px;text-align:center;">
        <div style="font-size:28px;font-weight:700;color:#dc2626;">${overdue.length}</div>
        <div style="font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;margin-top:4px;">Overdue</div>
      </div>
      <div style="background:#eff6ff;border-radius:6px;padding:16px;text-align:center;">
        <div style="font-size:28px;font-weight:700;color:#2563eb;">${upcoming.length}</div>
        <div style="font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;margin-top:4px;">Due next 7 days</div>
      </div>
    </div>

    ${overdue.length > 0 ? `
    <h3 style="margin:20px 0 10px;font-size:13px;font-weight:600;color:#dc2626;text-transform:uppercase;letter-spacing:0.5px;">⚠️ Overdue</h3>
    <table style="width:100%;border-collapse:collapse;border:1px solid #fee2e2;border-radius:6px;overflow:hidden;">
      <thead><tr style="background:#fff5f5;">
        <th style="padding:8px 12px;text-align:left;font-size:11px;color:#94a3b8;text-transform:uppercase;">Item</th>
        <th style="padding:8px 12px;text-align:left;font-size:11px;color:#94a3b8;text-transform:uppercase;">Client</th>
        <th style="padding:8px 12px;text-align:left;font-size:11px;color:#94a3b8;text-transform:uppercase;">Due</th>
      </tr></thead>
      <tbody>${deadlineRows(overdue)}</tbody>
    </table>` : ""}

    ${upcoming.length > 0 ? `
    <h3 style="margin:20px 0 10px;font-size:13px;font-weight:600;color:#0369a1;text-transform:uppercase;letter-spacing:0.5px;">📅 Next 7 Days</h3>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e0f2fe;border-radius:6px;overflow:hidden;">
      <thead><tr style="background:#f0f9ff;">
        <th style="padding:8px 12px;text-align:left;font-size:11px;color:#94a3b8;text-transform:uppercase;">Item</th>
        <th style="padding:8px 12px;text-align:left;font-size:11px;color:#94a3b8;text-transform:uppercase;">Client</th>
        <th style="padding:8px 12px;text-align:left;font-size:11px;color:#94a3b8;text-transform:uppercase;">Due</th>
      </tr></thead>
      <tbody>${deadlineRows(upcoming)}</tbody>
    </table>` : ""}

    ${overdue.length === 0 && upcoming.length === 0 ? `
    <div style="text-align:center;padding:24px;background:#f0fdf4;border-radius:8px;margin:20px 0;">
      <div style="font-size:24px;">✅</div>
      <p style="margin:8px 0 0;font-size:14px;color:#166534;font-weight:500;">Clear week ahead — no overdue or upcoming deadlines.</p>
    </div>` : ""}
  </div>

  <div style="padding:0 32px 32px;">
    <a href="${APP_URL}/deadlines" style="display:inline-block;background:#0f172a;color:#fff;text-decoration:none;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:500;margin-top:16px;">
      View All Deadlines →
    </a>
  </div>

  <div style="border-top:1px solid #f0f0f0;padding:16px 32px;background:#f9fafb;">
    <p style="margin:0;font-size:12px;color:#9ca3af;">
      Atticus Weekly Digest · <a href="${APP_URL}/settings" style="color:#6b7280;">Manage preferences</a>
    </p>
  </div>
</div>
</body></html>`;

      await step.run(`send-${user.id}`, async () => {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: user.email!,
          subject: `Your week ahead${overdue.length > 0 ? ` — ${overdue.length} overdue` : upcoming.length > 0 ? ` — ${upcoming.length} upcoming deadline${upcoming.length !== 1 ? "s" : ""}` : " — clear schedule"}`,
          html,
          text: `Hi ${firstName},\n\nYour week ahead:\n- ${docsThisWeek} documents processed this week\n- ${overdue.length} overdue items\n- ${upcoming.length} due in the next 7 days\n\nView details: ${APP_URL}/deadlines`,
        });
      });

      sent++;
    }

    return { sent, total: activeUsers.length };
  }
);
