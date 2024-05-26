const Cliente = require('../models/Cliente');

/**
 * Función para buscar los clientes que esten en la base de datos
 */
exports.buscarClientes = async(req, res) => {

    try {
        let cliente = await Cliente.find();
        res.json(cliente)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar los clientes')  
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

// Esta función es para buscar un solo cliente
exports.buscarCliente = async (req, res) =>{
    try{
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg:"Cliente no encontrado con ese ID"})
        }
        res.send(cliente);

    } catch (error){
        console.log(error)
        res.status(500).send('Hubo un error al buscar un cliente')
    }
}

// Función para actualizar un cliente existente
exports.actualizarCliente = async (req, res) => {
    try {
        const clienteId = req.params.id;
        const nuevoCliente = req.body;

        // Actualizar el cliente en la base de datos
        const clienteActualizado = await Cliente.findByIdAndUpdate(clienteId, nuevoCliente, { new: true });

        // Enviar el cliente actualizado como respuesta
        res.json(clienteActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al actualizar el cliente' });
    }
}

// Función para modificar un cliente existente
exports.modificarCliente = async (req, res) => {
    try {
        const clienteId = req.params.id;
        const camposModificados = req.body;

        // Modificar el cliente en la base de datos
        const clienteModificado = await Cliente.findByIdAndUpdate(clienteId, camposModificados, { new: true });

        // Enviar el cliente modificado como respuesta
        res.json(clienteModificado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al modificar el cliente' });
    }
}

// Función para eliminar un cliente existente
exports.eliminarcliente = async (req, res) => {
    try {
        const clienteId = req.params.id;

        // Buscar el producto por ID y eliminarlo
        const cliente = await Cliente.findByIdAndDelete(clienteId);

        if (!cliente) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        // Enviar un mensaje de confirmación
        res.json({ mensaje: 'Cliente eliminado con éxito' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al eliminar el cliente' });
    }
 } 