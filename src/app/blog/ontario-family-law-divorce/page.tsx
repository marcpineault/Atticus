import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Family Law — Divorce Act, Property Division, and Support | Atticus",
  description:
    "A practical guide for Ontario family lawyers: Divorce Act, equalization of net family property, spousal support SSAG, child support Guidelines, and family law procedure.",
  openGraph: {
    title: "Ontario Family Law — Divorce Act, Property Division, and Support",
    description:
      "Ontario family law guide: Divorce Act grounds, equalization NFP, Family Law Act, Child Support Guidelines, Spousal Support Advisory Guidelines, and family law procedure.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-family-law-divorce",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-family-law-divorce" },
};

export default function OntarioFamilyLawDivorcePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Family Law — Divorce Act, Property Division, and Support",
    description:
      "Practical guide to Ontario family law: Divorce Act grounds and bars, equalization of net family property, Family Law Act, Child Support Guidelines, and Spousal Support Advisory Guidelines.",
    url: "https://getatticus.ca/blog/ontario-family-law-divorce",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    datePublished: "2026-03-19",
    keywords: [
      "Ontario family law",
      "Divorce Act Ontario",
      "equalization net family property",
      "child support guidelines Ontario",
      "spousal support Ontario",
      "Family Law Act Ontario",
      "family law rules Ontario",
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-block bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Family Law
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Ontario Family Law — Divorce Act, Property Division, and Support
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A practical guide to Ontario family law: the <em>Divorce Act</em> RSC 1985 c 3 (2nd Supp),
            equalization of net family property under the <em>Family Law Act</em> RSO 1990 c F.3,
            child support under the Federal Guidelines, and spousal support under the SSAG.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>March 2026</span>
            <span>&middot;</span>
            <span>17 min read</span>
            <span>&middot;</span>
            <span>Atticus Legal Research</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">

          <h2>The Divorce Act — Jurisdiction and Grounds</h2>
          <p>
            The <em>Divorce Act</em> RSC 1985 c 3 (2nd Supp) (as amended in 2021) is federal legislation
            governing divorce and corollary relief (child support, spousal support, parenting orders).
            It applies to married spouses. Provincial legislation — primarily the{" "}
            <em>Family Law Act</em> RSO 1990 c F.3 — governs property division and applies to both married
            and common-law spouses in property matters. Family law proceedings in Ontario are governed
            by the <em>Family Law Rules</em> O. Reg. 114/99.
          </p>
          <p>
            The sole ground for divorce in Canada is marriage breakdown (s.8 DA), established by one of:
          </p>
          <ul>
            <li>
              <strong>Separation of one year</strong> — the parties have lived separate and apart for at
              least one year immediately before the determination of the divorce (s.8(2)(a)); proceedings
              may be commenced before the one year expires
            </li>
            <li>
              <strong>Adultery</strong> — the respondent committed adultery after the marriage; the petitioner
              cannot use their own adultery (s.8(2)(b)(i))
            </li>
            <li>
              <strong>Physical or mental cruelty</strong> — the respondent treated the petitioner with
              physical or mental cruelty of such a kind as to render intolerable the continued cohabitation
              of the spouses (s.8(2)(b)(ii))
            </li>
          </ul>
          <p>
            The 2021 amendments to the Divorce Act (Bill C-78) replaced &quot;custody&quot; and &quot;access&quot;
            with &quot;decision-making responsibility&quot; and &quot;parenting time&quot; — Parliament
            moved to child-focused language emphasizing the child&apos;s best interests.
          </p>

          <h2>Parenting Orders — Best Interests of the Child</h2>
          <p>
            Section 16 of the Divorce Act (as amended) requires the court to consider only the best interests
            of the child in making parenting orders. The primary consideration is the child&apos;s physical,
            emotional, and psychological safety, security, and well-being (s.16(1)). Section 16(3) lists
            factors to consider including:
          </p>
          <ul>
            <li>The child&apos;s needs, given their age and developmental stage</li>
            <li>The nature and strength of the child&apos;s relationship with each spouse and other significant persons</li>
            <li>Each spouse&apos;s willingness to support the child&apos;s relationship with the other spouse</li>
            <li>Any family violence and its impact on the child and the ability and willingness of the perpetrator to meet the child&apos;s needs (s.16(3)(j))</li>
            <li>Any civil or criminal proceeding relevant to the safety or well-being of the child</li>
          </ul>
          <p>
            Family violence is expressly addressed in s.16(4) — in assessing family violence, the court
            considers the nature, seriousness, and frequency of the violence; whether there is a pattern;
            and the steps taken to address the violence. A maximum contact presumption (now called &quot;maximum
            parenting time&quot;) does not apply as an absolute rule where family violence is a factor.
          </p>

          <h2>Child Support — Federal Child Support Guidelines</h2>
          <p>
            Child support under the Divorce Act is governed by the <em>Federal Child Support Guidelines</em>
            SOR/97-175 (FCSG). The FCSG establish a formulaic calculation based on the paying parent&apos;s
            income and the number of children:
          </p>
          <ul>
            <li>
              <strong>Table amounts</strong> — set out in schedules to the FCSG; the paying parent&apos;s
              gross annual income and province of residence determine the monthly table amount
            </li>
            <li>
              <strong>Section 7 expenses</strong> — the court may order payment of a portion of &quot;special
              and extraordinary expenses&quot; (child care, medical/dental, extracurricular activities, post-secondary
              education) in proportion to each parent&apos;s income
            </li>
            <li>
              <strong>Shared parenting arrangements</strong> — where a parent exercises parenting time
              with the child 40% of the time or more over a year (s.9 FCSG), the court must consider
              the table amounts for both households, the increased costs of shared parenting, and the
              condition, means, needs, and other circumstances of the child and each spouse
            </li>
          </ul>
          <p>
            Child support is always subject to variation on a material change in circumstances.
            Income must be disclosed annually under Form 13 (Financial Statement) and the table amount
            updated. Courts have consistently held that child support is the right of the child —
            a parent cannot waive child support on behalf of the child.
          </p>

          <h2>Spousal Support — Divorce Act and SSAG</h2>
          <p>
            Spousal support entitlement under s.15.2 of the Divorce Act is based on compensatory
            (economic disadvantage arising from the marriage or its breakdown) and non-compensatory
            (need/means/economic self-sufficiency) grounds. The objectives of spousal support under
            s.15.2(6) include:
          </p>
          <ul>
            <li>Recognition of economic advantages and disadvantages arising from the marriage</li>
            <li>Apportionment of consequences of child care beyond the marriage</li>
            <li>Relief of economic hardship from the breakdown</li>
            <li>Promotion of economic self-sufficiency within a reasonable period</li>
          </ul>
          <p>
            The <em>Spousal Support Advisory Guidelines</em> (SSAG) — developed by Carol Rogerson and Rollie
            Thompson and judicially endorsed in <em>Moge v Moge</em> [1992] 3 SCR 813 and
            <em>Bracklow v Bracklow</em> [1999] 1 SCR 420 — provide ranges for quantum and duration.
            The SSAG use formulas based on income disparity (without children formula; with children
            formula). They are advisory, not binding, but courts apply them as a strong starting point.
          </p>

          <h2>Property Division — Family Law Act</h2>
          <h3>Equalization of Net Family Property (NFP)</h3>
          <p>
            The <em>Family Law Act</em> RSO 1990 c F.3 Part I governs division of property for married
            spouses. The regime does not split property — it equalizes the increase in net worth during
            the marriage. Each spouse calculates their Net Family Property (NFP):
          </p>
          <ul>
            <li>
              <strong>NFP = (Value of property owned on valuation date) − (Value of debts and liabilities
              on valuation date) − (Value of property owned on date of marriage, net of debts on that date)</strong>
            </li>
          </ul>
          <p>
            The valuation date is the earliest of: the date of separation with no reasonable prospect of
            resuming cohabitation; the date of divorce; the date of death; or the date that the court
            grants an equalization under s.5(6) because it would be unconscionable to equalize fully.
          </p>
          <p>
            The spouse with the higher NFP owes the other an equalization payment equal to half the
            difference between the two NFPs: Equalization payment = (Higher NFP − Lower NFP) ÷ 2.
          </p>
          <h3>Exclusions from NFP</h3>
          <p>
            Certain property is excluded from NFP under s.4(2) of the FLA and does not form part of the
            calculation: gifts and inheritances received during the marriage from third parties (but income
            from gifts/inheritances is not excluded); damages or compensation for personal injury; proceeds
            of life insurance; and property that the spouses have agreed to exclude by domestic contract.
          </p>
          <h3>The Matrimonial Home</h3>
          <p>
            The matrimonial home has special treatment under Part II of the FLA. A spouse may not dispose
            of or encumber an interest in a matrimonial home without the other spouse&apos;s consent (s.21).
            The matrimonial home is not excluded from NFP even if one spouse received it as a gift or
            inheritance — its full value on the valuation date is included (s.4(1)(a) exclusion does not
            apply to the matrimonial home).
          </p>
          <p>
            Both spouses have an equal right to possession of the matrimonial home regardless of ownership
            (s.19). An exclusive possession order may be granted to one spouse under s.24 in appropriate
            circumstances (best interests of children; financial need; domestic violence).
          </p>
          <h3>Common-Law Spouses and Property</h3>
          <p>
            The FLA equalization regime does not apply to common-law spouses — only to married spouses.
            Common-law spouses must pursue property claims under the law of unjust enrichment
            (<em>Kerr v Baranow</em> 2011 SCC 10 — joint family venture analysis; constructive trust as remedy).
            Common-law spouses may apply for spousal support under s.29 of the FLA if they have cohabited
            continuously for at least 3 years or in a relationship of some permanence with a child.
          </p>

          <h2>Domestic Contracts</h2>
          <p>
            The FLA recognizes three types of domestic contracts: marriage contracts (s.52), cohabitation
            agreements (s.53), and separation agreements (s.54). Domestic contracts must be in writing,
            signed by the parties, and witnessed. Independent legal advice is not required by statute but
            is strongly recommended to rebut claims of unconscionability or lack of understanding.
          </p>
          <p>
            Section 56(4) allows a court to set aside a domestic contract on the grounds of: failure to
            disclose significant assets or liabilities; failure to understand the nature and consequences
            of the contract; or other grounds that would invalidate a contract (duress, undue influence,
            unconscionability). <em>LeVan v LeVan</em> 2008 ONCA 388 is the leading Ontario case on
            setting aside marriage contracts for non-disclosure.
          </p>
        </div>
      </article>
    </div>
  );
}
