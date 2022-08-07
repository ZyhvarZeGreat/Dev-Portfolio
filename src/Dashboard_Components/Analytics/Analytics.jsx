import React from 'react'
import './Analytics.css'
import {Account_Value,Cashflow,Profits,Revenue,Watchlist,Performance} from './index'
const Analytics = () => {
  return (
    <div className = "urcrypto_dashboard_analytics">
    <div className = "urcrypto_dashboard_analytics_header">
      <h1> Analysis of your Account</h1>
      <p>Here's what's going on</p>
    </div>
    <div className = "urcrypto_dashboard_analytics_container">
    <Account_Value/>
    <Performance/>
<Cashflow/>
<Profits/>
<Revenue/>
<Watchlist/>

    </div>

    
    </div>
  )
}

export default Analytics