// PIXEL-OS 3, unlocked by finishing PIXEL-OS 2: the game is finished, now it has to come out.
// A management game on a store dashboard: hype brings visitors, the price and the rating turn them into players,
// players leave if there is nothing new, the servers fill up, bugs pile up, reviews pour in.
// Each chapter is a number of players, up to everyone on Earth. The world map lights up as they arrive.
const P3MAP = [
  `............................................................`,
  `...................######...............##########..........`,
  `......####################....#####.####################....`,
  `...######################...#############################...`,
  `..#####################...################################..`,
  `..##################......##########.####################...`,
  `...################.........#######..####################...`,
  `......############...........#####....#################.#...`,
  `........##########.............####.##################......`,
  `..........#######...........########.###..##########........`,
  `...........#####...........##########.###..##..####.........`,
  `............###............##########......##...##..........`,
  `.............#..............##########......#...###.........`,
  `.............##..............#########...........#..........`,
  `..............#..###.........########...........######......`,
  `...............######.........#######...........######......`,
  `..............########.........#####..##............###.....`,
  `..............#######..........#####..##.........#######....`,
  `...............######..........####...##.........########...`,
  `................#####...........###..............#######....`,
  `................####............##................######....`,
  `................###................................###....#.`,
  `................###.......................................#.`,
  `................##..........................................`,
  `................#...........................................`,
  `............................................................`,
  `............................................................`,
];
const P3HOME = [30, 5];
const P3PRICE = [
  { p: 0, conv: 3, mood: -0.2, ads: 1, t: [`Free (ads)`, `Gratuit (pubs)`] },
  { p: 1, conv: 1.7, mood: 0.2, t: [`1 €`, `1 €`] },
  { p: 5, conv: 1, mood: 0, t: [`5 €`, `5 €`] },
  { p: 15, conv: 0.55, mood: -0.2, t: [`15 €`, `15 €`] },
  { p: 30, conv: 0.3, mood: -0.5, t: [`30 €`, `30 €`] },
  { p: 70, conv: 0.12, mood: -1.2, t: [`70 €`, `70 €`] },
];
const P3PLAT = [
  { id: `pc`, market: 3000, cost: 0, ch: 0, t: [`PC`, `PC`], d: [`Where it all started.`, `Là où tout a commencé.`] },
  { id: `console`, market: 50000, cost: 5000, ch: 2, t: [`Consoles`, `Consoles`], d: [`The pixel, on the TV. Bigger. Same pixel.`, `Le pixel, sur la télé. Plus gros. Le même pixel.`] },
  { id: `phone`, market: 700000, cost: 50000, ch: 3, t: [`Phones`, `Téléphones`], d: [`The iBrick's grandchildren.`, `Les petits-enfants de l'iBrick.`] },
  { id: `web`, market: 9e6, cost: 500000, ch: 4, t: [`Browsers`, `Navigateurs`], d: [`Even Internet Exploder. Especially Internet Exploder.`, `Même Internet Exploder. Surtout Internet Exploder.`] },
  { id: `watch`, market: 1.1e8, cost: 5e6, ch: 5, t: [`Smartwatches`, `Montres connectées`], d: [`The pixel finally fits the screen.`, `Le pixel tient enfin dans l'écran.`] },
  { id: `fridge`, market: 1.3e9, cost: 5e7, ch: 6, t: [`Smart fridges`, `Frigos connectés`], d: [`Click the pixel while the milk gets cold.`, `Clique sur le pixel pendant que le lait refroidit.`] },
  { id: `moon`, market: 3.5e9, cost: 5e8, ch: 7, t: [`Moon base`, `Base lunaire`], d: [`Low gravity. Clicks go further.`, `Faible gravité. Les clics vont plus loin.`] },
  { id: `cats`, market: 4e9, cost: 5e9, ch: 8, t: [`Universe 7 (the cats)`, `Univers 7 (les chats)`], d: [`Paws are big. The pixel is small. They manage.`, `Les pattes sont grosses. Le pixel est petit. Ils se débrouillent.`] },
];
const P3HIRE = [
  { id: `dev`, c0: 60, k: 1.16, t: [`Developer`, `Développeur`], d: [`+1 dev hour per second, and fixes bugs alone.`, `+1 heure de dev par seconde, et corrige des bugs tout seul.`] },
  { id: `srv`, c0: 100, k: 1.5, t: [`Server`, `Serveur`], d: [`+60% player capacity.`, `+60 % de places pour les joueurs.`] },
  { id: `qa`, c0: 4000, k: 1.9, max: 10, ch: 1, t: [`Tester`, `Testeur`], d: [`12% fewer bugs.`, `12 % de bugs en moins.`] },
  { id: `cm`, c0: 9000, k: 1.9, max: 8, ch: 2, t: [`Community manager`, `Community manager`], d: [`Better reviews, and the trolls get an answer.`, `De meilleurs avis, et les trolls ont une réponse.`] },
];
const P3PATCH = [
  { id: `fix`, h: 40, ch: 0, bugs: 0.7, life: 1.15, t: [`Day-one patch`, `Patch du premier jour`], d: [`Fixes what should have been fixed before. Fewer bugs.`, `Corrige ce qui aurait dû l'être avant. Moins de bugs.`] },
  { id: `dark`, h: 150, ch: 1, life: 1.3, t: [`Dark mode`, `Mode sombre`], d: [`The pixel is white. The rest is darker. Players stay longer.`, `Le pixel est blanc. Le reste est plus sombre. Les joueurs restent plus longtemps.`] },
  { id: `ach`, h: 500, ch: 1, life: 1.3, wom: 1.3, t: [`Achievements`, `Succès`], d: [`"Click once": 98% of players have it. They talk about it.`, `« Cliquer une fois » : 98 % des joueurs l'ont. Ils en parlent.`] },
  { id: `lang`, h: 1800, ch: 2, reach: 2, t: [`Translated in 40 languages`, `Traduit en 40 langues`], d: [`Including Klingon. The word for pixel is the same.`, `Dont le klingon. Le mot pour pixel est le même.`] },
  { id: `multi`, h: 5000, ch: 2, life: 1.6, wom: 1.6, bugs: 1.3, t: [`Multiplayer`, `Multijoueur`], d: [`Two people, one pixel. More players talk about it, more bugs.`, `Deux personnes, un pixel. Plus de bouche-à-oreille, plus de bugs.`] },
  { id: `px2`, h: 1.5e4, ch: 3, life: 1.4, mood: 0.3, t: [`A second pixel`, `Un deuxième pixel`], d: [`The players asked. Better reviews.`, `Les joueurs l'ont demandé. Meilleurs avis.`] },
  { id: `micro`, h: 4e4, ch: 3, money: 2, mood: -0.4, t: [`Microtransactions`, `Microtransactions`], d: [`A golden pixel for 2 €. Money x2, and players online spend a little. Reviews hate it.`, `Un pixel doré à 2 €. Argent x2, et les joueurs en ligne dépensent un peu. Les avis détestent.`] },
  { id: `br`, h: 1.1e5, ch: 4, wom: 1.6, mood: -0.3, bugs: 1.5, burst: 6, t: [`Battle royale`, `Battle royale`], d: [`100 players, 1 pixel, the circle shrinks. Huge hype, more bugs, purists sulk.`, `100 joueurs, 1 pixel, le cercle se rétrécit. Énorme hype, plus de bugs, les puristes boudent.`] },
  { id: `catmode`, h: 3e5, ch: 5, life: 1.5, mood: 0.3, t: [`Cat mode`, `Mode chat`], d: [`You play the cat. You knock the pixel off the table.`, `Tu joues le chat. Tu fais tomber le pixel de la table.`] },
  { id: `vr`, h: 9e5, ch: 5, life: 1.4, reach: 1.5, t: [`VR version`, `Version VR`], d: [`The pixel, in 3D. It's a cube. Nobody is happy. Everybody buys it.`, `Le pixel, en 3D. C'est un cube. Personne n'est content. Tout le monde l'achète.`] },
  { id: `copi`, h: 3e6, ch: 6, life: 1.5, bugs: 0.6, t: [`Copixel as a sidekick`, `Copixel en compagnon`], d: [`He helps the players. He also fixes bugs. He's insufferable and useful.`, `Il aide les joueurs. Il corrige aussi des bugs. Il est insupportable et utile.`] },
  { id: `v1`, h: 1e7, ch: 7, life: 2, mood: 0.5, t: [`Version 1.0 (finally)`, `Version 1.0 (enfin)`], d: [`The game leaves early access. After 44 years.`, `Le jeu sort de l'accès anticipé. Après 44 ans.`] },
];
const P3MKT = [
  { id: `tweet`, cd: 15, ch: 0, c: () => 0, h: o => 8 + o * 0.0005, t: [`Tweet from the dev`, `Tweet du dev`], d: [`Free. "i made a game. it's a pixel. please."`, `Gratuit. « j'ai fait un jeu. c'est un pixel. s'il vous plaît. »`] },
  { id: `trailer`, cd: 60, ch: 1, c: ch => 400 * 5 ** ch, h: o => 60 + o * 0.002, t: [`Trailer`, `Bande-annonce`], d: [`Epic music over a still pixel.`, `Une musique épique sur un pixel immobile.`] },
  { id: `stream`, cd: 150, ch: 2, c: ch => 4000 * 5 ** ch, h: o => 400 + o * 0.006, t: [`Pay a streamer`, `Payer un streamer`], d: [`Big hype. Sometimes the streamer hates it, live.`, `Grosse hype. Parfois le streamer déteste, en direct.`] },
  { id: `expo`, cd: 300, ch: 4, c: ch => 2e5 * 5 ** ch, h: o => 4000 + o * 0.015, t: [`Game show booth`, `Stand au salon du jeu vidéo`], d: [`A booth with one pixel on a giant screen. The queue goes around the block.`, `Un stand avec un pixel sur un écran géant. La queue fait le tour du bâtiment.`] },
];
// chapters: owners to reach
const P3CH = [100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 8e9];
// the pace: conversion, word of mouth, how long a player stays (seconds)
let P3K = 1, P3W = 0.0004, P3L = 120, P3SEAT = 2.5;
const X9 = {
  intro: [
    [`THE DEV: the game is finished. really finished. it even has two pixels now. and nine paintings.`, `LE DEV : le jeu est fini. vraiment fini. il a même deux pixels, maintenant. et neuf tableaux.`],
    [`THE DEV: now people have to play it. they say it's the hardest part.`, `LE DEV : maintenant il faut que des gens y jouent. il paraît que c'est la partie la plus dure.`],
    [`THE DEV: i put it on PixStore. price: 5 €. players: 0. reviews: none. i don't dare look.`, `LE DEV : je l'ai mis sur PixStore. prix : 5 €. joueurs : 0. avis : aucun. je n'ose pas regarder.`],
    [`THE DEV: could you tweet for me? i can't. i'm scared.`, `LE DEV : tu peux tweeter pour moi ? moi je n'y arrive pas. j'ai peur.`],
  ],
  chap: [
    [[`THE DEV: 100 players! a hundred! i don't even know a hundred people!`, `LE DEV : 100 joueurs ! cent ! je ne connais même pas cent personnes !`]],
    [[`THE DEV: a thousand. people are playing right now. my game. i need to sit down.`, `LE DEV : mille. des gens jouent en ce moment même. à mon jeu. il faut que je m'assoie.`], [`THE DEV: consoles want it. the pixel, on a TV. bigger. same pixel.`, `LE DEV : les consoles le veulent. le pixel, sur une télé. plus gros. le même pixel.`]],
    [[`COPIXEL: 10,000 players. I analyzed their reviews. 94% talk about the pixel. 6% talk about the cat.`, `COPIXEL : 10 000 joueurs. J'ai analysé leurs avis. 94 % parlent du pixel. 6 % parlent du chat.`]],
    [[`THE DEV: mom bought the game. 5 stars. with a comment: "it's my son". we can't delete it.`, `LE DEV : maman a acheté le jeu. 5 étoiles. avec un commentaire : « c'est mon fils ». on ne peut pas le supprimer.`]],
    [[`THE DEV: a million. PIXCORP called. they want to buy the game. i said the pixel isn't for sale. they said "and the cat?"`, `LE DEV : un million. PIXCORP a appelé. ils veulent racheter le jeu. j'ai dit que le pixel n'était pas à vendre. ils ont dit « et le chat ? »`]],
    [[`THE CAT: meow. (translation: i want royalties.)`, `LE CHAT : miaou. (traduction : je veux des droits d'auteur.)`]],
    [[`THE DEV: a hundred million. we're putting servers on the moon. i didn't plan for that in 1984.`, `LE DEV : cent millions. on installe des serveurs sur la Lune. je n'avais pas prévu ça en 1984.`]],
    [[`COPIXEL: One billion. 7 billion humans left. And an unknown number of cats.`, `COPIXEL : Un milliard. Il reste 7 milliards d'humains. Et un nombre indéterminé de chats.`]],
  ],
  fin: [
    [`> PLAYERS: 8,000,000,000. EVERYONE HAS PLAYED.`, `> JOUEURS : 8 000 000 000. TOUT LE MONDE A JOUÉ.`],
    [`THE DEV: everyone. even people without a computer. they played on their fridge.`, `LE DEV : tout le monde. même ceux qui n'ont pas d'ordinateur. ils ont joué sur leur frigo.`],
    [`THE DEV: in 1984 i made a pixel for myself. now it belongs to everyone.`, `LE DEV : en 1984, j'ai fait un pixel pour moi tout seul. maintenant il est à tout le monde.`],
    [`COPIXEL: Statistically, every human clicked the pixel 41 times. It is the most clicked pixel in history.`, `COPIXEL : Statistiquement, chaque humain a cliqué 41 fois sur le pixel. C'est le pixel le plus cliqué de l'histoire.`],
    [`THE CAT: meow. (translation: and the cats?)`, `LE CHAT : miaou. (traduction : et les chats ?)`],
    [`THE DEV: and the cats.`, `LE DEV : et les chats.`],
    [`> PIXEL-OS: GAME OF THE YEAR. OF EVERY YEAR. IN EVERY UNIVERSE.`, `> PIXEL-OS : JEU DE L'ANNÉE. DE TOUTES LES ANNÉES. DANS TOUS LES UNIVERS.`],
    [`THE DEV: thank you. for the first pixel, the second one, and all the others.`, `LE DEV : merci. pour le premier pixel, le deuxième, et tous les autres.`],
  ],
  thanks: [`EVERYONE PLAYED`, `TOUT LE MONDE A JOUÉ`],
  credits: [`PIXEL-OS 3\nThe release\n\nA game by zuralon\nPlayed by everyone\n\nPlayers: {n}\nReviews: {r}\nBugs fixed: {b}\nFinal rating: {s} ★\nTime played: {t}`, `PIXEL-OS 3\nLa sortie\n\nUn jeu de zuralon\nJoué par tout le monde\n\nJoueurs : {n}\nAvis : {r}\nBugs corrigés : {b}\nNote finale : {s} ★\nTemps de jeu : {t}`],
  keep: [`Keep managing`, `Continuer à gérer`], again: [`See the ending again`, `Revoir la fin`],
  unlock: [`PIXEL-OS 2 is finished. One last thing: the game has to come out. PIXEL-OS 3 is open.`, `PIXEL-OS 2 est fini. Une dernière chose : le jeu doit sortir. PIXEL-OS 3 est ouvert.`],
  about: [`PIXEL-OS 3\nThe release\n\nA game by zuralon.\nThe pixel, for everyone.`, `PIXEL-OS 3\nLa sortie\n\nUn jeu de zuralon.\nLe pixel, pour tout le monde.`],
  k: { money: [`Money`, `Argent`], owners: [`Players`, `Joueurs`], online: [`Online`, `En ligne`], rating: [`Rating`, `Note`], hype: [`Hype`, `Hype`], dh: [`Dev hours`, `Heures de dev`] },
  map: [`Players around the world`, `Joueurs dans le monde`], chart: [`Players online`, `Joueurs en ligne`],
  cap: [`Servers: {a} / {b}`, `Serveurs : {a} / {b}`], full: [`SERVERS FULL: players can't get in`, `SERVEURS SATURÉS : des joueurs restent dehors`],
  goal: [`Next goal: {n} players`, `Prochain objectif : {n} joueurs`], goalEnd: [`Everyone on Earth has played.`, `Tout le monde sur Terre a joué.`],
  mkt: [`Marketing`, `Marketing`], price: [`Price`, `Prix`], studio: [`Studio`, `Studio`], plat: [`Platforms`, `Plateformes`],
  tabs: { rev: [`Reviews`, `Avis`], bug: [`Bugs`, `Bugs`], road: [`Patches`, `Patchs`], msg: [`Messages`, `Messages`] },
  ready: [`Ready`, `Prêt`], free: [`free`, `gratuit`], owned: [`owned`, `possédé`], hired: [`{n} hired`, `{n} embauché(s)`],
  ship: [`Ship ({n} h)`, `Publier ({n} h)`], shipped: [`Shipped`, `Publié`], locked: [`At {n} players`, `À {n} joueurs`],
  noBug: [`No open bug. Enjoy it, it won't last.`, `Aucun bug ouvert. Profites-en, ça ne va pas durer.`],
  bugHelp: [`Click a bug to fix it. Developers fix them by themselves too.`, `Clique sur un bug pour le corriger. Les développeurs en corrigent aussi tout seuls.`],
  more: [`+{n} more`, `+{n} autres`],
  reply: [`Reply`, `Répondre`], replied: [`The dev replied`, `Le dev a répondu`],
  hours: [`{h} h played`, `{h} h de jeu`],
  sev: [[`minor`, `mineur`], [`major`, `majeur`], [`critical`, `critique`]],
  fixed: [`Bug fixed!`, `Bug corrigé !`], shippedT: [`"{a}" is out!`, `« {a} » est sorti !`],
  poor: [`Not enough money.`, `Pas assez d'argent.`], poorH: [`Not enough dev hours.`, `Pas assez d'heures de dev.`],
  ev: {
    viral: [`VIRAL: a video of the pixel has 40 million views. Nobody knows why. Hype x3.`, `VIRAL : une vidéo du pixel fait 40 millions de vues. Personne ne sait pourquoi. Hype x3.`],
    clone: [`COPIXEL released a clone: "PIXEL∞". It took him 0.3 seconds. Hype -40%.`, `COPIXEL a sorti un clone : « PIXEL∞ ». Ça lui a pris 0,3 seconde. Hype -40 %.`],
    down: [`OUTAGE: a cable was unplugged. By the cat. Servers at 30% for 20 s.`, `PANNE : un câble a été débranché. Par le chat. Serveurs à 30 % pendant 20 s.`],
    star: [`A famous streamer plays your game. Without being paid. Hype +{n}.`, `Une streameuse célèbre joue à ton jeu. Sans être payée. Hype +{n}.`],
    bomb: [`REVIEW BOMBING: Copixel fans don't like the pixel.`, `REVIEW BOMBING : les fans de Copixel n'aiment pas le pixel.`],
    bombStop: [`REVIEW BOMBING: your community managers answered everyone. It stopped.`, `REVIEW BOMBING : tes community managers ont répondu à tout le monde. C'est fini.`],
    sale: [`SALE: the store puts the game at -50% for 60 s. More buyers.`, `SOLDES : la boutique met le jeu à -50 % pendant 60 s. Plus d'acheteurs.`],
    cat: [`The cat walked on the keyboard and shipped a patch. It works. Nobody knows what it does.`, `Le chat a marché sur le clavier et a publié un patch. Il marche. Personne ne sait ce qu'il fait.`],
  },
  bugs: [
    [`The pixel is sometimes a square.`, `Le pixel est parfois un carré.`], [`The pixel is always a square.`, `Le pixel est toujours un carré.`],
    [`The game starts in Klingon.`, `Le jeu se lance en klingon.`], [`Clicking too fast heats up the mouse.`, `Cliquer trop vite fait chauffer la souris.`],
    [`The universe 7 cat shows up in the menu.`, `Le chat de l'univers 7 apparaît dans le menu.`], [`Achievements unlock before you earn them.`, `Les succès se débloquent avant qu'on les gagne.`],
    [`The Score shows the time.`, `Le Score affiche l'heure.`], [`The game is finished (that's not normal).`, `Le jeu est fini (ce n'est pas normal).`],
    [`The pixel moved by one pixel.`, `Le pixel s'est décalé d'un pixel.`], [`The music plays backwards on Tuesdays.`, `La musique joue à l'envers le mardi.`],
    [`The Quit button starts a New Game+.`, `Le bouton Quitter lance une Nouvelle partie+.`], [`The cursor is afraid of the pixel.`, `Le curseur a peur du pixel.`],
    [`The save saves too much.`, `La sauvegarde sauvegarde trop.`], [`"Memory full" in the Memory menu.`, `« Mémoire pleine » dans le menu Mémoire.`],
    [`The blue screen is green.`, `L'écran bleu est vert.`], [`The post-it is stuck upside down.`, `Le post-it est collé à l'envers.`],
    [`Copixel answers the bug reports. Wrongly.`, `Copixel répond aux rapports de bug. À côté.`], [`The modem screeches in 4K.`, `Le modem grésille en 4K.`],
    [`The battery drains when you look at it.`, `La batterie se vide quand on la regarde.`], [`Two pixels overlap: it's one pixel.`, `Deux pixels se superposent : ça fait un pixel.`],
  ],
  names: [`xX_Clicker_Xx`, `Mamie Josette`, `PixelLover84`, `the_cat`, `KevinDu57`, `Hélène, 62`, `speedrunner_px`, `NoLifeGamer`, `un_dev_jaloux`, `Bip (retired)`, `Modem_Krrr`, `LaCritique`, `Doigt_d_or`, `Yannick`, `gamer_maman`, `Léa`, `pixelpurist`, `Sam`, `Copixel (bot)`, `Mehdi`, `ZZZ_idle`, `Nour`, `ProGamer2028`, `le_voisin`],
  rev: {
    5: [[`10/10. There's a pixel. Exactly what was promised.`, `10/10. Il y a un pixel. Exactement ce qui était promis.`], [`I cried at the cat painting.`, `J'ai pleuré au tableau du chat.`], [`My son and my grandpa play together. They don't talk anymore.`, `Mon fils et mon grand-père y jouent ensemble. Ils ne se parlent plus.`], [`Game of the year. Maybe of the decade. The pixel is beautiful.`, `Jeu de l'année. Peut-être de la décennie. Le pixel est magnifique.`], [`4,000 hours. Still not finished. That's the point, I think.`, `4 000 heures. Toujours pas fini. C'est le but, je crois.`], [`The best pixel I've ever clicked. And I've clicked a lot of pixels.`, `Le meilleur pixel que j'ai jamais cliqué. Et j'en ai cliqué beaucoup.`], [`I bought it twice by mistake. No regrets.`, `Je l'ai acheté deux fois par erreur. Aucun regret.`]],
    4: [[`Very good. I'd like a second pixel. Oh, there is one?`, `Très bon. J'aimerais un deuxième pixel. Ah, il y en a un ?`], [`Addictive. My mouse will never recover.`, `Addictif. Ma souris ne s'en remettra pas.`], [`Great, but the cat is judging me.`, `Super, mais le chat me juge.`], [`Lovely. The screensavers alone are worth it.`, `Adorable. Rien que les économiseurs d'écran valent le coup.`], [`Good game. Too short. 200 hours.`, `Bon jeu. Trop court. 200 heures.`]],
    3: [[`Fine. The pixel is a bit small.`, `Correct. Le pixel est un peu petit.`], [`Not bad, but Copixel keeps offering to finish it for me.`, `Pas mal, mais Copixel propose sans arrêt de le finir à ma place.`], [`OK. I preferred the terminal era.`, `Ça va. Je préférais l'époque du terminal.`], [`Average. Like a pixel. Neither big nor small.`, `Moyen. Comme un pixel. Ni grand ni petit.`]],
    2: [[`The pixel disappeared twice. Then it came back. I don't trust it anymore.`, `Le pixel a disparu deux fois. Puis il est revenu. Je ne lui fais plus confiance.`], [`Too many bugs. The music plays backwards. It's Tuesday.`, `Trop de bugs. La musique joue à l'envers. On est mardi.`], [`Nothing new since forever. Bored.`, `Rien de nouveau depuis une éternité. Je m'ennuie.`]],
    1: [[`Refunded. It was a pixel.`, `Remboursé. C'était un pixel.`], [`Couldn't connect. 0.5/10.`, `Impossible de me connecter. 0,5/10.`], [`Too expensive for a pixel. Even a beautiful one.`, `Trop cher pour un pixel. Même très beau.`], [`An ad between every click. No.`, `Une pub entre chaque clic. Non.`]],
    sat: [[`Servers full. Waited 3 hours to click once.`, `Serveurs pleins. J'ai attendu 3 heures pour cliquer une fois.`], [`"Too many players". I am ONE player.`, `« Trop de joueurs ». Je suis UN joueur.`]],
    bug: [[`Bugs everywhere. The cursor is afraid of the pixel.`, `Des bugs partout. Le curseur a peur du pixel.`], [`It crashed on launch. Then it crashed on crash.`, `Ça plante au lancement. Puis ça plante au plantage.`]],
    price: [[`Way too expensive for one pixel.`, `Beaucoup trop cher pour un pixel.`], [`70 € for a pixel. That's 70 € a pixel.`, `70 € pour un pixel. Ça fait 70 € le pixel.`]],
    ads: [[`An ad between every click. No.`, `Une pub entre chaque clic. Non.`], [`I watched 40 ads. I clicked the pixel twice.`, `J'ai regardé 40 pubs. J'ai cliqué deux fois sur le pixel.`]],
    micro: [[`A golden pixel for 2 €. Shame on you.`, `Un pixel doré à 2 €. Honte à vous.`]],
    bomb: [[`Copixel's version is better. (I haven't played this one.)`, `La version de Copixel est mieux. (Je n'ai pas joué à celle-ci.)`], [`PIXEL∞ forever.`, `PIXEL∞ pour toujours.`]],
  },
  replies: [
    [`THE DEV: thank you for your feedback! the pixel is intended.`, `LE DEV : merci pour ton retour ! le pixel est voulu.`],
    [`THE DEV: we hear you. a fix is coming. probably. someday.`, `LE DEV : on t'entend. un correctif arrive. sûrement. un jour.`],
    [`THE DEV: have you tried turning it off and on again? don't, actually.`, `LE DEV : tu as essayé d'éteindre et de rallumer ? en fait, non, ne fais pas ça.`],
    [`THE DEV: sorry. i made it alone, in 1984, with one pixel. i'm doing my best.`, `LE DEV : pardon. je l'ai fait tout seul, en 1984, avec un pixel. je fais de mon mieux.`],
  ],
};

// ---------- state ----------
const p3Unlocked = () => !!S.st.p2fin || !!S.p3;
function p3Tell() { if (S.era === 8 && p3Unlocked() && !S.st.p3told && S.p2 && S.p2.fin === 2) { S.st.p3told = 1; dlg(T(X9.unlock), { cancel: true, okT: `PIXEL-OS 3 →`, ok: () => p3Enter() }); } }
const p3Fresh = () => ({ money: 50, owners: 0, act: 0, hype: 6, price: 2, rev: [], revN: 0, bugs: [], bugN: 0, fixed: 0, bugT: 20, dh: 0, hire: {}, plat: { pc: 1 }, patch: {}, cd: {}, ch: 0, chat: [], unread: 0, hist: [], histT: 0, evT: 150, ev: {}, fresh: 0, revT: 0, fin: 0, tab: `rev`, lit: 0, seen: {} });
function p3Say(l) { const c = S.p3.chat; c.push(l); if (c.length > 40) c.shift(); if (S.p3.tab !== `msg`) S.p3.unread++; }
const p3n = id => S.p3.hire[id] || 0;
const p3PatchSum = (k, d) => { let m = d; for (const p of P3PATCH) if (S.p3.patch[p.id] && p[k] != null) m = d === 0 ? m + p[k] : m * p[k]; return m; };
// how many people can buy the game: the platforms it runs on (and the translations)
const p3Market = () => Math.min(9e9, P3PLAT.reduce((s, p) => s + (S.p3.plat[p.id] ? p.market : 0), 0) * p3PatchSum(`reach`, 1));
// near the size of the market, fewer and fewer new buyers
const p3Sat = () => Math.max(0, 1 - S.p3.owners / p3Market());
const p3Reach = () => 1;
const p3Cap = () => Math.floor(30 * 1.6 ** p3n(`srv`) * (S.p3.ev.down > 0 ? 0.3 : 1));
const p3Rating = () => { const r = S.p3.rev; if (!r.length) return 4; return r.reduce((s, x) => s + x.s, 0) / r.length; };
const p3fR = () => Math.max(0.05, Math.min(2.2, ((p3Rating() - 1) / 4) ** 2 * 2.2));
const p3Price = () => P3PRICE[S.p3.price];
// a server costs the same per player seat it adds, so it stays affordable at any size
const p3Seats = n => Math.floor(30 * 1.6 ** (n + 1)) - Math.floor(30 * 1.6 ** n);
const p3HireCost = h => Math.ceil(h.id === `srv` ? p3Seats(p3n(`srv`)) * P3SEAT : h.c0 * h.k ** p3n(h.id));
// how players feel right now: the base of every new review
function p3Mood() {
  const p = S.p3, pr = p3Price();
  let m = 4.4 + pr.mood + p3PatchSum(`mood`, 0) + Math.min(0.5, p.fresh * 0.004) + p3n(`cm`) * 0.08;
  m -= 0.12 * Math.min(15, p.bugN);
  if (p.bugs.some(b => b.sev === 2)) m -= 0.4;
  if (p.full > 0) m -= 0.8;
  if (pr.ads) m -= 0.2;
  return m;
}

// ---------- the clock ----------
let P3F = { vis: 0, nw: 0, full: 0 };
function p3Tick(dt) {
  const p = S.p3;
  if (!p || p.fin === 1) return;
  const pr = p3Price(), sale = p.ev.sale > 0 ? 1.8 : 1, life = P3L * (1 + P3PATCH.reduce((s, x) => s + (S.p3.patch[x.id] && x.life ? x.life - 1 : 0), 0));
  // hype fades, players talk about it
  // marketing makes hype, hype fades; players who own the game talk about it (more with every patch)
  p.hype = p.hype * Math.exp(-dt / 30) + 0.3 * dt;
  // a big game is harder to grow: word of mouth slows down after a million players
  const wom = p.owners * P3W * 0.7 ** Math.max(0, p.ch - 4) * p3PatchSum(`wom`, 1) * (1 + 0.08 * Object.keys(p.patch).length) * (p.ev.clone > 0 ? 0.5 : 1);
  const vis = p.hype * p3Reach() + wom / 0.08, crit = p.bugs.some(b => b.sev === 2) ? 0.7 : 1;
  const nw = vis * 0.08 * p3fR() * pr.conv * sale * crit * p3Sat() * P3K;
  p.owners = Math.min(8e9, p.owners + nw * dt);
  p.money += ((nw * pr.p * (sale > 1 ? 0.5 : 1) + (pr.ads ? p.act * 0.01 : 0)) * p3PatchSum(`money`, 1) + (p.patch.micro ? p.act * 0.01 : 0)) * dt;
  // players who already own it come back now and then: more if the game keeps them busy
  p.act += (nw + p.owners * 0.0002) * dt - p.act / life * dt;
  // the servers: who can't get in leaves, angry
  const cap = p3Cap();
  p.full = p.act > cap ? 3 : Math.max(0, (p.full || 0) - dt);
  if (p.act > cap) { p.act = cap; if (!p.seen.full) { p.seen.full = 1; p3Say([`THE DEV: the servers are full! players can't get in and they write angry reviews. buy a server in the Studio, quick.`, `LE DEV : les serveurs sont pleins ! des joueurs restent dehors et écrivent des avis fâchés. achète un serveur dans le Studio, vite.`]); } }
  p.act = Math.min(p.act, p.owners);
  // bugs come with players; developers fix them alone
  const bugRate = 0.03 * (1 + Math.log10(p.act + 1)) * p3PatchSum(`bugs`, 1) * 0.88 ** p3n(`qa`);
  if ((p.bugT -= dt * bugRate * 30) <= 0) { p.bugT = 30; p3Bug(); }
  let fix = p3n(`dev`) * 0.012 * dt;
  while (fix > 0 && p.bugs.length) { const b = p.bugs[0], d = Math.min(fix, b.hp); b.hp -= d; fix -= d; if (b.hp <= 0.001) p3Fixed(0); }
  p.dh += p3n(`dev`) * dt + dt * 0.2;
  // reviews: more buyers, more reviews
  p.revT += dt * Math.min(2.5, 0.15 + nw * 0.04);
  while (p.revT >= 1) { p.revT--; p3Review(); }
  if (p.fresh > 0) p.fresh = Math.max(0, p.fresh - dt);
  for (const k in p.cd) if ((p.cd[k] -= dt) <= 0) delete p.cd[k];
  for (const k in p.ev) if (typeof p.ev[k] === `number` && (p.ev[k] -= dt) <= 0) delete p.ev[k];
  if ((p.evT -= dt) <= 0) { p.evT = rnd(100, 170); p3Event(); }
  if ((p.histT += dt) >= 1) { p.histT = 0; p.hist.push(Math.round(p.act)); if (p.hist.length > 180) p.hist.shift(); }
  P3F = { vis, nw };
  // chapters
  while (p.ch < P3CH.length && p.owners >= P3CH[p.ch]) {
    if (p.ch === P3CH.length - 1) { p.ch++; return p3Final(); }
    for (const l of X9.chap[p.ch]) p3Say(l);
    p.ch++; S.st.p3ch = p.ch;
    toast(fill(T([`Goal reached: {n} players!`, `Objectif atteint : {n} joueurs !`]), { n: fmt(P3CH[p.ch - 1]) }));
  }
}
function p3Bug() {
  const p = S.p3;
  p.bugN++;
  if (p.bugs.length < 40) {
    const r = Math.random(), sev = r < 0.1 ? 2 : r < 0.4 ? 1 : 0;
    p.bugs.push({ id: Math.random().toString(36).slice(2, 7), sev, hp: [1, 3, 8][sev], max: [1, 3, 8][sev], t: Math.random() * X9.bugs.length | 0 });
  }
  if (!p.seen.bug) { p.seen.bug = 1; p3Say([`THE DEV: a bug report. "the pixel is sometimes a square". it's always a square. click the bug to fix it anyway.`, `LE DEV : un rapport de bug. « le pixel est parfois un carré ». il est toujours carré. clique sur le bug pour le corriger quand même.`]); }
}
function p3Fixed(byHand) {
  const p = S.p3;
  p.bugs.shift(); p.bugN = Math.max(0, p.bugN - 1); p.fixed++; S.st.p3fixed = p.fixed;
  // more bugs than tickets: the next one shows up
  if (p.bugN > p.bugs.length && p.bugs.length < 40) { const r = Math.random(), sev = r < 0.1 ? 2 : r < 0.4 ? 1 : 0; p.bugs.push({ id: Math.random().toString(36).slice(2, 7), sev, hp: [1, 3, 8][sev], max: [1, 3, 8][sev], t: Math.random() * X9.bugs.length | 0 }); }
  if (byHand) toast(T(X9.fixed));
}
function p3Review(force) {
  const p = S.p3;
  let s = force || Math.max(1, Math.min(5, Math.round(p3Mood() + rnd(-1.2, 1))));
  let pool = X9.rev[s];
  if (force && p.ev.bomb) pool = X9.rev.bomb;
  else if (s <= 2 && p.full > 0 && Math.random() < 0.7) pool = X9.rev.sat;
  else if (s <= 3 && p.bugN > 5 && Math.random() < 0.6) pool = X9.rev.bug;
  else if (s <= 2 && p3Price().p >= 30 && Math.random() < 0.6) pool = X9.rev.price;
  else if (s <= 3 && p3Price().ads && Math.random() < 0.4) pool = X9.rev.ads;
  else if (s <= 3 && p.patch.micro && Math.random() < 0.3) pool = X9.rev.micro;
  p.rev.push({ s, t: pool[Math.random() * pool.length | 0], n: X9.names[Math.random() * X9.names.length | 0], h: Math.round(rnd(0.1, 400) * 10) / 10, k: ++p.revN, pool: pool === X9.rev.bomb ? 1 : 0 });
  if (p.rev.length > 40) p.rev.shift();
  S.st.p3rev = p.revN;
}
function p3Event() {
  const p = S.p3, list = [`viral`, `star`, `sale`];
  if (p.ch >= 2) list.push(`clone`, `down`, `cat`);
  if (p.ch >= 3) list.push(`bomb`);
  const k = list[Math.random() * list.length | 0];
  let m = X9.ev[k];
  if (k === `viral`) p.hype *= 3;
  else if (k === `clone`) { p.hype *= 0.6; p.ev.clone = 60; }
  else if (k === `down`) p.ev.down = 20;
  else if (k === `star`) { const n = 200 + p.owners * 0.005; p.hype += n; m = tf(m, { n: fmt(n) }); }
  else if (k === `sale`) p.ev.sale = 60;
  else if (k === `cat`) { const n = P3PATCH.find(x => !p.patch[x.id] && x.ch <= p.ch); if (n && Math.random() < 0.5) { p.patch[n.id] = 1; p.fresh = 120; } else for (let i = 0; i < 5; i++) p3Bug(); }
  else if (k === `bomb`) {
    if (p3n(`cm`) >= 3) m = X9.ev.bombStop;
    else { p.ev.bomb = 1; for (let i = 0; i < 8; i++) p3Review(1); p.ev.bomb = 0; }
  }
  p3Say(m); toast(T(m));
}

// ---------- actions ----------
const P3A = {
  p3tab(t) { S.p3.tab = t; if (t === `msg`) S.p3.unread = 0; },
  p3price(i) { S.p3.price = +i; },
  p3mkt(id) {
    const p = S.p3, m = P3MKT.find(x => x.id === id);
    if (!m || p.cd[id] > 0 || m.ch > p.ch) return;
    const c = m.c(p.ch);
    if (p.money < c) return toast(T(X9.poor));
    p.money -= c; p.cd[id] = m.cd; p.hype += m.h(p.owners); S.st.p3mkt = (S.st.p3mkt || 0) + 1;
    // the streamer hated it, live
    if (id === `stream` && Math.random() < 0.2) { for (let i = 0; i < 3; i++) p3Review(1); p3Say([`THE DEV: the streamer said "it's a pixel" for 3 hours. it was a compliment, i think. no.`, `LE DEV : le streamer a dit « c'est un pixel » pendant 3 heures. c'était un compliment, je crois. non.`]); }
  },
  p3hire(id) {
    const p = S.p3, h = P3HIRE.find(x => x.id === id);
    if (!h || (h.max && p3n(id) >= h.max) || (h.ch || 0) > p.ch) return;
    const c = p3HireCost(h);
    if (p.money < c) return toast(T(X9.poor));
    p.money -= c; p.hire[id] = p3n(id) + 1;
  },
  p3plat(id) {
    const p = S.p3, pl = P3PLAT.find(x => x.id === id);
    if (!pl || p.plat[id] || pl.ch > p.ch) return;
    if (p.money < pl.cost) return toast(T(X9.poor));
    p.money -= pl.cost; p.plat[id] = 1; p.hype *= 1.5;
  },
  p3ship(id) {
    const p = S.p3, x = P3PATCH.find(y => y.id === id);
    if (!x || p.patch[id] || x.ch > p.ch) return;
    if (p.dh < x.h) return toast(T(X9.poorH));
    p.dh -= x.h; p.patch[id] = 1; p.fresh = 120; p.hype = p.hype * (x.burst || 1.6) + 20;
    toast(fill(T(X9.shippedT), { a: T(x.t) })); S.st.p3patch = Object.keys(p.patch).length;
  },
  p3fix(bid) {
    const p = S.p3, i = p.bugs.findIndex(b => b.id === bid);
    if (i < 0) return;
    const b = p.bugs[i];
    if (--b.hp <= 0) { p.bugs.splice(i, 1); p.bugs.unshift(b); p3Fixed(1); }
  },
  p3reply(k) {
    const p = S.p3, r = p.rev.find(x => x.k === +k);
    if (!r || r.rep || p.cd.reply > 0) return;
    r.rep = X9.replies[Math.random() * X9.replies.length | 0]; r.s = Math.min(5, r.s + 1); p.cd.reply = 8; S.st.p3rep = (S.st.p3rep || 0) + 1;
  },
  p3opt() { p3Panel = p3Panel === `opt` ? `` : `opt`; },
  p3close() { p3Panel = ``; },
  p3back() { p3Panel = ``; dlg(T(X8.backQ), { cancel: true, ok: p2Leave }); },
  p3p2() { p3Panel = ``; p2Enter(); },
  p3about() { p3Panel = ``; dlg(T(X9.about)); },
  p3keep() { $(`p3end`).classList.remove(`on`); busy = false; S.p3.fin = 2; },
  p3fin() { p3Panel = ``; busy = true; p3Credits(); },
  p3go: () => p3Enter(),
};
let p3Panel = ``;
function p3Enter() { if (!p3Unlocked()) return; modeSwitch(9); }
function p3Start() {
  if (!S.p3) { S.p3 = p3Fresh(); for (const l of X9.intro) p3Say(l); S.p3.unread = 0; S.p3.tab = `msg`; S.st.p3 = 1; for (let i = 0; i < 3; i++) S.p3.rev.push({ s: 4, t: X9.rev[4][i], n: X9.names[i + 5], h: 0.4, k: ++S.p3.revN }); }
  p3Mount();
  const away = (Date.now() - S.last) / 1000, p = S.p3;
  if (away > 60 && p.fin !== 1) {
    // away: the store keeps selling, at half speed, up to 8 hours
    const n = Math.min(away, 8 * 3600) / 2, steps = Math.min(400, Math.ceil(n));
    for (let i = 0; i < steps; i++) p3Tick(n / steps);
  }
  if (p.fin === 1) p.fin = 2;
}

// ---------- screen ----------
function p3Mount() {
  if ($(`p3`)) return;
  document.body.insertAdjacentHTML(`beforeend`, `<div id="p3">
<header class="p3top"><div class="p3logo"><i></i><b>PIXSTORE</b><span>${T([`Partners`, `Partenaires`])}</span></div><div class="p3game"><b>PIXEL-OS</b><span id="p3ver"></span></div><div class="p3kpis" id="p3kpis"></div><button class="p3btn" data-act="p3opt">⋯</button></header>
<div class="p3body">
<aside class="p3left" id="p3left"></aside>
<main class="p3mid"><section class="p3card p3mapc"><div class="p3ch"><h3 id="p3mapH"></h3><span id="p3capT"></span></div><canvas id="p3map"></canvas><div id="p3goal"></div></section><section class="p3card p3chartc"><div class="p3ch"><h3 id="p3chartH"></h3><span id="p3hypeT"></span></div><canvas id="p3chart"></canvas></section></main>
<aside class="p3right"><nav class="p3tabs" id="p3tabs"></nav><div class="p3pane" id="p3pane"></div></aside>
</div>
<div id="p3pan"></div>
<div id="p3end"><div class="p3et"></div></div>
</div>`);
}
const p3Stars = r => { let h = ``; for (let i = 1; i <= 5; i++) h += `<i class="${r >= i - 0.25 ? `f` : r >= i - 0.75 ? `h` : ``}">★</i>`; return `<span class="p3st">${h}</span>`; };
const p3fmtM = n => fmt(n) + ` €`;
const p3cdHtml = (id, tot) => { const c = S.p3.cd[id]; return c > 0 ? `<span class="p3cd" style="width:${c / tot * 100}%"></span>` : ``; };
function p3Render() {
  const p = S.p3;
  if (!p || !$(`p3`)) return;
  const R = p3Rating(), cap = p3Cap();
  setH(`p3ver`, p.patch.v1 ? `v1.0` : `v0.${Object.keys(p.patch).length + 1} · ${T([`early access`, `accès anticipé`])}`);
  setH(`p3kpis`, [
    [X9.k.money, p3fmtM(p.money), ``],
    [X9.k.owners, fmt(p.owners), `+${fmtR(P3F.nw)}/s`],
    [X9.k.online, `<em class="p3dot${p.full > 0 ? ` red` : ``}"></em>${fmt(p.act)}`, ``],
    [X9.k.rating, `${p3Stars(R)} ${R.toFixed(1).replace(`.`, S.lang === `fr` ? `,` : `.`)}`, ``],
    [X9.k.dh, fmt(p.dh), `+${fmtR(p3n(`dev`) + 0.2)}/s`],
  ].map(([k, v, s]) => `<div class="p3kpi"><span>${T(k)}</span><b>${v}</b>${s ? `<small>${s}</small>` : ``}</div>`).join(``));
  // left: marketing, price, studio, platforms
  const mk = P3MKT.filter(m => m.ch <= p.ch).map(m => { const c = m.c(p.ch); return `<button class="p3act${p.cd[m.id] > 0 ? ` cool` : ``}${p.money < c ? ` poor` : ``}" data-act="p3mkt:${m.id}"><b>${T(m.t)}</b><em>${p.cd[m.id] > 0 ? `⏳ ${Math.ceil(p.cd[m.id])} s` : c ? p3fmtM(c) : T(X9.free)}</em><small>${T(m.d)}</small>${p3cdHtml(m.id, m.cd)}</button>`; }).join(``);
  const prc = `<div class="p3seg">${P3PRICE.map((x, i) => `<button class="${p.price === i ? `on` : ``}" data-act="p3price:${i}">${x.p ? x.p + ` €` : T([`Free`, `Gratuit`])}</button>`).join(``)}</div><p class="p3dim">${p3Price().ads ? T([`Free with ads: more players, money from ads, reviews a bit worse.`, `Gratuit avec pubs : plus de joueurs, l'argent vient des pubs, avis un peu moins bons.`]) : T([`Cheaper sells more. Too expensive, reviews complain.`, `Moins cher vend plus. Trop cher, les avis râlent.`])}</p>`;
  const hi = P3HIRE.filter(h => (h.ch || 0) <= p.ch).map(h => { const n = p3n(h.id), mx = h.max && n >= h.max, c = p3HireCost(h); return `<button class="p3row${mx ? ` done` : p.money < c ? ` poor` : ``}${h.id === `srv` && p.full > 0 ? ` hot` : ``}" data-act="p3hire:${h.id}"><div><b>${T(h.t)} <span class="p3n">×${n}</span></b><small>${h.id === `srv` ? fill(T([`+{n} places for players.`, `+{n} places pour les joueurs.`]), { n: fmt(p3Seats(n)) }) : T(h.d)}</small></div><em>${mx ? `max` : p3fmtM(c)}</em></button>`; }).join(``);
  const pl = P3PLAT.filter(x => x.ch <= p.ch + 1).map(x => { const own = p.plat[x.id], lock = x.ch > p.ch; return `<button class="p3row${own ? ` done` : lock ? ` lock` : p.money < x.cost ? ` poor` : ``}" data-act="p3plat:${x.id}"><div><b>${T(x.t)} <span class="p3n">+${fmt(x.market)}</span></b><small>${lock ? fill(T(X9.locked), { n: fmt(P3CH[x.ch - 1]) }) : T(x.d)}</small></div><em>${own ? `✓` : lock ? `🔒` : p3fmtM(x.cost)}</em></button>`; }).join(``);
  setH(`p3left`, `<section class="p3card"><h3>${T(X9.mkt)}</h3>${mk}</section><section class="p3card"><h3>${T(X9.price)}</h3>${prc}</section><section class="p3card"><h3>${T(X9.studio)}</h3>${hi}</section><section class="p3card"><h3>${T(X9.plat)}</h3>${pl}</section>`);
  setH(`p3mapH`, T(X9.map));
  setH(`p3capT`, p.full > 0 ? `<b class="p3red">${T(X9.full)}</b>` : fill(T(X9.cap), { a: fmt(p.act), b: fmt(cap) }));
  const g = P3CH[Math.min(p.ch, P3CH.length - 1)], prev = p.ch ? P3CH[p.ch - 1] : 0, pc = p.ch >= P3CH.length ? 100 : Math.max(0, Math.min(100, Math.log10(1 + p.owners - prev) / Math.log10(1 + g - prev) * 100));
  setH(`p3goal`, `<div class="p3gbar"><span>${p.ch >= P3CH.length ? T(X9.goalEnd) : fill(T(X9.goal), { n: fmt(g) })}</span><div><i style="width:${pc}%"></i></div></div>`);
  setH(`p3chartH`, T(X9.chart));
  setH(`p3hypeT`, `${T(X9.k.hype)} <b>${fmt(p.hype)}</b>` + (p.ev.sale > 0 ? ` · <b class="p3gold">-50 %</b>` : ``) + (p.ev.clone > 0 ? ` · <b class="p3red">PIXEL∞</b>` : ``) + (p.ev.down > 0 ? ` · <b class="p3red">${T([`OUTAGE`, `PANNE`])}</b>` : ``));
  // right: tabs
  const tb = (id, extra = ``) => `<button class="${p.tab === id ? `on` : ``}" data-act="p3tab:${id}">${T(X9.tabs[id])}${extra}</button>`;
  setH(`p3tabs`, tb(`rev`) + tb(`bug`, p.bugN ? ` <span class="p3badge">${p.bugN > 99 ? `99+` : p.bugN}</span>` : ``) + tb(`road`) + tb(`msg`, p.unread ? ` <span class="p3badge b">${p.unread}</span>` : ``));
  setH(`p3pane`, p.tab === `bug` ? p3BugHtml() : p.tab === `road` ? p3RoadHtml() : p.tab === `msg` ? p3MsgHtml() : p3RevHtml());
  setH(`p3pan`, p3Panel === `opt` ? p3OptHtml() : ``);
  $(`p3pan`).className = p3Panel ? `on ` + p3Panel : ``;
}
function p3RevHtml() {
  const p = S.p3, R = p3Rating();
  const dist = [5, 4, 3, 2, 1].map(s => { const n = p.rev.filter(r => r.s === s).length; return `<div class="p3dist"><span>${s}★</span><div><i style="width:${n / Math.max(1, p.rev.length) * 100}%"></i></div></div>`; }).join(``);
  return `<div class="p3rsum"><b>${R.toFixed(1).replace(`.`, S.lang === `fr` ? `,` : `.`)}</b>${p3Stars(R)}<small>${fmt(p.revN)} ${T([`reviews`, `avis`])}</small></div>${dist}`
    + p.rev.slice().reverse().slice(0, 14).map(r => `<div class="p3rev s${r.s}"><div class="p3rh">${p3Stars(r.s)}<b>${esc(r.n)}</b><small>${fill(T(X9.hours), { h: String(r.h).replace(`.`, S.lang === `fr` ? `,` : `.`) })}</small></div><p>${esc(T(r.t))}</p>${r.rep ? `<p class="p3rep">${esc(T(r.rep))}</p>` : r.s <= 2 ? `<button class="p3mini${p.cd.reply > 0 ? ` cool` : ``}" data-act="p3reply:${r.k}">${T(X9.reply)}</button>` : ``}</div>`).join(``);
}
function p3BugHtml() {
  const p = S.p3;
  if (!p.bugs.length) return `<p class="p3dim">${T(X9.noBug)}</p>`;
  return `<p class="p3dim">${T(X9.bugHelp)}</p>` + p.bugs.slice(0, 12).map(b => `<button class="p3bug sev${b.sev}" data-act="p3fix:${b.id}"><span class="p3sev">${T(X9.sev[b.sev])}</span><b>#${b.id.toUpperCase()}</b><p>${esc(T(X9.bugs[b.t]))}</p><div class="p3hp"><i style="width:${b.hp / b.max * 100}%"></i></div></button>`).join(``) + (p.bugN > 12 ? `<p class="p3dim">${fill(T(X9.more), { n: fmt(p.bugN - 12) })}</p>` : ``);
}
function p3RoadHtml() {
  const p = S.p3;
  return P3PATCH.filter(x => x.ch <= p.ch + 1).map(x => {
    const done = p.patch[x.id], lock = x.ch > p.ch;
    return `<div class="p3patch${done ? ` done` : lock ? ` lock` : ``}"><div><b>${T(x.t)}</b><small>${lock ? fill(T(X9.locked), { n: fmt(P3CH[x.ch - 1]) }) : T(x.d)}</small></div>${done ? `<span class="p3ok">${T(X9.shipped)}</span>` : lock ? `` : `<button class="p3mini${p.dh < x.h ? ` poor` : ``}" data-act="p3ship:${x.id}">${fill(T(X9.ship), { n: fmt(x.h) })}</button>`}</div>`;
  }).join(``);
}
function p3MsgHtml() {
  return S.p3.chat.slice().reverse().slice(0, 20).map(l => {
    const t = T(l), m = /^([A-ZÀ-Ý ]+) ?: (.*)$/s.exec(t), who = m ? m[1] : ``, cls = /COPIXEL/.test(who) ? `cop` : /CHAT|CAT/.test(who) ? `cat` : m ? `dev` : `sys`;
    return `<div class="p3msg ${cls}">${m ? `<b>${esc(who)}</b>${esc(m[2])}` : esc(t)}</div>`;
  }).join(``);
}
function p3OptHtml() {
  const o = (a, t) => `<button class="p3mi" data-act="${a}">${t}</button>`;
  return `<div class="p3menu">` + o(`p3back`, `↩ ${T(X8.back)}`) + o(`p3p2`, `🎨 PIXEL-OS 2`) + o(`save`, T([`Save`, `Sauvegarder`])) + o(`lang`, `English / Français`)
    + o(`sci`, `[${S.opt.sci ? `x` : ` `}] ${T(X8.sci)}`) + o(`anim`, `[${S.opt.anim ? `x` : ` `}] ${T(X8.anim)}`)
    + o(`exp`, T([`Export the save`, `Exporter la sauvegarde`])) + o(`imp`, T([`Import a save`, `Importer une sauvegarde`]))
    + (S.p3.fin ? o(`p3fin`, T(X9.again)) : ``) + o(`p3about`, T([`About`, `À propos`])) + o(`hard`, T([`Erase everything`, `Tout effacer`])) + o(`p3close`, T(X8.close)) + `</div>`;
}

// ---------- the map and the chart ----------
// cells light up from the developer's home, outward, as the players come
const P3LAND = [];
P3MAP.forEach((r, y) => [...r].forEach((c, x) => { if (c === `#`) P3LAND.push([x, y, Math.hypot(x - P3HOME[0], (y - P3HOME[1]) * 1.4) + ((x * 7 + y * 13) % 5) * 1.3]); }));
P3LAND.sort((a, b) => a[2] - b[2]);
let p3T = 0;
function p3Frame(now) {
  if (S.era !== 9 || !S.p3 || !$(`p3map`)) return;
  if (now - p3T < 33) return;
  p3T = now;
  const p = S.p3, t = S.opt.anim ? now / 1000 : 0, dpr = devicePixelRatio || 1;
  // the map
  const cv = $(`p3map`), box = cv.parentElement, MW = P3MAP[0].length, MH = P3MAP.length;
  const s = Math.max(4, Math.floor(Math.min((box.clientWidth - 24) / MW, (box.clientHeight - 90) / MH)));
  if (cv.width !== MW * s * dpr || cv.height !== MH * s * dpr) { cv.width = MW * s * dpr; cv.height = MH * s * dpr; cv.style.width = MW * s + `px`; cv.style.height = MH * s + `px`; }
  const x = cv.getContext(`2d`);
  x.setTransform(dpr, 0, 0, dpr, 0, 0);
  x.clearRect(0, 0, MW * s, MH * s);
  const lit = Math.round(P3LAND.length * Math.min(1, (Math.log10(1 + p.owners) / Math.log10(8e9)) ** 1.6));
  const red = p.full > 0;
  P3LAND.forEach(([cx, cy], i) => {
    const on = i < lit, g = s - 1;
    if (!on) { x.fillStyle = `#1a2333`; x.fillRect(cx * s, cy * s, g, g); return; }
    const tw = 0.75 + 0.25 * Math.sin(t * 2 + cx * 0.7 + cy * 1.3);
    x.fillStyle = red && (cx * 3 + cy) % 7 === 0 && Math.sin(t * 6) > 0 ? `rgba(255,90,110,${tw})` : `rgba(64,224,208,${tw})`;
    x.fillRect(cx * s, cy * s, g, g);
  });
  // the developer's home
  const hx = P3HOME[0] * s + s / 2, hy = P3HOME[1] * s + s / 2, pr = 4 + 3 * Math.sin(t * 3);
  x.strokeStyle = `rgba(255,255,255,.8)`; x.lineWidth = 1.5; x.beginPath(); x.arc(hx, hy, s * 0.6 + pr, 0, Math.PI * 2); x.stroke();
  x.fillStyle = `#fff`; x.fillRect(P3HOME[0] * s, P3HOME[1] * s, s - 1, s - 1);
  // sparkles: someone clicks somewhere
  for (let k = 0; k < Math.min(12, lit / 8); k++) {
    const c = P3LAND[Math.floor((Math.sin(k * 91.7 + Math.floor(t * 1.5 + k * 0.37)) * 0.5 + 0.5) * lit)];
    if (!c) continue;
    const a = 1 - ((t * 1.5 + k * 0.37) % 1);
    x.fillStyle = `rgba(255,255,255,${a})`; x.fillRect(c[0] * s - 1, c[1] * s - 1, s + 1, s + 1);
  }
  // the moon and the cats' universe
  if (p.plat.moon) { x.fillStyle = `#e9e6d8`; x.beginPath(); x.arc(MW * s - 3 * s, 2.5 * s, s * 1.6, 0, Math.PI * 2); x.fill(); x.fillStyle = `#40e0d0`; x.fillRect(MW * s - 3.4 * s, 2.2 * s, s * 0.7, s * 0.7); }
  if (p.plat.cats) { x.font = `${s * 3}px system-ui`; x.fillText(`🐱`, 1 * s, MH * s - 1.2 * s); }
  // the chart: players online, last 3 minutes
  const ch = $(`p3chart`), cb = ch.parentElement, w = Math.max(100, cb.clientWidth - 24), h = Math.max(60, cb.clientHeight - 44);
  if (ch.width !== w * dpr || ch.height !== h * dpr) { ch.width = w * dpr; ch.height = h * dpr; ch.style.width = w + `px`; ch.style.height = h + `px`; }
  const y = ch.getContext(`2d`);
  y.setTransform(dpr, 0, 0, dpr, 0, 0); y.clearRect(0, 0, w, h);
  // axes: player counts on the left, time underneath, the current count at the end of the line
  const hs = p.hist.length ? p.hist : [0], cap = p3Cap(), L = 58, B = 18, R = 70, pw = w - L - R, ph = h - B - 6;
  const peak = Math.max(10, ...hs), top = (cap <= peak * 1.6 ? Math.max(cap, peak) : peak) * 1.2;
  const X = i => L + (i / 179) * pw, Y = v => 6 + ph - v / top * ph;
  y.font = `11px system-ui`; y.textBaseline = `middle`;
  for (let k = 0; k <= 4; k++) {
    const v = top * k / 4, yy = Math.round(Y(v)) + 0.5;
    y.strokeStyle = `rgba(255,255,255,${k ? 0.06 : 0.15})`; y.lineWidth = 1; y.beginPath(); y.moveTo(L, yy); y.lineTo(L + pw, yy); y.stroke();
    y.fillStyle = `#7f8ea3`; y.textAlign = `right`; y.fillText(fmt(v), L - 8, yy);
  }
  y.textAlign = `center`; y.textBaseline = `alphabetic`; y.fillStyle = `#7f8ea3`;
  [[0, T([`-3 min`, `-3 min`])], [60, T([`-2 min`, `-2 min`])], [120, T([`-1 min`, `-1 min`])], [179, T([`now`, `maintenant`])]].forEach(([i, l]) => y.fillText(l, Math.min(X(i), L + pw - 20), h - 3));
  // server capacity: a dashed line, or a note when it's far above
  y.textAlign = `left`; y.fillStyle = `rgba(255,110,130,.9)`;
  if (cap <= top) {
    const capY = Y(cap);
    y.setLineDash([5, 4]); y.strokeStyle = `rgba(255,110,130,.7)`; y.beginPath(); y.moveTo(L, capY); y.lineTo(L + pw, capY); y.stroke(); y.setLineDash([]);
    y.fillText(fill(T([`server capacity: {n}`, `capacité des serveurs : {n}`]), { n: fmt(cap) }), L + 6, Math.max(14, capY - 5));
  } else y.fillText(fill(T([`server capacity: {n} (above)`, `capacité des serveurs : {n} (plus haut)`]), { n: fmt(cap) }), L + 6, 16);
  const gr = y.createLinearGradient(0, 6, 0, 6 + ph); gr.addColorStop(0, `rgba(64,224,208,.45)`); gr.addColorStop(1, `rgba(64,224,208,0)`);
  const off = 180 - hs.length;
  y.beginPath(); y.moveTo(X(off), Y(0)); hs.forEach((v, i) => y.lineTo(X(i + off), Y(v))); y.lineTo(X(179), Y(0)); y.closePath(); y.fillStyle = gr; y.fill();
  y.beginPath(); hs.forEach((v, i) => (i ? y.lineTo : y.moveTo).call(y, X(i + off), Y(v))); y.strokeStyle = `#40e0d0`; y.lineWidth = 2; y.stroke();
  // the current count, in a bubble at the end of the line
  const last = hs[hs.length - 1], ly = Y(last), lt = fmt(last);
  y.fillStyle = `#40e0d0`; y.beginPath(); y.arc(X(179), ly, 4, 0, Math.PI * 2); y.fill();
  y.font = `600 12px system-ui`; const tw = y.measureText(lt).width + 12;
  y.fillStyle = `#40e0d0`; y.beginPath(); y.roundRect(X(179) + 8, ly - 10, tw, 20, 6); y.fill();
  y.fillStyle = `#06201d`; y.textBaseline = `middle`; y.fillText(lt, X(179) + 14, ly + 1);
}

// ---------- the end ----------
async function p3Final() {
  const p = S.p3;
  busy = true; p.fin = 1; S.st.p3fin = 1; save();
  const el = $(`p3end`), box = el.querySelector(`.p3et`);
  el.classList.add(`on`); box.innerHTML = ``;
  for (const l of X9.fin) {
    const d = document.createElement(`div`), t = T(l);
    d.textContent = t; d.className = /^(THE DEV|LE DEV)/.test(t) ? `dev` : /^COPIXEL/.test(t) ? `cop` : /^(THE CAT|LE CHAT)/.test(t) ? `cat` : ``;
    box.appendChild(d); await wait(t.length * 35 + 900);
  }
  await wait(1200);
  p3Credits(); p.fin = 2; save();
}
function p3Credits() {
  const p = S.p3, el = $(`p3end`);
  el.classList.add(`on`);
  el.querySelector(`.p3et`).innerHTML = `<div class="big">${T(X9.thanks)}</div><pre>${esc(fill(T(X9.credits), { n: fmt(p.owners), r: fmt(p.revN), b: fmt(p.fixed), s: p3Rating().toFixed(1).replace(`.`, S.lang === `fr` ? `,` : `.`), t: dur(S.time) }))}</pre><div class="fb"><button class="p3btn on" data-act="p3keep">${T(X9.keep)}</button><button class="p3btn" data-act="p3back">${T(X8.back)}</button></div>`;
}

// ---------- era 9 ----------
NAME_FR_ERA[9] = {};
ERA[9] = {
  os: `PIXEL-OS 3`, year: 2028, unit: [`€`, `€`], mul: 1, start: { ram: 1 }, color: true,
  P: [{ id: `game`, file: `PIXEL-OS 3`, kb: 0, fixed: 1 }], PA: [], HW: [], D: {}, N: {}, LOGS: [],
  HELP: [[`Tweet, set a price, hire, ship patches.`, `Tweete, choisis un prix, embauche, publie des patchs.`]],
  end: { c: Infinity, t: [`Finish`, `Finir`], d: [``, ``] },
  about: X9.about,
  A: P3A,
};
MODES[9] = { start: () => p3Start(), tick: dt => p3Tick(dt), render: () => p3Render(), frame: now => p3Frame(now), reset() { if ($(`p3end`)) $(`p3end`).classList.remove(`on`); p3Panel = ``; } };

ACH.push(
  [`p3start`, [`Launch day`, `Jour de sortie`], [`Release the game on PixStore.`, `Sortir le jeu sur PixStore.`], () => !!S.st.p3, 9],
  [`p3k`, [`A thousand players`, `Mille joueurs`], [`Reach 1,000 players.`, `Atteindre 1 000 joueurs.`], () => (S.st.p3ch || 0) >= 2, 9],
  [`p3m`, [`Millionaire`, `Millionnaire`], [`Reach a million players.`, `Atteindre un million de joueurs.`], () => (S.st.p3ch || 0) >= 5, 9],
  [`p3bug`, [`Bug hunter`, `Chasseur de bugs`], [`Fix 100 bugs.`, `Corriger 100 bugs.`], () => (S.st.p3fixed || 0) >= 100, 9],
  [`p3rep`, [`Customer service`, `Service client`], [`Reply to 10 reviews.`, `Répondre à 10 avis.`], () => (S.st.p3rep || 0) >= 10, 9],
  [`p3patch`, [`Live service`, `Jeu-service`], [`Ship 8 patches.`, `Publier 8 patchs.`], () => (S.st.p3patch || 0) >= 8, 9],
  [`p3fin`, [`Everyone played`, `Tout le monde a joué`], [`Reach 8 billion players.`, `Atteindre 8 milliards de joueurs.`], () => !!S.st.p3fin, 9],
);
