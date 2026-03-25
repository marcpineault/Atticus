import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Cohabitation Agreements: Common-Law Partners, Family Law Act Limits, and Property Division (2024)",
  description:
    "Complete guide to cohabitation agreements in Ontario. Common-law partner property rights, Family Law Act limitations, cohabitation agreement requirements under s.53, property division on breakdown, unjust enrichment, joint family venture, spousal support for common-law spouses, and domestic contract enforceability.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-cohabitation-agreement" },
  openGraph: {
    title: "Ontario Cohabitation Agreements: Common-Law Partners, Family Law Act Limits, and Property Division (2024)",
    description:
      "Guide to cohabitation agreements in Ontario — common-law property rights, FLA limitations, cohabitation agreement drafting, unjust enrichment, joint family venture, and spousal support for common-law spouses.",
    url: "https://getatticus.ca/blog/ontario-cohabitation-agreement",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Cohabitation Agreements: Common-Law Partners, Family Law Act Limits, and Property Division (2024)",
  "description": "Guide to cohabitation agreements in Ontario. Common-law property rights, Family Law Act limitations, cohabitation agreement requirements, unjust enrichment, joint family venture, and spousal support for common-law spouses.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-cohabitation-agreement",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01"
}`;

export default function OntarioCohabitationAgreementPage() {
  return (
    <>
      <Script id="ontario-cohabitation-agreement-schema" type="application/ld+json">
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
              <span className="text-slate-400 text-sm">13 min read</span>
              <span className="text-slate-400 text-sm">December 2024</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Ontario Cohabitation Agreements: Common-Law Partners, Family Law Act Limits, and Property Division
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ontario does not extend the equalization of net family property regime to common-law partners.
              While married spouses benefit from the <em>Family Law Act</em> RSO 1990 c F.3 Part I property regime,
              common-law partners — regardless of the length of their relationship — have no statutory right to
              equalization of property on breakdown. Understanding what rights common-law partners do have,
              and how a cohabitation agreement can expand or define those rights, is essential to advising
              unmarried couples in Ontario.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Who Is a Common-Law Spouse in Ontario?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario statutes use different definitions of &quot;spouse&quot; for different purposes, and the threshold
              for common-law spouse status varies by statute:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li><strong>Family Law Act s.29</strong> (spousal support): partners who have cohabited continuously
              for at least three years, or have cohabited in a relationship of some permanence and are the
              natural or adoptive parents of a child.</li>
              <li><strong>Succession Law Reform Act s.57</strong>: common-law partner defined as person who
              cohabited continuously for at least three years or in a relationship of some permanence as
              natural or adoptive parents of a child — for dependent support claims only, not inheritance rights.</li>
              <li><strong>Income Tax Act</strong>: common-law partner defined as living together in conjugal
              relationship for 12 continuous months, or in a shorter period if the couple has a child.</li>
              <li><strong>Ontario Human Rights Code</strong>: protection against discrimination on the basis
              of marital status includes common-law partners.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Critically, for the purposes of property division, there is no common-law spouse status under the
              <em>Family Law Act</em> Part I. The equalization regime applies to married spouses only.
              A couple who lives together for twenty years without marrying has no statutory claim to equalization
              of property accumulated during the relationship.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Property Rights of Common-Law Partners at Breakdown
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              On the breakdown of a common-law relationship, each partner takes away the property they own
              in their own name, subject to:
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Unjust Enrichment and Constructive Trust
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The primary equitable remedy available to common-law partners is unjust enrichment. The Supreme
              Court of Canada in <em>Kerr v Baranow</em> 2011 SCC 10 restated the unjust enrichment analysis
              for domestic partners: the plaintiff must establish (1) an enrichment of the defendant, (2) a
              corresponding deprivation of the plaintiff, and (3) absence of a juristic reason for the enrichment.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Where unjust enrichment is established, the remedy may be either a personal monetary award (quantum
              meruit for services rendered) or a proprietary constructive trust where a monetary award would be
              inadequate — typically where the claimant has contributed to the acquisition, preservation,
              maintenance, or improvement of specific property.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              <em>Kerr v Baranow</em> also introduced the concept of joint family venture (JFV) as a means of
              assessing mutual benefit conferral. Where parties pool their efforts and resources toward common
              goals during a long cohabitation, the court may find a JFV and award a share of the wealth
              accumulated through joint efforts proportional to the claimant&apos;s contribution. The JFV analysis
              looks at mutual effort, economic integration, actual intent, and the priority of the family
              in decision-making.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Resulting Trust
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              A resulting trust arises where one partner contributes financially to the acquisition of
              property registered in the other partner&apos;s name. The <em>Pecore v Pecore</em> 2007 SCC 17
              presumption of resulting trust applies between common-law partners who are not in a
              parent-child relationship: gratuitous transfers between common-law partners of full capacity
              are presumed to be resulting trusts, not gifts.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              A partner who contributed the down payment on a home titled in the other partner&apos;s name may
              assert a resulting trust proportional to their contribution. The presumption is rebuttable by
              evidence of a donative intent.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Partition and Sale
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Where common-law partners jointly own property — either as joint tenants or tenants in common —
              either partner may apply to court for partition and sale under the <em>Partition Act</em> RSO 1990
              c P.4. The court may order physical partition of the property (rare for residential property) or
              sale of the property and division of proceeds.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Spousal Support for Common-Law Partners
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Unlike property division, spousal support rights do extend to certain common-law partners. Under
              <em>Family Law Act</em> s.29, a &quot;spouse&quot; for support purposes includes a person who has cohabited
              continuously with another person for at least three years or who is in a relationship of some
              permanence and is the natural or adoptive parent of a child of the other person.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Common-law partners who meet this threshold have the same entitlement to spousal support as
              married spouses — the analysis follows the same <em>Moge v Moge</em> [1992] 3 SCR 813 framework
              of compensatory and non-compensatory support and the Spousal Support Advisory Guidelines (SSAG).
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              A common-law relationship shorter than three years, without a child, gives rise to no statutory
              spousal support claim. Partners who anticipate a shorter relationship, or who want to define
              support obligations in advance, should include explicit spousal support provisions in a
              cohabitation agreement.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Cohabitation Agreements Under Family Law Act s.53
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Section 53(1) of the <em>Family Law Act</em> authorizes two persons who are cohabiting or intend
              to cohabit and who are not married to each other to enter into a domestic contract — called a
              cohabitation agreement — in which they agree on their respective rights and obligations during
              cohabitation, on ceasing to cohabit, or on death.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Specifically, a cohabitation agreement may address:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Ownership or division of property</li>
              <li>Support obligations</li>
              <li>The right to direct the education and moral training of children (cannot oust court jurisdiction)</li>
              <li>Any other matter in the settlement of their affairs</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              A cohabitation agreement that becomes effective during the parties&apos; marriage is deemed a marriage
              contract under s.53(2). This conversion provision is important for couples who cohabit under
              a cohabitation agreement and later marry — the agreement continues to govern unless a new
              marriage contract is executed.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Formal Requirements for Validity
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Section 55 sets out the formal requirements for a valid domestic contract, including a cohabitation
              agreement:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Must be in writing</li>
              <li>Must be signed by both parties</li>
              <li>Must be witnessed</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              There is no requirement under the <em>Family Law Act</em> that both parties obtain independent
              legal advice (ILA) as a condition of validity. However, failure to obtain ILA is a significant
              factor in whether a court will set aside the agreement under s.56(4) on grounds of
              unconscionability or failure to understand the nature or consequences of the agreement.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Best practice is to ensure both parties have independent legal advice from separate counsel before
              signing, with written acknowledgment of receiving ILA. Some practitioners include a certificate
              of independent legal advice as a schedule to the agreement.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Setting Aside a Cohabitation Agreement: Section 56(4)
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A court may set aside a domestic contract or a provision in it under s.56(4) if:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>A party failed to disclose to the other significant assets or significant debts or other
              liabilities existing when the domestic contract was made</li>
              <li>A party did not understand the nature or consequences of the domestic contract</li>
              <li>Otherwise in accordance with the law of contract</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              The &quot;law of contract&quot; ground incorporates duress, undue influence, misrepresentation, and
              unconscionability. Courts have set aside cohabitation agreements where one party exercised
              emotional or economic pressure over the other during negotiation, or where the agreement was
              signed shortly before the commencement of cohabitation without adequate time for review.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Section 56(4) does not authorize courts to set aside an agreement simply because it is
              unfair or gives one party a better deal. The threshold is meaningful non-disclosure, lack of
              understanding, or contractual defects — not mere imbalance.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              What a Cohabitation Agreement Can and Cannot Do
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Can Do
            </h3>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Define ownership of property brought into the relationship and property accumulated during
              cohabitation</li>
              <li>Exclude certain property from any unjust enrichment or trust claim</li>
              <li>Create contractual obligations to share property that would not otherwise be shared
              under equity</li>
              <li>Define or waive spousal support obligations between the parties</li>
              <li>Establish a regime for jointly acquired property (including how a jointly owned home
              will be dealt with on breakdown)</li>
              <li>Convert into a marriage contract on marriage under s.53(2)</li>
              <li>Address designated beneficiary designations for RRSPs, TFSAs, and life insurance</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              Cannot Do
            </h3>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>Oust court jurisdiction over custody and access for children (s.56(1))</li>
              <li>Purport to adversely affect the right of a child to support under s.33 (s.56(1))</li>
              <li>Bind a court in determining the best interests of children in custody proceedings</li>
              <li>Contract out of the obligation of full financial disclosure on breakdown (courts will
              require financial disclosure regardless)</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Drafting Considerations for Ontario Cohabitation Agreements
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A well-drafted Ontario cohabitation agreement should clearly address:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li><strong>Ownership of pre-cohabitation property</strong>: Confirm that each party retains
              ownership of property brought into the relationship and that no unjust enrichment claim
              arises in respect of that property.</li>
              <li><strong>Jointly acquired property during cohabitation</strong>: Address how property
              acquired during the relationship — including the family home, joint accounts, and investments —
              will be divided on breakdown.</li>
              <li><strong>The family home</strong>: Unlike married spouses, common-law partners do not have
              automatic possession rights to a jointly owned or partner-owned home. The agreement should
              address possession rights, mortgage obligations, and how sale proceeds will be distributed
              on separation.</li>
              <li><strong>Spousal support</strong>: Either define support entitlements (including a formula
              or quantum) or expressly waive support, with consideration of whether the waiver will be
              enforceable given the parties&apos; circumstances.</li>
              <li><strong>Death provisions</strong>: Address what happens to jointly owned property and
              financial accounts on the death of one party, and ensure alignment with wills and beneficiary
              designations.</li>
              <li><strong>Dispute resolution</strong>: Consider including a mediation-first clause to
              reduce litigation costs on breakdown.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Financial disclosure at the time of execution is essential. Attach schedules listing each
              party&apos;s assets, liabilities, and income as of the execution date. Courts take non-disclosure
              seriously in s.56(4) applications, and detailed contemporaneous disclosure protects the
              agreement&apos;s enforceability.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Interaction with the Succession Law Reform Act
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Unlike a married spouse, a common-law partner in Ontario has no automatic right to inherit
              from an intestate partner. Intestate succession under Part II of the <em>Succession Law Reform Act</em>
              RSO 1990 c S.26 passes the estate to the married spouse first, then to children — common-law
              partners receive nothing on intestacy regardless of the length of the relationship.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              A common-law partner who was a dependant may make a support claim under Part V of the SLRA,
              but this is a support claim against the estate, not an inheritance right. Partners who want
              to benefit each other on death must execute wills.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Common-law partners frequently come to counsel for cohabitation agreement advice without having
              executed wills. Family lawyers advising cohabiting partners should raise the intersection of
              the cohabitation agreement with estate planning and recommend that both partners execute
              wills and update beneficiary designations to be consistent with the agreement.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Limitation Periods for Common-Law Claims
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Claims for unjust enrichment and constructive trust arising from a common-law relationship
              are governed by the general two-year limitation period under the <em>Limitations Act 2002</em>
              s.4, subject to discoverability under s.5. The two-year clock runs from when the claimant
              knew or ought to have known that the claim arose.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Spousal support claims by common-law partners under the <em>Family Law Act</em> s.33 must
              be brought within two years of the date of separation: s.7(3)(b). Practitioners advising
              clients who separated from a common-law partner some time ago must assess whether the
              limitation period has expired before advising on the viability of an unjust enrichment
              or support claim.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              Practical Implications for Ontario Family Law Practitioners
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Common-law relationships account for a significant and growing proportion of Ontario families.
              Clients presenting for cohabitation agreement advice should be advised clearly about:
            </p>
            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
              <li>The absence of equalization rights and the difference from married spousal rights</li>
              <li>The equitable remedies available on breakdown and their uncertainty compared to the
              statutory equalization formula</li>
              <li>The importance of registering jointly owned property, maintaining separate accounts
              for inherited or gifted funds, and documenting financial contributions</li>
              <li>The need for updated wills, powers of attorney, and beneficiary designations consistent
              with the cohabitation agreement</li>
              <li>The automatic conversion of the cohabitation agreement to a marriage contract on marriage</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Atticus supports Ontario family lawyers managing cohabitation agreement matters with deadline
              tracking, AI document analysis across financial records, LSO By-Law 9 trust accounting for
              retainer management, and full matter management through the platform built for Ontario practice.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Atticus for Ontario Family Lawyers
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Atticus is built for Ontario family law practice — AI document analysis across client financial
                records, limitation period tracking for common-law claims, LSO By-Law 9 compliant trust accounting,
                and full matter management from cohabitation agreement drafting to breakdown proceedings.
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
                  href="/blog/ontario-equalization-of-net-family-property"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Equalization of Net Family Property: Family Law Act s.5, NFP Calculation, and Excluded Property
                </Link>
                <Link
                  href="/blog/ontario-spousal-support"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Spousal Support: SSAG, Entitlement, Duration, and Variation
                </Link>
                <Link
                  href="/blog/ontario-unjust-enrichment"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Unjust Enrichment: Three-Part Test, Juristic Reason, and Constructive Trust
                </Link>
                <Link
                  href="/blog/ontario-family-court-procedure"
                  className="block text-amber-700 hover:text-amber-900 font-medium text-sm"
                >
                  Ontario Family Court Procedure: Forms, Case Conferences, and OCL Reports
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
