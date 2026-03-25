import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CASEpeer Alternative — Atticus vs CASEpeer for Ontario Personal Injury Lawyers",
  description:
    "Comparing CASEpeer and Atticus for Ontario personal injury law firms. See how Atticus delivers AI document intelligence, LSO-compliant trust accounting, and automated briefings beyond CASEpeer's case management focus.",
  alternates: { canonical: "https://getatticus.ca/casepeer-alternative" },
  openGraph: {
    title: "CASEpeer Alternative — Atticus vs CASEpeer",
    description:
      "Ontario personal injury lawyers comparing CASEpeer with Atticus. AI practice management, trust accounting, and automated briefings for Ontario PI law firms.",
    url: "https://getatticus.ca/casepeer-alternative",
    type: "website",
  },
};

type Feature = { feature: string; atticus: string; casepeer: string };

const features: Feature[] = [
  {
    feature: "Designed for",
    atticus: "Ontario solo and small law firms — all practice areas",
    casepeer: "Personal injury law firms — US-focused, limited Canadian features",
  },
  {
    feature: "Ontario LSO compliance",
    atticus: "Full By-Law 9 trust accounting, LSO rules built-in",
    casepeer: "No Ontario-specific compliance — US state bar rules only",
  },
  {
    feature: "AI document intelligence",
    atticus: "Extracts deadlines, parties, action items from any document",
    casepeer: "No AI document processing",
  },
  {
    feature: "Morning briefings",
    atticus: "Daily 9am email with deadlines, action items, open matters",
    casepeer: "Not available",
  },
  {
    feature: "Voice note processing",
    atticus: "Upload voice memos — transcribed, structured, filed",
    casepeer: "Not available",
  },
  {
    feature: "Canadian data residency",
    atticus: "Data stored on Canadian servers",
    casepeer: "US-based servers — no Canadian data residency",
  },
  {
    feature: "Trust accounting",
    atticus: "Full LSO By-Law 9 compliant trust accounting",
    casepeer: "Basic trust tracking — not built for Ontario By-Law 9",
  },
  {
    feature: "Client intake",
    atticus: "Branded intake links auto-create client/matter records",
    casepeer: "PI intake forms with demand tracking",
  },
  {
    feature: "Matter management",
    atticus: "Clients, matters, documents, deadlines, time entries linked",
    casepeer: "PI matter management with settlements and demand tracking",
  },
  {
    feature: "AI chat over case files",
    atticus: "Ask questions across all documents and matters",
    casepeer: "Not available",
  },
  {
    feature: "Billing & invoicing",
    atticus: "Time tracking, invoices, Stripe online payments",
    casepeer: "Contingency fee tracking and settlement accounting",
  },
  {
    feature: "Limitation period tracking",
    atticus: "AI-extracted from documents with reminders",
    casepeer: "Manual statute of limitations tracking",
  },
  {
    feature: "HST billing",
    atticus: "HST on invoices built in — Canadian tax rules",
    casepeer: "US tax rules — HST not natively supported",
  },
  {
    feature: "Pricing",
    atticus: "From $49/month — all features included",
    casepeer: "Per-user pricing in USD, higher cost for Canadian firms",
  },
];

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Atticus",
  "applicationCategory": "LegalApplication",
  "operatingSystem": "Web",
  "description": "AI-powered legal practice management for Ontario solo and small law firms including personal injury practices. LSO-compliant trust accounting, AI document intelligence, and Canadian data residency.",
  "url": "https://getatticus.ca",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "CAD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "49",
      "priceCurrency": "CAD",
      "billingDuration": "P1M"
    }
  }
}`;

export default function CasePeerAlternativePage() {
  return (
    <>
      <Script id="schema-casepeer" type="application/ld+json" strategy="beforeInteractive">
        {schemaJson}
      </Script>
      <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "0 auto", padding: "40px 24px", color: "#111" }}>
        <nav style={{ marginBottom: 32, fontSize: 14, color: "#666" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Atticus</Link>
          {" › "}
          <span>CASEpeer Alternative</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
          Atticus vs CASEpeer: Ontario Personal Injury Law Firm Practice Management
        </h1>

        <p style={{ fontSize: 18, color: "#444", marginBottom: 40, lineHeight: 1.6 }}>
          CASEpeer is a US-built practice management platform designed specifically for personal injury firms.
          Ontario PI lawyers evaluating CASEpeer will find significant gaps: no LSO trust accounting, US data
          storage, and no Canadian compliance features. Atticus is built for Ontario — with full By-Law 9 trust
          accounting, Canadian data residency, and AI that processes your accident reports, medical records,
          and client communications automatically.
        </p>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>The Ontario Problem with CASEpeer</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            CASEpeer was built for the US personal injury market — specifically for high-volume American PI firms
            tracking demand letters, settlements, and liens. The product excels in that context.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            For Ontario PI lawyers, the problems are immediate:
          </p>
          <ul style={{ paddingLeft: 24, color: "#444", lineHeight: 2, fontSize: 16 }}>
            <li><strong>No LSO trust accounting:</strong> Ontario By-Law 9 requires compliant trust ledgers and monthly reconciliation — CASEpeer doesn&apos;t provide this</li>
            <li><strong>US data storage:</strong> Client data on US servers raises confidentiality concerns under Ontario&apos;s Law Society obligations</li>
            <li><strong>No HST billing:</strong> Canadian invoices require HST — CASEpeer&apos;s billing assumes US tax rules</li>
            <li><strong>No AI document intelligence:</strong> Ontario PI files are document-heavy (medical reports, accident reconstructions, OHIP records) — CASEpeer doesn&apos;t process these</li>
          </ul>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Feature Comparison</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "25%" }}>Feature</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "37.5%", color: "#2563eb" }}>Atticus</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid #e2e8f0", width: "37.5%" }}>CASEpeer</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{row.feature}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#166534" }}>{row.atticus}</td>
                    <td style={{ padding: "11px 16px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{row.casepeer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Why Ontario PI Lawyers Choose Atticus</h2>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>1. AI Processes Your Medical Records and Accident Reports</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Ontario personal injury files generate enormous volumes of documents: police reports, OHIP records,
            specialist reports, clinical notes, FSRA forms, examination under oath transcripts. Atticus processes
            every document automatically — extracting key facts, dates, parties, and limitation periods. No more
            manually reading through 300-page clinical records to find the treatment date.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>2. Ontario Limitation Periods Are Automatically Tracked</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            The two-year limitation period under the <em>Limitations Act 2002</em>, the 10-year ultimate limitation
            period, FSRA notice requirements — Atticus extracts limitation dates from documents and flags them
            in your daily briefing. CASEpeer requires manual limitation period entry.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>3. LSO Trust Accounting for PI Contingency Practices</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            PI firms in Ontario hold substantial settlement funds in trust pending disbursement. Atticus&apos;s
            LSO By-Law 9 compliant trust accounting tracks every dollar: settlement proceeds in, medical report
            payments out, legal fees transferred on invoice. Monthly reconciliation is built in.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>4. Client Data Stays in Canada</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            Accident victims&apos; medical records, financial information, and personal details belong in Canada.
            Atticus stores all data on Canadian servers, fully consistent with Ontario privacy law and LSO
            technology guidelines.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Pricing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ border: "2px solid #2563eb", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8, color: "#2563eb" }}>Atticus</h3>
              <p style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>$49<span style={{ fontSize: 16, fontWeight: 400, color: "#666" }}>/month</span></p>
              <ul style={{ paddingLeft: 20, lineHeight: 2, color: "#444", fontSize: 14 }}>
                <li>Full practice management</li>
                <li>AI document intelligence</li>
                <li>LSO trust accounting</li>
                <li>Daily briefings</li>
                <li>Canadian data residency</li>
                <li>CAD pricing — no currency conversion</li>
              </ul>
            </div>
            <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>CASEpeer</h3>
              <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#666" }}>USD per-user pricing</p>
              <ul style={{ paddingLeft: 20, lineHeight: 2, color: "#444", fontSize: 14 }}>
                <li>PI case management (US-focused)</li>
                <li>No Ontario LSO compliance</li>
                <li>No AI features</li>
                <li>US data storage</li>
                <li>No HST billing</li>
                <li>USD pricing adds currency risk</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
          {[
            {
              q: "Does CASEpeer work for Ontario personal injury lawyers?",
              a: "CASEpeer can be used by Ontario PI lawyers, but it lacks key Ontario-specific features: LSO-compliant trust accounting, Canadian data residency, and HST billing. Ontario lawyers using CASEpeer typically need additional software for trust accounting and compliance.",
            },
            {
              q: "Does Atticus have PI-specific features like demand letter tracking?",
              a: "Atticus handles full matter management including document organization, deadline tracking, and client communications for PI files. AI document processing is particularly valuable for PI practices given the high volume of medical records and reports.",
            },
            {
              q: "What about Ontario tort threshold and FSRA notices?",
              a: "Atticus tracks all deadlines extracted from documents including FSRA notice deadlines, examination under oath scheduling, and the two-year Limitations Act period. These appear in your daily briefing automatically when extracted from uploaded documents.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: i < 2 ? "1px solid #e2e8f0" : "none" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{faq.q}</h3>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </section>

        <section style={{ background: "#eff6ff", borderRadius: 16, padding: 40, textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
            Ontario-Built Practice Management for PI Lawyers
          </h2>
          <p style={{ fontSize: 16, color: "#444", marginBottom: 24 }}>
            AI document intelligence, LSO trust accounting, and Canadian data residency — everything CASEpeer
            doesn&apos;t offer for Ontario personal injury practices.
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
              { href: "/filevine-alternative", label: "Filevine Alternative" },
              { href: "/litify-alternative", label: "Litify Alternative" },
              { href: "/cloudlex-alternative", label: "CloudLex Alternative" },
              { href: "/mycase-alternative", label: "MyCase Alternative" },
              { href: "/practicepanther-alternative", label: "PracticePanther Alternative" },
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
