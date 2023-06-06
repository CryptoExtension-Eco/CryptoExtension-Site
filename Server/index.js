const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./Models/User');
require('dotenv').config();

// Création de l'application Express
const app = express();

// Middleware pour autoriser les requêtes depuis n'importe quel domaine
app.use(cors());

// Middleware pour analyser les données du corps de la requête en JSON
app.use(bodyParser.json());

// Middleware pour gérer les routes d'authentification
app.use('/auth', authRoutes);

// Middleware pour gérer les erreurs 404
app.use((req, res, next) => {
  const error = new Error('Bonsoir, Non.');
  error.status = 404;
  next(error);
});

// Middleware pour gérer les erreurs
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
  next();
});

// Connexion à la base de données MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Créer l'utilisateur Admin s'il n'existe pas déjà
    const User = require('./Models/User');

    const adminUser = await User.findOne({ username: 'Admin' });
    if (!adminUser) {
      const newAdminUser = new User({
        name: 'Admin',
        password: 'Admin',
        email: 'Admin.admin@gmail.com'
      });

      await newAdminUser.save();
      console.log('Utilisateur Admin créé avec succès');
    }
  })
  .catch((error) => {
    console.error('Erreur de la base de données', error);
  });

// Démarrage du serveur
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
