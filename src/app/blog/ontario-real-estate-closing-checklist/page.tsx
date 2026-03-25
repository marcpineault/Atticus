import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Real Estate Closing Checklist for Lawyers: Step-by-Step Guide (2026)",
  description:
    "A complete Ontario real estate closing checklist for lawyers — purchase and sale transactions, title searches, trust account requirements, closing documents, and what Atticus automates for high-volume RE practice.",
  openGraph: {
    title: "Ontario Real Estate Closing Checklist for Lawyers: Step-by-Step Guide (2026)",
    description:
      "The complete checklist for Ontario residential real estate closings — pre-closing, closing day, and post-closing steps, trust account requirements, and AI tools for high-volume practice.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-real-estate-closing-checklist",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-real-estate-closing-checklist" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Real Estate Closing Checklist for Lawyers: Step-by-Step Guide (2026)",
  description:
    "Complete Ontario real estate closing checklist for purchase and sale transactions.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/ontario-real-estate-closing-checklist",
};

export default function REClosingChecklistPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-re-checklist" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>

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
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Practice Management</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 10 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          Ontario Real Estate Closing Checklist<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>for Lawyers: Step-by-Step Guide</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Real estate closings are deadline-intensive, trust-account-heavy, and document-dense. A missed condition, an incorrect mortgage payout, or a trust shortfall on closing day creates serious LAWPRO exposure. This is the complete checklist Ontario real estate lawyers use to run clean closings consistently.
        </p>
      </header>

      {/* CONTENT */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        {/* PURCHASE CHECKLIST */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Purchase transaction checklist</h2>

          <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#C6922A", marginBottom: "16px" }}>1. At intake (on Agreement of Purchase and Sale receipt)</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "28px" }}>
            {[
              "Confirm closing date and diarize in your deadline system",
              "Identify all conditions (financing, inspection, status certificate) and their expiry dates — diarize immediately",
              "Identify any unusual clauses that require attention (assignment, schedule items, chattels lists)",
              "Confirm client identity and run AML client identification procedures",
              "Run conflict of interest check",
              "Send engagement letter — confirm scope includes title insurance, HST if applicable, mortgage advice",
              "Collect retainer deposit to trust and issue trust receipt",
              "Request signed FINTRAC client identification forms if applicable",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", padding: "10px 14px", background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "rgba(198,146,42,0.6)", flexShrink: 0, fontSize: "16px" }}>☐</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.5, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#C6922A", marginBottom: "16px" }}>2. Pre-closing (2–3 weeks before closing)</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "28px" }}>
            {[
              "Order title search through Teraview / Titleplus — review for liens, executions, easements, restrictions",
              "Order tax certificate confirming no outstanding property taxes",
              "Order execution search against all registered owners",
              "Confirm all conditions have been waived or satisfied in writing",
              "Request mortgage instructions from lender (if acting for lender too)",
              "Request status certificate if purchasing a condo — review financial statements, reserve fund, special assessments",
              "Order survey or confirm title insurance covers survey risks",
              "Confirm HST applicability — new construction purchase or assignment?",
              "Review any existing tenancies and confirm vacant possession requirements",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", padding: "10px 14px", background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "rgba(198,146,42,0.6)", flexShrink: 0, fontSize: "16px" }}>☐</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.5, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#C6922A", marginBottom: "16px" }}>3. Signing appointment (3–5 days before closing)</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "28px" }}>
            {[
              "Prepare Transfer/Deed of Land (Form 1) for electronic registration",
              "Prepare Charge/Mortgage of Land if applicable",
              "Prepare Direction re Funds confirming wire transfer details to vendor or vendor&apos;s counsel",
              "Prepare Statement of Adjustments — confirm calculations with client",
              "Prepare Land Transfer Tax calculation — include municipal LTT if Toronto",
              "First-time home buyer rebate if applicable — confirm eligibility",
              "Review title insurance commitment and confirm coverage",
              "Client signing appointment — review all documents, confirm all information",
              "Collect client balance to close — confirm trust account has full funds before closing day",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", padding: "10px 14px", background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "rgba(198,146,42,0.6)", flexShrink: 0, fontSize: "16px" }}>☐</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.5, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#C6922A", marginBottom: "16px" }}>4. Closing day</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "28px" }}>
            {[
              "Confirm mortgage funds received from lender in trust account",
              "Confirm client balance to close is in trust",
              "Confirm trust account total matches funds required for closing",
              "Receive signed Transfer/Deed and Charge documents from vendor&apos;s counsel",
              "Register Transfer and Mortgage electronically via Teraview",
              "Confirm registration numbers match what was submitted",
              "Wire purchase funds to vendor&apos;s trust account (get confirmation of receipt)",
              "Issue keys/access to client only after registration confirmed",
              "Issue title insurance policy and send to client",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", padding: "10px 14px", background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "rgba(198,146,42,0.6)", flexShrink: 0, fontSize: "16px" }}>☐</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.5, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#C6922A", marginBottom: "16px" }}>5. Post-closing</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Prepare reporting letter to client — registered Transfer document, title insurance certificate, key dates",
              "Prepare reporting letter to lender — mortgage registration confirmed",
              "Invoice client for professional fees",
              "Transfer earned fees from trust to general after invoicing",
              "Return any unused trust balance to client",
              "File with LTT — confirm payment receipts",
              "Save final file documents — deed, mortgage, title insurance, correspondence",
              "Diarize any post-closing undertakings or conditions",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", padding: "10px 14px", background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "rgba(198,146,42,0.6)", flexShrink: 0, fontSize: "16px" }}>☐</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.5, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST ACCOUNT SECTION */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Trust account requirements for real estate closings</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Real estate transactions involve some of the largest single trust receipts and disbursements in legal practice. Common trust accounting mistakes on closings:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { mistake: "Trust shortfall on closing day", fix: "Confirm the full balance to close is in trust before you go near Teraview on closing day. A trust shortfall that delays registration is a LAWPRO claim." },
              { mistake: "Disbursing before funds clear", fix: "Wire transfers can be recalled. Do not release purchase funds to the vendor until you have confirmed receipt from your bank — not just the bank&apos;s email confirmation." },
              { mistake: "Mortgage payout out of trust", fix: "If you are paying out an existing mortgage, the payout must come from trust. The payout amount must be confirmed from the lender in writing before closing." },
              { mistake: "Not invoicing before transferring fees", fix: "You cannot transfer your professional fees from trust to general without an invoice — even on closing day. Prepare the invoice, then make the trust-to-general transfer." },
            ].map(({ mistake, fix }) => (
              <div key={mistake} style={{ background: "#07070a", padding: "20px 24px" }}>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#e8534a", marginBottom: "6px" }}>✗ {mistake}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}><span style={{ color: "#C6922A" }}>Fix: </span>{fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ATTICUS FOR RE */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>How Atticus supports Ontario real estate practice</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              { feature: "RE matter templates", desc: "Pre-populated action item checklists for residential purchase and residential sale transactions. Every step of the workflow, in order." },
              { feature: "Document processing", desc: "Upload the APS, mortgage instructions, status certificate, and title search — Atticus extracts all key dates, conditions, and parties automatically." },
              { feature: "Trust account tracking", desc: "Records every trust receipt and disbursement with client, matter, date, and reference. Alerts on negative balances before they become LAWPRO claims." },
              { feature: "Daily briefing", desc: "Conditions expiring tomorrow appear in your 9am briefing before you&apos;ve had your coffee. No condition expires unnoticed." },
              { feature: "AI-drafted reporting letters", desc: "After closing, Atticus drafts your client and lender reporting letters from your matter record. Review, approve, send." },
              { feature: "Limitation period calculator", desc: "Agreement of Purchase and Sale signed today — when do the conditions expire? When does the two-year limitation period run? One click." },
            ].map(({ feature, desc }) => (
              <div key={feature} style={{ background: "#07070a", padding: "22px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{feature}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Built for Ontario real estate lawyers</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus includes matter templates, AI document processing, trust accounting, and daily deadline briefings designed for high-volume Ontario real estate practice. 14-day free trial.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
              Start Free Trial →
            </Link>
            <Link href="/ontario-real-estate-lawyer" style={{ border: "1px solid rgba(198,146,42,0.4)", color: "#C6922A", padding: "12px 28px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
              Atticus for RE Lawyers →
            </Link>
          </div>
        </div>
      </article>

      {/* RELATED */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 400, color: "rgba(240,232,216,0.5)", marginBottom: "20px" }}>Related guides</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { href: "/ontario-real-estate-lawyer", label: "Atticus for RE lawyers" },
            { href: "/blog/trust-accounting-guide-ontario", label: "Trust accounting guide" },
            { href: "/blog/missing-limitation-periods-ontario", label: "Missing limitation periods" },
            { href: "/blog/client-intake-ontario-lawyers", label: "Client intake best practices" },
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
