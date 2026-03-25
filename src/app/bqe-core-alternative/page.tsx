import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BQE CORE Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing BQE CORE vs Atticus for Ontario law firms. BQE CORE is a general professional services billing platform. Atticus is built specifically for Ontario legal practice — LSO trust accounting, AI document intelligence, and Ontario compliance built in.",
  alternates: { canonical: "https://getatticus.ca/bqe-core-alternative" },
  openGraph: {
    title: "BQE CORE Alternative for Ontario Lawyers | Atticus",
    description:
      "BQE CORE serves architects, engineers, and consultants. Ontario lawyers need LSO trust accounting, Ontario legal compliance, and AI document intelligence — all in Atticus.",
    url: "https://getatticus.ca/bqe-core-alternative",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "BQE CORE Alternative for Ontario Lawyers",
  description: "Comparison of BQE CORE and Atticus for Ontario law firms.",
  url: "https://getatticus.ca/bqe-core-alternative",
};

const features = [
  {
    category: "Trust Accounting",
    atticus: "LSO By-Law 9 compliant mixed trust accounting, monthly reconciliation, client ledgers",
    bqe: "No legal trust accounting — designed for non-legal professional services billing",
  },
  {
    category: "Ontario Legal Compliance",
    atticus: "Limitation period tracking, LSO rules, retainer compliance, PIPEDA data storage",
    bqe: "No Ontario legal compliance features — built for architects, engineers, consultants",
  },
  {
    category: "AI Document Analysis",
    atticus: "Extracts key facts from contracts, pleadings, medical records, and client files",
    bqe: "No AI document analysis — project management focus only",
  },
  {
    category: "Matter Management",
    atticus: "Legal matter management with conflict checking, client files, deadline tracking",
    bqe: "Project management features designed for engineering/architecture workflows",
  },
  {
    category: "HST Legal Invoicing",
    atticus: "HST-compliant legal invoices with detailed time entries, disbursements, trust credits",
    bqe: "Generic professional services invoicing — not formatted for Ontario legal billing",
  },
  {
    category: "Data Residency",
    atticus: "Canadian data storage — PIPEDA compliant",
    bqe: "US data centres — data residency risk for Ontario lawyers",
  },
  {
    category: "Morning AI Briefing",
    atticus: "Daily AI summary of upcoming deadlines, client file updates, and practice insights",
    bqe: "No AI-powered daily briefing for lawyers",
  },
  {
    category: "Target User",
    atticus: "Ontario lawyers and law firms — built for legal practice from $149 CAD/month",
    bqe: "Architects, engineers, accountants, and management consultants",
  },
];

export default function BqeCoreAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-300 text-sm font-medium">BQE CORE vs Atticus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The BQE CORE Alternative for<br />
              <span className="text-blue-400">Ontario Law Firms</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              BQE CORE is built for architects and engineers. Ontario lawyers need LSO trust
              accounting, Ontario compliance features, and AI document intelligence &mdash; all of
              which Atticus provides from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </Link>
              <Link href="/calculator" className="border border-slate-600 hover:border-slate-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Calculate Time Savings
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why BQE CORE Is Not the Right Fit for Ontario Law Firms</h2>
            <p className="text-slate-600 mb-6">
              BQE CORE is an excellent platform for professional services firms like engineering
              consultancies, architecture firms, and management consultants. But law firms have
              fundamentally different requirements: trust accounting under LSO rules, Ontario
              limitation period compliance, legal-specific matter management, and retainer
              obligations. BQE CORE was not designed to meet any of these needs.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "No Legal Trust Accounting",
                  desc: "Ontario lawyers must comply with LSO By-Law 9 — mixed trust accounts, monthly reconciliations, and detailed client ledgers. BQE CORE has no concept of legal trust accounting.",
                },
                {
                  title: "Wrong Professional Context",
                  desc: "BQE CORE workflows, terminology, and reporting are designed for project-based professional services. Legal matters, limitation periods, retainers, and court deadlines are outside its scope.",
                },
                {
                  title: "No AI Legal Intelligence",
                  desc: "Atticus uses AI to extract key facts from your client documents, generating morning briefings and surfacing critical information from contracts, pleadings, and medical records. BQE CORE has no equivalent.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-5 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">BQE CORE vs Atticus: Feature Comparison</h2>
            <p className="text-slate-500 text-center mb-10">For Ontario lawyers and law firms</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Atticus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">BQE CORE</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 w-1/4">{row.category}</td>
                      <td className="px-6 py-4 text-sm text-slate-700 w-[37.5%]">
                        <span className="text-green-600 mr-2">✓</span>{row.atticus}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 w-[37.5%]">
                        <span className="text-red-400 mr-2">✗</span>{row.bqe}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Practice Management Built for Ontario Lawyers</h2>
            <p className="text-blue-100 mb-8">
              Atticus is designed from the ground up for Ontario legal practice — not adapted from
              engineering or consulting software. LSO trust accounting, AI document intelligence,
              and Ontario compliance from $149 CAD/month.
            </p>
            <Link href="/sign-up" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-block">
              Start Your Free Trial
            </Link>
            <p className="text-blue-200 text-sm mt-4">No credit card required &middot; Canadian data storage</p>
          </div>
        </section>
      </main>
    </>
  );
}
