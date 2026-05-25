import * as vscode from 'vscode';

export async function pickWorkspaceRoot(): Promise<vscode.Uri | undefined> {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders || folders.length === 0) {
    vscode.window.showErrorMessage('Open a workspace folder first.');
    return undefined;
  }
  if (folders.length === 1) {
    return folders[0].uri;
  }
  const picked = await vscode.window.showQuickPick(
    folders.map(f => ({ label: f.name, description: f.uri.fsPath, folder: f })),
    { placeHolder: 'Select workspace to generate into' }
  );
  return picked?.folder.uri;
}
