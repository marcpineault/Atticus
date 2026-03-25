import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Bankruptcy and Insolvency Guide 2024 | BIA, CCAA, and Proposals",
  description:
    "Ontario bankruptcy and insolvency law: BIA consumer and commercial bankruptcy, Division I and II proposals, CCAA restructuring, receiverships, and creditor remedies. Practical guide for Ontario insolvency lawyers.",
  openGraph: {
    title: "Ontario Bankruptcy and Insolvency Guide 2024 | BIA, CCAA, and Proposals",
    description:
      "BIA proposals, CCAA restructuring, receiverships, and creditor remedies under Ontario insolvency law. For Ontario insolvency and commercial lawyers.",
    url: "https://getatticus.ca/blog/ontario-bankruptcy-insolvency",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-bankruptcy-insolvency" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Bankruptcy and Insolvency Guide 2024: BIA, CCAA, and Proposals",
  "description": "Comprehensive guide to Ontario bankruptcy and insolvency law including BIA bankruptcy, Division I and II proposals, CCAA restructuring, receiverships, and creditor remedies.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-bankruptcy-insolvency",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-bankruptcy-insolvency"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between BIA bankruptcy and a BIA proposal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the BIA, a bankruptcy involves an assignment in bankruptcy or a bankruptcy order, which vests the debtor's property in a trustee for distribution to creditors. A BIA proposal (Division I for larger debtors or Division II consumer proposals) allows the debtor to propose a repayment arrangement to creditors as an alternative to bankruptcy. If a proposal is accepted and approved, the debtor avoids bankruptcy and retains assets while repaying creditors on modified terms."
      }
    },
    {
      "@type": "Question",
      "name": "When does a company qualify for CCAA proceedings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Companies' Creditors Arrangement Act (CCAA) applies to insolvent companies with claims against them exceeding $5 million. CCAA proceedings are commenced by filing an application in the Superior Court of Justice (Ontario), and the court appoints a Monitor to supervise the restructuring. The CCAA provides an initial stay of proceedings and allows the debtor company to propose a plan of arrangement to its creditors."
      }
    },
    {
      "@type": "Question",
      "name": "What is a receivership in Ontario and when is it used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A receivership occurs when a secured creditor (typically a bank or lender) appoints a receiver over a debtor's assets, either privately under a security agreement or by court appointment under s.101 of the Courts of Justice Act or s.243 of the BIA. Receiverships are used when a secured creditor needs to take control of collateral to enforce its security. A court-appointed receiver has broader powers and provides more creditor protection than a privately appointed receiver."
      }
    },
    {
      "@type": "Question",
      "name": "What is a preference payment and when can a trustee set it aside?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A preference under s.95 of the BIA is a payment or transfer made to a creditor within three months before bankruptcy (12 months for non-arm's-length parties) that gives that creditor a preference over other creditors. A trustee can apply to court to set aside a preferential transfer and recover the funds for the estate. The debtor is presumed to have been insolvent at the time of the transfer, which the preferred creditor must rebut."
      }
    }
  ]
}`;

const biaProposalTypes = [
  {
    type: "Division I Proposal (BIA s.62–66)",
    who: "Individuals (with business debts over $250,000 excluding secured) and corporations",
    threshold: "No minimum debt threshold",
    process: "File notice of intention (NOI) or proposal with trustee; 10-day creditor notice; vote at creditors' meeting (majority in number, two-thirds in value); court approval required",
    failure: "Automatic bankruptcy if proposal rejected or not approved",
  },
  {
    type: "Division II Consumer Proposal (BIA s.66.11–66.4)",
    who: "Individuals with consumer debts under $250,000 (excluding mortgages on principal residence)",
    threshold: "Debts under $250,000",
    process: "Administrator (licensed insolvency trustee) files proposal; creditors vote by mail; majority in dollar value of proven claims approves; court deemed-approval if no objection",
    failure: "Deemed annulled if 2 payments missed; debtor may then file for bankruptcy",
  },
];

const ccaaStages = [
  {
    stage: "1. Initial Application",
    description: "Insolvent company (claims > $5M) applies to Superior Court; affidavit evidence of insolvency and restructuring viability; court appoints Monitor (licensed insolvency trustee)",
  },
  {
    stage: "2. Initial Order and Stay",
    description: "Court grants Initial Order imposing stay of proceedings against all creditors and claimants; stay typically 10 days initially (renewable); DIP (debtor-in-possession) financing charge often granted",
  },
  {
    stage: "3. Monitor Appointed",
    description: "Monitor supervises debtor, reviews cash flow, reports to court and creditors; Monitor has no management authority (unlike receiver) but provides independent oversight",
  },
  {
    stage: "4. Creditor Claims Process",
    description: "Claims bar order established; creditors file proofs of claim; disputed claims adjudicated; claims classified for voting (secured, unsecured, equity)",
  },
  {
    stage: "5. Plan of Arrangement Developed",
    description: "Debtor develops plan of compromise with creditors; may involve debt-for-equity swaps, haircuts, extended repayment; plan filed with Monitor and court",
  },
  {
    stage: "6. Creditor Vote",
    description: "Separate creditor meetings by class; each class votes — requires majority in number AND two-thirds in value; secured and unsecured creditors vote in separate classes",
  },
  {
    stage: "7. Court Sanction",
    description: "If creditors approve, debtor applies for court sanction of the plan; court considers whether plan is fair and reasonable; sanctioned plan binds all creditors in the class",
  },
  {
    stage: "8. Implementation",
    description: "Sanctioned plan implemented; Monitor files certificate of plan completion; CCAA proceedings terminated; ongoing covenants or oversight may continue post-sanction",
  },
];

const avoidanceActions = [
  {
    action: "Preference (BIA s.95)",
    period: "3 months (12 months non-arm's length)",
    test: "Payment that gives one creditor preference over others; insolvent debtor presumed",
    remedy: "Trustee may void transfer and recover funds for estate",
  },
  {
    action: "Reviewable Transaction (BIA s.96)",
    period: "1 year (5 years non-arm's length)",
    test: "Transfer at undervalue (less than fair market value) when debtor was insolvent or intent to defraud",
    remedy: "Court may declare void or require compensation equivalent to value transferred",
  },
  {
    action: "Fraudulent Conveyance (Fraudulent Conveyances Act / BIA s.91)",
    period: "No fixed time limit (intent-based)",
    test: "Transfer intended to defeat, hinder, delay, or defraud creditors",
    remedy: "Void as against creditors; may be recovered by trustee or judgment creditors",
  },
  {
    action: "Oppression (OBCA s.248 / CBCA s.241)",
    period: "Limitation period under Limitations Act 2002",
    test: "Conduct that is oppressive, unfairly prejudicial, or that unfairly disregards creditor interests (post-insolvency)",
    remedy: "Court may order compensation, winding up, or other equitable remedy",
  },
];

const creditorPriority = [
  { rank: "1", class: "Super-priority: Court-ordered charges (DIP, Administration, Director charges in CCAA)", notes: "Priority determined by court order; often rank ahead of all pre-existing security" },
  { rank: "2", class: "Secured creditors (first and subsequent ranking)", notes: "Priority determined by PPSA registration date, mortgage priority, or contractual subordination" },
  { rank: "3", class: "Preferred creditors (BIA s.136)", notes: "Funeral/testamentary expenses; costs of administration; 6 months unpaid wages (max $2,000 per employee); municipal taxes; Crown claims for source deductions" },
  { rank: "4", class: "Unsecured creditors (general)", notes: "Provable claims paid pro rata from estate surplus after preferred creditors; trade creditors, unsecured lenders, judgment creditors" },
  { rank: "5", class: "Deferred creditors", notes: "Claims of insiders (directors, officers, related parties) may be subordinated; equity claims rank last" },
];

export default function OntarioBankruptcyInsolvencyPage() {
  return (
    <>
      <Script id="ontario-bankruptcy-insolvency-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-bankruptcy-insolvency-faq" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Insolvency Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Bankruptcy and Insolvency Guide 2024
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              BIA bankruptcy and proposals, CCAA restructuring, receiverships,
              avoidance actions, and creditor priority for Ontario insolvency
              and commercial lawyers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>16 min read</span>
              <span>•</span>
              <span>Insolvency Law</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ontario Insolvency Framework
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Canadian insolvency law is federal. The primary statutes are the{" "}
              <strong>Bankruptcy and Insolvency Act (BIA)</strong> and the{" "}
              <strong>Companies&apos; Creditors Arrangement Act (CCAA)</strong>.
              Ontario legislation — including the <em>Courts of Justice Act</em>,
              the <em>Fraudulent Conveyances Act</em>, the <em>Assignments and
              Preferences Act</em>, and the <em>Personal Property Security Act
              (PPSA)</em> — interacts with the federal insolvency regime and is
              critical for enforcement and priority analysis.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ontario insolvency proceedings are heard in the Commercial List of
              the Superior Court of Justice in Toronto, and in regional courts
              elsewhere in the province. The Commercial List has developed
              specialized practice directions for CCAA proceedings, receiverships,
              and BIA assignments.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
              <strong>Limitation period note:</strong> The basic limitation period
              under the Ontario <em>Limitations Act, 2002</em> is 2 years from
              discovery. Avoidance actions under the BIA have their own look-back
              periods. Fraudulent conveyance claims have no fixed limitations period
              under the <em>Fraudulent Conveyances Act</em> but are subject to the
              general Limitations Act.
            </div>
          </section>

          {/* BIA Bankruptcy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              BIA Bankruptcy: Assignment and Bankruptcy Orders
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A bankruptcy under the BIA occurs either by voluntary assignment (the
              debtor assigns all their property to a licensed insolvency trustee) or
              by court order on a creditor&apos;s petition (petition for a receiving
              order). Upon bankruptcy, the debtor&apos;s property vests in the
              trustee, and the stay of proceedings under s.69.3 of the BIA
              automatically takes effect.
            </p>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Key BIA Provisions for Commercial Bankruptcies
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">BIA Section</th>
                    <th className="text-left px-4 py-3 font-semibold">Subject</th>
                    <th className="text-left px-4 py-3 font-semibold">Key Rule</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { section: "s.49", subject: "Voluntary assignment", rule: "Insolvent person may make assignment of all property to trustee; effective on filing" },
                    { section: "s.43", subject: "Petition for receiving order", rule: "Creditor with claim over $1,000 may petition court for receiving order against debtor who has committed an act of bankruptcy" },
                    { section: "s.42", subject: "Acts of bankruptcy", rule: "Includes: fraudulent conveyance, failure to meet liabilities as they become due, notice of suspension of payments, departure from Canada to defeat creditors" },
                    { section: "s.69.3", subject: "Automatic stay (individual)", rule: "Stay of all proceedings against individual bankrupt immediately upon assignment or receiving order" },
                    { section: "s.71", subject: "Vesting of property", rule: "Property of bankrupt vests in trustee upon bankruptcy (subject to exempt property)" },
                    { section: "s.67", subject: "Exempt property (Ontario)", rule: "Exempt from vesting: RRSP/RRIF contributions (12-month look-back), life insurance (designated beneficiary), exempt under Execution Act Ontario" },
                    { section: "s.121", subject: "Provable claims", rule: "Creditors must file proof of claim; claims that were present or reasonably foreseeable at date of bankruptcy are provable" },
                    { section: "s.178", subject: "Non-dischargeable debts", rule: "Alimony/support, fraud-related debts, student loans (7 years after ceasing full-time study), fines, and dividends obtained by fraud survive discharge" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-mono text-amber-700 font-semibold">{row.section}</td>
                      <td className="px-4 py-3 text-slate-700 font-medium">{row.subject}</td>
                      <td className="px-4 py-3 text-slate-600">{row.rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* BIA Proposals */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              BIA Proposals: Division I and Division II
            </h2>
            <div className="space-y-6">
              {biaProposalTypes.map((proposal, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {proposal.type}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-slate-700">Who qualifies: </span>
                      <span className="text-slate-600">{proposal.who}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Threshold: </span>
                      <span className="text-slate-600">{proposal.threshold}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-semibold text-slate-700">Process: </span>
                      <span className="text-slate-600">{proposal.process}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-semibold text-slate-700">Failure: </span>
                      <span className="text-slate-600">{proposal.failure}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4">
              <strong>Notice of Intention (NOI):</strong> A Division I debtor may
              file an NOI before filing a formal proposal to obtain a 30-day stay
              of proceedings (extendable on application). The NOI triggers an
              automatic stay and gives the debtor time to prepare a proposal.
              Failure to file a proposal within the NOI period results in
              automatic bankruptcy.
            </p>
          </section>

          {/* CCAA */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              CCAA Restructuring: Eight Stages
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Companies&apos; Creditors Arrangement Act (CCAA) provides a
              flexible restructuring framework for larger insolvent companies. CCAA
              proceedings are driven by court orders rather than the more
              prescriptive BIA procedure.
            </p>
            <div className="space-y-4">
              {ccaaStages.map((stage, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{stage.stage}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Receiverships */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Receiverships in Ontario
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A receivership is a creditor remedy — typically used by a secured
              lender to take control of a debtor&apos;s assets after default.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Private Receivership</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Appointed by secured creditor under a general security agreement
                  (GSA) or debenture without court order. Governed by security
                  agreement and the BIA (ss.244–246 — notice requirements).
                  Receiver acts as agent of debtor; secured creditor has limited
                  liability for receiver actions. Cheaper and faster than court
                  appointment.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Court-Appointed Receiver (BIA s.243 / CJA s.101)</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Receiver appointed by court order — typically on secured
                  creditor&apos;s application. Court-appointed receiver acts as
                  officer of the court; has broad powers as defined in the
                  appointment order. Provides greater protection against claims
                  against the receiver and cleaner title on asset sales. Preferred
                  where multiple claimants or complex assets are involved.
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-sm">
              <strong>BIA s.244 Notice:</strong> A secured creditor must give 10
              days&apos; notice before enforcing a security against all or
              substantially all of a debtor company&apos;s inventory, receivables,
              or other assets. Failure to give notice renders the appointment
              invalid. Notice is not required where the debtor consents or where
              the court orders otherwise.
            </p>
          </section>

          {/* Avoidance Actions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Avoidance Actions: Setting Aside Pre-Bankruptcy Transactions
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Action</th>
                    <th className="text-left px-4 py-3 font-semibold">Look-Back Period</th>
                    <th className="text-left px-4 py-3 font-semibold">Test</th>
                    <th className="text-left px-4 py-3 font-semibold">Remedy</th>
                  </tr>
                </thead>
                <tbody>
                  {avoidanceActions.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-slate-700 font-semibold">{row.action}</td>
                      <td className="px-4 py-3 text-slate-600">{row.period}</td>
                      <td className="px-4 py-3 text-slate-600">{row.test}</td>
                      <td className="px-4 py-3 text-slate-600">{row.remedy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Creditor Priority */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Creditor Priority in Ontario Insolvency
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Rank</th>
                    <th className="text-left px-4 py-3 font-semibold">Class</th>
                    <th className="text-left px-4 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {creditorPriority.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-center font-bold text-amber-700">{row.rank}</td>
                      <td className="px-4 py-3 text-slate-700 font-medium">{row.class}</td>
                      <td className="px-4 py-3 text-slate-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm mt-4">
              <strong>Crown claims:</strong> Source deduction arrears (CPP, EI,
              income tax) are deemed trusts under the <em>Income Tax Act</em> and
              the <em>Canada Pension Plan Act</em>. These deemed trusts give the
              Crown priority over secured creditors — including the PPSA
              first-ranking secured creditor — for unremitted source deductions.
              This is one of the most important priority traps in Ontario
              commercial lending.
            </p>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the difference between BIA bankruptcy and a BIA proposal?",
                  a: "Under the BIA, a bankruptcy involves an assignment in bankruptcy or a bankruptcy order, which vests the debtor&apos;s property in a trustee for distribution to creditors. A BIA proposal (Division I for larger debtors or Division II consumer proposals) allows the debtor to propose a repayment arrangement to creditors as an alternative to bankruptcy. If a proposal is accepted and approved, the debtor avoids bankruptcy and retains assets while repaying creditors on modified terms.",
                },
                {
                  q: "When does a company qualify for CCAA proceedings?",
                  a: "The Companies&apos; Creditors Arrangement Act (CCAA) applies to insolvent companies with claims against them exceeding $5 million. CCAA proceedings are commenced by filing an application in the Superior Court of Justice (Ontario), and the court appoints a Monitor to supervise the restructuring. The CCAA provides an initial stay of proceedings and allows the debtor company to propose a plan of arrangement to its creditors.",
                },
                {
                  q: "What is a receivership in Ontario and when is it used?",
                  a: "A receivership occurs when a secured creditor appoints a receiver over a debtor&apos;s assets, either privately under a security agreement or by court appointment under s.101 of the Courts of Justice Act or s.243 of the BIA. Receiverships are used when a secured creditor needs to take control of collateral to enforce its security. A court-appointed receiver has broader powers and provides more creditor protection than a privately appointed receiver.",
                },
                {
                  q: "What is a preference payment and when can a trustee set it aside?",
                  a: "A preference under s.95 of the BIA is a payment or transfer made to a creditor within three months before bankruptcy (12 months for non-arm&apos;s-length parties) that gives that creditor a preference over other creditors. A trustee can apply to court to set aside a preferential transfer and recover the funds for the estate. The debtor is presumed to have been insolvent at the time of the transfer, which the preferred creditor must rebut.",
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
              Manage Your Insolvency Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Track limitation periods, manage trust accounting, and organize
              insolvency matters with Atticus — built for Ontario solo and small
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
                { href: "/blog/ontario-secured-transactions", label: "Ontario Secured Transactions and PPSA" },
                { href: "/blog/ontario-commercial-tenancy", label: "Ontario Commercial Tenancy Law" },
                { href: "/blog/ontario-corporate-reorganization", label: "Ontario Corporate Reorganization" },
                { href: "/blog/ontario-tax-disputes", label: "Ontario Tax Disputes" },
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
