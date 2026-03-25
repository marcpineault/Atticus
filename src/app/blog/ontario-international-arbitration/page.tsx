import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario International Commercial Arbitration Guide 2024 | ICAA, ICC, LCIA, and New York Convention",
  description:
    "Ontario international commercial arbitration: International Commercial Arbitration Act (ICAA), UNCITRAL Model Law, institutional arbitration (ICC/LCIA/ICDR/SIAC), seat of arbitration, enforcement of foreign awards under the New York Convention, and arbitration clauses for Ontario commercial lawyers.",
  openGraph: {
    title: "Ontario International Commercial Arbitration Guide 2024 | ICAA, ICC, LCIA, and New York Convention",
    description:
      "ICAA, UNCITRAL Model Law, ICC/LCIA/ICDR institutional arbitration, seat of arbitration, and New York Convention enforcement for Ontario commercial lawyers.",
    url: "https://getatticus.ca/blog/ontario-international-arbitration",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-international-arbitration" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario International Commercial Arbitration Guide 2024: ICAA, ICC, LCIA, and New York Convention",
  "description": "Comprehensive guide to Ontario international commercial arbitration including the International Commercial Arbitration Act, UNCITRAL Model Law, institutional arbitration, and enforcement of foreign awards.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-international-arbitration",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-international-arbitration"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What legislation governs international commercial arbitration in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "International commercial arbitration in Ontario is governed by the International Commercial Arbitration Act, 2017 (Ontario), which incorporates the UNCITRAL Model Law on International Commercial Arbitration (2006 version with amendments) as Schedule 2. Domestic (non-international) commercial arbitration is governed by the Arbitration Act, 1991 (Ontario). The distinction between international and domestic arbitration turns primarily on whether the parties have their place of business in different states at the time of the arbitration agreement."
      }
    },
    {
      "@type": "Question",
      "name": "How is a foreign arbitral award enforced in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Foreign arbitral awards from New York Convention countries are enforced in Ontario under the International Commercial Arbitration Act, 2017, which gives effect to the New York Convention. To enforce: the award creditor files a court application in the Ontario Superior Court of Justice with the original award and arbitration agreement (or certified copies). The court grants recognition and enforcement unless the respondent proves a ground to refuse (limited grounds: no valid agreement, no notice, outside scope, improper composition, award not binding, matter not arbitrable under Ontario law, or enforcement contrary to Ontario public policy). Once recognized, the award is enforceable as an Ontario court judgment."
      }
    },
    {
      "@type": "Question",
      "name": "What should an arbitration clause in an Ontario commercial agreement include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A well-drafted international arbitration clause should specify: the arbitral institution (ICC, LCIA, ICDR, SIAC, or ad hoc under UNCITRAL Rules); the seat (legal place) of arbitration (Toronto, New York, London, Singapore); the language of arbitration; the number of arbitrators (sole arbitrator for lower-value disputes; three for high-value or complex matters); the governing law of the arbitration agreement (may differ from governing law of the contract); and any carve-outs from arbitration (e.g., injunctive relief, IP infringement). The seat determines which national courts have supervisory jurisdiction over the arbitration."
      }
    },
    {
      "@type": "Question",
      "name": "What are the grounds to challenge an arbitral award in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the International Commercial Arbitration Act, 2017 (Article 34 of the Model Law), an award can be set aside by the Ontario Superior Court only on limited grounds: (1) the arbitration agreement is invalid; (2) a party was not given proper notice or was otherwise unable to present its case; (3) the award deals with a dispute not within the scope of the submission; (4) the tribunal was not composed in accordance with the agreement or the Model Law; (5) the subject matter of the dispute is not arbitrable under Ontario law; or (6) the award conflicts with Ontario public policy. The 3-month limitation period from receipt of the award applies to set-aside applications."
      }
    }
  ]
}`;

const institutionsTable = [
  {
    institution: "ICC (International Chamber of Commerce)",
    seat_options: "Parties designate; ICC Court fixes seat if parties cannot agree",
    rules: "ICC Rules of Arbitration (2021); comprehensive procedural framework; terms of reference; scrutiny of awards",
    strengths: "Globally recognized; strong for complex multi-party and high-value commercial disputes; extensive arbitrator pool",
    costs: "ICC administrative fees plus arbitrator fees; higher administrative fees for very large claims",
  },
  {
    institution: "LCIA (London Court of International Arbitration)",
    seat_options: "Parties designate; LCIA default is London",
    rules: "LCIA Rules (2020); emergency arbitrator; consolidation provisions",
    strengths: "Strong for UK/Commonwealth matters; efficient for English law disputes; competitive fees",
    costs: "Hourly-rate based fees for arbitrators and LCIA; cost-effective for complex matters",
  },
  {
    institution: "ICDR (International Centre for Dispute Resolution — AAA)",
    seat_options: "Parties designate; default New York",
    rules: "ICDR International Arbitration Rules (2021); emergency measures; expedited procedures",
    strengths: "Strong North American presence; AAA/ICDR expertise in US disputes; widely used in US commercial contracts",
    costs: "Administrative fees plus arbitrator compensation; competitive for mid-size disputes",
  },
  {
    institution: "SIAC (Singapore International Arbitration Centre)",
    seat_options: "Parties designate; default Singapore",
    rules: "SIAC Rules (2025); emergency arbitrator; consolidation; early dismissal",
    strengths: "Preferred for Asia-Pacific disputes; modern rules; competitive costs; Singapore is Model Law jurisdiction",
    costs: "Ad valorem administrative fees; competitive fee schedule",
  },
  {
    institution: "ADRIC (ADR Institute of Canada) / BCICAC",
    seat_options: "Parties designate; default in Canada",
    rules: "ADRIC Rules; domestically focused; also ad hoc UNCITRAL Rules",
    strengths: "Canadian-specific; lower costs than ICC/LCIA for Canadian domestic-international disputes",
    costs: "Lower administrative fees; Canadian arbitrator fees",
  },
];

const modelLawArticles = [
  { article: "Art. 7", subject: "Definition and form of arbitration agreement", rule: "Agreement must be in writing (broadly defined to include electronic communications); Model Law accepts option 1 (broad written form) or option 2 (no writing requirement)" },
  { article: "Art. 8", subject: "Arbitration agreement and substantive claim before court", rule: "Court before which a claim is brought must refer parties to arbitration on application if arbitration agreement is not null, void, inoperative, or incapable of being performed" },
  { article: "Art. 11", subject: "Appointment of arbitrators", rule: "Parties free to agree on procedure; default: for 3-arbitrator panel, each party appoints one, two-party-appointed arbitrators appoint presiding arbitrator; court may appoint if mechanism fails" },
  { article: "Art. 16", subject: "Competence of arbitral tribunal (Kompetenz-Kompetenz)", rule: "Tribunal may rule on its own jurisdiction including objections to existence/validity of arbitration agreement; separability of arbitration clause from main contract" },
  { article: "Art. 17", subject: "Power of arbitral tribunal to order interim measures", rule: "Tribunal may order interim measures; emergency arbitrator provisions under Art. 17B-17G (2006 amendments)" },
  { article: "Art. 34", subject: "Application for setting aside award", rule: "Exclusive remedy to challenge award; limited grounds; 3-month limitation period from receipt of award; no appeal on merits" },
  { article: "Art. 35-36", subject: "Recognition and enforcement of award", rule: "Awards recognized and enforceable regardless of country of origin; grounds to refuse enforcement mirror New York Convention; must produce award and agreement" },
];

export default function OntarioInternationalArbitrationPage() {
  return (
    <>
      <Script id="ontario-international-arbitration-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-international-arbitration-faq" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              International Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario International Commercial Arbitration Guide 2024
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              International Commercial Arbitration Act (ICAA), UNCITRAL Model Law,
              institutional arbitration (ICC/LCIA/ICDR/SIAC), seat of arbitration,
              enforcement of foreign awards under the New York Convention, and
              drafting arbitration clauses.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>14 min read</span>
              <span>•</span>
              <span>International Law</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ontario&apos;s International Arbitration Framework
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ontario is a Model Law jurisdiction. The{" "}
              <em>International Commercial Arbitration Act, 2017</em> (ICAA)
              incorporates the UNCITRAL Model Law on International Commercial
              Arbitration (as revised in 2006) and the{" "}
              <em>Convention on the Recognition and Enforcement of Foreign
              Arbitral Awards</em> (New York Convention, 1958). Ontario courts
              have consistently demonstrated a strong pro-arbitration stance,
              refusing to intervene in arbitral proceedings and enforcing awards
              on a summary basis.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Toronto is increasingly used as a seat of arbitration for
              North American commercial disputes — benefitting from Toronto&apos;s
              neutrality between US and international parties, its sophisticated
              commercial courts (Commercial List of the Ontario Superior Court of
              Justice), and its position in a Model Law jurisdiction.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
              <strong>ICAA vs Arbitration Act, 1991:</strong> The ICAA applies
              when the dispute is international (parties have their places of
              business in different states). The Ontario{" "}
              <em>Arbitration Act, 1991</em> applies to domestic arbitration
              (parties both in Ontario/Canada). The distinction matters for
              grounds to appeal and set aside — the domestic act permits broader
              appeal rights on questions of law; the ICAA (Model Law) limits
              setting aside to the narrow Art. 34 grounds.
            </div>
          </section>

          {/* Model Law Key Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              UNCITRAL Model Law: Key Articles for Ontario Practitioners
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Article</th>
                    <th className="text-left px-4 py-3 font-semibold">Subject</th>
                    <th className="text-left px-4 py-3 font-semibold">Key Rule</th>
                  </tr>
                </thead>
                <tbody>
                  {modelLawArticles.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-mono text-amber-700 font-semibold">{row.article}</td>
                      <td className="px-4 py-3 text-slate-700 font-medium">{row.subject}</td>
                      <td className="px-4 py-3 text-slate-600">{row.rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Institutions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Major Arbitral Institutions Used in Ontario Disputes
            </h2>
            <div className="space-y-5">
              {institutionsTable.map((inst, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-3">{inst.institution}</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-semibold text-slate-700">Seat options: </span>
                      <span className="text-slate-600">{inst.seat_options}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Rules: </span>
                      <span className="text-slate-600">{inst.rules}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Strengths: </span>
                      <span className="text-slate-600">{inst.strengths}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Costs: </span>
                      <span className="text-slate-600">{inst.costs}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Enforcement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Enforcing Foreign Awards in Ontario: New York Convention
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Canada is a party to the New York Convention (1958). The ICAA
              implements the Convention in Ontario. To enforce a foreign award:
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-4">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">Procedure</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>File application in Ontario Superior Court of Justice (Commercial List if in Toronto)</li>
                  <li>Serve respondent with notice of application and supporting materials</li>
                  <li>Produce original award + original agreement (or certified copies); official translation if not in English or French</li>
                  <li>Court grants recognition and enforcement on summary basis unless respondent raises grounds to refuse</li>
                  <li>Once recognized, award is enforced as an Ontario court judgment</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">Grounds to Refuse (ICAA Art. 36 / NY Convention Art. V)</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>No valid arbitration agreement (invalid under applicable law)</li>
                  <li>No proper notice or party unable to present its case</li>
                  <li>Award deals with matter beyond the scope of the submission</li>
                  <li>Composition of tribunal not as agreed</li>
                  <li>Award not yet binding or has been set aside at the seat</li>
                  <li>Dispute not capable of settlement by arbitration under Ontario law</li>
                  <li>Recognition contrary to Ontario public policy</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-600 text-sm">
              <strong>Public policy:</strong> Ontario courts interpret the public
              policy exception narrowly. Only awards that are fundamentally
              offensive to the basic principles of justice — not merely incorrect
              or contrary to Ontario law — will be refused enforcement on public
              policy grounds. Ontario courts have enforced awards from many
              civil law jurisdictions (China, Russia, UAE) on this basis.
            </p>
          </section>

          {/* Drafting */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Drafting Effective International Arbitration Clauses
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A well-drafted arbitration clause is essential — ambiguous or
              pathological clauses generate satellite litigation on scope and
              procedure before the arbitration can proceed. Essential elements:
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-4 font-mono text-xs text-slate-700">
              <p className="font-sans text-sm font-semibold text-slate-900 mb-2">Sample ICC clause (Toronto seat):</p>
              <p className="leading-relaxed">
                &quot;Any dispute, controversy or claim arising out of or relating
                to this contract, or the breach, termination or invalidity
                thereof, shall be settled by arbitration in accordance with the
                ICC Rules of Arbitration. The seat of arbitration shall be
                Toronto, Ontario, Canada. The arbitral tribunal shall consist
                of [one/three] arbitrator[s]. The language of the arbitration
                shall be English. This arbitration agreement shall be governed
                by the laws of the Province of Ontario and the laws of Canada
                applicable therein.&quot;
              </p>
            </div>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Seat vs venue:</strong> The seat is the legal place of arbitration determining governing procedural law and supervisory courts; the venue is where hearings physically occur (may differ). Always specify the seat explicitly.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Number of arbitrators:</strong> Sole arbitrator for disputes under $2-5M; three arbitrators for complex or higher-value disputes. Specifying one vs three has significant cost implications.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Carve-outs:</strong> Consider carving out injunctive or emergency relief (allowing court applications without waiving arbitration), IP infringement claims, and certain regulatory matters from the arbitration clause.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Governing law of arbitration agreement:</strong> If the main contract is governed by one law (e.g., New York law), the arbitration agreement should specify a governing law that ensures its enforceability in the seat jurisdiction.</span>
              </li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What legislation governs international commercial arbitration in Ontario?",
                  a: "International commercial arbitration in Ontario is governed by the International Commercial Arbitration Act, 2017 (Ontario), which incorporates the UNCITRAL Model Law on International Commercial Arbitration (2006 version). Domestic (non-international) commercial arbitration is governed by the Arbitration Act, 1991 (Ontario). The distinction turns primarily on whether the parties have their place of business in different states at the time of the arbitration agreement.",
                },
                {
                  q: "How is a foreign arbitral award enforced in Ontario?",
                  a: "Foreign arbitral awards from New York Convention countries are enforced in Ontario under the International Commercial Arbitration Act, 2017. The award creditor files a court application in the Ontario Superior Court with the original award and arbitration agreement (or certified copies). The court grants recognition and enforcement unless the respondent proves a ground to refuse (limited grounds under Art. 36 / NY Convention Art. V). Once recognized, the award is enforceable as an Ontario court judgment.",
                },
                {
                  q: "What should an arbitration clause in an Ontario commercial agreement include?",
                  a: "A well-drafted international arbitration clause should specify: the arbitral institution (ICC, LCIA, ICDR, SIAC, or ad hoc); the seat (legal place) of arbitration; the language; the number of arbitrators; the governing law of the arbitration agreement; and any carve-outs from arbitration. The seat determines which national courts have supervisory jurisdiction over the arbitration.",
                },
                {
                  q: "What are the grounds to challenge an arbitral award in Ontario?",
                  a: "Under the ICAA (Article 34 of the Model Law), an award can be set aside only on limited grounds: invalid arbitration agreement; no proper notice; award outside scope of submission; improper tribunal composition; subject matter not arbitrable; or award conflicts with Ontario public policy. The 3-month limitation period from receipt of the award applies to set-aside applications.",
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
              Manage Your International Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Track arbitration deadlines, manage trust accounting, and organize
              international commercial files with Atticus — built for Ontario
              solo and small law firms.
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
                { href: "/blog/ontario-injunction-process", label: "Ontario Injunction Process" },
                { href: "/blog/ontario-administrative-law", label: "Ontario Administrative Law and Judicial Review" },
                { href: "/blog/ontario-shareholders-agreement", label: "Ontario Shareholders Agreements" },
                { href: "/blog/ontario-business-purchase-agreement", label: "Ontario Business Purchase Agreements" },
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
