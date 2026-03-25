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
