import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CosmoLex Alternative for Ontario Law Firms | Atticus",
  description:
    "Looking for a CosmoLex alternative? Atticus is AI-native practice management for Ontario lawyers — trust accounting, automatic deadline extraction, AI document processing, and $149 CAD/month all-inclusive.",
  keywords: [
    "cosmolex alternative ontario",
    "cosmolex alternative canada",
    "replace cosmolex ontario",
    "cosmolex vs atticus",
    "cosmolex alternative law firm",
    "cosmolex pricing alternative canada",
    "legal software alternative to cosmolex ontario",
  ],
  openGraph: {
    title: "CosmoLex Alternative for Ontario Law Firms — Atticus",
    description:
      "AI-native practice management for Ontario lawyers. Better than CosmoLex for AI, simpler pricing, Canadian infrastructure. $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/cosmolex-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/cosmolex-alternative" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — CosmoLex Alternative for Ontario Law Firms",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "CosmoLex alternative for Ontario law firms. AI document processing, automatic deadline extraction, trust accounting, billing, and AI assistant — all on Canadian infrastructure at $149 CAD/month.",
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "CAD",
    priceValidUntil: "2027-01-01",
    availability: "https://schema.org/InStock",
  },
  provider: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
});

const COMPARISON_ROWS = [
  { feature: "Data residency", cosmolex: "Canada ✓", atticus: "Canada ✓" },
  { feature: "Trust accounting (By-Law 9)", cosmolex: "✓ Yes — integrated", atticus: "✓ Yes — integrated" },
  { feature: "AI document processing", cosmolex: "Limited", atticus: "✓ Full extraction — deadlines, parties, dates" },
  { feature: "Audio transcription", cosmolex: "✗ No", atticus: "✓ MP3/MP4/M4A → transcript + entities" },
  { feature: "AI chat over your files", cosmolex: "✗ No", atticus: "✓ Ask questions in plain English" },
  { feature: "Automatic deadline extraction", cosmolex: "✗ Manual entry", atticus: "✓ From every uploaded document" },
  { feature: "Morning briefing email", cosmolex: "✗ No", atticus: "✓ Daily 9am: deadlines, invoices, trust" },
  { feature: "Client portal", cosmolex: "✓ Basic", atticus: "✓ Per-matter with document upload" },
  { feature: "AI conflict checking", cosmolex: "Basic search", atticus: "✓ AI-powered severity ratings" },
  { feature: "AI document drafting", cosmolex: "Templates", atticus: "✓ AI-generated from your case files" },
  { feature: "Pricing (per lawyer/month)", cosmolex: "~$89–$99 USD (~$120–$135 CAD) + add-ons", atticus: "$149 CAD all-inclusive" },
  { feature: "Pricing increases over time", cosmolex: "Reported increases since 2021", atticus: "Flat $149 CAD/month" },
  { feature: "Free trial", cosmolex: "Demo available", atticus: "✓ 14 days, no credit card" },
];

export default function CosmoLexAlternativePage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-software" type="application/ld+json">{jsonLd}</Script>

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
          CosmoLex Alternative · Ontario Law Firms
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px", color: "#1a1a2e" }}>
          A CosmoLex Alternative That Gets Better,<br />Not More Expensive
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "16px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          CosmoLex works for trust accounting. But it was built before AI changed what practice management software can actually do. There&apos;s no AI that reads your documents, no morning briefing, no assistant you can ask about your files.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          Atticus does all of that — plus trust accounting — at $149 CAD/month with transparent pricing that doesn&apos;t change.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700 }}>
            Start Free 14-Day Trial
          </Link>
          <Link href="/pricing" style={{ border: "1px solid #d1d5db", color: "#374151", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
            See Pricing
          </Link>
        </div>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginTop: "12px" }}>No credit card required · $149 CAD/mo all-inclusive · Canadian data</p>
      </header>

      {/* What you get with Atticus that CosmoLex doesn't offer */}
      <section style={{ backgroundColor: "#f8f7f4", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "48px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "24px", color: "#1a1a2e" }}>
            What Atticus Does That CosmoLex Doesn&apos;t
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { title: "AI document processing", body: "Every document automatically read, summarized, and searchable. Deadlines, parties, amounts, and action items extracted. CosmoLex requires manual entry for all of this." },
              { title: "Audio transcription", body: "Upload a client meeting recording or dictation. Atticus transcribes it, extracts key facts, and makes everything searchable. CosmoLex has no transcription." },
              { title: "AI assistant (Atticus Chat)", body: "Ask questions in plain English: 'What does the Johnson retainer say about expenses?' Atticus answers from your files. CosmoLex has no conversational AI." },
              { title: "Daily morning briefing", body: "Every weekday at 9am: every overdue item, today's deadlines, outstanding invoices, negative trust balances — in one email. CosmoLex has no automated briefing." },
              { title: "Flat, transparent pricing", body: "$149 CAD/month, all features included, always. No per-feature charges, no annual price creep. CosmoLex pricing increases have frustrated long-term users." },
              { title: "Limitation period calculator", body: "Built-in Ontario Limitation Period Calculator — enter an incident date and get every applicable period calculated automatically with one-click deadline creation." },
            ].map((item) => (
              <div key={item.title} style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "6px", fontFamily: "system-ui, sans-serif", color: "#1a1a2e" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          CosmoLex vs Atticus — Side-by-Side
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          Feature comparison for Ontario solo and small law firms
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", width: "35%" }}>Feature</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#6b7280" }}>CosmoLex</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#1a1a2e", backgroundColor: "#f0f9ff" }}>Atticus</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.feature} style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600 }}>{row.feature}</td>
                  <td style={{ padding: "12px 16px", color: row.cosmolex.startsWith("✗") ? "#ef4444" : "#4b5563" }}>{row.cosmolex}</td>
                  <td style={{ padding: "12px 16px", color: row.atticus.startsWith("✓") ? "#15803d" : "#374151", fontWeight: row.atticus.startsWith("✓") ? 600 : 400, backgroundColor: i % 2 === 0 ? "#f0f9ff" : "#e0f2fe" }}>{row.atticus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* The pricing question */}
      <section style={{ backgroundColor: "#fef3c7", borderTop: "1px solid #fde68a", borderBottom: "1px solid #fde68a", padding: "40px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "#92400e" }}>
            On CosmoLex&apos;s Pricing
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#78350f", fontFamily: "system-ui, sans-serif" }}>
            CosmoLex is marketed as ~$89–$99 USD per month per user, but reviews note that the product has seen repeated price increases while the product itself has not kept pace. For Canadian firms, the USD pricing also means currency exposure — your monthly cost fluctuates with exchange rates.
          </p>
          <p style={{ fontSize: "14px", color: "#92400e", fontFamily: "system-ui, sans-serif", marginTop: "12px" }}>
            Atticus is $149 CAD/month, all-inclusive. No USD exposure, no per-feature upgrades.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px", fontWeight: 700, marginBottom: "16px", color: "#1a1a2e" }}>
            Try Atticus Free for 14 Days
          </h2>
          <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
            No credit card. Full access to AI document processing, trust accounting, deadline tracking, and the Atticus AI assistant.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "14px 36px", borderRadius: "8px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "16px" }}>
            Get Started Free
          </Link>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginTop: "16px" }}>
            $149 CAD/month · Canadian infrastructure · Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/clio-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>Clio Alternative</Link>
            <Link href="/pclaw-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>PCLaw Alternative</Link>
            <Link href="/leap-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>LEAP Alternative</Link>
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
