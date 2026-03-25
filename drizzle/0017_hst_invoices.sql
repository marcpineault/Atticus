alter table "invoices" add column if not exists "hst_rate" integer not null default 0;
alter table "invoices" add column if not exists "hst_amount" integer not null default 0;
