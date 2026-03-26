# Onboarding Wizard Redesign
**Date:** 2026-03-26
**Status:** Approved

## Problem
Current wizard feels like a feature brochure — generic 5-step modal with an icon grid. Lawyers skip it without doing anything useful.

## Solution
Replace with a 2-step pain-first wizard + persistent dashboard banner.

---

## Step 1 — Pain question (modal, ~30 seconds)

Single question: **"What's your biggest challenge right now?"**
Four options as large selectable cards:
- ⏰ Missing deadlines — limitation periods, court dates, filing deadlines
- 📥 Client intake chaos — tracking inquiries, follow-ups, consultations
- 💸 Lost billable time — hours that slip without being recorded
- 📁 Document overload — can't find what you need when you need it

Store selection in component state. No DB write yet.

---

## Step 2 — One immediate action (modal, pain-specific)

Show a context banner at the top based on their pain selection, then one focused action:

| Pain | Banner | Action |
|------|--------|--------|
| Deadlines | "Deadline focus on. Atticus flags every limitation period it finds." | Upload a document |
| Intake | "Intake focus on. Every new inquiry gets tracked automatically." | Generate intake email + copy it |
| Billing | "Billing focus on. Atticus estimates billable time from everything you upload." | Upload a voice note or doc |
| Documents | "Document focus on. Everything becomes searchable in seconds." | Upload a document |

"Skip for now" link always visible. If they skip, the banner covers it.

On action complete (or skip): call `completeOnboarding`, close modal, persist `painFocus` to user settings.

---

## Dashboard Banner

Appears at the top of `/dashboard` whenever `onboardingCompletedAt` is set but setup steps remain incomplete. Dismissible (localStorage flag, not DB).

**Progress bar + 4 clickable step chips:**
1. ✓ Chose your focus (always done after wizard)
2. Upload first document → links to `/upload`
3. Set up email forwarding → links to `/settings` (intake section)
4. Complete your profile (name, firm, rate) → links to `/settings`

Each chip shows ✓ green when done (detect from user data: has documents? has intakeEmail? has name+firmName?).

Banner hides automatically when all 4 chips are complete.

---

## Data model change

Add `painFocus` column to `users` table: `text` nullable, values: `deadlines | intake | billing | documents`.

---

## Files to change

1. `src/components/layout/onboarding-wizard.tsx` — full rewrite
2. `src/lib/db/schema.ts` — add `painFocus` column
3. New Drizzle migration
4. `src/server/routers/users.ts` — add `painFocus` to `updateSettings` input schema
5. `src/app/(dashboard)/dashboard/page.tsx` — add `<SetupBanner />` component at top
6. New `src/components/dashboard/setup-banner.tsx` — the banner component
