import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { chatMessages } from "@/lib/db/schema";
import { eq, and, desc } from "drizzle-orm";
import { z } from "zod";

export const chatRouter = createTRPCRouter({
  history: protectedProcedure
    .input(z.object({
      clientId: z.string().uuid().optional(),
      matterId: z.string().uuid().optional(),
      limit: z.number().min(1).max(100).default(50),
    }).optional())
    .query(async ({ ctx, input }) => {
      const conditions = [eq(chatMessages.userId, ctx.userId)];
      if (input?.clientId) conditions.push(eq(chatMessages.clientId, input.clientId));
      if (input?.matterId) conditions.push(eq(chatMessages.matterId, input.matterId));
      const messages = await ctx.db.select().from(chatMessages)
        .where(and(...conditions))
        .orderBy(desc(chatMessages.createdAt))
        .limit(input?.limit ?? 50);
      return messages.reverse();
    }),

  clearHistory: protectedProcedure
    .input(z.object({
      clientId: z.string().uuid().optional(),
      matterId: z.string().uuid().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const conditions = [eq(chatMessages.userId, ctx.userId)];
      if (input.clientId) conditions.push(eq(chatMessages.clientId, input.clientId));
      if (input.matterId) conditions.push(eq(chatMessages.matterId, input.matterId));
      await ctx.db.delete(chatMessages).where(and(...conditions));
    }),
});
