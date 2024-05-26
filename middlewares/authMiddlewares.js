//const Usuarios = require("../models/Usuarios"); //esto va en otro lado
const jwt = require("jsonwebtoken");

module.exports = function(req, res, next){
    //leer el tl token en el header
    const token = req.header("x-auth-token");
 
    // revisar si hay un token
    if(!token){
        return res.satus(400).json({msg:"Token no encontrado - Permiso no valido"});
    }

    // validar el token
    try {
        const cifrado = jwt.verify(token,process.env.SECRETA)
        request.usuario=cifrado.usuario;
        next();
    }catch(error){
        res.status(400).json({msg:"Token no valido"})
    }
};
