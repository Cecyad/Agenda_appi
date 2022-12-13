const { response } = require('express');
const contacto = require('./../models/contacto');

module.exports = {
    listar: (req,res) => {
        const parametro = req.params.parametro;
        if (parametro != undefined){
            if (parametro.includes('@') == true){
                nom={status:1,correo: parametro};
            }
            else{
                nom={status:1,nombre: parametro};
            }
        }
        else{
            nom={status: 1};
        }
        //console.log(nom);

        contacto.find(nom)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(400).send('Error al intentar listar.');
            });
    },
    ver: (req,res) => {
        const id = req.params.id;
        contacto.findOne({status: 1,_id: id })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(400).send('Error al intentar buscar por ID.');
            });
    },
    crear: (req,res) => {
        const data = req.body;
        contacto.create(data).then(response => {
            res.send(response);
        });
    },
    eliminar: (req,res) => {
        const id = req.params.id;
        contacto.findOne({_id: id })
            .then(data => {
                data.status=2;
                data.save();
                res.send(data);
            })
            .catch(err => {
                res.status(400).send('Registro eliminado.');
            });
    },
    editar: (req,res) => {
        const id = req.params.id;
        const llave = req.params.llave;
        const valor = req.params.valor;

        contacto.findOne({_id: id })
            .then(data => {
                data[llave]=valor;
                data.save();
                res.send(data);
            })
            .catch(err => {
                res.status(400).send('Error al intentar actualizar.');
            });
    }
}