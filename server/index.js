// const mongoose = require('mongoose')
// const express =require('express')
// const  dotenv = require('dotenv')
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config();

import  postApiSignup from './controller/user.controller.js'

const app=express()
app.use(express.json())
const PORT = process.env.PORT || 5000


const mongoDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_DB)

        if (connect) {
            console.log("MongoDB connected successfully")
        }
    } catch (error) {
        console.log(error)
    }
}

mongoDb()


app.post('/api/v1/registers',postApiSignup)



// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: '',
//     pass: ''
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });



app.listen(PORT ,()=>{
    console.log(`server is running ${PORT} `);
    
});