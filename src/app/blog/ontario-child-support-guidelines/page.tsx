import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Child Support: Federal Guidelines, Table Amounts, and Section 7 Expenses (2026 Guide)",
  description:
    "How child support works in Ontario — Federal Child Support Guidelines Table amounts, section 7 special and extraordinary expenses, shared custody calculation (40% rule), split custody, imputed income, and variation. What Ontario family lawyers advise clients.",
  openGraph: {
    title: "Ontario Child Support: Federal Guidelines, Table Amounts, and Section 7 Expenses (2026 Guide)",
    description:
      "Federal Child Support Guidelines: Ontario Table amounts, section 7 expenses, shared custody 40% rule, imputed income, and variation for Ontario family lawyers.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-child-support-guidelines",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-child-support-guidelines" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Child Support: Federal Guidelines, Table Amounts, and Section 7 Expenses (2026 Guide)",
  description:
    "Federal Child Support Guidelines Ontario Table, section 7 special expenses, shared custody 40% rule, imputed income, and variation.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-18",
  url: "https://getatticus.ca/blog/ontario-child-support-guidelines",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is child support calculated in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Child support in Ontario is calculated using the Federal Child Support Guidelines (applicable to Divorce Act cases) and the Ontario Child Support Guidelines (applicable to non-married parties under the Family Law Act — which adopt the federal tables). The payor's gross annual income determines the monthly base child support amount using the Ontario Table in Schedule I of the Guidelines. For example, a payor earning $100,000 gross with 2 children would pay approximately $1,665/month under the 2026 Ontario Table.",
      },
    },
    {
      "@type": "Question",
      name: "What are section 7 special and extraordinary expenses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 7 expenses are costs shared proportionally between parents based on their incomes, in addition to the base Table amount. They include: childcare expenses for work/school; medical insurance premiums for the child; health-related expenses over $100 per year (not covered by insurance); post-secondary education expenses; and extraordinary extracurricular activities (activities beyond ordinary, which must be in the child's best interests). Both parents must contribute proportionally — a higher-income payor pays a larger share.",
      },
    },
    {
      "@type": "Question",
      name: "How does shared custody affect child support in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If each parent has the child at least 40% of the time (the '40% rule'), shared custody provisions under s. 9 of the Guidelines may apply. Under s. 9, the court considers the Table amounts for both parents, the increased costs of shared custody, and the conditions, means, needs, and other circumstances of the parties. The common approach is the 'set-off' method — calculate each parent's Table amount and the higher earner pays the difference. However, courts can depart from set-off if circumstances warrant a different amount.",
      },
    },
    {
      "@type": "Question",
      name: "Can child support be imputed in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Courts can impute income to a payor who is intentionally unemployed, underemployed, earning below their capacity, or attempting to reduce support obligations through creative income structures. Under s. 19 of the Guidelines, courts also impute income when a payor has significant perquisites, benefits through a corporation, or arranges their affairs to minimize taxable income. The most common scenario: a self-employed business owner who takes income as dividends or leaves income in a corporation.",
      },
    },
  ],
};

const tableExamples = [
  { income: "$50,000", oneChild: "$455", twoChildren: "$691", threeChildren: "$880" },
  { income: "$75,000", oneChild: "$657", twoChildren: "$997", threeChildren: "$1,268" },
  { income: "$100,000", oneChild: "$879", twoChildren: "$1,332", threeChildren: "$1,690" },
  { income: "$150,000", oneChild: "$1,200", twoChildren: "$1,774", threeChildren: "$2,231" },
  { income: "$200,000", oneChild: "$1,482", twoChildren: "$2,166", threeChildren: "$2,698" },
];

const section7Categories = [
  {
    category: "Childcare Expenses",
    description: "Daycare, after-school care, summer camp (when required for work, school, or medical necessity)",
    sharing: "Proportional to income, after tax credits/subsidies",
    notes: "Net of any tax deductions (childcare expense deduction reduces the gross cost)",
  },
  {
    category: "Medical / Dental Insurance Premiums",
    description: "The portion of a parent&apos;s employer benefit premium attributable to covering the child",
    sharing: "Proportional to income",
    notes: "Only the incremental cost of adding the child to the plan",
  },
  {
    category: "Uninsured Health Expenses",
    description: "Orthodontics, glasses, therapy, medications, medical procedures not covered by insurance",
    sharing: "Proportional to income if over $100/year",
    notes: "Threshold is $100 per year per child; below threshold is not typically shared",
  },
  {
    category: "Post-Secondary Education",
    description: "Tuition, books, residence, living expenses for university or college programs",
    sharing: "Proportional to income, after considering the child&apos;s own resources",
    notes: "Child&apos;s own employment income, OSAP, and savings are factored in",
  },
  {
    category: "Extraordinary Extracurricular Activities",
    description: "Activities of an extraordinary nature — elite sports programs, performing arts, intensive tutoring",
    sharing: "Proportional to income, after considering the child&apos;s best interests",
    notes: "Ordinary extracurriculars (hockey, swimming lessons) are generally covered by Table amount",
  },
];

const incomeIssues = [
  {
    issue: "Self-Employment Income",
    description: "Self-employed payors may claim business deductions that reduce taxable income below actual economic income. Courts often add back depreciation, some business expenses, and income retained in the business.",
    approach: "Request corporate and personal tax returns, financial statements, and Notice of Assessment for 3+ years",
  },
  {
    issue: "Corporate Income / CCPC",
    description: "A payor who controls a Canadian Controlled Private Corporation (CCPC) can choose how much income to take — as salary, dividends, or left in the corporation. The court looks at the corporation&apos;s retained earnings and gross revenue.",
    approach: "Line 150 (total income) on personal return plus the company&apos;s pre-tax earnings — gross-up approach for dividends",
  },
  {
    issue: "Intentional Underemployment",
    description: "A payor who voluntarily leaves a higher-paying job, reduces hours, or takes early retirement to reduce support may have income imputed at their capacity to earn.",
    approach: "Evidence of prior income, industry salary data, and health/disability status if raised as justification",
  },
  {
    issue: "Fluctuating Income",
    description: "Commission income, bonuses, and variable pay require averaging. The Guidelines suggest a 3-year average, but shorter periods may be appropriate if income has permanently changed.",
    approach: "Average last 3 years of line 15000 (total income) or negotiate a base + bonus formula",
  },
];

export default function OntarioChildSupportPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-child-support" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-child-support-faq" type="application/ld+json">{JSON.stringify(faqLd)}</Script>

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
            Ontario Child Support: Federal Guidelines, Table Amounts, and Section 7 Expenses (2026 Guide)
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
            Child support in Ontario follows the Federal Child Support Guidelines (for married parties under the Divorce Act) and the Ontario Child Support Guidelines (for unmarried parties under the Family Law Act, which adopt the federal tables). The calculation looks simple — but income determination, section 7 expenses, shared custody, and self-employment make it complex in practice.
          </p>
          <div style={{ display: "flex", gap: "20px", color: "rgba(240,232,216,0.4)", fontSize: "13px" }}>
            <span>March 2026</span>
            <span>11 min read</span>
            <span>Federal Child Support Guidelines</span>
          </div>
        </header>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Ontario Table Amounts (Approximate 2026 Reference)
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            The following amounts are approximate monthly base child support based on the payor&apos;s gross annual income under the Ontario Table. These are base amounts only — section 7 expenses are added proportionally on top.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Gross Annual Income</th>
                  <th style={{ textAlign: "center", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>1 Child</th>
                  <th style={{ textAlign: "center", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>2 Children</th>
                  <th style={{ textAlign: "center", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>3 Children</th>
                </tr>
              </thead>
              <tbody>
                {tableExamples.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 14px", color: "#C6922A", fontWeight: 500 }}>{row.income}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "rgba(240,232,216,0.8)" }}>{row.oneChild}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "rgba(240,232,216,0.8)" }}>{row.twoChildren}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "rgba(240,232,216,0.8)" }}>{row.threeChildren}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(240,232,216,0.35)", marginTop: "10px", lineHeight: 1.5 }}>
            Note: Amounts are approximate references only. Use the official Federal Child Support Guidelines Look-up Tool at justice.gc.ca for precise 2026 Ontario Table amounts. Income interpolation is required for amounts between listed income levels.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Section 7 Special and Extraordinary Expenses
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Section 7 expenses are in addition to the Table amount. Unlike Table support (which is based solely on the payor&apos;s income), section 7 expenses are shared by both parents proportionally based on their respective incomes. Understanding which expenses qualify and how they are calculated is one of the most litigated areas of child support practice.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {section7Categories.map((c, i) => (
              <div key={i} style={{ padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap", marginBottom: "8px" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4" }}>{c.category}</h3>
                  <span style={{ fontSize: "12px", color: "#C6922A", background: "rgba(198,146,42,0.12)", padding: "3px 10px", borderRadius: "4px", flexShrink: 0 }}>{c.sharing}</span>
                </div>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.65, marginBottom: "8px" }}>{c.description}</p>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.45)" }}>{c.notes}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px", padding: "28px 32px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.25)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#e8b84b", marginBottom: "14px" }}>
            Shared Custody and the 40% Rule
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            Section 9 of the Federal Child Support Guidelines provides that where a child spends at least 40% of their time with the payor parent (&ldquo;shared custody&rdquo;), the court may order a different amount than the Table amount. The 40% threshold is calculated as 40% of all nights in a year (approximately 146 nights).
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            The most common approach is the &ldquo;set-off&rdquo; method: calculate what each parent would pay as if they were the sole payor, then subtract the lower from the higher — the higher-income parent pays the difference. Courts are not required to use set-off; they can also consider the increased costs of shared custody arrangements and the actual household expenses.
          </p>
          <p style={{ fontSize: "15px", color: "#C6922A", lineHeight: 1.75 }}>
            Important: simply having 40%+ parenting time does not automatically reduce support — the payor must apply to the court or negotiate a new agreement. Until then, the existing order remains in force.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Income Determination: Common Issues
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {incomeIssues.map((item, i) => (
              <div key={i} style={{ padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>{item.issue}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "10px" }}>{item.description}</p>
                <p style={{ fontSize: "13px", color: "#C6922A", lineHeight: 1.65 }}>
                  <strong>Approach: </strong>{item.approach}
                </p>
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
            Atticus extracts financial disclosure deadlines, variation timelines, and court dates from uploaded documents. Built for Ontario family lawyers.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Start Free Trial →
          </Link>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "14px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/blog/ontario-spousal-support", label: "Spousal Support (SSAG)" },
              { href: "/blog/ontario-child-custody-law", label: "Child Custody and Parenting Time" },
              { href: "/blog/ontario-family-law-separation-process", label: "Ontario Separation Process" },
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
