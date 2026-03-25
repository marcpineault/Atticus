import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Commercial Lease Law: Key Clauses, Landlord and Tenant Rights, and Disputes",
  description:
    "Complete guide to Ontario commercial lease law: Commercial Tenancies Act, gross vs net leases, rent review, distress, forfeiture, relief from forfeiture, assignment and subletting, demolition clauses, HVAC and repair obligations, and limitation periods.",
  openGraph: {
    title: "Ontario Commercial Lease Law: Key Clauses, Landlord and Tenant Rights, and Disputes",
    description:
      "Ontario commercial lease law under the Commercial Tenancies Act: distress, forfeiture, relief, rent review, assignment and subletting, demolition, repair obligations, and limitation periods.",
    url: "https://getatticus.ca/blog/ontario-commercial-lease",
    siteName: "Atticus",
    type: "article",
  },
  alternates: {
    canonical: "https://getatticus.ca/blog/ontario-commercial-lease",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Commercial Lease Law: Key Clauses, Landlord and Tenant Rights, and Disputes",
  "description": "Complete guide to Ontario commercial lease law covering the Commercial Tenancies Act, gross and net lease structures, distress and forfeiture, relief from forfeiture, assignment and subletting, demolition clauses, repair and HVAC obligations, and limitation periods.",
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
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-commercial-lease",
  "keywords": ["commercial lease Ontario", "Commercial Tenancies Act Ontario", "distress rent Ontario", "forfeiture commercial lease Ontario", "relief from forfeiture Ontario", "assignment subletting commercial lease Ontario", "net lease Ontario", "commercial landlord tenant Ontario"]
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does the Residential Tenancies Act apply to commercial leases in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The Residential Tenancies Act 2006 applies only to residential premises. Commercial leases in Ontario are governed by the Commercial Tenancies Act R.S.O. 1990, c. L.7 and common law. The LTA does not provide the same tenant protections (rent control, mandatory renewal rights, just cause eviction). Commercial lease terms are largely governed by contract — negotiate carefully before signing."
      }
    },
    {
      "@type": "Question",
      "name": "What is distress in an Ontario commercial lease?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Distress (also called distraint) is a self-help remedy allowing a commercial landlord to seize and sell a tenant's goods on the premises to recover unpaid rent, without a court order. It is governed by Part II of the Commercial Tenancies Act. The landlord must follow strict procedural requirements — including giving notice, using a licensed bailiff, and observing exemptions for tools of trade and personal items. Failure to follow proper procedure can expose the landlord to liability for wrongful distress."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between forfeiture and distress in a commercial lease?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Distress is a remedy to recover unpaid rent by seizing tenant's goods — it does not end the lease. Forfeiture terminates the lease due to breach (usually non-payment of rent or breach of a covenant), re-entering the premises and evicting the tenant. Forfeiture requires a right of re-entry clause in the lease. The tenant may apply for relief from forfeiture under s.20 of the Commercial Tenancies Act or under the Courts of Justice Act."
      }
    },
    {
      "@type": "Question",
      "name": "Can a commercial tenant assign the lease without the landlord's consent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the lease. Most commercial leases contain assignment and subletting restrictions requiring the landlord's prior written consent. Unlike residential tenancies, there is no statutory obligation in Ontario for commercial landlords to act reasonably in withholding consent — the lease terms govern. Some leases include a recapture right allowing the landlord to terminate the lease instead of permitting assignment. Review the specific lease language carefully."
      }
    }
  ]
}`;

export default function OntarioCommercialLease() {
  return (
    <>
      <Script id="commercial-lease-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="commercial-lease-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Commercial Real Estate
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Commercial Lease Law: Key Clauses, Landlord and Tenant Rights, and Disputes
            </h1>
            <p className="text-slate-300 text-lg mb-4 max-w-3xl">
              Commercial Tenancies Act, gross vs triple-net leases, distress and forfeiture, relief from
              forfeiture, assignment and subletting, demolition clauses, repair and HVAC obligations,
              and limitation periods for Ontario commercial lawyers.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>14 min read</span>
              <span>•</span>
              <span>Commercial Real Estate</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-12">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaways</h2>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• Commercial Tenancies Act (Ontario) governs commercial leases — Residential Tenancies Act does not apply</li>
              <li>• Triple-net (NNN) leases pass property tax, insurance, and maintenance to the tenant — gross leases include these in rent</li>
              <li>• Distress (distraint) allows landlord to seize tenant goods for unpaid rent without a court order — strict procedural requirements</li>
              <li>• Forfeiture terminates the lease on breach — tenant may seek relief from forfeiture under CTA s.20 or Courts of Justice Act</li>
              <li>• Assignment and subletting provisions govern transferability — no statutory reasonableness requirement for commercial landlord consent refusal</li>
              <li>• Demolition and relocation clauses give landlord right to terminate for redevelopment — negotiate lead time and relocation compensation</li>
              <li>• Limitation periods: Limitations Act 2002 two-year basic period applies to most commercial lease claims</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Commercial Tenancies Act (Ontario)
            </h2>
            <p className="text-slate-700 mb-4">
              Commercial leases in Ontario are governed by the <em>Commercial Tenancies Act</em> R.S.O.
              1990, c. L.7 (CTA) and the common law. Unlike residential tenancies, commercial leases
              are largely governed by the parties&apos; contract — the CTA provides a framework but gives
              the parties significant freedom to vary its provisions. Key CTA provisions include:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Part II — Distress</strong> (ss.31-62): governs the landlord&apos;s right to distrain
                for unpaid rent by seizing and selling tenant goods
              </li>
              <li>
                <strong>Section 18</strong>: landlord&apos;s liability for interference with tenant&apos;s quiet
                enjoyment
              </li>
              <li>
                <strong>Section 19</strong>: waiver of breach (accepting rent with knowledge of breach
                waives the landlord&apos;s right to forfeit for that breach)
              </li>
              <li>
                <strong>Section 20</strong>: relief from forfeiture (court may grant relief on such terms
                as it sees fit)
              </li>
              <li>
                <strong>Section 21</strong>: right to re-enter after default; notice requirements
              </li>
              <li>
                <strong>Part IV</strong>: holdover tenancy and implied periodic tenancy provisions
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Lease Structures: Gross, Net, and Triple-Net
            </h2>
            <p className="text-slate-700 mb-4">
              Understanding the lease structure is essential to understanding the tenant&apos;s total occupancy
              cost and the landlord&apos;s risk exposure:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-3 font-semibold">Lease Type</th>
                    <th className="text-left px-5 py-3 font-semibold">What the Tenant Pays</th>
                    <th className="text-left px-5 py-3 font-semibold">Landlord&apos;s Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Gross Lease",
                      tenant: "Fixed rent (all-in); landlord pays property tax, insurance, maintenance, utilities",
                      landlord: "All operating costs — tenant has predictable occupancy cost",
                    },
                    {
                      type: "Net Lease (Single Net)",
                      tenant: "Base rent + property tax",
                      landlord: "Insurance and maintenance; tenant's tax share varies with tax increases",
                    },
                    {
                      type: "Double Net (NN)",
                      tenant: "Base rent + property tax + building insurance",
                      landlord: "Maintenance and structural repairs",
                    },
                    {
                      type: "Triple Net (NNN)",
                      tenant: "Base rent + property tax + insurance + all maintenance and operating costs",
                      landlord: "Structural shell only (varies by lease); tenant bears all cost risk",
                    },
                    {
                      type: "Modified Gross",
                      tenant: "Fixed rent plus some specific expenses (e.g., utilities or janitorial)",
                      landlord: "Remaining operating costs — negotiated allocation",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.type}</td>
                      <td className="px-5 py-3 text-slate-600">{row.tenant}</td>
                      <td className="px-5 py-3 text-slate-600">{row.landlord}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-700">
              In practice, the term &quot;net&quot; is used inconsistently — always read the specific additional
              rent and operating cost provisions of the lease to understand exactly what the tenant owes
              beyond base rent. Common additional rent items include: realty taxes (including business
              improvement area levies), building insurance, common area maintenance (CAM), management fees
              (cap these where possible), utilities, and capital replacement reserves.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Distress (Distraint) for Unpaid Rent
            </h2>
            <p className="text-slate-700 mb-4">
              Distress is a self-help remedy allowing a landlord to seize the tenant&apos;s goods on the
              premises and sell them to recover unpaid rent, without first obtaining a court order. It is
              a powerful but technically demanding remedy governed by CTA Part II:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Right to distrain</strong> — arises when rent is due and in arrears; the lease
                must not have been forfeited (cannot distrain after forfeiture); distress cannot be used
                for other amounts owed (e.g., operating costs labeled as &quot;additional rent&quot; — check the
                lease definition of &quot;rent&quot;)
              </li>
              <li>
                <strong>Goods exempt from distress</strong> — CTA s.31 exempts tools of trade, wearing
                apparel, goods in transit, goods of a third party, goods leased under PPSA (Personal
                Property Security Act) chattel leases
              </li>
              <li>
                <strong>Bailiff requirement</strong> — distress must be carried out by a licensed bailiff
                (Bailiff Act R.S.O. 1990); a landlord conducting their own distress without a bailiff
                commits an unlawful distress
              </li>
              <li>
                <strong>Notice and timing</strong> — CTA s.43 requires five days&apos; notice to the tenant
                before sale of distrained goods; the tenant has the opportunity to redeem goods by
                paying the arrears
              </li>
              <li>
                <strong>Illegal distress</strong> — proceeding without proper authority, seizing exempt
                goods, or using excessive force makes the landlord liable for wrongful distress (conversion);
                significant damages possible
              </li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Distress vs Court Claim</h4>
              <p className="text-slate-700 text-sm">
                While distress avoids the delay of a court action, landlords should carefully consider
                whether distress is appropriate. Distress does not terminate the lease — the tenant
                remains and can continue to default. Wrongful distress (technical errors) exposes the
                landlord to significant liability. For most commercial landlords, a combination of
                distress (to quickly recover property at risk of removal) followed by notice of forfeiture
                is the typical approach.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Forfeiture and Re-Entry
            </h2>
            <p className="text-slate-700 mb-4">
              Forfeiture terminates the lease and allows the landlord to re-enter the premises and
              re-let to a new tenant. Key requirements:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Right of re-entry clause</strong> — the lease must contain an express right of
                re-entry clause triggered by non-payment of rent or breach of covenant; without such a
                clause, the landlord cannot forfeit
              </li>
              <li>
                <strong>Section 19 waiver</strong> — a landlord who accepts rent with knowledge of a
                breach waives the right to forfeit for that breach; be careful about accepting any rent
                after an event of default without expressly reserving rights
              </li>
              <li>
                <strong>Notice for non-rent breaches</strong> — for breaches other than non-payment of
                rent, the landlord must serve notice under CTA s.19(2) specifying the breach, requiring
                remedy within a reasonable time (typically 20 days for remediable breaches under the
                CTA); only then can re-entry be exercised
              </li>
              <li>
                <strong>Peaceful re-entry</strong> — the landlord must re-enter peacefully; forcible
                entry (breaking and entering with risk of violence) is an offence under the
                <em> Trespass to Property Act</em> and the <em>Criminal Code</em>
              </li>
              <li>
                <strong>Effect of forfeiture</strong> — all subleases and mortgages registered against
                the leasehold are extinguished; the subtenant&apos;s interest ends with the head lease
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Relief from Forfeiture</h3>
            <p className="text-slate-700 mb-4">
              Relief from forfeiture is an equitable remedy allowing a court to restore the tenant to
              possession despite the landlord&apos;s valid forfeiture. In Ontario, relief is available under:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>CTA s.20</strong> — court may grant relief from forfeiture for non-payment of
                rent on such terms as it sees fit (payment of arrears plus costs is the standard condition)
              </li>
              <li>
                <strong>Courts of Justice Act s.98</strong> — courts may grant relief against penalties
                and forfeitures on such terms as to compensation and otherwise as seem just
              </li>
              <li>
                The court considers: the gravity of the breach, the conduct of the tenant, the landlord&apos;s
                losses, whether the breach is remediable, the value of the tenant&apos;s interest, and any
                hardship
              </li>
              <li>
                For non-rent breaches (e.g., unauthorized use), relief is more difficult to obtain than
                for pure non-payment breaches where the arrears can be cured
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Assignment and Subletting
            </h2>
            <p className="text-slate-700 mb-4">
              Commercial leases almost invariably restrict assignment and subletting without the
              landlord&apos;s prior written consent. Unlike residential tenancies, there is no Ontario
              statutory requirement that a commercial landlord act reasonably in refusing consent.
              The lease language controls.
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Assignment vs sublease</strong> — an assignment transfers the entire remaining
                term to the assignee; a sublease creates a new tenancy for less than the remaining term.
                On assignment, the original tenant remains liable (privity of contract) unless expressly
                released by the landlord.
              </li>
              <li>
                <strong>Consent not to be unreasonably withheld</strong> — where the lease contains this
                provision (best practice to negotiate), the landlord cannot refuse for unrelated reasons;
                grounds for reasonable refusal include: creditworthiness of the proposed assignee,
                incompatibility with the use clause, and financial ability to perform lease obligations
              </li>
              <li>
                <strong>Recapture clause</strong> — many commercial leases give the landlord the right to
                terminate the lease (recapture the premises) instead of permitting the assignment; the
                landlord then avoids the obligation to consent and can negotiate directly with the proposed
                assignee or re-let at market rent
              </li>
              <li>
                <strong>ROFO / ROFR on assignment</strong> — right of first offer or refusal clauses
                requiring the tenant to first offer the lease to the landlord before assigning to a third
                party; common in retail and food and beverage leases
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Demolition and Relocation Clauses
            </h2>
            <p className="text-slate-700 mb-4">
              Many commercial leases — particularly in urban core, shopping mall, and redevelopment
              contexts — include demolition clauses giving the landlord the right to terminate the
              lease if the building is to be demolished or substantially renovated for redevelopment.
              Key considerations when reviewing demolition clauses:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Notice period</strong> — negotiate the longest possible notice period before
                the landlord can exercise the demolition right (12-24 months is reasonable for established
                businesses needing time to relocate)
              </li>
              <li>
                <strong>Demolition permit requirement</strong> — insist the clause only be triggered after
                the landlord obtains an actual demolition or building permit (not merely an application or
                approval in principle)
              </li>
              <li>
                <strong>Relocation option</strong> — negotiate a right to be offered equivalent space in
                the redeveloped building at equivalent terms before the demolition right can be exercised
              </li>
              <li>
                <strong>Compensation</strong> — negotiate compensation for disruption, leasehold
                improvements, signage costs, and lost goodwill triggered by demolition clause exercise;
                include a specific damages formula
              </li>
              <li>
                <strong>Fixturing period / build-out costs</strong> — if the tenant invested significantly
                in leasehold improvements, ensure the compensation formula accounts for unamortized
                improvement costs
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Repair and Maintenance Obligations
            </h2>
            <p className="text-slate-700 mb-4">
              The allocation of repair and maintenance obligations between landlord and tenant is
              lease-specific. Common structures:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Landlord obligations</strong> — structural repairs (roof, foundation, exterior
                walls, building systems in gross leases), common areas, base building HVAC (sometimes),
                elevators, and parking lots
              </li>
              <li>
                <strong>Tenant obligations</strong> — interior leasehold improvements, non-structural
                repairs within the unit, HVAC serving exclusively the tenant&apos;s premises (in many NNN
                leases), plate glass, doors, fixtures
              </li>
              <li>
                <strong>HVAC disputes</strong> — the most litigated repair issue in commercial leases is
                the responsibility for HVAC equipment. Clarify in the lease: who owns the HVAC serving
                the tenant&apos;s premises, whether the landlord or tenant maintains it, and whether the
                tenant must replace a failed HVAC unit
              </li>
              <li>
                <strong>Condition at end of term</strong> — most commercial leases require the tenant to
                restore the premises to the condition at commencement (reasonable wear and tear excepted),
                remove trade fixtures, and make good any damage. Negotiate an express carve-out for
                fixtures the tenant does not want to remove.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Quiet Enjoyment and Landlord Liability
            </h2>
            <p className="text-slate-700 mb-4">
              The covenant of quiet enjoyment — implied in every lease under CTA s.18 and at common law
              — is the landlord&apos;s promise that the tenant will have peaceful possession of the premises
              for the term of the lease, free from substantial interference by the landlord or those
              claiming under the landlord.
            </p>
            <p className="text-slate-700 mb-4">
              Breach of quiet enjoyment occurs where:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
              <li>The landlord or agents repeatedly enter the premises without proper notice or consent</li>
              <li>The landlord cuts off essential services (heat, water, electricity) to pressure the tenant</li>
              <li>Construction by the landlord substantially interferes with the tenant&apos;s use and enjoyment</li>
              <li>Failure to maintain common areas in a manner preventing access to the tenant&apos;s premises</li>
            </ul>
            <p className="text-slate-700">
              Remedies for breach of quiet enjoyment include damages (including loss of business), rent
              reduction (abatement) for the period of interference, and in extreme cases an argument for
              constructive eviction — where the landlord&apos;s conduct renders the premises uninhabitable,
              the tenant may treat the lease as ended and claim damages.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Limitation Periods for Commercial Lease Claims
            </h2>
            <p className="text-slate-700 mb-4">
              The <em>Limitations Act</em> 2002 two-year basic limitation period (from the date of
              discovery) applies to most commercial lease claims in Ontario:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>Arrears of rent: two years from each missed payment (continuing obligation — each missed payment starts a new period)</li>
              <li>Distress and wrongful distress claims: two years from the distress action</li>
              <li>Forfeiture and relief from forfeiture applications: prompt action required; delay can bar equitable relief</li>
              <li>Repairs and maintenance breaches: two years from discovery of the breach</li>
              <li>Breach of quiet enjoyment: two years from the date of the breach or discovery</li>
            </ul>
            <p className="text-slate-700">
              The 15-year ultimate limitation period (s.15) applies regardless of discoverability.
              Landlords pursuing rent arrears claims for periods more than two years before the action
              will face a limitation defence unless an acknowledgment of the debt resets the period
              under s.13 (written acknowledgment signed by the debtor or agent).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can a commercial landlord lock out a tenant for non-payment in Ontario?",
                  a: "Technically, lockout is a form of distress or re-entry. A commercial landlord cannot change locks or lock out a tenant without proper legal process. Distress (seizing goods) requires following CTA Part II procedure. Forfeiture and re-entry requires a right of re-entry clause, proper notice, and peaceful re-entry. A wrongful lockout exposes the landlord to a claim for breach of quiet enjoyment, wrongful distress, and an urgent injunction application from the tenant for re-entry. Follow proper legal procedure.",
                },
                {
                  q: "Does a commercial tenant have any rights to renew the lease in Ontario?",
                  a: "Only if the lease contains a renewal or extension option clause. The Commercial Tenancies Act does not provide a statutory right to renew for commercial tenants (unlike residential tenancies). If the lease includes a renewal option, it must typically be exercised in strict compliance with the notice requirements in the option clause — failure to give timely notice can forfeit the renewal right. Always calendar option deadlines well in advance.",
                },
                {
                  q: "What is a personal guarantee in a commercial lease?",
                  a: "A personal guarantee is a promise by an individual (typically the principal shareholders of a corporate tenant) to personally perform all the obligations of the corporate tenant under the lease, including payment of rent. Landlords routinely require personal guarantees from small business owners. Review the scope of the guarantee carefully — some guarantee the full term, others are capped at a number of months' rent. The guarantee should survive assignment of the lease only if expressly stated.",
                },
                {
                  q: "Can a tenant withhold rent because of landlord's failure to repair?",
                  a: "Generally no — in Ontario, a commercial tenant's obligation to pay rent is independent of the landlord's obligation to repair, unless the lease expressly provides otherwise (rent abatement clause) or the failure is so severe it amounts to a breach of quiet enjoyment. Withholding rent without legal authority exposes the tenant to forfeiture. The correct approach is to pay rent under protest, document the breach, and pursue a separate claim for damages or rent abatement.",
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
              Manage Your Real Estate and Corporate Matters with Atticus
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Atticus is the Ontario practice management platform built for real estate and corporate
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
                { href: "/blog/ontario-trespass-to-land", label: "Ontario Trespass to Land" },
                { href: "/blog/ontario-specific-performance", label: "Ontario Specific Performance" },
                { href: "/blog/ontario-rectification", label: "Ontario Rectification" },
                { href: "/ontario-real-estate-lawyer", label: "Ontario Real Estate Lawyer Software" },
                { href: "/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer Software" },
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
