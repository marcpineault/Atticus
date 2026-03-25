import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Real Estate Transactions — Land Transfer, Title, and Closing Procedures | Atticus",
  description:
    "A practical guide for Ontario real estate lawyers: Land Titles Act, Registry Act, Electronic Land Registration System, title insurance, LTT, requisition letters, and closing procedures.",
  openGraph: {
    title: "Ontario Real Estate Transactions — Land Transfer, Title, and Closing Procedures",
    description:
      "Ontario real estate law guide: Land Titles Act, ELRS, title insurance, land transfer tax, requisitions, and closing for residential and commercial transactions.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-real-estate-transactions",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-real-estate-transactions" },
};

export default function OntarioRealEstateTransactionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Real Estate Transactions — Land Transfer, Title, and Closing Procedures",
    description:
      "Practical guide to Ontario real estate law: Land Titles Act, Registry Act, ELRS, title insurance, LTT, requisitions, and closing procedures.",
    url: "https://getatticus.ca/blog/ontario-real-estate-transactions",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    datePublished: "2026-03-19",
    keywords: [
      "Ontario real estate law",
      "Land Titles Act Ontario",
      "ELRS electronic land registration",
      "land transfer tax Ontario",
      "title insurance Ontario",
      "requisition letter Ontario",
      "closing real estate transaction",
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
          <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Real Estate Law
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Ontario Real Estate Transactions — Land Transfer, Title, and Closing Procedures
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A practical guide to Ontario real estate law: Land Titles Act, Registry Act, the Electronic Land Registration System,
            title insurance, land transfer tax, requisition practice, and residential and commercial closing procedures.
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

          <h2>Land Titles Act and Registry Act — The Two Title Systems</h2>
          <p>
            Ontario operates two parallel systems of title registration governed by the{" "}
            <em>Land Titles Act</em> RSO 1990 c L.5 and the <em>Registry Act</em> RSO 1990 c R.20.
            Virtually all new transactions in southern Ontario now occur in Land Titles, but legacy Registry Act properties
            still exist in northern and rural areas.
          </p>
          <h3>Land Titles Act (Torrens System)</h3>
          <p>
            Under Land Titles, the Province guarantees title. The register is conclusive: a registered owner&apos;s
            title is indefeasible subject only to the overriding interests listed in s.44(1) of the Act (charges on
            the parcel register, fraud by the registered owner, shortfalls in boundaries, and certain possessory interests).
            The Land Titles Assurance Fund (LTAF) compensates parties who suffer loss through the operation of the
            system without fault on their part.
          </p>
          <h3>Registry Act</h3>
          <p>
            Registry Act title requires a root of title search going back at least 40 years under s.113
            (<em>Limitations Act</em> RSO 1970 c 246 at the time; preserved by <em>Real Property Limitations Act</em>
            RSO 1990 c L.15). A purchaser must examine all instruments registered in the relevant period and trace
            a marketable chain of title. There is no government guarantee — risk of undiscovered interests falls on
            the purchaser and is the key driver for title insurance on Registry parcels.
          </p>

          <h2>Electronic Land Registration System (ELRS) and Teraview</h2>
          <p>
            The <em>Electronic Registration Act (Ministry of Consumer and Commercial Relations)</em> SO 1991 c 44
            and O. Reg. 19/99 under the <em>Land Registration Reform Act</em> RSO 1990 c L.4 enabled the
            province-wide transition to electronic registration. Today, virtually all registrations in Ontario are
            completed through Teraview, the electronic land registration system operated by Teranet Inc.
            under licence from the Province.
          </p>
          <p>
            Lawyers must hold a Teraview access licence to register documents electronically. Documents prepared
            in Teraview (transfers, charges, discharges) are signed using the lawyer&apos;s digital key — equivalent
            to the lawyer&apos;s signature certifying the statements in the document. O. Reg. 19/99 s.9 imposes
            certification obligations: a lawyer registering a transfer certifies that the transferor has authorized
            the transfer and that the transferee has agreed to the covenants. Errors in electronic registration
            can attract professional liability under the certification regime.
          </p>

          <h2>Title Insurance</h2>
          <p>
            Title insurance in Ontario is issued by private insurers (FCT/First Canadian Title, Stewart Title,
            Chicago Title, TitlePlus by the Law Pro subsidiary). Policies cover the insured against loss from:
          </p>
          <ul>
            <li>Defects in title not disclosed on the register</li>
            <li>Survey irregularities (setback violations, encroachments)</li>
            <li>Fraud and identity theft</li>
            <li>Zoning non-compliance for existing structures</li>
            <li>Forced removal of existing structures</li>
            <li>Undischarged work orders and open permits</li>
          </ul>
          <p>
            Title insurance does not replace proper searches — lawyers still conduct searches for executions,
            planning Act compliance, realty tax arrears, and utility notices. Title insurance supplements
            the search process and in practice has replaced many traditional off-title searches on residential
            transactions. The{" "}
            <em>Law Society</em> has issued practice advisories noting that title insurance does not eliminate
            all searches and that counsel must advise clients on coverage scope.
          </p>
          <p>
            Lenders typically require their own lender&apos;s policy separate from the owner&apos;s policy.
            On residential transactions, the closing statement will typically show two premiums: one for the
            owner and one for the institutional mortgagee.
          </p>

          <h2>Land Transfer Tax (LTT)</h2>
          <p>
            Ontario&apos;s Land Transfer Tax is governed by the <em>Land Transfer Tax Act</em> RSO 1990 c L.6.
            Tax is payable by the transferee (purchaser) on the value of consideration at progressive rates:
          </p>
          <ul>
            <li>0.5% on first $55,000</li>
            <li>1.0% on $55,000–$250,000</li>
            <li>1.5% on $250,000–$400,000</li>
            <li>2.0% on $400,000–$2,000,000</li>
            <li>2.5% on amounts exceeding $2,000,000 (residential only, enacted 2017)</li>
          </ul>
          <p>
            The City of Toronto imposes a Municipal Land Transfer Tax (MLTT) under the <em>City of Toronto Act</em>
            SO 2006 c 11 Sch A at the same progressive rates — meaning Toronto purchasers pay double LTT.
            LTT is payable on registration. Failure to pay renders the transferee personally liable and the
            Ministry of Finance may register a lien on the property.
          </p>
          <h3>First-Time Home Buyer Rebate</h3>
          <p>
            First-time purchasers of new or resale homes qualify for a full LTT rebate up to $4,000
            under s.3.1 of the LTTA. The rebate applies only to Canadian citizens or permanent residents
            who have never owned a home anywhere in the world. Toronto first-time buyers may also claim
            a MLTT rebate to a maximum of $4,475.
          </p>
          <p>
            New home buyers may also qualify for HST rebates under the <em>Excise Tax Act</em> RSC 1985 c E-15:
            the federal new housing rebate (36% of the 5% GST on purchase prices under $350,000 with a
            phase-out to $450,000) and the Ontario new housing rebate (75% of the 8% provincial portion up to
            $24,000 on homes under $400,000). Lawyer&apos;s closing statements must account for HST applicability,
            particularly on assignment sales, new builds, and substantially renovated properties.
          </p>

          <h2>Title Searching and Off-Title Searches</h2>
          <p>
            A typical residential transaction title search includes:
          </p>
          <ul>
            <li>
              <strong>Parcel register search</strong> — all registered encumbrances, charges, and notices
            </li>
            <li>
              <strong>Executions search</strong> — judgment creditors holding writs of execution in the sheriff&apos;s
              office that could bind the vendor&apos;s interest; search vendor&apos;s name in all affected counties
            </li>
            <li>
              <strong>Planning Act compliance</strong> — lot was created in compliance with subdivision, consent,
              or exemption provisions; O. Reg. 544/06 sets out the lawyer certification requirements
            </li>
            <li>
              <strong>Realty tax certificates</strong> — outstanding tax arrears constitute a lien against
              the land under the <em>Municipal Act</em> SO 2001 c 25
            </li>
            <li>
              <strong>Utility/Hydro searches</strong> — often replaced by title insurance
            </li>
            <li>
              <strong>Open permits and work orders</strong> — municipal building department search; often insured
            </li>
            <li>
              <strong>Heritage designation</strong> — relevant to renovations
            </li>
            <li>
              <strong>Environmental</strong> — on commercial transactions, Phase I ESA typically required
            </li>
          </ul>

          <h2>The Agreement of Purchase and Sale (OREA Forms)</h2>
          <p>
            Most Ontario residential transactions use the Ontario Real Estate Association (OREA) standard
            Agreement of Purchase and Sale (Form 100 for residential freehold, Form 101 for condominiums).
            Key provisions counsel must review:
          </p>
          <ul>
            <li>
              <strong>Conditions</strong> — financing condition (typically 5 business days; <em>Barnett v Harrison</em>
              1976 ONCA good faith obligation to attempt financing), home inspection, lawyer approval
            </li>
            <li>
              <strong>Irrevocability</strong> — an offer is irrevocable for the stated period; after acceptance
              it becomes binding
            </li>
            <li>
              <strong>Included/excluded chattels and fixtures</strong> — fixtures pass with the land (<em>County of
              Simcoe v Township of Tiny</em> test: manner of annexation, purpose of annexation) unless excluded;
              chattels do not pass unless included
            </li>
            <li>
              <strong>Title provisions</strong> — vendor warrants good and marketable title save for
              registered restrictions and reservations; requisition deadline (typically 30 days before closing)
            </li>
            <li>
              <strong>Closing adjustments</strong> — realty taxes, utilities, condo fees prorated to
              closing date
            </li>
            <li>
              <strong>Completion date</strong> — &quot;time is of the essence&quot; clause; failure to close on date
              without valid requisition or force majeure can constitute repudiation
            </li>
          </ul>

          <h2>Requisition Practice</h2>
          <p>
            A requisition letter is the purchaser&apos;s counsel&apos;s written demand that the vendor cure
            title defects discovered during the search process. Requisitions must be delivered before the
            requisition date specified in the APS — typically 30 days before the closing date. Failure to
            requisition in time waives the defect unless it is a matter of title as opposed to a question
            of execution or off-title search matter.
          </p>
          <p>
            The distinction between <em>title</em> and <em>non-title</em> matters affects the right to
            requisition after the deadline. A encroachment onto a neighbouring lot or a missing discharge
            of mortgage are title matters — requisitionable after the date under the standard OREA form only
            with the vendor&apos;s consent or through the force of law. Work orders, open permits, and
            execution issues are typically treated as off-title matters subject to the same requisition period.
          </p>

          <h2>Mortgage (Charge) Registration</h2>
          <p>
            Under the <em>Land Registration Reform Act</em> RSO 1990 c L.4, mortgages are registered as
            &quot;Charges&quot; on the parcel register. The <em>Mortgages Act</em> RSO 1990 c M.40 governs
            the mortgagee&apos;s remedies: possession s.20, power of sale s.32-43, and foreclosure.
            Ontario is predominantly a power of sale jurisdiction — foreclosure is rare because it requires
            court action and extinguishes the debtor&apos;s equity entirely.
          </p>
          <p>
            On residential mortgages, the <em>Mortgage Brokerages, Lenders and Administrators Act</em>
            SO 2006 c 29 governs institutional and private lenders. Borrowers hold the right of redemption
            at any time before the power of sale is complete. Standard charge terms registered by institutional
            lenders are filed with the LTSA and incorporated by reference — borrowers must receive a copy.
          </p>

          <h2>Closing the Transaction</h2>
          <p>
            Real estate closings in Ontario typically proceed by way of &quot;documents against undertakings.&quot;
            The purchase funds are transferred by wire, and the vendor&apos;s counsel delivers signed documents
            (transfer, discharge of existing charge, keys) against undertakings to register the transfer and
            new charge immediately upon receipt of funds and to register the discharge of the existing charge
            promptly after receiving the discharge statement from the institutional lender.
          </p>
          <p>
            The standard undertakings are addressed in the{" "}
            <em>Law Society&apos;s Real Estate Practice Guidelines</em>. Key undertakings:
          </p>
          <ul>
            <li>
              Vendor&apos;s counsel undertakes to discharge all existing charges and encumbrances within
              a reasonable time (typically 30 days) after closing
            </li>
            <li>
              Purchaser&apos;s counsel undertakes to register the transfer and charge on closing day
            </li>
            <li>
              If new build or assignment: HST undertakings and builder&apos;s holdback
            </li>
          </ul>
          <p>
            Closing adjustments are set out in a Statement of Adjustments prepared by vendor&apos;s counsel.
            Adjustments include realty tax (current year tax divided by days owned), condo maintenance fees
            (if applicable), fuel oil (cost of oil in tank), occupancy adjustments, and HST on new homes.
            The balance due on closing flows from the APS purchase price adjusted by:
            deposit paid, mortgage proceeds direct from the lender, and Statement of Adjustments credits/debits.
          </p>

          <h2>Condominium Transactions</h2>
          <p>
            Condominium purchases require review of the Status Certificate under s.76 of the{" "}
            <em>Condominium Act</em> SO 1998 c 19. The Status Certificate discloses:
          </p>
          <ul>
            <li>Common expenses (current monthly fee)</li>
            <li>Reserve fund balance and any reserve fund study findings</li>
            <li>Outstanding special assessments levied or contemplated</li>
            <li>Litigation involving the corporation</li>
            <li>Leases of the common elements</li>
            <li>Any default by the unit owner in payment of common expenses</li>
          </ul>
          <p>
            New condominium purchases from builders are subject to the 10-day statutory cooling-off period
            under s.73 of the Condominium Act — the purchaser may rescind the APS within 10 days of receiving
            all required disclosure documents including the disclosure statement, budget, and draft declaration.
          </p>

          <h2>Commercial Real Estate Distinctions</h2>
          <p>
            Commercial transactions involve additional considerations: HST on the purchase price (real property
            is exempt as an exempt supply under the ETA unless the vendor is an HST registrant and the property
            is commercial real property — in which case HST applies on the full purchase price unless the
            &quot;going concern&quot; election is available under s.167 ETA); Environmental site assessments
            (Phase I ESA and often Phase II); NRST (Non-Resident Speculation Tax) considerations; and
            due diligence periods with access for inspections. Commercial leases are governed by the{" "}
            <em>Commercial Tenancies Act</em> RSO 1990 c L.7 — distress, forfeiture, and assignment provisions
            differ significantly from residential tenancies under the RTA.
          </p>

          <h2>Practical Takeaway for Ontario Real Estate Counsel</h2>
          <p>
            Ontario real estate practice is highly deadline-driven: requisition dates, closing dates,
            condition dates, and HST rebate application deadlines are all hard cutoffs. Missing any of
            these can expose the client to damages and expose counsel to negligence liability.
            Robust matter management — tracking every deadline from the APS through to closing and
            post-closing undertaking performance — is not optional; it is the foundation of competent
            real estate practice.
          </p>
        </div>
      </article>
    </div>
  );
}
