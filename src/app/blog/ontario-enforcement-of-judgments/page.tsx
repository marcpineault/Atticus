import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Enforcement of Judgments Guide 2024: Writs, Garnishment, Examination in Aid, and Sheriff",
  description:
    "Ontario judgment enforcement guide: writ of seizure and sale (Rules 60.07-60.18), garnishment of wages and bank accounts (Rule 60.08), examination in aid of execution (Rule 60.18), notice of garnishment, 20% wage exemption, priority among creditors, and judgment registration in land titles.",
  openGraph: {
    title: "Ontario Enforcement of Judgments 2024: Writs, Garnishment, and Examination in Aid",
    description:
      "Complete guide to enforcing judgments in Ontario — writ of seizure and sale, garnishment of wages and bank accounts, examination in aid of execution, notice of garnishment procedure, wage exemptions, creditor priority, and registering judgment against real property.",
    url: "https://getatticus.ca/blog/ontario-enforcement-of-judgments",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-enforcement-of-judgments" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Enforcement of Judgments Guide 2024: Writs, Garnishment, Examination in Aid, and Sheriff",
  "description": "Ontario judgment enforcement: writ of seizure and sale, garnishment of wages and bank accounts, examination in aid of execution, notice of garnishment, 20% wage exemption, creditor priority, and judgment registration against real property.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "datePublished": "2024-12-01",
  "url": "https://getatticus.ca/blog/ontario-enforcement-of-judgments"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you enforce a judgment in Ontario through a writ of seizure and sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A creditor with a monetary judgment in Ontario may issue a writ of seizure and sale under Rules of Civil Procedure Rule 60.07. The writ is filed with the Sheriff of the county or district where enforcement is sought. The Sheriff can then seize and sell the debtor's personal property (Rule 60.07(2)) and, if the judgment exceeds $5,000, the writ may be filed with the land registry office to bind and sell the debtor's real property (Rule 60.07(14)). The writ remains in force for six years and may be renewed. Priority among multiple writs against the same debtor is generally determined by the order in which writs are filed with the Sheriff."
      }
    },
    {
      "@type": "Question",
      "name": "What is the wage garnishment exemption in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a judgment creditor garnishes a debtor's wages in Ontario under Rule 60.08 of the Rules of Civil Procedure, only a portion of the debtor's net wages is subject to garnishment. Under the Wages Act, R.S.O. 1990, c. W.1, s.7(2), a debtor's wages are exempt from seizure or garnishment to the extent of 80% of net wages (wages after deductions required by statute). This means a creditor can typically garnish only 20% of the debtor's net wages. The court may vary this percentage by order. Support creditors under a family court order are not subject to the 80% exemption to the same extent."
      }
    },
    {
      "@type": "Question",
      "name": "What is an examination in aid of execution in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An examination in aid of execution under Rules of Civil Procedure Rule 60.18 is a court procedure that allows a judgment creditor to examine the judgment debtor — or the debtor's officers and directors if the debtor is a corporation — under oath about the debtor's assets, income, liabilities, and financial affairs. The purpose is to identify assets available for enforcement. The examination takes place before a court officer. Failure to attend or to answer questions may result in a contempt order. The creditor may also examine third parties who may have information about the debtor's property."
      }
    }
  ]
}`;

export default function OntarioEnforcementOfJudgmentsPage() {
  return (
    <>
      <Script id="ontario-enforcement-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-enforcement-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Civil Litigation
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Enforcement of Judgments Guide 2024: Writs, Garnishment, Examination in Aid, and Sheriff
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Writ of seizure and sale (Rule 60.07), garnishment of wages and bank accounts
              (Rule 60.08), notice of garnishment procedure, 20% wage garnishment
              exemption under the Wages Act, examination in aid of execution (Rule 60.18),
              creditor priority, and registering judgment against real property.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>Overview of Judgment Enforcement in Ontario</h2>
            <p>
              Obtaining a judgment is only the first step. A judgment creditor must take
              active enforcement steps to collect the amount owed. In Ontario, civil judgment
              enforcement is governed primarily by Rule 60 of the <em>Rules of Civil Procedure</em>,
              R.R.O. 1990, Reg. 194. The principal enforcement mechanisms are: the writ of
              seizure and sale; garnishment; and examination in aid of execution.
            </p>
            <p>
              The limitation period for enforcing a judgment in Ontario is 10 years from
              the date of the order: <em>Limitations Act, 2002</em>, s.16(1)(b). A judgment
              may be renewed by commencing a new action on the judgment debt before the
              limitation period expires.
            </p>

            <h2>Writ of Seizure and Sale: Rule 60.07</h2>
            <p>
              A writ of seizure and sale is the primary tool for enforcing a monetary judgment
              in Ontario. The creditor files the writ with the Sheriff of the county or district
              where the debtor resides or has assets. The writ authorizes the Sheriff to seize
              and sell the debtor&apos;s personal property and, subject to registration requirements,
              to bind and sell the debtor&apos;s real property.
            </p>

            <h3>Issuing the Writ</h3>
            <p>
              After judgment, the creditor prepares a writ of seizure and sale in the Form 60A
              prescribed by the Rules and files it with the local Sheriff&apos;s office and, where
              real property enforcement is sought, with the land registry office for the county
              where the property is situated.
            </p>

            <h3>Duration and Renewal</h3>
            <p>
              A writ of seizure and sale remains in force for six years from the date of
              issue. It may be renewed for successive six-year periods before expiry.
              A writ that has expired cannot be revived; the creditor must issue a new writ
              (Rule 60.07(4)-(5)).
            </p>

            <h3>Seizing and Selling Personal Property</h3>
            <p>
              The Sheriff may seize and sell the debtor&apos;s personal property under the writ.
              The proceeds are applied first to the costs of the seizure and sale, then to
              the judgment debt and post-judgment interest. The Sheriff distributes surplus
              proceeds to the debtor.
            </p>
            <p>
              Certain personal property is exempt from seizure under the{" "}
              <em>Execution Act</em>, R.S.O. 1990, c. E.24, including: necessary and ordinary
              wearing apparel and bedding for the debtor and family (s.2(a)); household
              furniture, utensils, equipment, food, and fuel not exceeding $11,300 total
              (s.2(b)); tools, instruments, and chattels ordinarily used in the debtor&apos;s
              business, profession, or occupation not exceeding $11,300 (s.2(c)); and one motor
              vehicle not exceeding $11,300 in value (s.2(d)).
            </p>

            <h3>Enforcement Against Real Property</h3>
            <p>
              A writ filed in the land registry office for the county where the debtor has
              real property binds the debtor&apos;s freehold and leasehold interests in that
              county. Filing the writ does not automatically sell the property — the creditor
              must direct the Sheriff to proceed with a Sheriff&apos;s sale after the writ has
              been on file for at least 30 days (Rule 60.07(14)).
            </p>
            <p>
              A writ filed in the land registry will appear on a title search, which may
              prevent the debtor from selling or mortgaging the property without satisfying
              the judgment. This makes the writ an effective tool even where the creditor
              does not immediately pursue a Sheriff&apos;s sale.
            </p>

            <h3>Priority Among Creditors</h3>
            <p>
              Where multiple creditors have filed writs against the same debtor, priority
              in the distribution of proceeds from a Sheriff&apos;s sale of personal property
              is generally determined by the order in which writs were filed with the Sheriff.
              However, secured creditors with PPSA security interests that have priority over
              the judgment creditor may claim ahead of unsecured judgment creditors.
            </p>

            <h2>Garnishment: Rule 60.08</h2>
            <p>
              Garnishment allows a judgment creditor to intercept money owed to the debtor by
              a third party (the &quot;garnishee&quot;) — typically an employer, bank, or account debtor.
              The garnishee is required to pay the debt owed to the debtor directly to the
              Sheriff until the judgment is satisfied or the garnishment is set aside.
            </p>

            <h3>Notice of Garnishment</h3>
            <p>
              To initiate garnishment, the creditor files an affidavit confirming the judgment
              amount and the existence of a debt owed to the debtor by the garnishee, and
              obtains a notice of garnishment from the court office. The notice of garnishment
              is then served on: the garnishee (typically by mail); the debtor; and the Sheriff
              (Rule 60.08(3)).
            </p>
            <p>
              Within 10 days of being served, the garnishee must pay to the Sheriff the
              amount it owes to the debtor (or will owe within 10 days), up to the amount
              of the judgment (Rule 60.08(8)). If the garnishee disputes owing money to the
              debtor, it may file a notice of dispute.
            </p>

            <h3>Wage Garnishment and the Wages Act Exemption</h3>
            <p>
              When wages are garnished, the <em>Wages Act</em>, R.S.O. 1990, c. W.1, s.7(2)
              provides that 80% of net wages are exempt from seizure. &quot;Net wages&quot; means
              wages after deductions required by statute (income tax, CPP, EI). The garnishee
              employer is only required to pay 20% of the debtor&apos;s net wages to the Sheriff.
            </p>
            <p>
              The court may vary the 80% exemption on motion where the debtor can show
              financial hardship, or where the creditor can show exceptional circumstances.
              The Wages Act exemption does not apply to the full extent where the debt arises
              from a family law support order — Family Responsibility Office (FRO) garnishment
              for support operates under the <em>Family Responsibility and Support Arrears
              Enforcement Act, 1996</em> and may capture a larger share of wages.
            </p>

            <h3>Bank Account Garnishment</h3>
            <p>
              A judgment creditor may garnish the debtor&apos;s bank account by serving a notice
              of garnishment on the debtor&apos;s bank. The bank is a garnishee for the amount on
              deposit at the time of service. Funds deposited after service of the notice
              are not captured by that garnishment — the creditor must issue additional notices
              to capture future deposits.
            </p>
            <p>
              Certain government payments deposited into bank accounts may be protected from
              garnishment under federal law — for example, Employment Insurance benefits and
              Canada Pension Plan payments are protected under their respective statutes.
            </p>

            <h2>Examination in Aid of Execution: Rule 60.18</h2>
            <p>
              Where a creditor does not know what assets the debtor has, an examination in
              aid of execution (formerly &quot;debtor&apos;s examination&quot;) allows the creditor to
              examine the debtor under oath about their financial affairs.
            </p>

            <h3>Who Can Be Examined</h3>
            <p>
              The creditor may examine: the debtor personally; where the debtor is a
              corporation, any officer or director; and any other person who may have
              information about the debtor&apos;s property (Rule 60.18(1)-(2)). The examination
              is conducted before a court officer and is under oath.
            </p>

            <h3>Scope of Examination</h3>
            <p>
              The examination may cover any matter relevant to enforcement of the judgment,
              including: the debtor&apos;s current and recent income and employment; bank accounts
              and financial institution relationships; real property owned; personal property
              of value; debts owed to the debtor; transfers of property in the preceding years;
              and reasons for non-payment.
            </p>

            <h3>Consequences of Non-Attendance</h3>
            <p>
              If the debtor fails to attend the examination or refuses to answer questions,
              the creditor may bring a contempt motion. A contempt order may result in fines
              or, in serious cases, imprisonment until compliance.
            </p>

            <h2>Registering a Judgment in the Land Registry</h2>
            <p>
              Filing a writ of seizure and sale in the appropriate land registry office registers
              the judgment as a charge on the debtor&apos;s real property in that county. Any
              purchaser or mortgagee taking title after registration of the writ takes subject
              to the creditor&apos;s interest.
            </p>
            <p>
              A judgment registered in the land registry will appear on title when the debtor
              attempts to sell or refinance, forcing the debtor to satisfy the judgment to
              convey clear title. This is often the most effective enforcement tool where the
              debtor owns real property.
            </p>

            <h2>Costs of Enforcement</h2>
            <p>
              The costs of enforcement — Sheriff&apos;s fees, registration fees, and legal costs
              — are generally recoverable from the debtor in addition to the judgment amount,
              subject to the court&apos;s costs assessment. Creditors should maintain detailed
              records of all enforcement costs incurred.
            </p>

            <h2>Practice Points for Ontario Civil Litigation Lawyers</h2>
            <ul>
              <li>
                File the writ of seizure and sale in the land registry office at the same
                time as filing with the Sheriff — this binds real property and creates
                pressure on the debtor at low cost.
              </li>
              <li>
                Serve a notice of garnishment on all banks where the debtor may have
                accounts; the creditor can identify banks through the examination in aid
                of execution.
              </li>
              <li>
                Use the examination in aid of execution to map the debtor&apos;s assets before
                choosing which enforcement mechanisms to deploy; an unproductive Sheriff&apos;s
                sale is a waste of time and money.
              </li>
              <li>
                Monitor the writ expiry date and renew before the six-year period expires
                to avoid losing priority.
              </li>
              <li>
                Where the debtor is insolvent and has multiple creditors, consider whether
                a bankruptcy petition may be more effective than individual enforcement
                (which may be stayed if the debtor goes bankrupt).
              </li>
              <li>
                For support enforcement, direct the client to the Family Responsibility Office
                (FRO), which has broader garnishment powers under the Family Responsibility
                and Support Arrears Enforcement Act.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Civil Litigation Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track limitation periods for judgment renewal, manage enforcement files, monitor
              writ expiry dates, and run LSO-compliant trust accounting — all in one Ontario platform.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-civil-procedure", label: "Ontario Civil Procedure" },
                { href: "/blog/ontario-limitation-periods", label: "Ontario Limitation Periods" },
                { href: "/blog/ontario-debtor-creditor-law", label: "Ontario Debtor-Creditor Law" },
                { href: "/ontario-civil-litigation-lawyer", label: "Ontario Civil Litigation Software" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
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
        </section>
      </div>
    </>
  );
}
