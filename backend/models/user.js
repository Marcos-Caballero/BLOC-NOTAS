/* Importando objetos desde mongoose */
const { Schema, model } = require("mongoose");
/* Definiendo esquema de modelo de usuarios */
const RegisterSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        nombres: { type: String, required: true },
        apellidos: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true, unique: true },
    },
    { timestamps: true }
);
/* Exportando */
module.exports = model("Register", RegisterSchema);