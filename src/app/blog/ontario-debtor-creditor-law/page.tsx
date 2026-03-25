import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Debtor-Creditor Law Guide 2024 | Garnishment, Writs, and Judgment Enforcement",
  description:
    "Ontario debtor-creditor law: obtaining and enforcing judgments, writs of seizure and sale, garnishment of wages and bank accounts, examination in aid of execution, PPSA security enforcement, and debtor exemptions. For Ontario creditors' rights and commercial lawyers.",
  openGraph: {
    title: "Ontario Debtor-Creditor Law Guide 2024 | Garnishment, Writs, and Judgment Enforcement",
    description:
      "Judgment enforcement, garnishment, writs of seizure and sale, examination in aid of execution, and PPSA enforcement under Ontario debtor-creditor law.",
    url: "https://getatticus.ca/blog/ontario-debtor-creditor-law",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-debtor-creditor-law" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Debtor-Creditor Law Guide 2024: Garnishment, Writs, and Judgment Enforcement",
  "description": "Comprehensive guide to Ontario debtor-creditor law including obtaining and enforcing judgments, writs of seizure and sale, garnishment of wages and bank accounts, examination in aid of execution, and PPSA security enforcement.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-debtor-creditor-law",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-debtor-creditor-law"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I enforce a judgment in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To enforce a money judgment in Ontario, the judgment creditor must first file the judgment with the Ontario enforcement office (Sheriff) and obtain a Writ of Seizure and Sale. The writ is then filed in the county/district where the debtor owns real property (through the land registry) or personal property. The Sheriff can seize and sell the debtor's non-exempt personal property. For wages or bank accounts, the creditor issues a Notice of Garnishment under Rule 60 of the Rules of Civil Procedure. A judgment can also be enforced by conducting an examination in aid of execution to discover the debtor's assets."
      }
    },
    {
      "@type": "Question",
      "name": "What property is exempt from seizure by creditors in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Ontario Execution Act, certain property is exempt from seizure by unsecured judgment creditors: household furniture and appliances up to $14,180; tools of the trade up to $14,405; one motor vehicle up to $7,117 (or more if needed for work); clothing for the debtor and dependants; pension plans and RRSPs (12-month contribution look-back for RRSPs under BIA); life insurance policies with a designated beneficiary. These exemptions are indexed periodically. Secured creditors enforcing against their specific collateral are not restricted by Execution Act exemptions."
      }
    },
    {
      "@type": "Question",
      "name": "How does wage garnishment work in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Rule 60.08 of the Ontario Rules of Civil Procedure, a judgment creditor issues a Notice of Garnishment to the debtor's employer (garnishee). The employer must pay a portion of the debtor's wages to the Sheriff, who pays the creditor. Under the Ontario Wages Act, only 20% of net wages can be garnished (with some exceptions for support orders). The Notice of Garnishment must be renewed every 6 years to remain in effect. Multiple creditors who have filed garnishments receive payments pro rata."
      }
    },
    {
      "@type": "Question",
      "name": "What is an examination in aid of execution?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An examination in aid of execution (Rule 60.18 RCP) allows a judgment creditor to examine the judgment debtor under oath about their assets, income, liabilities, and financial affairs, to discover assets available for enforcement. The debtor must attend and answer questions truthfully. An officer, director, or other person with knowledge of the debtor company's finances can be examined if the debtor is a corporation. Failure to attend or answer questions is contempt of court. Examination in aid of execution is one of the most powerful tools available to judgment creditors in Ontario."
      }
    }
  ]
}`;

const enforcementMethods = [
  {
    method: "Writ of Seizure and Sale (RCP Rule 60.07)",
    target: "Debtor's non-exempt personal property and real property",
    process: "File writ with Sheriff; Sheriff seizes and sells personal property; writ registered on title to land through land registry system binds real property",
    timeframe: "Writ valid 6 years; renewable; binds real property from date of registration",
    notes: "Priority among creditors: first to file writ against specific personal property has priority; for land, priority from registration date",
  },
  {
    method: "Garnishment (RCP Rule 60.08)",
    target: "Wages (employer garnishee), bank accounts (bank garnishee), amounts owed by third parties to debtor",
    process: "Serve Notice of Garnishment on garnishee; garnishee must pay amounts owed to Sheriff; Sheriff remits to judgment creditor",
    timeframe: "Notice of Garnishment valid 6 years; binds all debts owed when served and debts that become owed within 6 years",
    notes: "Wages Act: max 20% of net wages garnishable; bank accounts garnishable in full (no exemption for non-wages funds)",
  },
  {
    method: "Examination in Aid of Execution (RCP Rule 60.18)",
    target: "Judgment debtor (individual or corporate officer/director)",
    process: "Serve notice of examination; debtor attends and is examined under oath about assets, income, liabilities; creditor can ask about bank accounts, real estate, investments, pensions, transfers",
    timeframe: "Can be conducted multiple times; useful before and after other enforcement steps",
    notes: "Failure to attend or answer is contempt; court may impose sanctions; debtor cannot be examined more than once per 6 months without leave",
  },
  {
    method: "Charging Order (Mareva Injunction equivalent — Mareva order)",
    target: "Specific assets identified in order; freezing of assets pending judgment",
    process: "Court order freezing specific assets or prohibiting debtor from dissipating assets; post-judgment Mareva prevents asset hiding; pre-judgment requires showing real risk of dissipation",
    timeframe: "Until judgment satisfied or varied by court",
    notes: "Strong remedy; must demonstrate judgment debtor has assets in Ontario and real risk of dissipation or removal from jurisdiction",
  },
  {
    method: "Receiving Order / Judgment Creditor Receiver",
    target: "Debtor&apos;s business or specific income-producing assets",
    process: "Court appoints receiver to collect and manage debtor&apos;s assets (e.g., rents) and pay proceeds to judgment creditor; used where debtor has ongoing income or business",
    timeframe: "Ongoing until judgment satisfied",
    notes: "More expensive enforcement step; useful for commercial debtors with ongoing revenues (rent, royalties, business income)",
  },
];

const executionActExemptions = [
  { item: "Household furniture and appliances", amount: "$14,180" },
  { item: "Tools, instruments, and chattels used in trade or occupation", amount: "$14,405" },
  { item: "Motor vehicle (if not required for primary trade)", amount: "$7,117" },
  { item: "Motor vehicle (if required for primary trade)", amount: "Up to $14,405" },
  { item: "Clothing for the debtor and dependants", amount: "No dollar limit" },
  { item: "RRSP / RRIF (except contributions in last 12 months)", amount: "Full amount exempt (BIA/Execution Act)" },
  { item: "Pension plan benefits", amount: "Generally fully exempt" },
  { item: "Life insurance policy with designated beneficiary", amount: "Generally exempt from creditors" },
];

const ppsaEnforcement = [
  {
    step: "1. Default",
    description: "Debtor defaults on secured obligation; secured party must identify specific default triggering enforcement rights under security agreement",
  },
  {
    step: "2. Demand / Notice (PPSA s.63 and s.244 BIA)",
    description: "For all or substantially all assets of a commercial debtor, secured party must give 10 days BIA s.244 notice before enforcing; demand letter sent to debtor",
  },
  {
    step: "3. Seizure of Collateral",
    description: "Secured party entitled to seize collateral under security agreement and PPSA; must not breach the peace; may require Sheriff assistance under court order for contested seizures",
  },
  {
    step: "4. Notice of Disposition (PPSA s.63)",
    description: "Before selling collateral, secured party must give PPSA s.63 notice to debtor and other secured parties registered against the same collateral; standard notice period 15 days (consumer) / 10 days (commercial)",
  },
  {
    step: "5. Disposition",
    description: "Secured party may sell collateral by public auction or private sale (commercially reasonable manner); proceeds applied first to enforcement costs, then to secured obligation",
  },
  {
    step: "6. Surplus / Deficiency",
    description: "Net proceeds exceeding secured obligation must be paid to other secured parties in priority order then to debtor; if proceeds are insufficient, secured party may sue for deficiency as unsecured claim",
  },
];

export default function OntarioDebtorCreditorLawPage() {
  return (
    <>
      <Script id="ontario-debtor-creditor-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-debtor-creditor-faq" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Commercial Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Debtor-Creditor Law Guide 2024
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              Obtaining and enforcing judgments, writs of seizure and sale,
              garnishment of wages and bank accounts, examination in aid of
              execution, debtor exemptions, and PPSA security enforcement for
              Ontario creditors&apos; rights and commercial lawyers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>14 min read</span>
              <span>•</span>
              <span>Commercial Law</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ontario Judgment Enforcement Framework
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Obtaining a judgment is only the first step. Ontario&apos;s
              enforcement regime is governed primarily by Rule 60 of the{" "}
              <em>Rules of Civil Procedure</em> (R.R.O. 1990, Reg. 194) and the
              provincial statutes: the <em>Execution Act</em> (exemptions and
              priorities), the <em>Creditors&apos; Relief Act, 2010</em>
              (pro-rata distribution among unsecured creditors), and the{" "}
              <em>Wages Act</em> (wage garnishment limits). PPSA enforcement
              is governed by Part V of the <em>Personal Property Security
              Act</em>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              For consumer debtors, enforcement rights are limited by the{" "}
              <em>Consumer Protection Act, 2002</em> and the Execution Act
              exemptions. For commercial debtors, enforcement options are broader
              but interact with secured creditor rights and potential insolvency
              proceedings under the BIA or CCAA.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
              <strong>Limitation period:</strong> A judgment in Ontario is
              enforceable for 10 years from the date of judgment (s.43 Courts
              of Justice Act). A writ of execution is valid for 6 years from
              issuance and must be renewed. After 10 years, a creditor must
              obtain leave to revive the judgment.
            </div>
          </section>

          {/* Enforcement Methods */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Judgment Enforcement Methods in Ontario
            </h2>
            <div className="space-y-6">
              {enforcementMethods.map((method, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-3">{method.method}</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-semibold text-slate-700">Target: </span>
                      <span className="text-slate-600">{method.target}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Timeframe: </span>
                      <span className="text-slate-600">{method.timeframe}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-semibold text-slate-700">Process: </span>
                      <span className="text-slate-600">{method.process}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-semibold text-amber-700">Notes: </span>
                      <span className="text-slate-600">{method.notes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Garnishment Detail */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Garnishment of Wages and Bank Accounts
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Wage Garnishment (Wages Act)
                </h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>Maximum 20% of net wages may be garnished per pay period</li>
                  <li>Exception: Crown support enforcement (Family Responsibility Office) may garnish more</li>
                  <li>Employer/garnishee must pay garnished amounts to Sheriff within 10 days of pay period</li>
                  <li>Failure to comply: garnishee becomes personally liable to judgment creditor</li>
                  <li>Garnishment of employment income is restricted — cannot garnish EI, CPP, social assistance</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Bank Account Garnishment
                </h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>Bank accounts are garnishable under RCP Rule 60.08 — no 20% cap (unlike wages)</li>
                  <li>Notice of Garnishment served on bank as garnishee; bank must pay account balance and any future deposits (for ongoing obligations) to Sheriff</li>
                  <li>Joint accounts: only debtor&apos;s interest is garnishable — bank must pay pro-rata share</li>
                  <li>Funds in trust (e.g., law firm trust accounts, payroll accounts designated as trust) are not the debtor&apos;s property and are not garnishable</li>
                  <li>RRSP/RRIF accounts are generally exempt from garnishment (BIA/Execution Act)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Exemptions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Debtor Exemptions Under the Ontario Execution Act
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              These exemptions apply to unsecured judgment enforcement only.
              Secured creditors enforcing against their specific collateral are
              not restricted by Execution Act exemptions.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Exempt Property</th>
                    <th className="text-right px-4 py-3 font-semibold">Exemption Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {executionActExemptions.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-slate-700">{row.item}</td>
                      <td className="px-4 py-3 text-right font-semibold text-amber-700">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm mt-3">
              Dollar amounts are indexed under O. Reg. 657/05 and updated
              periodically. Verify current amounts with the Ministry of the
              Attorney General.
            </p>
          </section>

          {/* PPSA Enforcement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              PPSA Security Enforcement: Six Steps
            </h2>
            <div className="space-y-4">
              {ppsaEnforcement.map((step, i) => (
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

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I enforce a judgment in Ontario?",
                  a: "To enforce a money judgment in Ontario, the judgment creditor must first file the judgment with the Ontario enforcement office (Sheriff) and obtain a Writ of Seizure and Sale. The writ is then filed in the county/district where the debtor owns real property (through the land registry) or personal property. The Sheriff can seize and sell the debtor's non-exempt personal property. For wages or bank accounts, the creditor issues a Notice of Garnishment under Rule 60 of the Rules of Civil Procedure.",
                },
                {
                  q: "What property is exempt from seizure by creditors in Ontario?",
                  a: "Under the Ontario Execution Act, certain property is exempt from seizure by unsecured judgment creditors: household furniture and appliances up to $14,180; tools of the trade up to $14,405; one motor vehicle up to $7,117 (or more if needed for work); clothing for the debtor and dependants; pension plans and RRSPs (12-month contribution look-back for RRSPs under BIA); and life insurance policies with a designated beneficiary. Secured creditors enforcing against their specific collateral are not restricted by Execution Act exemptions.",
                },
                {
                  q: "How does wage garnishment work in Ontario?",
                  a: "Under Rule 60.08 of the Ontario Rules of Civil Procedure, a judgment creditor issues a Notice of Garnishment to the debtor's employer (garnishee). The employer must pay a portion of the debtor's wages to the Sheriff, who pays the creditor. Under the Ontario Wages Act, only 20% of net wages can be garnished (with some exceptions for support orders). The Notice of Garnishment must be renewed every 6 years to remain in effect.",
                },
                {
                  q: "What is an examination in aid of execution?",
                  a: "An examination in aid of execution (Rule 60.18 RCP) allows a judgment creditor to examine the judgment debtor under oath about their assets, income, liabilities, and financial affairs. The debtor must attend and answer questions truthfully. An officer or director can be examined if the debtor is a corporation. Failure to attend or answer questions is contempt of court. The debtor cannot be examined more than once per 6 months without leave of the court.",
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
              Manage Your Creditors&apos; Rights Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Track limitation periods, manage trust accounting, and organize
              debtor-creditor files with Atticus — built for Ontario solo and
              small law firms.
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
                { href: "/blog/ontario-bankruptcy-insolvency", label: "Ontario Bankruptcy and Insolvency Law" },
                { href: "/blog/ontario-secured-transactions", label: "Ontario PPSA and Secured Transactions" },
                { href: "/blog/small-claims-court-ontario", label: "Ontario Small Claims Court" },
                { href: "/blog/ontario-mortgage-default", label: "Ontario Mortgage Default" },
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
