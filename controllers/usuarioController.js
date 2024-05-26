const Usuarios = require("../models/Usuarios");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");

exports.crearUsuario = async (req, res) =>{

// Revisamos la validación para ver si encontramos errores
const errores = validationResult(req);
if (!errores.isEmpty()) {
    return res.status(400).json({ errrores: errores.array() })
}

const { email, password } = req.body

try {
    // Verificamos que el usuario sea unico
    let usuario = await Usuarios.findOne({ email });
    if (usuario) {
        return res.status(400).json({ msg: "El usuario ya existe" });
    }

    // Vamos a crear el usuario

    usuario = new Usuarios(req.body);
    usuario.password = await bcryptjs.hash(password, 8);

    // Guaradamos el usuario
    await usuario.save();

    // Firmamos el jwt
    const payload = {
        usuario: { id: usuario.id },
    };
    jwt.sign(
        payload,
        process.env.SECRETA,
        {
            expiresIn: 3600,
        },
        (error, token) => {
            if (error) throw error;
            // Mensaje confirmación
            res.json({ token });
        }
    );

} catch (error) {
    console.log("hay un error");
    console.log(error);
    res.status(400).send("Hubo un error");
}
};

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.find();
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};