// Importation du module Express
const express = require('express');
const app = express();


// Définition du port sur lequel le serveur va écouter
const PORT = 3000;

// Middleware pour parser les données JSON du corps des requêtes
app.use(express.json());

// Importation des routes personnalisées
const produitsRoutes = require('./routes/produits'); // Routes pour les produits
const authRoutes = require('./routes/auth'); // Routes pour l'inscription / connexion

// Montage des routes sous des chemins spécifiques
const cors = require("cors");
app.use(cors());

app.use('/api/produits', produitsRoutes);
app.use('/api/auth', authRoutes);

// Route racine simple pour tester le serveur
app.get('/', (req, res) => {
  res.send('Serveur backend opérationnel.');
});

// Démarrage du serveur Express
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
