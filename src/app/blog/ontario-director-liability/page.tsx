import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Director Liability Guide 2024 | OBCA Duties, Statutory Liability, and Indemnification",
  description:
    "Complete guide to Ontario director liability: OBCA fiduciary duty and duty of care, business judgment rule, statutory liability (wages, taxes, HST, environmental), director indemnification and D&O insurance, conflict of interest procedures, and oppression liability for Ontario corporate lawyers.",
  openGraph: {
    title: "Ontario Director Liability Guide 2024 | OBCA Duties, Statutory Liability, and Indemnification",
    description:
      "Ontario director liability: OBCA fiduciary duty, duty of care, business judgment rule, statutory liability for wages and taxes, director indemnification, and D&O insurance.",
    url: "https://getatticus.ca/blog/ontario-director-liability",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-director-liability" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Director Liability Guide 2024: OBCA Duties, Statutory Liability, Business Judgment Rule, and Indemnification",
  "description": "Complete guide to Ontario director liability including OBCA fiduciary duty and duty of care, business judgment rule, statutory liability for wages and taxes, director indemnification, D&O insurance, and conflict of interest procedures.",
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
  "url": "https://getatticus.ca/blog/ontario-director-liability",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-director-liability"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the fiduciary duties of an Ontario director under the OBCA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under OBCA s.134(1), every director and officer must (a) act honestly and in good faith with a view to the best interests of the corporation; and (b) exercise the care, diligence, and skill that a reasonably prudent person would exercise in comparable circumstances. The first duty is the fiduciary duty — directors must act in the corporation's interests, not their own or any particular shareholder group's interests. The Supreme Court of Canada in BCE Inc v 1976 Debentureholders [2008] confirmed that directors owe their fiduciary duty to the corporation, not to individual shareholders or other stakeholders, though they may consider stakeholder interests when determining what is in the corporation's best interests."
      }
    },
    {
      "@type": "Question",
      "name": "What is the business judgment rule in Ontario director liability?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The business judgment rule in Ontario protects directors from liability for honest business decisions made in good faith. Courts will not second-guess a business decision if: the directors were reasonably informed, there were no conflicts of interest, the decision was within the range of reasonable business choices (not clearly irrational), and the directors acted in the honest belief they were acting in the corporation's best interests. The rule is established in Re BCE Inc (2008) and applied in numerous Ontario cases. It does not protect directors who act in bad faith, have conflicts of interest, or make decisions that are completely without rational business justification."
      }
    },
    {
      "@type": "Question",
      "name": "What is a director's personal liability for employee wages in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under OBCA s.131, directors are jointly and severally liable to employees for up to 6 months of unpaid wages and 12 months of unpaid vacation pay that became due while they were directors. This is strict liability — the director does not need to have been negligent. A director may be released from liability if they can establish a due diligence defence (OBCA s.135) — they exercised the degree of care, diligence, and skill that a reasonably prudent person would have exercised in comparable circumstances to prevent the failure to pay wages."
      }
    },
    {
      "@type": "Question",
      "name": "When is a director liable for corporate tax and HST remittances in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Income Tax Act s.227.1 and the Excise Tax Act s.323, directors are personally liable for a corporation's failure to remit employee source deductions, HST/GST collectible, and other statutory remittances. The due diligence defence applies — a director is not liable if they exercised the degree of care, diligence, and skill to prevent the failure that a reasonably prudent person would have in comparable circumstances. The CRA assessment of a director must be made within 2 years after the director resigned or ceased to be a director."
      }
    },
    {
      "@type": "Question",
      "name": "How does director indemnification work under the OBCA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OBCA s.136 permits a corporation to indemnify a director against all costs, charges, and expenses (including legal fees and judgments) incurred in connection with any civil, criminal, administrative, investigative, or other proceeding in which the director is a party by reason of being a director. Indemnification is mandatory (s.136(3)) where the director was successful on the merits. Discretionary indemnification requires that the director acted honestly and in good faith with a view to the best interests of the corporation, and had reasonable grounds for believing their conduct was lawful. Directors and Officers (D&O) insurance supplements indemnification, particularly for insolvent corporations where indemnification is unavailable."
      }
    }
  ]
}`;

export default function OntarioDirectorLiabilityPage() {
  return (
    <>
      <Script id="ontario-director-liability-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-director-liability-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Corporate Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Director Liability Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              OBCA fiduciary duty and duty of care, business judgment rule, statutory liability for wages and remittances, director indemnification, D&amp;O insurance, and conflict of interest procedures — the complete guide for Ontario corporate lawyers advising directors.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>13 min read</span>
              <span>•</span>
              <span>Corporate Law</span>
            </div>
          </div>
        </section>

        <article className="py-12 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate max-w-none">

            <h2>The Dual Nature of Director Obligations in Ontario</h2>
            <p>
              Ontario directors face liability from two distinct sources: <strong>corporate law duties</strong> under the Ontario Business Corporations Act (OBCA) — fiduciary duty, duty of care, and the business judgment rule — and <strong>statutory liability</strong> for specific corporate obligations (wages, source deductions, HST, environmental obligations). Understanding both is essential for advising directors, structuring governance, and managing director exposure.
            </p>

            <h2>Fiduciary Duty Under OBCA s.134</h2>
            <p>
              Section 134(1) of the OBCA imposes two core obligations on every director and officer:
            </p>
            <ul>
              <li><strong>(a) Fiduciary duty</strong>: Act honestly and in good faith with a view to the best interests of the corporation</li>
              <li><strong>(b) Duty of care</strong>: Exercise the care, diligence, and skill that a reasonably prudent person would exercise in comparable circumstances</li>
            </ul>

            <h3>To Whom is the Duty Owed?</h3>
            <p>
              The Supreme Court of Canada confirmed in <em>BCE Inc v 1976 Debentureholders</em> [2008] 3 SCR 560 that directors owe their fiduciary duty to the <em>corporation</em>, not to individual shareholders, creditors, or other stakeholders. However, BCE also recognized that directors may consider the interests of stakeholders — employees, creditors, the community — when determining what is in the corporation&apos;s best interests. This is not a licence for directors to subordinate shareholders&apos; interests to stakeholders but rather recognition that the corporation has a broader constituency whose interests may be relevant to long-term value.
            </p>
            <p>
              For publicly traded corporations, the Peoples v Wise [2004] SCC framework confirmed that directors do not owe fiduciary duties to creditors directly — though directors must consider the corporation&apos;s obligations to creditors as part of what constitutes the corporation&apos;s best interests, particularly in distress situations.
            </p>

            <h3>Conflicts of Interest: OBCA s.132</h3>
            <p>
              OBCA s.132 governs director conflicts of interest. A director who is a party to, or has a material interest in a party to, a material contract or proposed material contract with the corporation must:
            </p>
            <ol>
              <li>Disclose in writing the nature and extent of the interest at the time the matter is first considered at a board meeting</li>
              <li>Refrain from voting on any board resolution to approve the contract, unless the contract is with an affiliate or the interested director is a director of an affiliated corporation</li>
            </ol>
            <p>
              Contracts approved in compliance with s.132 (full disclosure, no vote by interested director) are not voidable by the corporation solely because of the director&apos;s interest — the contract stands on its merits. Contracts concluded in breach of s.132 may be set aside by the corporation or a court.
            </p>

            <h2>The Business Judgment Rule</h2>
            <p>
              The business judgment rule protects directors from liability for honest business decisions made on an informed basis, in good faith, without conflicts, within the range of reasonable business choices. Ontario courts derived the doctrine from Delaware law but adapted it for the Canadian context.
            </p>
            <p>
              The rule does not protect:
            </p>
            <ul>
              <li>Decisions made in bad faith or with an improper purpose</li>
              <li>Decisions involving undisclosed conflicts of interest</li>
              <li>Decisions where the directors were not reasonably informed</li>
              <li>Decisions that are completely irrational or impossible to justify on any business grounds</li>
            </ul>
            <p>
              <strong>Informed decision-making</strong>: Directors are not expected to be experts in every field. They may rely on expert advice — financial, legal, scientific — and are protected when they do so reasonably. OBCA s.135 provides a statutory due diligence defence: a director is not liable if they rely in good faith on financial statements represented by a financial officer or auditor, or on a report of a professional adviser.
            </p>

            <h2>Duty of Care: The Reasonable Director Standard</h2>
            <p>
              The duty of care in OBCA s.134(1)(b) is objective — the standard of a reasonably prudent person in comparable circumstances. This is not a demanding standard; courts recognize that business decisions involve uncertainty and risk. Directors are not guarantors of the corporation&apos;s success.
            </p>
            <p>
              Key elements of the duty of care:
            </p>
            <ul>
              <li><strong>Attendance and engagement</strong>: Directors must actually attend board meetings and engage with material issues — absentee directors who rubber-stamp management decisions may face liability</li>
              <li><strong>Information and inquiry</strong>: Directors must seek adequate information before making decisions — asking questions, reviewing financial statements, obtaining expert advice where appropriate</li>
              <li><strong>Supervision</strong>: Directors must exercise reasonable supervision over management — delegating is permissible but not abdicating</li>
              <li><strong>Dissent</strong>: OBCA s.135(3) allows a director to protect themselves by entering a dissent to a board resolution in the minutes — a director who dissents in writing is not liable for the board&apos;s decision</li>
            </ul>

            <h2>Statutory Liability for Wages Under OBCA s.131</h2>
            <p>
              One of the most significant personal liability risks for Ontario directors is the statutory obligation for unpaid employee wages. OBCA s.131 provides:
            </p>
            <ul>
              <li>Directors are jointly and severally liable for <strong>up to 6 months of unpaid wages</strong> that became due while they were directors</li>
              <li>Directors are also jointly and severally liable for <strong>up to 12 months of unpaid vacation pay</strong></li>
              <li>This is separate from termination pay and severance pay — those are claims against the corporation under the <em>Employment Standards Act</em>, not statutory director liability</li>
            </ul>
            <p>
              <strong>Enforcement</strong>: The Employment Standards Act also creates director liability for unpaid wages (ESA s.81) — a parallel regime. The ESA route does not require a prior judgment against the corporation and can be more efficient for employees recovering wages from an insolvent corporation.
            </p>
            <p>
              <strong>Due diligence defence</strong>: A director can avoid OBCA s.131 liability by establishing that they exercised the care, diligence, and skill that a reasonably prudent person would have exercised to prevent the failure to pay wages. This typically requires showing the director took positive steps — monitoring the corporation&apos;s financial position, implementing payroll controls, raising concerns with management — not merely that they were unaware of the problem.
            </p>

            <h2>Tax Remittance Liability: CRA Director Assessments</h2>
            <p>
              Directors face significant personal liability for corporate tax failures under federal legislation:
            </p>

            <h3>Income Tax Act s.227.1 — Source Deduction Liability</h3>
            <p>
              Directors are jointly and severally liable with the corporation for the corporation&apos;s failure to remit employee source deductions (income tax, CPP, EI withheld from employees). The CRA must prove: the corporation failed to remit; the director was a director at the time; and the director failed to exercise due diligence.
            </p>

            <h3>Excise Tax Act s.323 — GST/HST Liability</h3>
            <p>
              Directors are personally liable for the corporation&apos;s failure to collect and remit HST/GST. The same due diligence defence applies. HST director assessments are common in corporate insolvency situations — the CRA routinely assesses directors for unpaid HST in failed businesses.
            </p>

            <h3>Two-Year Assessment Limitation</h3>
            <p>
              Under both ITA s.227.1 and ETA s.323, the CRA must assess a director within <strong>2 years</strong> of the director&apos;s resignation or ceasing to be a director. Proper and timely resignation — with a filed resignation notice and updated corporate records — starts the 2-year clock. De facto directors (people exercising director functions without formal appointment) may be assessed as directors even without a formal resignation.
            </p>

            <h3>Due Diligence Defence for Tax Remittances</h3>
            <p>
              The due diligence defence for tax remittances was analyzed in <em>Soper v Canada</em> [1997] and subsequent cases. Key factors courts consider: whether the director was actively involved in managing the corporation or an arm&apos;s-length outside director; whether the director was aware of cash flow problems; what steps the director took to ensure remittances were made; and whether the director took steps to correct the situation when problems became known. Inside directors with financial management oversight face a higher standard than outside directors without operational involvement.
            </p>

            <h2>Environmental Liability for Directors</h2>
            <p>
              Under Ontario&apos;s <strong>Environmental Protection Act (EPA)</strong> and the federal <strong>Fisheries Act</strong>, officers and directors who directed, authorized, assented to, acquiesced in, or participated in a corporation&apos;s contravention of environmental obligations may be personally liable. This creates direct personal exposure for directors of corporations engaged in activities with environmental risk — manufacturing, resource extraction, waste management.
            </p>
            <p>
              The <em>EPA</em> s.194 provides a due diligence defence — a director who took all reasonable care to prevent the environmental contravention is not liable. Environmental compliance programs, policies, and active monitoring are the standard risk management tools.
            </p>

            <h2>Director Indemnification Under OBCA s.136</h2>
            <p>
              OBCA s.136 establishes two regimes for director indemnification:
            </p>

            <h3>Mandatory Indemnification</h3>
            <p>
              If a director was successful on the merits of any civil, criminal, administrative, investigative, or other proceeding, the corporation <em>must</em> indemnify them for all costs, charges, and expenses reasonably incurred. Success on the merits — acquittal in a criminal proceeding, dismissal of a civil claim — triggers mandatory indemnification.
            </p>

            <h3>Discretionary Indemnification</h3>
            <p>
              A corporation may (but is not required to) indemnify a director for proceedings where the director was not entirely successful, provided:
            </p>
            <ul>
              <li>The director acted honestly and in good faith with a view to the best interests of the corporation</li>
              <li>In a criminal or administrative proceeding, the director had reasonable grounds to believe their conduct was lawful</li>
            </ul>
            <p>
              Indemnification agreements and board resolutions — entered before proceedings arise — are standard practice for public companies and increasingly common for private Ontario corporations. These arrangements ensure the director has a clear contractual right to indemnification and advance funding of legal costs during proceedings.
            </p>

            <h2>Directors and Officers (D&O) Insurance</h2>
            <p>
              D&O insurance covers personal liability of directors and officers for wrongful acts in their corporate roles — including breach of fiduciary duty, negligent misrepresentation, errors and omissions, and employment practices claims. D&O insurance is particularly important because:
            </p>
            <ul>
              <li>Corporate indemnification is unavailable for corporations in insolvency (when the risk is highest)</li>
              <li>Indemnification may be unavailable where the director was not acting in good faith</li>
              <li>Shareholders may object to corporate indemnification in derivative or oppression proceedings</li>
            </ul>
            <p>
              Ontario lawyers advising boards on governance should consistently address D&O insurance adequacy — limits, exclusions, and Side A coverage (which protects individual directors when indemnification is unavailable).
            </p>

            <h2>Atticus for Ontario Corporate Lawyers Advising Directors</h2>
            <p>
              Directors facing personal liability exposure — wage claims, CRA assessments, oppression applications — require efficient, well-organized legal counsel. Atticus is designed for Ontario solo and small law firms and manages client intake, matter management, trust accounting (Law Society By-Law 9 compliant for retainer management), HST billing, and AI document analysis — at $149 CAD per lawyer per month. For corporate lawyers, Atticus tracks limitation periods (including the 2-year CRA director assessment window), manages multiple corporate matters simultaneously, and uses Canadian AI to extract key provisions from board minutes, indemnification agreements, and corporate records.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Manage Ontario Corporate Files with Atticus</h3>
              <p className="text-slate-700 mb-4">
                Practice management, trust accounting, and AI document analysis for Ontario corporate law — at $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>What are the fiduciary duties of an Ontario director under the OBCA?</h3>
            <p>
              Under OBCA s.134(1), every director must (a) act honestly and in good faith with a view to the best interests of the corporation (fiduciary duty), and (b) exercise the care, diligence, and skill that a reasonably prudent person would exercise in comparable circumstances (duty of care). Duties are owed to the corporation, not to individual shareholders (<em>BCE Inc</em> [2008]).
            </p>

            <h3>What is the business judgment rule in Ontario director liability?</h3>
            <p>
              The business judgment rule protects directors from liability for honest business decisions made in good faith, on an informed basis, without conflicts, and within the range of reasonable choices. Courts will not second-guess business decisions meeting these criteria. The rule does not protect bad faith decisions, undisclosed conflicts, or completely irrational choices.
            </p>

            <h3>What is a director&apos;s personal liability for employee wages in Ontario?</h3>
            <p>
              Under OBCA s.131, directors are jointly and severally liable for up to 6 months of unpaid wages and 12 months of vacation pay that became due while they were directors. A due diligence defence applies — positive steps to prevent the failure to pay may provide a defence.
            </p>

            <h3>When is a director liable for corporate tax and HST remittances in Ontario?</h3>
            <p>
              Under ITA s.227.1 and ETA s.323, directors are personally liable for the corporation&apos;s failure to remit source deductions and HST. The CRA must assess within 2 years of resignation. A due diligence defence applies — steps taken to prevent the failure (monitoring finances, implementing controls) may provide protection.
            </p>

            <h3>How does director indemnification work under the OBCA?</h3>
            <p>
              OBCA s.136 provides mandatory indemnification where a director was successful on the merits, and discretionary indemnification where the director acted in good faith with a view to the corporation&apos;s best interests. D&O insurance supplements indemnification, particularly for insolvent corporations where corporate indemnification is unavailable.
            </p>

          </div>
        </article>

        <section className="py-12 px-6 border-t border-slate-100 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Ontario Law Resources</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-oppression-remedy", label: "Ontario Oppression Remedy Guide" },
                { href: "/blog/ontario-corporate-reorganization", label: "Ontario Corporate Reorganization" },
                { href: "/blog/ontario-corporate-tax", label: "Ontario Corporate Tax Guide" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
                { href: "/ontario-corporate-lawyer", label: "Atticus for Corporate Lawyers" },
                { href: "/blog/ontario-professional-negligence", label: "Ontario Professional Negligence" },
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
