import React, { useState } from "react";
import "./Dashboard_Header.css";
import Avatar from '../../assets/Avatar.jpg'
import {
  UilCreateDashboard,
  UilSearchAlt,
  UilBell,
  UilAngleDown
} from "@iconscout/react-unicons";
const Dashboard_Header = ({setOpened}) => {

  return (
    <div className="urcrypto_dashboard_header">
    
      <div className="urcrypto_dashboard_header_container">
        <div className="urcrypto_dashboard_header_text_area">
          <h1> Welcome Zyhvar!</h1>
          <p>lets get started</p>
        </div>

        <div className="urcrypto_dashboard_header_actions">
          <form className="urcrypto_dashboard_header_search_form">
          <UilSearchAlt />
            <input type="text" placeholder="Search" />
          </form>

        
          <div className="urcrypto_dashboard_header_actions_avatar">
            <img src={Avatar} alt = 'https://www.freepik.com/psd/woman-illustration' />
            <button> <UilAngleDown/></button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Header;
