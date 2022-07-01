import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useIsSmall} from '../../hooks/useMediaQuery'

const Side_nav_link = (props) => {
  const isSmall = useIsSmall
  
  return (

 <Link to = {props.to}>
{props.icon}
{isSmall && <p>{props.link}</p>}
 </Link>
  )
}

export default Side_nav_link