// The developer's post-it, stuck on the screen from era 1 on: one small task at a time, click it when done to get paid.
// Also the random two-choice events, and the temporary boosts they give. Uses the engine in game.js at call time.

const PI = {
  head: [`TODO`, `À FAIRE`],
  reward: [`Reward: +{n} px`, `Récompense : +{n} px`],
  done: [`DONE! Click to cash in.`, `FAIT ! Clique pour encaisser.`],
  next: [`The dev is writing the next one...`, `Le dev écrit le suivant...`],
  hide: [`fold`, `plier`], show: [`TODO`, `À FAIRE`],
  boost: { p: [`Production x{m}: {s} s`, `Production x{m} : {s} s`], c: [`Clicks x{m}: {s} s`, `Clics x{m} : {s} s`] },
  quips: [
    [`Closed: works as intended.`, `Fermé : fonctionne comme prévu.`],
    [`Fixed. Well, moved somewhere else.`, `Corrigé. Enfin, déplacé ailleurs.`],
    [`Marked "won't fix". Paid anyway.`, `Marqué « ne sera pas corrigé ». Payé quand même.`],
    [`Done. I'll take the credit.`, `Fait. Je prendrai le mérite.`],
    [`Ticket closed. Three new ones opened.`, `Ticket fermé. Trois nouveaux ouverts.`],
    [`Thanks. You're in the credits now. Small print.`, `Merci. Tu es dans les crédits. En tout petit.`],
    [`PIXCORP says thanks. PIXCORP never says thanks.`, `PIXCORP dit merci. PIXCORP ne dit jamais merci.`],
    [`Perfect. I'm putting this one on the fridge.`, `Parfait. Celui-là, je le colle sur le frigo.`],
    [`You work harder than me. Low bar, but still.`, `Tu bosses plus que moi. La barre est basse, mais quand même.`],
  ],
};

// k: counter or check; n: goal; r: reward weight (x 75 s of production); ok: when this task makes sense
const TK = [
  { id: `clk`, r: 1, n: () => [60, 100, 150][Math.random() * 3 | 0], k: () => S.clicks,
    t: [`Click the pixel {n} times. It likes it. I think.`, `Clique {n} fois sur le pixel. Il aime ça. Je crois.`] },
  { id: `stray`, r: 1.3, ok: () => S.total >= 200, n: () => 1 + (Math.random() < 0.4), k: () => S.st.good,
    t: [`Catch {n} good stray pixel(s). They escaped on my watch.`, `Attrape {n} bon(s) pixel(s) égaré(s). Ils se sont échappés pendant ma garde.`] },
  { id: `hack`, r: 1.5, ok: () => S.bought.hack && S.hackCd < 20, n: () => 1, k: () => S.st.hacks,
    t: [`Crack a password. I forgot mine.`, `Craque un mot de passe. J'ai oublié le mien.`] },
  { id: `close`, r: 0.8, n: () => 3 + (Math.random() * 3 | 0), k: () => S.st.closed,
    t: [`Close {n} windows. Best feature I ever made.`, `Ferme {n} fenêtres. Ma meilleure fonctionnalité.`] },
  { id: `buy`, r: 1, n: () => 2 + (Math.random() < 0.5), k: () => S.st.buys || 0,
    t: [`Buy {n} things. The economy needs you.`, `Achète {n} trucs. L'économie a besoin de toi.`] },
  { id: `earn`, r: 1, n: () => nice(Math.max(perSec() * 70, clickPow() * 50, 50)), k: () => S.total,
    t: [`Earn {n} px. Don't ask what for.`, `Gagne {n} px. Ne demande pas pour quoi faire.`] },
  { id: `prod`, r: 1.4, ok: () => basePerSec() > 0, n: () => nice(basePerSec() * 1.5), abs: () => basePerSec(), u: `/s`,
    t: [`Reach {n} px/s. PIXCORP wants "growth".`, `Atteins {n} px/s. PIXCORP veut de la « croissance ».`] },
  { id: `idle`, r: 0.7, n: () => 30, abs: () => Math.floor(idle), u: ` s`,
    t: [`Touch nothing for 30 s. I need to think.`, `Ne touche à rien pendant 30 s. J'ai besoin de réfléchir.`] },
  { id: `multi`, r: 1, ok: () => !!multiPick(), n: () => { const p = multiPick(); S.x.tkp = p.id; return Math.min(S.bought[p.id], (S.run[p.id] || 0) + 2); },
    abs: () => S.run[S.x.tkp] || 0, t: [`Run {n} {p} at the same time.`, `Fais tourner {n} {p} en même temps.`] },
  { id: `patch`, r: 1, ok: () => E().PA.some(p => !S.patch[p.id] && (!p.req || S.bought[p.req]) && p.cost <= S.px * 2 + perSec() * 120), n: () => 1, k: () => Object.keys(S.patch).length,
    t: [`Install a patch. Any patch. Please.`, `Installe un patch. N'importe lequel. Pitié.`] },
  { id: `dl`, r: 1, ok: () => S.era === 2, n: () => 2, k: () => S.st.dl || 0,
    t: [`Finish {n} downloads. Before dinner.`, `Termine {n} téléchargements. Avant le dîner.`] },
  { id: `bip`, r: 0.8, ok: () => S.era === 3 && S.run.bip && !S.x.bipOk, n: () => 1, k: () => S.st.bip || 0,
    t: [`Say thank you to Bip. He's trying his best.`, `Dis merci à Bip. Il fait de son mieux.`] },
  { id: `nudge`, r: 1, ok: () => S.era === 4 && S.bought.msn, n: () => 2, k: () => S.st.nudge || 0,
    t: [`Get {n} nudges. I need to feel popular.`, `Reçois {n} wizz. J'ai besoin de me sentir populaire.`] },
  { id: `notif`, r: 1, ok: () => S.era === 5, n: () => 2, k: () => S.st.notif || 0,
    t: [`Tap {n} notifications. They won't stop anyway.`, `Touche {n} notifications. De toute façon, elles n'arrêteront pas.`] },
  { id: `box`, r: 1.2, ok: () => S.era === 7 && S.bought.cat, n: () => 1, k: () => S.st.box || 0,
    t: [`Open the cat's box. I don't dare.`, `Ouvre la boîte du chat. Moi, je n'ose pas.`] },
  { id: `heis`, r: 0.8, ok: () => S.era === 7 && S.run.score && !flag(`heisen`), n: () => 3, k: () => S.st.measure || 0,
    t: [`Measure the Score {n} times. I want to be sure. I can't be.`, `Mesure le Score {n} fois. Je veux être sûr. Je ne peux pas.`] },
  { id: `rec`, r: 1.2, ok: () => S.era === 6 && !!S.x.rq, gone: () => !S.x.rq, n: () => 1, k: () => S.st.recoded || 0,
    t: [`Let Copixel recode a program. Watch it closely.`, `Laisse Copixel recoder un programme. Surveille-le de près.`] },
];
// a round number just above v: 1234 -> 1300
function nice(v) { const p = 10 ** Math.max(0, Math.floor(Math.log10(Math.max(v, 1))) - 1); return Math.ceil(v / p) * p; }
function multiPick() { return E().P.find(p => p.multi && p.prod && (S.bought[p.id] || 0) >= 2 && (S.run[p.id] || 0) < S.bought[p.id]); }

const tkRew = r => Math.max(basePerSec() * 75 * r, clickPow() * 50 * r, 30) * (1 + tsum(`tk`));
function tkNew() {
  // the first task of an era is always the easy one
  const x = S.x, list = x.tkLast ? TK.filter(t => t.id !== x.tkLast && (!t.ok || t.ok())) : [TK[0]];
  const t = list[Math.random() * list.length | 0];
  x.tk = { id: t.id, n: t.n(), b: t.k ? t.k() : 0, p: S.x.tkp };
  x.tkLast = t.id; S.tkn = (S.tkn || 1040) + 1;
}
function tkNow() {
  const k = S.x.tk, t = k && TK.find(t => t.id === k.id);
  if (!t) return null;
  // once reached, a task stays done: moving the mouse to cash in must not undo "touch nothing for 30 s"
  if (!k.done && (t.abs ? t.abs() : t.k() - k.b) >= k.n) k.done = 1;
  const v = k.done ? k.n : t.abs ? t.abs() : t.k() - k.b;
  return { t, k, v: Math.min(v, k.n), done: !!k.done };
}
function tkClaim() {
  const c = tkNow();
  if (!c || !c.done) return;
  const n = tkRew(c.t.r);
  gain(n); S.st.tk = (S.st.tk || 0) + 1;
  S.x.tk = null; S.x.tkT = 15;
  toast(`+${fmt(n)} px. ${T(PI.quips[Math.random() * PI.quips.length | 0])}`);
}

// ---------- events: a choice every few minutes ----------
// effects: b = [what, x, seconds] boost (p production, c clicks); g = seconds of production; bet = [chance, win effect, lose effect]; lose = share of pixels lost
const EV = [
  { q: [`The developer offers you a coffee. It's been on the desk since Tuesday.`, `Le développeur t'offre un café. Il est sur le bureau depuis mardi.`],
    a: [`Drink it`, `Le boire`], fa: { b: [`c`, 5, 60], m: [`You can hear colors. Clicks x5 for 60 s.`, `Tu entends les couleurs. Clics x5 pendant 60 s.`] },
    no: [`Politely refuse`, `Refuser poliment`], fb: { g: 40, m: [`He drinks it himself and codes like a madman for a minute.`, `Il le boit lui-même et code comme un fou pendant une minute.`] } },
  { q: [`The cat is walking on the keyboard. It looks very sure of itself.`, `Le chat marche sur le clavier. Il a l'air très sûr de lui.`],
    a: [`Let it work`, `Le laisser bosser`], fa: { bet: [0.6, { b: [`p`, 3, 60], m: [`The cat found an optimization. Production x3 for 60 s.`, `Le chat a trouvé une optimisation. Production x3 pendant 60 s.`] }, { lose: 0.05, m: [`The cat deleted something. You lost 5% of your pixels.`, `Le chat a supprimé un truc. Tu perds 5 % de tes pixels.`] }] },
    no: [`Shoo!`, `Ouste !`], fb: { g: 30, m: [`The cat leaves, offended. It drops a few pixels on the way.`, `Le chat part, vexé. Il fait tomber quelques pixels en route.`] } },
  { q: [`A rubber duck appeared next to the keyboard. It seems to want to talk.`, `Un canard en plastique est apparu à côté du clavier. Il a l'air de vouloir parler.`],
    a: [`Explain your code to it`, `Lui expliquer ton code`], fa: { b: [`p`, 2, 120], m: [`Halfway through, you understand everything. Production x2 for 2 min. The duck takes no credit.`, `À mi-chemin, tu comprends tout. Production x2 pendant 2 min. Le canard ne demande rien.`] },
    no: [`Ignore the duck`, `Ignorer le canard`], fb: { m: [`The duck is disappointed. You can feel it.`, `Le canard est déçu. Tu le sens.`] } },
  { q: [`Pizza delivery. Nobody ordered. It's already paid for.`, `Livraison de pizza. Personne n'a commandé. Elle est déjà payée.`],
    a: [`Eat it`, `La manger`], fa: { b: [`c`, 4, 90], m: [`Pizza power. Clicks x4 for 90 s.`, `La force de la pizza. Clics x4 pendant 90 s.`] },
    no: [`Give it to the dev`, `La donner au dev`], fb: { g: 90, m: [`He codes faster. Briefly. +90 s of production.`, `Il code plus vite. Brièvement. +90 s de production.`] } },
  { q: [`Mom is calling: "Are you STILL on that computer?"`, `Maman appelle : « Tu es ENCORE sur cet ordinateur ? »`],
    a: [`"Yes."`, `« Oui. »`], fa: { g: 60, m: [`She sighs. Somehow, it's motivating. +60 s of production.`, `Elle soupire. Bizarrement, ça motive. +60 s de production.`] },
    no: [`"No." (lie)`, `« Non. » (mentir)`], fb: { b: [`p`, 2, 60], m: [`Lying is very productive. Production x2 for 60 s. Terrible lesson.`, `Mentir, c'est très productif. Production x2 pendant 60 s. Terrible leçon.`] } },
  { q: [`The office lottery! One ticket costs 10% of your pixels. One chance in three to win big.`, `La loterie du bureau ! Un ticket coûte 10 % de tes pixels. Une chance sur trois de gagner gros.`],
    a: [`Buy a ticket`, `Acheter un ticket`], fa: { lose: 0.1, then: { bet: [0.34, { g: 900, m: [`WINNER! +15 min of production.`, `GAGNÉ ! +15 min de production.`] }, { m: [`Lost. The dev bought a sandwich with your pixels.`, `Perdu. Le dev s'est acheté un sandwich avec tes pixels.`] }] } },
    no: [`Never gamble`, `Jamais de jeux d'argent`], fb: { m: [`Wise. Boring, but wise.`, `Sage. Ennuyeux, mais sage.`] } },
  { q: [`The manual says don't overclock. A forum post from 3 am says do it.`, `La notice dit de ne pas overclocker. Un message de forum posté à 3 h du matin dit de le faire.`],
    a: [`Trust the forum`, `Croire le forum`], fa: { b: [`p`, 3, 45], m: [`It works! It smells like toast. Production x3 for 45 s.`, `Ça marche ! Ça sent le pain grillé. Production x3 pendant 45 s.`] },
    no: [`Trust the manual`, `Croire la notice`], fb: { g: 45, m: [`Nothing exploded. +45 s of production, for being reasonable.`, `Rien n'a explosé. +45 s de production, pour avoir été raisonnable.`] } },
  { q: [`Your desk is a disaster. Tidy it?`, `Ton bureau est une catastrophe. Tu ranges ?`],
    a: [`Tidy up`, `Ranger`], fa: { b: [`c`, 3, 120], m: [`You found a second mouse under the mess. Clicks x3 for 2 min.`, `Tu as trouvé une deuxième souris sous le bazar. Clics x3 pendant 2 min.`] },
    no: [`It's organized chaos`, `C'est un chaos organisé`], fb: { b: [`p`, 1.5, 120], m: [`You know exactly where everything is. Production x1.5 for 2 min.`, `Tu sais exactement où est chaque chose. Production x1,5 pendant 2 min.`] } },
  { q: [`An unlabeled floppy is lying on the floor. It says nothing. That's suspicious.`, `Une disquette sans étiquette traîne par terre. Elle ne dit rien. C'est suspect.`], eras: [1, 2, 3],
    a: [`Insert it`, `L'insérer`], fa: { bet: [0.5, { g: 300, m: [`It's full of pixels! +5 min of production.`, `Elle est pleine de pixels ! +5 min de production.`] }, { lose: 0.08, m: [`It's the dev's holiday photos. 8% of your pixels died of embarrassment.`, `Ce sont les photos de vacances du dev. 8 % de tes pixels sont morts de gêne.`] }] },
    no: [`Throw it away`, `La jeter`], fb: { m: [`It goes in the bin. It will haunt you a little.`, `Elle part à la poubelle. Elle va te hanter un peu.`] } },
  { q: [`A USB stick found in the parking lot. It's labeled "SALARIES 2026".`, `Une clé USB trouvée sur le parking. Étiquette : « SALAIRES 2026 ».`], eras: [4, 5, 6],
    a: [`Plug it in`, `La brancher`], fa: { bet: [0.5, { g: 300, m: [`Jackpot, pixels everywhere! +5 min of production.`, `Jackpot, des pixels partout ! +5 min de production.`] }, { lose: 0.08, m: [`It was a trap. Of course it was. -8% pixels.`, `C'était un piège. Évidemment. -8 % de pixels.`] }] },
    no: [`Call IT`, `Appeler le service info`], fb: { g: 60, m: [`IT is impressed. They send you pixels and a sticker.`, `Le service info est impressionné. Il t'envoie des pixels et un autocollant.`] } },
  { q: [`An update is available. Release notes: "Improves stability."`, `Une mise à jour est disponible. Notes de version : « Améliore la stabilité. »`], eras: [3, 4, 5, 6],
    a: [`Update now`, `Mettre à jour`], fa: { bet: [0.7, { b: [`p`, 2, 120], m: [`It actually improved something. Production x2 for 2 min. Nobody knows what.`, `Ça a vraiment amélioré un truc. Production x2 pendant 2 min. Personne ne sait quoi.`] }, { m: [`It installed a new font. That's all.`, `Ça a installé une nouvelle police. C'est tout.`] }] },
    no: [`Remind me later`, `Me le rappeler plus tard`], fb: { g: 20, m: [`It will remind you. Forever.`, `Elle te le rappellera. Pour toujours.`] } },
  { q: [`A free toolbar wants to install itself. It promises "faster pixels".`, `Une barre d'outils gratuite veut s'installer. Elle promet « des pixels plus rapides ».`], eras: [4, 5, 6],
    a: [`Install`, `Installer`], fa: { b: [`p`, 2, 90], m: [`It works! It also changed your home page. Production x2 for 90 s.`, `Ça marche ! Elle a aussi changé ta page d'accueil. Production x2 pendant 90 s.`] },
    no: [`No thanks`, `Non merci`], fb: { g: 30, m: [`Good call. You find 30 s of pixels under the couch.`, `Bien vu. Tu retrouves 30 s de pixels sous le canapé.`] } },
  { q: [`Email: "Forward this to 10 friends or your pixels will vanish."`, `Mail : « Transfère ce message à 10 amis ou tes pixels vont disparaître. »`], eras: [4, 5, 6],
    a: [`Forward it`, `Le transférer`], fa: { g: 120, m: [`Your 10 friends hate you now. +2 min of production, though.`, `Tes 10 amis te détestent. Mais +2 min de production.`] },
    no: [`Delete`, `Supprimer`], fb: { m: [`Nothing vanished. Suspicious.`, `Rien n'a disparu. Suspect.`] } },
  { q: [`PIXCORP sends a satisfaction survey. 140 questions. Mandatory. Optional.`, `PIXCORP envoie un questionnaire de satisfaction. 140 questions. Obligatoire. Facultatif.`],
    a: [`Fill it in`, `Le remplir`], fa: { g: 150, m: [`They pay you in pixels. And send another survey.`, `Ils te paient en pixels. Et envoient un autre questionnaire.`] },
    no: [`Answer "very satisfied" everywhere`, `Répondre « très satisfait » partout`], fb: { b: [`c`, 3, 60], m: [`That took 4 seconds. Clicks x3 for 60 s with the time you saved.`, `Ça a pris 4 secondes. Clics x3 pendant 60 s avec le temps gagné.`] } },
];

function evApply(f) {
  if (!f) return;
  if (f.lose) S.px -= Math.floor(S.px * f.lose);
  if (f.g) gain(Math.max(basePerSec() * f.g, clickPow() * f.g * 0.5, 20) * (1 + tsum(`ev`)) * (rule().evV || 1));
  if (f.b) { const [k, m, s] = f.b; S.x.boost = S.x.boost || {}; S.x.boost[k] = { m, s }; }
  if (f.bet) return evApply(Math.random() < f.bet[0] ? f.bet[1] : f.bet[2]);
  if (f.m) toast(T(f.m));
  if (f.then) evApply(f.then);
}
function evFire() {
  const list = EV.filter(e => !e.eras || e.eras.includes(S.era)), x = S.x;
  const pool = list.filter(e => !(x.evSeen || []).includes(EV.indexOf(e)));
  const e = (pool.length ? pool : list)[Math.random() * (pool.length || list.length) | 0];
  x.evSeen = [...(x.evSeen || []), EV.indexOf(e)];
  S.st.ev = (S.st.ev || 0) + 1;
  dlg(T(e.q), { title: T([`Hmm...`, `Hmm...`]), okT: T(e.a), cancel: T(e.no), ok: () => evApply(e.fa), no: () => evApply(e.fb) });
}
const boostOf = k => { const b = S.x.boost && S.x.boost[k]; return b && b.s > 0 ? b.m : 1; };

function piTick(dt) {
  if (!S.era || busy) return;
  const x = S.x;
  // a task that can no longer be done (Copixel has nothing left to recode) makes way for another
  const cur = x.tk && !x.tk.done && TK.find(t => t.id === x.tk.id);
  if (cur && cur.gone && cur.gone() && !tkNow().done) { x.tk = null; x.tkT = 3; }
  if (!x.tk && (x.tkT = (x.tkT ?? 8) - dt) <= 0) tkNew();
  for (const k in x.boost || {}) if ((x.boost[k].s -= dt) <= 0) delete x.boost[k];
  if ((x.evT = (x.evT ?? rnd(200, 300)) - dt) <= 0 && !$(`dlg`).classList.contains(`on`) && !x.dead) { x.evT = rnd(300, 480) / (rule().ev || 1); evFire(); }
}
function piRender() {
  const el = $(`postit`);
  el.hidden = !S.era || S.era === 8 || !!$(`fin`)?.classList.contains(`on`);
  if (el.hidden) return;
  const x = S.x, c = tkNow();
  let h = `<div class="pt" data-act="pfold"><b>${T(PI.head)}</b>${S.tkn ? ` #${S.tkn}` : ``}<span>${T(S.opt.pfold ? PI.show : PI.hide)}</span></div>`;
  if (!S.opt.pfold) {
    if (!c) h += `<p class="pd">${T(PI.next)}</p>`;
    else {
      const p = c.k.p && prog(c.k.p);
      h += `<p>${esc(fill(T(c.t.t), { n: fmt(c.k.n), p: p ? p.file : `` }))}</p>`;
      h += c.done ? `<p class="go" data-act="pclaim">${T(PI.done)}</p>` : `<div class="pbar"><i style="width:${c.v / c.k.n * 100}%"></i></div><p class="pd">${fmt(Math.max(0, c.v))}${c.t.u || ``} / ${fmt(c.k.n)}${c.t.u || ``}</p>`;
      h += `<p class="pd">${fill(T(PI.reward), { n: fmt(tkRew(c.t.r)) })}</p>`;
    }
  }
  for (const k in x.boost || {}) h += `<p class="pb">${fill(T(PI.boost[k]), { m: String(x.boost[k].m).replace(`.`, S.lang === `fr` ? `,` : `.`), s: Math.ceil(x.boost[k].s) })}</p>`;
  setH(`postit`, h);
  el.classList.toggle(`ready`, !!(c && c.done));
  if (c && c.done) el.dataset.act = `pclaim`; else delete el.dataset.act;
}

ACH.push(
  [`tk1`, [`Sticky note`, `Pense-bête`], [`Finish a task from the post-it.`, `Terminer une tâche du post-it.`], () => (S.st.tk || 0) >= 1],
  [`tk25`, [`Scrum master`, `Scrum master`], [`Finish 25 post-it tasks.`, `Terminer 25 tâches du post-it.`], () => (S.st.tk || 0) >= 25],
  [`tk100`, [`Employee of the month`, `Employé du mois`], [`Finish 100 post-it tasks.`, `Terminer 100 tâches du post-it.`], () => (S.st.tk || 0) >= 100, 3],
  [`ev10`, [`Decision maker`, `Décideur`], [`Make 10 choices.`, `Faire 10 choix.`], () => (S.st.ev || 0) >= 10],
);
