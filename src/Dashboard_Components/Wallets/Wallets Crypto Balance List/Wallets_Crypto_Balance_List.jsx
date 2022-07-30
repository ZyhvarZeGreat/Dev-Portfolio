import React from "react";
import "./Wallets_Crypto_Balance_List.css";
import Crypto_desc from "./Crypto_desc";
const Wallets_crypto_Balance_List = (props) => {
  const desc_data = [];
  for (let i = 0; i < 16; i++) {
    desc_data.push({
      crypto_desc: <Crypto_desc />,
    });
  }
  return (
    <div className="urcrypto_dashboard_wallet_crypto_balance_list_column">
      <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_header">
        <h3> {props.heading} </h3>
      </div>
      <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content">
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
  <p>        {props.first_row}</p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.second_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.third_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.fourth_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.fifth_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.sixth_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.seventh_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.eigth_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.ninth_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.tenth_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.eleventh_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.twelveth_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.thirteenth_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.fourteenth_row} </p>
        </div>
        <div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">
          <p> {props.fifteenth_row} </p>
        </div>
      </div>
    </div>

    //     <div className="urcrypto_dashboard_wallet_crypto_balance_list_wrapper">

    // <div className="urcrypto_dashboard_wallet_crypto_balance_list_content">
    // <div className="urcrypto_dashboard_wallet_crypto_balance_list_content_items">
    //   <div className="urcrypto_dashboard_wallet_crypto_balance_list_content_items_description">
    //   <p> {props.icon} </p>
    //   <p> {props.cryptoCurrencySymbol} </p>
    //   <p> {props.cryptoCurrency}  </p>
    //   </div>

    //   <div className="urcrypto_dashboard_wallet_crypto_balance_list_content_items_data">
    //   <p> {props.totalBalance} </p>
    //   <p> {props.available}  </p>
    //   <p> {props.inOrder} </p>
    //   <p> {props.BTCValue} </p>
    //   <p> {props.Action} </p>
    //   </div>
    //   <div className="urcrypto_dashboard_wallet_crypto_balance_list_content_items_buttons">
    //   {props.button}
    //   </div>
    // </div>
    // </div>
    //     </div>
  );
};

export default Wallets_crypto_Balance_List;
