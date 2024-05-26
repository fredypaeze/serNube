const Sucursal = require('../models/Sucursal');

/**
 * Función para buscar las sucursales
 */
exports.buscarSucursales = async(req, res) => {

    try {
        let sucursal = await Sucursal.find();
        res.json(sucursal)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar las Sucursales')  
    }
}


/**
 * Función: AGREGAR SUCURSAL
 */

exports.agregarSucursal = async(req, res) => {
    
    try {
        let sucursal;
        sucursal = new Sucursal(req.body)
        await sucursal.save();
        res.send(sucursal);

    } catch (error) {
      console.log(error)
      res.status(500).send('Hubo un error al agregar una sucursal')  
    }
}

// Esta fucnión es para buscar una sola sucursal
exports.buscarSucursal = async (req, res) =>{
    try{
        let sucursal = await Sucursal.findById(req.params.id);
        if(!sucursal){
            res.status(404).json({msg:"Sucursal no encontrada con ese ID"})
        }
        res.send(sucursal);

    } catch (error){
        console.log(error)
        res.status(500).send('Hubo un error al buscar una sucursal')
    }
}



// Función para actualizar un sucursal existente
exports.actualizarSucursal = async (req, res) => {
    try {
        const sucursalId = req.params.id;
        const nuevoSucursal = req.body;
 
 
        // Actualizar el sucursal en la base de datos
        const sucursalActualizado = await Sucursal.findByIdAndUpdate(sucursalId, nuevoSucursal, { new: true });
 
 
        // Enviar el sucursal actualizado como respuesta
        res.json(sucursalActualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al actualizar el sucursal' });
    }
 }
 
 
 // Función para modificar un sucursal existente
 exports.modificarSucursal = async (req, res) => {
    try {
        const sucursalId = req.params.id;
        const camposModificados = req.body;
 
 
        // Modificar el sucursal en la base de datos
        const sucursalModificado = await Sucursal.findByIdAndUpdate(sucursalId, camposModificados, { new: true });
 
 
        // Enviar el sucursal modificado como respuesta
        res.json(sucursalModificado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al modificar el sucursal' });
    }
 }
 
 
 // Función para eliminar un sucursal existente
 exports.eliminarSucursal = async (req, res) => {
    try {
        const sucursalId = req.params.id;

        // Buscar el producto por ID y eliminarlo
        const sucursal = await Sucursal.findByIdAndDelete(sucursalId);

        if (!sucursal) {
            return res.status(404).json({ mensaje: 'Sucursal no encontrado' });
        }

        // Enviar un mensaje de confirmación
        res.json({ mensaje: 'Sucursal eliminado con éxito' });
        } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al eliminar el sucursal' });
    }
 }