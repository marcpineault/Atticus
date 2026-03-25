import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Professional Corporation: PC Rules for Lawyers, Doctors, and Dentists (2026 Guide)",
  description:
    "How professional corporations work in Ontario — who can incorporate, tax advantages of income splitting and deferral, CCPC small business deduction, dividend vs salary, passive income rules, eligible professions, and what corporate lawyers advise professional clients.",
  openGraph: {
    title: "Ontario Professional Corporation: PC Rules for Lawyers, Doctors, and Dentists (2026 Guide)",
    description:
      "Ontario professional corporations: who qualifies, tax advantages, CCPC small business deduction, income splitting, dividend vs salary, and passive income rules.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-professional-corporation",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-professional-corporation" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Professional Corporation: PC Rules for Lawyers, Doctors, and Dentists (2026 Guide)",
  description:
    "Ontario professional corporations: eligibility, tax advantages, CCPC small business deduction, income splitting, dividend vs salary, and passive income rules.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-18",
  url: "https://getatticus.ca/blog/ontario-professional-corporation",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Ontario lawyers incorporate a professional corporation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ontario lawyers can incorporate a Law Professional Corporation (LPC) under the Law Society Act and the Business Corporations Act (Ontario). All shareholders of an LPC must be licensed lawyers. The LPC can employ other lawyers and staff, but professional responsibility remains with the individual lawyer — the corporation does not provide liability protection from professional negligence claims.",
      },
    },
    {
      "@type": "Question",
      name: "What are the tax benefits of incorporating as a professional in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main tax benefits are: (1) Small Business Deduction — a CCPC pays approximately 12.2% (federal + Ontario) on the first $500,000 of active business income vs a top marginal personal rate of approximately 53.53%; (2) Income Deferral — leave income in the corporation at the low rate and draw it out in lower-income years; (3) Income Splitting — pay reasonable salaries or dividends to family members who are shareholders (subject to TOSI rules); (4) Capital Gains Exemption — potential use of the Lifetime Capital Gains Exemption ($1.25M for 2026) on a qualifying small business corporation sale.",
      },
    },
    {
      "@type": "Question",
      name: "What is the TOSI rule and how does it affect professional corporations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Tax on Split Income (TOSI) rules (s. 120.4 ITA) prevent the benefit of income splitting by subjecting split income paid to family members aged 18+ to the highest marginal tax rate, unless an exception applies. For professional corporations, exceptions include: a family member who actively works in the business (25+ hours/week), a spouse of the professional who is over 65, and capital gains from qualifying dispositions. TOSI has significantly curtailed dividend splitting strategies that were common before 2018.",
      },
    },
    {
      "@type": "Question",
      name: "How does the passive income clawback affect Ontario professional corporations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For CCPCs with significant investment income, the Small Business Deduction (SBD) limit is clawed back when the prior year's passive investment income exceeds $50,000. The SBD limit is reduced by $5 for every $1 of passive income over $50,000, and is fully eliminated when passive income reaches $150,000. For professional corporations accumulating significant investment portfolios, this rule means the low corporate rate is eventually lost as passive income grows. Strategies include: corporate-owned life insurance (exempt from passive income rules), holding real property directly vs in the PC, and distributing surplus before year-end.",
      },
    },
  ],
};

const eligibleProfessions = [
  { profession: "Lawyers / Barristers & Solicitors", regulator: "Law Society of Ontario (LSO)", structure: "Law Professional Corporation (LPC)", shareholderRule: "All shareholders must be LSO licensees" },
  { profession: "Physicians / Surgeons", regulator: "College of Physicians and Surgeons of Ontario (CPSO)", structure: "Medicine Professional Corporation", shareholderRule: "Voting shares held only by physician; non-voting shares can be held by family" },
  { profession: "Dentists", regulator: "Royal College of Dental Surgeons of Ontario (RCDSO)", structure: "Dentistry Professional Corporation", shareholderRule: "Majority voting shares by licensed dentist; non-voting shares by family" },
  { profession: "Pharmacists", regulator: "Ontario College of Pharmacists (OCP)", structure: "Pharmacy Professional Corporation", shareholderRule: "All shareholders must be OCP registrants" },
  { profession: "Chartered Professional Accountants", regulator: "CPA Ontario", structure: "CPA Professional Corporation", shareholderRule: "Majority of shares held by CPAs" },
  { profession: "Engineers", regulator: "Professional Engineers Ontario (PEO)", structure: "Engineering Professional Corporation", shareholderRule: "Majority of shares held by licensed engineers" },
];

const taxComparison = [
  { scenario: "Personal income (Ontario 2026)", rate: "~53.5%", onFirst500K: "$267,500", afterTax500K: "$232,500", notes: "Top marginal rate on employment income" },
  { scenario: "CCPC Small Business Deduction rate", rate: "~12.2%", onFirst500K: "$61,000", afterTax500K: "$439,000", notes: "On first $500K active business income" },
  { scenario: "Tax deferral per $500K", rate: "~41.3%", onFirst500K: "$206,500", afterTax500K: "Annual deferral", notes: "Funds available for reinvestment in corp" },
];

const dividendVsSalary = [
  {
    factor: "CPP Contributions",
    salary: "Required on salary — up to $3,867 employee + employer contribution (2026)",
    dividend: "No CPP on dividends — saves CPP contributions but also means no CPP retirement benefit",
    verdict: "Salary up to CPP maximum often optimal if pension benefit is valued",
  },
  {
    factor: "RRSP Contribution Room",
    salary: "Salary generates RRSP room (18% of earned income to annual max)",
    dividend: "Dividends do not generate RRSP room — limits RRSP contributions",
    verdict: "Need salary to maximize RRSP if that is a priority",
  },
  {
    factor: "Tax Integration",
    salary: "Deducted at corporate level; taxed at personal marginal rates",
    dividend: "Corporate tax + personal tax on grossed-up dividends — designed to result in similar total tax to salary",
    verdict: "With CCPC: eligible dividends and non-eligible dividends have different gross-up and credit rates",
  },
  {
    factor: "CPP Enhancement (2024+)",
    salary: "Enhanced CPP applies on salary — additional 4% on earnings above $68,500 (CPP2)",
    dividend: "Not applicable",
    verdict: "Salary now carries higher CPP cost due to CPP2 enhancement contributions",
  },
];

export default function OntarioProfessionalCorporationPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-pc" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-pc-faq" type="application/ld+json">{JSON.stringify(faqLd)}</Script>

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
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Corporate Law — Ontario</p>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
            Ontario Professional Corporation: PC Rules for Lawyers, Doctors, and Dentists (2026 Guide)
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
            Ontario professional corporations allow eligible professionals to access the CCPC small business deduction, defer tax by accumulating income in the corporation, and (with post-TOSI planning) distribute income to family shareholders. Corporate lawyers advising physician, lawyer, dentist, and accountant clients on PC incorporation need to understand both the corporate law framework and the tax planning opportunities and traps.
          </p>
          <div style={{ display: "flex", gap: "20px", color: "rgba(240,232,216,0.4)", fontSize: "13px" }}>
            <span>March 2026</span>
            <span>11 min read</span>
            <span>Business Corporations Act (Ontario)</span>
          </div>
        </header>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Eligible Professions and Shareholding Rules in Ontario
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Incorporation as a professional corporation is governed by the Business Corporations Act (Ontario) and the enabling legislation of each profession. Shareholding restrictions vary significantly by profession — understanding these rules is critical before advising clients on share structure.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  {["Profession", "Regulator", "Corporation Type", "Shareholding Rule"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "10px 12px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {eligibleProfessions.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "10px 12px", color: "#C6922A", fontWeight: 500 }}>{row.profession}</td>
                    <td style={{ padding: "10px 12px", color: "rgba(240,232,216,0.7)" }}>{row.regulator}</td>
                    <td style={{ padding: "10px 12px", color: "rgba(240,232,216,0.7)" }}>{row.structure}</td>
                    <td style={{ padding: "10px 12px", color: "rgba(240,232,216,0.55)", fontSize: "12px" }}>{row.shareholderRule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            The Tax Advantage: Small Business Deduction
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            A Canadian Controlled Private Corporation (CCPC) pays approximately 12.2% combined (federal + Ontario) on the first $500,000 of active business income under the Small Business Deduction. Compare this to the top marginal personal rate in Ontario of approximately 53.53% on income over $246,752 in 2026.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Scenario</th>
                  <th style={{ textAlign: "center", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Rate</th>
                  <th style={{ textAlign: "right", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Tax on $500K</th>
                  <th style={{ textAlign: "right", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>After-Tax $500K</th>
                </tr>
              </thead>
              <tbody>
                {taxComparison.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 14px", color: i === 2 ? "#C6922A" : "rgba(240,232,216,0.85)", fontWeight: i === 2 ? 500 : 400 }}>{row.scenario}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#C6922A" }}>{row.rate}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", color: "rgba(240,232,216,0.8)" }}>{row.onFirst500K}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", color: "rgba(240,232,216,0.8)" }}>{row.afterTax500K}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)", lineHeight: 1.6, marginTop: "10px" }}>
            Note: Tax integration means corporate income is eventually taxed at personal rates when paid out as dividends. The benefit is deferral — having more after-tax capital to invest in the corporation in the interim. Rates are approximate 2026 Ontario rates.
          </p>
        </section>

        <section style={{ marginBottom: "56px", padding: "28px 32px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.25)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#e8b84b", marginBottom: "14px" }}>
            Liability Protection: The Common Misconception
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            Professional corporations do not provide liability protection from professional negligence claims. A client injured by a lawyer&apos;s negligence can still sue the individual lawyer personally — the LPC does not shield the lawyer from professional liability. The professional&apos;s regulatory obligation and personal liability remains.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            What a PC does provide: protection from general commercial liabilities of the business (a slip-and-fall at the office, a commercial debt, an employment claim against the firm) — similar to any corporation. This can be meaningful for high-volume practices.
          </p>
          <p style={{ fontSize: "14px", color: "#C6922A", lineHeight: 1.75 }}>
            LAWPRO malpractice insurance remains mandatory for Ontario lawyers regardless of whether they practice through an LPC. The PC does not reduce LAWPRO obligations.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Salary vs Dividend: Key Considerations
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {dividendVsSalary.map((d, i) => (
              <div key={i} style={{ padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>{d.factor}</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "10px" }}>
                  <div>
                    <p style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)", marginBottom: "4px" }}>Salary</p>
                    <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6 }}>{d.salary}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)", marginBottom: "4px" }}>Dividend</p>
                    <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6 }}>{d.dividend}</p>
                  </div>
                </div>
                <p style={{ fontSize: "13px", color: "#C6922A", lineHeight: 1.65 }}>
                  <strong>Key consideration: </strong>{d.verdict}
                </p>
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
            Manage corporate law matters with AI
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus extracts annual filing deadlines, corporate milestones, and key dates from uploaded documents. Built for Ontario corporate lawyers.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Start Free Trial →
          </Link>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "14px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/blog/how-to-incorporate-ontario", label: "How to Incorporate in Ontario" },
              { href: "/blog/ontario-shareholders-agreement", label: "Shareholders Agreements" },
              { href: "/blog/ontario-corporate-annual-maintenance", label: "Corporate Annual Maintenance" },
              { href: "/ontario-corporate-lawyer", label: "Practice Mgmt for Corporate Lawyers" },
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
