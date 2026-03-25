import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Legal Files Alternative for Ontario Law Firms — Atticus (2026)",
  description:
    "Comparing Legal Files vs Atticus for Ontario lawyers. Legal Files is an enterprise case management system built for large legal departments. Atticus is AI-powered full practice management built for Ontario solo and small law firms — with Canadian trust accounting and LSO compliance.",
  openGraph: {
    title: "Legal Files Alternative for Ontario Law Firms — Atticus (2026)",
    description:
      "Legal Files vs Atticus for Ontario lawyers: enterprise case management vs AI-powered practice management with Canadian trust accounting and Ontario-specific features.",
    type: "website",
    url: "https://getatticus.ca/legalfiles-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/legalfiles-alternative" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus",
  description: "AI practice management for Ontario law firms — built-in trust accounting, LSO compliance, and AI document intelligence.",
  applicationCategory: "LegalSoftware",
  operatingSystem: "Web",
  url: "https://getatticus.ca",
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "CAD",
    description: "Per lawyer per month, 14-day free trial",
  },
};

const reasons = [
  {
    title: "Legal Files is built for large corporate legal departments",
    detail: "Legal Files is enterprise case management software designed for in-house legal departments at large corporations, government agencies, and insurers. Ontario solo and small law firms need software built for private practice — not adapted enterprise software.",
  },
  {
    title: "Canadian trust accounting built in from day one",
    detail: "Ontario lawyers must maintain LSO By-Law 9 compliant mixed trust accounts, produce Form 9 monthly reconciliations, and manage per-client trust ledgers. Atticus handles all of this natively in CAD. Legal Files has no private practice trust accounting.",
  },
  {
    title: "AI document intelligence — automatic, not manual",
    detail: "Every document and audio file uploaded to Atticus is automatically processed: text extracted, AI summarized, deadlines and entities extracted. Legal Files is traditional document management without AI document intelligence built in.",
  },
  {
    title: "Ontario limitation period tracking",
    detail: "Atticus automatically flags the 2-year limitation period, 10-day municipal notice deadline, and other Ontario-specific deadlines from uploaded documents. Legal Files has no Ontario limitation period intelligence built in.",
  },
  {
    title: "Built for law firms — not legal departments",
    detail: "Private practice and in-house work have fundamentally different requirements. Law firms need client intake, billing, trust accounting, conflict checking, and client portals. Atticus is built for law firms, not repurposed from corporate legal department software.",
  },
  {
    title: "Priced for Ontario solo and small firms",
    detail: "Legal Files is enterprise software with enterprise pricing — per-seat fees and implementation costs designed for large organizations. Atticus is $149 CAD per lawyer per month with a 14-day free trial and no implementation project required.",
  },
];

const comparison = [
  { feature: "Canadian trust accounting (By-Law 9)", legalfiles: false, atticus: true },
  { feature: "HST billing support", legalfiles: false, atticus: true },
  { feature: "AI document processing (automatic)", legalfiles: false, atticus: true },
  { feature: "Ontario limitation period calculator", legalfiles: false, atticus: true },
  { feature: "Automatic deadline extraction", legalfiles: false, atticus: true },
  { feature: "Daily morning briefing", legalfiles: false, atticus: true },
  { feature: "Client intake forms", legalfiles: false, atticus: true },
  { feature: "Client portal with document upload", legalfiles: false, atticus: true },
  { feature: "Time tracking and invoicing", legalfiles: false, atticus: true },
  { feature: "AI chat assistant", legalfiles: false, atticus: true },
  { feature: "Conflict of interest checking", legalfiles: false, atticus: true },
  { feature: "CAD pricing", legalfiles: false, atticus: true },
  { feature: "Case and matter management", legalfiles: true, atticus: true },
  { feature: "14-day free trial", legalfiles: false, atticus: true },
];

export default function LegalFilesAlternativePage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-legalfiles-alt" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>

      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      <section style={{ padding: "72px 24px 56px", maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "20px" }}>Legal Files Alternative</p>
        <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "20px" }}>
          Looking for a Legal Files alternative?<br /><em style={{ fontStyle: "italic", color: "#e8b84b" }}>Atticus is built for private practice.</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, maxWidth: "620px", margin: "0 auto 36px" }}>
          Legal Files is enterprise case management for large legal departments — not built for Ontario private practice. Atticus is AI-powered full practice management with Canadian trust accounting, Ontario limitation period tracking, and AI document intelligence, built specifically for Ontario solo and small law firms.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "16px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Start Free Trial →
          </Link>
          <Link href="/pricing" style={{ border: "1px solid rgba(240,232,216,0.2)", color: "rgba(240,232,216,0.7)", padding: "16px 32px", textDecoration: "none", fontSize: "15px", borderRadius: "4px" }}>
            View Pricing
          </Link>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px", maxWidth: "860px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 300, color: "#faf8f4", marginBottom: "32px", textAlign: "center" }}>
          Why Ontario law firms choose Atticus over Legal Files
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
          {reasons.map((r, i) => (
            <div key={i} style={{ padding: "28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <div style={{ width: "28px", height: "28px", background: "rgba(198,146,42,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                <span style={{ fontSize: "13px", color: "#C6922A", fontWeight: 600 }}>{i + 1}</span>
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{r.title}</h3>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7 }}>{r.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 24px 80px", maxWidth: "860px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 300, color: "#faf8f4", marginBottom: "32px", textAlign: "center" }}>
          Legal Files vs Atticus — Feature Comparison
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                <th style={{ textAlign: "left", padding: "14px 16px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Feature</th>
                <th style={{ textAlign: "center", padding: "14px 16px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Legal Files</th>
                <th style={{ textAlign: "center", padding: "14px 16px", color: "#C6922A", fontWeight: 500 }}>Atticus</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                  <td style={{ padding: "13px 16px", color: "rgba(240,232,216,0.8)" }}>{row.feature}</td>
                  <td style={{ padding: "13px 16px", textAlign: "center", color: row.legalfiles === false ? "rgba(240,232,216,0.2)" : "rgba(240,232,216,0.7)" }}>
                    {typeof row.legalfiles === "boolean" ? (row.legalfiles ? "✓" : "✗") : row.legalfiles}
                  </td>
                  <td style={{ padding: "13px 16px", textAlign: "center", color: row.atticus === false ? "rgba(240,232,216,0.2)" : "#C6922A", fontWeight: row.atticus === true ? 500 : 400 }}>
                    {typeof row.atticus === "boolean" ? (row.atticus ? "✓" : "✗") : row.atticus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ padding: "64px 24px", background: "rgba(198,146,42,0.05)", borderTop: "1px solid rgba(198,146,42,0.15)", borderBottom: "1px solid rgba(198,146,42,0.15)", textAlign: "center", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "16px" }}>
          Private practice software — not enterprise case management
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 32px" }}>
          Built for Ontario. Priced in CAD. $149 per lawyer per month with a 14-day free trial — no credit card required.
        </p>
        <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "16px 36px", textDecoration: "none", fontSize: "16px", fontWeight: 600, borderRadius: "4px" }}>
          Start Free Trial →
        </Link>
      </section>

      <section style={{ padding: "0 24px 80px", maxWidth: "860px", margin: "0 auto" }}>
        <h3 style={{ fontSize: "16px", color: "rgba(240,232,216,0.4)", marginBottom: "16px", fontWeight: 400 }}>Also compare</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { href: "/clio-alternative", label: "Clio Alternative" },
            { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
            { href: "/pclaw-alternative", label: "PCLaw Alternative" },
            { href: "/mycase-alternative", label: "MyCase Alternative" },
            { href: "/actionstep-alternative", label: "Actionstep Alternative" },
          ].map((link, i) => (
            <Link key={i} href={link.href} style={{ fontSize: "13px", color: "rgba(240,232,216,0.5)", background: "rgba(255,255,255,0.04)", padding: "6px 14px", borderRadius: "20px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)" }}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← Atticus Home</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Blog</Link>
          <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
