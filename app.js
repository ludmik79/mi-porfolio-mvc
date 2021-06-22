const express = require('express');
const path = require('path');

// Instanciar servidor con librería express
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// Importar el mainRouter
const mainRouter = require('./routes/main');

// Comienzo a escuchar un puerto
app.listen(3000, () => console.log('Servidor live'));

app.use('/', mainRouter);