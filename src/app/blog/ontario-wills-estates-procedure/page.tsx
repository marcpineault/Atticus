import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Wills and Estate Administration Guide 2024 | Probate, Certificate of Appointment, Passing of Accounts",
  description:
    "Complete guide to Ontario estate administration: Estates Act requirements, probate applications, Certificate of Appointment of Estate Trustee, passing of accounts, estate trustee duties, dependant relief claims, and SLRA provisions for Ontario estates lawyers.",
  openGraph: {
    title: "Ontario Wills and Estate Administration Guide 2024 | Probate, Certificate of Appointment, Passing of Accounts",
    description:
      "Ontario estate administration procedure: probate, Certificate of Appointment of Estate Trustee, passing of accounts, dependant relief, and SLRA for estates lawyers.",
    url: "https://getatticus.ca/blog/ontario-wills-estates-procedure",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-wills-estates-procedure" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Wills and Estate Administration Guide 2024: Probate, Certificate of Appointment, and Passing of Accounts",
  "description": "Complete guide to Ontario estate administration procedure including probate applications, Certificate of Appointment of Estate Trustee, passing of accounts under the Estates Act, and SLRA dependant support claims.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01",
  "url": "https://getatticus.ca/blog/ontario-wills-estates-procedure",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-wills-estates-procedure"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When is probate required in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Probate (Certificate of Appointment of Estate Trustee) is required in Ontario when financial institutions, land registries, or third parties require court-certified authority before releasing estate assets. Rule 74.04 governs the application. Estate Administration Tax applies at $15 per $1,000 of estate value over $50,000. Small estates under $150,000 may use the simplified Small Estate Certificate process under Rule 74.1."
      }
    },
    {
      "@type": "Question",
      "name": "What are the estate trustee's duties in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Ontario estate trustee must: gather and protect estate assets; pay valid debts, taxes, and funeral expenses; file the deceased's final T1 return and an estate T3 return if needed; distribute the estate per the will or intestacy rules under the Succession Law Reform Act (SLRA); keep detailed accounts of all receipts and disbursements; and pass accounts in court if required by a beneficiary or ordered by the court under Rule 74.15 and the Estates Act s.49."
      }
    },
    {
      "@type": "Question",
      "name": "How does the dependant support claim work under the SLRA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Part V of the Succession Law Reform Act allows a deceased's dependants (spouse, children, parents, siblings if financially dependent) to apply within 6 months of probate for support from the estate. The court considers the deceased's legal obligation to support the dependant and the estate's ability to pay. The 6-month limitation from the date of the Certificate of Appointment is strict — delay can be fatal to the claim. Under SLRA s.62, the court considers the dependant's current means, the deceased's obligation, and competing claims."
      }
    },
    {
      "@type": "Question",
      "name": "What is the passing of accounts process in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Passing of accounts is the court approval process for an estate trustee's administration under Rule 74.15-74.18 and the Estates Act. The trustee prepares detailed accounts showing all receipts, disbursements, investments, and proposed compensation. Beneficiaries receive notice and may file objections (notices of objection). A hearing judge reviews the accounts and may approve trustee compensation (usually 2.5% on capital and income receipts, 2.5% on capital and income disbursements under Re Toronto General Trusts). Contested passings proceed as full hearings."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to Ontario estates without a will (intestacy)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario intestacy is governed by Part II of the Succession Law Reform Act. A surviving spouse receives a preferential share ($350,000) and then shares the residue with the deceased's children. Under Ontario&apos;s current SLRA, only married spouses (not common-law partners) receive intestate entitlement — a critical point for common-law spouses who may need to bring a dependant support claim instead. Children share equally; if a child predeceased, that child&apos;s descendants take by representation."
      }
    }
  ]
}`;

export default function OntarioWillsEstatesProcedurePage() {
  return (
    <>
      <Script id="ontario-wills-estates-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-wills-estates-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Estate Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Wills and Estate Administration Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Probate, Certificate of Appointment of Estate Trustee, passing of accounts, SLRA dependant support, and intestacy — the complete procedural guide for Ontario estates lawyers.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>14 min read</span>
              <span>•</span>
              <span>Estate Law</span>
            </div>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">

            <h2>The Estate Administration Framework in Ontario</h2>
            <p>
              Ontario estate administration is governed primarily by the <strong>Succession Law Reform Act (SLRA)</strong>, the <strong>Estates Act</strong>, the <strong>Trustee Act</strong>, the <strong>Estate Administration Tax Act</strong>, and Rules 74 and 75 of the <em>Rules of Civil Procedure</em>. The estate trustee (formerly called executor or administrator) holds a fiduciary role — they must act in the best interests of the estate and its beneficiaries, not their own.
            </p>
            <p>
              The core procedural sequence in Ontario estate administration is: (1) locate the will and qualify as estate trustee; (2) obtain probate if required; (3) gather estate assets; (4) pay debts, taxes, and claims; (5) distribute the estate; and (6) pass accounts if required or challenged.
            </p>

            <h2>Will Validity and Formal Requirements</h2>
            <p>
              A formal will in Ontario must comply with SLRA s.4: in writing, signed at the end by the testator in the presence of two witnesses, and signed by two witnesses in each other&apos;s and the testator&apos;s presence. A witness who is also a beneficiary does not invalidate the will, but the witness&apos;s bequest is void under SLRA s.12.
            </p>
            <p>
              <strong>Holograph wills</strong> under SLRA s.6 are entirely in the testator&apos;s own handwriting and signed — no witnesses required. They are valid but more frequently contested on grounds of testamentary capacity or undue influence.
            </p>
            <p>
              <strong>International wills</strong> (SLRA s.42) comply with the Convention Providing a Uniform Law on the Form of an International Will — useful for testators with assets in multiple jurisdictions.
            </p>

            <h3>Testamentary Capacity</h3>
            <p>
              The <em>Banks v Goodfellow</em> (1870) test governs testamentary capacity in Ontario: the testator must understand (a) the nature of making a will; (b) the nature and extent of their property; (c) the natural objects of their bounty; and (d) the act of making a will must be free of mental disorder affecting the dispositions. Medical evidence and witness accounts of the testator&apos;s condition at execution are central to capacity challenges.
            </p>
            <p>
              <strong>Undue influence</strong> requires more than mere persuasion — the influence must have overpowered the testator&apos;s free will. Courts apply a civil burden (balance of probabilities). Unlike gifts inter vivos, there is no presumption of undue influence in will-making — the party alleging it bears the burden.
            </p>

            <h2>Probate in Ontario: The Certificate of Appointment</h2>
            <p>
              <strong>Probate</strong> in Ontario is the court process under Rule 74 of the <em>Rules of Civil Procedure</em> by which the Superior Court of Justice certifies the will and the estate trustee&apos;s authority. The result is a <strong>Certificate of Appointment of Estate Trustee with (or without) a Will</strong>.
            </p>

            <h3>When Probate is Required</h3>
            <p>
              Probate is required whenever a third party — a bank, land registry, brokerage, or life insurer — requires court-certified authority before releasing assets. Key triggers include:
            </p>
            <ul>
              <li>Real property registered in the deceased&apos;s name (Land Titles requires a Certificate for dealings)</li>
              <li>Bank accounts, investment accounts, and securities without designated beneficiaries</li>
              <li>RRSP/RRIF/TFSA without beneficiary designations (estate flows through probate)</li>
              <li>Shares in private corporations (directors typically require probate before transfer)</li>
            </ul>
            <p>
              Assets with named beneficiaries (life insurance, RRSPs, TFSAs with beneficiary designations, joint property with right of survivorship) pass outside the estate and outside probate.
            </p>

            <h3>Estate Administration Tax (EAT)</h3>
            <p>
              Ontario&apos;s Estate Administration Tax (formerly called probate fees) applies at <strong>$15 per $1,000</strong> of estate value exceeding $50,000 (no tax on the first $50,000). The estate trustee must file an <strong>Estate Information Return</strong> within 180 days of the Certificate using Form 1 under the Estate Administration Tax Act — verifying the estate values declared in the probate application. Understating estate value is an offence.
            </p>

            <h3>Probate Application Under Rule 74</h3>
            <p>
              The application for a Certificate of Appointment of Estate Trustee with a Will (Form 74.4) requires: the original will, an affidavit of execution, the proposed estate trustee&apos;s affidavit (Form 74.8), a list of beneficiaries and their addresses, proof of death, and payment of EAT. The court does not investigate the merits of the will — it certifies the formal requirements are met and the applicant is entitled to be estate trustee.
            </p>
            <p>
              <strong>Small Estate Certificate</strong> (Rule 74.1): Estates with assets of $150,000 or less may use a simplified small estate application process — a faster, lower-cost alternative to full probate for qualifying estates.
            </p>

            <h2>Estate Trustee Duties and Obligations</h2>
            <p>
              An Ontario estate trustee is a fiduciary. Core duties include:
            </p>

            <h3>1. Asset Gathering and Protection</h3>
            <p>
              The estate trustee must immediately identify, secure, and protect estate assets — including cancelling credit cards, notifying financial institutions, and protecting real property. Insurance policies must be maintained; vacant property creates significant liability if coverage lapses.
            </p>

            <h3>2. Debt Payment Priority</h3>
            <p>
              The estate trustee must pay debts before distributing to beneficiaries. Ontario priority is roughly: (1) secured creditors against their security; (2) funeral expenses; (3) costs of administration; (4) preferred creditors (including CRA for certain taxes); (5) unsecured creditors; (6) dependant support claims (which may take priority over legacies if the estate is insufficient). Personal liability attaches if the trustee distributes assets prematurely and a creditor remains unpaid.
            </p>

            <h3>3. Tax Filings</h3>
            <p>
              The estate trustee must file: (a) the deceased&apos;s final T1 return (to December 31 of death year, or date of death if after June 15); (b) optional T1 returns for rights or things and testamentary trust income; (c) a T3 Trust Income Tax return for any trust year if the estate earns income; and (d) a clearance certificate from CRA before final distribution — without it, the trustee may be personally liable for CRA assessments after distribution.
            </p>

            <h3>4. Keeping Accounts</h3>
            <p>
              Detailed accounts of all receipts and disbursements are mandatory — these will be the basis for passing accounts if required. A trustee who fails to keep proper accounts will face difficulty justifying compensation and may be ordered to personally bear costs.
            </p>

            <h2>Passing of Accounts in Ontario</h2>
            <p>
              Passing of accounts is the court-supervised review of the estate trustee&apos;s administration under Rules 74.15 to 74.18 and Estates Act s.49. Any interested person — a beneficiary, creditor, or the Public Guardian and Trustee on behalf of an incapable person — can compel a passing of accounts.
            </p>

            <h3>The Accounts</h3>
            <p>
              The accounts (Form 74.43) present: (a) all capital receipts; (b) all capital disbursements; (c) all income received; (d) all income disbursements; (e) investments held; (f) proposed compensation; and (g) a statement of assets remaining for distribution. Accounts must be comprehensive — omissions invite objections.
            </p>

            <h3>Trustee Compensation</h3>
            <p>
              Ontario courts traditionally allow estate trustee compensation calculated as <strong>2.5% on capital receipts, 2.5% on capital disbursements, 2.5% on income receipts, and 2.5% on income disbursements</strong> — the five-percent guideline from <em>Re Toronto General Trusts Corp v Central Ontario Railway</em> (1905). Modern courts apply a more holistic approach considering the complexity of the estate, the skill required, time spent, and results achieved. The will may specify compensation — courts generally follow those provisions.
            </p>

            <h3>Objections and Contested Passings</h3>
            <p>
              A beneficiary wishing to challenge the accounts files a Notice of Objection (Form 74.45.1) within 35 days of service of the accounts. Grounds include improper asset valuations, unauthorized expenditures, improper investments, breach of fiduciary duty, and excessive compensation. A contested passing of accounts proceeds to a full hearing before a judge — effectively estate litigation.
            </p>

            <h2>SLRA Dependant Support Claims</h2>
            <p>
              Part V of the <strong>Succession Law Reform Act</strong> allows dependants of a deceased Ontario resident to seek support from the estate regardless of the will&apos;s terms or intestacy rules. This is a critical limitation on testamentary freedom in Ontario.
            </p>

            <h3>Who is a Dependant?</h3>
            <p>
              SLRA s.57 defines dependant as: the deceased&apos;s spouse (married or same-sex); a parent, child, or sibling of the deceased who was financially dependent on the deceased at death. Common-law partners (not married) are included as spouses for dependant support purposes under the Family Law Act definition incorporated into the SLRA.
            </p>

            <h3>The 6-Month Limitation</h3>
            <p>
              A dependant support application must be brought within <strong>6 months from the date the Certificate of Appointment is issued</strong> (SLRA s.61(1)). This is a strict limitation — courts have very limited discretion to extend it. Missing this deadline is often fatal to a dependant&apos;s claim, making early identification of potential dependants essential for estate trustees advising beneficiaries.
            </p>

            <h3>Court&apos;s Approach</h3>
            <p>
              Under SLRA s.62, courts consider: (a) the deceased&apos;s legal obligation to support the dependant; (b) the dependant&apos;s current circumstances and needs; (c) the estate&apos;s size; (d) competing beneficiary claims; (e) corollary relief in any family law proceeding; and (f) agreements the deceased entered. Support may be ordered as a lump sum or periodic payments charged against the estate.
            </p>

            <h2>Intestacy Under the SLRA</h2>
            <p>
              When a person dies without a valid will, or with a will that does not fully dispose of the estate, Part II of the SLRA governs. The <strong>preferential share</strong> for a surviving married spouse is currently <strong>$350,000</strong> (updated by regulation). After the preferential share:
            </p>
            <ul>
              <li>If the deceased leaves a spouse and no children: spouse takes everything</li>
              <li>If spouse and one child: residue divided equally (50/50)</li>
              <li>If spouse and two or more children: spouse takes one-third, children share two-thirds equally</li>
              <li>No surviving spouse: estate distributed to children equally</li>
            </ul>
            <p>
              <strong>Critical point for common-law spouses</strong>: Ontario&apos;s SLRA intestacy rules only entitle <em>married</em> spouses to the intestate share. A common-law partner of any length gets nothing on intestacy (unless jointly titled assets exist). Common-law partners may bring a dependant support claim or an unjust enrichment claim — but have no automatic intestate entitlement. This is one of the most significant estate planning vulnerabilities for common-law couples in Ontario.
            </p>

            <h2>Estate Administration in Practice: Key Limitation Periods</h2>
            <p>
              Ontario estates lawyers must track multiple overlapping time limits:
            </p>
            <ul>
              <li><strong>Dependant support claim</strong>: 6 months from Certificate of Appointment (SLRA s.61)</li>
              <li><strong>Estate Information Return</strong>: 180 days from Certificate of Appointment</li>
              <li><strong>CRA clearance certificate</strong>: Request before distributing — CRA has 3 years to assess after filing but can assess beyond that for fraud or misrepresentation</li>
              <li><strong>Limitation on debts</strong>: General 2-year Ontario limitation period applies to estate claims by creditors (Limitations Act 2002 s.4)</li>
              <li><strong>Will challenges</strong>: No specific limitation period in Ontario — but delay in bringing a contested probate application (Rule 75) can bar the challenge on laches grounds</li>
            </ul>

            <h2>Atticus for Ontario Estates Lawyers</h2>
            <p>
              Atticus is built for Ontario solo and small law firms, including estates practices. The platform manages client intake, matter management, trust accounting (Law Society By-Law 9 compliant), HST billing, and AI document analysis — in one platform, at $149 CAD per lawyer per month.
            </p>
            <p>
              For estates lawyers, Atticus tracks limitation periods (including the 6-month SLRA dependant support window), manages multiple estate matters simultaneously, and uses Canadian AI to extract key dates and parties from wills, deeds, and estate documents — reducing the manual administrative load in estate administration files.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Manage Ontario Estate Files with Atticus</h3>
              <p className="text-slate-700 mb-4">
                Track limitation periods, manage trust accounts, and handle HST billing for your estates practice — all in one Ontario-built platform.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>When is probate required in Ontario?</h3>
            <p>
              Probate (Certificate of Appointment of Estate Trustee) is required in Ontario when financial institutions, land registries, or third parties require court-certified authority before releasing estate assets. Rule 74.04 governs the application. Estate Administration Tax applies at $15 per $1,000 of estate value over $50,000. Small estates under $150,000 may use the simplified Small Estate Certificate process under Rule 74.1.
            </p>

            <h3>What are the estate trustee&apos;s duties in Ontario?</h3>
            <p>
              An Ontario estate trustee must: gather and protect estate assets; pay valid debts, taxes, and funeral expenses; file the deceased&apos;s final T1 return and an estate T3 return if needed; distribute the estate per the will or intestacy rules under the SLRA; keep detailed accounts of all receipts and disbursements; and pass accounts in court if required.
            </p>

            <h3>How does the dependant support claim work under the SLRA?</h3>
            <p>
              Part V of the Succession Law Reform Act allows a deceased&apos;s dependants to apply within 6 months of the Certificate of Appointment for support from the estate. The court considers the deceased&apos;s legal obligation to support the dependant and the estate&apos;s ability to pay. The 6-month limitation is strict — delay can be fatal to the claim.
            </p>

            <h3>What is the passing of accounts process in Ontario?</h3>
            <p>
              Passing of accounts is the court approval process for an estate trustee&apos;s administration under Rule 74.15-74.18. The trustee prepares detailed accounts. Beneficiaries receive notice and may file objections. A judge reviews the accounts and may approve trustee compensation (usually 2.5% on capital and income receipts and disbursements under <em>Re Toronto General Trusts</em>).
            </p>

            <h3>What happens to Ontario estates without a will?</h3>
            <p>
              Ontario intestacy is governed by Part II of the SLRA. A surviving married spouse receives a preferential share ($350,000) then shares the residue with the deceased&apos;s children. Common-law spouses receive nothing on intestacy under Ontario&apos;s SLRA — they must rely on dependant support claims or unjust enrichment.
            </p>

          </div>
        </article>

        <section className="py-12 px-6 border-t border-slate-100 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Ontario Law Resources</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-elder-law", label: "Ontario Elder Law Guide" },
                { href: "/blog/ontario-corporate-tax", label: "Ontario Corporate Tax Guide" },
                { href: "/blog/ontario-pension-benefits", label: "Ontario Pension Benefits Guide" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
                { href: "/ontario-wills-estate-lawyer", label: "Atticus for Estate Lawyers" },
                { href: "/blog/ontario-solicitor-client-privilege", label: "Solicitor-Client Privilege Guide" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-amber-700 hover:text-amber-900 font-medium underline underline-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
