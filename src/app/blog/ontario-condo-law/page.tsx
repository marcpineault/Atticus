import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Condominium Law Guide 2024 | Condo Act, Status Certificates & Disputes",
  description:
    "Complete guide to Ontario condominium law: Condominium Act 1998, status certificates, common elements, reserve fund, CAT disputes, unit owner rights, and condo corporation governance.",
  openGraph: {
    title: "Ontario Condominium Law Guide 2024 | Condo Act, Status Certificates & Disputes",
    description:
      "Everything Ontario real estate lawyers need to know about condo law — Condominium Act 1998, status certificate review, CAT tribunal, reserve fund studies, and unit owner disputes.",
    url: "https://getatticus.ca/blog/ontario-condo-law",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Condominium Law Guide 2024: Condo Act, Status Certificates, and Dispute Resolution",
      "description": "Comprehensive guide to Ontario condominium law covering the Condominium Act 1998, status certificate review on purchase, common element rules, reserve fund requirements, and the Condominium Authority Tribunal.",
      "url": "https://getatticus.ca/blog/ontario-condo-law",
      "datePublished": "2024-11-25",
      "dateModified": "2024-11-25",
      "author": {
        "@type": "Organization",
        "name": "Atticus"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Atticus",
        "url": "https://getatticus.ca"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a status certificate in Ontario condo law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A status certificate is a document issued by a condominium corporation under s. 76 of the Condominium Act, 1998 that discloses the financial and legal state of the corporation at a particular date. It includes common expense arrears for the unit, the reserve fund balance, any special assessments, pending litigation, insurance details, and the declaration, by-laws, and rules. Purchasers have 10 days after receiving a status certificate to rescind the purchase agreement."
          }
        },
        {
          "@type": "Question",
          "name": "What does the Condominium Authority Tribunal (CAT) handle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Condominium Authority Tribunal (CAT) is an online tribunal that handles disputes between unit owners and condo corporations. Its jurisdiction includes: records disputes (access to corporation records), disputes about common elements, parking, and lockers, nuisance, annoyance, and disruption complaints, disputes about chargebacks and fines, and disputes about compliance with the Condominium Act, declaration, by-laws, or rules."
          }
        },
        {
          "@type": "Question",
          "name": "Can a condo corporation add special assessments to unit owners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under s. 84 of the Condominium Act, 1998, a condo corporation can levy special assessments to cover unexpected expenses or fund the reserve fund if it is insufficient. Special assessments must be approved by the board and disclosed to owners. Unlike common expenses, special assessments are not routine. An inadequately funded reserve fund is a major red flag in a status certificate review."
          }
        },
        {
          "@type": "Question",
          "name": "What rights do condo unit owners have against the corporation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the Condominium Act, 1998, unit owners have the right to: attend and vote at owner meetings, receive audited financial statements, access corporation records within specified timeframes, requisition an owner meeting with 15% of unit owners, apply to the CAT for record access and compliance disputes, and challenge corporation decisions through oppression-style remedies. Owners also have the right to enforce the corporation's obligations under the declaration and by-laws."
          }
        }
      ]
    }
  ]
}`;

type StatusCertItem = {
  item: string;
  description: string;
  redFlags: string;
};

const statusCertItems: StatusCertItem[] = [
  {
    item: "Common Expense Arrears",
    description: "Any outstanding common expenses owed by the unit being purchased",
    redFlags: "Any arrears; new owner inherits unpaid amounts",
  },
  {
    item: "Reserve Fund Balance",
    description: "Amount in the reserve fund for major repairs and replacements",
    redFlags: "Balance less than 25% of estimated annual contributions; recent special assessment",
  },
  {
    item: "Reserve Fund Study",
    description: "Most recent reserve fund study showing projected needs",
    redFlags: "Study more than 3 years old; significant underfunding identified",
  },
  {
    item: "Special Assessments",
    description: "Any current or anticipated special assessments",
    redFlags: "Active special assessment; looming major repair without funding",
  },
  {
    item: "Pending Litigation",
    description: "Any litigation involving the corporation",
    redFlags: "Active lawsuits; TARION claims; significant indemnification demands",
  },
  {
    item: "Insurance",
    description: "Corporation insurance coverage details",
    redFlags: "Coverage below replacement value; recent claims; rider exclusions",
  },
  {
    item: "Budget and Common Expenses",
    description: "Current year budget and monthly common expense fees",
    redFlags: "Deficit budget; recent fee increase; planned fee increase",
  },
  {
    item: "Leases and Tenancies",
    description: "Any registered leases affecting the unit",
    redFlags: "Existing tenancy with protected tenant; restricted rental building",
  },
];

type CondoType = {
  type: string;
  description: string;
  commonElements: string;
  ownership: string;
};

const condoTypes: CondoType[] = [
  {
    type: "Standard (Freehold) Condominium",
    description: "Most common type; units individually owned; common elements shared",
    commonElements: "Hallways, elevators, roof, exterior walls, amenities",
    ownership: "Unit = exclusive; common elements = percentage interest",
  },
  {
    type: "Leasehold Condominium",
    description: "Corporation leases land from owner; owners have leasehold interest in units",
    commonElements: "Same as standard but on leased land",
    ownership: "Time-limited; lease expiry affects value",
  },
  {
    type: "Common Elements Condominium",
    description: "No individually owned units; common elements and associated parcels",
    commonElements: "Road network, recreational facilities, parking areas",
    ownership: "Parcel of tied land; unit interests tied to specific lots",
  },
  {
    type: "Vacant Land Condominium",
    description: "Lots of land with shared infrastructure; owner builds on lot",
    commonElements: "Roads, sewers, utilities, amenity buildings",
    ownership: "Owner constructs building on lot; common elements shared",
  },
  {
    type: "Phased Condominium",
    description: "Corporation adds phases over time; declaration amended for each phase",
    commonElements: "Shared progressively as phases added",
    ownership: "Phase rights set out in disclosure documents",
  },
];

const faqs = [
  {
    q: "What is a status certificate in Ontario condo law?",
    a: "A status certificate is a document issued by a condominium corporation under s. 76 of the Condominium Act, 1998 that discloses the financial and legal state of the corporation at a particular date. It includes common expense arrears for the unit, the reserve fund balance, any special assessments, pending litigation, insurance details, and the declaration, by-laws, and rules. Purchasers have 10 days after receiving a status certificate to rescind the purchase agreement.",
  },
  {
    q: "What does the Condominium Authority Tribunal (CAT) handle?",
    a: "The Condominium Authority Tribunal (CAT) is an online tribunal that handles disputes between unit owners and condo corporations. Its jurisdiction includes: records disputes (access to corporation records), disputes about common elements, parking, and lockers, nuisance, annoyance, and disruption complaints, disputes about chargebacks and fines, and disputes about compliance with the Condominium Act, declaration, by-laws, or rules.",
  },
  {
    q: "Can a condo corporation add special assessments to unit owners?",
    a: "Yes. Under s. 84 of the Condominium Act, 1998, a condo corporation can levy special assessments to cover unexpected expenses or fund the reserve fund if it is insufficient. Special assessments must be approved by the board and disclosed to owners. Unlike common expenses, special assessments are not routine. An inadequately funded reserve fund is a major red flag in a status certificate review.",
  },
  {
    q: "What rights do condo unit owners have against the corporation?",
    a: "Under the Condominium Act, 1998, unit owners have the right to attend and vote at owner meetings, receive audited financial statements, access corporation records within specified timeframes, requisition an owner meeting with 15% of unit owners, apply to the CAT for record access and compliance disputes, and challenge corporation decisions through oppression-style remedies.",
  },
];

export default function OntarioCondoLawPage() {
  return (
    <>
      <Script id="ontario-condo-law-schema" type="application/ld+json">
        {schemaJson}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-6 pt-6">
          <nav className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:text-slate-700">
              Blog
            </Link>{" "}
            / Ontario Condo Law
          </nav>
        </div>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 py-12">
          <div className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Real Estate Law
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Ontario Condominium Law Guide 2024: Condo Act, Status Certificates,
            and Dispute Resolution
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            A comprehensive reference for Ontario real estate lawyers — covering
            the Condominium Act 1998, status certificate review on purchase, CAT
            tribunal jurisdiction, reserve fund requirements, and unit owner
            rights.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>By Atticus Legal Team</span>
            <span>•</span>
            <span>November 2024</span>
            <span>•</span>
            <span>16 min read</span>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 pb-20">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Ontario has one of the most active condominium markets in North
              America, and condominium law touches virtually every real estate
              practice. The{" "}
              <em>Condominium Act, 1998</em>, S.O. 1998, c 19 is the primary
              legislation, supplemented by the{" "}
              <em>Condominium Authority Tribunal Act, 2017</em> and the
              Condominium Act regulations.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the five types of Ontario condominiums, the
              critical elements of status certificate review, common element
              governance, reserve fund obligations, and the Condominium
              Authority Tribunal&apos;s expanding jurisdiction.
            </p>
          </section>

          {/* Condo Types */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Five Types of Ontario Condominiums
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Type</th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Description
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Ownership
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {condoTypes.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.type}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.description}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.ownership}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Status Certificate */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Status Certificate Review on Purchase
            </h2>
            <p className="text-slate-700 mb-4">
              Under s. 73(1) of the Condominium Act, 1998, a purchaser is
              entitled to receive a status certificate within 10 days of
              request. Once received, the purchaser has 10 days to rescind the
              agreement without penalty. Reviewing the status certificate is
              arguably the most important due diligence step in a condo
              purchase.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">
                      Item to Review
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      What It Discloses
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Red Flags
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {statusCertItems.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.item}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.description}
                      </td>
                      <td className="px-4 py-3 text-red-600 text-xs">
                        {row.redFlags}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm">
                <span className="font-semibold">10-Day Rescission Right:</span>{" "}
                Once a purchaser receives the status certificate, they have 10
                days to rescind the agreement of purchase and sale (s. 73(2)
                Condominium Act). If the status certificate reveals a material
                problem, this rescission right is the purchaser&apos;s primary remedy
                without suffering financial loss.
              </p>
            </div>
          </section>

          {/* Reserve Fund */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Reserve Fund Requirements
            </h2>
            <p className="text-slate-700 mb-4">
              Under ss. 93-94 of the Condominium Act, every condominium
              corporation must maintain a reserve fund for the repair and
              replacement of major common elements. The fund must be based on a
              reserve fund study conducted at prescribed intervals.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Reserve Fund Study",
                  text: "Required every 3 years; physical inspection component every other study; estimates cost of major repairs over 30-year period.",
                },
                {
                  title: "Minimum Contributions",
                  text: "Corporation must contribute amounts that keep the fund above the minimum threshold recommended in the reserve fund study.",
                },
                {
                  title: "Separate Account",
                  text: "Reserve fund must be held in a separate account from operating funds; investments limited to prescribed instruments.",
                },
                {
                  title: "Deemed Underfunding",
                  text: "If the reserve fund falls below minimum thresholds, the board must take remedial action — which typically means a special assessment.",
                },
                {
                  title: "Disclosure on Purchase",
                  text: "Status certificate must disclose reserve fund balance and the most recent reserve fund study date — critical for purchaser due diligence.",
                },
                {
                  title: "Remedies for Inadequate Fund",
                  text: "Unit owners can apply to court under s. 134 Condominium Act to compel the corporation to comply with reserve fund obligations.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                >
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CAT */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Condominium Authority Tribunal (CAT)
            </h2>
            <p className="text-slate-700 mb-4">
              The CAT is an online administrative tribunal established under the{" "}
              <em>Condominium Authority Tribunal Act, 2017</em>. It provides a
              faster, lower-cost alternative to court for condominium disputes.
            </p>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-4">
              <h3 className="font-semibold text-teal-900 mb-3">
                CAT Jurisdiction (as expanded in 2021-2022)
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  "Access to corporation records",
                  "Parking and locker disputes",
                  "Common element disputes",
                  "Nuisance and annoyance complaints",
                  "Fines and chargebacks",
                  "Indemnification and compliance",
                  "Pets and animals disputes",
                  "Compliance with declaration, by-laws, rules",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-teal-800">
                    <span className="text-teal-600">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-slate-600 text-sm">
              <span className="font-semibold">CAT Process:</span> Online
              negotiation → online mediation → adjudicative hearing. Most cases
              resolve at earlier stages. Decisions can be appealed to Divisional
              Court on questions of law.
            </p>
          </section>

          {/* Unit Owner Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Unit Owner Rights and Remedies
            </h2>
            <div className="space-y-3">
              {[
                {
                  right: "Meeting and Voting Rights",
                  description:
                    "Attend annual general meetings; vote on elections, by-laws, and extraordinary matters; proxy voting permitted",
                  statute: "ss. 45-52 Condominium Act",
                },
                {
                  right: "Financial Disclosure",
                  description:
                    "Receive audited financial statements; budget disclosure; reserve fund study",
                  statute: "ss. 66-68 Condominium Act",
                },
                {
                  right: "Records Access",
                  description:
                    "Access corporation records within 30 days of request (status certificates within 10 days); CAT jurisdiction for non-compliance",
                  statute: "ss. 55, 73 Condominium Act",
                },
                {
                  right: "Requisition a Meeting",
                  description:
                    "Owners of 15% or more of units can requisition an owners&apos; meeting; board must call within 35 days",
                  statute: "s. 46(2) Condominium Act",
                },
                {
                  right: "Court Applications",
                  description:
                    "Apply to Superior Court under s. 134 for any breach of the Condominium Act, declaration, by-laws, or rules; broad remedial jurisdiction",
                  statute: "s. 134 Condominium Act",
                },
                {
                  right: "Oppression-Style Remedy",
                  description:
                    "Court may grant relief where corporation&apos;s conduct is oppressive, unfairly prejudicial, or unfairly disregards unit owner&apos;s interests",
                  statute: "s. 135 Condominium Act",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white rounded-xl p-4 border border-slate-200"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-semibold text-slate-900 text-sm">
                        {item.right}
                      </span>
                      <span className="bg-teal-100 text-teal-700 text-xs font-medium px-2 py-0.5 rounded-full">
                        {item.statute}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-slate-200 rounded-xl p-6 bg-white"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 text-white rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Manage Your Real Estate and Condo Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Atticus helps Ontario real estate lawyers manage condo and
              freehold transactions, track closing deadlines, and stay LSO
              compliant with built-in trust accounting and HST billing.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">
              Related Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/ontario-real-estate-purchase-agreement",
                  label: "Ontario Real Estate Purchase Agreements",
                },
                {
                  href: "/blog/ontario-land-transfer-tax",
                  label: "Ontario Land Transfer Tax",
                },
                {
                  href: "/blog/ontario-adverse-possession",
                  label: "Ontario Adverse Possession",
                },
                {
                  href: "/blog/ontario-mortgage-default",
                  label: "Ontario Mortgage Default",
                },
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
