import React, { useEffect, useState } from "react";
import './EditPortfolio.css';

function EditPortfolio(){
    const [houses, setHouses] = useState([]);

    const deleteHouse = (id) => {
        fetch(`http://localhost:8000/portfolio/${id}`, {  
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            setHouses(prevHouses => {
                const updatedHouses = prevHouses.map(column => 
                    column.filter(item => item.id !== id)
                );
                return updatedHouses;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
    
    // Delete data from table
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this property?")) {
            deleteHouse(id);
        }
    };
    
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
                        <img src={`http://localhost:8000/portfolio/image/${item.id}`} height={150} width={240} alt={`Image ${item.id}`} />
                    </div>
                    <div className="text-side">
                        <div className="house-address">{item.address}</div>
                        <div className="family-size">{item.family} Family Home</div>
                        <div className="house-price">Sold For: ${item.price.toLocaleString()}</div>
                        <button className="edit-text" onClick={() => handleDelete(item.id)}>
                            <img src={require("./images/Edit-red.png")} height={30} width={30} />
                        </button>
                        <button className="delete" onClick={() => handleDelete(item.id)}>
                            <img src={require("./images/trash.png")} height={30} width={30} />
                        </button>
                    </div>
                    
                </div>
            ))}
        </div>
    );

    return(
        <div>
            <div className="title-container">
                <div className="title">EDIT PORTFOLIO </div>
                <img src={require("./images/Edit-black.png")} height={40} width={40} alt="Logo" />
            </div>
            <hr/>
            <button className="create-property"> 
                <img src={require("./images/house.png")} height={30} width={30}/>
                Create New Property
            </button>
            <div className="houses">
                {houses.map((columnData, index) => (
                        <div key={index} className="column">
                            {renderColumn(columnData)}
                        </div>
                ))}
            </div>
        </div>
    )
}

export default EditPortfolio;
