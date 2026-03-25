CREATE TYPE "invoice_status" AS ENUM ('draft', 'sent', 'paid', 'overdue');

CREATE TABLE "invoices" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" uuid NOT NULL REFERENCES "users"("id"),
  "client_id" uuid NOT NULL REFERENCES "clients"("id"),
  "matter_id" uuid REFERENCES "matters"("id"),
  "invoice_number" text NOT NULL,
  "status" "invoice_status" DEFAULT 'draft' NOT NULL,
  "issue_date" timestamp DEFAULT now() NOT NULL,
  "due_date" timestamp,
  "line_items" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "total_amount" integer DEFAULT 0 NOT NULL,
  "notes" text,
  "sent_at" timestamp,
  "paid_at" timestamp,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE INDEX "invoices_user_id_idx" ON "invoices" ("user_id");
CREATE INDEX "invoices_client_id_idx" ON "invoices" ("client_id");
