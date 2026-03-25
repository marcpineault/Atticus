import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Practice Management Software for Ontario Criminal Defence Lawyers | Atticus",
  description:
    "Atticus helps Ontario criminal defence lawyers track court appearance deadlines, manage disclosure documents, process police records, and draft court motions — with AI document processing and automated deadline alerts.",
  keywords: [
    "ontario criminal defence lawyer software",
    "criminal defence practice management ontario",
    "criminal law software ontario",
    "court appearance tracking software ontario",
    "disclosure document management ontario",
    "criminal defence deadline tracking ontario",
  ],
  openGraph: {
    title: "Practice Management Software for Ontario Criminal Defence Lawyers",
    description:
      "Atticus helps Ontario criminal defence lawyers track court deadlines, manage Crown disclosure, process documents, and draft motions — purpose-built for Ontario criminal defence practice.",
    type: "website",
    url: "https://getatticus.ca/ontario-criminal-defence-lawyer",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-criminal-defence-lawyer" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — Practice Management for Ontario Criminal Defence Lawyers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Practice management software for Ontario criminal defence lawyers. Court appearance tracking, Crown disclosure management, AI document processing, deadline alerts, and client communication — built for Ontario criminal defence practice under the Criminal Code and Charter.",
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
      name: "Does Atticus track court appearance dates for criminal matters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus automatically extracts court dates, appearances, and procedural deadlines from documents like bail records, Information/Indictments, and Crown disclosure. It sends daily morning briefings with all upcoming dates and a 6pm escalation alert if anything is unresolved.",
      },
    },
    {
      "@type": "Question",
      name: "Can Atticus process Crown disclosure documents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atticus processes PDF, DOCX, and TXT files — including police reports, witness statements, forensic reports, and other Crown disclosure. AI extracts key parties, dates, witnesses, and action items, and makes them semantically searchable.",
      },
    },
    {
      "@type": "Question",
      name: "Does Atticus have a criminal defence matter template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Criminal defence matters can be organized with custom checklists covering standard workflow steps from initial retainer through Crown pre-trial, trial preparation, and resolution.",
      },
    },
    {
      "@type": "Question",
      name: "Can Atticus draft criminal defence motions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The AI Draft tool can generate Notices of Motion, legal memos, client update letters, and other documents — grounded in your client's case file. The lawyer reviews and edits before filing.",
      },
    },
  ],
});

export default function OntarioCriminalDefenceLawyerPage() {
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
      <header style={{ maxWidth: "860px", margin: "0 auto", padding: "72px 24px 48px" }}>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#6b7280", textTransform: "uppercase", marginBottom: "16px" }}>
          Ontario Criminal Defence Practice Management
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px", color: "#1a1a2e" }}>
          Practice Management Software for Ontario Criminal Defence Lawyers
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          Criminal defence practice moves fast — bail hearings, Crown pre-trials, trial dates, s.11(b) Charter arguments, and mountains of disclosure. Atticus keeps every deadline tracked, every disclosure document searchable, and every client file organized.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "12px 24px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
            Start 14-Day Free Trial
          </Link>
          <Link href="/calculator" style={{ border: "1px solid #d1d5db", color: "#374151", padding: "12px 24px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
            Limitation Period Calculator
          </Link>
        </div>
      </header>

      {/* Core challenge section */}
      <section style={{ backgroundColor: "#f8f7f4", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "48px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "24px", color: "#1a1a2e" }}>
            The Crown Disclosure Problem
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            A serious criminal matter can generate thousands of pages of disclosure — police notes, forensic reports, witness statements, surveillance records, and expert opinions. Finding the one line that matters during cross-examination shouldn&apos;t require scrolling through 400 PDF pages at 11pm.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#374151", fontFamily: "system-ui, sans-serif" }}>
            Atticus processes every disclosure document you upload, extracts key parties, dates, witnesses, and action items, and makes everything semantically searchable. Ask &ldquo;What did the complainant say about the date of the incident?&rdquo; and get a direct answer.
          </p>
        </div>
      </section>

      {/* Standard criminal matter workflow */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          Criminal Defence Matter Workflow
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          Typical steps Atticus helps you track for an Ontario criminal matter
        </p>
        <div style={{ display: "grid", gap: "12px" }}>
          {[
            { step: "01", title: "Initial Retainer & Consultation", detail: "Intake form, conflict check, engagement letter, retainer funds to trust" },
            { step: "02", title: "Bail Hearing / Release", detail: "Bail hearing date, conditions, surety documents, release order processing" },
            { step: "03", title: "First Appearance / Plea Date", detail: "Court date tracking, Crown disclosure request, set date appearance" },
            { step: "04", title: "Crown Disclosure Review", detail: "Upload and AI-process all disclosure: police notes, ITO, forensic reports, witness statements" },
            { step: "05", title: "Crown Pre-trial", detail: "Pre-trial conference date, Crown position documented, resolution discussions" },
            { step: "06", title: "Judicial Pre-trial", detail: "JPT date, trial estimate, Charter applications identified, draft legal memos" },
            { step: "07", title: "Charter / Evidentiary Motions", detail: "s.8 search and seizure, s.9 arbitrary detention, s.10(b) right to counsel, Voir Dire" },
            { step: "08", title: "Trial Preparation", detail: "Witness subpoenas, expert witnesses, exhibit list, cross-examination notes" },
            { step: "09", title: "Trial / Guilty Plea", detail: "Trial date, submissions, sentencing position, character references" },
            { step: "10", title: "Sentencing / Disposition", detail: "Sentencing date, probation order, ancillary orders (SOIRA, DNA), appeal period noted" },
            { step: "11", title: "Appeal (if any)", detail: "Notice of Appeal deadline (30 days from sentence), grounds of appeal memo" },
            { step: "12", title: "File Closure", detail: "Final billing, file archive, trust balance reconciled, limitation period for civil claims if applicable" },
          ].map((item) => (
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

      {/* Charter / s.11(b) callout */}
      <section style={{ backgroundColor: "#fef3c7", borderTop: "1px solid #fde68a", borderBottom: "1px solid #fde68a", padding: "40px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "#92400e" }}>
            Section 11(b) Charter — Right to Trial in Reasonable Time
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#78350f", fontFamily: "system-ui, sans-serif", marginBottom: "12px" }}>
            Since <em>R v Jordan</em> [2016] SCC 27, strict presumptive ceilings apply: 18 months for provincial court matters, 30 months for superior court matters. Atticus tracks your matter&apos;s first appearance date and flags when the ceiling is approaching — critical for identifying potential s.11(b) Charter arguments before the window closes.
          </p>
          <p style={{ fontSize: "13px", color: "#92400e", fontFamily: "system-ui, sans-serif" }}>
            <strong>Automated deadline extraction</strong> — every court date from Crown disclosure and court documents is captured automatically.
          </p>
        </div>
      </section>

      {/* Key features */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "32px", color: "#1a1a2e" }}>
          Built for Criminal Defence Practice
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {[
            {
              title: "Disclosure Document Processing",
              body: "Upload police notes, ITOs, forensic reports, and witness statements. AI extracts key parties, dates, and facts. Ask questions in plain English and get answers grounded in the file.",
            },
            {
              title: "Court Date Tracking",
              body: "Every appearance, pre-trial, and trial date captured and tracked. 9am morning briefing and 6pm escalation alerts if upcoming dates are unresolved.",
            },
            {
              title: "AI Draft — Motions & Memos",
              body: "Generate Notices of Motion, legal memos, client update letters, and closing submissions — grounded in your case file. Review and edit before filing.",
            },
            {
              title: "Client Trust Accounting",
              body: "LSO-compliant trust receipts and disbursements. Per-client trust balances always visible. Negative balance alerts in morning briefing.",
            },
            {
              title: "Client Portal",
              body: "Shareable secure portal link for each matter. Clients can upload documents directly — disclosure extras, character reference letters, medical records — automatically processed by Atticus.",
            },
            {
              title: "Conflict of Interest Check",
              body: "AI-powered conflict check against all existing clients, companies, and parties extracted from your documents. Runs on new client creation and on demand.",
            },
          ].map((f) => (
            <div key={f.title} style={{ padding: "24px", border: "1px solid #e5e7eb", borderRadius: "10px" }}>
              <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#f8f7f4", borderTop: "1px solid #e5e7eb", padding: "56px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "32px", color: "#1a1a2e", textAlign: "center" }}>
            Common Questions
          </h2>
          <div style={{ display: "grid", gap: "16px" }}>
            {[
              {
                q: "Does Atticus track court appearance dates for criminal matters?",
                a: "Yes. Atticus automatically extracts court dates, appearances, and procedural deadlines from bail records, Informations, and Crown disclosure. It sends daily morning briefings and a 6pm escalation alert if anything is unresolved.",
              },
              {
                q: "Can Atticus process Crown disclosure documents?",
                a: "Yes. Atticus processes PDF, DOCX, and TXT files — police notes, witness statements, forensic reports. AI extracts key parties, dates, witnesses, and action items, and makes everything semantically searchable via the Atticus chat.",
              },
              {
                q: "Does Atticus have a criminal defence matter template?",
                a: "Yes. Criminal defence matters can be organized with custom action item checklists from initial retainer through bail, pre-trials, motions, trial, and sentencing.",
              },
              {
                q: "Can Atticus draft criminal defence motions?",
                a: "Yes. The AI Draft tool generates Notices of Motion, legal memos, client update letters, and engagement letters — grounded in your client's case file. The lawyer reviews and edits before filing.",
              },
            ].map((item) => (
              <div key={item.q} style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif", color: "#1a1a2e" }}>{item.q}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px", color: "#1a1a2e" }}>
            Start Your Free 14-Day Trial
          </h2>
          <p style={{ fontSize: "16px", color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
            No credit card required. Full access to all features including document processing, Atticus AI chat, deadline tracking, and billing.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "14px 32px", borderRadius: "8px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "15px" }}>
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginBottom: "16px", fontWeight: 700 }}>
            Practice Area Guides
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/ontario-real-estate-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Real Estate</Link>
            <Link href="/ontario-wills-estate-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Wills &amp; Estates</Link>
            <Link href="/ontario-family-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Family Law</Link>
            <Link href="/ontario-corporate-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Corporate Law</Link>
            <Link href="/ontario-civil-litigation-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Civil Litigation</Link>
            <Link href="/ontario-criminal-defence-lawyer" style={{ color: "#1a1a2e", fontWeight: 600, textDecoration: "none" }}>Criminal Defence</Link>
            <Link href="/clio-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>Clio Alternative</Link>
            <Link href="/ontario-legal-software" style={{ color: "#6b7280", textDecoration: "none" }}>Ontario Legal Software</Link>
            <Link href="/calculator" style={{ color: "#6b7280", textDecoration: "none" }}>Limitation Calculator</Link>
            <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
            <Link href="/blog" style={{ color: "#6b7280", textDecoration: "none" }}>Blog</Link>
            <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
