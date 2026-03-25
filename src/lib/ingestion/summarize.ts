// src/lib/ingestion/summarize.ts
import { anthropic } from "@/lib/ai/anthropic";

const TYPE_CONTEXT: Record<string, string> = {
  email: "This is an email communication.",
  voice_note: "This is a voice note or audio transcription.",
  meeting: "This is a meeting transcript or notes.",
  document: "This is a legal document or contract.",
  text_message: "This is a text message or chat transcript.",
  calendar: "This is a calendar entry or scheduling communication.",
};

export async function summarizeDocument(text: string, documentType?: string): Promise<string> {
  const typeContext = documentType ? (TYPE_CONTEXT[documentType] ?? "") : "";

  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 300,
    system: `You are a legal document analyst. ${typeContext} Provide a 2-3 sentence summary optimized for legal context. Focus on key parties, issues, dates, and obligations.`,
    messages: [
      {
        role: "user",
        content: text.slice(0, 15000),
      },
    ],
  });

  const content = message.content[0];
  if (!content || content.type !== "text") {
    throw new Error("Unexpected response type from Claude");
  }

  return content.text;
}
