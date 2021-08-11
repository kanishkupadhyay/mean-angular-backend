const express=require("express")
const router=express.Router()
const {User,Movie,Category}=require('../models/user')
const jwt=require("jsonwebtoken")

router.post("/register",async(req,res)=>{
    try{
    const userExist=await User.findOne({email:req.body.email})
    if(userExist){
        return res.status(422).json({err:"user already exist"})
    }
    const newUser= new User(req.body)
    const result=await  newUser.save()
    res.json({message:"user registered successfully",result})
}
catch(e){
    res.status(401).json({msg:"err",e})
}
})

router.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body
   const userLogin=await User.findOne({email:req.body.email})
   if(userLogin){
	 
	let payload={subject:User._id}
	let token=jwt.sign(payload,'secretKey')
	res.status(201).json({token,data:userLogin})
    console.log(userLogin)
   }
      else if(!userLogin){
        res.status(400).json({err:'invalid credentials'})
    	}
   }
   catch(e){
    console.log(e)
   }
})

router.post("/movies",async(req,res)=>{
    try{
        const newMovie= new Movie(req.body)
        const result=await  newMovie.save()
        res.json({msg:result})

    }catch(e){
       console.log(e)
    }
})

router.get("/movies",async(req,res)=>{
    try{
    const movieData=await Movie.find()
    res.status(201).send(movieData)
    }
    catch(e){
        res.status(400).send("Something went wrong",e)
    }
})
router.get("/movies/:id",async(req,res)=>{
    var ObjectId = require('mongodb').ObjectID;
    try{
const idData=await Movie.findById({_id:ObjectId(req.params.id)})
const result= idData
res.status(201).send(result)
    }
    catch(e){
        res.status(401).json('Something went wrong',e)
    }

})

router.get("/search/:name",async(req,res)=>{
    try{

        const name= await Movie.findOne({name:req.params.name})
        const result=name
        res.status(201).json({data:result})
    }catch(e){
        res.status(401).json({msg:"Error occured",e})
    }
})
router.post("/category",async(req,res)=>{
    try{
const category= new  Category(req.body)
const result=await category.save()
res.status(201).json({msg:"category added successfully"})
    }
    catch(e){
        res.status(401).json({err:"failed to add category"})
    }
})
router.get("/category",async(req,res)=>{
    try{
        const movieData=await Category.find()
    res.status(201).send(movieData)
    }
    catch(e){
        res.status(401).json({err:e})
    }
})
router.get("/category/:category",async(req,res)=>{
try{
const categoryData=await Movie.find({category:(req.params.category)})
const result= categoryData
res.status(201).send(result)
}catch(e){
    res.status(401).send(e)
}
})
module.exports=router