import express from 'express';
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"; 
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDb from './config/db.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';

dotenv.config();
connectDb();
const app = express();

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Cookie-parser middlewre;
app.use(cookieParser())

const port = process.env.PORT | 5000;

app.get('/', async (req,res) => {
    res.send("Hello Proshop");
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
})