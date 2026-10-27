// PIXEL-OS engine: era 0 (TERMLINK terminal tutorial) and eras 1-6 (desktop OSes, data in data.js and era*.js).
const $ = id => document.getElementById(id);
const KEY = `pixelos_v1`;
const L = () => (S.lang === `fr` ? 1 : 0);
const T = p => p[L()];
const U = () => UI[S.lang];
const loc = () => (S.lang === `fr` ? `fr-FR` : `en-US`);
const fill = (s, o) => s.replace(/\{(\w+)\}/g, (_, k) => o[k]);
const tf = (p, o) => [fill(p[0], o), fill(p[1], o)];
const UP = (k, ...a) => [UI.en, UI.fr].map(u => (typeof u[k] === `function` ? u[k](...a) : u[k]));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': `&amp;`, '<': `&lt;`, '>': `&gt;`, '"': `&quot;` })[c]);
const wait = ms => new Promise(r => setTimeout(r, ms));
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const rnd = (a, b) => a + Math.random() * (b - a);
const PDX = [];
ERA.forEach((E, e) => { if (!E) return; PDX[e] = {}; E.P.forEach((p, i) => { p.i = i; PDX[e][p.id] = p; }); E.PA.sort((a, b) => a.cost - b.cost); });
// program names follow the language (data.js NAME_FR), and so do the French texts that mention them
const NAME_RE = new RegExp(Object.keys(NAME_FR).filter(n => n !== `Chat`).sort((a, b) => b.length - a.length).map(n => n.replace(/[.*+?^${}()|[\]\\\/]/g, `\\$&`)).join(`|`), `g`);
ERA.forEach((E, e) => {
  if (!E) return;
  for (const p of E.P) {
    const d = Object.getOwnPropertyDescriptor(p, `file`), base = d.get || (() => d.value);
    Object.defineProperty(p, `file`, { get() { const n = base.call(this); return S && S.lang === `fr` ? frName(n, e) : n; }, configurable: true });
  }
  const fix = pair => { if (Array.isArray(pair) && typeof pair[1] === `string`) pair[1] = pair[1].replace(NAME_RE, m => frName(m, e)); };
  for (const p of E.PA) { fix(p.t); fix(p.d); }
  for (const k of [`D`, `N`]) for (const id in E[k] || {}) fix(E[k][id]);
  for (const l of [E.HELP, E.LOGS]) for (const pair of l || []) fix(pair);
});

let S, busy = false, noSave = false;

function eraFresh(e) {
  return {
    era: e, px: 0, total: 0, hw: {}, bought: { install: 1 }, run: { game: 1, install: 1 }, patch: {}, notes: [],
    frag: 0, fragT: 0, hackCd: 0, pos: {}, tab: 0, x: {}, lastLog: null,
  };
}
function fresh() {
  return Object.assign(eraFresh(0), {
    v: 1, life: 0, time: 0, clicks: 0, ach: [], once: {}, logs: 0,
    z: { ram: 3, rl: 0, count: 0, countOn: 0, auto: 0, autoOn: 0, pa: {}, seen: {}, log: [], n: 0, paid: 0 },
    st: { good: 0, bad: 0, closed: 0, oom: 0, hacks: 0, blind: 0 },
    lang: (navigator.language || ``).startsWith(`fr`) ? `fr` : `en`, opt: { sci: 0, anim: 1 }, last: Date.now(),
  });
}
// d: a state to start from (era change, import); undefined = read the save
function load(d) {
  if (d === undefined) { d = null; try { d = JSON.parse(localStorage.getItem(KEY)); } catch (e) {} }
  S = Object.assign(fresh(), d || {});
  if (d) for (const k of [`z`, `st`, `opt`, `x`, `hw`]) S[k] = Object.assign(fresh()[k] || {}, d[k]);
  if (d && d.rl && !d.hw) S.hw.ram = d.rl;
  if (d && !d.x) S.once.boot1 = 1;
}
function save() {
  if (noSave) return;
  S.last = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
}

const SUF = [``, `K`, `M`, `B`, `T`, `Qa`, `Qi`, `Sx`, `Sp`, `Oc`, `No`, `Dc`, `UDc`, `DDc`, `TDc`, `QaDc`, `QiDc`];
function fmt(n) {
  n = Math.floor(n);
  if (n < 1e6) return n.toLocaleString(loc());
  if (S.opt.sci) return n.toExponential(2).replace(`e+`, `e`);
  const e = Math.min(Math.floor(Math.log10(n) / 3), SUF.length - 1);
  return (n / 1000 ** e).toFixed(2) + SUF[e];
}
// "+300000 px/s" written in a description follows the number format chosen in the options
const PS_RE = /^\+[\d.,]+( millions?)? px\/s/;
function desc(id) {
  const t = T(E().D[id] || [``, ``]), p = prog(id);
  return p && p.prod && PS_RE.test(t) ? t.replace(PS_RE, `+${fmt(p.prod)} px/s`) : t;
}
const fmtR = n => (n < 100 ? (Math.round(n * 10) / 10).toLocaleString(loc()) : fmt(n));
function dur(s) {
  s = Math.floor(s);
  const h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60;
  return h ? `${h} h ${m} min` : m ? `${m} min` : `${s} s`;
}

// ---------- economy ----------
const E = () => ERA[S.era];
const prog = id => PDX[S.era][id];
const achMul = () => (1 + S.ach.length / 100) * (1 + 0.5 * (S.ng || 0));
const scoreVisible = () => (S.era === 0 ? S.z.countOn : S.run.score);
function gain(n) { S.px += n; S.total += n; S.life += n; if (!scoreVisible()) S.st.blind += n; }

const zUsed = () => 1 + S.z.countOn + 2 * S.z.autoOn;
const zAutoCost = () => Math.ceil(P0[2].cost * P0[2].k ** S.z.auto);
const zPerSec = () => S.z.autoOn * (S.z.pa.a0 ? 2 : 1) * achMul();
const zClick = () => (S.z.pa.c0 ? 2 : 1) * achMul();

let OWN = [];
const refreshOwn = () => { OWN = S.era ? E().PA.filter(p => S.patch[p.id]) : []; };
const flag = f => OWN.some(p => p.f === f);
function progMul(id) { let m = 1; for (const p of OWN) if (p.m && p.m[0] === id) m *= p.m[1]; return m; }
function kbOf(id) { let k = prog(id).kb; for (const p of OWN) if (p.z && p.z[0] === id) k = Math.min(k, p.z[1]); return k; }
function cpuOf(id) { let k = prog(id).cpu || 0; for (const p of OWN) if (p.u && p.u[0] === id) k = Math.min(k, p.u[1]); return k; }
const RES = { ram: id => kbOf(id), cpu: id => cpuOf(id), bw: id => prog(id).bw || 0, bat: id => prog(id).bat || 0 };
function track(r) { return E().HW.find(h => h.r === r); }
function cap(r) { const t = track(r), lv = S.hw[r] || 0; return lv ? t.s[lv - 1].to : E().start[r]; }
function use(r) { let u = r === `ram` ? S.frag : 0; for (const id in S.run) if (S.run[id] && PDX[S.era][id]) u += S.run[id] * RES[r](id); return u; }
const free = () => cap(`ram`) - use(`ram`);
const costOf = id => { const p = prog(id); return p.multi ? Math.ceil(p.cost * p.k ** ((S.bought[id] || 0) + (E().queued ? E().queued(id) : 0))) : p.cost; };
const cpuF = () => (E().start.cpu ? Math.min(1, cap(`cpu`) / Math.max(1, use(`cpu`))) : 1);
const bwF = () => (E().start.bw ? Math.min(1, cap(`bw`) / Math.max(1, use(`bw`))) : 1);
let saverOn = false;
const saverMul = () => (saverOn ? (flag(`saver5`) ? 5 : 3) : 1);
function progRate(p) {
  let f = p.prod * progMul(p.id);
  if (p.bw) f *= bwF();
  if (E().factor) f *= E().factor(p);
  return f;
}
function basePerSec() {
  if (!S.era) return 0;
  let s = 0;
  for (const p of E().P) if (p.prod && S.run[p.id]) s += S.run[p.id] * progRate(p);
  for (const p of OWN) if (p.g) s *= p.g;
  return s * cpuF() * achMul() * (E().mul2 ? E().mul2() : 1);
}
const perSec = () => (S.era === 0 ? zPerSec() : basePerSec() * saverMul() * boostOf(`p`));
function clickPow() {
  if (S.era === 0) return zClick();
  let c = typeof E().click === `function` ? E().click() : E().click || 1;
  for (const p of OWN) if (p.c) c *= p.c;
  c *= achMul() * boostOf(`c`);
  if (flag(`macro`)) c += basePerSec() * 0.05;
  return c;
}

// ---------- shared UI bits ----------
const cache = {};
function setH(id, h) { if (cache[id] !== h) { cache[id] = h; $(id).innerHTML = h; } }
function fx(e, txt) {
  if (!S.opt.anim) return;
  const s = document.createElement(`span`);
  s.className = `fx`; s.textContent = txt;
  s.style.left = e.clientX + 8 + `px`; s.style.top = e.clientY - 14 + `px`;
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 700);
}
// toasts wait their turn, so an event result is not hidden by an achievement popping at the same time
let toastT = 0;
const tq = [];
function toast(txt) {
  if (S.era === 0) return;
  if (toastT) return tq.length < 6 && tq.push(txt);
  $(`toast`).textContent = txt; $(`toast`).classList.add(`on`);
  toastT = setTimeout(() => { $(`toast`).classList.remove(`on`); toastT = 0; if (tq.length) setTimeout(() => toast(tq.shift()), 150); }, tq.length ? 2500 : 3500);
}
const dq = [];
let dlgCb = null, dlgNoCb = null;
function dlg(text, o = {}) {
  if ($(`dlg`).classList.contains(`on`)) return dq.push([text, o]);
  $(`dlgT`).textContent = text;
  $(`dlgH`).textContent = o.title || (S.era ? E().os : `PIXCORP`);
  $(`dlg`).classList.toggle(`inp`, !!o.input);
  $(`dlgI`).value = o.value || ``;
  $(`dlgB`).innerHTML = (o.cancel ? `<button class="btn" data-act="dlgNo">${o.cancel === true ? U().cancel : o.cancel}</button>` : ``) + `<button class="btn" data-act="dlgOk">${o.okT || U().ok}</button>`;
  dlgCb = o.ok || null; dlgNoCb = o.no || null;
  $(`dlg`).classList.add(`on`);
  if (o.input) setTimeout(() => $(`dlgI`).select(), 0);
}
function dlgClose() { $(`dlg`).classList.remove(`on`); if (dq.length) dlg(...dq.shift()); }

// ---------- era 0: terminal ----------
function zSay(p) {
  const z = S.z;
  z.log.push({ t: p, id: ++z.n });
  if (z.log.length > 12) z.log.shift();
}
const zNoPx = () => zSay(S.z.countOn ? TERM.noPx : TERM.noPxBlind);
function zOom() {
  S.st.oom++; zSay(TERM.oom);
  if (!S.z.seen.oom) { S.z.seen.oom = 1; zSay(TERM.tut.oom); }
}
async function zBoot() {
  busy = true;
  for (const l of TERM.boot) { zSay(l); await wait(650); }
  zSay(TERM.tut.start); S.z.seen.boot = 1; busy = false;
}
function zTriggers() {
  const z = S.z, s = z.seen;
  if (!s.count && S.clicks >= 6) { s.count = 1; zSay(TERM.tut.blind); zSay(TERM.tut.count); }
  if (!s.auto && z.count) { s.auto = 1; zSay(TERM.tut.auto); }
  if (!s.patch && z.autoOn) { s.patch = 1; zSay(TERM.tut.patch); }
  if (!s.memUp && s.patch && S.total >= 60) { s.memUp = 1; zSay(TERM.tut.memUp); }
  if (!s.hack && S.total >= 150) { s.hack = 1; zSay(TERM.tut.hack); }
  if (!s.os1 && z.rl >= R0.length) { s.os1 = 1; zSay(TERM.tut.os1); }
}
function zMenu() {
  if (busy) return ``;
  const z = S.z, kb = T(TERM.kb), l = [];
  const line = (a, txt, extra = ``) => l.push(`<div class="tl" data-act="${a}">&gt; ${txt}${extra}</div>`);
  if (!z.count) { if (z.seen.count) line(`zbuy`, `${T(TERM.buyP)} COUNT.COM (1 ${kb}) - ${P0[1].cost} PX`); }
  else line(`zcount`, `${T(z.countOn ? TERM.unload : TERM.load)} COUNT.COM (1 ${kb})`, z.countOn ? ` <b>[${T(TERM.loaded)}]</b>` : ``);
  if (z.seen.auto) {
    line(`zauto`, `${T(TERM.buyP)} AUTO.COM (2 ${kb}) - ${zAutoCost()} PX`);
    if (z.auto) {
      line(`zon`, `${T(TERM.load)} AUTO.COM (2 ${kb})`, ` <b>[${z.autoOn}/${z.auto} ${T(TERM.loaded)}]</b>`);
      if (z.autoOn) line(`zoff`, `${T(TERM.unload)} AUTO.COM`);
    }
  }
  if (z.seen.patch) for (const p of PA0) if (!z.pa[p.id]) line(`zpa:${p.id}`, `${T(TERM.buyP)} ${T(p.t)} - ${p.cost} PX`);
  if (z.seen.memUp && R0[z.rl]) line(`zram`, `${T(TERM.memUp)} (${z.ram} -> ${R0[z.rl].to} ${kb}) - ${R0[z.rl].c} PX`);
  if (z.seen.hack) {
    if (S.hackCd > 0) l.push(`<div class="tl off">&gt; ${U().hackWait(Math.ceil(S.hackCd))}</div>`);
    else line(`zhack`, U().hackReady.replace(/^> /, ``));
  }
  if (z.seen.os1) line(`zcard`, `${T(TERM.os1)} - ${OS1} PX`);
  return l.join(``);
}
function zRender() {
  const z = S.z, kb = T(TERM.kb), u = zUsed();
  setH(`tHead`, `${T(TERM.head)}`);
  const mem = `${T(TERM.mem)} [${`█`.repeat(u)}${`░`.repeat(Math.max(0, z.ram - u))}] ${u}/${z.ram} ${kb}`;
  const pix = z.countOn ? `${T(TERM.pixels)}: ${fmt(S.px)}${zPerSec() ? ` (+${fmtR(zPerSec())}/S)` : ``}` : `${T(TERM.pixels)}: ${T(TERM.unknown)}`;
  setH(`tStat`, `${mem}&nbsp;&nbsp;&nbsp;&nbsp;${pix}`);
  setH(`tHint`, S.clicks < 3 ? T(TERM.block) : ``);
  setH(`tMenu`, H && H.era === 0 ? hackHtml() : zMenu());
  setH(`tLog`, z.log.map(e => `<div class="${e.id === z.n ? `new` : ``}">${esc(T(e.t))}</div>`).join(``));
  setH(`tSys`, `${T(TERM.sys)}: <span class="tl" data-act="lang">[${T(TERM.langSw)}]</span><span class="tl" data-act="exp">[${T(TERM.exp)}]</span><span class="tl" data-act="imp">[${T(TERM.imp)}]</span><span class="tl" data-act="hard">[${T(TERM.reset)}]</span>`);
}
const st0 = { next: 25, left: 0, good: true };
function zStrayTick(dt) {
  const el = $(`tStray`);
  if (st0.left > 0) { if ((st0.left -= dt) <= 0) el.classList.remove(`on`); return; }
  if (S.total < 40 || busy || (st0.next -= dt) > 0) return;
  st0.next = 30 + Math.random() * 30; st0.left = 6; st0.good = Math.random() < 0.8;
  const w = $(`tScreen`).clientWidth;
  el.style.left = (Math.random() < 0.5 ? 10 + Math.random() * w * 0.3 : w * 0.62 + Math.random() * (w * 0.38 - 30)) + `px`;
  el.style.top = 6 + Math.random() * 100 + `px`;
  el.classList.add(`on`);
  if (!S.z.seen.stray) { S.z.seen.stray = 1; zSay(TERM.tut.stray); }
}
function zCatch() {
  st0.left = 0; $(`tStray`).classList.remove(`on`);
  if (st0.good) { const n = Math.max(15, zPerSec() * 20 + zClick() * 10); gain(n); S.st.good++; zSay(tf(TERM.good, { n: fmt(n) })); }
  else { const n = Math.floor(S.px * 0.15); S.px -= n; S.st.bad++; zSay(tf(TERM.bad, { n: fmt(n) })); }
}
async function toEra1() {
  busy = true;
  for (const p of DELIVERY[0].text) { zSay(p); await wait(1300); }
  for (let n = 0; n <= 100; n += 25) { zSay(tf(TERM.installing, { n })); await wait(500); }
  document.body.classList.add(`flick`);
  await wait(1000);
  Object.assign(S, eraFresh(1));
  restart(S);
}

// ---------- password minigame (era 0 in the terminal, then hack.exe) ----------
let H = null;
// no brackets in the noise: they only appear as the clickable pairs
const GARB = `!@#$%^&*-_=+?/|;:'",.`;
const PAIRS = [`()`, `[]`, `{}`, `<>`];
const likeness = (a, b) => { let n = 0; for (let i = 0; i < a.length; i++) if (a[i] === b[i]) n++; return n; };
function hackStart(era) {
  const len = era === 0 || S.st.hacks < 3 ? 5 : 7;
  // like Fallout: most other words look like the password, so every guess teaches something
  const pool = shuffle(WORDS[len].slice()), pass = pool[0];
  const rest = pool.slice(1).sort((a, b) => likeness(b, pass) - likeness(a, pass));
  const words = shuffle([pass, ...rest.slice(0, 5), ...shuffle(rest.slice(5)).slice(0, 2)]);
  const rows = shuffle([...Array(16).keys()]), wordRows = rows.slice(0, 8), pairRows = rows.slice(8, 12);
  const g = n => Array.from({ length: n }, () => GARB[Math.random() * GARB.length | 0]).join(``);
  const lines = [];
  for (let i = 0; i < 16; i++) {
    const k = wordRows.indexOf(i), j = pairRows.indexOf(i);
    if (k >= 0) { const a = Math.random() * (13 - len) | 0; lines.push([{ g: g(a) }, { w: words[k] }, { g: g(12 - len - a) }]); }
    else if (j >= 0) {
      const pr = PAIRS[Math.random() * 4 | 0], n = 1 + (Math.random() * 3 | 0), a = Math.random() * (11 - n) | 0;
      lines.push([{ g: g(a) }, { k: j, s: pr[0] + g(n) + pr[1] }, { g: g(10 - n - a) }]);
    } else lines.push([{ g: g(12) }]);
  }
  H = { era, pass, words, tries: 4, lines, log: [], hist: [], used: [], dud: [], base: 0xf000 + (Math.random() * 0xe00 | 0) };
}
// each era dresses the terminal as the real program of its time
const HT_ICONS = [
  `<path d="M3 1h7l3 3v11H3z" fill="#fff" stroke="#000"/><path d="M10 1v3h3" fill="none" stroke="#000"/>`,
  `<path d="M1 4h5l1 2h8v8H1z" fill="#ff0" stroke="#000"/>`,
  `<path d="M2 11c0-5 3-8 6-8s6 3 6 8z" fill="#c00" stroke="#000"/><rect x="5" y="11" width="6" height="3" fill="#000"/>`,
  `<path d="M2 11c0-5 3-8 6-8s6 3 6 8z" fill="#888" stroke="#000"/><path d="M3 2l10 12" stroke="#c00" stroke-width="2"/>`,
  `<rect x="2" y="3" width="12" height="10" fill="#fff" stroke="#000"/><path d="M4 6h8M4 8h8M4 10h5" stroke="#008"/>`,
  `<rect x="2" y="2" width="12" height="12" fill="#c0c0c0" stroke="#000"/><path d="M5 5h6v6H5z" fill="#fff" stroke="#000"/>`,
].map(p => `<i><svg viewBox="0 0 16 16" width="16" height="16">${p}</svg></i>`).join(``);
const HACK_FRAME = {
  // PIXEL-OS 1984: 1-bit screen, inverted title band, blinking block cursor
  1: (h, on) => `<div class="hk1">${h}<div>&gt; <span class="blk">█</span></div></div>`,
  // MINO-DOS: grey on black, the DOS prompt around the program
  2: (h, on) => `<div class="hk2"><div class="dosb">MINO-DOS TERMINAL v2.1  (C) PIXCORP 1987</div><div>C:\\&gt;TERMINAL.EXE /CRACK</div><br>${h}<div>C:\\&gt;<span class="blk">_</span></div></div>`,
  // Winbows 95: HyperTerminal, with its toolbar, white terminal area and status bar
  3: (h, on) => { const t = on && H ? Math.floor((Date.now() - (H.t0 || (H.t0 = Date.now()))) / 1000) : 0;
    return `<div class="hk3"><div class="htb">${HT_ICONS}</div><div class="htt">${h}<span class="blk">_</span></div><div class="hts"><span>${on ? `${T([`Connected`, `Connecté`])} ${Math.floor(t / 3600)}:${String(Math.floor(t / 60) % 60).padStart(2, `0`)}:${String(t % 60).padStart(2, `0`)}` : T([`Disconnected`, `Déconnecté`])}</span><span>${T([`Auto detect`, `Détection auto`])}</span><span>2400 8-N-1</span></div></div>`; },
  // Winbows 12: Windows Terminal, a PowerShell tab, colored prompt
  6: (h, on) => `<div class="hk6"><div class="wtt"><span class="wtab"><i>&gt;_</i>PowerShell<b>×</b></span><span class="wtp">+</span><span class="wtp">⌄</span></div><div class="wtb"><div class="wtd">PowerShell 7.4.1 · Copixel Edition</div><div><span class="wps">PS C:\\Users\\Pixel&gt;</span> <span class="wcm">.\\hack.ps1</span></div>${h}<div><span class="wps">PS C:\\Users\\Pixel&gt;</span> <span class="blk">▏</span></div></div></div>`,
  // Winbows XD: the black Command Prompt with its banner
  4: (h, on) => `<div class="hk4"><div>PIXCORP Winbows XD [version 5.1.2600]</div><div>(C) Copyright 1985-2001 PIXCORP.</div><br><div>C:\\Documents and Settings\\Pixel&gt;hack.exe</div>${h}<div>C:\\Documents and Settings\\Pixel&gt;<span class="blk">_</span></div></div>`,
};
function hackHtml() {
  const u = U();
  const part = x => x.w ? (H.dud.includes(x.w) ? `.`.repeat(x.w.length) : `<span class="hw" data-act="hg:${x.w}">${x.w}</span>`)
    : x.s ? (H.used.includes(x.k) ? esc(x.s) : `<span class="hw" data-act="hb:${x.k}">${esc(x.s)}</span>`) : esc(x.g);
  const col = f => H.lines.slice(f, f + 8).map((l, i) => `0x${(H.base + (f + i) * 12).toString(16).toUpperCase()} ${l.map(part).join(``)}`).join(`\n`);
  return `<div>${u.hackTitle}</div><div>${u.hackTries(H.tries)} ${`█ `.repeat(H.tries)}</div><div class="hk"><div>${col(0)}</div><div>${col(8)}</div></div>${H.log.map(x => `<div>${esc(x)}</div>`).join(``)}<div class="tl" data-act="hexit">&gt; ${T(TERM.exit)}</div>`;
}
// a bracket pair, once: usually removes a wrong word, sometimes gives the tries back
function hackBracket(k) {
  if (!H || H.used.includes(k)) return;
  H.used.push(k);
  const duds = H.words.filter(w => w !== H.pass && !H.dud.includes(w));
  if (duds.length && Math.random() < 0.75) { const d = duds[Math.random() * duds.length | 0]; H.dud.push(d); H.log.push(U().hackDud); H.hist.push({ dud: d }); }
  else { H.tries = 4; H.log.push(U().hackReset); H.hist.push({ reset: 1 }); }
}
function hackGuess(w) {
  if (!H) return;
  const era = H.era;
  if (w === H.pass) {
    const r = Math.max(era === 0 ? 40 : 200, perSec() * 60);
    gain(r); S.st.hacks++; S.hackCd = era === 0 ? 45 : 90;
    const pool = era === 0 ? DEVLOG : E().LOGS || DEVLOG;
    const i = era === 0 ? S.logs : S.x.logs || 0;
    const log = pool[i];
    if (log) { if (era === 0) S.logs++; else S.x.logs = i + 1; }
    H = null;
    if (era === 0) { zSay(UP(`hackOk`)); zSay(UP(`hackReward`, fmt(r))); if (log) zSay(log); }
    else { if (log) { S.lastLog = log; note(log); } toast(U().hackReward(fmt(r))); }
    return;
  }
  H.log.push(U().likeness(w, likeness(w, H.pass))); H.hist.push({ w, n: likeness(w, H.pass) });
  if (--H.tries > 0) return;
  H = null; S.hackCd = era === 0 ? 30 : 90;
  if (era === 0) zSay(UP(`hackFail`)); else toast(U().hackFail);
}

// ---------- desktop eras ----------
function note(p) {
  if (!p) return;
  S.notes.unshift(p);
  if (S.notes.length > 80) S.notes.pop();
  const t = W.notes && W.notes.el.firstChild;
  if (t) { t.classList.remove(`blink`); void t.offsetWidth; t.classList.add(`blink`); }
}
const N = k => E().N[k];
const noPx = () => dlg(S.run.score ? U().noPx : U().noPxBlind);
function oom(name, owned) {
  S.st.oom++;
  dlg(owned ? U().oomOwned(name) : U().oom);
  if (!S.once[`oom` + S.era]) { S.once[`oom` + S.era] = 1; note(N(`oom`)); }
}
const ramTxt = n => fmt(n * E().mul) + ` ` + T(E().unit);

const W = {};
let zTop = 20;
const MID = new Set([`cursor`, `cga`, `calc`, `saver`, `defrag`, `clock`, `av`, `dl`]);
function defPos(id) {
  const w = innerWidth, h = innerHeight, o = E().pos && E().pos[id];
  if (o) return [o[0] < 0 ? w + o[0] : o[0], o[1] < 0 ? h + o[1] : o[1]];
  const m = {
    game: [w / 2 - 130, 60], install: [w - 380, 40], score: [w / 2 - 95, 250], notes: [w - 380, h - 380],
    cursor: [w / 2 - 260, h - 210], cga: [w / 2 + 20, h - 230], help: [120, 60], trophy: [120, 250],
    clock: [w / 2 + 60, h - 250], calc: [w / 2 - 330, 230], hack: [w / 2 - 165, 110], saver: [w / 2 - 120, h - 320], defrag: [w / 2 + 60, 300],
  };
  return m[id] || [w / 2 - 320 + (prog(id).i % 5) * 50, 280 + (prog(id).i % 5) * 30];
}
function place(el, x, y) {
  const top = E() && E().startMenu ? 4 : 28;
  el.style.left = Math.max(96, Math.min(x, innerWidth - el.offsetWidth - 6)) + `px`;
  el.style.top = Math.max(top, Math.min(y, innerHeight - 160)) + `px`;
}
const front = id => { if (W[id]) W[id].el.style.zIndex = ++zTop; };
function makeWin(id) {
  if (W[id]) return front(id);
  const p = prog(id), el = document.createElement(`div`);
  el.className = `win` + (p.multi || MID.has(id) ? ` mid` : ``) + (E().winClass ? ` ` + E().winClass(id) : ``);
  el.id = `w-` + id;
  el.innerHTML = `<div class="title" data-drag="${id}">${p.fixed ? `` : `<button class="x" data-act="close:${id}" aria-label="close">x</button>`}<i class="ti"></i><b>${p.file}</b><span class="cbs"><button class="cb mn" data-act="nyi:min" aria-label="minimize"></button><button class="cb mx" data-act="nyi:max" aria-label="maximize"></button></span></div><div class="body" id="b-${id}"></div>`;
  $(`desk`).appendChild(el);
  W[id] = { el, h: ``, ti: el.querySelector(`.ti`) };
  if (id === `game`) $(`b-game`).innerHTML = `<div id="pixs"></div><button id="pix" aria-label="pixel"><i></i></button>`;
  winBody(id);
  const [x, y] = S.pos[id] || defPos(id);
  place(el, x, y); front(id);
}
function killWin(id) { if (W[id]) { W[id].el.remove(); delete W[id]; } }
function fits(id) {
  if (kbOf(id) > free()) return false;
  return true;
}
function openProg(id, justBought) {
  const p = prog(id);
  if (!p || (!S.bought[id] && !p.fixed)) return;
  if (E().canOpen && !E().canOpen(id)) return;
  if (p.multi) return runMore(id, justBought);
  if (S.run[id]) return front(id);
  if (!fits(id)) return oom(p.file, justBought);
  S.run[id] = 1; makeWin(id);
  if (E().opened) E().opened(id);
}
function runMore(id, justBought) {
  const r = S.run[id] || 0;
  if (r >= S.bought[id]) return front(id);
  if (!fits(id)) return oom(prog(id).file, justBought);
  S.run[id] = r + 1; makeWin(id);
}
function closeProg(id) {
  if (!S.run[id] || prog(id).fixed) return;
  if (E().closing && E().closing(id) === false) return;
  S.run[id] = 0; S.st.closed++;
  killWin(id);
  if (id === `install` && !S.once[`shop` + S.era]) { S.once[`shop` + S.era] = 1; S.once.shopClosed = 1; note(N(`shopClosed`)); }
  if (id === `score` && !S.once[`blind` + S.era]) { S.once[`blind` + S.era] = 1; note(N(`blind`)); }
  if (id === `hack` && H && H.era) H = null;
}
function buyProg(id) {
  const c = costOf(id);
  if (S.px < c) return noPx();
  S.px -= c;
  if (E().buy && E().buy(id)) return;
  got(id);
}
function got(id) {
  S.bought[id] = (S.bought[id] || 0) + 1; S.st.buys = (S.st.buys || 0) + 1;
  if (S.bought[id] === 1) note(N(id));
  openProg(id, true);
}

const unitOf = r => (r === `ram` ? null : E().ru[r]);
const resTxt = (r, v) => (r === `ram` ? ramTxt(v) : fmt(v) + ` ` + T(unitOf(r)));
function progSub(p) {
  const bits = [ramTxt(kbOf(p.id))];
  for (const r of [`cpu`, `bw`, `bat`]) if (E().start[r] && RES[r](p.id)) bits.push(resTxt(r, RES[r](p.id)));
  if (p.sub) bits.push(U().subTxt(fmt(p.sub)));
  return bits.join(` - `);
}
const BODY = {
  install() {
    const u = U(), t = S.tab, sv = S.run.score, lim = Math.max(S.total * 2.5, 60);
    const row = (a, name, sub, label, can) => `<div class="row ${can && sv ? `can` : ``}"><span>${name}<small>${sub}</small></span><button class="btn" data-act="${a}">${label}</button></div>`;
    let h = ``, owned = ``, teaser = false;
    const tease = () => { if (!teaser) { teaser = true; h += `<div class="row dim"><span>${u.teaser}</span></div>`; } };
    if (t === 0) {
      for (const p of E().P) {
        if (p.fixed || p.id === `install` || p.hidden || p.nostore) continue;
        const c = costOf(p.id), have = S.bought[p.id];
        if (!have && p.cost > lim) { tease(); continue; }
        const sub = `${progSub(p)} - ${desc(p.id)}`;
        const pend = E().pending ? E().pending(p.id) : ``;
        if (p.multi) h += row(`buy:${p.id}`, `${p.file}${have ? ` x${have}` : ``}${pend}`, sub, u.buy(fmt(c)), S.px >= c);
        else if (!have && !pend) h += row(`buy:${p.id}`, p.file, sub, u.buy(fmt(c)), S.px >= c);
        else if (!have) h += `<div class="row dim"><span>${p.file}${pend}<small>${sub}</small></span></div>`;
        else owned += row(`open:${p.id}`, p.file, progSub(p), S.run[p.id] ? u.running : u.open, false);
      }
    } else if (t === 1) {
      for (const p of E().PA) {
        if (p.req && !S.bought[p.req]) continue;
        if (S.patch[p.id]) { owned += `<div class="row got"><span>${T(p.t)}<small>${T(p.d)}</small></span><span>${u.patchOwned}</span></div>`; continue; }
        if (p.cost > lim) { tease(); continue; }
        h += row(`pat:${p.id}`, T(p.t), T(p.d), u.buy(fmt(p.cost)), S.px >= p.cost);
      }
    } else {
      let maxed = true;
      for (const tr of E().HW) {
        const lv = S.hw[tr.r] || 0, st = tr.s[lv];
        if (!st) continue;
        maxed = false;
        h += row(`hw:${tr.r}`, fill(T(tr.t), { a: resTxt(tr.r, cap(tr.r)), b: resTxt(tr.r, st.to) }), T(tr.d), u.buy(fmt(st.c)), S.px >= st.c);
      }
      const en = E().end;
      h += maxed ? row(`end`, T(en.t), T(en.d), u.buy(fmt(en.c)), S.px >= en.c) : `<div class="row dim"><span>${T(en.t)}<small>${T(en.d)}</small></span></div>`;
    }
    const tabs = `<div class="tabs">${u.tabs.map((n, i) => `<button class="btn ${i === t ? `on` : ``}" data-act="tab:${i}">${n}</button>`).join(``)}</div>`;
    return tabs + h + (owned ? `<div class="h">${u.installedH}</div>${owned}` : ``);
  },
  score: () => `<div class="big">${fmt(S.px)}</div><div class="c">px</div><div class="c dim">${U().perSec(fmtR(perSec()))}<br>${U().perClick(fmtR(clickPow()))}</div>${E().scoreNote ? E().scoreNote() : ``}`,
  notes: () => `<div class="notes">${S.notes.map(n => `<p>${esc(T(n))}</p>`).join(``)}</div>`,
  help: () => `<div class="notes">${E().HELP.map(t => `<p>- ${esc(T(t))}</p>`).join(``)}</div>`,
  cursor: () => `<div class="dim">${T(E().D.cursor)}</div>`,
  trophy() {
    const list = ACH.filter(a => (a[4] || 1) <= S.era);
    return `<div class="h">${U().achs(S.ach.length, ACH.length)}</div>` + list.map(([id, n, d]) => `<div class="row ${S.ach.includes(id) ? `` : `got`}"><span>${T(n)}<small>${T(d)}</small></span><span>${S.ach.includes(id) ? `[x]` : `[ ]`}</span></div>`).join(``);
  },
  clock() {
    const d = new Date();
    return `<div class="big">${d.toTimeString().slice(0, 8)}</div><div class="c dim">${d.toLocaleDateString(loc(), { weekday: `short`, day: `numeric`, month: `short` })} ${E().year}</div>`;
  },
  cga: () => `<div class="pal"><i style="background:#000"></i><i style="background:#5ff"></i><i style="background:#f5f"></i><i style="background:#fff"></i></div><div class="dim">${T(E().D.cga)}</div>`,
  calc() {
    const c = U().calc, v = [U().perSec(fmtR(perSec())), fmtR(clickPow()), fmt(S.life), dur(S.time), S.st.closed];
    return v.map((x, i) => `<div class="row"><span>${c[i]}</span><span>${x}</span></div>`).join(``);
  },
  saver: () => `<div class="dim">${T(E().D.saver)}</div><div class="h">${saverOn ? U().saverRun + saverMul() : U().idle(Math.floor(idle))}</div>`,
  defrag() {
    const ram = cap(`ram`), u = use(`ram`);
    const cells = Array.from({ length: ram }, (_, i) => `<i class="${i < S.frag ? `f` : i < u ? `u` : ``}"></i>`).join(``);
    return `<div class="grid">${cells}</div><div class="dim">${S.frag ? U().defragOn : U().defragIdle}</div>`;
  },
  hack() {
    // in Winbows 12 (and once Copixel has recoded it) the terminal becomes Windows Terminal
    const f = HACK_FRAME[E().skin === 6 || (W.hack && W.hack.el.classList.contains(`new`)) ? 6 : E().skin];
    if (H && H.era) return f ? f(hackHtml(), 1) : hackHtml();
    if (f) return f(`<div>${esc(T(E().D.hack))}</div>${S.lastLog ? `<p>${esc(T(S.lastLog))}</p>` : ``}${S.hackCd > 0 ? `<div>${U().hackWait(Math.ceil(S.hackCd))}</div>` : `<div class="tl" data-act="hack">${U().hackReady}</div>`}`, 0);
    const btn = S.hackCd > 0 ? `<span class="dim">${U().hackWait(Math.ceil(S.hackCd))}</span>` : `<button class="btn" data-act="hack">${U().hackReady.replace(/^> /, ``)}</button>`;
    return `<div class="dim">${T(E().D.hack)}</div>${S.lastLog ? `<p>${esc(T(S.lastLog))}</p>` : ``}<div style="margin-top:8px">${btn}</div>`;
  },
};
function multiBody(p) {
  const r = S.run[p.id] || 0;
  return `<div class="dim">${desc(p.id)}</div><div class="h">${U().runN(r, S.bought[p.id] || 0)} - ${fmtR(r * progRate(p) * cpuF() * achMul())} px/s</div><div style="display:flex;gap:6px;margin-top:6px;align-items:center"><button class="btn" data-act="less:${p.id}">-1</button><button class="btn" data-act="more:${p.id}">+1</button><span class="dim">${progSub(p)}</span></div>`;
}
function winBody(id) {
  if (id === `game` || !W[id]) return;
  const p = prog(id), f = (E().BODY && E().BODY[id]) || BODY[id] || (p.multi ? () => multiBody(p) : () => `<div class="dim">${desc(id)}</div>`);
  const h = (E().extraBody ? E().extraBody(id) : ``) + f();
  if (h !== W[id].h) { W[id].h = h; $(`b-` + id).innerHTML = h; }
}

const MENU = {
  file: u => [[`save`, u.save], [`exp`, u.exp], [`imp`, u.imp], [`hard`, u.hard, `sepi`]],
  edit: u => [[`lang`, u.lang], [`sci`, (S.opt.sci ? `[x] ` : `[ ] `) + u.sci], [`anim`, (S.opt.anim ? `[x] ` : `[ ] `) + u.anim]],
  help: u => (S.run.help ? [[`tip`, u.tip], [`about`, u.about, `sepi`]] : [[``, u.helpOff, `dis`], [`about`, u.about, `sepi`]]),
};
MENU.start = u => {
  const f = MENU.file(u), e = MENU.edit(u), h = MENU.help(u);
  e[0] = [e[0][0], e[0][1], `sepi`]; h[0] = [h[0][0], h[0][1], (h[0][2] || ``) + ` sepi`];
  return [...f, ...e, ...h, ...(E().startExtra ? E().startExtra(u) : [])];
};
function toggleMenu(m) {
  const d = $(`drop`), name = m.dataset.menu;
  if (d.classList.contains(`on`) && d.dataset.m === name) return closeMenu();
  const items = MENU[name](U());
  d.innerHTML = name === `start` ? startHtml(items) : items.map(([a, t, c]) => `<div class="mi ${c || ``}"${a ? ` data-act="${a}"` : ``}>${t}</div>`).join(``);
  d.dataset.m = name;
  const r = m.getBoundingClientRect();
  d.style.left = r.left + `px`;
  if (name === `start`) { d.style.top = `auto`; d.style.bottom = innerHeight - r.top + 2 + `px`; }
  else { d.style.top = `24px`; d.style.bottom = `auto`; }
  d.classList.add(`on`);
  document.querySelectorAll(`[data-menu]`).forEach(x => x.classList.toggle(`on`, x === m));
}
// the start menu of each Winbows: 95 has its side banner, XD its two columns, 12 its centered panel
const MI_ICON = { save: `floppy`, exp: `arrows`, imp: `box`, hard: `stop`, lang: `globe`, sci: `calc`, anim: `star`, tip: `help`, about: `window`, shutdown: `stop` };
function startHtml(items) {
  const sk = E().skin, st = sk === 3 ? `w95` : sk === 4 ? `xp` : `w11`;
  const mi = ([a, t, c], cls = ``) => `<div class="mi ${c || ``} ${cls}"${a ? ` data-act="${a}"` : ``}><i style="background-image:url('${iconUrl(MI_ICON[a] || `window`, st)}')"></i><span>${t}</span></div>`;
  const user = T([`Player`, `Joueur`]);
  if (sk === 3) return `<div class="sm95"><div class="band"><span><b>Winbows</b>95</span></div><div class="lst">${items.map(i => mi(i)).join(``)}</div></div>`;
  const off = items.filter(i => i[0] === `hard` || i[0] === `shutdown`), rest = items.filter(i => !off.includes(i));
  if (sk === 4) {
    const half = Math.ceil(rest.length / 2);
    return `<div class="smxp"><div class="hd"><i></i><b>${user}</b></div><div class="cols"><div class="l">${rest.slice(0, half).map(i => mi(i)).join(``)}</div><div class="r">${rest.slice(half).map(i => mi(i)).join(``)}</div></div><div class="ft">${off.map(i => mi(i)).join(``)}</div></div>`;
  }
  return `<div class="sm11"><div class="srch">${T([`Search for apps, settings and documents`, `Rechercher des applications, paramètres et documents`])}</div><div class="sh">${T([`Pinned`, `Épinglé`])}</div><div class="pins">${rest.map(i => mi(i, `tile`)).join(``)}</div><div class="ft"><span class="usr"><i></i>${user}</span>${off.map(i => mi(i, `pw`)).join(``)}</div></div>`;
}
function closeMenu() { $(`drop`).classList.remove(`on`); document.querySelectorAll(`[data-menu]`).forEach(x => x.classList.remove(`on`)); }

const strayColor = () => !!(E().color || S.run.cga);
const st1 = { next: 30, left: 0, good: true, x: 0, y: 0, vx: 0, vy: 0 };
function strayTick(dt) {
  const el = $(`stray`), s = st1;
  if (s.left > 0) {
    s.left -= dt; s.x += s.vx * dt; s.y += s.vy * dt;
    if (s.x < 0 || s.x > innerWidth - 10) s.vx = -s.vx;
    if (s.y < 30 || s.y > innerHeight - 50) s.vy = -s.vy;
    el.style.left = s.x + `px`; el.style.top = s.y + `px`;
    if (s.left <= 0) el.className = ``;
    return;
  }
  if (S.total < 200 || busy || (s.next -= dt) > 0) return;
  s.next = 25 + Math.random() * 25; s.left = 5; s.good = Math.random() < 0.65;
  s.x = 100 + Math.random() * (innerWidth - 200); s.y = 60 + Math.random() * (innerHeight * 0.5);
  const a = Math.random() * Math.PI * 2, sp = (140 + Math.random() * 80) * (flag(`strayslow`) ? 0.6 : 1);
  s.vx = Math.cos(a) * sp; s.vy = Math.sin(a) * sp;
  el.className = `on ` + (s.good ? `good` : `bad`);
  if (!S.once[`stray` + S.era]) { S.once[`stray` + S.era] = 1; note(N(`stray`)); }
}
function catchStray(e) {
  st1.left = 0; $(`stray`).className = ``;
  if (st1.good) { const n = Math.max(20, basePerSec() * 30 + clickPow() * 20) * (flag(`strayx3`) ? 3 : 1); gain(n); S.st.good++; fx(e, `+` + fmt(n)); }
  else if (flag(`magnet`)) toast(U().blocked);
  else { const n = Math.floor(S.px * 0.15); S.px -= n; S.st.bad++; fx(e, `-` + fmt(n)); }
}

let defT = 0;
function fragTick(dt) {
  if (!E().frag) return;
  if (cap(`ram`) >= E().frag && (S.fragT += dt) >= (flag(`defrag`) ? 240 : 120)) {
    S.fragT = 0;
    if (S.frag < Math.floor(cap(`ram`) / 8) && free() >= 1) { S.frag++; if (!S.once[`frag` + S.era]) { S.once[`frag` + S.era] = 1; note(N(`frag`)); } }
  }
  if (S.run.defrag && S.frag > 0 && (defT += dt) >= 8) { defT = 0; S.frag--; S.once.defragged = 1; }
}
function milestones() {
  for (const [k, v] of E().MS || []) if (!S.x[k] && S.total >= v) { S.x[k] = 1; note(N(k)); }
}
function meter(r) {
  const u = use(r), c = cap(r);
  return `<span class="meter ${u > c ? `over` : ``}">${T(E().rn[r])} ${fmt(u)}/${fmt(c)} ${T(E().ru[r])}</span>`;
}
function deskRender() {
  const u = U(), e = E();
  if (!e.startMenu) setH(`bar`, `<span class="logo"></span><span class="m" data-menu="file">${u.file}</span><span class="m" data-menu="edit">${u.edit}</span><span class="m" data-menu="help">${u.help}</span><span class="r">${e.os}</span>`);
  const ics = e.P.filter(p => (e.allIcons ? (S.bought[p.id] || p.fixed) && !p.hidden : !p.fixed && S.bought[p.id] && !S.run[p.id])), ich = p => `<div class="ic" data-act="open:${p.id}">${icon(p.id)}<span>${p.file}</span></div>`;
  setH(`icons`, e.dock ? ics.filter(p => !e.dock.includes(p.id)).map(ich).join(``) + (e.memBar ? e.memBar(false) : ``) + `<div class="dots"><i class="on"></i><i></i></div><div class="dock">${ics.filter(p => e.dock.includes(p.id)).map(ich).join(``)}</div>` : ics.map(ich).join(``));
  let r = ``;
  for (const p of e.P) { const n = (S.run[p.id] || 0) * kbOf(p.id); for (let i = 0; i < n; i++) r += `<i class="p${p.i % 3}" title="${p.file}"></i>`; }
  setH(`ram`, r + `<i class="f"></i>`.repeat(S.frag) + `<i></i>`.repeat(Math.max(0, free())));
  setH(`ramT`, u.ram(ramTxt(use(`ram`)), ramTxt(cap(`ram`)), S.frag));
  setH(`res`, [`cpu`, `bw`, `bat`].filter(x => e.start[x] && x !== `bat`).map(meter).join(``) + (e.taskExtra ? e.taskExtra() : ``));
  setH(`startB`, e.startMenu ? `<span class="m sb" data-menu="start"><i></i>${T(e.startMenu)}</span>` : ``);
  const now = new Date();
  setH(`clk`, S.run.clock ? now.toTimeString().slice(0, 5) + (e.skin === 6 ? `<small>${now.toLocaleDateString(loc())}</small>` : ``) : ``);
  setH(`tapps`, e.skin === 6 ? e.P.filter(p => S.run[p.id] && !p.hidden).map(p => `<span class="ta" data-act="open:${p.id}" title="${esc(p.file)}">${icon(p.id)}</span>`).join(``) : ``);
  // on the phone only one app shows at a time: the running Score app also shows on top of the Pixel app
  if ($(`pixs`)) setH(`pixs`, e.skin === 5 && S.run.score ? `<b>${fmt(S.px)}</b> px<small>${u.perSec(fmtR(perSec()))}</small>${e.scoreNote ? e.scoreNote() : ``}` : ``);
  for (const id in W) { winBody(id); if (e.skin === 3 || e.skin === 4 || e.skin === 6) { const u = iconUrl(iconName(id), iconStyle(id)); if (W[id].ti.dataset.u !== u) { W[id].ti.dataset.u = u; W[id].ti.style.backgroundImage = `url('${u}')`; } } }
  if (e.render) e.render();
}

// ---------- achievements ----------
const ACHK = {
  click1: () => S.clicks >= 1, click100: () => S.clicks >= 100, click1k: () => S.clicks >= 1e3, click10k: () => S.clicks >= 1e4,
  oom: () => S.st.oom > 0, blind: () => S.st.blind >= 500, hack1: () => S.st.hacks >= 1, hack5: () => S.st.hacks >= 5,
  stray1: () => S.st.good >= 1, stray20: () => S.st.good >= 20, strayBad: () => S.st.bad >= 1,
  gui: () => S.era >= 1, shop: () => S.once.shopClosed, auto5: () => S.era >= 1 && (S.run.auto || 0) >= 5, cga: () => S.era > 1 || (S.era === 1 && S.bought.cga),
  saver: () => S.once.saverOn, defrag: () => S.once.defragged, offline: () => S.once.offline,
  ram16: () => S.era > 1 || (S.era === 1 && cap(`ram`) >= 16), ram32: () => S.era > 1 || (S.era === 1 && cap(`ram`) >= 32), ram64: () => S.era > 1 || (S.era === 1 && cap(`ram`) >= 64),
  patch10: () => S.era >= 1 && Object.keys(S.patch).length >= 10, px1k: () => S.life >= 1e3, px1m: () => S.life >= 1e6,
  all: () => S.era > 1 || (S.era === 1 && E().P.every(p => p.fixed || S.bought[p.id])),
};
function checkAch() {
  for (const a of ACH) {
    const [id, n] = a, f = a[3] || ACHK[id];
    if (S.ach.includes(id) || !f || !f()) continue;
    S.ach.push(id);
    if (S.era === 0) zSay([fill(TERM.ach[0], { n: n[0] }), fill(TERM.ach[1], { n: n[1] })]);
    else toast(U().achGot(T(n)));
  }
}

// ---------- era change ----------
function endEra() {
  const next = ERA[S.era + 1], dv = DELIVERY[S.era];
  if (!next) return dlg(T(E().soon || [UI.en.soon, UI.fr.soon]));
  dlg(dv.text.map(T).join(`\n\n`), { title: T(dv.item), okT: T(E().end.go || [`Insert`, `Insérer`]), cancel: true, ok: async () => {
    busy = true; S.px -= E().end.c;
    document.body.classList.add(`flick`);
    await wait(1100);
    const keep = { pos: {} };
    Object.assign(S, eraFresh(S.era + 1), keep);
    restart(S);
  } });
}

// ---------- actions ----------
const A = {
  zbuy() { if (S.px < P0[1].cost) return zNoPx(); S.px -= P0[1].cost; S.z.count = 1; zSay(tf(TERM.bought, { n: `COUNT.COM` })); A.zcount(); },
  zcount() { const z = S.z; if (z.countOn) z.countOn = 0; else if (zUsed() + 1 > z.ram) zOom(); else z.countOn = 1; },
  zauto() { const c = zAutoCost(); if (S.px < c) return zNoPx(); S.px -= c; S.z.auto++; zSay(tf(TERM.bought, { n: `AUTO.COM` })); A.zon(); },
  zon() {
    const z = S.z;
    if (z.autoOn >= z.auto) return;
    if (zUsed() + 2 > z.ram) return zOom();
    z.autoOn++;
    if (!z.seen.autoOn) { z.seen.autoOn = 1; zSay(TERM.tut.autoOn); }
  },
  zoff() { if (S.z.autoOn) S.z.autoOn--; },
  zpa(id) { const p = PA0.find(x => x.id === id); if (S.px < p.cost) return zNoPx(); S.px -= p.cost; S.z.pa[id] = 1; zSay([`> ${p.t[0]}: OK`, `> ${p.t[1]} : OK`]); },
  zram() { const r = R0[S.z.rl]; if (S.px < r.c) return zNoPx(); S.px -= r.c; S.z.ram = r.to; S.z.rl++; zSay(tf(TERM.memOk, { n: r.to })); },
  zhack() { if (S.hackCd <= 0) hackStart(0); },
  zcard() { if (!S.z.paid) { if (S.px < OS1) return zNoPx(); S.px -= OS1; S.z.paid = 1; } toEra1(); },
  hack() { if (S.hackCd <= 0) hackStart(S.era); },
  hw(r) {
    const t = track(r), lv = S.hw[r] || 0, st = t.s[lv];
    if (!st) return;
    if (S.px < st.c) return noPx();
    S.px -= st.c; S.hw[r] = lv + 1; S.st.buys = (S.st.buys || 0) + 1;
    note(N(r === `ram` ? `r` + st.to : r + st.to));
  },
  hg: w => hackGuess(w),
  hb: k => hackBracket(+k),
  hexit() { H = null; },
  buy: id => buyProg(id),
  pat(id) { const p = E().PA.find(x => x.id === id); if (S.patch[id]) return; if (S.px < p.cost) return noPx(); S.px -= p.cost; S.patch[id] = 1; S.st.buys = (S.st.buys || 0) + 1; refreshOwn(); },
  end() { const en = E().end; if (S.px < en.c) return noPx(); endEra(); },
  open: id => openProg(id),
  close: id => closeProg(id),
  more: id => runMore(id),
  less(id) { if (S.run[id] > 1) S.run[id]--; else closeProg(id); },
  tab(n) { S.tab = +n; },
  save() { save(); toast(U().saved); },
  exp() { dlg(U().expQ, { input: true, value: btoa(unescape(encodeURIComponent(JSON.stringify(S)))) }); },
  imp() {
    dlg(U().impQ, { input: true, cancel: true, ok: v => {
      try {
        const d = JSON.parse(decodeURIComponent(escape(atob(v.trim()))));
        if (!d || d.v !== 1) throw 0;
        restart(d);
      } catch (e) { dlg(U().badImp); }
    } });
  },
  hard() { dlg(U().resetQ, { cancel: true, ok: () => restart(null) }); },
  lang() { S.lang = S.lang === `fr` ? `en` : `fr`; document.documentElement.lang = S.lang; for (const k in cache) delete cache[k]; for (const id in W) { W[id].h = ``; W[id].el.querySelector(`.title b`).textContent = prog(id).file; } },
  sci() { S.opt.sci = S.opt.sci ? 0 : 1; },
  anim() { S.opt.anim = S.opt.anim ? 0 : 1; },
  tip() { dlg(T(E().HELP[Math.random() * E().HELP.length | 0])); },
  about() { dlg((E().about ? T(E().about) : U().aboutT) + `\n\n` + fill(T([`Act {n} of 6 - {os} ({y})`, `Acte {n} sur 6 - {os} ({y})`]), { n: S.era, os: E().os, y: E().year }) + (S.ng ? ` - ` + T([`New Game+`, `Nouvelle partie+`]) + (S.ng > 1 ? ` x${S.ng}` : ``) : ``)); },
  dlgOk() { const cb = dlgCb; const v = $(`dlgI`).value; dlgCb = dlgNoCb = null; dlgClose(); if (cb) cb(v); },
  dlgNo() { const cb = dlgNoCb; dlgCb = dlgNoCb = null; dlgClose(); if (cb) cb(); },
  pclaim: () => tkClaim(),
  nyi(k) { const l = NYI[k]; toast(T(l[Math.random() * l.length | 0])); },
  pfold() { S.opt.pfold = S.opt.pfold ? 0 : 1; },
};
const SAFE = new Set([`lang`, `exp`, `imp`, `hard`, `dlgOk`, `dlgNo`, `save`, `keep`, `ngplus`, `bsodOk`, `safeOk`]);
function act(s) {
  const i = s.indexOf(`:`), k = i < 0 ? s : s.slice(0, i), v = i < 0 ? `` : s.slice(i + 1);
  if (busy && !SAFE.has(k)) return;
  const h = (S.era && E().A && E().A[k]) || A[k];
  if (h) h(v);
  render();
}

// ---------- input ----------
let mx = innerWidth / 2, my = innerHeight / 2, dx = mx, dy = my, idle = 0, drag = null;
addEventListener(`mousemove`, e => {
  mx = e.clientX; my = e.clientY; idle = 0;
  if (drag) place(drag.el, e.clientX - drag.dx, e.clientY - drag.dy);
});
addEventListener(`mousedown`, e => {
  idle = 0;
  const t = e.target.closest(`[data-drag]`);
  if (t && !e.target.closest(`.x`) && W[t.dataset.drag]) { const el = W[t.dataset.drag].el; drag = { id: t.dataset.drag, el, dx: e.clientX - el.offsetLeft, dy: e.clientY - el.offsetTop }; }
  const w = e.target.closest(`.win[id^="w-"]`);
  if (w) front(w.id.slice(2));
});
addEventListener(`mouseup`, () => { if (drag) { S.pos[drag.id] = [drag.el.offsetLeft, drag.el.offsetTop]; drag = null; } });
function clickPix(e) {
  if (E().tap && E().tap(e) === false) return;
  const n = clickPow(); gain(n); S.clicks++; fx(e, `+` + fmtR(n));
}
document.addEventListener(`click`, e => {
  const t = e.target;
  if (t.closest(`#pix`)) return clickPix(e);
  if (t.closest(`#tBlock`)) { const n = zClick(); gain(n); S.clicks++; if (S.z.countOn) fx(e, `+` + fmtR(n)); return; }
  if (t.closest(`#stray`)) return catchStray(e);
  if (t.closest(`#tStray`)) return zCatch();
  const m = t.closest(`[data-menu]`);
  if (m) return toggleMenu(m);
  const a = t.closest(`[data-act]`);
  closeMenu();
  if (a && !a.classList.contains(`dis`)) act(a.dataset.act);
  down = null;
});
// the button was redrawn between press and release: the browser then sends no click at all, so act on release
let down = null;
addEventListener(`pointerdown`, e => {
  const a = e.target.closest(`[data-act]`);
  down = a && !a.classList.contains(`dis`) ? { el: a, act: a.dataset.act, x: e.clientX, y: e.clientY } : null;
}, true);
addEventListener(`pointerup`, e => {
  if (!down || down.el.isConnected || Math.hypot(e.clientX - down.x, e.clientY - down.y) >= 12) return;
  const a = down.act;
  down = null; closeMenu(); act(a);
}, true);
// windows opened before the page had its real size (background tab) get placed again
const relayout = () => { for (const id in W) { const [x, y] = S.pos[id] || defPos(id); place(W[id].el, x, y); } };
addEventListener(`resize`, relayout);
addEventListener(`beforeunload`, save);
document.addEventListener(`visibilitychange`, () => { if (document.hidden) save(); });

// ---------- loops ----------
function render() {
  const b = document.body.classList;
  b.toggle(`e0`, S.era === 0); b.toggle(`e1`, S.era >= 1);
  for (let i = 1; i <= 6; i++) b.toggle(`s` + i, S.era >= 1 && E().skin === i);
  b.toggle(`nocursor`, S.era === 0 || (S.era === 1 && !S.run.cursor));
  b.toggle(`cga`, S.era === 1 && !!S.run.cga);
  b.toggle(`noanim`, !S.opt.anim);
  if (S.era === 0) zRender(); else deskRender();
  piRender();
}
let prev = performance.now(), achT = 0, saveT = 0;
function tick() {
  const now = performance.now(), dt = Math.min((now - prev) / 1000, 2);
  prev = now;
  S.time += dt; S.hackCd = Math.max(0, S.hackCd - dt);
  if (S.era === 0) { if (!busy) gain(zPerSec() * dt); zTriggers(); }
  else if (!busy) {
    idle += dt;
    const on = !!S.run.saver && idle >= 20;
    if (on !== saverOn) { saverOn = on; $(`saver`).classList.toggle(`on`, on); if (on) { S.once.saverOn = 1; saverStart(); } else saverStop(); }
    gain(perSec() * dt); fragTick(dt); milestones();
    if (E().tick) E().tick(dt);
    piTick(dt);
  }
  if ((achT += dt) >= 1) { achT = 0; checkAch(); }
  if ((saveT += dt) >= 10) { saveT = 0; save(); }
  render();
}
let fprev = performance.now();
function frame(now) {
  const dt = Math.min((now - fprev) / 1000, 0.1);
  fprev = now;
  dx += (mx - dx) * 0.14; dy += (my - dy) * 0.14;
  $(`dot`).style.transform = `translate(${dx - 4}px,${dy - 4}px)`;
  if (S.era === 0) zStrayTick(dt); else strayTick(dt);
  vizFrame(now);
  requestAnimationFrame(frame);
}

// ---------- start ----------
// era changes, imports and resets restart in place: the page is never reloaded (some hosts, like the artifact viewer, refuse it)
function restart(d) {
  for (const id in W) killWin(id);
  for (const k in cache) delete cache[k];
  if (saverOn) { saverOn = false; saverStop(); }
  busy = false; noSave = false; H = null; dlgCb = dlgNoCb = null; dq.length = 0; tq.length = 0; drag = null; saverOn = false;
  for (const id of [`boot`, `bsod`, `safe`, `dead`, `notif`, `fin`, `saver`, `dlg`, `drop`, `toast`, `stray`, `tStray`]) if ($(id)) $(id).classList.remove(`on`, `green`);
  document.body.classList.remove(`flick`, `lag`, `shake`);
  load(d === undefined ? undefined : d && JSON.parse(JSON.stringify(d)));
  start();
  save();
}
function start() {
  refreshOwn();
  document.documentElement.lang = S.lang;
  render();
  if (S.era === 0) {
    if (S.z.paid) toEra1();
    else if (!S.z.seen.boot) zBoot();
  } else {
    for (const id in S.run) if (S.run[id] && prog(id)) makeWin(id);
    setTimeout(relayout, 300);
    if (!S.once[`boot` + S.era]) {
      S.once[`boot` + S.era] = 1; note(N(`start`));
      if (E().enter) E().enter();
      $(`boot`).innerHTML = `<div><i></i>${E().os}<br><br><span class="dim">${esc(T(E().bootT || [`Welcome. Mostly.`, `Bienvenue. En gros.`]))}</span></div>`;
      $(`boot`).classList.add(`on`);
      setTimeout(() => $(`boot`).classList.remove(`on`), 2200);
    }
    const away = (Date.now() - S.last) / 1000;
    if (S.run.clock && away > 60) {
      const g = basePerSec() * Math.min(away, 8 * 3600) * (flag(`offline`) ? 1 : 0.5);
      if (g > 0) { gain(g); S.once.offline = 1; dlg(U().away(dur(away), fmt(g))); }
    }
    if (E().load) E().load();
  }
}
load();
start();
setInterval(tick, 100);
requestAnimationFrame(frame);
