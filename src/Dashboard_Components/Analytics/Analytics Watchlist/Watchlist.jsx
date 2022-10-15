import React from 'react'
import './Watchlist.css'
import Table_Data from '../../Wallets/Wallets Crypto Balance List/Table_Data'

const Watchlist = () => {
  return (
    <div className='urcrypto_dashboard_analytics_watchlist'>
    <div className='urcrypto_dashboard_analytics_watchlist_header'>
      <h3> Wallet Watchlist</h3>
    </div>
{console.log(Table_Data)}
    <div className='urcrypto_dashboard_analytics_watchlist_list'>
      <h3>List</h3>
    </div>
    </div>
  )
}

export default Watchlist