import { MeetingRecorder } from "@/components/recording/meeting-recorder";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Link from "next/link";

export default function RecordPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Record</h1>
          <p className="text-muted-foreground">
            Record a meeting or conversation directly in your browser.
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/upload">
            <Upload className="h-4 w-4 mr-2" />
            Upload a file instead
          </Link>
        </Button>
      </div>

      <MeetingRecorder />

      <div className="rounded-lg border border-dashed p-4 space-y-1">
        <p className="text-sm font-medium">Recording phone calls?</p>
        <p className="text-sm text-muted-foreground">
          Use your phone&apos;s built-in call recorder or a third-party app, then{" "}
          <Link href="/upload" className="underline underline-offset-2 hover:text-foreground">
            upload the audio file
          </Link>
          . Supports MP3, M4A, WAV, and MP4. Select{" "}
          <span className="font-medium">Meeting Recording</span> as the document type.
        </p>
      </div>
    </div>
  );
}
