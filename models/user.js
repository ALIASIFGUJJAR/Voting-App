//User.JS
const { request } = require('express');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type:number,
        require:true

    },
    email:{
        type:String,
        
    },
    mobile:{
        type:String,
    },
    address:{
        type:String,
        require:true
    },
    cnicNumber:{
        type:Number,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum: ['voter','admin'],
        require: true
    },
    isVoted:{
        type: Boolean,
        default: false
    } 
})

const user=mongoose.model('User',userSchema)
module.exports= User;