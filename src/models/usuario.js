const {Schema, model} = require('mongoose');


const schema = new Schema({
    nombre: {type: String,required: true},
    correo: {type: String,required: true},
    passward: {type: String,required: true},
    status: {type: Number, default: 1 } 
});

module.exports = model('usuarios',schema);
