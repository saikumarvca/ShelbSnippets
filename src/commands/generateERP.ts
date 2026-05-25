import * as vscode from 'vscode';
import { AnalyticsService } from '../services/analytics';
import { generateERPModule } from '../generators/erpGenerator';

export class GenerateERPCommand {
  static async run(ctx: vscode.ExtensionContext, analytics: AnalyticsService, features: any) {
    const moduleName = await vscode.window.showQuickPick(['employees','invoices','payroll','attendance','ledger','reports'], { canPickMany: true, placeHolder: 'Select ERP modules to generate' });
    if (!moduleName || moduleName.length === 0) {
      vscode.window.showWarningMessage('ERP generation cancelled.');
      return;
    }

    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) {
      vscode.window.showErrorMessage('Open a workspace to generate the module in.');
      return;
    }

    const root = workspaceFolders[0].uri;
    try {
      await generateERPModule(root, moduleName, ctx, features);
      analytics.trackEvent('generateERP', { modules: moduleName });
      vscode.window.showInformationMessage(`Generated ERP modules: ${moduleName.join(', ')}`);
    } catch (err) {
      vscode.window.showErrorMessage('Failed to generate ERP modules: ' + String(err));
    }
  }
}
