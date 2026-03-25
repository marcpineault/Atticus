import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Real Property Law — Land Titles, Easements, Restrictive Covenants, and Adverse Possession",
  description:
    "A comprehensive guide to Ontario real property law: Land Titles Act, the POLARIS system, easements and their creation/extinguishment, restrictive covenants, adverse possession under Registry Act lands, and title insurance.",
  openGraph: {
    title: "Ontario Real Property Law — Land Titles, Easements, Restrictive Covenants, and Adverse Possession",
    description:
      "Ontario real property law: Land Titles Act RSO 1990, Teraview POLARIS, easements express/implied/prescriptive, restrictive covenants, adverse possession Registry Act, title insurance.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-real-property-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-real-property-law" },
};

export default function OntarioRealPropertyLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Real Property Law — Land Titles, Easements, Restrictive Covenants, and Adverse Possession",
    description:
      "Ontario real property law: Land Titles Act RSO 1990, POLARIS/Teraview electronic registration, easements (express/implied/Wheeldon v Burrows/prescriptive), restrictive covenants running with land, adverse possession Registry Act 10 years, title insurance.",
    url: "https://getatticus.ca/blog/ontario-real-property-law",
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
    author: {
      "@type": "Organization",
      name: "Atticus Legal",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-amber-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-amber-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              Real Property Law
            </span>
            <span className="text-slate-400 text-sm">14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ontario Real Property Law — Land Titles, Easements, Restrictive Covenants, and Adverse Possession
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A comprehensive guide to Ontario real property law: the Land Titles Act and POLARIS
            system, easements and their creation and extinguishment, restrictive covenants running
            with land, adverse possession on Registry Act lands, and the role of title insurance.
          </p>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

          <h2>Ontario Land Registration Systems</h2>
          <p>
            Ontario operates two land registration systems:
          </p>
          <ul>
            <li>
              <strong>Land Titles Act</strong> RSO 1990 c L.5 — the modern system, applies to the
              majority of Ontario land. Provides indefeasible title: a registered owner holds a
              title guaranteed by the province, free from most prior interests not registered on
              title. The state guarantees the register — a person deprived of an interest through
              fraud or error may claim compensation from the Land Titles Assurance Fund (s.57 LTA).
            </li>
            <li>
              <strong>Registry Act</strong> RSO 1990 c R.20 — the older system, applies to
              certain lands not yet converted to Land Titles. Registry Act title is not guaranteed
              by the province. A purchaser must search title back at least 40 years to establish
              a good root of title. Adverse possession claims are possible on Registry Act land.
            </li>
          </ul>
          <p>
            Ontario has been converting Registry Act lands to Land Titles through the POLARIS
            (Province of Ontario Land Registration Information System) program. The conversion
            results in Land Titles Conversion Qualified (LTCQ) title — a lesser guarantee than
            Land Titles Absolute (LTA) or Land Titles Absolute Plus (LTAP). LTCQ title converts
            to LTA after 10 years without adverse claims.
          </p>
          <h3>Teraview and Electronic Registration</h3>
          <p>
            Since 1999, the <em>Electronic Registration Act</em> SO 1991 c 44 has permitted
            electronic registration of land transfers in Ontario. All registrations are now
            made electronically through Teraview — the Ministry of Government Services
            electronic land registration system. A law society-certified Teraview user
            (typically the purchaser&apos;s solicitor) registers the Transfer of Land Form 1,
            mortgage, and other instruments.
          </p>
          <p>
            The electronic registration system requires solicitors to give an undertaking that
            they are authorized to register on behalf of their client and that the document
            is correct. The registrar no longer reviews instruments for correctness before
            registration.
          </p>

          <h2>Indefeasibility of Title — Land Titles Guarantee</h2>
          <p>
            Under the Land Titles system, a registered owner obtains indefeasible title subject
            only to the exceptions in s.44 LTA:
          </p>
          <ul>
            <li>Fraud by the registered owner themselves (a fraudster cannot claim indefeasible title)</li>
            <li>Rights of persons in actual occupation of the land (overriding interests)</li>
            <li>Short-term tenancies (up to three years)</li>
            <li>Public rights of way and highways</li>
            <li>Taxes and other charges that bind without registration</li>
            <li>Government expropriations and statutory charges</li>
          </ul>
          <p>
            The <em>Land Titles Act</em> provides a <strong>fraud exception</strong>: if a registered
            owner obtained title through fraud, they do not have indefeasible title. However, a
            subsequent bona fide purchaser for value without notice of the fraud does obtain
            indefeasible title.
          </p>
          <p>
            <em>Lawrence v Maple Trust Co</em> 2007 ONCA 74 addressed mortgage fraud in Ontario:
            a forged mortgage registered by a fraudster does not give the mortgagee an interest
            in the true owner&apos;s land — the fraudster had no title to mortgage.
          </p>

          <h2>Easements</h2>
          <p>
            An easement is a right to use another person&apos;s land (the servient tenement) for a
            specific purpose, for the benefit of the holder&apos;s land (the dominant tenement).
            Elements of a valid easement (from <em>Re Ellenborough Park</em> [1956] Ch 131):
          </p>
          <ol>
            <li>There must be a dominant and a servient tenement;</li>
            <li>The easement must accommodate and serve the dominant tenement — it must be reasonably necessary for the better enjoyment of the dominant land;</li>
            <li>The dominant and servient tenements must not be owned and occupied by the same person; and</li>
            <li>The right must be capable of forming the subject matter of a grant — it must be sufficiently definite.</li>
          </ol>
          <h3>Creation of Easements</h3>
          <p>
            Easements may be created by:
          </p>
          <ul>
            <li>
              <strong>Express grant or reservation</strong>: Created in a deed or transfer —
              most common method in Ontario. An express easement over Land Titles land must
              be registered to be enforceable against a subsequent purchaser (s.71 LTA).
            </li>
            <li>
              <strong>Implied grant — Wheeldon v Burrows</strong> (1879) LR 14 ChD 9: On a
              grant of part of land, there passes to the grantee all quasi-easements that were:
              (a) continuous and apparent; (b) necessary for the reasonable enjoyment of the
              land granted; and (c) actually used by the grantor for the benefit of the land
              granted at the time of the grant. The rule is based on the principle that a grantor
              cannot derogate from the grant.
            </li>
            <li>
              <strong>Implied necessity</strong>: Where land is completely landlocked without
              access to a public road, a way of necessity is implied in favour of the grantee
              (<em>Nickerson v Barraclough</em> [1981] Ch 426 — requires common origin of both
              parcels; not available for historical landlocking before common ownership).
            </li>
            <li>
              <strong>Prescription</strong>: Under the <em>Limitations Act 2002</em>, continuous
              use for 10+ years (without permission, without secrecy, without force) may give
              rise to prescriptive easement claims on Registry Act land. Land Titles land
              generally cannot be acquired by adverse possession or prescription under s.51 LTA.
              Ontario abolished common law prescription under <em>Real Property Limitations Act</em>
              RSO 1990 c L.15; claims must be based on the limitations period.
            </li>
          </ul>
          <h3>Extinguishment of Easements</h3>
          <p>
            Easements are extinguished by: (a) express release in writing; (b) unity of ownership
            (the same person acquires both dominant and servient tenement); (c) implied release
            through abandonment — non-use alone is insufficient, there must be clear intent to
            abandon; or (d) expiry if granted for a fixed term.
          </p>

          <h2>Restrictive Covenants</h2>
          <p>
            A restrictive covenant is a covenant by a land owner to restrict the use of their
            land for the benefit of neighbouring land. Rules for a restrictive covenant to run
            with the land (bind successors in title) follow <em>Tulk v Moxhay</em> (1848) 2 Ph 774
            and <em>London County Council v Allen</em> [1914]:
          </p>
          <ol>
            <li>The covenant must be negative in substance (a restriction, not an obligation to spend money or do a positive act);</li>
            <li>The covenant must be for the benefit of land retained by the covenantee (not merely personal);</li>
            <li>The covenant must have been intended to bind successors; and</li>
            <li>On Land Titles land, the covenant must be registered on title to bind a purchaser.</li>
          </ol>
          <p>
            Common Ontario restrictive covenants: no further subdivision; residential use only;
            no structures within set-back distances; architectural controls; prohibition on
            short-term rentals.
          </p>
          <h3>Modification and Discharge — s.61 Conveyancing and Law of Property Act</h3>
          <p>
            The <em>Conveyancing and Law of Property Act</em> RSO 1990 c C.34 s.61 permits the
            Superior Court to modify or discharge a restrictive covenant where: (a) by reason of
            changes in the character of the neighbourhood, the covenant ought to be deemed
            obsolete; (b) the covenant impedes reasonable use without practical benefit to others;
            (c) those entitled to the benefit have agreed expressly or impliedly to discharge;
            or (d) modification would not injure the persons entitled to enforce.
          </p>

          <h2>Adverse Possession on Registry Act Land</h2>
          <p>
            Adverse possession (or limitation of actions in respect of land) is governed by the
            <em>Real Property Limitations Act</em> RSO 1990 c L.15, which sets a 10-year period
            for actions to recover land. An adverse possessor who occupies land for 10+ years
            with the requisite quality of possession extinguishes the paper title holder&apos;s
            right to sue in ejectment.
          </p>
          <p>
            Elements of adverse possession:
          </p>
          <ul>
            <li><strong>Factual possession</strong>: The claimant must have had factual possession — dealing with the land as an occupying owner would, to the exclusion of the paper title owner (<em>Powell v McFarlane</em> (1977) 38 P &amp; CR 452 adopted in Ontario)</li>
            <li><strong>Intention to possess (animus possidendi)</strong>: The claimant must have intended to possess the land as their own, not merely to use it temporarily or permissively</li>
            <li><strong>Without consent</strong>: Possession with the permission of the owner is not adverse</li>
            <li><strong>Continuity for 10 years</strong>: The period need not be uninterrupted if each possessor tacks their period of possession to the previous possessor&apos;s (provided the second possessor enters through the first)</li>
          </ul>
          <p>
            <strong>Land Titles land is not subject to adverse possession</strong>: s.51 LTA
            prevents adverse possession of Land Titles land. On LTCQ land (converted within
            10 years), adverse possession claims that predated the conversion may still be
            asserted in some circumstances.
          </p>

          <h2>Title Insurance in Ontario</h2>
          <p>
            Title insurance is now standard in Ontario real estate transactions for both residential
            and commercial properties. Major providers: FCT (First Canadian Title) and Stewart Title.
          </p>
          <p>
            Title insurance typically covers:
          </p>
          <ul>
            <li>Title defects — gaps in the chain of title, forgery, fraud</li>
            <li>Zoning and by-law non-compliance existing at closing</li>
            <li>Survey defects and encroachments</li>
            <li>Outstanding work orders and building permits</li>
            <li>Liens and encumbrances not disclosed on title</li>
            <li>Forced removal of improvements encroaching onto neighbouring land</li>
          </ul>
          <p>
            Title insurance does <strong>not</strong> typically cover: matters the insured knew
            about before closing; current zoning violations the insured created; environmental
            contamination; matters not disclosed by an accurate survey (for standard residential
            policies without survey endorsement); and future changes in zoning.
          </p>
          <p>
            Ontario lawyers are required under LSO Rules of Professional Conduct to advise clients
            about the availability and advisability of title insurance as an alternative to
            traditional survey and title opinion coverage.
          </p>

          <h2>Land Transfer Tax</h2>
          <p>
            The <em>Land Transfer Tax Act</em> RSO 1990 c L.6 imposes LTT on transfers of Ontario
            land at the following rates (on the value of consideration):
          </p>
          <ul>
            <li>0.5% on the first $55,000</li>
            <li>1.0% from $55,000 to $250,000</li>
            <li>1.5% from $250,000 to $400,000</li>
            <li>2.0% from $400,000 to $2,000,000</li>
            <li>2.5% above $2,000,000 (residential with single-family detached or semi-detached)</li>
          </ul>
          <p>
            First-time homebuyers are entitled to a maximum $4,000 LTT rebate (LTTA s.2.1).
            Toronto imposes a Municipal Land Transfer Tax (MLTT) at equivalent rates, effectively
            doubling the tax for Toronto properties.
          </p>

        </div>
      </article>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practice Management Built for Ontario Lawyers
          </h2>
          <p className="text-slate-600 mb-8">
            LSO By-Law 9 trust accounting, AI document analysis, and Ontario deadline tracking.
            $149 CAD/month for your entire firm.
          </p>
          <a
            href="https://getatticus.ca/sign-up"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
