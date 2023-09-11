require("dotenv").config()
const mongoose= require("mongoose")


//db connection 
const connection =
mongoose.connect(process.env.MONGOURI)
    .then(()=>{
        console.log("connected to Db")
    })
    .catch(()=>{
        throw new Error("Connection failed")
    })

module.exports= connection    