const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./src/routes/api');

const app = express();

const port =3000;

app.use(apiRoutes)

app.get('',(req,res) => {
    res.send('api works hola mundo');
});

const uri = 'mongodb+srv://usuario_prueba:admin@cluster-cecy.3rwfacg.mongodb.net/dtagenda?retryWrites=true&w=majority';

mongoose.connect(uri,(err) => {
    if (err) {
        console.log('No se pudo conectar a la base de datos');
    }else{
        console.log('se conecto correctamente a la base de datos');
        app.listen(port, () => {
            console.log('app is running in port ' + port);
        });
    }
});


