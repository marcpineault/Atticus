import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Corporate Law — Business Corporations Act, Directors, Shareholders, and Fundamental Changes | Atticus",
  description:
    "A practical guide for Ontario corporate lawyers: Business Corporations Act, incorporation, directors duties, shareholders agreements, fundamental changes, and arrangements.",
  openGraph: {
    title: "Ontario Corporate Law — OBCA, Directors, Shareholders, and Fundamental Changes",
    description:
      "Ontario corporate law guide: Business Corporations Act, incorporation, directors fiduciary duty, oppression remedy, shareholders agreements, amalgamation, and fundamental changes.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-corporate-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-corporate-law" },
};

export default function OntarioCorporateLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Corporate Law — Business Corporations Act, Directors, Shareholders, and Fundamental Changes",
    description:
      "Practical guide to Ontario corporate law: Business Corporations Act, incorporation, directors duties, oppression remedy, shareholders agreements, and fundamental changes.",
    url: "https://getatticus.ca/blog/ontario-corporate-law",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    datePublished: "2026-03-19",
    keywords: [
      "Ontario corporate law",
      "Business Corporations Act Ontario",
      "OBCA directors duty",
      "oppression remedy Ontario",
      "shareholders agreement Ontario",
      "amalgamation Ontario",
      "fundamental changes OBCA",
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Corporate Law
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Ontario Corporate Law — Business Corporations Act, Directors, Shareholders, and Fundamental Changes
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A practical guide to Ontario corporate law: the <em>Business Corporations Act</em> RSO 1990 c B.16,
            incorporation, directors&apos; duties, the oppression remedy, shareholders&apos; agreements,
            fundamental changes, and dissolution.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>March 2026</span>
            <span>&middot;</span>
            <span>16 min read</span>
            <span>&middot;</span>
            <span>Atticus Legal Research</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">

          <h2>The Business Corporations Act (OBCA) — Framework</h2>
          <p>
            The <em>Business Corporations Act</em> RSO 1990 c B.16 (OBCA) is the principal legislation
            governing corporations incorporated in Ontario. Federally incorporated companies are governed
            by the <em>Canada Business Corporations Act</em> RSC 1985 c C-44 (CBCA). The OBCA and CBCA
            are largely parallel but with important distinctions — notably, the CBCA&apos;s broader
            oppression remedy and the different rules for extra-provincial corporations.
          </p>
          <p>
            A corporation is a legal person separate from its shareholders. The separate legal personality
            doctrine was confirmed in <em>Salomon v Salomon &amp; Co</em> [1897] AC 22 — shareholders are
            not personally liable for the corporation&apos;s debts. The corporate veil may be lifted where
            the corporation is used as a vehicle for fraud or to evade legal obligations
            (<em>Transamerica Life Insurance v Canada Life Assurance</em> (1996) 28 OR (3d) 423 ONCA).
          </p>

          <h2>Incorporation</h2>
          <p>
            Ontario corporations are incorporated by filing Articles of Incorporation under Part II of the
            OBCA. The articles must contain: the corporate name; the address of the registered office
            (Ontario municipality); the number of directors; any restrictions on share transfer; and the
            authorized share structure (classes, maximum number, rights and restrictions).
          </p>
          <p>
            Private corporations under s.1(1) are corporations whose articles: (a) restrict transfer of
            shares; (b) limit the shareholders to 50 (excluding employees); and (c) prohibit public
            offerings. Private corporation status allows exemption from the prospectus requirement under
            the <em>Securities Act</em> RSO 1990 c S.5 (various exemptions including the founder,
            control person, and private issuer exemptions under National Instrument 45-106).
          </p>

          <h2>Directors — Duties and Liability</h2>
          <h3>Fiduciary Duty</h3>
          <p>
            Section 134(1) of the OBCA requires every director and officer to act honestly and in good
            faith with a view to the best interests of the corporation — the fiduciary duty. The SCC in
            <em>BCE Inc v 1976 Debentureholders</em> 2008 SCC 69 confirmed that &quot;best interests of
            the corporation&quot; means the best interests of the corporation viewed as a good corporate
            citizen, not only the interests of shareholders: the interests of shareholders, employees,
            creditors, consumers, governments, and the environment are all relevant.
          </p>
          <h3>Duty of Care</h3>
          <p>
            Section 134(1)(b) requires directors and officers to exercise the care, diligence, and skill
            that a reasonably prudent person would exercise in comparable circumstances — an objective
            standard. Directors are expected to be informed and to exercise independent judgment.
          </p>
          <p>
            The business judgment rule protects directors who act on a reasonably informed basis in good
            faith: courts defer to business decisions made within the range of reasonable choices
            (<em>Maple Leaf Foods v Schneider Corp</em> (1998) 42 OR (3d) 177 ONCA). The rule does not
            protect decisions made in bad faith, without information, or involving self-dealing.
          </p>
          <h3>Statutory Liability</h3>
          <p>
            OBCA directors face personal liability for:
          </p>
          <ul>
            <li>
              <strong>Wages</strong> — s.131: directors are jointly and severally liable for up to 6 months&apos;
              wages to employees if the corporation fails to pay; 2-year limitation from resignation or
              winding-up
            </li>
            <li>
              <strong>Unlawful dividends</strong> — s.38: directors who voted for or consented to an
              unlawful dividend are jointly and severally liable to restore the amount to the corporation
            </li>
            <li>
              <strong>Tax withholding</strong> — <em>Income Tax Act</em> s.227.1 and <em>Excise Tax Act</em>
              s.323: directors are personally liable for unremitted payroll source deductions and HST
              collected but not remitted; due diligence defence available
            </li>
          </ul>

          <h2>Shareholders — Rights and Remedies</h2>
          <h3>Shareholder Rights</h3>
          <p>
            OBCA shareholders have statutory rights including: the right to vote at meetings (s.102);
            the right to receive dividends declared (s.38); dissent rights on fundamental changes (s.185);
            access to corporate records (s.144); the right to call special meetings (s.105(3)); and the
            right to propose resolutions (s.99).
          </p>
          <h3>Oppression Remedy — Section 248</h3>
          <p>
            Section 248 of the OBCA provides a broad remedy for oppression, unfair prejudice, or unfair
            disregard of a complainant&apos;s interests. Under <em>BCE Inc</em>, the two-part test is:
          </p>
          <ul>
            <li>
              Did the claimant have a reasonable expectation (based on the relationship, context, and
              course of dealing)?
            </li>
            <li>
              Was that expectation violated by conduct that was oppressive, unfairly prejudicial, or
              in unfair disregard of the complainant&apos;s interests?
            </li>
          </ul>
          <p>
            Complainants include shareholders, officers, directors, and the Director under the OBCA
            (s.245). Remedies under s.248(3) are broad: the court may make any order it thinks fit
            — including winding up the corporation, directing the purchase of shares, appointing a
            receiver, restraining conduct, or awarding damages.
          </p>
          <h3>Derivative Actions — Section 246</h3>
          <p>
            A complainant may apply for leave to bring a derivative action in the name of the corporation
            where the directors have refused to bring the action or where bringing it directly would be
            impractical. The court must be satisfied that: the complainant has given 14 days&apos; notice
            to directors; the directors have not acted; the complainant is acting in good faith; and the
            action appears to be in the interests of the corporation (s.246(2)).
          </p>

          <h2>Shareholders&apos; Agreements</h2>
          <p>
            Shareholders&apos; agreements supplement the OBCA and the articles to address matters that
            the statute leaves to contractual arrangement. Key provisions in Ontario shareholders&apos;
            agreements typically include:
          </p>
          <ul>
            <li>
              <strong>Governance</strong> — voting agreements; board composition (nominee directors);
              quorum requirements; reserved matters requiring unanimous or supermajority consent
            </li>
            <li>
              <strong>Transfer restrictions</strong> — right of first refusal (ROFR); drag-along rights
              (majority can force minority to sell on same terms); tag-along rights (minority can participate
              in majority&apos;s sale)
            </li>
            <li>
              <strong>Shotgun buy-sell</strong> — either party may trigger: A offers to buy B at price X;
              B must either sell at X or buy A at X
            </li>
            <li>
              <strong>Employment and non-competition</strong> — conditions on shareholder-employees;
              treatment on termination; non-competition periods (must be reasonable to be enforceable
              — <em>Shafron v KRG Insurance Brokers</em> 2009 SCC 6)
            </li>
            <li>
              <strong>Deadlock provisions</strong> — mechanisms for resolving deadlock in equally divided
              companies; mediation before shotgun; buyout at agreed valuation
            </li>
          </ul>

          <h2>Fundamental Changes</h2>
          <p>
            &quot;Fundamental changes&quot; under the OBCA require special resolutions (two-thirds majority)
            and may trigger dissent rights:
          </p>
          <ul>
            <li>
              <strong>Amendment of articles</strong> — s.170: special resolution required for most article
              amendments; changes affecting class rights may require approval by each affected class
            </li>
            <li>
              <strong>Amalgamation</strong> — s.175: the joining of two or more Ontario corporations into
              one; requires special resolution of each corporation; articles of amalgamation filed with
              the Director
            </li>
            <li>
              <strong>Continuance</strong> — s.180: migration of a corporation to or from another
              jurisdiction; special resolution required
            </li>
            <li>
              <strong>Arrangements</strong> — s.182: a flexible catch-all for reorganizations not covered
              by other provisions; requires court approval; used for complex multi-party transactions
            </li>
            <li>
              <strong>Sale of substantially all assets</strong> — s.184: special resolution required
              where the corporation sells, leases, or exchanges all or substantially all of its property
              (other than in the ordinary course of business)
            </li>
          </ul>
          <h3>Dissent Rights — Section 185</h3>
          <p>
            Shareholders who dissent from certain fundamental changes (amalgamation, arrangement,
            continuance, sale of all assets) are entitled to be paid fair value for their shares.
            The dissent procedure under s.185 requires: written notice of dissent before the vote;
            the fundamental change must be approved; the dissenter must demand payment within the
            statutory period. Dissent and appraisal rights prevent majority shareholders from forcing
            minority shareholders to remain in a fundamentally different corporation without compensation.
          </p>

          <h2>Dissolution and Winding Up</h2>
          <p>
            A corporation may be dissolved voluntarily under s.238 (by special resolution) or involuntarily
            under s.240 (by court order on application of a shareholder or Director). The court may order
            winding up in the oppression context (s.248(3)(g)) or where it is just and equitable to do
            so (s.207 — applies the common law &quot;just and equitable&quot; ground including breakdown of
            mutual confidence, exclusion from management in quasi-partnerships, and deadlock).
          </p>
          <p>
            On dissolution, the corporation must: discharge its liabilities; distribute the remaining
            assets to shareholders in priority order (preferred before common; liquidation preferences
            as specified in articles). Directors supervising an unlawful distribution in dissolution are
            personally liable under s.238.
          </p>
        </div>
      </article>
    </div>
  );
}
