// For players who restart a lot: automation unlocked by New Game+, program milestones that double production,
// and a rule to pick at the start of each New Game+ so no two runs feel the same.

// ---------- milestones: each program doubles its production at 10, 25, 50, 100, 150, 200... copies ----------
const MILES = [10, 25, 50, 100, 150, 200, 250, 300];
const mileN = id => { const b = S.bought[id] || 0; let n = 0; for (const m of MILES) if (b >= m) n++; return n; };
const mileMul = id => 2 ** mileN(id);
const mileNext = id => MILES.find(m => (S.bought[id] || 0) < m);
const MLT = { next: [`Next milestone: {n} copies (production x2)`, `Prochain palier : {n} exemplaires (production x2)`], got: [`Milestone! {a}: {n} copies, production x2.`, `Palier ! {a} : {n} exemplaires, production x2.`] };
function mileCheck(id) { const b = S.bought[id] || 0; if (MILES.includes(b)) { toast(fill(T(MLT.got), { a: prog(id).file, n: b })); S.st.miles = (S.st.miles || 0) + 1; } }

// ---------- automation ----------
const AUTOS = [
  { id: `prog`, ng: 2, t: [`Buy programs`, `Acheter les programmes`], d: [`Buys every program you can afford and launches the copies that fit in memory.`, `Achète tous les programmes abordables et lance les exemplaires qui tiennent en mémoire.`] },
  { id: `skip0`, ng: 2, t: [`Skip the tutorial`, `Passer le tuto`], d: [`New Game+ starts at act 1. You still get the tutorial's reward.`, `La Nouvelle partie+ commence à l'acte 1. Tu gardes quand même la récompense du tuto.`] },
  { id: `pat`, ng: 3, t: [`Buy patches`, `Acheter les patchs`], d: [`Installs every patch you can afford, cheapest first.`, `Installe tous les patchs abordables, du moins cher au plus cher.`] },
  { id: `hw`, ng: 4, t: [`Buy hardware`, `Acheter le matériel`], d: [`Buys every hardware upgrade you can afford.`, `Achète toutes les améliorations matérielles abordables.`] },
  { id: `end`, ng: 5, t: [`Next act on its own`, `Acte suivant tout seul`], d: [`Goes to the next act as soon as it's paid for. The last act still waits for you.`, `Passe à l'acte suivant dès qu'il est payé. Le dernier acte t'attend quand même.`] },
];
const AUT = {
  title: [`Automation`, `Automatisation`], lock: [`Unlocked at New Game+ {n}`, `Débloqué à la Nouvelle partie+ {n}`], on: [`ON`, `ACTIVÉ`], off: [`OFF`, `DÉSACTIVÉ`],
  how: [`Automations unlock as you restart. Turn them on or off whenever you want.`, `Les automatisations se débloquent en recommençant. Active-les ou coupe-les quand tu veux.`],
  rule: [`Rule of this run: {a}`, `Règle de la partie : {a}`], none: [`no rule`, `aucune règle`],
};
const autoOn = id => { const a = AUTOS.find(x => x.id === id); return !!(S.auto && S.auto[id]) && (S.ng || 0) >= a.ng; };
const autoOpen = () => (S.ng || 0) >= 2;
let autoT = 0;
function autoTick(dt) {
  if (!S.era || busy || (autoT += dt) < 0.5) return;
  autoT = 0;
  const e = E(), lim = Math.max(S.total * 2.5, 60);
  if (autoOn(`hw`)) for (const tr of e.HW) { const st = tr.s[S.hw[tr.r] || 0]; if (st && S.px >= hwC(st)) A.hw(tr.r); }
  if (autoOn(`pat`)) for (const p of e.PA) if (!S.patch[p.id] && (!p.req || S.bought[p.req]) && S.px >= patC(p)) A.pat(p.id);
  if (autoOn(`prog`)) {
    for (let i = 0; i < 20; i++) {
      const can = e.P.filter(p => p.cost && !p.hidden && !p.nostore && (p.multi || !S.bought[p.id]) && (S.bought[p.id] || costOf(p.id) <= lim) && S.px >= costOf(p.id) && !(e.queued && e.queued(p.id)));
      if (!can.length) break;
      const p = can.sort((a, b) => costOf(a.id) - costOf(b.id))[0], c = costOf(p.id);
      S.px -= c;
      if (e.buy && e.buy(p.id)) continue;
      S.bought[p.id] = (S.bought[p.id] || 0) + 1; S.st.buys = (S.st.buys || 0) + 1;
      if (S.bought[p.id] === 1) note(N(p.id));
      mileCheck(p.id);
    }
    // launch what fits: new programs once, then more copies of the producers
    for (const p of e.P) {
      if (!S.bought[p.id] || p.fixed || (e.canOpen && !e.canOpen(p.id))) continue;
      if (!p.multi) { if (!S.run[p.id] && kbOf(p.id) <= free()) { S.run[p.id] = 1; makeWin(p.id); if (e.opened) e.opened(p.id); } continue; }
      while ((S.run[p.id] || 0) < S.bought[p.id] && kbOf(p.id) <= free()) { S.run[p.id] = (S.run[p.id] || 0) + 1; makeWin(p.id); }
    }
  }
  // the last act (6, or 7 in New Game+) ends with its own scene: never skipped
  if (autoOn(`end`) && (S.era < 6 || (S.era === 6 && S.ng)) && e.HW.every(tr => (S.hw[tr.r] || 0) >= tr.s.length) && S.px >= e.end.c && !$(`dlg`).classList.contains(`on`)) endEraNow();
}

// ---------- the rule of the run ----------
// p/c/cost/ram multiply production, clicks, prices and memory; strayF/strayV the stray pixels; ev the dilemmas; flip turns the screen
const RULES = [
  { id: `fairy`, pts: 3, p: 0.5, c: 10, t: [`Fairy fingers`, `Doigts de fée`], d: [`Clicks x10, production halved.`, `Clics x10, production divisée par 2.`] },
  { id: `mad`, pts: 4, p: 3, c: 0.2, t: [`Mad factory`, `Usine folle`], d: [`Production x3, clicks /5. Let the machines work.`, `Production x3, clics divisés par 5. Laisse bosser les machines.`] },
  { id: `sale`, pts: 3, cost: 0.5, ram: 0.7, t: [`Clearance sale`, `Grandes soldes`], d: [`Everything costs half price, but memory is 30% smaller.`, `Tout est à moitié prix, mais la mémoire est 30 % plus petite.`] },
  { id: `wild`, pts: 2, strayF: 3, strayV: 5, t: [`Wild pixels`, `Pixels sauvages`], d: [`Stray pixels come 4 times more often and are worth x5. Bad ones too.`, `Les pixels égarés passent 4 fois plus souvent et valent x5. Les mauvais aussi.`] },
  { id: `upside`, pts: 5, p: 2, flip: 1, t: [`Upside down`, `À l'envers`], d: [`The whole screen is upside down for the whole run. Production x2. Good luck.`, `Tout l'écran est à l'envers pendant toute la partie. Production x2. Bon courage.`] },
  { id: `goldfish`, pts: 3, ram: 2, cost: 2, t: [`Goldfish memory`, `Mémoire de poisson rouge`], d: [`Memory x2, but everything costs twice as much.`, `Mémoire x2, mais tout coûte deux fois plus cher.`] },
  { id: `drama`, pts: 2, ev: 4, evV: 3, t: [`Drama queen`, `Tragédienne`], d: [`A dilemma every minute or so, with rewards x3.`, `Un dilemme toutes les minutes environ, avec des récompenses x3.`] },
  { id: `cats`, pts: 2, cat: 60, t: [`Cats everywhere`, `Des chats partout`], d: [`Schrödinger's cat brings a surprise every minute, in every act.`, `Le chat de Schrödinger apporte une surprise toutes les minutes, dans tous les actes.`] },
  { id: `glass`, pts: 4, p: 4, c: 4, ram: 0.5, t: [`Glass cannon`, `Canon de verre`], d: [`Production and clicks x4, but half the memory.`, `Production et clics x4, mais moitié moins de mémoire.`] },
];
const rule = () => RULES.find(r => r.id === S.rule) || {};
const ruleP = () => rule().p || 1;
const ruleC = () => rule().c || 1;
const ruleCost = () => rule().cost || 1;
const patC = p => p.cost * ruleCost();
const ruleRam = r => (r === `ram` ? rule().ram || 1 : 1);
const RLT = { title: [`Pick the rule of this run`, `Choisis la règle de cette partie`], sub: [`Each rule changes the run and gives reset points ◆ right away.`, `Chaque règle change la partie et donne des points de reset ◆ tout de suite.`], none: [`No rule`, `Pas de règle`], pts: [`+{n} ◆`, `+{n} ◆`] };
function rulesShow() {
  if (!$(`rules`)) document.body.insertAdjacentHTML(`beforeend`, `<div id="rules"></div>`);
  const pick = shuffle(RULES.slice()).slice(0, 3);
  $(`rules`).innerHTML = `<div class="rp"><h2>${T(RLT.title)}</h2><p>${T(RLT.sub)}</p><div class="rcs">${pick.map(r => `<div class="rc" data-act="rpick:${r.id}"><b>${T(r.t)}</b><span>${T(r.d)}</span><i>${fill(T(RLT.pts), { n: r.pts })}</i></div>`).join(``)}</div><button class="btn" data-act="rpick:none">${T(RLT.none)}</button></div>`;
  $(`rules`).classList.add(`on`);
}
let ruleCat = 60;
function ruleTick(dt) {
  const r = rule();
  if (r.cat && S.era && typeof X7 !== `undefined` && (ruleCat -= dt) <= 0) {
    ruleCat = r.cat;
    const o = X7.cat[Math.random() * X7.cat.length | 0];
    evApply(Object.assign({}, o, { m: [TRT.cat[0] + o.m[0], TRT.cat[1] + o.m[1]] }));
  }
}

// ---------- the automation panel ----------
function autoRender() {
  if (!$(`autop`)) document.body.insertAdjacentHTML(`beforeend`, `<div id="autop"></div>`);
  const row = a => {
    const lock = (S.ng || 0) < a.ng, on = autoOn(a.id);
    return `<div class="ar ${lock ? `lock` : ``}"><div><b>${T(a.t)}</b><span>${lock ? fill(T(AUT.lock), { n: a.ng }) : T(a.d)}</span></div>${lock ? `` : `<button class="btn ${on ? `on` : ``}" data-act="atog:${a.id}">${T(on ? AUT.on : AUT.off)}</button>`}</div>`;
  };
  $(`autop`).innerHTML = `<div class="rp"><h2>${T(AUT.title)}</h2><p>${T(AUT.how)}</p>${AUTOS.map(row).join(``)}<p class="rnow">${fill(T(AUT.rule), { a: S.rule && S.rule !== `none` ? T(rule().t) : T(AUT.none) })}</p><button class="btn" data-act="aclose">${T(TRT.close)}</button></div>`;
}
const AUTO_A = {
  auto() { autoRender(); $(`autop`).classList.add(`on`); },
  aclose() { $(`autop`).classList.remove(`on`); },
  atog(id) { S.auto = S.auto || {}; S.auto[id] = S.auto[id] ? 0 : 1; autoRender(); save(); },
  rpick(id) {
    S.rule = id;
    const r = RULES.find(x => x.id === id);
    if (r) { S.tp = (S.tp || 0) + r.pts; S.st.rules = (S.st.rules || 0) + 1; }
    $(`rules`).classList.remove(`on`); save();
  },
};

ACH.push(
  [`auto1`, [`Hands free`, `Sans les mains`], [`Turn on an automation.`, `Activer une automatisation.`], () => AUTOS.some(a => autoOn(a.id))],
  [`miles`, [`Milestone`, `Palier`], [`Reach a program milestone.`, `Atteindre un palier de programme.`], () => (S.st.miles || 0) >= 1],
  [`rules5`, [`House rules`, `Règles maison`], [`Play 5 runs with a rule.`, `Jouer 5 parties avec une règle.`], () => (S.st.rules || 0) >= 5],
  [`upside`, [`Downside up`, `À l'endroit de l'envers`], [`Pick the Upside down rule.`, `Choisir la règle À l'envers.`], () => S.rule === `upside`],
);
