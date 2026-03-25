"use client";

import { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc/client";
import { EntityList } from "@/components/clients/entity-list";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Loader2,
  FileText,
  ArrowLeft,
  Download,
  Trash2,
  Pencil,
  AlertTriangle,
  MessageSquare,
  Search,
  Circle,
  CheckCircle2,
  Clock,
  Sparkles,
  Send,
  FileEdit,
  Copy,
  Check,
  Plus,
  X,
  Receipt,
  Timer,
  StopCircle,
  Share2,
  ExternalLink,
  Scale,
  ArrowUpRight,
  ArrowDownRight,
  Mail,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DocumentDetailDialog } from "@/components/documents/document-detail-dialog";
import { NoteDialog } from "@/components/documents/note-dialog";
import { MatterForm } from "@/components/matters/matter-form";
import { AddDeadlineDialog } from "@/components/deadlines/add-deadline-dialog";
import { LimitationCalculator } from "@/components/deadlines/limitation-calculator";
import { LogTimeDialog } from "@/components/time/log-time-dialog";

interface MatterDetailPageProps {
  params: Promise<{ id: string }>;
}

const documentStatusVariants: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  pending: "secondary",
  processing: "outline",
  completed: "default",
  failed: "destructive",
};

const documentTypeLabels: Record<string, string> = {
  email: "Email",
  voice_note: "Voice Note",
  meeting: "Meeting",
  document: "Document",
  text_message: "Text Message",
  calendar: "Calendar",
};

const matterStatusVariants: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  active: "default",
  closed: "secondary",
  pending: "outline",
};

function DownloadButton({ docId }: { docId: string }) {
  const [loading, setLoading] = useState(false);
  const getUrl = trpc.documents.getSignedUrl.useMutation();

  async function handleDownload() {
    setLoading(true);
    try {
      const { url } = await getUrl.mutateAsync({ id: docId });
      window.open(url, "_blank");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleDownload} disabled={loading}>
      {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
    </Button>
  );
}

export default function MatterDetailPage({ params }: MatterDetailPageProps) {
  const { id } = use(params);

  const { data: matter, isLoading: matterLoading, error: matterError } =
    trpc.matters.getById.useQuery({ id });

  const { data: documents, isLoading: docsLoading } =
    trpc.documents.list.useQuery({ matterId: id });

  const { data: entities, isLoading: entitiesLoading } =
    trpc.documents.listEntitiesByMatter.useQuery({ matterId: id });

  const { data: deadlines, isLoading: deadlinesLoading } =
    trpc.documents.listDeadlines.useQuery({ matterId: id });

  const { data: timeEntriesList, isLoading: timeLoading } =
    trpc.timeEntries.list.useQuery({ matterId: id });
  const { data: timeTotal } = trpc.timeEntries.totalByMatter.useQuery({ matterId: id });
  const { data: userSettings } = trpc.users.getSettings.useQuery();
  const { data: trustTxns } = trpc.trust.list.useQuery({ matterId: id });
  const { data: timeline } = trpc.matters.timeline.useQuery({ id });
  const deleteTimeEntry = trpc.timeEntries.delete.useMutation({
    onSuccess: () => {
      utils.timeEntries.list.invalidate({ matterId: id });
      utils.timeEntries.totalByMatter.invalidate({ matterId: id });
    },
  });
  const updateTimeEntry = trpc.timeEntries.update.useMutation({
    onSuccess: () => {
      utils.timeEntries.list.invalidate({ matterId: id });
      utils.timeEntries.totalByMatter.invalidate({ matterId: id });
      setEditingTimeId(null);
    },
  });
  const generatePortalToken = trpc.matters.generatePortalToken.useMutation({
    onSuccess: async ({ token }) => {
      const url = `${window.location.origin}/portal/${token}`;
      await navigator.clipboard.writeText(url);
      setPortalCopied(true);
      setTimeout(() => setPortalCopied(false), 3000);
      utils.matters.getById.invalidate({ id });
    },
  });
  const revokePortalToken = trpc.matters.revokePortalToken.useMutation({
    onSuccess: () => utils.matters.getById.invalidate({ id }),
  });
  const generateInvoice = trpc.invoices.generate.useMutation({
    onSuccess: (invoice) => {
      setInvoiceOpen(false);
      setInvoiceDueDate("");
      setInvoiceNotes("");
      router.push(`/billing/invoice/${invoice.id}`);
    },
  });

  const resolveEntity = trpc.documents.resolveEntity.useMutation({
    onSuccess: () => utils.documents.listDeadlines.invalidate({ matterId: id }),
  });
  const deleteDeadline = trpc.documents.deleteDeadline.useMutation({
    onSuccess: () => utils.documents.listDeadlines.invalidate({ matterId: id }),
  });

  const updateMatter = trpc.matters.update.useMutation();
  const deleteMatter = trpc.matters.delete.useMutation();
  const generateBrief = trpc.matters.generateBrief.useMutation({
    onSuccess: () => utils.matters.getById.invalidate({ id }),
  });
  const notifyClient = trpc.matters.notifyClient.useMutation();
  const generateStatusReport = trpc.ai.generateStatusReport.useMutation();
  const requestDocument = trpc.ai.requestDocument.useMutation({
    onSuccess: () => {
      utils.documents.list.invalidate({ matterId: id });
      setReqDocOpen(false);
      setReqDocDesc("");
      setReqDocDue("");
    },
  });
  const sendEmail = trpc.ai.sendEmail.useMutation({
    onSuccess: () => setReportSent(true),
  });

  const [portalCopied, setPortalCopied] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState("");
  const [notifySent, setNotifySent] = useState(false);
  const [reqDocOpen, setReqDocOpen] = useState(false);
  const [reqDocDesc, setReqDocDesc] = useState("");
  const [reqDocDue, setReqDocDue] = useState("");
  const [reportOpen, setReportOpen] = useState(false);
  const [reportSubject, setReportSubject] = useState("");
  const [reportSent, setReportSent] = useState(false);
  const [reportCopied, setReportCopied] = useState(false);
  const [notesEditing, setNotesEditing] = useState(false);
  const [notesValue, setNotesValue] = useState("");
  const [editingTimeId, setEditingTimeId] = useState<string | null>(null);
  const [editTimeDesc, setEditTimeDesc] = useState("");
  const [editTimeMinutes, setEditTimeMinutes] = useState("");
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [invoiceDueDate, setInvoiceDueDate] = useState("");
  const [invoiceNotes, setInvoiceNotes] = useState("");
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerLogOpen, setTimerLogOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [closeDialogOpen, setCloseDialogOpen] = useState(false);

  useEffect(() => {
    if (timerRunning) {
      timerRef.current = setInterval(() => setTimerSeconds(s => s + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [timerRunning]);

  function formatTimer(s: number) {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
      : `${m}:${String(sec).padStart(2, "0")}`;
  }

  function stopTimer() {
    setTimerRunning(false);
    setTimerLogOpen(true);
  }

  const utils = trpc.useUtils();
  const router = useRouter();

  async function handleStatusChange(status: "active" | "closed" | "pending") {
    await updateMatter.mutateAsync({ id, status });
    await utils.matters.getById.invalidate({ id });
    await utils.matters.list.invalidate();
    if (status === "closed") setCloseDialogOpen(true);
  }

  async function handleDelete() {
    if (!confirm("Delete this matter? This cannot be undone.")) return;
    await deleteMatter.mutateAsync({ id });
    await utils.matters.list.invalidate();
    router.push("/matters");
  }

  if (matterLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (matterError || !matter) {
    return (
      <p className="text-sm text-destructive">
        {matterError?.message ?? "Matter not found"}
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back links */}
      <div className="flex items-center gap-3">
        <Link
          href="/matters"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All Matters
        </Link>
        {matter.clientId && (
          <>
            <span className="text-muted-foreground/40">·</span>
            <Link
              href={`/clients/${matter.clientId}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              View Client
            </Link>
          </>
        )}
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold">{matter.title}</h1>
          {matter.description && (
            <p className="mt-1 text-sm text-muted-foreground">{matter.description}</p>
          )}
          <p className="mt-1 text-xs text-muted-foreground">
            Created {new Date(matter.createdAt).toLocaleDateString(undefined, {
              year: "numeric", month: "long", day: "numeric",
            })}
          </p>
          {(() => {
            const actionEntities = (entities ?? []).filter(e => e.type === "deadline" || e.type === "action_item");
            if (actionEntities.length === 0) return null;
            const resolved = actionEntities.filter(e => e.resolved).length;
            const pct = Math.round((resolved / actionEntities.length) * 100);
            return (
              <div className="mt-2 flex items-center gap-2">
                <div className="w-24 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className={`h-full rounded-full ${pct === 100 ? "bg-green-500" : "bg-primary"}`} style={{ width: `${pct}%` }} />
                </div>
                <span className="text-xs text-muted-foreground">{resolved}/{actionEntities.length} tasks done</span>
              </div>
            );
          })()}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {((matter.totalBillableMinutes ?? 0) + (timeTotal?.totalMinutes ?? 0)) > 0 && (() => {
            const totalMins = (matter.totalBillableMinutes ?? 0) + (timeTotal?.totalMinutes ?? 0);
            const hrs = totalMins / 60;
            const rate = matter.hourlyRate ?? userSettings?.hourlyRate ?? 400;
            const value = Math.round(hrs * rate);
            return (
              <span className="text-sm font-medium text-primary" title={`At $${rate}/hr`}>
                {hrs.toFixed(1)} hrs · ${value.toLocaleString()}
              </span>
            );
          })()}
          {/* Timer */}
          {timerRunning ? (
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-sm tabular-nums text-orange-500 min-w-[4rem] text-right">
                {formatTimer(timerSeconds)}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-orange-500 hover:text-orange-600 px-2"
                onClick={stopTimer}
                title="Stop timer and log time"
              >
                <StopCircle className="h-4 w-4" />
              </Button>
            </div>
          ) : timerSeconds > 0 ? (
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground font-mono">{formatTimer(timerSeconds)}</span>
              <Button variant="ghost" size="sm" className="h-7 px-1.5 text-xs text-muted-foreground" onClick={() => setTimerSeconds(0)}>
                <X className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
              onClick={() => setTimerRunning(true)}
              title="Start timer"
            >
              <Timer className="h-3.5 w-3.5" />
            </Button>
          )}
          <LogTimeDialog
            matterId={id}
            clientId={matter.clientId ?? undefined}
            initialMinutes={timerSeconds > 0 ? Math.max(1, Math.round(timerSeconds / 60)) : undefined}
            open={timerLogOpen}
            onOpenChange={(v) => {
              setTimerLogOpen(v);
              if (!v) setTimerSeconds(0);
            }}
            trigger={<span />}
            onSuccess={() => {
              setTimerSeconds(0);
              utils.timeEntries.list.invalidate({ matterId: id });
              utils.timeEntries.totalByMatter.invalidate({ matterId: id });
            }}
          />
          <Button variant="outline" size="sm" asChild title="Search this matter's documents">
            <Link href={`/search?matterId=${id}`}>
              <Search className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild title="Chat about this matter">
            <Link href={`/chat?matterId=${id}`}>
              <MessageSquare className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => generateBrief.mutate({ id })}
            disabled={generateBrief.isPending}
            title="Generate AI matter brief"
          >
            {generateBrief.isPending ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Sparkles className="h-3.5 w-3.5" />
            )}
            {generateBrief.isPending ? "Generating…" : "AI Brief"}
          </Button>

          {/* Status Report Dialog */}
          <Dialog open={reportOpen} onOpenChange={(o) => { setReportOpen(o); if (!o) { setReportSent(false); setReportCopied(false); } }}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setReportSent(false);
                  setReportSubject(`Status Update — ${matter.title}`);
                  generateStatusReport.mutate({ matterId: id });
                }}
                title="Generate client status report"
              >
                <FileEdit className="h-3.5 w-3.5 mr-1" />
                Status Report
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Client Status Report</DialogTitle>
              </DialogHeader>
              {generateStatusReport.isPending ? (
                <div className="flex items-center gap-3 py-8 justify-center">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">Drafting status report from case files…</p>
                </div>
              ) : generateStatusReport.isError ? (
                <p className="text-sm text-destructive py-4">{generateStatusReport.error.message}</p>
              ) : generateStatusReport.data ? (
                <div className="space-y-4">
                  {reportSent ? (
                    <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      Status report sent to {generateStatusReport.data.clientName}.
                    </div>
                  ) : null}
                  <div className="space-y-1.5">
                    <Label>Subject</Label>
                    <Input
                      value={reportSubject}
                      onChange={(e) => setReportSubject(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <Label>Report</Label>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => {
                          navigator.clipboard.writeText(generateStatusReport.data!.report);
                          setReportCopied(true);
                          setTimeout(() => setReportCopied(false), 2000);
                        }}
                      >
                        {reportCopied ? <Check className="h-3.5 w-3.5 mr-1" /> : <Copy className="h-3.5 w-3.5 mr-1" />}
                        {reportCopied ? "Copied" : "Copy"}
                      </Button>
                    </div>
                    <Textarea
                      value={generateStatusReport.data.report}
                      rows={14}
                      className="text-sm font-mono resize-none"
                      readOnly
                    />
                  </div>
                  {generateStatusReport.data.clientEmail ? (
                    <Button
                      className="w-full"
                      disabled={sendEmail.isPending || reportSent || !reportSubject.trim()}
                      onClick={() => sendEmail.mutate({
                        clientId: generateStatusReport.data!.clientId,
                        subject: reportSubject,
                        body: generateStatusReport.data!.report,
                      })}
                    >
                      {sendEmail.isPending ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending…</>
                      ) : reportSent ? (
                        <><CheckCircle2 className="mr-2 h-4 w-4" />Sent</>
                      ) : (
                        <><Send className="mr-2 h-4 w-4" />Send to {generateStatusReport.data.clientName}</>
                      )}
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground text-center">
                      Add an email address to this client to send directly.
                    </p>
                  )}
                </div>
              ) : null}
            </DialogContent>
          </Dialog>
          {/* Request Document Dialog */}
          <Dialog open={reqDocOpen} onOpenChange={setReqDocOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" title="Request a document from the client">
                <Send className="h-3.5 w-3.5 mr-1" />
                Request Doc
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Request Document from Client</DialogTitle>
              </DialogHeader>
              {requestDocument.isSuccess ? (
                <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  Request sent to {requestDocument.data.clientName} at {requestDocument.data.sentTo}.
                </div>
              ) : (
                <div className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="req-doc-desc">Document needed</Label>
                    <Input
                      id="req-doc-desc"
                      value={reqDocDesc}
                      onChange={(e) => setReqDocDesc(e.target.value)}
                      placeholder="e.g. Signed retainer agreement, 2023 T4 slips"
                      autoFocus
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="req-doc-due">Requested by (optional)</Label>
                    <Input
                      id="req-doc-due"
                      type="date"
                      value={reqDocDue}
                      onChange={(e) => setReqDocDue(e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Atticus will draft and send a professional email to the client requesting this document.
                  </p>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setReqDocOpen(false)}>Cancel</Button>
                    <Button
                      onClick={() => requestDocument.mutate({ matterId: id, documentDescription: reqDocDesc, dueDate: reqDocDue || undefined })}
                      disabled={!reqDocDesc.trim() || requestDocument.isPending}
                    >
                      {requestDocument.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                      Send Request
                    </Button>
                  </DialogFooter>
                </div>
              )}
            </DialogContent>
          </Dialog>
          {/* Generate Invoice Dialog */}
          <Dialog open={invoiceOpen} onOpenChange={setInvoiceOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" title="Generate invoice for this matter">
                <Receipt className="h-3.5 w-3.5 mr-1" />
                Invoice
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Generate Invoice — {matter.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-1.5">
                  <Label>Due Date (optional)</Label>
                  <Input
                    type="date"
                    value={invoiceDueDate}
                    onChange={(e) => setInvoiceDueDate(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Notes (optional)</Label>
                  <Textarea
                    value={invoiceNotes}
                    onChange={(e) => setInvoiceNotes(e.target.value)}
                    placeholder="Payment terms, trust account details, etc."
                    className="resize-none"
                    rows={3}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Line items will be generated from all billable time in this matter — processed documents and manually logged entries.
                </p>
                {generateInvoice.isError && (
                  <p className="text-sm text-destructive">{generateInvoice.error.message}</p>
                )}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setInvoiceOpen(false)}>Cancel</Button>
                <Button
                  disabled={generateInvoice.isPending || !matter.clientId}
                  onClick={() => generateInvoice.mutate({
                    clientId: matter.clientId!,
                    matterId: id,
                    dueDate: invoiceDueDate || undefined,
                    notes: invoiceNotes || undefined,
                  })}
                >
                  {generateInvoice.isPending ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Generating…</>
                  ) : (
                    "Generate Invoice"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* Client portal share */}
          {matter.portalToken ? (
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                title="Copy portal link"
                onClick={async () => {
                  const url = `${window.location.origin}/portal/${matter.portalToken}`;
                  await navigator.clipboard.writeText(url);
                  setPortalCopied(true);
                  setTimeout(() => setPortalCopied(false), 3000);
                }}
              >
                {portalCopied ? <Check className="h-3.5 w-3.5 text-green-600" /> : <Share2 className="h-3.5 w-3.5" />}
                {portalCopied ? "Copied!" : "Portal"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-1.5"
                asChild
                title="Open portal"
              >
                <a href={`/portal/${matter.portalToken}`} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
              <Dialog open={notifyOpen} onOpenChange={(v) => { setNotifyOpen(v); if (!v) { setNotifyMessage(""); setNotifySent(false); } }}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 px-1.5" title="Email portal link to client">
                    <Mail className="h-3.5 w-3.5" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Notify Client</DialogTitle>
                  </DialogHeader>
                  {notifySent ? (
                    <div className="py-6 text-center">
                      <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">Sent!</p>
                      <p className="text-xs text-muted-foreground mt-1">Portal link emailed to client.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">Send the client their portal link with an optional message.</p>
                      <div className="space-y-2">
                        <Label>Optional message (shown at top of email)</Label>
                        <Textarea
                          placeholder="e.g. The documents have been reviewed. Please check your portal for updates…"
                          value={notifyMessage}
                          onChange={(e) => setNotifyMessage(e.target.value)}
                          className="resize-none min-h-[80px] text-sm"
                          maxLength={500}
                        />
                      </div>
                      {notifyClient.error && (
                        <p className="text-xs text-destructive">{notifyClient.error.message}</p>
                      )}
                      <DialogFooter>
                        <Button
                          onClick={async () => {
                            await notifyClient.mutateAsync({ id, message: notifyMessage || undefined });
                            setNotifySent(true);
                          }}
                          disabled={notifyClient.isPending}
                        >
                          {notifyClient.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-1" /> : null}
                          Send Email
                        </Button>
                      </DialogFooter>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-1.5 text-muted-foreground hover:text-destructive"
                onClick={() => {
                  if (confirm("Revoke portal link? The current URL will stop working.")) {
                    revokePortalToken.mutate({ id });
                  }
                }}
                disabled={revokePortalToken.isPending}
                title="Revoke portal link"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => generatePortalToken.mutate({ id })}
              disabled={generatePortalToken.isPending}
              title="Generate client portal link"
            >
              {generatePortalToken.isPending ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Share2 className="h-3.5 w-3.5" />
              )}
              Share
            </Button>
          )}
          <MatterForm
            matter={{ id: matter.id, title: matter.title, description: matter.description, status: matter.status, hourlyRate: matter.hourlyRate }}
            trigger={
              <Button variant="outline" size="sm" title="Edit matter">
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </Button>
            }
            onSuccess={() => utils.matters.getById.invalidate({ id })}
          />
          <Badge
            variant={matterStatusVariants[matter.status] ?? "secondary"}
            className="capitalize"
          >
            {matter.status}
          </Badge>
          <Select
            value={matter.status}
            onValueChange={(v) => handleStatusChange(v as "active" | "closed" | "pending")}
          >
            <SelectTrigger className="h-8 w-32 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            onClick={handleDelete}
            disabled={deleteMatter.isPending}
            title="Delete matter"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* AI Brief */}
      {(matter.summary || generateBrief.isError) && (
        <Card className="border-primary/10 bg-primary/5">
          <CardContent className="pt-4">
            {generateBrief.isError && (
              <p className="text-xs text-destructive mb-1">{generateBrief.error.message}</p>
            )}
            {matter.summary && (
              <p className="text-sm text-muted-foreground">{matter.summary}</p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Private Notes */}
      <div className="rounded-lg border bg-muted/30 p-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-muted-foreground">Private Notes</span>
          {!notesEditing ? (
            <button
              onClick={() => { setNotesValue(matter.notes ?? ""); setNotesEditing(true); }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Pencil className="h-3 w-3" />
              Edit
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={async () => {
                  await updateMatter.mutateAsync({ id, notes: notesValue || null });
                  await utils.matters.getById.invalidate({ id });
                  setNotesEditing(false);
                }}
                className="text-xs text-green-600 hover:text-green-700 flex items-center gap-1"
              >
                <Check className="h-3 w-3" />
                Save
              </button>
              <button
                onClick={() => setNotesEditing(false)}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        {notesEditing ? (
          <Textarea
            value={notesValue}
            onChange={(e) => setNotesValue(e.target.value)}
            placeholder="Private notes about this matter — visible only to you…"
            className="min-h-[80px] text-sm resize-none bg-background"
            autoFocus
          />
        ) : matter.notes ? (
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{matter.notes}</p>
        ) : (
          <p className="text-xs text-muted-foreground/60 italic">No notes yet. Click Edit to add private notes about this matter.</p>
        )}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="documents">
        <TabsList>
          <TabsTrigger value="documents" className="flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5" />
            Documents
            {documents && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                {documents.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="deadlines" className="flex items-center gap-1.5">
            <AlertTriangle className="h-3.5 w-3.5" />
            Deadlines
            {deadlines && deadlines.filter(d => !d.resolved).length > 0 && (
              <Badge variant="destructive" className="ml-1 px-1.5 py-0 text-xs">
                {deadlines.filter(d => !d.resolved).length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="entities" className="flex items-center gap-1.5">
            Entities
            {entities && entities.length > 0 && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                {entities.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="time" className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            Time
            {timeEntriesList && timeEntriesList.length > 0 && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                {timeEntriesList.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="trust" className="flex items-center gap-1.5">
            <Scale className="h-3.5 w-3.5" />
            Trust
            {trustTxns && trustTxns.length > 0 && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs">
                {trustTxns.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex items-center gap-1.5">
            Timeline
          </TabsTrigger>
        </TabsList>

        {/* Documents Tab */}
        <TabsContent value="documents" className="mt-4">
          <div className="flex justify-end">
            <NoteDialog
              clientId={matter.clientId ?? undefined}
              matterId={id}
              onCreated={() => utils.documents.list.invalidate({ matterId: id })}
            />
          </div>

          {docsLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : documents && documents.length > 0 ? (
            <div className="space-y-2">
              {documents.map((doc) => (
                <DocumentDetailDialog key={doc.id} docId={doc.id}>
                  <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {doc.title ?? "Untitled"}
                        </p>
                        {doc.summary && (
                          <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                            {doc.summary}
                          </p>
                        )}
                        <p className="mt-1 text-xs text-muted-foreground">
                          {new Date(doc.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="ml-3 flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {documentTypeLabels[doc.type] ?? doc.type}
                        </Badge>
                        <Badge
                          variant={documentStatusVariants[doc.status] ?? "secondary"}
                          className="text-xs"
                        >
                          {doc.status}
                        </Badge>
                        {doc.status === "completed" && doc.r2Key && (
                          <DownloadButton docId={doc.id} />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </DocumentDetailDialog>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-12 text-center">
              <p className="text-sm font-medium">No documents yet</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Upload documents and link them to this matter.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <Link href="/upload">Upload Documents</Link>
              </Button>
            </div>
          )}
        </TabsContent>

        {/* Deadlines Tab */}
        <TabsContent value="deadlines" className="mt-4 space-y-3">
          <div className="flex justify-end gap-2">
            <LimitationCalculator matterId={id} clientId={matter.clientId ?? undefined} />
            <AddDeadlineDialog matterId={id} clientId={matter.clientId ?? undefined} />
          </div>
          {deadlinesLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : !deadlines || deadlines.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-12 text-center">
              <CheckCircle2 className="h-8 w-8 text-muted-foreground mb-3" />
              <p className="text-sm font-medium">No deadlines yet</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Upload documents to extract deadlines, or add one manually.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {deadlines.map((item) => {
                const isResolved = item.resolved === true;
                const dueDate = item.dueDate ? new Date(item.dueDate) : null;
                const diffDays = dueDate ? Math.ceil((dueDate.getTime() - Date.now()) / 86400000) : null;
                const urgent = diffDays !== null && diffDays <= 7;
                return (
                  <Card key={item.id} className={isResolved ? "opacity-50" : urgent ? "border-destructive/30" : ""}>
                    <CardContent className="flex items-start gap-3 p-3">
                      <button
                        onClick={() => resolveEntity.mutate({ id: item.id, resolved: !isResolved })}
                        className="mt-0.5 flex-shrink-0 text-muted-foreground hover:text-green-600 transition-colors"
                      >
                        {isResolved
                          ? <CheckCircle2 className="h-4 w-4 text-green-600" />
                          : <Circle className="h-4 w-4" />
                        }
                      </button>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className={`text-sm font-medium ${isResolved ? "line-through" : ""}`}>{item.value}</p>
                          <Badge variant={item.type === "deadline" ? "destructive" : "outline"} className="text-xs">
                            {item.type === "deadline" ? "Deadline" : "Action"}
                          </Badge>
                        </div>
                        {dueDate && (
                          <span className={`flex items-center gap-1 mt-1 text-xs font-medium ${urgent && !isResolved ? "text-destructive" : "text-muted-foreground"}`}>
                            <Clock className="h-3 w-3" />
                            {dueDate.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                        )}
                        {item.context && (
                          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{item.context}</p>
                        )}
                      </div>
                      {item.isManual && (
                        <button
                          onClick={() => deleteDeadline.mutate({ id: item.id })}
                          className="flex-shrink-0 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="mt-4">
          {entitiesLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <EntityList
              entities={entities ?? []}
              onResolved={() => utils.documents.listEntitiesByMatter.invalidate({ matterId: id })}
            />
          )}
        </TabsContent>

        {/* Time Entries Tab */}
        <TabsContent value="time" className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            {timeTotal && timeTotal.totalMinutes > 0 && (
              <p className="text-sm font-medium">
                {(timeTotal.totalMinutes / 60).toFixed(1)} hrs logged manually
              </p>
            )}
            <div className="ml-auto">
              <LogTimeDialog
                matterId={id}
                clientId={matter.clientId ?? undefined}
                onSuccess={() => {
                  utils.timeEntries.list.invalidate({ matterId: id });
                  utils.timeEntries.totalByMatter.invalidate({ matterId: id });
                }}
                trigger={
                  <Button variant="outline" size="sm">
                    <Plus className="mr-1.5 h-3.5 w-3.5" />
                    Log Time
                  </Button>
                }
              />
            </div>
          </div>
          {timeLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : !timeEntriesList || timeEntriesList.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-12 text-center">
              <Clock className="h-8 w-8 text-muted-foreground mb-3" />
              <p className="text-sm font-medium">No time entries yet</p>
              <p className="mt-1 text-xs text-muted-foreground">Log billable time directly to this matter.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {timeEntriesList.map((entry) => (
                <Card key={entry.id}>
                  <CardContent className="p-3">
                    {editingTimeId === entry.id ? (
                      <div className="space-y-2">
                        <Input
                          value={editTimeDesc}
                          onChange={(e) => setEditTimeDesc(e.target.value)}
                          placeholder="Description"
                          className="h-8 text-sm"
                        />
                        <div className="flex items-center gap-2">
                          <Input
                            value={editTimeMinutes}
                            onChange={(e) => setEditTimeMinutes(e.target.value)}
                            placeholder="Minutes (e.g. 90)"
                            className="h-8 text-sm w-36"
                            type="number"
                            min={1}
                            max={1440}
                          />
                          <button
                            onClick={() => {
                              const mins = parseInt(editTimeMinutes);
                              if (!editTimeDesc.trim() || isNaN(mins)) return;
                              updateTimeEntry.mutate({ id: entry.id, description: editTimeDesc.trim(), minutes: mins });
                            }}
                            className="text-green-600 hover:text-green-700 transition-colors"
                            disabled={updateTimeEntry.isPending}
                          >
                            <Check className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => setEditingTimeId(null)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium">{entry.description}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <p className="text-xs text-muted-foreground">
                              {new Date(entry.entryDate).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                            </p>
                            {entry.billedAt && (
                              <Badge variant="secondary" className="text-[10px] h-4 px-1.5">Billed</Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-sm font-semibold text-primary">
                            {(entry.minutes / 60).toFixed(1)}h
                          </span>
                          {!entry.billedAt && (
                            <button
                              onClick={() => { setEditingTimeId(entry.id); setEditTimeDesc(entry.description); setEditTimeMinutes(String(entry.minutes)); }}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Pencil className="h-3.5 w-3.5" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteTimeEntry.mutate({ id: entry.id })}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Trust Tab */}
        <TabsContent value="trust" className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Trust transactions for this matter.</p>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/trust?matterId=${id}`}>
                <Scale className="h-3.5 w-3.5 mr-1.5" />
                Manage in Trust
              </Link>
            </Button>
          </div>

          {!trustTxns || trustTxns.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-12 text-center">
              <Scale className="mb-3 h-7 w-7 text-muted-foreground" />
              <p className="text-sm font-medium">No trust transactions</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Record trust receipts and disbursements from the{" "}
                <Link href="/trust" className="underline underline-offset-4 hover:text-foreground">Trust page</Link>.
              </p>
            </div>
          ) : (
            <>
              {/* Balance for this matter */}
              {(() => {
                const balance = trustTxns.reduce((s, t) => s + t.amount, 0);
                return (
                  <div className={`rounded-lg border px-4 py-3 flex items-center justify-between ${balance < 0 ? "border-destructive/30 bg-destructive/5" : "border-green-200 bg-green-50/30"}`}>
                    <span className="text-sm font-medium">Matter Trust Balance</span>
                    <span className={`text-lg font-bold ${balance < 0 ? "text-destructive" : "text-green-700"}`}>
                      ${Math.abs(balance / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      {balance < 0 ? " (deficit)" : ""}
                    </span>
                  </div>
                );
              })()}

              <div className="space-y-1.5">
                {trustTxns.map((t) => {
                  const isReceipt = t.amount >= 0;
                  return (
                    <Card key={t.id}>
                      <CardContent className="flex items-center justify-between p-3">
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className={`flex-shrink-0 rounded-full p-1.5 ${isReceipt ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {isReceipt
                              ? <ArrowUpRight className="h-3 w-3" />
                              : <ArrowDownRight className="h-3 w-3" />
                            }
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium truncate">{t.description}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(t.transactionDate).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })}
                              {t.referenceNumber && ` · ${t.referenceNumber}`}
                            </p>
                          </div>
                        </div>
                        <span className={`text-sm font-semibold flex-shrink-0 ml-3 ${isReceipt ? "text-green-700" : "text-red-600"}`}>
                          {isReceipt ? "+" : "−"}${Math.abs(t.amount / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          )}
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="mt-4">
          {!timeline || timeline.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground text-sm">
              No activity recorded yet for this matter.
            </div>
          ) : (
            <div className="relative pl-4">
              <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />
              <div className="space-y-3">
                {timeline.map((event) => {
                  const dateStr = new Date(event.date).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" });
                  if (event.kind === "document") {
                    return (
                      <div key={`doc-${event.id}`} className="relative flex items-start gap-3">
                        <div className="flex-shrink-0 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background mt-0.5" />
                        <div className="min-w-0 flex-1 pb-1">
                          <p className="text-sm font-medium">{event.title ?? "Untitled document"}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-muted-foreground">{dateStr}</span>
                            <Badge variant="outline" className="text-xs capitalize">{event.docType.replace("_", " ")}</Badge>
                            <Badge variant={event.status === "completed" ? "secondary" : "outline"} className="text-xs capitalize">{event.status}</Badge>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  if (event.kind === "time") {
                    const hrs = (event.minutes / 60).toFixed(1);
                    return (
                      <div key={`time-${event.id}`} className="relative flex items-start gap-3">
                        <div className="flex-shrink-0 h-3.5 w-3.5 rounded-full border-2 border-blue-400 bg-background mt-0.5" />
                        <div className="min-w-0 flex-1 pb-1">
                          <p className="text-sm font-medium">{event.description}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-muted-foreground">{dateStr}</span>
                            <Badge variant="outline" className="text-xs">{hrs}h time entry</Badge>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  if (event.kind === "trust") {
                    const isReceipt = event.amount > 0;
                    return (
                      <div key={`trust-${event.id}`} className="relative flex items-start gap-3">
                        <div className={`flex-shrink-0 h-3.5 w-3.5 rounded-full border-2 ${isReceipt ? "border-green-500" : "border-red-400"} bg-background mt-0.5`} />
                        <div className="min-w-0 flex-1 pb-1">
                          <p className="text-sm font-medium">{event.description}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-muted-foreground">{dateStr}</span>
                            <Badge variant="outline" className={`text-xs ${isReceipt ? "text-green-700" : "text-red-600"}`}>
                              {isReceipt ? "+" : "−"}${Math.abs(event.amount / 100).toFixed(2)} trust
                            </Badge>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  if (event.kind === "entity") {
                    return (
                      <div key={`entity-${event.id}`} className="relative flex items-start gap-3">
                        <div className={`flex-shrink-0 h-3.5 w-3.5 rounded-full border-2 ${event.resolved ? "border-green-500 bg-green-500" : "border-orange-400"} mt-0.5`} />
                        <div className="min-w-0 flex-1 pb-1">
                          <p className={`text-sm font-medium ${event.resolved ? "line-through text-muted-foreground" : ""}`}>{event.value}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-muted-foreground">{dateStr}</span>
                            <Badge variant="outline" className="text-xs capitalize">{event.type.replace("_", " ")}</Badge>
                            {event.resolved && <Badge variant="secondary" className="text-xs">Resolved</Badge>}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Matter close workflow dialog */}
      <Dialog open={closeDialogOpen} onOpenChange={setCloseDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Matter closed — what&apos;s next?</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <p className="text-sm text-muted-foreground">
              <strong>{matter.title}</strong> has been marked as closed. Consider completing these final steps:
            </p>
            <div className="space-y-2">
              <button
                className="flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors hover:bg-muted/50"
                onClick={() => {
                  setCloseDialogOpen(false);
                  generateBrief.mutate({ id });
                }}
                disabled={generateBrief.isPending}
              >
                <Sparkles className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Generate AI closing summary</p>
                  <p className="text-xs text-muted-foreground">Create a brief summary of what was accomplished — useful for records and future reference.</p>
                </div>
              </button>
              <button
                className="flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors hover:bg-muted/50"
                onClick={() => {
                  setCloseDialogOpen(false);
                  setInvoiceOpen(true);
                }}
              >
                <Receipt className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Generate final invoice</p>
                  <p className="text-xs text-muted-foreground">Bill for all unbilled time and document work on this matter.</p>
                </div>
              </button>
              <button
                className="flex w-full items-start gap-3 rounded-lg border border-dashed px-4 py-3 text-left text-sm transition-colors hover:bg-muted/50"
                onClick={() => setCloseDialogOpen(false)}
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <div>
                  <p className="font-medium text-muted-foreground">Nothing needed — just close it</p>
                </div>
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
