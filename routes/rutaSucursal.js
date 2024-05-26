const express = require('express');
const router = express.Router();


// Definimos ruta del controlador
const sucursalController = require('../controllers/sucursalController');

// Estas son las rutas de nuestro CRUD

router.post('/', sucursalController.agregarSucursal);
router.get('/', sucursalController.buscarSucursales);
router.get('//:id', sucursalController.buscarSucursal);
//router.delete('/:id', sucursalController.eliminarSucursal);
router.put('/:id', sucursalController.actualizarSucursal);
router.patch('/:id', sucursalController.modificarSucursal);

module.exports = router;