import React, { useEffect, useState } from "react";
import './Portfolio.css';
import Video from './videos/Portfolio-background.mp4';

function Portfolio() {
    const [houses, setHouses] = useState([]);

    // Get data from portfolio table
    useEffect(() => {
        fetch('http://localhost:8000/portfolio')
            .then(res => res.json())
            .then(data => setHouses(distributeHouses(sortHouses(data))))
            .catch(err => console.log(err));
    }, []);

    const sortHouses = (data) => {
        return data.sort((a, b) => b.price - a.price);
    }

    // Helper function to separate the data into 3 columns
    const distributeHouses = (data) => {
        const columns = [[], []]; 
        data.forEach((item, index) => {
            columns[index % 2].push(item); 
        });
        return columns;
    };

    // Helper function to display house data in each column
    const renderColumn = (columnData) => (
        <div className="column">
            {columnData.map(item => (
                <div key={item.id} className="item">
                    <div className="image-side">
                        <img src={`http://localhost:8000/portfolio/image/${item.id}`} height={350} width={450} alt={`Image ${item.id}`} />
                    </div>
                    <div className="text-side">
                        <div className="house-address">{item.address}</div>
                        <div className="family-size">{item.family} Family Home</div>
                        <div className="house-price">Sold For: ${item.price.toLocaleString()}</div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="portfolio">
            <video autoPlay loop muted className="portfolio-video">
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="portfolio-header">
                <div className="portfolio-title">Portfolio</div>
                <div className="portfolio-subheading">A Collection of John's Sold Homes</div>
            </div>
            <div className="portfolio-houses">
                {houses.map((columnData, index) => (
                    <div key={index} className="column">
                        {renderColumn(columnData)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
