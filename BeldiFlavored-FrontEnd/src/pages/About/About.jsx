import React from "react";
import "./About.css";
import HeaderAbout from "../../components/HeaderAbout/HeaderAbout";
import Statistics from "../../components/Statistics/Statistics";
import History from "../../components/History/History";
import hiss from "../../assets/ramadan-celebration-with-delicious-food.jpg";
import hiss2 from "../../assets/digital-art-ramadan-celebration.jpg";
import chef1Photo from "../../assets/chomicha.jpg";
import Chef from "../../components/Cheff/Cheff";
import chef2Photo from "../../assets/moha.jpg";
import chef3Photo from "../../assets/Meriem.jpg";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const About = () => {
  return (
    <div>
      <HeaderAbout />
      <Statistics />
      <History
        title="Our History"
        text="Founded in 1987, Beldi Flavored is a cherished part of the community, 
        offering authentic Moroccan cuisine that reflects centuries of tradition. 
        Inspired by Moroccan hospitality, our restaurant provides a taste of Marrakech's
        bustling streets and the Sahara's serene oases. Each dish is a testament to our 
        dedication to preserving Morocco's rich culinary heritage."
        his={hiss}
        title2="Our Food"
        text2="At Beldi Flavored , we take pride in serving exquisite Moroccan cuisine 
        crafted with the freshest ingredients. From aromatic tagines to succulent kebabs,
        each dish tells a story of Morocco's diverse culinary influences. Join us on a journey 
        through the heart of Morocco with every bite 
                                                                  "
        his2={hiss2}
      />
      <Chef
        title="Top Chefs "
        name="Chef Chomicha"
        role="Pastry Chef"
        photo={chef1Photo}
        name2="Chef Moha  "
        role2="Head Chef"
        photo2={chef2Photo}
        name3="Chef Merieme "
        role3="Sous chef"
        photo3={chef3Photo}
        book="Make Your Reservation Today!"
      />
      <GoogleMap />
    </div>
  );
};

export default About;
