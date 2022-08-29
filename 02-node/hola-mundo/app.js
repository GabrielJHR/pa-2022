const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hola mundo desde Node JS');
})

app.listen(3000, ()=> {
    console.log('Servidor corriendo en el puerto 3000');
})