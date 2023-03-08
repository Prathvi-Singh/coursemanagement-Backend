import Grade from '../Models/grade.js'

export const tokend=async(req,res)=>{
  
   try{
     await Grade.deleteMany({});
    // data.delete();
      res.status(200).json({message:"successfully deleted"});
   }
   catch(error){
      res.status(404).json({message:error.message}); 
   }
}