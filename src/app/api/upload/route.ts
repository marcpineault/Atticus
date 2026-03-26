// src/app/api/upload/route.ts
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { documents, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { uploadToR2, deleteFromR2 } from "@/lib/r2/signed-url";
import { inngest } from "@/lib/inngest/client";
import { isAllowedFile, isAudioFile, uploadMetadataSchema } from "@/types/upload";
import { randomUUID } from "crypto";
import path from "path";

// Whisper hard limit is 25 MB; enforce it for audio to fail fast rather than
// burning retries. Non-audio documents keep the 100 MB cap.
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB
const MAX_AUDIO_SIZE = 24 * 1024 * 1024; // 24 MB (just under Whisper's 25 MB limit)

/** Strip path separators and null bytes from a user-supplied filename. */
function sanitizeFileName(name: string): string {
  // Take only the basename, then remove any remaining suspicious characters.
  const base = path.basename(name);
  return base.replace(/[^\w.\-]/g, "_");
}

/** Derive a safe MIME type from the file extension, ignoring the browser-supplied value. */
const EXTENSION_MIME: Record<string, string> = {
  pdf:  "application/pdf",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  txt:  "text/plain",
  mp3:  "audio/mpeg",
  mp4:  "audio/mp4",
  m4a:  "audio/mp4",
  wav:  "audio/wav",
  webm: "audio/webm",
  ogg:  "audio/ogg",
};

function safeMimeType(fileName: string): string {
  const ext = fileName.split(".").pop()?.toLowerCase() ?? "";
  return EXTENSION_MIME[ext] ?? "application/octet-stream";
}

export async function POST(req: Request) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Reject early if the Content-Type is not multipart/form-data.
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("multipart/form-data")) {
    return new Response("Expected multipart/form-data", { status: 415 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return new Response("Invalid form data", { status: 400 });
  }

  const file = formData.get("file") as File | null;

  if (!file) {
    return new Response("No file provided", { status: 400 });
  }

  const safeFileName = sanitizeFileName(file.name);

  if (!isAllowedFile(safeFileName)) {
    return new Response("File type not allowed", { status: 400 });
  }

  const isAudio = isAudioFile(safeFileName);

  if (isAudio && file.size > MAX_AUDIO_SIZE) {
    return new Response(
      "Audio file too large (max 24 MB — Whisper transcription limit)",
      { status: 413 }
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    return new Response("File too large (max 100 MB)", { status: 413 });
  }

  if (file.size === 0) {
    return new Response("File is empty", { status: 400 });
  }

  const rawMetadata = formData.get("metadata") as string | null;
  let metadata: ReturnType<typeof uploadMetadataSchema.parse> = {};
  if (rawMetadata) {
    try {
      metadata = uploadMetadataSchema.parse(JSON.parse(rawMetadata));
    } catch {
      return new Response("Invalid metadata", { status: 400 });
    }
  }

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, clerkId))
    .limit(1);

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  const r2Key = `${user.id}/${randomUUID()}/${safeFileName}`;
  const mimeType = safeMimeType(safeFileName);

  let buffer: Buffer;
  try {
    buffer = Buffer.from(await file.arrayBuffer());
  } catch {
    return new Response("Failed to read file", { status: 400 });
  }

  try {
    await uploadToR2(r2Key, buffer, mimeType);
  } catch {
    return new Response("Failed to upload file", { status: 502 });
  }

  const docType = isAudio
    ? ("voice_note" as const)
    : (metadata.documentType ?? "document") as "email" | "document" | "voice_note" | "meeting" | "text_message" | "calendar";

  let doc: typeof documents.$inferSelect | undefined;
  try {
    const [inserted] = await db
      .insert(documents)
      .values({
        userId: user.id,
        clientId: metadata.clientId ?? null,
        matterId: metadata.matterId ?? null,
        type: docType,
        title: metadata.title ?? safeFileName,
        status: "pending",
        r2Key,
      })
      .returning();
    doc = inserted;
  } catch {
    // DB insert failed — clean up the orphaned R2 object.
    await deleteFromR2(r2Key).catch(() => {
      // Best-effort cleanup; log but don't mask the original error.
      console.error(`[upload] orphaned R2 key after DB failure: ${r2Key}`);
    });
    return new Response("Failed to create document record", { status: 500 });
  }

  if (!doc) {
    await deleteFromR2(r2Key).catch(() => {
      console.error(`[upload] orphaned R2 key — no document returned: ${r2Key}`);
    });
    return new Response("Failed to create document record", { status: 500 });
  }

  try {
    if (isAudio) {
      await inngest.send({
        name: "audio/uploaded",
        data: {
          documentId: doc.id,
          userId: user.id,
          r2Key,
        },
      });
    } else {
      await inngest.send({
        name: "document/uploaded",
        data: {
          documentId: doc.id,
          userId: user.id,
        },
      });
    }
  } catch (err) {
    // Inngest send failed — the document row exists in the DB but no job was
    // queued. Mark it failed so the user knows and can retry, rather than
    // leaving it stuck in "pending" forever.
    console.error("[upload] inngest.send failed:", err);
    await db
      .update(documents)
      .set({ status: "failed", updatedAt: new Date() })
      .where(eq(documents.id, doc.id))
      .catch(() => {});
    return new Response("Failed to queue processing job", { status: 502 });
  }

  return Response.json({ documentId: doc.id, status: "pending" });
}
