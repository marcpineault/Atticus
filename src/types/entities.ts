// src/types/entities.ts
import { z } from "zod";

export const extractedEntitiesSchema = z.object({
  clientNames: z.array(z.string()),
  dates: z.array(
    z.object({
      value: z.string(),
      context: z.string(),
    })
  ),
  dollarAmounts: z.array(
    z.object({
      value: z.string(),
      context: z.string(),
    })
  ),
  actionItems: z.array(
    z.object({
      value: z.string(),
      context: z.string(),
    })
  ),
  deadlines: z.array(
    z.object({
      value: z.string(),
      dueDate: z.string().optional(),
      context: z.string(),
    })
  ),
  caseReferences: z.array(
    z.object({
      value: z.string(),
      context: z.string(),
    })
  ),
});

export type ExtractedEntities = z.infer<typeof extractedEntitiesSchema>;
