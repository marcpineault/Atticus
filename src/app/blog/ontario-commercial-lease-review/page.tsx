import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Commercial Lease Review: Key Clauses Business Lawyers Negotiate (2026 Guide)",
  description:
    "What Ontario commercial lawyers look for in a commercial lease — rent and additional rent, exclusivity clauses, assignment and subletting, personal guarantees, demolition clauses, HVAC obligations, and what to negotiate before signing.",
  openGraph: {
    title: "Ontario Commercial Lease Review: Key Clauses Business Lawyers Negotiate (2026 Guide)",
    description:
      "Key commercial lease clauses Ontario lawyers negotiate: rent, additional rent, exclusivity, assignment, personal guarantee, demolition clauses, and HVAC.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-commercial-lease-review",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-commercial-lease-review" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Commercial Lease Review: Key Clauses Business Lawyers Negotiate (2026 Guide)",
  description:
    "Key commercial lease clauses Ontario lawyers negotiate: rent, additional rent, exclusivity, assignment, personal guarantee, demolition clauses, and HVAC obligations.",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  datePublished: "2026-03-18",
  url: "https://getatticus.ca/blog/ontario-commercial-lease-review",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is additional rent in an Ontario commercial lease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Additional rent (also called operating costs or CAM charges) is a tenant's share of the property's operating expenses beyond base rent — typically including property taxes, insurance, maintenance, HVAC, management fees, and common area costs. In a triple-net lease (NNN), tenants pay all operating costs. Tenants should always request a cap on controllable operating costs and audit rights for landlord calculations.",
      },
    },
    {
      "@type": "Question",
      name: "Can a tenant assign a commercial lease in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Ontario commercial leases require landlord consent for assignment or subletting, but the landlord generally cannot withhold consent unreasonably. The Commercial Tenancies Act (Ontario) does not have the same anti-discrimination rules as residential tenancies. The tenant must review the exact assignment clause — some require landlord consent at absolute discretion, which is very restrictive and should be negotiated down.",
      },
    },
    {
      "@type": "Question",
      name: "What is a demolition clause in a commercial lease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A demolition or redevelopment clause allows the landlord to terminate the lease early if they plan to demolish or substantially renovate the building. For small businesses, this is extremely dangerous — the tenant can be displaced with relatively short notice (often 6-12 months) and no compensation. If a demolition clause cannot be removed, tenants should negotiate: longer notice periods, substantial relocation assistance, and the right to terminate if offered unsuitable premises.",
      },
    },
    {
      "@type": "Question",
      name: "Should a personal guarantee be negotiated in a commercial lease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Personal guarantees expose individual principals of a corporate tenant to personal liability for all lease obligations. Ontario commercial lawyers routinely negotiate: time-limiting the guarantee (e.g., first 2-3 years only), capping the guarantee amount (e.g., 6 months' rent), adding a good guy clause (liability ends on compliant early surrender), and carving out consequential damages. Landlords rarely drop guarantees entirely, but scope is always negotiable.",
      },
    },
  ],
};

const keyClauseGroups = [
  {
    group: "Rent Structure",
    clauses: [
      {
        clause: "Base Rent",
        issue: "Rent per square foot per year, usually calculated on rentable area (which includes a load factor of 10-20% above usable area).",
        negotiate: "Confirm the measurement basis. Request a rent-free period for fit-up. Negotiate stepped rent increases rather than annual CPI escalation.",
      },
      {
        clause: "Additional Rent / Operating Costs",
        issue: "Tenant&apos;s proportionate share of building operating costs (taxes, insurance, management, maintenance). Often called TMI (taxes, maintenance, insurance) or CAM charges.",
        negotiate: "Cap on controllable operating costs (typically 3-5% annual increase). Exclude capital expenditure from operating costs. Right to audit landlord&apos;s statements. Exclude management fees above 3%.",
      },
      {
        clause: "Percentage Rent",
        issue: "Retail leases often include percentage rent — a portion of gross sales above a natural breakpoint paid to the landlord.",
        negotiate: "Careful definition of &ldquo;gross sales&rdquo; — exclude returns, sales taxes, employee sales, ecommerce. Confirm the breakpoint calculation.",
      },
    ],
  },
  {
    group: "Premises and Use",
    clauses: [
      {
        clause: "Permitted Use",
        issue: "Narrowly drafted permitted use clauses can prevent tenants from expanding their business, adding services, or responding to market changes during a long lease term.",
        negotiate: "Negotiate the broadest possible permitted use clause: &ldquo;any legal use&rdquo; or a broad category that captures potential business evolution.",
      },
      {
        clause: "Exclusivity",
        issue: "An exclusivity clause prevents the landlord from leasing to competing businesses in the same complex or shopping centre.",
        negotiate: "Define &ldquo;competing business&rdquo; precisely. Include carve-outs for existing tenants but not renewals. Specify remedy (rent abatement, termination right) if landlord breaches.",
      },
      {
        clause: "Landlord&apos;s Work / Condition of Premises",
        issue: "What state must the landlord deliver the premises in? &ldquo;As is&rdquo; vs &ldquo;base building standard&rdquo; vs &ldquo;turnkey&rdquo; — each has significant cost implications.",
        negotiate: "Written schedule detailing exactly what landlord will deliver before occupancy. Attach drawings. Include a walkthrough and punch list process.",
      },
    ],
  },
  {
    group: "Tenant Protections",
    clauses: [
      {
        clause: "Assignment and Subletting",
        issue: "Most commercial leases require landlord consent to assign or sublet. Landlord consent rights range from &ldquo;not to be unreasonably withheld&rdquo; to &ldquo;absolute discretion&rdquo;.",
        negotiate: "Push for &ldquo;not to be unreasonably withheld or delayed.&rdquo; Require landlord to respond within 15-30 days or consent deemed given. Allow assignment to affiliates and on a sale of the business without landlord consent.",
      },
      {
        clause: "Renewal Options",
        issue: "Renewal options give the tenant the right to renew the lease for additional terms, usually at market rent. But if the option is not exercised on time — to the day — it is typically lost.",
        negotiate: "Multiple renewal options. A reasonable market rent determination process (binding arbitration if parties disagree). Notice period of 6-12 months rather than 9-12 months before expiry.",
      },
      {
        clause: "Right of First Refusal / Right of First Offer",
        issue: "ROFR gives the tenant the right to match any third-party offer for adjacent space or for the entire property. ROFO gives the tenant the right to be offered the space first.",
        negotiate: "ROFR for adjacent premises if expansion is contemplated. Include in lease rather than side letter (which may not bind successor landlords).",
      },
    ],
  },
  {
    group: "Risk Clauses",
    clauses: [
      {
        clause: "Personal Guarantee",
        issue: "Landlords routinely require principals of a corporate tenant to personally guarantee all lease obligations. An unlimited guarantee on a 10-year lease is potentially catastrophic exposure.",
        negotiate: "Time-limited guarantee (years 1-2 only). Capped amount (6-12 months&apos; rent). Good guy clause. Burn-off provisions as the tenant establishes payment history.",
      },
      {
        clause: "Demolition / Redevelopment Clause",
        issue: "Permits the landlord to terminate the lease early to demolish or substantially renovate. Can result in displacement with 6-12 months notice and no compensation.",
        negotiate: "Remove entirely if possible. If landlord insists: 24-month minimum notice; substantial relocation assistance ($X per year of lease remaining); right to terminate if landlord fails to commence within 12 months of notice.",
      },
      {
        clause: "HVAC Repair Obligations",
        issue: "In many Ontario commercial leases, the tenant is responsible for maintaining and replacing HVAC systems servicing their premises. A mid-lease HVAC replacement can cost $30,000-$80,000.",
        negotiate: "Landlord responsibility for HVAC capital replacement; tenant responsible only for maintenance. Or: cap tenant HVAC obligation at a fixed annual dollar amount. Or: new HVAC warranty on landlord if existing system is over a specified age.",
      },
      {
        clause: "Indemnity and Liability Cap",
        issue: "Commercial leases often include broad indemnification clauses holding the tenant liable for virtually everything that happens on the premises.",
        negotiate: "Mutual indemnification. Cap tenant liability at insurance policy limits. Carve out landlord&apos;s own negligence from tenant&apos;s indemnification obligation.",
      },
    ],
  },
];

const leaseTypes = [
  {
    type: "Gross Lease",
    tenantPays: "Base rent only",
    landlordPays: "All operating costs (taxes, insurance, maintenance)",
    common: "Office buildings, some retail",
    risk: "Landlord absorbs cost increases; often higher base rent",
  },
  {
    type: "Net Lease (N)",
    tenantPays: "Base rent + property taxes",
    landlordPays: "Insurance, maintenance",
    common: "Single-tenant industrial",
    risk: "Tenant exposed to property tax increases",
  },
  {
    type: "Double Net (NN)",
    tenantPays: "Base rent + taxes + insurance",
    landlordPays: "Structural maintenance",
    common: "Retail, industrial",
    risk: "Tenant exposed to taxes and insurance fluctuations",
  },
  {
    type: "Triple Net (NNN)",
    tenantPays: "Base rent + all operating costs",
    landlordPays: "Nothing (structural only, sometimes)",
    common: "Retail chains, large industrial",
    risk: "Maximum tenant exposure; negotiate cost caps and audit rights",
  },
];

export default function OntarioCommercialLeaseReviewPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-commercial-lease" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-commercial-lease-faq" type="application/ld+json">{JSON.stringify(faqLd)}</Script>

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
          <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6922A", marginBottom: "16px" }}>Commercial Law — Ontario</p>
          <h1 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
            Ontario Commercial Lease Review: Key Clauses Business Lawyers Negotiate (2026 Guide)
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(240,232,216,0.6)", lineHeight: 1.8, marginBottom: "20px" }}>
            A commercial lease is often the second-largest business commitment a company makes after hiring staff. Ontario commercial lawyers reviewing leases for business clients need to understand rent structure, operating cost exposure, demolition risk, personal guarantee scope, and the many clauses that shift financial risk from landlord to tenant.
          </p>
          <div style={{ display: "flex", gap: "20px", color: "rgba(240,232,216,0.4)", fontSize: "13px" }}>
            <span>March 2026</span>
            <span>12 min read</span>
            <span>Ontario Commercial Tenancies Act</span>
          </div>
        </header>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>
            Commercial Lease Types: Understanding the Rent Structure
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
            Before reviewing any commercial lease clause, understand what type of lease the client is entering. The type determines how much of the property&apos;s operating costs flow through to the tenant as &ldquo;additional rent.&rdquo;
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(198,146,42,0.3)" }}>
                  {["Lease Type", "Tenant Pays", "Landlord Pays", "Common In", "Key Risk"].map((h, i) => (
                    <th key={i} style={{ textAlign: "left", padding: "12px 12px", color: "rgba(240,232,216,0.5)", fontWeight: 400 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leaseTypes.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "12px 12px", color: "#C6922A", fontWeight: 500 }}>{row.type}</td>
                    <td style={{ padding: "12px 12px", color: "rgba(240,232,216,0.8)" }}>{row.tenantPays}</td>
                    <td style={{ padding: "12px 12px", color: "rgba(240,232,216,0.7)" }}>{row.landlordPays}</td>
                    <td style={{ padding: "12px 12px", color: "rgba(240,232,216,0.6)" }}>{row.common}</td>
                    <td style={{ padding: "12px 12px", color: "rgba(240,232,216,0.55)", fontSize: "12px" }}>{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "28px" }}>
            Key Clauses to Review and Negotiate
          </h2>
          {keyClauseGroups.map((group, gi) => (
            <div key={gi} style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#e8b84b", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid rgba(198,146,42,0.2)" }}>
                {group.group}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {group.clauses.map((c, ci) => (
                  <div key={ci} style={{ padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px" }}>
                    <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#faf8f4", marginBottom: "10px" }}>{c.clause}</h4>
                    <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "10px" }}>
                      <strong style={{ color: "rgba(240,232,216,0.4)", fontWeight: 500 }}>Issue: </strong>{c.issue}
                    </p>
                    <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>
                      <strong style={{ color: "#C6922A", fontWeight: 500 }}>Negotiate: </strong>{c.negotiate}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: "56px", padding: "28px 32px", background: "rgba(198,146,42,0.08)", border: "1px solid rgba(198,146,42,0.25)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#e8b84b", marginBottom: "14px" }}>
            Ontario Commercial Tenancies Act: What Lawyers Need to Know
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            Unlike residential tenancies, commercial leases in Ontario are largely governed by the contract between the parties rather than statute. The <em>Commercial Tenancies Act</em>, RSO 1990, c L.7 provides a minimal framework — covering issues like distress rights, notice requirements for forfeiture, and basic assignment rules — but it does not impose rent controls, right of renewal, or the extensive tenant protections of the Residential Tenancies Act.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.8)", lineHeight: 1.75, marginBottom: "12px" }}>
            The practical consequence: every right the tenant wants must be negotiated into the lease. If it is not in the lease, the tenant does not have it. This makes thorough lease review, not pro forma review, essential.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.6)", lineHeight: 1.75 }}>
            Landlord distress (the right to seize a tenant&apos;s goods for unpaid rent) remains available in Ontario as a remedy under the Commercial Tenancies Act, though it is procedurally complex and has significant limitations in practice.
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
            Manage commercial lease matters with AI
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.55)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
            Atticus automatically extracts deadlines, renewal notice dates, and key obligations from uploaded commercial leases. Built for Ontario corporate and commercial lawyers.
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
              { href: "/blog/ontario-partnership-agreement", label: "Partnership Agreements" },
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
