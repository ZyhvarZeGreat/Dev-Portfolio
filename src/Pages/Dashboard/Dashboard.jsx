import React, { useState } from 'react'
import './Dashboard.css'
import { Dashboard_Content,Dashboard_Header,Dashboard_Sidenav } from '../../Dashboard_Components'
const Dashboard = () => {
  const [opened,setOpened] = useState("slidein")
  return (
    <div className="urcrypto_dashboard">
<Dashboard_Sidenav opened={opened}/>
<Dashboard_Header setopened={setOpened}/>
<Dashboard_Content/>   
    </div>
  )
}

export default Dashboard