"use client";

import Link from "next/link";
import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AddDeadlineDialog } from "@/components/deadlines/add-deadline-dialog";
import { DeadlineCalendar } from "@/components/deadlines/deadline-calendar";
import { LimitationCalculator } from "@/components/deadlines/limitation-calculator";
import { Input } from "@/components/ui/input";
import { Loader2, Circle, CheckCircle2, Clock, Trash2, CalendarDays, List, Pencil, Check, X, SquareCheck, RefreshCw, Download } from "lucide-react";

function exportICS(items: Array<{ id: string; value: string; dueDate?: Date | string | null; clientName?: string | null; type: string }>) {
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Atticus//Deadlines//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Atticus Deadlines",
    "X-WR-TIMEZONE:America/Toronto",
  ];

  for (const item of items) {
    if (!item.dueDate) continue;
    const due = new Date(item.dueDate);
    const yyyymmdd = due.toISOString().slice(0, 10).replace(/-/g, "");
    const nextDay = new Date(due);
    nextDay.setDate(nextDay.getDate() + 1);
    const nextDayStr = nextDay.toISOString().slice(0, 10).replace(/-/g, "");
    const uid = `${item.id}@getatticus.ca`;
    const summary = (item.clientName ? `[${item.clientName}] ` : "") + item.value;
    lines.push(
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTART;VALUE=DATE:${yyyymmdd}`,
      `DTEND;VALUE=DATE:${nextDayStr}`,
      `SUMMARY:${summary.replace(/\n/g, "\\n")}`,
      `DESCRIPTION:${item.type === "deadline" ? "Deadline" : "Action Item"}`,
      "END:VEVENT",
    );
  }

  lines.push("END:VCALENDAR");
  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "atticus-deadlines.ics";
  a.click();
  URL.revokeObjectURL(url);
}

function exportDeadlineCSV(items: Array<{ value: string; type: string; dueDate?: Date | string | null; clientName?: string | null; documentTitle?: string | null; resolved?: boolean | null }>) {
  const escape = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const rows = [
    ["Description", "Type", "Due Date", "Client", "Source", "Status"].map(escape).join(","),
    ...items.map(i => [
      escape(i.value),
      escape(i.type === "deadline" ? "Deadline" : "Action Item"),
      escape(i.dueDate ? new Date(i.dueDate).toLocaleDateString("en-CA") : ""),
      escape(i.clientName ?? ""),
      escape(i.documentTitle ?? "Manual"),
      escape(i.resolved ? "Resolved" : "Open"),
    ].join(",")),
  ];
  const blob = new Blob([rows.join("\r\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "atticus-deadlines.csv"; a.click();
  URL.revokeObjectURL(url);
}

function getDueDateLabel(dueDate: Date | string | null): { label: string; urgent: boolean } {
  if (!dueDate) return { label: "", urgent: false };
  const d = new Date(dueDate);
  const now = new Date();
  const diffDays = Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return { label: `Overdue by ${Math.abs(diffDays)} day${Math.abs(diffDays) !== 1 ? "s" : ""}`, urgent: true };
  if (diffDays === 0) return { label: "Due today", urgent: true };
  if (diffDays === 1) return { label: "Due tomorrow", urgent: true };
  if (diffDays <= 7) return { label: `Due in ${diffDays} days`, urgent: true };
  return { label: `Due ${d.toLocaleDateString(undefined, { month: "short", day: "numeric" })}`, urgent: false };
}

export default function DeadlinesPage() {
  const [showResolved, setShowResolved] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "deadline" | "action_item">("all");
  const [view, setView] = useState<"list" | "calendar">("list");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [editDueDate, setEditDueDate] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const utils = trpc.useUtils();

  const { data: items, isLoading } = trpc.documents.listDeadlines.useQuery({ showResolved });
  const resolveEntity = trpc.documents.resolveEntity.useMutation({
    onSuccess: () => utils.documents.listDeadlines.invalidate(),
  });
  const updateDeadline = trpc.documents.updateDeadline.useMutation({
    onSuccess: () => {
      utils.documents.listDeadlines.invalidate();
      setEditingId(null);
    },
  });
  const deleteDeadline = trpc.documents.deleteDeadline.useMutation({
    onSuccess: () => utils.documents.listDeadlines.invalidate(),
  });
  const bulkResolve = trpc.documents.bulkResolve.useMutation({
    onSuccess: () => {
      utils.documents.listDeadlines.invalidate();
      setSelected(new Set());
    },
  });

  function toggleSelect(id: string) {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function selectAll() {
    const openIds = filtered.filter(i => !i.resolved).map(i => i.id);
    if (openIds.every(id => selected.has(id))) {
      setSelected(new Set());
    } else {
      setSelected(new Set(openIds));
    }
  }

  function startEdit(item: { id: string; value: string; dueDate?: Date | string | null }) {
    setEditingId(item.id);
    setEditValue(item.value);
    setEditDueDate(item.dueDate ? new Date(item.dueDate).toISOString().slice(0, 10) : "");
  }

  function saveEdit() {
    if (!editingId || !editValue.trim()) return;
    updateDeadline.mutate({
      id: editingId,
      value: editValue.trim(),
      dueDate: editDueDate ? new Date(editDueDate).toISOString() : null,
    });
  }

  const filtered = (items ?? []).filter(item =>
    filterType === "all" || item.type === filterType
  );

  // Group by client
  const grouped = filtered.reduce<Record<string, typeof filtered>>((acc, item) => {
    const key = item.clientId ?? "__none__";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  const deadlineCount = filtered.filter(i => i.type === "deadline" && !i.resolved).length;
  const actionCount = filtered.filter(i => i.type === "action_item" && !i.resolved).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Deadlines & Actions</h1>
          <p className="text-muted-foreground">
            All deadlines and action items extracted from your documents.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {deadlineCount > 0 && (
            <Badge variant="destructive">{deadlineCount} deadline{deadlineCount !== 1 ? "s" : ""}</Badge>
          )}
          {actionCount > 0 && (
            <Badge variant="outline">{actionCount} action{actionCount !== 1 ? "s" : ""}</Badge>
          )}
          <div className="flex items-center rounded-md border">
            <Button
              variant={view === "list" ? "secondary" : "ghost"}
              size="sm"
              className="rounded-r-none h-8 px-2"
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={view === "calendar" ? "secondary" : "ghost"}
              size="sm"
              className="rounded-l-none h-8 px-2"
              onClick={() => setView("calendar")}
            >
              <CalendarDays className="h-4 w-4" />
            </Button>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => exportDeadlineCSV(items ?? [])}
            disabled={!items || items.length === 0}
          >
            <Download className="h-3.5 w-3.5 mr-1" />
            CSV
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => exportICS((items ?? []).filter(i => !i.resolved && i.dueDate))}
            disabled={!items || items.filter(i => !i.resolved && i.dueDate).length === 0}
          >
            <Download className="h-3.5 w-3.5 mr-1" />
            .ics
          </Button>
          <LimitationCalculator />
          <AddDeadlineDialog />
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="flex rounded-md border">
          {(["all", "deadline", "action_item"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 text-xs font-medium transition-colors first:rounded-l-md last:rounded-r-md ${
                filterType === t
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "all" ? "All" : t === "deadline" ? "Deadlines" : "Action Items"}
            </button>
          ))}
        </div>
        <Button
          variant={showResolved ? "secondary" : "outline"}
          size="sm"
          onClick={() => setShowResolved(!showResolved)}
        >
          <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
          {showResolved ? "Hiding resolved" : "Show resolved"}
        </Button>
        {!showResolved && filtered.filter(i => !i.resolved).length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={selectAll}
          >
            <SquareCheck className="h-3.5 w-3.5 mr-1" />
            {selected.size > 0 ? "Deselect all" : "Select all"}
          </Button>
        )}
      </div>

      {/* Bulk action bar */}
      {selected.size > 0 && (
        <div className="flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2.5">
          <span className="text-sm font-medium">{selected.size} selected</span>
          <Button
            size="sm"
            onClick={() => bulkResolve.mutate({ ids: Array.from(selected), resolved: true })}
            disabled={bulkResolve.isPending}
            className="h-7"
          >
            {bulkResolve.isPending ? <Loader2 className="h-3.5 w-3.5 animate-spin mr-1" /> : <CheckCircle2 className="h-3.5 w-3.5 mr-1" />}
            Resolve {selected.size} item{selected.size !== 1 ? "s" : ""}
          </Button>
          <button
            onClick={() => setSelected(new Set())}
            className="ml-auto text-xs text-muted-foreground hover:text-foreground"
          >
            Clear
          </button>
        </div>
      )}

      {/* Calendar view */}
      {!isLoading && view === "calendar" && (
        <Card className="p-4">
          <DeadlineCalendar items={filtered} />
        </Card>
      )}

      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : view === "calendar" ? null : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
          <CheckCircle2 className="h-8 w-8 text-muted-foreground mb-3" />
          <p className="text-sm font-medium">
            {showResolved ? "No items found" : "All caught up!"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {showResolved
              ? "No deadlines or action items yet."
              : "No open deadlines or action items. Upload documents to extract them."}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(grouped).map(([clientId, clientItems]) => {
            const clientName = clientId === "__none__"
              ? "Unassigned"
              : clientItems[0]?.clientName ?? "Unknown Client";
            return (
              <div key={clientId}>
                <div className="mb-2 flex items-center gap-2">
                  {clientId !== "__none__" ? (
                    <Link
                      href={`/clients/${clientId}`}
                      className="text-sm font-semibold hover:underline"
                    >
                      {clientName}
                    </Link>
                  ) : (
                    <span className="text-sm font-semibold text-muted-foreground">{clientName}</span>
                  )}
                  <span className="text-xs text-muted-foreground">
                    {clientItems.filter(i => !i.resolved).length} open
                  </span>
                </div>
                <div className="space-y-2">
                  {clientItems.map((item) => {
                    const dueDateInfo = item.dueDate ? getDueDateLabel(item.dueDate) : null;
                    const isResolved = item.resolved === true;
                    return (
                      <Card
                        key={item.id}
                        className={`${isResolved ? "opacity-50" : ""} ${
                          dueDateInfo?.urgent && !isResolved ? "border-destructive/30" : ""
                        } ${selected.has(item.id) ? "ring-1 ring-primary/50 border-primary/30" : ""}`}
                      >
                        <CardContent className="flex items-start gap-3 p-3">
                          {!isResolved && (
                            <input
                              type="checkbox"
                              checked={selected.has(item.id)}
                              onChange={() => toggleSelect(item.id)}
                              className="mt-1 h-3.5 w-3.5 flex-shrink-0 cursor-pointer accent-primary"
                              aria-label="Select item"
                            />
                          )}
                          <button
                            onClick={() => resolveEntity.mutate({ id: item.id, resolved: !isResolved })}
                            className="mt-0.5 flex-shrink-0 text-muted-foreground hover:text-green-600 transition-colors"
                            title={isResolved ? "Mark as open" : "Mark as done"}
                          >
                            {isResolved ? (
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                          </button>
                          <div className="min-w-0 flex-1">
                            {editingId === item.id ? (
                              <div className="space-y-2">
                                <Input
                                  value={editValue}
                                  onChange={(e) => setEditValue(e.target.value)}
                                  className="h-7 text-sm"
                                  autoFocus
                                />
                                <Input
                                  type="date"
                                  value={editDueDate}
                                  onChange={(e) => setEditDueDate(e.target.value)}
                                  className="h-7 text-xs w-40"
                                />
                              </div>
                            ) : (
                              <>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <p className={`text-sm font-medium ${isResolved ? "line-through" : ""}`}>
                                    {item.value}
                                  </p>
                                  <Badge
                                    variant={item.type === "deadline" ? "destructive" : "outline"}
                                    className="text-xs"
                                  >
                                    {item.type === "deadline" ? "Deadline" : "Action"}
                                  </Badge>
                                </div>
                                {item.context && (
                                  <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                                    {item.context}
                                  </p>
                                )}
                                <div className="mt-1 flex items-center gap-3 flex-wrap">
                                  {dueDateInfo && (
                                    <span className={`flex items-center gap-1 text-xs font-medium ${
                                      dueDateInfo.urgent && !isResolved ? "text-destructive" : "text-muted-foreground"
                                    }`}>
                                      <Clock className="h-3 w-3" />
                                      {dueDateInfo.label}
                                    </span>
                                  )}
                                  {item.documentTitle && (
                                    <span className="text-xs text-muted-foreground truncate">
                                      {item.documentTitle}
                                    </span>
                                  )}
                                  {item.isManual && (
                                    <Badge variant="outline" className="text-xs text-muted-foreground">Manual</Badge>
                                  )}
                                  {item.recurrenceType && (
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                      <RefreshCw className="h-3 w-3" />
                                      {item.recurrenceType}
                                    </span>
                                  )}
                                </div>
                              </>
                            )}
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {editingId === item.id ? (
                              <>
                                <button
                                  onClick={saveEdit}
                                  disabled={updateDeadline.isPending}
                                  className="text-green-600 hover:text-green-700 transition-colors p-1"
                                  title="Save"
                                >
                                  <Check className="h-3.5 w-3.5" />
                                </button>
                                <button
                                  onClick={() => setEditingId(null)}
                                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                                  title="Cancel"
                                >
                                  <X className="h-3.5 w-3.5" />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={() => startEdit(item)}
                                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                                  title="Edit"
                                >
                                  <Pencil className="h-3.5 w-3.5" />
                                </button>
                                {item.isManual && (
                                  <button
                                    onClick={() => deleteDeadline.mutate({ id: item.id })}
                                    className="text-muted-foreground hover:text-destructive transition-colors p-1"
                                    title="Delete"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                )}
                              </>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
