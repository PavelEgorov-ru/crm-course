import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';

const [command = 'build', ...args] = process.argv.slice(2);
if (!['build', 'dev', 'preview'].includes(command)) {
  throw new Error('Expected build, dev, or preview');
}
const require = createRequire(import.meta.url);
const packagePath = require.resolve('astro/package.json');
const astro = JSON.parse(readFileSync(packagePath, 'utf8'));
const result = spawnSync(process.execPath, [
  resolve(dirname(packagePath), astro.bin.astro), command, '--mode', 'review', ...args,
], {
  stdio: 'inherit',
  env: { ...process.env, SITE_VARIANT: 'review', ASTRO_TELEMETRY_DISABLED: '1' },
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
