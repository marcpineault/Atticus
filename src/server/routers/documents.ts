import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { documents, entities, documentChunks, clients } from "@/lib/db/schema";
import { eq, and, desc, inArray, isNull, or } from "drizzle-orm";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { getDownloadUrl } from "@/lib/r2/signed-url";
import { embedText } from "@/lib/ai/voyage";
import { sql } from "drizzle-orm";
import { inngest } from "@/lib/inngest/client";

export const documentsRouter = createTRPCRouter({
  list: protectedProcedure
    .input(z.object({
      clientId: z.string().uuid().optional(),
      matterId: z.string().uuid().optional(),
    }).optional())
    .query(async ({ ctx, input }) => {
      const conditions = [eq(documents.userId, ctx.userId)];
      if (input?.clientId) conditions.push(eq(documents.clientId, input.clientId));
      if (input?.matterId) conditions.push(eq(documents.matterId, input.matterId));
      return ctx.db.select({
        id: documents.id,
        userId: documents.userId,
        clientId: documents.clientId,
        matterId: documents.matterId,
        title: documents.title,
        type: documents.type,
        status: documents.status,
        summary: documents.summary,
        billableMinutes: documents.billableMinutes,
        r2Key: documents.r2Key,
        metadata: documents.metadata,
        errorMessage: documents.errorMessage,
        createdAt: documents.createdAt,
        updatedAt: documents.updatedAt,
      }).from(documents).where(and(...conditions)).orderBy(desc(documents.createdAt));
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const [doc] = await ctx.db.select().from(documents)
        .where(and(eq(documents.id, input.id), eq(documents.userId, ctx.userId)))
        .limit(1);
      if (!doc) throw new TRPCError({ code: "NOT_FOUND", message: "Document not found" });
      const docEntities = await ctx.db.select().from(entities).where(
        and(eq(entities.documentId, doc.id), eq(entities.userId, ctx.userId))
      );
      return { ...doc, entities: docEntities };
    }),

  getSignedUrl: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [doc] = await ctx.db.select().from(documents)
        .where(and(eq(documents.id, input.id), eq(documents.userId, ctx.userId)))
        .limit(1);
      if (!doc?.r2Key) throw new TRPCError({ code: "NOT_FOUND", message: "Document not found or no file" });
      const url = await getDownloadUrl(doc.r2Key);
      return { url };
    }),

  listEntitiesByClientFlat: protectedProcedure
    .input(z.object({ clientId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const clientDocs = await ctx.db.select({ id: documents.id }).from(documents)
        .where(and(eq(documents.clientId, input.clientId), eq(documents.userId, ctx.userId)));
      const docIds = clientDocs.map(d => d.id);
      // Return entities from documents OR direct manual entities for the client
      const conditions = [eq(entities.userId, ctx.userId)];
      if (docIds.length > 0) {
        conditions.push(
          or(
            inArray(entities.documentId, docIds),
            eq(entities.clientId, input.clientId),
          )!
        );
      } else {
        conditions.push(eq(entities.clientId, input.clientId));
      }
      return ctx.db.select().from(entities).where(and(...conditions));
    }),

  listEntitiesByMatter: protectedProcedure
    .input(z.object({ matterId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const matterDocs = await ctx.db.select({ id: documents.id }).from(documents)
        .where(and(eq(documents.matterId, input.matterId), eq(documents.userId, ctx.userId)));
      const docIds = matterDocs.map(d => d.id);
      const conditions = [eq(entities.userId, ctx.userId)];
      if (docIds.length > 0) {
        conditions.push(
          or(
            inArray(entities.documentId, docIds),
            eq(entities.matterId, input.matterId),
          )!
        );
      } else {
        conditions.push(eq(entities.matterId, input.matterId));
      }
      return ctx.db.select().from(entities).where(and(...conditions));
    }),

  listDeadlines: protectedProcedure
    .input(z.object({
      showResolved: z.boolean().default(false),
      clientId: z.string().uuid().optional(),
      matterId: z.string().uuid().optional(),
    }).optional())
    .query(async ({ ctx, input }) => {
      const conditions = [
        eq(entities.userId, ctx.userId),
        inArray(entities.type, ["deadline", "action_item"]),
      ];
      if (!input?.showResolved) {
        conditions.push(eq(entities.resolved, false));
      }
      // Filter by client: either via document's clientId or entity's direct clientId
      if (input?.clientId) {
        conditions.push(
          or(
            eq(sql`coalesce(${documents.clientId}, ${entities.clientId})`, input.clientId),
          )!
        );
      }
      if (input?.matterId) {
        conditions.push(
          or(
            eq(sql`coalesce(${documents.matterId}, ${entities.matterId})`, input.matterId),
          )!
        );
      }
      return ctx.db.select({
        id: entities.id,
        type: entities.type,
        value: entities.value,
        context: entities.context,
        dueDate: entities.dueDate,
        resolved: entities.resolved,
        documentId: entities.documentId,
        isManual: sql<boolean>`${entities.documentId} is null`,
        documentTitle: documents.title,
        clientId: sql<string | null>`coalesce(${documents.clientId}, ${entities.clientId})`,
        clientName: clients.name,
        recurrenceType: entities.recurrenceType,
      })
        .from(entities)
        .leftJoin(documents, eq(entities.documentId, documents.id))
        .leftJoin(clients, eq(sql`coalesce(${documents.clientId}, ${entities.clientId})`, clients.id))
        .where(and(...conditions))
        .orderBy(entities.dueDate, desc(entities.createdAt))
        .limit(200);
    }),

  updateTitle: protectedProcedure
    .input(z.object({ id: z.string().uuid(), title: z.string().min(1).max(500) }))
    .mutation(async ({ ctx, input }) => {
      const [doc] = await ctx.db.update(documents)
        .set({ title: input.title, updatedAt: new Date() })
        .where(and(eq(documents.id, input.id), eq(documents.userId, ctx.userId)))
        .returning();
      if (!doc) throw new TRPCError({ code: "NOT_FOUND", message: "Document not found" });
      return doc;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(documents)
        .where(and(eq(documents.id, input.id), eq(documents.userId, ctx.userId)));
    }),

  updateAssignment: protectedProcedure
    .input(z.object({
      id: z.string().uuid(),
      clientId: z.string().uuid().nullable(),
      matterId: z.string().uuid().nullable(),
    }))
    .mutation(async ({ ctx, input }) => {
      const [doc] = await ctx.db.update(documents)
        .set({ clientId: input.clientId, matterId: input.matterId, updatedAt: new Date() })
        .where(and(eq(documents.id, input.id), eq(documents.userId, ctx.userId)))
        .returning();
      if (!doc) throw new TRPCError({ code: "NOT_FOUND", message: "Document not found" });
      // Cascade assignment to entities extracted from this document
      await ctx.db.update(entities)
        .set({ clientId: input.clientId, matterId: input.matterId })
        .where(and(eq(entities.documentId, input.id), eq(entities.userId, ctx.userId)));
      return doc;
    }),

  resolveEntity: protectedProcedure
    .input(z.object({ id: z.string().uuid(), resolved: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const [entity] = await ctx.db.select()
        .from(entities).where(and(eq(entities.id, input.id), eq(entities.userId, ctx.userId))).limit(1);
      if (!entity) throw new TRPCError({ code: "NOT_FOUND", message: "Entity not found" });
      await ctx.db.update(entities).set({ resolved: input.resolved }).where(eq(entities.id, input.id));
      // Auto-create next occurrence when resolving a recurring entity
      if (input.resolved && entity.recurrenceType && entity.dueDate) {
        const next = new Date(entity.dueDate);
        if (entity.recurrenceType === "weekly") next.setDate(next.getDate() + 7);
        else if (entity.recurrenceType === "monthly") next.setMonth(next.getMonth() + 1);
        else if (entity.recurrenceType === "yearly") next.setFullYear(next.getFullYear() + 1);
        await ctx.db.insert(entities).values({
          userId: entity.userId,
          documentId: null,
          clientId: entity.clientId,
          matterId: entity.matterId,
          type: entity.type,
          value: entity.value,
          context: entity.context,
          dueDate: next,
          resolved: false,
          recurrenceType: entity.recurrenceType,
        });
      }
    }),

  createManualDeadline: protectedProcedure
    .input(z.object({
      type: z.enum(["deadline", "action_item"]),
      value: z.string().min(1).max(1000),
      context: z.string().max(2000).optional(),
      dueDate: z.string().datetime().optional(),
      clientId: z.string().uuid().optional(),
      matterId: z.string().uuid().optional(),
      recurrenceType: z.enum(["weekly", "monthly", "yearly"]).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const [entity] = await ctx.db.insert(entities).values({
        userId: ctx.userId,
        documentId: null,
        clientId: input.clientId ?? null,
        matterId: input.matterId ?? null,
        type: input.type,
        value: input.value,
        context: input.context ?? null,
        dueDate: input.dueDate ? new Date(input.dueDate) : null,
        resolved: false,
        recurrenceType: input.recurrenceType ?? null,
      }).returning();
      return entity;
    }),

  updateDeadline: protectedProcedure
    .input(z.object({
      id: z.string().uuid(),
      value: z.string().min(1).max(1000).optional(),
      dueDate: z.string().datetime().nullable().optional(),
      context: z.string().max(2000).nullable().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, dueDate, ...rest } = input;
      const [entity] = await ctx.db.update(entities)
        .set({
          ...rest,
          ...(dueDate !== undefined ? { dueDate: dueDate ? new Date(dueDate) : null } : {}),
        })
        .where(and(eq(entities.id, id), eq(entities.userId, ctx.userId)))
        .returning();
      return entity;
    }),

  deleteDeadline: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.delete(entities)
        .where(and(
          eq(entities.id, input.id),
          eq(entities.userId, ctx.userId),
          isNull(entities.documentId), // only allow deleting manual entries
        ));
    }),

  bulkResolve: protectedProcedure
    .input(z.object({
      ids: z.array(z.string().uuid()).min(1).max(100),
      resolved: z.boolean(),
    }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.update(entities)
        .set({ resolved: input.resolved })
        .where(and(
          inArray(entities.id, input.ids),
          eq(entities.userId, ctx.userId),
        ));

      // Auto-create next occurrences for recurring entities being resolved
      if (input.resolved) {
        const recurringEntities = await ctx.db.select()
          .from(entities)
          .where(and(
            inArray(entities.id, input.ids),
            eq(entities.userId, ctx.userId),
          ));

        const newOccurrences = recurringEntities
          .filter(e => e.recurrenceType && e.dueDate)
          .map(e => {
            const next = new Date(e.dueDate!);
            if (e.recurrenceType === "weekly") next.setDate(next.getDate() + 7);
            else if (e.recurrenceType === "monthly") next.setMonth(next.getMonth() + 1);
            else if (e.recurrenceType === "yearly") next.setFullYear(next.getFullYear() + 1);
            return {
              userId: e.userId,
              documentId: null as string | null,
              clientId: e.clientId,
              matterId: e.matterId,
              type: e.type,
              value: e.value,
              context: e.context,
              dueDate: next,
              resolved: false,
              recurrenceType: e.recurrenceType,
            };
          });

        if (newOccurrences.length > 0) {
          await ctx.db.insert(entities).values(newOccurrences);
        }
      }

      return { updated: input.ids.length };
    }),

  retryDocument: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [doc] = await ctx.db.select().from(documents)
        .where(and(eq(documents.id, input.id), eq(documents.userId, ctx.userId)))
        .limit(1);
      if (!doc) throw new TRPCError({ code: "NOT_FOUND", message: "Document not found" });
      await ctx.db.update(documents)
        .set({ status: "pending", errorMessage: null, updatedAt: new Date() })
        .where(eq(documents.id, input.id));
      const event = doc.type === "meeting" || doc.type === "voice_note"
        ? { name: "audio/uploaded" as const, data: { documentId: doc.id, userId: ctx.userId, r2Key: doc.r2Key! } }
        : { name: "document/uploaded" as const, data: { documentId: doc.id, userId: ctx.userId } };
      await inngest.send(event);
      return { status: "queued" };
    }),

  getBillingReport: protectedProcedure
    .query(async ({ ctx }) => {
      const rows = await ctx.db
        .select({
          clientId: documents.clientId,
          clientName: clients.name,
          clientCompany: clients.company,
          totalBillableMinutes: sql<number>`coalesce(sum(${documents.billableMinutes}), 0)::int`,
          documentCount: sql<number>`count(*)::int`,
        })
        .from(documents)
        .leftJoin(clients, eq(documents.clientId, clients.id))
        .where(and(eq(documents.userId, ctx.userId), eq(documents.status, "completed")))
        .groupBy(documents.clientId, clients.name, clients.company)
        .orderBy(sql`sum(${documents.billableMinutes}) desc nulls last`);
      return rows;
    }),

  createNote: protectedProcedure
    .input(z.object({
      content: z.string().min(1).max(50000),
      title: z.string().min(1).max(500),
      clientId: z.string().uuid().optional(),
      matterId: z.string().uuid().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const [doc] = await ctx.db.insert(documents).values({
        userId: ctx.userId,
        title: input.title,
        type: "document",
        status: "pending",
        rawContent: input.content,
        clientId: input.clientId ?? null,
        matterId: input.matterId ?? null,
      }).returning();
      if (!doc) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to create note" });
      await inngest.send({
        name: "document/uploaded",
        data: { documentId: doc.id, userId: ctx.userId },
      });
      return doc;
    }),

  search: protectedProcedure
    .input(z.object({
      query: z.string().min(1).max(500),
      clientId: z.string().uuid().optional(),
      matterId: z.string().uuid().optional(),
      limit: z.number().min(1).max(20).default(10),
    }))
    .mutation(async ({ ctx, input }) => {
      const queryEmbedding = await embedText(input.query);
      const conditions = [eq(documentChunks.userId, ctx.userId)];
      if (input.clientId) conditions.push(eq(documentChunks.clientId, input.clientId));
      if (input.matterId) conditions.push(eq(documents.matterId, input.matterId));

      const chunks = await ctx.db
        .select({
          content: documentChunks.content,
          documentId: documentChunks.documentId,
          chunkIndex: documentChunks.chunkIndex,
          similarity: sql<number>`1 - (${documentChunks.embedding} <=> ${JSON.stringify(queryEmbedding)}::vector)`,
          documentTitle: documents.title,
          documentType: documents.type,
          clientId: documents.clientId,
          matterId: documents.matterId,
        })
        .from(documentChunks)
        .innerJoin(documents, eq(documentChunks.documentId, documents.id))
        .where(and(...conditions))
        .orderBy(sql`${documentChunks.embedding} <=> ${JSON.stringify(queryEmbedding)}::vector`)
        .limit(input.limit);

      return chunks.filter((c) => c.similarity > 0.3);
    }),
});
