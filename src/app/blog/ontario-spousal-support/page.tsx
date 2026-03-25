import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Spousal Support: SSAG, Moge, Quantum and Duration (2026 Guide)",
  description:
    "How spousal support works in Ontario — the Spousal Support Advisory Guidelines (SSAG), the Moge compensatory model, entitlement vs quantum, duration, variation, and what Ontario family lawyers advise clients about support claims.",
  openGraph: {
    title: "Ontario Spousal Support: SSAG, Moge, Quantum and Duration (2026 Guide)",
    description:
      "Ontario spousal support: SSAG without children and with children formulas, Moge compensatory model, entitlement threshold, duration, and variation grounds.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-spousal-support",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-spousal-support" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Spousal Support: SSAG, Moge, Quantum and Duration (2026 Guide)",
  description:
    "Ontario spousal support: SSAG formulas, Moge compensatory model, entitlement, quantum and duration ranges, variation grounds, and termination.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-18",
  url: "https://getatticus.ca/blog/ontario-spousal-support",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is spousal support calculated in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ontario courts use the Spousal Support Advisory Guidelines (SSAG) to calculate quantum and duration. The SSAG without child support formula uses the spouses' incomes to generate a range: typically 1.5-2% of the difference in net disposable incomes per year of marriage. The with child support formula works differently, using the 'Merged Formula' that accounts for child support obligations. Courts are not required to follow the SSAG but use them as a starting point — departures require justification.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a right to spousal support in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no automatic right to spousal support in Ontario. A spouse must establish entitlement based on one of three grounds recognized in Moge v Moge (SCC 1992): (1) Compensatory — a spouse gave up career opportunities or economic advantages during the relationship; (2) Non-compensatory — a spouse has genuine need arising from the relationship; (3) Contractual — a marriage contract or separation agreement provides for support. Courts consider economic disadvantage arising from the relationship, the economic hardship of the breakdown, and the goal of economic self-sufficiency.",
      },
    },
    {
      "@type": "Question",
      name: "How long does spousal support last in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duration under the SSAG without child support formula is generally 0.5 to 1 year of support per year of marriage, with a minimum of 6 months. For long marriages (20+ years, or age + years of marriage exceeds 65), the SSAG allows for indefinite support (duration not specified). With child support formula can result in indefinite support during the child rearing years. Duration ranges are as important as quantum ranges — always present both.",
      },
    },
    {
      "@type": "Question",
      name: "Can spousal support be varied in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under s. 17 of the Divorce Act, either spouse can apply to vary a spousal support order on the basis of a material change in circumstances since the original order. A material change must be significant and long-lasting — not a temporary fluctuation. Grounds include: major income change for either party, remarriage or new cohabiting relationship, retirement, changed health circumstances, or the recipient achieving economic self-sufficiency. A separation agreement with support provisions may also be varied if there is material change, but courts approach this more cautiously.",
      },
    },
  ],
};

const ssagFormulas = [
  {
    formula: "Without Child Support Formula",
    applies: "After child support ends (or where no children)",
    quantum: "1.5% to 2.0% of the difference in the spouses' gross incomes per year of marriage",
    exampleRange: "Example: $50,000 income difference, 10-year marriage = $7,500 to $10,000/year ($625 to $833/month)",
    duration: "0.5 to 1 year of support per year of marriage; indefinite if 20+ years or rule of 65",
  },
  {
    formula: "With Child Support Formula (Merged Formula)",
    applies: "While child support is being paid (recipient is the custodial parent)",
    quantum: "Based on net disposable income shares — complex calculation using both spouses' incomes after child support, taxes, and government benefits",
    exampleRange: "Ranges from 40-46% of combined net disposable income to the support recipient (where recipient has primary residence)",
    duration: "Indefinite or duration linked to child support — continues until youngest child is in full-time school, then re-evaluated",
  },
];

const entitlementFactors = [
  {
    model: "Compensatory Model (Moge)",
    description: "The receiving spouse gave up career advancement, education, or earning capacity to support the other spouse&apos;s career or to raise children. The support compensates for economic disadvantage caused by the relationship.",
    indicators: "One spouse left work or reduced hours for children; one spouse relocated for other spouse&apos;s career; one spouse funded the other&apos;s education or professional development",
  },
  {
    model: "Non-Compensatory (Needs-Based)",
    description: "The receiving spouse has genuine financial need arising from the breakdown of the relationship, even if the need is not caused by a compensable sacrifice. Particularly relevant for long marriages where one spouse became economically dependent.",
    indicators: "Long traditional marriages; significant lifestyle disparities between spouses; older recipient with limited ability to re-enter workforce; health limitations",
  },
  {
    model: "Contractual",
    description: "A marriage contract, cohabitation agreement, or separation agreement provides for spousal support. Courts generally enforce contractual terms if the agreement was freely negotiated with independent legal advice.",
    indicators: "Marriage contract with spousal support provisions; separation agreement with time-limited or unlimited support",
  },
];

const variationGrounds = [
  { ground: "Significant income decrease (payor)", detail: "Job loss, disability, forced retirement, business failure — must be significant and not self-induced" },
  { ground: "Significant income increase (payor)", detail: "Promotion, new business success — recipient can apply to vary upward" },
  { ground: "Recipient&apos;s increased income", detail: "If recipient achieves economic self-sufficiency or income significantly increases" },
  { ground: "Recipient&apos;s new cohabiting relationship", detail: "New relationship may affect need, particularly if living with a higher-income partner" },
  { ground: "Remarriage of recipient", detail: "May terminate support depending on the original order&apos;s terms; not automatic termination" },
  { ground: "Payor&apos;s retirement", detail: "Bona fide retirement reducing income is a material change — but courts look at whether retirement was reasonable" },
  { ground: "Health change", detail: "Serious health deterioration affecting income or need" },
  { ground: "Child support ending", detail: "When youngest child leaves full-time education — triggers re-assessment under SSAG" },
];

export default function OntarioSpousalSupportPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-spousal" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-spousal-faq" type="application/ld+json">{JSON.stringify(faqLd)}</Script>

      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      <article style={{ padding: "56px 24px 80px", maxWidth: "800px", margin: "0 auto" }}>
        <header style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Family Law — Ontario</p>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
            Ontario Spousal Support: SSAG, Moge, Quantum and Duration (2026 Guide)
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
            Spousal support is one of the most discretionary areas of Ontario family law — and one of the most litigated. The Spousal Support Advisory Guidelines (SSAG) provide quantum and duration ranges, but entitlement, the choice of formula, and the specific amount within the range all require careful analysis of the parties&apos; circumstances and the Moge compensatory framework.
          </p>
          <div style={{ display: "flex", gap: "20px", color: "rgba(240,232,216,0.4)", fontSize: "13px" }}>
            <span>March 2026</span>
            <span>11 min read</span>
            <span>Divorce Act, Family Law Act Ontario</span>
          </div>
        </header>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Entitlement: The Moge Framework
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            <em>Moge v Moge</em>, [1992] 3 SCR 813 remains the foundational case on spousal support entitlement in Canada. The Supreme Court rejected the &ldquo;clean break&rdquo; model and established that spousal support serves multiple objectives: compensating economic disadvantage caused by the marriage and its breakdown, relieving economic hardship, and promoting self-sufficiency. Entitlement must be established before quantum and duration are analyzed.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {entitlementFactors.map((e, i) => (
              <div key={i} style={{ padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #C6922A", borderRadius: "0 8px 8px 0" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#faf8f4", marginBottom: "8px" }}>{e.model}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7, marginBottom: "10px" }}>{e.description}</p>
                <p style={{ fontSize: "13px", color: "#C6922A", lineHeight: 1.65 }}>
                  <strong>Indicators: </strong>{e.indicators}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            SSAG Formulas: Quantum and Duration
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            The Spousal Support Advisory Guidelines are not legally binding — they are advisory guidelines developed by law professors Carol Rogerson and Rollie Thompson. However, they have become the dominant framework for spousal support analysis in Canada. Courts regularly refer to SSAG ranges and departures require justification.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {ssagFormulas.map((f, i) => (
              <div key={i} style={{ padding: "24px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: 500, color: "#C6922A", marginBottom: "14px" }}>{f.formula}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.5)", marginBottom: "4px" }}>Applies when</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.75)", marginBottom: "12px" }}>{f.applies}</p>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.5)", marginBottom: "4px" }}>Quantum formula</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.75)", marginBottom: "12px" }}>{f.quantum}</p>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.5)", marginBottom: "4px" }}>Example / range</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.75)", marginBottom: "12px" }}>{f.exampleRange}</p>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.5)", marginBottom: "4px" }}>Duration</p>
                <p style={{ fontSize: "14px", color: "#e8b84b" }}>{f.duration}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px", padding: "28px 32px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.25)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#e8b84b", marginBottom: "14px" }}>
            The Rule of 65 and Indefinite Support
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            Under the SSAG without child support formula, support may be indefinite (no set end date) where:
          </p>
          {[
            "The marriage was 20 or more years in duration, or",
            "The years of marriage plus the recipient's age at separation equals or exceeds 65 (the 'Rule of 65')",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
              <span style={{ color: "#C6922A", flexShrink: 0 }}>—</span>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.75)", lineHeight: 1.7 }}>{item}</p>
            </div>
          ))}
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.75, marginTop: "12px", marginBottom: "12px" }}>
            &ldquo;Indefinite&rdquo; does not mean permanent — it means no specified end date. The payor can still apply to vary or terminate support if there is a material change in circumstances, such as the recipient achieving economic self-sufficiency or the payor&apos;s retirement.
          </p>
          <p style={{ fontSize: "14px", color: "#C6922A", lineHeight: 1.75 }}>
            Example: Recipient is 55 at separation after a 12-year marriage: 55 + 12 = 67. The Rule of 65 applies — indefinite support is within the SSAG range.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Variation of Spousal Support
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Either party can apply to vary a spousal support order under s. 17 of the Divorce Act on the basis of a material change in circumstances. The change must be significant, long-lasting, and not contemplated at the time of the original order.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "14px" }}>
            {variationGrounds.map((g, i) => (
              <div key={i} style={{ padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "6px" }}>{g.ground}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.55)", lineHeight: 1.65 }}>{g.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {faqLd.mainEntity.map((faq, i) => (
              <div key={i} style={{ padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{faq.name}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.75 }}>{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "40px 36px", background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "8px", marginBottom: "56px", textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>
            Manage family law matters with AI
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus extracts financial disclosure deadlines, court appearance dates, and filing deadlines from uploaded documents. Built for Ontario family lawyers.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Start Free Trial →
          </Link>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "14px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/blog/ontario-family-law-separation-process", label: "Ontario Separation and Divorce" },
              { href: "/blog/ontario-child-custody-law", label: "Child Custody and Parenting Time" },
              { href: "/blog/ontario-wrongful-dismissal-guide", label: "Wrongful Dismissal" },
              { href: "/ontario-family-lawyer", label: "Practice Mgmt for Family Lawyers" },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ fontSize: "13px", color: "rgba(240,232,216,0.5)", background: "rgba(255,255,255,0.04)", padding: "6px 14px", borderRadius: "20px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>

      <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
