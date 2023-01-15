import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../logo.png"
import { useSelector } from 'react-redux';

const Navbar = () => {

 
  const {user} =useSelector((state) => state.auth);


  return (
    <div>
      <nav className="navbar  has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <img 
            src={logo}
            width="112" 
            height="28" 
            alt="logo"
            />
          </NavLink>

          <a href="!#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          {/*   <div className="navbar-start">
                  <a className="navbar-item">
                    Home
                  </a>
            
                  <a className="navbar-item">
                    Documentation
                  </a>
            
                  {<div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                      More
                    </a>
            
                    <div className="navbar-dropdown">
                      <a className="navbar-item">
                        About
                      </a>
                      <a className="navbar-item">
                        Jobs
                      </a>
                      <a className="navbar-item">
                        Contact
                      </a>
                      <hr className="navbar-divider"/>
                      <a className="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div> */}

          <div className="navbar-end">
            <a div className="navbar-item">
            {user && user.name +' '+ user.surname+' (' + user.role + ')'}

              </a>
            </div>

          </div>
      </nav>
    </div>
  );
};

export default Navbar;