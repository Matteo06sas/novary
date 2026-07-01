// Regenerate public/og-image.png from the vector brand mark whenever the logo changes.
// Run with: node scripts/generate-og-image.mjs
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "og-image.png");

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <radialGradient id="og-glow" cx="50%" cy="38%" r="65%">
      <stop offset="0" stop-color="#C9A66B" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#C9A66B" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="og-silver" x1="0" y1="0" x2="0.18" y2="1">
      <stop offset="0" stop-color="#FBFAF7"/>
      <stop offset="0.32" stop-color="#DCD8CF"/>
      <stop offset="0.6" stop-color="#B6B2A8"/>
      <stop offset="1" stop-color="#EAE7E0"/>
    </linearGradient>
    <linearGradient id="og-champagne" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0" stop-color="#E0C68A"/>
      <stop offset="0.52" stop-color="#C9A66B"/>
      <stop offset="1" stop-color="#8C6A35"/>
    </linearGradient>
    <linearGradient id="og-word" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FAF9F6"/>
      <stop offset="1" stop-color="#CFCBC2"/>
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0A0A0B"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#og-glow)"/>

  <!-- Logo lockup, source viewBox 0 0 820 524, centered and scaled -->
  <g transform="translate(292.5 118.5) scale(0.75)">
    <g transform="translate(285 30) scale(2.4)">
      <polygon points="18,0 37,0 86,100 67,100" fill="url(#og-champagne)"/>
      <rect x="0" y="0" width="19" height="100" fill="url(#og-silver)"/>
      <rect x="85" y="0" width="19" height="100" fill="url(#og-silver)"/>
    </g>

    <g transform="translate(97 318) scale(0.92)" fill="none" stroke="url(#og-word)" stroke-width="11" stroke-linecap="butt" stroke-linejoin="round">
      <g transform="translate(0 0)"><path d="M0,100 V0 L72,100 V0"/></g>
      <g transform="translate(112 0)"><ellipse cx="46" cy="50" rx="40" ry="49"/></g>
      <g transform="translate(244 0)"><path d="M0,0 L42,100 L84,0"/></g>
      <g transform="translate(368 0)"><path d="M0,100 L42,0 L84,100 M16,64 H68"/></g>
      <g transform="translate(492 0)"><path d="M0,100 V0 H42 A24,24 0 0 1 42,48 H0 M24,48 L66,100"/></g>
      <g transform="translate(600 0)"><path d="M0,0 L40,46 L80,0 M40,46 V100"/></g>
    </g>

    <g transform="translate(242 452) scale(0.2)" fill="none" stroke="#A8A39A" stroke-width="13" stroke-linecap="butt" stroke-linejoin="round">
      <g transform="translate(0 0)"><path d="M0,0 V100 M0,0 H34 C68,2 68,98 34,100 H0"/></g>
      <g transform="translate(116 0)"><path d="M6,0 V100"/></g>
      <g transform="translate(172 0)"><path d="M86,28 A44,46 0 1 0 86,72 L86,52 L60,52"/></g>
      <g transform="translate(302 0)"><path d="M6,0 V100"/></g>
      <g transform="translate(358 0)"><path d="M0,0 H72 M36,0 V100"/></g>
      <g transform="translate(474 0)"><path d="M0,100 L42,0 L84,100 M16,64 H68"/></g>
      <g transform="translate(602 0)"><path d="M0,0 V100 H58"/></g>
      <g transform="translate(720 0)"><path d="M58,22 C58,3 10,2 8,28 C6,50 56,46 56,72 C56,98 6,96 4,74"/></g>
      <g transform="translate(828 0)"><ellipse cx="46" cy="50" rx="40" ry="49"/></g>
      <g transform="translate(964 0)"><path d="M0,0 V100 H58"/></g>
      <g transform="translate(1066 0)"><path d="M0,0 V58 A38,42 0 0 0 76,58 V0"/></g>
      <g transform="translate(1186 0)"><path d="M0,0 H72 M36,0 V100"/></g>
      <g transform="translate(1302 0)"><path d="M6,0 V100"/></g>
      <g transform="translate(1358 0)"><ellipse cx="46" cy="50" rx="40" ry="49"/></g>
      <g transform="translate(1494 0)"><path d="M0,100 V0 L72,100 V0"/></g>
      <g transform="translate(1610 0)"><path d="M58,22 C58,3 10,2 8,28 C6,50 56,46 56,72 C56,98 6,96 4,74"/></g>
    </g>
  </g>
</svg>
`;

const png = await sharp(Buffer.from(svg), { density: 300 })
  .resize(WIDTH, HEIGHT)
  .png()
  .toBuffer();

writeFileSync(outPath, png);
console.log(`Wrote ${outPath} (${png.length} bytes)`);
