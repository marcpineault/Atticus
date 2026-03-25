import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Corporate Tax Law Guide 2024 | Corporate Tax for Business Lawyers",
  description:
    "A practical guide to Ontario corporate tax law for business lawyers: federal and Ontario corporate income tax rates, small business deduction, CCPC eligibility, dividends and the capital dividend account, corporate reorganizations, and CRA audit risks.",
  openGraph: {
    title: "Ontario Corporate Tax Law Guide 2024 | Corporate Tax for Business Lawyers",
    description:
      "Ontario corporate tax rates, small business deduction, CCPC, capital dividend account, eligible dividends, inter-corporate dividends, GST/HST for corporations, and CRA audit considerations. A guide for Ontario business lawyers.",
    url: "https://getatticus.ca/blog/ontario-corporate-tax",
    siteName: "Atticus",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Corporate Tax Law: Rates, CCPC, Dividends, and Reorganizations",
  "description": "Ontario corporate income tax rates, small business deduction, CCPC eligibility, capital dividend account, eligible dividends, and corporate reorganization tax considerations.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "url": "https://getatticus.ca/blog/ontario-corporate-tax",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-corporate-tax"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the corporate income tax rate for Ontario businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario corporations pay both federal and provincial income tax. The combined rates (2024) are: for Canadian-controlled private corporations (CCPCs) on active business income eligible for the small business deduction, the combined federal-Ontario rate is approximately 12.2% (9% federal + 3.2% Ontario). For active business income above the small business limit, the combined rate is approximately 26.5% (15% federal + 11.5% Ontario). Investment income in a CCPC is taxed at approximately 50.17% combined, with a refundable portion (RDTOH) returned when dividends are paid."
      }
    },
    {
      "@type": "Question",
      "name": "What is the small business deduction and who qualifies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The small business deduction (SBD) reduces the federal tax rate for Canadian-controlled private corporations (CCPCs) on the first $500,000 of qualifying active business income. A CCPC is a Canadian corporation that is not controlled directly or indirectly by public corporations or non-residents. The SBD is phased out for CCPCs with taxable capital employed in Canada between $10 million and $50 million (after 2021 amendments). A CCPC with passive investment income above $50,000 per year also faces an SBD grind ($1 of SBD reduced for every $5 of passive income above $50,000)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the capital dividend account for Ontario corporations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The capital dividend account (CDA) is a notional tax account maintained by a private corporation that allows certain tax-free amounts to be paid to shareholders as capital dividends. The CDA is credited with: the non-taxable portion of capital gains (50% of the gain as of 2024 general rates), capital dividends received from other private corporations, death benefits from life insurance policies owned by the corporation (minus the adjusted cost basis). An election under ITA s.83(2) allows the corporation to pay a capital dividend up to its CDA balance — the shareholder receives the dividend tax-free."
      }
    },
    {
      "@type": "Question",
      "name": "What are eligible versus non-eligible dividends in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eligible dividends are paid from income taxed at the full corporate rate (general rate income pool, GRIP) and carry a higher gross-up and dividend tax credit for individual shareholders, reducing the combined corporate-personal tax to approximate the personal rate on the same income. Non-eligible dividends are paid from income taxed at the lower small business rate (low rate income pool, LRIP) and carry a lower gross-up and credit. CCPCs that use the small business deduction generally pay non-eligible dividends on income benefiting from the SBD; income above the SBD limit generates GRIP and may be paid as eligible dividends."
      }
    },
    {
      "@type": "Question",
      "name": "How do corporate reorganizations affect taxes in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Corporate reorganizations can trigger significant tax consequences. Key provisions: section 85 rollovers allow a taxpayer to transfer property to a corporation at a tax-deferred elected amount; section 86 allows a share exchange on reorganization of capital; section 87 governs amalgamations (generally tax-neutral if properly structured); section 88 governs winding-up of subsidiaries. Spin-offs under section 86.1 allow butterfly transactions to split assets between shareholders with tax deferral. Each reorganization structure requires careful ITA analysis to avoid deemed dispositions and unintended tax consequences."
      }
    }
  ]
}`;

export default function OntarioCorporateTaxPage() {
  return (
    <>
      <Script id="corporate-tax-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="corporate-tax-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-amber-700 hover:text-amber-900 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Tax Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Corporate Tax Law: Rates, CCPC, Dividends, and Reorganizations
            </h1>
            <p className="text-lg text-slate-600">
              Corporate tax law is a critical competency for Ontario business
              lawyers advising private companies, shareholders, and
              entrepreneurs. This guide covers the key concepts in Canadian
              corporate income taxation — rates, the small business deduction,
              CCPC eligibility, dividend planning through the CDA and GRIP,
              and the major corporate reorganization provisions of the{" "}
              <em>Income Tax Act</em> — with a focus on what Ontario corporate
              lawyers need to understand to advise clients effectively.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2>The Corporate Income Tax Framework</h2>
            <p>
              Canadian corporations pay income tax at both the federal level
              under the <em>Income Tax Act</em>, RSC 1985, c 1 (5th Supp)
              (ITA) and the provincial level under Ontario&apos;s{" "}
              <em>Taxation Act, 2007</em>. The tax base is generally the same
              for both levels, though there are some Ontario-specific
              deductions and rates.
            </p>

            <h2>Combined Federal-Ontario Corporate Tax Rates (2024)</h2>
            <ul>
              <li>
                <strong>Small business income (CCPC, active business, &lt;$500K SBD limit)</strong>:
                approximately <strong>12.2%</strong> (9% federal SBD rate + 3.2% Ontario small
                business rate)
              </li>
              <li>
                <strong>General active business income (above SBD limit or non-CCPC)</strong>:
                approximately <strong>26.5%</strong> (15% federal general rate + 11.5% Ontario
                general rate)
              </li>
              <li>
                <strong>Investment income in a CCPC</strong>: approximately{" "}
                <strong>50.17%</strong> combined (with a portion refundable through RDTOH
                when dividends are paid — 38.67% refundable dividend tax on hand on
                portfolio dividends; 30.67% on other investment income)
              </li>
            </ul>
            <p>
              The integration principle is the foundation of the Canadian
              corporate tax system — the goal is that the combined corporate
              and personal tax on income earned through a corporation should
              approximate the personal tax rate on the same income earned
              directly by an individual. Integration is imperfect in practice,
              creating tax planning opportunities and traps.
            </p>

            <h2>Canadian-Controlled Private Corporations (CCPCs)</h2>
            <p>
              A CCPC is defined in s. 125(7) of the ITA as a private corporation
              that is a Canadian corporation and that is not controlled directly
              or indirectly by one or more non-resident persons, public
              corporations, or a combination of both. CCPC status confers
              significant tax benefits:
            </p>
            <ul>
              <li>Eligibility for the small business deduction (SBD) on active business income</li>
              <li>Access to the capital gains exemption on qualifying small business corporation shares (s. 110.6)</li>
              <li>SR&amp;ED (scientific research and experimental development) investment tax credits at enhanced refundable rates</li>
              <li>The capital dividend account mechanism</li>
            </ul>

            <h3>Passive Investment Income and the SBD Grind</h3>
            <p>
              Since 2019, a CCPC&apos;s SBD limit is reduced when the CCPC
              and its associated corporations earn more than $50,000 of
              &quot;adjusted aggregate investment income&quot; (AAII) in the
              prior year. For every dollar of AAII above $50,000, the SBD
              limit is reduced by $5 — so a CCPC with $150,000 of AAII
              loses its entire $500,000 SBD limit. This affects professional
              corporations and private holding companies with significant
              investment portfolios.
            </p>

            <h2>The Small Business Deduction</h2>
            <p>
              Section 125 of the ITA provides the SBD — a deduction from
              federal tax that effectively reduces the federal rate on a
              CCPC&apos;s active business income from 15% to 9% on the first
              $500,000 of income (shared among associated corporations).
              Ontario&apos;s small business deduction similarly reduces
              Ontario corporate tax to 3.2% on the same income.
            </p>
            <p>
              Active business income is income from a business other than
              a specified investment business (primarily earning income from
              property) or a personal services business (a corporation
              performing services where the individual would be an employee
              if not for the corporation — the &quot;incorporated employee&quot;
              problem).
            </p>

            <h2>Dividend Planning: GRIP, LRIP, and Integration</h2>
            <h3>Eligible Dividends and GRIP</h3>
            <p>
              A CCPC may pay eligible dividends to the extent of its general
              rate income pool (GRIP) — income taxed at the general corporate
              rate. Eligible dividends carry a higher gross-up (38%) and
              dividend tax credit for the individual shareholder, achieving
              closer integration on high-rate income.
            </p>

            <h3>Non-Eligible Dividends and LRIP</h3>
            <p>
              Income benefiting from the SBD generates the low rate income pool
              (LRIP) and must generally be paid out as non-eligible dividends
              (gross-up of 15%), which carry a lower dividend tax credit.
            </p>

            <h3>Capital Dividends (CDA)</h3>
            <p>
              The capital dividend account (CDA) is a notional account that
              accumulates:
            </p>
            <ul>
              <li>
                The non-taxable portion of capital gains realized by the
                corporation (50% of the gain — note the proposed inclusion
                rate increase to 2/3 was announced in 2024 but implementation
                has been deferred)
              </li>
              <li>Capital dividends received from other private corporations</li>
              <li>
                Life insurance death benefits minus the adjusted cost basis
                of the policy (a powerful estate planning tool for
                business owner clients)
              </li>
            </ul>
            <p>
              An election under ITA s. 83(2) allows the corporation to pay
              a capital dividend equal to its CDA balance — the shareholder
              receives the amount tax-free. Overpaying the CDA results in a
              60% penalty tax on the excess.
            </p>

            <h2>Inter-Corporate Dividends</h2>
            <p>
              Dividends received by a Canadian corporation from another
              Canadian corporation are generally deductible under s. 112 of
              the ITA — preventing double taxation as dividends pass up a
              corporate chain. However, &quot;stop-loss rules&quot; and
              &quot;superficial loss rules&quot; restrict the deduction in
              certain circumstances where the dividend is part of a tax
              planning arrangement.
            </p>

            <h2>Corporate Reorganizations</h2>
            <h3>Section 85 Rollover</h3>
            <p>
              Section 85 allows a taxpayer (individual or corporation) to
              transfer eligible property to a taxable Canadian corporation
              at an elected amount (which may be below fair market value),
              deferring any accrued gain. In exchange, the transferor must
              receive at least one share of the corporation. This is the
              fundamental mechanism for:
            </p>
            <ul>
              <li>Estate freezes (locking in the value of shares at current FMV)</li>
              <li>Incorporating a proprietorship or partnership</li>
              <li>Transferring assets between related corporations</li>
            </ul>

            <h3>Amalgamations (Section 87)</h3>
            <p>
              When two or more taxable Canadian corporations amalgamate,
              the amalgamation is generally tax-neutral — losses, tax
              accounts (GRIP, LRIP, CDA, RDTOH), and tax pools carry
              forward to the amalgamated corporation. Share-for-share
              exchanges at FMV are deemed not to be dispositions for the
              shareholders. Loss utilization restrictions under s. 111(5)
              may apply if control has changed.
            </p>

            <h3>Butterfly Transactions</h3>
            <p>
              A butterfly transaction under s. 55(3)(b) allows a corporate
              group to split assets between shareholders tax-free through a
              series of corporate reorganization steps. Butterflies must
              satisfy strict conditions to avoid the deemed dividend rule
              in s. 55(2) — a provision that re-characterizes inter-corporate
              dividends as capital gains where one purpose is to reduce a
              capital gain. Butterfly transactions require careful planning
              and CRA technical compliance.
            </p>

            <h2>Capital Gains Exemption (QSBC Shares)</h2>
            <p>
              The lifetime capital gains exemption (LCGE) under s. 110.6
              of the ITA allows individuals to claim an exemption on gains
              from qualifying small business corporation (QSBC) shares.
              The LCGE is $1,016,602 for 2024 (indexed annually). To
              qualify:
            </p>
            <ul>
              <li>
                The corporation must be a CCPC at the time of sale
              </li>
              <li>
                Substantially all (90%+) of FMV of corporation assets must be
                used in an active business carried on primarily in Canada at
                time of sale
              </li>
              <li>
                50%+ of FMV of corporation assets must have been used in an
                active business for the preceding 24 months
              </li>
              <li>
                The shares must have been owned by the individual (or a
                related person) for the preceding 24 months
              </li>
            </ul>
            <p>
              The LCGE exemption is one of the most valuable tax planning
              opportunities for business owners selling their companies —
              business lawyers structuring share purchase transactions should
              always review QSBC eligibility.
            </p>

            <h2>How Atticus Helps Ontario Corporate and Tax Lawyers</h2>
            <p>
              Corporate and tax matters involve extensive documentation —
              share purchase agreements, reorganization plans, CRA
              correspondence, advance rulings, and multi-year tax returns.
              Atticus supports Ontario corporate lawyers with:
            </p>
            <ul>
              <li>
                <strong>AI document analysis</strong> — AI reviews share
                purchase agreements, minute books, and reorganization documents
                to extract key terms, dates, and defined concepts
              </li>
              <li>
                <strong>Deadline tracking</strong> — track CRA filing deadlines,
                T2 corporate return due dates, and tax election deadlines
                (e.g., s. 83(2) CDA elections must be filed on or before the
                day the capital dividend is paid)
              </li>
              <li>
                <strong>Matter management</strong> — track complex
                multi-entity reorganization steps and CRA audit milestones
              </li>
              <li>
                <strong>LSO-compliant trust accounting</strong> — manage closing
                proceeds, deposit holdbacks, and purchase price adjustments
                in trust for share purchase transactions
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Ontario-Built Practice Management for Corporate Lawyers
              </h3>
              <p className="text-slate-700 mb-4 text-sm">
                Atticus helps Ontario corporate and tax lawyers manage deadlines,
                document analysis, and client files — with LSO-compliant trust
                accounting built in. $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Start Free Trial
              </Link>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Related Resources
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/blog/ontario-corporate-governance",
                  label: "Ontario Corporate Governance",
                },
                {
                  href: "/blog/ontario-tax-disputes",
                  label: "Ontario Tax Disputes",
                },
                {
                  href: "/blog/ontario-corporate-annual-maintenance",
                  label: "Ontario Corporation Annual Maintenance",
                },
                {
                  href: "/ontario-corporate-lawyer",
                  label: "Ontario Corporate Lawyers",
                },
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
        </div>
      </div>
    </>
  );
}
