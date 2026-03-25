import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Atticus",
  description: "How Atticus handles and protects your data.",
};

export default function PrivacyPage() {
  const lastUpdated = "March 18, 2026";

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">← Back to Atticus</Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: {lastUpdated}</p>

      <div className="prose prose-sm max-w-none space-y-8 text-sm leading-relaxed text-foreground">

        <section>
          <h2 className="text-base font-semibold mb-3">1. Who We Are</h2>
          <p>Atticus is a legal practice management platform operated by Atticus (&ldquo;Atticus&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;). We are based in Ontario, Canada and operate in compliance with the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and applicable provincial privacy laws including Quebec Law 25.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">2. Data Residency</h2>
          <p>All customer data — including documents, transcripts, and client records — is stored exclusively on servers located in Canada (AWS ca-central-1, Montreal). Your client data never leaves Canadian jurisdiction.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">3. What We Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Account information: name, email address, firm name, provided during registration via Clerk</li>
            <li>Documents and files you upload for processing</li>
            <li>Client records, matters, notes, and deadlines you create in the platform</li>
            <li>Usage metadata: login timestamps, feature access logs for security and debugging</li>
            <li>Payment information: processed by Stripe; we do not store card numbers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">4. AI Processing</h2>
          <p>Atticus uses AI services to process your documents:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Anthropic Claude API</strong> — for summarization, entity extraction, and chat. Anthropic does not use API customer data for model training under their usage policies.</li>
            <li><strong>OpenAI Whisper API</strong> — for audio transcription. OpenAI does not use API data for training under their zero-data-retention policy.</li>
            <li><strong>Voyage AI</strong> — for generating document embeddings used in semantic search. Data is transmitted under a data processing agreement prohibiting training use.</li>
          </ul>
          <p className="mt-3">None of your client data is used to train AI models by Atticus or any of its AI sub-processors.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">5. How We Use Your Data</h2>
          <p>We use your data solely to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Deliver the Atticus service as described</li>
            <li>Process payments and manage your subscription</li>
            <li>Communicate service updates, security notices, and billing information</li>
            <li>Investigate security incidents and resolve technical issues</li>
          </ul>
          <p className="mt-3">We do not sell, rent, or share your data with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">6. Security</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All data is encrypted at-rest (AES-256) and in-transit (TLS 1.2+)</li>
            <li>Access controls limit data access to service delivery purposes only</li>
            <li>We conduct periodic security reviews</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">7. Data Retention and Deletion</h2>
          <p>Your data is retained for the duration of your subscription and for a period of 90 days following cancellation. You may request immediate deletion of your account and all associated data by contacting us at privacy@getatticus.ca. Documents are permanently deleted from all storage including backups within 30 days of a deletion request.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">8. Breach Notification</h2>
          <p>In the event of a data breach that creates a real risk of significant harm, we will notify affected users and the Office of the Privacy Commissioner of Canada as required under PIPEDA. Quebec-based users will receive notification within 72 hours as required by Law 25.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">9. Your Rights</h2>
          <p>Under PIPEDA and applicable law, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access the personal information we hold about you</li>
            <li>Correct inaccurate information</li>
            <li>Withdraw consent and request deletion of your data</li>
            <li>Lodge a complaint with the Office of the Privacy Commissioner</li>
          </ul>
          <p className="mt-3">To exercise these rights, contact us at privacy@getatticus.ca.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3">10. Contact</h2>
          <p>Privacy inquiries: <a href="mailto:privacy@getatticus.ca" className="underline">privacy@getatticus.ca</a></p>
        </section>
      </div>
    </div>
  );
}
