"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Square, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface VoiceRecorderProps {
  onRecordingComplete: (file: File) => void;
}

type RecorderState = "idle" | "recording" | "stopping" | "done" | "error";

export function VoiceRecorder({ onRecordingComplete }: VoiceRecorderProps) {
  const [state, setState] = useState<RecorderState>("idle");
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = useCallback(async () => {
    setError(null);
    setState("idle");
    chunksRef.current = [];

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setError("Microphone access denied. Allow microphone access in your browser settings.");
      setState("error");
      return;
    }

    streamRef.current = stream;

    const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
      ? "audio/webm;codecs=opus"
      : MediaRecorder.isTypeSupported("audio/webm")
        ? "audio/webm"
        : "audio/mp4";

    const recorder = new MediaRecorder(stream, { mimeType });
    mediaRecorderRef.current = recorder;

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    recorder.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      streamRef.current = null;
      if (timerRef.current) clearInterval(timerRef.current);

      const blob = new Blob(chunksRef.current, { type: mimeType });
      const ext = mimeType.includes("webm") ? "webm" : "mp4";
      const timestamp = new Date().toISOString().slice(0, 16).replace("T", "-").replace(":", "");
      const file = new File([blob], `voice-memo-${timestamp}.${ext}`, { type: mimeType });
      onRecordingComplete(file);
      setState("done");
    };

    recorder.start(1000); // collect data every 1s
    setState("recording");

    setDuration(0);
    timerRef.current = setInterval(() => setDuration(d => d + 1), 1000);
  }, [onRecordingComplete]);

  const stopRecording = useCallback(() => {
    setState("stopping");
    mediaRecorderRef.current?.stop();
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const formatDuration = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="rounded-lg border bg-muted/30 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Voice Memo</p>
        {state === "recording" && (
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-mono text-red-600">{formatDuration(duration)}</span>
          </div>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {state === "done" && (
        <div className="flex items-center gap-2 text-sm text-green-600">
          <CheckCircle2 className="h-4 w-4" />
          <span>Recording added. Configure settings above and click Upload.</span>
        </div>
      )}

      <div className="flex gap-2">
        {state === "idle" || state === "error" ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={startRecording}
            className="gap-2"
          >
            <Mic className="h-4 w-4 text-red-500" />
            Start Recording
          </Button>
        ) : state === "recording" ? (
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={stopRecording}
            className="gap-2"
          >
            <Square className="h-4 w-4" />
            Stop ({formatDuration(duration)})
          </Button>
        ) : state === "stopping" ? (
          <Button type="button" variant="outline" size="sm" disabled>
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            Processing…
          </Button>
        ) : null}

        {state === "done" && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => { setState("idle"); setDuration(0); }}
          >
            Record Again
          </Button>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        Record client meetings, voice memos, or quick notes. Transcribed automatically by AI.
      </p>
    </div>
  );
}
