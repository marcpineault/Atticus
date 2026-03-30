# Email Intake — Full Omniscience Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the existing email intake webhook production-ready by adding Haiku thread cleaning, attachment processing, webhook signature verification, Message-ID dedup, and intake email auto-generation — so every email a lawyer receives flows automatically into Atticus's AI pipeline.

**Architecture:** The email webhook at `/api/webhooks/email/route.ts` already handles user matching, client matching, document creation, and pipeline triggering. We upgrade it in-place: add HMAC verification at the top, thread cleaning via a new Haiku module, attachment upload to R2 with parallel ingestion, and Message-ID dedup via the existing `sourceId` column. A new Inngest function generates intake email addresses for users who don't have one yet.

**Tech Stack:** Next.js API routes, Anthropic Claude Haiku (thread cleaning), Cloudflare R2 (attachment storage), Inngest (background processing), Drizzle ORM, Resend (inbound webhooks)

**Spec:** `docs/superpowers/specs/` (design validated in brainstorming session 2026-03-21)

---

## File Structure

```
# New files
src/lib/ingestion/clean-email-thread.ts   — Haiku-powered thread cleaning (extract newest message)
src/lib/email/verify-webhook.ts            — Resend HMAC signature verification

# Modified files
src/app/api/webhooks/email/route.ts        — Add verification, thread cleaning, attachments, dedup
src/app/(dashboard)/settings/page.tsx      — Add forwarding setup instructions
src/server/routers/users.ts               — Add generateIntakeEmail mutation
drizzle/0020_intake_email_backfill.sql    — Data migration: backfill existing users with intake addresses
```

---

## Task 1: Thread Cleaning Module

Create a standalone module that sends email text to Haiku and extracts only the newest message, stripping quoted reply chains.

**Files:**
- Create: `src/lib/ingestion/clean-email-thread.ts`

- [ ] **Step 1: Create the thread cleaning module**

```typescript
// src/lib/ingestion/clean-email-thread.ts
import { anthropic } from "@/lib/ai/anthropic";

/**
 * Uses Claude Haiku to extract only the newest message from an email thread.
 * Strips quoted reply chains, forwarded headers, and signature blocks.
 * Returns the cleaned text, or the original if cleaning fails.
 */
export async function cleanEmailThread(rawBody: string): Promise<string> {
  // Short emails don't need cleaning — no reply chain possible
  if (rawBody.length < 500) return rawBody;

  // Quick heuristic: if no reply indicators, skip the API call
  const hasReplyIndicators =
    /^>+ /m.test(rawBody) ||
    /^On .+ wrote:$/m.test(rawBody) ||
    /^-{3,}\s*Original Message\s*-{3,}/im.test(rawBody) ||
    /^From:\s.+\nSent:\s/im.test(rawBody) ||
    /^Begin forwarded message:/im.test(rawBody);

  if (!hasReplyIndicators) return rawBody;

  try {
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4096,
      system: `You are an email parser. Extract ONLY the newest message from this email thread.

Rules:
- Remove all quoted reply text (lines starting with ">")
- Remove "On [date], [person] wrote:" headers and everything below them
- Remove "--- Original Message ---" blocks and everything below
- Remove "Begin forwarded message:" blocks — but keep the forwarded content if it IS the newest message
- Remove email signatures (lines after "-- " or common sign-off patterns)
- Keep the Subject and From lines if they appear at the very top
- If the email has no reply chain, return it as-is
- Return ONLY the extracted text, no commentary or explanation`,
      messages: [{ role: "user", content: rawBody.slice(0, 15000) }],
    });

    const content = message.content[0];
    if (content?.type === "text" && content.text.trim().length > 20) {
      return content.text.trim();
    }
    return rawBody;
  } catch {
    // If Haiku fails, fall back to raw body — entity extraction handles noise well
    return rawBody;
  }
}
```

- [ ] **Step 2: Verify the module compiles**

Run: `npx tsc --noEmit src/lib/ingestion/clean-email-thread.ts` (or full project check)
Expected: No type errors

- [ ] **Step 3: Commit**

```bash
git add src/lib/ingestion/clean-email-thread.ts
git commit -m "feat: add Haiku-powered email thread cleaning module"
```

---

## Task 2: Webhook Signature Verification

Create a module to verify Resend's webhook signatures. Resend uses Svix under the hood — the `resend` npm package (already installed) exposes a `Webhook` class that handles verification using the `svix-id`, `svix-timestamp`, and `svix-signature` headers.

**Files:**
- Create: `src/lib/email/verify-webhook.ts`

- [ ] **Step 1: Create the verification module**

```typescript
// src/lib/email/verify-webhook.ts
import { Webhook } from "svix";

const RESEND_WEBHOOK_SECRET = process.env.RESEND_WEBHOOK_SECRET;

/**
 * Verify Resend inbound webhook using Svix signature verification.
 * Resend signs webhooks via Svix — requires svix-id, svix-timestamp, svix-signature headers.
 * Returns the verified payload if valid, or null if verification fails.
 * If no webhook secret is configured (dev mode), skips verification and parses JSON directly.
 */
export function verifyResendWebhook(
  rawBody: string,
  headers: {
    svixId: string | null;
    svixTimestamp: string | null;
    svixSignature: string | null;
  }
): unknown | null {
  if (!RESEND_WEBHOOK_SECRET) {
    // No secret configured — skip verification (dev mode)
    try {
      return JSON.parse(rawBody);
    } catch {
      return null;
    }
  }

  if (!headers.svixId || !headers.svixTimestamp || !headers.svixSignature) {
    return null;
  }

  try {
    const wh = new Webhook(RESEND_WEBHOOK_SECRET);
    return wh.verify(rawBody, {
      "svix-id": headers.svixId,
      "svix-timestamp": headers.svixTimestamp,
      "svix-signature": headers.svixSignature,
    });
  } catch {
    return null;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/email/verify-webhook.ts
git commit -m "feat: add Resend webhook Svix signature verification"
```

---

## Task 3: Upgrade Email Webhook

Integrate thread cleaning, attachment processing, signature verification, and Message-ID dedup into the existing webhook handler.

**Files:**
- Modify: `src/app/api/webhooks/email/route.ts`

- [ ] **Step 1: Rewrite the webhook handler**

Replace the entire `POST` handler in `src/app/api/webhooks/email/route.ts` with the upgraded version. Key changes:

1. **Signature verification** — check Resend HMAC before processing
2. **Message-ID dedup** — use the `sourceId` column to reject already-processed emails
3. **Thread cleaning** — run `cleanEmailThread()` on the email body before creating the document
4. **Attachment processing** — for each PDF/DOCX/TXT attachment, upload base64 content to R2 and trigger a separate `document/uploaded` event
5. **Fuzzy client matching** — fall back to case-insensitive name search if email doesn't match

The updated handler:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { documents, users, clients, matters } from "@/lib/db/schema";
import { eq, and, desc, ilike } from "drizzle-orm";
import { inngest } from "@/lib/inngest/client";
import { verifyResendWebhook } from "@/lib/email/verify-webhook";
import { cleanEmailThread } from "@/lib/ingestion/clean-email-thread";
import { uploadToR2 } from "@/lib/r2/signed-url";
import { randomUUID } from "crypto";

// Resend inbound email payload shape
interface ResendInboundPayload {
  from: string;
  to: string[];
  subject?: string;
  text?: string;
  html?: string;
  headers?: Record<string, string>;
  attachments?: Array<{
    filename: string;
    content: string;       // base64
    contentType: string;
  }>;
}

// File types the ingestion pipeline supports
const ALLOWED_ATTACHMENT_TYPES: Record<string, string> = {
  "application/pdf": ".pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
  "text/plain": ".txt",
};

function stripHtml(html: string): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function extractEmail(raw: string): string {
  return (raw.match(/<([^>]+)>/)?.[1] ?? raw).trim().toLowerCase();
}

function extractName(raw: string): string | null {
  const match = raw.match(/^"?([^"<]+)"?\s*</);
  return match?.[1]?.trim() ?? null;
}

export async function POST(req: NextRequest) {
  // --- 1. Signature verification (Resend uses Svix) ---
  const rawBody = await req.text();
  const verified = verifyResendWebhook(rawBody, {
    svixId: req.headers.get("svix-id"),
    svixTimestamp: req.headers.get("svix-timestamp"),
    svixSignature: req.headers.get("svix-signature"),
  });

  if (!verified) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const payload = verified as ResendInboundPayload;

  // --- 2. Message-ID dedup ---
  const messageId = payload.headers?.["message-id"] ?? payload.headers?.["Message-ID"];
  if (messageId) {
    const [existing] = await db
      .select({ id: documents.id })
      .from(documents)
      .where(eq(documents.sourceId, messageId))
      .limit(1);
    if (existing) {
      return NextResponse.json({ received: true, duplicate: true });
    }
  }

  // --- 3. Resolve user from intake address ---
  const toAddresses = payload.to ?? [];
  let userId: string | null = null;

  for (const toAddr of toAddresses) {
    const normalized = toAddr.toLowerCase().replace(/.*</, "").replace(/>.*/, "").trim();
    const [user] = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.intakeEmail, normalized))
      .limit(1);
    if (user) { userId = user.id; break; }
  }

  // Fallback: match by sender email (lawyer forwarding from their own address)
  if (!userId) {
    const fromEmail = extractEmail(payload.from);
    const [user] = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, fromEmail))
      .limit(1);
    if (user) userId = user.id;
  }

  if (!userId) {
    return NextResponse.json({ received: true });
  }

  // --- 4. Extract and clean email body ---
  const subject = payload.subject ?? "Forwarded Email";
  const rawEmailBody = payload.text ?? (payload.html ? stripHtml(payload.html) : "");

  if (!rawEmailBody.trim()) {
    return NextResponse.json({ received: true });
  }

  const cleanedBody = await cleanEmailThread(rawEmailBody);

  // --- 5. Smart client/matter matching ---
  let matchedClientId: string | null = null;
  let matchedMatterId: string | null = null;
  const fromEmail = extractEmail(payload.from);

  // Try exact email match
  const [emailMatch] = await db
    .select({ id: clients.id })
    .from(clients)
    .where(and(eq(clients.userId, userId), eq(clients.email, fromEmail)))
    .limit(1);

  if (emailMatch) {
    matchedClientId = emailMatch.id;
  }

  // Fallback: fuzzy name match (escape wildcards to prevent injection)
  if (!matchedClientId) {
    const fromName = extractName(payload.from);
    if (fromName && fromName.length > 2 && /^[a-zA-Z\s'-]+$/.test(fromName)) {
      const safeName = fromName.replace(/%/g, "").replace(/_/g, "");
      const [nameMatch] = await db
        .select({ id: clients.id })
        .from(clients)
        .where(and(eq(clients.userId, userId), ilike(clients.name, `%${safeName}%`)))
        .limit(1);
      if (nameMatch) matchedClientId = nameMatch.id;
    }
  }

  // Auto-assign to most recent active matter
  if (matchedClientId) {
    const [recentMatter] = await db
      .select({ id: matters.id })
      .from(matters)
      .where(and(
        eq(matters.userId, userId),
        eq(matters.clientId, matchedClientId),
        eq(matters.status, "active"),
      ))
      .orderBy(desc(matters.updatedAt))
      .limit(1);
    if (recentMatter) matchedMatterId = recentMatter.id;
  }

  // --- 6. Create email document ---
  const content = `Subject: ${subject}\nFrom: ${payload.from}\n\n${cleanedBody}`;

  const [doc] = await db.insert(documents).values({
    userId,
    title: subject.slice(0, 500),
    type: "email",
    status: "pending",
    rawContent: content,
    sourceId: messageId ?? null,
    clientId: matchedClientId ?? undefined,
    matterId: matchedMatterId ?? undefined,
  }).returning();

  if (!doc) {
    return NextResponse.json({ error: "Failed to create document" }, { status: 500 });
  }

  // Trigger ingestion for email body
  await inngest.send({
    name: "document/uploaded",
    data: { documentId: doc.id, userId },
  });

  // --- 7. Process attachments ---
  const attachmentIds: string[] = [];
  const validAttachments = (payload.attachments ?? []).filter(
    (a) => ALLOWED_ATTACHMENT_TYPES[a.contentType] && a.content
  );

  for (const attachment of validAttachments) {
    const buffer = Buffer.from(attachment.content, "base64");

    // Skip tiny attachments (< 100 bytes — likely empty or signature images)
    if (buffer.length < 100) continue;

    // Skip huge attachments (> 25 MB)
    if (buffer.length > 25 * 1024 * 1024) continue;

    const ext = ALLOWED_ATTACHMENT_TYPES[attachment.contentType] ?? ".bin";
    const filename = attachment.filename || `attachment${ext}`;
    const r2Key = `${userId}/${randomUUID()}/${filename}`;

    await uploadToR2(r2Key, buffer, attachment.contentType);

    const [attachDoc] = await db.insert(documents).values({
      userId,
      title: `${subject} — ${filename}`,
      type: "document",
      status: "pending",
      r2Key,
      sourceId: messageId ? `${messageId}:${filename}` : null,
      clientId: matchedClientId ?? undefined,
      matterId: matchedMatterId ?? undefined,
    }).returning();

    if (attachDoc) {
      attachmentIds.push(attachDoc.id);
      await inngest.send({
        name: "document/uploaded",
        data: { documentId: attachDoc.id, userId },
      });
    }
  }

  return NextResponse.json({
    received: true,
    documentId: doc.id,
    attachments: attachmentIds.length,
    matched: matchedClientId ? { clientId: matchedClientId, matterId: matchedMatterId } : null,
  });
}
```

- [ ] **Step 2: Verify the webhook compiles**

Run: `npx tsc --noEmit`
Expected: No type errors

- [ ] **Step 3: Commit**

```bash
git add src/app/api/webhooks/email/route.ts
git commit -m "feat: upgrade email webhook with thread cleaning, attachments, dedup, and signature verification"
```

---

## Task 4: Intake Email Auto-Generation

Generate short-ID intake email addresses for users. Add a tRPC mutation so users can regenerate their address, and create a migration to backfill existing users.

**Files:**
- Modify: `src/server/routers/users.ts` — add `generateIntakeEmail` mutation
- Create: `drizzle/0020_intake_email_backfill.sql` — backfill SQL

- [ ] **Step 1: Add the generateIntakeEmail mutation to the users router**

Add this mutation to `src/server/routers/users.ts` after the `recordAiConsent` mutation:

```typescript
  generateIntakeEmail: protectedProcedure
    .mutation(async ({ ctx }) => {
      // Check if user already has one
      const [user] = await ctx.db.select({ intakeEmail: users.intakeEmail })
        .from(users).where(eq(users.id, ctx.userId)).limit(1);
      if (user?.intakeEmail) return { intakeEmail: user.intakeEmail };

      // Generate a short unique ID (5 chars, alphanumeric lowercase)
      const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
      let shortId: string;
      let attempts = 0;
      do {
        shortId = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
        const intakeEmail = `${shortId}@intake.getatticus.ca`;
        const [existing] = await ctx.db.select({ id: users.id })
          .from(users).where(eq(users.intakeEmail, intakeEmail)).limit(1);
        if (!existing) {
          const [updated] = await ctx.db.update(users)
            .set({ intakeEmail })
            .where(eq(users.id, ctx.userId))
            .returning();
          return { intakeEmail: updated!.intakeEmail };
        }
        attempts++;
      } while (attempts < 10);

      throw new Error("Failed to generate unique intake email");
    }),
```

- [ ] **Step 2: Create the backfill migration**

```sql
-- drizzle/0020_intake_email_backfill.sql
-- DATA MIGRATION (not a schema change) — backfills intake_email for existing users.
-- Run once after deployment. Uses first 5 chars of UUID (already random/unique).
-- Safe to re-run: the WHERE clause skips users who already have an address.
UPDATE users
SET intake_email = concat(
  substring(replace(id::text, '-', '') from 1 for 5),
  '@intake.getatticus.ca'
)
WHERE intake_email IS NULL;
```

- [ ] **Step 3: Commit**

```bash
git add src/server/routers/users.ts drizzle/0020_intake_email_backfill.sql
git commit -m "feat: add intake email auto-generation and backfill migration"
```

---

## Task 5: Settings UI — Forwarding Instructions

Add collapsible Gmail and Outlook forwarding instructions to the existing Email Intake card on the Settings page. Also wire up a "Generate" button for users who don't have an intake email yet (calls the new mutation instead of showing "contact support").

**Files:**
- Modify: `src/app/(dashboard)/settings/page.tsx`

- [ ] **Step 1: Update the Email Intake card**

Replace the entire `{/* Email Intake Card */}` section (lines 296–341 of `src/app/(dashboard)/settings/page.tsx`) with:

```tsx
      {/* Email Intake Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email Intake
          </CardTitle>
          <CardDescription>
            Forward any client email to your personal Atticus address and it will be automatically processed, summarized, and searchable.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {user?.intakeEmail ? (
            <>
              <div className="flex items-center gap-2">
                <code className="flex-1 rounded bg-muted px-3 py-2 text-sm font-mono">{user.intakeEmail}</code>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(user.intakeEmail!);
                  }}
                >
                  <Copy className="h-3.5 w-3.5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Forward emails from your email client to this address. Atticus will extract deadlines, action items, key parties, and attachments (PDF, DOCX, TXT) automatically.
              </p>

              {/* Gmail instructions */}
              <details className="group">
                <summary className="flex cursor-pointer items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <span className="transition-transform group-open:rotate-90">▶</span>
                  How to set up auto-forwarding in Gmail
                </summary>
                <div className="mt-2 rounded-lg border bg-muted/30 p-3 text-xs text-muted-foreground space-y-1.5">
                  <p>1. Open Gmail → Settings (gear icon) → <strong>See all settings</strong></p>
                  <p>2. Go to the <strong>Forwarding and POP/IMAP</strong> tab</p>
                  <p>3. Click <strong>Add a forwarding address</strong> and paste your Atticus address</p>
                  <p>4. Gmail will send a verification email — Atticus will ignore it, so check your Gmail for the confirmation code from Google</p>
                  <p>5. Once verified, select <strong>&quot;Forward a copy of incoming mail to&quot;</strong> and choose your Atticus address</p>
                  <p>6. Recommended: keep <strong>&quot;Keep Gmail&apos;s copy in the Inbox&quot;</strong> selected</p>
                  <p className="text-muted-foreground/70 italic">Tip: To forward only specific emails, create a Gmail filter instead (e.g., forward only emails from client domains).</p>
                </div>
              </details>

              {/* Outlook instructions */}
              <details className="group">
                <summary className="flex cursor-pointer items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <span className="transition-transform group-open:rotate-90">▶</span>
                  How to set up auto-forwarding in Outlook
                </summary>
                <div className="mt-2 rounded-lg border bg-muted/30 p-3 text-xs text-muted-foreground space-y-1.5">
                  <p>1. Open Outlook on the web → Settings (gear icon) → <strong>Mail → Forwarding</strong></p>
                  <p>2. Check <strong>&quot;Enable forwarding&quot;</strong></p>
                  <p>3. Paste your Atticus intake address</p>
                  <p>4. Check <strong>&quot;Keep a copy of forwarded messages&quot;</strong></p>
                  <p>5. Click <strong>Save</strong></p>
                  <p className="text-muted-foreground/70 italic">Note: If your firm uses Microsoft 365, your IT admin may need to allow external forwarding in Exchange admin settings.</p>
                </div>
              </details>
            </>
          ) : (
            <div className="space-y-3">
              <div className="rounded-lg border border-dashed p-4 text-center space-y-3">
                <p className="text-sm text-muted-foreground">Your email intake address has not been generated yet.</p>
                <Button
                  type="button"
                  size="sm"
                  onClick={() => generateIntakeEmail.mutate()}
                  disabled={generateIntakeEmail.isPending}
                >
                  {generateIntakeEmail.isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Mail className="mr-2 h-4 w-4" />
                  )}
                  Generate Intake Address
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
```

- [ ] **Step 2: Wire up the mutation**

In the component's hook section (near the top of `SettingsPageContent`, around line 32), add:

```typescript
  const generateIntakeEmail = trpc.users.generateIntakeEmail.useMutation({
    onSuccess: () => utils.users.getSettings.invalidate(),
  });
```

- [ ] **Step 3: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: No type errors

- [ ] **Step 4: Commit**

```bash
git add src/app/(dashboard)/settings/page.tsx
git commit -m "feat: add email forwarding setup instructions and generate button to Settings"
```

---

## Task 6: Add RESEND_WEBHOOK_SECRET to Environment

**Files:**
- Modify: `.env.example` (if it exists)

- [ ] **Step 1: Add env var documentation**

Add `RESEND_WEBHOOK_SECRET=` to `.env.example` with a comment:

```
# Resend inbound email webhook — HMAC signing secret
# Get from: Resend Dashboard → Webhooks → Signing Secret
# Leave blank to skip verification (development only)
RESEND_WEBHOOK_SECRET=
```

- [ ] **Step 2: Commit**

```bash
git add .env.example
git commit -m "docs: add RESEND_WEBHOOK_SECRET to env example"
```

---

## Task 7: Final Integration — Verify Full Pipeline

- [ ] **Step 1: Run full type check**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 2: Run build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Final commit with all changes**

If any files were missed in prior commits:
```bash
git add -A
git commit -m "feat: complete email intake pipeline — thread cleaning, attachments, dedup, webhook verification"
```
