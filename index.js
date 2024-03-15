/* hacemos uso de las librerias */
const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./config/database.js');
const routers = require('./routes/index.js')

const app = express();
const port = 3000

connectDB();
/* analiza las solicitudes entrantes con el tipo contenido aplication/json */
app.use(bodyParser.json());

/* analiza las solicitudes entrantes con el tipo de contenido aplication/x-www-form-urlencoded */
/* cuando extended esta establesido en false, bodyparser utiliza la funcion querystring de Node.js para analizar los cuerpos de las solicitudes entrantes */
/* cuando extended esta establecido en true, utiliza la biblioteca qs para analizar los cuerpos de las solicitudes entrantes, lo que permite analizar objetos animados y matrices */
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routers)

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));