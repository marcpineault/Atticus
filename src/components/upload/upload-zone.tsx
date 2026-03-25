"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Upload, File, CheckCircle, AlertCircle, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc/client";
import { VoiceRecorder } from "./voice-recorder";

type FileStatus = "uploading" | "queued" | "error";
type DocumentType = "email" | "document" | "meeting" | "text_message" | "calendar" | "voice_note";

interface UploadedFile {
  id: string;
  file: File;
  status: FileStatus;
  progress: number;
  errorMessage?: string;
}

const ACCEPTED_TYPES = {
  "application/pdf": [".pdf"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
  "text/plain": [".txt"],
  "audio/mpeg": [".mp3"],
  "audio/mp4": [".m4a"],
  "audio/wav": [".wav"],
  "audio/webm": [".webm"],
  "audio/ogg": [".ogg"],
  "video/mp4": [".mp4"],
  "video/webm": [".webm"],
};

const DOC_TYPE_OPTIONS: { value: DocumentType; label: string; description: string }[] = [
  { value: "document", label: "Document / Contract", description: "Agreements, briefs, legal documents" },
  { value: "email", label: "Email", description: "Email correspondence" },
  { value: "meeting", label: "Meeting Recording", description: "Audio/video of client meetings" },
  { value: "voice_note", label: "Voice Note", description: "Quick audio memos" },
  { value: "text_message", label: "Text Message", description: "SMS or messaging transcripts" },
  { value: "calendar", label: "Calendar / Event", description: "Appointments and scheduling" },
];

interface UploadZoneProps {
  defaultClientId?: string;
  defaultMatterId?: string;
}

export function UploadZone({ defaultClientId, defaultMatterId }: UploadZoneProps = {}) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [selectedClientId, setSelectedClientId] = useState<string>(defaultClientId ?? "");
  const [selectedMatterId, setSelectedMatterId] = useState<string>(defaultMatterId ?? "");
  const [selectedDocType, setSelectedDocType] = useState<DocumentType>("document");

  const { data: clients } = trpc.clients.list.useQuery();
  const { data: matters } = trpc.matters.list.useQuery(
    selectedClientId ? { clientId: selectedClientId } : undefined
  );

  const uploadFile = useCallback(async (
    uploadedFile: UploadedFile,
    clientId: string,
    matterId: string,
    docType: DocumentType
  ) => {
    const formData = new FormData();
    formData.append("file", uploadedFile.file);

    const metadata: Record<string, string> = {};
    if (clientId) metadata.clientId = clientId;
    if (matterId) metadata.matterId = matterId;
    metadata.documentType = docType;
    formData.append("metadata", JSON.stringify(metadata));

    setFiles((prev) =>
      prev.map((f) =>
        f.id === uploadedFile.id ? { ...f, status: "uploading", progress: 0 } : f
      )
    );

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: "Upload failed" }));
        throw new Error(error.error || "Upload failed");
      }

      setFiles((prev) =>
        prev.map((f) =>
          f.id === uploadedFile.id ? { ...f, status: "queued", progress: 100 } : f
        )
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed";
      setFiles((prev) =>
        prev.map((f) =>
          f.id === uploadedFile.id ? { ...f, status: "error", errorMessage: message } : f
        )
      );
    }
  }, []);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles: UploadedFile[] = acceptedFiles.map((file) => ({
        id: `${file.name}-${Date.now()}-${Math.random()}`,
        file,
        status: "uploading",
        progress: 0,
      }));

      setFiles((prev) => [...prev, ...newFiles]);
      newFiles.forEach((f) => uploadFile(f, selectedClientId, selectedMatterId, selectedDocType));
    },
    [uploadFile, selectedClientId, selectedMatterId, selectedDocType]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    maxSize: 100 * 1024 * 1024,
  });

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const retryFile = (uploadedFile: UploadedFile) => {
    uploadFile(uploadedFile, selectedClientId, selectedMatterId, selectedDocType);
  };

  const selectedDocTypeLabel = DOC_TYPE_OPTIONS.find(o => o.value === selectedDocType)?.label;

  return (
    <div className="space-y-4">
      {/* Client / Matter selectors */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="client-select">Client (optional)</Label>
          <Select
            value={selectedClientId}
            onValueChange={(v) => {
              setSelectedClientId(v);
              setSelectedMatterId("");
            }}
          >
            <SelectTrigger id="client-select">
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
          <Label htmlFor="matter-select">Matter (optional)</Label>
          <Select
            value={selectedMatterId}
            onValueChange={setSelectedMatterId}
            disabled={!selectedClientId || !matters?.length}
          >
            <SelectTrigger id="matter-select">
              <SelectValue placeholder={
                !selectedClientId
                  ? "Select a client first"
                  : !matters?.length
                  ? "No matters for this client"
                  : "Select a matter…"
              } />
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

      {/* Document type selector */}
      <div className="space-y-1.5">
        <Label htmlFor="doc-type-select">Document Type</Label>
        <Select
          value={selectedDocType}
          onValueChange={(v) => setSelectedDocType(v as DocumentType)}
        >
          <SelectTrigger id="doc-type-select">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {DOC_TYPE_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                <span className="font-medium">{opt.label}</span>
                <span className="ml-2 text-xs text-muted-foreground">{opt.description}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground">
          Helps AI extract the right entities — dates, action items, and obligations.
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          <div
            {...getRootProps()}
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-12 text-center transition-colors",
              isDragActive
                ? "border-primary bg-primary/5"
                : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50"
            )}
          >
            <input {...getInputProps()} />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <Upload className="h-6 w-6 text-muted-foreground" />
            </div>
            {isDragActive ? (
              <p className="text-sm font-medium text-primary">Drop files here...</p>
            ) : (
              <div>
                <p className="text-sm font-medium">
                  Drag & drop files here, or click to select
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  PDF, DOCX, TXT, MP3, MP4, M4A up to 100MB
                </p>
                {selectedClientId && (
                  <p className="mt-1.5 text-xs text-primary">
                    Will be linked to: {clients?.find(c => c.id === selectedClientId)?.name}
                    {selectedMatterId && matters?.find(m => m.id === selectedMatterId)
                      ? ` › ${matters.find(m => m.id === selectedMatterId)?.title}`
                      : ""}
                    {" · "}{selectedDocTypeLabel}
                  </p>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Voice recorder shortcut */}
      <VoiceRecorder
        onRecordingComplete={(file) => {
          const id = Math.random().toString(36).slice(2);
          const newFile: UploadedFile = { id, file, status: "uploading", progress: 0 };
          setFiles(prev => [...prev, newFile]);
          // Auto-set doc type to voice_note
          setSelectedDocType("voice_note");
          uploadFile(newFile, selectedClientId, selectedMatterId, "voice_note");
        }}
      />

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((f) => (
            <Card key={f.id}>
              <CardContent className="flex items-center gap-3 p-4">
                <File className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{f.file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(f.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {f.status === "uploading" && (
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-xs">Uploading...</span>
                    </div>
                  )}
                  {f.status === "queued" && (
                    <div className="flex items-center gap-1.5 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-xs">Queued for processing</span>
                    </div>
                  )}
                  {f.status === "error" && (
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="h-4 w-4 text-destructive" />
                      <span className="text-xs text-destructive">
                        {f.errorMessage ?? "Error"}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 text-xs"
                        onClick={() => retryFile(f)}
                      >
                        Retry
                      </Button>
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => removeFile(f.id)}
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
