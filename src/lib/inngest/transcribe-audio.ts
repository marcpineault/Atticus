// src/lib/inngest/transcribe-audio.ts
import { inngest } from "./client";
import { db } from "@/lib/db";
import { documents } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { r2Client, getR2Bucket } from "@/lib/r2/client";
import { transcribeAudio } from "@/lib/ingestion/transcribe";

export const transcribeAudioFn = inngest.createFunction(
  {
    id: "transcribe-audio",
    triggers: [{ event: "audio/uploaded" }],
    retries: 2,
    onFailure: async ({ event, error }) => {
      const documentId = event.data.event.data.documentId as string;
      await db
        .update(documents)
        .set({ status: "failed", errorMessage: error.message, updatedAt: new Date() })
        .where(eq(documents.id, documentId));
    },
  },
  async ({ event, step }) => {
    const { documentId, userId, r2Key } = event.data;

    await step.run("mark-processing", async () => {
      await db
        .update(documents)
        .set({ status: "processing", updatedAt: new Date() })
        .where(eq(documents.id, documentId));
    });

    const transcription = await step.run("transcribe", async () => {
      const command = new GetObjectCommand({
        Bucket: getR2Bucket(),
        Key: r2Key,
      });
      const response = await r2Client.send(command);
      if (!response.Body) {
        throw new Error(`R2 object has no body for key: ${r2Key}`);
      }
      const buffer = Buffer.from(await response.Body.transformToByteArray());
      const fileName = r2Key.split("/").pop() ?? "audio.mp3";

      return transcribeAudio(buffer, fileName);
    });

    await step.run("store-transcript", async () => {
      await db
        .update(documents)
        .set({
          rawContent: transcription.transcript,
          metadata: {
            durationSeconds: transcription.duration_seconds,
            language: transcription.language,
          },
          updatedAt: new Date(),
        })
        .where(eq(documents.id, documentId));
    });

    await step.sendEvent("trigger-ingestion", {
      name: "document/uploaded",
      data: {
        documentId,
        userId,
      },
    });

    return { documentId, status: "transcribed" };
  }
);
