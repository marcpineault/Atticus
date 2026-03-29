"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
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
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Loader2,
  Target,
  DollarSign,
  TrendingUp,
  Users,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  Calendar,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const STAGES = [
  { value: "lead", label: "Lead", color: "bg-blue-500" },
  { value: "consultation_booked", label: "Consultation Booked", color: "bg-yellow-500" },
  { value: "consultation_done", label: "Consultation Done", color: "bg-orange-500" },
  { value: "proposal_sent", label: "Proposal Sent", color: "bg-violet-500" },
  { value: "won", label: "Won", color: "bg-green-500" },
  { value: "lost", label: "Lost", color: "bg-red-500" },
] as const;

const SOURCES = [
  { value: "website", label: "Website" },
  { value: "referral", label: "Referral" },
  { value: "social_media", label: "Social Media" },
  { value: "cold_call", label: "Cold Call" },
  { value: "networking", label: "Networking" },
  { value: "other", label: "Other" },
] as const;

type Stage = typeof STAGES[number]["value"];

export default function ProspectsPage() {
  const utils = trpc.useUtils();
  const { data: allProspects, isLoading } = trpc.prospects.list.useQuery();
  const { data: stats } = trpc.prospects.stats.useQuery();
  const createProspect = trpc.prospects.create.useMutation({ onSuccess: () => utils.prospects.invalidate() });
  const updateProspect = trpc.prospects.update.useMutation({ onSuccess: () => utils.prospects.invalidate() });
  const deleteProspect = trpc.prospects.delete.useMutation({ onSuccess: () => utils.prospects.invalidate() });
  const generateStrategy = trpc.prospects.generateStrategy.useMutation({ onSuccess: () => utils.prospects.invalidate() });
  const convertToClient = trpc.prospects.convertToClient.useMutation({ onSuccess: () => utils.prospects.invalidate() });

  const [showCreate, setShowCreate] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showConvert, setShowConvert] = useState(false);
  const [convertTitle, setConvertTitle] = useState("");
  const [view, setView] = useState<"pipeline" | "list">("pipeline");
  const [expandedStrategy, setExpandedStrategy] = useState<string | null>(null);

  // Create form state
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", practiceArea: "",
    source: "other" as typeof SOURCES[number]["value"],
    estimatedValue: "", notes: "", nextFollowUp: "",
  });

  const selected = allProspects?.find(p => p.id === selectedId);
  const activeStages: Stage[] = ["lead", "consultation_booked", "consultation_done", "proposal_sent"];

  function resetForm() {
    setForm({ name: "", email: "", phone: "", company: "", practiceArea: "", source: "other", estimatedValue: "", notes: "", nextFollowUp: "" });
  }

  async function handleCreate() {
    await createProspect.mutateAsync({
      name: form.name,
      email: form.email || undefined,
      phone: form.phone || undefined,
      company: form.company || undefined,
      practiceArea: form.practiceArea || undefined,
      source: form.source,
      estimatedValue: form.estimatedValue ? parseInt(form.estimatedValue) : undefined,
      notes: form.notes || undefined,
      nextFollowUp: form.nextFollowUp || undefined,
    });
    setShowCreate(false);
    resetForm();
  }

  async function handleStageChange(id: string, stage: Stage) {
    await updateProspect.mutateAsync({ id, stage });
  }

  async function handleConvert() {
    if (!selectedId || !convertTitle) return;
    await convertToClient.mutateAsync({
      id: selectedId,
      matterTitle: convertTitle,
    });
    setShowConvert(false);
    setSelectedId(null);
    setConvertTitle("");
  }

  function getStageProspects(stage: Stage) {
    return allProspects?.filter(p => p.stage === stage) ?? [];
  }

  function formatDate(d: Date | string | null) {
    if (!d) return null;
    return new Date(d).toLocaleDateString("en-CA", { month: "short", day: "numeric" });
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Prospects</h1>
          <p className="text-muted-foreground">Track leads and win new clients.</p>
        </div>
        <div className="flex gap-2">
          <div className="flex rounded-md border">
            <button
              onClick={() => setView("pipeline")}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${view === "pipeline" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
            >
              Pipeline
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${view === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
            >
              List
            </button>
          </div>
          <Button onClick={() => setShowCreate(true)}>
            <Plus className="h-4 w-4 mr-1" /> Add Prospect
          </Button>
        </div>
      </div>

      {/* Stats cards */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                <Target className="h-3.5 w-3.5" /> Pipeline
              </div>
              <p className="text-xl font-semibold">{stats.total - (stats.byStage?.won ?? 0) - stats.lostCount}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                <DollarSign className="h-3.5 w-3.5" /> Pipeline Value
              </div>
              <p className="text-xl font-semibold">${stats.totalPipelineValue.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                <TrendingUp className="h-3.5 w-3.5" /> Won
              </div>
              <p className="text-xl font-semibold">${stats.wonValue.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
                <Users className="h-3.5 w-3.5" /> Conversion
              </div>
              <p className="text-xl font-semibold">{stats.conversionRate}%</p>
            </CardContent>
          </Card>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      )}

      {/* Pipeline View */}
      {view === "pipeline" && !isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeStages.map(stage => {
            const stageInfo = STAGES.find(s => s.value === stage)!;
            const prospects = getStageProspects(stage);
            return (
              <div key={stage} className="space-y-2">
                <div className="flex items-center gap-2 px-1">
                  <div className={`h-2 w-2 rounded-full ${stageInfo.color}`} />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {stageInfo.label}
                  </span>
                  <span className="text-xs text-muted-foreground">({prospects.length})</span>
                </div>
                <div className="space-y-2 min-h-[100px]">
                  {prospects.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedId(p.id)}
                      className="w-full text-left rounded-lg border bg-card p-3 hover:border-primary/30 hover:shadow-sm transition-all"
                    >
                      <p className="text-sm font-medium truncate">
                        {p.name}
                        {p.source === "lso_directory" && (
                          <Badge variant="outline" className="ml-1.5 text-xs px-1 py-0 align-middle">LSO</Badge>
                        )}
                      </p>
                      {p.company && <p className="text-xs text-muted-foreground truncate">{p.company}</p>}
                      <div className="flex items-center justify-between mt-2">
                        {p.practiceArea && (
                          <span className="text-xs bg-muted px-1.5 py-0.5 rounded">{p.practiceArea}</span>
                        )}
                        {p.estimatedValue && (
                          <span className="text-xs font-medium text-green-600">${p.estimatedValue.toLocaleString()}</span>
                        )}
                      </div>
                      {p.nextFollowUp && (
                        <div className="flex items-center gap-1 mt-1.5 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          Follow up: {formatDate(p.nextFollowUp)}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* List View */}
      {view === "list" && !isLoading && (
        <div className="space-y-2">
          {allProspects?.map(p => {
            const stageInfo = STAGES.find(s => s.value === p.stage)!;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className="w-full text-left flex items-center gap-4 rounded-lg border bg-card p-3 hover:border-primary/30 transition-all"
              >
                <div className={`h-2 w-2 rounded-full flex-shrink-0 ${stageInfo.color}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">
                    {p.name}
                    {p.source === "lso_directory" && (
                      <Badge variant="outline" className="ml-1.5 text-xs px-1 py-0 align-middle">LSO</Badge>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {p.company ? `${p.company} — ` : ""}{p.practiceArea ?? "No practice area"} — {stageInfo.label}
                  </p>
                </div>
                {p.estimatedValue && (
                  <span className="text-sm font-medium text-green-600">${p.estimatedValue.toLocaleString()}</span>
                )}
                {p.nextFollowUp && (
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {formatDate(p.nextFollowUp)}
                  </span>
                )}
              </button>
            );
          })}
          {allProspects?.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Target className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No prospects yet. Add your first lead to get started.</p>
            </div>
          )}
        </div>
      )}

      {/* Create Dialog */}
      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Prospect</DialogTitle>
            <DialogDescription>Track a new potential client.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label>Name *</Label>
              <Input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="e.g. John Smith" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label>Email</Label>
                <Input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="john@example.com" />
              </div>
              <div className="space-y-1">
                <Label>Phone</Label>
                <Input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="416-555-0000" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label>Company</Label>
                <Input value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
              </div>
              <div className="space-y-1">
                <Label>Practice Area</Label>
                <Input value={form.practiceArea} onChange={e => setForm(f => ({ ...f, practiceArea: e.target.value }))} placeholder="e.g. Family Law" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label>Source</Label>
                <Select value={form.source} onValueChange={v => setForm(f => ({ ...f, source: v as typeof form.source }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {SOURCES.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label>Estimated Value ($)</Label>
                <Input type="number" value={form.estimatedValue} onChange={e => setForm(f => ({ ...f, estimatedValue: e.target.value }))} placeholder="5000" />
              </div>
            </div>
            <div className="space-y-1">
              <Label>Next Follow-Up</Label>
              <Input type="date" value={form.nextFollowUp} onChange={e => setForm(f => ({ ...f, nextFollowUp: e.target.value }))} />
            </div>
            <div className="space-y-1">
              <Label>Notes</Label>
              <Textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} rows={2} placeholder="How did they find you? What do they need?" />
            </div>
            <Button onClick={handleCreate} disabled={!form.name || createProspect.isPending} className="w-full">
              {createProspect.isPending && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Add Prospect
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Detail / Edit Dialog */}
      <Dialog open={!!selectedId && !showConvert} onOpenChange={open => { if (!open) setSelectedId(null); }}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {selected.name}
                  {selected.company && <span className="text-sm font-normal text-muted-foreground">({selected.company})</span>}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-3 flex-wrap">
                  {selected.practiceArea && <span className="bg-muted px-2 py-0.5 rounded text-xs">{selected.practiceArea}</span>}
                  {selected.estimatedValue && <span className="text-xs font-medium text-green-600">${selected.estimatedValue.toLocaleString()}</span>}
                  <span className="text-xs">{SOURCES.find(s => s.value === selected.source)?.label}</span>
                </DialogDescription>
              </DialogHeader>

              {/* Contact info */}
              <div className="flex gap-4 text-xs text-muted-foreground">
                {selected.email && <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{selected.email}</span>}
                {selected.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{selected.phone}</span>}
              </div>

              {/* Stage selector */}
              <div className="space-y-1.5">
                <Label className="text-xs">Stage</Label>
                <Select value={selected.stage} onValueChange={v => handleStageChange(selected.id, v as Stage)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {STAGES.map(s => (
                      <SelectItem key={s.value} value={s.value}>
                        <span className="flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${s.color}`} />
                          {s.label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Notes */}
              {selected.notes && (
                <div className="space-y-1">
                  <Label className="text-xs">Notes</Label>
                  <p className="text-sm text-muted-foreground">{selected.notes}</p>
                </div>
              )}

              {/* Consultation notes */}
              <div className="space-y-1.5">
                <Label className="text-xs">Consultation Notes</Label>
                <Textarea
                  defaultValue={selected.consultationNotes ?? ""}
                  onBlur={e => {
                    if (e.target.value !== (selected.consultationNotes ?? "")) {
                      updateProspect.mutate({ id: selected.id, consultationNotes: e.target.value || null });
                    }
                  }}
                  rows={3}
                  placeholder="Notes from the initial consultation..."
                />
              </div>

              {/* AI Strategy */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-primary" /> AI Win Strategy
                  </Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => generateStrategy.mutate({ id: selected.id })}
                    disabled={generateStrategy.isPending}
                  >
                    {generateStrategy.isPending ? (
                      <><Loader2 className="h-3 w-3 mr-1 animate-spin" /> Generating...</>
                    ) : (
                      <><Sparkles className="h-3 w-3 mr-1" /> {selected.aiStrategy ? "Regenerate" : "Generate Strategy"}</>
                    )}
                  </Button>
                </div>
                {selected.aiStrategy && (
                  <div className="rounded-lg border bg-muted/30 p-3">
                    <div
                      className={`text-sm prose prose-sm dark:prose-invert max-w-none ${expandedStrategy === selected.id ? "" : "line-clamp-6"}`}
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {selected.aiStrategy}
                    </div>
                    <button
                      onClick={() => setExpandedStrategy(expandedStrategy === selected.id ? null : selected.id)}
                      className="text-xs text-primary mt-2 flex items-center gap-1"
                    >
                      {expandedStrategy === selected.id ? (
                        <><ChevronUp className="h-3 w-3" /> Show less</>
                      ) : (
                        <><ChevronDown className="h-3 w-3" /> Show full strategy</>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2 border-t">
                {selected.stage !== "won" && selected.stage !== "lost" && (
                  <Button onClick={() => { setShowConvert(true); setConvertTitle(selected.practiceArea ? `${selected.name} — ${selected.practiceArea}` : ""); }}>
                    <ArrowRight className="h-4 w-4 mr-1" /> Convert to Client
                  </Button>
                )}
                {selected.stage !== "lost" && selected.stage !== "won" && (
                  <Button variant="outline" onClick={() => handleStageChange(selected.id, "lost")}>
                    Mark Lost
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto text-destructive hover:text-destructive"
                  onClick={() => { deleteProspect.mutate({ id: selected.id }); setSelectedId(null); }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Convert to Client Dialog */}
      <Dialog open={showConvert} onOpenChange={open => { if (!open) setShowConvert(false); }}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Convert to Client</DialogTitle>
            <DialogDescription>
              This will create a new client and matter from {selected?.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label>Matter Title *</Label>
              <Input
                value={convertTitle}
                onChange={e => setConvertTitle(e.target.value)}
                placeholder="e.g. Smith — Real Estate Purchase"
              />
            </div>
            <Button onClick={handleConvert} disabled={!convertTitle || convertToClient.isPending} className="w-full">
              {convertToClient.isPending && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Create Client & Matter
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
