const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

mongoose
.connect(`mongodb+srv://Divague190594:${process.env.MONGO_DB_PASS}@development.d2u5n.mongodb.net/stock-app?retryWrites=true&w=majority`)
.then((result) => {
    console.log("Conexion a BBDD exitosa!");
    app.listen(PORT, ()=>{
        console.log(`Server listening in port ${PORT}`);
    });
})
.catch((err) => console.log(err));

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: Number,
    },
    {timestamps: true}
);

const Product = mongoose.model('Product', productSchema, 'Products');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.post('/api/v1/products', async (req, res, next) =>{
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
    });

    await newProduct.save().then((result)=>{
        res.status(201).json({ok: true});

    })
    .catch((error) => console.log(error));
});

const PORT = process.env.PORT || 4000;

