import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Practice Management Software for Ontario Civil Litigation Lawyers | Atticus",
  description:
    "Atticus helps Ontario civil litigation lawyers track court deadlines, manage limitation periods, process pleadings and affidavits, and draft Ontario court documents — with AI document processing and automated deadline alerts.",
  keywords: [
    "ontario civil litigation lawyer software",
    "civil litigation practice management ontario",
    "ontario rules of civil procedure software",
    "limitation period tracking ontario lawyer",
    "court deadline tracking software ontario",
    "statement of claim software ontario",
  ],
  openGraph: {
    title: "Practice Management Software for Ontario Civil Litigation Lawyers",
    description:
      "Atticus helps Ontario civil litigators track court deadlines, manage limitation periods, process pleadings, and draft court documents — purpose-built for Ontario litigators.",
    type: "website",
    url: "https://getatticus.ca/ontario-civil-litigation-lawyer",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-civil-litigation-lawyer" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — Practice Management for Ontario Civil Litigation Lawyers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Practice management software for Ontario civil litigation lawyers. Limitation period tracking, court deadline management, AI-drafted pleadings, document processing, and client communication — built for Ontario litigators under the Rules of Civil Procedure.",
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
      name: "Does Atticus track Ontario limitation periods for civil litigation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The built-in Ontario Limitation Period Calculator computes all relevant periods for any matter — the 2-year basic period, 15-year ultimate period, minors' toll, municipal notice periods (10 days), and construction lien periods. One click adds any period to your deadline tracker.",
      },
    },
    {
      "@type": "Question",
      name: "Can Atticus draft Statements of Claim and Defence under Ontario Rules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The AI Draft tool generates Statement of Claim (Form 14A) and Statement of Defence under the Ontario Rules of Civil Procedure, R.R.O. 1990, Reg. 194 — grounded in your client's case file. The lawyer reviews and finalizes before filing.",
      },
    },
    {
      "@type": "Question",
      name: "Does Atticus have a civil litigation matter template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Civil Litigation matter template includes a pre-populated checklist covering the standard Ontario litigation workflow from initial consultation through to trial or settlement.",
      },
    },
    {
      "@type": "Question",
      name: "How does Atticus handle court deadline escalation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atticus sends a 6pm escalation alert email if any deadline due today or tomorrow is unresolved. It also sends a morning briefing every weekday with all overdue and upcoming deadlines across your practice.",
      },
    },
  ],
});

const LITIGATION_CHECKLIST = [
  "Initial consultation — assess merits, document instructions, limitation period",
  "Calculate and diary all applicable limitation periods",
  "Issue and serve Statement of Claim (Form 14A) if proceeding",
  "File and serve within limitation period",
  "Respond to or receive Statement of Defence",
  "Prepare and serve Affidavit of Documents (Rule 30)",
  "Conduct examinations for discovery",
  "Respond to undertakings and refusals",
  "Attend mediation (mandatory in Toronto, Ottawa, Windsor)",
  "Serve and file trial record if settling or proceeding to trial",
  "Conduct trial or finalize settlement agreement",
  "Draft and serve Bill of Costs if successful",
  "Collect judgment or close file",
];

const FEATURES = [
  {
    title: "Ontario limitation period tracking",
    body: "Calculate all applicable limitation periods — 2-year basic, 15-year ultimate, municipal notice (10 days), construction lien. Add any period to your deadline tracker with one click.",
  },
  {
    title: "AI-drafted Ontario court documents",
    body: "Generate Statement of Claim (Form 14A), Statement of Defence, Affidavit, Notice of Motion, and other Ontario pleadings — grounded in your client's file under the Ontario Rules of Civil Procedure.",
  },
  {
    title: "Court deadline escalation alerts",
    body: "6pm escalation email if any deadline due today or tomorrow is unresolved. Daily morning briefing every weekday with overdue and upcoming court dates across your practice.",
  },
  {
    title: "Document processing for pleadings",
    body: "Upload opposing counsel's pleadings, expert reports, affidavits, or any court document. Atticus AI extracts key dates, parties, claims, and action items automatically.",
  },
  {
    title: "Civil litigation matter template",
    body: "Pre-built Ontario civil litigation checklist from initial consultation through to trial or settlement. Every step tracked with due dates and a progress bar.",
  },
  {
    title: "Audio transcription for discoveries",
    body: "Upload recordings of examinations for discovery, client calls, or witness interviews. Atticus transcribes with Whisper AI and extracts key facts, admissions, and action items.",
  },
];

export default function OntarioCivilLitigationLawyerPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="litigation-software-jsonld" type="application/ld+json">{jsonLd}</Script>
      <Script id="litigation-faq-jsonld" type="application/ld+json">{faqJsonLd}</Script>

      {/* NAV */}
      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Free Limitation Calculator</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 48px 64px", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "24px" }}>Ontario Civil Litigation</p>
        <h1 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 1.1, color: "#faf8f4", marginBottom: "24px" }}>
          Practice management for<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>Ontario civil litigators.</em>
        </h1>
        <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto 40px" }}>
          Limitation period tracking, court deadline escalation alerts, AI-drafted pleadings under the Ontario Rules of Civil Procedure, and automatic document processing — built for Ontario litigators who can&apos;t afford to miss a date.
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
            <strong style={{ color: "#C6922A" }}>Ontario civil litigation framework:</strong> Ontario civil proceedings are governed by the <em>Rules of Civil Procedure</em>, R.R.O. 1990, Reg. 194, under the <em>Courts of Justice Act</em>, R.S.O. 1990, c. C.43. Limitation periods are set by the <em>Limitations Act, 2002</em>, S.O. 2002, c. 24, Sched. B — 2-year basic period (s. 4), 15-year ultimate period (s. 15). Municipal slip-and-fall notice: 10 days under <em>Municipal Act, 2001</em>, s. 44(10). Construction liens: 45 days under the <em>Construction Act</em>.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "0 48px 80px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#faf8f4", marginBottom: "40px", textAlign: "center" }}>
          Built for the Ontario civil litigation workflow.
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

      {/* LIMITATION PERIOD CALLOUT */}
      <section style={{ padding: "0 48px 64px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ background: "rgba(198,146,42,0.07)", border: "1px solid rgba(198,146,42,0.2)", padding: "36px 40px", textAlign: "center" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Free Tool</p>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Ontario Limitation Period Calculator</h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, marginBottom: "24px" }}>
            Enter the incident date and case type. Get all relevant Ontario limitation periods — basic, ultimate, minors, municipal notice, construction lien — instantly. No login required.
          </p>
          <Link href="/calculator" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
            Use the Free Calculator →
          </Link>
        </div>
      </section>

      {/* CHECKLIST */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "12px", textAlign: "center" }}>Ontario civil litigation checklist — built in.</h2>
        <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.5)", textAlign: "center", marginBottom: "40px" }}>Open a Civil Litigation matter and your checklist is already there. Track court dates and procedural steps with one click.</p>

        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", padding: "28px" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {LITIGATION_CHECKLIST.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "rgba(198,146,42,0.5)", minWidth: "20px", marginTop: "1px", fontSize: "12px" }}>{i + 1}.</span>
                <span style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COURT DOCUMENTS */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "20px", textAlign: "center" }}>AI Draft — Ontario court documents in minutes.</h2>
        <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.6)", lineHeight: 1.9, marginBottom: "24px", textAlign: "center" }}>
          Generate Ontario-compliant pleadings and court documents grounded in your client&apos;s case file. Review and finalize before filing.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "40px" }}>
          {[
            "Statement of Claim (Form 14A)",
            "Statement of Defence",
            "Affidavit",
            "Notice of Motion",
            "Demand Letter",
            "Settlement Proposal",
            "Legal Memo",
            "Client Status Update",
          ].map(t => (
            <span key={t} style={{ background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.15)", padding: "8px 16px", fontSize: "13px", color: "rgba(240,232,216,0.7)" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "32px", textAlign: "center" }}>Questions from Ontario civil litigators</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
          {[
            {
              q: "How does Atticus handle court deadlines vs. limitation periods?",
              a: "Atticus tracks both. Limitation periods are calculated with the built-in calculator and can be added to the deadline tracker with one click. Court dates (discoveries, motions, trials) are extracted from uploaded documents automatically and can be manually added. All appear in your morning briefing and trigger a 6pm escalation alert if unresolved.",
            },
            {
              q: "Can Atticus draft pleadings under the Ontario Rules of Civil Procedure?",
              a: "Yes. The AI Draft tool generates Statement of Claim (Form 14A), Statement of Defence, Affidavit, Notice of Motion, and other documents under the Ontario Rules of Civil Procedure, R.R.O. 1990, Reg. 194. All drafts must be reviewed by the lawyer before filing.",
            },
            {
              q: "Does Atticus help with mandatory mediation tracking?",
              a: "Yes. You can add mandatory mediation deadlines (required in Toronto, Ottawa, Windsor under Rule 24.1) to your matter checklist and deadline tracker. Atticus extracts dates from any Order to Attend or mediation correspondence uploaded to the matter.",
            },
            {
              q: "Can I transcribe examination for discovery recordings?",
              a: "Yes. Upload audio recordings of examinations for discovery, client interviews, or witness calls — Atticus transcribes using OpenAI Whisper and extracts key facts, admissions, undertakings, and refusals as action items.",
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
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/ontario-limitation-period" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Limitation Period Guide</Link>
          <Link href="/ontario-real-estate-lawyer" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Real Estate</Link>
          <Link href="/ontario-legal-software" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Ontario Legal Software</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
