import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Lolly Law Alternative — Atticus vs Lolly Law for Ontario Immigration Lawyers",
  description:
    "Comparing Lolly Law and Atticus for Ontario immigration lawyers. See how Atticus delivers AI document processing, LSO-compliant trust accounting, and Canadian data residency beyond Lolly Law's US immigration focus.",
  alternates: { canonical: "https://getatticus.ca/lolly-law-alternative" },
  openGraph: {
    title: "Lolly Law Alternative — Atticus vs Lolly Law",
    description:
      "Ontario immigration lawyers comparing Lolly Law with Atticus. AI practice management, trust accounting, and Canadian data residency for Ontario immigration law firms.",
    url: "https://getatticus.ca/lolly-law-alternative",
    type: "website",
  },
};

type Feature = { feature: string; atticus: string; lollylaw: string };

const features: Feature[] = [
  {
    feature: "Designed for",
    atticus: "Ontario solo and small law firms — all practice areas including immigration",
    lollylaw: "US immigration law firms — USCIS and US immigration forms",
  },
  {
    feature: "Canadian immigration forms",
    atticus: "Document management for IRCC applications, NOAs, permits",
    lollylaw: "US immigration forms only — no IRCC/Canadian immigration integration",
  },
  {
    feature: "Ontario LSO compliance",
    atticus: "Full By-Law 9 trust accounting, LSO rules",
    lollylaw: "No Ontario-specific compliance — US bar rules only",
  },
  {
    feature: "AI document intelligence",
    atticus: "Extracts deadlines, parties, action items from any document",
    lollylaw: "No AI document processing",
  },
  {
    feature: "Canadian data residency",
    atticus: "Data stored on Canadian servers",
    lollylaw: "US-based servers — no Canadian data residency",
  },
  {
    feature: "Morning briefings",
    atticus: "Daily 9am email with deadlines, action items, open matters",
    lollylaw: "Not available",
  },
  {
    feature: "Trust accounting",
    atticus: "Full LSO By-Law 9 compliant trust ledger and reconciliation",
    lollylaw: "Limited — not built for Ontario By-Law 9",
  },
  {
    feature: "Matter management",
    atticus: "Clients, matters, documents, deadlines, time entries linked",
    lollylaw: "Immigration case management with US form tracking",
  },
  {
    feature: "Billing & invoicing",
    atticus: "Time tracking, invoices, Stripe online payments, HST",
    lollylaw: "Billing with US tax rules — HST not natively supported",
  },
  {
    feature: "Limitation period tracking",
    atticus: "AI-extracted from documents with reminders",
    lollylaw: "Manual deadline entry for US immigration timelines",
  },
  {
    feature: "Pricing",
    atticus: "From $49/month CAD — all features included",
    lollylaw: "USD per-user pricing — currency conversion adds cost",
  },
];

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalApplication",
  "operatingSystem": "Web",
  "description": "AI-powered legal practice management for Ontario solo and small law firms including immigration practices. LSO-compliant trust accounting, AI document intelligence, and Canadian data residency.",
  "url": "https://getatticus.ca",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "CAD"
  }
}`;

export default function LollyLawAlternativePage() {
  return (
    <>
      <Script id="schema-lollylaw" type="application/ld+json" strategy="beforeInteractive">
        {schemaJson}
      </Script>
      <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "0 auto", padding: "40px 24px", color: "#111" }}>
        <nav style={{ marginBottom: 32, fontSize: 14, color: "#666" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Atticus</Link>
          {" › "}
          <span>Lolly Law Alternative</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
          Atticus vs Lolly Law: Ontario Immigration Law Practice Management Built for Canada
        </h1>

        <p style={{ fontSize: 18, color: "#444", marginBottom: 40, lineHeight: 1.6 }}>
          Lolly Law is a practice management platform built specifically for US immigration law firms —
          with deep integrations for USCIS forms and US immigration workflows. Ontario immigration lawyers
          who handle IRCC applications, work permits, permanent residence, and refugee claims have fundamentally
          different needs. Atticus is built for the Ontario market: full LSO compliance, Canadian data residency,
          and AI that processes IRCC documents and tracks IRPA timelines.
        </p>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>The US-Canada Problem with Lolly Law</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Lolly Law&apos;s value proposition is built on US immigration form automation — it integrates with
            USCIS databases and pre-populates US immigration forms. For Ontario immigration lawyers, this core
            feature is irrelevant. IRCC uses entirely different forms, processing systems, and timelines.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            More critically, Lolly Law has no Ontario trust accounting, stores data on US servers, and was not
            designed around the Law Society of Ontario&apos;s professional obligations. Ontario immigration
            lawyers who use Lolly Law typically need separate trust accounting software and face data residency
            concerns.
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
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "37.5%" }}>Lolly Law</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{row.feature}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#166534" }}>{row.atticus}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{row.lollylaw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Why Ontario Immigration Lawyers Choose Atticus</h2>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>1. AI Processes IRCC Correspondence and NOAs</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Ontario immigration files generate volumes of IRCC correspondence — acknowledgment of receipt letters,
            NOAs, biometrics requests, medical exam instructions, procedural fairness letters. Atticus reads every
            document and extracts deadlines, required responses, and action items automatically.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>2. Client Data Stays in Canada</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Immigration clients share some of the most sensitive personal information that exists: passport copies,
            biometric data, medical records, and family information. Ontario lawyers handling this data have
            confidentiality obligations under the Law Society Act and guidance from the LSO on technology. Atticus
            stores all data on Canadian servers.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>3. Trust Accounting for Immigration Retainers</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Immigration clients typically pay retainers that are held in trust until fees are earned. Ontario
            immigration lawyers are subject to the same By-Law 9 trust accounting requirements as all other
            Ontario lawyers. Atticus handles the complete trust accounting cycle from retainer receipt to fee
            transfer.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>4. Voice Notes for Client Consultations</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            Immigration consultations often cover complex factual backgrounds — immigration history, family
            status, employment records. Record a voice note after the consultation, upload to Atticus, and
            it transcribes and structures the key facts automatically.
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
                <li>Daily briefings</li>
                <li>Canadian data residency</li>
              </ul>
            </div>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Lolly Law</h3>
              <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#666" }}>USD per-user pricing</p>
              <ul style={{ paddingLeft: 20, lineHeight: 2, color: "#444", fontSize: 14 }}>
                <li>US immigration form automation</li>
                <li>No Canadian immigration integration</li>
                <li>No Ontario LSO compliance</li>
                <li>No AI features</li>
                <li>US data storage</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ background: "#eff6ff", borderRadius: 16, padding: 40, textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
            Ontario Immigration Practice Management Built for Canada
          </h2>
          <p style={{ fontSize: 16, color: "#444", marginBottom: 24 }}>
            AI document intelligence, LSO trust accounting, and Canadian data residency — purpose-built for
            Ontario immigration law firms.
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
              { href: "/mycase-alternative", label: "MyCase Alternative" },
              { href: "/filevine-alternative", label: "Filevine Alternative" },
              { href: "/ontario-immigration-lawyer", label: "Ontario Immigration Lawyers" },
              { href: "/cosmolex-alternative", label: "CosmoLex Alternative" },
              { href: "/lawcus-alternative", label: "Lawcus Alternative" },
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
