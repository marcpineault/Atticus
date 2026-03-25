import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Family Law: Separation, Divorce, and Property Division Explained (2026)",
  description:
    "A plain-language guide to Ontario family law — the difference between separation and divorce, equalization of net family property, spousal support, child support, and parenting arrangements.",
  openGraph: {
    title: "Ontario Family Law: Separation, Divorce, and Property Division Explained (2026)",
    description:
      "Ontario separation and divorce guide: family property division, equalization of NFP, spousal support, child support, and how family lawyers help navigate the process.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-family-law-separation-process",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-family-law-separation-process" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Family Law: Separation, Divorce, and Property Division Explained (2026)",
  description:
    "Separation vs divorce, equalization of NFP, spousal support, child support, and parenting arrangements in Ontario.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/ontario-family-law-separation-process",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between separation and divorce in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Separation occurs when spouses decide to live separate and apart with the intention to end the marriage. No court order or legal document is required to be separated. Divorce is the legal end of the marriage and requires a court order under the Divorce Act. You can be legally separated for years without being divorced.",
      },
    },
    {
      "@type": "Question",
      name: "How long does separation take before you can divorce in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must be separated for one year before applying for a divorce in Ontario under the Divorce Act. The exception is divorce on grounds of adultery or physical/mental cruelty, which do not require a waiting period.",
      },
    },
    {
      "@type": "Question",
      name: "Do common-law partners have the same rights as married couples in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. In Ontario, common-law partners do not have the same property rights as married spouses. Married spouses have rights to equalization of net family property under the Family Law Act. Common-law partners generally have no automatic property rights — they may make claims based on unjust enrichment or resulting trust.",
      },
    },
    {
      "@type": "Question",
      name: "How is child support calculated in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Child support in Ontario is governed by the Federal Child Support Guidelines. The base amount is determined by the payor's income and the number of children — there is a set table amount for each province. Special or extraordinary expenses (childcare, post-secondary education, extracurriculars) are shared proportionally based on income.",
      },
    },
  ],
};

export default function FamilyLawSeparationPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-family" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-family-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

      {/* NAV */}
      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            For Ontario Lawyers →
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <header style={{ padding: "80px 48px 60px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Family Law</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 12 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          Ontario Family Law:<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>Separation, Divorce, and Property Division</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Separation and divorce are among the most emotionally complex legal processes a person goes through. Understanding the legal framework — what happens to property, support, and children — helps clients make better decisions and helps lawyers explain options clearly. Here is a complete overview of Ontario family law in 2026.
        </p>
      </header>

      {/* CONTENT */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        {/* SEPARATION VS DIVORCE */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Separation vs. divorce: the key difference</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            These terms are often used interchangeably, but they mean different things in Ontario law:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            <div style={{ background: "#07070a", padding: "28px" }}>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#C6922A", marginBottom: "12px" }}>Separation</p>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "12px" }}>
                No court order or legal document required. Occurs when spouses decide to live &quot;separate and apart&quot; with the intention to end the marriage. You can be separated while living in the same house — courts look at the totality of the relationship.
              </p>
              <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)" }}>Valuation date for family property = date of separation</p>
            </div>
            <div style={{ background: "#0d0d10", padding: "28px" }}>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#C6922A", marginBottom: "12px" }}>Divorce</p>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "12px" }}>
                A court order under the Divorce Act that legally ends the marriage. Requires one year of separation (in most cases) before it can be granted. Once divorced, either party can remarry. Property and support issues can be resolved separately from the divorce itself.
              </p>
              <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)" }}>Can be uncontested (joint application) or contested (one spouse applies)</p>
            </div>
          </div>
          <div style={{ background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", padding: "20px 24px", borderRadius: "4px" }}>
            <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#C6922A" }}>Practical note:</strong> Many couples resolve all issues (property, support, parenting) in a Separation Agreement while still legally married. The divorce itself can follow years later. There is no legal requirement to divorce immediately after separation.
            </p>
          </div>
        </section>

        {/* PROPERTY */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Property division: equalization of net family property</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Ontario&apos;s Family Law Act creates a regime of &quot;equalization of net family property.&quot; This is not a 50/50 split of all assets — it is an equalization of what each spouse accumulated during the marriage.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            The formula: each spouse calculates their Net Family Property (NFP) = (assets at separation date) minus (debts at separation date) minus (assets owned at date of marriage).
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            The spouse with the higher NFP pays half the difference to the lower NFP spouse. This is the equalization payment.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { item: "Matrimonial home", detail: "Special rules: the matrimonial home (the home you lived in as a family) is excluded from the deduction of property at marriage — its full value is included in NFP regardless of when you owned it. Both spouses have equal right to possession regardless of whose name is on title." },
              { item: "Inheritance and gifts", detail: "Property received as an inheritance or gift during the marriage is excluded from NFP — but only if it was kept separate and traceable. If the inheritance was mixed into joint funds, the exclusion may be lost." },
              { item: "Pre-marital assets", detail: "Assets owned at the date of marriage are deducted from NFP (with exceptions). This requires documented proof of value at the marriage date — often complicated years later." },
              { item: "Common-law partners", detail: "Common-law partners in Ontario do not have NFP equalization rights. Their property claims are based on unjust enrichment and constructive trust — a different and more unpredictable legal process." },
            ].map(({ item, detail }) => (
              <div key={item} style={{ background: "#07070a", padding: "20px 24px" }}>
                <p style={{ fontSize: "15px", fontWeight: 500, color: "#C6922A", marginBottom: "6px" }}>{item}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SPOUSAL SUPPORT */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Spousal support</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Spousal support in Ontario is governed by the Divorce Act (for married couples) and the Family Law Act (for all spouses including common-law). Support may be awarded where one spouse suffered an economic disadvantage from the marriage or its breakdown.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            The Spousal Support Advisory Guidelines (SSAG) provide range formulas for amount and duration — but these are advisory, not binding. Courts retain discretion. Key factors:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
            {[
              "Length of the marriage or cohabitation",
              "Roles during the marriage (career sacrificed, primary caregiver)",
              "Income and earning capacity of each spouse",
              "Economic disadvantage or advantage from the marriage or breakdown",
              "Standard of living during the relationship",
              "Age and health of the spouses",
            ].map((factor) => (
              <div key={factor} style={{ display: "flex", gap: "12px", padding: "10px 14px", background: "rgba(255,255,255,0.03)" }}>
                <span style={{ color: "#C6922A", flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.5, margin: 0 }}>{factor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CHILD SUPPORT */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Child support in Ontario</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Child support is determined by the Federal Child Support Guidelines. Unlike spousal support, child support is largely formulaic:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { item: "Table amount", desc: "Set by the federal guidelines based on payor&apos;s province of residence, income, and number of children. A table amount lookup is public and easy to calculate." },
              { item: "Section 7 expenses", desc: "Special or extraordinary expenses shared proportionally — childcare, medical/dental not covered by insurance, extracurriculars, post-secondary." },
              { item: "Shared parenting adjustment", desc: "Where each parent has the child 40%+ of the time, set-off provisions apply. Support is reduced based on the differential in income and time." },
              { item: "Adult children", desc: "Support may continue past age 18 if the child is a full-time student, has a disability, or remains under parental charge for another reason." },
            ].map(({ item, desc }) => (
              <div key={item} style={{ background: "#07070a", padding: "22px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{item}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PARENTING */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Parenting arrangements (formerly custody and access)</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            The 2021 amendments to the Divorce Act replaced &quot;custody&quot; and &quot;access&quot; with &quot;decision-making responsibility&quot; and &quot;parenting time.&quot; The framework focuses on the child&apos;s best interests, not parental rights:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { term: "Decision-making responsibility", desc: "Who makes major decisions about the child&apos;s health, education, religion, and significant extracurricular activities. Can be shared (joint) or given to one parent." },
              { term: "Parenting time", desc: "The schedule of when the child is with each parent. Arrangements range from primary residence with one parent to equal sharing to anything in between." },
              { term: "Best interests of the child", desc: "The governing standard for all parenting decisions — courts consider safety, each parent&apos;s relationship with the child, the child&apos;s views, ability to cooperate, and any history of family violence." },
            ].map(({ term, desc }) => (
              <div key={term} style={{ display: "flex", gap: "16px", padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "6px" }}>{term}</p>
                  <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOR LAWYERS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>For Ontario family lawyers: managing separation files with Atticus</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Family files are document-intensive and deadline-heavy — financial statements, disclosure, expert reports, court dates. Atticus helps Ontario family lawyers:
          </p>
          <ul style={{ paddingLeft: "20px", marginBottom: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Separation Agreement matter template with pre-populated action item checklist",
              "AI Draft: separation agreements grounded in your matter notes",
              "Document AI: extract financial figures, property values, and dates from client disclosure packages",
              "Limitation period calculator: equalization claims must commence within 2 years of divorce or 6 years of separation",
              "Daily morning briefing: never miss a court date, disclosure deadline, or offer expiry",
              "Conflict of interest check: critical in family law where opposing parties are often known to each other",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Practice management built for Ontario family law</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus includes Separation Agreement matter templates, AI document processing, limitation period tracking, and AI-drafted agreements for Ontario family lawyers. 14-day free trial.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
              Start Free Trial →
            </Link>
            <Link href="/ontario-family-lawyer" style={{ border: "1px solid rgba(198,146,42,0.4)", color: "#C6922A", padding: "12px 28px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
              Atticus for Family Lawyers →
            </Link>
          </div>
        </div>
      </article>

      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 400, color: "rgba(240,232,216,0.5)", marginBottom: "20px" }}>Related guides</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { href: "/ontario-family-lawyer", label: "Atticus for family lawyers" },
            { href: "/calculator", label: "Limitation period calculator" },
            { href: "/blog/engagement-letter-ontario-lawyers", label: "Engagement letter guide" },
            { href: "/blog/missing-limitation-periods-ontario", label: "Missing limitation periods" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ color: "#C6922A", fontSize: "14px", textDecoration: "none", border: "1px solid rgba(198,146,42,0.3)", padding: "6px 16px", borderRadius: "20px" }}>
              {label}
            </Link>
          ))}
        </div>
      </section>

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
