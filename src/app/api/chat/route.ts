// src/app/api/chat/route.ts
import { auth } from "@clerk/nextjs/server";
import { streamText, convertToModelMessages, tool, zodSchema, type UIMessage } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { db } from "@/lib/db";
import { users, clients, matters, chatMessages, entities, timeEntries, invoices, trustTransactions, documents } from "@/lib/db/schema";
import { eq, and, gte, lt, count, sql, ilike, or, inArray, isNull } from "drizzle-orm";
import { retrieveChunks } from "@/lib/ai/retrieve";
import { buildSystemPrompt, type PracticeContext } from "@/lib/ai/system-prompt";
import { z } from "zod";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, clerkId))
    .limit(1);
  if (!user) {
    return new Response("User not found", { status: 401 });
  }

  const {
    messages,
    clientId,
    matterId,
  }: { messages: UIMessage[]; clientId?: string; matterId?: string } = await req.json();

  const lastMessage = messages[messages.length - 1];
  if (!lastMessage || lastMessage.role !== "user") {
    return new Response("Invalid message", { status: 400 });
  }

  const userText =
    lastMessage.parts
      ?.filter(
        (p): p is { type: "text"; text: string } => p.type === "text"
      )
      .map((p) => p.text)
      .join(" ") ?? "";

  // Fetch live practice context in parallel with chunk retrieval
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayEnd = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000);
  const weekEnd = new Date(todayStart.getTime() + 7 * 24 * 60 * 60 * 1000);

  const [chunks, overdueRows, dueTodayRows, dueWeekRows, matterStats, clientCount, recentMattersRows, unbilledRows, outstandingInvoiceRows, trustBalanceRows] =
    await Promise.all([
      retrieveChunks(userText, user.id, clientId, 8, matterId),
      // Overdue deadline/action entities
      db.select({
        title: entities.value,
        dueDate: entities.dueDate,
        clientName: clients.name,
        matterTitle: matters.title,
      })
        .from(entities)
        .leftJoin(clients, eq(entities.clientId, clients.id))
        .leftJoin(matters, eq(entities.matterId, matters.id))
        .where(and(
          eq(entities.userId, user.id),
          eq(entities.resolved, false),
          lt(entities.dueDate, todayStart)
        ))
        .limit(10),
      // Due today
      db.select({
        title: entities.value,
        clientName: clients.name,
        matterTitle: matters.title,
      })
        .from(entities)
        .leftJoin(clients, eq(entities.clientId, clients.id))
        .leftJoin(matters, eq(entities.matterId, matters.id))
        .where(and(
          eq(entities.userId, user.id),
          eq(entities.resolved, false),
          gte(entities.dueDate, todayStart),
          lt(entities.dueDate, todayEnd)
        ))
        .limit(10),
      // Due this week
      db.select({
        title: entities.value,
        dueDate: entities.dueDate,
        clientName: clients.name,
        matterTitle: matters.title,
      })
        .from(entities)
        .leftJoin(clients, eq(entities.clientId, clients.id))
        .leftJoin(matters, eq(entities.matterId, matters.id))
        .where(and(
          eq(entities.userId, user.id),
          eq(entities.resolved, false),
          gte(entities.dueDate, todayEnd),
          lt(entities.dueDate, weekEnd)
        ))
        .limit(10),
      // Active matters count
      db.select({ count: count() })
        .from(matters)
        .where(and(eq(matters.userId, user.id), eq(matters.status, "active"))),
      // Total clients count
      db.select({ count: count() })
        .from(clients)
        .where(eq(clients.userId, user.id)),
      // Recent active matters
      db.select({
        title: matters.title,
        clientName: clients.name,
        status: matters.status,
      })
        .from(matters)
        .leftJoin(clients, eq(matters.clientId, clients.id))
        .where(and(eq(matters.userId, user.id), eq(matters.status, "active")))
        .orderBy(sql`${matters.updatedAt} desc`)
        .limit(8),
      // Unbilled time (entries + document billable minutes)
      db.execute(sql`
        SELECT (
          coalesce((SELECT sum(minutes) FROM time_entries WHERE user_id = ${user.id} AND billed_at IS NULL), 0)
          + coalesce((SELECT sum(billable_minutes) FROM documents WHERE user_id = ${user.id} AND status = 'completed' AND billable_minutes > 0), 0)
        )::int AS total
      `).then(r => [{ total: (r.rows[0] as { total: number })?.total ?? 0 }]),
      // Outstanding invoices
      db.select({
        clientName: clients.name,
        totalAmount: invoices.totalAmount,
        status: invoices.status,
        dueDate: invoices.dueDate,
      })
        .from(invoices)
        .leftJoin(clients, eq(invoices.clientId, clients.id))
        .where(and(
          eq(invoices.userId, user.id),
          inArray(invoices.status, ["sent", "overdue"]),
        ))
        .orderBy(invoices.dueDate)
        .limit(10),
      // Trust balances per client
      db.select({
        clientName: clients.name,
        balanceCents: sql<number>`coalesce(sum(${trustTransactions.amount}), 0)::int`,
      })
        .from(trustTransactions)
        .leftJoin(clients, eq(trustTransactions.clientId, clients.id))
        .where(eq(trustTransactions.userId, user.id))
        .groupBy(clients.id, clients.name)
        .having(sql`abs(coalesce(sum(${trustTransactions.amount}), 0)) > 0`)
        .limit(15),
    ]);

  const practiceContext: PracticeContext = {
    overdueDeadlines: overdueRows
      .filter(r => r.dueDate != null)
      .map(r => ({
        title: r.title,
        clientName: r.clientName ?? null,
        matterTitle: r.matterTitle ?? null,
        dueDate: r.dueDate!.toLocaleDateString("en-CA", { month: "short", day: "numeric" }),
      })),
    dueTodayDeadlines: dueTodayRows.map(r => ({
      title: r.title,
      clientName: r.clientName ?? null,
      matterTitle: r.matterTitle ?? null,
    })),
    dueThisWeekDeadlines: dueWeekRows
      .filter(r => r.dueDate != null)
      .map(r => ({
        title: r.title,
        clientName: r.clientName ?? null,
        matterTitle: r.matterTitle ?? null,
        dueDate: r.dueDate!.toLocaleDateString("en-CA", { weekday: "short", month: "short", day: "numeric" }),
      })),
    activeMattersCount: matterStats[0]?.count ?? 0,
    totalClientsCount: clientCount[0]?.count ?? 0,
    unbilledHours: (unbilledRows[0]?.total ?? 0) / 60,
    recentMatters: recentMattersRows.map(m => ({
      title: m.title,
      clientName: m.clientName ?? null,
      status: m.status,
    })),
    outstandingInvoices: outstandingInvoiceRows.map(inv => ({
      clientName: inv.clientName ?? null,
      amount: (inv.totalAmount / 100).toLocaleString("en-CA", { style: "currency", currency: "CAD" }),
      status: inv.status,
      dueDate: inv.dueDate ? inv.dueDate.toLocaleDateString("en-CA", { month: "short", day: "numeric" }) : null,
    })),
    trustBalances: trustBalanceRows
      .filter(r => r.clientName != null)
      .map(r => ({ clientName: r.clientName!, balanceCents: r.balanceCents })),
  };

  // Build system prompt context
  let clientName: string | undefined;
  let clientSummary: string | undefined;
  let matterTitle: string | undefined;
  if (clientId) {
    const [client] = await db
      .select()
      .from(clients)
      .where(and(eq(clients.id, clientId), eq(clients.userId, user.id)))
      .limit(1);
    if (client) {
      clientName = client.name;
      clientSummary = client.summary ?? undefined;
    }
  }
  if (matterId) {
    const [matter] = await db
      .select()
      .from(matters)
      .where(and(eq(matters.id, matterId), eq(matters.userId, user.id)))
      .limit(1);
    if (matter) {
      matterTitle = matter.title;
    }
  }

  const systemPrompt = buildSystemPrompt({
    lawyerName: user.name ?? "Counselor",
    firmName: user.firmName ?? "",
    clientName,
    clientSummary,
    matterTitle,
    chunks,
    practiceContext,
    todayDate: now.toLocaleDateString("en-CA", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    }),
  });

  // Save user message
  await db.insert(chatMessages).values({
    userId: user.id,
    clientId: clientId ?? null,
    matterId: matterId ?? null,
    role: "user",
    content: userText,
  });

  // Convert UI messages to model messages
  const modelMessages = await convertToModelMessages(messages);

  // Stream response via Claude Sonnet with action tools
  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    system: systemPrompt,
    messages: modelMessages,
    tools: {
      add_deadline: tool({
        description: "Add a deadline or action item to the lawyer's practice. Use this when the lawyer asks you to add, create, or set a deadline, reminder, or action item.",
        inputSchema: zodSchema(z.object({
          value: z.string().describe("The deadline or action item description"),
          type: z.enum(["deadline", "action_item"]).describe("Use 'deadline' for hard dates/court dates/filing deadlines. Use 'action_item' for tasks and follow-ups."),
          dueDate: z.string().optional().describe("Due date in ISO 8601 format (YYYY-MM-DD). Parse natural language dates relative to today."),
        })),
        execute: async ({ value, type, dueDate }) => {
          const [created] = await db.insert(entities).values({
            userId: user.id,
            type,
            value,
            dueDate: dueDate ? new Date(dueDate) : undefined,
            clientId: clientId ?? null,
            matterId: matterId ?? null,
            resolved: false,
          }).returning({ id: entities.id });
          return { success: true, id: created?.id, value, type, dueDate: dueDate ?? null };
        },
      }),

      log_time: tool({
        description: "Log a time entry for the lawyer. Use this when they ask to log, record, or track time spent on a task.",
        inputSchema: zodSchema(z.object({
          description: z.string().describe("Description of what was worked on"),
          minutes: z.number().int().positive().describe("Time spent in minutes"),
        })),
        execute: async ({ description, minutes }) => {
          const [created] = await db.insert(timeEntries).values({
            userId: user.id,
            description,
            minutes,
            clientId: clientId ?? null,
            matterId: matterId ?? null,
            entryDate: new Date(),
          }).returning({ id: timeEntries.id });
          return { success: true, id: created?.id, description, minutes, hours: (minutes / 60).toFixed(2) };
        },
      }),

      resolve_deadline: tool({
        description: "Mark a deadline or action item as resolved/done. Use when the lawyer says something is complete, done, finished, or asks to check off a task.",
        inputSchema: zodSchema(z.object({
          search: z.string().describe("Keywords to find the deadline/action item — use part of its description"),
        })),
        execute: async ({ search }) => {
          // Find the closest matching unresolved entity
          const matches = await db.select({
            id: entities.id,
            value: entities.value,
            type: entities.type,
          })
            .from(entities)
            .where(and(
              eq(entities.userId, user.id),
              eq(entities.resolved, false),
              or(
                ilike(entities.value, `%${search}%`),
              )
            ))
            .limit(1);

          if (!matches[0]) {
            return { success: false, message: `No unresolved item found matching "${search}"` };
          }

          await db.update(entities)
            .set({ resolved: true })
            .where(eq(entities.id, matches[0].id));

          return { success: true, resolved: matches[0].value, type: matches[0].type };
        },
      }),

      add_client_note: tool({
        description: "Add a private note to a client's record. Use when the lawyer mentions something important about a client that should be remembered.",
        inputSchema: zodSchema(z.object({
          note: z.string().describe("The note content to add to the client's record"),
          clientSearch: z.string().optional().describe("Client name to search for if not already in context"),
        })),
        execute: async ({ note, clientSearch }) => {
          let targetClientId = clientId;

          if (!targetClientId && clientSearch) {
            const [found] = await db.select({ id: clients.id, name: clients.name })
              .from(clients)
              .where(and(
                eq(clients.userId, user.id),
                ilike(clients.name, `%${clientSearch}%`)
              ))
              .limit(1);
            if (found) targetClientId = found.id;
          }

          if (!targetClientId) {
            return { success: false, message: "No client identified. Please specify a client name." };
          }

          const [existing] = await db.select({ notes: clients.notes, name: clients.name })
            .from(clients)
            .where(eq(clients.id, targetClientId))
            .limit(1);

          if (!existing) return { success: false, message: "Client not found." };

          const timestamp = new Date().toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" });
          const newNotes = existing.notes
            ? `${existing.notes}\n\n[${timestamp}] ${note}`
            : `[${timestamp}] ${note}`;

          await db.update(clients)
            .set({ notes: newNotes })
            .where(eq(clients.id, targetClientId));

          return { success: true, clientName: existing.name, noteAdded: note };
        },
      }),

      add_matter_note: tool({
        description: "Add a private note to a matter's record. Use when the lawyer mentions something important about a specific matter or case that should be noted.",
        inputSchema: zodSchema(z.object({
          note: z.string().describe("The note content to add to the matter's record"),
          matterSearch: z.string().optional().describe("Matter title keywords to search for if not already in context"),
        })),
        execute: async ({ note, matterSearch }) => {
          let targetMatterId = matterId;

          if (!targetMatterId && matterSearch) {
            const [found] = await db.select({ id: matters.id, title: matters.title })
              .from(matters)
              .where(and(
                eq(matters.userId, user.id),
                ilike(matters.title, `%${matterSearch}%`)
              ))
              .limit(1);
            if (found) targetMatterId = found.id;
          }

          if (!targetMatterId) {
            return { success: false, message: "No matter identified. Please specify a matter name." };
          }

          const [existing] = await db.select({ notes: matters.notes, title: matters.title })
            .from(matters)
            .where(eq(matters.id, targetMatterId))
            .limit(1);

          if (!existing) return { success: false, message: "Matter not found." };

          const timestamp = new Date().toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" });
          const newNotes = existing.notes
            ? `${existing.notes}\n\n[${timestamp}] ${note}`
            : `[${timestamp}] ${note}`;

          await db.update(matters)
            .set({ notes: newNotes })
            .where(eq(matters.id, targetMatterId));

          return { success: true, matterTitle: existing.title, noteAdded: note };
        },
      }),

      record_trust: tool({
        description: "Record a trust receipt or disbursement. Use when the lawyer mentions receiving funds into trust, paying from trust, or asks to record a trust transaction. Always confirm the amount and client before recording.",
        inputSchema: zodSchema(z.object({
          type: z.enum(["receipt", "disbursement"]).describe("'receipt' for money coming IN to trust, 'disbursement' for money going OUT of trust"),
          amountDollars: z.number().positive().describe("Dollar amount (e.g. 5000 for $5,000)"),
          description: z.string().describe("Description of the trust transaction"),
          clientSearch: z.string().describe("Client name to search for"),
          referenceNumber: z.string().optional().describe("Cheque number, wire reference, or other reference"),
        })),
        execute: async ({ type, amountDollars, description, clientSearch, referenceNumber }) => {
          let targetClientId = clientId;
          let targetClientName = "";

          if (!targetClientId) {
            const [found] = await db.select({ id: clients.id, name: clients.name })
              .from(clients)
              .where(and(eq(clients.userId, user.id), ilike(clients.name, `%${clientSearch}%`)))
              .limit(1);
            if (!found) return { success: false, message: `No client found matching "${clientSearch}"` };
            targetClientId = found.id;
            targetClientName = found.name;
          } else {
            const [found] = await db.select({ name: clients.name }).from(clients).where(eq(clients.id, targetClientId)).limit(1);
            targetClientName = found?.name ?? "Client";
          }

          const amountCents = Math.round(amountDollars * 100);
          const signedAmount = type === "receipt" ? amountCents : -amountCents;

          await db.insert(trustTransactions).values({
            userId: user.id,
            clientId: targetClientId,
            matterId: matterId ?? null,
            type,
            amount: signedAmount,
            description,
            referenceNumber: referenceNumber ?? null,
            transactionDate: new Date(),
          });

          return {
            success: true,
            type,
            clientName: targetClientName,
            amountCAD: amountDollars.toFixed(2),
            description,
            message: `Trust ${type} of $${amountDollars.toFixed(2)} recorded for ${targetClientName}. Check Trust Accounting to verify the balance.`,
          };
        },
      }),

      create_invoice: tool({
        description: "Create a draft invoice for a client from their unbilled time entries and document billable minutes. Use when the lawyer asks to generate, create, or draft an invoice for a client.",
        inputSchema: zodSchema(z.object({
          clientSearch: z.string().describe("Client name to search for if not already in context"),
          includeHST: z.boolean().default(false).describe("Whether to add Ontario HST (13%) to the invoice"),
          notes: z.string().optional().describe("Optional notes to add to the invoice"),
        })),
        execute: async ({ clientSearch, includeHST, notes }) => {
          // Resolve client
          let targetClientId = clientId;
          let targetClientName = "";

          if (!targetClientId) {
            const [found] = await db.select({ id: clients.id, name: clients.name })
              .from(clients)
              .where(and(
                eq(clients.userId, user.id),
                ilike(clients.name, `%${clientSearch}%`)
              ))
              .limit(1);
            if (!found) return { success: false, message: `No client found matching "${clientSearch}"` };
            targetClientId = found.id;
            targetClientName = found.name;
          } else {
            const [found] = await db.select({ name: clients.name })
              .from(clients).where(eq(clients.id, targetClientId)).limit(1);
            targetClientName = found?.name ?? "Client";
          }

          // Get hourly rate: matter-specific or user default
          const hourlyRate = user.hourlyRate ?? 400;
          let effectiveRate = hourlyRate;
          if (matterId) {
            const [m] = await db.select({ hourlyRate: matters.hourlyRate })
              .from(matters).where(eq(matters.id, matterId)).limit(1);
            if (m?.hourlyRate != null) effectiveRate = m.hourlyRate;
          }

          // Fetch unbilled docs + time entries
          const [billedDocs, manualEntries] = await Promise.all([
            db.select({ id: documents.id, title: documents.title, type: documents.type, billableMinutes: documents.billableMinutes, createdAt: documents.createdAt })
              .from(documents)
              .where(and(
                eq(documents.userId, user.id),
                eq(documents.clientId, targetClientId),
                eq(documents.status, "completed"),
                ...(matterId ? [eq(documents.matterId, matterId)] : []),
              )),
            db.select({ id: timeEntries.id, description: timeEntries.description, minutes: timeEntries.minutes })
              .from(timeEntries)
              .where(and(
                eq(timeEntries.userId, user.id),
                eq(timeEntries.clientId, targetClientId),
                isNull(timeEntries.billedAt),
                ...(matterId ? [eq(timeEntries.matterId, matterId)] : []),
              )),
          ]);

          const docItems = billedDocs.filter(d => (d.billableMinutes ?? 0) > 0).map(d => {
            const hours = (d.billableMinutes ?? 0) / 60;
            return { description: d.title ?? `${d.type} — ${new Date(d.createdAt).toLocaleDateString("en-CA")}`, hours: Math.round(hours * 100) / 100, rate: effectiveRate, amount: Math.round(hours * effectiveRate * 100) };
          });
          const timeItems = manualEntries.filter(e => e.minutes > 0).map(e => {
            const hours = e.minutes / 60;
            return { description: e.description, hours: Math.round(hours * 100) / 100, rate: effectiveRate, amount: Math.round(hours * effectiveRate * 100) };
          });
          const lineItems = [...docItems, ...timeItems];

          if (lineItems.length === 0) {
            return { success: false, message: `No unbilled time found for ${targetClientName}. Log time or upload documents first.` };
          }

          const subtotal = lineItems.reduce((s, l) => s + l.amount, 0);
          const hstRate = includeHST ? 13 : 0;
          const hstAmount = Math.round(subtotal * hstRate / 100);
          const totalAmount = subtotal + hstAmount;

          // Generate invoice number (timestamp+random suffix avoids race conditions)
          const invoiceNumber = `INV-${new Date().getFullYear()}-${Date.now().toString(36).toUpperCase().slice(-4)}${Math.random().toString(36).slice(-2).toUpperCase()}`;

          const [created] = await db.insert(invoices).values({
            userId: user.id,
            clientId: targetClientId,
            matterId: matterId ?? null,
            invoiceNumber,
            lineItems,
            totalAmount,
            hstRate,
            hstAmount,
            notes: notes ?? null,
          }).returning({ id: invoices.id });

          // Mark time entries as billed, zero out doc billable minutes
          const docIds = billedDocs.filter(d => (d.billableMinutes ?? 0) > 0).map(d => d.id);
          const entryIds = manualEntries.map(e => e.id);
          if (entryIds.length > 0) await db.update(timeEntries).set({ billedAt: new Date() }).where(inArray(timeEntries.id, entryIds));
          if (docIds.length > 0) await db.update(documents).set({ billableMinutes: 0 }).where(inArray(documents.id, docIds));

          return {
            success: true,
            invoiceId: created?.id,
            invoiceNumber,
            clientName: targetClientName,
            lineItemCount: lineItems.length,
            totalCAD: (totalAmount / 100).toFixed(2),
            includesHST: includeHST,
            message: `Draft invoice ${invoiceNumber} created for ${targetClientName} — $${(totalAmount / 100).toFixed(2)} CAD${includeHST ? " incl. HST" : ""}. Go to Billing to review and send it.`,
          };
        },
      }),
    },
    onFinish: async ({ text }) => {
      await db.insert(chatMessages).values({
        userId: user.id,
        clientId: clientId ?? null,
        matterId: matterId ?? null,
        role: "assistant",
        content: text,
      });
    },
  });

  return result.toUIMessageStreamResponse();
}
