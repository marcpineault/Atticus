-- Add Stripe subscription fields to users table
CREATE TYPE "public"."subscription_status" AS ENUM('trialing', 'active', 'past_due', 'canceled', 'unpaid');--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "stripe_customer_id" text UNIQUE;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "stripe_subscription_id" text UNIQUE;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "stripe_price_id" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "subscription_status" "subscription_status";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "subscription_current_period_end" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "trial_ends_at" timestamp;
