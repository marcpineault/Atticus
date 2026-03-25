import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Land Transfer Tax: Rates, Toronto LTT, and First-Time Buyer Rebates (2026 Guide)",
  description:
    "How Ontario land transfer tax works — provincial LTT rates, Toronto municipal LTT, first-time homebuyer rebates, non-resident speculation tax, new housing rebates, and what Ontario real estate lawyers need to calculate at closing.",
  openGraph: {
    title: "Ontario Land Transfer Tax: Rates, Toronto LTT, and First-Time Buyer Rebates (2026 Guide)",
    description:
      "Ontario LTT rates, Toronto municipal LTT, first-time buyer rebates, NRST, and new housing HST rebates for Ontario real estate lawyers.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-land-transfer-tax",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-land-transfer-tax" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Land Transfer Tax: Rates, Toronto LTT, and First-Time Buyer Rebates (2026 Guide)",
  description:
    "Ontario LTT rates, Toronto municipal LTT, first-time buyer rebates, NRST, and new housing rebates for Ontario real estate lawyers at closing.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-18",
  url: "https://getatticus.ca/blog/ontario-land-transfer-tax",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is Ontario land transfer tax calculated in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ontario LTT is calculated on a marginal rate basis: 0.5% on the first $55,000; 1.0% on $55,001 to $250,000; 1.5% on $250,001 to $400,000; 2.0% on $400,001 to $2,000,000; 2.5% on amounts over $2,000,000 (residential properties with 1-2 single family residences). For a $800,000 purchase: 0.5% x $55,000 ($275) + 1.0% x $195,000 ($1,950) + 1.5% x $150,000 ($2,250) + 2.0% x $400,000 ($8,000) = approximately $12,475.",
      },
    },
    {
      "@type": "Question",
      name: "Who qualifies for the Ontario first-time homebuyer land transfer tax rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To qualify for the Ontario FTHB LTT rebate: (1) The buyer must be a Canadian citizen or permanent resident; (2) At least 18 years old; (3) The property must be used as the buyer's principal residence; (4) The buyer cannot have previously owned a home anywhere in the world; (5) If purchasing with a spouse, the spouse also cannot have owned a home while being that person's spouse. The maximum rebate is $4,000 (offsetting LTT on properties up to approximately $368,333).",
      },
    },
    {
      "@type": "Question",
      name: "What is the Toronto Municipal Land Transfer Tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The City of Toronto levies a municipal land transfer tax (MLTT) on top of the provincial LTT for properties within Toronto city limits. The rates are: 0.5% on the first $55,000; 1.0% on $55,001 to $250,000; 1.5% on $250,001 to $400,000; 2.0% on $400,001 to $2,000,000; 2.5% on amounts over $2,000,000 (for one or two single family residences). Toronto also offers a first-time buyer rebate of up to $4,475 for the MLTT. Toronto buyers effectively pay double land transfer tax.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Ontario Non-Resident Speculation Tax (NRST)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Non-Resident Speculation Tax (NRST) is a 25% tax on the purchase price of residential properties (1-6 units) in Ontario purchased by non-residents of Canada. The NRST is in addition to the provincial LTT and any Toronto MLTT. There are exemptions for protected persons (refugees), international students working in Ontario, and foreign nationals who become permanent residents within 4 years of purchase. The NRST was expanded province-wide in 2022 (previously applied only in the Greater Golden Horseshoe).",
      },
    },
  ],
};

const provincialRates = [
  { bracket: "$0 to $55,000", rate: "0.5%", marginalTax: "$0 to $275" },
  { bracket: "$55,001 to $250,000", rate: "1.0%", marginalTax: "$275 to $2,225" },
  { bracket: "$250,001 to $400,000", rate: "1.5%", marginalTax: "$2,225 to $4,475" },
  { bracket: "$400,001 to $2,000,000", rate: "2.0%", marginalTax: "$4,475 to $36,475" },
  { bracket: "Over $2,000,000 (residential)", rate: "2.5%", marginalTax: "$36,475+" },
];

const purchaseExamples = [
  {
    price: "$500,000",
    provincialLTT: "$6,475",
    torontoMLTT: "$6,475",
    totalInToronto: "$12,950",
    fthbSavingProvincial: "$4,000",
    notes: "Common first-time buyer range",
  },
  {
    price: "$800,000",
    provincialLTT: "$12,475",
    torontoMLTT: "$12,475",
    totalInToronto: "$24,950",
    fthbSavingProvincial: "$4,000",
    notes: "Average Toronto detached home price range",
  },
  {
    price: "$1,200,000",
    provincialLTT: "$20,475",
    torontoMLTT: "$20,475",
    totalInToronto: "$40,950",
    fthbSavingProvincial: "$4,000",
    notes: "Luxury condominium / suburban detached",
  },
  {
    price: "$2,500,000",
    provincialLTT: "$44,975",
    torontoMLTT: "$44,975",
    totalInToronto: "$89,950",
    fthbSavingProvincial: "N/A",
    notes: "Luxury residential; 2.5% top bracket applies over $2M",
  },
];

const exemptionsAndRebates = [
  {
    category: "First-Time Homebuyer Rebate (Provincial)",
    amount: "Up to $4,000",
    requirements: "Canadian citizen or PR; 18+; property used as principal residence; buyer has never owned a home worldwide; if purchasing with spouse, spouse also cannot have owned a home while being their spouse",
    effective: "Reduces LTT to zero on properties up to ~$368,333; partial rebate above that",
  },
  {
    category: "First-Time Homebuyer Rebate (Toronto MLTT)",
    amount: "Up to $4,475",
    requirements: "Same eligibility criteria as provincial rebate; must apply within 18 months of registration",
    effective: "Combined with provincial, Toronto FTHBs can receive up to $8,475 in rebates",
  },
  {
    category: "New Housing HST Rebate",
    amount: "Up to $24,000 federal + provincial",
    requirements: "New construction homes purchased from builder; property used as primary residence; purchase price under $450,000 for full federal rebate (partial to $450,000)",
    effective: "Partially offsets HST on new home purchases; builder typically applies this at closing",
  },
  {
    category: "Spouse Transfer",
    amount: "Full exemption",
    requirements: "Transfer between spouses (married or common law) with no change of beneficial ownership; no consideration passing",
    effective: "Common in matrimonial home transfers on separation; estate planning transfers",
  },
  {
    category: "Family Farm Exemption",
    amount: "Full exemption",
    requirements: "Qualifying family farm transfer between eligible family members; complex eligibility criteria",
    effective: "Applies to agricultural property transfers in succession planning context",
  },
];

const closingChecklistItems = [
  "Calculate provincial LTT on the purchase price (using marginal rates)",
  "Determine if property is in Toronto — if yes, calculate Toronto MLTT separately",
  "Confirm buyer&apos;s FTHB eligibility — verify they have never owned a home worldwide",
  "If purchasing with spouse or partner, confirm spouse&apos;s ownership history",
  "Check for NRST — is any buyer a non-resident of Canada?",
  "If new construction — confirm HST status and whether builder has applied new housing rebate",
  "Verify exemption eligibility for spouse transfers or other exempt transactions",
  "Include LTT and MLTT (if applicable) in closing cost statement of adjustments",
  "Arrange certified funds for LTT — payable at registration through Teraview",
  "File NRST return if applicable — 30 days after closing",
];

export default function OntarioLandTransferTaxPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-ltt" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-ltt-faq" type="application/ld+json">{JSON.stringify(faqLd)}</Script>

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
            Ontario Land Transfer Tax: Rates, Toronto MLTT, and First-Time Buyer Rebates (2026 Guide)
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
            Land transfer tax is one of the largest closing costs Ontario real estate buyers face — and in Toronto, buyers pay it twice. Ontario real estate lawyers must calculate LTT and Toronto MLTT accurately, confirm first-time buyer rebate eligibility, assess NRST exposure for non-resident purchasers, and include everything correctly in the statement of adjustments.
          </p>
          <div style={{ display: "flex", gap: "20px", color: "rgba(240,232,216,0.4)", fontSize: "13px" }}>
            <span>March 2026</span>
            <span>10 min read</span>
            <span>Land Transfer Tax Act, Ontario</span>
          </div>
        </header>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Ontario Provincial LTT Rates (2026)
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Ontario&apos;s land transfer tax is calculated on a marginal basis — like income tax — with progressively higher rates on each additional bracket. The rates below apply to the purchase price of residential and commercial property.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Purchase Price Bracket</th>
                  <th style={{ textAlign: "center", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Rate</th>
                  <th style={{ textAlign: "right", padding: "12px 14px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>Cumulative Tax at Bracket Top</th>
                </tr>
              </thead>
              <tbody>
                {provincialRates.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 14px", color: "rgba(240,232,216,0.85)" }}>{row.bracket}</td>
                    <td style={{ padding: "12px 14px", textAlign: "center", color: "#C6922A", fontWeight: 500 }}>{row.rate}</td>
                    <td style={{ padding: "12px 14px", textAlign: "right", color: "rgba(240,232,216,0.7)" }}>{row.marginalTax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.4)", lineHeight: 1.6, marginTop: "12px" }}>
            Note: The 2.5% top rate applies to the portion of the purchase price over $2,000,000 for residential properties with one or two single-family residences. For other property types (commercial, multi-residential over 2 units), the 2.0% rate applies on all amounts over $400,000.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            LTT Calculation Examples for Common Ontario Purchase Prices
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  {["Price", "Provincial LTT", "Toronto MLTT", "Total in Toronto", "FTHB Saving (Prov.)", "Notes"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "10px 10px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {purchaseExamples.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "10px 10px", color: "#C6922A", fontWeight: 500 }}>{row.price}</td>
                    <td style={{ padding: "10px 10px", color: "rgba(240,232,216,0.8)" }}>{row.provincialLTT}</td>
                    <td style={{ padding: "10px 10px", color: "rgba(240,232,216,0.8)" }}>{row.torontoMLTT}</td>
                    <td style={{ padding: "10px 10px", color: "rgba(240,232,216,0.85)", fontWeight: 500 }}>{row.totalInToronto}</td>
                    <td style={{ padding: "10px 10px", color: "rgba(198,146,42,0.8)" }}>{row.fthbSavingProvincial}</td>
                    <td style={{ padding: "10px 10px", color: "rgba(240,232,216,0.45)", fontSize: "12px" }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "56px", padding: "28px 32px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.25)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#e8b84b", marginBottom: "14px" }}>
            Non-Resident Speculation Tax (NRST): 25% on Ontario Residential Property
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            Ontario&apos;s NRST imposes a 25% tax on the purchase price of residential property (1-6 units) when purchased by a non-resident of Canada. The NRST is payable at closing, in addition to provincial LTT and Toronto MLTT. A $1,000,000 purchase by a non-resident in Toronto involves approximately: $20,475 provincial LTT + $20,475 Toronto MLTT + $250,000 NRST = approximately $291,000 in transaction taxes.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            Key exemptions: permanent residents and Canadian citizens are not subject to NRST; protected persons (convention refugees); international students who are enrolled full-time and have 2+ years remaining; foreign nationals nominated under OINP; foreign nationals who become permanent residents within 4 years of purchase (rebate available on application).
          </p>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7 }}>
            Ontario real estate lawyers must confirm the citizenship and residency status of all buyers before closing and advise non-resident clients of the NRST obligation early in the transaction — not at the closing table.
          </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Exemptions and Rebates
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {exemptionsAndRebates.map((item, i) => (
              <div key={i} style={{ padding: "20px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap", marginBottom: "10px" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#faf8f4" }}>{item.category}</h3>
                  <span style={{ fontSize: "14px", color: "#C6922A", fontWeight: 600, flexShrink: 0 }}>{item.amount}</span>
                </div>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.65, marginBottom: "8px" }}>
                  <strong style={{ color: "rgba(240,232,216,0.4)" }}>Requirements: </strong>{item.requirements}
                </p>
                <p style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.65 }}>
                  <strong style={{ color: "#C6922A" }}>Effect: </strong>{item.effective}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>
            Closing Checklist: LTT Items for Ontario Real Estate Lawyers
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {closingChecklistItems.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", padding: "12px 16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "6px" }}>
                <span style={{ color: "#C6922A", flexShrink: 0, fontWeight: 600, fontSize: "13px" }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6 }}>{item}</p>
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
            Manage real estate closings with AI
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus tracks closing dates, requisition deadlines, and title search deadlines from uploaded documents. Built for Ontario real estate lawyers.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 32px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Start Free Trial →
          </Link>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", color: "rgba(240,232,216,0.4)", marginBottom: "14px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { href: "/blog/ontario-real-estate-closing-checklist", label: "Real Estate Closing Checklist" },
              { href: "/blog/ontario-mortgage-default", label: "Mortgage Default and Power of Sale" },
              { href: "/blog/ontario-residential-tenancy-agreement", label: "Residential Tenancy Agreement" },
              { href: "/ontario-real-estate-lawyer", label: "Practice Mgmt for Real Estate Lawyers" },
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
