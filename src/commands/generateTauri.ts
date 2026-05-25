import * as vscode from 'vscode';
import { AnalyticsService } from '../services/analytics';
import { generateTauriModule } from '../generators/tauriGenerator';
import { Features } from '../workspace/detector';
import { validateModuleName } from '../utils/validation';
import { pickWorkspaceRoot } from '../utils/workspace';

export class GenerateTauriCommand {
  static async run(ctx: vscode.ExtensionContext, analytics: AnalyticsService, features: Features): Promise<void> {
    const raw = await vscode.window.showInputBox({
      prompt: 'Enter desktop module name (e.g. AdminDesktop, InventoryApp)',
      placeHolder: 'PascalCase, letters and numbers only',
      validateInput: (value) => {
        const result = validateModuleName(value);
        return result.valid ? null : (result.reason ?? 'Invalid module name');
      },
    });

    if (!raw) {
      vscode.window.showWarningMessage('Tauri generation cancelled.');
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
      { location: vscode.ProgressLocation.Notification, title: `Generating Tauri module: ${sanitized}`, cancellable: false },
      async () => {
        try {
          await generateTauriModule(root, sanitized, ctx, features);
          analytics.trackEvent('generateTauri', { module: sanitized });
          vscode.window.showInformationMessage(`Generated Tauri desktop module: ${sanitized}`);
        } catch (err) {
          vscode.window.showErrorMessage(`Failed to generate Tauri module: ${String(err)}`);
        }
      }
    );
  }
}
