export interface ValidationResult {
  valid: boolean;
  reason?: string;
  sanitized?: string;
}

export function validateModuleName(name: string): ValidationResult {
  const trimmed = (name ?? '').trim();
  if (!trimmed) {
    return { valid: false, reason: 'Module name cannot be empty.' };
  }
  if (!/^[A-Za-z][A-Za-z0-9]*$/.test(trimmed)) {
    return { valid: false, reason: 'Must start with a letter and contain only letters and numbers (no spaces or symbols).' };
  }
  if (trimmed.length > 64) {
    return { valid: false, reason: 'Module name must be 64 characters or fewer.' };
  }
  return { valid: true, sanitized: toPascalCase(trimmed) };
}

export function toPascalCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function toCamelCase(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

export function toKebabCase(s: string): string {
  return s
    .replace(/([A-Z])/g, (m, c, i) => (i > 0 ? '-' : '') + c.toLowerCase())
    .replace(/^-/, '');
}
