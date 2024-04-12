const Producto = require('../models/Producto');

/**
 * Función para buscar los Productos
 */
exports.buscarProductos = async(req, res) => {

    try {
        let producto = await Producto.find();
        res.json(producto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un producto')  
    }
}


/**
 * Función: AGREGAR PRODUCTOS
 */

exports.agregarProductos = async(req, res) => {
    
    try {
        let producto;
        producto = new Producto(req.body)
        await producto.save();
        res.send(producto);

    } catch (error) {
      console.log(error)
      res.status(500).send('Hubo un error al agregar un producto')  
    }
}