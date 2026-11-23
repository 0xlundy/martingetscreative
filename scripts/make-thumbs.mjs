// Builds small WebP copies of every image listed in src/data/work.ts so the
// home-page index loads fast on phones. Originals stay untouched (the lightbox
// still opens them full size).
//
//   /images/stories/foo.jpg  ->  /images/thumbs/stories/foo-480.webp
//                                /images/thumbs/stories/foo-960.webp
//
// Sized for the grid's 4:5 crop, not the photo's width: a thumb labelled 960
// has at least 960px of real detail across the cell after the crop and the
// item's `zoom`, so landscape photos and pushed-in crops stay sharp on retina.
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
const list = src.slice(src.indexOf('export const work'));
const zoomOf = new Map();
for (const m of list.matchAll(/\{[^{}]*?src:\s*'([^']+)'[^{}]*?\}/gs)) {
  const z = m[0].match(/zoom:\s*([\d.]+)/);
  const cell = m[0].match(/cell:\s*'([^']+)'/);
  const key = cell ? cell[1] : m[1]; // the grid shows `cell` when an item has one
  zoomOf.set(key, Math.max(zoomOf.get(key) ?? 1, z ? Number(z[1]) : 1));
}
const paths = [...zoomOf.keys()];
const CELL = 4 / 5; // grid cell aspect (width / height)
const VERSION = 'cell-v2'; // bump to force every thumb to rebuild

const exists = (p) => access(p).then(() => true, () => false);
let made = 0;
const manPath = path.join(root, 'public/images/thumbs/manifest.json');
const manifest = await readFile(manPath, 'utf8').then(JSON.parse, () => ({}));

for (const urlPath of paths) {
  const rel = decodeURIComponent(urlPath).replace(/^\/images\//, '');
  const input = path.join(root, 'public/images', rel);
  const base = rel.replace(/\.[^.]+$/, '');
  const zoom = zoomOf.get(urlPath) ?? 1;
  const hash = createHash('sha1').update(await readFile(input)).update(`${VERSION}:${zoom}`).digest('hex');
  const meta = await sharp(input).rotate().metadata();
  const [w0, h0] = meta.orientation >= 5 ? [meta.height, meta.width] : [meta.width, meta.height];
  const visible = Math.min(w0, h0 * CELL); // source px across the cell at zoom 1
  const fresh = manifest[rel] === hash;
  for (const w of WIDTHS) {
    const out = path.join(root, 'public/images/thumbs', `${base}-${w}.webp`);
    if (fresh && (await exists(out))) continue;
    await mkdir(path.dirname(out), { recursive: true });
    const k = Math.min(1, (w * zoom) / visible);
    await sharp(input).rotate()
      .resize({ width: Math.round(w0 * k), kernel: 'lanczos3' })
      .sharpen({ sigma: 0.5, m1: 0.6, m2: 1.2 })
      .webp({ quality: 82, smartSubsample: true })
      .toFile(out);
    made++;
  }
  manifest[rel] = hash;
}
await writeFile(manPath, JSON.stringify(manifest, null, 1) + '\n');

console.log(`thumbs: ${paths.length} images, ${made} new files`);
