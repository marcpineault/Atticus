"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { trpc } from "@/lib/trpc/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Plus, AlertTriangle, Clock } from "lucide-react";

// ----- Schemas -----

const deadlineSchema = z.object({
  type: z.enum(["deadline", "action_item"]),
  value: z.string().min(1, "Description is required").max(1000),
  dueDate: z.string().optional(),
  clientId: z.string().optional(),
  matterId: z.string().optional(),
});

const timeSchema = z.object({
  description: z.string().min(1, "Description is required").max(500),
  hours: z.number().min(0.1).max(24),
  clientId: z.string().optional(),
  matterId: z.string().optional(),
});

type DeadlineForm = z.infer<typeof deadlineSchema>;
type TimeForm = z.infer<typeof timeSchema>;

// ----- Sub-forms -----

function DeadlineTab({ onDone }: { onDone: () => void }) {
  const utils = trpc.useUtils();
  const { data: clients } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery();
  const createDeadline = trpc.documents.createManualDeadline.useMutation({
    onSuccess: () => {
      utils.documents.listDeadlines.invalidate();
      reset();
      onDone();
    },
  });

  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<DeadlineForm>({
    resolver: zodResolver(deadlineSchema),
    defaultValues: { type: "deadline" },
  });

  const selectedClientId = watch("clientId");
  const clientMatters = matters?.filter(m => !selectedClientId || selectedClientId === "none" || m.clientId === selectedClientId);

  return (
    <form
      onSubmit={handleSubmit((data) =>
        createDeadline.mutateAsync({
          type: data.type,
          value: data.value,
          dueDate: data.dueDate ? new Date(data.dueDate).toISOString() : undefined,
          clientId: data.clientId && data.clientId !== "none" ? data.clientId : undefined,
          matterId: data.matterId && data.matterId !== "none" ? data.matterId : undefined,
        })
      )}
      className="space-y-3 pt-2"
    >
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label>Type</Label>
          <Select defaultValue="deadline" onValueChange={(v) => setValue("type", v as "deadline" | "action_item")}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deadline">Deadline</SelectItem>
              <SelectItem value="action_item">Action Item</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="qc-dueDate">Due Date</Label>
          <Input id="qc-dueDate" type="date" {...register("dueDate")} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="qc-value">Description</Label>
        <Input
          id="qc-value"
          {...register("value")}
          placeholder="e.g. File statement of claim"
          autoFocus
        />
        {errors.value && <p className="text-xs text-destructive">{errors.value.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label>Client</Label>
          <Select
            value={selectedClientId ?? "none"}
            onValueChange={(v) => { setValue("clientId", v); setValue("matterId", "none"); }}
          >
            <SelectTrigger>
              <SelectValue placeholder="No client" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No client</SelectItem>
              {clients?.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>Matter</Label>
          <Select defaultValue="none" onValueChange={(v) => setValue("matterId", v)}>
            <SelectTrigger>
              <SelectValue placeholder="No matter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No matter</SelectItem>
              {clientMatters?.map((m) => <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end pt-1">
        <Button type="submit" disabled={createDeadline.isPending} size="sm">
          {createDeadline.isPending && <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />}
          Add Deadline
        </Button>
      </div>
    </form>
  );
}

function TimeTab({ onDone }: { onDone: () => void }) {
  const { data: clients } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery();
  const createTime = trpc.timeEntries.create.useMutation({
    onSuccess: () => {
      reset();
      onDone();
    },
  });

  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<TimeForm>({
    resolver: zodResolver(timeSchema),
    defaultValues: { hours: 1 },
  });

  const selectedClientId = watch("clientId");
  const clientMatters = matters?.filter(m => !selectedClientId || selectedClientId === "none" || m.clientId === selectedClientId);

  return (
    <form
      onSubmit={handleSubmit((data) =>
        createTime.mutateAsync({
          description: data.description,
          minutes: Math.round(data.hours * 60),
          clientId: data.clientId && data.clientId !== "none" ? data.clientId : undefined,
          matterId: data.matterId && data.matterId !== "none" ? data.matterId : undefined,
        })
      )}
      className="space-y-3 pt-2"
    >
      <div className="space-y-1.5">
        <Label htmlFor="qc-time-desc">Description</Label>
        <Textarea
          id="qc-time-desc"
          {...register("description")}
          placeholder="e.g. Reviewed discovery documents, client call"
          rows={2}
          className="resize-none"
          autoFocus
        />
        {errors.description && <p className="text-xs text-destructive">{errors.description.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="qc-hours">Hours</Label>
        <Input
          id="qc-hours"
          type="number"
          step="0.25"
          min="0.1"
          max="24"
          {...register("hours", { valueAsNumber: true })}
          placeholder="1.5"
        />
        {errors.hours && <p className="text-xs text-destructive">{errors.hours.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label>Client</Label>
          <Select
            value={selectedClientId ?? "none"}
            onValueChange={(v) => { setValue("clientId", v); setValue("matterId", "none"); }}
          >
            <SelectTrigger>
              <SelectValue placeholder="No client" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No client</SelectItem>
              {clients?.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>Matter</Label>
          <Select defaultValue="none" onValueChange={(v) => setValue("matterId", v)}>
            <SelectTrigger>
              <SelectValue placeholder="No matter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No matter</SelectItem>
              {clientMatters?.map((m) => <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end pt-1">
        <Button type="submit" disabled={createTime.isPending} size="sm">
          {createTime.isPending && <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />}
          Log Time
        </Button>
      </div>
    </form>
  );
}

// ----- Main FAB -----

export function QuickCapture() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("deadline");

  function handleDone() {
    setOpen(false);
    setTab("deadline");
  }

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl active:scale-95"
        aria-label="Quick capture"
      >
        <Plus className="h-5 w-5" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Quick Capture</DialogTitle>
          </DialogHeader>
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList className="w-full">
              <TabsTrigger value="deadline" className="flex-1 gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5" />
                Deadline
              </TabsTrigger>
              <TabsTrigger value="time" className="flex-1 gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                Time
              </TabsTrigger>
            </TabsList>
            <TabsContent value="deadline">
              <DeadlineTab onDone={handleDone} />
            </TabsContent>
            <TabsContent value="time">
              <TimeTab onDone={handleDone} />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}
