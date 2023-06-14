const express=require('express')

import router from "./routes/auth";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app=express()

dotenv.config()

app.use(express.json())

app.use('/auth',router)

app.listen(8080,()=>{
    console.log('Server running on port 8080');
    
} ) 