# Shelb Snippets

**Turbo productivity toolkit for full-stack + desktop ERP development.**  
Scaffolds typed, production-ready code in seconds — controllers, services, repositories, React Query hooks, Zustand stores, Tauri IPC, and full ERP domain modules.

---

## Commands

Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and search for any of the following:

| Command | Description |
|---|---|
| `Shelb: Generate CRUD Module` | Scaffolds a full typed CRUD module — controller, service, repository, Express router, React list + form, Zustand store, React Query hooks |
| `Shelb: Generate ERP Module` | Generates domain-typed TypeScript modules for one or more ERP domains (employees, invoices, payroll, attendance, ledger, reports) |
| `Shelb: Generate Tauri Desktop Module` | Creates a complete Tauri v1 project — Rust IPC commands, Vite + React frontend, typed `ipc.ts` wrapper |
| `Shelb: Insert Snippet` | Inserts a snippet from the Shelb Snippets panel in the Explorer sidebar |

---

## Snippet Reference

All prefixes start with `s`. Type the prefix in the relevant file type and press `Tab` to expand.

### React — JSX / TSX

| Prefix | Description |
|---|---|
| `sre` | Functional component |
| `srem` | `React.memo` component |
| `sref` | `forwardRef` component |
| `sreh` | Custom hook scaffold |
| `sres` | `useState` boilerplate |
| `sree` | `useEffect` boilerplate |
| `srec` | Context provider + `useContext` hook |
| `srer` | React Router page |
| `sreq` | React Query provider setup |
| `sret` | TanStack Table starter |
| `sred` | Dashboard widget |
| `sremd` | Modal component |
| `sreform` | Form template |
| `srecrud` | CRUD page scaffold |
| `sreside` | Sidebar layout |
| `sretab` | Tab system |
| `sreerp` | ERP screen layout (sidebar + main) |

### Next.js — JS / TS

| Prefix | Description |
|---|---|
| `snx` | App Router page |
| `snxl` | Root layout |
| `snxa` | API route handler |
| `snxs` | Server action |
| `snxm` | Middleware |
| `snxh` | Page metadata export |
| `snxd` | Dashboard page |
| `snxauth` | Auth layout |
| `snxcrud` | CRUD route scaffold |
| `snxtable` | Data table page |
| `snxform` | Server-side form |

### Tailwind — JSX / TSX

| Prefix | Description |
|---|---|
| `stw` | `flex items-center justify-center` |
| `stwc` | Card: `p-4 bg-white rounded shadow` |
| `stwg` | Responsive 3-column grid |
| `stwd` | Dashboard layout class |
| `stws` | Sidebar `w-64 bg-gray-50` |
| `stwn` | Navbar flex layout |
| `stwm` | Modal class |
| `stwf` | Form `space-y-4` layout |
| `stwt` | Table `divide-y` layout |
| `stwcmd` | Command bar flex |

### Prisma — `.prisma` files

| Prefix | Description |
|---|---|
| `spr` | Model with `cuid` id + timestamps |
| `sprr` | One-to-many relation pair |
| `spre` | Enum |
| `spri` | `@@index` directive |
| `spra` | Audit log model |
| `sprm` | Multitenancy pattern hint |
| `sprcrud` | Minimal CRUD model |
| `sprsoft` | Soft-delete `deletedAt` field |

### Zustand — TS

| Prefix | Description |
|---|---|
| `szu` | Zustand store scaffold |
| `szua` | Async action |
| `szup` | Persisted store hint |
| `szum` | Middleware example |
| `szuc` | CRUD state helpers |

### Express — TS

| Prefix | Description |
|---|---|
| `sex` | Express app entry point |
| `sexr` | Router scaffold |
| `sexc` | Controller handler stub |
| `sexm` | Middleware template |
| `sexa` | Auth middleware |
| `sexcrud` | CRUD controller skeleton |
| `sexerr` | Error handler middleware |
| `sexsvc` | Service layer stub |

### Go — `.go` files

| Prefix | Description |
|---|---|
| `sgo` | HTTP handler (net/http) |
| `sgof` | Fiber server scaffold |
| `sgog` | Gin server scaffold |
| `sgor` | Route registration |
| `sgow` | Worker pool pattern |
| `sgogr` | Goroutine |
| `sgos` | Struct definition |
| `sgoi` | Interface definition |
| `sgorepo` | Repository pattern |
| `sgosvc` | Service layer |
| `sgows` | WebSocket scaffold |
| `sgoerp` | ERP API starter |

### Python — `.py` files

| Prefix | Description |
|---|---|
| `spy` | FastAPI app scaffold |
| `spyf` | FastAPI starter |
| `spyfl` | Flask app scaffold |
| `spya` | Async worker |
| `spyc` | Python class |
| `spyb` | Background job |
| `spyauto` | Automation script |
| `spyfile` | File processor |

### Tauri / Rust — `.rs` files

| Prefix | Description |
|---|---|
| `sta` | `#[tauri::command]` IPC handler |
| `star` | Rust function |
| `stasql` | SQLite integration hint |
| `statray` | Tray icon setup |
| `staup` | Desktop updater |
| `staipc` | Secure IPC pattern |
| `stawin` | Window management |
| `staerp` | ERP desktop shell |

### ERP — JSON / TS

| Prefix | Description |
|---|---|
| `serp` | ERP CRUD page layout |
| `serpinv` | Invoice schema |
| `serpled` | Ledger schema |
| `serpemp` | Employee schema |
| `serprole` | RBAC roles |
| `serpaudit` | Audit log schema |
| `serpreport` | Report viewer |
| `serpdash` | Dashboard widgets |
| `serpcrud` | Enterprise CRUD layout |

### Vite — TS

| Prefix | Description |
|---|---|
| `svt` | React entry point (`createRoot`) |
| `svtc` | `vite.config.ts` scaffold |
| `svtt` | `tsconfig.json` snippet |
| `svtp` | Vite plugin scaffold |
| `svtenv` | `.env` template |
| `svtr` | React Router + BrowserRouter setup |

> For 160 numbered enterprise variants (login, register, dashboards, pages, routes, layouts, env, `vite.config.ts`), see the [Vite Advanced Blocks](#vite-advanced-blocks) section below.

### SQLite — SQL

| Prefix | Description |
|---|---|
| `ssl` | SQLite init |
| `sslc` | CRUD SQL |
| `sslt` | `BEGIN TRANSACTION` |
| `sslm` | Migration template |

### MongoDB / Mongoose — TS

| Prefix | Description |
|---|---|
| `smg` | Mongoose schema + model |
| `smga` | Aggregation pipeline |
| `smgr` | Repository pattern for Mongoose |
| `smgc` | CRUD model |
| `smgsoft` | Soft-delete field |

### DevOps — YAML / Dockerfile

| Prefix | Description |
|---|---|
| `sdoc` | Dockerfile (Node 18 Alpine) |
| `sdocc` | `docker-compose.yml` |
| `sgi` | GitHub Actions CI workflow |
| `sk8` | Kubernetes pod manifest |
| `senv` | Env template |
| `scicd` | CI/CD pipeline scaffold |

### Desktop UI

| Prefix | Description |
|---|---|
| `sdesk` | Desktop shell layout |
| `sdesktab` | Tab workspace |
| `sdeskmenu` | VS Code-style menu |
| `sdeskside` | Sidebar |
| `sdeskcmd` | Command palette |
| `sdeskdock` | Dock layout |

### Architecture

| Prefix | Description |
|---|---|
| `srepo` | Repository pattern stub |
| `ssvc` | Service layer stub |
| `smod` | Module scaffold |
| `sctrl` | Controller stub |
| `sapi` | API structure |
| `smon` | Monorepo hints |
| `sturbo` | Turborepo setup |
| `spnpm` | pnpm workspace |

### AI

| Prefix | Description |
|---|---|
| `saiform` | AI form interface |
| `saiapi` | AI API scaffold |
| `saisql` | AI SQL generator prompt |
| `saierp` | AI ERP module placeholder |

### E-commerce (80+ snippets — prefix `se`)

<details>
<summary>Expand full e-commerce snippet list</summary>

**App shell**

| Prefix | Description |
|---|---|
| `secomapp` | E-commerce app shell |
| `secomlayout` | App layout |
| `secomroute` | Routing setup |
| `secomprovider` | Auth / theme / i18n providers |
| `secomconfig` | App config |
| `secomtheme` | Theme provider |
| `secomenv` | Env template |

**Homepage**

| Prefix | Description |
|---|---|
| `sehero` | Hero banner |
| `sehero2` | Split hero |
| `secarousel` | Product carousel |
| `sebanner` | Promo banner |
| `setopcat` | Top categories |
| `seflash` | Flash sale section |
| `setrending` | Trending products |
| `senewarr` | New arrivals |
| `sebrands` | Brand showcase |
| `sedeals` | Deals section |
| `setestim` | Testimonials |
| `senewsletter` | Newsletter signup form |
| `sefaqhome` | Homepage FAQ |
| `sefeature` | Features grid |
| `sestoremap` | Store locations map |

**Product listing**

| Prefix | Description |
|---|---|
| `seplist` | Product listing page |
| `sepcard` | Product card |
| `sepgrid` | Product grid |
| `seplistview` | List view |
| `sepfilter` | Filters panel |
| `sepsearch` | Search bar |
| `sepsort` | Sorting dropdown |
| `seppag` | Pagination |
| `sepquick` | Quick view modal |
| `sepwish` | Wishlist button |
| `sepcompare` | Compare button |
| `seprating` | Star rating |
| `sepbadge` | Discount badge |
| `sepstock` | Stock indicator |
| `sepskeleton` | Skeleton loader |
| `sepinfinite` | Infinite scroll hook |
| `seplazy` | Lazy loading image |

**Product detail**

| Prefix | Description |
|---|---|
| `sepdetail` | Product detail page |
| `sepimg` | Image gallery |
| `sepzoom` | Image zoom |
| `sepvariant` | Variant selector |
| `sepsize` | Size selector |
| `sepcolor` | Color selector |
| `sepqty` | Quantity input |
| `sepaddcart` | Add to cart button |
| `sepbuy` | Buy now button |
| `sepdesc` | Description tabs |
| `sepreview` | Reviews section |
| `sepfaq` | Product FAQ |
| `seprelated` | Related products |
| `sepupsell` | Upsell section |
| `sepcross` | Cross-sell |
| `sepshare` | Social share |
| `sepdelivery` | Delivery info |
| `sepreturn` | Return policy |

**Cart**

| Prefix | Description |
|---|---|
| `secart` | Cart page |
| `secartitem` | Cart item |
| `secartsum` | Cart summary |
| `secoupon` | Coupon input |
| `secartqty` | Update quantity |
| `secartempty` | Empty cart state |
| `secartsave` | Save for later |
| `secartship` | Shipping estimate |
| `secarttax` | Tax calculation |
| `secartsticky` | Sticky checkout bar |

**Checkout**

| Prefix | Description |
|---|---|
| `secheckout` | Checkout page |
| `secheckstep` | Multi-step checkout |
| `seaddress` | Address form |
| `sepayment` | Payment form |
| `seorder` | Order summary |
| `seupi` | UPI payment |
| `secardpay` | Card payment |
| `secod` | Cash on delivery |
| `sewallet` | Wallet payment |
| `segst` | GST invoice form |
| `sedelivery` | Delivery options |
| `setrack` | Order tracking |
| `seconfirm` | Order confirmation |
| `seinvoice` | Invoice component |

**Account**

| Prefix | Description |
|---|---|
| `seaccount` | Account dashboard |
| `seprofile` | Profile page |
| `seorders` | Orders list |
| `sewishlist` | Wishlist page |
| `seaddressbook` | Address book |
| `sepaymentmethods` | Saved payment methods |
| `senotification` | Notifications |
| `serefund` | Refund requests |
| `sereturns` | Returns |
| `selogout` | Logout action |

**Auth**

| Prefix | Description |
|---|---|
| `selogin` | Login page |
| `seregister` | Registration page |
| `seotp` | OTP verification |
| `seforgot` | Forgot password |
| `sereset` | Reset password |
| `sesocialauth` | Social auth |
| `seauthmodal` | Auth modal |
| `seprotected` | Protected route |

**Admin panel**

| Prefix | Description |
|---|---|
| `seadmin` | Admin layout |
| `seadminnav` | Admin sidebar nav |
| `seadminhead` | Admin header |
| `seproductadmin` | Product management |
| `seorderadmin` | Orders management |
| `secustomeradmin` | Customers management |
| `secouponadmin` | Coupon management |
| `seanalytics` | Analytics dashboard |
| `seinventory` | Inventory panel |
| `sevendor` | Vendor management |
| `sereports` | Reports page |
| `serevenue` | Revenue chart |
| `sestockalert` | Low stock alerts |

**Vendor portal**

| Prefix | Description |
|---|---|
| `sevendorpanel` | Vendor dashboard |
| `sevendorprod` | Vendor products |
| `sevendororder` | Vendor orders |
| `sevendorpay` | Vendor payouts |
| `sevendoranalytics` | Vendor analytics |

**Search & filter**

| Prefix | Description |
|---|---|
| `sesearchpage` | Search results page |
| `sesuggest` | Search suggestions |
| `sevoice` | Voice search |
| `sefilterdrawer` | Mobile filter drawer |
| `secategorytree` | Category tree |
| `setagfilter` | Tag filters |

**Reviews & UGC**

| Prefix | Description |
|---|---|
| `sereviewcard` | Review card |
| `seratingstar` | Rating stars |
| `seusergallery` | Customer gallery |
| `severified` | Verified buyer badge |
| `seqa` | Q&A component |

**Mobile**

| Prefix | Description |
|---|---|
| `semobilebar` | Bottom navigation bar |
| `semobcart` | Mobile cart |
| `semobfilter` | Mobile filter |
| `semobsheet` | Bottom sheet |
| `semobmenu` | Mobile menu |

**Payments**

| Prefix | Description |
|---|---|
| `serazor` | Razorpay integration |
| `sestripe` | Stripe integration |
| `sepaypal` | PayPal integration |
| `sephonepe` | PhonePe integration |
| `segpay` | Payment gateway abstraction |

**Advanced features**

| Prefix | Description |
|---|---|
| `semulti` | Multi-vendor |
| `selive` | Live shopping |
| `sechat` | Customer chat |
| `seai` | AI recommendations |
| `serecent` | Recently viewed |
| `sereward` | Rewards / loyalty points |
| `sesubscription` | Subscription product |
| `seaffiliate` | Affiliate module |
| `segift` | Gift cards |
| `sebundle` | Product bundle |
| `secomparepage` | Compare page |
| `sewaitlist` | Waitlist (out-of-stock) |

**ERP integration**

| Prefix | Description |
|---|---|
| `seerpinv` | Inventory ERP module |
| `seerpbill` | Billing module |
| `seerpwarehouse` | Warehouse module |
| `seerpship` | Shipping module |
| `seerpvendor` | Vendor ERP |
| `seerpcrm` | CRM module |
| `seerpreport` | ERP reports |
| `seerpaudit` | ERP audit logs |

**Zustand stores**

| Prefix | Description |
|---|---|
| `sezustandcart` | Cart store |
| `sezustandauth` | Auth store |
| `sezustandwish` | Wishlist store |
| `sezustandproduct` | Product store |
| `sezustandorder` | Order store |

**API / data fetching**

| Prefix | Description |
|---|---|
| `seapi` | API service |
| `sefetch` | Fetch products hook |
| `semutation` | Mutation hook |
| `sequery` | React Query hook |
| `seaxios` | Axios setup |
| `seauthapi` | Auth API |
| `secartapi` | Cart API |
| `sepaymentapi` | Payment API |

**UI utilities**

| Prefix | Description |
|---|---|
| `sedashboard` | E-commerce dashboard |
| `segrid` | Responsive grid |
| `sesidebar` | Sidebar layout |
| `setabs` | Tabs |
| `sedrawer` | Drawer |
| `semodal` | Modal |
| `seskel` | Skeleton loader |
| `sespinner` | Spinner |

**Performance**

| Prefix | Description |
|---|---|
| `selazyimg` | Lazy `<img>` |
| `sevirtual` | Virtualized list |
| `sememo` | `React.memo` component |
| `seperf` | Performance hooks |
| `sedebounce` | Debounce utility |

**SEO**

| Prefix | Description |
|---|---|
| `seseo` | SEO metadata |
| `sejsonld` | JSON-LD structured data |
| `semeta` | Meta tags |
| `seopen` | OpenGraph tags |

**Architecture patterns**

| Prefix | Description |
|---|---|
| `secrud` | CRUD architecture |
| `serepo` | Repository pattern |
| `seservice` | Service layer |
| `semodule` | Feature module |
| `sefeatureflag` | Feature flags |
| `seaudit` | Audit logging |
| `serbac` | RBAC system |
| `seevent` | Event bus |
| `sequeue` | Queue system |
| `secache` | Cache layer |

</details>

---

## Getting Started

### Run in development

```bash
npm install
npm run compile
# Press F5 in VS Code to launch the Extension Development Host
```

### Install as VSIX

```bash
npm install
npm run compile
npx vsce package
# Then: Extensions → Install from VSIX → select the generated .vsix
```

### Validate snippets

The extension ships with an enterprise validator that confirms every
`.code-snippets` file parses, every snippet prefix is unique, no
prefix uses the banned `shelb-` namespace, and every required
short-prefix group (`sre…`, `snx…`, `svt…`, `serp…`, `se…`, `szu…`,
`sapi…`, `sauth…`, `ssvc…`, `srepo…`, `sctrl…`) is present at full
depth.

```bash
npm run validate:snippets   # CI-friendly, exits non-zero on failure
npm run validate:report     # also writes docs/SNIPPET_VALIDATION_REPORT.md
```

---

## Using the Generators

### CRUD Module

1. `Ctrl+Shift+P` → **Shelb: Generate CRUD Module**
2. Enter a PascalCase name (e.g. `Customer`) — validated inline as you type
3. Select a workspace folder (multi-root aware)

Output in `shelb-generated/customer/`:

```
customer.types.ts                       ← Interface + Create/Update DTOs
server/
  controllers/CustomerController.ts     ← All 5 operations, try/catch, HTTP status codes
  services/CustomerService.ts           ← Business logic layer
  repository/CustomerRepository.ts      ← In-memory Map (swap for Prisma/Drizzle/TypeORM)
  routes/customer.routes.ts             ← Express Router, ready to mount
frontend/
  pages/CustomerList.tsx                ← Table with delete, loading + error states
  pages/CustomerForm.tsx                ← Accessible create form
  store/CustomerStore.ts                ← Typed Zustand store
  hooks/useCustomerApi.ts               ← React Query hooks: list, get, create, update, delete
```

Mount the router:

```typescript
import customerRouter from './shelb-generated/customer/server/routes/customer.routes';
app.use('/api/customer', customerRouter);
```

### ERP Modules

1. `Ctrl+Shift+P` → **Shelb: Generate ERP Module**
2. Select one or more modules (multi-select supported)

Each module generates `types.ts`, `service.ts`, `controller.ts`, `routes.ts`:

| Module | Key types |
|---|---|
| `employees` | `Employee`, `CreateEmployeeDto` |
| `invoices` | `Invoice`, `LineItem`, `InvoiceStatus` |
| `payroll` | `PayrollEntry`, `Deduction`, `PayrollStatus` |
| `attendance` | `AttendanceRecord`, `AttendanceStatus` |
| `ledger` | `LedgerEntry` (debit / credit / balance) |
| `reports` | `Report`, `ReportType`, `ReportStatus` |

### Tauri Desktop Module

1. `Ctrl+Shift+P` → **Shelb: Generate Tauri Desktop Module**
2. Enter a PascalCase name (e.g. `AdminDesktop`)

Output in `shelb-generated/admin-desktop/`:

```
tauri.conf.json            ← Bundle + security config
src-tauri/
  Cargo.toml               ← Rust dependencies
  src/main.rs              ← Tauri builder with registered IPC commands
  src/commands.rs          ← greet + get_app_info (typed, serializable)
src/
  main.tsx                 ← React entry point
  App.tsx                  ← Root component wired to IPC
  ipc.ts                   ← Typed invoke() wrappers
package.json               ← Tauri CLI + Vite + React
vite.config.ts             ← Vite config tuned for Tauri
```

---

## Configuration

| Setting | Default | Description |
|---|---|---|
| `shelb.enableERP` | `true` | Show ERP generation commands |
| `shelb.enableTauri` | `true` | Show Tauri generation commands |
| `shelb.enableAI` | `false` | Enable AI architecture features |
| `shelb.enableWorkspaceDetection` | `true` | Auto-detect frameworks on activation |
| `shelb.defaultBackend` | `node` | Default backend (`node` / `go` / `rust`) |
| `shelb.defaultFrontend` | `react` | Default frontend for generators |

---

## Generated Code Principles

- **Zero `any` types** — typed interfaces and DTOs throughout
- **Swap-ready persistence** — in-memory `Map` by default; replace with Prisma / TypeORM / Drizzle by swapping the repository
- **Express error middleware** — all controllers forward errors via `next(err)`, no silent swallows
- **Accessible UI** — semantic HTML, `aria-label`, `role="alert"` on error states
- **React Query cache invalidation** — mutations invalidate the exact affected query keys

---

## Requirements

- VS Code 1.79+
- Node.js 18+
- For Tauri modules: Rust toolchain + Tauri CLI v1

---

## Advanced Block Snippets

Shelb Snippets now ships with a tier of **enterprise-grade numbered block snippets** covering React, Next.js, Vite, ERP, e-commerce, auth, API, state, and architecture layers. These are designed for real-world product surfaces: SaaS apps, ERP systems, admin panels, client portals, e-commerce storefronts, and internal tools.

A few things to know up front:

- **Existing short prefixes still work exactly as before** — nothing has been removed or renamed.
- **New numbered prefixes are added as advanced variants** alongside the existing snippets. You opt in by typing the numbered prefix; the original prefixes keep their original behavior.
- These advanced blocks are tuned for production scenarios — login flows, dashboards, CRUD tables, checkout, vendor management, finance/inventory modules, API route handlers, middleware, auth stores, and service/repository/controller layers.

Each numbered range covers **20 variants** (`01` through `20`), so you can pick the layout, density, and pattern that fits the screen you are building without rewriting from scratch.

### Snippet Files Overview

The advanced block snippets ship across **11 dedicated `.code-snippets` files**, for a total of **1,020 numbered enterprise-grade variants**. Every file is registered in `package.json` with the correct language scopes, so the prefixes light up automatically in the right file types.

| File | Snippets | Prefix groups (each `01`–`20`) | Language scopes |
|---|---:|---|---|
| `snippets/react-auth-blocks.code-snippets` | 40 | `srelogin`, `srereg` | `typescriptreact`, `javascriptreact` |
| `snippets/react-ui-blocks.code-snippets` | 100 | `srenav`, `sreside`, `srecard`, `srebtn`, `sreinput` | `typescriptreact`, `javascriptreact` |
| `snippets/react-dashboard-blocks.code-snippets` | 100 | `sredash`, `sretable`, `sreform`, `sremodal`, `srelayout` | `typescriptreact`, `javascriptreact` |
| `snippets/react-hooks-blocks.code-snippets` | 20 | `srehook` | `typescript`, `typescriptreact` |
| `snippets/nextjs-auth-blocks.code-snippets` | 60 | `snxlogin`, `snxreg`, `snxauth` | `typescript`, `typescriptreact`, `javascript`, `javascriptreact` |
| `snippets/nextjs-page-blocks.code-snippets` | 100 | `snxdash`, `snxlayout`, `snxform`, `snxtable`, `snxmeta` | `typescript`, `typescriptreact`, `javascript`, `javascriptreact` |
| `snippets/nextjs-api-blocks.code-snippets` | 40 | `snxapi`, `snxmid` | `typescript`, `javascript` |
| `snippets/vite-blocks.code-snippets` | **160** | `svtlogin`, `svtreg`, `svtdash`, `svtpage`, `svtroute`, `svtlayout`, `svtenv`, `svtconfig` | `typescript`, `typescriptreact`, `javascript`, `javascriptreact` |
| `snippets/erp-ui-blocks.code-snippets` | 200 | `serplogin`, `serpdash`, `serpform`, `serptable`, `serpmodule`, `serpadmin`, `serpreport`, `serpaudit`, `serpfin`, `serpinv` | `typescript`, `typescriptreact`, `javascript`, `javascriptreact` |
| `snippets/ecommerce-auth-blocks.code-snippets` | 40 | `selogin`, `seregister` | `typescript`, `typescriptreact`, `javascript`, `javascriptreact` |
| `snippets/auth-api-state-blocks.code-snippets` | 160 | `sauth`, `sapi`, `srq`, `szuauth`, `szucrud`, `ssvc`, `srepo`, `sctrl` | `typescript`, `typescriptreact`, `javascript`, `javascriptreact` |
| **Total** | **1,020** | 51 prefix groups | — |

All numbered prefixes are guaranteed to be:

- **Unique** — no collisions within or across files, and no collisions with the original short prefixes (`sre`, `snx`, `svt`, `svtc`, `svtenv`, `svtr`, `se*`, `serp*`, etc.).
- **Strictly additive** — the original `snippets/react.code-snippets`, `snippets/nextjs.code-snippets`, and `snippets/vite.code-snippets` files are untouched.
- **Placeholder-driven** — every snippet exposes tab-stops (`${1:...}` through `$0`) for component name, API endpoint, redirect path, app name, button label, and Tailwind `className`, so you can edit in-place after expansion.

The implementation roadmap and design rules are documented in [`docs/ADVANCED_SNIPPET_EXPANSION_PLAN.md`](docs/ADVANCED_SNIPPET_EXPANSION_PLAN.md).

### React Advanced Blocks

| Shortcut Range | Purpose |
|---|---|
| `srelogin01` – `srelogin20` | React login pages |
| `srereg01` – `srereg20` | React register pages |
| `sredash01` – `sredash20` | React dashboard pages |
| `srenav01` – `srenav20` | React navbars |
| `sreside01` – `sreside20` | React sidebars |
| `sreform01` – `sreform20` | React forms |
| `sretable01` – `sretable20` | React tables |
| `sremodal01` – `sremodal20` | React modals |
| `srecard01` – `srecard20` | React cards |
| `srebtn01` – `srebtn20` | React buttons |
| `sreinput01` – `sreinput20` | React inputs |
| `srelayout01` – `srelayout20` | React layouts |
| `srehook01` – `srehook20` | React hooks |

### Next.js Advanced Blocks

| Shortcut Range | Purpose |
|---|---|
| `snxlogin01` – `snxlogin20` | Next.js login pages |
| `snxreg01` – `snxreg20` | Next.js register pages |
| `snxdash01` – `snxdash20` | Next.js dashboard pages |
| `snxlayout01` – `snxlayout20` | Next.js layouts |
| `snxform01` – `snxform20` | Next.js forms |
| `snxtable01` – `snxtable20` | Next.js tables |
| `snxauth01` – `snxauth20` | Next.js auth helpers |
| `snxapi01` – `snxapi20` | Next.js route handlers |
| `snxmid01` – `snxmid20` | Next.js middleware |
| `snxmeta01` – `snxmeta20` | Next.js metadata/SEO |

<a id="vite-advanced-blocks"></a>

### Vite Advanced Blocks

160 enterprise variants in `snippets/vite-blocks.code-snippets`, built on **React + TypeScript**, **Tailwind CSS**, **`react-router-dom`** and **`import.meta.env`**. Includes loading, error, and API endpoint placeholders where relevant.

| Shortcut Range | Purpose | Highlights |
|---|---|---|
| `svtlogin01` – `svtlogin20` | Vite login pages | Centered, split-screen, admin, SaaS, ERP w/ company code, OTP, magic link, social, dark, minimal, remember-me, role, tenant, validation, loading, forgot password, mobile, branded, 2FA, session-expired |
| `svtreg01` – `svtreg20` | Vite register pages | Basic, SaaS workspace, ERP company w/ GSTIN, multi-step, social, OTP, magic link, invite-only, dark, minimal, terms, password strength, company code, role, tenant, validation, loading, mobile, branded, verify-email |
| `svtdash01` – `svtdash20` | Vite dashboards | Admin, ERP, SaaS, analytics, finance, HR, CRM, inventory, e-commerce, projects, tasks, reports, users, card grid, table hero, `useEffect` fetch, `<Suspense>`, dark, KPI |
| `svtpage01` – `svtpage20` | Vite pages | Home, about, pricing, contact, features, blog index, blog post (`useParams`), 404, 500, settings, profile, FAQ, terms, privacy, pricing matrix, status, empty state, maintenance, coming soon, landing |
| `svtroute01` – `svtroute20` | Vite routing | `createBrowserRouter`, `RouterProvider`, classic `Routes`, nested + `<Outlet />`, protected, role-protected, lazy, `useParams`, `useNavigate`, `useLocation`, `useSearchParams`, `<Navigate>`, `NavLink`, error boundary, loader, action, `useLoaderData`, `<Form>`, auth-aware router |
| `svtlayout01` – `svtlayout20` | Vite layouts | Root, dashboard, sidebar, topbar, auth, settings, admin, SaaS, marketing, docs, centered, 2-col, 3-col, full-screen, mobile, ERP, app shell, dark, outlet shell, splash |
| `svtenv01` – `svtenv20` | Vite `import.meta.env` patterns | Basic, type-guarded helper, `vite-env.d.ts`, default, required, `MODE`/`DEV`/`PROD`, `BASE_URL`, feature flag, API URL, auth domain, Sentry DSN, analytics ID, Stripe key, multi-stage, boolean/number/JSON parse, boot validation, env provider, `useEnv` hook |
| `svtconfig01` – `svtconfig20` | Vite `vite.config.ts` patterns | Basic React, SWC, path alias, API proxy, build `outDir`, `define`, server port/host, `tsconfig-paths`, Tailwind PostCSS, CSS modules, `manualChunks`, build target, visualizer, HTTPS dev, Vitest merged, sourcemaps, public dir, library mode, preview port, multi-page |

### ERP Advanced Blocks

The ERP advanced blocks ship **200 numbered snippets** across 10 ranges (`01`..`20` in each), tuned for real ERP/productivity surfaces: enterprise sign-in flows, multi-company dashboards, accounting forms, master-data tables, module shells, administrator panels, statutory reports, audit trails, finance ledgers, and inventory workflows.

**ERP personality.** Every snippet is built to feel like Shelb's own ERP system:

- **Business-first** — accounting, payroll, inventory, compliance, reports, admin
- **Multi-company aware** — branches, financial years, group/consolidation patterns
- **Role-aware** — admin, accountant, manager, auditor, employee
- **Audit-friendly** — explicit audit trails, approvals, change history, period locks
- **Module-based** — finance / HR / inventory / sales / procurement / etc.

**Code conventions.** React + TypeScript functional components, Tailwind CSS, sample arrays for modules / ledgers / employees / invoices / vendors / inventory, and a consistent set of tab-stop placeholders:

| Placeholder | Purpose |
|---|---|
| `${1:ComponentName}` | Component name |
| `${2:Shelb Corp}` | Company / tenant |
| `${3:HQ}` | Branch / location |
| `${4:2025-26}` | Financial year |
| `${5:role}` | User role |
| `${6:/api/...}` | API endpoint |
| `$0` | Final cursor position |

| Shortcut Range | Purpose |
|---|---|
| `serplogin01` – `serplogin20` | ERP login screens |
| `serpdash01` – `serpdash20` | ERP dashboards |
| `serpform01` – `serpform20` | ERP forms |
| `serptable01` – `serptable20` | ERP tables |
| `serpmodule01` – `serpmodule20` | ERP module layouts |
| `serpadmin01` – `serpadmin20` | ERP admin panels |
| `serpreport01` – `serpreport20` | ERP reports |
| `serpaudit01` – `serpaudit20` | ERP audit screens |
| `serpfin01` – `serpfin20` | ERP finance screens |
| `serpinv01` – `serpinv20` | ERP inventory screens |

<details>
<summary>Expand full ERP advanced snippet list (200 prefixes)</summary>

**ERP logins (`serplogin01`–`serplogin20`)**

| Prefix | Description |
|---|---|
| `serplogin01` | Basic ERP login (email + password) |
| `serplogin02` | Company-code ERP login (multi-tenant) |
| `serplogin03` | Branch login with branch selector |
| `serplogin04` | Financial-year login |
| `serplogin05` | Role login (admin / accountant / manager / auditor / employee) |
| `serplogin06` | Admin ERP login (restricted console) |
| `serplogin07` | Employee self-service login (employee ID + PIN) |
| `serplogin08` | Auditor login with audit period entry |
| `serplogin09` | Dark-themed ERP login |
| `serplogin10` | Desktop-style ERP login (window chrome) |
| `serplogin11` | Multi-company login (post-credential picker) |
| `serplogin12` | Module access login (pick modules) |
| `serplogin13` | OTP ERP login (two-step) |
| `serplogin14` | Session-expired interstitial |
| `serplogin15` | Secure enterprise login (2FA + IP allow-list) |
| `serplogin16` | License check login |
| `serplogin17` | Offline-mode login placeholder |
| `serplogin18` | Tauri desktop ERP login |
| `serplogin19` | Cloud ERP login (workspace URL + SSO) |
| `serplogin20` | ERP login with workspace selector |

**ERP dashboards (`serpdash01`–`serpdash20`)**

| Prefix | Description |
|---|---|
| `serpdash01` | Basic ERP overview |
| `serpdash02` | Multi-company group overview |
| `serpdash03` | Branch performance |
| `serpdash04` | Finance dashboard (cash / AR / AP / P&L) |
| `serpdash05` | Inventory dashboard |
| `serpdash06` | Sales dashboard (pipeline + wins) |
| `serpdash07` | HR dashboard (headcount + attendance) |
| `serpdash08` | Payroll dashboard |
| `serpdash09` | Compliance dashboard (GST / TDS / dues) |
| `serpdash10` | Module-access dashboard |
| `serpdash11` | Administrator dashboard |
| `serpdash12` | Auditor dashboard |
| `serpdash13` | Executive (CEO) dashboard |
| `serpdash14` | CFO dashboard (margins / DSO / DPO) |
| `serpdash15` | Operations dashboard |
| `serpdash16` | Procurement dashboard |
| `serpdash17` | Manufacturing dashboard |
| `serpdash18` | Tasks & approvals dashboard |
| `serpdash19` | Notifications dashboard |
| `serpdash20` | Real-time monitoring dashboard |

**ERP forms (`serpform01`–`serpform20`)**

| Prefix | Description |
|---|---|
| `serpform01` | Generic ERP entry form |
| `serpform02` | Customer master form |
| `serpform03` | Vendor / supplier form |
| `serpform04` | Employee onboarding form |
| `serpform05` | Invoice form |
| `serpform06` | Purchase order form |
| `serpform07` | Journal entry form |
| `serpform08` | Ledger account form |
| `serpform09` | Product / SKU form |
| `serpform10` | Inventory adjustment form |
| `serpform11` | Leave request form |
| `serpform12` | Expense claim form |
| `serpform13` | Payroll run form |
| `serpform14` | Tax filing form (GST / TDS) |
| `serpform15` | Asset registration form |
| `serpform16` | Bank reconciliation form |
| `serpform17` | Sales quotation form |
| `serpform18` | Sales order form |
| `serpform19` | Goods receipt note (GRN) |
| `serpform20` | Approval form (approve / reject) |

**ERP tables (`serptable01`–`serptable20`)**

| Prefix | Description |
|---|---|
| `serptable01` | Basic data table |
| `serptable02` | Sortable table |
| `serptable03` | Paginated table |
| `serptable04` | Filterable table |
| `serptable05` | Multi-select with bulk actions |
| `serptable06` | Invoices table |
| `serptable07` | Customers table |
| `serptable08` | Vendors table |
| `serptable09` | Employees table |
| `serptable10` | Products / inventory table |
| `serptable11` | Ledger entries table |
| `serptable12` | Journal entries table |
| `serptable13` | Purchase orders table |
| `serptable14` | Sales orders table |
| `serptable15` | Stock movement table |
| `serptable16` | Audit log table |
| `serptable17` | Pending approvals table |
| `serptable18` | Tax records table |
| `serptable19` | Expense claims table |
| `serptable20` | Compliance items table |

**ERP modules (`serpmodule01`–`serpmodule20`)**

| Prefix | Description |
|---|---|
| `serpmodule01` | Module grid selector |
| `serpmodule02` | Module sidebar |
| `serpmodule03` | Module access manager |
| `serpmodule04` | Module configuration panel |
| `serpmodule05` | Finance module shell |
| `serpmodule06` | HR module shell |
| `serpmodule07` | Inventory module shell |
| `serpmodule08` | Sales module shell |
| `serpmodule09` | Procurement module shell |
| `serpmodule10` | Manufacturing module shell |
| `serpmodule11` | CRM module shell |
| `serpmodule12` | Projects module shell |
| `serpmodule13` | Assets module shell |
| `serpmodule14` | Compliance module shell |
| `serpmodule15` | Tax module shell |
| `serpmodule16` | Payroll module shell |
| `serpmodule17` | Reports module shell |
| `serpmodule18` | Admin module shell |
| `serpmodule19` | Audit module shell |
| `serpmodule20` | Marketplace module shell |

**ERP admin (`serpadmin01`–`serpadmin20`)**

| Prefix | Description |
|---|---|
| `serpadmin01` | User management |
| `serpadmin02` | Roles & permissions |
| `serpadmin03` | Company settings |
| `serpadmin04` | Branch settings |
| `serpadmin05` | Financial year settings |
| `serpadmin06` | Tax configuration |
| `serpadmin07` | Currency settings |
| `serpadmin08` | Module access control |
| `serpadmin09` | System logs |
| `serpadmin10` | License management |
| `serpadmin11` | Backup & restore |
| `serpadmin12` | Notification settings |
| `serpadmin13` | Email / SMTP |
| `serpadmin14` | Integration settings |
| `serpadmin15` | API keys |
| `serpadmin16` | Workflow configuration |
| `serpadmin17` | Approval matrix |
| `serpadmin18` | Number series |
| `serpadmin19` | Theme / branding |
| `serpadmin20` | System health |

**ERP reports (`serpreport01`–`serpreport20`)**

| Prefix | Description |
|---|---|
| `serpreport01` | Generic report viewer |
| `serpreport02` | Profit & Loss |
| `serpreport03` | Balance sheet |
| `serpreport04` | Cash flow |
| `serpreport05` | Sales report |
| `serpreport06` | Purchase report |
| `serpreport07` | Inventory valuation |
| `serpreport08` | Stock movement |
| `serpreport09` | Aged receivables |
| `serpreport10` | Aged payables |
| `serpreport11` | Tax summary |
| `serpreport12` | GST / VAT reconciliation |
| `serpreport13` | Payroll register |
| `serpreport14` | Attendance report |
| `serpreport15` | Employee summary |
| `serpreport16` | Profitability by product |
| `serpreport17` | Profitability by branch |
| `serpreport18` | Compliance status |
| `serpreport19` | Audit trail report |
| `serpreport20` | Custom report builder |

**ERP audit (`serpaudit01`–`serpaudit20`)**

| Prefix | Description |
|---|---|
| `serpaudit01` | Audit log viewer |
| `serpaudit02` | User activity timeline |
| `serpaudit03` | Login audit |
| `serpaudit04` | Change history |
| `serpaudit05` | Approval audit |
| `serpaudit06` | Document audit trail |
| `serpaudit07` | Permission change audit |
| `serpaudit08` | Failed login attempts |
| `serpaudit09` | System errors |
| `serpaudit10` | Compliance audit checklist |
| `serpaudit11` | Inventory audit |
| `serpaudit12` | Cash audit |
| `serpaudit13` | Reconciliation audit |
| `serpaudit14` | GL audit trail |
| `serpaudit15` | Audit findings |
| `serpaudit16` | Auditor notes |
| `serpaudit17` | Audit report generator |
| `serpaudit18` | Internal audit dashboard |
| `serpaudit19` | External auditor access |
| `serpaudit20` | SOX / compliance audit |

**ERP finance (`serpfin01`–`serpfin20`)**

| Prefix | Description |
|---|---|
| `serpfin01` | Chart of accounts |
| `serpfin02` | General ledger view |
| `serpfin03` | Journal entry list |
| `serpfin04` | Trial balance |
| `serpfin05` | Bank accounts |
| `serpfin06` | Bank reconciliation |
| `serpfin07` | Receivables (AR) |
| `serpfin08` | Payables (AP) |
| `serpfin09` | Cash flow tracker |
| `serpfin10` | Budget vs actual |
| `serpfin11` | Cost centers |
| `serpfin12` | Tax dashboard |
| `serpfin13` | Invoice list |
| `serpfin14` | Payment list |
| `serpfin15` | Credit / debit notes |
| `serpfin16` | Vendor payments |
| `serpfin17` | Customer collections |
| `serpfin18` | Foreign exchange |
| `serpfin19` | Petty cash |
| `serpfin20` | Period close |

**ERP inventory (`serpinv01`–`serpinv20`)**

| Prefix | Description |
|---|---|
| `serpinv01` | Stock list |
| `serpinv02` | Stock movement timeline |
| `serpinv03` | Stock adjustment |
| `serpinv04` | Warehouse list |
| `serpinv05` | Bin locations |
| `serpinv06` | Stock transfer (inter-warehouse) |
| `serpinv07` | Reorder level monitor |
| `serpinv08` | Low stock alerts |
| `serpinv09` | Stock valuation |
| `serpinv10` | Batch / lot tracking |
| `serpinv11` | Serial number tracking |
| `serpinv12` | Goods receipt (GRN) |
| `serpinv13` | Goods issue |
| `serpinv14` | Physical inventory |
| `serpinv15` | Stock aging |
| `serpinv16` | Inventory dashboard |
| `serpinv17` | Product catalog |
| `serpinv18` | Stock by category |
| `serpinv19` | Stock by branch |
| `serpinv20` | Inventory reconciliation |

</details>

> **Note** — these advanced ERP prefixes (e.g. `serpaudit01`) are distinct from the original short prefixes (e.g. `serpaudit`). The originals still expand exactly as before; the numbered variants are additive.

### E-commerce Advanced Blocks

| Shortcut Range | Purpose |
|---|---|
| `selogin01` – `selogin20` | E-commerce login pages |
| `seregister01` – `seregister20` | E-commerce register pages |
| `seproduct01` – `seproduct20` | Product blocks |
| `sepcard01` – `sepcard20` | Product cards |
| `secart01` – `secart20` | Cart blocks |
| `secheckout01` – `secheckout20` | Checkout blocks |
| `seorder01` – `seorder20` | Order blocks |
| `seaccount01` – `seaccount20` | Account blocks |
| `seadmin01` – `seadmin20` | Admin blocks |
| `sevendor01` – `sevendor20` | Vendor blocks |

### Auth, API, State and Architecture

| Shortcut Range | Purpose |
|---|---|
| `sauth01` – `sauth20` | Auth helpers |
| `sapi01` – `sapi20` | API helpers |
| `srq01` – `srq20` | React Query hooks |
| `szuauth01` – `szuauth20` | Zustand auth stores |
| `szucrud01` – `szucrud20` | Zustand CRUD stores |
| `ssvc01` – `ssvc20` | Service layer snippets |
| `srepo01` – `srepo20` | Repository layer snippets |
| `sctrl01` – `sctrl20` | Controller layer snippets |

The `auth-api-state-blocks` pack ships **160 enterprise-grade snippets** across 8 production patterns — typed auth helpers (login / OTP / password / SSO / middleware), generic `fetch` + Axios clients, TanStack Query hooks, Zustand auth and CRUD stores, plus a full clean-architecture stack (service → repository → controller) ready for Express, Next.js App Router, and ERP modules.

**Code conventions.** TypeScript-first, no `any`, generics on every helper that benefits from them (`<T>`, `<TRes, TBody>`, `<T extends { id: string }, D = Partial<T>>`), and a consistent set of tab-stop placeholders:

| Placeholder | Purpose |
|---|---|
| `${1:Entity}` / `${1:Login}` | Entity / domain name |
| `${2:Response}` / `${3:Create${Entity}Dto}` | Response and DTO types |
| `${4:/api/entities}` | Endpoint path |
| `${5:auth_token}` | Storage key / token name |
| `${6:Login failed}` | Error message |
| `$0` | Final cursor position |

<details>
<summary>Expand full Auth / API / State / Architecture snippet list (160 prefixes)</summary>

**Auth helpers (`sauth01`–`sauth20`)**

| Prefix | Description |
|---|---|
| `sauth01` | Typed login helper with payload + response generics |
| `sauth02` | Logout helper that calls API and clears local storage |
| `sauth03` | Typed register helper with generic payload + response |
| `sauth04` | Save token to localStorage / sessionStorage / cookie |
| `sauth05` | SSR-safe token reader from storage |
| `sauth06` | Remove auth token and cached user across all client storage |
| `sauth07` | React auth context with typed value + `useAuth` hook |
| `sauth08` | AuthProvider component wrapping context with token state |
| `sauth09` | ProtectedRoute (React Router) that redirects unauthenticated users |
| `sauth10` | RoleGuard restricting children to allowed roles |
| `sauth11` | Permission helpers with strict `${string}:${string}` permission tokens |
| `sauth12` | Fetch `/me` for current authenticated user |
| `sauth13` | Refresh access token via refresh-token endpoint |
| `sauth14` | Forgot password trigger that sends reset email |
| `sauth15` | Reset password with token + new password |
| `sauth16` | Verify OTP and return signed token |
| `sauth17` | Send OTP via email or SMS with cooldown |
| `sauth18` | Next.js middleware guarding routes behind an auth cookie |
| `sauth19` | Axios request + response interceptors for bearer token |
| `sauth20` | Helper that builds Authorization headers for `fetch` |

**API helpers (`sapi01`–`sapi20`)**

| Prefix | Description |
|---|---|
| `sapi01` | Generic typed `fetch` GET helper |
| `sapi02` | Generic typed `fetch` POST helper |
| `sapi03` | Generic typed `fetch` PUT helper |
| `sapi04` | Generic typed `fetch` PATCH helper |
| `sapi05` | Generic typed `fetch` DELETE helper |
| `sapi06` | Authenticated `fetch` helper injecting bearer token |
| `sapi07` | `fetch` helper that normalizes errors into a typed `ApiError` |
| `sapi08` | React `useFetch<T>` hook with loading / error / data state |
| `sapi09` | Typed Axios GET helper |
| `sapi10` | Typed Axios POST helper |
| `sapi11` | Pre-configured Axios instance with interceptors |
| `sapi12` | Generic CRUD API service class backed by Axios |
| `sapi13` | Multipart upload helper with progress callback |
| `sapi14` | Blob download helper that triggers save dialog |
| `sapi15` | Paginated fetch with page / pageSize query params |
| `sapi16` | Cancellable search helper via `AbortController` |
| `sapi17` | Filter helper serializing a typed filter to query string |
| `sapi18` | Report export helper (CSV / PDF / XLSX) |
| `sapi19` | Audit log fetch with optional filters |
| `sapi20` | Health check helper returning status + latency |

**React Query hooks (`srq01`–`srq20`)**

| Prefix | Description |
|---|---|
| `srq01` | Basic typed `useQuery` for an entity list |
| `srq02` | Parametrized `useQuery` with `enabled` guard |
| `srq03` | `useInfiniteQuery` for cursor-based pagination |
| `srq04` | Paginated `useQuery` with `keepPreviousData` |
| `srq05` | `useMutation` for create with cache invalidation |
| `srq06` | `useMutation` for update with cache invalidation |
| `srq07` | `useMutation` for delete with cache invalidation |
| `srq08` | Optimistic mutation with rollback on error |
| `srq09` | Helper to invalidate related query keys |
| `srq10` | `QueryClient` instance with production defaults |
| `srq11` | `QueryClientProvider` wrapper component |
| `srq12` | Type-safe query key factory |
| `srq13` | `useSuspenseQuery` for Suspense-backed fetching |
| `srq14` | SSR / route-loader prefetch helper |
| `srq15` | Dependent `useQuery` running when parent has data |
| `srq16` | Polling `useQuery` with `refetchInterval` |
| `srq17` | Auth-aware `useQuery` (bearer token + `enabled`) |
| `srq18` | `useQuery` refetching on window focus + reconnect |
| `srq19` | `useQuery` with custom `staleTime` / `gcTime` |
| `srq20` | Reusable generic query hook factory |

**Zustand auth stores (`szuauth01`–`szuauth20`)**

| Prefix | Description |
|---|---|
| `szuauth01` | Zustand auth store with user + token + actions |
| `szuauth02` | Login action with async fetch in store |
| `szuauth03` | Logout action with API call + storage clear |
| `szuauth04` | Register action with auto-login after signup |
| `szuauth05` | Refresh token action in store |
| `szuauth06` | Persisted auth store using `persist` middleware |
| `szuauth07` | Auth store with role metadata + `hasRole` |
| `szuauth08` | Permission selectors against auth store |
| `szuauth09` | Lightweight `isAuthenticated` + current user selectors |
| `szuauth10` | Hydrate auth store from localStorage on bootstrap |
| `szuauth11` | Forgot password action in store |
| `szuauth12` | Reset password action with token in store |
| `szuauth13` | Verify OTP action with token promotion |
| `szuauth14` | Send OTP action with cooldown tracking |
| `szuauth15` | Update profile action patching current user |
| `szuauth16` | Change password action (old + new) |
| `szuauth17` | Session timeout tracker (`expiresAt` + `isExpired`) |
| `szuauth18` | Multi-tenant auth store with `switchTenant` |
| `szuauth19` | SSO action exchanging provider code for session |
| `szuauth20` | Auth store composed with `devtools` + `persist` |

**Zustand CRUD stores (`szucrud01`–`szucrud20`)**

| Prefix | Description |
|---|---|
| `szucrud01` | Generic CRUD store factory for any entity |
| `szucrud02` | Fetch list action populating items in store |
| `szucrud03` | Get-by-id action loading a single entity |
| `szucrud04` | Create action posting a DTO and appending result |
| `szucrud05` | Update action replacing an entity in store |
| `szucrud06` | Delete action removing an entity by id |
| `szucrud07` | Bulk create action appending many entities |
| `szucrud08` | Bulk update action patching many entities |
| `szucrud09` | Bulk delete action removing many ids |
| `szucrud10` | Pagination slice (page / pageSize / total) |
| `szucrud11` | Filter slice with strongly typed filter object |
| `szucrud12` | Search slice for debounce-friendly queries |
| `szucrud13` | Sort slice tracking field + direction |
| `szucrud14` | Multi-select selection slice with toggle |
| `szucrud15` | Shared loading + error slice |
| `szucrud16` | Optimistic update helper with rollback |
| `szucrud17` | Reset action returning store to initial state |
| `szucrud18` | Cache invalidation + refetch helper |
| `szucrud19` | Persisted CRUD store via `persist` middleware |
| `szucrud20` | CRUD store with in-memory audit trail |

**Service layer (`ssvc01`–`ssvc20`)**

| Prefix | Description |
|---|---|
| `ssvc01` | Generic service class backed by a repository |
| `ssvc02` | Paginated list service method (data + total) |
| `ssvc03` | Create service method with DTO validation hook |
| `ssvc04` | Update service method with existence check |
| `ssvc05` | Delete service method with existence check |
| `ssvc06` | Find-by-id service method throwing on not-found |
| `ssvc07` | Standalone DTO validator with strict field checks |
| `ssvc08` | Mapper transforming entity into a response DTO |
| `ssvc09` | Service wired with a structured logger |
| `ssvc10` | Service with read-through list caching + TTL |
| `ssvc11` | Service method wrapped in a unit-of-work transaction |
| `ssvc12` | Service writing audit log on each mutation |
| `ssvc13` | Service accepting auth context per request method |
| `ssvc14` | Service method performing a role check before acting |
| `ssvc15` | Concrete service delegating to a repository |
| `ssvc16` | Service calling an external HTTP API with bearer key |
| `ssvc17` | Factory function building a service from dependencies |
| `ssvc18` | `withRetry` helper with exponential backoff |
| `ssvc19` | Service that emits a domain event after mutation |
| `ssvc20` | Service with constructor dependency injection |

**Repository layer (`srepo01`–`srepo20`)**

| Prefix | Description |
|---|---|
| `srepo01` | Generic `Repository<T, D>` interface with CRUD signatures |
| `srepo02` | In-memory repository implementation (tests / mocks) |
| `srepo03` | Prisma-backed repository for an entity model |
| `srepo04` | MongoDB repository on a typed collection |
| `srepo05` | Raw SQL repository skeleton (SQLite / Postgres drivers) |
| `srepo06` | Standalone `findAll` method |
| `srepo07` | Standalone `findById` method |
| `srepo08` | Standalone `create` method |
| `srepo09` | Standalone `update` method |
| `srepo10` | Standalone `delete` method |
| `srepo11` | Paginated find returning rows + total count |
| `srepo12` | Search method using case-insensitive `contains` |
| `srepo13` | Soft delete that sets a `deletedAt` timestamp |
| `srepo14` | Restore method clearing the soft-delete timestamp |
| `srepo15` | Bulk insert via `createMany` |
| `srepo16` | Transactional repository helper (`$transaction`) |
| `srepo17` | Caching decorator over `findById` with TTL |
| `srepo18` | Repository wrapper emitting audit log per write |
| `srepo19` | Factory wiring a repository to its backing client |
| `srepo20` | Test-double repository mock for service tests |

**Controller layer (`sctrl01`–`sctrl20`)**

| Prefix | Description |
|---|---|
| `sctrl01` | Express controller class wiring service methods to routes |
| `sctrl02` | Express list handler returning a JSON collection |
| `sctrl03` | Express get-by-id handler with 404 fallback |
| `sctrl04` | Express create handler returning 201 |
| `sctrl05` | Express update handler (full replacement) |
| `sctrl06` | Express patch handler for partial updates |
| `sctrl07` | Express delete handler returning 204 |
| `sctrl08` | Express search handler reading `?q=` query string |
| `sctrl09` | Express paginated list handler |
| `sctrl10` | Express auth controller (login / register / logout) |
| `sctrl11` | Express upload controller (multer-style request file) |
| `sctrl12` | Express download controller streaming a file |
| `sctrl13` | Express validation middleware (Zod-style schema) |
| `sctrl14` | Express role guard middleware (`requireRole`) |
| `sctrl15` | Express audit middleware recording each request |
| `sctrl16` | Express in-memory token-bucket rate limiter |
| `sctrl17` | Express global error-handling middleware |
| `sctrl18` | Next.js App Router handler (GET + POST) |
| `sctrl19` | Next.js dynamic route handler (`/[id]` GET / PUT / DELETE) |
| `sctrl20` | Controller factory wiring routes from injected service |

</details>

> **Note** — these advanced auth/API/state prefixes (e.g. `srepo03`, `sctrl19`) are distinct from the original short prefixes (`srepo`, `ssvc`, `smod`, `sctrl`, `sapi`, `szu`, `szua`, `szup`, `szum`, `szuc`). The originals still expand exactly as before; the numbered variants are additive.

### Usage Examples

- Type `srelogin01` in a `.tsx` file and press <kbd>Tab</kbd> to insert a simple React login page.
- Type `snxapi02` in a Next.js route file to insert a POST route handler.
- Type `serpdash04` in a `.tsx` file to drop a CFO-style finance dashboard with KPIs, recent journals, and `${2:Shelb Corp}` / `${4:2025-26}` placeholders pre-wired.
- Type `serplogin11` to insert a multi-company ERP login that asks for credentials then lets the user pick a company workspace.
- Type `serpform05` to scaffold an invoice form (customer + line totals + due date) that posts to `${6:/api/erp/invoices}`.
- Type `serpinv08` to drop a low-stock alerts panel with critical SKU samples and branch context.
- Type `serpaudit15` for an "audit findings" panel with severity buckets and reviewer actions.
- Type `secheckout02` to insert a multi-step e-commerce checkout layout.
- Type `sauth01` in a `.ts` file to drop a fully typed login helper with `${1:Login}Payload`, `${1:Login}Response`, and a bearer-token-ready `fetch` call.
- Type `sapi11` to bootstrap a pre-configured Axios instance with request + response interceptors and a `${4:auth_token}` placeholder.
- Type `srq08` in a `.tsx` file for an optimistic React Query mutation with rollback, ready for forms that need to feel instant.
- Type `srepo03` to scaffold a Prisma repository for a new entity — wires `findMany`, `findUnique`, `create`, `update`, and `delete` against `prisma.${3:entity}`.
- Type `sctrl19` inside a Next.js `app/.../[id]/route.ts` to drop a typed GET / PUT / DELETE handler that awaits the App Router `params` promise.
- Type `szuauth20` to set up a Zustand auth store wired with `devtools` + `persist` for production debugging and reload-safe sessions.

Each variant escalates in complexity — lower numbers tend to be minimal starters, while higher numbers add features like validation, role gating, pagination, filters, multi-step flows, and audit/logging hooks. ERP variants additionally wire in company / branch / financial-year / role / API placeholders so the snippet drops cleanly into a real multi-tenant ERP codebase.

---

## Website and Storefront Block Snippets

Shelb Snippets now includes ready-made **website sections** and **e-commerce storefront blocks** for building landing pages, business websites, SaaS sites, service sites and online stores faster. Drop a single prefix into a `.tsx` file and get a full, accessible, Tailwind-styled section — no extra dependencies, no design system to wire up first.

- **Existing prefixes still work.** Every original short prefix (`scomp`, `sapi`, `secomapp`, `sehero`, `serphome`, `snxapi`, `svtpage`, and the rest) still expands exactly as it did before. The website and storefront blocks are purely additive.
- **New website block snippets follow the same short Shelb prefix system.** `sre*` for framework-agnostic React sections, `se*` for e-commerce storefront blocks, `snx*` for Next.js App Router sections, and `svt*` for Vite + React Router sections.
- **These snippets are useful for React, Next.js, Vite, Tailwind CSS, and e-commerce projects.** Each body is React + TypeScript, Tailwind-only, accessible, and free of external runtime dependencies.

### React Website Sections

| Shortcut Range | Purpose |
|---|---|
| `srehero01` – `srehero20` | Hero sections |
| `sreabout01` – `sreabout20` | About us sections |
| `sreservices01` – `sreservices20` | Services sections |
| `srefeature01` – `srefeature20` | Features sections |
| `srenew01` – `srenew20` | Newsletter sections |
| `sretest01` – `sretest20` | Testimonials |
| `srefaq01` – `srefaq20` | FAQ sections |
| `srecontact01` – `srecontact20` | Contact sections |
| `srefooter01` – `srefooter20` | Footers |
| `srecta01` – `srecta20` | CTA sections |

### Website Content Blocks

| Shortcut Range | Purpose |
|---|---|
| `sreblog01` – `sreblog20` | Blog sections |
| `srepricing01` – `srepricing20` | Pricing sections |
| `srestats01` – `srestats20` | Stats sections |
| `sreteam01` – `sreteam20` | Team sections |
| `sregallery01` – `sregallery20` | Gallery sections |
| `sretimeline01` – `sretimeline20` | Timeline sections |
| `srewhy01` – `srewhy20` | Why choose us sections |
| `srebrand01` – `srebrand20` | Brand/logo sections |

### Carousel Blocks

| Shortcut Range | Purpose |
|---|---|
| `srecaro01` – `srecaro20` | General carousel blocks |
| `srehcaro01` – `srehcaro20` | Horizontal carousel blocks |
| `sreimgcaro01` – `sreimgcaro20` | Image carousel blocks |
| `srelogocaro01` – `srelogocaro20` | Logo carousel blocks |

### E-commerce Storefront Blocks

| Shortcut Range | Purpose |
|---|---|
| `sehome01` – `sehome20` | Storefront homepage blocks |
| `sehero01` – `sehero20` | Storefront hero sections |
| `secat01` – `secat20` | Category sections |
| `seprodcaro01` – `seprodcaro20` | Product carousel sections |
| `sehprodcaro01` – `sehprodcaro20` | Horizontal product carousels |
| `sepcard01` – `sepcard20` | Product card variants |
| `seoffer01` – `seoffer20` | Offers sections |
| `sedeal01` – `sedeal20` | Deals sections |
| `sebrand01` – `sebrand20` | Brand sections |
| `secollection01` – `secollection20` | Collection sections |

### Next.js Website Blocks

| Shortcut Range | Purpose |
|---|---|
| `snxhero01` – `snxhero20` | Next.js hero sections |
| `snxabout01` – `snxabout20` | Next.js about sections |
| `snxservices01` – `snxservices20` | Next.js services sections |
| `snxcaro01` – `snxcaro20` | Next.js carousel sections |
| `snxprodcaro01` – `snxprodcaro20` | Next.js product carousels |
| `snxnewsletter01` – `snxnewsletter20` | Next.js newsletter sections |
| `snxfooter01` – `snxfooter20` | Next.js footers |
| `snxhome01` – `snxhome20` | Next.js homepage shells |

Next.js blocks follow App Router conventions: `export default function`, `'use client'` only where state is required, `next/image` only where image optimization is useful, and `Link` from `next/link` where navigation exists.

### Vite Website Blocks

| Shortcut Range | Purpose |
|---|---|
| `svthero01` – `svthero20` | Vite hero sections |
| `svtabout01` – `svtabout20` | Vite about sections |
| `svtservices01` – `svtservices20` | Vite services sections |
| `svtcaro01` – `svtcaro20` | Vite carousel sections |
| `svtprodcaro01` – `svtprodcaro20` | Vite product carousels |
| `svtnewsletter01` – `svtnewsletter20` | Vite newsletter sections |
| `svtfooter01` – `svtfooter20` | Vite footers |
| `svthome01` – `svthome20` | Vite homepage shells |

Vite blocks use standard React + TypeScript with plain `<img>` tags and a `Link` placeholder from `react-router-dom` only where routing is relevant.

### Usage Examples

- Type `srehero01` in a `.tsx` file to insert a basic hero section.
- Type `sreabout02` to insert an about us section with image.
- Type `sreservices01` to insert a services grid.
- Type `srenew01` to insert a newsletter signup section.
- Type `seprodcaro02` to insert a horizontal product carousel.
- Type `sepcard05` to insert a product card with **Add to Cart** button.
- Type `sehome19` to insert a storefront homepage with all key sections.

Each website and storefront block follows the same pattern as the rest of the library: lower numbers are minimal starters, higher numbers add structure (toggles, filters, sample data, dark variants, enterprise layouts). All entries are validated for JSON correctness, globally unique prefixes, and TypeScript parse-cleanliness on every release.

---

## License

MIT
