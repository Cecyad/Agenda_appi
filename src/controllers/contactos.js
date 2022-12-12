const contacto = require('./../models/contacto');

module.experts = {
    listar: (req,res) => {
        contacto.find({status:1})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(400).send('algo salio mal');
        })
    }
}