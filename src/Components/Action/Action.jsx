import React from "react";
import "./Action.css";
import { Link } from "react-router-dom";
import bitcoin from "../../assets/bitcoin.png";
import ethereum from "../../assets/ethereum.png";
import terra from "../../assets/terra.png";
const Action = () => {
  return (
    <div className="urcrypto_action">
      <div className="urcrypto_action_container">
        <div className="urcrypto_action_text_area">
        <div className="urcrypto_action_text_area_container">
        <h1>
            Join a new generation of <br /> investors
          </h1>
          <Link to="/Sign-up">Get Started</Link>
        </div>
         
        </div>
        <div className="urcrypto_action_image_area">
          <img src={bitcoin} alt="CTA img" />
          <img src={ethereum} alt="CTA img" />
          <img src={terra} alt="CTA img" />
        </div>
      </div>
    </div>
  );
};

export default Action;
