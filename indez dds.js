const express = require('express');
const cors = require('cors');
const app = express();

// leer archivo de configuracion
require('dotenv').config();

// crear base si no existe
require("./base-orm/sqlite-init"); 

// para poder leer json en el body
app.use(express.json()); 

// Configuración de CORS
app.use(cors());

// Configuración de rutas
const routesArticulos = require('./routes/articulos');
const routesClientes = require('./routes/clientes');
app.use('/', routesClientes);
app.use('/', routesArticulos);



// Inicio del servidor
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = app;

