# Cold Outreach System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a built-in cold outreach system that scrapes the LSO directory for lawyer leads, runs multi-channel email sequences, and funnels interested lawyers into Calendly demo calls.

**Architecture:** Revives the reverted outreach system (commit `fddddfc`) with multi-channel steps (email/linkedin/call), separate webhook endpoints for outbound tracking vs reply detection, and an Inngest cron for daily scheduled sends. Integrates with existing prospects pipeline.

**Tech Stack:** Next.js 14 App Router, tRPC, Drizzle ORM, Neon Postgres, Resend, Inngest, Claude Haiku, shadcn/ui, Playwright (scraper only)

**Spec:** `docs/superpowers/specs/2026-03-22-cold-outreach-system-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `drizzle/0023_outreach_campaigns.sql` | Create | DB migration -- new enums, tables, prospect column additions |
| `src/lib/db/schema.ts` | Modify | Add campaign/send/unsubscribe tables + new enums to Drizzle schema |
| `src/lib/outreach/helpers.ts` | Create | Shared helpers: personalize, rewriteLinks, buildOutreachHtml |
| `src/server/routers/outreach.ts` | Create | Campaign CRUD, sending, CSV import, analytics, multi-channel |
| `src/server/routers/_app.ts` | Modify | Register outreach router |
| `src/server/routers/prospects.ts` | Modify | Add "lso_directory" to sourceValues tuple |
| `src/app/api/track/route.ts` | Create | Open pixel + click redirect tracking |
| `src/app/api/unsubscribe/route.ts` | Create | CASL unsubscribe handler |
| `src/app/unsubscribe/page.tsx` | Create | Public unsubscribe confirmation page |
| `src/app/api/webhooks/resend-events/route.ts` | Create | Resend outbound webhooks (delivered/opened/bounced) |
| `src/app/api/webhooks/outreach-inbound/route.ts` | Create | Reply detection via reply-to address pattern |
| `src/lib/inngest/outreach-cron.ts` | Create | Daily send cron + step advancement |
| `src/lib/inngest/functions.ts` | Modify | Register outreach cron function |
| `src/app/(dashboard)/outreach/page.tsx` | Create | Campaign management UI with 3 tabs |
| `src/app/(dashboard)/prospects/page.tsx` | Modify | Add campaign badge for outreach-assigned prospects |
| `src/components/layout/sidebar.tsx` | Modify | Add outreach nav item |
| `scripts/scrape-lso.ts` | Create | Standalone LSO directory scraper |

---

## Task 1: Database Migration

**Files:**
- Create: `drizzle/0023_outreach_campaigns.sql`

This migration adds new enum values to `prospect_source`, new columns to `prospects`, and creates the campaign tables.

- [ ] **Step 1: Create migration file**

```sql
-- Cold outreach campaign system

-- Add lso_directory to prospect_source enum
ALTER TYPE "prospect_source" ADD VALUE IF NOT EXISTS 'lso_directory';

-- Add columns to prospects table
ALTER TABLE "prospects" ADD COLUMN IF NOT EXISTS "city" text;
ALTER TABLE "prospects" ADD COLUMN IF NOT EXISTS "first_contacted_at" timestamp;

-- New enums
DO $$ BEGIN
  CREATE TYPE "campaign_status" AS ENUM ('draft', 'active', 'paused', 'completed');
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE "step_channel" AS ENUM ('email', 'linkedin', 'call');
EXCEPTION WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE "send_status" AS ENUM ('pending', 'sent', 'opened', 'clicked', 'replied', 'bounced', 'unsubscribed', 'completed');
EXCEPTION WHEN duplicate_object THEN null;
END $$;

-- Campaign tables
CREATE TABLE IF NOT EXISTS "campaigns" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" uuid NOT NULL REFERENCES "users"("id"),
  "name" text NOT NULL,
  "status" "campaign_status" DEFAULT 'draft' NOT NULL,
  "practice_area" text,
  "total_sent" integer DEFAULT 0 NOT NULL,
  "total_opened" integer DEFAULT 0 NOT NULL,
  "total_clicked" integer DEFAULT 0 NOT NULL,
  "total_replied" integer DEFAULT 0 NOT NULL,
  "total_unsubscribed" integer DEFAULT 0 NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "campaign_steps" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "campaign_id" uuid NOT NULL REFERENCES "campaigns"("id") ON DELETE CASCADE,
  "step_number" integer NOT NULL,
  "channel" "step_channel" DEFAULT 'email' NOT NULL,
  "subject" text NOT NULL,
  "body" text NOT NULL,
  "delay_days" integer DEFAULT 0 NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "campaign_sends" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "campaign_id" uuid NOT NULL REFERENCES "campaigns"("id") ON DELETE CASCADE,
  "step_id" uuid NOT NULL REFERENCES "campaign_steps"("id") ON DELETE CASCADE,
  "prospect_id" uuid NOT NULL REFERENCES "prospects"("id") ON DELETE CASCADE,
  "channel" "step_channel" DEFAULT 'email' NOT NULL,
  "status" "send_status" DEFAULT 'pending' NOT NULL,
  "subject" text NOT NULL,
  "body" text NOT NULL,
  "resend_id" text,
  "sent_at" timestamp,
  "opened_at" timestamp,
  "clicked_at" timestamp,
  "replied_at" timestamp,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "email_unsubscribes" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "email" text NOT NULL UNIQUE,
  "reason" text,
  "created_at" timestamp DEFAULT now() NOT NULL
);

-- Indexes
CREATE INDEX IF NOT EXISTS "campaigns_user_id_idx" ON "campaigns" ("user_id");
CREATE INDEX IF NOT EXISTS "campaign_steps_campaign_id_idx" ON "campaign_steps" ("campaign_id");
CREATE INDEX IF NOT EXISTS "campaign_sends_campaign_id_idx" ON "campaign_sends" ("campaign_id");
CREATE INDEX IF NOT EXISTS "campaign_sends_prospect_id_idx" ON "campaign_sends" ("prospect_id");
CREATE INDEX IF NOT EXISTS "campaign_sends_status_idx" ON "campaign_sends" ("status");
CREATE INDEX IF NOT EXISTS "campaign_sends_channel_idx" ON "campaign_sends" ("channel");
```

- [ ] **Step 2: Run migration**

```bash
npx drizzle-kit push
```

Expected: Migration applied successfully, tables created.

- [ ] **Step 3: Commit**

```bash
git add drizzle/0023_outreach_campaigns.sql
git commit -m "feat(outreach): add campaign database migration"
```

---

## Task 2: Drizzle Schema Definitions

**Files:**
- Modify: `src/lib/db/schema.ts`

Add the campaign tables and new enums to the Drizzle schema, plus the new prospect columns.

- [ ] **Step 1: Add new enums and prospect columns**

Add after the existing `prospectSourceEnum` definition in `src/lib/db/schema.ts`. The `prospect_source` enum already exists in Drizzle -- add `"lso_directory"` to its values array.

Update the `prospectSourceEnum` definition:
```typescript
export const prospectSourceEnum = pgEnum("prospect_source", [
  "website", "referral", "social_media", "cold_call", "networking", "other", "lso_directory",
]);
```

Add `city` and `firstContactedAt` columns to the `prospects` table definition:
```typescript
city: text("city"),
firstContactedAt: timestamp("first_contacted_at"),
```

Add new enums:
```typescript
export const campaignStatusEnum = pgEnum("campaign_status", [
  "draft", "active", "paused", "completed",
]);

export const stepChannelEnum = pgEnum("step_channel", [
  "email", "linkedin", "call",
]);

export const sendStatusEnum = pgEnum("send_status", [
  "pending", "sent", "opened", "clicked", "replied", "bounced", "unsubscribed", "completed",
]);
```

- [ ] **Step 2: Add campaign tables**

Add after the prospects table in `src/lib/db/schema.ts`:

```typescript
export const campaigns = pgTable(
  "campaigns",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id").references(() => users.id).notNull(),
    name: text("name").notNull(),
    status: campaignStatusEnum("status").default("draft").notNull(),
    practiceArea: text("practice_area"),
    totalSent: integer("total_sent").default(0).notNull(),
    totalOpened: integer("total_opened").default(0).notNull(),
    totalClicked: integer("total_clicked").default(0).notNull(),
    totalReplied: integer("total_replied").default(0).notNull(),
    totalUnsubscribed: integer("total_unsubscribed").default(0).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("campaigns_user_id_idx").on(table.userId),
  ]
);

export const campaignSteps = pgTable(
  "campaign_steps",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    campaignId: uuid("campaign_id").references(() => campaigns.id, { onDelete: "cascade" }).notNull(),
    stepNumber: integer("step_number").notNull(),
    channel: stepChannelEnum("channel").default("email").notNull(),
    subject: text("subject").notNull(),
    body: text("body").notNull(),
    delayDays: integer("delay_days").default(0).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("campaign_steps_campaign_id_idx").on(table.campaignId),
  ]
);

export const campaignSends = pgTable(
  "campaign_sends",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    campaignId: uuid("campaign_id").references(() => campaigns.id, { onDelete: "cascade" }).notNull(),
    stepId: uuid("step_id").references(() => campaignSteps.id, { onDelete: "cascade" }).notNull(),
    prospectId: uuid("prospect_id").references(() => prospects.id, { onDelete: "cascade" }).notNull(),
    channel: stepChannelEnum("channel").default("email").notNull(),
    status: sendStatusEnum("status").default("pending").notNull(),
    subject: text("subject").notNull(),
    body: text("body").notNull(),
    resendId: text("resend_id"),
    sentAt: timestamp("sent_at"),
    openedAt: timestamp("opened_at"),
    clickedAt: timestamp("clicked_at"),
    repliedAt: timestamp("replied_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("campaign_sends_campaign_id_idx").on(table.campaignId),
    index("campaign_sends_prospect_id_idx").on(table.prospectId),
    index("campaign_sends_status_idx").on(table.status),
    index("campaign_sends_channel_idx").on(table.channel),
  ]
);

export const emailUnsubscribes = pgTable("email_unsubscribes", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  reason: text("reason"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
```

- [ ] **Step 3: Verify build**

```bash
npx tsc --noEmit
```

Expected: No type errors.

- [ ] **Step 4: Commit**

```bash
git add src/lib/db/schema.ts
git commit -m "feat(outreach): add campaign schema definitions"
```

---

## Task 3: Outreach Router -- Core CRUD

**Files:**
- Create: `src/lib/outreach/helpers.ts`
- Create: `src/server/routers/outreach.ts`
- Modify: `src/server/routers/_app.ts`
- Modify: `src/server/routers/prospects.ts`

Revive the outreach router from commit `fddddfc` with multi-channel support. This task covers the CRUD operations and email sequences. Sending logic is included here (revived from reverted code) but updated for multi-channel.

- [ ] **Step 1: Create shared helpers**

Create `src/lib/outreach/helpers.ts` with the `personalize`, `rewriteLinks`, and `buildOutreachHtml` functions. These are shared between the router and the Inngest cron:

```typescript
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://getatticus.ca";
const CALENDLY_URL = process.env.CALENDLY_URL ?? "https://calendly.com/getatticus/demo";

export function personalize(
  template: string,
  vars: Record<string, string | undefined | null>
): string {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replaceAll(`{{${key}}}`, value ?? "");
  }
  return result;
}

export function rewriteLinks(html: string, sendId: string): string {
  return html.replace(
    /href="(https?:\/\/[^"]+)"/g,
    (_, url: string) => `href="${APP_URL}/api/track?sid=${sendId}&url=${encodeURIComponent(url)}"`
  );
}

export function buildOutreachHtml(body: string, sendId: string, email: string): string {
  // ... (same implementation as shown in Task 3 Step 2 below, using APP_URL and CALENDLY_URL)
}

/** Check if CASL implied consent is still valid (6-month window) */
export function isConsentValid(firstContactedAt: Date | null): boolean {
  if (!firstContactedAt) return true; // Never contacted = can contact
  const sixMonthsLater = new Date(firstContactedAt);
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
  return new Date() < sixMonthsLater;
}
```

- [ ] **Step 2: Create outreach router with email sequences**

Create `src/server/routers/outreach.ts`. Import helpers from `@/lib/outreach/helpers`. Start with the imports and pre-built email sequences from the reverted commit `fddddfc`:

```typescript
import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import {
  campaigns,
  campaignSteps,
  campaignSends,
  prospects,
  emailUnsubscribes,
} from "@/lib/db/schema";
import { eq, and, desc, inArray, sql } from "drizzle-orm";
import { z } from "zod";
import { resend } from "@/lib/email/client";
import { personalize, buildOutreachHtml, isConsentValid } from "@/lib/outreach/helpers";

const OUTREACH_FROM_EMAIL = process.env.OUTREACH_FROM_EMAIL ?? "Marc from Atticus <marc@outreach.getatticus.ca>";
```

Then add the `EMAIL_SEQUENCES` object -- copy the full 5-sequence object from the reverted commit `fddddfc` (family_law, real_estate, criminal_defence, corporate, civil_litigation). Each sequence keeps its 4 email steps and adds 2 new steps for LinkedIn (day 5) and call (day 10). Update each sequence's steps array to include a `channel` field:

For each of the 5 sequences, insert after step 2 (the day-3 follow-up):
```typescript
{
  subject: "LinkedIn connection request",
  delayDays: 5,
  channel: "linkedin" as const,
  body: `Connect with {{firstName}} on LinkedIn.\n\nSuggested note: "Hi {{firstName}}, I'm Marc -- I built an AI assistant for Ontario [practice area] lawyers. Would love to connect and share what we're doing with Atticus."`,
},
```

And insert before the final "closing the loop" step:
```typescript
{
  subject: "Cold call -- {{firstName}} at {{firmName}}",
  delayDays: 10,
  channel: "call" as const,
  body: `Call {{firstName}} at {{firmName}}.\n\nTalking points:\n- Introduce yourself and Atticus briefly\n- Ask about their current approach to [pain point for practice area]\n- Mention the AI briefing and deadline tracking\n- Offer the 15-min demo if interested\n- If not interested, thank them and move on`,
},
```

- [ ] **Step 2: Add CRUD procedures**

Add the `outreachRouter` export with these procedures (revived from `fddddfc`, patterns match existing `prospectsRouter`):

- `listCampaigns` -- query by userId, order by createdAt desc
- `getCampaign` -- by id + userId, includes steps and sends
- `createCampaign` -- insert campaign, optionally populate steps from template (updated to include `channel` field from sequence steps)
- `updateCampaign` -- partial update with status changes
- `deleteCampaign` -- delete by id + userId
- `upsertStep` -- create or update a campaign step (add `channel` field to input schema)
- `deleteStep` -- delete step by id
- `getTemplates` -- list available email sequence templates

These are identical to the reverted code except `upsertStep` and `createCampaign` now handle the `channel` field.

- [ ] **Step 3: Add sending and advancement procedures**

Add these procedures (revived from `fddddfc` with modifications):

- `addProspectsToCampaign` -- queue step 1 sends for prospects. Updated: sets `channel` from step, sets `firstContactedAt` on prospect if not already set, checks `isConsentValid(firstContactedAt)` to enforce CASL 6-month window, enforces max 1 active campaign per prospect (skips prospects who already have pending/sent sends in any active campaign)
- `sendBatch` -- send pending email sends via Resend. Updated: only processes `channel: "email"` sends, uses `OUTREACH_FROM_EMAIL`, sets `replyTo: "reply+{sendId}@outreach.getatticus.ca"`, uses `sql` template for counter increments (e.g., `totalSent: sql\`${campaigns.totalSent} + 1\``)
- `advanceStep` -- queue next step for prospects who completed previous step. Updated: handles all channels, checks `completed` status for LinkedIn/call steps, **skips prospects who have any send with status `replied`** (sequence pause enforcement)
- `markActionDone` -- NEW procedure. Marks a LinkedIn/call send as `completed`

```typescript
markActionDone: protectedProcedure
  .input(z.object({ sendId: z.string().uuid() }))
  .mutation(async ({ ctx, input }) => {
    const [send] = await ctx.db
      .select({ send: campaignSends, campaign: campaigns })
      .from(campaignSends)
      .innerJoin(campaigns, eq(campaignSends.campaignId, campaigns.id))
      .where(
        and(
          eq(campaignSends.id, input.sendId),
          eq(campaigns.userId, ctx.userId)
        )
      )
      .limit(1);
    if (!send) throw new Error("Send not found");

    const [updated] = await ctx.db
      .update(campaignSends)
      .set({ status: "completed", sentAt: new Date() })
      .where(eq(campaignSends.id, input.sendId))
      .returning();
    return updated;
  }),
```

- [ ] **Step 4: Add import and stats procedures**

Add these procedures (revived from `fddddfc` with modifications):

- `importProspects` -- CSV import with dedup. Updated: uses `source: "lso_directory"`, accepts `city` field
- `campaignStats` -- per-campaign analytics. Updated: counts `completed` status for LinkedIn/call actions
- `listUnsubscribes` -- list all unsubscribed emails
- `actionItems` -- NEW procedure. Returns today's pending LinkedIn/call sends for the user

```typescript
actionItems: protectedProcedure.query(async ({ ctx }) => {
  const items = await ctx.db
    .select({
      send: campaignSends,
      prospect: prospects,
      campaign: campaigns,
      step: campaignSteps,
    })
    .from(campaignSends)
    .innerJoin(prospects, eq(campaignSends.prospectId, prospects.id))
    .innerJoin(campaigns, eq(campaignSends.campaignId, campaigns.id))
    .innerJoin(campaignSteps, eq(campaignSends.stepId, campaignSteps.id))
    .where(
      and(
        eq(campaigns.userId, ctx.userId),
        eq(campaigns.status, "active"),
        eq(campaignSends.status, "pending"),
        inArray(campaignSends.channel, ["linkedin", "call"])
      )
    )
    .orderBy(campaignSends.createdAt);
  return items;
}),
```

- [ ] **Step 5: Update prospects router sourceValues**

In `src/server/routers/prospects.ts`, update line 8:
```typescript
const sourceValues = ["website", "referral", "social_media", "cold_call", "networking", "other", "lso_directory"] as const;
```

This ensures prospects created with `source: "lso_directory"` via the outreach CSV import can be updated through the prospects router without Zod validation errors.

- [ ] **Step 6: Register outreach router**

In `src/server/routers/_app.ts`, add:
```typescript
import { outreachRouter } from "./outreach";
```

And add to the router object:
```typescript
outreach: outreachRouter,
```

- [ ] **Step 7: Verify build**

```bash
npx tsc --noEmit
```

Expected: No type errors.

- [ ] **Step 8: Commit**

```bash
git add src/lib/outreach/helpers.ts src/server/routers/outreach.ts src/server/routers/_app.ts src/server/routers/prospects.ts
git commit -m "feat(outreach): add outreach router with campaigns, sending, and multi-channel"
```

---

## Task 4: Tracking and Unsubscribe Endpoints

**Files:**
- Create: `src/app/api/track/route.ts`
- Create: `src/app/api/unsubscribe/route.ts`
- Create: `src/app/unsubscribe/page.tsx`

- [ ] **Step 1: Create tracking endpoint**

Create `src/app/api/track/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { campaignSends } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// 1x1 transparent pixel
const PIXEL = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

export async function GET(req: NextRequest) {
  const sid = req.nextUrl.searchParams.get("sid");
  const redirectUrl = req.nextUrl.searchParams.get("url");

  if (sid) {
    try {
      const [send] = await db
        .select()
        .from(campaignSends)
        .where(eq(campaignSends.id, sid))
        .limit(1);

      if (send) {
        if (redirectUrl) {
          // Click tracking
          await db
            .update(campaignSends)
            .set({
              clickedAt: send.clickedAt ?? new Date(),
              status: send.status === "replied" ? "replied" : "clicked",
            })
            .where(eq(campaignSends.id, sid));
        } else {
          // Open tracking (pixel)
          await db
            .update(campaignSends)
            .set({
              openedAt: send.openedAt ?? new Date(),
              status: ["replied", "clicked"].includes(send.status) ? send.status : "opened",
            })
            .where(eq(campaignSends.id, sid));
        }
      }
    } catch {
      // Tracking should never break the user experience
    }
  }

  if (redirectUrl) {
    return NextResponse.redirect(redirectUrl);
  }

  return new NextResponse(PIXEL, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
```

- [ ] **Step 2: Create unsubscribe API route**

Create `src/app/api/unsubscribe/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { emailUnsubscribes } from "@/lib/db/schema";

export async function POST(req: NextRequest) {
  const { email, reason } = await req.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

  try {
    await db.insert(emailUnsubscribes).values({
      email: email.toLowerCase(),
      reason: reason ?? null,
    }).onConflictDoNothing();
  } catch {
    // Already unsubscribed
  }

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 3: Create public unsubscribe page**

Create `src/app/unsubscribe/page.tsx`:

```tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleUnsubscribe() {
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setDone(true);
      else setError("Something went wrong. Please try again.");
    } catch {
      setError("Something went wrong. Please try again.");
    }
  }

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md px-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Unsubscribed</h1>
          <p className="text-gray-600">
            {email} has been removed from our mailing list. You won&apos;t receive any more emails from us.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md px-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Unsubscribe</h1>
        <p className="text-gray-600 mb-6">
          Click below to unsubscribe <strong>{email}</strong> from all future emails.
        </p>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <button
          onClick={handleUnsubscribe}
          className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Unsubscribe
        </button>
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-600">Loading...</p>
      </div>
    }>
      <UnsubscribeContent />
    </Suspense>
  );
}
```

**Note:** The `/unsubscribe` route is outside the `(dashboard)` route group so it does not require authentication. If there is a Clerk middleware that protects all routes, ensure `/unsubscribe` and `/api/unsubscribe` are in the public routes list.

- [ ] **Step 4: Verify build**

```bash
npx tsc --noEmit
```

- [ ] **Step 5: Commit**

```bash
git add src/app/api/track/route.ts src/app/api/unsubscribe/route.ts src/app/unsubscribe/page.tsx
git commit -m "feat(outreach): add tracking pixel, click redirect, and unsubscribe endpoints"
```

---

## Task 5: Resend Outbound Event Webhook

**Files:**
- Create: `src/app/api/webhooks/resend-events/route.ts`

Handles Resend's outbound event webhooks (email.delivered, email.opened, email.clicked, email.bounced, email.complained). This is separate from the email intake webhook at `/api/webhooks/email/route.ts`.

**Important:** Both new webhook endpoints must verify request authenticity. Use `verifyResendWebhook` from `@/lib/email/verify-webhook` (already exists in the codebase) or add a separate signing secret for outreach webhooks. Without verification, anyone who discovers the URL can forge events.

- [ ] **Step 1: Create the webhook handler**

Create `src/app/api/webhooks/resend-events/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { campaignSends, emailUnsubscribes } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// Status hierarchy for watermark logic
const STATUS_RANK: Record<string, number> = {
  pending: 0,
  sent: 1,
  opened: 2,
  clicked: 3,
  replied: 4,
  bounced: 0,
  unsubscribed: 0,
  completed: 0,
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { type, data } = body;

  // Resend outbound events include the email ID we stored as resendId
  const resendId = data?.email_id;
  if (!resendId) return NextResponse.json({ ok: true });

  // Find the campaign send by resendId
  const [send] = await db
    .select()
    .from(campaignSends)
    .where(eq(campaignSends.resendId, resendId))
    .limit(1);

  if (!send) return NextResponse.json({ ok: true });

  const now = new Date();

  switch (type) {
    case "email.delivered":
      if ((STATUS_RANK[send.status] ?? 0) < (STATUS_RANK["sent"] ?? 1)) {
        await db
          .update(campaignSends)
          .set({ status: "sent", sentAt: send.sentAt ?? now })
          .where(eq(campaignSends.id, send.id));
      }
      break;

    case "email.opened":
      await db
        .update(campaignSends)
        .set({
          openedAt: send.openedAt ?? now,
          status: (STATUS_RANK[send.status] ?? 0) < (STATUS_RANK["opened"] ?? 2) ? "opened" : send.status,
        })
        .where(eq(campaignSends.id, send.id));
      break;

    case "email.clicked":
      await db
        .update(campaignSends)
        .set({
          clickedAt: send.clickedAt ?? now,
          status: (STATUS_RANK[send.status] ?? 0) < (STATUS_RANK["clicked"] ?? 3) ? "clicked" : send.status,
        })
        .where(eq(campaignSends.id, send.id));
      break;

    case "email.bounced":
      await db
        .update(campaignSends)
        .set({ status: "bounced" })
        .where(eq(campaignSends.id, send.id));
      break;

    case "email.complained":
      // Treat complaint like unsubscribe
      await db
        .update(campaignSends)
        .set({ status: "unsubscribed" })
        .where(eq(campaignSends.id, send.id));

      // Add to blocklist
      if (data?.to?.[0]) {
        await db
          .insert(emailUnsubscribes)
          .values({ email: String(data.to[0]).toLowerCase() })
          .onConflictDoNothing();
      }
      break;
  }

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 2: Verify build**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/app/api/webhooks/resend-events/route.ts
git commit -m "feat(outreach): add Resend outbound event webhook handler"
```

---

## Task 6: Reply Detection Webhook

**Files:**
- Create: `src/app/api/webhooks/outreach-inbound/route.ts`

Handles inbound emails to `reply+{sendId}@outreach.getatticus.ca`. Uses Claude Haiku to classify reply sentiment and auto-moves positive replies to `consultation_booked`.

- [ ] **Step 1: Create the inbound reply handler**

Create `src/app/api/webhooks/outreach-inbound/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { campaignSends, campaigns, prospects } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import { anthropic } from "@/lib/ai/anthropic";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Resend inbound webhook payload
  const to = body.to?.[0] ?? "";
  const text = body.text ?? body.html ?? "";

  // Extract sendId from reply-to address: reply+{sendId}@outreach.getatticus.ca
  const match = String(to).match(/reply\+([a-f0-9-]+)@/i);
  if (!match) return NextResponse.json({ ok: true });

  const sendId = match[1]!;

  // Find the campaign send
  const [send] = await db
    .select()
    .from(campaignSends)
    .where(eq(campaignSends.id, sendId))
    .limit(1);

  if (!send) return NextResponse.json({ ok: true });

  // Update send status to replied
  await db
    .update(campaignSends)
    .set({
      status: "replied",
      repliedAt: new Date(),
    })
    .where(eq(campaignSends.id, sendId));

  // Update campaign reply count (use sql increment, not column reference)
  await db
    .update(campaigns)
    .set({
      totalReplied: sql`${campaigns.totalReplied} + 1`,
      updatedAt: new Date(),
    })
    .where(eq(campaigns.id, send.campaignId));

  // Classify reply sentiment with Claude Haiku
  try {
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 50,
      system: "Classify the sentiment of this email reply to a cold outreach message. Reply with exactly one word: POSITIVE (interested, wants to learn more, agrees to demo), NEGATIVE (not interested, asks to stop), or NEUTRAL (out of office, unclear, asking a question).",
      messages: [{ role: "user", content: String(text).slice(0, 1000) }],
    });

    const sentiment = (message.content[0]?.type === "text" ? message.content[0].text : "").trim().toUpperCase();

    if (sentiment === "POSITIVE") {
      // Auto-move prospect to consultation_booked
      await db
        .update(prospects)
        .set({
          stage: "consultation_booked",
          updatedAt: new Date(),
        })
        .where(eq(prospects.id, send.prospectId));
    }
  } catch {
    // Sentiment classification failure should not break reply tracking
  }

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 2: Verify build**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/app/api/webhooks/outreach-inbound/route.ts
git commit -m "feat(outreach): add reply detection webhook with AI sentiment classification"
```

---

## Task 7: Inngest Outreach Cron

**Files:**
- Create: `src/lib/inngest/outreach-cron.ts`
- Modify: `src/lib/inngest/functions.ts`

Daily cron that: (1) advances prospects to next sequence steps, (2) sends pending email sends for active campaigns.

- [ ] **Step 1: Create the cron function**

Create `src/lib/inngest/outreach-cron.ts`. This function:

1. Runs at 9am ET (1pm UTC) on weekdays only: `{ cron: "0 13 * * 1-5" }`
2. Uses `inngest.createFunction` with `id: "outreach-daily-send"` and `retries: 3`
3. Has two `step.run()` blocks:

**"advance-sequences" step:**
- Gets all active campaigns
- For each campaign, gets steps and all sends grouped by prospect
- Skips prospects who have replied
- Finds the highest completed/sent step number per prospect
- If enough days have passed since that step, creates a new `campaign_sends` record for the next step (with correct `channel` from the step definition)
- Personalizes subject/body with prospect data (firstName, firmName, city, practiceArea)
- Returns count of queued sends

**"send-pending-emails" step:**
- Counts emails already sent today (for idempotency / daily cap)
- If at limit (20/day), returns early
- Gets pending email-channel sends for active campaigns, limited to remaining daily cap
- For each: calls `resend.emails.send()` with `OUTREACH_FROM_EMAIL`, `replyTo: reply+{sendId}@outreach.getatticus.ca`, and HTML built by `buildOutreachHtml`
- Updates send status to "sent" with sentAt and resendId
- Updates campaign totalSent counter
- Returns sent/error counts

Import `personalize`, `buildOutreachHtml`, and `isConsentValid` from `@/lib/outreach/helpers` (created in Task 3).

The advance-sequences step must explicitly skip prospects with any send in `replied` status -- this enforces the "sequence pauses on reply" requirement from the spec. Also check `isConsentValid(prospect.firstContactedAt)` before creating new sends to enforce the CASL 6-month window.

- [ ] **Step 2: Register the function**

In `src/lib/inngest/functions.ts`, add:
```typescript
import { outreachCron } from "./outreach-cron";
```

And add `outreachCron` to the `inngestFunctions` array.

- [ ] **Step 3: Verify build**

```bash
npx tsc --noEmit
```

- [ ] **Step 4: Commit**

```bash
git add src/lib/inngest/outreach-cron.ts src/lib/inngest/functions.ts
git commit -m "feat(outreach): add daily Inngest cron for sequence advancement and email sending"
```

---

## Task 8: Dashboard UI

**Files:**
- Create: `src/app/(dashboard)/outreach/page.tsx`
- Modify: `src/components/layout/sidebar.tsx`

Build the outreach dashboard with 3 tabs: Campaigns, Action Items, Analytics.

- [ ] **Step 1: Add sidebar nav item**

In `src/components/layout/sidebar.tsx`, add to the `navItems` array:
```typescript
{ href: "/outreach", label: "Outreach", icon: Send },
```

Import `Send` from `lucide-react`. Place it after the Prospects nav item.

- [ ] **Step 2: Create the outreach page**

Create `src/app/(dashboard)/outreach/page.tsx`. This is a `"use client"` component with 3 tabs using shadcn Tabs. Follow the same patterns as `src/app/(dashboard)/prospects/page.tsx`:

**Top stats bar:**
- Use `trpc.outreach.campaignStats` or aggregate from campaign list
- Display: Total Sent, Open Rate, Click Rate, Reply Rate

**Tab 1 -- Campaigns:**
- List campaigns with status badge (draft/active/paused/completed) using shadcn Badge
- "New Campaign" button opens a Dialog with: name input, practice area select, template selector (from `trpc.outreach.getTemplates`)
- Click campaign to expand and show steps + assigned prospects
- Start/Pause/Delete action buttons
- "Add Prospects" button opens multi-select dialog listing prospects from `trpc.prospects.list`
- "Send Batch" button for manual sends (calls `trpc.outreach.sendBatch`)
- "Import CSV" button with file input, client-side CSV parsing, calls `trpc.outreach.importProspects`

**Tab 2 -- Action Items:**
- Uses `trpc.outreach.actionItems` query
- Cards for each pending LinkedIn/call action
- Shows: prospect name, firm, channel icon (Linkedin or Phone from lucide-react), body text as talking points
- "Mark Done" button calls `trpc.outreach.markActionDone`
- Empty state: "No action items today"

**Tab 3 -- Analytics:**
- Per-campaign stats from `trpc.outreach.campaignStats`
- Funnel display: sent, opened, clicked, replied as horizontal bars with percentages
- Use shadcn Progress component or plain styled divs
- No external charting library needed

Use existing shadcn components: `Button`, `Card`, `CardContent`, `CardHeader`, `CardTitle`, `Badge`, `Dialog`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogTrigger`, `Input`, `Select`, `SelectContent`, `SelectItem`, `SelectTrigger`, `SelectValue`, `Tabs`, `TabsContent`, `TabsList`, `TabsTrigger`, `Table`, `TableBody`, `TableCell`, `TableHead`, `TableHeader`, `TableRow`.

Follow the existing UI patterns from the prospects page: dark theme, same spacing, same component usage.

- [ ] **Step 3: Add campaign badges to prospects page**

Modify `src/app/(dashboard)/prospects/page.tsx`:
- Add a query to check if a prospect has active campaign sends (or join campaign data)
- For prospects with `source === "lso_directory"`, show a small "LSO" badge
- For prospects assigned to an active campaign, show a badge with the campaign name and current step number
- Clicking the badge navigates to `/outreach` filtered to that campaign

- [ ] **Step 4: Verify build**

```bash
npx tsc --noEmit
```

- [ ] **Step 5: Verify page renders**

```bash
npm run dev
```

Navigate to `http://localhost:3000/outreach` and verify the page loads without errors. Navigate to `/prospects` and verify badges appear correctly.

- [ ] **Step 6: Commit**

```bash
git add src/app/(dashboard)/outreach/page.tsx src/components/layout/sidebar.tsx src/app/(dashboard)/prospects/page.tsx
git commit -m "feat(outreach): add outreach dashboard UI with campaigns, action items, and analytics"
```

---

## Task 9: LSO Directory Scraper

**Files:**
- Create: `scripts/scrape-lso.ts`

Standalone Playwright script that scrapes the Law Society of Ontario's public lawyer directory.

- [ ] **Step 1: Install Playwright as dev dependency**

```bash
npm install -D playwright
npx playwright install chromium
```

- [ ] **Step 2: Create the scraper script**

Create `scripts/scrape-lso.ts`. This is a standalone script run with `npx tsx scripts/scrape-lso.ts`.

Structure:
- Parse CLI args: `--area`, `--city`, `--max`, `--output`
- Load existing CSV for dedup (by email)
- Launch Playwright chromium headless
- Navigate to LSO directory: `https://lso.ca/public-resources/finding-a-lawyer-or-paralegal/lawyer-and-paralegal-directory`
- Enter search criteria (practice area, city)
- Paginate through results with 2-3 second delays between pages
- Extract per lawyer: name, firmName, city, practiceAreas, phone, email, website
- For lawyers without email, attempt to find contact email on firm website
- Write/append to CSV with header: `name,firmName,city,practiceAreas,phone,email,website`
- Retry failed pages up to 3 times with exponential backoff

**Important note:** The actual CSS selectors for the LSO directory page need to be determined by inspecting the live site. The script provides the framework; selectors are filled in during first run using `npx playwright codegen https://lso.ca/...` to generate them interactively.

- [ ] **Step 3: Verify script runs**

```bash
npx tsx scripts/scrape-lso.ts --area "Family Law" --city "Toronto" --max 5
```

Expected: Script launches browser, navigates to LSO directory, prints page title. Actual scraping logic will need selector configuration on first run.

- [ ] **Step 4: Commit**

```bash
git add scripts/scrape-lso.ts package.json package-lock.json
git commit -m "feat(outreach): add LSO directory scraper scaffold"
```

---

## Task 10: Environment and Configuration

**Files:**
- Modify: `.env.example`

- [ ] **Step 1: Add new environment variables**

Add to `.env.example`:
```bash
# Outreach
OUTREACH_FROM_EMAIL="Marc from Atticus <marc@outreach.getatticus.ca>"
CALENDLY_URL="https://calendly.com/getatticus/demo"
```

- [ ] **Step 2: Commit**

```bash
git add .env.example
git commit -m "feat(outreach): add outreach environment variables"
```

---

## Execution Order

Tasks can be partially parallelized:

```
Task 1 (migration) -> Task 2 (schema) -> Task 3 (router)
                                       -> Task 4 (tracking)
                                       -> Task 5 (resend events webhook)
                                       -> Task 6 (reply webhook)
                                       -> Task 7 (inngest cron)
Task 3 complete -> Task 8 (dashboard UI)
Task 9 (scraper) -- independent, can run anytime
Task 10 (env) -- independent, can run anytime
```

Tasks 1 then 2 must be sequential. After Task 2, Tasks 3-7 can run in parallel. Task 8 depends on Task 3 (needs the router types). Tasks 9 and 10 are fully independent.
