import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="urcrypto_navbar">
      <div className="urcrypto_navbar_logo">
        <img src={require("../../assets/Logo.png")} alt="Navbar Logo" />
      </div>

      <div className="urcrypto_navbar_links">
        <Link to="/">Home</Link>
        <Link to="/">Learn</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Support</Link>
      </div>

      <div className="urcrypto_navbar_cta">
        <Link to ="Sign_In">Sign in</Link>
        <Link to ="Signup">Get Started</Link>
      </div>
    </div>
  );
};

export default Navbar;
