# Counsel AI — MVP Design Spec

## Overview

Counsel AI is a private AI intelligence layer for solo lawyers and small law firms. The MVP delivers two core capabilities: **document upload with AI processing** and **RAG-powered chat** — allowing a lawyer to upload documents and meeting recordings, have them automatically ingested, and then ask questions about their practice data.

**Target user:** Solo lawyer in Ontario billing $300-500/hr, wasting 15-25hrs/month on admin.

**MVP value prop:** Upload your files and meeting recordings → AI extracts entities, summarizes, tracks billable time → chat with your complete practice history.

---

## MVP Scope

### In scope
- Clerk authentication with MFA enforced
- Document upload (PDF, DOCX, TXT) and audio upload (MP3, MP4, M4A)
- Cloudflare R2 file storage with signed URLs (15-min expiry)
- Inngest-powered ingestion pipeline:
  - Text extraction (pdf-parse for PDF, mammoth for DOCX)
  - Audio transcription via self-hosted faster-whisper service
  - Entity extraction via Claude Haiku (persons, dates, amounts, action items, deadlines, case references)
  - Chunking (512 tokens, 50-token overlap) + Voyage AI embedding (voyage-law-2, 1024 dims)
  - Summarization via Claude Haiku
  - Billable time estimation
- RAG chat engine: Voyage query embedding → pgvector cosine search (top 8 chunks) → Claude Sonnet streaming
- Manual client and matter CRUD (simple forms)
- Basic dashboard with recent activity
- Client detail view with linked documents and extracted entities
- faster-whisper Python service (separate Railway service)

### Out of scope (post-MVP)
- Email integration (Postmark inbound, IMAP sync, OAuth)
- Onboarding wizard
- Daily digest cron
- Client profile auto-rebuild (`build-client-profile` Inngest function)
- SMS and calendar intake
- CSV import
- Conflict detection
- Draft generation UI (the system prompt is ready, but no dedicated drafting interface)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 App Router + TypeScript (strict mode) |
| Styling | Tailwind CSS + shadcn/ui (new-york style, zinc base) |
| API | tRPC for end-to-end type safety |
| Auth | Clerk (MFA enforced) |
| Database | Neon (serverless Postgres) + pgvector extension |
| ORM | Drizzle ORM + Drizzle Kit |
| AI — extraction/summarization | Claude Haiku (Anthropic API) |
| AI — chat/drafting | Claude Sonnet (Anthropic API) |
| AI — streaming | Vercel AI SDK (`@ai-sdk/anthropic`) |
| Embeddings | Voyage AI (`voyage-law-2`, 1024 dimensions) |
| Transcription | faster-whisper (self-hosted, CPU, medium.en, int8 quantization) |
| Background jobs | Inngest |
| File storage | Cloudflare R2 (S3-compatible) |
| Deployment | Railway (Next.js app + faster-whisper Python service) |

**No OpenAI anywhere in the stack.**

---

## System Architecture

### Services

1. **Next.js app** (Railway) — UI, tRPC API, chat streaming endpoint, Inngest functions, webhook handlers
2. **faster-whisper service** (Railway) — standalone Python/FastAPI, POST `/transcribe` accepts audio, returns transcript + duration

### Data Flow: Document Upload

```
Lawyer uploads file
  → Next.js API route validates auth + file type
  → File stored in Cloudflare R2
  → Document record created in DB (status: pending)
  → Inngest event "document/uploaded" fired
  → Inngest function "ingest-document" runs:
      Step 1: Fetch file from R2
      Step 2: Extract text
              - PDF → pdf-parse
              - DOCX → mammoth
              - TXT → raw content
              - Audio → POST to faster-whisper service → transcript
      Step 3: Extract entities via Claude Haiku
              - System: "You are a legal document analyst. Extract structured information."
              - Extract: clientNames, dates, dollarAmounts, actionItems, deadlines, caseReferences
              - Response validated with Zod
              - Store each entity in entities table
      Step 4: Chunk text (512 tokens, 50-token overlap)
              - Embed each chunk via Voyage AI voyage-law-2
              - Store chunks + embeddings in document_chunks table
      Step 5: Summarize via Claude Haiku (2-3 sentences, legal context)
              - Store summary on document record
      Step 6: Estimate billable time:
              - email read: max(2, wordCount/200) minutes
              - email write: max(5, wordCount/100) minutes
              - voice_note: durationSeconds/60
              - meeting: durationSeconds/60
              - document review: wordCount/150 minutes
      Step 7: Mark document status as completed (or failed with errorMessage on error)
```

### Data Flow: RAG Chat

```
Lawyer types question (optionally scoped to a client)
  → Embed query with Voyage AI voyage-law-2
  → pgvector cosine similarity search (single-table, no JOIN needed):
      SELECT * FROM document_chunks
      WHERE userId = :userId
      [AND clientId = :clientId]
      ORDER BY embedding <=> :queryVector
      LIMIT 8
  → Build system prompt:
      "You are a private AI assistant for [lawyerName] at [firmName].
       You have access to their complete practice history. Be concise and direct.
       Flag action items clearly. Note billable time when relevant.
       [IF CLIENT]: You are currently focused on [clientName]. Their profile: [summary]
       RELEVANT CONTEXT FROM FILES:
       ---
       [chunks]
       ---
       Answer based on the context above. If unsure, say so."
  → Stream response via Claude Sonnet (Vercel AI SDK streamText)
  → Save user message + assistant response to chat_messages
```

### Auth Flow

```
Every request → Clerk middleware → extract userId
  → tRPC context injects authenticated userId
  → Every DB query scoped to userId — no exceptions
```

### File Access

```
Never public URLs
  → R2 signed URLs with 15-minute expiry
  → Served through tRPC procedure that validates userId ownership
```

---

## Database Schema

All tables use Drizzle ORM. pgvector extension enabled for vector operations.

### users
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, default gen_random_uuid() |
| clerkId | text | unique, not null |
| email | text | not null |
| name | text | |
| firmName | text | |
| hourlyRate | integer | default 400 |
| aiConsentAt | timestamp | LSO compliance consent timestamp |
| lastActiveAt | timestamp | updated on each request |
| createdAt | timestamp | default now() |

### clients
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| userId | uuid | FK → users, not null |
| name | text | not null |
| email | text | |
| phone | text | |
| company | text | |
| summary | text | AI rolling summary |
| totalBillableMinutes | integer | default 0 |
| createdAt | timestamp | |
| updatedAt | timestamp | |

### matters
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| clientId | uuid | FK → clients, not null |
| userId | uuid | FK → users, not null |
| title | text | not null |
| description | text | |
| status | enum | active / closed / pending |
| createdAt | timestamp | |
| updatedAt | timestamp | |

### documents
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| userId | uuid | FK → users, not null |
| clientId | uuid | FK → clients, nullable |
| matterId | uuid | FK → matters, nullable |
| type | enum | email / voice_note / meeting / document / text_message / calendar (email, text_message, calendar reserved for post-MVP) |
| sourceId | text | |
| title | text | |
| rawContent | text | |
| summary | text | |
| metadata | jsonb | |
| billableMinutes | integer | |
| status | enum | pending / processing / completed / failed (replaces boolean `processed`) |
| errorMessage | text | nullable, stores failure reason if status = failed |
| r2Key | text | R2 object key for the original file |
| createdAt | timestamp | |
| updatedAt | timestamp | |

### document_chunks
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| documentId | uuid | FK → documents, not null |
| userId | uuid | FK → users, not null (denormalized for single-table RAG queries) |
| clientId | uuid | FK → clients, nullable (denormalized for client-scoped search) |
| content | text | |
| embedding | vector(1024) | Voyage AI voyage-law-2 dimensions |
| chunkIndex | integer | |
| createdAt | timestamp | |

### entities
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| documentId | uuid | FK → documents, not null |
| userId | uuid | FK → users, not null (denormalized for row-level security) |
| type | enum | person / date / amount / action_item / deadline / case_reference |
| value | text | |
| context | text | |
| dueDate | timestamp | nullable |
| resolved | boolean | default false |
| createdAt | timestamp | |

### chat_messages
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| userId | uuid | FK → users, not null |
| clientId | uuid | FK → clients, nullable |
| role | enum | user / assistant |
| content | text | |
| createdAt | timestamp | |

### Indexes
- `document_chunks.embedding` — HNSW index for cosine similarity search (pgvector defaults for m and ef_construction)
- `document_chunks.userId` — filter chunks by user (denormalized)
- `document_chunks.documentId` — lookup chunks for a document, cascade deletes
- `documents.userId` — filter by user
- `documents.clientId` — filter by client
- `entities.documentId` — lookup entities for a document
- `entities.userId` — filter entities by user (denormalized)
- `chat_messages.userId` — filter by user
- `clients.userId` — filter by user
- `matters.clientId` — filter matters by client
- `matters.userId` — filter matters by user

---

## Inngest Functions (MVP)

### ingest-document
- **Trigger:** `"document/uploaded"`
- **Payload:** `{ documentId: string, userId: string }`
- **Steps:** Fetch from R2 → extract text → extract entities (Haiku) → chunk + embed (Voyage) → summarize (Haiku) → estimate billable → mark processed
- **Retries:** 3 attempts with exponential backoff
- **Concurrency:** limit 5 per user (avoid rate-limiting AI APIs)

### transcribe-audio
- **Trigger:** `"audio/uploaded"`
- **Payload:** `{ documentId: string, userId: string, r2Key: string }`
- **Steps:** Fetch audio from R2 → POST to faster-whisper service → store transcript as rawContent → fire `"document/uploaded"` to continue pipeline
- **Retries:** 2 attempts (transcription is idempotent)

---

## faster-whisper Service

Standalone Python service deployed as a separate Railway service.

### main.py (FastAPI)
- `POST /transcribe` — accepts multipart audio file, returns `{ transcript, duration_seconds, language }`
- `GET /health` — returns `{ status: "ok" }`
- Model: `medium.en` loaded once on startup, stays in memory
- CPU mode with int8 quantization

### Dependencies
```
faster-whisper
fastapi
uvicorn
python-multipart
```

### Railway config
```toml
[build]
builder = "nixpacks"
[deploy]
startCommand = "uvicorn main:app --host 0.0.0.0 --port 8080"
```

---

## API Design (tRPC Routers)

### clients router
- `clients.list` — list all clients for authenticated user
- `clients.getById` — get single client with document count and total billable minutes
- `clients.create` — create client (Zod-validated input)
- `clients.update` — update client fields

### matters router
- `matters.list` — list matters, optionally filtered by clientId
- `matters.getById` — get single matter with linked documents
- `matters.create` — create matter linked to client
- `matters.update` — update matter fields

### documents router
- `documents.list` — list documents, optionally filtered by clientId/matterId
- `documents.getById` — get document with entities
- `documents.getSignedUrl` — generate R2 signed URL (15-min expiry)
- `documents.delete` — delete document + chunks + entities

### chat router (tRPC)
- `chat.history` — get chat messages for user, optionally filtered by clientId (MVP treats all messages for a given userId+clientId pair as one continuous conversation; session/thread support is post-MVP)
- `chat.clearHistory` — clear chat for a client context

### chat streaming (Next.js route handler)
- `POST /api/chat` — accepts `{ message, clientId? }`, streams Claude Sonnet response via Vercel AI SDK

### upload (Next.js route handler)
- `POST /api/upload` — single endpoint for all file types. Determines routing by file extension:
  - Audio files (MP3, MP4, M4A) → store in R2 → fire `"audio/uploaded"` → transcribe-audio function → then chains to ingest-document
  - Document files (PDF, DOCX, TXT) → store in R2 → fire `"document/uploaded"` → ingest-document function directly

---

## UI Pages (MVP)

### Dashboard (`/dashboard`)
- Welcome message with lawyer name
- Stats cards: total clients, total documents, total billable hours, documents processing
- Recent activity feed (last 10 processed documents with summaries)

### Clients (`/clients`)
- Card grid of clients with name, company, document count, total billable time
- "Add Client" button → modal form

### Client Detail (`/clients/[id]`)
- Client info header with edit capability
- Tabs: Documents | Entities | Matters
- Documents tab: list with type icon, title, summary, billable minutes, processed status
- Entities tab: grouped by type (deadlines highlighted, action items with resolved toggle)
- Matters tab: list with status badges

### Matters (`/matters`)
- List view grouped by client
- Status filter (active/closed/pending)
- "Add Matter" button → modal form

### Chat (`/chat`)
- Full-height chat interface
- Client selector dropdown at top (optional — "All" or specific client)
- Message list with user/assistant roles
- Streaming response with typing indicator
- Markdown rendering for assistant responses

### Upload (`/upload`)
- Drag-and-drop zone accepting PDF, DOCX, TXT, MP3, MP4, M4A
- Optional client/matter selector for tagging
- Upload progress bar
- Processing status list: queued → processing → complete (real-time via polling or Inngest status)

### Layout
- Collapsible sidebar with navigation: Dashboard, Clients, Matters, Chat, Upload
- Header with user info (Clerk UserButton) and firm name
- Clean, professional aesthetic — zinc base, minimal color, solid typography

---

## Security

- Every DB query scoped to authenticated userId — enforced in tRPC middleware
- Clerk session validated on every tRPC request
- Inngest webhook validates signing key
- R2 files: signed URLs only (15-min expiry), never public
- All API keys in env vars only
- `lastActiveAt` updated on each authenticated request
- Zod validation on all external data (API responses, webhook payloads, form inputs)
- TypeScript strict mode — no `any` types
- Error handling at every async boundary — log failures, never silent catch

---

## Environment Variables (MVP)

```
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
ANTHROPIC_API_KEY=
VOYAGE_API_KEY=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
CLOUDFLARE_R2_ACCOUNT_ID=
CLOUDFLARE_R2_ACCESS_KEY=
CLOUDFLARE_R2_SECRET_KEY=
CLOUDFLARE_R2_BUCKET=
WHISPER_SERVICE_URL=
```

---

## Build Phases

### Phase 1: Foundation
- Next.js 14 scaffold with TypeScript strict mode
- Tailwind CSS + shadcn/ui setup (new-york style, zinc base)
- Clerk auth integration with middleware
- Drizzle ORM + full schema + migrations
- tRPC setup with auth middleware
- Base layout (sidebar, header)
- pgvector extension enabled

### Phase 2: Infrastructure
- Cloudflare R2 client (upload, signed URLs)
- Inngest client + webhook route
- faster-whisper Python service (main.py, requirements.txt, railway.toml)

### Phase 3: Ingestion Pipeline
- Text extraction (pdf-parse, mammoth)
- Transcription client (POST to faster-whisper)
- Entity extraction (Claude Haiku + Zod validation)
- Chunking + embedding (Voyage AI)
- Summarization (Claude Haiku)
- Billable time estimation
- `ingest-document` and `transcribe-audio` Inngest functions
- Upload UI (drag-and-drop, progress, processing status)

### Phase 4: Data Views
- Client CRUD (list, detail, create, edit forms)
- Matter CRUD (list, create, edit forms)
- Client detail page with documents, entities, matters tabs
- Dashboard with stats and recent activity

### Phase 5: RAG Chat
- Voyage AI query embedding
- pgvector similarity search with userId/clientId filtering
- System prompt builder
- Claude Sonnet streaming via Vercel AI SDK
- Chat UI with message history, client selector, markdown rendering
- Chat message persistence

### Phase 6: Deployment
- Railway configs for Next.js app
- Railway configs for faster-whisper service
- Environment variable documentation
- Health check endpoints
