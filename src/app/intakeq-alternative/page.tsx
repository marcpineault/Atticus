import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IntakeQ Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing IntakeQ vs Atticus for Ontario law firms. IntakeQ handles client intake forms. Atticus is a complete practice management platform with AI-powered intake, LSO trust accounting, matter management, and billing built for Ontario lawyers.",
  alternates: { canonical: "https://getatticus.ca/intakeq-alternative" },
  openGraph: {
    title: "IntakeQ Alternative for Ontario Lawyers | Atticus",
    description:
      "IntakeQ is a standalone intake form tool. Atticus gives Ontario lawyers integrated intake, matter management, trust accounting, and AI document intelligence in one platform.",
    url: "https://getatticus.ca/intakeq-alternative",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IntakeQ Alternative for Ontario Lawyers",
  description: "Comparison of IntakeQ and Atticus for Ontario law firms.",
  url: "https://getatticus.ca/intakeq-alternative",
};

const features = [
  {
    category: "Client Intake",
    atticus: "Customizable intake forms that automatically create client and matter records",
    intakeq: "Intake forms only — no automatic matter creation or file setup",
  },
  {
    category: "Practice Management",
    atticus: "Full matter management — clients, files, deadlines, documents in one platform",
    intakeq: "Intake tool only — no matter management, no file organization",
  },
  {
    category: "Trust Accounting",
    atticus: "LSO By-Law 9 compliant mixed trust accounting, monthly reconciliation",
    intakeq: "No accounting features — not designed for law firm finance",
  },
  {
    category: "AI Document Analysis",
    atticus: "Extracts key facts, dates, and obligations from uploaded client documents",
    intakeq: "Form data collection only — no document analysis",
  },
  {
    category: "Time Tracking & Billing",
    atticus: "Built-in time tracking, HST invoicing, Stripe payment collection",
    intakeq: "Basic payment collection — no time tracking or legal billing",
  },
  {
    category: "Ontario Compliance",
    atticus: "Limitation period tracking, LSO rules, PIPEDA compliant data storage in Canada",
    intakeq: "No Ontario-specific legal compliance features",
  },
  {
    category: "Workflow Integration",
    atticus: "Intake flows directly into client file, document management, and billing",
    intakeq: "Standalone tool — requires manual export and import into other systems",
  },
  {
    category: "Pricing",
    atticus: "From $149 CAD/month — full platform including intake",
    intakeq: "Separate subscription on top of practice management software",
  },
];

export default function IntakeQAlternativePage() {
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
              <span className="text-blue-300 text-sm font-medium">IntakeQ vs Atticus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The IntakeQ Alternative for<br />
              <span className="text-blue-400">Ontario Law Firms</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              IntakeQ handles forms. Atticus handles your entire practice &mdash; client intake flows
              directly into matter management, trust accounting, AI document analysis, and HST
              billing without switching tools.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Problem with Standalone Intake Tools</h2>
            <p className="text-slate-600 mb-6">
              IntakeQ solves one problem: collecting information from clients before their first
              appointment. But Ontario lawyers need much more than a form tool. After intake, you
              need to open a file, check for conflicts, set up trust accounting, start tracking time,
              and eventually generate a retainer letter and invoice. With IntakeQ alone, all of that
              still requires a separate system. Atticus handles all of it in one platform &mdash; intake
              to billing, with AI document intelligence at every step.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Intake Without Context",
                  desc: "IntakeQ collects form data but does not create client files, check conflicts, or open matters. Ontario lawyers end up re-entering data into their actual practice management system.",
                },
                {
                  title: "No Trust Accounting",
                  desc: "Every Ontario law firm must maintain trust accounts compliant with LSO By-Law 9. IntakeQ has no accounting features. It cannot manage trust funds, retainer receipts, or monthly reconciliations.",
                },
                {
                  title: "Extra Cost and Complexity",
                  desc: "IntakeQ is a subscription on top of your existing software. Atticus includes integrated intake as part of the full platform — no double subscriptions, no data re-entry, no disconnected tools.",
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
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">IntakeQ vs Atticus: Feature Comparison</h2>
            <p className="text-slate-500 text-center mb-10">For Ontario law firms and solo lawyers</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Atticus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">IntakeQ</th>
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
                        <span className="text-red-400 mr-2">✗</span>{row.intakeq}
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
            <h2 className="text-3xl font-bold mb-4">One Platform from Intake to Invoice</h2>
            <p className="text-blue-100 mb-8">
              Atticus replaces your intake tool, practice management software, and billing system
              with a single Ontario-built platform. Client intake creates the file. The file drives
              the work. The work generates the invoice &mdash; all in one place.
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
