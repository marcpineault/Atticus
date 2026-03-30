# Dev Pipeline & Environment Management — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Set up staging + production environment separation for Atticus, then package the pattern into a reusable Claude skill for all future projects.

**Architecture:** Two Railway environments (`staging`, `production`) tied to two git branches (`develop`, `main`). Staging uses a Neon DB branch, Stripe test keys, and a Clerk dev instance — fully isolated from production data and money. A Claude skill captures the entire setup flow so any future project can replicate it in one session.

**Tech Stack:** Railway (environments + auto-deploy), Neon (DB branching), Stripe (test/live key split), Clerk (dev/prod instance), Next.js, Drizzle ORM

---

## File Map

| Action | Path | Purpose |
|--------|------|---------|
| Modify | `Practice-buddy/railway.toml` | Add staging environment config |
| Create | `Practice-buddy/.env.staging.example` | Document staging env var structure |
| Create | `/Users/map98/.claude/skills/dev-pipeline/SKILL.md` | Reusable skill for future projects |

---

## Task 1: Create `develop` branch

**Files:**
- No file changes — git operation only

- [ ] **Step 1: Create the develop branch from main**

```bash
cd /Users/map98/Desktop/Practice-buddy
git checkout main
git pull origin main
git checkout -b develop
git push -u origin develop
```

Expected output: `Branch 'develop' set up to track remote branch 'develop' from 'origin'.`

- [ ] **Step 2: Verify both branches exist on remote**

```bash
git branch -a
```

Expected: both `main` and `develop` listed under `remotes/origin/`

- [ ] **Step 3: Commit**

No commit needed — branch push is the action.

---

## Task 2: Set up Railway Staging Environment

**Files:**
- No file changes — Railway dashboard steps

- [ ] **Step 1: Open Railway dashboard**

Go to your Atticus project in Railway. You should see one environment (production).

- [ ] **Step 2: Create staging environment**

In Railway: Click **"Environments"** → **"New Environment"** → name it `staging`.

- [ ] **Step 3: Link staging to the `develop` branch**

In Railway staging environment settings: under **"Source"**, set the branch to `develop`.

This means every push to `develop` auto-deploys to staging. Every push to `main` auto-deploys to production. No manual deploys needed.

- [ ] **Step 4: Verify**

Confirm Railway shows two environments: `staging` (develop branch) and `production` (main branch).

---

## Task 3: Create Neon Staging DB Branch

**Files:**
- No file changes — Neon dashboard steps

- [ ] **Step 1: Open Neon dashboard**

Go to your Atticus project at console.neon.tech.

- [ ] **Step 2: Create a staging branch**

In Neon: Click **"Branches"** → **"New Branch"** → name it `staging` → branch from `main`.

This creates an isolated copy of your production DB schema with no production data.

- [ ] **Step 3: Copy the staging connection string**

In the `staging` branch: click **"Connect"** → copy the `DATABASE_URL` connection string. It will look like:

```
postgresql://user:password@ep-staging-xyz.us-east-2.aws.neon.tech/neondb?sslmode=require
```

Save this — you'll paste it into Railway staging env vars in the next task.

---

## Task 4: Configure Railway Staging Env Vars

**Files:**
- Create: `Practice-buddy/.env.staging.example`

- [ ] **Step 1: Open Railway staging environment variables**

In Railway: select the `staging` environment → click **"Variables"**.

- [ ] **Step 2: Add all staging env vars**

Add each variable below. These are staging/test values — never use production keys here:

| Variable | Where to get it |
|----------|----------------|
| `DATABASE_URL` | Neon staging branch connection string (from Task 3) |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk dev instance → API Keys |
| `CLERK_SECRET_KEY` | Clerk dev instance → API Keys |
| `STRIPE_SECRET_KEY` | Stripe dashboard → Developers → API Keys → test key (`sk_test_...`) |
| `STRIPE_WEBHOOK_SECRET` | Stripe dashboard → Webhooks → staging webhook secret |
| `STRIPE_PRICE_ID` | Stripe test mode → Products → your test price ID |
| `ANTHROPIC_API_KEY` | Same as prod (no test mode exists) |
| `OPENAI_API_KEY` | Same as prod |
| `VOYAGE_API_KEY` | Same as prod |
| `INNGEST_EVENT_KEY` | Inngest staging app → API Keys |
| `INNGEST_SIGNING_KEY` | Inngest staging app → API Keys |
| `CLOUDFLARE_R2_*` | Use a separate R2 bucket named `atticus-staging` |
| `WHISPER_SERVICE_URL` | Point to staging whisper service (or same as prod if shared) |
| `RESEND_API_KEY` | Same as prod (use staging subdomain to avoid real sends) |
| `EMAIL_FROM` | `Atticus Staging <noreply@staging.getatticus.ca>` |
| `OUTREACH_FROM_EMAIL` | `Marc from Atticus <marc@outreach.getatticus.ca>` |
| `CALENDLY_URL` | Same as prod |
| `NEXT_PUBLIC_APP_URL` | `https://staging.getatticus.ca` (or Railway staging URL) |

- [ ] **Step 3: Create Clerk dev instance**

If you don't have one: go to clerk.com → **"Add application"** → name it `Atticus Dev` → copy the publishable key and secret key into Railway staging vars above.

- [ ] **Step 4: Document staging env structure**

Create `Practice-buddy/.env.staging.example`:

```bash
# Staging environment variables — all values are test/dev equivalents
# NEVER use production keys here

DATABASE_URL=postgresql://...staging-branch-url...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
VOYAGE_API_KEY=...
INNGEST_EVENT_KEY=...
INNGEST_SIGNING_KEY=...
CLOUDFLARE_R2_ACCOUNT_ID=...
CLOUDFLARE_R2_ACCESS_KEY=...
CLOUDFLARE_R2_SECRET_KEY=...
CLOUDFLARE_R2_BUCKET=atticus-staging
WHISPER_SERVICE_URL=...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_test_...
STRIPE_PRICE_ID=price_test_...
NEXT_PUBLIC_APP_URL=https://staging.getatticus.ca
RESEND_API_KEY=re_...
EMAIL_FROM=Atticus Staging <noreply@staging.getatticus.ca>
RESEND_WEBHOOK_SECRET=
OUTREACH_FROM_EMAIL="Marc from Atticus <marc@outreach.getatticus.ca>"
CALENDLY_URL=https://calendly.com/getatticus/demo
```

- [ ] **Step 5: Commit**

```bash
cd /Users/map98/Desktop/Practice-buddy
git checkout develop
git add .env.staging.example
git commit -m "chore: add staging env var template"
git push origin develop
```

---

## Task 5: Verify Staging Deployment

**Files:**
- No file changes — verification steps

- [ ] **Step 1: Trigger a staging deploy**

Railway will auto-deploy when you push to `develop` (Task 4, Step 5 above triggers this).

Watch the Railway staging environment → **"Deployments"** tab. Wait for status to show **"Success"**.

- [ ] **Step 2: Check the deployment logs**

In Railway staging: click the latest deployment → **"View Logs"**. Look for:

```
✓ Ready on http://0.0.0.0:3000
```

No database connection errors, no missing env var errors.

- [ ] **Step 3: Smoke test the staging URL**

Open the Railway staging URL (shown in Railway staging environment). Verify:
- App loads without errors
- Auth (Clerk) works — can sign up / sign in
- No console errors about missing env vars

- [ ] **Step 4: Verify DB isolation**

In Neon dashboard: confirm the `staging` branch shows 0 rows in user tables (isolated from prod data). Run in Neon SQL editor on the staging branch:

```sql
SELECT COUNT(*) FROM users;
```

Expected: `0` (staging DB starts empty, no prod data copied).

---

## Task 6: Write the Reusable Dev Pipeline Skill

**Files:**
- Create: `/Users/map98/.claude/skills/dev-pipeline/SKILL.md`

This skill captures the full setup pattern so any future project can replicate it.

- [ ] **Step 1: Create skill directory**

```bash
mkdir -p /Users/map98/.claude/skills/dev-pipeline
```

- [ ] **Step 2: Write the skill file**

Create `/Users/map98/.claude/skills/dev-pipeline/SKILL.md`:

````markdown
---
name: dev-pipeline
description: "Sets up enterprise-level environment management (staging + production) for any new project. Stack-aware: adapts steps based on language/framework and whether a DB is needed. Use when starting a new project or adding environments to an existing one. Covers Railway environments, Neon DB branching, Stripe test/live key split, Clerk dev/prod instances, and git branch strategy."
---

# Dev Pipeline Setup

You are guiding Marc through setting up staging + production environment management for a project. Walk through each section below in order, asking questions and completing steps together.

## Step 1: Assess the Stack

Ask Marc (one question at a time):

1. "What's the framework/language?" (Next.js, Python, etc.)
2. "Does this project use a relational database?" (yes → use Neon; no → skip Neon tasks)
3. "Does it deploy to Railway?" (yes → Railway environments; no → adapt to their platform)
4. "Does it take payments?" (yes → Stripe test/live split required; no → skip Stripe tasks)

## Step 2: Git Branch Setup

```bash
git checkout main
git pull origin main
git checkout -b develop
git push -u origin develop
```

Rule: `main` = production, `develop` = staging. Feature branches off `develop`.

## Step 3: Railway Environment Setup

1. Railway dashboard → project → **Environments** → **New Environment** → name: `staging`
2. In staging environment settings → **Source** → set branch to `develop`
3. Confirm: `staging` deploys from `develop`, `production` deploys from `main`

## Step 4: Neon DB Branch (if DB needed)

1. console.neon.tech → project → **Branches** → **New Branch**
2. Name: `staging`, branch from: `main`
3. In staging branch: **Connect** → copy `DATABASE_URL`
4. Paste into Railway staging env vars as `DATABASE_URL`

Rule: staging DB starts empty (no prod data). Schema changes go to staging branch first.

## Step 5: Configure Staging Env Vars

Open Railway → staging environment → Variables. For each service, use the test/dev equivalent:

| Service | Staging | Production |
|---------|---------|------------|
| Stripe | `sk_test_...` | `sk_live_...` |
| Clerk | Dev instance keys | Prod instance keys |
| Neon | Staging branch URL | Main branch URL |
| App URL | `staging.yourdomain.com` | `yourdomain.com` |
| Email from | `App Staging <noreply@staging.domain>` | `App <noreply@domain>` |

**Rule: nothing in staging touches real money or real users.**

For services with no test mode (Anthropic, Voyage, etc.) — same key is fine.

## Step 6: Verify

1. Push any commit to `develop` → Railway staging should auto-deploy
2. Check Railway staging deployment logs — no errors
3. Smoke test the staging URL: app loads, auth works, no console errors
4. If DB: confirm staging DB is empty (isolated from prod)

## Promotion Flow (ongoing)

```
feature/* → develop (auto-deploys to staging → test it) → main (auto-deploys to prod)
```

Never push directly to `main` for new features. Always go through `develop` first.
````

- [ ] **Step 3: Verify skill file is readable**

```bash
cat /Users/map98/.claude/skills/dev-pipeline/SKILL.md | head -5
```

Expected: frontmatter with `name: dev-pipeline`

- [ ] **Step 4: Commit**

```bash
cd /Users/map98/Desktop/Practice-buddy
git add docs/
git commit -m "docs: add dev pipeline spec and plan"
git push origin develop
```
