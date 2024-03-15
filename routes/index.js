const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController')
/* obtener todos los estudiantes */
router.get('/api/v1/students', studentController.getAllStudents);
/* crear un estudiante */
router.post('/api/v1/students/create', studentController.createStudent)
/* obtener la nota de un estudiante por su id */
router.get('/api/v1/students/id/:id', studentController.getStudent)
/* obtener las estudiantes que tienes la nota ingresada */
router.get('/api/v1/students/nota/:nota', studentController.getNotesStudents)
/* obtener el listado solo de las notas */
router.get('/api/v1/notas', studentController.getNotasEstudiantes)


module.exports = router;