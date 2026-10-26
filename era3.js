// Era 3: Winbows 95. New constraint: the CPU. Overload slows everything, then the screen turns blue. Bip the assistant helps. Sort of.
const X3 = {
  bip: [
    [`It looks like you're trying to click a pixel. Would you like help with that?`, `On dirait que tu essaies de cliquer sur un pixel. Veux-tu de l'aide ?`],
    [`Tip: close programs to free memory. Or don't. I'm not your mom.`, `Astuce : ferme des programmes pour libérer de la mémoire. Ou pas. Je ne suis pas ta mère.`],
    [`Did you know? To shut down the computer, you click Start. Don't ask me why.`, `Le savais-tu ? Pour éteindre l'ordinateur, on clique sur Démarrer. Ne me demande pas pourquoi.`],
    [`Tip: when the CPU gauge turns black, everything slows down. Like me on Mondays.`, `Astuce : quand la jauge CPU devient noire, tout ralentit. Comme moi le lundi.`],
    [`Tip: you can't uninstall me. I'm part of the operating system. Like the dust.`, `Astuce : tu ne peux pas me désinstaller. Je fais partie du système. Comme la poussière.`],
    [`It looks like you're writing a letter. You're not? Okay. Sorry. Okay.`, `On dirait que tu écris une lettre. Non ? D'accord. Pardon. D'accord.`],
    [`Bip fact: the hourglass means the computer is thinking. Mostly about you.`, `Le saviez-Bip : le sablier veut dire que l'ordinateur réfléchit. Surtout à toi.`],
    [`Tip: a blue screen is not a screensaver. I checked.`, `Astuce : un écran bleu n'est pas un économiseur d'écran. J'ai vérifié.`],
    [`Tip: Defragmenter uses a LOT of CPU. Watching it is free, though.`, `Astuce : le Défragmenteur utilise BEAUCOUP de CPU. Le regarder est gratuit, par contre.`],
    [`I've been told I'm annoying. By everyone. Would you like help with that?`, `On m'a dit que j'étais agaçant. Tout le monde. Veux-tu de l'aide avec ça ?`],
  ],
  thanks: [`Thanks, Bip`, `Merci, Bip`],
  thanked: [`Bip is delighted. +{n} px.`, `Bip est ravi. +{n} px.`],
  bipClose: [`It looks like you're trying to close me. Would you like help with that? (click again)`, `On dirait que tu essaies de me fermer. Veux-tu de l'aide ? (clique encore)`],
  bipBack: [`Bip is back! Did you miss me? (Bip comes back by himself. That's a feature.)`, `Bip est de retour ! Je t'ai manqué ? (Bip revient tout seul. C'est une fonctionnalité.)`],
  bsod: [`Winbows\n\nA fatal exception 0E has occurred at 0028:C0011E36 in VXD PIXEL(01) + 00010E36.\nThe CPU was asked to do too many things at once. It panicked.\n\n*  Click anywhere to terminate every running program.\n*  Press CTRL+ALT+DEL to cry. You will lose your dignity.\n\nPress any key to continue _`, `Winbows\n\nUne exception fatale 0E s'est produite à 0028:C0011E36 dans VXD PIXEL(01) + 00010E36.\nOn a demandé au processeur de faire trop de choses à la fois. Il a paniqué.\n\n*  Clique n'importe où pour terminer tous les programmes lancés.\n*  Appuie sur CTRL+ALT+SUPPR pour pleurer. Tu perdras ta dignité.\n\nAppuie sur une touche pour continuer _`],
  lagWarn: [`CPU overloaded: everything slows down. If it lasts, Winbows will panic.`, `Processeur surchargé : tout ralentit. Si ça dure, Winbows va paniquer.`],
  safe: [`It's now safe to turn off your computer.\n\n(Click to turn it back on. It was a joke. Mostly.)`, `Vous pouvez maintenant éteindre votre ordinateur en toute sécurité.\n\n(Clique pour le rallumer. C'était une blague. En gros.)`],
  shut: [`Shut Down...`, `Arrêter...`],
};
ERA[3] = {
  os: `Winbows 95`, skin: 3, year: 1995, unit: [`MB`, `Mo`], mul: 1, start: { ram: 8, cpu: 66 }, frag: 16, color: true,
  startMenu: [`Start`, `Démarrer`], rn: { cpu: [`CPU`, `CPU`] }, ru: { cpu: [`MHz`, `MHz`] },
  bootT: [`Starting Winbows 95... (This may take a while. Have a coffee.)`, `Démarrage de Winbows 95... (Ça peut prendre un moment. Prends un café.)`],
  about: [`Winbows 95\n(c) 1995 IDM, then Minosoft, depending on who you ask.\nTo shut down, click Start.\n\nA game by zuralon.`, `Winbows 95\n(c) 1995 IDM, puis Minosoft, selon à qui on demande.\nPour éteindre, cliquez sur Démarrer.\n\nUn jeu de zuralon.`],
  VIR: [`CIH.EXE`, `MELISSA.DOC`, `HAPPY99.EXE`, `CONCEPT.DOC`, `MONKEY.EXE`, `SKA.EXE`],
  simKeep: [],
  pos: { bip: [120, -330] },
  P: [
    { id: `game`, file: `Pixel.exe`, kb: 2, cpu: 8, fixed: 1 },
    { id: `install`, file: `Add/Remove Programs`, kb: 1, cpu: 4 },
    { id: `bip`, file: `Bip`, kb: 1, cpu: 6, hidden: 1 },
    { id: `score`, file: `Score.exe`, kb: 1, cpu: 2, cost: 30 },
    { id: `notes`, file: `Notepad - notes.txt`, kb: 1, cpu: 2, cost: 50 },
    { id: `auto`, file: `AutoClicker 95`, kb: 1, cpu: 6, cost: 120, multi: 1, k: 1.3, prod: 20 },
    { id: `help`, file: `Help Topics`, kb: 1, cpu: 2, cost: 200 },
    { id: `trophy`, file: `Trophies`, kb: 1, cpu: 2, cost: 500 },
    { id: `clock`, file: `Clock`, kb: 1, cpu: 1, cost: 800 },
    { id: `calc`, file: `Calculator`, kb: 1, cpu: 2, cost: 1200 },
    { id: `macro`, file: `Macro Recorder`, kb: 2, cpu: 14, cost: 2000, multi: 1, k: 1.3, prod: 160 },
    { id: `hack`, file: `HyperTerminal`, kb: 2, cpu: 6, cost: 4000 },
    { id: `av`, file: `Norton PixVirus`, kb: 3, cpu: 18, cost: 8000 },
    { id: `defrag`, file: `Disk Defragmenter`, kb: 2, cpu: 30, cost: 15000 },
    { id: `media`, file: `Media Player`, kb: 4, cpu: 40, cost: 60000, multi: 1, k: 1.3, prod: 1500 },
    { id: `saver`, file: `3D Pipes`, kb: 2, cpu: 25, cost: 50000 },
    { id: `render`, file: `3D Pixel Studio`, kb: 8, cpu: 70, cost: 1.5e6, multi: 1, k: 1.3, prod: 14000 },
    { id: `stream`, file: `PixelCast`, kb: 4, cpu: 120, cost: 6e6, multi: 1, k: 1.3, prod: 45000 },
    { id: `doom`, file: `PIXEL DOOM`, kb: 16, cpu: 100, cost: 2e7, multi: 1, k: 1.3, prod: 180000 },
    { id: `server`, file: `Pixel Server 95`, kb: 24, cpu: 60, cost: 2e8, multi: 1, k: 1.3, prod: 9e5 },
    { id: `virus`, get file() { return (S && S.x.vname) || `VIRUS.EXE`; }, kb: 2, cpu: 20, hidden: 1 },
  ],
  HW: [
    { r: `ram`, s: [{ to: 12, c: 6000 }, { to: 16, c: 150000 }, { to: 24, c: 3e6 }, { to: 32, c: 2e7 }, { to: 48, c: 4e8 }, { to: 64, c: 5e9 }],
      t: [`RAM {a} -> {b}`, `RAM {a} -> {b}`], d: [`EDO RAM. Nobody knows what EDO means. It's faster.`, `De la RAM EDO. Personne ne sait ce que veut dire EDO. C'est plus rapide.`] },
    { r: `cpu`, s: [{ to: 75, c: 5000 }, { to: 100, c: 120000 }, { to: 133, c: 2e6 }, { to: 166, c: 1.5e7 }, { to: 200, c: 3e8 }, { to: 233, c: 4e9 }],
      t: [`Processor {a} -> {b}`, `Processeur {a} -> {b}`], d: [`More programs at full speed. Comes with a sticker for the case.`, `Plus de programmes à pleine vitesse. Livré avec un autocollant pour le boîtier.`] },
  ],
  end: { c: 4e10, t: [`Insert the CD from the future`, `Insérer le CD du futur`], d: [`Requires every hardware upgrade.`, `Nécessite toutes les améliorations matérielles.`] },
  MS: [[`m1m`, 1e6], [`m1b`, 1e9]],
  PA: [
    { id: `dbl`, cost: 6000, c: 2, t: [`Double-click`, `Double-clic`], d: [`Clicks x2. Double-click is now a feature.`, `Clics x2. Le double-clic est maintenant une fonctionnalité.`] },
    { id: `auto1`, cost: 10000, req: `auto`, m: [`auto`, 2], t: [`AutoClicker 95 Plus!`, `AutoClicker 95 Plus!`], d: [`Autoclicks x2.`, `Autoclics x2.`] },
    { id: `macro1`, cost: 30000, req: `macro`, m: [`macro`, 2], t: [`Record longer macros`, `Macros plus longues`], d: [`Macro Recorder x2.`, `Macro Recorder x2.`] },
    { id: `wheel`, cost: 80000, c: 3, t: [`Mouse wheel`, `Molette`], d: [`Clicks x3. The wheel does nothing, but the mouse is faster.`, `Clics x3. La molette ne sert à rien, mais la souris est plus rapide.`] },
    { id: `mmx`, cost: 150000, req: `media`, u: [`media`, 20], t: [`MMX instructions`, `Instructions MMX`], d: [`Media Player uses 20 MHz instead of 40.`, `Media Player utilise 20 MHz au lieu de 40.`] },
    { id: `stray2`, cost: 200000, f: `strayx3`, t: [`Pixel bounty`, `Prime aux pixels`], d: [`Good stray pixels are worth x3.`, `Les bons pixels égarés valent x3.`] },
    { id: `media1`, cost: 300000, req: `media`, m: [`media`, 2], t: [`Media Player codecs`, `Codecs pour Media Player`], d: [`Media Player x2.`, `Media Player x2.`] },
    { id: `auto2`, cost: 400000, req: `auto`, m: [`auto`, 3], t: [`AutoClicker 95 OSR2`, `AutoClicker 95 OSR2`], d: [`Autoclicks x3.`, `Autoclics x3.`] },
    { id: `sp1`, cost: 500000, f: `bsodsafe`, t: [`Service Pack 1`, `Service Pack 1`], d: [`Overloads can no longer cause a blue screen. They still slow things down.`, `Les surcharges ne provoquent plus d'écran bleu. Elles ralentissent toujours.`] },
    { id: `zmacro`, cost: 600000, req: `macro`, z: [`macro`, 1], t: [`WinZip Macro Recorder`, `WinZip Macro Recorder`], d: [`Macro Recorder uses 1 MB instead of 2.`, `Macro Recorder utilise 1 Mo au lieu de 2.`] },
    { id: `offline`, cost: 700000, req: `clock`, f: `offline`, t: [`Advanced Power Management`, `Gestion avancée de l'énergie`], d: [`Offline progress at 100% instead of 50%.`, `Progression hors ligne à 100 % au lieu de 50 %.`] },
    { id: `macro2`, cost: 1500000, req: `macro`, m: [`macro`, 3], t: [`Macro of macros`, `Macro de macros`], d: [`Macro Recorder x3.`, `Macro Recorder x3.`] },
    { id: `magnet`, cost: 2000000, f: `magnet`, t: [`Pixel firewall 95`, `Pare-feu à pixels 95`], d: [`Bad stray pixels can't steal anymore.`, `Les mauvais pixels égarés ne volent plus rien.`] },
    { id: `dx`, cost: 3000000, req: `render`, u: [`render`, 40], t: [`DirectX 3`, `DirectX 3`], d: [`3D Pixel Studio uses 40 MHz instead of 70.`, `3D Pixel Studio utilise 40 MHz au lieu de 70.`] },
    { id: `bipq`, cost: 4000000, f: `bipquiet`, t: [`Bip, quiet mode`, `Bip, mode silencieux`], d: [`Bip stops coming back on his own. He's hurt.`, `Bip arrête de revenir tout seul. Il est vexé.`] },
    { id: `defrag1`, cost: 5000000, req: `defrag`, f: `defrag`, t: [`Tidy memory`, `Mémoire rangée`], d: [`Memory fragments twice as slowly.`, `La mémoire se fragmente deux fois moins vite.`] },
    { id: `render1`, cost: 6000000, req: `render`, m: [`render`, 2], t: [`Phong shading`, `Ombrage de Phong`], d: [`3D Pixel Studio x2.`, `3D Pixel Studio x2.`] },
    { id: `saver1`, cost: 8000000, req: `saver`, f: `saver5`, t: [`More pipes`, `Plus de tuyaux`], d: [`Screensaver: x5 instead of x3.`, `Économiseur d'écran : x5 au lieu de x3.`] },
    { id: `media2`, cost: 12000000, req: `media`, m: [`media`, 3], t: [`Media Player 6.4`, `Media Player 6.4`], d: [`Media Player x3.`, `Media Player x3.`] },
    { id: `right`, cost: 20000000, c: 4, t: [`Right-click`, `Clic droit`], d: [`Clicks x4. The right button finally does something.`, `Clics x4. Le bouton droit sert enfin à quelque chose.`] },
    { id: `stream1`, cost: 1.5e7, req: `stream`, m: [`stream`, 2], t: [`RealPixel buffering`, `Mise en mémoire RealPixel`], d: [`PixelCast x2. Buffering... buffering...`, `PixelCast x2. Mise en mémoire tampon... tampon...`] },
    { id: `ustream`, cost: 3e7, req: `stream`, u: [`stream`, 70], t: [`PixelCast Lite`, `PixelCast Lite`], d: [`PixelCast uses 70 MHz instead of 120.`, `PixelCast utilise 70 MHz au lieu de 120.`] },
    { id: `render2`, cost: 6e7, req: `render`, m: [`render`, 3], t: [`Ray tracing (slow)`, `Lancer de rayons (lent)`], d: [`3D Pixel Studio x3.`, `3D Pixel Studio x3.`] },
    { id: `macroP`, cost: 9e7, f: `macro`, t: [`Click macro`, `Macro de clic`], d: [`Each click also gives 5% of your px/s.`, `Chaque clic donne aussi 5 % de tes px/s.`] },
    { id: `gl`, cost: 1.5e8, req: `doom`, u: [`doom`, 60], t: [`OpenGL`, `OpenGL`], d: [`PIXEL DOOM uses 60 MHz instead of 100.`, `PIXEL DOOM utilise 60 MHz au lieu de 100.`] },
    { id: `doom1`, cost: 3e8, req: `doom`, m: [`doom`, 2], t: [`IDDQD`, `IDDQD`], d: [`PIXEL DOOM x2. God mode.`, `PIXEL DOOM x2. Mode dieu.`] },
    { id: `stream2`, cost: 6e8, req: `stream`, m: [`stream`, 3], t: [`PixelCast Gold`, `PixelCast Gold`], d: [`PixelCast x3.`, `PixelCast x3.`] },
    { id: `zdoom`, cost: 1e9, req: `doom`, z: [`doom`, 10], t: [`PIXEL DOOM shareware`, `PIXEL DOOM shareware`], d: [`PIXEL DOOM uses 10 MB instead of 16. Only episode 1.`, `PIXEL DOOM utilise 10 Mo au lieu de 16. Seulement l'épisode 1.`] },
    { id: `doom2`, cost: 2e9, req: `doom`, m: [`doom`, 3], t: [`IDKFA`, `IDKFA`], d: [`PIXEL DOOM x3. All the keys.`, `PIXEL DOOM x3. Toutes les clés.`] },
    { id: `server1`, cost: 3000000000, req: `server`, m: [`server`, 2], t: [`Second network card`, `Deuxième carte réseau`], d: [`Pixel Server 95 x2.`, `Pixel Server 95 x2.`] },
    { id: `zserver`, cost: 6000000000, req: `server`, z: [`server`, 16], t: [`Headless server`, `Serveur sans écran`], d: [`Pixel Server 95 uses 16 MB instead of 24.`, `Pixel Server 95 utilise 16 Mo au lieu de 24.`] },
    { id: `server2`, cost: 15000000000, req: `server`, m: [`server`, 3], t: [`Server rack`, `Baie de serveurs`], d: [`Pixel Server 95 x3.`, `Pixel Server 95 x3.`] },
    { id: `auto3`, cost: 25000000000, req: `auto`, m: [`auto`, 10], t: [`AutoClicker 98`, `AutoClicker 98`], d: [`Autoclicks x10. From the future. Three years ahead.`, `Autoclics x10. Venu du futur. Trois ans d'avance.`] },
  ],
  D: {
    score: [`Shows your score. Now with a font.`, `Affiche ton score. Avec une police, maintenant.`],
    notes: [`The developer's notes, in Notepad.`, `Les notes du développeur, dans le Bloc-notes.`],
    auto: [`+20 px/s. Light on the CPU.`, `+20 px/s. Léger pour le processeur.`],
    help: [`Makes the Help menu work. Has a search box that finds nothing.`, `Fait marcher le menu Aide. A une recherche qui ne trouve rien.`],
    trophy: [`Shows your achievements.`, `Affiche tes succès.`],
    clock: [`Keeps time. Needed for offline progress.`, `Garde l'heure. Nécessaire pour progresser hors ligne.`],
    calc: [`Shows your stats. Scientific mode included, never used.`, `Affiche tes stats. Mode scientifique inclus, jamais utilisé.`],
    macro: [`+160 px/s. Records your clicks and plays them back.`, `+160 px/s. Enregistre tes clics et les rejoue.`],
    hack: [`Dial into PIXCORP and guess passwords. Rewards pixels and messages.`, `Appelle PIXCORP et devine des mots de passe. Rapporte des pixels et des messages.`],
    av: [`Catches viruses on arrival and pays a bounty. Only while running. Uses CPU.`, `Attrape les virus à l'arrivée et paie une prime. Seulement s'il tourne. Utilise du CPU.`],
    defrag: [`Repairs fragmented memory while it runs. Very hungry for CPU.`, `Répare la mémoire fragmentée tant qu'il tourne. Très gourmand en CPU.`],
    media: [`+1500 px/s. Plays pixels. Heavy on the CPU.`, `+1500 px/s. Lit des pixels. Lourd pour le processeur.`],
    saver: [`Production x3 when you don't move the mouse for 20 s. Pipes!`, `Production x3 quand tu ne bouges pas la souris pendant 20 s. Des tuyaux !`],
    render: [`+14000 px/s. Renders 3D pixels. A 3D pixel is a cube. Groundbreaking.`, `+14000 px/s. Fait des pixels en 3D. Un pixel en 3D, c'est un cube. Révolutionnaire.`],
    stream: [`+45000 px/s. Streams pixels. Small in memory, huge on the CPU.`, `+45000 px/s. Diffuse des pixels. Petit en mémoire, énorme pour le processeur.`],
    doom: [`+180000 px/s. Shoots pixels. Everything can run it. Almost.`, `+180000 px/s. Tire sur des pixels. Tout peut le faire tourner. Presque.`],
    server: [`+900000 px/s. Serves pixels to other computers. Big in memory, easy on the CPU.`, `+900000 px/s. Sert des pixels à d'autres ordinateurs. Gros en mémoire, doux pour le processeur.`],
    bip: [`Your assistant.`, `Ton assistant.`],
  },
  N: {
    start: [`notes.txt: Winbows 95! There's a Start button. To shut down, you click Start. I asked IDM why. They said Minosoft did it. Minosoft said IDM did it.`, `notes.txt : Winbows 95 ! Il y a un bouton Démarrer. Pour éteindre, on clique sur Démarrer. J'ai demandé à IDM pourquoi. Ils ont dit que c'était Minosoft. Minosoft a dit que c'était IDM.`],
    score: [`Score.exe: your score, in a font called "MS Sans Serif". Very serious.`, `Score.exe : ton score, dans une police qui s'appelle « MS Sans Serif ». Très sérieux.`],
    notes: [`Notepad: I'm writing in Notepad now. No more 8-character file names. I named this file "notes.txt" anyway. Habit.`, `Bloc-notes : j'écris dans le Bloc-notes, maintenant. Fini les noms de 8 caractères. J'ai quand même appelé ce fichier « notes.txt ». L'habitude.`],
    auto: [`AutoClicker 95: same thing as before, with a window around it. That's progress.`, `AutoClicker 95 : la même chose qu'avant, avec une fenêtre autour. C'est ça, le progrès.`],
    help: [`Help Topics: has a search box. I searched "how to finish a game". 0 results.`, `Rubriques d'aide : il y a une recherche. J'ai cherché « comment finir un jeu ». 0 résultat.`],
    trophy: [`Trophies: all here. They survived a floppy, a modem and a virus. Tough trophies.`, `Trophées : tous là. Ils ont survécu à une disquette, un modem et un virus. Des trophées coriaces.`],
    clock: [`Clock: it's in the corner of the taskbar now. Everybody looks at it. Nobody knows why.`, `Horloge : elle est dans le coin de la barre des tâches. Tout le monde la regarde. Personne ne sait pourquoi.`],
    calc: [`Calculator: it has a scientific mode. I opened it once. I closed it twice.`, `Calculatrice : elle a un mode scientifique. Je l'ai ouvert une fois. Je l'ai fermé deux fois.`],
    macro: [`Macro Recorder: it records me clicking. Then it clicks. Then I watch it click. Living the dream.`, `Macro Recorder : il m'enregistre en train de cliquer. Puis il clique. Puis je le regarde cliquer. La belle vie.`],
    hack: [`HyperTerminal: still the best way to talk to PIXCORP. They still use the same password.`, `HyperTerminal : toujours le meilleur moyen de parler à PIXCORP. Ils ont toujours le même mot de passe.`],
    av: [`Norton PixVirus: the yellow box everyone has. It scans. A lot.`, `Norton PixVirus : la boîte jaune que tout le monde a. Il scanne. Beaucoup.`],
    defrag: [`Disk Defragmenter: still mesmerizing. Now it also eats the CPU.`, `Défragmenteur : toujours hypnotique. Maintenant, il mange aussi le processeur.`],
    media: [`Media Player: plays pixel videos. 15 frames per second. Cinema.`, `Media Player : lit des vidéos de pixels. 15 images par seconde. Du cinéma.`],
    saver: [`3D Pipes: the pipes grow forever. They never finish. I relate.`, `3D Pipes : les tuyaux poussent pour toujours. Ils ne finissent jamais. Je me reconnais.`],
    render: [`3D Pixel Studio: a 3D pixel is a cube. I rendered one. It took 4 hours.`, `3D Pixel Studio : un pixel en 3D, c'est un cube. J'en ai calculé un. Ça a pris 4 heures.`],
    stream: [`PixelCast: pixels streamed live. Small in memory, but the CPU fan sounds like a plane.`, `PixelCast : des pixels en direct. Petit en mémoire, mais le ventilateur fait un bruit d'avion.`],
    doom: [`PIXEL DOOM: you shoot pixels. Can it run on a pixel? Yes. Everything runs Doom.`, `PIXEL DOOM : on tire sur des pixels. Est-ce que ça tourne sur un pixel ? Oui. Tout fait tourner Doom.`],
    server: [`Pixel Server 95: other computers ask it for pixels. It says yes. It always says yes.`, `Pixel Server 95 : d'autres ordinateurs lui demandent des pixels. Il dit oui. Il dit toujours oui.`],
    oom: [`Out of memory. Winbows suggests closing programs. Bip suggests closing Bip. Bip is wrong.`, `Mémoire pleine. Winbows propose de fermer des programmes. Bip propose de fermer Bip. Bip a tort.`],
    shopClosed: [`You closed Add/Remove Programs. It's on the desktop. With a shortcut arrow. Fancy.`, `Tu as fermé Ajout/Suppression de programmes. Il est sur le bureau. Avec une flèche de raccourci. Classe.`],
    blind: [`No score on screen. You're playing in hard mode. Bip doesn't approve.`, `Plus de score à l'écran. Tu joues en mode difficile. Bip n'approuve pas.`],
    frag: [`The memory fragments again. Disk Defragmenter can fix it, but it needs a lot of CPU.`, `La mémoire se refragmente. Le Défragmenteur peut réparer, mais il lui faut beaucoup de CPU.`],
    stray: [`Stray pixels: green is good, red is bad. Bip says "red is a nice color". Ignore Bip.`, `Pixels égarés : vert c'est bien, rouge c'est mal. Bip dit « le rouge, c'est joli ». Ignore Bip.`],
    virus: [`A virus came in a Word document. Who opens a Word document from a stranger? Me. I do.`, `Un virus est arrivé dans un document Word. Qui ouvre un document Word d'un inconnu ? Moi. Je le fais.`],
    bsod: [`Blue screen. The CPU gave up. I've seen that screen so many times I see it when I close my eyes.`, `Écran bleu. Le processeur a abandonné. J'ai vu cet écran tellement de fois que je le vois en fermant les yeux.`],
    lag: [`The hourglass. When there's too much for the CPU, everything slows down. Close something heavy.`, `Le sablier. Quand il y a trop pour le processeur, tout ralentit. Ferme quelque chose de lourd.`],
    r12: [`12 MB. I can run Winbows AND a program. Not two programs.`, `12 Mo. Je peux lancer Winbows ET un programme. Pas deux programmes.`],
    r16: [`16 MB. The guy at the shop said "with this, you're set for life". It's 1995.`, `16 Mo. Le vendeur a dit « avec ça, t'es tranquille à vie ». On est en 1995.`],
    r24: [`24 MB. I don't know anyone with 24 MB. Now I know me.`, `24 Mo. Je ne connais personne avec 24 Mo. Maintenant, je me connais.`],
    r32: [`32 MB. My computer is worth more than my car. My car doesn't run Doom.`, `32 Mo. Mon ordinateur vaut plus que ma voiture. Ma voiture ne fait pas tourner Doom.`],
    r48: [`48 MB. The memory sticks don't fit anymore, so I used tape.`, `48 Mo. Les barrettes ne rentrent plus, alors j'ai mis du scotch.`],
    r64: [`64 MB. The maximum. Bip says it's "a lot of Bips".`, `64 Mo. Le maximum. Bip dit que ça fait « beaucoup de Bips ».`],
    cpu75: [`75 MHz. The turbo button is back. It still does nothing.`, `75 MHz. Le bouton turbo est de retour. Il ne sert toujours à rien.`],
    cpu100: [`100 MHz! Three digits! I framed the box.`, `100 MHz ! Trois chiffres ! J'ai encadré la boîte.`],
    cpu133: [`133 MHz. The fan has a fan now.`, `133 MHz. Le ventilateur a un ventilateur, maintenant.`],
    cpu166: [`166 MHz. With MMX. Nobody knows what MMX does. It's on the sticker.`, `166 MHz. Avec MMX. Personne ne sait ce que fait MMX. C'est sur l'autocollant.`],
    cpu200: [`200 MHz. The room is warmer. I turned off the heater.`, `200 MHz. La pièce est plus chaude. J'ai éteint le chauffage.`],
    cpu233: [`233 MHz. A Pentium II. It comes in a cartridge. Like a game console. Funny, I make games.`, `233 MHz. Un Pentium II. Ça arrive en cartouche. Comme une console. C'est drôle, je fais des jeux.`],
    m1m: [`A million pixels. PIXCORP asked if game.exe will be on CD-ROM. I said "it's one pixel". They said "so, yes?"`, `Un million de pixels. PIXCORP a demandé si game.exe sortirait sur CD-ROM. J'ai dit « c'est un pixel ». Ils ont dit « donc, oui ? »`],
    m1b: [`A billion pixels. Something fell through the roof last night. Shiny. Round. With a hole in the middle. It says 2001 on it.`, `Un milliard de pixels. Un truc est tombé du toit cette nuit. Brillant. Rond. Avec un trou au milieu. Il y a écrit 2001 dessus.`],
  },
  HELP: [
    [`Every program uses CPU (MHz). If the total goes over your processor, everything slows down.`, `Chaque programme utilise du CPU (MHz). Si le total dépasse ton processeur, tout ralentit.`],
    [`A long overload causes a blue screen: every program is closed. Service Pack 1 prevents it.`, `Une surcharge trop longue provoque un écran bleu : tous les programmes sont fermés. Le Service Pack 1 l'évite.`],
    [`Some programs are big in memory, others heavy on the CPU. Mix them.`, `Certains programmes sont gros en mémoire, d'autres lourds pour le processeur. Mélange-les.`],
    [`Bip comes back by himself. Thanking him gives pixels. Bip, quiet mode keeps him away.`, `Bip revient tout seul. Le remercier rapporte des pixels. Bip, mode silencieux, le garde à distance.`],
    [`The Start menu holds everything: save, options, help. Even "Shut Down".`, `Le menu Démarrer contient tout : sauvegarde, options, aide. Même « Arrêter ».`],
  ],
  LOGS: [
    [`IDM INTERNAL MEMO: "Project Winbows 95: please stop calling it Windows. Legal is nervous."`, `NOTE INTERNE IDM : « Projet Winbows 95 : merci d'arrêter de dire Windows. Le service juridique est nerveux. »`],
    [`PIXCORP MAIL: "We need game.exe on a CD-ROM. 650 MB. Fill it." The dev: "With what?" PIXCORP: "Pixels."`, `MAIL PIXCORP : « Il nous faut game.exe sur CD-ROM. 650 Mo. Remplissez-le. » Le dev : « Avec quoi ? » PIXCORP : « Des pixels. »`],
    [`BIP DESIGN DOC v1: "An assistant that helps people." v2: "An assistant that appears." v3: "An assistant."`, `DOC DE CONCEPTION BIP v1 : « Un assistant qui aide les gens. » v2 : « Un assistant qui apparaît. » v3 : « Un assistant. »`],
    [`THE DEV'S DIARY: "Day 4000. Still one pixel. But it's in 3D now. It's a cube. I'm not sure that counts."`, `JOURNAL DU DEV : « Jour 4000. Toujours un pixel. Mais il est en 3D. C'est un cube. Pas sûr que ça compte. »`],
    [`UNKNOWN SENDER, DATED 2001: "Don't panic. Everything will be connected. Even your toaster. Especially your toaster."`, `EXPÉDITEUR INCONNU, DATÉ DE 2001 : « Pas de panique. Tout sera connecté. Même ton grille-pain. Surtout ton grille-pain. »`],
  ],
  // ----- era mechanics -----
  enter() { S.bought.bip = 1; openProg(`bip`); },
  winClass: id => (id === `bip` ? `bipw` : ``),
  tick(dt) {
    const x = S.x, over = use(`cpu`) / cap(`cpu`);
    document.body.classList.toggle(`lag`, over > 1);
    if (over > 1 && !S.once.lag3) { S.once.lag3 = 1; note(N(`lag`)); toast(T(X3.lagWarn)); }
    x.over = over > 1.25 && !flag(`bsodsafe`) ? (x.over || 0) + dt : 0;
    if (x.over > 20) { x.over = 0; ERA[3].bsod(); }
    if (S.run.bip) { x.bipT = (x.bipT || 0) + dt; if (x.bipT > 25) { x.bipT = 0; x.bipI = ((x.bipI || 0) + 1) % X3.bip.length; x.bipOk = 0; } }
    else if (!flag(`bipquiet`) && S.bought.bip) { x.bipAway = (x.bipAway || 0) + dt; if (x.bipAway > 180 && free() >= 1) { x.bipAway = 0; openProg(`bip`); toast(T(X3.bipBack)); } }
    if (S.total > 5000) {
      x.virT = (x.virT || rnd(200, 360)) - dt;
      if (x.virT <= 0 && !S.run.virus) { x.virT = rnd(240, 420); ERA[2].virus(); }
    }
    if (S.run.virus) S.px -= S.px * 0.01 * dt;
  },
  simTick() { if (S.run.virus) { S.run.virus = 0; killWin(`virus`); } dq.length = 0; S.x.over = 0; },
  bsod() {
    S.st.bsod = (S.st.bsod || 0) + 1;
    for (const p of E().P) if (S.run[p.id] && !p.fixed) { S.run[p.id] = 0; killWin(p.id); }
    if (!$(`bsod`)) document.body.insertAdjacentHTML(`beforeend`, `<div id="bsod" data-act="bsodOk"></div>`);
    $(`bsod`).textContent = T(X3.bsod);
    $(`bsod`).classList.add(`on`);
    if (S.st.bsod === 1) note(N(`bsod`));
  },
  closing(id) {
    if (id === `virus`) return ERA[2].closing(id);
    if (id === `bip` && !S.x.bipWarned) { S.x.bipWarned = 1; toast(T(X3.bipClose)); return false; }
    if (id === `bip`) S.x.bipAway = 0;
    return true;
  },
  startExtra: u => [[`shutdown`, T(X3.shut), `sepi`]],
  A: {
    bsodOk() { $(`bsod`).classList.remove(`on`); },
    shutdown() {
      if (!$(`safe`)) document.body.insertAdjacentHTML(`beforeend`, `<div id="safe" data-act="safeOk"></div>`);
      save(); $(`safe`).textContent = T(X3.safe); $(`safe`).classList.add(`on`); S.once.safe = 1;
    },
    safeOk() { $(`safe`).classList.remove(`on`); },
    bipThanks() {
      if (S.x.bipOk) return;
      S.x.bipOk = 1; S.st.bip = (S.st.bip || 0) + 1;
      const n = Math.max(50, basePerSec() * 10);
      gain(n); toast(fill(T(X3.thanked), { n: fmt(n) }));
    },
  },
  BODY: {
    bip: () => `<div class="bip"><div class="bub">${esc(T(X3.bip[S.x.bipI || 0]))}</div><div class="bipme"><i></i><i></i></div>${S.x.bipOk ? `` : `<button class="btn" data-act="bipThanks">${T(X3.thanks)}</button>`}</div>`,
    virus: () => ERA[2].BODY.virus(),
  },
};

ACH.push(
  [`w95`, [`Start me up`, `Démarre-moi`], [`Boot Winbows 95.`, `Démarrer Winbows 95.`], () => S.era >= 3, 3],
  [`lag`, [`Hourglass`, `Sablier`], [`Overload the CPU.`, `Surcharger le processeur.`], () => S.once.lag3, 3],
  [`bsod`, [`Blue screen of death`, `Écran bleu de la mort`], [`Crash Winbows.`, `Faire planter Winbows.`], () => (S.st.bsod || 0) >= 1, 3],
  [`safe`, [`It's now safe`, `Vous pouvez éteindre`], [`Use Shut Down in the Start menu.`, `Utiliser Arrêter dans le menu Démarrer.`], () => S.once.safe, 3],
  [`bip10`, [`Best friends`, `Meilleurs amis`], [`Thank Bip 10 times.`, `Remercier Bip 10 fois.`], () => (S.st.bip || 0) >= 10, 3],
  [`doom`, [`But can it run Doom?`, `Mais est-ce que ça fait tourner Doom ?`], [`Install PIXEL DOOM.`, `Installer PIXEL DOOM.`], () => S.era > 3 || (S.era === 3 && S.bought.doom), 3],
  [`p2`, [`Pentium II`, `Pentium II`], [`Get the 233 MHz processor.`, `Avoir le processeur à 233 MHz.`], () => S.era > 3 || (S.era === 3 && cap(`cpu`) >= 233), 3],
);
