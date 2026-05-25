import * as vscode from 'vscode';
import { AnalyticsService } from '../services/analytics';
import { generateERPModule } from '../generators/erpGenerator';
import { Features } from '../workspace/detector';
import { pickWorkspaceRoot } from '../utils/workspace';

const ERP_MODULES = ['employees', 'invoices', 'payroll', 'attendance', 'ledger', 'reports'] as const;

export class GenerateERPCommand {
  static async run(ctx: vscode.ExtensionContext, analytics: AnalyticsService, features: Features): Promise<void> {
    const selected = await vscode.window.showQuickPick(
      ERP_MODULES.map(m => ({ label: m, description: erpModuleDescription(m) })),
      { canPickMany: true, placeHolder: 'Select ERP modules to generate' }
    );

    if (!selected || selected.length === 0) {
      vscode.window.showWarningMessage('ERP generation cancelled.');
      return;
    }

    const root = await pickWorkspaceRoot();
    if (!root) {
      return;
    }

    const moduleNames = selected.map(s => s.label);

    await vscode.window.withProgress(
      { location: vscode.ProgressLocation.Notification, title: `Generating ERP modules: ${moduleNames.join(', ')}`, cancellable: false },
      async () => {
        try {
          await generateERPModule(root, moduleNames, ctx, features);
          analytics.trackEvent('generateERP', { modules: moduleNames });
          vscode.window.showInformationMessage(`Generated ERP modules: ${moduleNames.join(', ')}`);
        } catch (err) {
          vscode.window.showErrorMessage(`Failed to generate ERP modules: ${String(err)}`);
        }
      }
    );
  }
}

function erpModuleDescription(module: string): string {
  const descriptions: Record<string, string> = {
    employees: 'Employee records, departments, positions, salary',
    invoices: 'Client invoices, line items, payment status',
    payroll: 'Payroll entries, deductions, net pay processing',
    attendance: 'Daily attendance, check-in/out, hours worked',
    ledger: 'Double-entry bookkeeping, account codes, balances',
    reports: 'Financial, payroll, and attendance report generation',
  };
  return descriptions[module] ?? '';
}
