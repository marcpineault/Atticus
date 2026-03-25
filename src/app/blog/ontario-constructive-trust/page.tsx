import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Constructive Trust Guide 2024 | Unjust Enrichment & Tracing",
  description:
    "Complete guide to constructive trusts in Ontario: unjust enrichment test, proprietary vs personal remedies, tracing, common intention trust, and family/commercial applications.",
  openGraph: {
    title: "Ontario Constructive Trust Guide 2024 | Unjust Enrichment & Tracing",
    description:
      "Everything Ontario lawyers need to know about constructive trusts — unjust enrichment, juristic reason, remedial vs institutional constructive trust, and tracing principles.",
    url: "https://getatticus.ca/blog/ontario-constructive-trust",
    siteName: "Atticus",
    type: "article",
  },
};

const schemaJson = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ontario Constructive Trust Guide 2024: Unjust Enrichment, Tracing, and Remedies",
      "description": "Comprehensive guide to constructive trust law in Ontario covering the unjust enrichment test, proprietary remedies, tracing, and applications in family law and commercial contexts.",
      "url": "https://getatticus.ca/blog/ontario-constructive-trust",
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
          "name": "What are the three elements of unjust enrichment in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Kerr v Baranow [2011] SCC 10, the three elements are: (1) an enrichment of the defendant, (2) a corresponding deprivation of the plaintiff, and (3) the absence of a juristic reason for the enrichment. The juristic reason analysis considers established categories (contract, gift, disposition of law) and a residual category based on the reasonable expectations of the parties and public policy."
          }
        },
        {
          "@type": "Question",
          "name": "When will a court impose a constructive trust rather than a monetary remedy for unjust enrichment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A proprietary remedy (constructive trust) is granted when a monetary award would be inadequate because: (1) the defendant is insolvent, (2) the specific property has special value to the plaintiff, or (3) the plaintiff made a sufficiently direct contribution to the acquisition or preservation of specific property. A mere causal link to a fund or asset is insufficient — the connection must be direct."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a remedial and institutional constructive trust?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An institutional constructive trust arises automatically by operation of law upon the occurrence of certain events (e.g., a fiduciary breach), regardless of judicial recognition. A remedial constructive trust is a discretionary remedy imposed by a court to reverse unjust enrichment. Canada (unlike England) recognizes both but primarily uses the remedial constructive trust as a flexible equitable remedy."
          }
        },
        {
          "@type": "Question",
          "name": "Can a constructive trust be claimed in family law matters in Ontario?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Unjust enrichment and constructive trust claims are available in Ontario family law matters, particularly for unmarried (common-law) spouses. Married spouses are generally governed by the equalization of net family property regime under the Family Law Act, but may still bring unjust enrichment claims for specific assets. Common-law spouses outside the Family Law Act may rely on constructive trust to claim an interest in a partner's property."
          }
        }
      ]
    }
  ]
}`;

type UEElement = {
  element: string;
  description: string;
  notes: string;
};

const ueElements: UEElement[] = [
  {
    element: "Enrichment of the Defendant",
    description:
      "The defendant received a benefit — money, property, services, or assumption of debt",
    notes:
      "Broadly interpreted; includes free labour, mortgage payments, home improvements",
  },
  {
    element: "Corresponding Deprivation of the Plaintiff",
    description:
      "The plaintiff suffered a loss or provided something of value without compensation",
    notes:
      "Loss corresponds to the enrichment; not necessarily equal in amount",
  },
  {
    element: "Absence of Juristic Reason",
    description:
      "No legal basis justifies the defendant retaining the enrichment at the plaintiff's expense",
    notes:
      "Established reasons: contract, gift, testamentary disposition, statutory requirement",
  },
];

type RemedyType = {
  remedy: string;
  type: string;
  whenGranted: string;
  effect: string;
};

const remedies: RemedyType[] = [
  {
    remedy: "Constructive Trust",
    type: "Proprietary",
    whenGranted:
      "Defendant insolvent; special value; direct link to specific property",
    effect:
      "Plaintiff holds an equitable interest in identified property; priority over creditors",
  },
  {
    remedy: "Monetary Award",
    type: "Personal",
    whenGranted: "Default remedy; no special reason for proprietary remedy",
    effect: "Judgment debt; no priority in insolvency",
  },
  {
    remedy: "Quantum Meruit",
    type: "Personal",
    whenGranted: "Services rendered without compensation",
    effect: "Market value of services; assessed at time of trial",
  },
  {
    remedy: "Joint Family Venture",
    type: "Proprietary/Personal",
    whenGranted:
      "Common-law spouses who pooled efforts over time (Kerr v Baranow)",
    effect: "Proportionate share of wealth accumulated through joint efforts",
  },
];

type Context = {
  context: string;
  application: string;
  keyCase: string;
};

const applications: Context[] = [
  {
    context: "Common-Law Spouses",
    application:
      "Partner claims interest in family home or assets on breakdown; unjust enrichment for unpaid domestic contributions",
    keyCase: "Kerr v Baranow [2011] SCC 10",
  },
  {
    context: "Fiduciary Breach",
    application:
      "Trustee or director diverts assets to themselves; beneficiary traces proceeds into acquired property",
    keyCase: "Soulos v Korkontzilas [1997] 2 SCR 217",
  },
  {
    context: "Business Relationships",
    application:
      "Business partner misappropriates partnership assets; investor claims trust over specific investment proceeds",
    keyCase: "Lac Minerals Ltd v International Corona Resources [1989] 2 SCR 574",
  },
  {
    context: "Real Property",
    application:
      "Plaintiff contributes to purchase price or mortgage; legal title in defendant's name alone",
    keyCase: "Peter v Beblow [1993] 1 SCR 980",
  },
  {
    context: "Solicitor-Client Relationships",
    application:
      "Solicitor receives secret commission or acts in conflict; client traces proceeds",
    keyCase: "Hodgkinson v Simms [1994] 3 SCR 377",
  },
  {
    context: "Matrimonial Home",
    application:
      "Married spouse claims constructive trust where Family Law Act equalization is inadequate or excluded",
    keyCase: "Various Ontario Superior Court decisions",
  },
];

const faqs = [
  {
    q: "What are the three elements of unjust enrichment in Ontario?",
    a: "Under Kerr v Baranow [2011] SCC 10, the three elements are: (1) an enrichment of the defendant, (2) a corresponding deprivation of the plaintiff, and (3) the absence of a juristic reason for the enrichment. The juristic reason analysis considers established categories (contract, gift, disposition of law) and a residual category based on reasonable expectations of the parties and public policy.",
  },
  {
    q: "When will a court impose a constructive trust rather than a monetary remedy for unjust enrichment?",
    a: "A proprietary remedy (constructive trust) is granted when a monetary award would be inadequate because: (1) the defendant is insolvent, (2) the specific property has special value to the plaintiff, or (3) the plaintiff made a sufficiently direct contribution to the acquisition or preservation of specific property. A mere causal link to a fund or asset is insufficient — the connection must be direct.",
  },
  {
    q: "What is the difference between a remedial and institutional constructive trust?",
    a: "An institutional constructive trust arises automatically by operation of law upon the occurrence of certain events (e.g., a fiduciary breach), regardless of judicial recognition. A remedial constructive trust is a discretionary remedy imposed by a court to reverse unjust enrichment. Canada (unlike England) recognizes both but primarily uses the remedial constructive trust as a flexible equitable remedy.",
  },
  {
    q: "Can a constructive trust be claimed in family law matters in Ontario?",
    a: "Yes. Unjust enrichment and constructive trust claims are available in Ontario family law matters, particularly for unmarried (common-law) spouses. Married spouses are generally governed by the equalization of net family property regime under the Family Law Act, but may still bring unjust enrichment claims for specific assets. Common-law spouses outside the Family Law Act may rely on constructive trust to claim an interest in a partner's property.",
  },
];

export default function OntarioConstructiveTrustPage() {
  return (
    <>
      <Script id="ontario-constructive-trust-schema" type="application/ld+json">
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
            / Ontario Constructive Trust
          </nav>
        </div>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 py-12">
          <div className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Equity & Trusts
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Ontario Constructive Trust Guide 2024: Unjust Enrichment, Tracing,
            and Remedies
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            From common-law spouse claims to fiduciary breaches — understanding
            when Ontario courts impose constructive trusts and how to quantify
            the remedy.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>By Atticus Legal Team</span>
            <span>•</span>
            <span>November 2024</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 pb-20">
          {/* Intro */}
          <section className="mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              Constructive trust is one of equity&apos;s most powerful and flexible
              remedies. Unlike an express trust (created by agreement) or a
              resulting trust (implied by contribution), a constructive trust is
              imposed by law to prevent unjust enrichment — giving the plaintiff
              a proprietary interest in specific assets rather than merely a
              personal claim against the defendant.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This guide explains the three-part unjust enrichment test after{" "}
              <em>Kerr v Baranow</em>, when courts will grant a proprietary
              remedy instead of a monetary award, how to trace misappropriated
              assets, and the key applications in Ontario family law and
              commercial disputes.
            </p>
          </section>

          {/* Three Elements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              The Unjust Enrichment Test: Three Elements
            </h2>
            <p className="text-slate-700 mb-6">
              The Supreme Court of Canada consolidated the unjust enrichment
              doctrine in{" "}
              <em>Kerr v Baranow</em> [2011] SCC 10. All three elements must be
              established.
            </p>
            <div className="space-y-4">
              {ueElements.map((el, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {el.element}
                      </h3>
                      <p className="text-slate-600 text-sm mb-2">
                        {el.description}
                      </p>
                      <p className="text-slate-500 text-xs">
                        <span className="font-medium text-slate-600">
                          Note:{" "}
                        </span>
                        {el.notes}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-semibold text-purple-900 mb-2">
                The Juristic Reason Analysis
              </h3>
              <p className="text-purple-800 text-sm leading-relaxed mb-3">
                The third element — absence of juristic reason — involves a
                two-step analysis after{" "}
                <em>Garland v Consumers&apos; Gas Co</em> [2004] SCC 25:
              </p>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="font-semibold text-purple-900 text-sm">
                    Step 1:
                  </span>
                  <span className="text-purple-800 text-sm">
                    Does the enrichment fall within an established category
                    (contract, gift, disposition of law, statutory
                    requirement)? If yes, there is juristic reason — no unjust
                    enrichment.
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-purple-900 text-sm">
                    Step 2:
                  </span>
                  <span className="text-purple-800 text-sm">
                    If no established category applies, is there a residual
                    reason based on reasonable expectations of the parties and
                    public policy? The onus shifts to the defendant to establish
                    juristic reason.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Remedies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Proprietary vs Personal Remedies
            </h2>
            <p className="text-slate-700 mb-6">
              Establishing unjust enrichment does not automatically entitle the
              plaintiff to a constructive trust. The court must determine whether
              the facts justify a proprietary remedy (constructive trust) or
              whether a personal remedy (monetary award) is adequate.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">
                      Remedy
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">Type</th>
                    <th className="text-left px-4 py-3 font-semibold">
                      When Granted
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Effect
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {remedies.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.remedy}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{row.type}</td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.whenGranted}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{row.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tracing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Tracing Principles
            </h2>
            <p className="text-slate-700 mb-4">
              Tracing is the process of following misappropriated assets through
              a series of transactions to identify what the plaintiff can claim.
              It is a prerequisite to a proprietary remedy — the plaintiff must
              trace their original asset into the specific property or fund
              against which they seek a constructive trust.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Common Law Tracing",
                  text: "Available where property remains in its original form or is exchanged for identifiable substitute. Cannot trace through mixed funds.",
                },
                {
                  title: "Equitable Tracing",
                  text: "Available where there is a fiduciary relationship or misappropriation. Can trace through mixed funds using the lowest intermediate balance rule.",
                },
                {
                  title: "Mixing of Funds",
                  text: "Where trust money is mixed with the defendant's own money, equity allows tracing into the mixed fund. The plaintiff can claim a proportionate share.",
                },
                {
                  title: "Bona Fide Purchaser Defence",
                  text: "A bona fide purchaser for value without notice of the equity takes free of the constructive trust. This defence defeats the tracing claim.",
                },
                {
                  title: "Lowest Intermediate Balance Rule",
                  text: "The plaintiff can only trace up to the lowest balance the fund reached after the mixing — if the defendant dissipated all funds at some point, the tracing fails.",
                },
                {
                  title: "Swollen Assets Theory",
                  text: "Some courts permit a constructive trust over the defendant's general assets where specific tracing is impossible but assets were demonstrably increased by the wrongdoing.",
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

          {/* Applications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Key Applications in Ontario Law
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">
                      Context
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Application
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Leading Case
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {row.context}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.application}
                      </td>
                      <td className="px-4 py-3 text-slate-500 italic text-xs">
                        {row.keyCase}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Joint Family Venture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Joint Family Venture Doctrine
            </h2>
            <p className="text-slate-700 mb-4">
              In <em>Kerr v Baranow</em>, the Supreme Court introduced the joint
              family venture doctrine for long-term domestic partnerships. Where
              former common-law spouses have been engaged in a joint family
              venture — pooling their efforts, resources, and lives toward
              shared goals — a constructive trust (or monetary award) based on
              proportionate contribution may be granted.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-3">
                Four Factors for Joint Family Venture
              </h3>
              <div className="space-y-2">
                {[
                  "Mutual effort — parties worked together, not just parallel lives",
                  "Economic integration — shared finances, joint accounts, joint debts",
                  "Actual intent — did the parties subjectively intend a joint venture?",
                  "Priority of family — one or both parties subordinated career to family",
                ].map((factor, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-blue-600 font-bold">{i + 1}.</span>
                    <span className="text-blue-800 text-sm">{factor}</span>
                  </div>
                ))}
              </div>
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
              Manage Equity and Trust Matters with Atticus
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Atticus helps Ontario lawyers manage complex equity and trust
              matters — tracking deadlines, organizing documents, and staying
              LSO compliant.
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
                  href: "/blog/ontario-spousal-support",
                  label: "Ontario Spousal Support",
                },
                {
                  href: "/blog/ontario-child-custody-law",
                  label: "Ontario Child Custody Law",
                },
                {
                  href: "/blog/ontario-real-estate-purchase-agreement",
                  label: "Ontario Real Estate Purchase Agreements",
                },
                {
                  href: "/blog/ontario-securities-law",
                  label: "Ontario Securities Law",
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
