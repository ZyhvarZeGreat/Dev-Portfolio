import React from 'react'
import {UilCircle} from '@iconscout/react-unicons'
const Portfolio_Summary_Account = (props) => {
  return (
    <div className='urcrypto_dashboard_portfolio_summary_charts_accounts_icons'>
      {props.svg}
<img src = {`../Images/${props.image}`} alt= "crypto"/>
<p> {props.crypto_desc} </p>
<p> {props.crypto_amount} </p>
    </div>
  )
}

export default Portfolio_Summary_Account
