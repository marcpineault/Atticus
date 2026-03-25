import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Wrongful Dismissal in Ontario: What Employees and Lawyers Need to Know (2026)",
  description:
    "A complete guide to wrongful dismissal in Ontario — common law notice, Employment Standards Act minimums, damages, mitigation, and what employment lawyers look for when assessing a case.",
  openGraph: {
    title: "Wrongful Dismissal in Ontario: What Employees and Lawyers Need to Know (2026)",
    description:
      "Ontario wrongful dismissal guide: common law notice vs ESA, severance calculation, aggravated damages, mitigation, and limitation periods.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-wrongful-dismissal-guide",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-wrongful-dismissal-guide" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wrongful Dismissal in Ontario: What Employees and Lawyers Need to Know (2026)",
  description:
    "Common law notice, ESA minimums, severance calculation, aggravated damages, and limitation periods for Ontario wrongful dismissal claims.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/ontario-wrongful-dismissal-guide",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is wrongful dismissal in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wrongful dismissal in Ontario means termination without cause and without reasonable notice, or pay in lieu of notice. It does not mean the employer had no reason to fire you — it means they failed to provide the notice you were entitled to under common law or your employment contract.",
      },
    },
    {
      "@type": "Question",
      name: "How long do I have to file a wrongful dismissal claim in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The limitation period for a wrongful dismissal claim at common law (Ontario Superior Court) is two years from the date of termination under the Limitations Act, 2002. Employment Standards Act complaints have a 2-year look-back period for unpaid wages.",
      },
    },
    {
      "@type": "Question",
      name: "How much notice am I owed for wrongful dismissal in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notice entitlement depends on factors including age, length of service, position, and availability of comparable employment. The general common law rule is approximately one month per year of service, but courts consider all factors holistically. The maximum is typically 24 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to mitigate my wrongful dismissal damages in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ontario employees have a duty to mitigate by making reasonable efforts to find comparable alternative employment. Damages are reduced by any income earned or that could reasonably have been earned during the notice period.",
      },
    },
  ],
};

export default function WrongfulDismissalPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-wd" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-wd-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

      {/* NAV */}
      <nav style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(198,146,42,0.1)" }}>
        <Link href="/" style={{ fontSize: "20px", fontWeight: 600, color: "#faf8f4", textDecoration: "none" }}>Atticus</Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="/blog" style={{ color: "rgba(240,232,216,0.5)", fontSize: "14px", textDecoration: "none" }}>Blog</Link>
          <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "10px 24px", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            For Ontario Lawyers →
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <header style={{ padding: "80px 48px 60px", maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Employment Law</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 11 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          Wrongful Dismissal in Ontario:<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>What You&apos;re Owed and How It&apos;s Calculated</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Being terminated without proper notice is one of the most financially damaging things that can happen to an employee. Most Ontario employees accept severance packages that are a fraction of what they are entitled to. Here is how wrongful dismissal works in Ontario, how damages are calculated, and what an employment lawyer looks for when assessing a claim.
        </p>
      </header>

      {/* CONTENT */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        {/* WHAT IS WD */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>What wrongful dismissal actually means in Ontario</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Wrongful dismissal does not mean you were fired unfairly or that your employer had bad reasons. In Ontario, an employer can terminate a non-unionized employee without cause at any time — the employer just must provide reasonable notice (or pay in lieu of notice).
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Wrongful dismissal means the employer terminated you <em>without providing the notice you were legally entitled to</em>. The question is not whether you were fired — it is how much notice you were owed and whether you received it.
          </p>
          <div style={{ background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", padding: "24px 28px", borderRadius: "4px" }}>
            <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#C6922A" }}>Termination with cause</strong> is the exception, not the rule. To avoid paying notice entirely, an employer must establish that the employee committed serious misconduct that fundamentally breached the employment relationship. Courts set a high bar — ongoing performance issues, minor policy violations, and most documented failures do not meet the just cause threshold.
            </p>
          </div>
        </section>

        {/* ESA VS COMMON LAW */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>ESA minimums vs. common law notice: the critical difference</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            Ontario employees have rights under two separate frameworks — and the gap between them is often substantial:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            <div style={{ background: "#07070a", padding: "28px" }}>
              <p style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C6922A", marginBottom: "12px" }}>Employment Standards Act (ESA)</p>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "12px" }}>
                Minimum statutory entitlements. Notice of 1–8 weeks depending on years of service. Severance pay (separate from notice) if terminated from a firm with $2.5M+ payroll and 5+ years service.
              </p>
              <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)" }}>For a 10-year employee: typically 8 weeks notice + 10 weeks severance = ~18 weeks total minimum</p>
            </div>
            <div style={{ background: "#0d0d10", padding: "28px" }}>
              <p style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C6922A", marginBottom: "12px" }}>Common Law Notice</p>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "12px" }}>
                Judicially determined based on Bardal factors: age, length of service, character of employment, availability of comparable employment. Significantly higher than ESA — often 1 month per year of service.
              </p>
              <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)" }}>For a 10-year senior employee: potentially 12–18 months common law notice</p>
            </div>
          </div>
          <div style={{ background: "rgba(220,53,69,0.08)", border: "1px solid rgba(220,53,69,0.15)", padding: "24px 28px", borderRadius: "4px" }}>
            <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#e8534a" }}>Most employees accept ESA minimums.</strong> Employers often present the ESA minimums as the full entitlement. They are the floor, not the ceiling. An employee who signs a release for ESA minimum severance is often giving up many months of additional common law notice they were entitled to receive.
            </p>
          </div>
        </section>

        {/* BARDAL FACTORS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>The Bardal factors: how courts calculate notice</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Ontario courts use the <em>Bardal v. The Globe &amp; Mail</em> factors to determine reasonable notice. No factor is determinative — they are weighed together:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              { factor: "Age", impact: "Older employees typically receive more notice — the job market is harder for them. An employee in their 50s or 60s may receive several months more than a younger employee with the same tenure." },
              { factor: "Length of service", impact: "The primary factor. More years = more notice. The general rule of thumb is 1 month per year of service, but the maximum is typically 24 months." },
              { factor: "Character of employment", impact: "Senior management, specialized roles, and positions of trust attract higher notice periods than entry-level roles." },
              { factor: "Availability of comparable employment", impact: "If comparable work is readily available in the market, notice may be lower. If the employee&apos;s skills are specialized or the market is poor, higher notice is warranted." },
            ].map(({ factor, impact }) => (
              <div key={factor} style={{ background: "#07070a", padding: "22px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>{factor}</h3>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.6, margin: 0 }}>{impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TYPES OF DAMAGES */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Types of damages in Ontario wrongful dismissal</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              {
                type: "Pay in lieu of notice",
                desc: "The core claim. Damages representing the salary, benefits, and bonuses the employee would have received during the reasonable notice period. The most common claim.",
              },
              {
                type: "Aggravated (moral) damages",
                desc: "Available where the employer acted in bad faith during the dismissal — making false allegations of cause, failing to provide references, or conducting the dismissal in a humiliating way. Damages for mental distress resulting from the manner of dismissal.",
              },
              {
                type: "Punitive damages",
                desc: "Rare. Available where the employer&apos;s conduct was independently actionable and warranted punishment beyond compensation. Courts award these sparingly.",
              },
              {
                type: "Human rights damages",
                desc: "Where termination involved discrimination based on a protected ground (age, disability, family status, etc.), claims can be brought to the Ontario Human Rights Tribunal in parallel.",
              },
              {
                type: "Bonus and commission",
                desc: "Bonus compensation that would have been earned during the notice period is often included — particularly if the employee was terminated shortly before a bonus payment date.",
              },
            ].map(({ type, desc }) => (
              <div key={type} style={{ background: "#07070a", padding: "20px 24px" }}>
                <p style={{ fontSize: "15px", fontWeight: 500, color: "#C6922A", marginBottom: "8px" }}>{type}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LIMITATION */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Limitation period: do not miss it</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            A wrongful dismissal claim at common law in Ontario must be commenced within two years of the date of termination under the Limitations Act, 2002. The clock starts on the termination date — not when you finish negotiating, not when you get a lawyer, not when you exhaust internal processes.
          </p>
          <div style={{ background: "rgba(220,53,69,0.08)", border: "1px solid rgba(220,53,69,0.15)", padding: "24px 28px", borderRadius: "4px" }}>
            <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#e8534a" }}>Employees frequently miss this deadline</strong> because they spend months in negotiation, severance review, or job searching before consulting a lawyer. By the time they do, the limitation period has passed and the common law claim is extinguished — leaving only ESA minimums available.
            </p>
          </div>
        </section>

        {/* FOR LAWYERS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>For Ontario employment lawyers: managing wrongful dismissal files with Atticus</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Employment files are deadline-dense — limitation periods, mediation dates, demand letter response deadlines, document production timelines. Atticus supports employment lawyers with:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Ontario limitation period calculator — enter termination date, get limitation period deadline instantly",
              "Document AI — extract key dates, severance terms, and employment period from offer letters and termination packages",
              "Employment Agreement Review matter template with pre-populated checklist",
              "Daily briefing — never miss a limitation period across your active file list",
              "AI Draft — demand letters, settlement proposals, and Statement of Claim/Defence under Ontario Rules of Civil Procedure",
              "Conflict of interest check on every new employment file",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Ontario employment lawyer? Never miss a limitation period.</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus tracks limitation periods automatically from your matter files and alerts you daily. 14-day free trial.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
              Start Free Trial →
            </Link>
            <Link href="/calculator" style={{ border: "1px solid rgba(198,146,42,0.4)", color: "#C6922A", padding: "12px 28px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
              Free Limitation Period Calculator →
            </Link>
          </div>
        </div>
      </article>

      {/* RELATED */}
      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 400, color: "rgba(240,232,216,0.5)", marginBottom: "20px" }}>Related guides</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { href: "/ontario-employment-lawyer", label: "Atticus for employment lawyers" },
            { href: "/calculator", label: "Ontario limitation period calculator" },
            { href: "/blog/missing-limitation-periods-ontario", label: "Missing limitation periods" },
            { href: "/blog/client-intake-ontario-lawyers", label: "Client intake guide" },
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
