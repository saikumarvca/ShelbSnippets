import * as vscode from 'vscode';

export async function generateTauriModule(root: vscode.Uri, name: string, ctx: vscode.ExtensionContext, features: any) {
  const base = vscode.Uri.joinPath(root, 'shelb-generated', name.toLowerCase());
  await vscode.workspace.fs.createDirectory(base);

  // Create tauri config placeholder
  await writeFile(vscode.Uri.joinPath(base, 'tauri.conf.json'), JSON.stringify({ package: { productName: name }, build: {} }, null, 2));

  // Rust src
  const rust = vscode.Uri.joinPath(base, 'src');
  await vscode.workspace.fs.createDirectory(rust);
  await writeFile(vscode.Uri.joinPath(rust, 'main.rs'), `fn main() { println!("${name} tauri module"); }`);

  // Frontend placeholder
  const frontend = vscode.Uri.joinPath(base, 'frontend');
  await vscode.workspace.fs.createDirectory(frontend);
  await writeFile(vscode.Uri.joinPath(frontend, 'index.html'), `<html><body><h1>${name}</h1></body></html>`);
}

async function writeFile(uri: vscode.Uri, content: string) {
  const encoder = new TextEncoder();
  await vscode.workspace.fs.writeFile(uri, encoder.encode(content));
}
