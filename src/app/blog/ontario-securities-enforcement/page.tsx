import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Securities Enforcement | OSC Powers, Investigations, and Sanctions",
  description:
    "A comprehensive guide to Ontario Securities Commission enforcement: OSC investigation powers, compelled testimony, freeze orders, administrative sanctions, market manipulation offences, insider trading, and the quasi-criminal Securities Act penalties for Ontario securities lawyers.",
  openGraph: {
    title: "Ontario Securities Enforcement | OSC Powers, Investigations, and Sanctions",
    description:
      "Understand Ontario Securities Commission enforcement — OSC investigation powers, s.127 administrative sanctions, market manipulation, insider trading prohibitions, cease trade orders, and penalties under the Securities Act.",
    url: "https://getatticus.ca/blog/ontario-securities-enforcement",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Securities Enforcement: OSC Powers, Investigations, and Sanctions",
  "description": "A comprehensive guide to Ontario Securities Commission enforcement covering investigation powers, compelled testimony, freeze orders, s.127 administrative sanctions, market manipulation offences, insider trading prohibitions, and quasi-criminal Securities Act penalties.",
  "author": {
    "@type": "Organization",
    "name": "Atticus"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Atticus",
    "url": "https://getatticus.ca"
  },
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-securities-enforcement"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What powers does the OSC have to investigate securities violations in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ontario Securities Commission has broad investigation powers under Part VI of the Securities Act, R.S.O. 1990, c. S.5. These include the power to require production of records, compel testimony under oath, freeze assets (s.17 freeze orders), and appoint investigators with search and seizure authority. Witnesses compelled to testify have limited Charter s.13 use immunity."
      }
    },
    {
      "@type": "Question",
      "name": "What are the main OSC administrative sanctions under section 127?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Securities Act s.127, the Capital Markets Tribunal (formerly OSC Tribunal) can impose administrative sanctions including: cease trade orders, market participation bans, disgorgement of ill-gotten gains, administrative penalties up to $1 million per contravention, reprimands, and conditions or restrictions on market activities."
      }
    },
    {
      "@type": "Question",
      "name": "What is insider trading under Ontario securities law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Securities Act s.76, a person in a special relationship with a reporting issuer who possesses material undisclosed information (MNPI) must not trade in the issuer's securities or inform another person of MNPI to enable that person to trade. Tipping — providing MNPI to enable trading — is separately prohibited under s.76(2). Administrative and quasi-criminal penalties apply."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Capital Markets Tribunal in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Capital Markets Tribunal (CMT) is the adjudicative body that replaced the Ontario Securities Commission's adjudicative function under the Capital Markets Modernization Act, 2021. The CMT hears administrative enforcement proceedings under the Securities Act and Capital Markets Act, imposing sanctions under s.127 following hearings. The OSC retains its investigative and regulatory functions."
      }
    }
  ]
}`;

export default function OntarioSecuritiesEnforcementPage() {
  return (
    <>
      <Script id="securities-enforcement-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="securities-enforcement-faq-schema" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Securities Law
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ontario Securities Enforcement
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              OSC investigation powers, the Capital Markets Tribunal, s.127 administrative sanctions,
              insider trading and tipping prohibitions, market manipulation offences, and the
              quasi-criminal penalties under Ontario&apos;s Securities Act.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Ontario Securities Regulatory Framework</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Ontario securities law is governed primarily by the <em>Securities Act</em>, R.S.O. 1990, c. S.5
                and the <em>Securities Act (Ontario)</em>&apos;s subordinate regulations and rules. The Ontario
                Securities Commission (OSC) is the provincial regulatory authority responsible for administering
                the Securities Act and protecting investors while fostering fair and efficient capital markets.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The <em>Capital Markets Modernization Act, 2021</em>, S.O. 2021, c. 8 made significant structural
                changes: it established the Capital Markets Tribunal (CMT) as a separate adjudicative body,
                splitting the OSC&apos;s combined regulatory and adjudicative functions. The OSC now handles
                investigation, surveillance, and prosecution. The CMT adjudicates contested enforcement
                proceedings and imposes administrative sanctions.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Ontario cooperates with the Canadian Securities Administrators (CSA) — a provincial and
                territorial umbrella organization — on national instruments and policy statements. Enforcement
                is primarily provincial but may involve coordination with RCMP and the CCAC (Canadian Capital
                Markets Enforcement) for criminal prosecutions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">OSC Investigation Powers</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Part VI of the Securities Act (ss. 11–20) grants the OSC broad investigative authority.
                The OSC may order an investigation where it appears that:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>A person has contravened Ontario securities law</li>
                <li>A trade or act has been undertaken contrary to the public interest</li>
                <li>A reporting issuer&apos;s affairs are being conducted in a manner contrary to the interests of investors</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Compelled Production and Testimony</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under s. 13, an OSC investigator may summon any person and require them to: produce records and
                things in their possession or control, and give evidence under oath about any matter relevant to
                the investigation. Refusal to comply is an offence.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The Charter implications of compelled testimony under s. 13 are significant. In <em>Jarvis v
                Canada</em> [2002] 3 SCR 757, the Supreme Court held that when the predominant purpose of a
                regulatory investigation shifts to criminal prosecution, the protections of s. 7 and s. 11(d)
                of the Charter apply. OSC investigators must be attentive to this &quot;predominant purpose&quot;
                test when a civil investigation transitions toward quasi-criminal charges.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Witnesses compelled under s. 13 have use immunity under <em>Charter</em> s. 13 — their compelled
                testimony cannot be used against them in subsequent criminal proceedings, except to impeach their
                credibility. But derivative evidence obtained from the compelled testimony may be admissible,
                subject to the <em>Grant</em> analysis.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Freeze Orders</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 17 of the Securities Act authorizes the OSC to apply to the Superior Court for an order
                freezing assets — prohibiting a person from trading in, disposing of, or otherwise dealing with
                specified property. Freeze orders can be obtained on an ex parte basis on short notice where
                urgency is demonstrated, and can extend to money, securities, and other assets.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The CMT (formerly the OSC Tribunal) also has power under s. 127 to impose interim orders,
                including temporary cease trade orders and trading restrictions pending a full hearing, where
                necessary for investor protection or market integrity.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Section 127 Administrative Sanctions</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 127 of the Securities Act empowers the Capital Markets Tribunal to make a broad range
                of orders &quot;in the public interest&quot; after a hearing. These administrative sanctions
                include:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Market Participation Orders</h3>
                  <ul className="list-disc pl-4 text-slate-700 space-y-2 text-sm">
                    <li>Cease trade orders (permanent or for specified period)</li>
                    <li>Prohibition from acting as director or officer</li>
                    <li>Prohibition from acting as registrant, investment fund manager, or promoter</li>
                    <li>Suspension or cancellation of registration</li>
                    <li>Prohibition from relying on exemptions under Ontario securities law</li>
                  </ul>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Financial Sanctions</h3>
                  <ul className="list-disc pl-4 text-slate-700 space-y-2 text-sm">
                    <li>Administrative penalties up to $1 million per contravention</li>
                    <li>Disgorgement of amounts obtained as a result of non-compliance</li>
                    <li>Reprimand</li>
                    <li>Payment of costs of investigation and hearing</li>
                    <li>Conditions and restrictions on registration or market activities</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">
                The &quot;public interest&quot; standard under s. 127 is broad — it is not confined to
                technical contraventions of the Act. The OSC (and now the CMT) can sanction conduct that,
                while technically lawful, undermines investor protection or market integrity. This was
                affirmed in <em>Committee for the Equal Treatment of Asbestos Minority Shareholders v Ontario
                (Securities Commission)</em> [2001] 2 SCR 132.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Settlement agreements are the most common outcome of OSC enforcement proceedings. Respondents
                and OSC staff negotiate agreed statements of facts and proposed sanctions, which are then
                reviewed and approved (or rejected) by the CMT. Rejected settlements require the panel to
                proceed to a contested hearing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Insider Trading and Tipping</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Section 76 of the Securities Act prohibits insider trading and tipping. The prohibition has
                three components:
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Material Non-Public Information (MNPI)</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                &quot;Material&quot; information is information that would reasonably be expected to have a
                significant effect on the market price or value of the security if it were generally disclosed.
                &quot;Non-public&quot; means not generally disclosed through prescribed channels (press releases,
                SEDAR filings, or widely disseminated public media).
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Special Relationship</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                The s. 76 prohibition applies to persons &quot;in a special relationship&quot; with the reporting
                issuer. This includes directors, officers, and employees of the issuer; persons who have a
                substantial business relationship with the issuer; and persons who have received MNPI from
                any of those persons. The &quot;tippee&quot; who receives MNPI from an insider and then trades
                also falls within the special relationship.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Trading and Tipping Prohibitions</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Under s. 76(1), a person in a special relationship with a reporting issuer who possesses MNPI
                must not: (i) trade in securities of the issuer, (ii) inform another person of the MNPI except
                in the necessary course of business.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                The &quot;necessary course of business&quot; exception permits disclosure in the course of
                normal business dealings — e.g., disclosing to legal counsel, auditors, or underwriters.
                The OSC has taken a narrow view of this exception, and the CMT has sanctioned persons who
                disclosed MNPI to family members or social contacts.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Civil liability for insider trading is available under s. 134 of the Securities Act — a person
                who trades while in possession of MNPI is liable to the seller (or buyer) at the opposite side
                of the transaction for damages. Class actions for insider trading under s. 134 have been
                certified in Ontario.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Market Manipulation and Fraud</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Part XXII.1 of the Securities Act (ss. 126.1–126.2) creates offences for:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li><strong>Fraud</strong> (s. 126.1(1)(a)) — engaging or attempting to engage in any act, practice, or course of conduct that the person knows or ought reasonably to know perpetrates a fraud on any person</li>
                <li><strong>Market manipulation</strong> (s. 126.1(1)(b)) — engaging in conduct that the person knows or ought reasonably to know results in or contributes to a misleading appearance of trading activity or an artificial price for a security</li>
                <li><strong>Misleading or untrue statements</strong> (s. 126.2) — making a statement that the person knows or ought reasonably to know is misleading or untrue in a material respect and that would reasonably be expected to have a significant effect on the market price of a security</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                Market manipulation tactics targeted by the OSC include: wash trading (buying and selling
                the same security to create artificial volume), matched orders, pump-and-dump schemes
                (artificially inflating prices through promotional activity and selling into the rise),
                spoofing (placing and cancelling orders to create false market depth), and layering.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The &quot;ought reasonably to know&quot; standard for both manipulation and misleading
                statements imports an objective element — recklessness or gross negligence can suffice,
                removing the need to prove subjective intent in administrative proceedings. Criminal
                prosecution for market manipulation also exists under the <em>Criminal Code</em> s. 380
                (fraud) and requires subjective intent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Quasi-Criminal Enforcement</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Part XXIII of the Securities Act (ss. 122–125) creates quasi-criminal offences that carry
                significant penalties:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li><strong>S. 122(1)</strong> — general offence for contravening the Act, regulations, or rules, or making false or misleading statements: fine of up to $5 million per count and/or imprisonment up to five years less a day</li>
                <li><strong>S. 122(3)</strong> — obstruction or misleading an OSC investigation: same penalties</li>
                <li><strong>S. 124</strong> — offences by corporations: director and officer liability for offences committed by the corporation, with a due diligence defence</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                Quasi-criminal prosecutions under Part XXIII are tried in the Ontario Court of Justice.
                Unlike administrative proceedings before the CMT, quasi-criminal offences require proof
                beyond a reasonable doubt and attract full <em>Charter</em> protections including ss. 7,
                10(b), 11(b), and 11(d).
              </p>
              <p className="text-slate-700 leading-relaxed">
                The OSC may pursue both administrative and quasi-criminal proceedings arising from the same
                facts — the administrative proceeding determines civil sanctions, while the quasi-criminal
                proceeding proceeds independently. Double jeopardy protections under <em>Charter</em> s. 11(h)
                have been held not to bar parallel proceedings because the administrative proceeding is civil,
                not criminal, in nature.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Continuous Disclosure Violations</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                A major source of OSC enforcement activity is failure to comply with continuous disclosure
                obligations under Part XVIII of the Securities Act. Reporting issuers must file:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-4">
                <li>Annual information forms (AIF)</li>
                <li>Annual and interim financial statements</li>
                <li>Management&apos;s discussion and analysis (MD&amp;A)</li>
                <li>Material change reports (within 10 days of a material change)</li>
                <li>Business acquisition reports (BAR) for significant acquisitions</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4">
                Failure to file, late filing, or filing materially misleading disclosure can result in
                administrative sanctions under s. 127, including cease trade orders that prevent the
                issuer&apos;s insiders from trading in its securities. The OSC&apos;s continuous
                disclosure review program conducts routine reviews of reporting issuers&apos; disclosure
                and may initiate proceedings where deficiencies are identified.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Director and officer liability under s. 138.1 of the Securities Act for secondary market
                disclosure misrepresentations allows investors to bring class actions against responsible
                corporate insiders without needing to prove reliance on the misrepresentation — a significant
                departure from common law fraud.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What powers does the OSC have to investigate securities violations in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    The Ontario Securities Commission has broad investigation powers under Part VI of the
                    Securities Act including the power to require production of records, compel testimony
                    under oath, freeze assets (s.17 freeze orders), and appoint investigators with search
                    and seizure authority. Witnesses compelled to testify have Charter s.13 use immunity.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What are the main OSC administrative sanctions under section 127?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Under Securities Act s.127, the Capital Markets Tribunal can impose: cease trade orders,
                    market participation bans, disgorgement of ill-gotten gains, administrative penalties
                    up to $1 million per contravention, reprimands, and conditions or restrictions on
                    registration or market activities.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is insider trading under Ontario securities law?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Under Securities Act s.76, a person in a special relationship with a reporting issuer
                    who possesses material undisclosed information (MNPI) must not trade in the issuer&apos;s
                    securities or inform another person of MNPI to enable trading. Tipping — providing MNPI
                    to enable trading — is separately prohibited under s.76(2).
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    What is the Capital Markets Tribunal in Ontario?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    The Capital Markets Tribunal (CMT) is the adjudicative body established under the
                    Capital Markets Modernization Act, 2021, that replaced the OSC&apos;s adjudicative
                    function. The CMT hears administrative enforcement proceedings and imposes sanctions
                    under s.127. The OSC retains its investigative and regulatory functions.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12 px-8 bg-amber-50 border border-amber-200 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Manage Securities Law Files with Atticus
              </h2>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                Atticus helps Ontario lawyers manage securities and corporate files, track limitation periods,
                and stay LSO-compliant — all in one platform built for Canadian legal practice.
                $149 CAD per lawyer per month.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-slate-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Start Free Trial
              </Link>
            </section>

          </div>
        </article>

        <section className="py-12 px-6 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Related Resources</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: "/blog/ontario-corporate-lawyer", label: "Ontario Corporate Lawyer" },
                { href: "/blog/ontario-criminal-evidence", label: "Ontario Criminal Evidence" },
                { href: "/blog/ontario-charter-remedies", label: "Ontario Charter Remedies" },
                { href: "/blog/ontario-fiduciary-duty", label: "Fiduciary Duty in Ontario" },
                { href: "/trust-accounting-ontario", label: "Trust Accounting Ontario" },
                { href: "/ai-for-lawyers", label: "AI for Ontario Lawyers" },
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
