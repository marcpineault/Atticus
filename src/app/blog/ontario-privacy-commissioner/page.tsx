import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Privacy Commissioner Guide 2024 | IPC Complaints and PHIPA Investigations",
  description:
    "A practical guide to the Ontario Information and Privacy Commissioner (IPC): PHIPA health privacy complaints, FIPPA/MFIPPA access and privacy complaints, mandatory breach reporting, IPC investigation process, and orders — for Ontario lawyers advising health and public sector clients.",
  openGraph: {
    title: "Ontario Privacy Commissioner Guide 2024 | IPC Complaints and PHIPA Investigations",
    description:
      "Ontario IPC complaints: PHIPA health information custodian obligations, FIPPA/MFIPPA access and privacy rights, mandatory breach reporting, IPC investigation and adjudication process, and remedies. A guide for Ontario lawyers.",
    url: "https://getatticus.ca/blog/ontario-privacy-commissioner",
    siteName: "Atticus",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Privacy Commissioner: IPC Complaints, PHIPA, and FIPPA Guide",
  "description": "Ontario IPC complaints process: PHIPA health privacy, FIPPA/MFIPPA access rights, mandatory breach reporting, IPC investigation and adjudication, and orders.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "url": "https://getatticus.ca/blog/ontario-privacy-commissioner",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-privacy-commissioner"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does the Ontario Information and Privacy Commissioner do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario Information and Privacy Commissioner (IPC) is an independent officer of the Ontario Legislative Assembly. The IPC oversees compliance with the Freedom of Information and Protection of Privacy Act (FIPPA), the Municipal Freedom of Information and Protection of Privacy Act (MFIPPA), and the Personal Health Information Protection Act (PHIPA). The IPC handles complaints about privacy breaches, access to information requests refused by public institutions, and investigations of health information custodians. The IPC can make binding orders."
      }
    },
    {
      "@type": "Question",
      "name": "Who must comply with PHIPA in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PHIPA applies to 'health information custodians' (HICs) — a defined list in PHIPA that includes: health care practitioners (physicians, nurses, pharmacists, dentists, physiotherapists, etc.), hospitals, long-term care homes, psychiatric facilities, pharmacies, laboratories, ambulance operators, and some community health centres. Ontario HICs must: collect only necessary personal health information (PHI), use and disclose PHI only as permitted by PHIPA, implement administrative, technical, and physical safeguards, and report prescribed privacy breaches to the IPC and affected individuals."
      }
    },
    {
      "@type": "Question",
      "name": "What is mandatory breach reporting under PHIPA in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Since 2017, Ontario HICs have been required to notify the IPC of certain privacy breaches under PHIPA. A HIC must notify the IPC if personal health information is stolen, lost, or accessed without authority, and if it is 'reasonably possible' that the PHI was used or disclosed without authority. Notice must also be given to affected individuals. The IPC receives hundreds of breach reports annually from Ontario health organizations including hospitals, pharmacies, and physicians."
      }
    },
    {
      "@type": "Question",
      "name": "How does the IPC complaints process work under FIPPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under FIPPA (provincial institutions) and MFIPPA (municipal institutions), individuals have the right to request access to records held by Ontario government institutions. A person dissatisfied with an access decision (refusal, fee, delay) or with how an institution handled their personal information may file a complaint with the IPC. The IPC mediates most complaints. If mediation fails, the IPC may conduct a review and issue a binding order. The IPC may order disclosure of records, correction of personal information, or other remedies."
      }
    },
    {
      "@type": "Question",
      "name": "Can IPC orders be appealed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IPC orders may be judicially reviewed in the Ontario Divisional Court under section 21.1 of FIPPA or section 20.1 of MFIPPA. The standard of review for IPC access and privacy decisions is reasonableness (following Vavilov). Appeals of IPC orders related to PHIPA proceed to the Superior Court of Justice (Divisional Court). The IPC's procedural decisions and investigative processes are subject to judicial review on procedural fairness grounds."
      }
    }
  ]
}`;

export default function OntarioPrivacyCommissionerPage() {
  return (
    <>
      <Script id="privacy-commissioner-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="privacy-commissioner-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-amber-700 hover:text-amber-900 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Privacy Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Privacy Commissioner: IPC Complaints, PHIPA, and FIPPA Guide
            </h1>
            <p className="text-lg text-slate-600">
              The Ontario Information and Privacy Commissioner (IPC) oversees
              health privacy compliance under PHIPA and access to information
              under FIPPA and MFIPPA. For Ontario lawyers advising health
              information custodians, public sector institutions, or individuals
              seeking access to government records, understanding the IPC&apos;s
              jurisdiction, complaint process, and enforcement powers is essential.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2>The IPC&apos;s Role and Jurisdiction</h2>
            <p>
              The Information and Privacy Commissioner of Ontario is an
              independent officer of the Legislative Assembly with jurisdiction
              under three statutes:
            </p>
            <ul>
              <li>
                <strong>Freedom of Information and Protection of Privacy
                Act</strong>, RSO 1990, c F.31 (FIPPA) — covering Ontario
                provincial government institutions (ministries, agencies,
                boards, commissions, and universities)
              </li>
              <li>
                <strong>Municipal Freedom of Information and Protection
                of Privacy Act</strong>, RSO 1990, c M.56 (MFIPPA) — covering
                Ontario municipalities, school boards, conservation authorities,
                police services boards, and other local institutions
              </li>
              <li>
                <strong>Personal Health Information Protection Act, 2004</strong>,
                SO 2004, c 3 (PHIPA) — governing the collection, use, and
                disclosure of personal health information (PHI) by health
                information custodians (HICs)
              </li>
            </ul>

            <h2>PHIPA: Health Privacy in Ontario</h2>
            <h3>Health Information Custodians</h3>
            <p>
              PHIPA applies to &quot;health information custodians&quot; —
              a defined list that includes health care practitioners regulated
              by Ontario health regulatory colleges (physicians, nurses,
              pharmacists, physiotherapists, etc.), hospitals, long-term care
              homes, psychiatric facilities, independent health facilities,
              pharmacies, and laboratories.
            </p>
            <p>
              HICs must:
            </p>
            <ul>
              <li>Collect PHI only if necessary for a lawful purpose</li>
              <li>
                Use and disclose PHI only with the individual&apos;s consent
                or as authorized by PHIPA
              </li>
              <li>
                Implement administrative, technical, and physical safeguards
                appropriate to the sensitivity of the PHI and the risks of
                unauthorized access
              </li>
              <li>
                Provide individuals with access to their own PHI on request,
                subject to limited exceptions
              </li>
              <li>
                Correct PHI that is inaccurate or incomplete
              </li>
            </ul>

            <h3>Mandatory Breach Reporting</h3>
            <p>
              Since October 1, 2017, PHIPA requires HICs to notify the IPC of
              privacy breaches where PHI has been stolen, lost, or accessed
              without authority and it is &quot;reasonably possible&quot; that
              the PHI was used or disclosed without authority. The same
              threshold triggers notification to affected individuals.
            </p>
            <p>
              The IPC has published guidelines on breach reporting, including
              what constitutes a reportable breach and the timeline for
              notification. Failure to report a prescribed breach is an offence
              under PHIPA (s. 72).
            </p>

            <h3>PHIPA Complaints and Investigations</h3>
            <p>
              An individual who believes a HIC has contravened PHIPA may
              file a complaint with the IPC. The IPC complaint process involves:
            </p>
            <ol>
              <li>
                <strong>Intake</strong> — the IPC reviews whether the complaint
                is within jurisdiction and not frivolous or vexatious
              </li>
              <li>
                <strong>Early resolution</strong> — the IPC may attempt early
                resolution between the complainant and the HIC without a formal
                investigation
              </li>
              <li>
                <strong>Investigation</strong> — if early resolution fails,
                the IPC investigates; the IPC may require production of records,
                access to premises, and sworn testimony
              </li>
              <li>
                <strong>Review (adjudication)</strong> — the IPC holds a hearing
                and issues a binding order if appropriate
              </li>
            </ol>

            <h2>FIPPA and MFIPPA: Access to Information</h2>
            <h3>The Right of Access</h3>
            <p>
              FIPPA (s. 10) and MFIPPA (s. 4) give every person the right to
              access records held by an Ontario provincial or municipal
              institution, subject to limited exemptions. The institution must
              respond within 30 days (with possible extensions) and must
              provide the requested records or give written reasons for any
              refusal.
            </p>
            <p>
              Common exemptions include:
            </p>
            <ul>
              <li>
                Solicitor-client privilege (FIPPA s. 19; MFIPPA s. 12)
              </li>
              <li>
                Law enforcement (FIPPA s. 14; MFIPPA s. 8) — ongoing investigations
              </li>
              <li>
                Cabinet records and policy advice (FIPPA s. 12-13)
              </li>
              <li>
                Personal privacy — third-party personal information that would
                constitute an unjustified invasion of privacy (FIPPA s. 21;
                MFIPPA s. 14)
              </li>
              <li>
                Third-party commercial information (FIPPA s. 17; MFIPPA s. 10)
              </li>
            </ul>

            <h3>IPC Review Process Under FIPPA/MFIPPA</h3>
            <p>
              A person who is refused access, receives a fee estimate they
              believe is unreasonable, or believes an institution has not
              properly handled their personal information may request a review
              by the IPC within 30 days of receiving the institution&apos;s
              decision (FIPPA s. 50; MFIPPA s. 39).
            </p>
            <p>
              The IPC review process:
            </p>
            <ol>
              <li>
                <strong>Mediation</strong> — the IPC mediator works with the
                requester and institution to resolve the dispute; most files
                are resolved at this stage
              </li>
              <li>
                <strong>Adjudication</strong> — if mediation fails, an
                adjudicator conducts a paper-based or oral hearing; parties
                file representations
              </li>
              <li>
                <strong>Order</strong> — the IPC issues a binding order that
                may direct disclosure, correction, or other remedies
              </li>
            </ol>

            <h3>Privacy Complaints Under FIPPA/MFIPPA</h3>
            <p>
              In addition to access complaints, individuals may file complaints
              with the IPC about how their personal information was collected,
              used, or disclosed by a public institution. The IPC investigates
              and may issue orders requiring institutions to correct their
              practices.
            </p>

            <h2>IPC Orders and Judicial Review</h2>
            <p>
              IPC orders are binding on Ontario public institutions and HICs.
              Orders may be enforced by application to the Superior Court
              (Divisional Court). IPC orders may be appealed by way of
              judicial review:
            </p>
            <ul>
              <li>
                <strong>Standard of review</strong>: following{" "}
                <em>Canada (Minister of Citizenship and Immigration) v Vavilov</em>{" "}
                [2019] 4 SCR 653, IPC orders on substantive questions of law
                are reviewed on a reasonableness standard; pure questions of
                central importance to the legal system may attract correctness
                review
              </li>
              <li>
                <strong>Procedural fairness</strong>: the IPC is bound by
                procedural fairness obligations — notice, opportunity to be
                heard, and reasons for decisions
              </li>
            </ul>

            <h2>Privacy Tort Claims Alongside IPC Complaints</h2>
            <p>
              In addition to filing an IPC complaint, an individual whose PHI
              was improperly disclosed may have a tort claim for intrusion upon
              seclusion (recognized by the Ontario Court of Appeal in{" "}
              <em>Jones v Tsige</em> 2012 ONCA 32) or for breach of confidence.
              Damages awards in privacy tort cases have ranged from nominal
              ($1,000-$5,000 for data breaches without significant harm) to
              significant awards where the breach caused identifiable harm.
            </p>

            <h2>How Atticus Helps Ontario Lawyers with Privacy Files</h2>
            <p>
              Privacy compliance, breach response, and IPC proceedings involve
              strict timelines (30-day access response, breach reporting
              obligations), large volumes of records review, and multi-party
              regulatory proceedings. Atticus supports Ontario privacy lawyers with:
            </p>
            <ul>
              <li>
                <strong>Deadline tracking</strong> — AI extracts statutory
                deadlines from IPC correspondence, access request decisions,
                and breach notification timelines
              </li>
              <li>
                <strong>Document analysis</strong> — AI reviews IPC orders,
                PHIPA compliance policies, and breach investigation reports
                to surface key findings and required remedies
              </li>
              <li>
                <strong>Matter management</strong> — track IPC complaint stages,
                mediation outcomes, and adjudication schedules for privacy files
              </li>
              <li>
                <strong>LSO-compliant trust accounting</strong> — manage
                retainers for privacy litigation and regulatory defence files
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Ontario-Built Practice Management for Privacy Lawyers
              </h3>
              <p className="text-slate-700 mb-4 text-sm">
                Atticus helps Ontario privacy and health law lawyers manage
                IPC complaint timelines, document analysis, and client files —
                with LSO-compliant trust accounting built in.
                $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Start Free Trial
              </Link>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Related Resources
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/blog/ontario-privacy-law-lawyers",
                  label: "Ontario Privacy Law for Lawyers",
                },
                {
                  href: "/blog/ontario-privacy-breach",
                  label: "Ontario Privacy Breach Guide",
                },
                {
                  href: "/blog/ontario-technology-law",
                  label: "Ontario Technology Law",
                },
                {
                  href: "/blog/ontario-administrative-law",
                  label: "Ontario Administrative Law",
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
          </div>
        </div>
      </div>
    </>
  );
}
