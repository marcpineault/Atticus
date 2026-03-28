"use client";

import { useState } from "react";
import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy, Loader2, Mail, Upload } from "lucide-react";

const PAIN_OPTIONS = [
  {
    value: "deadlines" as const,
    emoji: "⏰",
    title: "Missing deadlines",
    description: "Limitation periods, court dates, filing deadlines",
    banner: "Deadline focus on. Atticus flags every limitation period it finds.",
    actionLabel: "Upload a document",
    actionHref: "/upload",
    actionIcon: Upload,
  },
  {
    value: "intake" as const,
    emoji: "📥",
    title: "Client intake chaos",
    description: "Tracking inquiries, follow-ups, consultations",
    banner: "Intake focus on. Every new inquiry gets tracked automatically.",
    actionLabel: "Generate intake email + copy it",
    actionHref: null,
    actionIcon: Mail,
  },
  {
    value: "billing" as const,
    emoji: "💸",
    title: "Lost billable time",
    description: "Hours that slip without being recorded",
    banner: "Billing focus on. Atticus estimates billable time from everything you upload.",
    actionLabel: "Upload a voice note or doc",
    actionHref: "/upload",
    actionIcon: Upload,
  },
  {
    value: "documents" as const,
    emoji: "📁",
    title: "Document overload",
    description: "Can't find what you need when you need it",
    banner: "Document focus on. Everything becomes searchable in seconds.",
    actionLabel: "Upload a document",
    actionHref: "/upload",
    actionIcon: Upload,
  },
] as const;

type PainFocus = (typeof PAIN_OPTIONS)[number]["value"];

export function OnboardingWizard({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = trpc.users.getSettings.useQuery();
  const utils = trpc.useUtils();
  const generateIntakeEmail = trpc.users.generateIntakeEmail.useMutation({
    onSuccess: () => utils.users.getSettings.invalidate(),
  });
  const completeOnboarding = trpc.users.completeOnboarding.useMutation({
    onSuccess: () => utils.users.getSettings.invalidate(),
  });

  const [step, setStep] = useState<1 | 2>(1);
  const [selectedPain, setSelectedPain] = useState<PainFocus | null>(null);
  const [copied, setCopied] = useState(false);
  const [closed, setClosed] = useState(false);

  const selection = PAIN_OPTIONS.find((option) => option.value === selectedPain) ?? null;
  const isOpen = !isLoading && !user?.onboardingCompletedAt && !closed;

  async function finishOnboarding() {
    if (!selectedPain) return;
    setClosed(true);
    try {
      await completeOnboarding.mutateAsync({ painFocus: selectedPain });
    } catch {
      // Keep the local close behavior even if the mutation fails.
    }
  }

  async function handleSkip() {
    if (!selectedPain) return;
    await finishOnboarding();
  }

  async function handleGenerateAndCopy() {
    if (!selectedPain) return;

    const intakeEmail =
      user?.intakeEmail ??
      (await generateIntakeEmail.mutateAsync()).intakeEmail;

    await navigator.clipboard.writeText(intakeEmail ?? "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    await finishOnboarding();
  }

  return (
    <>
      {children}
      <Dialog open={isOpen} onOpenChange={() => {}}>
        <DialogContent
          className="max-w-2xl"
          onPointerDownOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
        >
          <div className="flex gap-2">
            {[1, 2].map((current) => (
              <div
                key={current}
                className={`h-1.5 flex-1 rounded-full ${current <= step ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>

          {step === 1 && (
            <>
              <DialogHeader className="space-y-2">
                <DialogTitle className="text-2xl">What&apos;s your biggest challenge right now?</DialogTitle>
                <DialogDescription>
                  Pick the problem Atticus should help you solve first.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-3 py-2 sm:grid-cols-2">
                {PAIN_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSelectedPain(option.value)}
                    className={`rounded-2xl border p-5 text-left transition-all ${
                      selectedPain === option.value
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border hover:border-primary/40 hover:bg-muted/40"
                    }`}
                  >
                    <div className="text-2xl">{option.emoji}</div>
                    <p className="mt-4 text-base font-semibold">{option.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-muted-foreground">About 30 seconds.</span>
                <Button onClick={() => setStep(2)} disabled={!selectedPain}>
                  Continue
                </Button>
              </div>
            </>
          )}

          {step === 2 && selection && (
            <>
              <DialogHeader className="space-y-3">
                <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm font-medium text-primary">
                  {selection.banner}
                </div>
                <DialogTitle>Take one immediate step</DialogTitle>
                <DialogDescription>
                  Do this now, or skip and come back from the dashboard banner later.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-2">
                {selection.value === "intake" ? (
                  <div className="rounded-2xl border p-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-semibold">Generate your Atticus intake address</p>
                        <p className="text-sm text-muted-foreground">
                          Forward client emails here and Atticus will process them automatically.
                        </p>
                      </div>
                    </div>

                    {user?.intakeEmail && (
                      <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-3">
                        <code className="flex-1 truncate text-sm">{user.intakeEmail}</code>
                        <Button type="button" variant="outline" size="sm" onClick={handleGenerateAndCopy}>
                          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="rounded-2xl border p-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <selection.actionIcon className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-semibold">{selection.actionLabel}</p>
                        <p className="text-sm text-muted-foreground">
                          One upload is enough to start extracting deadlines, summaries, and searchable context.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  Back
                </Button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    disabled={completeOnboarding.isPending}
                  >
                    Skip for now
                  </button>

                  {selection.value === "intake" ? (
                    <Button
                      onClick={handleGenerateAndCopy}
                      disabled={generateIntakeEmail.isPending || completeOnboarding.isPending}
                    >
                      {(generateIntakeEmail.isPending || completeOnboarding.isPending) && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      {user?.intakeEmail ? "Copy Address" : "Generate + Copy"}
                    </Button>
                  ) : (
                    <Button asChild>
                      <Link href={selection.actionHref!} onClick={finishOnboarding}>
                        <selection.actionIcon className="mr-2 h-4 w-4" />
                        {selection.actionLabel}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
