import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { matters, documents, entities, timeEntries, trustTransactions, clients, users } from "@/lib/db/schema";
import { eq, and, sql, desc } from "drizzle-orm";
import { randomBytes } from "crypto";
import { z } from "zod";
import { resend, FROM_EMAIL } from "@/lib/email/client";
import { APP_URL } from "@/lib/stripe/client";
import Anthropic from "@anthropic-ai/sdk";

export const MATTER_TEMPLATES = [
  {
    id: "real_estate_purchase",
    name: "Residential Real Estate Purchase",
    description: "Acting for purchaser in a residential property transaction.",
    actionItems: [
      "Review and negotiate Agreement of Purchase and Sale",
      "Order title search and review",
      "Review zoning, taxes, and utilities",
      "Review status certificate (if condo)",
      "Prepare closing documents",
      "Conduct title insurance review",
      "Transfer funds on closing day",
      "Register title transfer",
      "Report to client post-closing",
    ],
  },
  {
    id: "real_estate_sale",
    name: "Residential Real Estate Sale",
    description: "Acting for vendor in a residential property sale.",
    actionItems: [
      "Review Agreement of Purchase and Sale",
      "Prepare vendor disclosure statement",
      "Discharge any existing mortgages",
      "Prepare transfer documents",
      "Confirm closing adjustments",
      "Release keys on closing day",
      "Report to client post-closing",
    ],
  },
  {
    id: "will_poa",
    name: "Will & Powers of Attorney",
    description: "Preparation of last will and testament and POA documents.",
    actionItems: [
      "Initial client intake and estate planning discussion",
      "Draft will (beneficiaries, executors, guardians)",
      "Draft continuing power of attorney for property",
      "Draft power of attorney for personal care",
      "Client review and signing appointment",
      "Execute and witness documents",
      "Provide copies to client and store originals",
    ],
  },
  {
    id: "corporate_incorporation",
    name: "Corporate Incorporation",
    description: "Incorporation of a new business entity.",
    actionItems: [
      "NUANS name search and approval",
      "Prepare articles of incorporation",
      "File with Corporations Canada or Ontario",
      "Prepare organizational resolutions",
      "Prepare by-laws",
      "Issue share certificates",
      "Register for HST/payroll with CRA",
      "Report to client with corporate minute book",
    ],
  },
  {
    id: "employment_agreement",
    name: "Employment Agreement Review",
    description: "Review or drafting of employment contract.",
    actionItems: [
      "Review employment agreement terms",
      "Identify non-compete and non-solicitation clauses",
      "Assess termination provisions (ESA compliance)",
      "Review benefits, compensation, and vacation",
      "Advise client on risks and negotiation points",
      "Draft or redline revisions",
      "Confirm final signed agreement received",
    ],
  },
  {
    id: "civil_litigation",
    name: "Civil Litigation",
    description: "Civil claim or dispute resolution matter.",
    actionItems: [
      "Issue Statement of Claim",
      "Serve Statement of Claim on defendant(s)",
      "File proof of service",
      "Review and respond to Statement of Defence",
      "Conduct examinations for discovery",
      "Exchange documentary disclosure",
      "Mediation / settlement conference",
      "Pre-trial conference",
      "Trial preparation",
    ],
  },
  {
    id: "separation",
    name: "Separation Agreement",
    description: "Negotiation and drafting of separation agreement.",
    actionItems: [
      "Initial consultation and intake",
      "Exchange financial disclosure (Form 13)",
      "Draft separation agreement — parenting terms",
      "Draft separation agreement — property division",
      "Draft separation agreement — support provisions",
      "Client review and negotiation",
      "Independent legal advice confirmation (other party)",
      "Execute separation agreement",
      "File with court (if required)",
    ],
  },
  {
    id: "estate_administration",
    name: "Estate Administration",
    description: "Administering a deceased person's estate as estate trustee.",
    actionItems: [
      "Obtain death certificate and will",
      "Identify beneficiaries and next of kin",
      "Apply for Certificate of Appointment of Estate Trustee (probate)",
      "Notify financial institutions and government agencies",
      "Prepare estate inventory and valuation",
      "File terminal tax return and estate tax return",
      "Pay debts, liabilities, and estate expenses",
      "Pass accounts and obtain beneficiary releases",
      "Distribute estate assets to beneficiaries",
      "Close estate and report to beneficiaries",
    ],
  },
];

const anthropic = new Anthropic();

const createMatterSchema = z.object({
  clientId: z.string().uuid(),
  title: z.string().min(1),
  description: z.string().optional(),
  hourlyRate: z.number().int().min(0).max(10000).optional(),
});

const updateMatterSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  status: z.enum(["active", "closed", "pending"]).optional(),
  hourlyRate: z.number().int().min(0).max(10000).nullable().optional(),
  notes: z.string().max(10000).nullable().optional(),
});

export const mattersRouter = createTRPCRouter({
  list: protectedProcedure
    .input(z.object({ clientId: z.string().uuid().optional() }).optional())
    .query(async ({ ctx, input }) => {
      const conditions = [eq(matters.userId, ctx.userId)];
      if (input?.clientId) {
        conditions.push(eq(matters.clientId, input.clientId));
      }
      return ctx.db
        .select()
        .from(matters)
        .where(and(...conditions))
        .orderBy(matters.createdAt);
    }),

  listWithStats: protectedProcedure
    .input(z.object({ clientId: z.string().uuid().optional() }).optional())
    .query(async ({ ctx, input }) => {
      const conditions = [eq(matters.userId, ctx.userId)];
      if (input?.clientId) conditions.push(eq(matters.clientId, input.clientId));
      return ctx.db
        .select({
          id: matters.id,
          clientId: matters.clientId,
          userId: matters.userId,
          title: matters.title,
          description: matters.description,
          status: matters.status,
          createdAt: matters.createdAt,
          updatedAt: matters.updatedAt,
          documentCount: sql<number>`(select count(*) from documents where documents.matter_id = ${matters.id} and documents.user_id = ${ctx.userId})::int`,
          openDeadlineCount: sql<number>`(
            select count(*) from entities e
            left join documents d on e.document_id = d.id
            where (d.matter_id = ${matters.id} or e.matter_id = ${matters.id})
            and e.user_id = ${ctx.userId}
            and e.type in ('deadline', 'action_item')
            and e.resolved = false
          )::int`,
          totalActionItems: sql<number>`(
            select count(*) from entities e
            left join documents d on e.document_id = d.id
            where (d.matter_id = ${matters.id} or e.matter_id = ${matters.id})
            and e.user_id = ${ctx.userId}
            and e.type in ('deadline', 'action_item')
          )::int`,
          resolvedActionItems: sql<number>`(
            select count(*) from entities e
            left join documents d on e.document_id = d.id
            where (d.matter_id = ${matters.id} or e.matter_id = ${matters.id})
            and e.user_id = ${ctx.userId}
            and e.type in ('deadline', 'action_item')
            and e.resolved = true
          )::int`,
        })
        .from(matters)
        .where(and(...conditions))
        .orderBy(matters.createdAt);
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const rows = await ctx.db
        .select({
          id: matters.id,
          clientId: matters.clientId,
          userId: matters.userId,
          title: matters.title,
          description: matters.description,
          summary: matters.summary,
          status: matters.status,
          hourlyRate: matters.hourlyRate,
          notes: matters.notes,
          portalToken: matters.portalToken,
          createdAt: matters.createdAt,
          updatedAt: matters.updatedAt,
          totalBillableMinutes: sql<number>`(
            coalesce((
              select sum(d.billable_minutes) from documents d
              where d.matter_id = ${matters.id}
              and d.user_id = ${ctx.userId}
              and d.status = 'completed'
            ), 0)
            + coalesce((
              select sum(te.minutes) from time_entries te
              where te.matter_id = ${matters.id}
              and te.user_id = ${ctx.userId}
            ), 0)
          )::int`,
          documentCount: sql<number>`(
            select count(*) from documents d
            where d.matter_id = ${matters.id}
            and d.user_id = ${ctx.userId}
          )::int`,
        })
        .from(matters)
        .where(and(eq(matters.id, input.id), eq(matters.userId, ctx.userId)))
        .limit(1);
      const matter = rows[0];
      if (!matter) throw new Error("Matter not found");
      return matter;
    }),

  create: protectedProcedure
    .input(createMatterSchema)
    .mutation(async ({ ctx, input }) => {
      const [matter] = await ctx.db
        .insert(matters)
        .values({ userId: ctx.userId, ...input })
        .returning();
      return matter!;
    }),

  createWithTemplate: protectedProcedure
    .input(z.object({
      clientId: z.string().uuid(),
      title: z.string().min(1),
      description: z.string().optional(),
      hourlyRate: z.number().int().min(0).max(10000).optional(),
      templateId: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { templateId, ...matterInput } = input;
      const template = MATTER_TEMPLATES.find(t => t.id === templateId);

      const [matter] = await ctx.db
        .insert(matters)
        .values({ userId: ctx.userId, ...matterInput })
        .returning();
      if (!matter) throw new Error("Failed to create matter");

      if (template) {
        await ctx.db.insert(entities).values(
          template.actionItems.map(item => ({
            userId: ctx.userId,
            clientId: input.clientId,
            matterId: matter.id,
            type: "action_item" as const,
            value: item,
          }))
        );
      }
      return matter;
    }),

  listTemplates: protectedProcedure
    .query(() => MATTER_TEMPLATES.map(t => ({ id: t.id, name: t.name, description: t.description }))),

  update: protectedProcedure
    .input(updateMatterSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const [matter] = await ctx.db
        .update(matters)
        .set({ ...data, updatedAt: new Date() })
        .where(and(eq(matters.id, id), eq(matters.userId, ctx.userId)))
        .returning();
      return matter!;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(matters)
        .where(and(eq(matters.id, input.id), eq(matters.userId, ctx.userId)));
    }),

  generatePortalToken: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [existing] = await ctx.db
        .select({ portalToken: matters.portalToken })
        .from(matters)
        .where(and(eq(matters.id, input.id), eq(matters.userId, ctx.userId)))
        .limit(1);
      if (!existing) throw new Error("Matter not found");
      if (existing.portalToken) return { token: existing.portalToken };

      const token = randomBytes(16).toString("hex");
      await ctx.db
        .update(matters)
        .set({ portalToken: token })
        .where(eq(matters.id, input.id));
      return { token };
    }),

  revokePortalToken: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(matters)
        .set({ portalToken: null })
        .where(and(eq(matters.id, input.id), eq(matters.userId, ctx.userId)));
    }),

  generateBrief: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [matter] = await ctx.db.select().from(matters)
        .where(and(eq(matters.id, input.id), eq(matters.userId, ctx.userId))).limit(1);
      if (!matter) throw new Error("Matter not found");

      const matterDocs = await ctx.db
        .select({ title: documents.title, summary: documents.summary, type: documents.type, createdAt: documents.createdAt })
        .from(documents)
        .where(and(eq(documents.matterId, input.id), eq(documents.userId, ctx.userId), eq(documents.status, "completed")));

      if (matterDocs.length === 0) throw new Error("No processed documents for this matter");

      const docContext = matterDocs
        .map(d => `[${d.type.toUpperCase()} — ${new Date(d.createdAt).toLocaleDateString()}] ${d.title ?? "Untitled"}: ${d.summary ?? "No summary"}`)
        .join("\n\n");

      const message = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: "You are a legal practice assistant. Write a concise matter brief (3-5 sentences) for a lawyer. Cover: the nature of the legal matter, current status or stage, key dates or deadlines, and outstanding tasks. Be professional and direct.",
        messages: [{ role: "user", content: `Matter: ${matter.title}${matter.description ? `\nDescription: ${matter.description}` : ""}\n\nDocuments:\n${docContext}` }],
      });

      const content = message.content[0];
      if (!content || content.type !== "text") throw new Error("Unexpected response");

      const [updated] = await ctx.db.update(matters)
        .set({ summary: content.text, updatedAt: new Date() })
        .where(eq(matters.id, input.id))
        .returning();
      return updated!;
    }),

  timeline: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const matterId = input.id;

      const [docs, timeRows, trustRows, entityRows] = await Promise.all([
        ctx.db
          .select({
            id: documents.id,
            title: documents.title,
            type: documents.type,
            status: documents.status,
            createdAt: documents.createdAt,
          })
          .from(documents)
          .where(and(eq(documents.matterId, matterId), eq(documents.userId, ctx.userId)))
          .orderBy(desc(documents.createdAt))
          .limit(50),

        ctx.db
          .select({
            id: timeEntries.id,
            description: timeEntries.description,
            minutes: timeEntries.minutes,
            entryDate: timeEntries.entryDate,
          })
          .from(timeEntries)
          .where(and(eq(timeEntries.matterId, matterId), eq(timeEntries.userId, ctx.userId)))
          .orderBy(desc(timeEntries.entryDate))
          .limit(50),

        ctx.db
          .select({
            id: trustTransactions.id,
            description: trustTransactions.description,
            amount: trustTransactions.amount,
            type: trustTransactions.type,
            transactionDate: trustTransactions.transactionDate,
          })
          .from(trustTransactions)
          .where(and(eq(trustTransactions.matterId, matterId), eq(trustTransactions.userId, ctx.userId)))
          .orderBy(desc(trustTransactions.transactionDate))
          .limit(50),

        ctx.db
          .select({
            id: entities.id,
            type: entities.type,
            value: entities.value,
            dueDate: entities.dueDate,
            resolved: entities.resolved,
            createdAt: entities.createdAt,
          })
          .from(entities)
          .leftJoin(documents, eq(entities.documentId, documents.id))
          .where(and(
            sql`coalesce(${documents.matterId}, ${entities.matterId}) = ${matterId}`,
            eq(entities.userId, ctx.userId),
            sql`${entities.type} in ('deadline', 'action_item')`
          ))
          .orderBy(desc(entities.createdAt))
          .limit(50),
      ]);

      type Event =
        | { kind: "document"; id: string; title: string | null; docType: string; status: string; date: Date }
        | { kind: "time"; id: string; description: string; minutes: number; date: Date }
        | { kind: "trust"; id: string; description: string; amount: number; trustType: string; date: Date }
        | { kind: "entity"; id: string; type: string; value: string; dueDate: Date | null; resolved: boolean; date: Date };

      const events: Event[] = [
        ...docs.map((d) => ({ kind: "document" as const, id: d.id, title: d.title, docType: d.type, status: d.status, date: new Date(d.createdAt) })),
        ...timeRows.map((t) => ({ kind: "time" as const, id: t.id, description: t.description, minutes: t.minutes, date: new Date(t.entryDate) })),
        ...trustRows.map((t) => ({ kind: "trust" as const, id: t.id, description: t.description, amount: t.amount, trustType: t.type, date: new Date(t.transactionDate) })),
        ...entityRows.map((e) => ({ kind: "entity" as const, id: e.id, type: e.type, value: e.value, dueDate: e.dueDate ? new Date(e.dueDate) : null, resolved: e.resolved ?? false, date: new Date(e.createdAt) })),
      ];

      events.sort((a, b) => b.date.getTime() - a.date.getTime());
      return events;
    }),

  notifyClient: protectedProcedure
    .input(z.object({ id: z.string().uuid(), message: z.string().max(500).optional() }))
    .mutation(async ({ ctx, input }) => {
      const [matter] = await ctx.db
        .select({ id: matters.id, title: matters.title, portalToken: matters.portalToken, clientId: matters.clientId })
        .from(matters)
        .where(and(eq(matters.id, input.id), eq(matters.userId, ctx.userId)))
        .limit(1);

      if (!matter) throw new Error("Matter not found");
      if (!matter.portalToken) throw new Error("No portal link. Generate a portal link first.");
      if (!matter.clientId) throw new Error("No client linked to this matter.");

      const [client] = await ctx.db
        .select({ name: clients.name, email: clients.email })
        .from(clients)
        .where(eq(clients.id, matter.clientId))
        .limit(1);

      if (!client?.email) throw new Error("Client has no email address on file.");

      const [lawyer] = await ctx.db
        .select({ name: users.name, firmName: users.firmName })
        .from(users)
        .where(eq(users.id, ctx.userId))
        .limit(1);

      const lawyerName = lawyer?.name ?? "Your lawyer";
      const firmName = lawyer?.firmName ?? "";
      const portalUrl = `${APP_URL}/portal/${matter.portalToken}`;
      const clientFirst = client.name.split(" ")[0] ?? client.name;

      const bodyNote = input.message?.trim()
        ? `<p style="margin:0 0 16px;font-size:15px;color:#374151;">${input.message.trim().replace(/\n/g, "<br>")}</p>`
        : "";

      const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="max-width:560px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
  <div style="background:#0f172a;padding:20px 28px;">
    <div style="color:#f8fafc;font-size:18px;font-weight:700;">Atticus</div>
    <div style="color:#94a3b8;font-size:12px;margin-top:2px;">Matter update from ${firmName || lawyerName}</div>
  </div>
  <div style="padding:24px 28px;">
    <p style="margin:0 0 12px;font-size:15px;color:#374151;">Hi ${clientFirst},</p>
    ${bodyNote}
    <p style="margin:0 0 20px;font-size:14px;color:#6b7280;">You can view the current status of your matter <strong>${matter.title}</strong> using the link below. Your portal shows deadlines, recent activity, and any outstanding items.</p>
    <a href="${portalUrl}" style="display:inline-block;background:#0f172a;color:#fff;text-decoration:none;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:500;">View Matter Portal →</a>
    <p style="margin:20px 0 0;font-size:12px;color:#9ca3af;">This link is private — please don't share it. Sent by ${lawyerName}${firmName ? ` · ${firmName}` : ""}.</p>
  </div>
</div>
</body></html>`;

      await resend.emails.send({
        from: FROM_EMAIL,
        to: client.email,
        subject: `Update on your matter: ${matter.title}`,
        html,
        text: `Hi ${clientFirst},\n\n${input.message?.trim() ? input.message.trim() + "\n\n" : ""}View your matter portal here: ${portalUrl}\n\n— ${lawyerName}${firmName ? `, ${firmName}` : ""}`,
      });

      return { sent: true, to: client.email };
    }),
});
