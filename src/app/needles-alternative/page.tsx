import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Needles Case Management Alternative for Ontario Lawyers | Atticus",
  description:
    "Looking for a Needles case management alternative? Atticus offers modern cloud-based Ontario practice management with LSO trust accounting, AI document intelligence, and Canadian data residency.",
  openGraph: {
    title: "Needles Case Management Alternative for Ontario Lawyers | Atticus",
    description:
      "Compare Needles vs Atticus. Ontario-focused practice management with LSO By-Law 9 trust accounting, AI-powered document analysis, and $149 CAD/month pricing.",
    type: "website",
    url: "https://getatticus.ca/needles-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/needles-alternative" },
};

export default function NeedlesAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Atticus",
    description:
      "Ontario law practice management with LSO trust accounting, AI document analysis, and cloud-native architecture.",
    applicationCategory: "LegalSoftware",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "49",
      priceCurrency: "CAD",
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500 text-slate-900 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              Needles Alternative
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Ontario-Focused Alternative to Needles Case Management
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Needles is a US-focused personal injury case management platform. Atticus is built for
              Ontario — LSO By-Law 9 trust accounting, AI document intelligence, and practice management
              designed for Canadian law firms managing personal injury, insurance, and civil litigation.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Needles vs Atticus — Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-500">Needles</th>
                    <th className="text-center py-4 px-6 font-semibold text-amber-600">Atticus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Ontario LSO By-Law 9 Trust Accounting", "✗", "✓"],
                    ["Canadian Data Residency", "✗", "✓"],
                    ["Ontario Market Focus", "✗ (US)", "✓"],
                    ["AI Document Analysis", "Limited", "✓"],
                    ["Cloud-Native Access", "✓", "✓"],
                    ["Time Tracking & HST Billing", "Partial", "✓"],
                    ["Matter Management", "✓", "✓"],
                    ["Ontario Limitation Period Tracking", "✗", "✓"],
                    ["Personal Injury Case Support", "Strong", "✓"],
                    ["Pricing (CAD)", "~$150+/mo", "$49/mo"],
                  ].map(([feature, needles, atticus]) => (
                    <tr key={feature} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-700 font-medium">{feature}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{needles}</td>
                      <td className="py-4 px-6 text-center font-semibold text-amber-600">{atticus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What is Needles */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Needles Case Management?</h2>
            <p className="text-lg text-slate-600 mb-4">
              Needles (now part of Assembly Software, also known as Assembly Neos) is a US personal
              injury case management platform used primarily by American plaintiff law firms. It provides
              case lifecycle management, document storage, calendaring, and reporting features focused
              on the personal injury and mass tort practice areas.
            </p>
            <p className="text-lg text-slate-600 mb-4">
              While Needles offers specialized features for tracking medical records, liens, settlement
              funds, and referral sources in the US context, it was not designed for Ontario practice.
              It lacks LSO By-Law 9 trust accounting, HST-compliant billing, Ontario court form support,
              and Canadian data residency.
            </p>
            <p className="text-lg text-slate-600">
              Ontario personal injury lawyers looking for a Needles alternative need a platform that
              understands SABS (Statutory Accident Benefits), DAC assessments, Catastrophic Impairment
              determinations, Ontario FSRA-regulated insurance procedures, and Limitations Act 2002
              two-year discovery-based periods — not just US claim management workflows.
            </p>
          </div>
        </section>

        {/* Why Atticus */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why Ontario Injury Lawyers Choose Atticus Over Needles
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Trust Accounting for Settlement Funds — LSO Compliant
                </h3>
                <p className="text-slate-600">
                  Personal injury settlements flow through the lawyer&apos;s trust account under LSO By-Law 9.
                  Atticus implements the full Ontario trust accounting framework: client trust ledgers,
                  disbursement tracking, transfer authorities, LAWPRO interest on pooled trust funds,
                  and the annual trust report. Needles has no Ontario trust accounting capability —
                  firms must maintain a separate bookkeeping system for settlement fund management.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Ontario Limitation Period Tracking
                </h3>
                <p className="text-slate-600">
                  Ontario personal injury claims are governed by the Limitations Act 2002 two-year
                  basic limitation period (s.4), the Motor Vehicle Accidents Act special rules, and
                  the Proceedings Against the Crown Act 10-day notice period for claims against the
                  Crown. Atticus automatically surfaces key deadline alerts on every matter. Needles
                  does not track Ontario limitation periods natively — US state statutes of limitations
                  are the default.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  AI Document Analysis for Medical Records
                </h3>
                <p className="text-slate-600">
                  Atticus&apos;s AI analyzes medical records, independent medical examinations, SABS
                  assessments, and expert reports — extracting diagnoses, treatment timelines, disability
                  ratings, and key facts for your pleadings and demand letters. This saves significant
                  time on the document-heavy work of personal injury files.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Canadian Data Residency
                </h3>
                <p className="text-slate-600">
                  Client medical records and personal health information are among the most sensitive
                  data Ontario lawyers handle. Atticus stores all data in Canada, satisfying Ontario
                  privacy obligations under PHIPA (Personal Health Information Protection Act) and
                  PIPEDA. Needles&apos; infrastructure is US-based.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  $149 CAD/Month Per Lawyer
                </h3>
                <p className="text-slate-600">
                  Atticus is $149 CAD/month, all features included. Needles pricing (now under
                  Assembly Software) requires enterprise pricing discussions and typically starts at
                  $150+ USD per user per month after currency conversion and feature add-ons. For
                  small Ontario personal injury firms, Atticus represents a 70%+ cost saving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ontario PI Practice Context */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ontario Personal Injury Practice: What Your Software Must Know
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Ontario personal injury practice has unique regulatory features that US-built case management
              software simply does not handle:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "SABS (O.Reg. 34/10)", desc: "Statutory Accident Benefits under the Insurance Act — income replacement, medical/rehabilitation, attendant care, catastrophic impairment determinations" },
                { title: "FSRA Regulation", desc: "Financial Services Regulatory Authority oversight of accident benefits disputes, LAT (Licence Appeal Tribunal) jurisdiction since 2016" },
                { title: "Tort Threshold (s.267.5 IA)", desc: "Serious and permanent injury threshold for general damages in motor vehicle accidents — Ontario&apos;s modified tort system" },
                { title: "DRPC Examinations", desc: "Defence Medical Examinations and s.105 Insurance Act IMEs governed by ORCP and Rules of Civil Procedure" },
                { title: "Limitations Act 2002 s.5", desc: "Discovery-based 2-year period — date plaintiff knew or ought to have known claim was appropriate — critical for delayed diagnosis cases" },
                { title: "Costs under Rule 49", desc: "Offers to settle, Rule 49.10 cost consequences, enhanced costs for defendants who refuse reasonable offers" },
              ].map((item) => (
                <div key={item.title} className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Switch from Needles?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Join Ontario personal injury lawyers who have moved to Atticus for LSO-compliant trust
              accounting, AI medical record analysis, and practice management built for Canada.
            </p>
            <a
              href="/sign-up"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Start Free Trial — $149 CAD/month
            </a>
            <p className="mt-4 text-slate-400 text-sm">No credit card required. Cancel anytime.</p>
          </div>
        </section>
      </main>
    </>
  );
}
