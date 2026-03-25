import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Casetext / CoCounsel Alternative for Ontario Law Firms — Atticus (2026)",
  description:
    "Comparing Casetext CoCounsel vs Atticus for Ontario lawyers. Casetext is US legal research AI. Atticus is AI-powered full practice management built for Ontario — trust accounting, LSO compliance, deadline tracking, and AI document intelligence.",
  openGraph: {
    title: "Casetext / CoCounsel Alternative for Ontario Law Firms — Atticus (2026)",
    description:
      "Casetext CoCounsel vs Atticus: US legal research AI vs AI-powered full practice management with Canadian trust accounting, Ontario limitation period tracking, and LSO compliance.",
    type: "website",
    url: "https://getatticus.ca/casetext-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/casetext-alternative" },
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
    title: "Casetext is US legal research — not Ontario practice management",
    detail: "Casetext CoCounsel (now part of Thomson Reuters) is built around US case law research and US court filings. Ontario lawyers need software that handles Canadian trust accounting, LSO compliance, and Ontario court deadlines — not US Westlaw research.",
  },
  {
    title: "No Canadian trust accounting",
    detail: "Casetext has no trust accounting functionality. Ontario lawyers must comply with LSO By-Law 9 mixed trust account rules, Form 9 monthly reconciliation, and per-client trust ledgers. Atticus handles all of this natively with CAD-denominated accounts.",
  },
  {
    title: "AI grounded in your actual case files",
    detail: "Atticus AI processes every document and audio file you upload — extracting deadlines, parties, damages, and action items — then answers questions grounded in your specific file. Casetext&apos;s CoCounsel is trained on generic legal databases, not your matter-specific documents.",
  },
  {
    title: "Ontario limitation period tracking built in",
    detail: "The 2-year limitation period, 10-day municipal notice deadline, and 60-day construction lien preservation deadline are automatically flagged in Atticus. Casetext has no Ontario-specific deadline intelligence and no deadline tracking at all.",
  },
  {
    title: "Full practice management — not just research",
    detail: "Atticus is complete practice management: client records, matter tracking, time logging, HST invoicing, trust accounting, conflict checking, and a client portal. Casetext is a research and drafting tool. Ontario lawyers need the full picture.",
  },
  {
    title: "Priced in CAD for Ontario firms",
    detail: "Atticus is $149 CAD per lawyer per month — designed and priced for the Canadian market. Casetext pricing is USD and designed for US law firms, creating currency risk and feature misalignment for Ontario users.",
  },
];

const comparison = [
  { feature: "Canadian trust accounting (By-Law 9)", casetext: false, atticus: true },
  { feature: "HST billing support", casetext: false, atticus: true },
  { feature: "AI grounded in your matter files", casetext: false, atticus: true },
  { feature: "Ontario limitation period calculator", casetext: false, atticus: true },
  { feature: "Automatic deadline extraction", casetext: false, atticus: true },
  { feature: "Daily morning briefing", casetext: false, atticus: true },
  { feature: "Matter and client management", casetext: false, atticus: true },
  { feature: "Time tracking and invoicing", casetext: false, atticus: true },
  { feature: "Client portal with document upload", casetext: false, atticus: true },
  { feature: "Conflict of interest checking", casetext: false, atticus: true },
  { feature: "CAD pricing", casetext: false, atticus: true },
  { feature: "AI legal research / document drafting", casetext: true, atticus: true },
  { feature: "AI chat assistant", casetext: true, atticus: true },
  { feature: "14-day free trial", casetext: false, atticus: true },
];

export default function CasetextAlternativePage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-casetext-alt" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>

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
        <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "20px" }}>Casetext Alternative</p>
        <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "20px" }}>
          Using Casetext / CoCounsel in Ontario?<br /><em style={{ fontStyle: "italic", color: "#e8b84b" }}>Atticus is built for the full picture.</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, maxWidth: "620px", margin: "0 auto 36px" }}>
          Casetext CoCounsel is US legal research AI with no Canadian trust accounting, no Ontario limitation period tracking, and no practice management. Atticus is AI-powered full practice management built specifically for Ontario solo and small law firms.
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
          Why Ontario lawyers choose Atticus over Casetext
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
          Casetext vs Atticus — Feature Comparison
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                <th style={{ textAlign: "left", padding: "14px 16px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Feature</th>
                <th style={{ textAlign: "center", padding: "14px 16px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Casetext</th>
                <th style={{ textAlign: "center", padding: "14px 16px", color: "#C6922A", fontWeight: 500 }}>Atticus</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                  <td style={{ padding: "13px 16px", color: "rgba(240,232,216,0.8)" }}>{row.feature}</td>
                  <td style={{ padding: "13px 16px", textAlign: "center", color: row.casetext === false ? "rgba(240,232,216,0.2)" : "rgba(240,232,216,0.7)" }}>
                    {typeof row.casetext === "boolean" ? (row.casetext ? "✓" : "✗") : row.casetext}
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
          AI that knows your Ontario practice — not just US case law
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
            { href: "/pclaw-alternative", label: "PCLaw Alternative" },
            { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
            { href: "/mycase-alternative", label: "MyCase Alternative" },
            { href: "/filevine-alternative", label: "Filevine Alternative" },
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
