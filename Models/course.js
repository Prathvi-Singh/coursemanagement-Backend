import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({

    facultyname:{
        type:String,
        required:true 
    },
    facultyemail:{
        type:String,
        required:true
    },
    coursename:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    }

});

const Course = mongoose.model('Course',courseSchema);
export default Course; 
