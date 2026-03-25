CREATE TABLE "time_entries" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" uuid NOT NULL REFERENCES "users"("id"),
  "matter_id" uuid REFERENCES "matters"("id"),
  "client_id" uuid REFERENCES "clients"("id"),
  "description" text NOT NULL,
  "minutes" integer NOT NULL,
  "entry_date" timestamp DEFAULT now() NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE INDEX "time_entries_user_id_idx" ON "time_entries" ("user_id");
CREATE INDEX "time_entries_matter_id_idx" ON "time_entries" ("matter_id");

CREATE TABLE "draft_templates" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" uuid NOT NULL REFERENCES "users"("id"),
  "name" text NOT NULL,
  "draft_type" text NOT NULL DEFAULT 'general',
  "tone" text NOT NULL DEFAULT 'professional',
  "instructions" text NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE INDEX "draft_templates_user_id_idx" ON "draft_templates" ("user_id");
