import mongoose from 'mongoose';
import Course from '../Models/course.js'

export const AddCourse=async(req,res)=>{
    const course=req.body;
    console.log(course);
    if(!course) return res.status(400).json({message:"Please fill all field"});
    try{
        const newcourse =new Course(req.body);
        await newcourse.save();

        const all=await Course.find({});
        
        return res.status(200).json(all);
    }
    catch(err){
        res.status(403).json({message:"there is an error "});
    }
}

export const GetCourses =async(req,res)=>{
  let branch =req.query.branch;
    console.log(branch)
    var data;
    if(branch && branch!='ALL') data =await Course.find({branch:branch});
    else data=await Course.find();
  
  try{
    //console.log(data);
    return res.status(200).json(data);
  }
  catch(error){
    return res.status(403).json({message:error.message});
  }
}

// export const BranchByCourse = async(req,res) =>{
//   const data = req.body.params.branch;
//   console.log("hello...",data);
// }

export const SendCourseInDetail=async(req,res)=>{
  
  try{
   // console.log("hqqq..",req.params.id);
    const data=await Course.findById(req.params.id);
  if(!data) return res.status(403).json({message:"There is no course with thid id"});
    return res.status(200).json(data);
  } 
  catch(err){
    console.log(err)
    res.status(500).json({message:err.message});
  }
}

export const Update=async(req,res)=>{
  
  try{
    console.log("hqqq..",req.params.id);
     const data=await Course.findById(req.params.id);
     if(!data) return res.status(400).json({message:"Course not found"});
       
     await Course.findByIdAndUpdate(req.params.id,{$set:req.body});
     return res.status(200).json({message:"course updates"});

  }
  catch(error){
    return res.status(400).json({message:"there is some error"});
  }

}

export const DeleteCourse =async(req,res)=>{
    try{
       const course=await Course.findById(req.params.id);
       if(!course) return res.status(404).json({message:"couese not exit"});

       course.delete();
       return res.status(200).json({message:"Course deleted successfully"})
    }
    catch(error){
       return res.status(404).json({message:"Errot in deleteing"});
    }
}

