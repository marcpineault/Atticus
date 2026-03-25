import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ontario Limitation Period Calculator — Free Tool for Lawyers | Atticus",
  description:
    "Free Ontario limitation period calculator for lawyers. Instantly calculate the 2-year basic limitation, 15-year ultimate, minor tolling, municipal notice (10 days), construction lien, and more under the Limitations Act, 2002.",
  keywords: [
    "Ontario limitation period calculator",
    "limitations act 2002 calculator",
    "Ontario limitation period lawyer",
    "limitation period Ontario 2 years",
    "ultimate limitation period Ontario 15 years",
    "minor tolling limitation period Ontario",
    "municipal notice 10 days Ontario",
    "construction lien limitation Ontario",
    "limitation period calculator Canada",
    "Ontario civil litigation deadline calculator",
  ],
  openGraph: {
    title: "Ontario Limitation Period Calculator — Free Tool | Atticus",
    description:
      "Calculate all Ontario limitation periods instantly. Covers Limitations Act, 2002, minor tolling, municipal notice, and construction lien deadlines.",
    type: "website",
    url: "https://getatticus.ca/calculator",
  },
  alternates: { canonical: "https://getatticus.ca/calculator" },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Ontario Limitation Period Calculator",
      url: "https://getatticus.ca/calculator",
      applicationCategory: "LegalApplication",
      operatingSystem: "Web",
      description: "Free Ontario limitation period calculator for lawyers. Calculates the 2-year basic limitation, 15-year ultimate limitation, minor tolling (age 18), 10-day municipal notice period, construction lien deadlines, and sexual assault (no limitation) under the Limitations Act, 2002.",
      audience: { "@type": "Audience", audienceType: "Ontario lawyers and legal professionals" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      provider: {
        "@type": "Organization",
        name: "Atticus",
        url: "https://getatticus.ca",
        areaServed: { "@type": "AdministrativeArea", name: "Ontario, Canada" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the basic limitation period in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "Under the Limitations Act, 2002, the basic limitation period in Ontario is 2 years from the date the claim was discovered. This applies to most civil claims including tort, contract, and property disputes." },
        },
        {
          "@type": "Question",
          name: "What is the ultimate limitation period in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "The ultimate limitation period in Ontario is 15 years from the date the act or omission occurred. This applies regardless of discovery and cannot be extended by discoverability." },
        },
        {
          "@type": "Question",
          name: "Does the limitation period apply to minors in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "No. Under the Limitations Act, 2002, the 2-year basic limitation period does not run while a claimant is a minor. The limitation period begins to run on the claimant's 18th birthday." },
        },
        {
          "@type": "Question",
          name: "What is the limitation period for municipal property claims in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "Under the Municipal Act, 2001 s. 44(10), a person must give written notice of a claim against a municipality within 10 days after the occurrence of the injury or damage arising from highway or sidewalk disrepair." },
        },
        {
          "@type": "Question",
          name: "Is there a limitation period for sexual assault claims in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "No. Under the Limitations Act, 2002, there is no limitation period for claims based on sexual assault or other specified misconduct. These claims can be brought at any time." },
        },
        {
          "@type": "Question",
          name: "What is the limitation period for construction lien claims in Ontario?",
          acceptedAnswer: { "@type": "Answer", text: "Under the Construction Act, a claim for lien must be preserved within 60 days of substantial completion or abandonment of the contract. The basic limitation period for a construction lien action is 2 years." },
        },
      ],
    },
  ],
});

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="calculator-ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
      >{jsonLd}</Script>
      {children}
    </>
  );
}
