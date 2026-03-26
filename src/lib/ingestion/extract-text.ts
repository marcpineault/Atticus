// src/lib/ingestion/extract-text.ts
import { PDFParse } from "pdf-parse";
import mammoth from "mammoth";

export async function extractText(
  buffer: Buffer,
  fileName: string
): Promise<string> {
  // "document".split(".").pop() returns "document" (not undefined) when there
  // is no dot — explicitly check the extension differs from the full filename.
  const raw = fileName.split(".").pop()?.toLowerCase();
  const ext = raw !== fileName.toLowerCase() ? raw : undefined;

  if (!ext) {
    throw new Error("Cannot determine file type: no extension found");
  }

  switch (ext) {
    case "pdf": {
      // pdf-parse v2.x exports a named class PDFParse, not a default function.
      // Correct API: new PDFParse({ data: buffer }).getText()
      try {
        const parser = new PDFParse({ data: buffer });
        const result = await parser.getText();
        return result.text;
      } catch (err) {
        throw new Error(
          `Failed to parse PDF: ${err instanceof Error ? err.message : "unknown error"}`
        );
      }
    }
    case "docx": {
      try {
        const result = await mammoth.extractRawText({ buffer });
        return result.value;
      } catch (err) {
        throw new Error(
          `Failed to parse DOCX: ${err instanceof Error ? err.message : "unknown error"}`
        );
      }
    }
    case "txt": {
      try {
        return buffer.toString("utf-8");
      } catch (err) {
        throw new Error(
          `Failed to read text file: ${err instanceof Error ? err.message : "unknown error"}`
        );
      }
    }
    default:
      throw new Error(`Unsupported file type: .${ext}`);
  }
}
