import { inngest } from "./client";
import { db } from "@/lib/db";
import { invoices, clients, users, matters } from "@/lib/db/schema";
import { and, eq, lt, isNotNull, inArray, asc } from "drizzle-orm";
import { resend, FROM_EMAIL } from "@/lib/email/client";
import { APP_URL } from "@/lib/stripe/client";

// Maximum rows fetched per page when scanning for overdue invoices.
const OVERDUE_PAGE_SIZE = 200;
// PostgreSQL IN clause degrades at very large sizes; chunk bulk updates.
const UPDATE_CHUNK_SIZE = 500;

export const markOverdueInvoices = inngest.createFunction(
  {
    id: "mark-overdue-invoices",
    triggers: [
      { event: "invoices/check-overdue" },
      { cron: "0 9 * * *" }, // Daily at 9am
    ],
  },
  async ({ step }) => {
    // Find sent invoices past due date — paginated to avoid loading every
    // overdue invoice ever into memory in a single unbounded query.
    const overdueList = await step.run("find-overdue", async () => {
      const now = new Date();
      const rows: Array<{
        id: string;
        invoiceNumber: string;
        totalAmount: number;
        dueDate: Date | null;
        clientEmail: string | null;
        clientName: string | null;
        matterTitle: string | null;
        userEmail: string | null;
        userId: string | null;
        firmName: string | null;
        userName: string | null;
      }> = [];
      let offset = 0;
      while (true) {
        const batch = await db
          .select({
            id: invoices.id,
            invoiceNumber: invoices.invoiceNumber,
            totalAmount: invoices.totalAmount,
            dueDate: invoices.dueDate,
            clientEmail: clients.email,
            clientName: clients.name,
            matterTitle: matters.title,
            userEmail: users.email,
            userId: users.id,
            firmName: users.firmName,
            userName: users.name,
          })
          .from(invoices)
          .leftJoin(clients, eq(invoices.clientId, clients.id))
          .leftJoin(users, eq(invoices.userId, users.id))
          .leftJoin(matters, eq(invoices.matterId, matters.id))
          .where(
            and(
              eq(invoices.status, "sent"),
              lt(invoices.dueDate, now),
              isNotNull(invoices.dueDate),
            )
          )
          .orderBy(asc(invoices.id))
          .limit(OVERDUE_PAGE_SIZE)
          .offset(offset);
        rows.push(...batch);
        if (batch.length < OVERDUE_PAGE_SIZE) break;
        offset += OVERDUE_PAGE_SIZE;
      }
      return rows;
    });

    if (overdueList.length === 0) return { markedOverdue: 0 };

    // Mark them all overdue — chunked to stay within safe IN-clause sizes.
    await step.run("mark-overdue", async () => {
      const ids = overdueList.map(i => i.id);
      for (let i = 0; i < ids.length; i += UPDATE_CHUNK_SIZE) {
        const chunk = ids.slice(i, i + UPDATE_CHUNK_SIZE);
        await db.update(invoices).set({ status: "overdue" }).where(inArray(invoices.id, chunk));
      }
    });

    // Send reminder emails to clients (where email available)
    let emailsSent = 0;
    for (const inv of overdueList) {
      if (!inv.clientEmail) continue;
      const firm = inv.firmName ?? inv.userName ?? "Your Lawyer";
      const total = (inv.totalAmount / 100).toFixed(2);
      const dueStr = inv.dueDate
        ? new Date(inv.dueDate).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })
        : "a past date";

      await step.run(`email-overdue-${inv.id}`, async () => {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: inv.clientEmail!,
          subject: `Overdue Invoice ${inv.invoiceNumber} — $${total} CAD`,
          html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="max-width:600px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
  <div style="background:#dc2626;padding:20px 28px;">
    <p style="margin:0;color:#fff;font-size:14px;font-weight:600;">Invoice Overdue — ${firm}</p>
  </div>
  <div style="padding:24px 28px;">
    <p style="margin:0 0 16px;font-size:14px;color:#111;">Dear ${inv.clientName ?? "Client"},</p>
    <p style="margin:0 0 16px;font-size:14px;color:#374151;">This is a reminder that invoice <strong>${inv.invoiceNumber}</strong>${inv.matterTitle ? ` for ${inv.matterTitle}` : ""} is now overdue.</p>
    <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:14px 16px;margin:0 0 16px;">
      <p style="margin:0;font-size:13px;color:#374151;">Amount due: <strong>$${total} CAD</strong></p>
      <p style="margin:4px 0 0;font-size:13px;color:#dc2626;">Due date: ${dueStr}</p>
    </div>
    <p style="margin:0 0 16px;font-size:14px;color:#374151;">Please arrange payment at your earliest convenience. If you have any questions, please contact ${firm} directly.</p>
    <p style="margin:0;font-size:12px;color:#9ca3af;">Sent via Atticus · AI Practice Intelligence</p>
  </div>
</div>
</body></html>`,
        });
      });
      emailsSent++;
    }

    // Notify lawyers — group overdue invoices by user ID (not email, to avoid
    // step ID collisions from email addresses containing special characters).
    const byUser: Record<string, typeof overdueList> = {};
    for (const inv of overdueList) {
      if (!inv.userEmail || !inv.userId) continue;
      const key = inv.userId;
      if (!byUser[key]) byUser[key] = [];
      byUser[key]!.push(inv);
    }

    for (const [userId, userInvoices] of Object.entries(byUser)) {
      const first = userInvoices[0]!;
      if (!first.userEmail) continue;
      const firm = first.firmName ?? first.userName ?? "Your firm";
      const rows = userInvoices.map(inv => {
        const total = (inv.totalAmount / 100).toFixed(2);
        const dueStr = inv.dueDate
          ? new Date(inv.dueDate).toLocaleDateString("en-CA", { month: "short", day: "numeric" })
          : "—";
        return `<tr>
          <td style="padding:7px 12px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#111;">${inv.invoiceNumber}</td>
          <td style="padding:7px 12px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#374151;">${inv.clientName ?? "—"}</td>
          <td style="padding:7px 12px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#374151;text-align:right;">$${total}</td>
          <td style="padding:7px 12px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#dc2626;white-space:nowrap;">${dueStr}</td>
        </tr>`;
      }).join("");

      // Step ID uses userId (UUID) — safe as a step key; email addresses can
      // contain '+' and other chars that may cause Inngest step ID issues.
      await step.run(`notify-lawyer-${userId}`, async () => {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: first.userEmail!,
          subject: `⚠️ ${userInvoices.length} invoice${userInvoices.length !== 1 ? "s" : ""} now overdue — Atticus`,
          html: `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="max-width:600px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
  <div style="background:#0f172a;padding:20px 28px;">
    <div style="color:#f8fafc;font-size:18px;font-weight:700;">Atticus</div>
    <div style="color:#94a3b8;font-size:12px;margin-top:2px;">Overdue invoice alert</div>
  </div>
  <div style="padding:24px 28px 0;">
    <p style="margin:0 0 16px;font-size:15px;color:#111;">
      ${userInvoices.length} invoice${userInvoices.length !== 1 ? "s have" : " has"} passed their due date and ${userInvoices.length !== 1 ? "have" : "has"} been marked overdue.
    </p>
    <table style="width:100%;border-collapse:collapse;border:1px solid #fee2e2;border-radius:6px;overflow:hidden;">
      <thead><tr style="background:#fff5f5;">
        <th style="padding:8px 12px;text-align:left;font-size:11px;color:#94a3b8;text-transform:uppercase;">Invoice</th>
        <th style="padding:8px 12px;text-align:left;font-size:11px;color:#94a3b8;text-transform:uppercase;">Client</th>
        <th style="padding:8px 12px;text-align:right;font-size:11px;color:#94a3b8;text-transform:uppercase;">Amount</th>
        <th style="padding:8px 12px;text-align:left;font-size:11px;color:#94a3b8;text-transform:uppercase;">Due</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div style="margin:20px 0 24px;">
      <a href="${APP_URL}/invoices" style="display:inline-block;background:#0f172a;color:#fff;text-decoration:none;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:500;">
        View Invoices →
      </a>
    </div>
  </div>
  <div style="border-top:1px solid #f0f0f0;padding:16px 28px;background:#f9fafb;">
    <p style="margin:0;font-size:12px;color:#9ca3af;">Atticus · ${firm}</p>
  </div>
</div>
</body></html>`,
        });
      });
    }

    return { markedOverdue: overdueList.length, emailsSent };
  }
);
