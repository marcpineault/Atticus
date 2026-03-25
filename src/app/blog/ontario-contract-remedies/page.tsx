import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Contract Remedies Guide | Atticus",
  description:
    "Complete guide to contract remedies in Ontario: damages (expectation, reliance, restitution), specific performance, injunctions, rescission, rectification, and limitation periods.",
  openGraph: {
    title: "Ontario Contract Remedies — Damages, Specific Performance, and Rescission",
    description:
      "Contract remedies in Ontario: expectation and reliance damages, Hadley v Baxendale remoteness, mitigation, liquidated damages vs penalties, specific performance, rescission, and Limitations Act 2002.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-contract-remedies",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-contract-remedies" },
};

export default function OntarioContractRemediesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Contract Remedies — Damages, Specific Performance, and Rescission",
    description:
      "Contract remedies in Ontario: damages calculation, remoteness, mitigation, specific performance, injunctions, rescission, and limitation periods.",
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
              Contract Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ontario Contract Remedies — Damages, Specific Performance, and Rescission
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive guide to remedies for breach of contract in Ontario: expectation and reliance
              damages, remoteness, mitigation, liquidated damages clauses, specific performance, injunctions,
              rescission, rectification, and limitation periods.
            </p>
          </div>
        </section>

        <article className="py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Overview of Contract Remedies</h2>
            <p className="text-slate-600 mb-4">
              Upon breach of contract, the innocent party has a range of potential remedies, categorized
              as legal (damages) or equitable (specific performance, injunction, rescission, rectification).
              The primary objective of contract damages is to put the innocent party in the position they
              would have been in had the contract been performed — the &quot;expectation interest&quot; or
              &quot;benefit of the bargain&quot; principle.
            </p>
            <p className="text-slate-600 mb-4">
              Remedies in contract are distinguished from tort remedies: in contract, the court aims to
              give the claimant what they were promised; in tort, the court aims to restore the claimant
              to the position they were in before the wrong. This distinction matters for damages
              calculations, particularly in concurrent contract/tort cases.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Expectation Damages</h2>
            <p className="text-slate-600 mb-4">
              Expectation damages compensate the claimant for the benefit they expected to receive
              under the contract — the &quot;gain from performance&quot; they were deprived of by the breach.
              The measure is: (value of performance promised) minus (value of performance received or
              saved costs).
            </p>
            <p className="text-slate-600 mb-4">
              For a seller who breaches a contract for the sale of goods, expectation damages are
              typically the difference between the contract price and the market price at the time
              of breach (the &quot;market differential&quot; measure). For a buyer who breaches, the seller&apos;s
              expectation is the contract price minus the proceeds of resale to a substitute buyer
              (or the full contract price if no substitute sale is possible).
            </p>
            <p className="text-slate-600 mb-4">
              Wrotham Park / negotiating damages: where expectation damages would be nominal but
              the breach conferred an identifiable benefit on the defendant, courts may award a
              &quot;gain-based&quot; remedy representing a share of the defendant&apos;s gain from breach
              (<em>Attorney General v Blake</em> [2001] AC 268; adopted in Canada in <em>Laboratoires
              Servier v Apotex Inc</em> 2008 ONCA). This is an exceptional remedy for cases involving
              breach of a &quot;skimped performance&quot; or breach of confidence with identifiable gain.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Reliance Damages</h2>
            <p className="text-slate-600 mb-4">
              The claimant may alternatively claim reliance damages — expenses incurred in reliance
              on the contract that are wasted as a result of the breach. Reliance damages are an
              alternative to expectation damages, not an addition — the claimant elects which measure
              provides greater recovery.
            </p>
            <p className="text-slate-600 mb-4">
              Reliance damages are useful where expectation damages are difficult to quantify (e.g.,
              lost profits on a new venture are too speculative). However, the defendant may reduce
              reliance damages by proving that even if the contract had been performed, the claimant
              would not have recovered its expenditures — the claimant made a bad bargain
              (<em>C.C.C. Films (London) Ltd v Impact Quadrant Films Ltd</em> [1985] QB 16).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Remoteness — Hadley v Baxendale</h2>
            <p className="text-slate-600 mb-4">
              Contract damages are limited by the remoteness rule from <em>Hadley v Baxendale</em>
              (1854) 9 Exch 341: damages must either (1) arise naturally from the breach (direct
              losses in the ordinary course of events) or (2) be within the reasonable contemplation
              of both parties at the time of contracting as a probable result of breach (indirect
              losses requiring special knowledge).
            </p>
            <p className="text-slate-600 mb-4">
              The contemplation test was reformulated in <em>Victoria Laundry (Windsor) Ltd v Newman
              Industries Ltd</em> [1949] 2 KB 528 and confirmed in <em>Koufos v C Czarnikow Ltd (The
              Heron II)</em> [1969] 1 AC 350: &quot;a real danger&quot; or &quot;a serious possibility&quot; not a mere
              possibility. Canada applies the same framework: <em>Fidler v Sun Life Assurance Co of
              Canada</em> [2006] 2 SCR 3 — remoteness is a question of reasonable contemplation at
              contracting.
            </p>
            <p className="text-slate-600 mb-4">
              Lost profits from business operations disrupted by a breach are recoverable if the
              defendant knew or should have known at contracting that the breach would likely cause
              business loss. A carrier told that a machine is the only piece of equipment enabling
              a plant to operate must contemplate shutdown losses if delayed.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Mitigation</h2>
            <p className="text-slate-600 mb-4">
              The innocent party has a duty to mitigate — to take reasonable steps to minimize its
              loss following breach. Failure to mitigate reduces the damages recoverable to the amount
              that would have been suffered had the claimant taken reasonable steps. The burden of
              proving failure to mitigate lies on the defendant (<em>Red Deer College v Michaels</em>
              [1976] 2 SCR 324).
            </p>
            <p className="text-slate-600 mb-4">
              What is &quot;reasonable&quot; for mitigation purposes is assessed objectively but with
              sensitivity to the claimant&apos;s position. The claimant is not required to take risky,
              burdensome, or unreasonable steps. For employment contracts: <em>Evans v Teamsters
              Local Union No 31</em> [2008] 1 SCR 661 — a wrongfully dismissed employee may be
              required to return to the same employer if a reasonable person would accept the
              offer in the circumstances.
            </p>
            <p className="text-slate-600 mb-4">
              Steps taken in reasonable mitigation that incur costs are recoverable even if they
              ultimately do not reduce the loss. Reasonable mitigation expenditures are part of
              the damages award.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Liquidated Damages vs Penalty Clauses</h2>
            <p className="text-slate-600 mb-4">
              Parties may agree in advance on the measure of damages for breach — &quot;liquidated damages&quot;
              clauses. Liquidated damages clauses are enforceable if they represent a genuine
              pre-estimate of the loss likely to be suffered from the breach.
            </p>
            <p className="text-slate-600 mb-4">
              Penalty clauses — provisions designed to punish breach rather than compensate for
              loss — were historically unenforceable in equity. The Supreme Court of the United
              Kingdom reformed the penalty doctrine in <em>Cavendish Square Holding BV v Talal El
              Makdessi</em> [2015] UKSC 67 — the test is whether the clause is out of all proportion
              to the legitimate interest of the innocent party in enforcement. Canadian courts are
              divided on whether to follow the UK reform or maintain the traditional genuine
              pre-estimate test.
            </p>
            <p className="text-slate-600 mb-4">
              Ontario courts continue to apply the traditional rule: a clause is a penalty if, on
              a true construction at the time of contracting, it was imposed in terrorem — as a
              threat — rather than as compensation for anticipated loss
              (<em>H.F. Clarke Ltd v Thermidaire Corp Ltd</em> [1976] 1 SCR 319). The legitimate
              interest test from Cavendish has not been definitively adopted in Ontario.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Specific Performance</h2>
            <p className="text-slate-600 mb-4">
              Specific performance is an equitable remedy compelling the defaulting party to perform
              the contract. It is discretionary and will not be ordered where damages provide an
              adequate remedy. The adequacy of damages test historically meant specific performance
              was available only for unique goods (land, rare chattels) or cases where damages would
              be impossible to assess.
            </p>
            <p className="text-slate-600 mb-4">
              The Supreme Court of Canada reformed the rule in <em>Semelhago v Paramadevan</em>
              [1996] 2 SCR 415 — specific performance for real property is no longer available as
              of right; the court must assess whether damages are adequate in the circumstances.
              Where comparable properties are readily available in the market, damages at the
              market-price differential may be adequate. However, specific performance remains
              commonly ordered for unique residential properties.
            </p>
            <p className="text-slate-600 mb-4">
              Bars to specific performance: (1) inadequate consideration (gross inadequacy); (2)
              unfair dealing at contracting; (3) hardship if ordered — the court considers whether
              enforcement would cause severe hardship disproportionate to the benefit to the claimant;
              (4) impossibility; (5) the contract requires constant court supervision (service
              contracts, personal performance contracts — courts will not order personal service
              contracts performed because of slavery concerns and the difficulty of supervision).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Injunctions in Contract</h2>
            <p className="text-slate-600 mb-4">
              Prohibitory injunctions may enforce negative covenants in contracts — promises not to
              do something. Courts will enforce negative covenants by injunction even where specific
              performance of the affirmative obligation would be refused (e.g., exclusive service
              contracts — an employer cannot compel an employee to perform, but can enjoin the
              employee from working for a competitor during the notice period).
            </p>
            <p className="text-slate-600 mb-4">
              Interlocutory (interim) injunctions: the <em>RJR-MacDonald Inc v Canada (AG)</em>
              [1994] 1 SCR 311 test — (1) serious issue to be tried; (2) irreparable harm if
              not granted; (3) balance of convenience. The &quot;serious issue&quot; test is a low threshold —
              the court does not conduct a mini-trial. Irreparable harm means harm that cannot be
              adequately compensated by damages.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Rescission</h2>
            <p className="text-slate-600 mb-4">
              Rescission sets aside the contract ab initio — treats it as never having existed and
              restores both parties to their pre-contract positions. Rescission is available for:
              misrepresentation (innocent, negligent, or fraudulent — <em>Kupchak v Dayson Holdings
              Ltd</em> 1965 BCCA; <em>Bank of British Columbia v Turbo Resources Ltd</em> 1983 ABCA);
              mistake; undue influence; duress; and unconscionability.
            </p>
            <p className="text-slate-600 mb-4">
              Bars to rescission: (1) affirmation — the party entitled to rescind takes a benefit
              with knowledge of the ground for rescission; (2) lapse of time — unreasonable delay
              in electing rescission; (3) third party rights acquired for value without notice;
              (4) impossibility of restitutio in integrum (restoring parties to original position).
            </p>
            <p className="text-slate-600 mb-4">
              Indemnity: where rescission is granted for innocent misrepresentation, indemnity may
              be awarded for obligations necessarily created by the contract — but not for all losses
              (that is the domain of damages for misrepresentation under the <em>Misrepresentation Act</em>
              or tort of negligent misrepresentation: <em>Hedley Byrne &amp; Co Ltd v Heller &amp;
              Partners Ltd</em> [1964] AC 465; <em>Queen v Cognos Inc</em> [1993] 1 SCR 87).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Rectification</h2>
            <p className="text-slate-600 mb-4">
              Rectification corrects a written instrument that does not accurately reflect the
              parties&apos; agreed terms — either due to a common mistake (both parties intended the
              same thing but wrote it differently) or unilateral mistake (one party&apos;s mistake
              known to the other). The court reforms the document to express what was actually
              agreed.
            </p>
            <p className="text-slate-600 mb-4">
              Standard of proof for rectification: clear and convincing evidence — above the
              balance of probabilities but below criminal standard. The party seeking rectification
              must establish with precision what the agreed terms were and how the written
              instrument departs from them (<em>Performance Industries Ltd v Sylvan Lake Golf
              and Tennis Club Ltd</em> [2002] 1 SCR 678).
            </p>
            <p className="text-slate-600 mb-4">
              Common uses in Ontario practice: rectification of agreements of purchase and sale
              where a property description is wrong, rectification of share purchase agreements
              where price or share number was mis-typed, and rectification of deeds or transfers.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Limitation Periods</h2>
            <p className="text-slate-600 mb-4">
              Breach of contract claims in Ontario are subject to the <em>Limitations Act 2002</em>
              SO 2002 c 24 Sch B: 2-year basic period from discovery (s.4) and 15-year ultimate
              limitation period (s.15 — runs from date of act or omission regardless of discovery).
              The discovery rule: the period runs from the date the claimant knew, or ought to have
              known through the exercise of reasonable diligence, that the claim was appropriate
              (s.5(1)).
            </p>
            <p className="text-slate-600 mb-4">
              For continuing breach (e.g., ongoing failure to pay instalments), each breach gives
              rise to a separate limitation period running from each due date. Parties may extend
              the limitation period by written agreement, or suspend it by acknowledgment of the
              debt in writing (s.13 — acknowledgment suspends but does not restart the period).
            </p>
            <p className="text-slate-600 mb-4">
              Contractual limitation clauses — parties may shorten the limitation period by contract
              (common in insurance contracts, supply agreements). Courts enforce contractual
              limitation periods if they comply with the Limitations Act minimums — agreements
              purporting to eliminate the basic limitation period entirely are void under s.22.
            </p>

            <div className="mt-12 bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Manage Commercial and Contract Matters with Atticus
              </h3>
              <p className="text-slate-600 mb-4">
                Atticus helps Ontario commercial litigators track Limitations Act deadlines, manage
                document-heavy contract files, and maintain LSO-compliant trust accounts for damages
                settlements. AI document analysis extracts key contract terms, dates, and obligations.
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
