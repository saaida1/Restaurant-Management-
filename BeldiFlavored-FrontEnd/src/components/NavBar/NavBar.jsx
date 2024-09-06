// import React, { useState } from 'react'
// import './NavBar.css'
// import {assets} from '../../assets/assets'
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const NavBar = ({size}) => {
//   const[menu,setMenu] = useState("Home");
//   const navigate = useNavigate();

//   return (
//     <div className="navbar">
//       <Link to='/'> 
//       <img src={assets.lo} alt="logo" /> 
//       </Link>
//     <ul className="navbar-menu">
//         <Link to='/'>
//         <li onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>home</li>
//         </Link>
//         <Link to='/Menu'>
//         <li onClick={() => setMenu("Menu")} className={menu==="Menu"?"active":""}>menu</li>
//         </Link>
//         <Link to='/ReservationTable'>
//         <li onClick={() => setMenu("Tables")} className={menu==="Table"?"active":""}>reservation</li>
//         </Link>
//         <Link to='/About'>
//         <li onClick={() => setMenu("About")} className={menu==="About"?"active":""}>about</li>
//         </Link>

//         </ul>
//         <div className="navbar-right">
//             <div className="navbar-search-icon">
//                 <Link to='./Cart'>
//                   <img src={assets.basket_icon} alt="" /> 
//                 </Link>
//                 <div className="dot"><span className='nbr'>{size}</span></div>
//             </div>
//             <button onClick={() => navigate('/Sign')}>Sign In</button>


//         </div>
//     </div>
//   )
// }

// export default NavBar;





import React, { useState, useContext } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext"; // Adjust the path as necessary
const NavBar = ({ size }) => {
  const [menu, setMenu] = useState("Home");
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to the home page after logout
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.lo} alt="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/">
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            home
          </li>
        </Link>
        <Link to="/Menu">
          <li
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            menu
          </li>
        </Link>
        <Link to="/ReservationTable">
          <li
            onClick={() => setMenu("Tables")}
            className={menu === "Table" ? "active" : ""}
          >
            reservation
          </li>
          
        </Link>
        <Link to="/About">
          <li
            onClick={() => setMenu("About")}
            className={menu === "About" ? "active" : ""}
          >
            about
          </li>
        </Link>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="./Cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className="dot">
            <span className="nbr">{size}</span>
          </div>
        </div>
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/Sign">
            <button>Sign in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;