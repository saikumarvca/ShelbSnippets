import * as vscode from 'vscode';
import { AnalyticsService } from '../services/analytics';
import { generateCrudModule } from '../generators/crudGenerator';

export class GenerateCrudCommand {
  static async run(ctx: vscode.ExtensionContext, analytics: AnalyticsService, features: any) {
    const moduleName = await vscode.window.showInputBox({ prompt: 'Enter module name (e.g. Customer)' });
    if (!moduleName) {
      vscode.window.showWarningMessage('CRUD generation cancelled.');
      return;
    }

    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) {
      vscode.window.showErrorMessage('Open a workspace to generate the module in.');
      return;
    }

    const root = workspaceFolders[0].uri;
    try {
      await generateCrudModule(root, moduleName, ctx, features);
      analytics.trackEvent('generateCrud', { module: moduleName });
      vscode.window.showInformationMessage(`Generated CRUD module: ${moduleName}`);
    } catch (err) {
      vscode.window.showErrorMessage('Failed to generate CRUD module: ' + String(err));
    }
  }
}
