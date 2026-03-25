import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Practice Management Software for Ontario Employment Lawyers | Atticus",
  description:
    "Atticus helps Ontario employment lawyers track ESA and Human Rights Code deadlines, manage wrongful dismissal files, process offer letters and severance packages, and draft client letters — with AI automation.",
  keywords: [
    "ontario employment lawyer software",
    "employment law practice management ontario",
    "wrongful dismissal software ontario",
    "ontario employment standards act software",
    "employment lawyer practice management canada",
    "human rights code ontario lawyer software",
  ],
  openGraph: {
    title: "Practice Management Software for Ontario Employment Lawyers",
    description:
      "Atticus helps Ontario employment lawyers track ESA deadlines, manage termination files, process employment agreements, and draft demand letters — with AI document processing.",
    type: "website",
    url: "https://getatticus.ca/ontario-employment-lawyer",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-employment-lawyer" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — Practice Management for Ontario Employment Lawyers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Practice management software for Ontario employment lawyers. ESA deadline tracking, wrongful dismissal file management, AI document processing, demand letter drafting, and billing — built for Ontario employment law.",
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
      name: "Does Atticus track Employment Standards Act limitation periods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus automatically extracts deadlines from employment documents and tracks ESA complaint filing deadlines. The Ontario Limitation Period Calculator also computes the 2-year general limitation period for wrongful dismissal claims and Human Rights Code applications.",
      },
    },
    {
      "@type": "Question",
      name: "Can Atticus process employment agreements and severance packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus AI processes offer letters, employment agreements, termination letters, and severance packages — extracting key terms, dates, amounts, and obligations. Everything becomes searchable.",
      },
    },
    {
      "@type": "Question",
      name: "Can Atticus draft wrongful dismissal demand letters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The AI Draft tool generates demand letters, settlement proposals, and client update letters — grounded in your client's case file. The lawyer reviews and edits before sending.",
      },
    },
  ],
});

const ESA_CHECKLIST = [
  { step: "01", title: "Initial Consultation & Retainer", detail: "Intake form, conflict check, engagement letter, retainer funds, limitation period identified" },
  { step: "02", title: "File Review", detail: "Process employment agreement, offer letter, termination letter, ROE, T4s, pay stubs — AI extracts key terms and dates" },
  { step: "03", title: "Identify Claims & Limitation Periods", detail: "Wrongful dismissal, ESA entitlements, Human Rights Code, constructive dismissal, WSIB" },
  { step: "04", title: "Calculate Entitlements", detail: "Common law reasonable notice (Bardal factors), ESA minimum (notice, severance, termination pay), compare" },
  { step: "05", title: "Demand Letter", detail: "AI-drafted demand letter grounded in case file — set out position, calculate damages, demand settlement" },
  { step: "06", title: "Negotiations", detail: "Track offers and counteroffers, correspondence processed automatically, key terms extracted" },
  { step: "07", title: "Minutes of Settlement / Release", detail: "Draft release, ensure full and final settlement language, without prejudice correspondence" },
  { step: "08", title: "Statement of Claim (if unresolved)", detail: "AI-drafted Statement of Claim under Ontario Rules of Civil Procedure — review and file" },
  { step: "09", title: "Discovery & Production", detail: "Document production organized by matter, searchable via Atticus chat" },
  { step: "10", title: "Mediation / Trial Preparation", detail: "Track hearing dates, organize evidence, draft submissions" },
  { step: "11", title: "Resolution & Billing", detail: "Final invoice, trust balance reconciled, file closed" },
];

export default function OntarioEmploymentLawyerPage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-software" type="application/ld+json">{jsonLd}</Script>
      <Script id="jsonld-faq" type="application/ld+json">{faqJsonLd}</Script>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#fff" }}>
        <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", textDecoration: "none" }}>
          Atticus
        </Link>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
          <Link href="/calculator" style={{ color: "#4b5563", textDecoration: "none" }}>Limitation Calculator</Link>
          <Link href="/pricing" style={{ color: "#4b5563", textDecoration: "none" }}>Pricing</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>
            Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "880px", margin: "0 auto", padding: "72px 24px 48px" }}>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#6b7280", textTransform: "uppercase", marginBottom: "16px" }}>
          Ontario Employment Law Practice Management
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px", color: "#1a1a2e" }}>
          Practice Management Software for Ontario Employment Lawyers
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          Employment law in Ontario is deadline-intensive — ESA complaint deadlines, Human Rights Code time limits, the 2-year limitation period for wrongful dismissal claims. Atticus tracks every deadline automatically and keeps your files organized so you can focus on the work, not the admin.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "12px 24px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700 }}>
            Start 14-Day Free Trial
          </Link>
          <Link href="/calculator" style={{ border: "1px solid #d1d5db", color: "#374151", padding: "12px 24px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
            Limitation Period Calculator
          </Link>
        </div>
      </header>

      {/* Ontario employment law specifics */}
      <section style={{ backgroundColor: "#f0fdf4", borderTop: "1px solid #86efac", borderBottom: "1px solid #86efac", padding: "48px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "20px", color: "#166534" }}>
            Key Ontario Employment Law Deadlines
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { period: "2 years", claim: "Wrongful dismissal — general limitation period", source: "Limitations Act, 2002" },
              { period: "2 years", claim: "Human Rights Code applications (Tribunal)", source: "Ontario Human Rights Code, s. 34" },
              { period: "2 years", claim: "ESA complaints to Ministry of Labour", source: "Employment Standards Act, 2000" },
              { period: "6 months", claim: "Occupational Health & Safety reprisal complaints", source: "OHSA, s. 50" },
              { period: "No limitation", claim: "Certain pay equity claims", source: "Pay Equity Act, R.S.O. 1990, c. P.7" },
              { period: "15 years", claim: "Ultimate limitation period — wrongful dismissal", source: "Limitations Act, 2002, s. 15" },
            ].map((item) => (
              <div key={item.claim} style={{ padding: "16px 20px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #86efac" }}>
                <div style={{ fontFamily: "system-ui, sans-serif", fontWeight: 800, fontSize: "20px", color: "#166534", marginBottom: "4px" }}>{item.period}</div>
                <div style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600, fontSize: "13px", color: "#15803d", marginBottom: "4px" }}>{item.claim}</div>
                <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#4ade80", fontStyle: "italic" }}>{item.source}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#166534", marginTop: "16px" }}>
            All limitation periods are automatically calculated and tracked when Atticus processes your client documents. Use the{" "}
            <Link href="/calculator" style={{ color: "#15803d", fontWeight: 600 }}>free Limitation Period Calculator</Link>
            {" "}to check any period instantly.
          </p>
        </div>
      </section>

      {/* Wrongful dismissal workflow */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "56px 24px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          Wrongful Dismissal File Workflow
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          Standard steps Atticus helps you track for an Ontario wrongful dismissal matter
        </p>
        <div style={{ display: "grid", gap: "12px" }}>
          {ESA_CHECKLIST.map((item) => (
            <div key={item.step} style={{ display: "flex", gap: "20px", padding: "16px 20px", backgroundColor: "#f9fafb", borderRadius: "8px", border: "1px solid #e5e7eb", alignItems: "flex-start" }}>
              <span style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "11px", color: "#9ca3af", letterSpacing: "0.05em", minWidth: "24px", marginTop: "2px" }}>{item.step}</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: "15px", marginBottom: "2px", fontFamily: "system-ui, sans-serif" }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#6b7280", fontFamily: "system-ui, sans-serif" }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key features */}
      <section style={{ backgroundColor: "#f8f7f4", borderTop: "1px solid #e5e7eb", padding: "56px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "32px", color: "#1a1a2e" }}>
            Built for Employment Law Practice
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "Employment Agreement Processing",
                body: "Upload employment agreements, offer letters, and termination packages. AI extracts key terms — notice periods, non-competes, severance formulas, cause allegations.",
              },
              {
                title: "Demand Letter Drafting",
                body: "AI-generated demand letters grounded in your case file. Input the Bardal factors and the tool drafts a letter asserting your client\u2019s position. Review and send.",
              },
              {
                title: "Limitation Period Tracking",
                body: "Every relevant deadline tracked automatically. Built-in Ontario Limitation Period Calculator — one click adds any calculated period to your deadline tracker.",
              },
              {
                title: "High-Volume File Management",
                body: "Employment lawyers often manage dozens of active matters simultaneously. Atticus surfaces every overdue item and upcoming deadline across all files in your morning briefing.",
              },
              {
                title: "Contingency & Billing Tracking",
                body: "Track time on hourly matters and unbilled hours. Generate invoices with HST. Trust accounting for retainer funds. All billing visible at a glance.",
              },
              {
                title: "Conflict of Interest Check",
                body: "AI conflict check before opening any employment file. Important when acting for employees at companies who may already be in your client base on the employer side.",
              },
            ].map((f) => (
              <div key={f.title} style={{ padding: "24px", backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "56px 24px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "32px", color: "#1a1a2e" }}>
          Common Questions
        </h2>
        <div style={{ display: "grid", gap: "16px" }}>
          {[
            {
              q: "Does Atticus track Employment Standards Act limitation periods?",
              a: "Yes. Atticus extracts deadlines from employment documents automatically. The built-in Ontario Limitation Period Calculator computes the 2-year general limitation period for wrongful dismissal claims and Human Rights Code applications.",
            },
            {
              q: "Can Atticus process employment agreements and severance packages?",
              a: "Yes. Atticus AI processes offer letters, employment agreements, termination letters, and severance packages — extracting key terms, dates, amounts, and obligations. Everything becomes searchable via Atticus chat.",
            },
            {
              q: "Can Atticus draft wrongful dismissal demand letters?",
              a: "Yes. The AI Draft tool generates demand letters, settlement proposals, and client update letters — grounded in your client\u2019s case file. The lawyer reviews and edits before sending.",
            },
          ].map((item) => (
            <div key={item.q} style={{ padding: "20px", backgroundColor: "#f8f7f4", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
              <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif", color: "#1a1a2e" }}>{item.q}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", textAlign: "center", backgroundColor: "#1a1a2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px", color: "#fff" }}>
            Start Your Free 14-Day Trial
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
            No credit card required. Full access to document processing, AI drafting, deadline tracking, and billing.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#C6922A", color: "#07070a", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "15px" }}>
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginBottom: "16px", fontWeight: 700 }}>
            Practice Area Guides
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/ontario-real-estate-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Real Estate</Link>
            <Link href="/ontario-wills-estate-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Wills &amp; Estates</Link>
            <Link href="/ontario-family-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Family Law</Link>
            <Link href="/ontario-corporate-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Corporate Law</Link>
            <Link href="/ontario-civil-litigation-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Civil Litigation</Link>
            <Link href="/ontario-criminal-defence-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Criminal Defence</Link>
            <Link href="/ontario-immigration-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Immigration Law</Link>
            <Link href="/ontario-employment-lawyer" style={{ color: "#1a1a2e", fontWeight: 600, textDecoration: "none" }}>Employment Law</Link>
            <Link href="/clio-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>Clio Alternative</Link>
            <Link href="/calculator" style={{ color: "#6b7280", textDecoration: "none" }}>Limitation Calculator</Link>
            <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
