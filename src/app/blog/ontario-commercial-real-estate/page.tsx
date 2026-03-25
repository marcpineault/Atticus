import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Commercial Real Estate Transactions: Due Diligence, Title, and Closing | Atticus Blog",
  description:
    "A practical guide to Ontario commercial real estate transactions — agreement of purchase and sale, due diligence, title search, title insurance, LTT, HST, and closing procedures.",
  openGraph: {
    title: "Ontario Commercial Real Estate Transactions: Due Diligence, Title, and Closing",
    description:
      "APS, due diligence, title search, title insurance, LTT, HST, and closing for Ontario commercial real estate lawyers.",
    type: "article",
    publishedTime: "2026-03-19",
  },
};

export default function OntarioCommercialRealEstate() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Commercial Real Estate Transactions: Due Diligence, Title, and Closing",
    description:
      "APS, due diligence, title search, title insurance, LTT, HST, and closing procedures for Ontario commercial real estate.",
    datePublished: "2026-03-19",
    author: {
      "@type": "Organization",
      name: "Atticus",
    },
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              Real Estate Law
            </span>
            <time dateTime="2026-03-19">March 19, 2026</time>
            <span>13 min read</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Ontario Commercial Real Estate Transactions: Due Diligence, Title, and Closing
          </h1>
          <p className="text-xl text-gray-600">
            Commercial real estate transactions in Ontario are more complex than residential
            deals — larger stakes, sophisticated parties, longer due diligence periods, and
            significant HST implications. This guide covers the key stages and legal issues
            in a typical Ontario commercial transaction.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>The Agreement of Purchase and Sale</h2>
          <p>
            Commercial APSs are typically negotiated documents rather than standard OREA forms
            (which are used for residential transactions). Commercial APSs are drafted by the
            parties&apos; lawyers and address:
          </p>
          <ul>
            <li>
              <strong>Property description</strong>: Legal description from title, PIN, and
              municipal address. For complex properties, the APS may describe the property
              by reference to a plan of subdivision, a condominium description, or a survey.
            </li>
            <li>
              <strong>Purchase price and deposit</strong>: Commercial deposits are typically
              larger (often 5-10% of purchase price) and more carefully structured for
              forfeiture and return conditions.
            </li>
            <li>
              <strong>Due diligence period</strong>: Commercial deals almost always include an
              express due diligence period (often 30-90 days) during which the purchaser can
              investigate the property and terminate without penalty if not satisfied. The
              due diligence conditions may be conditions precedent (APS voidable if not waived
              by date) or conditions subsequent.
            </li>
            <li>
              <strong>Representations and warranties</strong>: Sellers typically make more
              limited representations in commercial deals (caveat emptor principles apply more
              strongly) but still represent environmental status, no orders/notices, zoning
              compliance, GST/HST status, and outstanding work orders.
            </li>
            <li>
              <strong>Adjustments</strong>: Realty taxes (accrued to closing), rents (if
              investment property), operating costs, utility deposits.
            </li>
            <li>
              <strong>HST</strong>: Commercial real property sales are generally taxable for
              HST purposes (unlike residential sales). The APS must specify whether the price
              is plus HST or HST-included, and which party bears HST. The Buyer can often
              self-assess under ETA s.228(4) to avoid the Seller collecting HST at closing.
            </li>
          </ul>

          <h2>Due Diligence</h2>
          <p>
            Commercial due diligence covers physical, legal, financial, and regulatory aspects
            of the property:
          </p>

          <h3>Title Due Diligence</h3>
          <ul>
            <li>
              <strong>Title search</strong>: Search the title in Teraview (POLARIS system)
              for the full parcel register, instruments registered against title (mortgages,
              liens, easements, restrictions, caveats, notices), and any pending registrations.
              Examine the chain of title back at least 40 years (s.113 Registry Act; Land
              Titles system provides Absolute Title guarantee).
            </li>
            <li>
              <strong>Construction liens</strong>: Search for construction liens (claim for
              lien registrations) within 90 days of closing — liens may be preserved within
              60 days of the last supply but registration may lag. Sellers should provide
              statutory declarations from contractors regarding outstanding work.
            </li>
            <li>
              <strong>Survey</strong>: Obtain an updated survey (ALTA/NSPS or Ontario Land
              Survey) to confirm lot boundaries, building setbacks, encroachments, and
              easements. Commercial lenders typically require a current survey.
            </li>
            <li>
              <strong>Zoning</strong>: Confirm current zoning by-law classification, permitted
              uses, parking requirements, setback requirements, and development restrictions.
              Obtain a zoning compliance certificate from the municipality.
            </li>
          </ul>

          <h3>Environmental Due Diligence</h3>
          <p>
            Environmental investigation is critical for commercial properties:
          </p>
          <ul>
            <li>
              <strong>Phase I Environmental Site Assessment (ESA)</strong>: A desktop
              review of historical uses, aerial photographs, regulatory records, and site
              reconnaissance to identify Actual or Potential Environmental Concerns (APECs).
              Phase I is standard for virtually all commercial transactions.
            </li>
            <li>
              <strong>Phase II ESA</strong>: Intrusive sampling (soil, groundwater, soil
              vapour) to confirm or deny the presence of contamination. Required where
              Phase I identifies APECs. Results compared to Ministry of Environment, Conservation
              and Parks (MECP) Table 2 Site Condition Standards.
            </li>
            <li>
              <strong>Record of Site Condition (RSC)</strong>: Required before a sensitivity-
              increasing change of use (e.g., industrial to residential). The RSC is filed on
              the Environmental Site Registry. A Certificate of Property Use (CPU) may bind
              future owners.
            </li>
            <li>
              <strong>O.Reg. 153/04</strong>: Governs Phase I/II standards and RSC requirements
              for Ontario.
            </li>
          </ul>

          <h3>Tenancy Due Diligence</h3>
          <p>
            For investment properties with tenants:
          </p>
          <ul>
            <li>Review all leases, amendments, assignments, and subleases</li>
            <li>Estoppel certificates from all tenants confirming lease terms, rent paid to date, no landlord defaults, no claims or offsets</li>
            <li>Subordination, non-disturbance, and attornment (SNDA) agreements with tenants to protect the lender and ensure tenants attorn to a new owner</li>
            <li>Verify rent roll — actual vs contracted rents, any rent abatements, and lease expiry dates</li>
            <li>CAM (common area maintenance) charge reconciliations for multi-tenant buildings</li>
          </ul>

          <h2>Title Insurance in Commercial Transactions</h2>
          <p>
            Title insurance from providers like FCT (First Canadian Title) or Stewart Title
            is used in most commercial transactions to protect against:
          </p>
          <ul>
            <li>Title defects not disclosed by a search (gaps in the chain of title, forged instruments)</li>
            <li>Enforceability of registered encumbrances</li>
            <li>Zoning non-compliance (existing buildings may be grandfathered)</li>
            <li>Survey defects and encroachments</li>
            <li>Work orders, building permits, and by-law violations unknown at closing</li>
            <li>Fraud (identity theft in title dealings has become more common)</li>
          </ul>
          <p>
            Commercial title insurance does not eliminate the need for due diligence but provides
            a backstop for undiscoverable risks. Premiums are one-time and based on the insured
            value. Commercial lenders typically require lender-side title insurance; purchasers
            should also obtain owner&apos;s title insurance.
          </p>

          <h2>Land Transfer Tax</h2>
          <p>
            Ontario Land Transfer Tax (LTT) applies to all transfers of land, including commercial
            property, at the following rates (Land Transfer Tax Act, RSO 1990, c L.6):
          </p>
          <ul>
            <li>0.5% on the first $55,000</li>
            <li>1.0% on $55,001 to $250,000</li>
            <li>1.5% on $250,001 to $400,000</li>
            <li>2.0% on amounts over $400,000</li>
          </ul>
          <p>
            <strong>Toronto Municipal Land Transfer Tax (MLTT)</strong>: The City of Toronto
            imposes a separate municipal LTT on Toronto properties at approximately the same
            rates, effectively doubling LTT in Toronto. Commercial properties in Toronto
            therefore pay approximately 4% LTT on amounts over $400,000.
          </p>
          <p>
            <strong>Calculating LTT on commercial transactions</strong>: The taxable amount is
            the value of consideration — not just the purchase price. It includes assumed
            mortgages, partnership interests, and other consideration. Where a sale occurs as
            part of a business acquisition (purchasing the shares rather than the assets), no
            LTT is payable.
          </p>
          <p>
            <strong>Exemptions</strong>: Transfers between spouses, certain corporate reorganizations
            (s.3(6) LTT Act — same beneficial ownership), and registered charities may qualify
            for LTT exemptions.
          </p>

          <h2>HST on Commercial Real Property</h2>
          <p>
            The <em>Excise Tax Act</em> (ETA) imposes HST on commercial real property
            transactions (13% in Ontario — 5% GST + 8% Ontario portion):
          </p>
          <ul>
            <li>
              <strong>General rule</strong>: Sale of commercial real property by a GST/HST
              registrant is taxable unless an exemption applies.
            </li>
            <li>
              <strong>Taxable sale of commercial property</strong>: If both parties are
              GST/HST registrants, the parties can jointly elect under ETA s.167 to treat the
              sale as a supply of assets in a going concern, exempt from HST — common in
              income property transactions where all assets (building + leases + goodwill) are
              being transferred.
            </li>
            <li>
              <strong>Self-assessment by purchaser (s.228(4))</strong>: A GST/HST registered
              purchaser can self-assess and remit the HST directly rather than having the
              seller collect it at closing. This preserves closing funds.
            </li>
            <li>
              <strong>New residential property and HST</strong>: The sale of new residential
              condominiums or housing by a builder is subject to HST (with a partial new
              housing rebate for purchasers). This is a distinct regime from commercial property.
            </li>
            <li>
              <strong>Residual input tax credits (ITCs)</strong>: Purchasers using the property
              commercially can claim ITCs for HST paid, provided they are GST/HST registrants
              and the property is used in commercial activities.
            </li>
          </ul>

          <h2>Closing the Commercial Transaction</h2>
          <p>
            Commercial closings in Ontario typically proceed on Teraview (electronic registration
            and funds transfer):
          </p>
          <ul>
            <li>
              <strong>Requisitions</strong>: The purchaser&apos;s lawyer delivers requisitions on
              title (requests to clear encumbrances, provide discharges, address defects) within
              the requisition deadline in the APS. Failure to requisition in time may result in
              waiver of certain title objections.
            </li>
            <li>
              <strong>Closing documents</strong>: Transfer of Land (Form 1), Charge/Mortgage
              (if lender financing), Direction re Title, Statement of Adjustments, HST
              declaration or election, statutory declarations, vendor take-back documents (if
              applicable), lease assignments, SNDA agreements.
            </li>
            <li>
              <strong>Title insurance and Teraview</strong>: Most commercial closings use
              Teraview for electronic registration. Title insurance is typically committed in
              advance, with the policy issued on registration.
            </li>
            <li>
              <strong>Real estate law obligation</strong>: Under LSO By-Law 9, funds received
              in trust for a commercial real estate closing must be held in trust until
              conditions are met — the transfer is registered, the proceeds are released to
              the vendor, and any discharges are registered.
            </li>
          </ul>

          <h2>Summary</h2>
          <p>
            Ontario commercial real estate transactions require careful APS drafting, thorough
            due diligence (title, environmental, tenancy, zoning), and attention to the HST
            and LTT implications that can significantly affect transaction economics. The
            commercial lawyer&apos;s role is to identify and manage risks throughout the transaction
            cycle — from APS negotiation through due diligence and closing.
          </p>
          <p>
            Atticus helps Ontario real estate lawyers manage the complexity of commercial
            transactions — tracking due diligence deadlines, closing dates, and multiple file
            milestones — with LSO By-Law 9 compliant trust accounting for closing funds.
          </p>
        </div>

        <div className="mt-12 rounded-xl bg-amber-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Manage Ontario Real Estate Files with Atticus
          </h3>
          <p className="mb-6 text-gray-600">
            Deadline tracking, trust accounting for closing funds, matter management, and AI
            document analysis — purpose-built for Ontario real estate lawyers.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white hover:bg-amber-700"
          >
            Start Free Trial
          </a>
        </div>
      </article>
    </>
  );
}
