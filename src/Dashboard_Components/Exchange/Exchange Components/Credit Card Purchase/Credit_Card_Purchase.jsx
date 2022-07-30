import React from "react";
import "./Credit_Card_Purchase.css";
import mastercard from "../../../../assets/mastercard.svg";
import { UilEllipsisV, UilAngleDown } from "@iconscout/react-unicons";

const Credit_Card_Purchase = () => {
  return (
    <div className="urcrypto_dashboard_exchange_credit_card_purchase">
      <div className="urcrypto_dashboard_exchange_credit_card_purchase_container">
        <div className="urcrypto_dashboard_exchange_credit_card_purchase_header">
          <h4> Buy With Your Credit/Debit Card</h4>
          <UilEllipsisV />
        </div>

        <div className="urcrypto_dashboard_exchange_credit_card_purchase_content">
          <form className="urcrypto_dashboard_exchange_credit_card_purchase_content_crypto_selection">
            <form className="urcrypto_dashboard_exchange_credit_card_purchase_content_crypto_selection_fiat_amount">
              <form className="urcrypto_dashboard_exchange_credit_card_purchase_content_crypto_selection_fiat_amount_input">
                <legend>Amount in USD</legend>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="10.00 - 10000"
                />
              </form>
              <div className="urcrypto_dashboard_exchange_credit_card_purchase_content_selection_dropdown">
                <img src="" alt="" />
                <p>USD</p>
                <UilAngleDown />
              </div>
            </form>

            <form className="urcrypto_dashboard_exchange_credit_card_purchase_content_crypto_selection_crypto_amount">
              <form>
                <legend>Recieve</legend>
                <input type="text" inputMode="numeric" placeholder="0.00" />
              </form>

              <div className="urcrypto_dashboard_exchange_credit_card_purchase_content_selection_dropdown">
                <img src="" alt="" />
                <p>BTC</p>
                <UilAngleDown />
              </div>
            </form>

            <div className="urcrypto_dashboard_exchange_credit_card_purchase_content_crypto_selection_price">
              <div>
                <legend>Price</legend>
                <p> 1 BTC = $19,342 </p>
              </div>
            </div>
          </form>

          <form className="urcrypto_dashboard_exchange_credit_card_purchase_content_card_selection">
            <form className="urcrypto_dashboard_exchange_credit_card_purchase_content_card_selection_name">
              <legend> Name</legend>
              <input type="text" placeholder="Able Comrade" />
            </form>
            <form className="urcrypto_dashboard_exchange_credit_card_purchase_content_card_selection_card_number">
              <div className="urcrypto_dashboard_exchange_credit_card_purchase_content_card_selection_card_number_text">
                <legend>Card Number</legend>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="4431 1121 1212 1091"
                />
              </div>

              <div className="urcrypto_dashboard_exchange_credit_card_purchase_content_card_selection_card_number_img">
                <img src={mastercard} />
              </div>
            </form>

            <div className="urcrypto_dashboard_exchange_credit_card_purchase_content_card_selection_security">
              <form className="urcrypto_dashboard_exchange_credit_card_purchase_content_card_selection_cvv">
                <legend> CVC</legend>
                <input type="text" placeholder="123" inputMode="numeric" />
              </form>

              <div className="urcrypto_dashboard_exchange_credit_card_purchase_expiration">
                <legend>Expiration Date</legend>

                <div className="urcrypto_dashboard_exchange_credit_card_purchase_month_expiration_content">
                  <div className="urcrypto_dashboard_exchange_credit_card_purchase_month_expiration">
                    <select value="01" name="01">
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div className="urcrypto_dashboard_exchange_credit_card_purchase_year_expiration">
                    <select value="01" name="01">
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2024</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="urcrypto_dashboard_exchange_credit_card_purchase_submit_button">
          <button
            type="submit"
            className="urcrypto_dashboard_exchange_credit_card_purchase_submit_button-btn"
          >
            Buy Cryptocurrency
          </button>
        </div>
      </div>
    </div>
  );
};

export default Credit_Card_Purchase;
