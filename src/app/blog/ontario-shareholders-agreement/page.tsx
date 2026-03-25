import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Shareholders Agreements in Ontario: What to Include and Why (2026 Guide)",
  description:
    "A shareholders agreement is the most important document a corporation can have. Here are the key provisions Ontario corporate lawyers include — drag-along, tag-along, right of first refusal, shotgun clauses, and valuation mechanics.",
  openGraph: {
    title: "Shareholders Agreements in Ontario: What to Include and Why (2026 Guide)",
    description:
      "Key provisions in Ontario shareholders agreements: drag-along, tag-along, ROFR, shotgun buy-sell, valuation, dividend policy, and deadlock resolution. What corporate lawyers draft in 2026.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-shareholders-agreement",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-shareholders-agreement" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shareholders Agreements in Ontario: What to Include and Why (2026 Guide)",
  description:
    "Key provisions in Ontario shareholders agreements: drag-along, tag-along, ROFR, shotgun buy-sell, valuation mechanics, and deadlock resolution.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: "https://getatticus.ca/blog/ontario-shareholders-agreement",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a shareholders agreement required in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A shareholders agreement is not legally required for an Ontario corporation. However, without one, the default rules under the Ontario Business Corporations Act (OBCA) apply — and these defaults often produce outcomes that shareholders did not intend, particularly on the death or departure of a shareholder, a deadlock between equal shareholders, or a sale of the business.",
      },
    },
    {
      "@type": "Question",
      name: "What is a shotgun clause in a shareholders agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A shotgun (buy-sell) clause allows one shareholder to name a price per share at which they will either buy out the other shareholder's interest or sell their own interest to the other shareholder. The other shareholder then chooses to buy or sell at that price. Shotgun clauses are a common deadlock resolution mechanism but can be weaponized by a cash-rich shareholder against a cash-poor one.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a drag-along and tag-along right?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A drag-along right allows a majority shareholder selling to a third party to compel minority shareholders to sell their shares on the same terms — preventing a minority from blocking a beneficial sale. A tag-along (co-sale) right gives minority shareholders the right to participate in a sale by a majority shareholder on the same terms — protecting minority shareholders from being left behind when a majority sells.",
      },
    },
    {
      "@type": "Question",
      name: "What should be in a shareholders agreement for a 50/50 split?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "50/50 ownership creates a significant deadlock risk. Key additional provisions include: a clear decision-making framework specifying which decisions require unanimous consent vs simple majority; a deadlock resolution mechanism (rotating tie-breaker, independent mediator, or shotgun buy-sell clause); clear exit provisions; and a valuation methodology agreed in advance. Without these, a 50/50 deadlock can paralyze the corporation.",
      },
    },
  ],
};

const keyProvisions = [
  {
    category: "Share transfer restrictions",
    provisions: [
      { name: "Right of First Refusal (ROFR)", detail: "Before selling to a third party, a shareholder must first offer their shares to existing shareholders at the same price and terms. Protects shareholder mix." },
      { name: "Right of First Offer (ROFO)", detail: "A selling shareholder must first offer their shares to existing shareholders at a price set by the seller. Other shareholders can accept or decline." },
      { name: "Permitted transfers", detail: "Transfers to spouse, children, family trusts, or holding companies are typically permitted without triggering ROFR — allowing estate planning flexibility." },
    ],
  },
  {
    category: "Exit and liquidity provisions",
    provisions: [
      { name: "Drag-along right", detail: "Majority shareholders can compel minority shareholders to sell on the same terms in a third-party acquisition. Prevents minority veto of a sale." },
      { name: "Tag-along (co-sale) right", detail: "Minority shareholders can participate in any sale by a majority shareholder at the same price and terms. Protects minority from being left behind." },
      { name: "IPO or liquidity event provisions", detail: "Rights and obligations if the company goes public or is sold. Lock-up periods, demand registration rights for significant shareholders." },
    ],
  },
  {
    category: "Deadlock resolution",
    provisions: [
      { name: "Shotgun buy-sell clause", detail: "Either shareholder can name a price; the other chooses to buy or sell at that price. Works well when both shareholders have similar financial resources." },
      { name: "Russian roulette variation", detail: "One party names a price; the other decides. Variations can address the cash-disparity concern by allowing payment over time." },
      { name: "Independent mediator or arbitrator", detail: "For management deadlocks short of a buy-sell trigger, an independent third party can break tie votes. Useful before relationships deteriorate to a buy-sell situation." },
    ],
  },
  {
    category: "Management and governance",
    provisions: [
      { name: "Director appointment rights", detail: "Each shareholder's right to appoint directors proportional to their shareholding. Unanimous shareholder agreement (USA) can restrict directors' powers." },
      { name: "Reserved matters (supermajority)", detail: "Certain decisions — major capital expenditures, acquisition, new equity issuances, change of business — require unanimous or supermajority shareholder approval." },
      { name: "Non-competition obligations", detail: "Shareholders (especially those also employed by the company) may be restricted from competing during their ownership and for a period after selling. Note: the ESA non-compete ban does not apply to share transactions." },
    ],
  },
  {
    category: "Valuation mechanics",
    provisions: [
      { name: "Agreed formula", detail: "A fixed EBITDA multiple or book value formula — simple but may not reflect market value at time of transfer." },
      { name: "Mutual appraisal", detail: "Each side hires an appraiser; if they disagree, a third appraiser decides. Time-consuming and expensive." },
      { name: "Fixed price (updated annually)", detail: "Shareholders agree on a price at each annual meeting. Simple but often not updated, leading to disputes." },
    ],
  },
];

export default function OntarioShareholdersAgreementPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-sha" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-sha-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

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
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Corporate Law</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>March 2026 · 11 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
          Shareholders Agreements in Ontario: What to Include and Why (2026 Guide)
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          A shareholders agreement is the most important document for any multi-shareholder Ontario corporation. Without one, the default OBCA rules govern shareholder relationships — and those defaults were not designed for your specific business. Here is a section-by-section breakdown of what Ontario corporate lawyers include and why each provision matters.
        </p>
      </section>

      <article style={{ padding: "0 24px 80px", maxWidth: "800px", margin: "0 auto" }}>

        <section style={{ marginBottom: "48px" }}>
          <div style={{ padding: "20px 24px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "8px" }}>
            <div style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4", marginBottom: "10px" }}>Why shareholders agreements matter: the equal split problem</div>
            <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, margin: 0 }}>
              Two partners own 50% each and have a falling out. Without a shareholders agreement, neither can force a sale or buy out the other. The corporation is deadlocked — unable to make decisions, take on debt, or pursue new contracts. Without a shotgun clause or other exit mechanism, this dispute ends up in court. A shareholders agreement drafted at the start prevents this outcome at a fraction of the cost.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Key Shareholders Agreement Provisions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {keyProvisions.map((category, ci) => (
              <div key={ci}>
                <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#e8b84b", marginBottom: "16px" }}>{category.category}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {category.provisions.map((item, i) => (
                    <div key={i} style={{ padding: "18px 20px", background: "rgba(255,255,255,0.03)", borderLeft: "3px solid rgba(198,146,42,0.35)", borderRadius: "4px" }}>
                      <div style={{ fontSize: "14px", fontWeight: 500, color: "#C6922A", marginBottom: "6px" }}>{item.name}</div>
                      <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Founders Agreements vs Shareholders Agreements</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            Many startups and tech companies use a &ldquo;founders agreement&rdquo; at early stage before formal incorporation. Ontario corporate lawyers advise that a founders agreement should be converted into a proper shareholders agreement once the corporation is formed. Key distinctions:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "A founders agreement is typically a contract between individuals — it governs the relationship before the corporation exists",
              "A shareholders agreement is between the shareholders and the corporation itself — it governs how the corporation is managed and shares can be transferred",
              "Vesting provisions are often in a founders agreement — founders earn their shares over time (typically 4 years with a 1-year cliff)",
              "Founders agreements should include IP assignment provisions — all IP created for the business must belong to the corporation, not the individual founders",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6 }}>{item}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Shareholders Agreement vs Unanimous Shareholders Agreement (USA)</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            Under the OBCA, a <strong style={{ color: "#faf8f4" }}>unanimous shareholders agreement (USA)</strong> is a special category that can restrict or remove powers from directors and vest them in shareholders. This is useful when shareholders want direct control over management decisions that would otherwise be a board function.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{ padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <div style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "8px" }}>Shareholders Agreement</div>
              <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>
                Governs shareholder relationships, share transfers, and exit rights. Does not override directors&apos; statutory powers. Does not bind future purchasers of shares unless they sign.
              </p>
            </div>
            <div style={{ padding: "20px", background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.15)", borderRadius: "8px" }}>
              <div style={{ fontSize: "14px", fontWeight: 500, color: "#C6922A", marginBottom: "8px" }}>Unanimous Shareholders Agreement</div>
              <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7, margin: 0 }}>
                Can restrict directors&apos; powers and transfer those powers to shareholders. Runs with the shares — new shareholders are bound by it automatically. Requires all shareholders to sign (hence unanimous).
              </p>
            </div>
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
            Managing Corporate Files in Ontario?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus helps Ontario corporate lawyers draft shareholders agreements with AI, track matter deadlines, manage annual corporate maintenance, and keep trust accounting compliant with LSO By-Law 9. 14-day free trial.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 28px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Try Atticus Free →
          </Link>
        </section>

        <section>
          <h3 style={{ fontSize: "16px", color: "rgba(240,232,216,0.5)", marginBottom: "16px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { href: "/blog/how-to-incorporate-ontario", label: "How to Incorporate in Ontario" },
              { href: "/blog/ontario-corporate-annual-maintenance", label: "Corporate Annual Maintenance" },
              { href: "/blog/ontario-partnership-agreement", label: "Partnership Agreements" },
              { href: "/ontario-corporate-lawyer", label: "Atticus for Corporate Lawyers" },
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
