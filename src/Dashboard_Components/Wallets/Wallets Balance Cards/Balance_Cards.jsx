import React from 'react'
import './Balance_Cards.css'
const Balance_Cards = (props) => {
  return (
    <div className="urcrypto_dashboard_wallets_cards_items">

    <div className="urcrypto_dashboard_wallets_cards_items_container">
    <div className='urcrypto_dashboard_wallets_cards_items_header'>
   <p> {props.heading} </p>
    {props.icon}
   </div>
   <div className='urcrypto_dashboard_wallets_cards_items_content'>
    <span> {props.btcAmount}  </span>
    <p> = {props.fiatAmount}   </p>
   </div>
    </div>

    </div>
  )
}

export default Balance_Cards