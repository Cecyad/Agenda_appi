const {Schema, model} = require('mongoose');


const contactoSchema = new Schema({
    nombre: {type: String},
    correo: {type: String},
    telefono: {type: String, default : '0'},
    status: {type: Number, default: 1 }
});

module.exports = model('tblcontactos',contactoSchema);
