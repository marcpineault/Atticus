import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Privacy Law — PIPEDA, PHIPA, and Bill 64 for Ontario Lawyers | Atticus Blog",
  description:
    "Comprehensive guide to Ontario privacy law: PIPEDA federal private-sector privacy, PHIPA personal health information, Ontario&apos;s proposed Bill 64 (CPPA), breach notification requirements, privacy impact assessments, and IPC enforcement for Ontario practitioners.",
  openGraph: {
    title: "Ontario Privacy Law — PIPEDA, PHIPA, and Privacy Compliance for Ontario Lawyers",
    description:
      "PIPEDA RSC 2000 c 5, PHIPA SO 2004 c 3, Ontario Bill 64 CPPA, breach notification, consent requirements, and IPC enforcement — a comprehensive privacy law guide for Ontario practitioners.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-privacy-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-privacy-law" },
};

export default function OntarioPrivacyLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Privacy Law — PIPEDA, PHIPA, and Privacy Compliance for Ontario Lawyers",
    description:
      "PIPEDA, PHIPA, Bill 64 CPPA, breach notification, consent, privacy impact assessments, and IPC enforcement — a comprehensive guide for Ontario practitioners.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-privacy-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-privacy-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-purple-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Privacy Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Privacy Law — PIPEDA, PHIPA, and Privacy Compliance
            </h1>
            <p className="text-slate-300 text-lg">
              Federal PIPEDA, Ontario PHIPA, the proposed CPPA, breach notification, consent
              requirements, privacy impact assessments, and IPC enforcement — for Ontario
              practitioners advising on privacy compliance.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>March 2026</span>
              <span>&#8226;</span>
              <span>13 min read</span>
            </div>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">

            <h2>Canada&apos;s Privacy Law Framework</h2>
            <p>
              Canada&apos;s privacy law framework operates on two levels. At the federal level, the
              Personal Information Protection and Electronic Documents Act SC 2000 c 5 (PIPEDA)
              governs the collection, use, and disclosure of personal information in the course of
              commercial activities by private-sector organizations subject to federal jurisdiction,
              and by federally regulated industries (banks, telecom, airlines, interprovincial
              transportation). PIPEDA incorporates Schedule 1, the Canadian Standards Association&apos;s
              Model Code for the Protection of Personal Information, which establishes ten Fair
              Information Principles: accountability, identifying purposes, consent, limiting
              collection, limiting use/disclosure/retention, accuracy, safeguards, openness, individual
              access, and challenging compliance.
            </p>
            <p>
              At the provincial level, Quebec&apos;s Act Respecting the Protection of Personal
              Information in the Private Sector, British Columbia&apos;s PIPA, and Alberta&apos;s
              PIPA are the only provincial statutes that have been found to be &quot;substantially
              similar&quot; to PIPEDA, meaning that PIPEDA does not apply to the collection, use, or
              disclosure of personal information that occurs entirely within those provinces.
              Ontario does not have a private-sector omnibus privacy statute. PIPEDA therefore
              applies to Ontario private-sector organizations engaged in commercial activities.
            </p>
            <p>
              The Office of the Privacy Commissioner of Canada (OPC) enforces PIPEDA. Complaints
              are investigated by the OPC, which may issue findings and recommendations. Since
              the 2015 amendments under SCISA (Strengthening Canadian Citizenship Act), the OPC
              may seek Federal Court orders to enforce findings where organizations do not comply.
            </p>

            <h2>PIPEDA Consent Requirements</h2>
            <p>
              PIPEDA s.6.1 (Schedule 1, Principle 3) requires meaningful consent for the collection,
              use, or disclosure of personal information. Consent may be express (explicit) or
              implied. Express consent is required for sensitive information and for uses or
              disclosures that are not reasonably expected. Implied consent is acceptable for
              less sensitive information and for uses that are within the reasonable expectations
              of the individual at the time of collection.
            </p>
            <p>
              The OPC&apos;s Guidelines for Obtaining Meaningful Consent (2018) identify seven
              elements of meaningful consent: (1) what personal information is being collected;
              (2) with which parties the information will be shared; (3) for what purposes the
              information is collected, used, or disclosed; (4) the risk of harm; (5) consent
              must not be bundled as a condition of service when the collection is not necessary;
              (6) the language must be plain and appropriate to the audience; and (7) organizations
              must respect ongoing consent withdrawal.
            </p>
            <p>
              PIPEDA Schedule 1 Principle 3.5 provides that organizations may collect, use, or
              disclose personal information without the knowledge and consent of the individual
              only in specified circumstances: information collected by investigation of a breach
              of agreement or law; emergency situations; medical emergency; artistic/literary/journalistic
              purposes; publicly available information in limited circumstances; and law enforcement
              disclosure under s.7(3).
            </p>

            <h2>Breach Notification — PIPEDA</h2>
            <p>
              The Digital Privacy Act SC 2015 c 32 amended PIPEDA to add mandatory breach
              notification requirements (in force since November 1, 2018). PIPEDA s.10.1-10.3
              require organizations to:
            </p>
            <ul>
              <li>
                <strong>Report to the OPC:</strong> Report a breach of security safeguards involving
                personal information where there is a real risk of significant harm (RROSH) to an
                individual. RROSH factors include the sensitivity of the personal information,
                probability the information will be misused, and potential harm (bodily harm,
                humiliation, damage to reputation, identity theft, financial loss).
              </li>
              <li>
                <strong>Notify affected individuals:</strong> Directly notify individuals whose
                personal information was involved in the breach where there is RROSH, as soon as
                feasible after the breach is determined. Notification must include sufficient
                information to allow the individual to mitigate harm.
              </li>
              <li>
                <strong>Notify relevant third parties:</strong> Where an organization has a
                reasonable belief that a third party might reduce the risk of harm arising from
                the breach, notify them.
              </li>
              <li>
                <strong>Maintain records:</strong> Keep records of every breach of security
                safeguards involving personal information, regardless of whether RROSH exists.
                Records must be provided to the OPC on request.
              </li>
            </ul>
            <p>
              Failure to report to the OPC or notify individuals as required is an offence under
              PIPEDA s.28 punishable by a fine of up to $100,000.
            </p>

            <h2>Personal Health Information Protection Act (PHIPA)</h2>
            <p>
              The Personal Health Information Protection Act SO 2004 c 3 Sch A (PHIPA) is Ontario&apos;s
              health-sector privacy statute. It governs the collection, use, and disclosure of
              personal health information (PHI) by &quot;health information custodians&quot; — health
              care practitioners, health care facilities, community care access centres, laboratories,
              pharmacies, ambulance services, and others as defined in s.3(1).
            </p>
            <p>
              PHI is defined broadly in PHIPA s.4 as identifying information about an individual
              in oral or recorded form if the information relates to the individual&apos;s physical or
              mental health, health care services received, the individual as a donor of body parts
              or bodily substances, payments for health care, eligibility for health care, identification
              numbers used by health information custodians, or the identity of a substitute
              decision-maker (SDM).
            </p>
            <p>
              PHIPA s.29 requires consent for the collection of PHI unless an exception applies.
              Consent must be knowledgeable, relate to the information (not blanket consent), and
              relate to the custodian. PHIPA s.37-38 permit collection, use, or disclosure without
              consent in specified circumstances: provision of health care or payment when consent
              cannot be obtained; law enforcement; legal proceedings; monitoring and auditing;
              and others. PHIPA s.54 requires health information custodians to notify the IPC
              (Information and Privacy Commissioner of Ontario) and the affected individual of
              privacy breaches that create a risk of harm.
            </p>
            <p>
              The Information and Privacy Commissioner of Ontario (IPC) enforces PHIPA through
              complaint investigations, audits, and orders. PHIPA s.72 provides for administrative
              penalties of up to $100,000 for individuals and up to $500,000 for corporations.
              PHIPA also creates a right of action for individuals who suffer damages from a
              contravention (s.65).
            </p>

            <h2>Ontario&apos;s Freedom of Information Regime</h2>
            <p>
              The Freedom of Information and Protection of Privacy Act RSO 1990 c F.31 (FIPPA)
              governs personal information held by Ontario provincial institutions. The Municipal
              Freedom of Information and Protection of Privacy Act RSO 1990 c M.56 (MFIPPA)
              governs municipal institutions. Both statutes give individuals the right to access
              records and to request correction of their personal information held by government.
              Both are enforced by the IPC, which hears appeals of access decisions and investigates
              complaints about privacy practices.
            </p>

            <h2>Federal Privacy Law Reform — Bill C-27 (CPPA)</h2>
            <p>
              The federal government has been pursuing reform of PIPEDA through Bill C-27, the
              Digital Charter Implementation Act 2022, which proposes to replace PIPEDA with the
              Consumer Privacy Protection Act (CPPA) and establish a new Personal Information and
              Data Protection Tribunal (PIDPT). Key proposed changes under the CPPA include:
            </p>
            <ul>
              <li>
                <strong>Strengthened consent:</strong> Prohibits bundled consent; requires plain
                language notice; codifies requirements for valid consent.
              </li>
              <li>
                <strong>Legitimate interest:</strong> Introduces a limited &quot;legitimate interest&quot;
                basis for processing without consent, modeled on GDPR Article 6, but with a
                balancing test and prescribed conditions.
              </li>
              <li>
                <strong>Minors&apos; data:</strong> Prohibits use of personal information of minors
                for commercial purposes harmful to their interests.
              </li>
              <li>
                <strong>Data mobility and disposal:</strong> Creates rights to data portability and
                disposal of personal information.
              </li>
              <li>
                <strong>Algorithmic transparency:</strong> Requires transparency about automated
                decision-making systems that significantly impact individuals.
              </li>
              <li>
                <strong>Penalties:</strong> Significantly increased penalties — up to 3% of global
                annual revenue or $10,000,000 for less serious violations; up to 5% or $25,000,000
                for more serious violations.
              </li>
            </ul>
            <p>
              As of early 2026, Bill C-27 remained under parliamentary review. Ontario practitioners
              advising businesses on privacy compliance should monitor CPPA progress.
            </p>

            <h2>Practical Privacy Compliance for Ontario Businesses</h2>
            <p>
              Ontario businesses subject to PIPEDA should implement a privacy management program
              that addresses: (1) appointment of a chief privacy officer accountable for PIPEDA
              compliance; (2) a privacy policy that is publicly available and explains data
              practices in plain language; (3) consent management — forms, opt-out mechanisms,
              and records; (4) a data inventory mapping what personal information is collected,
              where it is stored, and with whom it is shared; (5) breach response procedures
              including breach assessment, RROSH determination, notification timelines, and
              records; (6) third-party vendor contracts requiring equivalent privacy protections;
              and (7) privacy impact assessments (PIAs) for new programs or technologies that
              handle personal information.
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-purple-900 mb-2">
                Manage Privacy Law Matters with Atticus
              </h3>
              <p className="text-purple-800 mb-4">
                Track privacy compliance matters, manage regulatory deadlines, and keep client
                files properly organized — all in one platform built for Ontario law firms.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Try Atticus Free
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
