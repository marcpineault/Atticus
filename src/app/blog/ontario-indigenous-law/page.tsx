import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Indigenous Law Guide 2024 | Section 35, Duty to Consult, and UNDRIP",
  description:
    "Ontario Indigenous law: s.35 Constitution Act rights, Aboriginal title, duty to consult and accommodate, UNDRIP implementation, treaty rights in Ontario, FNLMA land management, and free prior informed consent. For Ontario Indigenous and natural resources lawyers.",
  openGraph: {
    title: "Ontario Indigenous Law Guide 2024 | Section 35, Duty to Consult, and UNDRIP",
    description:
      "Section 35 Aboriginal rights, duty to consult, Aboriginal title, UNDRIP, and treaty rights in Ontario — practical guide for Indigenous and natural resources lawyers.",
    url: "https://getatticus.ca/blog/ontario-indigenous-law",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-indigenous-law" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Indigenous Law Guide 2024: Section 35, Duty to Consult, and UNDRIP",
  "description": "Comprehensive guide to Ontario Indigenous law including s.35 Constitution Act rights, Aboriginal title, duty to consult and accommodate, UNDRIP, treaty rights, and FNLMA land management.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-indigenous-law",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-indigenous-law"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the duty to consult in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Crown's duty to consult arises whenever the Crown has real or constructive knowledge of a potential Aboriginal claim or right and is considering conduct that might adversely affect that right (Haida Nation v BC, 2004 SCC 73). In Ontario, the duty applies to Crown decisions, resource approvals, and legislative action. The duty requires meaningful consultation — not merely information-sharing — and may require accommodation where infringement would otherwise occur. The depth of consultation required is proportional to the strength of the Aboriginal claim and the seriousness of the potential adverse effect."
      }
    },
    {
      "@type": "Question",
      "name": "What are treaty rights in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario is covered by a series of historic treaties, including the Upper Canada treaties (18th-19th century), the Robinson Treaties (1850), and numbered Treaties 3, 5, 9, and the Williams Treaties (1923). These treaties guarantee rights to harvest (hunt, fish, trap) on ceded lands, and rights to reserve lands. Treaty rights are protected under s.35 of the Constitution Act, 1982. The Crown may infringe treaty rights only with compelling justification and after satisfying the duty to consult, and in some cases must accommodate or compensate affected First Nations."
      }
    },
    {
      "@type": "Question",
      "name": "Does UNDRIP apply in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Canada enacted the United Nations Declaration on the Rights of Indigenous Peoples Act (UNDA) in 2021, committing Canada to align federal laws and policies with UNDRIP. Ontario has not enacted provincial UNDRIP legislation (as BC did in 2019 with DRIPA). However, UNDRIP principles — including free, prior and informed consent (FPIC) — increasingly inform Crown consultation practice and court interpretations of s.35 rights. The FPIC standard in UNDRIP Articles 10, 19, 28, and 32 creates an expectation (not yet a veto) that Indigenous peoples be involved in decisions affecting their rights and territories."
      }
    },
    {
      "@type": "Question",
      "name": "What is Aboriginal title and has it been recognized in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aboriginal title is a proprietary right to land derived from pre-sovereignty occupation and use by Indigenous peoples (Tsilhqot'in Nation v BC, 2014 SCC 44). It gives the title-holding nation the right to use, manage, and benefit from the land — including the right to consent to or refuse development. No final declaration of Aboriginal title has been made in Ontario, though several First Nations have outstanding title claims. The Robinson Huron and Robinson Superior Treaty First Nations' annuity case (Ontario v Restoule, 2024 SCC) addressed treaty rights without resolving title. Ontario section 35 litigation is active."
      }
    }
  ]
}`;

const s35Rights = [
  {
    right: "Aboriginal title",
    description: "Proprietary right to land based on pre-sovereignty occupation; gives right to exclusive use, control, and benefit from land including subsurface resources; must be surrendered to Crown voluntarily or expropriated with justification and compensation",
    leading_case: "Tsilhqot'in Nation v BC, 2014 SCC 44",
  },
  {
    right: "Aboriginal rights (non-title)",
    description: "Rights to practices, customs, and traditions integral to the distinctive culture of the Aboriginal group prior to European contact; includes rights to harvest, fish, trap, gather, and engage in cultural practices on ancestral territory",
    leading_case: "R v Van der Peet, 1996 CanLII 216 (SCC)",
  },
  {
    right: "Treaty rights",
    description: "Rights guaranteed in specific treaties between the Crown and First Nations; in Ontario includes harvest rights (hunt, fish, trap) and reserve land rights under Robinson Treaties, Upper Canada treaties, and numbered treaties",
    leading_case: "Ontario v Restoule, 2024 SCC (Robinson Huron annuities)",
  },
  {
    right: "Metis rights",
    description: "Section 35 protects Metis Aboriginal rights arising from practices integral to Metis culture that developed after European contact but before effective European control; geographic and historic community-specific",
    leading_case: "R v Powley, 2003 SCC 43",
  },
  {
    right: "Inuit rights",
    description: "Section 35 protects Inuit Aboriginal and treaty rights in northern Canada including land, resource, and governance rights under land claims agreements (Nunavut Land Claims Agreement, James Bay and Northern Quebec Agreement)",
    leading_case: "Inuit Tapirisat cases; land claims agreement implementation",
  },
];

const consultationSpectrum = [
  {
    strength: "Weak claim / minor impact",
    obligation: "Minimum: Notice, sharing of information, opportunity to respond; no formal consultation process",
    example: "Preliminary resource license in area where claim strength is low and impact is indirect",
  },
  {
    strength: "Moderate claim / moderate impact",
    obligation: "Greater consultation: Meaningful dialogue, consideration of concerns, potentially adjustment of Crown conduct; good faith engagement required",
    example: "Forestry license in treaty territory; moderate infringement on harvest rights",
  },
  {
    strength: "Strong claim / serious impact",
    obligation: "Deep consultation: Formal process, serious consideration of group&apos;s views, strong possibility of accommodation required; may require consent for some decisions",
    example: "Major resource development on unceded territory with strong title claim; potential extinguishment of right",
  },
];

const ontarioTreaties = [
  { treaty: "Upper Canada Treaties (1764–1862)", territory: "Southern Ontario", rights: "Land surrender; small reserves retained; harvest rights in most upper Canada treaties", notes: "Many of the earliest and most contested treaties; annuity obligations confirmed in Restoule" },
  { treaty: "Robinson Huron Treaty (1850)", territory: "North shore of Lake Huron", rights: "Land surrender; reserves; annuities; right to hunt and fish on ceded territory (subject to settlement)", notes: "Ontario v Restoule, 2024 SCC: Crown must increase annuities when Crown derives economic benefit from ceded territory" },
  { treaty: "Robinson Superior Treaty (1850)", territory: "North shore of Lake Superior", rights: "Same structure as Robinson Huron; annuities; harvest rights on ceded lands", notes: "Same litigation and decision as Restoule" },
  { treaty: "Treaty 3 (1873)", territory: "Northwestern Ontario (Kenora/Lake of the Woods area)", rights: "Harvest rights on surrendered territory; reserves; annuities", notes: "Covers significant resource territory; Anishinaabe Nation in Treaty 3 (AN3) engaged in ongoing implementation claims" },
  { treaty: "Treaty 9 (James Bay Treaty, 1905–1906)", territory: "Northern Ontario (James Bay lowlands and far north)", rights: "Broad land surrender; reserves; harvest rights; annuities", notes: "Adhesions made 1929–1930; Mushkegowuk Cree, Oji-Cree, and other Nations; ongoing litigation regarding Treaty 9 interpretation" },
  { treaty: "Williams Treaties (1923)", territory: "Kawartha Lakes and Lake Simcoe areas", rights: "Land surrender; monetary compensation; no express harvest rights (distinguishing factor from earlier treaties)", notes: "Canada and Ontario reached settlement with Williams Treaties First Nations in 2018 recognizing outstanding obligations" },
];

export default function OntarioIndigenousLawPage() {
  return (
    <>
      <Script id="ontario-indigenous-law-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-indigenous-law-faq" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Indigenous Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Indigenous Law Guide 2024
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              Section 35 Aboriginal rights and title, duty to consult and
              accommodate, UNDRIP, treaty rights in Ontario, and FNLMA land
              management — for Ontario Indigenous and natural resources lawyers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Indigenous Law</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Section 35 of the Constitution Act, 1982
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Section 35(1) of the <em>Constitution Act, 1982</em> recognizes and
              affirms the &quot;existing Aboriginal and treaty rights of the Aboriginal
              peoples of Canada.&quot; This constitutional protection covers three
              groups: Indians (First Nations), Inuit, and Metis. Section 35 rights
              are not subject to the reasonable limits clause in s.1 of the
              <em> Canadian Charter of Rights and Freedoms</em> — they have their
              own infringement and justification framework developed by the
              Supreme Court of Canada.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Sparrow test (R v Sparrow, 1990 SCC) established that the Crown
              may infringe a s.35 right only with (1) a valid legislative objective
              and (2) in a manner consistent with the Crown&apos;s fiduciary duty
              to Aboriginal peoples. The Haida Nation (2004 SCC) and Taku River
              (2004 SCC) cases established the procedural duty to consult before
              infringing rights.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
              <strong>Ontario practice context:</strong> Ontario Indigenous law
              matters arise in resource development (mining, forestry, energy),
              infrastructure approvals, land claims negotiations, band governance
              disputes, and child welfare (CYFSA and Bill C-92 jurisdiction).
              The Crown in right of Ontario has independent duty to consult
              obligations for provincial Crown decisions — the federal duty is
              separate.
            </div>
          </section>

          {/* Categories of s.35 Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Categories of Section 35 Rights
            </h2>
            <div className="space-y-4">
              {s35Rights.map((right, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{right.right}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-2">{right.description}</p>
                  <p className="text-xs text-amber-700 font-medium">
                    Key case: {right.leading_case}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Duty to Consult */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Duty to Consult and Accommodate
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The duty to consult is a constitutional obligation on the Crown
              (federal and provincial), not on private project proponents. However,
              the Crown may delegate procedural aspects of consultation to
              proponents. The duty is triggered by three elements:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { title: "1. Crown Knowledge", body: "The Crown has actual or constructive knowledge of the existence or potential existence of an Aboriginal right or title claim" },
                { title: "2. Crown Conduct", body: "The Crown is contemplating conduct (regulatory decision, approval, legislation) that could potentially affect the right" },
                { title: "3. Potential Adverse Effect", body: "The contemplated conduct might adversely affect the asserted right — not a high threshold; potential adverse effect suffices" },
              ].map((el, i) => (
                <div key={i} className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">{el.title}</h3>
                  <p className="text-slate-600 text-sm">{el.body}</p>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              The Haida Spectrum: Depth of Consultation Required
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Claim Strength / Impact</th>
                    <th className="text-left px-4 py-3 font-semibold">Consultation Obligation</th>
                    <th className="text-left px-4 py-3 font-semibold">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {consultationSpectrum.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-slate-700 font-semibold">{row.strength}</td>
                      <td className="px-4 py-3 text-slate-600">{row.obligation}</td>
                      <td className="px-4 py-3 text-slate-600">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-sm mt-4">
              <strong>Accommodation:</strong> Where the Crown&apos;s proposed action
              would infringe a right, accommodation may be required — modifying
              project timing, scope, terms, or providing mitigation measures or
              compensation. Accommodation does not require agreement; the Crown
              must genuinely consider the concerns raised and modify conduct
              proportionately.
            </p>
          </section>

          {/* Ontario Treaties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Treaty Rights in Ontario
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Treaty</th>
                    <th className="text-left px-4 py-3 font-semibold">Territory</th>
                    <th className="text-left px-4 py-3 font-semibold">Rights</th>
                    <th className="text-left px-4 py-3 font-semibold">Current Issues</th>
                  </tr>
                </thead>
                <tbody>
                  {ontarioTreaties.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 text-slate-700 font-semibold">{row.treaty}</td>
                      <td className="px-4 py-3 text-slate-600">{row.territory}</td>
                      <td className="px-4 py-3 text-slate-600">{row.rights}</td>
                      <td className="px-4 py-3 text-slate-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* UNDRIP */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              UNDRIP and Free, Prior and Informed Consent (FPIC)
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The United Nations Declaration on the Rights of Indigenous Peoples
              (UNDRIP) was adopted by the UN General Assembly in 2007. Canada
              enacted the <em>United Nations Declaration on the Rights of Indigenous
              Peoples Act</em> (UNDA) in 2021, committing to align all federal
              laws and policies with UNDRIP. Ontario has not yet enacted equivalent
              provincial legislation.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                  Key UNDRIP Provisions for Resource Development
                </h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li><span className="font-semibold">Art. 10:</span> Free and informed consent required before relocation from traditional territory</li>
                  <li><span className="font-semibold">Art. 19:</span> States must consult and cooperate in good faith to obtain FPIC before adopting legislative or administrative measures affecting Indigenous peoples</li>
                  <li><span className="font-semibold">Art. 28:</span> Right to redress for lands, territories, resources taken without FPIC</li>
                  <li><span className="font-semibold">Art. 32:</span> FPIC for approval of projects affecting Indigenous lands and resources</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                  FPIC in Canadian Law: Current Status
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Canadian courts have not yet held that FPIC creates an absolute
                  veto power for First Nations over resource projects. The prevailing
                  view is that UNDRIP and FPIC strengthen the duty to consult and
                  may require consent in cases of serious infringement of
                  Aboriginal title or rights. Federal Impact Assessment and Natural
                  Resources Canada guidance now expressly reference FPIC as an
                  aspiration. The BC DRIPA (2019) and Haida Nation Recognition
                  Agreement (2024) represent the leading edge of FPIC implementation
                  in Canada.
                </p>
              </div>
            </div>
          </section>

          {/* FNLMA */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              First Nations Land Management Act (FNLMA)
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The <em>First Nations Land Management Act</em> (FNLMA) allows
              signatory First Nations to opt out of the land management provisions
              of the <em>Indian Act</em> and govern their reserve lands under their
              own Land Code. Key features relevant to Ontario practitioners:
            </p>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Land Code authority:</strong> First Nation enacts a Land Code governing land use, transactions, leasing, trespass, and environmental protection on reserve</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Commercial transactions:</strong> Commercial leases, licenses, and mortgages on reserve land under FNLMA can be registered on the First Nations Land Registry (formerly Surrendered and Designated Lands Registry)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Land interests:</strong> FNLMA First Nations may grant leasehold interests that are mortgageable — enabling financing for on-reserve construction and commercial projects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span><strong>Ontario FNLMA First Nations:</strong> Several Ontario First Nations have adopted FNLMA Land Codes, including Mississaugas of the Credit, Alderville, Curve Lake, and others — check the FNLMA Registry for current signatories</span>
              </li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the duty to consult in Ontario?",
                  a: "The Crown's duty to consult arises whenever the Crown has real or constructive knowledge of a potential Aboriginal claim or right and is considering conduct that might adversely affect that right (Haida Nation v BC, 2004 SCC 73). In Ontario, the duty applies to Crown decisions, resource approvals, and legislative action. The duty requires meaningful consultation — not merely information-sharing — and may require accommodation where infringement would otherwise occur. The depth of consultation required is proportional to the strength of the Aboriginal claim and the seriousness of the potential adverse effect.",
                },
                {
                  q: "What are treaty rights in Ontario?",
                  a: "Ontario is covered by a series of historic treaties, including the Upper Canada treaties (18th-19th century), the Robinson Treaties (1850), and numbered Treaties 3, 5, 9, and the Williams Treaties (1923). These treaties guarantee rights to harvest (hunt, fish, trap) on ceded lands, and rights to reserve lands. Treaty rights are protected under s.35 of the Constitution Act, 1982. The Crown may infringe treaty rights only with compelling justification and after satisfying the duty to consult.",
                },
                {
                  q: "Does UNDRIP apply in Ontario?",
                  a: "Canada enacted the United Nations Declaration on the Rights of Indigenous Peoples Act (UNDA) in 2021, committing Canada to align federal laws and policies with UNDRIP. Ontario has not enacted provincial UNDRIP legislation. However, UNDRIP principles — including free, prior and informed consent (FPIC) — increasingly inform Crown consultation practice and court interpretations of s.35 rights. The FPIC standard in UNDRIP Articles 10, 19, 28, and 32 creates an expectation (not yet a veto) that Indigenous peoples be involved in decisions affecting their rights and territories.",
                },
                {
                  q: "What is Aboriginal title and has it been recognized in Ontario?",
                  a: "Aboriginal title is a proprietary right to land derived from pre-sovereignty occupation and use by Indigenous peoples (Tsilhqot'in Nation v BC, 2014 SCC 44). It gives the title-holding nation the right to use, manage, and benefit from the land — including the right to consent to or refuse development. No final declaration of Aboriginal title has been made in Ontario, though several First Nations have outstanding title claims. Ontario section 35 litigation is active.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">
              Manage Your Indigenous Law Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Track consultation deadlines, manage trust accounting, and organize
              Indigenous law matters with Atticus — built for Ontario solo and
              small law firms.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </Link>
          </section>

          {/* Related */}
          <section className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Related Ontario Law Guides
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/ontario-environmental-law", label: "Ontario Environmental Law" },
                { href: "/blog/ontario-administrative-law", label: "Ontario Administrative Law and Judicial Review" },
                { href: "/blog/ontario-municipal-law", label: "Ontario Municipal Law" },
                { href: "/blog/ontario-real-estate-purchase-agreement", label: "Ontario Real Estate Purchase Agreements" },
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
