const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const productionRoutes = require('./routes/productionRoutes');

app.use(bodyParser.json());

// Conectar las rutas
app.use('/api', userRoutes);
app.use('/api', productionRoutes);

module.exports = app;
