import React from "react";
import "./Balance_Cards.css";
import { motion } from "framer-motion";
const Balance_Cards = (props) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: "0" }}
      initial={{ opacity: 0, y: "30" }}
      transition={{
        duration: 2,
        type: "spring",
        bounce: ".8",
      }}
      className="urcrypto_dashboard_wallets_cards_items"
    >
      <div className="urcrypto_dashboard_wallets_cards_items_container">
        <div className="urcrypto_dashboard_wallets_cards_items_header">
          <p> {props.heading} </p>
          {props.icon}
        </div>
        <div className="urcrypto_dashboard_wallets_cards_items_content">
          <span> {props.btcAmount} </span>
          <p> = {props.fiatAmount} </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Balance_Cards;
