import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Employment Standards Act: Employee Rights and Employer Obligations (2026)",
  description:
    "A complete guide to the Ontario Employment Standards Act, 2000 — minimum wage, overtime, vacation pay, termination notice, severance pay, leaves of absence, and what employment lawyers advise when ESA minimums are not met.",
  openGraph: {
    title: "Ontario Employment Standards Act: Employee Rights and Employer Obligations (2026)",
    description:
      "Ontario ESA minimums for 2026: minimum wage, hours of work, overtime, vacation pay, termination and severance pay, and leaves of absence. What employment lawyers advise when ESA is violated.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-employment-standards-act",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-employment-standards-act" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Employment Standards Act: Employee Rights and Employer Obligations (2026)",
  description:
    "Ontario ESA minimums for 2026 — minimum wage, overtime, vacation pay, termination notice, severance pay, and leaves of absence. What employment lawyers advise.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: "https://getatticus.ca/blog/ontario-employment-standards-act",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum wage in Ontario in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ontario's general minimum wage is $17.20 per hour as of October 1, 2024 (indexed annually to CPI). Students under 18 working less than 28 hours per week have a student minimum wage of $16.20. Liquor servers receive $15.60. Check the Ontario government website for any 2026 updates.",
      },
    },
    {
      "@type": "Question",
      name: "How much termination notice is required under the Ontario ESA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ESA termination notice ranges from 1 week (employed 1–3 years) to 8 weeks (employed 8+ years). Severance pay (an additional amount) applies to employees with 5+ years service whose employer has a payroll of $2.5M+ or who are terminated in a mass layoff. Most employees with 2+ years of service are entitled to significantly more notice under common law than ESA minimums.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between ESA termination notice and common law notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ESA notice is the statutory minimum — typically 1–8 weeks. Common law notice (reasonable notice) is determined by courts based on the Bardal factors: age, length of service, character of employment, and availability of similar employment. Common law notice is often 12–24 months for senior employees, far exceeding the ESA minimum. Most employees who accept ESA minimum on termination are accepting significantly less than they are owed.",
      },
    },
    {
      "@type": "Question",
      name: "What is the limitation period for an ESA complaint in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the ESA, an employment standards claim must be filed with the Ministry of Labour within 2 years of the alleged violation. For wrongful dismissal claims in the courts, the 2-year limitation period under the Limitations Act, 2002 applies from the date of discovery.",
      },
    },
  ],
};

const esaMinimums = [
  { standard: "Minimum wage (general)", value: "$17.20/hour (Oct 2024)", note: "Indexed annually to CPI" },
  { standard: "Student minimum wage", value: "$16.20/hour", note: "Under 18, working under 28 hrs/week" },
  { standard: "Daily maximum hours", value: "8 hours/day", note: "Unless agreement to work more" },
  { standard: "Weekly maximum hours", value: "48 hours/week", note: "Unless written agreement (excess hours agreement)" },
  { standard: "Overtime threshold", value: "44 hours/week", note: "1.5x regular rate above 44 hours" },
  { standard: "Vacation entitlement", value: "2 weeks (under 5 yrs) / 3 weeks (5+ yrs)", note: "Pay = 4% or 6% of gross wages" },
  { standard: "Public holiday pay", value: "Average of last 20 working days", note: "9 public holidays per year" },
  { standard: "Eating periods", value: "30 min after 5 hours of work", note: "Unpaid unless employer agrees otherwise" },
];

const terminationNotice = [
  { service: "Less than 1 year", esaNotice: "0 weeks", esaSeverance: "None", commonLaw: "1–3 months" },
  { service: "1 to less than 3 years", esaNotice: "1 week", esaSeverance: "Varies", commonLaw: "2–6 months" },
  { service: "3 to less than 4 years", esaNotice: "3 weeks", esaSeverance: "Varies", commonLaw: "4–10 months" },
  { service: "4 to less than 5 years", esaNotice: "4 weeks", esaSeverance: "Varies", commonLaw: "6–14 months" },
  { service: "5 to less than 6 years", esaNotice: "5 weeks", esaSeverance: "1 week/yr", commonLaw: "8–18 months" },
  { service: "8+ years", esaNotice: "8 weeks", esaSeverance: "1 week/yr (max 26)", commonLaw: "12–24 months" },
];

const leaves = [
  { leave: "Pregnancy leave", duration: "Up to 17 weeks", paid: "EI maternity benefits (15 weeks)" },
  { leave: "Parental leave", duration: "Up to 61 weeks (birth parent) / 63 weeks (other)", paid: "EI parental benefits (35–69 weeks)" },
  { leave: "Sick leave", duration: "3 unpaid days per year", paid: "No (ESA minimum)" },
  { leave: "Family responsibility leave", duration: "3 unpaid days per year", paid: "No" },
  { leave: "Bereavement leave", duration: "2 unpaid days per year", paid: "No" },
  { leave: "Domestic or sexual violence leave", duration: "10 days (first 5 paid)", paid: "5 days paid" },
  { leave: "Critical illness (adult)", duration: "Up to 17 weeks", paid: "EI compassionate care" },
  { leave: "Infectious disease emergency leave", duration: "As required", paid: "No (ESA minimum)" },
];

export default function OntarioEmploymentStandardsActPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-esa" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-esa-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

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
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Employment Law</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>March 2026 · 11 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
          Ontario Employment Standards Act: Employee Rights and Employer Obligations (2026)
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          The Employment Standards Act, 2000 (ESA) sets the minimum standards for most Ontario employees. But ESA minimums are not the full picture — common law notice on termination can be 5–10x the ESA minimum. Here is a complete reference guide to Ontario ESA standards and what employment lawyers advise when employers fall short.
        </p>
      </section>

      <article style={{ padding: "0 24px 80px", maxWidth: "800px", margin: "0 auto" }}>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>ESA Minimums at a Glance (2026)</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Standard</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Value</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {esaMinimums.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 16px", color: "#faf8f4", fontWeight: 500 }}>{row.standard}</td>
                    <td style={{ padding: "12px 16px", color: "#C6922A" }}>{row.value}</td>
                    <td style={{ padding: "12px 16px", color: "rgba(240,232,216,0.55)" }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Termination Notice: ESA vs Common Law</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            The single most important thing Ontario employment lawyers communicate to clients is that ESA notice and common law (reasonable) notice are completely different. The gap between them is often 5–10x for experienced employees.
          </p>
          <div style={{ overflowX: "auto", marginBottom: "20px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Years of Service</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>ESA Notice</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>ESA Severance</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Common Law (typical range)</th>
                </tr>
              </thead>
              <tbody>
                {terminationNotice.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 16px", color: "#faf8f4" }}>{row.service}</td>
                    <td style={{ padding: "12px 16px", color: "rgba(240,232,216,0.6)" }}>{row.esaNotice}</td>
                    <td style={{ padding: "12px 16px", color: "rgba(240,232,216,0.6)" }}>{row.esaSeverance}</td>
                    <td style={{ padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>{row.commonLaw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: "16px 20px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "6px" }}>
            <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.75)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#faf8f4" }}>Key point for clients:</strong> If an employer offers exactly ESA notice on termination, most employees with 2+ years of service are being offered a settlement that is far below what they are entitled to at common law. Ontario employment lawyers routinely negotiate significantly higher packages.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>ESA Leaves of Absence</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Leave</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Duration</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#C6922A", fontWeight: 500 }}>Paid?</th>
                </tr>
              </thead>
              <tbody>
                {leaves.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 16px", color: "#faf8f4", fontWeight: 500 }}>{row.leave}</td>
                    <td style={{ padding: "12px 16px", color: "rgba(240,232,216,0.65)" }}>{row.duration}</td>
                    <td style={{ padding: "12px 16px", color: "rgba(240,232,216,0.55)" }}>{row.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Employees Exempt from ESA Minimums</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            Not all Ontario workers are covered by the full ESA. Ontario employment lawyers must confirm coverage before advising clients. Exemptions include:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Federally regulated employees (banks, telecom, railways, airlines) — covered by Canada Labour Code, not ESA",
              "Independent contractors (not employees) — no ESA coverage; lawyer role is often to determine the classification",
              "Certain professionals: architects, dentists, engineers, information technology professionals",
              "Farm employees: partial exemptions for hours of work and overtime",
              "Domestic workers employed in a private home: partial ESA coverage",
              "Managers and supervisors whose primary responsibility is to manage (overtime exemption)",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6 }}>{item}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>ESA Complaints and Enforcement</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            Employees who believe their ESA rights have been violated can file a complaint with the Ontario Ministry of Labour, Training and Skills Development. Key points:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { item: "2-year limitation period", detail: "ESA claims must be filed within 2 years of the alleged violation. Common law claims have a separate 2-year limitation period." },
              { item: "No cost to file", detail: "Employment standards complaints are free to file. However, once a complaint is filed, the employee cannot also sue in court for the same matter without withdrawing the complaint." },
              { item: "Ministry investigation", detail: "An employment standards officer investigates the complaint and can order the employer to pay owed wages plus interest. Employers can face orders of up to $100,000 for ESA violations." },
              { item: "Director liability", detail: "Corporate directors can be personally liable for up to 6 months of unpaid wages if the corporation cannot pay. This is a significant exposure for small business owners." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "16px 20px", background: "rgba(255,255,255,0.03)", borderLeft: "3px solid rgba(198,146,42,0.35)", borderRadius: "4px" }}>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#C6922A", marginBottom: "6px" }}>{item.item}</div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            ))}
          </div>
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
            Managing Employment Law Files in Ontario?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus helps Ontario employment lawyers track the 2-year limitation period, manage matter checklists, draft employment letters with AI, and stay compliant with LSO rules. 14-day free trial, no credit card required.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 28px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Try Atticus Free →
          </Link>
        </section>

        <section>
          <h3 style={{ fontSize: "16px", color: "rgba(240,232,216,0.5)", marginBottom: "16px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { href: "/blog/ontario-wrongful-dismissal-guide", label: "Wrongful Dismissal Guide" },
              { href: "/blog/ontario-non-compete-agreement", label: "Non-Compete Agreements" },
              { href: "/ontario-employment-lawyer", label: "Atticus for Employment Lawyers" },
              { href: "/blog/missing-limitation-periods-ontario", label: "Missing Limitation Periods" },
              { href: "/calculator", label: "Limitation Period Calculator" },
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
