const express = require('express');
const router = require('express').Router();
const contactoController = require ('./../controllers/contactos');
router.use('/contactos',express.json());

router.get('/contactos', contactoController.listar);
router.get('/contactos/:parametro', contactoController.listar);

router.get('/contactos/id/:id', contactoController.ver);
router.post('/contactos',express.json(), contactoController.crear);

router.get('/contactos/editar/:id/:llave/:valor', contactoController.editar);
router.get('/contactos/eliminar/:id', contactoController.eliminar);


module.exports = router;