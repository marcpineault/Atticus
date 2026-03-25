import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Practice Management Software for Ontario Paralegals | Atticus",
  description:
    "Practice management software built for Ontario LSO-licensed paralegals. Deadline tracking, client management, billing, AI document processing, and Small Claims / LTB matter templates — $149 CAD/month.",
  keywords: [
    "ontario paralegal software",
    "paralegal practice management software ontario",
    "lso paralegal software canada",
    "small claims court software paralegal",
    "landlord tenant board software paralegal",
    "paralegal billing software ontario",
    "paralegal client management software",
    "paralegal deadline tracking ontario",
  ],
  openGraph: {
    title: "Practice Management Software for Ontario Paralegals — Atticus",
    description:
      "AI-powered practice management for Ontario LSO-licensed paralegals. Client files, billing, deadlines, trust accounting, and AI document processing in one platform.",
    type: "website",
    url: "https://getatticus.ca/ontario-paralegal-software",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-paralegal-software" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — Practice Management Software for Ontario Paralegals",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered practice management software for Ontario LSO-licensed paralegals. Manage clients, deadlines, billing, and documents with AI assistance — built for Small Claims, LTB, and other paralegal practice areas.",
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "CAD",
    priceValidUntil: "2027-01-01",
    availability: "https://schema.org/InStock",
  },
  provider: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
});

const PRACTICE_AREAS = [
  {
    area: "Small Claims Court",
    items: [
      "Plaintiff / defendant matter tracking",
      "Limitation period calculator (2-year default claim)",
      "Defence deadline from service",
      "Hearing date and disclosure deadlines",
      "Disbursement tracking per file",
      "Settlement document drafting",
    ],
  },
  {
    area: "Landlord & Tenant Board",
    items: [
      "LTB application types (N4, N5, N11, T2, T6, etc.)",
      "Filing deadline from trigger date",
      "Hearing scheduling and notice tracking",
      "Evidence disclosure tracking",
      "Order enforcement follow-up",
      "Rent amount and arrears calculations",
    ],
  },
  {
    area: "Criminal (Summary Conviction)",
    items: [
      "Disclosure receipt and review tracking",
      "Court date and adjournment tracking",
      "Crown disclosure deadline management",
      "Jordan Charter deadline monitoring",
      "Witness list and contact management",
      "Bail condition note tracking",
    ],
  },
  {
    area: "Traffic & Regulatory",
    items: [
      "Ticket and offence record tracking",
      "Trial / hearing date management",
      "Provincial Offences Act timelines",
      "Client communication log",
      "Certificate of Offence review notes",
      "Fee agreement and billing management",
    ],
  },
];

const FEATURES = [
  {
    icon: "📋",
    title: "LSO-Compliant Client Files",
    body: "Full client records with matter history, document storage, notes, and activity timeline — structured for LSO paralegal compliance requirements.",
  },
  {
    icon: "⏰",
    title: "Automatic Deadline Extraction",
    body: "Upload any court notice, LTB order, or disclosure letter and Atticus AI extracts all deadlines automatically — no manual entry.",
  },
  {
    icon: "🤖",
    title: "AI Document Processing",
    body: "Every document you upload is summarized, entities extracted (parties, dates, amounts), and embedded for search. Find anything across your file library in seconds.",
  },
  {
    icon: "💰",
    title: "Billing & Invoicing",
    body: "Time tracking, invoice generation, and HST support built in. Send invoices by email, mark paid, and track outstanding balances — all from one place.",
  },
  {
    icon: "🔍",
    title: "Conflict of Interest Check",
    body: "AI-powered conflict checking across all your existing clients and matter parties. Catch conflicts before you take on a new client — as required by LSO paralegal rules.",
  },
  {
    icon: "📧",
    title: "Morning Briefing Email",
    body: "Daily 9am email with every overdue deadline, matter due today, outstanding invoices, and trust balance alerts — so nothing falls through the cracks.",
  },
  {
    icon: "🔗",
    title: "Client Portal",
    body: "Shareable per-matter portal link. Clients upload documents directly to their file — processed automatically by Atticus AI and linked to the matter.",
  },
  {
    icon: "📅",
    title: "Limitation Period Calculator",
    body: "Built-in Ontario limitation period calculator. Enter the trigger date, select the proceeding type, and add the calculated deadline to your tracker in one click.",
  },
];

export default function OntarioParalegalSoftwarePage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-paralegal" type="application/ld+json">{jsonLd}</Script>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#fff" }}>
        <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", textDecoration: "none" }}>
          Atticus
        </Link>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
          <Link href="/calculator" style={{ color: "#4b5563", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/pricing" style={{ color: "#4b5563", textDecoration: "none" }}>Pricing</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>
            Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "880px", margin: "0 auto", padding: "72px 24px 48px" }}>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#6b7280", textTransform: "uppercase", marginBottom: "16px" }}>
          For Ontario LSO-Licensed Paralegals
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px", color: "#1a1a2e" }}>
          Practice Management Software<br />Built for Ontario Paralegals
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "16px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          Most legal software is designed for lawyers at large firms. Atticus is built for Ontario LSO-licensed paralegals who run lean practices — Small Claims, LTB, summary criminal, traffic, and regulatory matters.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          AI document processing, automatic deadline extraction, conflict of interest checks, billing, and your daily briefing. $149 CAD/month. No contracts.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700 }}>
            Start Free 14-Day Trial
          </Link>
          <Link href="/calculator" style={{ border: "1px solid #d1d5db", color: "#374151", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
            Free Limitation Period Calculator
          </Link>
        </div>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#9ca3af", marginTop: "12px" }}>No credit card required · $149 CAD/mo · Canadian infrastructure</p>
      </header>

      {/* The paralegal gap */}
      <section style={{ backgroundColor: "#fef9f0", borderTop: "1px solid #fed7aa", borderBottom: "1px solid #fed7aa", padding: "48px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "16px", color: "#92400e" }}>
            Why Most Legal Software Doesn&apos;t Work for Ontario Paralegals
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#78350f", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            Tools like Clio and PCLaw are designed for lawyers at multi-practice firms with $400+/hr rates and large retainer clients. They&apos;re expensive, complex, and assume workflows that don&apos;t match how paralegals practice.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#78350f", fontFamily: "system-ui, sans-serif" }}>
            Ontario paralegals handle high-volume, deadline-intensive work: LTB hearings with tight notice windows, Small Claims with strict service and defence timelines, summary criminal with Crown disclosure review. You need software that manages deadlines automatically — not a $400/month enterprise CRM.
          </p>
        </div>
      </section>

      {/* Practice areas */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          Built for Every Ontario Paralegal Practice Area
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "40px", fontFamily: "system-ui, sans-serif" }}>
          Matter templates with pre-loaded action item checklists for each proceeding type
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "24px" }}>
          {PRACTICE_AREAS.map((pa) => (
            <div key={pa.area} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "24px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "16px", color: "#1a1a2e", fontFamily: "system-ui, sans-serif" }}>{pa.area}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {pa.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#4b5563" }}>
                    <span style={{ color: "#22c55e", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* LSO compliance callout */}
      <section style={{ backgroundColor: "#f0fdf4", borderTop: "1px solid #86efac", borderBottom: "1px solid #86efac", padding: "40px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "#166534" }}>
            Built with LSO Paralegal Obligations in Mind
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#15803d", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            LSO-licensed paralegals have the same professional obligations as lawyers when it comes to client confidentiality, conflict of interest checking, and competent service. Atticus is designed with these requirements built in — not bolted on.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
            {[
              "AI-powered conflict of interest check",
              "Consent disclosure for AI use (Rule 3.3 equivalent)",
              "Data stored in Canada",
              "Never used to train AI models",
              "Per-client trust ledger if applicable",
              "PIPEDA-compliant",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#166534" }}>
                <span style={{ color: "#22c55e", fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "40px", color: "#1a1a2e" }}>
          Everything a Paralegal Practice Needs
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
          {FEATURES.map((f) => (
            <div key={f.title} style={{ borderLeft: "3px solid #e5e7eb", paddingLeft: "16px" }}>
              <p style={{ fontSize: "22px", marginBottom: "8px" }}>{f.icon}</p>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif", color: "#1a1a2e" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing callout */}
      <section style={{ backgroundColor: "#1a1a2e", padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "12px", color: "#fff" }}>
            $149 CAD/Month. Everything Included.
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "8px", fontFamily: "system-ui, sans-serif" }}>
            No per-matter fees. No per-document fees. No surprise add-ons.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
            Unlimited clients, matters, documents, and AI processing.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#fff", color: "#1a1a2e", padding: "14px 36px", borderRadius: "8px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "16px" }}>
            Start Free 14-Day Trial
          </Link>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "16px" }}>
            No credit card required · Canadian infrastructure · Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/ontario-legal-software" style={{ color: "#6b7280", textDecoration: "none" }}>Ontario Legal Software</Link>
            <Link href="/trust-accounting-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Trust Accounting</Link>
            <Link href="/calculator" style={{ color: "#6b7280", textDecoration: "none" }}>Limitation Calculator</Link>
            <Link href="/clio-alternative" style={{ color: "#6b7280", textDecoration: "none" }}>Clio Alternative</Link>
            <Link href="/ontario-civil-litigation-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Civil Litigation</Link>
            <Link href="/ontario-criminal-defence-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Criminal Defence</Link>
            <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
            <Link href="/blog" style={{ color: "#6b7280", textDecoration: "none" }}>Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
