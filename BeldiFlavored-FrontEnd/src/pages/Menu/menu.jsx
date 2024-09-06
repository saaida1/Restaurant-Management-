import React, { useState } from 'react';
import './menu.css';
import Section from '../../components/menu-components/section/Section';
import Order from '../../components/menu-components/order/Order';
import MenuNav from '../../components/menu-components/menuNav/MenuNav';

function Menu({handleClick}) {
    const [category, setCategory] = useState("All"); 

    return (
        <>
            <Section />
            <MenuNav setCategory={setCategory} /> 
            <Order category={category} handleClick={handleClick}/> 
        </>
    );
}

export default Menu;
