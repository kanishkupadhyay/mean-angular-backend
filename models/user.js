const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
})

const moviesSchema=mongoose.Schema({
    categoryId:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    actor:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    iframe:{
        type:String,
        required:true
    },
    imgsrc:{
        type:String,
        required:true
    },
    uploadDate:{
        type:String,
        required:true
    }
})
const categorySchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const User=mongoose.model('user',userSchema)

const Movie=mongoose.model('movie',moviesSchema)
const Category=mongoose.model('category',categorySchema)
module.exports={User,Movie,Category}