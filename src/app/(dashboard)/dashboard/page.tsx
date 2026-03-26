"use client";

import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, FileText, Clock, Loader2, AlertTriangle, CheckSquare, Circle, Briefcase, CalendarClock, MessageSquare, ArrowRight, Target } from "lucide-react";
import { DocumentDetailDialog } from "@/components/documents/document-detail-dialog";
import { QuickCapture } from "@/components/dashboard/quick-capture";
import { SetupBanner } from "@/components/dashboard/setup-banner";

const documentTypeLabels: Record<string, string> = {
  email: "Email",
  voice_note: "Voice Note",
  meeting: "Meeting",
  document: "Document",
  text_message: "Text Message",
  calendar: "Calendar",
};

export default function DashboardPage() {
  const utils = trpc.useUtils();
  const { data: clients, isLoading: clientsLoading } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery();
  const { data: allDocuments, isLoading: docsLoading } = trpc.documents.list.useQuery(
    undefined,
    {
      refetchInterval: (query) => {
        const data = query.state.data;
        const hasProcessing = data?.some(
          (d) => d.status === "pending" || d.status === "processing"
        );
        return hasProcessing ? 5000 : false;
      },
    }
  );
  const { data: deadlines, isLoading: deadlinesLoading } = trpc.documents.listDeadlines.useQuery({ showResolved: false });
  const resolveEntity = trpc.documents.resolveEntity.useMutation({
    onSuccess: () => utils.documents.listDeadlines.invalidate(),
  });
  const { data: userSettings } = trpc.users.getSettings.useQuery();
  const { data: monthlyStats } = trpc.analytics.currentMonth.useQuery();

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const firstName = userSettings?.name?.split(" ")[0] ?? null;

  const isLoading = clientsLoading || docsLoading;

  const totalClients = clients?.length ?? 0;
  const totalDocuments = allDocuments?.length ?? 0;
  const activeMatters = matters?.filter(m => m.status === "active").length ?? 0;

  const processingCount =
    allDocuments?.filter(
      (d) => d.status === "pending" || d.status === "processing"
    ).length ?? 0;

  const totalBillableMinutes =
    allDocuments?.reduce((sum, d) => sum + (d.billableMinutes ?? 0), 0) ?? 0;
  const totalBillableHours = (totalBillableMinutes / 60).toFixed(1);

  const recentDocuments = allDocuments
    ?.filter((d) => d.status === "completed")
    .slice(0, 5) ?? [];

  const openDeadlines = deadlines?.filter((e) => !e.resolved) ?? [];
  const actionItems = openDeadlines.filter((e) => e.type === "action_item");
  const upcomingDeadlines = openDeadlines.filter((e) => e.type === "deadline");

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const endOfWeek = new Date(today);
  endOfWeek.setDate(today.getDate() + 7);
  const todayDeadlines = upcomingDeadlines.filter(d => {
    if (!d.dueDate) return false;
    const due = new Date(d.dueDate);
    return due <= endOfWeek;
  }).sort((a, b) => {
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  const hourlyRate = userSettings?.hourlyRate ?? 400;
  const timeSavedHours = parseFloat(totalBillableHours);
  const monthlySaved = hourlyRate * timeSavedHours;

  return (
    <div className="space-y-6">
      <SetupBanner />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">
            {greeting}{firstName ? `, ${firstName}` : ""}.
          </h1>
          <p className="text-muted-foreground mt-0.5">
            {openDeadlines.length > 0
              ? `You have ${openDeadlines.length} open item${openDeadlines.length !== 1 ? "s" : ""} across your practice.`
              : "Here's an overview of your practice."}
          </p>
        </div>
        <Button variant="outline" size="sm" asChild className="flex-shrink-0">
          <Link href="/chat" className="flex items-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5" />
            Ask Atticus
          </Link>
        </Button>
      </div>

      {/* Atticus insight card */}
      {!isLoading && (totalClients > 0 || totalDocuments > 0) && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-primary text-sm font-semibold mt-0.5">Atticus</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {(() => {
                  const now = new Date();
                  const overdue = upcomingDeadlines.filter(d => d.dueDate && new Date(d.dueDate) < now);
                  const parts: string[] = [];
                  if (overdue.length > 0) parts.push(`${overdue.length} overdue deadline${overdue.length !== 1 ? "s" : ""}`);
                  if (actionItems.length > 0) parts.push(`${actionItems.length} open action item${actionItems.length !== 1 ? "s" : ""}`);
                  if (activeMatters > 0 && totalClients > 0) parts.push(`${activeMatters} active matter${activeMatters !== 1 ? "s" : ""} across ${totalClients} client${totalClients !== 1 ? "s" : ""}`);
                  if (processingCount > 0) parts.push(`${processingCount} document${processingCount !== 1 ? "s" : ""} currently processing`);

                  if (parts.length === 0) {
                    return "Your practice is up to date — no urgent items today. Use the quick capture below to add a note or Ask Atticus anything about your case files.";
                  }
                  return `I'm tracking ${parts.join(", ")}. ${overdue.length > 0 ? "The overdue items need your attention first." : "Let me know if you'd like to discuss any of these."} You can ask me anything about your practice.`;
                })()}
              </p>
              <Button size="sm" variant="ghost" asChild className="flex-shrink-0 h-7 text-xs text-primary">
                <Link href="/chat">Chat →</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Priority alerts — shown immediately if urgent items exist */}
      {!isLoading && (() => {
        const now = new Date();
        const overdue = upcomingDeadlines.filter(d => d.dueDate && new Date(d.dueDate) < now);
        const dueToday = upcomingDeadlines.filter(d => {
          if (!d.dueDate) return false;
          const due = new Date(d.dueDate);
          return due >= now && due.toDateString() === now.toDateString();
        });
        const urgent = [...overdue, ...dueToday].slice(0, 3);
        if (urgent.length === 0) return null;
        return (
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-4 space-y-2">
              <p className="text-xs font-semibold text-destructive uppercase tracking-wide flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" />
                Needs your attention today
              </p>
              {urgent.map(d => (
                <div key={d.id} className="flex items-center gap-2">
                  <button
                    onClick={() => resolveEntity.mutate({ id: d.id, resolved: true })}
                    className="flex-shrink-0 text-muted-foreground hover:text-green-600 transition-colors"
                  >
                    <Circle className="h-3.5 w-3.5" />
                  </button>
                  <p className="text-sm truncate flex-1">{d.value}</p>
                  {d.dueDate && (
                    <span className="text-xs text-destructive font-medium flex-shrink-0">
                      {new Date(d.dueDate) < now ? "Overdue" : "Today"}
                    </span>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        );
      })()}

      {/* Quick capture */}
      <Card>
        <CardContent className="pt-4 pb-4">
          <QuickCapture />
        </CardContent>
      </Card>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : totalClients === 0 && totalDocuments === 0 ? (
        /* Onboarding empty state */
        <div className="rounded-xl border border-dashed p-8">
          <h2 className="text-lg font-semibold">Get started with Atticus</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Follow these steps to set up your practice.
          </p>
          <div className="mt-6 space-y-3">
            {[
              { step: "1", label: "Add your first client", href: "/clients", desc: "Create a client record to start organizing your work." },
              { step: "2", label: "Upload a document", href: "/upload", desc: "Upload emails, meeting notes, voice memos, or contracts." },
              { step: "3", label: "Search across your documents", href: "/search", desc: "Find anything in your practice using natural language." },
            ].map((item) => (
              <Link
                key={item.step}
                href={item.href}
                className="flex items-center gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {item.step}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Clients
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{totalClients}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Matters
                </CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{activeMatters}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Documents
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{totalDocuments}</p>
                {processingCount > 0 && (
                  <p className="mt-0.5 text-xs text-muted-foreground flex items-center gap-1">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    {processingCount} processing
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Unbilled Hours
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{monthlyStats ? monthlyStats.unbilledHours.toFixed(1) : totalBillableHours}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">docs + time entries</p>
              </CardContent>
            </Card>
          </div>

          {/* Due This Week */}
          {!deadlinesLoading && todayDeadlines.length > 0 && (
            <div>
              <h2 className="mb-3 flex items-center gap-2 text-base font-semibold">
                <CalendarClock className="h-4 w-4 text-destructive" />
                Due This Week
                <Badge variant="destructive" className="text-xs">{todayDeadlines.length}</Badge>
              </h2>
              <div className="space-y-2">
                {todayDeadlines.slice(0, 6).map((d) => {
                  const due = new Date(d.dueDate!);
                  const isToday = due.toDateString() === new Date().toDateString();
                  const diffDays = Math.ceil((due.getTime() - Date.now()) / 86400000);
                  return (
                    <Card key={d.id} className={isToday ? "border-destructive" : "border-destructive/30"}>
                      <CardContent className="flex items-start gap-2 p-3">
                        <button
                          onClick={() => resolveEntity.mutate({ id: d.id, resolved: true })}
                          className="mt-0.5 flex-shrink-0 text-muted-foreground hover:text-green-600 transition-colors"
                          title="Mark as done"
                        >
                          <Circle className="h-4 w-4" />
                        </button>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium">{d.value}</p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className={`text-xs font-medium ${isToday ? "text-destructive" : "text-amber-600"}`}>
                              {isToday ? "Today" : diffDays === 1 ? "Tomorrow" : `${diffDays} days`}
                              {" — "}{due.toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                            </span>
                            {d.documentTitle && (
                              <span className="text-xs text-muted-foreground truncate">— {d.documentTitle}</span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* Deadlines & Action Items */}
          {!deadlinesLoading && openDeadlines.length > 0 && (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {upcomingDeadlines.length > 0 && (
                <div>
                  <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    Deadlines
                    <Badge variant="destructive" className="text-xs">{upcomingDeadlines.length}</Badge>
                  </h2>
                  <div className="space-y-2">
                    {upcomingDeadlines.slice(0, 5).map((d) => (
                      <Card key={d.id} className="border-destructive/20">
                        <CardContent className="flex items-start gap-2 p-3">
                          <button
                            onClick={() => resolveEntity.mutate({ id: d.id, resolved: true })}
                            className="mt-0.5 flex-shrink-0 text-muted-foreground hover:text-green-600 transition-colors"
                            title="Mark as done"
                          >
                            <Circle className="h-4 w-4" />
                          </button>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium">{d.value}</p>
                            {d.context && (
                              <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{d.context}</p>
                            )}
                            <div className="mt-1 flex items-center gap-2">
                              {d.dueDate && (
                                <span className="text-xs text-destructive font-medium">
                                  Due {new Date(d.dueDate).toLocaleDateString()}
                                </span>
                              )}
                              {d.documentTitle && (
                                <span className="text-xs text-muted-foreground truncate">
                                  — {d.documentTitle}
                                </span>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {actionItems.length > 0 && (
                <div>
                  <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                    <CheckSquare className="h-4 w-4 text-orange-500" />
                    Action Items
                    <Badge variant="outline" className="text-xs">{actionItems.length}</Badge>
                  </h2>
                  <div className="space-y-2">
                    {actionItems.slice(0, 5).map((a) => (
                      <Card key={a.id} className="border-orange-200/30">
                        <CardContent className="flex items-start gap-2 p-3">
                          <button
                            onClick={() => resolveEntity.mutate({ id: a.id, resolved: true })}
                            className="mt-0.5 flex-shrink-0 text-muted-foreground hover:text-green-600 transition-colors"
                            title="Mark as done"
                          >
                            <Circle className="h-4 w-4" />
                          </button>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium">{a.value}</p>
                            {a.context && (
                              <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{a.context}</p>
                            )}
                            {a.documentTitle && (
                              <p className="mt-0.5 text-xs text-muted-foreground truncate">
                                — {a.documentTitle}
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Monthly billing summary */}
          {monthlyStats && (monthlyStats.invoicedThisMonth > 0 || monthlyStats.unbilledHours > 0.5) && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Card>
                <CardHeader className="pb-1">
                  <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Invoiced This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold">{monthlyStats.invoicedThisMonth.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 })}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{monthlyStats.invoiceCount} invoice{monthlyStats.invoiceCount !== 1 ? "s" : ""}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Collected This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-green-600">{monthlyStats.collectedThisMonth.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 })}</p>
                  {monthlyStats.invoicedThisMonth > 0 && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {Math.round((monthlyStats.collectedThisMonth / monthlyStats.invoicedThisMonth) * 100)}% collection rate
                    </p>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Unbilled Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-amber-600">{monthlyStats.unbilledHours.toFixed(1)} hrs</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {(monthlyStats.unbilledHours * (userSettings?.hourlyRate ?? 400)).toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 })} at ${userSettings?.hourlyRate ?? 400}/hr
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Revenue Goal Progress */}
          {monthlyStats && userSettings?.monthlyRevenueGoal && userSettings.monthlyRevenueGoal > 0 && (() => {
            const goal = userSettings.monthlyRevenueGoal;
            const collected = monthlyStats.collectedThisMonth;
            const pct = Math.min(Math.round((collected / goal) * 100), 100);
            const remaining = Math.max(goal - collected, 0);
            const barColor = pct >= 100 ? "bg-green-500" : pct >= 60 ? "bg-amber-500" : "bg-primary";
            return (
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">Monthly Revenue Goal</p>
                    </div>
                    <span className="text-sm font-semibold">{pct}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${barColor}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{collected.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 })} collected</span>
                    <span>
                      {pct >= 100
                        ? "Goal reached!"
                        : `${remaining.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 })} to goal`}
                      {" "}· {goal.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 })} target
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })()}

          {/* Time Saved Callout */}
          {totalDocuments > 0 && (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm font-medium">Estimated time recovered this month</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Based on {totalDocuments} document{totalDocuments !== 1 ? "s" : ""} processed
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{timeSavedHours} hrs</p>
                  <p className="text-xs text-muted-foreground">${monthlySaved.toLocaleString()} value at ${hourlyRate}/hr</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recent Activity */}
          <div>
            <h2 className="mb-3 text-lg font-semibold">Recent Activity</h2>
            {recentDocuments.length === 0 ? (
              <Card>
                <CardContent className="py-10 text-center">
                  <p className="text-sm text-muted-foreground">
                    No completed documents yet.{" "}
                    <Link href="/upload" className="text-primary underline-offset-4 hover:underline">
                      Upload files
                    </Link>{" "}
                    to get started.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-2">
                {recentDocuments.map((doc) => (
                  <DocumentDetailDialog key={doc.id} docId={doc.id}>
                    <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                      <CardContent className="flex items-start gap-3 p-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">
                            {doc.title ?? "Untitled"}
                          </p>
                          {doc.summary && (
                            <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                              {doc.summary}
                            </p>
                          )}
                          <p className="mt-1 text-xs text-muted-foreground">
                            {new Date(doc.createdAt).toLocaleDateString(undefined, {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                        <Badge variant="outline" className="flex-shrink-0 text-xs">
                          {documentTypeLabels[doc.type] ?? doc.type}
                        </Badge>
                      </CardContent>
                    </Card>
                  </DocumentDetailDialog>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
