"use client";

import { use, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Loader2, Scale } from "lucide-react";

interface IntakePageProps {
  params: Promise<{ userId: string }>;
}

const MATTER_TYPES = [
  "Real Estate (Purchase)",
  "Real Estate (Sale)",
  "Will & Powers of Attorney",
  "Estate Administration",
  "Corporate / Business",
  "Employment Law",
  "Civil Litigation",
  "Family / Separation",
  "Other",
];

export default function IntakePage({ params }: IntakePageProps) {
  const { userId } = use(params);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [matterType, setMatterType] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          matterType: matterType || undefined,
          message: message.trim() || undefined,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-8 pb-8 space-y-4">
            <CheckCircle2 className="h-12 w-12 mx-auto text-green-600" />
            <h2 className="text-xl font-semibold">Request Received</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Thank you for reaching out. Your legal counsel has been notified and will be in touch shortly.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="border-b bg-background">
        <div className="max-w-lg mx-auto px-4 py-6 flex items-center gap-2">
          <Scale className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold">New Client Intake</span>
        </div>
      </div>
      <div className="max-w-lg mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Tell us about your legal matter</CardTitle>
            <CardDescription>
              Fill out this form and we&apos;ll get back to you as soon as possible to discuss how we can help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  autoFocus
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(416) 555-0100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="matterType">Type of Matter</Label>
                <select
                  id="matterType"
                  value={matterType}
                  onChange={(e) => setMatterType(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="">Select a category (optional)</option>
                  {MATTER_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Brief Description</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe your legal matter and what assistance you need…"
                  rows={4}
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={!name.trim() || !email.trim() || submitting}>
                {submitting ? (
                  <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Submitting…</>
                ) : (
                  "Submit Request"
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Your information is kept confidential and used solely for the purpose of this legal inquiry.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
