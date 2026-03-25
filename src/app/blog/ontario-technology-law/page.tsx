import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Technology Law Guide 2024 | Privacy, SaaS Contracts, AI Governance, and Data Breach",
  description:
    "Ontario technology law: PIPEDA and PHIPA privacy obligations, SaaS and software licensing agreements, data breach notification requirements, AI governance and liability, cybersecurity law, and open source compliance. For Ontario technology and commercial lawyers.",
  openGraph: {
    title: "Ontario Technology Law Guide 2024 | Privacy, SaaS Contracts, AI Governance, and Data Breach",
    description:
      "PIPEDA, PHIPA, data breach notification, SaaS agreements, AI liability, and cybersecurity law for Ontario technology and commercial lawyers.",
    url: "https://getatticus.ca/blog/ontario-technology-law",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-technology-law" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Technology Law Guide 2024: Privacy, SaaS Contracts, AI Governance, and Data Breach",
  "description": "Comprehensive guide to Ontario technology law including PIPEDA, PHIPA privacy obligations, SaaS agreements, AI governance and liability, data breach notification, and cybersecurity law.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-technology-law",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-technology-law"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the data breach notification requirements in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the federal Privacy Breach of Security Safeguards Regulations (in force November 2018), private sector organizations subject to PIPEDA must report breaches of security safeguards to the Privacy Commissioner of Canada and notify affected individuals where there is a real risk of significant harm. The report must be made as soon as feasible after determining a breach has occurred. Organizations must also maintain a breach record for 24 months. Ontario's Personal Health Information Protection Act (PHIPA) has separate breach notification requirements for health information custodians."
      }
    },
    {
      "@type": "Question",
      "name": "What is PIPEDA and does it apply to Ontario businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Personal Information Protection and Electronic Documents Act (PIPEDA) is Canada's federal private sector privacy law. It applies to private sector organizations that collect, use, or disclose personal information in the course of commercial activities, including online activities, across provincial and international borders. Ontario does not have a substantially similar private sector privacy law (unlike Quebec, BC, and Alberta), so PIPEDA applies to Ontario private sector organizations. PHIPA is Ontario's health-sector privacy law and applies to health information custodians."
      }
    },
    {
      "@type": "Question",
      "name": "What key clauses should be in a SaaS agreement for Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SaaS agreement governed by Ontario law should address: subscription scope (users, modules, volume); SLA and uptime commitments with remedies (service credits); data ownership (customer retains ownership of their data); data processing and privacy (PIPEDA compliance, data residency, processor obligations); security standards (encryption, access controls, incident response); limitation of liability and indemnification; termination and data return/deletion; change management for pricing and features; and governing law (Ontario, Canada). For B2B SaaS, Canadian customers increasingly require data residency in Canada."
      }
    },
    {
      "@type": "Question",
      "name": "Who is liable when AI causes harm in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Canada does not yet have specific AI liability legislation (as of 2024; Bill C-27's Artificial Intelligence and Data Act (AIDA) did not pass before Parliament was prorogued in January 2025). AI liability in Ontario is currently governed by existing tort law (negligence, products liability), contract law, and sector-specific regulations. A company that deploys an AI system that causes harm may be liable under negligence if the system was defective or used carelessly. Professionals (lawyers, doctors) who use AI tools remain personally responsible for their professional work product regardless of AI involvement."
      }
    }
  ]
}`;

const pipedaPrinciples = [
  { principle: "1. Accountability", description: "Organization is responsible for personal information under its control; must designate a privacy officer" },
  { principle: "2. Identifying Purposes", description: "Identify the purposes for collection before or at time of collection" },
  { principle: "3. Consent", description: "Knowledge and consent of the individual required for collection, use, or disclosure (exceptions apply)" },
  { principle: "4. Limiting Collection", description: "Collect only what is necessary for identified purposes" },
  { principle: "5. Limiting Use, Disclosure, and Retention", description: "Use or disclose only for purpose for which collected; retain only as long as necessary" },
  { principle: "6. Accuracy", description: "Keep personal information as accurate, complete, and up-to-date as necessary" },
  { principle: "7. Safeguards", description: "Protect personal information with security appropriate to sensitivity" },
  { principle: "8. Openness", description: "Policies and practices regarding management of personal information must be readily available" },
  { principle: "9. Individual Access", description: "Individual must be able to access their own personal information and challenge its accuracy" },
  { principle: "10. Challenging Compliance", description: "Individual may challenge organization's compliance with the 10 principles" },
];

const saasKeyTerms = [
  {
    term: "Data Ownership and Portability",
    description: "Customer retains ownership of all data uploaded to the platform; vendor must provide data export in standard format; data must be returned or deleted within specified period after termination",
    risk: "Without this, customer data may be held hostage at renewal or migration",
  },
  {
    term: "Data Residency",
    description: "Specify whether customer data is stored exclusively in Canada; Canadian governments, health organizations, and increasingly commercial customers require Canadian data residency",
    risk: "PIPEDA and PHIPA compliance may be compromised by foreign data storage; LSO guidance requires Ontario lawyers to consider data storage location",
  },
  {
    term: "Service Level Agreement (SLA)",
    description: "Uptime guarantees (99.9% = ~8.7 hrs downtime/year); scheduled maintenance windows; incident response times; service credit remedies for SLA breaches",
    risk: "Without SLA remedies, customer has no contractual recourse for unavailability",
  },
  {
    term: "Security Standards",
    description: "Encryption standards (TLS in transit, AES-256 at rest); access controls (MFA, role-based access); penetration testing frequency; SOC 2 Type II or ISO 27001 certification",
    risk: "Inadequate security provisions create privacy breach liability and may violate PIPEDA obligations",
  },
  {
    term: "Limitation of Liability",
    description: "Cap on vendor liability (typically 12 months of fees paid); exclusion of indirect, consequential, and punitive damages; carve-outs for fraud, gross negligence, and data breach obligations",
    risk: "Unrestricted liability exposes vendor to catastrophic claims; insufficient carve-outs leave customer without recourse for serious harm",
  },
  {
    term: "Acceptable Use Policy (AUP)",
    description: "Prohibited uses: illegal activity, competitor analysis, scraping, overloading systems; consequences for AUP violation; user credentialing obligations",
    risk: "Without AUP, vendor cannot terminate for misuse; customer may not understand use restrictions",
  },
];

const aiGovernanceIssues = [
  {
    issue: "AI and Legal Professional Responsibility",
    description: "LSO Rules of Professional Conduct require competence (Rule 3.1-2). Ontario lawyers who use AI tools remain fully responsible for work product regardless of AI assistance. LSO AI Guidance (May 2024) requires lawyers to verify AI outputs, maintain competence in tools used, and address client consent and confidentiality before using AI on client matters.",
  },
  {
    issue: "AI Training Data and Copyright",
    description: "Training large language models on copyrighted works without license raises infringement risk in Canada (Copyright Act, RSC 1985). The Federal Court addressed AI-related copyright issues in ongoing proceedings (2024). Technology lawyers advising AI developers must address data licensing, synthetic data alternatives, and model documentation.",
  },
  {
    issue: "Automated Decision-Making",
    description: "PIPEDA requires meaningful explanation of automated decisions that significantly affect individuals. Bill C-27 would have introduced AIDA requirements for high-impact AI systems (risk assessments, transparency, bias mitigation, human oversight) — though AIDA did not pass before Parliament was prorogued January 2025. GDPR-equivalent requirements may apply to Canadian companies processing EU data.",
  },
  {
    issue: "AI Liability and Negligence",
    description: "No specific Canadian AI liability framework exists as of 2024. Negligence principles apply: a company deploying a defective AI system may be liable if it caused foreseeable harm and the company failed to take reasonable care. Medical AI, credit AI, and criminal justice AI are highest-risk sectors. Professional liability remains with the professional regardless of AI involvement.",
  },
];

export default function OntarioTechnologyLawPage() {
  return (
    <>
      <Script id="ontario-technology-law-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-technology-law-faq" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Technology Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Technology Law Guide 2024
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              PIPEDA and PHIPA privacy obligations, data breach notification,
              SaaS agreement essentials, AI governance and liability, and
              cybersecurity law for Ontario technology and commercial lawyers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Technology Law</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Privacy Law in Ontario: PIPEDA and PHIPA
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ontario private sector organizations are governed by the federal{" "}
              <em>Personal Information Protection and Electronic Documents Act</em>{" "}
              (PIPEDA) for commercial activities. Ontario does not have a
              substantially similar provincial private sector privacy law (unlike
              Quebec&apos;s Law 25, BC&apos;s PIPA, and Alberta&apos;s PIPA).
              The <em>Personal Health Information Protection Act</em> (PHIPA)
              applies to health information custodians in Ontario.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Quebec&apos;s <em>Law 25</em> (Act 25, in force September 2022–2023
              in phases) imposes GDPR-style obligations on Quebec businesses and
              any organization processing Quebec residents&apos; personal
              information — including Ontario organizations doing business in
              Quebec. This is increasingly important for Ontario technology
              companies with Quebec customers.
            </p>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              PIPEDA: 10 Fair Information Principles
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Principle</th>
                    <th className="text-left px-4 py-3 font-semibold">Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {pipedaPrinciples.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-slate-700 font-semibold text-xs">{row.principle}</td>
                      <td className="px-4 py-3 text-slate-600">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Data Breach */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Data Breach Notification in Ontario
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The <em>Breach of Security Safeguards Regulations</em> under PIPEDA
              came into force November 1, 2018. Key obligations:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {[
                { title: "Report to OPC", body: "Report to Office of the Privacy Commissioner of Canada as soon as feasible after determining breach poses real risk of significant harm (RROSH) to individuals" },
                { title: "Notify Individuals", body: "Notify affected individuals directly — at same time or after OPC notification; notification must be conspicuous and contain specified information" },
                { title: "Maintain Breach Record", body: "Organizations must maintain records of all breaches for 24 months regardless of whether RROSH threshold met; OPC may request records at any time" },
              ].map((el, i) => (
                <div key={i} className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">{el.title}</h3>
                  <p className="text-slate-600 text-sm">{el.body}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm">
              <strong>Real Risk of Significant Harm (RROSH):</strong> Assessed
              based on sensitivity of the personal information, probability that
              it will be misused, and severity of harm (identity theft, financial
              loss, bodily harm, reputational harm, humiliation, loss of
              employment). The RROSH threshold is not required for maintaining
              breach records — all breaches must be recorded.
            </p>
            <div className="mt-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">PHIPA Breach Notification (Health Sector)</h3>
              <p className="text-slate-600 text-sm">
                Under PHIPA s.12(2), a health information custodian must notify
                the Information and Privacy Commissioner of Ontario (IPC) and the
                individual at the first reasonable opportunity after discovering a
                privacy breach at the earliest opportunity. PHIPA does not have a
                &quot;real risk of significant harm&quot; threshold — notification
                is required for all breaches of privacy. Since 2022, the IPC
                can impose administrative monetary penalties for PHIPA breaches.
              </p>
            </div>
          </section>

          {/* SaaS Agreements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              SaaS Agreement Essentials for Ontario Technology Lawyers
            </h2>
            <div className="space-y-5">
              {saasKeyTerms.map((term, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{term.term}</h3>
                  <p className="text-slate-600 text-sm mb-2">{term.description}</p>
                  <p className="text-xs text-red-700">
                    <span className="font-semibold">Risk if absent: </span>{term.risk}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* AI Governance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              AI Governance and Liability in Canada (2024)
            </h2>
            <div className="space-y-5">
              {aiGovernanceIssues.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.issue}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Electronic Transactions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Electronic Commerce and Electronic Signatures in Ontario
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ontario&apos;s <em>Electronic Commerce Act, 2000</em> (ECA) gives
              legal recognition to electronic contracts, electronic signatures,
              and electronic documents — except for certain excluded documents
              (wills, powers of attorney for personal care, negotiable instruments,
              and documents requiring witnessing).
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">Electronic Signatures (ECA s.11)</h3>
                <p className="text-slate-600 text-sm">
                  An electronic signature (e-signature) is legally valid in Ontario
                  where a signature is required, unless the law specifically requires
                  an original paper document. Standard e-signature platforms (DocuSign,
                  Adobe Sign) produce basic electronic signatures valid under the ECA.
                  &quot;Secure electronic signatures&quot; (digital signatures with PKI
                  certificates) may be required for certain government filings.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">Federal CASL (Anti-Spam)</h3>
                <p className="text-slate-600 text-sm">
                  Canada&apos;s Anti-Spam Legislation (CASL) applies to commercial
                  electronic messages (CEMs) sent to or from Canada. CASL requires:
                  express or implied consent to send CEMs; sender identification;
                  unsubscribe mechanism. CASL penalties can reach $1M (individual)
                  or $10M (organization) per violation. CASL applies to marketing
                  emails, promotional texts, and commercial social media messages.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What are the data breach notification requirements in Ontario?",
                  a: "Under the federal Privacy Breach of Security Safeguards Regulations (in force November 2018), private sector organizations subject to PIPEDA must report breaches to the Privacy Commissioner of Canada and notify affected individuals where there is a real risk of significant harm. The report must be made as soon as feasible after determining a breach has occurred. Organizations must also maintain a breach record for 24 months. PHIPA has separate breach notification requirements for health information custodians — notification to the IPC and individuals is required for all breaches without a RROSH threshold.",
                },
                {
                  q: "What is PIPEDA and does it apply to Ontario businesses?",
                  a: "PIPEDA is Canada's federal private sector privacy law. It applies to private sector organizations that collect, use, or disclose personal information in the course of commercial activities across provincial and international borders. Ontario does not have a substantially similar private sector privacy law (unlike Quebec, BC, and Alberta), so PIPEDA applies to Ontario private sector organizations. PHIPA is Ontario's health-sector privacy law and applies to health information custodians.",
                },
                {
                  q: "What key clauses should be in a SaaS agreement for Ontario?",
                  a: "A SaaS agreement governed by Ontario law should address: subscription scope; SLA and uptime commitments with remedies; data ownership (customer retains ownership); data processing and privacy (PIPEDA compliance, data residency); security standards; limitation of liability and indemnification; termination and data return/deletion; and governing law (Ontario, Canada). Canadian customers increasingly require data residency in Canada.",
                },
                {
                  q: "Who is liable when AI causes harm in Canada?",
                  a: "Canada does not yet have specific AI liability legislation. AI liability in Ontario is currently governed by existing tort law (negligence, products liability), contract law, and sector-specific regulations. A company deploying an AI system that causes harm may be liable under negligence. Bill C-27's Artificial Intelligence and Data Act (AIDA) did not pass before Parliament was prorogued in January 2025. Professionals (lawyers, doctors) who use AI tools remain personally responsible for their professional work product regardless of AI involvement.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Manage Your Technology Law Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Track limitation periods, manage trust accounting, and organize
              technology law files with Atticus — built for Ontario solo and
              small law firms.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Related Ontario Law Guides
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-privacy-law", label: "Ontario Privacy Law (PIPEDA and PHIPA)" },
                { href: "/blog/ontario-privacy-breach", label: "Ontario Privacy Breach Response" },
                { href: "/blog/ontario-intellectual-property", label: "Ontario Intellectual Property Law" },
                { href: "/lso-ai-guidance", label: "LSO AI Guidance for Ontario Lawyers" },
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
