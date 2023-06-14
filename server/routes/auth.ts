import express from 'express'

const router=express.Router();

router.post('/login',(req,res,next)=>{
 const   {email,password}=req.body;
    res.json({
        email,
        password
    })
})

export default router;