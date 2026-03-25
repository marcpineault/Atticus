"use client";

import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Clock, Loader2, Plus } from "lucide-react";

interface LogTimeDialogProps {
  matterId?: string;
  clientId?: string;
  onSuccess?: () => void;
  trigger?: React.ReactNode;
  initialMinutes?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function minutesToHhmm(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}:${m.toString().padStart(2, "0")}`;
}

function parseTime(input: string): number | null {
  // Accept: "1.5", "1:30", "90" (minutes), "1h30m", "1h"
  const trimmed = input.trim();
  if (/^\d+$/.test(trimmed)) return parseInt(trimmed); // raw minutes
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

export function LogTimeDialog({ matterId, clientId, onSuccess, trigger, initialMinutes, open: controlledOpen, onOpenChange: controlledOnOpenChange }: LogTimeDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = (v: boolean) => {
    setInternalOpen(v);
    controlledOnOpenChange?.(v);
  };
  const [description, setDescription] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    if (open && initialMinutes) {
      setTimeInput(String(initialMinutes));
    }
  }, [open, initialMinutes]);

  const create = trpc.timeEntries.create.useMutation({
    onSuccess: () => {
      setOpen(false);
      setDescription("");
      setTimeInput("");
      setDate(new Date().toISOString().slice(0, 10));
      onSuccess?.();
    },
  });

  const minutes = parseTime(timeInput);
  const isValid = description.trim() && minutes !== null && minutes > 0;

  function handleSubmit() {
    if (!isValid || !minutes) return;
    create.mutate({
      description: description.trim(),
      minutes,
      matterId,
      clientId,
      entryDate: date,
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="outline" size="sm">
            <Clock className="mr-1.5 h-3.5 w-3.5" />
            Log Time
          </Button>
        )}
      </DialogTrigger>
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
            />
          </div>
          <div className="space-y-1.5">
            <Label>Time *</Label>
            <Input
              value={timeInput}
              onChange={(e) => setTimeInput(e.target.value)}
              placeholder='e.g. 1.5, 1:30, 90, 1h30m'
            />
            {timeInput && minutes !== null && (
              <p className="text-xs text-muted-foreground">
                = {minutesToHhmm(minutes)} ({minutes} min)
              </p>
            )}
            {timeInput && minutes === null && (
              <p className="text-xs text-destructive">Invalid time format</p>
            )}
            <p className="text-xs text-muted-foreground">Accepts: hours (1.5), h:mm (1:30), minutes (90)</p>
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
  );
}
