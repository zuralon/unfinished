// Era 4: Winbows XD (2001). New constraint: bandwidth. Online programs share the connection. The browser brings pop-ups. The mailbox brings the story.
const X4 = {
  pops: [
    [`!!! CONGRATULATIONS !!!`, `You are the 1,000,000th visitor! Click here to claim your FREE PIXEL!`, `!!! FÉLICITATIONS !!!`, `Vous êtes le 1 000 000e visiteur ! Cliquez ici pour réclamer votre PIXEL GRATUIT !`],
    [`HOT SINGLE PIXELS`, `Hot single pixels in your area want to meet you!`, `PIXELS CÉLIBATAIRES`, `Des pixels célibataires près de chez vous veulent vous rencontrer !`],
    [`YOUR PC IS SLOW!!`, `Your PC is slow! Download PixelBooster 2001 now! (It makes it slower.)`, `VOTRE PC EST LENT !!`, `Votre PC est lent ! Téléchargez PixelBooster 2001 ! (Il le ralentit.)`],
    [`Punch the monkey!`, `Punch the monkey and win 500 pixels!`, `Frappez le singe !`, `Frappez le singe et gagnez 500 pixels !`],
    [`FREE SMILEYS`, `Install 4,000 free smileys for your messenger! :) :) :)`, `SMILEYS GRATUITS`, `Installez 4 000 smileys gratuits pour votre messagerie ! :) :) :)`],
    [`Toolbar offer`, `Add the PixelSearch Toolbar! You already have 6. Why not 7?`, `Offre de barre d'outils`, `Ajoutez la barre PixelSearch ! Vous en avez déjà 6. Pourquoi pas 7 ?`],
  ],
  claim: [`CLAIM NOW`, `RÉCLAMER`],
  claimed: [`Of course it was a trap. Two more pop-ups.`, `Évidemment, c'était un piège. Deux pop-ups de plus.`],
  nudge: [`{c} sent you a nudge! +{n} px`, `{c} t'a envoyé un wizz ! +{n} px`],
  contacts: [[`xX_PixelLord_Xx`, `xX_PixelLord_Xx`], [`Mom`, `Maman`], [`Bip (Away)`, `Bip (Absent)`], [`PIXCORP HR`, `RH de PIXCORP`], [`the dev`, `le dev`], [`a stranger`, `un inconnu`]],
  y2k: [`Y2K REPORT\n\nThe clock rolled over to 01/01/1900.\nThe toaster still works. The planes are fine.\nAll that panic, for this.\n\n(Your Clock now thinks it's 1900. It'll get over it.)`, `RAPPORT AN 2000\n\nL'horloge est passée au 01/01/1900.\nLe grille-pain marche toujours. Les avions vont bien.\nTout ça pour ça.\n\n(Ton horloge pense qu'on est en 1900. Ça lui passera.)`],
};
const POPS = [`pop1`, `pop2`, `pop3`];
ERA[4] = {
  os: `Winbows XD`, skin: 4, year: 2001, unit: [`MB`, `Mo`], mul: 16, start: { ram: 8, cpu: 500, bw: 56 }, color: true,
  startMenu: [`start`, `démarrer`], rn: { cpu: [`CPU`, `CPU`], bw: [`NET`, `NET`] }, ru: { cpu: [`MHz`, `MHz`], bw: [`kb/s`, `kb/s`] },
  bootT: [`Winbows XD. "XD" stands for "eXtra Decoration".`, `Winbows XD. « XD » veut dire « eXtra Décoration ».`],
  about: [`Winbows XD\n(c) 2001 Minosoft. Activated. Probably.\nThe CD came from the future. Don't think about it.\n\nA game by zuralon.`, `Winbows XD\n(c) 2001 Minosoft. Activé. Sûrement.\nLe CD est venu du futur. N'y pense pas.\n\nUn jeu de zuralon.`],
  VIR: [`ILOVEYOU.VBS`, `BLASTER.EXE`, `SASSER.EXE`, `MYDOOM.EXE`, `NIMDA.EXE`, `CODERED.EXE`],
  simKeep: [],
  pos: { notes: [-390, -400] },
  P: [
    { id: `game`, file: `Pixel XD`, kb: 2, cpu: 50, fixed: 1 },
    { id: `install`, file: `Add or Remove Programs`, kb: 1, cpu: 20 },
    { id: `score`, file: `Score XD`, kb: 1, cpu: 10, cost: 60 },
    { id: `notes`, file: `Mailbox`, kb: 1, cpu: 20, bw: 4, cost: 100 },
    { id: `auto`, file: `AutoClicker XD`, kb: 1, cpu: 30, cost: 200, multi: 1, k: 1.3, prod: 50 },
    { id: `help`, file: `Help and Support`, kb: 1, cpu: 10, cost: 400 },
    { id: `browser`, file: `Internet Exploder`, kb: 2, cpu: 80, bw: 20, cost: 800, multi: 1, k: 1.3, prod: 400 },
    { id: `trophy`, file: `Trophies`, kb: 1, cpu: 10, cost: 1500 },
    { id: `clock`, file: `Clock`, kb: 1, cpu: 5, cost: 2500 },
    { id: `calc`, file: `Calculator`, kb: 1, cpu: 10, cost: 4000 },
    { id: `msn`, file: `PSN Messenger`, kb: 1, cpu: 20, bw: 4, cost: 8000 },
    { id: `hack`, file: `Command Prompt`, kb: 2, cpu: 30, cost: 36000 },
    { id: `av`, file: `Pixel Defender`, kb: 3, cpu: 80, cost: 72000 },
    { id: `popblock`, file: `Pop-up Stopper`, kb: 1, cpu: 20, cost: 120000 },
    { id: `media`, file: `Pixamp`, kb: 3, cpu: 120, cost: 180000, multi: 1, k: 1.3, prod: 2500 },
    { id: `saver`, file: `Mystify`, kb: 2, cpu: 40, cost: 360000 },
    { id: `p2p`, file: `PixelWire`, kb: 4, cpu: 100, bw: 200, cost: 800000, multi: 1, k: 1.3, prod: 15000 },
    { id: `craft`, file: `Pixel Craft 3D`, kb: 16, cpu: 600, cost: 1.6e7, multi: 1, k: 1.3, prod: 1.6e5 },
    { id: `seti`, file: `SETI@Pixel`, kb: 6, cpu: 400, bw: 50, cost: 1e8, multi: 1, k: 1.3, prod: 9e5 },
    { id: `web`, file: `Pixel Web Server`, kb: 24, cpu: 300, bw: 1000, cost: 1.5e9, multi: 1, k: 1.3, prod: 7e6 },
    { id: `virus`, get file() { return (S && S.x.vname) || `VIRUS.EXE`; }, kb: 2, cpu: 100, hidden: 1 },
    { id: `pop1`, file: `Pop-up`, kb: 1, cpu: 30, hidden: 1 },
    { id: `pop2`, file: `Pop-up`, kb: 1, cpu: 30, hidden: 1 },
    { id: `pop3`, file: `Pop-up`, kb: 1, cpu: 30, hidden: 1 },
  ],
  HW: [
    { r: `ram`, s: [{ to: 12, c: 20000 }, { to: 16, c: 800000 }, { to: 24, c: 2e7 }, { to: 32, c: 2.5e8 }, { to: 48, c: 4.5e9 }, { to: 64, c: 6e10 }],
      t: [`RAM {a} -> {b}`, `RAM {a} -> {b}`], d: [`DDR. Double Data Rate. Double the price, too.`, `DDR. Double Data Rate. Double prix, aussi.`] },
    { r: `cpu`, s: [{ to: 800, c: 15000 }, { to: 1000, c: 600000 }, { to: 1400, c: 1.6e7 }, { to: 2000, c: 2e8 }, { to: 2400, c: 3e9 }, { to: 3000, c: 5e10 }],
      t: [`Processor {a} -> {b}`, `Processeur {a} -> {b}`], d: [`Gigahertz! The fan is now a small jet engine.`, `Des gigahertz ! Le ventilateur est maintenant un petit réacteur.`] },
    { r: `bw`, s: [{ to: 128, c: 8000 }, { to: 512, c: 400000 }, { to: 1024, c: 1.2e7 }, { to: 2048, c: 1.5e8 }, { to: 8192, c: 2.2e9 }, { to: 20480, c: 4e10 }],
      t: [`Connection {a} -> {b}`, `Connexion {a} -> {b}`], d: [`No more modem screeching. The silence is eerie.`, `Fini les cris du modem. Le silence fait peur.`] },
  ],
  end: { c: 3e11, t: [`Open the heavy parcel`, `Ouvrir le colis lourd`], d: [`Requires every hardware upgrade.`, `Nécessite toutes les améliorations matérielles.`], go: [`Open`, `Ouvrir`] },
  MS: [[`m1m`, 1e6], [`m1b`, 1e9], [`m1t`, 1e12]],
  PA: [
    { id: `trial`, cost: 2.3e9, g: 1.5, t: [`Antivirus trial expired`, `Antivirus : essai expiré`], d: [`All production x1.5. It stopped scanning everything. Everything runs faster. Suspicious.`, `Toute la production x1,5. Il a arrêté de tout scanner. Tout va plus vite. Suspect.`] },
    { id: `regclean`, cost: 1.3e10, g: 1.5, t: [`Registry cleaner`, `Nettoyeur de registre`], d: [`All production x1.5. Downloaded from a pop-up. It worked anyway.`, `Toute la production x1,5. Téléchargé depuis un pop-up. Ça a marché quand même.`] },
    { id: `dualcore`, cost: 2.8e10, g: 1.5, t: [`Dual core`, `Double cœur`], d: [`All production x1.5. Two cores. One works, the other watches.`, `Toute la production x1,5. Deux cœurs. Un qui bosse, l'autre qui regarde.`] },
    { id: `sp2`, cost: 6e10, g: 1.5, t: [`Service Pack 2`, `Service Pack 2`], d: [`All production x1.5. The update took three hours and one restart. Then four.`, `Toute la production x1,5. La mise à jour a pris trois heures et un redémarrage. Puis quatre.`] },
    { id: `c1`, cost: 15000, c: 2, t: [`Optical mouse`, `Souris optique`], d: [`Clicks x2. No more ball to clean.`, `Clics x2. Plus de boule à nettoyer.`] },
    { id: `auto1`, cost: 30000, req: `auto`, m: [`auto`, 2], t: [`AutoClicker XD SP1`, `AutoClicker XD SP1`], d: [`Autoclicks x2.`, `Autoclics x2.`] },
    { id: `tabs`, cost: 180000, req: `browser`, m: [`browser`, 2], t: [`Tabs`, `Onglets`], d: [`Internet Exploder x2. Tabs! (Another browser had them first. Shh.)`, `Internet Exploder x2. Des onglets ! (Un autre navigateur les avait avant. Chut.)`] },
    { id: `nopop1`, cost: 360000, f: `popslow`, t: [`Disable JavaScript (sometimes)`, `Désactiver JavaScript (parfois)`], d: [`Half as many pop-ups.`, `Deux fois moins de pop-ups.`] },
    { id: `c2`, cost: 480000, c: 3, t: [`Gaming mouse`, `Souris gamer`], d: [`Clicks x3. It has LEDs. LEDs make it faster.`, `Clics x3. Elle a des LED. Les LED rendent plus rapide.`] },
    { id: `stray2`, cost: 800000, f: `strayx3`, t: [`Pixel bounty`, `Prime aux pixels`], d: [`Good stray pixels are worth x3.`, `Les bons pixels égarés valent x3.`] },
    { id: `llama`, cost: 1.2e6, req: `media`, m: [`media`, 2], t: [`It really whips the llama`, `Ça fouette vraiment le lama`], d: [`Pixamp x2.`, `Pixamp x2.`] },
    { id: `auto2`, cost: 2e6, req: `auto`, m: [`auto`, 3], t: [`AutoClicker XD SP2`, `AutoClicker XD SP2`], d: [`Autoclicks x3.`, `Autoclics x3.`] },
    { id: `sp2`, cost: 3.2e6, f: `bsodsafe`, t: [`Service Pack 2`, `Service Pack 2`], d: [`No more blue screens. Includes a firewall that asks a lot of questions.`, `Plus d'écran bleu. Inclut un pare-feu qui pose beaucoup de questions.`] },
    { id: `offline`, cost: 4e6, req: `clock`, f: `offline`, t: [`Hibernate`, `Mise en veille prolongée`], d: [`Offline progress at 100% instead of 50%.`, `Progression hors ligne à 100 % au lieu de 50 %.`] },
    { id: `tabs2`, cost: 8e6, req: `browser`, m: [`browser`, 3], t: [`Broadband browsing`, `Navigation haut débit`], d: [`Internet Exploder x3.`, `Internet Exploder x3.`] },
    { id: `magnet`, cost: 1.2e7, f: `magnet`, t: [`Pixel firewall XD`, `Pare-feu à pixels XD`], d: [`Bad stray pixels can't steal anymore.`, `Les mauvais pixels égarés ne volent plus rien.`] },
    { id: `upmedia`, cost: 2e7, req: `media`, u: [`media`, 60], t: [`Pixamp Lite skin`, `Skin Pixamp Lite`], d: [`Pixamp uses 60 MHz instead of 120.`, `Pixamp utilise 60 MHz au lieu de 120.`] },
    { id: `p2p1`, cost: 3.2e7, req: `p2p`, m: [`p2p`, 2], t: [`More sources`, `Plus de sources`], d: [`PixelWire x2. 3,402 sources. 2 are real.`, `PixelWire x2. 3 402 sources. 2 sont vraies.`] },
    { id: `saver1`, cost: 3e7, req: `saver`, f: `saver5`, t: [`Mystify harder`, `Mystify encore plus`], d: [`Screensaver: x5 instead of x3.`, `Économiseur d'écran : x5 au lieu de x3.`] },
    { id: `media2`, cost: 5e7, req: `media`, m: [`media`, 3], t: [`Pixamp 5`, `Pixamp 5`], d: [`Pixamp x3. They skipped version 4. Nobody knows why.`, `Pixamp x3. Ils ont sauté la version 4. Personne ne sait pourquoi.`] },
    { id: `c3`, cost: 1e8, c: 4, t: [`Wireless mouse`, `Souris sans fil`], d: [`Clicks x4. No wire. Battery dies at the worst moment.`, `Clics x4. Sans fil. La pile meurt au pire moment.`] },
    { id: `bwp2p`, cost: 1.5e8, req: `p2p`, z: [`p2p`, 2], t: [`PixelWire Lite`, `PixelWire Lite`], d: [`PixelWire uses 32 MB instead of 64.`, `PixelWire utilise 32 Mo au lieu de 64.`] },
    { id: `craft1`, cost: 2.5e8, req: `craft`, m: [`craft`, 2], t: [`3D accelerator card`, `Carte accélératrice 3D`], d: [`Pixel Craft 3D x2.`, `Pixel Craft 3D x2.`] },
    { id: `macro`, cost: 3.8e8, f: `macro`, t: [`Click macro`, `Macro de clic`], d: [`Each click also gives 5% of your px/s.`, `Chaque clic donne aussi 5 % de tes px/s.`] },
    { id: `ucraft`, cost: 7.5e8, req: `craft`, u: [`craft`, 350], t: [`Lower graphics settings`, `Graphismes au minimum`], d: [`Pixel Craft 3D uses 350 MHz instead of 600.`, `Pixel Craft 3D utilise 350 MHz au lieu de 600.`] },
    { id: `p2p2`, cost: 1.2e9, req: `p2p`, m: [`p2p`, 3], t: [`Supernode`, `Super-nœud`], d: [`PixelWire x3.`, `PixelWire x3.`] },
    { id: `seti1`, cost: 2.2e9, req: `seti`, m: [`seti`, 2], t: [`Found a signal`, `Signal détecté`], d: [`SETI@Pixel x2. It was a microwave oven.`, `SETI@Pixel x2. C'était un micro-ondes.`] },
    { id: `craft2`, cost: 4.5e9, req: `craft`, m: [`craft`, 3], t: [`Pixel Craft 3D: Expansion`, `Pixel Craft 3D : extension`], d: [`Pixel Craft 3D x3.`, `Pixel Craft 3D x3.`] },
    { id: `useti`, cost: 9e9, req: `seti`, u: [`seti`, 200], t: [`Only when idle`, `Seulement au repos`], d: [`SETI@Pixel uses 200 MHz instead of 400.`, `SETI@Pixel utilise 200 MHz au lieu de 400.`] },
    { id: `seti2`, cost: 1.5e10, req: `seti`, m: [`seti`, 3], t: [`Found aliens`, `Extraterrestres trouvés`], d: [`SETI@Pixel x3. They want pixels too.`, `SETI@Pixel x3. Eux aussi veulent des pixels.`] },
    { id: `web1`, cost: 4e10, req: `web`, m: [`web`, 2], t: [`Slashdotted`, `Effet Slashdot`], d: [`Pixel Web Server x2.`, `Pixel Web Server x2.`] },
    { id: `web2`, cost: 8e10, req: `web`, m: [`web`, 3], t: [`Dot-com boom`, `Bulle Internet`], d: [`Pixel Web Server x3. Nothing can go wrong. (It's 2001.)`, `Pixel Web Server x3. Rien ne peut mal tourner. (On est en 2001.)`] },
  ],
  D: {
    score: [`Shows your score. In a rounded window.`, `Affiche ton score. Dans une fenêtre arrondie.`],
    notes: [`Your emails. The developer writes. So does everyone else.`, `Tes mails. Le développeur écrit. Tout le monde aussi.`],
    auto: [`+50 px/s.`, `+50 px/s.`],
    help: [`Makes the Help menu work.`, `Fait marcher le menu Aide.`],
    browser: [`+400 px/s. Surfs for pixels. Uses bandwidth. Brings pop-ups.`, `+400 px/s. Surfe pour trouver des pixels. Utilise la bande passante. Amène des pop-ups.`],
    trophy: [`Shows your achievements.`, `Affiche tes succès.`],
    clock: [`Keeps time. Needed for offline progress. Survived Y2K.`, `Garde l'heure. Nécessaire pour progresser hors ligne. A survécu à l'an 2000.`],
    calc: [`Shows your stats.`, `Affiche tes stats.`],
    msn: [`Friends send you nudges. Nudges are worth pixels. Uses a bit of bandwidth.`, `Tes amis t'envoient des wizz. Les wizz valent des pixels. Utilise un peu de bande passante.`],
    hack: [`Hack PIXCORP from the command line. Rewards pixels and secrets.`, `Pirate PIXCORP en ligne de commande. Rapporte des pixels et des secrets.`],
    av: [`Catches viruses on arrival and pays a bounty. Only while running.`, `Attrape les virus à l'arrivée et paie une prime. Seulement s'il tourne.`],
    popblock: [`Blocks pop-ups while it runs. Costs memory, of course.`, `Bloque les pop-ups tant qu'il tourne. Ça coûte de la mémoire, évidemment.`],
    media: [`+2500 px/s. Plays music. Pixels like music.`, `+2500 px/s. Joue de la musique. Les pixels aiment la musique.`],
    saver: [`Production x3 when you don't move the mouse for 20 s.`, `Production x3 quand tu ne bouges pas la souris pendant 20 s.`],
    p2p: [`+15000 px/s. Shares pixels with strangers. Eats bandwidth.`, `+15000 px/s. Partage des pixels avec des inconnus. Dévore la bande passante.`],
    craft: [`+160000 px/s. A 3D game. Eats the CPU for breakfast.`, `+160000 px/s. Un jeu en 3D. Mange le processeur au petit-déjeuner.`],
    seti: [`+900000 px/s. Searches for alien pixels with your CPU and your connection.`, `+900000 px/s. Cherche des pixels extraterrestres avec ton processeur et ta connexion.`],
    web: [`+7 million px/s. Hosts a pixel website. Needs a huge connection.`, `+7 millions px/s. Héberge un site de pixels. Il lui faut une énorme connexion.`],
  },
  N: {
    start: [`From: the dev\nSubject: we're online!\n\nWinbows XD came on a CD from the future. Everything is connected now. My computer, the internet, my toaster. Mostly the toaster.`, `De : le dev\nObjet : on est en ligne !\n\nWinbows XD est arrivé sur un CD du futur. Tout est connecté, maintenant. Mon ordinateur, Internet, mon grille-pain. Surtout le grille-pain.`],
    score: [`From: Score XD\nSubject: your score\n\nYour score is in a rounded window now. It's 23% friendlier.`, `De : Score XD\nObjet : ton score\n\nTon score est dans une fenêtre arrondie. Il est 23 % plus sympathique.`],
    notes: [`From: the dev\nSubject: emails!\n\nNo more notes.txt. I'll write to you by email now. Like a normal person. Please don't mark me as spam.`, `De : le dev\nObjet : des mails !\n\nFini notes.txt. Je t'écrirai par mail, maintenant. Comme une personne normale. Ne me mets pas en spam, s'il te plaît.`],
    auto: [`From: AutoClicker XD\nSubject: Thank you for your purchase\n\nYou have 30 days to activate your AutoClicker. After that, it will still work. We just wanted to scare you.`, `De : AutoClicker XD\nObjet : Merci pour votre achat\n\nVous avez 30 jours pour activer votre AutoClicker. Après, il marchera quand même. On voulait juste vous faire peur.`],
    help: [`From: Help and Support\nSubject: have you tried\n\nHave you tried turning it off and on again? (Start, then "Turn Off Computer". Yes, still through Start.)`, `De : Aide et support\nObjet : as-tu essayé\n\nAs-tu essayé d'éteindre et de rallumer ? (Démarrer, puis « Arrêter l'ordinateur ». Oui, toujours par Démarrer.)`],
    browser: [`From: the dev\nSubject: the web\n\nThe internet is full of pixels. And pop-ups. Mostly pop-ups. Get a pop-up stopper.`, `De : le dev\nObjet : le web\n\nInternet est plein de pixels. Et de pop-ups. Surtout de pop-ups. Prends un bloqueur de pop-ups.`],
    trophy: [`From: Trophies\nSubject: we're still here\n\nWe survived three operating systems. We're basically cockroaches now.`, `De : Trophées\nObjet : on est toujours là\n\nOn a survécu à trois systèmes d'exploitation. On est des cafards, maintenant.`],
    clock: [`From: Clock\nSubject: Y2K\n\nI survived the year 2000. I thought it was 1900 for a while. I'm fine now. Mostly.`, `De : Horloge\nObjet : An 2000\n\nJ'ai survécu à l'an 2000. J'ai cru qu'on était en 1900 pendant un moment. Ça va, maintenant. En gros.`],
    calc: [`From: Calculator\nSubject: math\n\n1 pixel + 1 pixel = a business plan.`, `De : Calculatrice\nObjet : maths\n\n1 pixel + 1 pixel = un business plan.`],
    msn: [`From: PSN Messenger\nSubject: Welcome!\n\nYour friends can now send you nudges. You have 0 friends. Here are some: xX_PixelLord_Xx, Mom, and Bip (Away).`, `De : PSN Messenger\nObjet : Bienvenue !\n\nTes amis peuvent t'envoyer des wizz. Tu as 0 ami. En voici : xX_PixelLord_Xx, Maman et Bip (Absent).`],
    hack: [`From: the dev\nSubject: command prompt\n\nC:\\> hack pixcorp\n'hack' is not recognized as an internal or external command. Let's do it the old way.`, `De : le dev\nObjet : invite de commandes\n\nC:\\> hack pixcorp\n« hack » n'est pas reconnu en tant que commande interne ou externe. Faisons-le à l'ancienne.`],
    av: [`From: Pixel Defender\nSubject: YOUR SUBSCRIPTION EXPIRES IN 364 DAYS\n\nRenew now! Or in 364 days. Renew now!`, `De : Pixel Defender\nObjet : VOTRE ABONNEMENT EXPIRE DANS 364 JOURS\n\nRenouvelez maintenant ! Ou dans 364 jours. Renouvelez maintenant !`],
    popblock: [`From: Pop-up Stopper\nSubject: (no subject)\n\nI blocked 0 pop-ups, because you just installed me. Watch me work.`, `De : Pop-up Stopper\nObjet : (sans objet)\n\nJ'ai bloqué 0 pop-up, parce que tu viens de m'installer. Regarde-moi travailler.`],
    media: [`From: Pixamp\nSubject: it really whips\n\nIt really whips the llama's pixels. We don't know what that means either.`, `De : Pixamp\nObjet : ça fouette\n\nÇa fouette vraiment les pixels du lama. On ne sait pas non plus ce que ça veut dire.`],
    saver: [`From: Mystify\nSubject: ~~~\n\nLines. Moving. Colors. Mystified yet?`, `De : Mystify\nObjet : ~~~\n\nDes lignes. Qui bougent. Des couleurs. Mystifié ?`],
    p2p: [`From: the dev\nSubject: PixelWire\n\nI downloaded "pixel_final_REAL_v2.exe". It was a video of a cat. I'm keeping it.`, `De : le dev\nObjet : PixelWire\n\nJ'ai téléchargé « pixel_final_VRAI_v2.exe ». C'était une vidéo de chat. Je la garde.`],
    craft: [`From: the dev\nSubject: I lost 6 hours\n\nPixel Craft 3D is too good. I placed one block. It was a pixel. I'm home.`, `De : le dev\nObjet : j'ai perdu 6 heures\n\nPixel Craft 3D est trop bien. J'ai posé un bloc. C'était un pixel. Je suis chez moi.`],
    seti: [`From: SETI@Pixel\nSubject: no aliens found\n\nYour computer analyzed 4,000 signals. All of them were your microwave.`, `De : SETI@Pixel\nObjet : aucun extraterrestre\n\nTon ordinateur a analysé 4 000 signaux. C'étaient tous ton micro-ondes.`],
    web: [`From: PIXCORP\nSubject: your website\n\nWe saw your pixel website. 9 million visitors. The page is one pixel. We'd like to invest.`, `De : PIXCORP\nObjet : ton site\n\nNous avons vu ton site de pixels. 9 millions de visiteurs. La page fait un pixel. Nous voudrions investir.`],
    oom: [`From: Winbows XD\nSubject: low memory\n\nYour computer is low on memory. To free memory, close programs. Or buy more. We'd prefer you buy more.`, `De : Winbows XD\nObjet : mémoire faible\n\nVotre ordinateur manque de mémoire. Fermez des programmes. Ou achetez-en. On préfère que vous achetiez.`],
    shopClosed: [`From: the dev\nSubject: you closed the store\n\nIt's on the desktop. Everything ends up on the desktop. My desktop has 400 icons.`, `De : le dev\nObjet : tu as fermé la boutique\n\nElle est sur le bureau. Tout finit sur le bureau. Mon bureau a 400 icônes.`],
    blind: [`From: Score XD\nSubject: we miss you\n\nYou closed me. You'll come back. They always come back.`, `De : Score XD\nObjet : tu nous manques\n\nTu m'as fermé. Tu reviendras. Ils reviennent toujours.`],
    stray: [`From: the dev\nSubject: stray pixels\n\nThey're back. Green good, red bad. Some things never change.`, `De : le dev\nObjet : pixels égarés\n\nIls sont revenus. Vert bien, rouge mal. Certaines choses ne changent jamais.`],
    virus: [`From: a friend\nSubject: ILOVEYOU\n\nKindly check the attached LOVELETTER coming from me. (Do not open emails like this one.)`, `De : un ami\nObjet : ILOVEYOU\n\nMerci de lire la LETTRE D'AMOUR ci-jointe. (N'ouvre jamais ce genre de mail.)`],
    pop: [`From: the dev\nSubject: pop-ups\n\nPop-ups take memory and CPU. Close them. Never click inside them. NEVER.`, `De : le dev\nObjet : les pop-ups\n\nLes pop-ups prennent de la mémoire et du CPU. Ferme-les. Ne clique jamais dedans. JAMAIS.`],
    lag: [`From: Winbows XD\nSubject: your computer is slow\n\nToo many programs for your processor. Everything slows down. Have you considered buying a new computer? Every year?`, `De : Winbows XD\nObjet : votre ordinateur est lent\n\nTrop de programmes pour votre processeur. Tout ralentit. Avez-vous pensé à racheter un ordinateur ? Tous les ans ?`],
    bsod: [`From: the dev\nSubject: blue screen\n\nI thought XD didn't do blue screens anymore. It does. It's just a nicer blue.`, `De : le dev\nObjet : écran bleu\n\nJe croyais que XD ne faisait plus d'écran bleu. Si. C'est juste un plus joli bleu.`],
    r12: [`From: the shop\nSubject: your order\n\n192 MB of DDR. Free shipping. Free sticker.`, `De : la boutique\nObjet : ta commande\n\n192 Mo de DDR. Livraison gratuite. Autocollant gratuit.`],
    r16: [`From: the dev\nSubject: 256 MB\n\nA quarter of a gigabyte. I keep saying "gigabyte" for no reason. Gigabyte.`, `De : le dev\nObjet : 256 Mo\n\nUn quart de gigaoctet. Je dis « gigaoctet » sans raison. Gigaoctet.`],
    r24: [`From: the dev\nSubject: 384 MB\n\nI can open the browser AND the mailbox. At the same time. Living in the future.`, `De : le dev\nObjet : 384 Mo\n\nJe peux ouvrir le navigateur ET la boîte mail. En même temps. Je vis dans le futur.`],
    r32: [`From: the dev\nSubject: 512 MB\n\nHalf a gig. My first computer had 3 KB. I'm getting old.`, `De : le dev\nObjet : 512 Mo\n\nUn demi-giga. Mon premier ordinateur avait 3 Ko. Je vieillis.`],
    r48: [`From: the dev\nSubject: 768 MB\n\nThat's 262,144 times more than the terminal. I did the math with Calculator.`, `De : le dev\nObjet : 768 Mo\n\nÇa fait 262 144 fois plus que le terminal. J'ai fait le calcul avec la Calculatrice.`],
    r64: [`From: the dev\nSubject: 1 GB\n\nOne gigabyte. Someone will say it's not enough. Someone always does.`, `De : le dev\nObjet : 1 Go\n\nUn gigaoctet. Quelqu'un dira que ce n'est pas assez. Quelqu'un le dit toujours.`],
    cpu800: [`From: the shop\nSubject: 800 MHz\n\nYour new processor has a fan the size of a pizza.`, `De : la boutique\nObjet : 800 MHz\n\nTon nouveau processeur a un ventilateur grand comme une pizza.`],
    cpu1000: [`From: the dev\nSubject: 1 GHZ!!!\n\nOne gigahertz. A billion things per second. I do one thing per day. Respect.`, `De : le dev\nObjet : 1 GHZ !!!\n\nUn gigahertz. Un milliard de choses par seconde. Moi, j'en fais une par jour. Respect.`],
    cpu1400: [`From: the dev\nSubject: 1.4 GHz\n\nThe office is warm. I fry eggs on the case.`, `De : le dev\nObjet : 1,4 GHz\n\nLe bureau est chaud. Je fais cuire des œufs sur le boîtier.`],
    cpu2000: [`From: the dev\nSubject: 2 GHz\n\nThe lights dim when I start Pixel Craft 3D.`, `De : le dev\nObjet : 2 GHz\n\nLes lumières baissent quand je lance Pixel Craft 3D.`],
    cpu2400: [`From: the neighbors\nSubject: the noise\n\nCould you turn down your computer?`, `De : les voisins\nObjet : le bruit\n\nVous pourriez baisser votre ordinateur ?`],
    cpu3000: [`From: the dev\nSubject: 3 GHz\n\nThey say processors won't get much faster. They'll just add more of them. Weird idea.`, `De : le dev\nObjet : 3 GHz\n\nIls disent que les processeurs n'iront plus beaucoup plus vite. Ils vont juste en mettre plusieurs. Drôle d'idée.`],
    bw128: [`From: your ISP\nSubject: ISDN\n\n128 kb/s. Two phone lines in one. Mom can call AND you can download.`, `De : ton FAI\nObjet : Numéris\n\n128 kb/s. Deux lignes en une. Maman peut téléphoner ET tu peux télécharger.`],
    bw512: [`From: your ISP\nSubject: broadband!\n\n512 kb/s. Always on. No more screeching. I miss it a little.`, `De : ton FAI\nObjet : le haut débit !\n\n512 kb/s. Toujours connecté. Fini les cris du modem. Ça me manque un peu.`],
    bw1024: [`From: your ISP\nSubject: 1 Mb/s\n\nA song downloads in one minute. The music industry is concerned.`, `De : ton FAI\nObjet : 1 Mb/s\n\nUne chanson se télécharge en une minute. L'industrie musicale est inquiète.`],
    bw2048: [`From: your ISP\nSubject: 2 Mb/s\n\nWe added a box. It blinks. Nobody knows what the lights mean.`, `De : ton FAI\nObjet : 2 Mb/s\n\nOn a ajouté une box. Elle clignote. Personne ne sait ce que veulent dire les lumières.`],
    bw8192: [`From: your ISP\nSubject: 8 Mb/s\n\nYou can now watch videos online. Small ones. Of cats.`, `De : ton FAI\nObjet : 8 Mb/s\n\nTu peux regarder des vidéos en ligne. Des petites. De chats.`],
    bw20480: [`From: your ISP\nSubject: 20 Mb/s\n\nThe fastest connection on the street. The neighbors use your Wi-Fi. Password: "password".`, `De : ton FAI\nObjet : 20 Mb/s\n\nLa connexion la plus rapide de la rue. Les voisins utilisent ton Wi-Fi. Mot de passe : « motdepasse ».`],
    m1m: [`From: Mom\nSubject: Fw: Fw: Fw: Fw: pixel\n\nForward this pixel to 10 friends or it will disappear. Love, Mom.`, `De : Maman\nObjet : Tr : Tr : Tr : Tr : pixel\n\nTransfère ce pixel à 10 amis, sinon il disparaîtra. Bisous, Maman.`],
    m1b: [`From: Prince Pixel of Nigeria\nSubject: URGENT BUSINESS\n\nI have 10 billion pixels blocked in a bank. Send me 1,000 and they are yours. (Don't.)`, `De : Prince Pixel du Nigeria\nObjet : AFFAIRE URGENTE\n\nJ'ai 10 milliards de pixels bloqués dans une banque. Envoie-m'en 1 000 et ils sont à toi. (Ne fais pas ça.)`],
    m1t: [`From: unknown\nSubject: package\n\nA parcel is coming. It's heavy. It's a brick. Don't laugh. The brick is the future.`, `De : inconnu\nObjet : colis\n\nUn colis arrive. Il est lourd. C'est une brique. Ne rigole pas. La brique, c'est l'avenir.`],
  },
  HELP: [
    [`Online programs share your connection (NET). If they ask for more than you have, they slow down.`, `Les programmes en ligne partagent ta connexion (NET). S'ils en demandent plus que tu n'en as, ils ralentissent.`],
    [`Pop-ups take memory and CPU. Close them with X. Never click CLAIM. Pop-up Stopper blocks them while it runs.`, `Les pop-ups prennent de la mémoire et du CPU. Ferme-les avec X. Ne clique jamais sur RÉCLAMER. Pop-up Stopper les bloque tant qu'il tourne.`],
    [`PSN Messenger: friends send nudges worth pixels.`, `PSN Messenger : tes amis envoient des wizz qui valent des pixels.`],
    [`The CPU still matters: overload slows everything, and a long one still crashes. Service Pack 2 fixes that.`, `Le CPU compte toujours : la surcharge ralentit tout, et si elle dure, ça plante. Le Service Pack 2 règle ça.`],
  ],
  LOGS: [
    [`PIXCORP BOARD MEETING: "Can we sell the pixel on the internet?" "It's already on the internet." "Can we sell it again?"`, `RÉUNION PIXCORP : « On peut vendre le pixel sur Internet ? » « Il est déjà sur Internet. » « On peut le revendre ? »`],
    [`THE DEV'S BLOG, entry 1: "Day 6000. I started a blog. Nobody reads it. Perfect, I can say anything. The game is not finished."`, `BLOG DU DEV, billet 1 : « Jour 6000. J'ai ouvert un blog. Personne ne le lit. Parfait, je peux tout dire. Le jeu n'est pas fini. »`],
    [`MINOSOFT LEGAL: "We'd like to remind you that Winbows XD is a registered trademark. Also, where did you get it? It's not out yet."`, `JURIDIQUE MINOSOFT : « Nous rappelons que Winbows XD est une marque déposée. Et où l'avez-vous eu ? Il n'est pas encore sorti. »`],
    [`THE DEV'S BLOG, entry 2: "Someone asked when the game will be finished. I said 'when it's done'. They asked when that is. I closed the blog."`, `BLOG DU DEV, billet 2 : « Quelqu'un m'a demandé quand le jeu serait fini. J'ai dit "quand il sera prêt". On m'a demandé quand. J'ai fermé le blog. »`],
    [`ORDER CONFIRMATION: "1x iBrick. Delivery: soon. Size: brick. Battery: yes."`, `CONFIRMATION DE COMMANDE : « 1x iBrick. Livraison : bientôt. Taille : brique. Batterie : oui. »`],
  ],
  // ----- era mechanics -----
  enter() { dlg(T(X4.y2k), { title: `Y2K` }); },
  tick(dt) {
    const x = S.x, over = use(`cpu`) / cap(`cpu`);
    document.body.classList.toggle(`lag`, over > 1);
    if (over > 1 && !S.once.lag4) { S.once.lag4 = 1; note(N(`lag`)); }
    x.over = over > 1.4 && !flag(`bsodsafe`) ? (x.over || 0) + dt : 0;
    if (x.over > 30) { x.over = 0; ERA[3].bsod(); }
    if (S.run.browser && !S.run.popblock) {
      x.popT = (x.popT || rnd(30, 60)) - dt * (flag(`popslow`) ? 0.5 : 1);
      if (x.popT <= 0) { x.popT = rnd(40, 90); ERA[4].pop(); }
    }
    if (S.run.msn) {
      x.nudT = (x.nudT || rnd(40, 80)) - dt;
      if (x.nudT <= 0) {
        x.nudT = rnd(45, 90);
        const n = Math.max(100, basePerSec() * 15), c = T(X4.contacts[Math.random() * X4.contacts.length | 0]);
        gain(n); S.st.nudge = (S.st.nudge || 0) + 1;
        toast(fill(T(X4.nudge), { c, n: fmt(n) }));
        const w = W.msn && W.msn.el; if (w && S.opt.anim) { w.classList.remove(`shake`); void w.offsetWidth; w.classList.add(`shake`); }
      }
    }
    if (S.total > 5000) {
      x.virT = (x.virT || rnd(200, 360)) - dt;
      if (x.virT <= 0 && !S.run.virus) { x.virT = rnd(240, 420); ERA[2].virus(); }
    }
    if (S.run.virus) S.px -= S.px * 0.01 * dt;
  },
  simTick() { if (S.run.virus) { S.run.virus = 0; killWin(`virus`); } for (const id of POPS) if (S.run[id]) { S.run[id] = 0; killWin(id); } dq.length = 0; S.x.over = 0; },
  pop() {
    const id = POPS.find(i => !S.run[i]);
    if (!id || free() < 1) return;
    S.x[id] = Math.random() * X4.pops.length | 0;
    S.run[id] = 1; S.st.pops = (S.st.pops || 0) + 1;
    S.pos[id] = [rnd(120, innerWidth - 360), rnd(60, innerHeight - 260)];
    makeWin(id);
    if (!S.once.pop4) { S.once.pop4 = 1; note(N(`pop`)); }
  },
  closing(id) { return id === `virus` ? ERA[2].closing(id) : true; },
  winClass: id => (POPS.includes(id) ? `popw` : ``),
  A: {
    claim(id) {
      S.st.claim = (S.st.claim || 0) + 1;
      toast(T(X4.claimed));
      ERA[4].pop(); ERA[4].pop();
    },
  },
  BODY: Object.assign({
    virus: () => ERA[2].BODY.virus(),
    msn: () => `<div class="dim">${T(E().D.msn)}</div>${X4.contacts.map((c, i) => `<div class="row"><span>${i < 2 ? `(o)` : `( )`} ${T(c)}</span></div>`).join(``)}`,
    popblock: () => `<div class="dim">${T(E().D.popblock)}</div><div class="h">${fmt(S.st.pops || 0)} pop-ups</div>`,
  }, ...POPS.map(id => ({ [id]: () => { const p = X4.pops[S.x[id] || 0]; return `<div class="poph">${L() ? p[2] : p[0]}</div><p>${L() ? p[3] : p[1]}</p><button class="btn claim" data-act="claim:${id}">${T(X4.claim)}</button>`; } }))),
};

ACH.push(
  [`xd`, [`Online`, `En ligne`], [`Boot Winbows XD.`, `Démarrer Winbows XD.`], () => S.era >= 4, 4],
  [`pop10`, [`Pop-up survivor`, `Survivant des pop-ups`], [`Get 10 pop-ups.`, `Subir 10 pop-ups.`], () => (S.st.pops || 0) >= 10, 4],
  [`claim`, [`Never click inside`, `Ne jamais cliquer dedans`], [`Click CLAIM in a pop-up.`, `Cliquer sur RÉCLAMER dans un pop-up.`], () => (S.st.claim || 0) >= 1, 4],
  [`nudge20`, [`Popular`, `Populaire`], [`Receive 20 nudges.`, `Recevoir 20 wizz.`], () => (S.st.nudge || 0) >= 20, 4],
  [`seti`, [`We are not alone`, `Nous ne sommes pas seuls`], [`Install SETI@Pixel.`, `Installer SETI@Pixel.`], () => S.era > 4 || (S.era === 4 && S.bought.seti), 4],
  [`bb`, [`Broadband`, `Haut débit`], [`Get the 20 Mb/s connection.`, `Avoir la connexion à 20 Mb/s.`], () => S.era > 4 || (S.era === 4 && cap(`bw`) >= 20480), 4],
  [`gig`, [`Gigabyte`, `Gigaoctet`], [`Reach 1 GB of memory.`, `Atteindre 1 Go de mémoire.`], () => S.era > 4 || (S.era === 4 && cap(`ram`) >= 64), 4],
);
