// Balancing bot. Load in a TEST tab (http://127.0.0.1:8766), never in the player's tab:
// fetch('tools/sim.js').then(r => r.text()).then(eval); simEra(2)
// Plays one era greedily (2 clicks/s, no idle bonus) and returns the timeline in minutes.
function simEra(era, o = {}) {
  noSave = true;
  const keepAch = S.ach.slice();
  Object.assign(S, eraFresh(era));
  S.ach = o.ach || keepAch;
  refreshOwn();
  for (const id in W) killWin(id);
  const e = E(), ev = [], cps = o.cps || 2, prodIds = e.P.filter(p => p.prod).map(p => p.id);
  const keep = e.simKeep || [];
  const singles = e.P.filter(p => !p.prod && !p.fixed && p.id !== `install` && !p.hidden && !p.nostore).map(p => p.id);
  S.bought.score = 1; S.run.score = 1;
  if (e.enter) e.enter();
  const buy = id => { S.px -= costOf(id); if (!(e.buy && e.buy(id))) S.bought[id] = (S.bought[id] || 0) + 1; };
  let t = 0, end = 0;
  const log = s => ev.push(Math.round(t / 60) + `:` + s + (o.ps ? `@` + Math.round(basePerSec()) : ``));
  function alloc() {
    for (const id in S.run) if (!prog(id).prod && ![`game`, `install`, `score`, ...keep].includes(id)) S.run[id] = 0;
    for (const id of prodIds) S.run[id] = 0;
    for (const id of keep) if (S.bought[id]) S.run[id] = 1;
    const order = prodIds.filter(id => S.bought[id]).sort((a, b) => progRate(prog(b)) / kbOf(b) - progRate(prog(a)) / kbOf(a));
    for (const id of order) { while (S.run[id] < S.bought[id] && kbOf(id) <= free()) S.run[id]++; }
    let best = basePerSec(), better = true;
    while (better) {
      better = false;
      for (const id of order) {
        if (!S.run[id]) continue;
        S.run[id]--;
        const v = basePerSec();
        if (v > best) { best = v; better = true; } else S.run[id]++;
      }
    }
  }
  while (t < (o.max || 5 * 3600) && !end) {
    t++;
    for (let i = 0; i < cps; i++) { gain(clickPow()); S.clicks++; }
    gain(perSec()); fragTick(1); milestones();
    if (e.tick) e.tick(1);
    if (e.simTick) e.simTick(1);
    if (t % 180 === 0 && S.bought.hack) { gain(Math.max(200, perSec() * 60)); S.st.hacks++; }
    if (t % 40 === 0 && S.total > 200) gain(Math.max(20, basePerSec() * 30 + clickPow() * 20) * (flag(`strayx3`) ? 3 : 1) * 0.65);
    if (t % 5) continue;
    checkAch();
    let did = true;
    while (did && !end) {
      did = false;
      let maxed = true;
      for (const tr of e.HW) {
        const st = tr.s[S.hw[tr.r] || 0];
        if (!st) continue;
        maxed = false;
        if (S.px >= st.c) { S.px -= st.c; S.hw[tr.r] = (S.hw[tr.r] || 0) + 1; log(tr.r + st.to); did = true; }
      }
      if (maxed && S.px >= e.end.c) { log(`END`); end = t; break; }
      for (const p of e.PA) if (!S.patch[p.id] && (!p.req || S.bought[p.req]) && S.px >= p.cost) { S.px -= p.cost; S.patch[p.id] = 1; refreshOwn(); log(p.id); did = true; }
      for (const id of singles) if (!S.bought[id] && !(e.queued && e.queued(id)) && S.px >= costOf(id)) { buy(id); log(id); did = true; }
      alloc();
      const cand = prodIds.filter(id => S.total * 2.5 >= prog(id).cost || S.bought[id]);
      let bestId = null, bestGain = 0;
      for (const id of cand) {
        const c = costOf(id);
        if (S.px < c) continue;
        const before = basePerSec();
        S.bought[id] = (S.bought[id] || 0) + 1; alloc();
        const g = (basePerSec() - before) / c;
        S.bought[id]--; alloc();
        if (g > bestGain) { bestGain = g; bestId = id; }
      }
      if (bestId) { if (!S.bought[bestId]) log(bestId); buy(bestId); alloc(); did = !(e.queued && e.queued(bestId) > 1); }
    }
  }
  return { min: Math.round(t / 60), ps: fmt(basePerSec()), ach: S.ach.length, ev: ev.join(` `) };
}
