import { initTRPC, TRPCError } from "@trpc/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { cache } from "react";
import { resend, FROM_EMAIL } from "@/lib/email/client";
import { buildWelcomeEmail } from "@/lib/email/templates";

export const createTRPCContext = cache(async () => {
  const { userId: clerkId } = await auth();

  return {
    db,
    clerkId,
  };
});

const t = initTRPC.context<typeof createTRPCContext>().create();

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure;

// Protected procedure — requires Clerk auth, resolves or creates internal user
export const protectedProcedure = t.procedure.use(async (opts) => {
  const { clerkId, db: ctxDb } = opts.ctx;

  if (!clerkId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  // Get or auto-create internal user from Clerk ID
  let [user] = await ctxDb
    .select()
    .from(users)
    .where(eq(users.clerkId, clerkId))
    .limit(1);

  if (!user) {
    // First sign-in: auto-create user record from Clerk profile
    const clerkUser = await currentUser();
    if (!clerkUser) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    // Generate a unique intake email address for this user
    const intakeDomain = process.env.INTAKE_EMAIL_DOMAIN ?? "intake.getatticus.ca";
    const emailLocalPart = clerkUser.emailAddresses[0]?.emailAddress
      ?.split("@")[0]
      ?.toLowerCase()
      ?.replace(/[^a-z0-9]/g, "") ?? "user";
    // Add random suffix to ensure uniqueness
    const suffix = Math.random().toString(36).slice(2, 7);
    const intakeEmail = `${emailLocalPart}-${suffix}@${intakeDomain}`;

    const [newUser] = await ctxDb
      .insert(users)
      .values({
        clerkId,
        email: clerkUser.emailAddresses[0]?.emailAddress ?? "",
        name:
          `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim() ||
          null,
        intakeEmail,
      })
      .returning();

    user = newUser!;

    // Send welcome email (fire-and-forget — don't block auth on email failure)
    if (user.email) {
      resend.emails.send({
        from: FROM_EMAIL,
        to: user.email,
        subject: "Welcome to Atticus — your AI executive assistant",
        ...buildWelcomeEmail({
          userName: user.name ?? user.email,
          intakeEmail: user.intakeEmail ?? "",
        }),
      }).catch(() => { /* non-critical */ });
    }
  }

  // Update lastActiveAt
  await ctxDb
    .update(users)
    .set({ lastActiveAt: new Date() })
    .where(eq(users.id, user.id));

  return opts.next({
    ctx: {
      ...opts.ctx,
      userId: user.id,
      user,
    },
  });
});
