import React from 'react'
import { Link } from 'react-router-dom'
const Settings_Content = (props) => {
  return (
    <div  className='urcrypto_dashboard_settings_nav_link_container'>
        <Link to = {props.to}>
        {props.icon}
<p> {props.link} </p>

        </Link>
    </div>
  )
}

export default Settings_Content