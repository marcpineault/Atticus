import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Contract Dispute Guide 2024: Breach, Damages, and Remedies | Atticus",
  description:
    "Ontario breach of contract law: essential terms vs conditions, 4 categories of damages (expectation, reliance, restitution, nominal), mitigation duty, specific performance, limitation periods, and litigation strategy for Ontario commercial disputes.",
  openGraph: {
    title: "Ontario Contract Dispute Guide 2024: Breach, Damages, and Remedies",
    description:
      "Comprehensive guide for Ontario lawyers on contract disputes — breach categories, damages calculation, mitigation requirements, equitable remedies, and Strategic considerations for commercial litigation.",
    url: "https://getatticus.ca/blog/ontario-contract-dispute",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-contract-dispute" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Contract Dispute Guide 2024: Breach, Damages, and Remedies",
      "description": "Ontario breach of contract law covering essential terms, 4 damage categories, mitigation duty, specific performance, and limitation periods for commercial disputes.",
      "url": "https://getatticus.ca/blog/ontario-contract-dispute",
      "datePublished": "2024-12-01",
      "dateModified": "2024-12-01",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the limitation period for a breach of contract claim in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The basic limitation period under the Ontario Limitations Act, 2002 is 2 years from the date the claim was discovered. For most contract claims, discovery occurs when the breach is known or reasonably ought to have been known. The ultimate limitation period is 15 years from the date the act or omission occurred."
          }
        },
        {
          "@type": "Question",
          "name": "What damages are available for breach of contract in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ontario courts award expectation damages (putting the plaintiff in the position as if the contract was performed), reliance damages (reimbursing wasted expenditure), restitutionary damages (disgorgement of defendant gains), and nominal damages where breach is proven without loss. Punitive damages are rare in contract and require high-handed, malicious conduct."
          }
        },
        {
          "@type": "Question",
          "name": "Can you get specific performance for a breach of contract in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Specific performance is available where damages are an inadequate remedy — most commonly for unique goods or real property. Ontario courts follow the principle that every parcel of land is unique, making specific performance the presumptive remedy in real estate transactions. Commercial contracts for fungible goods or services are unlikely to attract specific performance."
          }
        },
        {
          "@type": "Question",
          "name": "What is the duty to mitigate in Ontario contract law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The innocent party must take reasonable steps to reduce their loss following a breach. Ontario courts will reduce damages by amounts that could reasonably have been avoided. The burden of proving failure to mitigate lies with the defendant. Mitigation does not require the plaintiff to accept a different or inferior performance."
          }
        }
      ]
    }
  ]
}`;

type BreachType = {
  type: string;
  description: string;
  consequence: string;
};

const breachTypes: BreachType[] = [
  {
    type: "Repudiatory breach",
    description: "Breach of a condition (essential term) or breach going to the root of the contract",
    consequence: "Innocent party may accept repudiation, terminate, and sue for damages",
  },
  {
    type: "Anticipatory breach",
    description: "Clear indication before performance date that party will not perform",
    consequence: "Innocent party may immediately accept repudiation or await performance date",
  },
  {
    type: "Breach of warranty",
    description: "Breach of a non-essential term that does not deprive party of substantially the whole benefit",
    consequence: "Damages only; no right to terminate the contract",
  },
  {
    type: "Innominate term breach",
    description: "Term not classified in advance; consequences depend on severity of breach",
    consequence: "If consequences are serious enough to deprive party of benefit: terminate; otherwise: damages only",
  },
];

type DamageCategory = {
  category: string;
  purpose: string;
  example: string;
  limit: string;
};

const damageCategories: DamageCategory[] = [
  {
    category: "Expectation damages",
    purpose: "Put plaintiff in position as if contract was performed",
    example: "Lost profit on resale, cost to obtain substitute performance",
    limit: "Must be foreseeable at time of contracting (Hadley v Baxendale)",
  },
  {
    category: "Reliance damages",
    purpose: "Reimburse wasted expenditure incurred in reliance on the contract",
    example: "Pre-contract costs, wasted preparation expenses",
    limit: "Cannot recover both expectation and reliance for same loss",
  },
  {
    category: "Restitutionary damages",
    purpose: "Disgorge unjust enrichment received by defendant",
    example: "Deposits paid, partial performance rendered without return",
    limit: "Gain-based; not dependent on plaintiff loss",
  },
  {
    category: "Nominal damages",
    purpose: "Acknowledge breach occurred where no actual loss is proven",
    example: "$1–$100 award where breach proven but damages unquantifiable",
    limit: "No compensatory purpose; symbolic recognition only",
  },
];

type LimitationRow = {
  claimType: string;
  period: string;
  discoveryClock: string;
};

const limitationRows: LimitationRow[] = [
  {
    claimType: "General contract breach",
    period: "2 years",
    discoveryClock: "Date plaintiff knew or ought to have known of breach and loss",
  },
  {
    claimType: "Written contracts under seal",
    period: "2 years (basic) / 15 years (ultimate)",
    discoveryClock: "Limitations Act, 2002 applies; specialty limitation removed",
  },
  {
    claimType: "Debt / liquidated sum",
    period: "2 years",
    discoveryClock: "Date debt became due and owing",
  },
  {
    claimType: "Ongoing breach (instalment contracts)",
    period: "2 years per instalment",
    discoveryClock: "Separate limitation period runs from each missed payment",
  },
  {
    claimType: "Concealed breach",
    period: "2 years from discovery",
    discoveryClock: "Discoverability postponed where fraud or concealment prevented earlier knowledge",
  },
  {
    claimType: "Ultimate limitation period",
    period: "15 years",
    discoveryClock: "Applies regardless of discoverability; runs from act or omission",
  },
];

type DefenceRow = {
  defence: string;
  basis: string;
  notes: string;
};

const defences: DefenceRow[] = [
  {
    defence: "Frustration",
    basis: "Supervening event makes performance radically different from what was contracted for",
    notes: "Does not apply where event was foreseeable or contractually allocated; Frustrated Contracts Act distributes losses",
  },
  {
    defence: "Estoppel",
    basis: "Promissory estoppel prevents enforcement where promise not to enforce was relied upon",
    notes: "Ontario: shield not a sword; requires clear representation and detrimental reliance",
  },
  {
    defence: "Limitation period",
    basis: "Claim brought more than 2 years after discovery",
    notes: "Must be pleaded; court will not raise sua sponte; discoverability can extend the period",
  },
  {
    defence: "Waiver",
    basis: "Plaintiff voluntarily relinquished the right to claim breach",
    notes: "Must be clear and unequivocal; election to affirm contract after breach = waiver of termination right",
  },
  {
    defence: "Contributory breach",
    basis: "Plaintiff prevented or hindered defendant performance",
    notes: "Prevents plaintiff from relying on non-performance they caused",
  },
  {
    defence: "Exclusion / limitation clause",
    basis: "Contract term limiting or excluding liability for breach",
    notes: "Must be clearly worded; Ontario courts apply contra proferentem; unconscionable clauses may be struck",
  },
];

const faqs = [
  {
    q: "What is the limitation period for a breach of contract claim in Ontario?",
    a: "The basic limitation period under the Ontario Limitations Act, 2002 is 2 years from the date the claim was discovered. For most contract claims, discovery occurs when the breach is known or reasonably ought to have been known. The ultimate limitation period is 15 years from the date the act or omission occurred.",
  },
  {
    q: "What damages are available for breach of contract in Ontario?",
    a: "Ontario courts award expectation damages (putting the plaintiff in the position as if the contract was performed), reliance damages (reimbursing wasted expenditure), restitutionary damages (disgorgement of defendant gains), and nominal damages where breach is proven without loss. Punitive damages are rare in contract and require high-handed, malicious conduct.",
  },
  {
    q: "Can you get specific performance for a breach of contract in Ontario?",
    a: "Specific performance is available where damages are an inadequate remedy — most commonly for unique goods or real property. Ontario courts follow the principle that every parcel of land is unique, making specific performance the presumptive remedy in real estate transactions. Commercial contracts for fungible goods or services are unlikely to attract specific performance.",
  },
  {
    q: "What is the duty to mitigate in Ontario contract law?",
    a: "The innocent party must take reasonable steps to reduce their loss following a breach. Ontario courts will reduce damages by amounts that could reasonably have been avoided. The burden of proving failure to mitigate lies with the defendant. Mitigation does not require the plaintiff to accept a different or inferior performance.",
  },
];

export default function OntarioContractDisputePage() {
  return (
    <>
      <Script id="ontario-contract-dispute-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
          <div className="max-w-4xl mx-auto text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-slate-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Ontario Contract Dispute Guide</span>
          </div>
        </div>

        {/* Header */}
        <header className="py-16 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Commercial Litigation
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Contract Dispute Guide 2024: Breach, Damages, and Remedies
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Breach categories, expectation vs reliance damages, the duty to mitigate, equitable remedies, limitation periods, and common defences in Ontario commercial contract litigation.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>December 2024</span>
              <span>•</span>
              <span>16 min read</span>
              <span>•</span>
              <span>Atticus Legal Team</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              Contract disputes are among the most common matters in Ontario civil litigation. Whether you are acting for a party that has been wronged under a commercial agreement or defending a client accused of non-performance, understanding the framework governing breach, damages, and remedies is essential.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario contract law is built on common law supplemented by statutes including the Sale of Goods Act (for goods transactions), the Electronic Commerce Act (for digital contracts), and the Frustrated Contracts Act (where supervening events discharge obligations). The Limitations Act, 2002 governs when claims must be brought.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the key concepts Ontario litigators and solicitors need: how courts classify breach, the four categories of contractual damages, the duty to mitigate, equitable remedies, and the defences most frequently raised in contract disputes.
            </p>
          </section>

          {/* Breach Types */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Types of Breach in Ontario Contract Law
            </h2>
            <p className="text-slate-700 mb-6">
              Not every failure to perform gives the innocent party the same rights. Ontario courts distinguish between fundamental breaches that justify termination and lesser breaches that sound only in damages.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Breach Type</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Description</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Consequence</th>
                  </tr>
                </thead>
                <tbody>
                  {breachTypes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.type}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.description}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.consequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="text-amber-900 text-sm leading-relaxed">
                <strong>Election on repudiation:</strong> Once a repudiatory breach occurs, the innocent party must elect to accept the repudiation or affirm the contract. Affirming after knowledge of the breach waives the right to terminate and may constitute waiver of past breaches. Once the election is made, it cannot be reversed.
              </p>
            </div>
          </section>

          {/* Damages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Four Categories of Contractual Damages
            </h2>
            <p className="text-slate-700 mb-6">
              The goal of contractual damages in Ontario is to put the innocent party in the position they would have been in had the contract been performed. Courts apply a structured analysis when quantifying awards.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Category</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Purpose</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Example</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Limitation</th>
                  </tr>
                </thead>
                <tbody>
                  {damageCategories.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.category}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.purpose}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.example}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Remoteness: The Hadley v Baxendale Rule</h3>
            <p className="text-slate-700 mb-4">
              Damages are only recoverable if they were within the reasonable contemplation of the parties at the time of contracting. Ontario courts apply a two-branch test:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">First Branch — Natural Loss</h4>
                <p className="text-slate-700 text-sm">Loss arising naturally according to the usual course of things from the breach. Presumed to be within the contemplation of both parties.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">Second Branch — Special Circumstances</h4>
                <p className="text-slate-700 text-sm">Losses arising from special circumstances known to both parties at contracting. Defendant must have actual knowledge of the circumstances at the time of contracting.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Duty to Mitigate</h3>
            <p className="text-slate-700 mb-4">
              The innocent party must take reasonable steps to reduce their loss after a breach. Key principles Ontario courts apply:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "The duty arises immediately upon the breach, not when proceedings are commenced",
                "The standard is reasonableness, not perfection — the plaintiff need not take extraordinary measures",
                "The defendant bears the burden of proving the plaintiff failed to mitigate",
                "Mitigation does not require accepting a different contract or inferior substitute performance",
                "Reasonable steps taken to mitigate but unsuccessfully do not reduce the plaintiff's recovery",
                "Costs incurred in reasonable mitigation are recoverable as part of the damages",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Equitable Remedies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Equitable Remedies: Specific Performance and Injunction
            </h2>
            <p className="text-slate-700 mb-6">
              Where damages are an inadequate remedy, Ontario courts may grant equitable relief. These remedies are discretionary — availability does not mean automatic entitlement.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Specific Performance</h3>
                <p className="text-slate-700 text-sm mb-3">An order compelling the defendant to perform the contract as agreed. Available where:</p>
                <ul className="space-y-2">
                  {[
                    "Subject matter is unique (real property, rare goods, irreplaceable objects)",
                    "Damages cannot adequately compensate (uncertain quantum)",
                    "Plaintiff is ready, willing, and able to perform their obligations",
                    "No serious hardship to the defendant if ordered",
                    "No unclean hands or delay (laches) by plaintiff",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Injunction (Contractual)</h3>
                <p className="text-slate-700 text-sm mb-3">An order prohibiting breach of a negative contractual covenant. Available where:</p>
                <ul className="space-y-2">
                  {[
                    "Contract contains a negative covenant (not to compete, not to disclose)",
                    "Breach is threatened or ongoing",
                    "Damages would not provide adequate protection",
                    "Balance of convenience favours the injunction",
                    "Courts will not indirectly order personal service via injunction",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="text-blue-900 text-sm">
                <strong>Real estate note:</strong> Ontario courts treat every parcel of land as unique. Specific performance is the presumptive remedy on a vendor&apos;s failure to close — the purchaser need not prove inadequacy of damages. However, recent Ontario Court of Appeal decisions have introduced some flexibility where the purchaser purchased purely for investment purposes.
              </p>
            </div>
          </section>

          {/* Limitation Periods */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Limitation Periods for Ontario Contract Claims
            </h2>
            <p className="text-slate-700 mb-6">
              The Limitations Act, 2002 replaced Ontario&apos;s older specialty limitation periods. The basic limitation period of 2 years applies to nearly all contract claims. Missing the limitation period is fatal to the claim — it is a complete defence even where the underlying breach is clear.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Claim Type</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Period</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Discovery Clock</th>
                  </tr>
                </thead>
                <tbody>
                  {limitationRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.claimType}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.period}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.discoveryClock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm">
              Parties can contractually agree to shorten or extend limitation periods within limits. Agreements that reduce the limitation period to less than 2 years are generally unenforceable. The ultimate 15-year period cannot be extended by agreement.
            </p>
          </section>

          {/* Defences */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Common Defences in Ontario Contract Disputes
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Defence</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Basis</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {defences.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.defence}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.basis}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Litigation Strategy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ontario Contract Litigation: Key Strategic Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Pre-litigation demand letter",
                  body: "A formal demand letter triggers the discoverability analysis for limitation purposes and may be required before Small Claims Court proceedings. It should clearly identify the breach, quantify the damages claimed, and set a reasonable deadline for payment or performance.",
                },
                {
                  title: "Preserve the election",
                  body: "Do not act inconsistently with a right to terminate without taking legal advice. Accepting partial performance, continuing to supply goods, or accepting late payment may be construed as affirming the contract and waiving the breach.",
                },
                {
                  title: "Document mitigation steps",
                  body: "From the moment of breach, keep contemporaneous records of efforts to find substitute contracts, alternative buyers, or replacement services. Courts require evidence of reasonable mitigation — a gap in documentation is an open door for the defendant.",
                },
                {
                  title: "Assess the exclusion clauses",
                  body: "Review the contract carefully for limitation of liability, exclusion of consequential damages, and entire agreement clauses. Ontario courts interpret exclusion clauses narrowly and will consider whether they were properly incorporated by notice.",
                },
                {
                  title: "Interest and costs",
                  body: "Pre-judgment interest runs under the Courts of Justice Act from the date of the breach at the prescribed rate (or contractual rate if specified). Post-judgment interest runs from the date of judgment. Successful plaintiffs generally recover partial indemnity costs on a scale set by the court.",
                },
                {
                  title: "Consider summary judgment",
                  body: "Straightforward debt claims and clear breaches with documented losses are candidates for Rule 20 summary judgment. Ontario courts have expanded willingness to grant summary judgment where the factual record is complete and the legal issues are clear.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 rounded-2xl p-10 text-center text-white mb-12">
            <h2 className="text-2xl font-bold mb-3">
              Manage Your Contract Dispute Files with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">
              Atticus helps Ontario litigators track limitation periods, manage matter timelines, and keep trust accounting in order — all in one LSO-compliant platform.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="border-t border-slate-100 pt-8">
            <h3 className="font-semibold text-slate-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-negligence-law", label: "Ontario Negligence Law Guide" },
                { href: "/blog/ontario-civil-litigation-process", label: "Ontario Civil Litigation Process" },
                { href: "/blog/ontario-injunction-process", label: "Ontario Injunction Process" },
                { href: "/blog/small-claims-court-ontario", label: "Small Claims Court Ontario Guide" },
                { href: "/blog/ontario-commercial-lease-review", label: "Ontario Commercial Lease Review" },
                { href: "/blog/ontario-estate-litigation", label: "Ontario Estate Litigation Guide" },
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
          </section>
        </div>
      </div>
    </>
  );
}
