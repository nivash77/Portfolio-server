const express=require('express')
const router=express.Router();
const projects=require('../models/ProjectModel');

const { message } = require('statuses');

router.get('/all',async(req,res)=>{
    try{
        const data=await projects.find()
         res.status(200).json(data)
    }catch(error){
        res.status(500).json(error)
    }
})
router.post('/add',async(req,res)=>{
    try {
        const newProject=await projects(req.body)
        const{title,desc}=newProject
        if(!title || !desc){
            
           return  res.status(400).json({message:"Title & Desc Required"})
        }
        const savedata= newProject.save()
       return  res.status(201).json(savedata)
    } catch (error) {
        return res.status(500).json(error) 
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await projects.findOne({ _id: id })
        if (!data) {
            res.status(404).json({ message: "Project not found !" })
        }
        const delProject = await projects.findByIdAndDelete(id)
        res.status(200).json({ message: "Project Deleted !" })
    } catch (e) {
        res.status(500).json(error)
    }
})
module.exports=router