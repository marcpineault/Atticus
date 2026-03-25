import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Software for Ontario Wills and Estate Lawyers | Atticus",
  description:
    "Atticus helps Ontario wills and estate lawyers manage Will and POA matters, estate administration, trust accounting, and client communication — with SLRA-compliant AI document drafting built in.",
  keywords: [
    "ontario wills and estate lawyer software",
    "estate law practice management ontario",
    "will drafting software ontario",
    "estate administration software ontario",
    "probate software ontario",
    "powers of attorney software ontario",
  ],
  openGraph: {
    title: "Software for Ontario Wills and Estate Lawyers",
    description:
      "Atticus helps Ontario wills and estate lawyers manage matters, draft SLRA-compliant Wills, track deadlines, and handle trust accounting — purpose-built for Ontario solicitors.",
    type: "website",
    url: "https://getatticus.ca/ontario-wills-estate-lawyer",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-wills-estate-lawyer" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — Practice Management for Ontario Wills and Estate Lawyers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Practice management software for Ontario wills and estate lawyers. SLRA-compliant Will drafting, estate administration checklists, trust accounting, and AI document processing — built for Ontario solicitors.",
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "CAD",
    priceValidUntil: "2027-01-01",
    availability: "https://schema.org/InStock",
  },
  provider: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Atticus draft SLRA-compliant Wills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The AI Draft tool generates Last Will and Testament documents compliant with the Succession Law Reform Act (SLRA), R.S.O. 1990, c. S.26. All drafts are reviewed by the lawyer before finalization.",
      },
    },
    {
      "@type": "Question",
      name: "Does Atticus support Powers of Attorney under the Substitute Decisions Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The AI Draft tool generates Continuing Power of Attorney for Property and Power of Attorney for Personal Care documents compliant with the Substitute Decisions Act, 1992, S.O. 1992, c. 30.",
      },
    },
    {
      "@type": "Question",
      name: "Does Atticus handle estate administration matters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Estate Administration matter template includes a pre-populated checklist of steps from obtaining authority to administer to the final distribution. Track deadlines, log time, and process estate documents all within the matter record.",
      },
    },
    {
      "@type": "Question",
      name: "How does trust accounting work for estate funds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atticus tracks trust receipts and disbursements per client, maintains a live balance per client, and generates a By-Law 9-compliant trust ledger CSV. All trust transactions are tied to the specific client and matter.",
      },
    },
  ],
});

const WILL_CHECKLIST = [
  "Initial consultation — gather testamentary instructions",
  "Confirm testamentary capacity and freedom from undue influence",
  "Identify beneficiaries, executor, and guardian (if applicable)",
  "Review existing Wills, codicils, and insurance beneficiaries",
  "Draft Will in compliance with SLRA (two-witness execution)",
  "Review draft with client",
  "Supervise execution — ensure proper signing and witnessing",
  "Provide certified copies to client",
  "Store original or arrange secure storage",
  "Send engagement letter confirming instructions and execution",
];

const ESTATE_ADMIN_CHECKLIST = [
  "Obtain and review the Will (and any codicils)",
  "Identify estate assets and liabilities",
  "Apply for Certificate of Appointment of Estate Trustee (probate) if required",
  "Notify beneficiaries",
  "Advertise for creditors if appropriate",
  "Liquidate or transfer estate assets",
  "Pay estate debts and liabilities",
  "Prepare and file terminal tax return",
  "Obtain clearance from CRA",
  "Distribute residue to beneficiaries",
  "Prepare estate accounting",
  "Obtain releases from beneficiaries",
];

const FEATURES = [
  {
    title: "AI-drafted Wills — SLRA-compliant",
    body: "Generate a complete Last Will and Testament draft grounded in your client's instructions and case files. Compliant with the Succession Law Reform Act, R.S.O. 1990, c. S.26. You review and finalize before sending.",
  },
  {
    title: "Powers of Attorney — Substitute Decisions Act",
    body: "Draft Continuing Power of Attorney for Property and Power of Attorney for Personal Care compliant with the Substitute Decisions Act, 1992. Pre-populated with client details from your files.",
  },
  {
    title: "Estate administration checklist",
    body: "Pre-built Ontario estate administration matter template with all steps from probate application to final distribution. Every task tracked with due dates and a progress bar.",
  },
  {
    title: "Trust accounting for estate funds",
    body: "Track every estate trust receipt and disbursement tied to the client and matter. Live balance, LSO By-Law 9-compliant CSV export, and alerts for any negative balance.",
  },
  {
    title: "AI document processing",
    body: "Upload a client's existing Will, a death certificate, or any estate document. Atticus extracts key dates, parties, dollar amounts, and action items — and emails you a summary.",
  },
  {
    title: "Client portal for document collection",
    body: "Send the estate executor a portal link to collect death certificate, existing Will, asset statements, and other documents — processed automatically when uploaded.",
  },
];

const CHECKLIST_SECTIONS = [
  { title: "Will & Powers of Attorney", items: WILL_CHECKLIST },
  { title: "Estate Administration", items: ESTATE_ADMIN_CHECKLIST },
];

export default function OntarioWillsEstateLawyerPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="wills-software-jsonld" type="application/ld+json">{jsonLd}</Script>
      <Script id="wills-faq-jsonld" type="application/ld+json">{faqJsonLd}</Script>

      {/* NAV */}
      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Pricing</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 48px 64px", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "24px" }}>Ontario Wills &amp; Estate Law</p>
        <h1 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 1.1, color: "#faf8f4", marginBottom: "24px" }}>
          Practice management for<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>Ontario wills and estate solicitors.</em>
        </h1>
        <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto 40px" }}>
          SLRA-compliant Will drafting, estate administration checklists, trust accounting for estate funds, and AI document processing — built for Ontario solicitors handling Wills, Powers of Attorney, and estate matters.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "16px 40px", textDecoration: "none", fontSize: "15px", fontWeight: 600 }}>
            Start Free Trial →
          </Link>
          <Link href="/trust-accounting-ontario" style={{ border: "1px solid rgba(198,146,42,0.3)", color: "#C6922A", padding: "16px 40px", textDecoration: "none", fontSize: "15px" }}>
            Trust Accounting Details
          </Link>
        </div>
      </section>

      {/* LEGISLATION CALLOUT */}
      <section style={{ padding: "0 48px 64px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {[
            {
              title: "SLRA Compliance",
              body: "AI-drafted Wills reference the Succession Law Reform Act, R.S.O. 1990, c. S.26 for formality requirements, spousal inheritance rights, and intestacy provisions.",
            },
            {
              title: "Substitute Decisions Act",
              body: "Powers of Attorney drafted to comply with the Substitute Decisions Act, 1992, S.O. 1992, c. 30, covering both property and personal care authority.",
            },
          ].map(item => (
            <div key={item.title} style={{ background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.15)", padding: "24px 28px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "0 48px 80px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#faf8f4", marginBottom: "40px", textAlign: "center" }}>
          Built for the Ontario wills and estate workflow.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
          {FEATURES.map(f => (
            <div key={f.title} style={{ background: "#07070a", padding: "32px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHECKLISTS */}
      <section style={{ padding: "0 48px 80px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "12px", textAlign: "center" }}>Ontario matter checklists — ready on day one.</h2>
        <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.5)", textAlign: "center", marginBottom: "48px" }}>Pre-built for Ontario wills and estate matters. Open a matter, select the type, and your checklist appears.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {CHECKLIST_SECTIONS.map(list => (
            <div key={list.title} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", padding: "28px" }}>
              <h3 style={{ fontSize: "13px", fontWeight: 600, color: "#C6922A", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{list.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {list.items.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "rgba(198,146,42,0.5)", minWidth: "16px", marginTop: "1px", fontSize: "12px" }}>{i + 1}.</span>
                    <span style={{ fontSize: "13px", color: "rgba(240,232,216,0.65)", lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* AI DRAFT HIGHLIGHT */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "20px", textAlign: "center" }}>AI Draft — Ontario legal documents in minutes.</h2>
        <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.6)", lineHeight: 1.9, marginBottom: "24px", textAlign: "center" }}>
          The Atticus AI Draft tool generates SLRA and Substitute Decisions Act-compliant documents grounded in your client&apos;s file. You review and finalize — but the first draft is done in minutes.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "40px" }}>
          {[
            "Last Will and Testament",
            "Continuing POA for Property",
            "POA for Personal Care",
            "Engagement Letter",
            "Client Status Update",
            "Legal Memo",
          ].map(t => (
            <span key={t} style={{ background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.15)", padding: "8px 16px", fontSize: "13px", color: "rgba(240,232,216,0.7)" }}>{t}</span>
          ))}
        </div>
        <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.35)", textAlign: "center", lineHeight: 1.7 }}>
          All AI drafts are intended as a starting point. The lawyer reviews and finalizes every document before it is sent or executed.
        </p>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "32px", textAlign: "center" }}>Questions from Ontario wills and estate solicitors</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
          {[
            {
              q: "Are the AI-drafted Wills ready to sign?",
              a: "The AI Draft tool generates a detailed first draft grounded in your client's instructions and case files. The lawyer must review, revise as needed, and supervise execution. Atticus is a drafting tool, not a finalized document service.",
            },
            {
              q: "Does Atticus handle testamentary capacity assessments?",
              a: "Atticus does not assess testamentary capacity — that is a professional judgment the lawyer makes. However, you can log capacity assessment notes in the matter record and use the AI assistant to help document your analysis.",
            },
            {
              q: "Can I track multiple beneficiaries and estate assets?",
              a: "Yes. You can upload asset schedules, insurance statements, and bank documents to the matter. Atticus AI extracts key figures and parties, and your matter notes and client records allow full tracking within the matter.",
            },
            {
              q: "How does Atticus handle trust accounting for estates?",
              a: "Log estate trust receipts (proceeds from asset sales, insurance payouts) and disbursements (creditor payments, beneficiary distributions) tied to the client and matter. Live per-client balance, negative balance alerts, and a By-Law 9-compliant CSV ledger export.",
            },
            {
              q: "Is there a free trial?",
              a: "Yes — 14 days, full access, no credit card required. Canadian data residency. $149 CAD per lawyer per month after trial.",
            },
          ].map((item, i) => (
            <div key={i} style={{ background: "#07070a", padding: "28px 32px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{item.q}</h3>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ border: "1px solid rgba(198,146,42,0.2)", padding: "48px 40px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Start Today</p>
          <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "16px" }}>
            14-day free trial. No credit card required.
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.5)", marginBottom: "32px", lineHeight: 1.7 }}>
            Full access to all features. Canadian data residency. $149 CAD per lawyer per month after trial.
          </p>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "16px 40px", textDecoration: "none", fontSize: "15px", fontWeight: 600, display: "inline-block" }}>
            Start Free Trial →
          </Link>
        </div>
      </section>

      <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← Atticus Home</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/trust-accounting-ontario" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Trust Accounting</Link>
          <Link href="/ontario-real-estate-lawyer" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Real Estate Law</Link>
          <Link href="/ontario-legal-software" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Ontario Legal Software</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
