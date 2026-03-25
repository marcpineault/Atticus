// src/app/api/upload/route.ts
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { documents, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { uploadToR2 } from "@/lib/r2/signed-url";
import { inngest } from "@/lib/inngest/client";
import { isAllowedFile, isAudioFile, uploadMetadataSchema } from "@/types/upload";
import { randomUUID } from "crypto";

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

  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return new Response("No file provided", { status: 400 });
  }

  if (!isAllowedFile(file.name)) {
    return new Response("File type not allowed", { status: 400 });
  }

  if (file.size > 100 * 1024 * 1024) {
    return new Response("File too large (max 100 MB)", { status: 413 });
  }

  const rawMetadata = formData.get("metadata") as string | null;
  const metadata = rawMetadata
    ? uploadMetadataSchema.parse(JSON.parse(rawMetadata))
    : {};

  const r2Key = `${user.id}/${randomUUID()}/${file.name}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await uploadToR2(r2Key, buffer, file.type);

  const isAudio = isAudioFile(file.name);
  const docType = isAudio
    ? ("voice_note" as const)
    : (metadata.documentType ?? "document") as "email" | "document" | "voice_note" | "meeting" | "text_message" | "calendar";

  const [doc] = await db
    .insert(documents)
    .values({
      userId: user.id,
      clientId: metadata.clientId ?? null,
      matterId: metadata.matterId ?? null,
      type: docType,
      title: metadata.title ?? file.name,
      status: "pending",
      r2Key,
    })
    .returning();

  if (!doc) {
    return new Response("Failed to create document record", { status: 500 });
  }

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

  return Response.json({ documentId: doc.id, status: "pending" });
}
