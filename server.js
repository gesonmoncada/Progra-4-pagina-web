const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const UserRoutes = require('./rutas/UserRoutes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my-social-network', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});

app.post('/api/register', (req, res) => {
    // Lógica para registrar usuario
  });
  
  app.post('/api/login', (req, res) => {
    // Lógica para iniciar sesión
  });
  
  app.get('/api/profile', (req, res) => {
    // Lógica para obtener perfil de usuario
  });

  app.use('/api/users', UserRoutes);
