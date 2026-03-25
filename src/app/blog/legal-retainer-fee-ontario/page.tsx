import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Legal Retainer Fees in Ontario: What They Are, How They Work (2026)",
  description:
    "A plain-language guide to retainer fees for Ontario legal clients and lawyers — types of retainers, trust account rules, what happens to unused retainers, and LSO By-Law 9 requirements.",
  openGraph: {
    title: "Legal Retainer Fees in Ontario: What They Are, How They Work (2026)",
    description:
      "What is a retainer fee? How do Ontario lawyers handle trust retainers? What happens to unused retainer money? A complete guide for Ontario clients and lawyers.",
    type: "article",
    url: "https://getatticus.ca/blog/legal-retainer-fee-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/legal-retainer-fee-ontario" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Legal Retainer Fees in Ontario: What They Are, How They Work (2026)",
  description:
    "Types of retainers, trust account rules, unused retainers, and LSO By-Law 9 requirements for Ontario lawyers.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/legal-retainer-fee-ontario",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a retainer fee for a lawyer in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A retainer fee in Ontario is a deposit paid to a lawyer before they begin work on your matter. It is held in a trust account and applied against the lawyer's fees as work is completed and invoiced. It is not a flat fee for a specific amount of work — it is a deposit that secures your lawyer's services.",
      },
    },
    {
      "@type": "Question",
      name: "Do Ontario lawyers have to return unused retainer money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under LSO By-Law 9, Ontario lawyers must return any portion of the retainer that has not been earned (i.e., not yet billed) when the matter closes. Unused trust funds belong to the client.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a retainer and a flat fee in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A retainer is a deposit held in trust and applied to fees as they are earned. A flat fee is a fixed price for a defined scope of work. With a retainer, the client pays for the actual time spent. With a flat fee, the cost is known upfront regardless of how long the work takes.",
      },
    },
    {
      "@type": "Question",
      name: "How much is a typical retainer fee for an Ontario lawyer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Retainer amounts vary by practice area and complexity. A simple matter might require $1,000–$2,500. A complex litigation or corporate transaction might require $5,000–$20,000 or more. The retainer is usually set at an estimate of 3–6 months of anticipated fees.",
      },
    },
  ],
};

export default function LegalRetainerFeePage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-retainer" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-retainer-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

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
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 9 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          Legal Retainer Fees in Ontario:<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>What They Are, How They Work</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          A retainer fee is one of the most misunderstood parts of hiring a lawyer. Clients often assume the retainer is the total cost. Lawyers sometimes explain it poorly. Here is a clear breakdown of how Ontario legal retainers work — for both clients who want to understand what they&apos;re paying and lawyers who need to manage trust accounts correctly.
        </p>
      </header>

      {/* CONTENT */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        {/* WHAT IS A RETAINER */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>What is a retainer fee?</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            A retainer fee is a deposit that a client pays to a lawyer before work begins. It sits in the lawyer&apos;s trust account — a separate account governed by LSO By-Law 9 — and is drawn down as the lawyer completes work and issues invoices.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            The retainer is <strong style={{ color: "#faf8f4" }}>not</strong> a flat fee. It is not a payment for a specific number of hours. It is a pre-authorization deposit that:
          </p>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Secures the lawyer's commitment to represent you",
              "Gives the lawyer confidence to begin work without chasing payment",
              "Is held by the lawyer in trust — it still belongs to you until earned",
              "Is applied to invoices as fees are billed",
              "Must be refunded (unused portion) when the matter closes",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <div style={{ background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", padding: "24px 28px", borderRadius: "4px" }}>
            <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#C6922A" }}>Key point:</strong> Until your lawyer sends you an invoice and applies the fees against the retainer, that money is still yours. Under LSO By-Law 9, your lawyer cannot access trust funds without a completed invoice.
            </p>
          </div>
        </section>

        {/* TYPES OF RETAINERS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Types of retainer arrangements in Ontario</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              {
                type: "Trust retainer (most common)",
                desc: "A deposit held in trust and applied against fees as invoiced. You pay a lump sum upfront, the lawyer bills monthly (or per milestone), and deducts from the trust. When the matter closes, unused funds are returned.",
                common: "Civil litigation, corporate transactions, ongoing family matters",
              },
              {
                type: "General retainer",
                desc: "A fee paid to keep a lawyer available — not for specific matters. The client pays a monthly or annual amount in exchange for the lawyer&apos;s availability and priority access. Common for businesses that want a lawyer on call.",
                common: "Business clients, in-house counsel supplements",
              },
              {
                type: "Flat fee",
                desc: "A fixed price for a defined scope of work. Not technically a retainer — it is a fee for service. The lawyer quotes a total cost for the matter regardless of time spent. Common for will drafting, incorporations, and real estate closings.",
                common: "Wills, real estate, incorporations, immigration applications",
              },
              {
                type: "Contingency fee",
                desc: "The lawyer takes no upfront fee and instead receives a percentage of the settlement or award if successful. Only available for certain types of cases and is governed by LSO By-Law 9 and the Solicitors Act. The percentage must be disclosed in writing.",
                common: "Personal injury, class actions (with LSO approval)",
              },
            ].map(({ type, desc, common }) => (
              <div key={type} style={{ background: "#07070a", padding: "24px 28px" }}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{type}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "10px" }}>{desc}</p>
                <p style={{ fontSize: "12px", color: "rgba(240,232,216,0.35)", letterSpacing: "0.05em" }}>Common for: {common}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW TRUST RETAINERS WORK */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>How trust retainers work under LSO By-Law 9</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            LSO By-Law 9 governs how Ontario lawyers must handle client trust funds. The rules exist to protect clients — specifically, to prevent lawyers from dipping into client money before fees are earned. Here is how the lifecycle of a trust retainer works:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
            {[
              {
                step: "1",
                title: "Client pays the retainer",
                desc: "The deposit goes directly into the lawyer&apos;s mixed trust account — a segregated bank account that holds all client trust funds. It does not go into the lawyer&apos;s general operating account.",
              },
              {
                step: "2",
                title: "Lawyer completes work and issues an invoice",
                desc: "The invoice documents the work completed and the fees earned, usually with a time log showing hours worked and applicable HST.",
              },
              {
                step: "3",
                title: "Lawyer transfers earned fees from trust to general",
                desc: "After invoicing, the lawyer is permitted to transfer the invoiced amount from trust to their general account. This is called a trust-to-general transfer and must be documented in the client trust ledger.",
              },
              {
                step: "4",
                title: "Retainer replenishment (if required)",
                desc: "If the retainer is depleted before the matter closes, the lawyer may request a top-up. This should be specified in the engagement letter.",
              },
              {
                step: "5",
                title: "Matter closes — unused funds returned",
                desc: "At the close of the matter, any funds remaining in trust that have not been earned are returned to the client. The lawyer cannot retain unearned trust funds.",
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
        </section>

        {/* TYPICAL AMOUNTS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Typical retainer amounts by practice area in Ontario</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Retainer amounts vary widely based on the lawyer&apos;s hourly rate, the anticipated complexity of the matter, and how quickly fees will accumulate. These are typical ranges — not fixed rates.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "24px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.2)" }}>
                  <th style={{ padding: "12px 0", textAlign: "left", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>Practice Area</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>Typical Retainer Range</th>
                  <th style={{ padding: "12px 0", textAlign: "right", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,232,216,0.4)" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Family law (separation)", "$3,000–$10,000+", "Highly variable; contested matters go much higher"],
                  ["Civil litigation", "$5,000–$20,000+", "Depends on court level and complexity"],
                  ["Employment (wrongful dismissal)", "$2,500–$7,500", "Often on contingency instead"],
                  ["Corporate (M&A, financing)", "$10,000–$50,000+", "Highly matter-dependent"],
                  ["Real estate (purchase/sale)", "Flat fee $1,200–$2,500", "Usually flat fee, not retainer"],
                  ["Wills and estate planning", "Flat fee $400–$1,500", "Usually flat fee per document"],
                  ["Immigration", "$1,500–$5,000", "Varies by application type"],
                  ["Criminal defence", "$5,000–$25,000+", "Summary vs. indictable matters"],
                ].map(([area, range, notes], i) => (
                  <tr key={i as number} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "12px 0", fontSize: "14px", color: "rgba(240,232,216,0.75)" }}>{area as string}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontSize: "14px", color: "#C6922A", fontWeight: 500 }}>{range as string}</td>
                    <td style={{ padding: "12px 0", textAlign: "right", fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>{notes as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", lineHeight: 1.6 }}>
            These are estimates only. Actual retainer requirements depend on the specific lawyer, firm size, city, and matter complexity.
          </p>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "24px" }}>Common questions about Ontario legal retainers</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              {
                q: "Can my lawyer keep the retainer if they don't finish the work?",
                a: "No. Under LSO By-Law 9, a lawyer can only transfer funds from trust to their general account after earning those fees through invoiced work. If a lawyer withdraws before the matter is complete, any unearned retainer funds must be returned. If you believe a lawyer has wrongfully retained trust funds, you can file a complaint with the LSO.",
              },
              {
                q: "Is a retainer the same as a fee?",
                a: "No. A retainer is a deposit held in trust. The fee is what the lawyer charges for their services. The retainer is applied against fees as they are invoiced — but it is not the fee itself. The actual cost of the matter may be more or less than the retainer amount.",
              },
              {
                q: "What happens if my legal fees exceed the retainer?",
                a: "Your lawyer should notify you when the retainer is running low and request a top-up before it is exhausted. Some engagement letters specify automatic replenishment thresholds. If you cannot top up, your lawyer may need to withdraw from the matter (with appropriate notice) under Rule 3.7.",
              },
              {
                q: "Do I get a receipt for the retainer?",
                a: "You should receive a written confirmation of the retainer deposit and a trust receipt. This may be part of your engagement letter or a separate document. You should also receive trust account statements showing the balance and any transfers applied against invoices.",
              },
              {
                q: "How do I know the retainer is being held properly?",
                a: "Ontario lawyers are required to maintain client trust ledgers showing every transaction — receipt of funds, withdrawals, and the balance. You have the right to request a trust ledger statement for your matter at any time. Your practice management software (like Atticus) should generate this automatically.",
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: "#07070a", padding: "24px 28px" }}>
                <p style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{q}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOR LAWYERS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>For Ontario lawyers: managing trust retainers efficiently</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Trust accounting is one of the most compliance-intensive parts of running an Ontario law practice. Common errors that lead to LSO complaints:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
            {[
              "Transferring fees from trust before the invoice is completed",
              "Mixing client trust funds with general account funds",
              "Failing to perform the monthly three-way reconciliation (Form 9)",
              "Not returning unused trust funds promptly when a matter closes",
              "Accepting fees in cash above the $7,500 threshold without the required FINTRAC records",
            ].map((error) => (
              <div key={error} style={{ display: "flex", gap: "12px", padding: "10px 16px", background: "rgba(220,53,69,0.06)", border: "1px solid rgba(220,53,69,0.1)" }}>
                <span style={{ color: "#e8534a", flexShrink: 0 }}>✗</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6, margin: 0 }}>{error}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            Atticus automates trust account tracking — recording receipts and disbursements, maintaining per-client trust ledgers, alerting you to negative balances, and exporting trust records in LSO-compliant CSV format. The monthly trust reconciliation (Form 9) is automated from your ledger data.
          </p>
        </section>

        {/* CTA */}
        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>LSO By-Law 9 trust accounting, automated</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus tracks every trust receipt and disbursement, maintains client trust ledgers, alerts you to negative balances, and exports in LSO-compliant format. Try free for 14 days.
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
            { href: "/blog/engagement-letter-ontario-lawyers", label: "Engagement letter guide" },
            { href: "/blog/ontario-lawyer-hourly-rates", label: "Ontario lawyer hourly rates" },
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
