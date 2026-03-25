"use client";

import { use, useState } from "react";
import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Loader2, ArrowLeft, Printer, Send, CheckCircle2, Pencil, Check, X, Plus, Trash2 } from "lucide-react";

interface InvoicePrintPageProps {
  params: Promise<{ id: string }>;
}

const statusVariants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  draft: "secondary",
  sent: "outline",
  paid: "default",
  overdue: "destructive",
};

type LineItem = { description: string; hours: number; rate: number; amount: number };

function fmtCAD(cents: number) {
  return (cents / 100).toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function InvoicePrintPage({ params }: InvoicePrintPageProps) {
  const { id } = use(params);
  const utils = trpc.useUtils();
  const { data: invoice, isLoading } = trpc.invoices.get.useQuery({ id });
  const { data: settings } = trpc.users.getSettings.useQuery();
  const sendInvoice = trpc.invoices.send.useMutation({
    onSuccess: () => utils.invoices.get.invalidate({ id }),
  });
  const updateStatus = trpc.invoices.updateStatus.useMutation({
    onSuccess: () => utils.invoices.get.invalidate({ id }),
  });
  const updateLineItems = trpc.invoices.updateLineItems.useMutation({
    onSuccess: () => {
      utils.invoices.get.invalidate({ id });
      setEditingIdx(null);
    },
  });

  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [editDesc, setEditDesc] = useState("");
  const [editHours, setEditHours] = useState("");
  const [editRate, setEditRate] = useState("");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!invoice) {
    return <p className="text-sm text-destructive">Invoice not found.</p>;
  }

  const lineItems = (invoice.lineItems ?? []) as LineItem[];
  const isDraft = invoice.status === "draft";

  function startEdit(i: number) {
    const item = lineItems[i]!;
    setEditDesc(item.description);
    setEditHours(String(item.hours));
    setEditRate(String(item.rate));
    setEditingIdx(i);
  }

  function saveEdit(i: number) {
    const hours = parseFloat(editHours);
    const rate = parseFloat(editRate);
    if (!editDesc.trim() || isNaN(hours) || isNaN(rate)) return;
    const amount = Math.round(hours * rate * 100);
    const updated = lineItems.map((item, idx) =>
      idx === i ? { description: editDesc.trim(), hours, rate, amount } : item
    );
    updateLineItems.mutate({ id, lineItems: updated });
  }

  function deleteItem(i: number) {
    const updated = lineItems.filter((_, idx) => idx !== i);
    updateLineItems.mutate({ id, lineItems: updated });
  }

  function addItem() {
    const defaultRate = lineItems[0]?.rate ?? settings?.hourlyRate ?? 400;
    const updated = [...lineItems, { description: "Professional services", hours: 1, rate: defaultRate, amount: Math.round(defaultRate * 100) }];
    updateLineItems.mutate({ id, lineItems: updated }, {
      onSuccess: () => {
        utils.invoices.get.invalidate({ id }).then(() => {
          setEditingIdx(updated.length - 1);
          setEditDesc("Professional services");
          setEditHours("1");
          setEditRate(String(defaultRate));
        });
      },
    });
  }

  return (
    <div className="space-y-4 max-w-3xl">
      {/* Screen-only controls */}
      <div className="flex items-center justify-between print:hidden">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/billing">
            <ArrowLeft className="h-3.5 w-3.5 mr-1" />
            Back to Billing
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          {invoice.status === "draft" && invoice.clientEmail && (
            <Button
              size="sm"
              disabled={sendInvoice.isPending}
              onClick={() => sendInvoice.mutate({ id })}
            >
              {sendInvoice.isPending ? (
                <><Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />Sending…</>
              ) : (
                <><Send className="mr-1.5 h-3.5 w-3.5" />Send to {invoice.clientName}</>
              )}
            </Button>
          )}
          {invoice.status === "sent" && (
            <Button
              size="sm"
              variant="outline"
              disabled={updateStatus.isPending}
              onClick={() => updateStatus.mutate({ id, status: "paid" })}
            >
              <CheckCircle2 className="mr-1.5 h-3.5 w-3.5 text-green-600" />
              Mark as Paid
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            <Printer className="h-3.5 w-3.5 mr-1.5" />
            Print / Save PDF
          </Button>
        </div>
      </div>

      {/* Invoice */}
      <div className="rounded-lg border bg-card p-8 space-y-8 print:border-0 print:shadow-none print:p-0">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{settings?.firmName ?? settings?.name ?? "Law Practice"}</h1>
          </div>
          <div className="text-right">
            <p className="text-2xl font-light text-muted-foreground">INVOICE</p>
            <p className="text-sm font-semibold mt-1">{invoice.invoiceNumber}</p>
            <Badge variant={statusVariants[invoice.status] ?? "secondary"} className="mt-1 text-xs capitalize">
              {invoice.status}
            </Badge>
          </div>
        </div>

        {/* Bill To / Dates */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Bill To</p>
            <p className="font-semibold">{invoice.clientName}</p>
            {invoice.clientCompany && <p className="text-sm text-muted-foreground">{invoice.clientCompany}</p>}
            {invoice.clientEmail && <p className="text-sm text-muted-foreground">{invoice.clientEmail}</p>}
            {invoice.matterTitle && (
              <p className="text-sm text-muted-foreground mt-1">Re: {invoice.matterTitle}</p>
            )}
          </div>
          <div className="text-right">
            <div className="space-y-1">
              <div className="flex justify-between gap-8">
                <span className="text-xs text-muted-foreground">Issue Date</span>
                <span className="text-sm">{new Date(invoice.issueDate).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</span>
              </div>
              {invoice.dueDate && (
                <div className="flex justify-between gap-8">
                  <span className="text-xs text-muted-foreground">Due Date</span>
                  <span className="text-sm font-medium">{new Date(invoice.dueDate).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Line Items */}
        <div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">Description</th>
                <th className="text-right py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">Hours</th>
                <th className="text-right py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">Rate</th>
                <th className="text-right py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">Amount</th>
              </tr>
            </thead>
            <tbody>
              {lineItems.map((item, i) => (
                editingIdx === i ? (
                  <tr key={i} className="border-b border-muted/50 bg-muted/30 print:hidden">
                    <td className="py-2 pr-2">
                      <Input
                        value={editDesc}
                        onChange={e => setEditDesc(e.target.value)}
                        className="h-7 text-sm"
                        autoFocus
                        onKeyDown={e => { if (e.key === "Enter") saveEdit(i); if (e.key === "Escape") setEditingIdx(null); }}
                      />
                    </td>
                    <td className="py-2 px-1">
                      <Input
                        value={editHours}
                        onChange={e => setEditHours(e.target.value)}
                        className="h-7 text-sm text-right w-20 ml-auto"
                        type="number" min="0" step="0.25"
                      />
                    </td>
                    <td className="py-2 px-1">
                      <Input
                        value={editRate}
                        onChange={e => setEditRate(e.target.value)}
                        className="h-7 text-sm text-right w-24 ml-auto"
                        type="number" min="0" step="1"
                      />
                    </td>
                    <td className="py-2 pl-1">
                      <div className="flex items-center justify-end gap-1">
                        <span className="text-sm font-medium text-muted-foreground min-w-[4rem] text-right">
                          ${(Math.round(parseFloat(editHours || "0") * parseFloat(editRate || "0") * 100) / 100).toFixed(2)}
                        </span>
                        <button onClick={() => saveEdit(i)} className="text-green-600 hover:text-green-700 ml-1" disabled={updateLineItems.isPending}>
                          <Check className="h-4 w-4" />
                        </button>
                        <button onClick={() => setEditingIdx(null)} className="text-muted-foreground hover:text-foreground">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr key={i} className={`border-b border-muted/50 ${isDraft ? "group" : ""}`}>
                    <td className="py-3 pr-4">
                      {item.description}
                    </td>
                    <td className="py-3 text-right text-muted-foreground">{item.hours.toFixed(2)}</td>
                    <td className="py-3 text-right text-muted-foreground">${item.rate.toFixed(2)}/hr</td>
                    <td className="py-3 text-right font-medium">
                      <div className="flex items-center justify-end gap-1">
                        ${(item.amount / 100).toFixed(2)}
                        {isDraft && (
                          <>
                            <button onClick={() => startEdit(i)} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground ml-1 print:hidden">
                              <Pencil className="h-3 w-3" />
                            </button>
                            <button onClick={() => deleteItem(i)} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive print:hidden">
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              ))}
              {isDraft && editingIdx === null && (
                <tr className="print:hidden">
                  <td colSpan={4} className="pt-2 pb-1">
                    <button
                      onClick={addItem}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      disabled={updateLineItems.isPending}
                    >
                      <Plus className="h-3 w-3" />
                      Add line item
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              {(invoice.hstRate ?? 0) > 0 && (
                <>
                  <tr>
                    <td colSpan={3} className="pt-3 pb-1 text-right text-sm text-muted-foreground pr-4">Subtotal</td>
                    <td className="pt-3 pb-1 text-right text-sm text-muted-foreground">
                      ${fmtCAD(invoice.totalAmount - (invoice.hstAmount ?? 0))}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="py-1 text-right text-sm text-muted-foreground pr-4">HST ({invoice.hstRate}%)</td>
                    <td className="py-1 text-right text-sm text-muted-foreground">${fmtCAD(invoice.hstAmount ?? 0)}</td>
                  </tr>
                </>
              )}
              <tr>
                <td colSpan={3} className="py-4 text-right font-semibold pr-4">Total (CAD)</td>
                <td className="py-4 text-right text-xl font-bold">
                  ${fmtCAD(invoice.totalAmount)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Notes */}
        {invoice.notes && (
          <div className="border-t pt-6">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Notes</p>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{invoice.notes}</p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Thank you for your business. Please make payment by the due date.
          </p>
          {invoice.paidAt && (
            <p className="text-xs text-green-600 font-medium mt-1">
              Paid on {new Date(invoice.paidAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
