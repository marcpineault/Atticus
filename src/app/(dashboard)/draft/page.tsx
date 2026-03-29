"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileEdit,
  Copy,
  Check,
  Loader2,
  Wand2,
  FileText,
  Send,
  CheckCircle2,
  BookmarkPlus,
  BookOpen,
  Trash2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const DRAFT_TYPES = [
  { value: "demand_letter", label: "Demand Letter" },
  { value: "settlement_proposal", label: "Settlement Proposal" },
  { value: "client_update", label: "Client Update Letter" },
  { value: "follow_up_email", label: "Follow-Up Email" },
  { value: "legal_memo", label: "Legal Memo" },
  { value: "closing_statement", label: "Closing Statement" },
  { value: "engagement_letter", label: "Engagement / Retainer Letter" },
  { value: "statement_of_claim", label: "Statement of Claim (Ontario)" },
  { value: "statement_of_defence", label: "Statement of Defence (Ontario)" },
  { value: "affidavit", label: "Affidavit" },
  { value: "notice_of_motion", label: "Notice of Motion (Ontario)" },
  { value: "will_and_testament", label: "Will and Testament (Ontario)" },
  { value: "power_of_attorney", label: "Power of Attorney (Ontario)" },
  { value: "general", label: "General Document" },
] as const;

const TONES = [
  { value: "professional", label: "Professional" },
  { value: "firm", label: "Firm & Direct" },
  { value: "conciliatory", label: "Conciliatory" },
] as const;

export default function DraftPage() {
  const [instructions, setInstructions] = useState("");
  const [draftType, setDraftType] = useState<string>("general");
  const [tone, setTone] = useState<string>("professional");
  const [clientId, setClientId] = useState<string>("");
  const [matterId, setMatterId] = useState<string>("");
  const [draft, setDraft] = useState<string | null>(null);
  const [contextUsed, setContextUsed] = useState(0);
  const [copied, setCopied] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);
  const [sendSubject, setSendSubject] = useState("");
  const [sendSent, setSendSent] = useState(false);
  const [saveTemplateName, setSaveTemplateName] = useState("");
  const [saveTemplateOpen, setSaveTemplateOpen] = useState(false);
  const [templateSaved, setTemplateSaved] = useState(false);

  const { data: clients } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery(
    { clientId: clientId || undefined },
    { enabled: !!clientId }
  );

  const generateDraft = trpc.ai.draft.useMutation({
    onSuccess: (data) => {
      setDraft(data.draft);
      setContextUsed(data.contextUsed);
      setSendSent(false);
    },
  });

  const sendEmail = trpc.ai.sendEmail.useMutation({
    onSuccess: () => {
      setSendOpen(false);
      setSendSent(true);
    },
  });

  const { data: templates } = trpc.templates.list.useQuery();
  const utils = trpc.useUtils();
  const saveTemplate = trpc.templates.create.useMutation({
    onSuccess: () => {
      setSaveTemplateOpen(false);
      setSaveTemplateName("");
      setTemplateSaved(true);
      setTimeout(() => setTemplateSaved(false), 2500);
      utils.templates.list.invalidate();
    },
  });
  const deleteTemplate = trpc.templates.delete.useMutation({
    onSuccess: () => utils.templates.list.invalidate(),
  });

  function loadTemplate(t: { draftType: string; tone: string; instructions: string }) {
    setDraftType(t.draftType);
    setTone(t.tone);
    setInstructions(t.instructions);
  }

  const selectedClient = clients?.find(c => c.id === clientId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!instructions.trim()) return;
    setDraft(null);
    generateDraft.mutate({
      instructions,
      draftType: draftType as typeof DRAFT_TYPES[number]["value"],
      tone: tone as typeof TONES[number]["value"],
      clientId: clientId || undefined,
      matterId: matterId || undefined,
    });
  };

  const handleCopy = async () => {
    if (!draft) return;
    await navigator.clipboard.writeText(draft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <FileEdit className="h-6 w-6" />
          AI Drafting
        </h1>
        <p className="text-muted-foreground mt-1">
          Draft legal correspondence grounded in your actual case files. Tell Atticus what to write and it will find the relevant context automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Left: instructions form */}
        <div className="lg:col-span-2 space-y-4">
          {/* Templates */}
          {templates && templates.length > 0 && (
            <Card className="border-dashed">
              <CardContent className="pt-4 pb-3">
                <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
                  <BookOpen className="h-3 w-3" />
                  Templates
                </p>
                <div className="space-y-1.5">
                  {templates.map(t => (
                    <div key={t.id} className="flex items-center gap-1.5">
                      <button
                        className="flex-1 text-left text-xs truncate px-2.5 py-1.5 rounded-md hover:bg-muted transition-colors"
                        onClick={() => loadTemplate(t)}
                      >
                        {t.name}
                      </button>
                      <button
                        onClick={() => deleteTemplate.mutate({ id: t.id })}
                        className="flex-shrink-0 text-muted-foreground hover:text-destructive transition-colors p-1"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Draft Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label>Document Type</Label>
                  <Select value={draftType} onValueChange={setDraftType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {DRAFT_TYPES.map(t => (
                        <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>Tone</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TONES.map(t => (
                        <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>Client (optional)</Label>
                  <Select
                    value={clientId}
                    onValueChange={(v) => { setClientId(v === "none" ? "" : v); setMatterId(""); }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any client" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Any client</SelectItem>
                      {clients?.map(c => (
                        <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {clientId && matters && matters.length > 0 && (
                  <div className="space-y-1.5">
                    <Label>Matter (optional)</Label>
                    <Select value={matterId} onValueChange={(v) => setMatterId(v === "none" ? "" : v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any matter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Any matter</SelectItem>
                        {matters.map(m => (
                          <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-1.5">
                  <Label>Instructions *</Label>
                  <Textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="e.g. Draft a demand letter to opposing counsel regarding the missed payment of $50,000 due on March 1. Reference the settlement agreement signed in January. Deadline to respond is 10 days."
                    className="min-h-36 resize-none text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    Be specific. Include names, amounts, dates, and what action you want taken.
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={!instructions.trim() || generateDraft.isPending}
                  >
                    {generateDraft.isPending ? (
                      <><Loader2 className="h-4 w-4 animate-spin mr-2" />Drafting…</>
                    ) : (
                      <><Wand2 className="h-4 w-4 mr-2" />Generate Draft</>
                    )}
                  </Button>
                  <Dialog open={saveTemplateOpen} onOpenChange={setSaveTemplateOpen}>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        disabled={!instructions.trim()}
                        title="Save as template"
                      >
                        {templateSaved ? <Check className="h-4 w-4" /> : <BookmarkPlus className="h-4 w-4" />}
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Save as Template</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <Label>Template Name *</Label>
                          <Input
                            value={saveTemplateName}
                            onChange={(e) => setSaveTemplateName(e.target.value)}
                            placeholder="e.g. Demand Letter — Payment Default"
                          />
                        </div>
                        <Button
                          className="w-full"
                          disabled={!saveTemplateName.trim() || saveTemplate.isPending}
                          onClick={() => saveTemplate.mutate({
                            name: saveTemplateName.trim(),
                            draftType,
                            tone,
                            instructions,
                          })}
                        >
                          {saveTemplate.isPending ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          ) : null}
                          Save Template
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="border-dashed">
            <CardContent className="pt-4">
              <p className="text-xs font-medium text-muted-foreground mb-2">Tips for better drafts</p>
              <ul className="text-xs text-muted-foreground space-y-1.5">
                <li>· Select a specific client to ground the draft in their case files</li>
                <li>· Include key facts: names, dates, amounts, obligations</li>
                <li>· Specify the recipient and desired outcome</li>
                <li>· Always review and finalize before sending</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right: draft output */}
        <div className="lg:col-span-3">
          {generateDraft.isPending && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
              <p className="text-sm text-muted-foreground">Searching your case files and drafting…</p>
            </div>
          )}

          {draft && !generateDraft.isPending && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Generated Draft
                  </CardTitle>
                  {contextUsed > 0 && (
                    <CardDescription className="mt-1 text-xs">
                      Grounded in {contextUsed} document passage{contextUsed !== 1 ? "s" : ""} from your case files.
                    </CardDescription>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Review before sending</Badge>
                  <Button variant="outline" size="sm" onClick={handleCopy}>
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? "Copied" : "Copy"}
                  </Button>
                  {clientId && selectedClient && (
                    <Dialog open={sendOpen} onOpenChange={setSendOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm" onClick={() => { setSendSubject(""); }}>
                          <Send className="h-3.5 w-3.5 mr-1.5" />
                          Send to {selectedClient.name}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Send Email to {selectedClient.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <Label>Subject *</Label>
                            <Input
                              value={sendSubject}
                              onChange={(e) => setSendSubject(e.target.value)}
                              placeholder="e.g. Re: Johnson Matter — Follow Up"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label>Body</Label>
                            <div className="rounded-md border bg-muted/40 p-3 max-h-48 overflow-y-auto">
                              <pre className="whitespace-pre-wrap text-xs font-mono leading-relaxed">
                                {draft}
                              </pre>
                            </div>
                          </div>
                          {sendEmail.error && (
                            <p className="text-xs text-destructive">{sendEmail.error.message}</p>
                          )}
                          <Button
                            className="w-full"
                            disabled={!sendSubject.trim() || sendEmail.isPending}
                            onClick={() => sendEmail.mutate({
                              clientId,
                              subject: sendSubject,
                              body: draft!,
                            })}
                          >
                            {sendEmail.isPending ? (
                              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending…</>
                            ) : (
                              <><Send className="mr-2 h-4 w-4" />Send Email</>
                            )}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap text-sm font-mono leading-relaxed rounded-md bg-muted p-4 overflow-auto max-h-[600px]">
                  {draft}
                </pre>
              </CardContent>
            </Card>
          )}

          {!draft && !generateDraft.isPending && (
            <div className="flex flex-col items-center justify-center py-24 text-center text-muted-foreground">
              <FileEdit className="h-12 w-12 mb-4 opacity-20" />
              <p className="text-sm">Your draft will appear here.</p>
              <p className="text-xs mt-1 opacity-70">Atticus will search your case files for relevant context before drafting.</p>
            </div>
          )}

          {sendSent && (
            <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
              Email sent to {selectedClient?.name ?? "client"}.
            </div>
          )}

          {generateDraft.error && (
            <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
              <p className="text-sm text-destructive">{generateDraft.error.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
