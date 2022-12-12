const router = require('express').Router();
const contactoController = require ('./../controllers/contactos');

router.get('/contactos', contactoController.listar);


module.exports = router;