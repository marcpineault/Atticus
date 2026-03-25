// src/types/transcription.ts
import { z } from "zod";

export const transcriptionResponseSchema = z.object({
  transcript: z.string(),
  duration_seconds: z.number(),
  language: z.string(),
});

export type TranscriptionResponse = z.infer<typeof transcriptionResponseSchema>;
