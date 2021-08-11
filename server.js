const express=require("express")
const app=express()
const routes=require("./router/app")
const cors=require("cors")
const port=process.env.PORT||4400
app.use(cors())
require("./db/conn")
app.use(express.json())
app.use(routes)

app.listen(port,()=>console.log(`Server is running on ${port}`))