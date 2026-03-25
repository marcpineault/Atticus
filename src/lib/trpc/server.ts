import "server-only";

import { createTRPCContext, createCallerFactory } from "@/server/trpc";
import { appRouter } from "@/server/routers/_app";

const createCaller = createCallerFactory(appRouter);

export async function serverClient() {
  const ctx = await createTRPCContext();
  return createCaller(ctx);
}
