import * as vscode from 'vscode';
import { GenerateCrudCommand } from './commands/generateCrud';
import { GenerateERPCommand } from './commands/generateERP';
import { GenerateTauriCommand } from './commands/generateTauri';
import { SnippetExplorer } from './providers/snippetExplorer';
import { WorkspaceDetector } from './workspace/detector';
import { AnalyticsService } from './services/analytics';

export async function activate(context: vscode.ExtensionContext) {
  const analytics = new AnalyticsService(context);

  const detector = new WorkspaceDetector(vscode.workspace.workspaceFolders);
  const enabledFeatures = detector.detect();

  const explorer = new SnippetExplorer(context, analytics);
  context.subscriptions.push(
    vscode.window.registerTreeDataProvider('snippetExplorer', explorer)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('shelb.openSnippet', async (item: any) => {
      await explorer.openSnippet(item);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('shelb.generateCrud', async () => {
      await GenerateCrudCommand.run(context, analytics, enabledFeatures);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('shelb.generateERP', async () => {
      await GenerateERPCommand.run(context, analytics, enabledFeatures);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('shelb.generateTauri', async () => {
      await GenerateTauriCommand.run(context, analytics, enabledFeatures);
    })
  );

  // expose API for tests or future plugins
  return {
    analytics,
    detector,
    explorer
  };
}

export function deactivate() {}
