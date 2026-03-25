import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { documents, users, clients, matters } from "@/lib/db/schema";
import { eq, and, desc, ilike } from "drizzle-orm";
import { inngest } from "@/lib/inngest/client";
import { verifyResendWebhook } from "@/lib/email/verify-webhook";
import { cleanEmailThread } from "@/lib/ingestion/clean-email-thread";
import { uploadToR2 } from "@/lib/r2/signed-url";
import { randomUUID } from "crypto";

// Resend inbound email payload shape
interface ResendInboundPayload {
  from: string;
  to: string[];
  subject?: string;
  text?: string;
  html?: string;
  headers?: Record<string, string>;
  attachments?: Array<{
    filename: string;
    content: string;       // base64
    contentType: string;
  }>;
}

// File types the ingestion pipeline supports
const ALLOWED_ATTACHMENT_TYPES: Record<string, string> = {
  "application/pdf": ".pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
  "text/plain": ".txt",
};

function stripHtml(html: string): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function extractEmail(raw: string): string {
  return (raw.match(/<([^>]+)>/)?.[1] ?? raw).trim().toLowerCase();
}

function extractName(raw: string): string | null {
  const match = raw.match(/^"?([^"<]+)"?\s*</);
  return match?.[1]?.trim() ?? null;
}

export async function POST(req: NextRequest) {
  // --- 1. Signature verification (Resend uses Svix) ---
  const rawBody = await req.text();
  const verified = verifyResendWebhook(rawBody, {
    svixId: req.headers.get("svix-id"),
    svixTimestamp: req.headers.get("svix-timestamp"),
    svixSignature: req.headers.get("svix-signature"),
  });

  if (!verified) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const payload = verified as ResendInboundPayload;

  // --- 2. Message-ID dedup ---
  const messageId = payload.headers?.["message-id"] ?? payload.headers?.["Message-ID"];
  if (messageId) {
    const [existing] = await db
      .select({ id: documents.id })
      .from(documents)
      .where(eq(documents.sourceId, messageId))
      .limit(1);
    if (existing) {
      return NextResponse.json({ received: true, duplicate: true });
    }
  }

  // --- 3. Resolve user from intake address ---
  const toAddresses = payload.to ?? [];
  let userId: string | null = null;

  for (const toAddr of toAddresses) {
    const normalized = toAddr.toLowerCase().replace(/.*</, "").replace(/>.*/, "").trim();
    const [user] = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.intakeEmail, normalized))
      .limit(1);
    if (user) { userId = user.id; break; }
  }

  // Fallback: match by sender email (lawyer forwarding from their own address)
  if (!userId) {
    const fromEmail = extractEmail(payload.from);
    const [user] = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, fromEmail))
      .limit(1);
    if (user) userId = user.id;
  }

  if (!userId) {
    return NextResponse.json({ received: true });
  }

  // --- 4. Extract and clean email body ---
  const subject = payload.subject ?? "Forwarded Email";
  const rawEmailBody = payload.text ?? (payload.html ? stripHtml(payload.html) : "");

  if (!rawEmailBody.trim()) {
    return NextResponse.json({ received: true });
  }

  const cleanedBody = await cleanEmailThread(rawEmailBody);

  // --- 5. Smart client/matter matching ---
  let matchedClientId: string | null = null;
  let matchedMatterId: string | null = null;
  const fromEmail = extractEmail(payload.from);

  // Try exact email match
  const [emailMatch] = await db
    .select({ id: clients.id })
    .from(clients)
    .where(and(eq(clients.userId, userId), eq(clients.email, fromEmail)))
    .limit(1);

  if (emailMatch) {
    matchedClientId = emailMatch.id;
  }

  // Fallback: fuzzy name match (escape wildcards to prevent injection)
  if (!matchedClientId) {
    const fromName = extractName(payload.from);
    if (fromName && fromName.length > 2 && /^[a-zA-Z\s'-]+$/.test(fromName)) {
      const safeName = fromName.replace(/%/g, "").replace(/_/g, "");
      const [nameMatch] = await db
        .select({ id: clients.id })
        .from(clients)
        .where(and(eq(clients.userId, userId), ilike(clients.name, `%${safeName}%`)))
        .limit(1);
      if (nameMatch) matchedClientId = nameMatch.id;
    }
  }

  // Auto-assign to most recent active matter
  if (matchedClientId) {
    const [recentMatter] = await db
      .select({ id: matters.id })
      .from(matters)
      .where(and(
        eq(matters.userId, userId),
        eq(matters.clientId, matchedClientId),
        eq(matters.status, "active"),
      ))
      .orderBy(desc(matters.updatedAt))
      .limit(1);
    if (recentMatter) matchedMatterId = recentMatter.id;
  }

  // --- 6. Create email document ---
  const content = `Subject: ${subject}\nFrom: ${payload.from}\n\n${cleanedBody}`;

  const [doc] = await db.insert(documents).values({
    userId,
    title: subject.slice(0, 500),
    type: "email",
    status: "pending",
    rawContent: content,
    sourceId: messageId ?? null,
    clientId: matchedClientId ?? undefined,
    matterId: matchedMatterId ?? undefined,
  }).returning();

  if (!doc) {
    return NextResponse.json({ error: "Failed to create document" }, { status: 500 });
  }

  // Trigger ingestion for email body
  await inngest.send({
    name: "document/uploaded",
    data: { documentId: doc.id, userId },
  });

  // --- 7. Process attachments ---
  const attachmentIds: string[] = [];
  const validAttachments = (payload.attachments ?? []).filter(
    (a) => ALLOWED_ATTACHMENT_TYPES[a.contentType] && a.content
  );

  for (const attachment of validAttachments) {
    const buffer = Buffer.from(attachment.content, "base64");

    // Skip tiny attachments (< 100 bytes — likely empty or signature images)
    if (buffer.length < 100) continue;

    // Skip huge attachments (> 25 MB)
    if (buffer.length > 25 * 1024 * 1024) continue;

    const ext = ALLOWED_ATTACHMENT_TYPES[attachment.contentType] ?? ".bin";
    const filename = attachment.filename || `attachment${ext}`;
    const r2Key = `${userId}/${randomUUID()}/${filename}`;

    await uploadToR2(r2Key, buffer, attachment.contentType);

    const [attachDoc] = await db.insert(documents).values({
      userId,
      title: `${subject} — ${filename}`,
      type: "document",
      status: "pending",
      r2Key,
      sourceId: messageId ? `${messageId}:${filename}` : null,
      clientId: matchedClientId ?? undefined,
      matterId: matchedMatterId ?? undefined,
    }).returning();

    if (attachDoc) {
      attachmentIds.push(attachDoc.id);
      await inngest.send({
        name: "document/uploaded",
        data: { documentId: attachDoc.id, userId },
      });
    }
  }

  return NextResponse.json({
    received: true,
    documentId: doc.id,
    attachments: attachmentIds.length,
    matched: matchedClientId ? { clientId: matchedClientId, matterId: matchedMatterId } : null,
  });
}
