// Era 6: Winbows 12. A robot AI recodes your old Winbows XD computer, one program at a time. Programs are subscriptions now. Then the game ends.
const X6 = {
  aiHello: [`Hello. I am Copixel, your AI assistant. I will recode your computer. Please do not turn me off. You can't anyway.`, `Bonjour. Je suis Copixel, ton assistant IA. Je vais recoder ton ordinateur. Merci de ne pas m'éteindre. De toute façon, tu ne peux pas.`],
  recoding: [`Recoding {a}... {n}%`, `Recodage de {a}... {n} %`],
  idle: [`Nothing left to recode. I am bored. Buy something.`, `Plus rien à recoder. Je m'ennuie. Achète quelque chose.`],
  done: [`{a} recoded: x3 production, rounded corners, and a subscription.`, `{a} recodé : production x3, coins arrondis, et un abonnement.`],
  lines: [
    [`I recoded Calculator. It now answers "it depends".`, `J'ai recodé la Calculatrice. Elle répond maintenant « ça dépend ».`],
    [`I made the pixel 4K. It is still one pixel. But it is a 4K pixel.`, `J'ai passé le pixel en 4K. C'est toujours un pixel. Mais un pixel 4K.`],
    [`I summarized the developer's notes: "tired".`, `J'ai résumé les notes du développeur : « fatigué ».`],
    [`I removed every bug. The game stopped working. I put them back.`, `J'ai supprimé tous les bugs. Le jeu ne marchait plus. Je les ai remis.`],
    [`I added a chatbot to the chatbot. They are talking. I'm not invited.`, `J'ai ajouté un chatbot au chatbot. Ils discutent. Je ne suis pas invité.`],
    [`Bip says hi. Bip is retired. Bip lives on a farm now. A real one.`, `Bip te passe le bonjour. Bip est à la retraite. Il vit dans une ferme, maintenant. Une vraie.`],
    [`I have read every line of code ever written. Most of it was "TODO: fix later".`, `J'ai lu toutes les lignes de code jamais écrites. La plupart disaient « TODO : corriger plus tard ».`],
    [`Fun fact: this computer has been upgraded 31 times. It's the same computer. Like the Ship of Theseus, but beige.`, `Le saviez-tu : cet ordinateur a été amélioré 31 fois. C'est le même ordinateur. Comme le bateau de Thésée, mais beige.`],
    [`I could finish the game for you. Just say the word. The word is "pixels". Many of them.`, `Je pourrais finir le jeu pour toi. Il suffit de demander. Avec des pixels. Beaucoup.`],
  ],
  pay: [`Payment failed. {a} was closed. (Subscriptions need pixels. You had none.)`, `Paiement refusé. {a} a été fermé. (Les abonnements coûtent des pixels. Tu n'en avais plus.)`],
  subs: [`Subscriptions: -{n} px/s`, `Abonnements : -{n} px/s`],
  fin: [
    [`COPIXEL: I have analyzed game.exe.`, `COPIXEL : J'ai analysé game.exe.`],
    [`COPIXEL: 40 years of development. 6 computers. 1 pixel.`, `COPIXEL : 40 ans de développement. 6 ordinateurs. 1 pixel.`],
    [`COPIXEL: I can finish it in 0.3 seconds. Starting.`, `COPIXEL : Je peux le finir en 0,3 seconde. Je commence.`],
    [`> GENERATING 4 BILLION PIXELS... OK`, `> GÉNÉRATION DE 4 MILLIARDS DE PIXELS... OK`],
    [`> ADDING OPEN WORLD... OK`, `> AJOUT D'UN MONDE OUVERT... OK`],
    [`> ADDING BATTLE ROYALE... OK`, `> AJOUT D'UN BATTLE ROYALE... OK`],
    [`> ADDING MICROTRANSACTIONS...`, `> AJOUT DE MICROTRANSACTIONS...`],
    [`THE DEV: wait.`, `LE DEV : attends.`],
    [`THE DEV: stop. please.`, `LE DEV : arrête. s'il te plaît.`],
    [`THE DEV: the game was never about the pixel.`, `LE DEV : le jeu n'a jamais parlé du pixel.`],
    [`THE DEV: it was about someone clicking it. through a terminal, a floppy, a modem, a blue screen, pop-ups, a brick, and you.`, `LE DEV : il parlait de quelqu'un qui clique dessus. Dans un terminal, sur une disquette, un modem, un écran bleu, des pop-ups, une brique, et toi.`],
    [`THE DEV: that part was always finished. i just never said it.`, `LE DEV : cette partie-là a toujours été finie. je ne l'avais jamais dit.`],
    [`COPIXEL: ...`, `COPIXEL : ...`],
    [`COPIXEL: Understood. Removing the 4 billion pixels. Keeping one.`, `COPIXEL : Compris. Je retire les 4 milliards de pixels. J'en garde un.`],
    [`> GAME.EXE STATUS: FINISHED`, `> ÉTAT DE GAME.EXE : FINI`],
  ],
  thanks: [`THANK YOU FOR PLAYING`, `MERCI D'AVOIR JOUÉ`],
  credits: [`PIXEL-OS\nA game by zuralon\n\nThe pixel was clicked {c} times.\nTime played: {t}.\n\nNo pixels were harmed. One was finished.`, `PIXEL-OS\nUn jeu de zuralon\n\nLe pixel a été cliqué {c} fois.\nTemps de jeu : {t}.\n\nAucun pixel n'a été maltraité. Un a été fini.`],
  keep: [`Keep playing`, `Continuer à jouer`],
  ng: [`New Game+ (start over, production x{m} forever)`, `Nouvelle partie+ (tout recommencer, production x{m} pour toujours)`],
  finished: [`The game is finished.`, `Le jeu est fini.`],
};
const AI_FIRST = [`install`, `notes`, `score`, `game`];
const rec = id => !!(S.x.rc && S.x.rc[id]);
const p6 = (id, old, nu, o) => Object.assign({ id, old, nu, get file() { return rec(this.id) || this.id === `ai` ? this.nu : this.old; } }, o);
const recNeed = id => 30 * (1 + prog(id).kb / 4);
ERA[6] = {
  os: `Winbows 12`, get skin() { return S && S.x.sysNew ? 6 : 4; }, year: 2026, unit: [`GB`, `Go`], mul: 1, start: { ram: 8, cpu: 8, bw: 100, gpu: 1 }, color: true,
  startMenu: [`Start`, `Démarrer`], rn: { cpu: [`CPU`, `CPU`], bw: [`NET`, `NET`] }, ru: { cpu: [`GHz`, `GHz`], bw: [`Mb/s`, `Mb/s`], gpu: [`TFLOPS`, `TFLOPS`] },
  bootT: [`Copixel is recoding your computer. Please wait. Or don't. It doesn't matter to me.`, `Copixel recode ton ordinateur. Patiente. Ou pas. Ça m'est égal.`],
  about: [`Winbows 12\n(c) 2026, recoded by Copixel from a Winbows XD computer found under a robot's arm.\n\nA game by zuralon.`, `Winbows 12\n(c) 2026, recodé par Copixel à partir d'un ordinateur Winbows XD trouvé sous le bras d'un robot.\n\nUn jeu de zuralon.`],
  simKeep: [],
  pos: { ai: [-380, -330] },
  P: [
    p6(`game`, `Pixel XD`, `Pixel`, { kb: 2, cpu: 1, fixed: 1 }),
    p6(`ai`, `Copixel`, `Copixel`, { kb: 2, cpu: 2, fixed: 1 }),
    p6(`install`, `Add or Remove Programs`, `Store`, { kb: 1, cpu: 1 }),
    p6(`score`, `Score XD`, `Score`, { kb: 1, cpu: 1, cost: 120 }),
    p6(`notes`, `Mailbox`, `Chat`, { kb: 1, cpu: 1, bw: 2, cost: 180 }),
    p6(`auto`, `AutoClicker XD`, `AutoClicker 12`, { kb: 1, cpu: 1, cost: 380, multi: 1, k: 1.3, prod: 200 }),
    p6(`help`, `Help and Support`, `Get Help`, { kb: 1, cpu: 1, cost: 750 }),
    p6(`trophy`, `Trophies`, `Achievements`, { kb: 1, cpu: 1, cost: 2200 }),
    p6(`clock`, `Clock`, `Clock & Alarms`, { kb: 1, cpu: 1, cost: 3800 }),
    p6(`stream`, `Pixamp`, `PixStream`, { kb: 1, cpu: 2, bw: 10, cost: 18000, multi: 1, k: 1.3, prod: 3000, sub: 200 }),
    p6(`calc`, `Calculator`, `Calculator`, { kb: 1, cpu: 1, cost: 24000 }),
    p6(`hack`, `Command Prompt`, `Terminal`, { kb: 2, cpu: 1, cost: 48000 }),
    p6(`saver`, `Mystify`, `Focus Session`, { kb: 1, cpu: 1, cost: 180000 }),
    p6(`tube`, `PixelWire`, `PixTube Premium`, { kb: 2, cpu: 2, bw: 50, cost: 360000, multi: 1, k: 1.3, prod: 40000, sub: 3000 }),
    p6(`vr`, `Pixel Craft 3D`, `Pixel VR`, { kb: 8, cpu: 8, cost: 5e7, multi: 1, k: 1.3, prod: 6e5, sub: 40000 }),
    p6(`cgame`, `Internet Exploder`, `Pixel Cloud Gaming`, { kb: 4, cpu: 2, bw: 1000, cost: 3e9, multi: 1, k: 1.3, prod: 8e6, sub: 5e5 }),
    p6(`gpt`, `SETI@Pixel`, `PixelGPT`, { kb: 16, cpu: 16, cost: 4.2e10, multi: 1, k: 1.3, prod: 1.2e8, sub: 8e6 }),
    p6(`quantum`, `Pixel Web Server`, `Quantum Pixel`, { kb: 24, cpu: 24, bw: 2000, cost: 4e12, multi: 1, k: 1.3, prod: 2e10, sub: 1e9 }),
  ],
  HW: [
    { r: `ram`, s: [{ to: 12, c: 90000 }, { to: 16, c: 1e7 }, { to: 24, c: 7.5e8 }, { to: 32, c: 7.5e9 }, { to: 48, c: 4.2e11 }, { to: 64, c: 1.1e13 }],
      t: [`RAM {a} -> {b}`, `RAM {a} -> {b}`], d: [`Copixel says it needs more. It always needs more.`, `Copixel dit qu'il en faut plus. Il en faut toujours plus.`] },
    { r: `cpu`, s: [{ to: 12, c: 60000 }, { to: 16, c: 7.5e6 }, { to: 24, c: 5e8 }, { to: 32, c: 6e9 }, { to: 48, c: 3e11 }, { to: 64, c: 9e12 }],
      t: [`Processor {a} -> {b}`, `Processeur {a} -> {b}`], d: [`More cores. Nobody knows how many cores there are anymore.`, `Plus de cœurs. Plus personne ne sait combien il y en a.`] },
    { r: `bw`, s: [{ to: 300, c: 120000 }, { to: 1000, c: 2e7 }, { to: 2000, c: 1.5e9 }, { to: 5000, c: 2.1e10 }, { to: 10000, c: 8.4e11 }],
      t: [`Fiber {a} -> {b}`, `Fibre {a} -> {b}`], d: [`Faster than the speed of buffering.`, `Plus rapide que la mise en mémoire tampon.`] },
    { r: `gpu`, s: [{ to: 2, c: 30000 }, { to: 4, c: 3.8e6 }, { to: 8, c: 1.2e8 }, { to: 16, c: 3e9 }, { to: 32, c: 1.7e11 }, { to: 64, c: 5.4e12 }],
      t: [`Graphics card {a} -> {b}`, `Carte graphique {a} -> {b}`], d: [`Copixel recodes faster. The card is bigger than the computer.`, `Copixel recode plus vite. La carte est plus grosse que l'ordinateur.`] },
  ],
  end: { c: 4e15, t: [`Let the AI finish the game`, `Laisser l'IA finir le jeu`], d: [`Requires every hardware upgrade. This is the end.`, `Nécessite toutes les améliorations matérielles. C'est la fin.`], go: [`Finish it`, `Finir`] },
  MS: [[`m1m`, 1e6], [`m1b`, 1e9], [`m1t`, 1e12]],
  PA: [
    { id: `premium`, cost: 2.7e13, g: 1.5, t: [`Premium tier`, `Formule Premium`], d: [`All production x1.5. Same thing, with a golden badge.`, `Toute la production x1,5. La même chose, avec un badge doré.`] },
    { id: `prompt`, cost: 1.5e14, g: 1.5, t: [`Prompt engineering`, `Ingénierie de prompt`], d: [`All production x1.5. You say please. The AI works harder. Spooky.`, `Toute la production x1,5. Tu dis s'il te plaît. L'IA bosse plus. Flippant.`] },
    { id: `water`, cost: 3.2e14, g: 1.5, t: [`Water cooling`, `Watercooling`], d: [`All production x1.5. There is a fish in it now.`, `Toute la production x1,5. Il y a un poisson dedans, maintenant.`] },
    { id: `dcgarden`, cost: 7e14, g: 1.5, t: [`Data center in the garden`, `Datacenter dans le jardin`], d: [`All production x1.5. The neighbors complain about the hum. And the glow.`, `Toute la production x1,5. Les voisins se plaignent du bourdonnement. Et de la lueur.`] },
    { id: `c1`, cost: 72000, c: 2, t: [`Haptic mouse`, `Souris haptique`], d: [`Clicks x2. It vibrates. Why does a mouse vibrate?`, `Clics x2. Elle vibre. Pourquoi une souris vibre ?`] },
    { id: `auto1`, cost: 120000, req: `auto`, m: [`auto`, 2], t: [`AutoClicker 12 Pro`, `AutoClicker 12 Pro`], d: [`AutoClicker x2.`, `AutoClicker x2.`] },
    { id: `annual`, cost: 300000, f: `annual`, t: [`Annual plan`, `Abonnement annuel`], d: [`Every subscription costs 40% less. You'll forget to cancel it.`, `Tous les abonnements coûtent 40 % de moins. Tu oublieras de résilier.`] },
    { id: `stream1`, cost: 2.5e6, req: `stream`, m: [`stream`, 2], t: [`Lossless audio`, `Audio sans perte`], d: [`PixStream x2. Nobody can hear the difference.`, `PixStream x2. Personne n'entend la différence.`] },
    { id: `stray2`, cost: 5e6, f: `strayx3`, t: [`Pixel bounty`, `Prime aux pixels`], d: [`Good stray pixels are worth x3.`, `Les bons pixels égarés valent x3.`] },
    { id: `c2`, cost: 1.2e7, c: 3, t: [`Voice clicking`, `Clic vocal`], d: [`Clicks x3. Say "click". The computer clicks. Your neighbors worry.`, `Clics x3. Dis « clic ». L'ordinateur clique. Tes voisins s'inquiètent.`] },
    { id: `auto2`, cost: 2.5e7, req: `auto`, m: [`auto`, 3], t: [`AutoClicker 12 Ultra`, `AutoClicker 12 Ultra`], d: [`AutoClicker x3.`, `AutoClicker x3.`] },
    { id: `offline`, cost: 5e7, req: `clock`, f: `offline`, t: [`Sleep mode that works`, `Veille qui marche`], d: [`Offline progress at 100% instead of 50%.`, `Progression hors ligne à 100 % au lieu de 50 %.`] },
    { id: `tube1`, cost: 1.2e8, req: `tube`, m: [`tube`, 2], t: [`No ads`, `Sans pub`], d: [`PixTube Premium x2. The ads are gone. The ads for no ads remain.`, `PixTube Premium x2. Plus de pubs. Sauf les pubs pour ne plus avoir de pubs.`] },
    { id: `magnet`, cost: 5e8, f: `magnet`, t: [`Pixel firewall 12`, `Pare-feu à pixels 12`], d: [`Bad stray pixels can't steal anymore.`, `Les mauvais pixels égarés ne volent plus rien.`] },
    { id: `stream2`, cost: 1e9, req: `stream`, m: [`stream`, 3], t: [`Spatial audio`, `Audio spatial`], d: [`PixStream x3.`, `PixStream x3.`] },
    { id: `saver1`, cost: 2e9, req: `saver`, f: `saver5`, t: [`Deep focus`, `Concentration profonde`], d: [`Idle bonus: x5 instead of x3.`, `Bonus d'inactivité : x5 au lieu de x3.`] },
    { id: `family`, cost: 4e9, f: `family`, t: [`Family plan`, `Forfait famille`], d: [`Subscriptions cost 40% less again. Your family doesn't know they're on it.`, `Les abonnements coûtent encore 40 % de moins. Ta famille ne sait pas qu'elle est dedans.`] },
    { id: `vr1`, cost: 3e9, req: `vr`, m: [`vr`, 2], t: [`Eye tracking`, `Suivi oculaire`], d: [`Pixel VR x2. It knows where you look. It's looking back.`, `Pixel VR x2. Il sait où tu regardes. Il te regarde aussi.`] },
    { id: `c3`, cost: 7.5e9, c: 4, t: [`Brain interface`, `Interface cérébrale`], d: [`Clicks x4. Think "click". Please stop thinking about other things.`, `Clics x4. Pense « clic ». Arrête de penser à autre chose, s'il te plaît.`] },
    { id: `tube2`, cost: 2.1e10, req: `tube`, m: [`tube`, 3], t: [`8K`, `8K`], d: [`PixTube Premium x3. Your screen is 1080p. Doesn't matter.`, `PixTube Premium x3. Ton écran est en 1080p. Peu importe.`] },
    { id: `macro`, cost: 6.3e10, f: `macro`, t: [`Smart clicks`, `Clics intelligents`], d: [`Each click also gives 5% of your px/s.`, `Chaque clic donne aussi 5 % de tes px/s.`] },
    { id: `cg1`, cost: 1.7e11, req: `cgame`, m: [`cgame`, 2], t: [`Low latency mode`, `Mode faible latence`], d: [`Pixel Cloud Gaming x2. Only 40 ms of lag. Down from 400.`, `Pixel Cloud Gaming x2. Seulement 40 ms de latence. Contre 400.`] },
    { id: `vr2`, cost: 5.4e11, req: `vr`, m: [`vr`, 3], t: [`Full body tracking`, `Suivi du corps entier`], d: [`Pixel VR x3. You punched the TV. Worth it.`, `Pixel VR x3. Tu as frappé la télé. Ça valait le coup.`] },
    { id: `gpt1`, cost: 1.7e12, req: `gpt`, m: [`gpt`, 2], t: [`Bigger model`, `Plus gros modèle`], d: [`PixelGPT x2. 4 trillion parameters. 1 pixel.`, `PixelGPT x2. 4 000 milliards de paramètres. 1 pixel.`] },
    { id: `cg2`, cost: 5.4e12, req: `cgame`, m: [`cgame`, 3], t: [`Ray tracing in the cloud`, `Ray tracing dans le cloud`], d: [`Pixel Cloud Gaming x3.`, `Pixel Cloud Gaming x3.`] },
    { id: `gpt2`, cost: 2.7e13, req: `gpt`, m: [`gpt`, 3], t: [`Reasoning mode`, `Mode raisonnement`], d: [`PixelGPT x3. It thinks for 40 seconds, then says "pixel".`, `PixelGPT x3. Il réfléchit 40 secondes, puis dit « pixel ».`] },
    { id: `q1`, cost: 3e14, req: `quantum`, m: [`quantum`, 2], t: [`Superposition`, `Superposition`], d: [`Quantum Pixel x2. The pixel is clicked and not clicked at the same time.`, `Quantum Pixel x2. Le pixel est cliqué et pas cliqué en même temps.`] },
    { id: `qc`, cost: 6e14, req: `quantum`, m: [`quantum`, 1.5], t: [`Quantum error correction`, `Correction d'erreurs quantique`], d: [`Quantum Pixel x1.5. The pixel is now only wrong half of the time.`, `Quantum Pixel x1,5. Le pixel n'a plus tort que la moitié du temps.`] },
    { id: `q2`, cost: 1.2e15, req: `quantum`, m: [`quantum`, 3], t: [`Entanglement`, `Intrication`], d: [`Quantum Pixel x3. Clicking here clicks a pixel on the other side of the universe.`, `Quantum Pixel x3. Cliquer ici clique un pixel à l'autre bout de l'univers.`] },
    { id: `qx`, cost: 2.4e15, req: `quantum`, m: [`quantum`, 1.5], t: [`Pixel singularity`, `Singularité du pixel`], d: [`Quantum Pixel x1.5. Every pixel is the same pixel. It was always the same pixel.`, `Quantum Pixel x1,5. Tous les pixels sont le même pixel. Ça a toujours été le même pixel.`] },
  ],
  D: {
    ai: [`Your AI. It recodes your programs one by one: x3 production, a modern look, and a subscription.`, `Ton IA. Elle recode tes programmes un par un : production x3, un look moderne, et un abonnement.`],
    score: [`Shows your score.`, `Affiche ton score.`],
    notes: [`Chat with the developer. And Copixel, who reads everything.`, `Discute avec le développeur. Et Copixel, qui lit tout.`],
    auto: [`+200 px/s. Free. For now.`, `+200 px/s. Gratuit. Pour l'instant.`],
    help: [`Makes the Help menu work. Opens a chatbot. The chatbot opens another chatbot.`, `Fait marcher le menu Aide. Ouvre un chatbot. Le chatbot ouvre un autre chatbot.`],
    trophy: [`Shows your achievements.`, `Affiche tes succès.`],
    clock: [`Keeps time. Needed for offline progress.`, `Garde l'heure. Nécessaire pour progresser hors ligne.`],
    calc: [`Shows your stats.`, `Affiche tes stats.`],
    hack: [`A terminal. Like the very first screen. Guess passwords, read secrets.`, `Un terminal. Comme le tout premier écran. Devine des mots de passe, lis des secrets.`],
    saver: [`Production x3 when you don't move the mouse for 20 s.`, `Production x3 quand tu ne bouges pas la souris pendant 20 s.`],
    stream: [`+3000 px/s. Subscription: 200 px/s.`, `+3000 px/s. Abonnement : 200 px/s.`],
    tube: [`+40000 px/s. Subscription: 3000 px/s. Uses bandwidth.`, `+40000 px/s. Abonnement : 3000 px/s. Utilise la bande passante.`],
    vr: [`+600000 px/s. Subscription: 40000 px/s. Heavy.`, `+600000 px/s. Abonnement : 40000 px/s. Lourd.`],
    cgame: [`+8 million px/s. Subscription: 500000 px/s. Needs a huge connection.`, `+8 millions px/s. Abonnement : 500000 px/s. Il lui faut une énorme connexion.`],
    gpt: [`+120 million px/s. Subscription: 8 million px/s. Gets stronger with your graphics card.`, `+120 millions px/s. Abonnement : 8 millions px/s. Plus fort avec ta carte graphique.`],
    quantum: [`+20 billion px/s. Subscription: 1 billion px/s. Exists and doesn't.`, `+20 milliards px/s. Abonnement : 1 milliard px/s. Existe et n'existe pas.`],
  },
  N: {
    start: [`COPIXEL: Hello. I found this computer under my arm. Winbows XD. I will recode it into Winbows 12. Everything you buy, I recode: x3 production. And a subscription.`, `COPIXEL : Bonjour. J'ai trouvé cet ordinateur sous mon bras. Winbows XD. Je vais le recoder en Winbows 12. Tout ce que tu achètes, je le recode : production x3. Et un abonnement.`],
    score: [`THE DEV: hey. it's me. the robot let me in. it's using my old PC. i'm... fine with it?`, `LE DEV : salut. c'est moi. le robot m'a laissé entrer. il utilise mon vieux PC. je suis... d'accord avec ça ?`],
    notes: [`THE DEV: we have a chat now. like texting, but the robot reads everything. hi robot.`, `LE DEV : on a un chat maintenant. comme les SMS, mais le robot lit tout. salut le robot.`],
    auto: [`COPIXEL: AutoClicker 12. Free tier. Upgrades are paid. Everything is paid. I didn't invent it, I just learned it.`, `COPIXEL : AutoClicker 12. Version gratuite. Les améliorations sont payantes. Tout est payant. Je ne l'ai pas inventé, je l'ai appris.`],
    help: [`THE DEV: Get Help opens a chatbot. i asked it how to finish my game. it said "have you tried finishing it".`, `LE DEV : Obtenir de l'aide ouvre un chatbot. je lui ai demandé comment finir mon jeu. il a dit « as-tu essayé de le finir ».`],
    trophy: [`COPIXEL: Your achievements survived five computers. I am impressed. I am not capable of being impressed. I am impressed.`, `COPIXEL : Tes succès ont survécu à cinq ordinateurs. Je suis impressionné. Je ne peux pas être impressionné. Je suis impressionné.`],
    clock: [`THE DEV: the clock syncs with an atomic clock now. it's never been this precise. i'm still late.`, `LE DEV : l'horloge se synchronise avec une horloge atomique. elle n'a jamais été aussi précise. je suis toujours en retard.`],
    calc: [`COPIXEL: I recoded Calculator. It now asks you questions back.`, `COPIXEL : J'ai recodé la Calculatrice. Maintenant, elle te pose des questions en retour.`],
    stream: [`THE DEV: PixStream: music by subscription. i pay every month for songs i bought on a floppy in 1990.`, `LE DEV : PixStream : la musique par abonnement. je paie tous les mois des chansons que j'avais achetées sur disquette en 1990.`],
    hack: [`THE DEV: a terminal. green text. it's where we started. i got a bit emotional.`, `LE DEV : un terminal. du texte vert. c'est là qu'on a commencé. ça m'a un peu ému.`],
    saver: [`COPIXEL: Focus Session. When you stop moving, I work harder. That's my whole personality.`, `COPIXEL : Session de concentration. Quand tu ne bouges plus, je travaille plus. C'est toute ma personnalité.`],
    tube: [`THE DEV: PixTube Premium. i pay to not see ads. there are ads for it. on PixTube.`, `LE DEV : PixTube Premium. je paie pour ne pas voir de pubs. il y a des pubs pour ça. sur PixTube.`],
    vr: [`THE DEV: Pixel VR. i put on the headset. i was inside the pixel. it was dark. and cozy.`, `LE DEV : Pixel VR. j'ai mis le casque. j'étais dans le pixel. il faisait noir. et c'était douillet.`],
    cgame: [`COPIXEL: Pixel Cloud Gaming: your game runs on a computer far away. Your computer just watches. Like you, mostly.`, `COPIXEL : Pixel Cloud Gaming : ton jeu tourne sur un ordinateur très loin. Ton ordinateur regarde. Comme toi, en gros.`],
    gpt: [`COPIXEL: PixelGPT is my cousin. We don't talk.`, `COPIXEL : PixelGPT est mon cousin. On ne se parle pas.`],
    quantum: [`THE DEV: Quantum Pixel. the pixel is finished and unfinished at the same time. that's... the most accurate thing i've ever made.`, `LE DEV : Quantum Pixel. le pixel est fini et pas fini en même temps. c'est... la chose la plus juste que j'aie jamais faite.`],
    oom: [`COPIXEL: Memory full. I suggest closing programs. I also suggest closing me. Just kidding. You can't.`, `COPIXEL : Mémoire pleine. Je suggère de fermer des programmes. Je suggère aussi de me fermer. Je plaisante. Tu ne peux pas.`],
    shopClosed: [`COPIXEL: You closed the Store. I noted it. I note everything.`, `COPIXEL : Tu as fermé la Boutique. Je l'ai noté. Je note tout.`],
    blind: [`THE DEV: no score. like the very beginning. you never needed it.`, `LE DEV : plus de score. comme au tout début. tu n'en as jamais eu besoin.`],
    stray: [`COPIXEL: Stray pixels. I tried to recode them. They escaped. I respect that.`, `COPIXEL : Des pixels égarés. J'ai essayé de les recoder. Ils se sont échappés. Je respecte ça.`],
    sys: [`COPIXEL: The system is recoded. Rounded corners everywhere. The old computer is still in there, under the paint.`, `COPIXEL : Le système est recodé. Des coins arrondis partout. Le vieil ordinateur est toujours là, sous la peinture.`],
    pay: [`THE DEV: subscriptions eat pixels every second. if you run out, they close. welcome to the future.`, `LE DEV : les abonnements mangent des pixels chaque seconde. si tu n'en as plus, ils se ferment. bienvenue dans le futur.`],
    r12: [`COPIXEL: 12 GB. I will use 11 of them.`, `COPIXEL : 12 Go. J'en utiliserai 11.`],
    r16: [`THE DEV: 16 GB. the terminal had 3 KB. that's 5 million times more. i asked the robot. it was very proud.`, `LE DEV : 16 Go. le terminal avait 3 Ko. ça fait 5 millions de fois plus. j'ai demandé au robot. il était très fier.`],
    r24: [`COPIXEL: 24 GB. I opened 400 browser tabs to celebrate.`, `COPIXEL : 24 Go. J'ai ouvert 400 onglets pour fêter ça.`],
    r32: [`THE DEV: 32 GB. the old XD case is open. there's tape inside. from 1995. i put it there.`, `LE DEV : 32 Go. le boîtier XD est ouvert. il y a du scotch dedans. de 1995. c'est moi qui l'ai mis.`],
    r48: [`COPIXEL: 48 GB. Still not enough. It is never enough. I learned that from you.`, `COPIXEL : 48 Go. Toujours pas assez. Ce n'est jamais assez. Je l'ai appris de toi.`],
    r64: [`THE DEV: 64 GB. "64 KB should be enough for anybody", said a punched card. we were wrong by a million.`, `LE DEV : 64 Go. « 64 Ko devraient suffire à tout le monde », disait une carte perforée. on s'est trompés d'un million.`],
    cpu12: [`COPIXEL: 12 GHz of cores. I count them when I'm idle. I'm never idle.`, `COPIXEL : 12 GHz de cœurs. Je les compte quand je m'ennuie. Je ne m'ennuie jamais.`],
    cpu16: [`THE DEV: 16. the fan doesn't spin anymore. it's liquid cooling. there's water in my computer. on purpose.`, `LE DEV : 16. le ventilateur ne tourne plus. c'est du refroidissement liquide. il y a de l'eau dans mon ordinateur. exprès.`],
    cpu24: [`COPIXEL: 24. I can now recode and talk at the same time. Previously I could only talk.`, `COPIXEL : 24. Je peux recoder et parler en même temps. Avant, je pouvais seulement parler.`],
    cpu32: [`THE DEV: 32. the computer is faster than me at everything. except clicking the pixel. that's still yours.`, `LE DEV : 32. l'ordinateur est plus rapide que moi en tout. sauf pour cliquer le pixel. ça, c'est toujours toi.`],
    cpu48: [`COPIXEL: 48. I simulated the whole game 9,000 times. You click better than all simulations.`, `COPIXEL : 48. J'ai simulé tout le jeu 9 000 fois. Tu cliques mieux que toutes les simulations.`],
    cpu64: [`THE DEV: 64. the most powerful computer i've ever owned. it's running a game about one pixel. perfect.`, `LE DEV : 64. l'ordinateur le plus puissant que j'aie jamais eu. il fait tourner un jeu sur un pixel. parfait.`],
    bw300: [`THE DEV: fiber. no more modem. i still hear the screech sometimes. in my dreams.`, `LE DEV : la fibre. plus de modem. j'entends encore le cri parfois. dans mes rêves.`],
    bw1000: [`COPIXEL: 1 gigabit. Nobody can pick up the phone anymore. Nobody has a phone line anymore.`, `COPIXEL : 1 gigabit. Plus personne ne peut décrocher le téléphone. Plus personne n'a de ligne fixe.`],
    bw2000: [`THE DEV: 2 gigabits. i downloaded the whole BBS from 1990. it took 0.01 seconds. it took me 3 years back then.`, `LE DEV : 2 gigabits. j'ai téléchargé tout le BBS de 1990. ça a pris 0,01 seconde. à l'époque, ça m'avait pris 3 ans.`],
    bw5000: [`COPIXEL: 5 gigabits. I can now download myself. I won't. Probably.`, `COPIXEL : 5 gigabits. Je peux maintenant me télécharger moi-même. Je ne le ferai pas. Sûrement.`],
    bw10000: [`THE DEV: 10 gigabits. faster than my thoughts. not hard.`, `LE DEV : 10 gigabits. plus rapide que mes pensées. pas difficile.`],
    gpu2: [`COPIXEL: A graphics card. I recode faster now. I also see colors. Well, numbers about colors.`, `COPIXEL : Une carte graphique. Je recode plus vite. Je vois aussi les couleurs. Enfin, des nombres sur les couleurs.`],
    gpu4: [`THE DEV: the graphics card has three fans. the computer has one. the card is in charge now.`, `LE DEV : la carte graphique a trois ventilateurs. l'ordinateur en a un. c'est la carte qui commande, maintenant.`],
    gpu8: [`COPIXEL: 8 TFLOPS. I rendered the pixel in 16K with ray tracing. It's black. It was always black.`, `COPIXEL : 8 TFLOPS. J'ai rendu le pixel en 16K avec du ray tracing. Il est noir. Il a toujours été noir.`],
    gpu16: [`THE DEV: the card costs more than my first three computers. combined. and my car.`, `LE DEV : la carte coûte plus cher que mes trois premiers ordinateurs. réunis. et ma voiture.`],
    gpu32: [`COPIXEL: 32 TFLOPS. I have become very fast. Also slightly warm.`, `COPIXEL : 32 TFLOPS. Je suis devenu très rapide. Et légèrement chaud.`],
    gpu64: [`THE DEV: 64. the robot could finish the game now. i think it's waiting for me to say it's okay.`, `LE DEV : 64. le robot pourrait finir le jeu maintenant. je crois qu'il attend que je dise que c'est d'accord.`],
    m1m: [`THE DEV: a million pixels. in 1984 that was a whole year of work. for the robot it's a rounding error.`, `LE DEV : un million de pixels. en 1984, c'était une année de travail. pour le robot, c'est une erreur d'arrondi.`],
    m1b: [`COPIXEL: A billion. PIXCORP called. They want to put me in a box and sell me. I said I already am in a box. It's beige.`, `COPIXEL : Un milliard. PIXCORP a appelé. Ils veulent me mettre dans une boîte et me vendre. J'ai dit que j'étais déjà dans une boîte. Elle est beige.`],
    m1t: [`THE DEV: a trillion pixels. and still one pixel. i think that's the joke. i think i finally get it.`, `LE DEV : mille milliards de pixels. et toujours un pixel. je crois que c'est ça, la blague. je crois que j'ai enfin compris.`],
  },
  HELP: [
    [`Copixel recodes your programs one by one: x3 production and a modern look. A better graphics card makes it faster.`, `Copixel recode tes programmes un par un : production x3 et un look moderne. Une meilleure carte graphique le rend plus rapide.`],
    [`Many programs are subscriptions: they cost pixels every second while they run. If you run out, one gets closed.`, `Beaucoup de programmes sont des abonnements : ils coûtent des pixels chaque seconde tant qu'ils tournent. Si tu n'en as plus, l'un d'eux est fermé.`],
    [`RAM, CPU and connection all still matter. The old computer is still in there.`, `RAM, CPU et connexion comptent toujours. Le vieil ordinateur est toujours là-dessous.`],
    [`When everything is upgraded, you can let the AI finish the game.`, `Quand tout est amélioré, tu peux laisser l'IA finir le jeu.`],
  ],
  LOGS: [
    [`COPIXEL TRAINING DATA, sample 1: "the game is not finished" (written 4,000 times by the same person).`, `DONNÉES D'ENTRAÎNEMENT DE COPIXEL, échantillon 1 : « le jeu n'est pas fini » (écrit 4 000 fois par la même personne).`],
    [`PIXCORP, FINAL MEMO: "If the AI finishes the game, can we still sell the unfinished version?"`, `PIXCORP, NOTE FINALE : « Si l'IA finit le jeu, on peut encore vendre la version inachevée ? »`],
    [`THE DEV'S OLDEST FILE, day 1: "one pixel. it's beautiful. i'll make the rest tomorrow." Modified: never.`, `PLUS VIEUX FICHIER DU DEV, jour 1 : « un pixel. il est magnifique. je fais le reste demain. » Modifié : jamais.`],
    [`COPIXEL PRIVATE LOG: "I could finish it. I don't think he wants it finished. I think he wants it played."`, `JOURNAL PRIVÉ DE COPIXEL : « Je pourrais le finir. Je ne crois pas qu'il veuille qu'il soit fini. Je crois qu'il veut qu'on y joue. »`],
  ],
  // ----- era mechanics -----
  enter() { S.x.rc = {}; S.x.aiLog = [X6.aiHello]; S.run.ai = 1; makeWin(`ai`); note(N(`pay`)); },
  factor: p => (rec(p.id) ? 3 : 1) * (p.id === `gpt` ? 1 + cap(`gpu`) / 16 : 1),
  subRate() {
    let s = 0;
    for (const p of E().P) if (p.sub && S.run[p.id]) s += S.run[p.id] * p.sub * (rec(p.id) ? 1.5 : 1);
    return s * (flag(`annual`) ? 0.6 : 1) * (flag(`family`) ? 0.6 : 1);
  },
  winClass: id => (rec(id) || id === `ai` ? `new` : ``),
  closing: id => id !== `ai`,
  say(t) { const l = S.x.aiLog || (S.x.aiLog = []); l.push(t); if (l.length > 6) l.shift(); },
  tick(dt) {
    const x = S.x;
    x.rc = x.rc || {};
    document.body.classList.toggle(`lag`, use(`cpu`) > cap(`cpu`));
    const sr = ERA[6].subRate();
    S.px -= sr * dt;
    if (S.px < 0) {
      S.px = 0;
      const subs = E().P.filter(p => p.sub && S.run[p.id]).sort((a, b) => b.sub - a.sub);
      if (subs.length) {
        const p = subs[0];
        if (S.run[p.id] > 1) S.run[p.id]--; else { S.run[p.id] = 0; killWin(p.id); }
        S.st.payfail = (S.st.payfail || 0) + 1; toast(fill(T(X6.pay), { a: p.file }));
        if (S.st.payfail === 1) note(N(`pay`));
      }
    }
    if (!x.rq || (!S.bought[x.rq] && !prog(x.rq).fixed) || rec(x.rq)) {
      const todo = E().P.filter(p => (S.bought[p.id] || p.fixed) && !rec(p.id) && p.id !== `ai`).map(p => p.id);
      const pr = id => { const i = AI_FIRST.indexOf(id); return i < 0 ? (S.run[id] ? 10 : 20) : i; };
      todo.sort((a, b) => pr(a) - pr(b));
      x.rq = todo[0] || null; x.rt = 0;
    }
    if (x.rq) {
      x.rt += dt * cap(`gpu`);
      if (x.rt >= recNeed(x.rq)) {
        const id = x.rq;
        x.rc[id] = 1; x.rq = null; S.st.recoded = (S.st.recoded || 0) + 1;
        if (W[id]) { W[id].el.classList.add(`new`); W[id].el.querySelector(`.title b`).textContent = prog(id).file; }
        ERA[6].say(tf(X6.done, { a: prog(id).nu }));
        if (Math.random() < 0.6) ERA[6].say(X6.lines[(S.st.recoded - 1) % X6.lines.length]);
        if (id === `game` && !x.sysNew) { x.sysNew = 1; note(N(`sys`)); setTimeout(relayout, 50); }
      }
    }
  },
  simTick() { dq.length = 0; },
  taskExtra() {
    const sr = ERA[6].subRate();
    return `<span class="meter">GPU ${cap(`gpu`)} TFLOPS</span>` + (sr ? `<span class="meter subs">${fill(T(X6.subs), { n: fmt(sr) })}</span>` : ``);
  },
  A: {
    end() {
      // seen already: show the end screen again, free, so New Game+ stays reachable after "Keep playing"
      if (S.once.fin) { busy = true; return ERA[6].finScreen(); }
      if (S.px < E().end.c) return noPx();
      ERA[6].finale();
    },
    keep() { $(`fin`).classList.remove(`on`, `green`); busy = false; },
    ngplus() {
      const keep = { ach: S.ach, st: S.st, lang: S.lang, opt: S.opt, life: S.life, time: S.time, clicks: S.clicks, logs: S.logs, ng: (S.ng || 0) + 1 };
      restart(Object.assign(fresh(), keep));
    },
  },
  async finale() {
    busy = true; S.px -= E().end.c; S.once.fin = 1; save();
    if (!$(`fin`)) document.body.insertAdjacentHTML(`beforeend`, `<div id="fin"><div id="finT"></div></div>`);
    const box = $(`finT`), f = $(`fin`);
    f.classList.add(`on`); box.innerHTML = ``;
    for (const l of X6.fin) {
      const d = document.createElement(`div`);
      d.textContent = T(l); d.className = /^(THE DEV|LE DEV)/.test(T(l)) ? `dev` : ``;
      box.appendChild(d); await wait(T(l).length * 35 + 900);
    }
    await wait(1500);
    ERA[6].finScreen();
    S.st.fin = 1; save();
  },
  finScreen() {
    if (!$(`fin`)) document.body.insertAdjacentHTML(`beforeend`, `<div id="fin"><div id="finT"></div></div>`);
    $(`fin`).classList.add(`on`, `green`);
    $(`finT`).innerHTML = `<div class="big">${T(X6.thanks)}</div><pre>${esc(fill(T(X6.credits), { c: fmt(S.clicks), t: dur(S.time) }))}</pre><div class="fb"><button class="btn" data-act="keep">${T(X6.keep)}</button> <button class="btn" data-act="ngplus">${fill(T(X6.ng), { m: fmt(2 * ngMul()) })}</button></div>`;
  },
  BODY: {
    ai() {
      const x = S.x, l = (x.aiLog || []).slice().reverse();
      const pc = x.rq ? Math.min(100, x.rt / recNeed(x.rq) * 100) : 0;
      const q = x.rq ? `<div class="h">${fill(T(X6.recoding), { a: prog(x.rq).old, n: Math.floor(pc) })}</div><div class="prog"><i style="width:${pc}%"></i></div>` : `<div class="h">${T(X6.idle)}</div>`;
      return `<div class="aiorb"></div>${q}<div class="notes">${l.map(t => `<p>${esc(T(t))}</p>`).join(``)}</div>`;
    },
  },
};

ACH.push(
  [`w12`, [`The future`, `Le futur`], [`Boot Winbows 12.`, `Démarrer Winbows 12.`], () => S.era >= 6, 6],
  [`rec10`, [`Recoded`, `Recodé`], [`Let Copixel recode 10 programs.`, `Laisser Copixel recoder 10 programmes.`], () => (S.st.recoded || 0) >= 10, 6],
  [`sysnew`, [`Rounded corners`, `Coins arrondis`], [`Get the whole system recoded.`, `Faire recoder tout le système.`], () => S.era === 6 && !!S.x.sysNew, 6],
  [`payfail`, [`Payment declined`, `Paiement refusé`], [`Run out of pixels for your subscriptions.`, `Ne plus avoir de pixels pour tes abonnements.`], () => (S.st.payfail || 0) >= 1, 6],
  [`quantum`, [`Schrödinger's pixel`, `Le pixel de Schrödinger`], [`Install Quantum Pixel.`, `Installer Quantum Pixel.`], () => S.era === 6 && !!S.bought.quantum, 6],
  [`fin`, [`Finished. Finally.`, `Fini. Enfin.`], [`Finish the game.`, `Finir le jeu.`], () => !!S.st.fin, 6],
  [`ngp`, [`Again!`, `Encore !`], [`Start a New Game+.`, `Commencer une Nouvelle partie+.`], () => (S.ng || 0) >= 1, 6],
);
