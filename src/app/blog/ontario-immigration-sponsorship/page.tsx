import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Immigration Sponsorship Guide 2024 | Family Sponsorship for Lawyers",
  description:
    "A practical guide to Canadian immigration family sponsorship for Ontario lawyers: spousal sponsorship, sponsoring parents and grandparents, sponsorship undertaking obligations, IRPA eligibility criteria, inadmissibility, and appeals to the Immigration Appeal Division.",
  openGraph: {
    title: "Ontario Immigration Sponsorship Guide 2024 | Family Sponsorship for Lawyers",
    description:
      "Canadian family sponsorship: spousal and partner sponsorship, parents and grandparents program, sponsorship undertaking obligations, inadmissibility grounds, and IAD appeals. A guide for Ontario immigration lawyers.",
    url: "https://getatticus.ca/blog/ontario-immigration-sponsorship",
    siteName: "Atticus",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Immigration Family Sponsorship: Spousal, Parents and Grandparents, and Undertaking Obligations",
  "description": "A practical guide to Canadian family sponsorship for Ontario immigration lawyers: spousal sponsorship, parents and grandparents, undertaking obligations, inadmissibility, and IAD appeals.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "url": "https://getatticus.ca/blog/ontario-immigration-sponsorship",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-immigration-sponsorship"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who can sponsor a family member for Canadian immigration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Canadian citizen or permanent resident who is at least 18 years old may sponsor certain family members for permanent residence under the family class. Eligible relationships include: spouse, common-law partner, or conjugal partner; dependent children (under 22 or over 22 with a physical or mental condition); parents and grandparents (through the Parents and Grandparents Program); siblings, nephews/nieces, or grandchildren who are orphaned, under 18, and unmarried; and in some circumstances, other relatives where the sponsor has no eligible relative in Canada."
      }
    },
    {
      "@type": "Question",
      "name": "What are the sponsorship undertaking obligations in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A sponsorship undertaking is a legal commitment by the sponsor to provide for the sponsored person's basic requirements (food, shelter, clothing) and ensure they do not require social assistance from the government. The undertaking period is 3 years for sponsored spouses, common-law, or conjugal partners; 10 years or until age 25 for sponsored dependent children; and 20 years for sponsored parents and grandparents. A sponsor who fails to meet undertaking obligations may be subject to recovery of social assistance payments by the province."
      }
    },
    {
      "@type": "Question",
      "name": "What income requirements apply to sponsoring parents and grandparents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To sponsor parents and grandparents under the Parents and Grandparents Program (PGP), the sponsor must meet minimum necessary income (MNI) requirements — generally the Low Income Cut-Off (LICO) plus 30% for the three consecutive tax years preceding the application, covering the size of the sponsor's family unit (including the persons being sponsored). This threshold is significantly higher than for spousal sponsorship. The PGP is subject to annual caps on applications — IRCC runs an interest-to-sponsor process each year."
      }
    },
    {
      "@type": "Question",
      "name": "Can a sponsored person be refused despite an eligible sponsor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A sponsored person may be refused permanent residence on inadmissibility grounds even if the sponsor is eligible. Common inadmissibility grounds include: security concerns (IRPA s.34), human or international rights violations (s.35), serious criminality (s.36), organized crime (s.37), health grounds (medical inadmissibility requiring excessive demand on health or social services, s.38), financial reasons (s.39), and misrepresentation (s.40). Some inadmissibility grounds are not applicable to sponsored family class members (e.g., financial inadmissibility does not apply to spouses, partners, and dependent children)."
      }
    },
    {
      "@type": "Question",
      "name": "Can a spousal sponsorship refusal be appealed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A refusal of a family class sponsorship application (other than on inadmissibility grounds of security, human rights violations, or organized crime) may be appealed to the Immigration Appeal Division (IAD) of the Immigration and Refugee Board. The sponsor has 30 days from receiving the refusal letter to file an IAD appeal. The IAD hears the appeal on the merits and may allow the appeal if the original decision was incorrect in law or fact, or on humanitarian and compassionate grounds."
      }
    }
  ]
}`;

export default function OntarioImmigrationSponsorshipPage() {
  return (
    <>
      <Script id="immigration-sponsorship-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="immigration-sponsorship-faq-schema" type="application/ld+json">
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
              Immigration Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Canadian Family Sponsorship: A Guide for Ontario Immigration Lawyers
            </h1>
            <p className="text-lg text-slate-600">
              Family sponsorship is one of the highest-volume areas of Canadian
              immigration law — encompassing spousal and partner sponsorship,
              the Parents and Grandparents Program, dependent children, and
              the legal obligations that flow from sponsorship undertakings.
              This guide covers the key eligibility criteria, processing
              pathways, undertaking obligations, inadmissibility issues, and
              appeal options for Ontario immigration lawyers advising sponsors
              and sponsored persons.
            </p>
          </header>

          <article className="prose prose-slate max-w-none">
            <h2>Statutory Framework</h2>
            <p>
              Family sponsorship is governed by the{" "}
              <em>Immigration and Refugee Protection Act</em>, SC 2001, c 27
              (IRPA) and the{" "}
              <em>Immigration and Refugee Protection Regulations</em>,
              SOR/2002-227 (IRPR). The family class (section 12(1) IRPA)
              allows Canadian citizens and permanent residents to reunite with
              close family members by sponsoring them for permanent residence.
            </p>

            <h2>Who Can Sponsor</h2>
            <p>
              To be eligible as a sponsor under s. 130 IRPR, a person must:
            </p>
            <ul>
              <li>Be a Canadian citizen or permanent resident</li>
              <li>Be at least 18 years of age</li>
              <li>Reside or intend to reside in Canada (for citizen sponsors living abroad, there are specific requirements)</li>
              <li>Not be subject to a bar on sponsoring (see below)</li>
            </ul>

            <h3>Bars on Sponsoring</h3>
            <p>
              A person is not eligible to sponsor if they (IRPR s. 133):
            </p>
            <ul>
              <li>
                Are in default of a previous sponsorship undertaking (unpaid
                social assistance reimbursement obligations)
              </li>
              <li>
                Are in default of an immigration loan or performance bond
              </li>
              <li>
                Were convicted of certain offences involving violence or
                threats against a family member (within specified look-back
                periods)
              </li>
              <li>
                Are subject to an inadmissibility finding, removal order, or
                certain immigration detention
              </li>
              <li>
                Receive social assistance (other than for disability) — applies
                to parents/grandparents sponsorship and some other categories
              </li>
            </ul>

            <h2>Eligible Family Relationships</h2>
            <h3>Spouses, Common-Law Partners, and Conjugal Partners</h3>
            <p>
              The spouse or partner category is the most common sponsorship
              pathway. Eligible relationships include:
            </p>
            <ul>
              <li>
                <strong>Spouse</strong> — legally married (same-sex marriage
                recognized since 2005)
              </li>
              <li>
                <strong>Common-law partner</strong> — cohabiting in a
                conjugal relationship for at least 12 consecutive months
              </li>
              <li>
                <strong>Conjugal partner</strong> — in a conjugal relationship
                of at least 12 months but unable to cohabit or marry due to
                exceptional circumstances (immigration barriers, marital status
                in country of origin); rarely approved — IRCC expects couples
                to marry or cohabit if possible
              </li>
            </ul>
            <p>
              Spousal sponsorships are processed via two streams:
            </p>
            <ul>
              <li>
                <strong>Inland applications</strong> (Spouse or Common-Law
                Partner in Canada Class) — the sponsored person is in Canada
                with temporary status; may receive an open work permit pending
                processing
              </li>
              <li>
                <strong>Outland applications</strong> — the sponsored person
                is outside Canada; processed at the visa office in the
                applicant&apos;s country of residence or citizenship
              </li>
            </ul>

            <h3>Dependent Children</h3>
            <p>
              A dependent child may be sponsored as part of a principal
              applicant&apos;s application or independently. A dependent
              child is under 22 years of age and not a spouse or common-law
              partner, or is 22 or older and has been continuously dependent
              on a parent since before age 22 due to a mental or physical
              condition. Children must be declared at the time of the principal
              applicant&apos;s application or they may be barred from future
              sponsorship (&quot;one-year window&quot;, IRPA s. 117(9)(d)).
            </p>

            <h3>Parents and Grandparents Program (PGP)</h3>
            <p>
              The Parents and Grandparents Program (PGP) allows Canadian
              citizens and PRs to sponsor their parents and grandparents for
              permanent residence. Key features:
            </p>
            <ul>
              <li>
                <strong>Annual intake cap</strong> — IRCC invites a limited
                number of sponsors each year through an interest-to-sponsor
                (lottery) process; submitting an interest form does not
                guarantee an invitation
              </li>
              <li>
                <strong>Income requirements</strong> — LICO plus 30% for 3
                consecutive years, for the total family unit size after
                sponsorship; significantly higher than spousal income threshold
              </li>
              <li>
                <strong>Undertaking period</strong> — 20 years
              </li>
              <li>
                <strong>Super Visa as an alternative</strong> — parents and
                grandparents can apply for a Super Visa (multiple-entry,
                valid up to 10 years, allowing stays of up to 5 years per
                entry) while the PGP application is pending or as a long-term
                alternative if PGP is unavailable
              </li>
            </ul>

            <h2>Sponsorship Undertaking Obligations</h2>
            <p>
              By signing a sponsorship undertaking, the sponsor commits to:
            </p>
            <ul>
              <li>
                Providing for the basic requirements of the sponsored person
                (food, clothing, shelter)
              </li>
              <li>
                Ensuring the sponsored person does not receive social
                assistance during the undertaking period
              </li>
              <li>
                Reimbursing provincial governments for any social assistance
                paid to the sponsored person during the undertaking period
              </li>
            </ul>
            <p>
              Undertaking periods (IRPR s. 132):
            </p>
            <ul>
              <li>Spouse/common-law/conjugal partner: <strong>3 years</strong> from date of becoming a permanent resident</li>
              <li>Dependent child under 22: <strong>10 years</strong> or until age 25, whichever comes first</li>
              <li>Parents and grandparents: <strong>20 years</strong></li>
            </ul>
            <p>
              The breakdown of a marriage or relationship does not terminate
              the sponsorship undertaking — the sponsor remains liable for
              the full undertaking period.
            </p>

            <h2>Inadmissibility in Family Class Applications</h2>
            <p>
              Even where the sponsor is eligible, the sponsored person may be
              refused on inadmissibility grounds under IRPA. Key inadmissibility
              grounds for family class applicants include:
            </p>
            <ul>
              <li>
                <strong>Criminality (s. 36)</strong> — a conviction for an
                offence punishable by 10+ years in Canada, or a foreign
                conviction equivalent to such an offence. Individual
                rehabilitation, deemed rehabilitation (for older single
                offences), and temporary resident permits (TRPs) are available
                remedies.
              </li>
              <li>
                <strong>Medical inadmissibility (s. 38)</strong> — a condition
                likely to cause excessive demand on health or social services.
                The excessive demand threshold is based on a 5-year cost
                calculation against the per-capita average. Exemptions apply
                for spouses, common-law partners, and dependent children of
                Canadian citizens and PRs (IRPR s. 38(2)(b)).
              </li>
              <li>
                <strong>Misrepresentation (s. 40)</strong> — any
                misrepresentation that induced or could have induced an error
                in the immigration process. A finding of misrepresentation
                results in a 5-year bar on applying for any immigration status
                in Canada.
              </li>
              <li>
                <strong>Security and human rights violations (ss. 34-35)</strong>{" "}
                — terrorism, espionage, subversion, war crimes, crimes against
                humanity. These are not subject to IAD appeals.
              </li>
            </ul>

            <h2>Immigration Appeal Division (IAD) Appeals</h2>
            <p>
              A refused family class sponsorship may be appealed to the IAD
              (with some exceptions). The sponsor (not the sponsored person)
              has standing to appeal. Key procedural points:
            </p>
            <ul>
              <li>
                <strong>Filing deadline</strong>: 30 days from receipt of
                the refusal letter (or visa office refusal notice)
              </li>
              <li>
                <strong>Record of proceedings</strong>: the sponsor is
                entitled to the visa officer&apos;s GCMS notes and decision
                notes through access to information or as part of the IAD
                disclosure process
              </li>
              <li>
                <strong>Grounds of appeal</strong>: the IAD may allow an
                appeal if the decision was wrong in law, the decision was
                wrong in fact, the procedure was not observed, or on
                humanitarian and compassionate grounds (H&amp;C) — even if
                the refusal was technically correct
              </li>
              <li>
                <strong>H&amp;C factors</strong>: best interests of a child
                directly affected, establishment of the sponsor in Canada,
                hardship to the sponsored person if returned, length of
                relationship, support of family community
              </li>
            </ul>
            <p>
              IAD hearings are de novo — the IAD may receive new evidence not
              before the original decision-maker.
            </p>

            <h2>How Atticus Helps Ontario Immigration Lawyers</h2>
            <p>
              Immigration sponsorship files involve strict processing timelines,
              multiple government portals (IRCC, GCMS, IRCC application tracker),
              and complex inadmissibility analysis requiring careful file
              management. Atticus supports Ontario immigration lawyers with:
            </p>
            <ul>
              <li>
                <strong>Limitation period and deadline tracking</strong> — AI
                extracts key dates from refusal letters and government
                correspondence and flags IAD appeal deadlines (30 days)
              </li>
              <li>
                <strong>Matter management</strong> — track application stages,
                government communications, and hearing dates for sponsorship
                and IAD appeal files
              </li>
              <li>
                <strong>Document analysis</strong> — AI reviews visa officer
                refusal letters, GCMS notes, and supporting documents to
                surface key inadmissibility findings and grounds
              </li>
              <li>
                <strong>LSO-compliant trust accounting</strong> — manage retainer
                trust funds for immigration retainers with LSO By-Law 9 compliant
                accounting
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Ontario-Built Practice Management for Immigration Lawyers
              </h3>
              <p className="text-slate-700 mb-4 text-sm">
                Atticus manages deadlines, document analysis, and client files
                for Ontario immigration lawyers — with LSO-compliant trust
                accounting and AI document intelligence built in.
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
                  href: "/blog/ontario-immigration-permanent-residence",
                  label: "Ontario Immigration — Permanent Residence",
                },
                {
                  href: "/blog/ontario-immigration-refugee",
                  label: "Ontario Refugee Law",
                },
                {
                  href: "/ontario-immigration-lawyer",
                  label: "Ontario Immigration Lawyers",
                },
                {
                  href: "/blog/ontario-human-rights-complaint",
                  label: "Ontario Human Rights Complaint",
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
