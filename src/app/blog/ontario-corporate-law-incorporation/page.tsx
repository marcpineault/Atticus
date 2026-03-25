import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Corporate Law: Incorporation, Governance, and Director Duties | Atticus Blog",
  description:
    "Complete guide to Ontario corporate law: OBCA vs CBCA incorporation, articles of incorporation, shareholders' agreements, director duties, and annual filing obligations.",
  openGraph: {
    title: "Ontario Corporate Law: Incorporation, Governance, and Director Duties",
    description:
      "Complete guide to Ontario corporate law: OBCA vs CBCA incorporation, articles, shareholders' agreements, director fiduciary duty, business judgment rule, and annual obligations.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-corporate-law-incorporation",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-corporate-law-incorporation" },
};

export default function OntarioCorporateLawIncorporationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ontario Corporate Law: Incorporation, Governance, and Director Duties",
            description:
              "Complete guide to Ontario corporate law under the OBCA: incorporation, articles, shareholders agreements, director duties, and annual filing obligations.",
            url: "https://getatticus.ca/blog/ontario-corporate-law-incorporation",
            datePublished: "2026-03-19",
            author: { "@type": "Organization", name: "Atticus" },
            publisher: {
              "@type": "Organization",
              name: "Atticus",
              logo: {
                "@type": "ImageObject",
                url: "https://getatticus.ca/logo.png",
              },
            },
          }),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Corporate Law
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Ontario Corporate Law: Incorporation, Governance, and Director Duties
          </h1>
          <p className="text-gray-500 text-sm mb-8">March 2026 &middot; 14 min read</p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ontario corporate law practice involves advising on incorporation decisions, drafting constitutional
            documents, structuring shareholders&apos; agreements, and ensuring clients meet their annual obligations.
            This guide covers the fundamental framework under the <em>Business Corporations Act</em>, RSO 1990,
            c B.16 (OBCA) and the key considerations in routine corporate practice for small and medium-sized
            businesses.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            1. OBCA vs CBCA: Choosing the Incorporating Jurisdiction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The first decision in corporate practice is whether to incorporate provincially under the
            OBCA or federally under the <em>Canada Business Corporations Act</em>, RSC 1985, c C-44 (CBCA).
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">OBCA (Ontario)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">CBCA (Federal)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Name protection</td>
                  <td className="px-4 py-3 text-gray-600">Ontario only</td>
                  <td className="px-4 py-3 text-gray-600">Across Canada</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Extra-provincial registration</td>
                  <td className="px-4 py-3 text-gray-600">Required to operate in other provinces</td>
                  <td className="px-4 py-3 text-gray-600">Registered in Ontario; may need registration elsewhere</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Canadian residency requirement for directors</td>
                  <td className="px-4 py-3 text-gray-600">At least 25% of directors must be Canadian residents</td>
                  <td className="px-4 py-3 text-gray-600">At least 25% of directors must be Canadian residents (same)</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Annual reporting</td>
                  <td className="px-4 py-3 text-gray-600">Annual return to Service Ontario</td>
                  <td className="px-4 py-3 text-gray-600">Annual return to Corporations Canada</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">Cost</td>
                  <td className="px-4 py-3 text-gray-600">Lower filing fees</td>
                  <td className="px-4 py-3 text-gray-600">Slightly higher fees but national name protection</td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Best for</td>
                  <td className="px-4 py-3 text-gray-600">Ontario-only businesses, professional corporations, holding companies</td>
                  <td className="px-4 py-3 text-gray-600">Businesses operating in multiple provinces, seeking national name protection</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            For most small and medium-sized Ontario businesses, OBCA incorporation is sufficient and less
            costly. Professional corporations (lawyers, accountants, doctors) must incorporate provincially
            under the relevant profession&apos;s governing legislation and the OBCA.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            2. Articles of Incorporation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Articles of Incorporation are the constitutional document of the corporation. Under the OBCA
            (s. 5), the articles must set out:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>The name of the corporation</li>
            <li>The municipality where the registered office is located</li>
            <li>The number of directors (or minimum and maximum)</li>
            <li>Restrictions on the business that may be carried on</li>
            <li>The classes and maximum number of shares the corporation is authorized to issue</li>
            <li>Rights, privileges, restrictions, and conditions attached to each class of shares</li>
            <li>Restrictions on the transfer of shares (if any)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Share structure planning</strong> is one of the most important tasks in incorporation.
            A typical Ontario private company articles structure includes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Class A Common shares:</strong> Voting, participating (entitled to dividends and
              liquidation proceeds). The primary equity class.
            </li>
            <li>
              <strong>Class B Non-Voting shares:</strong> Non-voting but participating. Often used to
              allow income splitting with family members through prescribed rate loans under the Tax Act.
            </li>
            <li>
              <strong>Class C Preferred shares:</strong> Redeemable and retractable at a stated amount,
              non-voting. Used for estate freezes — the vendor receives preferred shares with fixed value
              while future growth accrues to the common shareholders.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Articles drafted with flexible share classes allow for future tax planning without amending
            the articles. Counsel should anticipate common tax planning scenarios — income splitting,
            estate freezes, creditor protection — when structuring the initial share classes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            3. Organization of the Corporation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            After filing the articles, the corporation must be organized. The organizational meeting
            (or resolutions in lieu of a meeting) covers:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Adoption of by-laws governing the corporation&apos;s internal management</li>
            <li>Election of directors (if not named in the articles)</li>
            <li>Appointment of officers (president, secretary, treasurer)</li>
            <li>Appointment of auditor (or waiver of audit if permitted)</li>
            <li>Issuance of share certificates to subscribers</li>
            <li>Adoption of a banking resolution and opening of bank accounts</li>
            <li>Approval of any shareholder loans to be made</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            4. Shareholders&apos; Agreements
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A shareholders&apos; agreement (SHA) governs the relationship between shareholders beyond
            what the articles and by-laws provide. Key provisions in a typical Ontario SHA:
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.1 Share Transfer Restrictions</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Right of first refusal (ROFR):</strong> Before selling shares to a third party,
              the selling shareholder must first offer them to existing shareholders at the same price
              and on the same terms.
            </li>
            <li>
              <strong>Drag-along:</strong> Majority shareholders may require minority shareholders to
              sell their shares to a bona fide third-party purchaser on the same terms — preventing
              minority holdout blocking a sale.
            </li>
            <li>
              <strong>Tag-along:</strong> If majority shareholders sell, minority shareholders have
              the right to sell their shares on the same terms — preventing the majority from selling
              out and leaving the minority without a liquidity event.
            </li>
            <li>
              <strong>Buy-sell (shotgun):</strong> Either shareholder may offer to buy the other&apos;s
              shares at a specified price. The offeree must either accept the offer or buy the offeror&apos;s
              shares at the same price. Promotes fair valuation and resolves deadlocks.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.2 Management and Voting</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            SHAs typically include provisions governing:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Minority shareholder board representation (rights to nominate directors)</li>
            <li>Reserved matters requiring unanimous or supermajority approval (e.g., sale of business, new share issuances, related-party transactions)</li>
            <li>Annual business plan and budget approval process</li>
            <li>Non-competition and non-solicitation obligations on shareholder-employees</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">4.3 Life Events and Disability</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            SHAs should address what happens on the death, incapacity, retirement, or insolvency of a
            shareholder. Options include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Compulsory purchase of the departing shareholder&apos;s shares by the corporation or remaining shareholders (funded by life and disability insurance)</li>
            <li>Right of the estate to sell shares to the corporation at a formula price</li>
            <li>Deemed offer to sell on triggering event</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Life and disability insurance funding for buy-sell is standard practice in SHAs with more
            than two shareholders. The agreement should specify who owns the policy, who pays premiums,
            and how proceeds interact with the purchase price formula.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            5. Director Duties
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">5.1 Fiduciary Duty</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Section 134(1)(a) of the OBCA requires every director to act honestly and in good faith
            with a view to the best interests of the corporation. The Supreme Court of Canada confirmed
            in <em>BCE Inc v 1976 Debentureholders</em> [2008] 3 SCR 560 that directors owe their fiduciary
            duty to the corporation — not to shareholders, creditors, or any other stakeholder — though
            they may consider the interests of all stakeholders in determining what is in the best
            interests of the corporation.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">5.2 Duty of Care</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Section 134(1)(b) requires directors to exercise the care, diligence, and skill that
            a reasonably prudent person would exercise in comparable circumstances. This is an objective
            standard — directors are expected to understand the business and make informed decisions.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">5.3 Business Judgment Rule</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Canadian courts apply the business judgment rule: where directors make a business decision
            on an informed basis, in good faith, and without a personal interest in the outcome, courts
            will not second-guess the decision even if it turns out to be wrong. The rule protects
            legitimate business risks — courts are not business managers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            To attract business judgment rule protection, directors should: document their decision-making
            process, rely on professional advice when appropriate, ensure no director has an undisclosed
            personal interest in the transaction, and make decisions that are rational in the circumstances.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">5.4 Director Personal Liability</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Directors are personally liable in certain circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Wages (s. 131 OBCA):</strong> Directors are jointly and severally liable for up to 6 months&apos; wages owing to employees if the corporation cannot pay them. Due diligence defence available.</li>
            <li><strong>Source deductions (s. 227.1 ITA):</strong> Directors are personally liable for unremitted payroll deductions (CPP, EI, income tax withholdings) if the corporation fails to remit. Due diligence defence available.</li>
            <li><strong>HST/GST (s. 323 ETA):</strong> Directors are personally liable for unremitted HST/GST. Due diligence defence available.</li>
            <li><strong>Environmental liability:</strong> Directors may be personally liable under environmental statutes for violations committed during their tenure.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            6. Annual Corporate Obligations
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
            <li>
              <strong>Annual shareholder meeting (s. 94 OBCA):</strong> Within 15 months of the
              previous annual meeting, shareholders must meet (or resolve in writing) to receive
              financial statements, re-elect directors, and re-appoint auditors (or waive audit).
            </li>
            <li>
              <strong>Annual return — Service Ontario:</strong> All Ontario corporations must file
              an annual return with Service Ontario within 60 days of the anniversary of incorporation.
              Failure to file can result in dissolution.
            </li>
            <li>
              <strong>Corporate minute book:</strong> The minute book must be kept at the registered
              office or principal office and contain: articles and by-laws, shareholder register,
              transfer register, director register, officer register, and minutes of all director
              and shareholder meetings.
            </li>
            <li>
              <strong>Beneficial ownership registry (OBCA s. 140.1 — 2023):</strong> Private Ontario
              corporations must maintain a register of individuals with significant control (ISC) —
              individuals who own, directly or indirectly, 25% or more of shares carrying voting rights
              or 25% or more of the fair market value of all shares. ISC information is available to
              government authorities.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            7. Oppression Remedy — Section 248
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Section 248 of the OBCA gives shareholders, creditors, directors, and officers the right
            to apply to court where the conduct of the corporation&apos;s affairs is oppressive or unfairly
            prejudicial to, or unfairly disregards the interests of, any security holder, creditor,
            director, or officer.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The oppression remedy is the most powerful and frequently used remedy in Canadian corporate
            law. The court has very broad remedial authority — it may make any order it thinks fit,
            including:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Ordering a buyout of the complainant&apos;s shares at fair value</li>
            <li>Appointing a receiver or liquidator</li>
            <li>Requiring the corporation to pay dividends</li>
            <li>Prohibiting specific conduct</li>
            <li>Amending the articles or by-laws</li>
            <li>Setting aside a transaction</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            The oppression remedy is particularly important in closely held corporations where minority
            shareholders may have reasonable expectations of employment or participation that are not
            captured in the formal corporate documents: <em>BCE Inc</em>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ontario corporate law practice requires attention to incorporation structure, flexible articles,
            comprehensive shareholder agreements, and ongoing compliance. The combination of director
            personal liability risks, oppression remedy exposure, and annual filing requirements makes
            proactive corporate counsel essential for business clients at every stage of the corporate
            lifecycle.
          </p>

          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Manage Corporate Files with Atticus
            </h3>
            <p className="text-gray-600 mb-6">
              Corporate practice involves annual deadlines, minute book management, trust accounting for
              share issuances, and client relationship management. Atticus helps Ontario corporate lawyers
              track annual filing deadlines, manage client billing, and stay organized — all in one
              LSO-compliant platform.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
