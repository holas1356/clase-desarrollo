const Estudiante = require('../models/studentModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_secret = "dfjdkfdjf#$#4";

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
    },
    register: async(req, res) => {
        try {
            const students = await Estudiante.find;

            const {nombre,materia,nota} = req.body;
            const studentData = {
                userid: students.length+1,
                nombre: nombre,
                materia: materia,
                nota: await bcrypt.hash(nota,10)//encriptacion de contraseña por medio de bcrypt
            };
            const newStudent = new Estudiante(studentData);
            const savedStudent = await newStudent.save();
            res.status(201).json(savedStudent);
        } catch (error) {
            console.error('Error al registrar el estudiante:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    login: async(req, res) => {
        try {
            const {nombre,nota} = req.body
            const student = await Estudiante.find({nombre:nombre})

            if(!student){
                return res.status(400).json({message: 'Invalid username or password'});
            }

            const isPasswordValid = await bcrypt.compare(nota, student[0].nota);

            const token = jwt.sign({userid:student.id },jwt_secret,{
                expiresIn: "1h"
            })
            res.json({message: 'Logged in succesfully',token})
        } catch (error) {
            console.error('Error al loguear el estudiante:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = studentController;