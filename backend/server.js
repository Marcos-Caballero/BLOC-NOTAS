/* Importando express */
const express = require("express");
/* Middleware politicas de seguridad */
const cors = require("cors");
/* Middleware de registro de solicitudes http */
const morgan = require("morgan");
/* Middleware para analizar cookies */
const cookieParser = require('cookie-parser')
/* Creando la instancia */
const app = express();

/* configurando el middleware para permitir solicitudes y habilitar credenciales */
app.use(cors({
    origin: 'http://localhost:5500',
    credentials: true
}))

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

/* Estableciendo el puerto*/
app.set("port", process.env.PORT || 3002);

/* Middleware para analizar datos codificados*/
app.use(express.urlencoded({ extended: true }));

/* Estableciendo rutas */
app.use(require("./routes/user.routes"));
app.use(require("./routes/notes.routes"));
/* Exportando la instancia */
module.exports = app;