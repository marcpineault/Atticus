import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Employment Contract Guide: Termination Clauses, Probation & ESA Minimums | Atticus",
  description:
    "Complete guide to Ontario employment contracts. Termination clauses post-Waksdale, probation periods, ESA minimums, fixed-term traps, restrictive covenants, and drafting best practices. Updated 2025.",
  keywords: [
    "Ontario employment contract",
    "termination clause Ontario",
    "Waksdale Ontario employment",
    "ESA minimums Ontario",
    "probation period Ontario",
    "fixed term employment contract Ontario",
    "non-compete employment Ontario",
    "employment lawyer Ontario",
  ],
  openGraph: {
    title: "Ontario Employment Contract Guide: Termination Clauses, Probation & ESA Minimums",
    description:
      "Termination clause drafting post-Waksdale, ESA minimums, probation periods, and restrictive covenants for Ontario employment lawyers.",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Employment Contract Guide: Termination Clauses, Probation and ESA Minimums",
      "description": "Complete guide to Ontario employment contracts covering termination clause drafting post-Waksdale, ESA minimums, probation periods, fixed-term traps, and restrictive covenants.",
      "datePublished": "2025-06-18",
      "dateModified": "2025-06-18",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-employment-contract" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes a termination clause unenforceable in Ontario?",
          "acceptedAnswer": { "@type": "Answer", "text": "Post-Waksdale v. Swegon (2020 ONCA), a termination clause is void in its entirety if any part of it — including the just cause provision — attempts to contract out of ESA minimums, even if other parts appear valid. Courts read the entire termination provision holistically. Common defects: clauses that allow termination for cause with no notice but use 'cause' more broadly than the ESA's 'wilful misconduct' standard; clauses that purport to limit severance pay below ESA entitlements; and clauses that exclude benefit continuation." }
        },
        {
          "@type": "Question",
          "name": "What is the probation period under Ontario's Employment Standards Act?",
          "acceptedAnswer": { "@type": "Answer", "text": "The ESA provides that employees with less than 3 months of service are not entitled to notice of termination or termination pay under the ESA. This effectively creates a 3-month probationary period for ESA purposes. However, common law notice rights still apply during this period unless validly contracted out. A contractual probation period longer than 3 months does not extend the ESA exemption — ESA minimums apply once an employee hits 3 months of service regardless of what the contract says." }
        },
        {
          "@type": "Question",
          "name": "Are non-compete clauses enforceable in Ontario employment contracts?",
          "acceptedAnswer": { "@type": "Answer", "text": "Effective October 25, 2021, the Employment Standards Act was amended to prohibit non-compete agreements in most employment contracts (s. 67.2 ESA). The prohibition does not apply to agreements entered into in connection with the sale of a business where the seller becomes an employee of the buyer, or to executive-level employees (C-suite). Non-solicitation of clients and employees clauses remain enforceable if reasonable in scope." }
        },
        {
          "@type": "Question",
          "name": "What are the minimum ESA entitlements on termination in Ontario?",
          "acceptedAnswer": { "@type": "Answer", "text": "ESA termination pay: 1 week per year of service, up to 8 weeks (for employees with 3+ months service). ESA severance pay (additional, for employees with 5+ years and employer payroll of $2.5M+): 1 week per year of service, up to 26 weeks. Benefit continuation during the notice period. These are minimums only — common law reasonable notice is typically much higher and applies unless validly contracted out." }
        }
      ]
    }
  ]
}`;

type EsaMinimum = {
  service: string;
  terminationPay: string;
  severancePay: string;
};

const esaMinimums: EsaMinimum[] = [
  { service: "Less than 3 months", terminationPay: "None", severancePay: "None" },
  { service: "3 months to 1 year", terminationPay: "1 week", severancePay: "None" },
  { service: "1 year to 2 years", terminationPay: "2 weeks", severancePay: "1 week*" },
  { service: "2 years to 3 years", terminationPay: "3 weeks", severancePay: "2 weeks*" },
  { service: "3 years to 4 years", terminationPay: "4 weeks", severancePay: "3 weeks*" },
  { service: "4 years to 5 years", terminationPay: "5 weeks", severancePay: "4 weeks*" },
  { service: "5 years to 6 years", terminationPay: "6 weeks", severancePay: "5 weeks*" },
  { service: "6 years to 7 years", terminationPay: "7 weeks", severancePay: "6 weeks*" },
  { service: "7+ years", terminationPay: "8 weeks (maximum)", severancePay: "1 week per year to 26 weeks max*" },
];

type Clause = {
  clause: string;
  issue: string;
  bestPractice: string;
};

const termClauseIssues: Clause[] = [
  {
    clause: "Just cause with no notice",
    issue: "Using 'cause' as defined in the contract (e.g., 'serious misconduct') rather than the ESA's narrower 'wilful misconduct' standard — Waksdale makes the entire termination provision void",
    bestPractice: "Specify that 'cause' for no-notice termination means 'wilful misconduct, disobedience or wilful neglect of duty that is not trivial and has not been condoned' — tracking ESA language exactly",
  },
  {
    clause: "Limiting termination pay to ESA minimum",
    issue: "Language like 'we will provide ESA minimums only' — enforceable to displace common law if validly drafted, but any other defect in the termination clause voids the entire provision",
    bestPractice: "Include a severability clause specifically for termination pay: 'If any part of this termination provision is unenforceable, the minimum ESA entitlement shall apply' — courts have been skeptical but some post-Waksdale decisions accept this",
  },
  {
    clause: "Benefit continuation exclusion",
    issue: "Failing to address benefit continuation during the notice period — ESA requires continuation of benefits for the statutory notice period",
    bestPractice: "Expressly state that benefits will be maintained during any statutory notice period and either continued or paid in lieu during any contractual notice period",
  },
  {
    clause: "Lump sum in lieu of notice",
    issue: "Paying a lump sum 'in full satisfaction of all amounts owing' — may attempt to include severance pay in a termination pay clause, violating ESA",
    bestPractice: "Clearly separate and identify termination pay and severance pay components; do not bundle them or purport to satisfy severance in the termination clause",
  },
  {
    clause: "Variable or incentive pay",
    issue: "Excluding bonus or commission from notice period pay calculation — Paquette v. TeraGo (2016 ONCA) requires continued accrual of variable compensation during reasonable notice period",
    bestPractice: "Address variable pay in the termination clause or at minimum in the bonus/commission plan; specify whether it continues during notice or is subject to active employment requirements",
  },
];

const restrictiveCovenantsData = [
  {
    type: "Non-Compete",
    status: "Prohibited (s. 67.2 ESA) for most employees since Oct 25, 2021",
    exceptions: "Business sale context; executives (C-suite) — still enforceable if reasonable",
    enforcement: "Void and unenforceable for employees covered by the ESA prohibition",
  },
  {
    type: "Non-Solicitation of Clients",
    status: "Enforceable if reasonable",
    exceptions: "Must be limited in time (typically 12-24 months) and geographic scope",
    enforcement: "Courts assess reasonableness; activity-based (no cold-calling vs no dealing) matters",
  },
  {
    type: "Non-Solicitation of Employees",
    status: "Enforceable if reasonable",
    exceptions: "Must be time-limited; applies only to employees known to the departing employee",
    enforcement: "Generally easier to enforce than client non-solicits if narrowly drafted",
  },
  {
    type: "Confidentiality / NDA",
    status: "Fully enforceable — no ESA restriction",
    exceptions: "Cannot prevent disclosure of ESA rights or public interest disclosures",
    enforcement: "Injunctions readily granted; damages available for breach",
  },
];

const faqs = [
  {
    q: "What makes a termination clause unenforceable in Ontario?",
    a: "Post-Waksdale v. Swegon (2020 ONCA), a termination clause is void in its entirety if any part of it — including the just cause provision — attempts to contract out of ESA minimums, even if other parts appear valid. Courts read the entire termination provision holistically. Common defects: clauses that allow termination for cause with no notice but use 'cause' more broadly than the ESA's 'wilful misconduct' standard; clauses that purport to limit severance pay below ESA entitlements; and clauses that exclude benefit continuation.",
  },
  {
    q: "What is the probation period under Ontario's Employment Standards Act?",
    a: "The ESA provides that employees with less than 3 months of service are not entitled to notice of termination or termination pay under the ESA. This effectively creates a 3-month probationary period for ESA purposes. However, common law notice rights still apply during this period unless validly contracted out. A contractual probation period longer than 3 months does not extend the ESA exemption — ESA minimums apply once an employee hits 3 months of service regardless of what the contract says.",
  },
  {
    q: "Are non-compete clauses enforceable in Ontario employment contracts?",
    a: "Effective October 25, 2021, the Employment Standards Act was amended to prohibit non-compete agreements in most employment contracts (s. 67.2 ESA). The prohibition does not apply to agreements entered into in connection with the sale of a business where the seller becomes an employee of the buyer, or to executive-level employees (C-suite). Non-solicitation of clients and employees clauses remain enforceable if reasonable in scope.",
  },
  {
    q: "What are the minimum ESA entitlements on termination in Ontario?",
    a: "ESA termination pay: 1 week per year of service, up to 8 weeks (for employees with 3+ months service). ESA severance pay (additional, for employees with 5+ years and employer payroll of $2.5M+): 1 week per year of service, up to 26 weeks. Benefit continuation during the notice period. These are minimums only — common law reasonable notice is typically much higher and applies unless validly contracted out.",
  },
];

export default function OntarioEmploymentContractPage() {
  return (
    <>
      <Script id="ontario-employment-contract-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Ontario Employment Contract</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Employment Law</span>
              <span className="text-gray-400 text-sm">10 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ontario Employment Contract: Termination Clauses, Probation &amp; ESA Minimums
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Post-Waksdale termination clause drafting, ESA minimum entitlements table, probation period rules, fixed-term traps, and restrictive covenant enforceability.
            </p>
            <div className="mt-4 text-sm text-gray-400">Updated June 2025</div>
          </header>

          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed text-lg">
              Ontario employment contracts are among the most consequential commercial documents a business signs — and the most frequently litigated. The Supreme Court&apos;s validation of the Waksdale approach means that a single defective clause can unwind an employer&apos;s entire notice limitation strategy, exposing the employer to common law reasonable notice for the full employment period. This guide covers what employment lawyers review in every employment agreement.
            </p>
          </section>

          {/* Waksdale */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Waksdale Problem: Why Termination Clauses Fail</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-red-900 mb-2">Waksdale v. Swegon North America Inc. (2020 ONCA 391)</h3>
              <p className="text-red-800 text-sm leading-relaxed">
                The Ontario Court of Appeal held that the enforceability of a termination clause must be assessed holistically — not part by part. If any portion of the termination provision (including a just-cause clause that is never invoked) purports to contract out of the ESA, the entire termination provision is void. The result: the employee is entitled to common law reasonable notice, not the contractual notice period. This decision invalidated thousands of employment contracts that had been considered enforceable.
              </p>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">5 Common Termination Clause Defects</h3>
            <div className="space-y-5">
              {termClauseIssues.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">{item.clause}</h4>
                  <div className="mb-3">
                    <span className="text-red-600 text-xs font-semibold uppercase tracking-wide">Problem</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.issue}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-green-700 text-xs font-semibold uppercase tracking-wide">Best Practice</span>
                    <p className="text-green-800 text-sm mt-1 leading-relaxed">{item.bestPractice}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ESA Minimums Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ESA Termination &amp; Severance Pay Minimums</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Length of Service</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-700">ESA Termination Pay</th>
                    <th className="px-4 py-3 text-left font-semibold text-purple-700">ESA Severance Pay*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {esaMinimums.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{row.service}</td>
                      <td className="px-4 py-3 text-gray-700">{row.terminationPay}</td>
                      <td className="px-4 py-3 text-gray-700">{row.severancePay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs italic">*Severance pay applies only where employer&apos;s Ontario payroll is $2.5M+ or the employee was laid off as part of a mass lay-off (50+ employees). Severance pay is in addition to termination pay.</p>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-amber-900 text-sm">
                <strong>Common law notice</strong> is almost always higher than ESA minimums. The Bardal factors (character of employment, length of service, age, availability of similar employment) typically yield 1 month per year of service as a rough benchmark — but can be higher for senior employees. ESA minimums are the floor only.
              </p>
            </div>
          </section>

          {/* Probation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Probation Periods in Ontario</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "ESA probation", desc: "3 months — employees with less than 3 months service have no ESA entitlement to notice or termination pay. ESA cannot be contracted out of to create a longer probation period." },
                { label: "Contractual probation", desc: "Employer and employee can agree on a probationary period for performance assessment purposes, typically 3-6 months. Failure during contractual probation triggers ESA minimums if over 3 months service." },
                { label: "Common law during probation", desc: "Even during probation, common law reasonable notice applies unless validly contracted out. The probationary period is a factor — but not absolute — in assessing reasonableness." },
                { label: "Dismissal for failure to meet standards", desc: "To dismiss for failure to meet probationary standards without triggering a performance-based termination claim, employers must communicate the standards and give the employee a fair chance to meet them." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Fixed-Term */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fixed-Term Contract Traps</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-4">
              <p className="text-red-900 text-sm leading-relaxed">
                <strong>Howard v. Benson Group (2016 ONCA):</strong> An employee dismissed before the end of a fixed-term contract is entitled to the wages for the remainder of the contract — no mitigation duty, no Bardal analysis. If a fixed-term contract does not include a valid early termination clause, the full remainder of the contract is payable. For long fixed-term contracts (2+ years), this can be catastrophically expensive.
              </p>
            </div>
            <ul className="space-y-2">
              {[
                "Always include a valid early termination clause in fixed-term contracts",
                "Post-Waksdale, the early termination clause in a fixed-term contract faces the same scrutiny as in indefinite-term contracts",
                "Automatic renewal clauses can convert a fixed-term contract into an indefinite-term contract — specify what happens on expiry",
                "Maximum term employment (e.g., 'up to 12 months') may still be treated as indefinite-term depending on drafting",
                "If you roll over the same employee on successive fixed-term contracts, courts may treat the relationship as indefinite-term",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">&#9888;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Restrictive Covenants */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Restrictive Covenants: 2025 Status</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Exceptions</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Enforcement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {restrictiveCovenantsData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{row.type}</td>
                      <td className="px-4 py-3 text-gray-700 text-xs">{row.status}</td>
                      <td className="px-4 py-3 text-gray-700 text-xs">{row.exceptions}</td>
                      <td className="px-4 py-3 text-gray-700 text-xs">{row.enforcement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

          <section className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Manage Employment Files with Atticus</h2>
            <p className="text-green-100 mb-6">
              Track employment matters, limitation periods, and client files — built for Ontario employment lawyers.
            </p>
            <Link href="/intake" className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors">
              Start Free Trial
            </Link>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-wrongful-dismissal-guide", label: "Ontario Wrongful Dismissal Guide" },
                { href: "/blog/ontario-employment-standards-act", label: "Ontario Employment Standards Act" },
                { href: "/blog/ontario-non-compete-agreement", label: "Ontario Non-Compete Agreements" },
                { href: "/blog/ontario-human-rights-code", label: "Ontario Human Rights Code" },
                { href: "/ontario-employment-lawyer", label: "Ontario Employment Lawyer Software" },
                { href: "/ontario-limitation-period", label: "Ontario Limitation Period Calculator" },
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
