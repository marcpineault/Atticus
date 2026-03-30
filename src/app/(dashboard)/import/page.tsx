import { CsvImport } from "@/components/import/csv-import";
import { BulkUpload } from "@/components/import/bulk-upload";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ImportPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Import</h1>
        <p className="text-muted-foreground">
          Bring clients and documents into Atticus without reformatting them first.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Import Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <CsvImport />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <BulkUpload />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
