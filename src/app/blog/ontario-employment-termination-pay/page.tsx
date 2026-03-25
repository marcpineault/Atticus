import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Employment Termination Pay Guide 2024: ESA Minimums, Severance, and Wrongful Dismissal | Atticus",
  description:
    "Ontario termination pay: ESA minimums (notice + severance pay), common law reasonable notice (Bardal factors), wrongful dismissal damages, frustration of contract, just cause threshold, constructive dismissal, and mitigation requirements for Ontario employment lawyers.",
  openGraph: {
    title: "Ontario Employment Termination Pay Guide 2024: ESA Minimums, Severance, and Wrongful Dismissal",
    description:
      "Complete guide for Ontario employment lawyers on termination entitlements — ESA statutory minimums, Bardal reasonable notice factors, just cause threshold, constructive dismissal, and damages calculation.",
    url: "https://getatticus.ca/blog/ontario-employment-termination-pay",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-employment-termination-pay" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Employment Termination Pay Guide 2024: ESA Minimums, Severance, and Wrongful Dismissal",
      "description": "Ontario termination pay covering ESA minimums, Bardal factors for reasonable notice, just cause threshold, constructive dismissal, and wrongful dismissal damages.",
      "url": "https://getatticus.ca/blog/ontario-employment-termination-pay",
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
          "name": "What is the difference between ESA termination pay and common law notice in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ESA termination pay is the minimum statutory entitlement under the Employment Standards Act, 2000 — typically 1 week per year of service up to 8 weeks. Common law reasonable notice is a higher common law standard calculated using the Bardal factors (age, length of service, character of employment, availability of similar employment). Common law notice cannot be contracted out of below the ESA minimum. Most terminated employees in Ontario are entitled to significantly more under the common law than the ESA minimum."
          }
        },
        {
          "@type": "Question",
          "name": "What is just cause for dismissal in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Just cause for dismissal in Ontario requires conduct so serious that it fundamentally undermines the employment relationship and makes continued employment untenable. Courts apply a contextual analysis considering the nature and severity of the misconduct, whether the employee was warned, the employee's length of service and record, and whether the conduct was proportionate. Just cause is a high threshold — minor misconduct, performance issues, and a single isolated incident rarely meet it absent aggravating circumstances."
          }
        },
        {
          "@type": "Question",
          "name": "What is constructive dismissal in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Constructive dismissal occurs in Ontario when an employer unilaterally changes a fundamental term of employment to the point that the change amounts to a repudiation of the employment contract. If the employee does not accept the change and resigns within a reasonable time, they may claim wrongful dismissal damages equivalent to what they would have received had they been terminated without cause. Common examples include material reductions in compensation, significant demotion, geographic relocation, and toxic work environment created by harassment."
          }
        },
        {
          "@type": "Question",
          "name": "What is severance pay under the Ontario ESA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Severance pay under the ESA is separate from termination pay and applies only to employees with 5 or more years of service whose employer has a payroll of $2.5 million or more, or who was terminated as part of a mass layoff of 50 or more employees within a 6-month period. Severance pay is calculated at 1 week per year of service (including partial years, prorated) up to a maximum of 26 weeks."
          }
        }
      ]
    }
  ]
}`;

type ESARow = {
  service: string;
  termNotice: string;
  severancePay: string;
  notes: string;
};

const esaEntitlements: ESARow[] = [
  {
    service: "Less than 1 year",
    termNotice: "1 week",
    severancePay: "Not applicable (under 5 years service)",
    notes: "ESA minimum; probationary employees with less than 3 months get no ESA notice",
  },
  {
    service: "1 year to less than 2 years",
    termNotice: "2 weeks",
    severancePay: "Not applicable (under 5 years service)",
    notes: "Pay in lieu of notice = regular wages for notice period",
  },
  {
    service: "2 to 4 years",
    termNotice: "1 week per year (2-4 weeks)",
    severancePay: "Not applicable (under 5 years service)",
    notes: "Benefits must continue through notice period or be included in pay in lieu",
  },
  {
    service: "5 years",
    termNotice: "5 weeks",
    severancePay: "5 weeks (if $2.5M payroll or mass layoff)",
    notes: "Severance pay applies from 5 years if payroll threshold met",
  },
  {
    service: "6 to 7 years",
    termNotice: "6-7 weeks",
    severancePay: "6-7 weeks",
    notes: "Maximum combined ESA entitlement growing; still well below common law notice",
  },
  {
    service: "8+ years",
    termNotice: "8 weeks (ESA maximum)",
    severancePay: "Up to 26 weeks maximum",
    notes: "ESA termination pay caps at 8 weeks; common law notice may be 18-24 months for senior employees",
  },
];

type BardalRow = {
  factor: string;
  effect: string;
  notes: string;
};

const bardalFactors: BardalRow[] = [
  {
    factor: "Age",
    effect: "Older employees receive longer notice",
    notes: "Older employees face greater difficulty finding re-employment; age 50+ typically adds significantly to notice",
  },
  {
    factor: "Length of service",
    effect: "Longer service = longer notice",
    notes: "Each additional year adds approximately 1 month of notice in most cases; 20+ year employees can receive 24 months",
  },
  {
    factor: "Character of employment",
    effect: "More senior/specialized roles receive longer notice",
    notes: "Executive, managerial, and professional roles attract longer notice than entry-level positions",
  },
  {
    factor: "Availability of similar employment",
    effect: "Scarce comparable opportunities increase notice period",
    notes: "Niche specialization, geographic limitations, and market conditions are considered",
  },
  {
    factor: "Inducement to leave prior employer",
    effect: "Significant inducement adds to notice",
    notes: "If employer persuaded employee to leave secure position, short-service employees may receive enhanced notice",
  },
  {
    factor: "Economic conditions",
    effect: "Difficult job market can increase notice",
    notes: "Courts may consider prevailing conditions at the time of termination in assessing re-employment prospects",
  },
];

type JustCauseRow = {
  conduct: string;
  threshold: string;
  notes: string;
};

const justCauseExamples: JustCauseRow[] = [
  {
    conduct: "Theft or serious dishonesty",
    threshold: "Generally meets just cause",
    notes: "Single incident of theft typically justifies dismissal regardless of service length",
  },
  {
    conduct: "Insubordination",
    threshold: "Contextual — pattern required in most cases",
    notes: "Single act of insubordination rarely meets threshold; requires direct defiance of lawful order and prior warnings",
  },
  {
    conduct: "Workplace harassment / violence",
    threshold: "Single serious incident may be sufficient",
    notes: "Severity of the act, its impact on others, and employer&apos;s own policies are considered",
  },
  {
    conduct: "Performance issues",
    threshold: "Rarely just cause alone",
    notes: "Requires documented performance management, clear standards, opportunity to improve, and persistent failure",
  },
  {
    conduct: "Off-duty misconduct",
    threshold: "Must negatively affect employment relationship or employer reputation",
    notes: "Criminal conviction off duty is not automatically just cause; nexus to employment required",
  },
  {
    conduct: "Misrepresentation on resume",
    threshold: "Material misrepresentation may be just cause",
    notes: "Misrepresentation of credentials directly relevant to the role; discovered early in employment",
  },
];

const faqs = [
  {
    q: "What is the difference between ESA termination pay and common law notice in Ontario?",
    a: "ESA termination pay is the minimum statutory entitlement under the Employment Standards Act, 2000 — typically 1 week per year of service up to 8 weeks. Common law reasonable notice is a higher common law standard calculated using the Bardal factors (age, length of service, character of employment, availability of similar employment). Common law notice cannot be contracted out of below the ESA minimum. Most terminated employees in Ontario are entitled to significantly more under the common law than the ESA minimum.",
  },
  {
    q: "What is just cause for dismissal in Ontario?",
    a: "Just cause for dismissal in Ontario requires conduct so serious that it fundamentally undermines the employment relationship and makes continued employment untenable. Courts apply a contextual analysis considering the nature and severity of the misconduct, whether the employee was warned, the employee's length of service and record, and whether the conduct was proportionate. Just cause is a high threshold — minor misconduct, performance issues, and a single isolated incident rarely meet it absent aggravating circumstances.",
  },
  {
    q: "What is constructive dismissal in Ontario?",
    a: "Constructive dismissal occurs in Ontario when an employer unilaterally changes a fundamental term of employment to the point that the change amounts to a repudiation of the employment contract. If the employee does not accept the change and resigns within a reasonable time, they may claim wrongful dismissal damages equivalent to what they would have received had they been terminated without cause. Common examples include material reductions in compensation, significant demotion, geographic relocation, and toxic work environment created by harassment.",
  },
  {
    q: "What is severance pay under the Ontario ESA?",
    a: "Severance pay under the ESA is separate from termination pay and applies only to employees with 5 or more years of service whose employer has a payroll of $2.5 million or more, or who was terminated as part of a mass layoff of 50 or more employees within a 6-month period. Severance pay is calculated at 1 week per year of service (including partial years, prorated) up to a maximum of 26 weeks.",
  },
];

export default function OntarioEmploymentTerminationPayPage() {
  return (
    <>
      <Script id="ontario-employment-termination-pay-schema" type="application/ld+json">
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
            <span className="text-slate-900">Ontario Employment Termination Pay Guide</span>
          </div>
        </div>

        {/* Header */}
        <header className="py-16 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Employment Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Employment Termination Pay Guide 2024: ESA Minimums, Severance, and Wrongful Dismissal
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              ESA termination notice vs severance pay, Bardal factors for common law reasonable notice, just cause threshold, constructive dismissal, wrongful dismissal damages, and the duty to mitigate for Ontario employment lawyers.
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
              Employment termination is one of the most common matters Ontario employment lawyers handle. Whether acting for an employee seeking to maximize their severance entitlement or an employer looking to minimize exposure on a termination, a thorough understanding of the two-tier system — ESA minimums and common law reasonable notice — is essential.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ontario employment law operates on a two-track system. The Employment Standards Act, 2000 (ESA) sets minimum floors for termination pay and severance pay that cannot be contracted out of. The common law sets a higher standard of &quot;reasonable notice&quot; that applies absent a valid contractual provision capping notice at the ESA minimum.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers ESA entitlements, the Bardal factors for common law reasonable notice, just cause and its high threshold, constructive dismissal, wrongful dismissal damages, and the mitigation requirement.
            </p>
          </section>

          {/* ESA Minimums */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              ESA Termination Pay and Severance Pay: Statutory Minimums
            </h2>
            <p className="text-slate-700 mb-6">
              The ESA sets two distinct minimum entitlements on termination: termination pay (notice or pay in lieu) and severance pay (for qualifying employees). Both apply unless the employee is dismissed for wilful misconduct — the ESA standard for serious misconduct, which is lower than the common law just cause standard.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Service Length</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Termination Notice/Pay</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Severance Pay</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {esaEntitlements.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.service}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.termNotice}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.severancePay}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="text-amber-900 text-sm">
                <strong>Benefits during notice period:</strong> The employer must continue all benefits (group insurance, dental, RRSP contributions) through the statutory notice period. If the employer terminates benefits before the notice period expires, the value of lost benefits can be claimed as additional damages. This is a common oversight by Ontario employers.
              </p>
            </div>
          </section>

          {/* Bardal Factors */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Common Law Reasonable Notice: The Bardal Factors
            </h2>
            <p className="text-slate-700 mb-6">
              Bardal v Globe and Mail Ltd [1960] established the primary factors for calculating common law reasonable notice in Ontario. The reasonable notice period is determined by considering all relevant factors holistically — no mechanical formula is applied.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Bardal Factor</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Effect on Notice Period</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {bardalFactors.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.factor}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.effect}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="text-blue-900 text-sm">
                <strong>Practical ranges:</strong> Ontario courts have generally imposed a soft cap of 24 months for most employees. Senior executives with 20+ years of service, age 55+, and specialized skills have occasionally received 26-28 months. Entry-level employees with 2-3 years of service and broad transferable skills typically receive 2-4 months. Age 50+, 10+ years of service, management role: expect 12-18 months reasonable notice.
              </p>
            </div>
          </section>

          {/* Just Cause */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Just Cause for Dismissal in Ontario
            </h2>
            <p className="text-slate-700 mb-6">
              Just cause is a contextual assessment. Courts apply a three-step analysis: (1) Was the misconduct established? (2) Does the misconduct warrant dismissal in the context of the entire employment relationship? (3) Was dismissal a proportionate response? The employer bears the burden of proving just cause on a balance of probabilities.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Conduct</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Just Cause Threshold</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {justCauseExamples.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.conduct}</td>
                      <td className="px-5 py-4 text-sm">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                          row.threshold.includes("meets") ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
                        }`}>
                          {row.threshold}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Constructive Dismissal */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Constructive Dismissal in Ontario
            </h2>
            <p className="text-slate-700 mb-4">
              A constructive dismissal claim arises when an employer unilaterally and substantially changes a fundamental term of employment without the employee&apos;s consent. The employee must resign within a reasonable time after the change — acceptance of the new terms or continued employment without protest may waive the right to claim constructive dismissal.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Conduct Typically Constituting Constructive Dismissal</h3>
                <ul className="space-y-2">
                  {[
                    "Significant reduction in compensation (10%+ generally; 15%+ almost certainly)",
                    "Material demotion or reduction in responsibilities",
                    "Forced geographic relocation to a different city",
                    "Persistent workplace harassment by employer or with employer knowledge",
                    "Removal from management position or reporting structure changes",
                    "Wholesale change in job duties to a significantly lesser role",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-xs">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Conduct Generally Not Constructive Dismissal</h3>
                <ul className="space-y-2">
                  {[
                    "Reasonable performance management within the scope of the employment contract",
                    "Minor changes to work schedule, duties, or workplace location within commuting distance",
                    "Change to compensation within the range contemplated by the employment agreement",
                    "Temporary layoffs where the contract contemplates them or applicable statute permits",
                    "Change in reporting structure where responsibilities are otherwise maintained",
                    "Reasonable workplace rules or policies applied consistently",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-xs">
                      <span className="text-slate-400 font-bold mt-0.5">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
              Manage Employment Law Files with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">
              Atticus helps Ontario employment lawyers track limitation periods, manage trust accounting, and keep files LSO-compliant from retainer through resolution.
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
                { href: "/blog/ontario-wrongful-dismissal-guide", label: "Ontario Wrongful Dismissal Guide" },
                { href: "/blog/ontario-employment-standards-act", label: "Ontario Employment Standards Act Guide" },
                { href: "/blog/ontario-employment-contract", label: "Ontario Employment Contract Guide" },
                { href: "/blog/ontario-non-compete-agreement", label: "Ontario Non-Compete Agreement Guide" },
                { href: "/blog/ontario-labour-law", label: "Ontario Labour Law Guide" },
                { href: "/blog/ontario-human-rights-complaint", label: "Ontario Human Rights Complaint" },
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
