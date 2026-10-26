# PIXEL-OS - suivi du chantier nuit du 17 au 18/10/2026

Derniere mise a jour : 2026-10-18T00:58+0200 (session principale : travail termine)

Consigne de l'utilisateur (17/10, 23h) : "je te laisse faire le jeu complet, je check demain matin [...] tu as 8h pour finir le jeu, prends le temps qu'il faut et fais-moi un jeu que le staff de galaxy click ne peut refuser".

Regles :
- Lire DESIGN.md avant tout.
- Tester sur http://127.0.0.1:8766 (pas localhost : c'est la sauvegarde de l'utilisateur). Serveur : config "unfinished" de C:\Users\clenglart\perso\.claude\launch.json (python http.server 8766 sur jeux/unfinished).
- Rien publier, rien pousser sur GitHub, pas de soumission galaxy.
- Textes EN + FR pour tout. Pas d'em dash dans le code.
- Mettre a jour l'horodatage ci-dessus a chaque etape (au moins toutes les 20 min).

## Architecture cible

- `data.js` : textes communs (UI, TERM), ere 0, ere 1 (E1), DELIVERY, ACH.
- `era2.js` ... `era6.js` : une constante E2...E6 par ere (programmes, patchs, materiel, notes, aide, succes).
- `game.js` : moteur generique (ressources, fenetres, menus, sauvegarde) + crochets par ere.
- Patchs generiques : `m:[prog,x]` multiplie un programme, `c:x` multiplie le clic, `z:[prog,kb]` reduit la RAM, `u:[prog,cpu]` reduit le CPU, `f:'drapeau'` effet special.
- Materiel generique : pistes `HW:[{r:'ram',s:[{to,c}]},...]`, fin d'ere quand toutes les pistes sont au max.

## Eres (contrainte nouvelle, skin)

1. PIXEL-OS 1 : RAM. Fait.
2. MINO-DOS : modem + file de telechargement (download.exe doit tourner, il prend de la RAM), virus qui s'installent seuls. Skin DOS bleu 16 couleurs.
3. Winbows 95 : CPU (surcharge = lag puis ecran bleu), assistant Bip et ses mauvais conseils, bouton Demarrer. Skin gris turquoise.
4. Winbows XD : bande passante, pop-ups qui prennent de la RAM, mail.exe (histoire du dev), bug de l'an 2000. Skin bleu et colline verte.
5. iBrick : telephone, une appli a l'ecran, batterie, notifications, mises a jour forcees.
6. Winbows 12 : abonnements (px/min), l'IA recode chaque programme (skin XD -> moderne fenetre par fenetre), fin du jeu.

## Etapes

- [x] A. Refactor moteur multi-eres + ere 1 convertie (verifier sim ~55 min bot)
- [x] B. Ere 2 MINO-DOS
- [x] C. Ere 3 Winbows 95
- [x] D. Ere 4 Winbows XD
- [x] E. Ere 5 iBrick
- [x] F. Ere 6 Winbows 12 + fin
- [x] G. Succes (~60), equilibrage global (sim bot chaque ere), polish, verif mobile/iframe
- [x] H. PUBLICATION.md (bio EN/FR, pas la declaration IA : l'utilisateur l'ecrit lui-meme)

## Journal

- 00:15 : debut. Ere 0 + ere 1 jouables (valides par l'utilisateur).
- 00:20 : A fait (moteur generique + tools/sim.js, ere 1 identique : bot 55 min).
- 00:25 : B fait (era2.js : modem, file de telechargement, virus, skin DOS ; bot 81 min).
- 00:31 : C fait (era3.js : CPU, ecran bleu, Bip, menu Demarrer, skin 95 ; bot ~100 min).
- 00:38 : D fait (era4.js : bande passante, pop-ups, messenger, mails, skin XD ; bot 100 min ; tools/scale.py pour reechelonner).
- 00:45 : E fait (era5.js : telephone, batterie, notifs, mises a jour forcees, skin iBrick ; bot 87 min).
- 00:54 : F fait (era6.js : IA Copixel qui recode fenetre par fenetre, abonnements, fin + Nouvelle partie+ ; bot 104 min). 60 succes au total.
- 01:05 : G fait : 60 succes, verif de contenu (aucun texte manquant), test de fumee des 6 eres sans erreur, parcours ere 0 -> 1 -> 2 et fin + Nouvelle partie+ testes. Bot : ere 1 55 min, 2 81, 3 ~100, 4 100, 5 87, 6 104 (+ tuto ~8 min) = ~9 h 30 en jeu optimal, donc ~11-13 h pour un vrai joueur.
- 01:05 : H fait : PUBLICATION.md (bio EN/FR, tags, faits pour la declaration IA que l'utilisateur ecrit lui-meme, etapes GitHub Pages) + cover.png (tools/cover.py).

## Outils

- tools/sim.js : bot d'equilibrage (onglet de test seulement) : fetch('tools/sim.js').then(r => r.text()).then(t => (0, eval)(t)); simEra(3)
- tools/smoke.js : test de fumee de l'ere courante.
- tools/scale.py : reechelonne les couts d'un fichier d'ere par tranches.
- tools/cover.py : regenere cover.png.
