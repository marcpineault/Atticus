// src/lib/inngest/functions.ts
import { ingestDocument } from "./ingest-document";
import { transcribeAudioFn } from "./transcribe-audio";
import { dailyBriefing } from "./daily-briefing";
import { weeklyDigest } from "./weekly-digest";
import { deadlineEscalation } from "./deadline-escalation";
import { markOverdueInvoices } from "./overdue-invoices";
import { outreachCron } from "./outreach-cron";

export const inngestFunctions = [ingestDocument, transcribeAudioFn, dailyBriefing, weeklyDigest, deadlineEscalation, markOverdueInvoices, outreachCron];
