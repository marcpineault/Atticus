import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Soluno / Actionstep Legal Accounting Alternative for Ontario | Atticus",
  description:
    "Looking for a Soluno or Actionstep Legal Accounting alternative? Atticus is AI-native practice management for Ontario lawyers — trust accounting, AI document processing, deadline tracking, $149 CAD/month.",
  keywords: [
    "soluno alternative ontario",
    "actionstep legal accounting alternative canada",
    "soluno alternative canada",
    "replace soluno law firm",
    "actionstep alternative ontario",
    "soluno legal software alternative",
    "soluno vs atticus",
    "pclaw successor alternative ontario",
    "soluno problems alternative",
  ],
  openGraph: {
    title: "Soluno / Actionstep Legal Accounting Alternative — Atticus",
    description:
      "Move from Soluno (now Actionstep Legal Accounting) to AI-native practice management. Canadian infrastructure, trust accounting, AI document processing. $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/soluno-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/soluno-alternative" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — Soluno / Actionstep Legal Accounting Alternative for Ontario Law Firms",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-native practice management alternative to Soluno (now Actionstep Legal Accounting) for Ontario law firms. Trust accounting, AI document processing, automatic deadline extraction, billing, and an AI assistant.",
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
  { feature: "Origin", soluno: "Mississauga, Ontario (PCLaw veterans) → now owned by Actionstep (NZ)", atticus: "Canadian — built for Ontario" },
  { feature: "Current branding", soluno: "\"Actionstep Legal Accounting\" (rebranded 2023)", atticus: "Atticus" },
  { feature: "Pricing", soluno: "~$71–79 CAD/user/month (accounting only)", atticus: "$149 CAD/month — full practice management + AI" },
  { feature: "Deployment", soluno: "Cloud", atticus: "Cloud-only — any browser, anywhere" },
  { feature: "Data residency", soluno: "Actionstep infrastructure (New Zealand-owned company)", atticus: "Canada — Railway Canadian infrastructure" },
  { feature: "Trust accounting (By-Law 9)", soluno: "✓ Core strength — PCLaw-style trust ledgers", atticus: "✓ Yes — receipts, disbursements, per-client balances" },
  { feature: "AI document processing", soluno: "✗ No AI processing", atticus: "✓ Every upload: summary, entity extraction, deadlines" },
  { feature: "Automatic deadline extraction", soluno: "✗ Manual entry", atticus: "✓ From every uploaded document automatically" },
  { feature: "Audio transcription", soluno: "✗ No", atticus: "✓ MP3/MP4/M4A → transcript + entities" },
  { feature: "AI chat over your files", soluno: "✗ No", atticus: "✓ Ask questions about any matter or document" },
  { feature: "Morning briefing email", soluno: "✗ No", atticus: "✓ Daily 9am: deadlines, invoices, trust balances" },
  { feature: "Mobile app", soluno: "✗ No dedicated mobile app", atticus: "✓ Works on any device via browser" },
  { feature: "Client portal", soluno: "✗ No", atticus: "✓ Per-matter shareable link with document upload" },
  { feature: "Conflict of interest check", soluno: "✗ No", atticus: "✓ AI-powered, severity-rated" },
  { feature: "Customer support", soluno: "Declined post-Actionstep acquisition (per reviews)", atticus: "Priority support included" },
  { feature: "Free trial", soluno: "Demo", atticus: "✓ 14 days, no credit card" },
];

export default function SolunoAlternativePage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-soluno" type="application/ld+json">{jsonLd}</Script>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#fff" }}>
        <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", textDecoration: "none" }}>
          Atticus
        </Link>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
          <Link href="/pclaw-alternative" style={{ color: "#4b5563", textDecoration: "none" }}>vs PCLaw</Link>
          <Link href="/clio-alternative" style={{ color: "#4b5563", textDecoration: "none" }}>vs Clio</Link>
          <Link href="/pricing" style={{ color: "#4b5563", textDecoration: "none" }}>Pricing</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>
            Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "880px", margin: "0 auto", padding: "72px 24px 48px" }}>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#6b7280", textTransform: "uppercase", marginBottom: "16px" }}>
          Soluno / Actionstep Legal Accounting Alternative
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px", color: "#1a1a2e" }}>
          If Soluno&apos;s Acquisition Has You<br />Looking for an Alternative — Here&apos;s One
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "16px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          Soluno was built in Mississauga by the team behind PCLaw — a trusted name in Ontario legal accounting. But after being acquired by Actionstep in 2023, many Ontario firms have reported declining support quality, session timeouts, and the uncertainty of being managed by a New Zealand-owned company.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          Atticus is what Soluno always should have been: trust accounting compliance, full practice management, and AI that reads your documents — built and hosted in Canada. $149 CAD/month, all-inclusive.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700 }}>
            Start Free 14-Day Trial
          </Link>
          <Link href="/pricing" style={{ border: "1px solid #d1d5db", color: "#374151", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
            See Pricing
          </Link>
        </div>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginTop: "12px" }}>No credit card required · $149 CAD/mo · Canadian infrastructure</p>
      </header>

      {/* What happened to Soluno */}
      <section style={{ backgroundColor: "#fef9f0", borderTop: "1px solid #fed7aa", borderBottom: "1px solid #fed7aa", padding: "48px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "16px", color: "#92400e" }}>
            What Happened to Soluno — And Why Ontario Firms Are Looking for Alternatives
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#78350f", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            Soluno was founded by the same Ontario team that built PCLaw, and launched in 2014 as the cloud-native successor for Canadian law firms. It was acquired by AffiniPay, and then in September 2023 acquired again by Actionstep — a New Zealand-based legal software company that now operates it as &quot;Actionstep Legal Accounting.&quot;
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#78350f", fontFamily: "system-ui, sans-serif", marginBottom: "20px" }}>
            Post-acquisition reviews tell a consistent story: support quality has declined, Canadian-specific expertise has diminished, and some longtime Soluno users are actively seeking alternatives for the first time.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              ["Support Declined", "Multiple G2 and Capterra reviews cite significantly worse support post-Actionstep acquisition. At least one reviewer reported 11 months of unresolved issues."],
              ["Session & Server Issues", "Reviews mention unexpected session timeouts and server downtime that interrupt billing and trust accounting workflows."],
              ["No Mobile App", "Soluno/Actionstep has no dedicated mobile app — limiting access for lawyers who need to log time or check files outside the office."],
              ["Accounting-Only Scope", "Soluno is primarily legal accounting software. It doesn&apos;t read documents, extract deadlines, or provide an AI assistant — you still need separate tools for practice management."],
            ].map(([title, desc]) => (
              <div key={title as string} style={{ backgroundColor: "#fff", border: "1px solid #fed7aa", borderRadius: "8px", padding: "16px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "8px", color: "#92400e", fontFamily: "system-ui, sans-serif" }}>{title as string}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#78350f", fontFamily: "system-ui, sans-serif" }}>{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          Soluno / Actionstep vs Atticus — Side-by-Side
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          For Ontario law firms evaluating their options
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", width: "30%" }}>Feature</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#6b7280" }}>Soluno / Actionstep</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#1a1a2e", backgroundColor: "#f0f9ff" }}>Atticus</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.feature} style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600 }}>{row.feature}</td>
                  <td style={{ padding: "12px 16px", color: row.soluno.startsWith("✗") ? "#ef4444" : "#4b5563" }}>{row.soluno}</td>
                  <td style={{ padding: "12px 16px", color: row.atticus.startsWith("✓") ? "#15803d" : "#374151", fontWeight: row.atticus.startsWith("✓") ? 600 : 400, backgroundColor: i % 2 === 0 ? "#f0f9ff" : "#e0f2fe" }}>{row.atticus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* For PCLaw migrants */}
      <section style={{ backgroundColor: "#f0fdf4", borderTop: "1px solid #86efac", borderBottom: "1px solid #86efac", padding: "40px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "#166534" }}>
            Coming from PCLaw? Atticus Has Everything You Relied On — Plus AI
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#15803d", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            Many Ontario lawyers chose Soluno specifically because it was built by the PCLaw team and promised a familiar trust accounting workflow. Atticus delivers the same trust accounting compliance — plus the AI features that no PCLaw successor has ever offered.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
            {[
              "Per-client trust ledger",
              "Monthly CSV reconciliation export",
              "Negative balance alerts",
              "Trust in morning briefing",
              "By-Law 9 compliant",
              "Canadian data residency",
              "AI reads every document",
              "Automatic deadline extraction",
              "No separate PM software needed",
              "$149 CAD/mo all-in",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#166534" }}>
                <span style={{ color: "#22c55e", fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px", fontWeight: 700, marginBottom: "16px", color: "#1a1a2e" }}>
            Done Dealing with Acquisition Uncertainty?
          </h2>
          <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
            14-day free trial, no credit card. Trust accounting, AI document processing, and deadline extraction — built and hosted in Canada.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "14px 36px", borderRadius: "8px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "16px" }}>
            Start Free Trial
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
            <Link href="/cosmolex-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>CosmoLex Alternative</Link>
            <Link href="/esilaw-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>ESILAW Alternative</Link>
            <Link href="/amicus-attorney-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>Amicus Alternative</Link>
            <Link href="/trust-accounting-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Trust Accounting</Link>
            <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
