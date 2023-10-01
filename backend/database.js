// Importando mongoose
const mongoose = require('mongoose');
/* Variables de entorno */
const { APP_HOST, APP_DATABASE } = process.env;
/* Cadena de construcción */
const MONGODB_URI = `mongodb://${APP_HOST}/${APP_DATABASE}`;
/* Conexion a la db */
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log("La base de datos está en línea"))
    .catch(err => console.log("Error: " + err));