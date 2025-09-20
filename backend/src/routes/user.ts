import  { Router } from "express";
import jwt from "jsonwebtoken";

import { userModel } from "../db.js";
import { JWT_SECRET } from "./config.js";
const userRoutes=Router();
userRoutes.post("/signup",async(req,res)=>{
    const {username,password}=req.body;
    try{
        await userModel.create({
            username:username,
            password:password
        })
        res.json({
            message:"signed up success"
        })
    }catch(err){
        console.log(err)
        res.json({
            message:"something went wrong"
        })
    }
})
userRoutes.post("/signin",async(req,res)=>{
    const {username,password}=req.body;
    try{
     const isExist=await userModel.findOne({username,password})
     if(!isExist){
        return res.json({
            message:"user not found"
        })
     }
     const token=jwt.sign({id: isExist._id},JWT_SECRET ,{expiresIn: "1h"})
     res.json({
        message:"signin success",
        token:token
     })
    }catch(err){
        console.log("eror is ",err)
   res.json({
    message:"something went wrong "
   })
    }
})

export default userRoutes;