// src/lib/ingestion/chunk-embed.ts
import { embedTexts } from "@/lib/ai/voyage";

const CHUNK_SIZE = 512;
const CHUNK_OVERLAP = 50;
const CHARS_PER_TOKEN = 4;

interface Chunk {
  content: string;
  chunkIndex: number;
  embedding: number[];
}

export function splitIntoChunks(text: string): string[] {
  const chunkChars = CHUNK_SIZE * CHARS_PER_TOKEN;
  const overlapChars = CHUNK_OVERLAP * CHARS_PER_TOKEN;
  const chunks: string[] = [];

  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + chunkChars, text.length);
    chunks.push(text.slice(start, end));
    if (end === text.length) break;
    start = end - overlapChars;
  }

  return chunks;
}

export async function chunkAndEmbed(text: string): Promise<Chunk[]> {
  const textChunks = splitIntoChunks(text);

  if (textChunks.length === 0) {
    return [];
  }

  const BATCH_SIZE = 20;
  const allEmbeddings: number[][] = [];

  for (let i = 0; i < textChunks.length; i += BATCH_SIZE) {
    const batch = textChunks.slice(i, i + BATCH_SIZE);
    const embeddings = await embedTexts(batch);
    allEmbeddings.push(...embeddings);
  }

  return textChunks.map((content, index) => ({
    content,
    chunkIndex: index,
    embedding: allEmbeddings[index]!,
  }));
}
