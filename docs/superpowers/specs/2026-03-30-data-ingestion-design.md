# Data Ingestion Pipeline — Design Spec
**Date:** 2026-03-30
**Scope:** CSV client import with column mapping + bulk file/ZIP upload

---

## Goal

Allow lawyers to onboard their existing data into Atticus without reformatting. Two entry points on a new `/import` page: (1) upload a CSV/Excel of clients with smart column mapping, (2) drag-and-drop multiple files or a ZIP of documents.

---

## Architecture

Two independent features share a single `/import` dashboard page. No new background jobs — bulk file upload reuses the existing `document/uploaded` Inngest pipeline. CSV import is synchronous (bulk DB insert via new tRPC procedure).

---

## Part 1: CSV Client Import

### Flow
1. User uploads CSV or Excel file
2. Atticus parses headers, auto-maps columns where names are obvious (`email` → email, `client name` → name, etc.)
3. User sees a mapping UI: each Atticus field has a dropdown to select which CSV column maps to it
4. Preview table shows first 5 rows with mapped values
5. User clicks "Import" → bulk insert → results: `{ imported: N, skipped: N, errors: [] }`
6. Skipped = duplicate email (client already exists for this user)

### Atticus Client Fields
| Field | Required | Notes |
|-------|----------|-------|
| `name` | Yes | Full name |
| `email` | No | Used for duplicate detection |
| `phone` | No | |
| `company` | No | |
| `notes` | No | |

### New tRPC Procedure: `clients.bulkCreate`
Input: array of `{ name, email?, phone?, company?, notes? }` (max 500 rows)
Logic:
1. Fetch existing client emails for this user
2. Filter out duplicates
3. Batch insert remaining records
4. Return `{ imported, skipped, errors }`

### Libraries
- `papaparse` — CSV parsing
- `xlsx` — Excel parsing
- Both already available or lightweight to add

### File: New files
- `src/app/(dashboard)/import/page.tsx` — import page
- `src/components/import/csv-import.tsx` — CSV upload + mapping + preview UI
- `src/components/import/bulk-upload.tsx` — bulk file upload UI
- `src/server/routers/clients.ts` — add `bulkCreate` procedure

---

## Part 2: Bulk File Upload

### Flow
1. User drags files or a ZIP onto the upload zone
2. If ZIP: extracted client-side with `jszip`, individual files queued
3. Each file uploaded to R2 (same pattern as existing single upload)
4. Each upload triggers `document/uploaded` Inngest event
5. Status list shows real-time per-file processing state (pending → processing → complete/error)
6. Status polling via existing `documents.list` tRPC query

### Supported Formats
PDF, DOCX, TXT, MP3, MP4 — anything the existing Inngest pipeline handles.

### Libraries
- `jszip` — client-side ZIP extraction

### No New Backend Logic
Bulk upload is purely a UI concern — it batches multiple calls to the existing R2 upload + Inngest trigger flow.

---

## UI: `/import` Page Layout

Two sections on the same page:
- **"Import Clients"** — CSV/Excel upload card with mapping UI
- **"Upload Documents"** — multi-file + ZIP drop zone with status list

Page accessible from dashboard sidebar under "Settings" or "Onboarding".

---

## Error Handling

| Scenario | Behavior |
|----------|----------|
| CSV missing required `name` column | Show error before mapping step |
| Row missing name value | Skip row, include in `errors` array |
| Duplicate client (same email) | Skip silently, count in `skipped` |
| File format not supported | Show error per file in status list |
| ZIP too large (>100MB) | Reject with clear message |
| Upload fails mid-batch | Show per-file error, other files unaffected |

---

## Out of Scope (for now)
- Matter import
- Clio/PCLaw API integration
- Progress bar for large CSVs (>500 rows — just reject with a message)
- Deduplication on name (email only)
