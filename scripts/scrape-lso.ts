/**
 * LSO Lawyer Directory Scraper
 *
 * Usage:
 *   npx tsx scripts/scrape-lso.ts [options]
 *
 * Options:
 *   --area    Practice area filter (e.g. "Family Law")
 *   --city    City filter (e.g. "Toronto")
 *   --max     Max results to collect (default: 100)
 *   --output  CSV output path (default: scripts/leads-YYYY-MM-DD.csv)
 *
 * To discover CSS selectors interactively:
 *   npx playwright codegen https://lso.ca/public-resources/finding-a-lawyer-or-paralegal/lawyer-and-paralegal-directory
 *
 * NOTE: The actual CSS selectors below are marked with TODO comments.
 * Run `npx playwright codegen` against the live LSO directory to fill them in.
 */

import { chromium } from "playwright";
import * as fs from "fs";
import * as path from "path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Lawyer {
  name: string;
  firmName: string;
  city: string;
  practiceAreas: string;
  phone: string;
  email: string;
  website: string;
}

interface CliArgs {
  area: string;
  city: string;
  max: number;
  output: string;
}

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  const result: CliArgs = {
    area: "",
    city: "",
    max: 100,
    output: path.join("scripts", `leads-${today}.csv`),
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const next = args[i + 1];

    if (arg === "--area" && next !== undefined) {
      result.area = next;
      i++;
    } else if (arg === "--city" && next !== undefined) {
      result.city = next;
      i++;
    } else if (arg === "--max" && next !== undefined) {
      const parsed = parseInt(next, 10);
      if (!isNaN(parsed) && parsed > 0) {
        result.max = parsed;
      }
      i++;
    } else if (arg === "--output" && next !== undefined) {
      result.output = next;
      i++;
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// CSV helpers
// ---------------------------------------------------------------------------

const CSV_HEADER = "name,firmName,city,practiceAreas,phone,email,website";

function toCsvRow(lawyer: Lawyer): string {
  const fields: (keyof Lawyer)[] = [
    "name",
    "firmName",
    "city",
    "practiceAreas",
    "phone",
    "email",
    "website",
  ];

  return fields
    .map((key) => {
      const value = lawyer[key] ?? "";
      // Wrap in quotes if value contains comma, quote, or newline
      if (/[",\n\r]/.test(value)) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    })
    .join(",");
}

// ---------------------------------------------------------------------------
// Dedup: load existing CSV and return a Set of known emails
// ---------------------------------------------------------------------------

function loadExisting(csvPath: string): Set<string> {
  const knownEmails = new Set<string>();

  if (!fs.existsSync(csvPath)) {
    return knownEmails;
  }

  const contents = fs.readFileSync(csvPath, "utf-8");
  const lines = contents.split("\n");

  // Header is: name,firmName,city,practiceAreas,phone,email,website
  // email is index 5
  for (const line of lines.slice(1)) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Simple split — good enough for emails which won't contain commas
    const parts = trimmed.split(",");
    const email = parts[5]?.replace(/^"|"$/g, "").trim();
    if (email && email !== "") {
      knownEmails.add(email.toLowerCase());
    }
  }

  return knownEmails;
}

// ---------------------------------------------------------------------------
// Delay helper
// ---------------------------------------------------------------------------

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomDelay(minMs: number, maxMs: number): Promise<void> {
  const ms = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  console.log(`  [rate-limit] waiting ${ms}ms...`);
  return delay(ms);
}

// ---------------------------------------------------------------------------
// Main scraper
// ---------------------------------------------------------------------------

async function scrape(): Promise<void> {
  const args = parseArgs();
  console.log("LSO Directory Scraper");
  console.log("====================");
  console.log(`  area:   ${args.area || "(all)"}`);
  console.log(`  city:   ${args.city || "(all)"}`);
  console.log(`  max:    ${args.max}`);
  console.log(`  output: ${args.output}`);
  console.log();

  // Load existing entries for dedup
  const knownEmails = loadExisting(args.output);
  console.log(`  Loaded ${knownEmails.size} existing email(s) for dedup.`);

  // Prepare output file (write header if new)
  const isNewFile = !fs.existsSync(args.output);
  const outputDir = path.dirname(args.output);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const csvStream = fs.createWriteStream(args.output, { flags: "a" });
  if (isNewFile) {
    csvStream.write(CSV_HEADER + "\n");
  }

  const collected: Lawyer[] = [];

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  try {
    const LSO_DIRECTORY_URL =
      "https://lso.ca/public-resources/finding-a-lawyer-or-paralegal/lawyer-and-paralegal-directory";

    console.log(`Navigating to LSO directory...`);
    await page.goto(LSO_DIRECTORY_URL, { waitUntil: "networkidle", timeout: 30000 });

    // ------------------------------------------------------------------
    // TODO: Fill in the search form
    //
    // Use `npx playwright codegen <url>` to interactively discover the
    // correct selectors for the search form fields below.
    //
    // Example skeleton (replace selectors with real ones):
    //
    // if (args.area) {
    //   // TODO: Find the practice area dropdown/input selector
    //   await page.selectOption('select#TODO_AREA_SELECT', args.area);
    // }
    //
    // if (args.city) {
    //   // TODO: Find the city input selector
    //   await page.fill('input#TODO_CITY_INPUT', args.city);
    // }
    //
    // // TODO: Find and click the search/submit button
    // await page.click('button#TODO_SEARCH_BUTTON');
    // await page.waitForLoadState('networkidle');
    // ------------------------------------------------------------------

    let currentPage = 1;

    while (collected.length < args.max) {
      console.log(`\nScraping page ${currentPage}...`);

      // ----------------------------------------------------------------
      // TODO: Extract lawyer cards/rows from the current results page.
      //
      // Use `npx playwright codegen <url>` to find the correct selectors.
      //
      // The pattern below is a template — replace TODO selectors:
      //
      // const cards = await page.locator('TODO_CARD_SELECTOR').all();
      //
      // if (cards.length === 0) {
      //   console.log('  No results found on this page. Done.');
      //   break;
      // }
      //
      // console.log(`  Found ${cards.length} result(s) on page ${currentPage}.`);
      //
      // for (const card of cards) {
      //   if (collected.length >= args.max) break;
      //
      //   // Click into the detail page (or extract inline)
      //   const detailLink = await card.locator('a.TODO_DETAIL_LINK').getAttribute('href');
      //   if (!detailLink) continue;
      //
      //   const detailPage = await context.newPage();
      //   let lawyer: Lawyer | null = null;
      //
      //   for (let attempt = 1; attempt <= 3; attempt++) {
      //     try {
      //       await detailPage.goto(detailLink, { waitUntil: 'networkidle', timeout: 20000 });
      //
      //       lawyer = {
      //         name:          (await detailPage.locator('TODO_NAME_SELECTOR').textContent() ?? '').trim(),
      //         firmName:      (await detailPage.locator('TODO_FIRM_SELECTOR').textContent() ?? '').trim(),
      //         city:          (await detailPage.locator('TODO_CITY_SELECTOR').textContent() ?? '').trim(),
      //         practiceAreas: (await detailPage.locator('TODO_AREAS_SELECTOR').textContent() ?? '').trim(),
      //         phone:         (await detailPage.locator('TODO_PHONE_SELECTOR').textContent() ?? '').trim(),
      //         email:         (await detailPage.locator('TODO_EMAIL_SELECTOR').getAttribute('href') ?? '').replace('mailto:', '').trim(),
      //         website:       (await detailPage.locator('TODO_WEBSITE_SELECTOR').getAttribute('href') ?? '').trim(),
      //       };
      //       break; // success
      //     } catch (err) {
      //       const backoff = Math.pow(2, attempt) * 1000;
      //       console.warn(`    Attempt ${attempt} failed: ${err}. Retrying in ${backoff}ms...`);
      //       await delay(backoff);
      //     }
      //   }
      //
      //   await detailPage.close();
      //
      //   if (!lawyer) {
      //     console.warn('  Skipping lawyer after 3 failed attempts.');
      //     continue;
      //   }
      //
      //   // Dedup by email
      //   const emailKey = lawyer.email.toLowerCase();
      //   if (emailKey && knownEmails.has(emailKey)) {
      //     console.log(`  [dedup] Skipping ${lawyer.name} (${lawyer.email})`);
      //     continue;
      //   }
      //   if (emailKey) knownEmails.add(emailKey);
      //
      //   collected.push(lawyer);
      //   csvStream.write(toCsvRow(lawyer) + '\n');
      //   console.log(`  [${collected.length}/${args.max}] ${lawyer.name} — ${lawyer.city}`);
      //
      //   await randomDelay(2000, 3000);
      // }
      // ----------------------------------------------------------------

      // TODO: Detect and navigate to the next page. Replace selectors below.
      //
      // const nextButton = page.locator('a.TODO_NEXT_PAGE_SELECTOR');
      // const hasNext = await nextButton.isVisible();
      // if (!hasNext) {
      //   console.log('\nNo next page found. Scraping complete.');
      //   break;
      // }
      // await nextButton.click();
      // await page.waitForLoadState('networkidle');
      // await randomDelay(2000, 3000);
      // currentPage++;

      // Placeholder: break immediately until selectors are configured.
      console.warn(
        "\n[NOTICE] No selectors configured yet. Edit this script and fill in the TODO sections."
      );
      console.warn(
        "         Run: npx playwright codegen https://lso.ca/public-resources/finding-a-lawyer-or-paralegal/lawyer-and-paralegal-directory"
      );
      break;
    }
  } finally {
    await browser.close();
    csvStream.end();
  }

  console.log(`\nDone. Collected ${collected.length} new lawyer(s).`);
  console.log(`Output: ${path.resolve(args.output)}`);
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

scrape().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
