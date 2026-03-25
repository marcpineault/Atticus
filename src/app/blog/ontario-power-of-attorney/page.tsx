import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Power of Attorney Guide 2024 | POA for Property & Personal Care",
  description:
    "Complete guide to Ontario Powers of Attorney: POA for Property vs Personal Care, capacity requirements, attorney duties, revocation, and Substitute Decisions Act rules.",
  openGraph: {
    title: "Ontario Power of Attorney Guide 2024 | POA for Property & Personal Care",
    description:
      "Everything Ontario lawyers need to know about Powers of Attorney — Substitute Decisions Act requirements, POA for Property, Continuing POA, and POA for Personal Care.",
    url: "https://getatticus.ca/blog/ontario-power-of-attorney",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Power of Attorney Guide 2024: Property, Personal Care, and Capacity",
      "description": "Comprehensive guide to Ontario Powers of Attorney under the Substitute Decisions Act, 1992 — POA for Property, Continuing POA, POA for Personal Care, capacity requirements, and attorney duties.",
      "url": "https://getatticus.ca/blog/ontario-power-of-attorney",
      "datePublished": "2024-11-20",
      "dateModified": "2024-11-20",
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
          "name": "What is the difference between a Continuing Power of Attorney for Property and a regular Power of Attorney in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A regular (non-continuing) Power of Attorney for Property automatically terminates if the grantor becomes mentally incapable. A Continuing Power of Attorney for Property (CPOA) survives mental incapacity and remains valid even if the grantor later loses the mental capacity to manage their property. The CPOA must be signed by two witnesses who are not the attorney and must explicitly state it is a continuing power of attorney."
          }
        },
        {
          "@type": "Question",
          "name": "What mental capacity is required to grant a Power of Attorney for Property in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under s. 8 of the Substitute Decisions Act, 1992, a person has capacity to grant a POA for Property if they know what property they have and its approximate value, are aware of their obligations to dependants, know that the attorney will be able to do anything with the property that they could do (except make a will), know that the attorney must account for dealings with the property, know they may revoke the POA, and appreciate that the attorney may not have their best interests at heart."
          }
        },
        {
          "@type": "Question",
          "name": "Who can witness a Power of Attorney in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the Substitute Decisions Act, a POA requires two witnesses. The following cannot be witnesses: the attorney or their spouse/partner, the grantor's spouse, child, or anyone the grantor has treated as a child, anyone whose property is being managed by the grantor as a guardian, and the grantor's care provider or their employees. A commissioner for taking oaths does not need to witness the signature."
          }
        },
        {
          "@type": "Question",
          "name": "What are an attorney's duties under the Substitute Decisions Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under s. 38 of the Substitute Decisions Act, an attorney for property must: act with honesty, integrity, and in good faith; explain the attorney's powers; keep records of all transactions; invest trust property in authorized investments; keep the grantor's money separate from their own; and provide accounts if requested. The attorney must also consult with the grantor and act in accordance with the grantor's prior capable wishes."
          }
        }
      ]
    }
  ]
}`;

type POAType = {
  type: string;
  governs: string;
  capacity: string;
  whenEffective: string;
  witnesses: string;
  statute: string;
};

const poaTypes: POAType[] = [
  {
    type: "Continuing Power of Attorney for Property (CPOA)",
    governs: "Financial and property matters",
    capacity: "Must have capacity when signed; survives incapacity",
    whenEffective: "Immediately on signing (or as specified)",
    witnesses: "2 witnesses (neither can be attorney)",
    statute: "Substitute Decisions Act, 1992, s. 7",
  },
  {
    type: "Non-Continuing Power of Attorney for Property",
    governs: "Specific property transactions",
    capacity: "Must have capacity; terminates on incapacity",
    whenEffective: "On signing",
    witnesses: "2 witnesses or notarized",
    statute: "Powers of Attorney Act",
  },
  {
    type: "Power of Attorney for Personal Care (POAPC)",
    governs: "Health care, shelter, nutrition, hygiene, clothing",
    capacity: "Must have capacity when signed; activates on incapacity",
    whenEffective: "Only when grantor becomes incapable",
    witnesses: "2 witnesses (not attorney; not care provider)",
    statute: "Substitute Decisions Act, 1992, s. 46",
  },
];

type AttorneyDuty = {
  duty: string;
  property: boolean;
  personalCare: boolean;
  notes: string;
};

const attorneyDuties: AttorneyDuty[] = [
  {
    duty: "Act in grantor's best interests",
    property: true,
    personalCare: true,
    notes: "Property: financial interests; Personal Care: health and safety",
  },
  {
    duty: "Consult with grantor",
    property: true,
    personalCare: true,
    notes: "Must consider grantor's wishes expressed while capable",
  },
  {
    duty: "Keep records and accounts",
    property: true,
    personalCare: false,
    notes: "Property attorney must keep detailed financial records",
  },
  {
    duty: "Keep property separate",
    property: true,
    personalCare: false,
    notes: "Cannot mix attorney's own funds with grantor's funds",
  },
  {
    duty: "Act in accordance with SDA",
    property: true,
    personalCare: true,
    notes: "Must comply with all Substitute Decisions Act requirements",
  },
  {
    duty: "Inform grantor of decisions",
    property: false,
    personalCare: true,
    notes:
      "Must explain health-care decisions to grantor to the extent possible",
  },
  {
    duty: "Authorized investments only",
    property: true,
    personalCare: false,
    notes: "Trustee Act authorized investments; must diversify",
  },
  {
    duty: "No conflict of interest",
    property: true,
    personalCare: true,
    notes: "Cannot benefit personally unless authorized by grantor",
  },
];

type RevocationMethod = {
  method: string;
  requirements: string;
  effect: string;
};

const revocationMethods: RevocationMethod[] = [
  {
    method: "Written Revocation",
    requirements:
      "Must be in writing, signed, witnessed by 2 persons; notice given to attorney",
    effect: "Revokes the POA immediately upon attorney receiving notice",
  },
  {
    method: "Grantor Regaining Capacity",
    requirements:
      "If POA was springing (only effective on incapacity), capacity is restored",
    effect: "CPOA remains valid but attorney's authority may not be needed",
  },
  {
    method: "New Inconsistent POA",
    requirements: "Subsequent POA with inconsistent terms replaces earlier",
    effect: "Earlier POA revoked to extent of inconsistency",
  },
  {
    method: "Grantor's Death",
    requirements: "Death of grantor terminates all POAs",
    effect: "Estate governed by will or intestacy, not POA",
  },
  {
    method: "Court Order",
    requirements: "Court can revoke POA on finding of attorney misconduct",
    effect: "Mandatory revocation; court may appoint guardian instead",
  },
];

const faqs = [
  {
    q: "What is the difference between a Continuing Power of Attorney for Property and a regular Power of Attorney in Ontario?",
    a: "A regular (non-continuing) Power of Attorney for Property automatically terminates if the grantor becomes mentally incapable. A Continuing Power of Attorney for Property (CPOA) survives mental incapacity and remains valid even if the grantor later loses the mental capacity to manage their property. The CPOA must be signed by two witnesses who are not the attorney and must explicitly state it is a continuing power of attorney.",
  },
  {
    q: "What mental capacity is required to grant a Power of Attorney for Property in Ontario?",
    a: "Under s. 8 of the Substitute Decisions Act, 1992, a person has capacity to grant a POA for Property if they know what property they have and its approximate value, are aware of their obligations to dependants, know that the attorney will be able to do anything with the property that they could do (except make a will), know that the attorney must account for dealings with the property, know they may revoke the POA, and appreciate that the attorney may not have their best interests at heart.",
  },
  {
    q: "Who can witness a Power of Attorney in Ontario?",
    a: "Under the Substitute Decisions Act, a POA requires two witnesses. The following cannot be witnesses: the attorney or their spouse/partner, the grantor's spouse, child, or anyone the grantor has treated as a child, anyone whose property is being managed by the grantor as a guardian, and the grantor's care provider or their employees.",
  },
  {
    q: "What are an attorney's duties under the Substitute Decisions Act?",
    a: "Under s. 38 of the Substitute Decisions Act, an attorney for property must: act with honesty, integrity, and in good faith; keep records of all transactions; invest trust property in authorized investments; keep the grantor's money separate from their own; and provide accounts if requested. The attorney must also consult with the grantor and act in accordance with the grantor's prior capable wishes.",
  },
];

export default function OntarioPowerOfAttorneyPage() {
  return (
    <>
      <Script id="ontario-power-of-attorney-schema" type="application/ld+json">
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
            / Ontario Power of Attorney
          </nav>
        </div>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 py-12">
          <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Wills &amp; Estates
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Ontario Power of Attorney Guide 2024: Property, Personal Care, and
            Capacity
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            A complete reference for Ontario estate lawyers — covering the
            Substitute Decisions Act requirements for Continuing POA for
            Property, POA for Personal Care, capacity standards, attorney
            duties, and revocation.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>By Atticus Legal Team</span>
            <span>•</span>
            <span>November 2024</span>
            <span>•</span>
            <span>14 min read</span>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 pb-20">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Powers of Attorney are among the most important documents an
              Ontario resident can have. Without them, a family member who loses
              capacity faces a lengthy and expensive court-supervised guardianship
              process. With properly drafted POAs, an attorney can manage
              property and personal care decisions immediately.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Ontario&apos;s Powers of Attorney are governed primarily by the{" "}
              <em>Substitute Decisions Act, 1992</em> (SDA) and, for
              non-continuing POAs, the <em>Powers of Attorney Act</em>, RSO
              1990. This guide covers the key distinctions, execution
              requirements, and attorney obligations Ontario estate lawyers need
              to know.
            </p>
          </section>

          {/* Three Types */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Ontario Powers of Attorney: Three Types
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Type</th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Governs
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Effective When
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Witnesses
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {poaTypes.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.type}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.governs}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.whenEffective}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.witnesses}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm">
                <span className="font-semibold">Important:</span> A will does
                not authorize an attorney to act. The attorney&apos;s authority
                ends at death — the estate is then governed by the will and
                estate trustee.
              </p>
            </div>
          </section>

          {/* Capacity */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Capacity Requirements
            </h2>
            <p className="text-slate-700 mb-4">
              The SDA sets different capacity tests for granting a POA for
              Property versus a POA for Personal Care.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">
                  POA for Property — Capacity Test (s. 8 SDA)
                </h3>
                <p className="text-blue-800 text-sm mb-3">
                  The grantor must know and understand:
                </p>
                <ul className="space-y-1 text-blue-800 text-sm">
                  <li>• What property they have and its approximate value</li>
                  <li>• Their obligations to dependants</li>
                  <li>
                    • That the attorney can do anything with property that the
                    grantor could (except make a will)
                  </li>
                  <li>• That the attorney must account for all dealings</li>
                  <li>• That the POA may be revoked at any time</li>
                  <li>
                    • That the attorney may not have their best interests at
                    heart if there is a conflict
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">
                  POA for Personal Care — Capacity Test (s. 47 SDA)
                </h3>
                <p className="text-green-800 text-sm mb-3">
                  The grantor must:
                </p>
                <ul className="space-y-1 text-green-800 text-sm">
                  <li>
                    • Have the ability to understand whether the proposed
                    attorney has a genuine concern for their welfare
                  </li>
                  <li>
                    • Appreciate that they may need to have the proposed
                    attorney make decisions about their personal care
                  </li>
                </ul>
                <p className="text-green-700 text-xs mt-3">
                  Note: This is a lower threshold than for POA for Property —
                  recognizing that personal care decisions are more urgent and
                  the grantor may be in a marginally impaired state.
                </p>
              </div>
            </div>
          </section>

          {/* Attorney Duties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Attorney Duties Under the SDA
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Duty</th>
                    <th className="text-center px-4 py-3 font-semibold">
                      Property
                    </th>
                    <th className="text-center px-4 py-3 font-semibold">
                      Personal Care
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attorneyDuties.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {row.duty}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.property ? (
                          <span className="text-green-600 font-bold">✓</span>
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.personalCare ? (
                          <span className="text-green-600 font-bold">✓</span>
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-slate-600 text-xs">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Revocation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Revocation of a Power of Attorney
            </h2>
            <div className="space-y-4">
              {revocationMethods.map((method, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-5 border border-slate-200"
                >
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {method.method}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-slate-500 font-medium">
                        Requirements:{" "}
                      </span>
                      <span className="text-slate-700">{method.requirements}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">
                        Effect:{" "}
                      </span>
                      <span className="text-slate-700">{method.effect}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Court Guardianship */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              When There Is No POA: Court-Appointed Guardianship
            </h2>
            <p className="text-slate-700 mb-4">
              If a person becomes incapable without a valid POA in place, a
              family member or the Public Guardian and Trustee must apply to the
              Ontario Superior Court of Justice for a guardianship order under
              Part II or III of the SDA. This process is significantly more
              time-consuming and expensive than a properly drafted POA.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Guardian of Property",
                  text: "Applied for under s. 22 SDA; requires capacity assessment; PGT may become statutory guardian immediately on incapacity finding if no CPOA exists.",
                },
                {
                  title: "Guardian of Person",
                  text: "Applied for under s. 55 SDA when no POAPC; more complex proceedings; court must be satisfied no less restrictive means exist.",
                },
                {
                  title: "Statutory Guardianship",
                  text: "PGT becomes automatic guardian of property when Ontario Regulation 26/95 capacity assessor finds incapacity — limited scope, may apply to replace PGT.",
                },
                {
                  title: "Management Plan",
                  text: "Private guardian must file detailed management plan showing how property will be managed; reviewed by the court.",
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
              Streamline Your Wills &amp; Estates Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Atticus helps Ontario estate lawyers manage POA matters, track
              client capacity assessments, and draft documents faster with
              AI — all LSO compliant.
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
                  href: "/blog/how-to-make-a-will-ontario",
                  label: "How to Make a Will in Ontario",
                },
                {
                  href: "/blog/ontario-wills-probate",
                  label: "Ontario Wills and Probate",
                },
                {
                  href: "/blog/ontario-constructive-trust",
                  label: "Ontario Constructive Trust",
                },
                {
                  href: "/ontario-wills-estate-lawyer",
                  label: "Ontario Wills and Estate Lawyers",
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
