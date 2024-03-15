const mongoose = require('mongoose');
let User;
let Empresa;

const connectDatabase = async () =>{
    try {
        if(!User){
            User = mongoose.model('usuarios', require("../models/userModel").schema)
        }
        
        if(!Empresa){
            Empresa = mongoose.model('empresas', require('../models/empresasModel').schema);  
        }
        console.log(User);
        console.log(Empresa);
        await mongoose.connect('mongodb+srv://lp2526727:PzU7ymKsXVUxrJ0B@cluster0.xvfippk.mongodb.net/')
        .then(()=> console.log('MongoDB connected'))
        .catch((err) => console.log(err))

        /* await initializeData(); */
        
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}

/* const initializeData = async () => {
    try {
         await User.deleteMany();
        await Empresa.deleteMany(); 

        const userDate = [
            {
                name: 'Luisa',
                email: 'luisa@gmail.com',
                password: '123456'
            },{
                name: 'Juan',
                email: 'juan@gmail.com',
                password: 'hola'
            }
        ];

        const empresaDate = [
            {
                nombre: 'riwi',
                direccion: '123'
            },
            {
                nombre: 'colanta',
                direccion: 'sabe mas'
            }
        ]

        await User.insertMany(userDate);
        await Empresa.insertMany(empresaDate);

        console.log('Data successfully initialized');
    } catch (error) {
        console.error('Data initialization error:', error);
        process.exit(1);
    }
} */

module.exports = connectDatabase;