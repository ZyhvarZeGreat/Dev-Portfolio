import React, { useState } from "react";
import "./Dashboard_Header.css";
import Avatar from "../../assets/Avatar.jpg";
import Dropdown from "./Dropdown";
import {AnimatePresence, motion} from 'framer-motion'
import { UilSearchAlt, UilBell, UilAngleDown, UilUserCircle,UilBitcoinCircle,UilMoneyWithdraw,UilMoneyInsert   } from "@iconscout/react-unicons";
const Dashboard_Header = () => {
  let dropdown_data = [
    {
      id: "1",
      itemName: "My Profile",
      icon: <UilUserCircle/>,
    },
    {
      id: "2",
      itemName: "Account",
      icon: <UilBitcoinCircle/>,
    },
    {
      id: "3",
      itemName: "Withdraw",
      icon: <UilMoneyInsert/>,
    },
    {
      id: "4",
      itemName: "Deposit",
      icon: <UilMoneyWithdraw/>,
    },
  ];
  const [opened, setOpened] = useState(false);
  const dropdown_items = dropdown_data.map(({ id, itemName, icon }) => {
    return (
 <Dropdown key={id} itemName={itemName} icon={icon}/>
    );
  });
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

          <UilBell />
          <div className="urcrypto_dashboard_header_actions_avatar">
            <img
              src={Avatar}
              alt="https://www.freepik.com/psd/woman-illustration"
            />
            <button onClick={() => setOpened(!opened)}>
            <UilAngleDown  />
            </button>
            {opened && <AnimatePresence>
              <motion.div initial={{opacity:0,y:-50}} animate ={{ opacity:1,y:0 }} exit={{opacity:0,y:-50}} className="urcrypto_dashboard_header_actions_dropdown">
   {dropdown_items}
            </motion.div>
            </AnimatePresence>  }
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Dashboard_Header;
