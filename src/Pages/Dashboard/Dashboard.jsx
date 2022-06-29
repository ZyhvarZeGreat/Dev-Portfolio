import React from 'react'
import './Dashboard.css'
import { Dashboard_Content,Dashboard_Header,Dashboard_Sidenav } from '../../Dashboard_Components'
const Dashboard = () => {
  return (
    <div className="urcrypto_dashboard">
<Dashboard_Sidenav/>
<Dashboard_Header/>
<Dashboard_Content/>   
    </div>
  )
}

export default Dashboard