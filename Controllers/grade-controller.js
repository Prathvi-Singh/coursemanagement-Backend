import mongoose from 'mongoose';
import Grade from '../Models/grade.js';

export const AddGrade =async(req,res) => {
    const data=req.body;
    if(!data) res.status(200).json({message:"It not contain full information"});
    try{
       for(var i=0;i<data.length;i++){
        const grade=new Grade(data[i]);
        await grade.save();

       }

      

        return res.status(200).json({message:"success"});
    }
    catch(error){
        res.status(400).json({message:error.message});
    }

}

export const allgrades = async(req,res)=>{
     const data=await Grade.find({email:req.params.email});
     if(!data) return  res.status(404).json({message:"there is no data"});
     try{
        return res.status(200).json(data);
     }
     catch(error){
        return res.status(404).json({message:error.message});
     }
}