import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { clients, documents, entities } from "@/lib/db/schema";
import { eq, and, sql, inArray } from "drizzle-orm";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { anthropic } from "@/lib/ai/anthropic";

const createClientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
});

const updateClientSchema = createClientSchema.partial().extend({
  id: z.string().uuid(),
  notes: z.string().max(10000).nullable().optional(),
});

export const clientsRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select({
        id: clients.id,
        name: clients.name,
        email: clients.email,
        phone: clients.phone,
        company: clients.company,
        summary: clients.summary,
        createdAt: clients.createdAt,
        updatedAt: clients.updatedAt,
      })
      .from(clients)
      .where(eq(clients.userId, ctx.userId))
      .orderBy(clients.name);
  }),

  listWithStats: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select({
        id: clients.id,
        name: clients.name,
        email: clients.email,
        phone: clients.phone,
        company: clients.company,
        summary: clients.summary,
        createdAt: clients.createdAt,
        documentCount: sql<number>`(select count(*) from documents where documents.client_id = ${clients.id} and documents.user_id = ${ctx.userId})::int`,
        matterCount: sql<number>`(select count(*) from matters where matters.client_id = ${clients.id} and matters.user_id = ${ctx.userId})::int`,
        totalBillableMinutes: sql<number>`(
          coalesce((select sum(billable_minutes) from documents where documents.client_id = ${clients.id} and documents.user_id = ${ctx.userId} and documents.status = 'completed'), 0)
          + coalesce((select sum(minutes) from time_entries where time_entries.client_id = ${clients.id} and time_entries.user_id = ${ctx.userId}), 0)
        )::int`,
        openDeadlineCount: sql<number>`(
          select count(*) from entities e
          where (e.client_id = ${clients.id} or e.document_id in (select id from documents where client_id = ${clients.id}))
          and e.user_id = ${ctx.userId}
          and e.type in ('deadline', 'action_item')
          and e.resolved = false
        )::int`,
        activeMatters: sql<number>`(select count(*) from matters where matters.client_id = ${clients.id} and matters.user_id = ${ctx.userId} and matters.status = 'active')::int`,
      })
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
        .where(and(eq(clients.id, input.id), eq(clients.userId, ctx.userId)))
        .limit(1);
      if (!client) throw new TRPCError({ code: "NOT_FOUND", message: "Client not found" });
      return client;
    }),

  create: protectedProcedure
    .input(createClientSchema)
    .mutation(async ({ ctx, input }) => {
      const [client] = await ctx.db
        .insert(clients)
        .values({ userId: ctx.userId, ...input })
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
        .where(and(eq(clients.id, id), eq(clients.userId, ctx.userId)))
        .returning();
      return client!;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(clients)
        .where(and(eq(clients.id, input.id), eq(clients.userId, ctx.userId)));
    }),

  generateBrief: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [client] = await ctx.db
        .select()
        .from(clients)
        .where(and(eq(clients.id, input.id), eq(clients.userId, ctx.userId)))
        .limit(1);
      if (!client) throw new TRPCError({ code: "NOT_FOUND", message: "Client not found" });

      const clientDocs = await ctx.db
        .select({ title: documents.title, summary: documents.summary, type: documents.type, createdAt: documents.createdAt })
        .from(documents)
        .where(and(eq(documents.clientId, input.id), eq(documents.userId, ctx.userId), eq(documents.status, "completed")));

      if (clientDocs.length === 0) throw new TRPCError({ code: "BAD_REQUEST", message: "No processed documents for this client" });

      const docContext = clientDocs
        .map(d => `[${d.type.toUpperCase()} — ${new Date(d.createdAt).toLocaleDateString()}] ${d.title ?? "Untitled"}: ${d.summary ?? "No summary"}`)
        .join("\n\n");

      const message = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: "You are a legal practice assistant. Write a concise client brief (3-5 sentences) for a lawyer. Cover: who the client is, the nature of their legal matters, key dates or deadlines, and outstanding action items. Be professional and direct.",
        messages: [{ role: "user", content: `Client: ${client.name}${client.company ? ` (${client.company})` : ""}\n\nDocuments:\n${docContext}` }],
      });

      const content = message.content[0];
      if (!content || content.type !== "text") throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Unexpected AI response" });

      const [updated] = await ctx.db
        .update(clients)
        .set({ summary: content.text, updatedAt: new Date() })
        .where(and(eq(clients.id, input.id), eq(clients.userId, ctx.userId)))
        .returning();
      return updated!;
    }),

  checkConflict: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      company: z.string().optional(),
      // optionally exclude a client id (when editing existing client)
      excludeClientId: z.string().uuid().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      // Gather all existing client names + person entities
      const existingClients = await ctx.db.select({
        id: clients.id,
        name: clients.name,
        company: clients.company,
      }).from(clients).where(eq(clients.userId, ctx.userId));

      const existingPersons = await ctx.db.select({
        value: entities.value,
        documentId: entities.documentId,
      }).from(entities).where(
        and(eq(entities.userId, ctx.userId), inArray(entities.type, ["person"]))
      ).limit(200);

      // Filter out the client being edited
      const filteredClients = input.excludeClientId
        ? existingClients.filter(c => c.id !== input.excludeClientId)
        : existingClients;

      if (filteredClients.length === 0 && existingPersons.length === 0) {
        return { hasConflict: false, conflicts: [], summary: "No existing clients to check against." };
      }

      const clientList = filteredClients
        .map(c => `- ${c.name}${c.company ? ` (${c.company})` : ""}`)
        .join("\n");

      const personList = Array.from(new Set(existingPersons.map(p => p.value)))
        .slice(0, 100)
        .map(v => `- ${v}`)
        .join("\n");

      const message = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 600,
        system: `You are a legal conflict-of-interest checker for a law firm.
Given a new prospective client name and the firm's existing clients and parties, identify any potential conflicts of interest.
A conflict exists when:
1. The prospective client is the same person/entity as an existing client (same name, nickname, company alias)
2. The prospective client appears as an adverse party in an existing matter (listed as a person entity extracted from documents)
3. The prospective client has a close corporate relationship with an existing adverse party

Respond with JSON only in this format:
{
  "hasConflict": boolean,
  "conflicts": [{ "name": "conflicting party name", "reason": "why this is a potential conflict", "severity": "high|medium|low" }],
  "summary": "1-2 sentence plain-language summary of findings"
}`,
        messages: [{
          role: "user",
          content: `New prospective client: ${input.name}${input.company ? ` (${input.company})` : ""}

Existing clients:
${clientList || "(none)"}

Parties appearing in existing matter documents:
${personList || "(none)"}`,
        }],
      });

      const content = message.content[0];
      if (!content || content.type !== "text") throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Unexpected AI response" });

      try {
        const parsed = JSON.parse(content.text) as {
          hasConflict: boolean;
          conflicts: Array<{ name: string; reason: string; severity: string }>;
          summary: string;
        };
        return parsed;
      } catch {
        return { hasConflict: false, conflicts: [], summary: content.text };
      }
    }),
});
