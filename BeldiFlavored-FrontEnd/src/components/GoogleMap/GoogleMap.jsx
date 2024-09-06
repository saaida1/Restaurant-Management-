import React from "react";
import "./GoogleMap.css";
const GoogleMap = () => {
  return (
    <div className="map-container">
      <h1>Visit Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.5411308065477!2d-8.023162426310014!3d31.646411974156443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef65ca3de9bb%3A0x3ea5cfd960dd861d!2sENSA%20MARRAKECH!5e0!3m2!1sfr!2sma!4v1713461627602!5m2!1sfr!2sma"
        width="900"
        height="300"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
