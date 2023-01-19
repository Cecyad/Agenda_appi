const { response } = require('express');
const { model } = require('mongoose');
const jwt=require('jsonwebtoken');
const modelo = require('./../models/usuario');
require('dotenv').config();
const crypto = require('crypto');

function hashPassword(pwd){
    return crypto.scryptSync(pwd,'salt',24);
}

module.exports = {
    login: (req,res)=> {
        const data = req.body;

        const credenciales = {
            correo: data.correo,
            passward:hashPassword(data.passward)
        } 


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
    },
    registro: (req,res) => {
        const datos = req.body;
        const hashedPassword = hashPassword(datos.passward);
        datos.passward = hashedPassword;
        modelo.create(datos).then(response => {
            const {_id,nombre,correo}=response;
            res.send({_id,nombre,correo});
        }).catch(err => {
            res.sendStatus(400);
        });
    }

}