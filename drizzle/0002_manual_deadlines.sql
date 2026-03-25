-- Make documentId nullable and add clientId/matterId to entities for manual deadline creation
ALTER TABLE "entities" ALTER COLUMN "document_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "entities" ADD COLUMN "client_id" uuid REFERENCES "clients"("id") ON DELETE cascade;--> statement-breakpoint
ALTER TABLE "entities" ADD COLUMN "matter_id" uuid REFERENCES "matters"("id") ON DELETE cascade;--> statement-breakpoint
CREATE INDEX "entities_client_id_idx" ON "entities" USING btree ("client_id");--> statement-breakpoint
CREATE INDEX "entities_matter_id_idx" ON "entities" USING btree ("matter_id");
