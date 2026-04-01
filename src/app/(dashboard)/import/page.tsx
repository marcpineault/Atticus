import { PracticeImports } from "@/components/import/practice-imports";
import { BulkUpload } from "@/components/import/bulk-upload";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ImportPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Import</h1>
        <p className="text-muted-foreground">
          Move a firm into Atticus the way lawyers actually keep their data: spreadsheets first, documents second.
        </p>
      </div>

      <PracticeImports />

      <div className="grid gap-6 xl:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Optional Document Upload</CardTitle>
          </CardHeader>
          <CardContent>
            <BulkUpload />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
