import User from './../models/User.js'
import nodemailer from 'nodemailer'
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
        to: "gayatri@golokait.com",
        subject: `${name} successfully the user Register ✅`,
        text: ` Name : ${name} 
        Mobile :${mobile} 
        Address: ${address} is  Register is successfully which is come from reference  ${Reference}.`
    };
    const registrationCount = await User.countDocuments({ mobile });
            console.log(registrationCount)
             
    if (registrationCount > 4) {
        return res.json({
            success: false,
            message: 'you already cross limit'
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
                message: 'Registration successfully !'
            });
        }

    });


};

export default postApiSignup