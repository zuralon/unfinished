// Era 5: iBrick (2007). The computer is now a phone: one app on screen at a time, and a battery that every app drains.
const X5 = {
  plug: [`Charge`, `Charger`], unplug: [`Unplug`, `Débrancher`],
  short: [`The cable is too short. You can't tap while charging.`, `Le câble est trop court. Impossible de taper pendant la charge.`],
  hot: [`Your iBrick is warm. A battery kept plugged in at 100% wears out.`, `Ton iBrick chauffe. Une batterie laissée branchée à 100 % s'use.`],
  slow: [`Your battery is worn. The iBrick slows itself down to protect it. It's a feature.`, `Ta batterie est usée. L'iBrick se ralentit tout seul pour la ménager. C'est une fonctionnalité.`],
  health: [`Battery health: {n}%`, `Santé de la batterie : {n} %`], throttled: [`Performance reduced: x{n}`, `Performances réduites : x{n}`],
  newbat: [`Replace the battery ({c} px)`, `Remplacer la batterie ({c} px)`], newbatDone: [`New battery installed. Like new. For now.`, `Batterie neuve installée. Comme neuve. Pour l'instant.`],
  dead: [`Battery empty.\n\nThe iBrick turned off. Every app was closed.\nIt's charging now. It'll turn back on at 15%.`, `Batterie vide.\n\nL'iBrick s'est éteint. Toutes les applis ont été fermées.\nIl charge, maintenant. Il se rallumera à 15 %.`],
  deadScr: [`Charging... {n}%`, `Charge... {n} %`],
  notifs: [
    [`Pixel Farm: your crops are ready! Tap to harvest.`, `Pixel Farm : tes récoltes sont prêtes ! Touche pour récolter.`],
    [`Angry Pixels: the pigs stole your pixels! Tap to get them back.`, `Angry Pixels : les cochons ont volé tes pixels ! Touche pour les récupérer.`],
    [`Mom: "Are you eating well?" Tap to reply.`, `Maman : « Tu manges bien ? » Touche pour répondre.`],
    [`PixTok: someone you don't know posted a pixel. Tap to watch.`, `PixTok : quelqu'un que tu ne connais pas a posté un pixel. Touche pour regarder.`],
    [`Weather: it's raining pixels. Tap to collect.`, `Météo : il pleut des pixels. Touche pour ramasser.`],
    [`Daily bonus! Come back every day! (Tap.)`, `Bonus quotidien ! Reviens tous les jours ! (Touche.)`],
  ],
  notifGot: [`+{n} px`, `+{n} px`],
  upd: [`{a} needs to update. It stops producing while it updates.`, `{a} doit se mettre à jour. Il ne produit plus pendant la mise à jour.`],
  updNow: [`Updating... {n}%`, `Mise à jour... {n} %`],
  hkTitle: [`Locked file`, `Fichier verrouillé`], hkOpen: [`Unlock`, `Déverrouiller`], hkLast: [`Last file opened`, `Dernier fichier ouvert`],
  hkIntro: [`Find the password among these words. Each try tells you how many letters are in the right place.`, `Devine le mot de passe parmi les mots proposés. Chaque essai dit combien de lettres sont à la bonne place.`],
  hkWait: [`Too many tries. Wait {s} s.`, `Trop d'essais. Attends {s} s.`], hkTries: [`{n} tries left`, `{n} essais restants`],
  hkHints: [`Hints: each one removes a wrong word, or sometimes gives your tries back`, `Indices : chacun retire un mauvais mot, ou parfois rend les essais`],
  hkHist: [`Tries: letters in the right place (out of {n})`, `Essais : lettres à la bonne place (sur {n})`],
  hkDud: [`Hint: {w} was not it`, `Indice : ce n'était pas {w}`], hkReset: [`Hint: tries given back`, `Indice : essais rendus`],
  mtFull: [`Full screen`, `Plein écran`], mtSplit: [`Split View`, `Écran partagé`], mtSide: [`Close this side`, `Fermer ce côté`],
  pick: [`Pick a second app to put next to {a}.`, `Choisis une 2e appli à mettre à côté de {a}.`], cancel: [`Cancel`, `Annuler`],
  sw: [`Running apps`, `Applis lancées`], swHint2: [`Drag the cards sideways. Throw one up (or tap ×) to close it. Swipe up from the bottom edge to go home.`, `Fais glisser les cartes. Jette-en une vers le haut (ou touche ×) pour la fermer. Glisse depuis le bas de l'écran pour revenir à l'accueil.`], swHint0: [`Tap − to close an app. Tap an icon to open it.`, `Touche − pour fermer une appli. Touche une icône pour l'ouvrir.`],
  swHint: [`Drag the cards sideways. Throw one up (or tap ×) to close it. Tap a card to open it.`, `Fais glisser les cartes. Jette-en une vers le haut (ou touche ×) pour la fermer. Touche une carte pour l'ouvrir.`],
  updScore: [`{a}: updating ({s} s), not producing`, `{a} : mise à jour ({s} s), ne produit pas`], deadScore: [`Battery dead: nothing produces`, `Batterie à plat : rien ne produit`],
  later: [`Remind me later`, `Me le rappeler plus tard`],
  settings: [`Settings`, `Réglages`],
};
// 0 = iBrick (3G), 1 = iBrick 6, 2 = iBrick X, 3 = iSlab: bought with the bigger screens
const phoneLv = () => (S.patch.screen3 ? 3 : S.patch.screen2 ? 2 : S.patch.screen ? 1 : 0);

ERA[5] = {
  os: `iBrick OS`, skin: 5, year: 2007, unit: [`MB`, `Mo`], mul: 32, start: { ram: 8, bat: 800 }, color: true, allIcons: true,
  rn: { bat: [`BAT`, `BAT`] }, ru: { bat: [`mAh`, `mAh`] },
  bootT: [`Slide to unlock. (Just click.)`, `Glisser pour déverrouiller. (Clique, simplement.)`],
  about: [`iBrick OS 1.0\n(c) 2007 a company named after a fruit. We won't say which.\nWeight: 1.2 kg. Fits in a big pocket.\n\nA game by zuralon.`, `iBrick OS 1.0\n(c) 2007 une entreprise avec un nom de fruit qu'on ne citera pas.\nPoids : 1,2 kg. Rentre dans une grande poche.\n\nUn jeu de zuralon.`],
  click: () => (S.run.flash ? 2 : 1),
  simKeep: [],
  P: [
    { id: `game`, file: `Pixel`, kb: 2, bat: 20, fixed: 1 },
    { id: `install`, file: `App Store`, kb: 1, bat: 10 },
    { id: `settings`, get file() { return S ? T(X5.settings) : `Settings`; }, kb: 1, bat: 5, nostore: 1 },
    { id: `score`, file: `Score`, kb: 1, bat: 5, cost: 90 },
    { id: `notes`, file: `Messages`, kb: 1, bat: 8, cost: 150 },
    { id: `auto`, file: `Tap Tap`, kb: 1, bat: 30, cost: 300, multi: 1, k: 1.3, prod: 100 },
    { id: `help`, file: `Tips`, kb: 1, bat: 5, cost: 600 },
    { id: `trophy`, file: `Trophies`, kb: 1, bat: 5, cost: 1800 },
    { id: `clock`, file: `Clock`, kb: 1, bat: 3, cost: 3000 },
    { id: `calc`, file: `Calculator`, kb: 1, bat: 5, cost: 4500 },
    { id: `flash`, file: `Flashlight`, kb: 1, bat: 160, cost: 6000 },
    { id: `farm`, file: `Pixel Farm`, kb: 2, bat: 60, cost: 9000, multi: 1, k: 1.3, prod: 1500 },
    { id: `hack`, file: `Terminal`, kb: 2, bat: 20, cost: 20000 },
    { id: `saver`, file: `Night Shift`, kb: 1, bat: 10, cost: 80000 },
    { id: `birds`, file: `Angry Pixels`, kb: 4, bat: 150, cost: 900000, multi: 1, k: 1.3, prod: 25000 },
    { id: `tok`, file: `PixTok`, kb: 3, bat: 320, cost: 1.8e7, multi: 1, k: 1.3, prod: 3e5 },
    { id: `crush`, file: `Pixel Crush Saga`, kb: 6, bat: 200, cost: 5.9e8, multi: 1, k: 1.3, prod: 3.5e6 },
    { id: `cloud`, file: `PixCloud`, kb: 8, bat: 120, cost: 1.6e10, multi: 1, k: 1.3, prod: 4e7 },
  ],
  HW: [
    { r: `ram`, s: [{ to: 12, c: 40000 }, { to: 16, c: 1.2e6 }, { to: 24, c: 4e7 }, { to: 32, c: 1e9 }, { to: 48, c: 2.4e10 }, { to: 64, c: 2.4e11 }],
      t: [`Memory {a} -> {b}`, `Mémoire {a} -> {b}`], d: [`More apps in the background.`, `Plus d'applis en arrière-plan.`] },
    { r: `bat`, s: [{ to: 1200, c: 20000 }, { to: 1600, c: 600000 }, { to: 2000, c: 1.5e7 }, { to: 2600, c: 4.9e8 }, { to: 3200, c: 1.2e10 }, { to: 4000, c: 3.2e11 }],
      t: [`Battery {a} -> {b}`, `Batterie {a} -> {b}`], d: [`Lasts longer. Weighs more. The iBrick earns its name.`, `Tient plus longtemps. Pèse plus lourd. L'iBrick mérite son nom.`] },
  ],
  end: { c: 6e12, t: [`Answer the door`, `Ouvrir la porte`], d: [`Requires every hardware upgrade. Someone is knocking.`, `Nécessite toutes les améliorations matérielles. Quelqu'un frappe.`], go: [`Open`, `Ouvrir`] },
  MS: [[`m1m`, 1e6], [`m1b`, 1e9], [`m1t`, 1e12]],
  PA: [
    { id: `g3`, cost: 3.5e10, g: 1.5, t: [`3G`, `3G`], d: [`All production x1.5. Pixels load while you walk. Into lampposts.`, `Toute la production x1,5. Les pixels chargent pendant que tu marches. Dans les poteaux.`] },
    { id: `retina`, cost: 1.6e11, g: 1.5, t: [`Retina pixels`, `Pixels Retina`], d: [`All production x1.5. So small you can't see them. So many you don't care.`, `Toute la production x1,5. Si petits qu'on ne les voit pas. Si nombreux qu'on s'en fiche.`] },
    { id: `bgrefresh`, cost: 8e11, g: 1.5, t: [`Over-the-air update`, `Mise à jour sans fil`], d: [`All production x1.5. Downloaded overnight. Installed without asking.`, `Toute la production x1,5. Téléchargée pendant la nuit. Installée sans demander.`] },
    { id: `dualsim`, cost: 1.8e12, g: 1.5, t: [`Dual SIM`, `Double SIM`], d: [`All production x1.5. Two numbers. The dev ignores both.`, `Toute la production x1,5. Deux numéros. Le dev les ignore tous les deux.`] },
    { id: `screen`, cost: 30000, c: 2, t: [`Bigger screen: iBrick 6`, `Écran plus grand : iBrick 6`], d: [`Clicks x2. 4.7 inches, flat design, aluminum. It bends a little in your pocket.`, `Clics x2. 4,7 pouces, design plat, aluminium. Il plie un peu dans la poche.`] },
    { id: `screen2`, cost: 2.4e8, c: 2, t: [`Edge-to-edge screen: iBrick X`, `Écran bord à bord : iBrick X`], d: [`Clicks x2. No more home button. A notch instead. Swipe up. Forever.`, `Clics x2. Plus de bouton home. Une encoche à la place. Glisse vers le haut. Pour toujours.`] },
    { id: `screen3`, cost: 2.5e10, c: 2, t: [`Huge screen: iSlab`, `Écran géant : iSlab`], d: [`Clicks x2. A brick, but flat and huge. Two apps side by side. Fits in no pocket at all.`, `Clics x2. Une brique, mais plate et géante. Deux applis côte à côte. Ne rentre dans aucune poche.`] },
    { id: `auto1`, cost: 50000, req: `auto`, m: [`auto`, 2], t: [`Tap Tap Pro`, `Tap Tap Pro`], d: [`Tap Tap x2. 0.99 px. Worth it.`, `Tap Tap x2. 0,99 px. Ça les vaut.`] },
    { id: `charger`, cost: 100000, f: `fastcharge`, t: [`Fast charger`, `Chargeur rapide`], d: [`Charges twice as fast. Gets warm. That's normal. Probably.`, `Charge deux fois plus vite. Chauffe. C'est normal. Sûrement.`] },
    { id: `farm1`, cost: 300000, req: `farm`, m: [`farm`, 2], t: [`Fertilizer`, `Engrais`], d: [`Pixel Farm x2.`, `Pixel Farm x2.`] },
    { id: `stray2`, cost: 600000, f: `strayx3`, t: [`Pixel bounty`, `Prime aux pixels`], d: [`Good stray pixels are worth x3.`, `Les bons pixels égarés valent x3.`] },
    { id: `case`, cost: 1.2e6, c: 3, t: [`Rugged case`, `Coque renforcée`], d: [`Clicks x3. You can tap harder now.`, `Clics x3. Tu peux taper plus fort, maintenant.`] },
    { id: `night`, cost: 2.1e6, f: `noupdate`, t: [`Update at night`, `Mise à jour la nuit`], d: [`Apps no longer stop to update while you play.`, `Les applis ne s'arrêtent plus pour se mettre à jour pendant que tu joues.`] },
    { id: `auto2`, cost: 3e6, req: `auto`, m: [`auto`, 3], t: [`Tap Tap Gold`, `Tap Tap Gold`], d: [`Tap Tap x3.`, `Tap Tap x3.`] },
    { id: `offline`, cost: 4.5e6, req: `clock`, f: `offline`, t: [`Background refresh`, `Actualisation en arrière-plan`], d: [`Offline progress at 100% instead of 50%.`, `Progression hors ligne à 100 % au lieu de 50 %.`] },
    { id: `optcharge`, cost: 3e7, f: `optcharge`, t: [`Optimized charging`, `Recharge optimisée`], d: [`Charging stops at 80%. You can leave it plugged in without wearing out the battery.`, `La charge s'arrête à 80 %. Tu peux le laisser branché sans user la batterie.`] },
    { id: `low`, cost: 9e6, f: `lowpower`, t: [`Low Power Mode`, `Mode économie d'énergie`], d: [`Every app drains 40% less battery. The screen is a bit yellow.`, `Toutes les applis consomment 40 % de batterie en moins. L'écran est un peu jaune.`] },
    { id: `farm2`, cost: 1.8e7, req: `farm`, m: [`farm`, 3], t: [`Tractor (in-app purchase)`, `Tracteur (achat intégré)`], d: [`Pixel Farm x3.`, `Pixel Farm x3.`] },
    { id: `magnet`, cost: 4e7, f: `magnet`, t: [`Spam filter`, `Filtre anti-spam`], d: [`Bad stray pixels can't steal anymore.`, `Les mauvais pixels égarés ne volent plus rien.`] },
    { id: `birds1`, cost: 8.1e7, req: `birds`, m: [`birds`, 2], t: [`Mighty Eagle`, `Aigle puissant`], d: [`Angry Pixels x2.`, `Angry Pixels x2.`] },
    { id: `saver1`, cost: 1.6e8, req: `saver`, f: `saver5`, t: [`Night Shift+`, `Night Shift+`], d: [`Idle bonus: x5 instead of x3.`, `Bonus d'inactivité : x5 au lieu de x3.`] },
    { id: `zbirds`, cost: 3.2e8, req: `birds`, z: [`birds`, 2], t: [`Angry Pixels Lite`, `Angry Pixels Lite`], d: [`Angry Pixels uses 64 MB instead of 128.`, `Angry Pixels utilise 64 Mo au lieu de 128.`] },
    { id: `stylus`, cost: 5.9e8, c: 4, t: [`Stylus`, `Stylet`], d: [`Clicks x4. Someone said phones would never need a stylus. Someone was wrong. Then right. Then wrong.`, `Clics x4. Quelqu'un a dit que les téléphones n'auraient jamais besoin de stylet. Il avait tort. Puis raison. Puis tort.`] },
    { id: `tok1`, cost: 1.6e9, req: `tok`, m: [`tok`, 2], t: [`Algorithm`, `Algorithme`], d: [`PixTok x2. It knows what you want. It's scary.`, `PixTok x2. Il sait ce que tu veux. Ça fait peur.`] },
    { id: `birds2`, cost: 3.2e9, req: `birds`, m: [`birds`, 3], t: [`Angry Pixels Space`, `Angry Pixels Space`], d: [`Angry Pixels x3.`, `Angry Pixels x3.`] },
    { id: `macro`, cost: 7.9e9, f: `macro`, t: [`Tap macro`, `Macro de tap`], d: [`Each tap also gives 5% of your px/s.`, `Chaque tap donne aussi 5 % de tes px/s.`] },
    { id: `tok2`, cost: 2.4e10, req: `tok`, m: [`tok`, 3], t: [`Going viral`, `Devenir viral`], d: [`PixTok x3.`, `PixTok x3.`] },
    { id: `crush1`, cost: 7.9e10, req: `crush`, m: [`crush`, 2], t: [`Extra lives`, `Vies supplémentaires`], d: [`Pixel Crush Saga x2. Only 5 px each.`, `Pixel Crush Saga x2. Seulement 5 px chacune.`] },
    { id: `crush2`, cost: 3.2e11, req: `crush`, m: [`crush`, 3], t: [`Level 9,999`, `Niveau 9 999`], d: [`Pixel Crush Saga x3.`, `Pixel Crush Saga x3.`] },
    { id: `cloud1`, cost: 6e11, req: `cloud`, m: [`cloud`, 2], t: [`Unlimited storage (limited)`, `Stockage illimité (limité)`], d: [`PixCloud x2.`, `PixCloud x2.`] },
    { id: `cloud2`, cost: 1.8e12, req: `cloud`, m: [`cloud`, 3], t: [`Family plan`, `Forfait famille`], d: [`PixCloud x3.`, `PixCloud x3.`] },
  ],
  D: {
    score: [`Shows your score.`, `Affiche ton score.`],
    notes: [`Text messages from the developer.`, `Les SMS du développeur.`],
    auto: [`+100 px/s. Taps for you.`, `+100 px/s. Tape à ta place.`],
    help: [`Tips. Also makes "Tip of the day" work in Settings.`, `Des astuces. Fait aussi marcher « Astuce du jour » dans les Réglages.`],
    trophy: [`Shows your achievements.`, `Affiche tes succès.`],
    clock: [`Keeps time. Needed for offline progress.`, `Garde l'heure. Nécessaire pour progresser hors ligne.`],
    calc: [`Shows your stats.`, `Affiche tes stats.`],
    flash: [`Clicks x2 while it runs. Drains the battery like crazy.`, `Clics x2 tant qu'elle tourne. Vide la batterie comme jamais.`],
    farm: [`+1500 px/s. Grows pixels. Asks you to come back every hour.`, `+1500 px/s. Fait pousser des pixels. Te demande de revenir toutes les heures.`],
    hack: [`Guess passwords. Rewards pixels and secrets.`, `Devine des mots de passe. Rapporte des pixels et des secrets.`],
    saver: [`Production x3 when you don't move the mouse for 20 s. Easy on the battery.`, `Production x3 quand tu ne bouges pas la souris pendant 20 s. Économe en batterie.`],
    birds: [`+25000 px/s. Throw pixels at pigs.`, `+25000 px/s. Lance des pixels sur des cochons.`],
    tok: [`+300000 px/s. Short pixel videos. Eats the battery alive.`, `+300000 px/s. Des vidéos de pixels. Dévore la batterie.`],
    crush: [`+3.5 million px/s. Match three pixels. Forever.`, `+3,5 millions px/s. Aligne trois pixels. Pour toujours.`],
    cloud: [`+40 million px/s. Your pixels, in someone else's computer.`, `+40 millions px/s. Tes pixels, dans l'ordinateur de quelqu'un d'autre.`],
    settings: [`Save, language, options.`, `Sauvegarde, langue, options.`],
  },
  N: {
    start: [`the dev: hey! it's me. the computer is a phone now. it weighs 1.2 kg. i texted you from it. took me 20 min.`, `le dev : salut ! c'est moi. l'ordinateur est un téléphone maintenant. il pèse 1,2 kg. je t'écris avec. ça m'a pris 20 min.`],
    score: [`the dev: the score is an app now. everything is an app. my toaster has an app.`, `le dev : le score est une appli maintenant. tout est une appli. mon grille-pain a une appli.`],
    notes: [`the dev: texts! no more emails. 160 characters max. perfect, i never finish my sentences any`, `le dev : des SMS ! fini les mails. 160 caractères max. parfait, je ne finis jamais mes phr`],
    auto: [`the dev: Tap Tap taps for you. on a phone. which you hold. while it taps. the future is weird`, `le dev : Tap Tap tape à ta place. sur un téléphone. que tu tiens. pendant qu'il tape. le futur est bizarre`],
    help: [`the dev: Tips app. tip #1: charge your phone. tip #2: charge your phone.`, `le dev : appli Astuces. astuce n° 1 : charge ton téléphone. astuce n° 2 : charge ton téléphone.`],
    trophy: [`the dev: trophies made it to a phone. they're unstoppable.`, `le dev : les trophées ont survécu jusqu'au téléphone. rien ne les arrête.`],
    clock: [`the dev: the phone knows the time. it sets itself. no more 1900. i miss Y2K a bit`, `le dev : le téléphone connaît l'heure. tout seul. fini 1900. l'an 2000 me manque un peu`],
    calc: [`the dev: calculator. turn the phone sideways for scientific mode. i dropped it. 1.2 kg on my foot`, `le dev : calculatrice. tourne le téléphone pour le mode scientifique. je l'ai lâché. 1,2 kg sur le pied`],
    flash: [`the dev: Flashlight. the most downloaded app of 2007. it doubles your taps. and halves your battery`, `le dev : Lampe torche. l'appli la plus téléchargée de 2007. elle double tes taps. et divise ta batterie par deux`],
    farm: [`the dev: Pixel Farm. it sends notifications at 3 am. my crops were ready. i was not.`, `le dev : Pixel Farm. ça envoie des notifs à 3 h du mat. mes récoltes étaient prêtes. pas moi.`],
    hack: [`the dev: a terminal on a phone. like the very beginning. we've come full circle. kind of`, `le dev : un terminal sur un téléphone. comme au tout début. la boucle est bouclée. en gros`],
    saver: [`the dev: Night Shift makes the screen orange. it helps you sleep. i still don't sleep`, `le dev : Night Shift rend l'écran orange. ça aide à dormir. je ne dors toujours pas`],
    birds: [`the dev: Angry Pixels. you throw pixels at pigs. i don't know what the pigs did. something bad probably`, `le dev : Angry Pixels. on lance des pixels sur des cochons. je ne sais pas ce qu'ils ont fait. un truc grave sûrement`],
    tok: [`the dev: PixTok. 15-second videos of pixels. i watched for 6 hours. the battery died. so did my weekend`, `le dev : PixTok. des vidéos de 15 secondes de pixels. j'ai regardé 6 heures. la batterie est morte. mon week-end aussi`],
    crush: [`the dev: Pixel Crush Saga. level 4,000. i've never been this happy and this sad at once`, `le dev : Pixel Crush Saga. niveau 4 000. je n'ai jamais été aussi heureux et aussi triste à la fois`],
    cloud: [`the dev: PixCloud. "the cloud" is just a big computer somewhere. my pixels live there now. i hope they're ok`, `le dev : PixCloud. « le cloud », c'est juste un gros ordinateur quelque part. mes pixels vivent là-bas. j'espère qu'ils vont bien`],
    oom: [`the dev: phone memory full. close an app (X). or don't, and watch it get slow. classic`, `le dev : mémoire du téléphone pleine. ferme une appli (X). ou pas, et regarde-le ramer. classique`],
    shopClosed: [`the dev: you closed the App Store. it's on the home screen. press the round button.`, `le dev : tu as fermé l'App Store. il est sur l'écran d'accueil. appuie sur le bouton rond.`],
    blind: [`the dev: no score? brave. the phone counts anyway`, `le dev : pas de score ? courageux. le téléphone compte quand même`],
    stray: [`the dev: stray pixels on a touch screen. green good, red bad. same as always`, `le dev : des pixels égarés sur un écran tactile. vert bien, rouge mal. comme toujours`],
    bat: [`the dev: watch the battery. every app drains it. if it dies, everything closes. plug it in (Charge)`, `le dev : surveille la batterie. chaque appli la vide. si elle meurt, tout se ferme. branche-le (Charger)`],
    dead: [`the dev: it died. the iBrick died. it does that. it's charging. we wait. together.`, `le dev : il est mort. l'iBrick est mort. il fait ça. il charge. on attend. ensemble.`],
    upd: [`the dev: apps want to update ALL THE TIME. you can say "later". they'll ask again. they always ask again`, `le dev : les applis veulent se mettre à jour TOUT LE TEMPS. tu peux dire « plus tard ». elles redemanderont. elles redemandent toujours`],
    r12: [`the dev: 384 MB in a phone. my first computer had 3 KB. i'm not crying. it's the screen brightness`, `le dev : 384 Mo dans un téléphone. mon premier ordi avait 3 Ko. je ne pleure pas. c'est la luminosité`],
    r16: [`the dev: 512 MB. more apps in the background. they're all asking for notifications`, `le dev : 512 Mo. plus d'applis en arrière-plan. elles demandent toutes à envoyer des notifications`],
    r24: [`the dev: 768 MB. the phone is faster than my old PC. and it's in my pocket. my very big pocket`, `le dev : 768 Mo. le téléphone est plus rapide que mon vieux PC. et il est dans ma poche. ma très grande poche`],
    r32: [`the dev: 1 GB in a phone. 1 GB! i'm calling my mom. on the phone. obviously`, `le dev : 1 Go dans un téléphone. 1 Go ! j'appelle ma mère. avec le téléphone. évidemment`],
    r48: [`the dev: 1.5 GB. the iBrick is heavier. i think memory has weight. don't fact-check that`, `le dev : 1,5 Go. l'iBrick est plus lourd. je crois que la mémoire a un poids. ne vérifie pas`],
    r64: [`the dev: 2 GB. maximum. someone knocked at my door earlier. i didn't answer. who knocks in 2007?`, `le dev : 2 Go. maximum. quelqu'un a frappé à ma porte tout à l'heure. je n'ai pas ouvert. qui frappe en 2007 ?`],
    bat1200: [`the dev: 1200 mAh. lasts a whole morning now`, `le dev : 1200 mAh. ça tient toute une matinée maintenant`],
    bat1600: [`the dev: 1600 mAh. it's 100 g heavier. worth it`, `le dev : 1600 mAh. 100 g de plus. ça vaut le coup`],
    bat2000: [`the dev: 2000 mAh. i can watch PixTok on the bus. i don't take the bus. i'm at home. always`, `le dev : 2000 mAh. je peux regarder PixTok dans le bus. je ne prends pas le bus. je suis chez moi. toujours`],
    bat2600: [`the dev: 2600 mAh. the iBrick could be a doorstop. it is a doorstop. that's where i keep it`, `le dev : 2600 mAh. l'iBrick pourrait caler une porte. il cale une porte. c'est là que je le range`],
    bat3200: [`the dev: 3200 mAh. lasts all day. i still charge it every hour. anxiety`, `le dev : 3200 mAh. ça tient toute la journée. je le charge quand même toutes les heures. l'angoisse`],
    bat4000: [`the dev: 4000 mAh. the knocking again. it sounds metallic. i'll check tomorrow`, `le dev : 4000 mAh. encore ces coups à la porte. ça sonne métallique. je vérifierai demain`],
    m1m: [`the dev: a million pixels on a phone. PIXCORP wants a "mobile version" of the game. it IS the mobile version`, `le dev : un million de pixels sur un téléphone. PIXCORP veut une « version mobile » du jeu. c'EST la version mobile`],
    m1b: [`the dev: a billion. PIXCORP wants in-app purchases. "buy a pixel for 0.99". the game is a pixel. i said no`, `le dev : un milliard. PIXCORP veut des achats intégrés. « achetez un pixel pour 0,99 ». le jeu est un pixel. j'ai dit non`],
    m1t: [`the dev: a trillion. they say AI is coming. it'll write code. it'll finish games. i'm not worried. i'm a little worried`, `le dev : mille milliards. on dit qu'une IA arrive. elle écrira du code. elle finira des jeux. je ne m'inquiète pas. je m'inquiète un peu`],
  },
  HELP: [
    [`One app on screen at a time. The round button goes back home. Running apps keep working in the background.`, `Une appli à l'écran à la fois. Le bouton rond revient à l'accueil. Les applis lancées continuent en arrière-plan.`],
    [`On the iSlab, tap the ••• at the top of an app, then Split View, then pick a second app: both stay side by side.`, `Sur l'iSlab, touche les ••• en haut d'une appli, puis Écran partagé, puis choisis une 2e appli : les deux restent côte à côte.`],
    [`Press the home button twice to see the running apps and close them. On the iBrick X and the iSlab, swipe up from the bottom edge of the screen: a flick goes home, a slow swipe (or a pause on the way) shows the apps.`, `Appuie deux fois sur le bouton home pour voir les applis lancées et les fermer. Sur l'iBrick X et l'iSlab, glisse vers le haut depuis le bas de l'écran : un geste rapide revient à l'accueil, un geste lent (ou une pause en chemin) montre les applis.`],
    [`Every running app drains the battery. At 0%, the phone turns off and every app closes. Use Charge in the status bar.`, `Chaque appli lancée vide la batterie. À 0 %, le téléphone s'éteint et toutes les applis se ferment. Utilise Charger dans la barre d'état.`],
    [`While charging, you can't tap the pixel. The cable is too short.`, `Pendant la charge, tu ne peux pas taper le pixel. Le câble est trop court.`],
    [`Notifications give pixels if you tap them in time.`, `Les notifications donnent des pixels si tu les touches à temps.`],
    [`Apps stop producing while they update. "Remind me later" buys you a minute.`, `Les applis arrêtent de produire pendant leur mise à jour. « Me le rappeler plus tard » fait gagner une minute.`],
  ],
  LOGS: [
    [`PIXCORP MOBILE STRATEGY: "Step 1: put the pixel on a phone. Step 2: ??? Step 3: profit."`, `STRATÉGIE MOBILE PIXCORP : « Étape 1 : mettre le pixel sur un téléphone. Étape 2 : ??? Étape 3 : profit. »`],
    [`APP STORE REVIEW: "1 star. It's just a pixel." Reply from the dev: "Thank you for your feedback."`, `AVIS APP STORE : « 1 étoile. C'est juste un pixel. » Réponse du dev : « Merci pour votre retour. »`],
    [`THE DEV'S NOTES APP: "things to do: 1. finish the game. 2. charge phone. 3. answer the door?"`, `APPLI NOTES DU DEV : « à faire : 1. finir le jeu. 2. charger le téléphone. 3. ouvrir la porte ? »`],
    [`SECURITY CAMERA, 03:12: "Motion detected at the front door. Object: robot. Carrying: an old computer."`, `CAMÉRA DE SÉCURITÉ, 03 h 12 : « Mouvement détecté à la porte. Objet : robot. Transporte : un vieil ordinateur. »`],
  ],
  // ----- era mechanics -----
  enter() { S.x.bat = 100; S.bought.settings = 1; note(N(`bat`)); },
  load() {
    if (!$(`home`)) document.body.insertAdjacentHTML(`beforeend`, `<div id="ear"></div><div id="bezel"></div><div id="pickb"></div><div id="sw" data-act="swclose"></div><button id="home" data-act="home" aria-label="home"></button><div id="notif" data-act="notif"></div><div id="dead"></div>`);
    if (S.x.dead) $(`dead`).classList.add(`on`);
  },
  // a worn battery slows the phone down, like a certain fruit company did
  throttle() { const h = S.x.health ?? 100; return h < 80 ? 0.5 + (h - 50) / 60 : 1; },
  mul2: () => ERA[5].throttle(),
  batCost: () => Math.max(5000, basePerSec() * 120),
  drain() { return use(`bat`) / cap(`bat`) * 0.8 * (flag(`lowpower`) ? 0.6 : 1) * (1 - Math.min(0.6, tsum(`bat`))); },
  // why the score may suddenly drop: shown under it
  scoreNote() { const u = S.x.upd; return S.x.dead ? `<small class="warn">${T(X5.deadScore)}</small>` : u && u.on ? `<small class="warn">${fill(T(X5.updScore), { a: prog(u.id).file, s: Math.ceil(u.t) })}</small>` : ``; },
  factor: p => (S.x.dead || (S.x.upd && S.x.upd.on && S.x.upd.id === p.id) ? 0 : 1),
  tap() { if (S.x.dead) return false; if (S.x.plug) { toast(T(X5.short)); return false; } },
  tick(dt) {
    const x = S.x;
    if (x.bat === undefined) x.bat = 100;
    if (x.dead) {
      x.bat = Math.min(100, x.bat + 2 * (flag(`fastcharge`) ? 2 : 1) * dt);
      if ($(`dead`)) $(`dead`).textContent = fill(T(X5.deadScr), { n: Math.floor(x.bat) });
      if (x.bat >= 15) { x.dead = 0; x.plug = 0; if ($(`dead`)) $(`dead`).classList.remove(`on`); }
      return;
    }
    const hp = x.health ?? 100, top = flag(`optcharge`) ? Math.min(80, hp) : hp;
    // plugged in and full: the phone runs on the wall, the charge holds still instead of going 50/49/50
    if (x.plug && x.bat >= top - 0.5) x.bat = Math.max(x.bat, top);
    else x.bat += ((x.plug ? 1.5 * (flag(`fastcharge`) ? 2 : 1) : 0) - ERA[5].drain()) * dt;
    x.bat = Math.min(hp, x.bat);
    // left plugged in when full: the battery wears out (about 1% every 12 s)
    if (x.plug && x.bat >= hp - 0.5 && !flag(`optcharge`)) {
      x.health = Math.max(50, hp - 0.08 * dt);
      if (!S.once.hot5) { S.once.hot5 = 1; toast(T(X5.hot)); }
      if (x.health < 80 && !S.once.slow5) { S.once.slow5 = 1; dlg(T(X5.slow)); }
    }
    if (x.bat <= 0) {
      x.bat = 0; x.dead = 1; x.plug = 1; S.st.dead = (S.st.dead || 0) + 1;
      for (const p of E().P) if (S.run[p.id] && !p.fixed) { S.run[p.id] = 0; killWin(p.id); }
      x.cur = null; if ($(`dead`)) $(`dead`).classList.add(`on`); dlg(T(X5.dead)); note(N(`dead`));
      return;
    }
    x.notT = (x.notT || rnd(30, 50)) - dt;
    if (x.notT <= 0) { x.notT = rnd(35, 70); x.notI = Math.random() * X5.notifs.length | 0; x.notLeft = 8; }
    if (x.notLeft > 0) x.notLeft -= dt;
    const nb = $(`notif`);
    if (nb) { nb.classList.toggle(`on`, x.notLeft > 0); if (x.notLeft > 0) nb.textContent = T(X5.notifs[x.notI || 0]); }
    // bought "Update at night" during an update: finish it now instead of freezing it forever
    if (flag(`noupdate`)) x.upd = null;
    else {
      const u = x.upd;
      if (u && u.on) { u.t -= dt; if (u.t <= 0) x.upd = null; }
      else if (u && !u.on) { u.t -= dt; if (u.t <= 0) { u.on = 1; u.t = 30; } }
      else {
        x.updT = (x.updT || rnd(200, 300)) - dt;
        const prods = E().P.filter(p => p.prod && S.run[p.id]).map(p => p.id);
        if (x.updT <= 0 && prods.length) {
          x.updT = rnd(240, 360);
          const id = prods[Math.random() * prods.length | 0];
          x.upd = { id, on: 0, t: 20 }; toast(fill(T(X5.upd), { a: prog(id).file }));
          if (!S.once.upd5) { S.once.upd5 = 1; note(N(`upd`)); }
        }
      }
    }
  },
  simTick() {
    const x = S.x;
    if (x.bat < 25 && !x.plug) x.plug = 1;
    if (x.bat > 95 && x.plug) x.plug = 0;
    if (x.upd && !x.upd.on) x.upd.t = 20;
    if (x.notLeft > 0) { x.notLeft = 0; gain(Math.max(100, basePerSec() * 20)); }
    dq.length = 0;
  },
  render() {
    const x = S.x, back = T([`Home`, `Accueil`]);
    // the close button of an app is the iPhone OS back button
    for (const id in W) { const b = W[id].el.querySelector(`.x`); if (b && b.textContent !== back) b.textContent = back; }
    // iSlab: the previous app stays open on the right (split view)
    if (!W[x.cur]) { x.cur = W[x.cur2] ? x.cur2 : null; x.cur2 = null; }
    if (!W[x.cur2] || x.cur2 === x.cur || phoneLv() < 3) x.cur2 = null;
    for (const id in W) {
      const el = W[id].el, t = el.querySelector(`.title`);
      el.classList.toggle(`cur`, id === x.cur); el.classList.toggle(`cur2`, id === x.cur2);
      // iPadOS multitasking button at the top of each app
      if (t && !t.querySelector(`.mt`)) t.insertAdjacentHTML(`afterbegin`, `<span class="mt" data-act="mt:${id}"><i></i><i></i><i></i></span><span class="mtm"></span>`);
      if (t) { const m = t.querySelector(`.mtm`), h = x.mt === id ? ERA[5].mtMenu(id) : ``; if (m.dataset.h !== h) { m.dataset.h = h; m.innerHTML = h; } }
    }
    if (x.pick && (!W[x.pick] || phoneLv() < 3)) x.pick = null;
    const pb = $(`pickb`);
    if (pb) { pb.classList.toggle(`on`, !!x.pick && !x.cur); const h = x.pick ? fill(T(X5.pick), { a: esc(prog(x.pick).file) }) + `<b data-act="pickno">${T(X5.cancel)}</b>` : ``; if (pb.dataset.h !== h) { pb.dataset.h = h; pb.innerHTML = h; } }
    const b = document.body.classList, lv = phoneLv();
    b.toggle(`apphome`, !x.cur);
    ERA[5].bindSwipe();
    ERA[5].switcher(); b.toggle(`darkapp`, x.cur === `game` && !x.cur2); b.toggle(`flat`, lv >= 1); b.toggle(`notch`, lv >= 2); b.toggle(`slab`, lv >= 3); b.toggle(`split`, !!x.cur2);
  },
  taskExtra() {
    const b = Math.max(0, Math.floor(S.x.bat || 0));
    return `<span class="batt ${b < 20 ? `low` : ``} ${(S.x.health ?? 100) < 80 ? `worn` : ``}"><i style="width:${b}%"></i></span><span class="bpc"> ${b}%</span> <span class="plugb ${S.x.plug ? `on` : ``}" data-act="plug" title="${T(S.x.plug ? X5.unplug : X5.plug)}">${phoneLv() >= 2 ? `⚡` : T(S.x.plug ? X5.unplug : X5.plug)}</span>`;
  },
  opened(id) { ERA[5].show(id); },
  // an app opens full screen, unless the iSlab is waiting for the second app of a split view
  show(id) {
    const x = S.x;
    x.mt = null;
    if (x.pick && x.pick !== id && W[x.pick] && phoneLv() >= 3) { x.cur = x.pick; x.cur2 = id; x.pick = null; S.st.split = 1; return; }
    x.pick = null; x.cur = id; x.cur2 = null;
  },
  mtMenu(id) {
    const x = S.x, it = (a, ic, t) => `<span class="mti" data-act="${a}:${id}"><i class="mtic ${ic}"></i>${T(t)}</span>`;
    return it(`mtfull`, `full`, X5.mtFull) + it(`mtsplit`, `half`, X5.mtSplit) + (x.cur2 ? it(`mtside`, `shut`, X5.mtSide) : ``);
  },
  A: {
    // an app launched for the first time is shown by opened(); one already running is shown here
    open(id) { S.x.sw = 0; const was = S.run[id]; openProg(id); if (was && S.run[id]) ERA[5].show(id); },
    // one press: home screen; two quick presses: the running apps, to switch or close them
    home() {
      const x = S.x, now = performance.now();
      if (phoneLv() >= 2) return;
      if (x.sw) { x.sw = 0; return; }
      if (now - (ERA[5].lastHome || 0) < 450) { ERA[5].lastHome = 0; x.sw = 1; return; }
      ERA[5].lastHome = now; x.cur = x.cur2 = x.pick = null;
    },
    swclose() { S.x.sw = 0; },
    mt(id) { S.x.mt = S.x.mt === id ? null : id; },
    mtfull(id) { const x = S.x; x.mt = x.pick = null; x.cur = id; x.cur2 = null; },
    // the app goes to the left, the home screen shows to pick the one on the right
    mtsplit(id) { const x = S.x; x.mt = null; x.pick = id; x.cur = x.cur2 = null; },
    mtside(id) { const x = S.x; x.mt = null; x.cur = id === x.cur ? x.cur2 : x.cur; x.cur2 = null; },
    pickno() { const x = S.x; x.cur = x.pick; x.pick = null; },
    plug() { if (!S.x.dead) S.x.plug = S.x.plug ? 0 : 1; },
    newbat() { const c = ERA[5].batCost(); if (S.px < c) return noPx(); S.px -= c; S.x.health = 100; S.st.newbat = (S.st.newbat || 0) + 1; toast(T(X5.newbatDone)); },
    notif() {
      if (!(S.x.notLeft > 0)) return;
      S.x.notLeft = 0; S.st.notif = (S.st.notif || 0) + 1;
      const n = Math.max(100, basePerSec() * 20);
      gain(n); toast(fill(T(X5.notifGot), { n: fmt(n) }));
    },
    later() { const u = S.x.upd; if (u && !u.on) { u.t = 60; S.st.later = (S.st.later || 0) + 1; } },
  },
  BODY: {
    // the terminal as an iOS app: a locked file, passcode dots for the tries, the words as keys,
    // the bracket pairs as hint chips and the guesses as a list
    hack() {
      if (!(H && H.era)) {
        const wait = S.hackCd > 0;
        return `<div class="ilock"><div class="ilk">🔒</div><b>${T(X5.hkTitle)}</b><p>${T(X5.hkIntro)}</p>${wait ? `<p class="dim">${fill(T(X5.hkWait), { s: Math.ceil(S.hackCd) })}</p>` : `<button class="ibtn" data-act="hack">${T(X5.hkOpen)}</button>`}</div>${S.lastLog ? `<div class="igrp"><div class="ihd">${T(X5.hkLast)}</div><div class="irow">${esc(T(S.lastLog))}</div></div>` : ``}`;
      }
      const len = H.pass.length;
      const dots = Array.from({ length: 4 }, (_, i) => `<i class="${i < H.tries ? `on` : ``}"></i>`).join(``);
      const keys = H.words.map(w => H.dud.includes(w) ? `<span class="ikey off">${w}</span>` : `<span class="ikey" data-act="hg:${w}">${w}</span>`).join(``);
      const chips = H.lines.flat().filter(x => x.s).map(x => H.used.includes(x.k) ? `<span class="ichip off">${esc(x.s)}</span>` : `<span class="ichip" data-act="hb:${x.k}">${esc(x.s)}</span>`).join(``);
      const rows = H.hist.slice().reverse().map(h => h.w
        ? `<div class="irow"><span class="mono">${h.w}</span><span class="ilik">${Array.from({ length: len }, (_, i) => `<i class="${i < h.n ? `on` : ``}"></i>`).join(``)} ${h.n}/${len}</span></div>`
        : `<div class="irow dim">${h.dud ? fill(T(X5.hkDud), { w: h.dud }) : T(X5.hkReset)}</div>`).join(``);
      return `<div class="ilock sm"><b>${T(X5.hkTitle)}</b><div class="idots">${dots}</div><small>${fill(T(X5.hkTries), { n: H.tries })}</small></div>`
        + `<div class="ikeys">${keys}</div>`
        + `<div class="igrp"><div class="ihd">${T(X5.hkHints)}</div><div class="ichips">${chips}</div></div>`
        + (rows ? `<div class="igrp"><div class="ihd">${fill(T(X5.hkHist), { n: len })}</div>${rows}</div>` : ``)
        + `<button class="ibtn ghost" data-act="hexit">${U().cancel}</button>`;
    },
    settings() {
      const u = U(), items = [[`save`, u.save], [`exp`, u.exp], [`imp`, u.imp], [`lang`, u.lang], [`sci`, (S.opt.sci ? `[x] ` : `[ ] `) + u.sci], [`anim`, (S.opt.anim ? `[x] ` : `[ ] `) + u.anim], ...(S.run.help ? [[`tip`, u.tip]] : []), [`about`, u.about], [`hard`, u.hard]];
      const hp = Math.floor(S.x.health ?? 100), th = ERA[5].throttle();
      const bat = `<div class="row"><span>${fill(T(X5.health), { n: hp })}${th < 1 ? `<small>${fill(T(X5.throttled), { n: th.toFixed(2).replace(`.`, decP()) })}</small>` : ``}</span>${hp < 100 ? `<button class="btn" data-act="newbat">${fill(T(X5.newbat), { c: fmt(ERA[5].batCost()) })}</button>` : ``}</div>`;
      return bat + items.map(([a, t]) => `<div class="row"><span>${t}</span><button class="btn" data-act="${a}">&gt;</button></div>`).join(``);
    },
  },
  winClass: () => `app`,
  dock: [`game`, `notes`, `install`, `settings`],
  extraBody(id) {
    const u = S.x.upd, mem = id === `install` ? ERA[5].memBar(true) : ``;
    if (!u || u.id !== id) return mem;
    return mem + (u.on ? `<div class="upd">${fill(T(X5.updNow), { n: Math.floor((30 - u.t) / 30 * 100) })}</div>` : `<div class="upd">${fill(T(X5.upd), { a: prog(id).file })}<br><button class="btn" data-act="later">${T(X5.later)}</button></div>`);
  },
  // iBrick X and iSlab have no home button, like Face ID iPhones. The gesture starts anywhere along the
  // bottom edge of the screen: a flick up goes home, a slow swipe past a third of the screen or a pause
  // on the way shows the running apps. A tap there still reaches whatever is under it.
  swipeEnd(dy, sw) {
    const x = S.x;
    if (sw) x.sw = 1;
    else if (dy >= 40) { x.sw = 0; x.cur = x.cur2 = x.pick = x.mt = null; }
  },
  bindSwipe() {
    if (ERA[5].swBound) return;
    ERA[5].swBound = 1;
    let g = null;
    const b = document.body;
    const still = () => { if (g && g.dy >= 50) { g.held = 1; b.classList.remove(`drag`); S.x.sw = 1; } };
    const zone = ev => {
      const t = $(`task`), h = $(`home`);
      if (S.era !== 5 || phoneLv() < 2 || !t || !h || S.x.dead) return false;
      const r = t.getBoundingClientRect(), bottom = h.getBoundingClientRect().top + 26;
      return ev.clientX >= r.left && ev.clientX <= r.right && ev.clientY >= bottom - 44 && ev.clientY <= bottom + 14;
    };
    addEventListener(`pointerdown`, ev => {
      if (ev.button || !zone(ev)) return;
      const r = $(`task`).getBoundingClientRect(), bottom = $(`home`).getBoundingClientRect().top + 26;
      g = { y: ev.clientY, dy: 0, on: 0, held: 0, t: 0, h: bottom - r.top, pts: [[performance.now(), ev.clientY]], id: ev.pointerId };
    }, true);
    addEventListener(`pointermove`, ev => {
      if (!g || g.held) return;
      const dy = Math.max(0, g.y - ev.clientY);
      if (!g.on) {
        if (dy < 10) return;
        // it is a swipe, not a tap: keep the pointer even if it leaves the bar
        g.on = 1;
        try { document.documentElement.setPointerCapture(g.id); } catch (er) {}
      }
      if (Math.abs(dy - g.dy) > 5) { clearTimeout(g.t); g.t = setTimeout(still, 400); }
      g.dy = dy;
      g.pts.push([performance.now(), ev.clientY]); if (g.pts.length > 6) g.pts.shift();
      b.classList.toggle(`drag`, !!S.x.cur);
      b.style.setProperty(`--dy`, Math.min(dy, 300));
    }, true);
    const end = ev => {
      if (!g) return;
      const d = g; g = null;
      clearTimeout(d.t); b.classList.remove(`drag`);
      if (!d.on || ev.type !== `pointerup`) return;
      ERA[5].noClick = performance.now();
      const dy = Math.max(0, d.y - ev.clientY), [t0, y0] = d.pts[0], v = (y0 - ev.clientY) / Math.max(1, performance.now() - t0);
      // a quick flick goes home even when long; a slow swipe past a third of the screen shows the apps
      ERA[5].swipeEnd(dy, d.held || (dy >= d.h / 3 && v < 0.5));
    };
    addEventListener(`pointerup`, end, true);
    addEventListener(`pointercancel`, end, true);
    // the click that ends a swipe is not a tap
    addEventListener(`click`, e => { if (performance.now() - (ERA[5].noClick || 0) < 300) { e.stopPropagation(); e.preventDefault(); } }, true);
  },
  switcher() {
    const x = S.x, el = $(`sw`);
    if (!el) return;
    const on = !!x.sw && !x.dead;
    el.classList.toggle(`on`, on);
    if (!on) return setH(`sw`, ``);
    const apps = E().P.filter(p => S.run[p.id] && !p.hidden);
    const card = p => `<div class="swc" data-act="open:${p.id}">${p.fixed ? `` : `<span class="swx" data-act="close:${p.id}">${phoneLv() ? `×` : `−`}</span>`}${icon(p.id)}<b>${esc(p.file)}${S.run[p.id] > 1 ? ` x${S.run[p.id]}` : ``}</b><small>${ramTxt(S.run[p.id] * kbOf(p.id))} - ${fmt(S.run[p.id] * (p.bat || 0))} mAh</small></div>`;
    setH(`sw`, `<div class="swt">${T(X5.sw)}</div><div class="swl">${apps.map(card).join(``)}</div><div class="swh">${T([X5.swHint0, X5.swHint, X5.swHint2, X5.swHint2][phoneLv()])}</div>`);
    const l = el.querySelector(`.swl`);
    if (l && l.scrollLeft !== ERA[5].swX) l.scrollLeft = ERA[5].swX || 0;
    ERA[5].bindDrag(el);
  },
  // drag the cards like a finger: sideways scrolls the list, up throws the app away
  bindDrag(el) {
    if (el.dataset.dr) return;
    el.dataset.dr = 1;
    let g = null;
    el.addEventListener(`click`, e => { if (performance.now() - (ERA[5].noClick || 0) < 300) { e.stopPropagation(); e.preventDefault(); } }, true);
    el.addEventListener(`pointerdown`, ev => {
      const l = el.querySelector(`.swl`);
      if (!l || ev.button) return;
      g = { x: ev.clientX, y: ev.clientY, s: l.scrollLeft, c: ev.target.closest(`.swc`), m: 0 };
    });
    el.addEventListener(`pointermove`, ev => {
      if (!g) return;
      const dx = ev.clientX - g.x, dy = ev.clientY - g.y, l = el.querySelector(`.swl`);
      if (!g.m && Math.hypot(dx, dy) > 8) {
        g.m = Math.abs(dx) >= Math.abs(dy) || !g.c ? `x` : `y`;
        // only now: capturing on press would turn a plain tap into a tap on the background
        try { el.setPointerCapture(ev.pointerId); } catch (er) {}
      }
      if (g.m === `x` && l) ERA[5].swX = l.scrollLeft = g.s - dx;
      if (g.m === `y` && g.c) { const u = Math.min(0, dy); g.c.style.transform = `translateY(${u}px)`; g.c.style.opacity = 1 + u / 250; }
    });
    const end = ev => {
      if (!g) return;
      const d = g; g = null;
      if (!d.m) return;
      // a drag is not a tap: swallow the click that follows
      ERA[5].noClick = performance.now();
      setTimeout(() => (down = null), 0);
      const sx = d.c && d.c.querySelector(`.swx`);
      if (d.m === `y` && d.c) {
        if (sx && d.y - ev.clientY > 90) act(sx.dataset.act);
        else { d.c.style.transform = d.c.style.opacity = ``; }
      }
    };
    el.addEventListener(`pointerup`, end);
    el.addEventListener(`pointercancel`, end);
  },
  // the memory as an iPhone storage bar: one colored part per running app, then the free space
  memBar(list) {
    const c = cap(`ram`), apps = E().P.filter(p => S.run[p.id] && kbOf(p.id)).map(p => [p, S.run[p.id] * kbOf(p.id)]);
    const seg = apps.map(([p, k]) => `<i style="width:${k / c * 100}%;background:${ICONS[iconName(p.id)].a}" title="${esc(p.file)}"></i>`).join(``) + (S.frag ? `<i class="fr" style="width:${S.frag / c * 100}%"></i>` : ``);
    const leg = list ? `<div class="meml">${apps.map(([p, k]) => `<span><i style="background:${ICONS[iconName(p.id)].a}"></i>${esc(p.file)}${S.run[p.id] > 1 ? ` x${S.run[p.id]}` : ``} ${ramTxt(k)}</span>`).join(``)}</div>` : ``;
    return `<div class="memw"><div class="memt"><b>${T([`Memory`, `Mémoire`])}</b><span>${ramTxt(use(`ram`))} / ${ramTxt(c)} - ${fill(T([`{n} free`, `{n} libres`]), { n: ramTxt(Math.max(0, free())) })}</span></div><div class="memb">${seg}</div>${leg}</div>`;
  },
};

ACH.push(
  [`gate`, [`Batterygate`, `Batterygate`], [`Let the phone slow itself down to save its battery.`, `Laisser le téléphone se ralentir pour ménager sa batterie.`], () => S.era === 5 && ERA[5].throttle() < 1, 5],
  [`brick`, [`Slide to unlock`, `Glisser pour déverrouiller`], [`Boot iBrick OS.`, `Démarrer iBrick OS.`], () => S.era >= 5, 5],
  [`dead`, [`Low battery`, `Batterie faible`], [`Let the battery die.`, `Laisser la batterie mourir.`], () => (S.st.dead || 0) >= 1, 5],
  [`notif20`, [`Notification addict`, `Accro aux notifs`], [`Tap 20 notifications.`, `Toucher 20 notifications.`], () => (S.st.notif || 0) >= 20, 5],
  [`later`, [`Remind me later`, `Plus tard`], [`Postpone 10 updates.`, `Repousser 10 mises à jour.`], () => (S.st.later || 0) >= 10, 5],
  [`flash`, [`Most downloaded app of 2007`, `Appli la plus téléchargée de 2007`], [`Install the Flashlight.`, `Installer la Lampe torche.`], () => S.era > 5 || (S.era === 5 && S.bought.flash), 5],
  [`mah`, [`Power bank`, `Batterie externe`], [`Get the 4000 mAh battery.`, `Avoir la batterie de 4000 mAh.`], () => S.era > 5 || (S.era === 5 && cap(`bat`) >= 4000), 5],
);
