import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Construction Law — Construction Act, Liens, and Holdback | Atticus Blog",
  description:
    "Comprehensive guide to Ontario construction law: Construction Act RSO 1990 c C.30 (as amended 2017), holdback obligations, lien registration and perfection, prompt payment, adjudication, and trust obligations for Ontario construction lawyers.",
  openGraph: {
    title: "Ontario Construction Law — Construction Act, Liens, Holdback, and Prompt Payment",
    description:
      "Construction Act RSO 1990, holdback 10%, lien registration timelines, prompt payment 28/35 days, adjudication ODACC, trust provisions, and set-off limitations for Ontario construction practitioners.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-construction-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-construction-law" },
};

export default function OntarioConstructionLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Construction Law — Construction Act, Liens, Holdback, and Prompt Payment",
    description:
      "Construction Act RSO 1990, holdback 10%, lien registration and perfection timelines, prompt payment, adjudication, trust provisions, and set-off for Ontario construction lawyers.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-construction-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-construction-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-yellow-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Construction Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Construction Law — Construction Act, Liens, and Prompt Payment
            </h1>
            <p className="text-slate-300 text-lg">
              The Construction Act RSO 1990 c C.30, holdback obligations, lien registration
              and perfection deadlines, prompt payment, adjudication under ODACC, and trust
              provisions — a guide for Ontario construction and real property lawyers.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>March 2026</span>
              <span>&#8226;</span>
              <span>14 min read</span>
            </div>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">

            <h2>The Construction Act — Overview and 2017 Amendments</h2>
            <p>
              Ontario&apos;s Construction Act RSO 1990 c C.30 (formerly the Construction Lien Act)
              was significantly amended by the Building Ontario Up for Everyone Act (Budget Measures)
              2017 SO 2017 c 23, with the major amendments coming into force on October 1, 2019
              (lien/holdback amendments) and July 1, 2018 (prompt payment and adjudication).
              These reforms represented the most significant overhaul of Ontario construction law
              in decades.
            </p>
            <p>
              The Construction Act governs the right to register a construction lien against the
              interest of an owner, mortgagee, or other person in the premises, holdback
              obligations, prompt payment, adjudication, and trust provisions. The Act applies
              to improvements to land — defined broadly to include all construction, installation,
              alteration, repair, or demolition of any building or structure on land, as well as
              landscaping, planting, and similar operations.
            </p>

            <h2>Holdback Obligations</h2>
            <p>
              The holdback is one of the central mechanisms of the Construction Act. Under s.22,
              every owner, contractor, and subcontractor is required to retain a holdback equal to
              10% of the price of the services or materials provided or placed as the work
              progresses. The holdback must be retained for the purpose of satisfying liens
              registered against the premises.
            </p>
            <p>
              The holdback becomes payable to the contractor 45 days after the &quot;date of
              publication&quot; of a certificate of substantial performance, or 45 days after the
              last day of the period for preserving a lien, if no certificate is published (s.26).
              For subcontractors, the subholdback rules (ss.22-28) create similar obligations
              running down the construction pyramid.
            </p>
            <p>
              The owner is entitled to make deductions from the holdback for liens registered
              against the premises. Lien claimants have a right against the holdback fund as
              security for their lien claims. The holdback mechanism means that unpaid trades
              and suppliers always have at least 10% of the contract price available as potential
              security for their claims.
            </p>

            <h2>Certificate of Substantial Performance</h2>
            <p>
              Substantial performance is defined in Construction Act s.2. A contract is
              substantially performed when: (a) the improvement to be made under that contract
              or subcontract is ready for use or is being used for the intended purpose; and
              (b) the improvement is capable of completion or, where there is a known defect,
              correction at a cost of not more than 3% of the first $500,000 of the contract
              price, 2% of the next $500,000, and 1% of the balance.
            </p>
            <p>
              A certificate of substantial performance (CSP) must be published by the contractor
              in a construction trade newspaper (s.32(1)) within five days of the date of
              substantial performance being determined. The contractor must also give a copy to
              all subcontractors whose liens may be affected. The date of publication of the CSP
              triggers the 60-day period for preservation of liens by subcontractors.
            </p>

            <h2>Lien Preservation and Perfection</h2>
            <p>
              Construction liens in Ontario must be preserved by registration within the applicable
              period, and perfected within 90 days of preservation (or 90 days after the lien
              arose, whichever is earlier). The preservation periods under s.31 are:
            </p>
            <ul>
              <li>
                <strong>General rule:</strong> Within 60 days after the last date that the
                person supplied services or materials to the improvement.
              </li>
              <li>
                <strong>After substantial performance:</strong> Within 45 days after the date
                of publication of a certificate of substantial performance (for the prime
                contractor and all subcontractors).
              </li>
              <li>
                <strong>After contract completion/abandonment:</strong> Within 60 days after
                the date the contract or subcontract is completed, abandoned, or terminated.
              </li>
              <li>
                <strong>Lien on holdback:</strong> A lien on the holdback must be preserved
                within 45 days after publication of the CSP for amounts included in the CSP,
                or within 60 days after the date of completion of the contract for any
                remaining holdback.
              </li>
            </ul>
            <p>
              The lien is registered under the Land Titles Act or Registry Act using a prescribed
              form (Form 1). Registration creates a charge on the estate or interest of the
              owner in the land described in the claim for lien.
            </p>
            <p>
              Perfection requires commencement of an action in the Superior Court of Justice
              within 90 days after the lien is preserved, and registration of a certificate of
              action against the title to the land. An unperfected lien expires. A perfected
              lien cannot be vacated except by payment of the amount or by posting of substitute
              security.
            </p>

            <h2>Prompt Payment</h2>
            <p>
              The 2017 amendments introduced Ontario&apos;s prompt payment regime (Part I.1 of
              the Construction Act, in force July 1, 2018). The prompt payment rules require
              payment within prescribed timeframes running from the date of a &quot;proper
              invoice&quot;:
            </p>
            <ul>
              <li>
                <strong>Owner to contractor:</strong> Within 28 days of receiving a proper
                invoice from the contractor.
              </li>
              <li>
                <strong>Contractor to subcontractor:</strong> Within 7 days of receiving
                payment from the owner (or within 35 days of the contractor submitting the
                proper invoice if the owner pays late).
              </li>
              <li>
                <strong>Subcontractor to sub-subcontractor:</strong> Within 7 days of
                receiving payment from the contractor (or within 42 days of the proper
                invoice submission date if payment is late).
              </li>
            </ul>
            <p>
              A payer who intends to not pay all or part of a proper invoice must provide a
              &quot;notice of non-payment&quot; within 14 days of receiving the invoice (for
              owners) or within 7 days after the last day on which the owner was required to
              pay (for contractors/subcontractors). A non-payment notice must identify the
              amount not being paid and the reason.
            </p>

            <h2>Adjudication</h2>
            <p>
              The 2017 amendments also introduced mandatory adjudication for payment disputes
              under the Construction Act Part II.1. Adjudication is an expedited dispute
              resolution process administered by the Ontario Dispute Adjudication for
              Construction Contracts (ODACC). Any party to a construction contract may refer
              a dispute to adjudication at any time during the project or within 90 days after
              the certification of substantial performance.
            </p>
            <p>
              Adjudicable disputes include amounts payable; non-payment notices; set-off and
              compensation claims; and progress payment disputes. An adjudicator must make a
              determination within 30 days (or longer if agreed). The adjudicator&apos;s
              determination is binding as an interim measure and must be complied with during
              the project. Final resolution of the underlying dispute proceeds through litigation
              or arbitration after project completion.
            </p>

            <h2>Trust Provisions</h2>
            <p>
              The Construction Act Part II (Trust Provisions) creates statutory trusts in the
              construction pyramid. Under s.8, all amounts received by an owner from a
              contractor on account of the contract price (less holdback) are held in trust
              for the benefit of subcontractors and others entitled to a lien. Under s.8.1,
              amounts received by a contractor from an owner are held in trust for subcontractors.
              The trust obligation means that contractors and subcontractors may not apply
              construction trust funds to their own general business purposes — doing so
              constitutes a breach of trust and can give rise to personal liability for
              directing minds.
            </p>
            <p>
              The trust is impressed on specific funds and the law does not require a separate
              trust account. However, the practical effect of the trust obligation is that
              contractors and subcontractors must ensure that money received for a project is
              applied to pay the trades and suppliers on that project before being used for
              other purposes.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-yellow-900 mb-2">
                Manage Construction Matters with Atticus
              </h3>
              <p className="text-yellow-800 mb-4">
                Track lien deadlines, holdback calculations, prompt payment timelines, and
                client trust accounts for Ontario construction law practice — all in one
                platform built for Ontario law firms.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-yellow-700 hover:bg-yellow-800 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Try Atticus Free
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
