"use client";

import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import { AlertTriangle, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SubscriptionBanner() {
  const { data: subscription } = trpc.billing.getSubscription.useQuery();

  if (!subscription) return null;

  const status = subscription.subscriptionStatus;

  // Active subscription — no banner
  if (status === "active") return null;

  // Trial active — show days remaining
  if (status === "trialing" && subscription.trialEndsAt) {
    const daysLeft = Math.ceil(
      (new Date(subscription.trialEndsAt).getTime() - Date.now()) / 86400000
    );
    if (daysLeft > 3) return null; // Only show when close to expiry
    return (
      <div className="flex items-center justify-between gap-3 border-b bg-orange-50 px-4 py-2 text-sm text-orange-700">
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 flex-shrink-0" />
          <span>
            Free trial ends in <strong>{daysLeft} day{daysLeft !== 1 ? "s" : ""}</strong>.
          </span>
        </div>
        <Button size="sm" variant="outline" className="h-7 text-xs border-orange-300 text-orange-700 hover:bg-orange-100" asChild>
          <Link href="/settings">Subscribe</Link>
        </Button>
      </div>
    );
  }

  // Past due
  if (status === "past_due") {
    return (
      <div className="flex items-center justify-between gap-3 border-b bg-red-50 px-4 py-2 text-sm text-red-700">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0" />
          <span>Payment failed. Update your payment method to keep your account active.</span>
        </div>
        <Button size="sm" variant="outline" className="h-7 text-xs border-red-300 text-red-700 hover:bg-red-100" asChild>
          <Link href="/settings">Fix Billing</Link>
        </Button>
      </div>
    );
  }

  // Canceled or no subscription — prompt to subscribe
  if (!status || status === "canceled") {
    return (
      <div className="flex items-center justify-between gap-3 border-b bg-blue-50 px-4 py-2 text-sm text-blue-700">
        <div className="flex items-center gap-2">
          <CreditCard className="h-3.5 w-3.5 flex-shrink-0" />
          <span>Start your 14-day free trial to unlock all features.</span>
        </div>
        <Button size="sm" variant="outline" className="h-7 text-xs border-blue-300 text-blue-700 hover:bg-blue-100" asChild>
          <Link href="/settings">Start Free Trial</Link>
        </Button>
      </div>
    );
  }

  return null;
}
