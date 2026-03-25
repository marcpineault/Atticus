"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Loader2, Plus } from "lucide-react";

function parseTime(input: string): number | null {
  const trimmed = input.trim();
  if (/^\d+$/.test(trimmed)) return parseInt(trimmed);
  const decimal = parseFloat(trimmed);
  if (!isNaN(decimal) && trimmed.includes(".")) return Math.round(decimal * 60);
  const hhmm = trimmed.match(/^(\d+):(\d{1,2})$/);
  if (hhmm) return parseInt(hhmm[1]!) * 60 + parseInt(hhmm[2]!);
  const hm = trimmed.match(/^(\d+)h(?:(\d+)m?)?$/i);
  if (hm) return parseInt(hm[1]!) * 60 + parseInt(hm[2] ?? "0");
  const h = trimmed.match(/^(\d+(?:\.\d+)?)h$/i);
  if (h) return Math.round(parseFloat(h[1]!) * 60);
  return null;
}

function minutesToHhmm(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}:${m.toString().padStart(2, "0")}`;
}

export function GlobalLogTime() {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [clientId, setClientId] = useState("");
  const [matterId, setMatterId] = useState("");

  const { data: clients } = trpc.clients.list.useQuery(undefined, { enabled: open });
  const { data: matters } = trpc.matters.list.useQuery(
    { clientId: clientId || undefined },
    { enabled: open && !!clientId }
  );

  const utils = trpc.useUtils();
  const create = trpc.timeEntries.create.useMutation({
    onSuccess: () => {
      setOpen(false);
      setDescription("");
      setTimeInput("");
      setDate(new Date().toISOString().slice(0, 10));
      setClientId("");
      setMatterId("");
      utils.timeEntries.list.invalidate();
    },
  });

  const minutes = parseTime(timeInput);
  const isValid = description.trim() && minutes !== null && minutes > 0;

  function handleSubmit() {
    if (!isValid || !minutes) return;
    create.mutate({
      description: description.trim(),
      minutes,
      clientId: clientId || undefined,
      matterId: matterId || undefined,
      entryDate: date,
    });
  }

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        className="gap-1.5"
        onClick={() => setOpen(true)}
      >
        <Clock className="h-3.5 w-3.5" />
        Log Time
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Log Billable Time</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Description *</Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Draft demand letter, client call, research…"
                autoFocus
                onKeyDown={(e) => { if (e.key === "Enter" && isValid) handleSubmit(); }}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Time *</Label>
              <Input
                value={timeInput}
                onChange={(e) => setTimeInput(e.target.value)}
                placeholder="e.g. 1.5, 1:30, 90, 1h30m"
              />
              {timeInput && minutes !== null && (
                <p className="text-xs text-muted-foreground">
                  = {minutesToHhmm(minutes)} ({minutes} min)
                </p>
              )}
              {timeInput && minutes === null && (
                <p className="text-xs text-destructive">Invalid time format</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Client (optional)</Label>
                <Select
                  value={clientId}
                  onValueChange={(v) => { setClientId(v === "none" ? "" : v); setMatterId(""); }}
                >
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="Any client" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Any client</SelectItem>
                    {clients?.map(c => (
                      <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {clientId && matters && matters.length > 0 && (
                <div className="space-y-1.5">
                  <Label>Matter (optional)</Label>
                  <Select value={matterId} onValueChange={(v) => setMatterId(v === "none" ? "" : v)}>
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder="Any matter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Any matter</SelectItem>
                      {matters.map(m => (
                        <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>Date</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <Button
              className="w-full"
              disabled={!isValid || create.isPending}
              onClick={handleSubmit}
            >
              {create.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Plus className="mr-2 h-4 w-4" />
              )}
              Log Time
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
