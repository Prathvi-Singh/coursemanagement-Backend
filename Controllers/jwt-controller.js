import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();


export const authenticateToken=(req,res,next)=>{
   console.log(req.body);
   const authHeader =req.headers.authorization ;

   const token =authHeader && authHeader.split(' ')[1];
  // console.log(token)

   if(token==null){
     return res.status(401).json({message:"accesstoken is not valid"})
   } 
   
   jwt.verify(token,process.env.ACCESS_KEY,(error,user)=>{
       if(error){
         return res.status(403).json({mesaage:"invalid token"}); 
       }

       req.user =user;
       next();
   })

}