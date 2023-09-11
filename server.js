require("dotenv").config()
const express= require("express")
const mongoose= require("mongoose")
const app= express()
const DBConnect= require('./dbConnect/db')
const blackcoffer= require('./router/router')
const cors= require("cors")
//app listen and db connect 

app.listen(process.env.PORT,()=>{
    console.log('server is running on port',process.env.PORT)
})

 //middleware
    app.use(cors())
    app.use(express.json())
    app.use((req,res,next)=>{
        console.log(req.method,req.path)
        next()
    })

    //route call

    app.use('/api/black',blackcoffer)