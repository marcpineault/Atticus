import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Practice Management Software for Ontario Corporate Lawyers | Atticus",
  description:
    "Atticus helps Ontario corporate lawyers manage incorporations, shareholder agreements, corporate maintenance, and client communication — with AI document processing and OBCA-aware checklists.",
  keywords: [
    "ontario corporate lawyer software",
    "corporate law practice management ontario",
    "incorporation software ontario",
    "shareholder agreement software ontario",
    "OBCA corporation software",
    "corporate minute book ontario",
  ],
  openGraph: {
    title: "Practice Management Software for Ontario Corporate Lawyers",
    description:
      "Atticus helps Ontario corporate lawyers manage incorporations, shareholder agreements, deadlines, and client communication — purpose-built for Ontario solicitors.",
    type: "website",
    url: "https://getatticus.ca/ontario-corporate-lawyer",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-corporate-lawyer" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — Practice Management for Ontario Corporate Lawyers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Practice management software for Ontario corporate lawyers. Incorporation checklists, AI document processing, trust accounting, deadline tracking, and client portals — built for Ontario solicitors handling OBCA and CBCA corporations.",
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
      name: "Does Atticus have checklists for Ontario corporation incorporations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Corporate Incorporation matter template includes a pre-populated checklist for Ontario OBCA incorporations — from name search through to filing articles of incorporation, issuing shares, and completing the organizational minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Can Atticus draft shareholder agreements and employment contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The AI Draft tool can generate initial drafts of shareholder agreements, employment agreements, and other corporate documents grounded in your client's matter notes and files. The lawyer reviews and finalizes all documents.",
      },
    },
    {
      "@type": "Question",
      name: "Does Atticus handle corporate annual maintenance reminders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can set recurring annual deadlines for each corporate client — annual returns, annual general meetings, tax filing reminders. Recurring deadlines auto-create the next occurrence when resolved, and appear in your daily morning briefing.",
      },
    },
    {
      "@type": "Question",
      name: "Can clients upload corporate documents through a portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each matter has a shareable client portal. Corporate clients can upload shareholder registers, existing minute books, financial statements, or any document — auto-processed by Atticus AI and linked to the matter.",
      },
    },
  ],
});

const INCORPORATION_CHECKLIST = [
  "Conduct NUANS name search (OBCA) or CBCA pre-approval",
  "Prepare and file Articles of Incorporation",
  "Obtain Certificate of Incorporation",
  "Prepare organization minute book: by-laws, resolutions",
  "Issue shares and complete share register",
  "Register for HST, payroll, and corporate tax accounts",
  "Prepare and execute any shareholders agreement",
  "Prepare employment agreements for key employees (if applicable)",
  "Prepare initial director and officer resolutions",
  "Report to client — deliver minute book and share certificates",
  "Diary annual return filing deadline and AGM date",
];

const FEATURES = [
  {
    title: "Corporate incorporation checklist",
    body: "Pre-built Ontario corporate incorporation matter template — from NUANS name search through to minute book completion. Every step tracked with due dates and a progress bar.",
  },
  {
    title: "AI-drafted corporate documents",
    body: "Generate initial drafts of shareholder agreements, employment agreements, by-laws, and director resolutions — grounded in your client's matter notes. You review and finalize.",
  },
  {
    title: "Recurring annual maintenance reminders",
    body: "Set annual recurring deadlines for each corporate client: annual returns, AGMs, and tax filing dates. Auto-creates next year's deadline when you resolve the current one.",
  },
  {
    title: "Conflict of interest checking",
    body: "Run an AI conflict check before every new corporate client intake — checks against all existing clients, companies, and entities extracted from your matter documents.",
  },
  {
    title: "AI document processing",
    body: "Upload articles of incorporation, existing shareholders agreements, minute books, or any corporate document. Atticus AI extracts dates, parties, share structures, and action items.",
  },
  {
    title: "Client portal for document collection",
    body: "Send corporate clients a portal link. They upload existing minute books, shareholder registers, or financial statements — processed automatically and linked to the matter.",
  },
];

export default function OntarioCorporateLawyerPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="corp-software-jsonld" type="application/ld+json">{jsonLd}</Script>
      <Script id="corp-faq-jsonld" type="application/ld+json">{faqJsonLd}</Script>

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
        <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "24px" }}>Ontario Corporate Law</p>
        <h1 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 1.1, color: "#faf8f4", marginBottom: "24px" }}>
          Practice management for<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>Ontario corporate lawyers.</em>
        </h1>
        <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto 40px" }}>
          OBCA and CBCA incorporation checklists, AI-drafted corporate documents, recurring annual maintenance reminders, and conflict checking — built for Ontario solicitors handling incorporations, shareholders agreements, and corporate maintenance.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "16px 40px", textDecoration: "none", fontSize: "15px", fontWeight: 600 }}>
            Start Free Trial →
          </Link>
          <Link href="/clio-alternative" style={{ border: "1px solid rgba(198,146,42,0.3)", color: "#C6922A", padding: "16px 40px", textDecoration: "none", fontSize: "15px" }}>
            Compare to Clio
          </Link>
        </div>
      </section>

      {/* LEGISLATION CALLOUT */}
      <section style={{ padding: "0 48px 64px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {[
            {
              title: "Ontario Business Corporations Act (OBCA)",
              body: "Incorporation checklists built for the OBCA, R.S.O. 1990, c. B.16 — Ontario-incorporated corporations with NUANS name searches and Articles of Incorporation filed with ServiceOntario.",
            },
            {
              title: "Canada Business Corporations Act (CBCA)",
              body: "Also supports federal CBCA, R.S.C. 1985, c. C-44 incorporations — with federal name approval, Corporations Canada filing, and federal annual return deadlines.",
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
          Built for the Ontario corporate law workflow.
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

      {/* INCORPORATION CHECKLIST */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "12px", textAlign: "center" }}>Ontario incorporation checklist — built in.</h2>
        <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.5)", textAlign: "center", marginBottom: "40px" }}>Open a Corporate Incorporation matter and your checklist is already there. Track progress with one click.</p>

        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", padding: "28px" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {INCORPORATION_CHECKLIST.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "rgba(198,146,42,0.5)", minWidth: "20px", marginTop: "1px", fontSize: "12px" }}>{i + 1}.</span>
                <span style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ANNUAL MAINTENANCE CALLOUT */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ background: "rgba(198,146,42,0.07)", border: "1px solid rgba(198,146,42,0.2)", padding: "36px 40px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Never miss an annual return or AGM deadline.</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Ontario corporations must file annual returns with ServiceOntario. Federal CBCA corporations file annual returns with Corporations Canada. Missing these can lead to dissolution.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "0" }}>
            Atticus lets you set recurring annual deadlines per corporate client — annual return, AGM date, tax filing. When you resolve this year&apos;s deadline, next year&apos;s is automatically created. Your daily morning briefing shows every upcoming corporate deadline across your practice.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "32px", textAlign: "center" }}>Questions from Ontario corporate lawyers</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
          {[
            {
              q: "Does Atticus handle both OBCA and CBCA incorporations?",
              a: "Yes. Both matter templates are available. The OBCA template covers ServiceOntario filing with NUANS name search. Both include checklists through to minute book completion and share issuance.",
            },
            {
              q: "Can I track multiple shareholders and share classes?",
              a: "Yes. You can upload existing shareholders agreements and share registers to the matter. Atticus AI extracts parties, share classes, and key terms. The conflict check also runs against all corporate entities you've handled.",
            },
            {
              q: "How does conflict checking work for corporate matters?",
              a: "Before opening a new corporate matter, run an AI conflict check against all existing clients and matter entities. The AI returns a severity rating (high, medium, low) and reasons — covering both direct client conflicts and parties extracted from previous matter documents.",
            },
            {
              q: "Can Atticus draft shareholders agreements?",
              a: "Yes. The AI Draft tool generates an initial shareholders agreement draft grounded in your client's instructions and matter notes. The lawyer reviews, revises, and executes — Atticus generates the first draft.",
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
          <Link href="/clio-alternative" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Clio Alternative</Link>
          <Link href="/ontario-real-estate-lawyer" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Real Estate Law</Link>
          <Link href="/ontario-legal-software" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Ontario Legal Software</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
