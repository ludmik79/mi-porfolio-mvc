const express = require('express');
const app = express();
const mainRouter = require('./routes/main');

app.listen(3000, () => {
    console.log('Servidor funcionando');
});

app.use('/', mainRouter);