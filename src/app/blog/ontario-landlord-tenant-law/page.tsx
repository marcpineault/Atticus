import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Landlord and Tenant Law — RTA, LTB Applications, and Eviction Process | Atticus",
  description:
    "A practical guide for Ontario landlord-tenant lawyers: Residential Tenancies Act 2006, LTB applications, grounds for termination, Above Guideline Increases, and N-series notices.",
  openGraph: {
    title: "Ontario Landlord and Tenant Law — RTA, LTB Applications, and Eviction Process",
    description:
      "Ontario residential tenancy law guide: RTA 2006, standard of care, LTB applications, N-series termination notices, Above Guideline Increases, and Divisional Court appeals.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-landlord-tenant-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-landlord-tenant-law" },
};

export default function OntarioLandlordTenantLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Landlord and Tenant Law — RTA, LTB Applications, and Eviction Process",
    description:
      "Practical guide to Ontario landlord-tenant law: Residential Tenancies Act 2006, LTB applications, termination grounds, N-series notices, Above Guideline Increases, and appeals.",
    url: "https://getatticus.ca/blog/ontario-landlord-tenant-law",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    datePublished: "2026-03-19",
    keywords: [
      "Ontario landlord tenant law",
      "Residential Tenancies Act Ontario",
      "LTB application Ontario",
      "eviction Ontario",
      "N4 notice Ontario",
      "Above Guideline Increase Ontario",
      "landlord tenant board Ontario",
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Landlord &amp; Tenant Law
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Ontario Landlord and Tenant Law — RTA, LTB Applications, and Eviction Process
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A practical guide to Ontario residential tenancy law: the <em>Residential Tenancies Act</em> 2006,
            Landlord and Tenant Board jurisdiction, N-series termination notices, grounds for eviction,
            Above Guideline Increases, and the appeals process.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>March 2026</span>
            <span>&middot;</span>
            <span>15 min read</span>
            <span>&middot;</span>
            <span>Atticus Legal Research</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">

          <h2>The Residential Tenancies Act 2006 — Framework</h2>
          <p>
            The <em>Residential Tenancies Act</em> SO 2006 c 17 (RTA) governs most residential tenancies
            in Ontario. It replaced the <em>Tenant Protection Act</em> 1997 and significantly strengthened
            tenant protections. The RTA applies to rental units defined under s.2(1) as any living
            accommodation used or intended for use as residential premises.
          </p>
          <p>
            The RTA does not apply to: social housing governed by the <em>Housing Services Act</em> SO 2011
            (s.7(1)(a)); accommodation owned by an educational institution for its students (s.7(1)(d));
            living accommodation in which the occupant shares a bathroom or kitchen with the owner
            (s.5(i) — the &quot;owner-occupied&quot; exception); and certain other exempted categories.
          </p>
          <p>
            The Landlord and Tenant Board (LTB) is the administrative tribunal with exclusive jurisdiction
            to resolve disputes between landlords and tenants under the RTA (s.168 — other courts have
            no jurisdiction over matters the LTB has jurisdiction to hear, except as otherwise provided).
          </p>

          <h2>Rent Regulation</h2>
          <h3>Rent Control and the Guideline</h3>
          <p>
            Rent increases for tenancies entered into before November 15, 2018 are subject to the annual
            rent increase guideline set by the Ministry of Municipal Affairs and Housing under s.120 of the RTA.
            The guideline is based on the Ontario Consumer Price Index and is typically announced in August
            for the following calendar year.
          </p>
          <p>
            Tenancies entered into on or after November 15, 2018 (new rental units first occupied for
            residential purposes after that date) are exempt from rent control under O. Reg. 516/06 s.6.2
            as amended — the landlord may increase rent to market between tenancies without limit.
            Within an existing tenancy, proper notice is still required (N1 form — 90 days before the increase).
          </p>
          <h3>Above Guideline Increases (AGI)</h3>
          <p>
            Landlords may apply to the LTB for a rent increase above the annual guideline under s.126 of the
            RTA on three grounds:
          </p>
          <ul>
            <li>
              <strong>Extraordinary increase in municipal taxes and charges</strong> — when the percentage
              increase in municipal taxes exceeds the guideline by more than 50%
            </li>
            <li>
              <strong>Capital expenditures</strong> — qualifying work on the residential complex; the AGI
              is spread over a number of years and is subject to depreciation
            </li>
            <li>
              <strong>Operating costs related to security services</strong>
            </li>
          </ul>
          <p>
            Tenants must receive notice of the AGI application. The LTB may grant a phase-in over up to
            three years. Recent Ontario government Bill 23 (More Homes Built Faster Act) reforms have
            changed some AGI parameters for capital expenditures.
          </p>

          <h2>Termination of Tenancy — N-Series Notices</h2>
          <p>
            Landlords must serve the appropriate Notice of Termination (N-form) before applying to the LTB.
            The key N-forms are:
          </p>
          <ul>
            <li>
              <strong>N4 — Non-payment of rent</strong>: 14-day notice requiring the tenant to pay arrears
              or vacate. The tenant may void the notice by paying the full amount outstanding before the
              termination date. If unpaid, the landlord files an L1 application.
            </li>
            <li>
              <strong>N5 — Substantial interference, damage, or overcrowding</strong>: First N5 gives the
              tenant 20 days to correct the problem (void period). If the tenant corrects it, the notice
              is voided. A second N5 within 6 months requires no void period (non-voidable).
            </li>
            <li>
              <strong>N6 — Illegal act</strong>: Termination for illegal act committed in the unit or
              complex. No void period.
            </li>
            <li>
              <strong>N7 — Seriously impairs safety</strong>: Termination for act that seriously impairs
              safety of another person in the complex. 10-day notice. No void period.
            </li>
            <li>
              <strong>N8 — Persistent late payment</strong>: Termination for consistently late payment of
              rent. 60-day notice. No void period.
            </li>
            <li>
              <strong>N11 — Agreement to terminate</strong>: Mutual agreement between landlord and tenant
              to end the tenancy by a specified date.
            </li>
            <li>
              <strong>N12 — Landlord&apos;s own use</strong>: 60-day notice (final day must be last day
              of rental period). Requires the landlord or qualifying family member to genuinely intend to
              occupy the unit for at least 12 months. Tenant entitled to 1 month&apos;s rent compensation
              or a comparable unit.
            </li>
            <li>
              <strong>N13 — Demolition, conversion, or repair requiring vacancy</strong>: 120-day notice.
              Tenant entitled to 3 months&apos; rent compensation or comparable unit offer.
            </li>
          </ul>

          <h2>LTB Applications</h2>
          <h3>Landlord Applications</h3>
          <ul>
            <li>
              <strong>L1 — Application to evict for non-payment</strong>: Filed after N4 period expires
              with outstanding arrears; LTB may issue eviction order; tenant may void by paying at hearing
            </li>
            <li>
              <strong>L2 — Application to end tenancy (all other grounds)</strong>: Filed after the
              applicable N-form notice period; covers N5, N6, N7, N8, N12, N13
            </li>
            <li>
              <strong>L3 — Application based on N11 agreement</strong>
            </li>
            <li>
              <strong>L4 — Application based on N5 (second notice)</strong>: Used when the second N5
              has been served within 6 months of a first N5 that was voided
            </li>
            <li>
              <strong>L9 — Application to collect rent arrears (no eviction)</strong>: Where the landlord
              does not seek eviction but wants to collect outstanding arrears as a monetary order
            </li>
          </ul>
          <h3>Tenant Applications</h3>
          <ul>
            <li>
              <strong>T1 — Rent reduction</strong>: Where services or facilities have been reduced or
              discontinued; or rent has been unlawfully increased
            </li>
            <li>
              <strong>T2 — Tenant rights</strong>: Interference with reasonable enjoyment or unlawful
              entry; harassment; illegally changing locks
            </li>
            <li>
              <strong>T3 — Decrease in services</strong>: Where the landlord has decreased services
              without a corresponding rent reduction
            </li>
            <li>
              <strong>T6 — Maintenance</strong>: Failure to maintain the unit or complex in a good
              state of repair; LTB may order rent abatement, repairs, or both
            </li>
          </ul>

          <h2>The Eviction Process</h2>
          <p>
            After a successful L1 or L2 application, the LTB issues an eviction order. If the tenant
            does not vacate voluntarily, the landlord must file the order with the Court Enforcement Office
            (Sheriff) to enforce. The Sheriff schedules the enforcement and the tenant is given notice.
            Landlords cannot change locks, remove doors, or shut off utilities to evict — doing so is an
            offence under the RTA and will result in the LTB ordering the tenant to be readmitted.
          </p>
          <p>
            The LTB has discretion to postpone or refuse eviction (&quot;section 83 relief&quot;) where it
            is satisfied that the circumstances warrant it — considering all circumstances, including whether
            the tenant has paid arrears or whether the tenant has children or other dependants.
          </p>

          <h2>Maintenance Obligations</h2>
          <p>
            Section 20 of the RTA requires a landlord to maintain a rental unit and the residential complex
            in a good state of repair and fit for habitation, complying with health, safety, housing, and
            maintenance standards. This obligation exists even if the tenant was aware of the state of
            non-repair before entering the tenancy agreement.
          </p>
          <p>
            The LTB on a T6 application may order: rent abatement (past period of disrepair); repair work
            within a specified time; or other remedies. Abatement percentages depend on the nature and
            duration of the disrepair and its impact on the tenant&apos;s use and enjoyment.
          </p>

          <h2>Appeals and Judicial Review</h2>
          <p>
            LTB orders may be appealed to the Divisional Court on questions of law under s.210 of the RTA.
            Leave to appeal is required only for rent arrears orders under $5,000. For other orders (including
            eviction), the right of appeal is as of right on a question of law. The standard of review for
            questions of law is correctness.
          </p>
          <p>
            Requests for review (RFR) of LTB orders may be made to the LTB itself under Rule 26 of the
            LTB Rules of Practice where a serious error occurred or a party was not reasonably able to
            participate in the proceeding. Reviews are distinct from appeals and are heard by a different
            LTB member.
          </p>

          <h2>The Residential Tenancy Act and Commercial Tenancies</h2>
          <p>
            The RTA does not apply to commercial tenancies. Commercial leases are governed by the{" "}
            <em>Commercial Tenancies Act</em> RSO 1990 c L.7. Key differences:
          </p>
          <ul>
            <li>
              Distress (seizure of tenant&apos;s goods for unpaid rent) remains available for commercial
              landlords under Part II of the CTA — it has been abolished for residential
            </li>
            <li>
              Commercial leases are freely negotiated and the court has no power to relieve from forfeiture
              except on equitable grounds
            </li>
            <li>
              Commercial tenants must deal with their landlord under the <em>Commercial Tenancies Act</em>
              and general contract law — the extensive LTB rights framework does not apply
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}
