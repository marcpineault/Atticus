"use client";

import { ChangeEvent, useMemo, useState } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle, CheckCircle2, Loader2, Upload } from "lucide-react";

type ClientImportField = "name" | "email" | "phone" | "company" | "notes";
type ParsedRow = Record<string, string>;
type ColumnMapping = Record<ClientImportField, string | null>;
type ImportResult = { imported: number; skipped: number; errors: string[] };

const ATTICUS_FIELDS: Array<{ key: ClientImportField; label: string; required?: boolean }> = [
  { key: "name", label: "Name", required: true },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "company", label: "Company" },
  { key: "notes", label: "Notes" },
];

const FIELD_MATCHERS: Record<ClientImportField, string[]> = {
  name: ["name", "full name", "client name", "contact name", "customer name"],
  email: ["email", "email address", "e-mail", "client email"],
  phone: ["phone", "phone number", "mobile", "cell", "telephone"],
  company: ["company", "organization", "organisation", "firm", "business"],
  notes: ["notes", "note", "comments", "comment", "details", "description"],
};

function normalizeColumnName(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function autoMapColumns(columns: string[]): ColumnMapping {
  const normalizedColumns = columns.map((column) => ({
    original: column,
    normalized: normalizeColumnName(column),
  }));

  const mapping = {} as ColumnMapping;

  for (const field of ATTICUS_FIELDS) {
    const matchers = FIELD_MATCHERS[field.key];
    const exactMatch = normalizedColumns.find((column) => matchers.includes(column.normalized));
    if (exactMatch) {
      mapping[field.key] = exactMatch.original;
      continue;
    }

    const partialMatch = normalizedColumns.find((column) =>
      matchers.some((matcher) => column.normalized.includes(matcher) || matcher.includes(column.normalized))
    );
    mapping[field.key] = partialMatch?.original ?? null;
  }

  return mapping;
}

function coerceCellValue(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return String(value);
}

function mapRow(row: ParsedRow, mapping: ColumnMapping) {
  return ATTICUS_FIELDS.reduce((acc, field) => {
    const column = mapping[field.key];
    acc[field.key] = column ? coerceCellValue(row[column]).trim() : "";
    return acc;
  }, {} as Record<ClientImportField, string>);
}

export function CsvImport() {
  const [fileName, setFileName] = useState<string>("");
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<ParsedRow[]>([]);
  const [mapping, setMapping] = useState<ColumnMapping>({
    name: null,
    email: null,
    phone: null,
    company: null,
    notes: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ImportResult | null>(null);

  const utils = trpc.useUtils();
  const bulkCreate = trpc.clients.bulkCreate.useMutation({
    onSuccess: async () => {
      await utils.clients.list.invalidate();
      await utils.clients.listWithStats.invalidate();
    },
  });

  const previewRows = useMemo(
    () => rows.slice(0, 5).map((row) => mapRow(row, mapping)),
    [rows, mapping]
  );

  const resetParsedData = () => {
    setColumns([]);
    setRows([]);
    setMapping({ name: null, email: null, phone: null, company: null, notes: null });
    setResult(null);
  };

  const applyParsedData = (nextFileName: string, nextColumns: string[], nextRows: ParsedRow[]) => {
    if (nextRows.length === 0) {
      resetParsedData();
      setFileName(nextFileName);
      setError("The selected file does not contain any rows.");
      return;
    }

    if (nextRows.length > 500) {
      resetParsedData();
      setFileName(nextFileName);
      setError("Import is limited to 500 rows at a time.");
      return;
    }

    const nextMapping = autoMapColumns(nextColumns);
    if (!nextMapping.name) {
      resetParsedData();
      setFileName(nextFileName);
      setError("Could not find a name column. Rename a column to Name, Client Name, or Full Name and try again.");
      return;
    }

    setFileName(nextFileName);
    setColumns(nextColumns);
    setRows(nextRows);
    setMapping(nextMapping);
    setError(null);
    setResult(null);
  };

  const parseCsvFile = (file: File) => {
    Papa.parse<ParsedRow>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const nextColumns = (results.meta.fields ?? []).filter(Boolean);
        const nextRows = results.data.map((row) =>
          Object.fromEntries(
            Object.entries(row).map(([key, value]) => [key, coerceCellValue(value)])
          )
        );
        applyParsedData(file.name, nextColumns, nextRows);
      },
      error: (parseError) => {
        resetParsedData();
        setFileName(file.name);
        setError(parseError.message || "Failed to parse CSV file.");
      },
    });
  };

  const parseExcelFile = async (file: File) => {
    try {
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: "array" });
      const firstSheetName = workbook.SheetNames[0];
      if (!firstSheetName) {
        throw new Error("Workbook is empty.");
      }

      const worksheet = workbook.Sheets[firstSheetName];
      if (!worksheet) {
        throw new Error("Unable to read the first worksheet.");
      }
      const nextRows = XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet, {
        defval: "",
      }).map((row) =>
        Object.fromEntries(
          Object.entries(row).map(([key, value]) => [key, coerceCellValue(value)])
        )
      );
      const nextColumns = Array.from(
        new Set(nextRows.flatMap((row) => Object.keys(row)).filter(Boolean))
      );
      applyParsedData(file.name, nextColumns, nextRows);
    } catch (excelError) {
      resetParsedData();
      setFileName(file.name);
      setError(excelError instanceof Error ? excelError.message : "Failed to parse Excel file.");
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;

    const extension = file.name.split(".").pop()?.toLowerCase();
    if (!extension || !["csv", "xlsx", "xls"].includes(extension)) {
      resetParsedData();
      setFileName(file.name);
      setError("Upload a CSV, XLSX, or XLS file.");
      return;
    }

    if (extension === "csv") {
      parseCsvFile(file);
      return;
    }

    await parseExcelFile(file);
  };

  const handleImport = async () => {
    setResult(null);
    setError(null);

    const validationErrors: string[] = [];
    const payload = rows.flatMap((row, index) => {
      const mapped = mapRow(row, mapping);
      if (!mapped.name.trim()) {
        validationErrors.push(`Row ${index + 1}: name is required`);
        return [];
      }

      return [{
        name: mapped.name.trim(),
        email: mapped.email || undefined,
        phone: mapped.phone || undefined,
        company: mapped.company || undefined,
        notes: mapped.notes || undefined,
      }];
    });

    if (payload.length === 0) {
      setResult({ imported: 0, skipped: 0, errors: validationErrors });
      return;
    }

    try {
      const response = await bulkCreate.mutateAsync(payload);
      setResult({
        imported: response.imported,
        skipped: response.skipped,
        errors: [...validationErrors, ...response.errors],
      });
    } catch (mutationError) {
      setError(mutationError instanceof Error ? mutationError.message : "Import failed.");
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="client-import-file">Client file</Label>
        <Input
          id="client-import-file"
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileChange}
        />
        <p className="text-xs text-muted-foreground">
          Upload up to 500 client rows from CSV or Excel.
        </p>
      </div>

      {fileName && (
        <div className="rounded-lg border bg-muted/30 px-3 py-2 text-sm text-muted-foreground">
          Loaded file: <span className="font-medium text-foreground">{fileName}</span>
          {rows.length > 0 ? ` · ${rows.length} rows` : ""}
        </div>
      )}

      {error && (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {columns.length > 0 && !error && (
        <>
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">Column Mapping</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {ATTICUS_FIELDS.map((field) => (
                  <div key={field.key} className="space-y-2">
                    <Label>{field.label}{field.required ? " *" : ""}</Label>
                    <Select
                      value={mapping[field.key] ?? "__none__"}
                      onValueChange={(value) =>
                        setMapping((current) => ({
                          ...current,
                          [field.key]: value === "__none__" ? null : value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a column" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="__none__">Not mapped</SelectItem>
                        {columns.map((column) => (
                          <SelectItem key={`${field.key}-${column}`} value={column}>
                            {column}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-base">Preview</CardTitle>
              <Button onClick={handleImport} disabled={bulkCreate.isPending || !mapping.name}>
                {bulkCreate.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Importing…
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Import
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    {ATTICUS_FIELDS.map((field) => (
                      <TableHead key={field.key}>{field.label}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {previewRows.map((row, index) => (
                    <TableRow key={`preview-${index}`}>
                      {ATTICUS_FIELDS.map((field) => (
                        <TableCell key={`${index}-${field.key}`}>
                          {row[field.key] || <span className="text-muted-foreground">—</span>}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="text-xs text-muted-foreground">
                Showing the first {previewRows.length} row{previewRows.length === 1 ? "" : "s"} using the current mapping.
              </p>
            </CardContent>
          </Card>
        </>
      )}

      {result && (
        <div className="space-y-3 rounded-lg border bg-muted/20 p-4">
          <div className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
            <span>
              Imported {result.imported} client{result.imported === 1 ? "" : "s"}. Skipped {result.skipped} duplicate{result.skipped === 1 ? "" : "s"}.
            </span>
          </div>
          {result.errors.length > 0 && (
            <div className="space-y-1">
              <p className="text-sm font-medium">Errors</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {result.errors.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
