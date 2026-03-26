import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { TRPCError } from "@trpc/server";
import { clients, matters, entities } from "@/lib/db/schema";
import { eq, and, ilike, or, inArray } from "drizzle-orm";
import { z } from "zod";
import { anthropic } from "@/lib/ai/anthropic";

export const conflictsRouter = createTRPCRouter({
  check: protectedProcedure
    .input(z.object({ query: z.string().min(2).max(200) }))
    .query(async ({ ctx, input }) => {
      const q = `%${input.query.trim()}%`;

      const [matchedClients, matchedMatters, matchedPeople] = await Promise.all([
        // Search existing clients by name or company
        ctx.db
          .select({
            id: clients.id,
            name: clients.name,
            company: clients.company,
            email: clients.email,
          })
          .from(clients)
          .where(
            and(
              eq(clients.userId, ctx.userId),
              or(ilike(clients.name, q), ilike(clients.company, q))
            )
          )
          .limit(20),

        // Search matter titles
        ctx.db
          .select({
            id: matters.id,
            title: matters.title,
            status: matters.status,
            clientId: matters.clientId,
          })
          .from(matters)
          .where(
            and(
              eq(matters.userId, ctx.userId),
              ilike(matters.title, q)
            )
          )
          .limit(20),

        // Search person entities extracted from documents
        ctx.db
          .select({
            id: entities.id,
            value: entities.value,
            context: entities.context,
            matterId: entities.matterId,
            clientId: entities.clientId,
            documentId: entities.documentId,
          })
          .from(entities)
          .where(
            and(
              eq(entities.userId, ctx.userId),
              eq(entities.type, "person"),
              ilike(entities.value, q)
            )
          )
          .limit(30),
      ]);

      // Enrich matched clients with their matter count
      const clientIds = matchedClients.map((c) => c.id);
      let clientMatters: Array<{ clientId: string; title: string; id: string; status: string }> = [];
      if (clientIds.length > 0) {
        clientMatters = await ctx.db
          .select({ clientId: matters.clientId, title: matters.title, id: matters.id, status: matters.status })
          .from(matters)
          .where(
            and(
              eq(matters.userId, ctx.userId),
              inArray(matters.clientId, clientIds)
            )
          ) as typeof clientMatters;
      }

      return {
        query: input.query,
        clients: matchedClients.map((c) => ({
          ...c,
          matters: clientMatters.filter((m) => m.clientId === c.id),
        })),
        matters: matchedMatters,
        people: matchedPeople,
        total: matchedClients.length + matchedMatters.length + matchedPeople.length,
      };
    }),

  // Claude AI conflict analysis — runs on demand after initial text search
  aiAnalyze: protectedProcedure
    .input(z.object({
      prospectiveName: z.string().min(2).max(200),
      matchedClients: z.array(z.object({
        name: z.string(),
        company: z.string().nullable(),
        matters: z.array(z.object({ title: z.string(), status: z.string() })),
      })),
      matchedMatters: z.array(z.object({ title: z.string(), status: z.string() })),
      matchedPeople: z.array(z.object({ value: z.string(), context: z.string().nullable() })),
    }))
    .mutation(async ({ input }) => {
      const contextLines: string[] = [];

      if (input.matchedClients.length > 0) {
        contextLines.push("EXISTING CLIENTS:");
        input.matchedClients.forEach(c => {
          contextLines.push(`- ${c.name}${c.company ? ` (${c.company})` : ""} — matters: ${c.matters.map(m => m.title).join(", ") || "none"}`);
        });
      }
      if (input.matchedMatters.length > 0) {
        contextLines.push("MATCHING MATTERS:");
        input.matchedMatters.forEach(m => contextLines.push(`- ${m.title} (${m.status})`));
      }
      if (input.matchedPeople.length > 0) {
        contextLines.push("PARTIES IN DOCUMENTS:");
        input.matchedPeople.slice(0, 10).forEach(p => contextLines.push(`- ${p.value}${p.context ? `: ${p.context.slice(0, 80)}` : ""}`));
      }

      const message = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: `You are a conflict of interest advisor for an Ontario law firm. Analyze potential conflicts concisely.
Return JSON: {"severity": "high"|"medium"|"low"|"none", "summary": "1-2 sentence plain-language assessment", "reasons": ["reason1", "reason2"]}
Be conservative — flag anything that could be an issue. High = clear conflict, Medium = possible conflict worth investigating, Low = minimal concern.`,
        messages: [{
          role: "user",
          content: `Prospective client/party: "${input.prospectiveName}"\n\nSearch matches in this firm's records:\n${contextLines.join("\n")}\n\nAssess the conflict risk.`,
        }],
      });

      const text = message.content[0];
      if (!text || text.type !== "text") throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Unexpected AI response" });

      try {
        const jsonMatch = text.text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "No JSON in AI response" });
        const result = JSON.parse(jsonMatch[0]) as {
          severity: "high" | "medium" | "low" | "none";
          summary: string;
          reasons: string[];
        };
        return result;
      } catch {
        return { severity: "medium" as const, summary: text.text.slice(0, 200), reasons: [] };
      }
    }),
});
