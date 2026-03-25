"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Loader2,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  Mail,
  Upload,
  MessageSquare,
  FileText,
  Clock,
  Shield,
  Search,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const TOTAL_STEPS = 5;

export function OnboardingWizard({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = trpc.users.getSettings.useQuery();
  const utils = trpc.useUtils();
  const updateSettings = trpc.users.updateSettings.useMutation({
    onSuccess: () => utils.users.getSettings.invalidate(),
  });
  const generateIntakeEmail = trpc.users.generateIntakeEmail.useMutation({
    onSuccess: () => utils.users.getSettings.invalidate(),
  });
  const completeOnboarding = trpc.users.completeOnboarding.useMutation({
    onSuccess: () => utils.users.getSettings.invalidate(),
  });

  const [step, setStep] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  // Profile form state
  const [name, setName] = useState("");
  const [firmName, setFirmName] = useState("");
  const [hourlyRate, setHourlyRate] = useState("400");

  // Sync form state when user data loads
  const [initialized, setInitialized] = useState(false);
  if (user && !initialized) {
    if (user.name) setName(user.name);
    if (user.firmName) setFirmName(user.firmName);
    if (user.hourlyRate) setHourlyRate(String(user.hourlyRate));
    setInitialized(true);
  }

  if (isLoading) return <>{children}</>;

  const needsOnboarding = !user?.onboardingCompletedAt && !dismissed;

  async function handleSaveProfile() {
    await updateSettings.mutateAsync({
      name: name || undefined,
      firmName: firmName || undefined,
      hourlyRate: parseInt(hourlyRate) || 400,
    });
    setStep(2);
  }

  async function handleGenerateEmail() {
    await generateIntakeEmail.mutateAsync();
  }

  function handleCopy() {
    if (user?.intakeEmail) {
      navigator.clipboard.writeText(user.intakeEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  async function handleFinish() {
    setDismissed(true);
    try {
      await completeOnboarding.mutateAsync();
    } catch {
      // Still dismiss locally
    }
  }

  function handleSkip() {
    setDismissed(true);
    completeOnboarding.mutate();
  }

  return (
    <>
      {children}
      <Dialog open={needsOnboarding} onOpenChange={() => {}}>
        <DialogContent
          className="max-w-xl"
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          {/* Progress bar */}
          <div className="flex gap-1.5 mb-2">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Step 0: Welcome */}
          {step === 0 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-center text-xl">
                  Welcome to Atticus
                </DialogTitle>
                <DialogDescription className="text-center">
                  Your AI-powered practice assistant for Ontario law
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <p className="text-sm text-muted-foreground text-center">
                  Atticus absorbs everything about your practice — documents, emails,
                  voice notes, meeting recordings — and gives you instant access to
                  deadlines, action items, and answers across all your case files.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: FileText, label: "AI Document Processing", desc: "Upload anything, get summaries + entities" },
                    { icon: Mail, label: "Email Intake", desc: "Auto-forward emails for processing" },
                    { icon: Search, label: "Semantic Search", desc: "Find anything in natural language" },
                    { icon: MessageSquare, label: "Practice Chat", desc: "Ask questions about your cases" },
                    { icon: Clock, label: "Auto Time Tracking", desc: "Billable hours estimated from content" },
                    { icon: Shield, label: "Conflict Checking", desc: "AI-powered conflict analysis" },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="flex items-start gap-2.5 rounded-lg border p-3">
                      <Icon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium">{label}</p>
                        <p className="text-xs text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  All data stored in Canada. Your client data is never used for AI training.
                </p>
              </div>
              <div className="flex justify-between items-center pt-2">
                <button onClick={handleSkip} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Skip setup
                </button>
                <Button onClick={() => setStep(1)}>
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}

          {/* Step 1: Profile */}
          {step === 1 && (
            <>
              <DialogHeader>
                <DialogTitle>Set up your practice profile</DialogTitle>
                <DialogDescription>
                  Used for invoices, billing reports, and document drafting.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-1.5">
                  <Label htmlFor="onb-name">Your Name</Label>
                  <Input
                    id="onb-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jane Smith"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="onb-firm">Firm Name</Label>
                  <Input
                    id="onb-firm"
                    value={firmName}
                    onChange={(e) => setFirmName(e.target.value)}
                    placeholder="e.g. Smith & Associates"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="onb-rate">Hourly Rate (CAD)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                    <Input
                      id="onb-rate"
                      type="number"
                      className="pl-7"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      placeholder="400"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <Button variant="ghost" size="sm" onClick={() => setStep(0)}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={handleSaveProfile} disabled={updateSettings.isPending}>
                  {updateSettings.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}

          {/* Step 2: Email Intake */}
          {step === 2 && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Set up email forwarding
                </DialogTitle>
                <DialogDescription>
                  Forward your practice emails to Atticus and it will automatically extract
                  deadlines, action items, and key details from every message.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                {user?.intakeEmail ? (
                  <>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 rounded bg-muted px-3 py-2.5 text-sm font-mono">
                        {user.intakeEmail}
                      </code>
                      <Button variant="outline" size="sm" onClick={handleCopy}>
                        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Set up auto-forwarding in your email client (Gmail, Outlook) to send
                      incoming emails to this address. You can configure this later in Settings.
                    </p>
                    <div className="rounded-lg border bg-muted/30 p-3 space-y-1.5">
                      <p className="text-xs font-medium">What happens to forwarded emails:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>- Emails are matched to existing clients automatically</li>
                        <li>- Deadlines and action items are extracted and tracked</li>
                        <li>- PDF, DOCX, and TXT attachments are processed too</li>
                        <li>- Everything becomes searchable in chat</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="text-center space-y-3 py-4">
                    <p className="text-sm text-muted-foreground">
                      Generate your personal Atticus email address to get started.
                    </p>
                    <Button onClick={handleGenerateEmail} disabled={generateIntakeEmail.isPending}>
                      {generateIntakeEmail.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      <Mail className="mr-2 h-4 w-4" />
                      Generate My Address
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center pt-2">
                <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={() => setStep(3)}>
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}

          {/* Step 3: First Upload */}
          {step === 3 && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload your first document
                </DialogTitle>
                <DialogDescription>
                  Upload a document, meeting recording, or voice note and Atticus will
                  process it within minutes.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { type: "PDF / DOCX / TXT", desc: "Contracts, letters, court filings" },
                    { type: "MP3 / MP4 / M4A", desc: "Meeting recordings, voice notes" },
                  ].map(({ type, desc }) => (
                    <div key={type} className="rounded-lg border p-4 text-center">
                      <p className="text-sm font-medium">{type}</p>
                      <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border bg-primary/5 border-primary/20 p-3">
                  <p className="text-xs text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 inline mr-1 text-primary" />
                    <strong>What Atticus extracts:</strong> Client names, deadlines, action items,
                    dollar amounts, case references — all automatically tracked and searchable.
                  </p>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  You can upload files now or after finishing setup.
                </p>
              </div>
              <div className="flex justify-between items-center pt-2">
                <Button variant="ghost" size="sm" onClick={() => setStep(2)}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/upload" onClick={() => handleFinish()}>
                      <Upload className="mr-2 h-4 w-4" /> Upload Now
                    </Link>
                  </Button>
                  <Button onClick={() => setStep(4)}>
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}

          {/* Step 4: All Set */}
          {step === 4 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-center text-xl">
                  You&apos;re all set
                </DialogTitle>
                <DialogDescription className="text-center">
                  Atticus is ready to manage your practice. Here&apos;s what to explore:
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 py-2">
                {[
                  { href: "/upload", icon: Upload, label: "Upload", desc: "Upload documents, recordings, or voice notes" },
                  { href: "/chat", icon: MessageSquare, label: "Chat", desc: "Ask Atticus anything about your practice" },
                  { href: "/clients", icon: FileText, label: "Clients", desc: "Add clients and organize matters" },
                  { href: "/deadlines", icon: Clock, label: "Deadlines", desc: "View extracted deadlines and action items" },
                ].map(({ href, icon: Icon, label, desc }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => handleFinish()}
                    className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                  </Link>
                ))}
              </div>
              <div className="flex justify-center pt-2">
                <Button onClick={handleFinish} disabled={completeOnboarding.isPending}>
                  {completeOnboarding.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Go to Dashboard
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
