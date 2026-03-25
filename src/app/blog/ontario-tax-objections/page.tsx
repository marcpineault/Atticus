import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Tax Objections Guide 2024: CRA Objections, Tax Court Appeals, and Reassessments",
  description:
    "Ontario tax objections guide: CRA notice of objection (Income Tax Act s.165 — 90-day deadline from date of assessment), Tax Court of Canada informal and general procedure, burden of proof in tax appeals, settlement with Appeals Division, limitation period for reassessments (ITA s.152(4)), and Ontario provincial tax disputes under the Taxation Act 2007.",
  openGraph: {
    title: "Ontario Tax Objections Guide 2024: CRA Notice of Objection and Tax Court Appeals",
    description:
      "Complete guide to Ontario CRA objections and tax appeals — ITA s.165 notice of objection (90-day deadline), Tax Court of Canada informal and general procedure, burden of proof, CRA Appeals Division, reassessment limitation periods (ITA s.152(4)), and provincial tax disputes.",
    url: "https://getatticus.ca/blog/ontario-tax-objections",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-tax-objections" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Tax Objections Guide 2024: CRA Objections, Tax Court Appeals, and Reassessments",
  "description": "Ontario tax objections: ITA s.165 notice of objection 90-day deadline, Tax Court of Canada procedures, burden of proof, CRA Appeals Division settlement, reassessment limitations ITA s.152(4), and Ontario provincial tax disputes.",
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
  "url": "https://getatticus.ca/blog/ontario-tax-objections"
}`;

const faqSchemaJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the deadline to file a notice of objection with the CRA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under section 165 of the Income Tax Act, an individual or testamentary trust must file a notice of objection within the later of: (a) one year after the filing due date for the return to which the assessment relates; or (b) 90 days after the date of mailing of the notice of assessment or reassessment. For corporations and other taxpayers, the deadline is 90 days after the date of mailing of the notice of assessment. The notice of objection must be filed in writing and state the facts and reasons for the objection. Failure to file within the deadline is fatal unless the taxpayer applies for an extension of time under ITA s.166.1 (application to CRA) or s.166.2 (application to Tax Court), which must be filed within one year of the expiry of the 90-day period."
      }
    },
    {
      "@type": "Question",
      "name": "What are the informal and general procedures in the Tax Court of Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Tax Court of Canada Act and Tax Court of Canada Rules (General Procedure) establish two procedures for income tax appeals. The informal procedure applies to appeals where the amount of federal tax in dispute (excluding penalties and interest) does not exceed $25,000 per year, or where the appeal involves only a loss determination. The informal procedure is designed for self-represented litigants — it is less formal, faster, and the Tax Court cannot award costs against the taxpayer. The general procedure applies to larger appeals and uses the full rules of court including examinations for discovery, motions, and the ability to award costs. Both procedures begin with filing a notice of appeal within 90 days of the CRA's decision on the objection (or 90 days after service of a confirmation or reassessment following the objection)."
      }
    },
    {
      "@type": "Question",
      "name": "Who bears the burden of proof in a CRA tax dispute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Canadian tax appeals, the Minister's assessment is presumed to be correct. The taxpayer bears the initial burden of demolishing the Minister's assumptions of fact that underlie the assessment. Once the taxpayer has put the Minister's assumptions in doubt with credible evidence, the burden shifts to the Minister to prove those facts. The standard of proof is a balance of probabilities. For penalties under ITA s.163 (gross negligence and false statements), the burden of proof is reversed — the Minister must prove on a balance of probabilities that the penalty is warranted. In the Supreme Court of Canada decision Hickman Motors Ltd v Canada [1997] 2 SCR 336, the Court confirmed the nature and operation of the onus in tax appeals."
      }
    }
  ]
}`;

export default function OntarioTaxObjectionsPage() {
  return (
    <>
      <Script id="ontario-tax-objections-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-tax-objections-faq-schema" type="application/ld+json">
        {faqSchemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-amber-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Tax Law
              </span>
              <span className="text-slate-400 text-sm">December 2024 &middot; 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Tax Objections Guide 2024: CRA Objections, Tax Court Appeals, and Reassessments
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              CRA notice of objection (ITA s.165 — 90-day deadline, extension of time s.166.1/166.2),
              Tax Court of Canada informal procedure (under $25,000 per year) and general procedure,
              burden of proof in tax appeals (taxpayer demolishes Minister&apos;s assumptions),
              reassessment limitation periods (ITA s.152(4) normal reassessment period), and
              Ontario provincial tax disputes under the <em>Taxation Act, 2007</em>.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2>Overview of Canadian Tax Dispute Resolution</h2>
            <p>
              When the Canada Revenue Agency (CRA) issues a notice of assessment or
              reassessment that a taxpayer disagrees with, the taxpayer may challenge
              it through an administrative objection process and, if necessary, an appeal
              to the Tax Court of Canada. The process involves strict procedural deadlines —
              missing the objection deadline is generally fatal to the appeal.
            </p>

            <h2>Notice of Objection: Section 165 ITA</h2>
            <p>
              The first step in challenging a CRA assessment is filing a notice of objection
              under s.165 of the <em>Income Tax Act</em>, R.S.C. 1985, c. 1 (5th Supp).
            </p>

            <h3>Deadline for Filing</h3>
            <p>
              For <strong>individuals and testamentary trusts</strong>, the objection must
              be filed within the later of:
            </p>
            <ul>
              <li>One year after the filing due date for the return to which the assessment relates; or</li>
              <li>90 days after the date of mailing of the notice of assessment.</li>
            </ul>
            <p>
              For <strong>corporations and all other taxpayers</strong>, the deadline is
              90 days after the date of mailing of the notice of assessment or reassessment.
            </p>
            <p>
              The notice of objection must be in writing and must set out:
            </p>
            <ul>
              <li>The reasons for the objection;</li>
              <li>All relevant facts relied upon by the taxpayer.</li>
            </ul>

            <h3>Extension of Time to Object</h3>
            <p>
              Where the taxpayer misses the 90-day deadline, they may apply for an extension
              of time to file the objection. The extension application must be made within
              one year of the expiry of the 90-day period. The taxpayer may apply:
            </p>
            <ul>
              <li>
                To the CRA under s.166.1 — if the CRA refuses, the taxpayer may apply
                to the Tax Court within 90 days of the refusal;
              </li>
              <li>
                Directly to the Tax Court under s.166.2 within one year of the expiry
                of the 90-day objection deadline.
              </li>
            </ul>
            <p>
              The court will grant an extension where: (a) the application was made as
              soon as circumstances permitted; (b) there are reasonable grounds for appeal;
              and (c) the taxpayer had a bona fide intention to appeal within the 90-day
              period.
            </p>

            <h2>CRA Appeals Division Process</h2>
            <p>
              After the notice of objection is filed, the file is assigned to a CRA Appeals
              Officer. The Appeals Officer reviews the objection independently of the auditor
              and may confirm, vary, or vacate the assessment. Many tax disputes are settled
              at the Appeals Division level without proceeding to court.
            </p>
            <p>
              Taxpayers may negotiate with the Appeals Officer and submit additional
              documentation to support the objection. The CRA must respond to the objection
              and cannot simply leave it outstanding indefinitely — the taxpayer may appeal
              to the Tax Court after 90 days of filing the objection if the CRA has not
              responded.
            </p>

            <h2>Reassessment Limitation Periods: Section 152(4)</h2>
            <p>
              The CRA cannot reassess a taxpayer indefinitely. Under s.152(4) of the ITA,
              the CRA may reassess a return within:
            </p>
            <ul>
              <li>
                <strong>Normal reassessment period:</strong> Three years from the date of
                mailing of the original notice of assessment for most taxpayers; four years
                for mutual fund trusts and corporations (other than Canadian-controlled private
                corporations);
              </li>
              <li>
                <strong>Extended reassessment:</strong> Beyond the normal period where:
                (a) the taxpayer made a misrepresentation attributable to neglect, carelessness,
                or wilful default (in which case the CRA may reassess at any time); or
                (b) there has been a fraud, in which case there is no time limit.
              </li>
            </ul>
            <p>
              A waiver under s.152(4)(a)(ii) signed by the taxpayer extends the normal
              reassessment period. Taxpayers should be cautious about signing waivers
              without legal advice.
            </p>

            <h2>Tax Court of Canada: Appeal Procedures</h2>

            <h3>Filing the Notice of Appeal</h3>
            <p>
              After the CRA confirms the assessment, varies it, or issues a reassessment
              following the objection, the taxpayer has 90 days to file a notice of appeal
              with the Tax Court of Canada. Where the CRA has not responded to the objection
              within 90 days of filing, the taxpayer may also appeal directly.
            </p>

            <h3>Informal Procedure</h3>
            <p>
              The informal procedure applies where the aggregate of federal income tax
              (excluding penalties and interest) in dispute does not exceed $25,000 for
              any taxation year, or the appeal relates solely to a loss determination.
              Key features:
            </p>
            <ul>
              <li>Designed for self-represented taxpayers — less formal rules;</li>
              <li>Expedited hearings;</li>
              <li>The Tax Court cannot award costs against the taxpayer;</li>
              <li>The Tax Court&apos;s decision is final and binding (not a precedent);</li>
              <li>No right to appeal to the Federal Court of Appeal on questions of fact.</li>
            </ul>

            <h3>General Procedure</h3>
            <p>
              The general procedure applies to all other appeals. It uses the full rules
              of court:
            </p>
            <ul>
              <li>Examinations for discovery (oral and documentary);</li>
              <li>Pre-trial motions and interlocutory applications;</li>
              <li>Full trial with witnesses and documentary evidence;</li>
              <li>The Tax Court may award costs;</li>
              <li>Decisions are precedents and may be appealed to the Federal Court of Appeal.</li>
            </ul>

            <h2>Burden of Proof in Tax Appeals</h2>
            <p>
              In Canadian tax litigation, the Minister&apos;s assessment is presumed to be
              correct — the taxpayer bears the burden of proving that the assessment is
              wrong. The Supreme Court of Canada in <em>Hickman Motors Ltd v Canada</em>
              [1997] 2 SCR 336 confirmed that the taxpayer&apos;s burden is to &quot;demolish&quot;
              the Minister&apos;s assumptions of fact underlying the assessment with credible
              evidence. Once the taxpayer has met this initial burden, the onus shifts to
              the Minister to establish those facts.
            </p>
            <p>
              For penalties under s.163(2) (gross negligence penalties) and for fraud
              reassessments, the Minister bears the burden of proof — the presumption
              of correctness does not apply to penalties.
            </p>

            <h2>Ontario Provincial Tax Disputes</h2>
            <p>
              Ontario&apos;s <em>Taxation Act, 2007</em>, S.O. 2007, c. 11, Sch. A
              generally harmonizes provincial income tax with the federal <em>Income Tax Act</em>.
              Ontario eliminated its separate provincial income tax return in 2012 — Ontario
              income tax is now assessed and collected by the CRA on behalf of Ontario. As
              a result, federal and Ontario income tax objections and appeals are generally
              handled together through the federal ITA objection and Tax Court process.
            </p>
            <p>
              The <em>Retail Sales Tax Act</em> (for pre-HST matters) and employer health
              tax disputes under the <em>Employer Health Tax Act</em> are administered by
              the Ontario Ministry of Finance and follow separate objection and appeal processes
              through the Superior Court of Justice.
            </p>

            <h2>Practice Points for Ontario Tax Lawyers</h2>
            <ul>
              <li>
                Calendar the objection deadline immediately when a client receives a notice
                of assessment — 90 days passes quickly, and extension applications are
                uncertain in outcome.
              </li>
              <li>
                File a protective objection for any assessment that could be challenged,
                even where the issue has not been fully analyzed — the objection can be
                withdrawn or narrowed; a missed deadline cannot be recovered.
              </li>
              <li>
                Assess whether the amount in dispute is under $25,000 per year to determine
                if informal procedure applies — the lack of a costs risk in informal procedure
                may affect the client&apos;s litigation strategy.
              </li>
              <li>
                For penalty assessments under s.163(2), remember that the burden is on
                the Minister — the CRA must prove gross negligence or wilful default,
                not merely carelessness.
              </li>
              <li>
                Preserve all documents related to the tax year under dispute — the taxpayer&apos;s
                ability to demolish the Minister&apos;s assumptions depends on credible
                documentary and testimonial evidence.
              </li>
            </ul>

          </div>
        </article>

        <section className="py-12 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Manage Your Tax Law Practice with Atticus
            </h2>
            <p className="text-slate-600 mb-6">
              Track objection and appeal deadlines, manage tax matter files, and run
              LSO-compliant trust accounting — all in one Ontario platform.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-tax-disputes", label: "Ontario Tax Disputes" },
                { href: "/blog/ontario-corporate-tax", label: "Ontario Corporate Tax" },
                { href: "/blog/ontario-administrative-law", label: "Ontario Administrative Law" },
                { href: "/blog/ontario-judicial-review", label: "Ontario Judicial Review" },
                { href: "/blog/ontario-limitation-periods", label: "Ontario Limitation Periods" },
                { href: "/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer Software" },
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
