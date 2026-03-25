import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Family Law — Child Support, Spousal Support, and the SSAG",
  description:
    "A comprehensive guide to Ontario family law support obligations: child support under the Child Support Guidelines, spousal support under the SSAG, variation applications, imputed income, and key ONCA authorities.",
  openGraph: {
    title: "Ontario Family Law — Child Support, Spousal Support, and the SSAG",
    description:
      "Ontario family law support: Federal Child Support Guidelines table amounts, s.7 special expenses, SSAG ranges for spousal support, imputed income, variation, and key ONCA decisions.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-family-law-support",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-family-law-support" },
};

export default function OntarioFamilyLawSupportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Family Law — Child Support, Spousal Support, and the SSAG",
    description:
      "Ontario family law support guide: Federal Child Support Guidelines, s.7 special expenses, SSAG ranges, imputed income Drygala v Pauli, variation material change Willick 1994 SCC, and key ONCA support authorities.",
    url: "https://getatticus.ca/blog/ontario-family-law-support",
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
    author: {
      "@type": "Organization",
      name: "Atticus Legal",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-purple-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-purple-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              Family Law
            </span>
            <span className="text-slate-400 text-sm">14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ontario Family Law — Child Support, Spousal Support, and the SSAG
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A comprehensive guide to Ontario family law support obligations: child support
            under the Federal Child Support Guidelines, spousal support under the SSAG,
            imputed income, variation applications, and key Ontario Court of Appeal authorities.
          </p>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

          <h2>Child Support — Legal Framework</h2>
          <p>
            Child support in Ontario is governed by two parallel statutory regimes:
          </p>
          <ul>
            <li>
              <strong>Federal Child Support Guidelines</strong> SOR/97-175, made under the
              <em>Divorce Act</em> RSC 1985 c 3 (2nd Supp) — apply where parties are legally
              married and proceeding under the <em>Divorce Act</em>
            </li>
            <li>
              <strong>Child Support Guidelines</strong> O.Reg. 391/97, made under the
              <em>Family Law Act</em> RSO 1990 c F.3 — apply where parties were not married
              (common-law spouses, spouses proceeding under the FLA rather than the
              <em>Divorce Act</em>)
            </li>
          </ul>
          <p>
            The two sets of Guidelines are substantively identical — the same tables, the same
            special expenses provisions, and the same imputed income principles apply under both.
            The distinction matters for jurisdiction: the <em>Divorce Act</em> is federal and
            applies to married spouses; the FLA Ontario regime applies to all others.
          </p>

          <h3>Table Amount — Base Child Support</h3>
          <p>
            The base child support obligation is determined by the Federal Child Support
            Guidelines (Schedule I — Ontario tables). The table amount is a function of:
            (a) the payor parent&apos;s income; (b) the province of residence; and (c) the number
            of children.
          </p>
          <p>
            The Guideline amount is the presumptive amount — courts must order the table amount
            unless one of the exceptions applies:
          </p>
          <ul>
            <li>Undue hardship — payor or recipient demonstrates circumstances causing undue hardship if ordered to pay the Guideline amount (e.g., exceptional debts from the relationship, access costs, support of another child)</li>
            <li>Income over $150,000 — table amounts are set to $150,000; for income above that level, the court must add an appropriate amount for each additional dollar of income (s.4 Federal Guidelines)</li>
            <li>Split or shared custody — special provisions apply</li>
          </ul>
          <h3>Income for Child Support Purposes</h3>
          <p>
            Income for child support is determined under Schedule III of the Federal Guidelines,
            starting from line 15000 (total income) of the T1 income tax return and making
            adjustments. Key adjustments:
          </p>
          <ul>
            <li>Business owners/self-employed: income may be grossed up for pre-tax corporate income retained in a corporation (s.18 Federal Guidelines)</li>
            <li>Employment benefits, non-recurring income, and capital gains may be added</li>
            <li>RRSP withdrawals included in the year of withdrawal</li>
          </ul>
          <h3>Imputed Income</h3>
          <p>
            Courts may impute income to a parent who is intentionally unemployed or underemployed:
            s.19 Federal Guidelines. The leading Ontario case is <em>Drygala v Pauli</em>
            (2002) 61 OR (3d) 711 (ONCA):
          </p>
          <ul>
            <li>The court must be satisfied that the parent is intentionally unemployed or underemployed</li>
            <li>The test is objective — what income could the parent reasonably earn?</li>
            <li>Relevant factors: education, work history, skills, job market, childcare obligations</li>
            <li>A parent is not required to maximize income — but deliberate steps to reduce income will attract imputation</li>
          </ul>

          <h3>Section 7 Special and Extraordinary Expenses</h3>
          <p>
            In addition to the base table amount, s.7 of the Federal Guidelines allows for the
            apportionment of special or extraordinary expenses in proportion to each parent&apos;s
            income. Section 7 expenses include:
          </p>
          <ul>
            <li>Childcare expenses incurred to allow the recipient parent to work or go to school</li>
            <li>Medical and dental insurance premiums reasonably attributable to the child</li>
            <li>Health-related expenses not covered by insurance (orthodontia, therapy, eyeglasses)</li>
            <li>Post-secondary education costs</li>
            <li>Extracurricular activities — but only if extraordinary (significantly above community standards) OR the expense is necessary for the child&apos;s special needs</li>
          </ul>
          <p>
            The apportionment is usually based on the net income of each parent after deducting
            their own income tax (the &quot;net after-tax income&quot; approach adopted in most Ontario
            cases). The recipient parent is credited for the cost they pay directly.
          </p>

          <h3>Shared Custody — Proportionate Offset</h3>
          <p>
            Where each parent exercises parenting time of 40% or more, the Guideline child support
            is discretionary under s.9 of the Federal Guidelines. Courts apply the offset approach
            — subtract each parent&apos;s Guideline amount for the other&apos;s income — and then consider
            the actual increased cost of the shared parenting arrangement and the ability of each
            parent to support the children.
          </p>

          <h2>Spousal Support — the SSAG</h2>
          <p>
            Spousal support in Ontario is governed by the <em>Family Law Act</em> RSO 1990 c F.3
            (unmarried spouses) and the <em>Divorce Act</em> RSC 1985 (married spouses). The
            Spousal Support Advisory Guidelines (SSAG) — published by the federal Department
            of Justice — are not law but are widely used as a starting point:
            <em>Fisher v Fisher</em> 2008 ONCA 11.
          </p>
          <h3>Entitlement to Spousal Support</h3>
          <p>
            Before quantum is considered, the court must find entitlement. Entitlement
            is established under one or more of the following grounds:
          </p>
          <ul>
            <li>
              <strong>Compensatory</strong>: One spouse suffered economic disadvantage from the
              roles adopted during the relationship (e.g., primary caregiver who sacrificed career
              advancement). The SCC recognized compensatory support in <em>Moge v Moge</em>
              [1992] 3 SCR 813.
            </li>
            <li>
              <strong>Non-compensatory (needs-based)</strong>: One spouse has a need for support
              based on economic interdependence, even without economic sacrifice from the marriage.
              <em>Bracklow v Bracklow</em> [1999] 1 SCR 420 established that need alone, arising
              from the relationship, can ground entitlement.
            </li>
            <li>
              <strong>Contractual</strong>: A marriage contract or separation agreement provides
              for support.
            </li>
          </ul>
          <h3>SSAG Ranges — Without Child Support Formula</h3>
          <p>
            The SSAG Without Child Support Formula applies where there are no dependent children.
            The range for amount is:
          </p>
          <ul>
            <li>1.5-2% of the difference in the spouses&apos; gross incomes for each year of marriage</li>
            <li>Minimum amount: 1.5% of gross income difference per year of marriage</li>
            <li>Maximum amount: 2% per year (capped at 50% of income difference after many years)</li>
          </ul>
          <p>
            Duration: 0.5-1 year of support per year of marriage (short marriages); indefinite
            support (marriages over 20 years, or where marriage was over 5 years and marriage +
            recipient&apos;s age exceeds 65).
          </p>
          <h3>SSAG Ranges — With Child Support Formula</h3>
          <p>
            Where there are dependent children, the With Child Support Formula applies. Amount
            is calculated based on net disposable income (NDI) — income after tax and child support.
            Support is set at a range that provides each party with 40-46% of the combined
            NDI (the payor&apos;s NDI drops and the recipient&apos;s rises toward equalization within the range).
          </p>
          <p>
            Duration under the With Child Support Formula is connected to child support: support
            continues as long as child support is paid (and for a period after), with an
            additional period that ranges up to the length of the relationship.
          </p>
          <h3>Deviation from SSAG</h3>
          <p>
            Courts may depart from the SSAG ranges for reasons including:
          </p>
          <ul>
            <li>Property equalization — large equalization payment may reduce support</li>
            <li>Payor earning capacity — very high income may warrant different analysis</li>
            <li>Recipient&apos;s failure to achieve self-sufficiency</li>
            <li>Non-disclosure of income</li>
            <li>Health or disability</li>
          </ul>

          <h2>Variation of Support Orders</h2>
          <p>
            A support order (child or spousal) can be varied on application where there has been
            a <strong>material change in circumstances</strong> since the order was made:
            <em>Willick v Willick</em> [1994] 3 SCR 670 (child support); <em>L.M.P. v L.S.</em>
            2011 SCC 64 (spousal support).
          </p>
          <p>
            For child support, a material change includes: change in payor income; change in
            recipient income; change in number of children or their needs; change in custody
            arrangements. Annual income disclosure is required for all child support orders.
          </p>
          <p>
            For spousal support, a material change must be a change that, if it had existed
            at the time of the order, would likely have resulted in a different order (Willick).
            Anticipated changes (e.g., planned retirement) are not material changes until they
            actually occur. A recipient&apos;s failure to become self-sufficient may or may not be
            a material change depending on whether the original order contemplated a plan for
            self-sufficiency.
          </p>

          <h2>Key Ontario Court of Appeal Authorities</h2>
          <ul>
            <li><em>Drygala v Pauli</em> (2002) 61 OR (3d) 711 — imputed income; intentional underemployment test</li>
            <li><em>Fisher v Fisher</em> 2008 ONCA 11 — SSAG as persuasive but not binding; courts must consider SSAG ranges and explain deviations</li>
            <li><em>Moge v Moge</em> [1992] 3 SCR 813 — compensatory spousal support; economic sacrifice from marriage roles</li>
            <li><em>Bracklow v Bracklow</em> [1999] 1 SCR 420 — non-compensatory support; need alone can ground entitlement</li>
            <li><em>Willick v Willick</em> [1994] 3 SCR 670 — material change of circumstances for variation</li>
            <li><em>L.M.P. v L.S.</em> 2011 SCC 64 — variation of spousal support; material change analysis; effect of delay in seeking variation</li>
          </ul>

        </div>
      </article>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practice Management Built for Ontario Family Lawyers
          </h2>
          <p className="text-slate-600 mb-8">
            LSO By-Law 9 trust accounting, AI document analysis, and Ontario deadline tracking.
            $149 CAD/month for your entire firm.
          </p>
          <a
            href="https://getatticus.ca/sign-up"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
