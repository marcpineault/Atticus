import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ESILAW / Unity Accounting Alternative for Ontario Law Firms | Atticus",
  description:
    "Looking for an ESILAW or Unity Accounting alternative? Atticus is modern cloud-based practice management for Ontario lawyers — trust accounting, AI document processing, deadline tracking, and billing in one platform.",
  keywords: [
    "esilaw alternative ontario",
    "esilaw 360 alternative",
    "unity accounting alternative ontario law firm",
    "dye durham esilaw alternative",
    "replace esilaw ontario",
    "esilaw alternative canada",
    "unity accounting law firm alternative",
  ],
  openGraph: {
    title: "ESILAW / Unity Accounting Alternative for Ontario Law Firms — Atticus",
    description:
      "Modern cloud-based alternative to ESILAW/Unity Accounting. AI document processing, trust accounting, deadline automation, $149 CAD/month all-inclusive.",
    type: "website",
    url: "https://getatticus.ca/esilaw-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/esilaw-alternative" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — ESILAW / Unity Accounting Alternative for Ontario Law Firms",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Modern ESILAW and Unity Accounting alternative for Ontario law firms. Trust accounting, AI document processing, automatic deadline extraction, billing, and an AI assistant — all on Canadian cloud infrastructure.",
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
  { feature: "Type", esilaw: "Legal accounting software", atticus: "AI-native practice management + accounting" },
  { feature: "Deployment", esilaw: "Desktop (Windows) or cloud version", atticus: "Cloud-only — any browser, anywhere" },
  { feature: "Data residency", esilaw: "Canada", atticus: "Canada" },
  { feature: "Trust accounting (By-Law 9)", esilaw: "✓ Core strength", atticus: "✓ Yes — receipts, disbursements, per-client balances" },
  { feature: "AI document processing", esilaw: "✗ No", atticus: "✓ Auto-extracts deadlines, parties, amounts" },
  { feature: "Audio transcription", esilaw: "✗ No", atticus: "✓ MP3/MP4/M4A → transcript + entities" },
  { feature: "AI chat over your files", esilaw: "✗ No", atticus: "✓ Ask plain-English questions about any file" },
  { feature: "Automatic deadline extraction", esilaw: "✗ Manual entry", atticus: "✓ From every uploaded document" },
  { feature: "Morning briefing email", esilaw: "✗ No", atticus: "✓ Daily 9am: deadlines, invoices, trust" },
  { feature: "Matter & client management", esilaw: "Basic", atticus: "✓ Full clients, matters, documents, timeline" },
  { feature: "Client portal", esilaw: "✗ No", atticus: "✓ Per-matter shareable link with document upload" },
  { feature: "Conflict of interest check", esilaw: "✗ No", atticus: "✓ AI-powered, severity-rated" },
  { feature: "AI document drafting", esilaw: "✗ No", atticus: "✓ 13 document types, grounded in your files" },
  { feature: "Pricing", esilaw: "Varies — contact Dye & Durham", atticus: "$149 CAD/month all-inclusive" },
  { feature: "Free trial", esilaw: "Demo", atticus: "✓ 14 days, no credit card" },
];

export default function EsilawAlternativePage() {
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
          ESILAW / Unity Accounting Alternative
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px", color: "#1a1a2e" }}>
          Beyond Legal Accounting:<br />The ESILAW Alternative That Includes AI
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "16px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          ESILAW (now Unity Accounting by Dye &amp; Durham) is strong at trust accounting and legal billing. But it&apos;s accounting software — not practice management. It doesn&apos;t read your documents, extract your deadlines, transcribe your meetings, or let you ask questions about your files.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          Atticus does all of that — plus trust accounting and billing. One platform, $149 CAD/month.
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

      {/* The accounting-only gap */}
      <section style={{ backgroundColor: "#fef9f0", borderTop: "1px solid #fed7aa", borderBottom: "1px solid #fed7aa", padding: "48px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "16px", color: "#92400e" }}>
            The Problem with Accounting-Only Legal Software
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#78350f", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            ESILAW/Unity is excellent at what it does: trust accounting, billing, and financial reporting. But running a law practice requires more than accounting. You also need to manage client files, track deadlines, organize documents, check conflicts, and communicate with clients.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#78350f", fontFamily: "system-ui, sans-serif" }}>
            ESILAW doesn&apos;t do any of that. Most Ontario firms that use ESILAW end up cobbling together separate tools: a shared drive for documents, Outlook for client communication, spreadsheets for deadlines. Atticus replaces that entire stack — with AI woven throughout.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          ESILAW / Unity vs Atticus — Side-by-Side
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          What you get with each platform
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", width: "30%" }}>Feature</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#6b7280" }}>ESILAW / Unity</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#1a1a2e", backgroundColor: "#f0f9ff" }}>Atticus</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.feature} style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600 }}>{row.feature}</td>
                  <td style={{ padding: "12px 16px", color: row.esilaw.startsWith("✗") ? "#ef4444" : "#4b5563" }}>{row.esilaw}</td>
                  <td style={{ padding: "12px 16px", color: row.atticus.startsWith("✓") ? "#15803d" : "#374151", fontWeight: row.atticus.startsWith("✓") ? 600 : 400, backgroundColor: i % 2 === 0 ? "#f0f9ff" : "#e0f2fe" }}>{row.atticus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Trust accounting still covered */}
      <section style={{ backgroundColor: "#f0fdf4", borderTop: "1px solid #86efac", borderBottom: "1px solid #86efac", padding: "40px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "#166534" }}>
            Atticus Has the Trust Accounting ESILAW Users Depend On
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#15803d", fontFamily: "system-ui, sans-serif", marginBottom: "12px" }}>
            The primary reason Ontario firms use ESILAW is trust accounting compliance. Atticus covers this fully: trust receipts and disbursements per client, real-time balances, negative balance alerts in your morning briefing, and CSV export for monthly reconciliation — compliant with LSO By-Law 9.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
            {["Per-client trust ledger", "Negative balance alerts", "Morning briefing includes trust", "CSV export for reconciliation", "By-Law 9 compliant", "Disbursement records"].map((item) => (
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
            Get the Full Stack, Not Just Accounting
          </h2>
          <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
            14-day free trial. No credit card. Trust accounting, AI document processing, deadline tracking, and your AI assistant — all in one platform.
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
            <Link href="/trust-accounting-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Trust Accounting</Link>
            <Link href="/ontario-legal-software" style={{ color: "#6b7280", textDecoration: "none" }}>Ontario Legal Software</Link>
            <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
            <Link href="/blog" style={{ color: "#6b7280", textDecoration: "none" }}>Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
