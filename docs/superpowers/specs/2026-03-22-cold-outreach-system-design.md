# Cold Outreach System for Atticus

**Date:** 2026-03-22
**Status:** Draft
**Author:** Marc + Claude

## Overview

A built-in cold outreach system for Atticus that sources leads from the Law Society of Ontario directory, runs multi-channel email sequences, and funnels interested lawyers into demo calls via Calendly. Targets solo/small firm Ontario lawyers — the same ICP as the product itself.

## Goals

- Source 50-100 qualified leads from the LSO directory for a first campaign
- Run automated email sequences with manual LinkedIn and call follow-ups
- Track opens, clicks, replies, and demo bookings
- Integrate with the existing prospects pipeline so leads flow naturally into the sales funnel
- Comply with CASL (Canadian Anti-Spam Legislation)

## Non-Goals (for now)

- Automated LinkedIn messaging (manual only — avoids LinkedIn ToS risk)
- Auto-dialing / VoIP for cold calls
- A/B testing across sequences (add once volume justifies it)
- Prospect scoring / lead enrichment beyond LSO data
- Multi-user / team support
- Calendly webhook integration (demo bookings tracked manually for now)

---

## 1. Lead Sourcing

### LSO Directory Scraper

Standalone Node script (`scripts/scrape-lso.ts`) that queries the Law Society of Ontario's public directory.

**Access method:** Playwright (headless browser) — the LSO directory is a dynamic web app. Rate limited with 2-3 second delays between requests to avoid IP blocking. Retry logic for failed pages (3 attempts with exponential backoff).

**What it extracts per lawyer:**
- Full name
- Firm name
- City
- Practice areas
- Phone number
- Email (if listed)
- Firm website URL (for email enrichment)

**Email enrichment:** For lawyers without a listed email, the script hits the firm's website to find a contact email address.

**Output:** CSV file with all fields, ready for import into the prospects table. Re-running the scraper appends new entries and deduplicates by email — it does not overwrite.

**Deduplication:** On import, checks against existing prospects (by email) and the email unsubscribe list. Skips matches.

**Round 1 target:** 50-100 solo/small firm lawyers across 2-3 practice areas in the GTA (family law, real estate, criminal defence).

---

## 2. Campaign Engine

Revives the outreach system from commit `fddddfc` with these additions:

### Multi-Channel Steps

Each sequence step has a `channel` field:
- `email` — sends automatically via Resend
- `linkedin` — surfaces as an action item on the dashboard (manual)
- `call` — surfaces as an action item with talking points + phone number (manual)

The Inngest cron creates `campaign_sends` records for all channel types. Email sends fire immediately; LinkedIn and call steps are created with status `pending` and appear as action items. The "Mark Done" button transitions them to `completed`.

### Scheduling

- Inngest cron job runs every morning at 9am ET
- Emails sent between 9-11am ET (peak lawyer email checking)
- No sends on weekends
- Max 20 emails/day (Resend warm-up — 10/day week 1, scale up)
- 3-day minimum gap between sequence steps
- Max 1 active campaign per prospect
- **Idempotency:** The cron checks `sent_at` dates to avoid double-sends. Daily cap enforced by counting `campaign_sends` with `sent_at` on the current date, not by trusting single cron execution. Inngest handles retries natively but the function is idempotent.

### Reply Detection

Replies are detected via a dedicated reply-to address pattern. Each outreach email sets `Reply-To: reply+{sendId}@outreach.getatticus.ca`. When a reply comes in, Resend's inbound webhook routes it to a dedicated handler (`src/app/api/webhooks/outreach-inbound/route.ts`) which:

1. Extracts the `sendId` from the reply-to address
2. Looks up the `campaign_sends` record
3. Updates status to `replied`, sets `replied_at`
4. Pauses the entire sequence for that prospect
5. Sends the reply body to Claude Haiku for sentiment classification:
   - Positive → prospect auto-moves to `consultation_booked`
   - Negative/neutral → sequence stays paused, user decides

### Outbound Event Tracking

A separate webhook endpoint (`src/app/api/webhooks/resend-events/route.ts`) handles Resend's outbound event webhooks for:
- `email.delivered` → status to `sent`
- `email.opened` → sets `opened_at` (status to `opened` if not already higher)
- `email.clicked` → sets `clicked_at` (status to `clicked` if not already higher)
- `email.bounced` → status to `bounced`, hard bounces flag the prospect email as invalid and exclude from future sends
- `email.complained` → treated like unsubscribe

**Status watermark:** The `status` field represents the "most advanced" engagement level. Individual timestamp columns (`sent_at`, `opened_at`, `clicked_at`, `replied_at`) are the source of truth for each event independently.

### Click Tracking

The `buildOutreachHtml` function rewrites all `<a href>` links to route through the tracking endpoint (e.g., `getatticus.ca/api/track?sid=X&url=ENCODED_URL`). The endpoint records the click, sets `clicked_at` on the `campaign_sends` record, and issues a 302 redirect to the original URL.

### Personalization

- Standard template variables: `{{firstName}}`, `{{firmName}}`, `{{city}}`, `{{practiceArea}}`
- AI personalization: Claude Haiku generates a one-line hook per prospect based on their practice area and city
- Calendly link auto-injected into every email CTA

### CASL Compliance

- **Legal basis:** "Conspicuously published business contact information" under CASL Section 10(9) — implied consent for B2B outreach to publicly listed business addresses
- **6-month window:** `first_contacted_at` timestamp tracked per prospect. Implied consent expires 6 months from first contact — no further outreach after that without express consent
- Unsubscribe link in every email
- Sender identification as required by CASL Section 6(2)(b)
- Mailing address in every email footer (Atticus · Toronto, Ontario, Canada)
- Unsubscribed emails permanently blocklisted across all campaigns
- Public unsubscribe page at `/unsubscribe`

---

## 3. Sequence Flow

Default sequence timeline for each prospect:

```
Day 0:   [email]    Relationship opener — practice-specific pain point, no hard pitch
Day 3:   [email]    Follow-up — specific feature/value prop
Day 5:   [linkedin]  Connection request with short note (manual)
Day 7:   [email]    Social proof or new feature angle
Day 10:  [call]     Dashboard shows talking points + phone number (manual)
Day 14:  [email]    Final "closing the loop" — low pressure, leave door open
```

### Pre-Built Sequences

5 practice-area-specific sequences (from reverted commit, updated with LinkedIn + call steps):
1. Family Law
2. Real Estate
3. Criminal Defence
4. Corporate/Commercial
5. Civil Litigation

Users can also create custom sequences from scratch.

---

## 4. Architecture & Data Flow

```
LSO Scraper (standalone script, Playwright)
    ↓ CSV import
Prospects Table (existing, source = "lso_directory")
    ↓ assigned to campaign
Campaigns + Campaign Steps (DB tables)
    ↓ Inngest cron (9am ET daily)
Campaign Sends
    ├── email → Resend API (from outreach.getatticus.ca) → prospect inbox
    ├── linkedin → dashboard action item (manual)
    └── call → dashboard action item (manual)
    ↓
Resend Outbound Webhooks → /api/webhooks/resend-events (open/click/bounce)
Resend Inbound Webhook  → /api/webhooks/outreach-inbound (reply detection)
    ↓
Campaign Sends status updated
    ↓ reply detected
Claude Haiku classifies sentiment
    ├── positive → prospect stage → consultation_booked
    └── negative/neutral → sequence paused, user decides
```

### Database Changes

Revive migration `0023` with additions:

**Enum additions:**
- Add `lso_directory` to existing `prospect_source` enum (distinguishes scraped leads from organic prospects)
- New `step_channel` enum: `email | linkedin | call`
- Add `completed` to `send_status` enum (for marking manual LinkedIn/call steps done)

**`prospects` table** — add:
- `city` column (text, nullable) — populated by LSO scraper, used in `{{city}}` template variable
- `first_contacted_at` column (timestamp, nullable) — tracks CASL 6-month implied consent window

**`campaigns` table** — unchanged from reverted commit

**`campaign_steps` table** — add:
- `channel` column using `step_channel` enum (default `email`)

**`campaign_sends` table** — add:
- `channel` column using `step_channel` enum (avoids joining back to `campaign_steps` for action items queries)

**`email_unsubscribes` table** — unchanged from reverted commit

### Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `scripts/scrape-lso.ts` | Create | LSO directory scraper (Playwright) |
| `drizzle/0023_outreach_campaigns.sql` | Create | DB migration (revived + channel enum, prospect additions) |
| `src/lib/db/schema.ts` | Modify | Add campaign tables, channel enum, prospect city/first_contacted_at |
| `src/server/routers/outreach.ts` | Create | Campaign CRUD, sending, analytics (revived + multi-channel) |
| `src/server/routers/_app.ts` | Modify | Register outreach router |
| `src/app/(dashboard)/outreach/page.tsx` | Create | Campaign management UI |
| `src/app/api/track/route.ts` | Create | Open/click tracking + link redirect endpoint |
| `src/app/api/unsubscribe/route.ts` | Create | CASL unsubscribe handler |
| `src/app/unsubscribe/page.tsx` | Create | Public unsubscribe page |
| `src/lib/inngest/outreach-cron.ts` | Create | Daily send cron job (idempotent) |
| `src/app/api/webhooks/resend-events/route.ts` | Create | Resend outbound event webhooks (open/click/bounce) |
| `src/app/api/webhooks/outreach-inbound/route.ts` | Create | Reply detection via reply-to address pattern |
| `src/components/layout/sidebar.tsx` | Modify | Add outreach nav item |

### No New Dependencies

Everything uses existing stack: Resend, Inngest, Drizzle, Claude Haiku (via Anthropic SDK), tRPC, shadcn/ui. Playwright added as a dev dependency for the scraper script only.

---

## 5. Dashboard UI

Route: `/outreach`

### Top Bar
Campaign stats: total sent, open rate, click rate, reply rate, demos booked.

### Three Tabs

**Campaigns tab:**
- List of campaigns with status badge (draft/active/paused/completed)
- Click to view/edit sequence steps, manage assigned prospects
- Start/pause/complete controls

**Action Items tab:**
- Today's LinkedIn messages to send and calls to make
- Each card: prospect name, firm, talking points, "Mark Done" button
- Morning check workflow

**Analytics tab:**
- Per-campaign funnel: sent → opened → clicked → replied → booked
- Sequence performance comparison
- Practice area conversion breakdown

### Prospects Integration

Prospects assigned to a campaign show a badge with campaign name and current step on the existing prospects page. Prospects with `source = "lso_directory"` are visually distinguishable from organic prospects.

---

## 6. Email Deliverability & Infrastructure

- **Subdomain:** Send from `outreach.getatticus.ca` (protects main domain reputation)
- **DNS:** SPF, DKIM, DMARC configured on subdomain via Resend
- **Resend domain verification:** Must be completed before first send
- **Environment:** New env var `OUTREACH_FROM_EMAIL` (e.g., `marc@outreach.getatticus.ca`) separates outreach from transactional email (`FROM_EMAIL` stays unchanged)
- **Reply-to:** `reply+{sendId}@outreach.getatticus.ca` with Resend inbound routing
- **Warm-up:** 10 emails/day week 1, 20/day week 2, scale from there
- **Style:** Plain-text-style HTML (no heavy images — lawyers expect professional plain emails)
- **Personalization:** Every email has unique subject line and body content
- **Unsubscribe:** Link in every email (CASL + deliverability signal)

---

## 7. Tech Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Email provider | Resend (already in stack) | No new vendor, good deliverability, webhook support |
| Background jobs | Inngest (already in stack) | Cron scheduling, retries, rate limiting built in |
| Reply classification | Claude Haiku | Fast, cheap, already integrated — just a sentiment call |
| Reply detection | Reply-to address pattern + inbound webhook | Reliable, no header correlation needed |
| Outbound tracking | Separate webhook endpoint from email intake | Different payload structure, different concerns |
| Scraper | Playwright (headless browser) | LSO directory is a dynamic web app |
| Scraper runtime | Standalone tsx script | One-time run, no need to integrate into the app |
| LinkedIn/call steps | Manual with dashboard prompts | Avoids automation risk, more personal |
| Send subdomain | outreach.getatticus.ca | Isolates outreach reputation from transactional email |
| Prospect source | New `lso_directory` enum value | Distinguishes scraped leads from organic pipeline |
| Click tracking | Link rewriting with 302 redirect | Standard approach, no external tracking dependency |
| Calendly | Link in email, manual booking tracking | No webhook integration needed for v1 |
