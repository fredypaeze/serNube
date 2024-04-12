const Producto = require('../models/Sucursal');

/**
 * Función para buscar los Productos
 */
exports.buscarSucursal = async(req, res) => {

    try {
        let sucursal = await Sucursal.find();
        res.json(sucursal)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar una Sucursal')  
    }
}


/**
 * Función: AGREGAR SUCURSAL
 */

exports.agregarSucursal = async(req, res) => {
    
    try {
        let sucursal;
        cliente = new Sucursal(req.body)
        await sucursal.save();
        res.send(sucursal);

    } catch (error) {
      console.log(error)
      res.status(500).send('Hubo un error al agregar una sucursal')  
    }
}