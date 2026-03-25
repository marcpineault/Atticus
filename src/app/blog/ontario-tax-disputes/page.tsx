import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Tax Disputes: CRA Audits, Objections & Tax Court of Canada | Atticus",
  description:
    "Complete guide to Canadian tax disputes for Ontario lawyers. CRA audit process, notice of objection, Tax Court of Canada appeals, voluntary disclosure program, and criminal tax prosecutions. Updated 2025.",
  keywords: [
    "CRA audit Ontario",
    "notice of objection CRA",
    "Tax Court of Canada Ontario",
    "voluntary disclosure CRA",
    "tax dispute lawyer Ontario",
    "CRA appeal process",
    "tax evasion prosecution Ontario",
    "GST HST audit Ontario",
  ],
  openGraph: {
    title: "Ontario Tax Disputes: CRA Audits, Objections & Tax Court of Canada",
    description:
      "CRA audit process, notice of objection deadlines, Tax Court appeals, voluntary disclosure, and criminal tax prosecutions for Ontario tax practitioners.",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Tax Disputes: CRA Audits, Objections and Tax Court of Canada",
      "description": "Complete guide to Canadian tax disputes covering CRA audit process, notice of objection, Tax Court of Canada appeals, voluntary disclosure program, and criminal tax prosecutions.",
      "datePublished": "2025-06-22",
      "dateModified": "2025-06-22",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-tax-disputes" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a CRA audit take in Canada?",
          "acceptedAnswer": { "@type": "Answer", "text": "CRA audit timelines vary significantly by type. A desk audit (correspondence audit) typically resolves in 2-4 months. A field audit of a small business may take 6-12 months. Complex transfer pricing or large corporation audits can take 2-4 years. CRA has no statutory deadline for completing an audit, but must issue a Notice of Assessment or Reassessment within the normal reassessment period: 3 years from the original assessment for most taxpayers, 4 years for certain corporations." }
        },
        {
          "@type": "Question",
          "name": "What is the deadline to file a notice of objection with CRA?",
          "acceptedAnswer": { "@type": "Answer", "text": "The deadline to file a Notice of Objection with CRA depends on the type of assessment: for income tax, 90 days from the date on the Notice of Assessment or Reassessment, or 1 year from the filing due date for the return, whichever is later. For GST/HST, 90 days from the date on the Notice of Assessment. Late objections may be accepted if filed within 1 year of the 90-day deadline with an application for extension showing a reasonable excuse for the delay." }
        },
        {
          "@type": "Question",
          "name": "What is the CRA Voluntary Disclosures Program?",
          "acceptedAnswer": { "@type": "Answer", "text": "The CRA Voluntary Disclosures Program (VDP) allows taxpayers to correct inaccurate or incomplete information, or disclose information not previously reported, with reduced penalties. The disclosure must be voluntary (not related to an ongoing audit or investigation), complete, and involve a penalty. Under the current VDP (effective March 2018), there are two tracks: General Program (penalty relief but not interest relief for most cases) and Limited Program (for deliberate non-compliance — no penalty relief, partial interest relief only). Criminal prosecution immunity is not guaranteed under VDP." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Tax Court of Canada informal and general procedure?",
          "acceptedAnswer": { "@type": "Answer", "text": "Informal procedure applies where the amount of federal tax and penalties in dispute is $25,000 or less per year, or the amount of loss in dispute does not exceed $50,000. The informal procedure is faster, less formal, and does not require a lawyer. General procedure applies to all other disputes and resembles regular civil litigation — examinations for discovery, expert witnesses, formal rules of evidence, and legal representation is standard. Tax Court decisions under informal procedure are not binding precedent; general procedure decisions are." }
        }
      ]
    }
  ]
}`;

type AuditType = {
  type: string;
  trigger: string;
  scope: string;
  duration: string;
};

const auditTypes: AuditType[] = [
  { type: "Desk Audit (Correspondence)", trigger: "Specific line items on return; random selection; information matching discrepancies", scope: "Narrow — specific items only; conducted by mail", duration: "2-4 months" },
  { type: "Field Audit", trigger: "Business audit; unreported income risk; complex transactions; referral from another audit", scope: "CRA auditor visits taxpayer's premises; reviews books, records, bank statements", duration: "6-18 months" },
  { type: "GST/HST Audit", trigger: "Large refund claims; certain industries (construction, real estate); random", scope: "Input tax credits, taxable supplies, HST collected and remitted", duration: "3-12 months" },
  { type: "Payroll Audit", trigger: "Worker classification (employee vs contractor); benefit reporting; failure to remit", scope: "Employment records, T4 filings, worker agreements, source deductions", duration: "3-6 months" },
  { type: "Transfer Pricing Review", trigger: "Multinational groups; intercompany transactions; country-by-country reporting", scope: "All related-party transactions; economic analysis of arm's length pricing", duration: "2-4+ years" },
  { type: "Scientific Research & Experimental Development (SRED) Review", trigger: "Large SRED claims; first-time filers; high-risk industries", scope: "Eligibility of activities and expenditures claimed as SRED", duration: "6-18 months" },
];

const disputeStages = [
  {
    stage: "CRA Audit",
    detail: "CRA examines the return and issues proposed adjustments. Taxpayer should provide complete documentation, respond to information requests promptly, and preserve solicitor-client privilege over legal advice.",
    deadline: "No statutory deadline for audit completion; normal reassessment period limits CRA's power to reassess",
  },
  {
    stage: "Notice of Reassessment",
    detail: "CRA issues a Notice of Reassessment setting out the additional tax, interest, and penalties. This triggers the objection deadline. Review carefully — interest begins accruing immediately.",
    deadline: "Objection deadline clock starts from date on the Notice",
  },
  {
    stage: "Notice of Objection",
    detail: "File a Notice of Objection with the CRA Appeals Division (not the audit division). Must set out the facts and reasons for the objection. Suspends collection of the disputed amounts during the objection process.",
    deadline: "90 days from Notice of Reassessment (income tax) / 90 days (GST/HST); 1-year extension available with application",
  },
  {
    stage: "CRA Appeals Officer Review",
    detail: "An independent CRA Appeals Officer reviews the file and may settle the dispute. The Appeals Officer has broader authority to settle than the auditor. Most disputes resolve at this stage.",
    deadline: "CRA has no statutory deadline to resolve objections; can take 1-4+ years",
  },
  {
    stage: "Confirmation or Varied Assessment",
    detail: "CRA Appeals issues a Notice of Confirmation (upholding the reassessment) or a varied assessment. This triggers the right to appeal to the Tax Court of Canada.",
    deadline: "90 days from Confirmation/varied assessment to file Tax Court appeal",
  },
  {
    stage: "Tax Court of Canada",
    detail: "Formal judicial proceeding. General procedure: discoveries, expert evidence, oral hearings. Informal procedure: less formal, small amounts. Federal Court of Appeal is next level for questions of law.",
    deadline: "90 days from CRA confirmation to file; extensions available",
  },
];

const vdpConsiderations = [
  { point: "Voluntariness requirement", desc: "Cannot use VDP if CRA has already contacted you about the unreported amounts, or if you are aware of a pending audit or investigation of the specific issue" },
  { point: "Completeness requirement", desc: "Disclosure must be complete — partial disclosures do not qualify; all related issues for all relevant years must be disclosed at once" },
  { point: "General Program relief", desc: "Waiver of penalties; no criminal prosecution recommendation for the disclosed amounts; no gross negligence penalties" },
  { point: "Limited Program (serious cases)", desc: "Applies to deliberate non-compliance (offshore accounts, serial non-filers, falsified documents) — no penalty waiver, only 50% interest relief for 3 of the 10 preceding years" },
  { point: "Interest not waived (generally)", desc: "Under current VDP, interest is generally not waived except in the Limited Program partial relief — distinguish from pre-2018 VDP which provided interest relief" },
  { point: "Anonymous disclosure", desc: "Preliminary disclosure can be made anonymously to assess eligibility; identity must be disclosed to complete the VDP application" },
];

const faqs = [
  {
    q: "How long does a CRA audit take in Canada?",
    a: "CRA audit timelines vary significantly by type. A desk audit (correspondence audit) typically resolves in 2-4 months. A field audit of a small business may take 6-12 months. Complex transfer pricing or large corporation audits can take 2-4 years. CRA has no statutory deadline for completing an audit, but must issue a Notice of Assessment or Reassessment within the normal reassessment period: 3 years from the original assessment for most taxpayers, 4 years for certain corporations.",
  },
  {
    q: "What is the deadline to file a notice of objection with CRA?",
    a: "The deadline to file a Notice of Objection with CRA depends on the type of assessment: for income tax, 90 days from the date on the Notice of Assessment or Reassessment, or 1 year from the filing due date for the return, whichever is later. For GST/HST, 90 days from the date on the Notice of Assessment. Late objections may be accepted if filed within 1 year of the 90-day deadline with an application for extension showing a reasonable excuse for the delay.",
  },
  {
    q: "What is the CRA Voluntary Disclosures Program?",
    a: "The CRA Voluntary Disclosures Program (VDP) allows taxpayers to correct inaccurate or incomplete information, or disclose information not previously reported, with reduced penalties. The disclosure must be voluntary (not related to an ongoing audit or investigation), complete, and involve a penalty. Under the current VDP (effective March 2018), there are two tracks: General Program (penalty relief but not interest relief for most cases) and Limited Program (for deliberate non-compliance — no penalty relief, partial interest relief only). Criminal prosecution immunity is not guaranteed under VDP.",
  },
  {
    q: "What is the difference between Tax Court of Canada informal and general procedure?",
    a: "Informal procedure applies where the amount of federal tax and penalties in dispute is $25,000 or less per year, or the amount of loss in dispute does not exceed $50,000. The informal procedure is faster, less formal, and does not require a lawyer. General procedure applies to all other disputes and resembles regular civil litigation — examinations for discovery, expert witnesses, formal rules of evidence, and legal representation is standard. Tax Court decisions under informal procedure are not binding precedent; general procedure decisions are.",
  },
];

export default function OntarioTaxDisputesPage() {
  return (
    <>
      <Script id="ontario-tax-disputes-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Ontario Tax Disputes</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">Tax Law</span>
              <span className="text-gray-400 text-sm">11 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ontario Tax Disputes: CRA Audits, Objections &amp; Tax Court of Canada
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              CRA audit types, notice of objection deadlines, Tax Court appeal procedures, voluntary disclosure, and criminal tax enforcement for Ontario tax practitioners.
            </p>
            <div className="mt-4 text-sm text-gray-400">Updated June 2025</div>
          </header>

          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed text-lg">
              Tax disputes in Canada follow a structured administrative and judicial process governed principally by the Income Tax Act, the Excise Tax Act (GST/HST), and the Tax Court of Canada Act. Ontario tax lawyers advise on everything from CRA audit response through Tax Court litigation and Federal Court of Appeal proceedings. Understanding the procedural framework and critical deadlines is essential — missed deadlines in tax disputes are often fatal and not recoverable.
            </p>
          </section>

          {/* Audit Types */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CRA Audit Types</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Audit Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Common Triggers</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Scope</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {auditTypes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.trigger}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{row.scope}</td>
                      <td className="px-4 py-3 text-emerald-700 font-medium text-xs">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Dispute Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Tax Dispute Process: Audit to Tax Court</h2>
            <div className="space-y-4">
              {disputeStages.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-gray-900">{item.stage}</h3>
                    <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded flex-shrink-0 font-medium">{item.deadline}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* VDP */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Voluntary Disclosures Program (VDP)</h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              The VDP is a significant tool for taxpayers who have not complied with their tax obligations. Timing is critical — VDP is unavailable once CRA has initiated contact about the specific non-compliance.
            </p>
            <div className="space-y-3">
              {vdpConsiderations.map((item, i) => (
                <div key={i} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{item.point}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Criminal tax */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Criminal Tax Prosecutions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Tax evasion (s. 239 ITA)", desc: "Willful non-filing, false statements, or destruction of records to evade tax — summary or indictable; fines up to 200% of evaded tax + imprisonment up to 5 years (indictable)" },
                { label: "GST/HST fraud (s. 327 ETA)", desc: "Fraudulent GST/HST returns (carousel fraud, false ITCs) — parallel CRA criminal investigation team (IID) and RCMP involvement" },
                { label: "Third-party civil penalties (s. 163.2)", desc: "Civil penalties for tax planners, accountants, and lawyers who make or participate in false statements — up to the greater of $100,000 or the planner's gross compensation" },
                { label: "Charter rights in CRA audits", desc: "Key distinction: compelled audit production (not protected by s. 8) vs. criminal investigation (Charter applies). If CRA investigators from the IID are involved, the right to counsel under s. 10(b) attaches" },
              ].map((item, i) => (
                <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <div className="font-semibold text-red-900 text-sm mb-1">{item.label}</div>
                  <div className="text-red-700 text-sm leading-relaxed">{item.desc}</div>
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

          <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-8 text-white text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Manage Tax Dispute Files with Atticus</h2>
            <p className="text-emerald-100 mb-6">
              Track CRA objection deadlines, Tax Court timelines, and client correspondence — built for Ontario tax practitioners.
            </p>
            <Link href="/intake" className="inline-block bg-white text-emerald-700 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
              Start Free Trial
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-professional-corporation", label: "Ontario Professional Corporation Tax Guide" },
                { href: "/blog/ontario-business-purchase-agreement", label: "Ontario Business Purchase Agreements" },
                { href: "/blog/ontario-corporate-annual-maintenance", label: "Ontario Corporate Annual Maintenance" },
                { href: "/blog/ontario-land-transfer-tax", label: "Ontario Land Transfer Tax" },
                { href: "/blog/trust-accounting-guide-ontario", label: "Ontario Trust Accounting Guide" },
                { href: "/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer Software" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">
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
