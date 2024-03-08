import React, { useState } from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar bg-info fixed-top" >
        <div className="container-fluid">
            <a className="navbar-brand " href="/"><strong>Chat-oons</strong>:- A bot chatting application</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header bg-info">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Chat-oons</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body bg-dark">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className="nav-link text-light"  aria-current="page" href="/">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="/">Chat</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light " aria-current="page" href="/">Chat History</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="/">Settings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="/">FAQ's</a>
                </li>

                <br /><br /><br /><br /><br /><br /><br /><br /><br />

                <li className="nav-item">
                <a className="nav-link text-light" href="/">Logout</a>
                </li>
              
                </ul>
             
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar