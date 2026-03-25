import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Estate Administration: Probate, Wills, and Estate Trustees | Atticus Blog",
  description:
    "A practical guide to Ontario estate administration — probate (certificate of appointment), estate trustee obligations, intestacy under the Succession Law Reform Act, estate litigation, and dependant's relief.",
  openGraph: {
    title: "Ontario Estate Administration: Probate, Wills, and Estate Trustees",
    description:
      "Probate, estate trustee obligations, intestacy, dependant's relief, and estate litigation under Ontario's Succession Law Reform Act.",
    type: "article",
    publishedTime: "2026-03-19",
  },
};

export default function OntarioEstateAdministration() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Estate Administration: Probate, Wills, and Estate Trustees",
    description:
      "A practical guide to Ontario estate administration — probate, estate trustee obligations, intestacy, dependant's relief, and estate litigation.",
    datePublished: "2026-03-19",
    author: {
      "@type": "Organization",
      name: "Atticus",
    },
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700">
              Wills &amp; Estates
            </span>
            <time dateTime="2026-03-19">March 19, 2026</time>
            <span>14 min read</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Ontario Estate Administration: Probate, Wills, and Estate Trustees
          </h1>
          <p className="text-xl text-gray-600">
            Ontario estate administration is governed primarily by the <em>Succession Law
            Reform Act</em>, RSO 1990, c S.26 (SLRA), the <em>Estates Act</em>, RSO 1990,
            c E.21, and the <em>Trustee Act</em>, RSO 1990, c T.23. This guide covers the
            key steps from death to final distribution and the litigation issues that arise.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>Certificate of Appointment of Estate Trustee (Probate)</h2>
          <p>
            A Certificate of Appointment of Estate Trustee (commonly called &ldquo;probate&rdquo;) is
            issued by the Superior Court of Justice under the <em>Estates Act</em> and Rule 74
            of the Rules of Civil Procedure. It confirms the validity of a will and the authority
            of the estate trustee to administer the estate.
          </p>
          <p>
            <strong>When probate is required</strong>: Most financial institutions, land registry
            offices, and investment custodians will not transfer assets to an estate trustee
            without a Certificate. Real property cannot be transferred without probate unless
            there is a surviving joint tenant (who takes by right of survivorship, outside the
            estate). Some smaller financial accounts may be transferred without probate, but
            thresholds vary by institution.
          </p>
          <p>
            <strong>Estate administration tax (EAT)</strong>: Ontario charges estate administration
            tax (formerly called probate fees) on the value of the estate assets passing through
            the estate (i.e., not joint tenancy assets, designated beneficiary assets like RRSPs
            and life insurance, etc.). The rate is:
          </p>
          <ul>
            <li>$0 for the first $50,000 of estate value</li>
            <li>$15 per $1,000 (1.5%) for the value over $50,000</li>
          </ul>
          <p>
            EAT is paid on filing the application. An estate trustee who discovers additional
            assets after the Certificate is issued must file a supplementary estate information
            return and pay additional EAT.
          </p>
          <p>
            <strong>Estate information return</strong>: Since 2015, estate trustees must file an
            Estate Information Return (EIR) with the Ministry of Finance within 180 days of the
            Certificate being issued, itemizing all estate assets with fair market values as at
            date of death. Amended EIRs required if values change. Failure to file or false
            statements attract significant penalties under the <em>Estate Administration Tax
            Act, 1998</em>.
          </p>

          <h2>Will Formalities</h2>
          <p>
            Under SLRA s.4, a will is valid only if:
          </p>
          <ul>
            <li>In writing</li>
            <li>Signed at the end by the testator (or by someone in the testator&apos;s presence and by their direction)</li>
            <li>Signed in the presence of two or more witnesses present at the same time</li>
            <li>Each witness attests and subscribes the will in the presence of the testator</li>
          </ul>
          <p>
            <strong>Holograph wills</strong> (SLRA s.6): A holograph will — entirely in the
            testator&apos;s own handwriting and signed by the testator — is valid without witnesses.
            Holograph wills are frequently challenged on the grounds that portions were typed
            or printed, or that the signature was ambiguous.
          </p>
          <p>
            <strong>Electronic wills</strong>: Temporary COVID regulations permitted electronic
            will signing with remote witnesses. The <em>Succession Law Reform Amendment Act
            (Wills), 2021</em> made electronic wills a permanent feature of Ontario law —
            wills may be made electronically and witnesses may appear by audiovisual technology,
            subject to prescribed conditions.
          </p>
          <p>
            <strong>Testamentary capacity</strong>: The testator must have capacity at the time
            of execution: (1) understand the nature and extent of their property; (2) understand
            the natural objects of their bounty; (3) understand the nature of the act of making
            a will; and (4) be able to combine these elements to form an orderly desire regarding
            the disposition of their property (<em>Banks v Goodfellow</em> (1870), LR 5 QB 549,
            applied in Ontario).
          </p>

          <h2>Intestacy — Distribution Without a Will</h2>
          <p>
            Where a person dies without a valid will (or a will that does not dispose of all
            assets), the SLRA Part II governs distribution:
          </p>
          <ul>
            <li>
              <strong>Spouse only (no children)</strong>: Entire estate to spouse. &ldquo;Spouse&rdquo; under
              the SLRA includes legally married spouses and, since 2021 amendments, common-law
              partners who have cohabited continuously for at least three years (or in a
              relationship of some permanence with a child).
            </li>
            <li>
              <strong>Spouse + children</strong>: Spouse receives the &ldquo;preferential share&rdquo;
              ($350,000 since 2021 amendments — increased from $200,000) plus one-third of the
              remainder if one child, or one-half of the remainder if two or more children.
              Children receive the balance equally.
            </li>
            <li>
              <strong>Children only (no spouse)</strong>: Equally among children (including
              posthumous children). Children of a deceased child take their parent&apos;s share
              by representation (per stirpes distribution).
            </li>
            <li>
              <strong>No spouse or children</strong>: Parents equally; then brothers and sisters;
              then nephews and nieces; then next of kin.
            </li>
            <li>
              <strong>Escheat</strong>: If no next of kin found, the estate escheats to the Crown
              (Ontario) under the <em>Escheats Act, 2015</em>.
            </li>
          </ul>
          <p>
            Note: Common-law partners were not included in the old SLRA intestacy rules. The 2021
            amendments were a major change for common-law families in Ontario.
          </p>

          <h2>Estate Trustee Duties</h2>
          <p>
            The estate trustee (executor) has significant obligations:
          </p>
          <ul>
            <li>
              <strong>Duty to gather and protect assets</strong>: Take control of all estate
              assets promptly; preserve their value; insure property; collect debts owing to
              the estate.
            </li>
            <li>
              <strong>Duty to pay debts</strong>: Pay valid creditor claims before distributing
              to beneficiaries. Priority of claims: funeral expenses, secured debts, Crown claims,
              general creditors. Estate trustees who distribute before paying valid debts are
              personally liable to creditors.
            </li>
            <li>
              <strong>Duty to account</strong>: Pass accounts formally if required or if a
              beneficiary demands it. Formal passing of accounts is a court proceeding under
              Rule 74.18 where the estate trustee presents accounts and any interested person
              may object.
            </li>
            <li>
              <strong>Duty to invest prudently</strong>: Under the Trustee Act s.27, the prudent
              investor standard — the estate trustee must exercise the care, skill, diligence, and
              judgment that a prudent investor would exercise in managing an investment portfolio.
            </li>
            <li>
              <strong>Trustee compensation</strong>: Trustees are entitled to fair and reasonable
              compensation (Trustee Act s.61). The traditional 5% guideline (2.5% capital receipts,
              2.5% capital disbursements, 2/5ths of 1% of annual average market value of assets as
              care and management fee) is a rough guide, not a fixed entitlement.
            </li>
          </ul>

          <h2>Dependant&apos;s Relief</h2>
          <p>
            Part V of the SLRA allows a court to order support out of an estate for a &ldquo;dependant&rdquo;
            who was not adequately provided for by the deceased&apos;s will or by the intestacy rules:
          </p>
          <p>
            <strong>Who is a &ldquo;dependant&rdquo;</strong> (SLRA s.57): A spouse, parent, child, or
            sibling of the deceased, to whom the deceased was providing support or was under
            a legal obligation to provide support immediately before death.
          </p>
          <p>
            <strong>Application deadline</strong>: Application must be commenced within 6 months
            of the Certificate of Appointment being issued (SLRA s.61(1)). This is a hard
            limitation period — courts have little discretion to extend it.
          </p>
          <p>
            <strong>Factors considered</strong> (SLRA s.62): The court considers the nature and
            duration of the relationship, the dependant&apos;s current and future needs and means,
            the deceased&apos;s legal obligations to the dependant, the testator&apos;s reasons for not
            providing support, and the competing interests of other beneficiaries.
          </p>
          <p>
            <strong>Common-law partners</strong>: The 2021 SLRA amendments added common-law
            partners as &ldquo;spouses&rdquo; for dependant&apos;s relief purposes — an important change for
            long-term common-law relationships.
          </p>

          <h2>Will Challenges</h2>
          <p>
            The most common grounds to challenge a will&apos;s validity:
          </p>
          <ul>
            <li>
              <strong>Lack of testamentary capacity</strong>: The testator lacked capacity at
              time of execution (Banks v Goodfellow test). Medical evidence and contemporaneous
              solicitor&apos;s notes of the preparation meeting are key.
            </li>
            <li>
              <strong>Undue influence</strong>: The testator&apos;s free will was overcome by
              another person. The test is whether the influence amounted to coercion —
              mere persuasion, family pressure, or natural affection is not undue influence.
              Presumption of undue influence arises where the beneficiary was in a position of
              dominance over the testator.
            </li>
            <li>
              <strong>Fraud</strong>: The will was procured by fraudulent misrepresentations
              that induced the testator to make dispositions they would not otherwise have made.
            </li>
            <li>
              <strong>Forgery</strong>: The will or testator&apos;s signature is forged.
            </li>
            <li>
              <strong>Formal invalidity</strong>: Failure to comply with the SLRA will formalities
              (signature, witnesses). Courts have discretion under SLRA s.21.1 (enacted 2021) to
              cure a formal deficiency if the court is satisfied the document reflects the
              testamentary intentions of the deceased — a significant new power.
            </li>
          </ul>
          <p>
            <strong>The Golden Rule</strong>: Where a testator is elderly, ill, or otherwise
            vulnerable, the solicitor preparing the will should obtain a medical assessment of
            capacity and document instructions carefully. Failing to follow the Golden Rule does
            not automatically invalidate the will but creates evidentiary problems in litigation.
          </p>

          <h2>Estate Litigation Limitation Periods</h2>
          <ul>
            <li><strong>Dependant&apos;s relief</strong>: 6 months from Certificate of Appointment</li>
            <li><strong>Will challenge (declaration of invalidity)</strong>: Generally 2 years from discovery (Limitations Act 2002), but the discoverability rule means the period may not run until the challenger knew or ought to have known of the claim</li>
            <li><strong>Breach of fiduciary duty / passing of accounts</strong>: 2-year limitation, but courts retain equitable jurisdiction for passing of accounts claims</li>
          </ul>

          <h2>Summary</h2>
          <p>
            Ontario estate administration involves strict procedural requirements — probate
            application, estate administration tax, estate information return — and substantive
            duties of the estate trustee. The 2021 SLRA amendments significantly changed the
            intestacy and dependant&apos;s relief rules by including common-law spouses, increased
            the preferential share to $350,000, and introduced the curative provision for
            formal defects in wills. Practitioners advising estate trustees or challenging
            wills must carefully track the 6-month dependant&apos;s relief deadline and document
            capacity assessments thoroughly.
          </p>
          <p>
            Atticus helps Ontario wills and estates lawyers track probate deadlines, manage
            multiple estate matters, and stay organized through estate administration — with
            LSO-compliant trust accounting for estate trust funds.
          </p>
        </div>

        <div className="mt-12 rounded-xl bg-rose-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Manage Ontario Estate Files with Atticus
          </h3>
          <p className="mb-6 text-gray-600">
            Deadline tracking, estate trust accounting, matter management, and AI document analysis
            — built for Ontario wills and estates lawyers.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-rose-600 px-6 py-3 font-semibold text-white hover:bg-rose-700"
          >
            Start Free Trial
          </a>
        </div>
      </article>
    </>
  );
}
