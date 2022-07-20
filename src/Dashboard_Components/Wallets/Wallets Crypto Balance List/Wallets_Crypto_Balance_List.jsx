import React from "react";
import './Wallets_Crypto_Balance_List.css'
const Wallets_crypto_Balance_List = (props) => {
  return (

<div className="urcrypto_dashboard_wallet_crypto_balance_list_column">
<div className="urcrypto_dashboard_wallet_crypto_balance_list_column_header">
<h3> {props.heading} </h3>
</div>
<div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content">
<div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item"> <p> {props.first_row} </p> </div>
<div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">   <p> {props.second_row}   </p> </div>
<div className="urcrypto_dashboard_wallet_crypto_balance_list_column_content_item">   <p> {props.third_row} </p> </div>

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
