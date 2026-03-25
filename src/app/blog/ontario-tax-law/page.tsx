import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Tax Law — Income Tax Act, HST/GST, and Corporate Tax for Ontario Lawyers | Atticus Blog",
  description:
    "Comprehensive guide to Ontario tax law for lawyers: Income Tax Act key provisions, HST/GST obligations under the Excise Tax Act, corporate tax rates, lawyer trust reporting obligations, and CRA audit and objection procedures for Ontario practitioners.",
  openGraph: {
    title: "Ontario Tax Law — Income Tax Act, HST/GST, and Corporate Tax",
    description:
      "ITA RSC 1985 c 1, Excise Tax Act HST/GST, Ontario corporate tax rates, trust account reporting, legal fee deductibility, CRA audit and objection procedures for Ontario business lawyers.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-tax-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-tax-law" },
};

export default function OntarioTaxLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Tax Law — Income Tax Act, HST/GST, and Corporate Tax",
    description:
      "ITA RSC 1985 c 1, Excise Tax Act HST/GST, Ontario corporate tax rates, trust account reporting, and CRA objection/appeal procedures for Ontario practitioners.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-tax-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-tax-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Tax Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Tax Law — Income Tax Act, HST/GST, and Corporate Tax
            </h1>
            <p className="text-slate-300 text-lg">
              Key provisions of the Income Tax Act, Ontario HST obligations, corporate tax rates,
              trust account reporting, legal fee deductibility, and CRA objection and appeal
              procedures — essential context for Ontario business and tax lawyers.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>March 2026</span>
              <span>&#8226;</span>
              <span>13 min read</span>
            </div>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">

            <h2>Income Tax Act Framework</h2>
            <p>
              The Income Tax Act RSC 1985 c 1 (5th Supp) (ITA) is Canada&apos;s primary federal
              income tax statute. It is administered by the Canada Revenue Agency (CRA) and imposes
              tax on the income of persons resident in Canada and on Canadian-source income earned
              by non-residents. Provincial income taxes are harmonized with the federal system:
              Ontario imposes income tax under the Taxation Act SO 2007 c 11 Sch A, which adopts
              the federal tax base with Ontario-specific adjustments.
            </p>
            <p>
              The ITA taxes &quot;income from a source&quot; — employment, business, and property —
              under Part I. Capital gains are included in income at the inclusion rate (one-half
              of the gain, increased to two-thirds for gains realized after June 24, 2024 for
              corporations and trusts and for gains exceeding $250,000 for individuals — Budget
              2024 proposal subject to legislative enactment). Division B of Part I (ss.3-108)
              computes net income; Division C (ss.109-114.2) applies deductions to arrive at
              taxable income; Division E (ss.117-127.41) applies rates and calculates tax.
            </p>

            <h2>Corporate Tax Rates in Ontario</h2>
            <p>
              Federal and Ontario provincial tax rates combine to produce the effective rate
              applicable to corporations:
            </p>
            <ul>
              <li>
                <strong>Canadian-Controlled Private Corporation (CCPC) — Small Business:</strong>
                Federal small business rate of 9% applies to the first $500,000 of active business
                income (the &quot;small business deduction&quot; under ITA s.125). Ontario&apos;s
                small business tax rate is 3.2% on the first $500,000. Combined rate: 12.2%.
                The small business deduction is phased out for CCPCs with taxable capital employed
                in Canada between $10 million and $50 million.
              </li>
              <li>
                <strong>CCPC — General Rate:</strong> Federal general corporate rate 15% after
                the general rate reduction (ITA s.123.4). Ontario general corporate tax rate
                11.5%. Combined general rate: 26.5%.
              </li>
              <li>
                <strong>Investment Income in CCPCs:</strong> ITA Part IV refundable tax (38.67%)
                on portfolio dividends received by private corporations. ITA Part I tax on
                investment income at 50.67% combined federal (including RDTOH mechanism)
                and Ontario rates, with the refundable element recovered when dividends are
                paid (the RDTOH — Refundable Dividend Tax on Hand mechanism). Effective after-tax
                rate on investment income in CCPCs designed to approximate individual top marginal
                rates to remove deferral advantages.
              </li>
              <li>
                <strong>Non-CCPC (public corporations and others):</strong> Federal 15% +
                Ontario 11.5% = 26.5% combined general corporate rate.
              </li>
            </ul>

            <h2>Individual Income Tax — Ontario Rates</h2>
            <p>
              Ontario individual income tax rates for 2025 (combined federal + Ontario):
            </p>
            <ul>
              <li>Up to $57,375 (federal basic): approximately 20.05% combined</li>
              <li>$57,376 to $114,750: approximately 24.15% combined</li>
              <li>$114,751 to $150,000: approximately 29.65% combined</li>
              <li>$150,001 to $220,000: approximately 31.48% combined</li>
              <li>$220,001 to $246,752: approximately 33.89% combined</li>
              <li>Over $246,752: approximately 53.53% combined (federal 33% + Ontario top rate 20.53%)</li>
            </ul>
            <p>
              Ontario&apos;s surtax (s.2(1.1) Taxation Act 2007) — a tax on provincial tax — applies
              at 20% on Ontario income tax over $5,315 and at a further 36% on Ontario income tax
              over $6,802 (approximate 2025 thresholds), pushing the Ontario top marginal rate
              to 20.53% and the combined top rate to approximately 53.53%.
            </p>

            <h2>HST/GST — Excise Tax Act</h2>
            <p>
              Ontario harmonized sales tax (HST) is imposed under the Excise Tax Act RSC 1985 c E-15
              (ETA), as Ontario harmonized its provincial retail sales tax with the federal GST
              effective July 1, 2010. The Ontario HST rate is 13% (5% federal + 8% provincial
              component). Suppliers of taxable supplies in the course of a commercial activity
              must register for HST if their taxable revenues exceed $30,000 in any calendar
              quarter or four consecutive quarters.
            </p>
            <p>
              Law firms are suppliers of taxable legal services and must collect and remit HST
              on all legal fees charged to clients, with limited exceptions. Key HST concepts
              for Ontario lawyers:
            </p>
            <ul>
              <li>
                <strong>Taxable supplies:</strong> Legal services are taxable at 13% Ontario HST
                (ETA Schedule V Part I lists legal aid services as an exempt supply; otherwise
                most legal services are fully taxable).
              </li>
              <li>
                <strong>Zero-rated supplies:</strong> Some legal services may be zero-rated when
                supplied to non-residents for use outside Canada (ETA Schedule VI Part V).
              </li>
              <li>
                <strong>Input tax credits (ITCs):</strong> Law firms may claim ITCs for HST paid
                on business inputs — office rent, supplies, software, professional services
                purchased in the course of making taxable supplies. ITCs must be claimed within
                four years of the reporting period in which the underlying supply was made.
              </li>
              <li>
                <strong>Trust account HST:</strong> Funds held in client trust accounts are not
                the law firm&apos;s income until earned — HST is collected and remitted on legal fees
                as they are billed, not when trust funds are received. The accounting treatment
                must align with when services are provided and invoiced.
              </li>
              <li>
                <strong>HST on disbursements:</strong> Disbursements made as agent for the client
                (where the client is the recipient of the third-party supply) pass through to
                the client without HST charged by the law firm. Disbursements that are expenses
                of the law firm re-billed to clients are subject to HST.
              </li>
            </ul>

            <h2>Trust Account Tax Reporting Obligations</h2>
            <p>
              Ontario lawyers who administer estate trusts, hold funds in constructive trusts,
              or receive large cash transactions have specific tax reporting obligations:
            </p>
            <ul>
              <li>
                <strong>T3 Trust Returns:</strong> Trusts with annual income over $500 must file
                a T3 return. Lawyers administering estate trusts, family trusts, or other formal
                trusts as trustee must file T3 returns. Amendments to the T3 regime (2024/2025)
                significantly expanded annual T3 filing requirements for bare trusts and agency
                arrangements, though these rules have been the subject of ongoing amendment and
                relief announcements.
              </li>
              <li>
                <strong>Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA):</strong>
                Law firms are designated reporting entities under the PCMLTFA for real estate and
                certain other transactions. Lawyers must comply with FINTRAC client identification,
                record-keeping, and suspicious transaction reporting requirements for applicable
                transactions, while being mindful of Law Society guidance on solicitor-client
                privilege limitations on these obligations.
              </li>
              <li>
                <strong>Large Cash Transaction Reports:</strong> Financial transactions involving
                cash of $10,000 or more must be reported to FINTRAC. Trust accounts must be
                monitored for structuring (breaking large cash amounts into smaller transactions
                to evade reporting).
              </li>
            </ul>

            <h2>CRA Audit and Objection Procedures</h2>
            <p>
              When the CRA reassesses a taxpayer&apos;s return, the taxpayer has 90 days from the
              date of the notice of (re)assessment to file a notice of objection under ITA s.165.
              The objection is reviewed by the CRA Appeals Division. If the objection is not
              resolved, the taxpayer may appeal to the Tax Court of Canada within 90 days of
              the CRA&apos;s confirmation or notification of reassessment following objection.
            </p>
            <p>
              The Tax Court of Canada has two procedures: the Informal Procedure (for amounts
              under $25,000 per year in dispute, or $50,000 for loss determinations) and the
              General Procedure. The General Procedure follows the Tax Court of Canada Rules
              (General Procedure). Appeals from the Tax Court on questions of law go to the
              Federal Court of Appeal, and from there to the Supreme Court of Canada with leave.
            </p>
            <p>
              The normal reassessment period under ITA s.152(3.1) is three years from the date
              of the original assessment (four years for non-CCPC corporations). There is no
              limitation period where the taxpayer has made a misrepresentation attributable to
              neglect, carelessness, wilful default, or fraud — the CRA may reassess at any
              time. Voluntary Disclosure Program (VDP) applications allow taxpayers to come
              forward before CRA contact to correct past non-compliance with penalty relief.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-emerald-900 mb-2">
                Manage Tax Law Matters with Atticus
              </h3>
              <p className="text-emerald-800 mb-4">
                Track CRA objection deadlines, manage tax litigation files, and keep trust
                accounts compliant — all in one platform built for Ontario law firms.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-lg transition"
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
