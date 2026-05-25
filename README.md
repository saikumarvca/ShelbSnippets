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

### Vite Advanced Blocks

| Shortcut Range | Purpose |
|---|---|
| `svtlogin01` – `svtlogin20` | Vite login pages |
| `svtreg01` – `svtreg20` | Vite register pages |
| `svtdash01` – `svtdash20` | Vite dashboards |
| `svtpage01` – `svtpage20` | Vite pages |
| `svtroute01` – `svtroute20` | Vite routing |
| `svtlayout01` – `svtlayout20` | Vite layouts |
| `svtenv01` – `svtenv20` | Vite environment snippets |
| `svtconfig01` – `svtconfig20` | Vite config snippets |

### ERP Advanced Blocks

| Shortcut Range | Purpose |
|---|---|
| `serplogin01` – `serplogin20` | ERP login screens |
| `serpdash01` – `serpdash20` | ERP dashboards |
| `serpform01` – `serpform20` | ERP forms |
| `serptable01` – `serptable20` | ERP tables |
| `serpmodule01` – `serpmodule20` | ERP module layouts |
| `serpadmin01` – `serpadmin20` | ERP admin blocks |
| `serpreport01` – `serpreport20` | ERP reports |
| `serpaudit01` – `serpaudit20` | ERP audit screens |
| `serpfin01` – `serpfin20` | ERP finance screens |
| `serpinv01` – `serpinv20` | ERP inventory screens |

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

### Usage Examples

- Type `srelogin01` in a `.tsx` file and press <kbd>Tab</kbd> to insert a simple React login page.
- Type `snxapi02` in a Next.js route file to insert a POST route handler.
- Type `serpdash03` to insert an ERP dashboard layout.
- Type `secheckout02` to insert a multi-step e-commerce checkout layout.

Each variant escalates in complexity — lower numbers tend to be minimal starters, while higher numbers add features like validation, role gating, pagination, filters, multi-step flows, and audit/logging hooks.

---

## License

MIT
