import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Corporation Annual Maintenance: What Lawyers Do Every Year (2026)",
  description:
    "Annual maintenance requirements for Ontario corporations — annual resolutions, corporate filings, minute book updates, officer/director registers, and what corporate lawyers do to keep their clients compliant.",
  openGraph: {
    title: "Ontario Corporation Annual Maintenance: What Lawyers Do Every Year (2026)",
    description:
      "Annual resolutions, Ontario Business Registry filings, minute book maintenance, and the corporate lawyer's annual checklist for Ontario corporations in 2026.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-corporate-annual-maintenance",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-corporate-annual-maintenance" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Corporation Annual Maintenance: What Lawyers Do Every Year (2026)",
  description:
    "Annual maintenance requirements for Ontario corporations — annual resolutions, filings, minute book updates, and the corporate lawyer's annual checklist.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: "https://getatticus.ca/blog/ontario-corporate-annual-maintenance",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does an Ontario corporation need to file anything annually?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ontario Business Corporations Act (OBCA) corporations must file an Annual Return with the Ontario Business Registry within 60 days of the corporation's anniversary date. Failure to file can result in the corporation being cancelled by the government. CBCA corporations file annually with Corporations Canada.",
      },
    },
    {
      "@type": "Question",
      name: "What is an annual resolution for a corporation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annual resolutions are written corporate decisions made by the directors and/or shareholders each year — typically approving the financial statements, appointing an auditor (or waiving the audit requirement for private companies), and declaring dividends. Annual resolutions are required by the OBCA and must be kept in the minute book.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if an Ontario corporation's minute book is not maintained?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An out-of-date minute book creates legal and tax exposure. CRA audits often request minute book documentation for dividend payments and income splitting arrangements. Lawyers who discover outdated minute books must prepare retroactive resolutions for each year the book was not maintained — a time-consuming and costly process for clients.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Ontario Business Registry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Ontario Business Registry (OBR) is the online portal operated by ServiceOntario for filing corporate documents, annual returns, and changes to corporate information. Ontario moved to a mandatory online registry in 2021. Corporate lawyers must have OBR access to file on behalf of clients, or clients can file directly through the portal.",
      },
    },
  ],
};

const annualChecklist = [
  {
    item: "File Annual Return with Ontario Business Registry",
    timing: "Within 60 days of anniversary date",
    critical: true,
    detail: "OBCA s. 124 requires annual filing. Filing fee applies. Failure can result in cancellation of the corporation's charter.",
  },
  {
    item: "Prepare annual director resolutions",
    timing: "Within 6 months of fiscal year-end",
    critical: true,
    detail: "Directors must approve financial statements, appoint the auditor (or waive audit for private companies), and confirm the company's banking arrangements.",
  },
  {
    item: "Prepare annual shareholder resolutions",
    timing: "Within 6 months of fiscal year-end",
    critical: true,
    detail: "Shareholders elect directors, appoint the auditor (or pass audit waiver resolution), and receive the financial statements. For owner-managed corporations, directors and shareholders are often the same people.",
  },
  {
    item: "Update officer and director registers",
    timing: "As changes occur; confirm annually",
    critical: false,
    detail: "The minute book must reflect current officers and directors. Changes must be filed with the Ontario Business Registry within 15 days of the change.",
  },
  {
    item: "Update shareholder register",
    timing: "As changes occur; confirm annually",
    critical: false,
    detail: "Record all share transfers, new issuances, and cancellations. The shareholder register is a legal document that can be required by banks, investors, and on a sale of the business.",
  },
  {
    item: "Declare dividends (if applicable)",
    timing: "As decided by directors",
    critical: false,
    detail: "Director resolution required for every dividend declaration. The resolution must specify the amount per share, the class, and the record date. Never pay a dividend without a contemporaneous resolution.",
  },
  {
    item: "Review and update registered office address",
    timing: "Annually or upon change",
    critical: false,
    detail: "OBCA requires a registered office address in Ontario. Changes must be filed with the Ontario Business Registry.",
  },
  {
    item: "Confirm corporate seal (if applicable)",
    timing: "Annually",
    critical: false,
    detail: "While corporate seals are no longer legally required in Ontario, many corporations still maintain them. Confirm the seal is accessible and reflects current corporate name.",
  },
];

const minuteBookContents = [
  "Certificate of Incorporation / Articles of Incorporation",
  "By-laws and any by-law amendments",
  "Register of directors and officers",
  "Register of shareholders (with share ledger)",
  "Register of transfers",
  "Annual resolutions (directors and shareholders) for each year",
  "Special resolutions and extraordinary resolutions",
  "Copies of significant contracts and agreements approved by directors",
  "Share certificates or share certificate stubs",
  "Unanimous shareholder agreement (if any)",
  "Annual Return filing confirmations",
];

const commonErrors = [
  {
    error: "Dividends paid without resolutions",
    consequence: "CRA may reclassify dividends as salary, triggering payroll source deductions and penalties. Income-splitting arguments collapse without proper documentation.",
  },
  {
    error: "Annual Returns not filed",
    consequence: "Corporation is subject to cancellation by ServiceOntario. Reinstating a cancelled corporation requires an application and fees — and the corporate name may be taken.",
  },
  {
    error: "Shareholder register not updated after transfer",
    consequence: "On a sale of the business, the share register must be clean and match reality. Errors require correction and can delay or complicate a transaction closing.",
  },
  {
    error: "Director changes not filed with OBR",
    consequence: "Third parties relying on the public record (banks, counterparties) may deal with individuals who are no longer authorized. The corporation and remaining directors face liability.",
  },
  {
    error: "Loan from corporation not documented",
    consequence: "CRA requires a promissory note and repayment schedule for shareholder loans. Undocumented loans are treated as income in the year made — a significant tax consequence.",
  },
];

export default function OntarioCorporateAnnualMaintenancePage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-corp-annual" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-corp-annual-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      <section style={{ padding: "60px 24px 40px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Corporate Law</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>March 2026 · 10 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
          Ontario Corporation Annual Maintenance: What Lawyers Do Every Year (2026)
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Annual corporate maintenance is recurring, predictable revenue for Ontario corporate lawyers — and a critical compliance obligation for business owner clients. Here is a complete breakdown of what needs to happen every year, what the consequences of non-compliance are, and how Ontario corporate lawyers manage their maintenance book of business.
        </p>
      </section>

      <article style={{ padding: "0 24px 80px", maxWidth: "800px", margin: "0 auto" }}>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Annual Corporate Maintenance Checklist</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {annualChecklist.map((item, i) => (
              <div key={i} style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: `1px solid ${item.critical ? "rgba(198,146,42,0.2)" : "rgba(255,255,255,0.07)"}`, borderRadius: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                  <div style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4" }}>{item.item}</div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {item.critical && <span style={{ fontSize: "11px", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "2px 8px", borderRadius: "20px" }}>Required</span>}
                    <span style={{ fontSize: "11px", color: "rgba(240,232,216,0.4)", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: "20px" }}>{item.timing}</span>
                  </div>
                </div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Ontario Business Registry: What Needs to Be Filed</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            Since October 2021, Ontario operates the Ontario Business Registry (OBR) as the mandatory online filing portal. Corporate lawyers need a business.ontario.ca account and their client&apos;s company key to file on their behalf. Key OBR filings:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {[
              { filing: "Annual Return", deadline: "Within 60 days of anniversary" },
              { filing: "Change of directors", deadline: "Within 15 days of change" },
              { filing: "Change of officers", deadline: "Within 15 days of change" },
              { filing: "Change of registered office", deadline: "Within 15 days of change" },
              { filing: "Articles of Amendment", deadline: "As required" },
              { filing: "Initial Return (new corps)", deadline: "Within 60 days of incorporation" },
            ].map((item, i) => (
              <div key={i} style={{ padding: "14px 16px", background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.12)", borderRadius: "6px" }}>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "4px" }}>{item.filing}</div>
                <div style={{ fontSize: "12px", color: "rgba(240,232,216,0.5)" }}>{item.deadline}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>What Should Be in the Minute Book</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            The minute book is the legal record of the corporation&apos;s life. A properly maintained minute book includes:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {minuteBookContents.map((item, i) => (
              <li key={i} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6 }}>{item}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Common Annual Maintenance Errors and Their Consequences</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {commonErrors.map((item, i) => (
              <div key={i} style={{ padding: "20px", background: "rgba(255,255,255,0.03)", borderLeft: "3px solid rgba(139,32,32,0.4)", borderRadius: "4px" }}>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>{item.error}</div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.consequence}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Managing a Corporate Maintenance Practice</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            Ontario corporate lawyers with a book of 20–100+ corporations need a reliable system to track annual return deadlines. Key best practices:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Track every client corporation's anniversary date and fiscal year-end in your practice management software",
              "Set reminders 90 days before each Annual Return deadline — enough lead time to prepare annual resolutions and get client sign-off",
              "Send annual maintenance packages to clients proactively — waiting for clients to call means some will slip through",
              "Use recurring deadline templates in Atticus to auto-generate the next year's maintenance reminder when you complete this year's",
              "Confirm OBR access for every corporate client — get the company key before you need it urgently",
              "Review the minute book every time you open a matter for a client — not just at annual maintenance time",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6 }}>{item}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqJsonLd.mainEntity.map((item, i) => (
              <div key={i} style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{item.name}</div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "12px", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>
            Track Every Annual Return Deadline Automatically
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus helps Ontario corporate lawyers manage annual maintenance across their entire book of business. Set recurring annual deadlines for every client corporation. Get daily briefings on what is due. Never miss an Annual Return filing again.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 28px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Try Atticus Free for 14 Days →
          </Link>
        </section>

        <section>
          <h3 style={{ fontSize: "16px", color: "rgba(240,232,216,0.5)", marginBottom: "16px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { href: "/blog/how-to-incorporate-ontario", label: "How to Incorporate in Ontario" },
              { href: "/ontario-corporate-lawyer", label: "Atticus for Corporate Lawyers" },
              { href: "/blog/missing-limitation-periods-ontario", label: "Missing Limitation Periods" },
              { href: "/blog/trust-accounting-guide-ontario", label: "Trust Accounting Guide" },
              { href: "/calculator", label: "Limitation Period Calculator" },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ fontSize: "13px", color: "#C6922A", background: "rgba(198,146,42,0.08)", padding: "6px 14px", borderRadius: "20px", textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>

      <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <Link href="/" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Atticus — Practice Management for Ontario Lawyers</Link>
      </footer>
    </div>
  );
}
