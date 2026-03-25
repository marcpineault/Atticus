import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docketwise Alternative for Ontario Immigration Lawyers | Atticus",
  description:
    "Comparing Docketwise vs Atticus for Ontario immigration lawyers. Docketwise focuses on US immigration forms. Ontario immigration lawyers need IRCC workflows, Canadian data residency, and LSO trust accounting — all in Atticus.",
  alternates: { canonical: "https://getatticus.ca/docketwise-alternative" },
  openGraph: {
    title: "Docketwise Alternative for Ontario Immigration Lawyers | Atticus",
    description:
      "Docketwise is built for US immigration. Ontario immigration lawyers need IRCC forms, Canadian data residency, and LSO trust accounting — all in Atticus.",
    url: "https://getatticus.ca/docketwise-alternative",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Docketwise Alternative for Ontario Immigration Lawyers",
  description: "Comparison of Docketwise and Atticus for Ontario immigration lawyers and paralegals.",
  url: "https://getatticus.ca/docketwise-alternative",
};

const features = [
  {
    category: "Canadian Immigration Workflow",
    atticus: "AI extracts key facts from IRCC applications, study permits, work permits, and PR files",
    docketwise: "US immigration forms and USCIS workflows — no IRCC or Canadian immigration support",
  },
  {
    category: "Trust Accounting",
    atticus: "LSO By-Law 9 compliant mixed trust accounting, monthly reconciliation",
    docketwise: "No Canadian legal trust accounting features",
  },
  {
    category: "Data Residency",
    atticus: "Canadian data storage — PIPEDA compliant, client files stay in Canada",
    docketwise: "US data centres — data sovereignty risk for clients with sensitive immigration status",
  },
  {
    category: "AI Document Analysis",
    atticus: "Extracts key dates, deadlines, and status from immigration documents and correspondence",
    docketwise: "Form population only — no AI extraction from client documents",
  },
  {
    category: "Ontario Paralegal Compliance",
    atticus: "LSO paralegal rules, By-Law 9 trust accounting, scope of practice compliance",
    docketwise: "No LSO paralegal compliance features — US immigration attorney focus",
  },
  {
    category: "Matter Management",
    atticus: "Full matter management with deadlines, document storage, and client communication",
    docketwise: "Immigration case pipeline management — not full practice management",
  },
  {
    category: "Billing and HST",
    atticus: "Time tracking, HST-compliant legal invoices, Stripe payment collection",
    docketwise: "Basic invoicing — no HST support for Canadian billing",
  },
  {
    category: "Morning Briefing",
    atticus: "Daily AI summary of upcoming IRCC deadlines, permit expirations, file status",
    docketwise: "No AI-powered daily briefing",
  },
];

const gaps = [
  {
    title: "Built for US USCIS, Not IRCC",
    desc: "Docketwise is designed around US immigration forms (I-485, I-130, DS-260). Ontario immigration lawyers work with IRCC applications, GCMS notes, IMMs, and CAIPS data — entirely different workflows.",
  },
  {
    title: "No Canadian Data Residency",
    desc: "Immigration clients often have sensitive status, refugee, or inadmissibility information. Storing this in US data centres creates PIPEDA compliance risk and potential harm to vulnerable clients.",
  },
  {
    title: "No LSO Trust Accounting",
    desc: "Ontario immigration lawyers and paralegals must maintain trust accounts under LSO By-Law 9. Docketwise has no concept of Canadian legal trust accounting.",
  },
];

export default function DocketwiseAlternativePage() {
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
              <span className="text-blue-300 text-sm font-medium">Docketwise vs Atticus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Docketwise Alternative for<br />
              <span className="text-blue-400">Ontario Immigration Lawyers</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Docketwise serves US immigration attorneys. Ontario immigration lawyers and paralegals
              need IRCC workflows, Canadian data residency, and LSO trust accounting &mdash;
              all built into Atticus.
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

        <section className="py-16 px-6 bg-amber-50 border-b border-amber-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Docketwise Does Not Work for Ontario Immigration Practice</h2>
            <p className="text-slate-600 mb-6">
              Docketwise has become a popular tool in US immigration firms, but its architecture is
              entirely built around USCIS forms and US immigration pathways. Canadian immigration
              practice operates through IRCC, the Immigration and Refugee Protection Act (IRPA),
              and the Immigration and Refugee Board (IRB) &mdash; fundamentally different agencies,
              forms, and procedures. Ontario immigration paralegals also have unique LSO obligations
              that Docketwise cannot address.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {gaps.map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-5 border border-amber-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Docketwise vs Atticus: Feature Comparison</h2>
            <p className="text-slate-500 text-center mb-10">For Ontario immigration lawyers and authorized paralegals</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Atticus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Docketwise</th>
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
                        <span className="text-red-400 mr-2">✗</span>{row.docketwise}
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
            <h2 className="text-3xl font-bold mb-4">Built for Canadian Immigration Practice</h2>
            <p className="text-blue-100 mb-8">
              Atticus gives Ontario immigration lawyers and paralegals AI document intelligence,
              LSO-compliant trust accounting, and Canadian data residency &mdash; in one platform
              starting at $149 CAD/month.
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
