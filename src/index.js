// Chama o express, o importador de modulos
const express = require('express');
const mongoose = require('mongoose');

// ativa ele nnuma constante
const app = express();

// Conectando no mlab
mongoose.connect(
    "mongodb://gooweek:goweek123@ds121475.mlab.com:21475/goweek-pcordista", 
    {
        useNewUrlParser: true
    }
);

// define as rotas
app.use(require('./routes'));

// Chama a porta no servidor 
app.listen(3001, () => {
    console.log('Server started on port 3001');
});