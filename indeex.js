
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
    const User = mongoose.model('usuarios', userSchema)

    /* definir esquema de empresas */
    userSchema = new mongoose.Schema({
        nombre: String,
        direccion: String
    })

    /* definir modelo de empresas */

    const Empresa = mongoose.model('empresas', userSchema)

    /* definir esquema de empresas */
    userSchema = new mongoose.Schema({
        nombre: String,
        apellidos: String
    })

    /* creamos el modelo usuarios */
    const Usuario = mongoose.model('users', userSchema)

    

    const app = express();
    app.use(express.json());

    /* Endpoint para obtener todos los usuarios */
    app.get("/api/users", async (req, res) => {
        const users = await User.find();
        res.json(users)
    });

    /* Endpoint para obtener todos los usuarios */
    app.get("/api/users/limit10", async (req, res) => {
        const users10 = await User.find().limit(10);
        res.json(users10)
    });
    /* Endpoint para obtener todas las empresas */
    app.get("/api/empresas", async (req, res) => {
        const empresas = await Empresa.find();
        res.json(empresas)
    });
    /* Endpoint para obtener los usuarios que sean de la empresa id 5 */
    app.get("/api/users/id5", async (req, res) => {
        const empresasid5 = await User.find({empresa_id:5});
        res.json(empresasid5)
    });

    /* Endpoint para obtener todos los usuarios que sean de Bangladesh */
    app.get("/api/users/bangladesh", async (req, res) => {
        const usersBangladesh = await User.find({pais:"Bangladesh"});
        res.json(usersBangladesh)
    });

    /* Endpoint para obtener todas las empresas que sean de Bangladesh */
    app.get("/api/empresas/bangladesh", async (req, res) => {
        const empresasBangladesh = await Empresa.find({ciudad:"Bangladesh"});
        res.json(empresasBangladesh)
    });

    app.listen(3000, function(){
        console.log("server listening on port 3000");
    })

    /*1: Endpoint para obtener todos los usuarios creados por mi, 10*/
    app.get("/api/usuarios", async (req, res) => {
        const usuario = await Usuario.find();
        res.json(usuario)
    });
    
    /*2: listado de todos los usuarios que tienen 20 años , $eq significa equidad: igual que*/
    app.get("/api/usuarios/edad", async (req, res) => {
        const usuarioEdad = await Usuario.find({edad:{$eq:30}});
        res.json(usuarioEdad)
    });

    /*3: listado de todos los usuarios que no tengan 20 años, usando el operador $ne que significa distinto que*/

    app.get("/api/usuarios/edadne", async (req, res) => {
        const usuarioEdadne = await Usuario.find({edad:{$ne:20}});
        res.json(usuarioEdadne)
    });

    /*4: listado de todos los usuarios que sean mayores de 20 años, usando el operador $qe que significa mayor que*/

    app.get("/api/edad", async (req, res) => {
        const usuarioEdad20 = await Usuario.find({edad:{$qe:20}});
        res.json(usuarioEdad20)
    });

    /*5: listado de todos los usuarios que sean menores de 20 años, usando el operador $lt que significa menor que*/

    app.get("/api/edadmenor20", async (req, res) => {
        const usuarioEdadmenor20 = await Usuario.find({edad:{$lt:20}});
        res.json(usuarioEdadmenor20)
    });

    /*6: listado de todos los usuarios que sean mayores o iguales de 20 años, usando el operador $gte que significa mayor o igual que*/

    app.get("/api/edadigualmayor20", async (req, res) => {
        const usuarioEdadigual20 = await Usuario.find({edad:{$gte:20}});
        res.json(usuarioEdadigual20)
    });

    /*7: listado de todos los usuarios que sean menores o iguales de 20 años, usando el operador $lte que significa memor o igual que*/

    app.get("/api/edadigualmenor20", async (req, res) => {
        const usuarioEdadimen20 = await Usuario.find({edad:{$lte:20}});
        res.json(usuarioEdadimen20)
    });

    /* 8: listado de edades entre 5, 10 y 15, usando el operador $in, busca coincidencias */

    app.get("/api/coincidencias", async (req, res) => {
        const usuarioCoincidencias = await Usuario.find({edad:{$in: [5, 10, 15]}});
        res.json(usuarioCoincidencias)
    });

    /* 9: listado de todas las edades menos 5, 10 y 15, usando el operador $nin, el cual las omite */

    app.get("/api/omite", async (req, res) => {
        const usuarioOmite = await Usuario.find({edad:{$nin: [5, 10, 15]}});
        res.json(usuarioOmite)
    });

    /* nos ayuda para ver si existe o si no existe un campo en especifico, $exists:true*/

    /* existe */
    app.get("/api/existe", async (req, res) => {
        const usuarioExiste = await Usuario.find({edad:{$exists: true}})
        res.json(usuarioExiste)
    })

    /* no existe */
    app.get("/api/existeno", async (req, res) => {
        const usuarioExiste = await Usuario.find({edad:{$exists: false}})
        res.json(usuarioExiste)
    })
})