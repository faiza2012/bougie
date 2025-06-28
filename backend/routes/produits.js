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

module.exports = router;
