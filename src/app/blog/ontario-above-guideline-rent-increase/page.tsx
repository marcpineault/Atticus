import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Above Guideline Rent Increase (AGI): LTB Application, Grounds, and Process",
  description:
    "Complete guide to Ontario above guideline rent increases under the Residential Tenancies Act. Qualifying grounds for AGI applications, Landlord and Tenant Board process, tenant objections, and rent increase guideline rules.",
  alternates: { canonical: "https://getatticus.ca/blog/ontario-above-guideline-rent-increase" },
  openGraph: {
    title: "Ontario Above Guideline Rent Increase: LTB Applications and Process",
    description:
      "Ontario AGI rent increase guide. RTA qualifying grounds, Landlord and Tenant Board process, rent increase guideline, and tenant objection rights.",
    url: "https://getatticus.ca/blog/ontario-above-guideline-rent-increase",
    type: "article",
  },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Above Guideline Rent Increase (AGI): LTB Application, Grounds, and Process",
  "description": "Complete guide to Ontario above guideline rent increases under the Residential Tenancies Act, 2006. Qualifying grounds, LTB application process, tenant objections, and rent increase guideline.",
  "datePublished": "2025-03-05",
  "dateModified": "2025-03-05",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://getatticus.ca/blog/ontario-above-guideline-rent-increase" }
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the rent increase guideline in Ontario for 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario rent increase guideline for 2025 is 2.5%. This is the maximum percentage by which a landlord may increase rent in any 12-month period without applying to the Landlord and Tenant Board for an above guideline increase. The guideline does not apply to vacant units or units first occupied after November 15, 2018."
      }
    },
    {
      "@type": "Question",
      "name": "What are the grounds for an above guideline rent increase in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Residential Tenancies Act s. 126, a landlord may apply for an AGI based on: (1) extraordinary increases in operating costs for utilities, municipal taxes, or insurance beyond the guideline; (2) capital expenditures (improvements, replacements, or new additions to the residential complex); or (3) both. Security services and a defined category of other operating costs also qualify."
      }
    },
    {
      "@type": "Question",
      "name": "Can tenants object to an above guideline rent increase application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. When the LTB issues an Order allowing an AGI, affected tenants may file a Tenant's Motion to Review within 30 days. Tenants may also participate in hearings on the AGI application and raise objections including: the landlord failed to properly maintain the unit, capital expenditures were not necessary, or operating cost increases were not extraordinary."
      }
    }
  ]
}`;

export default function OntarioAGIPage() {
  return (
    <>
      <Script id="schema-article" type="application/ld+json" strategy="beforeInteractive">
        {articleSchema}
      </Script>
      <Script id="schema-faq" type="application/ld+json" strategy="beforeInteractive">
        {faqSchema}
      </Script>
      <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 780, margin: "0 auto", padding: "40px 24px", color: "#111" }}>
        <nav style={{ marginBottom: 32, fontSize: 14, color: "#666" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>Atticus</Link>
          {" › "}
          <Link href="/blog" style={{ color: "#2563eb", textDecoration: "none" }}>Blog</Link>
          {" › "}
          <span>Ontario Above Guideline Rent Increase</span>
        </nav>

        <div style={{ marginBottom: 8 }}>
          <span style={{ background: "#eff6ff", color: "#2563eb", padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>
            Landlord-Tenant Law
          </span>
        </div>

        <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 16, marginTop: 12 }}>
          Ontario Above Guideline Rent Increase (AGI): Qualifying Grounds, LTB Application, and Tenant Rights
        </h1>

        <p style={{ fontSize: 18, color: "#555", marginBottom: 8, lineHeight: 1.5 }}>
          13 min read &nbsp;·&nbsp; March 2025
        </p>

        <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, marginBottom: 40 }}>
          Ontario&apos;s rent control system limits annual rent increases to a provincial guideline — 2.5% for
          2025. When a landlord&apos;s operating costs or capital expenditures significantly exceed what the
          guideline covers, the <em>Residential Tenancies Act, 2006</em> provides a mechanism to apply for an
          above guideline increase (AGI). This guide covers the statutory grounds, the LTB application process,
          tenant objection rights, and how AGI orders work in practice.
        </p>

        <nav style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>Contents</p>
          <ol style={{ paddingLeft: 20, lineHeight: 2.2, margin: 0, fontSize: 14, color: "#2563eb" }}>
            <li><a href="#guideline" style={{ color: "#2563eb" }}>The Rent Increase Guideline</a></li>
            <li><a href="#exemptions" style={{ color: "#2563eb" }}>Units Exempt from Rent Control</a></li>
            <li><a href="#grounds" style={{ color: "#2563eb" }}>Grounds for an AGI Application</a></li>
            <li><a href="#eligible-costs" style={{ color: "#2563eb" }}>Eligible Capital Expenditures</a></li>
            <li><a href="#operating-costs" style={{ color: "#2563eb" }}>Extraordinary Operating Cost Increases</a></li>
            <li><a href="#application" style={{ color: "#2563eb" }}>LTB Application Process (L5 Form)</a></li>
            <li><a href="#tenant-rights" style={{ color: "#2563eb" }}>Tenant Participation and Objections</a></li>
            <li><a href="#order" style={{ color: "#2563eb" }}>How AGI Orders Work</a></li>
            <li><a href="#maintenance-bar" style={{ color: "#2563eb" }}>Maintenance Standard and Work Orders</a></li>
            <li><a href="#new-rent" style={{ color: "#2563eb" }}>Notice Requirements</a></li>
          </ol>
        </nav>

        <section id="guideline" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>1. The Rent Increase Guideline</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Under <em>Residential Tenancies Act, 2006</em> (RTA) s. 120, a landlord may not increase the rent
            charged to a sitting tenant by more than the rent increase guideline in any 12-month period unless
            an LTB order permits a higher increase. The guideline is set annually by the Ministry of Municipal
            Affairs and Housing based on the Ontario Consumer Price Index.
          </p>
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Year</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Guideline</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid #e2e8f0" }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["2025", "2.5%", "Effective January 1, 2025"],
                  ["2024", "2.5%", "Effective January 1, 2024"],
                  ["2023", "2.5%", "Capped at 2.5% — CPI was higher"],
                  ["2022", "1.2%", "Post-pandemic low CPI year"],
                  ["2021", "0%", "COVID-19 freeze"],
                  ["2020", "2.2%", "Pre-pandemic"],
                ].map(([year, guideline, note], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 600 }}>{year}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", fontWeight: 700, color: "#2563eb" }}>{guideline}</td>
                    <td style={{ padding: "10px 14px", borderBottom: "1px solid #e2e8f0", color: "#444" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
            A landlord must give 90 days&apos; written notice before any rent increase — even a within-guideline
            increase. The notice must use Form N1 (Notice of Rent Increase) and specify the new rent amount
            and the effective date.
          </p>
        </section>

        <section id="exemptions" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>2. Units Exempt from Rent Control</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Under RTA s. 6.1, as amended by the <em>More Homes More Choice Act, 2019</em>, rent control does
            not apply to:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>Rental units <strong>first occupied for residential purposes on or after November 15, 2018</strong></li>
            <li>Units in new buildings (condos, purpose-built rental) first occupied after that date</li>
            <li>New basement apartments and secondary suites first occupied after November 15, 2018</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            For exempt units, a landlord may increase rent by any amount between tenancies or during a tenancy
            without LTB approval. The above guideline increase mechanism under s. 126 applies only to units
            subject to rent control — i.e., units first occupied before November 15, 2018.
          </p>
          <div style={{ background: "#fef9c3", border: "1px solid #fde68a", borderRadius: 8, padding: 16, marginTop: 12 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15 }}>Vacancy Decontrol</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              Ontario still has vacancy decontrol — when a tenant vacates a rent-controlled unit, the landlord
              may set the new rent at any amount for the incoming tenant. Rent control only applies to sitting
              tenants within a continuous tenancy.
            </p>
          </div>
        </section>

        <section id="grounds" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>3. Grounds for an AGI Application</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            RTA s. 126 permits a landlord to apply to the LTB for a rent increase above the guideline on one
            or both of two grounds:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "#eff6ff", borderRadius: 10, padding: 20 }}>
              <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 16, color: "#1e40af" }}>Ground 1: Capital Expenditures</p>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#444" }}>
                Eligible capital expenditure — improvements, replacements, or new additions to the residential
                complex. Must meet the definition of &quot;capital expenditure&quot; and be eligible under the
                Act and Regulation.
              </p>
            </div>
            <div style={{ background: "#f0fdf4", borderRadius: 10, padding: 20 }}>
              <p style={{ fontWeight: 700, marginBottom: 8, fontSize: 16, color: "#166534" }}>Ground 2: Extraordinary Operating Cost Increases</p>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#444" }}>
                Extraordinary increases in eligible operating costs — municipal taxes and charges, utilities
                (gas, hydro, water), insurance premiums, or security services.
              </p>
            </div>
          </div>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 16 }}>
            &quot;Extraordinary&quot; means the operating cost increase exceeds the guideline percentage. The
            LTB calculates whether the increase exceeds what the guideline covers based on the building&apos;s
            cost structure.
          </p>
        </section>

        <section id="eligible-costs" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>4. Eligible Capital Expenditures</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            O. Reg. 516/06 under the RTA defines &quot;eligible capital expenditure&quot; and the methodology
            for calculating its impact on rent. Key rules:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>Must be an improvement, replacement, or new addition — not routine maintenance</li>
            <li>
              <strong>Improvements vs. repairs:</strong> Replacing a functional (if aging) boiler is a repair
              (not eligible); replacing a failed boiler with a more efficient system may qualify as an
              improvement or replacement
            </li>
            <li>Capital expenditures are amortized over their useful life — the LTB calculates an annual rental charge per unit based on the cost, useful life, and a prescribed interest rate</li>
            <li>Only the annualized impact on each rental unit is considered, not the total capital cost</li>
            <li>Pre-existing mortgages on capital expenditures may be considered</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            <strong>Examples of eligible capital expenditures:</strong> roof replacement, elevator modernization,
            new boiler or HVAC system, electrical system upgrade, fire safety improvements required by law,
            new windows, garage or parking structure repairs.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            <strong>Examples of ineligible costs:</strong> cosmetic renovations, new furnishings for common
            areas, routine painting and cleaning, management fees, general repairs that do not qualify as
            improvements.
          </p>
        </section>

        <section id="operating-costs" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>5. Extraordinary Operating Cost Increases</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Eligible operating costs under RTA s. 126(7) include:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>Municipal taxes and charges (property taxes and local improvement charges)</li>
            <li>Utilities: natural gas, electricity, water and sewage</li>
            <li>Property insurance premiums</li>
            <li>Security services where they did not previously exist</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            <strong>Management fees, maintenance costs, and mortgage costs are not eligible operating costs</strong>
            for AGI purposes. A landlord who has experienced rising labour costs or inflationary pressures in
            service contracts cannot claim those increases as grounds for an AGI.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            The LTB uses the Rent Adjustment Formula prescribed in O. Reg. 516/06 to calculate the allowable
            increase. The formula compares operating costs in the &quot;base year&quot; to costs in the
            &quot;comparison year&quot; to identify the extraordinary portion.
          </p>
        </section>

        <section id="application" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>6. LTB Application Process (L5 Form)</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            A landlord applies for an AGI using Form L5 filed with the Landlord and Tenant Board:
          </p>
          <ol style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>
              <strong>File Form L5:</strong> The application must specify the grounds (capital expenditures,
              operating costs, or both), the residential complex affected, and the requested increase
            </li>
            <li>
              <strong>Serve notice on tenants:</strong> Landlord must serve a copy of the L5 application on
              every affected tenant within 5 business days of filing
            </li>
            <li>
              <strong>LTB review:</strong> The LTB reviews the application and may request additional
              documentation. A hearing is scheduled
            </li>
            <li>
              <strong>Hearing:</strong> Landlord presents evidence of eligible costs. Tenants may participate
              and cross-examine. LTB member determines the allowable increase
            </li>
            <li>
              <strong>Order issued:</strong> If approved, an Order specifying the increase percentage, effective
              date, and duration is issued
            </li>
            <li>
              <strong>N2 notice:</strong> Landlord must serve Form N2 (Notice of Rent Increase — AGI) on each
              tenant at least 90 days before the increase takes effect
            </li>
          </ol>
        </section>

        <section id="tenant-rights" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>7. Tenant Participation and Objections</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Tenants have the right to participate in AGI hearings and raise objections. Common tenant defences
            and arguments:
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Maintenance Standards (the &quot;Maintenance Bar&quot;)</h3>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Under RTA s. 126(12), the LTB must not make an order granting an AGI if the landlord is in serious
            breach of the duty to maintain and repair the residential complex. Tenants can raise outstanding
            maintenance issues as a bar to the AGI — this is a powerful defence. Outstanding maintenance work
            orders, T6 applications (Maintenance Application), or evidence of serious disrepair can prevent
            the AGI from being granted.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Capital Expenditure Challenges</h3>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>The work was routine maintenance, not an eligible capital expenditure</li>
            <li>The cost claimed was inflated or not actually incurred</li>
            <li>The useful life assigned by the landlord is incorrect — affecting the annual amortization</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Operating Cost Challenges</h3>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>The increase in operating costs was not extraordinary — it was below or at the guideline level</li>
            <li>The cost increase was partly caused by the landlord&apos;s own choices (e.g., switching to more expensive utility provider)</li>
          </ul>
        </section>

        <section id="order" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>8. How AGI Orders Work</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            When the LTB grants an AGI application, the Order specifies:
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>The maximum percentage increase permitted (above the annual guideline)</li>
            <li>The residential complex to which it applies</li>
            <li>The eligible capital expenditures or operating cost increases on which it is based</li>
            <li>The period over which the capital expenditure increase may be collected (the amortization period)</li>
          </ul>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            For capital expenditures, the increase is typically spread over multiple years — reflecting the
            amortized annual cost of the expenditure. Once the amortization period expires, the allowable
            increase from that capital expenditure disappears from the allowable rent.
          </p>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginTop: 12 }}>
            The AGI increase is applied on top of the annual guideline — not instead of it. A landlord with
            an AGI order for 3% in a year when the guideline is 2.5% may increase rent by up to 5.5%.
          </p>
        </section>

        <section id="maintenance-bar" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>9. Maintenance Standard and Work Orders</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            The maintenance bar (s. 126(12)) is the most strategically important tool for tenants opposing an
            AGI. To use it effectively:
          </p>
          <ol style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li>File outstanding T6 maintenance applications before the AGI hearing</li>
            <li>Request the LTB to link the T6 and L5 hearings</li>
            <li>File complaints with Municipal Property Standards if there are property standard bylaw violations</li>
            <li>Gather evidence: photographs, written complaints to landlord, records of repair requests, reports from city property standards officers</li>
          </ol>
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: 16, marginTop: 16 }}>
            <p style={{ fontWeight: 700, marginBottom: 4, fontSize: 15, color: "#991b1b" }}>Important: Timing</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#444" }}>
              The maintenance bar requires a <em>serious</em> breach. Minor, isolated maintenance failures
              are unlikely to be sufficient. Courts and the LTB look at the overall maintenance of the building,
              not isolated incidents. However, systemic failures — especially in common areas or building-wide
              systems (elevators, heating, water) — can meet the serious breach threshold.
            </p>
          </div>
        </section>

        <section id="new-rent" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>10. Notice Requirements</h2>
          <p style={{ fontSize: 16, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
            Procedural requirements for any rent increase (guideline or above guideline):
          </p>
          <ul style={{ paddingLeft: 24, lineHeight: 2, color: "#444", fontSize: 16 }}>
            <li><strong>90 days&apos; written notice:</strong> Required before any rent increase takes effect — Form N1 (guideline) or N2 (AGI)</li>
            <li><strong>12-month gap:</strong> A landlord may only increase rent once in any 12-month period</li>
            <li><strong>N2 for AGI:</strong> Must specify the LTB order number, the approved increase percentage, and the effective date</li>
            <li><strong>Non-compliance:</strong> A rent increase without proper notice is void — the tenant does not owe the increased amount</li>
          </ul>
        </section>

        <section style={{ background: "#eff6ff", borderRadius: 12, padding: 28, marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Manage LTB Applications with Atticus</h2>
          <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
            Ontario paralegals and lawyers handling LTB matters use Atticus to track application deadlines,
            hearing dates, and client files across multiple residential tenancy files — with AI-powered
            briefings and document processing.
          </p>
          <Link
            href="/sign-up"
            style={{
              display: "inline-block",
              background: "#2563eb",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            Start Free Trial
          </Link>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Frequently Asked Questions</h2>
          {[
            {
              q: "What is the rent increase guideline in Ontario for 2025?",
              a: "The Ontario rent increase guideline for 2025 is 2.5%. This is the maximum percentage by which a landlord may increase rent for a sitting tenant in any 12-month period without an LTB order. The guideline does not apply to units first occupied after November 15, 2018.",
            },
            {
              q: "What are the grounds for an above guideline rent increase in Ontario?",
              a: "Under RTA s. 126, a landlord may apply for an AGI based on: (1) extraordinary increases in eligible operating costs (municipal taxes, utilities, insurance, security services); or (2) eligible capital expenditures (improvements, replacements, new additions); or both grounds together.",
            },
            {
              q: "Can tenants object to an above guideline rent increase application?",
              a: "Yes. Tenants may participate in AGI hearings and raise objections including: the maintenance bar (serious breach of landlord's duty to maintain under s. 126(12)), challenges to capital expenditure eligibility, challenges to operating cost calculations, and documentation disputes.",
            },
            {
              q: "Does rent control apply to new buildings in Ontario?",
              a: "No. Under RTA s. 6.1 as amended in 2019, rent control does not apply to units first occupied for residential purposes on or after November 15, 2018. New purpose-built rental buildings, condos, and secondary suites completed after that date are exempt from the rent increase guideline.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i < 3 ? "1px solid #e2e8f0" : "none" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{faq.q}</h3>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Related Articles</h2>
          <ul style={{ paddingLeft: 0, listStyle: "none", lineHeight: 2 }}>
            {[
              { href: "/blog/eviction-process-ontario", label: "Ontario Eviction Process — LTB Applications" },
              { href: "/blog/ontario-residential-tenancy-agreement", label: "Ontario Residential Tenancy Agreement" },
              { href: "/ontario-landlord-tenant-lawyer", label: "Ontario Landlord and Tenant Lawyers" },
              { href: "/ontario-paralegal-software", label: "Practice Management Software for LTB Paralegals" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: "#2563eb", textDecoration: "none", fontSize: 15 }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
