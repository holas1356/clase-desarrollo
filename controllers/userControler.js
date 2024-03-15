const User = require('../models/userModel.js');

const userController = {
    /* obtener todos los usuarios */
    getAllUsers: async(req, res)=> {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    /* obtener usuarios por id */
    getUserById: async(req, res) => {
        try {
            const id = req.params.id
            const userById = await User.findById(id);
            res.json(userById);
        } catch (error) {
            console.error('Error al obtener el usuario por id:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    getUserByName: async(req, res) => {
        try {
            const {name} = req.params
            const userName = await User.findOne({name:name});
            res.json(userName);
        } catch (error) {
            console.error('Error al obtener el usuario por nombre:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    /* crea un usuario nuevo */
    createUser: async(req, res)=> {
        const userData = req.body;
        try {
            const newUser = await User.create(userData);
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
            
        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    
}};

module.exports = userController;