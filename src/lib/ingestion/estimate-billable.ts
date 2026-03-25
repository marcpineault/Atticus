// src/lib/ingestion/estimate-billable.ts
type DocumentType =
  | "email"
  | "voice_note"
  | "meeting"
  | "document"
  | "text_message"
  | "calendar";

interface EstimateInput {
  type: DocumentType;
  wordCount: number;
  durationSeconds?: number;
}

export function estimateBillableMinutes(input: EstimateInput): number {
  switch (input.type) {
    case "voice_note":
    case "meeting":
      return Math.ceil((input.durationSeconds ?? 0) / 60);
    case "email":
      return Math.max(2, Math.ceil(input.wordCount / 200));
    case "document":
    case "text_message":
    case "calendar":
      return Math.max(1, Math.ceil(input.wordCount / 150));
    default:
      return 0;
  }
}
