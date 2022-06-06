const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    console.log("Petición recibida");

    res.send('Hola mundo');
});

app.listen(4000, ()=>{
    console.log("Server listening in port 4000");
});