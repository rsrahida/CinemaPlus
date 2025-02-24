import React from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import image from "../../assets/images/contact.jpeg";

const Contact = () => {
  return (
    <div className="contact">
      <img src={image} className="image" />
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-info">
          <p>
            <FaPhone className="icon" /> +994 12 499 89 88
          </p>
          <p>
            <FaEnvelope className="icon" /> info@cinemastercard.com
          </p>
          <p>
            <FaMapMarkerAlt className="icon" /> Bakı, Azərbaycan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
