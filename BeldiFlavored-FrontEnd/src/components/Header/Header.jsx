import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Enjoy the best food experience!</h2>
        <p>
        Welcome to <i>Beldi Flavored</i> , where culinary excellence meets unforgettable dining experiences. 
        Nestled in the heart of Marrakech, our restaurant invites you to indulge in the flavors of Moroccan cuisine. 
        From savory classics to innovative creations, each dish is crafted with passion and precision to delight your palate.
        </p>
        <button onClick={() => navigate('/Menu')}>Explore Our Menu</button>
      </div>
    </div>
  )
}

export default Header
