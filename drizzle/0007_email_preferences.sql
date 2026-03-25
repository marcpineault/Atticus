ALTER TABLE "users" ADD COLUMN "email_daily_briefing" boolean NOT NULL DEFAULT true;
ALTER TABLE "users" ADD COLUMN "email_document_ready" boolean NOT NULL DEFAULT true;
ALTER TABLE "users" ADD COLUMN "email_weekly_digest" boolean NOT NULL DEFAULT true;
