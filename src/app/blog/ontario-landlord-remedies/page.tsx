import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Landlord Remedies Guide — LTB Applications | Atticus",
  description:
    "Complete guide to Ontario landlord remedies under the Residential Tenancies Act 2006: N4 non-payment, N5 disturbance, N8 end of term, N12 owner use, N13 demolition, eviction hearings, and enforcement.",
  openGraph: {
    title: "Ontario Landlord Remedies — RTA Applications and LTB Process",
    description:
      "Landlord remedies under Ontario's Residential Tenancies Act 2006: N-forms, LTB applications, eviction procedures, above-guideline rent, rent deposit rules, and enforcement of orders.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-landlord-remedies",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-landlord-remedies" },
};

export default function OntarioLandlordRemediesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Landlord Remedies — RTA Applications and LTB Process",
    description:
      "Landlord remedies under the Residential Tenancies Act 2006: N-forms, LTB applications, eviction hearings, and enforcement.",
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
              Landlord & Tenant Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ontario Landlord Remedies — RTA Applications and LTB Process
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive guide to landlord applications under the Residential Tenancies Act 2006,
              SO 2006 c 17 (RTA): N-form notices, LTB applications, hearing procedures, eviction
              enforcement, rent deposit rules, and above-guideline increases.
            </p>
          </div>
        </section>

        <article className="py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Overview — The Landlord-Tenant Regulatory Framework</h2>
            <p className="text-slate-600 mb-4">
              The <em>Residential Tenancies Act 2006</em> SO 2006 c 17 (RTA) governs most residential
              tenancies in Ontario. The Landlord and Tenant Board (LTB) is the administrative tribunal
              with exclusive jurisdiction over RTA applications — courts have no jurisdiction to
              order eviction of a residential tenant, except in limited circumstances under the
              <em>Commercial Tenancies Act</em> for commercial tenancies.
            </p>
            <p className="text-slate-600 mb-4">
              The RTA applies to most rental units in Ontario: houses, apartments, condominiums, and
              mobile homes. Key exclusions: owner-occupied homes where the tenant shares bathroom
              or kitchen with the owner (s.5(i)); commercial tenancies; and some co-op housing.
            </p>
            <p className="text-slate-600 mb-4">
              A fundamental RTA principle: a tenancy can only be terminated by (1) the tenant giving
              notice, (2) both parties agreeing, or (3) an LTB eviction order. A landlord cannot
              lock out a tenant, seize belongings, cut utilities, or engage in &quot;self-help&quot; eviction —
              these are illegal acts of harassment under ss.22-26 RTA.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">N-Form Notice Table</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Form</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Grounds</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Notice Period</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Void If...</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 px-4 font-medium text-amber-600">N4</td>
                    <td className="py-3 px-4 text-slate-600">Non-payment of rent</td>
                    <td className="py-3 px-4 text-slate-600">14 days</td>
                    <td className="py-3 px-4 text-slate-600">Tenant pays full arrears before hearing</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-amber-600">N5</td>
                    <td className="py-3 px-4 text-slate-600">Interference, damage, overcrowding</td>
                    <td className="py-3 px-4 text-slate-600">20 days</td>
                    <td className="py-3 px-4 text-slate-600">Tenant voids by stopping conduct within 7 days (1st N5)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-amber-600">N6</td>
                    <td className="py-3 px-4 text-slate-600">Illegal act (drugs, weapons)</td>
                    <td className="py-3 px-4 text-slate-600">10 days</td>
                    <td className="py-3 px-4 text-slate-600">Not voidable — LTB applies s.83 relief</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-amber-600">N7</td>
                    <td className="py-3 px-4 text-slate-600">Serious impairment of safety</td>
                    <td className="py-3 px-4 text-slate-600">10 days</td>
                    <td className="py-3 px-4 text-slate-600">Not voidable</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-amber-600">N8</td>
                    <td className="py-3 px-4 text-slate-600">Persistent late payment or income eligibility</td>
                    <td className="py-3 px-4 text-slate-600">60 days (end of term)</td>
                    <td className="py-3 px-4 text-slate-600">Must terminate on last day of rental period</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-amber-600">N12</td>
                    <td className="py-3 px-4 text-slate-600">Owner/purchaser/family member use</td>
                    <td className="py-3 px-4 text-slate-600">60 days (end of term)</td>
                    <td className="py-3 px-4 text-slate-600">Compensation required (1 month rent)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-amber-600">N13</td>
                    <td className="py-3 px-4 text-slate-600">Demolition, conversion, major repairs</td>
                    <td className="py-3 px-4 text-slate-600">120 days (end of term)</td>
                    <td className="py-3 px-4 text-slate-600">Compensation 3 months rent; right of first refusal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">N4 — Non-Payment of Rent</h2>
            <p className="text-slate-600 mb-4">
              The N4 (Notice to End Your Tenancy for Non-payment of Rent) is the most common landlord
              notice. It may be given when the tenant owes any rent — even one day&apos;s arrears. The
              notice must accurately state the exact rent owing and the date it was due.
            </p>
            <p className="text-slate-600 mb-4">
              Common errors that invalidate an N4:
            </p>
            <ul className="space-y-2 text-slate-600 mb-4 list-none">
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>Overstating the arrears — any amount in excess of actual arrears voids the notice</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>Incorrect termination date — must be at least 14 days after service and on the last day of a rental period for a monthly tenancy</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>Including charges that are not &quot;rent&quot; (e.g., NSF fees, parking charges not in the tenancy agreement)</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>Incorrect calculation of the void date</span></li>
            </ul>
            <p className="text-slate-600 mb-4">
              After the N4 termination date passes without payment, the landlord may file an L1
              application (Application to Evict a Tenant for Non-payment of Rent and to Collect Rent
              the Tenant Owes) with the LTB. The tenant may void the L1 application by paying all
              arrears before the hearing.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">N12 — Owner Use Eviction</h2>
            <p className="text-slate-600 mb-4">
              The N12 (Notice to End Your Tenancy Because the Landlord, a Purchaser or a Family
              Member Requires the Rental Unit) allows a landlord to terminate a tenancy if the landlord,
              the landlord&apos;s spouse, child, parent, or the landlord&apos;s spouse&apos;s child or parent requires
              the unit for personal use.
            </p>
            <p className="text-slate-600 mb-4">
              Key requirements for a valid N12:
            </p>
            <ul className="space-y-2 text-slate-600 mb-4 list-none">
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>The landlord must be an <strong>individual</strong> — corporations cannot serve N12 for personal use</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>The person requiring the unit must intend to occupy the unit for <strong>at least 12 months</strong></span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>60 days notice minimum (end of term)</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>The landlord must pay <strong>one month&apos;s rent compensation</strong> to the tenant no later than the termination date</span></li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>The landlord must declare the genuine intention to use the unit (declarations required at the LTB hearing)</span></li>
            </ul>
            <p className="text-slate-600 mb-4">
              Bad faith N12: if the landlord does not move in after the tenant vacates, the tenant
              may apply to the LTB under s.57 RTA for bad faith eviction. Remedies include up to
              12 months&apos; rent as general compensation, reinstatement, and an administrative fine.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">LTB Hearing Procedure</h2>
            <p className="text-slate-600 mb-4">
              After the notice period expires, the landlord files an application at the LTB. Current
              LTB processing times vary significantly by application type and region — L1 applications
              (non-payment) are typically scheduled faster (2–4 months) than L2 applications (eviction
              for cause).
            </p>
            <p className="text-slate-600 mb-4">
              Hearings are primarily conducted by videoconference (post-COVID). Parties may represent
              themselves, be represented by a lawyer or paralegal licensed by the LSO, or by an
              unlicensed agent who is the party&apos;s employee or family member.
            </p>
            <p className="text-slate-600 mb-4">
              Section 83 relief: even after a landlord proves all elements of an eviction application,
              the LTB <em>must</em> consider whether it would be appropriate to grant relief under
              s.83 — either refusing the eviction order outright or postponing the eviction to give
              the tenant time to find alternative housing. The LTB considers the circumstances of the
              tenant and the prejudice to the landlord.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Rent Deposit Rules</h2>
            <p className="text-slate-600 mb-4">
              A landlord may only collect a last month&apos;s rent deposit — no security deposit, no pet
              deposit, and no additional deposits of any kind are permitted under the RTA (s.105).
              The last month&apos;s rent deposit maximum is one month&apos;s rent (or one week&apos;s rent for weekly
              tenancies).
            </p>
            <p className="text-slate-600 mb-4">
              Interest on the rent deposit: the landlord must pay annual interest on the last month&apos;s
              rent deposit at the rent increase guideline rate. If the landlord fails to pay interest,
              the tenant may apply to offset arrears at the L1 hearing. Landlords who charge more
              than one month&apos;s rent deposit must pay the excess back to the tenant with interest.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Enforcement of LTB Orders</h2>
            <p className="text-slate-600 mb-4">
              An LTB eviction order does not automatically result in the tenant vacating. If the
              tenant remains after the termination date in the order, the landlord must file with
              the Court Enforcement Office (Sheriff) for enforcement. The Sheriff will schedule an
              eviction date.
            </p>
            <p className="text-slate-600 mb-4">
              Tenant&apos;s motion to void order: the tenant may file a motion to void or stay an eviction
              order at the LTB before the enforcement date, typically by paying outstanding arrears
              or showing changed circumstances. The LTB has authority to delay or void orders
              already issued.
            </p>
            <p className="text-slate-600 mb-4">
              Arrears orders: where the LTB grants an eviction order and a money order for arrears,
              the money order may be filed in the Superior Court of Justice as a judgment for
              enforcement purposes — allowing garnishment of wages, bank accounts, and other
              enforcement mechanisms under the Rules of Civil Procedure.
            </p>

            <div className="mt-12 bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Manage Landlord-Tenant Files with Atticus
              </h3>
              <p className="text-slate-600 mb-4">
                Atticus helps Ontario landlord-tenant lawyers and paralegals track LTB hearing dates,
                N-form notice periods, and RTA deadlines. AI document analysis extracts key facts from
                tenancy agreements, N-forms, and LTB orders. LSO-compliant trust accounting for
                settlement funds and deposit disputes.
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
