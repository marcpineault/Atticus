import { APP_URL } from "@/lib/stripe/client";

export function buildWelcomeEmail(params: { userName: string; intakeEmail: string }) {
  const { userName, intakeEmail } = params;
  const firstName = userName.split(" ")[0] ?? userName;
  const appUrl = APP_URL;

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin: 0; padding: 0; background: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <div style="max-width: 600px; margin: 24px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
    <div style="background: #0f172a; padding: 24px 32px;">
      <div style="color: #f8fafc; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">Atticus</div>
      <div style="color: #94a3b8; font-size: 13px; margin-top: 2px;">Your AI executive assistant</div>
    </div>
    <div style="padding: 28px 32px;">
      <p style="margin: 0 0 16px; font-size: 16px; color: #111; font-weight: 600;">Welcome, ${firstName}.</p>
      <p style="margin: 0 0 16px; font-size: 14px; color: #374151; line-height: 1.6;">
        Atticus is ready to work. Here's what to do first:
      </p>
      <ol style="margin: 0 0 24px; padding-left: 20px; font-size: 14px; color: #374151; line-height: 2;">
        <li><strong>Upload a document</strong> — email, meeting notes, or contract — to start building your practice database.</li>
        <li><strong>Add your first client</strong> to organize matters and documents.</li>
        <li><strong>Search anything</strong> using natural language: "What were the payment terms in the Johnson matter?"</li>
      </ol>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0 0 8px; font-size: 13px; font-weight: 600; color: #374151;">Your personal email intake address:</p>
        <code style="font-size: 13px; color: #0f172a; background: #e2e8f0; padding: 4px 8px; border-radius: 4px;">${intakeEmail}</code>
        <p style="margin: 10px 0 0; font-size: 12px; color: #64748b;">
          Forward any client email here and Atticus will process, summarize, and extract deadlines automatically.
        </p>
      </div>
      <a href="${appUrl}/dashboard" style="display: inline-block; background: #0f172a; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500;">
        Open Atticus →
      </a>
    </div>
    <div style="border-top: 1px solid #f0f0f0; padding: 16px 32px; background: #f9fafb;">
      <p style="margin: 0; font-size: 12px; color: #9ca3af;">
        Atticus · AI Practice Intelligence for Ontario Lawyers ·
        <a href="${appUrl}/settings" style="color: #6b7280;">Manage preferences</a>
      </p>
    </div>
  </div>
</body>
</html>`;

  const text = [
    `Welcome, ${firstName}.`,
    "",
    "Atticus is ready. Here's what to do first:",
    "1. Upload a document (email, meeting notes, contract)",
    "2. Add your first client",
    "3. Search anything using natural language",
    "",
    `Your email intake address: ${intakeEmail}`,
    "Forward any client email here and Atticus will process it automatically.",
    "",
    `Open Atticus: ${appUrl}/dashboard`,
  ].join("\n");

  return { html, text };
}

export function buildDeadlineAlertEmail(params: {
  userName: string;
  todayDeadlines: { value: string; clientName: string | null; documentTitle: string | null }[];
  tomorrowDeadlines: { value: string; clientName: string | null; documentTitle: string | null }[];
}) {
  const { userName, todayDeadlines, tomorrowDeadlines } = params;
  const firstName = userName.split(" ")[0] ?? userName;
  const appUrl = APP_URL;
  const total = todayDeadlines.length + tomorrowDeadlines.length;

  const rows = (items: typeof todayDeadlines, label: string, color: string) =>
    items.length > 0 ? `
    <div style="margin-bottom: 20px;">
      <h3 style="margin: 0 0 10px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: ${color};">${label} (${items.length})</h3>
      ${items.map(d => `
        <div style="padding: 10px 14px; background: #f9fafb; border-left: 3px solid ${color}; border-radius: 0 4px 4px 0; margin-bottom: 8px;">
          <p style="margin: 0; font-size: 14px; font-weight: 500; color: #111;">${d.value}</p>
          ${d.clientName ? `<p style="margin: 3px 0 0; font-size: 12px; color: #64748b;">${d.clientName}</p>` : ""}
        </div>`).join("")}
    </div>` : "";

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin: 0; padding: 0; background: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <div style="max-width: 600px; margin: 24px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
    <div style="background: #7f1d1d; padding: 24px 32px;">
      <div style="color: #fef2f2; font-size: 20px; font-weight: 700;">Atticus</div>
      <div style="color: #fca5a5; font-size: 13px; margin-top: 2px;">⚠️ Deadline alert — action required</div>
    </div>
    <div style="padding: 24px 32px;">
      <p style="margin: 0 0 20px; font-size: 15px; color: #374151;">
        ${firstName}, you have <strong>${total} deadline${total !== 1 ? "s" : ""}</strong> in the next 24 hours.
      </p>
      ${rows(todayDeadlines, "Due Today", "#dc2626")}
      ${rows(tomorrowDeadlines, "Due Tomorrow", "#ea580c")}
      <a href="${appUrl}/deadlines" style="display: inline-block; background: #7f1d1d; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500;">
        View All Deadlines →
      </a>
    </div>
    <div style="border-top: 1px solid #f0f0f0; padding: 16px 32px; background: #f9fafb;">
      <p style="margin: 0; font-size: 12px; color: #9ca3af;">Atticus · <a href="${appUrl}/settings" style="color: #6b7280;">Manage preferences</a></p>
    </div>
  </div>
</body>
</html>`;

  const text = [
    `${firstName}, you have ${total} deadline(s) in the next 24 hours.`,
    "",
    todayDeadlines.length > 0 ? `TODAY:\n${todayDeadlines.map(d => `- ${d.value} [${d.clientName ?? "No client"}]`).join("\n")}` : "",
    tomorrowDeadlines.length > 0 ? `TOMORROW:\n${tomorrowDeadlines.map(d => `- ${d.value} [${d.clientName ?? "No client"}]`).join("\n")}` : "",
    "",
    `View deadlines: ${appUrl}/deadlines`,
  ].filter(Boolean).join("\n");

  return { html, text };
}


interface Deadline {
  id: string;
  value: string;
  type: "deadline" | "action_item";
  dueDate: Date | null;
  documentTitle: string | null;
  clientName: string | null;
  matterId: string | null;
  isManual: boolean;
}

function formatDate(d: Date | null): string {
  if (!d) return "No date set";
  return new Date(d).toLocaleDateString("en-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function urgencyLabel(dueDate: Date | null): string {
  if (!dueDate) return "";
  const days = Math.ceil((new Date(dueDate).getTime() - Date.now()) / 86400000);
  if (days < 0) return " ⚠️ OVERDUE";
  if (days === 0) return " 🔴 TODAY";
  if (days === 1) return " 🟠 TOMORROW";
  if (days <= 3) return ` 🟡 ${days} days`;
  return ` (${days} days)`;
}

export function buildDailyBriefingEmail(params: {
  userName: string;
  todayDeadlines: Deadline[];
  upcomingDeadlines: Deadline[];
  overdueDeadlines: Deadline[];
  overdueInvoices?: Array<{ invoiceNumber: string; clientName: string | null; totalAmount: number; daysPastDue: number }>;
  unbilledHours?: number;
  hourlyRate?: number;
  negativeTrustClients?: Array<{ clientName: string | null; balance: number }>;
  quietMatters?: Array<{ title: string }>;
}) {
  const {
    userName, todayDeadlines, upcomingDeadlines, overdueDeadlines,
    overdueInvoices = [], unbilledHours = 0, hourlyRate = 400, negativeTrustClients = [],
    quietMatters = [],
  } = params;
  const firstName = userName.split(" ")[0] ?? userName;
  const appUrl = APP_URL;

  const deadlineRow = (d: Deadline) => `
    <tr>
      <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0;">
        <strong style="color: #111;">${d.value}</strong>
        ${d.clientName ? `<br><span style="color: #666; font-size: 12px;">${d.clientName}</span>` : ""}
        ${d.documentTitle ? `<br><span style="color: #888; font-size: 11px;">From: ${d.documentTitle}</span>` : ""}
      </td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; white-space: nowrap; color: #666; font-size: 13px;">
        ${formatDate(d.dueDate)}${urgencyLabel(d.dueDate)}
      </td>
    </tr>`;

  const allCount = todayDeadlines.length + upcomingDeadlines.length + overdueDeadlines.length;

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin: 0; padding: 0; background: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <div style="max-width: 600px; margin: 24px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background: #0f172a; padding: 24px 32px;">
      <div style="color: #f8fafc; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">Atticus</div>
      <div style="color: #94a3b8; font-size: 13px; margin-top: 2px;">Your morning briefing</div>
    </div>

    <!-- Greeting -->
    <div style="padding: 24px 32px 0;">
      <p style="margin: 0; font-size: 15px; color: #374151;">Good morning, ${firstName}.</p>
      ${allCount === 0
        ? `<p style="color: #6b7280; font-size: 14px; margin-top: 8px;">No deadlines or action items today. Clear schedule.</p>`
        : `<p style="color: #6b7280; font-size: 14px; margin-top: 8px;">You have <strong>${allCount} item${allCount !== 1 ? "s" : ""}</strong> requiring attention.</p>`}
    </div>

    ${overdueDeadlines.length > 0 ? `
    <!-- Overdue -->
    <div style="padding: 20px 32px 0;">
      <h3 style="margin: 0 0 12px; font-size: 13px; font-weight: 600; color: #dc2626; text-transform: uppercase; letter-spacing: 0.5px;">⚠️ Overdue (${overdueDeadlines.length})</h3>
      <table style="width: 100%; border-collapse: collapse; border: 1px solid #fee2e2; border-radius: 6px; overflow: hidden;">
        ${overdueDeadlines.map(deadlineRow).join("")}
      </table>
    </div>` : ""}

    ${todayDeadlines.length > 0 ? `
    <!-- Today -->
    <div style="padding: 20px 32px 0;">
      <h3 style="margin: 0 0 12px; font-size: 13px; font-weight: 600; color: #ea580c; text-transform: uppercase; letter-spacing: 0.5px;">🔴 Due Today (${todayDeadlines.length})</h3>
      <table style="width: 100%; border-collapse: collapse; border: 1px solid #fed7aa; border-radius: 6px; overflow: hidden;">
        ${todayDeadlines.map(deadlineRow).join("")}
      </table>
    </div>` : ""}

    ${upcomingDeadlines.length > 0 ? `
    <!-- Upcoming -->
    <div style="padding: 20px 32px 0;">
      <h3 style="margin: 0 0 12px; font-size: 13px; font-weight: 600; color: #0369a1; text-transform: uppercase; letter-spacing: 0.5px;">📅 Next 7 Days (${upcomingDeadlines.length})</h3>
      <table style="width: 100%; border-collapse: collapse; border: 1px solid #e0f2fe; border-radius: 6px; overflow: hidden;">
        ${upcomingDeadlines.map(deadlineRow).join("")}
      </table>
    </div>` : ""}

    ${overdueInvoices.length > 0 ? `
    <!-- Overdue Invoices -->
    <div style="padding: 20px 32px 0;">
      <h3 style="margin: 0 0 12px; font-size: 13px; font-weight: 600; color: #9333ea; text-transform: uppercase; letter-spacing: 0.5px;">💰 Overdue Invoices (${overdueInvoices.length})</h3>
      <table style="width: 100%; border-collapse: collapse; border: 1px solid #f3e8ff; border-radius: 6px; overflow: hidden;">
        ${overdueInvoices.map(inv => `
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0;">
            <strong style="color: #111;">${inv.invoiceNumber}</strong>
            ${inv.clientName ? `<br><span style="color: #666; font-size: 12px;">${inv.clientName}</span>` : ""}
          </td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; white-space: nowrap; text-align: right;">
            <span style="color: #9333ea; font-weight: 600;">$${(inv.totalAmount / 100).toLocaleString("en-CA", { minimumFractionDigits: 2 })}</span>
            <br><span style="color: #888; font-size: 11px;">${inv.daysPastDue} days overdue</span>
          </td>
        </tr>`).join("")}
      </table>
    </div>` : ""}

    ${negativeTrustClients.length > 0 ? `
    <!-- Trust Alerts -->
    <div style="padding: 20px 32px 0;">
      <h3 style="margin: 0 0 12px; font-size: 13px; font-weight: 600; color: #dc2626; text-transform: uppercase; letter-spacing: 0.5px;">⚠️ Trust Balance Alert</h3>
      <div style="background: #fff7f7; border: 1px solid #fecaca; border-radius: 6px; padding: 12px 16px;">
        ${negativeTrustClients.map(c => `
        <div style="display: flex; justify-content: space-between; padding: 4px 0; font-size: 13px;">
          <span>${c.clientName ?? "Unknown client"}</span>
          <span style="color: #dc2626; font-weight: 600;">-$${Math.abs(c.balance / 100).toLocaleString("en-CA", { minimumFractionDigits: 2 })}</span>
        </div>`).join("")}
        <p style="margin: 8px 0 0; font-size: 12px; color: #b91c1c;">Negative trust balances require immediate attention under LSO By-Law 9.</p>
      </div>
    </div>` : ""}

    ${unbilledHours >= 1 ? `
    <!-- Unbilled Time -->
    <div style="padding: 20px 32px 0;">
      <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 12px 16px;">
        <p style="margin: 0; font-size: 13px; color: #92400e;">
          💡 You have <strong>${unbilledHours.toFixed(1)} hrs</strong> of unbilled manual time entries
          (~<strong>$${(unbilledHours * hourlyRate).toLocaleString("en-CA", { maximumFractionDigits: 0 })} CAD</strong> at $${hourlyRate}/hr).
          Consider generating invoices from the <a href="${appUrl}/billing" style="color: #b45309;">Billing page</a>.
        </p>
      </div>
    </div>` : ""}

    ${quietMatters.length > 0 ? `
    <!-- Quiet Matters -->
    <div style="padding: 20px 32px 0;">
      <h3 style="margin: 0 0 12px; font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">📁 No Activity in 30+ Days (${quietMatters.length})</h3>
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px 16px;">
        ${quietMatters.map(m => `<p style="margin: 4px 0; font-size: 13px; color: #374151;">· ${m.title}</p>`).join("")}
        <p style="margin: 8px 0 0; font-size: 12px; color: #9ca3af;">These matters have had no new documents uploaded recently.</p>
      </div>
    </div>` : ""}

    <!-- CTA -->
    <div style="padding: 24px 32px 32px;">
      <a href="${appUrl}/today" style="display: inline-block; background: #0f172a; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500;">
        Open Today's Briefing →
      </a>
    </div>

    <!-- Footer -->
    <div style="border-top: 1px solid #f0f0f0; padding: 16px 32px; background: #f9fafb;">
      <p style="margin: 0; font-size: 12px; color: #9ca3af;">
        Atticus · AI Practice Intelligence for Ontario Lawyers ·
        <a href="${appUrl}/settings" style="color: #6b7280;">Manage email preferences</a>
      </p>
    </div>
  </div>
</body>
</html>`;

  const text = [
    `Good morning, ${firstName}.`,
    "",
    overdueDeadlines.length > 0 ? `OVERDUE (${overdueDeadlines.length}):\n${overdueDeadlines.map(d => `- ${d.value} [${d.clientName ?? "No client"}] — OVERDUE`).join("\n")}` : "",
    todayDeadlines.length > 0 ? `DUE TODAY (${todayDeadlines.length}):\n${todayDeadlines.map(d => `- ${d.value} [${d.clientName ?? "No client"}]`).join("\n")}` : "",
    upcomingDeadlines.length > 0 ? `NEXT 7 DAYS (${upcomingDeadlines.length}):\n${upcomingDeadlines.map(d => `- ${d.value} [${d.clientName ?? "No client"}] — ${formatDate(d.dueDate)}`).join("\n")}` : "",
    overdueInvoices.length > 0 ? `OVERDUE INVOICES (${overdueInvoices.length}):\n${overdueInvoices.map(i => `- ${i.invoiceNumber} [${i.clientName ?? "Unknown"}] — $${(i.totalAmount / 100).toFixed(2)} (${i.daysPastDue}d overdue)`).join("\n")}` : "",
    negativeTrustClients.length > 0 ? `TRUST BALANCE ALERTS:\n${negativeTrustClients.map(c => `- ${c.clientName ?? "Unknown"}: -$${Math.abs(c.balance / 100).toFixed(2)}`).join("\n")}` : "",
    unbilledHours >= 1 ? `UNBILLED TIME: ${unbilledHours.toFixed(1)} hrs — consider generating invoices` : "",
    "",
    `Open Atticus: ${appUrl}/today`,
  ].filter(Boolean).join("\n");

  return { html, text };
}

export function buildDocumentReadyEmail(params: {
  userName: string;
  documentTitle: string;
  documentId: string;
  documentType: string;
  deadlinesFound: number;
  actionItemsFound: number;
  summary: string | null;
}) {
  const { userName, documentTitle, documentId, documentType, deadlinesFound, actionItemsFound, summary } = params;
  const firstName = userName.split(" ")[0] ?? userName;
  const appUrl = APP_URL;
  const typeLabel: Record<string, string> = {
    document: "Document",
    meeting: "Meeting Transcript",
    voice_note: "Voice Note",
    text_message: "Text Thread",
    email: "Email",
    other: "File",
  };

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin: 0; padding: 0; background: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <div style="max-width: 600px; margin: 24px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
    <div style="background: #0f172a; padding: 24px 32px;">
      <div style="color: #f8fafc; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">Atticus</div>
      <div style="color: #94a3b8; font-size: 13px; margin-top: 2px;">Document processed</div>
    </div>
    <div style="padding: 28px 32px 0;">
      <p style="margin: 0 0 4px; font-size: 15px; color: #374151;">Hi ${firstName},</p>
      <p style="margin: 8px 0 0; font-size: 14px; color: #6b7280;">Your ${typeLabel[documentType] ?? "document"} has been processed.</p>
      <div style="margin: 20px 0; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px;">
        <div style="font-size: 15px; font-weight: 600; color: #111;">${documentTitle}</div>
        ${deadlinesFound > 0 || actionItemsFound > 0 ? `
        <div style="margin-top: 12px; display: flex; gap: 12px;">
          ${deadlinesFound > 0 ? `<span style="display: inline-block; padding: 3px 10px; background: #fef2f2; color: #dc2626; border-radius: 4px; font-size: 12px; font-weight: 500;">${deadlinesFound} deadline${deadlinesFound !== 1 ? "s" : ""} found</span>` : ""}
          ${actionItemsFound > 0 ? `<span style="display: inline-block; padding: 3px 10px; background: #eff6ff; color: #2563eb; border-radius: 4px; font-size: 12px; font-weight: 500;">${actionItemsFound} action item${actionItemsFound !== 1 ? "s" : ""}</span>` : ""}
        </div>` : `<div style="margin-top: 8px; font-size: 13px; color: #94a3b8;">No deadlines or action items found.</div>`}
      </div>
      ${summary ? `
      <div style="margin-bottom: 20px;">
        <div style="font-size: 12px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Summary</div>
        <p style="margin: 0; font-size: 14px; color: #374151; line-height: 1.6;">${summary.slice(0, 400)}${summary.length > 400 ? "…" : ""}</p>
      </div>` : ""}
    </div>
    <div style="padding: 0 32px 32px;">
      <a href="${appUrl}/documents/${documentId}" style="display: inline-block; background: #0f172a; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500;">
        View Document →
      </a>
    </div>
    <div style="border-top: 1px solid #f0f0f0; padding: 16px 32px; background: #f9fafb;">
      <p style="margin: 0; font-size: 12px; color: #9ca3af;">Atticus · AI Practice Intelligence for Ontario Lawyers</p>
    </div>
  </div>
</body>
</html>`;

  const text = [
    `Hi ${firstName},`,
    "",
    `Your ${typeLabel[documentType] ?? "document"} "${documentTitle}" has been processed.`,
    deadlinesFound > 0 ? `${deadlinesFound} deadline(s) found.` : "",
    actionItemsFound > 0 ? `${actionItemsFound} action item(s) found.` : "",
    summary ? `\nSummary: ${summary.slice(0, 300)}` : "",
    "",
    `View document: ${appUrl}/documents/${documentId}`,
  ].filter(Boolean).join("\n");

  return { html, text };
}
