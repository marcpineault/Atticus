// src/lib/ai/retrieve.ts
import "server-only";
import { db } from "@/lib/db";
import { documentChunks, documents } from "@/lib/db/schema";
import { and, eq, sql } from "drizzle-orm";
import { embedText } from "./voyage";

export interface RetrievedChunk {
  content: string;
  documentId: string;
  documentTitle: string | null;
  chunkIndex: number;
  similarity: number;
}

export async function retrieveChunks(
  query: string,
  userId: string,
  clientId?: string,
  limit: number = 8,
  matterId?: string
): Promise<RetrievedChunk[]> {
  // BUG-3 FIX: Embedding an empty query produces a meaningless (or erroneous)
  // similarity ranking. Short-circuit early so callers always get [] for empty
  // queries rather than triggering a Voyage API call with no useful payload.
  if (!query.trim()) return [];

  const queryEmbedding = await embedText(query);

  const conditions = [eq(documentChunks.userId, userId)];
  if (clientId) {
    conditions.push(eq(documentChunks.clientId, clientId));
  }
  if (matterId) {
    conditions.push(eq(documents.matterId, matterId));
  }

  const results = await db
    .select({
      content: documentChunks.content,
      documentId: documentChunks.documentId,
      documentTitle: documents.title,
      chunkIndex: documentChunks.chunkIndex,
      similarity: sql<number>`1 - (${documentChunks.embedding} <=> ${JSON.stringify(queryEmbedding)}::vector)`,
    })
    .from(documentChunks)
    .innerJoin(documents, eq(documentChunks.documentId, documents.id))
    .where(and(...conditions))
    .orderBy(
      sql`${documentChunks.embedding} <=> ${JSON.stringify(queryEmbedding)}::vector`
    )
    .limit(limit);

  // Filter out low-relevance chunks (cosine similarity < 0.25 means very poor match)
  return results.filter(r => r.similarity >= 0.25);
}
