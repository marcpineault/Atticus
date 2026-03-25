import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Trust Accounting Software for Ontario Lawyers | Atticus",
  description:
    "LSO-compliant trust accounting software built for Ontario solo and small law firms. Track client trust receipts, disbursements, and balances. Export trust ledgers. Negative balance alerts.",
  keywords: [
    "trust accounting software ontario lawyers",
    "law society trust account software",
    "ontario lawyer trust accounting",
    "lso trust account software",
    "client trust account ontario",
    "law firm trust accounting canada",
    "trust ledger software ontario",
    "by-law 9 trust account software",
    "legal trust accounting ontario",
    "solo law firm trust accounting",
  ],
  openGraph: {
    title: "Trust Accounting Software for Ontario Lawyers | Atticus",
    description:
      "Built-in LSO trust accounting. Track receipts, disbursements, per-client balances, and negative balance alerts — all in one practice management platform.",
    type: "website",
    url: "https://getatticus.ca/trust-accounting-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/trust-accounting-ontario" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://getatticus.ca/trust-accounting-ontario",
      url: "https://getatticus.ca/trust-accounting-ontario",
      name: "Trust Accounting Software for Ontario Lawyers",
      description:
        "Atticus provides LSO-compliant trust accounting for Ontario solo and small law firms. Track client trust funds, receipts, disbursements, and balances in one AI-powered practice management platform.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://getatticus.ca" },
          { "@type": "ListItem", position: 2, name: "Trust Accounting Ontario", item: "https://getatticus.ca/trust-accounting-ontario" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Atticus track trust accounting for Ontario lawyers?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Atticus includes a full trust account ledger designed for Ontario law firm requirements under LSO By-Law 9. You can record trust receipts, disbursements, and transfers per client and matter. The trust page shows real-time balances for every client, flags any negative balance immediately, and lets you export your complete trust ledger as a CSV." },
        },
        {
          "@type": "Question",
          name: "What are the LSO trust accounting rules for Ontario lawyers?",
          acceptedAnswer: { "@type": "Answer", text: "Ontario lawyers must maintain a separate trust account for all client funds under LSO By-Law 9. Client trust funds must never be mixed with the lawyer's own funds. Negative client trust balances are prohibited. Records must be maintained for at least 10 years. Every receipt and disbursement must be recorded with date, client, amount, and description. Atticus is designed to support these requirements." },
        },
        {
          "@type": "Question",
          name: "Can I export a trust ledger from Atticus?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Atticus generates a RFC 4180-compliant CSV trust ledger export with columns for Date, Type, Client, Matter, Description, Reference Number, and Amount. This format is importable into Excel, Google Sheets, and most accounting software." },
        },
        {
          "@type": "Question",
          name: "Does Atticus alert me to negative trust balances?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Atticus flags any client whose trust balance goes negative immediately in the Trust Account page. Negative trust balances are also highlighted in the daily morning briefing email so you catch the issue before it becomes a compliance problem." },
        },
        {
          "@type": "Question",
          name: "Can Atticus record trust transactions through AI chat?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. You can say to Atticus: 'Record a $5,000 trust receipt from Smith' or 'Record disbursement of $2,000 from Johnson trust for land transfer tax.' Atticus will identify the client, confirm the amount, and record the transaction directly. You can review all entries in the Trust Account page." },
        },
      ],
    },
  ],
});

export default function TrustAccountingOntarioPage() {
  return (
    <>
      <Script id="ld-json-trust" type="application/ld+json" strategy="beforeInteractive">{jsonLd}</Script>

      <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>

        {/* NAV */}
        <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
          <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link href="/calculator" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Free Calculator</Link>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
              Start Free Trial →
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ padding: "80px 48px 60px", maxWidth: "820px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "24px" }}>
            Trust Accounting · Ontario Law Firms
          </p>
          <h1 style={{ fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 300, lineHeight: 1.1, color: "#faf8f4", marginBottom: "28px" }}>
            LSO trust accounting,<br />
            <em style={{ fontStyle: "italic", color: "#e8b84b" }}>built into your practice.</em>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(240,232,216,0.6)", maxWidth: "600px", lineHeight: 1.7, marginBottom: "48px" }}>
            Track every client trust receipt and disbursement. See per-client balances in real time. Get alerted the moment a balance goes negative. Export your trust ledger as CSV any time — all inside Atticus, your AI practice management platform.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "16px 40px", textDecoration: "none", fontSize: "14px", fontWeight: 500, letterSpacing: "0.1em" }}>
              Start Free Trial →
            </Link>
            <Link href="/" style={{ border: "1px solid rgba(198,146,42,0.3)", color: "#C6922A", padding: "16px 40px", textDecoration: "none", fontSize: "14px" }}>
              See All Features
            </Link>
          </div>
        </section>

        {/* LSO RULE CALLOUT */}
        <section style={{ padding: "0 48px 80px", maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ background: "#0d0f1a", border: "1px solid rgba(198,146,42,0.15)", borderRadius: "8px", padding: "32px 36px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(198,146,42,0.6)", marginBottom: "12px" }}>LSO By-Law 9</div>
            <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7, fontStyle: "italic", marginBottom: "12px" }}>
              &ldquo;A licensee shall maintain one or more trust accounts...in the name of the licensee clearly identified as a trust account.&rdquo;
            </p>
            <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)", lineHeight: 1.6 }}>
              Ontario lawyers are required to maintain separate trust accounts for client funds, keep records for 10+ years, and never allow a negative balance. Atticus is designed to help you stay organized and compliant.
            </p>
          </div>
        </section>

        {/* TRUST FEATURES */}
        <section style={{ padding: "60px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", borderBottom: "1px solid rgba(198,146,42,0.1)", maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#faf8f4", marginBottom: "48px" }}>
            Everything you need for<br /><em style={{ fontStyle: "italic", color: "#e8b84b" }}>Ontario trust compliance.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              {
                icon: "📥",
                title: "Record Receipts & Disbursements",
                body: "Log every trust receipt and disbursement with client, matter, date, amount, description, and reference number. Supports cheque, wire, and electronic fund transfers. Works for any Ontario law firm trust account.",
              },
              {
                icon: "⚖️",
                title: "Per-Client Trust Balances",
                body: "See every client's current trust balance in real time. Balances update instantly with each new entry. View all clients on the Trust Balances tab or check an individual client's trust ledger from their client page.",
              },
              {
                icon: "🔴",
                title: "Negative Balance Alerts",
                body: "LSO rules prohibit negative trust balances. Atticus flags any client whose trust balance goes negative — immediately on the Trust page and in your daily morning briefing email. No compliance surprises.",
              },
              {
                icon: "📄",
                title: "Trust Ledger CSV Export",
                body: "Export your complete trust ledger as a RFC 4180-compliant CSV: Date, Type, Client, Matter, Description, Reference Number, Amount. Import directly into Excel, Google Sheets, or your accounting software for LSO compliance records.",
              },
              {
                icon: "🔍",
                title: "Filter by Client or Matter",
                body: "View trust transactions for a specific client or matter. From any client page or matter page, click 'Trust' to see all trust activity scoped to that client or matter. Makes client-specific reconciliation fast.",
              },
              {
                icon: "💬",
                title: "Record Trust via AI Chat",
                body: "Tell Atticus: 'Record a $5,000 trust receipt from Smith for the Mitchell purchase' — and it records the transaction directly from your conversation. Also works for disbursements. Ask 'What's Smith's trust balance?' anytime.",
              },
            ].map(f => (
              <div key={f.title} style={{ background: "#07070a", padding: "36px 32px" }}>
                <div style={{ fontSize: "22px", marginBottom: "14px" }}>{f.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#faf8f4", marginBottom: "10px" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.8 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT INTEGRATES */}
        <section style={{ padding: "80px 48px", maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#faf8f4", marginBottom: "48px" }}>
            Trust accounting as part of<br /><em style={{ fontStyle: "italic", color: "#e8b84b" }}>your whole practice.</em>
          </h2>
          {[
            { n: "01", title: "Receive funds into trust", body: "Record a trust receipt from the client with a reference number and description. The client's balance updates instantly. You can see it in the Trust page, on the client card, and in the matter timeline." },
            { n: "02", title: "Pay disbursements from trust", body: "Record disbursements as you incur them — land transfer tax, title insurance, government fees. Atticus tracks the running balance and prevents any negative-balance blind spots." },
            { n: "03", title: "Morning briefing flags negative balances", body: "If any client trust balance goes negative — say, a disbursement was recorded before the corresponding receipt — Atticus flags it in your next morning briefing email so you catch it immediately." },
            { n: "04", title: "Export for your accounting software", body: "Download your trust ledger as CSV any time. One click, RFC 4180-compliant, importable into your bookkeeper's software for your annual trust compliance report." },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: "32px", marginBottom: "48px" }}>
              <div style={{ fontSize: "40px", fontWeight: 300, color: "rgba(198,146,42,0.2)", lineHeight: 1, flexShrink: 0, width: "56px" }}>{s.n}</div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 400, color: "#faf8f4", marginBottom: "10px" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.8 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section style={{ padding: "80px 48px", background: "#0d0f1a", borderTop: "1px solid rgba(198,146,42,0.1)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#faf8f4", marginBottom: "48px" }}>
              Trust accounting questions
            </h2>
            {[
              { q: "Does Atticus replace my accounting software?", a: "No — Atticus is designed to complement your accounting software, not replace it. Atticus keeps your trust records organized within your practice management workflow. The CSV export feeds into your bookkeeper's software for tax and LSO compliance purposes. Think of Atticus as your daily operational tool; your accountant uses the exported data for year-end compliance." },
              { q: "How does Atticus handle trust accounting by matter?", a: "Every trust transaction can be linked to both a client and a specific matter. On any matter page, you can see all trust transactions linked to that matter. This is especially useful for real estate closings where each transaction may have multiple disbursements tied to a specific deal." },
              { q: "Can my assistant or paralegal use Atticus?", a: "Yes. Atticus is designed for solo and small law firms. Multiple team members can use the system. All trust entries are logged with timestamps. Note that Atticus currently operates under one lawyer account — multi-user firm accounts are on the roadmap." },
              { q: "What's the difference between Atticus trust accounting and QuickBooks?", a: "QuickBooks is general-purpose bookkeeping software. It doesn't understand legal trust accounting requirements, client-matter structure, or LSO compliance. Atticus is purpose-built for Ontario law firms — it knows what a trust receipt is, enforces per-client balance tracking, flags LSO violations like negative balances, and integrates with your document management and AI assistant." },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: "1px solid rgba(198,146,42,0.1)", paddingBottom: "28px", marginBottom: "28px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{faq.q}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.8 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 48px", textAlign: "center" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 300, color: "#faf8f4", marginBottom: "16px" }}>
            Start your 14-day free trial.
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.55)", marginBottom: "8px" }}>Full trust accounting included. No credit card required.</p>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.3)", marginBottom: "40px" }}>Trust accounting · AI document processing · Morning briefings · Conflict checks</p>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "16px 48px", textDecoration: "none", fontSize: "14px", fontWeight: 500, letterSpacing: "0.1em", display: "inline-block" }}>
            START FREE TRIAL →
          </Link>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <Link href="/" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← Atticus Home</Link>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
            <Link href="/clio-alternative" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Clio Alternative</Link>
            <Link href="/ontario-legal-software" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Ontario Legal Software</Link>
            <Link href="/ai-for-lawyers" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>AI for Lawyers</Link>
            <Link href="/lso-ai-guidance" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>LSO AI Guide</Link>
            <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
