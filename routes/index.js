const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController.js');

router.get('/api/v1/books', libroController.getAllLibros);

router.post('/api/v1/createbook', libroController.createBook);

router.get('/api/v1/books/id/:_id',libroController.getBookById);

router.get('/api/v1/books/update/:nombreLibro', libroController.updateBook);

router.delete('/api/v1/books/delete/:nombreLibro', libroController.deleteBooks);

module.exports = router;