import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Costs Rules in Litigation | Rules of Civil Procedure Costs Guide",
  description:
    "A comprehensive guide to Ontario litigation costs: the general costs framework under the Rules of Civil Procedure, partial indemnity vs substantial indemnity costs, offers to settle and Rule 49, costs on summary judgment, security for costs, and the court's discretion to award costs against lawyers personally.",
  openGraph: {
    title: "Ontario Costs Rules in Litigation | Rules of Civil Procedure Costs Guide",
    description:
      "Understand Ontario litigation costs — partial indemnity, substantial indemnity, Rule 49 offer to settle consequences, costs on unsuccessful motions, security for costs, and personal cost orders against lawyers.",
    url: "https://getatticus.ca/blog/ontario-costs-rules",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Costs Rules in Litigation: Rules of Civil Procedure Costs Framework",
  "description": "A comprehensive guide to Ontario litigation costs covering partial indemnity vs substantial indemnity costs, costs discretion, Rule 49 offer to settle consequences, costs on motions and appeals, disbursements, security for costs, and personal costs orders against counsel.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-costs-rules"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between partial indemnity and substantial indemnity costs in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Partial indemnity costs (formerly party-and-party costs) are the default costs award in Ontario — roughly 50-60% of the winning party's actual legal fees. Substantial indemnity costs (formerly solicitor-and-client costs) are a higher award of approximately 90% of actual fees, typically ordered where the losing party's conduct was reprehensible, scandalous, or outrageous, or where a Rule 49 offer to settle was rejected and the offeror obtained a better result at trial."
      }
    },
    {
      "@type": "Question",
      "name": "How do Rule 49 offers to settle affect costs in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Rule 49 of the Rules of Civil Procedure, if a defendant makes an offer to settle that is not accepted and the plaintiff fails to obtain a judgment more favourable than the offer, the plaintiff is entitled to costs on a partial indemnity basis up to the offer date, but the defendant is entitled to costs on a partial indemnity basis from the date of the offer. If a plaintiff's offer is rejected and the judgment is as favourable or more favourable than the offer, the plaintiff is entitled to partial indemnity costs up to the offer date and substantial indemnity costs thereafter."
      }
    },
    {
      "@type": "Question",
      "name": "Can a judge order costs against a lawyer personally in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under Rule 57.07 and the court's inherent jurisdiction, a judge can order a lawyer to personally pay costs where the lawyer has caused costs to be incurred without reasonable cause or where costs have been wasted through the lawyer's fault (costs thrown away). The threshold is high — mere lack of success or poor judgment does not suffice; the conduct must amount to an abuse of process, bad faith, or breach of the lawyer's duty to the court."
      }
    },
    {
      "@type": "Question",
      "name": "What is the costs cap on motions in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Rule 57 and the Civil Practice Direction, costs awarded on motions are subject to proportionality review. The court considers the complexity of the motion, the amounts at stake, and the work actually required. While there is no fixed cap, the court will often apply informal benchmarks based on the nature of the motion — costs on a simple motion might be $2,000-5,000, while costs on a complex summary judgment motion might be $15,000-50,000 or more."
      }
    }
  ]
}`;

export default function OntarioCostsRulesPage() {
  return (
    <>
      <Script id="costs-rules-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="costs-rules-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Civil Litigation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Costs Rules in Litigation
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Partial indemnity vs substantial indemnity costs, the costs discretion, Rule 49 offer
              to settle consequences, costs on motions and appeals, security for costs, and personal
              cost orders against counsel — the complete Ontario costs guide.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The General Costs Framework</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The general rule in Ontario civil litigation is that costs follow the event — the
                successful party is entitled to costs from the unsuccessful party. This is codified
                in Rule 57.01 of the <em>Rules of Civil Procedure</em>, R.R.O. 1990, Reg. 194, which
                provides that costs shall be awarded unless the court orders otherwise.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                However, the court has broad discretion to determine the amount of costs and to whom
                they should be paid. Rule 57.01(1) lists factors the court may consider, including:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>The result of the proceeding and any offers to settle</li>
                <li>The experience and expertise of the parties&apos; lawyers</li>
                <li>The complexity and importance of the issues</li>
                <li>The conduct of any party (including conduct that unnecessarily lengthened the proceeding)</li>
                <li>The amount of costs that an unsuccessful party could reasonably expect to pay</li>
                <li>Reasonable expectations about the costs the parties would bear</li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                The foundational costs decision is <em>Boucher v Public Accountants Council for the
                Province of Ontario</em> (2004) 71 OR (3d) 291 (ONCA), which established the modern
                framework for costs assessment in Ontario and affirmed that the goal of costs is to
                achieve a fair and reasonable result, not full indemnification.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Partial Indemnity Costs</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Partial indemnity costs (formerly called &quot;party-and-party costs&quot;) are the
                default costs award in Ontario civil litigation. They are intended to compensate the
                successful party for a reasonable contribution toward their legal fees — not full
                reimbursement. In practice, partial indemnity costs are typically 50–60% of the
                receiving party&apos;s actual legal fees, though this varies with the nature of the case.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Courts set partial indemnity costs based on a reasonable hourly rate for the work
                done (considering the lawyer&apos;s experience and the market rate for similar work)
                applied to reasonable hours spent (considering the proportionality of the effort
                to the issues and amounts at stake).
              </p>
              <p className="text-slate-700 leading-relaxed">
                The proportionality principle is central to costs in Ontario. A party that spends
                $500,000 in legal fees litigating a $100,000 claim will not recover $250,000–300,000
                in partial indemnity costs — the court will scale the costs award to what was
                proportionate to the amounts and issues in dispute.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Substantial Indemnity Costs</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Substantial indemnity costs (formerly &quot;solicitor-and-client costs&quot;) are
                approximately 90% of the receiving party&apos;s actual legal fees. They are an
                exceptional award, reserved for circumstances where the losing party&apos;s conduct
                was reprehensible, scandalous, or outrageous — or where a Rule 49 offer to settle
                triggers an entitlement to enhanced costs.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Conduct justifying substantial indemnity costs includes:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>Fraud, misrepresentation, or deliberate concealment of evidence</li>
                <li>Abuse of the court process or vexatious conduct</li>
                <li>Breach of an undertaking to the court</li>
                <li>Pursuing a claim or defence known to be without merit</li>
                <li>Improper or exaggerated pleadings designed to harass</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                In <em>Young v Young</em> [1993] 4 SCR 3, the Supreme Court held that solicitor-client
                costs (now substantial indemnity) should be awarded only where there is a clear and
                unambiguous finding of reprehensible conduct. The mere fact that a party pursued an
                unsuccessful claim or defence does not justify enhanced costs.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The most common trigger for substantial indemnity costs in practice is the Rule 49
                offer-to-settle mechanism, which is discussed below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Rule 49: Offers to Settle and Costs Consequences</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Rule 49 of the Rules of Civil Procedure creates a powerful costs incentive system
                for settlement. The rules differ depending on whether the defendant or the plaintiff
                makes the offer that is rejected.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Plaintiff&apos;s Offer (Rule 49.10(1))</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  If the plaintiff makes an offer to settle that is not accepted, and the judgment is
                  as favourable or more favourable than the offer:
                </p>
                <ul className="list-disc pl-4 text-slate-700 space-y-1 text-sm">
                  <li>Plaintiff receives <strong>partial indemnity costs</strong> up to the date the offer was served</li>
                  <li>Plaintiff receives <strong>substantial indemnity costs</strong> from the date of the offer onward</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Defendant&apos;s Offer (Rule 49.10(2))</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  If the defendant makes an offer to settle that is not accepted, and the plaintiff
                  fails to obtain a judgment more favourable than the offer:
                </p>
                <ul className="list-disc pl-4 text-slate-700 space-y-1 text-sm">
                  <li>Plaintiff receives <strong>partial indemnity costs</strong> up to the date the offer was served</li>
                  <li>Defendant receives <strong>partial indemnity costs</strong> from the date of the offer onward</li>
                </ul>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                The Rule 49 costs consequences apply automatically — the court does not have discretion
                to refuse them unless the offer was not made in good faith or there are exceptional
                circumstances. The leading case is <em>Walker v Ritchie</em> [2006] 2 SCR 428 (SCC),
                confirming that Rule 49.10 costs operate as near-automatic consequences except in
                extraordinary cases.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Key requirements for a Rule 49 offer to attract costs consequences:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>Must be in writing and signed by the party or their lawyer</li>
                <li>Must comply with the formal requirements of Rule 49.02</li>
                <li>Must be open for acceptance (not lapsed or withdrawn) at the time of judgment</li>
                <li>Must be served on the opposing party — not just communicated informally</li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                Rule 49 does not apply to costs motions or interlocutory proceedings — it applies
                at the trial or final hearing level. Rule 49.13 grants the court discretion to
                consider offers made that do not comply with Rule 49&apos;s formal requirements
                when exercising its costs discretion generally.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Costs on Motions</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Costs on motions are governed by the general costs framework. The general rule
                is that costs of a motion follow the event of the motion — the successful party
                is entitled to costs from the unsuccessful party. However, the motion judge has
                broad discretion:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>Costs in the cause — costs of the motion follow the result of the main proceeding</li>
                <li>No costs — where the motion raised genuine issues or where both parties had mixed success</li>
                <li>Costs to one party regardless of outcome — where the motion was necessary regardless of the result</li>
                <li>Costs thrown away — where an adjournment resulted from one party&apos;s default</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                On summary judgment motions, costs are significant because of the substantial work
                involved. If the motion is granted, the successful party typically receives partial
                indemnity costs. If the motion is dismissed, the respondent typically receives
                partial indemnity costs of defending the motion.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The court assesses motion costs based on proportionality — costs on a simple
                procedural motion will be modest ($1,500–5,000), while costs on a contested
                multi-day summary judgment motion can be $20,000–100,000 or more depending
                on the complexity and amounts at stake.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Disbursements</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Costs orders include both legal fees and disbursements. Disbursements are
                out-of-pocket expenses incurred by counsel in advancing the litigation, including:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>Court filing fees and hearing fees</li>
                <li>Expert witness fees (can be very significant in complex cases)</li>
                <li>Process server fees and costs of service</li>
                <li>Transcript costs for examinations for discovery</li>
                <li>Travel and accommodation for out-of-town proceedings</li>
                <li>Document reproduction and discovery database costs</li>
                <li>HST on professional fees (recoverable as a disbursement where the client is not HST-registered)</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                Expert witness fees have become a significant issue in Ontario costs. Courts will
                scrutinize the reasonableness of expert fees and will reduce disbursements where
                the expert work was disproportionate to the issues or where multiple experts were
                retained for the same purpose. The losing party is not obligated to fund the
                winning party&apos;s expert shopping.
              </p>
              <p className="text-slate-700 leading-relaxed">
                HST is recoverable as a disbursement only where the client is not entitled to
                claim an input tax credit — i.e., where the client is not an HST registrant or
                where the litigation costs are personal, not business-related. Lawyers must include
                HST on their costs claims where the client cannot recover it as an ITC.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Security for Costs</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under Rule 56, a defendant may move for an order requiring the plaintiff to post
                security for costs. The court may order security if:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>The plaintiff is ordinarily resident outside Ontario (Rule 56.01(1)(a))</li>
                <li>The plaintiff is a corporation without assets in Ontario to satisfy a costs award</li>
                <li>There is reason to believe the claim is frivolous and vexatious</li>
                <li>The plaintiff is a nominal plaintiff with no real interest in the outcome</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                The amount of security is at the court&apos;s discretion — typically pegged to
                an estimate of the anticipated costs of the proceeding to a specified stage.
                If the plaintiff fails to post the required security, the action may be stayed
                or dismissed.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Courts are cautious about using security for costs to deny access to justice.
                In <em>Lavallee, Rackel &amp; Heintz v Canada (Attorney General)</em> [2002] 3 SCR 209,
                the court confirmed that security for costs orders must not effectively bar a meritorious
                claim by an impecunious plaintiff. The court balances the defendant&apos;s legitimate
                interest in protection from a costs award against the plaintiff&apos;s right to
                have their claim heard.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The Business Corporations Act creates a specific security for costs mechanism for
                derivative actions and oppression remedy applications — courts may require the
                applicant to give security for costs where the claim appears unlikely to succeed
                or where the applicant is motivated by an improper purpose.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Personal Costs Orders Against Lawyers</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In rare circumstances, Ontario courts can order a lawyer to personally pay costs
                that would otherwise be borne by their client — or to reimburse costs that the
                client was ordered to pay. These orders arise under Rule 57.07 and the court&apos;s
                inherent jurisdiction over officers of the court.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The threshold is high. Personal costs orders against counsel require a finding that
                the lawyer caused costs to be incurred without reasonable cause, or that costs were
                wasted through the lawyer&apos;s fault — not merely poor judgment, but conduct
                amounting to abuse of process, bad faith, or breach of professional duty to the court.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Conduct attracting personal costs orders includes:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>Filing materials known to be false or misleading</li>
                <li>Pursuing motions known to be without merit for a collateral purpose</li>
                <li>Advising a client to take a position known to be in bad faith</li>
                <li>Improper communications with a judge (ex parte contacts)</li>
                <li>Deliberately causing adjournments through unpreparedness</li>
              </ul>
              <p className="text-slate-700 leading-relaxed">
                In <em>Menchella v Menchella</em> (1999) 98 OAC 153 (ONCA), the court articulated
                the standard: a personal costs order requires that counsel&apos;s conduct be
                clearly reprehensible. Courts guard against using personal costs orders to chill
                legitimate advocacy or to second-guess counsel&apos;s strategic decisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Costs in Family Law</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Family law costs are governed by Rule 24 of the <em>Family Law Rules</em>, O. Reg.
                114/99, which is distinct from the general civil Rules of Civil Procedure. Under
                Rule 24(1), a successful party is presumptively entitled to costs. Rule 24(4) sets
                out factors including the reasonableness of the parties&apos; positions, whether
                the case could have been resolved earlier, and the best interests of children.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Rule 18 of the Family Law Rules creates the family law equivalent of the Rule 49
                offer to settle — an offer that satisfies the formal requirements can shift costs
                obligations. Courts apply Rule 18 to encourage settlement of family law proceedings
                and to discourage positional litigation.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Costs awards in family law proceedings involving children are particularly complex —
                courts are reluctant to award significant costs against a party whose primary concern
                was their children&apos;s best interests, even where their position was ultimately
                unsuccessful, to avoid deterring parents from raising genuine child welfare concerns.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is the difference between partial indemnity and substantial indemnity costs in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Partial indemnity costs are the default award — roughly 50-60% of actual fees. Substantial
                    indemnity costs are a higher award (approximately 90% of actual fees) reserved for
                    reprehensible conduct or Rule 49 offer consequences where the offeror obtained a
                    better result at trial.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    How do Rule 49 offers to settle affect costs in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Under Rule 49, if a plaintiff&apos;s offer is rejected and the judgment is as good or
                    better, the plaintiff receives substantial indemnity costs from the offer date. If a
                    defendant&apos;s offer is rejected and the plaintiff does worse, the defendant gets
                    partial indemnity costs from the offer date (Walker v Ritchie [2006] 2 SCR 428).
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Can a judge order costs against a lawyer personally in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Yes, under Rule 57.07. The threshold is high — requires a finding of costs caused
                    without reasonable cause or wasted through the lawyer&apos;s fault. Bad faith,
                    abuse of process, or breach of duty to the court is required. Poor judgment or
                    lack of success alone does not suffice.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is the costs cap on motions in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    There is no fixed cap, but proportionality controls costs on motions. A simple procedural
                    motion might attract $2,000-5,000 in costs. A complex summary judgment motion can
                    attract $20,000-100,000+. The court scales costs to the complexity, importance, and
                    amounts at stake.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12 px-8 bg-amber-50 border border-amber-200 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Manage Litigation Files with Atticus
              </h2>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                Atticus helps Ontario litigators track costs, limitation periods, file deadlines,
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
                { href: "/blog/ontario-injunction-process", label: "Ontario Injunction Process" },
                { href: "/blog/ontario-limitation-period-discoverability", label: "Limitation Period Discoverability" },
                { href: "/blog/ontario-professional-negligence", label: "Professional Negligence" },
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
