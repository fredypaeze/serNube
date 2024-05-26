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
        res.status(500).send('Hubo un error al buscar los productos')  
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
      res.status(500).send('Hubo un error al agregar el producto')  
    }
}

// Esta fucnión es para buscar un solo cliente
exports.buscarProducto = async (req, res) =>{
    try{
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg:"Producto no encontrado con ese ID"})
        }
        res.send(producto);

    } catch (error){
        console.log(error)
        res.status(500).send('Hubo un error al buscar un producto')
    }
}

// Función para actualizar un cliente existente
exports.actualizarProducto = async (req, res) => {
    try {
        const productoId = req.params.id;
        const nuevoProducto = req.body;

        // Actualizar el cliente en la base de datos
        const productoActualizado = await Producto.findByIdAndUpdate(productoId, nuevoProducto, { new: true });

        // Enviar el cliente actualizado como respuesta
        res.json(productoActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al actualizar el producto' });
    }
}

// Función para modificar un producto existente
exports.modificarProducto = async (req, res) => {
    try {
        const productoId = req.params.id;
        const camposModificados = req.body;

        // Modificar el producto en la base de datos
        const productoModificado = await Producto.findByIdAndUpdate(productoId, camposModificados, { new: true });

        // Enviar el producto modificado como respuesta
        res.json(productoModificado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al modificar el producto' });
    }
}


// Función para eliminar un producto existente
exports.eliminarproducto = async (req, res) => {
    try {
        const productoId = req.params.id;

        // Buscar el producto por ID y eliminarlo
        const producto = await Producto.findByIdAndDelete(productoId);

        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        // Enviar un mensaje de confirmación
        res.json({ mensaje: 'Producto eliminado con éxito' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al eliminar el producto' });
    }
 } 