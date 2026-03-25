import { createTRPCRouter, protectedProcedure } from "@/server/trpc";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { stripe, STRIPE_PRICE_ID, APP_URL } from "@/lib/stripe/client";

export const billingRouter = createTRPCRouter({
  getSubscription: protectedProcedure
    .query(async ({ ctx }) => {
      const [user] = await ctx.db.select({
        stripeCustomerId: users.stripeCustomerId,
        stripeSubscriptionId: users.stripeSubscriptionId,
        subscriptionStatus: users.subscriptionStatus,
        subscriptionCurrentPeriodEnd: users.subscriptionCurrentPeriodEnd,
        trialEndsAt: users.trialEndsAt,
        email: users.email,
        name: users.name,
      }).from(users).where(eq(users.id, ctx.userId)).limit(1);
      return user ?? null;
    }),

  createCheckoutSession: protectedProcedure
    .mutation(async ({ ctx }) => {
      const [user] = await ctx.db.select().from(users)
        .where(eq(users.id, ctx.userId)).limit(1);
      if (!user) throw new Error("User not found");

      // Get or create Stripe customer
      let customerId = user.stripeCustomerId;
      if (!customerId) {
        const customer = await stripe.customers.create({
          email: user.email,
          name: user.name ?? undefined,
          metadata: { userId: user.id },
        });
        customerId = customer.id;
        await ctx.db.update(users)
          .set({ stripeCustomerId: customerId })
          .where(eq(users.id, user.id));
      }

      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
        subscription_data: {
          trial_period_days: 14,
          metadata: { userId: user.id },
        },
        success_url: `${APP_URL}/settings?billing=success`,
        cancel_url: `${APP_URL}/settings?billing=cancel`,
        allow_promotion_codes: true,
      });

      return { url: session.url };
    }),

  createPortalSession: protectedProcedure
    .mutation(async ({ ctx }) => {
      const [user] = await ctx.db.select().from(users)
        .where(eq(users.id, ctx.userId)).limit(1);
      if (!user?.stripeCustomerId) throw new Error("No billing account found");

      const session = await stripe.billingPortal.sessions.create({
        customer: user.stripeCustomerId,
        return_url: `${APP_URL}/settings`,
      });

      return { url: session.url };
    }),
});
