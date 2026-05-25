import * as vscode from 'vscode';
import { writeFile } from '../utils/files';
import { Features } from '../workspace/detector';

type ErpModule = 'employees' | 'invoices' | 'payroll' | 'attendance' | 'ledger' | 'reports';

interface ModuleSpec {
  typesContent: string;
  serviceContent: string;
  controllerContent: string;
  routesContent: string;
}

export async function generateERPModule(
  root: vscode.Uri,
  modules: string[],
  _ctx: vscode.ExtensionContext,
  _features: Features
): Promise<void> {
  const base = vscode.Uri.joinPath(root, 'shelb-generated', 'erp');
  await vscode.workspace.fs.createDirectory(base);

  await Promise.all(modules.map(m => generateSingleErpModule(base, m as ErpModule)));
}

async function generateSingleErpModule(base: vscode.Uri, module: ErpModule): Promise<void> {
  const dir = vscode.Uri.joinPath(base, module);
  await vscode.workspace.fs.createDirectory(dir);

  const spec = buildModuleSpec(module);

  await Promise.all([
    writeFile(vscode.Uri.joinPath(dir, 'types.ts'), spec.typesContent),
    writeFile(vscode.Uri.joinPath(dir, 'service.ts'), spec.serviceContent),
    writeFile(vscode.Uri.joinPath(dir, 'controller.ts'), spec.controllerContent),
    writeFile(vscode.Uri.joinPath(dir, 'routes.ts'), spec.routesContent),
  ]);
}

function buildModuleSpec(module: ErpModule): ModuleSpec {
  switch (module) {
    case 'employees': return employeesSpec();
    case 'invoices': return invoicesSpec();
    case 'payroll': return payrollSpec();
    case 'attendance': return attendanceSpec();
    case 'ledger': return ledgerSpec();
    case 'reports': return reportsSpec();
  }
}

// ─── employees ───────────────────────────────────────────────────────────────

function employeesSpec(): ModuleSpec {
  const types = `export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  hireDate: string;
  salary: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type CreateEmployeeDto = Omit<Employee, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateEmployeeDto = Partial<CreateEmployeeDto>;
`;

  return buildGenericSpec('Employee', 'employees', types);
}

// ─── invoices ────────────────────────────────────────────────────────────────

function invoicesSpec(): ModuleSpec {
  const types = `export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';

export interface LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  amount: number;
  currency: string;
  status: InvoiceStatus;
  issuedAt: string;
  dueDate: string;
  lineItems: LineItem[];
  createdAt: string;
  updatedAt: string;
}

export type CreateInvoiceDto = Omit<Invoice, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateInvoiceDto = Partial<CreateInvoiceDto>;
`;

  return buildGenericSpec('Invoice', 'invoices', types);
}

// ─── payroll ─────────────────────────────────────────────────────────────────

function payrollSpec(): ModuleSpec {
  const types = `export type PayrollStatus = 'pending' | 'processed' | 'paid';

export interface Deduction {
  type: string;
  amount: number;
}

export interface PayrollEntry {
  id: string;
  employeeId: string;
  period: string;
  grossPay: number;
  deductions: Deduction[];
  netPay: number;
  status: PayrollStatus;
  processedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export type CreatePayrollEntryDto = Omit<PayrollEntry, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdatePayrollEntryDto = Partial<CreatePayrollEntryDto>;
`;

  return buildGenericSpec('PayrollEntry', 'payroll', types);
}

// ─── attendance ───────────────────────────────────────────────────────────────

function attendanceSpec(): ModuleSpec {
  const types = `export type AttendanceStatus = 'present' | 'absent' | 'half-day' | 'leave';

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: string;
  checkIn: string | null;
  checkOut: string | null;
  hoursWorked: number | null;
  status: AttendanceStatus;
  createdAt: string;
  updatedAt: string;
}

export type CreateAttendanceRecordDto = Omit<AttendanceRecord, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateAttendanceRecordDto = Partial<CreateAttendanceRecordDto>;
`;

  return buildGenericSpec('AttendanceRecord', 'attendance', types);
}

// ─── ledger ───────────────────────────────────────────────────────────────────

function ledgerSpec(): ModuleSpec {
  const types = `export interface LedgerEntry {
  id: string;
  accountCode: string;
  accountName: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
  entryDate: string;
  reference: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateLedgerEntryDto = Omit<LedgerEntry, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateLedgerEntryDto = Partial<CreateLedgerEntryDto>;
`;

  return buildGenericSpec('LedgerEntry', 'ledger', types);
}

// ─── reports ──────────────────────────────────────────────────────────────────

function reportsSpec(): ModuleSpec {
  const types = `export type ReportType = 'financial' | 'payroll' | 'attendance' | 'inventory' | 'sales';
export type ReportStatus = 'queued' | 'generating' | 'ready' | 'failed';

export interface Report {
  id: string;
  type: ReportType;
  name: string;
  generatedBy: string;
  parameters: Record<string, unknown>;
  status: ReportStatus;
  outputUrl: string | null;
  generatedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export type CreateReportDto = Omit<Report, 'id' | 'createdAt' | 'updatedAt' | 'generatedAt' | 'outputUrl'>;
export type UpdateReportDto = Partial<Pick<Report, 'status' | 'outputUrl' | 'generatedAt'>>;
`;

  return buildGenericSpec('Report', 'reports', types);
}

// ─── generic builder ──────────────────────────────────────────────────────────

function buildGenericSpec(entityName: string, routePath: string, typesContent: string): ModuleSpec {
  const plural = `${entityName}s`;

  const serviceContent = `import { randomUUID } from 'crypto';
import type { ${entityName} } from './types';

// In-memory store — replace with your DB adapter (Prisma, TypeORM, Drizzle, etc.)
const store = new Map<string, ${entityName}>();

export class ${entityName}Service {
  async create(dto: Omit<${entityName}, 'id' | 'createdAt' | 'updatedAt'>): Promise<${entityName}> {
    const now = new Date().toISOString();
    const item = { id: randomUUID(), ...dto, createdAt: now, updatedAt: now } as ${entityName};
    store.set(item.id, item);
    return item;
  }

  async findAll(): Promise<${entityName}[]> {
    return [...store.values()];
  }

  async findById(id: string): Promise<${entityName} | undefined> {
    return store.get(id);
  }

  async update(id: string, dto: Partial<${entityName}>): Promise<${entityName} | undefined> {
    const existing = store.get(id);
    if (!existing) {
      return undefined;
    }
    const updated = { ...existing, ...dto, updatedAt: new Date().toISOString() } as ${entityName};
    store.set(id, updated);
    return updated;
  }

  async remove(id: string): Promise<boolean> {
    return store.delete(id);
  }
}
`;

  const controllerContent = `import { Request, Response, NextFunction } from 'express';
import { ${entityName}Service } from './service';

const service = new ${entityName}Service();

export const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const item = await service.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

export const getAll = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.json(await service.findAll());
  } catch (err) {
    next(err);
  }
};

export const getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const item = await service.findById(req.params.id);
    if (!item) {
      res.status(404).json({ message: '${entityName} not found' });
      return;
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const item = await service.update(req.params.id, req.body);
    if (!item) {
      res.status(404).json({ message: '${entityName} not found' });
      return;
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const deleted = await service.remove(req.params.id);
    if (!deleted) {
      res.status(404).json({ message: '${entityName} not found' });
      return;
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
`;

  const routesContent = `import { Router } from 'express';
import { create, getAll, getById, update, remove } from './controller';

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id', update);
router.delete('/:id', remove);

export default router;

// Mount with: app.use('/api/${routePath}', ${plural}Router);
`;

  return { typesContent, serviceContent, controllerContent, routesContent };
}
