import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Commercial Tenancy Guide 2024: Lease Enforcement, Distress, and Termination | Atticus",
  description:
    "Ontario commercial landlord-tenant law: commercial tenancy vs residential, rent distress procedure, 5 grounds for termination, forfeiture and relief, assignment and subletting, repair obligations, and COVID-era lease variation issues.",
  openGraph: {
    title: "Ontario Commercial Tenancy Guide 2024: Lease Enforcement, Distress, and Termination",
    description:
      "Comprehensive guide for Ontario commercial real estate lawyers on lease enforcement — distress, termination, forfeiture, assignment, subletting, and repair obligations under the Commercial Tenancies Act.",
    url: "https://getatticus.ca/blog/ontario-commercial-tenancy",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-commercial-tenancy" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Commercial Tenancy Guide 2024: Lease Enforcement, Distress, and Termination",
      "description": "Ontario commercial landlord-tenant law covering distress, termination grounds, forfeiture, assignment, subletting, and repair obligations under the Commercial Tenancies Act.",
      "url": "https://getatticus.ca/blog/ontario-commercial-tenancy",
      "datePublished": "2024-12-01",
      "dateModified": "2024-12-01",
      "author": { "@type": "Organization", "name": "Atticus" },
      "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a commercial landlord distrain for rent in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under the Commercial Tenancies Act (Ontario), a commercial landlord can distrain (seize and sell) a tenant's goods found on the premises to recover arrears of rent. Distress is a self-help remedy that does not require a court order, but the landlord must follow strict procedural rules. Exempt goods include tools of trade, certain vehicles, and goods held on consignment. Wrongful distress can expose the landlord to significant damages."
          }
        },
        {
          "@type": "Question",
          "name": "Does the Residential Tenancies Act apply to commercial leases in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Residential Tenancies Act, 2006 applies only to residential tenancies. Commercial tenancies in Ontario are governed by the Commercial Tenancies Act and common law lease principles. Commercial landlords and tenants have much greater freedom to negotiate terms, and commercial tenants have fewer statutory protections than residential tenants."
          }
        },
        {
          "@type": "Question",
          "name": "What is relief from forfeiture in Ontario commercial leases?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Relief from forfeiture is an equitable remedy that allows a court to prevent a landlord from terminating a commercial lease despite a breach by the tenant, where it would be unconscionable to enforce the forfeiture. Courts consider the nature of the breach, whether it is capable of remedy, the length of the lease, and the conduct of both parties. The court may grant relief on conditions such as payment of arrears and costs."
          }
        },
        {
          "@type": "Question",
          "name": "Can a commercial tenant assign or sublet in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commercial tenants may assign or sublet only with the landlord's consent unless the lease expressly provides otherwise. The Commercial Tenancies Act does not contain a provision preventing landlords from unreasonably withholding consent to assignment (unlike residential tenancies). The lease terms govern. Many commercial leases require the landlord's consent not to be unreasonably withheld, which creates a contractual obligation courts will enforce."
          }
        }
      ]
    }
  ]
}`;

type ComparisionRow = {
  aspect: string;
  commercial: string;
  residential: string;
};

const comparison: ComparisionRow[] = [
  {
    aspect: "Governing legislation",
    commercial: "Commercial Tenancies Act (Ontario) + common law",
    residential: "Residential Tenancies Act, 2006 (Ontario)",
  },
  {
    aspect: "Dispute resolution",
    commercial: "Ontario Superior Court of Justice",
    residential: "Landlord and Tenant Board (LTB)",
  },
  {
    aspect: "Rent increases",
    commercial: "Freely negotiated; no rent control",
    residential: "Annual guideline increase; rent control applies to most pre-2018 units",
  },
  {
    aspect: "Distress for rent",
    commercial: "Available under Commercial Tenancies Act (self-help)",
    residential: "Abolished; landlord must use LTB eviction process",
  },
  {
    aspect: "Termination on arrears",
    commercial: "Landlord may terminate on notice; forfeiture applies",
    residential: "N4 notice; LTB hearing; tenant can void notice by paying arrears",
  },
  {
    aspect: "Repair obligations",
    commercial: "Negotiated in lease; caveat lessee may apply",
    residential: "Landlord must maintain habitable standard regardless of lease terms",
  },
  {
    aspect: "Assignment / subletting",
    commercial: "Governed entirely by lease terms",
    residential: "Tenant has statutory right to assign; landlord cannot unreasonably refuse",
  },
];

type DistraintStep = {
  step: string;
  description: string;
  note: string;
};

const distraintSteps: DistraintStep[] = [
  {
    step: "Confirm right to distrain",
    description: "Verify rent is in arrears and lease has not been waived, surrendered, or forfeited",
    note: "No right to distrain after lease ends or after acceptance of surrender",
  },
  {
    step: "Retain bailiff",
    description: "Engage a licensed bailiff — landlord cannot conduct distress personally under Ontario law",
    note: "Unlicensed self-help distress is wrongful distress and can be sued upon",
  },
  {
    step: "Levy distress",
    description: "Bailiff enters leased premises during business hours and identifies goods to be seized",
    note: "Entry by force is not permitted; goods must be present on the premises",
  },
  {
    step: "Serve notice on tenant",
    description: "Tenant must receive written notice identifying goods seized and amount of arrears claimed",
    note: "Tenant has 5 days to apply to court for relief from distress",
  },
  {
    step: "Impound or store goods",
    description: "Goods are secured on premises or removed to storage; landlord must take reasonable care",
    note: "Landlord is liable for loss or damage to goods while in their custody",
  },
  {
    step: "Sell if arrears not paid",
    description: "If arrears are not paid within 5 days, bailiff may advertise and sell the goods",
    note: "Surplus proceeds after arrears and costs must be returned to the tenant",
  },
];

type TerminationRow = {
  ground: string;
  procedure: string;
  timing: string;
};

const terminationGrounds: TerminationRow[] = [
  {
    ground: "Non-payment of rent",
    procedure: "Demand for payment + notice of termination as per lease terms; re-entry after lease forfeited",
    timing: "Notice period as specified in lease (typically 3-15 days); immediate re-entry if lease so provides",
  },
  {
    ground: "Expiry of term",
    procedure: "No notice required if fixed-term lease; holdover tenant may be treated as month-to-month",
    timing: "Last day of fixed term; holdover tenancy terminated on proper notice",
  },
  {
    ground: "Breach of lease covenant",
    procedure: "Written notice identifying breach and requiring remedy; re-entry if not remedied",
    timing: "Reasonable time to remedy; commercial leases typically specify cure period (14-30 days)",
  },
  {
    ground: "Insolvency / assignment in bankruptcy",
    procedure: "Trustee in bankruptcy may disclaim lease; landlord ranks as preferred creditor for 3 months rent",
    timing: "30 days after trustee appointment to disclaim; complex if tenant in CCAA protection",
  },
  {
    ground: "Abandonment",
    procedure: "Landlord may re-enter and accept surrender; or keep lease alive and sue for ongoing rent",
    timing: "Election must be clear; acceptance of surrender cannot be undone",
  },
];

type RepairRow = {
  obligation: string;
  landlordDuty: string;
  tenantDuty: string;
};

const repairObligations: RepairRow[] = [
  {
    obligation: "Structural repairs",
    landlordDuty: "Generally responsible unless lease transfers obligation to tenant",
    tenantDuty: "Typically not responsible for structure; depends on lease terms",
  },
  {
    obligation: "Mechanical systems (HVAC)",
    landlordDuty: "Commonly landlord&apos;s obligation in gross lease structures",
    tenantDuty: "Tenant may be responsible in net leases for maintenance and repair",
  },
  {
    obligation: "Interior and fixtures",
    landlordDuty: "Not typically responsible for tenant-installed improvements",
    tenantDuty: "Responsible for interior maintenance; must return premises in good repair at end",
  },
  {
    obligation: "Common areas",
    landlordDuty: "Responsible for maintenance and repair of common areas, parking, and lobby",
    tenantDuty: "Not responsible; may pay via operating cost recovery (OCR) in net leases",
  },
  {
    obligation: "Environmental contamination",
    landlordDuty: "Potentially responsible if pre-existing or from building systems",
    tenantDuty: "Responsible for contamination caused by tenant operations",
  },
];

const faqs = [
  {
    q: "Can a commercial landlord distrain for rent in Ontario?",
    a: "Yes. Under the Commercial Tenancies Act (Ontario), a commercial landlord can distrain (seize and sell) a tenant's goods found on the premises to recover arrears of rent. Distress is a self-help remedy that does not require a court order, but the landlord must follow strict procedural rules. Exempt goods include tools of trade, certain vehicles, and goods held on consignment. Wrongful distress can expose the landlord to significant damages.",
  },
  {
    q: "Does the Residential Tenancies Act apply to commercial leases in Ontario?",
    a: "No. The Residential Tenancies Act, 2006 applies only to residential tenancies. Commercial tenancies in Ontario are governed by the Commercial Tenancies Act and common law lease principles. Commercial landlords and tenants have much greater freedom to negotiate terms, and commercial tenants have fewer statutory protections than residential tenants.",
  },
  {
    q: "What is relief from forfeiture in Ontario commercial leases?",
    a: "Relief from forfeiture is an equitable remedy that allows a court to prevent a landlord from terminating a commercial lease despite a breach by the tenant, where it would be unconscionable to enforce the forfeiture. Courts consider the nature of the breach, whether it is capable of remedy, the length of the lease, and the conduct of both parties. The court may grant relief on conditions such as payment of arrears and costs.",
  },
  {
    q: "Can a commercial tenant assign or sublet in Ontario?",
    a: "Commercial tenants may assign or sublet only with the landlord's consent unless the lease expressly provides otherwise. The Commercial Tenancies Act does not contain a provision preventing landlords from unreasonably withholding consent to assignment (unlike residential tenancies). The lease terms govern. Many commercial leases require the landlord's consent not to be unreasonably withheld, which creates a contractual obligation courts will enforce.",
  },
];

export default function OntarioCommercialTenancyPage() {
  return (
    <>
      <Script id="ontario-commercial-tenancy-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
          <div className="max-w-4xl mx-auto text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-slate-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Ontario Commercial Tenancy Guide</span>
          </div>
        </div>

        {/* Header */}
        <header className="py-16 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Commercial Real Estate
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Commercial Tenancy Guide 2024: Lease Enforcement, Distress, and Termination
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Commercial vs residential tenancy differences, distress procedure for rent arrears, termination grounds, forfeiture and relief, assignment and subletting rights, and repair obligations under Ontario&apos;s Commercial Tenancies Act.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>December 2024</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Atticus Legal Team</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              Commercial tenancy law in Ontario operates in a fundamentally different framework from residential tenancy law. Commercial landlords and tenants have broad freedom to negotiate their lease terms, but that freedom comes with complexity — the absence of the Landlord and Tenant Board&apos;s administrative process means commercial disputes go to the Ontario Superior Court of Justice, with all the cost and delay that entails.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The Commercial Tenancies Act provides the foundational framework, but most rights and obligations are determined by the written lease. Ontario commercial real estate lawyers acting for landlords or tenants need a thorough understanding of the statutory framework and the common law principles that apply when the lease is silent or ambiguous.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the key issues in Ontario commercial tenancy practice: the comparison with residential tenancy, distress for rent, termination and forfeiture, relief from forfeiture, assignment and subletting, and repair and maintenance obligations.
            </p>
          </section>

          {/* Commercial vs Residential */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Commercial vs Residential Tenancy: Key Differences
            </h2>
            <p className="text-slate-700 mb-6">
              The distinction between commercial and residential tenancy determines which statute applies, which forum resolves disputes, and what protections are available. Mixed-use properties require careful analysis of the dominant purpose.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Aspect</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Commercial Tenancy</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Residential Tenancy</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.aspect}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.commercial}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.residential}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Distress */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Distress for Rent: Commercial Landlord&apos;s Self-Help Remedy
            </h2>
            <p className="text-slate-700 mb-6">
              Distress is a unique self-help remedy available only to commercial landlords. It allows seizure and sale of a tenant&apos;s goods without a court order to recover rent arrears. While powerful, it must be executed carefully — wrongful distress exposes the landlord to compensatory and potentially punitive damages.
            </p>
            <div className="space-y-4 mb-6">
              {distraintSteps.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.step}</h3>
                      <p className="text-slate-700 text-sm mb-1">{item.description}</p>
                      <p className="text-amber-700 text-xs italic">{item.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <p className="text-red-900 text-sm">
                <strong>Exempt goods:</strong> The Commercial Tenancies Act exempts from distress: tools of trade necessary for the tenant&apos;s livelihood (up to a prescribed value), food and fuel for immediate use, goods belonging to third parties that are clearly identified, goods in the hands of a trustee in bankruptcy, and goods held on consignment. Seizing exempt goods constitutes wrongful distress.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Grounds for Terminating a Commercial Tenancy in Ontario
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Ground</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Procedure</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {terminationGrounds.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.ground}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.procedure}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Relief from Forfeiture</h3>
            <p className="text-slate-700 mb-4">
              Even after a lease has been validly forfeited, a court may grant relief from forfeiture where it would be unconscionable to enforce the termination. Section 20 of the Commercial Tenancies Act and the court&apos;s equitable jurisdiction provide this remedy.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Factors Favouring Relief</h4>
                <ul className="space-y-1">
                  {[
                    "Breach is capable of remedy (e.g., payment of arrears)",
                    "Long-term lease with significant unexpired term",
                    "Tenant has made substantial improvements",
                    "Tenant acted promptly to seek relief",
                    "Forfeiture is disproportionate to breach",
                  ].map((item, i) => (
                    <li key={i} className="text-green-800 text-sm flex items-start gap-1">
                      <span className="font-bold mt-0.5">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">Factors Against Relief</h4>
                <ul className="space-y-1">
                  {[
                    "Repeated breaches showing disregard for obligations",
                    "Breach is incapable of remedy (illegal use, structural damage)",
                    "Tenant delayed in seeking relief",
                    "Landlord has already re-let the premises",
                    "Unconscionable conduct by the tenant",
                  ].map((item, i) => (
                    <li key={i} className="text-red-800 text-sm flex items-start gap-1">
                      <span className="font-bold mt-0.5">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Repair */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Repair and Maintenance Obligations
            </h2>
            <p className="text-slate-700 mb-6">
              Unlike residential tenancies where the landlord has a minimum statutory standard, commercial lease repair obligations are almost entirely governed by the written lease. Lawyers reviewing commercial leases must carefully analyze who bears responsibility for each category of maintenance.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Obligation</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Landlord Duty</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Tenant Duty</th>
                  </tr>
                </thead>
                <tbody>
                  {repairObligations.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.obligation}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.landlordDuty}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.tenantDuty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 rounded-2xl p-10 text-center text-white mb-12">
            <h2 className="text-2xl font-bold mb-3">
              Manage Commercial Tenancy Files with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">
              Atticus helps Ontario commercial real estate lawyers track lease deadlines, manage trust accounting, and keep files LSO-compliant — all in one platform.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="border-t border-slate-100 pt-8">
            <h3 className="font-semibold text-slate-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-commercial-lease-review", label: "Ontario Commercial Lease Review" },
                { href: "/blog/eviction-process-ontario", label: "Residential Eviction Process Ontario" },
                { href: "/blog/ontario-real-estate-closing", label: "Ontario Real Estate Closing Guide" },
                { href: "/blog/ontario-construction-lien", label: "Ontario Construction Lien Guide" },
                { href: "/blog/ontario-contract-dispute", label: "Ontario Contract Dispute Guide" },
                { href: "/blog/ontario-injunction-process", label: "Ontario Injunction Process" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-amber-700 hover:text-amber-900 font-medium underline underline-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
