# 🇸🇳 Mokodomo — Platform & Site Vitrine de Livraison de Repas

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Firebase Hosting](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/docs/hosting)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**Mokodomo** est une plateforme web moderne et responsive dédiée à la livraison rapide de repas au Sénégal. Conçue pour offrir une expérience utilisateur fluide, rapide et adaptée aux réalités locales, Mokodomo met en avant la richesse de la gastronomie sénégalaise (Thiéboudiène, Yassa, Mafé, Baxal, Mboroxai) ainsi que la restauration internationale, avec intégration native des moyens de paiement mobiles locaux (**Wave**, **Orange Money**, **Free Money**).

---

## 🌟 Sommaire

- [Démo & Aperçu](#-démo--aperçu)
- [Fonctionnalités Clés](#-fonctionnalités-clés)
- [Technologies & Architecture](#-technologies--architecture)
- [Structure du Projet](#-structure-du-projet)
- [Installation & Lancement Local](#-installation--lancement-local)
- [Déploiement & CI/CD](#-déploiement--cicd)
- [Contributeurs & Licence](#-contributeurs--licence)

---

## 📱 Démo & Aperçu

La vitrine Mokodomo intègre des interactions UI/UX avancées pour valoriser le service auprès des clients et des restaurateurs partenaires :

- **Hero 3D & Canvas de Particules** : Animation de particules interactives réagissant au mouvement de la souris et simulation de l'interface mobile en parallaxe.
- **Cartes 3D Flip** : Présentation interactive du parcours client en 4 étapes et bento grid des fonctionnalités au survol.
- **Menu Filtrable en Temps Réel** : Explorez les catégories de plats (Locaux, Viandes, Pizzas, Autres) avec prix en FCFA.
- **Dashboard Restaurateur Simulé** : Aperçu interactif des KPIs (revenus, commandes, notes) et graphique des ventes pour les partenaires.
- **Modales Dynamiques** : Formulaires interactifs pour le contact, le partenariat restaurateur et la soumission d'avis avec notation par étoiles (Star Rating UI).

---

## 🚀 Fonctionnalités Clés

### 🎨 Expérience Visuelle & Micro-Animations
- **Curseur Magnétique Personnalisé** : Suivi fluide du curseur avec agrandissement au survol des éléments interactifs.
- **Animation de Titre** : Titre Hero animé lettre par lettre au chargement.
- **Bandeau Ticker Infini** : Défilement fluide mettant en avant les plats et services phares.
- **Compteurs Animés** : Animation progressive des statistiques (+50 000 clients, 2 400+ restaurants, 18 min délai moyen, note 4.9/5).

### 🍲 Navigation Menu & Produits
- **Filtrage Dynamique** : Navigation instantanée entre les catégories de menus sans rechargement de page.
- **Affichage des Produits** : Visuels haute définition des plats sénégalais et internationaux avec prix clairs en FCFA.

### 💼 Espace Restaurateurs & Avis Clients
- **Espace Partenaire** : Visualisation d'un tableau de bord de gestion pour les restaurateurs avec statistiques en direct et état des commandes.
- **Système d'Avis Étoilés** : Composant de notation interactive par étoiles (1 à 5 étoiles) avec libellés dynamiques et enregistrement des commentaires.
- **Formulaires Modaux** : Gestion centralisée des modales (Contact, Partenaire, Avis) avec validation des champs et confirmation d'envoi.

---

## 🛠️ Technologies & Architecture

### Frontend
- **HTML5 Sémantique** : Structure optimisée pour le SEO et l'accessibilité web.
- **CSS3 Vanilla (Custom Properties)** :
  - Variables CSS pour un design system harmonieux (couleurs, typographies, ombres, bordures).
  - Animations 3D (`transform-style: preserve-3d`, `rotateY`, `backface-visibility`).
  - Layouts réactifs avec **Flexbox** et **CSS Grid**.
  - Glassmorphism & arrière-plans floutés (`backdrop-filter`).
- **JavaScript Vanilla (ES6+)** :
  - Canvas 2D API (`HTMLCanvasElement`) pour le moteur de particules.
  - `IntersectionObserver API` pour le déclenchement des apparitions et animations au défilement (Scroll Reveal).
  - `requestAnimationFrame API` pour des rendus fluides à 60 FPS.
  - Architecture événementielle pour la gestion des modales et des formulaires.

### Hébergement & CI/CD
- **Firebase Hosting** : Hébergement sécurisé et performant avec CDN mondial.
- **GitHub Actions** : Intégration et Déploiement Continus (CI/CD) automatiques pour chaque Pull Request et lors de la fusion sur la branche principale (`main`).

---

## 📁 Structure du Projet

```text
mokodomo-vitrine/
├── .github/
│   └── workflows/
│       ├── firebase-hosting-merge.yml         # Déploiement automatique lors d'un merge sur main
│       └── firebase-hosting-pull-request.yml  # Aperçu automatique lors d'une PR
├── .firebase/                                 # Cache & configuration Firebase
├── .firebaserc                                # Alias du projet Firebase (mokodomo-14954)
├── firebase.json                              # Configuration des règles Hosting Firebase
├── index.html                                 # Page vitrine principale HTML5
├── app.js                                     # Logique JavaScript (modales, canvas, menu, animations)
├── styles.css                                 # Design System & styles CSS3
├── 404.html                                   # Page d'erreur 404 personnalisée
└── *.png                                      # Logos et visuels des plats (athieke, yassa, baxal, etc.)
```

---

## 💻 Installation & Lancement Local

Aucun outil de build lourd (Webpack/Vite/Parcel) n'est requis. Le projet s'exécute directement dans n'importe quel navigateur web moderne.

### 1. Cloner le dépôt
```bash
git clone https://github.com/votre-compte/mokodomo-vitrine.git
cd mokodomo-vitrine
```

### 2. Lancer un serveur local

Vous pouvez utiliser n'importe quel serveur HTTP local pour tester la vitrine :

#### Via Python (intégré sur Linux/macOS) :
```bash
python3 -m http.server 8000
```
Ouvrez ensuite `http://localhost:8000` dans votre navigateur.

#### Via Node.js (`npx serve`) :
```bash
npx serve .
```

#### Via l'extension VS Code :
Utilisez l'extension **Live Server** et cliquez sur `Go Live`.

---

## 🚀 Déploiement & CI/CD

### Déploiement Automatique via GitHub Actions
Le dépôt est configuré avec **GitHub Actions** pour déployer automatiquement le site sur **Firebase Hosting** :

- **Pull Requests** : Génère un lien de prévisualisation temporaire pour tester les modifications avant validation.
- **Merge sur `main`** : Déploie automatiquement la version de production sur le canal `live`.

### Déploiement Manuel via Firebase CLI

Si vous possédez les accès au projet Firebase :

1. Installez Firebase CLI (si ce n'est pas déjà fait) :
   ```bash
   npm install -g firebase-tools
   ```

2. Connectez-vous à Firebase :
   ```bash
   firebase login
   ```

3. Déployez sur Firebase Hosting :
   ```bash
   firebase deploy --only hosting
   ```

---

## 🔒 Sécurité & Performance

- **Conformité RGPD / Protection des Données** : Cases à cocher obligatoires pour l'acceptation de la politique de confidentialité sur tous les formulaires.
- **Web Performance** : Chargement différé des images (`loading="lazy"`), scripts optimisés sans dépendances externes lourdes.
- **Design Responsive** : Adaptation sur toutes les résolutions d'écran (mobiles iOS/Android, tablettes, laptops, écrans 4K).

---

## 📜 Licence

Ce projet est sous licence **MIT**. Vous êtes libre de le modifier et de l'utiliser conformément aux termes de la licence.

---

<p align="center">
  Fait avec ❤️ au Sénégal 🇸🇳 · <strong>Mokodomo</strong> © 2025
</p>
