-- DATA MIGRATION (not a schema change) — backfills intake_email for existing users.
-- Run once after deployment. Uses first 5 chars of UUID (already random/unique).
-- Safe to re-run: the WHERE clause skips users who already have an address.
UPDATE users
SET intake_email = concat(
  substring(replace(id::text, '-', '') from 1 for 5),
  '@intake.getatticus.ca'
)
WHERE intake_email IS NULL;
