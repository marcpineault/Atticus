"use client";

import { useState, useRef } from "react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mic, Square, Send, Loader2, CheckCircle2, Upload } from "lucide-react";

export function QuickCapture() {
  const [content, setContent] = useState("");
  const [clientId, setClientId] = useState("");
  const [matterId, setMatterId] = useState("");
  const [recording, setRecording] = useState(false);
  const [uploadingAudio, setUploadingAudio] = useState(false);
  const [done, setDone] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const { data: clients } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery(
    { clientId: clientId || undefined },
    { enabled: !!clientId }
  );
  const utils = trpc.useUtils();

  const createNote = trpc.documents.createNote.useMutation({
    onSuccess: () => {
      setContent("");
      setClientId("");
      setMatterId("");
      setDone(true);
      setTimeout(() => setDone(false), 3000);
      utils.documents.list.invalidate();
    },
  });

  const handleSubmit = () => {
    if (!content.trim()) return;
    const lines = content.trim().split("\n");
    const firstLine = lines[0] ?? "Quick Note";
    const title = firstLine.slice(0, 80) + (firstLine.length > 80 ? "…" : "");
    createNote.mutate({
      content: content.trim(),
      title,
      clientId: clientId || undefined,
      matterId: matterId || undefined,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const startRecording = async () => {
    chunksRef.current = [];
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    recorder.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
    recorder.onstop = async () => {
      stream.getTracks().forEach(t => t.stop());
      setRecording(false);
      // Upload the audio blob for AI transcription
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      setUploadingAudio(true);
      try {
        const form = new FormData();
        const ts = new Date().toISOString().slice(0, 19).replace("T", "_").replace(/:/g, "-");
        form.append("file", new File([blob], `voice-memo-${ts}.webm`, { type: "audio/webm" }));
        const metadata = {
          documentType: "voice_note",
          clientId: clientId || undefined,
          matterId: matterId || undefined,
          title: `Voice Memo — ${new Date().toLocaleString("en-CA", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}`,
        };
        form.append("metadata", JSON.stringify(metadata));
        await fetch("/api/upload", { method: "POST", body: form });
        setDone(true);
        setTimeout(() => setDone(false), 4000);
        utils.documents.list.invalidate();
      } catch {
        // fallback: just note it in content
        setContent(prev => prev + (prev ? "\n\n" : "") + "[Voice memo recorded — processing failed, upload manually]");
      } finally {
        setUploadingAudio(false);
      }
    };
    recorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
  };

  if (uploadingAudio) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground py-2">
        <Upload className="h-4 w-4 animate-pulse" />
        Uploading voice memo for AI transcription…
      </div>
    );
  }

  if (done) {
    return (
      <div className="flex items-center gap-2 text-sm text-green-600 py-2">
        <CheckCircle2 className="h-4 w-4" />
        Captured and queued for AI processing.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Quick capture: type a note, meeting summary, or any thought about a client matter… (⌘Enter to save)"
        className="min-h-[80px] resize-none text-sm"
      />
      <div className="flex items-center gap-2 flex-wrap">
        <Select value={clientId} onValueChange={(v) => { setClientId(v === "none" ? "" : v); setMatterId(""); }}>
          <SelectTrigger className="h-8 text-xs w-[150px]">
            <SelectValue placeholder="Client…" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No client</SelectItem>
            {clients?.map(c => (
              <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {clientId && matters && matters.length > 0 && (
          <Select value={matterId} onValueChange={(v) => setMatterId(v === "none" ? "" : v)}>
            <SelectTrigger className="h-8 text-xs w-[150px]">
              <SelectValue placeholder="Matter…" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No matter</SelectItem>
              {matters.map(m => (
                <SelectItem key={m.id} value={m.id}>{m.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        <div className="flex-1" />
        {!recording ? (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs gap-1 text-muted-foreground"
            onClick={startRecording}
          >
            <Mic className="h-3.5 w-3.5" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs gap-1 text-red-500"
            onClick={stopRecording}
          >
            <Square className="h-3.5 w-3.5 fill-current" />
          </Button>
        )}
        <Button
          size="sm"
          className="h-8 text-xs gap-1"
          disabled={!content.trim() || createNote.isPending}
          onClick={handleSubmit}
        >
          {createNote.isPending ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Send className="h-3.5 w-3.5" />
          )}
          Capture
        </Button>
      </div>
    </div>
  );
}
