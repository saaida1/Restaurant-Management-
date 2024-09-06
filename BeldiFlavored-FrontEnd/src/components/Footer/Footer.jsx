import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="" />
            <p>"One cannot think well, love well, sleep well, <br /> if one has not dined well." ~ Virginia Woolf</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />

            </div>
        </div>

        <div className="footer-content-center">
            <h2>Restaurant</h2>
            <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/Menu'><li>Menu</li></Link>
              <Link to='/ReservationTable'><li>Reservation</li></Link>
              <Link to='/About'><li>About us</li></Link>
              
            </ul>

        </div>

        <div className="footer-content-right">
            <h2>Contact</h2>
            <ul>
                <li>Subscription FAQS</li>
                <li>BeldiFlavored@gmail.com</li>
                <li>+212 700775180</li>

            </ul>
        </div>

        

      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Beldi Flavored - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
