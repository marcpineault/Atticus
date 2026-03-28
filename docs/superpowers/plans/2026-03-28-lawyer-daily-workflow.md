# Lawyer Daily Workflow Simplification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplify the sidebar to 8 core items, build a `/today` morning hub, auto-generate memo/task list/follow-up email after audio transcription, and improve the daily briefing email.

**Architecture:** Shelve outreach/prospects/conflicts from the nav (DB untouched). Add 3 nullable text columns to `documents`. New `generate-outputs.ts` ingestion step calls Claude Sonnet once after transcription to produce all 3 outputs. New `today` tRPC router aggregates briefing data. New `/today` page displays 3 zones: morning briefing, recent recordings, and the existing `QuickCapture` component.

**Tech Stack:** Next.js 14 app router, tRPC + Drizzle ORM (Neon Postgres), Inngest background jobs, Anthropic Claude Sonnet, shadcn/ui components.

---

## File Map

| Action | File |
|---|---|
| Modify | `src/components/layout/sidebar.tsx` |
| Modify | `src/lib/db/schema.ts` |
| Generate | `drizzle/0003_*.sql` (via drizzle-kit) |
| Create | `src/lib/ingestion/generate-outputs.ts` |
| Modify | `src/lib/inngest/ingest-document.ts` |
| Create | `src/server/routers/today.ts` |
| Modify | `src/server/routers/_app.ts` |
| Create | `src/app/(dashboard)/today/page.tsx` |
| Modify | `src/components/documents/document-detail-dialog.tsx` |
| Modify | `src/lib/inngest/daily-briefing.ts` |
| Modify | `src/lib/email/templates.ts` |

---

## Task 1: Simplify sidebar nav

**Files:**
- Modify: `src/components/layout/sidebar.tsx`

Remove shelved nav items (Prospects, Outreach, Conflicts, Analytics, Outbox, Upload, Dashboard). Add Today as the first item. Rename "AI Draft" → "Drafts" and "Billing" → "Invoices". Update logo link to `/today`.

- [ ] **Step 1: Update `sidebar.tsx`**

Replace the entire file content:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sun,
  Users,
  Briefcase,
  FileText,
  AlertTriangle,
  FileEdit,
  Receipt,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeadlineBadge } from "./deadline-badge";

const navItems = [
  { href: "/today", label: "Today", icon: Sun },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/matters", label: "Matters", icon: Briefcase },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/deadlines", label: "Deadlines", icon: AlertTriangle, badge: <DeadlineBadge /> },
  { href: "/draft", label: "Drafts", icon: FileEdit },
  { href: "/billing", label: "Invoices", icon: Receipt },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/today" className="text-lg font-semibold">
          Atticus
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname.startsWith(item.href) ? "secondary" : "ghost"}
            className={cn("w-full justify-start gap-2")}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4" />
              {item.label}
              {item.badge}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
}
```

- [ ] **Step 2: Verify the app builds without errors**

```bash
cd /Users/map98/Desktop/Practice-buddy && npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors related to sidebar imports.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/sidebar.tsx
git commit -m "feat: simplify sidebar to 8 core nav items, add Today"
```

---

## Task 2: Add generated output columns to documents schema + migrate

**Files:**
- Modify: `src/lib/db/schema.ts`
- Generated: `drizzle/0003_*.sql`

- [ ] **Step 1: Add 3 columns to the `documents` table in schema.ts**

In `src/lib/db/schema.ts`, find the `documents` table definition. After the `r2Key` line (before `createdAt`), add:

```typescript
    generatedMemo: text("generated_memo"),
    generatedTaskList: text("generated_task_list"),
    generatedFollowUpEmail: text("generated_follow_up_email"),
```

The end of the documents table should look like:

```typescript
    errorMessage: text("error_message"),
    r2Key: text("r2_key"),
    generatedMemo: text("generated_memo"),
    generatedTaskList: text("generated_task_list"),
    generatedFollowUpEmail: text("generated_follow_up_email"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
```

- [ ] **Step 2: Generate the Drizzle migration**

```bash
cd /Users/map98/Desktop/Practice-buddy && npx drizzle-kit generate
```

Expected output: a new file like `drizzle/0003_<name>.sql` containing:
```sql
ALTER TABLE "documents" ADD COLUMN "generated_memo" text;
ALTER TABLE "documents" ADD COLUMN "generated_task_list" text;
ALTER TABLE "documents" ADD COLUMN "generated_follow_up_email" text;
```

- [ ] **Step 3: Apply the migration**

```bash
npx drizzle-kit migrate
```

Expected: `[✓] migrations applied` (or similar success message).

- [ ] **Step 4: Commit**

```bash
git add src/lib/db/schema.ts drizzle/
git commit -m "feat: add generated_memo, generated_task_list, generated_follow_up_email columns to documents"
```

---

## Task 3: Create generate-outputs ingestion module

**Files:**
- Create: `src/lib/ingestion/generate-outputs.ts`

Single function that calls Claude Sonnet once with a transcript and returns 3 structured outputs.

- [ ] **Step 1: Create the file**

```typescript
// src/lib/ingestion/generate-outputs.ts
import { anthropic } from "@/lib/ai/anthropic";

export interface GeneratedOutputs {
  memo: string;
  taskList: string;
  followUpEmail: string;
}

export async function generateDocumentOutputs(
  transcript: string,
  documentTitle: string
): Promise<GeneratedOutputs> {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2000,
    system: `You are a legal practice assistant. Given a meeting or call transcript, generate three formal outputs for a lawyer's file management.

Return a JSON object with exactly these three keys:
- "memo": A formal internal file memo. Include the date, participants mentioned, key points discussed, decisions made, and next steps. Professional legal tone. 1-2 paragraphs.
- "taskList": A numbered list of action items extracted from the transcript. For each item include: the task description, the owner if mentioned, and the due date if mentioned. One item per line.
- "followUpEmail": A professional follow-up email to the client. Summarize what was discussed, confirm the next steps, and request any needed information. Ready to send with minor edits. Include subject line as the first line prefixed with "Subject: ".

Respond with ONLY valid JSON. No markdown code fences, no extra text outside the JSON.`,
    messages: [
      {
        role: "user",
        content: `Document: ${documentTitle}\n\nTranscript:\n${transcript.slice(0, 40000)}`,
      },
    ],
  });

  const content = message.content[0];
  if (!content || content.type !== "text") {
    throw new Error("Unexpected response type from Claude");
  }

  try {
    const parsed = JSON.parse(content.text) as Record<string, unknown>;
    return {
      memo: typeof parsed.memo === "string" ? parsed.memo : "",
      taskList: typeof parsed.taskList === "string" ? parsed.taskList : "",
      followUpEmail: typeof parsed.followUpEmail === "string" ? parsed.followUpEmail : "",
    };
  } catch {
    // JSON parse failed — store raw text in memo so nothing is lost
    return { memo: content.text, taskList: "", followUpEmail: "" };
  }
}
```

- [ ] **Step 2: Type-check the new file**

```bash
cd /Users/map98/Desktop/Practice-buddy && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/ingestion/generate-outputs.ts
git commit -m "feat: add generate-outputs ingestion module (Claude Sonnet → memo + task list + follow-up email)"
```

---

## Task 4: Add generate-outputs step to ingest-document pipeline

**Files:**
- Modify: `src/lib/inngest/ingest-document.ts`

Add a static import and a new `step.run("generate-outputs")` between `mark-completed` and `notify-user`, gated on document type.

- [ ] **Step 1: Add the import at the top of `ingest-document.ts`**

After the existing imports (after `import { estimateBillableMinutes } ...`), add:

```typescript
import { generateDocumentOutputs } from "@/lib/ingestion/generate-outputs";
```

- [ ] **Step 2: Add the new step after `mark-completed`**

In `ingest-document.ts`, after the `mark-completed` step block and before the `notify-user` step block, insert:

```typescript
    await step.run("generate-outputs", async () => {
      if (doc.type !== "voice_note" && doc.type !== "meeting") return;
      const outputs = await generateDocumentOutputs(rawContent, doc.title ?? "Untitled");
      await db
        .update(documents)
        .set({
          generatedMemo: outputs.memo,
          generatedTaskList: outputs.taskList,
          generatedFollowUpEmail: outputs.followUpEmail,
          updatedAt: new Date(),
        })
        .where(eq(documents.id, documentId));
    });
```

The flow should read: `mark-completed` → `generate-outputs` → `notify-user`.

- [ ] **Step 3: Type-check**

```bash
cd /Users/map98/Desktop/Practice-buddy && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/lib/inngest/ingest-document.ts
git commit -m "feat: auto-generate memo + task list + follow-up email after voice_note/meeting transcription"
```

---

## Task 5: Create today tRPC router

**Files:**
- Create: `src/server/routers/today.ts`
- Modify: `src/server/routers/_app.ts`

Single `getBriefing` query that aggregates overdue items, upcoming deadlines, overdue invoices, quiet matters, and recent recordings.

- [ ] **Step 1: Create `src/server/routers/today.ts`**

```typescript
import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { documents, entities, matters, clients, invoices } from "@/lib/db/schema";
import { eq, and, lt, gte, inArray, isNotNull, desc, asc } from "drizzle-orm";

export const todayRouter = createTRPCRouter({
  getBriefing: protectedProcedure.query(async ({ ctx }) => {
    const now = new Date();

    const sevenDaysLater = new Date(now);
    sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);

    const sevenDaysAgo = new Date(now);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const thirtyDaysAgo = new Date(now);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Overdue action items and deadlines
    const overdueItems = await ctx.db
      .select({
        id: entities.id,
        type: entities.type,
        value: entities.value,
        dueDate: entities.dueDate,
        matterTitle: matters.title,
        clientName: clients.name,
      })
      .from(entities)
      .leftJoin(matters, eq(entities.matterId, matters.id))
      .leftJoin(clients, eq(entities.clientId, clients.id))
      .where(
        and(
          eq(entities.userId, ctx.userId),
          eq(entities.resolved, false),
          inArray(entities.type, ["action_item", "deadline"]),
          lt(entities.dueDate, now),
          isNotNull(entities.dueDate),
        )
      )
      .orderBy(asc(entities.dueDate))
      .limit(10);

    // Upcoming deadlines (next 7 days)
    const upcomingItems = await ctx.db
      .select({
        id: entities.id,
        type: entities.type,
        value: entities.value,
        dueDate: entities.dueDate,
        matterTitle: matters.title,
        clientName: clients.name,
      })
      .from(entities)
      .leftJoin(matters, eq(entities.matterId, matters.id))
      .leftJoin(clients, eq(entities.clientId, clients.id))
      .where(
        and(
          eq(entities.userId, ctx.userId),
          eq(entities.resolved, false),
          inArray(entities.type, ["action_item", "deadline"]),
          gte(entities.dueDate, now),
          lt(entities.dueDate, sevenDaysLater),
          isNotNull(entities.dueDate),
        )
      )
      .orderBy(asc(entities.dueDate))
      .limit(10);

    // Overdue invoices
    const overdueInvoices = await ctx.db
      .select({
        id: invoices.id,
        invoiceNumber: invoices.invoiceNumber,
        totalAmount: invoices.totalAmount,
        dueDate: invoices.dueDate,
        clientName: clients.name,
      })
      .from(invoices)
      .leftJoin(clients, eq(invoices.clientId, clients.id))
      .where(and(eq(invoices.userId, ctx.userId), eq(invoices.status, "overdue")))
      .limit(5);

    // Quiet matters: active with no document in last 30 days
    const activeMatters = await ctx.db
      .select({
        id: matters.id,
        title: matters.title,
        clientName: clients.name,
      })
      .from(matters)
      .leftJoin(clients, eq(matters.clientId, clients.id))
      .where(and(eq(matters.userId, ctx.userId), eq(matters.status, "active")));

    const recentDocMatters = await ctx.db
      .selectDistinct({ matterId: documents.matterId })
      .from(documents)
      .where(
        and(
          eq(documents.userId, ctx.userId),
          gte(documents.createdAt, thirtyDaysAgo),
          isNotNull(documents.matterId),
        )
      );

    const recentMatterIds = new Set(recentDocMatters.map((d) => d.matterId));
    const quietMatters = activeMatters
      .filter((m) => !recentMatterIds.has(m.id))
      .slice(0, 5);

    // Recent recordings (last 7 days, completed)
    const recentRecordings = await ctx.db
      .select({
        id: documents.id,
        title: documents.title,
        type: documents.type,
        status: documents.status,
        createdAt: documents.createdAt,
        generatedMemo: documents.generatedMemo,
        generatedTaskList: documents.generatedTaskList,
        generatedFollowUpEmail: documents.generatedFollowUpEmail,
        matterTitle: matters.title,
        clientName: clients.name,
      })
      .from(documents)
      .leftJoin(matters, eq(documents.matterId, matters.id))
      .leftJoin(clients, eq(documents.clientId, clients.id))
      .where(
        and(
          eq(documents.userId, ctx.userId),
          inArray(documents.type, ["voice_note", "meeting"]),
          eq(documents.status, "completed"),
          gte(documents.createdAt, sevenDaysAgo),
        )
      )
      .orderBy(desc(documents.createdAt))
      .limit(10);

    return { overdueItems, upcomingItems, overdueInvoices, quietMatters, recentRecordings };
  }),
});
```

- [ ] **Step 2: Register the router in `_app.ts`**

In `src/server/routers/_app.ts`, add the import:

```typescript
import { todayRouter } from "./today";
```

And add `today: todayRouter,` to the `appRouter` object (as the first entry for visual prominence):

```typescript
export const appRouter = createTRPCRouter({
  today: todayRouter,
  clients: clientsRouter,
  matters: mattersRouter,
  documents: documentsRouter,
  chat: chatRouter,
  users: usersRouter,
  billing: billingRouter,
  ai: aiRouter,
  invoices: invoicesRouter,
  analytics: analyticsRouter,
  timeEntries: timeEntriesRouter,
  templates: templatesRouter,
  trust: trustRouter,
  conflicts: conflictsRouter,
  prospects: prospectsRouter,
  outreach: outreachRouter,
});
```

- [ ] **Step 3: Type-check**

```bash
cd /Users/map98/Desktop/Practice-buddy && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/server/routers/today.ts src/server/routers/_app.ts
git commit -m "feat: add today tRPC router with getBriefing query"
```

---

## Task 6: Create /today page

**Files:**
- Create: `src/app/(dashboard)/today/page.tsx`

Three-zone page: morning briefing, recent recordings (with output status indicators), and QuickCapture for new uploads.

- [ ] **Step 1: Create `src/app/(dashboard)/today/page.tsx`**

```tsx
"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  CalendarClock,
  Briefcase,
  Mic,
  FileText,
  CheckCircle2,
  Receipt,
  Loader2,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { DocumentDetailDialog } from "@/components/documents/document-detail-dialog";
import { QuickCapture } from "@/components/dashboard/quick-capture";

function daysOverdue(date: Date): string {
  const days = Math.floor((Date.now() - date.getTime()) / 86400000);
  if (days === 0) return "due today";
  if (days === 1) return "1 day overdue";
  return `${days} days overdue`;
}

function daysUntil(date: Date): string {
  const days = Math.ceil((date.getTime() - Date.now()) / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "tomorrow";
  return `in ${days} days`;
}

function relativeTime(date: Date): string {
  const days = Math.floor((Date.now() - date.getTime()) / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

function SectionHeader({ icon: Icon, title, count }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  count?: number;
}) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <h2 className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">{title}</h2>
      {count !== undefined && count > 0 && (
        <Badge variant="secondary" className="text-xs px-1.5 py-0">{count}</Badge>
      )}
    </div>
  );
}

export default function TodayPage() {
  const { data, isLoading } = trpc.today.getBriefing.useQuery();
  const [captureOpen, setCaptureOpen] = useState(false);

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const overdueCount = data?.overdueItems.length ?? 0;
  const upcomingCount = data?.upcomingItems.length ?? 0;
  const invoiceCount = data?.overdueInvoices.length ?? 0;
  const quietCount = data?.quietMatters.length ?? 0;
  const recordingCount = data?.recentRecordings.length ?? 0;
  const allClear = overdueCount === 0 && invoiceCount === 0;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{greeting}</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {new Date().toLocaleDateString("en-CA", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setCaptureOpen((v) => !v)}>
          <Mic className="h-4 w-4 mr-2" />
          Quick Capture
        </Button>
      </div>

      {/* Quick Capture panel */}
      {captureOpen && (
        <Card>
          <CardContent className="pt-4 pb-4">
            <QuickCapture />
          </CardContent>
        </Card>
      )}

      {/* Zone 1: Morning Briefing */}
      <div className="space-y-6">

        {/* All clear */}
        {allClear && quietCount === 0 && upcomingCount === 0 && (
          <Card className="border-green-500/30 bg-green-50/40 dark:bg-green-950/20">
            <CardContent className="py-4 px-4 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
              <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                You&apos;re all caught up. No overdue items.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Overdue */}
        {overdueCount > 0 && (
          <div>
            <SectionHeader icon={AlertTriangle} title="Overdue" count={overdueCount} />
            <div className="space-y-2">
              {data!.overdueItems.map((item) => (
                <Card key={item.id} className="border-destructive/40">
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-medium">{item.value}</p>
                        {(item.clientName ?? item.matterTitle) && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {[item.clientName, item.matterTitle].filter(Boolean).join(" · ")}
                          </p>
                        )}
                      </div>
                      {item.dueDate && (
                        <Badge variant="destructive" className="shrink-0 text-xs whitespace-nowrap">
                          {daysOverdue(new Date(item.dueDate))}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming */}
        {upcomingCount > 0 && (
          <div>
            <SectionHeader icon={CalendarClock} title="Due this week" count={upcomingCount} />
            <div className="space-y-2">
              {data!.upcomingItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-medium">{item.value}</p>
                        {(item.clientName ?? item.matterTitle) && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {[item.clientName, item.matterTitle].filter(Boolean).join(" · ")}
                          </p>
                        )}
                      </div>
                      {item.dueDate && (
                        <span className="text-xs text-muted-foreground shrink-0 whitespace-nowrap">
                          {daysUntil(new Date(item.dueDate))}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Overdue invoices */}
        {invoiceCount > 0 && (
          <div>
            <SectionHeader icon={Receipt} title="Overdue invoices" count={invoiceCount} />
            <div className="space-y-2">
              {data!.overdueInvoices.map((inv) => (
                <Card key={inv.id} className="border-amber-400/40">
                  <CardContent className="py-3 px-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Invoice #{inv.invoiceNumber}</p>
                        {inv.clientName && (
                          <p className="text-xs text-muted-foreground">{inv.clientName}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold">
                          ${((inv.totalAmount ?? 0) / 100).toLocaleString("en-CA", {
                            minimumFractionDigits: 2,
                          })}
                        </p>
                        <Link
                          href="/billing"
                          className="text-xs text-muted-foreground hover:underline"
                        >
                          View →
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Quiet matters */}
        {quietCount > 0 && (
          <div>
            <SectionHeader icon={Briefcase} title="No activity in 30+ days" count={quietCount} />
            <div className="space-y-2">
              {data!.quietMatters.map((matter) => (
                <Card key={matter.id} className="border-dashed">
                  <CardContent className="py-3 px-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{matter.title}</p>
                        {matter.clientName && (
                          <p className="text-xs text-muted-foreground">{matter.clientName}</p>
                        )}
                      </div>
                      <Link
                        href={`/matters/${matter.id}`}
                        className="text-xs text-muted-foreground hover:underline"
                      >
                        View →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Zone 2: Recent Recordings */}
      {recordingCount > 0 && (
        <div>
          <SectionHeader icon={Mic} title="Recent recordings" count={recordingCount} />
          <div className="space-y-2">
            {data!.recentRecordings.map((doc) => (
              <DocumentDetailDialog key={doc.id} docId={doc.id}>
                <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">
                          {doc.title ?? "Untitled recording"}
                        </p>
                        {(doc.clientName ?? doc.matterTitle) && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {[doc.clientName, doc.matterTitle].filter(Boolean).join(" · ")}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {relativeTime(new Date(doc.createdAt))}
                        </p>
                      </div>
                      {/* Output status indicators */}
                      <div className="flex items-center gap-1.5 shrink-0" title="Memo / Task List / Email">
                        <FileText
                          className={`h-3.5 w-3.5 ${doc.generatedMemo ? "text-green-600" : "text-muted-foreground/25"}`}
                        />
                        <CheckCircle2
                          className={`h-3.5 w-3.5 ${doc.generatedTaskList ? "text-green-600" : "text-muted-foreground/25"}`}
                        />
                        <Mail
                          className={`h-3.5 w-3.5 ${doc.generatedFollowUpEmail ? "text-green-600" : "text-muted-foreground/25"}`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DocumentDetailDialog>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
cd /Users/map98/Desktop/Practice-buddy && npx tsc --noEmit 2>&1 | head -30
```

Expected: no errors.

- [ ] **Step 3: Start dev server and verify the page loads**

```bash
npm run dev
```

Navigate to `http://localhost:3000/today`. Expected: page renders with briefing sections and no console errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/(dashboard)/today/page.tsx
git commit -m "feat: add /today morning hub page with briefing + recent recordings + quick capture"
```

---

## Task 7: Add Outputs tab to DocumentDetailDialog

**Files:**
- Modify: `src/components/documents/document-detail-dialog.tsx`

Add an "Outputs" tab that appears when any of the 3 generated fields are present on a document. Each output is shown in an editable textarea so the lawyer can tweak before copying.

- [ ] **Step 1: Add `Textarea` import to the dialog**

In `src/components/documents/document-detail-dialog.tsx`, add to the imports:

```typescript
import { Textarea } from "@/components/ui/textarea";
```

- [ ] **Step 2: Add the Outputs tab trigger**

In the `<TabsList>` block (after the Entities tab trigger), add:

```tsx
{(doc.generatedMemo || doc.generatedTaskList || doc.generatedFollowUpEmail) && (
  <TabsTrigger value="outputs">Outputs</TabsTrigger>
)}
```

- [ ] **Step 3: Add state and sync effect for editable outputs**

At the top of the file, update the React import from:

```typescript
import { useState } from "react";
```

to:

```typescript
import { useState, useEffect } from "react";
```

After the existing `useState` declarations (after `assignMatterId`), add:

```typescript
const [memoText, setMemoText] = useState("");
const [taskListText, setTaskListText] = useState("");
const [followUpText, setFollowUpText] = useState("");
```

After the `updateAssignment` mutation declaration, add a `useEffect` that initializes the editable state whenever a new document loads:

```typescript
useEffect(() => {
  if (doc) {
    setMemoText(doc.generatedMemo ?? "");
    setTaskListText(doc.generatedTaskList ?? "");
    setFollowUpText(doc.generatedFollowUpEmail ?? "");
  }
}, [doc?.id]);
```

- [ ] **Step 5: Add the Outputs tab content panel**

After the entities `TabsContent` block (before the closing `</Tabs>`), add:

```tsx
{(doc.generatedMemo || doc.generatedTaskList || doc.generatedFollowUpEmail) && (
  <TabsContent value="outputs" className="flex-1 overflow-hidden mt-3">
    <ScrollArea className="h-full max-h-[50vh]">
      <div className="space-y-4 pr-4">
        {doc.generatedMemo && (
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
              File Memo
            </p>
            <Textarea
              value={memoText ?? ""}
              onChange={(e) => setMemoText(e.target.value)}
              className="min-h-[120px] text-sm font-mono resize-y"
            />
          </div>
        )}
        {doc.generatedTaskList && (
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
              Task List
            </p>
            <Textarea
              value={taskListText ?? ""}
              onChange={(e) => setTaskListText(e.target.value)}
              className="min-h-[100px] text-sm font-mono resize-y"
            />
          </div>
        )}
        {doc.generatedFollowUpEmail && (
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
              Follow-Up Email Draft
            </p>
            <Textarea
              value={followUpText ?? ""}
              onChange={(e) => setFollowUpText(e.target.value)}
              className="min-h-[140px] text-sm font-mono resize-y"
            />
          </div>
        )}
      </div>
    </ScrollArea>
  </TabsContent>
)}
```

- [ ] **Step 6: Update the `defaultValue` on `<Tabs>` to prefer outputs for recordings**

Change the existing `Tabs defaultValue` line from:

```tsx
<Tabs defaultValue={doc.summary ? "summary" : "content"} ...>
```

to:

```tsx
<Tabs
  defaultValue={
    (doc.generatedMemo || doc.generatedTaskList || doc.generatedFollowUpEmail)
      ? "outputs"
      : doc.summary
      ? "summary"
      : "content"
  }
  className="flex-1 overflow-hidden flex flex-col"
>
```

- [ ] **Step 7: Type-check**

```bash
cd /Users/map98/Desktop/Practice-buddy && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 8: Commit**

```bash
git add src/components/documents/document-detail-dialog.tsx
git commit -m "feat: add Outputs tab to document detail dialog (memo, task list, follow-up email)"
```

---

## Task 8: Update daily briefing with quiet matters + /today CTA

**Files:**
- Modify: `src/lib/inngest/daily-briefing.ts`
- Modify: `src/lib/email/templates.ts`

Add a quiet matters query to the daily briefing job and pass the data to the email template. Update the CTA button to link to `/today` instead of `/deadlines`. Add a quiet matters section to the email HTML.

- [ ] **Step 1: Add missing imports to `daily-briefing.ts`**

In `src/lib/inngest/daily-briefing.ts`, update the drizzle-orm import to include `gte` and `isNotNull`:

```typescript
import { eq, and, inArray, isNull, or, asc, gte, isNotNull } from "drizzle-orm";
```

And add `matters` to the schema import:

```typescript
import { entities, documents, clients, users, invoices, trustTransactions, matters } from "@/lib/db/schema";
```

- [ ] **Step 2: Add quiet matters query inside the per-user loop**

In the per-user `for` loop, after the `fetch-unbilled-${user.id}` step, add:

```typescript
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
```

- [ ] **Step 3: Update the skip condition to include quiet matters**

Change:

```typescript
      if (overdue.length === 0 && today.length === 0 && upcoming.length === 0 &&
          overdueInvoiceList.length === 0 && negativeTrustList.length === 0 && unbilledHours < 1) {
```

to:

```typescript
      if (overdue.length === 0 && today.length === 0 && upcoming.length === 0 &&
          overdueInvoiceList.length === 0 && negativeTrustList.length === 0 && unbilledHours < 1 &&
          quietMattersRows.length === 0) {
```

- [ ] **Step 4: Pass `quietMatters` to `buildDailyBriefingEmail`**

Update the `buildDailyBriefingEmail` call to add:

```typescript
        quietMatters: quietMattersRows,
```

The full call becomes:

```typescript
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
```

- [ ] **Step 5: Update `buildDailyBriefingEmail` in `templates.ts`**

Add `quietMatters` to the params type and destructuring. Find the function signature:

```typescript
export function buildDailyBriefingEmail(params: {
  userName: string;
  todayDeadlines: Deadline[];
  upcomingDeadlines: Deadline[];
  overdueDeadlines: Deadline[];
  overdueInvoices?: Array<{ invoiceNumber: string; clientName: string | null; totalAmount: number; daysPastDue: number }>;
  unbilledHours?: number;
  hourlyRate?: number;
  negativeTrustClients?: Array<{ clientName: string | null; balance: number }>;
}) {
  const {
    userName, todayDeadlines, upcomingDeadlines, overdueDeadlines,
    overdueInvoices = [], unbilledHours = 0, hourlyRate = 400, negativeTrustClients = [],
  } = params;
```

Replace with:

```typescript
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
```

- [ ] **Step 6: Add quiet matters section and update CTA in the HTML template**

In `templates.ts`, find the unbilled time section. After the closing `${ unbilledHours >= 1 ? ... : ""}` block and before `<!-- CTA -->`, add:

```typescript
    ${quietMatters.length > 0 ? `
    <!-- Quiet Matters -->
    <div style="padding: 20px 32px 0;">
      <h3 style="margin: 0 0 12px; font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">📁 No Activity in 30+ Days (${quietMatters.length})</h3>
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px 16px;">
        ${quietMatters.map(m => `<p style="margin: 4px 0; font-size: 13px; color: #374151;">· ${m.title}</p>`).join("")}
        <p style="margin: 8px 0 0; font-size: 12px; color: #9ca3af;">These matters have had no new documents uploaded recently.</p>
      </div>
    </div>` : ""}
```

Then find and replace the CTA link in the HTML:

Old:
```html
      <a href="${appUrl}/deadlines" style="display: inline-block; background: #0f172a; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500;">
        Open Atticus Deadlines →
      </a>
```

New:
```html
      <a href="${appUrl}/today" style="display: inline-block; background: #0f172a; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500;">
        Open Today's Briefing →
      </a>
```

Also update the text version. Find:

```typescript
    `Open Atticus: ${appUrl}/deadlines`,
```

Replace with:

```typescript
    `Open Atticus: ${appUrl}/today`,
```

- [ ] **Step 7: Type-check**

```bash
cd /Users/map98/Desktop/Practice-buddy && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 8: Commit**

```bash
git add src/lib/inngest/daily-briefing.ts src/lib/email/templates.ts
git commit -m "feat: upgrade daily briefing with quiet matters section and /today CTA link"
```

---

## Verification

After all tasks are complete, verify the 4 success criteria from the spec:

- [ ] Upload a voice note or meeting recording → wait for processing → open the document → confirm "Outputs" tab appears with memo, task list, and follow-up email
- [ ] Navigate to `/today` → confirm 3 zones render: morning briefing, recent recordings, quick capture toggle
- [ ] Count sidebar items: Today, Clients, Matters, Documents, Deadlines, Drafts, Invoices, Settings = 8
- [ ] Try navigating to `/outreach` and `/prospects` directly → they still load at the URL (routes exist) but are not in the sidebar

```bash
cd /Users/map98/Desktop/Practice-buddy && npx tsc --noEmit 2>&1 | head -10
```

Expected: no TypeScript errors across the full project.
