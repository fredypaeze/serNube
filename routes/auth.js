const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController1");
const { check } = require("express-validator");
const auth = require("../middlewares/authMiddlewares");


// Vamnos a autenticar usuario
// api/usuarios
router.post("/", [
    check("email", "Agrega un email valido").isEmail(),
    check("password", "El password debe ser mínimo de 8 caracteres").isLength({min: 8,}),
],
authController.autenticarUsuario
);

router.get("/", auth, authController.usuarioAutenticado)

module.exports = router;


