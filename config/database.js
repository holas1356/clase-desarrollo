const e = require('express');
const mongoose = require('mongoose');

let Estudiante;

const connectDatabase = async ()=>{
    try {
        if(!Estudiante){
            Estudiante = mongoose.model('estudiantes', require("../models/studentModel").schema)
        }
        console.log(Estudiante);
        await mongoose.connect('mongodb+srv://lp2526727:PzU7ymKsXVUxrJ0B@cluster0.xvfippk.mongodb.net/')
        .then(()=> console.log('MongoDB connected'))
        .catch((err) => console.log(err))

        /* await initializeData(); */

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = connectDatabase;