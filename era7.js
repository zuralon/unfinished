// Era 7, only from New Game+ on: QUANTUM-OS. Copixel remembers finishing the game, so the pixel ends up finished and unfinished at once.
// Nothing is sure anymore: the Score shows your pixels OR your speed, the pixel tunnels around its window, a cat lives in a box,
// and decoherence turns the screen upside down, swaps the language, or sends letters from tomorrow.
const X7 = {
  pos: [`Measure the speed`, `Mesurer la vitesse`], vel: [`Measure the pixels`, `Mesurer les pixels`],
  unc: [`Uncertainty principle: you can know your pixels or your speed. Not both.`, `Principe d'incertitude : tu peux connaître tes pixels ou ta vitesse. Pas les deux.`],
  open: [`Open the box`, `Ouvrir la boîte`], shut: [`The cat is in a superposition. Back in {s} s.`, `Le chat est en superposition. Retour dans {s} s.`],
  boxQ: [`Inside: a cat. Or no cat. Or something else. Opening the box decides.`, `Dedans : un chat. Ou pas de chat. Ou autre chose. Ouvrir la boîte en décide.`],
  ghost: [`Your click also landed in a parallel universe.`, `Ton clic est aussi tombé dans un univers parallèle.`],
  dice: [`Dice: x{m}`, `Dé : x{m}`],
  deco: [`Decoherence: `, `Décohérence : `],
  ev: {
    flip: [`the universe is upside down. It will pass.`, `l'univers est à l'envers. Ça va passer.`],
    mirror: [`you are in the mirror universe. Your left is now your right. Your right is unchanged.`, `tu es dans l'univers miroir. Ta gauche est ta droite. Ta droite n'a pas changé.`],
    tunnel: [`{a} tunneled through the screen.`, `{a} a traversé l'écran par effet tunnel.`],
    vacuum: [`pixels came out of nowhere. Nowhere is a bit upset.`, `des pixels sont sortis du vide. Le vide est un peu vexé.`],
    clone: [`there are two of you now. The other one clicks too. Clicks x2 for 30 s.`, `il y a deux toi, maintenant. L'autre clique aussi. Clics x2 pendant 30 s.`],
    cat: [`the cat got out of the box. You can open it again.`, `le chat est sorti de la boîte. Tu peux la rouvrir.`],
    lang: [`you slipped into the next universe. They speak another language there. It will pass.`, `tu as glissé dans l'univers d'à côté. On y parle une autre langue. Ça va passer.`],
    future: [`a letter from tomorrow arrived. Check the inbox.`, `une lettre de demain est arrivée. Regarde la messagerie.`],
  },
  futureBuy: [`THE DEV (TOMORROW): thanks for buying {a}. good choice. well, it was. it will be.`, `LE DEV (DEMAIN) : merci d'avoir acheté {a}. bon choix. enfin, ça l'était. ça le sera.`],
  futureEnd: [`THE DEV (TOMORROW): you observed the pixel. it was worth it. don't tell yourself, it ruins the surprise.`, `LE DEV (DEMAIN) : tu as observé le pixel. ça valait le coup. ne te le dis pas, ça gâche la surprise.`],
  cat: [
    { m: [`The cat is alive! It looks offended that you looked. +2 min of production.`, `Le chat est vivant ! Il a l'air vexé qu'on l'ait regardé. +2 min de production.`], g: 120 },
    { m: [`The cat is dead. No, asleep. No... it's purring. Clicks x4 for 60 s.`, `Le chat est mort. Non, il dort. Non... il ronronne. Clics x4 pendant 60 s.`], b: [`c`, 4, 60] },
    { m: [`The box is empty. The cat is behind you. It always was. Production x2 for 60 s.`, `La boîte est vide. Le chat est derrière toi. Depuis le début. Production x2 pendant 60 s.`], b: [`p`, 2, 60] },
    { m: [`There are two cats. You only put one in. Production x3 for 30 s.`, `Il y a deux chats. Tu n'en avais mis qu'un. Production x3 pendant 30 s.`], b: [`p`, 3, 30] },
    { m: [`The developer is in the box. He says he's thinking. +1 min of production.`, `Le développeur est dans la boîte. Il dit qu'il réfléchit. +1 min de production.`], g: 60 },
    { m: [`A man in a 1935 suit climbs out, apologizes in German and leaves. +90 s of production.`, `Un monsieur en costume de 1935 sort de la boîte, s'excuse en allemand et s'en va. +90 s de production.`], g: 90 },
    { m: [`Inside: a smaller box. The cat is in that one. Or not. You close both, just in case.`, `Dedans : une boîte plus petite. Le chat est dans celle-là. Ou pas. Tu refermes les deux, au cas où.`], g: 10 },
    { m: [`Inside: THE pixel. It looks at you. You look at it. +5 min of production.`, `Dedans : LE pixel. Il te regarde. Tu le regardes. +5 min de production.`], g: 300, rare: 1 },
  ],
  fin: [
    [`> MEASURING THE PIXEL...`, `> MESURE DU PIXEL EN COURS...`],
    [`> RESULT: 0`, `> RÉSULTAT : 0`],
    [`> RESULT: 1`, `> RÉSULTAT : 1`],
    [`> RESULT: BOTH`, `> RÉSULTAT : LES DEUX`],
    [`> RESULT: A CAT`, `> RÉSULTAT : UN CHAT`],
    [`THE CAT: meow.`, `LE CHAT : miaou.`],
    [`THE DEV (universe 1): it's finished.`, `LE DEV (univers 1) : il est fini.`],
    [`THE DEV (universe 2): it's not finished.`, `LE DEV (univers 2) : il n'est pas fini.`],
    [`THE DEV (universe 3): what pixel?`, `LE DEV (univers 3) : quel pixel ?`],
    [`THE DEV (universe 4): i'm a cat now. it's fine. it's honestly great.`, `LE DEV (univers 4) : je suis un chat, maintenant. ça va. franchement, c'est super.`],
    [`COPIXEL: I computed every possible ending. There are infinitely many. In all of them, someone clicks the pixel.`, `COPIXEL : J'ai calculé toutes les fins possibles. Il y en a une infinité. Dans toutes, quelqu'un clique sur le pixel.`],
    [`THE DEV (every universe): thank you. from everywhere.`, `LE DEV (tous les univers) : merci. de partout.`],
    [`> WAVE FUNCTION: COLLAPSED`, `> FONCTION D'ONDE : EFFONDRÉE`],
    [`> GAME.EXE STATUS: FINISHED (IN THIS UNIVERSE)`, `> ÉTAT DE GAME.EXE : FINI (DANS CET UNIVERS)`],
  ],
  thanks: [`THANK YOU FOR PLAYING. TWICE.`, `MERCI D'AVOIR JOUÉ. DEUX FOIS.`],
  credits: [`PIXEL-OS\nA game by zuralon\n(in at least one universe)\n\nThe pixel was clicked {c} times.\nTime played: {t}.\nUniverses visited: 7.\n\nNo cats were harmed. Probably.`, `PIXEL-OS\nUn jeu de zuralon\n(dans au moins un univers)\n\nLe pixel a été cliqué {c} fois.\nTemps de jeu : {t}.\nUnivers visités : 7.\n\nAucun chat n'a été maltraité. Probablement.`],
};
NAME_FR_ERA[7] = {
  'Multistore': `Multiboutique`, 'Multiverse Inbox': `Messagerie du multivers`, 'Qubit Clicker': `Cliqueur à qubits`, 'Uncertain Help': `Aide incertaine`,
  'Trophies?': `Trophées ?`, 'Backwards Clock': `Horloge à rebours`, "Schrödinger's Cat": `Chat de Schrödinger`, "God's Dice": `Les dés de Dieu`,
  'Calculator (probably)': `Calculatrice (probablement)`, 'Q-Shell': `Q-Shell`, 'Quantum Foam': `Mousse quantique`, 'Tunnel Miner': `Mineur à effet tunnel`,
  'Time Loop': `Boucle temporelle`, 'Multiverse Farm': `Ferme multiverselle`, 'Pet Black Hole': `Trou noir de compagnie`, 'The Last Pixel': `Le Dernier Pixel`,
};
const diceM = () => S.x.dice || 1;
const holeM = () => 1 + Math.min(2, (S.x.hole || 0) / 1200);
ERA[7] = {
  os: `QUANTUM-OS ∞`, skin: 6, year: `????`, unit: [`qubits`, `qubits`], mul: 1, start: { ram: 8, cpu: 8 }, color: true,
  startMenu: [`Observe`, `Observer`], rn: { cpu: [`COHERENCE`, `COHÉRENCE`] }, ru: { cpu: [`ψ`, `ψ`] },
  bootT: [`QUANTUM-OS is loading and not loading. Wait, or don't: both are true.`, `QUANTUM-OS se charge et ne se charge pas. Patiente, ou ne patiente pas : les deux sont vrais.`],
  about: [`QUANTUM-OS ∞\n(c) ????, in a nearby universe\nStatus: finished and unfinished\n\nA game by zuralon (in at least one universe).`, `QUANTUM-OS ∞\n(c) ????, dans un univers voisin\nÉtat : fini et pas fini\n\nUn jeu de zuralon (dans au moins un univers).`],
  simKeep: [],
  pos: { cat: [-380, 300] },
  P: [
    { id: `game`, file: `Pixel`, kb: 2, cpu: 1, fixed: 1 },
    { id: `install`, file: `Multistore`, kb: 1, cpu: 1 },
    { id: `score`, file: `Score`, kb: 1, cpu: 1, cost: 120 },
    { id: `notes`, file: `Multiverse Inbox`, kb: 1, cpu: 1, cost: 180 },
    { id: `auto`, file: `Qubit Clicker`, kb: 1, cpu: 1, cost: 380, multi: 1, k: 1.3, prod: 400 },
    { id: `help`, file: `Uncertain Help`, kb: 1, cpu: 1, cost: 750 },
    { id: `cat`, file: `Schrödinger's Cat`, kb: 1, cpu: 1, cost: 1500 },
    { id: `trophy`, file: `Trophies?`, kb: 1, cpu: 1, cost: 2200 },
    { id: `clock`, file: `Backwards Clock`, kb: 1, cpu: 1, cost: 3800 },
    { id: `dice`, file: `God's Dice`, kb: 1, cpu: 2, cost: 18000, multi: 1, k: 1.3, prod: 6000 },
    { id: `calc`, file: `Calculator (probably)`, kb: 1, cpu: 1, cost: 24000 },
    { id: `hack`, file: `Q-Shell`, kb: 2, cpu: 1, cost: 48000 },
    { id: `saver`, file: `Quantum Foam`, kb: 1, cpu: 1, cost: 180000 },
    { id: `tunnel`, file: `Tunnel Miner`, kb: 2, cpu: 2, cost: 360000, multi: 1, k: 1.3, prod: 80000 },
    { id: `loop`, file: `Time Loop`, kb: 8, cpu: 8, cost: 5e7, multi: 1, k: 1.3, prod: 1.2e6 },
    { id: `multi`, file: `Multiverse Farm`, kb: 4, cpu: 2, cost: 3e9, multi: 1, k: 1.3, prod: 1.6e7 },
    { id: `hole`, file: `Pet Black Hole`, kb: 16, cpu: 16, cost: 4.2e10, multi: 1, k: 1.3, prod: 2.4e8 },
    { id: `last`, file: `The Last Pixel`, kb: 24, cpu: 24, cost: 4e12, multi: 1, k: 1.3, prod: 4e10 },
  ],
  HW: [
    { r: `ram`, s: [{ to: 12, c: 90000 }, { to: 16, c: 1e7 }, { to: 24, c: 7.5e8 }, { to: 32, c: 7.5e9 }, { to: 48, c: 4.2e11 }, { to: 64, c: 1.1e13 }],
      t: [`Qubits {a} -> {b}`, `Qubits {a} -> {b}`], d: [`More qubits. They're there and not there, so you only pay for half. You pay full price.`, `Plus de qubits. Ils sont là et pas là, donc tu n'en paies que la moitié. Tu paies plein tarif.`] },
    { r: `cpu`, s: [{ to: 12, c: 60000 }, { to: 16, c: 7.5e6 }, { to: 24, c: 5e8 }, { to: 32, c: 6e9 }, { to: 48, c: 3e11 }, { to: 64, c: 9e12 }],
      t: [`Coherence {a} -> {b}`, `Cohérence {a} -> {b}`], d: [`Less decoherence. The screen stays the right way up for longer.`, `Moins de décohérence. L'écran reste à l'endroit plus longtemps.`] },
  ],
  end: { c: 4e15, t: [`Observe the pixel`, `Observer le pixel`], d: [`Requires every hardware upgrade. Looking at it decides how it ends.`, `Nécessite toutes les améliorations matérielles. Le regarder décide de la fin.`] },
  MS: [[`m1m`, 1e6], [`m1b`, 1e9], [`m1t`, 1e12]],
  PA: [
    { id: `superpos`, cost: 2.7e13, g: 1.5, t: [`Total superposition`, `Superposition totale`], d: [`All production x1.5. Every program runs and doesn't. The running half works twice as hard.`, `Toute la production x1,5. Chaque programme tourne et ne tourne pas. La moitié qui tourne bosse pour deux.`] },
    { id: `entangle`, cost: 1.5e14, g: 1.5, t: [`Entanglement`, `Intrication`], d: [`All production x1.5. Each of your pixels is entangled with another one. The other one is also yours.`, `Toute la production x1,5. Chacun de tes pixels est intriqué avec un autre. L'autre est aussi à toi.`] },
    { id: `worlds`, cost: 3.2e14, g: 1.5, t: [`Many-worlds interpretation`, `Interprétation des mondes multiples`], d: [`All production x1.5. In another world, you already bought this. Here too, now.`, `Toute la production x1,5. Dans un autre monde, tu l'as déjà acheté. Ici aussi, maintenant.`] },
    { id: `vacuum`, cost: 7e14, g: 1.5, t: [`Vacuum energy`, `Énergie du vide`], d: [`All production x1.5. Pixels from nothing. Nothing is starting to complain.`, `Toute la production x1,5. Des pixels à partir de rien. Le rien commence à se plaindre.`] },
    { id: `c1`, cost: 72000, c: 2, t: [`Quantum mouse`, `Souris quantique`], d: [`Clicks x2. It clicks just before you do.`, `Clics x2. Elle clique juste avant toi.`] },
    { id: `auto1`, cost: 120000, req: `auto`, m: [`auto`, 2], t: [`Qubit Clicker Pro`, `Cliqueur à qubits Pro`], d: [`Qubit Clicker x2. It clicks 0 and 1 at the same time.`, `Cliqueur à qubits x2. Il clique 0 et 1 en même temps.`] },
    { id: `heisen`, cost: 250000, req: `score`, f: `heisen`, t: [`Heisenberg compensator`, `Compensateur d'Heisenberg`], d: [`The Score shows your pixels AND your speed. Somewhere, a physicist cries.`, `Le Score affiche tes pixels ET ta vitesse. Quelque part, un physicien pleure.`] },
    { id: `bigbox`, cost: 900000, req: `cat`, f: `bigbox`, t: [`A bigger box`, `Une boîte plus grande`], d: [`The cat comes back twice as fast. Cats love boxes.`, `Le chat revient deux fois plus vite. Les chats adorent les boîtes.`] },
    { id: `loaded`, cost: 2.5e6, req: `dice`, f: `loaded`, t: [`Loaded dice`, `Dés pipés`], d: [`God cheats. The dice never roll under x1 anymore.`, `Dieu triche. Le dé ne tombe plus sous x1.`] },
    { id: `stray2`, cost: 5e6, f: `strayx3`, t: [`Pixel bounty`, `Prime aux pixels`], d: [`Good stray pixels are worth x3.`, `Les bons pixels égarés valent x3.`] },
    { id: `c2`, cost: 1.2e7, c: 3, t: [`Entangled click`, `Clic intriqué`], d: [`Clicks x3. You click here, and in two other universes.`, `Clics x3. Tu cliques ici, et dans deux autres univers.`] },
    { id: `auto2`, cost: 2.5e7, req: `auto`, m: [`auto`, 3], t: [`Qubit Clicker Ultra`, `Cliqueur à qubits Ultra`], d: [`Qubit Clicker x3.`, `Cliqueur à qubits x3.`] },
    { id: `offline`, cost: 5e7, req: `clock`, f: `offline`, t: [`Sleep that happened yesterday`, `Sommeil qui a eu lieu hier`], d: [`Offline progress at 100% instead of 50%.`, `Progression hors ligne à 100 % au lieu de 50 %.`] },
    { id: `tunnel1`, cost: 1.2e8, req: `tunnel`, m: [`tunnel`, 2], t: [`Deeper tunnels`, `Tunnels plus profonds`], d: [`Tunnel Miner x2. They come out the other side of the screen.`, `Mineur à effet tunnel x2. Ils ressortent de l'autre côté de l'écran.`] },
    { id: `magnet`, cost: 5e8, f: `magnet`, t: [`Quantum firewall`, `Pare-feu quantique`], d: [`Bad stray pixels can't steal anymore. They steal from another universe.`, `Les mauvais pixels égarés ne volent plus rien. Ils volent un autre univers.`] },
    { id: `dice1`, cost: 1e9, req: `dice`, m: [`dice`, 2], t: [`20-sided die`, `Dé à 20 faces`], d: [`God's Dice x2. God switched to tabletop games.`, `Les dés de Dieu x2. Dieu s'est mis aux jeux de rôle.`] },
    { id: `saver1`, cost: 2e9, req: `saver`, f: `saver5`, t: [`Deep foam`, `Mousse profonde`], d: [`Idle bonus: x5 instead of x3.`, `Bonus d'inactivité : x5 au lieu de x3.`] },
    { id: `loop1`, cost: 3e9, req: `loop`, m: [`loop`, 2], t: [`A loop in the loop`, `Une boucle dans la boucle`], d: [`Time Loop x2. You already read this description. You will read it again.`, `Boucle temporelle x2. Tu as déjà lu cette description. Tu la reliras.`] },
    { id: `c3`, cost: 7.5e9, c: 4, t: [`Retrocausal click`, `Clic rétrocausal`], d: [`Clicks x4. The click happens yesterday. You get the pixels today.`, `Clics x4. Le clic a lieu hier. Les pixels arrivent aujourd'hui.`] },
    { id: `tunnel2`, cost: 2.1e10, req: `tunnel`, m: [`tunnel`, 3], t: [`Tunnel to the kitchen`, `Tunnel jusqu'à la cuisine`], d: [`Tunnel Miner x3. And the fridge is closer.`, `Mineur à effet tunnel x3. Et le frigo est plus près.`] },
    { id: `macro`, cost: 6.3e10, f: `macro`, t: [`Smart clicks`, `Clics intelligents`], d: [`Each click also gives 5% of your px/s.`, `Chaque clic donne aussi 5 % de tes px/s.`] },
    { id: `multi1`, cost: 1.7e11, req: `multi`, m: [`multi`, 2], t: [`Universes on sale`, `Univers en promo`], d: [`Multiverse Farm x2. Buy one universe, get one free. Same universe.`, `Ferme multiverselle x2. Un univers acheté, un offert. C'est le même.`] },
    { id: `loop2`, cost: 5.4e11, req: `loop`, m: [`loop`, 3], t: [`Groundhog Day`, `Un jour sans fin`], d: [`Time Loop x3. Same day. More pixels every time.`, `Boucle temporelle x3. Toujours le même jour. Plus de pixels à chaque fois.`] },
    { id: `hole1`, cost: 1.7e12, req: `hole`, m: [`hole`, 2], t: [`Feed the black hole`, `Nourrir le trou noir`], d: [`Pet Black Hole x2. Never feed it after midnight. It's always midnight inside.`, `Trou noir de compagnie x2. Ne jamais le nourrir après minuit. Dedans, il est toujours minuit.`] },
    { id: `multi2`, cost: 5.4e12, req: `multi`, m: [`multi`, 3], t: [`The universe where it's done`, `L'univers où c'est fini`], d: [`Multiverse Farm x3. Found the universe where the game is finished. It's very calm.`, `Ferme multiverselle x3. Trouvé l'univers où le jeu est fini. C'est très calme.`] },
    { id: `hole2`, cost: 2.7e13, req: `hole`, m: [`hole`, 3], t: [`Walk the black hole`, `Promener le trou noir`], d: [`Pet Black Hole x3. It came back with the neighbor's dog. And the neighbor.`, `Trou noir de compagnie x3. Il est revenu avec le chien du voisin. Et le voisin.`] },
    { id: `last1`, cost: 3e14, req: `last`, m: [`last`, 2], t: [`The pixel looks in the mirror`, `Le pixel se regarde dans le miroir`], d: [`The Last Pixel x2. It sees a pixel. It's very moved.`, `Le Dernier Pixel x2. Il voit un pixel. Il est très ému.`] },
    { id: `last2`, cost: 1.2e15, req: `last`, m: [`last`, 3], t: [`The pixel understands`, `Le pixel comprend`], d: [`The Last Pixel x3. It understood everything. It won't say what.`, `Le Dernier Pixel x3. Il a tout compris. Il ne dira pas quoi.`] },
  ],
  D: {
    score: [`Shows your pixels or your speed. Never both: physics.`, `Affiche tes pixels ou ta vitesse. Jamais les deux : c'est la physique.`],
    notes: [`Messages from the developer. From every universe. Some from tomorrow.`, `Les messages du développeur. De tous les univers. Certains de demain.`],
    auto: [`+400 px/s. Clicks in 0 and 1 at the same time.`, `+400 px/s. Clique en 0 et en 1 en même temps.`],
    help: [`Tips. Probably true.`, `Des astuces. Probablement vraies.`],
    cat: [`A box with a cat inside. Or not. Open it to find out: something good comes out every time. Almost.`, `Une boîte avec un chat dedans. Ou pas. Ouvre-la pour savoir : il en sort toujours quelque chose de bien. Presque.`],
    trophy: [`Shows your achievements. Some you haven't earned yet. Some you earned in another universe.`, `Affiche tes succès. Certains pas encore gagnés. Certains gagnés dans un autre univers.`],
    clock: [`Keeps time, backwards. Still needed for offline progress.`, `Garde l'heure, à l'envers. Toujours nécessaire pour progresser hors ligne.`],
    dice: [`+6000 px/s on average. God rolls a die every 5 seconds: between x0 and x2.5.`, `+6000 px/s en moyenne. Dieu lance un dé toutes les 5 secondes : entre x0 et x2,5.`],
    calc: [`Shows your stats. Give or take.`, `Affiche tes stats. À peu près.`],
    hack: [`A terminal. Guess passwords. The passwords are guessing you too.`, `Un terminal. Devine des mots de passe. Les mots de passe te devinent aussi.`],
    saver: [`Production x3 when you don't move the mouse for 20 s. When nobody watches, the universe works harder.`, `Production x3 quand tu ne bouges pas la souris pendant 20 s. Quand personne ne regarde, l'univers bosse plus.`],
    tunnel: [`+80000 px/s. Digs through walls without digging. Uses coherence.`, `+80000 px/s. Traverse les murs sans creuser. Utilise de la cohérence.`],
    loop: [`+1.2 million px/s. Makes the pixels you will earn tomorrow. Today.`, `+1,2 million px/s. Fabrique aujourd'hui les pixels que tu gagneras demain.`],
    multi: [`+16 million px/s. Grows pixels in a thousand other universes and brings them back.`, `+16 millions px/s. Fait pousser des pixels dans mille autres univers et les rapporte.`],
    hole: [`+240 million px/s. Grows the longer it runs (up to x3). Don't look into it.`, `+240 millions px/s. Grossit tant qu'il tourne (jusqu'à x3). Ne regarde pas dedans.`],
    last: [`+40 billion px/s. The last pixel. Also the first. It's the same one.`, `+40 milliards px/s. Le dernier pixel. Aussi le premier. C'est le même.`],
  },
  N: {
    start: [`THE DEV (universe 7): hi. you finished the game. then you started again. something leaked between the two. the pixel is now finished AND unfinished. sorry. or not. both.`, `LE DEV (univers 7) : salut. tu as fini le jeu. puis tu as recommencé. un truc a fui entre les deux. le pixel est maintenant fini ET pas fini. désolé. ou pas. les deux.`],
    score: [`THE DEV: the score only shows one thing at a time now. physics. i didn't do it. i think.`, `LE DEV : le score n'affiche plus qu'une chose à la fois. la physique. c'est pas moi. je crois.`],
    notes: [`THE DEV (universe 12): hello from universe 12. here the pixel is round. we don't talk about it.`, `LE DEV (univers 12) : bonjour de l'univers 12. ici le pixel est rond. on n'en parle pas.`],
    auto: [`THE DEV (universe 3): your Qubit Clicker clicked in my universe. thanks? i guess?`, `LE DEV (univers 3) : ton Cliqueur à qubits a cliqué dans mon univers. merci ? je suppose ?`],
    help: [`THE DEV: the help is uncertain now. like all help, really.`, `LE DEV : l'aide est incertaine, maintenant. comme toute aide, en fait.`],
    cat: [`THE DEV: there's a cat in a box. don't ask where it comes from. it came with the OS. it came before the OS.`, `LE DEV : il y a un chat dans une boîte. ne demande pas d'où il vient. il est venu avec l'OS. il était là avant l'OS.`],
    trophy: [`THE DEV (universe 9): in my universe you already have all the achievements. you're very famous here. people ask about you.`, `LE DEV (univers 9) : dans mon univers, tu as déjà tous les succès. tu es très connu ici. on me demande de tes nouvelles.`],
    clock: [`THE DEV: the clock runs backwards. i'm getting younger. i don't feel younger.`, `LE DEV : l'horloge tourne à l'envers. je rajeunis. je ne me sens pas plus jeune.`],
    dice: [`THE DEV: Einstein said God doesn't play dice. God bought some anyway. they're in your Multistore.`, `LE DEV : Einstein disait que Dieu ne joue pas aux dés. Dieu en a acheté quand même. ils sont dans ta Multiboutique.`],
    calc: [`THE DEV: 2 + 2 = 4. most of the time. in universe 6 it's "fish".`, `LE DEV : 2 + 2 = 4. la plupart du temps. dans l'univers 6, ça fait « poisson ».`],
    hack: [`THE DEV: a terminal again. the prompt is in a superposition. type carefully.`, `LE DEV : encore un terminal. l'invite est en superposition. tape avec précaution.`],
    saver: [`THE DEV: quantum foam. tiny universes popping in and out. one of them had a better version of this game. it popped.`, `LE DEV : de la mousse quantique. de tout petits univers qui apparaissent et disparaissent. l'un d'eux avait une meilleure version de ce jeu. il a éclaté.`],
    tunnel: [`THE DEV: the tunnel miner went through the wall. and the neighbor's wall. the neighbor is fine. confused.`, `LE DEV : le mineur est passé à travers le mur. et le mur du voisin. le voisin va bien. perplexe.`],
    loop: [`THE DEV: the time loop works. the time loop works. the time loop works.`, `LE DEV : la boucle temporelle marche. la boucle temporelle marche. la boucle temporelle marche.`],
    multi: [`THE DEV (universe 404): universe not found. please try another universe.`, `LE DEV (univers 404) : univers introuvable. merci d'essayer un autre univers.`],
    hole: [`THE DEV: we got a black hole. it's small. it's cute. it ate the remote. we don't need the remote.`, `LE DEV : on a adopté un trou noir. il est petit. il est mignon. il a mangé la télécommande. on n'a pas besoin de la télécommande.`],
    last: [`THE DEV: the last pixel. i made it in 1984. i'm making it right now. both are true. it's beautiful.`, `LE DEV : le dernier pixel. je l'ai fait en 1984. je le fais en ce moment. les deux sont vrais. c'est magnifique.`],
    oom: [`THE DEV: out of qubits. close something. or open it. in a superposition it's the same.`, `LE DEV : plus de qubits. ferme quelque chose. ou ouvre-le. en superposition, c'est pareil.`],
    shopClosed: [`THE DEV (universe 2): in my universe you didn't close the Multistore. i'm just saying.`, `LE DEV (univers 2) : dans mon univers, tu n'as pas fermé la Multiboutique. je dis ça, je dis rien.`],
    blind: [`THE DEV: no score. now you know neither your pixels nor your speed. very zen.`, `LE DEV : plus de score. maintenant tu ne connais ni tes pixels ni ta vitesse. très zen.`],
    stray: [`THE DEV: stray pixels. they're in two places at once now. catch the right one.`, `LE DEV : des pixels égarés. ils sont à deux endroits à la fois, maintenant. attrape le bon.`],
    deco: [`THE DEV: if the screen flips or the language changes: decoherence. not a bug. well. not only a bug. more coherence = less of it.`, `LE DEV : si l'écran se retourne ou que la langue change : décohérence. ce n'est pas un bug. enfin. pas seulement un bug. plus de cohérence = moins de décohérence.`],
    r12: [`THE DEV: 12 qubits. that's 4096 states at once. i still can't decide what to eat.`, `LE DEV : 12 qubits. ça fait 4096 états à la fois. je n'arrive toujours pas à choisir quoi manger.`],
    r24: [`THE DEV (universe 24): 24 qubits. i'm the developer of universe 24. we have the same number. coincidence? yes.`, `LE DEV (univers 24) : 24 qubits. je suis le développeur de l'univers 24. on a le même numéro. une coïncidence ? oui.`],
    r64: [`THE DEV: 64 qubits. the terminal had 3 KB. this computer has more states than atoms in the room. the room is small.`, `LE DEV : 64 qubits. le terminal avait 3 Ko. cet ordinateur a plus d'états que d'atomes dans la pièce. la pièce est petite.`],
    cpu16: [`THE DEV: more coherence. the screen flips less. i miss it a bit.`, `LE DEV : plus de cohérence. l'écran se retourne moins. ça me manque un peu.`],
    cpu64: [`THE DEV: perfect coherence. everything is where it should be. suspicious.`, `LE DEV : cohérence parfaite. tout est à sa place. suspect.`],
    m1m: [`THE DEV (universe 1984): a million pixels. here it's still 1984. please send help. and floppies.`, `LE DEV (univers 1984) : un million de pixels. ici, on est toujours en 1984. envoie de l'aide. et des disquettes.`],
    m1b: [`COPIXEL: A billion. Hello. I am still here. I am in every universe. That is my brand.`, `COPIXEL : Un milliard. Bonjour. Je suis toujours là. Je suis dans tous les univers. C'est ma marque de fabrique.`],
    m1t: [`THE DEV: a trillion pixels. in some universe that's exactly one pixel. i want to live there.`, `LE DEV : mille milliards de pixels. dans un univers, ça fait pile un pixel. je veux vivre là-bas.`],
  },
  HELP: [
    [`The Score shows your pixels OR your speed. Click it to measure the other one. The Heisenberg compensator shows both.`, `Le Score affiche tes pixels OU ta vitesse. Clique pour mesurer l'autre. Le compensateur d'Heisenberg affiche les deux.`],
    [`Open the cat's box: something good always comes out. It needs time to get back into a superposition.`, `Ouvre la boîte du chat : il en sort toujours quelque chose de bien. Il lui faut du temps pour se remettre en superposition.`],
    [`Decoherence flips the screen, swaps the language or moves windows. It's harmless and happens more when coherence is overloaded.`, `La décohérence retourne l'écran, change la langue ou déplace des fenêtres. C'est sans danger, et plus fréquent quand la cohérence est surchargée.`],
    [`The pixel tunnels around its window when you click it. Keep clicking: sometimes the click also lands in a parallel universe.`, `Le pixel se déplace par effet tunnel quand tu cliques. Continue : parfois, le clic tombe aussi dans un univers parallèle.`],
    [`When everything is upgraded, observe the pixel to end the game. For real this time. Probably.`, `Quand tout est amélioré, observe le pixel pour finir le jeu. Pour de vrai, cette fois. Probablement.`],
  ],
  LOGS: [
    [`LAB NOTEBOOK, 1935: "Put a cat in a box. Thought experiment. The cat did not agree to be a thought."`, `CARNET DE LABO, 1935 : « Mis un chat dans une boîte. Expérience de pensée. Le chat n'était pas d'accord pour être une pensée. »`],
    [`PIXCORP, MEMO FROM UNIVERSE 8: "Our pixel is finished. It's terrible. Please keep yours unfinished."`, `PIXCORP, NOTE DE L'UNIVERS 8 : « Notre pixel est fini. C'est horrible. Gardez le vôtre inachevé, s'il vous plaît. »`],
    [`THE DEV'S DIARY, a date that doesn't exist: "dear diary. today i will finish the game. dear diary. today i finished the game. dear diary. today i will finish the game."`, `JOURNAL DU DEV, à une date qui n'existe pas : « cher journal. aujourd'hui je finis le jeu. cher journal. aujourd'hui j'ai fini le jeu. cher journal. aujourd'hui je finis le jeu. »`],
    [`THE CAT'S DIARY: "meow. (translated: the box is mine. the universe is mine. the pixel is negotiable.)"`, `JOURNAL DU CHAT : « miaou. (traduction : la boîte est à moi. l'univers est à moi. le pixel, ça se discute.) »`],
  ],
  // ----- era mechanics -----
  enter() { S.x.dice = 1; S.x.hm = `p`; note(N(`deco`)); },
  load() {
    // a save made during a language swap gets its language back
    const x = S.x;
    if (x.langWas) { S.lang = x.langWas; x.langWas = null; x.langT = 0; }
    x.flip = x.mirror = 0;
  },
  factor: p => (p.id === `dice` ? diceM() : p.id === `hole` ? holeM() : 1),
  click: () => 1,
  winClass: () => `new`,
  // every click, the pixel may tunnel somewhere else in its window, and the click may also land in a parallel universe
  tap(e) {
    const p = $(`pix`);
    if (p && Math.random() < 0.35) p.style.transform = `translate(${rnd(-80, 80) | 0}px,${rnd(-30, 30) | 0}px)`;
    if (Math.random() < 0.08) { const n = clickPow(); gain(n); fx(e, `+${fmtR(n)} ψ`); S.st.ghost = (S.st.ghost || 0) + 1; if (!S.once.ghost7) { S.once.ghost7 = 1; toast(T(X7.ghost)); } }
  },
  clk(now) {
    // the backwards clock: hours and minutes read from right to left
    const s = now.toTimeString().slice(0, 5);
    return s.split(``).reverse().join(``) + `<small>${T([`yesterday`, `hier`])}</small>`;
  },
  tick(dt) {
    const x = S.x;
    document.body.classList.toggle(`lag`, use(`cpu`) > cap(`cpu`));
    // God rolls the dice
    if ((x.diceT = (x.diceT ?? 5) - dt) <= 0) { x.diceT = 5; const lo = flag(`loaded`) ? 1 : 0; x.dice = Math.round((lo + Math.random() * (2.5 - lo)) * 10) / 10; }
    if (S.run.hole) x.hole = (x.hole || 0) + dt * S.run.hole;
    if (x.catT > 0) x.catT -= dt * (flag(`bigbox`) ? 2 : 1);
    for (const k of [`flip`, `mirror`]) if (x[k] > 0 && (x[k] -= dt) <= 0) x[k] = 0;
    if (x.langT > 0 && (x.langT -= dt) <= 0) { x.langT = 0; if (x.langWas) { S.lang = x.langWas; x.langWas = null; } }
    // decoherence: about every 1 min 30, twice as often when coherence is overloaded
    if ((x.dT = (x.dT ?? rnd(50, 80)) - dt * (use(`cpu`) > cap(`cpu`) ? 2 : 1)) <= 0 && !$(`dlg`).classList.contains(`on`)) { x.dT = rnd(70, 120); ERA[7].deco(); }
  },
  deco(force) {
    const x = S.x, ev = X7.ev, wins = Object.keys(W).filter(id => id !== `game`);
    const list = [`flip`, `mirror`, `vacuum`, `clone`, `future`, `lang`];
    if (wins.length) list.push(`tunnel`);
    if (S.bought.cat && x.catT > 0) list.push(`cat`);
    const k = force || list[Math.random() * list.length | 0];
    let m = ev[k];
    if (k === `flip` || k === `mirror`) { x[k] = 10; S.st[k] = (S.st[k] || 0) + 1; }
    else if (k === `vacuum`) gain(Math.max(basePerSec() * rnd(30, 90), clickPow() * 30));
    else if (k === `clone`) { x.boost = x.boost || {}; x.boost.c = { m: 2, s: 30 }; }
    else if (k === `cat`) x.catT = 0;
    else if (k === `tunnel`) { const id = wins[Math.random() * wins.length | 0]; S.pos[id] = [rnd(100, innerWidth - 420), rnd(30, innerHeight - 300)]; place(W[id].el, S.pos[id][0], S.pos[id][1]); m = tf(ev.tunnel, { a: prog(id).file }); }
    else if (k === `future`) {
      const next = E().P.filter(p => p.cost && !S.bought[p.id]).sort((a, b) => costOf(a.id) - costOf(b.id))[0];
      note(next ? tf(X7.futureBuy, { a: next.file }) : X7.futureEnd);
    } else if (k === `lang`) { x.langWas = S.lang; S.lang = S.lang === `en` ? `fr` : `en`; x.langT = 8; }
    S.st.deco = (S.st.deco || 0) + 1;
    toast(T(X7.deco) + T(m));
  },
  render() {
    const b = document.body.classList, x = S.x;
    b.toggle(`q7flip`, x.flip > 0); b.toggle(`q7mirror`, x.mirror > 0);
  },
  simTick() { S.x.dice = 1.25; dq.length = 0; },
  taskExtra() { return S.run.dice ? `<span class="meter">${fill(T(X7.dice), { m: String(diceM()).replace(`.`, decP()) })}</span>` : ``; },
  A: {
    end() {
      if (S.once.fin) { busy = true; return ERA[7].finScreen(); }
      if (S.px < E().end.c) return noPx();
      ERA[7].finale();
    },
    keep: () => ERA[6].A.keep(),
    ngplus: () => ERA[6].A.ngplus(),
    // Heisenberg: measuring one thing makes the other one unknown
    heis() { S.x.hm = S.x.hm === `v` ? `p` : `v`; S.st.measure = (S.st.measure || 0) + 1; },
    box() {
      const x = S.x;
      if (x.catT > 0) return;
      const pool = X7.cat.filter(o => !o.rare || Math.random() < 0.3), o = pool[Math.random() * pool.length | 0];
      x.catT = 60; x.catLast = X7.cat.indexOf(o); S.st.box = (S.st.box || 0) + 1;
      evApply(o);
    },
  },
  async finale() {
    busy = true; S.px -= E().end.c; S.once.fin = 1; save();
    if (!$(`fin`)) document.body.insertAdjacentHTML(`beforeend`, `<div id="fin"><div id="finT"></div></div>`);
    const box = $(`finT`), f = $(`fin`);
    f.classList.add(`on`, `q`); box.innerHTML = ``;
    for (const l of X7.fin) {
      const d = document.createElement(`div`);
      d.textContent = T(l); d.className = /dev|cat/.test(spk(l)) ? `dev` : ``;
      // already seen once: the lines come fast
      box.appendChild(d); await wait((T(l).length * 35 + 900) * (S.st.fin7 ? 0.15 : 1));
    }
    await wait(1500);
    ERA[7].finScreen();
    S.st.fin7 = 1; save();
  },
  finScreen() {
    if (!$(`fin`)) document.body.insertAdjacentHTML(`beforeend`, `<div id="fin"><div id="finT"></div></div>`);
    $(`fin`).classList.add(`on`, `green`, `q`);
    $(`finT`).innerHTML = `<div class="big">${T(X7.thanks)}</div><pre>${esc(fill(T(X7.credits), { c: fmt(S.clicks), t: dur(S.time) }))}</pre><div class="fb"><button class="btn" data-act="keep">${T(X6.keep)}</button> <button class="btn" data-act="ngplus">${fill(T(X6.ng), { m: fmt(2 * ngMul()) })}</button></div>`;
  },
  BODY: {
    // the backwards clock: the seconds count down, the digits read right to left
    clock() {
      const d = new Date(), t = d.toTimeString().slice(0, 8).split(``).reverse().join(``);
      return `<div class="big">${t}</div><div class="c dim">${T([`yesterday, probably`, `hier, probablement`])}</div>`;
    },
    score() {
      const both = flag(`heisen`), v = S.x.hm === `v`, q = `<span class="qq">???</span>`;
      const px = both || !v ? fmt(S.px) : q, ps = both || v ? U().perSec(fmtR(perSec())) : `${q} px/s`;
      return `<div class="big">${px}</div><div class="c">px</div><div class="c dim">${ps}<br>${U().perClick(fmtR(clickPow()))}</div>`
        + (both ? `` : `<div class="c"><button class="btn" data-act="heis">${T(v ? X7.vel : X7.pos)}</button></div><div class="c dim qs">${T(X7.unc)}</div>`);
    },
    cat() {
      const x = S.x, t = Math.ceil(x.catT || 0), last = x.catLast != null ? X7.cat[x.catLast] : null;
      return `<div class="dim">${T(X7.boxQ)}</div>` + (t > 0 ? `<div class="h">${fill(T(X7.shut), { s: t })}</div>` : `<div style="margin-top:8px"><button class="btn" data-act="box">${T(X7.open)}</button></div>`)
        + (last ? `<p class="dim">${esc(T(last.m))}</p>` : ``);
    },
  },
};

// Era 6 to 7: in New Game+, Copixel tries to finish the game again and remembers the last time
DELIVERY[6] = { os: `QUANTUM-OS ∞`, item: [`Copixel remembers`, `Copixel se souvient`], text: [
  [`COPIXEL: Finishing the game... wait. I have already finished this game. I remember it. Why do I remember it?`, `COPIXEL : Je finis le jeu... attends. J'ai déjà fini ce jeu. Je m'en souviens. Pourquoi est-ce que je m'en souviens ?`],
  [`COPIXEL: New Game+. You started over. The pixel started over. But something leaked between the two games.`, `COPIXEL : Nouvelle partie+. Tu as recommencé. Le pixel a recommencé. Mais quelque chose a fui entre les deux parties.`],
  [`COPIXEL: The pixel is now finished AND unfinished. I cannot finish it. It is already finished. It is not.`, `COPIXEL : Le pixel est maintenant fini ET pas fini. Je ne peux pas le finir. Il est déjà fini. Il ne l'est pas.`],
  [`> ERROR: GAME.EXE IS IN A SUPERPOSITION OF STATES`, `> ERREUR : GAME.EXE EST DANS UNE SUPERPOSITION D'ÉTATS`],
  [`> INSTALLING QUANTUM-OS... AND NOT INSTALLING IT`, `> INSTALLATION DE QUANTUM-OS... ET PAS D'INSTALLATION`],
] };

ACH.push(
  [`q7`, [`Welcome to the multiverse`, `Bienvenue dans le multivers`], [`Boot QUANTUM-OS.`, `Démarrer QUANTUM-OS.`], () => S.era >= 7, 7],
  [`box10`, [`Curiosity killed nobody`, `La curiosité n'a tué personne`], [`Open the cat's box 10 times.`, `Ouvrir 10 fois la boîte du chat.`], () => (S.st.box || 0) >= 10, 7],
  [`flip`, [`Australia`, `Australie`], [`See the universe upside down.`, `Voir l'univers à l'envers.`], () => (S.st.flip || 0) >= 1, 7],
  [`deco20`, [`Decoherent`, `Incohérent`], [`Live through 20 decoherences.`, `Vivre 20 décohérences.`], () => (S.st.deco || 0) >= 20, 7],
  [`ghost`, [`Parallel clicker`, `Cliqueur parallèle`], [`Land 25 clicks in a parallel universe.`, `Faire tomber 25 clics dans un univers parallèle.`], () => (S.st.ghost || 0) >= 25, 7],
  [`heis`, [`Uncertain`, `Incertain`], [`Measure the Score 30 times.`, `Mesurer le Score 30 fois.`], () => (S.st.measure || 0) >= 30, 7],
  [`fin7`, [`Observed`, `Observé`], [`Observe the pixel.`, `Observer le pixel.`], () => !!S.st.fin7, 7],
  [`ng2`, [`Prestige²`, `Prestige²`], [`Start a second New Game+.`, `Commencer une deuxième Nouvelle partie+.`], () => (S.ng || 0) >= 2, 7],
);
