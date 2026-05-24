# GAMEZONE.HT — Fichier de connaissance du projet
> Ce fichier est la référence complète du projet. Tout AI (Claude, Gemini, Cursor, Copilot, etc.) qui lit ce fichier comprend automatiquement comment fonctionne le site, comment classer les jeux, et quelles modifications apporter.

---

## 1. PRÉSENTATION DU PROJET

**Nom du site :** GameZone.ht  
**Service :** Installation professionnelle de jeux vidéo PC  
**Adresse :** Delmas 75, Cassagnole 27, Port-au-Prince, Haïti  
**WhatsApp :** +50933428510  
**Facebook :** GameZone Haiti  
**Horaires :** 09h00 – 20h00  

---

## 2. CONTEXTE DU MARCHÉ (IMPORTANT)

Le site s'adresse à des clients haïtiens à Port-au-Prince. La majorité des clients ont :
- Un laptop moyen (Dell, HP, Lenovo) acheté d'occasion
- **8 GO de RAM** (rarement 16 GO)
- **GPU intégré Intel HD** ou au mieux une **GTX 1050**
- Un disque dur HDD de 500 GO ou SSD de 256 GO souvent presque plein
- Windows 10 64-bit dans la majorité des cas

Ce contexte est essentiel pour classer chaque jeu dans la bonne catégorie de compatibilité.

---

## 3. SYSTÈME DE COMPATIBILITÉ — LES 3 BADGES

Chaque jeu reçoit obligatoirement un badge parmi les trois suivants :

### 🟢 BADGE VERT — "✓ Tous PC"
- **Signification :** Compatible avec tous les laptops haïtiens typiques
- **Configuration requise :** 8 GO RAM · GPU intégré Intel HD / GTX 650 suffisant · Windows 7/10
- **Message dans la carte :** `Compatible tous laptops` / `8 GO RAM · GPU intégré suffisant`
- **Règle :** Jeu sorti avant 2018, taille ≤ 60 GO, prérequis CPU ≤ i5 gen 4, RAM ≤ 8 GO, GPU ≤ GTX 760

### 🟡 BADGE JAUNE — "⚠ GPU requis"
- **Signification :** Nécessite une carte graphique dédiée basique
- **Configuration requise :** 8 GO RAM minimum · GTX 1050 / RX 470 · Windows 10
- **Message dans la carte :** `GPU dédié requis` / `GTX 1050 · 8 GO RAM minimum`
- **Règle :** Jeu sorti entre 2018–2022, OU taille entre 40–80 GO, OU prérequis GPU entre GTX 760 et GTX 1060

### 🔴 BADGE ROUGE — "⚡ PC Gaming"
- **Signification :** Réservé aux PC gaming — ne tourne pas sur laptop moyen
- **Configuration requise :** 16 GO RAM · GTX 1650 minimum · Windows 10/11 · beaucoup d'espace disque
- **Message dans la carte :** `PC gaming nécessaire` / `GTX 1650 · 16 GO RAM · espace disque important`
- **Règle :** Jeu sorti après 2022, OU taille > 80 GO, OU prérequis GPU ≥ GTX 1070, OU RAM requise ≥ 16 GO

---

## 4. RÈGLES DE CLASSEMENT D'UN NOUVEAU JEU

Quand un nouveau jeu est ajouté, appliquer ces règles dans l'ordre :

```
SI (année < 2018) ET (GO requis ≤ 60) ET (GPU min ≤ GTX 760)
  → BADGE VERT

SI (année entre 2018-2022) OU (GO requis entre 40-80) OU (GPU min entre GTX 760 et GTX 1060)
  → BADGE JAUNE

SI (année > 2022) OU (GO requis > 80) OU (GPU min ≥ GTX 1070) OU (RAM ≥ 16 GO requise)
  → BADGE ROUGE
```

**En cas de doute entre VERT et JAUNE :** choisir JAUNE (mieux vaut prévenir)  
**En cas de doute entre JAUNE et ROUGE :** choisir ROUGE (protéger le client)

---

## 5. DESIGN DE CHAQUE CARTE DE JEU

```
┌─────────────────────────┐
│ [BADGE VERT/JAUNE/ROUGE] │  ← haut à gauche sur l'image
│                         │
│     IMAGE / COULEUR     │
│       DU JEU            │
│                         │
│ [PRIX EN GDES]          │  ← bas à gauche sur l'image
│                         │     fond noir semi-transparent
├─────────────────────────┤
│ Nom du jeu              │  ← titre
│ 🖫 XX GO requis         │  ← espace disque nécessaire (pas taille du jeu)
│ ┌─────────────────────┐ │
│ │ ✓ Compatible tous   │ │  ← bloc coloré selon badge
│ │   laptops           │ │
│ │ 8 GO RAM · GPU      │ │
│ │ intégré suffisant   │ │
│ └─────────────────────┘ │
│ [ 💬 Commander ]        │  ← bouton vert WhatsApp
└─────────────────────────┘
```

**Ce qui N'EST PAS affiché sur la carte :**
- ❌ L'année de sortie du jeu
- ❌ Le prix n'apparaît PAS sous l'image — il est SUR l'image (bas à gauche)
- ❌ La taille réelle du jeu — on affiche l'espace disque requis

---

## 6. FORMAT DU MESSAGE WHATSAPP

Quand le client clique sur "Commander", WhatsApp s'ouvre avec ce message pré-écrit :

```
Slt je veux [NOM DU JEU] prix [PRIX]gdes a kel heure je peux passer pou installation
```

**Exemples :**
- GTA V → `Slt je veux GTA V prix 4000gdes a kel heure je peux passer pou installation`
- GTA IV → `Slt je veux GTA IV prix 3000gdes a kel heure je peux passer pou installation`
- FIFA 19 → `Slt je veux FIFA 19 prix 3000gdes a kel heure je peux passer pou installation`
- COD MW3 2023 → `Slt je veux COD MW3 2023 prix 4000gdes a kel heure je peux passer pou installation`
- Minecraft → `Slt je veux Minecraft prix 1000gdes a kel heure je peux passer pou installation`

**Format du lien WhatsApp :**
```
https://wa.me/50933428510?text=Slt%20je%20veux%20[JEU]%20prix%20[PRIX]gdes%20a%20kel%20heure%20je%20peux%20passer%20pou%20installation
```

---

## 7. GRILLE DES PRIX

Les prix sont en **Gourdes haïtiennes (Gdes)**. Fourchette : **1 000 Gdes (minimum) → 4 000 Gdes (maximum)**.  
Les prix dépendent de **3 facteurs** : taille du jeu, année de sortie, et popularité du titre.

### Grille de base (taille + année)

| Taille du jeu | Avant 2015 | 2015–2019 | 2020–2022 | 2023–aujourd'hui |
|---|---|---|---|---|
| Petit (1–15 GO) | 1 000 | 1 500 | 2 000 | 2 500 |
| Moyen (16–40 GO) | 1 500 | 2 000 | 2 500 | 3 000 |
| Grand (41–80 GO) | 2 000 | 2 500 | 3 000 | 3 500 |
| Très grand (80 GO+) | 2 500 | 3 000 | 3 500 | 4 000 |

### Ajustement popularité (override possible)

Certains jeux très populaires commandent un prix supérieur à la grille :
- **GTA V** (76 GO · 2015) = **4 000 Gdes** ← très forte demande
- **GTA IV** (15 GO · 2008) = **3 000 Gdes** ← très forte demande
- Pour les jeux ultra-populaires : appliquer +500 à +1 000 Gdes par rapport à la grille de base

### Règle de calcul pour un nouveau jeu
```
1. Appliquer la grille taille + année → prix de base
2. Si le jeu est très connu / très demandé → ajouter 500 à 1 000 Gdes
3. Le prix final ne peut pas dépasser 4 000 Gdes ni être inférieur à 1 000 Gdes
```

---

## 8. CATALOGUE ACTUEL DES JEUX

### FORMAT : Nom · GO requis · Prix Gdes · Badge · Catégorie

---

### 🎯 ACTION / AVENTURE

| Jeu | GO requis | Prix | Badge |
|---|---|---|---|
| GTA V | 76 GO | 4 000 Gdes | 🟢 VERT |
| GTA IV | 15 GO | 3 000 Gdes | 🟢 VERT |
| GTA San Andreas | 4 GO | 1 000 Gdes | 🟢 VERT |
| Batman Arkham Knight | 45 GO | 2 000 Gdes | 🟢 VERT |
| Batman Arkham City | 8 GO | 1 000 Gdes | 🟢 VERT |
| Batman Arkham Origins | 12 GO | 1 000 Gdes | 🟢 VERT |
| Prototype 1 | 8 GO | 1 000 Gdes | 🟢 VERT |
| Prototype 2 | 10 GO | 1 000 Gdes | 🟢 VERT |
| Spider-Man Remastered | 75 GO | 3 500 Gdes | 🔴 ROUGE |
| God of War (2022) | 45 GO | 3 000 Gdes | 🟡 JAUNE |
| Assassin's Creed Black Flag | 15 GO | 1 000 Gdes | 🟢 VERT |
| Watch Dogs 2 | 50 GO | 2 500 Gdes | 🟡 JAUNE |
| Uncharted 4 | 60 GO | 3 000 Gdes | 🟡 JAUNE |

---

### 🔫 FPS / TIR

| Jeu | GO requis | Prix | Badge |
|---|---|---|---|
| Call of Duty MW3 (2011) | 16 GO | 1 500 Gdes | 🟢 VERT |
| Call of Duty MW2 (2009) | 15 GO | 1 500 Gdes | 🟢 VERT |
| Call of Duty 4 Modern Warfare | 8 GO | 1 000 Gdes | 🟢 VERT |
| Call of Duty Black Ops 1 | 20 GO | 1 500 Gdes | 🟢 VERT |
| Call of Duty Black Ops 2 | 18 GO | 1 500 Gdes | 🟢 VERT |
| Call of Duty World at War | 8 GO | 1 000 Gdes | 🟢 VERT |
| Call of Duty MW3 (2023) | 130 GO | 4 000 Gdes | 🔴 ROUGE |
| Far Cry 3 | 15 GO | 1 000 Gdes | 🟢 VERT |
| Far Cry 5 | 40 GO | 2 500 Gdes | 🟡 JAUNE |
| Left 4 Dead 2 | 13 GO | 1 000 Gdes | 🟢 VERT |

---

### 🥊 COMBAT

| Jeu | GO requis | Prix | Badge |
|---|---|---|---|
| Mortal Kombat 11 | 55 GO | 2 500 Gdes | 🟢 VERT |
| Mortal Kombat X | 50 GO | 2 000 Gdes | 🟢 VERT |
| Mortal Kombat (2011) | 40 GO | 1 500 Gdes | 🟢 VERT |
| Mortal Kombat 1 (2023) | 100 GO | 4 000 Gdes | 🔴 ROUGE |
| Tekken 7 | 60 GO | 2 500 Gdes | 🟢 VERT |
| Street Fighter V | 42 GO | 2 000 Gdes | 🟢 VERT |
| Dragon Ball FighterZ | 19 GO | 1 500 Gdes | 🟢 VERT |
| WWE 2K22 | 50 GO | 2 500 Gdes | 🟡 JAUNE |

---

### ⚽ SPORT

| Jeu | GO requis | Prix | Badge |
|---|---|---|---|
| FIFA 25 | 50 GO | 3 500 Gdes | 🟡 JAUNE |
| FIFA 23 | 50 GO | 3 000 Gdes | 🟡 JAUNE |
| FIFA 19 | 65 GO | 3 000 Gdes | 🟢 VERT |
| FIFA 16 | 15 GO | 1 500 Gdes | 🟢 VERT |
| FIFA 13 | 10 GO | 1 000 Gdes | 🟢 VERT |
| FIFA 11 | 8 GO | 1 000 Gdes | 🟢 VERT |
| PES 2021 | 26 GO | 2 000 Gdes | 🟢 VERT |
| Rocket League | 20 GO | 1 500 Gdes | 🟢 VERT |
| NBA 2K19 | 80 GO | 2 500 Gdes | 🟡 JAUNE |
| NBA 2K24 | 130 GO | 4 000 Gdes | 🔴 ROUGE |

---

### 🏎️ COURSE

| Jeu | GO requis | Prix | Badge |
|---|---|---|---|
| NFS Most Wanted (2012) | 30 GO | 1 500 Gdes | 🟢 VERT |
| NFS Underground 2 | 3 GO | 1 000 Gdes | 🟢 VERT |
| NFS Rivals | 15 GO | 1 000 Gdes | 🟢 VERT |
| NFS Payback | 30 GO | 2 000 Gdes | 🟢 VERT |
| NFS Heat | 50 GO | 2 500 Gdes | 🟡 JAUNE |
| Burnout Paradise | 5 GO | 1 000 Gdes | 🟢 VERT |
| F1 23 | 45 GO | 3 000 Gdes | 🟡 JAUNE |

---

### 🗺️ RPG / STRATÉGIE

| Jeu | GO requis | Prix | Badge |
|---|---|---|---|
| Skyrim Special Edition | 12 GO | 1 500 Gdes | 🟢 VERT |
| Dark Souls 3 | 15 GO | 1 500 Gdes | 🟢 VERT |
| The Witcher 3 | 35 GO | 2 000 Gdes | 🟡 JAUNE |
| Dragon Age Inquisition | 26 GO | 1 500 Gdes | 🟢 VERT |
| Civilization VI | 15 GO | 1 500 Gdes | 🟢 VERT |
| Red Dead Redemption 2 | 107 GO | 4 000 Gdes | 🔴 ROUGE |

---

### 👻 HORREUR / SURVIE

| Jeu | GO requis | Prix | Badge |
|---|---|---|---|
| Resident Evil 5 | 8 GO | 1 000 Gdes | 🟢 VERT |
| Resident Evil 6 | 16 GO | 1 000 Gdes | 🟢 VERT |
| Resident Evil 4 Remake | 67 GO | 3 000 Gdes | 🟡 JAUNE |
| Outlast | 6 GO | 1 000 Gdes | 🟢 VERT |
| Dying Light | 40 GO | 1 500 Gdes | 🟢 VERT |
| Zombie Shooter | 2 GO | 1 000 Gdes | 🟢 VERT |
| Left 4 Dead 2 | 13 GO | 1 000 Gdes | 🟢 VERT |

---

### 😊 CASUAL / FAMILLE

| Jeu | GO requis | Prix | Badge |
|---|---|---|---|
| Minecraft | 1 GO | 1 000 Gdes | 🟢 VERT |
| Cuphead | 3 GO | 1 000 Gdes | 🟢 VERT |
| Shank 1 | 3 GO | 1 000 Gdes | 🟢 VERT |
| Shank 2 | 3 GO | 1 000 Gdes | 🟢 VERT |
| Stardew Valley | 1 GO | 1 000 Gdes | 🟢 VERT |
| Terraria | 1 GO | 1 000 Gdes | 🟢 VERT |
| Among Us | 1 GO | 1 000 Gdes | 🟢 VERT |
| Plants vs Zombies GW2 | 20 GO | 1 000 Gdes | 🟢 VERT |

---

## 9. COMMENT AJOUTER UN NOUVEAU JEU

Quand le propriétaire dit "ajoute [NOM DU JEU]", voici la procédure :

**Étape 1 — Trouver les prérequis officiels du jeu**
Rechercher sur Google : `[NOM DU JEU] PC system requirements`

**Étape 2 — Appliquer la grille de badge**
```
RAM requise ≥ 16 GO  →  ROUGE
GPU requis ≥ GTX 1070  →  ROUGE
Taille > 80 GO  →  ROUGE
Année > 2022  →  ROUGE (sauf si config très légère)

GPU requis entre GTX 760 et GTX 1060  →  JAUNE
Taille entre 40-80 GO ET année 2018-2022  →  JAUNE

Tout le reste  →  VERT
```

**Étape 3 — Calculer le prix avec la grille**
```
FOURCHETTE : 1 000 Gdes (min) → 4 000 Gdes (max)

Taille 1-15 GO  +  avant 2015  =  1 000 Gdes
Taille 1-15 GO  +  2015-2019   =  1 500 Gdes
Taille 1-15 GO  +  2020-2022   =  2 000 Gdes
Taille 1-15 GO  +  2023+       =  2 500 Gdes

Taille 16-40 GO  +  avant 2015  =  1 500 Gdes
Taille 16-40 GO  +  2015-2019   =  2 000 Gdes
Taille 16-40 GO  +  2020-2022   =  2 500 Gdes
Taille 16-40 GO  +  2023+       =  3 000 Gdes

Taille 41-80 GO  +  avant 2015  =  2 000 Gdes
Taille 41-80 GO  +  2015-2019   =  2 500 Gdes
Taille 41-80 GO  +  2020-2022   =  3 000 Gdes
Taille 41-80 GO  +  2023+       =  3 500 Gdes

Taille 80 GO+    +  avant 2015  =  2 500 Gdes
Taille 80 GO+    +  2015-2019   =  3 000 Gdes
Taille 80 GO+    +  2020-2022   =  3 500 Gdes
Taille 80 GO+    +  2023+       =  4 000 Gdes

AJUSTEMENT popularité (jeux très demandés) :
→ Ajouter 500 à 1 000 Gdes si le jeu est ultra-populaire (ex: GTA, FIFA récent)
→ Exemples de référence : GTA V = 4 000 Gdes · GTA IV = 3 000 Gdes
→ Maximum absolu : 4 000 Gdes
```

**Étape 4 — Générer le lien WhatsApp**
```
https://wa.me/50933428510?text=Slt%20je%20veux%20[JEU_ENCODE]%20prix%20[PRIX]gdes%20a%20kel%20heure%20je%20peux%20passer%20pou%20installation
```

**Étape 5 — Ajouter dans ce fichier**
Ajouter le jeu dans le bon tableau de la section 8.

---

## 10. STRUCTURE DU SITE

```
/ (Accueil)
  ├── Hero : "GAME ON." + badges consoles + bouton WhatsApp
  ├── Catalogue : grille filtrée par catégorie
  ├── Tarifs : 4 cartes de prix
  ├── Comment ça marche : 4 étapes
  └── Contact : WhatsApp + Facebook + Adresse

Bouton WhatsApp flottant visible sur toutes les pages.
```

---

## 11. NOTES IMPORTANTES

- Les **années** des jeux ne s'affichent PAS sur les cartes du site
- Le **prix** s'affiche sur l'IMAGE (bas à gauche), pas en dessous
- L'espace disque affiché = **espace requis** (légèrement plus que la taille du jeu)
- Le site est en **français uniquement**
- La monnaie est toujours en **Gourdes haïtiennes (Gdes)**
- Le numéro WhatsApp : **+509 33 42 85 10**
- Le style visuel du site est **Matrix Vert** (fond noir #0D1117, texte vert néon #00FF88)

---

*Dernière mise à jour : Mai 2025 — GameZone.ht — Prix mis à jour : 1 000 à 4 000 Gdes*
