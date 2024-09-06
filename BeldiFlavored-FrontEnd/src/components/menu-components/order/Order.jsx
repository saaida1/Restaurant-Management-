import React, { useState, useEffect } from 'react';
import './order.css';
import axios from 'axios';

function Order({ category, handleClick }) {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        fetchFoodItems();
    }, []);

    const fetchFoodItems = async () => {
        try {
            const response = await axios.get('http://localhost:8081/menu/items');
            setFoodItems(response.data);
        } catch (error) {
            console.error('Error fetching food items:', error);
        }
    };

    const filteredFoodItems = category === "All" ? foodItems : foodItems.filter(item => item.category === category);

    return (
        <div className="full-card">
            {filteredFoodItems.map(item => (
                <div key={item.id} className='card'>
                    <img src={`http://localhost:8081/${item.cover}`} alt={item.name} />
                    <div className="card-body">
                        <div className="title">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                        <div className="price-add">
                            <span>{item.price}DH</span>
                            <button className='addBtn' onClick={() => handleClick(item)}> + Add</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Order;