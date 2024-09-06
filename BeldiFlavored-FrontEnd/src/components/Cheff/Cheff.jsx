import React from "react";
import "./Cheff.css";

const Chef = ({
  name,
  role,
  photo,
  name2,
  role2,
  photo2,
  name3,
  role3,
  photo3,
  title,
  book,
}) => {
  return (
    <div className="total">
      <div className="title">
        <h2 className="chefs-title">{title}</h2>
      </div>
      <div className="chef-container">
        <div className="chef">
          <img src={photo} alt="Chef" className="chef__photo" />
          <p className="chef__role">{role}</p>
          <div className="title-line"></div>
          <p className="chef__name">{name}</p>
        </div>
        <hr className="divider" />
        <div className="chef2">
          <img src={photo2} alt="Chef" className="chef__photo2" />
          <p className="chef__role">{role2}</p>
          <div className="title-line"></div>

          <p className="chef__name">{name2}</p>
        </div>
        <div className="chef3">
          <img src={photo3} alt="Chef" className="chef__photo3" />
          <p className="chef__role">{role3}</p>
          <div className="title-line"></div>

          <p className="chef__name">{name3}</p>
        </div>
      </div>

      <div className="book">
        <h1 className="reservation">{book}</h1>
        <button className="book_button">Book Now</button>
      </div>
    </div>
  );
};

export default Chef;
