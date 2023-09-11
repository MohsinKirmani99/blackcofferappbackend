require("dotenv").config()
const connectdb= require('./dbConnect/db')
const model= require('./model/model')
const data= require('./jsondata.json')

const start= async()=>{
    try{
        
        await model.create(data)
        console.log("Data success")
    }
    catch(err){
        console.log(err)
    }
   
}
start();