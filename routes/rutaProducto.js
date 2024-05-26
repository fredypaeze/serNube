const express = require('express');
const router = express.Router();


// Definimos ruta del controlador
const productoController = require('../controllers/productoController');

// Estas son las rutas de nuestro CRUD

router.post('/', productoController.agregarProductos);
router.get('/', productoController.buscarProductos);
router.get('//:id', productoController.buscarProducto);
//router.delete('/:id', productoController.eliminarProducto);
router.put('/:id', productoController.actualizarProducto);
router.patch('/:id', productoController.modificarProducto);

module.exports = router;