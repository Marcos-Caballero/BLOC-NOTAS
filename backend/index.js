/* configurando variables de entorno */
require('dotenv').config();
/* Importando la instancia */
const app = require('./server');
/* Conectando la db */
require("./database");
/* Levantando el servidor en express */
app.listen(app.get('port'), function () {
    console.log('Servidor esta en puerto:', app.get('port'));
})