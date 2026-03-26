import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { prospects, clients, matters, documents } from "@/lib/db/schema";
import { eq, and, desc } from "drizzle-orm";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { anthropic } from "@/lib/ai/anthropic";

const stageValues = ["lead", "consultation_booked", "consultation_done", "proposal_sent", "won", "lost"] as const;
const sourceValues = ["website", "referral", "social_media", "cold_call", "networking", "other", "lso_directory"] as const;

export const prospectsRouter = createTRPCRouter({
  list: protectedProcedure
    .input(z.object({
      stage: z.enum(stageValues).optional(),
    }).optional())
    .query(async ({ ctx, input }) => {
      const conditions = [eq(prospects.userId, ctx.userId)];
      if (input?.stage) conditions.push(eq(prospects.stage, input.stage));
      return ctx.db
        .select()
        .from(prospects)
        .where(and(...conditions))
        .orderBy(desc(prospects.updatedAt));
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [prospect] = await ctx.db
        .select()
        .from(prospects)
        .where(and(eq(prospects.id, input.id), eq(prospects.userId, ctx.userId)))
        .limit(1);
      if (!prospect) throw new TRPCError({ code: "NOT_FOUND", message: "Prospect not found" });
      return prospect;
    }),

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      email: z.string().email().optional(),
      phone: z.string().optional(),
      company: z.string().optional(),
      practiceArea: z.string().optional(),
      source: z.enum(sourceValues).default("other"),
      estimatedValue: z.number().int().min(0).optional(),
      notes: z.string().optional(),
      consultationDate: z.string().optional(),
      nextFollowUp: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const [prospect] = await ctx.db.insert(prospects).values({
        userId: ctx.userId,
        name: input.name,
        email: input.email,
        phone: input.phone,
        company: input.company,
        practiceArea: input.practiceArea,
        source: input.source,
        estimatedValue: input.estimatedValue,
        notes: input.notes,
        consultationDate: input.consultationDate ? new Date(input.consultationDate) : undefined,
        nextFollowUp: input.nextFollowUp ? new Date(input.nextFollowUp) : undefined,
      }).returning();
      return prospect;
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string().uuid(),
      name: z.string().min(1).optional(),
      email: z.string().email().nullable().optional(),
      phone: z.string().nullable().optional(),
      company: z.string().nullable().optional(),
      practiceArea: z.string().nullable().optional(),
      source: z.enum(sourceValues).optional(),
      stage: z.enum(stageValues).optional(),
      estimatedValue: z.number().int().min(0).nullable().optional(),
      notes: z.string().nullable().optional(),
      consultationDate: z.string().nullable().optional(),
      consultationNotes: z.string().nullable().optional(),
      lostReason: z.string().nullable().optional(),
      nextFollowUp: z.string().nullable().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, consultationDate, nextFollowUp, ...rest } = input;
      const [updated] = await ctx.db.update(prospects)
        .set({
          ...rest,
          consultationDate: consultationDate === null ? null : consultationDate ? new Date(consultationDate) : undefined,
          nextFollowUp: nextFollowUp === null ? null : nextFollowUp ? new Date(nextFollowUp) : undefined,
          updatedAt: new Date(),
        })
        .where(and(eq(prospects.id, id), eq(prospects.userId, ctx.userId)))
        .returning();
      if (!updated) throw new TRPCError({ code: "NOT_FOUND", message: "Prospect not found" });
      return updated;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(prospects)
        .where(and(eq(prospects.id, input.id), eq(prospects.userId, ctx.userId)));
    }),

  generateStrategy: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [prospect] = await ctx.db
        .select()
        .from(prospects)
        .where(and(eq(prospects.id, input.id), eq(prospects.userId, ctx.userId)))
        .limit(1);
      if (!prospect) throw new TRPCError({ code: "NOT_FOUND", message: "Prospect not found" });

      // Gather practice context — what types of cases does this lawyer handle?
      const recentDocs = await ctx.db
        .select({ title: documents.title, type: documents.type, summary: documents.summary })
        .from(documents)
        .where(eq(documents.userId, ctx.userId))
        .orderBy(desc(documents.createdAt))
        .limit(10);

      const existingClients = await ctx.db
        .select({ name: clients.name, company: clients.company, summary: clients.summary })
        .from(clients)
        .where(eq(clients.userId, ctx.userId))
        .limit(10);

      const practiceContext = [
        "EXISTING CLIENTS:",
        ...existingClients.map(c => `- ${c.name}${c.company ? ` (${c.company})` : ""}: ${c.summary ?? "No summary"}`),
        "",
        "RECENT DOCUMENTS:",
        ...recentDocs.map(d => `- [${d.type}] ${d.title}: ${d.summary ?? ""}`),
      ].join("\n");

      const prospectInfo = [
        `Name: ${prospect.name}`,
        prospect.company && `Company: ${prospect.company}`,
        prospect.practiceArea && `Practice Area: ${prospect.practiceArea}`,
        prospect.source && `Source: ${prospect.source}`,
        prospect.estimatedValue && `Estimated Value: $${prospect.estimatedValue.toLocaleString()}`,
        prospect.notes && `Notes: ${prospect.notes}`,
        prospect.consultationNotes && `Consultation Notes: ${prospect.consultationNotes}`,
      ].filter(Boolean).join("\n");

      const message = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1000,
        system: `You are a business development strategist for a solo/small firm Ontario lawyer. Given information about a prospective client and the lawyer's existing practice, generate a detailed win strategy.

Structure your response with these sections:
## Positioning
How to position the firm's expertise relative to the prospect's needs. Reference similar past work if applicable.

## Consultation Prep
5-7 key questions to ask during the initial consultation. Focus on understanding the prospect's situation, urgency, budget, and decision criteria.

## Objection Handling
3-4 likely objections (price, experience, timeline) and how to address each.

## Pricing Strategy
Suggested pricing approach (flat fee, hourly, retainer) with range based on the practice area and estimated complexity. Consider Ontario market rates.

## Follow-Up Plan
Specific next steps and timing after each interaction.

Be specific and actionable. Reference Ontario law where relevant. Keep total response under 800 words.`,
        messages: [{
          role: "user",
          content: `PROSPECT:\n${prospectInfo}\n\nLAWYER'S PRACTICE CONTEXT:\n${practiceContext}`,
        }],
      });

      const strategy = message.content[0]?.type === "text" ? message.content[0].text : "";

      const [updated] = await ctx.db.update(prospects)
        .set({ aiStrategy: strategy, updatedAt: new Date() })
        .where(and(eq(prospects.id, input.id), eq(prospects.userId, ctx.userId)))
        .returning();

      return updated;
    }),

  convertToClient: protectedProcedure
    .input(z.object({
      id: z.string().uuid(),
      matterTitle: z.string().min(1),
      matterDescription: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const [prospect] = await ctx.db
        .select()
        .from(prospects)
        .where(and(eq(prospects.id, input.id), eq(prospects.userId, ctx.userId)))
        .limit(1);
      if (!prospect) throw new TRPCError({ code: "NOT_FOUND", message: "Prospect not found" });

      // Create client
      const [client] = await ctx.db.insert(clients).values({
        userId: ctx.userId,
        name: prospect.name,
        email: prospect.email,
        phone: prospect.phone,
        company: prospect.company,
      }).returning();

      // Create matter
      await ctx.db.insert(matters).values({
        userId: ctx.userId,
        clientId: client!.id,
        title: input.matterTitle,
        description: input.matterDescription,
        status: "active",
      });

      // Update prospect
      await ctx.db.update(prospects)
        .set({
          stage: "won",
          convertedClientId: client!.id,
          updatedAt: new Date(),
        })
        .where(and(eq(prospects.id, input.id), eq(prospects.userId, ctx.userId)));

      return client;
    }),

  stats: protectedProcedure
    .query(async ({ ctx }) => {
      const all = await ctx.db
        .select({ stage: prospects.stage, estimatedValue: prospects.estimatedValue })
        .from(prospects)
        .where(eq(prospects.userId, ctx.userId));

      const byStage: Record<string, number> = {};
      let totalPipelineValue = 0;
      let wonValue = 0;
      let lostCount = 0;

      for (const p of all) {
        byStage[p.stage] = (byStage[p.stage] ?? 0) + 1;
        if (p.stage !== "lost" && p.stage !== "won") {
          totalPipelineValue += p.estimatedValue ?? 0;
        }
        if (p.stage === "won") wonValue += p.estimatedValue ?? 0;
        if (p.stage === "lost") lostCount++;
      }

      const total = all.length;
      const wonCount = byStage["won"] ?? 0;
      const conversionRate = total > 0 ? Math.round((wonCount / total) * 100) : 0;

      return { byStage, totalPipelineValue, wonValue, conversionRate, total, lostCount };
    }),
});
