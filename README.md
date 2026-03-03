# 🐎 Pégase — Site E-Commerce Équestre

Projet réalisé dans le cadre du cours de **Design System** (5ème année).  
Il s'agit d'un site e-commerce dédié à la **vente et à la location de chevaux**, construit entièrement avec notre design system maison : **[Pegase DS](https://www.npmjs.com/package/@pegaseoff/pegase-ds)**.

---

## Contexte du projet

L'objectif de ce projet est de mettre en pratique un design system développé en parallèle dans le cours, en l'intégrant dans une application web réelle et fonctionnelle.

Le thème choisi est l'**univers équestre** : le site permet de découvrir, louer ou acheter des chevaux de races variées (Mustang, Pur-sang, Frison, Arabe…), chacun présenté avec ses origines, sa race et une description.

---

## Stack technique

| Technologie | Version |
|---|---|
| React | 19 |
| TypeScript | 5.9 |
| Vite | 7 |
| React Router DOM | 7 |
| Pegase DS | 0.1.x |

---

## Structure du projet

```
src/
├── Components/
│   ├── Vitrine.tsx      # Page d'accueil (hero, présentation, avantages)
│   ├── HorseList.tsx    # Liste de tous les chevaux disponibles
│   ├── HorseCard.tsx    # Carte individuelle d'un cheval
│   └── Footer.tsx       # Pied de page du site
├── data/
│   └── horses.json      # Catalogue des chevaux (nom, race, origine, description, image)
├── types/
│   └── Horse.ts         # Type TypeScript pour un cheval
├── Style/
│   ├── App.css
│   ├── HorseCard.css
│   └── HorseList.css
└── App.tsx              # Routage principal
```

---

## Pages & Fonctionnalités

- **Accueil (`/`)** — Vitrine du site avec hero, présentation de la passion équestre et mise en avant des avantages (sélection, santé, livraison).
- **Produits (`/products`)** — Catalogue des chevaux sous forme de cards, avec badge race/origine, description, et boutons **Louer** / **Acheter**.
  - Au clic sur **Louer**, l'image du cheval s'anime en plein écran puis revient à la normale.
- **Nous Rejoindre (`/join_us`)** — Page à développer (recrutement, partenaires).
- **À propos (`/about`)** — Page à développer (histoire, équipe).
- **Paramètres (`/settings`)** — Page à développer.

---

## Design System — Pegase DS

Tous les composants UI (cards, boutons, badges, menu, footer…) proviennent du package `@pegaseoff/pegase-ds`, développé en interne dans le cadre du même cours. Cela garantit une cohérence visuelle sur l'ensemble de l'application.

---

## Lancer le projet

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:5173](http://localhost:5173).

---

## Auteurs

**Yous Lisa** - **Mohamed Arezki Chegrani** - **Azevedo Raphaël**