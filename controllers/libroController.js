const Libro = require('../models/libroModel.js');

const libroController = {
    getAllLibros: async(req,res) => {
        try {
            const libro = await Libro.find();
            res.json(libro);
        } catch (error) {
            console.error('Error al obtener los libros: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    createBook: async (req,res) => {
        const bookData = req.body;
        try {
            const newBook = new Libro(bookData);
            const savedBook = await newBook.save();
            res.status(201).json(savedBook);
        } catch (error) {
            console.error('Error al crear el libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    getBookById: async (req,res) => {
        const id = req.params._id;
        try {
            const bookId = await Libro.findById(id)
            res.json(bookId);
        } catch (error) {
            console.error('Error al obtener el libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    updateBook: async (req,res) => {
        try {
            const{nombreLibro} = req.params;
            const updateBook = await Libro.findOneAndUpdate({nombreLibro:nombreLibro},{$set:{nombreLibro:'Mil Años de Soledad'}})
            res.json(updateBook)
        } catch (error) {
            console.error('Error al actualizar el libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    deleteBooks: async (req,res) => {
        try {
            const {nombreLibro} = req.params;
            const deleteBook = await Libro.findOneAndDelete({nombreLibro:nombreLibro});
            res.json(deleteBook);
        } catch (error) {
            console.error('Error al eliminar el libro:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = libroController;