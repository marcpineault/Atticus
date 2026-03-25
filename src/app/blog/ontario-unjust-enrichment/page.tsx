import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Unjust Enrichment Law Guide | Atticus",
  description:
    "Complete guide to unjust enrichment in Ontario: three-part test, juristic reason analysis, quantum meruit, constructive trust, and limitation periods under the Limitations Act 2002.",
  openGraph: {
    title: "Ontario Unjust Enrichment — Enrichment, Deprivation, and Juristic Reason",
    description:
      "Unjust enrichment in Ontario: Garland v Consumers Gas three-part test, juristic reason first/second stage, quantum meruit, constructive trust remedy, and restitution principles.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-unjust-enrichment",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-unjust-enrichment" },
};

export default function OntarioUnjustEnrichmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Unjust Enrichment — Enrichment, Deprivation, and Juristic Reason",
    description:
      "Unjust enrichment in Ontario: three-part test, juristic reason analysis, constructive trust, quantum meruit, and restitution.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus" },
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-amber-500 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Equity and Restitution
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ontario Unjust Enrichment — Enrichment, Deprivation, and Juristic Reason
            </h1>
            <p className="text-xl text-slate-300">
              The three-part unjust enrichment test, juristic reason analysis, constructive trust,
              quantum meruit, restitution for benefits conferred, and application in family law,
              commercial, and real property disputes.
            </p>
          </div>
        </section>

        <article className="py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Foundation — The Three-Part Test</h2>
            <p className="text-slate-600 mb-4">
              Unjust enrichment is an independent cause of action in Canadian common law. The Supreme
              Court of Canada confirmed the three-part test in <em>Garland v Consumers&apos; Gas Co</em>
              [2004] 1 SCR 629 (Iacobucci J), building on <em>Pettkus v Becker</em> [1980] 2 SCR 834:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
              <ol className="space-y-3 text-slate-700 list-none">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-amber-600">1.</span>
                  <span><strong>Enrichment of the defendant</strong> — the defendant received a benefit (money, services, property, or other value)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-amber-600">2.</span>
                  <span><strong>Corresponding deprivation of the plaintiff</strong> — the plaintiff suffered a loss corresponding to the defendant&apos;s enrichment</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-amber-600">3.</span>
                  <span><strong>Absence of juristic reason</strong> — there is no legal basis for the enrichment (no contract, disposition of law, or other legally recognized reason)</span>
                </li>
              </ol>
            </div>
            <p className="text-slate-600 mb-4">
              All three elements must be established on a balance of probabilities. The third element —
              absence of juristic reason — bears the most litigation. In <em>Garland</em>, the Supreme
              Court adopted a two-stage juristic reason analysis.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Juristic Reason Analysis — Two Stages</h2>
            <p className="text-slate-600 mb-4">
              The <em>Garland</em> two-stage juristic reason analysis:
            </p>
            <p className="text-slate-600 mb-4">
              <strong>First stage</strong>: the plaintiff must show the absence of a juristic reason
              from the recognized categories. The established categories of juristic reason are:
            </p>
            <ul className="space-y-3 text-slate-600 mb-6 list-none">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>A valid contract</strong> between the parties governing the transfer — a bargained-for exchange provides the juristic reason for enrichment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>A disposition of law</strong> — statutory authority, a court order, or a legal rule that requires the transfer</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>A donative intent</strong> — a gift freely given without expectation of return (the plaintiff must have intended to confer a benefit gratuitously)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Other established categories</strong> that the courts have recognized as providing a legal basis for retaining the enrichment</span>
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              If the plaintiff establishes the absence of a recognized juristic reason, the analysis
              proceeds to the <strong>second stage</strong>: the defendant may rebut by establishing
              that there is a residual juristic reason why retention of the enrichment would not be
              unjust. At the second stage, the court considers the reasonable expectations of the
              parties and public policy considerations.
            </p>
            <p className="text-slate-600 mb-4">
              The two-stage analysis replaced the earlier &quot;unjust factors&quot; approach (listing specific
              grounds like mistake, failure of consideration, compulsion). Canada now follows the
              &quot;absence of juristic reason&quot; unified approach rather than the English category-based approach.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Enrichment and Benefit</h2>
            <p className="text-slate-600 mb-4">
              Enrichment must be an objective benefit to the defendant — something the defendant
              actually received and retained. A benefit that the defendant would not have freely
              sought (an &quot;incontrovertible benefit&quot;) is more readily established than a &quot;subjective
              devaluation&quot; — services that the defendant did not request and may not value.
            </p>
            <p className="text-slate-600 mb-4">
              The defence of &quot;change of position&quot; is recognized in Canada
              (<em>Bank of America Canada v Mutual Trust Co</em> [2002] 2 SCR 601): if the defendant
              changed their position in good faith in reliance on the benefit received, they need
              not make restitution to the extent they would be worse off if required to repay.
              This is a partial defence — restitution is reduced, not eliminated.
            </p>
            <p className="text-slate-600 mb-4">
              The &quot;passing on&quot; defence — where the defendant passed the enrichment on to a third
              party — was rejected by the Supreme Court in <em>Kingstreet Investments Ltd v New
              Brunswick (Finance)</em> [2007] 1 SCR 3 for claims against the Crown for ultra vires
              taxes. Its application in private law remains unsettled in Canada.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Quantum Meruit</h2>
            <p className="text-slate-600 mb-4">
              Quantum meruit (&quot;as much as he deserved&quot;) is a claim for the reasonable value of services
              rendered where no contract governs the relationship, or where the contract has failed.
              It is a specific application of unjust enrichment to service benefits.
            </p>
            <p className="text-slate-600 mb-4">
              Quantum meruit arises in several circumstances:
            </p>
            <ul className="space-y-3 text-slate-600 mb-6 list-none">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Failed contract</strong> — where a contract is void (e.g., unenforceable for lack of writing under the Statute of Frauds), the value of services rendered may still be recoverable</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>No contract formed</strong> — where the parties operated on a mutual understanding that compensation would be paid but no binding contract was concluded</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Part performance beyond contract scope</strong> — work performed beyond the contract terms where the additional work was accepted and benefited the defendant</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Contract terminated for breach</strong> — the innocent party may claim in quantum meruit for services rendered before termination as an alternative to damages</span>
              </li>
            </ul>
            <p className="text-slate-600 mb-4">
              The measure of quantum meruit is the reasonable market value of the services — not the
              contract price and not the defendant&apos;s subjective valuation. Expert evidence on market
              rates is typically required for significant claims.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Constructive Trust as Remedy</h2>
            <p className="text-slate-600 mb-4">
              The primary remedy for unjust enrichment is personal (in personam) — a monetary award
              for the value of the unjust enrichment. However, where the enrichment can be traced to
              specific property, the court may impose a constructive trust — a proprietary (in rem)
              remedy giving the plaintiff an interest in that specific property.
            </p>
            <p className="text-slate-600 mb-4">
              <em>Pettkus v Becker</em> [1980] established the constructive trust remedy for unjust
              enrichment in the family context. The Supreme Court confirmed in <em>Soulos v Korkontzilas</em>
              [1997] 2 SCR 217 that constructive trust in Canada serves two functions: (1) unjust
              enrichment constructive trust (proprietary remedy where in personam remedy inadequate);
              (2) good conscience constructive trust (for fiduciary breaches, fraud, and other wrongs).
            </p>
            <p className="text-slate-600 mb-4">
              The test for constructive trust as remedy (<em>Lac Minerals Ltd v International Corona
              Resources Ltd</em> [1989] 2 SCR 574): (1) the defendant was unjustly enriched;
              (2) there is a link between the enrichment and specific property; (3) a monetary remedy
              is inadequate (e.g., because the property is unique, or because the defendant is
              insolvent). The constructive trust operates from the date of the unjust enrichment,
              giving the plaintiff priority over the defendant&apos;s creditors.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Unjust Enrichment in Family Law</h2>
            <p className="text-slate-600 mb-4">
              Unjust enrichment is the primary common law remedy for property division between
              unmarried (common law) spouses in Ontario. Unlike married spouses who have statutory
              equalization rights under the <em>Family Law Act</em> Part I, unmarried spouses must
              rely on unjust enrichment or resulting trust to claim a share of property acquired
              during cohabitation.
            </p>
            <p className="text-slate-600 mb-4">
              <em>Kerr v Baranow</em> [2011] 1 SCR 269 is the leading Supreme Court case on unjust
              enrichment in family relationships. The Court introduced the &quot;joint family venture&quot;
              concept: where two people cohabit in a domestic partnership characterized by (1) mutual
              effort; (2) economic integration; (3) actual intent (words and conduct); and (4)
              priority of the family, the unjust enrichment remedy may be assessed on a proportionate
              share of the wealth accumulated during the relationship — the &quot;value survived&quot; approach —
              rather than on a service-by-service basis.
            </p>
            <p className="text-slate-600 mb-4">
              Contributions recognized for unjust enrichment in family cases: homemaking, childcare,
              renovation work on the family home, financial contributions to mortgage payments,
              contribution to a business, and indirect contributions that enabled the other party
              to focus on wealth-building activities.
            </p>
            <p className="text-slate-600 mb-4">
              Donative intent as juristic reason: courts are cautious about finding that family
              contributions were intended as gifts. In long-term relationships where both parties
              contributed to a joint enterprise, the presumption of donative intent is weakened —
              the reasonable expectation is that contributions will be recognized.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Commercial Unjust Enrichment</h2>
            <p className="text-slate-600 mb-4">
              In commercial contexts, unjust enrichment is frequently raised where:
            </p>
            <ul className="space-y-3 text-slate-600 mb-6 list-none">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Payment under mistake</strong> — money paid under a mistaken belief that it was owed, whether mistake of fact or (now recognized in Canada) mistake of law (<em>Peel (Regional Municipality) v Canada</em> [1992] 3 SCR 762)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Recovery of ultra vires taxes</strong> — taxes collected under an invalid statutory provision are recoverable from government without proof of compulsion (<em>Kingstreet</em> [2007])</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Benefits under failed agreements</strong> — where a joint venture or partnership fails, contributions made in anticipation of the venture may be recoverable in unjust enrichment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span><strong>Subrogation</strong> — where a guarantor pays a debt, they are subrogated to the creditor&apos;s rights against the principal debtor (a form of unjust enrichment claim)</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Limitation Periods</h2>
            <p className="text-slate-600 mb-4">
              Unjust enrichment claims in Ontario are subject to the <em>Limitations Act 2002</em>
              two-year basic period (s.4), running from the date the claimant knew or ought to have
              known of the claim. The 15-year ultimate period (s.15) applies.
            </p>
            <p className="text-slate-600 mb-4">
              For claims arising out of family relationships, the discovery date may be delayed until
              the relationship ends — particularly where the enriched party controlled the family
              finances and the deprived party was unaware of the asset accumulation that occurred.
              Courts have applied the discoverability principle generously in family unjust enrichment
              cases.
            </p>
            <p className="text-slate-600 mb-4">
              Constructive trust claims (proprietary remedies) have historically attracted a longer
              limitation period argument — some courts have applied laches rather than Limitations
              Act periods to purely equitable remedies. Ontario courts are increasingly applying the
              Limitations Act 2002 to constructive trust claims as well.
            </p>

            <div className="mt-12 bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Manage Restitution and Equity Files with Atticus
              </h3>
              <p className="text-slate-600 mb-4">
                Atticus helps Ontario counsel track limitation deadlines in unjust enrichment and
                constructive trust matters, manage complex document-heavy files, and maintain LSO-compliant
                trust accounts for settlement funds. AI document analysis extracts key facts from
                financial records and affidavits.
              </p>
              <a
                href="/sign-up"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Try Atticus Free
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
