import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario LSO Complaints Guide 2024: Professional Discipline, Hearings, and Reinstatement",
  description:
    "Complete guide to Ontario Law Society professional discipline: LSO complaint process (intake, investigation, referral), Law Society Tribunal hearings (Hearing Division, Appeal Division), penalty spectrum (reprimand to disbarment), conditions and suspension, reinstatement applications for Ontario lawyers and paralegals.",
  openGraph: {
    title: "Ontario LSO Complaints Guide 2024: Professional Discipline, Hearings, and Reinstatement",
    description:
      "LSO complaint process, Law Society Tribunal hearings, penalty spectrum, and reinstatement applications for Ontario lawyers and paralegals.",
    url: "https://getatticus.ca/blog/ontario-lso-complaints",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-lso-complaints" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario LSO Complaints Guide 2024: Professional Discipline, Hearings, and Reinstatement",
  "description": "Complete guide to Ontario Law Society professional discipline for lawyers and paralegals: complaint process, Tribunal hearings, penalty spectrum, and reinstatement.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-lso-complaints",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-lso-complaints"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the LSO complaint process work in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LSO complaints are filed with the Law Society of Ontario. The Intake department reviews the complaint and decides whether to open an investigation. A Law Society investigator gathers information from the complainant and the lawyer or paralegal. The file is reviewed by a Complaints Resolution Commissioner (CRC) before referral to the Law Society Tribunal. Many complaints are resolved at the intake or investigation stage without a formal hearing."
      }
    },
    {
      "@type": "Question",
      "name": "What are the grounds for LSO discipline in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Law Society Act, a licensee may be found to have engaged in professional misconduct or conduct unbecoming a licensee. Common grounds include: breach of Rules of Professional Conduct (misappropriation of trust funds, conflicts of interest, failure to communicate, failure to be candid with clients or tribunal, dishonesty), failure to cooperate with LSO investigation, trust accounting irregularities, unauthorized practice, and criminal convictions."
      }
    },
    {
      "@type": "Question",
      "name": "What penalties can the Law Society Tribunal impose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Law Society Tribunal Hearing Division can impose: reprimand, fine (up to $10,000 per finding), conditions on licence, suspension (fixed term or until conditions met), revocation of licence (disbarment for lawyers, revocation for paralegals). The Appeal Division hears appeals of Hearing Division decisions. The Divisional Court has jurisdiction to review Tribunal decisions on questions of law."
      }
    },
    {
      "@type": "Question",
      "name": "Can a disbarred Ontario lawyer apply for reinstatement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A disbarred lawyer or revoked paralegal may apply to the Law Society Tribunal for reinstatement. The applicant bears the onus of demonstrating rehabilitation, fitness to practise, and that reinstatement is in the public interest. Factors include the nature of the original misconduct, time elapsed, evidence of rehabilitation, character references, and proposed conditions. Reinstatement after misappropriation is rare and requires exceptional evidence of rehabilitation."
      }
    }
  ]
}`;

type ComplaintStage = {
  stage: string;
  description: string;
  outcome: string;
  timeline: string;
};

const complaintStages: ComplaintStage[] = [
  {
    stage: "Complaint intake",
    description: "Complainant submits complaint online or by mail to LSO; Intake department reviews to determine if matter is within LSO jurisdiction and raises a professional conduct concern",
    outcome: "Closed (outside jurisdiction or no conduct issue) or opened for investigation",
    timeline: "Weeks to 2 months",
  },
  {
    stage: "Investigation",
    description: "Law Society investigator contacts licensee for response; may request documents, trust records, client files; complainant may provide additional information",
    outcome: "Closed (no misconduct found), informal resolution, caution, or referral to Complaints Resolution Commissioner",
    timeline: "3-18 months",
  },
  {
    stage: "Complaints Resolution Commissioner",
    description: "Independent CRC reviews investigated files before referral to Tribunal; may recommend closure, caution, or referral for hearing; provides avenue for early resolution",
    outcome: "File closed, caution issued, or referred to Tribunal",
    timeline: "1-3 months post-investigation",
  },
  {
    stage: "Law Society Tribunal — Hearing Division",
    description: "Formal adversarial hearing before Tribunal adjudicators; parties exchange documents and witness lists; pre-hearing motions; full hearing on the merits with evidence and submissions",
    outcome: "Finding on professional misconduct or conduct unbecoming; penalty decision",
    timeline: "1-3 years from referral",
  },
  {
    stage: "Law Society Tribunal — Appeal Division",
    description: "Either party may appeal Hearing Division decision on finding or penalty; Appeal Division may allow appeal, dismiss, or vary the decision",
    outcome: "Appeal allowed (with or without substituted result) or dismissed",
    timeline: "6-18 months post-hearing decision",
  },
  {
    stage: "Divisional Court",
    description: "Judicial review of Tribunal decisions on questions of law; standard of review is reasonableness for most findings; correctness for questions of central importance to legal system",
    outcome: "Review granted or dismissed; matter remitted to Tribunal if review granted",
    timeline: "1-2 years post-Tribunal",
  },
];

type PenaltyType = {
  penalty: string;
  description: string;
  typicalContext: string;
};

const penaltySpectrum: PenaltyType[] = [
  {
    penalty: "Caution",
    description: "Informal warning issued by LSO without formal hearing; not a finding of misconduct; recorded but does not appear on public register",
    typicalContext: "Minor procedural or communication failures; first-time issues with no client harm",
  },
  {
    penalty: "Reprimand",
    description: "Formal finding of professional misconduct; Tribunal issues reprimand on the record; appears on public register",
    typicalContext: "Single or isolated misconduct; no client financial harm; early admission and cooperation",
  },
  {
    penalty: "Fine",
    description: "Monetary penalty up to $10,000 per finding; may be combined with other penalties; must be paid before licence restored if suspended",
    typicalContext: "Billing irregularities, trust account errors, failure to cooperate with investigation",
  },
  {
    penalty: "Conditions on licence",
    description: "Ongoing requirements imposed on practice: audits, supervision, mental health treatment, mandatory reporting, limitations on trust account authority",
    typicalContext: "Capacity concerns, addiction or mental health issues, practice management deficiencies",
  },
  {
    penalty: "Suspension",
    description: "Licence suspended for fixed term (weeks to years) or until conditions are met; suspended licensee must not practise law",
    typicalContext: "Serious misconduct, multiple prior findings, failure to respond to LSO",
  },
  {
    penalty: "Revocation / Disbarment",
    description: "Permanent revocation of licence; licensee struck from the roll; reinstatement requires separate application to Tribunal",
    typicalContext: "Misappropriation of trust funds, fraud, serious criminal conviction, pattern of serious misconduct",
  },
];

type MisconductCategory = {
  category: string;
  rules: string;
  examples: string;
};

const misconductCategories: MisconductCategory[] = [
  {
    category: "Trust account violations",
    rules: "Rules of Professional Conduct r.3.2-7, By-Law 9",
    examples: "Misappropriation of client trust funds; failure to maintain separate trust accounts; mixing trust and general funds; failure to remit funds; failing trust account records",
  },
  {
    category: "Conflicts of interest",
    rules: "Rules of Professional Conduct r.3.4",
    examples: "Acting for adverse parties without informed consent; acting against former client on related matter; undisclosed personal interest; improperly acting where independent legal advice required",
  },
  {
    category: "Failure to communicate",
    rules: "Rules of Professional Conduct r.3.2-1, r.7.2-4",
    examples: "Failing to respond to client inquiries; abandoning client without notice; failure to report on progress; missing deadlines without informing client",
  },
  {
    category: "Dishonesty and candour",
    rules: "Rules of Professional Conduct r.2.1-1, r.5.1-2",
    examples: "Misleading client about status of matter; misleading tribunal; false statements to court; fabricating or altering documents; failure to disclose adverse authority",
  },
  {
    category: "Failure to cooperate with LSO",
    rules: "Law Society Act s.49.3; Rules of Professional Conduct r.7.1-1",
    examples: "Failing to respond to LSO requests; failing to produce records; obstructing investigation; providing false information to investigator",
  },
  {
    category: "Criminal convictions",
    rules: "Law Society Act s.34(1); Law Society Act s.45",
    examples: "Fraud; theft; assault (depending on nature); criminal breach of trust; drug trafficking; convictions in other jurisdictions",
  },
];

export default function OntarioLSOComplaintsPage() {
  return (
    <>
      <Script id="ontario-lso-complaints-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-lso-complaints-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Professional Regulation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario LSO Complaints Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Professional Discipline, Law Society Tribunal, and Reinstatement
            </p>
            <p className="text-slate-400 text-sm">December 2024 &middot; 14 min read</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              The Law Society of Ontario (LSO) regulates the professional conduct of lawyers and paralegals
              under the <strong>Law Society Act</strong> and the <strong>Rules of Professional Conduct</strong>.
              The professional discipline process moves from complaint intake through investigation,
              Complaints Resolution Commissioner review, and — in serious cases — a formal hearing before
              the <strong>Law Society Tribunal</strong>. This guide covers the stages of the LSO complaint
              and discipline process, the categories of professional misconduct, the penalty spectrum from
              caution to disbarment, and the reinstatement process.
            </p>
          </div>
        </section>

        {/* Complaint Stages */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              LSO Complaint and Discipline Process: Six Stages
            </h2>
            <p className="text-slate-600 mb-8">
              LSO complaints progress through intake, investigation, Complaints Resolution Commissioner
              review, and — if not resolved — a formal Tribunal hearing with rights of appeal to the
              Tribunal Appeal Division and Divisional Court.
            </p>
            <div className="space-y-4">
              {complaintStages.map((stage, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-amber-400 font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{stage.stage}</h3>
                      <p className="text-slate-600 text-sm mb-3">{stage.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs">
                        <span className="bg-green-50 text-green-800 px-3 py-1 rounded-full font-medium">
                          Outcome: {stage.outcome}
                        </span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                          Timeline: {stage.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Misconduct Categories */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Categories of Professional Misconduct
            </h2>
            <p className="text-slate-600 mb-8">
              Professional misconduct and conduct unbecoming a licensee under the Law Society Act and Rules
              of Professional Conduct cover a wide range of conduct. These are the most common categories
              referred to the Law Society Tribunal.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Category</th>
                    <th className="text-left px-5 py-4 font-semibold">Rules</th>
                    <th className="text-left px-5 py-4 font-semibold">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {misconductCategories.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.category}</td>
                      <td className="px-5 py-4 text-slate-500 text-xs font-mono">{row.rules}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Penalty Spectrum */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Law Society Tribunal Penalty Spectrum
            </h2>
            <p className="text-slate-600 mb-8">
              The Law Society Tribunal Hearing Division has a broad range of penalties available, from
              caution (pre-hearing) to revocation of licence. The appropriate penalty is determined by
              the nature of the misconduct, aggravating and mitigating factors, prior discipline history,
              and the public interest in maintaining confidence in the legal profession.
            </p>
            <div className="space-y-4">
              {penaltySpectrum.map((penalty, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                  <div className="flex gap-4 items-start">
                    <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${
                      i === 0 ? "bg-green-400" :
                      i === 1 ? "bg-yellow-400" :
                      i === 2 ? "bg-amber-400" :
                      i === 3 ? "bg-orange-400" :
                      i === 4 ? "bg-red-400" :
                      "bg-red-700"
                    }`} />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{penalty.penalty}</h3>
                      <p className="text-slate-600 text-sm mb-2">{penalty.description}</p>
                      <p className="text-slate-500 text-xs italic">Typical context: {penalty.typicalContext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reinstatement */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Reinstatement After Disbarment or Revocation
            </h2>
            <div className="bg-white rounded-xl p-8 border border-slate-200 space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                A disbarred lawyer or revoked paralegal may apply to the Law Society Tribunal for
                reinstatement of their licence. Reinstatement is not automatic — the applicant bears
                the onus of demonstrating on a balance of probabilities that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>They are rehabilitated and fit to practise law or as a paralegal</li>
                <li>Reinstatement would not be contrary to the public interest</li>
                <li>The public would have confidence in the integrity of the legal profession if reinstatement is granted</li>
              </ul>
              <p>
                <strong>Key factors:</strong> nature and gravity of the original misconduct; time elapsed since revocation;
                evidence of rehabilitation (treatment, employment, community service, continuing education);
                character references; proposed supervision or conditions; remorse and insight.
              </p>
              <p>
                <strong>Trust fund misappropriation:</strong> Reinstatement after misappropriation of client trust funds
                is rare. The Tribunal applies heightened scrutiny and requires exceptional evidence of rehabilitation.
                Full restitution is a minimum; it is not sufficient on its own.
              </p>
              <p>
                <strong>Timing:</strong> There is no minimum waiting period before applying for reinstatement under the
                Law Society Act, but applications filed too soon after revocation are typically dismissed. In practice,
                the Tribunal expects several years of demonstrated rehabilitation for serious misconduct.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions: LSO Discipline
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How does the LSO complaint process work in Ontario?",
                  a: "LSO complaints are filed with the Law Society of Ontario. The Intake department reviews the complaint and decides whether to open an investigation. A Law Society investigator gathers information from the complainant and the lawyer or paralegal. The file is reviewed by a Complaints Resolution Commissioner (CRC) before referral to the Law Society Tribunal. Many complaints are resolved at the intake or investigation stage without a formal hearing.",
                },
                {
                  q: "What are the grounds for LSO discipline in Ontario?",
                  a: "Under the Law Society Act, a licensee may be found to have engaged in professional misconduct or conduct unbecoming a licensee. Common grounds include: breach of Rules of Professional Conduct (misappropriation of trust funds, conflicts of interest, failure to communicate, failure to be candid with clients or tribunal, dishonesty), failure to cooperate with LSO investigation, trust accounting irregularities, unauthorized practice, and criminal convictions.",
                },
                {
                  q: "What penalties can the Law Society Tribunal impose?",
                  a: "The Law Society Tribunal Hearing Division can impose: reprimand, fine (up to $10,000 per finding), conditions on licence, suspension (fixed term or until conditions met), revocation of licence (disbarment for lawyers, revocation for paralegals). The Appeal Division hears appeals of Hearing Division decisions. The Divisional Court has jurisdiction to review Tribunal decisions on questions of law.",
                },
                {
                  q: "Can a disbarred Ontario lawyer apply for reinstatement?",
                  a: "Yes. A disbarred lawyer or revoked paralegal may apply to the Law Society Tribunal for reinstatement. The applicant bears the onus of demonstrating rehabilitation, fitness to practise, and that reinstatement is in the public interest. Factors include the nature of the original misconduct, time elapsed, evidence of rehabilitation, character references, and proposed conditions. Reinstatement after misappropriation is rare and requires exceptional evidence of rehabilitation.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6 bg-white">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Atticus CTA */}
        <section className="py-16 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              LSO Compliance Built Into Your Practice
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus is built for LSO compliance: trust accounting under By-Law 9, conflict checking,
              client file management, and deadline tracking. Stay compliant and reduce the risk of LSO
              complaints with a practice management platform designed for Ontario.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-10 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Try Atticus Free for 14 Days
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Guides</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
                { href: "/lso-ai-guidance", label: "LSO Guidance on AI" },
                { href: "/blog/ontario-legal-ethics", label: "Ontario Legal Ethics" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
                { href: "/ontario-legal-software", label: "Ontario Legal Software" },
                { href: "/blog/ontario-limitation-periods", label: "Ontario Limitation Periods" },
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
