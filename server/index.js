import express from "express";
import cors from "cors";
import mysql2 from "mysql2";
import { productRouter } from "./routes/product.js";
import {dataRouter} from "./routes/finaldata.js";
import { trRouter } from "./routes/transactiondata.js";
import { userDetailsRouter } from "./routes/userDetails.js";
import { authRouter } from "./routes/Auth.js";
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass123',
    database: 'inventory_schema',
  });
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });
const app = express()
app.use(express.json())
app.use(cors())
app.use('/',productRouter)
app.use('/data',dataRouter)
app.use('/trdata',trRouter)
app.use('/auth',authRouter)
app.use('/user',userDetailsRouter)
app.listen(5000,()=>console.log("server running"))
export {connection}