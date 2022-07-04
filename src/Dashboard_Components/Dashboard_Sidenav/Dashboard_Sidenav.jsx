import React, { useState } from 'react'
import './Dashboard_Sidenav.css'
import {UilCreateDashboard,  UilEstate,UilAnalytics, UilMoneybagAlt,UilWallet,UilExchange,UilSlidersV,UilInfo, UilSignout } from '@iconscout/react-unicons'
import Side_nav_link from './Side_nav_link'
import {useIsSmall} from '../../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import Logo from '../../assets/dashboardLogo.png'
let sidenav_links = [
  {
    id:"1",
    to: "Home",
    link:"Dashboard",
    icon: <UilEstate/>
  },
  {
    id:"2",
    to: "Analytics",
    link:"Analytics",
    icon: <UilAnalytics/>
  },
  {
    id:"3",
    to: "Portfolio",
    link:"My Portfolio",
    icon: <UilMoneybagAlt/>
  },
  {
    id:"4",
    to: "Wallets",
    link:"My Wallets",
    icon: <UilWallet/>
  },
  {
    id:"5",
    to: "Exchanges",
    link:"Exchanges",
    icon: <UilExchange/>
  },
  {
    id:"6",
    to: "Settings",
    link:"Settings",
    icon: <UilSlidersV/>
  },
  {
    id:"7",
    to: "Help",
    link:"Help",
    icon: <UilInfo/>
  },
  {
    id:"8",
    to: "/",
    link:"Log out",
    icon: <UilSignout/>
  },
]


const Dashboard_Sidenav = ({}) => {
  const[opened,setOpened] = useState(false)
  const isSmall = useIsSmall()  

  const side_nav_variants = {
    slidein:{
      opapcity:0,
      x:-300
    },
    slideout:{
      opacity:1,
      x:0
    }
  }
  const sidenav_items = sidenav_links.map(({id,to,link,icon})=>{
    return(
<Side_nav_link to = {to} id = {id} link = {link} icon = {icon} />
    )

  })
  return (
    <motion.div variants={side_nav_variants} initial={"slidein"}  animate={isSmall && opened ? "slidein" : "slideout"} className='urcrypto_dashboard_sidenav'>
   
    <div className= 'urcrypto_dashboard_sidenav_container'>
      <div className= 'urcrypto_dashboard_sidenav_header'>
         <img src = {Logo} alt= 'sidenav logo'/> 
         <button onClick={()=> setOpened(!opened)}>
<UilCreateDashboard/>
    </button>
      </div>
         <div className= 'urcrypto_dashboard_sidenav_links_container'>
{sidenav_items}
        </div>
      
  
    </div>
    </motion.div>
  )
}

export default Dashboard_Sidenav