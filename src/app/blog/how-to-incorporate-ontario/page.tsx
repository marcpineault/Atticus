import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Incorporate a Business in Ontario: Lawyer's Guide (2026)",
  description:
    "Step-by-step guide to incorporating a business in Ontario — federal vs. provincial incorporation, OBCA vs CBCA, articles of incorporation, organizational meeting, and annual maintenance. What a corporate lawyer does.",
  openGraph: {
    title: "How to Incorporate a Business in Ontario: Lawyer's Guide (2026)",
    description:
      "Ontario incorporation guide for lawyers and business owners — OBCA vs CBCA, articles of incorporation, share structure, organizational steps, and annual maintenance.",
    type: "article",
    url: "https://getatticus.ca/blog/how-to-incorporate-ontario",
  },
  alternates: { canonical: "https://getatticus.ca/blog/how-to-incorporate-ontario" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Incorporate a Business in Ontario: Lawyer's Guide (2026)",
  description:
    "Ontario incorporation: OBCA vs CBCA, articles of incorporation, share structure, organizational meeting, and annual maintenance.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-01",
  url: "https://getatticus.ca/blog/how-to-incorporate-ontario",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I incorporate federally or provincially in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Ontario small businesses incorporate provincially under the Ontario Business Corporations Act (OBCA). Federal incorporation under the Canada Business Corporations Act (CBCA) makes sense if you plan to operate across provinces or want the prestige of a name protected across Canada.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to incorporate in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Provincial incorporation filing fees are $360 (online). Lawyer fees for a basic incorporation range from $800–$1,500 for the full corporate setup including minute book, share certificates, and organizational documents.",
      },
    },
    {
      "@type": "Question",
      name: "What is a minute book for a corporation in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A minute book is the corporation's official record of its organization and history — articles of incorporation, bylaws, shareholder register, director register, share certificates, and minutes of annual meetings. It is a legal requirement under the OBCA. An out-of-date minute book is a common problem discovered on business sales.",
      },
    },
  ],
};

export default function HowToIncorporatePage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-incorporate" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-incorporate-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

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
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Corporate Law</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.3)" }}>March 2026 · 10 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.15, color: "#faf8f4", marginBottom: "24px" }}>
          How to Incorporate a Business in Ontario:<br />
          <em style={{ fontStyle: "italic", color: "#e8b84b" }}>A Lawyer&apos;s Step-by-Step Guide</em>
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Incorporating a business in Ontario involves more than filing the right forms. A properly structured corporation — with the right share classes, share structure, and organizational documents from day one — saves significant cost and complexity down the road. Here is what Ontario corporate lawyers do when setting up a new corporation.
        </p>
      </header>

      {/* CONTENT */}
      <article style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>

        {/* OBCA VS CBCA */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>OBCA vs CBCA: which do you use?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            <div style={{ background: "#07070a", padding: "28px" }}>
              <p style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C6922A", marginBottom: "12px" }}>OBCA (Ontario)</p>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "12px" }}>
                Ontario Business Corporations Act. Governed by the Ontario government. Cheaper ($360 filing fee). Operates across Canada but name only protected in Ontario. Most small businesses in Ontario choose this route.
              </p>
              <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)" }}>Choose this if: you primarily operate in Ontario and want the simplest, most cost-effective structure.</p>
            </div>
            <div style={{ background: "#0d0d10", padding: "28px" }}>
              <p style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C6922A", marginBottom: "12px" }}>CBCA (Federal)</p>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "12px" }}>
                Canada Business Corporations Act. Governed by Corporations Canada. Higher fees. Name protected nationally. Must also extra-provincially register in Ontario to operate here. Better for coast-to-coast operations or capital raising.
              </p>
              <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)" }}>Choose this if: you plan to operate across provinces, raise venture capital, or want national name protection.</p>
            </div>
          </div>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            For most Ontario sole practitioners, small business owners, and professional corporations, OBCA is the right choice. Federal incorporation adds administrative overhead (extra registration in Ontario, federal annual returns) without meaningful benefit for a single-province operation.
          </p>
        </section>

        {/* STEPS */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>The Ontario incorporation process: step by step</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                step: "1",
                title: "Conduct a name search (NUANS)",
                desc: "Before filing, run a NUANS (Newly Upgraded Automated Name Search) report to confirm the proposed corporate name is available and not confusingly similar to an existing Ontario company. The NUANS report is valid for 90 days. Cost: ~$30–$75 depending on provider. Alternatively, use a number name (e.g., 1234567 Ontario Inc.) to bypass this step.",
              },
              {
                step: "2",
                title: "Prepare the Articles of Incorporation",
                desc: "The Articles set out the corporation&apos;s fundamental structure: name, registered office address, number of directors, restrictions on the business (if any), and most importantly — the share structure. Most Ontario small businesses use unlimited common shares (simple) or a mix of common and preference shares (for income splitting with a spouse or for future equity).",
              },
              {
                step: "3",
                title: "File with the Ontario Business Registry",
                desc: "File Articles of Incorporation (Form 1) through ServiceOntario&apos;s Ontario Business Registry portal. Pay the $360 filing fee. Processing is typically 2–5 business days online. You receive a Certificate of Incorporation and a corporate number.",
              },
              {
                step: "4",
                title: "Prepare organizational documents",
                desc: "After incorporation, the corporation must be organized. This includes: (a) initial organizational meeting or written resolution of incorporators; (b) appointment of first directors; (c) issuance of shares to shareholders; (d) adoption of by-laws; (e) banking resolutions authorizing signing authorities.",
              },
              {
                step: "5",
                title: "Set up the minute book",
                desc: "The OBCA requires the corporation to maintain a minute book at its registered office containing: articles of incorporation, bylaws, shareholders&apos; register, directors&apos; register, officers&apos; register, share certificates, and minutes of all annual and special meetings. This must be kept current or updated on sale of the business.",
              },
              {
                step: "6",
                title: "Register for HST and payroll (if required)",
                desc: "If annual taxable supplies exceed $30,000, the corporation must register for HST. If the corporation will have employees, it must register for payroll deductions with the CRA. A Business Number is assigned automatically on incorporation via Ontario&apos;s integrated registration system.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ display: "flex", gap: "20px", padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ flexShrink: 0, width: "32px", height: "32px", background: "rgba(198,146,42,0.15)", border: "1px solid rgba(198,146,42,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 600, color: "#C6922A" }}>
                  {step}
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>{title}</p>
                  <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SHARE STRUCTURE */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Share structure: why it matters from day one</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            The share structure in the Articles of Incorporation is one of the most important decisions in setting up an Ontario corporation. Getting it wrong is expensive to fix — it requires amending the articles, which costs time and money and can have tax consequences.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }}>
            {[
              {
                structure: "Unlimited common shares only",
                when: "Simple, sole-owner businesses with no plans for investors or income splitting. Fast to set up, easy to understand.",
                risk: "Limits flexibility for income splitting or equity issuance later. Harder to add preference shares post-incorporation.",
              },
              {
                structure: "Common + preference shares",
                when: "Most professional corporations, holdcos, and businesses with family income splitting plans. Preference shares allow dividends to a spouse (subject to TOSI rules) or provide a future equity mechanism.",
                risk: "More complex. A tax lawyer should confirm the preferred share attributes are consistent with CRA tax planning objectives.",
              },
              {
                structure: "Multiple classes (A, B, C common)",
                when: "Equity participation by multiple founders, employee equity plans, or sophisticated holding structures.",
                risk: "Complex. Requires careful drafting of share attributes. Almost always requires a shareholder agreement alongside.",
              },
            ].map(({ structure, when, risk }) => (
              <div key={structure} style={{ background: "#07070a", padding: "20px 24px" }}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#C6922A", marginBottom: "6px" }}>{structure}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "6px" }}><strong style={{ color: "rgba(240,232,216,0.8)" }}>Use when:</strong> {when}</p>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.45)", lineHeight: 1.6 }}><strong>Consideration:</strong> {risk}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ANNUAL MAINTENANCE */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Annual corporate maintenance requirements</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            An Ontario corporation has ongoing compliance obligations after incorporation:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              { item: "Annual shareholders&apos; meeting or written resolution", freq: "Annual" },
              { item: "Annual directors&apos; meeting or written resolution", freq: "Annual" },
              { item: "Corporate tax return (T2)", freq: "Annual" },
              { item: "Ontario Annual Return (filed via registry)", freq: "Annual" },
              { item: "Minute book updates on any material changes", freq: "As needed" },
              { item: "Beneficial Ownership Registry — update on ownership changes", freq: "As needed" },
            ].map(({ item, freq }) => (
              <div key={item} style={{ background: "#07070a", padding: "20px" }}>
                <p style={{ fontSize: "13px", color: "#C6922A", marginBottom: "6px" }}>{freq}</p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.5, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ATTICUS FOR CORPORATE */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>For Ontario corporate lawyers: managing incorporation files with Atticus</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Atticus includes a Corporate Incorporation matter template with pre-populated action items covering every step from name search through minute book delivery. Key features for corporate practice:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Matter template: Corporate Incorporation — all steps pre-populated as action items",
              "AI Draft: articles of incorporation, organizational resolutions, by-laws, share certificates",
              "Document processing: extract share structure, directors, and officer names from filed documents",
              "Deadline tracking: NUANS expiry, annual return due dates, meeting deadlines",
              "Conflict check: run against existing clients before accepting the matter",
            ].map((item) => (
              <li key={item} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div style={{ padding: "40px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "4px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#faf8f4", marginBottom: "12px" }}>Ontario corporate lawyer? Try Atticus free.</h3>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Matter templates, AI document drafting, deadline tracking, and trust accounting for Ontario corporate practice. 14-day free trial.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/sign-up" style={{ background: "#C6922A", color: "#07070a", padding: "12px 28px", textDecoration: "none", fontSize: "14px", fontWeight: 600, display: "inline-block" }}>
              Start Free Trial →
            </Link>
            <Link href="/ontario-corporate-lawyer" style={{ border: "1px solid rgba(198,146,42,0.4)", color: "#C6922A", padding: "12px 28px", textDecoration: "none", fontSize: "14px", display: "inline-block" }}>
              Atticus for Corporate Lawyers →
            </Link>
          </div>
        </div>
      </article>

      <section style={{ padding: "0 48px 80px", maxWidth: "760px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 400, color: "rgba(240,232,216,0.5)", marginBottom: "20px" }}>Related guides</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {[
            { href: "/ontario-corporate-lawyer", label: "Atticus for corporate lawyers" },
            { href: "/blog/engagement-letter-ontario-lawyers", label: "Engagement letter guide" },
            { href: "/blog/conflict-of-interest-lawyers-ontario", label: "Conflict of interest checks" },
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
