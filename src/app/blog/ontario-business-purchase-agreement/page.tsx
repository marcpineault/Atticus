import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Business Purchase Agreement: Lawyer's Guide to Asset vs Share Deals | Atticus",
  description:
    "Complete guide to Ontario business purchase agreements. Asset vs share deal structure, due diligence checklist, key clauses, representations & warranties, and closing mechanics. Updated 2025.",
  keywords: [
    "business purchase agreement Ontario",
    "asset purchase agreement Ontario",
    "share purchase agreement Ontario",
    "buying a business Ontario lawyer",
    "business acquisition due diligence Ontario",
    "representations warranties Ontario",
    "business sale closing Ontario",
  ],
  openGraph: {
    title: "Ontario Business Purchase Agreement: Asset vs Share Deals",
    description:
      "Key structural decisions, due diligence, and closing mechanics for Ontario business acquisitions.",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Business Purchase Agreement: Lawyer's Guide to Asset vs Share Deals",
      "description": "Complete guide covering asset vs share deal structures, due diligence, representations & warranties, and closing mechanics for Ontario business acquisitions.",
      "datePublished": "2025-06-10",
      "dateModified": "2025-06-10",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-business-purchase-agreement" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between an asset purchase and a share purchase in Ontario?",
          "acceptedAnswer": { "@type": "Answer", "text": "In an asset purchase, the buyer acquires specific assets and liabilities of the business. In a share purchase, the buyer acquires the corporation itself, inheriting all historical liabilities. Asset deals offer buyers a clean start and allow cherry-picking assets; share deals are simpler structurally and may have tax advantages for sellers." }
        },
        {
          "@type": "Question",
          "name": "What due diligence is required when buying a business in Ontario?",
          "acceptedAnswer": { "@type": "Answer", "text": "Due diligence covers: corporate records (minute books, shareholder agreements), financial statements (3 years), material contracts and their assignability, employment and union agreements, intellectual property, real property (owned or leased), environmental compliance, tax filings and assessments, pending litigation, and regulatory licences." }
        },
        {
          "@type": "Question",
          "name": "How long does an Ontario business acquisition typically take to close?",
          "acceptedAnswer": { "@type": "Answer", "text": "Simple asset deals may close in 30-60 days. Complex share deals with regulatory approvals (Competition Act, CRTC, etc.) often take 3-6 months. The timeline is driven by due diligence scope, financing requirements, landlord consents, and third-party regulatory clearances." }
        },
        {
          "@type": "Question",
          "name": "What survival period applies to representations and warranties in Ontario deals?",
          "acceptedAnswer": { "@type": "Answer", "text": "Negotiated survival periods are standard. Fundamental reps (title, authority, capitalization) typically survive indefinitely or for 6 years. General business reps often survive 12-24 months post-closing. Tax reps usually survive until the relevant limitation period expires plus a buffer. Parties may also use representation and warranty (R&W) insurance to extend or replace indemnity exposure." }
        }
      ]
    }
  ]
}`;

type DealComparison = {
  factor: string;
  assetDeal: string;
  shareDeal: string;
};

const dealComparison: DealComparison[] = [
  { factor: "What transfers", assetDeal: "Chosen assets & assumed liabilities", shareDeal: "Entire corporation (all assets & liabilities)" },
  { factor: "Historical liabilities", assetDeal: "Generally excluded (buyer chooses)", shareDeal: "Inherited with the company" },
  { factor: "Tax — buyer", assetDeal: "Step-up in cost base; UCC on depreciables", shareDeal: "No step-up; inherits existing tax attributes" },
  { factor: "Tax — seller (individual)", assetDeal: "Business income on eligible assets; capital gains on goodwill", shareDeal: "Capital gain; potential LCGE ($1.25M for 2025)" },
  { factor: "Third-party consents", assetDeal: "Required for material contracts, leases, licences", shareDeal: "Change-of-control clauses trigger consents" },
  { factor: "Employment", assetDeal: "ESA successor employer rules; potential termination obligations", shareDeal: "Employees continue with no break in service" },
  { factor: "HST", assetDeal: "Section 167 election available if going-concern sale", shareDeal: "No HST on share transfers" },
  { factor: "Land transfer tax", assetDeal: "Applies to real property included in deal", shareDeal: "Not triggered (shares, not land, transfer)" },
  { factor: "Complexity", assetDeal: "More complex — schedule of assets, assignments", shareDeal: "Simpler structure; more extensive due diligence" },
  { factor: "Preferred by", assetDeal: "Buyers (cleaner slate)", shareDeal: "Sellers (LCGE access, simplicity)" },
];

type DiligenceCategory = {
  category: string;
  items: string[];
};

const diligenceCategories: DiligenceCategory[] = [
  {
    category: "Corporate & Legal",
    items: [
      "Certificate of Incorporation & Articles",
      "Minute books (resolutions, by-laws, share register)",
      "Unanimous shareholder agreements",
      "Directors, officers, and shareholder list",
      "Any outstanding options, warrants, or convertibles",
    ],
  },
  {
    category: "Financial",
    items: [
      "Audited or reviewed financial statements (3 years)",
      "Current year management accounts",
      "Accounts receivable aging and payable aging",
      "Bank statements and credit facilities",
      "Off-balance-sheet obligations",
    ],
  },
  {
    category: "Contracts",
    items: [
      "Customer contracts (top 10 by revenue)",
      "Supplier and vendor agreements",
      "Assignment/change-of-control provisions in all material contracts",
      "Non-competition and exclusivity arrangements",
      "Government contracts and grants",
    ],
  },
  {
    category: "Employees & Benefits",
    items: [
      "Employment agreements (key personnel)",
      "Collective agreements (if unionized)",
      "Benefit and pension plan details",
      "Outstanding bonuses, commissions, severance obligations",
      "Any employment-related claims or complaints",
    ],
  },
  {
    category: "Tax",
    items: [
      "T2 corporate returns (3-5 years)",
      "HST/payroll remittances — current",
      "CRA audit history and outstanding assessments",
      "Intercompany transactions and transfer pricing",
      "SRED claims filed or in progress",
    ],
  },
  {
    category: "IP & Technology",
    items: [
      "Registered trade-marks, patents, industrial designs",
      "Domain names and social media accounts",
      "Software licences (transferable?)",
      "Trade secrets and NDAs protecting confidential information",
      "Open-source compliance",
    ],
  },
  {
    category: "Real Property",
    items: [
      "Owned land — title search, mortgage/charge details, environmental Phase I",
      "Leases — term, options to renew, assignment provisions, SNDA",
      "Outstanding work orders or municipal notices",
    ],
  },
  {
    category: "Regulatory & Environmental",
    items: [
      "Licences, permits, and regulatory approvals",
      "Environmental compliance certificates",
      "Pending regulatory proceedings",
      "Competition Act pre-merger notification thresholds",
    ],
  },
  {
    category: "Litigation",
    items: [
      "Outstanding and threatened litigation",
      "Insurance claims history",
      "Product liability or warranty claims",
      "Regulatory investigations",
    ],
  },
];

type KeyClause = {
  clause: string;
  purpose: string;
  tip: string;
};

const keyClauses: KeyClause[] = [
  {
    clause: "Purchase Price & Adjustments",
    purpose: "Sets the headline price and mechanisms for working-capital, cash, debt adjustments at closing",
    tip: "Define the Working Capital Target precisely — it is the most litigated post-closing adjustment in Ontario M&A.",
  },
  {
    clause: "Representations & Warranties",
    purpose: "Factual statements about the business that if false trigger indemnity",
    tip: "Qualify general reps with Material Adverse Effect and disclosure schedules; negotiate knowledge qualifiers carefully.",
  },
  {
    clause: "Covenants",
    purpose: "Pre-closing obligations (run in the ordinary course) and post-closing obligations (non-compete, non-solicit)",
    tip: "Ontario courts enforce non-competes if reasonable in time, geography, and scope — up to 24 months is generally defensible for business sales.",
  },
  {
    clause: "Conditions to Closing",
    purpose: "Events that must occur before either party is obligated to close (regulatory approvals, financing, no MAC)",
    tip: "Distinguish buyer conditions (waivable by buyer) from mutual conditions; include walk-away right if conditions not met by outside date.",
  },
  {
    clause: "Indemnification",
    purpose: "Allocates post-closing risk for breaches of reps or undisclosed liabilities",
    tip: "Basket (deductible), cap, survival period, and escrow/holdback are all heavily negotiated; consider R&W insurance to de-risk.",
  },
  {
    clause: "MAC / MAE Definition",
    purpose: "Material Adverse Change/Effect — allows buyer to walk if something fundamental changes pre-closing",
    tip: "Post-SkyePharma litigation, MAC clauses have very high bars; be specific about what does/does not constitute a MAC.",
  },
  {
    clause: "Escrow / Holdback",
    purpose: "Portion of purchase price held back to secure indemnity obligations",
    tip: "Typical holdback is 5-15% of purchase price for 12-24 months; R&W insurance can reduce or eliminate holdbacks.",
  },
  {
    clause: "Dispute Resolution",
    purpose: "Mechanism for resolving post-closing purchase price or indemnity disputes",
    tip: "Expert determination (an accountant) for working-capital disputes is faster and cheaper than arbitration or litigation.",
  },
];

const faqs = [
  {
    q: "What is the difference between an asset purchase and a share purchase in Ontario?",
    a: "In an asset purchase, the buyer acquires specific assets and liabilities of the business. In a share purchase, the buyer acquires the corporation itself, inheriting all historical liabilities. Asset deals offer buyers a clean start and allow cherry-picking assets; share deals are simpler structurally and may have tax advantages for sellers.",
  },
  {
    q: "What due diligence is required when buying a business in Ontario?",
    a: "Due diligence covers: corporate records (minute books, shareholder agreements), financial statements (3 years), material contracts and their assignability, employment and union agreements, intellectual property, real property (owned or leased), environmental compliance, tax filings and assessments, pending litigation, and regulatory licences.",
  },
  {
    q: "How long does an Ontario business acquisition typically take to close?",
    a: "Simple asset deals may close in 30-60 days. Complex share deals with regulatory approvals (Competition Act, CRTC, etc.) often take 3-6 months. The timeline is driven by due diligence scope, financing requirements, landlord consents, and third-party regulatory clearances.",
  },
  {
    q: "What survival period applies to representations and warranties in Ontario deals?",
    a: "Negotiated survival periods are standard. Fundamental reps (title, authority, capitalization) typically survive indefinitely or for 6 years. General business reps often survive 12-24 months post-closing. Tax reps usually survive until the relevant limitation period expires plus a buffer. Parties may also use representation and warranty (R&W) insurance to extend or replace indemnity exposure.",
  },
];

export default function OntarioBusinessPurchaseAgreementPage() {
  return (
    <>
      <Script id="business-purchase-agreement-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Ontario Business Purchase Agreement</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Corporate Law</span>
              <span className="text-gray-400 text-sm">10 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ontario Business Purchase Agreement: Asset vs Share Deals
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Structural decisions, due diligence, key clauses, and closing mechanics for Ontario business acquisitions.
            </p>
            <div className="mt-4 text-sm text-gray-400">Updated June 2025</div>
          </header>

          {/* Intro */}
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed text-lg">
              Buying or selling a business in Ontario involves one of the most consequential structural decisions in commercial law: asset deal or share deal? The choice affects tax exposure, liability allocation, HST treatment, employee obligations, and the scope of due diligence required. This guide walks through each stage of an Ontario business acquisition from term sheet to closing.
            </p>
          </section>

          {/* Asset vs Share Deal */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Asset Deal vs Share Deal: Key Differences</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The fundamental question in every M&amp;A transaction: does the buyer acquire the corporation&apos;s shares (buying the legal entity) or does the buyer acquire specific assets out of the corporation? Each structure has materially different implications.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Factor</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-700">Asset Deal</th>
                    <th className="px-4 py-3 text-left font-semibold text-purple-700">Share Deal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dealComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{row.factor}</td>
                      <td className="px-4 py-3 text-gray-700">{row.assetDeal}</td>
                      <td className="px-4 py-3 text-gray-700">{row.shareDeal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-amber-900 text-sm font-medium">
                <strong>2025 LCGE Update:</strong> The Lifetime Capital Gains Exemption for Qualified Small Business Corporation shares increased to $1.25M in 2025. This significantly enhances the tax advantage of a share sale for sellers who qualify — a major negotiating point in private M&amp;A.
              </p>
            </div>
          </section>

          {/* Due Diligence */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Due Diligence Checklist</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Scope due diligence to the deal structure and industry. Share deals require broader investigation because the buyer inherits all historical liabilities. Below is a comprehensive framework organized by category.
            </p>
            <div className="grid gap-4">
              {diligenceCategories.map((cat, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">{cat.category}</h3>
                  <ul className="space-y-1">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-500 mt-1 flex-shrink-0">&#10003;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Key Clauses */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Clauses in the Purchase Agreement</h2>
            <div className="space-y-4">
              {keyClauses.map((clause, i) => (
                <div key={i} className="border-l-4 border-blue-500 pl-5 py-2">
                  <h3 className="font-bold text-gray-900 mb-1">{clause.clause}</h3>
                  <p className="text-gray-700 text-sm mb-2">{clause.purpose}</p>
                  <p className="text-blue-800 text-sm bg-blue-50 rounded p-2">
                    <strong>Practitioner tip:</strong> {clause.tip}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing mechanics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Closing Mechanics</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Ontario business acquisitions typically close electronically (DocuSign or similar) with wire transfers. The closing agenda governs the sequence of deliveries and is coordinated by the buyer&apos;s lawyer.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Conditions Satisfied", desc: "All closing conditions met or waived in writing by the relevant party" },
                { label: "Closing Deliveries — Seller", desc: "Executed transfer documents, officer certificates, corporate resolutions, minute books, resignation letters" },
                { label: "Closing Deliveries — Buyer", desc: "Purchase price wire, executed assumption agreement (if asset deal), buyer officer certificate" },
                { label: "Third-Party Consents", desc: "Landlord consents, key contract consents, regulatory approvals — obtained before or at closing" },
                { label: "Escrow Release", desc: "Portion of funds placed in trust with escrow agent pending post-closing adjustments or indemnity period" },
                { label: "Post-Closing Adjustments", desc: "Working capital peg-to-target calculated from closing balance sheet — resolved within 60-90 days" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
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
          <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Manage Your M&amp;A Files with Atticus</h2>
            <p className="text-blue-100 mb-6">
              Track due diligence tasks, manage closing agendas, and keep M&amp;A client files organized — all in one Ontario-built platform.
            </p>
            <Link
              href="/intake"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related Links */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-corporate-annual-maintenance", label: "Ontario Corporate Annual Maintenance" },
                { href: "/blog/ontario-shareholders-agreement", label: "Ontario Shareholders Agreement Guide" },
                { href: "/blog/ontario-partnership-agreement", label: "Ontario Partnership Agreements" },
                { href: "/blog/ontario-professional-corporation", label: "Ontario Professional Corporations" },
                { href: "/blog/how-to-incorporate-ontario", label: "How to Incorporate in Ontario" },
                { href: "/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer Software" },
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
