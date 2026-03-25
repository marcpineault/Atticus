import { Inngest, eventType, staticSchema } from "inngest";

export const documentUploaded = eventType("document/uploaded", {
  schema: staticSchema<{ documentId: string; userId: string }>(),
});

export const audioUploaded = eventType("audio/uploaded", {
  schema: staticSchema<{ documentId: string; userId: string; r2Key: string }>(),
});

export const inngest = new Inngest({
  id: "counsel-ai",
});
