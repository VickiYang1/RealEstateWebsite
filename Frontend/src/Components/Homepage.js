import React from "react";
import './Homepage.css';

function Homepage() {
    return (
        <div>
            <div className="Homepage-container">
                <div className="right-column"></div>
                    <img className="profile_photo" src={require("./images/profile_photo.jpg")} height={400} width={400} />
                <div className="left-column">
                    <div className="locations"> Brooklyn & Staten Island</div>
                    <p className="about-me">As a dedicated real estate agent, I am committed to helping clients find their ideal home. 
                        Whether you're buying, selling, or simply exploring the market, I am here to provide my support and expertise. 
                        With deep knowledge of the local area and a passion for helping others, I can guide you through the intricacies 
                        of the real estate process. Leveraging top listings, a vast network, effective marketing strategies, and advanced 
                        technology, I strive to make your real estate journey seamless and enjoyable. I look forward to assisting you—feel 
                        free to reach out anytime!
                    </p>
                </div>
            </div>

            <div className="page-break">
                <img src={require("./images/Name-Logo-Black.png")} height={150} width={150} />
                <br />
                <div className="text-content">
                    <p>Objective Advice & Guidance</p>
                    <p>Top Negotiation Skills to Get the Best Deal</p>
                    <p>Familiarity With Our Local Neighborhoods</p>
                </div>
            </div>

            <div className="Note">
                <p>"I'm dedicated to your success. With a keen ability to decipher needs, I offer straightforward advice and precise home 
                    pricing insights. Whether you're buying or selling, maximizing profits is my goal. I cater to all budgets and consider 
                    it a privilege to welcome clients into my family. I'm excited to meet you and begin our journey together."</p>
            </div>
        </div>
    );
}

export default Homepage;
