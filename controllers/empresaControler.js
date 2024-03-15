const Empresa = require('../models/empresasModel.js');

const empresaController = {
    getEmpresas: async (req, res) => {
        try {
            const empresas = await Empresa.find();
            res.json(empresas); 
        } catch (error) {
            console.error('Error al obtener empresas:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
        
    },
    createEmpresas: async (req, res) => {
        const empresaData = req.body;
        try {
            const newEmpresas = new Empresa(empresaData);
            const savedEmpresa = await newEmpresas.save();
            res.status(201).json(savedEmpresa);
        } catch (error) {
            console.error('Error al crear empresa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

module.exports = empresaController;