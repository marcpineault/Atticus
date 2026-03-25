"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, Plus, AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import { toast } from "sonner";

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

  // Municipal notice period (10 days — Municipal Act s. 44(10))
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

  // Skip limitation calculation for cases with no limit
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

  // Determine basic limitation period length
  let basicYears = 2;
  let basicAuthority = "Limitations Act, 2002, s. 4";
  let basicLabel = "Basic Limitation Period (2 years)";
  let basicDesc = "Claim must be commenced within 2 years of discovery of claim.";

  if (caseType === "defamation") {
    basicYears = 2;
    basicLabel = "Defamation Limitation (2 years)";
    basicDesc = "Action for defamation must be commenced within 2 years.";
  } else if (caseType === "construction_lien") {
    basicYears = 2;
    basicLabel = "Lien Action (2 years)";
    basicDesc = "Action to enforce lien or vacate lien expired under Construction Act.";
    basicAuthority = "Construction Act, s. 31";
  }

  // Minor provisions: limitation runs from age of majority (18)
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

  // Basic limitation
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

  // Suggested pre-action steps
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

  // Ultimate limitation (15 years)
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
    // Construction Act 10-year ultimate
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

export function LimitationCalculator({ clientId, matterId }: { clientId?: string; matterId?: string }) {
  const [open, setOpen] = useState(false);
  const [triggerDate, setTriggerDate] = useState("");
  const [caseType, setCaseType] = useState("general");
  const [isMinor, setIsMinor] = useState(false);
  const [dob, setDob] = useState("");
  const [isMunicipal, setIsMunicipal] = useState(false);
  const [results, setResults] = useState<LimitationResult[]>([]);
  const [calculated, setCalculated] = useState(false);

  const utils = trpc.useUtils();
  const createDeadline = trpc.documents.createManualDeadline.useMutation({
    onSuccess: (_, vars) => {
      utils.documents.listDeadlines.invalidate();
      toast.success(`"${vars.value}" added to deadlines`);
    },
  });

  function calculate() {
    if (!triggerDate) return;
    const trigger = new Date(triggerDate + "T00:00:00");
    const dobDate = dob ? new Date(dob + "T00:00:00") : undefined;
    const res = calculateLimitations(trigger, caseType, isMinor, dobDate, isMunicipal);
    setResults(res);
    setCalculated(true);
  }

  function addAsDeadline(result: LimitationResult) {
    if (!result.dueDate) return;
    createDeadline.mutate({
      type: "deadline",
      value: result.label,
      context: `${result.description} [${result.authority}]`,
      dueDate: result.dueDate.toISOString(),
      clientId,
      matterId,
    });
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) { setCalculated(false); setResults([]); } }}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Calculator className="h-3.5 w-3.5 mr-1" />
          Limitation Calculator
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Ontario Limitation Period Calculator
          </DialogTitle>
          <p className="text-xs text-muted-foreground mt-1">
            Based on the <em>Limitations Act, 2002</em>, S.O. 2002, c. 24, Sched. B. For reference only — always verify with primary sources.
          </p>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Trigger / Incident Date</Label>
              <Input
                type="date"
                value={triggerDate}
                onChange={(e) => { setTriggerDate(e.target.value); setCalculated(false); }}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Case Type</Label>
              <Select value={caseType} onValueChange={(v) => { setCaseType(v); setCalculated(false); }}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General (tort/contract)</SelectItem>
                  <SelectItem value="defamation">Defamation</SelectItem>
                  <SelectItem value="sexual_assault">Sexual Assault</SelectItem>
                  <SelectItem value="construction_lien">Construction Lien</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={isMunicipal}
                onChange={(e) => { setIsMunicipal(e.target.checked); setCalculated(false); }}
                className="h-4 w-4 accent-primary"
              />
              Incident on municipal property?
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={isMinor}
                onChange={(e) => { setIsMinor(e.target.checked); setCalculated(false); }}
                className="h-4 w-4 accent-primary"
              />
              Plaintiff is a minor?
            </label>
          </div>

          {isMinor && (
            <div className="space-y-1.5">
              <Label>Plaintiff Date of Birth</Label>
              <Input
                type="date"
                value={dob}
                onChange={(e) => { setDob(e.target.value); setCalculated(false); }}
                className="w-48"
              />
            </div>
          )}

          <Button onClick={calculate} disabled={!triggerDate} className="w-full">
            <Calculator className="h-4 w-4 mr-2" />
            Calculate Limitation Periods
          </Button>

          {calculated && results.length > 0 && (
            <div className="space-y-3 border-t pt-4">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Results</p>
              {results.map((result, i) => {
                const days = result.dueDate ? getDaysUntil(result.dueDate) : null;
                const isPast = days !== null && days < 0;
                return (
                  <div
                    key={i}
                    className={`rounded-lg border p-3 space-y-1.5 ${
                      isPast ? "border-destructive/40 bg-destructive/5" :
                      result.urgent ? "border-amber-500/40 bg-amber-50/50 dark:bg-amber-950/20" :
                      "border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        {isPast ? (
                          <AlertTriangle className="h-3.5 w-3.5 text-destructive flex-shrink-0" />
                        ) : result.urgent ? (
                          <Clock className="h-3.5 w-3.5 text-amber-600 flex-shrink-0" />
                        ) : (
                          <CheckCircle2 className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className="text-sm font-medium">{result.label}</span>
                      </div>
                      {result.dueDate && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-6 px-2 text-xs flex-shrink-0"
                          onClick={() => addAsDeadline(result)}
                          disabled={createDeadline.isPending}
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          Add
                        </Button>
                      )}
                    </div>
                    {result.dueDate && (
                      <p className={`text-sm font-semibold ${isPast ? "text-destructive" : ""}`}>
                        {fmtDate(result.dueDate)}
                        {days !== null && !isPast && (
                          <span className="ml-2 text-xs font-normal text-muted-foreground">
                            ({days} day{days !== 1 ? "s" : ""} from today)
                          </span>
                        )}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">{result.description}</p>
                    {result.warning && (
                      <Badge variant="destructive" className="text-xs">
                        {result.warning}
                      </Badge>
                    )}
                    <p className="text-xs text-muted-foreground/70 italic">{result.authority}</p>
                  </div>
                );
              })}

              <p className="text-xs text-muted-foreground/60 pt-1">
                ⚠️ This tool is for reference only and does not constitute legal advice. Always verify limitation periods independently and consult applicable statutes.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
