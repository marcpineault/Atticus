import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "uLawPractice Alternative for Ontario Lawyers & Paralegals | Atticus",
  description:
    "Looking for a uLawPractice alternative? Atticus is AI-native practice management for Ontario lawyers and paralegals — trust accounting, AI document processing, deadline extraction, $149 CAD/month.",
  keywords: [
    "ulawpractice alternative ontario",
    "ulaw alternative ontario lawyers",
    "ulaw alternative paralegal ontario",
    "ulawpractice vs atticus",
    "ulaw practice management alternative",
    "ulawpractice competitor ontario",
    "ulaw alternative canada",
  ],
  openGraph: {
    title: "uLawPractice Alternative for Ontario Lawyers & Paralegals — Atticus",
    description:
      "AI-native alternative to uLawPractice. Canadian infrastructure, trust accounting, AI document processing, deadline extraction. $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/ulawpractice-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/ulawpractice-alternative" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — uLawPractice Alternative for Ontario Lawyers and Paralegals",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-native practice management alternative to uLawPractice for Ontario lawyers and paralegals. Trust accounting, AI document processing, automatic deadline extraction, billing, and an AI assistant.",
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
  { feature: "Origin", ulaw: "Canadian — built for Canadian lawyers and paralegals", atticus: "Canadian — built for Ontario" },
  { feature: "Target user", ulaw: "Sole practitioners and paralegals", atticus: "Ontario solo and small law firms + paralegals" },
  { feature: "Data residency", ulaw: "Canada", atticus: "Canada" },
  { feature: "Trust accounting (By-Law 9)", ulaw: "✓ Core feature", atticus: "✓ Yes — receipts, disbursements, per-client balances" },
  { feature: "AI document processing", ulaw: "✗ No AI processing of uploaded documents", atticus: "✓ Every upload: AI summary, entities, deadline extraction" },
  { feature: "Automatic deadline extraction", ulaw: "✗ Manual entry", atticus: "✓ Extracted from every uploaded document" },
  { feature: "Audio transcription", ulaw: "✗ No", atticus: "✓ MP3/MP4/M4A → transcript + entities" },
  { feature: "AI chat over your files", ulaw: "✗ No", atticus: "✓ Ask plain-English questions about any matter" },
  { feature: "Morning briefing email", ulaw: "✗ No", atticus: "✓ Daily 9am: deadlines, invoices, trust balances" },
  { feature: "Ontario court form auto-population", ulaw: "✓ Small Claims, LTB, POA, Family forms", atticus: "Upload court forms → AI extracts all data from them" },
  { feature: "Client portal", ulaw: "✗ No", atticus: "✓ Per-matter shareable link with document upload" },
  { feature: "Conflict of interest check", ulaw: "✗ No", atticus: "✓ AI-powered, severity-rated" },
  { feature: "AI document drafting", ulaw: "✗ No", atticus: "✓ 13 document types grounded in your case files" },
  { feature: "Pricing", ulaw: "Starting ~$34 CAD/month (basic tier)", atticus: "$149 CAD/month — all features included" },
  { feature: "Free trial", ulaw: "Free tier available (limited features)", atticus: "✓ 14 days full access, no credit card" },
];

export default function UlawAlternativePage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-ulaw" type="application/ld+json">{jsonLd}</Script>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#fff" }}>
        <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", textDecoration: "none" }}>
          Atticus
        </Link>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
          <Link href="/ontario-paralegal-software" style={{ color: "#4b5563", textDecoration: "none" }}>Paralegal Software</Link>
          <Link href="/pricing" style={{ color: "#4b5563", textDecoration: "none" }}>Pricing</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>
            Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "880px", margin: "0 auto", padding: "72px 24px 48px" }}>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#6b7280", textTransform: "uppercase", marginBottom: "16px" }}>
          uLawPractice Alternative
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px", color: "#1a1a2e" }}>
          uLawPractice vs Atticus:<br />When You Want AI in Your Practice
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "16px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          uLawPractice is a solid Canadian legal platform — trusted by paralegals and sole practitioners, strong on trust accounting, and priced accessibly. But it was built before AI changed what practice management software can do.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          Atticus adds what uLaw doesn&apos;t have: AI that reads every document you upload, extracts deadlines automatically, transcribes your meetings, and answers questions about your files. Both platforms are Canadian. Only one has AI.
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

      {/* What uLaw does well / where Atticus is different */}
      <section style={{ backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", padding: "48px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "24px", color: "#1a1a2e" }}>
            uLawPractice vs Atticus: What&apos;s Actually Different
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: "15px", fontWeight: 700, marginBottom: "12px", color: "#4b5563" }}>What uLawPractice Does Well</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "By-Law 9 trust accounting compliance",
                  "Ontario court form auto-population",
                  "Canadian-built with regulatory knowledge",
                  "Affordable pricing for solo practitioners",
                  "Voted Best Cloud Software by Canadian Lawyer",
                  "CRA-compliant invoicing and HST tracking",
                ].map((item) => (
                  <li key={item} style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#4b5563", display: "flex", gap: "8px" }}>
                    <span style={{ color: "#22c55e" }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ border: "2px solid #1a1a2e", borderRadius: "8px", padding: "20px" }}>
              <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: "15px", fontWeight: 700, marginBottom: "12px", color: "#1a1a2e" }}>What Atticus Adds That uLaw Doesn&apos;t Have</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "AI reads and summarizes every uploaded document",
                  "Automatic deadline extraction from all files",
                  "Meeting and call transcription (Whisper AI)",
                  "Ask questions about your files in plain English",
                  "Daily morning briefing with deadlines and trust",
                  "Client portal with document upload",
                  "AI conflict of interest check",
                  "AI document drafting (13 document types)",
                ].map((item) => (
                  <li key={item} style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#1a1a2e", display: "flex", gap: "8px" }}>
                    <span style={{ color: "#1a1a2e", fontWeight: 700 }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          uLawPractice vs Atticus — Side-by-Side
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          For Ontario lawyers and paralegals choosing between them
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", width: "30%" }}>Feature</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#6b7280" }}>uLawPractice</th>
                <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#1a1a2e", backgroundColor: "#f0f9ff" }}>Atticus</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.feature} style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600 }}>{row.feature}</td>
                  <td style={{ padding: "12px 16px", color: row.ulaw.startsWith("✗") ? "#ef4444" : "#4b5563" }}>{row.ulaw}</td>
                  <td style={{ padding: "12px 16px", color: row.atticus.startsWith("✓") ? "#15803d" : "#374151", fontWeight: row.atticus.startsWith("✓") ? 600 : 400, backgroundColor: i % 2 === 0 ? "#f0f9ff" : "#e0f2fe" }}>{row.atticus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing honesty */}
      <section style={{ backgroundColor: "#fef9f0", borderTop: "1px solid #fed7aa", borderBottom: "1px solid #fed7aa", padding: "40px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "#92400e" }}>
            On Pricing: uLaw Is Cheaper. Here&apos;s Why the Difference Matters.
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#78350f", fontFamily: "system-ui, sans-serif", marginBottom: "12px" }}>
            uLaw starts cheaper than Atticus — and for a paralegal who wants basic trust accounting and invoicing, that matters. We won&apos;t pretend otherwise.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#78350f", fontFamily: "system-ui, sans-serif" }}>
            The question is what you&apos;re getting for the difference. At $149 CAD/month, Atticus includes unlimited AI document processing on every uploaded file, automatic deadline extraction, audio transcription, AI conflict checking, a client portal, and AI document drafting grounded in your case files. If you currently spend any time manually extracting deadlines, searching your documents, or transcribing meetings — the AI features recover that time cost in the first week.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px", fontWeight: 700, marginBottom: "16px", color: "#1a1a2e" }}>
            14 Days to See the Difference AI Makes
          </h2>
          <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
            Free trial, no credit card. Upload your first document and watch it process automatically.
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
            <Link href="/ontario-paralegal-software" style={{ color: "#6b7280", textDecoration: "none" }}>Paralegal Software</Link>
            <Link href="/trust-accounting-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Trust Accounting</Link>
            <Link href="/clio-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>Clio Alternative</Link>
            <Link href="/pclaw-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>PCLaw Alternative</Link>
            <Link href="/blog/form-9-trust-reconciliation-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Form 9 Guide</Link>
            <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
