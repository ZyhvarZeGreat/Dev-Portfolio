import React from 'react'
import './Dashboard_Content.css'
import { Outlet } from 'react-router-dom'
const Dashboard_Content = () => {
  return (
    <div className="urcrypto_dashboard_content">
 <Outlet/>
    </div>
  )
}

export default Dashboard_Content