import express from 'express'
import { body, validationResult } from 'express-validator';

const router=express.Router();

router.post('/login',
body('email').isEmail().withMessage('Email is invalid'),
body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')
,(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.json({errors:errors.array().map(err=>err.msg)})
    }
 const   {email,password}=req.body;
    res.json({
        email,
        password
    })
})

export default router;