/* Importando modelos desde mogoose */
const { Schema, model } = require('mongoose');
/* Definiendo el esquema del modelo de notas */
const NoteSchema = new Schema({
    titulo: { type: String, required: true },
    contenido: { type: String, required: true },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Register',
        required:true
    }
}, { timestamps: true })
/* Exportando */
module.exports = model('Note', NoteSchema);