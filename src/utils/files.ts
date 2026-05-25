import * as vscode from 'vscode';

export async function writeFile(uri: vscode.Uri, content: string): Promise<void> {
  const encoder = new TextEncoder();
  await vscode.workspace.fs.writeFile(uri, encoder.encode(content));
}

export async function writeFileIfNotExists(uri: vscode.Uri, content: string): Promise<boolean> {
  try {
    await vscode.workspace.fs.stat(uri);
    return false;
  } catch {
    await writeFile(uri, content);
    return true;
  }
}
