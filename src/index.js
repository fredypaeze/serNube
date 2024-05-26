const express = require("express");
const cors = require('cors');
const conectarBD = require('../config/db');



// creamos el servidor
const app = express();

//conectar a la bd
conectarBD();

// habilitar cors
app.use(cors());

// habilitar json
app.use(express.json());

const PORT = process.env.PORT || 7000;

//Rutas de los modulos
app.use("/api/auth", require("../routes/auth"));
app.use("/api/usuarios", require("../routes/rutaUsuarios"));
app.use("/api/clientes", require("../routes/rutaCliente"));
app.use("/api/productos", require("../routes/rutaProducto"));
app.use("/api/sucursales", require("../routes/rutaSucursal"));

app.listen(PORT, () => {
    console.log("El servidor está conectado a http://localhost:7000");
});