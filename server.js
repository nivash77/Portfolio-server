require('dotenv').config()
const express=require('express')

const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors) 
const dbconn=require('./config/db')
const Projects=require('./routes/ProjectRouter')
const port=process.env.PORT||7778
app.use('/projects',Projects)
app.get('/',(req,res)=>{
    res.json({message:"welcome"})
})
app.listen(port,()=>{ 
    console.log(`Server run in:${port}`)
})