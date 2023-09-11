const model= require('../model/model')

//get all data 
const getall=async(req,res)=>{
    try{
        const result = await model.find()
         res.json(result)
    }
    catch(err){
        console.log(err)
        res.status(500).json("something wrong")
    }

}



module.exports= getall