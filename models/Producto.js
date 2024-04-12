// Definir constante para llamar la dependencia
const mongoose = require ('mongoose');

/*
El modelo que se cree aca debe ser igual al de la base de datos
De lo contrario al usar postman no lo va a encontrar
*/

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    codigo: {
        type: Number,
        required: true
    },
    tamaño: {
        type: String,
        required: true
    },
    referencia: {
        type: Number,
        required: true
    },
    segmento: {
        type: String,
        required: true
    }
},{ versionkey: false});


module.exports = mongoose.model('Producto', productoSchema);
