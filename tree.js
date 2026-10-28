// The skill tree, from the second New Game+ on: each restart gives points to spend in three branches.
// The tree can be reset for free at any time, to try another build.
const TREE = [
  { id: `p`, name: [`Factory`, `Usine`], nodes: [
    { id: `p1`, c: 1, t: [`Strong coffee`, `Café serré`], d: [`Production x1.5.`, `Production x1,5.`] },
    { id: `p2`, c: 2, req: `p1`, t: [`Overtime`, `Heures sup`], d: [`Production x2.`, `Production x2.`] },
    { id: `p3`, c: 2, req: `p1`, t: [`Sleep mode`, `Mode veille`], d: [`Offline progress at 100% in every act, from the start.`, `Progression hors ligne à 100 % dans tous les actes, dès le début.`] },
    { id: `p4`, c: 3, req: `p2`, t: [`The dev slept`, `Le dev a dormi`], d: [`Production x3. First time since 1984.`, `Production x3. Une première depuis 1984.`] },
  ] },
  { id: `c`, name: [`Finger`, `Doigt`], nodes: [
    { id: `c1`, c: 1, t: [`Warmed-up finger`, `Doigt échauffé`], d: [`Clicks x2.`, `Clics x2.`] },
    { id: `c2`, c: 2, req: `c1`, t: [`Clever click`, `Clic malin`], d: [`Each click also gives 2% of your px/s.`, `Chaque clic donne aussi 2 % de tes px/s.`] },
    { id: `c3`, c: 2, req: `c1`, t: [`Ghost finger`, `Doigt fantôme`], d: [`5 free clicks per second, even when you're not there.`, `5 clics gratuits par seconde, même quand tu n'es pas là.`] },
    { id: `c4`, c: 3, req: `c2`, t: [`Golden finger`, `Doigt d'or`], d: [`Clicks x5.`, `Clics x5.`] },
  ] },
  { id: `u`, name: [`Shortcuts`, `Raccourcis`], nodes: [
    { id: `u1`, c: 1, t: [`Spare RAM stick`, `Barrette de rechange`], d: [`Every act starts with its first memory upgrade.`, `Chaque acte commence avec sa première amélioration de mémoire.`] },
    { id: `u2`, c: 2, req: `u1`, t: [`Pixel magnet`, `Aimant à pixels`], d: [`Good stray pixels x3, and the bad ones can't steal anymore.`, `Bons pixels égarés x3, et les mauvais ne volent plus rien.`] },
    { id: `u3`, c: 2, req: `u1`, t: [`Golden post-it`, `Post-it doré`], d: [`Post-it rewards x3.`, `Récompenses du post-it x3.`] },
    { id: `u4`, c: 3, req: `u2`, t: [`Cheap supplier`, `Fournisseur pas cher`], d: [`Hardware upgrades cost 25% less.`, `Les améliorations matérielles coûtent 25 % de moins.`] },
  ] },
];
const TRT = {
  title: [`Skill tree`, `Arbre de compétences`], pts: [`Reset points: {n}`, `Points de reset : {n}`],
  how: [`Each New Game+ gives 3 points, 5 if you finished act 7. Reset the tree for free whenever you want.`, `Chaque Nouvelle partie+ donne 3 points, 5 si tu as fini l'acte 7. Réinitialise l'arbre gratuitement quand tu veux.`],
  reset: [`Reset the tree`, `Réinitialiser l'arbre`], close: [`Close`, `Fermer`], cost: [`{n} pt`, `{n} pt`], got: [`Learned`, `Appris`],
  locked: [`Needs {a}`, `Nécessite {a}`], gain: [`+{n} reset points. Spend them in the skill tree (menu).`, `+{n} points de reset. Dépense-les dans l'arbre de compétences (menu).`],
};
const TNODE = {};
for (const b of TREE) for (const n of b.nodes) TNODE[n.id] = n;
const TR = id => !!(S.tree && S.tree[id]);
const treeOpen = () => (S.ng || 0) >= 2 || (S.tp || 0) > 0;
const treeSpent = () => Object.keys(S.tree || {}).filter(TR).reduce((s, id) => s + TNODE[id].c, 0);
const treeLeft = () => (S.tp || 0) - treeSpent();
const treeP = () => (TR(`p1`) ? 1.5 : 1) * (TR(`p2`) ? 2 : 1) * (TR(`p4`) ? 3 : 1);
const treeC = () => (TR(`c1`) ? 2 : 1) * (TR(`c4`) ? 5 : 1);
// some skills work like an upgrade the act already knows
const TFLAG = { offline: `p3`, strayx3: `u2`, magnet: `u2` };
const treeFlag = f => !!TFLAG[f] && TR(TFLAG[f]);
const hwC = st => st.c * (TR(`u4`) ? 0.75 : 1);
// points for a New Game+: 3, or 5 when the run ended through act 7; the tree opens at the second one
function treeGain(ng, era7) {
  if (ng < 2) return 0;
  return ng === 2 ? 3 + (era7 ? 2 : 0) + 3 : 3 + (era7 ? 2 : 0);
}
function treeHtml() {
  const node = n => {
    const got = TR(n.id), can = !got && (!n.req || TR(n.req)) && treeLeft() >= n.c;
    const st = got ? T(TRT.got) : n.req && !TR(n.req) ? fill(T(TRT.locked), { a: T(TNODE[n.req].t) }) : fill(T(TRT.cost), { n: n.c });
    return `<div class="tn ${got ? `got` : can ? `can` : `no`}"${can ? ` data-act="tbuy:${n.id}"` : ``}><b>${T(n.t)}</b><span>${T(n.d)}</span><i>${st}</i></div>`;
  };
  const col = b => { const [a, x, y, z] = b.nodes; return `<div class="tb"><h3>${T(b.name)}</h3>${node(a)}<div class="tl2"><div>${node(x)}${node(z)}</div><div>${node(y)}</div></div></div>`; };
  return `<div class="tp"><h2>${T(TRT.title)}</h2><div class="tpts">${fill(T(TRT.pts), { n: treeLeft() })}</div><p>${T(TRT.how)}</p><div class="tcols">${TREE.map(col).join(``)}</div>`
    + `<div class="tbtn"><button class="btn" data-act="treset">${T(TRT.reset)}</button><button class="btn" data-act="tclose">${T(TRT.close)}</button></div></div>`;
}
function treeRender() {
  if (!$(`tree`)) document.body.insertAdjacentHTML(`beforeend`, `<div id="tree"></div>`);
  $(`tree`).innerHTML = treeHtml();
}
const TREE_A = {
  tree() { treeRender(); $(`tree`).classList.add(`on`); },
  tclose() { $(`tree`).classList.remove(`on`); },
  tbuy(id) {
    const n = TNODE[id];
    if (!n || TR(id) || (n.req && !TR(n.req)) || treeLeft() < n.c) return;
    S.tree = S.tree || {}; S.tree[id] = 1; S.st.skills = (S.st.skills || 0) + 1;
    if (id === `u1`) treeRamStart();
    treeRender(); save();
  },
  treset() { S.tree = {}; treeRender(); save(); },
};
// Spare RAM stick: the first memory upgrade of the act, free
function treeRamStart() {
  if (!TR(`u1`) || !S.era || !E().HW) return;
  if (E().HW.some(h => h.r === `ram`) && !S.hw.ram) S.hw.ram = 1;
}

ACH.push(
  [`tree1`, [`Branching out`, `Ça pousse`], [`Learn a skill.`, `Apprendre une compétence.`], () => (S.st.skills || 0) >= 1],
  [`tree12`, [`Fully grown`, `Arbre adulte`], [`Learn the 12 skills at the same time.`, `Avoir les 12 compétences en même temps.`], () => Object.keys(TNODE).every(TR)],
);
