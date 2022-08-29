 const mongoose = require('mongoose')


 async function dataconnect(){
     return new Promise((resolve, reject)=>{
         const url='mongodb://localhost:27017/deen'


         mongoose.connect(url,(err)=>{
            if(err){
                console.log('Err',err)
                return  reject(err);
            }
            
            console.log("maongodb conncect succefully")
            resolve()
         })

     })
 }
 module.exports=dataconnect