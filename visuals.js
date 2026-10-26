// Little live pictures at the top of the program windows, so each program shows what its name promises.
// One draw function per picture: d(x, w, h, t) with t in seconds.

const VIZ_OF = {
  1: { auto: `click`, bot: `robot`, render: `wire`, comp: `code` },
  2: { auto: `batch`, tsr: `tsr`, bbs: `bbs`, turbo: `turbo`, mega: `plasma` },
  3: { auto: `click`, macro: `macro`, media: `wmp`, render: `cube`, stream: `cast`, doom: `doom`, server: `leds` },
  4: { auto: `click`, browser: `iexp`, media: `winamp`, p2p: `wire2`, craft: `craft`, seti: `seti`, web: `weblog` },
  5: { auto: `taps`, farm: `farm`, birds: `birds`, tok: `tok`, crush: `crush`, cloud: `sync` },
  6: { auto: `click`, stream: [`winamp`, `music`], tube: [`wire2`, `tube`], vr: [`craft`, `vr`], cgame: [`iexp`, `cgame`], gpt: [`seti`, `gpt`], quantum: [`weblog`, `qubit`] },
};
function vizOf(id) { const v = (VIZ_OF[S.era] || {})[id]; return Array.isArray(v) ? v[recoded(id) ? 1 : 0] : v; }

const VT = {
  page: [`My home page`, `Ma page perso`], build: [`UNDER CONSTRUCTION`, `EN CONSTRUCTION`], visits: [`Visitors`, `Visiteurs`],
  search: [`Searching: pixel`, `Recherche : pixel`], skip: [`Skip ad`, `Passer l'annonce`], ad: [`Ad`, `Annonce`],
  ask: [`Make me some pixels.`, `Fais-moi des pixels.`], answer: [`Of course! Here are 4 pixels: ■■■■ Want more?`, `Bien sûr ! Voici 4 pixels : ■■■■ Tu en veux d'autres ?`],
  sync: [`Syncing`, `Synchronisation`], harvest: [`Harvest!`, `Récolte !`], lat: [`Latency`, `Latence`], rec: [`Reconnecting...`, `Reconnexion...`],
  q: [`exists and doesn't exist`, `existe et n'existe pas`], comp: [`Compiling pixel.c`, `Compilation de pixel.c`],
};
const FONT = e => (e <= 2 ? `'VT323',monospace` : e <= 4 ? `Tahoma,Verdana,sans-serif` : e === 5 ? `Helvetica,Arial,sans-serif` : `'Segoe UI',system-ui,sans-serif`);
const box = (x, c, X, Y, W, H) => { x.fillStyle = c; x.fillRect(X, Y, W, H); };
const say = (x, s, X, Y, px, c, al = `left`, bold) => { x.font = `${bold ? `bold ` : ``}${px}px ${FONT(S.era)}`; x.fillStyle = c; x.textAlign = al; x.textBaseline = `middle`; x.fillText(s, X, Y); };
const ball = (x, X, Y, r, c) => { x.fillStyle = c; x.beginPath(); x.arc(X, Y, r, 0, 7); x.fill(); };
const fr = t => t - Math.floor(t);
function arrow(x, X, Y, s, c, o) { x.fillStyle = c; x.strokeStyle = o; x.lineWidth = Math.max(1, s / 6); x.beginPath(); [[0, 0], [0, 12], [3, 9.5], [5.2, 13.6], [7, 12.8], [5, 8.8], [8.6, 8.8]].forEach(([a, b], i) => (i ? x.lineTo(X + a * s / 10, Y + b * s / 10) : x.moveTo(X, Y))); x.closePath(); x.fill(); x.stroke(); }

const VIZ = {
  // an arrow flies to the pixel and clicks it
  click(x, w, h, t) {
    const e = S.era, bg = e === 2 ? `#000` : `#fff`, fg = [, `#000`, `#55ff55`, `#000080`, `#3c9f3c`, , `#005fb8`][e];
    box(x, bg, 0, 0, w, h);
    const k = fr(t / 1.2), px = w / 2, py = h / 2, cx = px + 60 * (1 - Math.min(1, k * 2.2)) * Math.cos(t), cy = py + 30 * (1 - Math.min(1, k * 2.2));
    const press = k > 0.45 && k < 0.6;
    box(x, fg, px - (press ? 5 : 6), py - (press ? 5 : 6), press ? 10 : 12, press ? 10 : 12);
    if (k > 0.5) say(x, `+1`, px + 14, py - 10 - k * 20, 12, fg, `left`, true);
    arrow(x, cx + 2, cy + 2, h / 6, e === 2 ? `#fff` : `#fff`, `#000`);
  },
  robot(x, w, h, t) {
    VIZ.click(x, w, h, t);
    const y = h - 26 + (fr(t / 1.2) > 0.45 && fr(t / 1.2) < 0.6 ? 3 : 0);
    box(x, `#000`, 10, y, 22, 18); box(x, `#fff`, 14, y + 4, 4, 4); box(x, `#fff`, 24, y + 4, 4, 4); box(x, `#000`, 20, y - 6, 2, 6);
  },
  wire(x, w, h, t) { cube3d(x, w, h, t, false); },
  cube(x, w, h, t) { cube3d(x, w, h, t, true); },
  code(x, w, h, t) {
    box(x, `#fff`, 0, 0, w, h);
    const L = [`int pixel = 1;`, `while (!finished) {`, `  pixel++;`, `  click(pixel);`, `  if (tired) sleep();`, `}`, `/* TODO: finish */`, `return pixel;`];
    const off = fr(t / 2) * 12;
    for (let i = 0; i < 8; i++) say(x, L[(i + Math.floor(t / 2)) % L.length], 6, 10 + i * 12 - off, 10, `#000`);
    box(x, `#fff`, 0, h - 18, w, 18); box(x, `#000`, 0, h - 18, w, 1);
    say(x, `${T(VT.comp)} ${Math.floor(fr(t / 6) * 100)}%`, 6, h - 9, 10, `#000`);
  },
  batch(x, w, h, t) {
    box(x, `#000`, 0, 0, w, h);
    const L = [`C:\\>AUTOCLIK.BAT`, `@ECHO OFF`, `:LOOP`, `CLICK`, `GOTO LOOP`], cur = 2 + Math.floor(t * 3) % 3;
    L.forEach((l, i) => { if (i === cur) box(x, `#aaa`, 4, 6 + i * 13, w - 8, 12); say(x, l, 8, 12 + i * 13, 13, i === cur ? `#000` : `#aaa`); });
    say(x, `CLICKS: ${Math.floor(t * 3) + 1}`, 8, h - 8, 13, `#55ff55`);
  },
  tsr(x, w, h, t) {
    box(x, `#0000aa`, 0, 0, w, h);
    say(x, `C:\\>MEM /C`, 6, 9, 13, `#aaa`);
    const seg = [[`MSDOS`, 0.18, `#aaa`], [`COMMAND`, 0.1, `#55ffff`], [`PIXEL.TSR`, 0.3 + 0.04 * Math.sin(t), `#ffff55`], [`FREE`, 0.42, `#555`]];
    let X = 6;
    for (const [n, f, c] of seg) { const W = (w - 12) * f; box(x, c, X, 22, W - 2, 18); X += W; }
    seg.forEach(([n, f, c], i) => say(x, n, 6 + (i % 2) * (w / 2), 52 + (i >> 1) * 13, 13, c));
    if (fr(t) < 0.5) box(x, `#fff`, w - 12, h - 12, 6, 6);
  },
  bbs(x, w, h, t) {
    box(x, `#000`, 0, 0, w, h);
    const C = [`#ff5555`, `#ffff55`, `#55ff55`, `#55ffff`, `#5555ff`, `#ff55ff`];
    `PIXEL BBS`.split(``).forEach((ch, i) => say(x, ch, 10 + i * 14, 14, 20, C[(i + Math.floor(t * 4)) % 6], `left`, true));
    say(x, `[D]ownloads  [M]essages  [G]oodbye`, 8, 34, 13, `#aaa`);
    const k = fr(t / 8);
    say(x, `ZMODEM: PIXELS.ZIP`, 8, 52, 13, `#55ffff`);
    box(x, `#555`, 8, 62, w - 16, 8); box(x, `#55ff55`, 8, 62, (w - 16) * k, 8);
    say(x, `${Math.floor(k * 100)}%  ${cap(`modem`) || 2400} bps`, 8, h - 8, 13, `#aaa`);
  },
  turbo(x, w, h, t) {
    box(x, `#000`, 0, 0, w, h);
    for (let i = 0; i < 6; i++) { const X = ((i * 40 - t * 160) % (w + 40) + w + 40) % (w + 40) - 40; box(x, i % 2 ? `#ff5555` : `#ffff55`, X, h - 22, 26, 6); box(x, i % 2 ? `#ff5555` : `#ffff55`, X + 10, 14, 26, 6); }
    say(x, `TURBO`, w / 2, h / 2 - 4, 26, `#55ff55`, `center`, true);
    say(x, `${66 + Math.floor(Math.sin(t * 3) * 4)} MHz`, w / 2, h / 2 + 18, 15, `#55ff55`, `center`);
  },
  plasma(x, w, h, t) {
    const C = [`#000000`, `#0000aa`, `#5555ff`, `#55ffff`, `#55ff55`, `#ffff55`, `#ff5555`, `#aa00aa`];
    for (let Y = 0; Y < h; Y += 4) for (let X = 0; X < w; X += 4) { const v = Math.sin(X / 16 + t) + Math.sin(Y / 9 - t * 1.3) + Math.sin((X + Y) / 20 + t * 0.7); box(x, C[Math.floor((v + 3) / 6 * 8) % 8], X, Y, 4, 4); }
    say(x, `MEGAPIX`, w / 2, h / 2, 22, `#fff`, `center`, true);
  },
  macro(x, w, h, t) {
    box(x, `#c0c0c0`, 0, 0, w, h);
    if (fr(t) < 0.6) ball(x, 16, 16, 7, `#ff0000`);
    say(x, `REC  00:${String(Math.floor(t) % 60).padStart(2, `0`)}`, 30, 16, 12, `#000`, `left`, true);
    box(x, `#fff`, 8, 36, w - 16, 26); box(x, `#808080`, 8, 36, w - 16, 1);
    for (let i = 0; i < 12; i++) box(x, i % 3 ? `#000080` : `#008080`, 12 + i * ((w - 30) / 12), 42, 8, 14);
    box(x, `#ff0000`, 8 + fr(t / 4) * (w - 16), 34, 2, 30);
  },
  wmp(x, w, h, t) {
    box(x, `#000`, 0, 0, w, h - 22);
    for (let i = 0; i < 5; i++) { const a = t * (1 + i * 0.3); ball(x, w / 2 + Math.cos(a) * (20 + i * 10), (h - 22) / 2 + Math.sin(a * 1.3) * 18, 3, [`#ff0`, `#0ff`, `#f0f`, `#0f0`, `#fff`][i]); }
    box(x, `#c0c0c0`, 0, h - 22, w, 22); box(x, `#fff`, 0, h - 22, w, 1);
    [`▶`, `■`, `◀◀`, `▶▶`].forEach((s, i) => { box(x, `#c0c0c0`, 4 + i * 22, h - 19, 20, 16); box(x, `#808080`, 4 + i * 22, h - 4, 20, 1); say(x, s, 14 + i * 22, h - 11, 9, `#000`, `center`); });
    box(x, `#808080`, 96, h - 12, w - 104, 2); box(x, `#000`, 96 + fr(t / 20) * (w - 110), h - 17, 6, 12);
  },
  cast(x, w, h, t) {
    box(x, `#fff`, 0, 0, w, h); box(x, `#008080`, 0, 0, w, 18); say(x, `PixelCast`, 6, 9, 11, `#fff`, `left`, true);
    const cx = 34, cy = h - 12;
    x.strokeStyle = `#000080`; x.lineWidth = 2; x.beginPath(); x.moveTo(cx - 10, cy); x.lineTo(cx, cy - 40); x.lineTo(cx + 10, cy); x.stroke();
    for (let i = 0; i < 3; i++) { const r = 10 + ((t * 20 + i * 12) % 36); x.strokeStyle = `rgba(0,0,128,${1 - r / 46})`; x.beginPath(); x.arc(cx, cy - 40, r, -1.2, 0.2); x.stroke(); }
    const news = `PIXEL NEWS: one pixel reached 1 million clicks... PIXCORP stock up 2%... The dev says "soon"...`;
    box(x, `#000080`, 70, h - 22, w - 70, 16); x.save(); x.beginPath(); x.rect(70, h - 22, w - 70, 16); x.clip();
    say(x, news, w - ((t * 50) % (w + 600)), h - 14, 11, `#ff0`); x.restore();
  },
  doom(x, w, h, t) {
    const hh = h - 20, sh = Math.sin(t * 6) * 2;
    box(x, `#555`, 0, 0, w, hh / 2); box(x, `#5b3a1e`, 0, hh / 2, w, hh / 2);
    x.fillStyle = `#7a7a7a`; x.beginPath(); x.moveTo(0, 0); x.lineTo(w * 0.35, hh * 0.3); x.lineTo(w * 0.35, hh * 0.7); x.lineTo(0, hh); x.fill();
    x.beginPath(); x.moveTo(w, 0); x.lineTo(w * 0.65, hh * 0.3); x.lineTo(w * 0.65, hh * 0.7); x.lineTo(w, hh); x.fill();
    box(x, `#2a2a2a`, w * 0.35, hh * 0.3, w * 0.3, hh * 0.4);
    const d = 0.6 + 0.4 * fr(t / 3); box(x, `#b00`, w / 2 - 6 * d, hh * 0.5 - 8 * d, 12 * d, 16 * d); box(x, `#ff0`, w / 2 - 3 * d, hh * 0.5 - 5 * d, 2, 2); box(x, `#ff0`, w / 2 + 1 * d, hh * 0.5 - 5 * d, 2, 2);
    box(x, `#666`, w / 2 - 8, hh - 22 + sh, 16, 22); box(x, `#333`, w / 2 - 3, hh - 30 + sh, 6, 10);
    if (fr(t / 1.5) < 0.12) ball(x, w / 2, hh - 32 + sh, 7, `#ffcc33`);
    box(x, `#6b6b6b`, 0, hh, w, 20); say(x, `100%`, 30, hh + 10, 12, `#c00`, `center`, true); say(x, `50`, w - 30, hh + 10, 12, `#c00`, `center`, true);
    box(x, `#d9a066`, w / 2 - 8, hh + 2, 16, 16); box(x, `#000`, w / 2 - 5, hh + 7, 3, 3); box(x, `#000`, w / 2 + 2, hh + 7, 3, 3); box(x, `#600`, w / 2 - 4, hh + 13, 8, 2);
  },
  leds(x, w, h, t) {
    box(x, `#222`, 0, 0, w, h);
    for (let r = 0; r < 3; r++) { box(x, `#444`, 6, 6 + r * 16, w * 0.45, 12); for (let i = 0; i < 6; i++) box(x, Math.random() < 0.5 ? `#0f0` : `#060`, 10 + i * 8, 10 + r * 16, 4, 4); box(x, r === 1 && fr(t * 2) < 0.5 ? `#fa0` : `#530`, w * 0.45 - 4, 10 + r * 16, 4, 4); }
    const L = [`GET /pixel.html 200`, `GET /index.html 200`, `POST /click 201`, `GET /favicon.ico 404`];
    for (let i = 0; i < 5; i++) say(x, L[(i + Math.floor(t * 2)) % 4], w * 0.5, 10 + i * 13, 10, `#0f0`);
  },
  iexp(x, w, h, t) {
    box(x, `#ece9d8`, 0, 0, w, 22); box(x, `#fff`, 50, 4, w - 56, 14); box(x, `#7f9db9`, 50, 4, w - 56, 1);
    say(x, `◀ ▶`, 6, 11, 11, `#1c4fbd`, `left`, true); say(x, `http://www.pixel-perso.fr/`, 54, 11, 10, `#000`);
    box(x, `#fff`, 0, 22, w, h - 22);
    say(x, T(VT.page), w / 2, 36, 14, `#0000cc`, `center`, true);
    for (let i = 0; i < 8; i++) box(x, i % 2 ? `#000` : `#ffcc00`, w / 2 - 60 + i * 15, 48, 15, 10);
    say(x, T(VT.build), w / 2, 66, 10, `#c00`, `center`, true);
    say(x, `${T(VT.visits)} : ${String(1234 + Math.floor(t)).padStart(6, `0`)}`, w / 2, h - 8, 10, `#000`, `center`);
  },
  winamp(x, w, h, t) {
    box(x, `#2b2b3b`, 0, 0, w, h); box(x, `#000`, 6, 6, w - 12, h - 12);
    const s = Math.floor(t) % 600; say(x, `${Math.floor(s / 60)}:${String(s % 60).padStart(2, `0`)}`, 12, 20, 18, `#00e000`, `left`, true);
    x.save(); x.beginPath(); x.rect(70, 12, w - 80, 16); x.clip();
    say(x, `*** DJ Pixel - Click It (Remix) *** 128kbps ***`, 70 + w - 80 - ((t * 30) % (w + 220)), 20, 11, `#00e000`); x.restore();
    const n = 18, bw = (w - 24) / n;
    for (let i = 0; i < n; i++) { const v = Math.abs(Math.sin(t * 3 + i * 1.7) * Math.sin(t * 1.3 + i)) * (h - 50); for (let y = 0; y < v; y += 3) box(x, y > (h - 50) * 0.7 ? `#ff3000` : y > (h - 50) * 0.45 ? `#ffd000` : `#00d000`, 12 + i * bw, h - 12 - y, bw - 2, 2); }
  },
  wire2(x, w, h, t) {
    box(x, `#fff`, 0, 0, w, h); box(x, `#3c9f3c`, 0, 0, w, 18); say(x, T(VT.search), 6, 9, 11, `#fff`, `left`, true);
    const R = [[`pixel_rare.mp3`, 0.9], [`pixel (vrai) (final) (2).mp3`, 0.55], [`Shrek_2_FULL_MOVIE.avi.exe`, 0.2], [`click_ultra_HQ.wav`, 0.4]];
    R.forEach(([n, sp], i) => { const k = fr(t * sp / 6 + i * 0.3); say(x, n, 6, 28 + i * 15, 10, i === 2 ? `#c00` : `#000`); box(x, `#ddd`, w - 70, 23 + i * 15, 60, 8); box(x, `#3c9f3c`, w - 70, 23 + i * 15, 60 * k, 8); });
  },
  craft(x, w, h, t) {
    box(x, `#7ec0ee`, 0, 0, w, h);
    const s = 12, off = (t * 20) % s;
    for (let i = -1; i < w / s + 1; i++) { const col = i + Math.floor(t * 20 / s), gh = 3 + Math.round(2 + Math.sin(col * 0.7) * 1.5 + Math.sin(col * 0.23) * 1.5); for (let j = 0; j < gh; j++) { const Y = h - (j + 1) * s; box(x, j === gh - 1 ? `#5fa02e` : j > gh - 4 ? `#8b5a2b` : `#7d7d7d`, i * s - off, Y, s - 1, s - 1); } }
    box(x, `#00a`, w / 2 - 4, h - 7 * s - 16, 8, 16); box(x, `#f5c99b`, w / 2 - 4, h - 7 * s - 24, 8, 8);
  },
  seti(x, w, h, t) {
    box(x, `#000`, 0, 0, w, h);
    for (let i = 0; i < 24; i++) for (let j = 0; j < 6; j++) { const v = Math.abs(Math.sin(i * 0.6 + j + t * 2)) * 30 * (j / 6 + 0.3), X = 10 + i * ((w - 60) / 24) + j * 6, Y = h - 14 - j * 6; box(x, `hsl(${200 + j * 25},90%,${40 + v}%)`, X, Y - v, 3, v); }
    say(x, `SETI@Pixel`, 6, 10, 11, `#9cf`, `left`, true); say(x, `Data analysis: ${Math.floor(fr(t / 30) * 100)}%`, w - 6, 10, 10, `#9cf`, `right`);
  },
  weblog(x, w, h, t) {
    box(x, `#000`, 0, 0, w, h);
    const ips = [`82.64.1.12`, `193.2.40.7`, `10.0.0.42`, `66.249.7.1`];
    for (let i = 0; i < 6; i++) { const k = i + Math.floor(t * 3); say(x, `${ips[k % 4]} - GET /pixel/${k % 97}.png 200`, 6, 9 + i * 13, 10, i === 5 ? `#fff` : `#0c0`); }
  },
  taps(x, w, h, t) {
    box(x, `#111`, 0, 0, w, h); const C = [`#ff3b30`, `#4cd964`, `#007aff`];
    for (let l = 0; l < 3; l++) { const X = w * (l + 1) / 4; box(x, `#333`, X - 1, 0, 2, h); for (let i = 0; i < 3; i++) { const y = fr(t / 1.6 + i / 3 + l * 0.17) * (h + 10) - 10; ball(x, X, y, 8, C[l]); if (y > h - 24) ball(x, X, h - 18, 13, `rgba(255,255,255,.25)`); } }
    box(x, `#fff`, 0, h - 19, w, 2);
  },
  farm(x, w, h, t) {
    box(x, `#7ec850`, 0, 0, w, h);
    for (let i = 0; i < 5; i++) for (let j = 0; j < 2; j++) { const X = 12 + i * (w - 24) / 5, Y = 10 + j * 34, st = Math.floor(t / 2 + i + j * 2) % 4; box(x, `#8b5a2b`, X, Y, (w - 24) / 5 - 6, 28); if (st > 0) box(x, `#2e7d32`, X + 10, Y + 18 - st * 5, 4, st * 5); if (st === 3) ball(x, X + 12, Y + 6, 5, `#ff6f00`); }
    say(x, T(VT.harvest), w / 2, h - 8, 12, `#fff`, `center`, true);
  },
  birds(x, w, h, t) {
    box(x, `#9fd8f5`, 0, 0, w, h); box(x, `#7cb342`, 0, h - 10, w, 10);
    box(x, `#6d4c41`, 26, h - 34, 4, 24); box(x, `#6d4c41`, 36, h - 34, 4, 24);
    for (let i = 0; i < 3; i++) box(x, `#c8a165`, w - 70 + i * 22, h - 40, 6, 30); box(x, `#c8a165`, w - 74, h - 44, 56, 5);
    if (fr(t / 3) < 0.7) ball(x, w - 47, h - 50, 7, `#7ed321`);
    const k = fr(t / 3), bx = 33 + k * (w - 100), by = h - 34 - Math.sin(k * Math.PI) * (h - 30);
    ball(x, bx, by, 7, `#e53935`); box(x, `#ffeb3b`, bx + 5, by - 1, 4, 3);
  },
  tok(x, w, h, t) {
    box(x, `#000`, 0, 0, w, h);
    const d = Math.sin(t * 6) * 8; box(x, `#fe2c55`, w / 2 - 8 + d, h / 2 - 8, 16, 16); box(x, `#25f4ee`, w / 2 - 10 + d, h / 2 - 10, 16, 16); box(x, `#fff`, w / 2 - 9 + d, h / 2 - 9, 16, 16);
    for (let i = 0; i < 3; i++) say(x, `♥`, w - 22 + Math.sin(t * 3 + i) * 4, h - fr(t / 2 + i / 3) * h, 14, `#fe2c55`, `center`);
    say(x, `♥ ${(12 + Math.floor(t)) % 99}K`, w - 22, h / 2, 10, `#fff`, `center`); say(x, `@ledev #pixel`, 8, h - 10, 11, `#fff`, `left`, true);
  },
  crush(x, w, h, t) {
    box(x, `#6a1b9a`, 0, 0, w, h); const C = [`#ff1744`, `#ffea00`, `#00e676`, `#2979ff`, `#ff9100`, `#d500f9`], c = 7, r = 4, s = Math.min((w - 10) / c, (h - 6) / r);
    const blink = Math.floor(t / 1.5) % r, on = fr(t / 1.5) > 0.6;
    for (let i = 0; i < c; i++) for (let j = 0; j < r; j++) { const col = j === blink && i > 1 && i < 5 ? C[0] : C[(i * 3 + j * 5 + (j === blink && !on ? 0 : 1)) % 6]; if (!(j === blink && i > 1 && i < 5 && on)) ball(x, 5 + s / 2 + i * s, 3 + s / 2 + j * s, s * 0.38, col); else ball(x, 5 + s / 2 + i * s, 3 + s / 2 + j * s, s * 0.5, `#fff`); }
  },
  sync(x, w, h, t) {
    box(x, `#eef3fa`, 0, 0, w, h);
    ball(x, w / 2 - 14, h / 2 - 4, 13, `#74b9ff`); ball(x, w / 2 + 6, h / 2 - 12, 18, `#74b9ff`); ball(x, w / 2 + 22, h / 2 - 2, 12, `#74b9ff`); box(x, `#74b9ff`, w / 2 - 14, h / 2 - 4, 36, 13);
    const a = fr(t); x.fillStyle = `#fff`; x.beginPath(); x.moveTo(w / 2 + 4, h / 2 - 16 - a * 4); x.lineTo(w / 2 - 4, h / 2 - 6 - a * 4); x.lineTo(w / 2 + 12, h / 2 - 6 - a * 4); x.fill();
    const k = fr(t / 10); box(x, `#ccd`, 16, h - 14, w - 32, 6); box(x, `#007aff`, 16, h - 14, (w - 32) * k, 6);
    say(x, `${T(VT.sync)} ${Math.floor(k * 100)} %`, w / 2, h - 24, 11, `#333`, `center`);
  },
  music(x, w, h, t) {
    box(x, `#121212`, 0, 0, w, h);
    const g = x.createLinearGradient(10, 10, 70, 70); g.addColorStop(0, `#7a5af5`); g.addColorStop(1, `#1db954`); x.fillStyle = g; x.fillRect(10, 10, h - 20, h - 20);
    say(x, `Click It (Remix)`, h, 22, 13, `#fff`, `left`, true); say(x, `DJ Pixel`, h, 40, 11, `#b3b3b3`);
    box(x, `#535353`, h, h - 22, w - h - 12, 4); box(x, `#1db954`, h, h - 22, (w - h - 12) * fr(t / 30), 4); ball(x, w - 22, 26, 12, `#1db954`); x.fillStyle = `#000`; x.beginPath(); x.moveTo(w - 26, 19); x.lineTo(w - 16, 26); x.lineTo(w - 26, 33); x.fill();
  },
  tube(x, w, h, t) {
    const hh = h - 14, ad = fr(t / 20) < 0.25;
    const g = x.createLinearGradient(0, 0, w, hh); g.addColorStop(0, ad ? `#f5a623` : `#1e3c72`); g.addColorStop(1, ad ? `#d0021b` : `#2a5298`); x.fillStyle = g; x.fillRect(0, 0, w, hh);
    if (ad) { say(x, `${T(VT.ad)} 0:0${5 - Math.floor(fr(t / 20) * 20)}`, 8, 12, 11, `#fff`); box(x, `rgba(0,0,0,.7)`, w - 100, hh - 26, 94, 20); say(x, `${T(VT.skip)} ▶`, w - 53, hh - 16, 11, `#fff`, `center`); }
    else box(x, `#fff`, w / 2 - 8 + Math.sin(t * 2) * 30, hh / 2 - 8, 16, 16);
    box(x, `#000`, 0, hh, w, 14); box(x, `#555`, 6, hh + 6, w - 12, 3); box(x, `#ff0000`, 6, hh + 6, (w - 12) * fr(t / 60), 3);
  },
  vr(x, w, h, t) {
    box(x, `#000`, 0, 0, w, h);
    for (const [cx, sh] of [[w * 0.27, -3], [w * 0.73, 3]]) {
      x.save(); x.beginPath(); x.arc(cx, h / 2, h * 0.44, 0, 7); x.clip(); box(x, `#1b1036`, cx - h, 0, h * 2, h);
      x.strokeStyle = `#a29bfe`; x.lineWidth = 1;
      for (let i = 0; i < 8; i++) { const y = h / 2 + ((i + fr(t)) / 8) ** 2 * h / 2; x.beginPath(); x.moveTo(cx - h, y); x.lineTo(cx + h, y); x.stroke(); }
      for (let i = -5; i <= 5; i++) { x.beginPath(); x.moveTo(cx + sh + i * 4, h / 2); x.lineTo(cx + sh + i * 40, h); x.stroke(); }
      box(x, `#00cec9`, cx + sh - 5, h / 2 - 16, 10, 10); x.restore();
    }
  },
  cgame(x, w, h, t) {
    box(x, `#87ceeb`, 0, 0, w, h / 2); box(x, `#3a3a3a`, 0, h / 2, w, h / 2);
    x.fillStyle = `#555`; x.beginPath(); x.moveTo(w / 2 - 6, h / 2); x.lineTo(w / 2 + 6, h / 2); x.lineTo(w * 0.85, h); x.lineTo(w * 0.15, h); x.fill();
    for (let i = 0; i < 5; i++) { const k = fr(t + i / 5); box(x, `#fff`, w / 2 - 1 - k * 3, h / 2 + k * k * h / 2, 2 + k * 6, 2 + k * 6); }
    box(x, `#e53935`, w / 2 - 12, h - 22, 24, 12);
    const lag = fr(t / 12) > 0.85; if (lag) { box(x, `rgba(0,0,0,.6)`, 0, 0, w, h); say(x, T(VT.rec), w / 2, h / 2, 13, `#fff`, `center`, true); }
    say(x, `${T(VT.lat)} : ${lag ? 999 : 30 + Math.floor(Math.abs(Math.sin(t)) * 60)} ms`, w - 6, 10, 10, `#000`, `right`);
  },
  gpt(x, w, h, t) {
    box(x, `#f7f7f8`, 0, 0, w, h);
    box(x, `#10a37f`, w - 140, 8, 132, 20); say(x, T(VT.ask), w - 74, 18, 11, `#fff`, `center`);
    const a = T(VT.answer), k = Math.floor(fr(t / 8) * a.length * 1.4), s = a.slice(0, k);
    box(x, `#fff`, 8, 36, w - 40, h - 44); say(x, s.slice(0, 30), 14, 48, 11, `#111`); say(x, s.slice(30), 14, 64, 11, `#111`);
    if (k < a.length && fr(t * 2) < 0.5) box(x, `#111`, 16 + Math.min(30, s.length) * 5.4, 42, 6, 12);
  },
  qubit(x, w, h, t) {
    box(x, `#0b1023`, 0, 0, w, h);
    const cx = 52, cy = h / 2, r = h * 0.38;
    x.strokeStyle = `#4f6bd8`; x.lineWidth = 1.5; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.stroke(); x.beginPath(); x.ellipse(cx, cy, r, r * 0.3, 0, 0, 7); x.stroke();
    const a = t * 1.5; x.strokeStyle = `#a29bfe`; x.lineWidth = 3; x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(a) * r * 0.8, cy - Math.sin(a * 0.7) * r * 0.9); x.stroke();
    say(x, `|0⟩ + |1⟩`, cx + r + 16, cy - 12, 15, `#fff`, `left`, true); say(x, `Pixel ${T(VT.q)}`, cx + r + 16, cy + 10, 11, `#a29bfe`);
  },
};
function cube3d(x, w, h, t, solid) {
  const e = S.era, bg = e === 1 ? `#fff` : e === 3 ? `#000` : `#fff`;
  box(x, bg, 0, 0, w, h);
  const s = h * 0.2, a = t * 0.9, b = t * 0.6, P = [];
  for (const i of [-1, 1]) for (const j of [-1, 1]) for (const k of [-1, 1]) {
    let X = i, Y = j, Z = k; [X, Z] = [X * Math.cos(a) - Z * Math.sin(a), X * Math.sin(a) + Z * Math.cos(a)]; [Y, Z] = [Y * Math.cos(b) - Z * Math.sin(b), Y * Math.sin(b) + Z * Math.cos(b)];
    P.push([w / 2 + X * s * (3 / (Z + 4)) * 1.4, h / 2 + Y * s * (3 / (Z + 4)) * 1.4, Z]);
  }
  const F = [[0, 1, 3, 2], [4, 5, 7, 6], [0, 1, 5, 4], [2, 3, 7, 6], [0, 2, 6, 4], [1, 3, 7, 5]];
  const C = [`#ff5555`, `#55ff55`, `#5555ff`, `#ffff55`, `#55ffff`, `#ff55ff`];
  F.map((f, i) => [f, i, f.reduce((m, v) => m + P[v][2], 0)]).sort((p, q) => q[2] - p[2]).forEach(([f, i]) => {
    x.beginPath(); f.forEach((v, j) => (j ? x.lineTo(P[v][0], P[v][1]) : x.moveTo(P[v][0], P[v][1]))); x.closePath();
    if (solid) { x.fillStyle = C[i]; x.fill(); }
    x.strokeStyle = e === 3 ? `#000` : `#000`; x.lineWidth = 1; x.stroke();
  });
}

// draws every visible picture, about 30 times per second
let vizT = 0;
function vizFrame(now) {
  if (now - vizT < 33 || !S.era) return;
  vizT = now;
  const t = S.opt.anim ? now / 1000 : 0;
  for (const id in W) {
    const name = vizOf(id);
    let cv = W[id].el.querySelector(`canvas.viz`);
    if (!name) { if (cv) cv.remove(); continue; }
    if (!cv) { cv = document.createElement(`canvas`); cv.className = `viz`; W[id].el.insertBefore(cv, W[id].el.querySelector(`.body`)); }
    if (!cv.offsetParent) continue;
    const k = Math.min(2, devicePixelRatio || 1), cw = Math.round(cv.clientWidth * k), ch = Math.round(cv.clientHeight * k);
    if (cv.width !== cw || cv.height !== ch) { cv.width = cw; cv.height = ch; }
    const x = cv.getContext(`2d`);
    x.setTransform(k, 0, 0, k, 0, 0);
    VIZ[name](x, cv.clientWidth, cv.clientHeight, t);
  }
}
