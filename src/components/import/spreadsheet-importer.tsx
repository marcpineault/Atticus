"use client";

import { ChangeEvent, useMemo, useState } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

type ParsedRow = Record<string, string>;

export interface ImportField {
  key: string;
  label: string;
  required?: boolean;
  matchers: string[];
}

export interface ImportSummaryResult {
  imported?: number;
  skipped?: number;
  createdClients?: number;
  matchedClients?: number;
  createdMatters?: number;
  matchedMatters?: number;
}

type ColumnMapping = Record<string, string | null>;

function normalizeColumnName(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function coerceCellValue(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return String(value);
}

function autoMapColumns(columns: string[], fields: ImportField[]): ColumnMapping {
  const normalizedColumns = columns.map((column) => ({
    original: column,
    normalized: normalizeColumnName(column),
  }));

  return fields.reduce((mapping, field) => {
    const exactMatch = normalizedColumns.find((column) =>
      field.matchers.includes(column.normalized)
    );

    if (exactMatch) {
      mapping[field.key] = exactMatch.original;
      return mapping;
    }

    const partialMatch = normalizedColumns.find((column) =>
      field.matchers.some(
        (matcher) =>
          column.normalized.includes(matcher) || matcher.includes(column.normalized)
      )
    );

    mapping[field.key] = partialMatch?.original ?? null;
    return mapping;
  }, {} as ColumnMapping);
}

function mapRow(row: ParsedRow, mapping: ColumnMapping, fields: ImportField[]) {
  return fields.reduce<Record<string, string>>((acc, field) => {
    const column = mapping[field.key];
    acc[field.key] = column ? coerceCellValue(row[column]).trim() : "";
    return acc;
  }, {});
}

interface SpreadsheetImporterProps<TPayload> {
  title: string;
  description: string;
  fields: ImportField[];
  helperText: string;
  transformRows: (rows: Array<Record<string, string>>) => { payload: TPayload[]; errors: string[] };
  onImport: (payload: TPayload[]) => Promise<ImportSummaryResult>;
}

export function SpreadsheetImporter<TPayload>({
  title,
  description,
  fields,
  helperText,
  transformRows,
  onImport,
}: SpreadsheetImporterProps<TPayload>) {
  const [fileName, setFileName] = useState("");
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<ParsedRow[]>([]);
  const [mapping, setMapping] = useState<ColumnMapping>({});
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ImportSummaryResult | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  const previewRows = useMemo(
    () => rows.slice(0, 5).map((row) => mapRow(row, mapping, fields)),
    [fields, mapping, rows]
  );

  const resetParsedData = () => {
    setColumns([]);
    setRows([]);
    setMapping(fields.reduce((acc, field) => {
      acc[field.key] = null;
      return acc;
    }, {} as ColumnMapping));
    setResult(null);
  };

  const applyParsedData = (nextFileName: string, nextColumns: string[], nextRows: ParsedRow[]) => {
    if (nextRows.length === 0) {
      resetParsedData();
      setFileName(nextFileName);
      setError("The selected file does not contain any rows.");
      return;
    }

    if (nextRows.length > 1000) {
      resetParsedData();
      setFileName(nextFileName);
      setError("Import is limited to 1000 rows at a time.");
      return;
    }

    const nextMapping = autoMapColumns(nextColumns, fields);
    const missingRequired = fields.filter((field) => field.required && !nextMapping[field.key]);

    if (missingRequired.length > 0) {
      resetParsedData();
      setFileName(nextFileName);
      setError(`Could not match required columns: ${missingRequired.map((field) => field.label).join(", ")}.`);
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

      const nextRows = XLSX.utils
        .sheet_to_json<Record<string, unknown>>(worksheet, { defval: "" })
        .map((row) =>
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
    setError(null);
    setResult(null);
    const mappedRows = rows.map((row) => mapRow(row, mapping, fields));
    const transformed = transformRows(mappedRows);

    if (transformed.errors.length > 0 && transformed.payload.length === 0) {
      setError(transformed.errors.slice(0, 5).join(" "));
      return;
    }

    setIsImporting(true);
    try {
      const summary = await onImport(transformed.payload);
      setResult(summary);
      if (transformed.errors.length > 0) {
        setError(transformed.errors.slice(0, 5).join(" "));
      }
    } catch (importError) {
      setError(importError instanceof Error ? importError.message : "Import failed.");
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`${title}-file`}>Spreadsheet</Label>
          <Input
            id={`${title}-file`}
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={(event) => void handleFileChange(event)}
          />
          <p className="text-xs text-muted-foreground">{helperText}</p>
          {fileName ? <p className="text-xs text-muted-foreground">Loaded: {fileName}</p> : null}
        </div>

        {columns.length > 0 ? (
          <div className="grid gap-3 md:grid-cols-2">
            {fields.map((field) => (
              <div key={field.key} className="space-y-1.5">
                <Label>{field.label}</Label>
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
                    <SelectValue placeholder="Choose a column" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="__none__">Not mapped</SelectItem>
                    {columns.map((column) => (
                      <SelectItem key={column} value={column}>
                        {column}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        ) : null}

        {previewRows.length > 0 ? (
          <div className="space-y-2">
            <p className="text-sm font-medium">Preview</p>
            <div className="overflow-x-auto rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    {fields.map((field) => (
                      <TableHead key={field.key}>{field.label}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {previewRows.map((row, index) => (
                    <TableRow key={index}>
                      {fields.map((field) => (
                        <TableCell key={field.key}>{row[field.key] || "—"}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : null}

        {error ? (
          <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
            <AlertCircle className="mt-0.5 h-4 w-4" />
            <p>{error}</p>
          </div>
        ) : null}

        {result ? (
          <div className="flex items-start gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/5 p-3 text-sm text-emerald-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4" />
            <div className="space-y-1">
              {result.imported != null ? <p>Imported: {result.imported}</p> : null}
              {result.skipped != null ? <p>Skipped: {result.skipped}</p> : null}
              {result.createdClients != null ? <p>Clients created: {result.createdClients}</p> : null}
              {result.matchedClients != null ? <p>Clients matched: {result.matchedClients}</p> : null}
              {result.createdMatters != null ? <p>Matters created: {result.createdMatters}</p> : null}
              {result.matchedMatters != null ? <p>Matters matched: {result.matchedMatters}</p> : null}
            </div>
          </div>
        ) : null}

        <Button
          onClick={() => void handleImport()}
          disabled={rows.length === 0 || isImporting}
        >
          {isImporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
          Import
        </Button>
      </CardContent>
    </Card>
  );
}
