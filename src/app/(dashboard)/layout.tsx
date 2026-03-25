import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { SubscriptionBanner } from "@/components/layout/subscription-banner";
import { AiConsentGate } from "@/components/layout/ai-consent-gate";
import { SubscriptionGate } from "@/components/layout/subscription-gate";
import { QuickCapture } from "@/components/layout/quick-capture";
import { KeyboardShortcuts } from "@/components/layout/keyboard-shortcuts";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { OnboardingWizard } from "@/components/layout/onboarding-wizard";
import { Toaster } from "sonner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AiConsentGate>
      <SubscriptionGate>
        <OnboardingWizard>
          <div className="flex h-screen">
            <div className="hidden lg:block">
              <Sidebar />
            </div>
            <div className="flex flex-1 flex-col min-w-0">
              <Header />
              <SubscriptionBanner />
              <main className="flex-1 overflow-auto p-4 pb-20 lg:p-6 lg:pb-6">{children}</main>
            </div>
          </div>
          <QuickCapture />
          <KeyboardShortcuts />
          <MobileBottomNav />
          <Toaster position="bottom-right" richColors />
        </OnboardingWizard>
      </SubscriptionGate>
    </AiConsentGate>
  );
}
