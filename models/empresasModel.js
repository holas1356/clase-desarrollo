
const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
    nombre: String,
    direccion: String
});

const Empresa = mongoose.model('empresas', empresaSchema);

module.exports = Empresa;