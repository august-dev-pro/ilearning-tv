# 📺 iLearning TV

**iLearning TV** est une mini-plateforme web de vidéos éducatives réalisée pour le test technique Développeur WebTV.
Elle permet de parcourir, filtrer et consulter des vidéos éducatives gratuites classées par sections (recommandées, en direct, populaires, tendances, derniers posts), avec une interface moderne et responsive.

---

## ✨ Fonctionnalités principales

- Page d’accueil avec sections dynamiques :
  - Vidéos recommandées
  - En direct maintenant
  - Catégories populaires
  - Vidéos en tendances
  - Derniers posts
- Composant **ShowMore** pour dérouler plus de contenu dans chaque section
- Pages de détail pour chaque section (`/videos/[section]`)
- Page de connexion :
  - Formulaire email / mot de passe
  - Boutons de connexion sociale (Google, Facebook, Apple) designés (prêts à brancher au backend)
- Page d’inscription :
  - Formulaire complet
  - Boutons de création de compte via Google, Facebook, Apple
- Header et footer globaux, exclus sur les pages Login et Sign-up
- Inputs stylisés avec focus doux et transition fluide
- Code structuré avec Next.js (App Router) et Tailwind CSS

---

## 🏗️ Choix techniques

| Technologie                       | Raison du choix                                                           |
| --------------------------------- | ------------------------------------------------------------------------- |
| **Next.js (App Router)**          | Framework fullstack, SSR/SSG, routes dynamiques, layout imbriqués         |
| **TypeScript**                    | Typage strict, robustesse, meilleure expérience dev                       |
| **Tailwind CSS**                  | Design rapide, responsive, personnalisable                                |
| **Lucide React**                  | Icônes SVG modernes et légères                                            |
| **NextAuth (préparé)**            | Préparation pour l’authentification sociale pro (Google, Facebook, Apple) |
| **Custom fonts (Kanit, Poppins)** | Pour un look moderne et lisible                                           |

## 🚀 Installation et démarrage

### 1️⃣ Cloner le projet

```bash
git clone <repo-url>
cd ilearning-tv
```

### 2️⃣ Installer les dépendances

```bash
npm install
# ou
yarn install
```

### 3️⃣ Lancer le serveur de développement

```bash
npm run dev
# ou
yarn dev
```

### 4️⃣ Ouvrir dans le navigateu

Visitez http://localhost:3000

## 📂 Structure du projet

    /public
    /fonts/
        Kanit/*.ttf
        Poppins/*.ttf
    /images/
        banner.jpg
        live_teaching.jpg
        logos/apple-logo.png
        logos/facebook-logo.png
        logos/google-logo.png
        stephan-wahl.jpeg

    /src
    /app
        /categories/page.tsx            → Page des catégories
        /live/page.tsx                  → Page "en direct"
        /login/page.tsx                 → Page de connexion
        /sign-up/page.tsx               → Page d’inscription
        /videos/[id]/page.tsx           → Page détail vidéo

    /components
        /navigation
        /footer/Footer.tsx            → Footer global
        /header/Header.tsx            → Header global
        /ui
        PlayButton.tsx                → Bouton lecture
        SectionHeader.tsx             → En-tête de section (avec lien "Voir tout")
        ShowMore.tsx                  → Bouton dérouler plus de vidéos
        SocialLoginButtons.tsx        → Boutons sociaux Google/Facebook/Apple
        card.tsx                      → Composant carte générique
        input.tsx                     → Composant champ d’input stylisé
        /videos
        FeaturedVideoBanner.tsx       → Bandeau vidéo mise en avant
        LiveVideoCard.tsx             → Carte vidéo "en direct"
        VideoCard.tsx                 → Carte vidéo standard
        VideoCard2.tsx                → Autre variation de carte vidéo

    /lib
        /api/videosData.ts              → Données simulées des vidéos
        /utils/utils.ts                 → Fonctions utilitaires

    tailwind.config.ts                  → Configuration Tailwind CSS

## 📸 Captures d’écran (à ajouter)

    (Tu peux insérer ici des screenshots une fois que tu les as)

## 🌍 Déploiement

Prévu pour être hébergé sur Vercel, mais peut être hébergé sur Netlify ou autre.
Pour déployer, configure les variables d’environnement (pour les providers OAuth) et poussez votre dépôt.

🛠️ Instructions backend (préparé)

## Ce projet est prêt à être connecté à :

- Une API backend pour gérer les vidéos (Récupération dynamique)

- Un système d’authentification OAuth (Google, Facebook, Apple) via NextAuth

## 📞 Contact

Projet réalisé par : **Augudtin Selete**
Pour Tambours Multimédias - Test Développeur WebTV
Email : [ augustinselete01@gmail.com ]
