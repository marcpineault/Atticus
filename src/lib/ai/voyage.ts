// src/lib/ai/voyage.ts
import "server-only";

const VOYAGE_API_URL = "https://api.voyageai.com/v1/embeddings";

// Background ingestion jobs (Inngest) are not bounded by a short HTTP deadline
// and can legitimately take longer on large batches or under provider load.
// Route handlers that need a tighter deadline should pass timeoutMs explicitly.
const DEFAULT_TIMEOUT_MS = 60_000; // 60s — safe for background jobs
const ROUTE_TIMEOUT_MS = 10_000;   // 10s — used by embedText() called from route.ts

export async function embedTexts(
  texts: string[],
  { timeoutMs = DEFAULT_TIMEOUT_MS }: { timeoutMs?: number } = {}
): Promise<number[][]> {
  // Fail fast with a clear message rather than sending "Bearer undefined".
  const apiKey = process.env.VOYAGE_API_KEY;
  if (!apiKey) {
    throw new Error("VOYAGE_API_KEY environment variable is not set");
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  let response: Response;
  try {
    response = await fetch(VOYAGE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        input: texts,
        model: "voyage-law-2",
      }),
      signal: controller.signal,
    });
  } catch (err) {
    if ((err as { name?: string }).name === "AbortError") {
      throw new Error(`Voyage AI request timed out after ${timeoutMs}ms`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }

  if (!response.ok) {
    const error = await response.text().catch(() => "(unreadable body)");
    throw new Error(`Voyage AI embedding failed: ${response.status} ${error}`);
  }

  const data = (await response.json()) as {
    data: Array<{ embedding: number[] }>;
  };

  if (!Array.isArray(data?.data)) {
    throw new Error("Voyage AI returned an unexpected response shape");
  }

  return data.data.map((d) => d.embedding);
}

// embedText is only called from route handlers where we want a tight deadline
// so that a slow Voyage response doesn't silently consume the full maxDuration
// budget. Background callers should call embedTexts() directly and pass their
// own timeoutMs (or rely on the 60s default).
export async function embedText(text: string): Promise<number[]> {
  const [embedding] = await embedTexts([text], { timeoutMs: ROUTE_TIMEOUT_MS });
  if (!embedding) {
    throw new Error("No embedding returned from Voyage AI");
  }
  return embedding;
}
