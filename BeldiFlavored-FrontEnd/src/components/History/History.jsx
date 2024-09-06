import React from "react";
import "./History.css";

const History = ({ title, text, his, title2, text2, his2 }) => {
  return (
    <div className="history-container">
      <div className="text-with-photo">
        <div className="text-with-photo__content">
          <h1 className="text-with-photo__title">{title}</h1>
          <p className="text-with-photo__text">{text}</p>
        </div>
        <img src={his} alt="Photo" className="text-with-photo__image" />
      </div>
      <div className="text-with-photo2">
        <img src={his2} alt="Photo" className="text-with-photo__image2" />
        <div className="text-with-photo__content2">
          <h1 className="text-with-photo__title2">{title2}</h1>
          <p className="text-with-photo__text2">{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default History;
