import React, { useState } from "react";
import './Edit.css';
import EditPortfolio from "./EditPortfolio";
import EditListing from "./EditListing";

function Edit({setLoggedIn}) {
    const [activeSection, setActiveSection] = useState('portfolio'); 

    const handleClick = (action) => {
        if (action === 'logout') {
            setLoggedIn(false);
            alert("Successfully Logged Out")
        } else if (action === 'portfolio' || action === 'listings') {
            setActiveSection(action);
        }else{
            alert("All Edits have been Saved")
        }
    };

    return (
        <div className="Edit-Page">
            <div className="sidebar">
                <div className="Edit-container">
                    <div className="Title">Edit Page</div>
                    <img src={require("./images/Edit.png")} height={40} width={40} alt="Logo" />
                </div>

                <a className={`subHeading ${activeSection === 'portfolio' ? 'active' : ''}`}
                    onClick={() => handleClick('portfolio')}>
                    Portfolio
                </a>

                <a className={`subHeading ${activeSection === 'listings' ? 'active' : ''}`}
                    onClick={() => handleClick('listings')}>
                    Listings
                </a>
                <button className="subHeading button" 
                    onClick={() => handleClick('logout')}>Save and Logout</button>
            </div>
            <div className="Edit-Main-Content">
                {activeSection === 'portfolio' && <EditPortfolio />}
                {activeSection === 'listings' && <EditListing />}
            </div>
        </div>
    );
}

export default Edit;
