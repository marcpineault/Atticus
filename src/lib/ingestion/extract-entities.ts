// src/lib/ingestion/extract-entities.ts
import { anthropic } from "@/lib/ai/anthropic";
import {
  extractedEntitiesSchema,
  type ExtractedEntities,
} from "@/types/entities";

const TYPE_INSTRUCTIONS: Record<string, string> = {
  email: "Pay special attention to sender/recipient names, reply deadlines, commitments made, and follow-up action items.",
  meeting: "Pay special attention to attendees, decisions made, assigned tasks, and follow-up deadlines.",
  voice_note: "Pay special attention to persons mentioned, dates referenced, tasks mentioned, and any commitments.",
  document: "Pay special attention to parties to the agreement, key obligations, payment terms, and contractual deadlines.",
  text_message: "Pay special attention to persons mentioned, quick commitments, and time references.",
  calendar: "Pay special attention to attendees, event dates, locations, and preparation tasks.",
};

const BASE_PROMPT = `You are a legal document analyst. Extract structured information from the following document text.

Return a JSON object with these fields:
- clientNames: array of person/organization names mentioned
- dates: array of {value, context} for dates mentioned
- dollarAmounts: array of {value, context} for monetary amounts
- actionItems: array of {value, context} for tasks or actions needed
- deadlines: array of {value, dueDate (ISO format if determinable), context} for deadlines
- caseReferences: array of {value, context} for case numbers, file numbers, court references

Return ONLY valid JSON, no other text.`;

export async function extractEntities(
  text: string,
  documentType?: string
): Promise<ExtractedEntities> {
  const typeInstruction = documentType ? (TYPE_INSTRUCTIONS[documentType] ?? "") : "";
  const systemPrompt = typeInstruction
    ? `${BASE_PROMPT}\n\n${typeInstruction}`
    : BASE_PROMPT;

  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 4096,
    system: systemPrompt,
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

  const raw = content.text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
  const parsed = JSON.parse(raw) as unknown;
  return extractedEntitiesSchema.parse(parsed);
}
