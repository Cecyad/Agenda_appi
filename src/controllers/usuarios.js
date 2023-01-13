const { response } = require('express');
const { model } = require('mongoose');
const jwt=require('jsonwebtoken');
const modelo = require('./../models/usuario');
require('dotenv').config();

module.exports = {
    login: (req,res)=> {
        const credenciales = req.body;

        if(credenciales.correo && credenciales.passward){
            modelo.findOne(credenciales).then(response => {
                if(response){
                    console.log(response);
                    //res.send('ok');
                    const {_id,nombre}=response;
                    //generar el token
                    const token = jwt.sign({_id,nombre},process.env.secreta);
                    //const token = jwt.sign({_id:_id,nombre:nombre},process.env.secreta);
                    res.send(token);
                } else{
                    res.sendStatus(401);
                }
            }).catch(err =>{
                res.sendStatus(400);
            });
        }else{
            res.sendStatus(400);
        }
    },
    registro: (req,res) => {
        const datos = req.body;
        modelo.create(datos).then(response => {
            res.send(response);
        }).catch(err => {
            res.sendStatus(400);
        });
    }

}