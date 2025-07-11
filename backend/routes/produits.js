const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Chemin du fichier JSON
const filePath = path.join(__dirname, '../data/produits.json');

// GET /produits — lire le fichier produits.json et envoyer les données
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../data/produits.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error("Erreur de lecture du fichier produits.json :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
    try {
      const produits = JSON.parse(data);
      res.json(produits);
    } catch (parseErr) {
      console.error("Erreur de parsing JSON :", parseErr);
      res.status(500).json({ message: "Fichier JSON invalide" });
    }
  });
});
function verifierAdmin(req, res, next) {
  const role = req.headers['x-user-role']; // On passe le rôle dans l'en-tête

  if (role === 'admin') {
    next(); // L'utilisateur est admin, il peut continuer
  } else {
    return res.status(403).json({ message: "Accès refusé : réservé aux admins." });
  }
}
// Ajout de produit (admin seulement)
router.post('/', verifierAdmin, (req, res) => {
  // logique d'ajout produit
});

// Modification de produit
router.put('/:id', verifierAdmin, (req, res) => {
  // logique de modification
});

// Suppression de produit
router.delete('/:id', verifierAdmin, (req, res) => {
  // logique de suppression
});

module.exports = router;
