import React from 'react'
import './Portfolio.css'
import {Portfolio_Summary,Portfolio_Wallet_Balance,Portfolio_Orders} from './index'
const Portfolio = () => {
  return (
    <div className='urcrypto_dashboard_portfolio'>
    <div className="urcrypto_dashboard_portfolio_container">
    <Portfolio_Summary/>
  <Portfolio_Wallet_Balance/>
<Portfolio_Orders/>    
    </div>

    </div>
  )
}

export default Portfolio