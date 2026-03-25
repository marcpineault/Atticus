# Counsel AI MVP Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an MVP where a lawyer can upload documents and meeting recordings, have them AI-processed (transcribed, entity-extracted, chunked, embedded, summarized), and chat with their practice data via RAG.

**Architecture:** Next.js 14 App Router monolith with tRPC API layer, Clerk auth, Drizzle ORM on Neon Postgres with pgvector. Inngest handles async ingestion pipeline. A separate Python FastAPI service runs faster-whisper for audio transcription. Cloudflare R2 stores files. Claude Haiku does extraction/summarization, Claude Sonnet powers RAG chat via Vercel AI SDK streaming.

**Tech Stack:** Next.js 14, TypeScript strict, Tailwind + shadcn/ui (new-york/zinc), tRPC, Clerk, Drizzle ORM, Neon Postgres + pgvector, Claude API (Haiku + Sonnet), Vercel AI SDK (@ai-sdk/anthropic), Voyage AI (voyage-law-2), Inngest, Cloudflare R2, faster-whisper (Python/FastAPI)

**Spec:** `docs/superpowers/specs/2026-03-17-counsel-ai-mvp-design.md`

---

## File Structure

```
# Root config files
.env.local                          — env vars (gitignored)
.env.example                        — env var template
drizzle.config.ts                   — Drizzle Kit config
next.config.ts                      — Next.js config
tailwind.config.ts                  — Tailwind config
tsconfig.json                       — TypeScript strict config
package.json                        — dependencies

# Database
src/lib/db/index.ts                 — Drizzle client (Neon serverless)
src/lib/db/schema.ts                — All table + enum definitions
src/lib/db/migrate.ts               — Migration runner

# Auth
src/middleware.ts                    — Clerk middleware (route protection)

# tRPC
src/server/trpc.ts                  — tRPC init, context, procedures (public + protected)
src/server/routers/_app.ts          — Root router merging all sub-routers
src/server/routers/clients.ts       — Client CRUD procedures
src/server/routers/matters.ts       — Matter CRUD procedures
src/server/routers/documents.ts     — Document list/get/delete/signedUrl procedures
src/server/routers/chat.ts          — Chat history + clear procedures
src/lib/trpc/client.ts              — tRPC React client setup
src/lib/trpc/server.ts              — tRPC server-side caller

# API routes
src/app/api/trpc/[trpc]/route.ts   — tRPC HTTP handler
src/app/api/chat/route.ts           — Streaming chat endpoint (Vercel AI SDK)
src/app/api/upload/route.ts         — File upload → R2 → Inngest event
src/app/api/webhooks/inngest/route.ts — Inngest serve handler

# R2 storage
src/lib/r2/client.ts                — S3-compatible R2 client
src/lib/r2/signed-url.ts            — Generate signed download URLs

# Inngest
src/lib/inngest/client.ts           — Inngest client instance
src/lib/inngest/functions.ts         — Re-exports all functions for serve()
src/lib/inngest/ingest-document.ts  — Main ingestion pipeline function
src/lib/inngest/transcribe-audio.ts — Audio transcription function

# Ingestion pipeline modules
src/lib/ingestion/extract-text.ts   — PDF/DOCX/TXT text extraction
src/lib/ingestion/transcribe.ts     — HTTP client for faster-whisper service
src/lib/ingestion/extract-entities.ts — Claude Haiku entity extraction + Zod schema
src/lib/ingestion/chunk-embed.ts    — Text chunking + Voyage AI embedding
src/lib/ingestion/summarize.ts      — Claude Haiku summarization
src/lib/ingestion/estimate-billable.ts — Billable time estimation

# AI / RAG
src/lib/ai/voyage.ts                — Voyage AI embedding client
src/lib/ai/retrieve.ts              — pgvector similarity search
src/lib/ai/system-prompt.ts         — System prompt builder
src/lib/ai/anthropic.ts             — Anthropic client setup

# Zod schemas for external data
src/types/entities.ts               — Entity extraction response schema
src/types/transcription.ts          — Whisper service response schema
src/types/upload.ts                 — Upload form validation

# Layout
src/app/layout.tsx                  — Root layout (ClerkProvider, TRPCProvider)
src/app/(auth)/sign-in/[[...sign-in]]/page.tsx
src/app/(auth)/sign-up/[[...sign-up]]/page.tsx
src/app/(dashboard)/layout.tsx      — Dashboard layout (sidebar + header)
src/components/layout/sidebar.tsx   — Collapsible sidebar navigation
src/components/layout/header.tsx    — Top header with UserButton

# Dashboard
src/app/(dashboard)/dashboard/page.tsx

# Clients
src/app/(dashboard)/clients/page.tsx
src/app/(dashboard)/clients/[id]/page.tsx
src/components/clients/client-card.tsx
src/components/clients/client-form.tsx
src/components/clients/entity-list.tsx

# Matters
src/app/(dashboard)/matters/page.tsx
src/components/matters/matter-form.tsx

# Upload
src/app/(dashboard)/upload/page.tsx
src/components/upload/upload-zone.tsx

# Chat
src/app/(dashboard)/chat/page.tsx
src/components/chat/chat-interface.tsx
src/components/chat/message-list.tsx
src/components/chat/chat-input.tsx

# faster-whisper service (separate directory)
services/whisper/main.py            — FastAPI transcription service
services/whisper/requirements.txt   — Python dependencies
services/whisper/railway.toml       — Railway deployment config
```

---

## Task 1: Project Scaffold + TypeScript Config

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `.env.example`, `.env.local`, `.gitignore`

- [ ] **Step 1: Initialize Next.js project**

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbo
```

Accept defaults. This creates the base Next.js 14 project with App Router, TypeScript, Tailwind, ESLint, and src directory.

- [ ] **Step 2: Enable TypeScript strict mode**

In `tsconfig.json`, verify `"strict": true` is set (create-next-app should enable it by default). Also add:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

- [ ] **Step 3: Create .env.example**

```env
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

- [ ] **Step 4: Create .env.local with placeholder values**

Copy `.env.example` to `.env.local` — this is gitignored by default. Add placeholder values so the app can start without crashing (actual values set later).

- [ ] **Step 5: Configure next.config.ts**

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pdf-parse"],
};

export default nextConfig;
```

- [ ] **Step 6: Update .gitignore**

Ensure `.env.local` and `.superpowers/` are in `.gitignore`.

- [ ] **Step 7: Verify the app starts**

```bash
npm run dev
```

Expected: Next.js dev server starts on localhost:3000 with no errors.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 14 project with TypeScript strict mode"
```

---

## Task 2: Install All Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install core dependencies**

```bash
npm install @clerk/nextjs @trpc/server @trpc/client @trpc/react-query @tanstack/react-query drizzle-orm @neondatabase/serverless @ai-sdk/anthropic @anthropic-ai/sdk ai inngest @aws-sdk/client-s3 @aws-sdk/s3-request-presigner zod lucide-react server-only
```

- [ ] **Step 2: Install ingestion + UI dependencies**

```bash
npm install pdf-parse mammoth react-dropzone react-markdown
```

- [ ] **Step 3: Install dev dependencies**

```bash
npm install -D drizzle-kit @types/pdf-parse
```

- [ ] **Step 4: Verify no install errors**

```bash
npm ls --depth=0
```

Expected: All packages listed with no peer dependency errors that block builds.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install all MVP dependencies"
```

---

## Task 3: shadcn/ui Setup

**Files:**
- Create: `components.json`, `src/lib/utils.ts`, `src/components/ui/*`

- [ ] **Step 1: Initialize shadcn/ui**

```bash
npx shadcn@latest init
```

When prompted:
- Style: New York
- Base color: Zinc
- CSS variables: yes

- [ ] **Step 2: Install core UI components**

```bash
npx shadcn@latest add button card dialog dropdown-menu input label select separator sheet table tabs textarea badge scroll-area form toast
```

- [ ] **Step 3: Verify components installed**

Check that `src/components/ui/` contains the installed component files.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: setup shadcn/ui with new-york style and zinc base"
```

---

## Task 4: Database Schema with Drizzle ORM

**Files:**
- Create: `src/lib/db/schema.ts`, `src/lib/db/index.ts`, `drizzle.config.ts`

- [ ] **Step 1: Create Drizzle config**

```typescript
// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

- [ ] **Step 2: Create the full database schema**

```typescript
// src/lib/db/schema.ts
import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
  index,
  pgEnum,
  vector,
} from "drizzle-orm/pg-core";

// Enums
export const matterStatusEnum = pgEnum("matter_status", [
  "active",
  "closed",
  "pending",
]);

export const documentTypeEnum = pgEnum("document_type", [
  "email",
  "voice_note",
  "meeting",
  "document",
  "text_message",
  "calendar",
]);

export const documentStatusEnum = pgEnum("document_status", [
  "pending",
  "processing",
  "completed",
  "failed",
]);

export const entityTypeEnum = pgEnum("entity_type", [
  "person",
  "date",
  "amount",
  "action_item",
  "deadline",
  "case_reference",
]);

export const chatRoleEnum = pgEnum("chat_role", ["user", "assistant"]);

// Tables
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  clerkId: text("clerk_id").unique().notNull(),
  email: text("email").notNull(),
  name: text("name"),
  firmName: text("firm_name"),
  hourlyRate: integer("hourly_rate").default(400),
  aiConsentAt: timestamp("ai_consent_at"),
  lastActiveAt: timestamp("last_active_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const clients = pgTable(
  "clients",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    name: text("name").notNull(),
    email: text("email"),
    phone: text("phone"),
    company: text("company"),
    summary: text("summary"),
    totalBillableMinutes: integer("total_billable_minutes").default(0),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [index("clients_user_id_idx").on(table.userId)]
);

export const matters = pgTable(
  "matters",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    clientId: uuid("client_id")
      .references(() => clients.id)
      .notNull(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    title: text("title").notNull(),
    description: text("description"),
    status: matterStatusEnum("status").default("active").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("matters_client_id_idx").on(table.clientId),
    index("matters_user_id_idx").on(table.userId),
  ]
);

export const documents = pgTable(
  "documents",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    clientId: uuid("client_id").references(() => clients.id),
    matterId: uuid("matter_id").references(() => matters.id),
    type: documentTypeEnum("type").notNull(),
    sourceId: text("source_id"),
    title: text("title"),
    rawContent: text("raw_content"),
    summary: text("summary"),
    metadata: jsonb("metadata"),
    billableMinutes: integer("billable_minutes"),
    status: documentStatusEnum("status").default("pending").notNull(),
    errorMessage: text("error_message"),
    r2Key: text("r2_key"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("documents_user_id_idx").on(table.userId),
    index("documents_client_id_idx").on(table.clientId),
  ]
);

export const documentChunks = pgTable(
  "document_chunks",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    documentId: uuid("document_id")
      .references(() => documents.id, { onDelete: "cascade" })
      .notNull(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    clientId: uuid("client_id").references(() => clients.id),
    content: text("content").notNull(),
    embedding: vector("embedding", { dimensions: 1024 }),
    chunkIndex: integer("chunk_index").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("chunks_embedding_idx").using(
      "hnsw",
      table.embedding.op("vector_cosine_ops")
    ),
    index("chunks_user_id_idx").on(table.userId),
    index("chunks_document_id_idx").on(table.documentId),
  ]
);

export const entities = pgTable(
  "entities",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    documentId: uuid("document_id")
      .references(() => documents.id, { onDelete: "cascade" })
      .notNull(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    type: entityTypeEnum("type").notNull(),
    value: text("value").notNull(),
    context: text("context"),
    dueDate: timestamp("due_date"),
    resolved: boolean("resolved").default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("entities_document_id_idx").on(table.documentId),
    index("entities_user_id_idx").on(table.userId),
  ]
);

export const chatMessages = pgTable(
  "chat_messages",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),
    clientId: uuid("client_id").references(() => clients.id),
    role: chatRoleEnum("role").notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("chat_messages_user_id_idx").on(table.userId)]
);
```

- [ ] **Step 3: Create database client**

```typescript
// src/lib/db/index.ts
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql, { schema });
export type Database = typeof db;
```

- [ ] **Step 4: Generate migration with pgvector extension**

```bash
npx drizzle-kit generate --custom --name=enable-pgvector
```

Then edit the generated SQL file to contain:

```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

Then generate the schema migration:

```bash
npx drizzle-kit generate
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: define full database schema with Drizzle ORM and pgvector"
```

---

## Task 5: Clerk Auth Integration

**Files:**
- Create: `src/middleware.ts`, modify `src/app/layout.tsx`
- Create: `src/app/(auth)/sign-in/[[...sign-in]]/page.tsx`, `src/app/(auth)/sign-up/[[...sign-up]]/page.tsx`

- [ ] **Step 1: Create Clerk middleware**

```typescript
// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
```

- [ ] **Step 2: Wrap root layout with ClerkProvider**

Update `src/app/layout.tsx` to wrap children with `<ClerkProvider>`.

```typescript
// src/app/layout.tsx
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Counsel AI",
  description: "Private AI intelligence for your law practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/sign-in">
      <html lang="en">
        <body className="min-h-screen bg-background font-sans antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
```

- [ ] **Step 3: Create auth pages**

```typescript
// src/app/(auth)/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn />
    </div>
  );
}
```

```typescript
// src/app/(auth)/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp />
    </div>
  );
}
```

- [ ] **Step 4: Verify auth works**

```bash
npm run dev
```

Navigate to localhost:3000 — should redirect to sign-in page. (Requires valid Clerk env vars to fully test.)

- [ ] **Step 5: Configure MFA in Clerk dashboard**

Go to Clerk Dashboard → User & Authentication → Multi-factor → Enable MFA and set to "Required". This satisfies the spec requirement "Clerk authentication with MFA enforced." This is a dashboard-only configuration, no code changes needed.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: integrate Clerk auth with middleware and sign-in/sign-up pages"
```

---

## Task 6: tRPC Setup with Auth Context

**Files:**
- Create: `src/server/trpc.ts`, `src/server/routers/_app.ts`, `src/app/api/trpc/[trpc]/route.ts`, `src/lib/trpc/client.ts`, `src/lib/trpc/server.ts`

- [ ] **Step 1: Create tRPC initialization with Clerk auth context**

```typescript
// src/server/trpc.ts
import { initTRPC, TRPCError } from "@trpc/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { cache } from "react";

export const createTRPCContext = cache(async () => {
  const { userId: clerkId } = await auth();

  return {
    db,
    clerkId,
  };
});

const t = initTRPC.context<typeof createTRPCContext>().create();

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure;

// Protected procedure — requires Clerk auth, resolves or creates internal user
export const protectedProcedure = t.procedure.use(async (opts) => {
  const { clerkId, db: ctxDb } = opts.ctx;

  if (!clerkId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  // Get or auto-create internal user from Clerk ID
  let [user] = await ctxDb
    .select()
    .from(users)
    .where(eq(users.clerkId, clerkId))
    .limit(1);

  if (!user) {
    // First sign-in: auto-create user record from Clerk profile
    const clerkUser = await currentUser();
    if (!clerkUser) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const [newUser] = await ctxDb
      .insert(users)
      .values({
        clerkId,
        email: clerkUser.emailAddresses[0]?.emailAddress ?? "",
        name:
          `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim() ||
          null,
      })
      .returning();

    user = newUser!;
  }

  // Update lastActiveAt
  await ctxDb
    .update(users)
    .set({ lastActiveAt: new Date() })
    .where(eq(users.id, user.id));

  return opts.next({
    ctx: {
      ...opts.ctx,
      userId: user.id,
      user,
    },
  });
});
```

- [ ] **Step 2: Create root router**

```typescript
// src/server/routers/_app.ts
import { createTRPCRouter } from "@/server/trpc";

export const appRouter = createTRPCRouter({
  // Sub-routers added in later tasks
});

export type AppRouter = typeof appRouter;
```

- [ ] **Step 3: Create API route handler**

```typescript
// src/app/api/trpc/[trpc]/route.ts
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "@/server/trpc";
import { appRouter } from "@/server/routers/_app";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST };
```

- [ ] **Step 4: Create tRPC React client**

```typescript
// src/lib/trpc/client.ts
"use client";

import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server/routers/_app";

export const trpc = createTRPCReact<AppRouter>();
```

- [ ] **Step 5: Create tRPC provider wrapper**

Create a `src/components/providers.tsx` that wraps the app with tRPC + React Query providers:

```typescript
// src/components/providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { trpc } from "@/lib/trpc/client";

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
```

Add `<TRPCProvider>` inside `<ClerkProvider>` in root layout.

- [ ] **Step 6: Create tRPC server caller for server components**

```typescript
// src/lib/trpc/server.ts
import "server-only";

import { createTRPCContext, createCallerFactory } from "@/server/trpc";
import { appRouter } from "@/server/routers/_app";

const createCaller = createCallerFactory(appRouter);

export async function serverClient() {
  const ctx = await createTRPCContext();
  return createCaller(ctx);
}
```

- [ ] **Step 7: Verify tRPC endpoint responds**

```bash
npm run dev
```

Navigate to `localhost:3000/api/trpc` — should return a response (even if empty router).

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: setup tRPC with Clerk auth context and protected procedures"
```

---

## Task 7: Dashboard Layout (Sidebar + Header)

**Files:**
- Create: `src/app/(dashboard)/layout.tsx`, `src/components/layout/sidebar.tsx`, `src/components/layout/header.tsx`
- Create: `src/app/(dashboard)/dashboard/page.tsx` (placeholder)

- [ ] **Step 1: Create sidebar component**

```typescript
// src/components/layout/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  MessageSquare,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/matters", label: "Matters", icon: Briefcase },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/upload", label: "Upload", icon: Upload },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/dashboard" className="text-lg font-semibold">
          Counsel AI
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname.startsWith(item.href) ? "secondary" : "ghost"}
            className={cn("w-full justify-start gap-2")}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          </Button>
        ))}
      </nav>
    </aside>
  );
}
```

- [ ] **Step 2: Create header component**

```typescript
// src/components/layout/header.tsx
import { UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b px-6">
      <div />
      <UserButton />
    </header>
  );
}
```

- [ ] **Step 3: Create dashboard layout**

```typescript
// src/app/(dashboard)/layout.tsx
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create placeholder dashboard page**

```typescript
// src/app/(dashboard)/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-muted-foreground">Welcome to Counsel AI.</p>
    </div>
  );
}
```

- [ ] **Step 5: Add root redirect to dashboard**

```typescript
// src/app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
}
```

- [ ] **Step 6: Verify layout renders**

```bash
npm run dev
```

Expected: Sidebar with nav links on the left, header with Clerk UserButton on top, dashboard content in the main area.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add dashboard layout with sidebar navigation and header"
```

---

## Task 8: Cloudflare R2 Client

**Files:**
- Create: `src/lib/r2/client.ts`, `src/lib/r2/signed-url.ts`

- [ ] **Step 1: Create R2 S3 client**

```typescript
// src/lib/r2/client.ts
import "server-only";
import { S3Client } from "@aws-sdk/client-s3";

export const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY!,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY!,
  },
});

export const R2_BUCKET = process.env.CLOUDFLARE_R2_BUCKET!;
```

- [ ] **Step 2: Create signed URL helper**

```typescript
// src/lib/r2/signed-url.ts
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2Client, R2_BUCKET } from "./client";

export async function getDownloadUrl(key: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
  });
  return getSignedUrl(r2Client, command, { expiresIn: 900 }); // 15 minutes
}

export async function uploadToR2(
  key: string,
  body: Buffer,
  contentType: string
): Promise<void> {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
    Body: body,
    ContentType: contentType,
  });
  await r2Client.send(command);
}
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Cloudflare R2 client with signed URL helpers"
```

---

## Task 9: Inngest Client + Webhook Route

**Files:**
- Create: `src/lib/inngest/client.ts`, `src/lib/inngest/functions.ts`, `src/app/api/webhooks/inngest/route.ts`

- [ ] **Step 1: Create Inngest client**

```typescript
// src/lib/inngest/client.ts
import { Inngest, EventSchemas } from "inngest";

type Events = {
  "document/uploaded": {
    data: { documentId: string; userId: string };
  };
  "audio/uploaded": {
    data: { documentId: string; userId: string; r2Key: string };
  };
};

export const inngest = new Inngest({
  id: "counsel-ai",
  schemas: new EventSchemas().fromRecord<Events>(),
});
```

- [ ] **Step 2: Create functions barrel file (empty for now)**

```typescript
// src/lib/inngest/functions.ts
// All Inngest functions are re-exported here for the serve handler.
// Functions will be added in Task 13 and Task 14.
export const inngestFunctions = [];
```

- [ ] **Step 3: Create Inngest serve route**

```typescript
// src/app/api/webhooks/inngest/route.ts
import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { inngestFunctions } from "@/lib/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: inngestFunctions,
});
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: setup Inngest client and serve handler"
```

---

## Task 10: faster-whisper Python Service

**Files:**
- Create: `services/whisper/main.py`, `services/whisper/requirements.txt`, `services/whisper/railway.toml`

- [ ] **Step 1: Create requirements.txt**

```
faster-whisper
fastapi
uvicorn
python-multipart
```

- [ ] **Step 2: Create main.py**

```python
# services/whisper/main.py
import io
import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, File, UploadFile, HTTPException
from faster_whisper import WhisperModel

logger = logging.getLogger("whisper-service")
model: WhisperModel | None = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    global model
    logger.info("Loading faster-whisper model (medium.en, int8)...")
    model = WhisperModel("medium.en", device="cpu", compute_type="int8")
    logger.info("Model loaded successfully.")
    yield
    model = None


app = FastAPI(lifespan=lifespan)


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/transcribe")
async def transcribe(audio: UploadFile = File(...)):
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")

    try:
        audio_bytes = await audio.read()
        audio_stream = io.BytesIO(audio_bytes)

        segments, info = model.transcribe(audio_stream, beam_size=5)
        transcript = " ".join(segment.text.strip() for segment in segments)

        return {
            "transcript": transcript,
            "duration_seconds": round(info.duration, 2),
            "language": info.language,
        }
    except Exception as e:
        logger.exception("Transcription failed")
        raise HTTPException(status_code=500, detail=str(e))
```

- [ ] **Step 3: Create Railway config**

```toml
# services/whisper/railway.toml
[build]
builder = "nixpacks"

[deploy]
startCommand = "uvicorn main:app --host 0.0.0.0 --port 8080"
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add faster-whisper Python transcription service"
```

---

## Task 11: Ingestion Pipeline Modules

**Files:**
- Create: `src/lib/ingestion/extract-text.ts`, `src/lib/ingestion/transcribe.ts`, `src/lib/ingestion/extract-entities.ts`, `src/lib/ingestion/chunk-embed.ts`, `src/lib/ingestion/summarize.ts`, `src/lib/ingestion/estimate-billable.ts`
- Create: `src/lib/ai/anthropic.ts`, `src/lib/ai/voyage.ts`
- Create: `src/types/entities.ts`, `src/types/transcription.ts`

- [ ] **Step 1: Create Anthropic client**

```typescript
// src/lib/ai/anthropic.ts
import "server-only";
import Anthropic from "@anthropic-ai/sdk";

// Direct Anthropic SDK client for non-streaming calls (entity extraction, summarization)
export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});
```

- [ ] **Step 2: Create Voyage AI embedding client**

```typescript
// src/lib/ai/voyage.ts
import "server-only";

const VOYAGE_API_URL = "https://api.voyageai.com/v1/embeddings";

export async function embedTexts(texts: string[]): Promise<number[][]> {
  const response = await fetch(VOYAGE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VOYAGE_API_KEY!}`,
    },
    body: JSON.stringify({
      input: texts,
      model: "voyage-law-2",
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Voyage AI embedding failed: ${response.status} ${error}`);
  }

  const data = (await response.json()) as {
    data: Array<{ embedding: number[] }>;
  };

  return data.data.map((d) => d.embedding);
}

export async function embedText(text: string): Promise<number[]> {
  const [embedding] = await embedTexts([text]);
  if (!embedding) {
    throw new Error("No embedding returned from Voyage AI");
  }
  return embedding;
}
```

- [ ] **Step 3: Create Zod schemas for external data**

```typescript
// src/types/entities.ts
import { z } from "zod";

export const extractedEntitiesSchema = z.object({
  clientNames: z.array(z.string()),
  dates: z.array(
    z.object({
      value: z.string(),
      context: z.string(),
    })
  ),
  dollarAmounts: z.array(
    z.object({
      value: z.string(),
      context: z.string(),
    })
  ),
  actionItems: z.array(
    z.object({
      value: z.string(),
      context: z.string(),
    })
  ),
  deadlines: z.array(
    z.object({
      value: z.string(),
      dueDate: z.string().optional(),
      context: z.string(),
    })
  ),
  caseReferences: z.array(
    z.object({
      value: z.string(),
      context: z.string(),
    })
  ),
});

export type ExtractedEntities = z.infer<typeof extractedEntitiesSchema>;
```

```typescript
// src/types/transcription.ts
import { z } from "zod";

export const transcriptionResponseSchema = z.object({
  transcript: z.string(),
  duration_seconds: z.number(),
  language: z.string(),
});

export type TranscriptionResponse = z.infer<typeof transcriptionResponseSchema>;
```

- [ ] **Step 4: Create text extraction module**

```typescript
// src/lib/ingestion/extract-text.ts
import pdf from "pdf-parse";
import mammoth from "mammoth";

export async function extractText(
  buffer: Buffer,
  fileName: string
): Promise<string> {
  const ext = fileName.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "pdf": {
      const data = await pdf(buffer);
      return data.text;
    }
    case "docx": {
      const result = await mammoth.extractRawText({ buffer });
      return result.value;
    }
    case "txt": {
      return buffer.toString("utf-8");
    }
    default:
      throw new Error(`Unsupported file type: ${ext}`);
  }
}
```

- [ ] **Step 5: Create transcription client**

```typescript
// src/lib/ingestion/transcribe.ts
import {
  transcriptionResponseSchema,
  type TranscriptionResponse,
} from "@/types/transcription";

export async function transcribeAudio(
  audioBuffer: Buffer,
  fileName: string
): Promise<TranscriptionResponse> {
  const formData = new FormData();
  formData.append(
    "audio",
    new Blob([audioBuffer]),
    fileName
  );

  const response = await fetch(
    `${process.env.WHISPER_SERVICE_URL}/transcribe`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(
      `Transcription failed: ${response.status} ${error}`
    );
  }

  const data = await response.json();
  return transcriptionResponseSchema.parse(data);
}
```

- [ ] **Step 6: Create entity extraction module**

```typescript
// src/lib/ingestion/extract-entities.ts
import { anthropic } from "@/lib/ai/anthropic";
import {
  extractedEntitiesSchema,
  type ExtractedEntities,
} from "@/types/entities";

const SYSTEM_PROMPT = `You are a legal document analyst. Extract structured information from the following document text.

Return a JSON object with these fields:
- clientNames: array of person/organization names mentioned
- dates: array of {value, context} for dates mentioned
- dollarAmounts: array of {value, context} for monetary amounts
- actionItems: array of {value, context} for tasks or actions needed
- deadlines: array of {value, dueDate (ISO format if determinable), context} for deadlines
- caseReferences: array of {value, context} for case numbers, file numbers, court references

Return ONLY valid JSON, no other text.`;

export async function extractEntities(
  text: string
): Promise<ExtractedEntities> {
  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: text.slice(0, 15000), // Limit input to avoid token overflow
      },
    ],
  });

  const content = message.content[0];
  if (content.type !== "text") {
    throw new Error("Unexpected response type from Claude");
  }

  const parsed = JSON.parse(content.text);
  return extractedEntitiesSchema.parse(parsed);
}
```

- [ ] **Step 7: Create chunking + embedding module**

```typescript
// src/lib/ingestion/chunk-embed.ts
import { embedTexts } from "@/lib/ai/voyage";

const CHUNK_SIZE = 512; // tokens (approximate with chars / 4)
const CHUNK_OVERLAP = 50;
const CHARS_PER_TOKEN = 4; // rough approximation

interface Chunk {
  content: string;
  chunkIndex: number;
  embedding: number[];
}

export function splitIntoChunks(text: string): string[] {
  const chunkChars = CHUNK_SIZE * CHARS_PER_TOKEN;
  const overlapChars = CHUNK_OVERLAP * CHARS_PER_TOKEN;
  const chunks: string[] = [];

  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + chunkChars, text.length);
    chunks.push(text.slice(start, end));
    if (end === text.length) break; // Last chunk, no more to process
    start = end - overlapChars;
  }

  return chunks;
}

export async function chunkAndEmbed(text: string): Promise<Chunk[]> {
  const textChunks = splitIntoChunks(text);

  if (textChunks.length === 0) {
    return [];
  }

  // Embed in batches of 20 to avoid API limits
  const BATCH_SIZE = 20;
  const allEmbeddings: number[][] = [];

  for (let i = 0; i < textChunks.length; i += BATCH_SIZE) {
    const batch = textChunks.slice(i, i + BATCH_SIZE);
    const embeddings = await embedTexts(batch);
    allEmbeddings.push(...embeddings);
  }

  return textChunks.map((content, index) => ({
    content,
    chunkIndex: index,
    embedding: allEmbeddings[index]!,
  }));
}
```

- [ ] **Step 8: Create summarization module**

```typescript
// src/lib/ingestion/summarize.ts
import { anthropic } from "@/lib/ai/anthropic";

export async function summarizeDocument(text: string): Promise<string> {
  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 300,
    system:
      "You are a legal document analyst. Provide a 2-3 sentence summary of the following document optimized for legal context. Focus on key parties, issues, dates, and obligations.",
    messages: [
      {
        role: "user",
        content: text.slice(0, 15000),
      },
    ],
  });

  const content = message.content[0];
  if (content.type !== "text") {
    throw new Error("Unexpected response type from Claude");
  }

  return content.text;
}
```

- [ ] **Step 9: Create billable time estimation module**

```typescript
// src/lib/ingestion/estimate-billable.ts
type DocumentType =
  | "email"
  | "voice_note"
  | "meeting"
  | "document"
  | "text_message"
  | "calendar";

interface EstimateInput {
  type: DocumentType;
  wordCount: number;
  durationSeconds?: number;
}

export function estimateBillableMinutes(input: EstimateInput): number {
  switch (input.type) {
    case "voice_note":
    case "meeting":
      return Math.ceil((input.durationSeconds ?? 0) / 60);
    case "email":
      // Use "read" estimate for ingested emails
      return Math.max(2, Math.ceil(input.wordCount / 200));
    case "document":
    case "text_message":
    case "calendar":
      return Math.max(1, Math.ceil(input.wordCount / 150));
    default:
      return 0;
  }
}
```

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat: add ingestion pipeline modules (extract, entities, chunk, embed, summarize, billable)"
```

---

## Task 12: Upload API Route

**Files:**
- Create: `src/app/api/upload/route.ts`, `src/types/upload.ts`

- [ ] **Step 1: Create upload validation schema**

```typescript
// src/types/upload.ts
import { z } from "zod";

const ALLOWED_DOCUMENT_TYPES = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"];
const ALLOWED_AUDIO_TYPES = ["audio/mpeg", "audio/mp4", "audio/x-m4a", "audio/mp3", "video/mp4"];
const ALLOWED_EXTENSIONS = ["pdf", "docx", "txt", "mp3", "mp4", "m4a"];
const AUDIO_EXTENSIONS = ["mp3", "mp4", "m4a"];

export function getFileExtension(fileName: string): string {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

export function isAudioFile(fileName: string): boolean {
  return AUDIO_EXTENSIONS.includes(getFileExtension(fileName));
}

export function isAllowedFile(fileName: string): boolean {
  return ALLOWED_EXTENSIONS.includes(getFileExtension(fileName));
}

export const uploadMetadataSchema = z.object({
  clientId: z.string().uuid().optional(),
  matterId: z.string().uuid().optional(),
  title: z.string().optional(),
});
```

- [ ] **Step 2: Create upload API route**

```typescript
// src/app/api/upload/route.ts
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { documents, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { uploadToR2 } from "@/lib/r2/signed-url";
import { inngest } from "@/lib/inngest/client";
import { isAllowedFile, isAudioFile, uploadMetadataSchema } from "@/types/upload";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, clerkId))
    .limit(1);

  if (!user) {
    return new Response("User not found", { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return new Response("No file provided", { status: 400 });
  }

  if (!isAllowedFile(file.name)) {
    return new Response("File type not allowed", { status: 400 });
  }

  // Parse optional metadata
  const rawMetadata = formData.get("metadata") as string | null;
  const metadata = rawMetadata
    ? uploadMetadataSchema.parse(JSON.parse(rawMetadata))
    : {};

  // Upload to R2
  const r2Key = `${user.id}/${randomUUID()}/${file.name}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await uploadToR2(r2Key, buffer, file.type);

  // Determine document type
  const isAudio = isAudioFile(file.name);
  const docType = isAudio ? "meeting" : "document";

  // Create document record
  const [doc] = await db
    .insert(documents)
    .values({
      userId: user.id,
      clientId: metadata.clientId ?? null,
      matterId: metadata.matterId ?? null,
      type: docType,
      title: metadata.title ?? file.name,
      status: "pending",
      r2Key,
    })
    .returning();

  // Fire appropriate Inngest event
  if (isAudio) {
    await inngest.send({
      name: "audio/uploaded",
      data: {
        documentId: doc!.id,
        userId: user.id,
        r2Key,
      },
    });
  } else {
    await inngest.send({
      name: "document/uploaded",
      data: {
        documentId: doc!.id,
        userId: user.id,
      },
    });
  }

  return Response.json({ documentId: doc!.id, status: "pending" });
}
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add unified file upload API route with R2 storage and Inngest dispatch"
```

---

## Task 13: Inngest ingest-document Function

**Files:**
- Create: `src/lib/inngest/ingest-document.ts`
- Modify: `src/lib/inngest/functions.ts`

- [ ] **Step 1: Create the ingest-document Inngest function**

```typescript
// src/lib/inngest/ingest-document.ts
import { inngest } from "./client";
import { db } from "@/lib/db";
import { documents, documentChunks, entities } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { r2Client, R2_BUCKET } from "@/lib/r2/client";
import { extractText } from "@/lib/ingestion/extract-text";
import { extractEntities } from "@/lib/ingestion/extract-entities";
import { chunkAndEmbed } from "@/lib/ingestion/chunk-embed";
import { summarizeDocument } from "@/lib/ingestion/summarize";
import { estimateBillableMinutes } from "@/lib/ingestion/estimate-billable";

export const ingestDocument = inngest.createFunction(
  {
    id: "ingest-document",
    retries: 3,
    concurrency: {
      scope: "fn",
      key: "event.data.userId",
      limit: 5,
    },
    onFailure: async ({ event, error }) => {
      // Mark document as failed after all retries exhausted
      const { documentId } = event.data.event.data;
      await db
        .update(documents)
        .set({
          status: "failed",
          errorMessage: error.message,
          updatedAt: new Date(),
        })
        .where(eq(documents.id, documentId));
    },
  },
  { event: "document/uploaded" },
  async ({ event, step }) => {
    const { documentId, userId } = event.data;

    // Mark as processing
    await step.run("mark-processing", async () => {
      await db
        .update(documents)
        .set({ status: "processing", updatedAt: new Date() })
        .where(eq(documents.id, documentId));
    });

    // Fetch document record
    const doc = await step.run("fetch-document", async () => {
      const [d] = await db
        .select()
        .from(documents)
        .where(eq(documents.id, documentId))
        .limit(1);
      if (!d) throw new Error(`Document ${documentId} not found`);
      return d;
    });

    // Extract text from file
    const rawContent = await step.run("extract-text", async () => {
      if (doc.rawContent) return doc.rawContent; // Already has text (from transcription)

      if (!doc.r2Key) throw new Error("No R2 key for document");

      const command = new GetObjectCommand({
        Bucket: R2_BUCKET,
        Key: doc.r2Key,
      });
      const response = await r2Client.send(command);
      const buffer = Buffer.from(await response.Body!.transformToByteArray());
      const fileName = doc.r2Key.split("/").pop() ?? "file.txt";

      const text = await extractText(buffer, fileName);

      await db
        .update(documents)
        .set({ rawContent: text, updatedAt: new Date() })
        .where(eq(documents.id, documentId));

      return text;
    });

    // Extract entities
    await step.run("extract-entities", async () => {
      const extracted = await extractEntities(rawContent);

      const entityRows = [
        ...extracted.clientNames.map((name) => ({
          documentId,
          userId,
          type: "person" as const,
          value: name,
          context: "",
        })),
        ...extracted.dates.map((d) => ({
          documentId,
          userId,
          type: "date" as const,
          value: d.value,
          context: d.context,
        })),
        ...extracted.dollarAmounts.map((d) => ({
          documentId,
          userId,
          type: "amount" as const,
          value: d.value,
          context: d.context,
        })),
        ...extracted.actionItems.map((d) => ({
          documentId,
          userId,
          type: "action_item" as const,
          value: d.value,
          context: d.context,
        })),
        ...extracted.deadlines.map((d) => ({
          documentId,
          userId,
          type: "deadline" as const,
          value: d.value,
          context: d.context,
          dueDate: d.dueDate ? new Date(d.dueDate) : null,
        })),
        ...extracted.caseReferences.map((d) => ({
          documentId,
          userId,
          type: "case_reference" as const,
          value: d.value,
          context: d.context,
        })),
      ];

      if (entityRows.length > 0) {
        await db.insert(entities).values(entityRows);
      }
    });

    // Chunk and embed
    await step.run("chunk-and-embed", async () => {
      const chunks = await chunkAndEmbed(rawContent);

      if (chunks.length > 0) {
        await db.insert(documentChunks).values(
          chunks.map((chunk) => ({
            documentId,
            userId,
            clientId: doc.clientId,
            content: chunk.content,
            embedding: chunk.embedding,
            chunkIndex: chunk.chunkIndex,
          }))
        );
      }
    });

    // Summarize
    const summary = await step.run("summarize", async () => {
      return summarizeDocument(rawContent);
    });

    // Estimate billable time
    const billableMinutes = await step.run("estimate-billable", async () => {
      const wordCount = rawContent.split(/\s+/).length;
      const durationSeconds =
        (doc.metadata as Record<string, unknown> | null)?.durationSeconds as
          | number
          | undefined;

      return estimateBillableMinutes({
        type: doc.type,
        wordCount,
        durationSeconds,
      });
    });

    // Mark completed
    await step.run("mark-completed", async () => {
      await db
        .update(documents)
        .set({
          summary,
          billableMinutes,
          status: "completed",
          updatedAt: new Date(),
        })
        .where(eq(documents.id, documentId));
    });

    return { documentId, status: "completed" };
  }
);
```

- [ ] **Step 2: Register in functions barrel**

```typescript
// src/lib/inngest/functions.ts
import { ingestDocument } from "./ingest-document";

export const inngestFunctions = [ingestDocument];
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: implement ingest-document Inngest function with full pipeline"
```

---

## Task 14: Inngest transcribe-audio Function

**Files:**
- Create: `src/lib/inngest/transcribe-audio.ts`
- Modify: `src/lib/inngest/functions.ts`

- [ ] **Step 1: Create the transcribe-audio Inngest function**

```typescript
// src/lib/inngest/transcribe-audio.ts
import { inngest } from "./client";
import { db } from "@/lib/db";
import { documents } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { r2Client, R2_BUCKET } from "@/lib/r2/client";
import { transcribeAudio } from "@/lib/ingestion/transcribe";

export const transcribeAudioFn = inngest.createFunction(
  {
    id: "transcribe-audio",
    retries: 2,
  },
  { event: "audio/uploaded" },
  async ({ event, step }) => {
    const { documentId, userId, r2Key } = event.data;

    // Mark as processing
    await step.run("mark-processing", async () => {
      await db
        .update(documents)
        .set({ status: "processing", updatedAt: new Date() })
        .where(eq(documents.id, documentId));
    });

    // Fetch audio from R2 and transcribe
    const transcription = await step.run("transcribe", async () => {
      const command = new GetObjectCommand({
        Bucket: R2_BUCKET,
        Key: r2Key,
      });
      const response = await r2Client.send(command);
      const buffer = Buffer.from(await response.Body!.transformToByteArray());
      const fileName = r2Key.split("/").pop() ?? "audio.mp3";

      return transcribeAudio(buffer, fileName);
    });

    // Store transcript and metadata
    await step.run("store-transcript", async () => {
      await db
        .update(documents)
        .set({
          rawContent: transcription.transcript,
          metadata: {
            durationSeconds: transcription.duration_seconds,
            language: transcription.language,
          },
          updatedAt: new Date(),
        })
        .where(eq(documents.id, documentId));
    });

    // Chain to document ingestion pipeline
    await step.sendEvent("trigger-ingestion", {
      name: "document/uploaded",
      data: {
        documentId,
        userId,
      },
    });

    return { documentId, status: "transcribed" };
  }
);
```

- [ ] **Step 2: Register in functions barrel**

```typescript
// src/lib/inngest/functions.ts
import { ingestDocument } from "./ingest-document";
import { transcribeAudioFn } from "./transcribe-audio";

export const inngestFunctions = [ingestDocument, transcribeAudioFn];
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: implement transcribe-audio Inngest function with whisper service integration"
```

---

## Task 15: tRPC Client Router

**Files:**
- Create: `src/server/routers/clients.ts`
- Modify: `src/server/routers/_app.ts`

- [ ] **Step 1: Create clients router**

```typescript
// src/server/routers/clients.ts
import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { clients, documents } from "@/lib/db/schema";
import { eq, and, count, sum } from "drizzle-orm";
import { z } from "zod";

const createClientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
});

const updateClientSchema = createClientSchema.partial().extend({
  id: z.string().uuid(),
});

export const clientsRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(clients)
      .where(eq(clients.userId, ctx.userId))
      .orderBy(clients.name);
  }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [client] = await ctx.db
        .select()
        .from(clients)
        .where(
          and(eq(clients.id, input.id), eq(clients.userId, ctx.userId))
        )
        .limit(1);

      if (!client) {
        throw new Error("Client not found");
      }

      return client;
    }),

  create: protectedProcedure
    .input(createClientSchema)
    .mutation(async ({ ctx, input }) => {
      const [client] = await ctx.db
        .insert(clients)
        .values({
          userId: ctx.userId,
          ...input,
        })
        .returning();

      return client!;
    }),

  update: protectedProcedure
    .input(updateClientSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const [client] = await ctx.db
        .update(clients)
        .set({ ...data, updatedAt: new Date() })
        .where(
          and(eq(clients.id, id), eq(clients.userId, ctx.userId))
        )
        .returning();

      return client!;
    }),
});
```

- [ ] **Step 2: Add to root router**

```typescript
// src/server/routers/_app.ts
import { createTRPCRouter } from "@/server/trpc";
import { clientsRouter } from "./clients";

export const appRouter = createTRPCRouter({
  clients: clientsRouter,
});

export type AppRouter = typeof appRouter;
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add clients tRPC router with CRUD operations"
```

---

## Task 16: tRPC Matters Router

**Files:**
- Create: `src/server/routers/matters.ts`
- Modify: `src/server/routers/_app.ts`

- [ ] **Step 1: Create matters router**

```typescript
// src/server/routers/matters.ts
import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { matters } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { z } from "zod";

const createMatterSchema = z.object({
  clientId: z.string().uuid(),
  title: z.string().min(1),
  description: z.string().optional(),
});

const updateMatterSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  status: z.enum(["active", "closed", "pending"]).optional(),
});

export const mattersRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z
        .object({ clientId: z.string().uuid().optional() })
        .optional()
    )
    .query(async ({ ctx, input }) => {
      const conditions = [eq(matters.userId, ctx.userId)];
      if (input?.clientId) {
        conditions.push(eq(matters.clientId, input.clientId));
      }
      return ctx.db
        .select()
        .from(matters)
        .where(and(...conditions))
        .orderBy(matters.createdAt);
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [matter] = await ctx.db
        .select()
        .from(matters)
        .where(
          and(eq(matters.id, input.id), eq(matters.userId, ctx.userId))
        )
        .limit(1);

      if (!matter) throw new Error("Matter not found");
      return matter;
    }),

  create: protectedProcedure
    .input(createMatterSchema)
    .mutation(async ({ ctx, input }) => {
      const [matter] = await ctx.db
        .insert(matters)
        .values({
          userId: ctx.userId,
          ...input,
        })
        .returning();

      return matter!;
    }),

  update: protectedProcedure
    .input(updateMatterSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const [matter] = await ctx.db
        .update(matters)
        .set({ ...data, updatedAt: new Date() })
        .where(
          and(eq(matters.id, id), eq(matters.userId, ctx.userId))
        )
        .returning();

      return matter!;
    }),
});
```

- [ ] **Step 2: Add to root router**

Add `matters: mattersRouter` to the appRouter in `_app.ts`.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add matters tRPC router with CRUD operations"
```

---

## Task 17: tRPC Documents + Chat Routers

**Files:**
- Create: `src/server/routers/documents.ts`, `src/server/routers/chat.ts`
- Modify: `src/server/routers/_app.ts`

- [ ] **Step 1: Create documents router**

```typescript
// src/server/routers/documents.ts
import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { documents, documentChunks, entities } from "@/lib/db/schema";
import { eq, and, desc } from "drizzle-orm";
import { z } from "zod";
import { getDownloadUrl } from "@/lib/r2/signed-url";

export const documentsRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z
        .object({
          clientId: z.string().uuid().optional(),
          matterId: z.string().uuid().optional(),
        })
        .optional()
    )
    .query(async ({ ctx, input }) => {
      const conditions = [eq(documents.userId, ctx.userId)];
      if (input?.clientId) conditions.push(eq(documents.clientId, input.clientId));
      if (input?.matterId) conditions.push(eq(documents.matterId, input.matterId));

      return ctx.db
        .select()
        .from(documents)
        .where(and(...conditions))
        .orderBy(desc(documents.createdAt));
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [doc] = await ctx.db
        .select()
        .from(documents)
        .where(
          and(eq(documents.id, input.id), eq(documents.userId, ctx.userId))
        )
        .limit(1);

      if (!doc) throw new Error("Document not found");

      const docEntities = await ctx.db
        .select()
        .from(entities)
        .where(eq(entities.documentId, doc.id));

      return { ...doc, entities: docEntities };
    }),

  getSignedUrl: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [doc] = await ctx.db
        .select()
        .from(documents)
        .where(
          and(eq(documents.id, input.id), eq(documents.userId, ctx.userId))
        )
        .limit(1);

      if (!doc?.r2Key) throw new Error("Document not found or no file");

      const url = await getDownloadUrl(doc.r2Key);
      return { url };
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      // Cascade deletes handle chunks and entities via FK constraints
      await ctx.db
        .delete(documents)
        .where(
          and(eq(documents.id, input.id), eq(documents.userId, ctx.userId))
        );
    }),
});
```

- [ ] **Step 2: Create chat router**

```typescript
// src/server/routers/chat.ts
import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { chatMessages } from "@/lib/db/schema";
import { eq, and, desc } from "drizzle-orm";
import { z } from "zod";

export const chatRouter = createTRPCRouter({
  history: protectedProcedure
    .input(
      z
        .object({
          clientId: z.string().uuid().optional(),
          limit: z.number().min(1).max(100).default(50),
        })
        .optional()
    )
    .query(async ({ ctx, input }) => {
      const conditions = [eq(chatMessages.userId, ctx.userId)];
      if (input?.clientId) {
        conditions.push(eq(chatMessages.clientId, input.clientId));
      }

      const messages = await ctx.db
        .select()
        .from(chatMessages)
        .where(and(...conditions))
        .orderBy(desc(chatMessages.createdAt))
        .limit(input?.limit ?? 50);

      return messages.reverse(); // Return in chronological order
    }),

  clearHistory: protectedProcedure
    .input(z.object({ clientId: z.string().uuid().optional() }))
    .mutation(async ({ ctx, input }) => {
      const conditions = [eq(chatMessages.userId, ctx.userId)];
      if (input.clientId) {
        conditions.push(eq(chatMessages.clientId, input.clientId));
      }
      await ctx.db.delete(chatMessages).where(and(...conditions));
    }),
});
```

- [ ] **Step 3: Add both to root router**

Add `documents: documentsRouter` and `chat: chatRouter` to appRouter.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add documents and chat tRPC routers"
```

---

## Task 18: Upload UI

**Files:**
- Create: `src/components/upload/upload-zone.tsx`, `src/app/(dashboard)/upload/page.tsx`

- [ ] **Step 1: Create upload zone component**

Build a drag-and-drop file upload component using shadcn Card, with:
- Drag-and-drop area (accepts PDF, DOCX, TXT, MP3, MP4, M4A)
- File list showing upload status (uploading / queued / processing / complete)
- Optional client and matter selector dropdowns (using tRPC queries)
- Calls `POST /api/upload` with FormData
- Polls `documents.list` to update processing status

```typescript
// src/components/upload/upload-zone.tsx
"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Loader2, CheckCircle2, XCircle } from "lucide-react";

// Note: install react-dropzone
// npm install react-dropzone

const ACCEPTED_TYPES = {
  "application/pdf": [".pdf"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
  "text/plain": [".txt"],
  "audio/mpeg": [".mp3"],
  "audio/mp4": [".m4a"],
  "video/mp4": [".mp4"],
};

interface UploadFile {
  file: File;
  status: "uploading" | "queued" | "error";
  documentId?: string;
  error?: string;
}

export function UploadZone() {
  const [files, setFiles] = useState<UploadFile[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      status: "uploading" as const,
    }));

    setFiles((prev) => [...prev, ...newFiles]);

    for (const uploadFile of newFiles) {
      try {
        const formData = new FormData();
        formData.append("file", uploadFile.file);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(await response.text());
        }

        const data = await response.json();

        setFiles((prev) =>
          prev.map((f) =>
            f.file === uploadFile.file
              ? { ...f, status: "queued", documentId: data.documentId }
              : f
          )
        );
      } catch (error) {
        setFiles((prev) =>
          prev.map((f) =>
            f.file === uploadFile.file
              ? {
                  ...f,
                  status: "error",
                  error: error instanceof Error ? error.message : "Upload failed",
                }
              : f
          )
        );
      }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
  });

  return (
    <div className="space-y-6">
      <Card
        {...getRootProps()}
        className={`cursor-pointer border-2 border-dashed transition-colors ${
          isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
        }`}
      >
        <CardContent className="flex flex-col items-center justify-center py-12">
          <input {...getInputProps()} />
          <Upload className="mb-4 h-10 w-10 text-muted-foreground" />
          <p className="text-sm font-medium">
            {isDragActive
              ? "Drop files here..."
              : "Drag & drop files, or click to browse"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            PDF, DOCX, TXT, MP3, MP4, M4A
          </p>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-md border p-3"
            >
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="flex-1 truncate text-sm">{f.file.name}</span>
              {f.status === "uploading" && (
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              )}
              {f.status === "queued" && (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              )}
              {f.status === "error" && (
                <XCircle className="h-4 w-4 text-destructive" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Create upload page**

```typescript
// src/app/(dashboard)/upload/page.tsx
import { UploadZone } from "@/components/upload/upload-zone";

export default function UploadPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Upload Documents</h1>
        <p className="text-muted-foreground">
          Upload documents and recordings for AI processing.
        </p>
      </div>
      <UploadZone />
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add drag-and-drop upload UI with file status tracking"
```

---

## Task 19: Client and Matter UI Pages

**Files:**
- Create: `src/app/(dashboard)/clients/page.tsx`, `src/app/(dashboard)/clients/[id]/page.tsx`
- Create: `src/components/clients/client-card.tsx`, `src/components/clients/client-form.tsx`, `src/components/clients/entity-list.tsx`
- Create: `src/app/(dashboard)/matters/page.tsx`, `src/components/matters/matter-form.tsx`

- [ ] **Step 1: Create client card component**

A card showing client name, company, document count, total billable time. Uses shadcn Card.

- [ ] **Step 2: Create client form component**

A dialog/modal form for creating and editing clients. Fields: name (required), email, phone, company. Uses shadcn Dialog + Form components with Zod validation.

- [ ] **Step 3: Create clients list page**

Grid layout of client cards with "Add Client" button triggering the form dialog. Uses `trpc.clients.list` query.

- [ ] **Step 4: Create entity list component**

Displays entities grouped by type (person, date, amount, action_item, deadline, case_reference). Deadlines highlighted with date. Action items have a resolved toggle.

- [ ] **Step 5: Create client detail page**

Client info header with edit button. Three tabs (shadcn Tabs):
- Documents: list from `trpc.documents.list({ clientId })`
- Entities: entity list from document entities
- Matters: list from `trpc.matters.list({ clientId })`

- [ ] **Step 6: Create matter form component**

Dialog for creating/editing matters. Fields: clientId (select), title, description. Uses `trpc.matters.create`.

- [ ] **Step 7: Create matters page**

List view with matters grouped by client, status filter dropdown. Uses `trpc.matters.list`.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: add client and matter CRUD pages with entity display"
```

---

## Task 20: Dashboard Page

**Files:**
- Modify: `src/app/(dashboard)/dashboard/page.tsx`

- [ ] **Step 1: Build dashboard with stats and activity**

Dashboard page with:
- Welcome message using user name from Clerk
- Stats cards (shadcn Card): total clients, total documents, total billable hours, documents processing
- Recent activity: last 10 completed documents with title, summary, type badge, billable minutes

Uses server component with direct DB queries (all scoped to userId).

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "feat: build dashboard with stats cards and recent activity feed"
```

---

## Task 21: RAG Retrieval Module

**Files:**
- Create: `src/lib/ai/retrieve.ts`, `src/lib/ai/system-prompt.ts`

- [ ] **Step 1: Create vector search retrieval**

```typescript
// src/lib/ai/retrieve.ts
import { db } from "@/lib/db";
import { documentChunks } from "@/lib/db/schema";
import { and, eq, sql, desc } from "drizzle-orm";
import { embedText } from "./voyage";

interface RetrievedChunk {
  content: string;
  documentId: string;
  chunkIndex: number;
  similarity: number;
}

export async function retrieveChunks(
  query: string,
  userId: string,
  clientId?: string,
  limit: number = 8
): Promise<RetrievedChunk[]> {
  const queryEmbedding = await embedText(query);

  const conditions = [eq(documentChunks.userId, userId)];
  if (clientId) {
    conditions.push(eq(documentChunks.clientId, clientId));
  }

  const results = await db
    .select({
      content: documentChunks.content,
      documentId: documentChunks.documentId,
      chunkIndex: documentChunks.chunkIndex,
      similarity: sql<number>`1 - (${documentChunks.embedding} <=> ${JSON.stringify(queryEmbedding)}::vector)`,
    })
    .from(documentChunks)
    .where(and(...conditions))
    .orderBy(
      sql`${documentChunks.embedding} <=> ${JSON.stringify(queryEmbedding)}::vector`
    )
    .limit(limit);

  return results;
}
```

- [ ] **Step 2: Create system prompt builder**

```typescript
// src/lib/ai/system-prompt.ts
interface SystemPromptParams {
  lawyerName: string;
  firmName: string;
  clientName?: string;
  clientSummary?: string;
  chunks: Array<{ content: string }>;
}

export function buildSystemPrompt(params: SystemPromptParams): string {
  let prompt = `You are a private AI assistant for ${params.lawyerName}`;
  if (params.firmName) {
    prompt += ` at ${params.firmName}`;
  }
  prompt += `.
You have access to their complete practice history. Be concise and direct.
Flag action items clearly. Note billable time when relevant.`;

  if (params.clientName) {
    prompt += `\nYou are currently focused on ${params.clientName}.`;
    if (params.clientSummary) {
      prompt += ` Their profile: ${params.clientSummary}`;
    }
  }

  if (params.chunks.length > 0) {
    prompt += `\n\nRELEVANT CONTEXT FROM FILES:\n---\n`;
    prompt += params.chunks.map((c) => c.content).join("\n\n");
    prompt += `\n---\nAnswer based on the context above. If unsure, say so.`;
  }

  return prompt;
}
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add RAG retrieval with pgvector search and system prompt builder"
```

---

## Task 22: Chat Streaming API Route

**Files:**
- Create: `src/app/api/chat/route.ts`

- [ ] **Step 1: Create streaming chat endpoint**

```typescript
// src/app/api/chat/route.ts
import { auth } from "@clerk/nextjs/server";
import {
  streamText,
  convertToModelMessages,
  type UIMessage,
} from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { db } from "@/lib/db";
import { users, clients, chatMessages } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { retrieveChunks } from "@/lib/ai/retrieve";
import { buildSystemPrompt } from "@/lib/ai/system-prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, clerkId))
    .limit(1);

  if (!user) {
    return new Response("User not found", { status: 401 });
  }

  const {
    messages,
    clientId,
  }: { messages: UIMessage[]; clientId?: string } = await req.json();

  const lastMessage = messages[messages.length - 1];
  if (!lastMessage || lastMessage.role !== "user") {
    return new Response("Invalid message", { status: 400 });
  }

  // Get the user's text from the last message
  const userText =
    lastMessage.parts
      ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join(" ") ?? "";

  // Retrieve relevant chunks
  const chunks = await retrieveChunks(userText, user.id, clientId);

  // Build system prompt
  let clientName: string | undefined;
  let clientSummary: string | undefined;

  if (clientId) {
    const [client] = await db
      .select()
      .from(clients)
      .where(eq(clients.id, clientId))
      .limit(1);

    if (client) {
      clientName = client.name;
      clientSummary = client.summary ?? undefined;
    }
  }

  const systemPrompt = buildSystemPrompt({
    lawyerName: user.name ?? "Counselor",
    firmName: user.firmName ?? "",
    clientName,
    clientSummary,
    chunks,
  });

  // Save user message
  await db.insert(chatMessages).values({
    userId: user.id,
    clientId: clientId ?? null,
    role: "user",
    content: userText,
  });

  // Stream response
  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
    onFinish: async ({ text }) => {
      // Save assistant message
      await db.insert(chatMessages).values({
        userId: user.id,
        clientId: clientId ?? null,
        role: "assistant",
        content: text,
      });
    },
  });

  return result.toUIMessageStreamResponse();
}
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "feat: add streaming chat API route with RAG context injection"
```

---

## Task 23: Chat UI

**Files:**
- Create: `src/app/(dashboard)/chat/page.tsx`, `src/components/chat/chat-interface.tsx`, `src/components/chat/message-list.tsx`, `src/components/chat/chat-input.tsx`

- [ ] **Step 1: Create message list component**

Renders a list of chat messages with role-based styling (user right-aligned, assistant left-aligned). Assistant messages rendered with markdown support (`react-markdown` already installed in Task 2).

- [ ] **Step 2: Create chat input component**

Textarea with submit button. Handles Enter to send (Shift+Enter for newline).

- [ ] **Step 3: Create chat interface component**

```typescript
// src/components/chat/chat-interface.tsx
"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import { useState } from "react";
import { MessageList } from "./message-list";
import { ChatInput } from "./chat-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trpc } from "@/lib/trpc/client";

export function ChatInterface() {
  const [clientId, setClientId] = useState<string | undefined>();
  const { data: clientsList } = trpc.clients.list.useQuery();

  const { messages, sendMessage, isLoading } = useChat({
    transport: new TextStreamChatTransport({
      api: "/api/chat",
      body: { clientId },
    }),
  });

  return (
    <div className="flex h-full flex-col">
      <div className="border-b p-4">
        <Select
          value={clientId ?? "all"}
          onValueChange={(v) => setClientId(v === "all" ? undefined : v)}
        >
          <SelectTrigger className="w-64">
            <SelectValue placeholder="All clients" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All clients</SelectItem>
            {clientsList?.map((client) => (
              <SelectItem key={client.id} value={client.id}>
                {client.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <MessageList messages={messages} isLoading={isLoading} />

      <ChatInput
        onSend={(text) => sendMessage({ text })}
        isLoading={isLoading}
      />
    </div>
  );
}
```

- [ ] **Step 4: Create chat page**

```typescript
// src/app/(dashboard)/chat/page.tsx
import { ChatInterface } from "@/components/chat/chat-interface";

export default function ChatPage() {
  return (
    <div className="h-[calc(100vh-7rem)]">
      <ChatInterface />
    </div>
  );
}
```

- [ ] **Step 5: Verify chat works end-to-end**

With valid env vars set (ANTHROPIC_API_KEY, VOYAGE_API_KEY, DATABASE_URL), upload a document, wait for processing, then ask a question about it in chat. Response should stream and reference the uploaded content.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add chat UI with client selector, streaming, and markdown rendering"
```

---

## Task 24: Railway Deployment Configs

**Files:**
- Create: `railway.toml`, `Procfile` (if needed)

- [ ] **Step 1: Create Railway config for Next.js app**

```toml
# railway.toml
[build]
builder = "nixpacks"

[deploy]
startCommand = "npm run start"
healthcheckPath = "/api/trpc"
healthcheckTimeout = 30
```

- [ ] **Step 2: Run database migrations**

Document the command to push schema to Neon:

```bash
npx drizzle-kit push
```

Or generate and apply migrations:

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

- [ ] **Step 3: Verify build succeeds**

```bash
npm run build
```

Expected: Build completes with no TypeScript errors.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Railway deployment config and verify production build"
```

---

## Task 25: Final Integration Verification

- [ ] **Step 1: Verify all env vars documented**

Confirm `.env.example` has all required variables matching the spec.

- [ ] **Step 2: Run the full build**

```bash
npm run build
```

Fix any TypeScript errors.

- [ ] **Step 3: Test end-to-end flow locally**

1. Start dev server: `npm run dev`
2. Sign in via Clerk
3. Create a client
4. Create a matter for the client
5. Upload a PDF document tagged to the client
6. Verify document appears in client detail with "processing" status
7. After Inngest processes it: verify summary, entities, and "completed" status
8. Go to Chat, select the client, ask a question about the document
9. Verify streaming response with relevant context

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final integration verification and cleanup"
```
