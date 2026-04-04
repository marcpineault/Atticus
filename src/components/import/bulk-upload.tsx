"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import JSZip from "jszip";
import { useDropzone } from "react-dropzone";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, FileArchive, FileText, FolderTree, Loader2, Upload } from "lucide-react";

type UploadStatus = "queued" | "uploading" | "processing" | "done" | "error";

interface QueuedUploadFile {
  id: string;
  file: File;
  displayPath: string;
  clientName: string | null;
  matterTitle: string | null;
  status: UploadStatus;
  documentId?: string;
  errorMessage?: string;
}

interface ImportSummary {
  createdClients: number;
  matchedClients: number;
  createdMatters: number;
  matchedMatters: number;
  totalFiles: number;
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

function sanitizePath(path: string) {
  return path.replace(/^\/+|\/+$/g, "").replace(/\\/g, "/");
}

function normalizeLabel(value: string | null | undefined) {
  return (value ?? "").trim().replace(/\s+/g, " ");
}

function clientKey(name: string) {
  return normalizeLabel(name).toLowerCase();
}

function matterKey(clientId: string, title: string) {
  return `${clientId}::${normalizeLabel(title).toLowerCase()}`;
}

function stripSharedRoot(paths: string[][]) {
  if (paths.length === 0) return paths;
  const first = paths[0]?.[0];
  if (!first) return paths;
  const shouldStrip = paths.every((segments) => segments.length > 1 && segments[0] === first);
  return shouldStrip ? paths.map((segments) => segments.slice(1)) : paths;
}

function inferAssignments(filePath: string) {
  const cleaned = sanitizePath(filePath);
  const safeSegments = cleaned.split("/").filter(Boolean);

  if (safeSegments.length >= 3) {
    return {
      displayPath: safeSegments.join(" / "),
      clientName: safeSegments[0] ?? null,
      matterTitle: safeSegments[1] ?? null,
    };
  }

  if (safeSegments.length === 2) {
    return {
      displayPath: safeSegments.join(" / "),
      clientName: safeSegments[0] ?? null,
      matterTitle: null,
    };
  }

  return {
    displayPath: safeSegments.join(" / "),
    clientName: null,
    matterTitle: null,
  };
}

function createQueuedFile(
  file: File,
  filePath?: string,
): QueuedUploadFile {
  const resolvedPath = filePath ? sanitizePath(filePath) : file.name;
  const inferred = inferAssignments(resolvedPath);

  return {
    id: `${file.name}-${Date.now()}-${Math.random()}`,
    file,
    displayPath: inferred.displayPath,
    clientName: inferred.clientName,
    matterTitle: inferred.matterTitle,
    status: "queued",
  };
}

export function BulkUpload() {
  const [files, setFiles] = useState<QueuedUploadFile[]>([]);
  const [isPreparing, setIsPreparing] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [summary, setSummary] = useState<ImportSummary | null>(null);
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

  const uploadFile = useCallback(async (
    queuedFile: QueuedUploadFile,
    clientId?: string,
    matterId?: string,
  ) => {
    setFiles((current) =>
      current.map((file) => file.id === queuedFile.id ? { ...file, status: "uploading", errorMessage: undefined } : file)
    );

    const formData = new FormData();
    formData.append("file", queuedFile.file);
    formData.append(
      "metadata",
      JSON.stringify({
        title: queuedFile.file.name,
        clientId,
        matterId,
      })
    );

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

  const clientsUpsert = trpc.clients.bulkUpsert.useMutation();
  const mattersUpsert = trpc.matters.bulkUpsert.useMutation();

  const parseZipFiles = useCallback(async (zipFile: File) => {
    const zip = await JSZip.loadAsync(zipFile);
    const fileEntries = Object.values(zip.files).filter((entry) => !entry.dir);
    const normalizedPaths = stripSharedRoot(
      fileEntries.map((entry) => sanitizePath(entry.name).split("/").filter(Boolean))
    );

    const extractedFiles: QueuedUploadFile[] = [];
    for (const [index, entry] of fileEntries.entries()) {
      const segments = normalizedPaths[index] ?? sanitizePath(entry.name).split("/").filter(Boolean);
      const extension = getExtension(segments.join("/"));
      if (!SUPPORTED_EXTENSIONS.has(extension)) continue;

      const blob = await entry.async("blob");
      const basename = segments[segments.length - 1] ?? entry.name;
      const file = new File([blob], basename, { type: blob.type || undefined });
      extractedFiles.push(createQueuedFile(file, segments.join("/")));
    }

    return extractedFiles;
  }, []);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsPreparing(true);
    const nextFiles: QueuedUploadFile[] = [];

    try {
      for (const file of acceptedFiles) {
        if (getExtension(file.name) === "zip") {
          if (file.size > MAX_FILE_SIZE) {
            nextFiles.push({
              id: `${file.name}-${Date.now()}-${Math.random()}`,
              file,
              displayPath: file.name,
              clientName: null,
              matterTitle: null,
              status: "error",
              errorMessage: "ZIP files must be 100 MB or smaller.",
            });
            continue;
          }

          const extracted = await parseZipFiles(file);
          if (extracted.length === 0) {
            nextFiles.push({
              id: `${file.name}-${Date.now()}-${Math.random()}`,
              file,
              displayPath: file.name,
              clientName: null,
              matterTitle: null,
              status: "error",
              errorMessage: "No supported files were found in the ZIP archive.",
            });
            continue;
          }

          nextFiles.push(...extracted);
          continue;
        }

        nextFiles.push(createQueuedFile(file));
      }

      setSummary(null);
      setFiles((current) => [...current, ...nextFiles]);
    } catch (zipError) {
      setFiles((current) => [
        ...current,
        {
          id: `zip-error-${Date.now()}`,
          file: new File([], "archive.zip"),
          displayPath: "archive.zip",
          clientName: null,
          matterTitle: null,
          status: "error",
          errorMessage: zipError instanceof Error ? zipError.message : "Failed to read ZIP file.",
        },
      ]);
    } finally {
      setIsPreparing(false);
    }
  }, [parseZipFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    maxSize: MAX_FILE_SIZE,
    multiple: true,
  });

  const inferredClientCount = useMemo(
    () =>
      new Set(
        files.flatMap((file) => (file.clientName ? [file.clientName] : []))
      ).size,
    [files]
  );
  const inferredMatterCount = useMemo(
    () =>
      new Set(
        files
          .filter((file) => file.clientName && file.matterTitle)
          .map((file) => `${file.clientName}::${file.matterTitle}`)
      ).size,
    [files]
  );
  const unassignedCount = useMemo(
    () => files.filter((file) => !file.clientName).length,
    [files]
  );

  const startImport = useCallback(async () => {
    const pendingFiles = files.filter((file) => file.status === "queued" || file.status === "error");
    if (pendingFiles.length === 0) return;

    setIsImporting(true);
    setSummary(null);

    try {
      const uniqueClientNames = Array.from(new Set(
        pendingFiles.flatMap((file) => {
          const name = normalizeLabel(file.clientName);
          return name ? [name] : [];
        })
      ));

      const clientResult = uniqueClientNames.length > 0
        ? await clientsUpsert.mutateAsync(uniqueClientNames.map((name) => ({ name })))
        : { created: 0, matched: 0, clients: [] as Array<{ id: string; name: string }> };

      const clientIdByName = new Map(
        clientResult.clients.map((client) => [clientKey(client.name), client.id])
      );

      const matterPayload = Array.from(new Set(
        pendingFiles.flatMap((file) => {
          if (!file.clientName || !file.matterTitle) return [];

          const clientId = clientIdByName.get(clientKey(file.clientName));
          const title = normalizeLabel(file.matterTitle);

          if (!clientId || !title) return [];

          return [JSON.stringify({ clientId, title })];
        })
      )).map((value) => JSON.parse(value) as { clientId: string; title: string });

      const matterResult = matterPayload.length > 0
        ? await mattersUpsert.mutateAsync(matterPayload)
        : { created: 0, matched: 0, matters: [] as Array<{ id: string; clientId: string; title: string }> };

      const matterIdByKey = new Map(
        matterResult.matters.map((matter) => [matterKey(matter.clientId, matter.title), matter.id])
      );

      for (const file of pendingFiles) {
        const normalizedClientName = normalizeLabel(file.clientName);
        const normalizedMatterTitle = normalizeLabel(file.matterTitle);
        const clientId = normalizedClientName
          ? clientIdByName.get(clientKey(normalizedClientName))
          : undefined;
        const resolvedMatterId = clientId && normalizedMatterTitle
          ? matterIdByKey.get(matterKey(clientId, normalizedMatterTitle))
          : undefined;

        await uploadFile(file, clientId, resolvedMatterId);
      }

      setSummary({
        createdClients: clientResult.created,
        matchedClients: clientResult.matched,
        createdMatters: matterResult.created,
        matchedMatters: matterResult.matched,
        totalFiles: pendingFiles.length,
      });
    } finally {
      setIsImporting(false);
    }
  }, [clientsUpsert, files, mattersUpsert, uploadFile]);

  const retryFile = (queuedFile: QueuedUploadFile) => {
    setFiles((current) =>
      current.map((file) =>
        file.id === queuedFile.id
          ? { ...file, status: "queued", errorMessage: undefined, documentId: undefined }
          : file
      )
    );
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
              {isPreparing ? (
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              ) : (
                <Upload className="h-6 w-6 text-muted-foreground" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium">
                {isDragActive ? "Drop files here…" : "Drop a lawyer export, matter folders, or loose files"}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Atticus reads `Client / Matter / file` ZIP structures and auto-creates missing clients and matters.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="grid gap-4 p-4 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Queued files</p>
            <p className="mt-1 text-2xl font-semibold">{files.length}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Clients inferred</p>
            <p className="mt-1 text-2xl font-semibold">{inferredClientCount}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Matters inferred</p>
            <p className="mt-1 text-2xl font-semibold">{inferredMatterCount}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Needs review</p>
            <p className="mt-1 text-2xl font-semibold">{unassignedCount}</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={() => void startImport()} disabled={files.length === 0 || isImporting || isPreparing}>
          {isImporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FolderTree className="mr-2 h-4 w-4" />}
          Start onboarding import
        </Button>
        <Button
          variant="ghost"
          disabled={files.length === 0 || isImporting}
          onClick={() => {
            setFiles([]);
            setSummary(null);
          }}
        >
          Clear queue
        </Button>
        <p className="text-xs text-muted-foreground">
          Best results: ZIP as `Client Name / Matter Name / files...`
        </p>
      </div>

      {summary && (
        <Card>
          <CardContent className="grid gap-3 p-4 md:grid-cols-5">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Files queued</p>
              <p className="mt-1 text-lg font-semibold">{summary.totalFiles}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Clients created</p>
              <p className="mt-1 text-lg font-semibold">{summary.createdClients}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Clients matched</p>
              <p className="mt-1 text-lg font-semibold">{summary.matchedClients}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Matters created</p>
              <p className="mt-1 text-lg font-semibold">{summary.createdMatters}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Matters matched</p>
              <p className="mt-1 text-lg font-semibold">{summary.matchedMatters}</p>
            </div>
          </CardContent>
        </Card>
      )}

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
                  <p className="truncate text-xs text-muted-foreground">{file.displayPath}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {file.clientName ? `Client: ${file.clientName}` : "Unassigned client"}
                    {file.matterTitle ? ` · Matter: ${file.matterTitle}` : ""}
                  </p>
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
