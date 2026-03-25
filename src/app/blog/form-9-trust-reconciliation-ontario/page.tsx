import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Form 9 Trust Reconciliation for Ontario Lawyers: Step-by-Step Guide (2026) | Atticus Blog",
  description:
    "How to complete the Form 9 monthly trust reconciliation required by LSO By-Law 9. Step-by-step guide for Ontario lawyers and paralegals — what the form requires, common errors, and how to automate it.",
  keywords: [
    "form 9 trust reconciliation ontario",
    "lso by-law 9 form 9",
    "monthly trust reconciliation ontario lawyers",
    "trust reconciliation ontario law firm",
    "paralegal trust reconciliation ontario",
    "lso form 9 how to complete",
    "trust account reconciliation ontario",
    "by-law 9 record keeping ontario",
  ],
  openGraph: {
    title: "Form 9 Trust Reconciliation for Ontario Lawyers: Step-by-Step 2026",
    description:
      "How to complete the LSO By-Law 9 Form 9 monthly trust reconciliation. Step-by-step guide, common errors, and automation options for Ontario lawyers and paralegals.",
    type: "article",
    url: "https://getatticus.ca/blog/form-9-trust-reconciliation-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/form-9-trust-reconciliation-ontario" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Form 9 Trust Reconciliation for Ontario Lawyers: Step-by-Step Guide (2026)",
  description:
    "How to complete the LSO By-Law 9 Form 9 monthly trust reconciliation for Ontario lawyers and paralegals — requirements, common errors, and automation.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://getatticus.ca/blog/form-9-trust-reconciliation-ontario" },
});

export default function Form9Page() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1a1a2e", minHeight: "100vh", backgroundColor: "#fff" }}>
      <Script id="jsonld-form9" type="application/ld+json">{jsonLd}</Script>

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
          <Link href="/blog" style={{ color: "#4b5563", textDecoration: "none" }}>Blog</Link>
          <Link href="/trust-accounting-ontario" style={{ color: "#4b5563", textDecoration: "none" }}>Trust Accounting</Link>
          <Link href="/sign-up" style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "8px 18px", borderRadius: "6px", textDecoration: "none" }}>Free Trial</Link>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 24px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", background: "#f3f4f6", padding: "3px 10px", borderRadius: "20px" }}>Trust Accounting</span>
            <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#9ca3af" }}>March 2026 · 10 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, lineHeight: 1.25, marginBottom: "20px" }}>
            Form 9 Trust Reconciliation for Ontario Lawyers: Step-by-Step Guide (2026)
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>
            LSO By-Law 9 requires every Ontario lawyer and paralegal holding trust funds to complete a monthly trust reconciliation. Here&apos;s what the reconciliation must include, how to complete it correctly, and what happens when it doesn&apos;t balance.
          </p>
        </div>

        {/* What is Form 9 */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>What Is the Form 9 Trust Reconciliation?</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            Under LSO By-Law 9, Part IV (s. 17–22), Ontario lawyers and licensed paralegals who maintain trust accounts must perform and record a monthly trust reconciliation. The LSO refers to this as &quot;Form 9&quot; — the format for the monthly trust comparison.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            The reconciliation must be completed by the 25th day of the month following the month being reconciled. If you hold no trust funds in a given month, you must still complete the reconciliation and note that the balance is zero.
          </p>
          <div style={{ backgroundColor: "#fef9f0", border: "1px solid #fed7aa", borderRadius: "8px", padding: "20px", marginBottom: "20px" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", fontWeight: 700, color: "#92400e", marginBottom: "8px" }}>By-Law 9 requirements at a glance:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Must be completed every month without exception (even with zero trust balance)",
                "Must be completed by the 25th of the month following the period being reconciled",
                "Must reconcile the trust bank balance against the total of all client trust ledger balances",
                "Must identify and explain any discrepancy",
                "Must be signed by the lawyer or paralegal",
                "Must be retained for 10 years (lawyers) or 6 years (paralegals)",
              ].map((item) => (
                <li key={item} style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#78350f", display: "flex", gap: "8px" }}>
                  <span style={{ flexShrink: 0 }}>—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The three parts */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>The Three Parts of the Monthly Trust Reconciliation</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "24px" }}>
            A properly completed Form 9 has three components that must all reconcile to the same number:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              {
                part: "Part 1: Trust Bank Balance",
                color: "#1e40af",
                bg: "#eff6ff",
                border: "#bfdbfe",
                steps: [
                  "Start with the closing balance on the trust bank statement for the month",
                  "Add: deposits shown in your trust ledger but not yet cleared on the bank statement (outstanding deposits)",
                  "Subtract: cheques or EFTs issued but not yet cleared on the bank statement (outstanding cheques)",
                  "Result: Adjusted trust bank balance",
                ],
              },
              {
                part: "Part 2: Client Trust Ledger Total",
                color: "#166534",
                bg: "#f0fdf4",
                border: "#86efac",
                steps: [
                  "List every client who has funds on trust (or had transactions during the month)",
                  "For each client, calculate: opening balance + all receipts − all disbursements = closing balance",
                  "No client balance may be negative",
                  "Sum all client closing balances",
                  "Result: Total client trust ledger balance",
                ],
              },
              {
                part: "Part 3: Comparison (They Must Match)",
                color: "#92400e",
                bg: "#fef9f0",
                border: "#fed7aa",
                steps: [
                  "Adjusted trust bank balance (from Part 1) must equal Total client trust ledger balance (from Part 2)",
                  "If they match: sign and date the reconciliation, file it",
                  "If they don't match: investigate immediately — do not sign an unbalanced reconciliation",
                  "Discrepancies must be identified, explained, and corrected before the next month",
                ],
              },
            ].map((part) => (
              <div key={part.part} style={{ border: `1px solid ${part.border}`, borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ backgroundColor: part.bg, padding: "14px 20px" }}>
                  <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: "16px", fontWeight: 700, color: part.color }}>{part.part}</h3>
                </div>
                <div style={{ padding: "20px" }}>
                  <ol style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {part.steps.map((step) => (
                      <li key={step} style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#374151", lineHeight: 1.6 }}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Worked example */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Worked Example: February 2026 Trust Reconciliation</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "20px" }}>
            Assume a solo Ontario lawyer with three active trust clients:
          </p>

          {/* Client ledgers */}
          <div style={{ overflowX: "auto", marginBottom: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
              <thead>
                <tr style={{ backgroundColor: "#f9fafb" }}>
                  <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, borderBottom: "2px solid #e5e7eb" }}>Client</th>
                  <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid #e5e7eb" }}>Opening Balance</th>
                  <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid #e5e7eb" }}>Receipts</th>
                  <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid #e5e7eb" }}>Disbursements</th>
                  <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, borderBottom: "2px solid #e5e7eb", color: "#1a1a2e" }}>Closing Balance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Smith RE Purchase", "$5,000.00", "$180,000.00", "$183,500.00", "$1,500.00"],
                  ["Jones Litigation", "$2,500.00", "$0.00", "$1,200.00", "$1,300.00"],
                  ["Brown Estate", "$0.00", "$45,000.00", "$0.00", "$45,000.00"],
                  ["TOTAL", "", "", "", "$47,800.00"],
                ].map(([client, open, rec, disb, close], i) => (
                  <tr key={client} style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: i === 3 ? "#f0fdf4" : (i % 2 === 0 ? "#fff" : "#f9fafb") }}>
                    <td style={{ padding: "10px 14px", fontWeight: i === 3 ? 700 : 400 }}>{client}</td>
                    <td style={{ padding: "10px 14px", textAlign: "right", color: "#6b7280" }}>{open}</td>
                    <td style={{ padding: "10px 14px", textAlign: "right", color: "#6b7280" }}>{rec}</td>
                    <td style={{ padding: "10px 14px", textAlign: "right", color: "#6b7280" }}>{disb}</td>
                    <td style={{ padding: "10px 14px", textAlign: "right", fontWeight: 700, color: i === 3 ? "#15803d" : "#1a1a2e" }}>{close}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bank side */}
          <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "20px", marginBottom: "20px" }}>
            <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: "15px", fontWeight: 700, marginBottom: "12px", color: "#1a1a2e" }}>Part 1: Bank Reconciliation</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "system-ui, sans-serif", fontSize: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>February 28 bank statement balance</span><strong>$48,300.00</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>+ Outstanding deposits (Brown deposit cleared March 2)</span><strong>$0.00</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>− Outstanding cheques (Smith disbursement not cleared)</span><strong>($500.00)</strong>
              </div>
              <div style={{ borderTop: "2px solid #e2e8f0", paddingTop: "8px", display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#1a1a2e" }}>
                <span>Adjusted bank balance</span><span>$47,800.00</span>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#f0fdf4", border: "1px solid #86efac", borderRadius: "8px", padding: "16px", textAlign: "center" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "15px", fontWeight: 700, color: "#15803d" }}>
              ✓ Adjusted bank balance ($47,800.00) = Total client ledger balance ($47,800.00)
            </p>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#166534", marginTop: "4px" }}>
              Reconciliation balances. Sign, date, and file.
            </p>
          </div>
        </section>

        {/* Common errors */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>Common Form 9 Errors — and How to Avoid Them</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                error: "Forgetting to include zero-balance clients",
                detail: "If a client had a trust account earlier in the year but now has a zero balance, they still need to appear in the ledger with a $0.00 closing balance — not just be omitted.",
                fix: "Keep all clients in the trust ledger even after their balance reaches zero. Archive them only after the matter closes.",
              },
              {
                error: "Not tracking outstanding items",
                detail: "Deposits or cheques issued in the month but not cleared by month-end are the most common reconciliation error source. Forgetting to include them creates a false discrepancy.",
                fix: "Generate an outstanding transactions report from your bank portal at month-end. Reconcile this against your ledger.",
              },
              {
                error: "Negative balance on a client ledger",
                detail: "A negative client balance means you disbursed more than the client had on trust. This is always a violation, even if temporary. The reconciliation will not balance if any client has a negative balance.",
                fix: "Configure software alerts to warn before any disbursement that would take a client negative.",
              },
              {
                error: "Recording in the wrong month",
                detail: "A receipt or disbursement must be recorded in the month it occurred — not the month it's entered. A February disbursement recorded in March will cause both months to fail reconciliation.",
                fix: "Record transactions contemporaneously. Set a hard rule: no backdating.",
              },
              {
                error: "Skipping months with no activity",
                detail: "If you hold trust funds but have no transactions in a month, you still must complete the Form 9 showing the static balance carried forward.",
                fix: "Set a calendar reminder for the 20th of every month: complete Form 9 by the 25th regardless of activity.",
              },
            ].map((row) => (
              <div key={row.error} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "18px" }}>
                <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: "15px", fontWeight: 700, color: "#dc2626", marginBottom: "8px" }}>✗ Error: {row.error}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "14px", color: "#4b5563", lineHeight: 1.7, marginBottom: "10px" }}>{row.detail}</p>
                <div style={{ backgroundColor: "#f0fdf4", borderRadius: "6px", padding: "10px 14px" }}>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#15803d", margin: 0 }}><strong>Fix:</strong> {row.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Automation */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>How Software Simplifies the Monthly Reconciliation</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", fontFamily: "system-ui, sans-serif", marginBottom: "16px" }}>
            The manual Form 9 reconciliation — with a spreadsheet and bank statement — is error-prone and time-consuming. Modern practice management software reduces this to a 5-minute monthly task:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              ["Per-client trust ledger auto-maintained", "Every trust receipt and disbursement is immediately reflected in the client ledger balance — no end-of-month tallying required."],
              ["One-click reconciliation CSV export", "Export the full trust ledger summary (RFC 4180-compliant) matching the Form 9 format. Import into your bank reconciliation or submit as your record."],
              ["Negative balance prevention", "Real-time alerts before any disbursement that would take a client negative — so you never create a reconciliation problem."],
              ["Morning briefing trust summary", "Daily email with all client trust balances, flagging negatives and unusual changes. Catch errors immediately, not at month-end."],
            ].map(([title, desc]) => (
              <div key={title as string} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "18px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "8px", fontFamily: "system-ui, sans-serif" }}>{title as string}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#4b5563", fontFamily: "system-ui, sans-serif" }}>{desc as string}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ backgroundColor: "#1a1a2e", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px", color: "#fff" }}>
            Make Trust Reconciliation a 5-Minute Monthly Task
          </h3>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", marginBottom: "24px", fontFamily: "system-ui, sans-serif", maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus maintains your per-client trust ledger automatically and exports the CSV you need for Form 9 in one click. Try it free.
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
          <Link href="/blog/trust-accounting-guide-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Trust Accounting Guide</Link>
          <Link href="/blog/law-firm-billing-software-ontario" style={{ color: "#6b7280", textDecoration: "none" }}>Billing Software Guide</Link>
          <Link href="/ontario-paralegal-software" style={{ color: "#6b7280", textDecoration: "none" }}>Paralegal Software</Link>
          <Link href="/pricing" style={{ color: "#6b7280", textDecoration: "none" }}>Pricing</Link>
        </div>
      </footer>
    </div>
  );
}
