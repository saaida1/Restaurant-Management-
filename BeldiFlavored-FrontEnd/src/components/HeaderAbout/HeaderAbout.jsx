import React from "react";
import "./HeaderAbout.css";
import headerabout from "../../assets/headerabout.jpg";

const HeaderAbout = () => {
  return (
    <div className="header-about">
      <div className="header-image-container">
        <div className="header-image-text">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="header-content">
        <h1>A Taste of Morocco</h1>
        <div className="title-line"></div>
        <br />
        <br />

        <p>
          Indulge in the essence of Morocco at Beldi Flavored , where every dish
          embodies the rich heritage and flavors of Moroccan cuisine. Join us
          for an unforgettable culinary journey through the heart of Marrakech,
          where tradition meets innovation in every bite. Welcome to Beldi
          Flavored , where the magic of Morocco awaits.
        </p>
      </div>
    </div>
  );
};

export default HeaderAbout;
