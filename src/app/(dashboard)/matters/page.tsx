"use client";

import { useState } from "react";
import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import { MatterForm } from "@/components/matters/matter-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Loader2, ChevronRight, Search, FileText, AlertTriangle, AlertCircle, RefreshCw, LayoutList, Columns3 } from "lucide-react";

const statusVariants: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  active: "default",
  closed: "secondary",
  pending: "outline",
};

const STATUSES = ["pending", "active", "closed"] as const;
const STATUS_LABELS: Record<string, string> = { pending: "Pending", active: "Active", closed: "Closed" };
const STATUS_COLORS: Record<string, string> = {
  pending: "border-amber-200 bg-amber-50/40",
  active: "border-green-200 bg-green-50/40",
  closed: "border-muted bg-muted/20",
};

type Matter = {
  id: string;
  title: string;
  status: string;
  description?: string | null;
  clientId: string;
  createdAt: string | Date;
  documentCount: number;
  openDeadlineCount: number;
  totalActionItems?: number;
  resolvedActionItems?: number;
};

function MatterCard({ matter, clientName }: { matter: Matter; clientName?: string }) {
  return (
    <Link href={`/matters/${matter.id}`}>
      <Card className="transition-colors hover:bg-muted/50 cursor-pointer">
        <CardContent className="p-3">
          <p className="text-sm font-medium leading-snug">{matter.title}</p>
          {clientName && (
            <p className="text-xs text-muted-foreground mt-0.5">{clientName}</p>
          )}
          {matter.description && (
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{matter.description}</p>
          )}
          <div className="flex items-center gap-2 mt-2">
            {(matter.totalActionItems ?? 0) > 0 && (
              <div className="flex items-center gap-1" title={`${matter.resolvedActionItems ?? 0}/${matter.totalActionItems ?? 0} tasks done`}>
                <div className="w-12 h-1 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{ width: `${((matter.resolvedActionItems ?? 0) / (matter.totalActionItems ?? 1)) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {matter.resolvedActionItems ?? 0}/{matter.totalActionItems ?? 0}
                </span>
              </div>
            )}
            {matter.documentCount > 0 && (
              <span className="flex items-center gap-0.5 text-xs text-muted-foreground ml-auto">
                <FileText className="h-3 w-3" />
                {matter.documentCount}
              </span>
            )}
            {matter.openDeadlineCount > 0 && (
              <span className="flex items-center gap-0.5 text-xs text-destructive">
                <AlertTriangle className="h-3 w-3" />
                {matter.openDeadlineCount}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function MattersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "pending" | "closed">("active");
  const [viewMode, setViewMode] = useState<"list" | "board">("list");
  const { data: matters, isLoading, error, refetch } = trpc.matters.listWithStats.useQuery();
  const { data: clients } = trpc.clients.list.useQuery();

  const clientMap = new Map(clients?.map((c) => [c.id, c]) ?? []);

  const filtered = matters?.filter((m) => {
    if (viewMode === "list" && statusFilter !== "all" && m.status !== statusFilter) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    const client = clientMap.get(m.clientId);
    return (
      m.title.toLowerCase().includes(q) ||
      (m.description ?? "").toLowerCase().includes(q) ||
      (client?.name ?? "").toLowerCase().includes(q)
    );
  });

  const byStatus = (status: string) =>
    (matters ?? []).filter((m) => {
      if (m.status !== status) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      const client = clientMap.get(m.clientId);
      return (
        m.title.toLowerCase().includes(q) ||
        (m.description ?? "").toLowerCase().includes(q) ||
        (client?.name ?? "").toLowerCase().includes(q)
      );
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Matters</h1>
          <p className="text-muted-foreground">Manage legal matters and cases.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-md border">
            <button
              onClick={() => setViewMode("list")}
              className={`px-2.5 py-1.5 rounded-l-md transition-colors ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              title="List view"
            >
              <LayoutList className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setViewMode("board")}
              className={`px-2.5 py-1.5 rounded-r-md transition-colors ${viewMode === "board" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              title="Board view"
            >
              <Columns3 className="h-3.5 w-3.5" />
            </button>
          </div>
          <MatterForm
            trigger={
              <Button>
                <Plus className="h-4 w-4" />
                Create Matter
              </Button>
            }
          />
        </div>
      </div>

      {isLoading && (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="rounded-lg border p-4 space-y-2">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-full" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
            <AlertCircle className="h-6 w-6 text-destructive" />
          </div>
          <h3 className="mt-4 text-base font-semibold">Failed to load matters</h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Something went wrong while fetching your matters. Please try again.
          </p>
          <Button className="mt-4" variant="outline" onClick={() => refetch()}>
            <RefreshCw className="mr-2 h-4 w-4" /> Try Again
          </Button>
        </div>
      )}

      {matters && matters.length > 0 && (
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search matters by title, description, or client…"
              className="pl-9"
            />
          </div>
          {viewMode === "list" && (
            <div className="flex rounded-md border text-xs">
              {(["all", "active", "pending", "closed"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 font-medium capitalize transition-colors first:rounded-l-md last:rounded-r-md ${
                    statusFilter === s
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Board view */}
      {viewMode === "board" && matters && (
        <div className="grid grid-cols-3 gap-4">
          {STATUSES.map((status) => {
            const cols = byStatus(status);
            return (
              <div key={status} className={`rounded-lg border p-3 ${STATUS_COLORS[status]}`}>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {STATUS_LABELS[status]}
                  </h3>
                  <Badge variant="secondary" className="text-xs px-1.5 py-0">{cols.length}</Badge>
                </div>
                <div className="space-y-2">
                  {cols.length === 0 ? (
                    <p className="text-xs text-muted-foreground/60 py-6 text-center">No {status} matters</p>
                  ) : (
                    cols.map((m) => {
                      const client = clientMap.get(m.clientId);
                      return (
                        <MatterCard
                          key={m.id}
                          matter={m as Matter}
                          clientName={client ? `${client.name}${client.company ? ` — ${client.company}` : ""}` : undefined}
                        />
                      );
                    })
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* List view */}
      {viewMode === "list" && (
        <>
          {filtered && filtered.length === 0 && !isLoading && (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
              <p className="text-sm font-medium">
                {search ? "No matters match your search" : "No matters yet"}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {search
                  ? "Try a different search term."
                  : "Create your first matter to get started."}
              </p>
            </div>
          )}

          {filtered && filtered.length > 0 && (
            <div className="space-y-2">
              {filtered.map((matter) => {
                const client = clientMap.get(matter.clientId);
                return (
                  <Link key={matter.id} href={`/matters/${matter.id}`}>
                    <Card className="transition-colors hover:bg-muted/50">
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">{matter.title}</p>
                          {client && (
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {client.name}
                              {client.company ? ` — ${client.company}` : ""}
                            </p>
                          )}
                          {matter.description && (
                            <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                              {matter.description}
                            </p>
                          )}
                        </div>
                        <div className="ml-3 flex items-center gap-3 flex-shrink-0">
                          {(matter as { totalActionItems?: number; resolvedActionItems?: number }).totalActionItems! > 0 && (
                            <div className="flex items-center gap-1.5" title={`${(matter as { resolvedActionItems?: number }).resolvedActionItems ?? 0}/${(matter as { totalActionItems?: number }).totalActionItems ?? 0} done`}>
                              <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                                <div
                                  className="h-full rounded-full bg-green-500"
                                  style={{ width: `${(((matter as { resolvedActionItems?: number }).resolvedActionItems ?? 0) / ((matter as { totalActionItems?: number }).totalActionItems ?? 1)) * 100}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground tabular-nums">
                                {(matter as { resolvedActionItems?: number }).resolvedActionItems ?? 0}/{(matter as { totalActionItems?: number }).totalActionItems ?? 0}
                              </span>
                            </div>
                          )}
                          {matter.documentCount > 0 && (
                            <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                              <FileText className="h-3 w-3" />
                              {matter.documentCount}
                            </span>
                          )}
                          {matter.openDeadlineCount > 0 && (
                            <span className="flex items-center gap-0.5 text-xs text-destructive">
                              <AlertTriangle className="h-3 w-3" />
                              {matter.openDeadlineCount}
                            </span>
                          )}
                          <p className="text-xs text-muted-foreground">
                            {new Date(matter.createdAt).toLocaleDateString()}
                          </p>
                          <Badge
                            variant={statusVariants[matter.status] ?? "secondary"}
                            className="capitalize"
                          >
                            {matter.status}
                          </Badge>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
