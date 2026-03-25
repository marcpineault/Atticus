import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caseline Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Caseline vs Atticus for Ontario law firms. Caseline is a court document presentation system — no practice management, no trust accounting, no AI. Atticus is complete Ontario practice management.",
  openGraph: {
    title: "Caseline Canada Alternative — Ontario Law Firms",
    description:
      "Caseline is a courtroom document presentation tool with no trust accounting, no matter management, and no AI. Atticus is the complete Ontario alternative.",
    type: "website",
    url: "https://getatticus.ca/caseline-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/caseline-canada-alternative" },
};

export default function CaselineCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Caseline Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Caseline vs Atticus for Ontario law firms. Caseline is a court document presentation system that lacks LSO By-Law 9 trust accounting, practice management, billing, and AI capabilities.",
    url: "https://getatticus.ca/caseline-canada-alternative",
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Atticus",
      applicationCategory: "LegalSoftware",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "49",
        priceCurrency: "CAD",
        description: "Flat $149 CAD/month per lawyer per month",
      },
    },
  };

  const comparisonRows = [
    {
      feature: "LSO By-Law 9 Trust Accounting",
      caseline: "No — no financial management features",
      atticus: "Native — receipt, disbursement, reconciliation",
    },
    {
      feature: "Practice Management",
      caseline: "No — court document presentation only",
      atticus: "Full matter management, notes, documents",
    },
    {
      feature: "Court Document Presentation",
      caseline: "Yes — core product feature",
      atticus: "Document storage and search; AI document analysis",
    },
    {
      feature: "AI Document Analysis",
      caseline: "No",
      atticus: "Every document summarized and entity-extracted",
    },
    {
      feature: "Billing and Invoicing",
      caseline: "No",
      atticus: "Time tracking, invoicing, HST in CAD",
    },
    {
      feature: "Canadian Data Residency",
      caseline: "Yes — Caseline is a Canadian product",
      atticus: "Yes — Canadian data residency, PIPEDA compliant",
    },
    {
      feature: "Deadline Tracking",
      caseline: "No",
      atticus: "Automated with overdue alerts and AI chat",
    },
    {
      feature: "Pricing",
      caseline: "Per-proceeding or subscription for litigators",
      atticus: "$149 CAD/month — per lawyer, all features included",
    },
    {
      feature: "Target Market",
      caseline: "Litigators presenting materials in court",
      atticus: "Ontario solo and small law firms exclusively",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-400 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
            Caseline Canada Alternative
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Caseline vs Atticus for Ontario Lawyers
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Caseline is a courtroom document presentation system — essential for litigators in court, but not
            practice management software. Atticus manages the entire practice: trust accounting, matter management,
            AI document analysis, billing, and deadlines — everything outside the courtroom.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-blue-400 hover:bg-blue-300 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* What Is Caseline */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Is Caseline?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Caseline (CaseLine Online) is a Canadian digital platform widely used in Ontario courts for electronic
            filing and presentation of court materials. It is used by courts, parties, and counsel to upload,
            organize, and present documents, affidavits, exhibits, and books of authorities in proceedings before
            the Superior Court of Justice and other Ontario tribunals.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Caseline is a courtroom and court filing tool — not practice management software. It does not handle
            trust accounting, billing, matter management, client intake, time tracking, or any of the day-to-day
            operations of running a law practice. Firms using Caseline for document presentation still need
            separate software to run every other aspect of their practice.
          </p>
          <p className="text-lg text-gray-700">
            Atticus is not a replacement for Caseline&apos;s courtroom presentation features, but it is the
            complete answer to everything else: managing the firm&apos;s matters, documents, trust accounts,
            billing, and AI analysis from intake to invoice.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Caseline vs Atticus — Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 font-semibold w-1/3">Feature</th>
                  <th className="px-6 py-4 font-semibold w-1/3">Caseline</th>
                  <th className="px-6 py-4 font-semibold w-1/3">Atticus</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.caseline}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5 Reasons */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Ontario Litigators Add Atticus to Their Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Trust Accounting for Litigators",
                body:
                  "Litigation practices receive significant trust funds — retainers, court-ordered holdbacks, settlement funds. Atticus provides LSO By-Law 9 compliant trust accounting natively. Caseline has no financial management features at all.",
              },
              {
                title: "Matter Management from Intake to Close",
                body:
                  "Track every step of litigation matters — pleadings, discoveries, motions, appeals — with matter records, document storage, and AI-powered analysis. Caseline only handles presentation of materials already prepared.",
              },
              {
                title: "AI Extracts Key Facts from Case Documents",
                body:
                  "Atticus AI processes uploaded affidavits, expert reports, and correspondence — extracting dates, parties, dollar amounts, and deadlines automatically. Get instant answers about any document in your matter files.",
              },
              {
                title: "Deadline Tracking for Litigation Timelines",
                body:
                  "Ontario limitation periods, motion return dates, discovery deadlines, appeal timelines — Atticus tracks every critical date and alerts you before deadlines pass. Missing a limitation period is malpractice. Caseline has no deadline tracking.",
              },
              {
                title: "Billing That Works for Litigation Practices",
                body:
                  "Track time on every step of litigation — research, pleadings, motions, hearings — and generate invoices with HST in CAD. Atticus billing integrates with trust accounting so disbursements and fees are always reconciled.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
                <p className="text-gray-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing Comparison</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Caseline</h3>
              <p className="text-gray-500 mb-4">Court document presentation</p>
              <ul className="space-y-3 text-gray-700">
                <li>Per-proceeding or subscription pricing</li>
                <li>Court document upload and presentation only</li>
                <li>No trust accounting</li>
                <li>No practice management</li>
                <li>No billing or time tracking</li>
                <li>No AI</li>
                <li>Canadian product</li>
              </ul>
            </div>
            <div className="border-2 border-blue-500 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                Ontario&apos;s Choice
              </div>
              <h3 className="text-2xl font-bold mb-2">Atticus</h3>
              <p className="text-gray-500 mb-4">Complete Ontario practice management</p>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                $49 <span className="text-lg font-normal text-gray-600">CAD/month</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Per lawyer per month</p>
              <ul className="space-y-3 text-gray-700">
                <li>LSO By-Law 9 trust accounting</li>
                <li>AI document analysis and assistant</li>
                <li>Matter management and documents</li>
                <li>Billing, invoicing with HST</li>
                <li>Deadline tracking and alerts</li>
                <li>Canadian data residency PIPEDA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Run the Whole Practice, Not Just the Courtroom
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Keep Caseline for court presentations. Add Atticus for everything else — trust accounting, AI,
            matter management, billing, and deadlines in one platform built for Ontario litigators.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-blue-400 hover:bg-blue-300 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            No credit card required &middot; $149 CAD/month after trial
          </p>
        </div>
      </section>
    </div>
  );
}
