import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        to="/actions"
        className={location.pathname === "/actions" ? "active" : ""}
      >
        Actions
      </Link>
      <Link
        to="/services"
        className={location.pathname === "/services" ? "active" : ""}
      >
        Services
      </Link>
      <Link
        to="/about"
        className={location.pathname === "/about" ? "active" : ""}
      >
        About
      </Link>
      <Link
        to="/contact"
        className={location.pathname === "/contact" ? "active" : ""}
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
