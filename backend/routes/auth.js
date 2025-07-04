

// Importation des modules nécessaires

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Définition du chemin vers le fichier users.json
const usersFile = path.join(__dirname, '../data/users.json');

//  Route d'inscription
router.post('/register', (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email et mot de passe requis.' });
  }

  const data = fs.readFileSync(usersFile);
  const users = JSON.parse(data);
// Vérifie si l'email existant
  const existe = users.find(u => u.email === email);
  if (existe) {
    return res.status(409).json({ message: 'Utilisateur déjà inscrit.' });
  }

  // Création du nouvel utilisateur avec rôle par défaut "user"
  const nouveauUtilisateur = {
    email,
    password,
    role: role === "admin" ? "admin" : "user" // pour une sécurité minimale
  };
   // Ajout et sauvegarde du nouvel utilisateur
  users.push(nouveauUtilisateur);
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
   // Réponse pour  client
  res.status(201).json({ message: 'Inscription réussie.' });
});

//  Route de connexion
router.post('/connexion', (req, res) => {
  const { email, password } = req.body;

  const data = fs.readFileSync(usersFile);
  const users = JSON.parse(data);

  const utilisateur = users.find(u => u.email === email && u.password === password);
  if (!utilisateur) {
    return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
  }
// envoie  de réponse contenant les informations de session utilisateur
  res.json({
    message: "Connexion réussie",
    email: utilisateur.email,
    role: utilisateur.role || "user"
  });
});
// Export du router pour utilisation dans server.js
module.exports = router;

