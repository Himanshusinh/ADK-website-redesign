import 'server-only';
import fs from 'node:fs';
import path from 'node:path';

/** Lists images inside /public/<dir>, naturally sorted, as public URLs. Runs at build time. */
export function listImages(dir: string): string[] {
  const abs = path.join(process.cwd(), 'public', dir);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => /\.(webp|jpe?g|png)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/${dir}/${f}`);
}

export const logoName = (src: string) => path.basename(src).replace(/\.\w+$/, '').replace(/-/g, ' ');
