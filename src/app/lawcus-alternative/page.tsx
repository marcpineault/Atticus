import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Lawcus Alternative — Atticus vs Lawcus for Ontario Law Firms",
  description:
    "Comparing Lawcus and Atticus for Ontario lawyers. See how Atticus delivers AI document intelligence, LSO-compliant trust accounting, Canadian data residency, and automated morning briefings beyond Lawcus's CRM and pipeline management.",
  alternates: { canonical: "https://getatticus.ca/lawcus-alternative" },
  openGraph: {
    title: "Lawcus Alternative — Atticus vs Lawcus",
    description:
      "Ontario lawyers comparing Lawcus with Atticus. AI practice management, trust accounting, and automated briefings for LSO-compliant Ontario law firms.",
    url: "https://getatticus.ca/lawcus-alternative",
    type: "website",
  },
};

type Feature = { feature: string; atticus: string; lawcus: string };

const features: Feature[] = [
  {
    feature: "Core strength",
    atticus: "Full AI practice management — documents, billing, trust, deadlines",
    lawcus: "CRM, client intake pipeline, and case management workflows",
  },
  {
    feature: "AI document intelligence",
    atticus: "Extracts deadlines, parties, action items from any document automatically",
    lawcus: "No AI document processing",
  },
  {
    feature: "Morning briefings",
    atticus: "Daily 9am email with deadlines, action items, open matters",
    lawcus: "Not available",
  },
  {
    feature: "Voice note processing",
    atticus: "Upload voice memos — transcribed, structured, filed",
    lawcus: "Not available",
  },
  {
    feature: "Ontario LSO trust accounting",
    atticus: "Full By-Law 9 compliant trust ledger, client ledgers, reconciliation",
    lawcus: "Limited trust accounting — not built for Ontario By-Law 9",
  },
  {
    feature: "Canadian data residency",
    atticus: "Data stored on Canadian servers",
    lawcus: "US-based servers",
  },
  {
    feature: "Client intake",
    atticus: "Branded intake links auto-create client and matter records",
    lawcus: "Strong — Kanban-style intake pipeline, online forms, e-signature",
  },
  {
    feature: "CRM and pipeline management",
    atticus: "Matter-linked client management",
    lawcus: "Built-in CRM with lead pipeline and conversion tracking",
  },
  {
    feature: "Matter management",
    atticus: "Clients, matters, documents, deadlines, time entries all linked",
    lawcus: "Matter management with custom workflows",
  },
  {
    feature: "AI chat over case files",
    atticus: "Ask questions across all documents and matters",
    lawcus: "Not available",
  },
  {
    feature: "Billing & invoicing",
    atticus: "Time tracking, invoices, Stripe online payments, HST",
    lawcus: "Time tracking, billing, online payments",
  },
  {
    feature: "Conflict checking",
    atticus: "Built-in conflict of interest search",
    lawcus: "Basic conflict checking",
  },
  {
    feature: "HST support",
    atticus: "Canadian HST built into invoicing",
    lawcus: "Primarily designed for US tax rules",
  },
  {
    feature: "Pricing",
    atticus: "From $49/month CAD — all features included",
    lawcus: "Per-user USD pricing, higher all-in cost",
  },
];

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalApplication",
  "operatingSystem": "Web",
  "description": "AI-powered legal practice management for Ontario solo and small law firms. LSO-compliant trust accounting, AI document intelligence, and Canadian data residency.",
  "url": "https://getatticus.ca",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "CAD"
  }
}`;

export default function LawcusAlternativePage() {
  return (
    <>
      <Script id="schema-lawcus" type="application/ld+json" strategy="beforeInteractive">
        {schemaJson}
      </Script>
      <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "0 auto", padding: "40px 24px", color: "#111" }}>
        <nav style={{ marginBottom: 32, fontSize: 14, color: "#666" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Atticus</Link>
          {" › "}
          <span>Lawcus Alternative</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
          Atticus vs Lawcus: AI Practice Management vs CRM-First Approach for Ontario Lawyers
        </h1>

        <p style={{ fontSize: 18, color: "#444", marginBottom: 40, lineHeight: 1.6 }}>
          Lawcus has gained attention for its modern CRM and client intake pipeline tools. Ontario lawyers
          evaluating Lawcus will find it strong on intake workflows — but light on the features Ontario practices
          require: LSO-compliant trust accounting, Canadian data residency, and AI that actually processes your
          documents. Here&apos;s how Atticus compares.
        </p>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Lawcus&apos;s Strength: CRM and Intake</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Lawcus is built around a law firm CRM — tracking leads, managing client intake pipelines with
            Kanban boards, and converting prospects to clients. If client acquisition and intake are a core
            operational challenge for your firm, Lawcus has real depth in this area.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            Atticus includes client intake as one component of a complete practice management system — branded
            intake forms that auto-create client and matter records — but Atticus&apos;s differentiation is
            in what happens after intake: AI document processing, automated briefings, and LSO-compliant trust
            accounting built for Ontario.
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
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "37.5%" }}>Lawcus</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{row.feature}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#166534" }}>{row.atticus}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{row.lawcus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Why Ontario Lawyers Choose Atticus Over Lawcus</h2>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>1. Trust Accounting Is Non-Negotiable</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Lawcus has trust accounting features but it is not built for Ontario By-Law 9. Ontario lawyers
            need client ledgers, monthly reconciliation, designated financial institution accounts, and trust
            disbursement workflows that comply with the Law Society&apos;s specific requirements. Atticus was
            built around these requirements from the ground up.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>2. AI That Reduces Daily Document Work</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            The most time-consuming work in a solo or small Ontario law firm isn&apos;t finding new clients —
            it&apos;s processing the volume of documents that existing clients generate. Atticus reads every
            document, extracts deadlines and action items, and delivers them in your 9am briefing. Lawcus
            doesn&apos;t process documents with AI.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>3. Canadian Data Residency</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Lawcus stores data on US servers. Ontario lawyers using Lawcus are storing client files — including
            privileged communications and personal information — outside Canada. Atticus stores all data on
            Canadian servers.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>4. One Price, Complete Practice</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            Lawcus is priced in USD and costs more for a full-featured setup. Atticus is $49/month CAD for
            all features — no tiers, no add-ons.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>When Lawcus Might Be the Right Choice</h2>
          <ul style={{ paddingLeft: 24, color: "#444", lineHeight: 2, fontSize: 16 }}>
            <li>Firms with a high volume of new client inquiries that need a dedicated lead pipeline and conversion tracking</li>
            <li>US-based firms or Canadian firms with primarily US operations where data residency is less of a concern</li>
            <li>Firms that already have trust accounting software and only need front-end intake and CRM</li>
          </ul>
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
                <li>Daily briefings</li>
                <li>Canadian data residency</li>
              </ul>
            </div>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Lawcus</h3>
              <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#666" }}>USD per-user pricing</p>
              <ul style={{ paddingLeft: 20, lineHeight: 2, color: "#444", fontSize: 14 }}>
                <li>CRM and intake pipeline (strong)</li>
                <li>Basic trust accounting</li>
                <li>No AI document intelligence</li>
                <li>US data storage</li>
                <li>Currency conversion adds cost</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ background: "#eff6ff", borderRadius: 16, padding: 40, textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
            Try the Ontario-Built Alternative to Lawcus
          </h2>
          <p style={{ fontSize: 16, color: "#444", marginBottom: 24 }}>
            AI document intelligence, LSO trust accounting, and Canadian data residency — purpose-built for
            Ontario law firms.
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
            Start Free Trial — No Credit Card
          </Link>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Related Comparisons</h2>
          <ul style={{ paddingLeft: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 8 }}>
            {[
              { href: "/clio-alternative", label: "Clio Alternative" },
              { href: "/clio-grow-alternative", label: "Clio Grow Alternative" },
              { href: "/mycase-alternative", label: "MyCase Alternative" },
              { href: "/practicepanther-alternative", label: "PracticePanther Alternative" },
              { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
              { href: "/pagelightprime-alternative", label: "PageLightPrime Alternative" },
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
