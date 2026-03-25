import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Immigration Law: Permanent Residence Pathways and Refugee Claims | Atticus Blog",
  description:
    "A practical guide to Canadian immigration for Ontario lawyers — Express Entry, Provincial Nominee Programs, family sponsorship, refugee claims, work permits, and IRCC procedures.",
  openGraph: {
    title: "Ontario Immigration Law: Permanent Residence Pathways and Refugee Claims",
    description:
      "Express Entry, Ontario PNP, family sponsorship, refugee claims, and IRCC procedures for Ontario immigration lawyers.",
    type: "article",
    publishedTime: "2026-03-19",
  },
};

export default function OntarioImmigrationLaw() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Immigration Law: Permanent Residence Pathways and Refugee Claims",
    description:
      "Express Entry, Ontario PNP, family sponsorship, refugee claims, and IRCC procedures for Ontario immigration lawyers.",
    datePublished: "2026-03-19",
    author: {
      "@type": "Organization",
      name: "Atticus",
    },
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Immigration Law
            </span>
            <time dateTime="2026-03-19">March 19, 2026</time>
            <span>14 min read</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Ontario Immigration Law: Permanent Residence Pathways and Refugee Claims
          </h1>
          <p className="text-xl text-gray-600">
            Canadian immigration law is governed primarily by the <em>Immigration and Refugee
            Protection Act</em>, SC 2001, c 27 (IRPA) and its regulations (IRPR, SOR/2002-227).
            Ontario immigration lawyers advise on permanent residence pathways, refugee claims,
            temporary status, and enforcement proceedings. This guide covers the key pathways
            and procedures.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2>The IRPA Framework</h2>
          <p>
            IRPA governs the entry and stay of all foreign nationals in Canada. Its core objectives
            (s.3) include facilitating the entry of visitors, students, workers, and immigrants;
            protecting refugees; maintaining the security of Canadians; and promoting the integration
            of permanent residents.
          </p>
          <p>
            <strong>Immigration, Refugees and Citizenship Canada (IRCC)</strong> administers
            permanent and temporary residence applications. The <em>Canada Border Services Agency
            (CBSA)</em> enforces IRPA at ports of entry and within Canada. The <em>Immigration
            and Refugee Board (IRB)</em> — an independent administrative tribunal — adjudicates
            refugee claims, inadmissibility hearings, detention reviews, and immigration appeals.
          </p>

          <h2>Economic Immigration: Express Entry</h2>
          <p>
            Express Entry is Canada&apos;s primary system for managing applications for permanent
            residence in the economic immigration categories. It uses a points-based Comprehensive
            Ranking System (CRS) to rank candidates in a pool. IRCC conducts regular draws,
            inviting the highest-ranked candidates to apply for permanent residence.
          </p>
          <p>
            <strong>Three main Express Entry programs</strong>:
          </p>
          <ul>
            <li>
              <strong>Federal Skilled Worker (FSW)</strong>: For skilled workers with foreign
              work experience. Points awarded for education, work experience, age, language
              (IELTS/CELPIP English, TEF/TCF French), arranged employment, and adaptability.
              Minimum threshold: 67 points on the FSW grid before entering the pool.
            </li>
            <li>
              <strong>Federal Skilled Trades (FST)</strong>: For workers in eligible skilled
              trade occupations (NOC codes in training category B). Requires at least two years
              experience in an eligible trade.
            </li>
            <li>
              <strong>Canadian Experience Class (CEC)</strong>: For temporary residents with
              Canadian skilled work experience (1 year in NOC TEER 0, 1, 2, or 3) within the
              past three years. No minimum education or language score requirement, but strong
              language profile increases CRS score.
            </li>
          </ul>
          <p>
            <strong>National Occupational Classification (NOC) system</strong>: Canada transitioned
            from the old NOC 2016 system to NOC 2021 in November 2022. The new system uses
            Training, Education, Experience and Responsibilities (TEER) categories 0-5, replacing
            the old Skill Level 0/A/B/C/D. Most Express Entry eligible occupations are TEER 0-3.
          </p>
          <p>
            <strong>CRS scores</strong>: CRS cut-off scores for FSW/FST/CEC draws have ranged
            widely — from below 400 in category-based draws to above 500 for all-program draws.
            IRCC now conducts category-specific draws (French language, healthcare, STEM, trade
            occupations, agriculture, transport) with lower cut-off scores than all-program draws.
          </p>

          <h2>Ontario Immigrant Nominee Program (OINP)</h2>
          <p>
            The Ontario Immigrant Nominee Program allows Ontario to nominate candidates for
            permanent residence based on Ontario&apos;s economic needs. OINP streams:
          </p>
          <ul>
            <li>
              <strong>Employer Job Offer stream</strong>: Requires a permanent job offer in
              an eligible NOC occupation. Three sub-streams: Foreign Worker, International
              Student, In-Demand Skills. Different wage, experience, and language requirements
              per sub-stream.
            </li>
            <li>
              <strong>Human Capital Priorities stream</strong>: OINP searches the Express Entry
              pool for candidates meeting Ontario&apos;s criteria and sends Notifications of Interest
              (NOIs). Candidates with a NOI can apply to OINP; if nominated, receive 600 CRS
              points ensuring an ITA on the next Express Entry draw.
            </li>
            <li>
              <strong>French-Speaking Skilled Worker stream</strong>: For French-speaking candidates
              in the Express Entry pool, outside of the Greater Toronto Area.
            </li>
            <li>
              <strong>Entrepreneur stream</strong>: For entrepreneurs intending to start or purchase
              a business in Ontario. Performance agreement required; performance milestones must be
              met within two years.
            </li>
          </ul>

          <h2>Family Sponsorship</h2>
          <p>
            Canadian citizens and permanent residents can sponsor eligible family members for
            permanent residence under IRPA s.12(1) and the family class.
          </p>
          <ul>
            <li>
              <strong>Eligible relationships</strong>: Spouses and common-law partners (cohabiting
              12+ months), conjugal partners (12+ months relationship, cohabitation impossible),
              dependent children (under 22 and not married/common-law; or older if financially
              dependent due to physical/mental condition), parents and grandparents, and other
              relatives in exceptional circumstances.
            </li>
            <li>
              <strong>Undertaking</strong>: Sponsors must sign an undertaking committing to financially
              support the sponsored person. Duration: 3 years for spouses/partners/children 22+;
              10 years or until age 25 for children under 22; 20 years for parents/grandparents.
            </li>
            <li>
              <strong>Spousal sponsorship (outland vs inland)</strong>: Outland sponsorships are
              processed through IRCC overseas — the sponsored spouse remains abroad. Inland
              (in-Canada) sponsorships allow the spouse to remain in Canada on an open work permit
              while the PR application is processed; the couple must be cohabiting. Inland is
              faster but available only to those lawfully in Canada.
            </li>
            <li>
              <strong>Bars to sponsorship</strong>: Sponsors cannot sponsor if they have been
              convicted of a prescribed sexual or violent offence against a family member, are in
              default of a previous undertaking, are receiving social assistance (exception for
              parents/grandparents), are undischarged bankrupt, or are incarcerated.
            </li>
          </ul>

          <h2>Refugee Claims at the IRB</h2>
          <p>
            Canada&apos;s refugee system is governed by IRPA Division 1 (ss.95-110) and the
            <em> Convention Refugee Determination Division (RPD)</em> of the IRB:
          </p>
          <p>
            <strong>Protected person categories</strong>:
          </p>
          <ul>
            <li>
              <strong>Convention refugee</strong> (IRPA s.96): A person with a well-founded fear
              of persecution based on race, religion, nationality, membership in a particular
              social group, or political opinion. The persecution must be by the state or an agent
              the state cannot or will not protect against.
            </li>
            <li>
              <strong>Person in need of protection</strong> (IRPA s.97): A person whose removal
              would subject them to a danger of torture, risk to life, or risk of cruel and
              unusual treatment or punishment, where the risk is not faced generally by others
              in that country.
            </li>
          </ul>
          <p>
            <strong>Claiming process</strong>: Claims are made at a port of entry or inland at
            an IRCC office. The claimant submits a Basis of Claim (BOC) form — a detailed
            narrative of their personal story and grounds for protection. The RPD schedules a
            hearing within 45-60 days. The claimant may be represented by counsel; IRCC designates
            a Refugee Protection Officer (RPO) who may question the claimant but is not an
            adversary in most claims.
          </p>
          <p>
            <strong>Designated Foreign Nationals (DFN) and Safe Third Country Agreement (STCA)</strong>:
            Irregular border crossers who cross at unofficial ports of entry from the United States
            are subject to the STCA between Canada and the US. The STCA was amended in 2023 to
            apply across the entire land border (not just official ports of entry) — meaning
            irregular crossers from the US are generally ineligible to make refugee claims in Canada.
            Exceptions: unaccompanied minors, persons with Canadian family members, and persons
            facing the death penalty.
          </p>
          <p>
            <strong>Appeal</strong>: Rejected claimants may appeal to the Refugee Appeal Division
            (RAD) within 15 days of receiving the RPD decision. RAD applies a correctness standard
            to questions of law and a reasonableness standard to questions of fact (post-<em>Vavilov</em>
            influence). Pre-removal risk assessment (PRRA) is available after a 12-month bar
            following a RAD rejection.
          </p>

          <h2>Inadmissibility and Removal</h2>
          <p>
            Foreign nationals and permanent residents may be inadmissible to Canada under IRPA
            s.34-42 on grounds including:
          </p>
          <ul>
            <li>Security — terrorism, espionage, subversion</li>
            <li>Human or international rights violations — war crimes, crimes against humanity</li>
            <li>Serious criminality — convicted of an offence punishable by at least 10 years (PR) or sentenced to 6+ months</li>
            <li>Criminality (foreign nationals) — convicted of an offence outside Canada that, if committed in Canada, would be an indictable offence</li>
            <li>Organized criminality</li>
            <li>Health grounds — excessive demand on social services</li>
            <li>Financial reasons — inability to support self</li>
            <li>Misrepresentation (s.40)</li>
          </ul>
          <p>
            <strong>Admissibility hearings at the IRB</strong>: CBSA refers cases to the
            Immigration Division (ID) for admissibility hearings. The ID determines inadmissibility
            on a balance of probabilities. If found inadmissible, a removal order is issued. Types:
            departure order (60 days to leave, voluntary departure), exclusion order (1 year bar),
            deportation order (must obtain written authorization to return).
          </p>

          <h2>Summary</h2>
          <p>
            Ontario immigration lawyers must be fluent in the full range of IRPA pathways —
            from Express Entry and provincial nominee programs to family sponsorship, refugee
            claims, and enforcement proceedings. The STCA amendment, the NOC 2021 transition,
            and IRCC&apos;s shift to category-based Express Entry draws have all changed the
            landscape significantly since 2022. Maintaining detailed case notes and tracking
            IRCC processing times and draw cut-offs is essential for effective client advice.
          </p>
          <p>
            Atticus helps Ontario immigration lawyers manage large caseloads, track multiple
            application deadlines, and maintain LSO-compliant trust accounting for immigration
            retainers — all from a single Ontario-built platform.
          </p>
        </div>

        <div className="mt-12 rounded-xl bg-blue-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-gray-900">
            Practice Management for Ontario Immigration Lawyers
          </h3>
          <p className="mb-6 text-gray-600">
            Deadline tracking, trust accounting, matter management, and AI document analysis —
            purpose-built for Ontario immigration practice.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Start Free Trial
          </a>
        </div>
      </article>
    </>
  );
}
