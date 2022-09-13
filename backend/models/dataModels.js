const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        FirstName:{
            type:String,
            required:true,
        },
        LastName:{
            type:String,
            required:true,
        },
        PhoneNumber:{
            type:String,
            required:true,
        },
        Email:{
            type:String,
            required:true,
        },
        
    }
)