-- Add billed_at timestamp to track when a time entry was included in an invoice
ALTER TABLE time_entries ADD COLUMN IF NOT EXISTS billed_at timestamp;
