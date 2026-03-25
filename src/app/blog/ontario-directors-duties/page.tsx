import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Directors' Duties: Fiduciary Duty, Duty of Care, and Personal Liability",
  description:
    "Complete guide to Ontario directors' duties under the OBCA and CBCA: fiduciary duty to act in the best interests of the corporation, duty of care, business judgment rule, conflict of interest, personal liability for wages and source deductions, and director resignation.",
  openGraph: {
    title: "Ontario Directors' Duties: Fiduciary Duty, Duty of Care, and Personal Liability",
    description:
      "Ontario directors' fiduciary duty, duty of care, business judgment rule, conflict of interest disclosure, personal liability for employee wages and source deductions, and resignation procedures.",
    url: "https://getatticus.ca/blog/ontario-directors-duties",
    siteName: "Atticus",
    type: "article",
  },
  alternates: {
    canonical: "https://getatticus.ca/blog/ontario-directors-duties",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Directors' Duties: Fiduciary Duty, Duty of Care, and Personal Liability",
  "description": "Complete guide to Ontario directors' duties under the OBCA and CBCA covering fiduciary duty, duty of care, business judgment rule, conflict of interest, personal liability for wages and source deductions, and resignation.",
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
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-directors-duties",
  "keywords": ["directors duties Ontario", "fiduciary duty director Ontario", "duty of care director Ontario", "business judgment rule Ontario", "director personal liability Ontario", "OBCA directors duties", "CBCA directors duties", "conflict of interest director Ontario", "director wages liability Ontario"]
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the fiduciary duty of a director in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under OBCA s.134(1) and CBCA s.122(1)(a), every director and officer must act honestly and in good faith with a view to the best interests of the corporation. This is a fiduciary duty — the director must act in the corporation's interests, not their own, not in the interests of a controlling shareholder, and not in the interests of other stakeholders to the exclusion of the corporation. BCE Inc v 1976 Debentureholders [2008] 3 SCR 560 confirmed that directors owe their duty to the corporation, though they may consider the interests of stakeholders in determining what is best for the corporation."
      }
    },
    {
      "@type": "Question",
      "name": "Are directors personally liable for employee wages in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under OBCA s.131 (and ESA s.80 for employment standards wages), directors are personally liable for up to six months' wages owed to employees if the corporation fails to pay. This liability is joint and several — any director can be sued for the full amount, subject to the right of contribution from co-directors. The liability arises regardless of whether the director was involved in the decision not to pay wages. A director can seek contribution from other directors and has a right of subrogation against the corporation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the business judgment rule in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The business judgment rule protects directors from liability for honest business decisions, even if those decisions turn out to be wrong or loss-making. Courts defer to the business decisions of directors where the directors: (1) acted in good faith; (2) did not have a conflict of interest; (3) were reasonably informed; and (4) made a decision that fell within the range of reasonable business decisions. The rule is not a licence for negligence — it protects reasonable, informed decisions made in good faith."
      }
    },
    {
      "@type": "Question",
      "name": "What are directors personally liable for under the Income Tax Act in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Income Tax Act (Canada) s.227.1 and the Excise Tax Act s.323 (HST/GST), directors are personally liable for the corporation's unremitted source deductions (income tax, CPP, EI) and unremitted HST/GST. The liability applies where the corporation fails to remit amounts required to be deducted and remitted, and the director has not exercised the due diligence defence (s.227.1(3) — the director exercised the degree of care, diligence, and skill to prevent the failure that a reasonably prudent person would have exercised in comparable circumstances)."
      }
    }
  ]
}`;

export default function OntarioDirectorsDuties() {
  return (
    <>
      <Script id="directors-duties-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="directors-duties-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Corporate Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Directors&apos; Duties: Fiduciary Duty, Duty of Care, and Personal Liability
            </h1>
            <p className="text-slate-300 text-lg mb-4 max-w-3xl">
              Fiduciary duty under OBCA s.134 and CBCA s.122, duty of care and the business
              judgment rule, conflict of interest disclosure obligations, personal liability for
              wages and source deductions, and director resignation procedures.
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

        <article className="max-w-4xl mx-auto px-6 py-12">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaways</h2>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• Fiduciary duty: act honestly and in good faith with a view to the best interests of the corporation — OBCA s.134(1)(a), CBCA s.122(1)(a)</li>
              <li>• Duty of care: exercise care, diligence, and skill of a reasonably prudent person in comparable circumstances — OBCA s.134(1)(b)</li>
              <li>• Business judgment rule protects good-faith, informed decisions from judicial second-guessing</li>
              <li>• BCE Inc v 1976 Debentureholders [2008] 3 SCR 560: duty owed to corporation, may consider stakeholder interests in determining best interests</li>
              <li>• Personal liability for wages: OBCA s.131 — up to 6 months; joint and several</li>
              <li>• Personal liability for source deductions and HST/GST: ITA s.227.1, ETA s.323 — due diligence defence available</li>
              <li>• Conflict of interest: disclosure required under OBCA s.132; director must not vote on conflicted resolution unless exceptions apply</li>
              <li>• Resignation does not eliminate liability for amounts accruing before resignation — directors must document resignation clearly</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Fiduciary Duty: Best Interests of the Corporation
            </h2>
            <p className="text-slate-700 mb-4">
              Section 134(1)(a) of the <em>Business Corporations Act</em> (Ontario) (OBCA) and s.122(1)(a)
              of the <em>Canada Business Corporations Act</em> (CBCA) require every director and officer
              to act honestly and in good faith <em>with a view to the best interests of the
              corporation</em>. This is a fiduciary duty — the director owes the duty to the corporation
              itself, not to the shareholders, creditors, or other stakeholders.
            </p>
            <p className="text-slate-700 mb-4">
              The Supreme Court of Canada confirmed the scope of this duty in <em>BCE Inc v 1976
              Debentureholders</em> [2008] 3 SCR 560:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                Directors owe their duty to the corporation — not to any particular group of
                shareholders, not to creditors, not to any class of stakeholders
              </li>
              <li>
                In determining what is in the best interests of the corporation, directors may and
                should consider the interests of shareholders, employees, creditors, consumers,
                governments, and the environment where those interests are relevant to the
                corporation&apos;s long-term wellbeing
              </li>
              <li>
                Directors are not required to maximize short-term shareholder value — they can take
                a long-term view and consider stakeholder interests, provided their ultimate focus
                is the best interests of the corporation
              </li>
              <li>
                The controlling shareholder cannot instruct a director to act against the
                corporation&apos;s best interests — the fiduciary duty cannot be waived by majority
                shareholders
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Duty of Care: OBCA s.134(1)(b)
            </h2>
            <p className="text-slate-700 mb-4">
              In addition to the fiduciary duty, every director and officer must exercise the care,
              diligence, and skill that a reasonably prudent person would exercise in comparable
              circumstances (OBCA s.134(1)(b); CBCA s.122(1)(b)). This is a negligence-based
              standard rather than a fiduciary standard:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Objective standard</strong> — compared to a reasonably prudent person in
                comparable circumstances; courts compare the director to a person with similar
                experience and background in a similar position
              </li>
              <li>
                <strong>Enhanced standard for experts</strong> — a director with financial expertise
                sitting on an audit committee is held to the standard of a reasonably prudent person
                with that expertise
              </li>
              <li>
                <strong>Reliance on experts</strong> — a director may rely in good faith on the
                reports of officers, lawyers, accountants, and other experts engaged by the
                corporation (OBCA s.135(4)); reliance must be reasonable
              </li>
              <li>
                <strong>Attendance and engagement</strong> — directors who consistently fail to attend
                board meetings, fail to read materials, or rubber-stamp management decisions without
                proper scrutiny may be found in breach of the duty of care
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Business Judgment Rule
            </h2>
            <p className="text-slate-700 mb-4">
              The business judgment rule protects directors from personal liability for business
              decisions that, in hindsight, turned out badly. Courts will not second-guess a director&apos;s
              exercise of business judgment where:
            </p>
            <ol className="list-decimal pl-6 text-slate-700 space-y-2 mb-4">
              <li>The decision was made in good faith (honest belief that the decision was in the corporation&apos;s best interests)</li>
              <li>The director had no material conflict of interest in the decision</li>
              <li>The director was reasonably informed (read the relevant materials, consulted experts where appropriate)</li>
              <li>The decision fell within the range of reasonable business decisions — not so unreasonable that no reasonable director would make it</li>
            </ol>
            <p className="text-slate-700 mb-4">
              The leading Ontario authority is <em>Maple Leaf Foods Inc v Schneider Corp</em> (1998)
              42 OR (3d) 177 (ONCA), where the court adopted a deferential approach consistent with
              the Delaware business judgment rule. The business judgment rule is not a blanket immunity
              — it does not protect:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
              <li>Decisions made in bad faith or with a conflict of interest</li>
              <li>Decisions made without any reasonable basis of information</li>
              <li>Gross negligence or willful blindness</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Conflict of Interest: OBCA s.132
            </h2>
            <p className="text-slate-700 mb-4">
              A director or officer who has a material interest in a contract or transaction to
              which the corporation is (or is proposed to be) a party must disclose the interest
              to the board and generally must not vote on the resolution approving the contract
              or transaction (OBCA s.132; CBCA s.120):
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Written disclosure requirement</strong> — disclosure must be made in writing
                and entered in the minutes; general notice of an interest in a company may satisfy
                disclosure for subsequent contracts (OBCA s.132(6))
              </li>
              <li>
                <strong>No vote on conflicted resolution</strong> — the conflicted director must not
                vote on the board resolution approving the transaction; if they vote, the transaction
                may be voidable
              </li>
              <li>
                <strong>Exceptions</strong> — minor contracts (officer remuneration, loans to directors
                in certain circumstances, and transactions where the interest consists only of a
                directorship or shareholding) may be exempt
              </li>
              <li>
                <strong>Effect of disclosure and approval by disinterested directors</strong> — a
                properly disclosed and approved related-party transaction is not automatically void;
                courts then assess whether it was fair to the corporation on its merits
              </li>
              <li>
                <strong>Oppression remedy exposure</strong> — even where OBCA s.132 procedures are
                followed, a related-party transaction that is unfair to minority shareholders may
                attract an oppression remedy application
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Personal Liability for Employee Wages: OBCA s.131
            </h2>
            <p className="text-slate-700 mb-4">
              Directors of an Ontario corporation are personally and jointly and severally liable
              for wages owing to employees up to six months&apos; wages if the corporation fails to
              pay them (OBCA s.131; also ESA s.80 for employment standards amounts and the
              federal CBCA s.119):
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Six months maximum</strong> — the liability is capped at six months&apos; wages
                per employee; vacation pay accruals may also be included
              </li>
              <li>
                <strong>Joint and several</strong> — each director is liable for the full amount;
                a director who pays has a right of contribution from co-directors (OBCA s.131(4))
              </li>
              <li>
                <strong>No knowledge or fault required</strong> — the liability is statutory and
                does not require proof that the director knew about or caused the non-payment
              </li>
              <li>
                <strong>Limitation period</strong> — two years from the date the director ceased
                to be a director (OBCA s.131(3)/(4)) — limitation does not run while the director
                remains a director
              </li>
              <li>
                <strong>Right of subrogation</strong> — a director who pays the wages claim is
                subrogated to the employee&apos;s claim against the corporation (OBCA s.131(5))
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Personal Liability for Source Deductions and HST/GST
            </h2>
            <p className="text-slate-700 mb-4">
              Directors face significant personal exposure for the corporation&apos;s failure to remit
              tax amounts under federal legislation:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Source deductions (ITA s.227.1)</strong> — directors are jointly and severally
                liable with the corporation for amounts the corporation was required to deduct at
                source (income tax, CPP, EI) from employee remuneration and failed to remit to the CRA
              </li>
              <li>
                <strong>HST/GST (ETA s.323)</strong> — directors are jointly and severally liable
                for HST/GST collected or collectible by the corporation but not remitted
              </li>
              <li>
                <strong>Limitation period</strong> — CRA must assess a director within two years
                of the director ceasing to be a director (ITA s.227.1(4); ETA s.323(5))
              </li>
              <li>
                <strong>Due diligence defence</strong> — a director is not liable if they exercised
                the degree of care, diligence, and skill to prevent the failure that a reasonably
                prudent person would have exercised in comparable circumstances (ITA s.227.1(3);
                ETA s.323(3))
              </li>
            </ul>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">The Due Diligence Defence in Practice</h4>
              <p className="text-slate-700 text-sm">
                Courts have found that a director who actively monitored remittance compliance,
                sought reports from the CFO/controller, and took steps to address remittance
                deficiencies when they became aware of them may satisfy the due diligence standard.
                A director who simply assumed remittances were being made without oversight typically
                does not qualify. Outside/non-executive directors face a lower threshold than
                inside/executive directors but still must show they took reasonable steps.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Director Resignation: Protecting Against Continuing Liability
            </h2>
            <p className="text-slate-700 mb-4">
              Resignation as a director is the primary way to stop the accrual of personal liability
              for future obligations. Key points:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                <strong>Resignation in writing</strong> — always resign in writing with a clear date;
                verbal resignations may be ineffective; file the resignation with the corporate records
                and send written notice to the corporation
              </li>
              <li>
                <strong>Update corporate registers</strong> — ensure the corporate register of
                directors (maintained at the registered office) is updated and that a Notice of Change
                is filed under the Corporations Information Act (Ontario) within 15 days
              </li>
              <li>
                <strong>Liability for amounts accruing before resignation</strong> — resignation
                does not eliminate liability for wages, source deductions, or HST that accrued
                before the resignation date; it only stops the limitation period from running during
                the period of directorship
              </li>
              <li>
                <strong>De facto directorship</strong> — a person who acts as a director after
                resignation (signing contracts, attending board meetings as a director) may be
                treated as a de facto director for liability purposes
              </li>
              <li>
                <strong>Indemnification and D&amp;O insurance</strong> — corporate indemnification
                by-laws and directors&apos; and officers&apos; liability insurance provide important
                protection; review coverage carefully before accepting a directorship
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can a majority shareholder instruct the board to approve a transaction that benefits the majority?",
                  a: "No — directors owe their fiduciary duty to the corporation, not to the controlling shareholder. A director who follows instructions from a controlling shareholder to approve a transaction that harms the corporation or minority shareholders may be in breach of their fiduciary duty. This is a common source of oppression remedy claims where the controlling shareholder extracts value from the corporation to the detriment of minority shareholders.",
                },
                {
                  q: "Is a director liable for actions of other directors they did not personally approve?",
                  a: "Potentially. A director who is present at a board meeting where an illegal or harmful resolution is passed and fails to dissent or abstain (with their dissent recorded in the minutes) may be deemed to have consented to the resolution (OBCA s.134(3)). A director who is absent from a meeting at which a harmful resolution is passed is not deemed to have consented — but may need to file a written dissent with the secretary on learning of the resolution.",
                },
                {
                  q: "What is a unanimous shareholder agreement (USA) and how does it affect directors' duties?",
                  a: "A unanimous shareholder agreement (USA) under OBCA s.108A (and CBCA s.146) allows all shareholders to restrict or transfer directors' powers to themselves or to others. To the extent that a USA restricts the directors' powers, the shareholders assume the directors' duties and liabilities. This is commonly used in closely-held corporations to give controlling shareholders direct authority over specified decisions while recognizing that they assume the corresponding liability.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Manage Your Corporate Matters with Atticus
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Atticus is the Ontario practice management platform built for corporate and commercial
              lawyers — LSO-compliant trust accounting, HST billing, AI document analysis, limitation
              period tracking, and Canadian legal AI. $149 CAD per lawyer per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-slate-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/ontario-corporate-lawyer"
                className="border border-slate-900 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Ontario Corporate Lawyer Software
              </Link>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/ontario-oppression-remedy", label: "Ontario Oppression Remedy" },
                { href: "/blog/ontario-derivative-action", label: "Ontario Derivative Actions" },
                { href: "/blog/ontario-corporate-governance", label: "Ontario Corporate Governance" },
                { href: "/blog/ontario-shareholders-agreement", label: "Ontario Shareholders Agreements" },
                { href: "/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer Software" },
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
          </section>
        </article>
      </div>
    </>
  );
}
