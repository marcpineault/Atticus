import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Refugee and Immigration Law Guide 2024: Asylum Claims, IRPA, and Appeals | Atticus",
  description:
    "Ontario immigration and refugee law: RPD refugee hearing process, sur place claims, RAD appeal, PRRA, H&C applications, inadmissibility grounds under IRPA, and Pre-Removal Risk Assessment for Ontario immigration lawyers.",
  openGraph: {
    title: "Ontario Refugee and Immigration Law Guide 2024: Asylum Claims, IRPA, and Appeals",
    description:
      "Complete guide for Ontario immigration lawyers on refugee protection — RPD process, Refugee Convention definition, sur place claims, RAD appeal, PRRA, inadmissibility, and H&C applications.",
    url: "https://getatticus.ca/blog/ontario-immigration-refugee",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-immigration-refugee" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Refugee and Immigration Law Guide 2024: Asylum Claims, IRPA, and Appeals",
      "description": "Ontario immigration and refugee law covering RPD refugee hearing, Refugee Convention definition, sur place claims, RAD appeal, PRRA, H&C applications, and inadmissibility grounds.",
      "url": "https://getatticus.ca/blog/ontario-immigration-refugee",
      "datePublished": "2024-12-01",
      "dateModified": "2024-12-01",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the refugee definition under Canadian law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the Immigration and Refugee Protection Act (IRPA) and the 1951 Refugee Convention, a Convention refugee is a person who has a well-founded fear of persecution based on one of five grounds: race, religion, nationality, membership in a particular social group, or political opinion. The fear must be both subjective (the claimant genuinely fears persecution) and objective (there is a reasonable basis for the fear given country conditions). The claimant must also be outside their country of nationality or habitual residence."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if the Refugee Protection Division rejects a refugee claim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the Refugee Protection Division (RPD) rejects a refugee claim, the claimant generally has 15 days to file an appeal to the Refugee Appeal Division (RAD). The RAD may affirm, set aside, or substitute the RPD's decision. If the RAD also rejects the claim, the claimant may apply for a Pre-Removal Risk Assessment (PRRA) and/or make a Humanitarian and Compassionate (H&C) application. Judicial review to the Federal Court is available from RAD decisions within 15 days."
          }
        },
        {
          "@type": "Question",
          "name": "What is a sur place refugee claim in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A sur place claim is a refugee claim based on events that occurred after the claimant left their home country. The risk of persecution arises not from conditions that existed when the claimant left, but from changed country conditions or the claimant's own activities in Canada (such as political activism, converting religion, or publicly opposing the home government). Sur place claims are fully recognized under Canadian law but are subject to careful scrutiny — particularly where the claimant's activities in Canada appear designed to manufacture a refugee claim."
          }
        },
        {
          "@type": "Question",
          "name": "What is a humanitarian and compassionate application in Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A humanitarian and compassionate (H&C) application under IRPA s.25 allows a person who is otherwise inadmissible or ineligible to remain in Canada to request permanent residence on the basis of humanitarian and compassionate considerations. The decision-maker weighs factors including establishment in Canada, best interests of any children directly affected, family ties to Canada, country conditions, and hardship. H&C applications are decided by IRCC officers and are not a refugee determination — a failed refugee claim does not bar an H&C application."
          }
        }
      ]
    }
  ]
}`;

type RefugeeGroundRow = {
  ground: string;
  definition: string;
  examples: string;
};

const refugeeGrounds: RefugeeGroundRow[] = [
  {
    ground: "Race",
    definition: "Persecution based on the claimant's racial origin or ethnicity",
    examples: "Ethnic minority persecuted by state or non-state actors; racial profiling by police; ethnically motivated violence",
  },
  {
    ground: "Religion",
    definition: "Persecution based on religious beliefs, practices, or identity",
    examples: "Converts persecuted by family or state; religious minorities facing state oppression; apostasy charges",
  },
  {
    ground: "Nationality",
    definition: "Persecution based on national origin, citizenship, or statelessness",
    examples: "Stateless persons denied citizenship; persecution of minority nationalities; cross-border ethnic conflict",
  },
  {
    ground: "Membership in a particular social group",
    definition: "Persecution based on membership in a group sharing an immutable characteristic or fundamental identity",
    examples: "LGBTQ+ persons; women fleeing gender-based violence; domestic violence victims; gang victimization (case-by-case)",
  },
  {
    ground: "Political opinion",
    definition: "Persecution based on actual or perceived political views",
    examples: "Opposition politicians; journalists; human rights activists; trade union leaders; perceived dissidents",
  },
];

type ProcessStep = {
  stage: string;
  description: string;
  timeline: string;
  notes: string;
};

const rpdProcess: ProcessStep[] = [
  {
    stage: "Claim made at port of entry or inland",
    description: "Claim can be made at a land border crossing, airport, or at an inland IRCC office",
    timeline: "Eligibility determination within 3 working days (detained); 15 working days (others)",
    notes: "Third country nationals from the US subject to Safe Third Country Agreement (STCA) at official land crossings",
  },
  {
    stage: "Eligibility determination",
    description: "CBSA or IRCC determines whether the claimant is eligible to make a refugee claim in Canada",
    timeline: "Decision within 3 or 15 working days depending on detention status",
    notes: "Ineligible if already recognized as refugee in another country, previously rejected in Canada, or subject to extradition",
  },
  {
    stage: "Referral to RPD",
    description: "Eligible claimants are referred to the Refugee Protection Division; assigned a hearing date",
    timeline: "Hearing typically scheduled within 45-60 days for CLAM system; longer in practice",
    notes: "Claimant must complete Basis of Claim form within 15 days of referral (inland) or at time of claim (border)",
  },
  {
    stage: "Basis of Claim preparation",
    description: "Claimant submits detailed written narrative of persecution feared; this is the foundation of the claim",
    timeline: "15 days for inland claims; at time of claim for border claims",
    notes: "Critical document; inconsistencies between BOC and testimony are a primary credibility concern",
  },
  {
    stage: "Document disclosure",
    description: "Both parties exchange documents; claimant provides country condition evidence and personal documents",
    timeline: "Documents must be filed at least 10 days before the hearing",
    notes: "Late disclosure requires RPD leave; failure to disclose can result in inadmissibility of evidence",
  },
  {
    stage: "RPD hearing",
    description: "Hearing before a member of the Refugee Protection Division; claimant testifies; member questions",
    timeline: "Typically 90 minutes to 3 hours; can be longer for complex claims",
    notes: "Claimant can request an interpreter; refugee claimant has right to counsel; Crown counsel (IRCC) may intervene",
  },
  {
    stage: "RPD decision",
    description: "Member issues decision to accept or reject the claim with written reasons",
    timeline: "Decision typically within 90 days of hearing; shorter for straightforward claims",
    notes: "Accepted claims result in Convention refugee or person in need of protection status; rejected claims trigger appeal rights",
  },
  {
    stage: "RAD appeal or Federal Court review",
    description: "Rejected claimants may appeal to the Refugee Appeal Division or seek judicial review of RPD decision",
    timeline: "RAD appeal: 15 days to file; Federal Court judicial review: 15 days to file leave application",
    notes: "RAD cannot hear new evidence except in limited circumstances; Federal Court reviews only for error of law or fact",
  },
];

type InadmissibilityRow = {
  ground: string;
  basis: string;
  irpaSection: string;
};

const inadmissibilityGrounds: InadmissibilityRow[] = [
  {
    ground: "Security",
    basis: "Espionage, subversion of democratic government, terrorism, or being a member of a terrorist organization",
    irpaSection: "s. 34",
  },
  {
    ground: "Human or international rights violations",
    basis: "War crimes, crimes against humanity, being a senior official in a government that engaged in torture",
    irpaSection: "s. 35",
  },
  {
    ground: "Serious criminality",
    basis: "Conviction in Canada of an offence punishable by maximum 10 years or more, for which sentence of 6 months or more was imposed",
    irpaSection: "s. 36(1)",
  },
  {
    ground: "Criminality (PR and temporary residents)",
    basis: "Conviction for an indictable offence or two summary offences",
    irpaSection: "s. 36(2)",
  },
  {
    ground: "Organized criminality",
    basis: "Member of a criminal organization; engaging or having engaged in criminal organization activity",
    irpaSection: "s. 37",
  },
  {
    ground: "Health grounds",
    basis: "Condition that is a danger to public health or public safety, or that would cause excessive demand on health services",
    irpaSection: "s. 38",
  },
  {
    ground: "Financial reasons",
    basis: "Unable or unwilling to support oneself or dependants",
    irpaSection: "s. 39",
  },
  {
    ground: "Misrepresentation",
    basis: "Misrepresenting or withholding material facts in an immigration application; organized fraud schemes",
    irpaSection: "s. 40",
  },
];

const faqs = [
  {
    q: "What is the refugee definition under Canadian law?",
    a: "Under the Immigration and Refugee Protection Act (IRPA) and the 1951 Refugee Convention, a Convention refugee is a person who has a well-founded fear of persecution based on one of five grounds: race, religion, nationality, membership in a particular social group, or political opinion. The fear must be both subjective (the claimant genuinely fears persecution) and objective (there is a reasonable basis for the fear given country conditions). The claimant must also be outside their country of nationality or habitual residence.",
  },
  {
    q: "What happens if the Refugee Protection Division rejects a refugee claim?",
    a: "If the Refugee Protection Division (RPD) rejects a refugee claim, the claimant generally has 15 days to file an appeal to the Refugee Appeal Division (RAD). The RAD may affirm, set aside, or substitute the RPD's decision. If the RAD also rejects the claim, the claimant may apply for a Pre-Removal Risk Assessment (PRRA) and/or make a Humanitarian and Compassionate (H&C) application. Judicial review to the Federal Court is available from RAD decisions within 15 days.",
  },
  {
    q: "What is a sur place refugee claim in Canada?",
    a: "A sur place claim is a refugee claim based on events that occurred after the claimant left their home country. The risk of persecution arises not from conditions that existed when the claimant left, but from changed country conditions or the claimant's own activities in Canada (such as political activism, converting religion, or publicly opposing the home government). Sur place claims are fully recognized under Canadian law but are subject to careful scrutiny — particularly where the claimant's activities in Canada appear designed to manufacture a refugee claim.",
  },
  {
    q: "What is a humanitarian and compassionate application in Canada?",
    a: "A humanitarian and compassionate (H&C) application under IRPA s.25 allows a person who is otherwise inadmissible or ineligible to remain in Canada to request permanent residence on the basis of humanitarian and compassionate considerations. The decision-maker weighs factors including establishment in Canada, best interests of any children directly affected, family ties to Canada, country conditions, and hardship. H&C applications are decided by IRCC officers and are not a refugee determination — a failed refugee claim does not bar an H&C application.",
  },
];

export default function OntarioImmigrationRefugeePage() {
  return (
    <>
      <Script id="ontario-immigration-refugee-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
          <div className="max-w-4xl mx-auto text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-slate-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Ontario Immigration Refugee Guide</span>
          </div>
        </div>

        {/* Header */}
        <header className="py-16 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Immigration Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Refugee and Immigration Law Guide 2024: Asylum Claims, IRPA, and Appeals
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Refugee Convention 5 grounds, RPD 8-stage hearing process, sur place claims, RAD appeal, PRRA, H&C applications under IRPA s.25, 8 inadmissibility grounds, and Safe Third Country Agreement implications for Ontario immigration lawyers.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>December 2024</span>
              <span>•</span>
              <span>16 min read</span>
              <span>•</span>
              <span>Atticus Legal Team</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              Refugee and immigration law is among the most consequential areas of Ontario legal practice. Errors in refugee proceedings can result in refusal and return to a country where a client faces persecution, torture, or death. Ontario immigration lawyers must master the refugee determination process, the appeals available, and the alternative relief mechanisms when claims fail.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Canada&apos;s refugee system is governed by the Immigration and Refugee Protection Act (IRPA) and the Refugee Protection Division Rules. The Refugee Protection Division (RPD) and Refugee Appeal Division (RAD) are independent administrative tribunals that operate under the Immigration and Refugee Board of Canada (IRB).
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the five Convention grounds for refugee protection, the RPD hearing process, sur place claims, the RAD appeal and Federal Court judicial review, the PRRA, H&C applications, and the inadmissibility grounds Ontario immigration lawyers encounter most frequently.
            </p>
          </section>

          {/* Refugee Grounds */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Five Refugee Convention Grounds Under IRPA
            </h2>
            <p className="text-slate-700 mb-6">
              To qualify as a Convention refugee, a claimant must establish a well-founded fear of persecution based on one of five protected grounds. The fear must be both subjectively genuine and objectively reasonable given country conditions. State protection must be unavailable or inadequate.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Convention Ground</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Definition</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {refugeeGrounds.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.ground}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.definition}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <p className="text-blue-900 text-sm">
                <strong>Person in need of protection (IRPA s.97):</strong> In addition to Convention refugees, a person may be recognized as a &quot;person in need of protection&quot; if removal would subject them personally to a risk to their life or to risk of cruel and unusual treatment or punishment. This ground captures claimants who do not fit neatly into the Convention grounds but face serious individualized risk in their home country.
              </p>
            </div>
          </section>

          {/* RPD Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              RPD Refugee Hearing Process: 8 Stages
            </h2>
            <div className="space-y-4">
              {rpdProcess.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-1">
                        <h3 className="font-semibold text-slate-900">{item.stage}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{item.timeline}</span>
                      </div>
                      <p className="text-slate-700 text-sm mb-1">{item.description}</p>
                      <p className="text-slate-500 text-xs italic">{item.notes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inadmissibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Inadmissibility Grounds Under IRPA
            </h2>
            <p className="text-slate-700 mb-6">
              Even where a claimant has a legitimate refugee claim, they may be inadmissible to Canada on independent grounds. Inadmissibility can result in exclusion from the Convention refugee definition (Article 1F exclusion clause) or removal despite refugee status in serious criminality cases.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Ground</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Basis</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">IRPA</th>
                  </tr>
                </thead>
                <tbody>
                  {inadmissibilityGrounds.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.ground}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.basis}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm font-mono text-xs">{row.irpaSection}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 rounded-2xl p-10 text-center text-white mb-12">
            <h2 className="text-2xl font-bold mb-3">
              Manage Immigration Files with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">
              Atticus helps Ontario immigration lawyers track hearing deadlines, manage trust accounting, and keep files LSO-compliant from refugee claim through appeal.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="border-t border-slate-100 pt-8">
            <h3 className="font-semibold text-slate-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-immigration-permanent-residence", label: "Ontario Immigration Permanent Residence Guide" },
                { href: "/blog/ontario-immigration-work-permit", label: "Ontario Immigration Work Permit Guide" },
                { href: "/blog/ontario-administrative-law", label: "Ontario Administrative Law Guide" },
                { href: "/blog/ontario-judicial-review", label: "Ontario Judicial Review Guide" },
                { href: "/blog/ontario-human-rights-complaint", label: "Ontario Human Rights Complaint" },
                { href: "/blog/ontario-child-protection", label: "Ontario Child Protection Guide" },
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
