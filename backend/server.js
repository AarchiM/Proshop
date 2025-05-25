import express from 'express';
import Products from "./data/Products.js"; // Ensure correct extension
import dotenv from 'dotenv';
import connectDb from './config/db.js';
dotenv.config();
connectDb();
const app = express();

const port = process.env.PORT | 5000;

app.get('/', (req,res) => {
    res.send("Hello Proshop");
})

app.get('/api/products', (req,res) => {
    res.json(Products);
})

app.get('/api/products/:id', (req,res) => {
    const product = Products.find((p)=> p._id == req.params.id);
    res.json(product);
})

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
})