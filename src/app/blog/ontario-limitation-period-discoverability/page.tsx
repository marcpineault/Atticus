import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Limitation Period Discoverability | Limitations Act 2002 Discovery Rule",
  description:
    "A comprehensive guide to discoverability under Ontario's Limitations Act, 2002: the discovery rule, wilful concealment, the presumption of knowledge, special rules for minors and incapable persons, and the ultimate 15-year limitation period.",
  openGraph: {
    title: "Ontario Limitation Period Discoverability | Limitations Act 2002 Discovery Rule",
    description:
      "Understand Ontario's discoverability rule — when the two-year limitation period begins, the objectively discoverable knowledge standard, postponements for minors, wilful concealment, and the 15-year ultimate limitation.",
    url: "https://getatticus.ca/blog/ontario-limitation-period-discoverability",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Limitation Period Discoverability: Limitations Act 2002 Discovery Rule Guide",
  "description": "A comprehensive guide to the discoverability rule under Ontario's Limitations Act, 2002, including the knowledge standard, wilful concealment, postponements for vulnerable persons, the ultimate 15-year limitation, and transitional provisions.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-limitation-period-discoverability"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When does the two-year limitation period start running in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Limitations Act, 2002, s.5, the basic two-year limitation period begins on the day the claim was discovered — meaning the day the plaintiff first knew (or ought reasonably to have known) that the injury, loss, or damage occurred, that it was caused or contributed to by an act or omission, and that the act or omission was that of the person against whom the claim is made."
      }
    },
    {
      "@type": "Question",
      "name": "What is the ultimate limitation period in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ultimate limitation period under Limitations Act, 2002, s.15 is 15 years from the day the act or omission on which the claim is based took place. No proceeding can be commenced after 15 years regardless of discoverability, subject to very limited exceptions (minors and incapacity postponements cannot extend past the ultimate period in most cases)."
      }
    },
    {
      "@type": "Question",
      "name": "Does wilful concealment extend the limitation period in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under Limitations Act, 2002, s.5(1)(a)(iv) and s.5(2), if the person with the claim did not know, and could not reasonably have known, the material facts because of the defendant's concealment, the limitation period does not begin to run until discovery. Courts have applied this where defendants actively concealed negligence or fraudulently misled the plaintiff."
      }
    },
    {
      "@type": "Question",
      "name": "When does the limitation period start for a minor in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Limitations Act, 2002, s.6, a claim by a minor does not run until the minor reaches the age of majority (18 years old), at which point the two-year basic limitation begins. The ultimate 15-year limitation period is not postponed for minors — it runs from the date of the act or omission regardless of the claimant's age."
      }
    }
  ]
}`;

export default function OntarioLimitationPeriodDiscoverabilityPage() {
  return (
    <>
      <Script id="discoverability-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="discoverability-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Limitation Periods
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Limitation Period Discoverability
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              When the two-year basic limitation begins, the objective knowledge standard,
              wilful concealment, postponements for minors and incapable persons, and the
              15-year ultimate limitation — the complete guide to Ontario&apos;s discovery rule.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Discoverability Principle</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Before Ontario enacted the <em>Limitations Act, 2002</em>, S.O. 2002, c. 24, Sch. B, limitation
                periods typically ran from the date the cause of action arose — often before the plaintiff had
                any reasonable basis to know a claim existed. Courts developed the equitable discoverability
                doctrine to prevent injustice, but its scope was uncertain and varied by cause of action.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The 2002 Act codified a universal discoverability rule. Under s. 5(1), a claim is discovered on
                the earlier of:
              </p>
              <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-4">
                <li>The day the claimant first knew all four elements of the s. 5(1)(a) test; and</li>
                <li>The day a court determines the claimant first ought to have known those elements, applying
                    the reasonably diligent person standard under s. 5(1)(b).</li>
              </ol>
              <p className="text-slate-700 leading-relaxed">
                The four elements that must be known (or ought reasonably to have been known) are:
                (i) that the injury, loss or damage occurred; (ii) that it was caused or contributed to by an
                act or omission; (iii) that the act or omission was that of the defendant; and (iv) that the
                proceeding would be an appropriate means to seek remedy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Four Elements of Discovery Under Section 5</h2>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Element 1: The Injury, Loss, or Damage</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                The plaintiff must know (or ought to know) that an injury, loss, or damage actually occurred.
                This element prevents the limitation from running before any loss is manifest. In latent
                injury cases — asbestos disease, long-term medication side effects — the clock does not
                start until the plaintiff knows the disease or harm exists.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Element 2: Causation by an Act or Omission</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                The plaintiff must know that the loss was caused by an act or omission — not merely that
                a bad outcome occurred. In medical malpractice cases, the limitation typically runs not
                from the date of the negligent procedure but from when the plaintiff knew (or ought to
                have known) the outcome was caused by professional conduct rather than being a known
                complication or risk. See <em>Pirner v McTavish</em> 2018 ONCA 859.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Element 3: Identity of the Defendant</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                The plaintiff must know that the act or omission was that of the defendant specifically.
                Where the identity of the responsible party is genuinely unknown — for example, where a
                John Doe defendant or an unidentified manufacturer is involved — the limitation period
                does not run until identity becomes known or reasonably discoverable.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Ontario courts have applied this element where plaintiffs had knowledge of harm but not
                of which corporate entity in a group was the actual defendant, holding the limitation
                postponed until the specific entity was identified. See <em>Ferrara v Bernardi</em>
                2020 ONCA 38.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Element 4: Appropriateness of a Legal Proceeding</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                The plaintiff must know that a legal proceeding would be an appropriate means to seek
                remedy for the loss. This element was controversial — courts debated whether it merely
                described when a claim was legally cognizable or whether it required the plaintiff to
                have reason to believe litigation was a practical option.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The Supreme Court of Canada resolved this in <em>Grant v Torstar Corp</em> [2009] 3 SCR 640
                and clarified the element in <em>Presidential MSH Corp v Marr Foster &amp; Co LLP</em>
                2017 ONCA 325. The appropriateness element is satisfied when the plaintiff knows (or ought
                to know) that the defendant&apos;s conduct may give rise to legal liability — the plaintiff
                need not have sought legal advice or received confirmation of a viable claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Objective Knowledge Standard</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 5(1)(b) of the Limitations Act introduces the objective limb: the claim is
                discovered when a reasonably diligent person with the abilities and in the circumstances
                of the claimant first ought to have discovered those elements.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The standard is objective but person-specific — the court asks what <em>this</em> claimant,
                with their actual circumstances and characteristics, ought reasonably to have discovered.
                This means that a plaintiff with fewer resources, less education, or who speaks limited
                English is not held to the same standard as a sophisticated corporate plaintiff with
                access to legal counsel.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The leading Ontario Court of Appeal case is <em>Lawless v Anderson</em> 2011 ONCA 102,
                confirming that the objective standard requires courts to consider the actual circumstances
                of the plaintiff, not a hypothetical average person. Courts consider what information was
                available, what steps a reasonably diligent person in that position would have taken,
                and what knowledge would have resulted from those steps.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Plaintiffs who unreasonably delay seeking medical diagnosis, who ignore obvious signs of
                damage, or who fail to investigate when clearly on notice of a potential problem may be
                deemed to have discovered the claim before they subjectively acknowledged it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Wilful Concealment and Fraudulent Misrepresentation</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 5(1)(a)(iv) and s. 5(2) of the Limitations Act address situations where a defendant&apos;s
                conduct prevented the plaintiff from discovering the claim. Where the person against whom
                the claim is made wilfully concealed facts that the claimant needed to know, the limitation
                does not begin to run until the concealment ends or the claimant discovers the concealed facts.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Ontario courts have applied the concealment principle broadly in professional negligence cases
                where lawyers or accountants misled clients about the status of matters, and in product
                liability cases where manufacturers suppressed knowledge of defects. The defendant&apos;s
                conduct must be something more than simple non-disclosure of a potential claim — active
                concealment, misrepresentation, or deliberate steps to prevent discovery are required.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The concealment tolls the limitation period prospectively — once the plaintiff discovers
                (or ought to discover) the concealed facts, the two-year period begins running from that
                point. The concealment does not reset the ultimate 15-year period under s. 15.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Postponement for Minors</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 6 of the Limitations Act postpones the running of the basic two-year limitation
                period for a claimant who was a minor (under 18) when the claim arose. The limitation
                period does not run while the claimant is a minor. Once the claimant turns 18, the
                two-year period begins running — even if the minor had subjective knowledge of the claim
                earlier.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Critical distinction: s. 6 postpones the <em>basic</em> limitation period only. The
                ultimate 15-year limitation period under s. 15 is <em>not</em> postponed for minors.
                If the act or omission occurred when the child was young and more than 15 years have
                passed since then, the ultimate limitation may have expired before the child turns
                18 — leaving no claim available.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This produces harsh results in cases involving historical abuse of young children.
                Ontario courts have grappled with constitutional challenges to the 15-year ultimate
                limitation in childhood abuse cases, though it was upheld in <em>M (K) v M (H)</em>
                [1992] 3 SCR 6 under the pre-2002 law (incest). Post-2002 cases have generally
                enforced the ultimate limitation despite its harsh application to minors.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Postponement for Incapacity</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 7 of the Limitations Act postpones the basic two-year period for a claimant who
                was incapable of commencing a proceeding on the date the claim was discovered, and is
                not represented by a litigation guardian. The period is postponed until the earlier of:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>The day the person ceases to be incapable</li>
                <li>The day a litigation guardian is appointed for the person</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                &quot;Incapable&quot; is defined in s. 7(2) with reference to the <em>Substitute Decisions
                Act, 1992</em> — broadly, the inability to understand information relevant to making
                a decision or to appreciate the consequences of a decision. Cognitive impairment,
                dementia, and severe mental illness may qualify.
              </p>
              <p className="text-slate-700 leading-relaxed">
                As with the minor&apos;s postponement, the s. 7 postponement does not extend the ultimate
                15-year limitation under s. 15. Incapacity cannot revive an expired ultimate limitation.
                This can leave permanently incapable persons without any claim if the ultimate period
                has expired before incapacity terminates or a litigation guardian is appointed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Ultimate 15-Year Limitation Period</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 15 of the Limitations Act establishes that no claim may be brought more than
                15 years after the day on which the act or omission on which the claim is based took place.
                This is an absolute backstop — it runs regardless of discoverability, regardless of
                the plaintiff&apos;s knowledge, and (with very limited exceptions) regardless of
                postponements.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The 15-year ultimate limitation is subject to suspension only in limited circumstances
                under s. 15(4)–(6): wilful concealment by the defendant, or claims arising from
                sexual assault, other specified assaults, or breach of duty by a person in a position
                of trust or authority. For those excepted claims, there is no ultimate limitation —
                the basic two-year period applies from the date of subjective or objective discovery,
                potentially running for decades.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The practical effect of s. 15: even where the plaintiff had no actual knowledge of
                the claim, and had no reasonable basis to suspect it existed, the claim is permanently
                extinguished 15 years after the event. Courts have no discretion to extend the
                ultimate period except as specifically provided in the Act.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Discoverability in Specific Practice Areas</h2>

              <div className="space-y-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Medical Malpractice</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Discovery runs from when the plaintiff knew (or ought to have known) the adverse outcome
                    was caused by medical conduct rather than being a known risk. Patients often discover
                    this through subsequent medical investigation revealing a prior error, or through
                    receiving a medical record. The two-year period from that discovery is strict.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Professional Negligence (Solicitors)</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Solicitor negligence limitation typically runs from when the client suffered actual
                    damage — not merely when the negligent advice was given. In transactional matters,
                    this is often when the deal closes without the protection the lawyer should have
                    secured. Where the lawyer concealed the error, discovery is postponed. See
                    <em> Ferrara v Bernardi</em> 2020 ONCA 38.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Property Damage</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    For latent building defects, discovery runs from when the defect became reasonably
                    discoverable by inspection — not the date of construction. A reasonable property
                    owner is expected to conduct reasonable inspections and act on visible deterioration.
                    Courts have held that the limitation begins when visible signs of damage appear,
                    even if the full extent of the defect is not yet known.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Sexual Assault and Abuse</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Under s. 10 of the Limitations Act (as amended), no limitation period applies to
                    claims based on sexual assault or assault where the defendant was in a position
                    of trust or authority. The removal of the limitation period is retroactive and
                    applies to claims that were previously limitation-barred. This was a major reform
                    intended to remove barriers to historical abuse claims.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreements to Vary and Contracting Out</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 22 of the Limitations Act prohibits contracting out of the Act in consumer
                agreements. However, business parties may agree to vary limitation periods — either
                shortening or lengthening them — within the Act&apos;s framework. Agreements to shorten
                limitations are enforceable between commercial parties provided they are clear and the
                shortened period is not unconscionably brief.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                A common issue in construction and service contracts: contractual notice provisions
                that require written notice of claims within a very short window (e.g., 30 days of
                the event giving rise to the claim) operate as contractual conditions precedent,
                not limitation periods — but failure to comply forfeits the claim regardless of
                the statutory limitation. Courts have enforced these clauses strictly where the
                parties had equal bargaining power.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Importantly, parties can also agree to extend or suspend the running of a limitation
                period through a standstill agreement — this is common in commercial disputes where
                parties are engaged in settlement negotiations and want to preserve the option of
                litigation without the pressure of an approaching limitation date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    When does the two-year limitation period start running in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Under the <em>Limitations Act, 2002</em>, s.5, the basic two-year limitation period begins
                    on the day the claim was discovered — meaning the day the plaintiff first knew (or ought
                    reasonably to have known) that the injury occurred, that it was caused by an act or omission,
                    that the act or omission was that of the defendant, and that a legal proceeding would be
                    an appropriate remedy.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is the ultimate limitation period in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    The ultimate limitation period under <em>Limitations Act, 2002</em>, s.15 is 15 years
                    from the day the act or omission on which the claim is based took place. No proceeding
                    can be commenced after 15 years regardless of discoverability, subject to very limited
                    exceptions for sexual assault, specified assaults, and trust-position breaches.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Does wilful concealment extend the limitation period in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Yes. If the defendant actively concealed facts the plaintiff needed to discover the claim,
                    the limitation period does not begin to run until the concealment ends or the plaintiff
                    discovers the concealed facts. Active misrepresentation or deliberate suppression —
                    not mere non-disclosure — is required.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    When does the limitation period start for a minor in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Under <em>Limitations Act, 2002</em>, s.6, the basic two-year limitation does not run
                    while the claimant is under 18. Once the claimant turns 18, the two-year period begins.
                    However, the ultimate 15-year limitation under s.15 is not postponed for minors and
                    runs from the date of the act or omission regardless of the claimant&apos;s age.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12 px-8 bg-amber-50 border border-amber-200 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Never Miss a Limitation Period with Atticus
              </h2>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                Atticus AI extracts key dates from your client documents and flags Ontario Limitations
                Act deadlines automatically — so critical dates never get missed.
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
                { href: "/ontario-limitation-period", label: "Ontario Limitation Periods Overview" },
                { href: "/blog/ontario-professional-negligence", label: "Professional Negligence" },
                { href: "/blog/ontario-solicitor-undertakings", label: "Solicitor Undertakings" },
                { href: "/trust-accounting-ontario", label: "Trust Accounting Ontario" },
                { href: "/blog/ontario-charter-remedies", label: "Ontario Charter Remedies" },
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
