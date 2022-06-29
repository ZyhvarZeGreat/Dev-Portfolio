import React from 'react'
import { Link } from 'react-router-dom'

const Side_nav_link = (props) => {
  return (
 <Link to = {props.to}>
{props.icon}
<p>{props.link}</p>
 </Link>
  )
}

export default Side_nav_link