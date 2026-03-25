import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Corporate Governance — Directors, Fiduciary Duties, and Shareholder Rights",
  description:
    "A comprehensive guide to Ontario corporate governance under the OBCA: directors and officers, fiduciary duties and the business judgment rule, shareholder meetings, unanimous shareholder agreements, and personal liability.",
  openGraph: {
    title: "Ontario Corporate Governance — Directors, Fiduciary Duties, and Shareholder Rights",
    description:
      "Ontario OBCA corporate governance: directors fiduciary duties business judgment rule, shareholder meetings, unanimous shareholder agreements, director personal liability, and CBCA comparison.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-corporate-governance",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-corporate-governance" },
};

export default function OntarioCorporateGovernancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Corporate Governance — Directors, Fiduciary Duties, and Shareholder Rights",
    description:
      "Ontario OBCA corporate governance: directors appointment/removal, fiduciary duties BCE 2008 SCC 69, business judgment rule Peoples, unanimous shareholder agreements, director liability, annual meetings, shareholder rights.",
    url: "https://getatticus.ca/blog/ontario-corporate-governance",
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
    author: {
      "@type": "Organization",
      name: "Atticus Legal",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-emerald-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              Corporate Law
            </span>
            <span className="text-slate-400 text-sm">14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ontario Corporate Governance — Directors, Fiduciary Duties, and Shareholder Rights
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A comprehensive guide to Ontario corporate governance under the Business Corporations
            Act RSO 1990 c B.16: director and officer duties, the business judgment rule,
            shareholder meetings, unanimous shareholder agreements, and personal liability.
          </p>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

          <h2>OBCA vs CBCA — Choosing the Governing Statute</h2>
          <p>
            Ontario corporations are governed by the <em>Business Corporations Act</em> RSO 1990
            c B.16 (OBCA). Federal corporations are governed by the <em>Canada Business Corporations
            Act</em> RSC 1985 c C-44 (CBCA). The choice of governing statute affects: directors&apos;
            residency requirements (CBCA requires 25% Canadian resident directors — OBCA has no
            residency requirement), shareholder remedies, and securities regulation triggers.
          </p>
          <p>
            Ontario corporations that carry on business interprovincially or internationally often
            prefer CBCA incorporation to access federal court jurisdiction for oppression remedies
            and to avoid the OBCA&apos;s requirement for an Ontario registered office. The oppression
            remedy under OBCA s.248 and CBCA s.241 are substantively similar, both applying the
            <em>BCE Inc v 1976 Debentureholders</em> 2008 SCC 69 framework.
          </p>

          <h2>Directors — Appointment, Removal, and Composition</h2>
          <h3>Number of Directors</h3>
          <p>
            OBCA s.115 requires at least one director. Offering corporations (those distributing
            securities to the public) must have at least three directors, at least two of whom
            are not officers or employees of the corporation or its affiliates (OBCA s.115(2)).
            The articles fix the number of directors or a minimum-maximum range.
          </p>
          <h3>Election and Appointment</h3>
          <p>
            Directors are elected by ordinary resolution of shareholders at each annual meeting
            (OBCA s.119(4)). The articles may provide for cumulative voting (OBCA s.120) — each
            shareholder has votes equal to shares held multiplied by number of directors to elect,
            all castable for one candidate. If the articles are silent, cumulative voting does
            not apply.
          </p>
          <p>
            Between meetings, the board may fill a casual vacancy (OBCA s.124(1)) unless the
            articles require a shareholder vote. A director appointed to fill a vacancy holds
            office only until the next meeting at which directors are elected.
          </p>
          <h3>Removal</h3>
          <p>
            Shareholders may remove a director by ordinary resolution before the director&apos;s term
            expires (OBCA s.122(1)). A director may also resign in writing. A director ceases
            to hold office if disqualified (undischarged bankrupt, mental incapacity, criminal
            conviction as specified under articles, or non-individual: OBCA s.118(1)).
          </p>

          <h2>Fiduciary Duties of Directors and Officers</h2>
          <h3>Statutory Duties — OBCA s.134</h3>
          <p>
            Section 134 of the OBCA imposes two duties on every director and officer:
          </p>
          <ol>
            <li>
              <strong>Fiduciary duty</strong>: Act honestly and in good faith with a view to the
              best interests of the corporation (s.134(1)(a)).
            </li>
            <li>
              <strong>Duty of care</strong>: Exercise the care, diligence, and skill that a
              reasonably prudent person would exercise in comparable circumstances (s.134(1)(b)).
            </li>
          </ol>
          <p>
            These duties run to the corporation, not to individual shareholders:
            <em>Peoples Department Stores Inc (Trustee of) v Wise</em> 2004 SCC 68. Directors
            cannot be held directly liable by shareholders for breach of OBCA s.134 duties —
            the remedy belongs to the corporation through a derivative action.
          </p>
          <h3>The BCE Framework — Whose Interests?</h3>
          <p>
            <em>BCE Inc v 1976 Debentureholders</em> 2008 SCC 69 confirmed that directors owe
            their fiduciary duty to the best interests of the corporation as a whole — a concept
            that is not synonymous with maximizing shareholder value. Directors may consider the
            interests of shareholders, employees, creditors, consumers, governments, and the
            environment when they are affected by the corporation&apos;s actions, to the extent that
            doing so serves the corporation&apos;s best interests.
          </p>
          <p>
            However, <em>BCE</em> also confirmed that consideration of stakeholder interests does
            not give stakeholders a right to demand particular outcomes. Stakeholders have no
            free-standing claim that their interests be prioritized over those of the corporation.
          </p>
          <h3>Business Judgment Rule</h3>
          <p>
            Courts will not substitute their business judgment for that of directors acting in good
            faith and on a reasonable informed basis: <em>Peoples Department Stores</em> (business
            judgment rule adopted from US law). The rule provides that a director&apos;s decision is
            entitled to deference if the director:
          </p>
          <ul>
            <li>Was disinterested and independent;</li>
            <li>Was reasonably informed; and</li>
            <li>Acted in an honest and good-faith belief that the decision was in the corporation&apos;s best interests.</li>
          </ul>
          <p>
            The business judgment rule is a shield — it protects against liability for good faith
            business decisions that turn out poorly. It does not protect self-dealing transactions
            or decisions made in bad faith.
          </p>
          <h3>Conflict of Interest — OBCA s.132</h3>
          <p>
            A director or officer who is a party to, or has a material interest in a person who
            is party to, a material contract or proposed material contract with the corporation
            must disclose the nature and extent of their interest (OBCA s.132(1)). A director
            with a disclosed conflict must not vote on the contract (s.132(5)). A contract approved
            without disclosure is voidable at the option of the corporation.
          </p>
          <p>
            <strong>Exceptions where director may vote</strong> (s.132(7)):
          </p>
          <ul>
            <li>Contract relating to the director&apos;s remuneration as director or officer</li>
            <li>Contract for indemnity or insurance for the director</li>
            <li>Contract with an affiliate</li>
          </ul>

          <h2>Shareholder Meetings</h2>
          <h3>Annual Meetings</h3>
          <p>
            OBCA s.94 requires an annual meeting of shareholders to be held within 18 months
            of incorporation and subsequently no later than 15 months after the last annual
            meeting. At the annual meeting, shareholders must: receive financial statements
            (s.154), elect directors (s.119), and appoint the auditor (if required: s.149).
          </p>
          <h3>Special Meetings</h3>
          <p>
            Special meetings may be called by the board (OBCA s.96) or by shareholders holding
            not less than 5% of the voting shares (s.105 — demand for meeting). If the board
            fails to call the meeting within 21 days of the demand, the shareholders may call it.
          </p>
          <h3>Notice</h3>
          <p>
            Notice of a shareholders&apos; meeting must be given not less than 10 days nor more than
            50 days before the meeting (OBCA s.96(3)). Notice must state the time, place, and
            business to be transacted. Certain business (e.g., amending articles, amalgamation,
            dissolution) requires a special resolution (two-thirds of votes cast: s.1(1)).
          </p>
          <h3>Quorum</h3>
          <p>
            A quorum is present when holders of a majority of the shares entitled to vote are
            present or represented by proxy (OBCA s.100(1)), unless the articles otherwise provide.
          </p>
          <h3>Proxies</h3>
          <p>
            Shareholders may appoint a proxy to attend and act on their behalf (OBCA s.110).
            A proxy must be in writing, signed, and deposited with the corporation before the
            meeting. Solicitation of proxies from more than 15 shareholders triggers statutory
            proxy circular requirements (s.111).
          </p>

          <h2>Unanimous Shareholder Agreements — OBCA s.108</h2>
          <p>
            A unanimous shareholder agreement (USA) is an agreement among all shareholders of a
            corporation (OBCA s.108(2)) that restricts the powers of the directors to manage
            the business and affairs of the corporation. Where a USA restricts directors&apos; powers:
          </p>
          <ul>
            <li>The shareholders to whom the power is transferred have the rights and duties of directors (s.108(5))</li>
            <li>Directors are relieved of the duty to manage the restricted powers (s.108(5))</li>
            <li>The existence of a USA must be noted on share certificates (s.108(6))</li>
            <li>A purchaser who acquires shares without notice of the USA is not bound by it (s.108(7))</li>
          </ul>
          <p>
            USAs commonly include: drag-along and tag-along rights, shotgun buy-sell provisions,
            right of first refusal on share transfers, unanimous consent requirements for major
            decisions, restrictions on dividends and borrowing, deadlock resolution mechanisms,
            and non-competition covenants.
          </p>

          <h2>Director Personal Liability</h2>
          <p>
            Directors can be personally liable under the OBCA and other Ontario statutes:
          </p>
          <ul>
            <li><strong>Wages — OBCA s.131</strong>: Directors are jointly and severally liable for up to six months&apos; wages for employees if the corporation is unable to pay; liability survives two years after ceasing to be a director</li>
            <li><strong>Environmental liability</strong>: Directors of corporations that cause environmental damage can be personally liable under the <em>Environmental Protection Act</em> RSO 1990 c E.19 and <em>Ontario Water Resources Act</em> RSO 1990 c O.40</li>
            <li><strong>Tax — Income Tax Act s.227.1</strong>: Directors are jointly and severally liable for source deductions (CPP/EI/payroll taxes) not remitted by the corporation; two-year limitation after ceasing to be a director; due diligence defence available</li>
            <li><strong>HST — ETA s.323</strong>: Directors personally liable for unremitted HST; same framework as ITA s.227.1</li>
            <li><strong>Trust funds — OBCA s.38</strong>: Directors personally liable for dividends declared when the corporation is insolvent or that would render it insolvent, and for unauthorized repurchases of shares</li>
          </ul>
          <h3>Due Diligence Defence</h3>
          <p>
            For tax remittance liability (ITA s.227.1(3) and ETA s.323(3)), a director who exercised
            the degree of care, diligence, and skill to prevent the failure that a reasonably prudent
            person would have exercised in comparable circumstances is not liable. <em>Soper v Canada</em>
            [1997] 3 FC 242 (FCA): inside directors (involved in day-to-day management) are held to
            a higher standard than outside directors (no involvement in daily operations).
          </p>

          <h2>Indemnification and Insurance</h2>
          <p>
            OBCA s.136 permits the corporation to indemnify directors and officers against costs
            incurred in defending proceedings if: the director/officer acted honestly and in good
            faith with a view to the best interests of the corporation; and in criminal or
            administrative proceedings, had reasonable grounds to believe the conduct was lawful.
            OBCA s.136(4) requires mandatory indemnification where the director/officer was
            substantially successful on the merits.
          </p>
          <p>
            Directors&apos; and officers&apos; liability insurance (D&amp;O insurance) is standard in larger
            Ontario corporations. The policy typically covers defence costs and judgments for
            claims against directors and officers for alleged wrongful acts in their corporate
            capacity, subject to exclusions for fraud, criminal conduct, and claims covered by
            other insurance.
          </p>

        </div>
      </article>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practice Management Built for Ontario Lawyers
          </h2>
          <p className="text-slate-600 mb-8">
            LSO By-Law 9 trust accounting, AI document analysis, and Ontario deadline tracking.
            $149 CAD/month for your entire firm.
          </p>
          <a
            href="https://getatticus.ca/sign-up"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
