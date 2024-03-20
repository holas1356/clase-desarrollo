const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    userid: Number,
    nombre: String,
    materia: String,
    nota: String
});

const Estudiante = mongoose.model('estudiantes', studentSchema);


module.exports = Estudiante;