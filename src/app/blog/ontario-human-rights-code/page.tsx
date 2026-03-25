import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Human Rights Code: Protected Grounds, Discrimination, and Workplace Rights (2026 Guide)",
  description:
    "How the Ontario Human Rights Code protects employees, tenants, and service recipients — the 17 protected grounds, discrimination in employment, harassment, duty to accommodate, undue hardship, and remedies at the Human Rights Tribunal of Ontario.",
  openGraph: {
    title: "Ontario Human Rights Code: Protected Grounds, Discrimination, and Workplace Rights (2026 Guide)",
    description:
      "Ontario Human Rights Code: 17 protected grounds, workplace discrimination and harassment, duty to accommodate to undue hardship, and HRTO remedies.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-human-rights-code",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-human-rights-code" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Human Rights Code: Protected Grounds, Discrimination, and Workplace Rights (2026 Guide)",
  description:
    "Ontario Human Rights Code: 17 protected grounds, workplace discrimination, harassment, duty to accommodate, and HRTO remedies.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-18",
  url: "https://getatticus.ca/blog/ontario-human-rights-code",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the protected grounds under the Ontario Human Rights Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Ontario Human Rights Code protects against discrimination based on 17 grounds: race, ancestry, place of origin, colour, ethnic origin, citizenship, creed (religion), sex (including pregnancy, gender identity, and gender expression), sexual orientation, age, marital status, family status, disability, record of offences, receipt of public assistance (in housing), and association with a person identified by a protected ground. Discrimination based on any combination of these grounds (intersectional discrimination) is also prohibited.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duty to accommodate in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The duty to accommodate requires employers, landlords, and service providers to adjust policies, practices, or physical conditions to meet the needs of a person protected under the Code, unless doing so would cause undue hardship. In employment, the most common accommodation grounds are disability and religion. The duty is not unlimited — 'undue hardship' considers health and safety risks, cost relative to the organization's size, and disruption to operations. The test requires substantial evidence that accommodation would be unduly burdensome; inconvenience alone is insufficient.",
      },
    },
    {
      "@type": "Question",
      name: "What is the limitation period for a human rights complaint in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applications to the Human Rights Tribunal of Ontario (HRTO) must be filed within 1 year of the last incident of discrimination. Where the discrimination is ongoing or is a continuing series of related events, the 1-year period runs from the most recent event. The HRTO can extend the limitation period where it is fair and reasonable to do so, considering factors like the applicant's awareness of rights, attempts to resolve the matter, and prejudice to the respondent.",
      },
    },
    {
      "@type": "Question",
      name: "What remedies can the Human Rights Tribunal of Ontario order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The HRTO can order: (1) Monetary compensation — for injury to dignity, feelings, and self-respect (commonly $10,000-$50,000+); lost wages and benefits; future wage loss; and out-of-pocket expenses; (2) Non-monetary remedies — reinstatement, policy changes, accommodation measures, training, written apologies; (3) Public interest remedies — systemic remedies requiring respondents to implement broader changes. There is no fixed cap on damages at the HRTO. The 2024 Ontario Human Rights Commission guidelines suggest general damages up to $50,000 for serious violations.",
      },
    },
  ],
};

const protectedGrounds = [
  { ground: "Race", areas: "Employment, housing, services, contracts" },
  { ground: "Ancestry", areas: "Employment, housing, services, contracts" },
  { ground: "Place of Origin", areas: "Employment, housing, services, contracts" },
  { ground: "Colour", areas: "Employment, housing, services, contracts" },
  { ground: "Ethnic Origin", areas: "Employment, housing, services, contracts" },
  { ground: "Citizenship", areas: "Employment only (not housing)" },
  { ground: "Creed (Religion)", areas: "Employment, housing, services, contracts" },
  { ground: "Sex (incl. pregnancy, gender identity/expression)", areas: "Employment, housing, services, contracts" },
  { ground: "Sexual Orientation", areas: "Employment, housing, services, contracts" },
  { ground: "Age (18+; 65+ in employment)", areas: "Employment, housing, services, contracts" },
  { ground: "Marital Status", areas: "Employment, housing, services, contracts" },
  { ground: "Family Status", areas: "Employment, housing, services, contracts" },
  { ground: "Disability (physical and mental)", areas: "Employment, housing, services, contracts" },
  { ground: "Record of Offences", areas: "Employment only (pardoned/provincial offences)" },
  { ground: "Receipt of Public Assistance", areas: "Housing only" },
  { ground: "Association with Protected Person", areas: "Employment, housing, services, contracts" },
];

const discriminationTypes = [
  {
    type: "Direct Discrimination",
    description: "Treating a person less favourably because of a protected characteristic. Example: refusing to hire a qualified applicant because of their race.",
    test: "Protected ground was a factor in the adverse treatment — does not need to be the sole or primary reason",
  },
  {
    type: "Adverse Effect / Constructive Discrimination",
    description: "A neutral rule or policy that has a disproportionate negative impact on a protected group. Example: requiring all employees to work Sundays, which disadvantages employees whose faith requires Sunday observance.",
    test: "The policy has a discriminatory effect and the employer fails to accommodate to the point of undue hardship",
  },
  {
    type: "Harassment",
    description: "A course of conduct that is known or ought reasonably to be known to be unwelcome. Can be a single serious incident or a pattern of minor incidents.",
    test: "The conduct was based on a protected ground; it was unwelcome; it was severe enough to create a poisoned environment or constitute an adverse employment action",
  },
  {
    type: "Poisoned Environment",
    description: "Workplace conditions so fundamentally altered by discriminatory conduct that the work environment itself becomes hostile. An employer who tolerates poisoned environment conditions may be liable even if the employer was not personally involved.",
    test: "The conduct was based on a protected ground and a reasonable person in the complainant's position would find the environment intolerable",
  },
  {
    type: "Reprisal",
    description: "Adverse action against a person for filing a human rights complaint, asserting rights under the Code, or participating in a human rights proceeding.",
    test: "Adverse action (demotion, termination, increased scrutiny) temporally connected to a human rights complaint or assertion of rights",
  },
];

const accommodationSteps = [
  { party: "Employee/Applicant", obligation: "Inform the employer of the need for accommodation (the need itself, not necessarily the diagnosis or details). Provide information needed to determine appropriate accommodation. Cooperate in the accommodation process." },
  { party: "Employer", obligation: "Accept the employee&apos;s request in good faith. Investigate what accommodation is possible. Seek expert advice if needed (medical, ergonomic, etc.). Propose and implement solutions. Document steps taken." },
  { party: "Union (if applicable)", obligation: "Cooperate in the accommodation process even if it requires some deviation from the collective agreement. Cannot refuse an accommodation that would otherwise be appropriate on grounds of seniority or other contractual preferences." },
];

export default function OntarioHumanRightsCodePage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-hrc" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-hrc-faq" type="application/ld+json">{JSON.stringify(faqLd)}</Script>

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
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Employment Law — Ontario</p>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
            Ontario Human Rights Code: Protected Grounds, Discrimination, and Workplace Rights (2026 Guide)
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
            The Ontario Human Rights Code, RSO 1990, c H.19 is Ontario&apos;s primary anti-discrimination statute. It protects against discrimination in employment, housing, services, contracts, and vocational associations across 17 protected grounds. Ontario employment lawyers and human rights practitioners advising employers or employees need to understand the framework — what discrimination looks like, what accommodation requires, and what remedies the HRTO can award.
          </p>
          <div style={{ display: "flex", gap: "20px", color: "rgba(240,232,216,0.4)", fontSize: "13px" }}>
            <span>March 2026</span>
            <span>11 min read</span>
            <span>Ontario Human Rights Code</span>
          </div>
        </header>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            The 17 Protected Grounds Under the Code
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Protected Ground</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Social Areas Covered</th>
                </tr>
              </thead>
              <tbody>
                {protectedGrounds.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "10px 12px", color: "#C6922A", fontWeight: 500 }}>{row.ground}</td>
                    <td style={{ padding: "10px 12px", color: "rgba(240,232,216,0.65)" }}>{row.areas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)", lineHeight: 1.6, marginTop: "12px" }}>
            Discrimination on the basis of gender identity and gender expression was added to the Code in 2012. Intersectional discrimination — where multiple grounds interact to create a unique form of discrimination — is recognized by the HRTO.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Forms of Discrimination Under the Code
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {discriminationTypes.map((d, i) => (
              <div key={i} style={{ padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderLeft: "3px solid #C6922A", borderRadius: "0 8px 8px 0" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#faf8f4", marginBottom: "8px" }}>{d.type}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7, marginBottom: "8px" }}>{d.description}</p>
                <p style={{ fontSize: "13px", color: "#C6922A", lineHeight: 1.65 }}>
                  <strong>Legal test: </strong>{d.test}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px", padding: "28px 32px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.25)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#e8b84b", marginBottom: "14px" }}>
            The Duty to Accommodate: Three Parties, Three Obligations
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "16px" }}>
            The duty to accommodate is a shared obligation — it falls on the employer, the employee, and the union (where applicable). The process breaks down when one party fails to fulfill their obligation, which can affect who bears responsibility for the failure.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {accommodationSteps.map((s, i) => (
              <div key={i} style={{ padding: "16px 20px", background: "rgba(255,255,255,0.04)", borderRadius: "6px" }}>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#C6922A", marginBottom: "6px" }}>{s.party}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.65 }}>{s.obligation}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, marginTop: "14px" }}>
            Undue hardship: Employers must accommodate to the point of undue hardship, considering health and safety, cost, and operational disruption. An employer must present actual evidence of undue hardship — not just assert it. Courts and the HRTO set a high bar for what constitutes undue hardship.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            HRTO Applications: Key Procedural Points
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { title: "1-Year Limitation Period", detail: "Applications must be filed within 1 year of the last discriminatory incident. For continuing discrimination, time runs from the most recent event. The HRTO can extend — but don&apos;t rely on it." },
              { title: "Direct Application", detail: "Since 2008, applicants file directly with the HRTO — there is no screening by the Human Rights Commission. The Commission can still support parties and intervene on public interest grounds." },
              { title: "No Human Rights Commission Gatekeeping", detail: "The Ontario Human Rights Commission (OHRC) no longer accepts and investigates individual complaints. It sets policy, provides public interest advocacy, and can intervene in HRTO proceedings as a party." },
              { title: "Concurrent Wrongful Dismissal Claims", detail: "An employee can file both a wrongful dismissal claim in court and a human rights application at the HRTO — but must elect between remedies before the HRTO proceeding. The Code damages for injury to dignity can be sought only at the HRTO." },
              { title: "Remedy Range", detail: "HRTO awards for injury to dignity range widely. The OHRC guidelines suggest up to $50,000 for serious cases. Lost wages are ordered at actual loss — no cap. Non-monetary remedies (policy changes, training, apologies) are also available." },
              { title: "Costs", detail: "Unlike civil courts, the HRTO generally does not award legal costs to the successful party. Cost orders are reserved for cases involving bad faith, frivolous applications, or serious procedural abuse." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "20px 22px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.65 }}>{item.detail}</p>
              </div>
            ))}
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
            Manage employment and human rights matters with AI
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus automatically tracks HRTO filing deadlines and limitation periods from uploaded documents. Built for Ontario employment lawyers.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Start Free Trial →
          </Link>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "14px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/blog/ontario-wrongful-dismissal-guide", label: "Wrongful Dismissal" },
              { href: "/blog/ontario-employment-standards-act", label: "Employment Standards Act" },
              { href: "/blog/ontario-human-rights-complaint", label: "HRTO Complaint Process" },
              { href: "/ontario-employment-lawyer", label: "Practice Mgmt for Employment Lawyers" },
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
