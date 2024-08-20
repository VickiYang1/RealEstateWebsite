import React from "react";
import { Link } from 'react-router-dom';
import './SmallNavbar.css';

function SmallNavbar(){
    return(
        <div>
            <nav className="small-navbar">
                <div className="small-navbar-container">
                    <img src={require("./images/Name-Logo-Black.png")} height={100} width={100} alt="Logo" />
                    <span className="small-navbar-name"> John Doe</span>
                    <Link to="/" className="small-navbar-links">Home</Link>
                    <Link to="Portfolio" className="small-navbar-links">Portfolio</Link>
                    <Link to="/Listings" className="small-navbar-links">Listings</Link>
                    <Link to="/Contact" className="small-navbar-links">Contact</Link>
                    <Link to="/Login" className="small-navbar-login">Login</Link>
                </div>
            </nav>
        </div>
    )
}

export default SmallNavbar;
