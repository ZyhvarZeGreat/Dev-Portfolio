import React from "react";
import "./Crypto_Convert.css";
import { UilEllipsisV, UilAngleDown } from "@iconscout/react-unicons";

const Crypto_Convert = () => {
  return (
    <div className="urcrypto_dashboard_portfolio_crypto_convert">
      <div className="urcrypto_dashboard_portfolio_crypto_convert_container">
        <div className="urcrypto_dashboard_portfolio_crypto_convert_header">
          <h4>Convert Cryptocurrency</h4>
          <UilEllipsisV />
        </div>

        <div className="urcrypto_dashboard_portfolio_crypto_convert_content">
          <form>
            <div className="urcrypto_dashboard_portfolio_crypto_convert_content_input">
              <div>
                <legend>Spend</legend>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="10.00 - 3000"
                />
              </div>
              <div className="urcrypto_dashboard_portfolio_crypto_convert_content_dropdown">
                <img src="" alt="" />
                <p>BTC</p>
                <UilAngleDown />
              </div>
            </div>

            <div className="urcrypto_dashboard_portfolio_crypto_convert_content_input">
              <div>
                <legend>Recieve</legend>
                <input type="text" inputMode="numeric" placeholder="0.00" />
              </div>
              <div className="urcrypto_dashboard_portfolio_crypto_convert_content_dropdown">
                <img src="" alt="" />
                <p>XRP</p>
                <UilAngleDown />
              </div>
            </div>
          </form>
        </div>

        <div className="urcrypto_dashboard_portfolio_crypto_convert_content_submit_button">
          <button type="submit">Convert Your Crypto</button>
        </div>
      </div>
    </div>
  );
};

export default Crypto_Convert;
