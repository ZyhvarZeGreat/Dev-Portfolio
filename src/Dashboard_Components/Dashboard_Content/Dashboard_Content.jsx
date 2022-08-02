import React from 'react'
import './Dashboard_Content.css'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from "../../Services/contexts/AuthContext";
const Dashboard_Content = () => {
  return (
    <div className="urcrypto_dashboard_content">
    <AuthProvider>
 <Outlet/>
 </AuthProvider>
    </div>
  )
}

export default Dashboard_Content