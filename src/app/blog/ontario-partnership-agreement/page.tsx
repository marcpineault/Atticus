import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Partnership Agreements: General and Limited Partnerships (2026 Guide)",
  description:
    "How Ontario partnerships work — general partnerships under the Partnerships Act, limited partnerships under the Limited Partnerships Act, key agreement provisions, and what business lawyers advise when setting up a partnership.",
  openGraph: {
    title: "Ontario Partnership Agreements: General and Limited Partnerships (2026 Guide)",
    description:
      "Ontario partnership law: general vs limited partnerships, mandatory Partnerships Act provisions, key agreement terms, and when to incorporate instead. What Ontario business lawyers advise in 2026.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-partnership-agreement",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-partnership-agreement" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Partnership Agreements: General and Limited Partnerships (2026 Guide)",
  description:
    "How Ontario partnerships work — general partnerships, limited partnerships, key agreement provisions, and what business lawyers advise when setting up a partnership.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: "https://getatticus.ca/blog/ontario-partnership-agreement",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a written partnership agreement required in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A partnership can exist in Ontario without a written agreement — the Partnerships Act, R.S.O. 1990 implies default terms when partners have not agreed otherwise. However, a written partnership agreement is strongly recommended because the default rules are often unsuitable for a functioning business. For example, without an agreement, all partners share profits equally regardless of their contribution.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a general partnership and a limited partnership in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In a general partnership, all partners have unlimited personal liability for partnership debts and obligations. In a limited partnership (LP), general partners have unlimited liability while limited partners have liability only up to their capital contribution — provided they do not take part in the management of the business. LPs are commonly used for investment funds and real estate ventures.",
      },
    },
    {
      "@type": "Question",
      name: "Do Ontario partnerships need to register with the government?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "General partnerships carrying on business under a firm name that does not consist solely of the partners' surnames must register a Declaration of Partnership under the Business Names Act. Limited partnerships must file a Declaration of Limited Partnership with the Ontario Business Registry. Failure to register does not affect the partnership's validity but can restrict access to courts.",
      },
    },
    {
      "@type": "Question",
      name: "Should we incorporate instead of forming a partnership?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Incorporation provides limited liability protection that general partnerships do not. For most business ventures where the owners want liability protection, a corporation (OBCA or CBCA) is preferable to a general partnership. Partnerships are commonly used for professional firms (lawyers, accountants, physicians) where regulatory rules limit corporate structures, or for investment vehicles where flow-through tax treatment is desired.",
      },
    },
  ],
};

const partnershipTypes = [
  {
    type: "General Partnership",
    legislation: "Partnerships Act, R.S.O. 1990",
    liability: "Unlimited personal liability for all partners",
    management: "All partners can participate in management",
    registration: "Business Names Act declaration if using firm name",
    tax: "Flow-through: each partner reports their share of income",
    bestFor: "Professional firms, small business ventures, joint ventures",
  },
  {
    type: "Limited Partnership",
    legislation: "Limited Partnerships Act, R.S.O. 1990",
    liability: "General partners: unlimited; Limited partners: capped at capital contribution",
    management: "Only general partners can manage (limited partners must not)",
    registration: "Declaration of LP filed with Ontario Business Registry",
    tax: "Flow-through: same as general partnership",
    bestFor: "Investment funds, real estate ventures, private equity structures",
  },
  {
    type: "Limited Liability Partnership (LLP)",
    legislation: "Partnerships Act (professional amendments)",
    liability: "Partners not personally liable for negligence of other partners",
    management: "All partners can participate",
    registration: "Must include LLP in name; professional body registration",
    tax: "Flow-through",
    bestFor: "Law firms, accounting firms, and other regulated professionals",
  },
];

const keyProvisions = [
  { provision: "Partnership name and registered office", detail: "The official name of the partnership and its principal place of business in Ontario. Must comply with Business Names Act if not using all partners' surnames." },
  { provision: "Capital contributions", detail: "How much each partner contributes, when, and in what form (cash, property, services). Whether future capital calls are permitted and on what terms." },
  { provision: "Profit and loss sharing", detail: "The default under the Partnerships Act is equal sharing. Most agreements override this to reflect capital contributions or different partner roles." },
  { provision: "Partner duties", detail: "Fiduciary duties, non-competition obligations during the partnership, time commitment requirements, and restrictions on outside business activities." },
  { provision: "Decision-making and management", detail: "Voting rights (by head or by interest), quorum requirements, decisions requiring unanimous vs majority approval, appointment of managing partner." },
  { provision: "Admission of new partners", detail: "Process for admitting new partners — approval required, new agreement required? What interest do new partners acquire and at what price?" },
  { provision: "Transfer of partnership interest", detail: "Can a partner assign their economic interest? Transfer of full partnership interest typically requires partner consent. Right of first refusal provisions are common." },
  { provision: "Withdrawal and retirement", detail: "Notice period, valuation of the withdrawing partner's interest, payment terms, and non-solicitation obligations post-departure." },
  { provision: "Dissolution triggers", detail: "What events trigger dissolution: partner death, incapacity, bankruptcy, agreement of all partners. Does death of one partner dissolve the partnership or does the business continue?" },
  { provision: "Dispute resolution", detail: "Mediation and arbitration provisions. Buy-sell (shotgun) clauses for impasse situations. Governing law (Ontario) and jurisdiction." },
];

export default function OntarioPartnershipAgreementPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-partnership" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-partnership-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

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
          Ontario Partnership Agreements: General and Limited Partnerships (2026 Guide)
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Partnerships are one of the most common business structures for professionals, investors, and entrepreneurs in Ontario. But without a well-drafted partnership agreement, disputes over profit sharing, management, and exit terms are inevitable. Here is what Ontario business lawyers need to know about partnership law and agreement drafting in 2026.
        </p>
      </section>

      <article style={{ padding: "0 24px 80px", maxWidth: "800px", margin: "0 auto" }}>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Types of Ontario Partnerships</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {partnershipTypes.map((pt, i) => (
              <div key={i} style={{ padding: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
                <div style={{ fontSize: "18px", fontWeight: 500, color: "#faf8f4", marginBottom: "6px" }}>{pt.type}</div>
                <div style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)", marginBottom: "16px" }}>{pt.legislation}</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                  {[
                    { label: "Liability", value: pt.liability },
                    { label: "Management", value: pt.management },
                    { label: "Registration", value: pt.registration },
                    { label: "Taxation", value: pt.tax },
                    { label: "Best for", value: pt.bestFor },
                  ].map((row, j) => (
                    <div key={j}>
                      <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C6922A", marginBottom: "4px" }}>{row.label}</div>
                      <div style={{ fontSize: "13px", color: "rgba(240,232,216,0.65)", lineHeight: 1.5 }}>{row.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Default Rules Under the Partnerships Act</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            When there is no written partnership agreement (or when the agreement is silent on a point), the Ontario Partnerships Act implies default terms. These defaults are often not what the partners intend:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { rule: "Equal profit sharing", impact: "Partners share profits and losses equally regardless of capital contributed or work done" },
              { rule: "No salary for management", impact: "A partner managing the business is not entitled to remuneration beyond their profit share" },
              { rule: "All partners can bind the firm", impact: "Any partner can enter contracts that bind all other partners — even without authority" },
              { rule: "Unanimous consent for changes", impact: "The nature of partnership business cannot change without all partners' consent" },
              { rule: "Partner retirement dissolves partnership", impact: "At common law, a partner can retire with notice, which dissolves the partnership — often not what parties intend" },
            ].map((item, i) => (
              <div key={i} style={{ padding: "14px 18px", background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "16px" }}>
                <div style={{ fontSize: "13px", fontWeight: 500, color: "#C6922A" }}>{item.rule}</div>
                <div style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.6 }}>{item.impact}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>10 Key Provisions in Every Partnership Agreement</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {keyProvisions.map((item, i) => (
              <div key={i} style={{ padding: "18px 20px", background: "rgba(255,255,255,0.03)", borderLeft: "3px solid rgba(198,146,42,0.35)", borderRadius: "4px" }}>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#C6922A", marginBottom: "6px" }}>{i + 1}. {item.provision}</div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Partnership vs Corporation: Which to Choose</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Factor</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Partnership</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Corporation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Personal liability", "Unlimited (general partners)", "Limited to investment"],
                  ["Tax treatment", "Flow-through — partners pay personally", "Corporate rates + dividend or salary to shareholders"],
                  ["Small business deduction", "Not available", "Available (15% federal rate on first $500K active income)"],
                  ["Capital gains exemption", "Not applicable", "LCGE on qualifying small business corporation shares"],
                  ["Setup cost", "Lower ($500–$2,000)", "Higher ($1,500–$5,000+)"],
                  ["Ongoing maintenance", "Simpler", "Annual returns, resolutions, minute book"],
                  ["Regulated professions", "Often required (law, accounting)", "Restricted or prohibited"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "11px 16px", color: "#faf8f4", fontWeight: 500 }}>{row[0]}</td>
                    <td style={{ padding: "11px 16px", color: "rgba(240,232,216,0.6)" }}>{row[1]}</td>
                    <td style={{ padding: "11px 16px", color: "rgba(240,232,216,0.6)" }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            Managing Corporate and Commercial Files?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus helps Ontario corporate lawyers track matter deadlines, draft partnership agreements with AI, manage annual maintenance across multiple business clients, and keep trust accounts compliant. 14-day free trial.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 28px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Try Atticus Free →
          </Link>
        </section>

        <section>
          <h3 style={{ fontSize: "16px", color: "rgba(240,232,216,0.5)", marginBottom: "16px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { href: "/blog/how-to-incorporate-ontario", label: "How to Incorporate in Ontario" },
              { href: "/blog/ontario-corporate-annual-maintenance", label: "Corporate Annual Maintenance" },
              { href: "/ontario-corporate-lawyer", label: "Atticus for Corporate Lawyers" },
              { href: "/blog/trust-accounting-guide-ontario", label: "Trust Accounting Guide" },
              { href: "/blog/engagement-letter-ontario-lawyers", label: "Engagement Letters Guide" },
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
