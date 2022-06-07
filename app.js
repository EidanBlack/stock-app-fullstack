const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    console.log("Petición recibida");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server listening in port ${PORT}`);
});