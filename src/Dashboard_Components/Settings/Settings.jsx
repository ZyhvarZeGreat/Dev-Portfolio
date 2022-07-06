import React from 'react'
import './Settings.css'
import {Outlet} from 'react-router-dom'
import './Settings_Content'
import settings_content_data from './settings_content_data'
import Settings_Content from './Settings_Content'
const Settings = () => {
const settings_content_items = settings_content_data.map(({id,to,link,icon}) => {
  return(
      <Settings_Content key={id} to={to} icon={icon} link={link}/>
        )
  
})
  return (
    <div className="urcrypto_dashboard_settings">
    <div className="urcrypto_dashboard_settings_nav">
    <div className='urcrypto_dashboard_settings_nav_container'>
    <h1>Settings</h1>
      <div className='urcrypto_dashboard_settings_nav_content'>
      {settings_content_items}
      </div>
    </div>
    
    </div>
    <div className="urcrypto_dashboard_settings_items">
      <Outlet/>
    </div>
    </div>
  )
}

export default Settings