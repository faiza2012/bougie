
 # Étudiante 
  Faiza djahnine

# Encadré par
Professeur : Lillia Ould Houcine

#  Boutique de Bougies - Impression Élégante

Ce projet est une boutique en ligne de bougies artisanales
 Il s'agit d'une application web utilisant HTML, CSS, JavaScript en frontend et Node.js/Express.js en backend.

##  Fonctionnalités

###  Front-End
- Page d’accueil avec affichage dynamique des produits via `fetch()` depuis le backend
- Page d'inscription avec validation de formulaire
- Page de connexion avec validation et message d’erreur
- Navigation entre les pages (menu responsive)
- Design élégant basé sur gris / blanc avec images de bougies
- Footer avec liens réseaux sociaux

###  Produits
- Produits chargés depuis un fichier `produits.json`
- Chaque produit contient : `id`, `nom`, `prix`, `image`
- Images correctement servies depuis `/images` (Express `static`)

### Utilisateurs
- Inscription enregistrée dans `users.json`
- Champs : `nom`, `email`, `motdepasse`, `role`
- Rôles : `user` (par défaut), `admin` (accès restreint)
- Connexion avec vérification email + mot de passe
- Données de session stockées en `localStorage`

### Sécurité minimale
- Seul un **admin** peut :
  - Ajouter un produit (via `ajout.html`)
  - Modifier ou supprimer des produits
- Le rôle `admin` est vérifié côté frontend et côté backend
- Le frontend masque automatiquement les boutons aux utilisateurs simples

---

##  Backend Node.js (Express)

### Routes principales
- `POST /auth/register` — inscription
- `POST /auth/connexion` — connexion
- `GET /api/produits` — récupérer tous les produits
- `POST /api/produits` — ajouter un produit *(admin seulement)*
- `PUT /api/produits/:id` — modifier un produit *(admin)*
- `DELETE /api/produits/:id` — supprimer un produit *(admin)*

### Fichiers JSON
- `users.json` — contient les utilisateurs et leur rôle
- `produits.json` — contient la liste des bougies



##  Lien Git

https://github.com/faiza2012/bougie


