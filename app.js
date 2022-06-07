const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

mongoose
.connect(`mongodb+srv://Divague190594:${process.env.MONGO_DB_PASS}@development.d2u5n.mongodb.net/?retryWrites=true&w=majority`)
.then((result) => {
    console.log("Conexion a BBDD exitosa!");
    app.listen(PORT, ()=>{
        console.log(`Server listening in port ${PORT}`);
    });
})
.catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.post('/api/v1/products', (req, res, next) =>{
    console.log({body: req.body});
    res.status(201).json({ok: true});
});

const PORT = process.env.PORT || 4000;

