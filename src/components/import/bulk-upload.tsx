"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import JSZip from "jszip";
import { useDropzone } from "react-dropzone";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, FileArchive, FileText, Loader2, Upload } from "lucide-react";

type UploadStatus = "queued" | "uploading" | "processing" | "done" | "error";

interface QueuedUploadFile {
  id: string;
  file: File;
  status: UploadStatus;
  documentId?: string;
  errorMessage?: string;
}

const MAX_FILE_SIZE = 100 * 1024 * 1024;
const ACCEPTED_TYPES = {
  "application/pdf": [".pdf"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
  "text/plain": [".txt"],
  "audio/mpeg": [".mp3"],
  "audio/mp4": [".m4a", ".mp4"],
  "audio/wav": [".wav"],
  "audio/webm": [".webm"],
  "audio/ogg": [".ogg"],
  "video/mp4": [".mp4"],
  "video/webm": [".webm"],
  "application/zip": [".zip"],
};
const SUPPORTED_EXTENSIONS = new Set(["pdf", "docx", "txt", "mp3", "mp4", "m4a", "wav", "webm", "ogg"]);

function getExtension(fileName: string) {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

function createQueuedFile(file: File): QueuedUploadFile {
  return {
    id: `${file.name}-${Date.now()}-${Math.random()}`,
    file,
    status: "queued",
  };
}

export function BulkUpload() {
  const [files, setFiles] = useState<QueuedUploadFile[]>([]);
  const hasActiveProcessing = useMemo(
    () => files.some((file) => file.status === "queued" || file.status === "uploading" || file.status === "processing"),
    [files]
  );

  const { data: documents } = trpc.documents.list.useQuery(undefined, {
    refetchInterval: hasActiveProcessing ? 3000 : false,
  });

  useEffect(() => {
    if (!documents?.length) return;

    setFiles((current) =>
      current.map((file) => {
        if (!file.documentId || file.status === "error" || file.status === "done") {
          return file;
        }

        const document = documents.find((item) => item.id === file.documentId);
        if (!document) return file;

        if (document.status === "completed") {
          return { ...file, status: "done", errorMessage: undefined };
        }

        if (document.status === "failed") {
          return {
            ...file,
            status: "error",
            errorMessage: document.errorMessage ?? "Processing failed",
          };
        }

        if (document.status === "processing") {
          return { ...file, status: "processing", errorMessage: undefined };
        }

        return { ...file, status: "queued", errorMessage: undefined };
      })
    );
  }, [documents]);

  const uploadFile = useCallback(async (queuedFile: QueuedUploadFile) => {
    setFiles((current) =>
      current.map((file) => file.id === queuedFile.id ? { ...file, status: "uploading", errorMessage: undefined } : file)
    );

    const formData = new FormData();
    formData.append("file", queuedFile.file);
    formData.append("metadata", JSON.stringify({ title: queuedFile.file.name }));

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const uploadError = await response.json().catch(() => ({ error: "Upload failed" }));
        throw new Error(uploadError.error || "Upload failed");
      }

      const payload = await response.json() as { documentId: string };
      setFiles((current) =>
        current.map((file) =>
          file.id === queuedFile.id
            ? { ...file, status: "queued", documentId: payload.documentId, errorMessage: undefined }
            : file
        )
      );
    } catch (uploadError) {
      const message = uploadError instanceof Error ? uploadError.message : "Upload failed";
      setFiles((current) =>
        current.map((file) =>
          file.id === queuedFile.id ? { ...file, status: "error", errorMessage: message } : file
        )
      );
    }
  }, []);

  const expandZipFile = useCallback(async (zipFile: File) => {
    if (zipFile.size > MAX_FILE_SIZE) {
      setFiles((current) => [
        ...current,
        {
          id: `${zipFile.name}-${Date.now()}-${Math.random()}`,
          file: zipFile,
          status: "error",
          errorMessage: "ZIP files must be 100 MB or smaller.",
        },
      ]);
      return;
    }

    try {
      const zip = await JSZip.loadAsync(zipFile);
      const extractedFiles: File[] = [];

      for (const entry of Object.values(zip.files)) {
        if (entry.dir) continue;

        const fileName = entry.name.split("/").filter(Boolean).join(" / ");
        const extension = getExtension(fileName);
        if (!SUPPORTED_EXTENSIONS.has(extension)) {
          continue;
        }

        const blob = await entry.async("blob");
        extractedFiles.push(new File([blob], fileName, { type: blob.type || undefined }));
      }

      if (extractedFiles.length === 0) {
        setFiles((current) => [
          ...current,
          {
            id: `${zipFile.name}-${Date.now()}-${Math.random()}`,
            file: zipFile,
            status: "error",
            errorMessage: "No supported files were found in the ZIP archive.",
          },
        ]);
        return;
      }

      const queuedFiles = extractedFiles.map(createQueuedFile);
      setFiles((current) => [...current, ...queuedFiles]);
      queuedFiles.forEach((file) => void uploadFile(file));
    } catch (zipError) {
      setFiles((current) => [
        ...current,
        {
          id: `${zipFile.name}-${Date.now()}-${Math.random()}`,
          file: zipFile,
          status: "error",
          errorMessage: zipError instanceof Error ? zipError.message : "Failed to read ZIP file.",
        },
      ]);
    }
  }, [uploadFile]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      if (getExtension(file.name) === "zip") {
        void expandZipFile(file);
        return;
      }

      const queuedFile = createQueuedFile(file);
      setFiles((current) => [...current, queuedFile]);
      void uploadFile(queuedFile);
    });
  }, [expandZipFile, uploadFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    maxSize: MAX_FILE_SIZE,
    multiple: true,
  });

  const retryFile = (queuedFile: QueuedUploadFile) => {
    const nextFile: QueuedUploadFile = {
      ...queuedFile,
      status: "queued",
      errorMessage: undefined,
      documentId: undefined,
    };
    setFiles((current) => current.map((file) => file.id === queuedFile.id ? nextFile : file));
    void uploadFile(nextFile);
  };

  return (
    <div className="space-y-4">
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
            <div>
              <p className="text-sm font-medium">
                {isDragActive ? "Drop files here…" : "Drag & drop files or ZIP archives here"}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                PDF, DOCX, TXT, MP3, MP4, M4A, WAV, WEBM, OGG, or ZIP up to 100 MB
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file) => (
            <Card key={file.id}>
              <CardContent className="flex items-center gap-3 p-4">
                {getExtension(file.file.name) === "zip" ? (
                  <FileArchive className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                ) : (
                  <FileText className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{file.file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {file.status === "uploading" && (
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-xs">Uploading</span>
                    </div>
                  )}
                  {file.status === "queued" && (
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Upload className="h-4 w-4" />
                      <span className="text-xs">Queued</span>
                    </div>
                  )}
                  {file.status === "processing" && (
                    <div className="flex items-center gap-1.5 text-primary">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-xs">Processing</span>
                    </div>
                  )}
                  {file.status === "done" && (
                    <div className="flex items-center gap-1.5 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs">Done</span>
                    </div>
                  )}
                  {file.status === "error" && (
                    <div className="flex items-center gap-1.5 text-destructive">
                      <AlertCircle className="h-4 w-4" />
                      <span className="max-w-44 truncate text-xs">
                        {file.errorMessage ?? "Error"}
                      </span>
                      {getExtension(file.file.name) !== "zip" && (
                        <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={() => retryFile(file)}>
                          Retry
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
