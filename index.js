const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(apiRoutes)

const port =3000;

app.get('',(req,res) => {
    res.send('api works hola mundo');
});

const uri = 'mongodb+srv://usuario_prueba:admin@cluster-cecy.3rwfacg.mongodb.net/dtagenda?retryWrites=true&w=majority';

mongoose.connect(uri,(err) => {
    if (err) {
        console.log('No se pudo conectar a la base de adtos');
    }else{
        console.log('se conecto correctamente a la base de datos');
        app.listen(port, () => {
            console.log('app is running in port ' + port);
        });
    }
});


