// src/types/upload.ts
import { z } from "zod";

const ALLOWED_EXTENSIONS = ["pdf", "docx", "txt", "mp3", "mp4", "m4a", "wav", "webm", "ogg"];
const AUDIO_EXTENSIONS = ["mp3", "mp4", "m4a", "wav", "webm", "ogg"];

export function getFileExtension(fileName: string): string {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

export function isAudioFile(fileName: string): boolean {
  return AUDIO_EXTENSIONS.includes(getFileExtension(fileName));
}

export function isAllowedFile(fileName: string): boolean {
  return ALLOWED_EXTENSIONS.includes(getFileExtension(fileName));
}

export const uploadMetadataSchema = z.object({
  clientId: z.string().uuid().optional(),
  matterId: z.string().uuid().optional(),
  title: z.string().optional(),
  documentType: z.enum(["email", "document", "meeting", "text_message", "calendar"]).optional(),
});
