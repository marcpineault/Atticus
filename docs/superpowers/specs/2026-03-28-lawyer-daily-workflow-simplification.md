# Lawyer Daily Workflow Simplification
**Date:** 2026-03-28
**Status:** Approved
**Context:** Feedback from Vikas (Ontario lawyer) — core pain is converting unstructured meeting/call info into formal legal outputs. Too much admin burden reduces billable hours. Goal: simplify the product, build around the actual day-in-the-life workflow.

---

## Problem Statement

Lawyers regularly spend significant time converting unstructured information (meeting notes, phone call summaries, rough dictation) into formal outputs:
- Internal file memos
- Client follow-up emails
- Task lists and action items
- Follow-up scheduling and reminders
- File management notes

These tasks are necessary but don't require legal analysis. They create admin burden and reduce billable time. Atticus should act like an assistant following the lawyer around all day — taking notes, drafting outputs, keeping the calendar on track.

The current product has too many features spread across too many surfaces. The cold outreach engine (campaigns, LSO scraper, CASL compliance, reply detection) solves a different problem (finding new clients) and adds maintenance burden without serving the daily workflow pain.

---

## What Gets Shelved

The following features are hidden from the UI and frozen. Database tables remain intact (no data loss). No routes deleted — just removed from navigation and not linked anywhere.

| Feature | Tables affected | Why shelved |
|---|---|---|
| Cold outreach campaigns | `campaigns`, `campaignSteps`, `campaignSends` | About finding new clients, not serving existing ones |
| Prospect pipeline | `prospects` | CRM stage tracking for leads — not daily admin workflow |
| Email unsubscribes | `emailUnsubscribes` | Only relevant for outreach |
| LSO scraper | `scripts/` Playwright script | Fragile, high maintenance, no longer needed |
| CASL compliance | Outreach webhooks | No outreach = no CASL enforcement needed |
| Click tracking endpoint | `/api/track` | Only used by outreach emails |
| Outreach reply detection | `/api/webhooks/outreach-inbound` | No outreach = no reply tracking |
| Conflicts checker | `conflicts` route | Minimal implementation, not core workflow |

**Sidebar nav after shelving (~8 items):** Today, Clients, Matters, Documents, Deadlines, Drafts, Invoices, Settings.

---

## What Gets Built

### 1. `/today` Page — Morning Hub

The lawyer's home base. One page that covers the first 15 minutes of every workday.

**Zone 1 — Morning Briefing**
Aggregated from existing Atticus data. No new tables.

- **Overdue action items** — entities of type `action_item` or `deadline` where `dueDate` is past and `resolved = false`, grouped by matter
- **Upcoming deadlines** — same entity types with `dueDate` in the next 7 days
- **Quiet matters** — active matters with no document uploaded in the past 30 days (signal: case may be stalling)
- **Overdue invoices** — invoices with status `overdue`

**Zone 2 — Recent Recordings**
Documents of type `voice_note` or `meeting` with status `completed`, processed in the last 7 days. Each card shows:
- Matter name and client
- Date recorded
- Output readiness indicators: Memo ✓, Task List ✓, Follow-up Email ✓
- Click → document detail page with Outputs tab

**Zone 3 — Quick Upload**
Prominent upload button (top-right or sticky). Lawyer selects matter, drops audio file. Skips the full Documents page. Triggers existing ingestion pipeline.

**Data source:** Single new tRPC query (`today.getBriefing`) that aggregates entities, documents, matters, and invoices scoped to the authenticated user. Read-only. No schema changes.

---

### 2. Auto-Generated Outputs After Transcription

After the existing Inngest `ingest-document` pipeline completes transcription, a new final step calls Claude Sonnet once to generate all 3 outputs in a single structured API call.

**Outputs:**

| Output | Description |
|---|---|
| **File memo** | Formal internal record: date, participants, key points discussed, decisions made, next steps. 1–2 paragraphs. |
| **Task list** | Numbered action items. Each item includes: task description, owner (if mentioned), due date (if mentioned). |
| **Follow-up email draft** | Addressed to the client. Professional tone. Summarizes what was discussed, confirms next steps, requests any needed info. Ready to copy-send or lightly edit. |

**Storage:** 3 new text columns added to the `documents` table:
- `generatedMemo` (text, nullable)
- `generatedTaskList` (text, nullable)
- `generatedFollowUpEmail` (text, nullable)

These are only populated for documents of type `voice_note` or `meeting`. Null for other document types.

**UI:** On the document detail page, a new "Outputs" tab appears when any of the 3 fields are non-null. Each output is displayed in an editable textarea — lawyer can tweak before copying or using as a draft. Outputs also surface in Zone 2 of the Today page (completion indicators on each recording card).

**Trigger point:** End of the existing `ingest-document` Inngest function, after summarization step, only when document type is `voice_note` or `meeting`.

**Claude prompt strategy:** Single call to Claude Sonnet with the full transcript as context. System prompt instructs it to return a JSON object with keys `memo`, `taskList`, `followUpEmail`. Parse and store each field separately. If parsing fails, store raw text in `generatedMemo` and log error.

---

### 3. Improved Daily Briefing Email

The existing Inngest `daily-briefing` function is upgraded to send richer content that mirrors the Today page.

**New email content:**
- Count + list of overdue action items (grouped by matter, max 5 shown)
- Deadlines due in next 7 days
- Quiet matters (no activity in 30 days)
- Direct CTA button: "Open Today's Briefing →" linking to `/today`

**No new infrastructure.** Same Inngest function, same email sending via Resend. Just an upgraded template using the same data query as the Today page.

---

## Data Model Changes

| Change | Type | Detail |
|---|---|---|
| `documents.generatedMemo` | New column | `text`, nullable |
| `documents.generatedTaskList` | New column | `text`, nullable |
| `documents.generatedFollowUpEmail` | New column | `text`, nullable |

One Drizzle migration. No other schema changes.

---

## What Stays Unchanged

| Feature | Status |
|---|---|
| Audio transcription (faster-whisper) | Unchanged |
| Document ingestion pipeline | Extended (new final step), not rewritten |
| RAG chat | Unchanged |
| Clients & matters CRUD | Unchanged |
| Draft templates | Unchanged (serves "formatted email" use case) |
| Invoicing + trust accounting | Unchanged |
| Email intake | Unchanged |
| Clerk auth + MFA | Unchanged |
| Onboarding wizard | Unchanged |
| SEO/marketing pages | Unchanged |

---

## Success Criteria

1. Lawyer uploads a recording → within 2 minutes, memo + task list + follow-up email are available on the document page
2. Lawyer opens `/today` each morning and can see everything they need to act on without navigating elsewhere
3. Sidebar has ≤8 nav items
4. Cold outreach features are not accessible from any part of the UI

---

## Out of Scope (This Phase)

- Mobile app / PWA (planned for later)
- Gmail / Outlook inbox integration (OAuth complexity, phase 2)
- Real-time meeting recording (browser microphone capture)
- Auto-sending of generated emails (lawyer always reviews first)
- Re-enabling outreach features
