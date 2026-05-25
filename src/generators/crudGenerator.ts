import * as vscode from 'vscode';
import { writeFile } from '../utils/files';
import { toKebabCase, toCamelCase } from '../utils/validation';
import { Features } from '../workspace/detector';

export async function generateCrudModule(
  root: vscode.Uri,
  name: string,
  _ctx: vscode.ExtensionContext,
  _features: Features
): Promise<void> {
  const kebab = toKebabCase(name);
  const camel = toCamelCase(name);
  const base = vscode.Uri.joinPath(root, 'shelb-generated', kebab);

  const serverDir = vscode.Uri.joinPath(base, 'server');
  const controllersDir = vscode.Uri.joinPath(serverDir, 'controllers');
  const servicesDir = vscode.Uri.joinPath(serverDir, 'services');
  const repoDir = vscode.Uri.joinPath(serverDir, 'repository');
  const routesDir = vscode.Uri.joinPath(serverDir, 'routes');
  const frontendDir = vscode.Uri.joinPath(base, 'frontend');
  const pagesDir = vscode.Uri.joinPath(frontendDir, 'pages');
  const storeDir = vscode.Uri.joinPath(frontendDir, 'store');
  const hooksDir = vscode.Uri.joinPath(frontendDir, 'hooks');

  for (const dir of [controllersDir, servicesDir, repoDir, routesDir, pagesDir, storeDir, hooksDir]) {
    await vscode.workspace.fs.createDirectory(dir);
  }

  await Promise.all([
    writeFile(vscode.Uri.joinPath(base, `${name}.types.ts`), typesTemplate(name)),
    writeFile(vscode.Uri.joinPath(controllersDir, `${name}Controller.ts`), controllerTemplate(name, camel)),
    writeFile(vscode.Uri.joinPath(servicesDir, `${name}Service.ts`), serviceTemplate(name)),
    writeFile(vscode.Uri.joinPath(repoDir, `${name}Repository.ts`), repositoryTemplate(name)),
    writeFile(vscode.Uri.joinPath(routesDir, `${kebab}.routes.ts`), routesTemplate(name, camel, kebab)),
    writeFile(vscode.Uri.joinPath(pagesDir, `${name}List.tsx`), reactListTemplate(name)),
    writeFile(vscode.Uri.joinPath(pagesDir, `${name}Form.tsx`), reactFormTemplate(name)),
    writeFile(vscode.Uri.joinPath(storeDir, `${name}Store.ts`), zustandTemplate(name)),
    writeFile(vscode.Uri.joinPath(hooksDir, `use${name}Api.ts`), reactQueryHooksTemplate(name, camel, kebab)),
  ]);
}

function typesTemplate(name: string): string {
  return `export interface ${name} {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export type Create${name}Dto = Omit<${name}, 'id' | 'createdAt' | 'updatedAt'>;
export type Update${name}Dto = Partial<Create${name}Dto>;
`;
}

function controllerTemplate(name: string, camel: string): string {
  return `import { Request, Response, NextFunction } from 'express';
import { ${name}Service } from '../services/${name}Service';
import type { Create${name}Dto, Update${name}Dto } from '../../${name}.types';

const service = new ${name}Service();

export const create${name} = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const dto = req.body as Create${name}Dto;
    const item = await service.create(dto);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

export const getAll${name}s = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const items = await service.findAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

export const get${name}ById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const item = await service.findById(req.params.id);
    if (!item) {
      res.status(404).json({ message: '${name} not found' });
      return;
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const update${name} = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const dto = req.body as Update${name}Dto;
    const item = await service.update(req.params.id, dto);
    if (!item) {
      res.status(404).json({ message: '${name} not found' });
      return;
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const delete${name} = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const deleted = await service.remove(req.params.id);
    if (!deleted) {
      res.status(404).json({ message: '${name} not found' });
      return;
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

// Silence unused variable warning for camel-cased alias used in routes
void (0 as unknown as typeof ${camel});
`;
}

function serviceTemplate(name: string): string {
  return `import { ${name}Repository } from '../repository/${name}Repository';
import type { ${name}, Create${name}Dto, Update${name}Dto } from '../../${name}.types';

const repo = new ${name}Repository();

export class ${name}Service {
  async create(dto: Create${name}Dto): Promise<${name}> {
    return repo.insert(dto);
  }

  async findAll(): Promise<${name}[]> {
    return repo.findAll();
  }

  async findById(id: string): Promise<${name} | undefined> {
    return repo.findById(id);
  }

  async update(id: string, dto: Update${name}Dto): Promise<${name} | undefined> {
    return repo.update(id, dto);
  }

  async remove(id: string): Promise<boolean> {
    return repo.delete(id);
  }
}
`;
}

function repositoryTemplate(name: string): string {
  return `import { randomUUID } from 'crypto';
import type { ${name}, Create${name}Dto, Update${name}Dto } from '../../${name}.types';

// In-memory store — swap this for your DB adapter (Prisma, TypeORM, Drizzle, etc.)
const store = new Map<string, ${name}>();

export class ${name}Repository {
  async insert(dto: Create${name}Dto): Promise<${name}> {
    const now = new Date().toISOString();
    const item: ${name} = { id: randomUUID(), ...dto, createdAt: now, updatedAt: now };
    store.set(item.id, item);
    return item;
  }

  async findAll(): Promise<${name}[]> {
    return [...store.values()];
  }

  async findById(id: string): Promise<${name} | undefined> {
    return store.get(id);
  }

  async update(id: string, dto: Update${name}Dto): Promise<${name} | undefined> {
    const existing = store.get(id);
    if (!existing) {
      return undefined;
    }
    const updated: ${name} = { ...existing, ...dto, updatedAt: new Date().toISOString() };
    store.set(id, updated);
    return updated;
  }

  async delete(id: string): Promise<boolean> {
    return store.delete(id);
  }
}
`;
}

function routesTemplate(name: string, camel: string, kebab: string): string {
  return `import { Router } from 'express';
import {
  create${name},
  getAll${name}s,
  get${name}ById,
  update${name},
  delete${name},
} from '../controllers/${name}Controller';

const router = Router();

router.post('/', create${name});
router.get('/', getAll${name}s);
router.get('/:id', get${name}ById);
router.patch('/:id', update${name});
router.delete('/:id', delete${name});

export default router;

// Mount with: app.use('/api/${kebab}', ${camel}Router);
`;
}

function reactListTemplate(name: string): string {
  return `import React from 'react';
import { use${name}List, useDelete${name} } from '../hooks/use${name}Api';
import type { ${name} } from '../../${name}.types';

export function ${name}List() {
  const { data = [], isLoading, error } = use${name}List();
  const { mutate: remove, isPending: isDeleting } = useDelete${name}();

  if (isLoading) {
    return <p>Loading…</p>;
  }
  if (error) {
    return <p role="alert">Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>${name} List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: ${name}) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              <td>
                <button
                  onClick={() => remove(item.id)}
                  disabled={isDeleting}
                  aria-label={\`Delete \${item.name}\`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
`;
}

function reactFormTemplate(name: string): string {
  return `import React, { useState } from 'react';
import { useCreate${name} } from '../hooks/use${name}Api';
import type { Create${name}Dto } from '../../${name}.types';

const emptyForm: Create${name}Dto = { name: '', email: '' };

export function ${name}Form() {
  const [form, setForm] = useState<Create${name}Dto>(emptyForm);
  const { mutate: create, isPending, error } = useCreate${name}();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    create(form, { onSuccess: () => setForm(emptyForm) });
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Create ${name}">
      <h2>New ${name}</h2>
      <div>
        <label htmlFor="${name.toLowerCase()}-name">Name</label>
        <input
          id="${name.toLowerCase()}-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="${name.toLowerCase()}-email">Email</label>
        <input
          id="${name.toLowerCase()}-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
      </div>
      {error && <p role="alert">{error.message}</p>}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Saving…' : 'Create ${name}'}
      </button>
    </form>
  );
}
`;
}

function zustandTemplate(name: string): string {
  return `import { create } from 'zustand';
import type { ${name} } from '../../${name}.types';

interface ${name}State {
  selected: ${name} | null;
  select: (item: ${name} | null) => void;
}

export const use${name}Store = create<${name}State>((set) => ({
  selected: null,
  select: (item) => set({ selected: item }),
}));
`;
}

function reactQueryHooksTemplate(name: string, camel: string, kebab: string): string {
  return `import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { ${name}, Create${name}Dto, Update${name}Dto } from '../../${name}.types';

const BASE_URL = \`/api/${kebab}\`;
const QUERY_KEY = ['${camel}'] as const;

export function use${name}List() {
  return useQuery<${name}[], Error>({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const res = await fetch(BASE_URL);
      if (!res.ok) {
        throw new Error(\`Failed to fetch ${name} list: \${res.statusText}\`);
      }
      return res.json() as Promise<${name}[]>;
    },
  });
}

export function use${name}(id: string) {
  return useQuery<${name}, Error>({
    queryKey: [...QUERY_KEY, id],
    queryFn: async () => {
      const res = await fetch(\`\${BASE_URL}/\${id}\`);
      if (!res.ok) {
        throw new Error(\`Failed to fetch ${name}: \${res.statusText}\`);
      }
      return res.json() as Promise<${name}>;
    },
    enabled: Boolean(id),
  });
}

export function useCreate${name}() {
  const qc = useQueryClient();
  return useMutation<${name}, Error, Create${name}Dto>({
    mutationFn: async (dto) => {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dto),
      });
      if (!res.ok) {
        throw new Error(\`Failed to create ${name}: \${res.statusText}\`);
      }
      return res.json() as Promise<${name}>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: QUERY_KEY }),
  });
}

export function useUpdate${name}() {
  const qc = useQueryClient();
  return useMutation<${name}, Error, { id: string; dto: Update${name}Dto }>({
    mutationFn: async ({ id, dto }) => {
      const res = await fetch(\`\${BASE_URL}/\${id}\`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dto),
      });
      if (!res.ok) {
        throw new Error(\`Failed to update ${name}: \${res.statusText}\`);
      }
      return res.json() as Promise<${name}>;
    },
    onSuccess: (_, { id }) => {
      qc.invalidateQueries({ queryKey: QUERY_KEY });
      qc.invalidateQueries({ queryKey: [...QUERY_KEY, id] });
    },
  });
}

export function useDelete${name}() {
  const qc = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      const res = await fetch(\`\${BASE_URL}/\${id}\`, { method: 'DELETE' });
      if (!res.ok) {
        throw new Error(\`Failed to delete ${name}: \${res.statusText}\`);
      }
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: QUERY_KEY }),
  });
}
`;
}
