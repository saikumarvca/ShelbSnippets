# Changelog

## 0.2.0

Website + Storefront Block Snippets release.

### Added — 960 new snippets across 6 categories

- **React website sections (200)** — 10 ranges: `srehero01..20`, `sreabout01..20`, `sreservices01..20`, `srefeature01..20`, `srenew01..20`, `sretest01..20`, `srefaq01..20`, `srecontact01..20`, `srefooter01..20`, `srecta01..20`.
- **Website content blocks (160)** — 8 ranges: `sreblog01..20`, `srepricing01..20`, `srestats01..20`, `sreteam01..20`, `sregallery01..20`, `sretimeline01..20`, `srewhy01..20`, `srebrand01..20`.
- **Carousel blocks (80)** — 4 ranges: `srecaro01..20`, `srehcaro01..20`, `sreimgcaro01..20`, `srelogocaro01..20`.
- **E-commerce storefront (200)** — 10 ranges: `sehome01..20`, `sehero01..20`, `secat01..20`, `seprodcaro01..20`, `sehprodcaro01..20`, `sepcard01..20`, `seoffer01..20`, `sedeal01..20`, `sebrand01..20`, `secollection01..20`.
- **Next.js App Router sections (160)** — 8 ranges: `snxhero01..20`, `snxabout01..20`, `snxservices01..20`, `snxcaro01..20`, `snxprodcaro01..20`, `snxnewsletter01..20`, `snxfooter01..20`, `snxhome01..20`. Use `export default function`, `'use client'` only when state is needed, `next/image` for image optimization, and `Link` from `next/link` for navigation.
- **Vite + React Router sections (160)** — 8 ranges: `svthero01..20`, `svtabout01..20`, `svtservices01..20`, `svtcaro01..20`, `svtprodcaro01..20`, `svtnewsletter01..20`, `svtfooter01..20`, `svthome01..20`. Use standard `<img>` tags and a `Link` placeholder from `react-router-dom` only where routing is relevant.

### Quality

- Every new body is React + TypeScript, Tailwind-only, accessible (semantic `<section>` + `aria-labelledby`, `role="tablist"`, `role="dialog"`, etc.), and dependency-free.
- Validation: JSON valid, 0 duplicate prefixes, 0 duplicate keys, 0 banned `shelb-` prefixes, 100% TypeScript parse-clean.

### Docs

- README extended with a new top-level **Website and Storefront Block Snippets** section above License (1,355 → 1,459 lines).
- New report at `docs/WEBSITE_STOREFRONT_SNIPPET_REPORT.md`.

### Compatibility

- All previously documented prefixes — short (`scomp`, `sehero`, `secomapp`, `selogin`, `serp`, …) and numbered (`snxapi01`, `svtpage01`, `sauth01`, `sapi11`, `srepo03`, `sctrl19`, `szuauth20`, …) — continue to expand exactly as before. Total library size: **2,483 snippets across 38 files**.

## 0.1.0
- Initial scaffold with snippets, generators, and workspace intelligence.
