const express=require('express')

import router from "./routes/auth";

const app=express()

app.use(express.json())

app.use('/auth',router)

app.listen(8080,()=>{
    console.log('Server running on port 8080');
    
} ) 