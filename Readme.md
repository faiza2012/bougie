
#  Boutique de Bougies - Impression Élégante

> Projet JavaScript Vanilla – Frontend + Backend  
> **Étudiante :** Faiza Djahnine  
> **Encadré par :** Professeure Lillia Ould Houcine

---

##  Description

Ce projet est une boutique en ligne de bougies artisanales.  
Il s'agit d'une application web développée en **HTML, CSS, JavaScript Vanilla** pour le frontend, et **Node.js / Express.js** pour le backend.

---

##  Fonctionnalités

###  Front-End
- Page d’accueil dynamique avec affichage des produits (`fetch()` depuis backend)
- Page d'inscription avec validation JS
- Page de connexion avec gestion d'erreur + vérification du rôle
- Navigation claire entre les pages (`Accueil`, `Inscription`, `Connexion`, `Panier`, `Ajout`)
- Design élégant (gris/blanc) avec bannières et images
- Footer responsive avec liens vers réseaux sociaux
- Déconnexion via bouton visible uniquement après connexion

---

###  Produits
- Produits chargés depuis `produits.json`
- Chaque produit a : `id`, `nom`, `prix`, `image`
- Images servies via le middleware `express.static()`
- Affichage des bougies dans la page d’accueil

---

### 👤 Utilisateurs
- Données stockées dans `users.json`
- Rôles disponibles : `user` (par défaut), `admin`
- Seul un **admin** peut :
  - Ajouter une bougie
  - Supprimer un produit
  - Modifier un produit *(si implémenté dans le front)*
- Données de session gérées avec `localStorage`

---

###  Panier
- Ajout/retrait de produits avec boutons dynamiques
- Panier stocké en `localStorage`
- Page **checkout.html** :
  - Affiche le contenu du panier
  - Permet de vider le panier
  - Affiche un total calculé
- Design cohérent avec les autres pages

---

##  Backend (Node.js + Express)


- `POST /auth/register` — enregistrer un nouvel utilisateur
- `POST /auth/connexion` — vérifier les infos de connexion
- `GET /api/produits` — lister les produits
- `POST /api/produits` — ajouter un produit (admin)
- `DELETE /api/produits/:id` — supprimer un produit (admin)
- *(Optionnel : PUT /api/produits/:id — modifier un produit)*

---

##  Fichiers utilisés

- `produits.json` — contient les bougies
- `users.json` — contient les comptes utilisateurs
- `server.js` — serveur principal Express
- `routes/produits.js`, `routes/auth.js` — gestion des API
- `auth.js`, `connexion.js`, `inscription.js`, `produits.js`, `session.js` — scripts côté client

---

## 🔗 Déploiement GitHub

 Dépôt :  
 [https://github.com/faiza2012/bougie](https://github.com/faiza2012/bougie)

---

##  État d'avancement

- [x] Frontend terminé
- [x] Backend fonctionnel
- [x] Système d’inscription/connexion
- [x] Rôle admin et gestion des droits
- [x] Panier fonctionnel


---

