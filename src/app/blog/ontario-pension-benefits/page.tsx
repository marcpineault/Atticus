import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Pension Benefits Guide 2024 | PBA and FSRA for Employment Lawyers",
  description:
    "A practical guide to Ontario pension benefits law: the Pension Benefits Act (PBA), FSRA regulation, defined benefit vs defined contribution plans, plan wind-up, solvency requirements, member rights, and the role of Ontario lawyers in pension disputes and plan administration.",
  openGraph: {
    title: "Ontario Pension Benefits Guide 2024 | PBA and FSRA for Employment Lawyers",
    description:
      "Ontario Pension Benefits Act: defined benefit and defined contribution plans, FSRA regulation, solvency funding, wind-up, member rights, pension division on marriage breakdown, and FSRA compliance. A guide for Ontario employment lawyers.",
    url: "https://getatticus.ca/blog/ontario-pension-benefits",
    siteName: "Atticus",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Pension Benefits: PBA, FSRA Regulation, and Member Rights",
  "description": "Ontario Pension Benefits Act, FSRA regulation, defined benefit and defined contribution plans, solvency requirements, plan wind-up, and member rights for pension disputes.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "url": "https://getatticus.ca/blog/ontario-pension-benefits",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-pension-benefits"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What law governs Ontario pension plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario pension plans are primarily governed by the Pension Benefits Act, RSO 1990, c P.8 (PBA), which sets minimum standards for registration, vesting, locking-in, funding, wind-up, and member rights. The Financial Services Regulatory Authority of Ontario (FSRA) administers and enforces the PBA. Pension plans are also subject to the federal Income Tax Act, which governs registered retirement savings plan (RRSP) limits, pension adjustment calculations, and the tax treatment of pension contributions and benefits."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a defined benefit and defined contribution pension plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A defined benefit (DB) plan promises a specific retirement benefit calculated by a formula (typically based on years of service and earnings). The employer bears the investment risk and must fund the plan to meet benefit obligations. A defined contribution (DC) plan specifies the contribution rate (employer and/or employee); the retirement benefit depends on investment returns. The employee bears the investment risk in a DC plan. Ontario's PBA applies to both types but has specific requirements for DB plan solvency funding and wind-up that do not apply to DC plans."
      }
    },
    {
      "@type": "Question",
      "name": "What are the vesting and locking-in rules under the Ontario PBA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Ontario PBA, pension benefits vest (become the member's entitlement regardless of continued employment) after 2 years of membership in the pension plan (s. 37). Once vested, the benefit is locked-in — it cannot be withdrawn as cash before retirement (with limited exceptions for small pensions and financial hardship). Locked-in funds must be used to provide a retirement income, typically transferred to a life income fund (LIF) or locked-in retirement account (LIRA) on termination of employment, or left in the plan until retirement."
      }
    },
    {
      "@type": "Question",
      "name": "How is a pension divided on marriage breakdown in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under sections 51-67 of the Ontario PBA, a pension plan member's spouse (married spouse or eligible common-law spouse) is entitled to a division of the pension benefit accrued during the period of cohabitation on a marriage breakdown. The Family Law Act (FLA) governs the equalization of net family property (NFP), which includes pension value. The PBA provides a mechanism for dividing pension plans under a family law valuation order or domestic contract. The pension value must be calculated using actuarial methods — the Ontario government publishes pension valuation guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "What happens when an Ontario pension plan is wound up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a pension plan is wound up, all accrued benefits of active, deferred, and retired members vest immediately. The plan administrator must file a wind-up report with FSRA, distribute the plan's assets among members according to PBA priorities, and discharge any solvency deficiency. If the plan has a solvency deficiency (assets insufficient to cover liabilities on wind-up), the employer is responsible for the shortfall. In a partial wind-up (affecting a division or group), affected members receive the same protections as a full wind-up. Ontario has eliminated most partial wind-ups since 2018 legislative changes."
      }
    }
  ]
}`;

export default function OntarioPensionBenefitsPage() {
  return (
    <>
      <Script id="pension-benefits-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="pension-benefits-faq-schema" type="application/ld+json">
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
              Employment Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Pension Benefits: PBA, FSRA Regulation, and Member Rights
            </h1>
            <p className="text-lg text-slate-600">
              Ontario pension law — centred on the{" "}
              <em>Pension Benefits Act</em> (PBA) and administered by the
              Financial Services Regulatory Authority (FSRA) — governs the
              rights of pension plan members, the funding obligations of
              employers, and the wind-up of pension plans. For Ontario
              employment and labour lawyers advising plan members, employers,
              or plan administrators, this guide covers the core PBA framework,
              vesting and locking-in rules, solvency requirements, pension
              division on marriage breakdown, and FSRA enforcement.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2>The PBA and FSRA</h2>
            <p>
              The <em>Pension Benefits Act</em>, RSO 1990, c P.8 sets minimum
              standards for Ontario pension plans — both employer-sponsored
              and multi-employer plans. The Financial Services Regulatory
              Authority of Ontario (FSRA) administers and enforces the PBA,
              reviews plan registrations, monitors funding compliance, and
              investigates complaints.
            </p>
            <p>
              Pension plans are also subject to the federal{" "}
              <em>Income Tax Act</em> (ITA) — pension contributions are
              governed by registered pension plan (RPP) rules, pension
              adjustment (PA) calculations affect RRSP room, and plan
              registration and tax exemption require CRA compliance.
            </p>

            <h2>Types of Pension Plans</h2>
            <h3>Defined Benefit (DB) Plans</h3>
            <p>
              A DB plan promises a specific retirement benefit, typically
              calculated as:
            </p>
            <p>
              <em>Years of credited service × Benefit formula rate × Average or final earnings</em>
            </p>
            <p>
              For example: 2% × 30 years × $80,000 final average earnings =
              $48,000 per year at retirement.
            </p>
            <p>
              The employer bears the investment and longevity risk. If the plan&apos;s
              assets are insufficient to meet benefit obligations, the employer
              must make additional contributions (solvency special payments and
              going-concern special payments). DB plans have been declining in
              the private sector but remain common in public sector and unionized
              workplaces.
            </p>

            <h3>Defined Contribution (DC) Plans</h3>
            <p>
              A DC plan specifies the rate at which contributions are made to
              individual member accounts — for example, 5% of earnings by the
              employee and 5% matched by the employer. The retirement benefit
              depends entirely on contributions made and investment returns
              earned. The member bears the investment risk.
            </p>
            <p>
              DC plans have lower regulatory compliance burdens for employers
              (no solvency concerns) and have become the dominant private sector
              plan design in Ontario.
            </p>

            <h3>Hybrid and Multi-Employer Plans</h3>
            <p>
              Hybrid plans (e.g., combination DB/DC, target benefit plans)
              share risk between employers and members in various ways.
              Multi-employer pension plans (MEPPs) and jointly sponsored
              pension plans (JSPPs) — such as OMERS, Teachers&apos;, and CUPE&apos;s
              CAAT plan — are governed by specialized PBA provisions and may
              have different funding and wind-up rules.
            </p>

            <h2>Vesting and Locking-In</h2>
            <p>
              Under s. 37 of the PBA, a member&apos;s pension benefit vests
              after <strong>2 years of plan membership</strong>. Once vested,
              the benefit belongs to the member regardless of whether they
              remain employed.
            </p>
            <p>
              Once vested, the benefit is also <strong>locked-in</strong> —
              it cannot be withdrawn as cash before retirement, except in
              limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Small pension exception</strong>: where the annual
                pension is less than 4% of the YMPE (Year&apos;s Maximum
                Pensionable Earnings — approximately $68,500 in 2024), the
                pension may be paid as a lump sum on wind-up or plan
                termination
              </li>
              <li>
                <strong>Shortened life expectancy</strong>: FSRA may allow
                unlocking where life expectancy is significantly shortened
                due to disability
              </li>
              <li>
                <strong>Non-residency</strong>: locked-in funds may be
                unlocked upon a member establishing non-residency for
                tax purposes
              </li>
            </ul>

            <h2>Solvency Funding for DB Plans</h2>
            <p>
              DB plans must maintain assets sufficient to cover benefit
              obligations — assessed on both a going-concern basis (assuming
              the plan continues indefinitely) and a solvency basis (assuming
              the plan terminates immediately). The solvency ratio (solvency
              assets ÷ solvency liabilities) must be above 85% without
              requiring letters of credit or additional contributions in some
              circumstances.
            </p>
            <p>
              Ontario introduced PBA amendments in 2018 that created an
              enhanced going-concern funding framework and modified solvency
              funding requirements — reducing the burden on sponsors of plans
              in DB plans with high funding ratios.
            </p>

            <h2>Member Rights Under the PBA</h2>
            <p>
              The PBA provides pension plan members with:
            </p>
            <ul>
              <li>
                <strong>Right to information</strong>: annual member
                statements, plan text, valuation reports (s. 25-31)
              </li>
              <li>
                <strong>Right to a statement on termination</strong>:
                full disclosure of benefit entitlement and transfer options
                within 30 days of leaving employment (s. 40)
              </li>
              <li>
                <strong>Transfer rights</strong>: on termination of employment,
                a member may elect to leave the benefit in the plan (deferred
                pension), transfer to another employer&apos;s plan (if accepted),
                or transfer to a LIRA (locked-in retirement account)
              </li>
              <li>
                <strong>Survivor benefits</strong>: on a member&apos;s death,
                the member&apos;s spouse is entitled to a survivor benefit
                under the PBA equal to at least 60% of the joint pension
                amount (for DB plans with a spousal benefit)
              </li>
            </ul>

            <h2>Pension Division on Marriage Breakdown</h2>
            <p>
              Under the <em>Family Law Act</em> (FLA) equalization of net
              family property, a pension is an asset that must be valued and
              included in the NFP calculation. The PBA provides a mechanism
              for dividing the pension between the member and their spouse
              pursuant to a court order or domestic contract.
            </p>
            <p>
              Key considerations:
            </p>
            <ul>
              <li>
                DB plan value must be calculated by an actuary — the
                Ontario government publishes pension valuation guidelines
                that prescribe actuarial methods
              </li>
              <li>
                Division may be implemented as: a lump sum transfer to the
                spouse&apos;s LIRA (if available under the plan), a deferred
                credit within the plan (for DC plans), or a separate pension
                for the spouse
              </li>
              <li>
                The plan administrator has obligations to both the member
                and the non-member spouse regarding disclosure and implementation
                of a division order
              </li>
            </ul>

            <h2>Plan Wind-Up</h2>
            <p>
              When a plan is wound up, all accrued benefits vest immediately
              (s. 69-75 PBA). The plan administrator must:
            </p>
            <ol>
              <li>
                File a wind-up report with FSRA within 6 months of the
                wind-up date
              </li>
              <li>
                Notify all affected members and beneficiaries
              </li>
              <li>
                Distribute plan assets according to PBA priorities (retired
                members first, deferred vested members, then active members)
              </li>
              <li>
                Fund any solvency deficiency — the employer is liable for
                the shortfall
              </li>
            </ol>
            <p>
              If the plan sponsor is insolvent, the Pension Benefits Guarantee
              Fund (PBGF) provides limited protection for DB plan members
              (up to approximately $1,500 per month), subject to eligibility
              criteria.
            </p>

            <h2>FSRA Enforcement</h2>
            <p>
              FSRA may investigate pension plans, require production of records,
              conduct examinations under oath, and issue orders. FSRA
              enforcement tools include:
            </p>
            <ul>
              <li>Orders to comply with the PBA</li>
              <li>
                Orders freezing plan assets or prohibiting distributions
                pending investigation
              </li>
              <li>
                Administrative monetary penalties (up to $1 million per
                contravention)
              </li>
              <li>
                Appointment of a receiver-manager for pension plan assets
              </li>
            </ul>
            <p>
              FSRA orders may be appealed to the Financial Services Tribunal,
              and Tribunal decisions are subject to judicial review in the
              Divisional Court.
            </p>

            <h2>How Atticus Helps Ontario Lawyers with Pension Files</h2>
            <p>
              Pension disputes involve complex actuarial evidence, regulatory
              proceedings before FSRA and the Financial Services Tribunal,
              and family law integration in marriage breakdown matters. Atticus
              supports Ontario lawyers with:
            </p>
            <ul>
              <li>
                <strong>Deadline tracking</strong> — AI extracts key dates
                from FSRA orders, wind-up notices, and family law proceedings
                to flag pension division and transfer deadlines
              </li>
              <li>
                <strong>Document analysis</strong> — AI reviews plan texts,
                FSRA orders, and actuarial reports to surface key provisions
                and compliance obligations
              </li>
              <li>
                <strong>Matter management</strong> — track FSRA enforcement
                stages, Financial Services Tribunal appeal deadlines, and
                pension division implementation steps
              </li>
              <li>
                <strong>LSO-compliant trust accounting</strong> — manage
                trust funds for complex employment and pension dispute files
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Ontario-Built Practice Management for Employment and Benefits Lawyers
              </h3>
              <p className="text-slate-700 mb-4 text-sm">
                Atticus helps Ontario employment, labour, and pension lawyers
                manage deadlines, document analysis, and client files — with
                LSO-compliant trust accounting built in.
                $149 CAD per lawyer per month.
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
                  href: "/blog/ontario-employment-standards-act",
                  label: "Ontario Employment Standards Act",
                },
                {
                  href: "/blog/ontario-employment-termination-pay",
                  label: "Ontario Employment Termination Pay",
                },
                {
                  href: "/blog/ontario-family-law-separation-process",
                  label: "Ontario Family Law — Separation and Divorce",
                },
                {
                  href: "/ontario-employment-lawyer",
                  label: "Ontario Employment Lawyers",
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
