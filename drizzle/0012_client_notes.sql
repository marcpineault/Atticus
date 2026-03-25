-- Add private notes field to clients
ALTER TABLE clients ADD COLUMN IF NOT EXISTS notes text;
