import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { documents, entities, matters, clients, invoices } from "@/lib/db/schema";
import { eq, and, lt, gte, inArray, isNotNull, desc, asc } from "drizzle-orm";

export const todayRouter = createTRPCRouter({
  getBriefing: protectedProcedure.query(async ({ ctx }) => {
    const now = new Date();

    const sevenDaysLater = new Date(now);
    sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);

    const sevenDaysAgo = new Date(now);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const thirtyDaysAgo = new Date(now);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Overdue action items and deadlines
    const overdueItems = await ctx.db
      .select({
        id: entities.id,
        type: entities.type,
        value: entities.value,
        dueDate: entities.dueDate,
        matterTitle: matters.title,
        clientName: clients.name,
      })
      .from(entities)
      .leftJoin(matters, eq(entities.matterId, matters.id))
      .leftJoin(clients, eq(entities.clientId, clients.id))
      .where(
        and(
          eq(entities.userId, ctx.userId),
          eq(entities.resolved, false),
          inArray(entities.type, ["action_item", "deadline"]),
          lt(entities.dueDate, now),
          isNotNull(entities.dueDate),
        )
      )
      .orderBy(asc(entities.dueDate))
      .limit(10);

    // Upcoming deadlines (next 7 days)
    const upcomingItems = await ctx.db
      .select({
        id: entities.id,
        type: entities.type,
        value: entities.value,
        dueDate: entities.dueDate,
        matterTitle: matters.title,
        clientName: clients.name,
      })
      .from(entities)
      .leftJoin(matters, eq(entities.matterId, matters.id))
      .leftJoin(clients, eq(entities.clientId, clients.id))
      .where(
        and(
          eq(entities.userId, ctx.userId),
          eq(entities.resolved, false),
          inArray(entities.type, ["action_item", "deadline"]),
          gte(entities.dueDate, now),
          lt(entities.dueDate, sevenDaysLater),
          isNotNull(entities.dueDate),
        )
      )
      .orderBy(asc(entities.dueDate))
      .limit(10);

    // Overdue invoices
    const overdueInvoices = await ctx.db
      .select({
        id: invoices.id,
        invoiceNumber: invoices.invoiceNumber,
        totalAmount: invoices.totalAmount,
        dueDate: invoices.dueDate,
        clientName: clients.name,
      })
      .from(invoices)
      .leftJoin(clients, eq(invoices.clientId, clients.id))
      .where(and(eq(invoices.userId, ctx.userId), eq(invoices.status, "overdue")))
      .limit(5);

    // Quiet matters: active with no document in last 30 days
    const activeMatters = await ctx.db
      .select({
        id: matters.id,
        title: matters.title,
        clientName: clients.name,
      })
      .from(matters)
      .leftJoin(clients, eq(matters.clientId, clients.id))
      .where(and(eq(matters.userId, ctx.userId), eq(matters.status, "active")));

    const recentDocMatters = await ctx.db
      .selectDistinct({ matterId: documents.matterId })
      .from(documents)
      .where(
        and(
          eq(documents.userId, ctx.userId),
          gte(documents.createdAt, thirtyDaysAgo),
          isNotNull(documents.matterId),
        )
      );

    const recentMatterIds = new Set(recentDocMatters.map((d) => d.matterId));
    const quietMatters = activeMatters
      .filter((m) => !recentMatterIds.has(m.id))
      .slice(0, 5);

    // Recent recordings (last 7 days, completed)
    const recentRecordings = await ctx.db
      .select({
        id: documents.id,
        title: documents.title,
        type: documents.type,
        status: documents.status,
        createdAt: documents.createdAt,
        generatedMemo: documents.generatedMemo,
        generatedTaskList: documents.generatedTaskList,
        generatedFollowUpEmail: documents.generatedFollowUpEmail,
        matterTitle: matters.title,
        clientName: clients.name,
      })
      .from(documents)
      .leftJoin(matters, eq(documents.matterId, matters.id))
      .leftJoin(clients, eq(documents.clientId, clients.id))
      .where(
        and(
          eq(documents.userId, ctx.userId),
          inArray(documents.type, ["voice_note", "meeting"]),
          eq(documents.status, "completed"),
          gte(documents.createdAt, sevenDaysAgo),
        )
      )
      .orderBy(desc(documents.createdAt))
      .limit(10);

    return { overdueItems, upcomingItems, overdueInvoices, quietMatters, recentRecordings };
  }),
});
