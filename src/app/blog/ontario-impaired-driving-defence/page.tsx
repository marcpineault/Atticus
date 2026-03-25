import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Impaired Driving Defence: Criminal Code Offences, ASD Demands, and Charter Remedies",
  description:
    "Complete guide to impaired driving defence in Ontario. Criminal Code ss. 320.14–320.28 offences, approved screening device demands, breathalyzer evidence challenges, Charter s. 8/9/10(b) arguments, and sentencing consequences.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-impaired-driving-defence" },
  openGraph: {
    title: "Ontario Impaired Driving Defence: Criminal Code Offences and Charter Arguments",
    description:
      "Impaired driving defence in Ontario. Criminal Code ss. 320.14–320.28 offences, ASD demands, breathalyzer challenges, Charter remedies, and sentencing for DUI in Ontario.",
    url: "https://getatticus.ca/blog/ontario-impaired-driving-defence",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Impaired Driving Defence: Criminal Code Offences, ASD Demands, and Charter Remedies",
  "description": "Complete guide to Ontario impaired driving defence: Criminal Code ss. 320.14-320.28 offences, approved screening device demands, certificate evidence, Charter s. 8/9/10(b) arguments, and sentencing.",
  "datePublished": "2025-03-01",
  "dateModified": "2025-03-01",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-impaired-driving-defence" }
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the criminal charges for impaired driving in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario impaired driving charges under the Criminal Code include: s. 320.14(1)(a) impaired operation (by alcohol or drug); s. 320.14(1)(b) operation with blood alcohol concentration 80mg/100mL or over (over 80); s. 320.14(1)(c) operation with blood drug concentration equal to or exceeding prescribed limits; s. 320.16 failure to comply with a demand; and s. 320.15 refusal to provide a breath sample."
      }
    },
    {
      "@type": "Question",
      "name": "Can I refuse an ASD (approved screening device) demand in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Under Criminal Code s. 320.27, a peace officer who suspects alcohol in a driver's body may demand a breath sample into an approved screening device. Refusal is a criminal offence under s. 320.15 carrying the same penalties as impaired driving. A failed or warn result on the ASD does not automatically result in a criminal charge — it typically triggers a demand for an Intoxilyzer breath test or blood sample."
      }
    },
    {
      "@type": "Question",
      "name": "What is the mandatory minimum sentence for impaired driving in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a first offence, the mandatory minimum is a $1,000 fine and a 1-year driving prohibition. For a second offence, the mandatory minimum is 30 days imprisonment and a 2-year driving prohibition. For a third or subsequent offence, the mandatory minimum is 120 days imprisonment and a 3-year driving prohibition. All offences carry a mandatory minimum driving prohibition."
      }
    }
  ]
}`;

export default function OntarioImpairedDrivingDefencePage() {
  return (
    <>
      <Script id="schema-article" type="application/ld+json" strategy="beforeInteractive">
        {articleSchema}
      </Script>
      <Script id="schema-faq" type="application/ld+json" strategy="beforeInteractive">
        {faqSchema}
      </Script>
      <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 780, margin: "0 auto", padding: "40px 24px", color: "#111" }}>
        <nav style={{ marginBottom: 32, fontSize: 14, color: "#666" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Atticus</Link>
          {" › "}
          <Link href="/blog" style={{ color: "#2563eb", textDecoration: "none" }}>Blog</Link>
          {" › "}
          <span>Ontario Impaired Driving Defence</span>
        </nav>

        <div style={{ marginBottom: 8 }}>
          <span style={{ background: "#eff6ff", color: "#2563eb", padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>
            Criminal Defence
          </span>
        </div>

        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 16, marginTop: 12 }}>
          Ontario Impaired Driving Defence: Criminal Code Offences, ASD Demands, and Charter Remedies
        </h1>

        <p style={{ fontSize: 18, color: "#555", marginBottom: 8, lineHeight: 1.5 }}>
          15 min read &nbsp;·&nbsp; March 2025
        </p>

        <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, marginBottom: 40 }}>
          Impaired driving is the most frequently prosecuted criminal offence in Ontario courts. The 2018 amendments
          to the <em>Criminal Code</em> (Bill C-46) substantially changed the legal framework — expanding police
          powers with mandatory alcohol screening, adding drug-impaired driving offences, and narrowing the range
          of defences available. This guide covers the offences, the evidence, the Charter arguments, and the
          sentencing consequences.
        </p>

        <nav style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>Contents</p>
          <ol style={{ paddingLeft: 20, lineHeight: 2.2, margin: 0, fontSize: 14, color: "#2563eb" }}>
            <li><a href="#offences" style={{ color: "#2563eb" }}>The Criminal Code Offences</a></li>
            <li><a href="#asd" style={{ color: "#2563eb" }}>Approved Screening Device (ASD) Demands</a></li>
            <li><a href="#intoxilyzer" style={{ color: "#2563eb" }}>Intoxilyzer Evidence</a></li>
            <li><a href="#drug-impaired" style={{ color: "#2563eb" }}>Drug-Impaired Driving</a></li>
            <li><a href="#defences" style={{ color: "#2563eb" }}>Defences to Impaired Driving</a></li>
            <li><a href="#charter" style={{ color: "#2563eb" }}>Charter Arguments</a></li>
            <li><a href="#sentencing" style={{ color: "#2563eb" }}>Sentencing and Consequences</a></li>
            <li><a href="#highway-traffic" style={{ color: "#2563eb" }}>Highway Traffic Act Consequences</a></li>
            <li><a href="#procedure" style={{ color: "#2563eb" }}>Court Procedure</a></li>
          </ol>
        </nav>

        <section id="offences" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>1. The Criminal Code Offences</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Impaired driving offences are found in <em>Criminal Code</em> Part VIII.1, ss. 320.11–320.4, as amended
            by Bill C-46 in force December 2018. The primary offences:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Section</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Offence</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Key Element</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["s. 320.14(1)(a)", "Impaired operation", "Operation of a conveyance while ability to operate is impaired by alcohol or drug — no BAC threshold required"],
                  ["s. 320.14(1)(b)", "Over 80", "Operation with BAC 80mg/100mL or over — concentration-based offence, no impairment proof needed"],
                  ["s. 320.14(1)(c)/(d)", "Drug-impaired — blood drug concentration (BDC)", "Operation with blood drug concentration equal to or exceeding prescribed limits (cannabis, cocaine, methamphetamine, GHB, etc.)"],
                  ["s. 320.14(2)", "Aggravated impaired operation (BAC 120+)", "BAC equal to or exceeding 120mg/100mL — aggravated form with higher mandatory minimums"],
                  ["s. 320.14(3)", "Aggravated impaired operation (BAC 160+)", "BAC equal to or exceeding 160mg/100mL — highest mandatory minimums"],
                  ["s. 320.15", "Refusal to comply with demand", "Refusal to provide breath/blood sample — same penalties as over 80"],
                  ["s. 320.16", "Failure to stop after accident", "Failure to stop at scene + reasonable belief impairment would be detected"],
                  ["s. 320.18", "Operation while prohibited", "Operating while disqualified from driving"],
                ].map(([section, offence, element], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top", whiteSpace: "nowrap" }}>{section}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{offence}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{element}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: "#fef9c3", border: "1px solid #fde68a", borderRadius: 8, padding: 16, marginTop: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>Conveyance</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              The offence applies to any &quot;conveyance&quot; — defined in s. 320.11 to include motor vehicles,
              vessels, aircraft, and railway equipment. Operation of a boat while impaired is a Criminal Code
              offence, not just a provincial regulatory matter.
            </p>
          </div>
        </section>

        <section id="asd" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>2. Approved Screening Device (ASD) Demands</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Section 320.27 of the <em>Criminal Code</em>, as amended by Bill C-46, introduced <strong>mandatory
            alcohol screening</strong> — the most significant change to impaired driving law in decades.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Mandatory ASD Demand (s. 320.27(1))</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            A peace officer who lawfully stops a driver may demand a breath sample into an ASD <strong>without
            any suspicion of alcohol consumption</strong>. Pre-Bill C-46, reasonable suspicion was required.
            The constitutional validity of mandatory screening was upheld by the Supreme Court in
            <em> R v Sullivan; R v Brown</em> 2022 SCC 19.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Suspicion-Based ASD Demand (s. 320.27(2))</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            A peace officer who has reasonable grounds to suspect alcohol in the driver&apos;s body may also
            demand an ASD. This has broader application — it applies even when the officer did not stop the
            vehicle during a lawful check.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>ASD Results</h3>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li><strong>Pass:</strong> BAC below 50mg/100mL — no further action required</li>
            <li><strong>Warn:</strong> BAC between 50–99mg/100mL — administrative suspension under Highway Traffic Act (90-day IRS), no criminal charge from ASD alone</li>
            <li><strong>Fail:</strong> BAC 100mg/100mL or over (ASD not precise — triggers Intoxilyzer demand)</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            A Fail on the ASD provides reasonable grounds for a further demand for a breath sample on an
            approved instrument (Intoxilyzer). The ASD result itself is not evidence of the BAC at the time
            of driving — it only triggers the next step.
          </p>
        </section>

        <section id="intoxilyzer" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>3. Intoxilyzer Evidence</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            The evidentiary centerpiece of most impaired driving prosecutions is the certificate of a qualified
            technician showing the results of an approved instrument breath test (s. 320.31). The Code creates
            a presumption that:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>The concentration of alcohol in the accused&apos;s blood at the time of driving was not less than the reading on the approved instrument, and</li>
            <li>Where two samples are taken at least 15 minutes apart and they are within 20mg/100mL of each other, both presumptions apply</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12, marginBottom: 12 }}>
            <strong>Pre-Bill C-46:</strong> The accused could rebut the presumption by raising evidence of a
            malfunction or improper operation — the &quot;Carter defence&quot; (named after <em>R v Carter</em>).
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            <strong>Post-Bill C-46:</strong> The Carter defence was eliminated. Under s. 320.31(1), the only
            way to challenge instrument readings is to establish that there was an &quot;approved instrument
            malfunction&quot; or that the instrument was &quot;operated improperly&quot; — and even then, the
            accused must call evidence that if the instrument had been operating properly or had been operated
            properly, the result would have been below 80. The Supreme Court upheld the constitutionality of
            these changes in <em>R v Sullivan</em>.
          </p>
        </section>

        <section id="drug-impaired" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>4. Drug-Impaired Driving</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Bill C-46 introduced blood drug concentration (BDC) offences alongside the existing alcohol offences.
            The prescribed blood drug concentration limits (O. Reg. SOR/2018-181):
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Drug</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Limit (lower)</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Limit (upper / aggravated)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["THC (cannabis)", "2–5 ng/mL blood — summary conviction (lower limit)", "5 ng/mL or more — indictable or hybrid"],
                  ["Cocaine", "5 μg/L blood — lower limit offence", "50 μg/L — upper limit"],
                  ["Methamphetamine", "5 μg/L", "50 μg/L"],
                  ["MDMA (ecstasy)", "5 μg/L", "50 μg/L"],
                  ["GHB", "5 μg/L (above endogenous levels)", "50 μg/L"],
                  ["THC + alcohol combination", "THC 2.5 ng/mL + BAC 50mg/100mL", "Both thresholds simultaneously — indictable"],
                ].map(([drug, lower, upper], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{drug}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{lower}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#991b1b" }}>{upper}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            Drug-impaired driving investigations use Standard Field Sobriety Tests (SFST) and Drug Recognition
            Evaluations (DRE) conducted by specially trained officers. Blood samples are required for BDC
            analysis — the Intoxilyzer cannot detect drugs.
          </p>
        </section>

        <section id="defences" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>5. Defences to Impaired Driving</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Post-Bill C-46, the Carter defence and evidence-to-the-contrary defence are eliminated. Available
            defences include:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Defence</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Basis</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Approved instrument malfunction", "s. 320.31: Establish the instrument was malfunctioning AND the proper reading would have been below 80 — both elements required"],
                  ["Improper operation of instrument", "Establish the technician did not follow the approved method AND proper operation would have resulted in a sub-80 reading"],
                  ["Bolus drinking (last drink defence)", "Evidence that accused consumed alcohol shortly before driving and BAC was under 80 at time of driving (not at time of testing 30+ min later) — very narrow post-Bill C-46"],
                  ["Identity", "Proof of identity of driver — relevant in some cases"],
                  ["Charter remedies", "Evidence excluded under s. 24(2) if obtained in violation of ss. 8, 9, or 10(b) — see below"],
                  ["No reasonable grounds for demand", "ASD demand under s. 320.27(2) required reasonable suspicion — if no suspicion existed, demand was unlawful → Charter s. 9 arbitrary detention"],
                  ["Accident reconstruction", "For impaired operation charge (not over 80): challenge that the manner of driving was caused by factors other than impairment"],
                ].map(([defence, basis], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{defence}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="charter" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>6. Charter Arguments</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Charter arguments remain the most potent tool in impaired driving defence. Common arguments:
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Section 10(b) — Right to Counsel</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Upon arrest or detention, police must inform the accused of their right to retain and instruct counsel
            without delay and provide a reasonable opportunity to exercise that right. Common issues:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16, marginBottom: 16 }}>
            <li>Delay between demand and opportunity to call counsel</li>
            <li>Police failed to hold off on breath testing until accused had reasonable opportunity to speak with lawyer</li>
            <li>Police failed to facilitate counsel when accused invoked the right</li>
            <li>Duty counsel access was inadequate or denied</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Section 8 — Unreasonable Search</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            A breath demand is a search under s. 8. If the demand was made without lawful authority (no
            reasonable grounds for an approved instrument demand), the breath samples were taken in violation
            of s. 8.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Section 9 — Arbitrary Detention</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            A traffic stop is a detention. If the stop was pretextual (no highway traffic basis), the
            detention was arbitrary. Evidence obtained during an arbitrary detention may be excluded.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Section 24(2) — Exclusion of Evidence</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            Charter-derived evidence (breath certificates, observations) is excluded under s. 24(2) if its
            admission would bring the administration of justice into disrepute. The three-part Grant test
            (<em>R v Grant</em> 2009 SCC 32) applies: seriousness of the Charter-infringing conduct; impact
            of the breach on the Charter-protected interests of the accused; society&apos;s interest in
            adjudication on the merits.
          </p>
        </section>

        <section id="sentencing" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>7. Sentencing and Consequences</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Impaired driving offences are hybrid (Crown election). Mandatory minimums apply regardless of
            election:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Offence</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>1st Offence</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>2nd Offence</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>3rd+ Offence</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Over 80 / Impaired / Refusal (standard)", "$1,000 fine + 1-yr prohibition", "30 days jail + 2-yr prohibition", "120 days jail + 3-yr prohibition"],
                  ["BAC 120–159mg/100mL (aggravated)", "$1,500 fine + 1-yr prohibition", "60 days jail + 2-yr prohibition", "240 days jail + 3-yr prohibition"],
                  ["BAC 160+mg/100mL (aggravated)", "$2,000 fine + 1-yr prohibition", "120 days jail + 2-yr prohibition", "1 year jail + 3-yr prohibition"],
                  ["Impaired causing bodily harm", "Max 14 years (indictment)", "Same", "Same"],
                  ["Impaired causing death", "Max life imprisonment", "Same", "Same"],
                ].map(([offence, first, second, third], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600, verticalAlign: "top" }}>{offence}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#444" }}>{first}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#991b1b" }}>{second}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", verticalAlign: "top", color: "#991b1b" }}>{third}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="highway-traffic" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>8. Highway Traffic Act Consequences</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Separate from the criminal process, Ontario&apos;s <em>Highway Traffic Act</em> imposes administrative
            penalties:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li><strong>Warn range suspension (50–80mg/100mL):</strong> 3-day suspension (1st), 7-day (2nd in 5 years), 30-day + ignition interlock (3rd in 5 years)</li>
            <li><strong>Immediate roadside suspension:</strong> 90-day IRS on ASD fail (criminal charge proceeding) under HTA s. 48.3</li>
            <li><strong>Criminal conviction:</strong> Automatic Ontario licence suspension for the same period as the Criminal Code driving prohibition</li>
            <li><strong>Reinstatement:</strong> Upon expiry of suspension, ignition interlock program participation typically required under Back on Track program</li>
            <li><strong>Insurance consequences:</strong> Criminal conviction results in SR22 filing requirement equivalent, significantly increased premiums for 3–10 years</li>
          </ul>
        </section>

        <section id="procedure" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>9. Court Procedure</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Ontario impaired driving matters proceed in the Ontario Court of Justice unless the Crown elects
            indictment or the accused elects Superior Court for indictable offences (causing bodily harm/death):
          </p>
          <ol style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li><strong>First appearance:</strong> Counsel can appear with a designation form — client need not attend</li>
            <li><strong>Crown disclosure:</strong> Must be provided — includes officer&apos;s notes, certificates, breathalyzer maintenance records, in-car camera video</li>
            <li><strong>Charter application:</strong> Defence files a blended application under s. 8, 9, and 10(b) and requests a voir dire</li>
            <li><strong>Voir dire:</strong> Evidence called on Charter issues — if evidence excluded, charge may be withdrawn or acquittal entered</li>
            <li><strong>Trial:</strong> Certificate admitted as evidence, officer testifies to observation of impairment and demand procedure</li>
          </ol>
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: 16, marginTop: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>Diversion Program</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              Some Ontario courts offer diversion for first-time impaired driving charges — typically involving
              counselling, a fine, and a period of prohibition in exchange for a stay or withdrawal. Eligibility
              varies by jurisdiction and Crown practice. Not available in all cases and Crown discretion is broad.
            </p>
          </div>
        </section>

        <section style={{ background: "#eff6ff", borderRadius: 12, padding: 28, marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Manage Criminal Defence Files with Atticus</h2>
          <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Atticus helps Ontario criminal defence lawyers track court dates, disclosure deadlines, and Charter
            application timelines across all active files — with AI-powered morning briefings and document
            processing.
          </p>
          <Link
            href="/sign-up"
            style={{
              display: "inline-block",
              background: "#2563eb",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            Start Free Trial
          </Link>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
          {[
            {
              q: "What are the criminal charges for impaired driving in Ontario?",
              a: "Ontario impaired driving charges include: s. 320.14(1)(a) impaired operation; s. 320.14(1)(b) over 80 (BAC 80mg/100mL+); s. 320.14(1)(c)/(d) blood drug concentration offences; s. 320.15 refusal to provide a sample; and aggravated forms for BAC 120+ and 160+. Bill C-46 (2018) significantly expanded the regime.",
            },
            {
              q: "Can I refuse an ASD demand in Ontario?",
              a: "No. Refusal to provide an ASD breath sample is a Criminal Code offence under s. 320.15, carrying the same mandatory penalties as impaired driving. The Supreme Court upheld mandatory screening (no suspicion required) in R v Sullivan; R v Brown 2022 SCC 19.",
            },
            {
              q: "What is the mandatory minimum sentence for impaired driving in Ontario?",
              a: "First offence: $1,000 fine + 1-year driving prohibition. Second offence: 30 days imprisonment + 2-year prohibition. Third+ offence: 120 days imprisonment + 3-year prohibition. Aggravated forms (BAC 120+) carry higher mandatory minimums.",
            },
            {
              q: "Is there a Carter defence after Bill C-46?",
              a: "No. Bill C-46 eliminated the Carter defence (raising evidence that the instrument was malfunctioning or improperly operated to create reasonable doubt). Post-2018, an accused must establish an actual malfunction or improper operation AND prove the proper reading would have been below 80.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i < 3 ? "1px solid #e2e8f0" : "none" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{faq.q}</h3>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Related Articles</h2>
          <ul style={{ paddingLeft: 0, listStyle: "none", lineHeight: 2 }}>
            {[
              { href: "/blog/ontario-criminal-procedure", label: "Ontario Criminal Procedure Guide" },
              { href: "/blog/ontario-charter-remedies", label: "Ontario Charter Remedies — s. 24(2) Exclusion" },
              { href: "/blog/ontario-bail-hearing", label: "Ontario Bail Hearings" },
              { href: "/ontario-criminal-defence-lawyer", label: "Ontario Criminal Defence Lawyers" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: "#2563eb", textDecoration: "none", fontSize: 15 }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
