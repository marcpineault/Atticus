import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { z } from "zod";
import { timeEntries, clients, matters } from "@/lib/db/schema";
import { eq, and, desc, sql } from "drizzle-orm";

export const timeEntriesRouter = createTRPCRouter({
  list: protectedProcedure
    .input(z.object({
      matterId: z.string().uuid().optional(),
      clientId: z.string().uuid().optional(),
    }).optional())
    .query(async ({ ctx, input }) => {
      const conditions = [eq(timeEntries.userId, ctx.userId)];
      if (input?.matterId) conditions.push(eq(timeEntries.matterId, input.matterId));
      if (input?.clientId) conditions.push(eq(timeEntries.clientId, input.clientId));

      return ctx.db
        .select({
          id: timeEntries.id,
          description: timeEntries.description,
          minutes: timeEntries.minutes,
          entryDate: timeEntries.entryDate,
          billedAt: timeEntries.billedAt,
          createdAt: timeEntries.createdAt,
          matterId: timeEntries.matterId,
          clientId: timeEntries.clientId,
          clientName: clients.name,
          matterTitle: matters.title,
        })
        .from(timeEntries)
        .leftJoin(clients, eq(timeEntries.clientId, clients.id))
        .leftJoin(matters, eq(timeEntries.matterId, matters.id))
        .where(and(...conditions))
        .orderBy(desc(timeEntries.entryDate));
    }),

  totalByMatter: protectedProcedure
    .input(z.object({ matterId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [row] = await ctx.db
        .select({ total: sql<number>`coalesce(sum(${timeEntries.minutes}), 0)::int` })
        .from(timeEntries)
        .where(and(eq(timeEntries.userId, ctx.userId), eq(timeEntries.matterId, input.matterId)));
      return { totalMinutes: row?.total ?? 0 };
    }),

  create: protectedProcedure
    .input(z.object({
      description: z.string().min(1).max(500),
      minutes: z.number().int().min(1).max(1440),
      matterId: z.string().uuid().optional(),
      clientId: z.string().uuid().optional(),
      entryDate: z.string().optional(), // ISO date
    }))
    .mutation(async ({ ctx, input }) => {
      const [entry] = await ctx.db
        .insert(timeEntries)
        .values({
          userId: ctx.userId,
          description: input.description,
          minutes: input.minutes,
          matterId: input.matterId ?? null,
          clientId: input.clientId ?? null,
          entryDate: input.entryDate ? new Date(input.entryDate) : new Date(),
        })
        .returning();
      return entry!;
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string().uuid(),
      description: z.string().min(1).max(500).optional(),
      minutes: z.number().int().min(1).max(1440).optional(),
      entryDate: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, entryDate, ...rest } = input;
      const [entry] = await ctx.db
        .update(timeEntries)
        .set({
          ...rest,
          ...(entryDate ? { entryDate: new Date(entryDate) } : {}),
        })
        .where(and(eq(timeEntries.id, id), eq(timeEntries.userId, ctx.userId)))
        .returning();
      return entry!;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(timeEntries)
        .where(and(eq(timeEntries.id, input.id), eq(timeEntries.userId, ctx.userId)));
    }),
});
