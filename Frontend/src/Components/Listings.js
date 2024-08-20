import React, { useState, useEffect } from "react";
import './Listings.css';

function Listings() {
    const [listings, setListings] = useState([]); 
    // Fetch data from the server
    useEffect(() => {
        fetch('http://localhost:8000/listings')
            .then(res => res.json())
            .then(data => setListings(data)) 
            .catch(err => console.log(err));
    }, []);

    const renderHouse = (listing) => (
        <div className="listing-title" key={listing.id}>
            <div> FOR SALE</div>
            <button className="requesting"> REQUEST SHOWING</button>
            <hr />
        </div>
    );

    return (
        <div className="listing-container">
            {listings.map(listing => renderHouse(listing))} 
        </div>
    );
}

export default Listings;
