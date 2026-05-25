import * as vscode from 'vscode';
import * as path from 'path';

export async function generateCrudModule(root: vscode.Uri, name: string, ctx: vscode.ExtensionContext, features: any) {
  const base = vscode.Uri.joinPath(root, 'shelb-generated', name.toLowerCase());
  await vscode.workspace.fs.createDirectory(base);

  // server/controllers
  const controllers = vscode.Uri.joinPath(base, 'server', 'controllers');
  await vscode.workspace.fs.createDirectory(controllers);
  await writeFile(vscode.Uri.joinPath(controllers, `${name}Controller.ts`), controllerTemplate(name));

  // server/services
  const services = vscode.Uri.joinPath(base, 'server', 'services');
  await vscode.workspace.fs.createDirectory(services);
  await writeFile(vscode.Uri.joinPath(services, `${name}Service.ts`), serviceTemplate(name));

  // server/repository
  const repo = vscode.Uri.joinPath(base, 'server', 'repository');
  await vscode.workspace.fs.createDirectory(repo);
  await writeFile(vscode.Uri.joinPath(repo, `${name}Repository.ts`), repositoryTemplate(name));

  // schema
  const schema = vscode.Uri.joinPath(base, 'schema');
  await vscode.workspace.fs.createDirectory(schema);
  await writeFile(vscode.Uri.joinPath(schema, `${name}.schema.json`), jsonSchemaTemplate(name));

  // frontend pages (React)
  const pages = vscode.Uri.joinPath(base, 'frontend', 'pages');
  await vscode.workspace.fs.createDirectory(pages);
  await writeFile(vscode.Uri.joinPath(pages, `${name}List.tsx`), reactListTemplate(name));

  // zustand store
  const store = vscode.Uri.joinPath(base, 'frontend', 'store');
  await vscode.workspace.fs.createDirectory(store);
  await writeFile(vscode.Uri.joinPath(store, `${name}Store.ts`), zustandTemplate(name));

  // API hooks
  const hooks = vscode.Uri.joinPath(base, 'frontend', 'hooks');
  await vscode.workspace.fs.createDirectory(hooks);
  await writeFile(vscode.Uri.joinPath(hooks, `use${name}Api.ts`), reactQueryHookTemplate(name));
}

async function writeFile(uri: vscode.Uri, content: string) {
  const encoder = new TextEncoder();
  await vscode.workspace.fs.writeFile(uri, encoder.encode(content));
}

function controllerTemplate(name: string) {
  return `import { Request, Response } from 'express';
import { ${name}Service } from '../services/${name}Service';

const service = new ${name}Service();

export const create${name} = async (req: Request, res: Response) => {
  const item = await service.create(req.body);
  res.json(item);
};
`;
}

function serviceTemplate(name: string) {
  return `import { ${name}Repository } from '../repository/${name}Repository';

const repo = new ${name}Repository();

export class ${name}Service {
  async create(payload: any) {
    return repo.insert(payload);
  }
}
`;
}

function repositoryTemplate(name: string) {
  return `export class ${name}Repository {
  async insert(payload: any) {
    // TODO: implement persistence (DB adapter)
    return { id: Date.now(), ...payload };
  }
}
`;
}

function jsonSchemaTemplate(name: string) {
  return JSON.stringify({
    title: name,
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' }
    },
    required: ['name']
  }, null, 2);
}

function reactListTemplate(name: string) {
  return `import React from 'react';
import { use${name}Api } from '../hooks/use${name}Api';

export function ${name}List() {
  const { data = [] } = use${name}Api();
  return (
    <div>
      <h2>${name} List</h2>
      <ul>
        {data.map((d: any) => <li key={d.id}>{d.name}</li>)}
      </ul>
    </div>
  );
}
`;
}

function zustandTemplate(name: string) {
  return `import create from 'zustand';

export const use${name}Store = create((set) => ({
  items: [],
  setItems: (items: any[]) => set({ items })
}));
`;
}

function reactQueryHookTemplate(name: string) {
  return `import { useQuery } from '@tanstack/react-query';

export function use${name}Api() {
  return useQuery(['${name.toLowerCase()}'], async () => {
    const res = await fetch('/api/${name.toLowerCase()}');
    return res.json();
  });
}
`;
}
