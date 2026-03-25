import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Derivative Actions: Enforcing Corporate Rights Under the OBCA and CBCA",
  description:
    "Complete guide to Ontario derivative actions under the Business Corporations Act (OBCA) and Canada Business Corporations Act (CBCA): leave requirements, good faith test, best interests of the corporation, costs, and the relationship with oppression remedy.",
  openGraph: {
    title: "Ontario Derivative Actions: Enforcing Corporate Rights Under the OBCA and CBCA",
    description:
      "Ontario derivative action requirements: OBCA s.246 and CBCA s.239 leave test, good faith, best interests of the corporation, costs orders, and relationship with oppression remedy.",
    url: "https://getatticus.ca/blog/ontario-derivative-action",
    siteName: "Atticus",
    type: "article",
  },
  alternates: {
    canonical: "https://getatticus.ca/blog/ontario-derivative-action",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Derivative Actions: Enforcing Corporate Rights Under the OBCA and CBCA",
  "description": "Complete guide to Ontario derivative actions covering OBCA s.246 and CBCA s.239 leave requirements, good faith test, best interests of the corporation, notice to directors, costs orders, and the relationship with the oppression remedy.",
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
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-derivative-action",
  "keywords": ["derivative action Ontario", "OBCA s.246 derivative action", "CBCA s.239 derivative action", "leave to bring derivative action Ontario", "good faith derivative action Ontario", "best interests corporation derivative action", "Foss v Harbottle Ontario", "corporate litigation Ontario"]
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a derivative action under the OBCA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A derivative action is a court proceeding brought by a complainant (shareholder, director, or officer) on behalf of a corporation to enforce a right belonging to the corporation that the corporation's directors have failed or refused to enforce. Leave of the court is required under OBCA s.246. The derivative action is contrasted with a personal action where the shareholder's own legal rights are violated."
      }
    },
    {
      "@type": "Question",
      "name": "What are the requirements for leave to bring a derivative action in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under OBCA s.246(2) (and CBCA s.239(2)), the court may grant leave if satisfied that: (1) the complainant gave 14 days' written notice to the directors of the corporation of the intention to apply for leave if the corporation does not bring the action; (2) the complainant is acting in good faith; and (3) it appears to be in the interests of the corporation or its shareholders that the action be brought. Practically, the court also considers whether the action has merit."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a derivative action and an oppression remedy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A derivative action enforces a right of the corporation — any recovery goes to the corporation, not to the complainant personally. The oppression remedy (OBCA s.248, CBCA s.241) provides a personal remedy for conduct that is oppressive, unfairly prejudicial, or that unfairly disregards the interests of a security holder, creditor, director, or officer. Both remedies may be available on the same facts — courts sometimes treat oppressive conduct as also giving rise to a derivative claim."
      }
    }
  ]
}`;

export default function OntarioDerivativeAction() {
  return (
    <>
      <Script id="derivative-action-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="derivative-action-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Corporate Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Derivative Actions: Enforcing Corporate Rights Under the OBCA and CBCA
            </h1>
            <p className="text-slate-300 text-lg mb-4 max-w-3xl">
              Leave requirements under OBCA s.246 and CBCA s.239, the good faith and best interests
              tests, notice to directors, costs orders, the proper plaintiff rule and Foss v Harbottle,
              and the relationship with the oppression remedy.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Corporate Law</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 py-12">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Key Takeaways</h2>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• A derivative action enforces a right of the corporation — any recovery flows to the corporation, not to the complainant personally</li>
              <li>• Leave required under OBCA s.246(2): 14-day notice to directors, good faith, best interests of the corporation</li>
              <li>• The proper plaintiff rule (Foss v Harbottle) bars shareholders from suing for wrongs done to the corporation — derivative action is the exception</li>
              <li>• &quot;Complainant&quot; includes registered/beneficial shareholders, former shareholders, directors, officers, and any person the court finds proper — OBCA s.245</li>
              <li>• Court has broad remedial powers including directing the corporation to bring the action, appointing counsel, and awarding costs</li>
              <li>• Business judgment rule and independent board committee investigations may affect the leave analysis</li>
              <li>• Oppression remedy (OBCA s.248) often pleaded alongside or instead of derivative action — different remedy, different standing</li>
            </ul>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Proper Plaintiff Rule: Foss v Harbottle
            </h2>
            <p className="text-slate-700 mb-4">
              The common law proper plaintiff rule from <em>Foss v Harbottle</em> (1843) 2 Hare 461
              establishes that a wrong done to a corporation is the corporation&apos;s cause of action
              — only the corporation itself can sue for it, and the corporation acts through its
              board of directors. Shareholders have no personal right of action for losses suffered
              by the corporation, even if those losses reduce the value of their shares.
            </p>
            <p className="text-slate-700 mb-4">
              The rule also includes the majority rule principle — the courts will not interfere
              with a decision of a majority of shareholders to ratify a wrong (subject to fraud on
              the minority exceptions). These common law rules have been substantially modified by
              statute through the OBCA and CBCA derivative action provisions.
            </p>
            <p className="text-slate-700">
              The statutory derivative action allows a &quot;complainant&quot; to bring an action in
              the name and on behalf of the corporation where the directors have failed or refused
              to bring the action and leave of the court is obtained.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Who Is a &quot;Complainant&quot;?
            </h2>
            <p className="text-slate-700 mb-4">
              Under OBCA s.245, a &quot;complainant&quot; means:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>A registered holder or beneficial owner, or former registered holder or beneficial owner, of a security of a corporation or any of its affiliates</li>
              <li>A director or officer, or former director or officer, of a corporation or any of its affiliates</li>
              <li>The Director appointed under the OBCA</li>
              <li>Any other person who, in the discretion of the court, is a proper person to make an application under the applicable section</li>
            </ul>
            <p className="text-slate-700">
              The category of &quot;any other person the court finds proper&quot; has been interpreted broadly.
              Creditors have been granted complainant status in appropriate circumstances, particularly
              where the corporation is insolvent or near-insolvent. The applicant must have a genuine
              and legitimate interest in the outcome (<em>Pente Investment Management Ltd v Schneider
              Corp</em> (1998) 42 OR (3d) 177 ONCA).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Requirements for Leave: OBCA s.246(2)
            </h2>
            <p className="text-slate-700 mb-4">
              Leave to bring a derivative action will be granted by the court if satisfied of three
              conditions under OBCA s.246(2):
            </p>

            <div className="space-y-5 mb-4">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">
                  1. Notice to Directors (14 Days)
                </h3>
                <p className="text-slate-700 text-sm">
                  The complainant must have given reasonable notice (OBCA s.246(2)(a) specifies
                  14 days minimum) to the directors of the corporation of the intention to apply
                  for leave if the directors do not bring, diligently prosecute, or defend the
                  action. The notice requirement gives the board an opportunity to bring the
                  action itself — if the board commences a bona fide action in response to the
                  notice, the derivative action application may become moot.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">
                  2. Good Faith
                </h3>
                <p className="text-slate-700 text-sm">
                  The complainant must be acting in good faith. The good faith requirement
                  filters out complaints motivated purely by personal hostility, collateral
                  purposes, or bad faith. Courts have held that a complainant who genuinely
                  believes in the merits of the claim and is not acting solely to extract a
                  personal settlement or inflict harm on the corporation satisfies good faith
                  (<em>Discovery Enterprises Inc v Ebco Industries Ltd</em> (1997) 32 BLR (2d) 20
                  BCCA, applied in Ontario). The prospect of personal benefit (increased share
                  value) does not negate good faith.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">
                  3. Best Interests of the Corporation or Its Shareholders
                </h3>
                <p className="text-slate-700 text-sm">
                  It must appear to be in the interests of the corporation or its shareholders
                  that the action be brought. Courts conduct a prima facie merits analysis — the
                  claim must have a reasonable prospect of success. Relevant factors include:
                  the value of the claim, availability of other remedies, cost of litigation
                  relative to potential recovery, whether the corporation (if controlled by
                  independent directors) has already considered and rejected the claim, and
                  whether an independent special committee has reviewed the matter. Courts
                  apply the business judgment rule to the board&apos;s decision not to bring
                  the action — but a refusal by conflicted directors (the alleged wrongdoers)
                  carries little weight.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Conduct of the Derivative Action
            </h2>
            <p className="text-slate-700 mb-4">
              Once leave is granted, the court may make any order it thinks fit in connection
              with the derivative action, including (OBCA s.246(4)):
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                Authorizing the complainant or another person to control the conduct of the
                action (including retaining counsel)
              </li>
              <li>
                Giving directions for the conduct of the action including interim injunctions,
                discovery, and trial procedure
              </li>
              <li>
                Requiring the corporation to pay reasonable legal fees and disbursements incurred
                by the complainant in connection with the action (costs indemnity order)
              </li>
              <li>
                Requiring the corporation to pay reasonable legal fees and disbursements where
                the action is unsuccessful but brought in good faith
              </li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">Costs Indemnity: Key Protection for Complainants</h4>
              <p className="text-slate-700 text-sm">
                One of the most important features of the statutory derivative action is the
                court&apos;s power to order the corporation to indemnify the complainant for legal
                costs. This removes the financial barrier that would otherwise prevent minority
                shareholders from enforcing corporate rights — the complainant is effectively
                enforcing the corporation&apos;s right, not their own, so it is appropriate that the
                corporation bear the costs. Courts routinely grant cost indemnity orders at the
                leave stage.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Recovery Flows to the Corporation
            </h2>
            <p className="text-slate-700 mb-4">
              In a derivative action, any recovery (damages, an account of profits, injunction)
              runs to the corporation — not to the complainant personally. This is fundamental to
              the distinction between a derivative action and a personal action:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>
                The wrong was done to the corporation — the corporation is the plaintiff and
                receives any judgment
              </li>
              <li>
                The complainant shareholder benefits only indirectly, through the increase in
                the value of their shares caused by the recovery flowing to the corporation
              </li>
              <li>
                This indirect benefit means a derivative action will rarely satisfy a minority
                shareholder who wants a personal remedy — the oppression remedy is usually
                the preferred vehicle for personal relief
              </li>
              <li>
                Courts may in rare circumstances order that recovery go directly to the
                complainant (e.g., where the corporation is controlled by the wrongdoer and
                would simply receive and retain the funds), but this is exceptional
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Derivative Action vs Oppression Remedy
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-4">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-3 font-semibold">Aspect</th>
                    <th className="text-center px-5 py-3 font-semibold text-amber-400">Derivative Action</th>
                    <th className="text-center px-5 py-3 font-semibold">Oppression Remedy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      aspect: "Statute",
                      derivative: "OBCA s.246 / CBCA s.239",
                      oppression: "OBCA s.248 / CBCA s.241",
                    },
                    {
                      aspect: "Right enforced",
                      derivative: "Right of the corporation",
                      oppression: "Personal right of the complainant",
                    },
                    {
                      aspect: "Recovery",
                      derivative: "To the corporation (not complainant)",
                      oppression: "To the complainant or as court orders",
                    },
                    {
                      aspect: "Leave required",
                      derivative: "Yes — leave of court required",
                      oppression: "No — application directly to court",
                    },
                    {
                      aspect: "Notice to directors",
                      derivative: "14 days minimum",
                      oppression: "Not required",
                    },
                    {
                      aspect: "Standard",
                      derivative: "Good faith + best interests of corp",
                      oppression: "Oppressive, unfairly prejudicial, or unfairly disregards interests",
                    },
                    {
                      aspect: "Remedies",
                      derivative: "Any order in favour of corporation",
                      oppression: "Any order courts thinks fit — very broad",
                    },
                    {
                      aspect: "Standing",
                      derivative: "OBCA s.245 complainant (broadly defined)",
                      oppression: "OBCA s.245 complainant plus creditors",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.aspect}</td>
                      <td className="px-5 py-3 text-center text-slate-600">{row.derivative}</td>
                      <td className="px-5 py-3 text-center text-slate-600">{row.oppression}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-700">
              In practice, both remedies are often pleaded simultaneously in the same action.
              The court has held that the same conduct may give rise to both a derivative claim
              (wrong to the corporation) and an oppression remedy claim (unfair disregard of
              the minority shareholder&apos;s interests). The availability of the oppression remedy
              may be relevant to the leave analysis — if oppression provides an adequate personal
              remedy, bringing a derivative action may not be in the best interests of the
              corporation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Business Judgment Rule and Independent Committee Review
            </h2>
            <p className="text-slate-700 mb-4">
              The board&apos;s decision not to bring an action against a fellow director or officer is
              accorded some deference under the business judgment rule — courts recognize that
              litigation has costs and risks. However, the deference is significantly reduced
              where:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
              <li>The potential defendants are on the board reviewing the decision (conflict of interest)</li>
              <li>The board has not properly informed itself of the claim&apos;s merits</li>
              <li>The decision was effectively taken by the alleged wrongdoers themselves</li>
            </ul>
            <p className="text-slate-700">
              Where a corporation appoints an independent special committee to review the derivative
              action claim (as is common in public companies and larger private companies), the
              committee&apos;s recommendation carries significant weight. A well-reasoned recommendation
              by a genuinely independent committee to not bring the action may defeat a leave
              application. However, Ontario courts are less deferential to special committees than
              some US jurisdictions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can a creditor bring a derivative action in Ontario?",
                  a: "Possibly. A creditor is not listed in the statutory definition of 'complainant' in OBCA s.245 but may be granted complainant status under the catch-all 'any other person the court finds proper'. Courts have granted creditor standing in insolvency-adjacent situations where the corporation is near-insolvent and the creditors effectively stand in the shareholders' shoes. Creditors have stronger standing under the oppression remedy.",
                },
                {
                  q: "Does the 14-day notice requirement apply to a CBCA corporation?",
                  a: "Yes — CBCA s.239(2)(a) contains an equivalent notice requirement (reasonable notice, not less than 14 days in all cases). The CBCA regime is substantively similar to the OBCA regime for leave requirements, conduct of the action, and remedies.",
                },
                {
                  q: "What happens if the corporation settles the derivative action without the complainant's consent?",
                  a: "A derivative action may not be discontinued, settled, or dismissed without leave of the court (OBCA s.246(5)). This prevents the corporation (controlled by the alleged wrongdoers) from terminating the action by a quick settlement that is not in the corporation's best interests. The court will scrutinize proposed settlements to ensure they are fair to the corporation.",
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
              Manage Your Corporate Litigation Matters with Atticus
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Atticus is the Ontario practice management platform built for corporate and litigation
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
                { href: "/blog/ontario-corporate-governance", label: "Ontario Corporate Governance" },
                { href: "/blog/ontario-oppression-remedy", label: "Ontario Oppression Remedy" },
                { href: "/blog/ontario-fraudulent-misrepresentation", label: "Ontario Fraudulent Misrepresentation" },
                { href: "/blog/ontario-issue-estoppel-res-judicata", label: "Ontario Issue Estoppel and Res Judicata" },
                { href: "/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer Software" },
                { href: "/clio-alternative", label: "Clio Alternative for Ontario" },
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
