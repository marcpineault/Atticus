import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { TRPCError } from "@trpc/server";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

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
          const [updated] = await ctx.db.update(users)
            .set({ intakeEmail })
            .where(eq(users.id, ctx.userId))
            .returning();
          return { intakeEmail: updated!.intakeEmail };
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
    }))
    .mutation(async ({ ctx, input }) => {
      const [updated] = await ctx.db.update(users)
        .set({ ...input })
        .where(eq(users.id, ctx.userId))
        .returning();
      return updated;
    }),

  completeOnboarding: protectedProcedure
    .mutation(async ({ ctx }) => {
      await ctx.db.update(users)
        .set({ onboardingCompletedAt: new Date() })
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
