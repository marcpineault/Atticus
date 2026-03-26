import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { TRPCError } from "@trpc/server";
import { users } from "@/lib/db/schema";
import { eq, isNull, and } from "drizzle-orm";
import { z } from "zod";

const painFocusSchema = z.enum(["deadlines", "intake", "billing", "documents"]);

export const usersRouter = createTRPCRouter({
  getSettings: protectedProcedure.query(async ({ ctx }) => {
    const [user] = await ctx.db.select().from(users).where(eq(users.id, ctx.userId)).limit(1);
    if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
    return user;
  }),

  recordAiConsent: protectedProcedure
    .mutation(async ({ ctx }) => {
      await ctx.db.update(users)
        .set({ aiConsentAt: new Date() })
        .where(eq(users.id, ctx.userId));
    }),

  generateIntakeEmail: protectedProcedure
    .mutation(async ({ ctx }) => {
      // Check if user already has one
      const [user] = await ctx.db.select({ intakeEmail: users.intakeEmail })
        .from(users).where(eq(users.id, ctx.userId)).limit(1);
      if (user?.intakeEmail) return { intakeEmail: user.intakeEmail };

      // Generate a short unique ID (5 chars, alphanumeric lowercase)
      const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
      let shortId: string;
      let attempts = 0;
      do {
        shortId = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
        const intakeEmail = `${shortId}@intake.getatticus.ca`;
        const [existing] = await ctx.db.select({ id: users.id })
          .from(users).where(eq(users.intakeEmail, intakeEmail)).limit(1);
        if (!existing) {
          // Use isNull guard so a concurrent request that already wrote an
          // email won't be overwritten. The DB UNIQUE constraint on intake_email
          // is the final safety net against two users getting the same address.
          try {
            const [updated] = await ctx.db.update(users)
              .set({ intakeEmail })
              .where(and(eq(users.id, ctx.userId), isNull(users.intakeEmail)))
              .returning();
            if (updated) return { intakeEmail: updated.intakeEmail };
            // Row matched 0 — concurrent request already set an email. Re-read.
            const [current] = await ctx.db.select({ intakeEmail: users.intakeEmail })
              .from(users).where(eq(users.id, ctx.userId)).limit(1);
            if (current?.intakeEmail) return { intakeEmail: current.intakeEmail };
          } catch (err: unknown) {
            // Unique constraint violation (23505): two users raced to the same
            // shortId. Fall through to generate a new one.
            const pg = err as { code?: string };
            if (pg?.code !== "23505") throw err;
          }
        }
        attempts++;
      } while (attempts < 10);

      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to generate unique intake email" });
    }),

  updateSettings: protectedProcedure
    .input(z.object({
      name: z.string().min(1).optional(),
      firmName: z.string().optional(),
      hourlyRate: z.number().int().min(0).max(10000).optional(),
      monthlyRevenueGoal: z.number().int().min(0).max(1000000).nullable().optional(),
      painFocus: painFocusSchema.nullable().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const [updated] = await ctx.db.update(users)
        .set({ ...input })
        .where(eq(users.id, ctx.userId))
        .returning();
      return updated;
    }),

  completeOnboarding: protectedProcedure
    .input(z.object({
      painFocus: painFocusSchema.optional(),
    }).optional())
    .mutation(async ({ ctx, input }) => {
      await ctx.db.update(users)
        .set({
          onboardingCompletedAt: new Date(),
          ...(input?.painFocus ? { painFocus: input.painFocus } : {}),
        })
        .where(eq(users.id, ctx.userId));
    }),

  updateNotificationPreferences: protectedProcedure
    .input(z.object({
      emailDailyBriefing: z.boolean(),
      emailDocumentReady: z.boolean(),
      emailWeeklyDigest: z.boolean(),
    }))
    .mutation(async ({ ctx, input }) => {
      const [updated] = await ctx.db.update(users)
        .set(input)
        .where(eq(users.id, ctx.userId))
        .returning();
      return updated;
    }),
});
