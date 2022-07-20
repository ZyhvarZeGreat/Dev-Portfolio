import React from 'react'
import './Wallets.css'
import { Wallets_Fiat_Balance_List,Wallets_Balance_Cards,Wallets_Crypto_Balance } from './index'
import Wallets_Fiat_Balance from './Wallets Fiat Balance List/Wallets_Fiat_Balance'
const Wallets = () => {
  return (
    <div className='urcrypto_dashboard_wallets'>
    <Wallets_Balance_Cards/>
    <Wallets_Fiat_Balance_List/>
    <Wallets_Crypto_Balance/>
    </div>
  )
}

export default Wallets