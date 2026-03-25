import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Construction Liens Guide 2024: Construction Act, Holdbacks, and Prompt Payment",
  description:
    "Complete guide to Ontario construction liens under the Construction Act: lien rights and timelines (45-day preservation, 90-day perfection), holdback obligations (10% mandatory holdback), trust provisions, prompt payment and adjudication, lien discharge and vacating procedures for Ontario construction lawyers.",
  openGraph: {
    title: "Ontario Construction Liens Guide 2024: Construction Act, Holdbacks, and Prompt Payment",
    description:
      "Ontario Construction Act lien rights, 45-day preservation and 90-day perfection, 10% holdback, prompt payment adjudication, and lien discharge for Ontario construction lawyers.",
    url: "https://getatticus.ca/blog/ontario-construction-liens",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-construction-liens" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Construction Liens Guide 2024: Construction Act, Holdbacks, and Prompt Payment",
  "description": "Complete guide to Ontario construction liens: lien rights, holdback obligations, prompt payment, trust provisions, and lien discharge under the Construction Act.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-construction-liens",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-construction-liens"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the deadline to preserve a construction lien in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Construction Act s.31, a lien must be preserved (registered on title or filed with court) within 45 days of the date of last supply of services or materials to the improvement (for subcontractors and suppliers) or within 45 days of publication of a certificate of substantial performance (for prime contractors). Missing the 45-day preservation deadline extinguishes the lien right."
      }
    },
    {
      "@type": "Question",
      "name": "What is the mandatory holdback requirement under the Ontario Construction Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Construction Act s.22, every payer (owner, prime contractor, subcontractor) must hold back 10% of the price of services and materials supplied under a contract or subcontract. The holdback is retained for the applicable lien period after publication of a certificate of substantial performance. The holdback fund is available to satisfy valid liens. Failure to maintain holdback makes the payer personally liable to lien claimants up to the holdback amount."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Ontario prompt payment regime work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Construction Act prompt payment provisions (in force since October 2019 for new contracts): the owner must pay the prime contractor within 28 days of receiving a proper invoice; the prime contractor must pay subcontractors within 7 days of receiving owner payment; subcontractors must pay sub-subcontractors within 7 days of receiving payment. If payment is not made, the payer must give a Notice of Non-Payment with reasons within the payment period. Disputes may be referred to adjudication."
      }
    },
    {
      "@type": "Question",
      "name": "How is a construction lien vacated or discharged in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A construction lien may be vacated by: (1) court order under Construction Act s.44 (lien not properly preserved, untimely, or no arguable case); (2) payment into court — owner or contractor pays the lien amount into court, court orders lien vacated; (3) posting of security (letter of credit or bond) in lieu of lien amount — court orders lien vacated; or (4) settlement agreement between the parties with discharge registered on title. The most common commercial approach is payment into court or posting of security to remove the lien from title while the underlying claim proceeds."
      }
    }
  ]
}`;

type LienTimeline = {
  event: string;
  deadline: string;
  party: string;
  consequence: string;
};

const lienTimelines: LienTimeline[] = [
  {
    event: "Substantial performance declared",
    deadline: "Triggered by prime contractor",
    party: "Prime contractor / owner",
    consequence: "Starts 45-day lien period for most parties; holdback release period begins",
  },
  {
    event: "Preserve lien (registration or filing)",
    deadline: "Within 45 days of last supply OR 45 days of substantial performance publication",
    party: "All lien claimants (contractors, subcontractors, suppliers)",
    consequence: "Failure to preserve extinguishes lien right; no extension available",
  },
  {
    event: "Perfect lien (commence action)",
    deadline: "Within 90 days of preservation",
    party: "Lien claimant",
    consequence: "Failure to perfect extinguishes lien; action on contract may survive",
  },
  {
    event: "Set action down for trial",
    deadline: "Within 2 years of preservation",
    party: "Lien claimant",
    consequence: "Failure to set down may result in dismissal for delay; lien action is set down in Superior Court",
  },
  {
    event: "Holdback released to prime contractor",
    deadline: "45 days after publication of substantial performance (if no liens)",
    party: "Owner",
    consequence: "If liens exist, holdback held until liens resolved; owner personally liable to lien claimants if holdback released prematurely",
  },
  {
    event: "Prompt payment — owner to prime",
    deadline: "28 days from proper invoice",
    party: "Owner",
    consequence: "Notice of Non-Payment required if not paying; failure triggers right to adjudication",
  },
  {
    event: "Prompt payment — prime to subcontractor",
    deadline: "7 days from receipt of owner payment",
    party: "Prime contractor",
    consequence: "Notice of Non-Payment required; failure triggers adjudication right",
  },
];

type HoldbackRule = {
  rule: string;
  description: string;
  example: string;
};

const holdbackRules: HoldbackRule[] = [
  {
    rule: "10% mandatory holdback",
    description: "Every payer must retain 10% of the price of each payment for services or materials under a contract or subcontract",
    example: "Owner pays prime contractor $100,000 progress payment — must retain $10,000 in holdback; prime pays sub $50,000 — must retain $5,000",
  },
  {
    rule: "Holdback is a lien fund",
    description: "The holdback is held as a fund available to satisfy valid liens; payer cannot apply holdback to other debts or set-offs",
    example: "If sub has a valid $8,000 lien, the prime's holdback from the owner may be applied to satisfy it",
  },
  {
    rule: "Basic holdback release (after substantial performance)",
    description: "The basic holdback may be released 46 days after publication of a certificate of substantial performance if no liens are registered",
    example: "Substantial performance published March 1; no liens registered by April 15; owner may release holdback to prime",
  },
  {
    rule: "Finishing work holdback",
    description: "Separate holdback for finishing work (work done after substantial performance); released 45 days after completion of the entire contract",
    example: "Post-substantial-performance finishing work — additional 10% holdback on those payments until contract completion",
  },
  {
    rule: "Personal liability for failure to maintain holdback",
    description: "Owner who releases holdback prematurely or fails to maintain holdback is personally liable to lien claimants up to holdback amount",
    example: "Owner pays full price to prime before holdback period expires; sub registers lien; owner liable to sub up to 10% even though already paid prime",
  },
];

export default function OntarioConstructionLiensPage() {
  return (
    <>
      <Script id="ontario-construction-liens-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-construction-liens-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Construction Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Construction Liens Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Construction Act, Holdbacks, Prompt Payment, and Lien Discharge
            </p>
            <p className="text-slate-400 text-sm">December 2024 &middot; 14 min read</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              Ontario construction liens are governed by the <strong>Construction Act</strong> (formerly the
              Construction Lien Act, substantially amended in 2018 and in force for new contracts from 2019).
              The Act creates a statutory lien right for contractors, subcontractors, and suppliers who improve
              real property — a lien against the owner&apos;s interest in the land that must be preserved and perfected
              within strict timelines. This guide covers lien timelines (45-day preservation, 90-day perfection),
              mandatory holdback obligations, trust provisions, the prompt payment and adjudication regime, and
              lien vacating procedures.
            </p>
          </div>
        </section>

        {/* Critical Timelines */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Critical Construction Lien Timelines Under the Construction Act
            </h2>
            <p className="text-slate-600 mb-8">
              Construction lien timelines are strictly enforced — missing the 45-day preservation deadline
              extinguishes the lien right entirely. There is no power to extend or excuse a missed lien
              preservation deadline.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Event</th>
                    <th className="text-left px-5 py-4 font-semibold">Deadline</th>
                    <th className="text-left px-5 py-4 font-semibold">Party</th>
                    <th className="text-left px-5 py-4 font-semibold">Consequence of Missing</th>
                  </tr>
                </thead>
                <tbody>
                  {lienTimelines.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.event}</td>
                      <td className="px-5 py-4 text-amber-700 text-sm font-medium">{row.deadline}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.party}</td>
                      <td className="px-5 py-4 text-slate-500 text-sm">{row.consequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Holdback Rules */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Mandatory Holdback Obligations: Construction Act s.22
            </h2>
            <p className="text-slate-600 mb-8">
              The 10% mandatory holdback applies at every level of the construction pyramid — owner to prime
              contractor; prime contractor to subcontractor; subcontractor to sub-subcontractor. Failure to
              maintain holdback creates personal liability for the payer.
            </p>
            <div className="space-y-4">
              {holdbackRules.map((rule, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{rule.rule}</h3>
                  <p className="text-slate-600 text-sm mb-3">{rule.description}</p>
                  <div className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-3 text-sm text-amber-900">
                    <span className="font-medium">Example: </span>{rule.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Provisions */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Trust Provisions Under the Construction Act
            </h2>
            <div className="bg-white rounded-xl p-8 border border-slate-200 space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                The Construction Act creates statutory trust obligations at each level of the construction
                pyramid. These trusts operate in addition to lien rights and provide an additional remedy
                for unpaid suppliers and subcontractors.
              </p>
              <ul className="list-disc list-inside space-y-3 ml-2">
                <li>
                  <strong>Owner&apos;s trust (s.8):</strong> An owner who receives payment from a mortgagee or lender
                  holds those funds in trust for the benefit of the prime contractor, subcontractors, and suppliers
                  to the extent of amounts owing
                </li>
                <li>
                  <strong>Prime contractor&apos;s trust (s.8):</strong> A contractor who receives payment holds those
                  funds in trust for subcontractors and suppliers; must not apply trust funds to other debts or
                  obligations
                </li>
                <li>
                  <strong>Subcontractor&apos;s trust:</strong> Similar trust obligations apply at the subcontractor level
                  for payments received from the prime
                </li>
                <li>
                  <strong>Director/officer liability:</strong> Directors and officers who participate in or authorize
                  a breach of trust may be personally liable; this is a significant risk for construction company
                  principals
                </li>
                <li>
                  <strong>Insolvency overlay:</strong> Construction Act trusts may take priority over secured
                  creditors in insolvency if the trust funds are traceable; court decisions on priority between
                  Construction Act trust claimants and PPSA secured creditors are complex
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Adjudication */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Prompt Payment and Adjudication
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Prompt Payment Timeline</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">28 days</span><span>Owner pays prime contractor from proper invoice</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">7 days</span><span>Prime pays subcontractor from receipt of owner payment</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">7 days</span><span>Subcontractor pays sub-subcontractor</span></li>
                  <li className="flex gap-2 mt-2"><span className="text-red-500 font-bold shrink-0">!</span><span>Payer must give Notice of Non-Payment with reasons if not paying within deadline</span></li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold shrink-0">!</span><span>Applies to contracts entered into after October 1, 2019</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Adjudication Process</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">1.</span><span>Party refers dispute to Ontario Dispute Adjudication for Construction Contracts (ODACC)</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">2.</span><span>ODACC appoints adjudicator within 7 days</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">3.</span><span>Adjudicator decides within 30 days of referral (or 21 days from respondent&apos;s response)</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">4.</span><span>Determination is binding and immediately enforceable (as court order on leave)</span></li>
                  <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">5.</span><span>Final determination by arbitration or litigation after project completion</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions: Ontario Construction Liens
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the deadline to preserve a construction lien in Ontario?",
                  a: "Under the Construction Act s.31, a lien must be preserved (registered on title or filed with court) within 45 days of the date of last supply of services or materials to the improvement (for subcontractors and suppliers) or within 45 days of publication of a certificate of substantial performance (for prime contractors). Missing the 45-day preservation deadline extinguishes the lien right.",
                },
                {
                  q: "What is the mandatory holdback requirement under the Ontario Construction Act?",
                  a: "Under Construction Act s.22, every payer (owner, prime contractor, subcontractor) must hold back 10% of the price of services and materials supplied under a contract or subcontract. The holdback is retained for the applicable lien period after publication of a certificate of substantial performance. The holdback fund is available to satisfy valid liens. Failure to maintain holdback makes the payer personally liable to lien claimants up to the holdback amount.",
                },
                {
                  q: "How does the Ontario prompt payment regime work?",
                  a: "Under the Construction Act prompt payment provisions (in force since October 2019 for new contracts): the owner must pay the prime contractor within 28 days of receiving a proper invoice; the prime contractor must pay subcontractors within 7 days of receiving owner payment; subcontractors must pay sub-subcontractors within 7 days of receiving payment. If payment is not made, the payer must give a Notice of Non-Payment with reasons within the payment period. Disputes may be referred to adjudication.",
                },
                {
                  q: "How is a construction lien vacated or discharged in Ontario?",
                  a: "A construction lien may be vacated by: (1) court order under Construction Act s.44 (lien not properly preserved, untimely, or no arguable case); (2) payment into court — owner or contractor pays the lien amount into court, court orders lien vacated; (3) posting of security (letter of credit or bond) in lieu of lien amount — court orders lien vacated; or (4) settlement agreement between the parties with discharge registered on title. The most common commercial approach is payment into court or posting of security to remove the lien from title while the underlying claim proceeds.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6 bg-white">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Track Construction Lien Deadlines with Atticus
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus tracks 45-day preservation deadlines, 90-day perfection deadlines, holdback release
              dates, prompt payment timelines, and adjudication dates for Ontario construction law files.
              AI document analysis extracts key dates from contracts, invoices, and certificates automatically.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-10 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Try Atticus Free for 14 Days
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Guides</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-debtor-creditor-law", label: "Ontario Debtor-Creditor Law" },
                { href: "/blog/ontario-mortgage-law", label: "Ontario Mortgage Law" },
                { href: "/blog/ontario-bankruptcy-insolvency", label: "Ontario Bankruptcy & Insolvency" },
                { href: "/ontario-civil-litigation-lawyer", label: "Atticus for Litigators" },
                { href: "/ontario-limitation-period", label: "Ontario Limitation Periods" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
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
