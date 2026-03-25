import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Elder Law Guide 2024: Capacity, Powers of Attorney, Guardianship, and Elder Abuse",
  description:
    "Complete guide to Ontario elder law: capacity assessment (SDA presumption, capacity for POA, property vs personal care), powers of attorney for property (Substitute Decisions Act SDA), powers of attorney for personal care (HCCA), guardianship of property and person (OPGT), elder abuse recognition and legal remedies for Ontario lawyers.",
  openGraph: {
    title: "Ontario Elder Law Guide 2024: Capacity, Powers of Attorney, Guardianship, and Elder Abuse",
    description:
      "Ontario SDA capacity assessment, POA for property and personal care, OPGT guardianship, statutory guardianship, and elder abuse legal remedies for Ontario lawyers.",
    url: "https://getatticus.ca/blog/ontario-elder-law",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-elder-law" },
};

const articleSchema = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Elder Law Guide 2024: Capacity, Powers of Attorney, Guardianship, and Elder Abuse",
  "description": "Complete guide to Ontario elder law: capacity assessment, powers of attorney for property and personal care, guardianship, and elder abuse legal remedies.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-elder-law",
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-01",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-elder-law"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the legal presumption of capacity in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Substitute Decisions Act 1992 (SDA s.2), every person is presumed to be capable of managing their property and capable of giving or refusing consent to personal care unless found to be incapable. The presumption of capacity means that anyone challenging capacity has the burden of establishing incapacity — it is not for the individual to prove they are capable. The presumption also means that capacity should be assessed on the specific decision at the specific time, not globally."
      }
    },
    {
      "@type": "Question",
      "name": "What is the capacity test for a Power of Attorney for Property in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under SDA s.8, a person has capacity to grant a continuing power of attorney for property if they know: (1) what property they have and its approximate value; (2) their obligations to people who are financially dependent on them; (3) that their attorney will be able to do anything with their property that they could do themselves (except make a will); (4) that the attorney must account for their dealings with the property; (5) that they may revoke the POA while capable; (6) that the POA will continue if they become incapable (for a continuing POA); and (7) that if they later become incapable, the POA will have authority over their property."
      }
    },
    {
      "@type": "Question",
      "name": "What is statutory guardianship of property in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Statutory guardianship arises automatically when a person is found incapable of managing property by a capacity assessor and does not have a continuing POA for property, or when a person receives benefits under certain Ontario government programs. The Public Guardian and Trustee (OPGT) becomes the statutory guardian of property. The OPGT may be replaced by a family member who applies to become the guardian, or by court-appointed guardianship. Unlike a continuing POA, statutory guardianship requires no prior grant — it arises by operation of the SDA."
      }
    },
    {
      "@type": "Question",
      "name": "What legal remedies exist for elder abuse in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Legal remedies for elder abuse in Ontario include: (1) SDA s.66 application to pass accounts or remove an attorney for property who has mismanaged assets; (2) civil action for undue influence to set aside transactions where the vulnerable person was exploited; (3) criminal Code theft, fraud, or financial exploitation charges; (4) Vulnerable Sector Check requirements for caregivers; (5) Adult Protection under the Long-Term Care Homes Act 2021 for residents of licensed facilities; (6) OPGT intervention where a person is at risk and has no substitute decision-maker; and (7) HCCA applications where consent to care is being improperly overridden."
      }
    }
  ]
}`;

type CapacityTest = {
  document: string;
  statute: string;
  capacityElements: string;
  assessor: string;
};

const capacityTests: CapacityTest[] = [
  {
    document: "Continuing Power of Attorney for Property",
    statute: "SDA s.8",
    capacityElements: "Know what property they have and approximate value; obligations to dependants; attorney&apos;s authority scope; right to revoke while capable; POA continues on incapacity",
    assessor: "Lawyer witnessing the document should satisfy themselves of capacity; formal capacity assessment if doubt",
  },
  {
    document: "Power of Attorney for Personal Care",
    statute: "SDA s.46(3)",
    capacityElements: "Understand that the PAPC authorizes the attorney to make personal care decisions if the grantor becomes incapable of personal care; understand that the grantor can revoke while capable",
    assessor: "Lawyer witnessing should assess; capacity assessor if doubt; lower threshold than POA for property",
  },
  {
    document: "Will / testamentary capacity",
    statute: "Succession Law Reform Act (common law test: Banks v Goodfellow)",
    capacityElements: "Know nature and effect of making a will; know the extent of their property; know persons who have a natural claim; no disorder of the mind poisoning the affections or perverts the exercise of natural faculties",
    assessor: "Witnessing solicitor assesses; formal medical assessment if doubt; retrospective capacity assessment in estate litigation",
  },
  {
    document: "Consent to health treatment",
    statute: "Health Care Consent Act 1996 (HCCA)",
    capacityElements: "Understand the information relevant to the proposed treatment; understand reasonably foreseeable consequences of giving or refusing consent",
    assessor: "Health practitioner proposes treatment assesses capacity; capacity assessor if appeal to Consent and Capacity Board required",
  },
  {
    document: "Retainer to instruct lawyer",
    statute: "Common law (no statute)",
    capacityElements: "Understand the nature of the retainer; understand what is being asked of the lawyer; instruct the lawyer; understand that the lawyer acts on their instructions",
    assessor: "Lawyer must satisfy themselves; if doubt, may request medical opinion; LSO Rules of Professional Conduct require lawyer to act on client&apos;s instructions",
  },
];

type GuardianshipType = {
  type: string;
  trigger: string;
  authority: string;
  replacement: string;
};

const guardianshipTypes: GuardianshipType[] = [
  {
    type: "Statutory guardian of property (OPGT)",
    trigger: "Capacity assessor finds incapable; no continuing POA for property in effect",
    authority: "OPGT becomes guardian of property by operation of SDA s.15-16; manages all property of incapable person",
    replacement: "Family member may apply to OPGT to become guardian; or court-appointed guardian under SDA Part II",
  },
  {
    type: "Court-appointed guardian of property",
    trigger: "Application to Superior Court; OPGT unable to manage; family dispute over guardian; complex estate",
    authority: "Guardian appointed by court has all powers of the person over property; must pass accounts every year",
    replacement: "Court may replace guardian on application; guardian may apply to be discharged",
  },
  {
    type: "Statutory guardian of person (OPGT)",
    trigger: "Not applicable — OPGT not statutory guardian of person; OPGT is attorney for personal care in specific programs",
    authority: "OPGT acts as attorney for personal care for those in provincial psychiatric facilities",
    replacement: "HCCA s.15 hierarchy applies; qualified family members may be SDM for personal care",
  },
  {
    type: "Court-appointed guardian of person",
    trigger: "Application to Superior Court; person incapable of personal care; no effective POA for personal care; hierarchy of SDMs inadequate",
    authority: "Guardian authorized to make personal care decisions; court may impose conditions; guardian reports to court",
    replacement: "Court may replace guardian on application; incapable person retains right to apply",
  },
];

export default function OntarioElderLawPage() {
  return (
    <>
      <Script id="ontario-elder-law-article-schema" type="application/ld+json">
        {articleSchema}
      </Script>
      <Script id="ontario-elder-law-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Elder Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ontario Elder Law Guide 2024
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Capacity, Powers of Attorney, Guardianship, and Elder Abuse
            </p>
            <p className="text-slate-400 text-sm">December 2024 &middot; 13 min read</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              Ontario elder law encompasses the legal issues affecting older adults and vulnerable persons:
              capacity assessment, substitute decision-making, powers of attorney, guardianship, elder abuse,
              and long-term care. The governing legislation includes the <strong>Substitute Decisions Act 1992
              (SDA)</strong>, the <strong>Health Care Consent Act 1996 (HCCA)</strong>, the <strong>Mental
              Health Act</strong>, and the <strong>Long-Term Care Homes Act 2021</strong>. This guide covers
              the presumption of capacity, capacity tests for different documents, powers of attorney for
              property and personal care, guardianship through OPGT and courts, and legal remedies for
              elder abuse.
            </p>
          </div>
        </section>

        {/* Capacity Tests */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Capacity Tests for Different Legal Documents
            </h2>
            <p className="text-slate-600 mb-8">
              Ontario law assesses capacity decision-specifically and time-specifically. A person may have
              capacity for one type of decision but not another. The SDA presumption of capacity means
              incapacity must be established — it is not for the individual to prove capacity.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Document</th>
                    <th className="text-left px-5 py-4 font-semibold">Statute</th>
                    <th className="text-left px-5 py-4 font-semibold">Capacity Elements</th>
                    <th className="text-left px-5 py-4 font-semibold">Assessor</th>
                  </tr>
                </thead>
                <tbody>
                  {capacityTests.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.document}</td>
                      <td className="px-5 py-4 text-slate-500 text-xs font-mono">{row.statute}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.capacityElements}</td>
                      <td className="px-5 py-4 text-slate-500 text-sm">{row.assessor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Powers of Attorney */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Powers of Attorney Under the SDA and HCCA
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">POA for Property (SDA)</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">▸</span><span><strong>Continuing POA:</strong> Continues in effect if grantor becomes incapable of property management</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">▸</span><span><strong>Non-continuing POA:</strong> Ends if grantor becomes incapable; used for specific transactions</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">▸</span><span><strong>Attorney authority:</strong> Do anything with property the grantor could do, except make a will</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">▸</span><span><strong>Duty to account:</strong> Attorney must keep records; may be required to pass accounts before court</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">▸</span><span><strong>Execution:</strong> Two witnesses (not spouse or attorney); witnessed execution required</span></li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold shrink-0">!</span><span>Attorney for property cannot consent to personal care decisions — that is a separate POA</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">POA for Personal Care (HCCA)</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">▸</span><span><strong>Scope:</strong> Medical treatment, nutrition, shelter, clothing, hygiene, safety decisions</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">▸</span><span><strong>Only activates on incapacity:</strong> Attorney has no authority while grantor is capable of the specific decision</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">▸</span><span><strong>Wishes:</strong> Attorney must follow grantor&apos;s prior expressed wishes; if no applicable wishes, act in grantor&apos;s best interests</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">▸</span><span><strong>Execution:</strong> Two witnesses (not spouse or attorney); witnessed execution required</span></li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">▸</span><span><strong>HCCA hierarchy:</strong> If no PAPC, HCCA s.20 hierarchy applies (spouse/partner, child, parent, sibling, etc.)</span></li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold shrink-0">!</span><span>Attorney cannot consent to admission to a psychiatric facility or electroconvulsive therapy without specific authorization in the PAPC</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guardianship */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Guardianship: OPGT and Court-Appointed
            </h2>
            <p className="text-slate-600 mb-8">
              When a person is incapable and has no effective substitute decision-maker through a POA,
              guardianship provides the legal mechanism for someone to manage their property or personal
              care. The Office of the Public Guardian and Trustee (OPGT) plays a central role in Ontario.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Guardianship Type</th>
                    <th className="text-left px-5 py-4 font-semibold">Trigger</th>
                    <th className="text-left px-5 py-4 font-semibold">Authority</th>
                    <th className="text-left px-5 py-4 font-semibold">Replacement</th>
                  </tr>
                </thead>
                <tbody>
                  {guardianshipTypes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-700 font-semibold text-sm">{row.type}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.trigger}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.authority}</td>
                      <td className="px-5 py-4 text-slate-500 text-sm">{row.replacement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions: Ontario Elder Law
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the legal presumption of capacity in Ontario?",
                  a: "Under the Substitute Decisions Act 1992 (SDA s.2), every person is presumed to be capable of managing their property and capable of giving or refusing consent to personal care unless found to be incapable. The presumption of capacity means that anyone challenging capacity has the burden of establishing incapacity — it is not for the individual to prove they are capable. The presumption also means that capacity should be assessed on the specific decision at the specific time, not globally.",
                },
                {
                  q: "What is the capacity test for a Power of Attorney for Property in Ontario?",
                  a: "Under SDA s.8, a person has capacity to grant a continuing power of attorney for property if they know: (1) what property they have and its approximate value; (2) their obligations to people who are financially dependent on them; (3) that their attorney will be able to do anything with their property that they could do themselves (except make a will); (4) that the attorney must account for their dealings with the property; (5) that they may revoke the POA while capable; (6) that the POA will continue if they become incapable (for a continuing POA); and (7) that if they later become incapable, the POA will have authority over their property.",
                },
                {
                  q: "What is statutory guardianship of property in Ontario?",
                  a: "Statutory guardianship arises automatically when a person is found incapable of managing property by a capacity assessor and does not have a continuing POA for property, or when a person receives benefits under certain Ontario government programs. The Public Guardian and Trustee (OPGT) becomes the statutory guardian of property. The OPGT may be replaced by a family member who applies to become the guardian, or by court-appointed guardianship. Unlike a continuing POA, statutory guardianship requires no prior grant — it arises by operation of the SDA.",
                },
                {
                  q: "What legal remedies exist for elder abuse in Ontario?",
                  a: "Legal remedies for elder abuse in Ontario include: (1) SDA s.66 application to pass accounts or remove an attorney for property who has mismanaged assets; (2) civil action for undue influence to set aside transactions where the vulnerable person was exploited; (3) criminal Code theft, fraud, or financial exploitation charges; (4) Vulnerable Sector Check requirements for caregivers; (5) Adult Protection under the Long-Term Care Homes Act 2021 for residents of licensed facilities; (6) OPGT intervention where a person is at risk and has no substitute decision-maker; and (7) HCCA applications where consent to care is being improperly overridden.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6 bg-white">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-amber-50 border-t border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Manage Elder Law Files with Atticus
            </h2>
            <p className="text-slate-600 mb-8">
              Atticus tracks capacity assessment dates, POA registration deadlines, guardianship
              reporting dates, and estate administration timelines for Ontario elder law and estates lawyers.
              AI document analysis extracts key provisions from POAs, capacity assessments, and court orders.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-slate-900 text-white font-semibold px-10 py-4 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Try Atticus Free for 14 Days
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Guides</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-estate-planning", label: "Ontario Estate Planning" },
                { href: "/blog/ontario-estate-administration", label: "Ontario Estate Administration" },
                { href: "/blog/ontario-estate-litigation", label: "Ontario Estate Litigation" },
                { href: "/blog/power-of-attorney-ontario", label: "Powers of Attorney Ontario" },
                { href: "/ontario-wills-estate-lawyer", label: "Atticus for Wills & Estates" },
                { href: "/trust-accounting-ontario", label: "Ontario Trust Accounting" },
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
          </div>
        </section>
      </div>
    </>
  );
}
