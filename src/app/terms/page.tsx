import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Atticus",
  description: "Terms and conditions for using Atticus.",
};

export default function TermsPage() {
  const lastUpdated = "March 18, 2026";

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">← Back to Atticus</Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: {lastUpdated}</p>

      <div className="prose prose-sm max-w-none space-y-8 text-sm leading-relaxed text-foreground">

        <section>
          <h2 className="text-base font-semibold mb-3">1. Acceptance</h2>
          <p>By creating an account or using Atticus, you agree to these Terms of Service. If you are using Atticus on behalf of a law firm, you represent that you have authority to bind the firm to these terms.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">2. Description of Service</h2>
          <p>Atticus is a legal practice management platform that provides AI-assisted document processing, transcription, semantic search, deadline tracking, and practice management tools for lawyers and law firms. The platform is designed for legal professionals and is not a substitute for legal judgment.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">3. Your Responsibilities</h2>
          <p>You are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ensuring you have the right to upload and process all materials submitted to Atticus</li>
            <li>Complying with your professional obligations under the Law Society of Ontario Rules of Professional Conduct (or applicable law society rules) when using AI-assisted tools</li>
            <li>Disclosing your use of cloud-based AI tools to your clients as appropriate under Rule 3.3</li>
            <li>Verifying all AI-generated outputs before relying on them in legal matters</li>
            <li>Maintaining the confidentiality of your login credentials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">4. AI Output Disclaimer</h2>
          <p>AI-generated summaries, entity extractions, chat responses, and other outputs are provided for informational purposes only. They are not legal advice and may contain errors. You bear sole responsibility for verifying AI outputs before use in any legal proceeding or client communication. Atticus is not liable for any professional consequences arising from unverified reliance on AI-generated content.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">5. Subscription and Payment</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Atticus is offered on a subscription basis with a 14-day free trial</li>
            <li>Subscriptions renew automatically at the end of each billing period</li>
            <li>You may cancel at any time; cancellation takes effect at the end of the current billing period</li>
            <li>Payments are processed by Stripe. You authorize Stripe to charge your payment method on file</li>
            <li>We reserve the right to change pricing with 30 days&apos; written notice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">6. Data Ownership</h2>
          <p>You retain full ownership of all data you upload to Atticus. We do not claim any rights to your documents, client records, or any other content. You grant us a limited license to process your data solely for the purpose of providing the service.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">7. Confidentiality</h2>
          <p>We treat all data submitted to Atticus as confidential. Our obligations are described in detail in our <Link href="/privacy" className="underline">Privacy Policy</Link>.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Atticus shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability in any calendar year shall not exceed the amounts paid by you to Atticus in that year.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">9. Governing Law</h2>
          <p>These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts of Ontario.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">10. Changes to Terms</h2>
          <p>We may update these terms from time to time. Continued use of the service after notice of changes constitutes acceptance of the updated terms.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">11. Contact</h2>
          <p>Legal inquiries: <a href="mailto:legal@getatticus.ca" className="underline">legal@getatticus.ca</a></p>
        </section>
      </div>
    </div>
  );
}
