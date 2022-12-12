const {Schema, model} =require('mongoose')


const contactoSchema = new Schema({
    nombre: {type: String},
    telefono: {type: String,default: '0'},
    correo: {type: String},
    status: {type: String, default:1}
});

module.exports = model('contactos',contactoSchema);
