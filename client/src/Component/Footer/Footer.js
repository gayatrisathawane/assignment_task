import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-bg text-white text-center text-lg-start">
   
    <div className=" p-4">
     
      <div className="row">
       
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase text-info fs-4">MLM</h5><br/>
  
          <p className='fs-5'>
          A hostel is a lower-priced inn of sorts that offers basic, shared accommodations. Typically, a hostel features a large room with separate beds, a shared bathroom, and a communal kitchen. Some hostels have private rooms, but the lower-cost ones generally offer bunk beds
          </p>
        </div>
      
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase  text-info fs-4">Quick Links</h5><br/>
  
          <ul className="list-unstyled mb-0">
            <li>
              <a href="/" className="text-white text-decoration-none fs-5">Home</a>
            </li>
            <li>
              <a href="#!" className="text-white text-decoration-none fs-5">ContactUs</a>
            </li>
            <li>
              <a href="#!" className="text-white text-decoration-none fs-5">About us</a>
            </li>
            <li>
              <a href="#!" className="text-white text-decoration-none fs-5">Services</a>
            </li>
            <li>
              <a href="/register" className="text-white text-decoration-none fs-5">Register</a>
            </li>
          </ul>
        </div>
       
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase text-info mb-0 fs-4">Contact Us </h5><br/>
  
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white text-decoration-none fs-5">Gmail 📧</a>
            </li>
            <li>
              <a href='tel:0000000' className="text-white text-decoration-none fs-5">call 📞</a>
            </li>
            <li>
              <a href="#!" className="text-white text-decoration-none fs-5">Facebook</a>
            </li>
            <li>
              <a href="#!" className="text-white text-decoration-none fs-5">  Instagram</a>
            </li>
          </ul>
        </div>
      
      </div>
     
    </div>
  
    <div className="text-center p-3 copywrite" >
      © 2024 Copyright:
      <a className="text-white text-decoration-none" href="https://mdbootstrap.com/" >mlm.com</a>
    </div>
  
  </footer>
  )
}

export default Footer