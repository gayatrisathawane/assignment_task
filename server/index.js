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
const PORT = process.env.PORT || 8000

import path from 'path';

const __dirname = path.resolve();


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




if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
  }



app.listen(PORT ,()=>{
    console.log(`server is running ${PORT} `);
    
});