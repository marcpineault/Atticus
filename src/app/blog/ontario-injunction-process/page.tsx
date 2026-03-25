import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Injunctions: Interlocutory Injunctions, Anton Piller Orders, and Mareva Orders (2026)",
  description:
    "How Ontario injunction proceedings work — the RJR-MacDonald three-part test for interlocutory injunctions, Anton Piller search orders, Mareva asset-freezing orders, mandatory injunctions, and urgent relief procedures for civil litigators.",
  openGraph: {
    title: "Ontario Injunctions: Interlocutory Injunctions, Anton Piller Orders, and Mareva Orders (2026)",
    description:
      "RJR-MacDonald test, Anton Piller search orders, Mareva asset-freezing orders, mandatory injunctions, and urgent relief in Ontario courts.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-injunction-process",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-injunction-process" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Injunctions: Interlocutory Injunctions, Anton Piller Orders, and Mareva Orders (2026)",
  description:
    "RJR-MacDonald test, Anton Piller search orders, Mareva asset-freezing orders, and urgent injunction procedures for Ontario civil litigators.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-18",
  url: "https://getatticus.ca/blog/ontario-injunction-process",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the test for an interlocutory injunction in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The RJR-MacDonald Inc v Canada (AG), [1994] 1 SCR 311 three-part test applies: (1) Is there a serious question to be tried — not a frivolous or vexatious claim? (2) Will the applicant suffer irreparable harm that cannot be compensated by damages if the injunction is refused? (3) Does the balance of convenience favour granting or refusing the injunction? The higher the strength of the underlying case, the less strictly courts apply the irreparable harm requirement.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Anton Piller order in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Anton Piller order (now called a civil search order) is an ex parte court order authorizing the applicant and their lawyer to enter the respondent's premises to inspect, photograph, and seize relevant documents and materials without advance notice. Granted in extreme cases — typically IP theft, fraud, or destruction of evidence — where notice would lead to the evidence being destroyed. Ontario courts require detailed safeguards: an independent supervising lawyer, detailed inventory, and limits on what can be removed.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Mareva injunction and when is it available in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mareva injunction (asset-freezing order) prevents a defendant from dissipating or hiding assets pending judgment. Available in Ontario under s. 101 of the Courts of Justice Act. The applicant must show: (a) a good arguable case, (b) the defendant has assets in Ontario, (c) a real risk the defendant will dissipate assets before judgment, and (d) the balance of convenience favours the order. The applicant must give an undertaking as to damages.",
      },
    },
    {
      "@type": "Question",
      name: "What is the undertaking as to damages in an Ontario injunction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When an interlocutory injunction is granted, the applicant must typically give an undertaking to the court to pay any damages suffered by the respondent if the injunction is ultimately found to have been wrongly granted. This is a serious undertaking — if the applicant loses the underlying action, the court will assess damages on the respondent's losses during the injunction period. Some government and regulatory applicants are exempt from giving this undertaking.",
      },
    },
  ],
};

const injunctionTypes = [
  {
    type: "Interlocutory (Interim) Injunction",
    purpose: "Maintain status quo pending trial",
    test: "RJR-MacDonald: serious question, irreparable harm, balance of convenience",
    when: "Most common form — employment, commercial, family, property disputes",
    undertaking: "Yes — applicant must give damages undertaking",
  },
  {
    type: "Mandatory Injunction",
    purpose: "Compel the respondent to take positive action",
    test: "Higher threshold: strong prima facie case + balance of convenience strongly in applicant's favour",
    when: "Restoring access, completing a transaction, removing encroachment",
    undertaking: "Yes",
  },
  {
    type: "Anton Piller (Civil Search) Order",
    purpose: "Authorize entry and seizure of evidence without notice",
    test: "Very strong case + real possibility evidence will be destroyed + damage to applicant very serious",
    when: "IP theft, fraud, destruction of evidence imminent",
    undertaking: "Yes + independent supervising lawyer required",
  },
  {
    type: "Mareva (Asset Freezing) Order",
    purpose: "Prevent dissipation of defendant's assets pending judgment",
    test: "Good arguable case + defendant has Ontario assets + real risk of dissipation",
    when: "Fraud, absconding defendants, dissipation risk",
    undertaking: "Yes — potentially very large",
  },
  {
    type: "Norwich Pharmacal Order",
    purpose: "Compel third party to disclose identifying information",
    test: "Applicant has plausible claim + respondent holds information + disclosure necessary and proportionate",
    when: "Anonymous online defamers, tracing wrongdoers, IP infringement",
    undertaking: "Usually — costs of compliance",
  },
];

const rjrSteps = [
  {
    step: "Step 1: Serious Question to be Tried",
    description: "Is there a serious question to be tried that is neither frivolous nor vexatious? The threshold is intentionally low — the court is not conducting a mini-trial at the injunction stage. This step is usually met if there is a plausible legal theory and some evidence.",
    tip: "Do not over-argue the merits at step 1 — save your energy for steps 2 and 3. However, a very strong case on the merits can compensate for weakness at step 2 (irreparable harm).",
  },
  {
    step: "Step 2: Irreparable Harm",
    description: "Will the applicant suffer harm that cannot be adequately compensated by damages if the injunction is refused? Irreparable harm cannot be merely speculative — it must be established on the evidence. Monetary loss that can be quantified is rarely irreparable.",
    tip: "Categories that consistently constitute irreparable harm: disclosure of trade secrets (once out, cannot be recalled), loss of competitive advantage that is hard to quantify, reputational damage, insolvency of the defendant (making a damages award worthless), and harm to third parties.",
  },
  {
    step: "Step 3: Balance of Convenience",
    description: "Does the balance of convenience favour granting the injunction or refusing it? The court weighs the harm to the applicant if refused against the harm to the respondent if granted. Also considers: the public interest, the relative strength of the parties' cases (if this can be assessed), and whether the status quo should be preserved.",
    tip: "Always address the undertaking as to damages — the court will ask whether the applicant can actually pay if the injunction is later found to have been wrongly granted. A defendant without assets can neutralize the undertaking as a meaningful protection.",
  },
];

const practicalSteps = [
  { action: "Issue statement of claim (if not already issued)", timing: "Same day or concurrent with motion" },
  { action: "Draft notice of motion and supporting affidavit", timing: "Critical — affidavit must be detailed and exhibit all evidence" },
  { action: "Issue motion record", timing: "Same day; serve motion record with originating process" },
  { action: "Contact duty judge or urgent motion scheduling", timing: "Same day for ex parte; schedule for return date" },
  { action: "Prepare undertaking as to damages (if required)", timing: "Must be ready to give at hearing" },
  { action: "For ex parte: draft proposed draft order", timing: "Must be presented to judge at hearing" },
  { action: "For Anton Piller: arrange independent supervising lawyer", timing: "Before execution; supervising lawyer must be available" },
  { action: "Serve order and return date on respondent (if interim granted)", timing: "Immediately after order pronounced" },
];

export default function OntarioInjunctionProcessPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-injunction" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-injunction-faq" type="application/ld+json">{JSON.stringify(faqLd)}</Script>

      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            Start Free Trial →
          </Link>
        </div>
      </nav>

      <article style={{ padding: "56px 24px 80px", maxWidth: "800px", margin: "0 auto" }}>
        <header style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Civil Litigation — Ontario</p>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
            Ontario Injunctions: Interlocutory Injunctions, Anton Piller Orders, and Mareva Orders (2026)
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
            Injunctions are among the most powerful tools in Ontario civil litigation — and among the most technically demanding. Whether seeking an interlocutory injunction to preserve the status quo, an Anton Piller search order to seize evidence, or a Mareva order to freeze assets, each requires understanding a specific test and presenting compelling evidence under time pressure.
          </p>
          <div style={{ display: "flex", gap: "20px", color: "rgba(240,232,216,0.4)", fontSize: "13px" }}>
            <span>March 2026</span>
            <span>13 min read</span>
            <span>Ontario Courts of Justice Act</span>
          </div>
        </header>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Types of Injunctive Relief in Ontario
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  {["Type", "Purpose", "Test", "When Used", "Undertaking"].map((h, i) => (
                    <th key={i} style={{ textAlign: "left", padding: "12px 12px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {injunctionTypes.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 12px", color: "#C6922A", fontWeight: 500 }}>{row.type}</td>
                    <td style={{ padding: "12px 12px", color: "rgba(240,232,216,0.8)" }}>{row.purpose}</td>
                    <td style={{ padding: "12px 12px", color: "rgba(240,232,216,0.65)", fontSize: "12px" }}>{row.test}</td>
                    <td style={{ padding: "12px 12px", color: "rgba(240,232,216,0.65)", fontSize: "12px" }}>{row.when}</td>
                    <td style={{ padding: "12px 12px", color: "rgba(240,232,216,0.55)", fontSize: "12px" }}>{row.undertaking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            The RJR-MacDonald Test: Step by Step
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            <em>RJR-MacDonald Inc v Canada (AG)</em>, [1994] 1 SCR 311 remains the governing authority for interlocutory injunctions in Ontario. The Supreme Court&apos;s three-part sequential test requires the applicant to satisfy each stage. Here is how to approach each step in practice.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {rjrSteps.map((s, i) => (
              <div key={i} style={{ padding: "24px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#faf8f4", marginBottom: "10px" }}>{s.step}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.75, marginBottom: "12px" }}>{s.description}</p>
                <p style={{ fontSize: "13px", color: "#C6922A", lineHeight: 1.7 }}>
                  <strong style={{ fontWeight: 500 }}>Practitioner tip: </strong>{s.tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px", padding: "28px 32px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.25)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#e8b84b", marginBottom: "14px" }}>
            Anton Piller Orders: Execution Requirements in Ontario
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            Anton Piller orders (civil search orders) are granted in extreme cases where evidence of wrongdoing would be destroyed if notice were given. Ontario courts impose strict execution requirements:
          </p>
          {[
            "An independent supervising lawyer (not the applicant's solicitor) must be present at execution",
            "The order must be served and explained to the respondent before execution begins",
            "The respondent has the right to seek legal advice before permitting entry (usually 2 hours)",
            "A detailed inventory of everything inspected, copied, and removed must be prepared",
            "Copies only — originals typically cannot be removed unless the order specifically authorizes it",
            "Privilege must be respected — if the respondent claims privilege over documents, they are set aside for court determination",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
              <span style={{ color: "#C6922A", flexShrink: 0 }}>—</span>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</p>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Practical Steps: Getting an Injunction in Ontario
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Action</th>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Timing / Notes</th>
                </tr>
              </thead>
              <tbody>
                {practicalSteps.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 14px", color: "rgba(240,232,216,0.85)" }}>{row.action}</td>
                    <td style={{ padding: "12px 14px", color: "#C6922A", fontSize: "13px" }}>{row.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {faqLd.mainEntity.map((faq, i) => (
              <div key={i} style={{ padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{faq.name}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.75 }}>{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "40px 36px", background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "8px", marginBottom: "56px", textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>
            Track motion deadlines automatically
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus extracts motion return dates, service deadlines, and hearing dates from uploaded documents. Built for Ontario civil litigators who cannot miss a deadline.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Start Free Trial →
          </Link>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "14px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/blog/ontario-defamation-law", label: "Ontario Defamation Law" },
              { href: "/blog/small-claims-court-ontario", label: "Small Claims Court" },
              { href: "/blog/ontario-construction-lien", label: "Construction Liens" },
              { href: "/ontario-civil-litigation-lawyer", label: "Practice Mgmt for Litigators" },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ fontSize: "13px", color: "rgba(240,232,216,0.5)", background: "rgba(255,255,255,0.04)", padding: "6px 14px", borderRadius: "20px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>

      <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
