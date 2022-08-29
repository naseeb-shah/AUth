const express = require('express')
// const nodemailer=require('nodemailer')

const nodemailer = require("nodemailer");

async function main( text,rec) {


  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: 'gmail', // true for 465, false for other ports
    auth: {
      user: 'scionofdeenshah@gmail.com', // generated ethereal user
      pass: 'wesfvzzuevhomnom'},
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'scionofdeenshah@gmail.com', // sender address
    to: `${rec}`, // list of receivers
    subject: "One time password", // Subject line
    // text: `${text}`, // plain text body
    html: `<b>One time passord Verficaiton</b>
    
    <h5>${text}<h5>
    
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);



module.exports=main