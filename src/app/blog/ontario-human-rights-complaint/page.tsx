import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to File a Human Rights Complaint in Ontario: HRTO Guide (2026)",
  description:
    "A complete guide to filing a human rights complaint with the Human Rights Tribunal of Ontario (HRTO) — protected grounds, limitation period, the application process, mediation, hearing, and remedies.",
  openGraph: {
    title: "How to File a Human Rights Complaint in Ontario: HRTO Guide (2026)",
    description:
      "Ontario HRTO complaint guide: protected grounds, one-year limitation period, T1 application, mediation, hearing, and available remedies including general damages.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-human-rights-complaint",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-human-rights-complaint" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to File a Human Rights Complaint in Ontario: HRTO Guide (2026)",
  description:
    "Ontario HRTO complaint: protected grounds, limitation period, T1 application, mediation, and remedies.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/ontario-human-rights-complaint",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long do I have to file a human rights complaint in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You have one year from the last incident of discrimination to file a human rights application with the Human Rights Tribunal of Ontario (HRTO). This is shorter than the general two-year Limitations Act period. The HRTO can extend the deadline in limited circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "What does the HRTO require to prove discrimination in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To prove discrimination, you must show: (1) you have a characteristic protected by the Ontario Human Rights Code; (2) you experienced an adverse impact (adverse treatment, adverse effect, or a failure to accommodate); and (3) the protected characteristic was a factor in the adverse impact.",
      },
    },
    {
      "@type": "Question",
      name: "How much can you get from a human rights complaint in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The HRTO can award general damages (compensation for injury to dignity, feelings, and self-respect), monetary compensation for lost wages or opportunities, and orders for the respondent to change policies. There is no statutory cap on general damages — awards typically range from $5,000 to $50,000+, with exceptional cases higher.",
      },
    },
    {
      "@type": "Question",
      name: "Can I sue in court and file an HRTO complaint at the same time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally no — Ontario courts will not hear a claim that has substantially the same facts as an HRTO application. The Code creates an exclusive jurisdiction regime. You must choose between the HRTO and a civil court claim for the same underlying incident.",
      },
    },
  ],
};

export default function HumanRightsComplaintPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-hrto" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-hrto-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            For Ontario Lawyers →
          </Link>
        </div>
      </nav>

      <header style={{ padding: "80px 48px 60px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Human Rights</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 9 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          How to File a Human Rights Complaint in Ontario:<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>HRTO Process Guide (2026)</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          The Human Rights Tribunal of Ontario (HRTO) handles discrimination complaints under the Ontario Human Rights Code. The process is more accessible than civil court — but the one-year limitation period is shorter and strictly enforced. Here is how the HRTO process works and what lawyers do to build effective human rights cases.
        </p>
      </header>

      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Protected grounds under the Ontario Human Rights Code</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            The Ontario Human Rights Code prohibits discrimination in five social areas (employment, housing, services, contracts, membership in associations) based on the following protected grounds:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
            {[
              "Race", "Ancestry", "Place of origin", "Colour", "Ethnic origin",
              "Citizenship", "Creed (religion)", "Sex", "Sexual orientation",
              "Gender identity", "Gender expression", "Age", "Record of offences",
              "Marital status", "Family status", "Disability",
            ].map(ground => (
              <span key={ground} style={{ fontSize: "13px", color: "rgba(240,232,216,0.7)", background: "rgba(255,255,255,0.06)", padding: "5px 12px", borderRadius: "20px" }}>
                {ground}
              </span>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            Disability is the most commonly cited ground in HRTO applications — particularly in employment (failure to accommodate disability, termination linked to disability) and housing (refusal to rent to people with mental health conditions or service dogs). Race and gender discrimination make up a large share of the remaining applications.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>The one-year limitation period: the most common mistake</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Unlike most Ontario civil claims (two years), HRTO applications must be filed within one year of the last incident of discrimination. This is the most common reason people lose their right to proceed.
          </p>
          <div style={{ background: "rgba(220,53,69,0.08)", border: "1px solid rgba(220,53,69,0.15)", padding: "24px 28px", borderRadius: "4px", marginBottom: "24px" }}>
            <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#e8534a" }}>Critical:</strong> The one-year period is strictly enforced. The HRTO will only extend the period if the delay was incurred in good faith and no substantial prejudice results to the respondent. &quot;I did not know about the deadline&quot; is generally not sufficient. Consult a lawyer before the year runs.
            </p>
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            For ongoing discrimination (e.g., repeated comments at work, continuing refusal to accommodate), the one-year period runs from the last incident. Document every incident with dates.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>The HRTO process step by step</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                step: "1",
                title: "File the T1 Application (Application to the Human Rights Tribunal of Ontario)",
                desc: "File online through the HRTO portal. The T1 requires you to describe: the protected ground, the social area (employment, housing, etc.), what happened, when it happened, and what remedy you are seeking. Be specific — vague applications may be dismissed on a preliminary basis.",
              },
              {
                step: "2",
                title: "HRTO deferral or intake review",
                desc: "The HRTO reviews the application to confirm it has jurisdiction. If the claim relates to a collective agreement or another process that should be heard elsewhere, it may be deferred. Most employment claims are deferred if there is a grievance procedure available.",
              },
              {
                step: "3",
                title: "Respondent files a response",
                desc: "The respondent (employer, landlord, etc.) has 35 days to file a Response. They must respond to each allegation and provide their version of events. The Response is served on the applicant.",
              },
              {
                step: "4",
                title: "Mediation (optional but recommended)",
                desc: "The HRTO offers a free mediation service. Most cases that settle do so at this stage. Mediation is confidential — positions taken in mediation cannot be used at a hearing. Approximately 60–70% of cases resolve at mediation.",
              },
              {
                step: "5",
                title: "Preliminary hearing (if required)",
                desc: "If there are threshold issues (limitation period, jurisdiction, adequacy of the application), the HRTO may hold a preliminary hearing before a full hearing on the merits.",
              },
              {
                step: "6",
                title: "Hearing on the merits",
                desc: "Each party presents their case — evidence, witnesses, and submissions. The HRTO Member asks questions. Rules of evidence are more relaxed than court but credibility is still assessed. Hearings may take 1–5 days depending on complexity.",
              },
              {
                step: "7",
                title: "Decision and remedies",
                desc: "The Member issues a written decision — sometimes months after the hearing. If the application succeeds, remedies may include monetary compensation, systemic orders (change the policy), reinstatement, and a letter of apology.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ display: "flex", gap: "20px", padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ flexShrink: 0, width: "32px", height: "32px", background: "rgba(198,146,42,0.15)", border: "1px solid rgba(198,146,42,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 600, color: "#C6922A" }}>
                  {step}
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "6px" }}>{title}</p>
                  <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Available remedies from the HRTO</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              { remedy: "General damages", desc: "Compensation for injury to dignity, feelings, and self-respect. Typically $5,000–$50,000 for successful employment cases, more for egregious situations." },
              { remedy: "Lost wages / lost opportunity", desc: "If you lost income as a result of discrimination, the Tribunal can order the respondent to compensate you for lost earnings." },
              { remedy: "Reinstatement", desc: "Return to employment in termination cases — available but rarely ordered unless the relationship is not too damaged." },
              { remedy: "Policy or training orders", desc: "The HRTO can order an employer to implement anti-discrimination policies, training, or monitoring — particularly important for systemic cases." },
              { remedy: "Interest", desc: "Interest on monetary awards is available from the date of the last incident." },
            ].map(({ remedy, desc }) => (
              <div key={remedy} style={{ background: "#07070a", padding: "22px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{remedy}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Ontario human rights lawyer? Atticus tracks your limitation periods.</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            With a one-year HRTO deadline and a two-year Superior Court deadline, missing a limitation period in human rights practice is catastrophic. Atticus calculates and tracks limitation periods automatically. 14-day free trial.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
              Start Free Trial →
            </Link>
            <Link href="/calculator" style={{ border: "1px solid rgba(198,146,42,0.4)", color: "#C6922A", padding: "12px 28px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
              Free Limitation Calculator →
            </Link>
          </div>
        </div>
      </article>

      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { href: "/ontario-employment-lawyer", label: "Atticus for employment lawyers" },
            { href: "/calculator", label: "Limitation period calculator" },
            { href: "/blog/ontario-wrongful-dismissal-guide", label: "Wrongful dismissal guide" },
            { href: "/blog/missing-limitation-periods-ontario", label: "Missing limitation periods" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ color: "#C6922A", fontSize: "14px", textDecoration: "none", border: "1px solid rgba(198,146,42,0.3)", padding: "6px 16px", borderRadius: "20px" }}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(198,146,42,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/blog" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>← All Articles</Link>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href="/calculator" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Free Calculator</Link>
          <Link href="/pricing" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
          <Link href="/privacy" style={{ color: "rgba(240,232,216,0.3)", fontSize: "13px", textDecoration: "none" }}>Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
