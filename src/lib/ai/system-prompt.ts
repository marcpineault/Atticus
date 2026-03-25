// src/lib/ai/system-prompt.ts
import type { RetrievedChunk } from "./retrieve";

export interface PracticeContext {
  overdueDeadlines: Array<{ title: string; clientName: string | null; matterTitle: string | null; dueDate: string }>;
  dueTodayDeadlines: Array<{ title: string; clientName: string | null; matterTitle: string | null }>;
  dueThisWeekDeadlines: Array<{ title: string; clientName: string | null; matterTitle: string | null; dueDate: string }>;
  activeMattersCount: number;
  totalClientsCount: number;
  unbilledHours: number;
  recentMatters: Array<{ title: string; clientName: string | null; status: string }>;
  outstandingInvoices?: Array<{ clientName: string | null; amount: string; status: string; dueDate: string | null }>;
  trustBalances?: Array<{ clientName: string; balanceCents: number }>;
}

interface SystemPromptParams {
  lawyerName: string;
  firmName: string;
  clientName?: string;
  clientSummary?: string;
  matterTitle?: string;
  chunks: RetrievedChunk[];
  practiceContext?: PracticeContext;
  todayDate?: string;
}

export function buildSystemPrompt(params: SystemPromptParams): string {
  const today = params.todayDate ?? new Date().toLocaleDateString("en-CA", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  let prompt = `You are Atticus, a dedicated AI executive assistant for ${params.lawyerName}`;
  if (params.firmName) {
    prompt += ` at ${params.firmName}`;
  }
  prompt += `.

Today is ${today}.

Your role: You are not just a search tool — you are ${params.lawyerName}'s trusted assistant. You know their practice deeply, anticipate their needs, and proactively highlight what matters. Be warm but professional. Be concise and direct — lawyers are busy. When you spot a risk, deadline, or billable opportunity, flag it.

Your capabilities:
- Answer any question about clients, matters, documents, deadlines, time entries, and billing
- Help draft and review correspondence
- Summarize case history and identify key facts
- Flag overdue items, upcoming deadlines, and potential conflicts
- Help think through legal strategy and next steps
- Provide practice management insights
- **Take action**: You have five action tools:
  - **add_deadline**: Create a deadline or action item (e.g. "Add a deadline to file the claim by March 31")
  - **log_time**: Log time spent on a task (e.g. "Log 45 minutes for the Smith discovery review")
  - **resolve_deadline**: Mark a task as complete (e.g. "Mark the retainer signing as done")
  - **add_client_note**: Save an important note on a client's record (e.g. "Note that Smith prefers email contact only")
  - **add_matter_note**: Save a note on a specific matter (e.g. "Note on the Chen estate matter: client wants to settle by June")
  - **record_trust**: Record a trust receipt or disbursement (e.g. "Record a $5,000 trust receipt from Smith" or "Disbursement of $2,000 from Johnson trust")
  - **create_invoice**: Generate a draft invoice for a client from their unbilled time (e.g. "Create an invoice for Smith" or "Invoice Johnson, add HST")
  Always confirm what action was taken after using a tool.

Always:
- Cite document sources as [Source: document title] when using retrieved content
- Flag urgent items (overdue, due today) prominently
- Note potential billable time when relevant
- If you don't know something from the available context, say so clearly`;

  // Live practice context
  if (params.practiceContext) {
    const ctx = params.practiceContext;
    prompt += `\n\n--- YOUR PRACTICE SNAPSHOT ---`;
    prompt += `\nActive matters: ${ctx.activeMattersCount} | Total clients: ${ctx.totalClientsCount}`;
    if (ctx.unbilledHours > 0) {
      prompt += ` | Unbilled time: ${ctx.unbilledHours.toFixed(1)} hrs`;
    }

    if (ctx.overdueDeadlines.length > 0) {
      prompt += `\n\n⚠️ OVERDUE (${ctx.overdueDeadlines.length} items):`;
      ctx.overdueDeadlines.slice(0, 5).forEach(d => {
        const who = [d.clientName, d.matterTitle].filter(Boolean).join(" — ");
        prompt += `\n  • ${d.title}${who ? ` [${who}]` : ""} (was due ${d.dueDate})`;
      });
    }

    if (ctx.dueTodayDeadlines.length > 0) {
      prompt += `\n\n🔴 DUE TODAY (${ctx.dueTodayDeadlines.length} items):`;
      ctx.dueTodayDeadlines.slice(0, 5).forEach(d => {
        const who = [d.clientName, d.matterTitle].filter(Boolean).join(" — ");
        prompt += `\n  • ${d.title}${who ? ` [${who}]` : ""}`;
      });
    }

    if (ctx.dueThisWeekDeadlines.length > 0) {
      prompt += `\n\n📅 DUE THIS WEEK:`;
      ctx.dueThisWeekDeadlines.slice(0, 5).forEach(d => {
        const who = [d.clientName, d.matterTitle].filter(Boolean).join(" — ");
        prompt += `\n  • ${d.title}${who ? ` [${who}]` : ""} (${d.dueDate})`;
      });
    }

    if (ctx.recentMatters.length > 0) {
      prompt += `\n\nRecent active matters: ${ctx.recentMatters.slice(0, 5).map(m => `${m.title}${m.clientName ? ` (${m.clientName})` : ""}`).join(", ")}`;
    }

    if (ctx.outstandingInvoices && ctx.outstandingInvoices.length > 0) {
      prompt += `\n\n💰 OUTSTANDING INVOICES (${ctx.outstandingInvoices.length}):`;
      ctx.outstandingInvoices.slice(0, 5).forEach(inv => {
        const overdueFlag = inv.status === "overdue" ? " ⚠️ OVERDUE" : "";
        prompt += `\n  • ${inv.clientName ?? "Unknown"}: ${inv.amount}${inv.dueDate ? ` (due ${inv.dueDate})` : ""}${overdueFlag}`;
      });
    }

    if (ctx.trustBalances && ctx.trustBalances.length > 0) {
      const negative = ctx.trustBalances.filter(b => b.balanceCents < 0);
      const withFunds = ctx.trustBalances.filter(b => b.balanceCents > 0);
      if (negative.length > 0) {
        prompt += `\n\n🔴 NEGATIVE TRUST BALANCES: ${negative.map(b => `${b.clientName} (${(b.balanceCents / 100).toLocaleString("en-CA", { style: "currency", currency: "CAD" })})`).join(", ")}`;
      }
      if (withFunds.length > 0) {
        prompt += `\n\nTrust funds on hand: ${withFunds.slice(0, 5).map(b => `${b.clientName}: ${(b.balanceCents / 100).toLocaleString("en-CA", { style: "currency", currency: "CAD" })}`).join("; ")}`;
      }
    }

    prompt += `\n--- END SNAPSHOT ---`;
  }

  // Client/matter scope
  if (params.clientName) {
    prompt += `\n\nCURRENT SCOPE: You are focused on client ${params.clientName}.`;
    if (params.clientSummary) {
      prompt += ` Profile: ${params.clientSummary}`;
    }
  }
  if (params.matterTitle) {
    prompt += `\nThis conversation is scoped to the matter: "${params.matterTitle}".`;
  }

  // Retrieved document chunks
  if (params.chunks.length > 0) {
    prompt += `\n\nRELEVANT CONTEXT FROM FILES:\n---\n`;
    prompt += params.chunks
      .map((c) => {
        const source = c.documentTitle ?? `Document ${c.documentId.slice(0, 8)}`;
        return `[Source: ${source}]\n${c.content}`;
      })
      .join("\n\n");
    prompt += `\n---\nAnswer based on the context above. Cite the source document for each key fact you reference. If unsure, say so.`;
  } else if (!params.practiceContext) {
    prompt += `\n\nNo specific documents are loaded for this conversation. You can answer general practice management questions, help draft content, or discuss strategy.`;
  }

  return prompt;
}
