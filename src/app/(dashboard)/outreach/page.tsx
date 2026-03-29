"use client";

import { useState, useRef } from "react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Plus,
  Loader2,
  Send,
  MailOpen,
  MousePointerClick,
  Reply,
  Linkedin,
  Phone,
  Trash2,
  Play,
  Pause,
  Upload,
  CheckCircle2,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-zinc-500",
  active: "bg-green-500",
  paused: "bg-yellow-500",
  completed: "bg-blue-500",
};

export default function OutreachPage() {
  const utils = trpc.useUtils();

  // ── Queries ──────────────────────────────────────────────────
  const { data: campaignList, isLoading: campaignsLoading } =
    trpc.outreach.listCampaigns.useQuery();
  const { data: templates } = trpc.outreach.getTemplates.useQuery();
  const { data: actionItemsList } = trpc.outreach.actionItems.useQuery();
  const { data: allProspects } = trpc.prospects.list.useQuery();

  // ── Mutations ────────────────────────────────────────────────
  const createCampaign = trpc.outreach.createCampaign.useMutation({
    onSuccess: () => utils.outreach.invalidate(),
  });
  const updateCampaign = trpc.outreach.updateCampaign.useMutation({
    onSuccess: () => utils.outreach.invalidate(),
  });
  const deleteCampaign = trpc.outreach.deleteCampaign.useMutation({
    onSuccess: () => utils.outreach.invalidate(),
  });
  const addProspects = trpc.outreach.addProspectsToCampaign.useMutation({
    onSuccess: () => utils.outreach.invalidate(),
  });
  const sendBatch = trpc.outreach.sendBatch.useMutation({
    onSuccess: () => utils.outreach.invalidate(),
  });
  const markDone = trpc.outreach.markActionDone.useMutation({
    onSuccess: () => utils.outreach.invalidate(),
  });
  const importProspects = trpc.outreach.importProspects.useMutation({
    onSuccess: () => {
      utils.outreach.invalidate();
      utils.prospects.invalidate();
    },
  });

  // ── Local state ──────────────────────────────────────────────
  const [showCreate, setShowCreate] = useState(false);
  const [createForm, setCreateForm] = useState({
    name: "",
    practiceArea: "",
    templateKey: "",
  });
  const [expandedCampaignId, setExpandedCampaignId] = useState<string | null>(
    null
  );
  const [showAddProspects, setShowAddProspects] = useState<string | null>(null);
  const [selectedProspectIds, setSelectedProspectIds] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [csvStatus, setCsvStatus] = useState<string | null>(null);

  // ── Aggregate stats ──────────────────────────────────────────
  const aggSent =
    campaignList?.reduce((s, c) => s + c.totalSent, 0) ?? 0;
  const aggOpened =
    campaignList?.reduce((s, c) => s + c.totalOpened, 0) ?? 0;
  const aggClicked =
    campaignList?.reduce((s, c) => s + c.totalClicked, 0) ?? 0;
  const aggReplied =
    campaignList?.reduce((s, c) => s + c.totalReplied, 0) ?? 0;
  const openRate = aggSent > 0 ? Math.round((aggOpened / aggSent) * 100) : 0;
  const clickRate = aggSent > 0 ? Math.round((aggClicked / aggSent) * 100) : 0;
  const replyRate = aggSent > 0 ? Math.round((aggReplied / aggSent) * 100) : 0;

  // ── Handlers ─────────────────────────────────────────────────
  async function handleCreateCampaign() {
    await createCampaign.mutateAsync({
      name: createForm.name,
      practiceArea: createForm.practiceArea || undefined,
      templateKey: createForm.templateKey || undefined,
    });
    setShowCreate(false);
    setCreateForm({ name: "", practiceArea: "", templateKey: "" });
  }

  async function handleAddProspects(campaignId: string) {
    if (selectedProspectIds.length === 0) return;
    await addProspects.mutateAsync({
      campaignId,
      prospectIds: selectedProspectIds,
    });
    setShowAddProspects(null);
    setSelectedProspectIds([]);
  }

  function toggleProspectSelection(id: string) {
    setSelectedProspectIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  async function handleCsvUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setCsvStatus("Parsing...");
    const text = await file.text();
    const lines = text.split("\n").filter((l) => l.trim());
    if (lines.length < 2) {
      setCsvStatus("CSV must have a header row and at least one data row.");
      return;
    }
    const headers = lines[0]!.split(",").map((h) => h.trim().toLowerCase());
    const nameIdx = headers.indexOf("name");
    const emailIdx = headers.indexOf("email");
    if (nameIdx === -1 || emailIdx === -1) {
      setCsvStatus("CSV must have 'name' and 'email' columns.");
      return;
    }
    const phoneIdx = headers.indexOf("phone");
    const companyIdx = headers.indexOf("company");
    const paIdx = headers.findIndex(
      (h) => h === "practicearea" || h === "practice_area" || h === "practice area"
    );
    const cityIdx = headers.indexOf("city");

    const rows: {
      name: string;
      email: string;
      phone?: string;
      company?: string;
      practiceArea?: string;
      city?: string;
    }[] = [];

    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i]!.split(",").map((c) => c.trim());
      const name = cols[nameIdx] ?? "";
      const email = cols[emailIdx] ?? "";
      if (!name || !email) continue;
      rows.push({
        name,
        email,
        phone: phoneIdx >= 0 ? cols[phoneIdx] || undefined : undefined,
        company: companyIdx >= 0 ? cols[companyIdx] || undefined : undefined,
        practiceArea: paIdx >= 0 ? cols[paIdx] || undefined : undefined,
        city: cityIdx >= 0 ? cols[cityIdx] || undefined : undefined,
      });
    }

    if (rows.length === 0) {
      setCsvStatus("No valid rows found.");
      return;
    }

    setCsvStatus(`Importing ${rows.length} prospects...`);
    try {
      const result = await importProspects.mutateAsync({ rows });
      setCsvStatus(
        `Done: ${result.imported} imported, ${result.skipped} skipped (duplicates/unsubscribed).`
      );
    } catch (err) {
      setCsvStatus(`Import failed: ${err instanceof Error ? err.message : "Unknown error"}`);
    }

    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Outreach</h1>
          <p className="text-muted-foreground">
            Cold outreach campaigns for Ontario lawyers.
          </p>
        </div>
        <Button onClick={() => setShowCreate(true)}>
          <Plus className="h-4 w-4 mr-1" /> New Campaign
        </Button>
      </div>

      {/* Top stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
              <Send className="h-3.5 w-3.5" /> Total Sent
            </div>
            <p className="text-xl font-semibold">{aggSent}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
              <MailOpen className="h-3.5 w-3.5" /> Open Rate
            </div>
            <p className="text-xl font-semibold">{openRate}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
              <MousePointerClick className="h-3.5 w-3.5" /> Click Rate
            </div>
            <p className="text-xl font-semibold">{clickRate}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
              <Reply className="h-3.5 w-3.5" /> Reply Rate
            </div>
            <p className="text-xl font-semibold">{replyRate}%</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="campaigns">
        <TabsList>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="actions">
            Action Items
            {(actionItemsList?.length ?? 0) > 0 && (
              <span className="ml-1.5 rounded-full bg-primary text-primary-foreground text-xs px-1.5 py-0.5">
                {actionItemsList!.length}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* ── Tab 1: Campaigns ─────────────────────────────────── */}
        <TabsContent value="campaigns" className="space-y-3 mt-4">
          {campaignsLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          )}

          {!campaignsLoading && campaignList?.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Send className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">
                No campaigns yet. Create one to start reaching out.
              </p>
            </div>
          )}

          {campaignList?.map((c) => {
            const isExpanded = expandedCampaignId === c.id;
            return (
              <div key={c.id} className="rounded-lg border bg-card">
                {/* Campaign row */}
                <button
                  onClick={() =>
                    setExpandedCampaignId(isExpanded ? null : c.id)
                  }
                  className="w-full text-left flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium truncate">{c.name}</p>
                      <Badge
                        variant="secondary"
                        className="text-xs px-1.5 py-0"
                      >
                        <span
                          className={`inline-block h-1.5 w-1.5 rounded-full mr-1 ${STATUS_COLORS[c.status] ?? "bg-zinc-500"}`}
                        />
                        {c.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {c.practiceArea ?? "General"} &middot; {c.totalSent} sent
                      &middot; {c.totalOpened} opened &middot;{" "}
                      {c.totalReplied} replied
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {c.status === "draft" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateCampaign.mutate({
                            id: c.id,
                            status: "active",
                          });
                        }}
                      >
                        <Play className="h-3 w-3 mr-1" /> Start
                      </Button>
                    )}
                    {c.status === "active" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateCampaign.mutate({
                            id: c.id,
                            status: "paused",
                          });
                        }}
                      >
                        <Pause className="h-3 w-3 mr-1" /> Pause
                      </Button>
                    )}
                    {c.status === "paused" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateCampaign.mutate({
                            id: c.id,
                            status: "active",
                          });
                        }}
                      >
                        <Play className="h-3 w-3 mr-1" /> Resume
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteCampaign.mutate({ id: c.id });
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Expanded details */}
                {isExpanded && (
                  <CampaignDetail
                    campaignId={c.id}
                    onAddProspects={() => {
                      setShowAddProspects(c.id);
                      setSelectedProspectIds([]);
                    }}
                    onSendBatch={() => sendBatch.mutate({ campaignId: c.id })}
                    sendBatchPending={sendBatch.isPending}
                  />
                )}
              </div>
            );
          })}

          {/* Import CSV section */}
          <div className="rounded-lg border bg-card p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Upload className="h-4 w-4" /> Import Prospects from CSV
            </div>
            <p className="text-xs text-muted-foreground">
              CSV must have &quot;name&quot; and &quot;email&quot; columns. Optional: phone,
              company, practiceArea, city.
            </p>
            <div className="flex items-center gap-3">
              <Input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleCsvUpload}
                className="max-w-xs"
              />
              {importProspects.isPending && (
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              )}
            </div>
            {csvStatus && (
              <p className="text-xs text-muted-foreground">{csvStatus}</p>
            )}
          </div>
        </TabsContent>

        {/* ── Tab 2: Action Items ──────────────────────────────── */}
        <TabsContent value="actions" className="space-y-3 mt-4">
          {!actionItemsList && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          )}

          {actionItemsList?.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <CheckCircle2 className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No action items today.</p>
            </div>
          )}

          {actionItemsList?.map((item) => (
            <Card key={item.send.id}>
              <CardContent className="p-4 flex items-start gap-4">
                <div className="mt-0.5">
                  {item.send.channel === "linkedin" ? (
                    <Linkedin className="h-5 w-5 text-blue-400" />
                  ) : (
                    <Phone className="h-5 w-5 text-green-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-medium">{item.prospect.name}</p>
                    {item.prospect.company && (
                      <span className="text-xs text-muted-foreground">
                        {item.prospect.company}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Campaign: {item.campaign.name} &middot; Step{" "}
                    {item.step.stepNumber}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.send.body}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => markDone.mutate({ sendId: item.send.id })}
                  disabled={markDone.isPending}
                >
                  {markDone.isPending ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : (
                    <>
                      <CheckCircle2 className="h-3 w-3 mr-1" /> Done
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* ── Tab 3: Analytics ─────────────────────────────────── */}
        <TabsContent value="analytics" className="space-y-4 mt-4">
          {campaignsLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          )}

          {!campaignsLoading && campaignList?.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-sm">
                Create a campaign to see analytics here.
              </p>
            </div>
          )}

          {campaignList?.map((c) => (
            <CampaignAnalytics key={c.id} campaign={c} />
          ))}
        </TabsContent>
      </Tabs>

      {/* ── Create Campaign Dialog ─────────────────────────────── */}
      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>New Campaign</DialogTitle>
            <DialogDescription>
              Create a cold outreach campaign for Ontario lawyers.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label>Campaign Name *</Label>
              <Input
                value={createForm.name}
                onChange={(e) =>
                  setCreateForm((f) => ({ ...f, name: e.target.value }))
                }
                placeholder="e.g. Family Law Q1 2026"
              />
            </div>
            <div className="space-y-1">
              <Label>Practice Area</Label>
              <Input
                value={createForm.practiceArea}
                onChange={(e) =>
                  setCreateForm((f) => ({
                    ...f,
                    practiceArea: e.target.value,
                  }))
                }
                placeholder="e.g. Family Law"
              />
            </div>
            <div className="space-y-1">
              <Label>Email Template</Label>
              <Select
                value={createForm.templateKey}
                onValueChange={(v) =>
                  setCreateForm((f) => ({ ...f, templateKey: v }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a template (optional)" />
                </SelectTrigger>
                <SelectContent>
                  {templates?.map((t) => (
                    <SelectItem key={t.key} value={t.key}>
                      {t.name} ({t.stepCount} steps)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleCreateCampaign}
              disabled={!createForm.name || createCampaign.isPending}
              className="w-full"
            >
              {createCampaign.isPending && (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              )}
              Create Campaign
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── Add Prospects Dialog ────────────────────────────────── */}
      <Dialog
        open={!!showAddProspects}
        onOpenChange={(open) => {
          if (!open) {
            setShowAddProspects(null);
            setSelectedProspectIds([]);
          }
        }}
      >
        <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add Prospects to Campaign</DialogTitle>
            <DialogDescription>
              Select prospects to include in this campaign.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            {allProspects?.map((p) => (
              <button
                key={p.id}
                onClick={() => toggleProspectSelection(p.id)}
                className={`w-full text-left flex items-center gap-3 rounded-lg border p-3 transition-all ${
                  selectedProspectIds.includes(p.id)
                    ? "border-primary bg-primary/5"
                    : "hover:border-primary/30"
                }`}
              >
                <div
                  className={`h-4 w-4 rounded border flex items-center justify-center ${
                    selectedProspectIds.includes(p.id)
                      ? "bg-primary border-primary"
                      : "border-muted-foreground/30"
                  }`}
                >
                  {selectedProspectIds.includes(p.id) && (
                    <CheckCircle2 className="h-3 w-3 text-primary-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{p.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {p.email ?? "No email"}{" "}
                    {p.company ? `- ${p.company}` : ""}
                  </p>
                </div>
              </button>
            ))}
            {(!allProspects || allProspects.length === 0) && (
              <p className="text-sm text-muted-foreground text-center py-4">
                No prospects available. Import or add prospects first.
              </p>
            )}
          </div>
          {selectedProspectIds.length > 0 && showAddProspects && (
            <Button
              onClick={() => handleAddProspects(showAddProspects)}
              disabled={addProspects.isPending}
              className="w-full"
            >
              {addProspects.isPending && (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              )}
              Add {selectedProspectIds.length} Prospect
              {selectedProspectIds.length !== 1 ? "s" : ""}
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ── Campaign Detail (expanded view) ──────────────────────────────

function CampaignDetail({
  campaignId,
  onAddProspects,
  onSendBatch,
  sendBatchPending,
}: {
  campaignId: string;
  onAddProspects: () => void;
  onSendBatch: () => void;
  sendBatchPending: boolean;
}) {
  const { data, isLoading } = trpc.outreach.getCampaign.useQuery({
    id: campaignId,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-6 border-t">
        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!data) return null;

  const prospectIds = new Set(data.sends.map((s) => s.prospectId));

  return (
    <div className="border-t p-4 space-y-4">
      {/* Steps */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Steps ({data.steps.length})
        </p>
        {data.steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center gap-3 rounded border bg-muted/20 p-2 text-sm"
          >
            <span className="flex-shrink-0 text-xs font-medium bg-muted rounded px-1.5 py-0.5">
              #{step.stepNumber}
            </span>
            <span className="flex-shrink-0">
              {step.channel === "linkedin" ? (
                <Linkedin className="h-3.5 w-3.5 text-blue-400" />
              ) : step.channel === "call" ? (
                <Phone className="h-3.5 w-3.5 text-green-400" />
              ) : (
                <Send className="h-3.5 w-3.5 text-muted-foreground" />
              )}
            </span>
            <span className="truncate flex-1">{step.subject}</span>
            <span className="text-xs text-muted-foreground flex-shrink-0">
              Day {step.delayDays}
            </span>
          </div>
        ))}
      </div>

      {/* Prospects count & actions */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Users className="h-3.5 w-3.5" />
          {prospectIds.size} prospect{prospectIds.size !== 1 ? "s" : ""}{" "}
          assigned
        </div>
        <Button variant="outline" size="sm" onClick={onAddProspects}>
          <Plus className="h-3 w-3 mr-1" /> Add Prospects
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onSendBatch}
          disabled={sendBatchPending}
        >
          {sendBatchPending ? (
            <Loader2 className="h-3 w-3 mr-1 animate-spin" />
          ) : (
            <Send className="h-3 w-3 mr-1" />
          )}
          Send Batch
        </Button>
      </div>
    </div>
  );
}

// ── Campaign Analytics Card ──────────────────────────────────────

function CampaignAnalytics({
  campaign,
}: {
  campaign: {
    id: string;
    name: string;
    totalSent: number;
    totalOpened: number;
    totalClicked: number;
    totalReplied: number;
  };
}) {
  const { data: stats } = trpc.outreach.campaignStats.useQuery({
    campaignId: campaign.id,
  });

  const funnelSteps = stats
    ? [
        { label: "Sent", count: stats.sent, pct: 100 },
        {
          label: "Opened",
          count: stats.opened,
          pct: stats.openRate,
        },
        {
          label: "Clicked",
          count: stats.clicked,
          pct: stats.clickRate,
        },
        {
          label: "Replied",
          count: stats.replied,
          pct: stats.replyRate,
        },
      ]
    : [];

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <p className="text-sm font-medium">{campaign.name}</p>

        {!stats && (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          </div>
        )}

        {stats && stats.total === 0 && (
          <p className="text-xs text-muted-foreground">No sends yet.</p>
        )}

        {stats && stats.total > 0 && (
          <div className="space-y-2">
            {funnelSteps.map((step) => (
              <div key={step.label} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{step.label}</span>
                  <span className="font-medium">
                    {step.count}{" "}
                    <span className="text-muted-foreground">
                      ({step.pct}%)
                    </span>
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-primary transition-all"
                    style={{ width: `${Math.max(step.pct, 0)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
