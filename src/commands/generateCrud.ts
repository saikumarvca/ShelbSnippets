import * as vscode from 'vscode';
import { AnalyticsService } from '../services/analytics';
import { generateCrudModule } from '../generators/crudGenerator';
import { Features } from '../workspace/detector';
import { validateModuleName } from '../utils/validation';
import { pickWorkspaceRoot } from '../utils/workspace';

export class GenerateCrudCommand {
  static async run(ctx: vscode.ExtensionContext, analytics: AnalyticsService, features: Features): Promise<void> {
    const raw = await vscode.window.showInputBox({
      prompt: 'Enter module name (e.g. Customer, Product, Order)',
      placeHolder: 'PascalCase, letters and numbers only',
      validateInput: (value) => {
        const result = validateModuleName(value);
        return result.valid ? null : (result.reason ?? 'Invalid module name');
      },
    });

    if (!raw) {
      vscode.window.showWarningMessage('CRUD generation cancelled.');
      return;
    }

    const { valid, reason, sanitized } = validateModuleName(raw);
    if (!valid || !sanitized) {
      vscode.window.showErrorMessage(`Invalid module name: ${reason}`);
      return;
    }

    const root = await pickWorkspaceRoot();
    if (!root) {
      return;
    }

    await vscode.window.withProgress(
      { location: vscode.ProgressLocation.Notification, title: `Generating CRUD module: ${sanitized}`, cancellable: false },
      async () => {
        try {
          await generateCrudModule(root, sanitized, ctx, features);
          analytics.trackEvent('generateCrud', { module: sanitized });
          vscode.window.showInformationMessage(`Generated CRUD module: ${sanitized}`);
        } catch (err) {
          vscode.window.showErrorMessage(`Failed to generate CRUD module: ${String(err)}`);
        }
      }
    );
  }
}
