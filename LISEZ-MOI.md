# Projet Who Wiz It?

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Commit](https://img.shields.io/github/last-commit/ddZ6ii/WildCodeSchool/2023-02-JS-RemoteFR-JSWizards-P2-Team-Slytherin)](https://github.com/WildCodeSchool/2023-02-JS-RemoteFR-JSWizards-P2-Team-Slytherin)

Bienvenue dans le fichier README du jeu Who Whiz It?
Ce jeu interactif est inspiré du célèbre jeu "Qui Est-Ce?" adapté à l'univers d'Harry Potter.
Fans de la saga de J.K. Rowling? Venez mettre à l'épreuve vos connaissances et défier le Choixpeau!

# Description du Projet

Le jeu Who Whiz It se compose de plusieurs pages :

**📜 Page d'Acceuil:** cette page contient un formulaire permettant au joueur de personnaliser son expérience de jeu.

**📜 Page de Jeu:** page essentielle du jeu, le joueur sera tenu de trouver la carte sélectionnée par le Choixpeau dans le délai imparti. Attention, le sore décrémente en fonction du temps et du nombre d'indices utilisés.

**📜 Page des Scores:** cette page permet d'afficher le classement des parties précédentes

## 🎯 Jeu

---

Le jeu est disponible à l'adresse suivante: <br>
https://who-wiz-it.remote-fr-2.wilders.dev/

![Website Screenshot](https://user-images.githubusercontent.com/126237877/236420944-09bfd74b-c3d5-4872-8f68-9ac280388f7b.png)

## ⚙️ Technologies utilisées

---

<br>

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="10%" height="10%"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="10%" height="10%"/>

<br>

## ⚙️ Ressources

---

<br>

🌄 Images: PNGEGG <br>
https://www.pngegg.com/
<br>
<br>
🔈 Musique: DEPOSITPHOTOS<br>
https://fr.depositphotos.com/stock-music/poudlard.html?sh=2a7892e185f4e5e6108991b92315160920a18ef5

<br>

# 👥 Auteurs

👤 Oyhanna: https://github.com/OyhanaM <br>
👤 Enzo: https://github.com/enzocastagnos <br>
👤 Denis: https://github.com/ddZ6ii <br>
👤 Stéphane: https://github.com/BigBull69 <br>

## Concept

Ce template est conçu pour servir de base à tous les projets (P2/P3) suivants la stack React-Node-MySQL telle qu'enseignée à la Wild Code School. Il est préconfiguré avec un ensemble d'outils qui aideront les élèves à produire un code correspondant mieux aux standards du monde du travail et plus facile à maintenir, tout en restant simple à utiliser.

## Installation & Utilisation

### Pour commencer un projet

- Sur VSCode, installer les plugins **Prettier - Code formatter** et **ESLint** et les configurer
- Cloner ce dépôt, se rendre à l'intérieur
- Si vous utilisez `yarn` ou `pnpm`, adapter `config/cli` dans le fichier `package.json`
- Lancer la commande `npm install`
- _NB: Pour exécuter le backend, un fichier d'environnement avec les données de connexion d'une BdD valide est nécesaire. Un modèle se trouve dans `backend/.env.sample`_

### Liste des commandes et signification

- `migrate` : Exécute le script de création de la base de données
- `dev` : Démarrage des deux serveurs (frontend + backend) dans un même terminal
- `dev-front` : Démarrage d'un serveur React pour le frontend
- `dev-back` : Démarrage d'un serveur Express pour le backend
- `lint` : Exécute des outils de validation de code (sera exécutée automatiquement à chaque _commit_)
- `fix` : Fixe les erreurs de formatage (à lancer si `lint` ne passe pas)

## Pour plus d'informations

### Listing des outils utilisés

- _Concurrently_ : Permet d'exécuter plusieurs commandes dans un même terminal
- _Husky_ : Permet d'exécuter des actions en déclenchement de commandes _git_
- _Vite_ : Alternative à _Create-React-App_, embarquant moins de packages pour une expérience plus fluide
- _ESLint_ : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
- _Prettier_ : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
- _Standard Airbnb_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
- _Nodemon_ : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié
