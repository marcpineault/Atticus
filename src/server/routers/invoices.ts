import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { z } from "zod";
import { invoices, clients, matters, documents, users, timeEntries } from "@/lib/db/schema";
import { eq, and, desc, isNull, inArray } from "drizzle-orm";
import { resend, FROM_EMAIL } from "@/lib/email/client";

export const invoicesRouter = createTRPCRouter({
  list: protectedProcedure
    .input(z.object({ clientId: z.string().uuid().optional() }).optional())
    .query(async ({ ctx, input }) => {
      const conditions = [eq(invoices.userId, ctx.userId)];
      if (input?.clientId) conditions.push(eq(invoices.clientId, input.clientId));

      return ctx.db
        .select({
          id: invoices.id,
          invoiceNumber: invoices.invoiceNumber,
          status: invoices.status,
          issueDate: invoices.issueDate,
          dueDate: invoices.dueDate,
          totalAmount: invoices.totalAmount,
          sentAt: invoices.sentAt,
          paidAt: invoices.paidAt,
          createdAt: invoices.createdAt,
          clientName: clients.name,
          clientEmail: clients.email,
          clientId: invoices.clientId,
          matterId: invoices.matterId,
          matterTitle: matters.title,
        })
        .from(invoices)
        .leftJoin(clients, eq(invoices.clientId, clients.id))
        .leftJoin(matters, eq(invoices.matterId, matters.id))
        .where(and(...conditions))
        .orderBy(desc(invoices.createdAt));
    }),

  get: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [invoice] = await ctx.db
        .select({
          id: invoices.id,
          invoiceNumber: invoices.invoiceNumber,
          status: invoices.status,
          issueDate: invoices.issueDate,
          dueDate: invoices.dueDate,
          lineItems: invoices.lineItems,
          totalAmount: invoices.totalAmount,
          hstRate: invoices.hstRate,
          hstAmount: invoices.hstAmount,
          notes: invoices.notes,
          sentAt: invoices.sentAt,
          paidAt: invoices.paidAt,
          createdAt: invoices.createdAt,
          clientId: invoices.clientId,
          matterId: invoices.matterId,
          clientName: clients.name,
          clientEmail: clients.email,
          clientCompany: clients.company,
          matterTitle: matters.title,
        })
        .from(invoices)
        .leftJoin(clients, eq(invoices.clientId, clients.id))
        .leftJoin(matters, eq(invoices.matterId, matters.id))
        .where(and(eq(invoices.id, input.id), eq(invoices.userId, ctx.userId)))
        .limit(1);
      return invoice ?? null;
    }),

  // Generate an invoice from billable hours for a client
  generate: protectedProcedure
    .input(z.object({
      clientId: z.string().uuid(),
      matterId: z.string().uuid().optional(),
      dueDate: z.string().optional(), // ISO date string
      notes: z.string().optional(),
      hstRate: z.number().int().min(0).max(30).optional(), // 0 or 13 for Ontario HST
    }))
    .mutation(async ({ ctx, input }) => {
      // Get user settings for hourly rate and firm name
      const [user] = await ctx.db
        .select({ hourlyRate: users.hourlyRate, firmName: users.firmName, name: users.name })
        .from(users)
        .where(eq(users.id, ctx.userId))
        .limit(1);

      // Use matter-specific rate if set, otherwise fall back to user default
      let hourlyRate = user?.hourlyRate ?? 400;
      if (input.matterId) {
        const [matter] = await ctx.db
          .select({ hourlyRate: matters.hourlyRate })
          .from(matters)
          .where(and(eq(matters.id, input.matterId), eq(matters.userId, ctx.userId)))
          .limit(1);
        if (matter?.hourlyRate != null) hourlyRate = matter.hourlyRate;
      }

      // Get billable minutes from documents for this client/matter
      const docsQuery = ctx.db
        .select({
          id: documents.id,
          title: documents.title,
          type: documents.type,
          billableMinutes: documents.billableMinutes,
          createdAt: documents.createdAt,
          matterId: documents.matterId,
        })
        .from(documents)
        .where(
          and(
            eq(documents.userId, ctx.userId),
            eq(documents.clientId, input.clientId),
            eq(documents.status, "completed"),
            ...(input.matterId ? [eq(documents.matterId, input.matterId)] : []),
          )
        );

      const docs = await docsQuery;

      // Also get unbilled manual time entries for this client/matter
      const timeEntriesQuery = ctx.db
        .select({
          id: timeEntries.id,
          description: timeEntries.description,
          minutes: timeEntries.minutes,
          entryDate: timeEntries.entryDate,
        })
        .from(timeEntries)
        .where(
          and(
            eq(timeEntries.userId, ctx.userId),
            eq(timeEntries.clientId, input.clientId),
            isNull(timeEntries.billedAt), // only unbilled entries
            ...(input.matterId ? [eq(timeEntries.matterId, input.matterId)] : []),
          )
        );
      const manualEntries = await timeEntriesQuery;

      // Build line items from documents with billable time
      const docLineItems = docs
        .filter(d => (d.billableMinutes ?? 0) > 0)
        .map(d => {
          const hours = (d.billableMinutes ?? 0) / 60;
          const amount = Math.round(hours * hourlyRate * 100); // cents
          return {
            description: d.title ?? `${d.type} — ${new Date(d.createdAt).toLocaleDateString("en-CA")}`,
            hours: Math.round(hours * 100) / 100,
            rate: hourlyRate,
            amount,
          };
        });

      // Add manual time entry line items
      const manualLineItems = manualEntries
        .filter(e => e.minutes > 0)
        .map(e => {
          const hours = e.minutes / 60;
          const amount = Math.round(hours * hourlyRate * 100);
          return {
            description: e.description,
            hours: Math.round(hours * 100) / 100,
            rate: hourlyRate,
            amount,
          };
        });

      const lineItems = [...docLineItems, ...manualLineItems];
      const subtotal = lineItems.reduce((s, l) => s + l.amount, 0);
      const hstRate = input.hstRate ?? 0;
      const hstAmount = Math.round(subtotal * hstRate / 100);
      const totalAmount = subtotal + hstAmount;

      // Generate invoice number: INV-YYYY-XXXX (timestamp+random suffix avoids race conditions)
      const invoiceNumber = `INV-${new Date().getFullYear()}-${Date.now().toString(36).toUpperCase().slice(-4)}${Math.random().toString(36).slice(-2).toUpperCase()}`;

      const [invoice] = await ctx.db
        .insert(invoices)
        .values({
          userId: ctx.userId,
          clientId: input.clientId,
          matterId: input.matterId,
          invoiceNumber,
          lineItems,
          totalAmount,
          hstRate,
          hstAmount,
          dueDate: input.dueDate ? new Date(input.dueDate) : undefined,
          notes: input.notes,
        })
        .returning();

      // Mark included time entries as billed
      if (manualEntries.length > 0) {
        await ctx.db
          .update(timeEntries)
          .set({ billedAt: new Date() })
          .where(inArray(timeEntries.id, manualEntries.map(e => e.id)));
      }

      // Zero out billableMinutes on included documents so they aren't double-billed
      const billedDocIds = docs.filter(d => (d.billableMinutes ?? 0) > 0).map(d => d.id);
      if (billedDocIds.length > 0) {
        await ctx.db
          .update(documents)
          .set({ billableMinutes: 0 })
          .where(inArray(documents.id, billedDocIds));
      }

      return invoice!;
    }),

  updateStatus: protectedProcedure
    .input(z.object({
      id: z.string().uuid(),
      status: z.enum(["draft", "sent", "paid", "overdue"]),
    }))
    .mutation(async ({ ctx, input }) => {
      const updates: Record<string, unknown> = { status: input.status };
      if (input.status === "paid") updates.paidAt = new Date();

      await ctx.db
        .update(invoices)
        .set(updates)
        .where(and(eq(invoices.id, input.id), eq(invoices.userId, ctx.userId)));
    }),

  send: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [invoice] = await ctx.db
        .select({
          id: invoices.id,
          invoiceNumber: invoices.invoiceNumber,
          lineItems: invoices.lineItems,
          totalAmount: invoices.totalAmount,
          hstRate: invoices.hstRate,
          hstAmount: invoices.hstAmount,
          dueDate: invoices.dueDate,
          notes: invoices.notes,
          issueDate: invoices.issueDate,
          clientName: clients.name,
          clientEmail: clients.email,
          clientCompany: clients.company,
          matterTitle: matters.title,
          userFirmName: users.firmName,
          userName: users.name,
        })
        .from(invoices)
        .leftJoin(clients, eq(invoices.clientId, clients.id))
        .leftJoin(matters, eq(invoices.matterId, matters.id))
        .leftJoin(users, eq(invoices.userId, users.id))
        .where(and(eq(invoices.id, input.id), eq(invoices.userId, ctx.userId)))
        .limit(1);

      if (!invoice) throw new Error("Invoice not found");
      if (!invoice.clientEmail) throw new Error("Client has no email address");

      const hstRate = invoice.hstRate ?? 0;
      const hstAmount = invoice.hstAmount ?? 0;
      const subtotal = invoice.totalAmount - hstAmount;
      const total = invoice.totalAmount / 100;
      const firm = invoice.userFirmName ?? invoice.userName ?? "Your Lawyer";

      const lineItemRows = (invoice.lineItems as Array<{ description: string; hours: number; rate: number; amount: number }>)
        .map(l => `
          <tr>
            <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; font-size: 13px;">${l.description}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; font-size: 13px; text-align: right;">${l.hours} hrs</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; font-size: 13px; text-align: right;">$${l.rate}/hr</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; font-size: 13px; text-align: right; font-weight: 500;">$${(l.amount / 100).toFixed(2)}</td>
          </tr>`).join("");

      const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="max-width:680px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
  <div style="background:#0f172a;padding:24px 32px;display:flex;justify-content:space-between;align-items:center;">
    <div>
      <div style="color:#f8fafc;font-size:20px;font-weight:700;">${firm}</div>
      <div style="color:#94a3b8;font-size:13px;margin-top:2px;">Invoice</div>
    </div>
    <div style="text-align:right;">
      <div style="color:#f8fafc;font-size:16px;font-weight:600;">${invoice.invoiceNumber}</div>
      <div style="color:#94a3b8;font-size:12px;margin-top:2px;">${new Date(invoice.issueDate).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</div>
    </div>
  </div>
  <div style="padding:28px 32px 0;">
    <div style="display:flex;justify-content:space-between;margin-bottom:24px;">
      <div>
        <p style="margin:0;font-size:12px;color:#94a3b8;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Bill To</p>
        <p style="margin:6px 0 0;font-size:14px;font-weight:600;color:#111;">${invoice.clientName ?? "Client"}</p>
        ${invoice.clientCompany ? `<p style="margin:2px 0 0;font-size:13px;color:#374151;">${invoice.clientCompany}</p>` : ""}
        ${invoice.matterTitle ? `<p style="margin:8px 0 0;font-size:12px;color:#64748b;">Re: ${invoice.matterTitle}</p>` : ""}
      </div>
      ${invoice.dueDate ? `
      <div style="text-align:right;">
        <p style="margin:0;font-size:12px;color:#94a3b8;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Due Date</p>
        <p style="margin:6px 0 0;font-size:14px;font-weight:600;color:#dc2626;">${new Date(invoice.dueDate).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>` : ""}
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;">
      <thead>
        <tr style="background:#f8fafc;">
          <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Description</th>
          <th style="padding:10px 12px;text-align:right;font-size:11px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Hours</th>
          <th style="padding:10px 12px;text-align:right;font-size:11px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Rate</th>
          <th style="padding:10px 12px;text-align:right;font-size:11px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Amount</th>
        </tr>
      </thead>
      <tbody>${lineItemRows}</tbody>
      <tfoot>
        ${hstRate > 0 ? `
        <tr style="background:#f8fafc;">
          <td colspan="3" style="padding:8px 12px;text-align:right;font-size:13px;color:#374151;">Subtotal</td>
          <td style="padding:8px 12px;text-align:right;font-size:13px;color:#374151;">$${(subtotal / 100).toFixed(2)}</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td colspan="3" style="padding:8px 12px;text-align:right;font-size:13px;color:#374151;">HST (${hstRate}%)</td>
          <td style="padding:8px 12px;text-align:right;font-size:13px;color:#374151;">$${(hstAmount / 100).toFixed(2)}</td>
        </tr>` : ""}
        <tr style="background:#f0f4f8;">
          <td colspan="3" style="padding:12px;text-align:right;font-size:14px;font-weight:600;color:#111;">Total (CAD)</td>
          <td style="padding:12px;text-align:right;font-size:16px;font-weight:700;color:#0f172a;">$${total.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>
    ${invoice.notes ? `<div style="margin:20px 0;padding:14px;background:#f8fafc;border-radius:6px;"><p style="margin:0;font-size:13px;color:#374151;">${invoice.notes}</p></div>` : ""}
  </div>
  <div style="padding:24px 32px 32px;">
    <p style="margin:0;font-size:13px;color:#64748b;">
      Please remit payment by the due date. For questions regarding this invoice, contact ${firm}.
    </p>
  </div>
  <div style="border-top:1px solid #f0f0f0;padding:16px 32px;background:#f9fafb;">
    <p style="margin:0;font-size:12px;color:#9ca3af;">Sent via Atticus · AI Practice Intelligence</p>
  </div>
</div>
</body>
</html>`;

      await resend.emails.send({
        from: FROM_EMAIL,
        to: invoice.clientEmail,
        subject: `Invoice ${invoice.invoiceNumber} from ${firm} — $${total.toFixed(2)} CAD`,
        html,
      });

      await ctx.db
        .update(invoices)
        .set({ status: "sent", sentAt: new Date() })
        .where(eq(invoices.id, input.id));

      return { sent: true };
    }),

  updateLineItems: protectedProcedure
    .input(z.object({
      id: z.string().uuid(),
      lineItems: z.array(z.object({
        description: z.string().min(1),
        hours: z.number().min(0),
        rate: z.number().min(0),
        amount: z.number().min(0),
      })),
    }))
    .mutation(async ({ ctx, input }) => {
      // Fetch existing HST rate to preserve it
      const [existing] = await ctx.db
        .select({ hstRate: invoices.hstRate })
        .from(invoices)
        .where(and(eq(invoices.id, input.id), eq(invoices.userId, ctx.userId)))
        .limit(1);
      const hstRate = existing?.hstRate ?? 0;
      const subtotal = input.lineItems.reduce((s, l) => s + l.amount, 0);
      const hstAmount = Math.round(subtotal * hstRate / 100);
      const totalAmount = subtotal + hstAmount;
      await ctx.db
        .update(invoices)
        .set({ lineItems: input.lineItems, totalAmount, hstAmount })
        .where(and(eq(invoices.id, input.id), eq(invoices.userId, ctx.userId), eq(invoices.status, "draft")));
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(invoices)
        .where(and(eq(invoices.id, input.id), eq(invoices.userId, ctx.userId)));
    }),
});
