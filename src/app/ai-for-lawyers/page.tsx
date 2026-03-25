import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI for Lawyers in Ontario — Atticus Practice Intelligence",
  description:
    "Discover how Ontario lawyers are using AI to manage their practice. Atticus uses Claude AI for document summarization, meeting transcription, deadline extraction, conflict checks, and legal draft generation.",
  keywords: [
    "ai for lawyers ontario",
    "ai legal assistant ontario",
    "artificial intelligence law firm ontario",
    "ai practice management ontario",
    "ai for solo lawyers canada",
    "ai legal software canada",
    "claude ai for lawyers",
    "ai document review legal ontario",
    "law firm ai tools canada",
    "legal ai ontario",
  ],
  openGraph: {
    title: "AI for Ontario Lawyers — Atticus Practice Intelligence",
    description:
      "How Ontario solo lawyers use AI to handle document review, deadline tracking, billing, and conflict checks — without hiring more staff.",
    type: "website",
    url: "https://getatticus.ca/ai-for-lawyers",
  },
  alternates: { canonical: "https://getatticus.ca/ai-for-lawyers" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI for Lawyers in Ontario — Atticus",
  url: "https://getatticus.ca/ai-for-lawyers",
  description:
    "How Ontario solo lawyers are using AI to run their practice more efficiently with Atticus.",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can Ontario lawyers use AI in their practice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Law Society of Ontario (LSO) permits lawyers to use AI tools, subject to Rule 3.3 (confidentiality). Atticus includes a built-in LSO Rule 3.3 AI consent disclosure on first login, all data is stored in Canada, and no client data is used to train AI models.",
        },
      },
      {
        "@type": "Question",
        name: "What AI tools are available for Ontario lawyers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atticus offers Ontario lawyers: AI document summarization and entity extraction, meeting transcription (audio to structured notes), semantic search across all case files, AI-powered conflict of interest checking, AI legal draft generation (demand letters, wills, affidavits, Ontario court documents), and a conversational AI assistant that can answer questions about your practice and take actions.",
        },
      },
      {
        "@type": "Question",
        name: "Is it ethical for Ontario lawyers to use AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, with appropriate disclosure and oversight. Atticus is built to help Ontario lawyers meet their professional obligations: it discloses AI use to clients through its LSO Rule 3.3 consent flow, stores all data in Canada, doesn't use client data to train AI, and requires the lawyer to review and approve all AI-generated output before sending.",
        },
      },
    ],
  },
};

const useCases = [
  {
    title: "Document Review & Summarization",
    description:
      "Upload any PDF, DOCX, or Word document. Atticus reads it and produces a plain-language summary, extracts all parties, key dates, dollar amounts, case references, deadlines, and action items. No manual review of 50-page contracts line by line.",
    time: "Saves 1–3 hours per document",
  },
  {
    title: "Meeting Transcription",
    description:
      "Record client calls or court proceedings on your phone. Upload the audio file. Atticus transcribes it and extracts all commitments, deadlines, and next steps. Never miss what was agreed in a client meeting.",
    time: "Saves 30–60 min per meeting",
  },
  {
    title: "AI Legal Drafts",
    description:
      "Generate demand letters, settlement proposals, wills (SLRA-compliant), Powers of Attorney (Substitute Decisions Act), Statements of Claim/Defence (Ontario Rules of Civil Procedure), Affidavits, Notices of Motion, and engagement letters — grounded in your actual case files.",
    time: "Saves 2–4 hours per draft",
  },
  {
    title: "Conflict of Interest Checking",
    description:
      "Type a prospective client name. Atticus searches all existing clients, matters, companies, and parties extracted from every document in your practice. AI analyzes the results and returns a severity rating with plain-language reasons in under 10 seconds.",
    time: "Saves 15–30 min per check",
  },
  {
    title: "Daily Practice Briefing",
    description:
      "Every weekday morning at 9am ET, Atticus sends you a briefing: overdue deadlines, what's due today, what's due this week, overdue invoices, and any negative trust balances. No more opening five apps to start your day.",
    time: "Saves 20–30 min every morning",
  },
  {
    title: "Semantic Search Across Case Files",
    description:
      "Ask Atticus \"What did Smith say about the closing date?\" or \"Which matters involve a non-compete clause?\" and get answers drawn from your actual documents — not keyword matches, but AI understanding of meaning.",
    time: "Saves hours searching manually",
  },
];

export default function AIForLawyersPage() {
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
              Ontario Law Firms
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              AI for Lawyers
              <br />
              <span className="text-white/50">That Actually Works</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
              Ontario solo lawyers use Atticus to review documents, transcribe meetings, check conflicts, generate legal drafts, and stay ahead of every deadline — without hiring more staff.
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
                Free Ontario Limitation Calculator →
              </Link>
            </div>
            <p className="text-sm text-white/40 mt-4">
              No credit card · All data stored in Canada · LSO Rule 3.3 compliant
            </p>
          </div>
        </header>

        {/* Stats bar */}
        <section className="border-y border-white/10 px-6 py-8">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10 sec", label: "Conflict check" },
              { value: "9am ET", label: "Daily briefing" },
              { value: "8", label: "Ontario matter templates" },
              { value: "$149/mo", label: "All-in pricing" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-amber-400">{value}</p>
                <p className="text-sm text-white/50 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-3">How Ontario Lawyers Use Atticus AI</h2>
            <p className="text-center text-white/50 mb-12 max-w-xl mx-auto">
              Practical AI use cases that solo and small firm lawyers use every day.
            </p>
            <div className="space-y-4">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors flex flex-col md:flex-row gap-4"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{uc.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{uc.description}</p>
                  </div>
                  <div className="md:text-right shrink-0">
                    <span className="inline-block bg-amber-400/10 text-amber-400 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                      {uc.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LSO compliance note */}
        <section className="px-6 py-16 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">AI and LSO Professional Obligations</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
              <p className="text-white/70 text-sm leading-relaxed">
                The Law Society of Ontario permits lawyers to use AI tools subject to their professional obligations, including Rule 3.3 (confidentiality), Rule 3.1 (competence), and supervision of non-lawyer work.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Atticus is designed for LSO compliance:
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-3"><span className="text-amber-400 shrink-0">✓</span> Built-in AI consent disclosure on first login (Rule 3.3 awareness)</li>
                <li className="flex gap-3"><span className="text-amber-400 shrink-0">✓</span> All client data stored in Canada (Railway Canadian infrastructure)</li>
                <li className="flex gap-3"><span className="text-amber-400 shrink-0">✓</span> Data processing agreements with all AI sub-processors (Anthropic, OpenAI, Voyage AI)</li>
                <li className="flex gap-3"><span className="text-amber-400 shrink-0">✓</span> Client data never used to train AI models</li>
                <li className="flex gap-3"><span className="text-amber-400 shrink-0">✓</span> Lawyer reviews and approves all AI-generated drafts before sending</li>
                <li className="flex gap-3"><span className="text-amber-400 shrink-0">✓</span> PIPEDA-compliant</li>
              </ul>
              <p className="text-white/40 text-xs mt-4">
                This is informational only and not legal advice about your professional obligations. Consult the LSO and your professional liability insurer.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Common Questions</h2>
            <div className="space-y-8">
              {[
                {
                  q: "Is it ethical for Ontario lawyers to use AI?",
                  a: "Yes, with appropriate disclosure and oversight. The LSO permits AI use. Atticus is built to help meet your obligations: it discloses AI use, stores data in Canada, doesn't train on client data, and requires lawyer review before AI output is sent to clients.",
                },
                {
                  q: "Can AI replace a legal assistant for an Ontario solo lawyer?",
                  a: "For many administrative tasks — yes. Document review, meeting notes, deadline tracking, conflict checks, draft letters — Atticus handles these. For tasks requiring judgment, supervision, or client relationships, a lawyer is still essential. Atticus frees you to focus on those.",
                },
                {
                  q: "What AI model does Atticus use?",
                  a: "Atticus uses Claude (Anthropic) for document summarization, entity extraction, chat, and legal draft generation. OpenAI Whisper for audio transcription. Voyage AI (voyage-law-2) for semantic search embeddings. All data is processed under data processing agreements.",
                },
                {
                  q: "How accurate is AI legal document summarization?",
                  a: "Atticus extracts structured data (names, dates, amounts, deadlines) with high accuracy. AI-generated summaries and drafts require lawyer review. The system is a first-pass tool that saves hours — not a replacement for lawyer judgment.",
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

        {/* CTA */}
        <section className="px-6 py-20 border-t border-white/10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Try AI for Your Practice — Free</h2>
            <p className="text-white/60 mb-8">
              14-day free trial. All features. No credit card. Ontario lawyers are using AI with Atticus today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/sign-up"
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Start Free Trial →
              </Link>
              <Link
                href="/calculator"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:border-white/40 transition-colors"
              >
                Try Limitation Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-white/10 text-center text-sm text-white/30">
          <p>© 2026 Atticus · Ontario, Canada · <a href="mailto:hello@getatticus.ca" className="hover:text-white/60 transition-colors">hello@getatticus.ca</a></p>
          <div className="flex gap-4 justify-center mt-2">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/calculator" className="hover:text-white/60 transition-colors">Limitation Calculator</Link>
            <Link href="/clio-alternative" className="hover:text-white/60 transition-colors">Clio Alternative</Link>
            <Link href="/ontario-legal-software" className="hover:text-white/60 transition-colors">Ontario Legal Software</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
