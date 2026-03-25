import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Construction Lien Law: Construction Act Guide for Lawyers | Atticus",
  description:
    "A practical guide to Ontario construction lien law under the Construction Act, RSO 1990, c C.30 as amended by Bill 142 (2017). Covers lien rights, holdback obligations, prompt payment, adjudication, and preservation and perfection deadlines.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-construction-lien" },
  openGraph: {
    title: "Ontario Construction Lien Law: Construction Act Guide | Atticus",
    description:
      "Complete reference for Ontario lawyers on construction liens — holdback, lien preservation and perfection deadlines, prompt payment, and the new adjudication regime.",
    url: "https://getatticus.ca/blog/ontario-construction-lien",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Construction Lien Law: Construction Act Guide for Lawyers",
  description: "A practical guide to Ontario construction lien law under the Construction Act.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus" },
  datePublished: "2025-11-01",
  url: "https://getatticus.ca/blog/ontario-construction-lien",
};

const deadlines = [
  ["Subcontractor/supplier lien preservation", "60 days after last supply of services or materials", "s. 31(2) Construction Act"],
  ["General contractor lien preservation", "60 days after last supply or substantial performance", "s. 31(2)"],
  ["Lien perfection (action + registration)", "90 days after preservation (lien expiry if not perfected)", "s. 36(1)"],
  ["Prompt payment: owner to contractor", "28 days after proper invoice", "s. 6.4(1)"],
  ["Prompt payment: contractor to subcontractor", "7 days after owner payment", "s. 6.5(1)"],
  ["Notice of non-payment", "14 days after payment due date", "s. 6.6(1)"],
  ["Adjudication notice", "After notice of non-payment is given", "s. 13.5"],
  ["Adjudicator decision", "Within 30 days of referral (extendable)", "s. 13.12"],
];

export default function ConstructionLienPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-slate-900 text-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</Link>
              <span className="text-slate-600">&#8250;</span>
              <span className="text-slate-400 text-sm">Construction Law</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Ontario Construction Lien Law: A Practical Guide to the Construction Act
            </h1>
            <p className="text-slate-300 text-lg">
              A complete reference for Ontario construction lawyers &mdash; lien rights, holdback
              obligations, preservation and perfection deadlines, prompt payment, and the
              adjudication regime introduced by Bill 142 (2017).
            </p>
            <p className="text-slate-500 text-sm mt-4">Last updated: November 2025 &middot; 14 min read</p>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Construction Act: A Major 2017 Overhaul</h2>
              <p>
                Ontario&apos;s construction lien regime was fundamentally modernized by Bill 142
                (Construction Lien Amendment Act, 2017), which amended and renamed the former
                <em> Construction Lien Act</em> as the <em>Construction Act</em>, RSO 1990, c C.30.
                The changes, which came into force in stages between 2018 and 2019 (prompt payment
                and adjudication applying to contracts entered into on or after October 1, 2019),
                introduced two significant new regimes alongside the existing lien framework:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-1">
                <li><strong>Prompt payment</strong> &mdash; mandatory payment timelines running down the construction pyramid;</li>
                <li><strong>Adjudication</strong> &mdash; a fast-track dispute resolution mechanism for payment disputes during an ongoing project.</li>
              </ul>
              <p className="mt-3">
                For Ontario construction lawyers, mastery of both the traditional lien regime and
                the new prompt payment and adjudication framework is now essential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Has Lien Rights?</h2>
              <p>
                Section 14 of the Construction Act grants lien rights to any person who has supplied
                services or materials to an improvement. This includes contractors, subcontractors,
                suppliers of materials, equipment lessors, and workers. Professionals (engineers,
                architects) who supply services for an improvement also have lien rights.
              </p>
              <p className="mt-3">
                Lien rights attach to the owner&apos;s interest in the premises on which the improvement
                is being made. Where the owner does not own the land (e.g., leasehold improvements),
                the lien attaches to the leasehold interest.
              </p>
              <p className="mt-3">
                <strong>Crown contracts:</strong> The lien regime applies differently to contracts
                with the Crown (provincial government). The Crown&apos;s interest in land cannot be the
                subject of a lien, but holdback obligations and the prompt payment regime apply
                to Crown construction contracts under Part IV of the Act.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Holdback Obligations</h2>
              <p>
                Section 22 of the Construction Act requires every owner to retain a holdback of
                <strong> 10%</strong> of the price of services or materials supplied. The holdback
                is not discretionary &mdash; it is a statutory trust obligation. Owners who release
                holdback prematurely are personally liable to lien claimants up to the amount
                improperly released.
              </p>
              <p className="mt-3">
                Key holdback rules:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>
                  <strong>Basic holdback (s. 22):</strong> 10% of each payment to the contractor.
                  Must be retained until the lien period expires (60 days after substantial performance
                  or last supply, whichever is later) without lien registration.
                </li>
                <li>
                  <strong>Finishing holdback (s. 23):</strong> Once basic holdback is released, an
                  additional holdback on finishing work must be retained for a further 45 days after
                  the certificate of substantial performance.
                </li>
                <li>
                  <strong>Substantial performance (s. 2):</strong> The contract is substantially
                  performed when the improvement is ready for its intended use or the remaining
                  work constitutes not more than 3% of the first $500,000, 2% of the next $500,000,
                  and 1% of the balance.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Critical Deadlines Reference</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Deadline</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Timeline</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Authority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deadlines.map(([deadline, timeline, auth]) => (
                      <tr key={deadline} className="odd:bg-white even:bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2 font-medium">{deadline}</td>
                        <td className="border border-slate-200 px-3 py-2">{timeline}</td>
                        <td className="border border-slate-200 px-3 py-2 font-mono text-xs">{auth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Lien Preservation and Perfection</h2>
              <p>
                Failure to preserve and perfect a lien within the statutory time periods results in
                the lien expiring. These deadlines are strict &mdash; courts have very limited
                jurisdiction to extend them.
              </p>
              <p className="mt-3">
                <strong>Preservation (s. 31):</strong> A lien must be preserved by registering a
                claim for lien on title to the premises within 60 days after the lien claimant last
                supplied services or materials to the improvement. For a general contractor, the
                period is 60 days after the date of last supply or after the date of substantial
                performance, whichever is earlier.
              </p>
              <p className="mt-3">
                <strong>Perfection (s. 36):</strong> A preserved lien expires 90 days after the
                date of preservation unless the lien is perfected. Perfection requires both:
                (1) commencement of an action to enforce the lien; and (2) registration of a
                certificate of action on title.
              </p>
              <p className="mt-3">
                Practical note: construction lien actions are commenced in the Superior Court of
                Justice. Ontario Regulation 302/18 governs the forms. The action naming all lien
                claimants must be commenced within the 90-day perfection window &mdash; missing this
                deadline extinguishes the lien entirely.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Prompt Payment</h2>
              <p>
                The prompt payment regime (ss. 6.1&ndash;6.9, in force October 1, 2019) requires
                payment to flow down the construction pyramid on strict timelines:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>
                  <strong>Owner to contractor:</strong> 28 days after receipt of a proper invoice.
                  If the owner disputes the invoice, a notice of non-payment must be served within
                  14 days of the invoice due date specifying the amount in dispute and the reasons.
                </li>
                <li>
                  <strong>Contractor to subcontractor:</strong> 7 days after the owner pays the
                  contractor. If the contractor has not received payment from the owner on the
                  disputed portion, the contractor must pay the undisputed amount and serve a notice
                  of non-payment within 7 days of receiving the owner&apos;s notice.
                </li>
                <li>
                  <strong>Interest:</strong> Unpaid amounts bear interest at the prejudgment interest
                  rate prescribed by the Courts of Justice Act.
                </li>
              </ul>
              <p className="mt-3">
                A &quot;proper invoice&quot; under s. 6.1 must contain specific information including the
                contractor&apos;s name, address, invoice date, contract number, period of work, and
                description of services. Courts and adjudicators have held that a technically
                deficient invoice does not start the prompt payment clock — advise owner clients
                to issue a deficiency notice promptly rather than simply withholding payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Adjudication</h2>
              <p>
                Ontario&apos;s construction adjudication regime (Part II.1, ss. 13.1&ndash;13.23, in force
                October 1, 2019) allows a party to refer a &quot;matter in dispute&quot; to a licensed
                adjudicator during an ongoing contract.
              </p>
              <p className="mt-3">
                <strong>What can be adjudicated (s. 13.5):</strong>
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Valuation of services or materials;</li>
                <li>Payment under a contract, including prompt payment disputes;</li>
                <li>Disputes about amounts retained as holdback;</li>
                <li>Non-payment of holdback;</li>
                <li>Any other matter the parties agree to adjudicate.</li>
              </ul>
              <p className="mt-3">
                <strong>Process:</strong> A party delivers a notice of adjudication; the other party
                has 4 days to participate or the adjudicator proceeds on default. The adjudicator
                must render a decision within 30 days of the referral (extendable by consent).
                Adjudication decisions are binding and immediately enforceable pending final
                resolution of the underlying dispute.
              </p>
              <p className="mt-3">
                <strong>Adjudicators</strong> are licensed by Ontario&apos;s authorized nominating
                authority (currently the Ontario Dispute Adjudication for Construction Contracts,
                ODACC). A party may challenge an adjudicator&apos;s decision in the Superior Court
                only on very limited grounds (fraud, breach of natural justice).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Practical Tips for Ontario Construction Lawyers</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Preservation deadlines are absolute — calendar 60 days from every last-supply date on every construction file immediately upon retainer.</li>
                <li>For subcontractors, the last supply date may differ from the general contractor&apos;s — get delivery records and site attendance logs on intake.</li>
                <li>Prompt payment and adjudication apply only to contracts entered into on or after October 1, 2019. Always confirm the contract date before advising on which regime applies.</li>
                <li>A notice of non-payment under the prompt payment regime is a prerequisite to triggering adjudication — missing this step can defeat a payment claim.</li>
                <li>Holdback claims survive a contractor&apos;s bankruptcy in certain circumstances &mdash; advise subcontractor clients to register liens quickly when a general contractor becomes financially distressed.</li>
              </ul>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-blue-900 mb-2">Manage Construction Files with Atticus</h3>
              <p className="text-blue-800 text-sm mb-4">
                Atticus tracks lien preservation and perfection deadlines, extracts key dates from
                contracts and invoices, and organizes your Ontario construction law files with
                AI-powered document intelligence.
              </p>
              <Link href="/sign-up" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors inline-block">
                Start Free Trial
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
