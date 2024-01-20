// const  {User} =require( "./../models/User.js");
import User from './../models/User.js'
// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
const postApiSignup = async (req, res) => {
    const { name, mobile, email, address, Reference } = req.body;


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    const mailOptions = {
        from: process.env.EMAIL,
        to: "cloudmaniaindia@gmail.com",
        subject: ``,
        text: "successfully register"
    };
    const registrationCount = await User.countDocuments({ mobile });
            console.log(registrationCount)
             
    if (registrationCount > 4) {
        return res.json({
            success: false,
            message: 'you already'
        });
    }

    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.error(error);
        } else {

            const user = new User({
                name,
                mobile,
                email,
                address,
                Reference
            });

            const saved = await user.save();
            return res.json({
                success: true,
                data: saved,
                message: 'Registration successful'
            });
        }





    });






};

export default postApiSignup