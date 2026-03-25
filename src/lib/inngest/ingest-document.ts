// src/lib/inngest/ingest-document.ts
import { inngest } from "./client";
import { db } from "@/lib/db";
import { documents, documentChunks, entities, users } from "@/lib/db/schema";
import { eq, and, inArray } from "drizzle-orm";
import { resend, FROM_EMAIL } from "@/lib/email/client";
import { buildDocumentReadyEmail } from "@/lib/email/templates";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { r2Client, R2_BUCKET } from "@/lib/r2/client";
import { extractText } from "@/lib/ingestion/extract-text";
import { extractEntities } from "@/lib/ingestion/extract-entities";
import { chunkAndEmbed } from "@/lib/ingestion/chunk-embed";
import { summarizeDocument } from "@/lib/ingestion/summarize";
import { estimateBillableMinutes } from "@/lib/ingestion/estimate-billable";

export const ingestDocument = inngest.createFunction(
  {
    id: "ingest-document",
    triggers: [{ event: "document/uploaded" }],
    retries: 3,
    concurrency: {
      scope: "fn",
      key: "event.data.userId",
      limit: 5,
    },
    onFailure: async ({ event, error }) => {
      const documentId = event.data.event.data.documentId as string;
      await db
        .update(documents)
        .set({
          status: "failed",
          errorMessage: error.message,
          updatedAt: new Date(),
        })
        .where(eq(documents.id, documentId));
    },
  },
  async ({ event, step }) => {
    const { documentId, userId } = event.data;

    await step.run("mark-processing", async () => {
      await db
        .update(documents)
        .set({ status: "processing", updatedAt: new Date() })
        .where(eq(documents.id, documentId));
    });

    const doc = await step.run("fetch-document", async () => {
      const [d] = await db
        .select()
        .from(documents)
        .where(eq(documents.id, documentId))
        .limit(1);
      if (!d) throw new Error(`Document ${documentId} not found`);
      return d;
    });

    const rawContent = await step.run("extract-text", async () => {
      if (doc.rawContent) return doc.rawContent;

      if (!doc.r2Key) throw new Error("No R2 key for document");

      const command = new GetObjectCommand({
        Bucket: R2_BUCKET,
        Key: doc.r2Key,
      });
      const response = await r2Client.send(command);
      const buffer = Buffer.from(await response.Body!.transformToByteArray());
      const fileName = doc.r2Key.split("/").pop() ?? "file.txt";

      const text = await extractText(buffer, fileName);

      await db
        .update(documents)
        .set({ rawContent: text, updatedAt: new Date() })
        .where(eq(documents.id, documentId));

      return text;
    });

    await step.run("extract-entities", async () => {
      const extracted = await extractEntities(rawContent, doc.type);

      const base = {
        documentId,
        userId,
        clientId: doc.clientId ?? null,
        matterId: doc.matterId ?? null,
      };

      const entityRows = [
        ...extracted.clientNames.map((name) => ({
          ...base,
          type: "person" as const,
          value: name,
          context: "",
        })),
        ...extracted.dates.map((d) => ({
          ...base,
          type: "date" as const,
          value: d.value,
          context: d.context,
        })),
        ...extracted.dollarAmounts.map((d) => ({
          ...base,
          type: "amount" as const,
          value: d.value,
          context: d.context,
        })),
        ...extracted.actionItems.map((d) => ({
          ...base,
          type: "action_item" as const,
          value: d.value,
          context: d.context,
        })),
        ...extracted.deadlines.map((d) => ({
          ...base,
          type: "deadline" as const,
          value: d.value,
          context: d.context,
          dueDate: d.dueDate ? new Date(d.dueDate) : null,
        })),
        ...extracted.caseReferences.map((d) => ({
          ...base,
          type: "case_reference" as const,
          value: d.value,
          context: d.context,
        })),
      ];

      if (entityRows.length > 0) {
        await db.insert(entities).values(entityRows);
      }
    });

    await step.run("chunk-and-embed", async () => {
      const chunks = await chunkAndEmbed(rawContent);

      if (chunks.length > 0) {
        await db.insert(documentChunks).values(
          chunks.map((chunk) => ({
            documentId,
            userId,
            clientId: doc.clientId,
            content: chunk.content,
            embedding: chunk.embedding,
            chunkIndex: chunk.chunkIndex,
          }))
        );
      }
    });

    const summary = await step.run("summarize", async () => {
      return summarizeDocument(rawContent, doc.type);
    });

    const billableMinutes = await step.run("estimate-billable", async () => {
      const wordCount = rawContent.split(/\s+/).length;
      const durationSeconds =
        (doc.metadata as Record<string, unknown> | null)?.durationSeconds as
          | number
          | undefined;

      return estimateBillableMinutes({
        type: doc.type,
        wordCount,
        durationSeconds,
      });
    });

    await step.run("mark-completed", async () => {
      await db
        .update(documents)
        .set({
          summary,
          billableMinutes,
          status: "completed",
          updatedAt: new Date(),
        })
        .where(eq(documents.id, documentId));
    });

    await step.run("notify-user", async () => {
      const [user] = await db
        .select({ email: users.email, name: users.name, emailDocumentReady: users.emailDocumentReady })
        .from(users)
        .where(eq(users.id, userId))
        .limit(1);
      if (!user?.email || user.emailDocumentReady === false) return;

      const docEntities = await db
        .select({ type: entities.type })
        .from(entities)
        .where(and(eq(entities.documentId, documentId), inArray(entities.type, ["deadline", "action_item"])));

      const deadlinesFound = docEntities.filter(e => e.type === "deadline").length;
      const actionItemsFound = docEntities.filter(e => e.type === "action_item").length;

      const { html, text } = buildDocumentReadyEmail({
        userName: user.name ?? user.email,
        documentTitle: doc.title ?? "Untitled",
        documentId,
        documentType: doc.type,
        deadlinesFound,
        actionItemsFound,
        summary: summary ?? null,
      });

      const isClientUpload = doc.title?.startsWith("[Client Upload]");
      const displayTitle = isClientUpload
        ? doc.title!.replace("[Client Upload] ", "")
        : (doc.title ?? "Untitled");
      const subjectPrefix = isClientUpload ? "Client upload processed" : "Processed";
      const clientUploadNote = isClientUpload ? " (uploaded by your client via their portal)" : "";

      await resend.emails.send({
        from: FROM_EMAIL,
        to: user.email,
        subject: `${subjectPrefix}: ${displayTitle}${deadlinesFound > 0 ? ` — ${deadlinesFound} deadline${deadlinesFound !== 1 ? "s" : ""} found` : ""}${clientUploadNote}`,
        html,
        text,
      });
    });

    return { documentId, status: "completed" };
  }
);
