import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LEAP Alternative for Ontario Law Firms | Atticus",
  description:
    "Looking for a LEAP alternative? Atticus is AI-native practice management built specifically for Ontario lawyers — trust accounting, deadline extraction, AI chat, and billing. $149 CAD/month, Canadian data residency.",
  keywords: [
    "leap alternative ontario",
    "leap legal software alternative",
    "leap legal canada alternative",
    "replace leap legal software ontario",
    "leap vs atticus ontario",
    "ontario law firm software alternative to leap",
    "leap legal pricing alternative",
  ],
  openGraph: {
    title: "LEAP Alternative for Ontario Law Firms — Atticus",
    description:
      "AI-native practice management for Ontario lawyers. Trust accounting, automatic deadline extraction, AI document processing. $149 CAD/month, 14-day free trial.",
    type: "website",
    url: "https://getatticus.ca/leap-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/leap-alternative" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — LEAP Alternative for Ontario Law Firms",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Modern LEAP legal software alternative for Ontario law firms. AI document processing, automatic deadline extraction, trust accounting, billing, and an AI assistant grounded in your files — all on Canadian infrastructure.",
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "CAD",
    priceValidUntil: "2027-01-01",
    availability: "https://schema.org/InStock",
  },
  provider: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Atticus have trust accounting like LEAP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus tracks trust receipts and disbursements per client, shows real-time balances, and alerts you if any client balance goes negative — compliant with LSO By-Law 9. Trust ledger exports to CSV for monthly reconciliation.",
      },
    },
    {
      "@type": "Question",
      name: "How does Atticus compare to LEAP on pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atticus is $149 CAD per lawyer per month — all features included, no per-module pricing. LEAP's pricing varies by configuration and typically requires contacting sales. Atticus includes a 14-day free trial with no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "Is Atticus data stored in Canada like LEAP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus runs on Canadian cloud infrastructure. All client data stays in Canada, consistent with PIPEDA and LSO guidance on data residency.",
      },
    },
    {
      "@type": "Question",
      name: "Does Atticus process documents automatically like LEAP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and more. Atticus AI automatically extracts deadlines, parties, dates, and action items from every uploaded document. It also transcribes audio files (MP3/MP4/M4A), and lets you ask questions about any file in plain English through the Atticus AI chat.",
      },
    },
  ],
});

const COMPARISON_ROWS = [
  { feature: "Deployment", leap: "Cloud-based", atticus: "Cloud-based" },
  { feature: "Data residency", leap: "Canada", atticus: "Canada" },
  { feature: "Trust accounting (By-Law 9)", leap: "✓ Yes", atticus: "✓ Yes" },
  { feature: "AI document processing", leap: "Limited (document automation)", atticus: "✓ Full extraction — deadlines, parties, dates, action items" },
  { feature: "Audio transcription", leap: "✗ No", atticus: "✓ MP3/MP4/M4A → transcript + entities" },
  { feature: "AI chat assistant", leap: "✗ No", atticus: "✓ Ask questions about your case files" },
  { feature: "Automatic deadline extraction", leap: "✗ Manual entry", atticus: "✓ From every document on upload" },
  { feature: "Morning briefing email", leap: "✗ No", atticus: "✓ Daily 9am digest of all deadlines" },
  { feature: "6pm escalation alert", leap: "✗ No", atticus: "✓ If today/tomorrow deadlines unresolved" },
  { feature: "Client portal", leap: "Limited", atticus: "✓ Per-matter shareable portal with upload" },
  { feature: "AI conflict of interest check", leap: "Basic", atticus: "✓ AI-powered, severity-rated" },
  { feature: "AI document drafting", leap: "Document templates", atticus: "✓ AI-generated from your case files" },
  { feature: "Onboarding experience", leap: "Complex — reported migration issues", atticus: "Simple — import your files and go" },
  { feature: "Pricing transparency", leap: "Contact sales for quote", atticus: "$149 CAD/mo all-inclusive" },
  { feature: "Free trial", leap: "Demo available", atticus: "✓ 14 days, no credit card required" },
];

export default function LeapAlternativePage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-software" type="application/ld+json">{jsonLd}</Script>
      <Script id="jsonld-faq" type="application/ld+json">{faqJsonLd}</Script>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#fff" }}>
        <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", textDecoration: "none" }}>
          Atticus
        </Link>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
          <Link href="/clio-alternative" style={{ color: "#4b5563", textDecoration: "none" }}>vs Clio</Link>
          <Link href="/pclaw-alternative" style={{ color: "#4b5563", textDecoration: "none" }}>vs PCLaw</Link>
          <Link href="/pricing" style={{ color: "#4b5563", textDecoration: "none" }}>Pricing</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>
            Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "880px", margin: "0 auto", padding: "72px 24px 48px" }}>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#6b7280", textTransform: "uppercase", marginBottom: "16px" }}>
          LEAP Alternative · Ontario Law Firms
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px", color: "#1a1a2e" }}>
          The LEAP Alternative That&apos;s Actually AI-Native
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "16px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          LEAP is solid practice management software. But it wasn&apos;t built around AI — deadlines still need manual entry, documents don&apos;t auto-extract their contents, and there&apos;s no assistant you can ask questions.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          Atticus was. Every document you upload is automatically processed. Every deadline is extracted. Every morning you get a briefing. You can ask any question about any client file and get an answer in seconds.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700 }}>
            Start Free 14-Day Trial
          </Link>
          <Link href="/pricing" style={{ border: "1px solid #d1d5db", color: "#374151", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
            See Pricing — $149 CAD/mo
          </Link>
        </div>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginTop: "12px" }}>No credit card required · Canadian data residency · All features included</p>
      </header>

      {/* Key differentiators */}
      <section style={{ backgroundColor: "#f0f9ff", borderTop: "1px solid #bae6fd", borderBottom: "1px solid #bae6fd", padding: "48px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "24px", color: "#0c4a6e" }}>
            What Atticus Does That LEAP Doesn&apos;t
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { title: "Automatic deadline extraction", body: "Upload a PDF contract or court order. Atticus reads it, finds every date and deadline, and adds them to your tracker. LEAP requires manual entry." },
              { title: "AI chat over your files", body: "Ask: 'What were the damages claimed in the Chen matter?' Atticus answers instantly from your documents. LEAP has no conversational AI." },
              { title: "Audio transcription", body: "Record a client call or meeting. Upload the audio. Atticus transcribes it, extracts action items, and makes it searchable. LEAP has no transcription." },
              { title: "Morning briefing email", body: "Every weekday at 9am: overdue items, today's deadlines, outstanding invoices, negative trust balances — all in one email. LEAP has no automated briefing." },
              { title: "Simple, transparent pricing", body: "$149 CAD/lawyer/month. No modules, no per-feature charges, no call required. LEAP pricing requires contacting sales." },
              { title: "Fast onboarding", body: "Start using Atticus in minutes. Upload your first file, run a conflict check, create a matter. No complex data migration required to get value on day one." },
            ].map((item) => (
              <div key={item.title} style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #bae6fd" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "6px", fontFamily: "system-ui, sans-serif", color: "#0c4a6e" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#0369a1", fontFamily: "system-ui, sans-serif" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          LEAP vs Atticus — Side-by-Side
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          Feature comparison for Ontario solo and small law firms
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", width: "35%" }}>Feature</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#6b7280" }}>LEAP</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#1a1a2e", backgroundColor: "#f0f9ff" }}>Atticus</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.feature} style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600 }}>{row.feature}</td>
                  <td style={{ padding: "12px 16px", color: row.leap.startsWith("✗") ? "#ef4444" : "#4b5563" }}>{row.leap}</td>
                  <td style={{ padding: "12px 16px", color: row.atticus.startsWith("✓") ? "#15803d" : "#374151", fontWeight: row.atticus.startsWith("✓") ? 600 : 400, backgroundColor: i % 2 === 0 ? "#f0f9ff" : "#e0f2fe" }}>{row.atticus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What LEAP users say they miss */}
      <section style={{ backgroundColor: "#f8f7f4", borderTop: "1px solid #e5e7eb", padding: "56px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e", textAlign: "center" }}>
            The Questions Atticus Answers That LEAP Doesn&apos;t
          </h2>
          <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
            Ask these to Atticus chat and get direct answers from your files
          </p>
          <div style={{ display: "grid", gap: "12px" }}>
            {[
              "\"What deadlines do I have this week across all my matters?\"",
              "\"What are the key terms of the Johnson settlement agreement?\"",
              "\"Who are all the parties in the Patel estate matter?\"",
              "\"What does Smith owe me and when was the last invoice sent?\"",
              "\"Any clients with negative trust balances right now?\"",
              "\"Summarize everything that happened in the Chen matter last month\"",
            ].map((q) => (
              <div key={q} style={{ padding: "14px 18px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb", fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#374151", fontStyle: "italic" }}>
                {q}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "56px 24px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "32px", color: "#1a1a2e" }}>
          Common Questions
        </h2>
        <div style={{ display: "grid", gap: "16px" }}>
          {[
            {
              q: "Does Atticus have trust accounting like LEAP?",
              a: "Yes. Atticus tracks trust receipts and disbursements per client, shows real-time balances, and alerts you if any client balance goes negative — compliant with LSO By-Law 9. Trust ledger exports to CSV for monthly reconciliation.",
            },
            {
              q: "How does Atticus compare to LEAP on pricing?",
              a: "Atticus is $149 CAD per lawyer per month — all features included, no per-module pricing. LEAP pricing is not publicly listed and requires contacting sales. Atticus includes a 14-day free trial with no credit card required.",
            },
            {
              q: "Is Atticus data stored in Canada?",
              a: "Yes. Atticus runs on Canadian cloud infrastructure. All client data stays in Canada, consistent with PIPEDA and LSO guidance on data residency.",
            },
            {
              q: "How hard is it to switch from LEAP to Atticus?",
              a: "You can start using Atticus immediately while keeping LEAP active. Export your existing client list, upload your key documents into Atticus, and begin getting AI-powered briefings and deadline extraction right away. Most solo practitioners are fully operational in Atticus within a week.",
            },
          ].map((item) => (
            <div key={item.q} style={{ padding: "20px", backgroundColor: "#f8f7f4", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
              <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif", color: "#1a1a2e" }}>{item.q}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", textAlign: "center", backgroundColor: "#1a1a2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px", fontWeight: 700, marginBottom: "16px", color: "#fff" }}>
            See Atticus in Your Practice
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
            14-day free trial. No credit card. Full access to AI document processing, deadline tracking, trust accounting, and the Atticus AI assistant.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#C6922A", color: "#07070a", padding: "14px 36px", borderRadius: "8px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "16px" }}>
            Start Free Trial
          </Link>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.3)", marginTop: "16px" }}>
            $149 CAD/month after trial · Canadian infrastructure · Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginBottom: "16px", fontWeight: 700 }}>
            Also Compare
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/clio-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>Clio Alternative</Link>
            <Link href="/pclaw-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>PCLaw Alternative</Link>
            <Link href="/ontario-legal-software" style={{ color: "#6b7280", textDecoration: "none" }}>Ontario Legal Software</Link>
            <Link href="/trust-accounting-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Trust Accounting</Link>
            <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
            <Link href="/calculator" style={{ color: "#6b7280", textDecoration: "none" }}>Limitation Calculator</Link>
            <Link href="/blog" style={{ color: "#6b7280", textDecoration: "none" }}>Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
