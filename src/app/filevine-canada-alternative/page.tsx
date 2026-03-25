import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filevine Canada Alternative for Ontario Lawyers | Atticus",
  description:
    "Comparing Filevine (US enterprise legal platform used by some Canadian firms) with Atticus — the purpose-built Ontario practice management platform with LSO trust accounting and flat Canadian pricing.",
  openGraph: {
    title: "Filevine Canada Alternative for Ontario Lawyers",
    description:
      "Filevine is a US enterprise platform at $100-200+ USD/user/month. Atticus is purpose-built for Ontario — LSO trust accounting, CAD billing, AI document analysis, $149 CAD/month.",
    type: "website",
    url: "https://getatticus.ca/filevine-canada-alternative",
  },
  alternates: { canonical: "https://getatticus.ca/filevine-canada-alternative" },
};

export default function FilevineCanadaAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Filevine Canada Alternative for Ontario Lawyers",
    description:
      "Comparing Filevine with Atticus for Ontario law firms — trust accounting, billing, matter management, and AI document analysis.",
    url: "https://getatticus.ca/filevine-canada-alternative",
    provider: {
      "@type": "Organization",
      name: "Atticus",
      url: "https://getatticus.ca",
    },
  };

  const reasons = [
    {
      title: "Built for Ontario, Not US Enterprise Firms",
      body: "Filevine targets large US personal injury and plaintiff firms. Atticus is purpose-built for Ontario solo and small firm lawyers — LSO By-Law 9 compliance, Ontario court workflows, CAD billing.",
    },
    {
      title: "LSO By-Law 9 Trust Accounting",
      body: "Filevine&apos;s trust accounting follows US rules. Atticus enforces LSO By-Law 9 three-way reconciliation and mixed-fund prevention required by the Law Society of Ontario.",
    },
    {
      title: "No Six-Figure Implementation",
      body: "Filevine requires months of custom implementation and onboarding. Atticus works out of the box for Ontario firms — no implementation project, no consultants, no configuration overhead.",
    },
    {
      title: "AI Document Analysis for Ontario Law",
      body: "Atticus uses AI trained to understand Ontario legal documents — surfacing limitation dates, obligations, and key clauses relevant to Ontario law. Filevine&apos;s AI tools are built for US case types.",
    },
    {
      title: "Radically Simpler Pricing",
      body: "Filevine charges $100-200+ USD/user/month with implementation fees. Atticus is $149 CAD/month for your entire firm with no setup costs.",
    },
  ];

  const comparisons = [
    { feature: "Primary market", fv: "US enterprise plaintiff firms", atticus: "Ontario solo and small firms" },
    { feature: "Trust accounting", fv: "US IOLTA rules", atticus: "LSO By-Law 9 compliant" },
    { feature: "Billing currency", fv: "USD, US formats", atticus: "CAD, HST-compliant" },
    { feature: "AI document analysis", fv: "US case-type AI", atticus: "Ontario-specific AI" },
    { feature: "Implementation time", fv: "Months", atticus: "Hours (out of the box)" },
    { feature: "Canadian data residency", fv: "US infrastructure", atticus: "Canadian infrastructure" },
    { feature: "Pricing", fv: "$100-200+ USD/user/month + setup", atticus: "$149 CAD/month (entire firm)" },
    { feature: "Target firm size", fv: "Mid to large US firms", atticus: "Ontario solo to mid-size" },
    { feature: "Ontario limitation tracking", fv: "Not native", atticus: "Ontario Limitations Act 2002" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-cyan-100 px-4 py-1 text-sm font-medium text-cyan-700">
            Filevine Canada Alternative
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Filevine Canada Alternative for Ontario Lawyers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Filevine is a US enterprise platform that some Canadian firms use — but it comes
            with US trust accounting, USD pricing, and a months-long implementation. Ontario
            lawyers choose Atticus: purpose-built for Ontario, $149 CAD/month, works out
            of the box.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow hover:bg-blue-700"
          >
            Start Free Trial
          </a>
        </section>

        {/* Comparison table */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Filevine Canada vs Atticus — Side by Side
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-700">Filevine</th>
                  <th className="px-6 py-4 text-left font-semibold text-blue-700">Atticus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.fv}</td>
                    <td className="px-6 py-4 font-medium text-blue-700">{row.atticus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Filevine */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">What Is Filevine?</h2>
          <p className="mb-4 text-gray-600">
            Filevine is a US legal operations platform built for high-volume personal injury,
            mass tort, and plaintiff law firms. It provides case management, document management,
            text messaging with clients, e-signature, and integrations with third-party legal
            tools. Some larger Canadian law firms use Filevine for its customizability and
            workflow automation features.
          </p>
          <p className="mb-4 text-gray-600">
            The platform is built for the US market — its trust accounting follows US IOLTA
            rules, and its AI tools are trained on US case types. Ontario law firms using
            Filevine must supplement it with Ontario-compliant trust accounting tools and
            adapt workflows for Ontario court procedures.
          </p>
          <p className="text-gray-600">
            Filevine requires significant implementation investment — typically months of
            configuration, training, and data migration. For Ontario solo and small firm
            lawyers, the total cost of ownership is prohibitive compared to Atticus&apos;s
            $149 CAD/month fee with no setup required.
          </p>
        </section>

        {/* Why Atticus */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Why Ontario Lawyers Choose Atticus Over Filevine
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-base font-semibold text-gray-900">{r.title}</h3>
                <p className="text-sm text-gray-600">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-blue-600 px-8 py-12 text-center text-white">
          <h2 className="mb-3 text-3xl font-bold">The Ontario Alternative to Filevine</h2>
          <p className="mb-8 text-blue-100">
            No implementation project. No USD pricing. No US trust accounting workarounds.
            Just Ontario-built practice management with LSO compliance built in.
          </p>
          <a
            href="/sign-up"
            className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow hover:bg-blue-50"
          >
            Start Free Trial — $149 CAD/month
          </a>
        </section>
      </main>
    </>
  );
}
