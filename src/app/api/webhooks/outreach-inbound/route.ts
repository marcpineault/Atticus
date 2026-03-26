import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { campaignSends, campaigns, prospects } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import { anthropic } from "@/lib/ai/anthropic";
import { verifyResendWebhook } from "@/lib/email/verify-webhook";

export async function POST(req: NextRequest) {
  let rawBody: string;
  try {
    rawBody = await req.text();
  } catch {
    return NextResponse.json({ error: "Failed to read body" }, { status: 400 });
  }

  let verified: ReturnType<typeof verifyResendWebhook>;
  try {
    verified = verifyResendWebhook(rawBody, {
      svixId: req.headers.get("svix-id"),
      svixTimestamp: req.headers.get("svix-timestamp"),
      svixSignature: req.headers.get("svix-signature"),
    });
  } catch (err) {
    console.error("[outreach-inbound] Webhook verification threw:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  if (!verified) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const body = verified as Record<string, unknown>;

  const toArr = Array.isArray(body.to) ? body.to : [];
  const to = (toArr[0] as string) ?? "";
  const text = (body.text as string) ?? (body.html as string) ?? "";

  // Extract sendId from reply-to address: reply+{sendId}@outreach.getatticus.ca
  const match = String(to).match(/reply\+([a-f0-9-]+)@/i);
  if (!match) return NextResponse.json({ ok: true });

  const sendId = match[1]!;

  let send: typeof import("@/lib/db/schema").campaignSends.$inferSelect | undefined;
  try {
    const [row] = await db
      .select()
      .from(campaignSends)
      .where(eq(campaignSends.id, sendId))
      .limit(1);
    send = row;
  } catch (err) {
    console.error("[outreach-inbound] DB lookup failed:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }

  if (!send) return NextResponse.json({ ok: true });

  // If already marked replied, this is a duplicate delivery — ack and skip.
  if (send.status === "replied") return NextResponse.json({ ok: true });

  try {
    // Wrap both writes in a transaction so a partial failure doesn't
    // permanently lose the campaign counter increment on Resend's retry.
    await db.transaction(async (tx) => {
      await tx
        .update(campaignSends)
        .set({ status: "replied", repliedAt: new Date() })
        .where(eq(campaignSends.id, sendId));

      await tx
        .update(campaigns)
        .set({
          totalReplied: sql`${campaigns.totalReplied} + 1`,
          updatedAt: new Date(),
        })
        .where(eq(campaigns.id, send.campaignId));
    });
  } catch (err) {
    console.error("[outreach-inbound] DB update failed:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }

  // Classify reply sentiment with Claude Haiku
  try {
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 50,
      system: "Classify the sentiment of this email reply to a cold outreach message. Reply with exactly one word: POSITIVE (interested, wants to learn more, agrees to demo), NEGATIVE (not interested, asks to stop), or NEUTRAL (out of office, unclear, asking a question).",
      messages: [{ role: "user", content: String(text).slice(0, 1000) }],
    });

    const sentiment = (message.content[0]?.type === "text" ? message.content[0].text : "").trim().toUpperCase();

    if (sentiment === "POSITIVE") {
      await db
        .update(prospects)
        .set({ stage: "consultation_booked", updatedAt: new Date() })
        .where(eq(prospects.id, send.prospectId));
    }
  } catch {
    // Sentiment classification failure should not break reply tracking
  }

  return NextResponse.json({ ok: true });
}
