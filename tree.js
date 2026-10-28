// The skill tree, from the second New Game+ on. A map of skills around the core, in four branches
// (Factory, Finger, Shortcuts, Chaos) with synergies between them. Most skills have levels; keystones have one big effect.
// Points come from each New Game+ and from each act finished while the tree is open. The tree resets for free.
const TU = 118;
// k = effect key, v = value per level (added up over levels and skills). req = all needed, any = one of them needed.
const TNODES = [
  { id: `core`, x: 0, y: 0, ic: `pixel`, max: 1, c: 0, ks: 1, t: [`The core`, `Le noyau`], d: [`The pixel. Everything starts here.`, `Le pixel. Tout part de lui.`] },
  // ----- Factory: production (up) -----
  { id: `p1`, x: 0, y: -1, ic: `gear`, max: 5, c: 1, req: [`core`], k: `p`, v: 0.25, t: [`Strong coffee`, `Café serré`], d: [`+25% production per level.`, `+25 % de production par niveau.`] },
  { id: `p2`, x: -1, y: -2, ic: `chip`, max: 5, c: 2, req: [`p1`], k: `p`, v: 0.25, t: [`Overtime`, `Heures sup`], d: [`+25% production per level.`, `+25 % de production par niveau.`] },
  { id: `p3`, x: 1, y: -2, ic: `moon`, max: 1, c: 2, req: [`p1`], k: `offline`, v: 1, t: [`Sleep mode`, `Mode veille`], d: [`Offline progress at 100% in every act, from the start.`, `Progression hors ligne à 100 % dans tous les actes, dès le début.`] },
  { id: `p4`, x: -1, y: -3, ic: `server`, max: 5, c: 3, req: [`p2`], k: `p`, v: 0.5, t: [`Pixel factory`, `Usine à pixels`], d: [`+50% production per level.`, `+50 % de production par niveau.`] },
  { id: `p5`, x: 1, y: -3, ic: `clock`, max: 3, c: 2, req: [`p3`], k: `offh`, v: 8, t: [`Deep sleep`, `Sommeil profond`], d: [`Offline progress counts 8 more hours per level (8 h at first).`, `La progression hors ligne compte 8 h de plus par niveau (8 h au départ).`] },
  { id: `p6`, x: 0, y: -4, ic: `bolt`, max: 5, c: 4, any: [`p4`, `p5`], k: `p`, v: 1, t: [`Assembly line`, `Ligne de montage`], d: [`+100% production per level.`, `+100 % de production par niveau.`] },
  { id: `pK`, x: 0, y: -5.2, ic: `robot`, max: 1, c: 12, ks: 1, req: [`p6`], k: `pm`, v: 2, t: [`The dev slept`, `Le dev a dormi`], d: [`KEYSTONE. Production x3. First time since 1984.`, `PIERRE ANGULAIRE. Production x3. Une première depuis 1984.`] },
  { id: `pK2`, x: -2, y: -4, ic: `star`, max: 1, c: 10, ks: 1, req: [`p4`], k: `ng`, v: 0.5, t: [`Prestige inflation`, `Inflation du prestige`], d: [`KEYSTONE. Each New Game+ gives x2.5 instead of x2.`, `PIERRE ANGULAIRE. Chaque Nouvelle partie+ donne x2,5 au lieu de x2.`] },
  // ----- Finger: clicks (right) -----
  { id: `c1`, x: 1, y: 0, ic: `arrow`, max: 5, c: 1, req: [`core`], k: `c`, v: 0.5, t: [`Warmed-up finger`, `Doigt échauffé`], d: [`+50% clicks per level.`, `+50 % de clics par niveau.`] },
  { id: `c2`, x: 2, y: -1, ic: `calc`, max: 5, c: 2, req: [`c1`], k: `cpx`, v: 0.01, t: [`Clever click`, `Clic malin`], d: [`Each click also gives 1% of your px/s per level.`, `Chaque clic donne aussi 1 % de tes px/s par niveau.`] },
  { id: `c3`, x: 2, y: 1, ic: `autoclick`, max: 5, c: 2, req: [`c1`], k: `cps`, v: 2, t: [`Ghost finger`, `Doigt fantôme`], d: [`2 free clicks per second per level, even when you're away.`, `2 clics gratuits par seconde par niveau, même quand tu n'es pas là.`] },
  { id: `c4`, x: 3, y: -1, ic: `trophy`, max: 5, c: 3, req: [`c2`], k: `c`, v: 1, t: [`Pro glove`, `Gant de pro`], d: [`+100% clicks per level.`, `+100 % de clics par niveau.`] },
  { id: `c5`, x: 3, y: 1, ic: `people`, max: 5, c: 3, req: [`c3`], k: `cps`, v: 5, t: [`Ghost reinforcements`, `Fantômes en renfort`], d: [`5 more free clicks per second per level.`, `5 clics gratuits de plus par seconde par niveau.`] },
  { id: `c6`, x: 4, y: 0, ic: `bug`, max: 3, c: 4, any: [`c4`, `c5`], k: `glitch`, v: 0.01, t: [`Glitch`, `Glitch`], d: [`1% chance per level that a click is worth 100 clicks.`, `1 % de chance par niveau qu'un clic en vaille 100.`] },
  { id: `cK`, x: 5.2, y: 0, ic: `star`, max: 1, c: 12, ks: 1, req: [`c6`], k: `cm`, v: 4, t: [`Golden finger`, `Doigt d'or`], d: [`KEYSTONE. Clicks x5.`, `PIERRE ANGULAIRE. Clics x5.`] },
  { id: `cK2`, x: 4, y: -2, ic: `robot`, max: 1, c: 10, ks: 1, req: [`c4`], k: `cps`, v: 25, t: [`Invisible hand`, `Main invisible`], d: [`KEYSTONE. 25 more free clicks per second.`, `PIERRE ANGULAIRE. 25 clics gratuits de plus par seconde.`] },
  // ----- Shortcuts: economy (down) -----
  { id: `r1`, x: 0, y: 1, ic: `chip`, max: 3, c: 1, req: [`core`], k: `ramlv`, v: 1, t: [`Spare RAM stick`, `Barrette de rechange`], d: [`Every act starts with one more memory upgrade per level.`, `Chaque acte commence avec une amélioration de mémoire de plus par niveau.`] },
  { id: `r2`, x: -1, y: 2, ic: `bag`, max: 6, c: 2, req: [`r1`], k: `cost`, v: 0.05, t: [`Haggler`, `Négociateur`], d: [`Programs cost 5% less per level.`, `Les programmes coûtent 5 % de moins par niveau.`] },
  { id: `r3`, x: 1, y: 2, ic: `box`, max: 6, c: 2, req: [`r1`], k: `hw`, v: 0.05, t: [`Cheap supplier`, `Fournisseur pas cher`], d: [`Hardware costs 5% less per level.`, `Le matériel coûte 5 % de moins par niveau.`] },
  { id: `r4`, x: -1, y: 3, ic: `floppy`, max: 5, c: 3, req: [`r2`], k: `ram`, v: 0.1, t: [`Compression`, `Compression`], d: [`+10% memory per level.`, `+10 % de mémoire par niveau.`] },
  { id: `r5`, x: 1, y: 3, ic: `bolt`, max: 5, c: 3, req: [`r3`], k: `cpu`, v: 0.1, t: [`Overclocking`, `Overclocking`], d: [`+10% processor, connection and coherence per level.`, `+10 % de processeur, de connexion et de cohérence par niveau.`] },
  { id: `r6`, x: 0, y: 4, ic: `autoclick`, max: 5, c: 4, any: [`r4`, `r5`], k: `kit`, v: 2, t: [`Starter kit`, `Kit de démarrage`], d: [`Every act starts with 2 more of its first autoclicker per level.`, `Chaque acte commence avec 2 exemplaires de plus de son premier autoclic par niveau.`] },
  { id: `rK`, x: 0, y: 5.2, ic: `blocks`, max: 1, c: 12, ks: 1, req: [`r6`], k: `ramlv`, v: 3, t: [`Photographic memory`, `Mémoire photographique`], d: [`KEYSTONE. Every act starts with 3 more memory upgrades.`, `PIERRE ANGULAIRE. Chaque acte commence avec 3 améliorations de mémoire de plus.`] },
  { id: `r7`, x: -2, y: 3, ic: `play`, max: 3, c: 3, req: [`r2`], k: `sub`, v: 0.2, t: [`Lifetime subscription`, `Abonnement à vie`], d: [`Winbows 12 subscriptions cost 20% less per level.`, `Les abonnements de Winbows 12 coûtent 20 % de moins par niveau.`] },
  { id: `r8`, x: 2, y: 3, ic: `torch`, max: 3, c: 3, req: [`r3`], k: `bat`, v: 0.15, t: [`Endless battery`, `Batterie sans fin`], d: [`The iBrick's battery drains 15% slower per level.`, `La batterie de l'iBrick se vide 15 % moins vite par niveau.`] },
  // ----- Chaos: everything else (left) -----
  { id: `q1`, x: -1, y: 0, ic: `shield`, max: 1, c: 1, req: [`core`], k: `stray`, v: 1, t: [`Pixel magnet`, `Aimant à pixels`], d: [`Good stray pixels x3, and the bad ones can't steal anymore.`, `Bons pixels égarés x3, et les mauvais ne volent plus rien.`] },
  { id: `q2`, x: -2, y: -1, ic: `star`, max: 4, c: 2, req: [`q1`], k: `strayF`, v: 0.25, t: [`Stray everywhere`, `Égarés partout`], d: [`Stray pixels show up 25% more often per level.`, `Les pixels égarés passent 25 % plus souvent par niveau.`] },
  { id: `q3`, x: -2, y: 1, ic: `note`, max: 5, c: 2, req: [`q1`], k: `tk`, v: 0.5, t: [`Golden post-it`, `Post-it doré`], d: [`+50% post-it rewards per level.`, `+50 % de récompense du post-it par niveau.`] },
  { id: `q4`, x: -3, y: -1, ic: `term`, max: 4, c: 3, req: [`q2`], k: `hack`, v: 1, t: [`Hacker`, `Hacker`], d: [`+100% terminal rewards per level, and the terminal unlocks faster.`, `+100 % de récompense du terminal par niveau, et il se déverrouille plus vite.`] },
  { id: `q5`, x: -3, y: 1, ic: `help`, max: 4, c: 3, req: [`q3`], k: `ev`, v: 0.5, t: [`Rigged dilemmas`, `Dilemmes truqués`], d: [`+50% dilemma rewards per level.`, `+50 % de récompense des dilemmes par niveau.`] },
  { id: `q6`, x: -4, y: 0, ic: `moon`, max: 5, c: 4, any: [`q4`, `q5`], k: `idle`, v: 1, t: [`Meditation`, `Méditation`], d: [`The screensaver bonus is +1 per level (x3 becomes x4, x5...).`, `Le bonus de l'économiseur d'écran gagne +1 par niveau (x3 devient x4, x5...).`] },
  { id: `qK`, x: -5.2, y: 0, ic: `cat`, max: 1, c: 12, ks: 1, req: [`q6`], k: `catgift`, v: 1, t: [`House cat`, `Chat de compagnie`], d: [`KEYSTONE. Schrödinger's cat follows you into every act and brings a surprise every 4 minutes.`, `PIERRE ANGULAIRE. Le chat de Schrödinger te suit dans tous les actes et t'apporte une surprise toutes les 4 minutes.`] },
  { id: `qK2`, x: -4, y: 2, ic: `trophy`, max: 1, c: 10, ks: 1, req: [`q5`], k: `ach`, v: 1, t: [`Achievement inflation`, `Succès inflationnistes`], d: [`KEYSTONE. Each achievement gives +2% instead of +1%.`, `PIERRE ANGULAIRE. Chaque succès donne +2 % au lieu de +1 %.`] },
  // ----- synergies between two branches -----
  { id: `s1`, x: 1.25, y: -1.25, ic: `bolt`, max: 3, c: 3, req: [`p1`, `c1`], k: `pc`, v: 0.25, t: [`Coffee + finger`, `Café + doigt`], d: [`+25% production and clicks per level.`, `+25 % de production et de clics par niveau.`] },
  { id: `s2`, x: -1.25, y: -1.25, ic: `hourglass`, max: 2, c: 4, req: [`p1`, `q1`], k: `offx`, v: 1, t: [`Time loop`, `Boucle temporelle`], d: [`Offline progress x2 per level.`, `Progression hors ligne x2 par niveau.`] },
  { id: `s3`, x: 1.25, y: 1.25, ic: `cassette`, max: 3, c: 3, req: [`c1`, `r1`], k: `cps`, v: 3, t: [`Keyboard macro`, `Macro clavier`], d: [`3 more free clicks per second per level.`, `3 clics gratuits de plus par seconde par niveau.`] },
  // ----- Beyond: from the tenth New Game+ on, a crown around the keystones; its top opens PIXEL-OS 2 -----
  { id: `x1`, x: 3.9, y: -3.9, ic: `star`, max: 3, c: 3, ng: 10, req: [`pK`, `cK`], k: `pc`, v: 1, t: [`Golden pixel`, `Pixel d'or`], d: [`BEYOND. +100% production and clicks per level.`, `AU-DELÀ. +100 % de production et de clics par niveau.`] },
  { id: `x2`, x: 3.9, y: 3.9, ic: `floppy`, max: 2, c: 4, ng: 10, req: [`cK`, `rK`], k: `ramlv`, v: 2, t: [`SSD`, `Disque SSD`], d: [`BEYOND. Every act starts with 2 more memory upgrades per level.`, `AU-DELÀ. Chaque acte commence avec 2 améliorations de mémoire de plus par niveau.`] },
  { id: `x3`, x: -3.9, y: 3.9, ic: `note`, max: 2, c: 3, ng: 10, req: [`rK`, `qK`], k: `tk`, v: 1, t: [`Laminated post-it`, `Post-it plastifié`], d: [`BEYOND. +100% post-it rewards per level.`, `AU-DELÀ. +100 % de récompense du post-it par niveau.`] },
  { id: `x4`, x: -3.9, y: -3.9, ic: `atom`, max: 2, c: 5, ng: 10, req: [`qK`, `pK`], k: `ng`, v: 0.25, t: [`Meta-prestige`, `Méta-prestige`], d: [`BEYOND. Each New Game+ gives +0.25 more per level.`, `AU-DELÀ. Chaque Nouvelle partie+ donne +0,25 de plus par niveau.`] },
  { id: `x5`, x: 0, y: -7.4, ic: `pixel`, max: 1, c: 10, ks: 1, ng: 10, req: [`x1`, `x2`, `x3`, `x4`], draw: [`x1`, `x4`], k: `p2`, v: 1, t: [`The second pixel`, `Le deuxième pixel`], d: [`KEYSTONE. Opens PIXEL-OS 2: a new game, next to this one. Needs the whole crown.`, `PIERRE ANGULAIRE. Ouvre PIXEL-OS 2 : un nouveau jeu, à côté de celui-ci. Nécessite toute la couronne.`] },
  { id: `s4`, x: -1.25, y: 1.25, ic: `atom`, max: 2, c: 8, req: [`q1`, `r1`], k: `ng`, v: 0.25, t: [`Prestige++`, `Prestige++`], d: [`Each New Game+ gives +0.25 more per level (x2 becomes x2.25...).`, `Chaque Nouvelle partie+ donne +0,25 de plus par niveau (x2 devient x2,25...).`] },
];
const TBR = [[`FACTORY`, `USINE`, 0, -6.3], [`FINGER`, `DOIGT`, 6.4, 0], [`SHORTCUTS`, `RACCOURCIS`, 0, 6.3], [`CHAOS`, `CHAOS`, -6.4, 0], [`BEYOND`, `AU-DELÀ`, 0, -8.3, 10]];
// the crown shows from the tenth New Game+ on (or once learned)
const tvis = n => !n.ng || (S.ng || 0) >= n.ng || tlv(n.id) > 0;
const TRT = {
  title: [`Skill tree`, `Arbre de compétences`], pts: [`{n} ◆ to spend`, `{n} ◆ à dépenser`], next: [`Next New Game+: +{n} ◆`, `Prochaine Nouvelle partie+ : +{n} ◆`],
  how: [`◆ reset points: 10 per New Game+ (15 after act 7) and 2 per act finished. The tree resets for free. Drag to move, wheel to zoom.`, `◆ points de reset : 10 par Nouvelle partie+ (15 après l'acte 7) et 2 par acte fini. L'arbre se réinitialise gratuitement. Glisse pour te déplacer, molette pour zoomer.`],
  reset: [`Reset the tree`, `Réinitialiser`], close: [`Close`, `Fermer`], center: [`Center`, `Centrer`], learn: [`Learn ({n} ◆)`, `Apprendre ({n} ◆)`],
  lv: [`Level {a} / {b}`, `Niveau {a} / {b}`], max: [`Maxed`, `Au maximum`], ks: [`Keystone`, `Pierre angulaire`], needAll: [`Needs: {a}`, `Nécessite : {a}`], needAny: [`Needs one of: {a}`, `Nécessite l'un de : {a}`],
  poor: [`Not enough ◆`, `Pas assez de ◆`], pick: [`Click a skill to see it.`, `Clique sur une compétence pour la voir.`], spent: [`{n} ◆ invested`, `{n} ◆ investis`],
  gain: [`+{n} reset points ◆. Spend them in the skill tree (menu).`, `+{n} points de reset ◆. Dépense-les dans l'arbre de compétences (menu).`],
  cat: [`Schrödinger's cat drops by: `, `Le chat de Schrödinger passe : `],
};
const TNODE = {};
for (const n of TNODES) TNODE[n.id] = n;
const tlv = id => (S.tree && S.tree[id]) || 0;
const TR = id => tlv(id) > 0;
const tsum = k => { let s = 0; for (const n of TNODES) if (n.k === k && S.tree && S.tree[n.id]) s += n.v * S.tree[n.id]; return s; };
const treeOpen = () => (S.ng || 0) >= 2 || (S.tp || 0) > 0;
const tcost = n => n.c * (tlv(n.id) + 1);
const treeSpent = () => TNODES.reduce((s, n) => s + n.c * tlv(n.id) * (tlv(n.id) + 1) / 2, 0);
const treeLeft = () => (S.tp || 0) - treeSpent();
const tneeds = n => (S.ng || 0) >= (n.ng || 0) && (n.req ? n.req.every(TR) : true) && (n.any ? n.any.some(TR) : true);
// effects, read by the engine
const treeP = () => (1 + tsum(`p`) + tsum(`pc`)) * (1 + tsum(`pm`));
const treeC = () => (1 + tsum(`c`) + tsum(`pc`)) * (1 + tsum(`cm`));
const TFLAG = { offline: `p3`, strayx3: `q1`, magnet: `q1` };
const treeFlag = f => !!TFLAG[f] && TR(TFLAG[f]);
const hwC = st => st.c * (1 - Math.min(0.6, tsum(`hw`)));
const treeCost = () => 1 - Math.min(0.6, tsum(`cost`));
const treeCap = r => (r === `ram` ? 1 + tsum(`ram`) : r === `cpu` || r === `bw` ? 1 + tsum(`cpu`) : 1);
// points for a New Game+: 10, or 15 when the run went through act 7; the second one also pays for the first
const treeGain = (ng, era7) => (ng < 2 ? 0 : (ng === 2 ? 10 : 0) + 10 + (era7 ? 5 : 0));
const nextGain = () => treeGain((S.ng || 0) + 1, S.era === 7);

// ----- the map -----
const TV = { x: 0, y: 0, z: 0, sel: `core` };
// zoom that shows the whole tree, branch names included
const tfit = () => { const m = $(`tree`).querySelector(`.tmap`), r = (S.ng || 0) >= 10 ? 18 : 14; return Math.max(0.35, Math.min(1.2, Math.min(m.clientWidth, m.clientHeight) / (r * TU))); };
function treeHtml() {
  const ln = (a, b, on, av) => `<line x1="${a.x * TU}" y1="${a.y * TU}" x2="${b.x * TU}" y2="${b.y * TU}" class="${on ? `on` : av ? `av` : ``}"/>`;
  let lines = ``;
  for (const n of TNODES) if (tvis(n)) for (const p of n.draw || [...(n.req || []), ...(n.any || [])]) lines += ln(TNODE[p], n, TR(p) && TR(n.id), TR(p));
  const node = n => {
    const l = tlv(n.id), st = l >= n.max ? `max` : l ? `part` : tneeds(n) ? (treeLeft() >= tcost(n) ? `can` : `av`) : `lock`;
    return `<div class="tnd ${st}${n.ks ? ` ks` : ``}${TV.sel === n.id ? ` sel` : ``}" style="left:${n.x * TU}px;top:${n.y * TU}px;--p:${l / n.max * 100}%" data-act="tsel:${n.id}"><i style="background-image:url('${iconUrl(n.ic, `w11`)}')"></i>${n.max > 1 ? `<em>${l}/${n.max}</em>` : ``}</div>`;
  };
  const brs = TBR.filter(b => !b[4] || (S.ng || 0) >= b[4]).map(b => `<div class="tbr" style="left:${b[2] * TU}px;top:${b[3] * TU}px">${b[L()]}</div>`).join(``);
  return `<svg class="tsv" viewBox="-800 -800 1600 1600" width="1600" height="1600">${lines}</svg>${brs}${TNODES.filter(tvis).map(node).join(``)}`;
}
function treeSide() {
  const n = TNODE[TV.sel] || TNODE.core, l = tlv(n.id), need = n.req ? n.req : n.any || [];
  let foot;
  if (l >= n.max) foot = `<div class="tok">${T(TRT.max)}</div>`;
  else if (!tneeds(n)) foot = `<div class="tno">${fill(T(n.any ? TRT.needAny : TRT.needAll), { a: need.map(id => T(TNODE[id].t)).join(n.any ? ` / ` : `, `) })}</div>`;
  else foot = `<button class="btn tbuy" data-act="tbuy:${n.id}"${treeLeft() < tcost(n) ? ` disabled` : ``}>${treeLeft() < tcost(n) ? T(TRT.poor) + ` (${tcost(n)} ◆)` : fill(T(TRT.learn), { n: tcost(n) })}</button>`;
  return `<div class="tsi"><i style="background-image:url('${iconUrl(n.ic, `w11`)}')"></i><div><b>${T(n.t)}</b>${n.ks && n.id !== `core` ? `<span class="tks">${T(TRT.ks)}</span>` : ``}</div></div>`
    + `<p>${T(n.d)}</p>` + (n.max > 1 ? `<div class="tlv"><div style="width:${l / n.max * 100}%"></div></div><div class="tlt">${fill(T(TRT.lv), { a: l, b: n.max })}</div>` : ``) + foot;
}
function treeRender() {
  if (!$(`tree`)) {
    document.body.insertAdjacentHTML(`beforeend`, `<div id="tree"><div class="thd"></div><div class="tbody"><div class="tmap"><div class="tlay"></div></div><div class="tside"></div></div></div>`);
    treeBind();
  }
  $(`tree`).querySelector(`.thd`).innerHTML = `<h2>${T(TRT.title)}</h2><span class="tpill">${fill(T(TRT.pts), { n: fmt(treeLeft()) })}</span><span class="tsub">${fill(T(TRT.spent), { n: fmt(treeSpent()) })} · ${fill(T(TRT.next), { n: nextGain() || 10 })}</span><span class="tsp"></span>${p2Unlocked() && S.era !== 8 ? `<button class="btn tp2" data-act="p2go">PIXEL-OS 2 →</button>` : ``}<button class="btn" data-act="tcenter">${T(TRT.center)}</button><button class="btn" data-act="treset">${T(TRT.reset)}</button><button class="btn" data-act="tclose">${T(TRT.close)}</button><p class="thow">${T(TRT.how)}</p>`;
  $(`tree`).querySelector(`.tlay`).innerHTML = treeHtml();
  $(`tree`).querySelector(`.tside`).innerHTML = treeSide();
  treeView();
}
function treeView() {
  const m = $(`tree`).querySelector(`.tmap`), l = $(`tree`).querySelector(`.tlay`);
  l.style.transform = `translate(${m.clientWidth / 2 + TV.x}px,${m.clientHeight / 2 + TV.y}px) scale(${TV.z || 0.85})`;
}
// drag to move the map, wheel to zoom around the mouse
function treeBind() {
  const m = $(`tree`).querySelector(`.tmap`);
  let d = null;
  m.addEventListener(`pointerdown`, e => { if (e.target.closest(`.tnd`)) return; d = { x: e.clientX - TV.x, y: e.clientY - TV.y }; m.classList.add(`drag`); });
  addEventListener(`pointermove`, e => { if (!d) return; TV.x = e.clientX - d.x; TV.y = e.clientY - d.y; treeView(); });
  addEventListener(`pointerup`, () => { d = null; m.classList.remove(`drag`); });
  m.addEventListener(`wheel`, e => {
    e.preventDefault();
    const r = m.getBoundingClientRect(), px = e.clientX - r.left - r.width / 2 - TV.x, py = e.clientY - r.top - r.height / 2 - TV.y;
    const z0 = TV.z || 0.85, z = Math.max(0.4, Math.min(1.6, z0 * (e.deltaY < 0 ? 1.12 : 0.89))), k = z / z0;
    TV.x -= px * (k - 1); TV.y -= py * (k - 1); TV.z = z; treeView();
  }, { passive: false });
  addEventListener(`resize`, () => { if ($(`tree`).classList.contains(`on`)) treeView(); });
}
const TREE_A = {
  tree() { if (S.treeV !== 2) treeMigrate(); treeRender(); $(`tree`).classList.add(`on`); if (!TV.z) TV.z = tfit(); treeView(); },
  tclose() { if ($(`tree`)) $(`tree`).classList.remove(`on`); },
  tsel(id) { TV.sel = id; treeRender(); },
  tcenter() { TV.x = TV.y = 0; TV.z = tfit(); treeView(); },
  tbuy(id) {
    const n = TNODE[id];
    if (!n || tlv(id) >= n.max || !tneeds(n) || treeLeft() < tcost(n)) return;
    S.tree = S.tree || {}; S.tree[id] = tlv(id) + 1; S.st.skills = (S.st.skills || 0) + 1;
    if (n.k === `ramlv` || n.k === `kit`) treeBoot();
    treeRender(); save();
    // the last skill opens PIXEL-OS 2
    if (!S.once.p2un && p2Unlocked()) { S.once.p2un = 1; dlg(T(X8.unlock), { cancel: true, okT: `PIXEL-OS 2 →`, ok: () => p2Enter() }); }
  },
  treset() { S.tree = { core: 1 }; TV.sel = `core`; treeRender(); save(); },
};
// the first skill tree had 12 squares: its points are given back, with the new rates
function treeMigrate() {
  if (S.treeV === 2) return;
  S.treeV = 2; S.tree = { core: 1 };
  if ((S.ng || 0) >= 2) S.tp = Math.max(S.tp || 0, 10 + 10 * (S.ng - 1) + 5);
}
// at the start of an act: free memory upgrades and starter autoclickers
function treeBoot() {
  if (!S.era || !E().HW) return;
  const ram = E().HW.find(h => h.r === `ram`), lv = Math.min(ram ? ram.s.length : 0, tsum(`ramlv`));
  if (lv > (S.hw.ram || 0)) S.hw.ram = lv;
  const k = tsum(`kit`), a = E().P.find(p => p.multi && p.prod);
  if (k && a && (S.bought[a.id] || 0) < k) S.bought[a.id] = k;
}
// the House cat keystone: a surprise from the box every 4 minutes, in every act
let catT = 240;
function treeTick(dt) {
  if (!TR(`qK`) || !S.era || typeof X7 === `undefined`) return;
  if ((catT -= dt) > 0) return;
  catT = 240;
  const o = X7.cat[Math.random() * X7.cat.length | 0];
  evApply(Object.assign({}, o, { m: [TRT.cat[0] + o.m[0], TRT.cat[1] + o.m[1]] }));
}

ACH.push(
  [`tree1`, [`Branching out`, `Ça pousse`], [`Learn a skill.`, `Apprendre une compétence.`], () => (S.st.skills || 0) >= 1],
  [`treeks`, [`Cornerstone`, `Clé de voûte`], [`Learn a keystone.`, `Apprendre une pierre angulaire.`], () => TNODES.some(n => n.ks && n.id !== `core` && TR(n.id))],
  [`treeall`, [`Fully grown`, `Arbre adulte`], [`Max out every skill at the same time.`, `Avoir toutes les compétences au maximum en même temps.`], () => TNODES.every(n => tlv(n.id) >= n.max)],
);
