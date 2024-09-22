import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (

      <nav className="navbar navbar-expand-lg border-bottom " style={{backgroundColor:"white"}}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg" alt="logo" style={{width:"30%"}}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item p-2" style={{fontSize:"18px", fontWeight:"500"}}>
                <Link className="nav-link text-bold" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item p-2 " style={{fontSize:"18px", fontWeight:"500"}}>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item  p-2" style={{fontSize:"18px", fontWeight:"500"}}>
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>

              <li className="nav-item  p-2" style={{fontSize:"18px",fontWeight:"500"}}>
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item  p-2" style={{fontSize:"18px", fontWeight:"500"}}>
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>

              <li className="nav-item  p-2" style={{fontSize:"18px", }}>
                <Link className="nav-link" to="">
                    <i class="fa-solid fa-bars"></i>
                </Link>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
