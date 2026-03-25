import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Criminal Defence Process: From Arrest to Trial (2026 Guide)",
  description:
    "How criminal defence works in Ontario — arrest, bail hearings, disclosure, plea options, preliminary inquiries, trial, and sentencing. What criminal defence lawyers do at each stage and the Charter rights that protect accused persons.",
  openGraph: {
    title: "Ontario Criminal Defence Process: From Arrest to Trial (2026 Guide)",
    description:
      "Ontario criminal defence: bail hearings, Crown disclosure, s. 11(b) delay arguments, plea negotiations, jury trials, and Charter remedies. A complete guide for criminal defence lawyers.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-criminal-defence-process",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-criminal-defence-process" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Criminal Defence Process: From Arrest to Trial (2026 Guide)",
  description:
    "How criminal defence works in Ontario — arrest, bail hearings, disclosure, plea options, trial, and sentencing. What criminal defence lawyers do at each stage.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: "https://getatticus.ca/blog/ontario-criminal-defence-process",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens at a bail hearing in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At a bail hearing (show cause hearing), the Crown must show cause why detention is justified — or the accused must show cause for release in reverse onus situations (serious charges). The judge considers primary grounds (likelihood of appearing in court), secondary grounds (public protection), and tertiary grounds (maintaining public confidence). The accused can be released on consent, after a contested hearing, or detained in custody.",
      },
    },
    {
      "@type": "Question",
      name: "What is Crown disclosure in Ontario criminal cases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crown disclosure is the Crown's obligation under R. v. Stinchcombe [1991] to disclose all relevant material to the defence — including evidence that may help the accused. This includes police reports, witness statements, video evidence, expert reports, and notes. The right to full disclosure is constitutionally protected under s. 7 of the Charter.",
      },
    },
    {
      "@type": "Question",
      name: "What is a s. 11(b) Charter application in criminal proceedings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 11(b) of the Charter guarantees the right to be tried within a reasonable time. Under R. v. Jordan [2016], presumptive ceilings apply: 18 months from charge to end of trial for cases in provincial court, and 30 months for cases in superior court. Delays attributable to the defence are excluded. Exceeding the ceiling creates a presumption of unreasonable delay and typically results in a stay of proceedings.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most common Charter rights raised in Ontario criminal defence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most frequently raised Charter rights in criminal defence are: s. 8 (unreasonable search and seizure), s. 9 (arbitrary detention), s. 10(b) (right to retain and instruct counsel), s. 11(b) (trial within a reasonable time), s. 24(2) (exclusion of evidence). A successful Charter application can result in evidence being excluded or charges stayed.",
      },
    },
  ],
};

const processSteps = [
  {
    stage: "1. Arrest and detention",
    detail: "Police must have reasonable grounds to arrest. Upon arrest, the accused has the right to be informed of the reason (s. 10(a)) and the right to retain and instruct counsel (s. 10(b)). Lawyers advise clients: say nothing to police until you have spoken to a lawyer.",
  },
  {
    stage: "2. First appearance",
    detail: "The accused appears in court, usually within 24 hours of arrest. For minor matters, the accused may be released on a recognizance without a formal bail hearing. For more serious matters, a bail hearing is scheduled.",
  },
  {
    stage: "3. Bail hearing (show cause)",
    detail: "The Crown shows cause why the accused should be detained, or the accused shows cause why release is appropriate. Bail conditions (reporting to police, no contact orders, surety) are common. Criminal lawyers prepare carefully for bail hearings — detention can last months.",
  },
  {
    stage: "4. Disclosure review",
    detail: "After the first appearance, defence counsel requests full disclosure from the Crown. Reviewing disclosure is one of the most important steps — identifying weaknesses in the Crown's case, Charter violations, witness credibility issues.",
  },
  {
    stage: "5. Election and plea",
    detail: "For hybrid and indictable offences, the accused may elect trial by judge alone or judge and jury. The accused can enter a guilty plea (often after plea negotiations) or elect to go to trial. Most cases resolve by guilty plea.",
  },
  {
    stage: "6. Pre-trial applications (Charter motions)",
    detail: "Defence lawyers bring applications to exclude evidence (s. 8 search and seizure violations), challenge the adequacy of disclosure, or argue unreasonable delay (s. 11(b)). A successful s. 8 application can result in key evidence being excluded.",
  },
  {
    stage: "7. Preliminary inquiry (indictable offences)",
    detail: "For serious indictable offences, the accused may request a preliminary inquiry to test whether the Crown has sufficient evidence to proceed to trial. Substantially reformed by Bill C-75 — no longer available for most offences.",
  },
  {
    stage: "8. Trial",
    detail: "Provincial Court (Ontario Court of Justice) handles summary offences and most hybrid offences. Superior Court handles the most serious indictable offences. The Crown must prove guilt beyond a reasonable doubt.",
  },
  {
    stage: "9. Sentencing",
    detail: "If convicted, sentencing follows. Defence presents mitigating factors — no criminal record, remorse, rehabilitation. Crown presents aggravating factors. Pre-sentence reports, victim impact statements, and Gladue reports (for Indigenous accused) inform the sentence.",
  },
];

const charterRights = [
  { section: "s. 7", right: "Life, liberty, and security of the person", application: "Basis for disclosure rights (Stinchcombe); delay arguments" },
  { section: "s. 8", right: "Right against unreasonable search and seizure", application: "Challenging police searches of homes, vehicles, phones, and persons" },
  { section: "s. 9", right: "Right against arbitrary detention", application: "Challenging traffic stops, carding, investigative detentions" },
  { section: "s. 10(a)", right: "Right to be told reason for arrest", application: "Challenging failure to inform accused of reason for arrest" },
  { section: "s. 10(b)", right: "Right to retain and instruct counsel", application: "Excluding statements made before lawyer contact; challenging failure to provide access to lawyer" },
  { section: "s. 11(b)", right: "Right to be tried within a reasonable time", application: "Jordan applications — delay exceeding 18 months (provincial) or 30 months (superior)" },
  { section: "s. 24(2)", right: "Exclusion of evidence remedy", application: "Excluding evidence obtained through Charter violations where admission would bring administration of justice into disrepute" },
];

export default function OntarioCriminalDefenceProcessPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-criminal-defence" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-criminal-defence-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      <section style={{ padding: "60px 24px 40px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Criminal Defence</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>March 2026 · 12 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
          Ontario Criminal Defence Process: From Arrest to Trial (2026 Guide)
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Criminal defence in Ontario involves navigating the Criminal Code, the Charter of Rights and Freedoms, and a complex court system. From bail hearings to disclosure review to Charter applications, skilled criminal defence lawyers intervene at every stage. Here is a complete breakdown of the process from arrest to sentencing.
        </p>
      </section>

      <article style={{ padding: "0 24px 80px", maxWidth: "800px", margin: "0 auto" }}>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>The 9-Stage Criminal Defence Process</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {processSteps.map((item, i) => (
              <div key={i} style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#C6922A", marginBottom: "8px" }}>{item.stage}</div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Key Charter Rights in Criminal Defence</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Section</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Right</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Common Applications</th>
                </tr>
              </thead>
              <tbody>
                {charterRights.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 16px", color: "#C6922A", fontWeight: 600 }}>{row.section}</td>
                    <td style={{ padding: "12px 16px", color: "#faf8f4" }}>{row.right}</td>
                    <td style={{ padding: "12px 16px", color: "rgba(240,232,216,0.6)" }}>{row.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Offence Categories in Ontario</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {[
              {
                category: "Summary conviction offences",
                examples: "Simple assault, mischief under $5,000, minor drug offences",
                court: "Ontario Court of Justice",
                limitation: "2-year limitation period to lay charges",
              },
              {
                category: "Indictable offences",
                examples: "Murder, sexual assault, robbery, fraud over $5,000",
                court: "Ontario or Superior Court of Justice",
                limitation: "No limitation period",
              },
              {
                category: "Hybrid offences",
                examples: "Impaired driving, theft, assault causing bodily harm",
                court: "Crown elects summary or indictable",
                limitation: "Depends on Crown election",
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{item.category}</div>
                <div style={{ fontSize: "13px", color: "rgba(240,232,216,0.7)", marginBottom: "8px", lineHeight: 1.5 }}><strong style={{ color: "rgba(240,232,216,0.8)" }}>Examples:</strong> {item.examples}</div>
                <div style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", marginBottom: "6px" }}><strong style={{ color: "rgba(240,232,216,0.7)" }}>Court:</strong> {item.court}</div>
                <div style={{ fontSize: "13px", color: "rgba(240,232,216,0.55)" }}>{item.limitation}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Impaired Driving in Ontario</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            Impaired driving (DUI/DWI) is one of the most common criminal matters for Ontario criminal defence lawyers. Key elements:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Over 80 (.08 BAC or more) and impaired operation are hybrid offences — mandatory minimums apply",
              "Mandatory licence suspension at roadside if BAC .08 or over or fail drug testing",
              "First offence mandatory minimum fine of $1,000",
              "Interlock condition typically required for licence reinstatement",
              "Common defence challenges: Charter s. 8/10 (breath demand procedures), identity, approved instrument reliability",
              "Bill C-46 (2018) gave police power to demand breath sample without reasonable grounds at roadside — s. 8 Charter challenges to this power are ongoing",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6 }}>{item}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqJsonLd.mainEntity.map((item, i) => (
              <div key={i} style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{item.name}</div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "12px", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>
            Managing Criminal Defence Files?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus helps Ontario criminal defence lawyers track court dates, s. 11(b) Jordan delay timelines, disclosure deadlines, and matter notes. AI document processing works with police reports and Crown disclosure packages. 14-day free trial.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 28px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Try Atticus Free for 14 Days →
          </Link>
        </section>

        <section>
          <h3 style={{ fontSize: "16px", color: "rgba(240,232,216,0.5)", marginBottom: "16px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { href: "/ontario-criminal-defence-lawyer", label: "Atticus for Criminal Defence" },
              { href: "/blog/missing-limitation-periods-ontario", label: "Missing Limitation Periods" },
              { href: "/calculator", label: "Limitation Period Calculator" },
              { href: "/blog/ontario-human-rights-complaint", label: "Human Rights Complaint" },
              { href: "/blog/client-intake-ontario-lawyers", label: "Client Intake Best Practices" },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ fontSize: "13px", color: "#C6922A", background: "rgba(198,146,42,0.08)", padding: "6px 14px", borderRadius: "20px", textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>

      <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <Link href="/" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Atticus — Practice Management for Ontario Lawyers</Link>
      </footer>
    </div>
  );
}
