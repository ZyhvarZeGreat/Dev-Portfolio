import React from "react";

const Wallets_Balance_List_Action_Buttons = () => {
  const button_data = [
    {
      buttonItem: "Transfer",
    },
    {
      buttonItem: "Deposit",
    },
    {
      buttonItem: "Recieve",
    },
  ];
  return (
    <div className="urcrypto_dashboard_wallet_crypto_balance_list_action_buttons" style={{display: 'flex', width: '100%',flexDirection: 'row' , alignItems: 'center' ,justifyContent: 'space-between'}}>
      {button_data.map(({ buttonItem }) => (
        <button key={buttonItem} style={{ height: "2.5rem", width: "6rem",border:"none", borderRadius:".3rem", color: "white" ,backgroundColor:"hsla(241, 85%, 48%, 0.728)", fontFamily:" 'Inter',Arial,Helvetica,sans-serif" }}>
          {buttonItem}
        </button>
      ))}
    </div>
  );
};

export default Wallets_Balance_List_Action_Buttons;
