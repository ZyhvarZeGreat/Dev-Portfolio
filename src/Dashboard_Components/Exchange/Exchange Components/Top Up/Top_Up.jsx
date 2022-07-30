import React from "react";
import { UilAngleDown, UilEllipsisV } from "@iconscout/react-unicons";
import mastercard from '../../../../assets/mastercard.svg'
import visa from '../../../../assets/Visa.svg'
import paypal from '../../../../assets/paypal.svg'
import "./Top_Up.css";
const Top_Up = () => {
  return (
    <div className="urcrypto_dashboard_portfolio_top_up">
      <div className="urcrypto_dashboard_portfolio_top_up_container">
        <div className="urcrypto_dashboard_portfolio_top_up_header">
          <h4>Top Up Balance</h4>
          <UilEllipsisV />
        </div>
        <form> 
        <div className="urcrypto_dashboard_portfolio_top_up_content">
          <div className="urcrypto_dashboard_portfolio_top_up_content_input">
            <div className="urcrypto_dashboard_portfolio_top_up_content_input-text">
              <legend>Spend</legend>
              <input
                type="text"
                inputMode="numeric"
                placeholder="10.00 - 3000"
              />
            </div>
            <div className="urcrypto_dashboard_portfolio_top_up_content_dropdown">
              <img src="" alt="" />
              <p>BTC</p>
              <UilAngleDown />
            </div>
          </div>
          <div className="urcrypto_dashboard_portfolio_top_up_content_card_select">
  <div className="urcrypto_dashboard_portfolio_top_up_content_card_select_image">
    <img src={mastercard} alt="mastercard"/>
  </div>
  <div className="urcrypto_dashboard_portfolio_top_up_content_card_select_image">
    <img src={visa} alt="mastercard"/>
  </div>
  <div className="urcrypto_dashboard_portfolio_top_up_content_card_select_image">
    <img src={paypal} alt="mastercard"/>
  </div>
          </div>
        </div>
</form>
        <div className="urcrypto_dashboard_portfolio_top_up_submit_button">
<button type="submit" className="urcrypto_dashboard_portfolio_top_up_submit_button-btn">
  Top Up Your Balance
</button>
        </div>
      </div>
    </div>
  );
};

export default Top_Up;
