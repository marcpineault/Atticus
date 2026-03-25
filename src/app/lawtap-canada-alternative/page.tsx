import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LawTap Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing LawTap to Atticus for Ontario law firms. LawTap is an online legal appointment booking platform with no trust accounting or matter management. Atticus is purpose-built for Ontario: trust accounting, AI, matter management, flat $149 CAD/month for the whole firm.",
  openGraph: {
    title: "LawTap Canada Alternative — Atticus vs LawTap for Ontario Lawyers",
    description:
      "LawTap is an online legal appointment booking platform — no trust accounting, no matter management. Atticus is built for Ontario: native trust accounting, AI, complete practice management, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/lawtap-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/lawtap-canada-alternative" },
};

export default function LawtapCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "LawTap Canada Alternative for Ontario Lawyers",
    description:
      "Comparing LawTap to Atticus for Ontario law firms. Atticus offers LSO By-Law 9 trust accounting, AI document analysis, and flat $149 CAD/month pricing.",
    url: "https://getatticus.ca/lawtap-canada-alternative",
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Atticus",
      applicationCategory: "LegalPracticeManagement",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "49",
        priceCurrency: "CAD",
        description: "Flat monthly rate per lawyer per month",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              LawTap Canada Alternative
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atticus vs LawTap — Ontario Law Firms Need More Than an Appointment Booking Tool
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              LawTap is an online legal appointment booking platform. Atticus is a complete
              Ontario practice management platform: trust accounting, AI document analysis,
              matter management, billing, and client intake — all at $149 CAD/month for
              your entire firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-3 rounded-lg transition"
              >
                Try Atticus Free
              </Link>
              <Link
                href="/calculator"
                className="border border-slate-400 hover:border-white text-white font-semibold px-8 py-3 rounded-lg transition"
              >
                Compare Costs
              </Link>
            </div>
          </div>
        </section>

        {/* What Is LawTap */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is LawTap?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              LawTap is an Australian-founded online legal appointment booking and client scheduling
              platform with operations in Australia, New Zealand, the United Kingdom, and Canada.
              It allows law firms to embed an online booking widget on their website so that
              prospective clients can book initial consultations and appointments directly.
              LawTap integrates with various calendar tools and practice management platforms.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              LawTap is a single-purpose tool focused exclusively on appointment booking. It has
              no trust accounting, no billing, no matter management, no document analysis, and
              no time tracking. Ontario law firms using LawTap still need a complete practice
              management platform for everything that happens after the initial booking.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Atticus vs LawTap — Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Atticus</th>
                    <th className="text-center p-4 font-semibold">LawTap</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LSO By-Law 9 Trust Accounting", "Native — built-in", "Not available"],
                    ["Pricing", "$149 CAD/month entire firm", "$49–$99+ USD/month"],
                    ["Matter Management", "Full matter management", "Not available"],
                    ["AI Document Analysis", "Included — Ontario law", "Not available"],
                    ["Appointment Booking", "Included with intake", "Core feature"],
                    ["Billing & Invoicing", "Included with HST", "Not available"],
                    ["Client Intake Forms", "Included", "Basic — appointment only"],
                    ["Data Residency", "Canadian — PIPEDA compliant", "International servers"],
                    ["Platform Purpose", "Complete practice management", "Appointment booking only"],
                  ].map(([feature, atticus, lt], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-medium text-slate-800">{feature}</td>
                      <td className="p-4 text-center text-green-700 font-medium">{atticus}</td>
                      <td className="p-4 text-center text-slate-500">{lt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5 Reasons */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              5 Reasons Ontario Lawyers Choose Atticus Over LawTap
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Complete Platform vs Appointment Booking Only",
                  body: "LawTap books appointments. Atticus manages your entire practice: intake from the first booking, through trust accounting, matter management, billing, and AI document analysis. One platform replaces the multiple tools you currently use.",
                },
                {
                  title: "Trust Accounting Built In",
                  body: "LawTap has no trust accounting. Ontario lawyers collecting consultation fees or retainers must maintain LSO By-Law 9 compliant trust accounts. Trust accounting is a Law Society compliance requirement, not optional software. Atticus includes it natively.",
                },
                {
                  title: "Intake That Converts to Matters",
                  body: "LawTap books appointments. Atticus converts intake directly into matters — with client information, conflict checks, and matter setup all flowing from the initial consultation booking into your practice management system without manual re-entry.",
                },
                {
                  title: "Canadian Data Residency",
                  body: "LawTap is an Australian company with international infrastructure. Ontario law firms booking client consultations through a third-party platform should ensure that client information stays in Canada. Atticus stores all data in Canada with PIPEDA compliance.",
                },
                {
                  title: "One Subscription Instead of Many",
                  body: "LawTap is an add-on that requires you to also pay for practice management, trust accounting, billing, and document management software. Atticus replaces all of these at $149 CAD/month total — eliminating the per-tool subscription stack.",
                },
              ].map(({ title, body }, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-600" dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              LawTap + Practice Management vs Atticus All-in-One
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              LawTap plans run $49–$99+ USD/month (~$67–$136 CAD) for appointment booking only.
              Add practice management, trust accounting, billing, and document tools and you are
              spending $500–$800+ CAD/month on a patched-together software stack. Atticus delivers
              everything for $149 CAD/month with nothing else needed.
            </p>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 inline-block">
              <p className="text-4xl font-bold text-indigo-700 mb-2">$149 CAD/month</p>
              <p className="text-slate-600">Complete practice management — no other tools needed</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Replace LawTap and Your Entire Software Stack with Atticus
            </h2>
            <p className="text-slate-300 mb-8">
              Atticus gives Ontario lawyers trust accounting, AI, intake, matter management,
              and billing in one platform at $149 CAD/month for the whole firm.
            </p>
            <Link
              href="/sign-up"
              className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
