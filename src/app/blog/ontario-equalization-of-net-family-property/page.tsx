import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Equalization of Net Family Property: Family Law Act s.5, NFP Calculation, and Excluded Property (2024)",
  description:
    "Complete guide to Ontario equalization of net family property under the Family Law Act. Net family property calculation, valuation date, excluded property s.4, deductions, gifts and inheritances, pre-marriage property, the presumption of equal sharing, election between equalization and will, and the court's power to vary an equalization payment under s.5(6).",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-equalization-of-net-family-property" },
  openGraph: {
    title: "Ontario Equalization of Net Family Property: Family Law Act s.5, NFP Calculation, and Excluded Property (2024)",
    description:
      "Complete guide to Ontario equalization of net family property. Net family property, valuation date, excluded property, gifts, inheritances, pre-marriage property, and unequal division under Family Law Act s.5(6).",
    url: "https://getatticus.ca/blog/ontario-equalization-of-net-family-property",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Equalization of Net Family Property: Family Law Act s.5, NFP Calculation, and Excluded Property (2024)",
  "description": "Complete guide to Ontario equalization of net family property under the Family Law Act. NFP calculation, valuation date, excluded property, gifts, inheritances, pre-marriage property, and court power to vary under s.5(6).",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-equalization-of-net-family-property",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01"
}`;

export default function OntarioEqualizationNFPPage() {
  return (
    <>
      <Script id="ontario-equalization-nfp-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-amber-700 hover:text-amber-900 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                Family Law
              </span>
              <span className="text-slate-400 text-sm">14 min read</span>
              <span className="text-slate-400 text-sm">December 2024</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Ontario Equalization of Net Family Property: Family Law Act s.5, NFP Calculation, and Excluded Property
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ontario&apos;s equalization regime under the <em>Family Law Act</em> RSO 1990 c F.3 governs the division of
              property on marriage breakdown. The legislation does not divide property — it creates a
              right to an equalization payment calibrated to the difference in each spouse&apos;s net family property
              (NFP). Understanding how NFP is calculated, what is excluded, how the valuation date operates,
              and when a court may order unequal division is essential to advising clients in Ontario matrimonial matters.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              The Statutory Framework: Family Law Act Part I
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Part I of the <em>Family Law Act</em> creates a deferred community-of-property regime. During the marriage,
              each spouse owns their own property. On a triggering event — separation, annulment, divorce, or death —
              the spouse with the higher NFP owes the other spouse a payment equal to half the difference between their
              respective NFPs. This is the equalization payment under s.5(1).
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The regime applies to married spouses only. Common-law partners in Ontario have no statutory equalization
              rights under the <em>Family Law Act</em>. Their claims on breakdown are limited to unjust enrichment,
              resulting trust, and joint family venture principles developed in <em>Kerr v Baranow</em> 2011 SCC 10.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The calculation is arithmetic: each spouse determines their NFP as of the valuation date, the spouse
              with the higher NFP pays the other half the difference. If Spouse A has NFP of $600,000 and Spouse B
              has NFP of $200,000, Spouse A owes Spouse B $200,000 (half of $400,000 difference).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Net Family Property: The Statutory Definition
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Section 4(1) defines NFP as the value of all property that a spouse owns on the valuation date, after
              deducting:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>The spouse&apos;s debts and other liabilities on the valuation date</li>
              <li>The value of property (other than a matrimonial home) that the spouse owned on the date of marriage,
              after deducting the spouse&apos;s debts and other liabilities on the date of marriage, calculated as of
              the date of marriage</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              NFP cannot be less than zero: s.4(5). A spouse cannot have a negative NFP. If the calculation produces
              a negative number, NFP is deemed to be nil. This prevents a spouse with heavy debts from transferring
              a share of those debts to the other spouse through the equalization calculation.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Valuation Date
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The valuation date is defined in s.4(1) as the earliest of:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>The date the spouses separate with no reasonable prospect of resuming cohabitation</li>
              <li>The date a divorce is granted</li>
              <li>The date the marriage is declared a nullity</li>
              <li>The date on which one spouse commences an application under ss.7(3)(b) to (e) — improvident
              depletion orders</li>
              <li>The date before the date on which one of the spouses dies leaving the other surviving</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              In the vast majority of cases, the valuation date is the date of separation. Determining the exact
              date of separation — and whether the parties &quot;separated with no reasonable prospect of resuming
              cohabitation&quot; — is frequently contested. Courts examine the conduct of the parties, whether they
              held themselves out as separated to third parties, whether they slept apart, and whether they made
              genuine attempts at reconciliation.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Asset values fluctuate between separation and trial. In volatile markets, the difference between
              the valuation date and trial date can be significant. Practitioners must carefully document asset
              values as of the separation date and be prepared to rebut evidence about post-separation changes
              in value, which are generally irrelevant to the NFP calculation.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Excluded Property Under Section 4(2)
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Section 4(2) lists categories of property that are excluded from NFP. The spouse claiming an exclusion
              bears the onus of proving that the property falls within an excluded category.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Gifts and Inheritances from Third Parties
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Property received by gift or inheritance from a person other than the spouse during the marriage is
              excluded: s.4(2)1. The exclusion does not apply to the matrimonial home — even if a spouse inherited
              the home outright, it is included in NFP if it was being used as the matrimonial home on the valuation
              date.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Traceable proceeds of excluded property also retain their excluded character: s.4(2)6. If a spouse
              received an inheritance of $300,000 and invested it in a portfolio, the portfolio value attributable
              to the inheritance is excluded. The tracing burden requires clear accounting and documentation.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Income from an excluded property is not excluded — only the property itself and traceable proceeds.
              Dividends, rental income, or investment returns generated by excluded property are included in NFP.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Damages and Settlements for Personal Injury
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Damages or a right to damages for personal injuries, nervous shock, mental distress, or loss of
              guidance, care, and companionship are excluded: s.4(2)2. General damages for pain and suffering
              and loss of amenities are excluded. However, compensation for pecuniary losses such as lost income
              during the marriage is not excluded, as it replaced income that would have been family property.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Courts distinguish between the excluded personal injury component and the included economic loss
              component. In practice, large tort settlements require careful allocation analysis.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Life Insurance Proceeds
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Proceeds or a right to proceeds of a life insurance policy as defined in the <em>Insurance Act</em>
              are excluded: s.4(2)3.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Property Excluded by Domestic Contract
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Property that the spouses have agreed by domestic contract (marriage contract, cohabitation agreement,
              or separation agreement) is not to be included in NFP is excluded: s.4(2)5. This is the principal
              mechanism by which spouses can opt out of the default equalization regime through a marriage contract
              under s.52 or cohabitation agreement under s.53.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Pre-Marriage Property Deduction
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The NFP formula requires deducting the value of property owned at the date of marriage (net of
              marriage-date debts). This deduction prevents the equalization regime from sharing wealth that existed
              before the marriage — it is only the wealth accumulated during the marriage that is equalized.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The deduction is property value net of marriage-date liabilities. The calculation: if a spouse owned
              a house worth $400,000 on the date of marriage with a $300,000 mortgage, the deduction is $100,000
              net equity. If the same spouse sold that house during the marriage and invested the proceeds in an RRSP,
              the $100,000 deduction still applies at the valuation date — it is not the current value of the RRSP
              attributable to the pre-marriage asset; it is the static value of pre-marriage net equity.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              There is a critical exception: the matrimonial home. Property that was owned on the date of marriage
              and was the matrimonial home at valuation date receives no pre-marriage deduction. The full value
              of the matrimonial home is included in the owning spouse&apos;s NFP without any deduction for
              pre-marriage value: s.4(1) definition of NFP. This is one of the most significant differences between
              the matrimonial home and other property.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Documentation of marriage-date asset values and liabilities is essential. Spouses who marry with
              existing assets should document values at marriage with bank statements, mortgage statements, RRSP
              statements, and property valuations. Records decades old are notoriously difficult to locate when
              a separation occurs.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              The Matrimonial Home: Special Rules
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Part II of the <em>Family Law Act</em> creates special rules for the matrimonial home that interact
              with the equalization calculation. Every property that qualifies as a matrimonial home under s.18 —
              a property ordinarily occupied as the family residence — receives full value inclusion in NFP with
              no pre-marriage property deduction and no exclusion for gifts or inheritances.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              A married spouse cannot dispose of or encumber the matrimonial home without the consent of the other
              spouse: s.21. Both spouses have an equal right to possession of the matrimonial home regardless of
              ownership: s.19. These rights exist even in a home owned solely by one spouse.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The no-deduction rule for the matrimonial home means that if one spouse owned the home before marriage
              and it was worth $500,000 at marriage, that spouse receives no deduction for the pre-marriage value.
              The full valuation-date value — say $900,000 — goes into that spouse&apos;s NFP with no offset.
              This often produces the largest equalization payment obligation in the calculation.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Spouses can designate only one property as the matrimonial home: s.20(1). A couple may have multiple
              properties, but only the property designated as the matrimonial home receives the special rules.
              Designation and dedesignation require consent of both spouses.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Deductions: Debts and Liabilities
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              All debts and other liabilities on the valuation date are deductible from total assets in calculating
              NFP. This includes mortgages, car loans, credit card debt, student loans, and business liabilities.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The deduction for liabilities is unlimited — there is no restriction on deducting liabilities
              even if they exceed assets (except that NFP is floored at nil under s.4(5)). A spouse who has
              incurred significant debt during the marriage (including business losses, legal fees, or other
              liabilities) will have a lower NFP as a result.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Contingent liabilities and tax liabilities on unrealized gains are contentious. Courts have
              addressed whether potential capital gains tax on assets owned at valuation date should be deducted.
              The general approach is that a notional tax liability on unrealized gains may be deducted if
              disposition is likely or imminent, but pure contingent liabilities may not be deductible.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Pension Benefits and RRSPs in NFP
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pension entitlements earned during the marriage are property under the <em>Family Law Act</em> and
              must be included in NFP. Valuing defined benefit pension plans requires actuarial assessment of
              the pension&apos;s commuted value as of the valuation date. Defined contribution plans are valued
              at their fund balance.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The <em>Pension Benefits Act</em> RSO 1990 c P.8 permits division of pension entitlements through
              a family law value transfer. Section 67.3 of the PBA allows a court to order transfer of up to
              50% of the family law value of a pension to the other spouse&apos;s RRSP, RRIF, or pension plan
              without triggering immediate tax consequences.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              RRSPs are included in NFP at their full market value on the valuation date, net of any notional
              tax liability on withdrawal if disposition is expected. The Canada Revenue Agency will assess income
              tax on RRSP withdrawals, so a 100% dollar-for-dollar comparison between RRSP assets and non-RRSP
              assets overstates the RRSP holder&apos;s position. Expert actuarial and tax evidence may be needed
              to properly value pre-tax retirement assets.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Presumption of Equal Division and the Right to Equalization Payment
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Section 5(1) creates a presumption that each spouse is entitled to receive an equalization payment
              equal to half the difference between their NFPs. The calculation is mandatory and arithmetic —
              courts do not have discretion to re-weight contributions, recognize unpaid labour differently,
              or impose a different equalization fraction as a starting point.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The right to an equalization payment arises on the triggering events set out in s.5: separation,
              with or without a court proceeding, with the other spouse still alive (s.5(1)); or on the death
              of a spouse (s.5(2), election between will benefits and equalization). The right must be asserted
              within the limitation periods in s.7(3): six years after the date of separation or two years after
              a divorce, whichever comes first.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Election Between Equalization and Testamentary Benefits
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Under s.6(1), a surviving spouse may elect to receive either the benefits provided in the deceased
              spouse&apos;s will (or on intestacy under the <em>Succession Law Reform Act</em>) or the equalization
              payment that would have been payable under s.5. The election is irrevocable and must be made within
              six months of the spouse&apos;s death: s.6(10).
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Failing to make an election within the six-month period is deemed an election to receive the testamentary
              benefits: s.6(11). Practitioners advising surviving spouses must move quickly to calculate both
              the testamentary benefit (net of probate and tax) and the equalization entitlement (which requires
              a full NFP analysis), and advise the client in writing about the election deadline.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The election is a significant decision. Where a deceased spouse had much greater wealth, the will
              benefit may far exceed the equalization entitlement. Where the deceased spouse had less wealth
              than the surviving spouse, the surviving spouse may actually owe an equalization payment to the
              deceased&apos;s estate, making the will benefit more advantageous.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Unequal Division: Section 5(6) Variation
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Section 5(6) permits a court to award a spouse an amount greater or less than half the difference
              between NFPs if equal division would be unconscionable having regard to specified circumstances.
              The threshold is high — &quot;unconscionable,&quot; not merely unfair or inappropriate. Courts have emphasized
              that s.5(6) is a safety valve, not a general invitation to revisit equalization calculations on
              grounds of hardship.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The enumerated factors in s.5(6) include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>A spouse&apos;s failure to disclose debts or other liabilities existing at the date of marriage
              (s.5(6)(c))</li>
              <li>Debts or other liabilities incurred recklessly or in bad faith (s.5(6)(d))</li>
              <li>Intentional or reckless depletion of property (s.5(6)(e))</li>
              <li>The fact that the amount a spouse would otherwise receive is disproportionately large in
              relation to a period of cohabitation that is less than five years (s.5(6)(f))</li>
              <li>The fact that one spouse has incurred a disproportionately larger amount of debts or other
              liabilities than the other for the support of the family (s.5(6)(g))</li>
              <li>A written agreement between the spouses that is not a domestic contract (s.5(6)(h))</li>
              <li>Any other circumstance relating to the acquisition, disposition, preservation, maintenance,
              or improvement of property (s.5(6)(i))</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              The leading case is <em>Serra v Serra</em> 2009 ONCA 105, which confirmed that unconscionability
              under s.5(6) requires conduct that is shocking and offensive to reasonable persons — not merely
              conduct that is unfair. Courts will refuse to invoke s.5(6) for ordinary disputes about contribution
              or economic advantage, which are built into the equalization formula by design.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Improvident depletion is one of the more commonly litigated grounds. A spouse who dissipates
              matrimonial assets through gambling, reckless business ventures, or deliberate concealment during
              litigation may be subject to a s.5(6) order. The depletion must be sufficiently egregious to meet
              the unconscionability threshold.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Interim Orders and Preservation of Property
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Section 12 authorizes a court to make interim orders to prevent the improvident depletion of a
              spouse&apos;s property. Courts can restrain disposal or encumbrance of specific assets, require
              disclosure of assets, appoint a receiver, or order delivery of property pending determination of
              the equalization claim.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              A spouse who learns that the other spouse is dissipating assets — selling investments, transferring
              property to family members, or incurring unusual liabilities — should move quickly for an interim
              preservation order under s.12 before the equalization calculation is undermined.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Business Interests and Corporations in NFP
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Shares in private corporations, partnership interests, and business assets are property and must
              be included in NFP at their fair market value as of the valuation date. Valuing private corporations
              requires business valuators — typically chartered business valuators (CBVs) — applying income,
              asset, or market approaches depending on the nature of the business.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Minority discount and lack of marketability discount are contested issues in family law business
              valuations. Courts have allowed minority discounts in some cases where the spouse genuinely lacks
              control and the shares cannot readily be sold; other cases reject discounts where the spouse
              effectively controls the corporation despite nominal minority ownership.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              A key issue is whether value in a professional corporation representing the professional&apos;s
              personal goodwill — the capacity to generate future income from personal relationships and expertise —
              should be included in NFP. Ontario courts have generally included enterprise goodwill but have
              been more cautious about including personal goodwill that would evaporate on separation of the
              professional from the business.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Domestic Contracts and Contracting Out of the FLA
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Section 52 authorizes spouses to enter into marriage contracts that may provide for the ownership
              and division of property on separation, and specifically that one or both spouses&apos; property
              shall not be included in NFP under s.4. Well-drafted marriage contracts can exclude specific assets,
              define what constitutes a gift or inheritance for exclusion purposes, or entirely displace the
              FLA equalization regime in favour of a different agreed-upon arrangement.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Marriage contracts are subject to challenge under s.56(4) on grounds including failure to disclose
              significant assets or liabilities, duress, and unconscionability. Courts have set aside marriage
              contracts where one party received inadequate disclosure, signed under pressure without independent
              legal advice, or entered into an agreement so one-sided that enforcement would be unconscionable.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Under s.52(2)(b), marriage contracts cannot contract out of the special provisions relating to
              the matrimonial home in Part II. A marriage contract provision purporting to give one spouse
              complete exclusive rights to the matrimonial home to the exclusion of the other&apos;s possession
              rights is not enforceable.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Practical Considerations for Ontario Family Law Practitioners
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              NFP calculations require assembling complete financial disclosure for two dates: the date of marriage
              and the valuation date. Financial Statements (Form 13.1) filed in family proceedings must include
              a full NFP calculation. Errors or omissions in financial disclosure can lead to adverse costs orders
              and may support a s.5(6) unconscionability argument if they are deliberate.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario Rule 13 of the Family Law Rules requires automatic full financial disclosure and the filing
              of updating financial statements before case conferences, settlement conferences, and trials.
              Rule 13.1 requires a party to serve an updated financial statement if material changes have
              occurred since the last filed statement.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Limitation periods in s.7(3) must be tracked carefully. For separating spouses, the six-year
              limitation from separation date begins to run immediately. A client who comes to counsel three
              or four years after separation may have a compressed window for commencing an application,
              particularly if reconciliation has complicated the separation date calculation.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Atticus tracks limitation dates across all active family law files and flags approaching deadlines.
              Ontario family lawyers use Atticus to manage financial disclosure, track valuation dates, and
              coordinate the NFP analysis workflow within a single LSO-compliant practice management platform.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Atticus for Ontario Family Lawyers
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Atticus is built for Ontario family law practice — deadline tracking for s.7(3) limitation periods
                and s.6(10) election deadlines, AI document analysis across client financial records, LSO By-Law 9
                compliant trust accounting, and full matter management from intake to resolution.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
              <div className="space-y-3">
                <Link
                  href="/blog/ontario-child-support-guidelines"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Child Support Guidelines: Federal Tables, Section 7 Expenses, and Variation
                </Link>
                <Link
                  href="/blog/ontario-spousal-support"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Spousal Support: SSAG, Entitlement, Duration, and Variation
                </Link>
                <Link
                  href="/blog/ontario-family-court-procedure"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Family Court Procedure: Forms, Case Conferences, and OCL Reports
                </Link>
                <Link
                  href="/blog/ontario-trust-law"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Trust Law: Express Trusts, Resulting Trusts, and Constructive Trusts
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
