const express= require("express")
const getall= require('../controllers/controller')
const router= express.Router()


//get all data route
router.get('/getdata',getall)



module.exports= router