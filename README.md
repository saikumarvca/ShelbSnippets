# Shelb Snippets

**Turbo productivity toolkit for full-stack + desktop ERP development.**  
Scaffolds typed, production-ready code in seconds — controllers, services, repositories, React Query hooks, Zustand stores, Tauri IPC, and full ERP domain modules.

---

## Features

### Code Generators

| Command | What it generates |
|---|---|
| **Shelb: Generate CRUD Module** | Typed controller, service, repository, Express router, `List.tsx`, `Form.tsx`, Zustand store, React Query hooks |
| **Shelb: Generate ERP Module** | Domain-typed TypeScript modules for employees, invoices, payroll, attendance, ledger, and reports |
| **Shelb: Generate Tauri Desktop Module** | Full Tauri v1 project — `Cargo.toml`, IPC commands in Rust, typed `ipc.ts` wrapper, Vite + React frontend |

### Snippet Library

Trigger snippets by prefix in the appropriate file type:

| Prefix | Language | Description |
|---|---|---|
| `sre` | JSX / TSX | React functional component |
| `snx` | JS / TS | Next.js App Router page |
| `sta` | Rust | Tauri `#[tauri::command]` handler |
| `spr` | Prisma | Prisma model with `cuid` id |

Full snippet files: `react`, `nextjs`, `vite`, `tailwind`, `prisma`, `zustand`, `express`, `go`, `python`, `tauri`, `erp`, `sqlite`, `mongo`, `devops`, `desktop`, `ecommerce`, `architecture`, `ai`.

### Workspace Intelligence

- Auto-detects Vite, Next.js, Tauri, Prisma, Go (`go.mod`), and Rust (`Cargo.toml`) across **all** workspace folders
- Feature flags adapt generator output to your detected stack
- Multi-root workspace support — picks the right folder when you have multiple open

### Snippet Explorer

Browse and insert snippets from the **Explorer** sidebar panel without memorizing prefixes.

---

## Getting Started

### Install from VSIX

```bash
npm install
npm run compile
npx vsce package
# Install the generated .vsix via Extensions > Install from VSIX
```

### Run in development

```bash
npm install
npm run compile
# Press F5 in VS Code to launch the Extension Development Host
```

---

## Using the Generators

### CRUD Module

1. Open the Command Palette (`Ctrl+Shift+P`)
2. Run **Shelb: Generate CRUD Module**
3. Enter a PascalCase module name (e.g. `Customer`)
4. Select your workspace folder (multi-root aware)

Generated output in `shelb-generated/customer/`:

```
customer.types.ts              ← TypeScript interface + Create/Update DTOs
server/
  controllers/CustomerController.ts   ← Express handlers, all 5 operations
  services/CustomerService.ts         ← Business logic layer
  repository/CustomerRepository.ts    ← In-memory store (swap for Prisma/Drizzle)
  routes/customer.routes.ts           ← Express Router, ready to mount
frontend/
  pages/CustomerList.tsx              ← Table with delete, loading + error states
  pages/CustomerForm.tsx              ← Accessible create form
  store/CustomerStore.ts              ← Typed Zustand store
  hooks/useCustomerApi.ts             ← React Query hooks (list, get, create, update, delete)
```

To wire the router into your Express app:

```typescript
import customerRouter from './shelb-generated/customer/server/routes/customer.routes';
app.use('/api/customer', customerRouter);
```

### ERP Modules

1. Run **Shelb: Generate ERP Module**
2. Select one or more modules from the list

Each module generates `types.ts`, `service.ts`, `controller.ts`, and `routes.ts` with domain-specific types:

| Module | Key types |
|---|---|
| `employees` | `Employee`, `CreateEmployeeDto`, `UpdateEmployeeDto` |
| `invoices` | `Invoice`, `LineItem`, `InvoiceStatus` |
| `payroll` | `PayrollEntry`, `Deduction`, `PayrollStatus` |
| `attendance` | `AttendanceRecord`, `AttendanceStatus` |
| `ledger` | `LedgerEntry` with debit/credit/balance |
| `reports` | `Report`, `ReportType`, `ReportStatus` |

### Tauri Desktop Module

1. Run **Shelb: Generate Tauri Desktop Module**
2. Enter a PascalCase name (e.g. `AdminDesktop`)

Generated output in `shelb-generated/admin-desktop/`:

```
tauri.conf.json         ← Tauri bundle + security config
src-tauri/
  Cargo.toml            ← Rust dependencies
  src/main.rs           ← Tauri builder with registered commands
  src/commands.rs       ← Typed IPC commands (greet, get_app_info)
src/
  main.tsx              ← React entry point
  App.tsx               ← Root component with IPC wiring
  ipc.ts                ← Typed invoke() wrappers
package.json            ← Tauri CLI + Vite + React deps
vite.config.ts          ← Vite config tuned for Tauri
```

---

## Configuration

All settings live under the `shelb` namespace in VS Code settings:

| Setting | Default | Description |
|---|---|---|
| `shelb.enableERP` | `true` | Show ERP generation commands |
| `shelb.enableTauri` | `true` | Show Tauri generation commands |
| `shelb.enableAI` | `false` | Enable AI architecture features |
| `shelb.enableWorkspaceDetection` | `true` | Auto-detect frameworks on activation |
| `shelb.defaultBackend` | `node` | Default backend for generators (`node` / `go` / `rust`) |
| `shelb.defaultFrontend` | `react` | Default frontend for generators |

---

## Generated Code Philosophy

- **Zero `any` types** — every generated file uses typed interfaces and DTOs
- **Swap-ready persistence** — repositories use an in-memory `Map` by default; replace with Prisma, TypeORM, or Drizzle by implementing the same interface
- **Error boundaries** — controllers wrap all operations in `try/catch` and forward to Express error middleware via `next(err)`
- **Accessible UI** — generated React components use semantic HTML, `aria-label`, and `role="alert"` for error states
- **Query invalidation** — React Query mutations invalidate the correct query keys on success

---

## Requirements

- VS Code 1.79+
- Node.js 18+
- For Tauri modules: Rust toolchain + Tauri CLI

---

## License

MIT
