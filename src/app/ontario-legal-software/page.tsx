import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontario Legal Practice Management Software — Atticus",
  description:
    "Atticus is AI-powered legal practice management software built for Ontario solo and small law firms. Manage clients, matters, deadlines, billing, trust accounting, and conflict checks — all in one place.",
  keywords: [
    "ontario legal practice management software",
    "legal practice management software ontario",
    "law firm software ontario",
    "solo law firm software ontario",
    "legal software canada ontario",
    "practice management software ontario lawyers",
    "legal management software small firm",
    "law office software ontario",
    "ontario lawyer software",
    "legal billing software ontario",
  ],
  openGraph: {
    title: "Ontario Legal Practice Management Software — Atticus",
    description:
      "AI-powered practice management for Ontario solo and small law firms. Proactive daily briefings, document AI, trust accounting, and conflict checks.",
    type: "website",
    url: "https://getatticus.ca/ontario-legal-software",
  },
  alternates: { canonical: "https://getatticus.ca/ontario-legal-software" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ontario Legal Practice Management Software — Atticus",
  url: "https://getatticus.ca/ontario-legal-software",
  description: "AI-powered legal practice management software built specifically for Ontario solo and small law firms.",
  mainEntity: [
    {
      "@type": "SoftwareApplication",
      name: "Atticus",
      applicationCategory: "LegalService",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "149",
        priceCurrency: "CAD",
      },
      description:
        "AI-native legal practice management software for Ontario solo and small law firms, featuring document AI, proactive daily briefings, Ontario limitation period calculator, trust accounting, billing with HST, and conflict of interest checking.",
      url: "https://getatticus.ca",
    },
  ],
};

const features = [
  {
    icon: "📋",
    title: "Ontario Limitation Periods",
    description:
      "Built-in calculator covering Limitations Act, 2002 (2-year, 15-year ultimate), Municipal Act notice periods, Construction Act liens, and more. Add calculated deadlines directly to your tracker.",
  },
  {
    icon: "🤖",
    title: "AI Document Intelligence",
    description:
      "Every document and meeting recording processed automatically. Extracts deadlines, parties, dollar amounts, case references, and action items. No manual data entry.",
  },
  {
    icon: "☀️",
    title: "Daily Morning Briefing",
    description:
      "Every weekday at 9am ET, get an email with overdue deadlines, what's due today, upcoming deadlines, overdue invoices, and negative trust balances.",
  },
  {
    icon: "⚖️",
    title: "Law Society Compliance",
    description:
      "AI consent disclosure for LSO Rule 3.3 on first login, trust accounting with ledger export, all data stored in Canada under PIPEDA.",
  },
  {
    icon: "🔍",
    title: "Conflict of Interest Checking",
    description:
      "AI-powered search across all existing clients, matters, and document parties. Returns severity rating (high/medium/low) with plain-language reasons in seconds.",
  },
  {
    icon: "💰",
    title: "Billing with HST",
    description:
      "Generate invoices with 13% HST, send by email, track payments. Automated overdue reminders. Trust account receipts and disbursements with negative balance alerts.",
  },
];

export default function OntarioLegalSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Nav */}
        <nav className="border-b border-white/10 px-6 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Atticus
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/calculator" className="text-sm text-white/60 hover:text-white transition-colors">
                Limitation Calculator
              </Link>
              <Link
                href="/sign-up"
                className="text-sm bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header className="px-6 pt-20 pb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium text-amber-400 tracking-widest uppercase mb-4">
              Built for Ontario
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Legal Practice Management
              <br />
              <span className="text-white/50">for Ontario Law Firms</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
              Atticus combines AI document intelligence, Ontario-specific compliance tools, billing, trust accounting, and proactive daily briefings — built for solo and small Ontario firms.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/sign-up"
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Start 14-Day Free Trial
              </Link>
              <Link
                href="/calculator"
                className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:border-white/40 transition-colors"
              >
                Free Limitation Calculator →
              </Link>
            </div>
            <p className="text-sm text-white/40 mt-4">
              No credit card required · All data stored in Canada
            </p>
          </div>
        </header>

        {/* Features grid */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-3">
              Everything Ontario Law Firms Need
            </h2>
            <p className="text-center text-white/50 mb-12 max-w-xl mx-auto">
              Built around Ontario practice requirements — not adapted from a generic North American product.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
                >
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ontario specifics highlight */}
        <section className="px-6 py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Ontario-Specific Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-amber-400">Limitation Periods (Limitations Act, 2002)</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex gap-2"><span>✓</span> 2-year general limitation period</li>
                  <li className="flex gap-2"><span>✓</span> 15-year ultimate limitation period</li>
                  <li className="flex gap-2"><span>✓</span> Minor tolling (to age 18)</li>
                  <li className="flex gap-2"><span>✓</span> Municipal Act notice (10 days)</li>
                  <li className="flex gap-2"><span>✓</span> Construction Act lien periods</li>
                  <li className="flex gap-2"><span>✓</span> Sexual assault (no limitation)</li>
                  <li className="flex gap-2"><span>✓</span> Defamation periods</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-amber-400">Law Society Compliance</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex gap-2"><span>✓</span> LSO Rule 3.3 AI consent disclosure</li>
                  <li className="flex gap-2"><span>✓</span> Trust accounting with CSV export</li>
                  <li className="flex gap-2"><span>✓</span> Negative trust balance alerts</li>
                  <li className="flex gap-2"><span>✓</span> All data stored in Canada (PIPEDA)</li>
                  <li className="flex gap-2"><span>✓</span> HST (13%) billing</li>
                  <li className="flex gap-2"><span>✓</span> Matter templates for Ontario law</li>
                  <li className="flex gap-2"><span>✓</span> AI drafted Ontario legal documents</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="px-6 py-16 border-t border-white/10">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Simple Pricing</h2>
            <div className="bg-white/5 border border-white/20 rounded-2xl p-8">
              <p className="text-4xl font-bold mb-1">$149<span className="text-xl font-normal text-white/50"> CAD</span></p>
              <p className="text-white/50 text-sm mb-6">per lawyer / month</p>
              <ul className="text-sm text-white/70 space-y-2 text-left mb-8">
                <li className="flex gap-2"><span className="text-amber-400">✓</span> All features included</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> Unlimited document processing</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> All AI features</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> 14-day free trial</li>
                <li className="flex gap-2"><span className="text-amber-400">✓</span> No credit card to start</li>
              </ul>
              <Link
                href="/sign-up"
                className="block w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors text-center"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {[
                {
                  q: "What legal practice management software is built for Ontario lawyers?",
                  a: "Atticus is purpose-built for Ontario solo and small law firms. It includes an Ontario limitation period calculator, LSO Rule 3.3 AI consent disclosure, trust accounting with CSV export, HST billing, and matter templates for Ontario practice areas including real estate, wills, corporate, and litigation.",
                },
                {
                  q: "Does Atticus support Ontario trust accounting?",
                  a: "Yes. Atticus includes a full trust ledger where you record receipts and disbursements, track per-client balances, and export a CSV trust ledger. Your daily briefing email will alert you if any client trust balance goes negative.",
                },
                {
                  q: "Is Atticus PIPEDA compliant for Ontario lawyers?",
                  a: "Yes. All Atticus data is stored in Canada using Railway Canadian infrastructure. The platform is PIPEDA-compliant and includes an LSO Rule 3.3 AI consent disclosure on first login. Client data is never used to train AI models.",
                },
                {
                  q: "How does Atticus compare to other legal software options in Canada?",
                  a: "Unlike generic practice management software, Atticus is AI-first and Ontario-specific. You get proactive daily briefings every morning, AI that reads and summarizes your documents, meeting transcription, and a built-in Ontario limitation period calculator — none of which most other platforms offer.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-white/10 pb-8">
                  <h3 className="font-semibold mb-3">{q}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-20 border-t border-white/10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Start Your Free Trial Today</h2>
            <p className="text-white/60 mb-8">
              14 days, all features, no credit card required. Ontario lawyers start with Atticus and stay because it works.
            </p>
            <Link
              href="/sign-up"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Create Free Account →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-white/10 text-center text-sm text-white/30">
          <p>© 2026 Atticus · Ontario, Canada · <a href="mailto:hello@getatticus.ca" className="hover:text-white/60 transition-colors">hello@getatticus.ca</a></p>
          <div className="flex gap-4 justify-center mt-2 flex-wrap">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/calculator" className="hover:text-white/60 transition-colors">Limitation Calculator</Link>
            <Link href="/clio-alternative" className="hover:text-white/60 transition-colors">Clio Alternative</Link>
            <Link href="/ontario-real-estate-lawyer" className="hover:text-white/60 transition-colors">Real Estate</Link>
            <Link href="/ontario-wills-estate-lawyer" className="hover:text-white/60 transition-colors">Wills &amp; Estate</Link>
            <Link href="/ontario-family-lawyer" className="hover:text-white/60 transition-colors">Family Law</Link>
            <Link href="/ontario-corporate-lawyer" className="hover:text-white/60 transition-colors">Corporate Law</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
