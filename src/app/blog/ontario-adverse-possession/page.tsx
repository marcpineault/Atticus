import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Adverse Possession (Squatter's Rights): 10-Year Rule and Land Titles Act (2026 Guide)",
  description:
    "How adverse possession works in Ontario — the 10-year limitation period, the five elements of adverse possession, registered land vs older deeds, the Land Titles Act absolute title bar, and how real estate lawyers handle boundary and encroachment disputes.",
  openGraph: {
    title: "Ontario Adverse Possession (Squatter's Rights): 10-Year Rule and Land Titles Act (2026 Guide)",
    description:
      "Ontario adverse possession: 10-year limitation period, five elements, Land Titles Act absolute title bar, registered land exceptions, and encroachment dispute strategies.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-adverse-possession",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-adverse-possession" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Adverse Possession (Squatter's Rights): 10-Year Rule and Land Titles Act (2026 Guide)",
  description:
    "Ontario adverse possession: 10-year limitation period, five elements, Land Titles Act title bar, and encroachment dispute resolution.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-18",
  url: "https://getatticus.ca/blog/ontario-adverse-possession",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you claim adverse possession in Ontario in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adverse possession is extremely limited in Ontario as of 2026. Since October 2001, most Ontario land has been converted to the Land Titles system under the Land Titles Act, which provides absolute title and does not recognize adverse possession claims. For older land still held under the Registry Act (registry deeds system), the 10-year Limitations Act period may still apply. However, in practice, the vast majority of Ontario real property is in Land Titles, making adverse possession claims rare.",
      },
    },
    {
      "@type": "Question",
      name: "What are the five elements of adverse possession in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To establish adverse possession in Ontario (where still available), a claimant must prove all five elements: (1) Actual use and possession — the claimant physically occupied and used the land; (2) Open and notorious — the possession was visible, not concealed; (3) Exclusive — the claimant possessed the land alone, not shared with the true owner; (4) Continuous — uninterrupted possession for the full 10-year period; (5) Hostile (without permission) — the possession was without the owner's consent. Possession under a licence or with the owner's permission does not qualify.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Registry Act land and Land Titles land in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ontario had two land registration systems. The Registry Act system (older 'deeds' system) recorded documents but did not guarantee title — parties had to search back 40 years and trace chains of title. The Land Titles Act system (Torrens system) provides Crown-guaranteed absolute title — what the register says is conclusive. Ontario converted virtually all property to Land Titles between 1980 and 2001 through POLARIS (Province of Ontario Land Registration Information System). Land Titles land is generally immune from adverse possession.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when a neighbour's structure encroaches on my property in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An encroachment (fence, garage, deck over the property line) is typically addressed through: (1) Survey — commission an Ontario Land Surveyor (OLS) to precisely locate the property boundary; (2) Negotiation — many encroachments are resolved by easement, licence to occupy, or purchase of the encroached strip; (3) Boundary line agreement — registered agreement between neighbours; (4) Court action — an application under the Courts of Justice Act for a declaration of title and order to remove the encroachment. Adverse possession is rarely available for Land Titles property, so the encroaching party usually cannot claim title even after many years.",
      },
    },
  ],
};

const fiveElements = [
  {
    element: "1. Actual Use and Possession",
    description: "The claimant must physically occupy and use the land in a manner consistent with its nature. For a residential strip, this means fencing, landscaping, maintaining it, treating it as one's own. Merely walking across land is insufficient.",
    example: "Building and maintaining a garden, parking vehicles, constructing a structure on the disputed strip of land",
  },
  {
    element: "2. Open and Notorious",
    description: "The possession must be visible and obvious — not concealed or secret. The idea is that the true owner must have an opportunity to observe the adverse use and take action. Underground encroachments can be problematic for this element.",
    example: "A fence built on the wrong side of the property line, visible to any observer including the adjacent owner",
  },
  {
    element: "3. Exclusive",
    description: "The adverse possessor must possess the land exclusively — not sharing it with the true owner or the general public. Use of a public pathway or shared recreational area is not exclusive.",
    example: "Only the claimant uses and controls the disputed strip; the true owner has been effectively excluded from it",
  },
  {
    element: "4. Continuous",
    description: "Possession must be unbroken for the full 10-year period. Seasonal use can be continuous if consistent with the nature of the land (e.g., summer use of a seasonal property). Periods of possession can be &lsquo;tacked&rsquo; — added together — if transferred from one adverse possessor to another.",
    example: "10+ years of consistent use, with no interruption by the true owner asserting title or the possessor abandoning use",
  },
  {
    element: "5. Without Permission (Hostile)",
    description: "The possession must be without the owner&apos;s consent. If the owner granted a licence or gave permission, the possession is not adverse — it is permissive. This is why a written licence or informal &lsquo;that&apos;s fine&rsquo; from a neighbour can be fatal to an adverse possession claim.",
    example: "No written permission, lease, or express consent from the true owner; possessor claims as of right",
  },
];

const encroachmentOptions = [
  {
    option: "Commission an Ontario Land Surveyor",
    description: "First step in any encroachment or boundary dispute. An OLS survey provides precise, legally defensible boundary locations. Without a current survey, neither party knows where the line actually is.",
    cost: "$2,000–$6,000 for a residential boundary survey",
  },
  {
    option: "Negotiated Easement or Licence",
    description: "If the encroaching party has structures over the line, both parties may agree to register a licence to occupy or an easement allowing the encroachment to remain. This avoids the cost of removal and litigation.",
    cost: "Legal fees to negotiate and register the agreement ($1,500–$5,000)",
  },
  {
    option: "Purchase of Encroached Strip",
    description: "The encroaching party purchases the strip of land from the true owner. Requires agreement on price, a survey, and a transfer registered at the Land Registry Office.",
    cost: "Purchase price (negotiated) + legal and registration costs",
  },
  {
    option: "Court Application for Declaration and Removal",
    description: "Where negotiation fails, the true owner can apply to the Superior Court for a declaration of title and an order requiring removal of the encroachment. Courts have discretion to deny removal if the encroachment is minor and removal disproportionately harmful.",
    cost: "Legal fees for litigation ($10,000–$50,000+) depending on complexity",
  },
  {
    option: "Boundary Line Agreement",
    description: "Neighbours can agree to a boundary line and register a boundary line agreement under the Boundaries Act. Less common than surveys but useful for longstanding disputed boundaries.",
    cost: "Legal fees + registration ($3,000–$8,000)",
  },
];

export default function OntarioAdversePossessionPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-adverse" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-adverse-faq" type="application/ld+json">{JSON.stringify(faqLd)}</Script>

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
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Real Estate Law — Ontario</p>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
            Ontario Adverse Possession: 10-Year Rule, Land Titles Act, and Encroachment Disputes (2026 Guide)
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
            Adverse possession — the concept that long-term open use of another&apos;s land can ripen into title — is largely extinguished in modern Ontario real estate law. The Land Titles system, which now covers most Ontario property, provides absolute title and eliminates adverse possession claims. But the doctrine still has relevance for older registry land, and understanding it is essential for handling boundary disputes and encroachment claims.
          </p>
          <div style={{ display: "flex", gap: "20px", color: "rgba(240,232,216,0.4)", fontSize: "13px" }}>
            <span>March 2026</span>
            <span>9 min read</span>
            <span>Land Titles Act, Limitations Act</span>
          </div>
        </header>

        <section style={{ marginBottom: "56px", padding: "24px 28px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.25)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#e8b84b", marginBottom: "12px" }}>
            The Critical Point: Most Ontario Land Is Immune to Adverse Possession
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "10px" }}>
            Since Ontario completed the conversion of land records to the Land Titles (POLARIS) system in 2001, the vast majority of Ontario residential and commercial property is registered in Land Titles. Under s. 51 of the <em>Land Titles Act</em>, registered title is absolute and indefeasible — adverse possession cannot operate against Land Titles land.
          </p>
          <p style={{ fontSize: "15px", color: "#C6922A", lineHeight: 1.75 }}>
            Practical reality: if a client asks about &ldquo;squatter&apos;s rights&rdquo; in Ontario, the first question is whether their land is in Land Titles. If yes — and it almost certainly is — adverse possession is not available. The dispute becomes an encroachment or boundary matter, not a title claim.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            The Five Elements of Adverse Possession in Ontario
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Where adverse possession is still legally available (older Registry Act land), the claimant must prove all five elements for the continuous 10-year period. The burden of proof is on the claimant. Missing any single element defeats the claim.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {fiveElements.map((e, i) => (
              <div key={i} style={{ padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#faf8f4", marginBottom: "8px" }}>{e.element}</h3>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "8px" }}>{e.description}</p>
                <p style={{ fontSize: "13px", color: "#C6922A", lineHeight: 1.65 }}>
                  <strong>Example: </strong>{e.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Encroachment Disputes: Practical Options for Ontario Real Estate Lawyers
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Even where adverse possession is unavailable, encroachments — fences, structures, or improvements built over a property line — create real disputes between neighbours. Here are the practical resolution options Ontario real estate lawyers use.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {encroachmentOptions.map((o, i) => (
              <div key={i} style={{ padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "240px" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>{o.option}</h3>
                  <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{o.description}</p>
                </div>
                <div style={{ flexShrink: 0, fontSize: "12px", color: "rgba(240,232,216,0.45)", padding: "8px 14px", background: "rgba(255,255,255,0.04)", borderRadius: "4px", height: "fit-content", whiteSpace: "nowrap" }}>
                  {o.cost}
                </div>
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
            Manage real estate matters with AI
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus extracts title search deadlines, closing dates, and encumbrance details from uploaded documents. Built for Ontario real estate lawyers.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Start Free Trial →
          </Link>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "14px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/blog/ontario-real-estate-closing-checklist", label: "RE Closing Checklist" },
              { href: "/blog/ontario-land-transfer-tax", label: "Land Transfer Tax" },
              { href: "/blog/ontario-mortgage-default", label: "Mortgage Default and Power of Sale" },
              { href: "/ontario-real-estate-lawyer", label: "Practice Mgmt for RE Lawyers" },
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
