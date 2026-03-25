"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Loader2, ArrowDownLeft, ArrowUpRight, Trash2, Scale, Download } from "lucide-react";

const typeConfig = {
  receipt: { label: "Receipt", icon: ArrowDownLeft, color: "text-green-600", sign: "+" },
  disbursement: { label: "Disbursement", icon: ArrowUpRight, color: "text-destructive", sign: "-" },
  transfer: { label: "Transfer", icon: ArrowUpRight, color: "text-muted-foreground", sign: "±" },
};

function AddTransactionDialog({ onSuccess }: { onSuccess: () => void }) {
  const [open, setOpen] = useState(false);
  const [clientId, setClientId] = useState("");
  const [matterId, setMatterId] = useState("");
  const [type, setType] = useState<"receipt" | "disbursement" | "transfer">("receipt");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [refNum, setRefNum] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { data: clients } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery(
    { clientId: clientId || undefined },
    { enabled: !!clientId }
  );

  const create = trpc.trust.create.useMutation({
    onSuccess: () => {
      setOpen(false);
      resetForm();
      onSuccess();
    },
    onError: (err) => setError(err.message),
  });

  function resetForm() {
    setClientId(""); setMatterId(""); setType("receipt");
    setAmount(""); setDescription(""); setDate(new Date().toISOString().slice(0, 10));
    setRefNum(""); setError(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const cents = Math.round(parseFloat(amount) * 100);
    if (!clientId) return setError("Please select a client.");
    if (isNaN(cents) || cents <= 0) return setError("Please enter a valid amount.");
    if (!description.trim()) return setError("Description is required.");
    create.mutate({
      clientId,
      matterId: matterId || undefined,
      type,
      amount: cents,
      description: description.trim(),
      transactionDate: date,
      referenceNumber: refNum.trim() || undefined,
    });
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) resetForm(); setOpen(v); }}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4" />
          Add Entry
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Trust Entry</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Client *</Label>
            <Select value={clientId} onValueChange={(v) => { setClientId(v); setMatterId(""); }}>
              <SelectTrigger><SelectValue placeholder="Select client" /></SelectTrigger>
              <SelectContent>
                {clients?.map(c => (
                  <SelectItem key={c.id} value={c.id}>{c.name}{c.company ? ` — ${c.company}` : ""}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {clientId && matters && matters.length > 0 && (
            <div className="space-y-2">
              <Label>Matter (optional)</Label>
              <Select value={matterId || "none"} onValueChange={(v) => setMatterId(v === "none" ? "" : v)}>
                <SelectTrigger><SelectValue placeholder="No specific matter" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No specific matter</SelectItem>
                  {matters.map(m => <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Type *</Label>
              <Select value={type} onValueChange={(v) => setType(v as typeof type)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="receipt">Receipt (in)</SelectItem>
                  <SelectItem value="disbursement">Disbursement (out)</SelectItem>
                  <SelectItem value="transfer">Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Amount (CAD) *</Label>
              <Input
                type="number"
                min="0.01"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Description *</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Retainer received, Title search disbursement…"
              rows={2}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Reference # (optional)</Label>
              <Input value={refNum} onChange={(e) => setRefNum(e.target.value)} placeholder="Cheque #, wire ref…" />
            </div>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" disabled={create.isPending}>
              {create.isPending ? "Saving…" : "Add Entry"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function TrustPageContent() {
  const searchParams = useSearchParams();
  const filterMatterId = searchParams.get("matterId") ?? undefined;
  const filterClientId = searchParams.get("clientId") ?? undefined;

  const utils = trpc.useUtils();
  const { data: transactions, isLoading } = trpc.trust.list.useQuery(
    filterMatterId || filterClientId ? { matterId: filterMatterId, clientId: filterClientId } : undefined
  );
  const { data: balances } = trpc.trust.balances.useQuery();
  const { data: totalData } = trpc.trust.totalBalance.useQuery();
  const deleteTransaction = trpc.trust.delete.useMutation({
    onSuccess: () => {
      utils.trust.list.invalidate();
      utils.trust.balances.invalidate();
      utils.trust.totalBalance.invalidate();
    },
  });

  function invalidateAll() {
    utils.trust.list.invalidate();
    utils.trust.balances.invalidate();
    utils.trust.totalBalance.invalidate();
  }

  function downloadCSV() {
    const rows = transactions ?? [];
    const headers = ["Date", "Type", "Client", "Matter", "Description", "Reference", "Amount (CAD)"];
    const escape = (val: string | null | undefined) => {
      const s = val ?? "";
      return s.includes(",") || s.includes('"') || s.includes("\n")
        ? `"${s.replace(/"/g, '""')}"`
        : s;
    };
    const lines = [
      headers.join(","),
      ...rows.map((tx) => [
        new Date(tx.transactionDate).toISOString().slice(0, 10),
        escape(tx.type),
        escape(tx.clientName),
        escape(tx.matterTitle),
        escape(tx.description),
        escape(tx.referenceNumber),
        (tx.amount / 100).toFixed(2),
      ].join(",")),
    ];
    const csv = lines.join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const today = new Date().toISOString().slice(0, 10);
    const a = document.createElement("a");
    a.href = url;
    a.download = `trust-ledger-${today}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const totalBalance = totalData?.total ?? 0;
  const negativeBalance = totalBalance < 0;

  function fmtCAD(cents: number) {
    const abs = Math.abs(cents / 100);
    const fmt = abs.toLocaleString("en-CA", { style: "currency", currency: "CAD" });
    return cents < 0 ? `-${fmt}` : fmt;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Trust Account</h1>
          <p className="text-muted-foreground">
            {filterMatterId || filterClientId
              ? "Showing filtered transactions — "
              : "Track client trust funds — receipts and disbursements."}
            {(filterMatterId || filterClientId) && (
              <a href="/trust" className="underline underline-offset-4 text-xs">Clear filter</a>
            )}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={downloadCSV}
            disabled={!transactions || transactions.length === 0}
          >
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <AddTransactionDialog onSuccess={invalidateAll} />
        </div>
      </div>

      {/* Total balance */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className={negativeBalance ? "border-destructive/40" : ""}>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-1.5">
              <Scale className="h-3.5 w-3.5" />
              Total Trust Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-bold ${negativeBalance ? "text-destructive" : "text-green-600"}`}>
              {fmtCAD(totalBalance)}
            </p>
            {negativeBalance && (
              <p className="text-xs text-destructive mt-0.5">⚠ Negative balance — review immediately</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Total Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{balances?.length ?? 0}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Total Entries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{transactions?.length ?? 0}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions">
        <TabsList>
          <TabsTrigger value="transactions">All Entries</TabsTrigger>
          <TabsTrigger value="balances">Client Balances</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="mt-4">
          {isLoading && (
            <div className="flex justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          )}
          {!isLoading && (!transactions || transactions.length === 0) && (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
              <Scale className="mb-3 h-8 w-8 text-muted-foreground" />
              <p className="text-sm font-medium">No trust entries yet</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Add your first trust receipt or disbursement to get started.
              </p>
            </div>
          )}
          {transactions && transactions.length > 0 && (
            <div className="space-y-2">
              {transactions.map((tx) => {
                const cfg = typeConfig[tx.type];
                const Icon = cfg.icon;
                return (
                  <Card key={tx.id}>
                    <CardContent className="flex items-center gap-3 p-4">
                      <Icon className={`h-4 w-4 flex-shrink-0 ${cfg.color}`} />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">{tx.description}</p>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          <span className="text-xs text-muted-foreground">
                            {new Date(tx.transactionDate).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                          {tx.clientName && (
                            <span className="text-xs text-muted-foreground">· {tx.clientName}</span>
                          )}
                          {tx.matterTitle && (
                            <span className="text-xs text-muted-foreground">· {tx.matterTitle}</span>
                          )}
                          {tx.referenceNumber && (
                            <span className="text-xs text-muted-foreground">· Ref: {tx.referenceNumber}</span>
                          )}
                        </div>
                      </div>
                      <div className="ml-3 flex items-center gap-3 flex-shrink-0">
                        <Badge variant="outline" className="text-xs capitalize">{cfg.label}</Badge>
                        <span className={`text-sm font-semibold tabular-nums ${cfg.color}`}>
                          {cfg.sign}{Math.abs(tx.amount / 100).toLocaleString("en-CA", { style: "currency", currency: "CAD" })}
                        </span>
                        <button
                          onClick={() => {
                            if (confirm("Delete this trust entry?")) {
                              deleteTransaction.mutate({ id: tx.id });
                            }
                          }}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>

        <TabsContent value="balances" className="mt-4">
          {!balances || balances.length === 0 ? (
            <div className="text-center py-12 text-sm text-muted-foreground">
              No client trust balances yet.
            </div>
          ) : (
            <div className="space-y-2">
              {balances.map((b) => {
                const bal = b.balance ?? 0;
                const isNeg = bal < 0;
                return (
                  <Card key={b.clientId} className={isNeg ? "border-destructive/30" : ""}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <p className="text-sm font-medium">{b.clientName ?? "Unknown"}</p>
                        {b.lastActivity && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Last activity {new Date(b.lastActivity).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-semibold tabular-nums ${isNeg ? "text-destructive" : "text-green-600"}`}>
                          {fmtCAD(bal)}
                        </p>
                        {isNeg && <p className="text-xs text-destructive">Negative balance</p>}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="rounded-lg border border-dashed p-4 text-xs text-muted-foreground space-y-1">
        <p className="font-medium">Law Society of Ontario — Trust Account Requirements</p>
        <p>All client funds held in trust must be maintained in a separate trust account. Negative client balances are prohibited. Ensure all entries comply with By-Law 9 requirements and maintain complete records for at least 10 years.</p>
      </div>
    </div>
  );
}

export default function TrustPage() {
  return (
    <Suspense>
      <TrustPageContent />
    </Suspense>
  );
}
