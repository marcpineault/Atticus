import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Criminal Procedure — Disclosure, Charter Rights, Trial Process, and Sentencing",
  description:
    "A comprehensive guide to Ontario criminal procedure: the Criminal Code, Crown disclosure obligations under Stinchcombe, Charter rights at trial, the Jordan framework for trial delay, and sentencing principles under s.718 Criminal Code.",
  openGraph: {
    title: "Ontario Criminal Procedure — Disclosure, Charter Rights, Trial Process, and Sentencing",
    description:
      "Ontario criminal procedure: Stinchcombe disclosure, Jordan s.11(b) delay, Charter s.8-10 rights, voir dire, election, fitness to stand trial, and s.718 Criminal Code sentencing.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-criminal-procedure",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-criminal-procedure" },
};

export default function OntarioCriminalProcedurePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ontario Criminal Procedure — Disclosure, Charter Rights, Trial Process, and Sentencing",
    description:
      "Ontario criminal procedure: Criminal Code RSC 1985 c C-46, Stinchcombe [1991] disclosure, Jordan 2016 SCC 27 delay presumptive ceilings, Charter s.8-10 rights, Grant s.24(2), fitness, election, and s.718 sentencing principles.",
    url: "https://getatticus.ca/blog/ontario-criminal-procedure",
    publisher: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
    author: {
      "@type": "Organization",
      name: "Atticus Legal",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-slate-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              Criminal Law
            </span>
            <span className="text-slate-400 text-sm">14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ontario Criminal Procedure — Disclosure, Charter Rights, Trial Process, and Sentencing
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A comprehensive guide to Ontario criminal procedure: Crown disclosure obligations,
            the Jordan framework for trial delay, key Charter rights at investigation and trial,
            the election and preliminary inquiry regime, and s.718 Criminal Code sentencing principles.
          </p>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

          <h2>Criminal Code — Jurisdiction and Classification of Offences</h2>
          <p>
            Criminal law is federal jurisdiction under s.91(27) of the <em>Constitution Act 1867</em>.
            The <em>Criminal Code</em> RSC 1985 c C-46 (the Code) is the primary federal statute
            governing criminal offences and procedure. Ontario criminal courts apply the Code
            in provincial proceedings. Provincial offences (Highway Traffic Act, Liquor Licence Act,
            etc.) are quasi-criminal matters governed by the <em>Provincial Offences Act</em>
            RSO 1990 c P.33.
          </p>
          <p>
            Criminal offences are classified as:
          </p>
          <ul>
            <li><strong>Summary conviction offences</strong>: Less serious; tried in provincial court (Ontario Court of Justice); limitation period 12 months from commission of the offence (Code s.786(2)); maximum penalty 2 years less a day (increased from 6 months by Bill C-75 2019)</li>
            <li><strong>Indictable offences</strong>: More serious; no limitation period; may be tried in provincial court, Superior Court of Justice, or (for absolute jurisdiction offences) provincial court only</li>
            <li><strong>Hybrid offences (dual procedure)</strong>: Crown elects to proceed by summary conviction or indictment; most common — environmental offences, assault, impaired driving</li>
          </ul>

          <h2>Election and Mode of Trial</h2>
          <p>
            For non-absolute jurisdiction indictable offences, the accused has the right to elect
            the mode of trial (Code s.536):
          </p>
          <ul>
            <li>Provincial court judge (no jury, no preliminary inquiry)</li>
            <li>Judge alone — Superior Court of Justice (no jury, preliminary inquiry available)</li>
            <li>Judge and jury — Superior Court of Justice (jury trial, preliminary inquiry available)</li>
          </ul>
          <p>
            <strong>Absolute jurisdiction offences</strong> (Code s.553 — fraud under $5,000,
            theft under $5,000, mischief under $5,000, etc.) must be tried by a provincial court judge.
            <strong>Exclusive jurisdiction offences</strong> (Code s.469 — murder, treason, piracy)
            must be tried by a Superior Court judge and jury.
          </p>
          <p>
            <strong>Re-election</strong>: An accused who has elected may generally re-elect before
            trial with the consent of the Crown or after the preliminary inquiry.
          </p>

          <h2>Crown Disclosure — Stinchcombe Obligations</h2>
          <p>
            The Crown&apos;s constitutional obligation to disclose all relevant material to the
            defence is grounded in ss.7 and 11(d) of the <em>Canadian Charter of Rights and
            Freedoms</em>: <em>R v Stinchcombe</em> [1991] 3 SCR 326.
          </p>
          <p>
            Key Stinchcombe principles:
          </p>
          <ul>
            <li>The duty to disclose is triggered on request</li>
            <li>All material in the Crown&apos;s possession that is not clearly irrelevant must be disclosed</li>
            <li>The duty extends to material in the possession of police and other investigative agencies, not just material in the Crown&apos;s file</li>
            <li>The duty includes material helpful to the accused and material that is only arguably relevant</li>
            <li>The Crown may withhold material protected by privilege (informer privilege, public interest immunity) — but must seek judicial authorization to withhold</li>
            <li>Timing: disclosure should be made before the accused is required to elect the mode of trial</li>
          </ul>
          <p>
            <em>R v McNeil</em> 2009 SCC 3 extended Stinchcombe to require the Crown to produce
            &quot;third party records&quot; in police possession (officer misconduct records, etc.) as part
            of the first party disclosure obligation. Additional third party records (e.g., medical
            records, private records) require an application under ss.278.1-278.9 (the Mills regime
            for private records of complainants in sexual offence cases).
          </p>

          <h2>Trial Delay — the Jordan Framework</h2>
          <p>
            Section 11(b) of the Charter guarantees the right to be tried within a reasonable
            time. <em>R v Jordan</em> 2016 SCC 27 replaced the <em>Morin</em> (1992) balancing
            framework with <strong>presumptive ceilings</strong>:
          </p>
          <ul>
            <li><strong>18 months</strong>: Provincial court (summary or indictable) — from charge to anticipated end of trial</li>
            <li><strong>30 months</strong>: Superior Court (or provincial court after preliminary inquiry)</li>
          </ul>
          <p>
            Delay exceeding the ceiling is presumptively unreasonable. The Crown may rebut the
            presumption only by showing exceptional circumstances (e.g., discrete events reasonably
            unforeseen — pandemic, judiciary illness). The accused must also not have caused
            excessive delay. Delay attributable to the accused (adjournments requested by defence,
            waiver of rights) is deducted from the calculation.
          </p>
          <p>
            Below the ceiling, the defence must show that the delay was unreasonable based on
            the circumstances and that the accused took meaningful steps to expedite the proceedings.
          </p>
          <p>
            The remedy for a s.11(b) violation is a stay of proceedings under s.24(1) — Jordan
            confirmed stays should be the remedy for all ceiling violations absent exceptional circumstances.
          </p>

          <h2>Charter Rights — Investigation and Arrest</h2>
          <h3>Section 8 — Unreasonable Search and Seizure</h3>
          <p>
            A warrantless search is presumptively unreasonable: <em>R v Collins</em> [1987] 1 SCR 265.
            To obtain a search warrant under Code s.487, police must establish reasonable and
            probable grounds to believe a criminal offence has been committed and that evidence
            will be found at the place to be searched. The search must be authorized by law
            and conducted reasonably: <em>R v Kokesch</em> [1990] 3 SCR 3.
          </p>
          <p>
            Common s.8 issues: general warrant s.487.01; production orders s.487.012; telewarrant
            s.487.1; warrantless searches incident to arrest (limited to person and immediate
            surroundings: <em>R v Cloutier</em> [1990]); digital devices incident to arrest
            require a separate warrant (<em>R v Fearon</em> 2014 SCC 77 — minimal steps to
            preserve evidence allowed, full search requires warrant).
          </p>
          <h3>Section 9 — Arbitrary Detention</h3>
          <p>
            Section 9 protects against arbitrary detention. A detention is arbitrary if it
            is not authorized by law or if it is authorized but the law is arbitrary.
            Investigative detention is permitted where the officer has reasonable grounds to
            suspect (not believe) the person is connected to a criminal offence:
            <em>R v Mann</em> 2004 SCC 52. The detention must be brief — not an occasion for
            full investigation.
          </p>
          <h3>Section 10 — Rights on Arrest or Detention</h3>
          <p>
            On arrest or detention, the accused must be informed promptly (s.10(a)) of the
            reason for the detention and have the right to retain and instruct counsel without
            delay and to be informed of that right (s.10(b)). The right to counsel is not
            fulfilled by a mere opportunity to call — police must provide a reasonable
            opportunity and must stop questioning until counsel is contacted or the accused
            unequivocally waives the right:
            <em>R v Manninen</em> [1987] 1 SCR 1233.
          </p>
          <p>
            <em>R v Sinclair</em> 2010 SCC 35: the right to consult counsel once is generally
            satisfied — a secondary consultation is required only where there is a fundamental
            change in the jeopardy faced (e.g., new charges) or special circumstances.
          </p>

          <h2>Preliminary Inquiry</h2>
          <p>
            An accused who elects for Superior Court trial has the right to a preliminary inquiry
            (Code s.535). Bill C-75 (2019) restricted preliminary inquiries to offences punishable
            by 14 years or life imprisonment. At the preliminary inquiry, the Crown calls evidence
            to demonstrate a prima facie case — sufficient evidence that a properly instructed jury
            could reasonably convict. The accused may also call evidence.
          </p>
          <p>
            If a prima facie case is not established, the accused is discharged (s.548). If
            the case is established, the accused is committed to stand trial in Superior Court
            (s.548(1)(b)).
          </p>

          <h2>Fitness to Stand Trial</h2>
          <p>
            An accused is unfit to stand trial if they are unable by reason of mental disorder
            to conduct a defence at trial (Code s.2 definition). The fitness standard — whether
            the accused can understand the nature and object of the proceedings, understand the
            possible consequences of the proceedings, and communicate with counsel — is set out
            in <em>R v Taylor</em> (1992) ONCA. Fitness is a limited cognitive standard, not a
            high bar: <em>R v Whittle</em> [1994] 2 SCR 914.
          </p>
          <p>
            The issue of fitness may be raised by the Crown, defence, or court at any time.
            The burden of proof is on the party raising the issue on a balance of probabilities.
            If found unfit, the accused is subject to a Review Board process under Part XX.1
            of the Code.
          </p>

          <h2>Sentencing Principles — Criminal Code s.718</h2>
          <p>
            Section 718 of the Criminal Code sets out the fundamental purposes and principles of
            sentencing:
          </p>
          <p>
            <strong>Purpose (s.718)</strong>: The fundamental purpose of sentencing is the
            protection of society and the maintenance of a just, peaceful, and safe society
            through the imposition of just sanctions that have one or more of the following
            objectives: denunciation; deterrence (specific and general); separation of offenders
            from society; rehabilitation; reparation to victims; and promotion of a sense of
            responsibility in offenders.
          </p>
          <p>
            <strong>Proportionality (s.718.1)</strong>: A sentence must be proportionate to the
            gravity of the offence and the degree of responsibility of the offender. This is the
            fundamental principle of sentencing.
          </p>
          <p>
            <strong>Aggravating and mitigating factors (s.718.2)</strong>: Courts must consider
            relevant aggravating factors (abuse of position of trust, hate motivation, domestic
            violence, weapon, serious harm to vulnerable persons) and mitigating factors (no
            prior record, guilty plea, remorse, rehabilitation steps). Parity: similar offenders
            should receive similar sentences. Totality: where multiple offences are sentenced,
            the total sentence must not be unduly harsh. Restraint: least restrictive sanction
            appropriate should be imposed (s.718.2(d), (e)).
          </p>
          <p>
            <strong>Gladue principles</strong>: Sentencing judges must consider the unique
            circumstances of Indigenous offenders — systemic factors that may have contributed
            to their criminality, Indigenous concepts of justice, and alternatives to imprisonment:
            <em>R v Gladue</em> [1999] 1 SCR 688. Gladue reports are often ordered to assist
            sentencing judges. <em>R v Ipeelee</em> 2012 SCC 13 confirmed Gladue applies at
            all sentencing hearings.
          </p>

        </div>
      </article>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Practice Management Built for Ontario Lawyers
          </h2>
          <p className="text-slate-600 mb-8">
            LSO By-Law 9 trust accounting, AI document analysis, and Ontario deadline tracking.
            $149 CAD/month for your entire firm.
          </p>
          <a
            href="https://getatticus.ca/sign-up"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
