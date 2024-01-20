import React, { useState } from "react";
import axios from 'axios';
import RegisterBg from './../Regisrer/registerimg.png'
import './Register.css'
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

import showToast from 'crunchy-toast';




function Register() {

    const [name, setName] = useState("");

    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("")
    const [Reference, setReference] = useState('')


    const RegisterUser = async () => {
        if (!name) {
            alert("Name is requred");
            return;
        }
        if (!mobile) {
            alert("Mobile is requred");
            return;
        }

        if (!address) {
            alert("address is requred");
            return;
        }

        if (!email) {
            alert("Email is requred");
            return;
        }

        if (!Reference) {
            alert("Reference is requred");
            return;
        }


        const response = await axios.post("/api/v1/registers", {
            name: name,
            address: address,
            mobile: mobile,
            email: email,
            Reference: Reference

        })

        showToast(response?.data?.message, "success", 3000);

    };


    return (
        <>
            <Navbar />
            <p className="text-center fs-1 mt-3 fw-bold text-info"> Welcome Clound Mania </p>
            <div className="register-main-container d-flex justify-content-evenly">

                <div className="register-img-container">
                    <img src={RegisterBg} className="register-img" alt="registerimg" />
                </div>
                <div className="sign-up-details">

                    <div className="inputregister mt-1">

                        <p className="fs-3">Register Here</p>
                        <div className="p-1">
                            <label htmlFor="name" className="input-label">Name</label><br />
                            <input type="text"
                                placeholder="Enter your name"
                                id="name"
                                className="register-input-field"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }} />

                        </div>

                        <div className="p-1">
                            <label htmlFor="email" className="input-label">Email</label><br />
                            <input type="text"
                                placeholder="you@example.com"
                                id="email"
                                className="register-input-field"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                        </div>

                        <div className="inputregister ">

                            <div className="ps-1">
                                <label htmlFor="mobile" className="input-label" >Mobile</label><br />
                                <input type="text"
                                    placeholder="Enter your mobile"
                                    id="mobile"
                                    className="register-input-field"
                                    value={mobile}
                                    onChange={(e) => {
                                        setMobile(e.target.value);
                                    }} />
                            </div>



                        </div>

                        <div className="p-1">
                            <label htmlFor="add" className="input-label">Address</label><br />
                            <input type="text"
                                placeholder="Refernce"
                                id="add"
                                className="register-input-field"
                                value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }} />
                        </div>

                        <div className="p-1">
                            <label htmlFor="ref" className="input-label">Reference</label><br />
                            <input type="text"
                                placeholder="Refernce"
                                id="ref"
                                className="register-input-field"
                                value={Reference}
                                onChange={(e) => {
                                    setReference(e.target.value);
                                }} />
                        </div>

                        <button type="button"
                            className="btn btn-info px-5 py-2 ms-1 mt-2 fs-5 "
                            onClick={RegisterUser}>
                            Register
                        </button>
                        <div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />



        </>
    )

}


export default Register;