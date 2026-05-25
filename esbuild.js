const esbuild = require('esbuild');
esbuild.build({
  entryPoints: ['src/extension.ts'],
  outfile: 'out/extension.js',
  bundle: true,
  platform: 'node',
  external: ['vscode'],
  sourcemap: true,
  target: ['node14']
}).catch(() => process.exit(1));
