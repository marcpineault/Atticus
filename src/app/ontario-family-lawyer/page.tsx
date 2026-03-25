import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Practice Management Software for Ontario Family Lawyers | Atticus",
  description:
    "Atticus helps Ontario family lawyers manage separation agreements, custody matters, client communication, and deadlines — with AI document processing and LSO-compliant trust accounting built in.",
  keywords: [
    "ontario family lawyer software",
    "family law practice management ontario",
    "separation agreement software ontario",
    "divorce lawyer software ontario",
    "ontario family law firm software",
    "custody matter management software",
  ],
  openGraph: {
    title: "Practice Management Software for Ontario Family Lawyers",
    description:
      "Atticus helps Ontario family lawyers manage separation matters, track deadlines, handle trust accounting, and draft client communications — purpose-built for Ontario solicitors.",
    type: "website",
    url: "https://getatticus.ca/ontario-family-lawyer",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-family-lawyer" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — Practice Management for Ontario Family Lawyers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Practice management software for Ontario family lawyers. Separation agreement matter checklists, AI document processing, trust accounting, deadline tracking, and LSO-compliant client portals.",
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
      name: "Does Atticus have checklists for separation agreement matters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Separation Agreement matter template includes a pre-populated checklist for Ontario family law matters — from initial disclosure through to execution and filing. Each task can be assigned a due date and tracked with a progress bar.",
      },
    },
    {
      "@type": "Question",
      name: "Can Atticus draft separation agreements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI Draft tool can generate an initial draft separation agreement grounded in your client's case file details. The lawyer reviews and finalizes all documents before they are presented to clients or used in proceedings.",
      },
    },
    {
      "@type": "Question",
      name: "How does Atticus handle client communication in family law?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each matter has a shareable client portal where clients can view their matter progress, access documents, and upload new files. You can also send status update emails to clients directly from Atticus — AI-drafted and reviewed before sending.",
      },
    },
    {
      "@type": "Question",
      name: "Does Atticus track court deadlines and procedural timelines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus extracts deadlines from every uploaded document and lets you manually add court dates, statutory deadlines, and procedural timelines. You receive a morning briefing every weekday with overdue and upcoming deadlines.",
      },
    },
  ],
});

const SEPARATION_CHECKLIST = [
  "Initial consultation — document client's instructions and priorities",
  "Obtain financial disclosure (Form 13 / 13.1 if litigation)",
  "Review matrimonial home status and ownership",
  "Assess equalization of net family property",
  "Address support obligations — spousal and child support (Federal Guidelines)",
  "Negotiate and draft separation agreement provisions",
  "Advise client on independent legal advice (ILA)",
  "Review draft separation agreement with client",
  "Obtain independent legal advice signature from opposing party",
  "Execute separation agreement with witnesses",
  "Register domestic contract if applicable",
  "File for divorce if instructed (joint or contested)",
];

const FEATURES = [
  {
    title: "Separation agreement matter template",
    body: "Pre-built checklist for Ontario separation matters — from financial disclosure through to execution. Every step tracked with due dates and a progress bar.",
  },
  {
    title: "AI-drafted separation agreement",
    body: "Generate an initial draft separation agreement grounded in your client's file and instructions. You review and finalize — the first draft is done in minutes.",
  },
  {
    title: "Court deadline tracking",
    body: "Extract court dates and procedural deadlines from filed documents automatically. Daily morning briefing with overdue, today, and upcoming deadlines. 6pm escalation alert if unresolved.",
  },
  {
    title: "Client portal and communication",
    body: "Shareable portal per matter. Clients view progress, access their documents, and upload new files. Send AI-drafted status update letters directly from the matter.",
  },
  {
    title: "AI document processing",
    body: "Upload financial statements, separation agreements, court orders, or any document. Atticus AI extracts dates, parties, amounts, and action items — and emails you a summary.",
  },
  {
    title: "Conflict of interest checking",
    body: "Run a conflict check before every new client intake — AI-powered check against all existing clients, companies, and matter parties in your practice.",
  },
];

export default function OntarioFamilyLawyerPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="family-software-jsonld" type="application/ld+json">{jsonLd}</Script>
      <Script id="family-faq-jsonld" type="application/ld+json">{faqJsonLd}</Script>

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
        <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "24px" }}>Ontario Family Law</p>
        <h1 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 1.1, color: "#faf8f4", marginBottom: "24px" }}>
          Practice management for<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>Ontario family lawyers.</em>
        </h1>
        <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto 40px" }}>
          Separation agreement checklists, AI document processing, court deadline tracking, and client portals — built for Ontario family law solicitors handling separations, divorces, and child support matters.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "16px 40px", textDecoration: "none", fontSize: "15px", fontWeight: 600 }}>
            Start Free Trial →
          </Link>
          <Link href="/calculator" style={{ border: "1px solid rgba(198,146,42,0.3)", color: "#C6922A", padding: "16px 40px", textDecoration: "none", fontSize: "15px" }}>
            Free Limitation Period Calculator
          </Link>
        </div>
      </section>

      {/* LEGISLATION CALLOUT */}
      <section style={{ padding: "0 48px 64px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.15)", padding: "24px 32px" }}>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.8)", lineHeight: 1.9, margin: 0 }}>
            <strong style={{ color: "#C6922A" }}>Ontario family law practice:</strong> Family law matters in Ontario are governed by the <em>Family Law Act</em>, R.S.O. 1990, c. F.3 (equalization of net family property, support obligations), the <em>Children&apos;s Law Reform Act</em> (custody and access), and the federal <em>Divorce Act</em>, R.S.C. 1985, c. 3 (2nd Supp.) and Federal Child Support Guidelines. Atticus is built for the Ontario practice context — including Family Court Rule 13 financial disclosure requirements.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "0 48px 80px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#faf8f4", marginBottom: "40px", textAlign: "center" }}>
          Built for the Ontario family law workflow.
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

      {/* SEPARATION CHECKLIST */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "12px", textAlign: "center" }}>Ontario separation agreement checklist — built in.</h2>
        <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.5)", textAlign: "center", marginBottom: "40px" }}>Open a Separation Agreement matter and your checklist is already there. Track progress with one click.</p>

        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", padding: "28px" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {SEPARATION_CHECKLIST.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "rgba(198,146,42,0.5)", minWidth: "20px", marginTop: "1px", fontSize: "12px" }}>{i + 1}.</span>
                <span style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DOCUMENT PROCESSING */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "20px", textAlign: "center" }}>Every family law document, automatically processed.</h2>
        <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.6)", lineHeight: 1.9, marginBottom: "24px", textAlign: "center" }}>
          Upload financial disclosure forms, separation agreements, court orders, or even recorded client meetings. Atticus AI extracts key information and flags action items automatically.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            "Court dates extracted and added to your deadline tracker automatically",
            "Financial figures from Form 13 / 13.1 surfaced for quick reference",
            "Client communications transcribed from audio recordings",
            "Separation agreement key terms extracted — support amounts, asset splits, custody terms",
            "All documents semantically searchable — find any clause or fact across all your files",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span style={{ color: "#C6922A", minWidth: "20px", marginTop: "2px" }}>✓</span>
              <span style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "32px", textAlign: "center" }}>Questions from Ontario family lawyers</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
          {[
            {
              q: "Does Atticus handle child support calculations?",
              a: "Atticus extracts financial figures from documents and can reference the Federal Child Support Guidelines in AI-drafted documents. It does not do live child support calculations — use DivorceMate or the federal online calculator for that. Atticus handles the practice management side: tracking the matter, processing documents, and drafting communications.",
            },
            {
              q: "How does Atticus help with financial disclosure?",
              a: "Upload Form 13 or 13.1 documents and Atticus extracts the key financial figures — income, assets, liabilities, and property values. These appear in the matter record and are searchable. The AI assistant can answer questions about the client's financial picture using the extracted data.",
            },
            {
              q: "Can Atticus draft a separation agreement?",
              a: "Yes. The AI Draft tool generates a detailed first draft based on your client's matter notes and documents. The lawyer reviews, revises, and obtains independent legal advice from both parties before execution. Atticus is a drafting aid, not a finalized document service.",
            },
            {
              q: "Does Atticus track limitation periods for family law matters?",
              a: "Yes. The built-in Ontario limitation period calculator covers the 2-year general limitation period (which applies to family property claims under the Family Law Act, s. 7(3)). You can add any limitation period to your deadline tracker with one click.",
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
          <Link href="/ontario-limitation-period" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Limitation Period Guide</Link>
          <Link href="/ontario-real-estate-lawyer" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Real Estate Law</Link>
          <Link href="/ontario-legal-software" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Ontario Legal Software</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
