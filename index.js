const express = require('express');
const path = require('path');
require('dotenv').config({path: 'variables.env'});
const router = require('./routes');

const app = express();

// Habilitar EJS como template engine
app.set('view engine', 'ejs');

// Ubicacion Vistas
app.set('views', path.join(__dirname, './views'));

// Archivos estaticos
app.use(express.static('public'));

// Routing
app.use('/', router());

// Agrega el puerto
app.listen(process.env.PORT, () => {
    console.log('El servidor esta funcionando');
    
});