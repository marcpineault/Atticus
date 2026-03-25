import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Trespass to Land: Elements, Defences, and Remedies",
  description:
    "Complete guide to Ontario trespass to land: direct voluntary act, no damage required, continuing trespass, defences (licence, consent, necessity, legal authority), remedies (injunction, damages, nominal, mesne profits), trespass by encroachment, adverse possession, and limitation periods.",
  openGraph: {
    title: "Ontario Trespass to Land: Elements, Defences, and Remedies",
    description:
      "Ontario trespass to land law: actionable per se, licence and consent defences, continuing trespass, mesne profits, injunction, adverse possession, and the Trespass to Property Act.",
    url: "https://getatticus.ca/blog/ontario-trespass-to-land",
    siteName: "Atticus",
    type: "article",
  },
  alternates: {
    canonical: "https://getatticus.ca/blog/ontario-trespass-to-land",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Trespass to Land: Elements, Defences, and Remedies",
  "description": "Complete guide to Ontario trespass to land covering elements, actionable per se, continuing trespass, licence and consent defences, legal authority defences, mesne profits, injunction and damages remedies, encroachment, adverse possession, and the Trespass to Property Act.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-trespass-to-land",
  "keywords": ["trespass to land Ontario", "trespass per se Ontario", "mesne profits Ontario", "continuing trespass Ontario", "adverse possession Ontario", "Trespass to Property Act Ontario", "encroachment Ontario", "injunction trespass Ontario"]
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is trespass to land actionable per se in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Trespass to land is actionable per se in Ontario — no actual damage needs to be proved. The act of entering or remaining on another's land without lawful authority or consent is itself the wrong. The plaintiff can recover nominal damages even without proof of loss, and may obtain an injunction to prevent continuing or threatened trespass."
      }
    },
    {
      "@type": "Question",
      "name": "What are mesne profits in a trespass to land claim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mesne profits are the profits made by a trespasser from their occupation of another's land, or the value of use and occupation the plaintiff has been deprived of. In landlord-tenant disputes and wrongful possession cases, mesne profits represent the rental value of the property for the period of wrongful occupation. The plaintiff does not need to prove the trespasser actually profited — the measure is the fair rental value of what the plaintiff was deprived of."
      }
    },
    {
      "@type": "Question",
      "name": "What is the limitation period for trespass to land in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Limitations Act 2002, the basic limitation period for trespass to land claims is two years from the date the claim was discovered (s.4). For continuing trespass, each continuing act of trespass gives rise to a fresh cause of action — but claims for damages more than two years before the action are statute-barred. The ultimate limitation period is 15 years from the act or omission (s.15)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between the civil tort of trespass and the Trespass to Property Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The civil tort of trespass to land is a common law action in the courts for damages, injunction, or mesne profits. The Trespass to Property Act R.S.O. 1990, c. T.21 is a provincial statute creating a regulatory offence (not a civil cause of action) for entering premises without authority. TPA charges are prosecuted by the Crown in the Ontario Court of Justice and carry fines up to $10,000. A landowner can pursue both a civil trespass action and a TPA complaint simultaneously."
      }
    }
  ]
}`;

export default function OntarioTrespassToLand() {
  return (
    <>
      <Script id="trespass-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="trespass-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Property Law / Tort
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Trespass to Land: Elements, Defences, and Remedies
            </h1>
            <p className="text-slate-300 text-lg mb-4 max-w-3xl">
              Trespass to land is actionable per se — no damage required. Direct voluntary act, continuing
              trespass, licence and legal authority defences, mesne profits, injunction, encroachment,
              adverse possession, and the Trespass to Property Act.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Property Law / Tort</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-12">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaways</h2>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• Trespass to land is actionable per se — no damage required; nominal damages available without proof of loss</li>
              <li>• The act must be direct and voluntary — consequential entries may be negligence, not trespass</li>
              <li>• Continuing trespass gives a fresh cause of action each day — each day of wrongful occupation is a new tort</li>
              <li>• Licence is the primary defence — revocable at will unless coupled with an interest or contractual</li>
              <li>• Mesne profits = fair rental value of land during wrongful occupation (not actual profits of the trespasser)</li>
              <li>• Trespass to Property Act (provincial offence) applies alongside, not instead of, civil remedies</li>
              <li>• Adverse possession under Real Property Limitations Act: 10 years open, continuous, exclusive possession as of right (Registry Act land; generally not available for LT absolute title after 2006)</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Elements of Trespass to Land</h2>
            <p className="text-slate-700 mb-4">
              Trespass to land is a direct, voluntary, and intentional interference with another person&apos;s
              possession of land. The interference need not cause any actual damage — trespass is
              actionable per se. The key elements are:
            </p>
            <ol className="list-decimal pl-6 text-slate-700 space-y-3 mb-4">
              <li>
                <strong>Direct act</strong> — the defendant&apos;s body, a thing under their control, or
                something they set in motion must directly enter the plaintiff&apos;s land. The directness
                requirement distinguishes trespass from private nuisance (indirect interference with
                enjoyment of land). Throwing debris onto neighbouring land is trespass; dust or noise
                from an adjoining property is nuisance.
              </li>
              <li>
                <strong>Voluntary act</strong> — the defendant must have chosen to enter or remain. Entering
                land while sleepwalking or being carried unconsciously by a third party is not trespass
                because there is no voluntary act.
              </li>
              <li>
                <strong>Intentional act</strong> — the intent required is the intent to do the physical act
                (enter the land), not the intent to trespass. A person who enters another&apos;s land
                believing it to be their own still commits trespass — honest mistake of fact is not a
                defence to the tort itself (though it may reduce damages or be relevant to relief).
              </li>
              <li>
                <strong>Land in possession of the plaintiff</strong> — the plaintiff must have possession
                (not necessarily ownership) at the time of the entry. A tenant can sue for trespass; a
                licence holder generally cannot (the trespass is against the licensor, not the licensee,
                unless the licensee has exclusive possession).
              </li>
              <li>
                <strong>No lawful authority or consent</strong> — the entry must be without legal
                justification or the plaintiff&apos;s permission.
              </li>
            </ol>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Extent of Land: Cuius Est Solum</h4>
              <p className="text-slate-700 text-sm">
                The principle <em>cuius est solum, eius est usque ad coelum et ad inferos</em> — whoever
                owns the soil owns everything above and below — applies in modified form in Ontario.
                Trespass extends to airspace at heights reasonably used in connection with the land
                (<em>Berntt v Vancouver (City)</em>; confirmed in Ontario caselaw). Deep underground
                strata (mines and minerals) may be separately owned under the Mining Act. Overhanging
                branches and encroaching structures are common trespass scenarios in Ontario practice.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Continuing Trespass</h2>
            <p className="text-slate-700 mb-4">
              Where a trespass is not a single act but a continuing state of affairs (e.g., a structure,
              pile of materials, or person remaining on the plaintiff&apos;s land), each day of continuation
              constitutes a fresh cause of action. This has important consequences:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                The plaintiff can claim damages for the entire period of continuing trespass, subject only
                to the two-year limitation period running back from the date of the claim (claims for
                damages more than two years before the action are statute-barred)
              </li>
              <li>
                The continuing nature supports an injunction to compel removal — the trespasser cannot
                purchase an ongoing right to trespass by paying damages for the initial entry
              </li>
              <li>
                Mesne profits (see below) accrue for each day of continued wrongful occupation
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Defences to Trespass to Land</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-3 font-semibold">Defence</th>
                    <th className="text-left px-5 py-3 font-semibold">Requirements / Limits</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      defence: "Licence",
                      req: "Express or implied permission from the person in possession. Bare licences (not coupled with an interest, not contractual) are revocable at will — reasonable notice of revocation required before trespass arises. Contractual licences may not be revocable if breach would be actionable in contract.",
                    },
                    {
                      defence: "Consent",
                      req: "Consent may be express or implied from the circumstances (e.g., common use of a shared access route). Consent obtained by fraud or misrepresentation is void. Consent extends only to the authorized purpose — entering under one authorization to commit another act (e.g., entering to read a meter but then examining private papers) is trespass ab initio.",
                    },
                    {
                      defence: "Legal authority / public right",
                      req: "Statutory authority (bailiff executing writ of possession, police entering under warrant, utility company exercising statutory easement, building inspector exercising statutory power of entry under municipal by-law or Building Code Act). The authority must be properly exercised within its scope — acting outside the statutory authority is trespass.",
                    },
                    {
                      defence: "Necessity",
                      req: "Entry onto another's land to prevent greater harm. Private necessity (entering to retrieve your own property at risk of destruction, breaking down a door to extinguish a fire spreading to neighbours) provides a defence to liability but may require compensation. True emergency necessity (preventing loss of life) may negate liability entirely.",
                    },
                    {
                      defence: "Right of way / easement",
                      req: "A registered easement or prescriptive right of way over the land. The use must be within the scope of the easement — use beyond the authorized purpose is trespass.",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.defence}</td>
                      <td className="px-5 py-3 text-slate-600">{row.req}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Remedies for Trespass to Land</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Nominal Damages</h3>
            <p className="text-slate-700 mb-4">
              Because trespass is actionable per se, a plaintiff who proves trespass but cannot establish
              actual damage is entitled to nominal damages — a small sum (typically $1 to $500) acknowledging
              the violation of their legal right. This is significant because it confirms the right and
              can support injunctive relief.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Compensatory Damages</h3>
            <p className="text-slate-700 mb-4">
              Compensatory damages restore the plaintiff to the position they would have been in without
              the trespass: physical damage to the land (repair costs, loss of value), damage to buildings
              or structures, consequential losses flowing from the interference, and emotional distress
              in egregious cases.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Mesne Profits</h3>
            <p className="text-slate-700 mb-4">
              Mesne profits are recoverable for the period of wrongful occupation — the fair rental or
              use value of the land while the trespasser was in unlawful possession. The measure is not
              the profit the defendant made, but the value of what the plaintiff was deprived of
              (the occupation value or market rental value). Mesne profits are commonly claimed in:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
              <li>Landlord and tenant disputes after expiry of tenancy or unlawful holdover</li>
              <li>Adverse possession claims (where the possessor fails to make out a prescriptive title)</li>
              <li>Encroachment by neighbouring buildings</li>
              <li>Recovery of land from a trespasser after prolonged wrongful occupation</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Injunction</h3>
            <p className="text-slate-700 mb-4">
              An injunction requiring removal of a trespassory structure or cessation of trespassory
              conduct is available where damages are inadequate. Courts exercise discretion and may
              decline to order removal where:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
              <li>The encroachment is trivial and removal disproportionately costly</li>
              <li>The plaintiff has acquiesced or delayed unreasonably (laches)</li>
              <li>Damages in lieu (Courts of Justice Act s.99) adequately compensate</li>
            </ul>
            <p className="text-slate-700">
              Following <em>Jaggard v Sawyer</em> [1995] 2 All ER 189 principles (applied in Ontario),
              the court considers whether the interference is small, capable of being estimated in money,
              adequately compensated by a small money payment, and whether it would be oppressive to grant
              the injunction given the defendant&apos;s conduct.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Encroachment by Buildings and Structures
            </h2>
            <p className="text-slate-700 mb-4">
              Encroachment — where a building, fence, retaining wall, or eave overhangs or physically
              crosses the boundary — is a common form of trespass in Ontario real estate practice.
              Key considerations:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                The owner of the encroaching structure is a trespasser even if they did not know the
                structure crossed the boundary line
              </li>
              <li>
                A purchaser who acquires a property with an encroaching structure may become liable
                for the continuing trespass after purchase (prudent title search should identify
                encroachments using a survey)
              </li>
              <li>
                Remedies: injunction (mandatory removal), damages in lieu of injunction, or a licence
                agreement / easement purchased from the neighbour to regularize the encroachment
              </li>
              <li>
                Title insurance may cover encroachments for both owner and lender policies — review
                exceptions before relying on coverage
              </li>
              <li>
                An AOLS-surveyor&apos;s reference plan (deposited plan of survey) is typically required to
                definitively establish the boundary and the extent of encroachment
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Trespass to Property Act (Ontario)
            </h2>
            <p className="text-slate-700 mb-4">
              The <em>Trespass to Property Act</em> R.S.O. 1990, c. T.21 creates provincial regulatory
              offences (not civil causes of action) for entering premises without authority:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                A person who enters premises or engages in an activity on premises prohibited by the
                occupier (by notice, sign, or verbal direction) is guilty of an offence
              </li>
              <li>
                Premises are defined broadly to include all buildings, lands, and water (including
                agricultural land and woodlands)
              </li>
              <li>
                Fines: up to $10,000 for an individual; charges prosecuted in Ontario Court of Justice
                by Crown Attorney (police-lay charges)
              </li>
              <li>
                The TPA does not create a private right of action for compensation — the occupier must
                pursue civil trespass in the Superior Court for damages and injunctions
              </li>
              <li>
                <strong>Section 9 civil action</strong> — s.9 creates a cause of action for the
                provincial offence but is limited: a person convicted of a TPA offence is liable to
                the occupier for damages arising from the offence. This is separate from and in
                addition to the common law tort.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Adverse Possession in Ontario
            </h2>
            <p className="text-slate-700 mb-4">
              Adverse possession (possessory title) allows a person who has been in open, continuous,
              exclusive, and uninterrupted possession of another&apos;s land for 10 years under the
              <em> Real Property Limitations Act</em> R.S.O. 1990, c. L.15 to extinguish the paper
              title holder&apos;s right to recover the land.
            </p>
            <p className="text-slate-700 mb-4">
              Requirements for adverse possession in Ontario:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li><strong>Open</strong> — visible use that puts the paper owner on notice</li>
              <li><strong>Continuous</strong> — consistent with the nature of the land for the full 10-year period</li>
              <li><strong>Exclusive</strong> — to the exclusion of the paper owner and others with a better right</li>
              <li><strong>As of right</strong> — not by permission; a licence defeats adverse possession</li>
              <li><strong>Inconsistent use</strong> — Ontario courts have emphasized the use must be inconsistent with the paper title holder&apos;s intended use of the land (<em>Keefer v Arillotta</em> (1976) 13 OR (2d) 680 CA)</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Land Titles Act — Limitations Act 2002 Bar</h4>
              <p className="text-slate-700 text-sm">
                The <em>Limitations Act</em> 2002 effectively abolished adverse possession for Land Titles
                (absolute title) land where the 10-year period has not already accrued as of October 19, 2006.
                Adverse possession claims remain available on Registry Act land and Land Titles Qualified
                (LTQ) land where use pre-dates the conversion. Always check title quality before advising
                a client on possessory title claims.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I sue for trespass if the neighbour's tree branches overhang my property?",
                  a: "Yes — overhanging branches are a form of continuing trespass because the tree physically enters your airspace and land. The traditional common law remedy was self-help (cutting back branches to the boundary line at your own expense). You can also sue for an injunction requiring the neighbour to trim the branches or for damages if the branches cause harm. Ontario courts may award damages for loss of amenity or the cost of cutting. Note: do not enter the neighbour's land to cut the roots without permission — that would itself be trespass.",
                },
                {
                  q: "What is the difference between trespass and private nuisance?",
                  a: "Trespass requires a direct physical entry onto or into the plaintiff's land (including things under the defendant's control placed onto the land). Private nuisance is an indirect interference with the plaintiff's use and enjoyment of their land (noise, smell, vibration, smoke). Trespass is actionable per se (no damage needed); private nuisance requires proof of unreasonable interference causing actual damage. Both can be remedied by injunction and damages.",
                },
                {
                  q: "If a contractor enters my land without permission to install a utility, what are my remedies?",
                  a: "You can claim damages for any physical damage to the land, mesne profits for the period of occupation, and an injunction to prevent further interference. If the utility holds a registered easement, the entry may be authorized — check the registered instrument. If the utility is exercising a statutory power of entry (Ontario Energy Board Act, Municipal Act), the power must be properly exercised; entries outside the statutory scope are trespass. Expropriation compensation may apply if the entry effectively amounts to a taking.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Manage Your Real Estate and Litigation Matters with Atticus
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Atticus is the Ontario practice management platform built for real estate and litigation
              lawyers — LSO-compliant trust accounting, HST billing, AI document analysis, limitation
              period tracking, and Canadian legal AI. $149 CAD per lawyer per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-slate-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/ontario-real-estate-lawyer"
                className="border border-slate-900 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Ontario Real Estate Lawyer Software
              </Link>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/ontario-easements-restrictive-covenants", label: "Ontario Easements and Restrictive Covenants" },
                { href: "/blog/ontario-specific-performance", label: "Ontario Specific Performance" },
                { href: "/blog/ontario-mareva-injunction", label: "Ontario Mareva Injunctions" },
                { href: "/blog/ontario-rectification", label: "Ontario Rectification" },
                { href: "/ontario-real-estate-lawyer", label: "Ontario Real Estate Lawyer Software" },
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
          </section>
        </article>
      </div>
    </>
  );
}
