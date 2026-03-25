import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Corporate Reorganization Guide 2024: Amalgamations, Continuances, and Restructuring | Atticus",
  description:
    "Ontario corporate reorganization: OBCA amalgamation procedure (short-form vs long-form), CBCA-to-OBCA continuance, share capital reorganizations, s.182 arrangements, winding up, and tax considerations for corporate restructurings in Ontario.",
  openGraph: {
    title: "Ontario Corporate Reorganization Guide 2024: Amalgamations, Continuances, and Restructuring",
    description:
      "Comprehensive guide for Ontario corporate lawyers on reorganizations — OBCA amalgamations, continuances, s.182 court-approved arrangements, capital reorganizations, and winding up procedures.",
    url: "https://getatticus.ca/blog/ontario-corporate-reorganization",
    siteName: "Atticus",
    type: "article",
  },
  alternates: { canonical: "https://getatticus.ca/blog/ontario-corporate-reorganization" },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Corporate Reorganization Guide 2024: Amalgamations, Continuances, and Restructuring",
      "description": "Ontario corporate reorganization covering OBCA amalgamation procedures, CBCA continuances, s.182 arrangements, capital reorganizations, and winding up.",
      "url": "https://getatticus.ca/blog/ontario-corporate-reorganization",
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
          "name": "What is the difference between a long-form and short-form amalgamation in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A long-form amalgamation under the OBCA requires shareholder approval by special resolution (two-thirds majority) of each amalgamating corporation, an amalgamation agreement, and filing with the Ontario Business Registry. A short-form amalgamation is available in two situations: (1) a parent corporation amalgamating with a wholly-owned subsidiary; or (2) two or more wholly-owned subsidiaries of the same parent amalgamating with each other. Short-form amalgamations do not require shareholder approval — only director approval is needed, making them faster and less expensive."
          }
        },
        {
          "@type": "Question",
          "name": "What is a continuance and when would an Ontario corporation use it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A continuance (also called a domestication or redomiciliation) allows a corporation governed by one corporate statute to become governed by a different statute without dissolving and re-incorporating. An Ontario corporation might continue under the CBCA for broader geographic operations; conversely, a CBCA corporation might continue under the OBCA to take advantage of Ontario-specific rules. The corporation retains its legal identity, assets, and liabilities through the continuance."
          }
        },
        {
          "@type": "Question",
          "name": "What is a section 182 arrangement in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A section 182 arrangement under the OBCA is a court-approved corporate transaction that allows flexibility not available through other statutory mechanisms — including mergers with foreign corporations, complex share exchanges, and transactions where the simplified amalgamation procedure is not available or appropriate. The process requires an application to the Ontario Superior Court, court approval of the arrangement, and shareholder approval by special resolution if the court so orders."
          }
        },
        {
          "@type": "Question",
          "name": "What are the steps to wind up an Ontario corporation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To wind up a solvent Ontario corporation, the steps are: (1) shareholder approval for voluntary dissolution by special resolution; (2) filing a statement of intent to dissolve with the Ontario Business Registry; (3) notifying known creditors of the intention to dissolve; (4) paying or providing for all known debts and obligations; (5) distributing remaining assets to shareholders in accordance with their rights; and (6) filing articles of dissolution. The corporation continues to exist after the statement of intent is filed until articles of dissolution are filed."
          }
        }
      ]
    }
  ]
}`;

type AmalgamationType = {
  type: string;
  availability: string;
  approval: string;
  procedure: string;
};

const amalgamationTypes: AmalgamationType[] = [
  {
    type: "Long-form amalgamation",
    availability: "Any two or more OBCA corporations",
    approval: "Special resolution (two-thirds majority) of each amalgamating corporation&apos;s shareholders",
    procedure: "Amalgamation agreement; shareholder approval; Articles of Amalgamation filed with Ontario Business Registry",
  },
  {
    type: "Short-form: parent-subsidiary",
    availability: "Parent amalgamating with its wholly-owned subsidiary",
    approval: "Director approval only — no shareholder vote required",
    procedure: "Directors pass resolution; Articles of Amalgamation filed; no amalgamation agreement required",
  },
  {
    type: "Short-form: sister companies",
    availability: "Two or more wholly-owned subsidiaries of the same parent",
    approval: "Director approval only; parent must consent",
    procedure: "Directors of subsidiaries and parent pass resolutions; Articles of Amalgamation filed",
  },
  {
    type: "Vertical short-form (multi-tier)",
    availability: "Multiple tiers of wholly-owned subsidiaries can amalgamate up the chain",
    approval: "Director resolutions at each level",
    procedure: "Often used to simplify corporate structure; most efficient path for group restructurings",
  },
];

type ReorgType = {
  mechanism: string;
  purpose: string;
  approval: string;
  notes: string;
};

const reorgMechanisms: ReorgType[] = [
  {
    mechanism: "Amalgamation (OBCA s. 175)",
    purpose: "Combine two or more corporations into one; assets and liabilities of each vest in amalgamated corporation",
    approval: "Special resolution (long-form) or directors only (short-form)",
    notes: "Preferred mechanism for group simplification; successor corporation assumes all obligations",
  },
  {
    mechanism: "Continuance (OBCA s. 180)",
    purpose: "Move a corporation from one corporate statute to another while preserving legal identity",
    approval: "Special resolution of shareholders",
    notes: "Used to move CBCA corporation to OBCA or vice versa; assets and liabilities continue",
  },
  {
    mechanism: "Arrangement (OBCA s. 182)",
    purpose: "Court-approved transaction for complex reorganizations not achievable through other mechanisms",
    approval: "Court approval required; shareholders may need to approve depending on court order",
    notes: "Flexible but expensive; used for cross-border mergers, complex share exchanges, spin-offs",
  },
  {
    mechanism: "Share capital reorganization",
    purpose: "Alter share structure (convert classes, adjust terms, split/consolidate shares)",
    approval: "Special resolution; may require separate class vote if rights of a class are affected",
    notes: "Articles amendment required; consideration of deemed dividends under Income Tax Act",
  },
  {
    mechanism: "Corporate division / spin-off",
    purpose: "Separate a business unit into a new corporation",
    approval: "Directors can effect via transfer to subsidiary; shareholder approval if restructuring requires",
    notes: "Tax-driven reorganizations under ITA s. 85 or s. 86; rollover planning essential",
  },
  {
    mechanism: "Voluntary dissolution (winding up)",
    purpose: "Formally dissolve a corporation and distribute assets to shareholders",
    approval: "Special resolution; court may supervise if creditors oppose",
    notes: "Solvent wind-up under OBCA requires discharge or provision for all known debts",
  },
];

type TaxRow = {
  consideration: string;
  provision: string;
  notes: string;
};

const taxConsiderations: TaxRow[] = [
  {
    consideration: "Amalgamation — predecessor liability",
    provision: "ITA s. 87",
    notes: "Amalgamated corporation inherits all tax attributes and liabilities of predecessor corporations including loss carryforwards (subject to change-in-control rules)",
  },
  {
    consideration: "Loss streaming on amalgamation",
    provision: "ITA s. 111(5) (change in control)",
    notes: "Where there is a deemed acquisition of control on amalgamation, accumulated losses of the acquired corporation may be restricted",
  },
  {
    consideration: "Rollover on disposition to subsidiary",
    provision: "ITA s. 85",
    notes: "Allows transfer of property to a corporation at elected value to defer gain; requires filing election within due date",
  },
  {
    consideration: "Capital gains on share exchange in reorganization",
    provision: "ITA s. 86 and s. 51",
    notes: "Share-for-share exchanges can be structured to defer capital gains; conditions must be met precisely",
  },
  {
    consideration: "Deemed dividend on wind-up",
    provision: "ITA s. 84(2)",
    notes: "Distribution on winding up in excess of paid-up capital is a deemed dividend; plan for tax leakage in advance",
  },
  {
    consideration: "Land transfer tax on amalgamation",
    provision: "Land Transfer Tax Act (Ontario) exemption",
    notes: "Amalgamation may attract LTT on real property unless it qualifies for the corporate reorganization exemption; legal advice required",
  },
];

const faqs = [
  {
    q: "What is the difference between a long-form and short-form amalgamation in Ontario?",
    a: "A long-form amalgamation under the OBCA requires shareholder approval by special resolution (two-thirds majority) of each amalgamating corporation, an amalgamation agreement, and filing with the Ontario Business Registry. A short-form amalgamation is available in two situations: (1) a parent corporation amalgamating with a wholly-owned subsidiary; or (2) two or more wholly-owned subsidiaries of the same parent amalgamating with each other. Short-form amalgamations do not require shareholder approval — only director approval is needed, making them faster and less expensive.",
  },
  {
    q: "What is a continuance and when would an Ontario corporation use it?",
    a: "A continuance (also called a domestication or redomiciliation) allows a corporation governed by one corporate statute to become governed by a different statute without dissolving and re-incorporating. An Ontario corporation might continue under the CBCA for broader geographic operations; conversely, a CBCA corporation might continue under the OBCA to take advantage of Ontario-specific rules. The corporation retains its legal identity, assets, and liabilities through the continuance.",
  },
  {
    q: "What is a section 182 arrangement in Ontario?",
    a: "A section 182 arrangement under the OBCA is a court-approved corporate transaction that allows flexibility not available through other statutory mechanisms — including mergers with foreign corporations, complex share exchanges, and transactions where the simplified amalgamation procedure is not available or appropriate. The process requires an application to the Ontario Superior Court, court approval of the arrangement, and shareholder approval by special resolution if the court so orders.",
  },
  {
    q: "What are the steps to wind up an Ontario corporation?",
    a: "To wind up a solvent Ontario corporation, the steps are: (1) shareholder approval for voluntary dissolution by special resolution; (2) filing a statement of intent to dissolve with the Ontario Business Registry; (3) notifying known creditors of the intention to dissolve; (4) paying or providing for all known debts and obligations; (5) distributing remaining assets to shareholders in accordance with their rights; and (6) filing articles of dissolution. The corporation continues to exist after the statement of intent is filed until articles of dissolution are filed.",
  },
];

export default function OntarioCorporateReorganizationPage() {
  return (
    <>
      <Script id="ontario-corporate-reorganization-schema" type="application/ld+json">
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
            <span className="text-slate-900">Ontario Corporate Reorganization Guide</span>
          </div>
        </div>

        {/* Header */}
        <header className="py-16 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Corporate Law
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Ontario Corporate Reorganization Guide 2024: Amalgamations, Continuances, and Restructuring
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              OBCA long-form vs short-form amalgamation, CBCA-to-OBCA continuance, section 182 court-approved arrangements, share capital reorganizations, spin-offs, winding up procedures, and key Income Tax Act considerations for corporate restructurings.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>December 2024</span>
              <span>•</span>
              <span>16 min read</span>
              <span>•</span>
              <span>Atticus Legal Team</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 leading-relaxed mb-4">
              Corporate reorganizations are among the most technically demanding matters in Ontario corporate law. They require coordinating corporate law (OBCA or CBCA), tax planning (Income Tax Act), securities law implications, and often regulatory approvals — all while managing the client&apos;s commercial objectives and timeline.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The Business Corporations Act (Ontario) (OBCA) provides several mechanisms for reorganizing corporate structures: amalgamations, continuances, arrangements, share capital reorganizations, and voluntary dissolution. Each has different requirements, timelines, shareholder approval thresholds, and tax implications.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the primary reorganization mechanisms available to Ontario corporations, the procedures and approval requirements for each, and the key Income Tax Act considerations that must be addressed in any corporate reorganization.
            </p>
          </section>

          {/* Amalgamation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Amalgamation Under the OBCA: Long-Form and Short-Form
            </h2>
            <p className="text-slate-700 mb-6">
              An amalgamation combines two or more corporations into a single amalgamated corporation. The amalgamated corporation inherits all the assets, liabilities, rights, and obligations of each predecessor corporation. The predecessor corporations cease to exist as separate legal entities.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Type</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Availability</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Approval Required</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Procedure</th>
                  </tr>
                </thead>
                <tbody>
                  {amalgamationTypes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.type}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.availability}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.approval}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.procedure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <p className="text-amber-900 text-sm">
                <strong>Dissent rights:</strong> On a long-form amalgamation, shareholders who dissent (vote against and provide notice) are entitled to be paid fair value for their shares by the amalgamated corporation. This dissent right cannot be contracted out of. Practitioners must include dissent procedures in the management information circular and ensure proper notice is given to all shareholders.
              </p>
            </div>
          </section>

          {/* Reorganization Mechanisms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Reorganization Mechanisms: Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Mechanism</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Purpose</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Approval</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {reorgMechanisms.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.mechanism}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.purpose}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.approval}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tax Considerations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Key Income Tax Act Considerations in Corporate Reorganizations
            </h2>
            <p className="text-slate-700 mb-6">
              Corporate reorganizations must be structured with tax counsel involved from the outset. The ITA provides both planning opportunities (rollovers, deferral mechanisms) and traps (deemed dispositions, loss restriction) that can materially affect the outcome for clients.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-sm">Tax Consideration</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">ITA Provision</th>
                    <th className="text-left px-5 py-4 font-semibold text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {taxConsiderations.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900 text-sm">{row.consideration}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm font-mono text-xs">{row.provision}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm">{row.notes}</td>
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
              Manage Corporate Reorganization Files with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm">
              Atticus helps Ontario corporate lawyers manage matter timelines, track deliverables, and keep files LSO-compliant throughout complex reorganization transactions.
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
                { href: "/blog/ontario-corporate-annual-maintenance", label: "Ontario Corporate Annual Maintenance" },
                { href: "/blog/ontario-shareholder-agreement", label: "Ontario Shareholder Agreement Guide" },
                { href: "/blog/ontario-business-purchase-agreement", label: "Ontario Business Purchase Agreement" },
                { href: "/blog/ontario-professional-corporation", label: "Ontario Professional Corporation Guide" },
                { href: "/blog/ontario-secured-transactions", label: "Ontario Secured Transactions Guide" },
                { href: "/blog/ontario-franchise-law", label: "Ontario Franchise Law Guide" },
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
