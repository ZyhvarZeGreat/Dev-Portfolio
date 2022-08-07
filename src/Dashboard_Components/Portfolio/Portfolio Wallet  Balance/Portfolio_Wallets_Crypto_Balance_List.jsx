import React from "react";
import "./Portfolio_Wallets_Crypto_Balance_List.css";
const Portfolio_Wallets_crypto_Balance_List = (props) => {
  return (
    <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column">
    
      <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_header">
        <h3> {props.heading} </h3>
      </div>
      <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_content">
        <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_content_item">
  <p>        {props.first_row}</p>
        </div>
        <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_content_item">
          <p> {props.second_row} </p>
        </div>
        <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_content_item">
          <p> {props.third_row} </p>
        </div>
        <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_content_item">
          <p> {props.fourth_row} </p>
        </div>
        <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_content_item">
          <p> {props.fifth_row} </p>
        </div>
        <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_content_item">
          <p> {props.sixth_row} </p>
        </div>
        <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_content_item">
          <p> {props.seventh_row} </p>
        </div>
        <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_content_item">
          <p> {props.eigth_row} </p>
        </div>
       
        <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_content_item">
          <p> {props.ninth_row} </p>
        </div>
       
        <div className="urcrypto_dashboard_portfolio_wallet_crypto_balance_list_column_content_item">
          <p> {props.tenth_row} </p>
        </div>
       
      </div>
    </div>
  );
};

export default Portfolio_Wallets_crypto_Balance_List;
