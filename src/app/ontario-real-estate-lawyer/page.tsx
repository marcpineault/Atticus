import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Practice Management Software for Ontario Real Estate Lawyers | Atticus",
  description:
    "Atticus helps Ontario real estate lawyers manage residential and commercial closings — automated checklists, document processing, trust accounting, and client portals. Built for Ontario solicitors.",
  keywords: [
    "ontario real estate lawyer software",
    "real estate closing software ontario",
    "ontario solicitor practice management",
    "residential real estate closing checklist ontario",
    "real estate law firm software canada",
    "title closing software ontario",
  ],
  openGraph: {
    title: "Practice Management Software for Ontario Real Estate Lawyers",
    description:
      "Atticus helps Ontario real estate lawyers manage closings, trust accounting, and client communication — purpose-built for Ontario solicitors.",
    type: "website",
    url: "https://getatticus.ca/ontario-real-estate-lawyer",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-real-estate-lawyer" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atticus — Practice Management for Ontario Real Estate Lawyers",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Practice management software for Ontario real estate lawyers. Automated closing checklists, trust accounting, document processing, and client portals built for Ontario solicitors.",
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
      name: "What does Atticus include for real estate lawyers in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atticus includes pre-populated checklists for residential real estate purchase and sale matters, automated trust account tracking, client portal document sharing, AI document processing for title searches and agreements, and limitation period tracking — all built for Ontario solicitors.",
      },
    },
    {
      "@type": "Question",
      name: "Does Atticus integrate with Teraview or land transfer systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atticus does not directly integrate with Teraview. It handles the practice management side — client records, document processing, trust accounting, checklists, and billing — complementing your existing Teraview workflow.",
      },
    },
    {
      "@type": "Question",
      name: "Can clients upload documents through a portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each matter has a shareable client portal link. Clients can upload documents directly — they are automatically processed by Atticus AI and linked to the matter, with findings extracted and sent to you by email.",
      },
    },
    {
      "@type": "Question",
      name: "How does trust accounting work for real estate closings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atticus tracks trust receipts and disbursements per client, shows a live balance, and generates a CSV trust ledger export that is RFC 4180-compliant. All trust transactions are tied to a specific client and matter to satisfy LSO By-Law 9.",
      },
    },
  ],
});

const PURCHASE_CHECKLIST = [
  "Receive and review Agreement of Purchase and Sale",
  "Order title search and review title",
  "Obtain and review status certificate (condos)",
  "Arrange title insurance",
  "Review mortgage commitment and instruct lender",
  "Prepare transfer and mortgage documents",
  "Calculate and confirm trust requirements (deposit, balance due on closing)",
  "Book signing appointment with clients",
  "Conduct closing — register transfer and mortgage",
  "Release funds to vendor solicitor",
  "Report to client and lender",
];

const SALE_CHECKLIST = [
  "Receive and review Agreement of Purchase and Sale",
  "Obtain mortgage statement and discharge information",
  "Review existing title and encumbrances",
  "Prepare vendor statement of adjustments",
  "Prepare transfer documents for purchaser's solicitor",
  "Book signing appointment with clients",
  "Confirm closing funds and wire from purchaser",
  "Register transfer / release mortgage",
  "Account to clients — net sale proceeds",
  "Report to clients",
];

const FEATURES = [
  {
    title: "Pre-built Ontario closing checklists",
    body: "Both residential purchase and sale matter templates come pre-loaded with Ontario-specific task checklists. Open a matter, select the type, and your checklist is ready.",
  },
  {
    title: "Trust accounting built for By-Law 9",
    body: "Track every trust receipt and disbursement tied to the client and matter. Live per-client balances, LSO-compliant CSV ledger export, and negative-balance alerts in your morning briefing.",
  },
  {
    title: "Client portal for document collection",
    body: "Send your buyer or seller a portal link. They upload their documents — ID, mortgage commitment, utility bills — and Atticus processes and links everything automatically.",
  },
  {
    title: "AI document processing",
    body: "Upload the APS, title search, status certificate, or any other document. Atticus extracts key dates, parties, dollar amounts, and action items — and emails you a summary.",
  },
  {
    title: "Limitation period calculator",
    body: "For litigation-adjacent matters, calculate Ontario limitation periods instantly. One click adds any period to your deadline tracker.",
  },
  {
    title: "Billing and invoice management",
    body: "Log time on each matter, generate invoices from billable time, add HST (13%), and send directly to the client. All from the same system as your trust accounting.",
  },
];

export default function OntarioRealEstateLawyerPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="re-software-jsonld" type="application/ld+json">{jsonLd}</Script>
      <Script id="re-faq-jsonld" type="application/ld+json">{faqJsonLd}</Script>

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
        <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "24px" }}>Ontario Real Estate Law</p>
        <h1 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 300, lineHeight: 1.1, color: "#faf8f4", marginBottom: "24px" }}>
          Practice management for<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>Ontario real estate solicitors.</em>
        </h1>
        <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto 40px" }}>
          Pre-built checklists for residential purchases and sales, trust accounting that satisfies LSO By-Law 9, and AI document processing — built specifically for Ontario solicitors handling residential closings.
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

      {/* TRUST CALLOUT */}
      <section style={{ padding: "0 48px 64px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.15)", padding: "24px 32px" }}>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.8)", lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: "#C6922A" }}>LSO By-Law 9 compliance:</strong> Every trust transaction in Atticus is tied to a specific client and matter. Live per-client balances, a compliant trust ledger CSV export, and automatic alerts if any trust balance goes negative. Your trust accounting and practice management in one place.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section style={{ padding: "0 48px 80px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#faf8f4", marginBottom: "40px", textAlign: "center" }}>
          Built for the Ontario real estate closing workflow.
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
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "12px", textAlign: "center" }}>Ontario closing checklists — ready on day one.</h2>
        <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.5)", textAlign: "center", marginBottom: "48px" }}>Pre-built for Ontario residential real estate. Open a matter, select the type, and your checklist appears.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {[
            { title: "Residential Purchase", items: PURCHASE_CHECKLIST },
            { title: "Residential Sale", items: SALE_CHECKLIST },
          ].map(list => (
            <div key={list.title} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", padding: "28px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{list.title}</h3>
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

      {/* AI DOCUMENT PROCESSING */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "20px", textAlign: "center" }}>Every document, automatically processed.</h2>
        <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.6)", lineHeight: 1.9, marginBottom: "24px", textAlign: "center" }}>
          Upload the Agreement of Purchase and Sale, title search, mortgage commitment, or any other document. Atticus AI extracts key dates, parties, amounts, and action items — and emails you a summary within minutes.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            "Closing date automatically extracted and added to your deadline tracker",
            "Parties (buyer, seller, lender) identified and linked to your client record",
            "Dollar amounts (purchase price, deposit, mortgage amount) surfaced for quick reference",
            "Action items extracted and flagged for your review",
            "Document searchable by semantic search — find anything across all your files",
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
        <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#faf8f4", marginBottom: "32px", textAlign: "center" }}>Questions from Ontario real estate solicitors</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
          {[
            {
              q: "Does Atticus work alongside Teraview?",
              a: "Yes. Atticus handles practice management — client records, checklists, document processing, trust accounting, and billing. Your Teraview workflow for title searching and registration stays the same. Atticus handles everything around it.",
            },
            {
              q: "How does trust accounting work for closing funds?",
              a: "Log trust receipts (deposits, closing funds received) and disbursements (payout to vendor solicitor, discharge fees, etc.) tied to each client and matter. Atticus shows a live per-client balance, alerts you if any balance goes negative, and generates a By-Law 9-compliant CSV ledger.",
            },
            {
              q: "Can my clients upload ID and documents through a portal?",
              a: "Yes. Each matter has a shareable client portal link. Clients upload documents directly — they are automatically processed by Atticus AI, linked to the matter, and you receive an email with the extracted findings.",
            },
            {
              q: "What does the closing checklist cover?",
              a: "Both residential purchase and sale templates come pre-loaded with Ontario-specific task checklists covering the standard closing workflow. You can add, edit, or remove tasks on any matter.",
            },
            {
              q: "Is there a free trial?",
              a: "Yes — 14 days, full access, no credit card required. You can start processing documents and running your first closing on day one.",
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
          <Link href="/ontario-legal-software" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Ontario Legal Software</Link>
          <Link href="/clio-alternative" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Clio Alternative</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
