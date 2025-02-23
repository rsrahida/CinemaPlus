import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <p className="footer">
        &copy; {new Date().getFullYear()} Cinema Plus | All rights reserved
      </p>
    </div>
  );
};

export default Footer;
