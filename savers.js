// Screensavers: each era shows the one its program is named after.
// 1 screensaver.scr = flying pixels (CSS, in index.html), 2 STARS.SCR = starfield, 3 3D Pipes, 4 Mystify,
// 5 Night Shift = the iPhone lock screen tinted orange, 6 Focus Session = a focus timer ring.

const SV = { raf: 0, era: 0, t0: 0 };
const SVT = {
  slide: [`slide to unlock`, `glisser pour déverrouiller`],
  slide7: [`slide to unlock`, `faire glisser pour déverrouiller`], swipe: [`Swipe up to open`, `Balayez vers le haut pour ouvrir`],
  focus: [`Focus session`, `Session de concentration`],
  boost: [`Production x{m} while you're away`, `Production x{m} pendant ton absence`],
};

function saverStart() {
  const el = $(`saver`), e = S.era;
  SV.era = e; SV.t0 = performance.now();
  el.dataset.k = e;
  if (e === 1) return;
  if (e === 5 || e === 6) {
    const d = new Date();
    el.innerHTML = e === 5
      ? `<div class="lock"><b class="lt"></b><small class="ld"></small></div><div class="unl"><i></i><span>${T([SVT.slide, SVT.slide7, SVT.swipe, SVT.swipe][phoneLv()])}</span></div>`
      : `<div class="focus"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" class="tr"/><circle cx="60" cy="60" r="52" class="pr"/></svg><b class="ft"></b><span>${T(SVT.focus)}</span><small>${fill(T(SVT.boost), { m: saverMul() })}</small></div>`;
    svClock();
  } else {
    el.innerHTML = `<canvas></canvas>`;
    const cv = el.firstChild; cv.width = innerWidth; cv.height = innerHeight;
    SV.st = e === 2 ? starsInit(cv) : e === 3 ? pipesInit(cv) : mystInit(cv);
  }
  cancelAnimationFrame(SV.raf);
  const loop = now => { if (!saverOn) return; svFrame(now); SV.raf = requestAnimationFrame(loop); };
  SV.raf = requestAnimationFrame(loop);
}
function saverStop() { cancelAnimationFrame(SV.raf); if (SV.era !== 1) $(`saver`).innerHTML = SAVER1; }
const SAVER1 = `<i></i><i style="left:20%;top:10%;animation-delay:-2s"></i><i style="left:70%;top:30%;animation-delay:-4s"></i><i style="left:40%;top:70%;animation-delay:-1s"></i><i style="left:85%;top:80%;animation-delay:-5s"></i><i style="left:10%;top:50%;animation-delay:-3s"></i><span>PIXEL-OS</span>`;

function svClock() {
  const el = $(`saver`), d = new Date();
  if (SV.era === 5) {
    el.querySelector(`.lt`).textContent = d.toTimeString().slice(0, 5);
    el.querySelector(`.ld`).textContent = d.toLocaleDateString(loc(), { weekday: `long`, day: `numeric`, month: `long` });
  } else {
    // counts down 25 minutes from the moment the saver started
    const left = Math.max(0, 1500 - (performance.now() - SV.t0) / 1000), m = Math.floor(left / 60), s = Math.floor(left % 60);
    el.querySelector(`.ft`).textContent = `${m}:${String(s).padStart(2, `0`)}`;
    el.querySelector(`.pr`).style.strokeDashoffset = (2 * Math.PI * 52 * (1 - left / 1500)).toFixed(1);
  }
}
let svLast = 0;
function svFrame(now) {
  if (SV.era === 5 || SV.era === 6) { if (now - svLast > 250) { svLast = now; svClock(); } return; }
  const cv = $(`saver`).firstChild;
  if (!cv || !cv.getContext) return;
  (SV.era === 2 ? starsFrame : SV.era === 3 ? pipesFrame : mystFrame)(cv.getContext(`2d`), cv, SV.st);
}

// ---------- STARS.SCR: flying through a starfield ----------
function starsInit(cv) {
  const st = [];
  for (let i = 0; i < 260; i++) st.push({ x: rnd(-1, 1), y: rnd(-1, 1), z: rnd(0.05, 1) });
  return st;
}
function starsFrame(x, cv, st) {
  const w = cv.width, h = cv.height, cx = w / 2, cy = h / 2;
  x.fillStyle = `#000`; x.fillRect(0, 0, w, h);
  for (const s of st) {
    s.z -= 0.006;
    if (s.z <= 0.02) { s.x = rnd(-1, 1); s.y = rnd(-1, 1); s.z = 1; }
    const px = cx + s.x / s.z * cx * 0.6, py = cy + s.y / s.z * cy * 0.6;
    if (px < 0 || py < 0 || px > w || py > h) { s.z = 0; continue; }
    const r = Math.max(1, (1 - s.z) * 3.2);
    x.fillStyle = s.z > 0.6 ? `#888` : `#fff`;
    x.fillRect(px, py, r, r);
  }
}

// ---------- 3D Pipes: pipes growing on a 3D grid, with balls at the elbows ----------
const PIPE_COL = [[230, 40, 40], [40, 170, 60], [40, 90, 230], [230, 200, 40], [200, 60, 200], [40, 200, 210], [230, 130, 30], [200, 200, 200]];
function pipesInit(cv) {
  const x = cv.getContext(`2d`); x.fillStyle = `#000`; x.fillRect(0, 0, cv.width, cv.height);
  return { cell: Math.max(26, Math.round(Math.min(cv.width, cv.height) / 18)), pipes: [], used: new Set(), segs: 0, acc: 0 };
}
const DIRS = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
function pipeNew(st, cv) {
  const N = 12, p = { x: rnd(0, N) | 0, y: rnd(0, N) | 0, z: rnd(0, N) | 0, d: DIRS[rnd(0, 6) | 0], c: PIPE_COL[rnd(0, PIPE_COL.length) | 0], n: 0 };
  st.pipes = [p];
}
// oblique projection: z goes up and to the right, smaller further away
function proj(st, cv, gx, gy, gz) {
  const c = st.cell, k = 1 - gz * 0.025;
  return [cv.width / 2 + (gx - 6) * c * k + gz * c * 0.45, cv.height / 2 + (gy - 6) * c * k - gz * c * 0.3, k];
}
function pipeSeg(x, st, cv, a, b, col) {
  const [x1, y1, k1] = proj(st, cv, a[0], a[1], a[2]), [x2, y2] = proj(st, cv, b[0], b[1], b[2]);
  const w = st.cell * 0.42 * k1, [r, g, bl] = col;
  x.lineCap = `butt`;
  x.strokeStyle = `rgb(${r * 0.35},${g * 0.35},${bl * 0.35})`; x.lineWidth = w; x.beginPath(); x.moveTo(x1, y1); x.lineTo(x2, y2); x.stroke();
  x.strokeStyle = `rgb(${r * 0.75},${g * 0.75},${bl * 0.75})`; x.lineWidth = w * 0.7; x.stroke();
  x.strokeStyle = `rgb(${Math.min(255, r + 90)},${Math.min(255, g + 90)},${Math.min(255, bl + 90)})`; x.lineWidth = w * 0.22;
  x.beginPath(); x.moveTo(x1 - w * 0.12, y1 - w * 0.12); x.lineTo(x2 - w * 0.12, y2 - w * 0.12); x.stroke();
}
function pipeBall(x, st, cv, a, col) {
  const [px, py, k] = proj(st, cv, a[0], a[1], a[2]), r = st.cell * 0.3 * k, [cr, cg, cb] = col;
  const gr = x.createRadialGradient(px - r * 0.35, py - r * 0.35, r * 0.1, px, py, r);
  gr.addColorStop(0, `rgb(${Math.min(255, cr + 120)},${Math.min(255, cg + 120)},${Math.min(255, cb + 120)})`);
  gr.addColorStop(0.5, `rgb(${cr},${cg},${cb})`); gr.addColorStop(1, `rgb(${cr * 0.3},${cg * 0.3},${cb * 0.3})`);
  x.fillStyle = gr; x.beginPath(); x.arc(px, py, r, 0, 7); x.fill();
}
function pipesFrame(x, cv, st) {
  if ((st.acc += 1) % 3) return;
  if (!st.pipes.length || st.pipes[0].dead) {
    if (st.segs > 700) { x.fillStyle = `#000`; x.fillRect(0, 0, cv.width, cv.height); st.segs = 0; st.used.clear(); }
    pipeNew(st, cv);
  }
  const p = st.pipes[0], key = (a, b, c) => a + `,` + b + `,` + c;
  let d = p.d;
  if (Math.random() < 0.25 || p.n > 6) {
    const opts = DIRS.filter(o => o !== d && !(o[0] === -d[0] && o[1] === -d[1] && o[2] === -d[2]));
    d = opts[Math.random() * opts.length | 0];
  }
  const nx = p.x + d[0], ny = p.y + d[1], nz = p.z + d[2];
  // blocked by the edge or another pipe: try another direction next time, give up after a few tries
  if (nx < 0 || ny < 0 || nz < 0 || nx > 12 || ny > 12 || nz > 12 || st.used.has(key(nx, ny, nz))) { p.stuck = (p.stuck || 0) + 1; p.n = 9; if (p.stuck > 8) p.dead = true; return; }
  if (d !== p.d) { pipeBall(x, st, cv, [p.x, p.y, p.z], p.c); p.n = 0; }
  pipeSeg(x, st, cv, [p.x, p.y, p.z], [nx, ny, nz], p.c);
  st.used.add(key(nx, ny, nz));
  Object.assign(p, { x: nx, y: ny, z: nz, d, n: p.n + 1 }); st.segs++;
  if (st.segs % 120 === 0) p.dead = true;
}

// ---------- Mystify: two bouncing polygons with fading trails ----------
function mystInit(cv) {
  const poly = () => ({ v: Array.from({ length: 4 }, () => ({ x: rnd(0, cv.width), y: rnd(0, cv.height), dx: rnd(2, 5) * (Math.random() < 0.5 ? -1 : 1), dy: rnd(2, 5) * (Math.random() < 0.5 ? -1 : 1) })), h: rnd(0, 360), trail: [] });
  return [poly(), poly()];
}
function mystFrame(x, cv, ps) {
  x.fillStyle = `#000`; x.fillRect(0, 0, cv.width, cv.height);
  for (const p of ps) {
    for (const v of p.v) {
      v.x += v.dx; v.y += v.dy;
      if (v.x < 0 || v.x > cv.width) v.dx = -v.dx;
      if (v.y < 0 || v.y > cv.height) v.dy = -v.dy;
    }
    p.h = (p.h + 0.4) % 360;
    p.trail.unshift(p.v.map(v => [v.x, v.y]));
    if (p.trail.length > 7) p.trail.pop();
    p.trail.forEach((pts, i) => {
      if (i % 2) return;
      x.strokeStyle = `hsla(${p.h},100%,60%,${1 - i / 8})`; x.lineWidth = 1.5;
      x.beginPath(); pts.forEach(([a, b], j) => (j ? x.lineTo(a, b) : x.moveTo(a, b))); x.closePath(); x.stroke();
    });
  }
}
