"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  CalendarClock,
  Briefcase,
  Mic,
  FileText,
  CheckCircle2,
  Receipt,
  Loader2,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { DocumentDetailDialog } from "@/components/documents/document-detail-dialog";
import { QuickCapture } from "@/components/dashboard/quick-capture";

function daysOverdue(date: Date): string {
  const days = Math.floor((Date.now() - date.getTime()) / 86400000);
  if (days === 0) return "due today";
  if (days === 1) return "1 day overdue";
  return `${days} days overdue`;
}

function daysUntil(date: Date): string {
  const days = Math.ceil((date.getTime() - Date.now()) / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "tomorrow";
  return `in ${days} days`;
}

function relativeTime(date: Date): string {
  const days = Math.floor((Date.now() - date.getTime()) / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

function SectionHeader({ icon: Icon, title, count }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  count?: number;
}) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <h2 className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">{title}</h2>
      {count !== undefined && count > 0 && (
        <Badge variant="secondary" className="text-xs px-1.5 py-0">{count}</Badge>
      )}
    </div>
  );
}

export default function TodayPage() {
  const { data, isLoading } = trpc.today.getBriefing.useQuery();
  const [captureOpen, setCaptureOpen] = useState(false);

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const overdueCount = data?.overdueItems.length ?? 0;
  const upcomingCount = data?.upcomingItems.length ?? 0;
  const invoiceCount = data?.overdueInvoices.length ?? 0;
  const quietCount = data?.quietMatters.length ?? 0;
  const recordingCount = data?.recentRecordings.length ?? 0;
  const allClear = overdueCount === 0 && invoiceCount === 0;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{greeting}</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {new Date().toLocaleDateString("en-CA", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setCaptureOpen((v) => !v)}>
          <Mic className="h-4 w-4 mr-2" />
          Quick Capture
        </Button>
      </div>

      {/* Quick Capture panel */}
      {captureOpen && (
        <Card>
          <CardContent className="pt-4 pb-4">
            <QuickCapture />
          </CardContent>
        </Card>
      )}

      {/* Zone 1: Morning Briefing */}
      <div className="space-y-6">

        {/* All clear */}
        {allClear && quietCount === 0 && upcomingCount === 0 && (
          <Card className="border-green-500/30 bg-green-50/40 dark:bg-green-950/20">
            <CardContent className="py-4 px-4 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
              <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                You&apos;re all caught up. No overdue items.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Overdue */}
        {overdueCount > 0 && (
          <div>
            <SectionHeader icon={AlertTriangle} title="Overdue" count={overdueCount} />
            <div className="space-y-2">
              {data!.overdueItems.map((item) => (
                <Card key={item.id} className="border-destructive/40">
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-medium">{item.value}</p>
                        {(item.clientName ?? item.matterTitle) && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {[item.clientName, item.matterTitle].filter(Boolean).join(" · ")}
                          </p>
                        )}
                      </div>
                      {item.dueDate && (
                        <Badge variant="destructive" className="shrink-0 text-xs whitespace-nowrap">
                          {daysOverdue(new Date(item.dueDate))}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming */}
        {upcomingCount > 0 && (
          <div>
            <SectionHeader icon={CalendarClock} title="Due this week" count={upcomingCount} />
            <div className="space-y-2">
              {data!.upcomingItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-medium">{item.value}</p>
                        {(item.clientName ?? item.matterTitle) && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {[item.clientName, item.matterTitle].filter(Boolean).join(" · ")}
                          </p>
                        )}
                      </div>
                      {item.dueDate && (
                        <span className="text-xs text-muted-foreground shrink-0 whitespace-nowrap">
                          {daysUntil(new Date(item.dueDate))}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Overdue invoices */}
        {invoiceCount > 0 && (
          <div>
            <SectionHeader icon={Receipt} title="Overdue invoices" count={invoiceCount} />
            <div className="space-y-2">
              {data!.overdueInvoices.map((inv) => (
                <Card key={inv.id} className="border-amber-400/40">
                  <CardContent className="py-3 px-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Invoice #{inv.invoiceNumber}</p>
                        {inv.clientName && (
                          <p className="text-xs text-muted-foreground">{inv.clientName}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold">
                          ${((inv.totalAmount ?? 0) / 100).toLocaleString("en-CA", {
                            minimumFractionDigits: 2,
                          })}
                        </p>
                        <Link
                          href="/billing"
                          className="text-xs text-muted-foreground hover:underline"
                        >
                          View →
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Quiet matters */}
        {quietCount > 0 && (
          <div>
            <SectionHeader icon={Briefcase} title="No activity in 30+ days" count={quietCount} />
            <div className="space-y-2">
              {data!.quietMatters.map((matter) => (
                <Card key={matter.id} className="border-dashed">
                  <CardContent className="py-3 px-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{matter.title}</p>
                        {matter.clientName && (
                          <p className="text-xs text-muted-foreground">{matter.clientName}</p>
                        )}
                      </div>
                      <Link
                        href={`/matters/${matter.id}`}
                        className="text-xs text-muted-foreground hover:underline"
                      >
                        View →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Zone 2: Recent Recordings */}
      {recordingCount > 0 && (
        <div>
          <SectionHeader icon={Mic} title="Recent recordings" count={recordingCount} />
          <div className="space-y-2">
            {data!.recentRecordings.map((doc) => (
              <DocumentDetailDialog key={doc.id} docId={doc.id}>
                <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardContent className="py-3 px-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">
                          {doc.title ?? "Untitled recording"}
                        </p>
                        {(doc.clientName ?? doc.matterTitle) && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {[doc.clientName, doc.matterTitle].filter(Boolean).join(" · ")}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {relativeTime(new Date(doc.createdAt))}
                        </p>
                      </div>
                      {/* Output status indicators */}
                      <div className="flex items-center gap-1.5 shrink-0" title="Memo / Task List / Email">
                        <FileText
                          className={`h-3.5 w-3.5 ${doc.generatedMemo ? "text-green-600" : "text-muted-foreground/25"}`}
                        />
                        <CheckCircle2
                          className={`h-3.5 w-3.5 ${doc.generatedTaskList ? "text-green-600" : "text-muted-foreground/25"}`}
                        />
                        <Mail
                          className={`h-3.5 w-3.5 ${doc.generatedFollowUpEmail ? "text-green-600" : "text-muted-foreground/25"}`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DocumentDetailDialog>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
