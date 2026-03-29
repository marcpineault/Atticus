"use client";

import Link from "next/link";
import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Download, Clock, FileText, Plus, Send, CheckCircle2, Trash2, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const statusVariants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  draft: "secondary",
  sent: "outline",
  paid: "default",
  overdue: "destructive",
};

function exportCsv(
  rows: { clientName: string | null; clientCompany: string | null; totalBillableMinutes: number; documentCount: number }[],
  hourlyRate: number
) {
  const lines = [
    ["Client", "Company", "Documents", "Billable Hours", "Estimated Value (CAD)"].join(","),
    ...rows.map((r) => [
      JSON.stringify(r.clientName ?? "Unassigned"),
      JSON.stringify(r.clientCompany ?? ""),
      r.documentCount,
      (r.totalBillableMinutes / 60).toFixed(2),
      ((r.totalBillableMinutes / 60) * hourlyRate).toFixed(2),
    ].join(",")),
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `atticus-billing-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function GenerateInvoiceDialog({ onSuccess }: { onSuccess: () => void }) {
  const [open, setOpen] = useState(false);
  const [clientId, setClientId] = useState("");
  const [matterId, setMatterId] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [applyHst, setApplyHst] = useState(true);

  const { data: clients } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery(
    { clientId },
    { enabled: !!clientId }
  );

  const generate = trpc.invoices.generate.useMutation({
    onSuccess: () => {
      setOpen(false);
      setClientId(""); setMatterId(""); setDueDate(""); setNotes(""); setApplyHst(true);
      onSuccess();
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-1.5 h-3.5 w-3.5" />
          Generate Invoice
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Invoice</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Client *</Label>
            <Select value={clientId} onValueChange={(v) => { setClientId(v); setMatterId(""); }}>
              <SelectTrigger>
                <SelectValue placeholder="Select client…" />
              </SelectTrigger>
              <SelectContent>
                {clients?.map(c => (
                  <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {clientId && matters && matters.length > 0 && (
            <div className="space-y-1.5">
              <Label>Matter (optional)</Label>
              <Select value={matterId} onValueChange={(v) => setMatterId(v === "all" ? "" : v)}>
                <SelectTrigger>
                  <SelectValue placeholder="All matters" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All matters</SelectItem>
                  {matters.map(m => (
                    <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-1.5">
            <Label>Due Date (optional)</Label>
            <Input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <Label>Notes (optional)</Label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Payment terms, trust account details, etc."
              className="resize-none"
              rows={3}
            />
          </div>

          <div className="flex items-center justify-between rounded-md border px-3 py-2.5">
            <div>
              <p className="text-sm font-medium">Apply Ontario HST (13%)</p>
              <p className="text-xs text-muted-foreground">Required for most legal services in Ontario</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={applyHst}
              onClick={() => setApplyHst(v => !v)}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${applyHst ? "bg-primary" : "bg-muted"}`}
            >
              <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${applyHst ? "translate-x-4" : "translate-x-0.5"}`} />
            </button>
          </div>

          <p className="text-xs text-muted-foreground">
            Line items will be generated from billable time in processed documents and manually logged time entries.
          </p>

          <Button
            className="w-full"
            disabled={!clientId || generate.isPending}
            onClick={() => generate.mutate({
              clientId,
              matterId: matterId || undefined,
              dueDate: dueDate || undefined,
              notes: notes || undefined,
              hstRate: applyHst ? 13 : 0,
            })}
          >
            {generate.isPending ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Generating…</>
            ) : (
              "Generate Invoice"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function exportTimeEntriesCsv(
  entries: Array<{ entryDate: Date | string; description: string; clientName: string | null; matterTitle: string | null; minutes: number; billedAt: Date | string | null }>,
  hourlyRate: number
) {
  const lines = [
    ["Date", "Description", "Client", "Matter", "Hours", "Value (CAD)", "Status"].join(","),
    ...entries.map(e => [
      new Date(e.entryDate).toLocaleDateString("en-CA"),
      JSON.stringify(e.description),
      JSON.stringify(e.clientName ?? ""),
      JSON.stringify(e.matterTitle ?? ""),
      (e.minutes / 60).toFixed(2),
      ((e.minutes / 60) * hourlyRate).toFixed(2),
      e.billedAt ? "Billed" : "Unbilled",
    ].join(",")),
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `atticus-time-log-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function BillingPage() {
  const [tab, setTab] = useState<"summary" | "invoices" | "timelog">("summary");
  const utils = trpc.useUtils();

  const { data: report, isLoading } = trpc.documents.getBillingReport.useQuery();
  const { data: settings } = trpc.users.getSettings.useQuery();
  const { data: invoiceList, isLoading: invoicesLoading } = trpc.invoices.list.useQuery();
  const { data: allTimeEntries } = trpc.timeEntries.list.useQuery();

  const updateStatus = trpc.invoices.updateStatus.useMutation({
    onSuccess: () => utils.invoices.list.invalidate(),
  });
  const sendInvoice = trpc.invoices.send.useMutation({
    onSuccess: () => utils.invoices.list.invalidate(),
  });
  const deleteInvoice = trpc.invoices.delete.useMutation({
    onSuccess: () => utils.invoices.list.invalidate(),
  });

  const hourlyRate = settings?.hourlyRate ?? 400;
  // Separate unbilled vs total time entries
  const unbilledEntries = (allTimeEntries ?? []).filter(e => !e.billedAt);
  const unbilledByClient = new Map<string | null, number>();
  const timeByClient = new Map<string | null, number>();
  for (const entry of allTimeEntries ?? []) {
    const key = entry.clientId ?? null;
    timeByClient.set(key, (timeByClient.get(key) ?? 0) + entry.minutes);
  }
  for (const entry of unbilledEntries) {
    const key = entry.clientId ?? null;
    unbilledByClient.set(key, (unbilledByClient.get(key) ?? 0) + entry.minutes);
  }
  const combinedReport = report?.map(r => ({
    ...r,
    totalBillableMinutes: r.totalBillableMinutes + (timeByClient.get(r.clientId ?? null) ?? 0),
    unbilledManualMinutes: unbilledByClient.get(r.clientId ?? null) ?? 0,
  })) ?? [];
  // Add clients that only have manual time entries (not in doc report)
  const reportClientIds = new Set(report?.map(r => r.clientId ?? null) ?? []);
  Array.from(timeByClient.entries()).forEach(([clientId, mins]) => {
    if (!reportClientIds.has(clientId)) {
      combinedReport.push({
        clientId,
        clientName: null,
        clientCompany: null,
        totalBillableMinutes: mins,
        documentCount: 0,
        unbilledManualMinutes: unbilledByClient.get(clientId) ?? 0,
      });
    }
  });
  const totalMinutes = combinedReport.reduce((s, r) => s + r.totalBillableMinutes, 0);
  const totalHours = (totalMinutes / 60).toFixed(1);
  const totalDocs = report?.reduce((s, r) => s + r.documentCount, 0) ?? 0;
  const unbilledManualMinutes = unbilledEntries.reduce((s, e) => s + e.minutes, 0);
  const unbilledHours = (unbilledManualMinutes / 60).toFixed(1);
  const unbilledValue = ((unbilledManualMinutes / 60) * hourlyRate).toFixed(0);

  const totalInvoiced = invoiceList?.reduce((s, i) => s + i.totalAmount, 0) ?? 0;
  const paidAmount = invoiceList?.filter(i => i.status === "paid").reduce((s, i) => s + i.totalAmount, 0) ?? 0;
  const outstandingAmount = invoiceList?.filter(i => i.status === "sent" || i.status === "overdue").reduce((s, i) => s + i.totalAmount, 0) ?? 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Billing</h1>
          <p className="text-muted-foreground">Time tracking and client invoices.</p>
        </div>
        <div className="flex items-center gap-2">
          {tab === "summary" && combinedReport.length > 0 && (
            <Button variant="outline" size="sm" onClick={() => exportCsv(combinedReport, hourlyRate)}>
              <Download className="mr-1.5 h-3.5 w-3.5" />
              Export CSV
            </Button>
          )}
          {tab === "timelog" && allTimeEntries && allTimeEntries.length > 0 && (
            <Button variant="outline" size="sm" onClick={() => exportTimeEntriesCsv(allTimeEntries, hourlyRate)}>
              <Download className="mr-1.5 h-3.5 w-3.5" />
              Export CSV
            </Button>
          )}
          {tab === "invoices" && (
            <GenerateInvoiceDialog onSuccess={() => utils.invoices.list.invalidate()} />
          )}
        </div>
      </div>

      {/* Tab toggle */}
      <div className="flex gap-1 rounded-lg border p-1 w-fit">
        <button
          onClick={() => setTab("summary")}
          className={`rounded px-4 py-1.5 text-sm font-medium transition-colors ${tab === "summary" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          Time Summary
        </button>
        <button
          onClick={() => setTab("invoices")}
          className={`rounded px-4 py-1.5 text-sm font-medium transition-colors ${tab === "invoices" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          Invoices
          {invoiceList && invoiceList.length > 0 && (
            <span className="ml-1.5 rounded-full bg-muted px-1.5 py-0.5 text-xs">{invoiceList.length}</span>
          )}
        </button>
        <button
          onClick={() => setTab("timelog")}
          className={`rounded px-4 py-1.5 text-sm font-medium transition-colors ${tab === "timelog" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          Time Log
        </button>
      </div>

      {tab === "summary" && (
        <>
          {isLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-lg border p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-3 w-56" />
                  <Skeleton className="h-1.5 w-full rounded-full" />
                </div>
              ))}
            </div>
          ) : combinedReport.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
              <Clock className="mb-3 h-8 w-8 text-muted-foreground" />
              <p className="text-sm font-medium">No billable time yet</p>
              <p className="mt-1 text-xs text-muted-foreground">Upload and process documents or log time manually to start tracking.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Tracked Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{totalHours}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{totalDocs} docs + manual entries</p>
                  </CardContent>
                </Card>
                <Card className={unbilledManualMinutes > 0 ? "border-amber-200 bg-amber-50/30" : ""}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Unbilled Manual Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-amber-600">{unbilledHours}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">${Number(unbilledValue).toLocaleString()} pending invoice</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Outstanding Invoices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">${(outstandingAmount / 100).toLocaleString()}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">sent &amp; overdue</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Invoiced</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">${(totalInvoiced / 100).toLocaleString()}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">${(paidAmount / 100).toLocaleString()} paid</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="mb-3 text-base font-semibold">By Client</h2>
                <div className="space-y-2">
                  {combinedReport.map((row, i) => {
                    const hours = (row.totalBillableMinutes / 60).toFixed(1);
                    const value = ((row.totalBillableMinutes / 60) * hourlyRate).toFixed(0);
                    const pct = totalMinutes > 0 ? (row.totalBillableMinutes / totalMinutes) * 100 : 0;

                    return (
                      <Card key={row.clientId ?? `__none__-${i}`}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                {row.clientId ? (
                                  <Link href={`/clients/${row.clientId}`} className="text-sm font-medium hover:underline">
                                    {row.clientName ?? "Unknown"}
                                  </Link>
                                ) : (
                                  <span className="text-sm font-medium text-muted-foreground">Unassigned</span>
                                )}
                                {row.clientCompany && (
                                  <span className="text-xs text-muted-foreground">— {row.clientCompany}</span>
                                )}
                              </div>
                              <div className="mt-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                                <div className="h-full bg-primary/60" style={{ width: `${pct}%` }} />
                              </div>
                            </div>
                            <div className="flex items-center gap-6 flex-shrink-0 text-right">
                              <div>
                                <p className="flex items-center gap-1 text-xs text-muted-foreground justify-end">
                                  <FileText className="h-3 w-3" />
                                  {row.documentCount} doc{row.documentCount !== 1 ? "s" : ""}
                                </p>
                              </div>
                              <div>
                                <p className="flex items-center gap-1 text-sm font-semibold justify-end">
                                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                  {hours} hrs
                                </p>
                                <p className="text-xs text-muted-foreground">${Number(value).toLocaleString()}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {settings?.hourlyRate == null && (
                <p className="text-xs text-muted-foreground">
                  Set your{" "}
                  <Link href="/settings" className="underline underline-offset-4">hourly rate</Link>
                  {" "}in settings to see accurate value estimates.
                </p>
              )}
            </>
          )}
        </>
      )}

      {tab === "timelog" && (
        <>
          {!allTimeEntries || allTimeEntries.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
              <Clock className="mb-3 h-8 w-8 text-muted-foreground" />
              <p className="text-sm font-medium">No time entries yet</p>
              <p className="mt-1 text-xs text-muted-foreground">Log time from any matter page to start tracking.</p>
            </div>
          ) : (
            <div className="rounded-lg border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground">Date</th>
                    <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground">Description</th>
                    <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground">Client / Matter</th>
                    <th className="px-4 py-2.5 text-right text-xs font-medium text-muted-foreground">Hours</th>
                    <th className="px-4 py-2.5 text-right text-xs font-medium text-muted-foreground">Value</th>
                    <th className="px-4 py-2.5 text-right text-xs font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allTimeEntries.map((entry, i) => (
                    <tr key={entry.id} className={`border-b last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                      <td className="px-4 py-2.5 text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(entry.entryDate).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
                      </td>
                      <td className="px-4 py-2.5 text-sm max-w-xs">
                        <span className="line-clamp-1">{entry.description}</span>
                      </td>
                      <td className="px-4 py-2.5 text-xs text-muted-foreground">
                        {entry.clientName && (
                          <Link href={`/clients/${entry.clientId}`} className="hover:underline hover:text-foreground">
                            {entry.clientName}
                          </Link>
                        )}
                        {entry.matterTitle && (
                          <span className="text-muted-foreground/60"> / {entry.matterTitle}</span>
                        )}
                        {!entry.clientName && !entry.matterTitle && (
                          <span className="text-muted-foreground/40">—</span>
                        )}
                      </td>
                      <td className="px-4 py-2.5 text-right text-sm font-medium tabular-nums">
                        {(entry.minutes / 60).toFixed(2)}
                      </td>
                      <td className="px-4 py-2.5 text-right text-xs text-muted-foreground tabular-nums">
                        ${((entry.minutes / 60) * hourlyRate).toFixed(0)}
                      </td>
                      <td className="px-4 py-2.5 text-right">
                        {entry.billedAt ? (
                          <span className="text-xs text-muted-foreground">Billed</span>
                        ) : (
                          <span className="text-xs text-amber-600 font-medium">Unbilled</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-muted/30 border-t">
                    <td colSpan={3} className="px-4 py-2.5 text-xs font-medium">
                      {allTimeEntries.length} entries
                    </td>
                    <td className="px-4 py-2.5 text-right text-sm font-bold tabular-nums">
                      {(allTimeEntries.reduce((s, e) => s + e.minutes, 0) / 60).toFixed(2)}
                    </td>
                    <td className="px-4 py-2.5 text-right text-xs font-medium tabular-nums">
                      ${(allTimeEntries.reduce((s, e) => s + (e.minutes / 60) * hourlyRate, 0)).toFixed(0)}
                    </td>
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </>
      )}

      {tab === "invoices" && (
        <>
          {/* Invoice stats */}
          {invoiceList && invoiceList.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Invoiced</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">${(totalInvoiced / 100).toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Outstanding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-orange-500">${(outstandingAmount / 100).toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Collected</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600">${(paidAmount / 100).toLocaleString()}</p>
                </CardContent>
              </Card>
            </div>
          )}

          {invoicesLoading ? (
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 rounded-lg border px-4 py-3">
                  <div className="flex-1 space-y-1.5">
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                  <Skeleton className="h-4 w-20 tabular-nums" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
              ))}
            </div>
          ) : !invoiceList || invoiceList.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
              <FileText className="mb-3 h-8 w-8 text-muted-foreground" />
              <p className="text-sm font-medium">No invoices yet</p>
              <p className="mt-1 text-xs text-muted-foreground">Generate your first invoice from billable hours.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {invoiceList.map((inv) => (
                <Card key={inv.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">{inv.invoiceNumber}</span>
                        <Badge variant={statusVariants[inv.status] ?? "secondary"} className="text-xs">
                          {inv.status}
                        </Badge>
                      </div>
                      <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                        {inv.clientName && (
                          <Link href={`/clients/${inv.clientId}`} className="hover:underline hover:text-foreground">
                            {inv.clientName}
                          </Link>
                        )}
                        {inv.matterTitle && <span>· {inv.matterTitle}</span>}
                        <span>· {new Date(inv.issueDate).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })}</span>
                        {inv.dueDate && (
                          <span className={inv.status === "overdue" ? "text-destructive font-medium" : ""}>
                            · Due {new Date(inv.dueDate).toLocaleDateString("en-CA", { month: "short", day: "numeric" })}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-sm font-semibold">${(inv.totalAmount / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-muted-foreground hover:text-foreground"
                          title="View / Print Invoice"
                          asChild
                        >
                          <Link href={`/billing/invoice/${inv.id}`}>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                        {inv.status === "draft" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 text-xs"
                            disabled={sendInvoice.isPending}
                            onClick={() => sendInvoice.mutate({ id: inv.id })}
                          >
                            {sendInvoice.isPending ? (
                              <Loader2 className="h-3 w-3 animate-spin" />
                            ) : (
                              <><Send className="h-3 w-3 mr-1" />Send</>
                            )}
                          </Button>
                        )}
                        {inv.status === "sent" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 text-xs text-green-600 hover:text-green-700"
                            onClick={() => updateStatus.mutate({ id: inv.id, status: "paid" })}
                          >
                            <CheckCircle2 className="h-3 w-3 mr-1" />Mark Paid
                          </Button>
                        )}
                        {inv.status !== "paid" && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-muted-foreground hover:text-destructive"
                            onClick={() => { if (confirm("Delete invoice?")) deleteInvoice.mutate({ id: inv.id }); }}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
