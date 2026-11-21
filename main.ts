import { cpSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const root = fileURLToPath(new URL('.', import.meta.url));
const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const photographs = readdirSync(join(root, 'screenshots')).sort();
if (photographs.length < 3 || photographs.length > 4 || photographs[0] !== '01-fieldwork.jpg') {
  throw new Error('Expected the fieldwork cover and two or three further browser captures');
}
mkdirSync(output, { recursive: true });
for (const folder of ['game', 'screenshots']) {
  cpSync(join(root, folder), join(output, folder), { recursive: true });
}
const dossier = buildDossier(output, {
  text_max_bytes: 163840, screenshots: { max: 4, max_bytes: 262144 },
  game_max_files: 993, game_max_bytes: 50331648, game_path_max_bytes: 1000,
});
if (Buffer.byteLength(dossier) > 1572864) throw new Error('Dossier exceeds 1.5 MiB');
writeFileSync(join(output, 'dossier.json'), dossier);
