import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario NDAs and Confidentiality Agreements: What Business Lawyers Draft (2026 Guide)",
  description:
    "How non-disclosure agreements and confidentiality agreements work in Ontario — unilateral vs mutual NDAs, definition of confidential information, permitted disclosures, remedies for breach, non-solicitation vs non-compete, and what business lawyers include.",
  openGraph: {
    title: "Ontario NDAs and Confidentiality Agreements: What Business Lawyers Draft (2026 Guide)",
    description:
      "Ontario NDAs and confidentiality agreements: unilateral vs mutual, definition of confidential information, carve-outs, breach remedies, and the non-compete overlap.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-ndas-confidentiality-agreements",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-ndas-confidentiality-agreements" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario NDAs and Confidentiality Agreements: What Business Lawyers Draft (2026 Guide)",
  description:
    "Ontario NDAs: unilateral vs mutual, definition of confidential information, carve-outs, remedies, and drafting considerations for business lawyers.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-18",
  url: "https://getatticus.ca/blog/ontario-ndas-confidentiality-agreements",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are NDAs enforceable in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, NDAs are enforceable in Ontario as contracts if they meet basic contract requirements: offer, acceptance, and consideration. NDAs signed before any confidential information is disclosed must be supported by independent consideration (not just the disclosure itself). Employment NDAs that are overly broad may be struck down as restraints of trade. Courts will consider whether the scope of confidential information is defined reasonably and whether the confidentiality period is reasonable.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a unilateral and mutual NDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A unilateral NDA protects one party's confidential information — one party discloses, the other receives and is bound to keep it confidential. Used when only one party is sharing sensitive information (e.g., a company pitching to a potential investor or partner). A mutual (bilateral) NDA binds both parties to keep each other's information confidential. Used when both parties will be sharing sensitive information with each other (e.g., two companies exploring a joint venture or merger).",
      },
    },
    {
      "@type": "Question",
      name: "What information is excluded from most Ontario NDAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard carve-outs from NDA protection include: (1) Information already in the public domain through no breach of the NDA; (2) Information the receiving party already knew before disclosure (documented by prior records); (3) Information the receiving party independently developed without reference to the disclosed information; (4) Information received from a third party who was not under a confidentiality obligation; (5) Information required to be disclosed by law, court order, or regulatory requirement (with notice to the disclosing party).",
      },
    },
    {
      "@type": "Question",
      name: "What remedies are available for breach of an NDA in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Remedies for NDA breach in Ontario include: (1) Injunctive relief — an interlocutory or permanent injunction to stop ongoing disclosure or use of confidential information; (2) Damages — compensatory damages for losses caused by the breach, which can be difficult to quantify but may include lost profits, damage to competitive position, and lost business opportunities; (3) Account of profits — in equity, the court can order the breaching party to disgorge profits made using the confidential information; (4) Specific performance — if the NDA includes affirmative obligations, courts may order specific performance.",
      },
    },
  ],
};

const keyClausesList = [
  {
    clause: "Definition of Confidential Information",
    issue: "This is the most negotiated clause. Disclosing parties want broad definitions; receiving parties want narrow ones. The definition determines what is protected.",
    bestPractice: "Include: written information marked confidential + oral information confirmed in writing within X days + trade secrets regardless of marking. Exclude: public information, prior knowledge, independent development, third-party disclosure without restriction.",
  },
  {
    clause: "Permitted Uses",
    issue: "The NDA must specify the purpose for which confidential information can be used. Information shared for a due diligence review should not be usable for a competing product launch.",
    bestPractice: "Define the permitted purpose narrowly: &ldquo;solely for the purpose of evaluating a potential acquisition of the Disclosing Party.&rdquo; Include a list of permitted recipients (directors, officers, lawyers, accountants, advisors) with a need-to-know limitation.",
  },
  {
    clause: "Confidentiality Period",
    issue: "Most NDAs set a confidentiality period of 2-5 years. True trade secrets may warrant longer or indefinite protection. Employment NDAs often have no expiry for genuine trade secrets.",
    bestPractice: "Distinguish between categories: general confidential information (3-5 year period) vs trade secrets (indefinite or as long as they remain trade secrets). Courts are more receptive to indefinite protection for genuine trade secrets.",
  },
  {
    clause: "Return or Destruction",
    issue: "What happens to confidential information after the purpose is complete or the NDA expires? Many receiving parties prefer destruction to returning information.",
    bestPractice: "Require written certification of destruction within X days of termination. Carve out: information retained in automated backup systems that cannot practicably be deleted (subject to ongoing confidentiality obligations).",
  },
  {
    clause: "Residuals Clause",
    issue: "A residuals clause allows a receiving party to use &ldquo;general knowledge, skills, and experience retained in unaided memory&rdquo; even after the NDA — potentially allowing them to use learned information in their own products.",
    bestPractice: "As disclosing party: resist or narrow residuals clauses. As receiving party: negotiate for a residuals clause to protect employees who may later work on competing products using only their retained knowledge.",
  },
  {
    clause: "Injunctive Relief",
    issue: "Standard NDA clause acknowledges that monetary damages are inadequate for breach and that injunctive relief should be available without posting a bond.",
    bestPractice: "Include an explicit acknowledgment that breach would cause irreparable harm and that injunctive relief is an appropriate remedy without proof of actual damages — this language supports the RJR-MacDonald irreparable harm analysis.",
  },
];

const ndaTypes = [
  { type: "M&A / Due Diligence NDA", purpose: "Protect target company information shared during acquisition negotiations", keyFeature: "Very broad definition of confidential information; standstill provisions; no-hire clause" },
  { type: "Employment NDA", purpose: "Protect employer trade secrets during and after employment", keyFeature: "Often paired with non-solicitation; must be reasonable in scope; WWFA (2021) bars non-competes for most employees" },
  { type: "Vendor / Supplier NDA", purpose: "Protect information shared with service providers", keyFeature: "Mutual; specify permitted sub-contractor disclosure; data processing addendum if personal information involved" },
  { type: "Joint Venture / Partnership NDA", purpose: "Protect information shared while exploring collaboration", keyFeature: "Mutual; non-solicitation of each other's employees; IP ownership clarity for jointly developed information" },
  { type: "Investor / Pitch NDA", purpose: "Protect startup information shared with potential investors", keyFeature: "Investors often resist signing; use mutual NDAs or watermark decks instead; limit to specific defined disclosures" },
  { type: "Settlement NDA", purpose: "Prohibit parties from disclosing terms of a settlement agreement", keyFeature: "May intersect with public interest — Ontario Bill 26 (2022) limits use of NDAs in workplace harassment settlements" },
];

export default function OntarioNDAsPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-ndas" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-ndas-faq" type="application/ld+json">{JSON.stringify(faqLd)}</Script>

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
            Ontario NDAs and Confidentiality Agreements: What Business Lawyers Draft (2026 Guide)
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
            Non-disclosure agreements are among the most commonly drafted documents in Ontario business law — and among the most commonly done poorly. The definition of confidential information, the permitted use restrictions, and the remedies clause are where the real work happens. This guide covers what Ontario corporate lawyers need to know.
          </p>
          <div style={{ display: "flex", gap: "20px", color: "rgba(240,232,216,0.4)", fontSize: "13px" }}>
            <span>March 2026</span>
            <span>10 min read</span>
            <span>Ontario Contract Law</span>
          </div>
        </header>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Types of NDAs Ontario Business Lawyers Draft
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 12px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>NDA Type</th>
                  <th style={{ textAlign: "left", padding: "12px 12px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Purpose</th>
                  <th style={{ textAlign: "left", padding: "12px 12px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Key Drafting Feature</th>
                </tr>
              </thead>
              <tbody>
                {ndaTypes.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 12px", color: "#C6922A", fontWeight: 500 }}>{row.type}</td>
                    <td style={{ padding: "12px 12px", color: "rgba(240,232,216,0.75)" }}>{row.purpose}</td>
                    <td style={{ padding: "12px 12px", color: "rgba(240,232,216,0.55)", fontSize: "12px" }}>{row.keyFeature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "24px" }}>
            Key Clauses and Drafting Considerations
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {keyClausesList.map((c, i) => (
              <div key={i} style={{ padding: "24px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#faf8f4", marginBottom: "10px" }}>{c.clause}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "10px" }}>
                  <strong style={{ color: "rgba(240,232,216,0.4)", fontWeight: 500 }}>Issue: </strong>{c.issue}
                </p>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>
                  <strong style={{ color: "#C6922A", fontWeight: 500 }}>Best practice: </strong>{c.bestPractice}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px", padding: "28px 32px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.25)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#e8b84b", marginBottom: "14px" }}>
            Working for Workers Act and Employment NDAs
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            The <em>Working for Workers Act, 2021</em> (Ontario) banned non-compete agreements for most employees — with limited exceptions for executives and on the sale of a business. This affects how Ontario corporate lawyers draft employment NDAs: the NDA can include non-solicitation of clients and employees, but a clause that prevents an employee from working in a competing business will be unenforceable for most employees.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            The distinction between a confidentiality obligation (permissible) and a non-compete disguised as an NDA (not permissible) can be fact-specific. A confidentiality clause that effectively prevents someone from working in their field may be treated as an indirect non-compete.
          </p>
          <p style={{ fontSize: "15px", color: "#C6922A", lineHeight: 1.75 }}>
            Ontario Bill 26 (2022) further limited use of NDAs in workplace harassment, sexual harassment, discrimination, and assault settlements — public interest in transparency can override standard NDA provisions in these cases.
          </p>
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
            Draft NDAs and commercial agreements faster with AI
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus AI drafts NDAs, engagement letters, and corporate documents grounded in your matter files. Built for Ontario corporate and business lawyers.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Start Free Trial →
          </Link>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "14px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/blog/ontario-non-compete-agreement", label: "Non-Compete Agreements Ontario" },
              { href: "/blog/ontario-shareholders-agreement", label: "Shareholders Agreements" },
              { href: "/blog/ontario-employment-standards-act", label: "Employment Standards Act" },
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
