-- Add summary field to matters table for AI-generated matter briefs
ALTER TABLE "matters" ADD COLUMN "summary" text;
