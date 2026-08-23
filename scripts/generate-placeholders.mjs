/**
 * 生成占位封面图。真实作品图到位后可以删掉这个脚本。
 * 用法：node scripts/generate-placeholders.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const covers = [
  { file: 'orderflow', from: '#1b1a17', via: '#7a2d12', to: '#e8703a', angle: 135 },
  { file: 'chronos', from: '#0f1a1c', via: '#134a44', to: '#4fb8a5', angle: 200 },
  { file: 'qlite', from: '#141126', via: '#3a2a6b', to: '#8b7ce8', angle: 60 },
];

const grain = `
  <filter id="grain" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
    <feComponentTransfer><feFuncA type="linear" slope="0.055"/></feComponentTransfer>
  </filter>`;

function coverSvg({ from, via, to, angle }, w, h) {
  const rad = (angle * Math.PI) / 180;
  const x2 = (0.5 + Math.cos(rad) / 2).toFixed(3);
  const y2 = (0.5 + Math.sin(rad) / 2).toFixed(3);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="g" x1="${(1 - x2).toFixed(3)}" y1="${(1 - y2).toFixed(3)}" x2="${x2}" y2="${y2}">
        <stop offset="0%" stop-color="${from}"/>
        <stop offset="55%" stop-color="${via}"/>
        <stop offset="100%" stop-color="${to}"/>
      </linearGradient>
      <radialGradient id="blob" cx="50%" cy="50%">
        <stop offset="0%" stop-color="${to}" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="${to}" stop-opacity="0"/>
      </radialGradient>
      ${grain}
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <ellipse cx="${w * 0.72}" cy="${h * 0.28}" rx="${w * 0.38}" ry="${h * 0.45}" fill="url(#blob)"/>
    <ellipse cx="${w * 0.18}" cy="${h * 0.82}" rx="${w * 0.3}" ry="${h * 0.4}" fill="url(#blob)" opacity="0.6"/>
    <rect width="${w}" height="${h}" filter="url(#grain)" opacity="0.9"/>
  </svg>`;
}

function ogSvg(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="#0d0c0b"/>
    <circle cx="${w - 120}" cy="120" r="26" fill="#ff7043"/>
    <text x="90" y="330" font-family="Georgia, serif" font-size="96" fill="#f3efe8">Ace</text>
    <text x="90" y="410" font-family="Helvetica, sans-serif" font-size="34" fill="#9d958a">
      软件工程师 · 后端 / 分布式 / 数据库
    </text>
    <rect x="90" y="470" width="120" height="3" fill="#ff7043"/>
  </svg>`;
}

await mkdir('src/content/work', { recursive: true });

for (const cover of covers) {
  await sharp(Buffer.from(coverSvg(cover, 1600, 1000)))
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(`src/content/work/${cover.file}.jpg`);
  console.log(`✓ src/content/work/${cover.file}.jpg`);
}

await sharp(Buffer.from(ogSvg(1200, 630))).png().toFile('public/og.png');
console.log('✓ public/og.png');
