const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    _id: Number,
    nombreLibro: String,
    autor: String,
    anoPublicacion: Number
});

const libros = mongoose.model('libros', libroSchema);

module.exports = libros;