"use client";

import { Suspense } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Save, CreditCard, CheckCircle2, AlertTriangle, ExternalLink, Mail, Copy, Bell, Scale, Target } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useSearchParams } from "next/navigation";

const settingsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  firmName: z.string().optional(),
  hourlyRate: z.number().int().min(0).max(10000),
  monthlyRevenueGoal: z.number().int().min(0).max(1000000).optional(),
});

type SettingsForm = z.infer<typeof settingsSchema>;

function SettingsPageContent() {
  const searchParams = useSearchParams();
  const billingStatus = searchParams.get("billing");
  const { data: user, isLoading } = trpc.users.getSettings.useQuery();
  const { data: subscription } = trpc.billing.getSubscription.useQuery();
  const updateSettings = trpc.users.updateSettings.useMutation();
  const createCheckout = trpc.billing.createCheckoutSession.useMutation({
    onSuccess: ({ url }) => { if (url) window.location.href = url; },
  });
  const createPortal = trpc.billing.createPortalSession.useMutation({
    onSuccess: ({ url }) => { if (url) window.location.href = url; },
  });
  const utils = trpc.useUtils();
  const updateNotifications = trpc.users.updateNotificationPreferences.useMutation({
    onSuccess: () => utils.users.getSettings.invalidate(),
  });
  const generateIntakeEmail = trpc.users.generateIntakeEmail.useMutation({
    onSuccess: () => utils.users.getSettings.invalidate(),
  });

  const { register, handleSubmit, reset, formState: { errors, isDirty } } = useForm<SettingsForm>({
    resolver: zodResolver(settingsSchema),
    defaultValues: { name: "", firmName: "", hourlyRate: 400, monthlyRevenueGoal: undefined },
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name ?? "",
        firmName: user.firmName ?? "",
        hourlyRate: user.hourlyRate ?? 400,
        monthlyRevenueGoal: user.monthlyRevenueGoal ?? undefined,
      });
    }
  }, [user, reset]);

  async function onSubmit(data: SettingsForm) {
    await updateSettings.mutateAsync({
      ...data,
      monthlyRevenueGoal: data.monthlyRevenueGoal ?? null,
    });
    await utils.users.getSettings.invalidate();
    reset(data);
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const isSubscribed = subscription?.subscriptionStatus === "active" || subscription?.subscriptionStatus === "trialing";

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your practice profile and preferences.</p>
      </div>

      {billingStatus === "success" && (
        <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          <CheckCircle2 className="h-4 w-4" />
          Subscription activated — welcome to Atticus!
        </div>
      )}

      {/* Subscription Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Subscription
          </CardTitle>
          <CardDescription>Manage your Atticus subscription and billing.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!subscription?.subscriptionStatus || subscription.subscriptionStatus === "canceled" ? (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Start your 14-day free trial. No credit card required to start.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" /> Unlimited document processing &amp; AI transcription</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" /> AI-powered chat and semantic search</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" /> Automatic deadline &amp; action item extraction</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" /> Canadian data residency — your data stays in Canada</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" /> No AI training on your client data</li>
              </ul>
              <Button onClick={() => createCheckout.mutate()} disabled={createCheckout.isPending}>
                {createCheckout.isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <CreditCard className="mr-2 h-4 w-4" />
                )}
                Start Free Trial
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {isSubscribed ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                )}
                <span className="text-sm font-medium capitalize">
                  {subscription.subscriptionStatus === "trialing" ? "Free Trial Active" : subscription.subscriptionStatus}
                </span>
              </div>
              {subscription.subscriptionStatus === "trialing" && subscription.trialEndsAt && (
                <p className="text-xs text-muted-foreground">
                  Trial ends {new Date(subscription.trialEndsAt).toLocaleDateString(undefined, {
                    month: "long", day: "numeric", year: "numeric",
                  })}
                </p>
              )}
              {subscription.subscriptionCurrentPeriodEnd && subscription.subscriptionStatus === "active" && (
                <p className="text-xs text-muted-foreground">
                  Renews {new Date(subscription.subscriptionCurrentPeriodEnd).toLocaleDateString(undefined, {
                    month: "long", day: "numeric", year: "numeric",
                  })}
                </p>
              )}
              {subscription.subscriptionStatus === "past_due" && (
                <p className="text-xs text-destructive font-medium">
                  Payment failed — update your payment method to keep your account active.
                </p>
              )}
              <Button variant="outline" size="sm" onClick={() => createPortal.mutate()} disabled={createPortal.isPending}>
                {createPortal.isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <ExternalLink className="mr-2 h-4 w-4" />
                )}
                Manage Billing
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Practice profile + billing rate form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Practice Profile</CardTitle>
            <CardDescription>Your name and firm details used in billing and reports.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" {...register("name")} placeholder="e.g. Jane Smith" />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="firmName">Firm Name</Label>
              <Input id="firmName" {...register("firmName")} placeholder="e.g. Smith & Associates" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Billing Rate</CardTitle>
            <CardDescription>Used to calculate the value of time saved across your practice.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="hourlyRate">Hourly Rate (CAD)</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                <Input
                  id="hourlyRate"
                  type="number"
                  className="pl-7"
                  {...register("hourlyRate", { valueAsNumber: true })}
                  placeholder="400"
                />
              </div>
              {errors.hourlyRate && <p className="text-xs text-destructive">{errors.hourlyRate.message}</p>}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="h-4 w-4" />
              Revenue Goal
            </CardTitle>
            <CardDescription>
              Set a monthly revenue target to track your progress on the dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1.5">
              <Label htmlFor="monthlyRevenueGoal">Monthly Target (CAD)</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                <Input
                  id="monthlyRevenueGoal"
                  type="number"
                  className="pl-7"
                  {...register("monthlyRevenueGoal", { valueAsNumber: true })}
                  placeholder="e.g. 15000"
                />
              </div>
              <p className="text-xs text-muted-foreground">Leave blank to hide the goal progress bar.</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-end gap-3">
          {updateSettings.isSuccess && !isDirty && (
            <p className="text-xs text-green-600">Settings saved.</p>
          )}
          <Button type="submit" disabled={!isDirty || updateSettings.isPending}>
            {updateSettings.isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            Save Changes
          </Button>
        </div>
      </form>

      {/* Client Intake Form */}
      {user?.id && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Scale className="h-4 w-4" />
              Client Intake Form
            </CardTitle>
            <CardDescription>
              Share this link with prospective clients. They can fill out their details and you will be notified instantly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <code className="flex-1 rounded bg-muted px-3 py-2 text-sm font-mono truncate">
                {typeof window !== "undefined" ? window.location.origin : ""}/intake/{user.id}
              </code>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => navigator.clipboard.writeText(`${window.location.origin}/intake/${user.id}`)}
              >
                <Copy className="h-3.5 w-3.5" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                asChild
              >
                <a href={`/intake/${user.id}`} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              New contacts will be automatically added to your Atticus client list and you will receive an email notification.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Email Intake Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email Intake
          </CardTitle>
          <CardDescription>
            Forward any client email to your personal Atticus address and it will be automatically processed, summarized, and searchable.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {user?.intakeEmail ? (
            <>
              <div className="flex items-center gap-2">
                <code className="flex-1 rounded bg-muted px-3 py-2 text-sm font-mono">{user.intakeEmail}</code>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(user.intakeEmail!);
                  }}
                >
                  <Copy className="h-3.5 w-3.5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Forward emails from your email client to this address. Atticus will extract deadlines, action items, key parties, and attachments (PDF, DOCX, TXT) automatically.
              </p>

              {/* Gmail instructions */}
              <details className="group">
                <summary className="flex cursor-pointer items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <span className="transition-transform group-open:rotate-90">&#9654;</span>
                  How to set up auto-forwarding in Gmail
                </summary>
                <div className="mt-2 rounded-lg border bg-muted/30 p-3 text-xs text-muted-foreground space-y-1.5">
                  <p>1. Open Gmail &rarr; Settings (gear icon) &rarr; <strong>See all settings</strong></p>
                  <p>2. Go to the <strong>Forwarding and POP/IMAP</strong> tab</p>
                  <p>3. Click <strong>Add a forwarding address</strong> and paste your Atticus address</p>
                  <p>4. Gmail will send a verification email &mdash; Atticus will ignore it, so check your Gmail for the confirmation code from Google</p>
                  <p>5. Once verified, select <strong>&quot;Forward a copy of incoming mail to&quot;</strong> and choose your Atticus address</p>
                  <p>6. Recommended: keep <strong>&quot;Keep Gmail&apos;s copy in the Inbox&quot;</strong> selected</p>
                  <p className="text-muted-foreground/70 italic">Tip: To forward only specific emails, create a Gmail filter instead (e.g., forward only emails from client domains).</p>
                </div>
              </details>

              {/* Outlook instructions */}
              <details className="group">
                <summary className="flex cursor-pointer items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <span className="transition-transform group-open:rotate-90">&#9654;</span>
                  How to set up auto-forwarding in Outlook
                </summary>
                <div className="mt-2 rounded-lg border bg-muted/30 p-3 text-xs text-muted-foreground space-y-1.5">
                  <p>1. Open Outlook on the web &rarr; Settings (gear icon) &rarr; <strong>Mail &rarr; Forwarding</strong></p>
                  <p>2. Check <strong>&quot;Enable forwarding&quot;</strong></p>
                  <p>3. Paste your Atticus intake address</p>
                  <p>4. Check <strong>&quot;Keep a copy of forwarded messages&quot;</strong></p>
                  <p>5. Click <strong>Save</strong></p>
                  <p className="text-muted-foreground/70 italic">Note: If your firm uses Microsoft 365, your IT admin may need to allow external forwarding in Exchange admin settings.</p>
                </div>
              </details>
            </>
          ) : (
            <div className="space-y-3">
              <div className="rounded-lg border border-dashed p-4 text-center space-y-3">
                <p className="text-sm text-muted-foreground">Your email intake address has not been generated yet.</p>
                <Button
                  type="button"
                  size="sm"
                  onClick={() => generateIntakeEmail.mutate()}
                  disabled={generateIntakeEmail.isPending}
                >
                  {generateIntakeEmail.isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Mail className="mr-2 h-4 w-4" />
                  )}
                  Generate Intake Address
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Email Notifications
          </CardTitle>
          <CardDescription>Control which emails Atticus sends you.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              key: "emailDailyBriefing" as const,
              label: "Daily Morning Briefing & Deadline Alerts",
              description: "Mon-Fri at 9am: overdue items, today's deadlines, and upcoming events. Also controls 6pm deadline escalation alerts.",
            },
            {
              key: "emailDocumentReady" as const,
              label: "Document Processed",
              description: "Immediate notification when a document finishes processing, with findings summary.",
            },
            {
              key: "emailWeeklyDigest" as const,
              label: "Weekly Digest",
              description: "Sunday evening: summary of the week ahead with all open deadlines.",
            },
          ].map((pref) => (
            <div key={pref.key} className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">{pref.label}</p>
                <p className="text-xs text-muted-foreground">{pref.description}</p>
              </div>
              <Switch
                checked={user?.[pref.key] ?? true}
                disabled={updateNotifications.isPending || !user}
                onCheckedChange={(checked: boolean) => {
                  if (!user) return;
                  updateNotifications.mutate({
                    emailDailyBriefing: pref.key === "emailDailyBriefing" ? checked : (user.emailDailyBriefing ?? true),
                    emailDocumentReady: pref.key === "emailDocumentReady" ? checked : (user.emailDocumentReady ?? true),
                    emailWeeklyDigest: pref.key === "emailWeeklyDigest" ? checked : (user.emailWeeklyDigest ?? true),
                  });
                }}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <Suspense>
      <SettingsPageContent />
    </Suspense>
  );
}
