import mongoose from 'mongoose'
import User from '../Models/user.js'
import Token from '../Models/token.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { response } from 'express'


dotenv.config();
// export const AddUser=async(req,res)=>{
//    const data=req.body;
//    if(!data) res.status(404).json({message:message.error});
//    try{
//       const newuser=new User(data);
//       await newuser.save();
//       return res.status(200).json({message:"successfully user register"});
//    }
//    catch(error){
//        return res.status(404).json({message:error.message});
//    }
// }

export const AddUser=async(req,res)=>{

   console.log(req.body," ----");
   // res.send("hello i am signup")
   try{
      const info=req.body;

      const hashpassword=await bcrypt.hash(info.password,10);

      const user = new User({email:info.email , name:info.name ,contact:info.contact,branch:info.branch ,designation:info.designation,password:hashpassword});
      await user.save();
      res.status(200).json({message:"Everything is ok"}); 
   }
   catch(error){
    //console.log("there is an error ",error.message);
    res.status(400).json({message:error.message})
   }
} 



export const Login=async(req,res) =>{
    const {email,password}=req.body;
    console.log(req.body);
    const data=await User.findOne({email:email});
    console.log("----------",data);
    if(!data) res.status(404).json({message:"user not exit"});
    try{
       
       const match = await bcrypt.compare(password,data.password);
       if(match){
     
         const accessToken = jwt.sign(data.toJSON(),process.env.ACCESS_KEY,{expiresIn:'15m'})
         const refreshToken = jwt.sign(data.toJSON(),process.env.REFRESH_KEY);
         console.log("hello");
        
      
         const newToken =new Token({token:refreshToken});
         await newToken.save();
         return res.status(200).json({accessToken:accessToken,refreshToken:refreshToken,email:data.email,designation:data.designation,branch:data.branch,name:data.name,contact:data.contact,id:data._id});
       }
       else{
         return res.status(403).json({message:"Password is not matched"});
       }
      
       
   
  
  //    res.send(data);
      
    }
    catch(err){
       return res.status(400).json({message:err.message});
    }
}


export const allstudents =async(req,res)=>{
     var data=await User.find({designation:"student", branch:req.params.branch});

     if(req.params.branch==='All') data=await User.find({designation:"student"});
     if(!data) res.status(404).json({message: 'there is no students '});
     try{
       return res.status(200).json(data);
     }
     catch{
      return res.status(404).json({message:error.message});
     }
}


export const AllFaculty=async(req,res)=>{
    const data=await User.find({designation:'faculty'});
    if(!data) res.status(404).json({message:"there is no faculty"});
    try{
        return res.status(200).json(data); 
    }
    catch(error){
        return res.status(404).json({message:"there is an error"});
    }
}


