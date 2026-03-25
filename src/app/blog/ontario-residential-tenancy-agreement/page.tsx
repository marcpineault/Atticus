import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Standard Lease Agreement: Residential Tenancy Guide for 2026",
  description:
    "Ontario's mandatory Standard Form of Lease (Form 2229E), Residential Tenancies Act requirements, key tenancy provisions, and what landlords and tenants need to know about their rights and obligations in 2026.",
  openGraph: {
    title: "Ontario Standard Lease Agreement: Residential Tenancy Guide for 2026",
    description:
      "The mandatory Ontario Standard Form of Lease, RTA requirements, rent increase rules, tenant rights, and what landlord-tenant lawyers advise in 2026.",
    type: "article",
    url: "https://getatticus.ca/blog/ontario-residential-tenancy-agreement",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-residential-tenancy-agreement" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ontario Standard Lease Agreement: Residential Tenancy Guide for 2026",
  description:
    "Ontario's mandatory Standard Form of Lease, Residential Tenancies Act requirements, rent increase rules, and what landlord-tenant lawyers advise in 2026.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  author: { "@type": "Organization", name: "Atticus" },
  publisher: { "@type": "Organization", name: "Atticus", url: "https://getatticus.ca" },
  mainEntityOfPage: "https://getatticus.ca/blog/ontario-residential-tenancy-agreement",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Ontario Standard Form of Lease mandatory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Since April 30, 2018, landlords of most private residential rental units in Ontario must use the Standard Form of Lease (Form 2229E). If a landlord does not provide the standard lease within 21 days of a tenant's written request, the tenant may withhold one month's rent.",
      },
    },
    {
      "@type": "Question",
      name: "Can a landlord include additional clauses in the Ontario standard lease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in the additional terms section (Schedule A). However, any clause that conflicts with the Residential Tenancies Act is void. Landlords cannot add clauses that waive the tenant's RTA rights — for example, a no-pet clause is not enforceable under the RTA, even if both parties sign it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the rent increase guideline in Ontario for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Ontario government sets an annual rent increase guideline. For 2026, the guideline is 2.5%. Landlords can increase rent once every 12 months, with 90 days' written notice, by up to the guideline amount without LTB approval. Increases above the guideline require an above-guideline rent increase application to the LTB.",
      },
    },
    {
      "@type": "Question",
      name: "Can a landlord evict a tenant for personal use in Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A landlord, or the landlord's close family member, can give a tenant an N12 notice to end a tenancy for personal use with 60 days' notice and one month's compensation. However, the landlord or family member must genuinely intend to occupy the unit. Filing an N12 in bad faith is a serious offence under the RTA.",
      },
    },
    {
      "@type": "Question",
      name: "What properties are exempt from the Ontario Residential Tenancies Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Several property types are exempt from most RTA protections, including: owner-occupied buildings with 3 or fewer rental units (partially exempt), most social housing, vacation property rentals, care homes, university/college residences, and commercial tenancies. Landlord-tenant lawyers should always confirm whether the RTA applies before advising clients.",
      },
    },
  ],
};

const keyProvisions = [
  {
    section: "Section 3: Contact information",
    description: "Full legal names of all landlords and tenants, rental unit address, and postal address for service of notices.",
  },
  {
    section: "Section 4: Rent",
    description: "Monthly rent amount, payment due date, and acceptable payment methods. Cannot include penalties for paying by cheque or requiring pre-authorized debit only.",
  },
  {
    section: "Section 5: Tenancy term",
    description: "Whether fixed-term or month-to-month. At the end of a fixed term, the tenancy automatically becomes month-to-month — the landlord cannot require the tenant to sign a new lease.",
  },
  {
    section: "Section 6: Rent deposit",
    description: "Last month's rent deposit. Maximum one month's rent. Must be applied to the last month of tenancy, not used as a damage deposit. Landlord must pay annual interest on the deposit equal to the rent increase guideline.",
  },
  {
    section: "Section 8: Utilities",
    description: "Which utilities are included in rent and which are the tenant's responsibility. Must be stated clearly to avoid disputes.",
  },
  {
    section: "Section 9: Smoking",
    description: "Whether smoking is permitted in the rental unit or on the property. This clause is enforceable unlike no-pet clauses.",
  },
  {
    section: "Section 11: Additional terms (Schedule A)",
    description: "Landlord-added clauses. Void if they contradict the RTA. Tenants should review these carefully — some landlords add unenforceable restrictions.",
  },
];

const tenantRights = [
  { right: "Right to quiet enjoyment", detail: "Landlords cannot harass tenants or interfere with their right to enjoy the property. Entering without 24 hours' written notice (except emergencies) is a violation." },
  { right: "Rent control", detail: "Rent cannot be increased more than once every 12 months and only by the guideline amount without LTB approval. Applies to units rented before November 15, 2018. New builds are exempt from rent control." },
  { right: "No-pet clause void", detail: "Landlords cannot enforce no-pet clauses under the RTA. A landlord can apply to evict a tenant whose pet causes damage or significant noise, but a blanket no-pet policy is unenforceable." },
  { right: "Maintenance obligation", detail: "The landlord must maintain the property in a good state of repair. Tenants can file a T6 maintenance complaint with the LTB if the landlord fails to repair after written notice." },
  { right: "Termination protections", detail: "Tenants can only be evicted through the LTB process. Self-help evictions — changing locks, removing possessions, cutting utilities — are illegal and expose landlords to significant damages." },
];

const landlordRights = [
  { right: "Rent payment", detail: "Landlords can serve an N4 notice to terminate for non-payment when rent is at least one day late. 14 days to pay or vacate for monthly tenancies." },
  { right: "Entry for inspection", detail: "24 hours' written notice required for most entry. No notice required for emergencies." },
  { right: "Damage recovery", detail: "Landlords can apply to the LTB on an L2 to recover costs for damage caused by tenants beyond normal wear and tear." },
  { right: "Rent deposit interest", detail: "Landlords hold the last month's rent deposit and pay interest annually at the guideline rate." },
  { right: "Sublet approval", detail: "Tenants must get the landlord's consent to sublet. Landlords cannot arbitrarily withhold consent but can refuse for legitimate reasons." },
];

export default function OntarioResidentialTenancyAgreementPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#07070a", color: "#f0e8d8", minHeight: "100vh" }}>
      <Script id="ld-ont-tenancy" type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
      <Script id="ld-ont-tenancy-faq" type="application/ld+json">{JSON.stringify(faqJsonLd)}</Script>

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
          <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C6922A", background: "rgba(198,146,42,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Landlord-Tenant</span>
          <span style={{ fontSize: "12px", color: "rgba(240,232,216,0.4)" }}>March 2026 · 11 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, lineHeight: 1.2, color: "#faf8f4", marginBottom: "20px" }}>
          Ontario Standard Lease Agreement: Residential Tenancy Guide for 2026
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(240,232,216,0.65)", lineHeight: 1.8 }}>
          Ontario&apos;s Residential Tenancies Act creates one of the most heavily regulated residential tenancy frameworks in Canada. The mandatory Standard Form of Lease, strict eviction procedures, and strong tenant protections create a complex practice area for landlord-tenant lawyers. Here is what landlords, tenants, and their lawyers need to know in 2026.
        </p>
      </section>

      <article style={{ padding: "0 24px 80px", maxWidth: "800px", margin: "0 auto" }}>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>The Mandatory Standard Form of Lease</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            Since April 30, 2018, landlords renting most private residential units in Ontario must use the <strong style={{ color: "#faf8f4" }}>Standard Form of Lease (Form 2229E)</strong>. The standard form was updated in 2024. If a landlord does not provide it when requested in writing:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
            <li style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6 }}>The tenant can withhold one month&apos;s rent if the landlord fails to provide the lease within 21 days of a written request.</li>
            <li style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.6 }}>If still not provided after an additional 30 days, the tenant can keep that withheld month&apos;s rent as compensation.</li>
          </ul>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8 }}>
            The standard form is mandatory even if both parties want to use a different lease format. Private leases that purport to waive RTA rights are void to the extent they conflict with the Act.
          </p>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Key Sections of the Standard Lease</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {keyProvisions.map((item, i) => (
              <div key={i} style={{ padding: "18px 20px", background: "rgba(255,255,255,0.03)", borderLeft: "3px solid rgba(198,146,42,0.35)", borderRadius: "4px" }}>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#C6922A", marginBottom: "6px" }}>{item.section}</div>
                <div style={{ fontSize: "14px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7 }}>{item.description}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Rent Increase Rules in Ontario</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "20px" }}>
            Ontario has two rent increase regimes depending on when the unit was first rented:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
            <div style={{ padding: "24px", background: "rgba(198,146,42,0.06)", border: "1px solid rgba(198,146,42,0.2)", borderRadius: "8px" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#C6922A", marginBottom: "8px" }}>Units rented before Nov 15, 2018</div>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7, margin: 0 }}>
                Rent control applies. Annual increases limited to the guideline (2.5% for 2026). Above-guideline increases require LTB approval. 90 days&apos; written notice required.
              </p>
            </div>
            <div style={{ padding: "24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#faf8f4", marginBottom: "8px" }}>New units (first rented after Nov 15, 2018)</div>
              <p style={{ fontSize: "14px", color: "rgba(240,232,216,0.7)", lineHeight: 1.7, margin: 0 }}>
                Exempt from rent control. Landlords can set rent increases above the guideline without LTB approval. However, 90 days&apos; written notice is still required for any increase.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Tenant Rights Under the RTA</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {tenantRights.map((item, i) => (
              <div key={i} style={{ padding: "18px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px" }}>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "6px" }}>{item.right}</div>
                <div style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "20px" }}>Landlord Rights Under the RTA</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {landlordRights.map((item, i) => (
              <div key={i} style={{ padding: "18px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px" }}>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#faf8f4", marginBottom: "6px" }}>{item.right}</div>
                <div style={{ fontSize: "13px", color: "rgba(240,232,216,0.6)", lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#faf8f4", marginBottom: "16px" }}>Properties Exempt from the RTA</h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.7)", lineHeight: 1.8, marginBottom: "16px" }}>
            Not all rental properties are governed by the Residential Tenancies Act. Landlord-tenant lawyers must confirm coverage before advising. Exempt properties include:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Owner-occupied buildings with 3 or fewer units (partially exempt — no eviction protections)",
              "Social housing under s. 7 of the RTA",
              "Most university and college residences",
              "Commercial tenancies (governed by the Commercial Tenancies Act)",
              "Vacation or tourist properties where occupancy is 30 days or less",
              "Care homes where the landlord provides care services",
              "Certain co-operative housing",
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
            Managing Landlord-Tenant Files?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(240,232,216,0.65)", lineHeight: 1.7, marginBottom: "24px" }}>
            Atticus helps Ontario landlord-tenant lawyers track LTB hearing dates, N-form deadlines, and limitation periods. AI document processing extracts key dates from leases and notices automatically. Purpose-built for Ontario practice.
          </p>
          <Link href="/sign-up" style={{ display: "inline-block", background: "#C6922A", color: "#07070a", padding: "14px 28px", textDecoration: "none", fontSize: "15px", fontWeight: 600, borderRadius: "4px" }}>
            Try Atticus Free for 14 Days →
          </Link>
        </section>

        <section>
          <h3 style={{ fontSize: "16px", color: "rgba(240,232,216,0.5)", marginBottom: "16px", fontWeight: 400 }}>Related guides</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { href: "/blog/eviction-process-ontario", label: "Eviction Process in Ontario" },
              { href: "/ontario-landlord-tenant-lawyer", label: "Atticus for LTB Lawyers" },
              { href: "/blog/missing-limitation-periods-ontario", label: "Missing Limitation Periods" },
              { href: "/calculator", label: "Limitation Period Calculator" },
              { href: "/blog/ontario-human-rights-complaint", label: "Human Rights Complaint Guide" },
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
