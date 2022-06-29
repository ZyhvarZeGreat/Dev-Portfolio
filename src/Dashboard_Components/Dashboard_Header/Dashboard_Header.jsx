import React, { useState } from 'react'
import {UilCreateDashboard} from '@iconscout/react-unicons'
const Dashboard_Header = () => {
  const [opened, setopened] = useState(false)
  return (
    <div className='urcrypto_dashboard_header'>
         <button onclick={()=>setopened(!opened)} className> <UilCreateDashboard/> </button>
    Dashboard_Header
    
    </div>
  )
}

export default Dashboard_Header