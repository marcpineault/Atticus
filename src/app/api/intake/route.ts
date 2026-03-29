import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users, clients } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { resend, FROM_EMAIL } from "@/lib/email/client";
import { APP_URL } from "@/lib/stripe/client";

// Strip null bytes that PostgreSQL rejects with "invalid byte sequence for UTF-8: 0x00"
const stripNulls = (s: string) => s.replace(/\0/g, "");

const intakeSchema = z.object({
  userId: z.string().uuid(),
  name: z.string().min(1).max(200).transform(stripNulls),
  email: z.string().email().max(200).transform(stripNulls),
  phone: z.string().max(50).transform(stripNulls).optional(),
  matterType: z.string().max(100).transform(stripNulls).optional(),
  message: z.string().max(2000).transform(stripNulls).optional(),
});

export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      // Malformed or empty JSON body — treat as a bad request
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }
    const input = intakeSchema.parse(body);

    // Look up the lawyer
    const [user] = await db
      .select({ id: users.id, email: users.email, name: users.name, firmName: users.firmName })
      .from(users)
      .where(eq(users.id, input.userId))
      .limit(1);

    if (!user) {
      return NextResponse.json({ error: "Invalid intake link." }, { status: 404 });
    }

    // Create a pending client record
    const [client] = await db
      .insert(clients)
      .values({
        userId: user.id,
        name: input.name,
        email: input.email,
        phone: input.phone,
        notes: [
          input.matterType ? `Matter type: ${input.matterType}` : null,
          input.message ? `Initial inquiry:\n${input.message}` : null,
        ].filter(Boolean).join("\n\n") || undefined,
      })
      .returning({ id: clients.id });

    // Notify the lawyer
    if (user.email) {
      const firm = user.firmName ?? user.name ?? "your firm";
      await resend.emails.send({
        from: FROM_EMAIL,
        to: user.email,
        subject: `New client inquiry — ${input.name}`,
        html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="max-width:600px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
  <div style="background:#0f172a;padding:20px 28px;">
    <p style="margin:0;color:#fff;font-size:14px;font-weight:600;">New Client Inquiry — ${firm}</p>
  </div>
  <div style="padding:24px 28px;">
    <p style="margin:0 0 16px;font-size:14px;color:#111;">A new prospective client has submitted an intake form.</p>
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin:0 0 16px;">
      <tr><td style="padding:6px 0;color:#94a3b8;width:120px;">Name</td><td style="padding:6px 0;font-weight:500;">${input.name}</td></tr>
      <tr><td style="padding:6px 0;color:#94a3b8;">Email</td><td style="padding:6px 0;"><a href="mailto:${input.email}" style="color:#6366f1;">${input.email}</a></td></tr>
      ${input.phone ? `<tr><td style="padding:6px 0;color:#94a3b8;">Phone</td><td style="padding:6px 0;">${input.phone}</td></tr>` : ""}
      ${input.matterType ? `<tr><td style="padding:6px 0;color:#94a3b8;">Matter Type</td><td style="padding:6px 0;">${input.matterType}</td></tr>` : ""}
    </table>
    ${input.message ? `<div style="background:#f8fafc;border-radius:6px;padding:14px 16px;margin:0 0 16px;"><p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px;">Message</p><p style="margin:0;font-size:13px;color:#374151;white-space:pre-wrap;">${input.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p></div>` : ""}
    <p style="margin:0 0 16px;font-size:14px;color:#374151;">This contact has been added to your Atticus client list.</p>
    ${client?.id ? `<a href="${APP_URL}/clients/${client.id}" style="display:inline-block;background:#0f172a;color:#fff;text-decoration:none;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:500;margin-bottom:16px;">View Client Record →</a>` : ""}
    <p style="margin:0;font-size:12px;color:#9ca3af;">Sent via Atticus · AI Practice Intelligence</p>
  </div>
</div>
</body></html>`,
      });
    }

    return NextResponse.json({ success: true, clientId: client?.id });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }
    console.error("Intake error:", err);
    return NextResponse.json({ error: "An error occurred. Please try again." }, { status: 500 });
  }
}
