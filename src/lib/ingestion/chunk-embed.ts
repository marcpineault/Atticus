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
  // Skip empty or whitespace-only text.
  if (!text.trim()) return [];

  const chunkChars = CHUNK_SIZE * CHARS_PER_TOKEN;
  const overlapChars = CHUNK_OVERLAP * CHARS_PER_TOKEN;
  const chunks: string[] = [];

  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + chunkChars, text.length);
    const chunk = text.slice(start, end);
    // Don't store chunks that are purely whitespace.
    if (chunk.trim()) {
      chunks.push(chunk);
    }
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
    const batchEmbeddings = await embedTexts(batch);

    // Guard against Voyage returning a different number of embeddings than inputs.
    if (batchEmbeddings.length !== batch.length) {
      throw new Error(
        `Voyage AI returned ${batchEmbeddings.length} embeddings for ${batch.length} chunks in batch starting at index ${i}`
      );
    }

    allEmbeddings.push(...batchEmbeddings);
  }

  // Final sanity check before mapping.
  if (allEmbeddings.length !== textChunks.length) {
    throw new Error(
      `Embedding count mismatch: expected ${textChunks.length}, got ${allEmbeddings.length}`
    );
  }

  return textChunks.map((content, index) => ({
    content,
    chunkIndex: index,
    // Safe to assert non-null here: the length check above guarantees alignment.
    embedding: allEmbeddings[index]!,
  }));
}
