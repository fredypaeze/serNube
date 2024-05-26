const Usuarios = require("../../../../proyecto_final/backed_pf_fredypaez/backend/models/Usuarios");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");

// Función para autenticar el usuario
exports.autenticarUsuario = async (req, res) => {

    // Revisamos la validación para ver si encontramos errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errrores: errores.array() })
    }

    const { email, password } = req.body

    try {
        // Verificamos que el usuario este registrado
        let usuario = await Usuarios.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: "El usuario no existe" });
        }

        // Verificamos que el Password esté registrada
        let passok = await bcryptjs.compare(password, usuario.password);
        if (!passok) {
            return res.status(400).json({ msg: "Contraseña incorrecta" });
        }

        // Si es correcto se crea y se firma el token
        const payload = {
            usuario: { id: usuario.id },
        };

        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: 43200,
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
}

exports.usuarioAutenticado = async (req, res) => {
    try {
        let usuario = await Usuarios.findByID(req.usuario.id);
        res.json({ usuario });

    } catch (error) {
        res.status(500).json({ msg: "Hubo un error" })

    }
}


