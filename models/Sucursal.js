// Definir constante para llamar la dependencia
const mongoose = require ('mongoose');

/*
El modelo que se cree aca debe ser igual al de la base de datos
De lo contrario al usar postman no lo va a encontrar
*/

const sucursalSchema = mongoose.Schema({
    administrador: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    numoficina: {
        type: Number,
        required: true
    },
    seccional: {
        type: String,
        required: true
    },
    teloficina: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    }
},{ versionkey: false});


module.exports = mongoose.model('Sucursal', sucursalSchema);
