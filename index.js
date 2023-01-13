const express = require('express');
const mongoose = require('mongoose');


require('dotenv').config();

const apiRoutes = require('./src/routes/api');

const app = express();
const port = process.env.PORT || 3000;

//const port =3000;

app.use(express.json());

app.use(apiRoutes)

app.get('',(req,res) => {
    res.send('api works hola mundo');
});

//const uri = 'mongodb+srv://usuario_prueba:admin@cluster-cecy.3rwfacg.mongodb.net/dtagenda?retryWrites=true&w=majority';
const uri =process.env.MONGODB;

mongoose.connect(uri,(err) => {
    if (err) {
        console.log('No se pudo conectar a la base de datos');
    }else{
        console.log('se conecto correctamente a la base de datos');
        app.listen(port, () => {
            const env = process.env.NODE_ENV;
            if (env == 'local'){
                console.log('app is running in LOCAL in port ' + port);
            }else{
                console.log('app is running in PROD in port ' + port);
            }
        });
    }
});


