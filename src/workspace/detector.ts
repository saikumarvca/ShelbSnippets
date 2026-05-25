import * as vscode from 'vscode';

export class WorkspaceDetector {
  folders?: readonly vscode.WorkspaceFolder[] | undefined;
  constructor(folders?: readonly vscode.WorkspaceFolder[] | undefined) {
    this.folders = folders;
  }

  detect() {
    const features: any = {
      vite: false,
      next: false,
      tauri: false,
      prisma: false
    };

    if (!this.folders || this.folders.length === 0) return features;

    try {
      const root = this.folders[0].uri.fsPath;
      const fs = require('fs');
      if (fs.existsSync(require('path').join(root, 'vite.config.ts'))) features.vite = true;
      if (fs.existsSync(require('path').join(root, 'next.config.js')) || fs.existsSync(require('path').join(root, 'next.config.ts'))) features.next = true;
      if (fs.existsSync(require('path').join(root, 'tauri.conf.json'))) features.tauri = true;
      if (fs.existsSync(require('path').join(root, 'prisma', 'schema.prisma'))) features.prisma = true;
    } catch (e) {
      // ignore
    }

    return features;
  }
}
