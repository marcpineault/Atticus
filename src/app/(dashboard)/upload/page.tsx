import { UploadZone } from "@/components/upload/upload-zone";

interface UploadPageProps {
  searchParams: Promise<{ clientId?: string; matterId?: string }>;
}

export default async function UploadPage({ searchParams }: UploadPageProps) {
  const { clientId, matterId } = await searchParams;
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Upload Documents</h1>
        <p className="text-muted-foreground">
          Upload documents and recordings for AI processing.
        </p>
      </div>
      <UploadZone defaultClientId={clientId} defaultMatterId={matterId} />
    </div>
  );
}
