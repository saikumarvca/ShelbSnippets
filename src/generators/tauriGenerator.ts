import * as vscode from 'vscode';
import { writeFile } from '../utils/files';
import { toKebabCase } from '../utils/validation';
import { Features } from '../workspace/detector';

export async function generateTauriModule(
  root: vscode.Uri,
  name: string,
  _ctx: vscode.ExtensionContext,
  _features: Features
): Promise<void> {
  const kebab = toKebabCase(name);
  const base = vscode.Uri.joinPath(root, 'shelb-generated', kebab);

  const srcTauriDir = vscode.Uri.joinPath(base, 'src-tauri', 'src');
  const frontendDir = vscode.Uri.joinPath(base, 'src');

  for (const dir of [srcTauriDir, frontendDir]) {
    await vscode.workspace.fs.createDirectory(dir);
  }

  await Promise.all([
    writeFile(vscode.Uri.joinPath(base, 'tauri.conf.json'), tauriConfigTemplate(name, kebab)),
    writeFile(vscode.Uri.joinPath(base, 'src-tauri', 'Cargo.toml'), cargoTomlTemplate(kebab)),
    writeFile(vscode.Uri.joinPath(srcTauriDir, 'main.rs'), mainRsTemplate(name)),
    writeFile(vscode.Uri.joinPath(srcTauriDir, 'commands.rs'), commandsRsTemplate(name)),
    writeFile(vscode.Uri.joinPath(base, 'package.json'), packageJsonTemplate(name, kebab)),
    writeFile(vscode.Uri.joinPath(base, 'vite.config.ts'), viteConfigTemplate()),
    writeFile(vscode.Uri.joinPath(frontendDir, 'main.tsx'), mainTsxTemplate()),
    writeFile(vscode.Uri.joinPath(frontendDir, 'App.tsx'), appTsxTemplate(name)),
    writeFile(vscode.Uri.joinPath(frontendDir, 'ipc.ts'), ipcTemplate(name)),
  ]);
}

function tauriConfigTemplate(name: string, identifier: string): string {
  return JSON.stringify(
    {
      $schema: '../node_modules/@tauri-apps/cli/schema.json',
      tauri: {
        allowlist: { all: false, shell: { open: true } },
        bundle: {
          active: true,
          identifier: `com.shelb.${identifier}`,
          icon: ['icons/32x32.png', 'icons/128x128.png'],
        },
        security: { csp: null },
        windows: [
          {
            fullscreen: false,
            resizable: true,
            title: name,
            width: 1200,
            height: 800,
          },
        ],
      },
      build: {
        beforeDevCommand: 'npm run dev',
        beforeBuildCommand: 'npm run build',
        devPath: 'http://localhost:5173',
        distDir: '../dist',
      },
      package: {
        productName: name,
        version: '0.1.0',
      },
    },
    null,
    2
  );
}

function cargoTomlTemplate(kebab: string): string {
  return `[package]
name = "${kebab}"
version = "0.1.0"
edition = "2021"

[build-dependencies]
tauri-build = { version = "1", features = [] }

[dependencies]
tauri = { version = "1", features = ["shell-open"] }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
`;
}

function mainRsTemplate(name: string): string {
  return `// Prevents additional console window on Windows in release
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            commands::greet,
            commands::get_app_info,
        ])
        .run(tauri::generate_context!())
        .expect("error while running ${name} application");
}
`;
}

function commandsRsTemplate(name: string): string {
  return `use serde::Serialize;

#[derive(Serialize)]
pub struct AppInfo {
    name: String,
    version: String,
}

#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! Welcome to ${name}.", name)
}

#[tauri::command]
pub fn get_app_info() -> AppInfo {
    AppInfo {
        name: "${name}".to_string(),
        version: env!("CARGO_PKG_VERSION").to_string(),
    }
}
`;
}

function packageJsonTemplate(name: string, kebab: string): string {
  return JSON.stringify(
    {
      name: kebab,
      version: '0.1.0',
      private: true,
      scripts: {
        dev: 'vite',
        build: 'tsc && vite build',
        preview: 'vite preview',
        tauri: 'tauri',
      },
      dependencies: {
        '@tauri-apps/api': '^1',
        react: '^18',
        'react-dom': '^18',
      },
      devDependencies: {
        '@tauri-apps/cli': '^1',
        '@types/react': '^18',
        '@types/react-dom': '^18',
        '@vitejs/plugin-react': '^4',
        typescript: '^5',
        vite: '^4',
      },
    },
    null,
    2
  );
}

function viteConfigTemplate(): string {
  return `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  server: {
    port: 5173,
    strictPort: true,
  },
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    target: ['es2021', 'chrome100', 'safari13'],
    minify: !process.env.TAURI_DEBUG,
    sourcemap: !!process.env.TAURI_DEBUG,
  },
});
`;
}

function mainTsxTemplate(): string {
  return `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
}

function appTsxTemplate(name: string): string {
  return `import React, { useEffect, useState } from 'react';
import { greet, getAppInfo } from './ipc';
import type { AppInfo } from './ipc';

export default function App() {
  const [appInfo, setAppInfo] = useState<AppInfo | null>(null);
  const [greeting, setGreeting] = useState('');
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    getAppInfo().then(setAppInfo).catch(console.error);
  }, []);

  const handleGreet = async () => {
    const msg = await greet(nameInput);
    setGreeting(msg);
  };

  return (
    <main>
      <h1>${name}</h1>
      {appInfo && <p>v{appInfo.version}</p>}
      <div>
        <input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Enter your name"
        />
        <button onClick={handleGreet}>Greet</button>
      </div>
      {greeting && <p>{greeting}</p>}
    </main>
  );
}
`;
}

function ipcTemplate(name: string): string {
  return `import { invoke } from '@tauri-apps/api/tauri';

export interface AppInfo {
  name: string;
  version: string;
}

export async function greet(name: string): Promise<string> {
  return invoke<string>('greet', { name });
}

export async function getAppInfo(): Promise<AppInfo> {
  return invoke<AppInfo>('get_app_info');
}

// Add additional IPC commands for ${name} below
`;
}
