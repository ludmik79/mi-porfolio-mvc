const express = require('express');

// Instanciar servidor con librería express
const app = express();

// Importar el mainRouter
const mainRouter = require('./routes/main');

// Comienzo a escuchar un puerto
app.listen(3000, () => console.log('Servidor live'));

app.use('/', mainRouter);
