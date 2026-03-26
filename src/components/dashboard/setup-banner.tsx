"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Mail, Target, Upload, X } from "lucide-react";

const PAIN_COPY = {
  deadlines: {
    title: "Deadline focus on.",
    description: "Atticus flags every limitation period it finds.",
  },
  intake: {
    title: "Intake focus on.",
    description: "Every new inquiry gets tracked automatically.",
  },
  billing: {
    title: "Billing focus on.",
    description: "Atticus estimates billable time from everything you upload.",
  },
  documents: {
    title: "Document focus on.",
    description: "Everything becomes searchable in seconds.",
  },
} as const;

export function SetupBanner() {
  const { data: user } = trpc.users.getSettings.useQuery();
  const { data: documents } = trpc.documents.list.useQuery();
  const [dismissed, setDismissed] = useState(false);

  const storageKey = user?.id ? `atticus:setup-banner-dismissed:${user.id}` : null;

  useEffect(() => {
    if (!storageKey) return;
    setDismissed(window.localStorage.getItem(storageKey) === "1");
  }, [storageKey]);

  const steps = useMemo(() => {
    const hasProfile = Boolean(
      user?.name?.trim() &&
      user?.firmName?.trim() &&
      user?.hourlyRate !== null &&
      user?.hourlyRate !== undefined
    );

    return [
      {
        label: "Chose your focus",
        done: Boolean(user?.painFocus || user?.onboardingCompletedAt),
        href: null,
        icon: Target,
      },
      {
        label: "Upload first document",
        done: (documents?.length ?? 0) > 0,
        href: "/upload",
        icon: Upload,
      },
      {
        label: "Set up email forwarding",
        done: Boolean(user?.intakeEmail),
        href: "/settings",
        icon: Mail,
      },
      {
        label: "Complete your profile",
        done: hasProfile,
        href: "/settings",
        icon: CheckCircle2,
      },
    ];
  }, [documents?.length, user?.firmName, user?.hourlyRate, user?.intakeEmail, user?.name, user?.painFocus]);

  const completedSteps = steps.filter((step) => step.done).length;

  if (!user?.onboardingCompletedAt || completedSteps === steps.length || dismissed) {
    return null;
  }

  const focus = user.painFocus ? PAIN_COPY[user.painFocus as keyof typeof PAIN_COPY] : null;

  return (
    <Card className="border-primary/20 bg-gradient-to-r from-primary/5 via-background to-emerald-50">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-semibold">
              {focus ? focus.title : "Finish your Atticus setup."}
            </p>
            <p className="text-sm text-muted-foreground">
              {focus ? focus.description : "A few setup steps are still open."}
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 flex-shrink-0"
            onClick={() => {
              if (storageKey) window.localStorage.setItem(storageKey, "1");
              setDismissed(true);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{completedSteps} of {steps.length} steps done</span>
            <span>{Math.round((completedSteps / steps.length) * 100)}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${(completedSteps / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {steps.map((step) => {
            const Icon = step.done ? CheckCircle2 : step.icon;
            const content = (
              <span className="inline-flex items-center gap-2">
                <Icon className={`h-3.5 w-3.5 ${step.done ? "text-green-600" : "text-muted-foreground"}`} />
                <span>{step.label}</span>
                {!step.done && <Circle className="h-2.5 w-2.5 fill-current text-primary/60" />}
              </span>
            );

            if (!step.href) {
              return (
                <span
                  key={step.label}
                  className="inline-flex items-center rounded-full border bg-background px-3 py-2 text-xs font-medium"
                >
                  {content}
                </span>
              );
            }

            return (
              <Link
                key={step.label}
                href={step.href}
                className="inline-flex items-center rounded-full border bg-background px-3 py-2 text-xs font-medium transition-colors hover:bg-muted"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
