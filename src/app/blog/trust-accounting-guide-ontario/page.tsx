import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Trust Accounting for Ontario Law Firms: The Complete Guide (2026) | Atticus Blog",
  description:
    "A practical guide to trust accounting for Ontario lawyers — LSO By-Law 9 requirements, what records you must keep, common violations, and how modern software automates compliance.",
  keywords: [
    "trust accounting ontario lawyers",
    "lso by-law 9 trust accounting",
    "ontario law firm trust account guide",
    "trust accounting software ontario",
    "mixed trust account ontario",
    "client trust ledger ontario",
    "law society trust accounting requirements",
    "how to do trust accounting ontario",
  ],
  openGraph: {
    title: "Trust Accounting for Ontario Law Firms: The Complete 2026 Guide",
    description:
      "LSO By-Law 9 requirements, trust record keeping, common violations, and how to automate trust accounting compliance for Ontario lawyers.",
    type: "article",
    url: "https://getatticus.ca/blog/trust-accounting-guide-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/trust-accounting-guide-ontario" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Trust Accounting for Ontario Law Firms: The Complete Guide (2026)",
  description:
    "A practical guide to trust accounting for Ontario lawyers — LSO By-Law 9 requirements, record keeping, common violations, and software for compliance.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://getatticus.ca/blog/trust-accounting-guide-ontario" },
});

export default function TrustAccountingGuidePage() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-trust" type="application/ld+json">{jsonLd}</Script>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
          <Link href="/blog" style={{ color: "#4b5563", textDecoration: "none" }}>Blog</Link>
          <Link href="/trust-accounting-ontario" style={{ color: "#4b5563", textDecoration: "none" }}>Trust Accounting Software</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>Free Trial</Link>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 24px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", background: "#f3f4f6", padding: "3px 10px", borderRadius: "20px" }}>Trust Accounting</span>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#9ca3af" }}>March 2026 · 11 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.25, marginBottom: "20px" }}>
            Trust Accounting for Ontario Law Firms: The Complete 2026 Guide
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>
            Trust accounting is one of the most compliance-intensive obligations for Ontario lawyers. LSO By-Law 9 is detailed, the record-keeping requirements are strict, and violations — even inadvertent ones — can result in discipline. Here&apos;s a complete practical guide.
          </p>
        </div>

        {/* Section 1 — What is trust accounting */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>What Is a Trust Account?</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            A lawyer trust account holds money belonging to clients or third parties — not the lawyer. Common examples include:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Retainer funds paid in advance for legal fees",
              "Closing funds in a real estate transaction",
              "Estate proceeds pending distribution",
              "Settlement funds received on behalf of a client",
              "Deposits held pending completion of a condition",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: "8px", fontFamily: "system-ui, sans-serif", fontSize: "15px", color: "#374151" }}>
                <span style={{ color: "#1a1a2e", fontWeight: 700 }}>—</span> {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif" }}>
            The fundamental rule: trust money is never yours until you have earned it and transferred it to your general account with proper documentation. Commingling trust funds with general funds — or using trust funds for operating expenses — are serious violations.
          </p>
        </section>

        {/* Section 2 — By-Law 9 */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>LSO By-Law 9: What It Actually Requires</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "20px" }}>
            By-Law 9 under the Law Society Act governs how Ontario lawyers handle client trust funds. Here are the key requirements every Ontario lawyer must meet:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                req: "Designated Trust Account",
                detail: "You must maintain a designated trust account at a bank, credit union, or trust company in Ontario. It must be separate from your general operating account. The account must be identified as a trust account.",
              },
              {
                req: "Immediate Deposit",
                detail: "Trust funds must be deposited intact (in full) and without delay — generally the same day received or the next banking day. You cannot hold cash trust funds.",
              },
              {
                req: "Client Trust Ledger",
                detail: "You must maintain a separate ledger for each client showing all trust receipts and disbursements for that client. At all times, the sum of all client ledger balances must equal the trust bank account balance.",
              },
              {
                req: "Monthly Reconciliation",
                detail: "Monthly bank reconciliation is required: bank statement balance must equal the total of all client trust ledger balances. You must maintain the reconciliation records and be able to produce them on LSO request.",
              },
              {
                req: "No Negative Balances",
                detail: "No client&apos;s trust ledger may go negative. Disbursing more than a client has on trust — even temporarily — is a violation. You must monitor balances before every disbursement.",
              },
              {
                req: "Transfer to General Account",
                detail: "You can only withdraw trust funds to your general account when: (a) fees have been earned and billed to the client, (b) the client has approved, and (c) you maintain a contemporaneous record of the transfer.",
              },
              {
                req: "Record Retention",
                detail: "All trust records must be retained for 10 years after the matter closes. This includes deposit slips, bank statements, client ledgers, reconciliations, and transfer documentation.",
              },
            ].map((row) => (
              <div key={row.req} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif", color: "#1a1a2e" }}>{row.req}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{row.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — Common violations */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>The Most Common Trust Accounting Violations</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "20px" }}>
            LSO audit findings and discipline decisions show the same violations appearing repeatedly. Most are not caused by dishonesty — they&apos;re caused by inadequate systems.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
              <thead>
                <tr style={{ backgroundColor: "#fef9f0" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #fed7aa" }}>Violation</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #fed7aa" }}>How It Happens</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #fed7aa" }}>Prevention</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Negative trust balance", "Disbursing before confirming client has sufficient funds on trust", "Check balance before every disbursement; software alerts on negatives"],
                  ["Failure to reconcile", "No monthly reconciliation done; discrepancies grow unnoticed", "Software-generated monthly reconciliation report"],
                  ["Delayed deposit", "Holding trust cheques for days before depositing", "Same-day deposit policy; digital payment intake"],
                  ["Misapplication to fees", "Paying operating expenses from trust before billing client", "Never withdraw from trust without contemporaneous billing record"],
                  ["Missing client ledger", "Treating trust account as one pooled fund without per-client tracking", "Separate ledger entry for every client transaction"],
                  ["Inadequate records", "Cannot produce trust records on LSO request", "10-year record retention; CSV export and cloud backup"],
                ].map(([v, how, prev], i) => (
                  <tr key={v as string} style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                    <td style={{ padding: "11px 16px", fontWeight: 600, color: "#92400e" }}>{v}</td>
                    <td style={{ padding: "11px 16px", color: "#4b5563" }}>{how}</td>
                    <td style={{ padding: "11px 16px", color: "#15803d" }}>{prev}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4 — The reconciliation process */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>How to Do the Monthly Trust Reconciliation</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "20px" }}>
            The monthly trust reconciliation must balance two sets of numbers:
          </p>
          <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "24px", marginBottom: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b7280", fontFamily: "system-ui, sans-serif", marginBottom: "12px" }}>Bank Side</p>
                <ol style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Ending bank statement balance",
                    "+ Outstanding deposits (deposited but not cleared)",
                    "− Outstanding cheques (issued but not cleared)",
                    "= Adjusted bank balance",
                  ].map((step) => (
                    <li key={step} style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#374151" }}>{step}</li>
                  ))}
                </ol>
              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b7280", fontFamily: "system-ui, sans-serif", marginBottom: "12px" }}>Ledger Side</p>
                <ol style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Sum of all client trust ledger balances",
                    "(Each client&apos;s receipts minus disbursements)",
                    "",
                    "= Total client ledger balance",
                  ].map((step, i) => step ? (
                    <li key={i} style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#374151" }}>{step}</li>
                  ) : <li key={i} style={{ listStyle: "none", height: "20px" }} />)}
                </ol>
              </div>
            </div>
            <div style={{ marginTop: "16px", padding: "12px", backgroundColor: "#1a1a2e", borderRadius: "6px", textAlign: "center" }}>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", fontWeight: 700, color: "#fff" }}>
                Adjusted Bank Balance = Total Client Ledger Balance ✓
              </p>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>
                If these don&apos;t match, you have a discrepancy that must be investigated and resolved immediately.
              </p>
            </div>
          </div>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif" }}>
            You must do this every month, for every trust account, and retain the reconciliation records. If there is a discrepancy, you must investigate immediately — discrepancies that persist are a red flag in any LSO audit.
          </p>
        </section>

        {/* Section 5 — Software */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>What Trust Accounting Software Should Do for You</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            A proper trust accounting system eliminates the manual reconciliation spreadsheet, prevents negative balances, and creates an audit trail automatically. Here&apos;s what to look for:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              ["Per-client trust ledger", "Every receipt and disbursement recorded against a specific client — not a pooled account. Real-time balance per client always visible."],
              ["Negative balance prevention", "Software should warn or block you before recording a disbursement that would take a client&apos;s trust balance negative."],
              ["Monthly reconciliation export", "One-click CSV export of all client ledger balances for monthly bank reconciliation. RFC 4180-compliant for import into Excel or Sheets."],
              ["Morning balance alerts", "Daily notification of any client with a negative trust balance or an unusual change — catches data entry errors before they compound."],
              ["Canadian bank compatibility", "Trust accounts are held at Canadian chartered banks. Your software should work with Canadian banking data, not assume US bank formats."],
              ["10-year record retention", "Cloud storage with guaranteed retention ensures you can produce records on LSO request years after a matter closes."],
            ].map(([title, desc]) => (
              <div key={title as string} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "18px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif", color: "#1a1a2e" }}>{title as string}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{desc as string}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ backgroundColor: "#1a1a2e", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px", color: "#fff" }}>
            Trust Accounting Built Into Your Practice Management
          </h3>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", marginBottom: "8px", fontFamily: "system-ui, sans-serif" }}>
            Atticus includes per-client trust ledgers, negative balance alerts, monthly CSV exports, and morning briefing trust summaries — all compliant with LSO By-Law 9.
          </p>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "24px", fontFamily: "system-ui, sans-serif" }}>
            No separate accounting software required. One platform, $149 CAD/month.
          </p>
          <Link href="/sign-up" style={{ backgroundColor: "#fff", color: "#1a1a2e", padding: "12px 28px", borderRadius: "6px", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "15px" }}>
            Start Free 14-Day Trial
          </Link>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "12px" }}>No credit card · $149 CAD/mo · Canadian infrastructure</p>
        </div>
      </article>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "32px 24px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "13px", fontFamily: "system-ui, sans-serif" }}>
          <Link href="/blog" style={{ color: "#6b7280", textDecoration: "none" }}>← All Posts</Link>
          <Link href="/trust-accounting-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Trust Accounting Software</Link>
          <Link href="/blog/law-firm-billing-software-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Billing Software Guide</Link>
          <Link href="/blog/how-to-start-a-law-firm-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>How to Start a Law Firm</Link>
          <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
