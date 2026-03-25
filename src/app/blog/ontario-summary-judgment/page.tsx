import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Summary Judgment | Rule 20 Hryniak v Mauldin and the Culture Shift",
  description:
    "A comprehensive guide to Ontario summary judgment under Rule 20 of the Rules of Civil Procedure: the Hryniak v Mauldin 2014 SCC 7 proportionality culture shift, the enhanced fact-finding powers, mini-trials, when summary judgment will be granted, and strategic considerations for Ontario litigators.",
  openGraph: {
    title: "Ontario Summary Judgment | Rule 20 and Hryniak v Mauldin",
    description:
      "Understand Ontario summary judgment — Hryniak v Mauldin 2014 SCC 7 culture shift, the no genuine issue for trial test, enhanced fact-finding powers, partial summary judgment, and strategic use in Ontario civil litigation.",
    url: "https://getatticus.ca/blog/ontario-summary-judgment",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Summary Judgment: Rule 20, Hryniak v Mauldin, and the Proportionality Culture Shift",
  "description": "A comprehensive guide to Ontario summary judgment covering the Hryniak v Mauldin 2014 SCC 7 culture shift, the no genuine issue requiring trial test, enhanced fact-finding powers (oral evidence, experts), mini-trials, partial summary judgment, and strategic considerations.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-summary-judgment"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the test for summary judgment in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Rule 20.04(2) of the Rules of Civil Procedure and Hryniak v Mauldin 2014 SCC 7, a judge shall grant summary judgment if satisfied that there is no genuine issue requiring a trial. There is no genuine issue requiring a trial where the judge can make necessary findings of fact, apply the law, and determine a just result on the summary judgment record — without compromising fairness."
      }
    },
    {
      "@type": "Question",
      "name": "What enhanced powers does a judge have on a summary judgment motion in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Rule 20.04(2.1)-(2.2) of the Rules of Civil Procedure, a judge on a summary judgment motion may weigh evidence, assess credibility, and draw reasonable inferences from the evidence. The judge may also receive oral evidence from witnesses and order that oral discovery take place. These powers allow the court to resolve genuine factual disputes without a full trial."
      }
    },
    {
      "@type": "Question",
      "name": "Can partial summary judgment be granted in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but courts are cautious. Under Rule 20.04(3), a court can grant summary judgment on part of a claim. However, the Court of Appeal has cautioned that partial summary judgment can create duplication and inconsistency if the remaining issues proceed to trial. Partial summary judgment is appropriate where the severed issues are genuinely distinct and resolution will simplify rather than complicate the remaining litigation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best foot forward principle in Ontario summary judgment motions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 'best foot forward' principle requires that a responding party on a summary judgment motion put their best evidence before the court — they cannot reserve their best evidence for trial. A responding party who has evidence capable of meeting the motion but does not adduce it risks having summary judgment granted on the incomplete record."
      }
    }
  ]
}`;

export default function OntarioSummaryJudgmentPage() {
  return (
    <>
      <Script id="summary-judgment-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="summary-judgment-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Civil Litigation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Summary Judgment
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              The Hryniak v Mauldin 2014 SCC 7 culture shift, the no genuine issue requiring trial
              test, enhanced fact-finding powers, mini-trials, partial summary judgment, best foot
              forward, and strategic use in Ontario civil litigation.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Summary Judgment Framework</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Summary judgment allows the court to resolve claims without a full trial where there
                is no genuine issue requiring a trial on the merits. The procedure is found in Rule 20
                of the <em>Rules of Civil Procedure</em>, R.R.O. 1990, Reg. 194. Either a plaintiff
                or a defendant may bring a motion for summary judgment — the plaintiff to obtain judgment
                without trial, the defendant to dismiss the action or part of it.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The Supreme Court of Canada&apos;s decision in <em>Hryniak v Mauldin</em> 2014 SCC 7,
                [2014] 1 SCR 87 fundamentally reoriented Ontario&apos;s approach to summary judgment.
                Justice Karakatsanis described a &quot;culture shift&quot; requiring courts to embrace
                summary judgment as a genuine alternative to trial, not a preliminary hurdle to overcome.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The Hryniak culture shift responded to the reality that full trials are unaffordable and
                inaccessible for most civil litigants. The Court held that timely and affordable justice
                requires summary judgment to be a real option — not just a paper procedure reserved for
                only the clearest cases.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The No Genuine Issue Requiring a Trial Test</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Rule 20.04(2) provides: &quot;The court shall grant summary judgment if (a) the court is
                satisfied that there is no genuine issue requiring a trial with respect to a claim or
                defence; or (b) the parties agree to have all or part of the claim determined by a
                summary judgment and the court is satisfied that it is appropriate to grant summary
                judgment.&quot;
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under Hryniak, there is no genuine issue requiring a trial where the judge can:
              </p>
              <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-4">
                <li>Make the necessary findings of fact</li>
                <li>Apply the law to those facts</li>
                <li>Determine a just result — without compromising the fairness of the adjudicative process</li>
              </ol>
              <p className="text-slate-700 leading-relaxed mb-4">
                The emphasis shifted from &quot;is there a triable issue?&quot; to &quot;is a trial
                actually necessary to do justice?&quot; Summary judgment is now available even where
                there are factual disputes, provided the judge can resolve them fairly on the motion record.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Prior to Hryniak, Ontario courts applied a restrictive test: summary judgment was unavailable
                whenever there was &quot;a real chance&quot; that the outcome might differ at trial. That
                restrictive approach — articulated in <em>Pizza Pizza Ltd v Gillespie</em> (1990) 33 CPC
                (2d) 310 — was effectively overruled by the 2010 Rule 20 amendments and confirmed as dead
                by Hryniak.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Enhanced Fact-Finding Powers</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Rules 20.04(2.1) and (2.2) grant significant enhanced powers to judges hearing summary
                judgment motions:
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Weighing Evidence and Assessing Credibility</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under Rule 20.04(2.1), a judge may: weigh evidence, evaluate the credibility of a
                deponent, and draw reasonable inferences from the evidence. This is a dramatic departure
                from the pre-2010 regime, where summary judgment judges could not weigh conflicting
                evidence or make credibility findings — any credibility issue automatically created a
                triable issue requiring trial.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Post-Hryniak, a credibility dispute does not automatically defeat a summary judgment
                motion. The judge can assess whether the credibility dispute is genuine, material, and
                incapable of resolution without the benefit of a full trial — or whether it can be
                resolved on the affidavit and transcript record.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Oral Evidence and Mini-Trials</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Rule 20.04(2.2) permits the court, if it considers it appropriate, to hear oral evidence
                from one or more witnesses and to order that a discovery (oral examination) take place.
                This &quot;mini-trial&quot; procedure allows the judge to receive viva voce evidence on
                contested factual issues, enabling credibility assessment that was previously impossible
                on summary judgment.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The mini-trial power is used sparingly — it adds cost and complexity, and the Court of
                Appeal has noted that oral evidence is not automatically available just because the
                parties prefer a full trial. The judge must be satisfied that the mini-trial is a
                proportionate tool for resolving the specific issue efficiently.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Best Foot Forward Principle</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A party responding to a summary judgment motion must put their best evidence before the
                court. The responding party cannot say &quot;I have better evidence, but I am saving it
                for trial.&quot; The summary judgment record must include all the evidence the responding
                party intends to rely on.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                This principle was affirmed in <em>Sweda Farms Ltd v Egg Farmers of Ontario</em> 2014
                ONSC 1200, upheld by the Court of Appeal. A responding party who fails to put their best
                foot forward cannot later complain that summary judgment was granted without their
                evidence being considered.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The practical implication: a defendant who has a credible defence must adduce detailed
                affidavit evidence — not merely make bald assertions or file boilerplate affidavits
                stating the matter is complex and requires discovery. A responding party who submits
                thin evidence risks summary judgment being granted against them even where a genuine
                defence might exist.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Partial Summary Judgment</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Rule 20.04(3) permits the court to grant summary judgment on part of a claim or
                counterclaim. Partial summary judgment can reduce the issues requiring trial, save
                costs, and narrow the dispute. However, the Court of Appeal has cautioned that partial
                summary judgment should only be granted where it genuinely simplifies the remaining
                litigation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In <em>Butera v Chown, Cairns LLP</em> 2017 ONCA 783, the Court of Appeal emphasized
                that partial summary judgment raises concerns about inconsistency: if the judge resolves
                one issue by partial summary judgment and the trial judge resolves a related issue
                differently, the result can be incoherent. Courts should be cautious about granting
                partial summary judgment on issues that are intertwined with the remaining trial issues.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Partial summary judgment works best where the issues are genuinely severable — for
                example, where a defendant concedes liability but disputes damages, allowing the court
                to determine liability by summary judgment while leaving damages to trial. Or where
                one of several causes of action can be cleanly resolved without affecting the others.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Summary Judgment in Specific Contexts</h2>

              <div className="space-y-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Contract Claims</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Contract disputes are frequently resolved by summary judgment in Ontario, particularly
                    where the facts are largely undisputed and the issue is one of contractual
                    interpretation. Pure construction disputes — where the documents are clear and the
                    only question is their legal effect — are well-suited to summary judgment. Disputed
                    performance issues with credibility implications are more difficult.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Negligence and Tort Claims</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Negligence claims are often harder to resolve by summary judgment because causation
                    and standard of care typically require weighing conflicting expert evidence. However,
                    cases where the defendant&apos;s negligence is undisputed, or where the plaintiff
                    cannot establish a causal link even on the best evidence, may be resolved by
                    summary judgment. Limitation period defences to negligence claims are frequently
                    disposed of by summary judgment.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Commercial Disputes</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Commercial disputes between sophisticated parties are increasingly being resolved by
                    summary judgment in Ontario. Fraud claims based on documentary evidence, corporate
                    disputes turning on shareholder agreements, and debt collection actions are all
                    amenable to summary judgment where the relevant documents are clear and the credibility
                    issues do not require live testimony to resolve.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Professional Negligence</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Professional negligence cases (solicitors, accountants, doctors) are frequently
                    resolved by summary judgment where the standard of care issue can be determined
                    on expert affidavits without live testimony. Cases turning on what advice was given
                    or what the professional knew at a specific time often require credibility assessment
                    that may be possible on a summary judgment record with the enhanced powers.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategic Considerations</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The decision to bring a summary judgment motion requires careful analysis:
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">For Moving Parties</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>Ensure the motion record is complete — the judge cannot grant summary judgment based on incomplete evidence</li>
                <li>Address all elements of the claim or defence; a partial response to one element does not defeat the motion</li>
                <li>Consider whether the responding party has evidence that, if adduced, might create a genuine issue</li>
                <li>Brief the proportionality rationale — why is summary judgment more efficient than trial?</li>
                <li>Consider timing: summary judgment before discovery may be premature; after discovery the record is usually sufficient</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">For Responding Parties</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>Put your best foot forward — submit all evidence you intend to rely on</li>
                <li>Identify genuine (not manufactured) disputes of material fact</li>
                <li>If credibility is genuinely in issue, explain why live testimony is necessary</li>
                <li>Cross-examine the moving party&apos;s deponents if their credibility is material</li>
                <li>Consider whether a Rule 20.04(2.2) mini-trial request would serve your client&apos;s interests</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Costs Exposure</h3>
              <p className="text-slate-700 leading-relaxed">
                Summary judgment motions carry significant costs exposure. An unsuccessful summary
                judgment motion will result in a substantial costs award against the moving party.
                Courts have awarded $50,000–200,000+ in costs against parties who brought summary
                judgment motions that were clearly inappropriate for that procedure. This makes
                careful pre-motion assessment critical.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is the test for summary judgment in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Under Rule 20.04(2) and <em>Hryniak v Mauldin</em> 2014 SCC 7, a judge shall grant
                    summary judgment if satisfied that there is no genuine issue requiring a trial —
                    meaning the judge can make necessary findings of fact, apply the law, and determine
                    a just result on the motion record without compromising fairness.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What enhanced powers does a judge have on a summary judgment motion in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Under Rules 20.04(2.1)-(2.2), a judge may weigh evidence, assess credibility, draw
                    reasonable inferences, and receive oral evidence from witnesses (mini-trial). These
                    powers allow the court to resolve factual disputes without a full trial.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Can partial summary judgment be granted in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Yes, under Rule 20.04(3), but courts are cautious. Partial summary judgment should
                    only be granted where the severed issues are genuinely distinct and resolution will
                    simplify the remaining litigation. Courts avoid partial summary judgment that creates
                    inconsistency risk with trial issues (Butera v Chown, Cairns 2017 ONCA 783).
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is the best foot forward principle in Ontario summary judgment motions?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    A responding party must put all their evidence before the court — they cannot save
                    their best evidence for trial. Failure to adduce available evidence capable of meeting
                    the motion risks having summary judgment granted on the incomplete record.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12 px-8 bg-amber-50 border border-amber-200 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Manage Litigation Files with Atticus
              </h2>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                Atticus helps Ontario litigators track motion deadlines, limitation periods, costs,
                and billing — all in one platform built for Canadian legal practice.
                $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
            </section>

          </div>
        </article>

        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Resources</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-civil-procedure", label: "Ontario Civil Procedure" },
                { href: "/blog/ontario-costs-rules", label: "Ontario Costs Rules" },
                { href: "/blog/ontario-injunction-process", label: "Ontario Injunction Process" },
                { href: "/blog/ontario-limitation-period-discoverability", label: "Limitation Period Discoverability" },
                { href: "/trust-accounting-ontario", label: "Trust Accounting Ontario" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
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
