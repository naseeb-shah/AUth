 const mongoose= require('mongoose')



 var user =  new mongoose.Schema(
    {
        username:String,
    password: String,
    email: String,
    isEmialverfied:Boolean,
    emailOTP:Number
    
    
     },{
        timestamps: true
     })
     var users= mongoose.model('username',user)
  module.exports=users