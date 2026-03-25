-- Add private notes field to matters
ALTER TABLE matters ADD COLUMN IF NOT EXISTS notes text;
