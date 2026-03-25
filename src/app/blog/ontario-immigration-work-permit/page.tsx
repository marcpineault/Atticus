import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Immigration Work Permit Guide: LMIA, Closed & Open Permits | Atticus",
  description:
    "Complete guide to Canadian work permits for Ontario immigration lawyers. LMIA process, closed vs open work permits, PGWP, CUSMA, Intra-Company Transfers, and TFWP compliance. Updated 2025.",
  keywords: [
    "work permit Canada Ontario",
    "LMIA Ontario",
    "closed work permit Canada",
    "open work permit Canada",
    "PGWP Ontario",
    "CUSMA work permit",
    "intra-company transfer Canada",
    "Ontario immigration lawyer",
    "temporary foreign worker Ontario",
  ],
  openGraph: {
    title: "Ontario Immigration Work Permit Guide: LMIA, Closed & Open Permits",
    description:
      "LMIA process, closed vs open work permits, PGWP, CUSMA, and compliance obligations for Ontario immigration practitioners.",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Immigration Work Permit Guide: LMIA, Closed & Open Permits",
      "description": "Complete guide to Canadian work permits for Ontario immigration lawyers. LMIA process, closed vs open work permits, PGWP, CUSMA, Intra-Company Transfers, and TFWP compliance.",
      "datePublished": "2025-06-10",
      "dateModified": "2025-06-10",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-immigration-work-permit" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between a closed and an open work permit in Canada?",
          "acceptedAnswer": { "@type": "Answer", "text": "A closed (employer-specific) work permit authorizes work for one named employer in a specific location and occupation. An open work permit allows the holder to work for almost any Canadian employer. Open work permits are available for specific categories: spouses of skilled workers, post-graduation work permit holders, refugee claimants, and certain other groups." }
        },
        {
          "@type": "Question",
          "name": "When is an LMIA required for a Canadian work permit?",
          "acceptedAnswer": { "@type": "Answer", "text": "An LMIA (Labour Market Impact Assessment) is required when there is no applicable LMIA exemption. Common LMIA exemptions include CUSMA (USMCA) professionals and traders, Intra-Company Transfers (ICTs), International Agreements (e.g., CETA, CPTPP), Significant Benefit to Canada (C-10/C-11), and International Experience Canada." }
        },
        {
          "@type": "Question",
          "name": "How long does a Post-Graduation Work Permit last?",
          "acceptedAnswer": { "@type": "Answer", "text": "The PGWP duration matches the length of the study program, up to a maximum of 3 years. Programs 8 months to under 2 years yield a PGWP equal to program length. Programs 2 years or longer yield the maximum 3-year PGWP. Students must apply within 180 days of receiving written confirmation of graduation." }
        },
        {
          "@type": "Question",
          "name": "What are employer obligations under the Temporary Foreign Worker Program?",
          "acceptedAnswer": { "@type": "Answer", "text": "TFWP employers must: maintain wages, working conditions, and job duties as approved in the LMIA; provide workplace safety and accommodation if agreed; maintain records for 6 years; submit compliance information upon ESDC request; not mistreat workers. ESDC conducts random and complaint-based inspections. Non-compliance can result in fines, bans from the program, and public disclosure." }
        }
      ]
    }
  ]
}`;

type WorkPermitCategory = {
  category: string;
  basis: string;
  exemptionCode: string;
  keyPoints: string[];
};

const lmiaExemptCategories: WorkPermitCategory[] = [
  {
    category: "CUSMA / USMCA Professionals",
    basis: "Trade agreement — Canada-US-Mexico Agreement",
    exemptionCode: "T16",
    keyPoints: [
      "US or Mexican citizen only",
      "Must be in one of ~63 listed professional occupations (e.g., engineer, accountant, lawyer, scientist)",
      "Proof of citizenship + credential + job offer letter required",
      "Port-of-entry application available for US citizens",
      "Initial period up to 3 years; renewable",
    ],
  },
  {
    category: "Intra-Company Transfers (ICTs)",
    basis: "International Agreement / Significant Benefit",
    exemptionCode: "C12 / T24",
    keyPoints: [
      "Employee must have worked for the same company abroad for at least 1 year in last 3 years",
      "Eligible roles: executives, senior managers, and specialized knowledge workers",
      "Related company relationship must be demonstrated (parent, subsidiary, affiliate)",
      "Initial period 1-3 years depending on role; total maximum 5-7 years",
      "CUSMA-based ICT (T24) available for US/Mexico companies without LMIA",
    ],
  },
  {
    category: "CETA (Canada-EU Trade Agreement)",
    basis: "Trade agreement",
    exemptionCode: "T43",
    keyPoints: [
      "Applies to EU nationals (27 member states)",
      "ICT provisions: executives, senior managers, specialized knowledge",
      "Independent professionals in eligible sectors",
      "Contractual service suppliers",
      "Permit duration tied to contract length, typically 12-24 months",
    ],
  },
  {
    category: "Significant Benefit — Arts/Sports/Religion",
    basis: "Public policy — C-10/C-11",
    exemptionCode: "C10 / C11",
    keyPoints: [
      "Work must create or maintain significant social, cultural, or economic benefit",
      "Athletes, coaches, performing artists, religious workers",
      "IRCC officer discretion — document the case thoroughly",
      "Often tied to specific performances, seasons, or assignments",
    ],
  },
  {
    category: "Reciprocal Employment (IEC / Working Holiday)",
    basis: "International Experience Canada",
    exemptionCode: "C21",
    keyPoints: [
      "Open work permit for youth (ages 18-35 depending on country)",
      "Bilateral agreements with 35+ countries",
      "IEC includes: Working Holiday, Young Professionals, International Co-op",
      "Annual pool draw — apply through IRCC IEC portal",
    ],
  },
];

type PermitType = {
  permit: string;
  who: string;
  duration: string;
  openOrClosed: string;
};

const openWorkPermits: PermitType[] = [
  { permit: "Post-Graduation Work Permit (PGWP)", who: "Graduates of eligible Canadian DLIs", duration: "Up to 3 years (equal to program length)", openOrClosed: "Open" },
  { permit: "Spouse/CLP of Skilled Worker (CEC/FSW)", who: "Spouse of principal applicant in NOC TEER 0/1/2/3", duration: "Employer-specific or open depending on category", openOrClosed: "Open (in many cases)" },
  { permit: "Refugee Claimant / Protected Person", who: "Inland refugee claimants with eligible status", duration: "Until hearing/determination", openOrClosed: "Open" },
  { permit: "Bridging Open Work Permit (BOWP)", who: "Temporary residents with pending PR application", duration: "Duration of implied status", openOrClosed: "Open" },
  { permit: "International Experience Canada", who: "Youth from IEC partner countries", duration: "12-24 months depending on stream", openOrClosed: "Open (Working Holiday) or restricted" },
  { permit: "Destitute Student", who: "Students who become unable to financially support themselves", duration: "Short-term until situation resolved", openOrClosed: "Open" },
];

const lmiaSteps = [
  { step: "1. Job posting requirement", desc: "Most positions require a minimum 4-week job advertisement on Job Bank and 2 additional recruitment activities demonstrating no available Canadian/PR candidates." },
  { step: "2. Wage requirement", desc: "Employer must pay at least the prevailing wage for the occupation in the region (median wage from ESDC wage data or established wage scale)." },
  { step: "3. Application to ESDC", desc: "Submit LMIA application with recruitment records, business legitimacy documents, employment offer letter, and applicable fees ($1,000/position for high-wage; $0 for some caregiver streams)." },
  { step: "4. ESDC assessment", desc: "ESDC reviews whether hiring a foreign national will have a neutral or positive impact on Canadian labour market. Processing: 10+ business days for global talent stream; 60-90 days standard." },
  { step: "5. Positive LMIA issued", desc: "ESDC issues a positive LMIA (valid 6 months). Worker uses this plus job offer and other documents to apply for a work permit from IRCC." },
  { step: "6. Work permit application", desc: "Worker applies at port of entry (if eligible) or online via IRCC. Processing times vary: 8-27 weeks for online applications; same-day at POE for eligible travelers." },
];

const faqs = [
  {
    q: "What is the difference between a closed and an open work permit in Canada?",
    a: "A closed (employer-specific) work permit authorizes work for one named employer in a specific location and occupation. An open work permit allows the holder to work for almost any Canadian employer. Open work permits are available for specific categories: spouses of skilled workers, post-graduation work permit holders, refugee claimants, and certain other groups.",
  },
  {
    q: "When is an LMIA required for a Canadian work permit?",
    a: "An LMIA (Labour Market Impact Assessment) is required when there is no applicable LMIA exemption. Common LMIA exemptions include CUSMA (USMCA) professionals and traders, Intra-Company Transfers (ICTs), International Agreements (e.g., CETA, CPTPP), Significant Benefit to Canada (C-10/C-11), and International Experience Canada.",
  },
  {
    q: "How long does a Post-Graduation Work Permit last?",
    a: "The PGWP duration matches the length of the study program, up to a maximum of 3 years. Programs 8 months to under 2 years yield a PGWP equal to program length. Programs 2 years or longer yield the maximum 3-year PGWP. Students must apply within 180 days of receiving written confirmation of graduation.",
  },
  {
    q: "What are employer obligations under the Temporary Foreign Worker Program?",
    a: "TFWP employers must: maintain wages, working conditions, and job duties as approved in the LMIA; provide workplace safety and accommodation if agreed; maintain records for 6 years; submit compliance information upon ESDC request; not mistreat workers. ESDC conducts random and complaint-based inspections. Non-compliance can result in fines, bans from the program, and public disclosure.",
  },
];

export default function OntarioImmigrationWorkPermitPage() {
  return (
    <>
      <Script id="ontario-work-permit-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Ontario Immigration Work Permits</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Immigration Law</span>
              <span className="text-gray-400 text-sm">11 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Canadian Work Permits: LMIA, Closed &amp; Open Permits for Ontario Practitioners
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive reference for Ontario immigration lawyers — LMIA process, exemption categories, open permit streams, and employer compliance obligations.
            </p>
            <div className="mt-4 text-sm text-gray-400">Updated June 2025</div>
          </header>

          {/* Intro */}
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed text-lg">
              Work permit law in Canada is a complex intersection of federal immigration regulations (IRPA, IRPR), ESDC labour market policy, and trade agreements. Ontario immigration practitioners regularly navigate LMIA applications, exemption categories, post-graduation work permits, and employer compliance obligations. This guide covers the key streams and practical considerations.
            </p>
          </section>

          {/* Open vs Closed */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Closed vs Open Work Permits</h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-2">Closed (Employer-Specific)</h3>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>&#10003; Tied to named employer + location + NOC</li>
                  <li>&#10003; Requires LMIA or LMIA exemption</li>
                  <li>&#10003; Must apply for new permit if employer changes</li>
                  <li>&#10003; Most common for TFWP positions</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-2">Open Work Permit</h3>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>&#10003; Work for any eligible employer in Canada</li>
                  <li>&#10003; Certain restrictions apply (e.g., not in adult entertainment)</li>
                  <li>&#10003; Available for specific qualifying categories</li>
                  <li>&#10003; No LMIA required</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4">Open Work Permit Categories</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Permit Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Who Qualifies</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {openWorkPermits.map((p, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{p.permit}</td>
                      <td className="px-4 py-3 text-gray-700">{p.who}</td>
                      <td className="px-4 py-3 text-gray-700">{p.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* LMIA Exempt Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">LMIA-Exempt Categories</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The International Mobility Program (IMP) covers LMIA-exempt work permits under various trade agreements and public policy grounds. Understanding which exemption applies drives the entire strategy for work permit applications.
            </p>
            <div className="space-y-5">
              {lmiaExemptCategories.map((cat, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-gray-900">{cat.category}</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs font-mono px-2 py-1 rounded flex-shrink-0">{cat.exemptionCode}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-3 italic">{cat.basis}</p>
                  <ul className="space-y-1">
                    {cat.keyPoints.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-500 mt-0.5 flex-shrink-0">&#8250;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* LMIA Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">LMIA Process: Step by Step</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When no LMIA exemption applies, the employer must obtain a positive Labour Market Impact Assessment from Employment and Social Development Canada (ESDC) before the foreign national can apply for a work permit.
            </p>
            <div className="space-y-4">
              {lmiaSteps.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">{item.step}</div>
                    <div className="text-gray-700 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h4 className="font-bold text-amber-900 mb-2">Global Talent Stream (GTS)</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                The GTS offers a 2-week LMIA processing target for eligible tech employers hiring under Category A (unique talent) or Category B (listed occupations in tech). GTS LMIAs do not require the standard 4-week job advertisement for Category A positions. Participating employers must comply with a Labour Market Benefits Plan committing to measurable benefits for Canadian workers.
              </p>
            </div>
          </section>

          {/* PGWP */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Post-Graduation Work Permit (PGWP)</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Program 8 months to under 2 years", duration: "PGWP = program length" },
                { label: "Program 2 years or more", duration: "PGWP = 3 years (maximum)" },
                { label: "Application window", duration: "180 days from written confirmation of graduation" },
              ].map((item, i) => (
                <div key={i} className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <div className="text-purple-600 text-xs font-medium mb-2">{item.label}</div>
                  <div className="font-bold text-purple-900 text-sm">{item.duration}</div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h4 className="font-semibold text-gray-900 mb-3">PGWP Eligibility Notes</h4>
              <ul className="space-y-2">
                {[
                  "Must have studied full-time at a Designated Learning Institution (DLI) in Canada",
                  "Program must be at least 8 months in duration at an eligible public or private DLI",
                  "Some private institutions require provincial approval for PGWP eligibility — verify DLI list",
                  "Maintained valid study permit throughout studies (with limited exceptions)",
                  "PGWP is a once-in-a-lifetime permit — cannot be renewed or reapplied after expiry",
                  "2024 policy: combined programs may yield shorter PGWP than expected — verify recent IRCC guidance",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-purple-500 mt-0.5 flex-shrink-0">&#8250;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Employer Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Employer Compliance — TFWP</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Employers who hire under the TFWP face ongoing compliance obligations. ESDC conducts inspections — both announced and unannounced — and violations can result in serious consequences.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Wage Compliance", desc: "Pay at least the wage stated in the LMIA/job offer; adjust if prevailing wage increases" },
                { label: "Working Conditions", desc: "Maintain the same workplace conditions (hours, duties, location) as approved in the LMIA" },
                { label: "Record Keeping", desc: "Maintain all employment and recruitment records for 6 years from the date of LMIA" },
                { label: "No Reprisal", desc: "Cannot penalize TFWs for exercising rights or reporting employer violations" },
                { label: "Inspections", desc: "ESDC may inspect at any time — cooperate and maintain documentation ready" },
                { label: "Consequences of Non-Compliance", desc: "Fines up to $1M/year, 2-10 year program bans, and public naming on ESDC website" },
              ].map((item, i) => (
                <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-4">
                  <div className="font-semibold text-red-900 text-sm mb-1">{item.label}</div>
                  <div className="text-red-700 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Manage Immigration Files with Atticus</h2>
            <p className="text-blue-100 mb-6">
              Track LMIA timelines, work permit renewals, and client deadlines — built for Ontario immigration practitioners.
            </p>
            <Link
              href="/intake"
              className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related Links */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-immigration-permanent-residence", label: "Ontario Permanent Residence Pathways" },
                { href: "/ontario-immigration-lawyer", label: "Ontario Immigration Lawyer Software" },
                { href: "/blog/ontario-employment-standards-act", label: "Ontario Employment Standards Act Guide" },
                { href: "/blog/ontario-employment-lawyer", label: "Ontario Employment Law Guide" },
                { href: "/ontario-limitation-period", label: "Ontario Limitation Periods Calculator" },
                { href: "/blog/client-intake-ontario-lawyers", label: "Client Intake for Ontario Lawyers" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
