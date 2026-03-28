// src/lib/ingestion/generate-outputs.ts
import { anthropic } from "@/lib/ai/anthropic";

export interface GeneratedOutputs {
  memo: string;
  taskList: string;
  followUpEmail: string;
}

export async function generateDocumentOutputs(
  transcript: string,
  documentTitle: string
): Promise<GeneratedOutputs> {
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2000,
    system: `You are a legal practice assistant. Given a meeting or call transcript, generate three formal outputs for a lawyer's file management.

Return a JSON object with exactly these three keys:
- "memo": A formal internal file memo. Include the date, participants mentioned, key points discussed, decisions made, and next steps. Professional legal tone. 1-2 paragraphs.
- "taskList": A numbered list of action items extracted from the transcript. For each item include: the task description, the owner if mentioned, and the due date if mentioned. One item per line.
- "followUpEmail": A professional follow-up email to the client. Summarize what was discussed, confirm the next steps, and request any needed information. Ready to send with minor edits. Include subject line as the first line prefixed with "Subject: ".

Respond with ONLY valid JSON. No markdown code fences, no extra text outside the JSON.`,
    messages: [
      {
        role: "user",
        content: `Document: ${documentTitle}\n\nTranscript:\n${transcript.slice(0, 40000)}`,
      },
    ],
  });

  const content = message.content[0];
  if (!content || content.type !== "text") {
    throw new Error("Unexpected response type from Claude");
  }

  try {
    const parsed = JSON.parse(content.text) as Record<string, unknown>;
    return {
      memo: typeof parsed.memo === "string" ? parsed.memo : "",
      taskList: typeof parsed.taskList === "string" ? parsed.taskList : "",
      followUpEmail: typeof parsed.followUpEmail === "string" ? parsed.followUpEmail : "",
    };
  } catch {
    // JSON parse failed — store raw text in memo so nothing is lost
    return { memo: content.text, taskList: "", followUpEmail: "" };
  }
}
