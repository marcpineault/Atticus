import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Not-for-Profit and Charity Law Guide 2024 | ONCA, Charities Directorate, and Director Duties",
  description:
    "Complete guide to Ontario not-for-profit and charity law: Ontario Not-for-Profit Corporations Act 2010 (ONCA), Canada Not-for-profit Corporations Act (CNCA), CRA Charities Directorate registration, director duties in non-profits, charitable purposes, and political activity limits for Ontario lawyers.",
  openGraph: {
    title: "Ontario Not-for-Profit and Charity Law Guide 2024 | ONCA, Charities Directorate, and Director Duties",
    description:
      "Ontario not-for-profit and charity law: ONCA, CNCA, CRA charity registration, director duties, charitable purposes, disbursement quota, and political activity rules.",
    url: "https://getatticus.ca/blog/ontario-not-for-profit-law",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-not-for-profit-law" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Not-for-Profit and Charity Law Guide 2024: ONCA, CRA Charities Directorate, and Director Duties",
  "description": "Complete guide to Ontario not-for-profit and charity law including the Ontario Not-for-Profit Corporations Act 2010, Canada Not-for-profit Corporations Act, CRA charity registration, director duties, charitable purposes, disbursement quota, and political activity rules.",
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
  "dateModified": "2024-12-01",
  "url": "https://getatticus.ca/blog/ontario-not-for-profit-law",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-not-for-profit-law"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Ontario Not-for-Profit Corporations Act 2010 (ONCA)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario Not-for-Profit Corporations Act, 2010 (ONCA) is the governing statute for Ontario not-for-profit corporations incorporated under provincial law. ONCA came into force on October 19, 2021 after a decade-long delay. Under ONCA, Ontario not-for-profit corporations have a 3-year transition period to update their articles and by-laws to comply with the new Act. ONCA modernizes Ontario not-for-profit law by introducing: member class structures, stronger member rights, clearer director duties (fiduciary duty and duty of care codified), a new conflict of interest regime, an oppression remedy for members, and a derivative action for not-for-profit members."
      }
    },
    {
      "@type": "Question",
      "name": "What are the four heads of charitable purpose in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Canadian law recognizes four heads of charitable purpose derived from the Statute of Elizabeth 1601 and developed through English and Canadian case law: (1) the relief of poverty; (2) the advancement of education; (3) the advancement of religion; and (4) other purposes beneficial to the community (a residual category). The Supreme Court of Canada applied these categories in Vancouver Society of Immigrant and Visible Minority Women v MNR [1999]. A purpose must be (a) charitable in the legal sense (within one of the four heads) and (b) exclusively for the public benefit, not for private benefit. The Income Tax Act s.149.1 definition of 'charitable organization' requires that resources be devoted primarily to charitable activities."
      }
    },
    {
      "@type": "Question",
      "name": "What is the disbursement quota for registered charities in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The disbursement quota (DQ) under Income Tax Act s.149.1(1) requires registered charities to spend a minimum amount on charitable activities or qualifying disbursements each year. Budget 2022 increased the DQ rate for charities with investment assets over $1 million from 3.5% to 5% per year on the portion of property not used for charitable activities or administration. The DQ reform was intended to ensure charities actively deploy their endowments for charitable purposes rather than accumulating large investment portfolios. Failure to meet the DQ can result in CRA revocation of charitable status."
      }
    },
    {
      "@type": "Question",
      "name": "How do director duties differ in Ontario not-for-profit corporations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under ONCA s.43, directors of Ontario not-for-profit corporations must: (a) act honestly and in good faith with a view to the best interests of the corporation; and (b) exercise the care, diligence, and skill that a reasonably prudent person would exercise in comparable circumstances. These duties are codified in the same language as OBCA s.134 for business corporations. However, the constituency of the not-for-profit is different — the 'best interests of the corporation' in a not-for-profit context means advancing the corporation's stated charitable or not-for-profit purposes and serving its members and beneficiaries, not generating financial returns. Directors of registered charities also have CRA compliance obligations — including the DQ, filing requirements, and restrictions on non-charitable activities."
      }
    },
    {
      "@type": "Question",
      "name": "What are the political activity rules for registered charities in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The CRA's rules on political activities for registered charities were significantly reformed after the 2018 federal Budget. Prior law limited charities to spending 10% of resources on 'non-partisan political activities.' Under the current rules, charities may engage in political activities (including partisan activities) provided those activities are connected to and advance their charitable purposes. The old 10% limit on non-partisan political activities was eliminated. However, charities still cannot have the promotion of a political party or candidate as a charitable purpose, and cannot make direct monetary contributions to political parties or candidates."
      }
    }
  ]
}`;

export default function OntarioNotForProfitLawPage() {
  return (
    <>
      <Script id="ontario-nfp-law-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-nfp-law-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Charity &amp; Not-for-Profit Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Not-for-Profit and Charity Law Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              ONCA, Canada Not-for-profit Corporations Act, CRA charity registration, four heads of charitable purpose, disbursement quota reform, director duties in not-for-profits, political activity rules, and member rights — the complete guide for Ontario charity and not-for-profit lawyers.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>13 min read</span>
              <span>•</span>
              <span>Charity &amp; Not-for-Profit Law</span>
            </div>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">

            <h2>The Legal Framework for Not-for-Profits and Charities in Ontario</h2>
            <p>
              Ontario organizations operating on a not-for-profit basis navigate a layered legal framework: the corporation law (provincial or federal), charity registration law (federal CRA), and any sector-specific legislation. Understanding which statutes apply and how they interact is foundational for advising charities, foundations, associations, and other not-for-profit entities.
            </p>
            <p>
              The key distinction: a <strong>not-for-profit corporation</strong> is defined by its corporate law (ONCA or CNCA) and may or may not be a registered charity. A <strong>registered charity</strong> is a CRA designation that provides tax exemption and the ability to issue donation receipts — it requires separate registration and compliance under the Income Tax Act, regardless of the corporation&apos;s governing statute.
            </p>

            <h2>Ontario Not-for-Profit Corporations Act 2010 (ONCA)</h2>
            <p>
              The <strong>Ontario Not-for-Profit Corporations Act, 2010 (ONCA)</strong> came into force on October 19, 2021, after years of delay. It replaced the Corporations Act provisions governing Ontario not-for-profit corporations. Key features of ONCA:
            </p>

            <h3>Transition Period</h3>
            <p>
              Ontario not-for-profit corporations that were in existence before ONCA&apos;s commencement have a <strong>3-year transition period</strong> (until October 18, 2024) to update their articles and by-laws to comply with ONCA. After the transition period, ONCA automatically applies regardless of whether the corporation updated its constating documents. Corporations that have not transitioned should review their articles and by-laws to ensure compliance.
            </p>

            <h3>Member Classes and Rights</h3>
            <p>
              ONCA introduces a flexible member class structure. Corporations may have multiple classes of members with different rights, restrictions, conditions, and privileges. The Act strengthens member rights including: the right to receive notice of meetings; the right to attend and vote at meetings; the right to requisition special meetings (on petition of 10% or more of voting members); the right to review financial statements; and the right to bring a derivative action or oppression application.
            </p>

            <h3>Director Duties Under ONCA s.43</h3>
            <p>
              ONCA codifies director duties in the same language as the OBCA — fiduciary duty to act honestly and in good faith with a view to the best interests of the corporation, and duty of care (reasonably prudent person standard). For not-for-profits, the &quot;best interests of the corporation&quot; means advancing the organization&apos;s stated charitable, educational, social, or other not-for-profit purposes.
            </p>
            <p>
              ONCA also introduces a business judgment rule protection for directors and provides statutory indemnification and D&O insurance provisions paralleling the OBCA regime.
            </p>

            <h3>Oppression Remedy and Derivative Action Under ONCA</h3>
            <p>
              ONCA introduced an oppression remedy (s.207) and a derivative action (s.203) for not-for-profit members — significant new procedural tools that did not exist under the old Corporations Act. A member who is oppressed, unfairly prejudiced, or whose interests are unfairly disregarded may apply to the Superior Court for relief including orders to restrain conduct, provide compensation, or wind up the corporation. These remedies are particularly valuable in disputes between member factions in associations and foundations.
            </p>

            <h2>Canada Not-for-Profit Corporations Act (CNCA)</h2>
            <p>
              Federally incorporated not-for-profit corporations are governed by the <strong>Canada Not-for-profit Corporations Act (CNCA)</strong>, which came into force in 2011. The CNCA is largely similar to ONCA in its approach — codified director duties, strong member rights, oppression remedies, derivative actions, and flexible member class structures.
            </p>
            <p>
              Choosing between provincial (ONCA) and federal (CNCA) incorporation depends on the organization&apos;s activities: organizations operating primarily in Ontario with local purposes usually incorporate provincially; national organizations, or those seeking a national profile, often incorporate federally. Both can be registered charities with the CRA regardless of their governing corporate statute.
            </p>

            <h2>CRA Charitable Registration</h2>
            <p>
              To issue official donation receipts and receive the tax benefits of charitable status in Canada, an organization must be registered as a <strong>registered charity</strong> with the CRA under s.248(1) of the Income Tax Act. There are three types:
            </p>
            <ul>
              <li><strong>Charitable organizations</strong>: Devote all resources to charitable activities themselves; can receive disbursements from public foundations</li>
              <li><strong>Public foundations</strong>: Receive funds from the public and make disbursements to qualifying donees (other charities); more than 50% of directors are arm&apos;s-length</li>
              <li><strong>Private foundations</strong>: Typically funded by a single donor or family; more than 50% of directors are not arm&apos;s-length; more restricted investment and disbursement rules</li>
            </ul>

            <h3>The Four Heads of Charitable Purpose</h3>
            <p>
              Canada does not have a statutory definition of &quot;charitable purpose&quot; — it relies on the common law framework from the English Statute of Elizabeth 1601 and developed through English and Canadian cases. The four heads recognized in Canadian law (<em>Vancouver Society</em> [1999]):
            </p>
            <ol>
              <li><strong>Relief of poverty</strong>: Aid to those in need materially, including social housing, food banks, financial assistance</li>
              <li><strong>Advancement of education</strong>: Schools, scholarships, public lectures, research with educational benefit — but not political advocacy or ideological training</li>
              <li><strong>Advancement of religion</strong>: Promotion of recognized religious beliefs; must be for the public benefit, not a private sect</li>
              <li><strong>Other purposes beneficial to the community</strong>: A residual category encompassing health, environment, animal welfare, community benefit, and arts/culture, provided the purpose is both beneficial to the community as a whole (not a private class) and charitable in the legal sense</li>
            </ol>
            <p>
              An organization seeking charitable registration must demonstrate its purposes fall within one or more of these heads and that its activities advance those purposes. The CRA reviews the purposes and activities — not just the stated purposes in the incorporating documents.
            </p>

            <h2>Disbursement Quota Reform (2022)</h2>
            <p>
              The <strong>disbursement quota (DQ)</strong> under ITA s.149.1 requires registered charities to spend a minimum amount on charitable activities or qualifying disbursements each year. Budget 2022 made significant changes:
            </p>
            <ul>
              <li>Charities with <strong>investment assets over $1 million</strong> must now spend at least <strong>5% per year</strong> of the fair market value of property not directly used for charitable activities or administration</li>
              <li>The former 3.5% DQ rate for the portion over $100,000 was increased to 5%</li>
              <li>The former 3.5% DQ for private foundations on the portion over $25,000 was also increased</li>
              <li>Charities have flexibility to carry forward DQ deficiencies for up to 5 years</li>
            </ul>
            <p>
              The DQ reform responds to criticism that large foundations were accumulating significant investment portfolios without proportionately increasing charitable spending. Charities with large endowments must review their spending plans and investment policies to ensure ongoing DQ compliance.
            </p>

            <h2>CRA Compliance Requirements for Registered Charities</h2>
            <p>
              Beyond the DQ, registered charities must comply with annual CRA filing and reporting requirements:
            </p>
            <ul>
              <li><strong>T3010 annual charity return</strong>: Must be filed within 6 months of the fiscal year end; discloses financial information, programs, and governance</li>
              <li><strong>Political activity restrictions</strong>: Post-2018 reform, charities may engage in political activities (including partisan activities) if connected to and advancing charitable purposes; however, charities cannot have the promotion of a political party or candidate as a purpose</li>
              <li><strong>Fundraising expenses</strong>: The CRA expects charitable use of resources — fundraising costs above a certain threshold relative to funds raised may attract scrutiny</li>
              <li><strong>Gift receipting rules</strong>: Donation receipts must meet specific form requirements; improper receipting can result in CRA penalties and revocation</li>
              <li><strong>Prohibited transactions</strong>: Private foundations face restrictions on self-dealing (s.189 ITA) — transactions between the foundation and its non-arm&apos;s-length persons</li>
            </ul>

            <h2>Director Liability in Registered Charities</h2>
            <p>
              Directors of registered charities face both corporate law duties (ONCA or CNCA) and CRA compliance obligations. Specific charity director liability issues:
            </p>
            <ul>
              <li><strong>CRA revocation</strong>: If a registered charity is revoked due to non-compliance, its assets must be transferred to another registered charity — directors who facilitate improper distributions before revocation face personal liability</li>
              <li><strong>GST/HST obligations</strong>: Charities receiving HST on services may have HST obligations; directors may be personally liable for unremitted HST</li>
              <li><strong>Wage obligations</strong>: Directors of not-for-profit corporations are subject to the same ONCA/OBCA and ESA wage liability provisions as business corporation directors</li>
              <li><strong>Charitable purpose obligations</strong>: Directors must ensure the charity operates within its stated charitable purposes — operating outside those purposes (function creep) can jeopardize charitable status</li>
            </ul>

            <h2>Atticus for Ontario Not-for-Profit and Charity Lawyers</h2>
            <p>
              Not-for-profit and charity clients — foundations, associations, charities — have the same practice management needs as any other legal matter: client intake, matter management, trust accounting for retainers, and HST billing. Atticus is designed for Ontario solo and small law firms and manages all of these at $149 CAD per lawyer per month, with Canadian AI to help analyze the constating documents, by-laws, and charitable registration applications that make up charity law practice.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Manage Ontario Not-for-Profit Files with Atticus</h3>
              <p className="text-slate-700 mb-4">
                Practice management, trust accounting, and AI document analysis for Ontario charity and not-for-profit law — at $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>What is the Ontario Not-for-Profit Corporations Act 2010 (ONCA)?</h3>
            <p>
              ONCA is the governing statute for Ontario not-for-profit corporations, in force since October 19, 2021. It modernizes Ontario not-for-profit law with codified director duties, stronger member rights, conflict of interest rules, an oppression remedy, and a derivative action for members. Existing corporations had a 3-year transition period (until October 18, 2024) to update their articles and by-laws.
            </p>

            <h3>What are the four heads of charitable purpose in Canada?</h3>
            <p>
              The four heads are: (1) relief of poverty; (2) advancement of education; (3) advancement of religion; and (4) other purposes beneficial to the community. A purpose must fall within one of these heads and be exclusively for public benefit to qualify for CRA charitable registration.
            </p>

            <h3>What is the disbursement quota for registered charities in Canada?</h3>
            <p>
              Budget 2022 increased the DQ rate to 5% per year of investment assets over $1 million that are not directly used for charitable activities or administration. Failure to meet the DQ can result in CRA revocation of charitable status. Charities can carry forward deficiencies for up to 5 years.
            </p>

            <h3>How do director duties differ in Ontario not-for-profit corporations?</h3>
            <p>
              ONCA s.43 codifies the same fiduciary duty and duty of care as the OBCA, but the &quot;best interests of the corporation&quot; in a not-for-profit means advancing the organization&apos;s charitable or not-for-profit purposes and serving members and beneficiaries — not generating financial returns.
            </p>

            <h3>What are the political activity rules for registered charities in Canada?</h3>
            <p>
              Post-2018 reform, charities may engage in political activities (including partisan activities) if connected to and advancing their charitable purposes. The old 10% limit on non-partisan political activities was eliminated. However, promotion of a political party or candidate cannot be a charitable purpose, and direct monetary contributions to political parties or candidates remain prohibited.
            </p>

          </div>
        </article>

        <section className="py-12 px-6 border-t border-slate-100 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Ontario Law Resources</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-director-liability", label: "Ontario Director Liability Guide" },
                { href: "/blog/ontario-corporate-tax", label: "Ontario Corporate Tax Guide" },
                { href: "/blog/ontario-corporate-reorganization", label: "Ontario Corporate Reorganization" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
                { href: "/ontario-corporate-lawyer", label: "Atticus for Corporate Lawyers" },
                { href: "/blog/ontario-trust-law", label: "Ontario Trust Law Guide" },
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
