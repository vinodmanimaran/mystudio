import React from "react";
import "./Map.css";

const Map: React.FC = () => {

  const latitude = 13.082680990785673;
const longitude = 80.21369681535574;
const zoom = 15;

const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9577646596314!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e3c5cb9f59%3A0x989d0ed4ee04b849!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1627081265553!5m2!1sen!2sus&q=Chennai`;
  return (
    <div className="map-card mx-[80px] rounded-lg">
      <iframe
      src={src}
        width="1300"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        title="Google Maps"
        className="backdrop-blur-lg rounded-lg"
      ></iframe>
    </div>
  );
};

export default Map;
