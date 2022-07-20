import React from 'react'
import Balance_Cards from './Balance_Cards'
import './Wallets_Balance_Cards.css'
import Wallets_Balance_Cards_Data from './Wallets_Balance_Cards_Data'

const Wallets_Balance_Cards = () => {
  const wallets_balance_cards_items = Wallets_Balance_Cards_Data.map (({index,heading,btcAmount,fiatAmount,icon}) =>{
    return (
      <Balance_Cards key={index} heading={heading} btcAmount={btcAmount} fiatAmount={fiatAmount} icon={icon} />
    )
  }) 


  return (
    <div className = "urcrypto_dashboard_wallets_balance_cards">
    <div className='urcrypto_dashboard_wallets_balance_cards_container'>
    {wallets_balance_cards_items}
    </div>
      
    </div>
  )
}

export default Wallets_Balance_Cards