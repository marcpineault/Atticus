"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mic, Square, Pause, Play, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import Link from "next/link";

type RecorderState =
  | "idle"
  | "requesting"
  | "recording"
  | "paused"
  | "stopping"
  | "uploading"
  | "done"
  | "error";

const WARN_SECONDS = 40 * 60; // warn at 40 min (32kbps × 40 min ≈ 9.6 MB, well under 24 MB limit)

export function MeetingRecorder() {
  const [state, setState] = useState<RecorderState>("idle");
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [selectedClientId, setSelectedClientId] = useState("");
  const [selectedMatterId, setSelectedMatterId] = useState("");

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const mimeTypeRef = useRef<string>("audio/webm");

  const { data: clients } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery(
    selectedClientId ? { clientId: selectedClientId } : undefined
  );

  const formatDuration = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
  };

  const uploadRecording = useCallback(
    async (file: File) => {
      setState("uploading");
      const formData = new FormData();
      formData.append("file", file);
      const metadata: Record<string, string> = { documentType: "meeting" };
      if (selectedClientId) metadata.clientId = selectedClientId;
      if (selectedMatterId) metadata.matterId = selectedMatterId;
      formData.append("metadata", JSON.stringify(metadata));

      try {
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: "Upload failed" }));
          throw new Error((err as { error?: string }).error ?? "Upload failed");
        }
        setState("done");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
        setState("error");
      }
    },
    [selectedClientId, selectedMatterId]
  );

  const startRecording = useCallback(async () => {
    setError(null);
    setState("requesting");
    chunksRef.current = [];

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setError(
        "Microphone access denied. Allow microphone access in your browser settings."
      );
      setState("error");
      return;
    }

    streamRef.current = stream;

    const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
      ? "audio/webm;codecs=opus"
      : MediaRecorder.isTypeSupported("audio/webm")
        ? "audio/webm"
        : "audio/mp4";
    mimeTypeRef.current = mimeType;

    // 32 kbps keeps a 45-minute recording under 11 MB — well within Whisper's 25 MB limit
    const recorder = new MediaRecorder(stream, {
      mimeType,
      audioBitsPerSecond: 32_000,
    });
    mediaRecorderRef.current = recorder;

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    recorder.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      if (timerRef.current) clearInterval(timerRef.current);

      const blob = new Blob(chunksRef.current, { type: mimeTypeRef.current });
      const ext = mimeTypeRef.current.includes("webm") ? "webm" : "mp4";
      const timestamp = new Date()
        .toISOString()
        .slice(0, 16)
        .replace("T", "-")
        .replace(":", "");
      const file = new File([blob], `meeting-${timestamp}.${ext}`, {
        type: mimeTypeRef.current,
      });
      void uploadRecording(file);
    };

    recorder.start(1000);
    setState("recording");

    setDuration(0);
    timerRef.current = setInterval(() => setDuration((d) => d + 1), 1000);
  }, [uploadRecording]);

  const pauseRecording = useCallback(() => {
    mediaRecorderRef.current?.pause();
    if (timerRef.current) clearInterval(timerRef.current);
    setState("paused");
  }, []);

  const resumeRecording = useCallback(() => {
    mediaRecorderRef.current?.resume();
    setState("recording");
    timerRef.current = setInterval(() => setDuration((d) => d + 1), 1000);
  }, []);

  const stopRecording = useCallback(() => {
    setState("stopping");
    if (timerRef.current) clearInterval(timerRef.current);
    mediaRecorderRef.current?.stop();
  }, []);

  const reset = () => {
    setState("idle");
    setDuration(0);
    setError(null);
    chunksRef.current = [];
  };

  const isActive = state === "recording" || state === "paused";
  const showWarning = duration >= WARN_SECONDS && isActive;

  return (
    <div className="space-y-6">
      {/* Client / Matter selectors */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label>Client (optional)</Label>
          <Select
            value={selectedClientId}
            onValueChange={(v) => {
              setSelectedClientId(v);
              setSelectedMatterId("");
            }}
            disabled={isActive}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a client…" />
            </SelectTrigger>
            <SelectContent>
              {clients?.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name}
                  {c.company ? ` — ${c.company}` : ""}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>Matter (optional)</Label>
          <Select
            value={selectedMatterId}
            onValueChange={setSelectedMatterId}
            disabled={!selectedClientId || !matters?.length || isActive}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={
                  !selectedClientId
                    ? "Select a client first"
                    : !matters?.length
                      ? "No matters for this client"
                      : "Select a matter…"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {matters?.map((m) => (
                <SelectItem key={m.id} value={m.id}>
                  {m.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Recording area */}
      <div className="rounded-xl border bg-muted/20 flex flex-col items-center gap-6 py-12 px-8">
        {/* Timer */}
        <div className="text-center">
          <p
            className={`text-6xl font-mono font-semibold tabular-nums tracking-tight ${
              state === "recording"
                ? "text-foreground"
                : state === "paused"
                  ? "text-amber-600"
                  : "text-muted-foreground/40"
            }`}
          >
            {formatDuration(duration)}
          </p>
          {state === "recording" && (
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm text-red-600 font-medium">Recording</span>
            </div>
          )}
          {state === "paused" && (
            <p className="text-sm text-amber-600 font-medium mt-3">Paused</p>
          )}
        </div>

        {/* Warning */}
        {showWarning && (
          <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-3 py-2">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span>Recording is getting long. Stop soon to stay within limits.</span>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center gap-3">
          {(state === "idle" || state === "error") && (
            <Button size="lg" onClick={startRecording} className="gap-2 px-8">
              <Mic className="h-5 w-5" />
              Start Recording
            </Button>
          )}

          {state === "requesting" && (
            <Button size="lg" disabled>
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              Requesting microphone…
            </Button>
          )}

          {state === "recording" && (
            <>
              <Button variant="outline" size="lg" onClick={pauseRecording} className="gap-2">
                <Pause className="h-5 w-5" />
                Pause
              </Button>
              <Button variant="destructive" size="lg" onClick={stopRecording} className="gap-2">
                <Square className="h-5 w-5" />
                Stop & Upload
              </Button>
            </>
          )}

          {state === "paused" && (
            <>
              <Button variant="outline" size="lg" onClick={resumeRecording} className="gap-2">
                <Play className="h-5 w-5" />
                Resume
              </Button>
              <Button variant="destructive" size="lg" onClick={stopRecording} className="gap-2">
                <Square className="h-5 w-5" />
                Stop & Upload
              </Button>
            </>
          )}

          {(state === "stopping" || state === "uploading") && (
            <Button size="lg" disabled>
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              {state === "stopping" ? "Finalizing…" : "Uploading…"}
            </Button>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Success */}
        {state === "done" && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">
                Uploaded — AI is transcribing and generating notes.
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={reset}>
                Record Another
              </Button>
              <Button size="sm" asChild>
                <Link href="/documents">View in Documents</Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Recorded at 32 kbps — up to ~45 minutes per session. Audio stays in your browser until uploaded.
      </p>
    </div>
  );
}
