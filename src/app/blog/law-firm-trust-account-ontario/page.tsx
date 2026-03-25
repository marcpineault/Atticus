import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Set Up a Trust Account for an Ontario Law Firm (2026 Guide)",
  description:
    "Step-by-step guide to opening and operating a trust account for an Ontario law firm — LSO By-Law 9 requirements, bank selection, CDIC coverage, mixed vs. specific trust accounts, and monthly reconciliation.",
  openGraph: {
    title: "How to Set Up a Trust Account for an Ontario Law Firm (2026 Guide)",
    description:
      "Everything Ontario solo and small law firms need to open and operate a mixed trust account under LSO By-Law 9 — bank requirements, record-keeping, and monthly reconciliation.",
    type: "article",
    url: "https://getatticus.ca/blog/law-firm-trust-account-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/law-firm-trust-account-ontario" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Set Up a Trust Account for an Ontario Law Firm (2026 Guide)",
  description:
    "Opening and operating a law firm trust account in Ontario — LSO By-Law 9, bank selection, CDIC, mixed vs specific trust accounts.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/law-firm-trust-account-ontario",
};

export default function TrustAccountSetupPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-trust-setup" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>

      {/* NAV */}
      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <header style={{ padding: "80px 48px 60px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Trust Accounting</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 10 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          How to Set Up a Trust Account<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>for an Ontario Law Firm</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Opening a trust account is one of the first things a new Ontario lawyer does when starting a practice — and one of the most heavily regulated. Getting it wrong creates LSO compliance exposure from day one. Here is a complete guide to opening and operating a compliant Ontario law firm trust account under LSO By-Law 9.
        </p>
      </header>

      {/* CONTENT */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        {/* WHO NEEDS ONE */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Who needs a trust account in Ontario?</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Under LSO By-Law 9, you must maintain a trust account if you receive money on behalf of a client. This applies to virtually all practicing Ontario lawyers who:
          </p>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Collect retainer deposits before beginning work",
              "Hold funds for real estate transactions (closings, deposits)",
              "Hold settlement funds in litigation matters",
              "Receive estate funds as executor or estate trustee",
              "Collect any amount that belongs to a client rather than your firm",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            The LSO By-Law 9 exemption: if you never receive client funds — for example, if you do purely advisory work where all payments are direct to third parties — you may not need a trust account. But most Ontario lawyers collect retainers and therefore need one from day one of practice.
          </p>
        </section>

        {/* TYPES */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Types of trust accounts</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              {
                type: "Mixed trust account",
                desc: "The most common type. A single account that holds funds belonging to multiple clients — segregated in your records by client trust ledger, not by separate bank accounts. This is what most Ontario solo and small firm lawyers use.",
                note: "Interest on the mixed trust account must be remitted to the Law Foundation of Ontario — you cannot keep it.",
              },
              {
                type: "Specific trust account",
                desc: "A separate bank account opened for a single client or matter — typically used for large real estate transactions or when a client requires it. Interest, if any, belongs to the client (or as directed by them).",
                note: "Not practical for everyday retainers — mainly used for real estate closings and large estates.",
              },
            ].map(({ type, desc, note }) => (
              <div key={type} style={{ background: "#07070a", padding: "24px 28px" }}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{type}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "10px" }}>{desc}</p>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)", fontStyle: "italic" }}>{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW TO OPEN */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>How to open a trust account at an Ontario bank</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            The bank process for opening a lawyer trust account:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
            {[
              {
                step: "1",
                title: "Choose a bank that works with law firms",
                desc: "All major Canadian banks (RBC, TD, BMO, Scotiabank, CIBC, National Bank) support law firm trust accounts. Some have dedicated commercial banking teams with experience in legal trust requirements. Compare monthly fees, transaction fees, and whether they offer a trust account linked to your general account for easy transfers.",
              },
              {
                step: "2",
                title: "Identify yourself as a lawyer",
                desc: "Tell the bank you need a lawyer&apos;s mixed trust account — specifically that the account must be designated as a trust account and that interest must flow to the Law Foundation of Ontario. Most bank branches know this, but confirm explicitly.",
              },
              {
                step: "3",
                title: "Provide your LSO registration",
                desc: "Banks will ask for your LSO member number, law firm registration (if applicable), and personal identification. Some banks require proof of your law firm&apos;s business structure (corporation, professional corporation, or sole proprietorship).",
              },
              {
                step: "4",
                title: "Set up for Law Foundation of Ontario interest remittance",
                desc: "The bank will configure the account so that interest earned on the mixed trust account is remitted to the Law Foundation of Ontario — not your general account. This is required under By-Law 9.",
              },
              {
                step: "5",
                title: "Link to your general account",
                desc: "Set up the trust account to allow transfers to your general (operating) account. You will need to do this to transfer earned fees from trust to general after invoicing clients.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ display: "flex", gap: "20px", padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ flexShrink: 0, width: "28px", height: "28px", background: "rgba(198,146,42,0.15)", border: "1px solid rgba(198,146,42,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 600, color: "#C6922A" }}>
                  {step}
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "6px" }}>{title}</p>
                  <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", padding: "20px 24px", borderRadius: "4px" }}>
            <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#C6922A" }}>CDIC coverage:</strong> Law firm trust accounts may qualify for CDIC deposit insurance coverage if held at a CDIC member institution. Funds held in trust for each client are insured separately up to $100,000 per client. Verify coverage with your bank — this matters for large real estate closings or estate matters.
            </p>
          </div>
        </section>

        {/* RECORD KEEPING */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>By-Law 9 record-keeping requirements</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            Once the account is open, By-Law 9 requires you to maintain these records for every client with trust funds:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              {
                record: "Client trust ledger",
                desc: "A separate ledger page for each client showing every trust receipt, disbursement, and running balance. This is how you segregate client funds within the mixed account.",
              },
              {
                record: "Trust bank statements",
                desc: "Monthly bank statements from the trust account must be retained. These form the basis of your monthly reconciliation.",
              },
              {
                record: "Trust transfer records",
                desc: "Every transfer from trust to general must be documented: the client, the matter, the invoice date, the amount, and the date of transfer.",
              },
              {
                record: "Monthly reconciliation (Form 9)",
                desc: "A three-part reconciliation comparing your client trust ledger total, your trust bank balance, and your books. Must be done monthly under By-Law 9.",
              },
            ].map(({ record, desc }) => (
              <div key={record} style={{ background: "#07070a", padding: "22px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{record}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            Records must be retained for at least seven years. The LSO may request them during a spot audit or in response to a complaint. Having them organized and current is not just a compliance requirement — it is malpractice protection.
          </p>
        </section>

        {/* COMMON VIOLATIONS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Common trust account violations and how to avoid them</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              {
                violation: "Withdrawal before invoicing (misappropriation)",
                detail: "Taking fees from trust before completing and sending an invoice. Even if the fees are legitimately earned, the sequence matters under By-Law 9. Always invoice first, then transfer.",
                severity: "Critical — grounds for suspension",
              },
              {
                violation: "Trust shortfall (negative balance for a client)",
                detail: "A client&apos;s trust ledger shows a negative balance — meaning you have disbursed more than you received for that client. This means other clients&apos; funds are being used to cover the shortfall, which is a serious violation.",
                severity: "Critical — grounds for suspension",
              },
              {
                violation: "Failing to perform monthly reconciliation",
                detail: "The Form 9 three-way reconciliation must be done every month. Skipping months is a systematic violation even if the underlying math is correct.",
                severity: "High — LSO audit finding",
              },
              {
                violation: "Cash receipts above $7,500 without FINTRAC records",
                detail: "Cash received in trust above $7,500 triggers FINTRAC large cash transaction reporting requirements. Most Ontario lawyers are unaware that this applies to trust receipts.",
                severity: "High — regulatory violation",
              },
              {
                violation: "Delayed return of trust funds at matter close",
                detail: "Holding onto unearned trust funds after a matter closes, even temporarily. Unused trust funds belong to the client and must be returned promptly.",
                severity: "Moderate — LSO complaint risk",
              },
            ].map(({ violation, detail, severity }) => (
              <div key={violation} style={{ background: "#07070a", padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "8px" }}>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "#faf8f4", margin: 0 }}>{violation}</p>
                  <span style={{ fontSize: "11px", color: severity.startsWith("Critical") ? "#e8534a" : severity.startsWith("High") ? "#e8b84b" : "#C6922A", flexShrink: 0 }}>{severity}</span>
                </div>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AUTOMATION */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>How Atticus automates trust account management</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Manual trust account management — spreadsheets, paper ledgers, or disconnected accounting software — is the root cause of most trust violations. The sequence of invoice → transfer is easy to miss under time pressure. Atticus automates the workflow:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Records every trust receipt and disbursement with client, matter, date, and reference",
              "Maintains per-client trust ledgers updated in real time",
              "Alerts you when any client trust balance goes negative",
              "Shows trust balance per client on the billing dashboard",
              "Includes daily morning briefing alerts for negative trust balances",
              "Exports trust ledger in LSO-compliant CSV format (Date, Type, Client, Matter, Description, Reference, Amount)",
              "Automates the monthly Form 9 three-way reconciliation from your ledger data",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", padding: "12px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span style={{ color: "#C6922A", flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Trust accounting that runs itself</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus automates your trust ledger, monthly reconciliation, and negative balance alerts so you stay compliant without the spreadsheets. 14-day free trial.
          </p>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
            Start Free Trial →
          </Link>
        </div>
      </article>

      {/* RELATED */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 400, color: "rgba(240,232,216,0.5)", marginBottom: "20px" }}>Related guides</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { href: "/blog/trust-accounting-guide-ontario", label: "Trust accounting guide" },
            { href: "/blog/form-9-trust-reconciliation-ontario", label: "Form 9 reconciliation" },
            { href: "/blog/legal-retainer-fee-ontario", label: "How retainer fees work" },
            { href: "/blog/how-to-start-a-law-firm-ontario", label: "How to start a law firm" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ color: "#C6922A", fontSize: "14px", textDecoration: "none", border: "1px solid rgba(198,146,42,0.3)", padding: "6px 16px", borderRadius: "20px" }}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
          <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
