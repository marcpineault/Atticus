import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Human Rights Law — the Human Rights Code and HRTO Practice",
  description:
    "A comprehensive guide to the Ontario Human Rights Code RSO 1990 c H.19: protected grounds, social areas, HRTO procedure, constructive discrimination, duty to accommodate, and key decisions.",
  openGraph: {
    title: "Ontario Human Rights Law — the Human Rights Code and HRTO Practice",
    description:
      "Ontario Human Rights Code RSO 1990 c H.19: protected grounds, HRTO process, constructive discrimination O'Malley, duty to accommodate undue hardship, and key case law.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-human-rights-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-human-rights-law" },
};

export default function OntarioHumanRightsLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Human Rights Law — the Human Rights Code and HRTO Practice",
    description:
      "The Ontario Human Rights Code RSO 1990 c H.19: protected grounds, constructive discrimination, duty to accommodate, HRTO procedure, and key decisions including O'Malley, Meiorin, and Moore.",
    url: "https://getatticus.ca/blog/ontario-human-rights-law",
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-indigo-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              Human Rights Law
            </span>
            <span className="text-slate-400 text-sm">13 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ontario Human Rights Law — the Human Rights Code and HRTO Practice
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            The Ontario Human Rights Code RSO 1990 c H.19 prohibits discrimination and harassment
            across five social areas. This guide covers protected grounds, constructive discrimination,
            the duty to accommodate, HRTO procedure, and landmark cases.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

          <h2>The Human Rights Code — Framework and Structure</h2>
          <p>
            The <em>Human Rights Code</em> RSO 1990 c H.19 (the &quot;Code&quot;) is a quasi-constitutional statute
            in Ontario. As confirmed in <em>Tranchemontagne v Ontario</em> [2006] 1 SCR 513, the Code
            prevails over other provincial statutes unless the conflicting statute expressly provides
            otherwise. The Code creates rights, not merely remedies — its interpretation is purposive
            and generous (<em>Ontario Human Rights Commission v Simpsons-Sears Ltd</em> [1985] 2 SCR 536,
            &quot;O&apos;Malley&quot;).
          </p>
          <p>The Code prohibits discrimination and harassment in five social areas:</p>
          <ul>
            <li><strong>Services, goods, and facilities</strong> — s.1 (retail, professional services, restaurants, public transit, insurance)</li>
            <li><strong>Accommodation (housing)</strong> — s.2 (tenancy, co-operative housing)</li>
            <li><strong>Contracts</strong> — s.3</li>
            <li><strong>Employment</strong> — s.5 (hiring, terms, conditions, dismissal)</li>
            <li><strong>Membership in vocational associations</strong> — s.6 (unions, professional associations)</li>
          </ul>

          <h2>Protected Grounds</h2>
          <ul>
            <li>Race, ancestry, place of origin, colour, ethnic origin</li>
            <li>Citizenship</li>
            <li>Creed (religion — includes non-belief and sincerely held non-theistic beliefs)</li>
            <li>Sex (includes pregnancy — s.10(2); gender identity and gender expression added 2012)</li>
            <li>Sexual orientation</li>
            <li>Gender identity and gender expression (s.1 since 2012)</li>
            <li>Age (defined s.10 as 18+; no upper limit for employment since 2009 repeal of mandatory retirement)</li>
            <li>Marital status (includes conjugal relationships outside marriage)</li>
            <li>Family status (parent-child relationship — <em>Johnstone v Canada Border Services Agency</em> 2014 FCA 110)</li>
            <li>Disability (s.10 broad definition — physical, mental, psychiatric; past, present, or perceived; includes addiction)</li>
            <li>Receipt of public assistance (housing only — s.2(1))</li>
            <li>Record of offences (employment and housing — s.5, s.2; pardoned offences)</li>
          </ul>
          <p>
            Grounds are intersectional — discrimination may arise at the intersection of two or more grounds.
          </p>

          <h2>Constructive Discrimination — the O&apos;Malley Principle</h2>
          <p>
            <em>Ontario Human Rights Commission v Simpsons-Sears Ltd</em> [1985] 2 SCR 536 established
            that the Code reaches not only intentional discrimination but also <strong>constructive
            (adverse effect) discrimination</strong>: a rule that appears neutral on its face but has
            an adverse effect on a person because of a protected ground.
          </p>
          <p>
            In <em>O&apos;Malley</em>, a Saturday-work requirement adversely affected a Seventh-day Adventist
            employee whose creed prohibited Saturday work. The employer had a duty to accommodate
            to the point of undue hardship.
          </p>
          <p>
            The Supreme Court unified the direct/constructive distinction in <em>BC (Public Service
            Employee Relations Commission) v BCGSEU</em> [1999] 3 SCR 3 (&quot;Meiorin&quot;), adopting a
            single three-part test:
          </p>
          <ol>
            <li>The standard was adopted for a purpose rationally connected to the function being performed;</li>
            <li>The standard was adopted in honest and good-faith belief it was necessary; and</li>
            <li>The standard is reasonably necessary — the employer cannot accommodate without undue hardship.</li>
          </ol>

          <h2>Duty to Accommodate</h2>
          <p>
            The duty to accommodate requires modifying rules, practices, or physical environments to
            remove barriers experienced by persons with protected characteristics, to the point of
            <strong> undue hardship</strong>.
          </p>
          <h3>Undue Hardship — Factors</h3>
          <p>
            Section 17(2) specifies three factors in the disability context: cost, outside sources of
            funding, and health and safety requirements. Courts have confirmed:
          </p>
          <ul>
            <li>Cost must be quantified — speculation is insufficient (<em>Central Okanagan School District v Renaud</em> [1992] 2 SCR 970)</li>
            <li>Morale costs alone (co-worker resentment) do not constitute undue hardship</li>
            <li>Health and safety risks must be significant, not merely speculative</li>
            <li>The employee has a duty to cooperate in the accommodation process</li>
          </ul>
          <h3>Accommodation Process</h3>
          <p>
            Accommodation is collaborative. An employee must: (1) inform the employer of the disability
            and need for accommodation; (2) participate in finding solutions; and (3) accept reasonable
            accommodation even if not the preferred solution (<em>Renaud</em>). Medical information: employers
            may require confirmation of disability and functional limitations but not generally a diagnosis.
          </p>

          <h2>Harassment</h2>
          <p>
            Section 5(2) prohibits harassment in employment based on a protected ground. Section 7
            prohibits sexual solicitation and reprisals. &quot;Harassment&quot; in s.10(1) means a course of
            vexatious comment or conduct known or ought reasonably to be known to be unwelcome.
          </p>
          <p>
            Employers are vicariously liable for harassment by supervisors and managers
            (<em>Janzen v Platy Enterprises</em> [1989] 1 SCR 1252 — sexual harassment is sex
            discrimination). An employer who had no knowledge and took all reasonable steps to
            prevent harassment may rebut liability.
          </p>

          <h2>HRTO — Human Rights Tribunal of Ontario</h2>
          <p>
            Since November 30, 2008 (Bill 107), applicants file complaints directly at the HRTO
            rather than through the OHRC. The OHRC retains public interest functions — education,
            policy development, and independent applications.
          </p>
          <h3>Limitation Period</h3>
          <p>
            An application must be filed within <strong>one year</strong> of the last alleged
            discriminatory act (s.34(1)). Extension possible where in the interest of justice.
          </p>
          <h3>Process</h3>
          <p>
            Applicant files Form 1; respondent files Response within 35 days. HRTO screens for
            jurisdiction and abuse of process (s.45.6 — overlap with grievance arbitration;
            s.45 — overlap with other proceedings). Mediation before hearing resolves approximately
            60-70% of applications.
          </p>
          <h3>Hearing and Burden</h3>
          <p>
            Standard of proof: balance of probabilities. Once the applicant establishes a prima facie
            case (the ground was a factor in the treatment), the burden shifts to the respondent
            to justify the conduct (<em>Moore v BC (Education)</em> 2012 SCC 61).
          </p>
          <h3>Remedies — s.45.2</h3>
          <ul>
            <li>General damages — injury to dignity, feelings, and self-respect (typical range $5,000–$50,000)</li>
            <li>Lost wage compensation and future wage loss</li>
            <li>Reinstatement (employment)</li>
            <li>Policy changes, training, monitoring</li>
            <li>Public interest remedies — systemic change orders</li>
          </ul>
          <p>No punitive damages. No costs orders. Post-award interest available.</p>

          <h2>Key Case Law</h2>
          <ul>
            <li><strong>O&apos;Malley [1985] 2 SCR 536</strong> — constructive discrimination; duty to accommodate; creed (Saturday work)</li>
            <li><strong>Renaud [1992] 2 SCR 970</strong> — employee duty to cooperate in accommodation</li>
            <li><strong>Meiorin [1999] 3 SCR 3</strong> — unified three-part test for all discrimination</li>
            <li><strong>Grismer [1999] 3 SCR 868</strong> — individualized accommodation assessment; visual acuity standard</li>
            <li><strong>Moore v BC (Education) 2012 SCC 61</strong> — disability (dyslexia); systemic discrimination; prima facie burden shift</li>
            <li><strong>Tranchemontagne v Ontario [2006] 1 SCR 513</strong> — Code quasi-constitutional; addiction as disability</li>
            <li><strong>Janzen v Platy Enterprises [1989] 1 SCR 1252</strong> — sexual harassment is sex discrimination; employer vicarious liability</li>
            <li><strong>Johnstone v CBSA 2014 FCA 110</strong> — family status; childcare obligations as protected ground</li>
          </ul>

          <h2>Special Programs — s.14</h2>
          <p>
            Section 14 permits special programs designed to relieve hardship or disadvantage for
            groups protected under the Code. Such programs do not violate the Code even where
            they create preferential treatment for a protected group.
          </p>

          <h2>Human Rights and LSO Obligations</h2>
          <p>
            Ontario lawyers have obligations under both the Code and the LSO Rules of Professional
            Conduct. Rule 6.3 (Discrimination and Harassment) prohibits discrimination and harassment
            in professional dealings and in the operation of a law practice. An Ontario firm&apos;s
            practice management platform should support accessible interfaces and not create
            barriers for lawyers with disabilities.
          </p>

        </div>
      </article>

      {/* CTA */}
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
