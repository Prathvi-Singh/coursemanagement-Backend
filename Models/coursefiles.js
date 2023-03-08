import mongoose from 'mongoose';

const filesSchema = mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    filename:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    description:{
        type:String,
       
    },
    course:{
        type:String,
    }


});

const Files = mongoose.model('Files',filesSchema);
export default Files; 