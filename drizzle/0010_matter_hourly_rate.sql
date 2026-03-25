-- Add optional per-matter hourly rate override
ALTER TABLE matters ADD COLUMN IF NOT EXISTS hourly_rate integer;
