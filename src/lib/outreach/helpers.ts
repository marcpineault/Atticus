import { createHmac } from "crypto";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://getatticus.ca";
const CALENDLY_URL = process.env.CALENDLY_URL ?? "https://calendly.com/getatticus/demo";
const UNSUBSCRIBE_SECRET = process.env.UNSUBSCRIBE_SECRET ?? "atticus-unsub-secret";

export function generateUnsubToken(email: string): string {
  return createHmac("sha256", UNSUBSCRIBE_SECRET).update(email.toLowerCase()).digest("hex").slice(0, 16);
}

export function verifyUnsubToken(email: string, token: string): boolean {
  const expected = generateUnsubToken(email);
  return token === expected;
}

export function personalize(
  template: string,
  vars: Record<string, string | undefined | null>
): string {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replaceAll(`{{${key}}}`, value ?? "");
  }
  return result;
}

export function rewriteLinks(html: string, sendId: string): string {
  return html.replace(
    /href="(https?:\/\/[^"]+)"/g,
    (_, url: string) => `href="${APP_URL}/api/track?sid=${sendId}&url=${encodeURIComponent(url)}"`
  );
}

export function buildOutreachHtml(body: string, sendId: string, email: string): string {
  const trackUrl = `${APP_URL}/api/track?sid=${sendId}`;
  const unsubUrl = `${APP_URL}/unsubscribe?email=${encodeURIComponent(email)}&token=${generateUnsubToken(email)}`;

  const rawHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin: 0; padding: 0; background: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 24px;">
    ${body.split("\n").map((p) => (p.trim() ? `<p style="margin: 0 0 14px; font-size: 15px; color: #1a1a1a; line-height: 1.6;">${p}</p>` : "")).join("\n    ")}
    <p style="margin: 16px 0 0; font-size: 15px; color: #1a1a1a; line-height: 1.6;">
      <a href="${CALENDLY_URL}" style="color: #2563eb;">Book a 15-min demo here</a>
    </p>
  </div>
  <div style="max-width: 600px; margin: 0 auto; padding: 16px 24px; border-top: 1px solid #eee;">
    <p style="margin: 0; font-size: 11px; color: #999; line-height: 1.5;">
      Marc Pineault - Atticus - Toronto, Ontario, Canada<br>
      <a href="${unsubUrl}" style="color: #999;">Unsubscribe</a>
    </p>
  </div>
  <img src="${trackUrl}" width="1" height="1" style="display:none" alt="" />
</body>
</html>`;

  return rewriteLinks(rawHtml, sendId);
}

/** Check if CASL implied consent is still valid (6-month window) */
export function isConsentValid(firstContactedAt: Date | null): boolean {
  if (!firstContactedAt) return true;
  const sixMonthsLater = new Date(firstContactedAt);
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);
  return new Date() < sixMonthsLater;
}
