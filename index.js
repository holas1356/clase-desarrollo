/* hacemos uso de las librerias */
const express = require('express');
const mongoose = require('mongoose');

/* creamos la conexion en la base de datos */
mongoose.connect('mongodb+srv://lp2526727:PzU7ymKsXVUxrJ0B@cluster0.xvfippk.mongodb.net/')
const db = mongoose.connection

/* verificamos si estamos conectados */
db.on('error', console.error.bind(console, 'connection'))

db.once('open', function(){
    /* definir esquema de usuarios */
    userSchema = new mongoose.Schema({
        nombres: String,
        apellidos: String
    })

    /* creamos el modelo usuarios */
    const usuario = mongoose.model('users1', userSchema)


    const app = express();
    app.use(express.json());

    app.listen(3000, function(){
        console.log("server listening on port 3000");
    })

    /* Endpoint para obtener todos los usuarios */
    app.get("/api/users1", async (req, res) => {
        const users1 = await usuario.find();
        res.json(users1)
    });


    /* 1: Endpoint para obtener todos los usuarios que sean mayores de 18 años. */
    app.get("/api/user18", async (req, res) => {
        const mayor18 = await usuario.find({edad:{$gt: 18}});
        res.json(mayor18)
    });


    /* 2: Endpoint para obtener todos los usuarios que sean de Londres o de París. */

    app.get("/api/ciudad", async (req, res) => {
        const ciudad = await usuario.find({ciudad:{$in: ['Londres','Paris']}});
        res.json(ciudad)
    });

    /* 3: Endpoint para obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años*/

    app.get("/api/salario", async (req, res) => {
        const salario = await usuario.find({$and:[{salario:{$gte:2000}},{edad:{$lt:30}}]});
        res.json(salario)
    });

    /* 4: Endpoint para obtener a todos los usuarios que sean de España y ganen más de $3000 al mes*/

    app.get("/api/espana", async (req, res) => {
        const espana = await usuario.find({$and:[{ciudad:{$in:'España'}},{salario:{$gte:3000}}]});
        res.json(espana)
    });

    /* 5: Endpoint para obtener todos los usuarios que tengan entre 25 y 35 años.*/

    app.get("/api/edades", async (req, res) => {
        const edades = await usuario.find({edad:{$in:[25, 35]}});
        res.json(edades)
    });
})