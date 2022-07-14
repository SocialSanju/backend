import productRouter from './routers/productRouter.js';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import sampleRouter from './routers/sampleRouter.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 const DATABASEURL =  process.env.SERVERDB;


mongoose .connect(DATABASEURL, { 
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true 
}) .then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));



app.use('/api/products', productRouter);
app.use('/api/sample', sampleRouter);
const port = process.env.PORT || 8000;


 app.listen(port, () => {
   console.log(`Serve at http://localhost:${port}`);
 });
