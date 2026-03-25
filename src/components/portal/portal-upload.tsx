"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

interface PortalUploadProps {
  token: string;
}

export function PortalUpload({ token }: PortalUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError(null);

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const res = await fetch(`/api/portal?token=${encodeURIComponent(token)}`, {
          method: "POST",
          body: formData,
        });
        if (!res.ok) {
          const { error: msg } = await res.json().catch(() => ({ error: "Upload failed" }));
          setError(msg ?? "Upload failed");
        } else {
          setUploaded(prev => [...prev, file.name]);
        }
      } catch {
        setError("Upload failed — please try again.");
      }
    }

    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <section>
      <h2 className="text-sm font-semibold mb-2">Send Documents to Your Lawyer</h2>
      <div
        className="rounded-lg border-2 border-dashed border-muted-foreground/25 p-6 text-center space-y-3 hover:border-muted-foreground/50 transition-colors cursor-pointer"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          accept=".pdf,.docx,.txt,.mp3,.mp4,.m4a"
          onChange={(e) => handleFiles(e.target.files)}
        />
        {uploading ? (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Uploading…
          </div>
        ) : (
          <>
            <Upload className="h-8 w-8 text-muted-foreground mx-auto" />
            <div>
              <p className="text-sm font-medium">Drop files here or click to upload</p>
              <p className="text-xs text-muted-foreground mt-1">PDF, DOCX, TXT, MP3, MP4, M4A · Max 100MB</p>
            </div>
            <Button size="sm" variant="outline" type="button" onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}>
              Choose Files
            </Button>
          </>
        )}
      </div>

      {error && (
        <div className="mt-2 flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {error}
        </div>
      )}

      {uploaded.length > 0 && (
        <div className="mt-3 space-y-1">
          {uploaded.map((name, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-green-700">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{name} — received</span>
            </div>
          ))}
          <p className="text-xs text-muted-foreground mt-1">
            Your lawyer will be notified and can review your documents shortly.
          </p>
        </div>
      )}
    </section>
  );
}
