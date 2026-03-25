import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Real Estate Purchase Agreement: OREA APS, Conditions & Closing | Atticus",
  description:
    "Complete guide to Ontario real estate purchase agreements. OREA Agreement of Purchase and Sale, key conditions (financing, inspection, status certificate), deposits, title insurance, and closing mechanics. Updated 2025.",
  keywords: [
    "agreement of purchase and sale Ontario",
    "OREA agreement of purchase sale",
    "real estate conditions Ontario",
    "financing condition Ontario",
    "title insurance Ontario",
    "real estate closing Ontario lawyer",
    "status certificate Ontario condo",
    "deposit Ontario real estate",
  ],
  openGraph: {
    title: "Ontario Real Estate Purchase Agreement: OREA APS, Conditions & Closing",
    description:
      "Key clauses, conditions, deposits, title insurance, and closing mechanics in Ontario residential real estate transactions.",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Real Estate Purchase Agreement: OREA APS, Conditions and Closing",
      "description": "Complete guide to Ontario real estate purchase agreements — OREA APS structure, financing and inspection conditions, deposit rules, title insurance, and closing mechanics for Ontario real estate lawyers.",
      "datePublished": "2025-06-12",
      "dateModified": "2025-06-12",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-real-estate-purchase-agreement" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What happens to a deposit if a real estate deal falls through in Ontario?",
          "acceptedAnswer": { "@type": "Answer", "text": "If a condition (e.g., financing or inspection) is not waived or fulfilled by the deadline, the deal is void and the deposit is returned to the buyer. If the buyer breaches a firm agreement (no conditions), the seller can sue for damages and may retain the deposit as partial compensation. Deposit disputes often end up before the Real Estate Council of Ontario or in Small Claims Court." }
        },
        {
          "@type": "Question",
          "name": "What is a status certificate and why does it matter in Ontario condo purchases?",
          "acceptedAnswer": { "@type": "Answer", "text": "A status certificate (s. 76 Condominium Act) is a document package provided by the condo corporation disclosing the unit owner's common expense arrears, the corporation's financial statements, reserve fund study, budget, management agreement, current rules, and any pending special assessments or litigation. Buyers typically have 10 days to review the status certificate, and their lawyer's review is critical to identifying financial or governance issues." }
        },
        {
          "@type": "Question",
          "name": "Is title insurance mandatory in Ontario real estate transactions?",
          "acceptedAnswer": { "@type": "Answer", "text": "Title insurance is not legally mandatory in Ontario but is standard practice and required by virtually all mortgage lenders. A lender policy protects the lender's mortgage; an owner policy protects the buyer's ownership interest. Title insurance covers risks such as survey discrepancies, zoning non-compliance, work orders, and fraud — and often replaces the need for a new survey." }
        },
        {
          "@type": "Question",
          "name": "What does a real estate lawyer do on closing day in Ontario?",
          "acceptedAnswer": { "@type": "Answer", "text": "On closing day, the buyer's lawyer receives mortgage funds from the lender, collects the balance of purchase price from the client, pays the seller's lawyer by wire transfer, registers the transfer and charge on title electronically (Teraview), and reports to the client. The seller's lawyer receives funds, pays out the existing mortgage and other encumbrances, and releases the balance to the seller. Most closings are paperless and handled through lawyer-to-lawyer undertakings." }
        }
      ]
    }
  ]
}`;

type ApsClause = {
  clause: string;
  what: string;
  lawyerNote: string;
};

const apsClauses: ApsClause[] = [
  {
    clause: "Purchase Price & Deposit",
    what: "Sets the agreed price. Deposit (typically 5% of purchase price) is paid on acceptance and held in trust by seller's brokerage.",
    lawyerNote: "Confirm deposit amount, trustee, and whether any portion is due on removal of conditions vs on acceptance.",
  },
  {
    clause: "Completion Date",
    what: "The date title transfers and funds are exchanged — the \"closing date.\"",
    lawyerNote: "Build in realistic time for title search, mortgage registration, and requisition period (usually at least 5 business days before closing).",
  },
  {
    clause: "Irrevocability",
    what: "Time by which the offer must be accepted, refused, or countered.",
    lawyerNote: "Sellers receiving multiple offers may let all irrevocability periods expire simultaneously and counter selectively.",
  },
  {
    clause: "Title",
    what: "Seller warrants the property is free of encumbrances except those listed, and buyer must accept title subject to existing easements, restrictive covenants, and utility rights-of-way.",
    lawyerNote: "Title search must be done before closing. Identify all registered encumbrances early — some are non-insurable.",
  },
  {
    clause: "Financing Condition",
    what: "Buyer has X days to obtain satisfactory mortgage financing; if unsuccessful, deal is void and deposit returned.",
    lawyerNote: "Buyers should not waive a financing condition unless fully pre-approved. Condition should specify amount, rate, and term to avoid disputes over what is 'satisfactory.'",
  },
  {
    clause: "Inspection Condition",
    what: "Buyer may have the property inspected; if not satisfied, deal is void.",
    lawyerNote: "Sellers in a hot market often resist or limit inspection conditions. Buyers who waive assume all physical risk.",
  },
  {
    clause: "Status Certificate Condition (Condo)",
    what: "10-day period for buyer's lawyer to review the status certificate and related condo documents.",
    lawyerNote: "Review reserve fund adequacy, pending special assessments, litigation exposure, and any rules affecting the buyer's intended use.",
  },
  {
    clause: "Chattels & Fixtures",
    what: "Specifies included chattels (personal property: appliances, window coverings) and excluded fixtures (attached items seller is taking).",
    lawyerNote: "This clause causes many post-closing disputes. Be specific. 'Light fixtures' alone is insufficient — list every item.",
  },
  {
    clause: "HST",
    what: "Declares whether the purchase price includes or excludes HST (most residential resales are HST-exempt; new builds and some assignments are taxable).",
    lawyerNote: "New construction agreements often state 'plus applicable HST.' Buyer must confirm new home rebate eligibility and structure.",
  },
  {
    clause: "Adjustments",
    what: "Property taxes, utilities, and fuel costs are adjusted as of the closing date so each party pays for their period of ownership.",
    lawyerNote: "Prepare an adjustment statement early. Interim tax bills and estimated final bills must be reconciled. Condo fees are also adjusted.",
  },
  {
    clause: "Tender",
    what: "Party that wants to close must be ready, willing, and able to close (tender) at the agreed time and place.",
    lawyerNote: "Failure to tender may constitute repudiation. In Ontario, electronic closing means most tender is by lawyer undertaking and Teraview registration.",
  },
  {
    clause: "UFFI / Environmental",
    what: "Seller confirms no urea formaldehyde foam insulation and no designated substances (if applicable).",
    lawyerNote: "Environmental due diligence may also require Phase I ESA for commercial properties or former industrial sites.",
  },
];

type ConditionType = {
  condition: string;
  typical: string;
  risk: string;
};

const commonConditions: ConditionType[] = [
  { condition: "Financing", typical: "5 business days", risk: "Buyer assumes mortgage risk if waived without firm commitment" },
  { condition: "Home Inspection", typical: "5-7 business days", risk: "Hidden defects become buyer's problem if waived" },
  { condition: "Status Certificate (Condo)", typical: "10 calendar days (statutory)", risk: "Special assessments, litigation, or reserve fund shortfalls may be fatal" },
  { condition: "Sale of Buyer's Property", typical: "Negotiated — often 30-60 days", risk: "Seller may accept a better offer if escape clause triggered" },
  { condition: "Insurance", typical: "3-5 business days", risk: "Some properties are uninsurable (knob-and-tube, oil tanks, flat roofs)" },
  { condition: "Solicitor Review", typical: "2-5 business days", risk: "Rarely used in residential; more common in commercial or complex deals" },
];

const closingSteps = [
  { step: "Title Search & Requisitions", desc: "Buyer's lawyer searches title in Teraview, reviews all registered instruments, identifies defects, and delivers requisitions to seller's lawyer by the requisition date." },
  { step: "Discharge of Existing Mortgage", desc: "Seller's lawyer obtains payout statement from seller's lender. Discharge registered on title at closing as part of the undertaking process." },
  { step: "Title Insurance", desc: "Buyer's lawyer orders title insurance for both lender and owner policies. Provides coverage for past defects without needing a new survey in most cases." },
  { step: "Mortgage Registration", desc: "Lender instructs buyer's lawyer. Buyer's lawyer receives mortgage funds and registers the charge on title in Teraview at closing." },
  { step: "Transfer Registration", desc: "Transfer of title (formerly deed) registered electronically in Teraview simultaneously with or immediately after mortgage charge." },
  { step: "Funds Flow", desc: "Buyer's lawyer receives all funds (mortgage + client balance), pays seller's lawyer by wire. Seller's lawyer pays out mortgage, commissions, and balance to seller." },
  { step: "Statement of Adjustments", desc: "Final accounting prepared by both lawyers — purchase price adjusted for taxes, utilities, condo fees, and other items to arrive at exact closing funds required." },
  { step: "Key Release", desc: "Once funds confirmed received by seller's lawyer, keys released (often through the brokers or by agreement)." },
];

const faqs = [
  {
    q: "What happens to a deposit if a real estate deal falls through in Ontario?",
    a: "If a condition (e.g., financing or inspection) is not waived or fulfilled by the deadline, the deal is void and the deposit is returned to the buyer. If the buyer breaches a firm agreement (no conditions), the seller can sue for damages and may retain the deposit as partial compensation. Deposit disputes often end up before the Real Estate Council of Ontario or in Small Claims Court.",
  },
  {
    q: "What is a status certificate and why does it matter in Ontario condo purchases?",
    a: "A status certificate (s. 76 Condominium Act) is a document package provided by the condo corporation disclosing the unit owner's common expense arrears, the corporation's financial statements, reserve fund study, budget, management agreement, current rules, and any pending special assessments or litigation. Buyers typically have 10 days to review the status certificate, and their lawyer's review is critical to identifying financial or governance issues.",
  },
  {
    q: "Is title insurance mandatory in Ontario real estate transactions?",
    a: "Title insurance is not legally mandatory in Ontario but is standard practice and required by virtually all mortgage lenders. A lender policy protects the lender's mortgage; an owner policy protects the buyer's ownership interest. Title insurance covers risks such as survey discrepancies, zoning non-compliance, work orders, and fraud — and often replaces the need for a new survey.",
  },
  {
    q: "What does a real estate lawyer do on closing day in Ontario?",
    a: "On closing day, the buyer's lawyer receives mortgage funds from the lender, collects the balance of purchase price from the client, pays the seller's lawyer by wire transfer, registers the transfer and charge on title electronically (Teraview), and reports to the client. The seller's lawyer receives funds, pays out the existing mortgage and other encumbrances, and releases the balance to the seller. Most closings are paperless and handled through lawyer-to-lawyer undertakings.",
  },
];

export default function OntarioRealEstatePurchaseAgreementPage() {
  return (
    <>
      <Script id="ontario-aps-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Ontario Real Estate Purchase Agreement</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">Real Estate Law</span>
              <span className="text-gray-400 text-sm">10 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ontario Real Estate Purchase Agreement: OREA APS, Conditions &amp; Closing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Key clauses, conditions, deposit rules, title insurance, and closing mechanics in Ontario residential real estate transactions.
            </p>
            <div className="mt-4 text-sm text-gray-400">Updated June 2025</div>
          </header>

          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed text-lg">
              The Agreement of Purchase and Sale (APS) is the binding contract governing Ontario real estate transactions. Most residential transactions use the OREA standard form, but the form is only the starting point — conditions, schedules, and amendments drive the real legal risk. This guide covers what Ontario real estate lawyers review and negotiate in every file.
            </p>
          </section>

          {/* Key APS Clauses */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Clauses in the OREA Agreement of Purchase and Sale</h2>
            <div className="space-y-5">
              {apsClauses.map((clause, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{clause.clause}</h3>
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">{clause.what}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800 text-sm"><strong>Lawyer&apos;s note:</strong> {clause.lawyerNote}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conditions Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Conditions: Typical Timelines &amp; Risks</h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Conditions make an offer conditional — the deal only becomes firm when all conditions are waived or satisfied. Buyers and sellers negotiate both whether conditions are included and the time period allowed.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Condition</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Typical Period</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Risk if Waived Without Satisfaction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {commonConditions.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{c.condition}</td>
                      <td className="px-4 py-3 text-gray-700">{c.typical}</td>
                      <td className="px-4 py-3 text-red-700 text-xs">{c.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Closing Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ontario Closing Process: Step by Step</h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Ontario residential real estate closes electronically through Teraview (the Land Registry Office system). Lawyers exchange undertakings and register documents the morning of closing.
            </p>
            <div className="space-y-4">
              {closingSteps.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{item.step}</div>
                    <div className="text-gray-700 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h4 className="font-bold text-amber-900 mb-2">Land Transfer Tax</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                Ontario land transfer tax and, for Toronto properties, the Toronto municipal land transfer tax are both payable on closing. First-time buyers may qualify for an Ontario rebate (up to $4,000) and Toronto rebate (up to $4,475). Calculate both taxes for clients before closing so there are no surprises on the statement of adjustments.
              </p>
            </div>
          </section>

          {/* FINTRAC */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Lawyer Obligations: FINTRAC and LSO Requirements</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Client Identification", desc: "Verify client identity using government-issued photo ID at the outset of the retainer — required under FINTRAC rules for real estate lawyers receiving or paying funds" },
                { label: "Third-Party Determination", desc: "Determine whether client is acting for or on behalf of a third party; if yes, document the third-party details" },
                { label: "Source of Funds", desc: "Obtain and record information about the source of large cash deposits or unexplained funds involved in the transaction" },
                { label: "Title Insurance Reporting", desc: "Report any title insurance claims to LSO within the required timeframe; maintain records per Law Society requirements" },
                { label: "Trust Accounting", desc: "All client funds held in mixed trust or specific trust; reconcile monthly; report per LSO Form 9 requirements" },
                { label: "Reporting Obligations", desc: "Real estate lawyers are subject to FINTRAC suspicious transaction reporting obligations for transactions involving criminal proceeds" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 text-white text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Manage Real Estate Files with Atticus</h2>
            <p className="text-orange-100 mb-6">
              Track closing dates, title search deadlines, and trust accounting — built for Ontario real estate lawyers.
            </p>
            <Link
              href="/intake"
              className="inline-block bg-white text-orange-700 font-semibold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-real-estate-closing-checklist", label: "Ontario Real Estate Closing Checklist" },
                { href: "/blog/ontario-land-transfer-tax", label: "Ontario Land Transfer Tax Guide" },
                { href: "/blog/ontario-mortgage-default", label: "Ontario Mortgage Default & Power of Sale" },
                { href: "/blog/ontario-adverse-possession", label: "Ontario Adverse Possession" },
                { href: "/blog/trust-accounting-guide-ontario", label: "Ontario Trust Accounting Guide" },
                { href: "/ontario-real-estate-lawyer", label: "Ontario Real Estate Lawyer Software" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
