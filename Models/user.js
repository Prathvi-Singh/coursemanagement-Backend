import mongoose from 'mongoose'

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    designation:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    branch:{
      type:String,
      required:true
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String
    }


})

const User = mongoose.model('User',userSchema);

export default User;
