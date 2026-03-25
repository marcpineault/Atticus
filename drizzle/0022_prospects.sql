CREATE TYPE "public"."prospect_stage" AS ENUM('lead', 'consultation_booked', 'consultation_done', 'proposal_sent', 'won', 'lost');
CREATE TYPE "public"."prospect_source" AS ENUM('website', 'referral', 'social_media', 'cold_call', 'networking', 'other');

CREATE TABLE "prospects" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" uuid NOT NULL REFERENCES "users"("id"),
  "name" text NOT NULL,
  "email" text,
  "phone" text,
  "company" text,
  "practice_area" text,
  "source" "prospect_source" DEFAULT 'other' NOT NULL,
  "stage" "prospect_stage" DEFAULT 'lead' NOT NULL,
  "estimated_value" integer,
  "notes" text,
  "consultation_date" timestamp,
  "consultation_notes" text,
  "ai_strategy" text,
  "lost_reason" text,
  "converted_client_id" uuid REFERENCES "clients"("id"),
  "next_follow_up" timestamp,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE INDEX "prospects_user_id_idx" ON "prospects" ("user_id");
CREATE INDEX "prospects_stage_idx" ON "prospects" ("stage");
