const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    nombre: String,
    materia: String,
    nota: Number
});

const Estudiante = mongoose.model('estudiantes', studentSchema);


module.exports = Estudiante;