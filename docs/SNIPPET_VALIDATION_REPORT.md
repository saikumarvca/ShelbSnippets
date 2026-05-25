# Shelb Snippets — Validation Report

_Generated: 2026-05-25 (Next.js + Vite website section variants pass)_

## 1. Summary

| Check                                                   | Result            |
|---------------------------------------------------------|-------------------|
| Total snippet files scanned                             | **38**            |
| Total snippets discovered                               | **2,483**         |
| `package.json` valid JSON                               | PASS              |
| Invalid `.code-snippets` JSON files                     | **0**             |
| Duplicate JSON keys in any file                         | **0**             |
| Prefixes starting with `shelb-`                         | **0**             |
| Duplicate prefixes across files                         | **0**             |
| Missing required prefixes (all groups)                  | **0**             |
| Snippet files not registered in `package.json`          | **0**             |
| TypeScript parse-check (200 e-com snippets)             | **0** failures    |
| TypeScript parse-check (80 marketing snippets)          | **0** failures    |
| TypeScript parse-check (100 content snippets — round 1) | **0** failures    |
| TypeScript parse-check (120 storefront snippets)        | **0** failures    |
| TypeScript parse-check (100 commerce snippets)          | **0** failures    |
| TypeScript parse-check (100 content snippets — round 2) | **0** failures    |
| TypeScript parse-check (160 Next.js section snippets)   | **0** failures    |
| TypeScript parse-check (160 Vite section snippets)      | **0** failures    |
| `npm run validate:snippets`                             | exit 0            |

**Marketplace readiness: READY.**

---

## 2. Scope of the latest pass (Next.js + Vite website sections)

Two files were edited in this pass — strict **append-only**:

- `snippets/nextjs-page-blocks.code-snippets`
- `snippets/vite-blocks.code-snippets`

### Next.js (`nextjs-page-blocks.code-snippets`) — 260 total

| Family             | Count | Notes                                                     |
|--------------------|-------|-----------------------------------------------------------|
| `snxdash`          | 20    | Preserved from a previous pass.                           |
| `snxlayout`        | 20    | Preserved from a previous pass.                           |
| `snxform`          | 20    | Preserved from a previous pass.                           |
| `snxtable`         | 20    | Preserved from a previous pass.                           |
| `snxmeta`          | 20    | Preserved from a previous pass.                           |
| `snxhero`          | 20    | **New** — App Router section variants.                    |
| `snxabout`         | 20    | **New** — App Router section variants.                    |
| `snxservices`      | 20    | **New** — App Router section variants.                    |
| `snxcaro`          | 20    | **New** — App Router section variants.                    |
| `snxprodcaro`      | 20    | **New** — App Router section variants.                    |
| `snxnewsletter`    | 20    | **New** — App Router section variants.                    |
| `snxfooter`        | 20    | **New** — App Router section variants.                    |
| `snxhome`          | 20    | **New** — App Router section variants.                    |

### Vite (`vite-blocks.code-snippets`) — 320 total

| Family             | Count | Notes                                                     |
|--------------------|-------|-----------------------------------------------------------|
| `svtlogin`         | 20    | Preserved from a previous pass.                           |
| `svtreg`           | 20    | Preserved from a previous pass.                           |
| `svtdash`          | 20    | Preserved from a previous pass.                           |
| `svtpage`          | 20    | Preserved from a previous pass.                           |
| `svtroute`         | 20    | Preserved from a previous pass.                           |
| `svtlayout`        | 20    | Preserved from a previous pass.                           |
| `svtenv`           | 20    | Preserved from a previous pass.                           |
| `svtconfig`        | 20    | Preserved from a previous pass.                           |
| `svthero`          | 20    | **New** — React + TS section variants.                    |
| `svtabout`         | 20    | **New** — React + TS section variants.                    |
| `svtservices`      | 20    | **New** — React + TS section variants.                    |
| `svtcaro`          | 20    | **New** — React + TS section variants.                    |
| `svtprodcaro`      | 20    | **New** — React + TS section variants.                    |
| `svtnewsletter`    | 20    | **New** — React + TS section variants.                    |
| `svtfooter`        | 20    | **New** — React + TS section variants.                    |
| `svthome`          | 20    | **New** — React + TS section variants.                    |

### Conventions applied

| Convention                                         | Next.js | Vite |
|----------------------------------------------------|---------|------|
| `export default function`                          | yes     | yes  |
| `'use client'` only when state/effects are used     | yes     | n/a  |
| `import Image from "next/image"` only when useful   | yes     | n/a  |
| Standard `<img>` tags                              | n/a     | yes  |
| `import Link from "next/link"` when nav exists      | yes     | n/a  |
| `import { Link } from "react-router-dom"` when nav  | n/a     | yes  |
| Tailwind CSS only, dependency-free                  | yes     | yes  |
| React `useState` / `useEffect` only when needed     | yes     | yes  |

The generator is reproducible:

```
node scripts/gen_next_vite_sections.js
```

---

## 2a. Scope of an earlier pass (website-content-blocks, round 2)

Only one file was edited in this pass: `snippets/website-content-blocks.code-snippets`.
No sibling files were touched in this pass.

`website-content-blocks.code-snippets` now contains **200 snippets**
across 10 families:

| Family         | Count | Notes                                                  |
|----------------|-------|--------------------------------------------------------|
| `srenew`       | 20    | Preserved from a previous pass.                        |
| `sretest`      | 20    | Preserved from a previous pass.                        |
| `srefaq`       | 20    | Preserved from a previous pass.                        |
| `srecontact`   | 20    | Preserved from a previous pass.                        |
| `srefooter`    | 20    | Preserved from a previous pass.                        |
| `srepricing`   | 20    | New, hand-authored to the user's 20 exact labels.      |
| `srestats`     | 20    | New, hand-authored to the user's 20 exact labels.      |
| `sreteam`      | 20    | New, hand-authored to the user's 20 exact labels.      |
| `sregallery`   | 20    | New, hand-authored to the user's 20 exact labels.      |
| `sretimeline`  | 20    | New, hand-authored to the user's 20 exact labels.      |

All 100 newly-authored bodies are React + TypeScript + Tailwind CSS, use
typed `Plan` / `Stat` / `Member` / `Item` / `Step` sample arrays where
useful, use `useState` for the snippets that require billing toggle,
department tabs, gallery filter, gallery lightbox and tag filter behaviour,
and use accessible markup (`section` + `aria-labelledby`, `role="tablist"` +
`aria-selected`, `role="dialog" + aria-modal`, semantic `<ol>` / `<dl>` /
`<dt>` / `<dd>` / `<figure>` / `<figcaption>`). They never reach for
external dependencies.

The generator is reproducible:

```
node scripts/gen_website_content_2.js
```

---

## 2a. Scope of the previous pass (website-commerce-blocks)

Only one file was edited in this pass: `snippets/website-commerce-blocks.code-snippets`.
Three sibling files were edited only to remove duplicate prefixes that have moved
into the commerce-blocks file:

- `snippets/ecommerce-storefront-blocks.code-snippets`: removed `sehome##`,
  `sebrand##`, `secollection##` (60 prefixes).
- `snippets/website-content-blocks.code-snippets`: removed `sreblog##`
  (20 prefixes).
- `snippets/website-marketing-blocks.code-snippets`: removed `srecta##`
  (20 prefixes).

No new content was written into any sibling file.

`website-commerce-blocks.code-snippets` now contains **120 snippets**
across 6 families:

| Family         | Count | Notes                                                  |
|----------------|-------|--------------------------------------------------------|
| `srelogocaro`  | 20    | Preserved from a previous pass.                        |
| `sehome`       | 20    | New, hand-authored to the user's 20 exact labels.      |
| `sebrand`      | 20    | New, hand-authored to the user's 20 exact labels.      |
| `secollection` | 20    | New, hand-authored to the user's 20 exact labels.      |
| `sreblog`      | 20    | New, hand-authored to the user's 20 exact labels.      |
| `srecta`       | 20    | New, hand-authored to the user's 20 exact labels.      |

All 100 newly-authored bodies are React + TypeScript + Tailwind CSS, use
typed `Brand` / `Collection` / `Post` sample arrays where useful, use
`useState` for the snippets that require form, accordion, filter, search
or countdown behaviour, include Add to cart / View all / Subscribe /
Read more / Talk to sales buttons with business-flavoured copy, and use
accessible markup (`section` + `aria-labelledby`, `role="tablist"` +
`aria-selected`, `role="status"`, semantic `<header>` / `<footer>` /
`<dl>` / `<dt>` / `<dd>`). They never reach for external dependencies.

All 15 legacy short `se...` prefixes inside `snippets/ecommerce.code-snippets`
remain untouched.

The generator is reproducible:

```
node scripts/gen_website_commerce.js
```

---

## 2a. Scope of the previous pass (ecommerce-storefront-blocks)

Only one file was edited in this pass: `snippets/ecommerce-storefront-blocks.code-snippets`.
One sibling file (`snippets/ecommerce-product-blocks.code-snippets`) was edited
only to remove duplicate prefixes (`sepcard##`) that have moved into the
storefront file. No new content was written into the sibling.

`ecommerce-storefront-blocks.code-snippets` now contains **200 snippets**
across 10 families:

| Family         | Count | Notes                                                  |
|----------------|-------|--------------------------------------------------------|
| `sehero`       | 20    | Preserved from a previous pass.                        |
| `sebrand`      | 20    | Preserved from a previous pass.                        |
| `secollection` | 20    | Preserved from a previous pass.                        |
| `sehome`       | 20    | Preserved from a previous pass.                        |
| `seprodcaro`   | 20    | New, hand-authored to the user's 20 exact labels.      |
| `sehprodcaro`  | 20    | New, hand-authored to the user's 20 exact labels.      |
| `sepcard`      | 20    | New, hand-authored to the user's 20 exact labels.      |
| `secat`        | 20    | New, hand-authored to the user's 20 exact labels.      |
| `seoffer`      | 20    | New, hand-authored to the user's 20 exact labels.      |
| `sedeal`       | 20    | New, hand-authored to the user's 20 exact labels.      |

All 120 newly-authored bodies are React + TypeScript + Tailwind CSS, use
typed product / category / offer / deal sample arrays where useful, use
horizontal scroll with `overflow-x-auto` + `snap-x` + `snap-start` where
useful (e.g. `seprodcaro02`, every `sehprodcaro##`, several `secat##` /
`seoffer##` / `sedeal##`), include Add to cart / View details / View all
buttons, and use accessible markup (`section` + `aria-labelledby`,
`role="radiogroup" + aria-checked` for color/size swatches,
`role="tablist" + aria-selected`, `aria-pressed` for wishlist toggles,
`aria-live="polite"` for the copy-coupon toast). They never reach for
external dependencies.

All 15 legacy short `se...` prefixes inside `snippets/ecommerce.code-snippets`
(`secomapp`, `sehero`, `seplist`, `sepcard`, `sepdetail`, `secart`,
`secheckout`, `seaccount`, `selogin`, `seregister`, `seadmin`, `sevendor`,
`seapi`, `sequery`, `seaxios`) remain untouched.

The generator is reproducible:

```
node scripts/gen_ecommerce_storefront.js
```

---

## 2b. Scope of the earlier pass (website-content-blocks)

Only one file was edited in this pass: `snippets/website-content-blocks.code-snippets`.
Two sibling files (`snippets/website-marketing-blocks.code-snippets` and
`snippets/website-sections.code-snippets`) were edited only to remove
duplicate prefixes (`srenew##` from the former; `sretest##`, `srefaq##`,
`srecontact##`, `srefooter##` from the latter) that have moved into
`website-content-blocks.code-snippets`. No new content was written into
either sibling file.

`website-content-blocks.code-snippets` now contains **220 snippets**
across 11 families:

| Family         | Count | Notes                                              |
|----------------|-------|----------------------------------------------------|
| `sreblog`      | 20    | Preserved from a previous pass.                    |
| `srepricing`   | 20    | Preserved from a previous pass.                    |
| `srestats`     | 20    | Preserved from a previous pass.                    |
| `sreteam`      | 20    | Preserved from a previous pass.                    |
| `sregallery`   | 20    | Preserved from a previous pass.                    |
| `sretimeline`  | 20    | Preserved from a previous pass.                    |
| `srenew`       | 20    | New, hand-authored to the user's 20 exact labels.  |
| `sretest`      | 20    | New, hand-authored to the user's 20 exact labels.  |
| `srefaq`       | 20    | New, hand-authored to the user's 20 exact labels.  |
| `srecontact`   | 20    | New, hand-authored to the user's 20 exact labels.  |
| `srefooter`    | 20    | New, hand-authored to the user's 20 exact labels.  |

All 100 newly-authored bodies are React + TypeScript + Tailwind CSS, use
`useState` for the snippets that require form / accordion / search /
language-selector behaviour, use sample data arrays where useful, and
use accessible markup (`section` / `footer` / `aria-labelledby`,
`label[htmlFor]`, `dl`/`dt`/`dd`, `role="tablist" + aria-selected`,
`role="dialog" + aria-modal`, `role="status" / role="alert"`). They
never reach for external dependencies.

The generator is reproducible:

```
node scripts/gen_website_content.js
```

---

## 2c. Scope of the earlier pass (website-marketing-blocks)

Only one file was edited in this pass: `snippets/website-marketing-blocks.code-snippets`.
A second file (`snippets/website-sections.code-snippets`) was edited only
to remove duplicate prefixes (`sreabout##`, `sreservices##`, `srefeature##`)
that have now moved into the marketing-blocks file. No new content was
written into `website-sections.code-snippets`.

`website-marketing-blocks.code-snippets` now contains **140 snippets**
across 7 families:

| Family         | Count | Notes                                              |
|----------------|-------|----------------------------------------------------|
| `srenew`       | 20    | Preserved from previous pass.                      |
| `srecta`       | 20    | Preserved from previous pass.                      |
| `srebrand`     | 20    | Preserved from previous pass.                      |
| `sreabout`     | 20    | New, hand-authored to the user's 20 exact labels.  |
| `sreservices`  | 20    | New, hand-authored to the user's 20 exact labels.  |
| `srefeature`   | 20    | New, hand-authored to the user's 20 exact labels.  |
| `srewhy`       | 20    | Rewritten to the user's 20 exact labels.           |

All 80 newly-authored bodies are React + TypeScript + Tailwind CSS, use
sample data arrays where useful, use accessible markup (`section`,
`aria-labelledby`, `role="tablist"`, `details/summary`, semantic `dl`,
`ol`, `ul`), and never reach for external dependencies.

The generator is reproducible:

```
node scripts/gen_website_marketing.js
```

---

## 2d. Scope of the original e-commerce pass

This pass touched only three e-commerce snippet files:

- `snippets/ecommerce-auth-blocks.code-snippets` — left unchanged (already
  contained 40 hand-crafted, distinct snippets for `selogin01..20` and
  `seregister01..20`).
- `snippets/ecommerce-checkout-blocks.code-snippets` — fully rewritten. The
  60 prior stubs (one near-identical table template) were replaced with 60
  label-specific React + TypeScript + Tailwind components covering
  `secart01..20`, `secheckout01..20`, and `seorder01..20`.
- `snippets/ecommerce-admin-blocks.code-snippets` — fully rewritten. The
  60 prior stubs were replaced with 60 label-specific components covering
  `seaccount01..20`, `seadmin01..20`, and `sevendor01..20`.

The legacy file `snippets/ecommerce.code-snippets` (containing the
non-numbered prefixes such as `secart`, `secheckout`, `seadmin`, `selogin`,
`sevendor`, `seaxios`, `sequery`, `secomapp`, `sehero`, `seplist`,
`sepcard`, `sepdetail`, `seregister`, `seaccount`, `seapi`) was not modified;
all 15 listed legacy prefixes still resolve.

---

## 3. Required prefix groups — coverage

All required `se…` numbered groups are present at full `01..20` depth.

| Family         | Count | File |
|----------------|-------|------|
| `selogin`      | 20    | `ecommerce-auth-blocks.code-snippets`     |
| `seregister`   | 20    | `ecommerce-auth-blocks.code-snippets`     |
| `seproduct`    | 20    | `ecommerce-product-blocks.code-snippets`     |
| `sepcard`      | 20    | `ecommerce-storefront-blocks.code-snippets` (moved + rewritten) |
| `seprodcaro`   | 20    | `ecommerce-storefront-blocks.code-snippets` (rewritten) |
| `sehprodcaro`  | 20    | `ecommerce-storefront-blocks.code-snippets` (rewritten) |
| `secat`        | 20    | `ecommerce-storefront-blocks.code-snippets` (rewritten) |
| `seoffer`      | 20    | `ecommerce-storefront-blocks.code-snippets` (rewritten) |
| `sedeal`       | 20    | `ecommerce-storefront-blocks.code-snippets` (rewritten) |
| `sehome`       | 20    | `website-commerce-blocks.code-snippets` (moved + rewritten) |
| `sebrand`      | 20    | `website-commerce-blocks.code-snippets` (moved + rewritten) |
| `secollection` | 20    | `website-commerce-blocks.code-snippets` (moved + rewritten) |
| `sreblog`      | 20    | `website-commerce-blocks.code-snippets` (moved + rewritten) |
| `srecta`       | 20    | `website-commerce-blocks.code-snippets` (moved + rewritten) |
| `secart`       | 20    | `ecommerce-checkout-blocks.code-snippets` (rewritten) |
| `secheckout`   | 20    | `ecommerce-checkout-blocks.code-snippets` (rewritten) |
| `seorder`      | 20    | `ecommerce-checkout-blocks.code-snippets` (rewritten) |
| `seaccount`    | 20    | `ecommerce-admin-blocks.code-snippets`    (rewritten) |
| `seadmin`      | 20    | `ecommerce-admin-blocks.code-snippets`    (rewritten) |
| `sevendor`     | 20    | `ecommerce-admin-blocks.code-snippets`    (rewritten) |

The other required short-prefix families (React `sre…`, Next.js `snx…`,
Vite `svt…`, ERP `serp…`, Auth/API/State `sauth`/`sapi`/`srq`/`szu…`/
`ssvc`/`srepo`/`sctrl`) are unaffected by this pass and still complete.

---

## 4. Quality improvements in the rewritten files

Every label in the rewritten families now has a dedicated body (no more
shared template). Each body, where useful, includes:

- A sample data array (products, cart items, orders, customers, vendors,
  coupons, etc.) so the snippet expands into a runnable React component
  immediately.
- Tabstop placeholders for `API endpoint`, `product id`, `order id`,
  `customer id`, and `route path` values.
- Loading and empty states on list-driven UIs (`OrderList`, `OrderTracking`,
  `AccountAddresses`, `AccountWishlist`, `VendorProducts`, `VendorTickets`,
  `BasicCart`, …).
- Tailwind utility classes only — no external dependency imports.
- Use-cases covering D2C stores, multi-vendor marketplaces, admin
  dashboards, customer account portals, vendor portals, ERP integrations
  (vendor payouts, reports, GST settings, withdraw flow).

### Body-length sanity (post-rewrite)

| File                                       | Snippets | Avg lines | Min | Max |
|--------------------------------------------|----------|-----------|-----|-----|
| `ecommerce-auth-blocks.code-snippets`      | 40       | 41        | 28  | 69  |
| `ecommerce-checkout-blocks.code-snippets`  | 60       | 23        | 10  | 62  |
| `ecommerce-admin-blocks.code-snippets`     | 60       | 18        | 13  | 33  |
| `ecommerce-product-blocks.code-snippets`   | 20       | 23        | 23  | 23  |

The varied min/max for the two rewritten files confirms that each
snippet has its own body rather than a shared stub.

---

## 5. Generator reproducibility

The new `scripts/gen_missing_blocks.js` regenerates the three checkout +
admin + product + hooks files in one shot:

```
node scripts/gen_missing_blocks.js
```

Output:

```
wrote react-hooks-blocks.code-snippets       (20 snippets)
wrote ecommerce-product-blocks.code-snippets (40 snippets)
wrote ecommerce-checkout-blocks.code-snippets(60 snippets)
wrote ecommerce-admin-blocks.code-snippets   (60 snippets)
```

The generator now contains 120 hand-authored label-specific body factories
plus shared sample-data helpers (`sampleProducts`, `sampleCart`,
`sampleOrders`, `sampleCustomers`, `sampleVendors`), and shared Tailwind
class fragments. Re-running the generator is deterministic.

> **Note:** `ecommerce-auth-blocks.code-snippets` is hand-authored and is
> *not* regenerated by this script.

---

## 6. JSON / structural validation

- All 38 `.code-snippets` files parse as strict JSON (`JSON.parse`).
- Duplicate-key scan: 0 duplicates inside any file.
- `package.json → contributes.snippets` registers every file in
  `snippets/` (including the four touched in this pass) for the
  appropriate language scopes.

---

## 7. TypeScript parse-check

Each of the 200 e-commerce snippet bodies (across all four
`ecommerce-*-blocks` files) was parsed with the TypeScript compiler in
TSX mode after stripping VS Code tabstops. **All 200 bodies parsed with
0 syntax errors.**

---

## 8. Prefix policy compliance

- **`shelb-` prefix scan:** 0 hits across 2,163 snippets.
- **Short-namespace conformity:** every prefix in the touched files
  begins with `se`.
- **Cross-file duplicates:** 0.

---

## 9. Marketplace readiness

| Gate                                              | Status |
|---------------------------------------------------|--------|
| `package.json` parses & has required fields       | OK     |
| `main` entry point compiles (`tsc -p .`)          | OK     |
| All snippet files registered                      | OK     |
| All snippet files parse as JSON                   | OK     |
| No banned `shelb-` prefixes                       | OK     |
| No duplicate prefixes                             | OK     |
| All required prefix groups present                | OK     |
| All numbered e-com bodies parse as TS/TSX         | OK     |
| `npm run validate:snippets` exits 0               | OK     |
| `npm run package` (vsce) ready to invoke          | OK     |

**Approve for release.**
