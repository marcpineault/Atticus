import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Immigration Law — IRPA, Express Entry, and Refugee Claims | Atticus Blog",
  description:
    "Comprehensive guide to Ontario immigration law: Immigration and Refugee Protection Act, Express Entry, Provincial Nominee Programs, work permits, spousal sponsorship, refugee claims under s.96-97 IRPA, and Federal Court judicial review for Ontario immigration lawyers.",
  openGraph: {
    title: "Ontario Immigration Law — IRPA, Express Entry, and Refugee Claims",
    description:
      "IRPA SC 2001 c 27, Express Entry CEC/FSWP/FSTP, Provincial Nominee Programs, work permits LMIA/LMIA-exempt, refugee claims s.96-97, IRB panels, and Federal Court judicial review for Ontario immigration practitioners.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-immigration-law",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-immigration-law" },
};

export default function OntarioImmigrationLawPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Immigration Law — IRPA, Express Entry, and Refugee Claims",
    description:
      "IRPA SC 2001 c 27, Express Entry, PNP, work permits, refugee claims, IRB, and Federal Court judicial review for Ontario immigration practitioners.",
    author: { "@type": "Organization", name: "Atticus" },
    publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
    url: "https://getatticus.ca/blog/ontario-immigration-law",
    mainEntityOfPage: "https://getatticus.ca/blog/ontario-immigration-law",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-red-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition">
                &#8592; Blog
              </Link>
              <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Immigration Law
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Immigration Law — IRPA, Express Entry, and Refugee Claims
            </h1>
            <p className="text-slate-300 text-lg">
              Immigration and Refugee Protection Act, Express Entry categories, Provincial
              Nominee Programs, work permits, spousal sponsorship, refugee claims, and Federal
              Court judicial review — a guide for Ontario immigration lawyers.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>March 2026</span>
              <span>&#8226;</span>
              <span>14 min read</span>
            </div>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">

            <h2>Immigration and Refugee Protection Act</h2>
            <p>
              Canadian immigration is governed primarily by the Immigration and Refugee Protection
              Act SC 2001 c 27 (IRPA) and its associated regulations, primarily the Immigration
              and Refugee Protection Regulations SOR/2002-227 (IRPR). IRPA replaced the former
              Immigration Act and the Refugee Claimants Designated Class Regulations in 2002.
              Immigration, Refugees and Citizenship Canada (IRCC) is the federal department
              responsible for immigration policy and processing, with the Canada Border Services
              Agency (CBSA) responsible for enforcement and border functions.
            </p>
            <p>
              IRPA establishes three main immigration classes: economic immigrants (IRPA Part 1,
              Division 1 — including Express Entry and Provincial Nominee Programs), family class
              (Part 1, Division 1 — family reunification and sponsorship), and protection/refugee
              class (Part 2 — refugee claimants and protection). IRPA also governs temporary
              residents — visitors, temporary workers, and international students.
            </p>

            <h2>Express Entry System</h2>
            <p>
              The Express Entry system, launched January 1, 2015, is an online system for managing
              applications under three federal economic immigration programs: the Federal Skilled
              Worker Program (FSWP), the Canadian Experience Class (CEC), and the Federal Skilled
              Trades Program (FSTP). Eligible candidates create an Express Entry profile and are
              assigned a Comprehensive Ranking System (CRS) score based on factors including:
              age, education, language test scores (IELTS/CELPIP for English; TEF/TCF for French),
              Canadian work experience, and adaptability factors.
            </p>
            <p>
              IRCC periodically invites the highest-ranking candidates in the Express Entry pool
              to apply for permanent residence through Invitations to Apply (ITAs) in draw events.
              CRS score cut-offs vary by draw type. Since 2023, IRCC has introduced category-based
              draws that select candidates with specific occupational experience or strong French
              language skills. The processing time target for Express Entry applications is six
              months from complete application submission.
            </p>
            <p>
              To qualify for the Federal Skilled Worker Program, candidates need: (1) one year
              of continuous full-time (or equivalent part-time) skilled work experience in the
              last 10 years in a NOC TEER 0, 1, 2, or 3 occupation; (2) language test scores
              meeting minimum CLB 7 for FSWP; (3) educational credentials assessed by a
              designated organization; and (4) sufficient settlement funds (unless working in
              Canada with a valid work permit).
            </p>

            <h2>Provincial Nominee Programs — Ontario</h2>
            <p>
              Ontario&apos;s Provincial Nominee Program is the Ontario Immigrant Nominee Program
              (OINP). Provinces can nominate foreign nationals for permanent residence who
              have the skills, education, and work experience to contribute to the provincial
              economy. Nominations add 600 CRS points in Express Entry, effectively guaranteeing
              an ITA.
            </p>
            <p>
              OINP streams include: the Human Capital Priorities stream (IRCC selects Express
              Entry profiles from the pool and invites OINP to nominate); the Employer Job Offer
              streams (International Student, Foreign Worker, and In-Demand Skills); the
              Entrepreneur stream; and the French-Speaking Skilled Worker stream. Each OINP
              stream has its own eligibility criteria, application process, and processing times.
              OINP applications are submitted to the Ontario Ministry of Labour, Immigration,
              Training and Skills Development.
            </p>

            <h2>Work Permits</h2>
            <p>
              Foreign nationals who wish to work in Canada generally require a work permit under
              IRPA s.30. Work permits may be employer-specific (closed work permits) or
              open (authorizing work for any employer). The two main categories are:
            </p>
            <ul>
              <li>
                <strong>LMIA-required work permits:</strong> Employers must obtain a positive
                Labour Market Impact Assessment (LMIA) from Employment and Social Development
                Canada (ESDC) before hiring a foreign worker. An LMIA demonstrates that no
                qualified Canadian citizen or permanent resident is available for the position.
                LMIA-based work permits include the Temporary Foreign Worker Program (TFWP)
                streams: high-wage workers, low-wage workers, agricultural workers.
              </li>
              <li>
                <strong>LMIA-exempt work permits:</strong> Certain categories of work permits
                are exempt from LMIA requirements. Key LMIA-exempt categories under the
                International Mobility Program (IMP) include: intra-company transfers (ICT)
                under IRPR s.205(a); significant benefit to Canada — specialized knowledge
                workers, athletes, artists (IRPR s.205(b)); free trade agreements including
                CUSMA (US and Mexican citizens in designated categories); Post-Graduation
                Work Permits (PGWP) for graduates of eligible Canadian institutions; and
                spousal open work permits for spouses of certain temporary residents.
              </li>
            </ul>

            <h2>Spousal Sponsorship and Family Class</h2>
            <p>
              IRPA Part 1 Division 1 (ss.12-17) and IRPR s.116-148 govern family class
              sponsorship. Canadian citizens and permanent residents can sponsor foreign national
              spouses, common-law partners, conjugal partners, dependent children, parents,
              grandparents, and (in limited circumstances) other relatives. The sponsor must
              meet minimum income requirements (LICO — Low Income Cut-Off) for most categories.
            </p>
            <p>
              Spousal sponsorship requires establishing a genuine relationship. IRCC assesses
              the genuineness of the relationship based on documentary evidence: communication
              records, joint financial accounts, travel records, photos, statutory declarations
              from family and friends. Where IRCC suspects a relationship of convenience, it may
              conduct an interview.
            </p>
            <p>
              Misrepresentation in an immigration application (IRPA s.40) results in a finding
              of inadmissibility and a five-year bar from all IRPA applications. Misrepresentation
              that is later discovered after a grant of permanent residence may lead to loss of
              permanent residence status (IRPA s.40.1). Counsel advising clients on immigration
              applications must be alert to inadmissibility grounds including: criminality (s.36),
              health (s.38), security (s.34), and misrepresentation (s.40).
            </p>

            <h2>Refugee Claims — IRPA Part 2</h2>
            <p>
              IRPA Part 2 (ss.95-111.1) establishes Canada&apos;s refugee protection system.
              The Refugee Protection Division (RPD) of the Immigration and Refugee Board (IRB)
              makes first-instance decisions on refugee claims. The Refugee Appeal Division (RAD)
              hears appeals from RPD decisions.
            </p>
            <p>
              The two grounds for refugee protection are: (1) Convention refugee under IRPA
              s.96 — a person who is outside their country of nationality and has a well-founded
              fear of persecution based on a Convention ground (race, religion, nationality,
              political opinion, or membership in a particular social group); and (2) person
              in need of protection under IRPA s.97 — a person who would personally be subjected
              to a danger of torture, risk to life, or cruel and unusual treatment or punishment
              if returned to their country.
            </p>
            <p>
              The standard for establishing refugee status is a reasonable chance of persecution
              (Adjei v Canada (Minister of Employment and Immigration) [1989] 2 FC 680 (CA)) —
              less than a balance of probabilities. The claimant must establish both subjective
              fear and an objective basis for the fear (Ward v Canada (Minister of Employment
              and Immigration) [1993] 2 SCR 689 — key Supreme Court of Canada authority on
              &quot;particular social group&quot; and state protection).
            </p>
            <p>
              Failed refugee claimants may appeal to the RAD (s.110 IRPA). Further review is
              available through a Pre-Removal Risk Assessment (PRRA) under IRPA s.112, and
              through Federal Court judicial review under s.72 IRPA (leave required; standard
              of reasonableness post-Vavilov; correctness for constitutional questions). The
              standard of review for RAD decisions is reasonableness (Canada v Huruglica 2016
              FCA 93 confirming RAD applies correctness on questions of law and reasonableness
              on questions of fact and mixed fact/law at the RAD level, though Federal Court
              applies reasonableness in reviewing the RAD).
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-bold text-red-900 mb-2">
                Manage Immigration Files with Atticus
              </h3>
              <p className="text-red-800 mb-4">
                Track Express Entry deadlines, work permit expiry, IRB hearing dates, and Federal
                Court leave applications — all in one platform built for Ontario immigration lawyers.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg transition"
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
