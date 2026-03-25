import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { campaignSends, campaigns, prospects } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import { anthropic } from "@/lib/ai/anthropic";
import { verifyResendWebhook } from "@/lib/email/verify-webhook";

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const verified = verifyResendWebhook(rawBody, {
    svixId: req.headers.get("svix-id"),
    svixTimestamp: req.headers.get("svix-timestamp"),
    svixSignature: req.headers.get("svix-signature"),
  });

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

  const [send] = await db
    .select()
    .from(campaignSends)
    .where(eq(campaignSends.id, sendId))
    .limit(1);

  if (!send) return NextResponse.json({ ok: true });

  // Update send status to replied
  await db
    .update(campaignSends)
    .set({ status: "replied", repliedAt: new Date() })
    .where(eq(campaignSends.id, sendId));

  // Update campaign reply count (use sql increment)
  await db
    .update(campaigns)
    .set({
      totalReplied: sql`${campaigns.totalReplied} + 1`,
      updatedAt: new Date(),
    })
    .where(eq(campaigns.id, send.campaignId));

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
