import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Shareholder Agreement Guide 2024 | USA, Shotgun Clause & Drag-Along",
  description:
    "Complete guide to Ontario shareholder agreements: unanimous shareholder agreements (USA), shotgun buy-sell, drag-along, tag-along, pre-emptive rights, and key drafting considerations.",
  openGraph: {
    title: "Ontario Shareholder Agreement Guide 2024 | USA, Shotgun Clause & Drag-Along",
    description:
      "Everything Ontario corporate lawyers need to know about shareholder agreements — USA restrictions, buy-sell mechanisms, transfer restrictions, and oppression remedy.",
    url: "https://getatticus.ca/blog/ontario-shareholder-agreement",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Shareholder Agreement Guide 2024: USA, Buy-Sell Mechanisms, and Minority Protections",
      "description": "Comprehensive guide to Ontario shareholder agreements covering unanimous shareholder agreements, shotgun clauses, drag-along/tag-along rights, pre-emptive rights, and exit mechanisms.",
      "url": "https://getatticus.ca/blog/ontario-shareholder-agreement",
      "datePublished": "2024-11-22",
      "dateModified": "2024-11-22",
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
          "name": "What is a Unanimous Shareholder Agreement in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Unanimous Shareholder Agreement (USA) is a special type of shareholder agreement under the Ontario Business Corporations Act (OBCA) and the Canada Business Corporations Act (CBCA) that restricts the powers of the directors. Under s. 108 OBCA, a USA can transfer management powers from the board to shareholders, and shareholders who receive those powers also assume the directors' liabilities. A USA is binding on all future shareholders who receive notice of it."
          }
        },
        {
          "@type": "Question",
          "name": "How does a shotgun buy-sell clause work in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A shotgun clause (Russian roulette clause) allows one shareholder to offer to buy the other shareholder's shares at a specified price. The receiving shareholder must either accept the offer (and sell their shares) or buy the offeror's shares at the same price. The mechanism creates a strong incentive to name a fair price, since the offeror does not know which role they will end up in."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between drag-along and tag-along rights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Drag-along rights allow majority shareholders to force minority shareholders to sell their shares on the same terms when a third party acquires a specified threshold (typically 75-80%) of the company. Tag-along rights (co-sale rights) give minority shareholders the right to participate in any sale by majority shareholders on the same terms — protecting minorities from being left behind in a sale that did not include them."
          }
        },
        {
          "@type": "Question",
          "name": "What minority shareholder protections exist in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the Ontario Business Corporations Act, minority shareholders have several statutory protections: the oppression remedy (s. 248 OBCA) allows courts to grant broad remedies for conduct that is oppressive, unfairly prejudicial, or that unfairly disregards a shareholder's interests; dissent rights (s. 185 OBCA) allow shareholders to receive fair value for shares on fundamental changes; and derivative action rights (s. 246 OBCA) allow shareholders to sue in the corporation's name when directors fail to act."
          }
        }
      ]
    }
  ]
}`;

type SAProvision = {
  provision: string;
  description: string;
  whoItProtects: string;
  keyConsiderations: string;
};

const provisions: SAProvision[] = [
  {
    provision: "Pre-emptive Rights (Right of First Refusal)",
    description:
      "Existing shareholders have the right to purchase new shares or shares offered for sale before they are offered to third parties",
    whoItProtects: "All shareholders (maintains proportionate ownership)",
    keyConsiderations:
      "Exercise period (typically 30-60 days); pricing mechanism; carve-outs for permitted transfers",
  },
  {
    provision: "Right of First Offer",
    description:
      "Selling shareholder must first offer shares to existing shareholders before seeking outside buyers; differs from ROFR (offer, not match)",
    whoItProtects: "Existing shareholders",
    keyConsiderations:
      "Price can be negotiated; outside buyers can then match or exceed; less restrictive than ROFR",
  },
  {
    provision: "Drag-Along Rights",
    description:
      "Majority shareholders can force minority to sell on same terms to a third-party acquirer",
    whoItProtects: "Majority/controlling shareholders and acquirer",
    keyConsiderations:
      "Threshold trigger (typically 75%); same price and terms; notice requirements; escrow/indemnification caps",
  },
  {
    provision: "Tag-Along Rights (Co-Sale Rights)",
    description:
      "Minority shareholders can participate in any majority sale on identical terms",
    whoItProtects: "Minority shareholders",
    keyConsiderations:
      "Minority can participate pro rata; majority must reduce sale if tag-along exercised; liquidity preference interactions",
  },
  {
    provision: "Shotgun Buy-Sell (Russian Roulette)",
    description:
      "Any shareholder can trigger a forced buy-or-sell mechanism at a named price",
    whoItProtects: "Provides deadlock resolution; may favour wealthier party",
    keyConsiderations:
      "Financing period needed; asymmetric position if one party has more capital; not suitable for all relationship structures",
  },
  {
    provision: "Non-Compete / Non-Solicitation",
    description:
      "Restricts shareholders from competing with the corporation or soliciting employees/clients on exit",
    whoItProtects: "Corporation and remaining shareholders",
    keyConsiderations:
      "Must be reasonable in time, geography, and scope; Ontario courts scrutinize overly broad restrictions; tied to exit trigger",
  },
  {
    provision: "Vesting Provisions",
    description:
      "Shares vest over time; unvested shares returned on early departure",
    whoItProtects: "Corporation and other shareholders from free riders",
    keyConsiderations:
      "Cliff period (typically 1 year); vesting schedule (4-year common); acceleration on change of control or termination without cause",
  },
  {
    provision: "Dividend Policy",
    description:
      "Sets out when and how dividends are declared; minimum distributions",
    whoItProtects: "All shareholders, particularly minority without board control",
    keyConsiderations:
      "Mandatory dividends vs discretionary; tax planning for professional corporations; interaction with shareholder loans",
  },
];

type OBCARight = {
  right: string;
  section: string;
  description: string;
  remedy: string;
};

const obcaRights: OBCARight[] = [
  {
    right: "Oppression Remedy",
    section: "s. 248 OBCA",
    description:
      "Conduct that is oppressive, unfairly prejudicial, or unfairly disregards shareholder interests",
    remedy:
      "Broad court discretion: buy-out, injunction, wind-up, change management, award damages",
  },
  {
    right: "Dissent Rights",
    section: "s. 185 OBCA",
    description:
      "Shareholder dissents from fundamental change (amalgamation, sale of all assets, etc.)",
    remedy: "Fair value for shares; payment within timeline set by statute",
  },
  {
    right: "Derivative Action",
    section: "s. 246 OBCA",
    description:
      "Shareholder brings action in corporation's name when directors fail to act",
    remedy:
      "Court can authorize action; corporation funds reasonable legal fees",
  },
  {
    right: "Access to Records",
    section: "s. 140 OBCA",
    description:
      "Shareholder entitled to inspect articles, by-laws, shareholders list, and meeting minutes",
    remedy: "Court order for compliance; damages for refusal",
  },
  {
    right: "Requisition Meeting",
    section: "s. 105 OBCA",
    description:
      "Holders of 5%+ of voting shares can requisition a shareholder meeting",
    remedy: "Directors must call meeting within 21 days of requisition",
  },
];

const faqs = [
  {
    q: "What is a Unanimous Shareholder Agreement in Ontario?",
    a: "A Unanimous Shareholder Agreement (USA) is a special type of shareholder agreement under the Ontario Business Corporations Act (OBCA) that restricts the powers of the directors. Under s. 108 OBCA, a USA can transfer management powers from the board to shareholders, and shareholders who receive those powers also assume the directors' liabilities. A USA is binding on all future shareholders who receive notice of it.",
  },
  {
    q: "How does a shotgun buy-sell clause work in Ontario?",
    a: "A shotgun clause (Russian roulette clause) allows one shareholder to offer to buy the other shareholder's shares at a specified price. The receiving shareholder must either accept the offer (and sell their shares) or buy the offeror's shares at the same price. The mechanism creates a strong incentive to name a fair price, since the offeror does not know which role they will end up in.",
  },
  {
    q: "What is the difference between drag-along and tag-along rights?",
    a: "Drag-along rights allow majority shareholders to force minority shareholders to sell their shares on the same terms when a third party acquires a specified threshold (typically 75-80%) of the company. Tag-along rights (co-sale rights) give minority shareholders the right to participate in any sale by majority shareholders on the same terms — protecting minorities from being left behind in a sale that did not include them.",
  },
  {
    q: "What minority shareholder protections exist in Ontario?",
    a: "Under the Ontario Business Corporations Act, minority shareholders have several statutory protections: the oppression remedy (s. 248 OBCA) allows courts to grant broad remedies for conduct that is oppressive, unfairly prejudicial, or that unfairly disregards a shareholder's interests; dissent rights (s. 185 OBCA) allow shareholders to receive fair value for shares on fundamental changes; and derivative action rights (s. 246 OBCA) allow shareholders to sue in the corporation's name when directors fail to act.",
  },
];

export default function OntarioShareholderAgreementPage() {
  return (
    <>
      <Script
        id="ontario-shareholder-agreement-schema"
        type="application/ld+json"
      >
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
            / Ontario Shareholder Agreement
          </nav>
        </div>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 py-12">
          <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Corporate Law
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Ontario Shareholder Agreement Guide 2024: USA, Buy-Sell Mechanisms,
            and Minority Protections
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            A comprehensive reference for Ontario corporate lawyers — covering
            unanimous shareholder agreements, shotgun clauses, drag-along and
            tag-along rights, vesting provisions, and key OBCA minority
            protections.
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
              A shareholder agreement is the constitutional document that governs
              how shareholders in a private Ontario corporation work together —
              and how they separate when things go wrong. Without one, disputes
              default to the bare bones of the{" "}
              <em>Ontario Business Corporations Act</em> (OBCA) and the
              corporation&apos;s articles, which rarely reflect what the parties
              actually intended.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide covers the eight core provisions Ontario corporate
              lawyers should address in every shareholder agreement, the special
              rules for Unanimous Shareholder Agreements under s. 108 OBCA, and
              the statutory minority shareholder protections that exist even
              without a well-drafted agreement.
            </p>
          </section>

          {/* USA vs Regular SA */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Shareholder Agreement vs Unanimous Shareholder Agreement
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 text-lg mb-3">
                  Regular Shareholder Agreement
                </h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>
                    • Can be signed by any subset of shareholders (not all)
                  </li>
                  <li>• Does not restrict board powers</li>
                  <li>• Not automatically binding on future shareholders</li>
                  <li>• Contract law governs — parties can sue for breach</li>
                  <li>• More flexible; does not require unanimous execution</li>
                </ul>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h3 className="font-semibold text-indigo-900 text-lg mb-3">
                  Unanimous Shareholder Agreement (USA)
                </h3>
                <ul className="space-y-2 text-indigo-800 text-sm">
                  <li>• Must be signed by ALL shareholders</li>
                  <li>• Can restrict or transfer director powers to shareholders</li>
                  <li>• Binding on future shareholders who receive notice (s. 108 OBCA)</li>
                  <li>• Shareholders who receive director powers also assume director liabilities</li>
                  <li>• Survives share transfers if notice given</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm">
                <span className="font-semibold">Practical Note:</span> Most
                small business shareholder agreements are called &quot;unanimous
                shareholder agreements&quot; but do not fully restrict director powers
                — they function primarily as regular shareholder agreements with
                unanimous execution. True USA restrictions under s. 108 OBCA
                have significant legal consequences that clients must understand.
              </p>
            </div>
          </section>

          {/* Core Provisions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Eight Core Provisions for Every Ontario Shareholder Agreement
            </h2>
            <div className="space-y-4">
              {provisions.map((prov, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {i + 1}. {prov.provision}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">
                    {prov.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="font-semibold text-slate-700">
                        Protects:{" "}
                      </span>
                      <span className="text-slate-600">
                        {prov.whoItProtects}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">
                        Key drafting:{" "}
                      </span>
                      <span className="text-slate-600">
                        {prov.keyConsiderations}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* OBCA Minority Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Statutory Minority Shareholder Protections Under the OBCA
            </h2>
            <p className="text-slate-700 mb-6">
              Even without a shareholder agreement, Ontario minority shareholders
              have significant statutory rights. These rights exist as a floor —
              a well-drafted shareholder agreement should build on them.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">
                      Right
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Section
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      When It Applies
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Remedy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {obcaRights.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.right}
                      </td>
                      <td className="px-4 py-3 text-indigo-600 font-medium">
                        {row.section}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.description}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{row.remedy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Deadlock */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Deadlock Resolution Mechanisms
            </h2>
            <p className="text-slate-700 mb-4">
              A 50-50 shareholder structure without deadlock provisions is a
              recipe for litigation. Ontario courts will not break a legitimate
              deadlock between equal shareholders — the parties must have
              provided for it contractually.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Shotgun Clause",
                  text: "Fastest resolution but favours the wealthier party. Best for equal shareholders in similar financial positions.",
                },
                {
                  title: "Mediation/Arbitration",
                  text: "Third-party neutral resolves disagreement. Slower but preserves relationship better than forced buy-out.",
                },
                {
                  title: "Casting Vote",
                  text: "Chair of board or a specified director has a casting vote on deadlocked board resolutions. Simple but concentrates power.",
                },
                {
                  title: "Independent Director",
                  text: "An agreed-upon neutral director breaks ties. Requires ongoing availability and willingness of the neutral party.",
                },
                {
                  title: "Expert Determination",
                  text: "Specific disputes (e.g., share valuation) referred to an agreed expert whose determination is final and binding.",
                },
                {
                  title: "Wind-Up Provisions",
                  text: "Last resort: agreement provides for orderly dissolution if deadlock persists beyond a set period without resolution.",
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
              Manage Your Corporate Law Practice with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Atticus helps Ontario corporate lawyers draft shareholder
              agreements faster with AI, track matter deadlines, and stay LSO
              compliant — all in one platform.
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
                  href: "/blog/ontario-business-purchase-agreement",
                  label: "Ontario Business Purchase Agreements",
                },
                {
                  href: "/blog/ontario-professional-corporation",
                  label: "Ontario Professional Corporations",
                },
                {
                  href: "/blog/ontario-securities-law",
                  label: "Ontario Securities Law",
                },
                {
                  href: "/blog/ontario-franchise-law",
                  label: "Ontario Franchise Law",
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
