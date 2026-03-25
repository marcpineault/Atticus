import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insurance Subrogation in Ontario | Rights, Waiver, and Limitations",
  description:
    "A comprehensive guide to insurance subrogation in Ontario: the equitable right of subrogation, statutory subrogation under the Insurance Act, waiver of subrogation clauses, the complete indemnification rule, and subrogation in property, liability, and health insurance contexts.",
  openGraph: {
    title: "Insurance Subrogation in Ontario | Rights, Waiver, and Limitations",
    description:
      "Understand insurance subrogation in Ontario — equitable and statutory rights, the made-whole rule, waiver clauses, subrogee limitations, and practical implications for Ontario insureds and insurers.",
    url: "https://getatticus.ca/blog/ontario-insurance-subrogation",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Insurance Subrogation in Ontario: Rights, Waiver, and Limitations",
  "description": "A comprehensive guide to insurance subrogation in Ontario covering the equitable right of subrogation, Insurance Act statutory provisions, the made-whole rule, waiver of subrogation clauses, and subrogation in property, liability, and accident benefits contexts.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-insurance-subrogation"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is insurance subrogation in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Insurance subrogation is the right of an insurer, after paying a claim, to step into the shoes of the insured and pursue recovery from the third party who caused the loss. The insurer can only recover what the insured could have recovered, and the insured's right of action passes to the insurer to the extent of the indemnity paid."
      }
    },
    {
      "@type": "Question",
      "name": "Does the insured have to be fully compensated before the insurer can subrogate in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally yes. Ontario courts apply the 'made-whole' rule (also called the complete indemnification rule): the insured must be fully indemnified for their total loss before the insurer can assert a subrogation claim against the recovered amount. If recovery is insufficient to fully compensate both, the insured takes priority."
      }
    },
    {
      "@type": "Question",
      "name": "Can a waiver of subrogation clause defeat an insurer's subrogation rights in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A waiver of subrogation clause in an insurance policy or contract can prevent the insurer from pursuing recovery against designated parties. Construction contracts frequently include mutual waivers of subrogation between the owner, general contractor, and subcontractors to prevent inter-party claims after a loss."
      }
    },
    {
      "@type": "Question",
      "name": "What is the limitation period for an insurer's subrogation claim in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An insurer's subrogation claim is subject to the same limitation periods that would have applied to the insured's direct claim — generally the basic two-year limitation period under the Limitations Act, 2002, running from when the insured discovered (or ought to have discovered) the claim. The insurer's own discovery date may differ from the insured's."
      }
    }
  ]
}`;

export default function OntarioInsuranceSubrogationPage() {
  return (
    <>
      <Script id="subrogation-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="subrogation-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Insurance Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insurance Subrogation in Ontario
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              The equitable right of subrogation, the made-whole rule, statutory provisions
              under the Insurance Act, waiver of subrogation clauses, and the insurer&apos;s
              limitations as subrogee — a practical guide for Ontario insurance lawyers.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Equitable Right of Subrogation</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Subrogation is an equitable doctrine that allows an insurer who has indemnified an insured for a
                loss caused by a third party to step into the insured&apos;s position and pursue the third party
                for recovery. The doctrine prevents the insured from receiving a double recovery — full indemnity
                from the insurer plus full recovery from the tortfeasor — and ensures that the responsible party
                ultimately bears the economic cost of the loss.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The foundational statement of the subrogation principle in Canada comes from <em>Ledingham v Ontario
                Hospital Services Commission</em> [1975] 1 SCR 332, affirming Lord Cairns&apos; formulation in
                <em> Castellain v Preston</em> (1883): the insurer is entitled to every right of the assured which
                can be, or has been exercised, so as to diminish the loss about which the insurer complains. The
                insurer stands in the shoes of the insured.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Subrogation rights arise automatically upon payment of the loss — the insurer need not take any
                formal assignment. However, in practice, insurers routinely obtain a signed subrogation receipt or
                assignment to formalize the right and avoid disputes about whether the insured retains any residual
                interest in the action.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Statutory Subrogation Under the Insurance Act</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Ontario&apos;s <em>Insurance Act</em>, R.S.O. 1990, c. I.8 supplements equitable subrogation with
                statutory provisions specific to different insurance lines.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Property Insurance — Section 148</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 148 of the Insurance Act provides that on payment of a loss under a property insurance
                contract, the insurer is subrogated to the rights of the insured against any person responsible
                for the loss. The insurer may bring an action in the name of the insured or in its own name
                (where statute permits) to the extent of the indemnity paid.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The statutory right does not enlarge the equitable right — the insurer can recover no more than
                what the insured could have recovered from the third party, and no more than the insurer actually
                paid. If the insurer paid only 80% of the loss (e.g., due to co-insurance or a deductible), it
                is subrogated only to 80% of the insured&apos;s rights.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Accident Benefits — SABS and Subrogation</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Statutory Accident Benefits under the <em>Statutory Accident Benefits Schedule</em> (O. Reg. 34/10)
                have a complex relationship with subrogation. Under s. 267.8 of the Insurance Act, an insurer who
                pays accident benefits to or on behalf of an insured is subrogated to the insured&apos;s right of
                action against a tort defendant to the extent of those benefits paid.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The AB insurer&apos;s subrogation rights are exercised through the tort action — the defendant&apos;s
                liability is reduced by the collateral benefits received, and the AB insurer&apos;s claim is against
                the tort defendant&apos;s insurer through inter-company arbitration under the <em>Fault Determination
                Rules</em> and the <em>Direct Compensation — Property Damage</em> regulations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Made-Whole Rule (Complete Indemnification)</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The most important limitation on insurers&apos; subrogation rights in Ontario is the
                &quot;made-whole&quot; rule, also called the complete indemnification or full indemnification
                rule. The principle: where the total recovery from all sources is insufficient to fully
                indemnify the insured for the total loss, the insured&apos;s claim takes priority over
                the insurer&apos;s subrogation claim.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The Supreme Court of Canada affirmed this principle in <em>Somersall v Friedman</em> [2002] 3 SCR 109.
                The insurer cannot share in a partial recovery until the insured has been made whole — that is,
                until the insured has received compensation equal to the total loss suffered, including amounts
                not covered by the insurance policy (deductibles, uninsured losses, non-pecuniary damages).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                In practice, the made-whole rule matters most when the third party is judgment-proof, underinsured,
                or when settlement proceeds are limited. In those situations, any recovery must first go to fill
                the insured&apos;s uncompensated losses before the insurer receives anything.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Parties frequently negotiate around the made-whole rule in settlement discussions, agreeing to
                split recovery proceeds between the insurer and insured in proportions reflecting their respective
                interests. Courts have approved such negotiated allocations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitations on the Insurer as Subrogee</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The insurer&apos;s rights as subrogee are derivative — the insurer can stand in no better position
                than the insured. This has several important consequences:
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Defences Available to the Defendant</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                The defendant can raise against the subrogating insurer any defence that would have been available
                against the insured directly — contributory negligence, voluntary assumption of risk, limitation
                periods, releases, and contractual limitations. The insurer takes the insured&apos;s cause of
                action as it existed at the time of payment, warts and all.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">No Action Against the Insured</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                An insurer cannot subrogate against its own insured. A property insurer who pays for damage caused
                (even partly) by the insured cannot use subrogation to recover those amounts from the insured. This
                is a fundamental principle: the insured must not be worse off from the insurer&apos;s subrogation
                exercise than from not having insurance at all.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The issue becomes complex where the insured and the third party are co-insureds under the same policy.
                Ontario courts have generally held that a co-insured is treated as the insured for subrogation
                purposes — the insurer cannot subrogate against a co-insured. See <em>T. Eaton Co. v Smith</em>
                [1978] 2 SCR 749.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Limitation Periods</h3>
              <p className="text-slate-700 leading-relaxed">
                The insurer&apos;s subrogation claim is subject to the same limitation periods applicable to the
                insured&apos;s direct claim — the basic two-year period under the <em>Limitations Act, 2002</em>,
                s. 4, running from the date of discoverability. The insurer&apos;s own discovery date (typically
                when it paid the claim and learned of the third party&apos;s involvement) may differ from the
                insured&apos;s. Ontario courts have generally held that the limitation period runs from the
                insurer&apos;s date of discoverability as subrogee, not the insured&apos;s original discovery date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Waiver of Subrogation</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A waiver of subrogation is an agreement — either in the insurance policy itself or in an underlying
                contract — that the insurer will not exercise subrogation rights against a specified party. Waivers
                of subrogation are extremely common in:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li><strong>Construction contracts</strong> — CCDC 2 standard form contracts include mutual waivers between owner, contractor, and subcontractors for losses covered by the project property insurance</li>
                <li><strong>Commercial leases</strong> — landlord and tenant waive subrogation rights against each other for insured losses</li>
                <li><strong>Joint venture agreements</strong> — co-venturers waive subrogation rights to prevent inter-party claims from disrupting the project</li>
                <li><strong>Equipment leases and service contracts</strong> — waiver of subrogation against the counterparty for certain insured losses</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                The effectiveness of a contractual waiver of subrogation depends on the insurer&apos;s agreement.
                If the underlying contract contains a waiver but the insurance policy does not also contain a
                corresponding waiver endorsement, the insurer may not be bound — it could argue that the insured
                agreed to compromise the insurer&apos;s rights without authority, potentially breaching the
                cooperation clause.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Best practice for commercial transactions: ensure the insurance policy contains a blanket waiver
                of subrogation endorsement (or specific named-party waiver) that matches the contractual waiver.
                Ontario courts have enforced contractual waivers of subrogation where the insurer was on notice
                or the policy endorsed the waiver. See <em>Agnew-Surpass Shoe Stores Ltd v Cummer-Yonge
                Investments Ltd</em> [1976] 2 SCR 221.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Subrogation in Construction Disputes</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Construction disputes generate complex subrogation issues. Under the CCDC 2 standard form contract,
                the owner is required to maintain property insurance covering the work, and all parties — owner,
                contractor, subcontractors — are named as additional insureds or beneficiaries. The policy includes
                a mutual waiver of subrogation among all named insureds.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The leading Ontario case is <em>Commonwealth Construction Co. v Imperial Oil Ltd</em> [1978] 1 SCR 317,
                establishing that subcontractors are entitled to the benefit of the owner&apos;s property insurance
                as unnamed co-insureds where the contractor-subcontractor relationship is within the contemplated
                insured risk. The insurer cannot subrogate against a co-insured subcontractor.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Post-<em>Commonwealth</em>, the question has shifted to whether particular subcontractors are
                co-insureds under the policy. Modern CCDC contracts address this explicitly through named insured
                endorsements and subrogation waiver clauses. Disputes still arise where non-standard contracts
                are used or where coverage terms are unclear.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Subrogation and Settlements</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A critical issue for Ontario insurance counsel: the insured cannot settle with the third party
                in a manner that prejudices the insurer&apos;s subrogation rights without the insurer&apos;s
                consent. If the insured releases the third party before the insurer has recovered its subrogation
                claim, the insured may be liable to reimburse the insurer for the lost subrogation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                This creates a practical conflict of interest in negotiations: the insured wants a global settlement
                of all claims (direct and subrogated); the insurer wants to preserve its right to pursue the
                third party separately or control the settlement to protect its subrogation interest.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Ontario courts have held that the insured can settle claims that are personal and unrelated to the
                insured loss without implicating the insurer&apos;s subrogation rights — the insurer&apos;s
                rights attach only to the claims arising from the loss for which it paid indemnity.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The insurer must be joined or given notice of settlement negotiations involving the insured loss
                once the insurer has exercised subrogation rights. Failure to give notice can result in the
                insurer being bound by a settlement it had no opportunity to participate in.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Health and Disability Insurance Subrogation</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Subrogation in health and disability insurance is governed by the Insurance Act and the specific
                policy terms. Publicly funded health care providers — OHIP — have a statutory right of
                subrogation under the <em>Health Insurance Act</em>, R.S.O. 1990, c. H.6.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under the Health Insurance Act, the Province of Ontario is subrogated to the rights of a person
                who has received insured services if those services were required as a result of a tort or breach
                of contract by a third party. In personal injury litigation, OHIP&apos;s subrogation claim for
                past and future health care costs must be resolved — either by payment or contractual assumption
                — as part of any global settlement.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Private group benefit plans similarly include subrogation clauses. Employees receiving disability
                benefits under a group plan who also recover tort damages from a third party must reimburse the
                plan insurer to the extent of the disability benefits paid, subject to the made-whole rule.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is insurance subrogation in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Insurance subrogation is the right of an insurer, after paying a claim, to step into the
                    shoes of the insured and pursue recovery from the third party who caused the loss. The insurer
                    can only recover what the insured could have recovered, and the insured&apos;s right of action
                    passes to the insurer to the extent of the indemnity paid.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Does the insured have to be fully compensated before the insurer can subrogate in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Generally yes. Ontario courts apply the &quot;made-whole&quot; rule: the insured must be fully
                    indemnified for their total loss before the insurer can assert a subrogation claim against
                    the recovered amount. If recovery is insufficient to fully compensate both, the insured takes
                    priority.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Can a waiver of subrogation clause defeat an insurer&apos;s subrogation rights in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Yes. A waiver of subrogation clause in an insurance policy or contract can prevent the insurer
                    from pursuing recovery against designated parties. Construction contracts frequently include
                    mutual waivers of subrogation between the owner, general contractor, and subcontractors to
                    prevent inter-party claims after a loss.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is the limitation period for an insurer&apos;s subrogation claim in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    An insurer&apos;s subrogation claim is subject to the same limitation periods that would have
                    applied to the insured&apos;s direct claim — generally the basic two-year limitation period
                    under the <em>Limitations Act, 2002</em>, running from when the insured discovered (or ought
                    to have discovered) the claim. The insurer&apos;s own discovery date may differ from the insured&apos;s.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12 px-8 bg-amber-50 border border-amber-200 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Manage Insurance Files with Atticus
              </h2>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                Atticus helps Ontario lawyers track limitation periods, manage insurance litigation files,
                and stay LSO-compliant — all in one platform built for Canadian law.
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
                { href: "/blog/ontario-limitation-period", label: "Ontario Limitation Periods" },
                { href: "/blog/ontario-negligence-law", label: "Ontario Negligence Law" },
                { href: "/blog/ontario-professional-negligence", label: "Professional Negligence" },
                { href: "/trust-accounting-ontario", label: "Trust Accounting Ontario" },
                { href: "/blog/ontario-unjust-enrichment", label: "Unjust Enrichment" },
                { href: "/blog/ontario-fiduciary-duty", label: "Fiduciary Duty in Ontario" },
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
