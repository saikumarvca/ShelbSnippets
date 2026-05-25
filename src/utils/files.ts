import * as vscode from 'vscode';

export async function writeText(uri: vscode.Uri, content: string) {
  const encoder = new TextEncoder();
  await vscode.workspace.fs.writeFile(uri, encoder.encode(content));
}
