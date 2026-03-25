// src/lib/ingestion/transcribe.ts
import OpenAI from "openai";
import { toFile } from "openai/uploads";
import type { TranscriptionResponse } from "@/types/transcription";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function transcribeAudio(
  audioBuffer: Buffer,
  fileName: string
): Promise<TranscriptionResponse> {
  const file = await toFile(audioBuffer, fileName);

  const response = await openai.audio.transcriptions.create({
    model: "whisper-1",
    file,
    response_format: "verbose_json",
  });

  return {
    transcript: response.text,
    duration_seconds: response.duration ?? 0,
    language: response.language ?? "en",
  };
}
