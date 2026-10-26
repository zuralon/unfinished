# PIXEL-OS (titre provisoire "Unfinished") - document de conception

Cible : 10 à 15 h de jeu, clicker incrémental, publication galaxy.click (anglais + français).
Cœur unique : **la mémoire limitée**. Chaque fonctionnalité (y compris l'interface : score, couleur, souris, boutique, aide...) est un programme qui occupe de la place. On ne peut jamais tout faire tourner : on compose sa configuration, on ferme des programmes pour en lancer d'autres.

Fil rouge : un développeur fatigué fait tourner son jeu inachevé ("game.exe", un pixel) sur un ordinateur qui traverse les époques. Il parle via notes.txt, puis par email, puis par chat. À la fin, on décide si le jeu est enfin "fini".

## Structure : 6 ères (chacune 1 h 30 à 2 h 30)

Chaque ère = une nouvelle génération d'OS, avec refonte visuelle complète, une nouvelle contrainte et ses blagues.

| Ère | Style | Nouvelle contrainte | Nouveautés |
|---|---|---|---|
| 0. TERMLINK (tutoriel, ~15-20 min) | terminal texte vert façon Fallout ("PIXCORP TERMLINK"), tout au clic sur des lignes de menu | **RAM** 4 Ko : apprendre à charger / décharger | pixel `█`, COUNT.COM, AUTO.COM, PATCH, `*` égaré, mini-jeu de piratage (mot de passe, lettres bien placées), puis la carte perforée qui fait apparaître le bureau graphique |
| 1. PIXEL-OS 1 (1984) | 1-bit noir et blanc, vieux Mac | **RAM** (8 Ko -> 64 Ko) | autoclics, patchs, défragmentation, économiseur d'écran, aide |
| 2. MINO-DOS (1990) | 16 couleurs, DOS + fenêtres | **Disque** (installer prend de la place disque) + **modem** (téléchargements lents, file d'attente) | disquettes, compression, virus (les pixels égarés évoluent) |
| 3. Winbows 95 (1995) | Windows 95 | **Processeur** (chaque programme consomme du CPU ; surcharge = lag) | antivirus, multitâche, écran bleu (événement), assistant de bureau "Bip" |
| 4. Winbows XD (2001) | XP / Internet | **Bande passante** + pop-ups publicitaires | navigateur, boîte mail (histoire du développeur), spam, bug de l'an 2000 |
| 5. iBrick (2007) | Smartphone | **Batterie** (tout consomme ; recharger = pause) | notifications, app store, mises à jour forcées |
| 6. Winbows 12 (2020+) | part du skin de l'ère 4, devient moderne fenêtre par fenêtre | **Abonnements** (programmes loués à la minute) | IA qui recode le PC et veut "finir le jeu à ta place", fin du jeu |

## Livraisons : chaque changement d'ère est le grand prestige

Un objet arrive, efface le PC et installe l'OS suivant (on garde succès et bits de BIOS). Blagues historiques parodiques, noms qui marchent en anglais et en français. Textes dans `DELIVERY` (data.js).

| Fin de | Objet livré | Blague |
|---|---|---|
| Ère 0 | carte perforée glissée sous la porte | annonce la souris et les fenêtres, "64 Ko devraient suffire à tout le monde" |
| Ère 1 | disquette 5,25" "MINOSOFT - NE PAS COPIER" | volée dans le garage d'un visionnaire qui dit l'avoir écrite, achetée 50 $ à un type -> MINO-DOS |
| Ère 2 | disquette 3,5" IDM "PROJET WINBOWS 95 - NE PAS MONTRER À MINOSOFT" | Minosoft l'a déjà vendue ; on clique sur Démarrer pour éteindre |
| Ère 3 | CD-ROM tombé du futur (daté 2001, on est en 1999) | relie tous les ordinateurs du monde ; 500 heures gratuites de on ne sait quoi |
| Ère 4 | colis avec une brique, notice "votre ordinateur dans votre poche" | "prenez des poches plus grandes" ; le chargeur pour toujours |
| Ère 5 | robot IA avec ton vieux PC de l'ère 4 sous le bras | il recode le système en Winbows 12 ; pendant toute l'ère 6, l'interface XD se transforme au fur et à mesure qu'il recode chaque programme |

Les contraintes s'empilent : en ère 4, on gère RAM + disque + CPU + bande passante.

## Systèmes communs

- **Programmes** : fenêtres déplaçables avec un X (fermer = libérer la ressource). Programmes multi-instances (autoclics, etc.).
- **Patchs** : améliorations permanentes achetées dans install.exe (onglet "Patchs").
- **Reboot (prestige)** : redémarrer l'ordinateur rend des "bits de BIOS" selon les pixels gagnés. Le BIOS (écran bleu rétro) donne des bonus permanents. C'est ce qui allonge le jeu de façon saine.
- **Menus du haut fonctionnels** : Fichier (sauvegarder, exporter, importer, redémarrer), Édition (options : notation, animations, langue), Aide (grisé tant que help.exe n'est pas installé ; ensuite astuces + blagues).
- **Pixels égarés** : bonus/malus à attraper (couleur et vraie souris utiles).
- **Succès** (~60), statistiques, progression hors ligne plafonnée (blague : "l'économiseur d'écran a travaillé pour toi").
- **Sauvegarde** automatique + export/import texte.

## Écriture et ton

Humour pince-sans-rire : notes du développeur, messages d'erreur, emails, l'assistant Bip qui donne de mauvais conseils, faux écrans de chargement. Chaque programme a une note à l'installation et à la fermeture.

## Rythme cible

Ère 1 ~1 h 30, ère 2 ~2 h, ère 3 ~2 h, ère 4 ~2 h 30, ère 5 ~2 h, ère 6 ~2 h + fin. Total ~12 h avec quelques reboots.
Règle : jamais plus de ~3 min sans un nouvel achat, une note ou un événement.

## Architecture technique

Fichiers séparés (GitHub Pages) : `index.html` (structure + styles), `data.js` (programmes, textes FR/EN, ères), `game.js` (état, boucle, sauvegarde, fenêtres, menus, terminal). Simulation d'équilibrage par bot dans un onglet de test séparé.

## Phases de développement

1. Architecture + époque 0 (terminal tutoriel) + ère 1 complète (RAM, patchs, menus, sauvegarde, succès de base).
2. Reboot / BIOS (prestige).
3. Ère 2 (disque + modem).
4. Ère 3 (CPU, Bip, écran bleu).
5. Ère 4 (internet, emails, histoire).
6. Ère 5 (mobile, batterie).
7. Ère 6 (cloud, fin).
8. Équilibrage global 10-15 h, succès complets, polish, publication.
