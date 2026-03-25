import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LSO AI Guidance for Ontario Lawyers — Using AI Compliantly with Atticus",
  description:
    "How Ontario lawyers can use AI tools compliantly under LSO Rules 3.3 (confidentiality), 3.1 (competence), and 5.1 (supervision). Atticus is built around these requirements.",
  keywords: [
    "lso ai guidance ontario lawyers",
    "lso rule 3.3 ai disclosure",
    "law society ontario artificial intelligence",
    "ontario lawyer ai ethics",
    "ai confidentiality ontario law",
    "using ai in legal practice ontario",
    "lso competence ai technology",
    "legal ai compliance canada",
    "law society ai guidelines",
    "ontario lawyer artificial intelligence compliance",
  ],
  openGraph: {
    title: "LSO AI Guidance for Ontario Lawyers — Atticus",
    description:
      "A plain-language guide to using AI tools compliantly as an Ontario lawyer, covering LSO Rules 3.3, 3.1, and 5.1.",
    type: "article",
    url: "https://getatticus.ca/lso-ai-guidance",
  },
  alternates: { canonical: "https://getatticus.ca/lso-ai-guidance" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "LSO AI Guidance for Ontario Lawyers",
  description:
    "How Ontario lawyers can use AI tools compliantly under LSO Rules of Professional Conduct.",
  url: "https://getatticus.ca/lso-ai-guidance",
  author: {
    "@type": "Organization",
    name: "Atticus",
    url: "https://getatticus.ca",
  },
  publisher: {
    "@type": "Organization",
    name: "Atticus",
    url: "https://getatticus.ca",
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can Ontario lawyers use AI tools like Claude or ChatGPT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Law Society of Ontario has not prohibited AI use. Lawyers may use AI tools subject to their existing professional obligations under the Rules of Professional Conduct — particularly Rule 3.3 (confidentiality), Rule 3.1 (competence and staying current with technology), and Rule 5.1 (supervision when using non-lawyer services). Lawyers are responsible for all work product regardless of how it was generated.",
        },
      },
      {
        "@type": "Question",
        name: "What does LSO Rule 3.3 require when using AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rule 3.3 requires lawyers to hold client information in strict confidence. When using AI tools, this means: (1) understanding where client data is stored and who can access it, (2) ensuring sub-processors (AI providers) have appropriate data processing agreements, (3) ideally using tools where data is stored in Canada, and (4) disclosing AI use to clients where the use of confidential information is involved.",
        },
      },
      {
        "@type": "Question",
        name: "Does Atticus comply with LSO Rule 3.3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atticus is built around LSO compliance. All data is stored in Canada (Railway Canadian infrastructure). Data processing agreements exist with all AI sub-processors (Anthropic, OpenAI, Voyage AI). Client data is never used to train AI models. Atticus includes an AI consent disclosure flow on first login to document the lawyer's acknowledgment of AI use, and a timestamp is stored for each consent.",
        },
      },
    ],
  },
};

export default function LSOAIGuidancePage() {
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
              <Link href="/ai-for-lawyers" className="text-sm text-white/60 hover:text-white transition-colors">
                AI for Lawyers
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
        <header className="px-6 pt-20 pb-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium text-amber-400 tracking-widest uppercase mb-4">
              Professional Obligations
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              AI for Ontario Lawyers:
              <br />
              <span className="text-white/50">LSO Compliance Guide</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              A plain-language guide to using AI tools compliantly as an Ontario lawyer under the Law Society of Ontario Rules of Professional Conduct.
            </p>
            <p className="text-xs text-white/30 mt-4">
              This guide is for educational purposes only and does not constitute legal advice about your professional obligations. Consult the LSO and your professional liability insurer.
            </p>
          </div>
        </header>

        {/* Article body */}
        <article className="px-6 pb-16">
          <div className="max-w-3xl mx-auto prose prose-invert prose-sm">

            {/* Rule 3.3 */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-amber-400">Rule 3.3 — Confidentiality</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                <p className="text-white/80 text-sm leading-relaxed italic">
                  &ldquo;A lawyer at all times shall hold in strict confidence all information concerning the business and affairs of a client acquired in the course of the professional relationship and shall not divulge any such information unless expressly or impliedly authorized by the client or required by law to do so.&rdquo;
                </p>
                <p className="text-white/40 text-xs mt-2">— Rule 3.3-1, LSO Rules of Professional Conduct</p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Rule 3.3 is the most relevant provision when using AI tools in legal practice. When you upload a client document to an AI tool, you are sharing confidential client information with a third-party system. The key questions to ask:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Where is client data stored? Is it in Canada?",
                  "Who can access the data? Can the AI provider view it?",
                  "Is the data used to train AI models?",
                  "Is there a data processing agreement with the AI provider?",
                  "Have you disclosed AI use to the client where appropriate?",
                ].map((q) => (
                  <li key={q} className="flex gap-3 text-sm text-white/70">
                    <span className="text-amber-400 shrink-0 mt-0.5">→</span>
                    {q}
                  </li>
                ))}
              </ul>
              <p className="text-white/70 text-sm leading-relaxed">
                Consumer AI tools (ChatGPT free tier, Claude.ai free tier) are generally not appropriate for processing confidential client information. Enterprise or legal-specific tools with appropriate data processing agreements and Canadian data residency are much better positioned.
              </p>
            </section>

            {/* Rule 3.1 */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-amber-400">Rule 3.1 — Competence</h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                <p className="text-white/80 text-sm leading-relaxed italic">
                  &ldquo;A lawyer shall maintain, and strive to improve, competence in the areas in which the lawyer practises. Competence includes... being current with developments in the law, including technology relevant to the lawyer&apos;s practice.&rdquo;
                </p>
                <p className="text-white/40 text-xs mt-2">— Rule 3.1 Commentary, LSO Rules of Professional Conduct</p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                The LSO has stated that technological competence includes understanding AI tools relevant to legal practice. This does not require lawyers to be AI experts — but it does require:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Understanding the limitations and risks of AI-generated output",
                  "Reviewing and verifying any AI-generated work before submitting to clients or courts",
                  "Staying current with how AI is being used in your area of practice",
                  "Understanding what AI tools you use actually do with your data",
                ].map((q) => (
                  <li key={q} className="flex gap-3 text-sm text-white/70">
                    <span className="text-amber-400 shrink-0 mt-0.5">→</span>
                    {q}
                  </li>
                ))}
              </ul>
              <p className="text-white/70 text-sm leading-relaxed">
                AI-generated legal drafts, summaries, and analyses must be reviewed by the lawyer before use. AI output is a first draft and a research aid — not a final product.
              </p>
            </section>

            {/* Rule 5.1 */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-amber-400">Rule 5.1 — Supervision</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Rule 5.1 governs the supervision of non-lawyers. When an AI tool performs work that would otherwise be done by a legal assistant or law clerk, the same supervision obligations may apply. This means:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "The lawyer is responsible for all work product, regardless of how it was generated",
                  "AI-generated documents must be reviewed and approved by the supervising lawyer",
                  "Errors in AI output are the lawyer's professional responsibility to catch",
                  "The lawyer cannot delegate final judgment or legal advice to an AI tool",
                ].map((q) => (
                  <li key={q} className="flex gap-3 text-sm text-white/70">
                    <span className="text-amber-400 shrink-0 mt-0.5">→</span>
                    {q}
                  </li>
                ))}
              </ul>
            </section>

            {/* Practical checklist */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-amber-400">Practical Compliance Checklist</h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Before using any AI tool with client data in your Ontario practice:
              </p>
              <div className="space-y-3">
                {[
                  { done: true, text: "Confirm data is stored in Canada or subject to PIPEDA" },
                  { done: true, text: "Confirm no AI training on client data" },
                  { done: true, text: "Confirm data processing agreements with all AI sub-processors" },
                  { done: true, text: "Implement an AI disclosure process for clients (preferably at retainer stage)" },
                  { done: true, text: "Review all AI-generated output before using or sending" },
                  { done: true, text: "Document your AI tool selection rationale" },
                  { done: false, text: "Consult your professional liability insurer (LAWPRO) about AI tool coverage" },
                  { done: false, text: "Keep current with LSO guidance as it evolves" },
                ].map(({ done, text }) => (
                  <div key={text} className="flex gap-3 items-start">
                    <span className={`shrink-0 text-sm font-semibold mt-0.5 ${done ? "text-green-400" : "text-white/40"}`}>
                      {done ? "✓" : "○"}
                    </span>
                    <span className="text-sm text-white/70">{text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* How Atticus addresses these */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-amber-400">How Atticus Addresses LSO Requirements</h2>
              <div className="space-y-4">
                {[
                  {
                    rule: "Rule 3.3 — Confidentiality",
                    items: [
                      "All data stored in Canada (Railway Canadian infrastructure)",
                      "Data processing agreements with Anthropic, OpenAI, Voyage AI, Clerk, Resend",
                      "Client data is never used to train AI models",
                      "PIPEDA-compliant data handling",
                      "Built-in AI consent disclosure on first login (consent timestamped and stored)",
                    ],
                  },
                  {
                    rule: "Rule 3.1 — Competence",
                    items: [
                      "All AI-generated output is presented as a draft for lawyer review",
                      "Clear labeling of AI-generated content",
                      "AI summaries supplement but do not replace lawyer review of source documents",
                      "Lawyer can always access the original document",
                    ],
                  },
                  {
                    rule: "Rule 5.1 — Supervision",
                    items: [
                      "No AI output is sent to clients without lawyer action",
                      "Draft letters and documents must be manually sent by the lawyer",
                      "All AI actions (add deadline, log time) are logged in the activity timeline",
                    ],
                  },
                ].map(({ rule, items }) => (
                  <div key={rule} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-semibold text-sm mb-3">{rule}</h3>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-white/60">
                          <span className="text-green-400 shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-6 text-amber-400">Common Questions</h2>
              <div className="space-y-8">
                {[
                  {
                    q: "Can Ontario lawyers use AI tools like Claude or ChatGPT?",
                    a: "Yes. The LSO has not prohibited AI use. Lawyers may use AI tools subject to their existing professional obligations. For consumer tools like free ChatGPT, the key concern is confidentiality — uploading client documents to a tool that may train on that data is risky under Rule 3.3. Enterprise tools with appropriate data handling (stored in Canada, DPAs with providers, no training on client data) are generally safer.",
                  },
                  {
                    q: "Do I need to tell my clients I'm using AI?",
                    a: "The LSO has not issued a blanket disclosure requirement, but disclosure is strongly recommended. Many lawyers include an AI disclosure clause in their retainer agreement. The more client-specific information you feed to an AI tool, the stronger the case for disclosure. Atticus includes a built-in consent disclosure flow on first login to document your practice's AI use.",
                  },
                  {
                    q: "Can I use AI-generated court documents in Ontario?",
                    a: "Yes, but with mandatory lawyer review. Courts are increasingly adopting AI disclosure requirements. All AI-generated documents must be reviewed, verified, and certified as accurate by the lawyer of record before submission. An AI-generated document that contains errors is the lawyer's professional responsibility, not the AI's.",
                  },
                  {
                    q: "Should I contact LAWPRO before using AI tools?",
                    a: "It's advisable. LAWPRO (Lawyers' Professional Indemnity Company) has issued some guidance on AI tools and malpractice coverage. Contact LAWPRO to understand how AI tool use affects your coverage, particularly for tasks like legal research, drafting, and advice.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border-b border-white/10 pb-8">
                    <h3 className="font-semibold mb-3 text-sm">{q}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            <p className="text-white/30 text-xs text-center mt-8">
              This guide is informational only and does not constitute legal advice about your professional obligations to the Law Society of Ontario. Always refer to the current Rules of Professional Conduct and consult the LSO directly for authoritative guidance.
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="px-6 py-16 border-t border-white/10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">AI Built for Ontario Lawyer Compliance</h2>
            <p className="text-white/60 mb-8 text-sm">
              Atticus is purpose-built for Ontario solo lawyers — with LSO compliance built in, not bolted on.
              All data stored in Canada. No AI training on your client data. AI consent disclosure on first login.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/sign-up"
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors text-sm"
              >
                Start 14-Day Free Trial
              </Link>
              <Link
                href="/ontario-legal-software"
                className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:border-white/40 transition-colors text-sm"
              >
                See All Features →
              </Link>
            </div>
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
            <Link href="/ai-for-lawyers" className="hover:text-white/60 transition-colors">AI for Lawyers</Link>
            <Link href="/ontario-legal-software" className="hover:text-white/60 transition-colors">Ontario Legal Software</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
