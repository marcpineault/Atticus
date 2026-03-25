import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Atticus — Your AI Executive Assistant for Ontario Law Practice",
  description:
    "Atticus is an AI executive assistant for Ontario lawyers. Transcribes meetings, extracts deadlines, includes an Ontario limitation period calculator, sends morning briefings, and never lets you miss a critical date.",
  keywords: [
    "AI executive assistant for lawyers Ontario",
    "legal practice management software Ontario",
    "AI for lawyers Ontario",
    "legal AI Canada",
    "law firm software Ontario",
    "AI legal assistant Ontario",
    "document management for lawyers",
    "AI transcription legal meetings",
    "deadline tracking for lawyers",
    "Ontario limitation period calculator",
    "limitations act 2002 calculator",
    "Ontario limitation period lawyer tool",
    "RAG chat legal documents",
    "Clio alternative Ontario",
    "PCLaw alternative Ontario",
    "how to start a law firm Ontario",
    "solo law firm software Canada",
    "trust account software Ontario lawyers",
    "legal invoicing software Ontario",
    "lawyer practice management software Canada",
  ],
  openGraph: {
    title: "Atticus — Your AI Executive Assistant for Ontario Lawyers",
    description:
      "Transcribes meetings, extracts deadlines, sends morning briefings, and answers any question about your case files. Built for Ontario solo and small law firms.",
    type: "website",
    url: "https://getatticus.ca",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atticus — Your AI Executive Assistant for Ontario Lawyers",
    description: "The AI colleague your Ontario law practice deserves.",
  },
  alternates: { canonical: "https://getatticus.ca" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Atticus",
      applicationCategory: "LegalApplication",
      operatingSystem: "Web",
      url: "https://getatticus.ca",
      description:
        "Atticus is an AI executive assistant for Ontario law firms. It transcribes your client meetings, extracts critical deadlines and action items, sends you morning briefings with everything due today, and lets you search and chat with your entire case history — so nothing falls through the cracks.",
      featureList: [
        "Daily morning briefing emails",
        "AI document summarization",
        "Audio transcription with OpenAI Whisper",
        "Automatic entity extraction",
        "Semantic vector search across all documents",
        "RAG chat assistant",
        "Client and matter management",
        "Ontario Limitation Period Calculator",
        "HST invoicing",
        "Trust account ledger",
        "Prospecting pipeline with AI win strategy",
        "100% private — data never used for AI training",
        "Canadian data residency",
      ],
      audience: { "@type": "Audience", audienceType: "Ontario solo and small law firms" },
      areaServed: { "@type": "AdministrativeArea", name: "Ontario, Canada" },
    },
    {
      "@type": "Organization",
      "@id": "https://getatticus.ca/#org",
      name: "Atticus",
      url: "https://getatticus.ca",
      email: "hello@getatticus.ca",
      areaServed: { "@type": "AdministrativeArea", name: "Ontario, Canada" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Atticus?",
          acceptedAnswer: { "@type": "Answer", text: "Atticus is an AI executive assistant built specifically for Ontario law firms. It handles the administrative work — transcribing meetings, extracting deadlines, tracking action items, sending you morning briefings — so you can focus on lawyering." },
        },
        {
          "@type": "Question",
          name: "How is Atticus different from Clio?",
          acceptedAnswer: { "@type": "Answer", text: "Clio is a practice management system with AI as an expensive add-on. Atticus is an AI executive assistant from the ground up — it proactively manages your deadlines, sends briefings, processes your documents, and answers questions about your case files." },
        },
        {
          "@type": "Question",
          name: "Is my client data private?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. All data is stored in Canada, encrypted in transit and at rest, and never used to train AI models. We comply with PIPEDA and LSO Rule 3.3 obligations." },
        },
      ],
    },
  ],
});

/* ---------- DEMO UI COMPONENTS ---------- */

function DemoDashboard() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0c0c14] overflow-hidden shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-[10px] text-white/20 ml-2 font-mono">getatticus.ca/dashboard</span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: "Revenue This Month", value: "$12,400", sub: "+18% vs last month", color: "text-emerald-400" },
            { label: "Billable Hours", value: "31.2 hrs", sub: "~$12,480 at $400/hr", color: "text-blue-400" },
            { label: "Upcoming Deadlines", value: "7", sub: "3 due this week", color: "text-amber-400" },
          ].map(c => (
            <div key={c.label} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
              <p className="text-[10px] text-white/30 mb-1">{c.label}</p>
              <p className={`text-lg font-semibold ${c.color}`}>{c.value}</p>
              <p className="text-[9px] text-white/20 mt-0.5">{c.sub}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
            <p className="text-[10px] text-white/30 mb-2 uppercase tracking-wider">Recent Documents</p>
            {[
              { title: "Chen v. Paramount — Lease Agreement", status: "Completed", type: "PDF" },
              { title: "Client Meeting — Custody Discussion", status: "Completed", type: "Audio" },
              { title: "Restraining Order Affidavit", status: "Processing...", type: "DOCX" },
            ].map(d => (
              <div key={d.title} className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0">
                <div>
                  <p className="text-[11px] text-white/60 truncate max-w-[180px]">{d.title}</p>
                  <p className="text-[9px] text-white/20">{d.type}</p>
                </div>
                <span className={`text-[9px] px-1.5 py-0.5 rounded ${d.status === "Processing..." ? "bg-amber-500/10 text-amber-400" : "bg-emerald-500/10 text-emerald-400"}`}>
                  {d.status}
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
            <p className="text-[10px] text-white/30 mb-2 uppercase tracking-wider">Upcoming Deadlines</p>
            {[
              { title: "File reply factum — Chen Estate", date: "Today", urgent: true },
              { title: "Limitation period — Lee v. Riverview", date: "Mar 26", urgent: false },
              { title: "Closing — 120 Bay Street", date: "May 30", urgent: false },
            ].map(d => (
              <div key={d.title} className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0">
                <p className="text-[11px] text-white/60 truncate max-w-[180px]">{d.title}</p>
                <span className={`text-[9px] px-1.5 py-0.5 rounded ${d.urgent ? "bg-red-500/10 text-red-400" : "bg-white/[0.04] text-white/30"}`}>
                  {d.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoChat() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0c0c14] overflow-hidden shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-[10px] text-white/20 ml-2 font-mono">getatticus.ca/chat</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex justify-end">
          <div className="bg-[#C6922A]/10 border border-[#C6922A]/20 rounded-lg px-4 py-2.5 max-w-[80%]">
            <p className="text-[12px] text-white/70">What were the payment terms we agreed to with Sarah Chen for the lease dispute?</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 max-w-[85%]">
            <p className="text-[12px] text-white/60 leading-relaxed">
              Based on the Commercial Lease Agreement for 45 King West, Unit 800, the key payment terms are:
            </p>
            <ul className="text-[11px] text-white/50 mt-2 space-y-1.5 ml-3">
              <li>Monthly rent: <span className="text-emerald-400/80">$8,500/month</span></li>
              <li>Security deposit: <span className="text-emerald-400/80">$17,000</span> (2 months)</li>
              <li>Annual escalation: <span className="text-emerald-400/80">3% per year</span></li>
              <li>Early termination penalty: <span className="text-emerald-400/80">6 months rent</span> (Section 14.2)</li>
            </ul>
            <p className="text-[9px] text-white/20 mt-3 flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400/40" />
              Source: Commercial Lease Agreement — 45 King West, Unit 800
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-2.5">
          <span className="text-[11px] text-white/20 flex-1">Ask anything about your practice...</span>
          <div className="w-6 h-6 rounded bg-[#C6922A]/20 flex items-center justify-center">
            <span className="text-[10px] text-[#C6922A]">&#x2191;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoBriefing() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0c0c14] overflow-hidden shadow-2xl shadow-black/50">
      <div className="px-5 py-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 rounded bg-[#C6922A]/20 flex items-center justify-center text-[10px]">A</div>
          <span className="text-[11px] text-white/50">Atticus Morning Briefing</span>
          <span className="text-[10px] text-white/20 ml-auto">Today, 9:00 AM</span>
        </div>
        <p className="text-[13px] text-white/70 font-medium">Your practice briefing for Monday, March 23</p>
      </div>
      <div className="p-5 space-y-3">
        {[
          { label: "OVERDUE", color: "border-red-500/20 bg-red-500/[0.04]", badge: "bg-red-500/10 text-red-400", items: ["Motion record — Nguyen v. Davies Corp (2 days overdue)"] },
          { label: "DUE TODAY", color: "border-orange-500/20 bg-orange-500/[0.04]", badge: "bg-orange-500/10 text-orange-400", items: ["File reply factum — Chen Estate (Superior Court)", "Call client re: settlement offer — Sarah Mitchell"] },
          { label: "THIS WEEK", color: "border-blue-500/20 bg-blue-500/[0.04]", badge: "bg-blue-500/10 text-blue-400", items: ["Examinations for discovery — Patel Commercial (Thu)", "Limitation period — Lee v. Riverview (Sat)", "TechHub lease renewal response deadline (Fri)"] },
        ].map(g => (
          <div key={g.label} className={`rounded-lg border ${g.color} p-3`}>
            <span className={`text-[9px] font-semibold uppercase tracking-wider ${g.badge} px-2 py-0.5 rounded`}>{g.label}</span>
            <div className="mt-2 space-y-1">
              {g.items.map(item => (
                <p key={item} className="text-[11px] text-white/50 pl-1">&#x2022; {item}</p>
              ))}
            </div>
          </div>
        ))}
        <p className="text-[9px] text-white/15 pt-1">Automatically compiled from your documents, meeting transcripts, and manual entries.</p>
      </div>
    </div>
  );
}

function DemoProspects() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0c0c14] overflow-hidden shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-[10px] text-white/20 ml-2 font-mono">getatticus.ca/prospects</span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-4 gap-2">
          {[
            { stage: "Lead", color: "bg-blue-500", items: [{ name: "Marcus Williams", area: "Employment", val: "$15K" }, { name: "Jennifer Osei", area: "Family Law", val: "$5K" }] },
            { stage: "Consultation", color: "bg-yellow-500", items: [{ name: "Lisa Park", area: "Real Estate", val: "$8K" }] },
            { stage: "Reviewed", color: "bg-orange-500", items: [{ name: "Fatima Al-Hassan", area: "Corporate", val: "$25K" }] },
            { stage: "Proposal", color: "bg-purple-500", items: [{ name: "Robert Tremblay", area: "Construction", val: "$40K" }] },
          ].map(col => (
            <div key={col.stage}>
              <div className="flex items-center gap-1.5 mb-2">
                <div className={`w-1.5 h-1.5 rounded-full ${col.color}`} />
                <span className="text-[9px] text-white/30 uppercase tracking-wider">{col.stage}</span>
              </div>
              <div className="space-y-1.5">
                {col.items.map(p => (
                  <div key={p.name} className="rounded border border-white/[0.06] bg-white/[0.02] p-2">
                    <p className="text-[10px] text-white/60 font-medium">{p.name}</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-[8px] text-white/20">{p.area}</span>
                      <span className="text-[8px] text-emerald-400/60">{p.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-[#C6922A]/10 bg-[#C6922A]/[0.03] p-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[9px] text-[#C6922A]/60">&#x2728;</span>
            <span className="text-[9px] text-[#C6922A]/60 uppercase tracking-wider font-medium">AI Win Strategy — Robert Tremblay</span>
          </div>
          <p className="text-[10px] text-white/40 leading-relaxed">Position your construction lien defence experience — reference your successful BuildRight counter-claim. Emphasize your documentation-first approach and familiarity with Vaughan municipal requirements...</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- PAGE ---------- */

export default function LandingPage() {
  return (
    <>
      <Script id="ld-json" type="application/ld+json" strategy="beforeInteractive">{jsonLd}</Script>

      <div className="bg-[#07070a] text-[#f0e8d8] min-h-screen antialiased">

        {/* NAV */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#07070a]/80 border-b border-white/[0.04]">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-semibold tracking-tight">Atticus</Link>
            <div className="flex items-center gap-6">
              <a href="#features" className="hidden md:block text-sm text-white/40 hover:text-white/70 transition-colors">Features</a>
              <a href="#how" className="hidden md:block text-sm text-white/40 hover:text-white/70 transition-colors">How it works</a>
              <Link href="/pricing" className="hidden md:block text-sm text-white/40 hover:text-white/70 transition-colors">Pricing</Link>
              <Link href="/blog" className="hidden md:block text-sm text-white/40 hover:text-white/70 transition-colors">Blog</Link>
              <Link href="/calculator" className="hidden md:block text-sm text-white/40 hover:text-white/70 transition-colors">Calculator</Link>
              <Link href="/dashboard" className="text-sm text-white/40 hover:text-white/70 transition-colors">Sign In</Link>
              <Link href="/sign-up" className="bg-[#C6922A] text-[#07070a] px-5 py-2 text-sm font-medium hover:bg-[#d4a03a] transition-colors">
                Start Free Trial
              </Link>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C6922A]/[0.04] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-32 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C6922A]/20 bg-[#C6922A]/[0.05] mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C6922A] animate-pulse" />
                <span className="text-xs text-[#C6922A]/80 tracking-wide">AI-Powered Practice Intelligence for Ontario Law Firms</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] tracking-tight mb-8">
                The assistant that
                <br />
                <span className="bg-gradient-to-r from-[#e8b84b] via-[#C6922A] to-[#e8b84b] bg-clip-text text-transparent italic">
                  never drops the ball.
                </span>
              </h1>

              <p className="text-lg text-white/45 max-w-xl leading-relaxed mb-4">
                Atticus absorbs everything about your practice — documents, emails, meetings, voice notes — and gives you instant access to deadlines, action items, and answers across all your case files.
              </p>
              <p className="text-sm text-white/25 max-w-lg leading-relaxed mb-10">
                Built for Ontario solo and small law firms. Canadian data residency. PIPEDA-compliant. LSO Rule 3.3 disclosure support.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/sign-up" className="bg-[#C6922A] text-[#07070a] px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#d4a03a] transition-all hover:shadow-lg hover:shadow-[#C6922A]/20">
                  Start Free Trial &rarr;
                </Link>
                <a href="#demos" className="border border-white/10 text-white/50 px-8 py-4 text-sm hover:border-white/20 hover:text-white/70 transition-all">
                  See Product Demos
                </a>
              </div>

              <p className="text-xs text-white/20 mt-6">14-day free trial &middot; No credit card required &middot; Your first briefing arrives tomorrow at 9am</p>
            </div>
          </div>
        </section>

        {/* HERO DEMO — Dashboard */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent z-10 pointer-events-none" />
            <div className="transform perspective-[1200px] rotateX-1">
              <DemoDashboard />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-white/[0.04] bg-white/[0.01]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.04]">
            {[
              { num: "23 hrs", label: "Recovered per month" },
              { num: "$9,200", label: "Monthly value at $400/hr" },
              { num: "0", label: "Deadlines missed" },
              { num: "$149", label: "Per lawyer / month" },
            ].map(s => (
              <div key={s.label} className="py-10 px-8 text-center">
                <div className="text-3xl sm:text-4xl font-light text-[#e8b84b] mb-2">{s.num}</div>
                <div className="text-xs text-white/30 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCT DEMOS */}
        <section id="demos" className="py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
                See what <span className="italic text-[#e8b84b]">practice intelligence</span> looks like
              </h2>
              <p className="text-base text-white/35 max-w-lg mx-auto">Every feature designed for how lawyers actually work.</p>
            </div>

            {/* Demo 1 — Morning Briefing */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
              <div>
                <div className="text-xs text-[#C6922A]/60 uppercase tracking-widest mb-4">Morning Briefings</div>
                <h3 className="text-2xl sm:text-3xl font-light mb-4">
                  Every deadline, every morning.<br />
                  <span className="text-white/40">Before you open your laptop.</span>
                </h3>
                <p className="text-sm text-white/35 leading-relaxed mb-6">
                  At 9am every weekday, Atticus emails you everything that&apos;s overdue, due today, and coming up this week — organized by urgency with full client context. Like having a paralegal brief you every morning.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Overdue alerts", "Today's deadlines", "7-day lookahead", "Client context"].map(t => (
                    <span key={t} className="text-xs border border-white/[0.06] text-white/30 px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <DemoBriefing />
            </div>

            {/* Demo 2 — AI Chat */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
              <div className="order-2 md:order-1">
                <DemoChat />
              </div>
              <div className="order-1 md:order-2">
                <div className="text-xs text-[#C6922A]/60 uppercase tracking-widest mb-4">AI Case Assistant</div>
                <h3 className="text-2xl sm:text-3xl font-light mb-4">
                  Ask anything about any case.<br />
                  <span className="text-white/40">Get sourced answers in seconds.</span>
                </h3>
                <p className="text-sm text-white/35 leading-relaxed mb-6">
                  &ldquo;What were the payment terms?&rdquo; &ldquo;When is the limitation period?&rdquo; &ldquo;Summarize all communications with opposing counsel.&rdquo; — answered instantly from your actual files, with sources cited.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Semantic search", "Source citations", "Client-scoped", "Full case history"].map(t => (
                    <span key={t} className="text-xs border border-white/[0.06] text-white/30 px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo 3 — Prospects */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-xs text-[#C6922A]/60 uppercase tracking-widest mb-4">Prospecting Pipeline</div>
                <h3 className="text-2xl sm:text-3xl font-light mb-4">
                  Win more clients.<br />
                  <span className="text-white/40">AI-powered strategy for every lead.</span>
                </h3>
                <p className="text-sm text-white/35 leading-relaxed mb-6">
                  Track every potential client from first contact to signed retainer. Atticus analyzes the prospect against your practice history and generates positioning advice, consultation prep, and pricing strategy — so you walk into every meeting prepared.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Pipeline tracking", "AI win strategy", "One-click convert", "Follow-up reminders"].map(t => (
                    <span key={t} className="text-xs border border-white/[0.06] text-white/30 px-3 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <DemoProspects />
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section id="features" className="py-24 bg-white/[0.01] border-y border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
                A full-time assistant, <span className="italic text-[#e8b84b]">on AI pricing.</span>
              </h2>
              <p className="text-base text-white/35">Everything you need to run a modern law practice.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-xl overflow-hidden">
              {[
                { icon: "📬", title: "Morning Briefings", body: "Daily email with overdue items, today's deadlines, and the week ahead — organized by client and priority." },
                { icon: "🎙️", title: "Meeting Transcription", body: "Upload any recording. Get a full transcript, AI summary, and action items with deadlines extracted automatically." },
                { icon: "💬", title: "AI Case Assistant", body: "Ask any question about any client in plain English. Answers sourced from your actual documents." },
                { icon: "📧", title: "Email Intake", body: "Forward your practice emails. Atticus auto-ingests, matches to clients, extracts deadlines, and processes attachments." },
                { icon: "🎯", title: "Prospect Pipeline", body: "Track leads through your pipeline. AI generates win strategies, consultation prep, and pricing recommendations." },
                { icon: "🗂️", title: "Deadline Extraction", body: "Every document scanned for dates, deadlines, amounts, parties, and action items the moment it's uploaded." },
                { icon: "⚖️", title: "Trust Accounting", body: "Record trust receipts and disbursements per client. Instant balance view. LSO-compliant." },
                { icon: "🔍", title: "Conflict Checks", body: "Instant conflict search across all clients and matters before you open a new file. AI-powered severity ratings." },
                { icon: "📋", title: "Invoicing & Billing", body: "Generate invoices from tracked time. Automatic HST calculation. Send directly to clients." },
                { icon: "📝", title: "AI Document Drafting", body: "Generate letters, emails, memos from customizable templates. Context-aware with client and case details." },
                { icon: "⏱️", title: "Ontario Limitation Calculator", body: "Built-in calculator for Limitations Act, 2002. One-click to add calculated dates as tracked deadlines." },
                { icon: "🔒", title: "LSO Compliant", body: "Canadian data residency. Never used for AI training. PIPEDA-compliant. Rule 3.3 disclosure built in." },
              ].map(f => (
                <div key={f.title} className="bg-[#07070a] p-8 group hover:bg-white/[0.02] transition-colors">
                  <div className="text-2xl mb-4">{f.icon}</div>
                  <h3 className="text-base font-medium text-white/80 mb-2">{f.title}</h3>
                  <p className="text-sm text-white/35 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-24 sm:py-32">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-16">
              How <span className="italic text-[#e8b84b]">Atticus</span> works
            </h2>
            {[
              { n: "01", title: "Upload files, forward emails, or record meetings", body: "Drop in PDFs, DOCX, audio recordings. Auto-forward your practice emails. Create notes directly. Atticus accepts everything." },
              { n: "02", title: "AI extracts everything automatically", body: "Documents are transcribed, summarized, and scanned for entities — deadlines, amounts, parties, action items. You get an email the moment processing is done." },
              { n: "03", title: "Your briefing arrives every morning", body: "At 9am, your inbox has a complete briefing of everything due today, overdue, and coming up. Ask questions at any time and get sourced answers from your entire document library." },
            ].map(s => (
              <div key={s.n} className="flex gap-8 mb-12 group">
                <div className="text-5xl font-extralight text-[#C6922A]/15 group-hover:text-[#C6922A]/30 transition-colors flex-shrink-0 w-16">{s.n}</div>
                <div>
                  <h3 className="text-xl font-light text-white/80 mb-2">{s.title}</h3>
                  <p className="text-sm text-white/35 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-white/[0.01] border-y border-white/[0.04]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs text-[#C6922A]/50 uppercase tracking-widest text-center mb-12">What Ontario lawyers say</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { quote: "I used to spend 45 minutes every Monday re-reading case notes before my week started. Atticus emails me everything before I even open my laptop.", name: "M.L.", role: "Solo practitioner, real estate law" },
                { quote: "The conflict check feature alone is worth it. I almost accepted a file without realizing the other party was an existing client.", name: "K.T.", role: "Civil litigation, Toronto" },
                { quote: "I transcribe every client intake call now. Having the action items extracted automatically changed how I work.", name: "A.P.", role: "Family law, Ottawa" },
              ].map(t => (
                <div key={t.name} className="border border-white/[0.06] rounded-xl p-6 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                  <p className="text-sm text-white/50 leading-relaxed italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-sm font-medium text-white/70">{t.name}</p>
                    <p className="text-xs text-white/25 mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">Simple pricing</h2>
            <p className="text-base text-white/35 mb-16">One plan. Everything included. 14-day free trial.</p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Free Trial */}
              <div className="border border-white/[0.08] rounded-xl p-8 text-left bg-white/[0.01]">
                <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Free Trial</p>
                <p className="text-5xl font-light mb-1">$0</p>
                <p className="text-sm text-white/30 mb-8">14 days, no card required</p>
                <div className="border-t border-white/[0.06] pt-6 space-y-3 mb-8">
                  {["Full access to all features", "Morning briefings", "AI document processing", "Unlimited clients & matters"].map(f => (
                    <div key={f} className="flex items-center gap-2.5">
                      <span className="text-emerald-400/60 text-xs">&#10003;</span>
                      <span className="text-sm text-white/45">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/sign-up" className="block text-center border border-white/10 text-white/50 py-3 text-sm hover:border-white/20 transition-colors">
                  Start Free Trial &rarr;
                </Link>
              </div>

              {/* Pro */}
              <div className="border-2 border-[#C6922A]/30 rounded-xl p-8 text-left bg-white/[0.01] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C6922A] text-[#07070a] text-[10px] font-semibold uppercase tracking-wider px-4 py-1 rounded-full">Most Popular</div>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Atticus Pro</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-light">$149</span>
                  <span className="text-white/30">/mo</span>
                </div>
                <p className="text-sm text-white/30 mb-1">Per lawyer, per month</p>
                <p className="text-xs text-emerald-400/60 mb-8">Recovers ~$9,200/month at $400/hr</p>
                <div className="border-t border-white/[0.06] pt-6 space-y-3 mb-8">
                  {["Everything in Free Trial", "Unlimited processing", "AI drafting & workflows", "Invoicing & billing analytics", "Trust accounting", "Conflict checks", "Prospect pipeline & AI strategy", "Priority support"].map(f => (
                    <div key={f} className="flex items-center gap-2.5">
                      <span className="text-[#C6922A]/80 text-xs">&#10003;</span>
                      <span className="text-sm text-white/45">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/sign-up" className="block text-center bg-[#C6922A] text-[#07070a] py-3 text-sm font-medium hover:bg-[#d4a03a] transition-colors">
                  Start Free Trial &rarr;
                </Link>
              </div>
            </div>
            <p className="text-xs text-white/20 mt-8">Questions? hello@getatticus.ca &middot; Cancel anytime</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white/[0.01] border-y border-white/[0.04]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-16">Common questions</h2>
            {[
              { q: "How is Atticus different from Clio?", a: "Clio is a practice management system with AI as an expensive add-on. Atticus is an AI executive assistant from the ground up — it proactively manages your deadlines, sends daily briefings, processes documents automatically, and answers questions about your case files. It's the difference between software you use and a colleague who works for you." },
              { q: "Is Atticus a PCLaw alternative?", a: "Yes. Atticus is a modern, cloud-based alternative to PCLaw. No local installation, no server maintenance. Runs on Canadian infrastructure, includes AI document processing and deadline extraction, and costs less than half of PCLaw's cloud subscription." },
              { q: "What does the morning briefing include?", a: "Every weekday at 9am: all overdue deadlines and action items, everything due today, and upcoming items in the next 7 days — with client names, document sources, and context." },
              { q: "Is my client data private?", a: "Yes. All data stored in Canada. Never leaves Canadian jurisdiction. Never used to train AI models. All sub-processors operate under strict data processing agreements. PIPEDA-compliant." },
              { q: "Does Atticus have an Ontario limitation period calculator?", a: "Yes — available free at getatticus.ca/calculator. Inside the app, it's built into the Deadlines page. Calculates all periods under the Limitations Act, 2002 with one-click deadline creation." },
              { q: "How much time will I actually save?", a: "Conservative estimate: 23 hours/month — 8 hrs on document summarization, 6 hrs on transcription, 5 hrs on deadline tracking, 4 hrs on context retrieval. At $400/hr, that's ~$9,200/month recovered." },
            ].map(f => (
              <div key={f.q} className="border-b border-white/[0.04] pb-8 mb-8 last:border-0">
                <h3 className="text-lg font-light text-white/70 mb-3">{f.q}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C6922A]/[0.02] to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Your AI assistant<br />
              <span className="italic text-[#e8b84b]">starts tomorrow morning.</span>
            </h2>
            <p className="text-base text-white/35 mb-2">14-day free trial. No credit card required.</p>
            <p className="text-sm text-white/20 mb-10">Your first briefing email arrives tomorrow at 9am.</p>
            <Link href="/sign-up" className="inline-block bg-[#C6922A] text-[#07070a] px-10 py-4 text-sm font-medium tracking-wide hover:bg-[#d4a03a] transition-all hover:shadow-lg hover:shadow-[#C6922A]/20">
              START FREE TRIAL &rarr;
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/[0.04] py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-4 gap-8 mb-12">
              <div>
                <p className="text-sm font-medium mb-4">Product</p>
                <div className="space-y-2">
                  {([["Features", "#features"], ["Pricing", "/pricing"], ["Calculator", "/calculator"], ["Blog", "/blog"]] as const).map(([l, h]) => (
                    <Link key={l} href={h} className="block text-xs text-white/25 hover:text-white/50 transition-colors">{l}</Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-4">Alternatives</p>
                <div className="space-y-2">
                  {([["Clio Alternative", "/clio-alternative"], ["PCLaw Alternative", "/pclaw-alternative"], ["LEAP Alternative", "/leap-alternative"], ["Smokeball Alternative", "/smokeball-alternative"]] as const).map(([l, h]) => (
                    <Link key={l} href={h} className="block text-xs text-white/25 hover:text-white/50 transition-colors">{l}</Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-4">Practice Areas</p>
                <div className="space-y-2">
                  {([["Real Estate", "/ontario-real-estate-lawyer"], ["Family Law", "/ontario-family-lawyer"], ["Corporate", "/ontario-corporate-lawyer"], ["Civil Litigation", "/ontario-civil-litigation-lawyer"]] as const).map(([l, h]) => (
                    <Link key={l} href={h} className="block text-xs text-white/25 hover:text-white/50 transition-colors">{l}</Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-4">Legal</p>
                <div className="space-y-2">
                  {([["Privacy", "/privacy"], ["Terms", "/terms"], ["LSO AI Guide", "/lso-ai-guidance"], ["Trust Accounting", "/trust-accounting-ontario"]] as const).map(([l, h]) => (
                    <Link key={l} href={h} className="block text-xs text-white/25 hover:text-white/50 transition-colors">{l}</Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-white/[0.04] pt-8 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-white/20">&copy; 2026 Atticus &middot; Ontario, Canada &middot; All data stored in Canada</span>
              <div className="flex gap-4">
                <Link href="/sign-up" className="text-xs text-white/20 hover:text-white/50 transition-colors">Sign Up</Link>
                <Link href="/dashboard" className="text-xs text-white/20 hover:text-white/50 transition-colors">Sign In</Link>
                <span className="text-xs text-white/20">hello@getatticus.ca</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
