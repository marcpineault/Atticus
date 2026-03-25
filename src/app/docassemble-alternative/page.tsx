import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docassemble Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Docassemble vs Atticus for Ontario law firms. Docassemble is an open-source document automation tool requiring technical setup. Atticus is a fully hosted Ontario practice management platform with AI document intelligence, trust accounting, and zero IT overhead.",
  alternates: { canonical: "https://getatticus.ca/docassemble-alternative" },
  openGraph: {
    title: "Docassemble Alternative for Ontario Lawyers | Atticus",
    description:
      "Docassemble requires servers, Python, and developer time. Atticus gives Ontario lawyers AI document intelligence, trust accounting, and practice management with no technical setup.",
    url: "https://getatticus.ca/docassemble-alternative",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Docassemble Alternative for Ontario Lawyers",
  description: "Comparison of Docassemble and Atticus for Ontario law firms.",
  url: "https://getatticus.ca/docassemble-alternative",
};

const features = [
  {
    category: "Setup and Deployment",
    atticus: "Fully hosted — sign up and start in minutes, no technical setup required",
    docassemble: "Requires server infrastructure, Python knowledge, and developer configuration",
  },
  {
    category: "AI Document Analysis",
    atticus: "Upload client documents and AI extracts key facts, dates, and obligations instantly",
    docassemble: "Template-based document generation only — no AI extraction from existing documents",
  },
  {
    category: "Trust Accounting",
    atticus: "LSO By-Law 9 compliant mixed trust accounting, monthly reconciliation, client ledgers",
    docassemble: "No accounting features — document automation tool only",
  },
  {
    category: "Practice Management",
    atticus: "Full matter management — clients, files, deadlines, billing in one platform",
    docassemble: "Document generation workflows only — no case management or billing",
  },
  {
    category: "Ontario Legal Templates",
    atticus: "Ontario-specific retainer letters, trust receipts, and client intake forms built in",
    docassemble: "Templates must be built from scratch by a developer — no Ontario content included",
  },
  {
    category: "Maintenance",
    atticus: "Maintained and updated automatically — no IT overhead",
    docassemble: "Ongoing maintenance, security patches, and updates required from internal team",
  },
  {
    category: "Data Residency",
    atticus: "Canadian data storage — PIPEDA compliant from day one",
    docassemble: "Depends on where you host your server — PIPEDA compliance is your responsibility",
  },
  {
    category: "Cost",
    atticus: "From $149 CAD/month — predictable subscription with full support",
    docassemble: "Free software but significant developer time, hosting, and ongoing maintenance costs",
  },
];

export default function DocassembleAlternativePage() {
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
              <span className="text-blue-300 text-sm font-medium">Docassemble vs Atticus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Docassemble Alternative for<br />
              <span className="text-blue-400">Ontario Law Firms</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Docassemble is free but requires servers, Python expertise, and ongoing developer
              maintenance. Atticus is fully hosted — AI document intelligence, LSO trust accounting,
              and Ontario practice management, ready in minutes.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Real Cost of &quot;Free&quot; Open-Source Software</h2>
            <p className="text-slate-600 mb-6">
              Docassemble is powerful open-source software used by legal aid organizations and
              law clinics with dedicated technical staff. For a typical Ontario law firm without
              in-house developers, the reality is different: server setup, Python configuration,
              interview scripting, YAML debugging, and ongoing security updates take more time
              and money than a straightforward SaaS subscription. Atticus is purpose-built for
              Ontario law firms who want AI document intelligence and practice management without
              any technical overhead.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Developer Time Is Not Free",
                  desc: "Docassemble requires a developer to install, configure, and build document interviews. A solo Ontario lawyer or small firm typically has no technical staff — making the effective cost far higher than any subscription.",
                },
                {
                  title: "Templates Must Be Built from Scratch",
                  desc: "Docassemble includes no Ontario legal content. Every retainer letter, intake form, and client questionnaire must be built in YAML by someone with Docassemble expertise. Atticus ships with Ontario-specific templates.",
                },
                {
                  title: "No Practice Management or Accounting",
                  desc: "Docassemble generates documents. It does not manage matters, track time, handle trust accounting, or generate invoices. Ontario lawyers still need a full practice management system alongside it.",
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
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Docassemble vs Atticus: Feature Comparison</h2>
            <p className="text-slate-500 text-center mb-10">For Ontario law firms and solo lawyers</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Atticus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Docassemble</th>
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
                        <span className="text-red-400 mr-2">✗</span>{row.docassemble}
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
            <h2 className="text-3xl font-bold mb-4">No Servers. No Python. No Developer Required.</h2>
            <p className="text-blue-100 mb-8">
              Atticus gives Ontario lawyers AI document intelligence, LSO-compliant trust
              accounting, and full practice management in a fully hosted platform. Sign up
              today and be running in minutes &mdash; from $149 CAD/month.
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
