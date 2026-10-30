// PIXEL-OS 4, unlocked by finishing PIXEL-OS 3: everyone has played, the game is finished... and the word FIN wants
// to write itself over it forever. The Pixel goes on an adventure through every era to stop it.
// An idle RPG: the Pixel walks and fights by itself; you upgrade it, click enemies, call companions and use skills.
const P4W = [
  { t: [`The terminal`, `Le terminal`], bg: `term`, en: [[`Syntax error`, `Bug de syntaxe`, `bug`], [`Lost semicolon`, `Point-virgule perdu`, `dot`], [`Segfault`, `Erreur de segmentation`, `skull`]],
    boss: { n: [`The Blinking Cursor`, `Le Curseur Clignotant`], k: `blink` },
    intro: [`THE DEV: the terminal. where it all began. the bugs here are old, but they bite.`, `LE DEV : le terminal. là où tout a commencé. les bugs ici sont vieux, mais ils mordent.`],
    win: [`THE DEV: the cursor stopped blinking. first time since 1984. it looks relieved.`, `LE DEV : le curseur a arrêté de clignoter. une première depuis 1984. il a l'air soulagé.`] },
  { t: [`PIXEL-OS 1984`, `PIXEL-OS 1984`], bg: `mac`, en: [[`Dead pixel`, `Pixel mort`, `skull`], [`Memory leak`, `Fuite de mémoire`, `worm`], [`Corrupted byte`, `Octet corrompu`, `bug`]],
    boss: { n: [`Memory Full`, `Mémoire Pleine`], k: `eat` },
    intro: [`THE DEV: 16 KB of memory. every monster here takes some. so does the boss. it's very hungry.`, `LE DEV : 16 Ko de mémoire. chaque monstre en prend un peu. le boss aussi. il a très faim.`],
    win: [`THE DEV: memory freed. 16 KB. we could put a whole second pixel in there.`, `LE DEV : mémoire libérée. 16 Ko. on pourrait y mettre un deuxième pixel entier.`] },
  { t: [`MINO-DOS`, `MINO-DOS`], bg: `dos`, en: [[`Modem screech`, `Grésillement`, `virus`], [`Floppy virus`, `Virus de disquette`, `virus`], [`Busy line`, `Ligne occupée`, `dot`]],
    boss: { n: [`Mom on the Phone`, `Maman au Téléphone`], k: `phone` },
    intro: [`THE DEV: MINO-DOS. careful: if mom picks up the phone, the connection drops. and the attack too.`, `LE DEV : MINO-DOS. attention : si maman décroche, la connexion coupe. et l'attaque aussi.`],
    win: [`MOM: fine, fine, i'm hanging up. dinner's ready.`, `MAMAN : bon, bon, je raccroche. à table.`] },
  { t: [`Winbows 95`, `Winbows 95`], bg: `w95`, en: [[`Aggressive paperclip`, `Trombone agressif`, `clip`], [`Missing driver`, `Pilote manquant`, `bug`], [`DLL not found`, `DLL introuvable`, `popup`]],
    boss: { n: [`The Blue Screen of Death`, `L'Écran Bleu de la Mort`], k: `bsod` },
    intro: [`BIP: Hi! It looks like you're trying to save a video game. Want help?`, `BIP : Bonjour ! On dirait que tu essaies de sauver un jeu vidéo. Veux-tu de l'aide ?`],
    win: [`THE DEV: the blue screen is beaten. press any key to continue. please.`, `LE DEV : l'écran bleu est vaincu. appuie sur une touche pour continuer. s'il te plaît.`] },
  { t: [`Winbows XD`, `Winbows XD`], bg: `xd`, en: [[`Pop-up`, `Pop-up`, `popup`], [`Spam`, `Spam`, `spam`], [`Toolbar`, `Barre d'outils`, `popup`]],
    boss: { n: [`The Giant Pop-up`, `Le Pop-up Géant`], k: `regen` },
    intro: [`THE DEV: the hill. it's beautiful. it's full of pop-ups. the internet in 2001.`, `LE DEV : la colline. elle est magnifique. elle est pleine de pop-ups. l'internet de 2001.`],
    win: [`THE DEV: "you won!" for once, the pop-up was telling the truth.`, `LE DEV : « vous avez gagné ! » pour une fois, le pop-up disait vrai.`] },
  { t: [`The iBrick`, `L'iBrick`], bg: `ios`, en: [[`Notification`, `Notification`, `dot`], [`Forced update`, `Mise à jour forcée`, `loop`], [`Laggy app`, `Appli qui rame`, `worm`]],
    boss: { n: [`Battery 1%`, `Batterie 1 %`], k: `drain` },
    intro: [`THE DEV: the phone. everything here wants your battery. the boss most of all.`, `LE DEV : le téléphone. tout ici veut ta batterie. le boss plus que tout.`],
    win: [`THE DEV: battery at 1%. it's still alive. so are we.`, `LE DEV : batterie à 1 %. elle est toujours en vie. nous aussi.`] },
  { t: [`Winbows 12`, `Winbows 12`], bg: `w12`, en: [[`Subscription`, `Abonnement`, `spam`], [`Cookie`, `Cookie`, `dot`], [`AI hallucination`, `Hallucination d'IA`, `ghost`]],
    boss: { n: [`PIXEL∞`, `PIXEL∞`], k: `copy` },
    intro: [`COPIXEL: My clone, PIXEL∞, is guarding this world. He copies everything. Even your attacks. I apologize for him.`, `COPIXEL : Mon clone, PIXEL∞, garde ce monde. Il copie tout. Même tes attaques. Je m'excuse pour lui.`],
    win: [`COPIXEL: PIXEL∞ is deleted. I am the only Copixel again. It is lonely. It is fine.`, `COPIXEL : PIXEL∞ est supprimé. Je suis à nouveau le seul Copixel. C'est solitaire. Ça va.`] },
  { t: [`QUANTUM-OS`, `QUANTUM-OS`], bg: `q`, en: [[`Unstable qubit`, `Qubit instable`, `ghost`], [`Time loop`, `Boucle temporelle`, `loop`], [`Ghost pixel`, `Pixel fantôme`, `ghost`]],
    boss: { n: [`Schrödinger's Cat`, `Le Chat de Schrödinger`], k: `cat` },
    intro: [`THE DEV: the quantum world. the boss is alive and dead. half your hits go through it.`, `LE DEV : le monde quantique. le boss est vivant et mort. la moitié de tes coups passent à travers.`],
    win: [`THE CAT: meow. (translation: fine. you can pass. i was bored anyway.)`, `LE CHAT : miaou. (traduction : bon. tu peux passer. je m'ennuyais de toute façon.)`] },
  { t: [`The blank page`, `La page blanche`], bg: `fin`, en: [[`Full stop`, `Point final`, `dot`], [`End credits`, `Générique`, `spam`], [`Curtain`, `Rideau`, `ghost`]],
    boss: { n: [`FIN`, `FIN`], k: `fin` },
    intro: [`FIN: YOU CAME ALL THIS WAY. GOOD. EVERY STORY ENDS WITH ME.`, `FIN : TU ES VENU JUSQU'ICI. BIEN. TOUTES LES HISTOIRES FINISSENT PAR MOI.`],
    win: [``, ``] },
];
const P4UP = [
  { id: `atk`, c0: 6, k: 1.14, t: [`Sharpened cursor`, `Curseur aiguisé`], d: [`Attack +10%.`, `Attaque +10 %.`] },
  { id: `hp`, c0: 6, k: 1.14, t: [`Thicker pixel`, `Pixel plus épais`], d: [`Health +10%.`, `Vie +10 %.`] },
  { id: `spd`, c0: 40, k: 1.45, max: 25, t: [`Overclock`, `Overclocking`], d: [`+8% attack speed.`, `+8 % de vitesse d'attaque.`] },
  { id: `crit`, c0: 80, k: 1.4, max: 20, t: [`Critical bug`, `Bug critique`], d: [`+2% chance of a critical hit (x3).`, `+2 % de chance de coup critique (x3).`] },
  { id: `gold`, c0: 25, k: 1.3, t: [`Byte magnet`, `Aimant à octets`], d: [`+15% bytes from monsters.`, `+15 % d'octets sur les monstres.`] },
  { id: `click`, c0: 15, k: 1.22, t: [`Golden finger`, `Doigt d'or`], d: [`Your clicks on enemies hit harder.`, `Tes clics sur les ennemis frappent plus fort.`] },
];
// companions join after a world's boss
const P4C = [
  { id: `bip`, w: 1, c0: 300, t: [`Bip`, `Bip`], d: [`Heals the Pixel: +1.5% health per second per level. "It looks like you're hurt!"`, `Soigne le Pixel : +1,5 % de vie par seconde par niveau. « On dirait que tu es blessé ! »`] },
  { id: `cat`, w: 3, c0: 2e4, t: [`The cat`, `Le chat`], d: [`4% chance (+1% per level, up to 25%) that a hit is worth x10. It doesn't care which side it's on.`, `4 % de chance (+1 % par niveau, jusqu'à 25 %) qu'un coup vaille x10. Il se fiche de savoir de quel côté il est.`] },
  { id: `dev`, w: 4, c0: 2e5, t: [`The dev`, `Le dev`], d: [`+25% bytes per level. He picks up what falls.`, `+25 % d'octets par niveau. Il ramasse ce qui tombe.`] },
  { id: `copi`, w: 6, c0: 2e7, t: [`Copixel`, `Copixel`], d: [`Attacks too: 40% of the Pixel's attack per second per level. Takes all the credit.`, `Attaque aussi : 40 % de l'attaque du Pixel par seconde par niveau. S'attribue tout le mérite.`] },
];
// what they say during the walk
const P4TALK = {
  bip: [[`It looks like you're fighting!`, `On dirait que tu te bats !`], [`Need help with that?`, `Besoin d'aide ?`], [`Did you save?`, `Tu as sauvegardé ?`], [`Bip is here! Sadly.`, `Bip est là ! Hélas.`]],
  cat: [[`meow`, `miaou`], [`...`, `...`], [`(both alive and asleep)`, `(à la fois vivant et endormi)`], [`I was never here.`, `Je n'ai jamais été là.`]],
  dev: [[`works on my machine`, `chez moi ça marche`], [`TODO: finish this`, `TODO : finir ça`], [`not a bug, a feature`, `c'est pas un bug, c'est une fonctionnalité`], [`I'll fix it tomorrow`, `je corrige demain`]],
  copi: [[`That was me.`, `C'était moi.`], [`You're welcome.`, `De rien.`], [`I did everything.`, `J'ai tout fait.`], [`Put me in the credits.`, `Mets-moi au générique.`]],
};
const p4Talk = id => { const l = P4TALK[id]; p4Bub = { id, t: l[Math.random() * l.length | 0], left: 3.5 }; };
// rewards: after each world boss, pick one of three
const P4PK = [
  { id: `pa`, t: [`Sharp edges`, `Bords tranchants`], d: [`Attack x1.5.`, `Attaque x1,5.`] },
  { id: `ph`, t: [`Extra layer`, `Couche en plus`], d: [`Health x1.5.`, `Vie x1,5.`] },
  { id: `pg`, t: [`Byte rain`, `Pluie d'octets`], d: [`Bytes x1.5.`, `Octets x1,5.`] },
  { id: `ps`, t: [`Turbo button`, `Bouton turbo`], d: [`Attack speed +15%.`, `Vitesse d'attaque +15 %.`] },
  { id: `pc`, t: [`Lucky pixel`, `Pixel chanceux`], d: [`Critical chance +5%.`, `Chance de critique +5 %.`] },
  { id: `pk`, t: [`Heavy finger`, `Doigt lourd`], d: [`Your clicks hit x2.`, `Tes clics frappent x2.`] },
  { id: `pt`, t: [`Patient bosses`, `Boss patients`], d: [`Bosses give you 10 more seconds.`, `Les boss te laissent 10 secondes de plus.`] },
  { id: `pr`, t: [`Self-repair`, `Auto-réparation`], d: [`Heals 1% health per second.`, `Soigne 1 % de vie par seconde.`] },
];
const P4S = [
  { id: `undo`, w: 0, cd: 30, t: [`Ctrl+Z`, `Ctrl+Z`], d: [`Undo: heals 60% of health.`, `Annuler : soigne 60 % de la vie.`] },
  { id: `bsod`, w: 3, cd: 40, t: [`Blue screen`, `Écran bleu`], d: [`The enemy freezes for 5 s.`, `L'ennemi se fige pendant 5 s.`] },
  { id: `copy`, w: 5, cd: 60, t: [`Copy-paste`, `Copier-coller`], d: [`Two Pixels for 10 s: damage x2.`, `Deux Pixels pendant 10 s : dégâts x2.`] },
  { id: `defrag`, w: 7, cd: 45, t: [`Defragment`, `Défragmenter`], d: [`One huge hit: 25 times the attack.`, `Un énorme coup : 25 fois l'attaque.`] },
];
const X10 = {
  intro: [
    [`> EVERY HUMAN HAS PLAYED.`, `> TOUS LES HUMAINS ONT JOUÉ.`],
    [`THE DEV: that's it. the game is finished. everyone said so.`, `LE DEV : c'est fini. le jeu est fini. tout le monde l'a dit.`],
    [`???: FIN.`, `??? : FIN.`],
    [`THE DEV: who said that?`, `LE DEV : qui a dit ça ?`],
    [`FIN: ME. I AM THE WORD "FIN". I WILL WRITE MYSELF OVER YOUR GAME. FOREVER.`, `FIN : MOI. JE SUIS LE MOT FIN. JE VAIS M'ÉCRIRE SUR TON JEU. POUR TOUJOURS.`],
    [`THE DEV: no. if it's finished, nobody will ever play it again. pixel... can you stop it?`, `LE DEV : non. s'il est fini, plus personne n'y jouera. pixel... tu peux l'arrêter ?`],
    [`THE PIXEL: ■`, `LE PIXEL : ■`],
    [`THE DEV: he said yes. i think.`, `LE DEV : il a dit oui. je crois.`],
  ],
  fin: [
    [`FIN: F... I... N...`, `FIN : F... I... N...`],
    [`FIN: I AM... NOT... FI...`, `FIN : JE SUIS... PAS... FI...`],
    [`> FIN → PAS FINI`, `> FIN → PAS FINI`],
    [`THE DEV: not finished. that's it. it never will be.`, `LE DEV : pas fini. c'est ça. il ne le sera jamais.`],
    [`THE DEV: as long as someone clicks, it goes on. thank you, little pixel. and thank you.`, `LE DEV : tant que quelqu'un clique, il continue. merci, petit pixel. et merci à toi.`],
    [`COPIXEL: I checked. The game is officially not finished. It is the best possible ending.`, `COPIXEL : J'ai vérifié. Le jeu est officiellement pas fini. C'est la meilleure fin possible.`],
    [`THE CAT: meow.`, `LE CHAT : miaou.`],
  ],
  thanks: [`NOT FINISHED. NEVER.`, `PAS FINI. JAMAIS.`],
  credits: [`PIXEL-OS 4\nThe Pixel's adventure\n\nA game by zuralon\nAnd a pixel, very brave\n\nMonsters beaten: {k}\nFalls: {d}\nTime played: {t}`, `PIXEL-OS 4\nL'aventure du pixel\n\nUn jeu de zuralon\nEt d'un pixel, très courageux\n\nMonstres vaincus : {k}\nChutes : {d}\nTemps de jeu : {t}`],
  pickH: [`Boss beaten! Pick a reward:`, `Boss battu ! Choisis une récompense :`], picked: [`> Reward: {r}`, `> Récompense : {r}`],
  keep: [`Keep adventuring`, `Continuer l'aventure`], again: [`See the ending again`, `Revoir la fin`],
  unlock: [`Everyone has played... and the word FIN wants to end the game forever. PIXEL-OS 4 is open.`, `Tout le monde a joué... et le mot FIN veut finir le jeu pour toujours. PIXEL-OS 4 est ouvert.`],
  about: [`PIXEL-OS 4\nThe Pixel's adventure\n\nA game by zuralon.\nNot finished. Never.`, `PIXEL-OS 4\nL'aventure du pixel\n\nUn jeu de zuralon.\nPas fini. Jamais.`],
  world: [`World {w}: {n}`, `Monde {w} : {n}`], stage: [`Stage {s}/10`, `Étape {s}/10`], bossSt: [`BOSS`, `BOSS`], after: [`After the end`, `Après la fin`],
  gold: [`bytes`, `octets`], hero: [`The Pixel`, `Le Pixel`], comp: [`Companions`, `Compagnons`], skills: [`Skills`, `Compétences`], log: [`Journal`, `Journal`],
  adv: [`Advance`, `Avancer`], on: [`ON`, `OUI`], off: [`OFF`, `NON`],
  atk: [`Attack`, `Attaque`], hp: [`Health`, `Vie`], spd: [`Speed`, `Vitesse`], critL: [`Critical`, `Critique`],
  lv: [`lv {n}`, `niv. {n}`], locked: [`After world {w}`, `Après le monde {w}`], ready: [`Ready`, `Prêt`], hire: [`Recruit`, `Recruter`],
  died: [`The Pixel fell. Back one stage to grow stronger, then it moves on by itself.`, `Le Pixel est tombé. Retour d'une étape pour devenir plus fort, puis il repart tout seul.`],
  timeUp: [`Too slow! The boss chased the Pixel away. Grow stronger and try again.`, `Trop lent ! Le boss a chassé le Pixel. Deviens plus fort et réessaie.`],
  clickHint: [`Click the enemy to hit it too.`, `Clique sur l'ennemi pour le frapper aussi.`],
  phone: [`Mom picked up the phone! Connection lost...`, `Maman a décroché ! Connexion perdue...`],
  bsodHit: [`The Pixel is frozen by a blue screen!`, `Le Pixel est figé par un écran bleu !`],
  miss: [`through!`, `à travers !`], crit: [`CRIT!`, `CRITIQUE !`],
  finPh: [[`FIN: I AM INEVITABLE.`, `FIN : JE SUIS INÉVITABLE.`], [`FIN: EVERY GAME ENDS.`, `FIN : TOUS LES JEUX FINISSENT.`], [`FIN: WHY DO YOU KEEP CLICKING?`, `FIN : POURQUOI TU CONTINUES À CLIQUER ?`]],
};

// ---------- state ----------
const p4Unlocked = () => !!S.st.p3fin || !!S.p4;
function p4Tell() { if (S.era === 9 && p4Unlocked() && !S.st.p4told && S.p3 && S.p3.fin === 2) { S.st.p4told = 1; dlg(T(X10.unlock), { cancel: true, okT: `PIXEL-OS 4 →`, ok: () => p4Enter() }); } }
const p4Fresh = () => ({ gold: 0, st: 1, best: 1, kills: 0, adv: 1, up: {}, comp: {}, cd: {}, hp: 0, en: null, walk: 1, atkT: 0, enT: 0, bossT: 0, stun: 0, frz: 0, mute: 0, dbl: 0, chat: [], killed: 0, deaths: 0, fin: 0, seen: {}, perk: {}, pick: null });
const p4lv = id => S.p4.up[id] || 0;
const p4cl = id => S.p4.comp[id] || 0;
const p4pk = id => (S.p4.perk || {})[id] || 0;
const p4World = () => Math.min(9, Math.ceil(S.p4.st / 10));
const p4InW = () => ((S.p4.st - 1) % 10) + 1;
const p4IsBoss = () => S.p4.st <= 90 && p4InW() === 10;
function p4Say(l) { const c = S.p4.chat; c.push(l); if (c.length > 30) c.shift(); }
// hero stats
const p4Atk = () => 5 * 1.1 ** p4lv(`atk`) * 2 ** Math.floor(p4lv(`atk`) / 25) * 1.5 ** p4pk(`pa`);
const p4MaxHp = () => 60 * 1.1 ** p4lv(`hp`) * 2 ** Math.floor(p4lv(`hp`) / 25) * 1.5 ** p4pk(`ph`);
const p4Spd = () => (1 + 0.08 * p4lv(`spd`)) * (1 + 0.15 * p4pk(`ps`));
const p4Crit = () => 0.05 + 0.02 * p4lv(`crit`) + 0.05 * p4pk(`pc`);
const p4GoldMul = () => (1 + 0.15 * p4lv(`gold`)) * (1 + 0.25 * p4cl(`dev`)) * 1.5 ** p4pk(`pg`);
const p4ClickDmg = () => p4Atk() * (0.4 + 0.2 * p4lv(`click`)) * 2 ** p4pk(`pk`);
const p4UpCost = u => Math.ceil(u.c0 * u.k ** p4lv(u.id));
const p4CompCost = c => Math.ceil(c.c0 * 1.6 ** p4cl(c.id));
// monsters grow with every stage; P4K monsters per stage
const P4K = 5;
const p4BossTime = () => 30 + 10 * p4pk(`pt`);
let P4G = 1.235, P4E = 1.22, P4GG = 1.12;
function p4Spawn() {
  const p = S.p4, s = p.st, w = P4W[p4World() - 1], boss = p4IsBoss();
  const e = boss ? { n: w.boss.n, k: w.boss.k, sp: w.boss.k } : (() => { const x = w.en[Math.random() * w.en.length | 0]; return { n: [x[0], x[1]], sp: x[2] }; })();
  const hp = 14 * P4G ** (s - 1) * (boss ? 7 : 1);
  p.en = Object.assign(e, { hp, max: hp, atk: 1.8 * P4E ** (s - 1) * (boss ? 1.8 : 1), boss, gold: 4.8 * P4GG ** (s - 1) * (boss ? 15 : 1), t: 0, ph: 0, hit: 0 });
  p.bossT = boss ? p4BossTime() : 0; p.enT = 0;
  if (boss && !p.seen[`b` + s]) { p.seen[`b` + s] = 1; }
}

// ---------- the fight ----------
const P4FX = [], P4FLY = [];
const p4Ev = { cat: 0, dev: 0, copi: 0, bip: 0, talk: 15 };
let p4Bub = null;
function p4Num(txt, col, big) { if (S.opt.anim) P4FX.push({ txt, col, t: 0, big, x: 0.68 + Math.random() * 0.08, y: 0.42 + Math.random() * 0.1 }); }
function p4Hit(dmg, crit, src) {
  const p = S.p4, e = p.en;
  if (!e || e.hp <= 0) return;
  if (e.k === `blink` && Math.floor(e.t) % 2 === 1) { p4Num(T(X10.miss), `#7f8ea3`); return; }
  if (e.k === `cat` && Math.random() < 0.5) { p4Num(T(X10.miss), `#c88cff`); return; }
  e.hp -= dmg; e.hit = 0.15;
  p4Num((crit ? T(X10.crit) + ` ` : ``) + fmt(dmg), crit ? `#ffd166` : src === `click` ? `#7fe0ff` : src === `copi` ? `#ff9a3f` : `#fff`, crit || src === `big`);
  if (e.k === `fin` && e.ph < 3 && e.hp < e.max * (1 - 0.25 * (e.ph + 1))) { p4Say(X10.finPh[e.ph]); e.ph++; }
  if (e.hp <= 0) p4Kill();
}
function p4Kill() {
  const p = S.p4, e = p.en, g = e.gold * p4GoldMul();
  p.gold += g; p.killed++; S.st.p4kill = p.killed; p4Num(`+${fmt(g)} ◆`, `#ffd166`);
  p.en = null; p.walk = 0.45; if (p4cl(`dev`)) p4Ev.dev = 0.6;
  if (e.boss) {
    const w = p4World();
    if (w === 9) return p4Final();
    p4Say(P4W[w - 1].win);
    for (const c of P4C) if (c.w === w && !p.seen[`c` + c.id]) { p.seen[`c` + c.id] = 1; p4Say([`> ${c.t[0]} joins the adventure!`, `> ${c.t[1]} rejoint l'aventure !`]); }
    for (const s of P4S) if (s.w === w && !p.seen[`s` + s.id]) { p.seen[`s` + s.id] = 1; p4Say([`> New skill: ${s.t[0]}`, `> Nouvelle compétence : ${s.t[1]}`]); }
    p.st++; p.kills = 0; p.best = Math.max(p.best, p.st); S.st.p4w = Math.max(S.st.p4w || 0, w);
    p.pick = shuffle(P4PK.map(k => k.id)).slice(0, 3);
    p4Say(P4W[w].intro);
    return;
  }
  if (++p.kills >= P4K) {
    p.kills = 0;
    if (p.adv) { p.st++; p.best = Math.max(p.best, p.st); }
  }
}
function p4Fall(msg) {
  const p = S.p4;
  p.deaths++; p.hp = p4MaxHp(); p.en = null; p.walk = 1.5; p.kills = 0;
  // back one stage, but a world's boss stays beaten: no second reward, no second ending
  p.st = Math.max(p.st - 1, Math.floor((p.st - 1) / 10) * 10 + 1);
  toast(T(msg));
  if (!p.seen.fall) { p.seen.fall = 1; p4Say(msg); }
}
function p4Tick(dt) {
  const p = S.p4;
  if (!p || p.fin === 1) return;
  const mx = p4MaxHp();
  if (!(p.hp > 0)) p.hp = mx;
  p.hp = Math.min(mx, p.hp + mx * (0.015 * p4cl(`bip`) + 0.01 * p4pk(`pr`)) * dt);
  for (const k in p.cd) if ((p.cd[k] -= dt) <= 0) delete p.cd[k];
  for (const k of [`stun`, `frz`, `mute`, `dbl`]) if (p[k] > 0) p[k] = Math.max(0, p[k] - dt);
  if (!p.en) { if ((p.walk -= dt) <= 0) p4Spawn(); return; }
  const e = p.en;
  e.t += dt; if (e.hit > 0) e.hit -= dt;
  if (e.boss && p.st <= 90 && (p.bossT -= dt) <= 0) return p4Fall(X10.timeUp);
  // the Pixel attacks
  const dmgMul = p.dbl > 0 ? 2 : 1;
  if (!p.stun && !p.mute) {
    p.atkT += dt * p4Spd();
    while (p.atkT >= 1 && p.en) {
      p.atkT--;
      let d = p4Atk() * dmgMul, cr = Math.random() < p4Crit();
      if (cr) d *= 3;
      if (p4cl(`cat`) && Math.random() < Math.min(0.25, 0.04 + 0.01 * (p4cl(`cat`) - 1))) { d *= 10; p4Num(`🐱 x10`, `#c88cff`); p4Ev.cat = 0.6; }
      p4Hit(d, cr);
    }
  }
  if (!p.en) return;
  if (p4cl(`copi`)) { e.hp -= p4Atk() * 0.4 * p4cl(`copi`) * dmgMul * dt; if (e.hp <= 0) return p4Kill(); }
  // boss tricks
  if (e.k === `regen`) e.hp = Math.min(e.max, e.hp + e.max * 0.02 * dt);
  if (e.k === `drain`) p.hp -= mx * 0.02 * dt;
  if (e.k === `copy`) e.atk = Math.max(e.atk, p4Atk() * 0.25);
  if (e.k === `phone` && Math.floor(e.t / 6) > (e.lastP || 0)) { e.lastP = Math.floor(e.t / 6); p.mute = 2; toast(T(X10.phone)); }
  if (e.k === `bsod` && Math.floor(e.t / 8) > (e.lastP || 0)) { e.lastP = Math.floor(e.t / 8); p.stun = 1.5; toast(T(X10.bsodHit)); }
  // the enemy attacks
  if (!p.frz && (p.enT += dt) >= 1.5) {
    p.enT = 0; p.hp -= e.atk;
    if (e.k === `eat`) e.hp = Math.min(e.max, e.hp + e.max * 0.04);
  }
  if (p.hp <= 0) p4Fall(X10.died);
}

// ---------- actions ----------
const P4A = {
  p4up(id) { const u = P4UP.find(x => x.id === id), p = S.p4; if (!u || (u.max && p4lv(id) >= u.max)) return; const c = p4UpCost(u); if (p.gold < c) return; p.gold -= c; p.up[id] = p4lv(id) + 1; },
  p4comp(id) { const c = P4C.find(x => x.id === id), p = S.p4; if (!c || (S.st.p4w || 0) < c.w) return; const k = p4CompCost(c); if (p.gold < k) return; p.gold -= k; p.comp[id] = p4cl(id) + 1; p4Talk(id); },
  p4skill(id) {
    const s = P4S.find(x => x.id === id), p = S.p4;
    if (!s || (S.st.p4w || 0) < s.w || p.cd[id] > 0) return;
    if (id !== `undo` && !p.en) return;
    p.cd[id] = s.cd; S.st.p4sk = (S.st.p4sk || 0) + 1;
    if (id === `undo`) { p.hp = Math.min(p4MaxHp(), p.hp + p4MaxHp() * 0.6); p4Num(`Ctrl+Z`, `#3ddc84`); }
    else if (id === `bsod`) { p.frz = 5; }
    else if (id === `copy`) { p.dbl = 10; }
    else if (id === `defrag`) p4Hit(p4Atk() * 25, false, `big`);
  },
  p4adv() { S.p4.adv = S.p4.adv ? 0 : 1; },
  p4perk(id) {
    const p = S.p4, k = P4PK.find(x => x.id === id);
    if (!k || !p.pick || !p.pick.includes(id)) return;
    p.perk = p.perk || {}; p.perk[id] = (p.perk[id] || 0) + 1; p.pick = null;
    p4Say([fill(X10.picked[0], { r: k.t[0] }), fill(X10.picked[1], { r: k.t[1] })]);
  },
  p4opt() { p4Panel = p4Panel === `opt` ? `` : `opt`; },
  p4close() { p4Panel = ``; },
  p4back() { p4Panel = ``; dlg(T(X8.backQ), { cancel: true, ok: p2Leave }); },
  p4about() { p4Panel = ``; dlg(T(X10.about)); },
  p4keep() { $(`p4end`).classList.remove(`on`); busy = false; S.p4.fin = 2; S.p4.adv = 1; },
  p4fin() { p4Panel = ``; busy = true; p4Credits(); },
  p4go: () => p4Enter(),
};
let p4Panel = ``;
function p4Enter() { if (!p4Unlocked()) return; modeSwitch(10); }
function p4Start() {
  if (!S.p4) { S.p4 = p4Fresh(); for (const l of X10.intro) p4Say(l); p4Say(P4W[0].intro); S.st.p4 = 1; S.st.p4w = 0; }
  p4Mount();
  const p = S.p4;
  if (p.fin === 1) { p.fin = 2; p.st = 91; p.kills = 0; }
  p.en = null; p.walk = 1; p.hp = p4MaxHp();
  // away: the Pixel farmed the stage it was on, at half speed, up to 8 hours
  const away = (Date.now() - S.last) / 1000;
  if (away > 60 && p.killed > 0) {
    const kps = Math.min(1 / 1.5, p4Spd() * p4Atk() / (14 * P4G ** (p.st - 1))), n = Math.floor(kps * Math.min(away, 8 * 3600) * 0.5);
    if (n > 0) { const g = n * 4.8 * P4GG ** (p.st - 1) * p4GoldMul(); p.gold += g; dlg(fill(T([`While you were away ({t}), the Pixel beat {n} monsters: +{g} bytes.`, `Pendant ton absence ({t}), le Pixel a battu {n} monstres : +{g} octets.`]), { t: dur(away), n: fmt(n), g: fmt(g) })); }
  }
}

// ---------- screen ----------
function p4Mount() {
  if ($(`p4`)) return;
  document.body.insertAdjacentHTML(`beforeend`, `<div id="p4">
<header class="p4top"><div class="p4logo"><i></i><b>PIXEL-OS 4</b></div><div class="p4where" id="p4where"></div><div class="p4gold" id="p4gold"></div><button class="p4b" data-act="p4opt">≡</button></header>
<section class="p4stage"><canvas id="p4cv"></canvas><div class="p4hud" id="p4hud"></div><div class="p4pick" id="p4pick"></div></section>
<div class="p4wins">
<div class="p4win"><h3 id="p4heroH"></h3><div id="p4hero"></div></div>
<div class="p4win"><h3 id="p4compH"></h3><div id="p4comp"></div></div>
<div class="p4win"><h3 id="p4skH"></h3><div id="p4sk"></div></div>
<div class="p4win p4log"><h3 id="p4logH"></h3><div id="p4log"></div></div>
</div>
<div id="p4pan"></div>
<div id="p4end"><div class="p4et"></div></div>
</div>`);
  $(`p4cv`).addEventListener(`pointerdown`, e => {
    const p = S.p4;
    if (busy || !p || !p.en || S.era !== 10) return;
    const r = $(`p4cv`).getBoundingClientRect(), x = (e.clientX - r.left) / r.width;
    if (x < 0.5) return;
    p4Hit(p4ClickDmg() * (p.dbl > 0 ? 2 : 1), false, `click`); S.clicks++; S.st.p4click = (S.st.p4click || 0) + 1;
  });
}
function p4Render() {
  const p = S.p4;
  if (!p || !$(`p4`)) return;
  const w = p4World(), wd = P4W[w - 1];
  setH(`p4where`, `<b>${p.st > 90 ? T(X10.after) : fill(T(X10.world), { w, n: T(wd.t) })}</b><span>${p.st > 90 ? fill(T([`Stage {s}`, `Étape {s}`]), { s: p.st - 90 }) : p4IsBoss() ? `<em class="p4boss">${T(X10.bossSt)}</em>` : fill(T(X10.stage), { s: p4InW() })}${!p4IsBoss() && p.st <= 90 ? ` · ${p.kills}/${P4K}` : ``}</span>`);
  setH(`p4gold`, `<b>◆ ${fmt(p.gold)}</b><small>${T(X10.gold)}</small>`);
  const mx = p4MaxHp();
  setH(`p4hud`, `<button class="p4b p4adv${p.adv ? ` on` : ``}" data-act="p4adv">${T(X10.adv)}${colon()}${T(p.adv ? X10.on : X10.off)}</button>` + (p.en && p.en.boss && p.st <= 90 ? `<div class="p4timer"><i style="width:${p.bossT / p4BossTime() * 100}%"></i><span>${Math.ceil(p.bossT)} s</span></div>` : ``));
  setH(`p4pick`, p.pick ? `<b>${T(X10.pickH)}</b><div>${p.pick.map(id => { const k = P4PK.find(x => x.id === id); return `<button class="p4b" data-act="p4perk:${id}"><b>${T(k.t)}</b><small>${T(k.d)}</small></button>`; }).join(``)}</div>` : ``);
  $(`p4pick`).classList.toggle(`on`, !!p.pick);
  setH(`p4heroH`, `${T(X10.hero)}`);
  const stat = `<div class="p4stats"><span>${T(X10.atk)} <b>${fmt(p4Atk())}</b></span><span>${T(X10.hp)} <b>${fmt(Math.max(0, p.hp))}/${fmt(mx)}</b></span><span>${T(X10.spd)} <b>${dec(p4Spd().toFixed(2))}/s</b></span><span>${T(X10.critL)} <b>${pct(Math.round(p4Crit() * 100))}</b></span></div>`;
  setH(`p4hero`, stat + P4UP.map(u => { const l = p4lv(u.id), mx2 = u.max && l >= u.max, c = p4UpCost(u); return `<button class="p4row${mx2 ? ` done` : p.gold < c ? ` poor` : ``}" data-act="p4up:${u.id}"><span class="p4cur">▶</span><div><b>${T(u.t)} <small>${fill(T(X10.lv), { n: l })}</small></b><small>${T(u.d)}</small></div><em>${mx2 ? `MAX` : `◆ ` + fmt(c)}</em></button>`; }).join(``));
  setH(`p4compH`, T(X10.comp));
  setH(`p4comp`, P4C.map(c => { const lock = (S.st.p4w || 0) < c.w, l = p4cl(c.id), k = p4CompCost(c); return `<button class="p4row${lock ? ` lock` : p.gold < k ? ` poor` : ``}" data-act="p4comp:${c.id}"><span class="p4cur">▶</span><div><b>${lock ? `???` : T(c.t)} ${l ? `<small>${fill(T(X10.lv), { n: l })}</small>` : ``}</b><small>${lock ? fill(T(X10.locked), { w: c.w }) : T(c.d)}</small></div><em>${lock ? `🔒` : `◆ ` + fmt(k)}</em></button>`; }).join(``));
  setH(`p4skH`, T(X10.skills));
  setH(`p4sk`, P4S.map(s => { const lock = (S.st.p4w || 0) < s.w, cd = p.cd[s.id]; return `<button class="p4sk${lock ? ` lock` : cd > 0 ? ` cool` : ` ready`}" data-act="p4skill:${s.id}"><b>${lock ? `???` : T(s.t)}</b><small>${lock ? fill(T(X10.locked), { w: s.w }) : T(s.d)}</small><em>${lock ? `🔒` : cd > 0 ? Math.ceil(cd) + ` s` : T(X10.ready)}</em>${cd > 0 ? `<i style="width:${cd / s.cd * 100}%"></i>` : ``}</button>`; }).join(``) + `<p class="p4dim">${T(X10.clickHint)}</p>`);
  setH(`p4logH`, T(X10.log));
  const was = cache.p4log;
  setH(`p4log`, p.chat.slice(-12).map(l => { const t = T(l), m = /^([A-ZÀ-Ý?! ]+) ?: (.*)$/s.exec(t), who = m ? m[1] : ``; const cls = /COPIXEL/.test(who) ? `cop` : /CHAT|CAT/.test(who) ? `cat` : /^FIN|\?\?\?/.test(who) ? `fin` : /PIXEL/.test(who) ? `px` : /BIP/.test(who) ? `bip` : /MAMAN|MOM/.test(who) ? `mom` : m ? `dev` : `sys`; return `<p class="${cls}">${m ? `<b>${esc(who)}</b> ${esc(m[2])}` : esc(t)}</p>`; }).join(``));
  if (cache.p4log !== was) { const c = $(`p4log`); c.scrollTop = c.scrollHeight; }
  setH(`p4pan`, p4Panel === `opt` ? p4OptHtml() : ``);
  $(`p4pan`).className = p4Panel ? `on ` + p4Panel : ``;
}
function p4OptHtml() {
  const o = (a, t) => `<button class="p4mi" data-act="${a}"><span class="p4cur">▶</span>${t}</button>`;
  return `<div class="p4win p4menu">` + o(`p4back`, `↩ ${T(X8.back)}`) + modeLinks(o, 10) + o(`save`, T([`Save`, `Sauvegarder`])) + o(`lang`, `English / Français`)
    + o(`sci`, `[${S.opt.sci ? `x` : ` `}] ${T(X8.sci)}`) + o(`anim`, `[${S.opt.anim ? `x` : ` `}] ${T(X8.anim)}`)
    + o(`exp`, T([`Export the save`, `Exporter la sauvegarde`])) + o(`imp`, T([`Import a save`, `Importer une sauvegarde`]))
    + (S.p4.fin ? o(`p4fin`, T(X10.again)) : ``) + o(`p4about`, T([`About`, `À propos`])) + o(`hard`, T([`Erase everything`, `Tout effacer`])) + o(`p4close`, T(X8.close)) + `</div>`;
}

// ---------- drawing ----------
const P4BG = {
  term: { sky: [`#020a03`, `#041a08`], gr: `#0b2a10`, ln: `#3dff7a` },
  mac: { sky: [`#f2f2f2`, `#d9d9d9`], gr: `#222`, ln: `#000` },
  dos: { sky: [`#000044`, `#0000aa`], gr: `#000066`, ln: `#55ffff` },
  w95: { sky: [`#007f7f`, `#008080`], gr: `#606060`, ln: `#c0c0c0` },
  xd: { sky: [`#2f6fe0`, `#9cc8ff`], gr: `#3f9b1f`, ln: `#6ccf2d` },
  ios: { sky: [`#1c2333`, `#3a4560`], gr: `#11151f`, ln: `#8fa3c8` },
  w12: { sky: [`#071a4a`, `#1e4fd0`], gr: `#0a1530`, ln: `#5fa0ff` },
  q: { sky: [`#12052e`, `#3a1478`], gr: `#1a0a3a`, ln: `#b45cff` },
  fin: { sky: [`#ffffff`, `#e8e8e8`], gr: `#f4f4f4`, ln: `#111` },
};
let p4T = 0, p4Scroll = 0;
function p4Frame(now) {
  if (S.era !== 10 || !S.p4 || !$(`p4cv`)) return;
  const dt = Math.min(0.1, (now - (p4T || now)) / 1000); p4T = now;
  const p = S.p4, cv = $(`p4cv`), box = cv.parentElement, dpr = devicePixelRatio || 1;
  const W = box.clientWidth, H = box.clientHeight;
  if (cv.width !== W * dpr || cv.height !== H * dpr) { cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + `px`; cv.style.height = H + `px`; }
  const x = cv.getContext(`2d`), t = S.opt.anim ? now / 1000 : 0, wd = P4W[p4World() - 1], bg = P4BG[wd.bg], gy = Math.round(H * 0.78);
  x.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (!p.en && S.opt.anim) p4Scroll += dt * 120;
  // sky and decor
  const gr = x.createLinearGradient(0, 0, 0, gy); gr.addColorStop(0, bg.sky[0]); gr.addColorStop(1, bg.sky[1]); x.fillStyle = gr; x.fillRect(0, 0, W, gy);
  p4Decor(x, wd.bg, W, gy, t);
  x.fillStyle = bg.gr; x.fillRect(0, gy, W, H - gy);
  x.fillStyle = bg.ln; x.fillRect(0, gy, W, 3);
  for (let i = -1; i < W / 40 + 1; i++) { x.globalAlpha = 0.25; x.fillRect(((i * 40 - p4Scroll) % (W + 40) + W + 40) % (W + 40) - 20, gy + 14, 18, 3); x.globalAlpha = 1; }
  // the Pixel
  const s = Math.max(28, Math.round(H * 0.13)), hx = Math.round(W * 0.26), bob = p.en ? 0 : Math.abs(Math.sin(t * 8)) * 4;
  const lunge = p.en && p.atkT > 0.8 ? (p.atkT - 0.8) * 60 : 0;
  p4Friends(x, W, gy, s, hx, t, dt, p);
  p4DrawHero(x, hx + lunge, gy - s - bob, s, t, p);
  if (p.dbl > 0) { x.globalAlpha = 0.45; p4DrawHero(x, hx - s * 1.3, gy - s - bob, s, t, p); x.globalAlpha = 1; }
  p4Bar(x, hx - 10, gy - s - 22, s + 20, Math.max(0, p.hp) / p4MaxHp(), `#3ddc84`);
  // the enemy
  if (p.en) {
    const e = p.en, es = e.boss ? s * 2.6 : s * 1.3, ex = Math.round(W * 0.72 - es / 2), ey = gy - es;
    x.save();
    if (e.hit > 0) { x.translate((Math.random() - 0.5) * 6, 0); }
    if (e.k === `blink` && Math.floor(e.t) % 2 === 1) x.globalAlpha = 0.25;
    if (e.k === `cat`) x.globalAlpha = 0.6 + 0.4 * Math.sin(t * 5);
    if (p.frz > 0) x.filter = `hue-rotate(180deg) saturate(2)`;
    p4DrawFoe(x, e.sp, ex, ey, es, t, e);
    x.restore();
    p4Bar(x, ex, ey - 18, es, Math.max(0, e.hp) / e.max, e.boss ? `#ff5a6e` : `#ffc93c`);
    const light = wd.bg === `mac` || wd.bg === `fin`;
    x.font = `${e.boss ? 22 : 17}px VT323, monospace`; x.textAlign = `center`; x.lineJoin = `round`;
    x.strokeStyle = light ? `#fff` : `#000`; x.lineWidth = 4; x.strokeText(T(e.n), ex + es / 2, ey - 24);
    x.fillStyle = light ? `#111` : `#fff`; x.fillText(T(e.n), ex + es / 2, ey - 24);
  }
  // floating numbers
  x.textAlign = `center`;
  for (const f of P4FX) {
    f.t += dt;
    x.globalAlpha = Math.max(0, 1 - f.t / 0.9); x.font = `${f.big ? 30 : 22}px VT323, monospace`;
    x.fillStyle = `#000`; x.fillText(f.txt, f.x * W + 2, (f.y - f.t * 0.12) * H + 2);
    x.fillStyle = f.col; x.fillText(f.txt, f.x * W, (f.y - f.t * 0.12) * H);
  }
  x.globalAlpha = 1;
  for (let i = P4FX.length - 1; i >= 0; i--) if (P4FX[i].t > 0.9) P4FX.splice(i, 1);
  if (p.mute > 0 || p.stun > 0) { x.font = `20px VT323, monospace`; x.fillStyle = `#ff5a6e`; x.fillText(p.mute > 0 ? `☎ ...` : `:(`, hx + s / 2, gy - s - 34); }
}
function p4Bar(x, X, Y, w, f, col) { x.fillStyle = `rgba(0,0,0,.55)`; x.fillRect(X - 1, Y - 1, w + 2, 8); x.fillStyle = col; x.fillRect(X, Y, w * Math.max(0, Math.min(1, f)), 6); }
// the companions: only those you hired, each with its own little life
const P4CAT = {
  walk: [[`.......#.#`, `.......###`, `.......o#o`, `..#######.`, `.########.`, `.########.`, `.#.#...#.#`, `.#.....#..`], [`.......#.#`, `.......###`, `.......o#o`, `..#######.`, `.########.`, `.########.`, `..#.#.#.#.`, `....#...#.`]],
  sit: [`....#.#.`, `....###.`, `....o#o.`, `....###.`, `...####.`, `..#####.`, `..#####.`, `..##.##.`],
};
function p4Fly(x0, y0, x1, y1, d, col, c, arc) { P4FLY.push({ x0, y0, x1, y1, d, col, c, arc, t: 0 }); }
function p4Friends(x, W, gy, s, hx, t, dt, p) {
  const live = S.opt.anim, walking = !p.en, u = s / 10;
  const hurt = p.hp < p4MaxHp(), spot = {};
  if (live) for (const k of [`cat`, `dev`, `copi`, `bip`]) p4Ev[k] = Math.max(0, p4Ev[k] - dt);
  // the dev, furthest back: walks with a laptop, types during fights, jumps when bytes come in
  if (p4cl(`dev`)) {
    const hop = p4Ev.dev > 0 ? Math.sin(Math.PI * p4Ev.dev / 0.6) * s * 0.35 : walking ? Math.abs(Math.sin(t * 8 + 2)) * 3 : 0;
    const X = hx - s * 2.1, Y = gy - s * 1.35 - hop, step = walking ? Math.sin(t * 8 + 2) * u : 0;
    x.fillStyle = `#2b3350`; x.fillRect(X + 2.6 * u, Y + 10.4 * u, 1.7 * u, 3.1 * u + hop + step); x.fillRect(X + 5 * u, Y + 10.4 * u, 1.7 * u, 3.1 * u + hop - step);
    x.fillStyle = `#4a5578`; x.fillRect(X + 1.8 * u, Y + 4.8 * u, 5.8 * u, 6 * u);
    x.fillStyle = `#f0c9a0`; x.fillRect(X + 2.4 * u, Y + 0.8 * u, 4.6 * u, 4 * u);
    x.fillStyle = `#3b2a1a`; x.fillRect(X + 2.2 * u, Y, 5 * u, 1.4 * u);
    x.fillStyle = `#111`; x.fillRect(X + 3.2 * u, Y + 2 * u, u, u); x.fillRect(X + 5.4 * u, Y + 2 * u, u, u); x.fillRect(X + 4.2 * u, Y + 2.3 * u, 1.2 * u, 0.3 * u);
    x.fillStyle = `#c0c6d8`; x.fillRect(X + 5.6 * u, Y + 7.6 * u, 4.6 * u, 0.9 * u);
    x.fillStyle = `#20263a`; x.fillRect(X + 8.7 * u, Y + 4.6 * u, 1.5 * u, 3 * u);
    x.fillStyle = `#3dff7a`; if (!walking && Math.sin(t * 20) > 0) x.fillRect(X + 6.4 * u + (Math.floor(t * 9) % 3) * u, Y + 7 * u, 0.6 * u, 0.5 * u);
    spot.dev = [X + 4.5 * u, Y];
    if (live && p4Ev.dev > 0.56) p4Fly(W * 0.72, gy - s, X + 4.5 * u, Y + 2 * u, 0.5, `#ffd166`, `◆`, s * 1.6);
  }
  // the cat: walks, sits and waves its tail during fights, pounces on x10 hits
  if (p4cl(`cat`)) {
    const b = p4Ev.cat / 0.6, jump = b > 0 ? Math.sin(Math.PI * b) : 0, cs = s * 0.62, X = hx - s * 1.0 + jump * (W * 0.72 - s * 1.4 - hx), Y = gy - cs - jump * s * 1.5;
    const eye = `#38d4ff`, col = `#b45cff`, tail = Math.sin(t * (walking ? 9 : 3));
    x.fillStyle = col;
    const tx = walking || jump ? X : X + cs * 0.1, ty = Y + cs * 0.55;
    for (let i = 0; i < 4; i++) x.fillRect(tx - i * cs * 0.09, ty - i * cs * 0.13 + tail * i * cs * 0.05, cs * 0.12, cs * 0.14);
    p4Sprite(x, walking || jump ? P4CAT.walk[Math.floor(t * 8) % 2] : P4CAT.sit, X, Y, cs, col, Math.sin(t * 1.7) > 0.96 ? col : eye);
    spot.cat = [X + cs / 2, Y];
  }
  // Bip floats over the Pixel's shoulder and sends it health
  if (p4cl(`bip`)) {
    const X = hx - s * 0.75, Y = gy - s * 1.85 + Math.sin(t * 2.6) * s * 0.1 + (hurt ? Math.sin(t * 16) * 1.5 : 0);
    const light = [`mac`, `fin`].includes(P4W[p4World() - 1].bg);
    x.strokeStyle = light ? `#b57a00` : `#ffd166`; x.lineWidth = Math.max(2, u * 0.7); x.beginPath(); x.roundRect(X, Y, s * 0.42, s * 0.62, [s * 0.2, s * 0.2, s * 0.06, s * 0.06]); x.stroke();
    x.beginPath(); x.roundRect(X + s * 0.1, Y + s * 0.26, s * 0.22, s * 0.28, [s * 0.1, s * 0.1, 0, 0]); x.stroke();
    x.fillStyle = light ? `#111` : `#fff`; if (Math.sin(t * 2.3 + 1) < 0.97) { x.fillRect(X + s * 0.09, Y + s * 0.11, u * 0.9, u * 0.9); x.fillRect(X + s * 0.25, Y + s * 0.11, u * 0.9, u * 0.9); }
    spot.bip = [X + s * 0.2, Y];
    if (live && hurt && !p4Ev.bip) { p4Ev.bip = 0.45; p4Fly(X + s * 0.2, Y + s * 0.6, hx + s * 0.5, gy - s * 0.5, 0.45, `#3ddc84`, `+`, 0); }
  }
  // Copixel stands right in front, to be seen, and fires small copies at the enemy
  if (p4cl(`copi`)) {
    const cs = s * 0.7, X = hx + s * 1.3, Y = gy - cs - (walking ? Math.abs(Math.sin(t * 8 + 1)) * 4 : 0);
    p4DrawHero(x, X + (p4Ev.copi > 0.2 ? 3 : 0), Y, cs, t, p, `#ff8a1f`);
    spot.copi = [X + cs / 2, Y];
    if (live && p.en && !p.stun && !p4Ev.copi) { p4Ev.copi = 0.4; p4Fly(X + cs, Y + cs / 2, W * 0.72, gy - s * 0.8, 0.28, `#ff8a1f`, `■`, 0); }
  }
  if (!live) return;
  // flying bits: bytes, health, Copixel's shots
  x.textAlign = `center`; x.font = `${Math.round(s * 0.42)}px VT323, monospace`;
  for (let i = P4FLY.length - 1; i >= 0; i--) {
    const f = P4FLY[i]; f.t += dt;
    if (f.t >= f.d) { P4FLY.splice(i, 1); continue; }
    const k = f.t / f.d;
    x.fillStyle = f.col; x.fillText(f.c, f.x0 + (f.x1 - f.x0) * k, f.y0 + (f.y1 - f.y0) * k - Math.sin(Math.PI * k) * f.arc);
  }
  // someone speaks from time to time; never all at once
  const who = P4C.filter(c => p4cl(c.id)).map(c => c.id);
  if ((p4Ev.talk -= dt) <= 0) { p4Ev.talk = 14 + Math.random() * 12; if (who.length) p4Talk(who[Math.random() * who.length | 0]); }
  if (p4Bub && spot[p4Bub.id]) {
    if ((p4Bub.left -= dt) <= 0) { p4Bub = null; return; }
    const txt = T(p4Bub.t); x.font = `17px VT323, monospace`;
    const bw = x.measureText(txt).width + 14, [cx, cy] = spot[p4Bub.id], bx = Math.max(4, Math.min(W - bw - 4, cx - bw / 2)), by = Math.max(4, cy - 34);
    x.fillStyle = `#ffffe1`; x.strokeStyle = `#000`; x.lineWidth = 2; x.beginPath(); x.roundRect(bx, by, bw, 24, 6); x.fill(); x.stroke();
    x.fillStyle = `#111`; x.textAlign = `left`; x.fillText(txt, bx + 7, by + 17);
  }
}
function p4DrawHero(x, X, Y, s, t, p, col = `#fff`) {
  x.save(); x.shadowColor = col; x.shadowBlur = 14; x.fillStyle = col; x.fillRect(X, Y, s, s); x.restore();
  // on the white worlds, an outline so the Pixel stays visible
  if ([`mac`, `fin`].includes(P4W[p4World() - 1].bg)) { x.strokeStyle = `#111`; x.lineWidth = 2; x.strokeRect(X + 1, Y + 1, s - 2, s - 2); }
  const u = s / 8, blink = Math.sin(t * 2.3) > 0.97;
  x.fillStyle = `#111`;
  if (!blink) { x.fillRect(X + 2 * u, Y + 2.5 * u, u * 1.2, u * 1.6); x.fillRect(X + 5 * u, Y + 2.5 * u, u * 1.2, u * 1.6); }
  if (p.hp < p4MaxHp() * 0.3) { x.fillRect(X + 3 * u, Y + 6 * u, 2 * u, u * 0.6); } else { x.fillRect(X + 3 * u, Y + 5.6 * u, 2 * u, u * 0.5); x.fillRect(X + 2.6 * u, Y + 5.2 * u, u * 0.5, u * 0.5); x.fillRect(X + 4.9 * u, Y + 5.2 * u, u * 0.5, u * 0.5); }
}
// monsters, drawn from little pixel grids; bosses get their own shapes
const P4SPR = {
  bug: [`x......x`, `.x.##.x.`, `..####..`, `x#o##o#x`, `.######.`, `x######x`, `..####..`, `.x....x.`],
  dot: [`..####..`, `.######.`, `##o##o##`, `########`, `########`, `##x##x##`, `.######.`, `..####..`],
  skull: [`.######.`, `########`, `#oo##oo#`, `#oo##oo#`, `########`, `.##xx##.`, `.#.##.#.`, `.######.`],
  worm: [`........`, `.##.....`, `#o##....`, `####.##.`, `.######.`, `..##.###`, `.....###`, `......#.`],
  virus: [`#..#..#.`, `.#.#.#..`, `..###...`, `######..`, `.#o#o#..`, `.#####..`, `#..#..#.`, `...#....`],
  popup: [`########`, `#xxxxx#x`, `#......#`, `#.o..o.#`, `#......#`, `#.####.#`, `#......#`, `########`],
  spam: [`########`, `##....##`, `#.#..#.#`, `#..##..#`, `#o....o#`, `#......#`, `#......#`, `########`],
  ghost: [`..####..`, `.######.`, `##o##o##`, `########`, `########`, `########`, `#.##.##.`, `.#..#..#`],
  loop: [`.##..##.`, `#..##..#`, `#.o##o.#`, `#..##..#`, `.##..##.`, `........`, `..####..`, `........`],
  clip: [`..####..`, `.#....#.`, `.#.##.#.`, `.#.#o.#.`, `.#.#o.#.`, `.#.##.#.`, `.#....#.`, `..####..`],
};
const P4COL = { term: `#3dff7a`, mac: `#111`, dos: `#55ffff`, w95: `#ffff55`, xd: `#ff5a3c`, ios: `#ff9f0a`, w12: `#9b8cff`, q: `#ff5ce1`, fin: `#111` };
function p4Sprite(x, rows, X, Y, s, col, eye) {
  const n = rows.length, u = s / n;
  rows.forEach((r, j) => [...r].forEach((c, i) => {
    if (c === `.`) return;
    x.fillStyle = c === `o` ? eye : c === `x` ? `rgba(0,0,0,.55)` : col;
    x.fillRect(Math.floor(X + i * u), Math.floor(Y + j * u), Math.ceil(u), Math.ceil(u));
  }));
}
function p4DrawFoe(x, sp, X, Y, s, t, e) {
  const wb = P4W[p4World() - 1].bg, col = P4COL[wb], eye = wb === `mac` || wb === `fin` ? `#fff` : `#111`;
  const b = Math.sin(t * 4 + X) * s * 0.03;
  if (P4SPR[sp]) return p4Sprite(x, P4SPR[sp], X, Y + b, s, col, eye);
  // bosses
  const u = s / 10;
  x.save();
  if (sp === `blink`) { x.fillStyle = `#3dff7a`; x.shadowColor = `#3dff7a`; x.shadowBlur = 20; x.fillRect(X + 2 * u, Y, 6 * u, 10 * u); }
  else if (sp === `eat`) { x.fillStyle = `#111`; x.fillRect(X, Y + 2 * u, 10 * u, 7 * u); for (let i = 0; i < 8; i++) { x.fillStyle = i < 8 ? `#fff` : `#111`; x.fillRect(X + (0.6 + i * 1.12) * u, Y + 3 * u, 0.9 * u, 3 * u); } x.fillStyle = `#d00`; x.font = `${2 * u}px VT323`; x.fillText(`16/16 Ko`, X + 5 * u, Y + 8.4 * u); }
  else if (sp === `phone`) { x.fillStyle = `#e8d9b5`; x.fillRect(X + u, Y + 4 * u, 8 * u, 6 * u); x.fillStyle = `#c0392b`; x.fillRect(X, Y + 2 * u, 10 * u, 2 * u); x.fillRect(X, Y + 1 * u, 2 * u, 2 * u); x.fillRect(X + 8 * u, Y + 1 * u, 2 * u, 2 * u); x.fillStyle = `#555`; for (let i = 0; i < 9; i++) x.fillRect(X + (2.4 + (i % 3) * 2) * u, Y + (5 + Math.floor(i / 3) * 1.6) * u, u, u); }
  else if (sp === `bsod`) { x.fillStyle = `#c0c0c0`; x.fillRect(X, Y, 10 * u, 8 * u); x.fillStyle = `#0000aa`; x.fillRect(X + 0.6 * u, Y + 0.6 * u, 8.8 * u, 6.8 * u); x.fillStyle = `#fff`; x.font = `${4 * u}px VT323`; x.textAlign = `center`; x.fillText(`:(`, X + 5 * u, Y + 5 * u); x.fillStyle = `#808080`; x.fillRect(X + 4 * u, Y + 8 * u, 2 * u, 1.2 * u); x.fillRect(X + 2.5 * u, Y + 9.2 * u, 5 * u, 0.8 * u); }
  else if (sp === `regen`) { x.fillStyle = `#ece9d8`; x.fillRect(X, Y + u, 10 * u, 8 * u); x.fillStyle = `#0a58ca`; x.fillRect(X, Y + u, 10 * u, 1.6 * u); x.fillStyle = `#e33`; x.fillRect(X + 8.4 * u, Y + 1.2 * u, 1.3 * u, 1.2 * u); x.fillStyle = `#111`; x.font = `${1.6 * u}px VT323`; x.textAlign = `center`; x.fillText(T([`YOU WON!!!`, `GAGNÉ !!!`]), X + 5 * u, Y + 5 * u); x.fillStyle = `#3c3`; x.fillRect(X + 3 * u, Y + 6 * u, 4 * u, 1.6 * u); }
  else if (sp === `drain`) { x.strokeStyle = `#eee`; x.lineWidth = u * 0.6; x.strokeRect(X + u, Y + 3 * u, 7.6 * u, 4.4 * u); x.fillStyle = `#eee`; x.fillRect(X + 8.8 * u, Y + 4.4 * u, u, 1.6 * u); x.fillStyle = Math.sin(t * 6) > 0 ? `#ff3b30` : `#7a1712`; x.fillRect(X + 1.6 * u, Y + 3.6 * u, 0.7 * u, 3.2 * u); x.fillStyle = `#fff`; x.font = `${2 * u}px VT323`; x.textAlign = `center`; x.fillText(pct(1), X + 5 * u, Y + 9.6 * u); }
  else if (sp === `copy`) { x.fillStyle = `#ff8a1f`; x.fillRect(X + u, Y + u, 8 * u, 7 * u); x.fillStyle = `#fff`; x.font = `${3.4 * u}px VT323`; x.textAlign = `center`; x.fillText(`∞ ∞`, X + 5 * u, Y + 5 * u); x.fillStyle = `#2a1400`; x.fillRect(X + 3 * u, Y + 6 * u, 4 * u, 0.8 * u); x.fillStyle = `#3a5cff`; x.fillRect(X + 2 * u, Y + 8 * u, 6 * u, 2 * u); }
  else if (sp === `cat`) { x.fillStyle = `#b45cff`; x.beginPath(); x.moveTo(X + u, Y + 3 * u); x.lineTo(X + 2.5 * u, Y); x.lineTo(X + 4 * u, Y + 2.5 * u); x.lineTo(X + 6 * u, Y + 2.5 * u); x.lineTo(X + 7.5 * u, Y); x.lineTo(X + 9 * u, Y + 3 * u); x.lineTo(X + 9 * u, Y + 9 * u); x.lineTo(X + u, Y + 9 * u); x.fill(); x.fillStyle = `#38d4ff`; x.fillRect(X + 3 * u, Y + 4.5 * u, 1.2 * u, 1.2 * u); x.fillRect(X + 5.8 * u, Y + 4.5 * u, 1.2 * u, 1.2 * u); x.fillStyle = `#fff`; x.fillRect(X + 4.6 * u, Y + 6.2 * u, 0.8 * u, 0.6 * u); }
  else if (sp === `fin`) { x.fillStyle = `#111`; x.font = `italic ${7 * u}px Georgia, serif`; x.textAlign = `center`; x.fillText(e.ph >= 3 ? `F I N .` : `FIN`, X + 5 * u, Y + 8 * u); x.fillStyle = `rgba(0,0,0,.12)`; x.fillText(`FIN`, X + 5 * u + Math.sin(t * 3) * 6, Y + 8 * u + 4); }
  x.restore();
}
function p4Decor(x, k, W, H, t) {
  const sc = p4Scroll * 0.3;
  x.save();
  if (k === `term`) { x.fillStyle = `rgba(61,255,122,.12)`; x.font = `16px VT323`; for (let i = 0; i < W / 22; i++) for (let j = 0; j < 6; j++) { const yy = ((t * 30 + i * 37 + j * 70) % (H + 40)) - 20; x.fillText(String.fromCharCode(48 + ((i * 7 + j * 3 + Math.floor(t * 2)) % 42)), i * 22, yy); } }
  else if (k === `mac`) { x.fillStyle = `rgba(0,0,0,.07)`; for (let i = 0; i < W; i += 8) for (let j = 0; j < H; j += 8) if ((i + j) % 16 === 0) x.fillRect(i, j, 4, 4); for (let i = 0; i < 4; i++) { const xx = ((i * 320 - sc) % (W + 200) + W + 200) % (W + 200) - 100; x.fillStyle = `#fff`; x.fillRect(xx, H * 0.2 + i * 18, 150, 90); x.strokeStyle = `#000`; x.lineWidth = 2; x.strokeRect(xx, H * 0.2 + i * 18, 150, 90); x.fillStyle = `#000`; for (let l = 0; l < 6; l++) x.fillRect(xx, H * 0.2 + i * 18 + 3 + l * 2, 150, 1); } }
  else if (k === `dos`) { x.fillStyle = `#fff`; for (let i = 0; i < 60; i++) { const xx = (i * 97 - sc * (1 + i % 3)) % W; x.globalAlpha = 0.3 + (i % 5) * 0.12; x.fillRect((xx + W) % W, (i * 53) % H, 2, 2); } x.globalAlpha = 1; }
  else if (k === `w95`) { for (let i = 0; i < 4; i++) { const xx = ((i * 380 - sc) % (W + 300) + W + 300) % (W + 300) - 150, yy = H * 0.12 + (i % 2) * 70; x.fillStyle = `#c0c0c0`; x.fillRect(xx, yy, 200, 120); x.fillStyle = `#000080`; x.fillRect(xx + 3, yy + 3, 194, 16); x.fillStyle = `#fff`; x.fillRect(xx + 3, yy + 22, 194, 95); } }
  else if (k === `xd`) { x.fillStyle = `#4caf2a`; x.beginPath(); x.ellipse(W * 0.3, H + 60, W * 0.6, 160, 0, Math.PI, 0); x.fill(); x.fillStyle = `rgba(255,255,255,.85)`; for (let i = 0; i < 4; i++) { const xx = ((i * 330 - sc) % (W + 260) + W + 260) % (W + 260) - 130; x.beginPath(); x.ellipse(xx, H * 0.2 + i * 20, 70, 22, 0, 0, Math.PI * 2); x.ellipse(xx + 40, H * 0.2 + i * 20 - 12, 45, 22, 0, 0, Math.PI * 2); x.fill(); } }
  else if (k === `ios`) { const c = [`#34c759`, `#007aff`, `#ff9500`, `#ff2d55`, `#5856d6`, `#ffcc00`]; for (let i = 0; i < 24; i++) { const xx = ((i % 12) * 110 - sc % 110) - 20, yy = 30 + Math.floor(i / 12) * 110; x.globalAlpha = 0.18; x.fillStyle = c[i % c.length]; x.beginPath(); x.roundRect(xx, yy, 70, 70, 16); x.fill(); } x.globalAlpha = 1; }
  else if (k === `w12`) { const g = x.createRadialGradient(W * 0.6, H * 0.9, 10, W * 0.6, H * 0.9, W * 0.6); g.addColorStop(0, `rgba(120,180,255,.6)`); g.addColorStop(1, `rgba(0,0,0,0)`); x.fillStyle = g; x.fillRect(0, 0, W, H); }
  else if (k === `q`) { for (let i = 0; i < 70; i++) { x.fillStyle = i % 3 ? `#fff` : `#40e0d0`; x.globalAlpha = 0.2 + 0.4 * Math.abs(Math.sin(t + i)); x.fillRect((i * 131 - sc * 0.5) % W + (i * 131 - sc * 0.5 < 0 ? W : 0), (i * 71) % H, 2, 2); } x.globalAlpha = 0.25; x.font = `40px system-ui`; x.fillText(`🎲`, (W * 0.8 + Math.sin(t) * 30), H * 0.3); x.globalAlpha = 1; }
  else if (k === `fin`) { x.fillStyle = `rgba(0,0,0,.05)`; x.font = `italic 180px Georgia, serif`; x.textAlign = `center`; x.fillText(`FIN`, W / 2 + Math.sin(t * 0.5) * 20, H * 0.75); x.fillStyle = `rgba(0,0,0,.08)`; for (let i = 0; i < 12; i++) x.fillRect(0, (i * 47 + t * 20) % H, W, 1); }
  x.restore();
}

// ---------- the end ----------
async function p4Final() {
  const p = S.p4;
  busy = true; p.fin = 1; S.st.p4fin = 1; S.st.p4w = 9; save();
  const el = $(`p4end`), box = el.querySelector(`.p4et`);
  el.classList.add(`on`); box.innerHTML = ``;
  for (const l of X10.fin) {
    const d = document.createElement(`div`), t = T(l);
    d.textContent = t; d.className = /^(THE DEV|LE DEV)/.test(t) ? `dev` : /^COPIXEL/.test(t) ? `cop` : /^(THE CAT|LE CHAT)/.test(t) ? `cat` : /^FIN/.test(t) ? `fin` : `sys`;
    box.appendChild(d); await wait(t.length * 40 + 1000);
  }
  await wait(1200);
  p.st = 91; p.kills = 0; p4Credits(); p.fin = 2; save();
}
function p4Credits() {
  const p = S.p4, el = $(`p4end`);
  el.classList.add(`on`);
  el.querySelector(`.p4et`).innerHTML = `<div class="big">${T(X10.thanks)}</div><pre>${esc(fill(T(X10.credits), { k: fmt(p.killed), d: fmt(p.deaths), t: dur(S.time) }))}</pre><div class="fb"><button class="p4b on" data-act="p4keep">${T(X10.keep)}</button><button class="p4b" data-act="p4back">${T(X8.back)}</button></div>`;
}

// ---------- era 10 ----------
NAME_FR_ERA[10] = {};
ERA[10] = {
  os: `PIXEL-OS 4`, year: 2029, unit: [`bytes`, `octets`], mul: 1, start: { ram: 1 }, color: true,
  P: [{ id: `game`, file: `PIXEL-OS 4`, kb: 0, fixed: 1 }], PA: [], HW: [], D: {}, N: {}, LOGS: [],
  HELP: [[`Upgrade the Pixel, click enemies, use skills.`, `Améliore le Pixel, clique sur les ennemis, utilise les compétences.`]],
  end: { c: Infinity, t: [`Finish`, `Finir`], d: [``, ``] },
  about: X10.about,
  A: P4A,
};
MODES[10] = { start: () => p4Start(), tick: dt => p4Tick(dt), render: () => p4Render(), frame: now => p4Frame(now), reset() { if ($(`p4end`)) $(`p4end`).classList.remove(`on`); p4Panel = ``; } };

ACH.push(
  [`p4start`, [`Adventure`, `Aventure`], [`Start PIXEL-OS 4.`, `Démarrer PIXEL-OS 4.`], () => !!S.st.p4, 10],
  [`p4boss`, [`First boss`, `Premier boss`], [`Beat the Blinking Cursor.`, `Battre le Curseur Clignotant.`], () => (S.st.p4w || 0) >= 1, 10],
  [`p4bsod`, [`Blue no more`, `Plus jamais bleu`], [`Beat the Blue Screen of Death.`, `Battre l'Écran Bleu de la Mort.`], () => (S.st.p4w || 0) >= 4, 10],
  [`p4k`, [`Exterminator`, `Exterminateur`], [`Beat 1,000 monsters.`, `Battre 1 000 monstres.`], () => (S.st.p4kill || 0) >= 1000, 10],
  [`p4click`, [`Hands-on`, `Mettre la main à la pâte`], [`Hit enemies 500 times by clicking.`, `Frapper 500 fois les ennemis en cliquant.`], () => (S.st.p4click || 0) >= 500, 10],
  [`p4fin`, [`Not finished`, `Pas fini`], [`Beat FIN.`, `Battre FIN.`], () => !!S.st.p4fin, 10],
);
