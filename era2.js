// Era 2: MINO-DOS (1990). New constraint: the modem. Programs are downloaded, and MODEM.EXE must run (and use RAM) for that.
const X2 = {
  modemD: [`Downloads your programs. Must be running, and it uses memory. Screeches a lot.`, `Télécharge tes programmes. Doit tourner, et il prend de la mémoire. Il crie beaucoup.`],
  idle: [`ATDT 555-PIXEL... Nothing to download.`, `ATDT 555-PIXEL... Rien à télécharger.`],
  queued: [`waiting`, `en attente`],
  needModem: [`Download queued. Start MODEM.EXE or it will wait forever.`, `Téléchargement en attente. Lance MODEM.EXE, sinon il attendra pour toujours.`],
  phone: [`NO CARRIER\n\nSomeone picked up the phone in the kitchen. The current download starts over.\n\n"I'M ON THE INTERNET, MOM!"`, `NO CARRIER\n\nQuelqu'un a décroché le téléphone dans la cuisine. Le téléchargement en cours recommence.\n\n« JE SUIS SUR INTERNET, MAMAN ! »`],
  scanned: [`SCAN.EXE caught {v} on arrival. Bounty: +{n} px.`, `SCAN.EXE a attrapé {v} à l'arrivée. Prime : +{n} px.`],
  ate: [`{v} ate {p} to make room for itself.`, `{v} a mangé {p} pour se faire de la place.`],
  vClose: [[`Are you sure? (click again)`, `Tu es sûr ? (clique encore)`], [`Really sure? I was just getting comfortable.`, `Vraiment sûr ? Je venais de m'installer.`]],
  vBody: [`Your PC is now infected.\nIt eats 1% of your pixels per second.\n\nClose me. If you can. (3 clicks)`, `Ton PC est infecté.\nJe mange 1 % de tes pixels par seconde.\n\nFerme-moi. Si tu peux. (3 clics)`],
};
const VIRUSES = [`STONED.COM`, `CASCADE.COM`, `PINGPONG.COM`, `JERUSALEM.EXE`, `MICHELANGELO.COM`, `YANKEE.COM`, `TEQUILA.EXE`];
const EGA = [`#55ff55`, `#ff55ff`, `#ffff55`, `#55ffff`, `#ff5555`, `#5555ff`, `#ffffff`];

ERA[2] = {
  os: `MINO-DOS 3.3`, skin: 2, year: 1990, unit: [`KB`, `Ko`], mul: 16, start: { ram: 8, modem: 300 }, frag: 16, color: true,
  rn: { modem: [`MODEM`, `MODEM`] }, ru: { modem: [`baud`, `bauds`] },
  bootT: [`Starting MINO-DOS... HIMEM.SYS loaded. Probably.`, `Démarrage de MINO-DOS... HIMEM.SYS chargé. Sûrement.`],
  about: [`MINO-DOS 3.3\n(c) 1990 Minosoft Corp.\n"Written" by a visionary in a garage.\n\nA game by zuralon.`, `MINO-DOS 3.3\n(c) 1990 Minosoft Corp.\n« Écrit » par un visionnaire dans un garage.\n\nUn jeu de zuralon.`],
  simKeep: [`dl`],
  P: [
    { id: `game`, file: `GAME.EXE`, kb: 2, fixed: 1 },
    { id: `install`, file: `SETUP.EXE`, kb: 1 },
    { id: `dl`, file: `MODEM.EXE`, kb: 2, hidden: 1 },
    { id: `score`, file: `SCORE.EXE`, kb: 1, cost: 25, dl: 5 },
    { id: `notes`, file: `README.TXT`, kb: 1, cost: 40, dl: 5 },
    { id: `auto`, file: `AUTOCLIK.BAT`, kb: 1, cost: 100, multi: 1, k: 1.3, prod: 10, dl: 8 },
    { id: `help`, file: `HELP.COM`, kb: 1, cost: 150, dl: 10 },
    { id: `trophy`, file: `TROPHY.EXE`, kb: 1, cost: 400, dl: 10 },
    { id: `clock`, file: `CLOCK.COM`, kb: 1, cost: 600, dl: 10 },
    { id: `calc`, file: `CALC.EXE`, kb: 1, cost: 1000, dl: 15 },
    { id: `tsr`, file: `PIXEL.TSR`, kb: 2, cost: 1500, multi: 1, k: 1.3, prod: 70, dl: 20 },
    { id: `hack`, file: `TERMINAL.EXE`, kb: 2, cost: 3000, dl: 30 },
    { id: `av`, file: `SCAN.EXE`, kb: 3, cost: 6000, dl: 40 },
    { id: `defrag`, file: `DEFRAG.EXE`, kb: 2, cost: 12000, dl: 40 },
    { id: `bbs`, file: `BBS.EXE`, kb: 3, cost: 25000, multi: 1, k: 1.3, prod: 1500, dl: 60, online: 1 },
    { id: `saver`, file: `STARS.SCR`, kb: 2, cost: 40000, dl: 60 },
    { id: `turbo`, file: `TURBO.EXE`, kb: 4, cost: 1e6, multi: 1, k: 1.3, prod: 8000, dl: 120 },
    { id: `mega`, file: `MEGAPIX.EXE`, kb: 6, cost: 5e7, multi: 1, k: 1.3, prod: 80000, dl: 240 },
    { id: `virus`, get file() { return (S && S.x.vname) || `VIRUS.COM`; }, kb: 2, hidden: 1 },
  ],
  HW: [
    { r: `ram`, s: [{ to: 12, c: 3000 }, { to: 16, c: 40000 }, { to: 24, c: 8e5 }, { to: 32, c: 2e7 }, { to: 40, c: 6e8 }],
      t: [`Memory card {a} -> {b}`, `Carte mémoire {a} -> {b}`], d: [`More conventional memory. Still not enough.`, `Plus de mémoire conventionnelle. Toujours pas assez.`] },
    { r: `modem`, s: [{ to: 1200, c: 1500 }, { to: 2400, c: 25000 }, { to: 9600, c: 5e5 }, { to: 14400, c: 1e7 }, { to: 28800, c: 3e8 }],
      t: [`Modem {a} -> {b}`, `Modem {a} -> {b}`], d: [`Faster downloads. Louder screeching.`, `Téléchargements plus rapides. Cris plus forts.`] },
  ],
  end: { c: 1.2e10, t: [`Insert the IDM floppy`, `Insérer la disquette IDM`], d: [`Requires every hardware upgrade.`, `Nécessite toutes les améliorations matérielles.`] },
  MS: [[`m1m`, 1e6], [`m100m`, 1e8]],
  PA: [
    { id: `turbo1`, cost: 2000, c: 2, t: [`TURBO button`, `Bouton TURBO`], d: [`Clicks x2. Nobody ever knew what that button really did.`, `Clics x2. Personne n'a jamais su ce que faisait vraiment ce bouton.`] },
    { id: `auto1`, cost: 3000, req: `auto`, m: [`auto`, 2], t: [`AUTOCLIK v2`, `AUTOCLIK v2`], d: [`Autoclicks x2.`, `Autoclics x2.`] },
    { id: `v42`, cost: 5000, f: `dlfast`, t: [`Error correction (V.42)`, `Correction d'erreurs (V.42)`], d: [`Downloads twice as fast.`, `Téléchargements deux fois plus rapides.`] },
    { id: `tsr1`, cost: 15000, req: `tsr`, m: [`tsr`, 2], t: [`Stay resident harder`, `Résident encore plus`], d: [`PIXEL.TSR x2.`, `PIXEL.TSR x2.`] },
    { id: `line2`, cost: 20000, f: `line2`, t: [`Second phone line`, `Deuxième ligne téléphonique`], d: [`Nobody can pick up the phone and cut your downloads anymore.`, `Plus personne ne peut décrocher et couper tes téléchargements.`] },
    { id: `mouse`, cost: 40000, c: 3, t: [`MOUSE.COM`, `MOUSE.COM`], d: [`Clicks x3. A mouse driver. In 1990. Luxury.`, `Clics x3. Un pilote de souris. En 1990. Le luxe.`] },
    { id: `stray2`, cost: 60000, f: `strayx3`, t: [`Pixel bounty`, `Prime aux pixels`], d: [`Good stray pixels are worth x3.`, `Les bons pixels égarés valent x3.`] },
    { id: `auto2`, cost: 80000, req: `auto`, m: [`auto`, 3], t: [`AUTOCLIK v3`, `AUTOCLIK v3`], d: [`Autoclicks x3.`, `Autoclics x3.`] },
    { id: `ztsr`, cost: 100000, req: `tsr`, z: [`tsr`, 1], t: [`PKZIP PIXEL.TSR`, `PKZIP PIXEL.TSR`], d: [`PIXEL.TSR uses 16 KB instead of 32.`, `PIXEL.TSR utilise 16 Ko au lieu de 32.`] },
    { id: `dl2`, cost: 150000, f: `dl2`, t: [`Parallel downloads`, `Téléchargements parallèles`], d: [`Two downloads at once. Same phone line. Don't ask how.`, `Deux téléchargements à la fois. Même ligne. Ne demande pas comment.`] },
    { id: `offline`, cost: 200000, req: `clock`, f: `offline`, t: [`CMOS battery`, `Pile CMOS`], d: [`Offline progress at 100% instead of 50%.`, `Progression hors ligne à 100 % au lieu de 50 %.`] },
    { id: `bbs1`, cost: 300000, req: `bbs`, m: [`bbs`, 2], t: [`Sysop account`, `Compte sysop`], d: [`BBS.EXE x2.`, `BBS.EXE x2.`] },
    { id: `magnet`, cost: 500000, f: `magnet`, t: [`Pixel firewall`, `Pare-feu à pixels`], d: [`Bad stray pixels can't steal anymore.`, `Les mauvais pixels égarés ne volent plus rien.`] },
    { id: `tsr2`, cost: 700000, req: `tsr`, m: [`tsr`, 3], t: [`TSR overdrive`, `TSR survolté`], d: [`PIXEL.TSR x3.`, `PIXEL.TSR x3.`] },
    { id: `defrag1`, cost: 1e6, req: `defrag`, f: `defrag`, t: [`Tidy memory`, `Mémoire rangée`], d: [`Memory fragments twice as slowly.`, `La mémoire se fragmente deux fois moins vite.`] },
    { id: `saver1`, cost: 1.5e6, req: `saver`, f: `saver5`, t: [`Warp speed`, `Vitesse lumière`], d: [`Screensaver: x5 instead of x3.`, `Économiseur d'écran : x5 au lieu de x3.`] },
    { id: `bbs2`, cost: 2e6, req: `bbs`, m: [`bbs`, 3], t: [`Elite BBS`, `BBS d'élite`], d: [`BBS.EXE x3. Leet.`, `BBS.EXE x3. Leet.`] },
    { id: `zbbs`, cost: 3e6, req: `bbs`, z: [`bbs`, 2], t: [`ARJ BBS.EXE`, `ARJ BBS.EXE`], d: [`BBS.EXE uses 32 KB instead of 48.`, `BBS.EXE utilise 32 Ko au lieu de 48.`] },
    { id: `mice`, cost: 5e6, c: 4, t: [`Two mice`, `Deux souris`], d: [`Clicks x4. One per hand. The cat is jealous.`, `Clics x4. Une par main. Le chat est jaloux.`] },
    { id: `turbo2`, cost: 1.5e7, req: `turbo`, m: [`turbo`, 2], t: [`TURBO.EXE /FAST`, `TURBO.EXE /FAST`], d: [`TURBO.EXE x2.`, `TURBO.EXE x2.`] },
    { id: `macro`, cost: 8e6, f: `macro`, t: [`Keyboard macro`, `Macro clavier`], d: [`Each click also gives 5% of your px/s.`, `Chaque clic donne aussi 5 % de tes px/s.`] },
    { id: `zturbo`, cost: 5e7, req: `turbo`, z: [`turbo`, 3], t: [`LHA TURBO.EXE`, `LHA TURBO.EXE`], d: [`TURBO.EXE uses 48 KB instead of 64.`, `TURBO.EXE utilise 48 Ko au lieu de 64.`] },
    { id: `turbo3`, cost: 1e8, req: `turbo`, m: [`turbo`, 3], t: [`TURBO.EXE /FASTER`, `TURBO.EXE /FASTER`], d: [`TURBO.EXE x3.`, `TURBO.EXE x3.`] },
    { id: `mega0`, cost: 2.5e8, req: `mega`, m: [`mega`, 1.5], t: [`MEGAPIX.EXE /Q`, `MEGAPIX.EXE /Q`], d: [`MEGAPIX.EXE x1.5. Quiet mode: it stops beeping.`, `MEGAPIX.EXE x1,5. Mode silencieux : il arrête de biper.`] },
    { id: `auto3`, cost: 4e8, req: `auto`, m: [`auto`, 10], t: [`GOTO 10`, `GOTO 10`], d: [`Autoclicks x10. A loop inside a loop inside a loop.`, `Autoclics x10. Une boucle dans une boucle dans une boucle.`] },
    { id: `mega1`, cost: 6e8, req: `mega`, m: [`mega`, 2], t: [`MEGAPIX.EXE /HIMEM`, `MEGAPIX.EXE /HIMEM`], d: [`MEGAPIX.EXE x2.`, `MEGAPIX.EXE x2.`] },
    { id: `tsr3`, cost: 8e8, req: `tsr`, m: [`tsr`, 4], t: [`TSR from hell`, `TSR de l'enfer`], d: [`PIXEL.TSR x4. It now survives reboots. Somehow.`, `PIXEL.TSR x4. Il survit maintenant aux redémarrages. Allez savoir.`] },
    { id: `bbs3`, cost: 1.2e9, req: `bbs`, m: [`bbs`, 4], t: [`FidoNet node`, `Nœud FidoNet`], d: [`BBS.EXE x4. Your BBS talks to other BBSes at night.`, `BBS.EXE x4. Ton BBS parle à d'autres BBS la nuit.`] },
    { id: `turbo4`, cost: 1.8e9, req: `turbo`, m: [`turbo`, 2], t: [`TURBO.EXE /FASTEST`, `TURBO.EXE /FASTEST`], d: [`TURBO.EXE x2. There is no /FASTERER.`, `TURBO.EXE x2. Il n'y a pas de /FASTERER.`] },
    { id: `zmega`, cost: 1.5e9, req: `mega`, z: [`mega`, 4], t: [`Self-extracting MEGAPIX`, `MEGAPIX auto-extractible`], d: [`MEGAPIX.EXE uses 64 KB instead of 96.`, `MEGAPIX.EXE utilise 64 Ko au lieu de 96.`] },
    { id: `mega2`, cost: 2.5e9, req: `mega`, m: [`mega`, 3], t: [`MEGAPIX.EXE /EMS`, `MEGAPIX.EXE /EMS`], d: [`MEGAPIX.EXE x3.`, `MEGAPIX.EXE x3.`] },
  ],
  D: {
    score: [`Shows your score. In 16 colors.`, `Affiche ton score. En 16 couleurs.`],
    notes: [`README.TXT. Nobody reads it. Except you.`, `README.TXT. Personne ne le lit. Sauf toi.`],
    auto: [`+10 px/s. A batch file that clicks. @ECHO OFF.`, `+10 px/s. Un fichier batch qui clique. @ECHO OFF.`],
    help: [`Makes the Help menu work. F1 does nothing, as usual.`, `Fait marcher le menu Aide. F1 ne fait rien, comme d'habitude.`],
    trophy: [`Shows your achievements.`, `Affiche tes succès.`],
    clock: [`Keeps time. Needed for offline progress.`, `Garde l'heure. Nécessaire pour progresser hors ligne.`],
    calc: [`Shows your stats.`, `Affiche tes stats.`],
    tsr: [`+70 px/s. Terminate and Stay Resident. It never leaves. Like a guest.`, `+70 px/s. Terminate and Stay Resident. Il ne part jamais. Comme un invité.`],
    hack: [`Dial into the PIXCORP BBS and guess passwords. Rewards pixels and messages.`, `Appelle le BBS de PIXCORP et devine des mots de passe. Rapporte des pixels et des messages.`],
    av: [`Catches viruses the moment they arrive, and pays a bounty. Only while running.`, `Attrape les virus dès leur arrivée et paie une prime. Seulement s'il tourne.`],
    defrag: [`Repairs fragmented memory while it runs.`, `Répare la mémoire fragmentée tant qu'il tourne.`],
    bbs: [`+1500 px/s. Downloads pixels from a BBS. Only works while MODEM.EXE runs.`, `+1500 px/s. Télécharge des pixels depuis un BBS. Ne marche que si MODEM.EXE tourne.`],
    saver: [`Production x3 when you don't move the mouse for 20 s. Stars!`, `Production x3 quand tu ne bouges pas la souris pendant 20 s. Des étoiles !`],
    turbo: [`+8000 px/s. Makes pixels faster. Doesn't say how.`, `+8000 px/s. Rend les pixels plus rapides. Ne dit pas comment.`],
    mega: [`+80000 px/s. 96 KB. Nobody will ever need more than this program.`, `+80000 px/s. 96 Ko. Personne n'aura jamais besoin de plus que ce programme.`],
    dl: [`Downloads your programs.`, `Télécharge tes programmes.`],
  },
  N: {
    start: [`README.TXT: Hi, it's me again. New computer, new OS. MINO-DOS came on a floppy that I definitely did not copy. Everything is downloaded now. With a modem. You'll hear it.`, `README.TXT : Salut, c'est encore moi. Nouvel ordinateur, nouvel OS. MINO-DOS est arrivé sur une disquette que je n'ai absolument pas copiée. Maintenant, tout se télécharge. Avec un modem. Tu vas l'entendre.`],
    score: [`SCORE.EXE: the score, in color. Green, because money.`, `SCORE.EXE : le score, en couleur. Vert, parce que l'argent.`],
    notes: [`README.TXT: you're reading the README. Nobody reads the README. I'm so proud of you.`, `README.TXT : tu lis le README. Personne ne lit le README. Je suis tellement fier de toi.`],
    auto: [`AUTOCLIK.BAT: @ECHO OFF, then CLICK, then GOTO 1. Programming peaked here.`, `AUTOCLIK.BAT : @ECHO OFF, puis CLICK, puis GOTO 1. La programmation a atteint son sommet ici.`],
    help: [`HELP.COM: press F1 for help. F1 is not mapped. Use the menu.`, `HELP.COM : appuie sur F1 pour l'aide. F1 n'est pas configuré. Utilise le menu.`],
    trophy: [`TROPHY.EXE: your trophies followed you. Weird, I formatted the disk.`, `TROPHY.EXE : tes trophées t'ont suivi. Bizarre, j'ai formaté le disque.`],
    clock: [`CLOCK.COM: the computer knows the time. It thinks it's 1980. Close enough.`, `CLOCK.COM : l'ordinateur connaît l'heure. Il pense qu'on est en 1980. C'est presque ça.`],
    calc: [`CALC.EXE: does math in 16 colors. The answer is still 42.`, `CALC.EXE : fait des maths en 16 couleurs. La réponse est toujours 42.`],
    tsr: [`PIXEL.TSR: terminates, and stays resident. Like my mother-in-law.`, `PIXEL.TSR : se termine, et reste résident. Comme ma belle-mère.`],
    hack: [`TERMINAL.EXE: the PIXCORP BBS. Their password policy is "same as last time".`, `TERMINAL.EXE : le BBS de PIXCORP. Leur politique de mot de passe : « le même que la dernière fois ».`],
    av: [`SCAN.EXE: an antivirus. It only works while running. Viruses know that.`, `SCAN.EXE : un antivirus. Il ne marche que s'il tourne. Les virus le savent.`],
    defrag: [`DEFRAG.EXE: the little blocks move around. I could watch it for hours. I have.`, `DEFRAG.EXE : les petits blocs bougent. Je pourrais regarder ça pendant des heures. Je l'ai fait.`],
    bbs: [`BBS.EXE: pixels from strangers over the phone line. My mom says not to talk to strangers. She also picks up the phone.`, `BBS.EXE : des pixels d'inconnus par la ligne téléphonique. Ma mère dit de ne pas parler aux inconnus. Elle décroche aussi le téléphone.`],
    saver: [`STARS.SCR: flying through space. Stops screen burn-in. And boredom.`, `STARS.SCR : un vol dans l'espace. Évite que l'écran marque. Et l'ennui.`],
    turbo: [`TURBO.EXE: 64 KB of pure speed. It has racing stripes in the icon.`, `TURBO.EXE : 64 Ko de vitesse pure. L'icône a des bandes de course.`],
    mega: [`MEGAPIX.EXE: 96 KB. If you run two, MINO-DOS sweats.`, `MEGAPIX.EXE : 96 Ko. Si tu en lances deux, MINO-DOS transpire.`],
    oom: [`Out of memory. 640 KB should be enough for anybody, they said. They lied.`, `Mémoire pleine. 640 Ko devraient suffire à tout le monde, qu'ils disaient. Ils ont menti.`],
    shopClosed: [`You closed SETUP.EXE. It's on the desktop. Next to the floppy I didn't copy.`, `Tu as fermé SETUP.EXE. Il est sur le bureau. À côté de la disquette que je n'ai pas copiée.`],
    blind: [`No score on screen. Abort, Retry, Fail? You picked Fail. Bold.`, `Plus de score à l'écran. Abandon, Réessayer, Échec ? Tu as choisi Échec. Audacieux.`],
    frag: [`Memory is fragmenting again. Some things never change. DEFRAG.EXE can help.`, `La mémoire se refragmente. Certaines choses ne changent jamais. DEFRAG.EXE peut aider.`],
    stray: [`Stray pixels are back. In color this time: green is good, red is bad. Finally, a clear rule.`, `Les pixels égarés sont de retour. En couleur, cette fois : vert c'est bien, rouge c'est mal. Enfin une règle claire.`],
    phone: [`Lesson learned: never download anything at dinner time.`, `Leçon apprise : ne jamais télécharger à l'heure du dîner.`],
    virus: [`A virus. On a floppy I didn't copy. I don't understand how.`, `Un virus. Sur une disquette que je n'ai pas copiée. Je ne comprends pas comment.`],
    r12: [`192 KB. My first 640 KB will be a great day.`, `192 Ko. Mes premiers 640 Ko seront un grand jour.`],
    r16: [`256 KB. The memory card has a little sticker. It says "DO NOT REMOVE". I removed it.`, `256 Ko. La carte a un petit autocollant. Il dit « NE PAS RETIRER ». Je l'ai retiré.`],
    r24: [`384 KB. CONFIG.SYS is now longer than my résumé.`, `384 Ko. CONFIG.SYS est maintenant plus long que mon CV.`],
    r32: [`512 KB. Half a megabyte. Say it slowly. Mega. Byte.`, `512 Ko. Un demi-mégaoctet. Dis-le lentement. Méga. Octet.`],
    r40: [`640 KB. The legendary amount. Enough for anybody. We'll see.`, `640 Ko. La quantité légendaire. Assez pour tout le monde. On verra.`],
    modem1200: [`1200 baud. The screeching has a melody now.`, `1200 bauds. Le crissement a une mélodie, maintenant.`],
    modem2400: [`2400 baud. I can download a small picture before dinner.`, `2400 bauds. Je peux télécharger une petite image avant le dîner.`],
    modem9600: [`9600 baud. The phone bill arrived. I'm hiding it.`, `9600 bauds. La facture de téléphone est arrivée. Je la cache.`],
    modem14400: [`14400 baud. Things load before I forget what I asked for.`, `14400 bauds. Les choses chargent avant que j'oublie ce que j'ai demandé.`],
    modem28800: [`28800 baud. The fastest modem money can buy. Someone in a garage says it's "the information superhighway".`, `28800 bauds. Le modem le plus rapide du marché. Quelqu'un dans un garage appelle ça « les autoroutes de l'information ».`],
    m1m: [`One million pixels. PIXCORP wants a release date. I said "soon". They said "how soon". I hung up. Phone line's free.`, `Un million de pixels. PIXCORP veut une date de sortie. J'ai dit « bientôt ». Ils ont dit « bientôt quand ». J'ai raccroché. La ligne est libre.`],
    m100m: [`100 million pixels. Someone from IDM called. They're working on a secret project. It has a window in the name.`, `100 millions de pixels. Quelqu'un d'IDM a appelé. Ils travaillent sur un projet secret. Il y a une fenêtre dans le nom.`],
  },
  HELP: [
    [`Buying a program starts a download. MODEM.EXE must be running for downloads to progress.`, `Acheter un programme lance un téléchargement. MODEM.EXE doit tourner pour que ça avance.`],
    [`BBS.EXE only produces while MODEM.EXE runs. Choose your memory wisely.`, `BBS.EXE ne produit que si MODEM.EXE tourne. Choisis bien ta mémoire.`],
    [`Viruses eat 1% of your pixels per second. Close them (3 clicks) or keep SCAN.EXE running.`, `Les virus mangent 1 % de tes pixels par seconde. Ferme-les (3 clics) ou garde SCAN.EXE lancé.`],
    [`Green stray pixels are good. Red ones are bad.`, `Les pixels égarés verts sont bons. Les rouges sont mauvais.`],
    [`Press any key to continue. Where's the any key? Nobody knows.`, `Appuie sur une touche pour continuer. Laquelle ? Personne ne sait.`],
    [`Never type FORMAT C: just to see what happens.`, `Ne tape jamais FORMAT C: juste pour voir ce que ça fait.`],
  ],
  LOGS: [
    [`BBS MSG #1 from SYSOP: "No warez on this board." Posted next to the warez section.`, `BBS MSG #1 de SYSOP : « Pas de warez sur ce serveur. » Posté à côté de la rubrique warez.`],
    [`BBS MSG #2 from PIXCORP: "Release date for game.exe?" Reply from the dev: "Yes."`, `BBS MSG #2 de PIXCORP : « Date de sortie de game.exe ? » Réponse du dev : « Oui. »`],
    [`BBS MSG #3 from MINOSOFT: "We'd like to buy your pixel. 50 dollars." The dev: "It's worth at least 60."`, `BBS MSG #3 de MINOSOFT : « Nous voudrions acheter votre pixel. 50 dollars. » Le dev : « Il vaut au moins 60. »`],
    [`BBS MSG #4 from the dev to himself: "Remember to finish the game." Read: 0 times.`, `BBS MSG #4 du dev à lui-même : « Penser à finir le jeu. » Lu : 0 fois.`],
    [`BBS MSG #5 from IDM: "Psst. We're making windows. Not the glass kind. Interested?"`, `BBS MSG #5 d'IDM : « Psst. On fait des fenêtres. Pas en verre. Intéressé ? »`],
  ],
  // ----- era mechanics -----
  enter() { S.bought.dl = 1; openProg(`dl`); },
  queued: id => (S.x.dlq || []).filter(d => d.id === id).length,
  pending(id) {
    const q = S.x.dlq || [], i = q.findIndex(d => d.id === id);
    if (i < 0) return ``;
    const n = q.filter(d => d.id === id).length;
    return ` [${i < (flag(`dl2`) ? 2 : 1) ? Math.floor(100 - q[i].left / q[i].tot * 100) + `%` : T(X2.queued)}${n > 1 ? ` +${n - 1}` : ``}]`;
  },
  buy(id) {
    const p = prog(id);
    if (!p.dl) return false;
    (S.x.dlq = S.x.dlq || []).push({ id, left: p.dl, tot: p.dl });
    if (!S.run.dl) toast(T(X2.needModem));
    return true;
  },
  factor: p => (p.online && !S.run.dl ? 0 : 1),
  tap() { const i = $(`pix`).firstChild; if (i) i.style.background = EGA[Math.random() * EGA.length | 0]; },
  tick(dt) {
    const x = S.x, q = x.dlq || [];
    if (S.run.dl && q.length) {
      const sp = cap(`modem`) / 300 * (flag(`dlfast`) ? 2 : 1) * dt;
      for (const d of q.slice(0, flag(`dl2`) ? 2 : 1)) d.left -= sp;
      for (const d of q.filter(d => d.left <= 0)) { q.splice(q.indexOf(d), 1); S.st.dl = (S.st.dl || 0) + 1; got(d.id); }
      if (!flag(`line2`)) {
        x.phoneT = (x.phoneT || rnd(200, 400)) - dt;
        if (x.phoneT <= 0) {
          x.phoneT = rnd(240, 480);
          if (q[0] && q[0].tot - q[0].left > 4) { q[0].left = q[0].tot; S.st.phone = (S.st.phone || 0) + 1; dlg(T(X2.phone)); if (S.st.phone === 1) note(N(`phone`)); }
        }
      }
    }
    if (S.total > 3000) {
      x.virT = (x.virT || rnd(150, 300)) - dt;
      if (x.virT <= 0 && !S.run.virus) { x.virT = rnd(180, 360); ERA[2].virus(); }
    }
    if (S.run.virus) S.px -= S.px * 0.01 * dt;
  },
  simTick() { if (S.run.virus) { S.run.virus = 0; killWin(`virus`); } dq.length = 0; },
  virus() {
    const list = E().VIR || VIRUSES, name = list[Math.random() * list.length | 0];
    if (S.run.av) { const b = Math.max(500, basePerSec() * 20); gain(b); S.st.scan = (S.st.scan || 0) + 1; return toast(fill(T(X2.scanned), { v: name, n: fmt(b) })); }
    while (free() < 2) {
      const vic = E().P.filter(p => S.run[p.id] && !p.fixed && p.id !== `virus`).map(p => p.id);
      if (!vic.length) return;
      const id = vic[Math.random() * vic.length | 0];
      toast(fill(T(X2.ate), { v: name, p: prog(id).file }));
      if (prog(id).multi && S.run[id] > 1) S.run[id]--; else { S.run[id] = 0; killWin(id); }
    }
    S.x.vname = name; S.x.vk = 0; S.run.virus = 1; makeWin(`virus`);
    if (!S.once[`virus` + S.era]) { S.once[`virus` + S.era] = 1; note(N(`virus`)); }
  },
  closing(id) {
    if (id !== `virus`) return true;
    if ((S.x.vk = (S.x.vk || 0) + 1) < 3) { toast(T(X2.vClose[S.x.vk - 1])); return false; }
    S.st.virus = (S.st.virus || 0) + 1;
    return true;
  },
  BODY: {
    dl() {
      const q = S.x.dlq || [], n = flag(`dl2`) ? 2 : 1;
      const rows = q.map((d, i) => `<div class="row"><span>${prog(d.id).file}<small>${i < n ? Math.floor(100 - d.left / d.tot * 100) + `%` : T(X2.queued)}</small></span></div>${i < n ? `<div class="prog"><i style="width:${100 - d.left / d.tot * 100}%"></i></div>` : ``}`).join(``);
      return `<div class="dim">${T(X2.modemD)}</div><div class="h">${fmt(cap(`modem`))} ${T(E().ru.modem)}${flag(`dlfast`) ? ` (V.42)` : ``}</div>${rows || `<div class="dim">${T(X2.idle)}</div>`}`;
    },
    virus: () => `<pre class="vir">   (o_o)\n  <(   )>\n   _/ \\_</pre><div class="dim" style="white-space:pre-line">${T(X2.vBody)}</div>`,
  },
  taskExtra() {
    const q = S.x.dlq || [];
    return q.length ? `<span class="meter">DL ${prog(q[0].id).file} ${S.run.dl ? Math.floor(100 - q[0].left / q[0].tot * 100) + `%` : `--`}</span>` : ``;
  },
};

ACH.push(
  [`dl1`, [`You've got a file`, `Vous avez un fichier`], [`Finish a download.`, `Terminer un téléchargement.`], () => (S.st.dl || 0) >= 1, 2],
  [`dl50`, [`Download manager`, `Gestionnaire de téléchargements`], [`Finish 50 downloads.`, `Terminer 50 téléchargements.`], () => (S.st.dl || 0) >= 50, 2],
  [`phone`, [`NO CARRIER`, `NO CARRIER`], [`Get a download cut by the phone.`, `Te faire couper un téléchargement par le téléphone.`], () => (S.st.phone || 0) >= 1, 2],
  [`virus1`, [`Patient zero`, `Patient zéro`], [`Close a virus by hand.`, `Fermer un virus à la main.`], () => (S.st.virus || 0) >= 1, 2],
  [`scan5`, [`Quarantine`, `Quarantaine`], [`Let SCAN.EXE catch 5 viruses.`, `Laisser SCAN.EXE attraper 5 virus.`], () => (S.st.scan || 0) >= 5, 2],
  [`r640`, [`Enough for anybody`, `Assez pour tout le monde`], [`Reach 640 KB of memory.`, `Atteindre 640 Ko de mémoire.`], () => S.era > 2 || (S.era === 2 && cap(`ram`) >= 40), 2],
  [`baud`, [`Information superhighway`, `Autoroutes de l'information`], [`Get the 28800 baud modem.`, `Avoir le modem 28800 bauds.`], () => S.era > 2 || (S.era === 2 && cap(`modem`) >= 28800), 2],
  [`dos`, [`C:\\>`, `C:\\>`], [`Boot MINO-DOS.`, `Démarrer MINO-DOS.`], () => S.era >= 2, 2],
);
