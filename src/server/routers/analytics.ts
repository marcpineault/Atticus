import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { documents, entities, clients, matters, timeEntries, invoices } from "@/lib/db/schema";
import { eq, and, gte, inArray, sql, count, lt } from "drizzle-orm";

export const analyticsRouter = createTRPCRouter({
  overview: protectedProcedure.query(async ({ ctx }) => {
    const twelveWeeksAgo = new Date();
    twelveWeeksAgo.setDate(twelveWeeksAgo.getDate() - 84);

    // Documents per week (last 12 weeks)
    const docsPerWeek = await ctx.db
      .select({
        week: sql<string>`to_char(date_trunc('week', ${documents.createdAt}), 'YYYY-MM-DD')`,
        count: count(),
      })
      .from(documents)
      .where(and(
        eq(documents.userId, ctx.userId),
        gte(documents.createdAt, twelveWeeksAgo),
      ))
      .groupBy(sql`date_trunc('week', ${documents.createdAt})`)
      .orderBy(sql`date_trunc('week', ${documents.createdAt})`);

    // Billable hours per client (from both documents and manual time entries)
    const billableByClient = await ctx.db
      .select({
        clientId: clients.id,
        clientName: clients.name,
        docMinutes: sql<number>`coalesce(sum(${documents.billableMinutes}), 0)::int`,
      })
      .from(clients)
      .leftJoin(documents, and(
        eq(documents.clientId, clients.id),
        eq(documents.userId, ctx.userId),
        eq(documents.status, "completed"),
      ))
      .where(eq(clients.userId, ctx.userId))
      .groupBy(clients.id, clients.name)
      .orderBy(sql`sum(${documents.billableMinutes}) desc nulls last`)
      .limit(8);

    // Manual time entries per client
    const manualByClient = await ctx.db
      .select({
        clientId: timeEntries.clientId,
        manualMinutes: sql<number>`sum(${timeEntries.minutes})::int`,
      })
      .from(timeEntries)
      .where(eq(timeEntries.userId, ctx.userId))
      .groupBy(timeEntries.clientId);

    const manualMap = new Map(manualByClient.map(m => [m.clientId, m.manualMinutes]));

    const hoursPerClient = billableByClient
      .map(c => ({
        clientId: c.clientId,
        clientName: c.clientName ?? "Unknown",
        hours: Math.round(((c.docMinutes ?? 0) + (manualMap.get(c.clientId) ?? 0)) / 6) / 10,
      }))
      .filter(c => c.hours > 0);

    // Deadline completion rate (last 30 days created)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const deadlineStats = await ctx.db
      .select({
        resolved: entities.resolved,
        count: count(),
      })
      .from(entities)
      .where(and(
        eq(entities.userId, ctx.userId),
        inArray(entities.type, ["deadline", "action_item"]),
        gte(entities.createdAt, thirtyDaysAgo),
      ))
      .groupBy(entities.resolved);

    const resolvedCount = deadlineStats.find(d => d.resolved === true)?.count ?? 0;
    const totalDeadlines = deadlineStats.reduce((s, d) => s + d.count, 0);
    const completionRate = totalDeadlines > 0 ? Math.round((resolvedCount / totalDeadlines) * 100) : 0;

    // Matter status breakdown
    const matterStats = await ctx.db
      .select({
        status: matters.status,
        count: count(),
      })
      .from(matters)
      .where(eq(matters.userId, ctx.userId))
      .groupBy(matters.status);

    // Time entries per week (last 12 weeks)
    const timePerWeek = await ctx.db
      .select({
        week: sql<string>`to_char(date_trunc('week', ${timeEntries.entryDate}), 'YYYY-MM-DD')`,
        minutes: sql<number>`sum(${timeEntries.minutes})::int`,
      })
      .from(timeEntries)
      .where(and(
        eq(timeEntries.userId, ctx.userId),
        gte(timeEntries.entryDate, twelveWeeksAgo),
      ))
      .groupBy(sql`date_trunc('week', ${timeEntries.entryDate})`)
      .orderBy(sql`date_trunc('week', ${timeEntries.entryDate})`);

    // Build a 12-week scaffold and merge
    const weeks: string[] = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i * 7 - d.getDay()); // start of week
      weeks.push(d.toISOString().slice(0, 10));
    }

    const docMap = new Map(docsPerWeek.map(d => [d.week, d.count]));
    const timeMap = new Map(timePerWeek.map(t => [t.week, t.minutes]));

    const weeklyData = weeks.map(week => ({
      week: week.slice(5), // "MM-DD"
      docs: docMap.get(week) ?? 0,
      hours: Math.round(((timeMap.get(week) ?? 0) / 60) * 10) / 10,
    }));

    // Revenue stats from invoices
    const revenueStats = await ctx.db
      .select({
        status: invoices.status,
        total: sql<number>`coalesce(sum(${invoices.totalAmount}), 0)::int`,
        invoiceCount: count(),
      })
      .from(invoices)
      .where(eq(invoices.userId, ctx.userId))
      .groupBy(invoices.status);

    const totalInvoiced = revenueStats
      .filter(r => r.status !== "draft")
      .reduce((s, r) => s + r.total, 0);
    const totalPaid = revenueStats.find(r => r.status === "paid")?.total ?? 0;
    const totalOutstanding = revenueStats
      .filter(r => r.status === "sent" || r.status === "overdue")
      .reduce((s, r) => s + r.total, 0);
    const totalOverdue = revenueStats.find(r => r.status === "overdue")?.total ?? 0;

    // Monthly revenue (last 12 months) — paid invoices only
    const twelveMonthsAgo = new Date();
    twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 11);
    twelveMonthsAgo.setDate(1);

    const monthlyRevenue = await ctx.db
      .select({
        month: sql<string>`to_char(date_trunc('month', ${invoices.paidAt}), 'YYYY-MM')`,
        total: sql<number>`sum(${invoices.totalAmount})::int`,
      })
      .from(invoices)
      .where(and(
        eq(invoices.userId, ctx.userId),
        eq(invoices.status, "paid"),
        gte(invoices.paidAt, twelveMonthsAgo),
      ))
      .groupBy(sql`date_trunc('month', ${invoices.paidAt})`)
      .orderBy(sql`date_trunc('month', ${invoices.paidAt})`);

    // Build 12-month scaffold
    const monthLabels: string[] = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      monthLabels.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
    }
    const revenueMap = new Map(monthlyRevenue.map(m => [m.month, m.total]));
    const monthlyRevenueData = monthLabels.map(m => ({
      month: m.slice(5), // "MM"
      revenue: Math.round((revenueMap.get(m) ?? 0) / 100 * 100) / 100,
    }));

    return {
      weeklyData,
      hoursPerClient,
      completionRate,
      resolvedCount,
      totalDeadlines,
      matterStats: matterStats.map(m => ({ status: m.status, count: m.count })),
      revenue: {
        totalInvoiced: Math.round(totalInvoiced / 100 * 100) / 100,
        totalPaid: Math.round(totalPaid / 100 * 100) / 100,
        totalOutstanding: Math.round(totalOutstanding / 100 * 100) / 100,
        totalOverdue: Math.round(totalOverdue / 100 * 100) / 100,
        monthlyData: monthlyRevenueData,
      },
    };
  }),

  currentMonth: protectedProcedure.query(async ({ ctx }) => {
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    const [invoiceStats, unbilledRow, newClients] = await Promise.all([
      ctx.db
        .select({
          status: invoices.status,
          total: sql<number>`coalesce(sum(${invoices.totalAmount}), 0)::int`,
          invoiceCount: count(),
        })
        .from(invoices)
        .where(and(
          eq(invoices.userId, ctx.userId),
          gte(invoices.issueDate, monthStart),
          lt(invoices.issueDate, nextMonthStart),
        ))
        .groupBy(invoices.status),

      ctx.db.execute(sql`
        SELECT (
          coalesce((SELECT sum(minutes) FROM time_entries WHERE user_id = ${ctx.userId} AND billed_at IS NULL), 0)
          + coalesce((SELECT sum(billable_minutes) FROM documents WHERE user_id = ${ctx.userId} AND status = 'completed' AND billable_minutes > 0), 0)
        )::int AS total
      `).then(r => [{ total: (r.rows[0] as { total: number })?.total ?? 0 }]),

      ctx.db
        .select({ count: count() })
        .from(clients)
        .where(and(eq(clients.userId, ctx.userId), gte(clients.createdAt, monthStart))),
    ]);

    const invoicedThisMonth = invoiceStats.reduce((s, r) => s + r.total, 0);
    const collectedThisMonth = invoiceStats.find(r => r.status === "paid")?.total ?? 0;
    const invoiceCount = invoiceStats.reduce((s, r) => s + r.invoiceCount, 0);
    const unbilledMinutes = unbilledRow[0]?.total ?? 0;
    const newClientsCount = newClients[0]?.count ?? 0;

    return {
      invoicedThisMonth: invoicedThisMonth / 100,
      collectedThisMonth: collectedThisMonth / 100,
      invoiceCount,
      unbilledHours: unbilledMinutes / 60,
      newClientsCount,
      month: now.toLocaleDateString("en-CA", { month: "long", year: "numeric" }),
    };
  }),
});
