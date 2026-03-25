import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Residential Tenancy Law: RTA, LTB, Evictions, and Rent Increases | Atticus Blog",
  description:
    "Complete guide to Ontario residential tenancy law: Residential Tenancies Act 2006, rent control, eviction grounds and procedures, LTB applications, N-forms, hearings, and enforcement.",
  openGraph: {
    title: "Ontario Residential Tenancy Law: RTA, LTB, Evictions, and Rent Increases",
    description:
      "Complete guide to Ontario residential tenancy law: RTA 2006, rent control, eviction grounds, N-forms, LTB applications and hearings, and enforcement of orders.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-residential-tenancy",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-residential-tenancy" },
};

export default function OntarioResidentialTenancyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ontario Residential Tenancy Law: RTA, LTB, Evictions, and Rent Increases",
            description:
              "Complete guide to Ontario residential tenancy law under the Residential Tenancies Act 2006: rent control, eviction grounds, N-forms, LTB applications, hearings, and enforcement.",
            url: "https://getatticus.ca/blog/ontario-residential-tenancy",
            datePublished: "2026-03-19",
            author: { "@type": "Organization", name: "Atticus" },
            publisher: {
              "@type": "Organization",
              name: "Atticus",
              logo: {
                "@type": "ImageObject",
                url: "https://getatticus.ca/logo.png",
              },
            },
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Real Property
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Ontario Residential Tenancy Law: RTA, LTB, Evictions, and Rent Increases
          </h1>
          <p className="text-gray-500 text-sm mb-8">March 2026 &middot; 15 min read</p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ontario residential tenancy law is governed by the <em>Residential Tenancies Act, 2006</em>,
            SO 2006, c 17 (RTA). The Act covers virtually all residential rental units in Ontario and
            is administered by the Landlord and Tenant Board (LTB). Understanding the RTA framework —
            rent control, eviction grounds, N-forms, and LTB procedure — is essential for lawyers advising
            landlords and tenants in Ontario&apos;s highly contested rental market.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            1. Scope and Coverage
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The RTA applies to most residential rental units in Ontario. Key exemptions where the RTA
            does not apply:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Units rented by non-profit housing co-operatives</li>
            <li>Units in buildings where the owner lives and shares a kitchen or bathroom</li>
            <li>Vacation or tourist accommodations used for less than 14 consecutive days</li>
            <li>University and college student residences</li>
            <li>Commercial units</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            New residential units first occupied for residential purposes after November 15, 2018 are
            exempt from rent control under the 2018 amendments. All units rented on or before that date
            remain subject to the annual rent increase guideline.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            2. Rent Control and Rent Increases
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For rent-controlled units (first occupied on or before November 15, 2018), a landlord may
            only increase rent once in a 12-month period and only by the amount permitted by the annual
            Rent Increase Guideline published by the Ontario government each year. The guideline is
            typically tied to the Ontario Consumer Price Index.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A landlord wishing to increase rent must give 90 days written notice of the increase using
            Form N1. Notices shorter than 90 days are invalid.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Above-guideline increases (AGIs) are available in limited circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Extraordinary increases in operating costs (municipal taxes, hydro, natural gas)</li>
            <li>Capital expenditures — eligible capital work completed that benefits the tenants</li>
            <li>Security service costs</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            An AGI application is filed with the LTB. Tenants receive notice and may dispute the
            application. AGI hearings can be lengthy and complex — expert evidence on the cost
            calculations is frequently required.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            3. Eviction Grounds and N-Forms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Eviction of a tenant requires a valid ground under the RTA and a Notice to Terminate served
            using the appropriate N-form. There is no &quot;no-fault&quot; eviction in Ontario except in specific
            statutory circumstances.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Form</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Ground</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Notice Period</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">N4</td>
                  <td className="px-4 py-3 text-gray-600">Non-payment of rent</td>
                  <td className="px-4 py-3 text-gray-600">14 days (voids if rent paid within 14 days)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">N5</td>
                  <td className="px-4 py-3 text-gray-600">Interference with reasonable enjoyment / damage / overcrowding</td>
                  <td className="px-4 py-3 text-gray-600">20 days (first notice — tenant may void by stopping); 20 days (second N5 — no void opportunity)</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">N6</td>
                  <td className="px-4 py-3 text-gray-600">Illegal act or misrepresentation of income</td>
                  <td className="px-4 py-3 text-gray-600">10 days</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">N7</td>
                  <td className="px-4 py-3 text-gray-600">Seriously impairs safety of persons / wilful or negligent damage</td>
                  <td className="px-4 py-3 text-gray-600">10 days</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">N8</td>
                  <td className="px-4 py-3 text-gray-600">Persistent late payment / no longer requires rental unit</td>
                  <td className="px-4 py-3 text-gray-600">60 days (end of rental period)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">N12</td>
                  <td className="px-4 py-3 text-gray-600">Landlord&apos;s own use (purchaser&apos;s own use)</td>
                  <td className="px-4 py-3 text-gray-600">60 days (end of fixed-term tenancy if fixed-term)</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">N13</td>
                  <td className="px-4 py-3 text-gray-600">Demolition, conversion, or major repairs requiring vacant possession</td>
                  <td className="px-4 py-3 text-gray-600">120 days (end of rental period)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">3.1 Own Use Evictions — N12</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            An N12 notice is served where the landlord, a family member, or a purchaser requires the unit
            for their own occupation. Requirements:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>The landlord must intend in good faith to use the unit as a principal residence for at least one year</li>
            <li>One month&apos;s compensation must be paid to the tenant (or substitute equivalent rent-free month)</li>
            <li>For purchaser&apos;s own use: the sale agreement must require vacant possession and the purchaser must file an affidavit of good faith intention</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Where the landlord fails to use the unit as required — or re-rents within one year to
            another tenant at a higher rent — the evicted tenant may apply to the LTB for remedies
            including reinstatement or up to 12 months&apos; rent as a penalty (s. 57).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">3.2 Demolition and Renoviction — N13</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            &quot;Renovictions&quot; — evictions for major renovations requiring vacant possession — have been
            significantly tightened. The landlord must:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Obtain all necessary building permits before the N13 takes effect</li>
            <li>Offer the tenant the right of first refusal to re-occupy the unit after renovations at no more than the lawful rent that was charged before eviction</li>
            <li>Pay the tenant 3 months&apos; rent as compensation</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The LTB will scrutinize whether the work genuinely required vacant possession and whether
            the permits are in order. Applications filed without proper permits are typically dismissed.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            4. LTB Applications and Procedure
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.1 Filing an Application</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            After serving the appropriate N-form and waiting the required notice period (or where the tenant
            has not vacated voluntarily), the landlord files an Application to Evict with the LTB. The main
            applications are:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>L1:</strong> Application to evict for non-payment of rent and collect rent owed</li>
            <li><strong>L2:</strong> Application to evict for reasons other than non-payment (behaviour, own use, demolition)</li>
            <li><strong>L3:</strong> Application to collect rent the tenant agreed to pay after termination</li>
            <li><strong>L4:</strong> Application to evict following a mediated/conditional order</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tenants may file their own applications:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>T1:</strong> Application for a rent rebate (rent paid above the lawful rent)</li>
            <li><strong>T2:</strong> Application about landlord rights and obligations (illegal entry, harassment, interference with reasonable enjoyment)</li>
            <li><strong>T3:</strong> Application to reduce rent or services</li>
            <li><strong>T5:</strong> Application where landlord gave notice of termination in bad faith</li>
            <li><strong>T6:</strong> Application about maintenance and repair</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.2 LTB Hearings</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            LTB hearings are conducted in-person, by telephone, or by videoconference. Since the pandemic,
            most LTB hearings are conducted by videoconference through a &quot;hearing block&quot; system — multiple
            applications are scheduled in the same hearing block, with the adjudicator hearing cases
            sequentially.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The LTB applies rules of natural justice but is not bound by the strict rules of evidence.
            Documents may be admitted without formal authentication. However, best practices include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Preparing a disclosure package in advance and providing to the other party</li>
            <li>Organizing rent ledgers and payment records clearly</li>
            <li>Preparing witness evidence in advance (especially for factual disputes about N5/N7 grounds)</li>
            <li>Filing a Tenant Duty Counsel consultation form in advance if the tenant is unrepresented</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.3 Section 83 Relief from Eviction</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Even where a landlord proves the grounds for eviction, s. 83 requires the LTB to consider
            whether it would be unfair to grant the eviction order — having regard to all the circumstances.
            The LTB may:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Delay the eviction to a future date to give the tenant time to find housing</li>
            <li>Make a conditional order (e.g., the eviction is stayed provided the tenant pays outstanding rent by a deadline)</li>
            <li>Refuse the eviction order entirely in exceptional circumstances</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Section 83 relief is mandatory consideration for all eviction grounds except those involving
            impaired safety or illegal acts — where s. 83 provides the LTB with discretion but no
            mandatory obligation to consider relief.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            5. Tenant Rights and Landlord Obligations
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">5.1 Maintenance and Repair</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Landlords must maintain rental units in a good state of repair and fit for habitation,
            complying with all applicable health, safety, housing, and maintenance standards (s. 20).
            This duty cannot be contracted out of — any provision in a lease purporting to make the
            tenant responsible for major maintenance is void.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A tenant who files a T6 maintenance application may obtain a rent abatement proportional
            to the interference with enjoyment of the unit. Severe maintenance failures — mold, pest
            infestations, lack of heat — have resulted in abatements of 20-40% of rent for the
            period of the failure.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">5.2 Entry by Landlord</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            A landlord may enter a rental unit only in limited circumstances (s. 27):
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>In emergency</li>
            <li>After giving 24 hours&apos; written notice with time of entry between 8 AM and 8 PM and a reason for entry</li>
            <li>By agreement</li>
            <li>After giving notice in the case of showing units to prospective tenants or purchasers</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unauthorized entry — including entry without 24-hour notice or outside permitted hours —
            can result in a T2 application and an order for rent abatement or a fine against the landlord.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            6. Enforcement of LTB Orders
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            An LTB eviction order authorizes the Sheriff (now the Court Enforcement Office) to enforce
            the eviction. The landlord must file the order with the Court Enforcement Office and pay the
            filing fee. The Sheriff will attend on a scheduled date to remove the tenant if they have
            not vacated voluntarily.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A landlord may not self-help evict — changing locks, removing doors, or physically removing
            a tenant without a Sheriff enforcement is an illegal eviction under s. 31 and exposes the
            landlord to significant damages.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Monetary orders from the LTB (for rent arrears or tenant applications for rebates) may be
            enforced in the Small Claims Court or the Superior Court if the amount exceeds Small Claims
            Court jurisdiction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            7. Practical Tips for Landlord and Tenant Counsel
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
            <li>
              <strong>Get the N-form right the first time:</strong> Errors in N-forms — wrong dates,
              wrong amounts, wrong statutory grounds — typically require re-starting the notice process.
              Verify the correct form, correct rent amount, and correct calculation of the notice period
              before serving.
            </li>
            <li>
              <strong>For N4 (non-payment): verify the exact arrears:</strong> The N4 must state the
              correct amount owing. Over-stated amounts can result in the Board voiding the notice.
              The tenant&apos;s right to void the N4 by paying within 14 days makes accuracy critical.
            </li>
            <li>
              <strong>For N12 own-use: prepare the affidavit in advance:</strong> The purchaser&apos;s
              affidavit of intention must be filed with the L2 application. Courts have set aside N12
              orders where the affidavit was insufficient or the good faith intention was questionable.
            </li>
            <li>
              <strong>Offer section 83 evidence proactively:</strong> For tenant counsel, file evidence
              of hardship, housing search efforts, dependency of children, and any disability in advance.
              For landlord counsel, consider what s. 83 factors apply and address them in submissions.
            </li>
            <li>
              <strong>Track the one-year own-use obligation:</strong> After an N12 eviction, the landlord
              must occupy for at least one year. Advise landlord clients of this obligation explicitly
              and in writing.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ontario residential tenancy law is highly protective of tenants and procedurally demanding for
            landlords. The N-form system, notice periods, and LTB procedure must be followed exactly —
            procedural errors typically restart the clock. Lawyers advising in this space must be familiar
            not only with the statutory grounds but with the LTB&apos;s adjudicative practices, which have
            become increasingly nuanced as the rental market has intensified.
          </p>

          <div className="mt-16 p-8 bg-orange-50 rounded-2xl border border-orange-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Manage Landlord-Tenant Files with Atticus
            </h3>
            <p className="text-gray-600 mb-6">
              Residential tenancy matters involve multiple notices, tight procedural deadlines, and LTB
              hearing preparation. Atticus helps Ontario real estate and landlord-tenant lawyers track
              every N-form deadline, manage client billing, and stay organized — all in one LSO-compliant platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
