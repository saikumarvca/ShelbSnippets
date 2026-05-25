#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Shelb Snippets - Enterprise validation script.
 *
 * Responsibilities:
 *   1. Locate every *.code-snippets file under ./snippets/
 *   2. Parse each file as JSON (jsonc-style trailing commas are NOT allowed
 *      because VS Code parses these files with the strict JSON parser).
 *   3. Detect duplicate JSON keys inside the same snippet file.
 *   4. Collect every snippet prefix (string or string[]).
 *   5. Detect duplicate prefixes across all files.
 *   6. Verify no prefix starts with the legacy "shelb-" namespace.
 *   7. Verify required Shelb short-prefix groups exist (see REQUIRED_GROUPS).
 *   8. Verify each snippet file is registered in package.json -> contributes.snippets.
 *
 * Exit code is non-zero if any validation step fails.
 *
 * Usage:
 *   node scripts/validate-snippets.js
 *   node scripts/validate-snippets.js --json     (machine readable summary)
 *   node scripts/validate-snippets.js --report   (write docs/SNIPPET_VALIDATION_REPORT.md)
 */

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SNIPPETS_DIR = path.join(ROOT, "snippets");
const PACKAGE_JSON = path.join(ROOT, "package.json");
const REPORT_PATH = path.join(ROOT, "docs", "SNIPPET_VALIDATION_REPORT.md");

const args = new Set(process.argv.slice(2));
const EMIT_JSON = args.has("--json");
const EMIT_REPORT = args.has("--report");

// ---------------------------------------------------------------------------
// Required short-prefix groups
// ---------------------------------------------------------------------------
function range(prefix, from, to, pad = 2) {
  const out = [];
  for (let i = from; i <= to; i++) {
    out.push(`${prefix}${String(i).padStart(pad, "0")}`);
  }
  return out;
}

const REQUIRED_GROUPS = {
  React: [
    ...range("srelogin", 1, 20),
    ...range("srereg", 1, 20),
    ...range("sredash", 1, 20),
    ...range("srenav", 1, 20),
    ...range("sreside", 1, 20),
    ...range("sreform", 1, 20),
    ...range("sretable", 1, 20),
    ...range("sremodal", 1, 20),
    ...range("srecard", 1, 20),
    ...range("srebtn", 1, 20),
    ...range("sreinput", 1, 20),
    ...range("srelayout", 1, 20),
    ...range("srehook", 1, 20),
  ],
  "Next.js": [
    ...range("snxlogin", 1, 20),
    ...range("snxreg", 1, 20),
    ...range("snxdash", 1, 20),
    ...range("snxlayout", 1, 20),
    ...range("snxform", 1, 20),
    ...range("snxtable", 1, 20),
    ...range("snxauth", 1, 20),
    ...range("snxapi", 1, 20),
    ...range("snxmid", 1, 20),
    ...range("snxmeta", 1, 20),
  ],
  Vite: [
    ...range("svtlogin", 1, 20),
    ...range("svtreg", 1, 20),
    ...range("svtdash", 1, 20),
    ...range("svtpage", 1, 20),
    ...range("svtroute", 1, 20),
    ...range("svtlayout", 1, 20),
    ...range("svtenv", 1, 20),
    ...range("svtconfig", 1, 20),
  ],
  ERP: [
    ...range("serplogin", 1, 20),
    ...range("serpdash", 1, 20),
    ...range("serpform", 1, 20),
    ...range("serptable", 1, 20),
    ...range("serpmodule", 1, 20),
    ...range("serpadmin", 1, 20),
    ...range("serpreport", 1, 20),
    ...range("serpaudit", 1, 20),
    ...range("serpfin", 1, 20),
    ...range("serpinv", 1, 20),
  ],
  "E-commerce": [
    ...range("selogin", 1, 20),
    ...range("seregister", 1, 20),
    ...range("seproduct", 1, 20),
    ...range("sepcard", 1, 20),
    ...range("secart", 1, 20),
    ...range("secheckout", 1, 20),
    ...range("seorder", 1, 20),
    ...range("seaccount", 1, 20),
    ...range("seadmin", 1, 20),
    ...range("sevendor", 1, 20),
  ],
  "Auth/API/State": [
    ...range("sauth", 1, 20),
    ...range("sapi", 1, 20),
    ...range("srq", 1, 20),
    ...range("szuauth", 1, 20),
    ...range("szucrud", 1, 20),
    ...range("ssvc", 1, 20),
    ...range("srepo", 1, 20),
    ...range("sctrl", 1, 20),
  ],
};

// Allowed "namespace" prefixes for any NEW snippet (the legacy core
// language-specific files such as snippets/react.code-snippets,
// snippets/nextjs.code-snippets etc. are exempted from this check because
// they pre-date the short-prefix system).
const ALLOWED_NAMESPACES = [
  "sre",   // React
  "snx",   // Next.js
  "svt",   // Vite
  "serp",  // ERP
  "se",    // E-commerce
  "szu",   // Zustand
  "sapi",  // API
  "sauth", // Auth
  "ssvc",  // Service
  "srepo", // Repository
  "sctrl", // Controller
  "srq",   // React Query (Auth/API/State family)
];

const LEGACY_FILES = new Set([
  "ai.code-snippets",
  "architecture.code-snippets",
  "database.code-snippets",
  "desktop.code-snippets",
  "devops.code-snippets",
  "ecommerce.code-snippets",
  "erp.code-snippets",
  "express.code-snippets",
  "go.code-snippets",
  "mongo.code-snippets",
  "nextjs.code-snippets",
  "prisma.code-snippets",
  "python.code-snippets",
  "react.code-snippets",
  "sqlite.code-snippets",
  "tailwind.code-snippets",
  "tauri.code-snippets",
  "vite.code-snippets",
  "zustand.code-snippets",
]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function listSnippetFiles() {
  if (!fs.existsSync(SNIPPETS_DIR)) return [];
  return fs
    .readdirSync(SNIPPETS_DIR)
    .filter((f) => f.endsWith(".code-snippets"))
    .sort();
}

function readJsonStrict(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return { raw, parsed: JSON.parse(raw) };
}

/**
 * Walk through a raw JSON text and report duplicate object keys.
 * Implemented as a tiny scanner because JSON.parse silently drops
 * duplicate keys.
 */
function findDuplicateKeys(rawText) {
  const duplicates = [];
  const stack = [];
  let i = 0;
  let inString = false;
  let escape = false;
  let lastStringStart = -1;
  let lastString = null;
  let expectKey = false;

  function currentKeys() {
    return stack[stack.length - 1];
  }

  while (i < rawText.length) {
    const ch = rawText[i];

    if (inString) {
      if (escape) {
        escape = false;
      } else if (ch === "\\") {
        escape = true;
      } else if (ch === '"') {
        inString = false;
        lastString = rawText.slice(lastStringStart + 1, i);
        if (expectKey && currentKeys()) {
          const set = currentKeys();
          if (set.has(lastString)) {
            duplicates.push(lastString);
          } else {
            set.add(lastString);
          }
          expectKey = false;
        }
      }
      i++;
      continue;
    }

    if (ch === '"') {
      inString = true;
      lastStringStart = i;
      i++;
      continue;
    }

    if (ch === "{") {
      stack.push(new Set());
      expectKey = true;
      i++;
      continue;
    }
    if (ch === "}") {
      stack.pop();
      expectKey = false;
      i++;
      continue;
    }
    if (ch === "[") {
      stack.push(null);
      expectKey = false;
      i++;
      continue;
    }
    if (ch === "]") {
      stack.pop();
      i++;
      continue;
    }
    if (ch === ",") {
      const top = currentKeys();
      if (top instanceof Set) expectKey = true;
      i++;
      continue;
    }
    if (ch === ":") {
      expectKey = false;
      i++;
      continue;
    }
    i++;
  }

  return [...new Set(duplicates)];
}

function collectPrefixes(parsed) {
  const prefixes = [];
  if (!parsed || typeof parsed !== "object") return prefixes;
  for (const [key, value] of Object.entries(parsed)) {
    if (!value || typeof value !== "object") continue;
    const p = value.prefix;
    if (typeof p === "string") {
      prefixes.push({ key, prefix: p });
    } else if (Array.isArray(p)) {
      for (const single of p) {
        if (typeof single === "string") prefixes.push({ key, prefix: single });
      }
    }
  }
  return prefixes;
}

function isLikelyShortNamespace(prefix) {
  return ALLOWED_NAMESPACES.some((ns) => prefix.startsWith(ns));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  const result = {
    snippetFiles: [],
    fileCount: 0,
    snippetCount: 0,
    invalidJsonFiles: [],
    duplicateKeyFiles: [],
    bannedShelbPrefixes: [],
    duplicatePrefixes: [],
    nonStandardNewPrefixes: [],
    missingPrefixesByGroup: {},
    missingPrefixesFlat: [],
    unregisteredFiles: [],
    packageJsonValid: true,
    packageJsonError: null,
  };

  // 1. package.json
  let pkg;
  try {
    pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON, "utf8"));
  } catch (err) {
    result.packageJsonValid = false;
    result.packageJsonError = err.message;
  }

  const registeredFiles = new Set();
  if (pkg && pkg.contributes && Array.isArray(pkg.contributes.snippets)) {
    for (const entry of pkg.contributes.snippets) {
      if (entry && typeof entry.path === "string") {
        registeredFiles.add(path.basename(entry.path));
      }
    }
  }

  // 2. snippet files
  const files = listSnippetFiles();
  result.snippetFiles = files;
  result.fileCount = files.length;

  const prefixIndex = new Map(); // prefix -> [{file, key}]

  for (const file of files) {
    const full = path.join(SNIPPETS_DIR, file);
    let parsed = null;
    let raw = "";
    try {
      const r = readJsonStrict(full);
      parsed = r.parsed;
      raw = r.raw;
    } catch (err) {
      result.invalidJsonFiles.push({ file, error: err.message });
      continue;
    }

    const dups = findDuplicateKeys(raw);
    if (dups.length > 0) {
      result.duplicateKeyFiles.push({ file, duplicates: dups });
    }

    if (!registeredFiles.has(file)) {
      result.unregisteredFiles.push(file);
    }

    const prefixes = collectPrefixes(parsed);
    result.snippetCount += prefixes.length;

    for (const { key, prefix } of prefixes) {
      if (prefix.toLowerCase().startsWith("shelb-")) {
        result.bannedShelbPrefixes.push({ file, key, prefix });
      }
      if (!LEGACY_FILES.has(file) && !isLikelyShortNamespace(prefix)) {
        result.nonStandardNewPrefixes.push({ file, key, prefix });
      }
      const arr = prefixIndex.get(prefix) || [];
      arr.push({ file, key });
      prefixIndex.set(prefix, arr);
    }
  }

  for (const [prefix, occurrences] of prefixIndex.entries()) {
    if (occurrences.length > 1) {
      result.duplicatePrefixes.push({ prefix, occurrences });
    }
  }

  const allPrefixes = new Set(prefixIndex.keys());
  for (const [group, expected] of Object.entries(REQUIRED_GROUPS)) {
    const missing = expected.filter((p) => !allPrefixes.has(p));
    if (missing.length > 0) {
      result.missingPrefixesByGroup[group] = missing;
      result.missingPrefixesFlat.push(...missing);
    }
  }

  const success =
    result.packageJsonValid &&
    result.invalidJsonFiles.length === 0 &&
    result.duplicateKeyFiles.length === 0 &&
    result.bannedShelbPrefixes.length === 0 &&
    result.duplicatePrefixes.length === 0 &&
    result.missingPrefixesFlat.length === 0 &&
    result.unregisteredFiles.length === 0;

  result.success = success;

  if (EMIT_JSON) {
    process.stdout.write(JSON.stringify(result, null, 2));
  } else {
    printHumanReport(result);
  }

  if (EMIT_REPORT) {
    writeMarkdownReport(result);
  }

  process.exit(success ? 0 : 1);
}

function printHumanReport(r) {
  console.log("Shelb Snippets - validation report");
  console.log("===================================");
  console.log(`Snippet files scanned : ${r.fileCount}`);
  console.log(`Snippets discovered   : ${r.snippetCount}`);
  console.log(`package.json valid    : ${r.packageJsonValid ? "yes" : "NO"}`);
  if (r.packageJsonError) console.log(`  error: ${r.packageJsonError}`);
  console.log(`Invalid JSON files    : ${r.invalidJsonFiles.length}`);
  for (const f of r.invalidJsonFiles) console.log(`  - ${f.file}: ${f.error}`);
  console.log(`Duplicate-key files   : ${r.duplicateKeyFiles.length}`);
  for (const f of r.duplicateKeyFiles)
    console.log(`  - ${f.file}: ${f.duplicates.join(", ")}`);
  console.log(`Banned shelb- prefixes: ${r.bannedShelbPrefixes.length}`);
  for (const f of r.bannedShelbPrefixes.slice(0, 20))
    console.log(`  - ${f.file} :: ${f.prefix}`);
  console.log(`Duplicate prefixes    : ${r.duplicatePrefixes.length}`);
  for (const dp of r.duplicatePrefixes.slice(0, 20)) {
    console.log(
      `  - ${dp.prefix} -> ${dp.occurrences.map((o) => o.file).join(", ")}`
    );
  }
  console.log(`Unregistered files    : ${r.unregisteredFiles.length}`);
  for (const f of r.unregisteredFiles) console.log(`  - ${f}`);
  const missingCount = r.missingPrefixesFlat.length;
  console.log(`Missing required pfx  : ${missingCount}`);
  for (const [group, missing] of Object.entries(r.missingPrefixesByGroup)) {
    console.log(`  - ${group}: ${missing.length} missing (${missing.slice(0, 5).join(", ")}${missing.length > 5 ? ", ..." : ""})`);
  }
  console.log("---");
  console.log(r.success ? "VALIDATION: PASS" : "VALIDATION: FAIL");
}

function writeMarkdownReport(r) {
  const lines = [];
  const now = new Date().toISOString();
  lines.push("# Shelb Snippets - Validation Report");
  lines.push("");
  lines.push(`_Generated: ${now}_`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- **Total snippet files scanned:** ${r.fileCount}`);
  lines.push(`- **Total snippets discovered:** ${r.snippetCount}`);
  lines.push(`- **package.json valid JSON:** ${r.packageJsonValid ? "yes" : "NO"}`);
  lines.push(`- **Invalid JSON files:** ${r.invalidJsonFiles.length}`);
  lines.push(`- **Duplicate-key files:** ${r.duplicateKeyFiles.length}`);
  lines.push(`- **Banned \`shelb-\` prefixes:** ${r.bannedShelbPrefixes.length}`);
  lines.push(`- **Duplicate prefixes:** ${r.duplicatePrefixes.length}`);
  lines.push(`- **Unregistered snippet files:** ${r.unregisteredFiles.length}`);
  lines.push(`- **Missing required prefixes:** ${r.missingPrefixesFlat.length}`);
  lines.push("");
  lines.push(`**Final status:** ${r.success ? "PASS (marketplace ready)" : "FAIL"}`);
  lines.push("");
  if (r.invalidJsonFiles.length) {
    lines.push("## Invalid JSON");
    lines.push("");
    for (const f of r.invalidJsonFiles) lines.push(`- \`${f.file}\` -> ${f.error}`);
    lines.push("");
  }
  if (r.duplicateKeyFiles.length) {
    lines.push("## Duplicate JSON keys");
    lines.push("");
    for (const f of r.duplicateKeyFiles)
      lines.push(`- \`${f.file}\`: ${f.duplicates.join(", ")}`);
    lines.push("");
  }
  if (r.bannedShelbPrefixes.length) {
    lines.push("## Banned `shelb-` prefixes");
    lines.push("");
    for (const f of r.bannedShelbPrefixes)
      lines.push(`- \`${f.file}\` :: ${f.prefix} (${f.key})`);
    lines.push("");
  }
  if (r.duplicatePrefixes.length) {
    lines.push("## Duplicate prefixes");
    lines.push("");
    for (const dp of r.duplicatePrefixes)
      lines.push(`- \`${dp.prefix}\` -> ${dp.occurrences.map((o) => `${o.file}#${o.key}`).join(", ")}`);
    lines.push("");
  }
  if (r.unregisteredFiles.length) {
    lines.push("## Snippet files NOT registered in package.json");
    lines.push("");
    for (const f of r.unregisteredFiles) lines.push(`- \`${f}\``);
    lines.push("");
  }
  if (Object.keys(r.missingPrefixesByGroup).length) {
    lines.push("## Missing required prefixes");
    lines.push("");
    for (const [group, missing] of Object.entries(r.missingPrefixesByGroup)) {
      lines.push(`### ${group} (${missing.length} missing)`);
      lines.push("");
      lines.push("```");
      lines.push(missing.join(", "));
      lines.push("```");
      lines.push("");
    }
  }
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join("\n"), "utf8");
}

main();
