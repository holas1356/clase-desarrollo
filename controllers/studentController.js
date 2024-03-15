const Estudiante = require('../models/studentModel')

const studentController = {
    /* obtener todos los estudiantes */

    getAllStudents: async (req, res) => {
        try {
            const students = await Estudiante.find()
            res.json(students)
        } catch (error) {
            console.error('Error al obtener los estudiantes:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    /* crear nuevo estudiante */
    createStudent: async (req, res) => {
        const studentData = req.body;
        try {
            const newStudent = new Estudiante(studentData)
            const savedStudent = await newStudent.save()
            res.status(201).json(savedStudent);
        } catch (error) {
            console.error('Error al crear el estudiante:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    /* obtener un estudiante */
    getStudent: async (req, res) => {
        try {
            const {id} = req.params
            const student = await Estudiante.findById(id)
            res.json(student)
        } catch (error) {
            console.error('Error al obtener el estudiante:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },


    /* obtener todos los estudiantes que tienen esa nota ingresada */
    getNotesStudents: async (req, res) => {
        try {
            const {nota} = req.params
            const notes = await Estudiante.find({nota})
            res.json(notes)
               
        } catch (error) {
            console.error('Error al obtener las notas:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    /* obtener solo las notas de los estudiantes */
    getNotasEstudiantes: async(req,res) => {
        const nota = req.params;
        try {
            const estudiante = await Estudiante.find({},{nota:1,_id:0});
            res.json(estudiante);
        } catch (error) {
            console.error('Error al buscar las notas: ', nota, error);
            res.status(500).json({message: 'Internal Server Error'})
        }
    }
}

module.exports = studentController;