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
  DialogTrigger,
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
import { Loader2, Plus } from "lucide-react";

const schema = z.object({
  type: z.enum(["deadline", "action_item"]),
  value: z.string().min(1, "Description is required").max(1000),
  context: z.string().max(2000).optional(),
  dueDate: z.string().optional(),
  clientId: z.string().uuid().optional(),
  matterId: z.string().uuid().optional(),
  recurrenceType: z.enum(["none", "weekly", "monthly", "yearly"]).optional(),
});

type FormValues = z.infer<typeof schema>;

interface AddDeadlineDialogProps {
  clientId?: string;
  matterId?: string;
  onCreated?: () => void;
  children?: React.ReactNode;
}

export function AddDeadlineDialog({ clientId, matterId, onCreated, children }: AddDeadlineDialogProps) {
  const [open, setOpen] = useState(false);
  const utils = trpc.useUtils();

  const { data: clients } = trpc.clients.list.useQuery(undefined, { enabled: open && !clientId });
  const { data: matters } = trpc.matters.list.useQuery(undefined, { enabled: open && !matterId });

  const createDeadline = trpc.documents.createManualDeadline.useMutation({
    onSuccess: () => {
      utils.documents.listDeadlines.invalidate();
      setOpen(false);
      reset();
      onCreated?.();
    },
  });

  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      type: "deadline",
      clientId: clientId,
      matterId: matterId,
    },
  });

  const selectedClientId = watch("clientId");
  const clientMatters = matters?.filter(m => !selectedClientId || m.clientId === selectedClientId);

  async function onSubmit(data: FormValues) {
    await createDeadline.mutateAsync({
      type: data.type,
      value: data.value,
      context: data.context || undefined,
      dueDate: data.dueDate ? new Date(data.dueDate).toISOString() : undefined,
      clientId: data.clientId || undefined,
      matterId: data.matterId || undefined,
      recurrenceType: data.recurrenceType && data.recurrenceType !== "none" ? data.recurrenceType as "weekly" | "monthly" | "yearly" : undefined,
    });
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
      <DialogTrigger asChild>
        {children ?? (
          <Button size="sm" variant="outline">
            <Plus className="h-3.5 w-3.5" />
            Add Deadline
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add Deadline / Action Item</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
          <div className="space-y-1.5">
            <Label>Type</Label>
            <Select
              defaultValue="deadline"
              onValueChange={(v) => setValue("type", v as "deadline" | "action_item")}
            >
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
            <Label htmlFor="value">Description</Label>
            <Input
              id="value"
              {...register("value")}
              placeholder="e.g. File statement of claim, Reply to discovery"
              autoFocus
            />
            {errors.value && (
              <p className="text-xs text-destructive">{errors.value.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              {...register("dueDate")}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="context">Notes (optional)</Label>
            <Textarea
              id="context"
              {...register("context")}
              placeholder="Additional context or notes…"
              rows={2}
              className="resize-none"
            />
          </div>

          <div className="space-y-1.5">
            <Label>Recurrence</Label>
            <Select
              defaultValue="none"
              onValueChange={(v) => setValue("recurrenceType", v as "none" | "weekly" | "monthly" | "yearly")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Does not repeat" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Does not repeat</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {!clientId && (
            <div className="space-y-1.5">
              <Label>Client (optional)</Label>
              <Select
                value={selectedClientId ?? "none"}
                onValueChange={(v) => {
                  setValue("clientId", v === "none" ? undefined : v);
                  setValue("matterId", undefined);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="No client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No client</SelectItem>
                  {clients?.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {!matterId && clientMatters && clientMatters.length > 0 && (
            <div className="space-y-1.5">
              <Label>Matter (optional)</Label>
              <Select
                defaultValue="none"
                onValueChange={(v) => setValue("matterId", v === "none" ? undefined : v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="No matter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No matter</SelectItem>
                  {clientMatters.map((m) => (
                    <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={createDeadline.isPending}>
              {createDeadline.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Add
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
