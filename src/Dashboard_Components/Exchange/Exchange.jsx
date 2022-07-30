import React from 'react'
import './Exchange.css'
import {Credit_Card_Purchase,Crypto_Convert,Top_Up} from './index'
const Exchange = () => {
  return (
    
    <div className='urcrypto_dashboard_exchange'>
  <div className='urcrypto_dashboard_exchange_container'>

  <div className='urcrypto_dashboard_exchange_top'>
  <Credit_Card_Purchase/>
  </div>

<div className='urcrypto_dashboard_exchange_bottom'>
<Crypto_Convert/>
<Top_Up/>
</div>
  </div>
    </div>
  )
}

export default Exchange