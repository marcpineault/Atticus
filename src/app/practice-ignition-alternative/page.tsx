import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Practice Ignition (Ignition) Alternative — Atticus vs Practice Ignition for Ontario Law Firms",
  description:
    "Comparing Practice Ignition (Ignition) and Atticus for Ontario law firms. See how Atticus combines client intake, proposals, billing, trust accounting, and AI document intelligence in one platform — replacing the need for Practice Ignition.",
  alternates: { canonical: "https://getatticus.ca/practice-ignition-alternative" },
  openGraph: {
    title: "Practice Ignition Alternative — Atticus vs Ignition for Ontario Lawyers",
    description:
      "Ontario lawyers comparing Practice Ignition with Atticus. Full practice management including client intake, billing, trust accounting, and AI — built for LSO compliance.",
    url: "https://getatticus.ca/practice-ignition-alternative",
    type: "website",
  },
};

type Feature = { feature: string; atticus: string; ignition: string };

const features: Feature[] = [
  {
    feature: "Core purpose",
    atticus: "Full AI practice management — intake, billing, trust, documents",
    ignition: "Client engagement letters, proposals, and billing automation",
  },
  {
    feature: "Client intake",
    atticus: "Branded intake forms auto-create client and matter records",
    ignition: "Online proposals and engagement letters with e-signature",
  },
  {
    feature: "AI document intelligence",
    atticus: "Extracts deadlines, parties, action items from any document",
    ignition: "No AI document processing",
  },
  {
    feature: "Morning briefings",
    atticus: "Daily 9am email summary of deadlines and open items",
    ignition: "Not available",
  },
  {
    feature: "Ontario LSO trust accounting",
    atticus: "Full By-Law 9 compliant trust ledger and reconciliation",
    ignition: "No trust accounting",
  },
  {
    feature: "Matter management",
    atticus: "Full matter management with linked documents and deadlines",
    ignition: "Limited — focused on engagement and billing workflow",
  },
  {
    feature: "Billing & invoicing",
    atticus: "Time tracking, invoices, Stripe online payments, HST",
    ignition: "Automated billing from accepted proposals, Stripe payments",
  },
  {
    feature: "Retainer / engagement letters",
    atticus: "Retainer agreements via intake — standard templates",
    ignition: "Polished proposal and engagement letter builder",
  },
  {
    feature: "Canadian data residency",
    atticus: "Data stored on Canadian servers",
    ignition: "US-based servers",
  },
  {
    feature: "Conflict of interest checking",
    atticus: "Built-in conflict search across clients and matters",
    ignition: "Not available",
  },
  {
    feature: "Legal practice management",
    atticus: "Built specifically for law firms — LSO rules, Ontario tax, deadlines",
    ignition: "General professional services — not legal-specific",
  },
  {
    feature: "Pricing",
    atticus: "From $49/month CAD — all features included",
    ignition: "From $65 USD/month — billing and proposal tools only",
  },
];

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalApplication",
  "operatingSystem": "Web",
  "description": "AI-powered legal practice management for Ontario solo and small law firms. LSO-compliant trust accounting, AI document intelligence, client intake, and billing in one platform.",
  "url": "https://getatticus.ca",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "CAD"
  }
}`;

export default function PracticeIgnitionAlternativePage() {
  return (
    <>
      <Script id="schema-ignition" type="application/ld+json" strategy="beforeInteractive">
        {schemaJson}
      </Script>
      <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "0 auto", padding: "40px 24px", color: "#111" }}>
        <nav style={{ marginBottom: 32, fontSize: 14, color: "#666" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Atticus</Link>
          {" › "}
          <span>Practice Ignition Alternative</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
          Atticus vs Practice Ignition (Ignition): Full Practice Management vs Engagement Letter Software for Ontario Lawyers
        </h1>

        <p style={{ fontSize: 18, color: "#444", marginBottom: 40, lineHeight: 1.6 }}>
          Practice Ignition — now called Ignition — is a popular tool for creating client proposals and
          automating billing collection. Some Ontario law firms use it for retainer agreements and client
          onboarding. But Ignition is not legal-specific: it has no trust accounting, no LSO compliance features,
          and no AI. Atticus includes client intake and engagement alongside full Ontario practice management.
        </p>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>What Practice Ignition Does Well</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Ignition&apos;s strength is its proposal and engagement letter workflow — creating polished client-facing
            proposals, getting them signed electronically, and automatically collecting retainers and ongoing billing.
            For accountants and business consultants, it is purpose-built. For law firms, its use is limited.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            Ontario law firms that use Ignition typically do so for the client onboarding experience — but they
            still need separate trust accounting software, separate matter management, and separate document
            processing. Atticus delivers a complete system where intake is one feature among many, not the
            centrepiece.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Feature Comparison</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "25%" }}>Feature</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "37.5%", color: "#2563eb" }}>Atticus</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "37.5%" }}>Practice Ignition</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{row.feature}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#166534" }}>{row.atticus}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{row.ignition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Why Ontario Law Firms Switch from Practice Ignition to Atticus</h2>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>1. Trust Accounting Is a Core Requirement</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Practice Ignition has no trust accounting. Ontario lawyers who receive retainers must hold them in
            trust under LSO By-Law 9 until fees are earned. Ignition cannot manage this — it processes payments
            directly to your business account, which may not be appropriate for advance fees that are not yet
            earned. Atticus handles the full trust accounting cycle.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>2. Legal-Specific, Not General Professional Services</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Practice Ignition was built for accountants and consultants. Its workflows reflect that. Atticus
            was built for Ontario lawyers — the terminology, the compliance features, the trust/general account
            separation, the conflict checking, and the Ontario limitation period tracking are all specific to
            legal practice.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>3. AI Document Processing</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Once a client is onboarded, the ongoing work is processing documents — emails, contracts, court
            orders, medical records. Atticus reads every uploaded document with AI and surfaces what matters.
            Practice Ignition has no document capability beyond what it generates.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>4. Replace Multiple Tools with One</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            Many Ontario law firms run: Practice Ignition (intake) + PCLaw/CosmoLex (trust accounting) + Google
            Drive (documents) + spreadsheets (deadlines). Atticus is one platform at $49/month CAD that replaces
            all of these for solo and small firm lawyers.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Pricing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ border: "2px solid #2563eb", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: "#2563eb" }}>Atticus</h3>
              <p style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>$49<span style={{ fontSize: 16, fontWeight: 400, color: "#666" }}>/month CAD</span></p>
              <ul style={{ paddingLeft: 20, lineHeight: 2, color: "#444", fontSize: 14 }}>
                <li>Full practice management</li>
                <li>AI document intelligence</li>
                <li>LSO trust accounting</li>
                <li>Client intake + matter management</li>
                <li>Canadian data residency</li>
              </ul>
            </div>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Practice Ignition</h3>
              <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#666" }}>From ~$65 USD/month</p>
              <ul style={{ paddingLeft: 20, lineHeight: 2, color: "#444", fontSize: 14 }}>
                <li>Proposals and engagement letters</li>
                <li>Billing automation</li>
                <li>No trust accounting</li>
                <li>No AI features</li>
                <li>Not legal-specific</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ background: "#eff6ff", borderRadius: 16, padding: 40, textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
            Replace Practice Ignition with a Complete Ontario Legal Platform
          </h2>
          <p style={{ fontSize: 16, color: "#444", marginBottom: 24 }}>
            Client intake, trust accounting, AI document intelligence, and daily briefings — all built for
            Ontario law firms and LSO compliance.
          </p>
          <Link
            href="/sign-up"
            style={{
              display: "inline-block",
              background: "#2563eb",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
            }}
          >
            Start Free Trial
          </Link>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Related Comparisons</h2>
          <ul style={{ paddingLeft: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 8 }}>
            {[
              { href: "/clio-alternative", label: "Clio Alternative" },
              { href: "/lawcus-alternative", label: "Lawcus Alternative" },
              { href: "/clio-grow-alternative", label: "Clio Grow Alternative" },
              { href: "/lawmatics-alternative", label: "Lawmatics Alternative" },
              { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
              { href: "/pclaw-alternative", label: "PCLaw Alternative" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: "#2563eb", textDecoration: "none", fontSize: 14 }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
