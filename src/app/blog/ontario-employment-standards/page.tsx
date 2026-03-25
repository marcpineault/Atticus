import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Employment Standards — the Employment Standards Act 2000 and Wrongful Dismissal",
  description:
    "A comprehensive guide to Ontario employment standards: the Employment Standards Act 2000 minimum standards, termination and severance pay, constructive dismissal, just cause, and the common law reasonable notice obligation.",
  openGraph: {
    title: "Ontario Employment Standards — the Employment Standards Act 2000 and Wrongful Dismissal",
    description:
      "Ontario ESA 2000: minimum wage, overtime, vacation, termination pay, severance pay, constructive dismissal, just cause, and common law reasonable notice.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-employment-standards",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-employment-standards" },
};

export default function OntarioEmploymentStandardsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Employment Standards — the Employment Standards Act 2000 and Wrongful Dismissal",
    description:
      "Ontario ESA 2000: minimum standards, termination and severance pay, constructive dismissal, just cause, common law reasonable notice Bardal factors, and the Honda principle for damages.",
    url: "https://getatticus.ca/blog/ontario-employment-standards",
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
      <section className="bg-gradient-to-br from-slate-900 to-rose-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-rose-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              Employment Law
            </span>
            <span className="text-slate-400 text-sm">14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ontario Employment Standards — the Employment Standards Act 2000 and Wrongful Dismissal
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A comprehensive guide to Ontario employment law: minimum standards under the ESA 2000,
            termination and severance pay, constructive dismissal, just cause, and the common law
            reasonable notice obligation under Bardal and its successors.
          </p>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

          <h2>Employment Standards Act 2000 — Minimum Standards</h2>
          <p>
            The <em>Employment Standards Act 2000</em> SO 2000 c 41 (ESA) sets minimum standards
            for most employees in Ontario employed by provincially regulated employers. Federally
            regulated employees (banking, telecommunications, interprovincial transportation,
            broadcasting) are covered by the <em>Canada Labour Code</em> Part III instead.
          </p>

          <h3>Minimum Wage</h3>
          <p>
            The general minimum wage in Ontario is set by regulation and adjusted annually.
            Special minimum wage rates apply to: students under 18 working fewer than 28 hours
            per week during the school year; homeworkers (10% premium over general minimum);
            hunting/fishing/wilderness guides (daily or half-daily rates).
          </p>

          <h3>Hours of Work and Overtime</h3>
          <p>
            Under ESA s.17, an employee must not be required to work more than 8 hours per day
            or 48 hours per week (unless an averaging agreement or excess hours agreement is in
            place). Employees must receive at least 11 consecutive hours off duty each day and
            24 consecutive hours off duty each week (or 48 consecutive hours off in two weeks).
          </p>
          <p>
            <strong>Overtime pay</strong>: Employees are entitled to 1.5x their regular rate for
            hours worked in excess of 44 hours per week (ESA s.22). Professional exemptions
            apply (licensed lawyers, doctors, engineers, architects — ESA s.3(1) Schedule 1).
            Managers and supervisors whose work is primarily managerial are exempt from overtime
            provisions.
          </p>

          <h3>Vacation Time and Pay</h3>
          <p>
            ESA s.33: employees are entitled to a minimum of two weeks&apos; vacation per year after
            one year of employment, increasing to three weeks&apos; vacation per year after five years
            with the same employer (as of July 1, 2018 — <em>Fair Workplaces, Better Jobs Act 2017</em>).
            Vacation pay is 4% (two weeks) or 6% (three weeks) of gross wages earned in the
            vacation entitlement year.
          </p>

          <h3>Public Holidays</h3>
          <p>
            Ontario has nine public holidays under ESA s.26-30:
            New Year&apos;s Day, Family Day, Good Friday, Victoria Day, Canada Day, Labour Day,
            Thanksgiving, Christmas Day, Boxing Day. Most employees are entitled to a public
            holiday off with public holiday pay (average of wages and vacation pay earned in
            the four weeks before the holiday divided by 20 working days).
          </p>

          <h3>Leaves of Absence</h3>
          <p>
            The ESA provides multiple leaves:
          </p>
          <ul>
            <li>Pregnancy leave — 17 weeks (s.46)</li>
            <li>Parental leave — up to 63 weeks for a primary caregiver, 37 weeks otherwise (s.48)</li>
            <li>Personal emergency leave — 10 days per year (3 paid if 25+ employees) since the ESA 2018 amendment</li>
            <li>Family caregiver leave — 8 weeks per year per seriously ill family member (s.49.1)</li>
            <li>Critically ill child care leave — up to 37 weeks (s.49.4)</li>
            <li>Domestic or sexual violence leave — up to 10 days and 15 weeks (s.49.7)</li>
            <li>Reservist leave — up to 8 weeks for pre-deployment and 52 weeks for deployment (s.50.2)</li>
          </ul>

          <h2>Termination of Employment</h2>
          <h3>ESA Termination Pay — Statutory Minimums</h3>
          <p>
            An employer who terminates an employee without cause must provide notice or pay in
            lieu of notice under ESA Part XV:
          </p>
          <ul>
            <li>1 week per year of service, minimum 1 week and maximum 8 weeks</li>
            <li>Notice or payment in lieu is required regardless of the reason for termination (except wilful misconduct, disobedience, or wilful neglect of duty — ESA s.54)</li>
            <li>Termination without proper notice or pay is a deemed constructive dismissal under the ESA</li>
          </ul>
          <h3>ESA Severance Pay</h3>
          <p>
            Severance pay (separate from termination pay) is owed when: (a) the employee has
            been employed for 5+ years; and (b) the employer has an Ontario payroll of $2.5M+
            or the employee is part of a mass termination of 50+ employees within a 6-month
            period (ESA s.64). Severance pay = one week per year of service (pro-rated for
            partial years), maximum 26 weeks.
          </p>
          <h3>Mass Termination</h3>
          <p>
            Where 50 or more employees are terminated within a 4-week period, the employer must
            provide notice under ESA s.58 — 8, 12, or 16 weeks depending on the number of
            employees terminated. Mass termination notice triggers the obligation to pay
            entitlements of all terminated employees.
          </p>

          <h2>Common Law Reasonable Notice</h2>
          <p>
            In addition to ESA minimums, an employer who terminates a non-union employee without
            cause must provide common law reasonable notice. The common law notice obligation
            is typically much longer than the ESA minimum. The leading case is
            <em>Bardal v Globe and Mail Ltd</em> (1960) 24 DLR (2d) 140 (ONHC):
          </p>
          <blockquote>
            &quot;There can be no catalogue laid down as to what is reasonable notice in particular
            classes of cases. The reasonableness of the notice must be decided with reference
            to each particular case, having regard to the character of the employment, the length
            of service of the servant, the age of the servant and the availability of similar
            employment having regard to the experience, training and qualifications of the servant.&quot;
          </blockquote>
          <p>
            The <strong>Bardal factors</strong> are: (a) character of employment (seniority and responsibility);
            (b) length of service; (c) age of the employee; and (d) availability of similar employment.
            Modern courts have extended the list to include: inducement to leave prior employment,
            economic climate, and the employee&apos;s personal circumstances.
          </p>
          <p>
            As a practical matter, Canadian courts award approximately 1 month per year of service
            for long-service employees, with adjustments for the Bardal factors. Courts have awarded
            up to 24-26 months for senior employees with long tenures in competitive markets.
          </p>

          <h3>Damages for Wrongful Dismissal — the Honda Principle</h3>
          <p>
            Damages for wrongful dismissal are ordinarily limited to the wages and benefits the
            employee would have earned during the reasonable notice period. The Supreme Court
            addressed additional damages in <em>Honda Canada Inc v Keays</em> 2008 SCC 39:
          </p>
          <ul>
            <li><strong>Aggregated damages</strong> (formerly &quot;Wallace damages&quot;): The notice period may be extended where the employer engaged in bad faith conduct in the manner of dismissal. <em>Wallace v United Grain Growers</em> [1997] 3 SCR 701 held that a longer notice period was warranted where the employer&apos;s conduct during dismissal caused mental distress. <em>Honda</em> moved this from a notice extension to a separate head of damages for actual mental distress (proven, not presumed).</li>
            <li><strong>Moral damages</strong>: Available where the employer breached an independent obligation to the employee causing mental distress — the contract must be breached in a manner that is unfair or in bad faith (Honda para 57).</li>
            <li><strong>Punitive damages</strong>: Rare; require conduct that is malicious, oppressive, and high-handed — a separate actionable wrong.</li>
          </ul>

          <h2>Just Cause for Dismissal</h2>
          <p>
            An employer may dismiss an employee without notice or pay for just cause. The threshold
            for just cause is high — isolated incidents of poor performance are insufficient.
            The test from <em>McKinley v BC Tel</em> 2001 SCC 38 is contextual and proportionate:
            the court must determine whether the dishonest or misconduct was of a nature that was
            incompatible with the fundamental terms of the employment contract.
          </p>
          <p>
            <em>Dowling v Ontario (Workplace Safety and Insurance Board)</em> 2004 ONCA 43
            confirmed that just cause is not established by mere proof of misconduct — the
            misconduct must be serious enough to vitiate the employment relationship. The court
            examines: the nature of the misconduct, its effect on the employer, the employee&apos;s
            history, and whether dismissal is proportionate.
          </p>
          <p>
            The ESA does not recognize &quot;just cause&quot; as an exemption from statutory minimums
            (only &quot;wilful misconduct, disobedience, or wilful neglect&quot; — a higher bar). An
            employee dismissed for just cause at common law may still be entitled to ESA
            termination pay if the conduct was not wilful.
          </p>

          <h2>Constructive Dismissal</h2>
          <p>
            Constructive dismissal occurs when an employer makes a unilateral fundamental change
            to the terms and conditions of employment that a reasonable person would consider
            inconsistent with the continuation of the employment contract:
            <em>Farber v Royal Trust Co</em> [1997] 1 SCR 846. The employee may treat the contract
            as repudiated, resign, and sue for damages as though dismissed.
          </p>
          <p>
            Common constructive dismissal scenarios: significant demotion or reduction in duties;
            substantial pay cut; geographic relocation; harassment or poisoned work environment;
            unilateral reduction in benefits. The employee must resign within a reasonable time
            of the fundamental change (or risk being seen to have accepted the variation).
          </p>
          <p>
            <em>Potter v New Brunswick Legal Aid Services Commission</em> 2015 SCC 10 confirmed
            that constructive dismissal can arise from: (1) a single unilateral act that breaches
            an essential term of the contract; or (2) a series of acts that together show
            the employer no longer intends to be bound by the contract.
          </p>

          <h2>Wrongful Dismissal Claims — Procedure</h2>
          <p>
            Wrongful dismissal claims may be brought:
          </p>
          <ul>
            <li><strong>Ontario Superior Court</strong>: For common law damages (notice period compensation, Honda moral damages). No monetary limit on Superior Court claims. Limitation period: 2 years from dismissal under the <em>Limitations Act 2002</em>.</li>
            <li><strong>Small Claims Court</strong>: For claims up to $35,000 — faster and less expensive than Superior Court.</li>
            <li><strong>Employment Standards Officer</strong>: ESA complaints for statutory minimums only (termination pay, severance pay, wages). Ministry of Labour investigation, no concurrent Superior Court action while Ministry complaint is outstanding.</li>
            <li><strong>Human Rights Tribunal</strong>: For dismissals based on protected grounds under the Code — separate jurisdiction from common law wrongful dismissal.</li>
          </ul>

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
