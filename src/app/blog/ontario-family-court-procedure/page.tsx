import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Family Court Procedure Guide 2024 | Forms, Case Conferences, and OCL Reports",
  description:
    "Ontario family court procedure: Family Law Rules and Forms, Superior Court vs Ontario Court of Justice, case management (case conference, settlement conference, trial management), Office of the Children's Lawyer (OCL), Voice of the Child reports, parenting assessments, and net family property statements.",
  openGraph: {
    title: "Ontario Family Court Procedure Guide 2024 | Forms, Case Conferences, and OCL Reports",
    description:
      "Family Law Rules, case conference procedure, OCL reports, parenting assessments, and net family property statements for Ontario family lawyers.",
    url: "https://getatticus.ca/blog/ontario-family-court-procedure",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-family-court-procedure" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Family Court Procedure Guide 2024: Forms, Case Conferences, and OCL Reports",
  "description": "Comprehensive guide to Ontario family court procedure including Family Law Rules, Forms, case management conferences, OCL reports, parenting assessments, and net family property statements.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-family-court-procedure",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-family-court-procedure"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between the Ontario Court of Justice and Superior Court of Justice for family law matters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario Court of Justice (OCJ) has jurisdiction over custody and access, child support, restraining orders under the Family Law Act, and child protection (CYFSA). It does not have jurisdiction over divorce, equalization of net family property, or property division (which require the Superior Court of Justice or the Unified Family Court). The Superior Court of Justice has jurisdiction over all family law matters including divorce, property, support, and parenting. The Unified Family Court (UFC) is a branch of the Superior Court in certain locations that handles all family law matters in one court."
      }
    },
    {
      "@type": "Question",
      "name": "What is a case conference in Ontario family court?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A case conference is a procedural court appearance before a judge or case management master (in some courts) to discuss the issues in the case, narrow them, and explore settlement. Under Rule 17 of the Family Law Rules, a case conference must be held before a motion can be brought (except in urgent situations). The judge at a case conference cannot impose a settlement — they can encourage settlement, give non-binding recommendations, and make procedural orders. Parties must file a Case Conference Brief (Form 17A or 17C) before the conference."
      }
    },
    {
      "@type": "Question",
      "name": "When does the Office of the Children's Lawyer get involved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Office of the Children's Lawyer (OCL) may be involved in Ontario family proceedings in several ways: (1) a judge may order a Voice of the Child report where the child's views and preferences need to be assessed; (2) the OCL may be asked to provide legal representation for a child in contentious custody or access proceedings; (3) the OCL may conduct a clinical investigator report (parenting assessment) examining each party's parenting abilities and the children's needs. OCL involvement is not guaranteed — the court must order it, and the OCL has discretion to accept or decline. Wait times for OCL reports can be significant in Ontario."
      }
    },
    {
      "@type": "Question",
      "name": "What is a net family property statement in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Net Family Property (NFP) Statement (Form 13B) is a sworn financial disclosure document filed in Ontario property equalization proceedings. Each spouse calculates their net family property: the value of all property on the valuation date (date of separation) minus debts and liabilities on the valuation date, minus the value of property owned on the date of marriage (excluding the matrimonial home), minus certain excluded property (inheritances, gifts from third parties, personal injury damages, life insurance proceeds). The spouse with the higher NFP owes the other spouse an equalization payment equal to half the difference."
      }
    }
  ]
}`;

const courtJurisdiction = [
  {
    court: "Ontario Court of Justice (OCJ)",
    jurisdiction: "Custody and access (Children&apos;s Law Reform Act), child support, restraining orders under FLA, child protection proceedings (CYFSA)",
    cannot: "Divorce, property division/equalization, division of matrimonial home",
    notes: "Located in all Ontario judicial districts; most common court for urgent child-related matters where parties are not divorcing",
  },
  {
    court: "Superior Court of Justice (SCJ)",
    jurisdiction: "All family law matters: divorce, equalization of NFP, property division, partition, support, custody/access, restraining orders",
    cannot: "N/A — full jurisdiction",
    notes: "Available in all 49 judicial districts; required for divorce and property claims; generally more formal procedure",
  },
  {
    court: "Unified Family Court (UFC)",
    jurisdiction: "All family law matters handled in one court; combines OCJ and SCJ jurisdiction",
    cannot: "N/A — full jurisdiction in UFC locations",
    notes: "Available in certain locations: Hamilton, Kingston, London, Barrie, Peterborough, Thunder Bay, and others; recommended by Law Commission as preferred model",
  },
];

const keyForms = [
  { form: "Form 8 — Application (General)", use: "Commencing most family proceedings (divorce, custody, support, property)" },
  { form: "Form 8A — Application (Divorce Only)", use: "Divorce-only applications without other claims" },
  { form: "Form 10 — Answer", use: "Responding party&apos;s response to Application; may include counter-application" },
  { form: "Form 13 — Financial Statement (Support Claims)", use: "Monthly income/expenses/assets/debts; required for all support claims; sworn" },
  { form: "Form 13.1 — Financial Statement (Property and Support)", use: "Full property disclosure including NFP calculation; required for property claims" },
  { form: "Form 13B — Net Family Property Statement", use: "Detailed NFP calculation with schedule of property at marriage date, separation date, excluded property" },
  { form: "Form 14B — Motion (without notice or on consent)", use: "Without-notice motions or consent orders" },
  { form: "Form 17A — Case Conference Brief (General)", use: "Brief for case conference; must be served and filed per Rule 17 timelines" },
  { form: "Form 17C — Settlement Conference Brief", use: "Settlement conference brief; more detailed than case conference; proposal for settlement" },
  { form: "Form 20 — Change Application", use: "Material change applications to vary existing support or parenting orders" },
  { form: "Form 35.1 — Parenting Claim Affidavit", use: "Mandatory affidavit for all parenting claims; addresses parenting history, plans, and best interests factors" },
];

const caseManagementSteps = [
  {
    step: "Originating Process",
    description: "Application (Form 8) issued; served on respondent within 30 days (Ontario) or 60 days (outside Ontario); Respondent files Answer within 30 days of service",
  },
  {
    step: "Financial Disclosure",
    description: "Both parties serve and file financial statements (Form 13 or 13.1) within time required; obligation to update financial disclosure as circumstances change (Rule 13)",
  },
  {
    step: "Case Conference (Rule 17)",
    description: "Mandatory before motion (except urgent); parties file Case Conference Briefs (Form 17A); judge may make procedural orders, encourage settlement, identify issues; no non-consent orders on the merits at case conference",
  },
  {
    step: "Motions (if required)",
    description: "After case conference; motion record (notice, affidavit, draft order); responding motion record; factums in some cases; oral hearing; judge can make interim orders",
  },
  {
    step: "Settlement Conference (Rule 17)",
    description: "Required before trial; parties file Settlement Conference Briefs (Form 17C); judge may make non-binding assessments of strength of positions; encourage settlement; a different judge hears the trial",
  },
  {
    step: "Trial Management Conference (Rule 17)",
    description: "Immediately before or at start of trial; address outstanding procedural issues, witnesses, expert reports, exhibits; trial scheduling",
  },
  {
    step: "Trial",
    description: "Full evidentiary hearing; affidavit evidence in chief in some courts (with live cross-examination); oral evidence in other courts; judge issues final order after final submissions",
  },
];

export default function OntarioFamilyCourtProcedurePage() {
  return (
    <>
      <Script id="ontario-family-court-procedure-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-family-court-procedure-faq" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Family Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Family Court Procedure Guide 2024
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              Family Law Rules and Forms, court jurisdiction (OCJ vs Superior
              Court vs UFC), case management stages, OCL involvement, parenting
              assessments, and net family property statements for Ontario family
              lawyers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Family Law</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Court Jurisdiction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Choosing the Right Court: OCJ, Superior Court, and UFC
            </h2>
            <div className="space-y-5">
              {courtJurisdiction.map((court, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-3">{court.court}</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-semibold text-green-700">Can hear: </span>
                      <span className="text-slate-600">{court.jurisdiction}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-red-700">Cannot hear: </span>
                      <span className="text-slate-600">{court.cannot}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-semibold text-slate-700">Notes: </span>
                      <span className="text-slate-600">{court.notes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Case Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Ontario Family Court Case Management: Seven Stages
            </h2>
            <div className="space-y-4">
              {caseManagementSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">{step.step}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Forms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Essential Ontario Family Law Forms
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Form</th>
                    <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {keyForms.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-mono text-amber-700 font-semibold text-xs">{row.form}</td>
                      <td className="px-4 py-3 text-slate-600">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* OCL */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Office of the Children&apos;s Lawyer (OCL)
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The OCL is a branch of the Ministry of the Attorney General that
              provides legal and clinical services for children involved in family
              law proceedings. OCL involvement requires a court order — it is not
              automatic.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Voice of the Child Report",
                  description: "OCL clinical investigator prepares a report on the child&apos;s views and preferences regarding parenting arrangements; does not include parenting assessment of the parents; completed by social worker or psychologist; typical wait: 3-6 months",
                },
                {
                  title: "Legal Representation",
                  description: "OCL may provide a lawyer to represent the child directly in contentious proceedings; lawyer receives instructions from the child (if child has sufficient maturity) or acts in child&apos;s best interests; available in contested custody/access and child protection",
                },
                {
                  title: "Clinical Investigation (Parenting Assessment)",
                  description: "Comprehensive assessment of both parents&apos; parenting capacity, the children&apos;s needs, and recommendations on parenting arrangements; most comprehensive OCL involvement; lengthy wait times (6-18+ months in some areas); may include psychological testing",
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4">
              <strong>Independent custody/parenting assessments:</strong> Parties
              may agree or a court may order a private parenting assessment under
              s.30 of the <em>Children&apos;s Law Reform Act</em> by a
              qualified professional (psychologist, social worker). Private
              assessments avoid OCL wait times but are costly ($10,000-$25,000+).
              The assessor must be agreed upon or court-appointed; assessor is
              not an advocate for either party.
            </p>
          </section>

          {/* NFP */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Net Family Property: Equalization Calculation
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Under Part I of the <em>Family Law Act</em>, each spouse is
              entitled to an equalization payment equal to half the difference
              in their net family property (NFP) on the valuation date (date of
              separation, unless another date is ordered).
            </p>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 font-mono text-sm mb-4">
              <p className="font-sans font-semibold text-slate-900 mb-3">NFP Formula (FLA s.4):</p>
              <p className="text-slate-700 mb-1">NFP = (Value of all property on valuation date)</p>
              <p className="text-slate-700 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;- (Debts and liabilities on valuation date)</p>
              <p className="text-slate-700 mb-1">&nbsp;&nbsp;&nbsp;&nbsp;- (Value of property owned on marriage date, excl. matrimonial home)</p>
              <p className="text-slate-700 mb-4">&nbsp;&nbsp;&nbsp;&nbsp;- (Excluded property under FLA s.4(2))</p>
              <p className="text-slate-700 mb-1">Equalization payment = (Higher NFP - Lower NFP) / 2</p>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">
              Excluded Property (FLA s.4(2))
            </h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex gap-3"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span>Property received as a gift or inheritance after marriage (but not income from it, unless gift specifies)</span></li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span>Damages or settlement for personal injuries (non-economic damages; income replacement amounts are not excluded)</span></li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span>Life insurance proceeds paid to the spouse on a third party&apos;s death</span></li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span>Property traced to excluded property</span></li>
              <li className="flex gap-3"><span className="text-amber-600 font-bold flex-shrink-0">•</span><span>Property excluded by domestic contract (marriage contract / cohabitation agreement)</span></li>
            </ul>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
              <strong>Matrimonial home exception:</strong> The matrimonial home
              has no deduction for pre-marriage value. Even if a spouse owned
              the home before marriage and brought it into the relationship as
              their sole property, the full value on the valuation date is
              included in NFP without deducting the pre-marriage value. This
              is one of the most significant FLA provisions for Ontario family
              lawyers to flag with clients.
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the difference between the Ontario Court of Justice and Superior Court of Justice for family law matters?",
                  a: "The Ontario Court of Justice (OCJ) has jurisdiction over custody and access, child support, restraining orders under the Family Law Act, and child protection proceedings (CYFSA). It does not have jurisdiction over divorce, equalization of net family property, or property division. The Superior Court of Justice has jurisdiction over all family law matters including divorce, property, support, and parenting. The Unified Family Court (UFC) handles all family law matters in one court at certain locations.",
                },
                {
                  q: "What is a case conference in Ontario family court?",
                  a: "A case conference is a procedural court appearance before a judge to discuss issues, narrow them, and explore settlement. Under Rule 17, a case conference must be held before a motion can be brought (except in urgent situations). The judge cannot impose a settlement at a case conference — they can encourage settlement, give non-binding recommendations, and make procedural orders. Parties must file a Case Conference Brief (Form 17A or 17C) before the conference.",
                },
                {
                  q: "When does the Office of the Children's Lawyer get involved?",
                  a: "The OCL may be involved when a judge orders: a Voice of the Child report (assessing the child's views and preferences); legal representation for the child; or a clinical investigation (parenting assessment). OCL involvement requires a court order — it is not automatic. The OCL has discretion to accept or decline involvement. Wait times for OCL reports can be significant in Ontario.",
                },
                {
                  q: "What is a net family property statement in Ontario?",
                  a: "A Net Family Property (NFP) Statement (Form 13B) is a sworn financial disclosure document filed in property equalization proceedings. Each spouse calculates their NFP: value of all property on the valuation date (separation date), minus debts and liabilities, minus property owned on the date of marriage (excluding the matrimonial home), minus certain excluded property. The spouse with the higher NFP owes the other an equalization payment equal to half the difference.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Manage Your Family Law Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Track limitation periods, manage trust accounting, and organize
              family law files with Atticus — built for Ontario solo and small
              law firms.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Related Ontario Law Guides
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-child-custody-law", label: "Ontario Child Custody Law" },
                { href: "/blog/ontario-spousal-support", label: "Ontario Spousal Support" },
                { href: "/blog/ontario-child-support-guidelines", label: "Ontario Child Support Guidelines" },
                { href: "/blog/ontario-family-law-separation-process", label: "Ontario Family Law Separation Process" },
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
