# Publication de PIXEL-OS sur galaxy.click

Rien n'a été publié ni poussé : tout est local, dans ce dossier. C'est toi qui publies.

## 1. Titre

PIXEL-OS

## 2. Description du jeu

galaxy.click est anglophone : la version anglaise va dans le champ description, la française dessous ou en commentaire.

### English

A developer made one pixel in 1984. He's still not done.

PIXEL-OS is an incremental game where everything uses memory, including the interface. Your score, your colors, even your mouse cursor are programs that take room. You can't run everything at once: you choose, close windows, and make room.

Start in a green terminal. Find a punched card. Then live through six operating systems, each with its own new problem: a modem that screeches (and Mom picking up the phone), a CPU that panics into a blue screen, pop-ups, a phone battery that dies at the worst moment, and finally an AI that wants to recode your whole computer and finish the game for you.

- 7 eras, each with its own look: terminal, 1-bit, DOS, Winbows 95, Winbows XD, a phone, Winbows 12
- RAM, modem, CPU, bandwidth, battery and subscriptions, stacking up
- Stray pixels, viruses, an assistant named Bip, password hacking
- 60 achievements, offline progress, a real ending, and New Game+
- About 10 to 12 hours. English and French. Saves automatically, export/import in the menus.

### Français

Un développeur a fait un pixel en 1984. Il n'a toujours pas fini.

PIXEL-OS est un jeu incrémental où tout utilise de la mémoire, y compris l'interface. Ton score, tes couleurs, même ton curseur sont des programmes qui prennent de la place. Impossible de tout lancer : tu choisis, tu fermes des fenêtres, tu fais de la place.

Ça commence dans un terminal vert. Une carte perforée arrive. Puis tu traverses six systèmes d'exploitation, chacun avec un nouveau problème : un modem qui hurle (et Maman qui décroche le téléphone), un processeur qui panique en écran bleu, des pop-ups, une batterie de téléphone qui meurt au pire moment, et enfin une IA qui veut recoder tout ton ordinateur et finir le jeu à ta place.

- 7 époques, chacune avec son look : terminal, 1-bit, DOS, Winbows 95, Winbows XD, un téléphone, Winbows 12
- RAM, modem, processeur, bande passante, batterie et abonnements, qui s'empilent
- Pixels égarés, virus, un assistant nommé Bip, piratage de mots de passe
- 60 succès, progression hors ligne, une vraie fin, et une Nouvelle partie+
- Environ 10 à 12 heures. Français et anglais. Sauvegarde automatique, export/import dans les menus.

## 3. Tags suggérés

incremental, clicker, idle, retro, story, humor, parody, prestige

## 4. Image de couverture

`cover.png` (1000 x 600). Elle a été générée par un script (`tools/cover.py`), pas dessinée à la main.

## 5. Déclaration IA (à écrire toi-même)

galaxy.click demande de déclarer l'usage d'IA et refuse les déclarations écrites par une IA : je ne l'écris donc pas à ta place. Les faits à couvrir, honnêtement :

- le code du jeu a été écrit avec un assistant IA (Claude) ;
- les textes (blagues, histoire, traductions) aussi, à partir de tes idées (les livraisons parodiques Minosoft / IDM / CD du futur / brique / robot, l'ère 0 en terminal façon Fallout, le curseur en point blanc) ;
- l'image de couverture et tous les visuels sont générés par du code ;
- tu as conçu le concept, testé et dirigé les changements.

## 6. Mise en ligne (GitHub Pages, comme pour le Grenier)

Fichiers à publier : `index.html`, `data.js`, `era2.js` à `era6.js`, `game.js`, `cover.png`.
Ne pas publier : `tools/`, `old-slice.html`, `DESIGN.md`, `PROGRESS.md`, ce fichier.

1. Créer un dépôt (par ex. `zuralon/pixel-os`) et y mettre les fichiers ci-dessus.
2. Activer GitHub Pages sur la branche principale.
3. Soumettre l'URL `https://zuralon.github.io/pixel-os/` sur galaxy.click.

À chaque mise à jour du jeu, augmenter le numéro `?v=` des balises `<script>` dans `index.html` pour que les navigateurs rechargent les fichiers.
