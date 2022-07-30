import React from "react";
import "./Wallets_Crypto_Balance.css";
import crypto_table_data from "./Table_Data";
import Wallets_Crypto_Balance_List from "./Wallets_Crypto_Balance_List.jsx";
const crypto_table = crypto_table_data.map(
  ({heading,first_row,second_row,third_row,fourth_row,fifth_row,sixth_row,seventh_row,eigth_row,ninth_row,tenth_row,eleventh_row,twelveth_row,thirteenth_row,fourteenth_row,fifteenth_row,}) => {
    return (
      <Wallets_Crypto_Balance_List heading={heading} first_row={first_row} second_row={second_row} third_row={third_row} fourth_row={fourth_row} fifth_row={fifth_row} sixth_row={sixth_row} seventh_row={seventh_row} eigth_row={eigth_row} ninth_row={ninth_row} tenth_row={tenth_row} eleventh_row={eleventh_row} twelveth_row={twelveth_row} thirteenth_row={thirteenth_row} fourteenth_row={fourteenth_row} fifteenth_row={fifteenth_row}/>
    );
  }
)
const Wallets_Crypto_Balance = () => {
  return (
    <div className="urcrypto_wallets_crypto_balance">
   {crypto_table}
 
    
    </div>
  )
}
  
  

export default Wallets_Crypto_Balance;


