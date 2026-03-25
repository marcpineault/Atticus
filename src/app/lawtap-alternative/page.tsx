import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LawTap Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing LawTap vs Atticus for Ontario law firms. LawTap is an appointment booking tool for lawyers. Atticus provides integrated scheduling, client intake, full practice management, LSO trust accounting, and AI document intelligence in one Ontario-built platform.",
  alternates: { canonical: "https://getatticus.ca/lawtap-alternative" },
  openGraph: {
    title: "LawTap Alternative for Ontario Lawyers | Atticus",
    description:
      "LawTap handles appointment bookings. Atticus handles your entire practice — scheduling, intake, matter management, trust accounting, and AI document intelligence.",
    url: "https://getatticus.ca/lawtap-alternative",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "LawTap Alternative for Ontario Lawyers",
  description: "Comparison of LawTap and Atticus for Ontario law firms.",
  url: "https://getatticus.ca/lawtap-alternative",
};

const features = [
  {
    category: "Appointment Scheduling",
    atticus: "Integrated client intake with scheduling — bookings create client and matter records automatically",
    lawtap: "Online appointment booking only — no automatic matter or file creation",
  },
  {
    category: "Practice Management",
    atticus: "Full matter management — clients, files, deadlines, documents in one platform",
    lawtap: "Scheduling tool only — no practice management features",
  },
  {
    category: "Trust Accounting",
    atticus: "LSO By-Law 9 compliant mixed trust accounting, monthly reconciliation",
    lawtap: "No accounting features — not designed for law firm finance",
  },
  {
    category: "AI Document Analysis",
    atticus: "Extracts key facts, deadlines, and obligations from uploaded client documents",
    lawtap: "No document analysis — appointment booking focus only",
  },
  {
    category: "Ontario Compliance",
    atticus: "LSO rules, limitation period tracking, PIPEDA compliant Canadian data storage",
    lawtap: "No Ontario-specific legal compliance features",
  },
  {
    category: "Time Tracking & Billing",
    atticus: "Built-in time tracking, HST invoicing, Stripe payment collection",
    lawtap: "No time tracking or legal billing",
  },
  {
    category: "Workflow Integration",
    atticus: "Scheduling flows into client intake, conflict check, matter creation, and billing",
    lawtap: "Standalone booking tool — requires separate systems for everything else",
  },
  {
    category: "Pricing",
    atticus: "From $149 CAD/month — full platform including scheduling and intake",
    lawtap: "Separate subscription on top of your existing practice management tools",
  },
];

export default function LawtapAlternativePage() {
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
              <span className="text-blue-300 text-sm font-medium">LawTap vs Atticus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The LawTap Alternative for<br />
              <span className="text-blue-400">Ontario Law Firms</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              LawTap handles appointment bookings. Atticus handles your entire practice &mdash;
              scheduling and intake flow directly into matter management, trust accounting,
              AI document intelligence, and HST billing without a second tool.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Add Another Tool When One Platform Does It All?</h2>
            <p className="text-slate-600 mb-6">
              LawTap solves the client booking problem — letting prospective clients schedule
              consultations online. But after the booking comes the conflict check, the intake
              form, the file opening, the retainer, the trust receipt, and eventually the invoice.
              With LawTap alone, all of that still requires your practice management system.
              Atticus integrates all of it: a new booking creates a client record, the intake
              populates the file, and the AI starts processing documents from day one.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Booking Without a File",
                  desc: "LawTap creates calendar appointments but not client files. Ontario lawyers still need to manually open matters, run conflict checks, and set up trust accounts after every booking.",
                },
                {
                  title: "No LSO Trust Accounting",
                  desc: "From the moment a retainer is received, Ontario lawyers have trust accounting obligations under LSO By-Law 9. LawTap has no accounting features and cannot help with compliance.",
                },
                {
                  title: "Extra Subscription, Extra Work",
                  desc: "LawTap is an add-on cost on top of your practice management software. Atticus includes scheduling and intake as part of the full platform — one tool, one subscription.",
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
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">LawTap vs Atticus: Feature Comparison</h2>
            <p className="text-slate-500 text-center mb-10">For Ontario law firms and solo lawyers</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Atticus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">LawTap</th>
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
                        <span className="text-red-400 mr-2">✗</span>{row.lawtap}
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
            <h2 className="text-3xl font-bold mb-4">From First Booking to Final Invoice — One Platform</h2>
            <p className="text-blue-100 mb-8">
              Atticus gives Ontario lawyers integrated scheduling, intake, matter management,
              trust accounting, and AI document intelligence. No extra tools, no manual data
              entry, no second subscription &mdash; from $149 CAD/month.
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
