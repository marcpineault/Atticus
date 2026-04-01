import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { clients, entities, invoices, matters, timeEntries } from "@/lib/db/schema";
import { and, eq, inArray } from "drizzle-orm";
import { z } from "zod";

function normalizeKey(value: string | null | undefined) {
  return (value ?? "").trim().toLowerCase().replace(/\s+/g, " ");
}

function clientCompositeKey(name: string, company?: string | null) {
  return `${normalizeKey(name)}::${normalizeKey(company)}`;
}

function matterCompositeKey(clientId: string, title: string) {
  return `${clientId}::${normalizeKey(title)}`;
}

function parseDate(value: string | undefined, fallback = new Date()) {
  if (!value?.trim()) return fallback;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
}

function dollarsToCents(value: number) {
  return Math.round(value * 100);
}

const matterImportRowSchema = z.object({
  clientName: z.string().min(1),
  clientEmail: z.string().email().optional(),
  clientPhone: z.string().optional(),
  clientCompany: z.string().optional(),
  matterTitle: z.string().min(1),
  matterDescription: z.string().optional(),
  matterStatus: z.enum(["active", "closed", "pending"]).optional(),
  openDate: z.string().optional(),
});

const deadlineImportRowSchema = z.object({
  clientName: z.string().min(1),
  matterTitle: z.string().optional(),
  type: z.enum(["deadline", "action_item"]),
  description: z.string().min(1),
  dueDate: z.string().optional(),
  context: z.string().optional(),
});

const timeImportRowSchema = z.object({
  clientName: z.string().min(1),
  matterTitle: z.string().optional(),
  description: z.string().min(1),
  minutes: z.number().int().min(1).max(1440),
  entryDate: z.string().optional(),
});

const invoiceImportRowSchema = z.object({
  clientName: z.string().min(1),
  matterTitle: z.string().optional(),
  invoiceNumber: z.string().min(1),
  amount: z.number().nonnegative(),
  status: z.enum(["draft", "sent", "paid", "overdue"]).optional(),
  issueDate: z.string().optional(),
  dueDate: z.string().optional(),
  notes: z.string().optional(),
});

async function ensureClientsForRows(
  ctx: { db: typeof import("@/lib/db").db; userId: string },
  rows: Array<{
    clientName: string;
    clientEmail?: string;
    clientPhone?: string;
    clientCompany?: string;
  }>
) {
  const uniqueRows = Array.from(
    new Map(
      rows.map((row) => [
        clientCompositeKey(row.clientName, row.clientCompany),
        {
          name: row.clientName.trim(),
          email: row.clientEmail?.trim() || undefined,
          phone: row.clientPhone?.trim() || undefined,
          company: row.clientCompany?.trim() || undefined,
        },
      ])
    ).values()
  );

  const existingClients = await ctx.db
    .select({
      id: clients.id,
      name: clients.name,
      company: clients.company,
      email: clients.email,
    })
    .from(clients)
    .where(eq(clients.userId, ctx.userId));

  const byKey = new Map(
    existingClients.map((client) => [
      clientCompositeKey(client.name, client.company),
      client,
    ])
  );
  const byEmail = new Map(
    existingClients
      .filter((client): client is { id: string; name: string; company: string | null; email: string } => Boolean(client.email))
      .map((client) => [normalizeKey(client.email), client])
  );

  const toInsert = uniqueRows.filter((row) => {
    const key = clientCompositeKey(row.name, row.company);
    const emailKey = row.email ? normalizeKey(row.email) : "";
    return !byKey.has(key) && (!emailKey || !byEmail.has(emailKey));
  });

  const inserted = toInsert.length > 0
    ? await ctx.db
        .insert(clients)
        .values(
          toInsert.map((row) => ({
            userId: ctx.userId,
            name: row.name,
            email: row.email ?? null,
            phone: row.phone ?? null,
            company: row.company ?? null,
          }))
        )
        .returning({
          id: clients.id,
          name: clients.name,
          company: clients.company,
          email: clients.email,
        })
    : [];

  const resolved = new Map(byKey);
  for (const client of inserted) {
    resolved.set(clientCompositeKey(client.name, client.company), client);
  }

  return {
    created: inserted.length,
    matched: uniqueRows.length - inserted.length,
    clientIdByKey: new Map(
      uniqueRows.flatMap((row) => {
        const key = clientCompositeKey(row.name, row.company);
        const emailKey = row.email ? normalizeKey(row.email) : "";
        const client = resolved.get(key) ?? (emailKey ? byEmail.get(emailKey) : undefined);
        return client ? [[key, client.id] as const] : [];
      })
    ),
  };
}

async function ensureMattersForRows(
  ctx: { db: typeof import("@/lib/db").db; userId: string },
  rows: Array<{
    clientId: string;
    matterTitle?: string;
    matterDescription?: string;
    matterStatus?: "active" | "closed" | "pending";
  }>
) {
  const uniqueRows = Array.from(
    new Map(
      rows
        .filter((row) => row.matterTitle?.trim())
        .map((row) => [
          matterCompositeKey(row.clientId, row.matterTitle!),
          {
            clientId: row.clientId,
            title: row.matterTitle!.trim(),
            description: row.matterDescription?.trim() || undefined,
            status: row.matterStatus ?? "active",
          },
        ])
    ).values()
  );

  if (uniqueRows.length === 0) {
    return {
      created: 0,
      matched: 0,
      matterIdByKey: new Map<string, string>(),
    };
  }

  const clientIds = Array.from(new Set(uniqueRows.map((row) => row.clientId)));
  const existingMatters = await ctx.db
    .select({
      id: matters.id,
      clientId: matters.clientId,
      title: matters.title,
    })
    .from(matters)
    .where(and(eq(matters.userId, ctx.userId), inArray(matters.clientId, clientIds)));

  const byKey = new Map(
    existingMatters.map((matter) => [
      matterCompositeKey(matter.clientId, matter.title),
      matter,
    ])
  );

  const toInsert = uniqueRows.filter((row) => !byKey.has(matterCompositeKey(row.clientId, row.title)));

  const inserted = toInsert.length > 0
    ? await ctx.db
        .insert(matters)
        .values(
          toInsert.map((row) => ({
            userId: ctx.userId,
            clientId: row.clientId,
            title: row.title,
            description: row.description ?? null,
            status: row.status,
          }))
        )
        .returning({
          id: matters.id,
          clientId: matters.clientId,
          title: matters.title,
        })
    : [];

  const resolved = new Map(byKey);
  for (const matter of inserted) {
    resolved.set(matterCompositeKey(matter.clientId, matter.title), matter);
  }

  return {
    created: inserted.length,
    matched: uniqueRows.length - inserted.length,
    matterIdByKey: new Map(
      uniqueRows.flatMap((row) => {
        const matter = resolved.get(matterCompositeKey(row.clientId, row.title));
        return matter ? [[matterCompositeKey(row.clientId, row.title), matter.id] as const] : [];
      })
    ),
  };
}

export const importsRouter = createTRPCRouter({
  importMatters: protectedProcedure
    .input(z.array(matterImportRowSchema).max(1000))
    .mutation(async ({ ctx, input }) => {
      const clientSetup = await ensureClientsForRows(
        { db: ctx.db, userId: ctx.userId },
        input
      );

      const matterSetup = await ensureMattersForRows(
        { db: ctx.db, userId: ctx.userId },
        input.flatMap((row) => {
          const clientId = clientSetup.clientIdByKey.get(
            clientCompositeKey(row.clientName, row.clientCompany)
          );
          return clientId
            ? [{
                clientId,
                matterTitle: row.matterTitle,
                matterDescription: row.matterDescription,
                matterStatus: row.matterStatus,
              }]
            : [];
        })
      );

      return {
        createdClients: clientSetup.created,
        matchedClients: clientSetup.matched,
        createdMatters: matterSetup.created,
        matchedMatters: matterSetup.matched,
        imported: input.length,
      };
    }),

  importDeadlines: protectedProcedure
    .input(z.array(deadlineImportRowSchema).max(1000))
    .mutation(async ({ ctx, input }) => {
      const clientSetup = await ensureClientsForRows(
        { db: ctx.db, userId: ctx.userId },
        input
      );
      const matterSetup = await ensureMattersForRows(
        { db: ctx.db, userId: ctx.userId },
        input.flatMap((row) => {
          const clientId = clientSetup.clientIdByKey.get(clientCompositeKey(row.clientName));
          return clientId && row.matterTitle?.trim()
            ? [{ clientId, matterTitle: row.matterTitle }]
            : [];
        })
      );

      await ctx.db.insert(entities).values(
        input.flatMap((row) => {
          const clientId = clientSetup.clientIdByKey.get(clientCompositeKey(row.clientName));
          if (!clientId) return [];

          const matterId = row.matterTitle?.trim()
            ? matterSetup.matterIdByKey.get(matterCompositeKey(clientId, row.matterTitle))
            : undefined;

          return [{
            userId: ctx.userId,
            clientId,
            matterId: matterId ?? null,
            documentId: null,
            type: row.type,
            value: row.description.trim(),
            context: row.context?.trim() || null,
            dueDate: row.dueDate?.trim() ? parseDate(row.dueDate, new Date()) : null,
            resolved: false,
          }];
        })
      );

      return {
        imported: input.length,
        createdClients: clientSetup.created,
        createdMatters: matterSetup.created,
      };
    }),

  importTimeEntries: protectedProcedure
    .input(z.array(timeImportRowSchema).max(1000))
    .mutation(async ({ ctx, input }) => {
      const clientSetup = await ensureClientsForRows(
        { db: ctx.db, userId: ctx.userId },
        input
      );
      const matterSetup = await ensureMattersForRows(
        { db: ctx.db, userId: ctx.userId },
        input.flatMap((row) => {
          const clientId = clientSetup.clientIdByKey.get(clientCompositeKey(row.clientName));
          return clientId && row.matterTitle?.trim()
            ? [{ clientId, matterTitle: row.matterTitle }]
            : [];
        })
      );

      await ctx.db.insert(timeEntries).values(
        input.flatMap((row) => {
          const clientId = clientSetup.clientIdByKey.get(clientCompositeKey(row.clientName));
          if (!clientId) return [];

          const matterId = row.matterTitle?.trim()
            ? matterSetup.matterIdByKey.get(matterCompositeKey(clientId, row.matterTitle))
            : undefined;

          return [{
            userId: ctx.userId,
            clientId,
            matterId: matterId ?? null,
            description: row.description.trim(),
            minutes: row.minutes,
            entryDate: parseDate(row.entryDate),
          }];
        })
      );

      return {
        imported: input.length,
        createdClients: clientSetup.created,
        createdMatters: matterSetup.created,
      };
    }),

  importInvoices: protectedProcedure
    .input(z.array(invoiceImportRowSchema).max(1000))
    .mutation(async ({ ctx, input }) => {
      const clientSetup = await ensureClientsForRows(
        { db: ctx.db, userId: ctx.userId },
        input
      );
      const matterSetup = await ensureMattersForRows(
        { db: ctx.db, userId: ctx.userId },
        input.flatMap((row) => {
          const clientId = clientSetup.clientIdByKey.get(clientCompositeKey(row.clientName));
          return clientId && row.matterTitle?.trim()
            ? [{ clientId, matterTitle: row.matterTitle }]
            : [];
        })
      );

      const existingInvoiceNumbers = new Set(
        (
          await ctx.db
            .select({ invoiceNumber: invoices.invoiceNumber })
            .from(invoices)
            .where(eq(invoices.userId, ctx.userId))
        ).map((invoice) => normalizeKey(invoice.invoiceNumber))
      );

      const rowsToInsert = input.flatMap((row) => {
        const normalizedInvoice = normalizeKey(row.invoiceNumber);
        if (existingInvoiceNumbers.has(normalizedInvoice)) return [];

        const clientId = clientSetup.clientIdByKey.get(clientCompositeKey(row.clientName));
        if (!clientId) return [];

        const matterId = row.matterTitle?.trim()
          ? matterSetup.matterIdByKey.get(matterCompositeKey(clientId, row.matterTitle))
          : undefined;

        existingInvoiceNumbers.add(normalizedInvoice);

        const amountCents = dollarsToCents(row.amount);

        return [{
          userId: ctx.userId,
          clientId,
          matterId: matterId ?? null,
          invoiceNumber: row.invoiceNumber.trim(),
          status: row.status ?? "draft",
          issueDate: parseDate(row.issueDate),
          dueDate: row.dueDate?.trim() ? parseDate(row.dueDate, new Date()) : null,
          totalAmount: amountCents,
          hstRate: 0,
          hstAmount: 0,
          notes: row.notes?.trim() || null,
          lineItems: [
            {
              description: row.matterTitle?.trim() || "Imported invoice balance",
              hours: 0,
              rate: 0,
              amount: amountCents,
            },
          ],
          sentAt: row.status === "sent" || row.status === "paid" || row.status === "overdue" ? parseDate(row.issueDate) : null,
          paidAt: row.status === "paid" ? parseDate(row.issueDate) : null,
        }];
      });

      if (rowsToInsert.length > 0) {
        await ctx.db.insert(invoices).values(rowsToInsert);
      }

      return {
        imported: rowsToInsert.length,
        skipped: input.length - rowsToInsert.length,
        createdClients: clientSetup.created,
        createdMatters: matterSetup.created,
      };
    }),
});
