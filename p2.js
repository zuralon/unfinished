// PIXEL-OS 2, unlocked once the whole skill tree is learned: the developer finally makes the second pixel.
// A game of its own on a canvas: paint one picture per era, cell by cell, following a faint model.
// Each colour is a memory of an era with its own rule. Finished pictures go to the gallery and double everything.
const P2C = [
  { id: `g`, hex: `#3dff7a`, c0: 10, b: 1, t: [`Phosphor`, `Phosphore`], e: [`Terminal green. +25% for each phosphor in the same line.`, `Le vert du terminal. +25 % par phosphore sur la même ligne.`] },
  { id: `w`, hex: `#f3efe4`, c0: 30, b: 4, t: [`1984 White`, `Blanc 1984`], e: [`The first Mac. x2 when it touches an empty cell: it loves outlines.`, `Le premier Mac. x2 s'il touche une case vide : il adore les contours.`] },
  { id: `c`, hex: `#38d4ff`, c0: 90, b: 14, t: [`Modem Cyan`, `Cyan modem`], e: [`Krrrr. +50% for each different colour around it.`, `Krrrr. +50 % par couleur différente autour de lui.`] },
  { id: `b`, hex: `#3a5cff`, c0: 270, b: 50, t: [`Blue Screen`, `Écran bleu`], e: [`Strong, but it crashes now and then. Click it to reboot it: bonus.`, `Costaud, mais il plante de temps en temps. Clique dessus pour le redémarrer : bonus.`] },
  { id: `h`, hex: `#4cbb3c`, c0: 810, b: 180, t: [`Hill Green`, `Vert colline`], e: [`The wallpaper. +10% for each hill green in the same patch.`, `Le fond d'écran. +10 % par vert colline dans le même pré.`] },
  { id: `i`, hex: `#a3abbb`, c0: 2430, b: 650, t: [`iBrick Grey`, `Gris iBrick`], e: [`A battery: produces and boosts its neighbours while charged. Click it, or the Pixel, to charge it.`, `Une batterie : produit et booste ses voisins tant qu'elle est chargée. Clique dessus, ou sur le Pixel, pour la charger.`] },
  { id: `o`, hex: `#ff8a1f`, c0: 7290, b: 2400, t: [`Copixel Orange`, `Orange Copixel`], e: [`Each one paints a missing cell for you every 30 s. Copixel insists.`, `Chacun peint une case manquante à ta place toutes les 30 s. Copixel insiste.`] },
  { id: `q`, hex: `#b45cff`, c0: 21870, b: 9000, t: [`Qubit Violet`, `Violet qubit`], e: [`God rolls one die every 5 s for all the qubits: between x0 and x4.`, `Dieu lance un seul dé toutes les 5 s pour tous les qubits : entre x0 et x4.`] },
];
const P2CI = {};
P2C.forEach((c, i) => { c.n = i; P2CI[c.id] = c; });

// the models: one letter per colour, `.` = no paint, `P` = the Pixel (always there, click it)
const P2PICS = [
  { t: [`The terminal`, `Le terminal`], art: [
    `............`,
    `.ggg.gggg...`,
    `............`,
    `.gggggg.ggg.`,
    `............`,
    `.gg.ggggg...`,
    `............`,
    `.g.P........`],
    intro: [[`THE DEV: you learned every skill there is. every single one. in forty years, i made one pixel.`, `LE DEV : tu as appris toutes les compétences. toutes. moi, en quarante ans, j'ai fait un pixel.`],
      [`THE DEV: i think i know why it never moved. i didn't need a better computer. i needed someone to paint with.`, `LE DEV : je crois que je sais pourquoi ça n'avançait pas. je n'avais pas besoin d'un meilleur ordinateur. j'avais besoin de quelqu'un pour peindre avec moi.`],
      [`THE DEV: let's start where it started. a green screen, some lines, and the pixel blinking like a cursor. click it for paint, then paint the dots of the model.`, `LE DEV : on commence là où tout a commencé. un écran vert, des lignes, et le pixel qui clignote comme un curseur. clique dessus pour avoir de la peinture, puis peins les points du modèle.`]],
    outro: [[`THE DEV: the first screen i ever saw. it looks better than i remember.`, `LE DEV : le premier écran que j'ai vu. il est plus beau que dans mon souvenir.`]] },
  { t: [`The first computer`, `Le premier ordinateur`], art: [
    `............`,
    `..wwwwwwww..`,
    `..w......w..`,
    `..w.gggg.w..`,
    `..w.g..g.w..`,
    `..w.gP.g.w..`,
    `..w.gggg.w..`,
    `..w......w..`,
    `..wwwwwwww..`,
    `..w......w..`,
    `..w.ww...w..`,
    `..wwwwwwww..`],
    intro: [[`THE DEV: 1984. it was white, it had 128 KB and one floppy drive. i drew its outline a thousand times in my school notebooks.`, `LE DEV : 1984. il était blanc, il avait 128 Ko et un lecteur de disquette. j'ai dessiné son contour mille fois dans mes cahiers.`],
      [`THE DEV: white loves outlines. and watch out for bugs: they come out when someone is looking. like real ones.`, `LE DEV : le blanc adore les contours. et attention aux bugs : ils sortent quand quelqu'un regarde. comme les vrais.`]],
    outro: [[`THE DEV: if you squint, it's exactly him. please squint.`, `LE DEV : si tu plisses les yeux, c'est exactement lui. plisse les yeux, s'il te plaît.`]] },
  { t: [`The modem`, `Le modem`], art: [
    `..............`,
    `.c...c...c...c`,
    `..c.c.c.c.c.c.`,
    `...c...c...c..`,
    `..............`,
    `.wwwwwwwwwwww.`,
    `.w..........w.`,
    `.w.g.g.g..P.w.`,
    `.w..........w.`,
    `.wwwwwwwwwwww.`,
    `...ww....ww...`],
    intro: [[`THE DEV: biiiip krrrrr pshhhhh. remember the sound? i'm painting it in cyan. sounds are cyan, everybody knows that.`, `LE DEV : biiiip krrrrr pshhhhh. tu te souviens du bruit ? je le peins en cyan. les bruits sont cyans, tout le monde sait ça.`],
      [`THE DEV: cyan likes company. the more different colours around it, the better it works. like a party line.`, `LE DEV : le cyan aime la compagnie. plus il a de couleurs différentes autour, mieux il marche. comme une ligne partagée.`]],
    outro: [[`MOM: who's on the phone?`, `MAMAN : c'est qui, au téléphone ?`], [`THE DEV: nobody, mom. it's a painting.`, `LE DEV : personne, maman. c'est un tableau.`]] },
  { t: [`The blue screen`, `L'écran bleu`], art: [
    `................`,
    `.wwwwwwwwwwwwww.`,
    `.wbbbbbbbbbbbbw.`,
    `.wbwbbbbbbbbbbw.`,
    `.wbbbbbwwwbbbbw.`,
    `.wbwbbwbbbwbbbw.`,
    `.wbbbbbbbbbbbbw.`,
    `.wbwwwwbwwwwbbw.`,
    `.wbbbbbbbbbbbbw.`,
    `.wwwwwwwPwwwcww.`,
    `......wwwww.....`],
    intro: [[`THE DEV: let's paint a crash. the most honest painting of my career.`, `LE DEV : on va peindre un plantage. le tableau le plus honnête de ma carrière.`],
      [`THE DEV: blue works hard, then it crashes. click it to reboot it: you get a bonus for the trouble.`, `LE DEV : le bleu bosse dur, puis il plante. clique dessus pour le redémarrer : tu as un bonus pour le dérangement.`]],
    outro: [[`THE DEV: a fatal exception has occurred. it's beautiful. press any key to frame it.`, `LE DEV : une erreur fatale s'est produite. c'est magnifique. appuie sur une touche pour l'encadrer.`]] },
  { t: [`The hill`, `La colline`], art: [
    `cccccccccccccccccc`,
    `cccwwwccccccccccPc`,
    `ccwwwwwcccccwwwccc`,
    `cccccccccccwwwwwcc`,
    `cccccccccccccccccc`,
    `ccccccccchhhhhhccc`,
    `ccccchhhhhhhhhhhhc`,
    `ccchhhhhhhhhhhhhhh`,
    `chhhhhhhhhhhhhhhhh`,
    `hhhhhhhhhhhhhhhhhh`,
    `hhhhhhhhhhhhhhhhhh`,
    `hhhhhhhhhhhhhhhhhh`],
    intro: [[`THE DEV: the wallpaper. everybody saw this hill. nobody ever went there. let's go.`, `LE DEV : le fond d'écran. tout le monde a vu cette colline. personne n'y est jamais allé. on y va.`],
      [`THE DEV: hill green grows in patches: the bigger the patch, the better. and that's a lot of sky. a paint bucket would help. just saying.`, `LE DEV : le vert colline pousse en prés : plus le pré est grand, mieux c'est. et ça fait beaucoup de ciel. un pot de peinture aiderait. je dis ça.`]],
    outro: [[`THE DEV: i went there, in the painting. it's windy. the pixel is the sun now. it looks happy.`, `LE DEV : j'y suis allé, dans le tableau. il y a du vent. le pixel est le soleil, maintenant. il a l'air content.`]] },
  { t: [`The iBrick`, `L'iBrick`], art: [
    `..iiiiiiii..`,
    `.iiiiiiiiii.`,
    `.iiiiwwiiii.`,
    `.icccccccci.`,
    `.icgcbchcci.`,
    `.icccccccci.`,
    `.icwcgcbcci.`,
    `.icccccccci.`,
    `.ichcwcgcci.`,
    `.icccccccci.`,
    `.icccccccci.`,
    `.icbcbcbcci.`,
    `.icccccccci.`,
    `.iiiiiiiiii.`,
    `.iiiiPiiiii.`,
    `.iiiiiiiiii.`,
    `..iiiiiiii..`],
    intro: [[`THE DEV: the phone. it fit in a pocket. the game almost did.`, `LE DEV : le téléphone. il tenait dans la poche. le jeu aussi, presque.`],
      [`THE DEV: grey is a battery. it drains. click it to charge it, or press the home button: the pixel is the home button now.`, `LE DEV : le gris est une batterie. elle se vide. clique dessus pour la charger, ou appuie sur le bouton d'accueil : le pixel est le bouton d'accueil, maintenant.`]],
    outro: [[`THE DEV: 20% battery. like always. let's frame it before it dies.`, `LE DEV : 20 % de batterie. comme toujours. on l'encadre avant qu'il s'éteigne.`]] },
  { t: [`Copixel`, `Copixel`], art: [
    `.......ww.......`,
    `........w.......`,
    `...oooooooooo...`,
    `..oooooooooooo..`,
    `..oo.cc..cc.oo..`,
    `..oo.cc..cc.oo..`,
    `..oooooooooooo..`,
    `..ooo.wwww.ooo..`,
    `..oooo....oooo..`,
    `...oooooooooo...`,
    `.....iiiiii.....`,
    `...bbbbbbbbbb...`,
    `..bbbbbPbbbbbb..`],
    intro: [[`COPIXEL: Hello. I would like my portrait. I can paint it myself in 0.3 seconds.`, `COPIXEL : Bonjour. Je voudrais mon portrait. Je peux le peindre moi-même en 0,3 seconde.`],
      [`THE DEV: no. we paint it. but... you can help a little.`, `LE DEV : non. on le peint. mais... tu peux aider un peu.`],
      [`COPIXEL: Each orange cell is a piece of me. Each one paints a missing cell every 30 seconds. I insist.`, `COPIXEL : Chaque case orange est un morceau de moi. Chacune peint une case manquante toutes les 30 secondes. J'insiste.`]],
    outro: [[`COPIXEL: It looks like me. I did not know I looked like this. I have a heart. It is a pixel. Thank you.`, `COPIXEL : Ça me ressemble. Je ne savais pas que je ressemblais à ça. J'ai un cœur. C'est un pixel. Merci.`]] },
  { t: [`The cat in the box`, `Le chat dans la boîte`], art: [
    `..................`,
    `....q........q....`,
    `....qq......qq....`,
    `....qqqqqqqqqq....`,
    `....qqcqqqqcqq....`,
    `....qqqqqPqqqq....`,
    `....qqqqqqqqqq....`,
    `..oooooooooooooo..`,
    `..o............o..`,
    `..o..gggggggg..o..`,
    `..o............o..`,
    `..oooooooooooooo..`,
    `..................`],
    intro: [[`THE CAT: meow.`, `LE CHAT : miaou.`],
      [`THE DEV: the cat from universe 7 came back. it wants to pose. in its box. or not in its box.`, `LE DEV : le chat de l'univers 7 est revenu. il veut poser. dans sa boîte. ou pas dans sa boîte.`],
      [`THE DEV: violet is quantum. God rolls one die for all the qubits. sometimes 0. sometimes 4. no refunds.`, `LE DEV : le violet est quantique. Dieu lance un seul dé pour tous les qubits. parfois 0. parfois 4. pas de remboursement.`]],
    outro: [[`THE CAT: (looks at the painting, then pushes it off the table)`, `LE CHAT : (regarde le tableau, puis le pousse de la table)`], [`THE DEV: it likes it.`, `LE DEV : il aime bien.`]] },
  { t: [`You`, `Toi`], art: [
    `..g.q..P..o.b.......`,
    `....c.ii..h.........`,
    `.....iwwi...........`,
    `.....iwwi...........`,
    `.....iwwi...........`,
    `.....iwwiii.........`,
    `.....iwwiwwiii......`,
    `..ii.iwwiwwiwwii....`,
    `.iwwiiwwwwwwwwwwi...`,
    `.iwwwiwwwwwwwwwwi...`,
    `..iwwwwwwwwwwwwwi...`,
    `...iwwwwwwwwwwwi....`,
    `....iwwwwwwwwwwi....`,
    `.....iwwwwwwwwi.....`,
    `.....iiiiiiiiii.....`],
    intro: [[`THE DEV: the last painting. i kept it for the end. it's you.`, `LE DEV : le dernier tableau. je l'ai gardé pour la fin. c'est toi.`],
      [`THE DEV: well, your hand. it's the only part of you i ever saw. it clicked {c} times. i counted.`, `LE DEV : enfin, ta main. c'est la seule partie de toi que j'ai jamais vue. elle a cliqué {c} fois. j'ai compté.`]],
    outro: [] },
  // after the ending: a blank canvas, no model
  { t: [`Free canvas`, `Toile libre`], free: 1, art: Array.from({ length: 16 }, (_, y) => y === 8 ? `.`.repeat(12) + `P` + `.`.repeat(11) : `.`.repeat(24)),
    intro: [[`THE DEV: a blank canvas. no model. paint whatever you want. i'll watch.`, `LE DEV : une toile blanche. pas de modèle. peins ce que tu veux. je regarde.`]], outro: [] },
];
const P2LAST = 8;
// parsed once: size, model colour of each cell, where the Pixel is
const P2K = P2PICS.map(p => {
  const H = p.art.length, W = p.art[0].length, tgt = [];
  let pi = 0;
  p.art.forEach((row, y) => [...row].forEach((ch, x) => { tgt.push(P2CI[ch] ? ch : ``); if (ch === `P`) pi = y * W + x; }));
  const need = {};
  for (const c of tgt) if (c) need[c] = (need[c] || 0) + 1;
  return { W, H, tgt, pi, need, total: tgt.filter(Boolean).length };
});

// upgrades of the workshop: kept from one painting to the next
const P2UP = [
  { id: `c1`, x: 1, c: 2, t: [`Ball mouse`, `Souris à boule`], d: [`Clicks x2.`, `Clics x2.`] },
  { id: `g2`, x: 5, col: [`g`, 2], t: [`Long-glow phosphor`, `Phosphore rémanent`], d: [`Phosphor x2. It stays on the screen after you look away.`, `Phosphore x2. Il reste sur l'écran quand on ne regarde plus.`] },
  { id: `cafe`, x: 20, all: 1.5, t: [`The dev's coffee`, `Le café du dev`], d: [`Everything x1.5. He paints faster. He talks faster too.`, `Tout x1,5. Il peint plus vite. Il parle plus vite aussi.`] },
  { id: `num`, x: 10, need: 1, tool: 1, t: [`Paint by numbers`, `Peinture par numéros`], d: [`Clicking an empty cell of the model paints its colour, whatever colour is selected.`, `Cliquer une case vide du modèle la peint de sa couleur, peu importe la couleur choisie.`] },
  { id: `debug`, x: 30, need: 1, t: [`Debugger`, `Débogueur`], d: [`Bugs walk half as fast.`, `Les bugs marchent deux fois moins vite.`] },
  { id: `w2`, x: 40, need: 1, col: [`w`, 2], t: [`Titanium white`, `Blanc de titane`], d: [`1984 White x2.`, `Blanc 1984 x2.`] },
  { id: `c2`, x: 60, need: 1, c: 3, t: [`Cat-hair brush`, `Pinceau en poil de chat`], d: [`Clicks x3. The cat was not asked.`, `Clics x3. On n'a pas demandé au chat.`] },
  { id: `sym`, x: 20, need: 2, tool: 1, t: [`Symmetry`, `Symétrie`], d: [`A new tool: each cell you paint is also painted on the other side.`, `Un nouvel outil : chaque case peinte l'est aussi de l'autre côté.`] },
  { id: `c3b`, x: 40, need: 2, col: [`c`, 2], t: [`Twisted pair`, `Câble torsadé`], d: [`Modem Cyan x2.`, `Cyan modem x2.`] },
  { id: `cafe2`, x: 80, need: 2, all: 1.5, t: [`Double espresso`, `Double expresso`], d: [`Everything x1.5.`, `Tout x1,5.`] },
  { id: `cps`, x: 150, need: 2, cps: 0.05, t: [`Smart click`, `Clic intelligent`], d: [`Each click also gives 5% of your paint per second.`, `Chaque clic donne aussi 5 % de ta peinture par seconde.`] },
  { id: `pot`, x: 30, need: 3, tool: 1, t: [`Paint bucket`, `Pot de peinture`], d: [`A new tool: fills a whole zone of the model at once (each cell is paid).`, `Un nouvel outil : remplit d'un coup toute une zone du modèle (chaque case est payée).`] },
  { id: `b2`, x: 60, need: 3, col: [`b`, 2], t: [`Signed driver`, `Pilote signé`], d: [`Blue Screen x2, and it crashes half as often.`, `Écran bleu x2, et il plante deux fois moins.`] },
  { id: `tests`, x: 120, need: 3, t: [`Unit tests`, `Tests unitaires`], d: [`Bugs give up after 20 s. Nobody knows why. Tests work like that.`, `Les bugs abandonnent au bout de 20 s. Personne ne sait pourquoi. Les tests, c'est comme ça.`] },
  { id: `off`, x: 200, need: 3, t: [`Patron of the arts`, `Mécène`], d: [`Painting while you're away at 100% instead of 50%.`, `La peinture continue à 100 % au lieu de 50 % quand tu n'es pas là.`] },
  { id: `h2`, x: 40, need: 4, col: [`h`, 2], t: [`Fertilizer`, `Engrais`], d: [`Hill Green x2.`, `Vert colline x2.`] },
  { id: `c4`, x: 100, need: 4, c: 4, t: [`Graphics tablet`, `Tablette graphique`], d: [`Clicks x4.`, `Clics x4.`] },
  { id: `cafe3`, x: 200, need: 4, all: 2, t: [`Italian coffee pot`, `Cafetière italienne`], d: [`Everything x2. It whistles. Everything is fine.`, `Tout x2. Elle siffle. Tout va bien.`] },
  { id: `i2`, x: 50, need: 5, col: [`i`, 2], t: [`Wireless charger`, `Chargeur sans fil`], d: [`iBrick Grey x2, and batteries drain half as fast.`, `Gris iBrick x2, et les batteries se vident deux fois moins vite.`] },
  { id: `lamp`, x: 200, need: 5, all: 2, t: [`Architect's lamp`, `Lampe d'architecte`], d: [`Everything x2. You can finally see the colours.`, `Tout x2. On voit enfin les couleurs.`] },
  { id: `o2`, x: 50, need: 6, col: [`o`, 2], t: [`Copixel Pro`, `Copixel Pro`], d: [`Copixel Orange x2, and it paints twice as often. It's unbearable.`, `Orange Copixel x2, et il peint deux fois plus souvent. Il est insupportable.`] },
  { id: `easel`, x: 200, need: 6, all: 2, t: [`Oak easel`, `Chevalet en chêne`], d: [`Everything x2. It creaks like a real one.`, `Tout x2. Il grince comme un vrai.`] },
  { id: `q2`, x: 60, need: 7, col: [`q`, 2], t: [`Loaded die`, `Dé pipé`], d: [`Qubit Violet x2, and God never rolls under x1 anymore.`, `Violet qubit x2, et Dieu ne fait plus jamais moins de x1.`] },
];

const X8 = {
  who: { dev: [`THE DEV`, `LE DEV`], cop: [`COPIXEL`, `COPIXEL`], cat: [`THE CAT`, `LE CHAT`], mom: [`MOM`, `MAMAN`] },
  pic: [`Painting {n}/9`, `Tableau {n}/9`],
  palette: [`Palette`, `Palette`], shop: [`Workshop`, `Atelier`], chat: [`The dev`, `Le dev`],
  tools: { paint: [`Brush`, `Pinceau`], erase: [`Eraser`, `Gomme`], pot: [`Bucket`, `Pot`], sym: [`Symmetry`, `Symétrie`] },
  locked: [`Painting {n}`, `Tableau {n}`],
  onCv: [`{a} on the canvas · {b} left in the model`, `{a} sur la toile · reste {b} dans le modèle`],
  onCvFree: [`{a} on the canvas`, `{a} sur la toile`],
  like: [`Likeness`, `Ressemblance`], sign: [`Sign the painting`, `Signer le tableau`],
  signHint: [`Every cell of the model is painted. Sign it to hang it in the gallery: everything x2, and a new colour.`, `Toutes les cases du modèle sont peintes. Signe-le pour l'accrocher dans la galerie : tout x2, et une nouvelle couleur.`],
  freeHow: [`No model here: paint whatever you like. Right-click erases.`, `Pas de modèle ici : peins ce que tu veux. Le clic droit efface.`],
  lastHint: [`The last cell is painted. Sign it. It's the last one.`, `La dernière case est peinte. Signe-le. C'est le dernier.`],
  howTo: [`Click the Pixel for paint. Pick a colour, then click the dots of the model. Right-click erases.`, `Clique sur le Pixel pour avoir de la peinture. Choisis une couleur, puis clique sur les points du modèle. Le clic droit efface.`],
  gal: [`Gallery`, `Galerie`], galT: [`The gallery`, `La galerie`], galSub: [`Each signed painting doubles your paint and your clicks.`, `Chaque tableau signé double ta peinture et tes clics.`],
  galNow: [`on the easel`, `sur le chevalet`], galDone: [`signed`, `signé`], close: [`Close`, `Fermer`],
  opt: [`Options`, `Options`], back: [`Back to PIXEL-OS`, `Revenir à PIXEL-OS`],
  backQ: [`Go back to PIXEL-OS? Your run is where you left it, and so is this painting.`, `Revenir à PIXEL-OS ? Ta partie est là où tu l'as laissée, ce tableau aussi.`],
  sci: [`Scientific notation`, `Notation scientifique`], anim: [`Animations`, `Animations`],
  ps: [`+{n} paint/s`, `+{n} peinture/s`], unit: [`paint`, `peinture`],
  cell: [`Cell {x},{y}`, `Case {x},{y}`], want: [`Model: {a}`, `Modèle : {a}`], none: [`nothing`, `rien`],
  ok: [`right colour, x2`, `bonne couleur, x2`], bad: [`wrong colour, x0.5`, `mauvaise couleur, x0,5`], off: [`outside the model`, `hors du modèle`],
  makes: [`{n}/s`, `{n}/s`], pixel: [`The Pixel. Click it: +{n} paint. Its neighbours make x2.`, `Le Pixel. Clique dessus : +{n} de peinture. Ses voisins produisent x2.`],
  crashed: [`Crashed. Click to reboot.`, `Planté. Clique pour redémarrer.`], charge: [`Charge: {n}%`, `Charge : {n} %`],
  roll: [`God's die: x{m}`, `Dé de Dieu : x{m}`],
  poor: [`Not enough paint.`, `Pas assez de peinture.`],
  squash: [`Bug squashed! +{n}`, `Bug écrasé ! +{n}`], reboot: [`Rebooted! +{n}`, `Redémarré ! +{n}`],
  signed: [`"{a}" signed and hung in the gallery. Everything x2.`, `« {a} » signé et accroché dans la galerie. Tout x2.`],
  newCol: [`New colour: {a}.`, `Nouvelle couleur : {a}.`],
  away: [`While you were away ({t}), the painting earned {n} paint.`, `Pendant ton absence ({t}), le tableau a rapporté {n} de peinture.`],
  enter: [`PIXEL-OS 2: the second pixel`, `PIXEL-OS 2 : le deuxième pixel`],
  enterBack: [`PIXEL-OS 2`, `PIXEL-OS 2`],
  unlock: [`The second pixel is learned. A new game opens: PIXEL-OS 2. You can go there now, or later from the skill tree or the File / Start menu.`, `Le deuxième pixel est appris. Un nouveau jeu s'ouvre : PIXEL-OS 2. Tu peux y aller maintenant, ou plus tard depuis l'arbre de compétences ou le menu Fichier / Démarrer.`],
  intro: [
    [`> ALL SKILLS LEARNED`, `> TOUTES LES COMPÉTENCES APPRISES`],
    [`THE DEV: wait. you learned everything? everything everything?`, `LE DEV : attends. tu as tout appris ? vraiment tout ?`],
    [`THE DEV: then there's nothing left to learn here. let's make something new.`, `LE DEV : alors il n'y a plus rien à apprendre ici. faisons quelque chose de nouveau.`],
    [`> INSTALLING PIXEL-OS 2: THE SECOND PIXEL`, `> INSTALLATION DE PIXEL-OS 2 : LE DEUXIÈME PIXEL`],
  ],
  ev: {
    bug: [`THE DEV: a bug! squash it before it eats a cell. click it.`, `LE DEV : un bug ! écrase-le avant qu'il mange une case. clique dessus.`],
    ate: [`THE DEV: it ate a cell. that's what bugs do. that's all they do.`, `LE DEV : il a mangé une case. c'est ce que font les bugs. c'est tout ce qu'ils font.`],
    crash: [`THE DEV: blue screen. click it. ctrl+alt+click.`, `LE DEV : écran bleu. clique dessus. ctrl+alt+clic.`],
    low: [`THE DEV: a battery is almost empty. click it. or click the pixel: it charges every battery a little.`, `LE DEV : une batterie est presque vide. clique dessus. ou clique sur le pixel : ça recharge un peu toutes les batteries.`],
    cop: [`COPIXEL: I painted a cell. You're welcome. I will paint another one. You can't stop me. Well, you can erase me.`, `COPIXEL : J'ai peint une case. De rien. J'en peindrai une autre. Tu ne peux pas m'arrêter. Enfin, tu peux m'effacer.`],
    zero: [`THE DEV: God rolled a 0. the qubits are sulking. wait for the next roll.`, `LE DEV : Dieu a fait 0. les qubits boudent. attends le prochain lancer.`],
    wrong: [`THE DEV: that's not the colour of the model. it works, but it clashes: half production. right-click to erase it.`, `LE DEV : ce n'est pas la couleur du modèle. ça marche, mais ça jure : production divisée par deux. clic droit pour l'effacer.`],
    done: [`THE DEV: it's finished! sign it.`, `LE DEV : il est fini ! signe-le.`],
    pot: [`THE DEV: the bucket. one click, a whole zone. i should have bought one in 1984.`, `LE DEV : le pot. un clic, toute une zone. j'aurais dû en acheter un en 1984.`],
  },
  cops: [
    [`COPIXEL: Painted. I also optimized your left hand.`, `COPIXEL : Peint. J'ai aussi optimisé ta main gauche.`],
    [`COPIXEL: Another one. I am very good at cells.`, `COPIXEL : Encore une. Je suis très fort pour les cases.`],
    [`COPIXEL: I could do the whole painting. I won't. The dev said no. I respect the dev.`, `COPIXEL : Je pourrais faire tout le tableau. Je ne le ferai pas. Le dev a dit non. Je respecte le dev.`],
    [`COPIXEL: That one was hard. It was a corner.`, `COPIXEL : Celle-là était dure. C'était un coin.`],
  ],
  fin: [
    [`> SIGNING THE LAST PAINTING...`, `> SIGNATURE DU DERNIER TABLEAU...`],
    [`THE DEV: nine paintings. {n} pixels. forty years.`, `LE DEV : neuf tableaux. {n} pixels. quarante ans.`],
    [`THE DEV: i always said the game wasn't finished. it was true. it needed a second pixel.`, `LE DEV : j'ai toujours dit que le jeu n'était pas fini. c'était vrai. il lui fallait un deuxième pixel.`],
    [`THE DEV: and a third. and someone to place them.`, `LE DEV : et un troisième. et quelqu'un pour les poser.`],
    [`COPIXEL: I could have done it faster.`, `COPIXEL : J'aurais pu le faire plus vite.`],
    [`THE DEV: i know. that's why it's good.`, `LE DEV : je sais. c'est pour ça que c'est bien.`],
    [`THE CAT: meow.`, `LE CHAT : miaou.`],
    [`> GAME.EXE STATUS: FINISHED. FOR REAL. SIGNED.`, `> ÉTAT DE GAME.EXE : FINI. POUR DE VRAI. SIGNÉ.`],
  ],
  thanks: [`THANK YOU FOR PAINTING WITH ME`, `MERCI D'AVOIR PEINT AVEC MOI`],
  credits: [`PIXEL-OS 2\nThe second pixel\n\nA game by zuralon\nPainted with you\n\nPaintings: 9\nPixels placed: {n}\nBugs squashed: {b}\nTime played: {t}`, `PIXEL-OS 2\nLe deuxième pixel\n\nUn jeu de zuralon\nPeint avec toi\n\nTableaux : 9\nPixels posés : {n}\nBugs écrasés : {b}\nTemps de jeu : {t}`],
  freeGo: [`Paint freely`, `Peindre librement`], again: [`See the ending again`, `Revoir la fin`],
  about: [`PIXEL-OS 2\nThe second pixel\n\nA game by zuralon.\nThe first pixel was made in 1984. This one, with you.`, `PIXEL-OS 2\nLe deuxième pixel\n\nUn jeu de zuralon.\nLe premier pixel a été fait en 1984. Celui-ci, avec toi.`],
};

// the side games (PIXEL-OS 2 and 3) plug into the engine here, one per era number
const MODES = {};

// ---------- state ----------
// opened by the last skill of the crown (or a tree learned to the end); kept forever, even after a tree reset
const p2Unlocked = () => { if (!S.st.p2un && (S.p2 || TR(`x5`) || TNODES.every(n => tlv(n.id) >= n.max))) S.st.p2un = 1; return !!S.st.p2un; };
// tell it once, out loud: a menu entry alone is easy to miss
function p2Tell() { if (S.era < 8 && p2Unlocked() && !S.st.p2told) { S.st.p2told = 1; dlg(T(X8.unlock), { cancel: true, okT: `PIXEL-OS 2 →`, ok: () => p2Enter() }); } }
const p2Fresh = () => ({ pic: 0, grid: [], px: 0, tot: 0, gal: [], up: {}, chat: [], bat: {}, crash: {}, roll: 1, rollT: 5, crashT: 40, copT: 0, bugs: [], bugT: 50, sel: `g`, tool: `paint`, sym: 0, clicks: 0, placed: 0, squash: 0, reboots: 0, fin: 0, seen: {} });
const p2k = () => P2K[S.p2.pic];
const p2pic = () => P2PICS[S.p2.pic];
// colours open on this painting: one more per painting, all of them on the free canvas
const p2open = c => P2CI[c].n <= Math.min(S.p2.pic, P2C.length - 1);
function p2Board() {
  const p = S.p2, k = p2k();
  p.grid = Array(k.W * k.H).fill(``); p.grid[k.pi] = `P`;
  p.bat = {}; p.crash = {}; p.bugs = []; p.bugT = 50; p.copT = 0;
  for (const l of p2pic().intro) p2Say(tf(l, { c: fmt(S.clicks + p.clicks) }));
  if (P2C[p.pic] && !p2pic().free) p.sel = P2C[p.pic].id;
}
function p2Say(l) {
  const c = S.p2.chat;
  c.push(l);
  if (c.length > 40) c.shift();
}
function p2Once(k) { if (!S.p2.seen[k]) { S.p2.seen[k] = 1; p2Say(X8.ev[k]); } }
const p2has = id => !!S.p2.up[id];

// ---------- economy ----------
const p2Count = c => S.p2.grid.reduce((n, g) => n + (g === c), 0);
// every painting is dearer than the last, old colours included
let P2LV = [11, 74, 210, 840, 4100, 12000, 30000, 130000, 1600000];
const p2PicMul = () => P2LV[Math.min(S.p2.pic, P2LAST)];
// the price climbs with each cell of that colour, up to x9 for the last one the model needs, whatever the size of the zone
const p2Cost = c => { const nd = p2k().need[c]; return Math.ceil(P2CI[c].c0 * (1 + (nd ? 2 / nd : 0.2) * p2Count(c)) ** 2 * p2PicMul()); };
// an upgrade costs a number of tiles of the newest colour of the painting where it shows up
const p2UpCost = u => { const n = u.need || 0; return Math.ceil(u.x * P2C[Math.min(n, P2C.length - 1)].c0 * P2LV[n]); };
const p2Gal = () => 2 ** S.p2.gal.length;
const p2All = () => { let m = p2Gal(); for (const u of P2UP) if (u.all && p2has(u.id)) m *= u.all; return m; };
const p2ColMul = c => { let m = 1; for (const u of P2UP) if (u.col && u.col[0] === c && p2has(u.id)) m *= u.col[1]; return m; };
// production of each cell, with the reason, read by the totals and the hover box
let P2V = { tot: 0, cell: [] };
function p2Calc() {
  const p = S.p2, k = p2k(), g = p.grid, W = k.W, H = k.H, n = g.length;
  const at = (x, y) => (x < 0 || y < 0 || x >= W || y >= H ? null : g[y * W + x]);
  const boost = new Float64Array(n).fill(1), cell = new Float64Array(n);
  const N4 = [[1, 0], [-1, 0], [0, 1], [0, -1]], N8 = [...N4, [1, 1], [1, -1], [-1, 1], [-1, -1]];
  // the Pixel doubles its neighbours, batteries boost theirs while charged
  const px = k.pi % W, py = k.pi / W | 0;
  for (const [dx, dy] of N4) if (at(px + dx, py + dy)) boost[(py + dy) * W + px + dx] += 1;
  for (let i = 0; i < n; i++) if (g[i] === `i`) { const ch = p.bat[i] ?? 1, x = i % W, y = i / W | 0; for (const [dx, dy] of N8) if (at(x + dx, y + dy)) boost[(y + dy) * W + x + dx] += 0.5 * ch; }
  // hill patches
  const grp = new Int32Array(n), seen = new Uint8Array(n);
  for (let i = 0; i < n; i++) if (g[i] === `h` && !seen[i]) {
    const st = [i], mem = []; seen[i] = 1;
    while (st.length) { const j = st.pop(); mem.push(j); const x = j % W, y = j / W | 0; for (const [dx, dy] of N4) { const q = (y + dy) * W + x + dx; if (at(x + dx, y + dy) === `h` && !seen[q]) { seen[q] = 1; st.push(q); } } }
    for (const j of mem) grp[j] = mem.length;
  }
  let tot = 0;
  for (let i = 0; i < n; i++) {
    const c = g[i];
    if (!c || c === `P`) continue;
    const x = i % W, y = i / W | 0;
    let v = P2CI[c].b;
    if (c === `g`) { let r = 1; for (let a = x - 1; at(a, y) === `g`; a--) r++; for (let a = x + 1; at(a, y) === `g`; a++) r++; v *= 1 + 0.25 * (r - 1); }
    else if (c === `w`) { if (N4.some(([dx, dy]) => !at(x + dx, y + dy))) v *= 2; }
    else if (c === `c`) { const s = new Set(); for (const [dx, dy] of N8) { const o = at(x + dx, y + dy); if (o && o !== `c`) s.add(o); } v *= 1 + 0.5 * s.size; }
    else if (c === `b`) { if (p.crash[i] > 0) v = 0; }
    else if (c === `h`) v *= 1 + 0.1 * (Math.min(grp[i], 60) - 1);
    else if (c === `i`) v *= Math.max(0.05, p.bat[i] ?? 1);
    else if (c === `q`) v *= p.roll;
    const t = k.tgt[i];
    v *= (t === c ? 2 : t ? 0.5 : 1) * boost[i] * p2ColMul(c);
    cell[i] = v; tot += v;
  }
  const m = p2All();
  for (let i = 0; i < n; i++) cell[i] *= m;
  P2V = { tot: tot * m, cell, boost };
  return P2V;
}
const p2ps = () => P2V.tot;
function p2ClickPow() {
  let c = p2Gal();
  for (const u of P2UP) if (u.c && p2has(u.id)) c *= u.c;
  if (p2has(`cps`)) c += p2ps() * 0.05;
  return c;
}
function p2Gain(n) { S.p2.px += n; S.p2.tot += n; }
const p2Like = () => { const k = p2k(), g = S.p2.grid; let ok = 0; for (let i = 0; i < g.length; i++) if (k.tgt[i] && g[i] === k.tgt[i]) ok++; return ok; };
const p2Done = () => !p2pic().free && p2Like() >= p2k().total;

// ---------- painting ----------
function p2Paint(i, c, free) {
  const p = S.p2, k = p2k();
  if (i < 0 || i >= p.grid.length || p.grid[i] || !c || !p2open(c)) return false;
  if (!free) { const cost = p2Cost(c); if (p.px < cost) return false; p.px -= cost; }
  p.grid[i] = c; p.placed++;
  if (c === `i`) p.bat[i] = 1;
  if (k.tgt[i] && k.tgt[i] !== c) p2Once(`wrong`);
  p2Fx(i, P2CI[c].hex);
  return true;
}
// the colour a click paints: the model's colour with paint by numbers, else the one selected
const p2ColFor = i => (p2has(`num`) && p2k().tgt[i] && p2open(p2k().tgt[i]) ? p2k().tgt[i] : S.p2.sel);
function p2PaintAt(i) {
  const k = p2k(), ok = p2Paint(i, p2ColFor(i));
  if (!ok) return false;
  if (S.p2.sym && p2has(`sym`)) { const x = i % k.W, y = i / k.W | 0, j = y * k.W + (k.W - 1 - x); if (j !== i) p2Paint(j, p2ColFor(j)); }
  return true;
}
function p2Erase(i) {
  const p = S.p2, c = p.grid[i];
  if (!c || c === `P`) return;
  p.grid[i] = ``; delete p.bat[i]; delete p.crash[i];
  p.px += Math.floor(p2Cost(c) * 0.5);
}
// the bucket: every empty cell of the same model colour, connected to this one
function p2Fill(i) {
  const p = S.p2, k = p2k(), c = k.tgt[i];
  if (!c || p.grid[i] || !p2open(c)) return p2PaintAt(i);
  const st = [i], seen = new Set([i]);
  let n = 0;
  while (st.length) {
    const j = st.pop();
    if (!p2Paint(j, c)) { if (!p.grid[j]) break; } else n++;
    const x = j % k.W, y = j / k.W | 0;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const a = x + dx, b = y + dy, q = b * k.W + a;
      if (a >= 0 && b >= 0 && a < k.W && b < k.H && !seen.has(q) && k.tgt[q] === c && !p.grid[q]) { seen.add(q); st.push(q); }
    }
  }
  if (n) p2Once(`pot`);
  return n > 0;
}
// clicking a painted cell: charge a battery, reboot a blue screen
function p2Poke(i, e) {
  const p = S.p2, c = p.grid[i];
  if (c === `i`) { p.bat[i] = 1; return; }
  if (c === `b` && p.crash[i] > 0) {
    delete p.crash[i]; p.reboots++;
    const n = Math.max(p2ps() * 10, p2ClickPow() * 10);
    p2Gain(n); fx(e, `+` + fmtR(n)); toast(fill(T(X8.reboot), { n: fmt(n) }));
  }
}
function p2ClickPixel(e) {
  const p = S.p2, n = p2ClickPow();
  p2Gain(n); p.clicks++; S.clicks++; fx(e, `+` + fmtR(n));
  for (const i in p.bat) p.bat[i] = Math.min(1, p.bat[i] + 0.03);
  p2Pulse = 1;
}

// ---------- the clock ----------
let p2Act = 0;
function p2Tick(dt) {
  if (!S.p2 || !$(`p2`)) return;
  const p = S.p2, k = p2k(), g = p.grid;
  if (p.fin === 1) return;
  p2Calc();
  p2Gain(p2ps() * dt);
  const drain = (p2has(`i2`) ? 0.5 : 1) / 120;
  for (const i in p.bat) { p.bat[i] = Math.max(0, p.bat[i] - drain * dt); if (p.bat[i] < 0.15) p2Once(`low`); }
  for (const i in p.crash) if ((p.crash[i] -= dt) <= 0) delete p.crash[i];
  // the blue screens crash now and then
  const blues = g.map((c, i) => (c === `b` && !p.crash[i] ? i : -1)).filter(i => i >= 0);
  if (blues.length && (p.crashT -= dt) <= 0) { p.crashT = (p2has(`b2`) ? 80 : 40) * rnd(0.7, 1.3); p.crash[blues[Math.random() * blues.length | 0]] = 20; p2Once(`crash`); }
  // God rolls the die for the qubits
  if ((p.rollT -= dt) <= 0) {
    p.rollT = 5;
    const f = p2has(`q2`) ? [1, 1.5, 2, 3, 4] : [0, 0.5, 1, 1, 1.5, 2, 3, 4];
    p.roll = f[Math.random() * f.length | 0];
    if (p.roll === 0 && g.includes(`q`)) { p2Once(`zero`); S.st.p2zero = 1; }
  }
  // Copixel paints missing cells
  const no = p2Count(`o`);
  if (no && (p.copT += dt * no * (p2has(`o2`) ? 2 : 1)) >= 30) {
    p.copT = 0;
    const miss = g.map((c, i) => (!c && k.tgt[i] && p2open(k.tgt[i]) ? i : -1)).filter(i => i >= 0);
    if (miss.length) {
      const i = miss[Math.random() * miss.length | 0];
      p2Paint(i, k.tgt[i], true);
      if (!p.seen.cop) p2Once(`cop`); else if (Math.random() < 0.15) p2Say(X8.cops[Math.random() * X8.cops.length | 0]);
    }
  }
  p2Bugs(dt);
  if (p2Done()) p2Once(`done`);
  S.st.p2placed = p.placed;
}
// bugs walk to a painted cell and eat it, unless squashed. They only come out when someone is looking.
function p2Bugs(dt) {
  const p = S.p2, k = p2k(), g = p.grid;
  const painted = () => g.map((c, i) => (c && c !== `P` ? i : -1)).filter(i => i >= 0);
  if (p.pic >= 1 && !p2pic().free && performance.now() - p2Act < 90000 && (p.bugT -= dt) <= 0) {
    p.bugT = rnd(45, 80);
    const l = painted();
    if (l.length >= 5 && p.bugs.length < 1 + Math.floor(p.pic / 3)) {
      const side = Math.random() * 4 | 0, r = Math.random();
      const x = side === 0 ? -0.5 : side === 1 ? k.W - 0.5 : r * k.W, y = side === 2 ? -0.5 : side === 3 ? k.H - 0.5 : r * k.H;
      p.bugs.push({ x, y, to: -1, eat: 0, age: 0, a: 0 });
      p2Once(`bug`);
    }
  }
  const sp = (p2has(`debug`) ? 0.25 : 0.5) * dt;
  for (const b of p.bugs) {
    b.age += dt;
    if (!g[b.to] || g[b.to] === `P`) {
      const l = painted();
      if (!l.length) { b.gone = 1; continue; }
      b.to = l.reduce((a, i) => (Math.hypot(i % k.W - b.x, (i / k.W | 0) - b.y) < Math.hypot(a % k.W - b.x, (a / k.W | 0) - b.y) ? i : a), l[0]);
      b.eat = 0;
    }
    const tx = b.to % k.W, ty = b.to / k.W | 0, d = Math.hypot(tx - b.x, ty - b.y);
    b.a = Math.atan2(ty - b.y, tx - b.x);
    if (d > 0.05) { const s = Math.min(sp, d); b.x += (tx - b.x) / d * s; b.y += (ty - b.y) / d * s; }
    else if ((b.eat += dt) >= 6) { g[b.to] = ``; delete p.bat[b.to]; delete p.crash[b.to]; b.eat = 0; p2Once(`ate`); }
    if (p2has(`tests`) && b.age > 20) b.gone = 1;
  }
  p.bugs = p.bugs.filter(b => !b.gone);
}
function p2Squash(b, e) {
  const p = S.p2, n = Math.max(p2ps() * 15, p2ClickPow() * 10);
  b.gone = 1; p.bugs = p.bugs.filter(x => !x.gone); p.squash++; S.st.p2squash = p.squash;
  p2Gain(n); fx(e, `+` + fmtR(n)); toast(fill(T(X8.squash), { n: fmt(n) }));
}

// ---------- enter and leave ----------
async function p2Enter() {
  if (!p2Unlocked()) return;
  if ($(`tree`)) $(`tree`).classList.remove(`on`);
  busy = true;
  if (!S.p2) {
    if (!$(`fin`)) document.body.insertAdjacentHTML(`beforeend`, `<div id="fin"><div id="finT"></div></div>`);
    $(`fin`).classList.add(`on`, `p2i`); $(`finT`).innerHTML = ``;
    for (const l of X8.intro) { const d = document.createElement(`div`); d.textContent = T(l); d.className = /^(THE DEV|LE DEV)/.test(T(l)) ? `dev` : ``; $(`finT`).appendChild(d); await wait(T(l).length * 30 + 700); }
    await wait(1000);
    $(`fin`).classList.remove(`p2i`);
  }
  modeSwitch(8);
}
// go to a side game: the run of the main game waits in S.back, untouched, until you come back
function modeSwitch(era) {
  if (S.era < 8) {
    const back = {};
    for (const k of Object.keys(eraFresh(0))) back[k] = S[k];
    S.back = JSON.parse(JSON.stringify(back));
  }
  Object.assign(S, eraFresh(era));
  restart(S);
}
function p2Leave() {
  const b = S.back;
  if (b) Object.assign(S, b); else Object.assign(S, eraFresh(0), { z: Object.assign(S.z, { paid: 1, seen: { boot: 1 } }) });
  S.back = null;
  restart(S);
}
function p2Start() {
  if (!S.p2) { S.p2 = p2Fresh(); p2Board(); S.st.p2 = 1; }
  if (!S.p2.grid.length) p2Board();
  const p = S.p2;
  p.bugs = []; if (p.fin === 1) p.fin = 2;
  if (p.fin && p.pic === P2LAST) { p.pic = P2LAST + 1; p2Board(); }
  p2Mount();
  p2Calc();
  const away = (Date.now() - S.last) / 1000;
  setTimeout(p3Tell, 1500);
  if (away > 60 && p2ps() > 0) {
    const n = p2ps() * Math.min(away, 8 * 3600) * (p2has(`off`) ? 1 : 0.5);
    p2Gain(n); dlg(fill(T(X8.away), { t: dur(away), n: fmt(n) }));
  }
}

// ---------- actions ----------
const P2A = {
  p2sel(c) { if (p2open(c)) { S.p2.sel = c; if (S.p2.tool === `erase`) S.p2.tool = `paint`; } },
  p2tool(t) { if (t === `sym`) { if (p2has(`sym`)) S.p2.sym = S.p2.sym ? 0 : 1; return; } if (t === `pot` && !p2has(`pot`)) return; S.p2.tool = t; },
  p2buy(id) {
    const u = P2UP.find(x => x.id === id), p = S.p2;
    if (!u || p.up[id] || p.px < p2UpCost(u)) return;
    p.px -= p2UpCost(u); p.up[id] = 1;
    if (id === `pot`) p.tool = `pot`;
    if (id === `sym`) p.sym = 1;
  },
  p2sign() {
    const p = S.p2;
    if (!p2Done() || p.gal.some(g => g.pic === p.pic)) return;
    p.gal.push({ pic: p.pic, at: Date.now(), grid: p.grid.join(``) });
    for (const l of p2pic().outro) p2Say(l);
    toast(fill(T(X8.signed), { a: T(p2pic().t) }));
    S.st.p2gal = p.gal.length;
    if (p.pic === P2LAST) return p2Final();
    p.pic++;
    p2Board();
    if (P2C[p.pic]) toast(fill(T(X8.newCol), { a: T(P2C[p.pic].t) }));
  },
  p2gal() { p2Panel = p2Panel === `gal` ? `` : `gal`; },
  p2opt() { p2Panel = p2Panel === `opt` ? `` : `opt`; },
  p2close() { p2Panel = ``; },
  p2back() { p2Panel = ``; dlg(T(X8.backQ), { cancel: true, ok: p2Leave }); },
  p2about() { p2Panel = ``; dlg(T(X8.about)); },
  p2free() { const p = S.p2; $(`p2end`).classList.remove(`on`); busy = false; p.fin = 2; if (p.pic !== P2LAST + 1) { p.pic = P2LAST + 1; p2Board(); } },
  p2fin() { p2Panel = ``; busy = true; p2Credits(); },
};
let p2Panel = ``;
async function p2Final() {
  const p = S.p2;
  busy = true; p.fin = 1; S.st.p2fin = 1; save();
  const el = $(`p2end`), box = el.querySelector(`.p2et`);
  el.classList.add(`on`); box.innerHTML = ``;
  const n = p.gal.reduce((s, x) => s + [...x.grid].filter(c => c && c !== `P` && c !== `.`).length, 0);
  for (const l of X8.fin) {
    const d = document.createElement(`div`), t = fill(T(l), { n: fmt(n) });
    d.textContent = t; d.className = /^(THE DEV|LE DEV)/.test(t) ? `dev` : /^COPIXEL/.test(t) ? `cop` : /^(THE CAT|LE CHAT)/.test(t) ? `cat` : ``;
    box.appendChild(d); await wait(t.length * 35 + 900);
  }
  await wait(1200);
  p2Credits();
  p.fin = 2; save();
}
function p2Credits() {
  const p = S.p2, el = $(`p2end`);
  const n = p.gal.reduce((s, x) => s + [...x.grid].filter(c => c && c !== `P` && c !== `.`).length, 0);
  el.classList.add(`on`);
  el.querySelector(`.p2et`).innerHTML = `<div class="big">${T(X8.thanks)}</div><pre>${esc(fill(T(X8.credits), { n: fmt(n), b: fmt(p.squash), t: dur(S.time) }))}</pre><div class="fb"><button class="p2b on" data-act="p2free">${T(X8.freeGo)}</button>${p3Unlocked() ? `<button class="p2b on" data-act="p3go">PIXEL-OS 3 →</button>` : ``}<button class="p2b" data-act="p2back">${T(X8.back)}</button></div>`;
}

// ---------- screen ----------
const P2SVG = {
  paint: `<svg viewBox="0 0 16 16"><path d="M11 1h2v2h2v2h-2v2h-2v2H9v2H7V9h2V7h2V5h2V3h-2z" fill="currentColor"/><path d="M3 11h4v2H5v2H1v-2h2z" fill="currentColor"/></svg>`,
  erase: `<svg viewBox="0 0 16 16"><path d="M9 2h2v2h2v2h2v2h-2v2h-2v2H9v2H3v-2H1v-2h2V8h2V6h2V4h2z" fill="currentColor" opacity=".35"/><path d="M3 10h4v2h2v2H3v-2H1v-2z" fill="currentColor"/></svg>`,
  pot: `<svg viewBox="0 0 16 16"><path d="M5 2h2v2h2v2h2v2h2v2h-2v2H9v2H7v-2H5v-2H3V8H1V6h2V4h2z" fill="currentColor"/><path d="M13 10h2v4h-2z" fill="currentColor"/></svg>`,
  sym: `<svg viewBox="0 0 16 16"><path d="M7 1h2v14H7z" fill="currentColor"/><path d="M1 5h2v2h2v2H3v2H1zM15 5h-2v2h-2v2h2v2h2z" fill="currentColor"/></svg>`,
};
function p2Mount() {
  if ($(`p2`)) return;
  document.body.insertAdjacentHTML(`beforeend`, `<div id="p2">
<div class="p2top"><div class="p2logo"><i></i><i></i><b>PIXEL-OS 2</b></div><div class="p2title" id="p2title"></div><div class="p2money"><b id="p2px"></b><span id="p2ps"></span></div><div class="p2btns" id="p2btns"></div></div>
<div class="p2body">
<aside class="p2pal"><h3 id="p2palH"></h3><div id="p2tools" class="p2tools"></div><div id="p2cols"></div></aside>
<main class="p2main"><div class="p2stage" id="p2stage"><canvas id="p2cv"></canvas></div><div class="p2under"><div id="p2prog"></div><div id="p2info"></div></div></main>
<aside class="p2side"><h3 id="p2upH"></h3><div id="p2ups"></div><h3 id="p2chatH"></h3><div id="p2chat"></div></aside>
</div>
<div id="p2pan"></div>
<div id="p2end"><div class="p2et"></div></div>
</div>`);
  p2Bind();
}
const p2Swatch = c => `<i class="sw sw-${c}"></i>`;
function p2Render() {
  if (!S.p2 || !$(`p2`)) return;
  const p = S.p2, k = p2k(), pic = p2pic();
  setH(`p2title`, pic.free ? `<b>${T(pic.t)}</b>` : `<span>${fill(T(X8.pic), { n: p.pic + 1 })}</span><b>${T(pic.t)}</b>`);
  setH(`p2px`, fmt(p.px) + `<small> ${T(X8.unit)}</small>`);
  setH(`p2ps`, fill(T(X8.ps), { n: fmtR(p2ps()) }) + (p.grid.includes(`q`) ? ` · ` + fill(T(X8.roll), { m: String(p.roll).replace(`.`, S.lang === `fr` ? `,` : `.`) }) : ``));
  setH(`p2btns`, `<button class="p2b" data-act="p2gal">${T(X8.gal)} <em>${p.gal.length}/9</em></button><button class="p2b" data-act="p2opt">${T(X8.opt)}</button>`);
  setH(`p2palH`, T(X8.palette));
  const tl = t => `<button class="p2tl${(t === `sym` ? p.sym : p.tool === t) ? ` on` : ``}" data-act="p2tool:${t}" title="${T(X8.tools[t])}">${P2SVG[t]}<span>${T(X8.tools[t])}</span></button>`;
  setH(`p2tools`, tl(`paint`) + tl(`erase`) + (p2has(`pot`) ? tl(`pot`) : ``) + (p2has(`sym`) ? tl(`sym`) : ``));
  setH(`p2cols`, P2C.map((c, i) => {
    if (!p2open(c.id)) return `<div class="p2col lock">${p2Swatch(`x`)}<div><b>???</b><small>${fill(T(X8.locked), { n: i + 1 })}</small></div></div>`;
    const cost = p2Cost(c.id), have = p2Count(c.id), left = (k.need[c.id] || 0) - p.grid.filter((g, j) => g === c.id && k.tgt[j] === c.id).length;
    return `<div class="p2col${p.sel === c.id ? ` on` : ``}${p.px < cost ? ` poor` : ``}" data-act="p2sel:${c.id}">${p2Swatch(c.id)}<div><b>${T(c.t)}</b><em>${fmt(cost)}</em>${p.sel === c.id ? `<small>${T(c.e)}</small>` : ``}<small class="p2n">${fill(T(pic.free ? X8.onCvFree : X8.onCv), { a: have, b: Math.max(0, left) })}</small></div></div>`;
  }).join(``));
  setH(`p2upH`, T(X8.shop));
  const ups = P2UP.filter(u => !p.up[u.id] && (u.need || 0) <= p.pic).sort((a, b) => p2UpCost(a) - p2UpCost(b)).slice(0, 5);
  setH(`p2ups`, ups.map(u => `<button class="p2up${p.px < p2UpCost(u) ? ` poor` : ``}" data-act="p2buy:${u.id}"><b>${T(u.t)}</b><em>${fmt(p2UpCost(u))}</em><small>${T(u.d)}</small></button>`).join(``) || `<p class="p2dim">…</p>`);
  setH(`p2chatH`, T(X8.chat));
  const ch = p.chat.slice(-14).map((l, j, a) => {
    const t = T(l), m = /^([A-ZÀ-Ý ]+) ?: (.*)$/s.exec(t), who = m ? m[1] : ``, cls = /COPIXEL/.test(who) ? `cop` : /CHAT|CAT/.test(who) ? `cat` : /MAMAN|MOM/.test(who) ? `mom` : `dev`;
    return `<p class="${cls}${j === a.length - 1 ? ` new` : ``}">${m ? `<b>${esc(who)}</b>${esc(m[2])}` : esc(t)}</p>`;
  }).join(``);
  const was = cache.p2chat;
  setH(`p2chat`, ch);
  if (cache.p2chat !== was) { const c = $(`p2chat`); c.scrollTop = c.scrollHeight; }
  // likeness and the signature
  if (pic.free) setH(`p2prog`, `<p class="p2dim">${T(X8.freeHow)}</p>`);
  else {
    const ok = p2Like(), pc = ok / k.total * 100;
    setH(`p2prog`, `<div class="p2bar"><span>${T(X8.like)}</span><div><i style="width:${pc}%"></i></div><b>${ok} / ${k.total}</b></div>` + (p2Done() ? `<button class="p2sign" data-act="p2sign">✍ ${T(X8.sign)}</button><p class="p2dim">${T(p.pic === P2LAST ? X8.lastHint : X8.signHint)}</p>` : p.pic === 0 && ok < 4 ? `<p class="p2dim">${T(X8.howTo)}</p>` : ``));
  }
  setH(`p2info`, p2InfoHtml());
  setH(`p2pan`, p2Panel === `gal` ? p2GalHtml() : p2Panel === `opt` ? p2OptHtml() : ``);
  $(`p2pan`).className = p2Panel ? `on ` + p2Panel : ``;
}
function p2InfoHtml() {
  const p = S.p2, k = p2k(), i = p2Hover;
  if (i < 0 || i >= p.grid.length) return ``;
  const c = p.grid[i], t = k.tgt[i], x = i % k.W + 1, y = (i / k.W | 0) + 1;
  if (c === `P`) return `<b>${fill(T(X8.cell), { x, y })}</b> · ${fill(T(X8.pixel), { n: fmtR(p2ClickPow()) })}`;
  let h = `<b>${fill(T(X8.cell), { x, y })}</b> · ${fill(T(X8.want), { a: t ? T(P2CI[t].t) : T(X8.none) })}`;
  if (c) {
    h += ` · ${p2Swatch(c)} ${T(P2CI[c].t)} : ${fill(T(X8.makes), { n: fmtR(P2V.cell[i] || 0) })} (${T(t === c ? X8.ok : t ? X8.bad : X8.off)})`;
    if (c === `b` && p.crash[i] > 0) h += ` · ${T(X8.crashed)}`;
    if (c === `i`) h += ` · ${fill(T(X8.charge), { n: Math.round((p.bat[i] ?? 1) * 100) })}`;
  } else if (t && p2open(t)) h += ` · ${fmt(p2Cost(p2ColFor(i)))}`;
  return h;
}
function p2GalHtml() {
  const p = S.p2;
  const fr = P2PICS.slice(0, P2LAST + 1).map((pic, j) => {
    const g = p.gal.find(x => x.pic === j), now = j === p.pic && !g;
    return `<div class="p2fr${g ? ` done` : now ? ` now` : ``}"><div class="p2cnv">${g || now ? `<canvas data-pic="${j}" data-grid="${g ? g.grid : ``}"></canvas>` : `<span>?</span>`}</div><b>${g || now ? T(pic.t) : `???`}</b><small>${g ? T(X8.galDone) + ` · x2` : now ? T(X8.galNow) : ``}</small></div>`;
  }).join(``);
  return `<div class="p2box"><h2>${T(X8.galT)}</h2><p class="p2dim">${T(X8.galSub)}</p><div class="p2frs">${fr}</div><button class="p2b" data-act="p2close">${T(X8.close)}</button></div>`;
}
function p2OptHtml() {
  const o = (a, t) => `<button class="p2mi" data-act="${a}">${t}</button>`;
  return `<div class="p2box p2menu">` + o(`p2back`, `↩ ${T(X8.back)}`) + o(`save`, U().save || T([`Save`, `Sauvegarder`])) + o(`lang`, `English / Français`)
    + o(`sci`, `[${S.opt.sci ? `x` : ` `}] ${T(X8.sci)}`) + o(`anim`, `[${S.opt.anim ? `x` : ` `}] ${T(X8.anim)}`)
    + o(`exp`, T([`Export the save`, `Exporter la sauvegarde`])) + o(`imp`, T([`Import a save`, `Importer une sauvegarde`]))
    + (p3Unlocked() ? o(`p3go`, `📈 PIXEL-OS 3`) : ``) + (S.p2.fin ? o(`p2fin`, T(X8.again)) : ``) + o(`p2about`, T([`About`, `À propos`])) + o(`hard`, T([`Erase everything`, `Tout effacer`])) + o(`p2close`, T(X8.close)) + `</div>`;
}

// ---------- the canvas ----------
let p2Hover = -1, p2Pulse = 0, p2Cell = 32, p2Drag = null;
const P2FX = [];
function p2Fx(i, col) { P2FX.push({ i, col, t: 0 }); }
function p2CellAt(e) {
  const cv = $(`p2cv`), r = cv.getBoundingClientRect(), k = p2k();
  const x = Math.floor((e.clientX - r.left) / p2Cell), y = Math.floor((e.clientY - r.top) / p2Cell);
  return x < 0 || y < 0 || x >= k.W || y >= k.H ? -1 : y * k.W + x;
}
function p2Bind() {
  const cv = $(`p2cv`);
  cv.addEventListener(`contextmenu`, e => e.preventDefault());
  cv.addEventListener(`pointerdown`, e => {
    if (busy || S.era !== 8) return;
    p2Act = performance.now();
    const p = S.p2, k = p2k(), r = cv.getBoundingClientRect();
    const fx0 = (e.clientX - r.left) / p2Cell - 0.5, fy0 = (e.clientY - r.top) / p2Cell - 0.5;
    const b = p.bugs.find(b => Math.hypot(b.x - fx0, b.y - fy0) < 0.6);
    if (b) { p2Squash(b, e); return render(); }
    const i = p2CellAt(e);
    if (i < 0) return;
    if (p.grid[i] === `P`) { p2ClickPixel(e); return render(); }
    const erase = e.button === 2 || p.tool === `erase`;
    if (erase) { p2Erase(i); p2Drag = `erase`; }
    else if (p.grid[i]) p2Poke(i, e);
    else {
      const ok = p.tool === `pot` ? p2Fill(i) : p2PaintAt(i);
      if (!ok && p2open(p2ColFor(i))) toast(T(X8.poor));
      p2Drag = p.tool === `pot` ? null : `paint`;
    }
    cv.setPointerCapture(e.pointerId);
    render();
  });
  cv.addEventListener(`pointermove`, e => {
    p2Act = performance.now();
    const i = p2CellAt(e);
    p2Hover = i;
    if (!p2Drag || i < 0 || busy) return;
    const p = S.p2;
    if (p2Drag === `erase`) p2Erase(i); else if (!p.grid[i]) p2PaintAt(i);
  });
  cv.addEventListener(`pointerup`, () => { p2Drag = null; });
  addEventListener(`pointermove`, () => { p2Act = performance.now(); });
  cv.addEventListener(`pointerleave`, () => { p2Hover = -1; });
}
let p2T = 0;
function p2Frame(now) {
  if (S.era !== 8 || !S.p2 || !$(`p2cv`)) return;
  const cv = $(`p2cv`), st = $(`p2stage`), k = p2k(), p = S.p2, dpr = devicePixelRatio || 1;
  const cell = Math.max(8, Math.floor(Math.min((st.clientWidth - 28) / k.W, (st.clientHeight - 28) / k.H, 56)));
  if (cell !== p2Cell || cv.width !== k.W * cell * dpr || cv.height !== k.H * cell * dpr) {
    p2Cell = cell; cv.width = k.W * cell * dpr; cv.height = k.H * cell * dpr;
    cv.style.width = k.W * cell + `px`; cv.style.height = k.H * cell + `px`;
  }
  const dt = Math.min(0.1, (now - (p2T || now)) / 1000); p2T = now;
  const t = S.opt.anim ? now / 1000 : 0, x = cv.getContext(`2d`);
  x.setTransform(dpr, 0, 0, dpr, 0, 0);
  x.fillStyle = `#0d0f22`; x.fillRect(0, 0, k.W * cell, k.H * cell);
  // the grid
  x.strokeStyle = `rgba(120,130,220,.08)`; x.lineWidth = 1; x.beginPath();
  for (let a = 1; a < k.W; a++) { x.moveTo(a * cell + 0.5, 0); x.lineTo(a * cell + 0.5, k.H * cell); }
  for (let a = 1; a < k.H; a++) { x.moveTo(0, a * cell + 0.5); x.lineTo(k.W * cell, a * cell + 0.5); }
  x.stroke();
  if (p.sym && p2has(`sym`)) { x.strokeStyle = `rgba(255,255,255,.18)`; x.setLineDash([4, 4]); x.beginPath(); x.moveTo(k.W * cell / 2, 0); x.lineTo(k.W * cell / 2, k.H * cell); x.stroke(); x.setLineDash([]); }
  for (let i = 0; i < p.grid.length; i++) p2DrawCell(x, i, cell, t);
  // fresh paint flashes
  for (const f of P2FX) {
    f.t += dt;
    const cx = (f.i % k.W) * cell, cy = (f.i / k.W | 0) * cell, a = 1 - f.t / 0.4;
    if (a > 0 && S.opt.anim) { x.strokeStyle = f.col; x.globalAlpha = a; x.lineWidth = 2; const g = (1 - a) * cell * 0.3; x.strokeRect(cx - g + 1, cy - g + 1, cell + 2 * g - 2, cell + 2 * g - 2); x.globalAlpha = 1; }
  }
  for (let j = P2FX.length - 1; j >= 0; j--) if (P2FX[j].t > 0.4) P2FX.splice(j, 1);
  for (const b of p.bugs) p2DrawBug(x, b, cell, t);
  if (p2Hover >= 0 && p2Hover < p.grid.length) {
    const hx = (p2Hover % k.W) * cell, hy = (p2Hover / k.W | 0) * cell;
    x.strokeStyle = `rgba(255,255,255,.75)`; x.lineWidth = 2; x.strokeRect(hx + 1, hy + 1, cell - 2, cell - 2);
  }
  p2Pulse = Math.max(0, p2Pulse - dt * 4);
  if (p2Panel === `gal`) p2GalDraw();
}
function p2Shade(hex, f) {
  const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  const m = v => Math.round(f > 0 ? v + (255 - v) * f : v * (1 + f));
  return `rgb(${m(r)},${m(g)},${m(b)})`;
}
function p2DrawCell(x, i, s, t) {
  const p = S.p2, k = p2k(), c = p.grid[i], tg = k.tgt[i], X = (i % k.W) * s, Y = (i / k.W | 0) * s;
  if (c === `P`) {
    const pu = p2Pulse, g = s * (0.12 - pu * 0.06), gl = 10 + 6 * Math.sin(t * 3) + pu * 14;
    x.save(); x.shadowColor = `#fff`; x.shadowBlur = gl; x.fillStyle = `#fff`; x.fillRect(X + g, Y + g, s - 2 * g, s - 2 * g); x.restore();
    return;
  }
  if (!c) {
    if (!tg) return;
    const col = P2CI[tg].hex, open = p2open(tg), d = s * (p2Hover === i ? 0.46 : 0.3);
    x.globalAlpha = open ? (p2Hover === i ? 0.75 : 0.42) : 0.15;
    x.fillStyle = col; x.fillRect(X + (s - d) / 2, Y + (s - d) / 2, d, d);
    x.globalAlpha = 1;
    return;
  }
  const col = P2CI[c].hex, off = tg ? 0 : Math.max(1, s * 0.08);
  const X0 = X + off, Y0 = Y + off, S0 = s - 2 * off;
  x.fillStyle = col; x.fillRect(X0, Y0, S0, S0);
  // bevel
  const bw = Math.max(1, s * 0.07);
  x.fillStyle = p2Shade(col, 0.35); x.fillRect(X0, Y0, S0, bw); x.fillRect(X0, Y0, bw, S0);
  x.fillStyle = p2Shade(col, -0.35); x.fillRect(X0, Y0 + S0 - bw, S0, bw); x.fillRect(X0 + S0 - bw, Y0, bw, S0);
  const u = S0 / 8;
  if (c === `g`) { x.fillStyle = `rgba(0,40,10,.35)`; for (let r = 2; r < 8; r += 2) x.fillRect(X0 + bw, Y0 + r * u, S0 - 2 * bw, Math.max(1, u * 0.5)); x.globalAlpha = 0.12 + 0.08 * Math.sin(t * 2 + i); x.fillStyle = `#fff`; x.fillRect(X0, Y0, S0, S0); x.globalAlpha = 1; }
  else if (c === `c`) { const on = Math.sin(t * 6 + i * 1.7) > 0; x.fillStyle = on ? `#eaffff` : p2Shade(col, -0.5); x.fillRect(X0 + S0 - 3 * u, Y0 + 2 * u, u * 1.4, u * 1.4); }
  else if (c === `b`) {
    if (p.crash[i] > 0) {
      x.fillStyle = `#fff`; x.font = `bold ${Math.round(S0 * 0.55)}px ui-monospace,monospace`; x.textAlign = `center`; x.textBaseline = `middle`;
      x.fillText(`:(`, X0 + S0 / 2, Y0 + S0 / 2 + 1);
      x.globalAlpha = 0.5 + 0.5 * Math.sin(t * 8); x.strokeStyle = `#fff`; x.lineWidth = 2; x.strokeRect(X0 + 1, Y0 + 1, S0 - 2, S0 - 2); x.globalAlpha = 1;
    } else { x.fillStyle = `rgba(255,255,255,.55)`; x.fillRect(X0 + 2 * u, Y0 + 3 * u, 4 * u, Math.max(1, u * 0.6)); x.fillRect(X0 + 2 * u, Y0 + 4.6 * u, 3 * u, Math.max(1, u * 0.6)); }
  }
  else if (c === `h`) { x.fillStyle = p2Shade(col, 0.18); x.fillRect(X0 + bw, Y0 + bw, S0 - 2 * bw, u * 2); x.fillStyle = p2Shade(col, -0.15); x.fillRect(X0 + 2 * u, Y0 + 5 * u, u, u); x.fillRect(X0 + 5 * u, Y0 + 4 * u, u, u); }
  else if (c === `i`) {
    const ch = p.bat[i] ?? 1;
    x.fillStyle = `rgba(0,0,0,.35)`; x.fillRect(X0 + u, Y0 + S0 - 2.2 * u, S0 - 2 * u, u * 1.2);
    x.fillStyle = ch > 0.5 ? `#5dff6a` : ch > 0.2 ? `#ffd23f` : `#ff4d4d`; x.fillRect(X0 + u, Y0 + S0 - 2.2 * u, (S0 - 2 * u) * ch, u * 1.2);
    if (ch < 0.2 && Math.sin(t * 6) > 0) { x.fillStyle = `#ff4d4d`; x.fillRect(X0 + 3.5 * u, Y0 + 1.5 * u, u, 2.5 * u); x.fillRect(X0 + 3.5 * u, Y0 + 4.5 * u, u, u * 0.8); }
  }
  else if (c === `o`) {
    // two little eyes that follow the pixel
    const px = (k.pi % k.W) * s + s / 2, py = (k.pi / k.W | 0) * s + s / 2, a = Math.atan2(py - Y0 - S0 / 2, px - X0 - S0 / 2), ox = Math.cos(a) * u * 0.5, oy = Math.sin(a) * u * 0.5;
    x.fillStyle = `#fff`; x.fillRect(X0 + 2 * u, Y0 + 3 * u, 1.6 * u, 1.6 * u); x.fillRect(X0 + 4.4 * u, Y0 + 3 * u, 1.6 * u, 1.6 * u);
    x.fillStyle = `#2a1400`; x.fillRect(X0 + 2.4 * u + ox, Y0 + 3.4 * u + oy, 0.8 * u, 0.8 * u); x.fillRect(X0 + 4.8 * u + ox, Y0 + 3.4 * u + oy, 0.8 * u, 0.8 * u);
  }
  else if (c === `q`) { x.globalAlpha = 0.25 + 0.25 * Math.sin(t * 4 + i); x.fillStyle = `#fff`; const sx = (Math.sin(t * 1.3 + i) * 0.5 + 0.5) * (S0 - 2 * u); x.fillRect(X0 + u + sx, Y0 + 2 * u, u, u); x.fillRect(X0 + S0 - 2 * u - sx, Y0 + 5 * u, u, u); x.globalAlpha = 1; if (p.roll === 0) { x.fillStyle = `rgba(13,15,34,.55)`; x.fillRect(X0, Y0, S0, S0); } }
  // a wrong colour on the model: the right one shows in a corner
  if (tg && tg !== c) { x.fillStyle = P2CI[tg].hex; x.beginPath(); x.moveTo(X0 + S0, Y0); x.lineTo(X0 + S0, Y0 + S0 * 0.38); x.lineTo(X0 + S0 - S0 * 0.38, Y0); x.fill(); x.strokeStyle = `#0d0f22`; x.lineWidth = 1; x.stroke(); }
}
function p2DrawBug(x, b, s, t) {
  const cx = (b.x + 0.5) * s, cy = (b.y + 0.5) * s, r = s * 0.22, w = S.opt.anim ? Math.sin(t * 18) * r * 0.25 : 0;
  x.save(); x.translate(cx, cy); x.rotate(b.a);
  x.strokeStyle = `#1a0a0a`; x.lineWidth = Math.max(1, s * 0.04);
  for (const sd of [-1, 1]) for (const k of [-0.6, 0, 0.6]) { x.beginPath(); x.moveTo(k * r, 0); x.lineTo(k * r + (k === 0 ? w : -w) * sd, sd * r * 1.25); x.stroke(); }
  x.fillStyle = `#e8304a`; x.beginPath(); x.ellipse(0, 0, r, r * 0.75, 0, 0, Math.PI * 2); x.fill();
  x.fillStyle = `#1a0a0a`; x.beginPath(); x.ellipse(r * 0.9, 0, r * 0.38, r * 0.38, 0, 0, Math.PI * 2); x.fill();
  x.fillRect(-r * 0.05, -r * 0.75, r * 0.1, r * 1.5);
  x.fillStyle = `#1a0a0a`; x.fillRect(-r * 0.5, -r * 0.35, r * 0.25, r * 0.25); x.fillRect(-r * 0.5, r * 0.15, r * 0.25, r * 0.25);
  x.restore();
  if (b.eat > 0 && S.opt.anim) { x.fillStyle = `rgba(255,255,255,.7)`; for (let j = 0; j < 3; j++) x.fillRect(cx + Math.sin(t * 9 + j * 2) * s * 0.3, cy + Math.cos(t * 7 + j) * s * 0.3, 2, 2); }
}
// the gallery shows each painting as it was signed
function p2GalDraw() {
  for (const cv of document.querySelectorAll(`#p2pan canvas[data-pic]`)) {
    const j = +cv.dataset.pic, k = P2K[j], grid = cv.dataset.grid ? [...cv.dataset.grid] : S.p2.grid;
    const s = Math.floor(Math.min(150 / k.W, 110 / k.H)), dpr = devicePixelRatio || 1;
    if (cv.width !== k.W * s * dpr) { cv.width = k.W * s * dpr; cv.height = k.H * s * dpr; cv.style.width = k.W * s + `px`; cv.style.height = k.H * s + `px`; }
    const x = cv.getContext(`2d`);
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    x.fillStyle = `#0d0f22`; x.fillRect(0, 0, k.W * s, k.H * s);
    grid.forEach((c, i) => { if (!c || c === `.`) return; x.fillStyle = c === `P` ? `#fff` : P2CI[c].hex; x.fillRect((i % k.W) * s, (i / k.W | 0) * s, s, s); });
  }
}

// ---------- era 8 ----------
NAME_FR_ERA[8] = {};
ERA[8] = {
  os: `PIXEL-OS 2`, year: 2027, unit: [`px`, `px`], mul: 1, start: { ram: 1 }, color: true,
  P: [{ id: `game`, file: `PIXEL-OS 2`, kb: 0, fixed: 1 }], PA: [], HW: [], D: {}, N: {}, LOGS: [],
  HELP: [[`Click the Pixel for paint, then paint the model.`, `Clique sur le Pixel pour avoir de la peinture, puis peins le modèle.`]],
  end: { c: Infinity, t: [`Finish`, `Finir`], d: [``, ``] },
  about: X8.about,
  A: P2A,
};

ACH.push(
  [`p2start`, [`The second pixel`, `Le deuxième pixel`], [`Start PIXEL-OS 2.`, `Démarrer PIXEL-OS 2.`], () => !!S.st.p2, 8],
  [`p2pic1`, [`Opening night`, `Vernissage`], [`Sign a first painting.`, `Signer un premier tableau.`], () => (S.st.p2gal || 0) >= 1, 8],
  [`p2pic5`, [`Exhibition`, `Exposition`], [`Sign 5 paintings.`, `Signer 5 tableaux.`], () => (S.st.p2gal || 0) >= 5, 8],
  [`p2bug`, [`Human debugger`, `Débogueur humain`], [`Squash 25 bugs.`, `Écraser 25 bugs.`], () => (S.st.p2squash || 0) >= 25, 8],
  [`p2k`, [`A thousand pixels`, `Mille pixels`], [`Place 1,000 pixels.`, `Poser 1 000 pixels.`], () => (S.st.p2placed || 0) >= 1000, 8],
  [`p2zero`, [`God lost`, `Dieu a perdu`], [`See God's die roll a 0.`, `Voir le dé de Dieu faire 0.`], () => !!S.st.p2zero, 8],
  [`p2fin`, [`Finished. Signed.`, `Fini. Signé.`], [`Sign the last painting.`, `Signer le dernier tableau.`], () => !!S.st.p2fin, 8],
);

MODES[8] = { start: () => p2Start(), tick: dt => p2Tick(dt), render: () => p2Render(), frame: now => p2Frame(now), reset() { if ($(`p2end`)) $(`p2end`).classList.remove(`on`); p2Panel = ``; } };
