import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow-sm bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4" to="#"><span className='logo-name'>CloundMania</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-auto ">
              <li className="nav-item">
                <Link className="nav-link active nav-hover-1 px-4 fs-5  text-light" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active ms-4 nav-hover-1  fs-5 px-4 text-light" to="#">AboutUs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-4 nav-hover-1  fs-5 px-4 text-light" to="#">ContactUs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-4 nav-hover-1 fs-5 px-4 text-light" to="#">Services</Link>
              </li>


            </ul>

            <button className="btn btn-outline-info  ms-5 px-5">
                <Link className="nav-link  active " to="/register">Register</Link>
              </button><br /><br />


          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar