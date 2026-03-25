import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Sports Law Guide 2024 | Athlete Contracts, Agent Regulation, and Sports Arbitration",
  description:
    "Ontario sports law: athlete contracts and CBA rights, sports agent regulation (SARSA), doping and WADA/CCES, sports arbitration (CAS and SDRCC), liability for sporting injuries, and sports organization governance. For Ontario sports and entertainment lawyers.",
  openGraph: {
    title: "Ontario Sports Law Guide 2024 | Athlete Contracts, Agent Regulation, and Sports Arbitration",
    description:
      "Athlete contracts, CBA rights, SARSA agent regulation, doping (WADA/CCES), CAS arbitration, and sports injury liability under Ontario and Canadian sports law.",
    url: "https://getatticus.ca/blog/ontario-sports-law",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-sports-law" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Sports Law Guide 2024: Athlete Contracts, Agent Regulation, and Sports Arbitration",
  "description": "Comprehensive guide to Ontario sports law including athlete contracts, CBA rights, sports agent regulation under SARSA, doping and WADA/CCES, CAS and SDRCC arbitration, and liability for sporting injuries.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-sports-law",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-sports-law"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the SDRCC and how does sports arbitration work in Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Sport Dispute Resolution Centre of Canada (SDRCC) is Canada's national dispute resolution body for sport-related disputes. It offers mediation, arbitration, and appeal processes for disputes between athletes, coaches, officials, and national sport organizations (NSOs) and multi-sport organizations (MSOs). The SDRCC handles carding disputes (AthletesCAN), NSO eligibility and selection disputes, doping sanction appeals (from CCES), and governance disputes. SDRCC arbitration decisions are enforceable as court orders. The Canadian Anti-Doping Program (CADP) requires doping appeals be handled through the SDRCC."
      }
    },
    {
      "@type": "Question",
      "name": "Does Ontario regulate sports agents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario does not have a provincial sports agent registration law. Federally, Canada does not have a national sports agent regulation statute equivalent to US state UAAA/SPARTA laws. However, agents representing NHL players must be certified by the NHL Players' Association (NHLPA) under the NHL Collective Bargaining Agreement. MLB player agents must be certified by the MLBPA. CFL player agents must be certified under the CFL CBA. Ontario agents representing amateur athletes in national team selection matters may be governed by NSO agent rules. Some provinces (Quebec) have sports agent regulation; Ontario does not as of 2024."
      }
    },
    {
      "@type": "Question",
      "name": "What is the liability standard for sporting injuries in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Ontario, participants in sports generally consent to the inherent risks of the activity (volenti non fit injuria) but do not consent to negligence or intentional harm. The occupier's liability standard under the Ontario Occupiers' Liability Act applies to injuries at sports facilities. Sports organizations may be liable for negligence in failing to enforce safety rules, allowing dangerous play, or inadequate supervision. The Ontario Court of Appeal in Unruh v Webber established that participants consent to the incidental contact of the game but not to reckless disregard for their safety. Waivers are enforceable in Ontario if clearly drafted but courts scrutinize broad exclusion clauses."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Canadian Anti-Doping Program (CADP) and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Canadian Anti-Doping Program (CADP) is Canada's national anti-doping program, administered by the Canadian Centre for Ethics in Sport (CCES). The CADP incorporates WADA's prohibited list and applies to Canadian athletes in NSO-governed sports. An anti-doping rule violation (ADRV) triggers a results management process: the CCES notifies the athlete; a provisional suspension may be imposed; the athlete has the right to a hearing before a SDRCC arbitrator; the arbitrator can impose sanctions up to 4 years for intentional violations. Appeals from SDRCC decisions in international competition disputes go to the Court of Arbitration for Sport (CAS) in Lausanne."
      }
    }
  ]
}`;

const athleteContractTerms = [
  {
    term: "Compensation Structure",
    description: "Base salary, signing bonus, performance bonuses (goals, appearances, awards), roster bonuses, and salary arbitration rights; in CBA-governed leagues, individual contracts must comply with CBA minimums, maximums, and timing rules",
  },
  {
    term: "Term and Option Years",
    description: "Contract length; team options (team can exercise to extend); player options (player can exercise); mutual options; vesting provisions; guaranteed vs non-guaranteed years (salary and guaranteed money at termination)",
  },
  {
    term: "No-Trade / No-Movement Clause",
    description: "Full no-trade clause (NTC): team cannot trade without consent; partial NTC: player submits list of teams they cannot be traded to; no-movement clause (NMC): cannot be traded, waived, or assigned to minor leagues",
  },
  {
    term: "Termination / Cut Provisions",
    description: "Right to terminate for cause (conduct detrimental to team); injury guarantees; contract protection on injury; failed physical provisions; waiver eligibility and priority order",
  },
  {
    term: "Licensing and Intellectual Property",
    description: "Group licensing (NHLPA, MLBPA group licenses for video games, trading cards, merchandise); individual endorsement rights; name, image, and likeness (NIL) rights; social media obligations and restrictions",
  },
  {
    term: "Morals and Conduct Clauses",
    description: "Commissioner discipline; team discipline rights; off-ice conduct obligations; substance abuse program compliance; anti-doping obligations; social media and reputational conduct",
  },
];

const dopingProcess = [
  { stage: "1. Testing", description: "Athlete subject to in-competition and out-of-competition testing by CCES; DCOs (Doping Control Officers) collect urine and/or blood samples" },
  { stage: "2. Analysis", description: "Samples analyzed at WADA-accredited laboratory; A-sample analyzed first; adverse analytical finding (AAF) triggers notification" },
  { stage: "3. Notification", description: "CCES notifies athlete of AAF or other anti-doping rule violation (ADRV); provisional suspension may be imposed immediately for certain offences (including cocaine, EPO, blood doping)" },
  { stage: "4. B-Sample Request", description: "Athlete has right to request analysis of B-sample; if B-sample confirms AAF, ADRV is established prima facie; athlete may attend B-sample opening" },
  { stage: "5. SDRCC Hearing", description: "Dispute referred to SDRCC arbitrator; athlete has right to hearing, legal representation, and to present evidence and argument; burden shifts to athlete to prove departure from testing procedures or no fault" },
  { stage: "6. Sanction", description: "4 years: intentional violation; 2 years: non-intentional violation (standard); period of ineligibility; may be reduced for no significant fault or substantial assistance; forfeiture of results during period" },
  { stage: "7. Appeal", description: "Appeals from SDRCC decisions in international matters: to Court of Arbitration for Sport (CAS) in Lausanne; domestic matters may go to Federal Court on jurisdictional grounds" },
];

export default function OntarioSportsLawPage() {
  return (
    <>
      <Script id="ontario-sports-law-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-sports-law-faq" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Sports Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Sports Law Guide 2024
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              Athlete contracts and CBA rights, sports agent regulation, doping
              and WADA/CCES, SDRCC and CAS arbitration, sports injury liability,
              and sports organization governance for Ontario sports and
              entertainment lawyers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>13 min read</span>
              <span>•</span>
              <span>Sports Law</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Canadian and Ontario Sports Law Framework
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Sports law in Canada is not governed by a single statute.
              It draws from contract law, labour law, tort law, administrative
              law, and international arbitration. Canada&apos;s federal{" "}
              <em>Physical Activity and Sport Act</em> (PASA) establishes the
              policy framework for sport and created the SDRCC. Provincial
              amateur sport governance falls under provincial legislation and
              the rules of national sport organizations (NSOs) recognized by
              the Government of Canada through Sport Canada.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Professional sports in Ontario (NHL: Toronto Maple Leafs, Ottawa
              Senators; NBA: Toronto Raptors; MLB: Toronto Blue Jays; MLS:
              Toronto FC; CFL: Hamilton Tiger-Cats; OHL teams) are governed by
              collective bargaining agreements negotiated between player
              associations and league offices. Sports lawyers in Toronto advise
              athletes, teams, agents, broadcasters, and sports organizations.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
              <strong>Practice note:</strong> Most professional team sport
              contract matters involving Ontario teams are governed by the law
              of the applicable CBA — typically incorporating New York (NHL, NBA,
              MLB) or US law. Individual athlete matters (eligibility, doping,
              selection) are governed by Canadian law and SDRCC/CAS arbitration.
            </div>
          </section>

          {/* Athlete Contracts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Athlete Contract Key Terms
            </h2>
            <div className="space-y-5">
              {athleteContractTerms.map((term, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{term.term}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{term.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sports Agent Regulation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Sports Agent Regulation in Canada
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ontario and Canada lack a general sports agent registration statute.
              Agent regulation is primarily league and player association-driven:
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { league: "NHL Agents (NHLPA)", rules: "Must be certified by NHLPA under Standard Player Agent Agreement; certification requires passing exam, background check, and fee payment; decertification for misconduct; non-certified agents cannot negotiate SPCs" },
                { league: "NBA Agents (NBPA)", rules: "NBPA agent certification required; Player Agent Regulations govern conduct, fees (maximum 4%), conflict of interest; agents must not have criminal convictions for crimes of moral turpitude" },
                { league: "MLB Agents (MLBPA)", rules: "MLBPA agent certification; no maximum fee in regulations but market-driven; must represent only players (not teams); conflicts of interest prohibited" },
                { league: "CFL Agents (CFLPA)", rules: "Canadian Football League Players Association certification required; fee regulations; prohibited practices including improper inducements to players" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">{item.league}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.rules}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4">
              <strong>Ontario lawyers as sports agents:</strong> Ontario lawyers
              acting as sports agents must comply with LSO Rules of Professional
              Conduct on conflicts of interest — particularly where the lawyer
              represents both the athlete and negotiates with a team the lawyer
              also advises. The LSO has addressed the dual roles of sports agent
              and lawyer and requires careful conflict analysis.
            </p>
          </section>

          {/* Doping */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Anti-Doping in Canada: CCES and WADA (7-Stage Process)
            </h2>
            <div className="space-y-4">
              {dopingProcess.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">{step.stage}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sports Injury */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Sports Injury Liability in Ontario
            </h2>
            <div className="grid md:grid-cols-2 gap-5 mb-4">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">Participant-to-Participant Liability</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ontario courts follow the <em>Unruh v Webber</em> principle:
                  participants consent to the physical risks and contact inherent
                  in the activity (volenti non fit injuria) but not to negligent or
                  intentional conduct. Reckless disregard for another
                  participant&apos;s safety will not be covered by implied consent.
                  Contact sports: standard is reckless disregard (not mere
                  negligence). Non-contact sports: ordinary negligence standard
                  applies.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">Occupier and Facility Liability</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The <em>Ontario Occupiers&apos; Liability Act</em> imposes a duty of
                  care on occupiers of sporting facilities to ensure visitors are
                  reasonably safe while on the premises. Sporting venues, arenas,
                  and stadiums must maintain premises, address known hazards, and
                  warn of non-obvious risks. Waivers signed at facilities are
                  enforceable in Ontario if they clearly and unambiguously exclude
                  the specific type of liability — but courts scrutinize waivers for
                  unconscionability and failure of notice.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                Concussion Liability and Duty of Care
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Concussion litigation is an emerging area in Canadian sports law.
                Class actions have been commenced against the CFL (settled in 2021
                for up to $765M) and the NHL (pending). Ontario courts have
                recognized that sports organizations owe a duty of care to athletes
                with respect to known and foreseeable risks, including the long-term
                effects of repeated head trauma. Return-to-play protocols, concussion
                recognition, and removal from play policies are central to duty of
                care analysis. Youth sport organizations and schools face similar
                liability for concussion management failures.
              </p>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the SDRCC and how does sports arbitration work in Canada?",
                  a: "The Sport Dispute Resolution Centre of Canada (SDRCC) is Canada's national dispute resolution body for sport-related disputes. It offers mediation, arbitration, and appeal processes for disputes between athletes, coaches, officials, and national sport organizations (NSOs). The SDRCC handles carding disputes, NSO eligibility and selection disputes, doping sanction appeals from CCES, and governance disputes. SDRCC arbitration decisions are enforceable as court orders. The Canadian Anti-Doping Program (CADP) requires doping appeals be handled through the SDRCC.",
                },
                {
                  q: "Does Ontario regulate sports agents?",
                  a: "Ontario does not have a provincial sports agent registration law, and Canada lacks a national sports agent regulation statute. Agent regulation is primarily league and player association-driven: NHL agents must be certified by the NHLPA, NBA agents by the NBPA, MLB agents by the MLBPA, and CFL agents under the CFLPA. Ontario lawyers acting as sports agents must comply with LSO Rules of Professional Conduct on conflicts of interest.",
                },
                {
                  q: "What is the liability standard for sporting injuries in Ontario?",
                  a: "In Ontario, participants in sports generally consent to the inherent risks of the activity but do not consent to negligence or intentional harm. Contact sports: the standard is reckless disregard for safety (not mere negligence). Non-contact sports: ordinary negligence applies. The Ontario Occupiers' Liability Act governs facility liability. Waivers are enforceable if clearly drafted but courts scrutinize broad exclusion clauses for unconscionability.",
                },
                {
                  q: "What is the Canadian Anti-Doping Program (CADP)?",
                  a: "The Canadian Anti-Doping Program (CADP) is administered by the Canadian Centre for Ethics in Sport (CCES). It applies to Canadian athletes in NSO-governed sports and incorporates WADA's prohibited list. An anti-doping rule violation triggers a results management process: CCES notifies the athlete; a provisional suspension may be imposed; the athlete has a right to an SDRCC hearing. Standard sanction: 2 years (non-intentional); 4 years (intentional). Appeals in international competition matters go to the Court of Arbitration for Sport (CAS) in Lausanne.",
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
              Manage Your Sports Law Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Track deadlines, manage trust accounting, and organize athlete and
              sports organization files with Atticus — built for Ontario solo
              and small law firms.
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
                { href: "/blog/ontario-employment-contract", label: "Ontario Employment Contracts" },
                { href: "/blog/ontario-intellectual-property", label: "Ontario Intellectual Property Law" },
                { href: "/blog/ontario-administrative-law", label: "Ontario Administrative Law" },
                { href: "/blog/ontario-negligence-law", label: "Ontario Negligence Law" },
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
