"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2, StickyNote } from "lucide-react";

interface NoteDialogProps {
  clientId?: string;
  matterId?: string;
  onCreated?: () => void;
  children?: React.ReactNode;
}

export function NoteDialog({ clientId, matterId, onCreated, children }: NoteDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNote = trpc.documents.createNote.useMutation({
    onSuccess: () => {
      setOpen(false);
      setTitle("");
      setContent("");
      onCreated?.();
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    createNote.mutate({
      title: title.trim(),
      content: content.trim(),
      clientId,
      matterId,
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ?? (
          <Button variant="outline" size="sm">
            <StickyNote className="mr-1.5 h-3.5 w-3.5" />
            Add Note
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Quick Note</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="note-title">Title</Label>
            <Input
              id="note-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Call with client re: settlement offer"
              autoFocus
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="note-content">Note</Label>
            <Textarea
              id="note-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note here. Entities, dates, action items, and deadlines will be extracted automatically."
              rows={6}
              className="resize-none"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!title.trim() || !content.trim() || createNote.isPending}
            >
              {createNote.isPending ? (
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
              ) : (
                <StickyNote className="mr-1.5 h-4 w-4" />
              )}
              Save & Process
            </Button>
          </div>
          {createNote.isError && (
            <p className="text-xs text-destructive">{createNote.error.message}</p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
