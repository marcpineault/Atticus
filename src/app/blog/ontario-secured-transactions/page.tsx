import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Secured Transactions Guide 2024: PPSA, Security Agreements, and Enforcement | Atticus",
  description:
    "Ontario PPSA secured transactions: 4 attachment requirements, perfection by registration vs possession, PPSA search report, priority rules (first-to-register vs PMSI super-priority), enforcement remedies, and 5 common mistakes in Ontario security agreements.",
  openGraph: {
    title: "Ontario Secured Transactions Guide 2024: PPSA, Security Agreements, and Enforcement",
    description:
      "Complete guide for Ontario corporate lawyers on PPSA security interests — attachment, perfection, priority disputes, PMSI super-priority, enforcement, and Personal Property Registry searches.",
    url: "https://getatticus.ca/blog/ontario-secured-transactions",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-secured-transactions" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Secured Transactions Guide 2024: PPSA, Security Agreements, and Enforcement",
      "description": "Ontario PPSA covering attachment, perfection, priority rules, PMSI super-priority, enforcement remedies, and common drafting mistakes in security agreements.",
      "url": "https://getatticus.ca/blog/ontario-secured-transactions",
      "datePublished": "2024-12-01",
      "dateModified": "2024-12-01",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the PPSA in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Personal Property Security Act (PPSA) is the Ontario statute governing security interests in personal property (not real estate). It provides a comprehensive framework for creating, perfecting, and enforcing security interests in collateral including inventory, equipment, receivables, and intellectual property. Registration is done through the Province of Ontario's Personal Property Security Registry (PPSR)."
          }
        },
        {
          "@type": "Question",
          "name": "What is a PMSI and why does it matter in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Purchase Money Security Interest (PMSI) is a security interest taken by a seller or lender that finances the debtor's acquisition of the collateral. PMSIs have super-priority over prior registered security interests in the same collateral if the PMSI holder registers and gives notice within the prescribed period (10 days for inventory, 15 days for non-inventory). This makes PMSI registration critical for equipment and inventory financers."
          }
        },
        {
          "@type": "Question",
          "name": "How do you perfect a security interest in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Ontario, a security interest is perfected by: (1) registration of a financing statement at the PPSR for most collateral types; (2) possession of the collateral (for pledges of tangible goods, instruments, or money); or (3) control (for investment property and deposit accounts). Registration is the most common method and provides priority from the registration date."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to a security interest when a debtor goes bankrupt in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A perfected security interest survives the debtor's bankruptcy. The secured creditor may enforce their security interest against the collateral outside of bankruptcy proceedings, subject to the Bankruptcy and Insolvency Act. Unperfected security interests are vulnerable — a trustee in bankruptcy can defeat an unperfected interest under the BIA. Secured creditors with valid charges must obtain a stay lift to enforce against assets in CCAA proceedings."
          }
        }
      ]
    }
  ]
}`;

type AttachmentRow = {
  requirement: string;
  description: string;
  notes: string;
};

const attachmentRequirements: AttachmentRow[] = [
  {
    requirement: "Value given",
    description: "The secured party must have given value — typically money advanced, goods supplied, or a pre-existing debt",
    notes: "A commitment to advance future credit is sufficient value",
  },
  {
    requirement: "Debtor has rights in the collateral",
    description: "The debtor must have some property interest in the collateral at the time security attaches",
    notes: "Security can attach to after-acquired property when debtor acquires it",
  },
  {
    requirement: "Written security agreement",
    description: "A signed written agreement describing the collateral is required unless secured party takes possession",
    notes: "Description must reasonably identify the collateral; overly broad descriptions may be challenged",
  },
  {
    requirement: "All three must occur",
    description: "Attachment occurs when all three conditions are satisfied simultaneously or in any order",
    notes: "Attachment without perfection gives the secured party rights against the debtor but not against third parties",
  },
];

type PerfectionRow = {
  method: string;
  collateralTypes: string;
  priority: string;
};

const perfectionMethods: PerfectionRow[] = [
  {
    method: "Registration (financing statement)",
    collateralTypes: "All personal property collateral; most common method",
    priority: "Priority runs from date and time of registration at PPSR",
  },
  {
    method: "Possession by secured party",
    collateralTypes: "Tangible goods, instruments, money, negotiable documents",
    priority: "Priority runs from date possession is taken",
  },
  {
    method: "Control",
    collateralTypes: "Investment property (securities accounts), deposit accounts",
    priority: "Priority runs from date control agreement is entered into",
  },
  {
    method: "Temporary perfection",
    collateralTypes: "Purchase money security in certificated securities, instruments, negotiable documents",
    priority: "21-day temporary perfection without registration from attachment",
  },
];

type PriorityRow = {
  rule: string;
  description: string;
  exception: string;
};

const priorityRules: PriorityRow[] = [
  {
    rule: "First-to-register",
    description: "As between two perfected secured creditors, the one who registered first has priority regardless of who attached first",
    exception: "PMSI holders have super-priority over earlier registered security interests if PMSI conditions met",
  },
  {
    rule: "PMSI super-priority (non-inventory)",
    description: "A PMSI in equipment or other non-inventory collateral has priority over prior registered interests if the PMSI is perfected within 15 days of debtor receiving possession",
    exception: "Must be perfected within 15 days; no notice requirement for non-inventory PMSIs",
  },
  {
    rule: "PMSI super-priority (inventory)",
    description: "A PMSI in inventory has priority if perfected and written notice given to prior secured creditors before debtor receives possession",
    exception: "10-day window; notice must be given to all holders of security interests in the same class of inventory",
  },
  {
    rule: "Perfected vs unperfected",
    description: "A perfected security interest defeats an unperfected interest in the same collateral",
    exception: "BIA trustee in bankruptcy takes free of unperfected security interests — critical risk",
  },
  {
    rule: "Buyers in ordinary course",
    description: "A buyer of goods in the ordinary course of the seller's business takes free of the seller's secured creditor's interest",
    exception: "Does not apply to buyers who know the sale constitutes breach of the security agreement",
  },
];

type EnforcementRow = {
  remedy: string;
  description: string;
  timing: string;
};

const enforcementRemedies: EnforcementRow[] = [
  {
    remedy: "Seizure of collateral",
    description: "Secured party may take possession of tangible collateral on default without court order, using commercially reasonable methods",
    timing: "Following default; notice to debtor generally not required before seizure but required before disposition",
  },
  {
    remedy: "Disposal of collateral",
    description: "Secured party may sell, lease, or otherwise dispose of collateral after giving debtor 15 days written notice",
    timing: "15 days after notice (or 10 days if perishable or declining in value rapidly)",
  },
  {
    remedy: "Collection of accounts",
    description: "Secured party in an accounts receivable security can notify account debtors to pay the secured party directly",
    timing: "Immediately upon default; no advance notice to debtor required",
  },
  {
    remedy: "Acceptance of collateral",
    description: "Secured party proposes to accept the collateral in full or partial satisfaction of the debt",
    timing: "Debtor and other interested parties have 15 days to object; objection triggers mandatory sale",
  },
  {
    remedy: "Court order",
    description: "Where self-help is not available (e.g., collateral is land-related or in possession of third party), secured party applies for court-ordered sale",
    timing: "Application to Superior Court; timeline depends on court availability and urgency",
  },
];

const faqs = [
  {
    q: "What is the PPSA in Ontario?",
    a: "The Personal Property Security Act (PPSA) is the Ontario statute governing security interests in personal property (not real estate). It provides a comprehensive framework for creating, perfecting, and enforcing security interests in collateral including inventory, equipment, receivables, and intellectual property. Registration is done through the Province of Ontario's Personal Property Security Registry (PPSR).",
  },
  {
    q: "What is a PMSI and why does it matter in Ontario?",
    a: "A Purchase Money Security Interest (PMSI) is a security interest taken by a seller or lender that finances the debtor's acquisition of the collateral. PMSIs have super-priority over prior registered security interests in the same collateral if the PMSI holder registers and gives notice within the prescribed period (10 days for inventory, 15 days for non-inventory). This makes PMSI registration critical for equipment and inventory financers.",
  },
  {
    q: "How do you perfect a security interest in Ontario?",
    a: "In Ontario, a security interest is perfected by: (1) registration of a financing statement at the PPSR for most collateral types; (2) possession of the collateral (for pledges of tangible goods, instruments, or money); or (3) control (for investment property and deposit accounts). Registration is the most common method and provides priority from the registration date.",
  },
  {
    q: "What happens to a security interest when a debtor goes bankrupt in Ontario?",
    a: "A perfected security interest survives the debtor's bankruptcy. The secured creditor may enforce their security interest against the collateral outside of bankruptcy proceedings, subject to the Bankruptcy and Insolvency Act. Unperfected security interests are vulnerable — a trustee in bankruptcy can defeat an unperfected interest under the BIA. Secured creditors with valid charges must obtain a stay lift to enforce against assets in CCAA proceedings.",
  },
];

export default function OntarioSecuredTransactionsPage() {
  return (
    <>
      <Script id="ontario-secured-transactions-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
          <div className="max-w-4xl mx-auto text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-slate-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Ontario Secured Transactions Guide</span>
          </div>
        </div>

        {/* Header */}
        <header className="py-16 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Corporate &amp; Commercial Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Secured Transactions Guide 2024: PPSA, Security Agreements, and Enforcement
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              PPSA attachment requirements, perfection methods (registration, possession, control), priority rules, PMSI super-priority, enforcement remedies, and 5 common mistakes in Ontario security agreements.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>December 2024</span>
              <span>•</span>
              <span>16 min read</span>
              <span>•</span>
              <span>Atticus Legal Team</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              Security interests in personal property are a cornerstone of commercial lending and asset-based financing in Ontario. Whether you are acting for a lender taking security over a borrower&apos;s assets, a supplier financing equipment, or a creditor enforcing against a defaulting debtor, understanding the Personal Property Security Act (PPSA) is essential.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario&apos;s PPSA governs security interests in all personal property — goods, accounts receivable, investment property, instruments, and intangibles. Real property security is governed by the Land Titles Act and Mortgages Act. The PPSA regime is registration-based: perfection through the Ontario Personal Property Security Registry (PPSR) establishes priority against other creditors, judgment creditors, and trustees in bankruptcy.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the complete PPSA framework Ontario corporate lawyers need: attachment, perfection, priority rules including PMSI super-priority, enforcement remedies, and the common drafting and registration mistakes that can cost clients their priority.
            </p>
          </section>

          {/* Attachment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              PPSA Attachment: Four Requirements
            </h2>
            <p className="text-slate-700 mb-6">
              A security interest attaches to collateral when all three of the following conditions are satisfied — giving the secured party rights in the collateral against the debtor. Attachment is the foundation; perfection provides priority against third parties.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Requirement</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Description</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {attachmentRequirements.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.requirement}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.description}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Perfection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Perfection: Three Methods
            </h2>
            <p className="text-slate-700 mb-6">
              Perfection gives the secured party priority against third parties — other creditors, purchasers, and the trustee in bankruptcy. An unperfected security interest is still valid between the secured party and the debtor, but is vulnerable to defeat by a perfected creditor.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Method</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Applicable Collateral</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Priority Start</th>
                  </tr>
                </thead>
                <tbody>
                  {perfectionMethods.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.method}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.collateralTypes}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="text-amber-900 text-sm">
                <strong>Registration tips:</strong> Register before advancing funds where possible — priority runs from the date of registration, not the date the security agreement is signed. Use the broadest permitted collateral description (e.g., &quot;all personal property&quot; for a general security agreement). Ensure the debtor&apos;s legal name exactly matches the PPSR search criteria — name errors can make a registration ineffective.
              </p>
            </div>
          </section>

          {/* Priority */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Priority Rules: First-to-Register and PMSI Super-Priority
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Priority Rule</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Description</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Key Exception</th>
                  </tr>
                </thead>
                <tbody>
                  {priorityRules.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.rule}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.description}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.exception}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Enforcement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Enforcement Remedies on Default
            </h2>
            <p className="text-slate-700 mb-6">
              Part V of the PPSA governs enforcement. The secured party must act in a commercially reasonable manner in all aspects of enforcement, including the method, time, place, and terms of disposition. Failure to do so can result in liability to the debtor or subordinate secured parties.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Remedy</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Description</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {enforcementRemedies.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.remedy}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.description}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5 Common Mistakes in Ontario PPSA Security Agreements
            </h2>
            <div className="space-y-4">
              {[
                {
                  mistake: "Incorrect debtor name on registration",
                  consequence: "A financing statement registered under a name that does not exactly match the debtor&apos;s legal name may be ineffective — a searcher using the correct name would not find it",
                  fix: "Use the exact legal name from the corporation&apos;s certificate of incorporation or the individual&apos;s driver&apos;s licence",
                },
                {
                  mistake: "Failing to register before advancing funds",
                  consequence: "Priority runs from the date of registration. If you advance funds before registering, another creditor who registers first will have priority",
                  fix: "Register the financing statement before or simultaneously with the advance",
                },
                {
                  mistake: "Overly narrow collateral description",
                  consequence: "A description of specific assets may not cover future-acquired assets or proceeds, leaving gaps in the security",
                  fix: "Use broad descriptions in general security agreements: all present and after-acquired personal property",
                },
                {
                  mistake: "Missing PMSI registration window",
                  consequence: "A PMSI in inventory registered after the debtor receives possession loses its super-priority. A PMSI in non-inventory registered more than 15 days after possession loses super-priority",
                  fix: "Register and serve notice on prior secured creditors before the debtor receives possession of inventory; register within 15 days for non-inventory PMSIs",
                },
                {
                  mistake: "Failing to search before advancing",
                  consequence: "Prior registered creditors may have security interests that have priority over the new lender&apos;s interest in the same collateral",
                  fix: "Always conduct a PPSR search against the debtor and all related entities before advancing credit and taking security",
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.mistake}</h3>
                      <p className="text-slate-700 text-sm mb-2">{item.consequence}</p>
                      <p className="text-green-700 text-sm"><strong>Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 rounded-2xl p-10 text-center text-white mb-12">
            <h2 className="text-2xl font-bold mb-3">
              Manage Corporate Files with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">
              Atticus helps Ontario corporate lawyers track matter deadlines, manage trust accounting, and keep files LSO-compliant — all in one platform built for Canadian law.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="border-t border-slate-100 pt-8">
            <h3 className="font-semibold text-slate-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-shareholder-agreement", label: "Ontario Shareholder Agreement Guide" },
                { href: "/blog/ontario-business-purchase-agreement", label: "Ontario Business Purchase Agreement" },
                { href: "/blog/ontario-professional-corporation", label: "Ontario Professional Corporation Guide" },
                { href: "/blog/ontario-corporate-annual-maintenance", label: "Ontario Corporate Annual Maintenance" },
                { href: "/blog/ontario-franchise-law", label: "Ontario Franchise Law Guide" },
                { href: "/blog/ontario-contract-dispute", label: "Ontario Contract Dispute Guide" },
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
        </div>
      </div>
    </>
  );
}
