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
import { AlertTriangle, CheckCircle2, Loader2, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ClientFormProps {
  trigger: React.ReactNode;
  client?: {
    id: string;
    name: string;
    email?: string | null;
    phone?: string | null;
    company?: string | null;
  };
  onSuccess?: () => void;
}

type ConflictResult = {
  hasConflict: boolean;
  conflicts: Array<{ name: string; reason: string; severity: string }>;
  summary: string;
};

export function ClientForm({ trigger, client, onSuccess }: ClientFormProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(client?.name ?? "");
  const [email, setEmail] = useState(client?.email ?? "");
  const [phone, setPhone] = useState(client?.phone ?? "");
  const [company, setCompany] = useState(client?.company ?? "");
  const [error, setError] = useState<string | null>(null);
  const [conflictResult, setConflictResult] = useState<ConflictResult | null>(null);
  const [conflictChecked, setConflictChecked] = useState(false);

  const utils = trpc.useUtils();

  const createClient = trpc.clients.create.useMutation({
    onSuccess: () => {
      utils.clients.list.invalidate();
      utils.clients.listWithStats.invalidate();
      handleClose();
      onSuccess?.();
    },
    onError: (err) => setError(err.message),
  });

  const updateClient = trpc.clients.update.useMutation({
    onSuccess: () => {
      utils.clients.list.invalidate();
      utils.clients.listWithStats.invalidate();
      if (client) utils.clients.getById.invalidate({ id: client.id });
      handleClose();
      onSuccess?.();
    },
    onError: (err) => setError(err.message),
  });

  const checkConflict = trpc.clients.checkConflict.useMutation({
    onSuccess: (result) => {
      setConflictResult(result);
      setConflictChecked(true);
    },
    onError: (err) => setError(err.message),
  });

  const handleClose = () => {
    setOpen(false);
    setError(null);
    setConflictResult(null);
    setConflictChecked(false);
    if (!client) {
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
    }
  };

  const handleCheckConflict = () => {
    if (!name.trim()) { setError("Name is required to check conflicts"); return; }
    setError(null);
    checkConflict.mutate({
      name: name.trim(),
      company: company.trim() || undefined,
      excludeClientId: client?.id,
    });
  };

  const handleSave = () => {
    setError(null);
    if (!name.trim()) { setError("Name is required"); return; }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    const payload = {
      name: name.trim(),
      email: email.trim() || undefined,
      phone: phone.trim() || undefined,
      company: company.trim() || undefined,
    };
    if (client) {
      updateClient.mutate({ id: client.id, ...payload });
    } else {
      createClient.mutate(payload);
    }
  };

  const isPending = createClient.isPending || updateClient.isPending;
  const isEditing = !!client;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); else setOpen(true); }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Client" : "Add Client"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => { setName(e.target.value); setConflictChecked(false); setConflictResult(null); }}
              placeholder="Full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => { setCompany(e.target.value); setConflictChecked(false); setConflictResult(null); }}
              placeholder="Company or organization name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* Conflict check — only for new clients */}
          {!isEditing && (
            <div className="border rounded-lg p-3 space-y-3 bg-muted/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <ShieldAlert className="h-4 w-4 text-amber-500" />
                  Conflict of Interest Check
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleCheckConflict}
                  disabled={!name.trim() || checkConflict.isPending}
                >
                  {checkConflict.isPending ? (
                    <><Loader2 className="h-3 w-3 animate-spin mr-1" />Checking&#8230;</>
                  ) : conflictChecked ? "Re-check" : "Check"}
                </Button>
              </div>

              {conflictResult && (
                <div className="space-y-2">
                  {conflictResult.hasConflict ? (
                    <>
                      <div className="flex items-start gap-2 text-amber-700 bg-amber-50 rounded p-2">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <p className="text-xs">{conflictResult.summary}</p>
                      </div>
                      {conflictResult.conflicts.map((c, i) => (
                        <div key={i} className="text-xs border rounded p-2 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{c.name}</span>
                            <Badge
                              variant={c.severity === "high" ? "destructive" : "secondary"}
                              className="text-[10px] h-4"
                            >
                              {c.severity}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{c.reason}</p>
                        </div>
                      ))}
                      <p className="text-xs text-muted-foreground">You may still proceed if you have confirmed no conflict exists.</p>
                    </>
                  ) : (
                    <div className="flex items-center gap-2 text-green-700 bg-green-50 rounded p-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      <p className="text-xs">No conflicts found. {conflictResult.summary}</p>
                    </div>
                  )}
                </div>
              )}

              {!conflictChecked && (
                <p className="text-xs text-muted-foreground">
                  AI-powered check against your existing clients and extracted parties. Required before accepting new clients under LSO rules.
                </p>
              )}
            </div>
          )}

          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <DialogFooter className="mt-2">
          <Button type="button" variant="outline" onClick={handleClose} disabled={isPending}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            disabled={isPending || (!isEditing && !conflictChecked)}
            title={!isEditing && !conflictChecked ? "Run conflict check before saving" : undefined}
          >
            {isPending
              ? "Saving..."
              : isEditing
                ? "Save Changes"
                : conflictResult?.hasConflict
                  ? "Add Anyway"
                  : "Add Client"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
