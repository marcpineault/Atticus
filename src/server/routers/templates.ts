import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { z } from "zod";
import { draftTemplates } from "@/lib/db/schema";
import { eq, and, desc } from "drizzle-orm";

export const templatesRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(draftTemplates)
      .where(eq(draftTemplates.userId, ctx.userId))
      .orderBy(desc(draftTemplates.createdAt));
  }),

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1).max(100),
      draftType: z.string().min(1),
      tone: z.string().min(1),
      instructions: z.string().min(1).max(2000),
    }))
    .mutation(async ({ ctx, input }) => {
      const [template] = await ctx.db
        .insert(draftTemplates)
        .values({ ...input, userId: ctx.userId })
        .returning();
      return template!;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(draftTemplates)
        .where(and(eq(draftTemplates.id, input.id), eq(draftTemplates.userId, ctx.userId)));
    }),
});
