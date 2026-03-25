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
import { Loader2, ShieldCheck, CheckCircle2 } from "lucide-react";

export function AiConsentGate({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = trpc.users.getSettings.useQuery();
  const recordConsent = trpc.users.recordAiConsent.useMutation();
  const utils = trpc.useUtils();
  const [accepted, setAccepted] = useState(false);

  if (isLoading) return <>{children}</>;

  const needsConsent = !user?.aiConsentAt && !accepted;

  async function handleAccept() {
    // Set accepted optimistically so UI closes immediately even if server call fails
    setAccepted(true);
    try {
      await recordConsent.mutateAsync();
      await utils.users.getSettings.invalidate();
    } catch {
      // If mutation fails, the consent is still recorded locally for this session
      // The user can try again on next visit
    }
  }

  return (
    <>
      {children}
      <Dialog open={needsConsent} onOpenChange={() => {}}>
        <DialogContent
          className="max-w-lg"
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <div className="flex justify-center mb-2">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <DialogTitle className="text-center text-lg">Data Processing Agreement</DialogTitle>
            <DialogDescription className="text-center">
              Before using Atticus, please review how we handle your client data.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm">
            <div className="rounded-lg border bg-muted/50 p-4 space-y-3">
              <p className="font-medium text-foreground">What Atticus does with your data:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Documents and transcripts are processed using enterprise-grade AI APIs (Anthropic Claude, OpenAI Whisper). These providers are contractually prohibited from using your data for AI training.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>All data is stored in Canada (AWS ca-central-1). Your client files never leave Canadian jurisdiction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Data is encrypted at-rest and in-transit. Access is limited to delivering the service.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Atticus does not sell, share, or use your client data for any purpose other than providing this service.</span>
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground text-xs leading-relaxed">
              By proceeding, you confirm that you are authorized to upload the materials you submit, and that you have taken appropriate steps to disclose your use of cloud-based AI tools in your client retainer agreements, consistent with your obligations under the{" "}
              <strong>Law Society of Ontario Rules of Professional Conduct</strong> (Rule 3.3 – Confidentiality).
            </p>

            <p className="text-muted-foreground text-xs leading-relaxed">
              This acknowledgement is logged with a timestamp. You can request a copy of our Data Processing Agreement at any time from your account settings.
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <Button onClick={handleAccept} disabled={recordConsent.isPending}>
              {recordConsent.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ShieldCheck className="mr-2 h-4 w-4" />
              )}
              I Understand — Continue to Atticus
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
