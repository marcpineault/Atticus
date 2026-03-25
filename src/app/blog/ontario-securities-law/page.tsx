import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Securities Law — OSC Registration, Prospectus Requirements, and Continuous Disclosure | Atticus Blog",
  description:
    "Comprehensive guide to Ontario securities law: OSC registration categories, prospectus exemptions, NI 45-106, continuous disclosure obligations NI 51-102, insider trading, takeover bids, and OSA enforcement for Ontario business lawyers.",
  openGraph: {
    title: "Ontario Securities Law — OSC Registration, Prospectus Exemptions, and Continuous Disclosure",
    description:
      "OSA RSO 1990 c S.5, registration requirements, NI 45-106 prospectus exemptions, continuous disclosure NI 51-102, insider trading, takeover bid rules, and OSC enforcement for Ontario practitioners.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-securities-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-securities-law" },
};

export default function OntarioSecuritiesLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Securities Law — OSC Registration, Prospectus Requirements, and Continuous Disclosure",
    description:
      "Comprehensive guide to Ontario securities law for business lawyers: OSA, OSC registration, NI 45-106 exemptions, continuous disclosure, insider trading, takeover bids, and enforcement.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-securities-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-securities-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-green-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Securities Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Securities Law — OSC Registration, Prospectus Exemptions, and Continuous Disclosure
            </h1>
            <p className="text-slate-300 text-lg">
              OSA RSO 1990 c S.5, OSC registration categories, NI 45-106 prospectus exemptions,
              continuous disclosure obligations, insider trading rules, takeover bid requirements,
              and OSC enforcement — a guide for Ontario business and corporate lawyers.
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

            <h2>The Ontario Securities Act and the OSC</h2>
            <p>
              Securities regulation in Canada is provincially regulated. Ontario&apos;s primary
              securities statute is the Securities Act RSO 1990 c S.5 (OSA), administered by the
              Ontario Securities Commission (OSC). The OSC is an independent agency of the Government
              of Ontario with a mandate to provide protection to investors from unfair, improper, or
              fraudulent practices, and to foster fair and efficient capital markets and confidence in
              those markets. The OSC operates alongside the Canadian Securities Administrators (CSA),
              a council of provincial and territorial securities regulators that harmonizes securities
              regulation across Canada through National Instruments (NIs), Multilateral Instruments
              (MIs), and National Policies (NPs).
            </p>
            <p>
              Most substantive securities regulation in Canada is now implemented through CSA National
              Instruments, which are adopted by all provinces simultaneously. Key NIs include
              NI 45-106 (Prospectus Exemptions), NI 51-102 (Continuous Disclosure Obligations),
              NI 31-103 (Registration Requirements, Exemptions and Ongoing Registrant Obligations),
              NI 54-101 (Communication with Beneficial Owners), NI 62-104 (Take-Over Bids and
              Issuer Bids), and NI 52-109 (Certification of Disclosure in Issuers&apos; Annual and
              Interim Filings). Ontario also implements Multilateral Instrument 11-102 (Passport
              System) which allows registrants and reporting issuers to rely on decisions made by a
              principal regulator.
            </p>

            <h2>The Prospectus Requirement</h2>
            <p>
              The core principle of Ontario securities law is the prospectus requirement. OSA s.53
              prohibits any trade in a security unless a preliminary prospectus and a final prospectus
              have been filed with and receipted by the OSC, or an exemption applies. A prospectus
              must provide full, true, and plain disclosure of all material facts relating to the
              security to be distributed (OSA s.56). The prospectus is the primary disclosure
              document through which investors receive the information they need to make investment
              decisions.
            </p>
            <p>
              A long-form prospectus is required for an initial public offering by a non-reporting
              issuer. A short-form prospectus under NI 44-101 is available to eligible reporting
              issuers (generally those with 12 months of continuous disclosure history). A base shelf
              prospectus under NI 44-102 allows reporting issuers to file a base prospectus and then
              issue securities in tranches over a 25-month period through shelf prospectus supplements.
              PREP (Prospectus Review and Electronic Submission) procedures and the SEDAR+ electronic
              filing system govern submissions to the CSA.
            </p>

            <h2>Prospectus Exemptions — NI 45-106</h2>
            <p>
              National Instrument 45-106 (Prospectus Exemptions) contains the most commonly used
              exemptions from the prospectus requirement. The exemptions most relevant to Ontario
              business lawyers include:
            </p>
            <ul>
              <li>
                <strong>Accredited Investor Exemption (s.2.3):</strong> Securities may be distributed
                to an &quot;accredited investor&quot; as defined in NI 45-106 s.1.1. Individual
                accredited investors include: net income exceeding $200,000 (or $300,000 joint with
                spouse) in each of the two most recent calendar years with reasonable expectation of
                exceeding that amount in the current year; net financial assets exceeding $1,000,000;
                or net assets of at least $5,000,000. Corporate accredited investors include entities
                with net assets exceeding $5,000,000. A risk acknowledgement form is required for
                individual accredited investors in most provinces.
              </li>
              <li>
                <strong>Minimum Amount Exemption (s.2.10):</strong> Available for distributions
                of securities with an aggregate acquisition cost of not less than $150,000 paid in
                cash at closing, to a purchaser that is not an individual.
              </li>
              <li>
                <strong>Offering Memorandum Exemption (s.2.9):</strong> Available in most
                provinces (including Ontario as of 2016). Requires delivery of an offering memorandum
                in the required form; investment limits apply for non-eligible investors ($10,000 per
                calendar year in Ontario for retail investors; $30,000 for investors with eligible
                financial advice; $100,000 for eligible investors — defined by the same thresholds
                as accredited investors but reduced).
              </li>
              <li>
                <strong>Family, Friends and Business Associates Exemption (s.2.5):</strong>
                Available for distributions to: (a) a director, officer, control person, or founder
                of the issuer; (b) a spouse, parent, grandparent, brother, sister, or child of such
                persons; or (c) a close personal friend or close business associate of such persons.
                A risk acknowledgement form is required.
              </li>
              <li>
                <strong>Existing Security Holder Exemption (s.2.1.1):</strong> Allows reporting
                issuers to raise capital from existing security holders without a prospectus, subject
                to investment limits ($15,000 maximum per fiscal year without an offering document;
                $30,000 with offering document or eligible investor status).
              </li>
              <li>
                <strong>Rights Offering Exemption (s.2.1):</strong> Available when a reporting
                issuer distributes rights to existing security holders in proportion to their
                holdings, subject to compliance with NI 45-106 rights offering procedures.
              </li>
            </ul>

            <h2>Registration Requirements — NI 31-103</h2>
            <p>
              OSA s.25 requires registration to trade in or advise on securities. National Instrument
              31-103 (Registration Requirements, Exemptions and Ongoing Registrant Obligations)
              establishes the registration categories:
            </p>
            <ul>
              <li>
                <strong>Dealer Categories:</strong> Investment Dealer (member of IIROC, now CIRO —
                Canadian Investment Regulatory Organization); Mutual Fund Dealer (member of MFDA,
                now CIRO); Scholarship Plan Dealer; Exempt Market Dealer (EMD — most commonly used
                for private placements and exempt market trades); Restricted Dealer.
              </li>
              <li>
                <strong>Adviser Categories:</strong> Portfolio Manager (manages investment portfolios
                with discretion); Restricted Portfolio Manager; Investment Fund Manager (manages
                investment funds).
              </li>
              <li>
                <strong>Key Registration Exemptions:</strong> The accredited investor distribution
                exemption also provides a registration exemption for the distributor in many
                circumstances. The &quot;trade for own account&quot; exemption under OSA s.35
                exempts persons who trade only for their own account and are not in the business
                of trading.
              </li>
            </ul>

            <h2>Continuous Disclosure — NI 51-102</h2>
            <p>
              Reporting issuers (issuers whose securities are held by more than a threshold of
              securityholders or who have been subject to a prospectus distribution) are subject
              to continuous disclosure obligations under National Instrument 51-102. Key
              requirements include:
            </p>
            <ul>
              <li>
                <strong>Annual Information Form (AIF):</strong> Detailed annual disclosure document
                required for most reporting issuers. Contains description of business, risk factors,
                description of securities, material contracts, and legal proceedings.
              </li>
              <li>
                <strong>Annual Financial Statements:</strong> Audited annual financial statements
                within 90 days of fiscal year end (for non-venture issuers) or 120 days (for
                venture issuers). Must comply with IFRS (International Financial Reporting Standards)
                for non-investment fund reporting issuers.
              </li>
              <li>
                <strong>Quarterly Interim Financial Statements:</strong> Unaudited interim statements
                within 45 days (non-venture) or 60 days (venture) of each quarter end.
              </li>
              <li>
                <strong>Management Discussion and Analysis (MD&amp;A):</strong> Required with both
                annual and interim financial statements. Must discuss results of operations, liquidity,
                capital resources, and material changes.
              </li>
              <li>
                <strong>Material Change Reports:</strong> OSA s.75 requires a reporting issuer to
                disclose a material change (a change in the business, operations, or capital that
                would reasonably be expected to have a significant effect on the market price or
                value of securities) by issuing and filing a press release, and then filing a
                material change report within 10 days. A confidential material change report may
                be filed in limited circumstances.
              </li>
              <li>
                <strong>Business Acquisition Reports:</strong> Required within 75 days after
                completion of a significant acquisition (based on size tests comparing acquired
                business to issuer).
              </li>
            </ul>

            <h2>Insider Trading and Tipping</h2>
            <p>
              OSA Part XXIII.1 (civil liability) and Part VI (administrative proceedings) prohibit
              insider trading and tipping. An &quot;insider&quot; includes directors and officers
              of a reporting issuer, persons owning more than 10% of voting securities, and anyone
              in a &quot;special relationship&quot; with the issuer — including persons who received
              material non-public information (MNPI) through their relationship with the issuer.
            </p>
            <p>
              OSA s.76 prohibits an insider or person in a special relationship with a reporting
              issuer from trading in the issuer&apos;s securities with knowledge of an undisclosed
              material fact or material change. OSA s.76(2) prohibits tipping — disclosing a
              material fact or material change to another person when the discloser knows or ought
              reasonably to know that the recipient will trade on that information. The prohibition
              extends to recommending or encouraging trades without full disclosure.
            </p>
            <p>
              Civil liability under OSA Part XXIII.1 allows persons who traded contemporaneously
              with the insider to recover losses. Criminal liability under the Criminal Code s.382.1
              provides for fines and imprisonment for insider trading.
            </p>

            <h2>Takeover Bid Rules — NI 62-104</h2>
            <p>
              A takeover bid occurs when a person acquires or offers to acquire beneficial ownership
              of, or the power to exercise control or direction over, 20% or more of a class of
              voting or equity securities of a reporting issuer. National Instrument 62-104 governs
              takeover bids.
            </p>
            <p>
              The 2016 amendments introduced significant changes to Canadian takeover bid rules:
              (1) mandatory minimum bid period of 105 days (the &quot;permitted bid&quot; requirement),
              which can be reduced to 35 days by the target board with a recommendation or by the
              bidder with target board consent; (2) a minimum deposit condition requiring that more
              than 50% of securities not held by the bidder be tendered before the bidder takes up
              any shares; (3) a mandatory 10-day extension after the bidder first takes up shares.
              These changes were intended to shift the balance of power in hostile takeovers toward
              target boards by giving them more time to respond.
            </p>

            <h2>OSC Enforcement</h2>
            <p>
              The OSC has broad enforcement powers under the OSA. Administrative proceedings before
              the Capital Markets Tribunal (established 2021 to take over OSC adjudicative functions)
              may result in: cease trade orders, trading bans, disgorgement of profits, administrative
              penalties of up to $1,000,000 per contravention, orders requiring compliance, and
              reprimands. The OSC also refers matters to the Ontario Securities Commission
              enforcement branch for quasi-criminal prosecution in Ontario Court of Justice under
              OSA s.122, which provides for fines up to $5,000,000 and imprisonment up to five years.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-green-900 mb-2">
                Manage Corporate and Securities Matters with Atticus
              </h3>
              <p className="text-green-800 mb-4">
                Track deadlines, manage securities matters, and keep client trust accounts properly
                accounted — all in one platform built for Ontario corporate and business lawyers.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition"
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
