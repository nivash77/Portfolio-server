const mongoose= require('mongoose')
mongoose.connect(process.env.MONGO||"mongodb+srv://admin:admin@nivash.nrt23.mongodb.net/?retryWrites=true&w=majority&appName=nivash")
const connnection=mongoose.connection;
connnection.on('connected',()=>{
    console.log('DB connect')
})
connnection.on('error',()=>{
    console.log('DB error')
})
module.exports=mongoose 