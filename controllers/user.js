const express = require('express')
const jwt = require('jsonwebtoken')
const usermodel = require('../database/user')
const bcrypt = require('bcrypt')
 const crypto =require('crypto');

const main = require('./emal.send');

async function register(req, res) {
   //  const {}=req.body
   const {
      username, email, password
   } = req.body
   let otp=crypto.randomInt(10000,100000)
   pass = bcrypt.hashSync(password, 10)
   usermodel.create({
      username: username,
      password: pass,
      email: email
      ,
      emailOTP:otp

   })
main(otp,email)

   return res.send(req.body)
}



async function login(req, res) {

   let {
      email, password
   } = req.body

   console.log(email)
   var user = await usermodel.findOne({ email: email })

   if (!user) {
      return res.status(404).send({
         'error': "user not found"
      })
   }
   const mathed = bcrypt.compareSync(password, user.password)
   let userdata = {
      email: user.email,
      username: user.username

   }
   if (mathed) {
      return res.send({
         Response: "sucess",
         token: jwt.sign(userdata, "deenshah"),
         user: userdata

      })
   }
   else {

      return res.send({
         "invalid user": "datils"
      })
   }


}




async function loged(req, res) {

   token = req.headers['auth-token']
   if (token) {

      try {
         var sai = jwt.verify(token, 'deenshah')
         console.log(sai)
         return res.send(sai)
      } catch (e) {
         console.log(e)
         return res.send({
            response: "err",
            status: "invalidBlock"
         })
      }

   }else{
      res.send({
         response: "err",
         status: "invalidBlock"
      })

   }



}

module.exports = {
   login, register, loged
}