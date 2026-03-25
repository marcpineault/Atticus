"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

interface AssignDialogProps {
  docId: string;
  currentClientId?: string | null;
  currentMatterId?: string | null;
  onSuccess?: () => void;
  children: React.ReactNode;
}

export function AssignDialog({ docId, currentClientId, currentMatterId, onSuccess, children }: AssignDialogProps) {
  const [open, setOpen] = useState(false);
  const [clientId, setClientId] = useState(currentClientId ?? "");
  const [matterId, setMatterId] = useState(currentMatterId ?? "");

  const { data: clients } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery(
    clientId ? { clientId } : undefined,
    { enabled: !!clientId }
  );

  const assign = trpc.documents.updateAssignment.useMutation({
    onSuccess: () => {
      setOpen(false);
      onSuccess?.();
    },
  });

  function handleSave() {
    assign.mutate({
      id: docId,
      clientId: clientId || null,
      matterId: matterId || null,
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Assign Document</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-1.5">
            <Label>Client</Label>
            <Select value={clientId} onValueChange={(v) => { setClientId(v); setMatterId(""); }}>
              <SelectTrigger>
                <SelectValue placeholder="No client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">No client</SelectItem>
                {clients?.map(c => (
                  <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Matter (optional)</Label>
            <Select
              value={matterId}
              onValueChange={setMatterId}
              disabled={!clientId || !matters?.length}
            >
              <SelectTrigger>
                <SelectValue placeholder={!clientId ? "Select a client first" : "No matter"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">No matter</SelectItem>
                {matters?.map(m => (
                  <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} disabled={assign.isPending}>
            {assign.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
