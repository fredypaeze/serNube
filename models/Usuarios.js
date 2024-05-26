// Definir constante para llamar la dependencia
const mongoose = require ('mongoose');
const bcrypts = require('bcryptjs');


/*
El modelo que se cree aca debe ser igual al de la base de datos
De lo contrario al usar postman no lo va a encontrar
*/

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    registro: {
        type: Date,
        default: Date.now()
    },
},{ versionkey: false});

usuarioSchema.pre("guardar", async function (next){
    const mostrar = await bcrypts.getSalt();
    this.contraseña = await bcrypts.hash(this.password, mostrar );
});

usuarioSchema.statics.login = async function (correo, password){
    const user = await this.findOne({correo});
    if(user){
        const auth = bcrypts.compare(password, user.password);
        if(auth){
            return user;
        }

        throw Error("la CONTRASEÑA es incorrecta")
    }
    throw Error("El CORREO es incorrecto")
}






module.exports = mongoose.model('Usuarios', usuarioSchema);

