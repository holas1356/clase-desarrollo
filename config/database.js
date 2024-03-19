const mongoose = require('mongoose');
let Libro;

const connectDatabase = async() => {
    try {
        if(!Libro){
            Libro = mongoose.model('libros', require("../models/libroModel").schema);
        }
        await mongoose.connect('mongodb+srv://juanhoyos0422:juan123456789@taller2.issexqw.mongodb.net/')
        .then(()=> console.log('MongoDB connected'))
        .catch((err) => console.log(err))
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = connectDatabase;