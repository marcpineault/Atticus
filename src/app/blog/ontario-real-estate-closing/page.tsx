import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Real Estate Closing: Title Insurance, Trust Ledgers, and Requisitions | Atticus Blog",
  description:
    "Complete guide to Ontario real estate closings: title insurance, Land Titles Act registration, trust accounting for closing funds, requisitions, statement of adjustments, and common closing issues.",
  openGraph: {
    title: "Ontario Real Estate Closing: Title Insurance, Trust Ledgers, and Requisitions",
    description:
      "Complete guide to Ontario real estate closings: title insurance, Land Titles Act, trust accounting for closing funds, requisitions, statement of adjustments, and closing problems.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-real-estate-closing",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-real-estate-closing" },
};

export default function OntarioRealEstateClosingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ontario Real Estate Closing: Title Insurance, Trust Ledgers, and Requisitions",
            description:
              "Complete guide to Ontario real estate closings: title insurance, Land Titles Act registration, trust accounting for closing funds, requisitions, and statement of adjustments.",
            url: "https://getatticus.ca/blog/ontario-real-estate-closing",
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
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Real Estate
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Ontario Real Estate Closing: Title Insurance, Trust Ledgers, and Requisitions
          </h1>
          <p className="text-gray-500 text-sm mb-8">March 2026 &middot; 14 min read</p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ontario residential real estate transactions close through a highly standardized process
            involving title searching, requisitions, title insurance, trust accounting for closing funds,
            and electronic registration. Real estate practice is high-volume and deadline-driven — missing
            a closing date or mishandling trust funds are among the most common sources of solicitor
            negligence claims and LSO complaints. This guide covers the key components of a residential
            closing in Ontario.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            1. The Agreement of Purchase and Sale
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Agreement of Purchase and Sale (APS) — typically on OREA standard forms — governs the
            transaction. Key provisions counsel must review:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Closing date:</strong> Must be a day on which the land registry office is open
              and capable of receiving registrations. Statutory holidays and weekends can be problematic.
            </li>
            <li>
              <strong>Title requisition deadline:</strong> The standard OREA form requires the buyer
              to deliver all title objections by a specified requisition date — typically 30 days before
              closing. Objections not raised by this deadline are waived.
            </li>
            <li>
              <strong>Conditions:</strong> Financing, home inspection, and status certificate conditions
              must be satisfied or waived before the deal becomes firm.
            </li>
            <li>
              <strong>Chattels and fixtures:</strong> Items included and excluded must be clearly identified.
              Disputes over fixtures (window coverings, light fixtures, built-in appliances) are common.
            </li>
            <li>
              <strong>HST:</strong> Whether HST is included in the purchase price must be addressed —
              particularly in new home sales where the New Housing Rebate may apply.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            2. Title Searching in Ontario
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ontario operates under the <em>Land Titles Act</em>, RSO 1990, c L.5 for most urban properties,
            and the <em>Registry Act</em>, RSO 1990, c R.20 for remaining registry system properties.
            Most Ontario properties have been converted to the Land Titles system.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Under Land Titles, the Parcel Register (accessed through Teraview) is the authoritative
            record. The buyer&apos;s lawyer searches the Parcel Register to identify:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Current owner and chain of title</li>
            <li>Registered mortgages, charges, and encumbrances</li>
            <li>Easements and rights-of-way</li>
            <li>Restrictive covenants</li>
            <li>Executions (judgment liens) against the vendor or previous owners</li>
            <li>Utility company notices and municipal charges</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Counsel must also search for:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Municipal zoning compliance and building permits</li>
            <li>Conservation authority regulated area designations</li>
            <li>Environmental notices</li>
            <li>Property tax arrears</li>
            <li>Hydro, water, and sewer charges</li>
            <li>For condominiums: status certificate review</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            3. Requisitions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            After the title search, the buyer&apos;s lawyer sends requisitions — written objections or
            inquiries — to the vendor&apos;s lawyer. A requisition may raise:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Title defects:</strong> Registered encumbrances not contemplated by the APS
              (e.g., an unexpected easement or restrictive covenant).
            </li>
            <li>
              <strong>Executions:</strong> A judgment creditor&apos;s execution against the vendor that
              could attach to the property. The vendor must discharge the execution or satisfy the
              creditor before or on closing.
            </li>
            <li>
              <strong>Permit and bylaw compliance:</strong> Where additions, sheds, or renovations
              were completed without permits, the buyer may requisition that the vendor obtain
              building compliance or provide insurance coverage.
            </li>
            <li>
              <strong>Survey issues:</strong> Encroachments, fence line discrepancies, or survey
              inconsistencies discovered during the search.
            </li>
            <li>
              <strong>HST clearance:</strong> In commercial transactions, the vendor&apos;s HST compliance.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Responses to requisitions must be received before closing. Unresolved requisitions may
            be dealt with by: the vendor addressing the issue, title insurance covering the risk,
            or the buyer waiving the objection.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            4. Title Insurance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Title insurance has become standard practice in Ontario residential real estate. Policies
            are issued by FCT (First Canadian Title), Stewart Title, or Chicago Title, covering both
            the lender and owner in separate policies. Title insurance provides coverage for:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Risk Category</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Title defects</td>
                  <td className="px-4 py-3 text-gray-600">Unregistered easements, forged documents in chain of title, missing heir claims</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Survey/compliance risks</td>
                  <td className="px-4 py-3 text-gray-600">Unpermitted structures, zoning non-compliance, encroachments, setback violations</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Liens and charges</td>
                  <td className="px-4 py-3 text-gray-600">Undischarged mortgages, construction liens, property tax arrears not discovered at search</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Fraud and forgery</td>
                  <td className="px-4 py-3 text-gray-600">Identity fraud on title transfer, fraudulent power of attorney transactions</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Gap coverage</td>
                  <td className="px-4 py-3 text-gray-600">Risks arising between search and registration (construction liens filed during closing day)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Title insurance does not cover matters disclosed by the buyer&apos;s own search, known defects,
            or environmental contamination. It is a supplement to — not a replacement for — competent
            title searching.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Title insurance also covers many requisition issues without requiring the vendor to address
            them directly. This has accelerated closings significantly — issues that previously required
            weeks of negotiation can now be insured over in hours.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            5. Statement of Adjustments
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Statement of Adjustments calculates the net closing payment by adjusting the purchase
            price for:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Property taxes:</strong> Apportioned between vendor (pre-closing) and buyer
              (post-closing) based on the closing date. If taxes are not yet due, the vendor credits
              the buyer for taxes attributable to the ownership period.
            </li>
            <li>
              <strong>Prepaid utilities:</strong> Propane, oil, or prepaid water fees are adjusted
              as at closing.
            </li>
            <li>
              <strong>Rent (rental properties):</strong> Security deposits must be transferred to
              the buyer; rents prepaid by tenants are credited to the buyer.
            </li>
            <li>
              <strong>Deposits:</strong> The deposit paid under the APS is credited to the buyer
              against the purchase price.
            </li>
            <li>
              <strong>Mortgage assumption:</strong> If the buyer is assuming the vendor&apos;s mortgage,
              the outstanding principal is a credit to the vendor.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            6. Trust Accounting for Real Estate Closings
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Real estate closings involve large flows of client funds through trust — deposits, closing
            funds, mortgage advances, and proceeds. Ontario lawyers must comply with LSO By-Law 9 for
            all trust transactions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The buyer&apos;s lawyer typically receives:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Mortgage advance wire from the lender&apos;s solicitors</li>
            <li>Balance of purchase price from the buyer (certified cheque or wire)</li>
            <li>Title insurance premium collected from client</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The buyer&apos;s lawyer disburses:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Net proceeds to the vendor&apos;s solicitor (purchase price less adjustments)</li>
            <li>Land Transfer Tax (provincial and, in Toronto, municipal) to the government</li>
            <li>Title insurance premium to the insurer</li>
            <li>Teraview and registration fees</li>
            <li>Legal fees and disbursements</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            All trust transactions must be recorded same-day. Funds received by wire must be confirmed
            cleared before disbursing. The mandatory two-client trust ledger — one for the buyer and
            one for the lender (if separate) — must reconcile at all times.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The vendor&apos;s lawyer receives the net proceeds from the buyer&apos;s solicitor and disburses to:
            mortgage lender (discharge amount), judgment creditors (if any executions), and the vendor.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            7. Electronic Registration — Teraview
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ontario real estate transactions are registered electronically through Teraview, the Land
            Registry Office&apos;s electronic registration system. Documents are prepared, reviewed, and
            &quot;released&quot; by the vendor&apos;s and buyer&apos;s counsel simultaneously — the release triggers registration.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The undertaking regime governs the closing: counsel exchange undertakings before the release.
            The standard lawyer-to-lawyer undertakings include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Vendor&apos;s counsel undertakes to discharge all mortgages from closing proceeds</li>
            <li>Vendor&apos;s counsel undertakes to pay out all executions from proceeds</li>
            <li>Buyer&apos;s counsel undertakes to register the transfer and mortgage</li>
            <li>Both undertake to account to each other for adjustments</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Breach of an undertaking is a serious matter — a failure to discharge a mortgage from
            closing proceeds is actionable both as a professional obligation and through the Law
            Society complaints process.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            8. Common Closing Problems
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
            <li>
              <strong>Funds shortage:</strong> The buyer&apos;s lawyer receives less from the lender or
              buyer than required to close. Document the shortage, notify the client immediately,
              and do not release the documents until funds are confirmed.
            </li>
            <li>
              <strong>Last-minute lien:</strong> A construction lien is registered against the property
              after the title search but before closing. Title insurance covers this (gap coverage) —
              confirm with the insurer before releasing.
            </li>
            <li>
              <strong>Delayed mortgage advance:</strong> The lender&apos;s solicitor fails to wire funds
              in time for same-day closing. Communicate immediately with the lender&apos;s solicitor; if
              the closing will be missed, advise the vendor&apos;s counsel and consider a closing date
              extension.
            </li>
            <li>
              <strong>Title fraud:</strong> Identity fraud has become a significant risk in Ontario
              real estate, particularly in vacant land transactions. Know-your-client verification
              is essential — confirm identity documents in person or through a notarial confirmation
              for remote clients.
            </li>
            <li>
              <strong>New home HST:</strong> Whether the New Housing Rebate is assigned to the
              builder or claimed by the purchaser must be clarified before closing. CRA audits
              of new home HST claims are common.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ontario residential real estate closings are high-stakes, deadline-driven transactions
            with zero margin for error in trust accounting or title registration. The combination
            of title insurance, electronic registration through Teraview, and standardized undertaking
            practice has made closings faster — but the compliance obligations for trust accounting,
            requisition management, and client identification have not diminished. Real estate lawyers
            who build rigorous systems around these processes protect their clients and their practices.
          </p>

          <div className="mt-16 p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Manage Real Estate Files with Atticus
            </h3>
            <p className="text-gray-600 mb-6">
              Real estate closings require precise trust accounting, deadline tracking, and document management.
              Atticus helps Ontario real estate lawyers manage closing funds in LSO-compliant trust accounts,
              track closing dates, and stay organized across a high-volume practice — all in one platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
