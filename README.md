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

## 🧠 Gestion d’état et architecture

Le projet utilise des Contexts React pour la gestion de l’état global :

- `VideoContext` → stocke les vidéos (mockées)
- `AuthContext` → gère l’état de connexion utilisateur

Les services (`videoService.ts`, `authService.ts`) sont mockés mais conçus pour facilement se connecter à un backend (fetch/axios).
Cela permet une séparation claire entre logique d’affichage et logique métier.

---

## 🏗️ Choix techniques

| Technologie                       | Raison du choix                                                   |
| --------------------------------- | ----------------------------------------------------------------- |
| **Next.js (App Router)**          | Framework fullstack, SSR/SSG, routes dynamiques, layout imbriqués |
| **TypeScript**                    | Typage strict, robustesse, meilleure expérience dev               |
| **Tailwind CSS**                  | Design rapide, responsive, personnalisable                        |
| **Lucide React**                  | Icônes SVG modernes et légères                                    |
| **Custom fonts (Kanit, Poppins)** | Pour un look moderne et lisible                                   |

## 🚀 Installation et démarrage

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/august-dev-pro/ilearning-tv.git
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
      /fonts
        /Kanit
          Kanit-Bold.ttf
          Kanit-Regular.ttf
          ...
        /Poppins
          Poppins-Bold.ttf
          Poppins-Regular.ttf
          ...
      /images
        banner.jpg
        live_teaching.jpg
        stephan-wahl.jpeg
        /logos
          apple-logo.png
          facebook-logo.png
          google-logo.png
        /screenshots
          iLearning TV Home.png
          iLearning TV videoDetails.png
          iLearning TV Login.png
          iLearning TV Sign-up.png
          iLearning TV searchModale.png

    /src
      /app
        /categories/page.tsx            → Page des catégories
        /live/page.tsx                  → Page "en direct"
        /live/[id]/page.tsx             → Page détail live
        /login/page.tsx                 → Page de connexion
        /sign-up/page.tsx               → Page d’inscription
        /videos/[id]/page.tsx           → Page détail vidéo
        /search/[slug]/page.tsx         → Page de recherche
        /categories/[category]/page.tsx → Page vidéos par catégorie

      /components
        /navigation
        /footer/Footer.tsx              → Footer global
        /header/Header.tsx              → Header global
        /ui
          PlayButton.tsx                → Bouton lecture
          SectionHeader.tsx             → En-tête de section (avec lien "Voir tout")
          ShowMore.tsx                  → Bouton dérouler plus de vidéos
          SocialLoginButtons.tsx        → Boutons sociaux Google/Facebook/Apple
          card.tsx                      → Composant carte générique
          input.tsx                     → Composant champ d’input stylisé
          SearchModal.tsx               → Modale de recherche
          SkeletonLoader.tsx            → Loader générique
          skeletons/PlayVideoPageSkeleton.tsx → Skeleton spécifique vidéo
        /videos
          FeaturedVideoBanner.tsx       → Bandeau vidéo mise en avant
          LiveVideoCard.tsx             → Carte vidéo "en direct"
          VideoCard.tsx                 → Carte vidéo standard
          VideoCard2.tsx                → Autre variation de carte vidéo
          SuggestionsVideos.tsx         → Suggestions de vidéos

      /contexts
        AuthContext.tsx                 → Contexte d’authentification
        VideosContext.tsx               → Contexte des vidéos

      /services
        videoService.ts                 → Service vidéos (mock)
        authService.ts                  → Service auth (mock)

      /types
        User.ts                         → Type utilisateur
        Video.ts                        → Type vidéo

      /lib
        /api/videosData.ts              → Données simulées des vidéos
        /utils/utils.ts                 → Fonctions utilitaires

    tailwind.config.ts                  → Configuration Tailwind CSS
    README.md                           → Documentation du projet

## 📸 Captures d’écran de quelques pages

### home page

![iLearning TV Home Page](./public/images/screenshots/iLearning%20TV%20Home.png)

### video details page

![iLearning TV Video Details Page](./public/images/screenshots/iLearning%20TV%20videoDetails.png)

### Login page

![iLearning TV Login Page](./public/images/screenshots/iLearning%20TV%20Login.png)

### Sign-up page

![logo iLearning TV](./public/images/screenshots/iLearning%20TV%20Sign-up.png)

### Modale de recherche

![iLearning TV Search Modael](./public/images/screenshots/iLearning%20TV%20searchModale.png)

## 🌍 Déploiement

Le projet est déjà déployé sur Vercel :
➡️ [https://ilearning-tv.vercel.app](https://ilearning-tv.vercel.app)

## Ce projet est prêt à être connecté à :

- Une API backend pour gérer les vidéos (Récupération dynamique)

## 📞 Contact

Projet réalisé par : **Augustin Selete**
Pour Tambours Multimédias - Test Développeur WebTV
Email : [ augustdev.01@gmail.com ]
