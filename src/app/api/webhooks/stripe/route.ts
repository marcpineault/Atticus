import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/client";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import type Stripe from "stripe";

function getPeriodEnd(subscription: Stripe.Subscription): Date | null {
  const item = subscription.items.data[0];
  return item?.current_period_end ? new Date(item.current_period_end * 1000) : null;
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: "Missing stripe signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode === "subscription" && session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
          const userId = subscription.metadata.userId;
          if (userId) {
            await db.update(users).set({
              stripeSubscriptionId: subscription.id,
              stripePriceId: subscription.items.data[0]?.price.id ?? null,
              subscriptionStatus: subscription.status as "trialing" | "active" | "past_due" | "canceled" | "unpaid",
              subscriptionCurrentPeriodEnd: getPeriodEnd(subscription),
              trialEndsAt: subscription.trial_end ? new Date(subscription.trial_end * 1000) : null,
            }).where(eq(users.id, userId));
          }
        }
        break;
      }

      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata.userId;
        if (userId) {
          const isDeleted = event.type === "customer.subscription.deleted";
          await db.update(users).set({
            stripeSubscriptionId: isDeleted ? null : subscription.id,
            stripePriceId: subscription.items.data[0]?.price.id ?? null,
            subscriptionStatus: (isDeleted ? "canceled" : subscription.status) as "trialing" | "active" | "past_due" | "canceled" | "unpaid",
            subscriptionCurrentPeriodEnd: getPeriodEnd(subscription),
            trialEndsAt: subscription.trial_end ? new Date(subscription.trial_end * 1000) : null,
          }).where(eq(users.id, userId));
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        // Support both new API shape (parent.subscription_details.subscription) and legacy (subscription)
        const rawSubId =
          invoice.parent?.subscription_details?.subscription ??
          (invoice as unknown as { subscription?: string | { id: string } }).subscription;
        const subId = rawSubId ? (typeof rawSubId === "string" ? rawSubId : rawSubId.id) : null;
        if (subId) {
          const subscription = await stripe.subscriptions.retrieve(subId);
          const userId = subscription.metadata.userId;
          if (userId) {
            await db.update(users).set({ subscriptionStatus: "past_due" })
              .where(eq(users.id, userId));
          }
        }
        break;
      }
    }
  } catch (err) {
    console.error("Stripe webhook processing error:", err);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
