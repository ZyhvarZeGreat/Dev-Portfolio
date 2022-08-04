import React from "react";
import "./Portfolio_Wallet_Balance.css";
import crypto_table_data from "./Table_Data";
import Portfolio_Wallets_Crypto_Balance_List from "./Portfolio_Wallets_Crypto_Balance_List";
const portfolio_wallet_items = crypto_table_data.map(({heading,first_row,second_row,third_row,fourth_row,fifth_row,sixth_row,seventh_row,eighth_row,ninth_row,tenth_row})  => {
  return(
    <Portfolio_Wallets_Crypto_Balance_List heading = {heading} first_row = {first_row} second_row = {second_row} third_row = {third_row} fourth_row = {fourth_row} fifth_row = {fifth_row} sixth_row = {sixth_row}                   />
  )
})
const Portfolio_Wallet_Balance = () => {
  return <div className="urcrypto_dashboard_portfolio_wallet_balance">
    {portfolio_wallet_items}
  </div>;
};

export default Portfolio_Wallet_Balance;
