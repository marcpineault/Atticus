import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Bankruptcy and Insolvency Law — BIA, CCAA, and Creditor Remedies | Atticus Blog",
  description:
    "Comprehensive guide to Ontario bankruptcy and insolvency law: Bankruptcy and Insolvency Act RSC 1985, CCAA restructuring, receiverships, consumer proposals, proof of claim, fraudulent preferences, and creditor priority for Ontario lawyers.",
  openGraph: {
    title: "Ontario Bankruptcy and Insolvency Law — BIA, CCAA, and Creditor Remedies",
    description:
      "BIA RSC 1985 c B-3, Companies Creditors Arrangement Act RSC 1985 c C-36, receiverships, consumer proposals, proof of claim, fraudulent preferences, and priority rules for Ontario insolvency practitioners.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-bankruptcy-insolvency-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-bankruptcy-insolvency-law" },
};

export default function OntarioBankruptcyInsolvencyLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Bankruptcy and Insolvency Law — BIA, CCAA, and Creditor Remedies",
    description:
      "BIA RSC 1985 c B-3, CCAA RSC 1985 c C-36, receiverships, consumer proposals, proof of claim, fraudulent preferences, and creditor priority for Ontario insolvency practitioners.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-bankruptcy-insolvency-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-bankruptcy-insolvency-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Insolvency Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Bankruptcy and Insolvency Law — BIA, CCAA, and Creditor Remedies
            </h1>
            <p className="text-slate-300 text-lg">
              Bankruptcy and Insolvency Act, CCAA restructuring, receiverships, consumer proposals,
              proof of claim procedures, fraudulent preference and transfer at undervalue, and
              creditor priority — a guide for Ontario insolvency practitioners.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>March 2026</span>
              <span>&#8226;</span>
              <span>14 min read</span>
            </div>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">

            <h2>Federal Jurisdiction Over Bankruptcy and Insolvency</h2>
            <p>
              Bankruptcy and insolvency is a federal head of power under the Constitution Act 1867
              s.91(21). Canada&apos;s primary insolvency statutes are the Bankruptcy and Insolvency
              Act RSC 1985 c B-3 (BIA) and the Companies&apos; Creditors Arrangement Act RSC 1985
              c C-36 (CCAA). The BIA governs personal bankruptcies, consumer proposals, commercial
              proposals, and assignments in bankruptcy for companies with assets or liabilities
              below $5,000,000. The CCAA is available to insolvent companies with claims
              exceeding $5,000,000 and is used for major commercial restructurings.
            </p>
            <p>
              The Ontario Superior Court of Justice has jurisdiction over both BIA proceedings
              (in the commercial list in Toronto and other centres) and CCAA proceedings. Licensed
              Insolvency Trustees (LITs) — regulated by the Office of the Superintendent of
              Bankruptcy Canada — administer bankruptcy estates, consumer proposals, and commercial
              proposals under the BIA.
            </p>

            <h2>Bankruptcy Process — BIA</h2>
            <p>
              Bankruptcy may be initiated by: (1) voluntary assignment — the debtor assigns their
              property to an LIT by signing a Form 76 assignment (BIA s.49); or (2) bankruptcy
              order — a creditor owed $1,000 or more petitions the court to make a bankruptcy
              order based on an act of bankruptcy (BIA s.43). An act of bankruptcy (s.42) includes:
              fraudulent transfer/preference; appointment of a receiver; notice of suspension of
              business; or failure to meet liabilities generally as they become due (insolvency).
            </p>
            <p>
              Upon bankruptcy, the bankrupt&apos;s estate vests in the LIT as trustee. Property
              divisible among creditors includes all property owned by the bankrupt on the date
              of bankruptcy, subject to exemptions. Ontario exemptions under BIA s.67 and
              Ontario&apos;s Execution Act RSO 1990 c E.24 and O.Reg. 657/05 include: principal
              residence up to $10,000 in equity ($0 in Toronto CMA under revised regulations
              as of 2016); personal property exemptions of $5,650 household goods; motor vehicle
              up to $5,650; tools of trade up to $11,300 (certain professions higher); RRSP
              contributions more than 12 months before bankruptcy; life insurance designated
              beneficiary.
            </p>

            <h2>Consumer Proposals</h2>
            <p>
              A consumer proposal under BIA s.66.11 et seq. is available to individuals with
              total debts not exceeding $250,000 (excluding a mortgage on a principal residence).
              The debtor makes a formal offer to unsecured creditors, administered by an LIT
              acting as administrator. The proposal must provide a better return to creditors
              than bankruptcy.
            </p>
            <p>
              Consumer proposals require acceptance by a majority in number and value of voting
              unsecured creditors (or are deemed accepted if no creditor requests a meeting within
              45 days). Once accepted and approved by the court, a consumer proposal binds all
              unsecured creditors. The debtor makes payments over up to five years and, upon
              completion, receives a certificate of full performance discharging the proven
              unsecured debts. Consumer proposals do not affect secured creditors&apos; rights
              against their security.
            </p>

            <h2>Proof of Claim</h2>
            <p>
              Creditors participate in a bankruptcy estate by filing a proof of claim (Form 31 —
              BIA s.124). The deadline is the later of 30 days before the first meeting of
              creditors or 30 days after the date of the bankruptcy order. Late claims may be
              admitted but the late claimant has no right to disturb dividends already paid.
            </p>
            <p>
              Claims must specify the amount claimed, the nature of the debt, and any security
              held. Secured creditors must disclose and assign a value to their security;
              they may claim as unsecured for any deficiency. The LIT may disallow or reduce
              a claim; the creditor may appeal to the court (BIA s.135).
            </p>

            <h2>Fraudulent Preferences and Transactions at Undervalue</h2>
            <p>
              BIA Part VI (ss.91-101) contains provisions allowing the trustee to challenge
              pre-bankruptcy transactions that prejudice creditors:
            </p>
            <ul>
              <li>
                <strong>Fraudulent preferences (s.95):</strong> A transfer made by an insolvent
                debtor with intent to prefer one creditor over others, or that has the effect
                of giving one creditor a preference, within three months before bankruptcy (or
                12 months if the preferred party is non-arm&apos;s-length). The trustee may apply
                to the court to void the preference.
              </li>
              <li>
                <strong>Settlements and transactions at undervalue (s.96):</strong> Settlements
                or gifts made within one year before bankruptcy (five years for non-arm&apos;s-length
                transactions) where the debtor received no consideration or grossly inadequate
                consideration may be void against the trustee. The trustee may recover the
                property or its value.
              </li>
              <li>
                <strong>Fraudulent conveyances:</strong> Ontario&apos;s Fraudulent Conveyances Act
                RSO 1990 c F.29 and the federal Assignments and Preferences Act RSO 1990 c A.33
                also allow trustees and creditors to challenge transfers made to hinder, delay,
                or defraud creditors — without limitation periods for intentional fraudulent
                transfers.
              </li>
            </ul>

            <h2>CCAA Restructuring</h2>
            <p>
              The Companies&apos; Creditors Arrangement Act (CCAA) provides a flexible framework
              for restructuring insolvent companies with total claims exceeding $5,000,000. CCAA
              proceedings are initiated by a debtor company applying to the Ontario Superior Court
              (Commercial List) for an initial order. The initial order typically: (1) stays all
              proceedings against the company (the &quot;stay of proceedings&quot;) while
              restructuring is attempted; (2) appoints a Monitor — a licensed insolvency trustee
              who monitors the debtor&apos;s affairs and reports to the court; and (3) authorizes
              borrowing under a DIP (debtor-in-possession) facility with super-priority over
              existing claims.
            </p>
            <p>
              The restructuring plan must be approved by creditors (two-thirds in value and a
              majority in number of each class of creditors voting) and sanctioned by the court.
              Dissenting creditors within an approving class are bound if the statutory thresholds
              are met and the court is satisfied the plan is fair and reasonable.
            </p>

            <h2>Priority of Claims</h2>
            <p>
              In a bankruptcy, claims are paid in order of priority under BIA s.136:
              (1) Costs and fees of the trustee and administration; (2) Levy under s.147;
              (3) Wage claims — employee wages, salaries, commissions up to $2,000 per employee
              (or $1,000 in certain situations) for services in the six-month period preceding
              bankruptcy; (4) Municipal taxes assessed in the preceding two years; (5) Landlord&apos;s
              preferred rental claim (three months preceding bankruptcy and three months following);
              (6) Costs of preservation of assets; (7) Statutory employee claims under various
              provincial employment legislation; (8) Unsecured creditors who have filed proofs
              of claim pro rata.
            </p>
            <p>
              Secured creditors stand outside the bankruptcy estate with respect to their security
              — they realize on their security independently and participate in the estate only
              for any deficiency after realizing their security.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Manage Insolvency Matters with Atticus
              </h3>
              <p className="text-blue-800 mb-4">
                Track CCAA deadlines, proof of claim timelines, preference period calculations,
                and creditor client files — all in one platform built for Ontario commercial
                lawyers.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Try Atticus Free
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
