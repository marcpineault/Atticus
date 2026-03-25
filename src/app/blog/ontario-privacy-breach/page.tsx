import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Privacy Breach Guide 2024 | PIPEDA, Breach Notification & Tort",
  description:
    "Complete guide to Ontario privacy breach law: PIPEDA breach notification requirements, Ontario's privacy tort, intrusion upon seclusion, class actions, and mandatory reporting to OPC.",
  openGraph: {
    title: "Ontario Privacy Breach Guide 2024 | PIPEDA, Breach Notification & Tort",
    description:
      "Everything Ontario lawyers need to know about privacy breaches — PIPEDA mandatory breach notification, real risk of significant harm test, intrusion upon seclusion tort, and OPC investigations.",
    url: "https://getatticus.ca/blog/ontario-privacy-breach",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Privacy Breach Guide 2024: PIPEDA Notification, Privacy Torts, and Regulatory Response",
      "description": "Comprehensive guide to Ontario privacy breach law covering PIPEDA mandatory breach notification, real risk of significant harm assessment, intrusion upon seclusion tort, class actions, and OPC complaint process.",
      "url": "https://getatticus.ca/blog/ontario-privacy-breach",
      "datePublished": "2024-12-01",
      "dateModified": "2024-12-01",
      "author": {
        "@type": "Organization",
        "name": "Atticus"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Atticus",
        "url": "https://getatticus.ca"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When must a business report a privacy breach under PIPEDA in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under PIPEDA (as amended by the Digital Privacy Act), organizations must report a breach of security safeguards to the Office of the Privacy Commissioner of Canada (OPC) and notify affected individuals if it is reasonable to believe the breach creates a real risk of significant harm. Notification must be given as soon as feasible after the organization determines that the breach has occurred. Organizations must also maintain a breach record for 24 months."
          }
        },
        {
          "@type": "Question",
          "name": "What is the intrusion upon seclusion tort in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intrusion upon seclusion is a common law privacy tort recognized by the Ontario Court of Appeal in Jones v Tsige [2012] ONCA 32. The three elements are: (1) the defendant intentionally or recklessly invaded the plaintiff's private affairs or concerns; (2) the plaintiff had a reasonable expectation of privacy in the matter intruded upon; and (3) a reasonable person would regard the invasion as highly offensive, causing distress, humiliation, or anguish. General damages of up to $20,000 are available without proof of actual financial loss."
          }
        },
        {
          "@type": "Question",
          "name": "Can Ontario employees sue for privacy breaches by their employer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Ontario employees can bring claims against employers for privacy breaches under two main avenues: (1) a complaint to the Office of the Privacy Commissioner of Canada under PIPEDA (for federally regulated employers) or a complaint under provincial privacy legislation; and (2) a civil action for intrusion upon seclusion or other privacy torts recognized in Ontario. Privacy breach class actions against employers are increasingly common."
          }
        },
        {
          "@type": "Question",
          "name": "What does 'real risk of significant harm' mean under PIPEDA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The real risk of significant harm threshold is met when it is reasonable to believe that a breach of security safeguards creates a real (not remote) risk of significant harm to an individual. Significant harm includes: bodily harm, humiliation, damage to reputation or relationships, loss of employment or business opportunities, financial loss, identity theft, and negative effects on credit. Factors include the sensitivity of the information, probability of harm, and number of individuals affected."
          }
        }
      ]
    }
  ]
}`;

type BreachStep = {
  step: string;
  requirement: string;
  timeline: string;
  notes: string;
};

const breachResponseSteps: BreachStep[] = [
  {
    step: "Contain the Breach",
    requirement: "Stop ongoing access; secure systems; preserve evidence",
    timeline: "Immediately",
    notes: "Forensic preservation critical for regulatory and litigation purposes",
  },
  {
    step: "Assess Risk",
    requirement: "Determine if breach creates real risk of significant harm",
    timeline: "As soon as possible",
    notes:
      "Consider: sensitivity of information, probability of harm, number affected",
  },
  {
    step: "Report to OPC",
    requirement: "Report to Office of the Privacy Commissioner of Canada",
    timeline: "As soon as feasible after breach determination",
    notes: "PIPEDA requires report if real risk of significant harm exists",
  },
  {
    step: "Notify Affected Individuals",
    requirement: "Direct notification to affected individuals",
    timeline: "As soon as feasible",
    notes:
      "Must include: what happened, what information was involved, what organization is doing, contact info",
  },
  {
    step: "Maintain Breach Record",
    requirement: "Create and maintain record of all breaches",
    timeline: "24-month retention",
    notes: "OPC can request breach records; failure to maintain is an offence",
  },
  {
    step: "Remediate and Review",
    requirement: "Fix root cause; update security safeguards; document learnings",
    timeline: "Ongoing",
    notes: "Regulators consider post-breach remediation in enforcement decisions",
  },
];

type HarmFactor = {
  factor: string;
  highRisk: string;
  lowerRisk: string;
};

const harmFactors: HarmFactor[] = [
  {
    factor: "Sensitivity of Information",
    highRisk: "Financial, health, SIN, passwords, intimate images",
    lowerRisk: "Publicly available information; general contact details",
  },
  {
    factor: "Probability of Misuse",
    highRisk: "Malicious actor with intent to exploit; data already published",
    lowerRisk: "Accidental disclosure; no evidence of misuse",
  },
  {
    factor: "Potential Harm Type",
    highRisk: "Identity theft, financial fraud, physical harm, discrimination",
    lowerRisk: "Embarrassment only; no financial or physical risk",
  },
  {
    factor: "Number of Individuals",
    highRisk: "Large number affected; systemic breach",
    lowerRisk: "Isolated incident; single individual",
  },
  {
    factor: "Vulnerability of Individuals",
    highRisk: "Children, seniors, health patients, domestic violence victims",
    lowerRisk: "General adult population",
  },
];

const faqs = [
  {
    q: "When must a business report a privacy breach under PIPEDA in Ontario?",
    a: "Under PIPEDA (as amended by the Digital Privacy Act), organizations must report a breach of security safeguards to the Office of the Privacy Commissioner of Canada (OPC) and notify affected individuals if it is reasonable to believe the breach creates a real risk of significant harm. Notification must be given as soon as feasible after the organization determines that the breach has occurred. Organizations must also maintain a breach record for 24 months.",
  },
  {
    q: "What is the intrusion upon seclusion tort in Ontario?",
    a: "Intrusion upon seclusion is a common law privacy tort recognized by the Ontario Court of Appeal in Jones v Tsige [2012] ONCA 32. The three elements are: (1) the defendant intentionally or recklessly invaded the plaintiff's private affairs or concerns; (2) the plaintiff had a reasonable expectation of privacy in the matter intruded upon; and (3) a reasonable person would regard the invasion as highly offensive, causing distress, humiliation, or anguish. General damages of up to $20,000 are available without proof of actual financial loss.",
  },
  {
    q: "Can Ontario employees sue for privacy breaches by their employer?",
    a: "Yes. Ontario employees can bring claims against employers for privacy breaches under two main avenues: (1) a complaint to the Office of the Privacy Commissioner of Canada under PIPEDA for federally regulated employers; and (2) a civil action for intrusion upon seclusion or other privacy torts recognized in Ontario. Privacy breach class actions against employers are increasingly common.",
  },
  {
    q: "What does 'real risk of significant harm' mean under PIPEDA?",
    a: "The real risk of significant harm threshold is met when it is reasonable to believe that a breach of security safeguards creates a real (not remote) risk of significant harm to an individual. Significant harm includes: bodily harm, humiliation, damage to reputation or relationships, loss of employment or business opportunities, financial loss, identity theft, and negative effects on credit.",
  },
];

export default function OntarioPrivacyBreachPage() {
  return (
    <>
      <Script id="ontario-privacy-breach-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-6 pt-6">
          <nav className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:text-slate-700">
              Blog
            </Link>{" "}
            / Ontario Privacy Breach
          </nav>
        </div>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 py-12">
          <div className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Privacy Law
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Ontario Privacy Breach Guide 2024: PIPEDA Notification, Privacy
            Torts, and Regulatory Response
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            A comprehensive reference for Ontario lawyers advising on privacy
            breaches — covering PIPEDA mandatory notification, the real risk of
            significant harm assessment, intrusion upon seclusion tort, and OPC
            complaint procedure.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>By Atticus Legal Team</span>
            <span>•</span>
            <span>December 2024</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 pb-20">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Privacy breach response is now a core competency for Ontario
              lawyers advising businesses, employers, and health-care
              organizations. The mandatory breach notification provisions of
              PIPEDA came fully into force in November 2018, and the Ontario
              Court of Appeal&apos;s recognition of privacy torts has created
              significant civil litigation exposure for organizations that mishandle
              personal information.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the PIPEDA mandatory notification framework, how
              to assess &quot;real risk of significant harm,&quot; the three Ontario
              privacy torts, and the OPC complaint and investigation process.
            </p>
          </section>

          {/* PIPEDA Framework */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              PIPEDA Mandatory Breach Notification Framework
            </h2>
            <p className="text-slate-700 mb-6">
              The{" "}
              <em>Personal Information Protection and Electronic Documents Act</em>{" "}
              (PIPEDA), S.C. 2000, c 5 applies to private sector organizations
              in Ontario (as a province without substantially similar
              legislation for the private sector). The mandatory breach
              notification obligations in ss. 10.1-10.3 require organizations to
              act promptly.
            </p>
            <div className="space-y-4">
              {breachResponseSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-semibold text-slate-900">
                        {step.step}
                      </span>
                      <span className="bg-cyan-100 text-cyan-700 text-xs font-medium px-2 py-0.5 rounded-full">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mb-1">
                      {step.requirement}
                    </p>
                    <p className="text-slate-500 text-xs">{step.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Real Risk Assessment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Assessing Real Risk of Significant Harm
            </h2>
            <p className="text-slate-700 mb-6">
              Whether notification is required turns on whether the breach
              creates a &quot;real risk of significant harm.&quot; The OPC has published
              guidance on the factors to consider. This assessment must be
              documented.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">
                      Factor
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-red-400">
                      Higher Risk (Notify)
                    </th>
                    <th className="text-center px-4 py-3 font-semibold text-green-400">
                      Lower Risk
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {harmFactors.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.factor}
                      </td>
                      <td className="px-4 py-3 text-red-600 text-sm">
                        {row.highRisk}
                      </td>
                      <td className="px-4 py-3 text-green-700 text-sm">
                        {row.lowerRisk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Ontario Privacy Torts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Ontario Privacy Torts
            </h2>
            <p className="text-slate-700 mb-6">
              Ontario courts have recognized three privacy torts that create
              civil liability independent of regulatory sanctions:
            </p>
            <div className="space-y-4">
              {[
                {
                  tort: "Intrusion Upon Seclusion",
                  case: "Jones v Tsige [2012] ONCA 32",
                  elements:
                    "(1) Intentional or reckless invasion of private affairs; (2) reasonable expectation of privacy; (3) reasonable person would regard it as highly offensive causing distress, humiliation, or anguish",
                  damages:
                    "General damages up to $20,000 without proof of pecuniary loss; aggravated and punitive damages possible",
                  examples:
                    "Employer accessing employee bank records; accessing medical records without authorization",
                },
                {
                  tort: "Publicity Given to Private Life",
                  case: "Recognised as probable tort (not yet authoritatively established in Ontario)",
                  elements:
                    "Defendant gives publicity to matter of plaintiff's private life that would be highly offensive to a reasonable person",
                  damages:
                    "Damages for reputational harm, emotional distress; no fixed cap",
                  examples:
                    "Publishing private medical information online; disclosing intimate details to plaintiff's employer",
                },
                {
                  tort: "Public Disclosure of Embarrassing Private Facts",
                  case: "Closely related to publicity tort; developing in Ontario",
                  elements:
                    "Publication of private facts; not newsworthy or of legitimate public concern; highly offensive to reasonable person",
                  damages: "Similar to publicity tort; compensatory and punitive",
                  examples: "Sharing intimate images without consent (also covered by Criminal Code)",
                },
              ].map((tort, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">
                      {i + 1}. {tort.tort}
                    </h3>
                    <span className="text-xs text-cyan-700 font-medium bg-cyan-50 px-2 py-0.5 rounded-full">
                      {tort.case}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="font-medium text-slate-700">
                        Elements:{" "}
                      </span>
                      <span className="text-slate-600">{tort.elements}</span>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">
                        Damages:{" "}
                      </span>
                      <span className="text-slate-600">{tort.damages}</span>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">
                        Examples:{" "}
                      </span>
                      <span className="text-slate-600">{tort.examples}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Class Actions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Privacy Breach Class Actions in Ontario
            </h2>
            <p className="text-slate-700 mb-4">
              Privacy breach class actions have increased significantly since
              Jones v Tsige. The combination of a recognized tort without proof of
              individual financial loss (damages awarded on a per-capita basis)
              makes privacy breaches well-suited for certification.
            </p>
            <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
              <h3 className="font-semibold text-cyan-900 mb-3">
                Privacy Class Action Considerations
              </h3>
              <div className="space-y-2">
                {[
                  "Intrusion upon seclusion damages can be awarded on a class-wide basis without individual proof of harm — facilitating certification",
                  "Common issues: was information improperly accessed? Did defendant have adequate security safeguards? What is the appropriate general damages quantum?",
                  "Defendant organizations face class-wide damages plus administrative costs, reputational harm, and regulatory sanctions",
                  "Settlement considerations: payment per class member, credit monitoring services, cy-pres awards to privacy organizations",
                  "Limitation period: 2 years from discovery — key issue is when class members discovered the breach (usually when notified by the organization)",
                ].map((point, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span className="text-cyan-800">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-slate-200 rounded-xl p-6 bg-white"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 text-white rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Manage Your Privacy Law Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Atticus helps Ontario privacy lawyers manage breach response files,
              track OPC timelines, and draft privacy assessments faster with
              Canadian legal AI — fully PIPEDA-aware and LSO compliant.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">
              Related Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/ontario-privacy-law",
                  label: "Ontario Privacy Law Overview",
                },
                {
                  href: "/blog/ontario-class-action",
                  label: "Ontario Class Actions",
                },
                {
                  href: "/blog/ontario-negligence-law",
                  label: "Ontario Negligence Law",
                },
                {
                  href: "/blog/ontario-employment-contract",
                  label: "Ontario Employment Contracts",
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
          </section>
        </div>
      </div>
    </>
  );
}
