// src/lib/ingestion/clean-email-thread.ts
import { anthropic } from "@/lib/ai/anthropic";

/**
 * Uses Claude Haiku to extract only the newest message from an email thread.
 * Strips quoted reply chains, forwarded headers, and signature blocks.
 * Returns the cleaned text, or the original if cleaning fails.
 */
export async function cleanEmailThread(rawBody: string): Promise<string> {
  // Short emails don't need cleaning — no reply chain possible
  if (rawBody.length < 500) return rawBody;

  // Quick heuristic: if no reply indicators, skip the API call
  const hasReplyIndicators =
    /^>+ /m.test(rawBody) ||
    /^On .+ wrote:$/m.test(rawBody) ||
    /^-{3,}\s*Original Message\s*-{3,}/im.test(rawBody) ||
    /^From:\s.+\nSent:\s/im.test(rawBody) ||
    /^Begin forwarded message:/im.test(rawBody);

  if (!hasReplyIndicators) return rawBody;

  try {
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4096,
      system: `You are an email parser. Extract ONLY the newest message from this email thread.

Rules:
- Remove all quoted reply text (lines starting with ">")
- Remove "On [date], [person] wrote:" headers and everything below them
- Remove "--- Original Message ---" blocks and everything below
- Remove "Begin forwarded message:" blocks — but keep the forwarded content if it IS the newest message
- Remove email signatures (lines after "-- " or common sign-off patterns)
- Keep the Subject and From lines if they appear at the very top
- If the email has no reply chain, return it as-is
- Return ONLY the extracted text, no commentary or explanation`,
      messages: [{ role: "user", content: rawBody.slice(0, 15000) }],
    });

    const content = message.content[0];
    if (content?.type === "text" && content.text.trim().length > 20) {
      return content.text.trim();
    }
    return rawBody;
  } catch {
    // If Haiku fails, fall back to raw body — entity extraction handles noise well
    return rawBody;
  }
}
