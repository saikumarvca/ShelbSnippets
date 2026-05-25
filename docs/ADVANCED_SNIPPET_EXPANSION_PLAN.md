# Shelb Snippets — Advanced Snippet Expansion Plan

> Internal implementation plan for the next-wave, enterprise-grade snippet
> expansion across React, Next.js, Vite, ERP, E-commerce and shared Auth/API/
> State layers. This document is **additive only** — no existing commands,
> snippets, prefixes, or generator logic are removed.

---

## 1. Existing Extension Summary

**Identity:** Shelb Snippets — Turbo productivity toolkit for full-stack +
desktop ERP development.

**Publisher:** `ShelbTechnologiesPvtLtd`
**Extension ID:** `shelb-snippets`
**Current version:** `0.1.0`
**Entry point:** `./out/extension.js`

### Existing Commands (preserved exactly)

| Command ID | Title |
|---|---|
| `shelb.generateCrud` | Shelb: Generate CRUD Module |
| `shelb.generateERP`  | Shelb: Generate ERP Module |
| `shelb.generateTauri`| Shelb: Generate Tauri Desktop Module |
| `shelb.openSnippet`  | Shelb: Insert Snippet |

### Existing Configuration Keys (preserved)

`shelb.enableAI`, `shelb.enableERP`, `shelb.enableTauri`,
`shelb.enableWorkspaceDetection`, `shelb.defaultBackend`, `shelb.defaultFrontend`.

### Existing Views (preserved)

`snippetExplorer` in the Explorer view container — "Shelb Snippets".

### Existing Snippet Files (DO NOT MODIFY)

```
snippets/
  ai.code-snippets
  architecture.code-snippets
  database.code-snippets
  desktop.code-snippets
  devops.code-snippets
  ecommerce.code-snippets
  erp.code-snippets
  express.code-snippets
  go.code-snippets
  mongo.code-snippets
  nextjs.code-snippets
  prisma.code-snippets
  python.code-snippets
  react.code-snippets
  sqlite.code-snippets
  tailwind.code-snippets
  tauri.code-snippets
  vite.code-snippets
  zustand.code-snippets
```

---

## 2. Existing Prefix System

All Shelb prefixes are **short, lowercase, namespace-first** identifiers
beginning with `s`. They are never `shelb-…` and never use dashes.

| Namespace | Prefix | Domain |
|---|---|---|
| React              | `sre`   | JSX / TSX components, hooks, providers |
| Next.js            | `snx`   | App Router pages, layouts, API routes |
| Tailwind           | `stw`   | Utility class shortcuts |
| Prisma             | `spr`   | Schema models / relations |
| Zustand            | `szu`   | Stores, async actions, middleware |
| Express            | `sex`   | Routers, controllers, middleware |
| Go                 | `sgo`   | HTTP / Fiber / Gin scaffolds |
| Python             | `spy`   | FastAPI / pydantic |
| Tauri (Rust)       | `sta`   | IPC commands, plugins |
| ERP                | `serp`  | Domain modules and dashboards |
| Vite               | `svt`   | Config, plugins, env |
| SQLite             | `ssl`   | Drivers and queries |
| MongoDB            | `smg`   | Schemas and queries |
| DevOps             | `sdoc`, `sgi`, `sk8` | Docker / Git / Kubernetes |
| Desktop UI         | `sdesk` | Desktop shell layouts |
| Architecture       | `srepo`, `ssvc`, `smod`, `sctrl`, `sapi` | Layered architecture |
| AI                 | `sai`   | AI helpers |
| E-commerce         | `se`    | Storefront / cart / checkout |

**Hard rule:** new prefixes MUST extend an existing namespace and MUST follow
the `s<namespace><role><nn>` pattern. Examples like `shelb-login-01` are
forbidden.

---

## 3. New Shortcut Prefix Table

All new prefixes are zero-padded numeric (`01`–`20`) per role within an
existing namespace.

### React (`sre…`)

| Family    | Range                          | Purpose |
|-----------|--------------------------------|---------|
| Login     | `srelogin01`  … `srelogin20`  | Login screens (form, social, OTP, MFA) |
| Register  | `srereg01`    … `srereg20`    | Registration / signup flows |
| Dashboard | `sredash01`   … `sredash20`   | Dashboard shells / widgets / KPIs |
| Navbar    | `srenav01`    … `srenav20`    | Top navigation patterns |
| Sidebar   | `sreside01`   … `sreside20`   | Side navigation / collapsibles |
| Form      | `sreform01`   … `sreform20`   | RHF / Zod / controlled forms |
| Table     | `sretable01`  … `sretable20`  | TanStack / virtualized tables |
| Modal     | `sremodal01`  … `sremodal20`  | Dialogs, drawers, confirm modals |
| Card      | `srecard01`   … `srecard20`   | Card variants (stat, profile, media) |
| Button    | `srebtn01`    … `srebtn20`    | Button variants (icon, loading, group) |
| Input     | `sreinput01`  … `sreinput20`  | Inputs (text, password, file, tags) |
| Layout    | `srelayout01` … `srelayout20` | App shells, split panes, grids |
| Hook      | `srehook01`   … `srehook20`   | Reusable hooks |

### Next.js (`snx…`)

| Family    | Range                           |
|-----------|---------------------------------|
| Login     | `snxlogin01`  … `snxlogin20`   |
| Register  | `snxreg01`    … `snxreg20`     |
| Dashboard | `snxdash01`   … `snxdash20`    |
| Layout    | `snxlayout01` … `snxlayout20`  |
| Form      | `snxform01`   … `snxform20`    |
| Table     | `snxtable01`  … `snxtable20`   |
| Auth      | `snxauth01`   … `snxauth20`    |
| API       | `snxapi01`    … `snxapi20`     |
| Middleware| `snxmid01`    … `snxmid20`     |
| Metadata  | `snxmeta01`   … `snxmeta20`    |

### Vite (`svt…`)

| Family    | Range                           |
|-----------|---------------------------------|
| Login     | `svtlogin01`  … `svtlogin20`   |
| Register  | `svtreg01`    … `svtreg20`     |
| Dashboard | `svtdash01`   … `svtdash20`    |
| Page      | `svtpage01`   … `svtpage20`    |
| Route     | `svtroute01`  … `svtroute20`   |
| Layout    | `svtlayout01` … `svtlayout20`  |
| Env       | `svtenv01`    … `svtenv20`     |
| Config    | `svtconfig01` … `svtconfig20`  |

### ERP (`serp…`)

| Family    | Range                              |
|-----------|------------------------------------|
| Login     | `serplogin01`  … `serplogin20`    |
| Dashboard | `serpdash01`   … `serpdash20`     |
| Form      | `serpform01`   … `serpform20`     |
| Table     | `serptable01`  … `serptable20`    |
| Module    | `serpmodule01` … `serpmodule20`   |
| Admin     | `serpadmin01`  … `serpadmin20`    |
| Report    | `serpreport01` … `serpreport20`   |
| Audit     | `serpaudit01`  … `serpaudit20`    |
| Finance   | `serpfin01`    … `serpfin20`      |
| Inventory | `serpinv01`    … `serpinv20`      |

### E-commerce (`se…`)

| Family    | Range                                |
|-----------|--------------------------------------|
| Login     | `selogin01`     … `selogin20`       |
| Register  | `seregister01`  … `seregister20`    |
| Product   | `seproduct01`   … `seproduct20`     |
| ProductCard | `sepcard01`   … `sepcard20`       |
| Cart      | `secart01`      … `secart20`        |
| Checkout  | `secheckout01`  … `secheckout20`    |
| Order     | `seorder01`     … `seorder20`       |
| Account   | `seaccount01`   … `seaccount20`     |
| Admin     | `seadmin01`     … `seadmin20`       |
| Vendor    | `sevendor01`    … `sevendor20`      |

### Shared Auth / API / State

| Family             | Range                       |
|--------------------|-----------------------------|
| Auth (shared)      | `sauth01`   … `sauth20`    |
| API client         | `sapi01`    … `sapi20`     |
| React Query        | `srq01`     … `srq20`      |
| Zustand auth       | `szuauth01` … `szuauth20`  |
| Zustand CRUD       | `szucrud01` … `szucrud20`  |
| Service layer      | `ssvc01`    … `ssvc20`     |
| Repository layer   | `srepo01`   … `srepo20`    |
| Controller layer   | `sctrl01`   … `sctrl20`    |

---

## 4. New Snippet Namespaces To Be Added

These namespaces extend, but never replace, existing files.

- `react-auth-blocks` — `srelogin*`, `srereg*`
- `react-ui-blocks` — `srenav*`, `sreside*`, `sremodal*`, `srecard*`, `srebtn*`, `sreinput*`, `srelayout*`, `srehook*`, `sreform*`, `sretable*`
- `react-dashboard-blocks` — `sredash*`
- `nextjs-auth-blocks` — `snxlogin*`, `snxreg*`, `snxauth*`
- `nextjs-page-blocks` — `snxdash*`, `snxlayout*`, `snxform*`, `snxtable*`, `snxmeta*`
- `nextjs-api-blocks` — `snxapi*`, `snxmid*`
- `vite-blocks` — `svtlogin*`, `svtreg*`, `svtdash*`, `svtpage*`, `svtroute*`, `svtlayout*`, `svtenv*`, `svtconfig*`
- `erp-ui-blocks` — `serplogin*`, `serpdash*`, `serpform*`, `serptable*`, `serpmodule*`, `serpadmin*`, `serpreport*`, `serpaudit*`, `serpfin*`, `serpinv*`
- `ecommerce-auth-blocks` — `selogin*`, `seregister*`, `seaccount*`
- `ecommerce-checkout-blocks` — `secart*`, `secheckout*`, `seorder*`
- `ecommerce-admin-blocks` — `seadmin*`, `sevendor*`, `seproduct*`, `sepcard*`
- `auth-api-state-blocks` — `sauth*`, `sapi*`, `srq*`, `szuauth*`, `szucrud*`, `ssvc*`, `srepo*`, `sctrl*`

---

## 5. File Structure Proposal

```
snippets/
  # — existing, untouched —
  ai.code-snippets
  architecture.code-snippets
  database.code-snippets
  desktop.code-snippets
  devops.code-snippets
  ecommerce.code-snippets
  erp.code-snippets
  express.code-snippets
  go.code-snippets
  mongo.code-snippets
  nextjs.code-snippets
  prisma.code-snippets
  python.code-snippets
  react.code-snippets
  sqlite.code-snippets
  tailwind.code-snippets
  tauri.code-snippets
  vite.code-snippets
  zustand.code-snippets

  # — new (empty {} placeholders this step) —
  react-auth-blocks.code-snippets
  react-ui-blocks.code-snippets
  react-dashboard-blocks.code-snippets
  nextjs-auth-blocks.code-snippets
  nextjs-page-blocks.code-snippets
  nextjs-api-blocks.code-snippets
  vite-blocks.code-snippets
  erp-ui-blocks.code-snippets
  ecommerce-auth-blocks.code-snippets
  ecommerce-checkout-blocks.code-snippets
  ecommerce-admin-blocks.code-snippets
  auth-api-state-blocks.code-snippets

docs/
  ADVANCED_SNIPPET_EXPANSION_PLAN.md   ← this file
```

---

## 6. Naming Convention Rules

1. **Prefix shape:** `s` + namespace + role + 2-digit index, e.g. `srelogin01`.
2. **All lowercase**, no dashes, no underscores in prefixes.
3. **Index is mandatory** and zero-padded (`01`–`20`).
4. **Snippet key (display name)** in the JSON map must end with the prefix in
   parentheses, e.g. `"React Login Form (srelogin01)": { … }`.
5. **`description`** must be a single sentence in title case.
6. **`scope` field is omitted** — language activation is controlled by
   `contributes.snippets[].language` in `package.json`.
7. **Body** uses standard VS Code snippet syntax (`${1:…}`, `${0}`).
8. **Never overwrite an existing prefix.** Before adding any prefix, grep all
   existing `.code-snippets` files for collision.
9. **One family per file** wherever practical, to keep diffs small.
10. **Files are valid JSON** — no trailing commas, no comments.

---

## 7. Validation Checklist

Before each commit in the expansion series:

- [ ] `package.json` parses as valid JSON (`node -e "JSON.parse(require('fs').readFileSync('package.json','utf8'))"`).
- [ ] Every new `.code-snippets` file parses as valid JSON.
- [ ] Existing snippet files are byte-identical (no edits) unless a fix is
      explicitly approved.
- [ ] Existing `contributes.commands`, `contributes.configuration`,
      `contributes.views`, and existing `contributes.snippets` entries are
      preserved exactly.
- [ ] Existing activation events (none currently declared — implicit) remain
      unchanged.
- [ ] No new prefix collides with any prefix in the existing snippet files.
- [ ] Every new file is registered in `contributes.snippets` with at least the
      correct primary language.
- [ ] `tsc -p .` still compiles `src/` without new errors.
- [ ] `vsce package` still produces a valid `.vsix`.

---

## 8. README Update Plan

The current `README.md` (687 lines) is the canonical reference for users and
must remain intact. New sections will be **appended only**, in this order:

1. **New Section — “Enterprise Snippet Packs”**
   - Brief intro: what the new blocks are and which files they live in.
2. **Subsection per pack** with a compact prefix table:
   - React Auth Blocks (`srelogin01–20`, `srereg01–20`)
   - React UI Blocks (`srenav`, `sreside`, `sremodal`, `srecard`, `srebtn`, `sreinput`, `srelayout`, `srehook`, `sreform`, `sretable`)
   - React Dashboard Blocks (`sredash01–20`)
   - Next.js Auth / Page / API Blocks
   - Vite Blocks
   - ERP UI Blocks
   - E-commerce Auth / Checkout / Admin Blocks
   - Shared Auth / API / State Blocks
3. **Usage note** — type any prefix in a matching file type and press `Tab`.
4. **Versioning note** — new packs ship in a minor version bump
   (`0.1.0` → `0.2.0`).

No existing README section is removed, renamed, or reordered.

---

## 9. Marketplace Safety Checklist

- [ ] `publisher` unchanged (`ShelbTechnologiesPvtLtd`).
- [ ] `name` unchanged (`shelb-snippets`).
- [ ] `displayName` unchanged (`Shelb Snippets`).
- [ ] `description` unchanged (or only enriched, never narrowed).
- [ ] `engines.vscode` unchanged (`^1.79.0`).
- [ ] `categories` unchanged (`Snippets`, `Other`).
- [ ] `keywords` may be appended to, never removed.
- [ ] `icon` path unchanged (`media/icon.png`).
- [ ] `main` unchanged (`./out/extension.js`).
- [ ] All existing `contributes.commands` preserved.
- [ ] All existing `contributes.configuration` properties preserved.
- [ ] All existing `contributes.views` preserved.
- [ ] All existing `contributes.snippets` entries preserved; new entries are
      appended after them.
- [ ] `.vscodeignore` continues to exclude `src/`, `node_modules/`, build
      artifacts, and the existing `docs/` folder is included by default unless
      explicitly excluded.
- [ ] `LICENSE` and `CHANGELOG.md` untouched in this step; CHANGELOG to be
      updated when actual snippet bodies land.
- [ ] No telemetry, no remote calls, no AI keys shipped in snippets.
- [ ] Generator commands (`shelb.generateCrud`, `shelb.generateERP`,
      `shelb.generateTauri`, `shelb.openSnippet`) continue to function — the
      expansion is snippet-only.

---

## 10. Implementation Phases

This document covers **Phase 0** only.

| Phase | Scope |
|---|---|
| 0 | Audit, create empty placeholder files, register them in `package.json`, ship this plan. **(current step)** |
| 1 | Populate `react-auth-blocks` + `react-ui-blocks` + `react-dashboard-blocks`. |
| 2 | Populate Next.js packs (`nextjs-auth`, `nextjs-page`, `nextjs-api`). |
| 3 | Populate `vite-blocks`. |
| 4 | Populate `erp-ui-blocks`. |
| 5 | Populate the three E-commerce packs. |
| 6 | Populate `auth-api-state-blocks`. |
| 7 | README append, CHANGELOG bump, `0.2.0` release. |

Each phase is independently shippable and never modifies prior phases’ output.
