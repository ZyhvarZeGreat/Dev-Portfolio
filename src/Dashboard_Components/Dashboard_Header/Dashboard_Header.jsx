import React, { useState } from 'react'
import {UilCreateDashboard,UilSearchAlt} from '@iconscout/react-unicons'
const Dashboard_Header = () => {
  const [opened, setopened] = useState(false)
  return (
    <div className='urcrypto_dashboard_header'>
         <div className='urcrypto_dashboard_header_container'>
          <div className='urcrypto_dashboard_header_text'>
            <h1> Welcome Zyhvar</h1>
            <p>lets get started</p>
          </div>

          <div className='urcrypto_dashboard_header_actions'>
            <input type= 'text' placeholder='Search'/>
          </div>
         </div>
    
    </div>
  )
}

export default Dashboard_Header