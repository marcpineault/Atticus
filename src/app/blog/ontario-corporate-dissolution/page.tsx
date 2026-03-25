import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Corporate Dissolution: Voluntary Winding Up and Dissolution of OBCA Corporations",
  description:
    "Complete guide to dissolving an Ontario corporation: voluntary dissolution under OBCA s.237, articles of dissolution, distribution of assets, creditor protections, CRA tax clearance certificates, director liability after dissolution, and revival of dissolved corporations.",
  openGraph: {
    title: "Ontario Corporate Dissolution: Voluntary Winding Up and Dissolution of OBCA Corporations",
    description:
      "How to dissolve an Ontario corporation: OBCA s.237 voluntary dissolution, articles of dissolution, asset distribution, CRA tax clearance, director liability, and revival.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-corporate-dissolution",
    siteName: "Atticus",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-corporate-dissolution" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Corporate Dissolution: Voluntary Winding Up and Dissolution of OBCA Corporations",
  "description": "Complete guide to dissolving an Ontario corporation under the OBCA: voluntary dissolution, articles of dissolution, asset distribution, creditor protections, CRA tax clearance, director liability, and revival of dissolved corporations.",
  "author": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://getatticus.ca/blog/ontario-corporate-dissolution"
  }
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you dissolve an Ontario corporation voluntarily?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under OBCA s.237, a corporation with no property and no liabilities may dissolve by filing articles of dissolution signed by all directors. If the corporation has property or liabilities, shareholders must pass a special resolution (two-thirds majority) authorizing dissolution, after which the corporation winds up its affairs, pays creditors, and distributes remaining property to shareholders before filing articles of dissolution."
      }
    },
    {
      "@type": "Question",
      "name": "Do you need a CRA tax clearance certificate to dissolve an Ontario corporation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You are not legally required to obtain a CRA tax clearance certificate before filing articles of dissolution under the OBCA, but it is strongly advisable. Without a clearance certificate, directors remain personally liable under ITA s.227.1 for unremitted source deductions and ETA s.323 for unremitted HST/GST. A clearance certificate from CRA confirms all taxes have been assessed and provides directors with protection from post-dissolution CRA assessments."
      }
    },
    {
      "@type": "Question",
      "name": "Can a dissolved Ontario corporation be revived?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under OBCA s.241, a corporation that has been dissolved may apply to the Director under the OBCA for revival. On revival, the corporation is deemed to have continued as if it had not been dissolved. This can be useful where a dissolved corporation is named as a defendant, has assets discovered after dissolution, or needs to enforce a contract entered before dissolution."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to directors liability after a corporation is dissolved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dissolution does not automatically extinguish director personal liability. Directors remain personally liable for: unremitted source deductions under ITA s.227.1 (two-year limitation from ceasing to be director); unremitted HST/GST under ETA s.323; unpaid wages under OBCA s.131 (six months, two-year limitation). Directors should obtain CRA tax clearance certificates and ensure all employment obligations are satisfied before dissolution."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between dissolution and winding up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Winding up refers to the process of realizing assets, paying creditors, and distributing surplus to shareholders. Dissolution is the legal termination of the corporation's existence — filed with the Ontario government by submitting articles of dissolution. Dissolution follows and completes the winding up process. Under the OBCA, both voluntary and court-ordered winding up are possible."
      }
    }
  ]
}`;

export default function OntarioCorporateDissolutionPage() {
  return (
    <>
      <Script id="ontario-corporate-dissolution-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-corporate-dissolution-faq" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                Corporate Law
              </span>
              <span className="text-slate-400 text-sm">January 2025 · 13 min read</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Ontario Corporate Dissolution: Voluntary Winding Up and Dissolution of OBCA Corporations
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Dissolving an Ontario corporation involves more than filing articles of dissolution.
              Directors, shareholders, and their counsel need to navigate creditor obligations,
              asset distribution, CRA tax clearance, and ongoing personal liability exposure
              before the corporation legally ceases to exist.
            </p>
          </header>

          <div className="prose prose-slate max-w-none">
            <h2>1. Statutory Framework: OBCA vs CBCA</h2>
            <p>
              Ontario corporations incorporated under the <em>Business Corporations Act</em>, R.S.O. 1990,
              c. B.16 (&quot;OBCA&quot;) dissolve under the OBCA. Federal corporations incorporated under
              the <em>Canada Business Corporations Act</em>, R.S.C. 1985, c. C-44 (&quot;CBCA&quot;) dissolve
              under the CBCA. This guide addresses OBCA dissolution. CBCA dissolution follows a
              similar structure but is administered by Corporations Canada rather than the Ontario
              Director.
            </p>

            <h2>2. Voluntary Dissolution: OBCA Section 237</h2>
            <p>
              The OBCA provides two pathways to voluntary dissolution:
            </p>

            <h3>2.1 Dissolution Without Property or Liabilities</h3>
            <p>
              Under OBCA s.237(1), a corporation that has no property and no liabilities may dissolve
              by filing articles of dissolution signed by all directors. This is the simplest form of
              dissolution and is appropriate for shell companies or holding companies that have already
              distributed all assets and paid all debts.
            </p>

            <h3>2.2 Dissolution With Property or Liabilities</h3>
            <p>
              Under OBCA s.237(2), a corporation with property or liabilities must:
            </p>
            <ol>
              <li>
                Pass a special resolution of shareholders (two-thirds of votes cast) authorizing
                the corporation to dissolve and directing the directors to wind up the
                corporation&apos;s affairs;
              </li>
              <li>Wind up the corporation&apos;s affairs;</li>
              <li>Pay, satisfy, or provide adequately for all creditors;</li>
              <li>Distribute remaining property among shareholders in accordance with their respective entitlements; and</li>
              <li>File articles of dissolution.</li>
            </ol>

            <p>
              The articles of dissolution are filed with the Ontario Director under the OBCA.
              On the date shown on the certificate of dissolution, the corporation ceases to exist
              as a legal entity.
            </p>

            <h2>3. Winding Up the Corporation&apos;s Affairs</h2>

            <h3>3.1 Realizing Assets</h3>
            <p>
              Before dissolution, the corporation must realize (convert to cash) or distribute in
              specie its assets. Real property, equipment, intellectual property, receivables,
              and other assets must be dealt with prior to filing articles of dissolution.
              Outstanding contracts should be completed, assigned, or terminated.
            </p>

            <h3>3.2 Priority of Payments: Creditors First</h3>
            <p>
              Creditors must be paid before any distribution is made to shareholders. The general
              rule is that dissolution does not extinguish debts owed to creditors. Directors
              who authorize distributions to shareholders while the corporation has outstanding
              creditors may face personal liability for those debts.
            </p>
            <p>
              The order of payment generally follows the priority of claims:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Priority</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Category</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">1</td>
                    <td className="border border-slate-200 px-4 py-3">Secured creditors</td>
                    <td className="border border-slate-200 px-4 py-3">PPSA security interests, mortgages, charges</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">2</td>
                    <td className="border border-slate-200 px-4 py-3">CRA Crown claims</td>
                    <td className="border border-slate-200 px-4 py-3">Source deductions, HST/GST, corporate income tax</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">3</td>
                    <td className="border border-slate-200 px-4 py-3">Employee wages</td>
                    <td className="border border-slate-200 px-4 py-3">ESA s.81 — up to $10,000 per employee preferred</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">4</td>
                    <td className="border border-slate-200 px-4 py-3">Unsecured creditors</td>
                    <td className="border border-slate-200 px-4 py-3">Trade creditors, unsecured loans, professional fees</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">5</td>
                    <td className="border border-slate-200 px-4 py-3">Shareholders</td>
                    <td className="border border-slate-200 px-4 py-3">Distribution of surplus; preferred before common</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>3.3 Distribution to Shareholders</h3>
            <p>
              After all creditors are paid or adequately provided for, surplus assets may be
              distributed to shareholders. If there are multiple classes of shares, the articles
              of the corporation (and any shareholders&apos; agreement) govern the order and amount
              of distribution among classes. Preferred shareholders with liquidation preferences
              receive their entitlement before common shareholders.
            </p>

            <h2>4. CRA Tax Clearance Certificate</h2>
            <p>
              A CRA tax clearance certificate (Form TX19) confirms that the corporation has no
              outstanding federal tax liabilities. While it is not a statutory precondition to filing
              articles of dissolution under the OBCA, obtaining a clearance certificate before
              distributing assets to shareholders is strongly advisable for two reasons:
            </p>
            <ol>
              <li>
                <strong>Director liability protection</strong>: Without a clearance certificate,
                directors remain jointly and severally liable under ITA s.227.1 for unremitted
                source deductions (EI, CPP, income tax) and under ETA s.323 for unremitted
                HST/GST — even after dissolution.
              </li>
              <li>
                <strong>Shareholder claw-back risk</strong>: If distributions are made before
                CRA issues a clearance certificate, CRA may assess the corporation&apos;s tax
                liabilities and pursue directors personally for the amount distributed.
              </li>
            </ol>
            <p>
              CRA clearance certificate applications can take several months. Practitioners
              advise clients to file the clearance certificate application immediately after
              the corporation&apos;s final tax return is filed, before distributing assets to shareholders.
            </p>

            <h2>5. Final Tax Returns</h2>
            <p>
              A corporation that dissolves must file a final T2 corporate income tax return
              covering the period from the start of the last taxation year to the dissolution date.
              The final return is due within six months of the end of the last taxation year
              (ITA s.150(1)(a)). Depending on the corporation&apos;s year-end and the timing of dissolution,
              multiple partial-year returns may be required.
            </p>
            <p>
              On dissolution, deemed dispositions under the ITA may trigger tax on accrued gains
              in assets, including capital gains on shares, real property, or eligible capital
              property. Tax counsel should be engaged to plan the dissolution sequence to minimize
              tax exposure.
            </p>

            <h2>6. HST/GST on Dissolution</h2>
            <p>
              Distributions of property to shareholders on dissolution may constitute a taxable
              supply under the <em>Excise Tax Act</em> if the corporation is an HST/GST registrant
              and the property distributed has not been used exclusively in an exempt supply.
              In particular, distributions of capital property and real property to shareholders
              may trigger HST/GST obligations. The joint venture election and other planning tools
              may be available depending on the facts.
            </p>

            <h2>7. Employment Standards Act Obligations</h2>
            <p>
              A corporation that terminates employees on dissolution must comply with the
              <em>Employment Standards Act, 2000</em> (&quot;ESA&quot;) minimum termination and severance pay
              obligations:
            </p>
            <ul>
              <li>
                <strong>Notice or termination pay</strong>: ESA s.57 — one week per year of service
                up to eight weeks (for individual terminations) or enhanced group termination notice
                (ESA s.58) if 50 or more employees are terminated within four weeks.
              </li>
              <li>
                <strong>Severance pay</strong>: ESA s.64 — one week per year of service up to
                26 weeks, if employee has five or more years of service and the corporation has
                a payroll of $2.5 million or more.
              </li>
            </ul>
            <p>
              Common law reasonable notice obligations may exceed ESA minimums. Winding up
              counsel should advise on both ESA floor obligations and common law exposure
              for each terminated employee.
            </p>

            <h2>8. Director Personal Liability After Dissolution</h2>
            <p>
              Dissolution does not extinguish director personal liability. Key ongoing exposures include:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Liability</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Statute</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Scope</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Limitation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Source deductions</td>
                    <td className="border border-slate-200 px-4 py-3">ITA s.227.1</td>
                    <td className="border border-slate-200 px-4 py-3">Joint and several; due diligence defence</td>
                    <td className="border border-slate-200 px-4 py-3">2 years from ceasing director</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">HST/GST</td>
                    <td className="border border-slate-200 px-4 py-3">ETA s.323</td>
                    <td className="border border-slate-200 px-4 py-3">Joint and several; due diligence defence</td>
                    <td className="border border-slate-200 px-4 py-3">2 years from ceasing director</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">Wages (6 months)</td>
                    <td className="border border-slate-200 px-4 py-3">OBCA s.131</td>
                    <td className="border border-slate-200 px-4 py-3">Joint and several for six months&apos; wages</td>
                    <td className="border border-slate-200 px-4 py-3">2 years from ceasing director</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">ESA obligations</td>
                    <td className="border border-slate-200 px-4 py-3">ESA 2000</td>
                    <td className="border border-slate-200 px-4 py-3">Ministry enforcement; director liability in some contexts</td>
                    <td className="border border-slate-200 px-4 py-3">2 years under Limitations Act 2002</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>9. Involuntary Dissolution by the Director</h2>
            <p>
              The Director under the OBCA may cancel a corporation&apos;s charter involuntarily in
              certain circumstances:
            </p>
            <ul>
              <li>
                <strong>Failure to file annual returns</strong> (OBCA s.240): After notice and
                a waiting period, the Director may cancel the charter of a corporation that
                has failed to file required annual information returns under the Corporations
                Information Act (&quot;CIA&quot;).
              </li>
              <li>
                <strong>Failure to comply with the Act</strong>: The Director may apply to
                the court under OBCA s.248 for dissolution where the corporation has not
                complied with provisions of the Act.
              </li>
            </ul>
            <p>
              Involuntary dissolution does not relieve directors of personal liability for
              obligations accrued before dissolution.
            </p>

            <h2>10. Revival of Dissolved Corporations</h2>
            <p>
              Under OBCA s.241, any interested person may apply to the Director to revive a
              dissolved corporation. On revival, the corporation is deemed to have continued in
              existence as if it had not been dissolved. This is important in several contexts:
            </p>
            <ul>
              <li>A creditor discovers the corporation was dissolved before paying an outstanding debt;</li>
              <li>The dissolved corporation is named as a defendant in litigation;</li>
              <li>Assets are discovered after dissolution that were not distributed;</li>
              <li>A contract or proceeding requires the corporation to be in existence.</li>
            </ul>
            <p>
              Revival restores the corporation to existence and allows proceedings to continue
              or be commenced against it. After revival, the corporation remains liable for all
              obligations that would have existed but for the dissolution.
            </p>

            <h2>11. Court-Ordered Winding Up</h2>
            <p>
              Under OBCA s.207, the Superior Court of Justice may order the winding up of a
              corporation in certain circumstances, including:
            </p>
            <ul>
              <li>Oppression remedy proceedings where winding up is an appropriate remedy;</li>
              <li>Where the corporation is being operated fraudulently or with intent to deceive;</li>
              <li>Where it is just and equitable to do so;</li>
              <li>
                Deadlock among directors or shareholders making it impossible to manage
                the corporation.
              </li>
            </ul>
            <p>
              Court-ordered winding up is administered through a court-appointed liquidator.
              The liquidator realizes assets, pays creditors, and distributes surplus to shareholders
              under court supervision. This process is more formal, costly, and time-consuming
              than voluntary dissolution.
            </p>

            <h2>12. Practical Dissolution Checklist</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Step</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Action</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">1</td>
                    <td className="border border-slate-200 px-4 py-3">Pass special resolution</td>
                    <td className="border border-slate-200 px-4 py-3">Two-thirds majority; authorize dissolution and winding up</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">2</td>
                    <td className="border border-slate-200 px-4 py-3">Notify creditors</td>
                    <td className="border border-slate-200 px-4 py-3">Identify all outstanding liabilities; provide reasonable notice</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">3</td>
                    <td className="border border-slate-200 px-4 py-3">Terminate employees</td>
                    <td className="border border-slate-200 px-4 py-3">ESA minimums; ROE filings; Record of Employment</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">4</td>
                    <td className="border border-slate-200 px-4 py-3">File final returns</td>
                    <td className="border border-slate-200 px-4 py-3">T2 final corporate return; HST/GST final return; T4s</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">5</td>
                    <td className="border border-slate-200 px-4 py-3">Apply for CRA clearance</td>
                    <td className="border border-slate-200 px-4 py-3">Form TX19; wait for clearance before distributing to shareholders</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">6</td>
                    <td className="border border-slate-200 px-4 py-3">Pay creditors</td>
                    <td className="border border-slate-200 px-4 py-3">In order of priority; obtain releases where possible</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">7</td>
                    <td className="border border-slate-200 px-4 py-3">Distribute to shareholders</td>
                    <td className="border border-slate-200 px-4 py-3">After CRA clearance; preferred before common; document basis</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">8</td>
                    <td className="border border-slate-200 px-4 py-3">Close bank accounts</td>
                    <td className="border border-slate-200 px-4 py-3">After all disbursements are complete</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3">9</td>
                    <td className="border border-slate-200 px-4 py-3">File articles of dissolution</td>
                    <td className="border border-slate-200 px-4 py-3">ServiceOntario — Form 11 articles of dissolution</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">10</td>
                    <td className="border border-slate-200 px-4 py-3">Retain corporate records</td>
                    <td className="border border-slate-200 px-4 py-3">OBCA requires retention for specified periods after dissolution</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>13. Limitations Act 2002</h2>
            <p>
              Claims arising out of dissolution transactions (including director liability claims
              by creditors) are subject to the general two-year limitation period under the
              <em>Limitations Act, 2002</em>, running from the date the claimant discovered or
              reasonably ought to have discovered the claim. The ultimate 15-year limitation
              period applies.
            </p>
            <p>
              Director liability claims under ITA s.227.1 and ETA s.323 have a specific two-year
              limitation period running from the date the director ceased to be a director.
              OBCA s.131 wage liability similarly has a two-year limitation from ceasing to be director.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>How do you dissolve an Ontario corporation voluntarily?</h3>
            <p>
              Under OBCA s.237, a corporation with no property and no liabilities may dissolve
              by filing articles of dissolution signed by all directors. If the corporation has
              property or liabilities, shareholders must pass a special resolution authorizing
              dissolution. The corporation then winds up its affairs, pays all creditors, distributes
              remaining property to shareholders, and files articles of dissolution with the
              Ontario Director.
            </p>

            <h3>Do you need a CRA tax clearance certificate to dissolve an Ontario corporation?</h3>
            <p>
              It is not a statutory requirement under the OBCA but is strongly advisable. Without
              a clearance certificate, directors remain personally liable for unremitted source
              deductions and HST/GST even after dissolution. Distributing assets to shareholders
              before obtaining clearance exposes directors to post-dissolution assessments by CRA.
            </p>

            <h3>Can a dissolved Ontario corporation be revived?</h3>
            <p>
              Yes — under OBCA s.241, any interested person may apply to revive a dissolved
              corporation. On revival, the corporation is deemed to have continued in existence
              as if it had not been dissolved. This is commonly used where the dissolved corporation
              is named in litigation or where assets are discovered after dissolution.
            </p>

            <h3>What happens to directors&apos; liability after a corporation is dissolved?</h3>
            <p>
              Dissolution does not extinguish director personal liability. Directors remain liable
              for unremitted source deductions (ITA s.227.1), HST/GST (ETA s.323), and unpaid wages
              (OBCA s.131) for obligations accrued before dissolution. The two-year limitation period
              runs from the date the director ceased to be a director, not from dissolution.
            </p>

            <h3>What is the difference between dissolution and winding up?</h3>
            <p>
              Winding up is the process of realizing assets, paying creditors, and distributing
              surplus to shareholders. Dissolution is the formal legal termination of the
              corporation&apos;s existence, effected by filing articles of dissolution with the
              Ontario Director. Dissolution follows and completes winding up.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-8">
              This article is for general informational purposes only and does not constitute legal advice.
              Corporate dissolution involves significant tax, employment, and liability considerations.
              Consult qualified Ontario legal and tax counsel before proceeding.
            </p>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Managing Your Ontario Corporate Practice with Atticus
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Atticus helps Ontario corporate lawyers track deadlines, manage client matters,
                and stay on top of compliance obligations — including dissolution checklists,
                annual return reminders, and limitation period alerts. Built specifically for
                Ontario law firms.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Try Atticus Free
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/ontario-directors-duties", label: "Ontario Directors' Duties: Fiduciary Duty and Personal Liability" },
                { href: "/blog/ontario-derivative-action", label: "Ontario Derivative Actions Under the OBCA and CBCA" },
                { href: "/blog/ontario-corporate-governance", label: "Ontario Corporate Governance" },
                { href: "/blog/ontario-shareholder-agreement", label: "Ontario Shareholder Agreements" },
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
          </div>
        </article>
      </div>
    </>
  );
}
