import { createTRPCRouter } from "@/server/trpc";
import { todayRouter } from "./today";
import { clientsRouter } from "./clients";
import { mattersRouter } from "./matters";
import { documentsRouter } from "./documents";
import { chatRouter } from "./chat";
import { usersRouter } from "./users";
import { billingRouter } from "./billing";
import { aiRouter } from "./ai";
import { invoicesRouter } from "./invoices";
import { analyticsRouter } from "./analytics";
import { timeEntriesRouter } from "./time-entries";
import { templatesRouter } from "./templates";
import { trustRouter } from "./trust";
import { conflictsRouter } from "./conflicts";
import { prospectsRouter } from "./prospects";
import { outreachRouter } from "./outreach";

export const appRouter = createTRPCRouter({
  today: todayRouter,
  clients: clientsRouter,
  matters: mattersRouter,
  documents: documentsRouter,
  chat: chatRouter,
  users: usersRouter,
  billing: billingRouter,
  ai: aiRouter,
  invoices: invoicesRouter,
  analytics: analyticsRouter,
  timeEntries: timeEntriesRouter,
  templates: templatesRouter,
  trust: trustRouter,
  conflicts: conflictsRouter,
  prospects: prospectsRouter,
  outreach: outreachRouter,
});

export type AppRouter = typeof appRouter;
