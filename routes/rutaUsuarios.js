const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController.js");
const { check } = require("express-validator");

// Ruta para obtener todos los usuarios
//router.get("/", usuarioController.obtenerUsuarios);


// api/usuarios
router.post("/", [
    check("nombres", "Los nombres son obligatorios").not().isEmpty(),
    check("email", "Ingresa un email valido").isEmail(),
    check("password", "El password debe tener mínimo 8 caracteres").isLength({ min: 8, }),
    ],
    usuarioController.crearUsuario
);




module.exports = router; 