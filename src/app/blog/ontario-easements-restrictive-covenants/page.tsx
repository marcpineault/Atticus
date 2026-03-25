import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Easements and Restrictive Covenants: A Complete Guide for Lawyers",
  description:
    "Complete guide to Ontario easements and restrictive covenants: express, implied, and prescriptive easements, the four requirements, dominant and servient tenements, extinguishment, Tulk v Moxhay restrictive covenant rules, CLPA s.61 discharge applications, and running with land under the Land Titles Act.",
  openGraph: {
    title: "Ontario Easements and Restrictive Covenants: A Complete Guide for Lawyers",
    description:
      "Ontario easements and restrictive covenants: four easement requirements, prescriptive easements, Tulk v Moxhay restrictive covenant rules, CLPA s.61 discharge applications, and registration under the Land Titles Act.",
    url: "https://getatticus.ca/blog/ontario-easements-restrictive-covenants",
    siteName: "Atticus",
    type: "article",
  },
  alternates: {
    canonical: "https://getatticus.ca/blog/ontario-easements-restrictive-covenants",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Easements and Restrictive Covenants: A Complete Guide for Lawyers",
  "description": "Complete guide to Ontario easements and restrictive covenants covering the four requirements for an easement, express implied and prescriptive easements, dominant and servient tenements, extinguishment, Tulk v Moxhay restrictive covenant rules, CLPA s.61 discharge applications, and registration under the Land Titles Act.",
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
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-easements-restrictive-covenants",
  "keywords": ["easements Ontario", "restrictive covenants Ontario", "prescriptive easements", "Tulk v Moxhay", "CLPA s.61", "Land Titles Act Ontario", "dominant tenement", "servient tenement", "right of way Ontario", "property law Ontario"]
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the four requirements for an easement in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The four Re Ellenborough Park requirements are: (1) a dominant and servient tenement (two distinct parcels of land); (2) the easement must accommodate and serve the dominant tenement (connection to land use, not merely a personal advantage to the owner); (3) the dominant and servient tenements must be owned or occupied by different persons; and (4) the right must be capable of forming the subject matter of a grant (sufficiently definite, not too wide or vague, not requiring expenditure of money by the servient owner)."
      }
    },
    {
      "@type": "Question",
      "name": "How is a prescriptive easement acquired in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Ontario, prescriptive easements under the Real Property Limitations Act require open, continuous, uninterrupted, and peaceful use for at least 20 years under a claim of right, without the owner's permission. The use must be as of right (nec vi, nec clam, nec precario — not by force, not secretly, not by permission). The Limitations Act 2002 abolished limitations-based acquisition for Land Titles (absolute title) land, but prescriptive easements may still arise on Land Titles Qualified and Registry Act land."
      }
    },
    {
      "@type": "Question",
      "name": "Can a restrictive covenant be discharged in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under s.61 of the Conveyancing and Law of Property Act (CLPA), the Ontario Superior Court of Justice has jurisdiction to modify or discharge a restrictive covenant if: the restriction is obsolete (change in character of neighbourhood — Re Beale (1975) ONCA); the restriction impedes reasonable use of land without practical benefit to others; the parties of the original restriction have agreed; or discharge would not injure those entitled to the benefit. Application is made to the Superior Court with notice to all benefitted landowners."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Tulk v Moxhay rule for restrictive covenants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tulk v Moxhay (1848) 2 Ph 774 established that a restrictive covenant (negative obligation) runs with the burdened land in equity if: (1) the covenant is negative in substance (restricts use, does not require expenditure); (2) the covenant was intended to benefit land retained by the covenantee; (3) the burdened owner had notice of the covenant at time of purchase; and (4) the benefit has passed to the party seeking enforcement. Under the Land Titles Act, covenants must be registered on the servient title to bind successors."
      }
    }
  ]
}`;

export default function OntarioEasementsRestrictiveCovenants() {
  return (
    <>
      <Script id="easements-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="easements-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Property Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Easements and Restrictive Covenants: A Complete Guide
            </h1>
            <p className="text-slate-300 text-lg mb-4 max-w-3xl">
              Express, implied, and prescriptive easements; the four Re Ellenborough Park requirements;
              dominant and servient tenements; extinguishment; Tulk v Moxhay restrictive covenant rules;
              CLPA s.61 discharge applications; and registration under the Land Titles Act.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>14 min read</span>
              <span>•</span>
              <span>Property Law</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-12">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaways</h2>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• Easements require four Re Ellenborough Park conditions including dominant/servient tenement and accommodation of the dominant land</li>
              <li>• Prescriptive easements require 20 years of open, continuous, uninterrupted use as of right under the Real Property Limitations Act</li>
              <li>• The Limitations Act 2002 abolished prescriptive acquisition for Land Titles absolute title — check title quality</li>
              <li>• Tulk v Moxhay restrictive covenants run only in equity (not at law) and require negative substance, benefit to retained land, and notice</li>
              <li>• Positive covenants do not run with land in Ontario — Halsall v Brizell chain of indemnity required</li>
              <li>• CLPA s.61 allows court discharge where covenant is obsolete, unreasonably impedes use, or no practical benefit remains</li>
              <li>• Registration on title under Land Titles Act is required to bind successors in title</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is an Easement?</h2>
            <p className="text-slate-700 mb-4">
              An easement is a right to use another person&apos;s land for a specific purpose. The land
              that benefits is the <strong>dominant tenement</strong>; the land that is burdened is the
              <strong> servient tenement</strong>. Common examples in Ontario practice include:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Rights of way (access across a neighbouring parcel)</li>
              <li>Utility easements (hydro, gas, water, sewer — often held by municipalities or utility corporations)</li>
              <li>Drainage easements</li>
              <li>Easements for light and air (rare and difficult to establish in Ontario)</li>
              <li>Parking easements</li>
              <li>Conservation easements registered under the Conservation Land Act</li>
            </ul>
            <p className="text-slate-700">
              Easements are interests in land — they are proprietary rights that bind successors in title
              (unlike a licence, which is merely personal and revocable). On Land Titles land, easements
              must be registered to bind a purchaser for value without notice. On Registry Act land,
              constructive notice may arise from visible use or adjacent title documents.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Four Requirements: Re Ellenborough Park
            </h2>
            <p className="text-slate-700 mb-4">
              The leading statement of easement requirements is <em>Re Ellenborough Park</em> [1956] Ch 131
              (CA), adopted throughout Canada including Ontario. To qualify as a valid easement, four
              conditions must be satisfied:
            </p>

            <div className="space-y-6 mb-4">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  1. Dominant and Servient Tenement
                </h3>
                <p className="text-slate-700 text-sm">
                  There must be two distinct parcels of land — one benefitting (dominant) and one burdened
                  (servient). An easement cannot exist <em>in gross</em> (unattached to a dominant tenement)
                  at common law, except for certain statutory rights (e.g., utility easements granted under
                  the Ontario Energy Board Act). Adjacent ownership is not required but the parcels must
                  be sufficiently proximate.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  2. Accommodation of the Dominant Tenement
                </h3>
                <p className="text-slate-700 text-sm">
                  The easement must accommodate and serve the dominant tenement — it must be connected with
                  the normal enjoyment and use of the land itself, not merely confer a personal advantage on
                  the current owner. The test is whether the right makes the dominant land a better and more
                  convenient property (<em>Re Ellenborough Park</em> applied in Ontario in <em>Depew v
                  Wilkes</em> (2002) 60 OR (3d) 499 CA). A right to use a neighbouring cricket ground
                  for recreation was held to accommodate residential land.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  3. Dominant and Servient Owners Must Be Different Persons
                </h3>
                <p className="text-slate-700 text-sm">
                  An owner cannot have an easement over their own land (<em>nemo potest sibi servitutem
                  imponere</em>). Where the same person owns both dominant and servient land, any prior
                  easement is extinguished by unity of ownership. A quasi-easement (a use that would be an
                  easement if the parcels were separately owned) may be formalized on severance using the
                  <em> rule in Wheeldon v Burrows</em> (1879) 12 Ch D 31 (continuous and apparent
                  quasi-easements pass on grant) or LTA s.26 implied easements.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  4. Capable of Forming the Subject Matter of a Grant
                </h3>
                <p className="text-slate-700 text-sm">
                  The right must be sufficiently definite and capable of grant by deed. A right that is too
                  vague (e.g., a right to a view — <em>Aldred&apos;s Case</em> (1610) 9 Co Rep 57b),
                  requires the servient owner to expend money for the dominant owner&apos;s benefit (positive
                  obligation — not an easement), or effectively amounts to a claim to exclusive possession
                  of the servient tenement (<em>Copeland v Greenhalf</em> [1952] Ch 488) will fail this
                  requirement. Parking easements have been upheld where they do not amount to exclusive
                  occupation (<em>Batchelor v Marlow</em> [2003] 1 WLR 764 applied in Ontario).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              How Easements Are Created
            </h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Express Easements</h3>
            <p className="text-slate-700 mb-4">
              Express easements are granted by deed or reserved in a conveyance. Under the <em>Land Titles
              Act</em> R.S.O. 1990, c. L.5, an express easement must be registered on the servient title to
              bind a purchaser for value. A grant of fee simple in a parcel can simultaneously reserve an
              easement in favour of the grantor&apos;s retained lands — care must be taken with the language
              to ensure the reservation is clear (reservation contra proferentem interpreted against grantor
              at common law; courts now use general purposive approach).
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Implied Easements</h3>
            <p className="text-slate-700 mb-4">
              Implied easements arise without express words, based on surrounding circumstances:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Easements of necessity</strong> — A landlocked parcel receives an implied right of
                access from the grantor&apos;s retained land when no other access exists
                (<em>Nickerson v Barraclough</em> [1981] Ch 426; confirmed in Ontario — true necessity required,
                inconvenience insufficient).
              </li>
              <li>
                <strong>Wheeldon v Burrows</strong> — On a grant (not a reservation), all continuous and
                apparent quasi-easements and reasonably necessary quasi-easements pass to the grantee if
                previously used by the common owner.
              </li>
              <li>
                <strong>General words under s.15 CLPA</strong> — The Conveyancing and Law of Property Act
                general words clause implies certain rights unless expressly excluded.
              </li>
              <li>
                <strong>Intended easements</strong> — Courts imply easements necessary to give effect to
                the parties&apos; common intentions at the time of grant (<em>Liverpool City Council v Irwin</em>
                [1977] AC 239).
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Prescriptive Easements</h3>
            <p className="text-slate-700 mb-4">
              Prescriptive easements in Ontario arise under the <em>Real Property Limitations Act</em>
              R.S.O. 1990, c. L.15 after 20 years of continuous, open, peaceful, and uninterrupted use
              <em> as of right</em> — <em>nec vi, nec clam, nec precario</em> (not by force, not secretly,
              not by permission):
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Open</strong> — use visible and known (or ought to be known) to the servient owner
              </li>
              <li>
                <strong>Continuous</strong> — consistent with the nature of the right (seasonal use may
                qualify for seasonal rights); interrupted use breaks the period
              </li>
              <li>
                <strong>As of right / claim of right</strong> — permission destroys a prescriptive claim
                (<em>Warrant v LLSC Ltd</em> 2011 ONCA 432); a single permission granted and accepted resets
                the clock
              </li>
              <li>
                <strong>Without interruption</strong> — acquiescence in obstructions for one year ends the
                prescriptive period
              </li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Land Titles Act Warning</h4>
              <p className="text-slate-700 text-sm">
                The <em>Limitations Act</em> 2002 s.2(1) and Transitional Provisions abolish the Real
                Property Limitations Act as a basis for acquiring title or interests in Land Titles (absolute
                title) land for any period commencing after October 19, 2006. Prescriptive easements may
                still arise on <strong>Land Titles Qualified (LTQ)</strong> and <strong>Registry Act</strong>
                land where pre-2006 use pre-dates conversion. Always check the title quality before
                advising on prescriptive rights.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Benefit and Burden Running with Land
            </h2>
            <p className="text-slate-700 mb-4">
              For an easement to be useful, both the <strong>benefit</strong> (right to use the servient land)
              and the <strong>burden</strong> (obligation to permit use) must run with their respective parcels
              to bind successors in title.
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Benefit</strong> — passes automatically to successor owners of the dominant tenement
                at law if the easement is properly appurtenant (connected to enjoyment of the land); no
                express assignment needed
              </li>
              <li>
                <strong>Burden at law</strong> — an easement burden passes at common law to successors in
                title to the servient land if (a) the burden is negative or quasi-negative in character and
                (b) the successor has notice. Under Land Titles, registration provides constructive notice.
              </li>
              <li>
                <strong>Registration</strong> — On Land Titles land, easements should be registered against
                both the dominant and servient title PIN numbers. An unregistered easement may not bind a
                bona fide purchaser for value without actual notice (<em>LTA</em> s.78).
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Extinguishment of Easements</h2>
            <p className="text-slate-700 mb-4">
              An easement may be extinguished by:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-3 font-semibold">Method</th>
                    <th className="text-left px-5 py-3 font-semibold">Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      method: "Express Release",
                      req: "Deed executed by dominant tenement owner releasing the easement; should be registered on both titles to clear the register",
                    },
                    {
                      method: "Unity of Ownership",
                      req: "Same person acquires fee simple in both dominant and servient tenements — easement merges and is extinguished; re-severance creates new situation (Wheeldon v Burrows may apply on re-grant)",
                    },
                    {
                      method: "Abandonment",
                      req: "Clear and unambiguous demonstration of intention to permanently abandon — mere non-use insufficient (Tehrani v Markov 2009 ONCA); conduct must show animus dereliquendi (intention to give up)",
                    },
                    {
                      method: "Statutory Extinguishment",
                      req: "Ontario Expropriations Act (easement expropriated by public authority with compensation); Planning Act consent conditions; Municipal Act road widening",
                    },
                    {
                      method: "Frustration / Permanent Impossibility",
                      req: "Physical circumstances permanently prevent enjoyment — rare; temporary inability does not extinguish",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.method}</td>
                      <td className="px-5 py-3 text-slate-600">{row.req}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Restrictive Covenants: Tulk v Moxhay
            </h2>
            <p className="text-slate-700 mb-4">
              A restrictive covenant is a negative promise made in a conveyance of land — the buyer of land
              promises the seller not to use the land in a certain way (e.g., &quot;not to build any
              building&quot;, &quot;not to use for commercial purposes&quot;, &quot;not to subdivide&quot;).
              At common law, the burden of a covenant does not run with the land to bind successors
              (<em>Austerberry v Oldham Corporation</em> (1885) 29 Ch D 750, confirmed Canada).
            </p>
            <p className="text-slate-700 mb-4">
              In equity, the burden of a <em>restrictive</em> covenant runs with the land under
              <em> Tulk v Moxhay</em> (1848) 2 Ph 774, provided four conditions are met:
            </p>
            <ol className="list-decimal pl-6 text-slate-700 space-y-3 mb-4">
              <li>
                <strong>Negative in substance</strong> — the covenant must restrict the use of the burdened
                land (not require positive expenditure or action by the covenantor). The test is substance,
                not form. &quot;Not to erect any building&quot; is restrictive. &quot;To maintain the fence&quot;
                is positive and does not run at law or equity to bind successors.
              </li>
              <li>
                <strong>Intended to benefit retained land</strong> — the covenant must have been made for the
                benefit of land retained by the covenantee (or their predecessor). A covenant does not run
                unless it accommodates an identifiable dominant tenement. Residential neighbourhood scheme
                covenants (building schemes) satisfy this where all owners in the scheme are bound and
                benefitted (<em>Elliston v Reacher</em> [1908] 2 Ch 374 building scheme doctrine, recognized
                in Ontario).
              </li>
              <li>
                <strong>Successor had notice</strong> — the successor to the burdened land must have had
                actual or constructive notice of the covenant at time of acquisition. Under the Land Titles
                Act, registration of the covenant on the burdened title provides notice to all successors.
                Under the Registry Act, constructive notice may arise from the title chain.
              </li>
              <li>
                <strong>Benefit has passed to the plaintiff</strong> — the party seeking enforcement must
                show the benefit of the covenant has passed to them, either by express annexation to the
                dominant land, by express assignment, or by operation of a building scheme.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Positive Covenants Do Not Run</h3>
            <p className="text-slate-700 mb-4">
              Positive covenants (obligations requiring expenditure of money or active steps) do not run
              with land in equity or at law in Ontario following <em>Austerberry</em>. The Supreme Court
              of Canada has not overruled this. Practical mechanisms to achieve the same result include:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Halsall v Brizell</strong> [1957] Ch 169 chain of indemnity — each purchaser covenants
                with the vendor to observe the positive covenant and to obtain a similar covenant from the
                next purchaser; enforceable through a chain of direct obligations (common in shared-driveway
                and road maintenance obligations in Ontario subdivisions)
              </li>
              <li>
                <strong>Long-term lease</strong> — the benefit and burden of leasehold covenants (positive and
                negative) run between original parties and successors by privity of estate under the
                <em> Commercial Tenancies Act</em>
              </li>
              <li>
                <strong>Condominium Act 1998 s.14</strong> — condominium declarations and rules (including
                positive maintenance obligations) bind all unit owners and run with the unit title
              </li>
              <li>
                <strong>Conservation easements</strong> (Conservation Land Act, Ontario Heritage Act
                easements) — may include positive obligations to maintain natural areas by statute
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Building Schemes (Neighbourhood Schemes)
            </h2>
            <p className="text-slate-700 mb-4">
              A building scheme (also called a neighbourhood scheme or community scheme) arises where a
              common vendor sells off lots in a defined area, each sale subject to uniform restrictions,
              with the intention that the restrictions be for the benefit of all the lots in the scheme.
              The <em>Elliston v Reacher</em> requirements (adopted in Ontario) are:
            </p>
            <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-4">
              <li>Both plaintiff and defendant derive title from a common vendor</li>
              <li>The common vendor laid out the area in defined lots before selling</li>
              <li>The restrictions were intended by the common vendor to benefit all lots in the scheme</li>
              <li>Each purchaser bought on the understanding that the restrictions would benefit all lots</li>
            </ol>
            <p className="text-slate-700 mb-4">
              Where a valid building scheme exists, every lot owner can enforce the covenant against every
              other lot owner, regardless of the order of sale and without formal annexation. This is
              significant in old residential subdivisions in Ontario where titles show repetitive covenants
              (e.g., residential use only, no subdivision, minimum setbacks).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              CLPA s.61: Discharge or Modification of Restrictive Covenants
            </h2>
            <p className="text-slate-700 mb-4">
              Section 61 of the <em>Conveyancing and Law of Property Act</em> R.S.O. 1990, c. C.34 grants
              the Ontario Superior Court of Justice jurisdiction to modify or wholly discharge a restrictive
              covenant where it is satisfied that one or more of the following grounds exists:
            </p>
            <ol className="list-decimal pl-6 text-slate-700 space-y-3 mb-4">
              <li>
                <strong>Obsolete by reason of changes</strong> — the restriction has become obsolete by
                reason of changes in the character of the property or neighbourhood, or other material
                change in circumstances, such that the restriction no longer serves the original purpose
                (<em>Re Beale</em> (1975) 10 OR (2d) 31, ONCA: development of commercial strip rendering
                residential covenant obsolete in former residential neighbourhood)
              </li>
              <li>
                <strong>Impedes reasonable use without practical benefit</strong> — the continued existence
                of the covenant impedes some reasonable user of the land for public or private purposes
                and either (a) the covenant confers no practical benefit of substantial value or advantage
                on the persons entitled to its benefit, or (b) it is contrary to the public interest
              </li>
              <li>
                <strong>Agreement</strong> — the persons of full age and capacity entitled to the benefit
                of the restriction have agreed, expressly or by implication, to the discharge or modification
              </li>
              <li>
                <strong>No injury</strong> — the discharge or modification will not injure the persons
                entitled to the benefit of the restriction
              </li>
            </ol>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Procedure on a CLPA s.61 Application</h4>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• Application by way of originating application to Superior Court of Justice</li>
                <li>• All persons with the benefit of the restriction must be given notice (identify from title search and building scheme)</li>
                <li>• Municipality and Planning Act approval may also be required for subdivision or zoning non-compliance</li>
                <li>• Court has discretion to order modification instead of full discharge</li>
                <li>• Successful applicant must register the court order against the title of the burdened land</li>
                <li>• Title insurance may be available where covenant discharge cannot be confirmed (review with underwriter)</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Registration Under the Land Titles Act
            </h2>
            <p className="text-slate-700 mb-4">
              Ontario has been substantially converted to the Land Titles Act system under the automated
              Land Registry Information System (POLARIS). Key registration points for easements and
              covenants:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Easements</strong> — registered as a separate instrument (e.g., grant of easement
                by Transfer/Deed) on the Property Identifier (PIN) for the servient land. The dominant PIN
                is noted in the instrument. Registration provides notice to all successors under LTA s.78.
              </li>
              <li>
                <strong>Restrictive covenants</strong> — registered on the burdened PIN. The instrument
                identifies the covenanting land (burdened) and the benefitted land. Where the benefitted
                parcels are multiple (building scheme), they are listed or described by reference to the
                registered plan.
              </li>
              <li>
                <strong>Absolute title guarantee</strong> — Land Titles absolute title (the most common
                form in southern Ontario) does not give absolute guarantee of registered easements and
                covenants: the Land Titles Assurance Fund compensates only for errors in the register, not
                for substantive rights.
              </li>
              <li>
                <strong>Statements of exception</strong> — LTA s.44(1) exceptions include easements and
                rights acquired by prescription before July 1, 1886 and certain utility easements that
                bind the title without registration.
              </li>
              <li>
                <strong>Title insurance</strong> — First Canadian Title, Stewart Title, and Chicago Title
                underwrite easement and covenant risks for both lenders and owners. Review the specific
                policy exceptions before relying on title insurance as a substitute for covenant discharge.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Remedies for Breach
            </h2>
            <p className="text-slate-700 mb-4">
              The primary remedies for interference with an easement or breach of a restrictive covenant are:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Injunction</strong> (mandatory or prohibitory) — the most common remedy; obtained
                by motion for interlocutory relief (RJR-MacDonald v Canada [1994] 1 SCR 311 three-part test:
                serious issue to be tried, irreparable harm, balance of convenience) or at trial
              </li>
              <li>
                <strong>Damages in lieu of injunction</strong> — court may award under Courts of Justice Act
                s.99 where injunction would be oppressive and damages are an adequate substitute; in
                practice courts are reluctant to substitute damages for breach of a restrictive covenant
                where the violation is ongoing
              </li>
              <li>
                <strong>Declaration</strong> — declaratory relief confirming the existence, scope, and
                parties entitled to the benefit of the easement or covenant, useful where breach is disputed
                or anticipated
              </li>
              <li>
                <strong>Removal / reinstatement order</strong> — mandatory injunction requiring demolition of
                a structure built in breach; courts weigh hardship against the deliberate nature of the
                breach (<em>Jaggard v Sawyer</em> [1995] 2 All ER 189 principles applied in Ontario)
              </li>
              <li>
                <strong>Damages at common law</strong> — available for tortious interference with easement
                rights (private nuisance or trespass to land)
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Practice Points for Ontario Real Estate and Litigation Lawyers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Title Review Checklist",
                  points: [
                    "Search for all registered easements and covenants on the PIN",
                    "Check whether easements are appurtenant or in gross",
                    "Identify the benefitted lands and whether building scheme exists",
                    "Review Planning Act compliance for any subdivision-related easements",
                    "Examine adjacent PINs for visible use suggesting unregistered prescriptive claims",
                  ],
                },
                {
                  title: "Covenant Discharge Application",
                  points: [
                    "Identify all lots benefitted by the covenant from the registered plan and title chain",
                    "Gather evidence of changed neighbourhood character (zoning, assessment, aerial comparisons)",
                    "Consider whether consent of all benefitted owners is obtainable (faster and cheaper)",
                    "Obtain planning opinion on consistency with current Official Plan and Zoning By-law",
                    "Budget for court application including notice costs and potential opposition",
                  ],
                },
                {
                  title: "Prescriptive Easement Claim",
                  points: [
                    "Confirm Registry Act or LTQ title (Limitations Act 2002 bars claims on absolute title land post-2006)",
                    "Gather continuous-use evidence: photographs, surveys, aerial imagery, neighbour affidavits",
                    "Address permission arguments — any written or oral permission defeats prescription",
                    "Apply for vesting order or registration by court order after judgment",
                    "Consider adverse possession of small strips simultaneously if applicable",
                  ],
                },
                {
                  title: "Drafting New Easements",
                  points: [
                    "Identify dominant and servient PINs precisely",
                    "Specify the exact use, width, and location (attach surveyed plan)",
                    "Address maintenance obligations (positive covenant — bind by agreement and Halsall chain)",
                    "Include right to reinstate after interruption and indemnity provisions",
                    "Register on both dominant and servient PIN and update both parcel registers",
                  ],
                },
              ].map((section, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-3">{section.title}</h3>
                  <ul className="space-y-1">
                    {section.points.map((pt, j) => (
                      <li key={j} className="text-slate-600 text-sm flex gap-2">
                        <span className="text-amber-500 font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can an easement be personal to the current owner?",
                  a: "No — a right that benefits only the current owner personally without connection to a dominant tenement is a licence, not an easement. Licences are revocable and do not bind successors. If you need a right that will survive sale of the dominant land, it must satisfy the Re Ellenborough Park requirements and be registered as an easement.",
                },
                {
                  q: "What is a right of way by necessity in Ontario?",
                  a: "A right of way by necessity is implied by law when a parcel of land is landlocked following a severance or conveyance by a common owner. The landlocked owner has an implied right of access across the grantor's retained land (or other parcel severed in the same transaction) sufficient to reach a public road. True necessity is required — mere inconvenience does not suffice. The location of the right of way can be fixed by agreement or determined by the court.",
                },
                {
                  q: "Do utility companies need easements for infrastructure on private land?",
                  a: "Yes, generally. Hydro One, Enbridge, municipally-owned utilities, and telecommunications providers hold registered easements over private land for transmission lines, pipelines, and cables. These are often in gross (no dominant tenement) and created under specific enabling statutes (Ontario Energy Board Act, Telecommunications Act). Always search for registered utility easements before advising on development potential of a parcel.",
                },
                {
                  q: "Does selling the dominant tenement automatically transfer the benefit of the easement?",
                  a: "Yes — the benefit of an easement is appurtenant to the dominant land and passes automatically to the purchaser of the dominant tenement as part of the land conveyance. No express assignment is needed. However, for Land Titles land, the purchaser should confirm the easement is still registered on the servient title and note the dominant PIN designation in the register.",
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
              Manage Property Matters with Atticus
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Atticus is the Ontario practice management platform built for real estate lawyers —
              LSO-compliant trust accounting, HST billing, AI document analysis, limitation period
              tracking, and Canadian legal AI. $149 CAD per lawyer per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-slate-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/trust-accounting-ontario"
                className="border border-slate-900 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Ontario Trust Accounting
              </Link>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/ontario-specific-performance", label: "Ontario Specific Performance" },
                { href: "/blog/ontario-fraudulent-misrepresentation", label: "Ontario Fraudulent Misrepresentation" },
                { href: "/blog/ontario-mareva-injunction", label: "Ontario Mareva Injunctions" },
                { href: "/ontario-real-estate-lawyer", label: "Ontario Real Estate Lawyer Software" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
                { href: "/clio-alternative", label: "Clio Alternative for Ontario" },
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
