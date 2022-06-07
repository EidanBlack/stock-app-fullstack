const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    console.log("Petición recibida");

    res.status(200).sendFile('index.html');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server listening in port ${PORT}`);
});