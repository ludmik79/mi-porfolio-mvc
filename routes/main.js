// Archivos agrupados para un prefijo de ruta
const express = require('express');
const router = express.Router();
// importar el controlador para vincularlo a una ruta
const mainController = require('../controllers/mainController');
// Especifico rutas y las vinculo con controladores
router.get('/', mainController.index);
// Agregar parámetros de ruta
router.get('/saludar/:nombre/:apellido?', mainController.saludar)

module.exports = router;