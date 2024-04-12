//
const express = require('express');
const router = express.Router();

// Definimos ruta del controlador
const clienteController = require('../controllers/clienteController');
const productoController = require('../controllers/productoController');
const sucursalController = require('../controllers/sucursalController');

// Estas son las rutas de nuestro CRUD

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);


router.post('/', productoController.agregarProductos);
router.get('/', productoController.buscarProductos);


router.post('/', sucursalController.agregarSucursal);
router.get('/', sucursalController.buscarSucursal);

module.exports = router;