import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Practice Management Software for Ontario Landlord-Tenant Lawyers & Paralegals | Atticus",
  description:
    "Practice management software for Ontario lawyers and paralegals practicing at the Landlord and Tenant Board. LTB hearing tracking, automatic deadline extraction, AI document processing, billing. $149 CAD/month.",
  keywords: [
    "ontario landlord tenant lawyer software",
    "ltb hearing management software ontario",
    "landlord tenant board software ontario",
    "paralegal ltb software ontario",
    "landlord tenant practice management ontario",
    "ontario ltb deadline tracking",
    "landlord tenant board hearing software",
  ],
  openGraph: {
    title: "Practice Management for Ontario Landlord-Tenant Lawyers & Paralegals — Atticus",
    description:
      "AI-powered practice management for Ontario LTB practitioners. Hearing deadlines, AI document processing, billing, trust accounting. $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/ontario-landlord-tenant-lawyer",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-landlord-tenant-lawyer" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — Practice Management for Ontario Landlord-Tenant Lawyers and Paralegals",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Practice management software for Ontario landlord-tenant lawyers and paralegals. LTB hearing tracking, AI document processing, automatic deadline extraction, billing, and trust accounting.",
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "CAD",
    priceValidUntil: "2027-01-01",
    availability: "https://schema.org/InStock",
  },
  provider: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
});

const LTB_APPLICATIONS = [
  {
    category: "Landlord Applications (L-forms)",
    items: [
      { app: "L1", name: "Application to Evict for Non-Payment of Rent", key: "Amount of rent arrears; service deadline; hearing date" },
      { app: "L2", name: "Application to End Tenancy for Cause", key: "Notice service date; N5/N6/N7 void period; hearing" },
      { app: "L3", name: "Application to End Tenancy — Notice Given by Tenant", key: "Tenant notice date; effective date; inspection" },
      { app: "L4", name: "Application to End Tenancy — Compliance with Mediated Agreement", key: "Agreement date; breach date; compliance deadline" },
      { app: "L8", name: "Application to End Tenancy — No Access", key: "Access request dates; inspection timeline" },
    ],
  },
  {
    category: "Tenant Applications (T-forms)",
    items: [
      { app: "T1", name: "Application to Recover Excess Rent Paid", key: "Date rent first exceeded guideline; amount" },
      { app: "T2", name: "Application — Landlord Interfered with Reasonable Enjoyment", key: "Harassment dates; response deadline" },
      { app: "T6", name: "Application About Maintenance", key: "Request date; reasonable repair timeline" },
      { app: "T5", name: "Bad Faith Eviction Application", key: "Eviction date; re-rental evidence" },
    ],
  },
];

const CHECKLIST = [
  "Service of Notice confirmed and documented (in-person, mail, courier per RTA requirements)",
  "Termination date calculated correctly from service method",
  "Void period tracked (N5: 7 days to remedy; N6/N7: no void)",
  "L1 rent arrears amount verified against ledger",
  "Filing deadline confirmed (L2 must be filed within 30 days of termination date)",
  "LTB filing fee calculated and payment method confirmed",
  "Disclosure package prepared (supporting documents served on opposing party)",
  "Hearing preparation: order of evidence, witness preparation, exhibits numbered",
  "Post-hearing: track compliance with any order; request enforcement if needed",
];

export default function OntarioLandlordTenantLawyerPage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-ltb" type="application/ld+json">{jsonLd}</Script>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
          <Link href="/ontario-paralegal-software" style={{ color: "#4b5563", textDecoration: "none" }}>Paralegal Software</Link>
          <Link href="/calculator" style={{ color: "#4b5563", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>Free Trial</Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ maxWidth: "880px", margin: "0 auto", padding: "72px 24px 48px" }}>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#6b7280", textTransform: "uppercase", marginBottom: "16px" }}>
          For Ontario LTB Practitioners
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px", color: "#1a1a2e" }}>
          Practice Management for<br />Ontario Landlord-Tenant Practitioners
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", marginBottom: "16px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          LTB practice is deadline-intensive: service dates, void periods, filing deadlines, hearing dates, and compliance orders all need to be tracked precisely. A missed service deadline or incorrectly calculated void period can be fatal to an application.
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#4b5563", marginBottom: "32px", fontFamily: "system-ui, sans-serif", maxWidth: "680px" }}>
          Atticus extracts deadlines automatically from every LTB notice and order you upload. AI processes your documents, tracks your hearings, and sends you a morning briefing so nothing gets missed.
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

      {/* LTB applications coverage */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "8px", color: "#1a1a2e" }}>
          Common LTB Applications — What Atticus Tracks
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
          Upload any LTB notice, application, or order — AI extracts all key dates, parties, and deadlines automatically
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "24px" }}>
          {LTB_APPLICATIONS.map((cat) => (
            <div key={cat.category} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ backgroundColor: "#1a1a2e", padding: "14px 20px" }}>
                <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", fontWeight: 700, color: "#fff" }}>{cat.category}</h3>
              </div>
              <div style={{ padding: "0" }}>
                {cat.items.map((item, i) => (
                  <div key={item.app} style={{ padding: "14px 20px", borderBottom: i < cat.items.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", fontWeight: 700, color: "#fff", backgroundColor: "#1a1a2e", padding: "2px 7px", borderRadius: "4px", flexShrink: 0 }}>{item.app}</span>
                      <div>
                        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a1a2e", margin: "0 0 4px" }}>{item.name}</p>
                        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#6b7280", margin: 0 }}>AI extracts: {item.key}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section style={{ backgroundColor: "#fef9f0", borderTop: "1px solid #fed7aa", borderBottom: "1px solid #fed7aa", padding: "48px 24px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px", color: "#92400e" }}>
            LTB Matter Checklist — Key Steps Atticus Tracks
          </h2>
          <p style={{ fontSize: "14px", color: "#78350f", fontFamily: "system-ui, sans-serif", marginBottom: "20px" }}>
            Each step below becomes an action item in Atticus — extracted from documents or added via Quick Capture
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "10px" }}>
            {CHECKLIST.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", backgroundColor: "#fff", padding: "12px 16px", borderRadius: "6px", border: "1px solid #fed7aa" }}>
                <span style={{ color: "#22c55e", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#374151", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: "880px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700, marginBottom: "32px", color: "#1a1a2e" }}>
          Built for High-Volume LTB Practice
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {[
            { icon: "⏰", title: "Automatic Deadline Extraction", body: "Upload N4, N5, LTB order, or disclosure letter — AI extracts every date, void period, hearing date, and compliance deadline automatically." },
            { icon: "📋", title: "High-Volume Matter Management", body: "Manage 30–50+ active LTB matters simultaneously. Kanban board, list view, and calendar toggle for deadline visualization." },
            { icon: "💰", title: "Flat-Fee Billing", body: "LTB practice often uses flat fees. Log time against matters, generate invoices by matter, and track outstanding balances across your whole practice." },
            { icon: "🔍", title: "AI Document Processing", body: "Every LTB notice, order, and evidence document is AI-processed: summary, parties extracted, dates indexed, and searchable across all your matters." },
            { icon: "📧", title: "Morning Briefing", body: "Daily 9am email: every LTB hearing date due today or this week, overdue action items, and outstanding invoices." },
            { icon: "🔗", title: "Client Portal", body: "Send clients a shareable portal link. They upload tenancy agreements, rent receipts, and photos directly to their matter file — automatically processed by AI." },
          ].map((f) => (
            <div key={f.title} style={{ borderLeft: "3px solid #e5e7eb", paddingLeft: "16px" }}>
              <p style={{ fontSize: "22px", marginBottom: "8px" }}>{f.icon}</p>
              <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif", color: "#1a1a2e" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1a1a2e", padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "12px", color: "#fff" }}>
            Never Miss an LTB Deadline Again
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", marginBottom: "32px", fontFamily: "system-ui, sans-serif" }}>
            14-day free trial, no credit card. Upload your first LTB notice and watch Atticus extract every deadline automatically.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#fff", color: "#1a1a2e", padding: "14px 36px", borderRadius: "8px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "16px" }}>
            Start Free Trial
          </Link>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "16px" }}>
            $149 CAD/month · Canadian infrastructure · Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
            <Link href="/ontario-paralegal-software" style={{ color: "#6b7280", textDecoration: "none" }}>Paralegal Software</Link>
            <Link href="/ontario-civil-litigation-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Civil Litigation</Link>
            <Link href="/ontario-employment-lawyer" style={{ color: "#6b7280", textDecoration: "none" }}>Employment Law</Link>
            <Link href="/trust-accounting-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Trust Accounting</Link>
            <Link href="/calculator" style={{ color: "#6b7280", textDecoration: "none" }}>Free Calculator</Link>
            <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
