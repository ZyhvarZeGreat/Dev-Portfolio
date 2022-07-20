import React from "react";
import table_data from "./Table_Data";
import './Wallets_Fiat_Balance.css'
import Wallets_Fiat_Balance_List from './Wallets_Fiat_Balance_List'
const Wallets_Fiat_Balance = () => {
  const table_items = table_data.map (({heading,first_row,second_row,third_row}) => {
    return(
      <Wallets_Fiat_Balance_List key = {heading} heading={heading} first_row={first_row} second_row={second_row} third_row={third_row}   />
    )
  })
  return (

<div className="urcrypto_dashboard_wallet_fiat_balance_list">
<div className="urcrypto_dashboard_wallet_fiat_balance_list_container">
 {table_items}
</div>
</div>

  );


};

export default Wallets_Fiat_Balance;
