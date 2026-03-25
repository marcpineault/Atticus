import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Non-Compete Agreements in Ontario: What Employers and Employees Need to Know (2026)",
  description:
    "Ontario's Working for Workers Act, 2021 banned most non-compete agreements. What's still enforceable, how courts assess restraint of trade clauses, and what employment lawyers advise in 2026.",
  openGraph: {
    title: "Non-Compete Agreements in Ontario: What Employers and Employees Need to Know (2026)",
    description:
      "Non-compete clauses are mostly unenforceable in Ontario since 2022. Here's what the Working for Workers Act says, what still works, and how Ontario employment lawyers advise on restrictive covenants.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-non-compete-agreement",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-non-compete-agreement" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Non-Compete Agreements in Ontario: What Employers and Employees Need to Know (2026)",
  description:
    "Ontario's Working for Workers Act, 2021 banned most non-compete agreements. What's still enforceable, how courts assess restraint of trade clauses, and what employment lawyers advise in 2026.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: "https://getatticus.ca/blog/ontario-non-compete-agreement",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are non-compete agreements enforceable in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mostly no. The Working for Workers Act, 2021 (effective October 25, 2021) amended the Employment Standards Act to prohibit employers from entering into non-compete agreements with most employees. The only exceptions are executives and senior management, and business sale transactions where the seller becomes an employee.",
      },
    },
    {
      "@type": "Question",
      name: "Can my employer still make me sign a non-solicitation agreement in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Non-solicitation clauses — which restrict an employee from soliciting the employer's clients or employees after leaving — are not banned by the Working for Workers Act. Courts assess them using the same common law reasonableness test: geographic scope, duration, and breadth of restricted activities must be reasonable.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a non-compete and a non-solicitation clause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A non-compete prevents an employee from working for competitors or starting a competing business in a defined area for a set period. A non-solicitation prevents an employee from soliciting the former employer's clients or staff. Non-competes are largely banned in Ontario for most employees; non-solicitation clauses are still permitted if reasonable.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to non-compete agreements signed before October 2021?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Working for Workers Act applies to agreements entered into on or after October 25, 2021. Agreements signed before that date are not automatically voided by the legislation but were already assessed under the common law reasonableness standard, which made most broad non-competes unenforceable anyway.",
      },
    },
    {
      "@type": "Question",
      name: "Can a business sale include a non-compete in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Working for Workers Act explicitly exempts non-compete agreements entered into in connection with the sale of a business, where the seller becomes an employee of the buyer. Courts still assess these for reasonableness, but the statutory ban does not apply.",
      },
    },
  ],
};

const covenantTypes = [
  {
    type: "Non-compete clause",
    description: "Prohibits working for a competitor or starting a competing business for a set period in a defined area.",
    status: "Largely banned",
    statusColor: "#8b2020",
    detail: "The Working for Workers Act bans these for most Ontario employees. Only valid for executives and in business sale transactions.",
  },
  {
    type: "Non-solicitation of clients",
    description: "Prohibits approaching the former employer's clients to do business after leaving.",
    status: "Permitted if reasonable",
    statusColor: "#C6922A",
    detail: "Still permitted under common law. Must be reasonable in duration, scope, and geographic area. 6–12 months is typical.",
  },
  {
    type: "Non-solicitation of employees",
    description: "Prohibits recruiting the former employer's staff after departure.",
    status: "Permitted if reasonable",
    statusColor: "#C6922A",
    detail: "Also assessed under common law. Duration beyond 12 months is rarely enforced. Must be clear and specific.",
  },
  {
    type: "Confidentiality clause",
    description: "Prohibits disclosing trade secrets and confidential business information.",
    status: "Fully permitted",
    statusColor: "#2a8b4a",
    detail: "Implied into every employment relationship even without a contract. Express clauses can extend protection and specify remedies.",
  },
];

const reasonablenessFactors = [
  { factor: "Duration", detail: "Courts rarely uphold restrictions beyond 12 months. 6 months is more defensible for non-solicitation." },
  { factor: "Geographic scope", detail: "Restrictions limited to where the employee actually worked are more likely to be upheld than province-wide or national bans." },
  { factor: "Scope of restricted activities", detail: "The clause must be no broader than necessary to protect a legitimate business interest. Vague terms are struck down." },
  { factor: "Legitimate business interest", detail: "The employer must show a protectable interest: client relationships, confidential information, or specialized training." },
  { factor: "Consideration", detail: "If signed after employment began, there must be fresh consideration — a promotion, bonus, or new benefits. Just continuing employment is not enough." },
];

export default function OntarioNonCompeteAgreementPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-non-compete" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-non-compete-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

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
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>March 2026 · 10 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
          Non-Compete Agreements in Ontario: What Employers and Employees Need to Know (2026)
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Ontario changed the non-compete landscape permanently in 2021. The Working for Workers Act banned most non-compete agreements for employees — but non-solicitation clauses, confidentiality agreements, and executive-level restrictions survive. Here is what Ontario employment lawyers need to know in 2026.
        </p>
      </section>

      <article style={{ padding: "0 24px 80px", maxWidth: "800px", margin: "0 auto" }}>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>The 2021 Non-Compete Ban: What Changed</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            Effective October 25, 2021, the Working for Workers Act, 2021 amended Ontario&apos;s Employment Standards Act, 2000 (ESA) to prohibit employers from entering into non-compete agreements with employees. Section 67.2(1) of the ESA now provides:
          </p>
          <div style={{ padding: "24px", background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "8px", marginBottom: "20px" }}>
            <p style={{ fontSize: "15px", color: "#faf8f4", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>
              &ldquo;No employer shall enter into an employment contract or other agreement with an employee that is, or that includes, a non-compete agreement.&rdquo;
            </p>
            <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)", marginTop: "8px", marginBottom: 0 }}>Employment Standards Act, 2000, s. 67.2(1)</p>
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            The legislation defines a non-compete agreement as one that &ldquo;prohibits the employee from engaging in any business, work, occupation, profession, project or other activity that is in competition with the employer&apos;s business after the employment relationship ends.&rdquo;
          </p>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Exceptions to the Ban</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            The Working for Workers Act creates two exceptions where non-competes remain permissible:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ padding: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <div style={{ fontSize: "16px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>1. Executives and senior management</div>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, margin: 0 }}>
                The ban does not apply to employees who are &ldquo;executives&rdquo; — individuals who hold the highest level of authority in an organization or a division, such as a CEO, COO, CFO, or President. Courts are still working out exactly where the executive threshold lies, and Ontario employment lawyers should be cautious about relying on this exception for mid-level managers.
              </p>
            </div>
            <div style={{ padding: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <div style={{ fontSize: "16px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>2. Business sale transactions</div>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, margin: 0 }}>
                Non-competes remain valid when they are entered into &ldquo;in connection with the sale of a business or part of a business&rdquo; and the seller becomes an employee of the buyer. This is a common commercial scenario — buyers want to prevent sellers from immediately competing after the sale. The common law reasonableness test still applies.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Types of Restrictive Covenants in Ontario</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {covenantTypes.map((item, i) => (
              <div key={i} style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4" }}>{item.type}</div>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: item.statusColor, background: `${item.statusColor}15`, padding: "3px 10px", borderRadius: "20px", letterSpacing: "0.05em" }}>{item.status}</span>
                </div>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.5)", marginBottom: "8px", lineHeight: 1.6 }}>{item.description}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>How Courts Assess Reasonableness</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            For restrictive covenants that survive the legislative ban (non-solicitation clauses, executive non-competes, and business sale non-competes), courts apply a common law reasonableness analysis. The leading Supreme Court case is <em>Elsley v. J.G. Collins Insurance Agencies Ltd.</em> [1978]. Key factors:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {reasonablenessFactors.map((item, i) => (
              <div key={i} style={{ padding: "18px 20px", background: "rgba(255,255,255,0.03)", borderLeft: "3px solid rgba(198,146,42,0.35)", borderRadius: "4px" }}>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#C6922A", marginBottom: "6px" }}>{item.factor}</div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Blue-Pencilling vs. Striking the Clause</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            When an Ontario court finds a restrictive covenant unreasonable, it has two options:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <div style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>Blue-pencilling</div>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>
                Courts can remove words or phrases to make the restriction reasonable — but only if they can do so without rewriting the agreement. Ontario courts rarely use blue-pencilling for non-competes and prefer to strike the clause entirely.
              </p>
            </div>
            <div style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <div style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>Striking the entire clause</div>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>
                If the covenant is drafted too broadly, courts will void it entirely. The drafting lesson: overreach on scope almost always results in zero protection — narrower, carefully drafted clauses are more likely to be enforced.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Drafting Enforceable Restrictive Covenants in 2026</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Given the 2021 ban, Ontario employment lawyers now advise employers to focus on:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Robust confidentiality clauses that define trade secrets and confidential information with specificity",
              "Carefully scoped non-solicitation clauses — limited to clients the employee actually dealt with and staff they managed",
              "Garden leave clauses — paid notice periods that keep the employee away from competitors for a defined time",
              "IP assignment clauses that ensure all work product belongs to the employer",
              "Choice of law and jurisdiction clauses specifying Ontario courts",
              "Independent legal advice (ILA) recitals — showing employees had opportunity to get advice before signing",
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
            Managing Employment Matters in Ontario?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus helps Ontario employment lawyers track limitation periods, manage matter deadlines, draft employment agreements with AI, and keep trust accounting compliant with LSO By-Law 9. 14-day free trial, no credit card required.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 28px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Try Atticus Free →
          </Link>
        </section>

        <section>
          <h3 style={{ fontSize: "16px", color: "rgba(240,232,216,0.5)", marginBottom: "16px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { href: "/blog/ontario-wrongful-dismissal-guide", label: "Wrongful Dismissal in Ontario" },
              { href: "/ontario-employment-lawyer", label: "Atticus for Employment Lawyers" },
              { href: "/blog/missing-limitation-periods-ontario", label: "Missing Limitation Periods" },
              { href: "/blog/engagement-letter-ontario-lawyers", label: "Engagement Letters Guide" },
              { href: "/blog/conflict-of-interest-lawyers-ontario", label: "Conflict of Interest Guide" },
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
