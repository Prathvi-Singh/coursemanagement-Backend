import mongoose from 'mongoose';

const gradeSchema = mongoose.Schema({
   
    email:{
        type:String,
      
    },
    name:{
        type:String,
      
    },
    grade:{
        type:String,
       
    },
    branch:{
       type:String
       
    },
    course:{
       type:String
      
    }

})

const Grade=mongoose.model('Grade',gradeSchema);

export default Grade;