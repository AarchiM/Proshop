import express from 'express';
import productRoutes from "./routes/productRoutes.js"; // ✅ Correct path
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';

dotenv.config();
connectDb();
const app = express();

const port = process.env.PORT | 5000;

app.get('/', async (req,res) => {
    res.send("Hello Proshop");
})

app.use('/api/products', productRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
})