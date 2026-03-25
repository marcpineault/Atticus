import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { campaigns, campaignSends, emailUnsubscribes } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import { verifyResendWebhook } from "@/lib/email/verify-webhook";

// Status hierarchy for watermark logic
const STATUS_RANK: Record<string, number> = {
  pending: 0,
  sent: 1,
  opened: 2,
  clicked: 3,
  replied: 4,
  bounced: 0,
  unsubscribed: 0,
  completed: 0,
};

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
  const { type, data } = body as { type: string; data: Record<string, unknown> };

  const resendId = data?.email_id as string | undefined;
  if (!resendId) return NextResponse.json({ ok: true });

  const [send] = await db
    .select()
    .from(campaignSends)
    .where(eq(campaignSends.resendId, resendId))
    .limit(1);

  if (!send) return NextResponse.json({ ok: true });

  const now = new Date();

  switch (type) {
    case "email.delivered":
      if ((STATUS_RANK[send.status] ?? 0) < (STATUS_RANK["sent"] ?? 1)) {
        await db
          .update(campaignSends)
          .set({ status: "sent", sentAt: send.sentAt ?? now })
          .where(eq(campaignSends.id, send.id));
      }
      break;

    case "email.opened":
      await db
        .update(campaignSends)
        .set({
          openedAt: send.openedAt ?? now,
          status: (STATUS_RANK[send.status] ?? 0) < (STATUS_RANK["opened"] ?? 2) ? "opened" : send.status,
        })
        .where(eq(campaignSends.id, send.id));
      await db
        .update(campaigns)
        .set({ totalOpened: sql`${campaigns.totalOpened} + 1`, updatedAt: now })
        .where(eq(campaigns.id, send.campaignId));
      break;

    case "email.clicked":
      await db
        .update(campaignSends)
        .set({
          clickedAt: send.clickedAt ?? now,
          status: (STATUS_RANK[send.status] ?? 0) < (STATUS_RANK["clicked"] ?? 3) ? "clicked" : send.status,
        })
        .where(eq(campaignSends.id, send.id));
      await db
        .update(campaigns)
        .set({ totalClicked: sql`${campaigns.totalClicked} + 1`, updatedAt: now })
        .where(eq(campaigns.id, send.campaignId));
      break;

    case "email.bounced":
      await db
        .update(campaignSends)
        .set({ status: "bounced" })
        .where(eq(campaignSends.id, send.id));
      break;

    case "email.complained":
      await db
        .update(campaignSends)
        .set({ status: "unsubscribed" })
        .where(eq(campaignSends.id, send.id));
      await db
        .update(campaigns)
        .set({ totalUnsubscribed: sql`${campaigns.totalUnsubscribed} + 1`, updatedAt: now })
        .where(eq(campaigns.id, send.campaignId));
      if (data?.to && Array.isArray(data.to) && data.to[0]) {
        await db
          .insert(emailUnsubscribes)
          .values({ email: String(data.to[0]).toLowerCase() })
          .onConflictDoNothing();
      }
      break;
  }

  return NextResponse.json({ ok: true });
}
