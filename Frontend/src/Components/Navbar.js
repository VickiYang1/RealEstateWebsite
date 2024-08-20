import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({loggedIn}){
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <img src={require("./images/Name-Logo.png")} height={150} width={150} alt="Logo" />
                    <span className="navbar-name"> John Doe</span>
                    <Link to="/" className="navbar-links">Home</Link>
                    <Link to="Portfolio" className="navbar-links">Portfolio</Link>
                    <Link to="/Listings" className="navbar-links">Listings</Link>
                    <Link to="/Contact" className="navbar-links">Contact</Link>
                    <Link to="/Login" className="navbar-login">Login</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
