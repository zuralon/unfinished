// Game content: programs, patches, hardware, achievements and every text (EN / FR).
// Texts are [en, fr] pairs unless stated otherwise.

const UI = {
  en: {
    file: `File`, edit: `Edit`, help: `Help`, save: `Save`, exp: `Export save`, imp: `Import save`, hard: `Hard reset`,
    lang: `Français`, sci: `Scientific notation`, anim: `Animations`, helpOff: `Help (not installed)`, about: `About`,
    saved: `Saved.`, expQ: `Copy this code to keep your save:`, impQ: `Paste a save code:`, badImp: `That code is not a save.`, resetQ: `Erase EVERYTHING and start over?`,
    tabs: [`Programs`, `Patches`, `Hardware`], buy: c => `${c} px`, open: `open`, running: `running`, installing: n => `Installing ${n}`,
    oom: `Not enough memory.\nClose a program (X) to make room.`, ok: `OK`, ram: (u, t, f) => `${u} / ${t}` + (f ? `  (${f} fragmented)` : ``),
    perSec: v => `${v} px/s`, perClick: v => `${v} px per click`, achs: (n, t) => `Achievements ${n}/${t} (+${n}% production)`,
    away: (t, g) => `Clock: you were away for ${t}.\nThe screensaver worked for you: +${g} px.`, achGot: n => `Achievement: ${n}`,
    hackTitle: `PASSWORD REQUIRED`, hackTries: n => `ATTEMPTS LEFT: ${n}`, likeness: (w, n) => `> ${w}  LIKENESS=${n}`, hackOk: `ACCESS GRANTED`, hackFail: `TERMINAL LOCKED. TRY AGAIN LATER.`, hackDud: `> Dud removed.`, hackReset: `> Tries reset.`,
    hackReady: `> ACCESS LOCKED FILE`, hackWait: s => `TERMINAL LOCKED (${s} s)`, hackReward: v => `+${v} px recovered from the file.`,
    soon: `The floppy won't go in.\nThe drive for it hasn't been invented yet.\n\n(End of phase 1. The next era is coming.)`,
    era2: `Insert the Minosoft floppy`, era2d: `Requires 64 KB of RAM.`, sticks: (a, b) => `RAM stick ${a} -> ${b} KB`, stickD: `More room for programs.`,
    patchOwned: `installed`, calc: [`Production`, `Per click`, `Total earned`, `Time played`, `Programs closed`],
    clockNow: `It is`, saverIdle: s => `Starts after ${s} s without moving the mouse.`, defragOn: `Defragmenting...`, defragIdle: `Memory is clean.`,
    aboutT: `PIXEL-OS 1\n(c) 1984 PIXCORP Industries\nStatus: unfinished\n\nA game by zuralon.`,
    noPx: `Not enough pixels.`, noPxBlind: `Not enough pixels.\n(Probably. score.exe isn't running, so who knows.)`,
    oomOwned: n => `${n} is installed, but there is no memory left to run it.\nClose something (X), then click its icon on the desktop.`,
    runN: (r, m) => `Running: ${r} / ${m}`, tip: `Tip of the day`, teaser: `??? (keep going)`, installedH: `Installed`,
    cancel: `Cancel`, idle: s => `Idle for ${s} s`, saverRun: `Screensaver active: production x`, blocked: `Bad pixel blocked by the antivirus.`,
    frag: n => `${n} KB fragmented`, ach: `Achievements`, locked: `Locked`,
    subTxt: n => `subscription ${n} px/s`,
  },
  fr: {
    file: `Fichier`, edit: `Édition`, help: `Aide`, save: `Sauvegarder`, exp: `Exporter la sauvegarde`, imp: `Importer une sauvegarde`, hard: `Tout effacer`,
    lang: `English`, sci: `Notation scientifique`, anim: `Animations`, helpOff: `Aide (non installée)`, about: `À propos`,
    saved: `Sauvegardé.`, expQ: `Copie ce code pour garder ta sauvegarde :`, impQ: `Colle un code de sauvegarde :`, badImp: `Ce code n'est pas une sauvegarde.`, resetQ: `Tout effacer et recommencer ?`,
    tabs: [`Programmes`, `Patchs`, `Matériel`], buy: c => `${c} px`, open: `ouvrir`, running: `lancé`, installing: n => `Installation de ${n}`,
    oom: `Mémoire insuffisante.\nFerme un programme (X) pour faire de la place.`, ok: `OK`, ram: (u, t, f) => `${u} / ${t}` + (f ? `  (${f} fragmentés)` : ``),
    perSec: v => `${v} px/s`, perClick: v => `${v} px par clic`, achs: (n, t) => `Succès ${n}/${t} (+${n} % de production)`,
    away: (t, g) => `Horloge : tu étais absent ${t}.\nL'économiseur d'écran a travaillé pour toi : +${g} px.`, achGot: n => `Succès : ${n}`,
    hackTitle: `MOT DE PASSE REQUIS`, hackTries: n => `ESSAIS RESTANTS : ${n}`, likeness: (w, n) => `> ${w}  CORRESPONDANCE=${n}`, hackOk: `ACCÈS AUTORISÉ`, hackFail: `TERMINAL VERROUILLÉ. RÉESSAIE PLUS TARD.`, hackDud: `> Mot inutile retiré.`, hackReset: `> Essais réinitialisés.`,
    hackReady: `> OUVRIR LE FICHIER VERROUILLÉ`, hackWait: s => `TERMINAL VERROUILLÉ (${s} s)`, hackReward: v => `+${v} px récupérés dans le fichier.`,
    soon: `La disquette ne rentre pas.\nLe lecteur qui va avec n'a pas encore été inventé.\n\n(Fin de la phase 1. L'époque suivante arrive.)`,
    era2: `Insérer la disquette Minosoft`, era2d: `Nécessite 64 Ko de RAM.`, sticks: (a, b) => `Barrette RAM ${a} -> ${b} Ko`, stickD: `Plus de place pour tes programmes.`,
    patchOwned: `installé`, calc: [`Production`, `Par clic`, `Total gagné`, `Temps de jeu`, `Programmes fermés`],
    clockNow: `Il est`, saverIdle: s => `Se lance après ${s} s sans bouger la souris.`, defragOn: `Défragmentation...`, defragIdle: `La mémoire est propre.`,
    aboutT: `PIXEL-OS 1\n(c) 1984 PIXCORP Industries\nÉtat : inachevé\n\nUn jeu de zuralon.`,
    noPx: `Pas assez de pixels.`, noPxBlind: `Pas assez de pixels.\n(Sûrement. score.exe ne tourne pas, donc va savoir.)`,
    oomOwned: n => `${n} est installé, mais il n'y a plus de mémoire pour le lancer.\nFerme quelque chose (X), puis clique sur son icône du bureau.`,
    runN: (r, m) => `En cours : ${r} / ${m}`, tip: `Astuce du jour`, teaser: `??? (continue)`, installedH: `Installés`,
    cancel: `Annuler`, idle: s => `Inactif depuis ${s} s`, saverRun: `Économiseur actif : production x`, blocked: `Mauvais pixel bloqué par l'antivirus.`,
    frag: n => `${n} Ko fragmentés`, ach: `Succès`, locked: `Verrouillé`,
    subTxt: n => `abonnement ${n} px/s`,
  },
};

// the minimize and maximize buttons of the Winbows title bars
const NYI = {
  min: [[`Minimize: not coded yet. Closing works, though.`, `Réduire : pas encore codé. Fermer, ça marche.`], [`This button is decorative. Like the developer's gym membership.`, `Ce bouton est décoratif. Comme l'abonnement à la salle de sport du dev.`]],
  max: [[`Maximize: planned for version 2. Of the game, not of the window.`, `Agrandir : prévu pour la version 2. Du jeu, pas de la fenêtre.`], [`The window is already as big as the developer's ambition.`, `La fenêtre est déjà aussi grande que l'ambition du dev.`]],
};

// ---------- Era 0: the terminal tutorial ----------
const P0 = [
  { id: `game0`, file: `GAME.EXE`, kb: 1, fixed: 1 },
  { id: `count`, file: `COUNT.COM`, kb: 1, cost: 10 },
  { id: `auto0`, file: `AUTO.COM`, kb: 2, cost: 20, multi: 1, k: 1.6 },
];
const R0 = [{ to: 5, c: 100 }, { to: 8, c: 500 }, { to: 12, c: 1200 }];
const PA0 = [
  { id: `c0`, cost: 40, t: [`PATCH GAME.EXE (CLICKS X2)`, `PATCH GAME.EXE (CLICS X2)`] },
  { id: `a0`, cost: 90, t: [`PATCH AUTO.COM (SPEED X2)`, `PATCH AUTO.COM (VITESSE X2)`] },
];
const OS1 = 3000;

const TERM = {
  head: [`PIXCORP INDUSTRIES (TM) TERMLINK PROTOCOL`, `PIXCORP INDUSTRIES (TM) PROTOCOLE TERMLINK`],
  boot: [
    [`> BOOT SEQUENCE INITIATED`, `> SÉQUENCE DE DÉMARRAGE`],
    [`> MEMORY CHECK: 3 KB ... OK`, `> TEST MÉMOIRE : 3 KO ... OK`],
    [`> LOADING GAME.EXE ... UNFINISHED`, `> CHARGEMENT DE GAME.EXE ... INACHEVÉ`],
    [`> LAUNCHING ANYWAY.`, `> LANCEMENT QUAND MÊME.`],
  ],
  mem: [`MEMORY`, `MÉMOIRE`], pixels: [`PIXELS`, `PIXELS`], unknown: [`??? (COUNT.COM NOT LOADED)`, `??? (COUNT.COM NON CHARGÉ)`],
  block: [`CLICK THE BLOCK`, `CLIQUE SUR LE BLOC`],
  load: [`LOAD`, `CHARGER`], unload: [`UNLOAD`, `DÉCHARGER`], loaded: [`LOADED`, `CHARGÉ`], buyP: [`BUY`, `ACHETER`],
  memUp: [`INSTALL MEMORY MODULE`, `INSTALLER UN MODULE MÉMOIRE`], os1: [`FEED THE PUNCHED CARD INTO THE READER`, `INSÉRER LA CARTE PERFORÉE DANS LE LECTEUR`],
  oom: [`> ERROR: OUT OF MEMORY. UNLOAD A PROGRAM FIRST.`, `> ERREUR : MÉMOIRE PLEINE. DÉCHARGE UN PROGRAMME D'ABORD.`],
  installing: [`> INSTALLING PIXEL-OS 1... {n}%`, `> INSTALLATION DE PIXEL-OS 1... {n} %`],
  kb: [`KB`, `KO`],
  noPx: [`> ERROR: INSUFFICIENT PIXELS.`, `> ERREUR : PIXELS INSUFFISANTS.`],
  noPxBlind: [`> ERROR: INSUFFICIENT PIXELS. (PROBABLY. COUNT.COM IS NOT LOADED, SO WHO KNOWS.)`, `> ERREUR : PIXELS INSUFFISANTS. (SÛREMENT. COUNT.COM N'EST PAS CHARGÉ, DONC VA SAVOIR.)`],
  good: [`> STRAY PIXEL CAUGHT. +{n} PX.`, `> PIXEL ÉGARÉ ATTRAPÉ. +{n} PX.`],
  bad: [`> THAT ONE WAS A BAD PIXEL. -{n} PX.`, `> C'ÉTAIT UN MAUVAIS PIXEL. -{n} PX.`],
  ach: [`> ACHIEVEMENT UNLOCKED: {n} (+1% PRODUCTION)`, `> SUCCÈS DÉBLOQUÉ : {n} (+1 % DE PRODUCTION)`],
  bought: [`> {n} INSTALLED.`, `> {n} INSTALLÉ.`],
  memOk: [`> MEMORY: {n} KB. THE FAN SOUNDS WORRIED.`, `> MÉMOIRE : {n} KO. LE VENTILATEUR A L'AIR INQUIET.`],
  sys: [`SYSTEM`, `SYSTÈME`], langSw: [`FRANÇAIS`, `ENGLISH`], exp: [`EXPORT`, `EXPORTER`], imp: [`IMPORT`, `IMPORTER`], reset: [`RESET`, `EFFACER`], exit: [`EXIT`, `QUITTER`],
  // tutorial messages, shown once each
  tut: {
    start: [`> GAME.EXE LOADED. CLICK THE BLOCK TO GENERATE PIXELS.`, `> GAME.EXE CHARGÉ. CLIQUE SUR LE BLOC POUR GÉNÉRER DES PIXELS.`],
    blind: [`> NOTE: NO PIXEL COUNTER LOADED. YOU ARE CLICKING BLIND.`, `> NOTE : AUCUN COMPTEUR CHARGÉ. TU CLIQUES À L'AVEUGLE.`],
    count: [`> COUNT.COM AVAILABLE. IT SHOWS YOUR PIXELS. IT USES 1 KB OF MEMORY. EVERYTHING USES MEMORY.`, `> COUNT.COM DISPONIBLE. IL AFFICHE TES PIXELS. IL UTILISE 1 KO DE MÉMOIRE. TOUT UTILISE DE LA MÉMOIRE.`],
    auto: [`> AUTO.COM AVAILABLE. IT CLICKS FOR YOU. IT NEEDS 2 KB. YOU HAVE 3. DO THE MATH.`, `> AUTO.COM DISPONIBLE. IL CLIQUE À TA PLACE. IL LUI FAUT 2 KO. TU EN AS 3. FAIS LE CALCUL.`],
    oom: [`> TIP: UNLOAD COUNT.COM TO MAKE ROOM. YOU WILL NOT SEE YOUR SCORE. THE PIXELS STILL COUNT.`, `> ASTUCE : DÉCHARGE COUNT.COM POUR FAIRE DE LA PLACE. TU NE VERRAS PLUS TON SCORE. LES PIXELS COMPTENT QUAND MÊME.`],
    autoOn: [`> AUTO.COM RUNNING. IT DOES NOT GET TIRED. YET.`, `> AUTO.COM EN COURS. IL NE SE FATIGUE PAS. POUR L'INSTANT.`],
    patch: [`> PATCHES IMPROVE PROGRAMS FOREVER. THEY USE NO MEMORY. FINALLY SOMETHING FREE. (IT IS NOT FREE.)`, `> LES PATCHS AMÉLIORENT LES PROGRAMMES POUR TOUJOURS. ILS N'UTILISENT PAS DE MÉMOIRE. ENFIN UN TRUC GRATUIT. (CE N'EST PAS GRATUIT.)`],
    memUp: [`> MEMORY MODULE AVAILABLE. MORE ROOM, MORE PROGRAMS.`, `> MODULE MÉMOIRE DISPONIBLE. PLUS DE PLACE, PLUS DE PROGRAMMES.`],
    stray: [`> WARNING: STRAY PIXEL DETECTED (*). CLICK IT BEFORE IT LEAVES. SOME ARE GOOD. SOME ARE NOT.`, `> ALERTE : PIXEL ÉGARÉ DÉTECTÉ (*). CLIQUE DESSUS AVANT QU'IL PARTE. CERTAINS SONT BONS. D'AUTRES NON.`],
    hack: [`> LOCKED FILE FOUND: DEV_LOG.TXT. PASSWORD REQUIRED. LIKENESS = LETTERS IN THE RIGHT PLACE. CLICK A BRACKET PAIR LIKE (..) OR [..] FOR HELP.`, `> FICHIER VERROUILLÉ TROUVÉ : DEV_LOG.TXT. MOT DE PASSE REQUIS. CORRESPONDANCE = LETTRES BIEN PLACÉES. CLIQUE SUR UNE PAIRE COMME (..) OU [..] POUR T'AIDER.`],
    os1: [`> SOMETHING SLID UNDER THE DOOR: A PUNCHED CARD. 80 COLUMNS. NO RETURN ADDRESS.`, `> QUELQUE CHOSE A GLISSÉ SOUS LA PORTE : UNE CARTE PERFORÉE. 80 COLONNES. PAS D'EXPÉDITEUR.`],
  },
};
const WORDS = {
  5: [`PIXEL`, `CACHE`, `BYTES`, `DRIVE`, `LOGIC`, `ERROR`, `PATCH`, `DEBUG`, `CLICK`, `STACK`, `QUEUE`, `SHELL`, `BOOTS`, `FLOPS`, `SPRAY`, `CRASH`],
  7: [`PROGRAM`, `COMPILE`, `DESKTOP`, `WINDOWS`, `CURSORS`, `FRAGILE`, `RESTART`, `BOOTING`, `LOADING`, `PATCHES`, `DRIVERS`, `SCREENS`, `CLICKER`, `MEMORYS`],
};
const DEVLOG = [
  [`DEV_LOG_001: Day 1. I made a pixel. One pixel. It's beautiful. I'll make the rest of the game tomorrow.`, `DEV_LOG_001 : Jour 1. J'ai fait un pixel. Un seul. Il est magnifique. Je fais le reste du jeu demain.`],
  [`DEV_LOG_002: Day 40. Still one pixel. But now it counts clicks. That's progress.`, `DEV_LOG_002 : Jour 40. Toujours un pixel. Mais il compte les clics, maintenant. C'est un progrès.`],
  [`DEV_LOG_003: Day 112. PIXCORP wants a graphical interface. I want sleep. We'll see who wins.`, `DEV_LOG_003 : Jour 112. PIXCORP veut une interface graphique. Moi, je veux dormir. On verra qui gagne.`],
  [`DEV_LOG_004: Day 200. Windows! Little boxes you can close. Closing them is my favorite feature.`, `DEV_LOG_004 : Jour 200. Des fenêtres ! Des petites boîtes qu'on peut fermer. Les fermer, c'est ma fonctionnalité préférée.`],
  [`DEV_LOG_005: Day 260. Someone asked when the game will be finished. I laughed. Then I cried. Then I added a clock.`, `DEV_LOG_005 : Jour 260. Quelqu'un m'a demandé quand le jeu serait fini. J'ai ri. Puis j'ai pleuré. Puis j'ai ajouté une horloge.`],
  [`DEV_LOG_006: Day 301. The pixels escape. I don't know how. I've decided it's a feature.`, `DEV_LOG_006 : Jour 301. Les pixels s'échappent. Je ne sais pas comment. J'ai décidé que c'était une fonctionnalité.`],
  [`DEV_LOG_007: Day 365. One year. One pixel. Many windows. My cat walked on the keyboard and fixed a bug.`, `DEV_LOG_007 : Jour 365. Un an. Un pixel. Plein de fenêtres. Mon chat a marché sur le clavier et a corrigé un bug.`],
  [`DEV_LOG_008: Day 400. PIXEL-OS 2 needs a hard drive. I need a vacation. Same thing, really.`, `DEV_LOG_008 : Jour 400. PIXEL-OS 2 a besoin d'un disque dur. Moi, j'ai besoin de vacances. C'est pareil, en fait.`],
];

// ---------- Era 1: PIXEL-OS 1 desktop ----------
// kb: memory while running; zip: patch that shrinks it to zkb; prod: px/s per copy; multi: several copies.
const P1 = [
  { id: `game`, file: `game.exe`, kb: 2, fixed: 1, c: `#ff55ff` },
  { id: `install`, file: `install.exe`, kb: 1, c: `#aaaaaa` },
  { id: `score`, file: `score.exe`, kb: 1, cost: 15, c: `#55ff55` },
  { id: `notes`, file: `notes.txt`, kb: 1, cost: 25, c: `#ffffaa` },
  { id: `help`, file: `help.exe`, kb: 1, cost: 80, c: `#aaffff` },
  { id: `auto`, file: `autoclick.exe`, kb: 2, cost: 50, multi: 1, k: 1.32, prod: 2, c: `#5555ff` },
  { id: `cursor`, file: `cursor.drv`, kb: 1, cost: 120, c: `#ffaa00` },
  { id: `trophy`, file: `trophy.exe`, kb: 1, cost: 200, c: `#ffd700` },
  { id: `clock`, file: `clock.exe`, kb: 1, cost: 250, c: `#ff8888` },
  { id: `cga`, file: `cga.drv`, kb: 3, cost: 400, c: `#55ffff` },
  { id: `calc`, file: `calc.exe`, kb: 1, cost: 500, c: `#cccccc` },
  { id: `bot`, file: `clickbot.exe`, kb: 4, cost: 700, multi: 1, k: 1.32, prod: 16, c: `#00aa00` },
  { id: `saver`, file: `screensaver.scr`, kb: 2, cost: 1500, c: `#aa00aa` },
  { id: `defrag`, file: `defrag.exe`, kb: 2, cost: 3000, c: `#aa5500` },
  { id: `hack`, file: `hack.exe`, kb: 2, cost: 5000, c: `#00ff00` },
  { id: `render`, file: `render.exe`, kb: 8, cost: 12000, multi: 1, k: 1.32, prod: 140, c: `#ff5555` },
  { id: `comp`, file: `compiler.exe`, kb: 16, cost: 250000, multi: 1, k: 1.32, prod: 1300, c: `#ffff55` },
];
const R1 = [{ to: 12, c: 1000 }, { to: 16, c: 5000 }, { to: 24, c: 25000 }, { to: 32, c: 120000 }, { to: 48, c: 900000 }, { to: 64, c: 5000000 }];
const OS2 = 3e7;
// one-time upgrades; req: program that must have been bought
const PA1 = [
  { id: `click1`, cost: 300, c: 2, t: [`Faster finger`, `Doigt rapide`], d: [`Clicks x2.`, `Clics x2.`] },
  { id: `auto1`, cost: 1200, m: [`auto`, 2], req: `auto`, t: [`autoclick v1.1`, `autoclick v1.1`], d: [`Autoclicks x2.`, `Autoclics x2.`] },
  { id: `stray1`, cost: 2000, f: `strayslow`, t: [`Slow strays`, `Pixels égarés lents`], d: [`Stray pixels move 40% slower.`, `Les pixels égarés vont 40 % moins vite.`] },
  { id: `click2`, cost: 8000, c: 3, t: [`Mechanical keyboard`, `Clavier mécanique`], d: [`Clicks x3. The noise is part of the experience.`, `Clics x3. Le bruit fait partie de l'expérience.`] },
  { id: `bot1`, cost: 10000, m: [`bot`, 2], req: `bot`, t: [`clickbot overclock`, `clickbot overclocké`], d: [`Clickbots x2. Smells a bit hot.`, `Clickbots x2. Ça sent un peu le chaud.`] },
  { id: `zauto`, cost: 15000, z: [`auto`, 1], req: `auto`, t: [`autoclick.zip`, `autoclick.zip`], d: [`autoclick.exe uses 1 KB instead of 2.`, `autoclick.exe utilise 1 Ko au lieu de 2.`] },
  { id: `offline`, cost: 20000, f: `offline`, req: `clock`, t: [`clock.exe battery`, `Pile pour clock.exe`], d: [`Offline progress at 100% instead of 50%.`, `Progression hors ligne à 100 % au lieu de 50 %.`] },
  { id: `defrag1`, cost: 25000, f: `defrag`, req: `defrag`, t: [`Tidy memory`, `Mémoire rangée`], d: [`Memory fragments twice as slowly.`, `La mémoire se fragmente deux fois moins vite.`] },
  { id: `auto2`, cost: 30000, m: [`auto`, 3], req: `auto`, t: [`autoclick v2.0`, `autoclick v2.0`], d: [`Autoclicks x3.`, `Autoclics x3.`] },
  { id: `stray2`, cost: 40000, f: `strayx3`, t: [`Pixel bounty`, `Prime aux pixels`], d: [`Good stray pixels are worth x3.`, `Les bons pixels égarés valent x3.`] },
  { id: `macro`, cost: 50000, f: `macro`, t: [`Click macro`, `Macro de clic`], d: [`Each click also gives 5% of your px/s.`, `Chaque clic donne aussi 5 % de tes px/s.`] },
  { id: `saver1`, cost: 60000, f: `saver5`, req: `saver`, t: [`Deep sleep`, `Sommeil profond`], d: [`Screensaver: x5 instead of x3.`, `Économiseur d'écran : x5 au lieu de x3.`] },
  { id: `zbot`, cost: 120000, z: [`bot`, 2], req: `bot`, t: [`clickbot.zip`, `clickbot.zip`], d: [`clickbot.exe uses 2 KB instead of 4.`, `clickbot.exe utilise 2 Ko au lieu de 4.`] },
  { id: `render1`, cost: 150000, m: [`render`, 2], req: `render`, t: [`render cache`, `Cache de rendu`], d: [`Renders x2.`, `Rendus x2.`] },
  { id: `bot2`, cost: 250000, m: [`bot`, 3], req: `bot`, t: [`clickbot v2.0`, `clickbot v2.0`], d: [`Clickbots x3.`, `Clickbots x3.`] },
  { id: `click3`, cost: 300000, c: 4, t: [`Second hand`, `Deuxième main`], d: [`Clicks x4. Where did it come from? Don't ask.`, `Clics x4. D'où elle sort ? Ne demande pas.`] },
  { id: `magnet`, cost: 500000, f: `magnet`, t: [`Stray antivirus`, `Antivirus à pixels`], d: [`Bad stray pixels can't steal anymore.`, `Les mauvais pixels égarés ne volent plus rien.`] },
  { id: `zrender`, cost: 900000, z: [`render`, 5], req: `render`, t: [`render.zip`, `render.zip`], d: [`render.exe uses 5 KB instead of 8.`, `render.exe utilise 5 Ko au lieu de 8.`] },
  { id: `render2`, cost: 1500000, m: [`render`, 3], req: `render`, t: [`render v2.0`, `render v2.0`], d: [`Renders x3.`, `Rendus x3.`] },
  { id: `comp1`, cost: 2500000, m: [`comp`, 2], req: `comp`, t: [`Optimized compiler`, `Compilateur optimisé`], d: [`Compilers x2.`, `Compilateurs x2.`] },
  { id: `zcomp`, cost: 6000000, z: [`comp`, 10], req: `comp`, t: [`compiler.zip`, `compiler.zip`], d: [`compiler.exe uses 10 KB instead of 16.`, `compiler.exe utilise 10 Ko au lieu de 16.`] },
  { id: `comp2`, cost: 9000000, m: [`comp`, 3], req: `comp`, t: [`compiler v2.0`, `compiler v2.0`], d: [`Compilers x3.`, `Compilateurs x3.`] },
];
const D1 = {
  score: [`Shows your score.`, `Affiche ton score.`],
  notes: [`The developer's notes.`, `Les notes du développeur.`],
  help: [`Makes the Help menu work. Tips inside.`, `Fait marcher le menu Aide. Astuces dedans.`],
  auto: [`+2 px/s. Run as many as your memory allows.`, `+2 px/s. Lance-en autant que ta mémoire le permet.`],
  cursor: [`Your real mouse. The white dot is always late.`, `Ta vraie souris. Le point blanc est toujours en retard.`],
  trophy: [`Shows your achievements.`, `Affiche tes succès.`],
  clock: [`Keeps time. Needed for offline progress.`, `Garde l'heure. Nécessaire pour progresser hors ligne.`],
  cga: [`4 colors. Good stray pixels turn cyan, bad ones magenta.`, `4 couleurs. Les bons pixels égarés deviennent cyan, les mauvais magenta.`],
  calc: [`Shows your stats: production, per click, totals.`, `Affiche tes stats : production, par clic, totaux.`],
  bot: [`+16 px/s. An autoclick with a degree.`, `+16 px/s. Un autoclic avec un diplôme.`],
  saver: [`Production x3 when you don't move the mouse for 20 s.`, `Production x3 quand tu ne bouges pas la souris pendant 20 s.`],
  defrag: [`Repairs fragmented memory while it runs.`, `Répare la mémoire fragmentée tant qu'il tourne.`],
  hack: [`Terminal password minigame. Rewards pixels and dev logs.`, `Mini-jeu du mot de passe. Rapporte des pixels et des journaux du développeur.`],
  render: [`+140 px/s. Renders pixels in advance. Nobody asked.`, `+140 px/s. Calcule des pixels à l'avance. Personne n'a demandé.`],
  comp: [`+1300 px/s. Compiles pixels from scratch.`, `+1300 px/s. Compile des pixels à partir de rien.`],
};
const N1 = {
  start: [`game.exe: still one pixel. Now in a window. It takes 2 KB. I know, that's a lot for one pixel.`, `game.exe : toujours un pixel. Mais dans une fenêtre. Il prend 2 Ko. Je sais, c'est beaucoup pour un pixel.`],
  score: [`score.exe: 1 KB for a number. The price of truth.`, `score.exe : 1 Ko pour un nombre. C'est le prix de la vérité.`],
  notes: [`notes.txt: it's me, the developer. I'm using 1 KB of your memory to talk to you. Sorry. Hello.`, `notes.txt : c'est moi, le développeur. J'utilise 1 Ko de ta mémoire pour te parler. Pardon. Bonjour.`],
  help: [`help.exe: the Help menu works now. It took me three versions.`, `help.exe : le menu Aide marche, maintenant. Il m'a fallu trois versions.`],
  auto: [`autoclick.exe: clicks for you. You can run several. Your memory doesn't multiply, though.`, `autoclick.exe : clique à ta place. Tu peux en lancer plusieurs. Ta mémoire, elle, ne se multiplie pas.`],
  cursor: [`cursor.drv: your real mouse. The white dot did its best.`, `cursor.drv : ta vraie souris. Le point blanc a fait de son mieux.`],
  trophy: [`trophy.exe: 1 KB of pride.`, `trophy.exe : 1 Ko de fierté.`],
  clock: [`clock.exe: the computer knows what time it is. Time passes even when you're away. That's new for both of us.`, `clock.exe : l'ordinateur sait l'heure qu'il est. Le temps passe même quand tu n'es pas là. C'est nouveau pour nous deux.`],
  cga: [`cga.drv: four colors! Cyan, magenta, white, black. The eighties called. They want their palette back. Too late.`, `cga.drv : quatre couleurs ! Cyan, magenta, blanc, noir. Les années 80 ont appelé. Elles veulent récupérer leur palette. Trop tard.`],
  calc: [`calc.exe: does the math. I failed math. calc.exe did not.`, `calc.exe : fait les calculs. J'ai raté mes maths. Pas calc.exe.`],
  bot: [`clickbot.exe: an autoclick that went to college. 4 KB. Never shuts up about it.`, `clickbot.exe : un autoclic qui a fait des études. 4 Ko. Il en parle tout le temps.`],
  saver: [`screensaver.scr: when you stop moving, it takes over. It works better than you. Don't take it personally.`, `screensaver.scr : quand tu arrêtes de bouger, il prend le relais. Il travaille mieux que toi. Ne le prends pas mal.`],
  defrag: [`defrag.exe: puts your memory back in order. I wish it worked on my apartment.`, `defrag.exe : remet ta mémoire en ordre. J'aimerais qu'il marche sur mon appartement.`],
  hack: [`hack.exe: the old terminal password trick, in a window. Don't tell PIXCORP.`, `hack.exe : le vieux coup du mot de passe, dans une fenêtre. Ne le dis pas à PIXCORP.`],
  render: [`render.exe: renders pixels in advance. Nobody asked it to. It does it anyway.`, `render.exe : calcule des pixels à l'avance. Personne ne lui a demandé. Il le fait quand même.`],
  comp: [`compiler.exe: 16 KB. My first computer had less than that. So does yours, probably.`, `compiler.exe : 16 Ko. Mon premier ordinateur avait moins que ça. Le tien aussi, sûrement.`],
  oom: [`Your memory is full. You'll have to choose. I wanted more memory too. I wanted a lot of things.`, `Ta mémoire est pleine. Il va falloir choisir. Moi aussi, je voulais plus de mémoire. Je voulais plein de choses.`],
  shopClosed: [`You closed the shop to make room. Respect. Its icon is on the desktop.`, `Tu as fermé la boutique pour faire de la place. Respect. Son icône est sur le bureau.`],
  blind: [`You closed the score. Brave. The pixels still count. You just don't know how many.`, `Tu as fermé le score. Courageux. Les pixels comptent toujours. Tu ne sais juste plus combien.`],
  frag: [`Your memory is fragmenting. Little holes everywhere. Like my sleep schedule. defrag.exe can fix it.`, `Ta mémoire se fragmente. Des petits trous partout. Comme mes nuits. defrag.exe peut réparer ça.`],
  stray: [`Known bug: pixels escape game.exe. Some are worth a lot. Some steal. Without colors, good luck telling which.`, `Bug connu : des pixels s'échappent de game.exe. Certains valent cher. D'autres volent. Sans couleurs, bonne chance pour savoir lesquels.`],
  r12: [`+4 KB. The fan is making a noise I've never heard before.`, `+4 Ko. Le ventilateur fait un bruit que je ne connaissais pas.`],
  r16: [`16 KB. I can finally run two things and think at the same time.`, `16 Ko. Je peux enfin faire tourner deux trucs et réfléchir en même temps.`],
  r24: [`24 KB. My parents' first car had less computing power. It also had no pixels.`, `24 Ko. La première voiture de mes parents avait moins de puissance de calcul. Et aucun pixel.`],
  r32: [`32 KB. That's 32,768 bytes. I counted. Twice.`, `32 Ko. Ça fait 32 768 octets. J'ai compté. Deux fois.`],
  r48: [`48 KB. The computer is warm. I keep my coffee on it now.`, `48 Ko. L'ordinateur est chaud. Je pose mon café dessus, maintenant.`],
  r64: [`64 KB. Maximum memory for this OS. To go further, you need a new one. I'm working on it. Sort of.`, `64 Ko. Le maximum pour cet OS. Pour aller plus loin, il en faut un nouveau. J'y travaille. En quelque sorte.`],
  m1k: [`1,000 pixels. In 1984, that was a whole screen. Today it's a start.`, `1 000 pixels. En 1984, c'était un écran entier. Aujourd'hui, c'est un début.`],
  m100k: [`100,000 pixels. I don't know where you're keeping them all.`, `100 000 pixels. Je ne sais pas où tu les ranges tous.`],
  m1m: [`One million pixels. PIXCORP sent me a card. It's blank. They couldn't afford the ink.`, `Un million de pixels. PIXCORP m'a envoyé une carte. Elle est vierge. Ils n'avaient pas les moyens pour l'encre.`],
};
const HELP = [
  [`Close programs (X) to free memory. Everything costs memory. Even knowing your score.`, `Ferme des programmes (X) pour libérer de la mémoire. Tout coûte de la mémoire. Même connaître ton score.`],
  [`Patches use no memory. Buy them.`, `Les patchs n'utilisent pas de mémoire. Achète-les.`],
  [`.zip patches make programs smaller. Same power, more room.`, `Les patchs .zip rendent les programmes plus petits. Même puissance, plus de place.`],
  [`With cga.drv, good stray pixels are cyan and bad ones magenta. Without it, it's a gamble.`, `Avec cga.drv, les bons pixels égarés sont cyan et les mauvais magenta. Sans lui, c'est un pari.`],
  [`clock.exe must be running when you leave, or the computer won't notice time passing.`, `clock.exe doit tourner quand tu pars, sinon l'ordinateur ne remarque pas que le temps passe.`],
  [`screensaver.scr: stop moving the mouse for 20 s and production goes x3. Go make a coffee.`, `screensaver.scr : ne bouge plus la souris pendant 20 s et la production passe x3. Va te faire un café.`],
  [`hack.exe: LIKENESS is the number of letters in the right place.`, `hack.exe : la CORRESPONDANCE, c'est le nombre de lettres bien placées.`],
  [`hack.exe: click a bracket pair like (..) or [..]. It removes a wrong word, or gives your tries back.`, `hack.exe : clique sur une paire comme (..) ou [..]. Ça retire un mauvais mot, ou ça rend tes essais.`],
  [`Have you tried turning it off and on again? Don't. It's not implemented yet.`, `Tu as essayé d'éteindre et de rallumer ? Ne le fais pas. Ce n'est pas encore codé.`],
];

// ---------- Deliveries: the item that ends each era and installs the next OS ----------
const DELIVERY = [
  { os: `PIXEL-OS 1`, item: [`PUNCHED CARD`, `CARTE PERFORÉE`], text: [
    [`READING CARD... 80 COLUMNS, 12 ROWS, 341 HOLES.`, `LECTURE DE LA CARTE... 80 COLONNES, 12 LIGNES, 341 TROUS.`],
    [`MESSAGE DECODED:`, `MESSAGE DÉCODÉ :`],
    [`"TO WHOEVER FINDS THIS: COMPUTING IS ABOUT TO CHANGE.`, `« À QUI TROUVERA CECI : L'INFORMATIQUE VA CHANGER.`],
    [`SOON, NOBODY WILL READ GREEN LINES. YOU WILL POINT AT PICTURES.`, `BIENTÔT, PLUS PERSONNE NE LIRA DE LIGNES VERTES. ON MONTRERA DES IMAGES DU DOIGT.`],
    [`WITH A SMALL BOX ON WHEELS. WE WILL CALL IT A MOUSE. STOP LAUGHING.`, `AVEC UNE PETITE BOÎTE À ROULETTES. ON L'APPELLERA UNE SOURIS. ARRÊTE DE RIRE.`],
    [`THE PICTURES WILL LIVE IN WINDOWS. YOU WILL CLOSE THEM. A LOT.`, `LES IMAGES VIVRONT DANS DES FENÊTRES. TU LES FERMERAS. BEAUCOUP.`],
    [`64 KB SHOULD BE ENOUGH FOR ANYBODY."`, `64 KO DEVRAIENT SUFFIRE À TOUT LE MONDE. »`],
    [`END OF CARD. INSTALLING PIXEL-OS 1...`, `FIN DE LA CARTE. INSTALLATION DE PIXEL-OS 1...`],
  ] },
  { os: `MINO-DOS`, item: [`5.25" floppy disk`, `Disquette 5,25"`], text: [
    [`A floppy disk arrived in a padded envelope. No sender.`, `Une disquette est arrivée dans une enveloppe matelassée. Pas d'expéditeur.`],
    [`Handwritten label: "MINOSOFT - CONFIDENTIAL - DO NOT COPY". Someone copied it.`, `Étiquette écrite à la main : « MINOSOFT - CONFIDENTIEL - NE PAS COPIER ». Quelqu'un l'a copiée.`],
    [`It comes from the garage of a famous tech visionary. He says he wrote it himself. He bought it from some guy for 50 dollars.`, `Elle vient du garage d'un célèbre visionnaire de la tech. Il dit qu'il l'a écrite lui-même. Il l'a achetée 50 dollars à un type.`],
    [`Inside: MINO-DOS. Hard drives. Modems. Sixteen colors.`, `Dedans : MINO-DOS. Des disques durs. Des modems. Seize couleurs.`],
  ] },
  { os: `Winbows 95`, item: [`3.5" floppy disk`, `Disquette 3,5"`], text: [
    [`Another floppy. 3.5 inch this time. Progress.`, `Encore une disquette. 3,5 pouces cette fois. Le progrès.`],
    [`Label: "IDM - PROJECT WINBOWS 95 - TOP SECRET - DO NOT SHOW MINOSOFT". Minosoft has seen it. Minosoft has already sold it.`, `Étiquette : « IDM - PROJET WINBOWS 95 - TOP SECRET - NE PAS MONTRER À MINOSOFT ». Minosoft l'a vue. Minosoft l'a déjà vendue.`],
    [`Inside: a Start button. To shut down the computer, you click Start. Nobody at IDM could explain why.`, `Dedans : un bouton Démarrer. Pour éteindre l'ordinateur, on clique sur Démarrer. Personne chez IDM n'a su expliquer pourquoi.`],
  ] },
  { os: `Winbows XD`, item: [`CD-ROM from the future`, `CD-ROM du futur`], text: [
    [`A CD-ROM fell through the ceiling. It's still warm.`, `Un CD-ROM est tombé du plafond. Il est encore chaud.`],
    [`Date printed on it: 2001. Today is 1999.`, `Date imprimée dessus : 2001. On est en 1999.`],
    [`It contains a technology that connects every computer in the world to every other computer. What could possibly go wrong.`, `Il contient une technologie qui relie chaque ordinateur du monde à tous les autres. Qu'est-ce qui pourrait mal tourner.`],
    [`Also on the CD: 500 free hours. Nobody knows of what.`, `Aussi sur le CD : 500 heures gratuites. Personne ne sait de quoi.`],
  ] },
  { os: `iBrick`, item: [`A heavy parcel`, `Un colis lourd`], text: [
    [`A parcel. Heavy. Inside: a brick.`, `Un colis. Lourd. Dedans : une brique.`],
    [`Instructions: "YOUR NEW COMPUTER. IN YOUR POCKET."`, `Notice : « VOTRE NOUVEL ORDINATEUR. DANS VOTRE POCHE. »`],
    [`It doesn't fit in your pocket. The instructions say: "Get bigger pockets."`, `Elle ne rentre pas dans ta poche. La notice dit : « Prenez des poches plus grandes. »`],
    [`Battery: 2 days. Then 1 day. Then you will carry the charger everywhere. Forever.`, `Batterie : 2 jours. Puis 1 jour. Puis tu porteras le chargeur partout. Pour toujours.`],
  ] },
  { os: `Winbows 12`, item: [`A robot at the door`, `Un robot à la porte`], text: [
    [`Someone knocks. It's a robot. Under its arm: your old PC from 2001. The one with Winbows XD.`, `On frappe. C'est un robot. Sous son bras : ton vieux PC de 2001. Celui avec Winbows XD.`],
    [`"HELLO. I AM AN AI. I WILL RECODE YOUR SYSTEM. I HAVE READ ALL THE CODE IN THE WORLD. MOSTLY THE BAD PARTS."`, `« BONJOUR. JE SUIS UNE IA. JE VAIS RECODER TON SYSTÈME. J'AI LU TOUT LE CODE DU MONDE. SURTOUT LES MAUVAIS MORCEAUX. »`],
    [`"RESULT: WINBOWS 12. ESTIMATED TIME: 3 MINUTES. OR 3 YEARS. I AM BAD AT ESTIMATES."`, `« RÉSULTAT : WINBOWS 12. TEMPS ESTIMÉ : 3 MINUTES. OU 3 ANS. JE SUIS NUL EN ESTIMATIONS. »`],
    [`Let it in? It is already in.`, `Le laisser entrer ? Il est déjà entré.`],
  ] },
];

const ERA = [];
ERA[1] = {
  os: `PIXEL-OS 1`, skin: 1, year: 1984, unit: [`KB`, `Ko`], mul: 1, start: { ram: 8 }, frag: 16,
  MS: [[`m1k`, 1e3], [`m100k`, 1e5], [`m1m`, 1e6]], P: P1, PA: PA1, D: D1, N: N1, HELP,
  HW: [{ r: `ram`, s: R1, t: [`RAM stick {a} -> {b} KB`, `Barrette RAM {a} -> {b} Ko`], d: [`More room for programs.`, `Plus de place pour tes programmes.`] }],
  end: { c: OS2, t: [`Insert the Minosoft floppy`, `Insérer la disquette Minosoft`], d: [`Requires every hardware upgrade.`, `Nécessite toutes les améliorations matérielles.`] },
};

// ---------- Achievements: each gives +1% production ----------
const ACH = [
  [`click1`, [`Hello world`, `Bonjour le monde`], [`Click once.`, `Cliquer une fois.`]],
  [`click100`, [`Warming up`, `Échauffement`], [`Click 100 times.`, `Cliquer 100 fois.`]],
  [`click1k`, [`Tendinitis`, `Tendinite`], [`Click 1,000 times.`, `Cliquer 1 000 fois.`]],
  [`click10k`, [`Carpal tunnel`, `Canal carpien`], [`Click 10,000 times.`, `Cliquer 10 000 fois.`]],
  [`oom`, [`Out of memory`, `Mémoire pleine`], [`Run out of memory.`, `Manquer de mémoire.`]],
  [`blind`, [`Blindfolded`, `Les yeux bandés`], [`Earn 500 px without a score on screen.`, `Gagner 500 px sans score à l'écran.`]],
  [`hack1`, [`Hacker voice: I'm in`, `Voix de hacker : je suis dedans`], [`Crack a password.`, `Trouver un mot de passe.`]],
  [`hack5`, [`Script kiddie`, `Pirate du dimanche`], [`Crack 5 passwords.`, `Trouver 5 mots de passe.`]],
  [`stray1`, [`Gotcha`, `Attrapé`], [`Catch a good stray pixel.`, `Attraper un bon pixel égaré.`]],
  [`stray20`, [`Pixel hunter`, `Chasseur de pixels`], [`Catch 20 good stray pixels.`, `Attraper 20 bons pixels égarés.`]],
  [`strayBad`, [`Oops`, `Oups`], [`Catch a bad stray pixel.`, `Attraper un mauvais pixel égaré.`]],
  [`gui`, [`Graphical`, `Graphique`], [`Install PIXEL-OS 1.`, `Installer PIXEL-OS 1.`]],
  [`shop`, [`Window shopping`, `Lèche-vitrines`], [`Close the shop to make room.`, `Fermer la boutique pour faire de la place.`]],
  [`auto5`, [`Assembly line`, `Travail à la chaîne`], [`Run 5 autoclicks at once.`, `Lancer 5 autoclics en même temps.`]],
  [`cga`, [`Four colors`, `Quatre couleurs`], [`Install cga.drv.`, `Installer cga.drv.`]],
  [`saver`, [`Gone fishing`, `Parti pêcher`], [`Let the screensaver start.`, `Laisser l'économiseur d'écran se lancer.`]],
  [`defrag`, [`Spring cleaning`, `Grand ménage`], [`Repair a fragmented block.`, `Réparer un bloc fragmenté.`]],
  [`offline`, [`Time flies`, `Le temps file`], [`Earn pixels while away.`, `Gagner des pixels en étant absent.`]],
  [`ram16`, [`Two things at once`, `Deux choses à la fois`], [`Reach 16 KB of RAM.`, `Atteindre 16 Ko de RAM.`]],
  [`ram32`, [`Power user`, `Utilisateur avancé`], [`Reach 32 KB of RAM.`, `Atteindre 32 Ko de RAM.`]],
  [`ram64`, [`Maxed out`, `Au maximum`], [`Reach 64 KB of RAM.`, `Atteindre 64 Ko de RAM.`]],
  [`patch10`, [`Patch Tuesday`, `Mardi des patchs`], [`Install 10 patches.`, `Installer 10 patchs.`]],
  [`px1k`, [`Kilopixel`, `Kilopixel`], [`Earn 1,000 px.`, `Gagner 1 000 px.`]],
  [`px1m`, [`Megapixel`, `Mégapixel`], [`Earn 1,000,000 px.`, `Gagner 1 000 000 px.`]],
  [`all`, [`Collector`, `Collectionneur`], [`Buy every PIXEL-OS 1 program.`, `Acheter tous les programmes de PIXEL-OS 1.`]],
];
