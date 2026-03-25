"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, AlertTriangle, CheckCircle2, Clock, Scale, ArrowRight } from "lucide-react";

interface LimitationResult {
  label: string;
  description: string;
  dueDate: Date | null;
  urgent: boolean;
  warning?: string;
  authority: string;
}

function addYears(date: Date, years: number): Date {
  const d = new Date(date);
  d.setFullYear(d.getFullYear() + years);
  return d;
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function getDaysUntil(date: Date): number {
  return Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

function fmtDate(d: Date): string {
  return d.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
}

function calculateLimitations(
  triggerDate: Date,
  caseType: string,
  isMinor: boolean,
  dob?: Date,
  isMunicipal?: boolean,
): LimitationResult[] {
  const results: LimitationResult[] = [];
  const now = new Date();

  if (isMunicipal) {
    const noticeDeadline = addDays(triggerDate, 10);
    const days = getDaysUntil(noticeDeadline);
    results.push({
      label: "Municipal Notice Deadline",
      description: "Written notice to municipality required within 10 days of incident on municipal property (road, sidewalk, etc.)",
      dueDate: noticeDeadline,
      urgent: days <= 14,
      warning: days < 0 ? "This deadline has passed." : days <= 10 ? `CRITICAL — only ${days} day${days !== 1 ? "s" : ""} left!` : undefined,
      authority: "Municipal Act, 2001, s. 44(10)",
    });
  }

  if (caseType === "sexual_assault") {
    results.push({
      label: "Limitation Period",
      description: "No limitation period applies to sexual assault or sexual battery claims.",
      dueDate: null,
      urgent: false,
      authority: "Limitations Act, 2002, s. 16(1)(h)",
    });
    return results;
  }

  const basicYears = 2;
  let basicAuthority = "Limitations Act, 2002, s. 4";
  let basicLabel = "Basic Limitation Period (2 years)";
  let basicDesc = "Claim must be commenced within 2 years of discovery of claim.";

  if (caseType === "defamation") {
    basicLabel = "Defamation Limitation (2 years)";
    basicDesc = "Action for defamation must be commenced within 2 years.";
  } else if (caseType === "construction_lien") {
    basicLabel = "Lien Action (2 years)";
    basicDesc = "Action to enforce lien or vacate lien expired under Construction Act.";
    basicAuthority = "Construction Act, s. 31";
  }

  let effectiveTrigger = triggerDate;
  if (isMinor && dob) {
    const eighteenth = new Date(dob);
    eighteenth.setFullYear(eighteenth.getFullYear() + 18);
    if (triggerDate < eighteenth) {
      effectiveTrigger = eighteenth;
      results.push({
        label: "Plaintiff Turns 18",
        description: "The limitation period is tolled until the plaintiff reaches the age of majority. The 2-year clock starts on their 18th birthday.",
        dueDate: eighteenth,
        urgent: getDaysUntil(eighteenth) <= 90,
        authority: "Limitations Act, 2002, s. 6",
      });
    }
  }

  const basicDeadline = addYears(effectiveTrigger, basicYears);
  const basicDays = getDaysUntil(basicDeadline);
  results.push({
    label: basicLabel,
    description: basicDesc,
    dueDate: basicDeadline,
    urgent: basicDays <= 90,
    warning: basicDays < 0
      ? "This limitation period has EXPIRED."
      : basicDays <= 30
      ? `CRITICAL — only ${basicDays} day${basicDays !== 1 ? "s" : ""} remaining`
      : basicDays <= 90
      ? `Warning — ${basicDays} days remaining`
      : undefined,
    authority: basicAuthority,
  });

  const demandDate = addDays(basicDeadline, -60);
  if (demandDate > now) {
    results.push({
      label: "Send Demand Letter (suggested)",
      description: "Best practice: send demand/settlement letter 60 days before limitation expires, leaving time to commence action if ignored.",
      dueDate: demandDate,
      urgent: getDaysUntil(demandDate) <= 30,
      authority: "Best practice",
    });
  }

  if (caseType !== "construction_lien") {
    const ultimateDeadline = addYears(triggerDate, 15);
    const ultimateDays = getDaysUntil(ultimateDeadline);
    results.push({
      label: "Ultimate Limitation Period (15 years)",
      description: "Regardless of discovery, no claim may be brought after 15 years from the act or omission that gave rise to the claim.",
      dueDate: ultimateDeadline,
      urgent: ultimateDays <= 365,
      warning: ultimateDays < 0 ? "Ultimate limitation has EXPIRED — claim is statute-barred." : undefined,
      authority: "Limitations Act, 2002, s. 15",
    });
  } else {
    const constructionUltimate = addYears(triggerDate, 10);
    results.push({
      label: "Ultimate Limitation Period (10 years)",
      description: "No lien or related claim may be commenced more than 10 years after the date on which the act or omission took place.",
      dueDate: constructionUltimate,
      urgent: getDaysUntil(constructionUltimate) <= 365,
      authority: "Construction Act, s. 31(3)",
    });
  }

  return results;
}

export default function CalculatorPage() {
  const [triggerDate, setTriggerDate] = useState("");
  const [caseType, setCaseType] = useState("general");
  const [isMinor, setIsMinor] = useState(false);
  const [dob, setDob] = useState("");
  const [isMunicipal, setIsMunicipal] = useState(false);
  const [results, setResults] = useState<LimitationResult[]>([]);
  const [calculated, setCalculated] = useState(false);

  function calculate() {
    if (!triggerDate) return;
    const trigger = new Date(triggerDate + "T00:00:00");
    const dobDate = dob ? new Date(dob + "T00:00:00") : undefined;
    const res = calculateLimitations(trigger, caseType, isMinor, dobDate, isMunicipal);
    setResults(res);
    setCalculated(true);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Nav */}
      <nav style={{ background: "#0f172a", padding: "0 24px", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <Scale style={{ color: "#e8b84b", width: "18px", height: "18px" }} />
          <span style={{ color: "#f8fafc", fontWeight: 700, fontSize: "16px" }}>Atticus</span>
        </Link>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Link href="/sign-in" style={{ color: "#94a3b8", fontSize: "13px", textDecoration: "none" }}>Sign in</Link>
          <Link href="/sign-up" style={{ background: "#e8b84b", color: "#0f172a", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
            Free Trial
          </Link>
        </div>
      </nav>

      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "20px", padding: "4px 12px", marginBottom: "16px" }}>
            <Calculator style={{ width: "12px", height: "12px", color: "#3b82f6" }} />
            <span style={{ fontSize: "12px", color: "#3b82f6", fontWeight: 600 }}>Free Tool</span>
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#0f172a", margin: "0 0 12px", lineHeight: 1.2 }}>
            Ontario Limitation Period Calculator
          </h1>
          <p style={{ fontSize: "16px", color: "#64748b", margin: 0, lineHeight: 1.6 }}>
            Instantly calculate all applicable limitation periods under the{" "}
            <em>Limitations Act, 2002</em>. Enter the incident date and case type to see every deadline.
          </p>
        </div>

        {/* Calculator Card */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "28px", marginBottom: "24px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px", marginBottom: "20px" }}>
            <div>
              <Label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                Trigger / Incident Date
              </Label>
              <Input
                type="date"
                value={triggerDate}
                onChange={(e) => { setTriggerDate(e.target.value); setCalculated(false); }}
              />
            </div>
            <div>
              <Label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                Case Type
              </Label>
              <Select value={caseType} onValueChange={(v) => { setCaseType(v); setCalculated(false); }}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General (tort / contract)</SelectItem>
                  <SelectItem value="defamation">Defamation</SelectItem>
                  <SelectItem value="sexual_assault">Sexual Assault</SelectItem>
                  <SelectItem value="construction_lien">Construction Lien</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div style={{ display: "flex", gap: "24px", marginBottom: "20px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "14px", color: "#374151" }}>
              <input
                type="checkbox"
                checked={isMunicipal}
                onChange={(e) => { setIsMunicipal(e.target.checked); setCalculated(false); }}
                style={{ width: "16px", height: "16px", accentColor: "#0f172a" }}
              />
              Incident on municipal property?
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "14px", color: "#374151" }}>
              <input
                type="checkbox"
                checked={isMinor}
                onChange={(e) => { setIsMinor(e.target.checked); setCalculated(false); }}
                style={{ width: "16px", height: "16px", accentColor: "#0f172a" }}
              />
              Plaintiff is a minor?
            </label>
          </div>

          {isMinor && (
            <div style={{ marginBottom: "20px" }}>
              <Label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                Plaintiff Date of Birth
              </Label>
              <Input
                type="date"
                value={dob}
                onChange={(e) => { setDob(e.target.value); setCalculated(false); }}
                style={{ maxWidth: "220px" }}
              />
            </div>
          )}

          <Button
            onClick={calculate}
            disabled={!triggerDate}
            style={{ width: "100%", background: "#0f172a", color: "#fff" }}
          >
            <Calculator style={{ width: "16px", height: "16px", marginRight: "8px" }} />
            Calculate Limitation Periods
          </Button>
        </div>

        {/* Results */}
        {calculated && results.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
              Results
            </p>
            {results.map((result, i) => {
              const days = result.dueDate ? getDaysUntil(result.dueDate) : null;
              const isPast = days !== null && days < 0;
              return (
                <div
                  key={i}
                  style={{
                    background: isPast ? "#fef2f2" : result.urgent ? "#fffbeb" : "#fff",
                    border: `1px solid ${isPast ? "#fecaca" : result.urgent ? "#fde68a" : "#e2e8f0"}`,
                    borderRadius: "8px",
                    padding: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <div style={{ marginTop: "2px", flexShrink: 0 }}>
                      {isPast ? (
                        <AlertTriangle style={{ width: "16px", height: "16px", color: "#dc2626" }} />
                      ) : result.urgent ? (
                        <Clock style={{ width: "16px", height: "16px", color: "#d97706" }} />
                      ) : (
                        <CheckCircle2 style={{ width: "16px", height: "16px", color: "#94a3b8" }} />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: "0 0 4px", fontSize: "14px", fontWeight: 600, color: "#0f172a" }}>{result.label}</p>
                      {result.dueDate && (
                        <p style={{ margin: "0 0 4px", fontSize: "15px", fontWeight: 700, color: isPast ? "#dc2626" : "#0f172a" }}>
                          {fmtDate(result.dueDate)}
                          {days !== null && !isPast && (
                            <span style={{ marginLeft: "8px", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>
                              ({days} day{days !== 1 ? "s" : ""} from today)
                            </span>
                          )}
                        </p>
                      )}
                      <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#64748b" }}>{result.description}</p>
                      {result.warning && (
                        <span style={{
                          display: "inline-block",
                          background: "#fef2f2",
                          border: "1px solid #fecaca",
                          color: "#dc2626",
                          borderRadius: "4px",
                          padding: "2px 8px",
                          fontSize: "12px",
                          fontWeight: 600,
                          marginBottom: "4px",
                        }}>
                          {result.warning}
                        </span>
                      )}
                      <p style={{ margin: 0, fontSize: "11px", color: "#94a3b8", fontStyle: "italic" }}>{result.authority}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <p style={{ fontSize: "12px", color: "#94a3b8", margin: "4px 0 0" }}>
              ⚠️ This tool is for reference only and does not constitute legal advice. Always verify limitation periods independently.
            </p>
          </div>
        )}

        {/* Quick Reference */}
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "24px 28px" }}>
          <h2 style={{ margin: "0 0 16px", fontSize: "16px", fontWeight: 700, color: "#0f172a" }}>
            Ontario Limitation Periods — Quick Reference
          </h2>
          <div style={{ display: "grid", gap: "10px" }}>
            {[
              { period: "2 years", type: "Basic limitation (most claims)", authority: "Limitations Act, 2002 s. 4" },
              { period: "15 years", type: "Ultimate limitation period", authority: "Limitations Act, 2002 s. 15" },
              { period: "Until age 18 + 2 years", type: "Minor claimant tolling", authority: "Limitations Act, 2002 s. 6" },
              { period: "10 days written notice", type: "Municipal property (highway/sidewalk)", authority: "Municipal Act, 2001 s. 44(10)" },
              { period: "60 days to preserve lien", type: "Construction lien", authority: "Construction Act s. 31" },
              { period: "No limitation", type: "Sexual assault claims", authority: "Limitations Act, 2002 s. 10" },
            ].map(r => (
              <div key={r.type} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #e2e8f0", gap: "16px" }}>
                <div>
                  <span style={{ fontSize: "13px", color: "#374151" }}>{r.type}</span>
                  <span style={{ display: "block", fontSize: "11px", color: "#94a3b8", marginTop: "1px", fontStyle: "italic" }}>{r.authority}</span>
                </div>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", whiteSpace: "nowrap", flexShrink: 0 }}>{r.period}</span>
              </div>
            ))}
          </div>
          <p style={{ margin: "12px 0 0", fontSize: "11px", color: "#94a3b8" }}>
            For reference only. Limitation periods can be affected by discovery, disability, agreements, and other factors. Always verify with primary sources.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "28px 32px", textAlign: "center" as const }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
            <Scale style={{ width: "28px", height: "28px", color: "#e8b84b" }} />
          </div>
          <h2 style={{ margin: "0 0 8px", fontSize: "20px", fontWeight: 700, color: "#f8fafc" }}>
            Never miss a limitation period again
          </h2>
          <p style={{ margin: "0 0 20px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.6 }}>
            Atticus extracts deadlines from all your client documents automatically, sends you daily briefings, and tracks every limitation period in one place.
            Built for Ontario solo lawyers.
          </p>
          <Link
            href="/sign-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#e8b84b",
              color: "#0f172a",
              padding: "10px 24px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Start Free 14-Day Trial
            <ArrowRight style={{ width: "16px", height: "16px" }} />
          </Link>
          <p style={{ margin: "12px 0 0", fontSize: "12px", color: "#475569" }}>No credit card required.</p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e2e8f0", padding: "20px 24px", textAlign: "center" as const }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>
          © 2026 Atticus · Ontario, Canada ·{" "}
          <Link href="/privacy" style={{ color: "#94a3b8" }}>Privacy</Link>{" · "}
          <Link href="/terms" style={{ color: "#94a3b8" }}>Terms</Link>
        </p>
      </footer>
    </div>
  );
}
