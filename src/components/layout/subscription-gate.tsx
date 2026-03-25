"use client";

import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Loader2, CreditCard, AlertTriangle } from "lucide-react";

export function SubscriptionGate({ children }: { children: React.ReactNode }) {
  const { data: subscription, isLoading } = trpc.billing.getSubscription.useQuery();
  const createCheckout = trpc.billing.createCheckoutSession.useMutation({
    onSuccess: ({ url }) => { if (url) window.location.href = url; },
  });
  const createPortal = trpc.billing.createPortalSession.useMutation({
    onSuccess: ({ url }) => { if (url) window.location.href = url; },
  });

  if (isLoading) return <>{children}</>;
  if (!subscription) return <>{children}</>;

  const status = subscription.subscriptionStatus;
  const now = Date.now();

  // Trial expired
  const trialExpired =
    status === "trialing" &&
    subscription.trialEndsAt &&
    new Date(subscription.trialEndsAt).getTime() < now;

  // Subscription definitively lapsed — canceled or unpaid with past period end
  const subscriptionLapsed =
    status === "canceled" ||
    status === "unpaid" ||
    (status === "past_due" &&
      subscription.subscriptionCurrentPeriodEnd &&
      new Date(subscription.subscriptionCurrentPeriodEnd).getTime() < now - 7 * 86400000);

  // No subscription at all (null status = has never subscribed, give them through — new user)
  const isBlocked = trialExpired || subscriptionLapsed;

  if (!isBlocked) return <>{children}</>;

  const isPastDue = status === "past_due";
  const hasBilling = !!subscription.stripeCustomerId;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="max-w-md w-full rounded-xl border bg-card p-8 space-y-6 text-center shadow-lg">
        <div className="flex justify-center">
          <div className="rounded-full bg-amber-100 p-3">
            {isPastDue
              ? <AlertTriangle className="h-8 w-8 text-amber-600" />
              : <CreditCard className="h-8 w-8 text-primary" />}
          </div>
        </div>

        <div>
          {isPastDue ? (
            <>
              <h2 className="text-xl font-semibold">Payment required</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Your last payment failed. Update your payment method to continue using Atticus.
              </p>
            </>
          ) : trialExpired ? (
            <>
              <h2 className="text-xl font-semibold">Your free trial has ended</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Subscribe to continue using Atticus. Your data is safe and waiting for you.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold">Subscription required</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Your subscription is no longer active. Subscribe to regain access.
              </p>
            </>
          )}
        </div>

        <ul className="text-sm text-left space-y-2 text-muted-foreground">
          {[
            "Daily morning briefings with your deadlines",
            "AI document summarization & entity extraction",
            "Audio transcription & meeting notes",
            "Semantic search across all your files",
            "AI chat assistant for your case history",
            "Conflict of interest checking",
          ].map(f => (
            <li key={f} className="flex items-center gap-2">
              <span className="text-green-500">✓</span> {f}
            </li>
          ))}
        </ul>

        <div className="space-y-3">
          {isPastDue && hasBilling ? (
            <Button
              className="w-full"
              onClick={() => createPortal.mutate()}
              disabled={createPortal.isPending}
            >
              {createPortal.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              Update Payment Method
            </Button>
          ) : (
            <Button
              className="w-full"
              onClick={() => createCheckout.mutate()}
              disabled={createCheckout.isPending}
            >
              {createCheckout.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              Subscribe — 14-Day Free Trial
            </Button>
          )}
          <p className="text-xs text-muted-foreground">No credit card charged during trial.</p>
        </div>
      </div>
    </div>
  );
}
