const mongoose=require('mongoose')
const projectschema =new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   desc:{
    type:String,
    required:true
   },
   cover:{
      type:String,
      required:true
   },
   link:{
      type:String,
      required:false
   },
   git:{
      type:String,
      required:true
   }
})
const Project=mongoose.model('Project',projectschema)
module.exports=Project 