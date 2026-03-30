# Dev Pipeline & Environment Management — Design Spec
**Date:** 2026-03-30
**Scope:** Atticus (Practice-buddy) first, reusable pattern for all future projects

---

## Goal

A skill that guides Claude through setting up enterprise-level environment management for any new project. Stack-aware: adapts steps based on language, framework, and whether a database is needed.

---

## Branching Strategy

Two long-lived git branches:

| Branch | Environment | Railway Target |
|--------|------------|----------------|
| `main` | Production | Railway production environment |
| `develop` | Staging | Railway staging environment |

Feature work: short-lived branches off `develop`. Promotion path: `feature/* → develop → main`.

---

## Environment Variables Per Environment

Each Railway environment maintains its own isolated set of env vars. The rule: **nothing in staging ever touches real money, real users, or real data.**

| Variable | Staging | Production |
|----------|---------|------------|
| `DATABASE_URL` | Neon staging branch URL | Neon main branch URL |
| `STRIPE_SECRET_KEY` | `sk_test_...` | `sk_live_...` |
| `STRIPE_PRICE_ID` | Test price ID | Live price ID |
| `STRIPE_WEBHOOK_SECRET` | Test webhook secret | Live webhook secret |
| `NEXT_PUBLIC_APP_URL` | `staging.getatticus.ca` | `getatticus.ca` |
| `CLERK_*` | Clerk dev instance | Clerk prod instance |
| All other API keys | Staging/test values | Production values |

---

## Neon DB Branching (when applicable)

Used for projects with relational databases. The skill asks: "Does this project use a relational database?" If yes, recommends Neon.

- `main` Neon branch → production `DATABASE_URL`
- `staging` Neon branch (branched off main) → staging `DATABASE_URL`
- Schema migrations run on staging branch first, then promoted to main
- Staging branch mirrors prod schema with isolated data — safe to break

---

## Skill Flow (step-by-step)

When invoked for a new project, Claude walks through:

1. **Assess the stack**
   - Language/framework? (Next.js, Python, etc.)
   - Does it need a relational DB?
   - Does it deploy to Railway?

2. **Set up git branches**
   - Ensure `main` and `develop` exist
   - Confirm Railway auto-deploy is linked: `main` → production, `develop` → staging

3. **Set up Railway environments**
   - Create `staging` environment in Railway dashboard
   - Duplicate env var structure from production
   - Swap all values to staging/test equivalents

4. **Set up Neon** *(if DB needed)*
   - Create `staging` branch off `main` in Neon dashboard
   - Copy staging branch `DATABASE_URL` into Railway staging env vars

5. **Configure service-specific vars**
   - Stripe: swap to test keys + test price IDs in staging
   - Clerk: create dev instance, use dev keys in staging
   - Any other third-party: use sandbox/test mode in staging

6. **Verify**
   - Push to `develop`, confirm Railway staging deploys cleanly
   - Smoke test: app loads, auth works, no DB errors

---

## Stack Decision Tree

```
New project setup:
├── Needs relational DB? → yes → recommend Neon + branching
│                       → no  → skip Neon steps
├── Deploys to Railway?  → yes → Railway environments setup
│                       → no  → adapt to platform (Vercel, Fly, etc.)
└── Has payments?        → yes → Stripe test/live key split required
                        → no  → skip Stripe steps
```

---

## Scope

- **Atticus** (Next.js, Neon, Railway, Stripe, Clerk) — full setup
- **calm-money-bot** (Python, SQLite, Railway) — skip Neon, use Railway environments only
- **Future projects** — skill adapts via stack assessment questions
