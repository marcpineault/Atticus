import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { campaignSends } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

// 1x1 transparent pixel
const PIXEL = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

export async function GET(req: NextRequest) {
  const sid = req.nextUrl.searchParams.get("sid");
  const redirectUrl = req.nextUrl.searchParams.get("url");

  if (sid) {
    try {
      const [send] = await db
        .select()
        .from(campaignSends)
        .where(eq(campaignSends.id, sid))
        .limit(1);

      if (send) {
        if (redirectUrl) {
          // Click tracking
          await db
            .update(campaignSends)
            .set({
              clickedAt: send.clickedAt ?? new Date(),
              status: send.status === "replied" ? "replied" : "clicked",
            })
            .where(eq(campaignSends.id, sid));
        } else {
          // Open tracking (pixel)
          await db
            .update(campaignSends)
            .set({
              openedAt: send.openedAt ?? new Date(),
              status: ["replied", "clicked"].includes(send.status) ? send.status : "opened",
            })
            .where(eq(campaignSends.id, sid));
        }
      }
    } catch {
      // Tracking should never break the user experience
    }
  }

  if (redirectUrl) {
    // Validate redirect URL to prevent open redirect attacks
    try {
      const parsed = new URL(redirectUrl);
      if (!["http:", "https:"].includes(parsed.protocol)) {
        return new NextResponse(PIXEL, { headers: { "Content-Type": "image/gif" } });
      }
    } catch {
      return new NextResponse(PIXEL, { headers: { "Content-Type": "image/gif" } });
    }
    return NextResponse.redirect(redirectUrl);
  }

  return new NextResponse(PIXEL, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
