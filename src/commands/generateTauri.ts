import * as vscode from 'vscode';
import { AnalyticsService } from '../services/analytics';
import { generateTauriModule } from '../generators/tauriGenerator';

export class GenerateTauriCommand {
  static async run(ctx: vscode.ExtensionContext, analytics: AnalyticsService, features: any) {
    const name = await vscode.window.showInputBox({ prompt: 'Enter desktop module name (e.g. AdminDesktop)' });
    if (!name) {
      vscode.window.showWarningMessage('Tauri generation cancelled.');
      return;
    }

    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) {
      vscode.window.showErrorMessage('Open a workspace to generate the module in.');
      return;
    }

    const root = workspaceFolders[0].uri;
    try {
      await generateTauriModule(root, name, ctx, features);
      analytics.trackEvent('generateTauri', { module: name });
      vscode.window.showInformationMessage(`Generated Tauri desktop module: ${name}`);
    } catch (err) {
      vscode.window.showErrorMessage('Failed to generate Tauri module: ' + String(err));
    }
  }
}
