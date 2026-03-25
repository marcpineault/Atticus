/**
 * Client portal document upload — public endpoint authenticated by portal token.
 * Clients can upload documents directly through their matter portal link.
 */
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { matters, documents } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { uploadToR2 } from "@/lib/r2/signed-url";
import { inngest } from "@/lib/inngest/client";
import { isAllowedFile, isAudioFile } from "@/types/upload";
import { randomUUID } from "crypto";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  // Look up matter by portal token
  const [matter] = await db
    .select({
      id: matters.id,
      userId: matters.userId,
      clientId: matters.clientId,
      status: matters.status,
    })
    .from(matters)
    .where(eq(matters.portalToken, token))
    .limit(1);

  if (!matter) {
    return NextResponse.json({ error: "Invalid portal link" }, { status: 404 });
  }

  if (matter.status === "closed") {
    return NextResponse.json({ error: "This matter is closed" }, { status: 403 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (!isAllowedFile(file.name)) {
    return NextResponse.json({ error: "File type not allowed. Accepted: PDF, DOCX, TXT, MP3, MP4, M4A" }, { status: 400 });
  }

  if (file.size > 100 * 1024 * 1024) {
    return NextResponse.json({ error: "File too large (max 100MB)" }, { status: 400 });
  }

  const r2Key = `${matter.userId}/portal/${randomUUID()}/${file.name}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await uploadToR2(r2Key, buffer, file.type || "application/octet-stream");

  const isAudio = isAudioFile(file.name);
  const docType = isAudio ? ("voice_note" as const) : ("document" as const);

  const [doc] = await db.insert(documents).values({
    userId: matter.userId,
    clientId: matter.clientId,
    matterId: matter.id,
    title: `[Client Upload] ${file.name.slice(0, 480)}`,
    type: docType,
    status: "pending",
    r2Key,
  }).returning();

  if (!doc) {
    return NextResponse.json({ error: "Failed to create document" }, { status: 500 });
  }

  const event = isAudio
    ? { name: "audio/uploaded" as const, data: { documentId: doc.id, userId: matter.userId, r2Key } }
    : { name: "document/uploaded" as const, data: { documentId: doc.id, userId: matter.userId } };

  await inngest.send(event);

  return NextResponse.json({ success: true, documentId: doc.id });
}
