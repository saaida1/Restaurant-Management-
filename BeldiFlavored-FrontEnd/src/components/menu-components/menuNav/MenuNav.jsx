import React from "react";
import './MenuNav.css';

function MenuNav({ setCategory }) {
    const handleCategoryClick = (category) => {
        setCategory(category);
    };

    return (
        <div className='nav-menu'>
            <a onClick={() => handleCategoryClick("All")}>All</a>
            <a onClick={() => handleCategoryClick("Soup")}>Soup</a>
            <a onClick={() => handleCategoryClick("Desserts")}>Desserts</a>
            <a onClick={() => handleCategoryClick("Juices")}>Juices</a>
            <a onClick={() => handleCategoryClick("Kids-menu")}>Kids-menu</a>
            <a onClick={() => handleCategoryClick("Tagine")}>Tagine</a>
        </div>
    );
}

export default MenuNav;
