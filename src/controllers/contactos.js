const { response } = require('express');
const contacto = require('./../models/contacto');
const jwt = require('jsonwebtoken');
//require('dotenv').config();

module.exports = {
    listar: (req,res) => {
        
        
            //console.log('Objeto',decoded);
            //res.send('');
            //console.log('UserID: ',decoded._id);
            //contacto.find({status: 1, idusuario: req.user._id})
            //contacto.find({status: 1})

            contacto.find({status: 1, idusuario: req.user._id})
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(400).send('algo salio mal'); //Bad requests
                });

        
        /*const parametro = req.params.parametro;
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
            });*/
    },
    ver: (req,res) => {
        const id = req.params.id;
        contacto.findOne({status: 1,_id: id,idusuario: req.user._id})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(400).send('Error al intentar buscar por ID.');
            });
    },
    crear: (req,res) => {
        let data = req.body;
        data.idusuario = req.user._id;

        contacto.create(data)
        .then(response => {
            res.send(response);
        }).catch(err => {
            res.status(400).send('Error al intentar crear registro.');
        });
    },
    eliminar: (req,res) => {
        const id = req.params.id;
        contacto.findOne({_id: id,idusuario: req.user._id})
            .then(data => {
                data.status=2;
                data.save();
                res.send(data);
            })
            .catch(err => {
                res.status(400).send('Error al intentar eliminar registro.');
            });
    },
    editar: (req,res) => {
        const id = req.params.id;
        const llave = req.params.llave;
        const valor = req.params.valor;

        //console.log(req.user._id,"----",id,"----",llave,"----",valor);

        contacto.findOne({_id: id, idusuario: req.user._id})
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