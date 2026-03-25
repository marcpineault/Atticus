import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Privacy Law for Lawyers Guide 2024: PIPEDA, PHIPA, and LSO Cloud Guidance",
  description:
    "Complete guide to privacy law obligations for Ontario lawyers: PIPEDA and Bill C-27 (CPPA) for law firm personal information, PHIPA for health information, Law Society of Ontario cloud storage guidance, duty of confidentiality vs privacy law, breach notification obligations, and privacy best practices for Ontario solo and small law firms.",
  openGraph: {
    title: "Ontario Privacy Law for Lawyers Guide 2024: PIPEDA, PHIPA, and LSO Cloud Guidance",
    description:
      "Privacy obligations for Ontario lawyers: PIPEDA, PHIPA, LSO cloud storage guidance, breach notification, and data residency for Canadian law firms.",
    url: "https://getatticus.ca/blog/ontario-privacy-law-lawyers",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-privacy-law-lawyers" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Privacy Law for Lawyers Guide 2024: PIPEDA, PHIPA, and LSO Cloud Guidance",
  "description": "Complete guide to privacy law obligations for Ontario lawyers: PIPEDA, PHIPA, LSO cloud storage guidance, and breach notification requirements.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-privacy-law-lawyers",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-privacy-law-lawyers"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does PIPEDA apply to Ontario law firms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. PIPEDA (Personal Information Protection and Electronic Documents Act) applies to law firms as commercial organizations collecting, using, or disclosing personal information in the course of commercial activities. Law firms must obtain consent, limit collection to identified purposes, protect personal information with appropriate safeguards, and respond to access requests within 30 days. PIPEDA applies to client personal information held by the firm, employee information, and third-party personal information collected in the course of files."
      }
    },
    {
      "@type": "Question",
      "name": "What does the Law Society of Ontario say about cloud storage for client files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The LSO permits lawyers to store client files in cloud storage services (including outside Canada) provided the lawyer: (1) exercises professional judgment about appropriate security; (2) ensures client confidentiality is protected; (3) understands where data is stored and who can access it; (4) conducts due diligence on the cloud service provider; and (5) has a data breach response plan. The LSO does not prohibit offshore data storage but emphasizes the duty of confidentiality — a foreign government compelled disclosure would be a breach."
      }
    },
    {
      "@type": "Question",
      "name": "When must an Ontario law firm report a data breach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under PIPEDA (as amended by Bill S-4, 2015), law firms must report a breach of security safeguards to the Privacy Commissioner of Canada if it is reasonable in the circumstances to believe the breach creates a real risk of significant harm to an individual. The firm must also notify affected individuals. Records of all breaches must be maintained for 24 months. The LSO Professional Responsibility team may also need to be notified if the breach involves client confidential information."
      }
    },
    {
      "@type": "Question",
      "name": "Does PHIPA apply to Ontario law firms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PHIPA (Personal Health Information Protection Act) applies to health information custodians and agents. Ontario law firms are not typically health information custodians, but a firm representing a health information custodian (hospital, clinic) or handling personal health information as agent may have PHIPA obligations. Lawyers receiving personal health information about parties in litigation (medical records, expert reports) must protect that information under both their duty of confidentiality and applicable privacy legislation."
      }
    }
  ]
}`;

type PipedaPrinciple = {
  principle: string;
  requirement: string;
  lawFirmApplication: string;
};

const pipedaPrinciples: PipedaPrinciple[] = [
  {
    principle: "Accountability",
    requirement: "Designate a Privacy Officer; implement policies; train staff",
    lawFirmApplication: "Appoint a partner or staff member as Privacy Officer; maintain written privacy policy; annual privacy training",
  },
  {
    principle: "Identifying purposes",
    requirement: "Identify why personal information is collected before or at time of collection",
    lawFirmApplication: "Retainer agreements should identify purposes of collection (file management, billing, conflict checks, court filings)",
  },
  {
    principle: "Consent",
    requirement: "Meaningful consent for collection, use, and disclosure; implied consent for obvious purposes",
    lawFirmApplication: "Client retainer agreement or engagement letter is the primary consent mechanism; implied consent for use within the file",
  },
  {
    principle: "Limiting collection",
    requirement: "Collect only what is necessary for identified purposes",
    lawFirmApplication: "Do not collect unnecessary personal information; intake forms should be limited to what is needed",
  },
  {
    principle: "Limiting use, disclosure, and retention",
    requirement: "Use personal information only for identified purposes; retain only as long as necessary",
    lawFirmApplication: "File retention policies (7-10 years common for legal files); destruction of files after retention period",
  },
  {
    principle: "Accuracy",
    requirement: "Keep personal information accurate, complete, and up-to-date",
    lawFirmApplication: "Update contact information; correct errors on request; accurate billing records",
  },
  {
    principle: "Safeguards",
    requirement: "Protect personal information with appropriate security",
    lawFirmApplication: "Encrypted email; secure cloud storage; access controls; physical security for paper files; vendor due diligence",
  },
  {
    principle: "Openness",
    requirement: "Make privacy policies and practices available",
    lawFirmApplication: "Publish privacy policy on firm website; include privacy practices in retainer letter",
  },
  {
    principle: "Individual access",
    requirement: "Individuals may request access to their personal information; respond within 30 days",
    lawFirmApplication: "Client may request their own file; law firm may charge reasonable fee; solicitor-client privilege may limit access to some records",
  },
  {
    principle: "Challenging compliance",
    requirement: "Process for handling complaints and challenges to compliance",
    lawFirmApplication: "Privacy Officer handles complaints; escalate to Privacy Commissioner if unresolved",
  },
];

type CloudStorageConsideration = {
  area: string;
  lsoGuidance: string;
  practicalStep: string;
};

const cloudStorageGuidance: CloudStorageConsideration[] = [
  {
    area: "Data location and jurisdiction",
    lsoGuidance: "LSO does not prohibit non-Canadian cloud storage; lawyer must understand where data is stored and governing law; foreign government compelled disclosure is a breach of duty of confidentiality",
    practicalStep: "Review vendor terms for data location; prefer Canadian or EU data centres; document your decision in your privacy policy",
  },
  {
    area: "Vendor due diligence",
    lsoGuidance: "Lawyer must exercise professional judgment about cloud vendor security and terms; responsible for vendor selection",
    practicalStep: "Review vendor SOC 2 reports, ISO 27001 certification, data processing agreements; confirm breach notification obligations",
  },
  {
    area: "Access controls",
    lsoGuidance: "Duty of confidentiality requires protecting client information from unauthorized access; vendor employees with administrative access must be addressed",
    practicalStep: "Enable MFA; use role-based access; review vendor policies on employee access to customer data; use client-side encryption where possible",
  },
  {
    area: "Breach notification",
    lsoGuidance: "A security breach involving client confidential information likely breaches the duty of confidentiality; LSO may require reporting",
    practicalStep: "Maintain written data breach response plan; know your PIPEDA reporting obligations; include breach response steps in firm policies",
  },
  {
    area: "Subcontractors and AI tools",
    lsoGuidance: "LSO Guidance on AI (2024) requires lawyers using AI tools with client data to assess confidentiality risk; confirm AI provider data use policies",
    practicalStep: "Review AI vendor data use policies; opt out of model training using client data where possible; disclose AI use to clients if materially affecting the matter",
  },
];

export default function OntarioPrivacyLawLawyersPage() {
  return (
    <>
      <Script id="ontario-privacy-law-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-privacy-law-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Privacy Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Privacy Law for Lawyers Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              PIPEDA, PHIPA, and LSO Cloud Storage Guidance
            </p>
            <p className="text-slate-400 text-sm">December 2024 &middot; 13 min read</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              Ontario lawyers operate under both the Law Society of Ontario&apos;s duty of confidentiality
              (Rules of Professional Conduct r.3.3) and federal privacy legislation. <strong>PIPEDA</strong>
              (and Bill C-27 / CPPA when in force) governs how law firms handle personal information of
              clients, employees, and third parties. <strong>PHIPA</strong> applies in specific health
              information contexts. The Law Society has issued practical guidance on cloud storage, AI tools,
              and data breach obligations. This guide covers the intersection of privacy law and legal
              professional obligations for Ontario solo and small law firms.
            </p>
          </div>
        </section>

        {/* PIPEDA Principles */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              PIPEDA: Ten Principles Applied to Ontario Law Firms
            </h2>
            <p className="text-slate-600 mb-8">
              PIPEDA&apos;s ten Fair Information Principles apply to law firms as commercial organizations.
              These are how each principle applies in a law firm context.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Principle</th>
                    <th className="text-left px-5 py-4 font-semibold">Requirement</th>
                    <th className="text-left px-5 py-4 font-semibold">Law Firm Application</th>
                  </tr>
                </thead>
                <tbody>
                  {pipedaPrinciples.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.principle}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.requirement}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.lawFirmApplication}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PHIPA */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              PHIPA and Health Information in Law Practice
            </h2>
            <div className="bg-white rounded-xl p-8 border border-slate-200 space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                The <strong>Personal Health Information Protection Act (PHIPA)</strong> applies to health
                information custodians (physicians, hospitals, clinics, pharmacies) and their agents.
                Most Ontario law firms are not health information custodians. However, lawyers frequently
                handle personal health information (PHI) in the course of files:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Personal injury litigation:</strong> Medical records, expert reports, clinical notes, IME reports received as agents or via undertakings</li>
                <li><strong>Disability claims:</strong> Long-term disability files with detailed health history</li>
                <li><strong>Family law:</strong> Health information relevant to custody, child protection, spousal support</li>
                <li><strong>Estate matters:</strong> Health information relevant to capacity assessments</li>
                <li><strong>Health law clients:</strong> Acting for hospitals, physicians, or regulated health professionals — firm may become agent of a health information custodian</li>
              </ul>
              <p className="mt-2">
                <strong>Key obligations when handling PHI:</strong> Use only for the identified purpose; do not disclose beyond what is necessary; protect with appropriate safeguards; return or destroy after the file concludes; comply with any undertakings given regarding PHI; obtain appropriate consent or rely on legal authority for collection.
              </p>
              <p>
                <strong>Bill C-27 / Consumer Privacy Protection Act (CPPA):</strong> Federal privacy law reform
                currently before Parliament will replace PIPEDA. CPPA introduces higher penalties ($10M or 3%
                of global revenue), enhanced individual rights (portability, disposal), algorithmic transparency
                requirements, and stricter consent rules. Ontario lawyers should monitor this legislation as it
                progresses.
              </p>
            </div>
          </div>
        </section>

        {/* LSO Cloud Storage */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              LSO Cloud Storage Guidance for Ontario Lawyers
            </h2>
            <p className="text-slate-600 mb-8">
              The Law Society of Ontario has issued practice management guidance addressing cloud storage
              of client files. The LSO does not prohibit cloud storage but places the duty of confidentiality
              squarely on the lawyer — the lawyer is responsible for the vendor&apos;s security and data practices.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Area</th>
                    <th className="text-left px-5 py-4 font-semibold">LSO Guidance</th>
                    <th className="text-left px-5 py-4 font-semibold">Practical Step</th>
                  </tr>
                </thead>
                <tbody>
                  {cloudStorageGuidance.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.area}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.lsoGuidance}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.practicalStep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions: Privacy Law for Ontario Lawyers
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Does PIPEDA apply to Ontario law firms?",
                  a: "Yes. PIPEDA (Personal Information Protection and Electronic Documents Act) applies to law firms as commercial organizations collecting, using, or disclosing personal information in the course of commercial activities. Law firms must obtain consent, limit collection to identified purposes, protect personal information with appropriate safeguards, and respond to access requests within 30 days. PIPEDA applies to client personal information held by the firm, employee information, and third-party personal information collected in the course of files.",
                },
                {
                  q: "What does the Law Society of Ontario say about cloud storage for client files?",
                  a: "The LSO permits lawyers to store client files in cloud storage services (including outside Canada) provided the lawyer: (1) exercises professional judgment about appropriate security; (2) ensures client confidentiality is protected; (3) understands where data is stored and who can access it; (4) conducts due diligence on the cloud service provider; and (5) has a data breach response plan. The LSO does not prohibit offshore data storage but emphasizes the duty of confidentiality — a foreign government compelled disclosure would be a breach.",
                },
                {
                  q: "When must an Ontario law firm report a data breach?",
                  a: "Under PIPEDA (as amended by Bill S-4, 2015), law firms must report a breach of security safeguards to the Privacy Commissioner of Canada if it is reasonable in the circumstances to believe the breach creates a real risk of significant harm to an individual. The firm must also notify affected individuals. Records of all breaches must be maintained for 24 months. The LSO Professional Responsibility team may also need to be notified if the breach involves client confidential information.",
                },
                {
                  q: "Does PHIPA apply to Ontario law firms?",
                  a: "PHIPA (Personal Health Information Protection Act) applies to health information custodians and agents. Ontario law firms are not typically health information custodians, but a firm representing a health information custodian (hospital, clinic) or handling personal health information as agent may have PHIPA obligations. Lawyers receiving personal health information about parties in litigation (medical records, expert reports) must protect that information under both their duty of confidentiality and applicable privacy legislation.",
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

        {/* CTA */}
        <section className="py-16 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Canadian Data Residency Built In
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus stores all client data on Canadian servers by default — aligned with Law Society of
              Ontario guidance on cloud storage. Canadian legal AI, LSO-compliant trust accounting, and
              privacy-first infrastructure for Ontario law firms.
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
                { href: "/lso-ai-guidance", label: "LSO Guidance on AI" },
                { href: "/blog/ontario-lso-complaints", label: "LSO Professional Discipline" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
                { href: "/ontario-legal-software", label: "Ontario Legal Software" },
                { href: "/blog/ontario-technology-law", label: "Ontario Technology Law" },
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
