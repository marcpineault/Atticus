import { Webhook } from "svix";

const RESEND_WEBHOOK_SECRET = process.env.RESEND_WEBHOOK_SECRET;

/**
 * Verify Resend inbound webhook using Svix signature verification.
 * Resend signs webhooks via Svix — requires svix-id, svix-timestamp, svix-signature headers.
 * Returns the verified payload if valid, or null if verification fails.
 * If no webhook secret is configured (dev mode), skips verification and parses JSON directly.
 */
export function verifyResendWebhook(
  rawBody: string,
  headers: {
    svixId: string | null;
    svixTimestamp: string | null;
    svixSignature: string | null;
  }
): unknown | null {
  if (!RESEND_WEBHOOK_SECRET) {
    // No secret configured — skip verification (dev mode)
    try {
      return JSON.parse(rawBody);
    } catch {
      return null;
    }
  }

  if (!headers.svixId || !headers.svixTimestamp || !headers.svixSignature) {
    return null;
  }

  try {
    const wh = new Webhook(RESEND_WEBHOOK_SECRET);
    return wh.verify(rawBody, {
      "svix-id": headers.svixId,
      "svix-timestamp": headers.svixTimestamp,
      "svix-signature": headers.svixSignature,
    });
  } catch {
    return null;
  }
}
