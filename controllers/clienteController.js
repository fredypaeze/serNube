const Cliente = require('../models/Cliente');

/**
 * Función para buscar los clientes
 */
exports.buscarClientes = async(req, res) => {

    try {
        let cliente = await Cliente.find();
        res.json(cliente)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un cliente')  
    }
}


/**
 * Función: AGREGAR CLIENTES
 */

exports.agregarClientes = async(req, res) => {
    
    try {
        let cliente;
        cliente = new Cliente(req.body)
        await cliente.save();
        res.send(cliente);

    } catch (error) {
      console.log(error)
      res.status(500).send('Hubo un error al agregar un cliente')  
    }
}