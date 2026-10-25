// Builds small WebP copies of every image listed in src/data/work.ts so the
// home-page index loads fast on phones. Originals stay untouched (the lightbox
// still opens them full size).
//
//   /images/stories/foo.jpg  ->  /images/thumbs/stories/foo-480.webp
//                                /images/thumbs/stories/foo-960.webp
//
// Runs automatically before `npm run build`. A thumb is rebuilt only when its
// source photo changed (tracked by content hash in thumbs/manifest.json), so a
// retouched photo can never keep showing an old thumbnail.

import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import sharp from 'sharp';

export const WIDTHS = [480, 960];
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

const src = await readFile(path.join(root, 'src/data/work.ts'), 'utf8');
const paths = [...new Set([...src.matchAll(/src:\s*'([^']+)'/g)].map((m) => m[1]))];

const exists = (p) => access(p).then(() => true, () => false);
let made = 0;
const manPath = path.join(root, 'public/images/thumbs/manifest.json');
const manifest = await readFile(manPath, 'utf8').then(JSON.parse, () => ({}));

for (const urlPath of paths) {
  const rel = decodeURIComponent(urlPath).replace(/^\/images\//, '');
  const input = path.join(root, 'public/images', rel);
  const base = rel.replace(/\.[^.]+$/, '');
  const hash = createHash('sha1').update(await readFile(input)).digest('hex');
  const fresh = manifest[rel] === hash;
  for (const w of WIDTHS) {
    const out = path.join(root, 'public/images/thumbs', `${base}-${w}.webp`);
    if (fresh && (await exists(out))) continue;
    await mkdir(path.dirname(out), { recursive: true });
    await sharp(input).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 74 }).toFile(out);
    made++;
  }
  manifest[rel] = hash;
}
await writeFile(manPath, JSON.stringify(manifest, null, 1) + '\n');

console.log(`thumbs: ${paths.length} images, ${made} new files`);
