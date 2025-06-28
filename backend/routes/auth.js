const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '../data/users.json');

// Inscription d'un nouvel utilisateur
router.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email et mot de passe requis.' });
  }

  const data = fs.readFileSync(usersFile);
  const users = JSON.parse(data);

  const existe = users.find(u => u.email === email);
  if (existe) {
    return res.status(409).json({ message: 'Utilisateur déjà inscrit.' });
  }

  users.push({ email, password });
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

  res.status(201).json({ message: 'Inscription réussie.' });
});

// Connexion utilisateur (simple sans JWT)
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const data = fs.readFileSync(usersFile);
  const users = JSON.parse(data);

  const utilisateur = users.find(u => u.email === email && u.password === password);
  if (!utilisateur) {
    return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
  }

  res.json({ message: 'Connexion réussie.' });
});

module.exports = router;
