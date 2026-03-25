import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { emailUnsubscribes } from "@/lib/db/schema";
import { verifyUnsubToken } from "@/lib/outreach/helpers";

export async function POST(req: NextRequest) {
  const { email, reason, token } = await req.json();
  if (!email || !token) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  if (!verifyUnsubToken(email, token)) return NextResponse.json({ error: "Invalid token" }, { status: 403 });

  try {
    await db.insert(emailUnsubscribes).values({
      email: email.toLowerCase(),
      reason: reason ?? null,
    }).onConflictDoNothing();
  } catch {
    // Already unsubscribed
  }

  return NextResponse.json({ ok: true });
}
