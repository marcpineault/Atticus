import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { trustTransactions, clients, matters } from "@/lib/db/schema";
import { eq, and, desc, sql } from "drizzle-orm";
import { z } from "zod";

export const trustRouter = createTRPCRouter({
  // List all trust transactions for the user
  list: protectedProcedure
    .input(z.object({
      clientId: z.string().uuid().optional(),
      matterId: z.string().uuid().optional(),
    }).optional())
    .query(async ({ ctx, input }) => {
      const conditions = [eq(trustTransactions.userId, ctx.userId)];
      if (input?.clientId) conditions.push(eq(trustTransactions.clientId, input.clientId));
      if (input?.matterId) conditions.push(eq(trustTransactions.matterId, input.matterId));

      return ctx.db
        .select({
          id: trustTransactions.id,
          type: trustTransactions.type,
          amount: trustTransactions.amount,
          description: trustTransactions.description,
          transactionDate: trustTransactions.transactionDate,
          referenceNumber: trustTransactions.referenceNumber,
          createdAt: trustTransactions.createdAt,
          clientId: trustTransactions.clientId,
          matterId: trustTransactions.matterId,
          clientName: clients.name,
          matterTitle: matters.title,
        })
        .from(trustTransactions)
        .leftJoin(clients, eq(trustTransactions.clientId, clients.id))
        .leftJoin(matters, eq(trustTransactions.matterId, matters.id))
        .where(and(...conditions))
        .orderBy(desc(trustTransactions.transactionDate), desc(trustTransactions.createdAt));
    }),

  // Per-client trust balances
  balances: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select({
        clientId: trustTransactions.clientId,
        clientName: clients.name,
        balance: sql<number>`sum(${trustTransactions.amount})::int`,
        lastActivity: sql<string>`max(${trustTransactions.transactionDate})`,
      })
      .from(trustTransactions)
      .leftJoin(clients, eq(trustTransactions.clientId, clients.id))
      .where(eq(trustTransactions.userId, ctx.userId))
      .groupBy(trustTransactions.clientId, clients.name)
      .orderBy(clients.name);
  }),

  // Total trust balance
  totalBalance: protectedProcedure.query(async ({ ctx }) => {
    const [row] = await ctx.db
      .select({ total: sql<number>`coalesce(sum(${trustTransactions.amount}), 0)::int` })
      .from(trustTransactions)
      .where(eq(trustTransactions.userId, ctx.userId));
    return { total: row?.total ?? 0 };
  }),

  create: protectedProcedure
    .input(z.object({
      clientId: z.string().uuid(),
      matterId: z.string().uuid().optional(),
      type: z.enum(["receipt", "disbursement", "transfer"]),
      amount: z.number().int().positive(), // always positive — sign applied by type
      description: z.string().min(1).max(500),
      transactionDate: z.string().optional(), // ISO date string
      referenceNumber: z.string().max(100).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      // Receipts add to trust, disbursements remove from trust
      const signedAmount = input.type === "receipt" ? input.amount : -input.amount;
      const [tx] = await ctx.db
        .insert(trustTransactions)
        .values({
          userId: ctx.userId,
          clientId: input.clientId,
          matterId: input.matterId,
          type: input.type,
          amount: signedAmount,
          description: input.description,
          transactionDate: input.transactionDate ? new Date(input.transactionDate) : new Date(),
          referenceNumber: input.referenceNumber,
        })
        .returning();
      return tx!;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(trustTransactions)
        .where(and(eq(trustTransactions.id, input.id), eq(trustTransactions.userId, ctx.userId)));
    }),
});
