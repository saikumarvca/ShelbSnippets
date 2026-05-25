import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export interface Features {
  vite: boolean;
  next: boolean;
  tauri: boolean;
  prisma: boolean;
  go: boolean;
  rust: boolean;
}

export class WorkspaceDetector {
  private folders: readonly vscode.WorkspaceFolder[] | undefined;

  constructor(folders?: readonly vscode.WorkspaceFolder[] | undefined) {
    this.folders = folders;
  }

  detect(): Features {
    const features: Features = { vite: false, next: false, tauri: false, prisma: false, go: false, rust: false };
    if (!this.folders || this.folders.length === 0) {
      return features;
    }
    for (const folder of this.folders) {
      this.detectFolder(folder.uri.fsPath, features);
    }
    return features;
  }

  private detectFolder(root: string, features: Features): void {
    try {
      if (exists(root, 'vite.config.ts') || exists(root, 'vite.config.js')) {
        features.vite = true;
      }
      if (exists(root, 'next.config.js') || exists(root, 'next.config.ts') || exists(root, 'next.config.mjs')) {
        features.next = true;
      }
      if (exists(root, 'tauri.conf.json') || exists(root, 'src-tauri', 'tauri.conf.json')) {
        features.tauri = true;
      }
      if (exists(root, 'prisma', 'schema.prisma')) {
        features.prisma = true;
      }
      if (exists(root, 'go.mod')) {
        features.go = true;
      }
      if (exists(root, 'Cargo.toml')) {
        features.rust = true;
      }
    } catch {
      // ignore filesystem errors for non-existent paths
    }
  }
}

function exists(root: string, ...segments: string[]): boolean {
  return fs.existsSync(path.join(root, ...segments));
}
