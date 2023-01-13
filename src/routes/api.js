const express = require('express');
const authMiddleware = require('../middlewares/auth');

//GET /contactos
const router = require('express').Router();
const contactoController = require ('./../controllers/contactos');
router.use('/contactos',express.json());
const usuarioController = require ('./../controllers/usuarios');


//multer ultima clase

/*
const multer =require('multer');

const storage = {
    destination : (req,file,callback) => {
        callback(null, 'uploads'); // error -first callback
    },
    filename: (req,file,callback) => {
        const extension = file.originalname.split('.').pop(); 
        //let nombre = new Date().getTime() + '.jpg';
        const nombre = `${req.user_id}-${new Date().getTime()}.${extension}`;
        callback(null,nombre);
    }
};

const multerstorage = multer.diskStorage(storage);

const upload = multer({ storage: multerstorage});
*/


//contactos
router.use('/contactos',authMiddleware);
router.get('/contactos', contactoController.listar);
router.get('/contactos/:parametro', contactoController.listar);

router.get('/contactos/id/:id', contactoController.ver);


router.post('/contactos', contactoController.crear);
//router.post('/contactos',express.json(), upload.single('foto'), contactoController.crear);

router.get('/contactos/editar/:id/:llave/:valor', contactoController.editar);
//router.get('/contactos/editar/:id', contactoController.editar);
router.get('/contactos/eliminar/:id', contactoController.eliminar);

//usuarios
router.post('/registro', usuarioController.registro );

router.post('/login',usuarioController.login);


module.exports = router;