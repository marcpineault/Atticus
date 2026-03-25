"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
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

interface MatterFormProps {
  trigger: React.ReactNode;
  clientId?: string;
  matter?: {
    id: string;
    title: string;
    description?: string | null;
    status: "active" | "pending" | "closed";
    hourlyRate?: number | null;
  };
  onSuccess?: () => void;
}

export function MatterForm({ trigger, clientId, matter, onSuccess }: MatterFormProps) {
  const isEdit = !!matter;
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(matter?.title ?? "");
  const [description, setDescription] = useState(matter?.description ?? "");
  const [selectedClientId, setSelectedClientId] = useState(clientId ?? "");
  const [hourlyRate, setHourlyRate] = useState(matter?.hourlyRate?.toString() ?? "");
  const [templateId, setTemplateId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const utils = trpc.useUtils();
  const { data: clients } = trpc.clients.list.useQuery({ enabled: !isEdit && !clientId } as never);
  const { data: templates } = trpc.matters.listTemplates.useQuery(undefined, { enabled: !isEdit });

  const createMatter = trpc.matters.create.useMutation({
    onSuccess: () => {
      utils.matters.list.invalidate();
      utils.matters.listWithStats.invalidate();
      handleClose();
      onSuccess?.();
    },
    onError: (err) => setError(err.message),
  });

  const createWithTemplate = trpc.matters.createWithTemplate.useMutation({
    onSuccess: () => {
      utils.matters.list.invalidate();
      utils.matters.listWithStats.invalidate();
      utils.documents.listDeadlines.invalidate();
      handleClose();
      onSuccess?.();
    },
    onError: (err) => setError(err.message),
  });

  const updateMatter = trpc.matters.update.useMutation({
    onSuccess: () => {
      utils.matters.list.invalidate();
      utils.matters.listWithStats.invalidate();
      if (matter) utils.matters.getById.invalidate({ id: matter.id });
      handleClose();
      onSuccess?.();
    },
    onError: (err) => setError(err.message),
  });

  const handleClose = () => {
    setOpen(false);
    setError(null);
    if (!isEdit) {
      setTitle("");
      setDescription("");
      setHourlyRate("");
      setTemplateId("");
      if (!clientId) setSelectedClientId("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    const parsedRate = hourlyRate.trim() ? parseInt(hourlyRate.trim()) : undefined;
    if (parsedRate !== undefined && (isNaN(parsedRate) || parsedRate < 0)) {
      setError("Hourly rate must be a positive number");
      return;
    }

    if (isEdit) {
      updateMatter.mutate({
        id: matter.id,
        title: title.trim(),
        description: description.trim() || undefined,
        hourlyRate: parsedRate ?? null,
      });
    } else {
      if (!selectedClientId) {
        setError("Please select a client");
        return;
      }
      const baseInput = {
        clientId: selectedClientId,
        title: title.trim(),
        description: description.trim() || undefined,
        hourlyRate: parsedRate,
      };
      if (templateId) {
        createWithTemplate.mutate({ ...baseInput, templateId });
      } else {
        createMatter.mutate(baseInput);
      }
    }
  };

  const isPending = createMatter.isPending || updateMatter.isPending || createWithTemplate.isPending;

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) handleClose();
        else {
          setTitle(matter?.title ?? "");
          setDescription(matter?.description ?? "");
          setHourlyRate(matter?.hourlyRate?.toString() ?? "");
          setTemplateId("");
          setOpen(true);
        }
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Matter" : "Create Matter"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isEdit && !clientId && (
            <div className="space-y-2">
              <Label htmlFor="client">Client *</Label>
              <Select value={selectedClientId} onValueChange={setSelectedClientId}>
                <SelectTrigger id="client">
                  <SelectValue placeholder="Select a client" />
                </SelectTrigger>
                <SelectContent>
                  {clients?.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.name}
                      {client.company ? ` — ${client.company}` : ""}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          {!isEdit && templates && templates.length > 0 && (
            <div className="space-y-2">
              <Label>Template (optional)</Label>
              <Select
                value={templateId || "none"}
                onValueChange={(v) => {
                  const tid = v === "none" ? "" : v;
                  setTemplateId(tid);
                  if (tid) {
                    const t = templates.find(t => t.id === tid);
                    if (t) {
                      if (!title) setTitle(t.name);
                      if (!description) setDescription(t.description);
                    }
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Start from scratch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Start from scratch</SelectItem>
                  {templates.map((t) => (
                    <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {templateId && (
                <p className="text-xs text-muted-foreground">
                  A checklist of action items will be pre-populated for this matter.
                </p>
              )}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Matter title"
              required
              autoFocus={isEdit}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the matter"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hourlyRate">Hourly Rate Override ($/hr)</Label>
            <Input
              id="hourlyRate"
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              placeholder="Leave blank to use your default rate"
              min={0}
              max={10000}
            />
            <p className="text-xs text-muted-foreground">Override your default rate for billing calculations on this matter.</p>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : isEdit ? "Save Changes" : "Create Matter"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
