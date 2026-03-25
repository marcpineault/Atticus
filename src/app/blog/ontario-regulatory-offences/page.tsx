import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Regulatory Offences Guide 2024: Strict Liability, Due Diligence, and POA Procedure",
  description:
    "Complete guide to Ontario regulatory offences: strict liability vs absolute liability (R v Sault Ste Marie three categories), due diligence defence, mens rea offences, Provincial Offences Act procedure (Part I tickets, Part III informations, Part X youth), sentencing under POA, and common Ontario regulatory regimes (OHSA, Environmental Protection Act, Highway Traffic Act).",
  openGraph: {
    title: "Ontario Regulatory Offences Guide 2024: Strict Liability, Due Diligence, and POA Procedure",
    description:
      "Ontario quasi-criminal law: strict liability (R v Sault Ste Marie), due diligence defence, POA Parts I/III/X, OHSA, EPA and HTA regulatory offences for Ontario lawyers.",
    url: "https://getatticus.ca/blog/ontario-regulatory-offences",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-regulatory-offences" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Regulatory Offences Guide 2024: Strict Liability, Due Diligence, and POA Procedure",
  "description": "Complete guide to Ontario regulatory and quasi-criminal offences: Sault Ste Marie categories, due diligence defence, POA procedure, and common Ontario regulatory regimes.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-regulatory-offences",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-regulatory-offences"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between strict liability and absolute liability in Ontario regulatory law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "R v Sault Ste Marie (1978 SCC) established three categories: (1) true criminal offences requiring full mens rea (Crown must prove guilty mind); (2) strict liability offences — Crown proves actus reus; accused may avoid liability by establishing due diligence on a balance of probabilities; (3) absolute liability offences — Crown proves actus reus only; no defence of due diligence or mistake of fact. Absolute liability combined with possible imprisonment violates Charter s.7."
      }
    },
    {
      "@type": "Question",
      "name": "How does the due diligence defence work in Ontario regulatory offences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In strict liability offences, the accused bears the burden of proving on a balance of probabilities that they took all reasonable precautions to avoid the offence. This includes: establishing a system for compliance; monitoring and enforcement of that system; reasonable response upon learning of a potential breach; and industry-standard precautions. The standard is objective — what a reasonable person in the accused's position would have done."
      }
    },
    {
      "@type": "Question",
      "name": "What is the procedure under the Ontario Provincial Offences Act Part III?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Part III of the Provincial Offences Act covers more serious regulatory offences. A provincial offences officer lays an information before a justice; the justice issues a summons. The defendant appears in Ontario Court of Justice (Provincial Offences Court). The Crown calls evidence; the defendant may call evidence and raise defences. If convicted, sentencing follows. Appeals go to the Superior Court of Justice (Ontario Court of Justice decisions) or Court of Appeal (Superior Court decisions on leave)."
      }
    },
    {
      "@type": "Question",
      "name": "What are the maximum penalties under the Ontario Provincial Offences Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "POA Part I (certificate of offence): set fines of $500-$1,000 depending on the offence. POA Part III (information): fines up to $100,000 for individuals and $500,000 for corporations in default provisions; specific statutes (OHSA, EPA, Securities Act) set higher maxima — OHSA allows up to $1.5M per conviction for corporations. Imprisonment is available under POA s.75 for certain offences but absolute liability cannot trigger imprisonment (Charter s.7)."
      }
    }
  ]
}`;

type OffenceCategory = {
  category: string;
  mensRea: string;
  crownBurden: string;
  defenceBurden: string;
  example: string;
};

const offenceCategories: OffenceCategory[] = [
  {
    category: "True criminal offences (Category 1)",
    mensRea: "Full subjective mens rea required",
    crownBurden: "Crown proves actus reus AND mens rea beyond reasonable doubt",
    defenceBurden: "No onus; Crown bears full burden",
    example: "Criminal Code fraud, theft, assault in regulatory context; rare in provincial law",
  },
  {
    category: "Strict liability (Category 2)",
    mensRea: "No mens rea required to convict; due diligence defence available",
    crownBurden: "Crown proves actus reus beyond reasonable doubt",
    defenceBurden: "Accused proves due diligence on balance of probabilities (objective standard)",
    example: "Most OHSA, EPA, and Highway Traffic Act violations; default category under Sault Ste Marie",
  },
  {
    category: "Absolute liability (Category 3)",
    mensRea: "No mens rea; no due diligence defence",
    crownBurden: "Crown proves actus reus beyond reasonable doubt",
    defenceBurden: "No defence available (other than Charter/constitutional challenges)",
    example: "Certain HTA speeding tickets; regulatory parking offences; cannot be combined with imprisonment (Charter s.7)",
  },
];

type POAPart = {
  part: string;
  process: string;
  penalties: string;
  examples: string;
};

const poaParts: POAPart[] = [
  {
    part: "Part I — Certificate of Offence",
    process: "Officer issues offence notice (ticket); defendant may pay out of court (deemed guilty), request early resolution meeting, or request a trial. No appearance required unless defendant requests trial.",
    penalties: "Set fines (fixed penalty on face of ticket); victim fine surcharge 20%; demerit points for HTA offences",
    examples: "Highway Traffic Act speeding, stunt driving, seat belt; minor municipal bylaw offences; minor LLBO violations",
  },
  {
    part: "Part II — Parking Infraction",
    process: "Parking infraction notice; owner liable (not driver); early payment option; dispute in writing; administrative officer reviews",
    penalties: "Fixed fines; vehicle plate denial if unpaid",
    examples: "Municipal parking regulations; accessible parking violations",
  },
  {
    part: "Part III — Information",
    process: "Provincial offences officer swears information before justice; justice issues summons or warrant; trial in Ontario Court of Justice; Crown calls witnesses; due diligence defence available; sentencing on conviction",
    penalties: "Fines up to $100,000 (POA default); specific statutes set higher maxima (OHSA, EPA); imprisonment for certain offences",
    examples: "OHSA s.66 (failure to ensure workplace safety); EPA contraventions; Environmental Protection Act charges; securities violations (OSA s.122); serious HTA offences (stunt driving, criminal speed)",
  },
  {
    part: "Part X — Young Persons",
    process: "Special provisions for persons under 16 at time of offence; parent notification; special dispositions available",
    penalties: "Modified penalties for young persons; no imprisonment in most cases",
    examples: "Young person HTA violations; minor provincial offences by minors",
  },
];

type RegulatorySector = {
  sector: string;
  statute: string;
  offences: string;
  maxPenalty: string;
};

const regulatoryRegimes: RegulatorySector[] = [
  {
    sector: "Workplace safety",
    statute: "Occupational Health and Safety Act (OHSA)",
    offences: "Failure to ensure workplace safety; failure to comply with inspector orders; failure to report critical injuries; supervisor/director/officer liability under s.32",
    maxPenalty: "Individual: $100,000 + 12 months; Corporation: $1,500,000 per conviction (OHSA s.66)",
  },
  {
    sector: "Environment",
    statute: "Environmental Protection Act (EPA); Ontario Water Resources Act",
    offences: "Discharge of contaminants; failure to report spills; permit violations; excess emissions; contaminated site failures",
    maxPenalty: "Up to $6,000,000 per day first conviction; $10,000,000 per day subsequent (EPA s.187)",
  },
  {
    sector: "Road safety",
    statute: "Highway Traffic Act (HTA)",
    offences: "Stunt driving (s.172); criminal speed (50+ over); commercial vehicle infractions; hours of service; impaired (Code/HTA combined); licence plate offences",
    maxPenalty: "Stunt driving: $10,000 fine + 2 years licence suspension; repeat offences escalate; Criminal Code overlap for serious driving offences",
  },
  {
    sector: "Securities",
    statute: "Securities Act (OSA); Capital Markets Act (CMA)",
    offences: "Trading without registration; failure to file; insider trading; market manipulation; misleading statements; failure to comply with OSC orders",
    maxPenalty: "OSA s.122: $5,000,000 per count + 5 years imprisonment; Capital Markets Tribunal administrative penalties up to $15,000,000",
  },
  {
    sector: "Liquor licensing",
    statute: "Liquor Licence and Control Act (LLCA)",
    offences: "Sale to minors; sale to intoxicated persons; after-hours service; selling without licence; permitting intoxication on premises",
    maxPenalty: "Individual: $100,000; Corporation: $250,000; licence suspension or revocation by AGCO",
  },
  {
    sector: "Consumer protection",
    statute: "Consumer Protection Act 2002 (CPA); Real Estate and Business Brokers Act (REBBA)",
    offences: "Unfair practices; false representations; failure to provide disclosure; cooling-off period violations; REBBA registration violations",
    maxPenalty: "CPA: individual $50,000; corporation $250,000; REBBA: individual $50,000; corporation $100,000",
  },
];

export default function OntarioRegulatoryOffencesPage() {
  return (
    <>
      <Script id="ontario-regulatory-offences-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-regulatory-offences-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Regulatory Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Regulatory Offences Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Strict Liability, Due Diligence, and Provincial Offences Act Procedure
            </p>
            <p className="text-slate-400 text-sm">December 2024 &middot; 13 min read</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              Ontario regulatory and quasi-criminal law governs a vast range of conduct — from workplace
              safety and environmental protection to securities, highway traffic, and liquor licensing.
              The framework established by <strong>R v Sault Ste Marie</strong> (1978 SCC) creates three
              categories of offences with distinct burdens of proof. Procedure is governed by the
              <strong> Provincial Offences Act (POA)</strong>. This guide covers the Sault Ste Marie
              categories, the due diligence defence, POA Parts I/III/X, and the major Ontario regulatory
              regimes and their penalties.
            </p>
          </div>
        </section>

        {/* Sault Ste Marie Categories */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              R v Sault Ste Marie: Three Categories of Offences
            </h2>
            <p className="text-slate-600 mb-8">
              The Supreme Court of Canada in R v Sault Ste Marie (1978) established the foundational
              framework for Ontario regulatory offences, creating three categories with different mens rea
              requirements and burdens of proof. Strict liability (Category 2) is the default for
              provincial regulatory offences unless the statute clearly indicates otherwise.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Category</th>
                    <th className="text-left px-5 py-4 font-semibold">Mens Rea</th>
                    <th className="text-left px-5 py-4 font-semibold">Crown Burden</th>
                    <th className="text-left px-5 py-4 font-semibold">Defence Available</th>
                    <th className="text-left px-5 py-4 font-semibold">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {offenceCategories.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.category}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.mensRea}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.crownBurden}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.defenceBurden}</td>
                      <td className="px-5 py-4 text-slate-500 text-sm">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Due Diligence */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              The Due Diligence Defence
            </h2>
            <div className="bg-white rounded-xl p-8 border border-slate-200 space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                In <strong>Category 2 (strict liability)</strong> offences, the accused may avoid
                conviction by establishing, on a balance of probabilities, that they exercised all
                reasonable care to prevent the offence. The standard is <strong>objective</strong> —
                what a reasonable person in the accused&apos;s position would have done.
              </p>
              <h3 className="text-base font-semibold text-slate-900 mt-4">Elements of a Due Diligence Defence</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Compliance system:</strong> Existence of a documented compliance program, policies, training, and monitoring appropriate to the regulatory context</li>
                <li><strong>Supervision and enforcement:</strong> Active monitoring of the system; discipline for non-compliance; regular audits</li>
                <li><strong>Reasonable response:</strong> When a potential breach was identified, reasonable steps taken promptly to correct it</li>
                <li><strong>Industry standards:</strong> Procedures met or exceeded regulatory and industry standards for the sector</li>
                <li><strong>Director/officer diligence (OHSA context):</strong> Individual supervisors and officers must establish personal due diligence, not just corporate compliance</li>
              </ul>
              <p className="mt-4">
                <strong>Mistake of fact</strong> (honest and reasonable belief in facts that, if true, would make the conduct innocent) is also available in Category 2 offences: the accused need only raise a reasonable doubt, not prove the mistake on a balance of probabilities.
              </p>
            </div>
          </div>
        </section>

        {/* POA Parts */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Provincial Offences Act Procedure: Parts I, II, III, and X
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario regulatory offences are prosecuted under the Provincial Offences Act. The applicable
              Part determines whether the offence is prosecuted by certificate (ticket) or information,
              the procedural rights of the defendant, and the available penalties.
            </p>
            <div className="space-y-6">
              {poaParts.map((part, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{part.part}</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-slate-700 mb-1">Process</p>
                      <p className="text-slate-600">{part.process}</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-700 mb-1">Penalties</p>
                      <p className="text-slate-600">{part.penalties}</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-700 mb-1">Examples</p>
                      <p className="text-slate-600">{part.examples}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Regimes */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Major Ontario Regulatory Regimes and Penalties
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario has numerous regulatory statutes creating offences prosecuted under the POA or
              separately. These are the most commonly encountered sectors in Ontario regulatory defence work.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Sector</th>
                    <th className="text-left px-5 py-4 font-semibold">Statute</th>
                    <th className="text-left px-5 py-4 font-semibold">Common Offences</th>
                    <th className="text-left px-5 py-4 font-semibold">Maximum Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  {regulatoryRegimes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.sector}</td>
                      <td className="px-5 py-4 text-slate-500 text-xs font-mono">{row.statute}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.offences}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm font-medium">{row.maxPenalty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions: Ontario Regulatory Offences
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the difference between strict liability and absolute liability in Ontario regulatory law?",
                  a: "R v Sault Ste Marie (1978 SCC) established three categories: (1) true criminal offences requiring full mens rea (Crown must prove guilty mind); (2) strict liability offences — Crown proves actus reus; accused may avoid liability by establishing due diligence on a balance of probabilities; (3) absolute liability offences — Crown proves actus reus only; no defence of due diligence or mistake of fact. Absolute liability combined with possible imprisonment violates Charter s.7.",
                },
                {
                  q: "How does the due diligence defence work in Ontario regulatory offences?",
                  a: "In strict liability offences, the accused bears the burden of proving on a balance of probabilities that they took all reasonable precautions to avoid the offence. This includes: establishing a system for compliance; monitoring and enforcement of that system; reasonable response upon learning of a potential breach; and industry-standard precautions. The standard is objective — what a reasonable person in the accused's position would have done.",
                },
                {
                  q: "What is the procedure under the Ontario Provincial Offences Act Part III?",
                  a: "Part III of the Provincial Offences Act covers more serious regulatory offences. A provincial offences officer lays an information before a justice; the justice issues a summons. The defendant appears in Ontario Court of Justice (Provincial Offences Court). The Crown calls evidence; the defendant may call evidence and raise defences. If convicted, sentencing follows. Appeals go to the Superior Court of Justice (Ontario Court of Justice decisions) or Court of Appeal (Superior Court decisions on leave).",
                },
                {
                  q: "What are the maximum penalties under the Ontario Provincial Offences Act?",
                  a: "POA Part I (certificate of offence): set fines of $500-$1,000 depending on the offence. POA Part III (information): fines up to $100,000 for individuals and $500,000 for corporations in default provisions; specific statutes (OHSA, EPA, Securities Act) set higher maxima — OHSA allows up to $1.5M per conviction for corporations. Imprisonment is available under POA s.75 for certain offences but absolute liability cannot trigger imprisonment (Charter s.7).",
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
              Manage Regulatory Defence Files with Atticus
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus tracks POA hearing dates, filing deadlines, appeal timelines, and client
              communications for Ontario regulatory defence lawyers. AI document analysis extracts
              key facts from inspection reports, orders, and offence notices automatically.
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
                { href: "/blog/ontario-criminal-appeals", label: "Ontario Criminal Appeals" },
                { href: "/blog/ontario-lso-complaints", label: "LSO Professional Discipline" },
                { href: "/blog/ontario-environmental-law", label: "Ontario Environmental Law" },
                { href: "/blog/ontario-competition-law", label: "Ontario Competition Law" },
                { href: "/ontario-criminal-defence-lawyer", label: "Atticus for Criminal Defence" },
                { href: "/ontario-limitation-period", label: "Ontario Limitation Periods" },
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
