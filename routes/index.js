const express = require('express');
/* llamamos al enrutador a traves del motodo router() */
const router = express.Router();

/* importacion del controlador del usuario */
const userController = require('../controllers/userControler.js')
/* importacion del controlador de empresa */
const empresaController = require('../controllers/empresaControler.js')


/* definicion de rutas y asignacion de funciones al controlador */
router.get('/api/vi/users', userController.getAllUsers)
router.get('/api/vi/empresas', empresaController.getEmpresas)

router.post('/api/vi/users', userController.createUser)

/* los : indican que la ultima parte sera dinamica */
router.get('/api/vi/users/id/:id', userController.getUserById)
router.get('/api/vi/users/name/:name', userController.getUserByName)





module.exports = router;