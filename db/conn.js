const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost:27017/mean',{useCreateIndex:true,useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('connection establishd'))
.catch((e)=>console.log("connection rejected"))