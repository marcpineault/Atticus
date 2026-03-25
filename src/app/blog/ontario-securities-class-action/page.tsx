import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Securities Class Action Guide 2024 | OSA s.138.3, Leave, and OSC Enforcement",
  description:
    "Ontario securities class actions: secondary market liability under OSA s.138.3, leave requirement, OSC enforcement process, prospectus liability, insider trading, market manipulation, and settlement approval under the Class Proceedings Act. For Ontario securities and class action lawyers.",
  openGraph: {
    title: "Ontario Securities Class Action Guide 2024 | OSA s.138.3, Leave, and OSC Enforcement",
    description:
      "Securities Act s.138.3 secondary market liability, leave requirement, OSC enforcement, insider trading, and class action procedure for Ontario securities lawyers.",
    url: "https://getatticus.ca/blog/ontario-securities-class-action",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-securities-class-action" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Ontario Securities Class Action Guide 2024: OSA s.138.3, Leave, and OSC Enforcement",
  "description": "Comprehensive guide to Ontario securities class actions including secondary market liability under OSA s.138.3, the leave requirement, OSC enforcement, insider trading, market manipulation, and class action settlement approval.",
  "author": { "@type": "Organization", "name": "Atticus" },
  "publisher": { "@type": "Organization", "name": "Atticus", "url": "https://getatticus.ca" },
  "url": "https://getatticus.ca/blog/ontario-securities-class-action",
  "mainEntityOfPage": "https://getatticus.ca/blog/ontario-securities-class-action"
}`;

const faqSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the leave requirement for a securities class action in Ontario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under s.138.8 of the Ontario Securities Act, a plaintiff must obtain leave of the court before commencing a class action for secondary market misrepresentation under s.138.3. At the leave stage, the plaintiff must demonstrate that: (1) the action is being brought in good faith; and (2) there is a reasonable possibility that the action will be resolved at trial in favour of the plaintiff. The leave test is a 'reasonable possibility' standard — lower than a balance of probabilities. The purpose of the leave requirement is to screen out clearly frivolous or abusive claims while allowing meritorious cases to proceed."
      }
    },
    {
      "@type": "Question",
      "name": "What is secondary market liability under the Ontario Securities Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Secondary market liability under Part XXIII.1 of the Ontario Securities Act (ss.138.1-138.14) allows investors who purchased or sold securities on the secondary market (after the IPO) to sue reporting issuers, directors, officers, and influential persons for misrepresentation in public disclosure documents or public oral statements. Unlike common law fraud, s.138.3 does not require proof of reliance by the plaintiff — the plaintiff need only show a misrepresentation in a document or oral statement. The defendant may raise a reasonable investigation defence."
      }
    },
    {
      "@type": "Question",
      "name": "What enforcement powers does the Ontario Securities Commission have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The OSC has broad enforcement powers under the Securities Act: administrative hearings before the Capital Markets Tribunal; cease-trading orders; suspension or revocation of registrations; disgorgement of profits; administrative penalties up to $15 million per failure to comply (effective 2022); and third-party bans (preventing individuals from acting as officers/directors). The OSC can also refer matters to the Attorney General for criminal prosecution under the Securities Act (fraud, insider trading) or under the Criminal Code."
      }
    },
    {
      "@type": "Question",
      "name": "How are Ontario securities class actions certified and approved for settlement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ontario securities class actions proceed under the Class Proceedings Act, 1992. Certification requires: an identifiable class; a common issues question; class proceedings as the preferable procedure; a workable plan; and a suitable representative plaintiff. For secondary market claims, certification usually follows leave. Settlements must be approved by the court under s.29 of the Class Proceedings Act — the court considers whether the settlement is fair, reasonable, and in the best interests of class members. Notice to class members of the proposed settlement and a fairness hearing are required before approval."
      }
    }
  ]
}`;

const s138Defendants = [
  { defendant: "Reporting issuer", liability: "Strict liability for misrepresentation in continuous disclosure documents (AIF, MD&A, financial statements, material change reports, press releases)", defence: "Reasonable investigation; correction within time; plaintiff knew of misrepresentation" },
  { defendant: "Director or officer", liability: "Liability for misrepresentation in issuer disclosure documents and public oral statements made with the issuer&apos;s authority", defence: "Reasonable investigation; no knowledge of misrepresentation; correction" },
  { defendant: "Influential person (control person, insider)", liability: "Liability for misrepresentation in documents or oral statements made with or without issuer authority where influential person had influence", defence: "Did not know and should not have known of misrepresentation; reasonable investigation" },
  { defendant: "Expert (auditor, lawyer providing opinion)", liability: "Liability for misrepresentation in any part of a disclosure document attributed to the expert&apos;s consent", defence: "Reasonable investigation; no consent to use of expert report in the way it was used; correction" },
];

const oscEnforcement = [
  {
    step: "1. Investigation",
    description: "OSC Staff investigate potential breaches; subpoenas for documents and evidence; examination under oath of witnesses; coordination with RCMP (capital markets investigations team) for criminal referrals",
  },
  {
    step: "2. Voluntary Surrender / Settlement Negotiations",
    description: "Many OSC matters resolved through negotiated settlement before hearing; respondent may negotiate sanctions with OSC Staff; approved by Capital Markets Tribunal",
  },
  {
    step: "3. Statement of Allegations",
    description: "OSC Staff file Statement of Allegations (SOA) setting out alleged breaches; respondent may request a hearing; case management proceedings",
  },
  {
    step: "4. Merits Hearing",
    description: "Evidentiary hearing before Capital Markets Tribunal panel; OSC Staff presents case; respondent may call evidence and cross-examine; Tribunal issues findings",
  },
  {
    step: "5. Sanctions Hearing",
    description: "If breach found, separate sanctions hearing; OSC Staff proposes sanctions; respondent submits on mitigating factors; Tribunal issues sanctions order",
  },
  {
    step: "6. Appeals",
    description: "Appeals from Capital Markets Tribunal to Divisional Court on questions of law or jurisdiction; further appeals to Court of Appeal with leave",
  },
];

export default function OntarioSecuritiesClassActionPage() {
  return (
    <>
      <Script id="ontario-securities-class-action-schema" type="application/ld+json">
        {schemaJson}
      </Script>
      <Script id="ontario-securities-class-action-faq" type="application/ld+json">
        {faqSchema}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-400 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Securities Law
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Ontario Securities Class Action Guide 2024
            </h1>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl">
              Secondary market liability under OSA s.138.3, the leave requirement,
              Capital Markets Tribunal and OSC enforcement, insider trading and
              market manipulation, and class action certification and settlement
              for Ontario securities and class action lawyers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span>December 2024</span>
              <span>•</span>
              <span>14 min read</span>
              <span>•</span>
              <span>Securities Law</span>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ontario Securities Law Framework
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ontario is Canada&apos;s largest capital market. The{" "}
              <em>Securities Act</em> (Ontario) (RSO 1990, c S.5) is administered
              by the Ontario Securities Commission (OSC), which was renamed the
              Capital Markets Authority in some contexts after the 2022
              legislative amendments creating the{" "}
              <em>Capital Markets Act</em> framework. The OSC administers the
              Securities Act, the <em>Commodity Futures Act</em>, and the{" "}
              <em>Business Corporations Act</em> (securities provisions).
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Capital Markets Tribunal (CMT) — formerly the Ontario Securities
              Commission hearing panel — is the adjudicative arm of the OSC.
              It hears enforcement proceedings, registration matters, and other
              securities law adjudications.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
              <strong>2022 Capital Markets Act amendments:</strong> Bill 213
              (Better for Consumers and Businesses Act, 2022) separated the
              OSC&apos;s adjudicative functions (now the Capital Markets Tribunal)
              from its regulatory and enforcement functions (OSC Staff/Commission).
              This structural separation mirrors the federal model for securities
              regulators.
            </div>
          </section>

          {/* Secondary Market Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Secondary Market Liability: OSA Part XXIII.1
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Part XXIII.1 of the Securities Act (ss.138.1-138.14) creates
              statutory civil liability for secondary market misrepresentations.
              This allows investors to recover losses caused by material
              misrepresentations in a reporting issuer&apos;s public disclosure
              documents or oral statements by authorized persons.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Key feature:</strong> Unlike common law fraud or negligent
              misrepresentation, s.138.3 does not require individual plaintiffs
              to prove actual reliance on the misrepresentation. The plaintiff
              need only establish the misrepresentation and their loss — reliance
              is presumed from the &quot;fraud on the market&quot; theory. This
              makes s.138.3 claims well-suited to class actions.
            </p>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Defendants and Defences under s.138.3
            </h3>
            <div className="space-y-4">
              {s138Defendants.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">{item.defendant}</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-semibold text-slate-700">Liability: </span>
                      <span className="text-slate-600">{item.liability}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-green-700">Defences: </span>
                      <span className="text-slate-600">{item.defence}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                Leave Requirement (OSA s.138.8)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A plaintiff must obtain leave of the court before commencing a
                s.138.3 action. The leave test requires: (1) the action is
                brought in good faith; and (2) there is a reasonable possibility
                that the action will be resolved at trial in the plaintiff&apos;s
                favour. The &quot;reasonable possibility&quot; standard is lower
                than a balance of probabilities — it requires a plausible claim,
                not a probable one. The Supreme Court of Canada confirmed this
                standard in <em>IMAX Corp v Silver</em>, 2021 SCC 62.
              </p>
            </div>
          </section>

          {/* Insider Trading */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Insider Trading and Market Manipulation
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                  Insider Trading (OSA ss.76-77)
                </h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>Insider means: director, officer, 10% shareholder, person in a special relationship with the issuer (includes tippees and those who received the information)</li>
                  <li>Prohibited: trading in securities of a reporting issuer while in possession of material undisclosed information (MNPI)</li>
                  <li>Also prohibited: tipping — informing another person of MNPI where the insider knows or should know the tippee will trade</li>
                  <li>Civil liability: OSA s.134 — person who traded against the insider must be compensated; insider disgorges profits; limitation: earlier of 2 years after discovery or 6 years after the trade</li>
                  <li>Criminal: Criminal Code s.382.1 — insider trading; up to 10 years imprisonment</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                  Market Manipulation (OSA s.126.1)
                </h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>Prohibited: acts, practices, or courses of conduct that create a misleading appearance of trading activity or artificial price</li>
                  <li>Wash trading, matched orders, spoofing, layering, and pump-and-dump schemes are forms of market manipulation</li>
                  <li>OSC enforcement: administrative penalties, disgorgement, registration suspension</li>
                  <li>Criminal Code s.380 (fraud) may also apply to market manipulation schemes</li>
                  <li>Civil liability: s.138.3 and common law fraud claims may overlap with manipulation claims</li>
                </ul>
              </div>
            </div>
          </section>

          {/* OSC Enforcement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              OSC / Capital Markets Tribunal Enforcement Process
            </h2>
            <div className="space-y-4">
              {oscEnforcement.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">{step.step}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the leave requirement for a securities class action in Ontario?",
                  a: "Under s.138.8 of the Ontario Securities Act, a plaintiff must obtain leave of the court before commencing a class action for secondary market misrepresentation under s.138.3. The plaintiff must demonstrate: (1) the action is being brought in good faith; and (2) there is a reasonable possibility that the action will be resolved at trial in favour of the plaintiff. The leave test is a 'reasonable possibility' standard — lower than a balance of probabilities.",
                },
                {
                  q: "What is secondary market liability under the Ontario Securities Act?",
                  a: "Secondary market liability under Part XXIII.1 of the Ontario Securities Act (ss.138.1-138.14) allows investors who purchased or sold securities on the secondary market to sue reporting issuers, directors, officers, and influential persons for misrepresentation in public disclosure documents or public oral statements. Unlike common law fraud, s.138.3 does not require proof of reliance — the plaintiff need only show a misrepresentation and their loss.",
                },
                {
                  q: "What enforcement powers does the Ontario Securities Commission have?",
                  a: "The OSC has broad enforcement powers: administrative hearings before the Capital Markets Tribunal; cease-trading orders; suspension or revocation of registrations; disgorgement of profits; administrative penalties up to $15 million per failure to comply; and third-party bans. The OSC can also refer matters to the Attorney General for criminal prosecution.",
                },
                {
                  q: "How are Ontario securities class actions certified and approved for settlement?",
                  a: "Ontario securities class actions proceed under the Class Proceedings Act, 1992. Certification requires: an identifiable class; a common issues question; class proceedings as the preferable procedure; a workable plan; and a suitable representative plaintiff. Settlements must be approved by the court — the court considers whether the settlement is fair, reasonable, and in the best interests of class members. Notice to class members and a fairness hearing are required before approval.",
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
              Manage Your Securities Law Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Track limitation periods, manage trust accounting, and organize
              securities law files with Atticus — built for Ontario solo and
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
                { href: "/blog/ontario-securities-law", label: "Ontario Securities Law" },
                { href: "/blog/ontario-class-action", label: "Ontario Class Actions" },
                { href: "/blog/ontario-corporate-reorganization", label: "Ontario Corporate Reorganization" },
                { href: "/blog/ontario-shareholders-agreement", label: "Ontario Shareholders Agreements" },
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
