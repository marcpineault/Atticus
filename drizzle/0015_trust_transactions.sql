CREATE TYPE "public"."trust_transaction_type" AS ENUM('receipt', 'disbursement', 'transfer');

CREATE TABLE "trust_transactions" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "user_id" uuid NOT NULL REFERENCES "users"("id"),
  "client_id" uuid NOT NULL REFERENCES "clients"("id"),
  "matter_id" uuid REFERENCES "matters"("id"),
  "type" "trust_transaction_type" NOT NULL,
  "amount" integer NOT NULL,
  "description" text NOT NULL,
  "transaction_date" timestamp DEFAULT now() NOT NULL,
  "reference_number" text,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE INDEX "trust_transactions_user_id_idx" ON "trust_transactions" ("user_id");
CREATE INDEX "trust_transactions_client_id_idx" ON "trust_transactions" ("client_id");
