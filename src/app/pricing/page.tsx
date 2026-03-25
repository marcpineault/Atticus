import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Atticus Pricing — $149/lawyer/mo for Ontario Law Firms | 14-Day Free Trial",
  description:
    "Atticus Pro: $149 CAD per lawyer per month. Unlimited document processing, AI assistant, trust accounting, invoicing, conflict checks, and Ontario limitation period calculator. 14-day free trial, no credit card required.",
  keywords: [
    "atticus pricing",
    "legal practice management software pricing ontario",
    "law firm software cost ontario",
    "ai legal assistant price canada",
    "practice management software lawyers price",
    "clio alternative pricing ontario",
    "legal software ontario pricing",
  ],
  openGraph: {
    title: "Atticus Pricing — AI Practice Management for Ontario Lawyers",
    description: "$149 CAD/lawyer/month. 14-day free trial, no credit card. Full AI practice management for Ontario solo and small law firms.",
    type: "website",
    url: "https://getatticus.ca/pricing",
  },
  alternates: { canonical: "https://getatticus.ca/pricing" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://getatticus.ca/pricing",
  url: "https://getatticus.ca/pricing",
  name: "Atticus Pricing",
  description: "Atticus Pro costs $149 CAD per lawyer per month with a 14-day free trial and no credit card required. Includes all AI features, document processing, trust accounting, invoicing, and Ontario limitation period calculator.",
});

const FEATURES = [
  "Daily morning briefing emails",
  "AI document processing (PDF, DOCX, audio)",
  "Meeting transcription (MP3, MP4, M4A, WAV)",
  "Automatic deadline & action item extraction",
  "Atticus AI chat with 7 action tools",
  "Ontario Limitation Period Calculator",
  "Trust account tracking (receipts, disbursements, balances)",
  "Invoice generation with HST support",
  "Billable time tracking with live timer",
  "Conflict of interest checks",
  "Client intake form (shareable link)",
  "Client portal with document upload",
  "AI document drafting (13 document types)",
  "Morning escalation alerts (6pm if unresolved)",
  "Calendar export (.ics) for deadlines",
  "Matter templates (8 Ontario matter types)",
  "LSO Rule 3.3 AI consent disclosure flow",
  "PIPEDA-compliant Canadian data residency",
  "Priority support",
];

export default function PricingPage() {
  return (
    <>
      <Script id="ld-json-pricing" type="application/ld+json" strategy="beforeInteractive">{jsonLd}</Script>

      <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>

        {/* NAV */}
        <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
          <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link href="/" className="hidden sm:block" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Features</Link>
            <Link href="/calculator" className="hidden sm:block" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Free Calculator</Link>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
              Start Free Trial →
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ padding: "80px 48px 60px", maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "24px" }}>
            Pricing
          </p>
          <h1 style={{ fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 300, lineHeight: 1.1, color: "#faf8f4", marginBottom: "24px" }}>
            Simple, transparent<br /><em style={{ fontStyle: "italic", color: "#e8b84b" }}>pricing.</em>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.6)", maxWidth: "560px", lineHeight: 1.7, margin: "0 auto 16px" }}>
            One plan. Everything included. $149 CAD per lawyer per month — no per-document fees, no matter limits, no setup cost.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.3)", marginBottom: "0" }}>
            14-day free trial, no credit card required. Cancel anytime.
          </p>
        </section>

        {/* PRICING CARDS */}
        <section style={{ padding: "0 48px 80px", maxWidth: "900px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "24px" }}>

            {/* Free Trial */}
            <div style={{ background: "#0d0f1a", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "8px", padding: "48px 36px" }}>
              <div style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)", marginBottom: "16px" }}>Free Trial</div>
              <div style={{ fontSize: "56px", fontWeight: 300, color: "#faf8f4", lineHeight: 1, marginBottom: "8px" }}>$0</div>
              <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "32px" }}>14 days · no credit card</div>
              <div style={{ borderTop: "1px solid rgba(198,146,42,0.1)", paddingTop: "24px", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Full access to all features", "Morning briefings every weekday", "AI document processing", "Unlimited clients & matters", "No payment method required"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "#22c55e", fontSize: "14px", flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/sign-up" style={{ display: "block", textAlign: "center", background: "transparent", border: "1px solid rgba(198,146,42,0.4)", color: "#C6922A", padding: "14px 24px", textDecoration: "none", fontSize: "14px", borderRadius: "4px" }}>
                Start Free Trial →
              </Link>
            </div>

            {/* Pro */}
            <div style={{ background: "#0d0f1a", border: "2px solid rgba(198,146,42,0.5)", borderRadius: "8px", padding: "48px 36px", position: "relative" }}>
              <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: "#C6922A", color: "#07070a", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 16px", borderRadius: "20px" }}>Most Popular</div>
              <div style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)", marginBottom: "16px" }}>Atticus Pro</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "8px" }}>
                <span style={{ fontSize: "56px", fontWeight: 300, color: "#faf8f4", lineHeight: 1 }}>$149</span>
                <span style={{ fontSize: "18px", color: "rgba(240,232,216,0.4)" }}> CAD</span>
              </div>
              <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "8px" }}>per lawyer / per month</div>
              <div style={{ fontSize: "13px", color: "#22c55e", marginBottom: "32px" }}>Recovers ~$9,200/month at $400/hr</div>
              <div style={{ borderTop: "1px solid rgba(198,146,42,0.1)", paddingTop: "24px", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {FEATURES.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "#C6922A", fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    <span style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/sign-up" style={{ display: "block", textAlign: "center", background: "#C6922A", color: "#07070a", padding: "14px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500, borderRadius: "4px" }}>
                Start Free Trial →
              </Link>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: "24px", fontSize: "13px", color: "rgba(240,232,216,0.3)" }}>
            After the 14-day trial, your subscription is $149 CAD + HST per month, billed monthly. Cancel anytime from Settings. Questions? Email hello@getatticus.ca.
          </p>
        </section>

        {/* ROI CALLOUT */}
        <section style={{ padding: "60px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#faf8f4", marginBottom: "36px" }}>
              How $149/lawyer/month becomes $9,200/month.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "24px" }}>
              {[
                { task: "Document review & summarization", saved: "8 hrs/month", value: "$3,200" },
                { task: "Meeting transcription & note-taking", saved: "6 hrs/month", value: "$2,400" },
                { task: "Deadline tracking & briefing prep", saved: "5 hrs/month", value: "$2,000" },
                { task: "Client file retrieval & context prep", saved: "4 hrs/month", value: "$1,600" },
              ].map(r => (
                <div key={r.task} style={{ background: "#0d0f1a", border: "1px solid rgba(198,146,42,0.1)", borderRadius: "8px", padding: "24px" }}>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", marginBottom: "16px" }}>{r.task}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)" }}>{r.saved}</span>
                    <span style={{ fontSize: "22px", fontWeight: 600, color: "#e8b84b" }}>{r.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "24px", fontSize: "13px", color: "rgba(240,232,216,0.35)", lineHeight: 1.6 }}>
              Based on 23 hrs recovered per month at $400/hr. Your actual savings depend on your hourly rate, practice volume, and how intensively you use Atticus. At $300/hr the monthly value is $6,900 — still 46× the cost of your subscription.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "80px 48px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#faf8f4", marginBottom: "48px" }}>Pricing questions</h2>
            {[
              { q: "Do I need a credit card to start the free trial?", a: "No. You get full access for 14 days with no credit card required. After the trial ends, you can add payment information to continue. Your data is retained either way." },
              { q: "What happens if I cancel?", a: "You can cancel your Atticus subscription at any time from Settings. Your subscription remains active until the end of the billing period. After that, you lose access to AI features and document processing. Your data is retained for 30 days after cancellation, giving you time to export anything you need." },
              { q: "Is there a discount for multiple lawyers?", a: "The standard plan is $149 CAD per lawyer per month. If you have more than 3 lawyers in your firm and are interested in a firm plan, email us at hello@getatticus.ca. We're working on multi-seat firm pricing." },
              { q: "What does 'per lawyer' mean?", a: "The Atticus subscription is per individual lawyer account. Each Clerk account is one lawyer. Paralegal or assistant access on the same account counts as one seat. Multi-lawyer firm accounts with separate logins are priced per lawyer." },
              { q: "Is the $149 price in Canadian dollars?", a: "Yes. $149 CAD per lawyer per month. For Ontario-based law firms, HST (13%) is added at checkout. The price shown is $149 CAD, so your total charge is $168.37 CAD/month including HST." },
              { q: "Do you offer a free plan?", a: "No ongoing free plan — only the 14-day free trial. Atticus requires significant AI processing (Claude, Whisper, Voyage embeddings) for every document. A sustainable free tier isn't feasible without charging somewhere." },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: "1px solid rgba(198,146,42,0.1)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{faq.q}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.8 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 48px", background: "#0d0f1a", textAlign: "center", borderTop: "1px solid rgba(198,146,42,0.1)" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 300, color: "#faf8f4", marginBottom: "20px" }}>
            Start your 14-day free trial.
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.55)", marginBottom: "8px" }}>No credit card required. Full access from day one.</p>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.3)", marginBottom: "48px" }}>Your first morning briefing arrives tomorrow at 9am.</p>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "18px 48px", textDecoration: "none", fontSize: "14px", fontWeight: 500, letterSpacing: "0.15em", display: "inline-block" }}>
            START FREE TRIAL →
          </Link>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <Link href="/" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← Atticus Home</Link>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
            <Link href="/clio-alternative" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Clio Alternative</Link>
            <Link href="/ontario-legal-software" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Ontario Legal Software</Link>
            <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
            <Link href="/terms" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Terms</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
